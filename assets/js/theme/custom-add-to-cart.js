import 'regenerator-runtime';
import utils from '@bigcommerce/stencil-utils';
import { getSingleProductQuery } from './get-single-product-query';
import { getProductsQuery } from './get-products-query';
import { fetchCartGrandTotal } from './custom-cart-nav-grand-total';

const fetchGraphQLData = async query => {
    const queryOptions = {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${bearerToken}` },
        body: JSON.stringify({
            query,
        }),
    };

    try {
        const response = await fetch('/graphql', queryOptions);
        const result = await response.json();

        if (!result || !result.data) {
            throw new Error('Invalid GraphQL response');
        }

        return result.data;
    } catch (error) {
        console.error('GraphQL error:', error);
        throw error;
    }
};

const getProducts = async (productIDs) => {
    const query = getProductsQuery(productIDs);
    return fetchGraphQLData(query);
};

const getSingleProduct = async (productID) => {
    const query = getSingleProductQuery(productID);
    return fetchGraphQLData(query);
};

const formatProduct = product => {
    const variantsWithValues = product.variants.edges.map(variantEdge => {
        const variant = variantEdge.node;
        const option = variant.options.edges[0]?.node;
        const optionValue = option?.values.edges[0]?.node.label || null;

        if (!option) {
            return null;
        }

        return {
            sku: variant.sku,
            stock: variant.inventory.isInStock,
            optionDisplayName: option?.displayName || '',
            optionEntityId: option?.entityId || null,
            price: variant.prices.basePrice.value,
            optionValue,
        };
    });

    const B2BCustomField = product?.customFields?.edges.map(field => ({ name: field.node.name, value: field.node.value })).find(field => field.name === 'B2Boptions');
    const QtyPerUnitCustomField = product?.customFields?.edges.map(field => ({ name: field.node.name, value: field.node.value })).find(field => field.name === 'QtyPerUnit');

    return {
        entityId: product.entityId,
        variants: variantsWithValues[0] === null ? [] : variantsWithValues,
        B2BCustomField: B2BCustomField || null,
        QtyPerUnitCustomField: QtyPerUnitCustomField || null,
        isInStock: product.inventory.isInStock,
    };
};

const getFormattedProductData = async productIDs => {
    const products = await getProducts(productIDs);
    return products.site.products.edges.map(productEdge => {
        const product = productEdge.node;
        return formatProduct(product);
    });
};

const getFormattedSingleProduct = async productID => {
    const product = await getSingleProduct(productID);
    return formatProduct(product.site.product);
};

const qtyTemplate = (label, sku) => `
        <div id="qty-${sku}" style="margin: auto">
            <p style="font-size: 0.75rem; margin-bottom: 3px">${label}</p>
            <div class="input-box">
                <button class="dec qty-input"></button>
                 <input class="qty-input" type="number" value="0" min="0" max="1000" data-sku="${sku}">
                 <button class="inc qty-input"></button>
            </div>
        </div>
    `;
const getCart = () => new Promise((resolve, reject) => {
    utils.api.cart.getCart({}, (err, response) => {
        if (err) {
            reject(err);
        } else {
            resolve(response);
        }
    });
});

const updateCartQuantity = cart => {
    const qty = cart ? cart.lineItems.physicalItems.reduce((acc, current) => acc + current.quantity, 0) : 0;
    $('body').trigger('cart-quantity-update', qty);
    if (!qty) {
        $('.navUser-item--cart').removeClass('show');
    }
};

const addProductToCart = async (sku, qty) => {
    await fetch(`/cart.php?action=add&sku=${sku}&qty=${qty}`)
        .then(async (response) => {
            if (!response.ok) {
                throw new Error(`Failed to add product to cart. Status: ${response.status}`);
            }
            updateCartQuantity(await getCart());
            fetchCartGrandTotal();
        })
        .catch(error => {
            console.error('Error adding product to cart:', error);
        });
};

const updateCurrentProduct = async (itemId, newQty) => {
    await utils.api.cart.itemUpdate(itemId, newQty, async () => {
        updateCartQuantity(await getCart());
        fetchCartGrandTotal();
    });
};


const disableElement = $inputElement => {
    $inputElement.prop('disabled', true);
    $inputElement.css('background-color', '#f4f4f4');
};

const enableElement = $inputElement => {
    $inputElement.prop('disabled', false);
    $inputElement.css('background-color', 'transparent');
};

const onInputChange = async $input => {
    const qtyInputElements = $('.input-box').find('.qty-input');
    disableElement(qtyInputElements);

    const qty = $input.val();
    const sku = $input.data('sku');
    const cart = await getCart();

    if (!cart) {
        await addProductToCart(sku, qty);
        $('.navUser-item--cart').addClass('show');
        enableElement(qtyInputElements);
        return;
    }

    const currentProduct = cart.lineItems.physicalItems.find(product => product.sku === sku);

    if (!currentProduct) {
        await addProductToCart(sku, qty);
        enableElement(qtyInputElements);
        return;
    }

    await updateCurrentProduct(currentProduct.id, qty);

    enableElement(qtyInputElements);
};

const qtyButtonEvent = $selector => {
    $selector.find('button').unbind('click').on('click', (e) => {
        const currentValue = $selector.find('input').val();
        const increment = $(e.target).hasClass('dec') ? -1 : 1;
        const newValue = +currentValue + increment;
        const $input = $selector.find('input');
        $input.val(newValue > 0 ? newValue : 0);
        onInputChange($input);
    });
};


const qtyChange = $input => {
    $input.on('change', function () {
        let newValue = parseInt($(this).val(), 10);
        newValue = Math.min(1000, Math.max(0, newValue));
        $(this).val(newValue);

        onInputChange($(this));
    });
};

const renderBoxActions = function (sku, cart) {
    const $box = $(`#qty-${sku}`);
    const $input = $(`[data-sku="${sku}"]`);
    qtyButtonEvent($box);
    qtyChange($input);

    if (cart) {
        const product = cart.lineItems.physicalItems.find(item => item.sku === sku);
        if (product) {
            $input.val(product.quantity);
        }
    }
};

const renderQtyPerUnit = (currentProduct, $productCard) => {
    if (!currentProduct.QtyPerUnitCustomField) {
        return;
    }
    const B2BOptionsField = currentProduct?.B2BCustomField.value.split(',');
    const qtyPerUnitField = currentProduct?.QtyPerUnitCustomField.value.split(',');
    function findNumber(array1, array2) {
        for (const element2 of array2) {
            for (const element1 of array1) {
                if (element2.includes(element1)) {
                    return element2;
                }
            }
        }
        return null;
    }
    const result = findNumber(B2BOptionsField, qtyPerUnitField);
    if (result) {
        const necessaryProductVariant = currentProduct.variants.find(variant => variant.optionValue === result.split(':')[0]);
        const pricePerUnit = (necessaryProductVariant.price / result.split(':')[1]).toFixed(2);
        $productCard.find('.price-per-unit').text(`Price Per Unit: $${pricePerUnit}`);
        $productCard.find('.card-text-price').hide();
        $productCard.find('.productView-price').hide();
    }
};

const renderOOS = () => `
    <div class="alertBox productAttributes-message">
        <div class="alertBox-column alertBox-icon">
            <icon glyph="ic-success" class="icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></icon>
        </div>
        <p class="alertBox-column alertBox-message">Out of Stock</p>
    </div>
`;

const renderPLPQtyBox = async function (productIDs) {
    const formattedData = await getFormattedProductData(productIDs);
    const allPageProducts = $('li.product');
    const cart = await getCart();

    allPageProducts.each(function () {
        const currentProduct = formattedData.filter(product => product.entityId === $(this).data('id'))[0];
        if (!$(this).find('.custom-add-to-cart').is(':empty')) {
            return;
        }

        // renderQtyPerUnit(currentProduct, $(this));
        if (!currentProduct?.isInStock) {
            $(this).find('.custom-add-to-cart').append(renderOOS());
            return;
        }
        if (currentProduct?.variants?.length) {
            currentProduct.variants
                .filter(variant => currentProduct.B2BCustomField.value.split(',').includes(variant.optionValue))
                .forEach(variant => {
                    $(this).find('.custom-add-to-cart').append(qtyTemplate(variant.optionValue, variant.sku));
                    renderBoxActions(variant.sku, cart);
                });
        }
    });
};

const renderPDPQtyBox = async productId => {
    const currentProduct = await getFormattedSingleProduct(productId);
    const cart = await getCart();

    // renderQtyPerUnit(currentProduct, $('.productView'));

    if (currentProduct?.variants?.length) {
        currentProduct.variants
            .filter(variant => currentProduct.B2BCustomField.value.split(',').includes(variant.optionValue))
            .forEach(variant => {
                $('.custom-add-to-cart').append(qtyTemplate(variant.optionValue, variant.sku));
                renderBoxActions(variant.sku, cart);
            });
    }
};

const categoryAsideHeight = () => {
    const prodContainer = $('#product-listing-container');
    const asideContainer = $('.container .isCategoryPage .page-sidebar');
    asideContainer.css('max-height', `${prodContainer.height()}px`);
};

const customAddToCart = async context => {
    const isPDPTemplate = context.template === 'pages/product';

    if (isPDPTemplate || !context.customer) {
        return;
    }

    const allPageProducts = $('li.product').toArray();
    const productIDs = allPageProducts.map(product => $(product).data('id'));
    await renderPLPQtyBox(productIDs);
    categoryAsideHeight();
};

export default customAddToCart;
/*
 Import all product specific js
 */
import PageManager from './page-manager';
import Review from './product/reviews';
import collapsibleFactory from './common/collapsible';
import ProductDetails from './common/product-details';
import videoGallery from './product/video-gallery';
import { classifyForm } from './common/utils/form-utils';
import modalFactory from './global/modal';
import 'regenerator-runtime';
import customAddToCart from './custom-add-to-cart';

export default class Product extends PageManager {
    constructor(context) {
        super(context);
        this.url = window.location.href;
        this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
        this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
        this.reviewModal = modalFactory('#modal-review-form')[0];
    }

    onReady() {
        // Listen for foundation modal close events to sanitize URL after review.
        $(document).on('close.fndtn.reveal', () => {
            if (this.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
                window.history.replaceState(null, document.title, window.location.pathname);
            }
        });

        let validator;

        // Init collapsible
        collapsibleFactory();

        this.productDetails = new ProductDetails($('.productView'), this.context, window.BCData.product_attributes);
        this.productDetails.setProductVariant();

        videoGallery();

        this.bulkPricingHandler();

        const $reviewForm = classifyForm('.writeReview-form');

        if ($reviewForm.length === 0) return;

        const review = new Review({ $reviewForm });

        $('body').on('click', '[data-reveal-id="modal-review-form"]', () => {
            validator = review.registerValidation(this.context);
            this.ariaDescribeReviewInputs($reviewForm);
        });

        $reviewForm.on('submit', () => {
            if (validator) {
                validator.performCheck();
                return validator.areAll('valid');
            }

            return false;
        });

        this.productReviewHandler();
        customAddToCart(this.context);
        this.hideProductVariations();
        this.renderTable();
    }

    ariaDescribeReviewInputs($form) {
        $form.find('[data-input]').each((_, input) => {
            const $input = $(input);
            const msgSpanId = `${$input.attr('name')}-msg`;

            $input.siblings('span').attr('id', msgSpanId);
            $input.attr('aria-describedby', msgSpanId);
        });
    }

    productReviewHandler() {
        if (this.url.indexOf('#write_review') !== -1) {
            this.$reviewLink.trigger('click');
        }
    }

    bulkPricingHandler() {
        if (this.url.indexOf('#bulk_pricing') !== -1) {
            this.$bulkPricingLink.trigger('click');
        }
    }

    async hideProductVariations() {
        const isB2BStore = this.context.settings.channel_id === 1;
        const productCustomFields = this.context.product?.custom_fields;
        if (!productCustomFields?.length) {
            return;
        }

        let optionsToShow = null;

        productCustomFields.forEach(field => {
            const isB2BOptions = isB2BStore ? field.name === 'B2Boptions' : field.name === 'B2Coptions';
            if (isB2BOptions) {
                optionsToShow = field.value.split(',').map(item => item.toString());
            }
        });


        const allInputs = $('[data-product-option-change]').find('input');
        const allOptions = $('[data-product-option-change]').find('option');

        if (!optionsToShow) {
            allOptions.each(function () {
                $(this).remove();
            });

            allInputs.each(function () {
                $(this).next('label').remove();
                $(this).remove();
            });
        } else {
            allOptions.each(function () {
                const optionValue = String($(this).data('label'));
                if (this.innerText.trim() !== 'Choose Options' && !optionsToShow.includes(optionValue)) {
                    $(this).remove();
                }
            });

            allInputs.each(function () {
                const optionValue = String($(this).data('label'));

                if (!optionsToShow.includes(optionValue)) {
                    $(this).next('label').remove();
                    $(this).remove();
                }
            });
        }
        $('.form-field').each(function () {
            if ($(this).find('input, option').length === 0) {
                $(this).remove();
            }
        });

        const product = await this.getProducts();
        function filterVariantsByValueLabels(productData, valueLabels) {
            return productData.site.product.variants.edges.filter((variant) => {
                const optionLabels = variant.node.options.edges.map((option) => option.node.values.edges.map((value) => value.node.label));

                // Check if at least one option label doesn't exist in the array of value labels
                return optionLabels.every((labels) => labels.some((label) => valueLabels.includes(label)));
            });
        }
        function calculatePriceRange(variants) {
            const prices = variants.map((variant) => variant.node.prices.basePrice.value);
            const minPrice = Math.min(...prices);
            const maxPrice = Math.max(...prices);

            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            });

            const formattedMinPrice = formatter.format(minPrice);
            const formattedMaxPrice = formatter.format(maxPrice);

            return minPrice === maxPrice ? formattedMinPrice : `${formattedMinPrice} - ${formattedMaxPrice}`;
        }

        const filteredVariants = filterVariantsByValueLabels(product, optionsToShow);
        $('.productView-details .price--withoutTax').text(calculatePriceRange(filteredVariants));
    }
    getProductQuery(productId) {
        return `query productById {
                  site {
                    product(entityId: ${productId}) {
                      id
                      entityId
                      name
                      variants {
                        edges {
                          node {
                            prices {
                              basePrice {
                                value
                              }
                            }
                            options {
                              edges {
                                node {
                                  displayName
                                  values {
                                    edges {
                                      node {
                                        label
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }`;
    }

    async getProducts() {
        const queryOptions = {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${bearerToken}` },
            body: JSON.stringify({
                query: this.getProductQuery(this.context.product.id),
            }),
        };

        try {
            return await fetch('/graphql', queryOptions)
                .then(res => res.json())
                .then(result => result.data);
        } catch (error) {
            console.log('error', error);
        }
    }

    renderTable() {
        const QtyPerUniCustomField = this.context.product.custom_fields.find(field => field.name === 'QtyPerUnit')?.value;
        const QtyPerUnitField = QtyPerUniCustomField.startsWith(',') ? QtyPerUniCustomField.slice(1) : QtyPerUniCustomField;
        const deleteUnnecessaryWords = (label, symbol) => {
            const words = label.split(' ');

            words.every((word, index) => {
                if (word.toLowerCase() === symbol) {
                    words[index] = '';
                    words[index + 1] = '';
                }
                return true;
            });

            return words.join(' ');
        };

        if (!QtyPerUnitField) {
            return;
        }

        const QtyPerUnitValues = QtyPerUnitField
            .replace('1 UNIT:1,', '')
            .split(/[:,]/)
            .filter(Boolean);

        if (QtyPerUnitValues[0]?.includes('SET')) {
            QtyPerUnitValues.splice(0, 2);
        }

        $('.pack-1-name').text(`${deleteUnnecessaryWords(QtyPerUnitValues[0], 'of')} Qty`);
        $('.pack-1-value').text(`${QtyPerUnitValues[1]}`);
        $('.pack-2-name').text(`${deleteUnnecessaryWords(QtyPerUnitValues[2], 'of')} Qty`);
        $('.pack-2-value').text(`${QtyPerUnitValues[3]}`);
    }
}

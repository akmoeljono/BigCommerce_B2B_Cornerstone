import 'focus-within-polyfill';

import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import privacyCookieNotification from './global/cookieNotification';
import carousel from './common/carousel';
import svgInjector from './global/svg-injector';
import 'regenerator-runtime/runtime';
import { productIsInStock } from './custom-check-stock';

export default class Global extends PageManager {
    onReady() {
        const { cartId, secureBaseUrl } = this.context;
        cartPreview(secureBaseUrl, cartId);
        quickSearch(this.context);
        currencySelector(cartId);
        foundation($(document));
        quickView(this.context);
        carousel(this.context);
        menu();
        mobileMenuToggle();
        privacyCookieNotification();
        svgInjector();

        /* BundleB2B */
        const $body = $('body');
        const B3StorefrontURL = 'https://cdn.bundleb2b.net/b3-auto-loader.js';
        $body.append(`<script src="${B3StorefrontURL}"></script>`);

        window.b3themeConfig = window.b3themeConfig || {};

        window.b3themeConfig.useText = {
            'global.user.masquerade.begin.button': 'Create New Order',
            'global.user.masquerade.end.button': 'End Order',
            'nav.button.shoppinglists': 'Order Drafts',
            'shopping.list.title': 'Order Drafts',
            'shopping.list.create.button': 'Create New Order Draft',
            'shopping.list.edit.info.button': 'Edit Draft Info',
            'shopping.list.add.to.list.title': 'Draft',
            'shopping.list.edit.modal.title': 'Edit Order Draft',
            'shopping.list.edit.modal.form.name.label': 'Order Draft Name',
            'shopping.list.createModal.title.label': 'Duplicate Order Draft',
            'shopping.list.creatNewListBtn': 'Add to a New Draft',
            'shopping.list.addToBtn': '{name}',
            'orders.add.to.new.shopping.list.button': 'Order Drafts',
            'order.addTo.shoppingListBtn': 'Order Drafts',
            'buyAgain.addToShoppingList.btn': 'Order Drafts',
            'buyAgain.createModal.title.label': 'Create New Order Draft',
            'buyAgain.createModal.name.label': 'Order Draft Name',
            'buyAgain.createModal.name.required': 'Order Draft Name is required',
            'buyAgain.chooseModal.title.label': 'Choose Order Draft',
            'tips.chooseShoppingList': 'Choose Order Draft',
            'tips.addToShoppingListSuccess': 'Product(s) added to the order draft successfully.',
            'tips.confirmDeleteShoppingList': 'Are you sure you want to delete this order draft?',
            'tips.deleteShoppingListFailed': 'Order Draft was not deleted. Please try again.',
            'tips.shoppingListExist': 'The order draft you are to looking is not exist.',
            'tips.shoppingListUpdateSuccess': 'Order Draft Info changed successfully',
            'tips.confirmDeleteShoppingListItem': 'Are you sure you want to delete selected item(s) from the order draft?',
            'tips.deleteShoppingListItemSuccess': 'Product(s) deleted from the order draft successfully',
            'dashboard.top.salesInfo.label': 'Account Name:',
            'dashboard.company.selected': 'Selected',
        };

        window.b3themeConfig.useStyles = {
            'dashboard.head.info.left' : {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                fontSize: '0.8rem'
            },
            'dashboard.head.info.right' : {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem'
            }
        };

        window.b3themeConfig.useJavaScript = {
            login: {
                callback(instance) {
                    const {
                        context: {
                            inDevelopment,
                        },
                        isB2BUser,
                    } = instance;

                    if (inDevelopment) {
                        console.log(instance.name, instance);
                    }

                    const showBCOrdersContent = () => {
                        const style = `
                            <style>
                                .page_type__account_orderstatus .body .container .account {
                                    display: block !important;
                                }
                            </style>
                        `;
                        $('head').append(style);
                    };

                    if (!isB2BUser) {
                        showBCOrdersContent();
                    }

                    const companyId = instance.utils.B3Storage.B3CompanyId.value;
                    localStorage.setItem('companyId', companyId);
                },
            },
            orders: {
                callback(instance) {
                    const {
                        context: {
                            inDevelopment,
                        },
                        isB2BUser,
                    } = instance;

                    if (inDevelopment) {
                        console.log(instance.name, instance);
                    }

                    const fixClasslist = () => {
                        $('.order-lists-wrap').addClass('account');
                    };

                    const showB3OrdersContent = () => {
                        const style = `
                            <style>
                                .page_type__account_orderstatus .body .container .order-lists-wrap {
                                    display: block !important;
                                }
                            </style>
                        `;
                        $('head').append(style);
                    };

                    if (isB2BUser) {
                        fixClasslist();
                        showB3OrdersContent();
                    }
                },
            },
            shoppinglist: {
                callback() {
                    // select all checkboxes by default on Order Drafts
                    $('#shopping_list_table').find('input:checkbox').prop('checked', true);

                    const displayOOSInOrderDraft = () => {
                        $('#shopping_list_table > tbody > tr').each(function() {
                            const product_id = $(this).attr('data-product-id');
                            productIsInStock(product_id.toString()).then((isInStock) => {
                                if (!isInStock) {
                                    $('#shopping_list_table').find(`tr[data-product-id="${product_id}"]`).find('td.col-product-qty').empty();
                                    $('#shopping_list_table').find(`tr[data-product-id="${product_id}"]`).find('td.col-product-qty').text('Out of Stock');
                                    $('#shopping_list_table').find(`tr[data-product-id="${product_id}"]`).find('td.col-product-qty').css('color', 'red');
                                }
                            });
                        });
                    };

                    displayOOSInOrderDraft();
                },
            },
        };
        
        /* BundleB2B */
        this.getCompanyFields();
        this.redirectFromDashboard();
    }
    

    async getCompanyFields() {
        const hostUrl = window.location.origin;
        const customer = this.context.customer;
        const options = { method: 'GET', credentials: 'same-origin', headers: { Accept: 'application/json', 'Content-Type': 'application/json' } };
        const listeners = [];
        const doc = window.document;
        const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        if (!customer) return;
        let observer;

        function check() {
            // Check the DOM for elements matching a stored selector
            for (let i = 0, len = listeners.length, listener, elements; i < len; i++) {
                listener = listeners[i];
                // Query for elements matching the specified selector
                elements = doc.querySelectorAll(listener.selector);
                for (let j = 0, jLen = elements.length, element; j < jLen; j++) {
                    element = elements[j];
                    // Make sure the callback isn't invoked with the
                    // same element more than once
                    if (!element.ready) {
                        element.ready = true;
                        // Invoke the callback with the element
                        listener.fn.call(element, element);
                    }
                }
            }
        }

        function ready(selector, fn) {
            // Store the selector and callback to be monitored
            listeners.push({
                selector,
                fn,
            });
            if (!observer) {
                // Watch for changes in the document
                observer = new MutationObserver(check);
                observer.observe(doc.documentElement, {
                    childList: true,
                    subtree: true,
                });
            }
            // Check if the element is currently in the DOM
            check();
        }

        try {
            const getToken = await fetch(`${hostUrl}/customer/current.jwt?app_client_id=dl7c39mdpul6hyc489yk0vzxl6jesyx`, options)
                .then(response => response.json())
                .then(result => result.token);

            const getB2BTokenUrl = `https://api.bundleb2b.net/api/io/auth/storefront?jwtToken=${getToken}`;
            const getB2BToken = await fetch(getB2BTokenUrl, options)
                .then(response => response.json())
                .then(result => result.data.token);

            const b2bOptions = {
                method: 'GET',
                credentials: 'same-origin',
                headers:
                {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    authToken: getB2BToken,
                },
            };

            const getUsrUrl = `https://api-b2b.bigcommerce.com/api/v2/companies/validations/backend/user-emails/${customer.email}?role=4`;
            const valEmail = await fetch(getUsrUrl, b2bOptions)
                .then(response => response.json())
                .then(result => result);

            ready('.container.c00110', async () => {
                if ($('.container.c00110').length > 0 && valEmail.data.userInfo.id) {
                    const userId = valEmail.data.userInfo.id;
                    const getSuperAdmCompanys = await fetch(`https://api-b2b.bigcommerce.com/api/v2/sales-reps/${userId}/companies`, b2bOptions)
                        .then(response => response.json())
                        .then(result => result);

                    const companyId = localStorage.getItem('companyId');
                    if (companyId && getSuperAdmCompanys.data.list?.length > 0) {
                        const superAdminCompany = getSuperAdmCompanys.data.list.find(company => company.companyId === companyId.toString());

                        if (superAdminCompany) {
                            superAdminCompany.extraFields.forEach(element => {
                                if (element.fieldName === 'Account ID') {
                                    const newText = `Account ID: ${element.fieldValue}`;
                                    $('<span></span>').text(newText).addClass('custom_acc_id').appendTo('.container.c00110>.c00111');
                                }
                            });
                        }
                    }
                }
            });

            if (window.location.pathname === '/dashboard/') {
                ready('.responsive-table.table-active-user.c00128', async () => {
                    const table = document.querySelector('#sale-rep-table');
                    const waitImg = $('.b2b-loading-overlay > img');

                    if (window.innerWidth > 551) {
                        const firstHeadColEl = table.querySelector('thead>tr>th');
                        const lastHeadColEl = table.querySelector('thead>tr>th:last-of-type');

                        // Account Id column
                        const accountIdHeadth = document.createElement('th');
                        accountIdHeadth.innerText = 'Account ID';
                        accountIdHeadth.classList.add('t-align-left');
                        table.querySelector('thead > tr').insertBefore(accountIdHeadth, firstHeadColEl);

                        // DBA column
                        const dbaHeadth = document.createElement('th');
                        dbaHeadth.innerText = 'DBA';
                        dbaHeadth.classList.add('t-align-left');
                        table.querySelector('thead > tr').insertBefore(dbaHeadth, lastHeadColEl);

                        // Company Address column
                        const comAddHeadth = document.createElement('th');
                        comAddHeadth.innerText = 'Company Address';
                        comAddHeadth.classList.add('t-align-left');
                        table.querySelector('thead > tr').insertBefore(comAddHeadth, lastHeadColEl);  
                        
                        // Price List column
                        const prcListHeadth = document.createElement('th');
                        prcListHeadth.innerText = 'Price List';
                        prcListHeadth.classList.add('t-align-left');
                        table.querySelector('thead > tr').insertBefore(prcListHeadth, lastHeadColEl);

                    }

                    $('#sale-rep-table tbody>tr').each((index, element) => {
                        const firstColEl = table.querySelectorAll('tbody>tr')[index].querySelector('td');
                        var lastColEl = table.querySelectorAll('tbody>tr')[index].querySelector('td:last-of-type');
                        const newImg = waitImg.clone().removeAttr('style').css('height', '145px');
                        const newImg2 = waitImg.clone().removeAttr('style').css('height', '40px');

                        // initiating Account Id data col
                        const accountIdTd = document.createElement('td');
                        accountIdTd.classList.add('jsFirstCol', 'accountIdCol');
                        newImg2.appendTo($(accountIdTd));
                        table.querySelectorAll('tbody>tr')[index].insertBefore(accountIdTd, firstColEl);

                        // initiating DBA data col
                        const dbaTd = document.createElement('td');
                        dbaTd.classList.add('dbaCol');
                        newImg2.appendTo($(dbaTd));
                        table.querySelectorAll('tbody>tr')[index].insertBefore(dbaTd, lastColEl);

                        // initiating Address data col
                        const addrTd = document.createElement('td');
                        addrTd.classList.add('jsBeforeLastCol', 'addrCol');
                        newImg2.appendTo($(addrTd));
                        table.querySelectorAll('tbody>tr')[index].insertBefore(addrTd, lastColEl);

                        // initiating Price List data col
                        const prcListTd = document.createElement('td');
                        prcListTd.classList.add('prcListCol');
                        newImg2.appendTo($(prcListTd));
                        lastColEl = table.querySelectorAll('tbody>tr')[index].querySelector('td:last-of-type');
                        table.querySelectorAll('tbody>tr')[index].insertBefore(prcListTd, lastColEl);
                    });

                    const paginationPage = $('.pagination.c00127 .pagination-item--current').attr('data-page');

                    if (paginationPage) {
                        let idsArr = [];
                        let tableRows = $('.b2b-wrap .responsive-table tr.c00130');
                        tableRows.each((index, el) => {
                            idsArr.push($(el).attr('id'));
                        })
                        for (const companyId of idsArr) {
                            const companyInfo = await fetch(`https://api-b2b.bigcommerce.com/api/v2/companies/${companyId}`, b2bOptions)
                            .then(response => response.json())
                            .then(result => result);
                            if (companyInfo.code !== 200) {
                                const tr = document.getElementById(companyId);
                                if (tr) {
                                    const td = tr.querySelector('.addrCol');
                                    td.innerHTML = 'Please end order to see this information';
                                    const firstTd = tr.querySelector('.accountIdCol');
                                    firstTd.innerHTML = '';
                                    const dbaTd = tr.querySelector('.dbaCol');
                                    dbaTd.innerHTML = '';
                                    const prcListTd = tr.querySelector('.prcListCol');
                                    prcListTd.innerHTML = '';
                                }
                            } else {
                                const tr = document.getElementById(companyId);
                                // Account Id col data
                                if (tr) {
                                    const td = tr.querySelector('.jsFirstCol');
                                    let isExist = false;
                                    companyInfo.data.extraFields.forEach(element => {
                                        if (element.fieldName === 'Account ID') {
                                            td.innerHTML = element.fieldValue;
                                            isExist = true;
                                        }
                                    });
                                    if (!isExist) td.innerHTML = '';
                                }
                                // DBA col data
                                if (tr) {
                                    const td = tr.querySelector('.dbaCol');
                                    let isExist = false;
                                    companyInfo.data.extraFields.forEach(element => {
                                        if (element.fieldName === 'DBA') {
                                            td.innerHTML = element.fieldValue;
                                            isExist = true;
                                        }
                                    });
                                    if (!isExist) td.innerHTML = '';
                                }
                                // Address col data
                                if (tr) {
                                    const td = tr.querySelector('.addrCol');
                                    const address = `<p>${companyInfo.data.addressLine1}</p><p>${companyInfo.data.city}</p><p>${companyInfo.data.state}, ${companyInfo.data.country}</p><p>${companyInfo.data.zipCode}</p>`;
                                    td.innerHTML = address;
                                }
                                // Price List col data
                                if (tr) {
                                    const td = tr.querySelector('.prcListCol');
                                    td.innerHTML = companyInfo.data.catalogName;
                                }
                            }
                        }
                    }
                });
            }
        } catch (error) {
            console.log('error', error);
        }
    }

    restrictCustomer(context) {
        const allowedUrls = context.theme_settings['links-for-guest'].split(',');

        if (context.customer) {
            return;
        }

        if (!context.customer && allowedUrls.includes(window.location.pathname)) {
            $('.customOverlay').hide();
            return;
        }

        if (!context.customer && !window.location.pathname.startsWith('/login.php')) {
            $('.customOverlay').show();
            window.location.href = '/login.php';
        } else {
            $('.customOverlay').hide();
        }
    }

    redirectFromDashboard(){
        if (window.location.pathname === '/dashboard/') {
            if (sessionStorage.B3CompanyId) {
                if (!sessionStorage.isStartedMasq) {
                    sessionStorage.setItem('isStartedMasq', true);
                    window.location.href = '/product-catalog/all/all-products/';
                }
            } else {
                sessionStorage.removeItem('isStartedMasq');
            }
        }
    }
}
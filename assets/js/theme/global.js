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

export default class Global extends PageManager {
    onReady() {
        const { cartId, secureBaseUrl } = this.context;
        cartPreview(secureBaseUrl, cartId);
        quickSearch();
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
        };
        /* BundleB2B */
        this.getComnpanyFields();
        this.redirectFromDashboard();
    }

    async getComnpanyFields() {
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
                                    const newText = `Account id: ${element.fieldValue}`;
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
                        const headth = document.createElement('th');
                        headth.innerText = 'Account ID';
                        headth.classList.add('t-align-left');
                        const firstHeadColEl = table.querySelector('thead>tr>th');
                        table.querySelector('thead > tr').insertBefore(headth, firstHeadColEl);
                        const headthAdrr = document.createElement('th');
                        headthAdrr.innerText = 'Company Address';
                        headthAdrr.classList.add('t-align-left');
                        const lastHeadColEl = table.querySelector('thead>tr>th:last-of-type');
                        table.querySelector('thead > tr').insertBefore(headthAdrr, lastHeadColEl);
                    }

                    $('#sale-rep-table tbody>tr').each((index, element) => {
                        const td = document.createElement('td');
                        td.classList.add('jsBeforeLastCol');
                        const newImg = waitImg.clone().removeAttr('style').css('height', '145px');
                        const newImg2 = waitImg.clone().removeAttr('style').css('height', '40px');
                        newImg.appendTo($(td));
                        const lastColEl = table.querySelectorAll('tbody>tr')[index].querySelector('td:last-of-type');
                        table.querySelectorAll('tbody>tr')[index].insertBefore(td, lastColEl);
    
                        const td2 = document.createElement('td');
                        td2.classList.add('jsFirstCol');
                        newImg2.appendTo($(td2));
    
                        const firstColEl = table.querySelectorAll('tbody>tr')[index].querySelector('td');
                        table.querySelectorAll('tbody>tr')[index].insertBefore(td2, firstColEl);
                    })

                    const paginationPage = $('.pagination.c00127 .pagination-item--current').attr('data-page');

                    if (paginationPage) {
                        let idsArr = [];
                        let tableRows = $('.b2b-wrap .responsive-table tr.c00130');
                        tableRows.each((index, el) => {
                            idsArr.push($(el).attr('id'));
                        })
                        for (const companyId of idsArr) {
                            const companiInfo = await fetch(`https://api-b2b.bigcommerce.com/api/v2/companies/${companyId}`, b2bOptions)
                            .then(response => response.json())
                            .then(result => result);
                            if (companiInfo.code !== 200) {
                                const tr = document.getElementById(companyId);
                                if (tr) {
                                    const td = tr.querySelector('.jsBeforeLastCol');
                                    td.innerHTML = 'Please end order to see this information';
                                    const firstTd = tr.querySelector('.jsFirstCol');
                                    firstTd.innerHTML = '';
                                }
                            } else {
                                const tr = document.getElementById(companyId);
                                if (tr) {
                                    const td = tr.querySelector('.jsBeforeLastCol');    
                                    td.innerHTML = `<p>${companiInfo.data.addressLine1}</p>`;
                                    td.innerHTML = td.innerHTML + `<p>${companiInfo.data.city}</p>`;
                                    td.innerHTML = td.innerHTML + `<p>${companiInfo.data.state}</p>`;
                                    td.innerHTML = td.innerHTML + `<p>${companiInfo.data.country}</p>`;
                                    td.innerHTML = td.innerHTML + `<p>${companiInfo.data.zipCode}</p>`;
                                    const lastColEl = document.getElementById(companyId).querySelector('td:last-of-type');
                                    document.getElementById(companyId).insertBefore(td, lastColEl);
                                }

                                if (tr) {
                                    const td = tr.querySelector('.jsFirstCol');
                                    let isExist = false;
                                    companiInfo.data.extraFields.forEach(element => {
                                        if (element.fieldName === 'Account ID') {
                                            td.innerHTML = element.fieldValue;
                                            isExist = true;
                                        }
                                    });
                                    if (!isExist) td.innerHTML = '';
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
                    window.location.href = '/product-catalog/all/adhesive-school/';
                }
            } else {
                sessionStorage.removeItem('isStartedMasq');
            }
        }
    }
}

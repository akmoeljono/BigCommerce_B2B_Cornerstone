"use strict";
(self["webpackChunkbigcommerce_cornerstone"] = self["webpackChunkbigcommerce_cornerstone"] || []).push([["assets_js_theme_custom-add-to-cart_js"],{

/***/ "./assets/js/theme/custom-add-to-cart.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/custom-add-to-cart.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _get_single_product_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-single-product-query */ "./assets/js/theme/get-single-product-query.js");
/* harmony import */ var _get_products_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-products-query */ "./assets/js/theme/get-products-query.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




var fetchGraphQLData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(query) {
    var queryOptions, response, result;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          queryOptions = {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
              Authorization: "Bearer " + bearerToken
            },
            body: JSON.stringify({
              query: query
            })
          };
          _context.prev = 1;
          _context.next = 4;
          return fetch('/graphql', queryOptions);
        case 4:
          response = _context.sent;
          _context.next = 7;
          return response.json();
        case 7:
          result = _context.sent;
          if (!(!result || !result.data)) {
            _context.next = 10;
            break;
          }
          throw new Error('Invalid GraphQL response');
        case 10:
          return _context.abrupt("return", result.data);
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);
          console.error('GraphQL error:', _context.t0);
          throw _context.t0;
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 13]]);
  }));
  return function fetchGraphQLData(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getProducts = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(productIDs) {
    var query;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          query = (0,_get_products_query__WEBPACK_IMPORTED_MODULE_3__.getProductsQuery)(productIDs);
          return _context2.abrupt("return", fetchGraphQLData(query));
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getProducts(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getSingleProduct = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(productID) {
    var query;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          query = (0,_get_single_product_query__WEBPACK_IMPORTED_MODULE_2__.getSingleProductQuery)(productID);
          return _context3.abrupt("return", fetchGraphQLData(query));
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getSingleProduct(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var formatProduct = function formatProduct(product) {
  var _product$customFields, _product$customFields2;
  var variantsWithValues = product.variants.edges.map(function (variantEdge) {
    var _variant$options$edge, _option$values$edges$;
    var variant = variantEdge.node;
    var option = (_variant$options$edge = variant.options.edges[0]) == null ? void 0 : _variant$options$edge.node;
    var optionValue = (option == null || (_option$values$edges$ = option.values.edges[0]) == null ? void 0 : _option$values$edges$.node.label) || null;
    if (!option) {
      return null;
    }
    return {
      sku: variant.sku,
      stock: variant.inventory.isInStock,
      optionDisplayName: (option == null ? void 0 : option.displayName) || '',
      optionEntityId: (option == null ? void 0 : option.entityId) || null,
      price: variant.prices.basePrice.value,
      optionValue: optionValue
    };
  });
  var B2BCustomField = product == null || (_product$customFields = product.customFields) == null ? void 0 : _product$customFields.edges.map(function (field) {
    return {
      name: field.node.name,
      value: field.node.value
    };
  }).find(function (field) {
    return field.name === 'B2Boptions';
  });
  var QtyPerUnitCustomField = product == null || (_product$customFields2 = product.customFields) == null ? void 0 : _product$customFields2.edges.map(function (field) {
    return {
      name: field.node.name,
      value: field.node.value
    };
  }).find(function (field) {
    return field.name === 'QtyPerUnit';
  });
  return {
    entityId: product.entityId,
    variants: variantsWithValues[0] === null ? [] : variantsWithValues,
    B2BCustomField: B2BCustomField || null,
    QtyPerUnitCustomField: QtyPerUnitCustomField || null,
    isInStock: product.inventory.isInStock
  };
};
var getFormattedProductData = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(productIDs) {
    var products;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return getProducts(productIDs);
        case 2:
          products = _context4.sent;
          return _context4.abrupt("return", products.site.products.edges.map(function (productEdge) {
            var product = productEdge.node;
            return formatProduct(product);
          }));
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function getFormattedProductData(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var getFormattedSingleProduct = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(productID) {
    var product;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return getSingleProduct(productID);
        case 2:
          product = _context5.sent;
          return _context5.abrupt("return", formatProduct(product.site.product));
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getFormattedSingleProduct(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
var qtyTemplate = function qtyTemplate(label, sku) {
  return "\n        <div id=\"qty-" + sku + "\" style=\"margin: auto\">\n            <p>" + label + "</p>\n            <div class=\"input-box\">\n                <button class=\"dec\"></button>\n                 <input type=\"number\" value=\"0\" min=\"0\" max=\"1000\" data-sku=\"" + sku + "\">\n                 <button class=\"inc\"></button>\n            </div>\n        </div>\n    ";
};
var getCart = function getCart() {
  return new Promise(function (resolve, reject) {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.getCart({}, function (err, response) {
      if (err) {
        reject(err);
      } else {
        resolve(response);
      }
    });
  });
};
var updateCartQuantity = function updateCartQuantity(cart) {
  var qty = cart ? cart.lineItems.physicalItems.reduce(function (acc, current) {
    return acc + current.quantity;
  }, 0) : 0;
  $('body').trigger('cart-quantity-update', qty);
  if (!qty) {
    $('.navUser-item--cart').removeClass('show');
  }
};
var addProductToCart = function addProductToCart(sku, qty) {
  fetch("/cart.php?action=add&sku=" + sku + "&qty=" + qty).then( /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(response) {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            if (response.ok) {
              _context6.next = 2;
              break;
            }
            throw new Error("Failed to add product to cart. Status: " + response.status);
          case 2:
            _context6.t0 = updateCartQuantity;
            _context6.next = 5;
            return getCart();
          case 5:
            _context6.t1 = _context6.sent;
            (0, _context6.t0)(_context6.t1);
          case 7:
          case "end":
            return _context6.stop();
        }
      }, _callee6);
    }));
    return function (_x6) {
      return _ref6.apply(this, arguments);
    };
  }())["catch"](function (error) {
    console.error('Error adding product to cart:', error);
  });
};
var updateCurrentProduct = function updateCurrentProduct(itemId, newQty) {
  _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.itemUpdate(itemId, newQty, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.t0 = updateCartQuantity;
          _context7.next = 3;
          return getCart();
        case 3:
          _context7.t1 = _context7.sent;
          (0, _context7.t0)(_context7.t1);
        case 5:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  })));
};
var onInputChange = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8($input) {
    var qty, sku, cart, currentProduct;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          qty = $input.val();
          sku = $input.data('sku');
          _context8.next = 4;
          return getCart();
        case 4:
          cart = _context8.sent;
          if (cart) {
            _context8.next = 9;
            break;
          }
          addProductToCart(sku, qty);
          $('.navUser-item--cart').addClass('show');
          return _context8.abrupt("return");
        case 9:
          currentProduct = cart.lineItems.physicalItems.find(function (product) {
            return product.sku === sku;
          });
          if (currentProduct) {
            _context8.next = 13;
            break;
          }
          addProductToCart(sku, qty);
          return _context8.abrupt("return");
        case 13:
          updateCurrentProduct(currentProduct.id, qty);
        case 14:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function onInputChange(_x7) {
    return _ref8.apply(this, arguments);
  };
}();
var qtyButtonEvent = function qtyButtonEvent($selector) {
  $selector.find('button').on('click', function (e) {
    var currentValue = $selector.find('input').val();
    var increment = $(e.target).hasClass('dec') ? -1 : 1;
    var newValue = +currentValue + increment;
    var $input = $selector.find('input');
    $input.val(newValue > 0 ? newValue : 0);
    onInputChange($input);
  });
};
var qtyChange = function qtyChange($input) {
  $input.on('change', function () {
    var newValue = parseInt($(this).val(), 10);
    newValue = Math.min(1000, Math.max(0, newValue));
    $(this).val(newValue);
    onInputChange($(this));
  });
};
var renderBoxActions = function renderBoxActions(sku, cart) {
  var $box = $("#qty-" + sku);
  var $input = $("[data-sku=\"" + sku + "\"]");
  qtyButtonEvent($box);
  qtyChange($input);
  if (cart) {
    var product = cart.lineItems.physicalItems.find(function (item) {
      return item.sku === sku;
    });
    if (product) {
      $input.val(product.quantity);
    }
  }
};
var renderQtyPerUnit = function renderQtyPerUnit(currentProduct, $productCard) {
  if (!currentProduct.QtyPerUnitCustomField) {
    return;
  }
  var B2BOptionsField = currentProduct == null ? void 0 : currentProduct.B2BCustomField.value.split(',');
  var qtyPerUnitField = currentProduct == null ? void 0 : currentProduct.QtyPerUnitCustomField.value.split(',');
  function findNumber(array1, array2) {
    for (var _iterator = _createForOfIteratorHelperLoose(array2), _step; !(_step = _iterator()).done;) {
      var element2 = _step.value;
      for (var _iterator2 = _createForOfIteratorHelperLoose(array1), _step2; !(_step2 = _iterator2()).done;) {
        var element1 = _step2.value;
        if (element2.includes(element1)) {
          return element2;
        }
      }
    }
    return null;
  }
  var result = findNumber(B2BOptionsField, qtyPerUnitField);
  if (result) {
    var necessaryProductVariant = currentProduct.variants.find(function (variant) {
      return variant.optionValue === result.split(':')[0];
    });
    var pricePerUnit = (necessaryProductVariant.price / result.split(':')[1]).toFixed(2);
    $productCard.find('.price-per-unit').text("Price Per Unit: $" + pricePerUnit);
    $productCard.find('.card-text-price').hide();
    $productCard.find('.productView-price').hide();
  }
};
var renderOOS = function renderOOS() {
  return "\n    <div class=\"alertBox productAttributes-message\">\n        <div class=\"alertBox-column alertBox-icon\">\n            <icon glyph=\"ic-success\" class=\"icon\" aria-hidden=\"true\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"></path></svg></icon>\n        </div>\n        <p class=\"alertBox-column alertBox-message\">Out of Stock</p>\n    </div>\n";
};
var renderPLPQtyBox = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(productIDs) {
    var formattedData, allPageProducts, cart;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return getFormattedProductData(productIDs);
        case 2:
          formattedData = _context9.sent;
          allPageProducts = $('li.product');
          _context9.next = 6;
          return getCart();
        case 6:
          cart = _context9.sent;
          allPageProducts.each(function () {
            var _this = this,
              _currentProduct$varia;
            var currentProduct = formattedData.filter(function (product) {
              return product.entityId === $(_this).data('id');
            })[0];
            // renderQtyPerUnit(currentProduct, $(this));
            if (!(currentProduct != null && currentProduct.isInStock)) {
              $(this).find('.custom-add-to-cart').append(renderOOS());
              return;
            }
            if (currentProduct != null && (_currentProduct$varia = currentProduct.variants) != null && _currentProduct$varia.length) {
              currentProduct.variants.filter(function (variant) {
                return currentProduct.B2BCustomField.value.split(',').includes(variant.optionValue);
              }).forEach(function (variant) {
                $(_this).find('.custom-add-to-cart').append(qtyTemplate(variant.optionValue, variant.sku));
                renderBoxActions(variant.sku, cart);
              });
            }
          });
        case 8:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function renderPLPQtyBox(_x8) {
    return _ref9.apply(this, arguments);
  };
}();
var renderPDPQtyBox = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(productId) {
    var _currentProduct$varia2;
    var currentProduct, cart;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return getFormattedSingleProduct(productId);
        case 2:
          currentProduct = _context10.sent;
          _context10.next = 5;
          return getCart();
        case 5:
          cart = _context10.sent;
          // renderQtyPerUnit(currentProduct, $('.productView'));

          if (currentProduct != null && (_currentProduct$varia2 = currentProduct.variants) != null && _currentProduct$varia2.length) {
            currentProduct.variants.filter(function (variant) {
              return currentProduct.B2BCustomField.value.split(',').includes(variant.optionValue);
            }).forEach(function (variant) {
              $('.custom-add-to-cart').append(qtyTemplate(variant.optionValue, variant.sku));
              renderBoxActions(variant.sku, cart);
            });
          }
        case 7:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function renderPDPQtyBox(_x9) {
    return _ref10.apply(this, arguments);
  };
}();
var categoryAsideHeight = function categoryAsideHeight() {
  var prodContainer = $('#product-listing-container');
  var asideContainer = $('.container .isCategoryPage .page-sidebar');
  asideContainer.css('max-height', prodContainer.height() + "px");
};
var customAddToCart = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(context) {
    var isPDPTemplate, allPageProducts, productIDs;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          isPDPTemplate = context.template === 'pages/product';
          if (!(isPDPTemplate || !context.customer)) {
            _context11.next = 3;
            break;
          }
          return _context11.abrupt("return");
        case 3:
          allPageProducts = $('li.product').toArray();
          productIDs = allPageProducts.map(function (product) {
            return $(product).data('id');
          });
          _context11.next = 7;
          return renderPLPQtyBox(productIDs);
        case 7:
          categoryAsideHeight();
        case 8:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function customAddToCart(_x10) {
    return _ref11.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customAddToCart);

/***/ }),

/***/ "./assets/js/theme/get-products-query.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/get-products-query.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProductsQuery: () => (/* binding */ getProductsQuery)
/* harmony export */ });
function getProductsQuery(productIds) {
  return "query ExtendedProductsById{\n                   site {\n                     products(entityIds: [" + productIds.join(',') + "], first: 50) {\n                    edges {\n                        node {\n                          name\n                          inventory {\n                            isInStock\n                          }\n                          customFields {\n                            edges {\n                              node {\n                                name\n                                value\n                              }\n                            }\n                          }\n                          variants {\n                            edges {\n                              node {\n                                prices {\n                                  basePrice {\n                                    value\n                                  }\n                                }\n                                id\n                                entityId\n                                sku\n                                isPurchasable\n                                inventory {\n                                  isInStock\n                                }\n                                options {\n                                  edges {\n                                    node {\n                                      displayName\n                                      entityId\n                                      values {\n                                        edges {\n                                          node {\n                                            entityId\n                                            label\n                                          }\n                                        }\n                                      }\n                                    }\n                                  }\n                                }\n                              }\n                            }\n                          }\n                          entityId\n                        }\n                      }\n                     }\n                   }\n                 }";
}

/***/ }),

/***/ "./assets/js/theme/get-single-product-query.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/get-single-product-query.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSingleProductQuery: () => (/* binding */ getSingleProductQuery)
/* harmony export */ });
function getSingleProductQuery(productId) {
  return "query ProductById{\n               site {\n                 product(entityId: " + productId + ") {\n                      name\n                      customFields {\n                        edges {\n                          node {\n                            name\n                            value\n                          }\n                        }\n                      }\n                      variants {\n                        edges {\n                          node {\n                            prices {\n                              basePrice {\n                                value\n                              }\n                            }\n                            id\n                            entityId\n                            sku\n                            isPurchasable\n                            inventory {\n                              isInStock\n                            }\n                            options {\n                              edges {\n                                node {\n                                  displayName\n                                  entityId\n                                  values {\n                                    edges {\n                                      node {\n                                        entityId\n                                        label\n                                      }\n                                    }\n                                  }\n                                }\n                              }\n                            }\n                          }\n                        }\n                      }\n                      entityId\n                    }\n                  }\n             }";
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jdXN0b20tYWRkLXRvLWNhcnRfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FDQSxxSkFBQUEsbUJBQUEsWUFBQUEsb0JBQUEsV0FBQUMsQ0FBQSxTQUFBQyxDQUFBLEVBQUFELENBQUEsT0FBQUUsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLFNBQUEsRUFBQUMsQ0FBQSxHQUFBSCxDQUFBLENBQUFJLGNBQUEsRUFBQUMsQ0FBQSxHQUFBSixNQUFBLENBQUFLLGNBQUEsY0FBQVAsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsSUFBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsQ0FBQU8sS0FBQSxLQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQVMsS0FBQSxFQUFBUCxDQUFBLEVBQUFpQixVQUFBLE1BQUFDLFlBQUEsTUFBQUMsUUFBQSxTQUFBcEIsQ0FBQSxDQUFBRCxDQUFBLFdBQUFrQixNQUFBLG1CQUFBakIsQ0FBQSxJQUFBaUIsTUFBQSxZQUFBQSxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUQsQ0FBQSxDQUFBRCxDQUFBLElBQUFFLENBQUEsZ0JBQUFvQixLQUFBckIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxRQUFBSyxDQUFBLEdBQUFWLENBQUEsSUFBQUEsQ0FBQSxDQUFBSSxTQUFBLFlBQUFtQixTQUFBLEdBQUF2QixDQUFBLEdBQUF1QixTQUFBLEVB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LENBQUM7UUFBQztRQUFBO1VBQUEsT0FBQVcsVUFBQSxDQUFBdE4sSUFBQTtNQUFBO0lBQUEsR0FBQWtOLFNBQUE7RUFBQSxDQUN6QjtFQUFBLGdCQVhLRixlQUFlQSxDQUFBVSxJQUFBO0lBQUEsT0FBQVQsTUFBQSxDQUFBdk0sS0FBQSxPQUFBRCxTQUFBO0VBQUE7QUFBQSxHQVdwQjtBQUVELGlFQUFldU0sZUFBZTs7Ozs7Ozs7Ozs7Ozs7QUN6UnZCLFNBQVNqTSxnQkFBZ0JBLENBQUM0TSxVQUFVLEVBQUU7RUFDekMsOEdBRXdDQSxVQUFVLENBQUNDLElBQUksQ0FBQyxHQUFHLENBQUM7QUF1RGhFOzs7Ozs7Ozs7Ozs7OztBQzFETyxTQUFTOU0scUJBQXFCQSxDQUFDd0wsU0FBUyxFQUFFO0VBQzdDLDBGQUVpQ0EsU0FBUztBQWdEOUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1jb3JuZXJzdG9uZS8uL2Fzc2V0cy9qcy90aGVtZS9jdXN0b20tYWRkLXRvLWNhcnQuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtY29ybmVyc3RvbmUvLi9hc3NldHMvanMvdGhlbWUvZ2V0LXByb2R1Y3RzLXF1ZXJ5LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWNvcm5lcnN0b25lLy4vYXNzZXRzL2pzL3RoZW1lL2dldC1zaW5nbGUtcHJvZHVjdC1xdWVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCB7IGdldFNpbmdsZVByb2R1Y3RRdWVyeSB9IGZyb20gJy4vZ2V0LXNpbmdsZS1wcm9kdWN0LXF1ZXJ5JztcbmltcG9ydCB7IGdldFByb2R1Y3RzUXVlcnkgfSBmcm9tICcuL2dldC1wcm9kdWN0cy1xdWVyeSc7XG5cbmNvbnN0IGZldGNoR3JhcGhRTERhdGEgPSBhc3luYyBxdWVyeSA9PiB7XG4gICAgY29uc3QgcXVlcnlPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2JlYXJlclRva2VufWAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvZ3JhcGhxbCcsIHF1ZXJ5T3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LmRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBHcmFwaFFMIHJlc3BvbnNlJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0LmRhdGE7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignR3JhcGhRTCBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn07XG5cbmNvbnN0IGdldFByb2R1Y3RzID0gYXN5bmMgKHByb2R1Y3RJRHMpID0+IHtcbiAgICBjb25zdCBxdWVyeSA9IGdldFByb2R1Y3RzUXVlcnkocHJvZHVjdElEcyk7XG4gICAgcmV0dXJuIGZldGNoR3JhcGhRTERhdGEocXVlcnkpO1xufTtcblxuY29uc3QgZ2V0U2luZ2xlUHJvZHVjdCA9IGFzeW5jIChwcm9kdWN0SUQpID0+IHtcbiAgICBjb25zdCBxdWVyeSA9IGdldFNpbmdsZVByb2R1Y3RRdWVyeShwcm9kdWN0SUQpO1xuICAgIHJldHVybiBmZXRjaEdyYXBoUUxEYXRhKHF1ZXJ5KTtcbn07XG5jb25zdCBmb3JtYXRQcm9kdWN0ID0gcHJvZHVjdCA9PiB7XG4gICAgY29uc3QgdmFyaWFudHNXaXRoVmFsdWVzID0gcHJvZHVjdC52YXJpYW50cy5lZGdlcy5tYXAodmFyaWFudEVkZ2UgPT4ge1xuICAgICAgICBjb25zdCB2YXJpYW50ID0gdmFyaWFudEVkZ2Uubm9kZTtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdmFyaWFudC5vcHRpb25zLmVkZ2VzWzBdPy5ub2RlO1xuICAgICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IG9wdGlvbj8udmFsdWVzLmVkZ2VzWzBdPy5ub2RlLmxhYmVsIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKCFvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNrdTogdmFyaWFudC5za3UsXG4gICAgICAgICAgICBzdG9jazogdmFyaWFudC5pbnZlbnRvcnkuaXNJblN0b2NrLFxuICAgICAgICAgICAgb3B0aW9uRGlzcGxheU5hbWU6IG9wdGlvbj8uZGlzcGxheU5hbWUgfHwgJycsXG4gICAgICAgICAgICBvcHRpb25FbnRpdHlJZDogb3B0aW9uPy5lbnRpdHlJZCB8fCBudWxsLFxuICAgICAgICAgICAgcHJpY2U6IHZhcmlhbnQucHJpY2VzLmJhc2VQcmljZS52YWx1ZSxcbiAgICAgICAgICAgIG9wdGlvblZhbHVlLFxuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3QgQjJCQ3VzdG9tRmllbGQgPSBwcm9kdWN0Py5jdXN0b21GaWVsZHM/LmVkZ2VzLm1hcChmaWVsZCA9PiAoeyBuYW1lOiBmaWVsZC5ub2RlLm5hbWUsIHZhbHVlOiBmaWVsZC5ub2RlLnZhbHVlIH0pKS5maW5kKGZpZWxkID0+IGZpZWxkLm5hbWUgPT09ICdCMkJvcHRpb25zJyk7XG4gICAgY29uc3QgUXR5UGVyVW5pdEN1c3RvbUZpZWxkID0gcHJvZHVjdD8uY3VzdG9tRmllbGRzPy5lZGdlcy5tYXAoZmllbGQgPT4gKHsgbmFtZTogZmllbGQubm9kZS5uYW1lLCB2YWx1ZTogZmllbGQubm9kZS52YWx1ZSB9KSkuZmluZChmaWVsZCA9PiBmaWVsZC5uYW1lID09PSAnUXR5UGVyVW5pdCcpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW50aXR5SWQ6IHByb2R1Y3QuZW50aXR5SWQsXG4gICAgICAgIHZhcmlhbnRzOiB2YXJpYW50c1dpdGhWYWx1ZXNbMF0gPT09IG51bGwgPyBbXSA6IHZhcmlhbnRzV2l0aFZhbHVlcyxcbiAgICAgICAgQjJCQ3VzdG9tRmllbGQ6IEIyQkN1c3RvbUZpZWxkIHx8IG51bGwsXG4gICAgICAgIFF0eVBlclVuaXRDdXN0b21GaWVsZDogUXR5UGVyVW5pdEN1c3RvbUZpZWxkIHx8IG51bGwsXG4gICAgICAgIGlzSW5TdG9jazogcHJvZHVjdC5pbnZlbnRvcnkuaXNJblN0b2NrLFxuICAgIH07XG59O1xuY29uc3QgZ2V0Rm9ybWF0dGVkUHJvZHVjdERhdGEgPSBhc3luYyBwcm9kdWN0SURzID0+IHtcbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGdldFByb2R1Y3RzKHByb2R1Y3RJRHMpO1xuICAgIHJldHVybiBwcm9kdWN0cy5zaXRlLnByb2R1Y3RzLmVkZ2VzLm1hcChwcm9kdWN0RWRnZSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0RWRnZS5ub2RlO1xuICAgICAgICByZXR1cm4gZm9ybWF0UHJvZHVjdChwcm9kdWN0KTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGdldEZvcm1hdHRlZFNpbmdsZVByb2R1Y3QgPSBhc3luYyBwcm9kdWN0SUQgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBnZXRTaW5nbGVQcm9kdWN0KHByb2R1Y3RJRCk7XG4gICAgcmV0dXJuIGZvcm1hdFByb2R1Y3QocHJvZHVjdC5zaXRlLnByb2R1Y3QpO1xufTtcblxuY29uc3QgcXR5VGVtcGxhdGUgPSAobGFiZWwsIHNrdSkgPT4gYFxuICAgICAgICA8ZGl2IGlkPVwicXR5LSR7c2t1fVwiIHN0eWxlPVwibWFyZ2luOiBhdXRvXCI+XG4gICAgICAgICAgICA8cD4ke2xhYmVsfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ib3hcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVjXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCIwXCIgbWluPVwiMFwiIG1heD1cIjEwMDBcIiBkYXRhLXNrdT1cIiR7c2t1fVwiPlxuICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaW5jXCI+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbmNvbnN0IGdldENhcnQgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q2FydCh7fSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb25zdCB1cGRhdGVDYXJ0UXVhbnRpdHkgPSBjYXJ0ID0+IHtcbiAgICBjb25zdCBxdHkgPSBjYXJ0ID8gY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtcy5yZWR1Y2UoKGFjYywgY3VycmVudCkgPT4gYWNjICsgY3VycmVudC5xdWFudGl0eSwgMCkgOiAwO1xuICAgICQoJ2JvZHknKS50cmlnZ2VyKCdjYXJ0LXF1YW50aXR5LXVwZGF0ZScsIHF0eSk7XG4gICAgaWYgKCFxdHkpIHtcbiAgICAgICAgJCgnLm5hdlVzZXItaXRlbS0tY2FydCcpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgfVxufTtcblxuY29uc3QgYWRkUHJvZHVjdFRvQ2FydCA9IChza3UsIHF0eSkgPT4ge1xuICAgIGZldGNoKGAvY2FydC5waHA/YWN0aW9uPWFkZCZza3U9JHtza3V9JnF0eT0ke3F0eX1gKVxuICAgICAgICAudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBhZGQgcHJvZHVjdCB0byBjYXJ0LiBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlQ2FydFF1YW50aXR5KGF3YWl0IGdldENhcnQoKSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgcHJvZHVjdCB0byBjYXJ0OicsIGVycm9yKTtcbiAgICAgICAgfSk7XG59O1xuXG5jb25zdCB1cGRhdGVDdXJyZW50UHJvZHVjdCA9IChpdGVtSWQsIG5ld1F0eSkgPT4ge1xuICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIGFzeW5jICgpID0+IHtcbiAgICAgICAgdXBkYXRlQ2FydFF1YW50aXR5KGF3YWl0IGdldENhcnQoKSk7XG4gICAgfSk7XG59O1xuXG5cbmNvbnN0IG9uSW5wdXRDaGFuZ2UgPSBhc3luYyAkaW5wdXQgPT4ge1xuICAgIGNvbnN0IHF0eSA9ICRpbnB1dC52YWwoKTtcbiAgICBjb25zdCBza3UgPSAkaW5wdXQuZGF0YSgnc2t1Jyk7XG4gICAgY29uc3QgY2FydCA9IGF3YWl0IGdldENhcnQoKTtcblxuICAgIGlmICghY2FydCkge1xuICAgICAgICBhZGRQcm9kdWN0VG9DYXJ0KHNrdSwgcXR5KTtcbiAgICAgICAgJCgnLm5hdlVzZXItaXRlbS0tY2FydCcpLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50UHJvZHVjdCA9IGNhcnQubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXMuZmluZChwcm9kdWN0ID0+IHByb2R1Y3Quc2t1ID09PSBza3UpO1xuXG4gICAgaWYgKCFjdXJyZW50UHJvZHVjdCkge1xuICAgICAgICBhZGRQcm9kdWN0VG9DYXJ0KHNrdSwgcXR5KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHVwZGF0ZUN1cnJlbnRQcm9kdWN0KGN1cnJlbnRQcm9kdWN0LmlkLCBxdHkpO1xufTtcbmNvbnN0IHF0eUJ1dHRvbkV2ZW50ID0gJHNlbGVjdG9yID0+IHtcbiAgICAkc2VsZWN0b3IuZmluZCgnYnV0dG9uJykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gJHNlbGVjdG9yLmZpbmQoJ2lucHV0JykudmFsKCk7XG4gICAgICAgIGNvbnN0IGluY3JlbWVudCA9ICQoZS50YXJnZXQpLmhhc0NsYXNzKCdkZWMnKSA/IC0xIDogMTtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSArY3VycmVudFZhbHVlICsgaW5jcmVtZW50O1xuICAgICAgICBjb25zdCAkaW5wdXQgPSAkc2VsZWN0b3IuZmluZCgnaW5wdXQnKTtcbiAgICAgICAgJGlucHV0LnZhbChuZXdWYWx1ZSA+IDAgPyBuZXdWYWx1ZSA6IDApO1xuICAgICAgICBvbklucHV0Q2hhbmdlKCRpbnB1dCk7XG4gICAgfSk7XG59O1xuXG5cbmNvbnN0IHF0eUNoYW5nZSA9ICRpbnB1dCA9PiB7XG4gICAgJGlucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IHBhcnNlSW50KCQodGhpcykudmFsKCksIDEwKTtcbiAgICAgICAgbmV3VmFsdWUgPSBNYXRoLm1pbigxMDAwLCBNYXRoLm1heCgwLCBuZXdWYWx1ZSkpO1xuICAgICAgICAkKHRoaXMpLnZhbChuZXdWYWx1ZSk7XG5cbiAgICAgICAgb25JbnB1dENoYW5nZSgkKHRoaXMpKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IHJlbmRlckJveEFjdGlvbnMgPSBmdW5jdGlvbiAoc2t1LCBjYXJ0KSB7XG4gICAgY29uc3QgJGJveCA9ICQoYCNxdHktJHtza3V9YCk7XG4gICAgY29uc3QgJGlucHV0ID0gJChgW2RhdGEtc2t1PVwiJHtza3V9XCJdYCk7XG4gICAgcXR5QnV0dG9uRXZlbnQoJGJveCk7XG4gICAgcXR5Q2hhbmdlKCRpbnB1dCk7XG5cbiAgICBpZiAoY2FydCkge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gY2FydC5saW5lSXRlbXMucGh5c2ljYWxJdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS5za3UgPT09IHNrdSk7XG4gICAgICAgIGlmIChwcm9kdWN0KSB7XG4gICAgICAgICAgICAkaW5wdXQudmFsKHByb2R1Y3QucXVhbnRpdHkpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuY29uc3QgcmVuZGVyUXR5UGVyVW5pdCA9IChjdXJyZW50UHJvZHVjdCwgJHByb2R1Y3RDYXJkKSA9PiB7XG4gICAgaWYgKCFjdXJyZW50UHJvZHVjdC5RdHlQZXJVbml0Q3VzdG9tRmllbGQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBCMkJPcHRpb25zRmllbGQgPSBjdXJyZW50UHJvZHVjdD8uQjJCQ3VzdG9tRmllbGQudmFsdWUuc3BsaXQoJywnKTtcbiAgICBjb25zdCBxdHlQZXJVbml0RmllbGQgPSBjdXJyZW50UHJvZHVjdD8uUXR5UGVyVW5pdEN1c3RvbUZpZWxkLnZhbHVlLnNwbGl0KCcsJyk7XG4gICAgZnVuY3Rpb24gZmluZE51bWJlcihhcnJheTEsIGFycmF5Mikge1xuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQyIG9mIGFycmF5Mikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50MSBvZiBhcnJheTEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudDIuaW5jbHVkZXMoZWxlbWVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50MjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IGZpbmROdW1iZXIoQjJCT3B0aW9uc0ZpZWxkLCBxdHlQZXJVbml0RmllbGQpO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgY29uc3QgbmVjZXNzYXJ5UHJvZHVjdFZhcmlhbnQgPSBjdXJyZW50UHJvZHVjdC52YXJpYW50cy5maW5kKHZhcmlhbnQgPT4gdmFyaWFudC5vcHRpb25WYWx1ZSA9PT0gcmVzdWx0LnNwbGl0KCc6JylbMF0pO1xuICAgICAgICBjb25zdCBwcmljZVBlclVuaXQgPSAobmVjZXNzYXJ5UHJvZHVjdFZhcmlhbnQucHJpY2UgLyByZXN1bHQuc3BsaXQoJzonKVsxXSkudG9GaXhlZCgyKTtcbiAgICAgICAgJHByb2R1Y3RDYXJkLmZpbmQoJy5wcmljZS1wZXItdW5pdCcpLnRleHQoYFByaWNlIFBlciBVbml0OiAkJHtwcmljZVBlclVuaXR9YCk7XG4gICAgICAgICRwcm9kdWN0Q2FyZC5maW5kKCcuY2FyZC10ZXh0LXByaWNlJykuaGlkZSgpO1xuICAgICAgICAkcHJvZHVjdENhcmQuZmluZCgnLnByb2R1Y3RWaWV3LXByaWNlJykuaGlkZSgpO1xuICAgIH1cbn07XG5cblxuY29uc3QgcmVuZGVyT09TID0gKCkgPT4gYFxuICAgIDxkaXYgY2xhc3M9XCJhbGVydEJveCBwcm9kdWN0QXR0cmlidXRlcy1tZXNzYWdlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydEJveC1jb2x1bW4gYWxlcnRCb3gtaWNvblwiPlxuICAgICAgICAgICAgPGljb24gZ2x5cGg9XCJpYy1zdWNjZXNzXCIgY2xhc3M9XCJpY29uXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtMmgydjJ6bTAtNGgtMlY3aDJ2NnpcIj48L3BhdGg+PC9zdmc+PC9pY29uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3M9XCJhbGVydEJveC1jb2x1bW4gYWxlcnRCb3gtbWVzc2FnZVwiPk91dCBvZiBTdG9jazwvcD5cbiAgICA8L2Rpdj5cbmA7XG5cblxuY29uc3QgcmVuZGVyUExQUXR5Qm94ID0gYXN5bmMgZnVuY3Rpb24gKHByb2R1Y3RJRHMpIHtcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRhID0gYXdhaXQgZ2V0Rm9ybWF0dGVkUHJvZHVjdERhdGEocHJvZHVjdElEcyk7XG4gICAgY29uc3QgYWxsUGFnZVByb2R1Y3RzID0gJCgnbGkucHJvZHVjdCcpO1xuICAgIGNvbnN0IGNhcnQgPSBhd2FpdCBnZXRDYXJ0KCk7XG5cbiAgICBhbGxQYWdlUHJvZHVjdHMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9kdWN0ID0gZm9ybWF0dGVkRGF0YS5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LmVudGl0eUlkID09PSAkKHRoaXMpLmRhdGEoJ2lkJykpWzBdO1xuICAgICAgICAvLyByZW5kZXJRdHlQZXJVbml0KGN1cnJlbnRQcm9kdWN0LCAkKHRoaXMpKTtcbiAgICAgICAgaWYgKCFjdXJyZW50UHJvZHVjdD8uaXNJblN0b2NrKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5jdXN0b20tYWRkLXRvLWNhcnQnKS5hcHBlbmQocmVuZGVyT09TKCkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50UHJvZHVjdD8udmFyaWFudHM/Lmxlbmd0aCkge1xuICAgICAgICAgICAgY3VycmVudFByb2R1Y3QudmFyaWFudHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHZhcmlhbnQgPT4gY3VycmVudFByb2R1Y3QuQjJCQ3VzdG9tRmllbGQudmFsdWUuc3BsaXQoJywnKS5pbmNsdWRlcyh2YXJpYW50Lm9wdGlvblZhbHVlKSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCh2YXJpYW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuY3VzdG9tLWFkZC10by1jYXJ0JykuYXBwZW5kKHF0eVRlbXBsYXRlKHZhcmlhbnQub3B0aW9uVmFsdWUsIHZhcmlhbnQuc2t1KSk7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlckJveEFjdGlvbnModmFyaWFudC5za3UsIGNhcnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5jb25zdCByZW5kZXJQRFBRdHlCb3ggPSBhc3luYyBwcm9kdWN0SWQgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRQcm9kdWN0ID0gYXdhaXQgZ2V0Rm9ybWF0dGVkU2luZ2xlUHJvZHVjdChwcm9kdWN0SWQpO1xuICAgIGNvbnN0IGNhcnQgPSBhd2FpdCBnZXRDYXJ0KCk7XG5cbiAgICAvLyByZW5kZXJRdHlQZXJVbml0KGN1cnJlbnRQcm9kdWN0LCAkKCcucHJvZHVjdFZpZXcnKSk7XG5cbiAgICBpZiAoY3VycmVudFByb2R1Y3Q/LnZhcmlhbnRzPy5sZW5ndGgpIHtcbiAgICAgICAgY3VycmVudFByb2R1Y3QudmFyaWFudHNcbiAgICAgICAgICAgIC5maWx0ZXIodmFyaWFudCA9PiBjdXJyZW50UHJvZHVjdC5CMkJDdXN0b21GaWVsZC52YWx1ZS5zcGxpdCgnLCcpLmluY2x1ZGVzKHZhcmlhbnQub3B0aW9uVmFsdWUpKVxuICAgICAgICAgICAgLmZvckVhY2godmFyaWFudCA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLmN1c3RvbS1hZGQtdG8tY2FydCcpLmFwcGVuZChxdHlUZW1wbGF0ZSh2YXJpYW50Lm9wdGlvblZhbHVlLCB2YXJpYW50LnNrdSkpO1xuICAgICAgICAgICAgICAgIHJlbmRlckJveEFjdGlvbnModmFyaWFudC5za3UsIGNhcnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufTtcblxuY29uc3QgY2F0ZWdvcnlBc2lkZUhlaWdodCA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9kQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICBjb25zdCBhc2lkZUNvbnRhaW5lciA9ICQoJy5jb250YWluZXIgLmlzQ2F0ZWdvcnlQYWdlIC5wYWdlLXNpZGViYXInKTtcbiAgICBhc2lkZUNvbnRhaW5lci5jc3MoJ21heC1oZWlnaHQnLCBgJHtwcm9kQ29udGFpbmVyLmhlaWdodCgpfXB4YCk7XG59O1xuXG5jb25zdCBjdXN0b21BZGRUb0NhcnQgPSBhc3luYyBjb250ZXh0ID0+IHtcbiAgICBjb25zdCBpc1BEUFRlbXBsYXRlID0gY29udGV4dC50ZW1wbGF0ZSA9PT0gJ3BhZ2VzL3Byb2R1Y3QnO1xuXG4gICAgaWYgKGlzUERQVGVtcGxhdGUgfHwgIWNvbnRleHQuY3VzdG9tZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFsbFBhZ2VQcm9kdWN0cyA9ICQoJ2xpLnByb2R1Y3QnKS50b0FycmF5KCk7XG4gICAgY29uc3QgcHJvZHVjdElEcyA9IGFsbFBhZ2VQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAkKHByb2R1Y3QpLmRhdGEoJ2lkJykpO1xuICAgIGF3YWl0IHJlbmRlclBMUFF0eUJveChwcm9kdWN0SURzKTtcbiAgICBjYXRlZ29yeUFzaWRlSGVpZ2h0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdXN0b21BZGRUb0NhcnQ7XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdHNRdWVyeShwcm9kdWN0SWRzKSB7XG4gICAgcmV0dXJuIGBxdWVyeSBFeHRlbmRlZFByb2R1Y3RzQnlJZHtcbiAgICAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzKGVudGl0eUlkczogWyR7cHJvZHVjdElkcy5qb2luKCcsJyl9XSwgZmlyc3Q6IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGludmVudG9yeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJblN0b2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNrdVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1B1cmNoYXNhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmVudG9yeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJblN0b2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgfWA7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0U2luZ2xlUHJvZHVjdFF1ZXJ5KHByb2R1Y3RJZCkge1xuICAgIHJldHVybiBgcXVlcnkgUHJvZHVjdEJ5SWR7XG4gICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgcHJvZHVjdChlbnRpdHlJZDogJHtwcm9kdWN0SWR9KSB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VQcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBza3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1B1cmNoYXNhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5TdG9ja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfWA7XG59XG4iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwidXRpbHMiLCJnZXRTaW5nbGVQcm9kdWN0UXVlcnkiLCJnZXRQcm9kdWN0c1F1ZXJ5IiwiZmV0Y2hHcmFwaFFMRGF0YSIsIl9yZWYiLCJfY2FsbGVlIiwicXVlcnkiLCJxdWVyeU9wdGlvbnMiLCJyZXNwb25zZSIsInJlc3VsdCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYmVhcmVyVG9rZW4iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwianNvbiIsImRhdGEiLCJ0MCIsImNvbnNvbGUiLCJlcnJvciIsIl94IiwiZ2V0UHJvZHVjdHMiLCJfcmVmMiIsIl9jYWxsZWUyIiwicHJvZHVjdElEcyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIl94MiIsImdldFNpbmdsZVByb2R1Y3QiLCJfcmVmMyIsIl9jYWxsZWUzIiwicHJvZHVjdElEIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiX3gzIiwiZm9ybWF0UHJvZHVjdCIsInByb2R1Y3QiLCJfcHJvZHVjdCRjdXN0b21GaWVsZHMiLCJfcHJvZHVjdCRjdXN0b21GaWVsZHMyIiwidmFyaWFudHNXaXRoVmFsdWVzIiwidmFyaWFudHMiLCJlZGdlcyIsIm1hcCIsInZhcmlhbnRFZGdlIiwiX3ZhcmlhbnQkb3B0aW9ucyRlZGdlIiwiX29wdGlvbiR2YWx1ZXMkZWRnZXMkIiwidmFyaWFudCIsIm5vZGUiLCJvcHRpb24iLCJvcHRpb25zIiwib3B0aW9uVmFsdWUiLCJsYWJlbCIsInNrdSIsInN0b2NrIiwiaW52ZW50b3J5IiwiaXNJblN0b2NrIiwib3B0aW9uRGlzcGxheU5hbWUiLCJvcHRpb25FbnRpdHlJZCIsImVudGl0eUlkIiwicHJpY2UiLCJwcmljZXMiLCJiYXNlUHJpY2UiLCJCMkJDdXN0b21GaWVsZCIsImN1c3RvbUZpZWxkcyIsImZpZWxkIiwiZmluZCIsIlF0eVBlclVuaXRDdXN0b21GaWVsZCIsImdldEZvcm1hdHRlZFByb2R1Y3REYXRhIiwiX3JlZjQiLCJfY2FsbGVlNCIsInByb2R1Y3RzIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0Iiwic2l0ZSIsInByb2R1Y3RFZGdlIiwiX3g0IiwiZ2V0Rm9ybWF0dGVkU2luZ2xlUHJvZHVjdCIsIl9yZWY1IiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJfeDUiLCJxdHlUZW1wbGF0ZSIsImdldENhcnQiLCJyZWplY3QiLCJhcGkiLCJjYXJ0IiwiZXJyIiwidXBkYXRlQ2FydFF1YW50aXR5IiwicXR5IiwibGluZUl0ZW1zIiwicGh5c2ljYWxJdGVtcyIsInJlZHVjZSIsImFjYyIsImN1cnJlbnQiLCJxdWFudGl0eSIsIiQiLCJ0cmlnZ2VyIiwicmVtb3ZlQ2xhc3MiLCJhZGRQcm9kdWN0VG9DYXJ0IiwiX3JlZjYiLCJfY2FsbGVlNiIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsIm9rIiwic3RhdHVzIiwidDEiLCJfeDYiLCJ1cGRhdGVDdXJyZW50UHJvZHVjdCIsIml0ZW1JZCIsIm5ld1F0eSIsIml0ZW1VcGRhdGUiLCJfY2FsbGVlNyIsIl9jYWxsZWU3JCIsIl9jb250ZXh0NyIsIm9uSW5wdXRDaGFuZ2UiLCJfcmVmOCIsIl9jYWxsZWU4IiwiJGlucHV0IiwiY3VycmVudFByb2R1Y3QiLCJfY2FsbGVlOCQiLCJfY29udGV4dDgiLCJ2YWwiLCJhZGRDbGFzcyIsImlkIiwiX3g3IiwicXR5QnV0dG9uRXZlbnQiLCIkc2VsZWN0b3IiLCJvbiIsImN1cnJlbnRWYWx1ZSIsImluY3JlbWVudCIsInRhcmdldCIsImhhc0NsYXNzIiwibmV3VmFsdWUiLCJxdHlDaGFuZ2UiLCJwYXJzZUludCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJyZW5kZXJCb3hBY3Rpb25zIiwiJGJveCIsIml0ZW0iLCJyZW5kZXJRdHlQZXJVbml0IiwiJHByb2R1Y3RDYXJkIiwiQjJCT3B0aW9uc0ZpZWxkIiwic3BsaXQiLCJxdHlQZXJVbml0RmllbGQiLCJmaW5kTnVtYmVyIiwiYXJyYXkxIiwiYXJyYXkyIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZWxlbWVudDIiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiZWxlbWVudDEiLCJpbmNsdWRlcyIsIm5lY2Vzc2FyeVByb2R1Y3RWYXJpYW50IiwicHJpY2VQZXJVbml0IiwidG9GaXhlZCIsInRleHQiLCJoaWRlIiwicmVuZGVyT09TIiwicmVuZGVyUExQUXR5Qm94IiwiX3JlZjkiLCJfY2FsbGVlOSIsImZvcm1hdHRlZERhdGEiLCJhbGxQYWdlUHJvZHVjdHMiLCJfY2FsbGVlOSQiLCJfY29udGV4dDkiLCJlYWNoIiwiX3RoaXMiLCJfY3VycmVudFByb2R1Y3QkdmFyaWEiLCJmaWx0ZXIiLCJhcHBlbmQiLCJfeDgiLCJyZW5kZXJQRFBRdHlCb3giLCJfcmVmMTAiLCJfY2FsbGVlMTAiLCJwcm9kdWN0SWQiLCJfY3VycmVudFByb2R1Y3QkdmFyaWEyIiwiX2NhbGxlZTEwJCIsIl9jb250ZXh0MTAiLCJfeDkiLCJjYXRlZ29yeUFzaWRlSGVpZ2h0IiwicHJvZENvbnRhaW5lciIsImFzaWRlQ29udGFpbmVyIiwiY3NzIiwiaGVpZ2h0IiwiY3VzdG9tQWRkVG9DYXJ0IiwiX3JlZjExIiwiX2NhbGxlZTExIiwiY29udGV4dCIsImlzUERQVGVtcGxhdGUiLCJfY2FsbGVlMTEkIiwiX2NvbnRleHQxMSIsInRlbXBsYXRlIiwiY3VzdG9tZXIiLCJ0b0FycmF5IiwiX3gxMCIsInByb2R1Y3RJZHMiLCJqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==
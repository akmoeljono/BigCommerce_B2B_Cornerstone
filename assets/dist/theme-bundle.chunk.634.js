"use strict";(self.webpackChunkbigcommerce_cornerstone=self.webpackChunkbigcommerce_cornerstone||[]).push([[634],{61634:function(t,e,r){r.r(e),r.d(e,{default:function(){return u}});var n=r(42066),i=r(50469),o=r(54587),a=r(28426),c=r(99706),s=r(55825);function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}var u=function(t){var e,r;function i(e){var r;return(r=t.call(this,e)||this).validationDictionary=(0,c.M)(e),r}r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,d(e,r);var u=i.prototype;return u.onReady=function(){(0,o.Z)(this.context),s("#facetedSearch").length>0?this.initFacetedSearch():(this.onSortBySubmit=this.onSortBySubmit.bind(this),n.PT.on("sortBy-submitted",this.onSortBySubmit))},u.initFacetedSearch=function(){var t=this.validationDictionary,e=t.price_min_evaluation,r=t.price_max_evaluation,n=t.price_min_not_entered,i=t.price_max_not_entered,o=t.price_invalid_value,c=s("#product-listing-container"),d=s("#faceted-search-container"),u={template:{productListing:"brand/product-listing",sidebar:"brand/sidebar"},config:{shop_by_brand:!0,brand:{products:{limit:this.context.brandProductsPerPage}}},showMore:"brand/show-more"};this.facetedSearch=new a.Z(u,(function(t){c.html(t.productListing),d.html(t.sidebar),s("body").triggerHandler("compareReset"),s("html, body").animate({scrollTop:0},100)}),{validationErrorMessages:{onMinPriceError:e,onMaxPriceError:r,minPriceNotEntered:n,maxPriceNotEntered:i,onInvalidPrice:o}})},i}(i.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.634.js.map

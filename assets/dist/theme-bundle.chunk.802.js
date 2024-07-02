"use strict";(self.webpackChunkbigcommerce_cornerstone=self.webpackChunkbigcommerce_cornerstone||[]).push([[802],{41802:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(49230),i=n(37030),o=n(28350),a=n(78341),c=n(55825),u=function(){function e(e){this.$player=e.find("[data-video-player]"),this.$videos=e.find("[data-video-item]"),this.currentVideo={},this.bindEvents()}var t=e.prototype;return t.selectNewVideo=function(e){e.preventDefault();var t=c(e.currentTarget);this.currentVideo={id:t.data("videoId"),$selectedThumb:t},this.setMainVideo(),this.setActiveThumb()},t.setMainVideo=function(){this.$player.attr("src","//www.youtube.com/embed/"+this.currentVideo.id)},t.setActiveThumb=function(){this.$videos.removeClass("is-active"),this.currentVideo.$selectedThumb.addClass("is-active")},t.bindEvents=function(){this.$videos.on("click",this.selectNewVideo.bind(this))},e}(),s=n(67313),d=n(44505),l=(n(35666),n(35262)),f=n(55825);function h(e,t,n,r,i,o,a){try{var c=e[o](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,i)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function a(e){h(o,r,i,a,c,"next",e)}function c(e){h(o,r,i,a,c,"throw",e)}a(void 0)}))}}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}var m=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).url=window.location.href,n.$reviewLink=f('[data-reveal-id="modal-review-form"]'),n.$bulkPricingLink=f('[data-reveal-id="modal-bulk-pricing"]'),n.reviewModal=(0,d.ZP)("#modal-review-form")[0],n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,v(t,n);var h=r.prototype;return h.onReady=function(){var e,t,n=this;f(document).on("close.fndtn.reveal",(function(){-1!==n.url.indexOf("#write_review")&&"function"==typeof window.history.replaceState&&window.history.replaceState(null,document.title,window.location.pathname)})),(0,o.ZP)(),this.productDetails=new a.Z(f(".productView"),this.context,window.BCData.product_attributes),this.productDetails.setProductVariant(),c("[data-"+(t="video-gallery")+"]").each((function(e,n){var r=c(n);r.data(t)instanceof u||r.data(t,new u(r))})),this.bulkPricingHandler();var r=(0,s.iR)(".writeReview-form");if(0!==r.length){var d=new i.Z({$reviewForm:r});f("body").on("click",'[data-reveal-id="modal-review-form"]',(function(){e=d.registerValidation(n.context),n.ariaDescribeReviewInputs(r)})),r.on("submit",(function(){return!!e&&(e.performCheck(),e.areAll("valid"))})),this.productReviewHandler(),(0,l.Z)(this.context),this.hideProductVariations(),this.renderTable()}},h.ariaDescribeReviewInputs=function(e){e.find("[data-input]").each((function(e,t){var n=f(t),r=n.attr("name")+"-msg";n.siblings("span").attr("id",r),n.attr("aria-describedby",r)}))},h.productReviewHandler=function(){-1!==this.url.indexOf("#write_review")&&this.$reviewLink.trigger("click")},h.bulkPricingHandler=function(){-1!==this.url.indexOf("#bulk_pricing")&&this.$bulkPricingLink.trigger("click")},h.hideProductVariations=function(){var e=p(regeneratorRuntime.mark((function e(){var t,n,r,i,o,a,c,u,s,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=function(e){var t=e.map((function(e){return e.node.prices.basePrice.value})),n=Math.min.apply(Math,t),r=Math.max.apply(Math,t),i=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),o=i.format(n),a=i.format(r);return n===r?o:o+" - "+a},u=function(e,t){return e.site.product.variants.edges.filter((function(e){return e.node.options.edges.map((function(e){return e.node.values.edges.map((function(e){return e.node.label}))})).every((function(e){return e.some((function(e){return t.includes(e)}))}))}))},n=1===this.context.settings.channel_id,null!=(r=null==(t=this.context.product)?void 0:t.custom_fields)&&r.length){e.next=6;break}return e.abrupt("return");case 6:return i=null,r.forEach((function(e){(n?"B2Boptions"===e.name:"B2Coptions"===e.name)&&(i=e.value.split(",").map((function(e){return e.toString()})))})),o=f("[data-product-option-change]").find("input"),a=f("[data-product-option-change]").find("option"),i?(a.each((function(){var e=String(f(this).data("label"));"Choose Options"===this.innerText.trim()||i.includes(e)||f(this).remove()})),o.each((function(){var e=String(f(this).data("label"));i.includes(e)||(f(this).next("label").remove(),f(this).remove())}))):(a.each((function(){f(this).remove()})),o.each((function(){f(this).next("label").remove(),f(this).remove()}))),f(".form-field").each((function(){0===f(this).find("input, option").length&&f(this).remove()})),e.next=14,this.getProducts();case 14:c=e.sent,d=u(c,i),f(".productView-details .price--withoutTax").text(s(d));case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),h.getProductQuery=function(e){return"query productById {\n                  site {\n                    product(entityId: "+e+") {\n                      id\n                      entityId\n                      name\n                      variants {\n                        edges {\n                          node {\n                            prices {\n                              basePrice {\n                                value\n                              }\n                            }\n                            options {\n                              edges {\n                                node {\n                                  displayName\n                                  values {\n                                    edges {\n                                      node {\n                                        label\n                                      }\n                                    }\n                                  }\n                                }\n                              }\n                            }\n                          }\n                        }\n                      }\n                    }\n                  }\n                }"},h.getProducts=function(){var e=p(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"Bearer "+bearerToken},body:JSON.stringify({query:this.getProductQuery(this.context.product.id)})},e.prev=1,e.next=4,fetch("/graphql",t).then((function(e){return e.json()})).then((function(e){return e.data}));case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),console.log("error",e.t0);case 10:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),h.renderTable=function(){var e,t,n=null==(e=this.context.product.custom_fields.find((function(e){return"QtyPerUnit"===e.name})))?void 0:e.value,r=n.startsWith(",")?n.slice(1):n,i=function(e,t){var n=e.split(" ");return n.every((function(e,r){return e.toLowerCase()===t&&(n[r]="",n[r+1]=""),!0})),n.join(" ")};if(r){var o=r.replace("1 UNIT:1,","").split(/[:,]/).filter(Boolean);null!=(t=o[0])&&t.includes("SET")&&o.splice(0,2),f(".pack-1-name").text(i(o[0],"of")+" Qty"),f(".pack-1-value").text(""+o[1]),f(".pack-2-name").text(i(o[2],"of")+" Qty"),f(".pack-2-value").text(""+o[3])}},r}(r.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.802.js.map

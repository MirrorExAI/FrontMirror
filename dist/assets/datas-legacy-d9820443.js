/*! 
 Build based on gin-vue-admin 
 Time : 1697360087000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(k){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),u=new _(n||[]);return o(a,"_invoke",{value:E(t,r,u)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=f;var s={};function y(){}function d(){}function p(){}var v={};l(v,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==r&&n.call(m,a)&&(v=m);var w=p.prototype=y.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,i,a,u){var c=h(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=L(a,r);if(u){if(u===s)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),s;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,s;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return d.prototype=p,o(w,"constructor",{value:p,configurable:!0}),o(p,"constructor",{value:d,configurable:!0}),d.displayName=l(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,u,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new x(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}function e(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function r(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy-107e023f.js","./checkbox-legacy-bb02fb88.js","./button-legacy-ca0b763b.js","./authority-legacy-56697efc.js","./warningBar-legacy-09ab5792.js","./isEqual-legacy-cfc29359.js","./_Uint8Array-legacy-a51df0dc.js","./icon-legacy-4309e40a.js"],(function(n,o){"use strict";var i,a,u,c,l,f,h,s,y,d,p,v,g,m,w,b,x;return{setters:[function(t){i=t.a,a=t.o,u=t.c,c=t.d,l=t.b,f=t.w,h=t.g,s=t.M,y=t.N,d=t.h,p=t.t,v=t.k,g=t.E},function(t){m=t.E,w=t.a},null,function(t){b=t.s},function(t){x=t._},null,null,null],execute:function(){var o=document.createElement("style");o.textContent=".el-checkbox-group{font-size:0;line-height:0}\n",document.head.appendChild(o);var E={class:"sticky top-0.5 z-10 bg-white my-4"},L={class:"clear-both pt-4"},j={name:"Datas"};n("default",Object.assign(j,{props:{row:{default:function(){return{}},type:Object},authority:{default:function(){return[]},type:Array}},emits:["changeRow"],setup:function(n,o){var j=o.expose,I=o.emit,_=n,O=i([]),k=i(!1),A=function t(e){e&&e.forEach((function(e){var r={};r.authorityId=e.authorityId,r.authorityName=e.authorityName,O.value.push(r),e.children&&e.children.length&&t(e.children)}))},N=i([]);A(_.authority),_.row.dataAuthorityId&&_.row.dataAuthorityId.forEach((function(t){var e=O.value&&O.value.filter((function(e){return e.authorityId===t.authorityId}))&&O.value.filter((function(e){return e.authorityId===t.authorityId}))[0];N.value.push(e)}));var S=function(){N.value=r(O.value),I("changeRow","dataAuthorityId",N.value),k.value=!0},P=function(){N.value=O.value.filter((function(t){return t.authorityId===_.row.authorityId})),I("changeRow","dataAuthorityId",N.value),k.value=!0},C=function(){var t=[];G(_.row,t),N.value=O.value.filter((function(e){return t.indexOf(e.authorityId)>-1})),I("changeRow","dataAuthorityId",N.value),k.value=!0},G=function t(e,r){r.push(e.authorityId),e.children&&e.children.forEach((function(e){t(e,r)}))},T=function(){var r,n=(r=t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(_.row);case 2:0===t.sent.code&&v({type:"success",message:"资源设置成功"});case 4:case"end":return t.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(o,i){var a=r.apply(t,n);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)}))});return function(){return n.apply(this,arguments)}}(),F=function(){I("changeRow","dataAuthorityId",N.value),k.value=!0};return j({enterAndNext:function(){T()},needConfirm:k}),function(t,e){var r=g,n=m,o=w;return a(),u("div",null,[c(x,{title:"此功能仅用于创建角色和角色的many2many关系表，具体使用还须自己结合表实现业务，详情参考示例代码（客户示例）。此功能不建议使用，建议使用插件市场【组织管理功能（点击前往）】来管理资源权限。",href:"https://plugin.gin-vue-admin.com/#/layout/newPluginInfo?id=36"}),l("div",E,[c(r,{class:"float-left",type:"primary",onClick:S},{default:f((function(){return[h("全选")]})),_:1}),c(r,{class:"float-left",type:"primary",onClick:P},{default:f((function(){return[h("本角色")]})),_:1}),c(r,{class:"float-left",type:"primary",onClick:C},{default:f((function(){return[h("本角色及子角色")]})),_:1}),c(r,{class:"float-right",type:"primary",onClick:T},{default:f((function(){return[h("确 定")]})),_:1})]),l("div",L,[c(o,{modelValue:N.value,"onUpdate:modelValue":e[0]||(e[0]=function(t){return N.value=t}),onChange:F},{default:f((function(){return[(a(!0),u(s,null,y(O.value,(function(t,e){return a(),d(n,{key:e,label:t},{default:f((function(){return[h(p(t.authorityName),1)]})),_:2},1032,["label"])})),128))]})),_:1},8,["modelValue"])])])}}}))}}}))}();

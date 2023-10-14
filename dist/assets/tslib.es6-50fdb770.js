/*! 
 Build based on gin-vue-admin 
 Time : 1697152884000 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t=function(n,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])})(n,r)};function n(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=n}t(n,r),n.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}var r=function(){return r=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},r.apply(this,arguments)};function e(t,n,r,e){return new(r||(r=Promise))((function(o,a){function i(t){try{c(e.next(t))}catch(n){a(n)}}function u(t){try{c(e.throw(t))}catch(n){a(n)}}function c(t){var n;t.done?o(t.value):(n=t.value,n instanceof r?n:new r((function(t){t(n)}))).then(i,u)}c((e=e.apply(t,n||[])).next())}))}function o(t,n){var r,e,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,e&&(o=2&a[0]?e.return:a[0]?e.throw||((o=e.return)&&o.call(e),0):e.next)&&!(o=o.call(e,a[1])).done)return o;switch(e=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,e=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(t,i)}catch(u){a=[6,u],e=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}function a(t){var n="function"==typeof Symbol&&Symbol.iterator,r=n&&t[n],e=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&e>=t.length&&(t=void 0),{value:t&&t[e++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(t,n){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var e,o,a=r.call(t),i=[];try{for(;(void 0===n||n-- >0)&&!(e=a.next()).done;)i.push(e.value)}catch(u){o={error:u}}finally{try{e&&!e.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function u(t,n,r){if(r||2===arguments.length)for(var e,o=0,a=n.length;o<a;o++)!e&&o in n||(e||(e=Array.prototype.slice.call(n,0,o)),e[o]=n[o]);return t.concat(e||n)}function c(t){return this instanceof c?(this.v=t,this):new c(t)}function l(t,n,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,o=r.apply(t,n||[]),a=[];return e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e;function i(t){o[t]&&(e[t]=function(n){return new Promise((function(r,e){a.push([t,n,r,e])>1||u(t,n)}))})}function u(t,n){try{(r=o[t](n)).value instanceof c?Promise.resolve(r.value.v).then(l,f):s(a[0][2],r)}catch(e){s(a[0][3],e)}var r}function l(t){u("next",t)}function f(t){u("throw",t)}function s(t,n){t(n),a.shift(),a.length&&u(a[0][0],a[0][1])}}function f(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,r=t[Symbol.asyncIterator];return r?r.call(t):(t=a(t),n={},e("next"),e("throw"),e("return"),n[Symbol.asyncIterator]=function(){return this},n);function e(r){n[r]=t[r]&&function(n){return new Promise((function(e,o){(function(t,n,r,e){Promise.resolve(e).then((function(n){t({value:n,done:r})}),n)})(e,o,(n=t[r](n)).done,n.value)}))}}}export{n as _,a,u as b,i as c,l as d,o as e,c as f,e as g,f as h,r as i};
/*! 
 Build based on gin-vue-admin 
 Time : 1697360087000 */
System.register(["./index-legacy-107e023f.js"],(function(t,n){"use strict";var r,e,i;return{setters:[function(t){r=t.bM,e=t.bI,i=t.bN}],execute:function(){t("d",(function(t,n,r){var i,u,o,f,a,c,v=0,s=!1,g=!1,h=!0;if("function"!=typeof t)throw new TypeError(m);function x(n){var r=i,e=u;return i=u=void 0,v=n,f=t.apply(e,r)}function T(t){var r=t-c;return void 0===c||r>=n||r<0||g&&t-v>=o}function b(){var t=d();if(T(t))return w(t);a=setTimeout(b,function(t){var r=n-(t-c);return g?y(r,o-(t-v)):r}(t))}function w(t){return a=void 0,h&&i?x(t):(i=u=void 0,f)}function M(){var t=d(),r=T(t);if(i=arguments,u=this,c=t,r){if(void 0===a)return function(t){return v=t,a=setTimeout(b,n),s?x(t):f}(c);if(g)return clearTimeout(a),a=setTimeout(b,n),x(c)}return void 0===a&&(a=setTimeout(b,n)),f}return n=l(n)||0,e(r)&&(s=!!r.leading,o=(g="maxWait"in r)?p(l(r.maxWait)||0,n):o,h="trailing"in r?!!r.trailing:h),M.cancel=function(){void 0!==a&&clearTimeout(a),v=0,i=c=u=a=void 0},M.flush=function(){return void 0===a?f:w(d())},M}));var n=/\s/,u=/^\s+/;function o(t){return t?t.slice(0,function(t){for(var r=t.length;r--&&n.test(t.charAt(r)););return r}(t)+1).replace(u,""):t}var f=NaN,a=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,v=/^0o[0-7]+$/i,s=parseInt;function l(t){if("number"==typeof t)return t;if(r(t))return f;if(e(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=e(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=o(t);var i=c.test(t);return i||v.test(t)?s(t.slice(2),i?2:8):a.test(t)?f:+t}var d=function(){return i.Date.now()},m="Expected a function",p=Math.max,y=Math.min}}}));

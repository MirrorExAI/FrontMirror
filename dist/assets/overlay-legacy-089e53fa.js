/*! 
 Build based on gin-vue-admin 
 Time : 1696555582000 */
!function(){function e(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function o(o){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?e(Object(l),!0).forEach((function(e){t(o,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(l)):e(Object(l)).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(l,e))}))}return o}function t(e,o,t){return(o=function(e){var o=function(e,o){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,o||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(e)}(e,"string");return"symbol"==typeof o?o:String(o)}(o))in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}System.register(["./index-legacy-b67e08c1.js"],(function(e,n){"use strict";var l,r,u,a,c,i,s,f,d,p,y,v,b,m,g,O,C,h,j;return{setters:[function(e){l=e.C,r=e.D,u=e.a1,a=e.bf,c=e.aX,i=e.by,s=e.O,f=e.a,d=e.ci,p=e.cj,y=e.F,v=e.Q,b=e.ck,m=e.X,g=e.T,O=e.S,C=e.a7,h=e.aC,j=e.b5}],execute:function(){var n,w=document.createElement("style");w.textContent=".el-overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:2000;height:100%;background-color:var(--el-overlay-color-lighter);overflow:auto}.el-overlay .el-overlay-root{height:0}\n",document.head.appendChild(w);var D=e("d",l({center:Boolean,alignCenter:Boolean,closeIcon:{type:r},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""}}));e("a",{close:function(){return!0}}),e("b",l(o(o({},D),{},{appendToBody:Boolean,beforeClose:{type:u(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}))),e("c",(t(n={open:function(){return!0},opened:function(){return!0},close:function(){return!0},closed:function(){return!0}},a,(function(e){return c(e)})),t(n,"openAutoFocus",(function(){return!0})),t(n,"closeAutoFocus",(function(){return!0})),n)),e("u",(function(e,o){var t=C().emit,n=i().nextZIndex,l="",r=s(),u=s(),c=f(!1),w=f(!1),D=f(!1),S=f(e.zIndex||n()),B=void 0,P=void 0,x=d("namespace",p),F=y((function(){var o={},t="--".concat(x.value,"-dialog");return e.fullscreen||(e.top&&(o["".concat(t,"-margin-top")]=e.top),e.width&&(o["".concat(t,"-width")]=v(e.width))),o})),k=y((function(){return e.alignCenter?{display:"flex"}:{}}));function I(){if(null==P||P(),null==B||B(),e.openDelay&&e.openDelay>0){var o=h((function(){return z()}),e.openDelay);B=o.stop}else z()}function E(){if(null==B||B(),null==P||P(),e.closeDelay&&e.closeDelay>0){var o=h((function(){return N()}),e.closeDelay);P=o.stop}else N()}function A(){e.beforeClose?e.beforeClose((function(e){e||(w.value=!0,c.value=!1)})):E()}function z(){j&&(c.value=!0)}function N(){c.value=!1}return e.lockScroll&&b(c),m((function(){return e.modelValue}),(function(l){l?(w.value=!1,I(),D.value=!0,S.value=e.zIndex?S.value++:n(),g((function(){t("open"),o.value&&(o.value.scrollTop=0)}))):c.value&&E()})),m((function(){return e.fullscreen}),(function(e){o.value&&(e?(l=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=l)})),O((function(){e.modelValue&&(c.value=!0,D.value=!0,I())})),{afterEnter:function(){t("opened")},afterLeave:function(){t("closed"),t(a,!1),e.destroyOnClose&&(D.value=!1)},beforeLeave:function(){t("close")},handleClose:A,onModalClick:function(){e.closeOnClickModal&&A()},close:E,doClose:N,onOpenAutoFocus:function(){t("openAutoFocus")},onCloseAutoFocus:function(){t("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&A()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:r,bodyId:u,closed:w,style:F,overlayDialogStyle:k,rendered:D,visible:c,zIndex:S}}))}}}))}();

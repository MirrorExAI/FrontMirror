/*! 
 Build based on gin-vue-admin 
 Time : 1697152884000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},l=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(C){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,l=Object.create(a.prototype),i=new O(n||[]);return o(l,"_invoke",{value:k(t,r,i)}),l}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}e.wrap=s;var p={};function d(){}function y(){}function h(){}var m={};u(m,l,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(L([])));g&&g!==r&&n.call(g,l)&&(m=g);var b=h.prototype=d.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,a,l,i){var c=f(t[o],t,a);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,l,i)}),(function(t){r("throw",t,l,i)})):e.resolve(s).then((function(t){u.value=t,l(u)}),(function(t){return r("throw",t,l,i)}))}i(c.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function k(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var l=r.delegate;if(l){var i=j(l,r);if(i){if(i===p)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function L(t){if(t||""===t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return y.prototype=h,o(b,"constructor",{value:h,configurable:!0}),o(h,"constructor",{value:y,configurable:!0}),y.displayName=u(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},w(x.prototype),u(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var l=new x(s(t,r,n,o),a);return e.isGeneratorFunction(r)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},w(b),u(b,c,"Generator"),u(b,l,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return l.type="throw",l.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],l=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var i=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(i&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var l=a?a.completion:{};return l.type=t,l.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(l)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}function e(t,e,r,n,o,a,l){try{var i=t[a](l),c=i.value}catch(u){return void r(u)}i.done?e(c):Promise.resolve(c).then(n,o)}function r(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var l=t.apply(r,n);function i(t){e(l,o,a,i,c,"next",t)}function c(t){e(l,o,a,i,c,"throw",t)}i(void 0)}))}}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}System.register(["./index-legacy-285edefa.js","./table-column-legacy-d598e013.js","./checkbox-legacy-4bb2238e.js","./tooltip-legacy-b3c86740.js","./popper-legacy-73fb5b5e.js","./scrollbar-legacy-d84005f1.js","./tag-legacy-7507b1a2.js","./form-item-legacy-f9f12040.js","./input-legacy-cd47f65e.js","./select-legacy-921c5b67.js","./popover-legacy-26b1bd29.js","./button-legacy-ca0b763b.js","./warningBar-legacy-419e175e.js","./autoCode-legacy-6d4b6dc2.js","./_plugin-vue_export-helper-legacy-c6aa7c23.js","./index-legacy-b174e7d9.js","./_Uint8Array-legacy-36c67e2b.js","./_initCloneObject-legacy-8604b750.js","./isEqual-legacy-e06806a3.js","./debounce-legacy-a87c5485.js","./_baseClone-legacy-2f50914c.js","./index-legacy-ad5515ac.js","./strings-legacy-7c858fb7.js","./dropdown-legacy-f7841634.js","./icon-legacy-4309e40a.js"],(function(e,n){"use strict";var a,l,i,c,u,s,f,p,d,y,h,m,v,g,b,w,x,k,j,_,E,O,L,C,G,P,V,N,S,B,T,R,F,z,I,$,q,K,U,A,D;return{setters:[function(t){a=t.x,l=t.y,i=t.O,c=t.o,u=t.c,s=t.b,f=t.G,p=t._,d=t.C,y=t.P,h=t.F,m=t.Q,v=t.B,g=t.d,b=t.n,w=t.H,x=t.t,k=t.e,j=t.K,_=t.s,E=t.a,O=t.r,L=t.w,C=t.g,G=t.M,P=t.N,V=t.h,N=t.l,S=t.E,B=t.p,T=t.i},function(t){R=t.E,F=t.a},null,null,null,null,null,function(t){z=t.a,I=t.E},null,function(t){$=t.E,q=t.a},function(t){K=t.E},null,function(t){U=t._},function(t){A=t.g},function(t){D=t._},null,null,null,null,null,null,null,null,null,null],execute:function(){var n=document.createElement("style");n.textContent=".el-empty{--el-empty-padding: 40px 0;--el-empty-image-width: 160px;--el-empty-description-margin-top: 20px;--el-empty-bottom-margin-top: 20px;--el-empty-fill-color-0: var(--el-color-white);--el-empty-fill-color-1: #fcfcfd;--el-empty-fill-color-2: #f8f9fb;--el-empty-fill-color-3: #f7f8fc;--el-empty-fill-color-4: #eeeff3;--el-empty-fill-color-5: #edeef2;--el-empty-fill-color-6: #e9ebef;--el-empty-fill-color-7: #e5e7e9;--el-empty-fill-color-8: #e0e3e9;--el-empty-fill-color-9: #d5d7de;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;box-sizing:border-box;padding:var(--el-empty-padding)}.el-empty__image{width:var(--el-empty-image-width)}.el-empty__image img{-webkit-user-select:none;user-select:none;width:100%;height:100%;vertical-align:top;object-fit:contain}.el-empty__image svg{color:var(--el-svg-monochrome-grey);fill:currentColor;width:100%;height:100%;vertical-align:top}.el-empty__description{margin-top:var(--el-empty-description-margin-top)}.el-empty__description p{margin:0;font-size:var(--el-font-size-base);color:var(--el-text-color-secondary)}.el-empty__bottom{margin-top:var(--el-empty-bottom-margin-top)}.secret[data-v-2065cfcb]{padding:30px;margin-top:20px;background:#F5F5F5}.secret p[data-v-2065cfcb]{line-height:30px}.query-ipt[data-v-2065cfcb]{width:300px;margin-right:30px}.content[data-v-2065cfcb]{padding:10px;width:100%;background:#F5F5F5;margin-top:30px}.content p[data-v-2065cfcb]{font-size:16px;line-height:20px}.tables[data-v-2065cfcb]{width:100%;margin-top:30px}.tables .text[data-v-2065cfcb]{font-size:18px;color:#6b7687;text-align:center}\n",document.head.appendChild(n);var M={viewBox:"0 0 79 86",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},Y=["id"],Q=["stop-color"],Z=["stop-color"],H=["id"],X=["stop-color"],J=["stop-color"],W=["id"],tt={id:"Illustrations",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},et={id:"B-type",transform:"translate(-1268.000000, -535.000000)"},rt={id:"Group-2",transform:"translate(1268.000000, 535.000000)"},nt=["fill"],ot=["fill"],at={id:"Group-Copy",transform:"translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)"},lt=["fill"],it=["fill"],ct=["fill"],ut=["fill"],st=["fill"],ft={id:"Rectangle-Copy-17",transform:"translate(53.000000, 45.000000)"},pt=["fill","xlink:href"],dt=["fill","mask"],yt=["fill"],ht=a({name:"ImgEmpty"}),mt=a(o(o({},ht),{},{setup:function(t){var e=l("empty"),r=i();return function(t,n){return c(),u("svg",M,[s("defs",null,[s("linearGradient",{id:"linearGradient-1-".concat(f(r)),x1:"38.8503086%",y1:"0%",x2:"61.1496914%",y2:"100%"},[s("stop",{"stop-color":"var(".concat(f(e).cssVarBlockName("fill-color-1"),")"),offset:"0%"},null,8,Q),s("stop",{"stop-color":"var(".concat(f(e).cssVarBlockName("fill-color-4"),")"),offset:"100%"},null,8,Z)],8,Y),s("linearGradient",{id:"linearGradient-2-".concat(f(r)),x1:"0%",y1:"9.5%",x2:"100%",y2:"90.5%"},[s("stop",{"stop-color":"var(".concat(f(e).cssVarBlockName("fill-color-1"),")"),offset:"0%"},null,8,X),s("stop",{"stop-color":"var(".concat(f(e).cssVarBlockName("fill-color-6"),")"),offset:"100%"},null,8,J)],8,H),s("rect",{id:"path-3-".concat(f(r)),x:"0",y:"0",width:"17",height:"36"},null,8,W)]),s("g",tt,[s("g",et,[s("g",rt,[s("path",{id:"Oval-Copy-2",d:"M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",fill:"var(".concat(f(e).cssVarBlockName("fill-color-3"),")")},null,8,nt),s("polygon",{id:"Rectangle-Copy-14",fill:"var(".concat(f(e).cssVarBlockName("fill-color-7"),")"),transform:"translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",points:"13 58 53 58 42 45 2 45"},null,8,ot),s("g",at,[s("polygon",{id:"Rectangle-Copy-10",fill:"var(".concat(f(e).cssVarBlockName("fill-color-7"),")"),transform:"translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",points:"2.84078316e-14 3 18 3 23 7 5 7"},null,8,lt),s("polygon",{id:"Rectangle-Copy-11",fill:"var(".concat(f(e).cssVarBlockName("fill-color-5"),")"),points:"-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"},null,8,it),s("rect",{id:"Rectangle-Copy-12",fill:"url(#linearGradient-1-".concat(f(r),")"),transform:"translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",x:"38",y:"7",width:"17",height:"36"},null,8,ct),s("polygon",{id:"Rectangle-Copy-13",fill:"var(".concat(f(e).cssVarBlockName("fill-color-2"),")"),transform:"translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",points:"24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"},null,8,ut)]),s("rect",{id:"Rectangle-Copy-15",fill:"url(#linearGradient-2-".concat(f(r),")"),x:"13",y:"45",width:"40",height:"36"},null,8,st),s("g",ft,[s("use",{id:"Mask",fill:"var(".concat(f(e).cssVarBlockName("fill-color-8"),")"),transform:"translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ","xlink:href":"#path-3-".concat(f(r))},null,8,pt),s("polygon",{id:"Rectangle-Copy",fill:"var(".concat(f(e).cssVarBlockName("fill-color-9"),")"),mask:"url(#mask-4-".concat(f(r),")"),transform:"translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",points:"7 0 24 0 20 18 7 16.5"},null,8,dt)]),s("polygon",{id:"Rectangle-Copy-18",fill:"var(".concat(f(e).cssVarBlockName("fill-color-2"),")"),transform:"translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",points:"62 45 79 45 70 58 53 58"},null,8,yt)])])])])}}})),vt=p(mt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/empty/src/img-empty.vue"]]),gt=d({image:{type:String,default:""},imageSize:Number,description:{type:String,default:""}}),bt=["src"],wt={key:1},xt=a({name:"ElEmpty"}),kt=a(o(o({},xt),{},{props:gt,setup:function(t){var e=t,r=y().t,n=l("empty"),o=h((function(){return e.description||r("el.table.emptyText")})),a=h((function(){return{width:m(e.imageSize)}}));return function(t,e){return c(),u("div",{class:b(f(n).b())},[s("div",{class:b(f(n).e("image")),style:w(f(a))},[t.image?(c(),u("img",{key:0,src:t.image,ondragstart:"return false"},null,8,bt)):v(t.$slots,"image",{key:1},(function(){return[g(vt)]}))],6),s("div",{class:b(f(n).e("description"))},[t.$slots.description?v(t.$slots,"description",{key:0}):(c(),u("p",wt,x(f(o)),1))],2),t.$slots.default?(c(),u("div",{key:0,class:b(f(n).e("bottom"))},[v(t.$slots,"default")],2)):k("v-if",!0)],2)}}})),jt=j(p(kt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/empty/src/empty.vue"]])),_t={class:"gva-table-box"},Et={key:0},Ot={class:"secret"},Lt={key:1},Ct=function(t){return B("data-v-2065cfcb"),t=t(),T(),t}((function(){return s("p",null,"确定要删除并返回吗？",-1)})),Gt={style:{"text-align":"right","margin-top":"8px"}},Pt={class:"tables"},Vt={key:1,class:"text"},Nt={__name:"chatTable",setup:function(e){var n=E(null),o=O({sk:""}),a=E(""),l=function(){var e=r(t().mark((function e(){var r;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_({url:"/chatGpt/getSK",method:"get"});case 2:r=t.sent,n.value=r.data.ok;case 4:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=r(t().mark((function e(){var r;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A();case 2:0===(r=t.sent).code&&(y.value=r.data.dbs);case 4:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();l(),i();var f=function(){var e=r(t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_({url:"/chatGpt/createSK",method:"post",data:o});case 2:if(0!==t.sent.code){t.next=6;break}return t.next=6,l();case 6:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=r(t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_({url:"/chatGpt/deleteSK",method:"delete"});case 2:if(0!==t.sent.code){t.next=6;break}return t.next=6,l();case 6:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=E({dbname:"",chat:""}),y=E([]),h=E([]),m=function(){var e=r(t().mark((function e(){var r;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e=d.value,_({url:"/chatGpt/getTable",method:"post",data:e});case 2:0===(r=t.sent).code&&(h.value=r.data.results||[]),a.value=r.data.sql;case 5:case"end":return t.stop()}var e}),e)})));return function(){return e.apply(this,arguments)}}();return function(t,e){var r=N,l=S,i=jt,v=K,b=z,w=$,x=q,k=I,j=R,_=F;return c(),u("div",_t,[g(U,{title:"使用GPT-3.5模型，存在一定不稳定性，成功率为50%左右，使用GPT-4可以极大提升成功率，但是费用较高。"}),n.value?(c(),u("div",Lt,[g(k,{model:d.value,"label-width":"120px"},{default:L((function(){return[g(b,{label:"删除当前sk："},{default:L((function(){return[g(v,{placement:"top",width:"160"},{reference:L((function(){return[g(l,{type:"primary",link:"",icon:"delete"},{default:L((function(){return[C("删除")]})),_:1})]})),default:L((function(){return[Ct,s("div",Gt,[g(l,{type:"primary",onClick:p},{default:L((function(){return[C("确定")]})),_:1})])]})),_:1})]})),_:1}),g(b,{label:"查询db名称："},{default:L((function(){return[g(x,{modelValue:d.value.dbname,"onUpdate:modelValue":e[1]||(e[1]=function(t){return d.value.dbname=t}),placeholder:"请选择库",style:{width:"115px"}},{default:L((function(){return[(c(!0),u(G,null,P(y.value,(function(t,e){return c(),V(w,{key:e,label:t.database,value:t.database},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),g(b,{label:"查询db描述："},{default:L((function(){return[g(r,{modelValue:d.value.chat,"onUpdate:modelValue":e[2]||(e[2]=function(t){return d.value.chat=t}),autosize:{minRows:2,maxRows:4},type:"textarea",clearable:"",placeholder:"请输入对话"},null,8,["modelValue"])]})),_:1}),g(b,{label:"GPT生成SQL:"},{default:L((function(){return[g(r,{modelValue:a.value,"onUpdate:modelValue":e[3]||(e[3]=function(t){return a.value=t}),autosize:{minRows:2,maxRows:4},type:"textarea",disabled:"",placeholder:"此处展示自动生成的sql"},null,8,["modelValue"])]})),_:1}),g(l,{type:"primary",onClick:m},{default:L((function(){return[C("查询")]})),_:1})]})),_:1},8,["model"]),s("div",Pt,[h.value.length?(c(),V(_,{key:0,ref:"multipleTable",data:h.value,style:{width:"100%"},"tooltip-effect":"dark",height:"400px"},{default:L((function(){return[(c(!0),u(G,null,P(h.value[0],(function(t,e){return c(),V(j,{key:e,prop:e,label:e,"min-width":"200","show-overflow-tooltip":""},null,8,["prop","label"])})),128))]})),_:1},8,["data"])):(c(),u("p",Vt,"请在对话框输入你需要AI帮你查询的内容：）"))])])):(c(),u("div",Et,[g(r,{modelValue:o.sk,"onUpdate:modelValue":e[0]||(e[0]=function(t){return o.sk=t}),class:"query-ipt",placeholder:"请输入您的ChatGpt SK",clearable:""},null,8,["modelValue"]),g(l,{type:"primary",onClick:f},{default:L((function(){return[C("保存")]})),_:1}),s("div",Ot,[g(i,{description:"请到gpt网站获取您的sk：https://platform.openai.com/account/api-keys"})])]))])}}};e("default",D(Nt,[["__scopeId","data-v-2065cfcb"]]))}}}))}();

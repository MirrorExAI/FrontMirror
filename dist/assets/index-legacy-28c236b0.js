/*! 
 Build based on gin-vue-admin 
 Time : 1696555582000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},l=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,l=Object.create(o.prototype),i=new E(n||[]);return a(l,"_invoke",{value:j(t,r,i)}),l}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=u;var f={};function h(){}function p(){}function m(){}var y={};c(y,l,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(L([])));g&&g!==r&&n.call(g,l)&&(y=g);var b=m.prototype=h.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(a,o,l,i){var s=d(t[a],t,o);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,l,i)}),(function(t){r("throw",t,l,i)})):e.resolve(u).then((function(t){c.value=t,l(c)}),(function(t){return r("throw",t,l,i)}))}i(s.arg)}var o;a(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,a){r(t,n,e,a)}))}return o=o?o.then(a,a):a()}})}function j(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return{value:void 0,done:!0}}for(r.method=a,r.arg=o;;){var l=r.delegate;if(l){var i=_(l,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=d(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=d(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function L(t){if(t||""===t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}throw new TypeError(typeof t+" is not iterable")}return p.prototype=m,a(b,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:p,configurable:!0}),p.displayName=c(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},w(x.prototype),c(x.prototype,i,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var l=new x(u(t,r,n,a),o);return e.isGeneratorFunction(r)?l:l.next().then((function(t){return t.done?t.value:l.next()}))},w(b),c(b,s,"Generator"),c(b,l,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(q),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return l.type="throw",l.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],l=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=t,l.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(l)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),q(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;q(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function e(t,e,r,n,a,o,l){try{var i=t[o](l),s=i.value}catch(c){return void r(c)}i.done?e(s):Promise.resolve(s).then(n,a)}System.register(["./index-legacy-b67e08c1.js","./form-item-legacy-288104c4.js","./input-legacy-cd47f65e.js","./tag-legacy-4756e1e4.js","./select-legacy-49a1954e.js","./scrollbar-legacy-e71bc036.js","./popper-legacy-73fb5b5e.js","./button-legacy-ca0b763b.js","./login_right_banner-legacy-15221566.js","./_plugin-vue_export-helper-legacy-c6aa7c23.js","./_baseClone-legacy-757546ef.js","./_Uint8Array-legacy-6fa00cc6.js","./_initCloneObject-legacy-3e299faa.js","./index-legacy-8e13950d.js","./index-legacy-dcbcb87b.js","./strings-legacy-e2a15fdc.js","./isEqual-legacy-e51c0d9a.js","./debounce-legacy-60010ae8.js"],(function(r,n){"use strict";var a,o,l,i,s,c,u,d,f,h,p,m,y,v,g,b,w,x,j,_,k,q,E,L,N,V;return{setters:[function(t){a=t.s,o=t.u,l=t.r,i=t.a,s=t.o,c=t.c,u=t.b,d=t.n,f=t.d,h=t.w,p=t.e,m=t.f,y=t.E,v=t.g,g=t.h,b=t.p,w=t.i,x=t.j,j=t.k,_=t.l},function(t){k=t.E,q=t.a},null,null,function(t){E=t.E,L=t.a},null,null,null,function(t){N=t._},function(t){V=t._},null,null,null,null,null,null,null,null],execute:function(){var n=document.createElement("style");n.textContent=".slide-in-fwd-top[data-v-840afc03]{animation:slide-in-fwd-top-840afc03 .4s cubic-bezier(.25,.46,.45,.94) both}.slide-out-right[data-v-840afc03]{animation:slide-out-right-840afc03 .5s cubic-bezier(.55,.085,.68,.53) both}.slide-in-left[data-v-840afc03]{animation:slide-in-left-840afc03 .5s cubic-bezier(.25,.46,.45,.94) both}@keyframes slide-in-fwd-top-840afc03{0%{transform:translateZ(-1400px) translateY(-800px);opacity:0}to{transform:translateZ(0) translateY(0);opacity:1}}@keyframes slide-out-right-840afc03{0%{transform:translate(0);opacity:1}to{transform:translate(1000px);opacity:0}}@keyframes slide-in-left-840afc03{0%{transform:translate(-1000px);opacity:0}to{transform:translate(0);opacity:1}}@media (max-width: 750px){.form[data-v-840afc03]{width:94vw!important;padding:0}}\n",document.head.appendChild(n);var O=function(t){return b("data-v-840afc03"),t=t(),w(),t},T={class:"rounded-lg flex items-center justify-evenly w-full h-full relative bg-white md:w-screen md:h-screen md:bg-[#194bfb] overflow-hidden"},P={class:"rounded-md w-full h-full flex items-center justify-center overflow-hidden"},G=O((function(){return u("div",{class:"oblique h-[130%] w-3/5 bg-white transform -rotate-12 absolute -ml-80"},null,-1)})),F={class:"text-lg"},U=m('<div class="font-sans text-4xl font-bold text-center mb-4" data-v-840afc03>GIN-VUE-ADMIN</div><p class="text-gray-600 mb-2" data-v-840afc03>初始化须知</p><p class="text-gray-600 mb-2" data-v-840afc03>1.您需有用一定的VUE和GOLANG基础</p><p class="text-gray-600 mb-2" data-v-840afc03>2.请您确认是否已经阅读过<a class="text-blue-600 font-bold" href="https://www.gin-vue-admin.com" target="_blank" data-v-840afc03>官方文档</a> <a class="text-blue-600 font-bold" href="https://www.bilibili.com/video/BV1kv4y1g7nT?p=2" target="_blank" data-v-840afc03>初始化视频</a></p><p class="text-gray-600 mb-2" data-v-840afc03>3.请您确认是否了解后续的配置流程</p><p class="text-gray-600 mb-2" data-v-840afc03>4.如果您使用mysql数据库，请确认数据库引擎为<span class="text-red-600 font-bold text-3xl ml-2" data-v-840afc03>innoDB</span></p><p class="text-gray-600 mb-2" data-v-840afc03>注：开发组不为文档中书写过的内容提供无偿服务</p>',7),C={class:"flex items-center justify-between mt-8"},S={style:{"text-align":"right"}},I=O((function(){return u("div",{class:"hidden md:block w-1/2 h-full float-right bg-[#194bfb]"},[u("img",{class:"h-full",src:N,alt:"banner"})],-1)})),z={name:"Init"},A=Object.assign(z,{setup:function(r){var n=o(),m=l({showReadme:!1,showForm:!1}),b=function(){m.showReadme=!1,setTimeout((function(){m.showForm=!0}),20)},w=function(){window.open("https://www.gin-vue-admin.com/guide/start-quickly/env.html")},N=i(!1),V=l({dbType:"mysql",host:"127.0.0.1",port:"3306",userName:"root",password:"",dbName:"gva",dbPath:""}),O=function(t){switch(t){case"mysql":default:Object.assign(V,{dbType:"mysql",host:"127.0.0.1",port:"3306",userName:"root",password:"",dbName:"gva",dbPath:""});break;case"pgsql":Object.assign(V,{dbType:"pgsql",host:"127.0.0.1",port:"5432",userName:"postgres",password:"",dbName:"gva",dbPath:""});break;case"oracle":Object.assign(V,{dbType:"oracle",host:"127.0.0.1",port:"1521",userName:"oracle",password:"",dbName:"gva",dbPath:""});break;case"mssql":Object.assign(V,{dbType:"mssql",host:"127.0.0.1",port:"1433",userName:"mssql",password:"",dbName:"gva",dbPath:""});break;case"sqlite":Object.assign(V,{dbType:"sqlite",host:"",port:"",userName:"",password:"",dbName:"gva",dbPath:""})}},z=function(){var r,o=(r=t().mark((function e(){var r,o;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=x.service({lock:!0,text:"正在初始化数据库，请稍候",spinner:"loading",background:"rgba(0, 0, 0, 0.7)"}),t.prev=1,t.next=4,a({url:"/init/initdb",method:"post",data:V});case 4:0===(o=t.sent).code&&(N.value=!0,j({type:"success",message:o.msg}),n.push({name:"Login"})),r.close(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),r.close();case 12:case"end":return t.stop()}}),e,null,[[1,9]])})),function(){var t=this,n=arguments;return new Promise((function(a,o){var l=r.apply(t,n);function i(t){e(l,a,o,i,s,"next",t)}function s(t){e(l,a,o,i,s,"throw",t)}i(void 0)}))});return function(){return o.apply(this,arguments)}}();return function(t,e){var r=y,n=E,a=L,o=q,l=_,i=k;return s(),c("div",T,[u("div",P,[G,m.showForm?p("",!0):(s(),c("div",{key:0,class:d([m.showReadme?"slide-out-right":"slide-in-fwd-top"])},[u("div",F,[U,u("p",C,[f(r,{type:"primary",onClick:w,size:"large"},{default:h((function(){return[v(" 阅读文档 ")]})),_:1}),f(r,{type:"primary",onClick:b,size:"large"},{default:h((function(){return[v(" 我已确认 ")]})),_:1})])])],2)),m.showForm?(s(),c("div",{key:1,class:d([[m.showForm?"slide-in-left":"slide-out-right"],"w-96"])},[f(i,{ref:"formRef",model:V,"label-width":"100px",size:"large"},{default:h((function(){return[f(o,{label:"数据库类型"},{default:h((function(){return[f(a,{modelValue:V.dbType,"onUpdate:modelValue":e[0]||(e[0]=function(t){return V.dbType=t}),placeholder:"请选择",onChange:O,class:"w-full"},{default:h((function(){return[f(n,{key:"mysql",label:"mysql",value:"mysql"}),f(n,{key:"pgsql",label:"pgsql",value:"pgsql"}),f(n,{key:"oracle",label:"oracle",value:"oracle"}),f(n,{key:"mssql",label:"mssql",value:"mssql"}),f(n,{key:"sqlite",label:"sqlite",value:"sqlite"})]})),_:1},8,["modelValue"])]})),_:1}),"sqlite"!==V.dbType?(s(),g(o,{key:0,label:"host"},{default:h((function(){return[f(l,{modelValue:V.host,"onUpdate:modelValue":e[1]||(e[1]=function(t){return V.host=t}),placeholder:"请输入数据库链接"},null,8,["modelValue"])]})),_:1})):p("",!0),"sqlite"!==V.dbType?(s(),g(o,{key:1,label:"port"},{default:h((function(){return[f(l,{modelValue:V.port,"onUpdate:modelValue":e[2]||(e[2]=function(t){return V.port=t}),placeholder:"请输入数据库端口"},null,8,["modelValue"])]})),_:1})):p("",!0),"sqlite"!==V.dbType?(s(),g(o,{key:2,label:"userName"},{default:h((function(){return[f(l,{modelValue:V.userName,"onUpdate:modelValue":e[3]||(e[3]=function(t){return V.userName=t}),placeholder:"请输入数据库用户名"},null,8,["modelValue"])]})),_:1})):p("",!0),"sqlite"!==V.dbType?(s(),g(o,{key:3,label:"password"},{default:h((function(){return[f(l,{modelValue:V.password,"onUpdate:modelValue":e[4]||(e[4]=function(t){return V.password=t}),placeholder:"请输入数据库密码（没有则为空）"},null,8,["modelValue"])]})),_:1})):p("",!0),f(o,{label:"dbName"},{default:h((function(){return[f(l,{modelValue:V.dbName,"onUpdate:modelValue":e[5]||(e[5]=function(t){return V.dbName=t}),placeholder:"请输入数据库名称"},null,8,["modelValue"])]})),_:1}),"sqlite"===V.dbType?(s(),g(o,{key:4,label:"dbPath"},{default:h((function(){return[f(l,{modelValue:V.dbPath,"onUpdate:modelValue":e[6]||(e[6]=function(t){return V.dbPath=t}),placeholder:"请输入sqlite数据库文件存放路径"},null,8,["modelValue"])]})),_:1})):p("",!0),f(o,null,{default:h((function(){return[u("div",S,[f(r,{type:"primary",onClick:z},{default:h((function(){return[v("立即初始化")]})),_:1})])]})),_:1})]})),_:1},8,["model"])],2)):p("",!0)]),I])}}});r("default",V(A,[["__scopeId","data-v-840afc03"]]))}}}))}();

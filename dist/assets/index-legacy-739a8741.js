/*! 
 Build based on gin-vue-admin 
 Time : 1697152884000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(C){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var o=t&&t.prototype instanceof d?t:d,u=Object.create(o.prototype),l=new O(r||[]);return a(u,"_invoke",{value:x(e,n,l)}),u}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(C){return{type:"throw",arg:C}}}t.wrap=s;var p={};function d(){}function v(){}function h(){}var y={};c(y,u,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(V([])));m&&m!==n&&r.call(m,u)&&(y=m);var b=h.prototype=d.prototype=Object.create(y);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function n(a,o,u,l){var i=f(e[a],e,o);if("throw"!==i.type){var c=i.arg,s=c.value;return s&&"object"==typeof s&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,u,l)}),(function(e){n("throw",e,u,l)})):t.resolve(s).then((function(e){c.value=e,u(c)}),(function(e){return n("throw",e,u,l)}))}l(i.arg)}var o;a(this,"_invoke",{value:function(e,r){function a(){return new t((function(t,a){n(e,r,t,a)}))}return o=o?o.then(a,a):a()}})}function x(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return{value:void 0,done:!0}}for(n.method=a,n.arg=o;;){var u=n.delegate;if(u){var l=_(u,n);if(l){if(l===p)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var i=f(e,t,n);if("normal"===i.type){if(r=n.done?"completed":"suspendedYield",i.arg===p)continue;return{value:i.arg,done:n.done}}"throw"===i.type&&(r="completed",n.method="throw",n.arg=i.arg)}}}function _(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var a=f(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,p;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function V(e){if(e||""===e){var t=e[u];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}throw new TypeError(typeof e+" is not iterable")}return v.prototype=h,a(b,"constructor",{value:h,configurable:!0}),a(h,"constructor",{value:v,configurable:!0}),v.displayName=c(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(b),e},t.awrap=function(e){return{__await:e}},w(j.prototype),c(j.prototype,l,(function(){return this})),t.AsyncIterator=j,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var u=new j(s(e,n,r,a),o);return t.isGeneratorFunction(n)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},w(b),c(b,i,"Generator"),c(b,u,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=V,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return u.type="throw",u.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],u=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),i=r.call(o,"finallyLoc");if(l&&i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=e,u.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;E(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:V(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t,n,r,a,o,u){try{var l=e[o](u),i=l.value}catch(c){return void n(c)}l.done?t(i):Promise.resolve(i).then(r,a)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var u=e.apply(t,n);function l(e){a(u,r,o,l,i,"next",e)}function i(e){a(u,r,o,l,i,"throw",e)}l(void 0)}))}}System.register(["./index-legacy-285edefa.js","./dialog-legacy-850f501e.js","./overlay-legacy-c55defcc.js","./pagination-legacy-2ba3e143.js","./input-legacy-cd47f65e.js","./tag-legacy-7507b1a2.js","./select-legacy-921c5b67.js","./scrollbar-legacy-d84005f1.js","./popper-legacy-73fb5b5e.js","./table-column-legacy-d598e013.js","./checkbox-legacy-4bb2238e.js","./tooltip-legacy-b3c86740.js","./popover-legacy-26b1bd29.js","./icon-legacy-4309e40a.js","./form-item-legacy-f9f12040.js","./button-legacy-ca0b763b.js","./api-legacy-f7563ea6.js","./stringFun-legacy-7a0441ab.js","./warningBar-legacy-419e175e.js","./doc-legacy-d4eaa869.js","./_plugin-vue_export-helper-legacy-c6aa7c23.js","./isEqual-legacy-e06806a3.js","./_Uint8Array-legacy-36c67e2b.js","./index-legacy-b174e7d9.js","./index-legacy-ad5515ac.js","./strings-legacy-7c858fb7.js","./debounce-legacy-a87c5485.js","./_initCloneObject-legacy-8604b750.js","./dropdown-legacy-f7841634.js","./_baseClone-legacy-2f50914c.js"],(function(t,r){"use strict";var a,u,l,i,c,s,f,p,d,v,h,y,g,m,b,w,j,x,_,k,E,O,V,C,L,P,G,S,A,T,I,U,N,D,F,z,q,B,Y,M;return{setters:[function(e){a=e.a,u=e.o,l=e.c,i=e.b,c=e.d,s=e.w,f=e.M,p=e.N,d=e.h,v=e.g,h=e.G,y=e.aM,g=e.t,m=e.k,b=e.a4,w=e.l,j=e.E,x=e.J,_=e.p,k=e.i},function(e){E=e.E},null,function(e){O=e.E},null,null,function(e){V=e.E,C=e.a},null,null,function(e){L=e.E,P=e.a},null,null,function(e){G=e.E},null,function(e){S=e.a,A=e.E},null,function(e){T=e.g,I=e.d,U=e.f,N=e.a,D=e.u,F=e.c,z=e.b},function(e){q=e.t},function(e){B=e._},function(e){Y=e.t},function(e){M=e._},null,null,null,null,null,null,null,null,null],execute:function(){var r=document.createElement("style");r.textContent=".warning[data-v-8cdb0816]{color:#dc143c}\n",document.head.appendChild(r);var R=function(e){return _("data-v-8cdb0816"),e=e(),k(),e},J={class:"gva-search-box"},K={class:"gva-table-box"},Q={class:"gva-btn-list"},X=R((function(){return i("p",null,"确定要删除吗？",-1)})),Z={style:{"text-align":"right","margin-top":"8px"}},$=R((function(){return i("p",null,"确定要刷新Casbin缓存吗？",-1)})),H={style:{"text-align":"right","margin-top":"8px"}},W={class:"gva-pagination"},ee={class:"dialog-footer"},te={name:"Api"},ne=Object.assign(te,{setup:function(t){var r=a([]),_=a({path:"",apiGroup:"",method:"",description:""}),k=a([{value:"POST",label:"创建",type:"success"},{value:"GET",label:"查看",type:""},{value:"PUT",label:"更新",type:"warning"},{value:"DELETE",label:"删除",type:"danger"}]),M=a(""),R=a({path:[{required:!0,message:"请输入api路径",trigger:"blur"}],apiGroup:[{required:!0,message:"请输入组名称",trigger:"blur"}],method:[{required:!0,message:"请选择请求方式",trigger:"blur"}],description:[{required:!0,message:"请输入api介绍",trigger:"blur"}]}),te=a(1),ne=a(0),re=a(10),ae=a([]),oe=a({}),ue=function(){oe.value={}},le=function(){te.value=1,re.value=10,fe()},ie=function(e){re.value=e,fe()},ce=function(e){te.value=e,fe()},se=function(e){var t=e.prop,n=e.order;t&&("ID"===t&&(t="id"),oe.value.orderKey=q(t),oe.value.desc="descending"===n),fe()},fe=function(){var t=o(e().mark((function t(){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(n({page:te.value,pageSize:re.value},oe.value));case 2:0===(r=e.sent).code&&(ae.value=r.data.list,ne.value=r.data.total,te.value=r.data.page,re.value=r.data.pageSize);case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();fe();var pe=function(e){r.value=e},de=a(!1),ve=function(){var t=o(e().mark((function t(){var n,a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.value.map((function(e){return e.ID})),e.next=3,I({ids:n});case 3:0===(a=e.sent).code&&(m({type:"success",message:a.msg}),ae.value.length===n.length&&te.value>1&&te.value--,de.value=!1,fe());case 5:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),he=a(!1),ye=function(){var t=o(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:0===(n=e.sent).code&&m({type:"success",message:n.msg}),he.value=!1;case 5:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ge=a(null),me=a("新增Api"),be=a(!1),we=function(e){switch(e){case"addApi":me.value="新增Api";break;case"edit":me.value="编辑Api"}M.value=e,be.value=!0},je=function(){ge.value.resetFields(),_.value={path:"",apiGroup:"",method:"",description:""},be.value=!1},xe=function(){var t=o(e().mark((function t(n){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N({id:n.ID});case 2:r=e.sent,_.value=r.data.api,we("edit");case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_e=function(){var t=o(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ge.value.validate(function(){var t=o(e().mark((function t(n){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=20;break}e.t0=M.value,e.next="addApi"===e.t0?4:"edit"===e.t0?11:18;break;case 4:return e.next=6,F(_.value);case 6:return 0===e.sent.code&&m({type:"success",message:"添加成功",showClose:!0}),fe(),je(),e.abrupt("break",20);case 11:return e.next=13,D(_.value);case 13:return 0===e.sent.code&&m({type:"success",message:"编辑成功",showClose:!0}),fe(),je(),e.abrupt("break",20);case 18:return m({type:"error",message:"未知操作",showClose:!0}),e.abrupt("break",20);case 20:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),ke=function(){var t=o(e().mark((function t(n){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:b.confirm("此操作将永久删除所有角色下该api, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(o(e().mark((function t(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(n);case 2:0===e.sent.code&&(m({type:"success",message:"删除成功!"}),1===ae.value.length&&te.value>1&&te.value--,fe());case 4:case"end":return e.stop()}}),t)}))));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return function(e,t){var n=w,a=S,o=V,m=C,b=j,T=A,I=x,U=G,N=L,D=P,F=O,z=E;return u(),l("div",null,[i("div",J,[c(T,{ref:"searchForm",inline:!0,model:oe.value},{default:s((function(){return[c(a,{label:"路径"},{default:s((function(){return[c(n,{modelValue:oe.value.path,"onUpdate:modelValue":t[0]||(t[0]=function(e){return oe.value.path=e}),placeholder:"路径"},null,8,["modelValue"])]})),_:1}),c(a,{label:"描述"},{default:s((function(){return[c(n,{modelValue:oe.value.description,"onUpdate:modelValue":t[1]||(t[1]=function(e){return oe.value.description=e}),placeholder:"描述"},null,8,["modelValue"])]})),_:1}),c(a,{label:"API组"},{default:s((function(){return[c(n,{modelValue:oe.value.apiGroup,"onUpdate:modelValue":t[2]||(t[2]=function(e){return oe.value.apiGroup=e}),placeholder:"api组"},null,8,["modelValue"])]})),_:1}),c(a,{label:"请求"},{default:s((function(){return[c(m,{modelValue:oe.value.method,"onUpdate:modelValue":t[3]||(t[3]=function(e){return oe.value.method=e}),clearable:"",placeholder:"请选择"},{default:s((function(){return[(u(!0),l(f,null,p(k.value,(function(e){return u(),d(o,{key:e.value,label:"".concat(e.label,"(").concat(e.value,")"),value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),c(a,null,{default:s((function(){return[c(b,{type:"primary",icon:"search",onClick:le},{default:s((function(){return[v("查询")]})),_:1}),c(b,{icon:"refresh",onClick:ue},{default:s((function(){return[v("重置")]})),_:1})]})),_:1})]})),_:1},8,["model"])]),i("div",K,[i("div",Q,[c(b,{type:"primary",icon:"plus",onClick:t[4]||(t[4]=function(e){return we("addApi")})},{default:s((function(){return[v("新增")]})),_:1}),c(I,{class:"cursor-pointer",onClick:t[5]||(t[5]=function(e){return h(Y)("https://www.bilibili.com/video/BV1kv4y1g7nT?p=7&vd_source=f2640257c21e3b547a790461ed94875e")})},{default:s((function(){return[c(h(y))]})),_:1}),c(U,{modelValue:de.value,"onUpdate:modelValue":t[8]||(t[8]=function(e){return de.value=e}),placement:"top",width:"160"},{reference:s((function(){return[c(b,{icon:"delete",disabled:!r.value.length,onClick:t[7]||(t[7]=function(e){return de.value=!0})},{default:s((function(){return[v("删除")]})),_:1},8,["disabled"])]})),default:s((function(){return[X,i("div",Z,[c(b,{type:"primary",link:"",onClick:t[6]||(t[6]=function(e){return de.value=!1})},{default:s((function(){return[v("取消")]})),_:1}),c(b,{type:"primary",onClick:ve},{default:s((function(){return[v("确定")]})),_:1})])]})),_:1},8,["modelValue"]),c(U,{modelValue:he.value,"onUpdate:modelValue":t[11]||(t[11]=function(e){return he.value=e}),placement:"top",width:"160"},{reference:s((function(){return[c(b,{icon:"Refresh",onClick:t[10]||(t[10]=function(e){return he.value=!0})},{default:s((function(){return[v("刷新缓存")]})),_:1})]})),default:s((function(){return[$,i("div",H,[c(b,{type:"primary",link:"",onClick:t[9]||(t[9]=function(e){return he.value=!1})},{default:s((function(){return[v("取消")]})),_:1}),c(b,{type:"primary",onClick:ye},{default:s((function(){return[v("确定")]})),_:1})])]})),_:1},8,["modelValue"])]),c(D,{data:ae.value,onSortChange:se,onSelectionChange:pe},{default:s((function(){return[c(N,{type:"selection",width:"55"}),c(N,{align:"left",label:"id","min-width":"60",prop:"ID",sortable:"custom"}),c(N,{align:"left",label:"API路径","min-width":"150",prop:"path",sortable:"custom"}),c(N,{align:"left",label:"API分组","min-width":"150",prop:"apiGroup",sortable:"custom"}),c(N,{align:"left",label:"API简介","min-width":"150",prop:"description",sortable:"custom"}),c(N,{align:"left",label:"请求","min-width":"150",prop:"method",sortable:"custom"},{default:s((function(e){return[i("div",null,g(e.row.method)+" / "+g((t=e.row.method,n=k.value.filter((function(e){return e.value===t}))[0],n&&"".concat(n.label))),1)];var t,n})),_:1}),c(N,{align:"left",fixed:"right",label:"操作",width:"200"},{default:s((function(e){return[c(b,{icon:"edit",type:"primary",link:"",onClick:function(t){return xe(e.row)}},{default:s((function(){return[v("编辑")]})),_:2},1032,["onClick"]),c(b,{icon:"delete",type:"primary",link:"",onClick:function(t){return ke(e.row)}},{default:s((function(){return[v("删除")]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"]),i("div",W,[c(F,{"current-page":te.value,"page-size":re.value,"page-sizes":[10,30,50,100],total:ne.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:ce,onSizeChange:ie},null,8,["current-page","page-size","total"])])]),c(z,{modelValue:be.value,"onUpdate:modelValue":t[16]||(t[16]=function(e){return be.value=e}),"before-close":je,title:me.value},{footer:s((function(){return[i("div",ee,[c(b,{onClick:je},{default:s((function(){return[v("取 消")]})),_:1}),c(b,{type:"primary",onClick:_e},{default:s((function(){return[v("确 定")]})),_:1})])]})),default:s((function(){return[c(B,{title:"新增API，需要在角色管理内配置权限才可使用"}),c(T,{ref_key:"apiForm",ref:ge,model:_.value,rules:R.value,"label-width":"80px"},{default:s((function(){return[c(a,{label:"路径",prop:"path"},{default:s((function(){return[c(n,{modelValue:_.value.path,"onUpdate:modelValue":t[12]||(t[12]=function(e){return _.value.path=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1}),c(a,{label:"请求",prop:"method"},{default:s((function(){return[c(m,{modelValue:_.value.method,"onUpdate:modelValue":t[13]||(t[13]=function(e){return _.value.method=e}),placeholder:"请选择",style:{width:"100%"}},{default:s((function(){return[(u(!0),l(f,null,p(k.value,(function(e){return u(),d(o,{key:e.value,label:"".concat(e.label,"(").concat(e.value,")"),value:e.value},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),c(a,{label:"api分组",prop:"apiGroup"},{default:s((function(){return[c(n,{modelValue:_.value.apiGroup,"onUpdate:modelValue":t[14]||(t[14]=function(e){return _.value.apiGroup=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1}),c(a,{label:"api简介",prop:"description"},{default:s((function(){return[c(n,{modelValue:_.value.description,"onUpdate:modelValue":t[15]||(t[15]=function(e){return _.value.description=e}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["modelValue","title"])])}}});t("default",M(ne,[["__scopeId","data-v-8cdb0816"]]))}}}))}();

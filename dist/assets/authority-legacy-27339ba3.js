/*! 
 Build based on gin-vue-admin 
 Time : 1696555582000 */
!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(L){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,u=Object.create(o.prototype),i=new E(n||[]);return a(u,"_invoke",{value:I(t,r,i)}),u}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=s;var d={};function h(){}function y(){}function p(){}var v={};c(v,u,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==r&&n.call(m,u)&&(v=m);var b=p.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(a,o,u,i){var l=f(t[a],t,o);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,u,i)}),(function(t){r("throw",t,u,i)})):e.resolve(s).then((function(t){c.value=t,u(c)}),(function(t){return r("throw",t,u,i)}))}i(l.arg)}var o;a(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,a){r(t,n,e,a)}))}return o=o?o.then(a,a):a()}})}function I(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return{value:void 0,done:!0}}for(r.method=a,r.arg=o;;){var u=r.delegate;if(u){var i=x(u,r);if(i){if(i===d)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=f(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var a=f(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,d;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t||""===t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}throw new TypeError(typeof t+" is not iterable")}return y.prototype=p,a(b,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:y,configurable:!0}),y.displayName=c(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},w(j.prototype),c(j.prototype,i,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var u=new j(s(t,r,n,a),o);return e.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},w(b),c(b,l,"Generator"),c(b,u,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=O,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return u.type="throw",u.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],u=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function r(t){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?e(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(t,e,r){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e,r,n,a,o,u){try{var i=t[o](u),l=i.value}catch(c){return void r(c)}i.done?e(l):Promise.resolve(l).then(n,a)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var u=t.apply(e,r);function i(t){a(u,n,o,i,l,"next",t)}function l(t){a(u,n,o,i,l,"throw",t)}i(void 0)}))}}System.register(["./index-legacy-b67e08c1.js","./drawer-legacy-5c1ce66c.js","./overlay-legacy-089e53fa.js","./tab-pane-legacy-c151146e.js","./dialog-legacy-0b94c501.js","./form-item-legacy-288104c4.js","./input-legacy-cd47f65e.js","./radio-legacy-819188a5.js","./popper-legacy-73fb5b5e.js","./tag-legacy-4756e1e4.js","./checkbox-legacy-1482f512.js","./scrollbar-legacy-e71bc036.js","./table-column-legacy-3cc7f3d6.js","./tooltip-legacy-b3c86740.js","./icon-legacy-4309e40a.js","./button-legacy-ca0b763b.js","./authority-legacy-7a378016.js","./menus-legacy-e199afc5.js","./apis-legacy-9f0f62ca.js","./datas-legacy-24882fa7.js","./warningBar-legacy-a65d7828.js","./doc-legacy-d4eaa869.js","./strings-legacy-e2a15fdc.js","./_baseClone-legacy-757546ef.js","./_Uint8Array-legacy-6fa00cc6.js","./_initCloneObject-legacy-3e299faa.js","./rand-legacy-7da01718.js","./isEqual-legacy-e51c0d9a.js","./cloneDeep-legacy-50293371.js","./index-legacy-8e13950d.js","./index-legacy-dcbcb87b.js","./debounce-legacy-60010ae8.js","./tree-legacy-52071cb3.js","./index-legacy-1ffedba3.js","./authorityBtn-legacy-094fc2dd.js","./_plugin-vue_export-helper-legacy-c6aa7c23.js","./api-legacy-5226e552.js"],(function(e,n){"use strict";var a,u,i,l,c,s,f,d,h,y,p,v,g,m,b,w,j,I,x,_,k,E,O,L,N,C,P,S,V,T,A,G,D,F,U;return{setters:[function(t){a=t.a,u=t.o,i=t.c,l=t.d,c=t.b,s=t.w,f=t.g,d=t.G,h=t.aK,y=t.h,p=t.e,v=t.a4,g=t.k,m=t.E,b=t.J,w=t.l},function(t){j=t.E},null,function(t){I=t.E,x=t.a},function(t){_=t.E},function(t){k=t.a,E=t.E},null,function(t){O=t.E},null,null,null,null,function(t){L=t.E,N=t.a},null,null,null,function(t){C=t.g,P=t.d,S=t.c,V=t.u,T=t.a},function(t){A=t.default},function(t){G=t.default},function(t){D=t.default},function(t){F=t._},function(t){U=t.t},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var n=document.createElement("style");n.textContent=".authority .el-input-number{margin-left:15px}.authority .el-input-number span{display:none}.tree-content{margin-top:10px;height:calc(100vh - 158px);overflow:auto}\n",document.head.appendChild(n);var B={class:"authority"},q={class:"gva-table-box"},z={class:"gva-btn-list"},R={class:"dialog-footer"},Y={name:"Authority"};e("default",Object.assign(Y,{setup:function(e){var n=a([{authorityId:0,authorityName:"根角色"}]),Y=a(!1),J=a("add"),$=a({}),H=a("新增角色"),K=a(!1),Q=a(!1),W=a({}),X=a({authorityId:0,authorityName:"",parentId:0}),M=a({authorityId:[{required:!0,message:"请输入角色ID",trigger:"blur"},{validator:function(t,e,r){return/^[0-9]*[1-9][0-9]*$/.test(e)?r():r(new Error("请输入正整数"))},trigger:"blur",message:"必须为正整数"}],authorityName:[{required:!0,message:"请输入角色名",trigger:"blur"}],parentId:[{required:!0,message:"请选择父角色",trigger:"blur"}]}),Z=a(1),tt=a(0),et=a(999),rt=a([]),nt=a({}),at=function(){var e=o(t().mark((function e(){var n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C(r({page:Z.value,pageSize:et.value},nt.value));case 2:0===(n=t.sent).code&&(rt.value=n.data.list,tt.value=n.data.total,Z.value=n.data.page,et.value=n.data.pageSize);case 4:case"end":return t.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();at();var ot=function(t,e){$.value[t]=e},ut=a(null),it=a(null),lt=a(null),ct=function(t,e){var r=[ut,it,lt];e&&r[e].value.needConfirm&&(r[e].value.enterAndNext(),r[e].value.needConfirm=!1)},st=a(null),ft=function(){st.value&&st.value.resetFields(),X.value={authorityId:0,authorityName:"",parentId:0}},dt=function(){ft(),K.value=!1,Q.value=!1},ht=function(){st.value.validate(function(){var e=o(t().mark((function e(r){var n;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=27;break}X.value.authorityId=Number(X.value.authorityId),t.t0=J.value,t.next="add"===t.t0?5:"edit"===t.t0?10:"copy"===t.t0?15:25;break;case 5:return t.next=7,T(X.value);case 7:return 0===t.sent.code&&(g({type:"success",message:"添加成功!"}),at(),dt()),t.abrupt("break",25);case 10:return t.next=12,V(X.value);case 12:return 0===t.sent.code&&(g({type:"success",message:"添加成功!"}),at(),dt()),t.abrupt("break",25);case 15:return(n={authority:{authorityId:0,authorityName:"",datauthorityId:[],parentId:0},oldAuthorityId:0}).authority.authorityId=X.value.authorityId,n.authority.authorityName=X.value.authorityName,n.authority.parentId=X.value.parentId,n.authority.dataAuthorityId=W.value.dataAuthorityId,n.oldAuthorityId=W.value.authorityId,t.next=23,S(n);case 23:0===t.sent.code&&(g({type:"success",message:"复制成功！"}),at());case 25:ft(),K.value=!1;case 27:case"end":return t.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},yt=function(){n.value=[{authorityId:0,authorityName:"根角色"}],pt(rt.value,n.value,!1)},pt=function t(e,r,n){X.value.authorityId=String(X.value.authorityId),e&&e.forEach((function(e){if(e.children&&e.children.length){var a={authorityId:e.authorityId,authorityName:e.authorityName,disabled:n||e.authorityId===X.value.authorityId,children:[]};t(e.children,a.children,n||e.authorityId===X.value.authorityId),r.push(a)}else{var o={authorityId:e.authorityId,authorityName:e.authorityName,disabled:n||e.authorityId===X.value.authorityId};r.push(o)}}))},vt=function(t){ft(),H.value="新增角色",J.value="add",X.value.parentId=t,yt(),K.value=!0};return function(e,r){var a=m,C=b,S=L,V=N,T=O,Q=k,tt=w,et=E,nt=_,ft=I,pt=x,gt=j;return u(),i("div",B,[l(F,{title:"注：右上角头像下拉可切换角色"}),c("div",q,[c("div",z,[l(a,{type:"primary",icon:"plus",onClick:r[0]||(r[0]=function(t){return vt(0)})},{default:s((function(){return[f("新增角色")]})),_:1}),l(C,{class:"cursor-pointer",onClick:r[1]||(r[1]=function(t){return d(U)("https://www.bilibili.com/video/BV1kv4y1g7nT?p=8&vd_source=f2640257c21e3b547a790461ed94875e")})},{default:s((function(){return[l(d(h))]})),_:1})]),l(V,{data:rt.value,"tree-props":{children:"children",hasChildren:"hasChildren"},"row-key":"authorityId",style:{width:"100%"}},{default:s((function(){return[l(S,{label:"角色ID","min-width":"180",prop:"authorityId"}),l(S,{align:"left",label:"角色名称","min-width":"180",prop:"authorityName"}),l(S,{align:"left",label:"操作",width:"460"},{default:s((function(e){return[l(a,{icon:"setting",type:"primary",link:"",onClick:function(t){return r=e.row,Y.value=!0,void($.value=r);var r}},{default:s((function(){return[f("设置权限")]})),_:2},1032,["onClick"]),l(a,{icon:"plus",type:"primary",link:"",onClick:function(t){return vt(e.row.authorityId)}},{default:s((function(){return[f("新增子角色")]})),_:2},1032,["onClick"]),l(a,{icon:"copy-document",type:"primary",link:"",onClick:function(t){return function(t){for(var e in yt(),H.value="拷贝角色",J.value="copy",X.value)X.value[e]=t[e];W.value=t,K.value=!0}(e.row)}},{default:s((function(){return[f("拷贝")]})),_:2},1032,["onClick"]),l(a,{icon:"edit",type:"primary",link:"",onClick:function(t){return function(t){for(var e in yt(),H.value="编辑角色",J.value="edit",X.value)X.value[e]=t[e];yt(),K.value=!0}(e.row)}},{default:s((function(){return[f("编辑")]})),_:2},1032,["onClick"]),l(a,{icon:"delete",type:"primary",link:"",onClick:function(r){return n=e.row,void v.confirm("此操作将永久删除该角色, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(o(t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P({authorityId:n.authorityId});case 2:0===t.sent.code&&(g({type:"success",message:"删除成功!"}),1===rt.value.length&&Z.value>1&&Z.value--,at());case 4:case"end":return t.stop()}}),e)})))).catch((function(){g({type:"info",message:"已取消删除"})}));var n}},{default:s((function(){return[f("删除")]})),_:2},1032,["onClick"])]})),_:1})]})),_:1},8,["data"])]),l(nt,{modelValue:K.value,"onUpdate:modelValue":r[5]||(r[5]=function(t){return K.value=t}),title:H.value},{footer:s((function(){return[c("div",R,[l(a,{onClick:dt},{default:s((function(){return[f("取 消")]})),_:1}),l(a,{type:"primary",onClick:ht},{default:s((function(){return[f("确 定")]})),_:1})])]})),default:s((function(){return[l(et,{ref_key:"authorityForm",ref:st,model:X.value,rules:M.value,"label-width":"80px"},{default:s((function(){return[l(Q,{label:"父级角色",prop:"parentId"},{default:s((function(){return[l(T,{modelValue:X.value.parentId,"onUpdate:modelValue":r[2]||(r[2]=function(t){return X.value.parentId=t}),style:{width:"100%"},disabled:"add"===J.value,options:n.value,props:{checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])]})),_:1}),l(Q,{label:"角色ID",prop:"authorityId"},{default:s((function(){return[l(tt,{modelValue:X.value.authorityId,"onUpdate:modelValue":r[3]||(r[3]=function(t){return X.value.authorityId=t}),disabled:"edit"===J.value,autocomplete:"off",maxlength:"15"},null,8,["modelValue","disabled"])]})),_:1}),l(Q,{label:"角色姓名",prop:"authorityName"},{default:s((function(){return[l(tt,{modelValue:X.value.authorityName,"onUpdate:modelValue":r[4]||(r[4]=function(t){return X.value.authorityName=t}),autocomplete:"off"},null,8,["modelValue"])]})),_:1})]})),_:1},8,["model","rules"])]})),_:1},8,["modelValue","title"]),Y.value?(u(),y(gt,{key:0,modelValue:Y.value,"onUpdate:modelValue":r[6]||(r[6]=function(t){return Y.value=t}),"custom-class":"auth-drawer","with-header":!1,size:"40%",title:"角色配置"},{default:s((function(){return[l(pt,{"before-leave":ct,type:"border-card"},{default:s((function(){return[l(ft,{label:"角色菜单"},{default:s((function(){return[l(A,{ref_key:"menus",ref:ut,row:$.value,onChangeRow:ot},null,8,["row"])]})),_:1}),l(ft,{label:"角色api"},{default:s((function(){return[l(G,{ref_key:"apis",ref:it,row:$.value,onChangeRow:ot},null,8,["row"])]})),_:1}),l(ft,{label:"资源权限"},{default:s((function(){return[l(D,{ref_key:"datas",ref:lt,authority:rt.value,row:$.value,onChangeRow:ot},null,8,["authority","row"])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])):p("",!0)])}}}))}}}))}();

/*! 
 Build based on gin-vue-admin 
 Time : 1697360087000 */
!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},n=Object.prototype,a=n.hasOwnProperty,l=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},u=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(T){c=function(e,t,n){return e[t]=n}}function d(e,t,n,a){var r=t&&t.prototype instanceof p?t:p,u=Object.create(r.prototype),o=new E(a||[]);return l(u,"_invoke",{value:x(e,n,o)}),u}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=d;var s={};function p(){}function v(){}function m(){}var y={};c(y,u,(function(){return this}));var b=Object.getPrototypeOf,h=b&&b(b(j([])));h&&h!==n&&a.call(h,u)&&(y=h);var g=m.prototype=p.prototype=Object.create(y);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){function n(l,r,u,o){var i=f(e[l],e,r);if("throw"!==i.type){var c=i.arg,d=c.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,u,o)}),(function(e){n("throw",e,u,o)})):t.resolve(d).then((function(e){c.value=e,u(c)}),(function(e){return n("throw",e,u,o)}))}o(i.arg)}var r;l(this,"_invoke",{value:function(e,a){function l(){return new t((function(t,l){n(e,a,t,l)}))}return r=r?r.then(l,l):l()}})}function x(e,t,n){var a="suspendedStart";return function(l,r){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===l)throw r;return{value:void 0,done:!0}}for(n.method=l,n.arg=r;;){var u=n.delegate;if(u){var o=_(u,n);if(o){if(o===s)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var i=f(e,t,n);if("normal"===i.type){if(a=n.done?"completed":"suspendedYield",i.arg===s)continue;return{value:i.arg,done:n.done}}"throw"===i.type&&(a="completed",n.method="throw",n.arg=i.arg)}}}function _(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,_(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),s;var l=f(a,e.iterator,t.arg);if("throw"===l.type)return t.method="throw",t.arg=l.arg,t.delegate=null,s;var r=l.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function V(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function j(e){if(e||""===e){var t=e[u];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,l=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}throw new TypeError(typeof e+" is not iterable")}return v.prototype=m,l(g,"constructor",{value:m,configurable:!0}),l(m,"constructor",{value:v,configurable:!0}),v.displayName=c(m,i,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},t.awrap=function(e){return{__await:e}},w(N.prototype),c(N.prototype,o,(function(){return this})),t.AsyncIterator=N,t.async=function(e,n,a,l,r){void 0===r&&(r=Promise);var u=new N(d(e,n,a,l),r);return t.isGeneratorFunction(n)?u:u.next().then((function(e){return e.done?e.value:u.next()}))},w(g),c(g,i,"Generator"),c(g,u,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},t.values=j,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(V),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,a){return u.type="throw",u.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var l=this.tryEntries.length-1;l>=0;--l){var r=this.tryEntries[l],u=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var o=a.call(r,"catchLoc"),i=a.call(r,"finallyLoc");if(o&&i){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(o){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n];if(l.tryLoc<=this.prev&&a.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var r=l;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var u=r?r.completion:{};return u.type=e,u.arg=t,r?(this.method="next",this.next=r.finallyLoc,s):this.complete(u)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),V(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var l=a.arg;V(n)}return l}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}function t(e,t,n,a,l,r,u){try{var o=e[r](u),i=o.value}catch(c){return void n(c)}o.done?t(i):Promise.resolve(i).then(a,l)}function n(e){return function(){var n=this,a=arguments;return new Promise((function(l,r){var u=e.apply(n,a);function o(e){t(u,l,r,o,i,"next",e)}function i(e){t(u,l,r,o,i,"throw",e)}o(void 0)}))}}System.register(["./index-legacy-107e023f.js","./dialog-legacy-4b67a706.js","./overlay-legacy-4c873a7c.js","./table-column-legacy-52d183b3.js","./checkbox-legacy-bb02fb88.js","./tooltip-legacy-b3c86740.js","./popper-legacy-73fb5b5e.js","./scrollbar-legacy-7a2944da.js","./popover-legacy-58a5799f.js","./tag-legacy-75f08abe.js","./input-legacy-cd47f65e.js","./collapse-item-legacy-8a274f57.js","./form-item-legacy-b75f4226.js","./button-legacy-ca0b763b.js","./select-legacy-8e49a963.js","./icon-legacy-4309e40a.js","./fieldDialog-legacy-f0a4a13a.js","./previewCodeDialg-legacy-eadc050b.js","./stringFun-legacy-7a0441ab.js","./autoCode-legacy-2461be30.js","./dictionary-legacy-0ab75afe.js","./warningBar-legacy-09ab5792.js","./index-legacy-5ad51c6a.js","./_Uint8Array-legacy-a51df0dc.js","./_initCloneObject-legacy-19c3e2b3.js","./isEqual-legacy-cfc29359.js","./debounce-legacy-5f73f75f.js","./dropdown-legacy-95a416f4.js","./index-legacy-85878265.js","./rand-legacy-7da01718.js","./_baseClone-legacy-44581ad7.js","./index-legacy-e6218875.js","./strings-legacy-afcabde9.js","./switch-legacy-6a284d24.js","./sysDictionary-legacy-d0568d6e.js","./tab-pane-legacy-2a1474d9.js"],(function(t,a){"use strict";var l,r,u,o,i,c,d,f,s,p,v,m,y,b,h,g,w,N,x,_,k,V,E,j,T,C,L,U,O,B,D,S,q,F,P,A,J,G,I,M,R,W,X,$,Y,z,K,Q,H,Z;return{setters:[function(e){l=e.a,r=e.ao,u=e.u,o=e.r,i=e.X,c=e.Y,d=e.o,f=e.c,s=e.d,p=e.b,v=e.w,m=e.g,y=e.M,b=e.N,h=e.h,g=e.t,w=e.e,N=e.k,x=e.ba,_=e.J,k=e.E,V=e.l,E=e.a7},function(e){j=e.E},null,function(e){T=e.E,C=e.a},function(e){L=e.E},null,null,null,function(e){U=e.E},null,null,function(e){O=e.E,B=e.a},function(e){D=e.a,S=e.E},null,function(e){q=e.E,F=e.a},null,function(e){P=e.default},function(e){A=e.default},function(e){J=e.a,G=e.b,I=e.t,M=e.c},function(e){R=e.p,W=e.c,X=e.g,$=e.a,Y=e.b,z=e.d,K=e.e},function(e){Q=e.u},function(e){H=e._},function(e){Z=e.E},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){var a=function(){var t=n(e().mark((function t(n){var a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Q(),e.next=3,a.getDictionary(n);case 3:return e.abrupt("return",a.dictionaryMap[n]);case 4:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ee={class:"gva-search-box"},te={style:{fontSize:"16px",paddingLeft:"20px"}},ne={style:{float:"right",color:"#8492a6","font-size":"13px"}},ae={class:"gva-search-box"},le={style:{float:"right",color:"#8492a6","font-size":"13px"}},re=p("div",null," 自动创建API ",-1),ue=p("div",null," 自动移动文件 ",-1),oe={class:"gva-table-box"},ie={class:"gva-btn-list"},ce=p("p",null,"确定删除吗？",-1),de={style:{"text-align":"right","margin-top":"8px"}},fe={class:"gva-btn-list justify-end mt-4"},se={class:"dialog-footer"},pe={class:"flex items-center py-1.5"},ve=p("p",null,"操作栏：",-1),me={class:"dialog-footer",style:{"padding-top":"14px","padding-right":"14px"}},ye={name:"AutoCode"};t("default",Object.assign(ye,{setup:function(t){var Q=l([{label:"字符串",value:"string"},{label:"富文本",value:"richtext"},{label:"整型",value:"int"},{label:"布尔值",value:"bool"},{label:"浮点型",value:"float64"},{label:"时间",value:"time.Time"},{label:"枚举",value:"enum"},{label:"单图片（字符串）",value:"picture"},{label:"多图片（json字符串）",value:"pictures"},{label:"文件（json字符串）",value:"file"}]),ye=l([{label:"=",value:"="},{label:"<>",value:"<>"},{label:">",value:">"},{label:"<",value:"<"},{label:"LIKE",value:"LIKE"},{label:"BETWEEN",value:"BETWEEN"},{label:"NOT BETWEEN",value:"NOT BETWEEN"}]),be={fieldName:"",fieldDesc:"",fieldType:"",dataType:"",fieldJson:"",columnName:"",dataTypeLong:"",comment:"",require:!1,sort:!1,errorText:"",clearable:!0,fieldSearchType:"",dictType:""},he=r(),ge=u(),we=o([]),Ne=l({}),xe=l({businessDB:"",dbName:"",tableName:""}),_e=l([]),ke=l(""),Ve=l({}),Ee=l({structName:"",tableName:"",packageName:"",package:"",abbreviation:"",description:"",businessDB:"",autoCreateApiToSql:!0,autoMoveFile:!0,autoCreateResource:!1,fields:[]}),je=l({structName:[{required:!0,message:"请输入结构体名称",trigger:"blur"}],abbreviation:[{required:!0,message:"请输入结构体简称",trigger:"blur"}],description:[{required:!0,message:"请输入结构体描述",trigger:"blur"}],packageName:[{required:!0,message:"文件名称：sysXxxxXxxx",trigger:"blur"}],package:[{required:!0,message:"请选择package",trigger:"blur"}]}),Te=l({}),Ce=l({}),Le=l(!1),Ue=l(!1),Oe=l(null),Be=function(){Oe.value.selectText()},De=function(){Oe.value.copy()},Se=function(e){Le.value=!0,e?(ke.value="edit",Ce.value=JSON.parse(JSON.stringify(e)),Te.value=e):(ke.value="add",Te.value=JSON.parse(JSON.stringify(be)))},qe=E(),Fe=function(){qe.refs.fieldDialogNode.fieldDialogFrom.validate((function(e){if(!e)return!1;Te.value.fieldName=G(Te.value.fieldName),"add"===ke.value&&Ee.value.fields.push(Te.value),Le.value=!1}))},Pe=function(){"edit"===ke.value&&(Te.value=Ce.value),Le.value=!1},Ae=l(null),Je=function(){var t=n(e().mark((function t(a){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(Ee.value.fields.length<=0)){t.next=3;break}return N({type:"error",message:"请填写至少一个field"}),t.abrupt("return",!1);case 3:if(!Ee.value.fields.some((function(e){return e.fieldName===Ee.value.structName}))){t.next=6;break}return N({type:"error",message:"存在与结构体同名的字段"}),t.abrupt("return",!1);case 6:if(Ee.value.package!==Ee.value.abbreviation){t.next=9;break}return N({type:"error",message:"package和结构体简称不可同名"}),t.abrupt("return",!1);case 9:Ae.value.validate(function(){var t=n(e().mark((function t(n){var l,r,u,o,i,c,d,f;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=33;break}for(l in Ee.value)"string"==typeof Ee.value[l]&&(Ee.value[l]=Ee.value[l].trim());if(Ee.value.structName=G(Ee.value.structName),Ee.value.tableName=Ee.value.tableName.replace(" ",""),Ee.value.tableName||(Ee.value.tableName=I(J(Ee.value.structName))),Ee.value.structName!==Ee.value.abbreviation){e.next=8;break}return N({type:"error",message:"structName和struct简称不能相同"}),e.abrupt("return",!1);case 8:if(Ee.value.humpPackageName=I(Ee.value.packageName),!a){e.next=17;break}return e.next=12,R(Ee.value);case 12:r=e.sent,Ne.value=r.data.autoCode,Ue.value=!0,e.next=31;break;case 17:return e.next=19,W(Ee.value);case 19:if(o=e.sent,"false"!==(null===(u=o.headers)||void 0===u?void 0:u.success)){e.next=24;break}return e.abrupt("return");case 24:if(!Ee.value.autoMoveFile){e.next=27;break}return N({type:"success",message:"自动化代码创建成功，自动移动成功"}),e.abrupt("return");case 27:N({type:"success",message:"自动化代码创建成功，正在下载"});case 28:i=new Blob([o]),c="ginvueadmin.zip","download"in document.createElement("a")?(d=window.URL.createObjectURL(i),(f=document.createElement("a")).style.display="none",f.href=d,f.setAttribute("download",c),document.body.appendChild(f),f.click(),document.body.removeChild(f),window.URL.revokeObjectURL(d)):window.navigator.msSaveBlob(i,c);case 31:e.next=34;break;case 33:return e.abrupt("return",!1);case 34:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Ge=l([]),Ie=l([]),Me=function(){var t=n(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return xe.value.dbName="",xe.value.tableName="",e.next=4,X({businessDB:xe.value.businessDB});case 4:0===(n=e.sent).code&&(Ie.value=n.data.dbs,Ge.value=n.data.dbList);case 6:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Re=function(){var t=n(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$({businessDB:xe.value.businessDB,dbName:xe.value.dbName});case 2:0===(n=e.sent).code&&(_e.value=n.data.tables),xe.value.tableName="";case 5:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),We=function(){var t=n(e().mark((function t(){var n,a,l,r,u,o;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=["id","created_at","updated_at","deleted_at"],e.next=3,Y(xe.value);case 3:0===(a=e.sent).code&&(l="",""!==xe.value.businessDB&&(r=Ge.value.find((function(e){return e.aliasName===xe.value.businessDB})),u=x(r),l=u.dbtype),o=M(xe.value.tableName),Ee.value.structName=G(o),Ee.value.tableName=xe.value.tableName,Ee.value.packageName=o,Ee.value.abbreviation=o,Ee.value.description=o+"表",Ee.value.autoCreateApiToSql=!0,Ee.value.autoMoveFile=!0,Ee.value.fields=[],a.data.columns&&a.data.columns.forEach((function(e){if(!n.some((function(t){return t===e.columnName}))){var t=M(e.columnName);Ee.value.fields.push({fieldName:G(t),fieldDesc:e.columnComment||t+"字段",fieldType:Ve.value[e.dataType],dataType:e.dataType,fieldJson:t,dataTypeLong:e.dataTypeLong&&e.dataTypeLong.split(",")[0],columnName:"oracle"===l?e.columnName.toUpperCase():e.columnName,comment:e.columnComment,require:!1,errorText:"",clearable:!0,fieldSearchType:"",dictType:""})}})));case 5:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Xe=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:["string","int","bool","float64","time.Time"].forEach(function(){var t=n(e().mark((function t(n){var l;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(n);case 2:(l=e.sent)&&l.forEach((function(e){Ve.value[e.label]=n}));case 4:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),$e=function(){var t=n(e().mark((function t(n){var a;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K({id:Number(n)});case 2:0===(a=e.sent).code&&(Ee.value=JSON.parse(a.data.meta));case 4:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Ye=l([]),ze=function(){var t=n(e().mark((function t(){var n;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:0===(n=e.sent).code&&(Ye.value=n.data.pkgs);case 4:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Ke=function(){ge.push({name:"autoPkg"})},Qe=function(){Me(),Xe(),ze();var e=he.params.id;e&&$e(e)};return Qe(),i((function(){return he.params.id}),(function(){"autoCodeEdit"===he.name&&Qe()})),function(e,t){var n=c("pointer"),a=_,l=c("QuestionFilled"),r=Z,u=q,o=F,i=D,N=k,x=S,E=O,G=B,I=V,M=c("refresh"),R=c("document-add"),W=L,X=T,$=U,Y=C,z=j;return d(),f("div",null,[s(H,{href:"https://www.bilibili.com/video/BV1kv4y1g7nT?p=3",title:"此功能为开发环境使用，不建议发布到生产，具体使用效果请看视频https://www.bilibili.com/video/BV1kv4y1g7nT?p=3"}),p("div",ee,[s(G,{modelValue:we,"onUpdate:modelValue":t[3]||(t[3]=function(e){return function(e){throw new TypeError('"'+e+'" is read-only')}("activeNames")}),style:{"margin-bottom":"12px"}},{default:v((function(){return[s(E,{name:"1"},{title:v((function(){return[p("div",te,[m(" 点这里从现有数据库创建代码 "),s(a,{class:"header-icon"},{default:v((function(){return[s(n)]})),_:1})])]})),default:v((function(){return[s(x,{ref:"getTableForm",style:{"margin-top":"24px"},inline:!0,model:xe.value,"label-width":"120px"},{default:v((function(){return[s(i,{label:"业务库",prop:"selectDBtype"},{label:v((function(){return[s(r,{content:"注：需要提前到db-list自行配置多数据库，如未配置需配置后重启服务方可使用。（此处可选择对应库表，可理解为从哪个库选择表）",placement:"bottom",effect:"light"},{default:v((function(){return[p("div",null,[m(" 业务库 "),s(a,null,{default:v((function(){return[s(l)]})),_:1})])]})),_:1})]})),default:v((function(){return[s(o,{modelValue:xe.value.businessDB,"onUpdate:modelValue":t[0]||(t[0]=function(e){return xe.value.businessDB=e}),clearable:"",style:{width:"194px"},placeholder:"选择业务库",onChange:Me},{default:v((function(){return[(d(!0),f(y,null,b(Ge.value,(function(e){return d(),h(u,{key:e.aliasName,value:e.aliasName,label:e.aliasName,disabled:e.disable},{default:v((function(){return[p("div",null,[p("span",null,g(e.aliasName),1),p("span",ne,g(e.dbName),1)])]})),_:2},1032,["value","label","disabled"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),s(i,{label:"数据库名",prop:"structName"},{default:v((function(){return[s(o,{modelValue:xe.value.dbName,"onUpdate:modelValue":t[1]||(t[1]=function(e){return xe.value.dbName=e}),clearable:"",filterable:"",placeholder:"请选择数据库",onChange:Re},{default:v((function(){return[(d(!0),f(y,null,b(Ie.value,(function(e){return d(),h(u,{key:e.database,label:e.database,value:e.database},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),s(i,{label:"表名",prop:"structName"},{default:v((function(){return[s(o,{modelValue:xe.value.tableName,"onUpdate:modelValue":t[2]||(t[2]=function(e){return xe.value.tableName=e}),disabled:!xe.value.dbName,filterable:"",placeholder:"请选择表"},{default:v((function(){return[(d(!0),f(y,null,b(_e.value,(function(e){return d(),h(u,{key:e.tableName,label:e.tableName,value:e.tableName},null,8,["label","value"])})),128))]})),_:1},8,["modelValue","disabled"])]})),_:1}),s(i,null,{default:v((function(){return[s(N,{type:"primary",onClick:We},{default:v((function(){return[m("使用此表创建")]})),_:1})]})),_:1})]})),_:1},8,["model"])]})),_:1})]})),_:1},8,["modelValue"])]),p("div",ae,[s(x,{ref_key:"autoCodeForm",ref:Ae,rules:je.value,model:Ee.value,"label-width":"120px",inline:!0},{default:v((function(){return[s(i,{label:"Struct名称",prop:"structName"},{default:v((function(){return[s(I,{modelValue:Ee.value.structName,"onUpdate:modelValue":t[4]||(t[4]=function(e){return Ee.value.structName=e}),placeholder:"首字母自动转换大写"},null,8,["modelValue"])]})),_:1}),s(i,{label:"TableName",prop:"tableName"},{default:v((function(){return[s(I,{modelValue:Ee.value.tableName,"onUpdate:modelValue":t[5]||(t[5]=function(e){return Ee.value.tableName=e}),placeholder:"指定表名（非必填）"},null,8,["modelValue"])]})),_:1}),s(i,{label:"Struct简称",prop:"abbreviation"},{default:v((function(){return[s(I,{modelValue:Ee.value.abbreviation,"onUpdate:modelValue":t[6]||(t[6]=function(e){return Ee.value.abbreviation=e}),placeholder:"简称会作为入参对象名和路由group"},null,8,["modelValue"])]})),_:1}),s(i,{label:"Struct中文名称",prop:"description"},{default:v((function(){return[s(I,{modelValue:Ee.value.description,"onUpdate:modelValue":t[7]||(t[7]=function(e){return Ee.value.description=e}),placeholder:"中文描述作为自动api描述"},null,8,["modelValue"])]})),_:1}),s(i,{label:"文件名称",prop:"packageName"},{default:v((function(){return[s(I,{modelValue:Ee.value.packageName,"onUpdate:modelValue":t[8]||(t[8]=function(e){return Ee.value.packageName=e}),placeholder:"生成文件的默认名称(建议为驼峰格式,首字母小写,如sysXxxXxxx)",onBlur:t[9]||(t[9]=function(e){return function(e,t){e[t]=J(e[t])}(Ee.value,"packageName")})},null,8,["modelValue"])]})),_:1}),s(i,{label:"Package（包）",prop:"package"},{default:v((function(){return[s(o,{modelValue:Ee.value.package,"onUpdate:modelValue":t[10]||(t[10]=function(e){return Ee.value.package=e}),style:{width:"194px"}},{default:v((function(){return[(d(!0),f(y,null,b(Ye.value,(function(e){return d(),h(u,{key:e.ID,value:e.packageName,label:e.packageName},null,8,["value","label"])})),128))]})),_:1},8,["modelValue"]),s(a,{class:"cursor-pointer ml-2 text-gray-600",onClick:ze},{default:v((function(){return[s(M)]})),_:1}),s(a,{class:"cursor-pointer ml-2 text-gray-600",onClick:Ke},{default:v((function(){return[s(R)]})),_:1})]})),_:1}),s(i,{label:"业务库",prop:"businessDB"},{label:v((function(){return[s(r,{content:"注：需要提前到db-list自行配置多数据库，此项为空则会使用gva本库创建自动化代码(global.GVA_DB),填写后则会创建指定库的代码(global.MustGetGlobalDBByDBName(dbname))",placement:"bottom",effect:"light"},{default:v((function(){return[p("div",null,[m(" 业务库 "),s(a,null,{default:v((function(){return[s(l)]})),_:1})])]})),_:1})]})),default:v((function(){return[s(o,{modelValue:Ee.value.businessDB,"onUpdate:modelValue":t[11]||(t[11]=function(e){return Ee.value.businessDB=e}),style:{width:"194px"},placeholder:"选择业务库"},{default:v((function(){return[(d(!0),f(y,null,b(Ge.value,(function(e){return d(),h(u,{key:e.aliasName,value:e.aliasName,label:e.aliasName,disabled:e.disable},{default:v((function(){return[p("div",null,[p("span",null,g(e.aliasName),1),p("span",le,g(e.dbName),1)])]})),_:2},1032,["value","label","disabled"])})),128))]})),_:1},8,["modelValue"])]})),_:1}),s(i,null,{label:v((function(){return[s(r,{content:"注：会自动在结构体添加 created_by updated_by deleted_by，方便用户进行资源权限控制",placement:"bottom",effect:"light"},{default:v((function(){return[p("div",null,[m(" 创建资源标识 "),s(a,null,{default:v((function(){return[s(l)]})),_:1})])]})),_:1})]})),default:v((function(){return[s(W,{modelValue:Ee.value.autoCreateResource,"onUpdate:modelValue":t[12]||(t[12]=function(e){return Ee.value.autoCreateResource=e})},null,8,["modelValue"])]})),_:1}),s(i,null,{label:v((function(){return[s(r,{content:"注：把自动生成的API注册进数据库",placement:"bottom",effect:"light"},{default:v((function(){return[re]})),_:1})]})),default:v((function(){return[s(W,{modelValue:Ee.value.autoCreateApiToSql,"onUpdate:modelValue":t[13]||(t[13]=function(e){return Ee.value.autoCreateApiToSql=e})},null,8,["modelValue"])]})),_:1}),s(i,null,{label:v((function(){return[s(r,{content:"注：自动迁移生成的文件到yaml配置的对应位置",placement:"bottom",effect:"light"},{default:v((function(){return[ue]})),_:1})]})),default:v((function(){return[s(W,{modelValue:Ee.value.autoMoveFile,"onUpdate:modelValue":t[14]||(t[14]=function(e){return Ee.value.autoMoveFile=e})},null,8,["modelValue"])]})),_:1})]})),_:1},8,["rules","model"])]),p("div",oe,[p("div",ie,[s(N,{type:"primary",onClick:t[15]||(t[15]=function(e){return Se()})},{default:v((function(){return[m("新增字段")]})),_:1})]),s(Y,{data:Ee.value.fields},{default:v((function(){return[s(X,{align:"left",type:"index",label:"序列",width:"60"}),s(X,{align:"left",prop:"fieldName",label:"字段名称",width:"160"},{default:v((function(e){var t=e.row;return[s(I,{modelValue:t.fieldName,"onUpdate:modelValue":function(e){return t.fieldName=e}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),s(X,{align:"left",prop:"fieldDesc",label:"中文名",width:"160"},{default:v((function(e){var t=e.row;return[s(I,{modelValue:t.fieldDesc,"onUpdate:modelValue":function(e){return t.fieldDesc=e}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),s(X,{align:"left",prop:"require",label:"必填"},{default:v((function(e){var t=e.row;return[s(W,{modelValue:t.require,"onUpdate:modelValue":function(e){return t.require=e}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),s(X,{align:"left",prop:"sort",label:"排序"},{default:v((function(e){var t=e.row;return[s(W,{modelValue:t.sort,"onUpdate:modelValue":function(e){return t.sort=e}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),s(X,{align:"left",prop:"fieldJson",width:"160px",label:"字段Json"},{default:v((function(e){var t=e.row;return[s(I,{modelValue:t.fieldJson,"onUpdate:modelValue":function(e){return t.fieldJson=e}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),s(X,{align:"left",prop:"fieldType",label:"字段类型",width:"160"},{default:v((function(e){var t=e.row;return[s(o,{modelValue:t.fieldType,"onUpdate:modelValue":function(e){return t.fieldType=e},style:{width:"100%"},placeholder:"请选择字段类型",clearable:""},{default:v((function(){return[(d(!0),f(y,null,b(Q.value,(function(e){return d(),h(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1}),s(X,{align:"left",prop:"dataTypeLong",label:"数据库字段长度",width:"160"},{default:v((function(e){var t=e.row;return[s(I,{modelValue:t.dataTypeLong,"onUpdate:modelValue":function(e){return t.dataTypeLong=e}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),s(X,{align:"left",prop:"columnName",label:"数据库字段",width:"160"},{default:v((function(e){var t=e.row;return[s(I,{modelValue:t.columnName,"onUpdate:modelValue":function(e){return t.columnName=e}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),s(X,{align:"left",prop:"comment",label:"数据库字段描述",width:"160"},{default:v((function(e){var t=e.row;return[s(I,{modelValue:t.columnName,"onUpdate:modelValue":function(e){return t.columnName=e}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),s(X,{align:"left",prop:"fieldSearchType",label:"搜索条件",width:"130"},{default:v((function(e){var t=e.row;return[s(o,{modelValue:t.fieldSearchType,"onUpdate:modelValue":function(e){return t.fieldSearchType=e},style:{width:"100%"},placeholder:"请选择字段查询条件",clearable:""},{default:v((function(){return[(d(!0),f(y,null,b(ye.value,(function(e){return d(),h(u,{key:e.value,label:e.label,value:e.value,disabled:"string"!==t.fieldType&&"LIKE"===e.value||"int"!==t.fieldType&&"time.Time"!==t.fieldType&&"float64"!==t.fieldType&&("BETWEEN"===e.value||"NOT BETWEEN"===e.value)},null,8,["label","value","disabled"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1}),s(X,{align:"left",label:"操作",width:"300",fixed:"right"},{default:v((function(e){return[s(N,{type:"primary",link:"",icon:"edit",onClick:function(t){return Se(e.row)}},{default:v((function(){return[m("高级编辑")]})),_:2},1032,["onClick"]),s(N,{type:"primary",link:"",disabled:0===e.$index,onClick:function(t){return function(e){if(0!==e){var t=Ee.value.fields[e-1];Ee.value.fields.splice(e-1,1),Ee.value.fields.splice(e,0,t)}}(e.$index)}},{default:v((function(){return[m("上移")]})),_:2},1032,["disabled","onClick"]),s(N,{type:"primary",link:"",disabled:e.$index+1===Ee.value.fields.length,onClick:function(t){return function(e){if(e!==Ee.value.fields.length-1){var t=Ee.value.fields[e+1];Ee.value.fields.splice(e+1,1),Ee.value.fields.splice(e,0,t)}}(e.$index)}},{default:v((function(){return[m("下移")]})),_:2},1032,["disabled","onClick"]),s($,{modelValue:e.row.visible,"onUpdate:modelValue":function(t){return e.row.visible=t},placement:"top"},{reference:v((function(){return[s(N,{type:"primary",link:"",icon:"delete",onClick:function(t){return e.row.visible=!0}},{default:v((function(){return[m("删除")]})),_:2},1032,["onClick"])]})),default:v((function(){return[ce,p("div",de,[s(N,{type:"primary",link:"",onClick:function(t){return e.row.visible=!1}},{default:v((function(){return[m("取消")]})),_:2},1032,["onClick"]),s(N,{type:"primary",onClick:function(t){return n=e.$index,void Ee.value.fields.splice(n,1);var n}},{default:v((function(){return[m("确定")]})),_:2},1032,["onClick"])])]})),_:2},1032,["modelValue","onUpdate:modelValue"])]})),_:1})]})),_:1},8,["data"]),p("div",fe,[s(N,{type:"primary",onClick:t[16]||(t[16]=function(e){return Je(!0)})},{default:v((function(){return[m("预览代码")]})),_:1}),s(N,{type:"primary",onClick:t[17]||(t[17]=function(e){return Je(!1)})},{default:v((function(){return[m("生成代码")]})),_:1})])]),s(z,{modelValue:Le.value,"onUpdate:modelValue":t[18]||(t[18]=function(e){return Le.value=e}),width:"70%",title:"组件内容"},{footer:v((function(){return[p("div",se,[s(N,{onClick:Pe},{default:v((function(){return[m("取 消")]})),_:1}),s(N,{type:"primary",onClick:Fe},{default:v((function(){return[m("确 定")]})),_:1})])]})),default:v((function(){return[Le.value?(d(),h(P,{key:0,ref:"fieldDialogNode","dialog-middle":Te.value,typeOptions:Q.value,typeSearchOptions:ye.value},null,8,["dialog-middle","typeOptions","typeSearchOptions"])):w("",!0)]})),_:1},8,["modelValue"]),s(z,{modelValue:Ue.value,"onUpdate:modelValue":t[20]||(t[20]=function(e){return Ue.value=e})},{header:v((function(){return[p("div",pe,[ve,s(N,{type:"primary",onClick:Be},{default:v((function(){return[m("全选")]})),_:1}),s(N,{type:"primary",onClick:De},{default:v((function(){return[m("复制")]})),_:1})])]})),footer:v((function(){return[p("div",me,[s(N,{type:"primary",onClick:t[19]||(t[19]=function(e){return Ue.value=!1})},{default:v((function(){return[m("确 定")]})),_:1})])]})),default:v((function(){return[Ue.value?(d(),h(A,{key:0,ref_key:"previewNode",ref:Oe,"preview-code":Ne.value},null,8,["preview-code"])):w("",!0)]})),_:1},8,["modelValue"])])}}}))}}}))}();
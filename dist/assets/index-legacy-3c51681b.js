/*! 
 Build based on gin-vue-admin 
 Time : 1696555582000 */
System.register(["./index-legacy-b67e08c1.js","./upload-legacy-89e63303.js","./progress-legacy-64d30484.js","./icon-legacy-4309e40a.js","./cloneDeep-legacy-50293371.js","./_baseClone-legacy-757546ef.js","./_Uint8Array-legacy-6fa00cc6.js","./_initCloneObject-legacy-3e299faa.js","./isEqual-legacy-e51c0d9a.js"],(function(e,n){"use strict";var l,t,a,c,u,o,i,s,r,d,f,g,p;return{setters:[function(e){l=e.m,t=e.a,a=e.Y,c=e.o,u=e.c,o=e.d,i=e.w,s=e.G,r=e.b,d=e.g,f=e.k,g=e.J},function(e){p=e.E},null,null,null,null,null,null,null],execute:function(){var n=r("div",{class:"el-upload__text"},[d(" 拖拽或"),r("em",null,"点击上传")],-1),y=r("div",{class:"el-upload__tip"}," 请把安装包的zip拖拽至此处上传 ",-1);e("default",{__name:"index",setup:function(e){var r=l(),d=t("https://api.bitcoin-wen.com"),_=function(e){if(0===e.code){var n="";e.data&&e.data.forEach((function(e,l){n+="".concat(l+1,".").concat(e.msg,"\n")})),alert(n)}else f.error(e.msg)};return function(e,l){var t=a("upload-filled"),f=g,j=p;return c(),u("div",null,[o(j,{drag:"",action:"".concat(d.value,"/autoCode/installPlugin"),headers:{"x-token":s(r).token},"show-file-list":!1,"on-success":_,"on-error":_,name:"plug"},{tip:i((function(){return[y]})),default:i((function(){return[o(f,{class:"el-icon--upload"},{default:i((function(){return[o(t)]})),_:1}),n]})),_:1},8,["action","headers"])])}}})}}}));
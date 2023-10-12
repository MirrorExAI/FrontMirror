/*! 
 Build based on gin-vue-admin 
 Time : 1697152884000 */
!function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(r=i.key,a=void 0,"symbol"==typeof(a=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"))?a:String(a)),i)}var r,a}System.register(["./index-legacy-285edefa.js","./upload-legacy-7fcdb010.js","./progress-legacy-3b76c276.js","./button-legacy-ca0b763b.js","./_plugin-vue_export-helper-legacy-c6aa7c23.js"],(function(t,n){"use strict";var i,r,a,o,l,u,c,d,s,f,p,h,m;return{setters:[function(e){i=e.s,r=e.a,a=e.m,o=e.o,l=e.c,u=e.d,c=e.w,d=e.g,s=e.G,f=e.k,p=e.E},function(e){h=e.E},null,null,function(e){m=e._}],execute:function(){var n=document.createElement("style");n.textContent=".image-uploader[data-v-c73174ca]{border:1px dashed #d9d9d9;width:180px;border-radius:6px;cursor:pointer;position:relative;overflow:hidden;border-color:#409eff}.image-uploader-icon[data-v-c73174ca]{font-size:28px;color:#8c939d;width:178px;height:178px;line-height:178px;text-align:center}.image[data-v-c73174ca]{width:178px;height:178px;display:block}\n",document.head.appendChild(n);t("g",(function(e){return i({url:"/fileUploadAndDownload/getFileList",method:"post",data:e})})),t("d",(function(e){return i({url:"/fileUploadAndDownload/deleteFile",method:"post",data:e})})),t("e",(function(e){return i({url:"/fileUploadAndDownload/editFileName",method:"post",data:e})}));var g=function(){function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1920;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.file=e,this.fileSize=n,this.maxWH=i}var n,i,r;return n=t,(i=[{key:"compress",value:function(){var e=this,t=this.file.type,n=this.file.size/1024;return new Promise((function(i){var r=new FileReader;r.readAsDataURL(e.file),r.onload=function(){var a=document.createElement("canvas"),o=document.createElement("img");o.src=r.result,o.onload=function(){var r=a.getContext("2d"),l=e.dWH(o.width,o.height,e.maxWH);a.width=l.width,a.height=l.height,r.clearRect(0,0,a.width,a.height),r.drawImage(o,0,0,a.width,a.height);var u=a.toDataURL(t,.9),c=e.fileSizeKB(u);c>e.fileSize&&console.log("图片尺寸太大!"+n+" >> "+c);var d=e.dataURLtoBlob(u,t),s=new File([d],e.file.name);i(s)}}}))}},{key:"dWH",value:function(e,t,n){var i={width:e,height:t};return Math.max(e,t)>n?e>t?(i.width=n,i.height=Math.round(t*(n/e)),i):(i.height=n,i.width=Math.round(e*(n/t)),i):i}},{key:"fileSizeKB",value:function(e){return Math.round(3*e.split(",")[1].length/4/1024)}},{key:"dataURLtoBlob",value:function(e,t){for(var n=atob(e.split(",")[1]),i=e.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(n.length),a=new Uint8Array(r),o=0;o<n.length;o++)a[o]=n.charCodeAt(o);return t&&(i=t),new Blob([r],{type:i,lastModifiedDate:new Date})}}])&&e(n.prototype,i),r&&e(n,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),v=(t("a",(function(e){return e&&"http"!==e.slice(0,4)?"//"+e:e})),{name:"UploadImage",methods:{}}),y=Object.assign(v,{props:{imageUrl:{type:String,default:""},fileSize:{type:Number,default:2048},maxWH:{type:Number,default:1920}},emits:["on-success"],setup:function(e,t){var n=t.emit,i=e,m=r("https://api.bitcoin-wen.com"),v=a(),y=function(e){var t="image/jpeg"===e.type,n="image/png"===e.type;if(!t&&!n)return f.error("上传头像图片只能是 jpg或png 格式!"),!1;var r=e.size/1024<i.fileSize;return r||new g(e,i.fileSize,i.maxWH).compress()},w=function(e){var t=e.data;t.file&&n("on-success",t.file.url)};return function(e,t){var n=p,i=h;return o(),l("div",null,[u(i,{action:"".concat(m.value,"/fileUploadAndDownload/upload"),headers:{"x-token":s(v).token},"show-file-list":!1,"on-success":w,"before-upload":y,multiple:!1},{default:c((function(){return[u(n,{type:"primary"},{default:c((function(){return[d("压缩上传")]})),_:1})]})),_:1},8,["action","headers"])])}}}),w=(t("U",m(y,[["__scopeId","data-v-c73174ca"]])),{name:"UploadCommon",methods:{}});t("_",Object.assign(w,{emits:["on-success"],setup:function(e,t){var n=t.emit,i=r("https://api.bitcoin-wen.com"),m=a(),g=r(!1),v=function(e){g.value=!0;var t="image/jpeg"===e.type,n="image/png"===e.type,i=e.size/1024/1024<.5;return t||n||(f.error("上传图片只能是 jpg或png 格式!"),g.value=!1),i||(f.error("未压缩的上传图片大小不能超过 500KB，请使用压缩上传"),g.value=!1),(n||t)&&i},y=function(e){var t=e.data;t.file&&n("on-success",t.file.url)},w=function(){f({type:"error",message:"上传失败"}),g.value=!1};return function(e,t){var n=p,r=h;return o(),l("div",null,[u(r,{action:"".concat(i.value,"/fileUploadAndDownload/upload"),"before-upload":v,headers:{"x-token":s(m).token},"on-error":w,"on-success":y,"show-file-list":!1,class:"upload-btn"},{default:c((function(){return[u(n,{type:"primary"},{default:c((function(){return[d("普通上传")]})),_:1})]})),_:1},8,["action","headers"])])}}}))}}}))}();

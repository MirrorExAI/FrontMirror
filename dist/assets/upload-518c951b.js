/*! 
 Build based on gin-vue-admin 
 Time : 1697372399000 */
import{a as e,Z as a,o as t,c as o,b as i,d as l,w as s,g as n,t as r,G as p,a4 as m,k as c,l as u,E as d,a5 as g}from"./index-f8b29c45.js";/* empty css                */import{E as v}from"./pagination-c993fc24.js";/* empty css              */import"./tag-373c9951.js";import"./select-b1bc1c88.js";import"./scrollbar-c461322d.js";/* empty css               */import{E as f,a as j}from"./table-column-c56acf44.js";import"./checkbox-0d40d18f.js";/* empty css                *//* empty css               */import{_ as w,U as h,g as y,d as _,e as b}from"./common-08e49c24.js";import{C as x}from"./index-2f7c7f49.js";import{f as C}from"./format-10da63a7.js";import{_ as k}from"./warningBar-7e0da863.js";import{_ as U}from"./_plugin-vue_export-helper-1b428a4d.js";import{E}from"./index-b83af27e.js";import"./isEqual-914bba85.js";import"./_Uint8Array-b6bd5a9f.js";import"./index-c6707ffb.js";import"./strings-594f22a4.js";import"./debounce-daeb5e71.js";import"./_initCloneObject-55cd1d54.js";import"./upload-b036bc64.js";import"./progress-ace5b054.js";import"./cloneDeep-d3c0444a.js";import"./_baseClone-609c4491.js";import"./image-viewer-aa3b6ca9.js";/* empty css                                                              */import"./date-225eaf4f.js";import"./dictionary-cb623fa1.js";import"./sysDictionary-a05da767.js";/* empty css             */const z=(e,a)=>{var t=new Image;t.setAttribute("crossOrigin","anonymous"),t.onload=function(){var e=document.createElement("canvas");e.width=t.width,e.height=t.height,e.getContext("2d").drawImage(t,0,0,t.width,t.height);var o=e.toDataURL("image/png"),i=document.createElement("a"),l=new MouseEvent("click");i.download=a||"photo",i.href=o,i.dispatchEvent(l)},t.src=e},O={class:"gva-table-box"},B={class:"gva-btn-list"},S=["onClick"],A={class:"gva-pagination"},D={name:"Upload"},T=U(Object.assign(D,{setup(U){const D=e("https://api.bitcoin-wen.com"),T=e(""),V=e(""),I=e(1),L=e(0),M=e(10),Z=e({}),q=e([]),F=e=>{M.value=e,P()},G=e=>{I.value=e,P()},P=async()=>{const e=await y({page:I.value,pageSize:M.value,...Z.value});0===e.code&&(q.value=e.data.list,L.value=e.data.total,I.value=e.data.page,M.value=e.data.pageSize)};P();return(e,y)=>{const U=u,R=d,Y=f,$=E,H=j,J=v,K=g;return a((t(),o("div",null,[i("div",O,[l(k,{title:"点击“文件名/备注”可以编辑文件名或者备注内容。"}),i("div",B,[l(w,{imageCommon:V.value,"onUpdate:imageCommon":y[0]||(y[0]=e=>V.value=e),onOnSuccess:P},null,8,["imageCommon"]),l(h,{imageUrl:T.value,"onUpdate:imageUrl":y[1]||(y[1]=e=>T.value=e),"file-size":512,"max-w-h":1080,onOnSuccess:P},null,8,["imageUrl"]),l(U,{modelValue:Z.value.keyword,"onUpdate:modelValue":y[2]||(y[2]=e=>Z.value.keyword=e),class:"keyword",placeholder:"请输入文件名或备注"},null,8,["modelValue"]),l(R,{type:"primary",icon:"search",onClick:P},{default:s((()=>[n("查询")])),_:1})]),l(H,{data:q.value},{default:s((()=>[l(Y,{align:"left",label:"预览",width:"100"},{default:s((e=>[l(x,{"pic-type":"file","pic-src":e.row.url,preview:""},null,8,["pic-src"])])),_:1}),l(Y,{align:"left",label:"日期",prop:"UpdatedAt",width:"180"},{default:s((e=>[i("div",null,r(p(C)(e.row.UpdatedAt)),1)])),_:1}),l(Y,{align:"left",label:"文件名/备注",prop:"name",width:"180"},{default:s((e=>[i("div",{class:"name",onClick:a=>(async e=>{m.prompt("请输入文件名或者备注","编辑",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"不能为空",inputValue:e.name}).then((async({value:a})=>{e.name=a,0===(await b(e)).code&&(c({type:"success",message:"编辑成功!"}),P())})).catch((()=>{c({type:"info",message:"取消修改"})}))})(e.row)},r(e.row.name),9,S)])),_:1}),l(Y,{align:"left",label:"链接",prop:"url","min-width":"300"}),l(Y,{align:"left",label:"标签",prop:"tag",width:"100"},{default:s((e=>[l($,{type:"jpg"===e.row.tag?"primary":"success","disable-transitions":""},{default:s((()=>[n(r(e.row.tag),1)])),_:2},1032,["type"])])),_:1}),l(Y,{align:"left",label:"操作",width:"160"},{default:s((e=>[l(R,{icon:"download",type:"primary",link:"",onClick:a=>{var t;(t=e.row).url.indexOf("http://")>-1||t.url.indexOf("https://")>-1?z(t.url,t.name):z(D.value+"/"+t.url,t.name)}},{default:s((()=>[n("下载")])),_:2},1032,["onClick"]),l(R,{icon:"delete",type:"primary",link:"",onClick:a=>(async e=>{m.confirm("此操作将永久删除文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await _(e)).code&&(c({type:"success",message:"删除成功!"}),1===q.value.length&&I.value>1&&I.value--,P())})).catch((()=>{c({type:"info",message:"已取消删除"})}))})(e.row)},{default:s((()=>[n("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),i("div",A,[l(J,{"current-page":I.value,"page-size":M.value,"page-sizes":[10,30,50,100],style:{float:"right",padding:"20px"},total:L.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:G,onSizeChange:F},null,8,["current-page","page-size","total"])])])])),[[K,e.fullscreenLoading,void 0,{fullscreen:!0,lock:!0}]])}}}),[["__scopeId","data-v-acdeba2e"]]);export{T as default};
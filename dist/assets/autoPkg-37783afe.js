/*! 
 Build based on gin-vue-admin 
 Time : 1696555582000 */
import{a as e,o as a,c as l,d as t,b as o,w as s,g as i,G as r,aK as p,k as d,a4 as u,E as m,J as c,l as n}from"./index-33d179e9.js";import{E as f}from"./dialog-372401e2.js";import"./overlay-848c174d.js";import{a as g,E as b}from"./form-item-8ffdb63e.js";/* empty css              */import{E as v,a as k}from"./table-column-6999464b.js";import"./checkbox-56cf07d1.js";/* empty css                *//* empty css               */import"./scrollbar-81bf16b6.js";import"./tag-0f8d4dae.js";/* empty css             *//* empty css               */import{i as j,d as w,j as y}from"./autoCode-970a3542.js";import{_}from"./warningBar-6b10fcc0.js";import{t as V}from"./doc-46160848.js";import"./_baseClone-0928223b.js";import"./_Uint8Array-1dc9e84a.js";import"./_initCloneObject-3b45d182.js";import"./index-225ec204.js";import"./isEqual-48baa013.js";import"./debounce-b561df10.js";const h={class:"gva-table-box"},C={class:"gva-btn-list gap-3 flex items-center"},x={class:"dialog-footer"},N={name:"AutoPkg"},B=Object.assign(N,{setup(N){const B=e({packageName:"",label:"",desc:""}),E=e({packageName:[{required:!0,message:"请输入包名",trigger:"blur"},{validator:(e,a,l)=>{/^\d+$/.test(a[0])?l(new Error("不能够以数字开头")):l()},trigger:"blur"}]}),T=e(!1),U=()=>{T.value=!1,B.value={packageName:"",label:"",desc:""}},P=e(null),q=async()=>{P.value.validate((async e=>{if(e){0===(await j(B.value)).code&&d({type:"success",message:"添加成功",showClose:!0}),O(),U()}}))},A=e([]),O=async()=>{const e=await w();0===e.code&&(A.value=e.data.pkgs)};return O(),(e,j)=>{const w=m,N=c,$=v,D=k,F=n,G=g,I=b,J=f;return a(),l("div",null,[t(_,{href:"https://www.bilibili.com/video/BV1kv4y1g7nT?p=3",title:"此功能为开发环境使用，不建议发布到生产，具体使用效果请看视频https://www.bilibili.com/video/BV1kv4y1g7nT?p=3"}),o("div",h,[o("div",C,[t(w,{type:"primary",icon:"plus",onClick:j[0]||(j[0]=e=>{T.value=!0})},{default:s((()=>[i("新增")])),_:1}),t(N,{class:"cursor-pointer",onClick:j[1]||(j[1]=e=>r(V)("https://www.bilibili.com/video/BV1kv4y1g7nT?p=3&vd_source=f2640257c21e3b547a790461ed94875e"))},{default:s((()=>[t(r(p))])),_:1})]),t(D,{data:A.value},{default:s((()=>[t($,{align:"left",label:"id",width:"60",prop:"ID"}),t($,{align:"left",label:"包名",width:"150",prop:"packageName"}),t($,{align:"left",label:"展示名",width:"150",prop:"label"}),t($,{align:"left",label:"描述","min-width":"150",prop:"desc"}),t($,{align:"left",label:"操作",width:"200"},{default:s((e=>[t(w,{icon:"delete",type:"primary",link:"",onClick:a=>(async e=>{u.confirm("此操作仅删除数据库中的pkg存储，后端相应目录结构请自行删除与数据库保持一致！","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await y(e)).code&&(d({type:"success",message:"删除成功!"}),O())}))})(e.row)},{default:s((()=>[i("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),t(J,{modelValue:T.value,"onUpdate:modelValue":j[5]||(j[5]=e=>T.value=e),"before-close":U,title:"创建Package"},{footer:s((()=>[o("div",x,[t(w,{onClick:U},{default:s((()=>[i("取 消")])),_:1}),t(w,{type:"primary",onClick:q},{default:s((()=>[i("确 定")])),_:1})])])),default:s((()=>[t(_,{title:"新增Pkg用于自动化代码使用"}),t(I,{ref_key:"pkgForm",ref:P,model:B.value,rules:E.value,"label-width":"80px"},{default:s((()=>[t(G,{label:"包名",prop:"packageName"},{default:s((()=>[t(F,{modelValue:B.value.packageName,"onUpdate:modelValue":j[2]||(j[2]=e=>B.value.packageName=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),t(G,{label:"展示名",prop:"label"},{default:s((()=>[t(F,{modelValue:B.value.label,"onUpdate:modelValue":j[3]||(j[3]=e=>B.value.label=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),t(G,{label:"描述",prop:"desc"},{default:s((()=>[t(F,{modelValue:B.value.desc,"onUpdate:modelValue":j[4]||(j[4]=e=>B.value.desc=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue"])])}}});export{B as default};
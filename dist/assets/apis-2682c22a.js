/*! 
 Build based on gin-vue-admin 
 Time : 1696555582000 */
import{s as a,a as e,X as t,o as s,c as o,b as r,d as i,w as n,g as l,k as p,l as c,E as d}from"./index-33d179e9.js";import{E as u}from"./tree-03340d85.js";import"./checkbox-56cf07d1.js";/* empty css               *//* empty css              */import{e as h}from"./api-27dec5fa.js";import"./index-e3defacf.js";import"./isEqual-48baa013.js";import"./_Uint8Array-1dc9e84a.js";const m={class:"sticky top-0.5 z-10 bg-white"},y={class:"tree-content"},f={name:"Apis"},v=Object.assign(f,{props:{row:{default:function(){return{}},type:Object}},setup(f,{expose:v}){const b=f,j=e({children:"children",label:"description"}),k=e(""),w=e([]),g=e([]),x=e("");(async()=>{const e=(await h()).data.apis;w.value=O(e);const t=await(s={authorityId:b.row.authorityId},a({url:"/casbin/getPolicyPathByAuthorityId",method:"post",data:s}));var s;x.value=b.row.authorityId,g.value=[],t.data.paths&&t.data.paths.forEach((a=>{g.value.push("p:"+a.path+"m:"+a.method)}))})();const I=e(!1),E=()=>{I.value=!0},O=a=>{const e={};a&&a.forEach((a=>{a.onlyId="p:"+a.path+"m:"+a.method,Object.prototype.hasOwnProperty.call(e,a.apiGroup)?e[a.apiGroup].push(a):Object.assign(e,{[a.apiGroup]:[a]})}));const t=[];for(const s in e){const a={ID:s,description:s+"组",children:e[s]};t.push(a)}return t},C=e(null),A=async()=>{const e=C.value.getCheckedNodes(!0);var t=[];e&&e.forEach((a=>{var e={path:a.path,method:a.method};t.push(e)}));var s;0===(await(s={authorityId:x.value,casbinInfos:t},a({url:"/casbin/updateCasbin",method:"post",data:s}))).code&&p({type:"success",message:"api设置成功"})};v({needConfirm:I,enterAndNext:()=>{A()}});const G=(a,e)=>!a||-1!==e.description.indexOf(a);return t(k,(a=>{C.value.filter(a)})),(a,e)=>{const t=c,p=d,h=u;return s(),o("div",null,[r("div",m,[i(t,{modelValue:k.value,"onUpdate:modelValue":e[0]||(e[0]=a=>k.value=a),class:"w-3/5",placeholder:"筛选"},null,8,["modelValue"]),i(p,{class:"float-right",type:"primary",onClick:A},{default:n((()=>[l("确 定")])),_:1})]),r("div",y,[i(h,{ref_key:"apiTree",ref:C,data:w.value,"default-checked-keys":g.value,props:j.value,"default-expand-all":"","highlight-current":"","node-key":"onlyId","show-checkbox":"","filter-node-method":G,onCheck:E},null,8,["data","default-checked-keys","props"])])])}}});export{v as default};

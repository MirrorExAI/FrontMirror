/*! 
 Build based on gin-vue-admin 
 Time : 1697152884000 */
import{a,o as t,c as e,d as o,b as r,w as l,g as u,M as i,N as s,h as n,t as d,k as h,E as c}from"./index-37934f2a.js";import{E as y,a as f}from"./checkbox-1e8f3d72.js";/* empty css               */import{s as m}from"./authority-4c33df93.js";import{_ as p}from"./warningBar-582ed635.js";import"./isEqual-fd9c8814.js";import"./_Uint8Array-ba0cbfca.js";/* empty css             */const v={class:"sticky top-0.5 z-10 bg-white my-4"},I={class:"clear-both pt-4"},g={name:"Datas"},w=Object.assign(g,{props:{row:{default:function(){return{}},type:Object},authority:{default:function(){return[]},type:Array}},emits:["changeRow"],setup(g,{expose:w,emit:j}){const b=g,A=a([]),k=a(!1),_=a=>{a&&a.forEach((a=>{const t={};t.authorityId=a.authorityId,t.authorityName=a.authorityName,A.value.push(t),a.children&&a.children.length&&_(a.children)}))},x=a([]);_(b.authority),b.row.dataAuthorityId&&b.row.dataAuthorityId.forEach((a=>{const t=A.value&&A.value.filter((t=>t.authorityId===a.authorityId))&&A.value.filter((t=>t.authorityId===a.authorityId))[0];x.value.push(t)}));const C=()=>{x.value=[...A.value],j("changeRow","dataAuthorityId",x.value),k.value=!0},E=()=>{x.value=A.value.filter((a=>a.authorityId===b.row.authorityId)),j("changeRow","dataAuthorityId",x.value),k.value=!0},N=()=>{const a=[];R(b.row,a),x.value=A.value.filter((t=>a.indexOf(t.authorityId)>-1)),j("changeRow","dataAuthorityId",x.value),k.value=!0},R=(a,t)=>{t.push(a.authorityId),a.children&&a.children.forEach((a=>{R(a,t)}))},O=async()=>{0===(await m(b.row)).code&&h({type:"success",message:"资源设置成功"})},V=()=>{j("changeRow","dataAuthorityId",x.value),k.value=!0};return w({enterAndNext:()=>{O()},needConfirm:k}),(a,h)=>{const m=c,g=y,w=f;return t(),e("div",null,[o(p,{title:"此功能仅用于创建角色和角色的many2many关系表，具体使用还须自己结合表实现业务，详情参考示例代码（客户示例）。此功能不建议使用，建议使用插件市场【组织管理功能（点击前往）】来管理资源权限。",href:"https://plugin.gin-vue-admin.com/#/layout/newPluginInfo?id=36"}),r("div",v,[o(m,{class:"float-left",type:"primary",onClick:C},{default:l((()=>[u("全选")])),_:1}),o(m,{class:"float-left",type:"primary",onClick:E},{default:l((()=>[u("本角色")])),_:1}),o(m,{class:"float-left",type:"primary",onClick:N},{default:l((()=>[u("本角色及子角色")])),_:1}),o(m,{class:"float-right",type:"primary",onClick:O},{default:l((()=>[u("确 定")])),_:1})]),r("div",I,[o(w,{modelValue:x.value,"onUpdate:modelValue":h[0]||(h[0]=a=>x.value=a),onChange:V},{default:l((()=>[(t(!0),e(i,null,s(A.value,((a,e)=>(t(),n(g,{key:e,label:a},{default:l((()=>[u(d(a.authorityName),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])])}}});export{w as default};

/*! 
 Build based on gin-vue-admin 
 Time : 1696555582000 */
import e from"./menuItem-40c557dd.js";import o from"./asyncSubmenu-4dab7250.js";import{F as t,Y as r,o as n,h as s,w as i,c as l,M as u,N as p,e as a,I as m}from"./index-33d179e9.js";/* empty css                *//* empty css               *//* empty css             */import"./_plugin-vue_export-helper-1b428a4d.js";import"./index-225ec204.js";import"./index-8c6191bd.js";import"./index-e3defacf.js";const f={name:"AsideComponent"},d=Object.assign(f,{props:{routerInfo:{type:Object,default:()=>null},isCollapse:{default:function(){return!1},type:Boolean},theme:{default:function(){return{}},type:Object}},setup(f){const d=f,c=t((()=>d.routerInfo.children&&d.routerInfo.children.filter((e=>!e.hidden)).length?o:e));return(e,o)=>{const t=r("AsideComponent");return f.routerInfo.hidden?a("",!0):(n(),s(m(c.value),{key:0,"is-collapse":f.isCollapse,theme:f.theme,"router-info":f.routerInfo},{default:i((()=>[f.routerInfo.children&&f.routerInfo.children.length?(n(!0),l(u,{key:0},p(f.routerInfo.children,(e=>(n(),s(t,{key:e.name,"is-collapse":!1,"router-info":e,theme:f.theme},null,8,["router-info","theme"])))),128)):a("",!0)])),_:1},8,["is-collapse","theme","router-info"]))}}});export{d as default};

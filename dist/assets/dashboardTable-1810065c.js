/*! 
 Build based on gin-vue-admin 
 Time : 1696555582000 */
import{C as a}from"./github-6dc1c253.js";import{f as s}from"./date-225eaf4f.js";/* empty css                                                                       */import{_ as e}from"./_plugin-vue_export-helper-1b428a4d.js";import{a as t,o,c as l,b as m,M as i,N as c,n as d,t as r,p as f,i as p}from"./index-33d179e9.js";const n={class:"commit-table"},u=(a=>(f("data-v-144ac47f"),a=a(),p(),a))((()=>m("div",{class:"commit-table-title"}," 更新日志 ",-1))),v={class:"log"},_={class:"flex-1 flex key-box"},g={class:"flex-5 flex message"},h={class:"flex-3 flex form"},x={name:"DashboardTable"},b=e(Object.assign(x,{setup(e){const f=t(!0),p=t([]);return a(0).then((({data:a})=>{f.value=!1,a.forEach(((a,e)=>{a.commit.message&&e<10&&p.value.push({from:s(a.commit.author.date,"yyyy-MM-dd"),title:a.commit.author.name,showDayAndMonth:!0,message:a.commit.message})}))})),(a,s)=>(o(),l("div",n,[u,m("div",v,[(o(!0),l(i,null,c(p.value,((a,s)=>(o(),l("div",{key:s,class:"log-item"},[m("div",_,[m("span",{class:d(["key",s<3&&"top"])},r(s+1),3)]),m("div",g,r(a.message),1),m("div",h,r(a.from),1)])))),128))])]))}}),[["__scopeId","data-v-144ac47f"]]);export{b as default};

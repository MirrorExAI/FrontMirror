/*! 
 Build based on gin-vue-admin 
 Time : 1696555582000 */
import{_ as e,x as t,B as o,a as n,z as l,a6 as a,S as r,G as s,ag as i,C as c,a1 as p,D as u,a9 as d}from"./index-33d179e9.js";import{d as m,u as f}from"./index-225ec204.js";var g=e(t({inheritAttrs:!1}),[["render",function(e,t,n,l,a,r){return o(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);var y=e(t({name:"ElCollectionItem",inheritAttrs:!1}),[["render",function(e,t,n,l,a,r){return o(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const C="data-el-collection-item",E=e=>{const t="El".concat(e,"Collection"),o="".concat(t,"Item"),c=Symbol(t),p=Symbol(o),u={...g,name:t,setup(){const e=n(null),t=new Map;l(c,{itemMap:t,getItems:()=>{const o=s(e);if(!o)return[];const n=Array.from(o.querySelectorAll("[".concat(C,"]")));return[...t.values()].sort(((e,t)=>n.indexOf(e.ref)-n.indexOf(t.ref)))},collectionRef:e})}},d={...y,name:o,setup(e,{attrs:t}){const o=n(null),u=a(c,void 0);l(p,{collectionItemRef:o}),r((()=>{const e=s(o);e&&u.itemMap.set(e,{ref:e,...t})})),i((()=>{const e=s(o);u.itemMap.delete(e)}))}};return{COLLECTION_INJECTION_KEY:c,COLLECTION_ITEM_INJECTION_KEY:p,ElCollection:u,ElCollectionItem:d}},I=c({trigger:m.trigger,effect:{...f.effect,default:"light"},type:{type:p(String)},placement:{type:p(String),default:"bottom"},popperOptions:{type:p(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:p([Number,String]),default:0},maxHeight:{type:p([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:p(Object)},teleported:f.teleported}),O=c({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:u}}),N=c({onKeydown:{type:p(Function)}}),b=[d.down,d.pageDown,d.home],_=[d.up,d.pageUp,d.end],S=[...b,..._],{ElCollection:T,ElCollectionItem:h,COLLECTION_INJECTION_KEY:x,COLLECTION_ITEM_INJECTION_KEY:L}=E("Dropdown");export{L as C,T as E,S as F,_ as L,O as a,C as b,E as c,I as d,h as e,N as f,x as g};

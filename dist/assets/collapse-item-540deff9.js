/*! 
 Build based on gin-vue-admin 
 Time : 1697360087000 */
import{C as e,a1 as a,aC as s,bh as l,bk as t,bf as i,a as o,X as n,z as c,y as d,F as r,x as u,o as m,c as p,B as v,n as b,G as f,_ as h,a6 as C,b as K,q as k,al as y,g,t as x,d as N,w as A,az as I,J as _,Z as w,$ as E,K as H,L as j}from"./index-c27ea3c3.js";import{c as B}from"./form-item-ad3a3557.js";import{_ as F}from"./index-dd28283e.js";import{g as S}from"./rand-099990c4.js";const V=e=>typeof i(e),$=e({accordion:Boolean,modelValue:{type:a([Array,String,Number]),default:()=>s([])}}),z={[l]:V,[t]:V},O=Symbol("collapseContextKey"),W=u({name:"ElCollapse"});var X=h(u({...W,props:$,emits:z,setup(e,{expose:a,emit:s}){const i=e,{activeNames:u,setActiveNames:h}=((e,a)=>{const s=o(B(e.modelValue)),i=i=>{s.value=i;const o=e.accordion?s.value[0]:s.value;a(l,o),a(t,o)};return n((()=>e.modelValue),(()=>s.value=B(e.modelValue)),{deep:!0}),c(O,{activeNames:s,handleItemClick:a=>{if(e.accordion)i([s.value[0]===a?"":a]);else{const e=[...s.value],l=e.indexOf(a);l>-1?e.splice(l,1):e.push(a),i(e)}}}),{activeNames:s,setActiveNames:i}})(i,s),{rootKls:C}=(()=>{const e=d("collapse");return{rootKls:r((()=>e.b()))}})();return a({activeNames:u,setActiveNames:h}),(e,a)=>(m(),p("div",{class:b(f(C)),role:"tablist","aria-multiselectable":"true"},[v(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse.vue"]]);const q=e({title:{type:String,default:""},name:{type:a([String,Number]),default:()=>S()},disabled:Boolean}),G=["aria-expanded","aria-controls","aria-describedby"],J=["id","tabindex"],L=["id","aria-hidden","aria-labelledby"],T=u({name:"ElCollapseItem"});var Z=h(u({...T,props:q,setup(e,{expose:a}){const s=e,{focusing:l,id:t,isActive:i,handleFocus:n,handleHeaderClick:c,handleEnterClick:u}=(e=>{const a=C(O),s=o(!1),l=o(!1),t=o(S()),i=r((()=>null==a?void 0:a.activeNames.value.includes(e.name)));return{focusing:s,id:t,isActive:i,handleFocus:()=>{setTimeout((()=>{l.value?l.value=!1:s.value=!0}),50)},handleHeaderClick:()=>{e.disabled||(null==a||a.handleItemClick(e.name),s.value=!1,l.value=!0)},handleEnterClick:()=>{null==a||a.handleItemClick(e.name)}}})(s),{arrowKls:h,headKls:H,rootKls:j,itemWrapperKls:B,itemContentKls:V,scopedContentId:$,scopedHeadId:z}=((e,{focusing:a,isActive:s,id:l})=>{const t=d("collapse"),i=r((()=>[t.b("item"),t.is("active",f(s)),t.is("disabled",e.disabled)])),o=r((()=>[t.be("item","header"),t.is("active",f(s)),{focusing:f(a)&&!e.disabled}]));return{arrowKls:r((()=>[t.be("item","arrow"),t.is("active",f(s))])),headKls:o,rootKls:i,itemWrapperKls:r((()=>t.be("item","wrap"))),itemContentKls:r((()=>t.be("item","content"))),scopedContentId:r((()=>t.b("content-".concat(f(l))))),scopedHeadId:r((()=>t.b("head-".concat(f(l)))))}})(s,{focusing:l,isActive:i,id:t});return a({isActive:i}),(e,a)=>(m(),p("div",{class:b(f(j))},[K("div",{role:"tab","aria-expanded":f(i),"aria-controls":f($),"aria-describedby":f($)},[K("div",{id:f(z),class:b(f(H)),role:"button",tabindex:e.disabled?-1:0,onClick:a[0]||(a[0]=(...e)=>f(c)&&f(c)(...e)),onKeypress:a[1]||(a[1]=k(y(((...e)=>f(u)&&f(u)(...e)),["stop","prevent"]),["space","enter"])),onFocus:a[2]||(a[2]=(...e)=>f(n)&&f(n)(...e)),onBlur:a[3]||(a[3]=e=>l.value=!1)},[v(e.$slots,"title",{},(()=>[g(x(e.title),1)])),N(f(_),{class:b(f(h))},{default:A((()=>[N(f(I))])),_:1},8,["class"])],42,J)],8,G),N(f(F),null,{default:A((()=>[w(K("div",{id:f($),class:b(f(B)),role:"tabpanel","aria-hidden":!f(i),"aria-labelledby":f(z)},[K("div",{class:b(f(V))},[v(e.$slots,"default")],2)],10,L),[[E,f(i)]])])),_:3})],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse-item.vue"]]);const D=H(X,{CollapseItem:Z}),M=j(Z);export{M as E,D as a};

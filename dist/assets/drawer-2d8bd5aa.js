/*! 
 Build based on gin-vue-admin 
 Time : 1697360087000 */
import{C as e,_ as s,x as a,ci as t,bB as l,J as r,bF as o,ax as i,F as d,a as n,y as c,P as f,Q as u,Y as p,o as b,h as m,d as y,w as v,Z as h,b as w,aj as C,al as k,n as R,c as E,B as S,t as z,e as $,$ as g,a0 as x,bC as I,K as A}from"./index-c27ea3c3.js";import{b as B,c as L,u as _}from"./overlay-b248b148.js";const F=a({name:"ElDrawer",components:{ElOverlay:t,ElFocusTrap:l,ElIcon:r,Close:o},inheritAttrs:!1,props:e({...B,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0}}),emits:L,setup(e,{slots:s}){i({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},d((()=>!!s.title))),i({scope:"el-drawer",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/drawer.html#attributes",type:"Attribute"},d((()=>!!e.customClass)));const a=n(),t=n(),l=c("drawer"),{t:r}=f(),o=d((()=>"rtl"===e.direction||"ltr"===e.direction)),p=d((()=>u(e.size)));return{..._(e,a),drawerRef:a,focusStartRef:t,isHorizontal:o,drawerSize:p,ns:l,t:r}}}),H=["aria-label","aria-labelledby","aria-describedby"],T=["id"],j=["aria-label"],q=["id"];const D=A(s(F,[["render",function(e,s,a,t,l,r){const o=p("close"),i=p("el-icon"),d=p("el-focus-trap"),n=p("el-overlay");return b(),m(I,{to:"body",disabled:!e.appendToBody},[y(x,{name:e.ns.b("fade"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,onBeforeLeave:e.beforeLeave,persisted:""},{default:v((()=>[h(y(n,{mask:e.modal,"overlay-class":e.modalClass,"z-index":e.zIndex,onClick:e.onModalClick},{default:v((()=>[y(d,{loop:"",trapped:e.visible,"focus-trap-el":e.drawerRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:v((()=>[w("div",C({ref:"drawerRef","aria-modal":"true","aria-label":e.title||void 0,"aria-labelledby":e.title?void 0:e.titleId,"aria-describedby":e.bodyId},e.$attrs,{class:[e.ns.b(),e.direction,e.visible&&"open",e.customClass],style:e.isHorizontal?"width: "+e.drawerSize:"height: "+e.drawerSize,role:"dialog",onClick:s[1]||(s[1]=k((()=>{}),["stop"]))}),[w("span",{ref:"focusStartRef",class:R(e.ns.e("sr-focus")),tabindex:"-1"},null,2),e.withHeader?(b(),E("header",{key:0,class:R(e.ns.e("header"))},[e.$slots.title?S(e.$slots,"title",{key:1},(()=>[$(" DEPRECATED SLOT ")])):S(e.$slots,"header",{key:0,close:e.handleClose,titleId:e.titleId,titleClass:e.ns.e("title")},(()=>[e.$slots.title?$("v-if",!0):(b(),E("span",{key:0,id:e.titleId,role:"heading",class:R(e.ns.e("title"))},z(e.title),11,T))])),e.showClose?(b(),E("button",{key:2,"aria-label":e.t("el.drawer.close"),class:R(e.ns.e("close-btn")),type:"button",onClick:s[0]||(s[0]=(...s)=>e.handleClose&&e.handleClose(...s))},[y(i,{class:R(e.ns.e("close"))},{default:v((()=>[y(o)])),_:1},8,["class"])],10,j)):$("v-if",!0)],2)):$("v-if",!0),e.rendered?(b(),E("div",{key:1,id:e.bodyId,class:R(e.ns.e("body"))},[S(e.$slots,"default")],10,q)):$("v-if",!0),e.$slots.footer?(b(),E("div",{key:2,class:R(e.ns.e("footer"))},[S(e.$slots,"footer")],2)):$("v-if",!0)],16,H)])),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])])),_:3},8,["mask","overlay-class","z-index","onClick"]),[[g,e.visible]])])),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/drawer/src/drawer.vue"]]));export{D as E};
/*! 
 Build based on gin-vue-admin 
 Time : 1697360087000 */
import{C as e,D as o,a1 as l,bh as a,aZ as n,bA as t,O as s,a as u,ck as c,cl as d,F as r,Q as p,cm as i,X as f,T as y,S as v,a7 as m,aB as C,b7 as b}from"./index-c27ea3c3.js";const B=e({center:Boolean,alignCenter:Boolean,closeIcon:{type:o},customClass:{type:String,default:""},draggable:Boolean,fullscreen:Boolean,showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),g={close:()=>!0},D=e({...B,appendToBody:Boolean,beforeClose:{type:l(Function)},destroyOnClose:Boolean,closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:Boolean,modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),F={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[a]:e=>n(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},x=(e,o)=>{const l=m().emit,{nextZIndex:n}=t();let B="";const g=s(),D=s(),F=u(!1),x=u(!1),S=u(!1),I=u(e.zIndex||n());let O,h;const A=c("namespace",d),k=r((()=>{const o={},l="--".concat(A.value,"-dialog");return e.fullscreen||(e.top&&(o["".concat(l,"-margin-top")]=e.top),e.width&&(o["".concat(l,"-width")]=p(e.width))),o})),w=r((()=>e.alignCenter?{display:"flex"}:{}));function z(){null==h||h(),null==O||O(),e.openDelay&&e.openDelay>0?({stop:O}=C((()=>M()),e.openDelay)):M()}function N(){null==O||O(),null==h||h(),e.closeDelay&&e.closeDelay>0?({stop:h}=C((()=>P()),e.closeDelay)):P()}function E(){e.beforeClose?e.beforeClose((function(e){e||(x.value=!0,F.value=!1)})):N()}function M(){b&&(F.value=!0)}function P(){F.value=!1}return e.lockScroll&&i(F),f((()=>e.modelValue),(a=>{a?(x.value=!1,z(),S.value=!0,I.value=e.zIndex?I.value++:n(),y((()=>{l("open"),o.value&&(o.value.scrollTop=0)}))):F.value&&N()})),f((()=>e.fullscreen),(e=>{o.value&&(e?(B=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=B)})),v((()=>{e.modelValue&&(F.value=!0,S.value=!0,z())})),{afterEnter:function(){l("opened")},afterLeave:function(){l("closed"),l(a,!1),e.destroyOnClose&&(S.value=!1)},beforeLeave:function(){l("close")},handleClose:E,onModalClick:function(){e.closeOnClickModal&&E()},close:N,doClose:P,onOpenAutoFocus:function(){l("openAutoFocus")},onCloseAutoFocus:function(){l("closeAutoFocus")},onCloseRequested:function(){e.closeOnPressEscape&&E()},onFocusoutPrevented:function(e){var o;"pointer"===(null==(o=e.detail)?void 0:o.focusReason)&&e.preventDefault()},titleId:g,bodyId:D,closed:x,style:k,overlayDialogStyle:w,rendered:S,visible:F,zIndex:I}};export{g as a,D as b,F as c,B as d,x as u};

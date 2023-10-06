/*! 
 Build based on gin-vue-admin 
 Time : 1696555582000 */
import{a as e,X as a,o as l,c as t,b as o,d as r,w as s,g as i,h as u,e as d,aO as m,aP as p,k as n,aQ as v,l as g,E as c}from"./index-33d179e9.js";import{E as h}from"./dialog-372401e2.js";import"./overlay-848c174d.js";/* empty css               */import{a as y,E as b}from"./form-item-8ffdb63e.js";import{E as j}from"./switch-10d77d4a.js";import{E as f}from"./radio-d5552059.js";/* empty css              *//* empty css               */import"./tag-0f8d4dae.js";import"./checkbox-56cf07d1.js";import"./scrollbar-81bf16b6.js";import{E as _}from"./pagination-a4874b9b.js";import"./select-a26e10b7.js";import{E as I,a as w}from"./table-column-6999464b.js";/* empty css                */import{g as V}from"./authority-917b1a40.js";import"./image-viewer-e9617930.js";/* empty css                                                              */import{_ as k}from"./index-8679e9b7.js";/* empty css             */import"./date-225eaf4f.js";import"./dictionary-f99dcf05.js";import"./_baseClone-0928223b.js";import"./_Uint8Array-1dc9e84a.js";import"./_initCloneObject-3b45d182.js";import"./rand-099990c4.js";import"./strings-3a3a1b4e.js";import"./isEqual-48baa013.js";import"./cloneDeep-1ccbdd88.js";import"./index-225ec204.js";import"./index-f712fbc3.js";import"./debounce-b561df10.js";import"./drawer-2bb1458e.js";import"./common-05cccbcb.js";import"./upload-d74bc7c9.js";import"./progress-910ab077.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./warningBar-6b10fcc0.js";import"./sysDictionary-62483381.js";const x={class:"gva-table-box"},N={class:"gva-pagination"},z={style:{height:"60vh",overflow:"auto",padding:"0 12px"}},E=["src"],U={key:1,class:"header-img-box"},C={class:"dialog-footer"},S={name:"User"},D=Object.assign(S,{setup(S){const D=e("https://api.bitcoin-wen.com/"),q=(e,a)=>{e&&e.forEach((e=>{if(e.children&&e.children.length){const l={authorityId:e.authorityId,authorityName:e.authorityName,children:[]};q(e.children,l.children),a.push(l)}else{const l={authorityId:e.authorityId,authorityName:e.authorityName};a.push(l)}}))},O=e(1),P=e(0),$=e(10),A=e([]);e([{value:0,text:""},{value:1,text:"正常"},{value:2,text:"冻结"}]);const B=e=>{$.value=e,Q()},F=e=>{O.value=e,Q()},Q=async()=>{const e=await m({page:O.value,pageSize:$.value});0===e.code&&(A.value=e.data.list,P.value=e.data.total,O.value=e.data.page,$.value=e.data.pageSize)};a((()=>A.value),(()=>{X()}));(async()=>{Q();const e=await V({page:1,pageSize:999});W(e.data.list)})();const X=()=>{A.value&&A.value.forEach((e=>{e.authorityIds=e.authorities&&e.authorities.map((e=>e.authorityId))}))},Z=e(null),G=()=>{Z.value.open()},R=e([]),W=e=>{R.value=[],q(e,R.value)},Y=e({username:"",password:"",nickName:"",headerImg:"",authorityId:"",authorityIds:[],enable:1}),H=e({userName:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,message:"最低5位字符",trigger:"blur"}],password:[{required:!0,message:"请输入用户密码",trigger:"blur"},{min:6,message:"最低6位字符",trigger:"blur"}],nickName:[{required:!0,message:"请输入用户昵称",trigger:"blur"}],phone:[{pattern:/^1([38][0-9]|4[014-9]|[59][0-35-9]|6[2567]|7[0-8])\d{8}$/,message:"请输入合法手机号",trigger:"blur"}],email:[{pattern:/^([0-9A-Za-z\-_.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g,message:"请输入正确的邮箱",trigger:"blur"}],authorityId:[{required:!0,message:"请选择用户角色",trigger:"blur"}]}),J=e(null),K=async()=>{Y.value.authorityId=Y.value.authorityIds[0],J.value.validate((async e=>{if(e){const e={...Y.value};if("add"===T.value){const a=await p(e);0===a.code&&(n({type:"success",message:"请复制Google验证码：   "+a.data.user.googleSecret}),await Q(),M())}if("edit"===T.value){0===(await v(e)).code&&(n({type:"success",message:"编辑成功"}),await Q(),M())}}}))},L=e(!1),M=()=>{J.value.resetFields(),Y.value.headerImg="",Y.value.authorityIds=[],L.value=!1},T=e("add");return(e,a)=>{const m=I,p=w,n=_,v=g,V=y,S=f,q=j,Q=b,X=c,W=h;return l(),t("div",null,[o("div",x,[r(p,{data:A.value,"row-key":"ID"},{default:s((()=>[r(m,{align:"left",label:"ID","min-width":"50",prop:"ID"}),r(m,{align:"left",label:"渠道","min-width":"150",prop:"userName"}),r(m,{align:"left",label:"归集金额","min-width":"180",prop:"amount"})])),_:1},8,["data"]),o("div",N,[r(n,{"current-page":O.value,"page-size":$.value,"page-sizes":[10,30,50,100],total:P.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:F,onSizeChange:B},null,8,["current-page","page-size","total"])])]),r(W,{modelValue:L.value,"onUpdate:modelValue":a[7]||(a[7]=e=>L.value=e),title:"用户","show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{footer:s((()=>[o("div",C,[r(X,{onClick:M},{default:s((()=>[i("取 消")])),_:1}),r(X,{type:"primary",onClick:K},{default:s((()=>[i("确 定")])),_:1})])])),default:s((()=>[o("div",z,[r(Q,{ref_key:"userForm",ref:J,rules:H.value,model:Y.value,"label-width":"80px"},{default:s((()=>["add"===T.value?(l(),u(V,{key:0,label:"用户名",prop:"userName"},{default:s((()=>[r(v,{modelValue:Y.value.userName,"onUpdate:modelValue":a[0]||(a[0]=e=>Y.value.userName=e)},null,8,["modelValue"])])),_:1})):d("",!0),"add"===T.value?(l(),u(V,{key:1,label:"密码",prop:"password"},{default:s((()=>[r(v,{modelValue:Y.value.password,"onUpdate:modelValue":a[1]||(a[1]=e=>Y.value.password=e)},null,8,["modelValue"])])),_:1})):d("",!0),r(V,{label:"昵称",prop:"nickName"},{default:s((()=>[r(v,{modelValue:Y.value.nickName,"onUpdate:modelValue":a[2]||(a[2]=e=>Y.value.nickName=e)},null,8,["modelValue"])])),_:1}),r(V,{label:"手机号",prop:"phone"},{default:s((()=>[r(v,{modelValue:Y.value.phone,"onUpdate:modelValue":a[3]||(a[3]=e=>Y.value.phone=e)},null,8,["modelValue"])])),_:1}),r(V,{label:"邮箱",prop:"email"},{default:s((()=>[r(v,{modelValue:Y.value.email,"onUpdate:modelValue":a[4]||(a[4]=e=>Y.value.email=e)},null,8,["modelValue"])])),_:1}),r(V,{label:"用户角色",prop:"authorityId"},{default:s((()=>[r(S,{modelValue:Y.value.authorityIds,"onUpdate:modelValue":a[5]||(a[5]=e=>Y.value.authorityIds=e),style:{width:"100%"},options:R.value,"show-all-levels":!1,props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1},null,8,["modelValue","options"])])),_:1}),r(V,{label:"启用",prop:"disabled"},{default:s((()=>[r(q,{modelValue:Y.value.enable,"onUpdate:modelValue":a[6]||(a[6]=e=>Y.value.enable=e),"inline-prompt":"","active-value":1,"inactive-value":2},null,8,["modelValue"])])),_:1}),r(V,{label:"头像","label-width":"80px"},{default:s((()=>[o("div",{style:{display:"inline-block"},onClick:G},[Y.value.headerImg?(l(),t("img",{key:0,alt:"头像",class:"header-img-box",src:Y.value.headerImg&&"http"!==Y.value.headerImg.slice(0,4)?D.value+Y.value.headerImg:Y.value.headerImg},null,8,E)):(l(),t("div",U,"从媒体库选择"))])])),_:1})])),_:1},8,["rules","model"])])])),_:1},8,["modelValue"]),r(k,{ref_key:"chooseImg",ref:Z,target:Y.value,"target-key":"headerImg"},null,8,["target"])])}}});export{D as default};

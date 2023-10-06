/*! 
 Build based on gin-vue-admin 
 Time : 1696555582000 */
import{a as e,o as a,c as l,b as t,d as o,w as i,M as u,N as s,h as r,g as p,G as d,aK as n,t as c,k as m,a4 as v,l as f,E as g,J as h,p as b,i as y}from"./index-33d179e9.js";import{E as _}from"./dialog-372401e2.js";import"./overlay-848c174d.js";import{E as w}from"./pagination-a4874b9b.js";/* empty css              */import"./tag-0f8d4dae.js";import{E as j,a as V}from"./select-a26e10b7.js";import"./scrollbar-81bf16b6.js";/* empty css               */import{E as k,a as C}from"./table-column-6999464b.js";import"./checkbox-56cf07d1.js";/* empty css                */import{E as x}from"./popover-626e072a.js";/* empty css             */import{a as A,E as U}from"./form-item-8ffdb63e.js";/* empty css               */import{g as E,d as G,f as I,a as z,u as P,c as T,b as S}from"./api-27dec5fa.js";import{t as q}from"./stringFun-647a78e9.js";import{_ as D}from"./warningBar-6b10fcc0.js";import{t as B}from"./doc-46160848.js";import{_ as F}from"./_plugin-vue_export-helper-1b428a4d.js";import"./isEqual-48baa013.js";import"./_Uint8Array-1dc9e84a.js";import"./index-225ec204.js";import"./index-f712fbc3.js";import"./strings-3a3a1b4e.js";import"./debounce-b561df10.js";import"./_initCloneObject-3b45d182.js";import"./dropdown-e62c15be.js";import"./_baseClone-0928223b.js";const K=e=>(b("data-v-935edbdc"),e=e(),y(),e),O={class:"gva-search-box"},J={class:"gva-table-box"},L={class:"gva-btn-list"},M=K((()=>t("p",null,"确定要删除吗？",-1))),N={style:{"text-align":"right","margin-top":"8px"}},R=K((()=>t("p",null,"确定要刷新Casbin缓存吗？",-1))),W={style:{"text-align":"right","margin-top":"8px"}},X={class:"gva-pagination"},Y={class:"dialog-footer"},Z={name:"Api"},$=F(Object.assign(Z,{setup(b){const y=e=>{const a=Z.value.filter((a=>a.value===e))[0];return a&&"".concat(a.label)},F=e([]),K=e({path:"",apiGroup:"",method:"",description:""}),Z=e([{value:"POST",label:"创建",type:"success"},{value:"GET",label:"查看",type:""},{value:"PUT",label:"更新",type:"warning"},{value:"DELETE",label:"删除",type:"danger"}]),$=e(""),H=e({path:[{required:!0,message:"请输入api路径",trigger:"blur"}],apiGroup:[{required:!0,message:"请输入组名称",trigger:"blur"}],method:[{required:!0,message:"请选择请求方式",trigger:"blur"}],description:[{required:!0,message:"请输入api介绍",trigger:"blur"}]}),Q=e(1),ee=e(0),ae=e(10),le=e([]),te=e({}),oe=()=>{te.value={}},ie=()=>{Q.value=1,ae.value=10,pe()},ue=e=>{ae.value=e,pe()},se=e=>{Q.value=e,pe()},re=({prop:e,order:a})=>{e&&("ID"===e&&(e="id"),te.value.orderKey=q(e),te.value.desc="descending"===a),pe()},pe=async()=>{const e=await E({page:Q.value,pageSize:ae.value,...te.value});0===e.code&&(le.value=e.data.list,ee.value=e.data.total,Q.value=e.data.page,ae.value=e.data.pageSize)};pe();const de=e=>{F.value=e},ne=e(!1),ce=async()=>{const e=F.value.map((e=>e.ID)),a=await G({ids:e});0===a.code&&(m({type:"success",message:a.msg}),le.value.length===e.length&&Q.value>1&&Q.value--,ne.value=!1,pe())},me=e(!1),ve=async()=>{const e=await I();0===e.code&&m({type:"success",message:e.msg}),me.value=!1},fe=e(null),ge=e("新增Api"),he=e(!1),be=e=>{switch(e){case"addApi":ge.value="新增Api";break;case"edit":ge.value="编辑Api"}$.value=e,he.value=!0},ye=()=>{fe.value.resetFields(),K.value={path:"",apiGroup:"",method:"",description:""},he.value=!1},_e=async()=>{fe.value.validate((async e=>{if(e)switch($.value){case"addApi":0===(await T(K.value)).code&&m({type:"success",message:"添加成功",showClose:!0}),pe(),ye();break;case"edit":0===(await P(K.value)).code&&m({type:"success",message:"编辑成功",showClose:!0}),pe(),ye();break;default:m({type:"error",message:"未知操作",showClose:!0})}}))};return(e,b)=>{const E=f,G=A,I=j,P=V,T=g,q=U,$=h,we=x,je=k,Ve=C,ke=w,Ce=_;return a(),l("div",null,[t("div",O,[o(q,{ref:"searchForm",inline:!0,model:te.value},{default:i((()=>[o(G,{label:"路径"},{default:i((()=>[o(E,{modelValue:te.value.path,"onUpdate:modelValue":b[0]||(b[0]=e=>te.value.path=e),placeholder:"路径"},null,8,["modelValue"])])),_:1}),o(G,{label:"描述"},{default:i((()=>[o(E,{modelValue:te.value.description,"onUpdate:modelValue":b[1]||(b[1]=e=>te.value.description=e),placeholder:"描述"},null,8,["modelValue"])])),_:1}),o(G,{label:"API组"},{default:i((()=>[o(E,{modelValue:te.value.apiGroup,"onUpdate:modelValue":b[2]||(b[2]=e=>te.value.apiGroup=e),placeholder:"api组"},null,8,["modelValue"])])),_:1}),o(G,{label:"请求"},{default:i((()=>[o(P,{modelValue:te.value.method,"onUpdate:modelValue":b[3]||(b[3]=e=>te.value.method=e),clearable:"",placeholder:"请选择"},{default:i((()=>[(a(!0),l(u,null,s(Z.value,(e=>(a(),r(I,{key:e.value,label:"".concat(e.label,"(").concat(e.value,")"),value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),o(G,null,{default:i((()=>[o(T,{type:"primary",icon:"search",onClick:ie},{default:i((()=>[p("查询")])),_:1}),o(T,{icon:"refresh",onClick:oe},{default:i((()=>[p("重置")])),_:1})])),_:1})])),_:1},8,["model"])]),t("div",J,[t("div",L,[o(T,{type:"primary",icon:"plus",onClick:b[4]||(b[4]=e=>be("addApi"))},{default:i((()=>[p("新增")])),_:1}),o($,{class:"cursor-pointer",onClick:b[5]||(b[5]=e=>d(B)("https://www.bilibili.com/video/BV1kv4y1g7nT?p=7&vd_source=f2640257c21e3b547a790461ed94875e"))},{default:i((()=>[o(d(n))])),_:1}),o(we,{modelValue:ne.value,"onUpdate:modelValue":b[8]||(b[8]=e=>ne.value=e),placement:"top",width:"160"},{reference:i((()=>[o(T,{icon:"delete",disabled:!F.value.length,onClick:b[7]||(b[7]=e=>ne.value=!0)},{default:i((()=>[p("删除")])),_:1},8,["disabled"])])),default:i((()=>[M,t("div",N,[o(T,{type:"primary",link:"",onClick:b[6]||(b[6]=e=>ne.value=!1)},{default:i((()=>[p("取消")])),_:1}),o(T,{type:"primary",onClick:ce},{default:i((()=>[p("确定")])),_:1})])])),_:1},8,["modelValue"]),o(we,{modelValue:me.value,"onUpdate:modelValue":b[11]||(b[11]=e=>me.value=e),placement:"top",width:"160"},{reference:i((()=>[o(T,{icon:"Refresh",onClick:b[10]||(b[10]=e=>me.value=!0)},{default:i((()=>[p("刷新缓存")])),_:1})])),default:i((()=>[R,t("div",W,[o(T,{type:"primary",link:"",onClick:b[9]||(b[9]=e=>me.value=!1)},{default:i((()=>[p("取消")])),_:1}),o(T,{type:"primary",onClick:ve},{default:i((()=>[p("确定")])),_:1})])])),_:1},8,["modelValue"])]),o(Ve,{data:le.value,onSortChange:re,onSelectionChange:de},{default:i((()=>[o(je,{type:"selection",width:"55"}),o(je,{align:"left",label:"id","min-width":"60",prop:"ID",sortable:"custom"}),o(je,{align:"left",label:"API路径","min-width":"150",prop:"path",sortable:"custom"}),o(je,{align:"left",label:"API分组","min-width":"150",prop:"apiGroup",sortable:"custom"}),o(je,{align:"left",label:"API简介","min-width":"150",prop:"description",sortable:"custom"}),o(je,{align:"left",label:"请求","min-width":"150",prop:"method",sortable:"custom"},{default:i((e=>[t("div",null,c(e.row.method)+" / "+c(y(e.row.method)),1)])),_:1}),o(je,{align:"left",fixed:"right",label:"操作",width:"200"},{default:i((e=>[o(T,{icon:"edit",type:"primary",link:"",onClick:a=>(async e=>{const a=await z({id:e.ID});K.value=a.data.api,be("edit")})(e.row)},{default:i((()=>[p("编辑")])),_:2},1032,["onClick"]),o(T,{icon:"delete",type:"primary",link:"",onClick:a=>(async e=>{v.confirm("此操作将永久删除所有角色下该api, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await S(e)).code&&(m({type:"success",message:"删除成功!"}),1===le.value.length&&Q.value>1&&Q.value--,pe())}))})(e.row)},{default:i((()=>[p("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),t("div",X,[o(ke,{"current-page":Q.value,"page-size":ae.value,"page-sizes":[10,30,50,100],total:ee.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:se,onSizeChange:ue},null,8,["current-page","page-size","total"])])]),o(Ce,{modelValue:he.value,"onUpdate:modelValue":b[16]||(b[16]=e=>he.value=e),"before-close":ye,title:ge.value},{footer:i((()=>[t("div",Y,[o(T,{onClick:ye},{default:i((()=>[p("取 消")])),_:1}),o(T,{type:"primary",onClick:_e},{default:i((()=>[p("确 定")])),_:1})])])),default:i((()=>[o(D,{title:"新增API，需要在角色管理内配置权限才可使用"}),o(q,{ref_key:"apiForm",ref:fe,model:K.value,rules:H.value,"label-width":"80px"},{default:i((()=>[o(G,{label:"路径",prop:"path"},{default:i((()=>[o(E,{modelValue:K.value.path,"onUpdate:modelValue":b[12]||(b[12]=e=>K.value.path=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),o(G,{label:"请求",prop:"method"},{default:i((()=>[o(P,{modelValue:K.value.method,"onUpdate:modelValue":b[13]||(b[13]=e=>K.value.method=e),placeholder:"请选择",style:{width:"100%"}},{default:i((()=>[(a(!0),l(u,null,s(Z.value,(e=>(a(),r(I,{key:e.value,label:"".concat(e.label,"(").concat(e.value,")"),value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),o(G,{label:"api分组",prop:"apiGroup"},{default:i((()=>[o(E,{modelValue:K.value.apiGroup,"onUpdate:modelValue":b[14]||(b[14]=e=>K.value.apiGroup=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),o(G,{label:"api简介",prop:"description"},{default:i((()=>[o(E,{modelValue:K.value.description,"onUpdate:modelValue":b[15]||(b[15]=e=>K.value.description=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-935edbdc"]]);export{$ as default};

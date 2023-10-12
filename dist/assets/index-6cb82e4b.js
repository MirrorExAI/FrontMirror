/*! 
 Build based on gin-vue-admin 
 Time : 1697152884000 */
import{a as e,o as a,c as l,b as t,d as s,w as o,M as u,N as r,h as d,g as i,t as n,G as p,k as m,l as v,E as c,p as f,i as b}from"./index-37934f2a.js";import{E as g}from"./dialog-71aa2b38.js";import"./overlay-93d44909.js";import{E as h}from"./pagination-fb011907.js";/* empty css              */import"./tag-eed7c3b2.js";import{E as _,a as j}from"./select-6545c62b.js";import"./scrollbar-b6c70f3e.js";/* empty css               */import{E as V,a as y}from"./table-column-b85be477.js";import"./checkbox-1e8f3d72.js";/* empty css                */import{a as w,E as x}from"./form-item-0ef09b87.js";/* empty css               */import{a as k,s as U,g as A,u as C,c as D}from"./collection-926d21a4.js";import{t as S}from"./stringFun-647a78e9.js";/* empty css             */import{f as E}from"./format-c3c2b764.js";import{_ as L}from"./_plugin-vue_export-helper-1b428a4d.js";import"./isEqual-fd9c8814.js";import"./_Uint8Array-ba0cbfca.js";import"./index-fb5f2d1c.js";import"./index-f16bfdb4.js";import"./strings-45cdd6ae.js";import"./debounce-10f46826.js";import"./_initCloneObject-8bdd6672.js";import"./_baseClone-29c9b6f9.js";import"./date-225eaf4f.js";import"./dictionary-1667579d.js";import"./sysDictionary-22d05179.js";const z={class:"gva-search-box"},N={class:"gva-table-box"},q=(e=>(f("data-v-79b33354"),e=e(),b(),e))((()=>t("div",{class:"gva-btn-list"},null,-1))),T=["href"],F=["href"],G={class:"gva-pagination"},H={class:"dialog-footer"},I={name:"Api"},O=L(Object.assign(I,{setup(f){const b=e([]),L=e({path:"",apiGroup:"",method:"",description:""}),I=e([{value:0,text:"申请中"},{value:1,text:"交易中"},{value:2,text:"成功"},{value:3,text:"失败"}]),O=e([{value:"USDT",label:"USDT",type:"success"},{value:"USDC",label:"USDC",type:""}]),X=e([{value:"ETH",label:"以太坊",type:"success"},{value:"TRX",label:"波场",type:"warning"}]),K=e(""),M=e({path:[{required:!0,message:"请输入api路径",trigger:"blur"}],apiGroup:[{required:!0,message:"请输入组名称",trigger:"blur"}],method:[{required:!0,message:"请选择请求方式",trigger:"blur"}],description:[{required:!0,message:"请输入api介绍",trigger:"blur"}]}),Q=e(1),R=e(0),Y=e(0),Z=e(10),$=e([]),B=e({}),J=()=>{B.value={}},P=()=>{Q.value=1,Z.value=10,le()},W=e=>{Z.value=e,le()},ee=e=>{Q.value=e,le()},ae=({prop:e,order:a})=>{e&&("ID"===e&&(e="id"),B.value.orderKey=S(e),B.value.desc="descending"===a),le()},le=async()=>{const e=await k({page:Q.value,pageSize:Z.value,...B.value});0===e.code&&($.value=e.data.list,R.value=e.data.total,Q.value=e.data.page,Z.value=e.data.pageSize,Y.value=e.data.amount)},te=e(0),se=e(0),oe=e(0),ue=e(0),re=e(0),de=e(0),ie=e(0),ne=e(0),pe=e([]);(async()=>{const e=await A();for(var a=0;a<e.data.users.length;a++)pe.value.push({id:e.data.users[a].id,userName:e.data.users[a].userName})})(),le(),(async()=>{const e=await U();te.value=e.data.statList.failure,se.value=e.data.statList.init,oe.value=e.data.statList.pending,ue.value=e.data.statList.success,re.value=e.data.amountList.failure,de.value=e.data.amountList.init,ie.value=e.data.amountList.pending,ne.value=e.data.amountList.success})();const me=e=>{b.value=e};e(!1),e(!1);const ve=e(null),ce=e("新增用户"),fe=e(!1),be=()=>{ve.value.resetFields(),L.value={path:"",apiGroup:"",method:"",description:""},fe.value=!1},ge=async()=>{ve.value.validate((async e=>{if(e)switch(K.value){case"addApi":0===(await D(L.value)).code&&m({type:"success",message:"添加成功",showClose:!0}),le(),be();break;case"edit":0===(await C(L.value)).code&&m({type:"success",message:"编辑成功",showClose:!0}),le(),be();break;default:m({type:"error",message:"未知操作",showClose:!0})}}))};return(e,m)=>{const f=_,b=j,k=w,U=v,A=c,C=x,D=V,S=y,K=h,le=g;return a(),l("div",null,[t("div",z,[s(C,{ref:"searchForm",inline:!0,model:B.value},{default:o((()=>[s(k,{label:"一级渠道"},{default:o((()=>[s(b,{modelValue:B.value.channel,"onUpdate:modelValue":m[0]||(m[0]=e=>B.value.channel=e),clearable:"",placeholder:"请选择"},{default:o((()=>[(a(!0),l(u,null,r(pe.value,(e=>(a(),d(f,{key:e.userName,label:"".concat(e.userName),value:e.userName},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(k,{label:"用户地址"},{default:o((()=>[s(U,{modelValue:B.value.fromAddress,"onUpdate:modelValue":m[1]||(m[1]=e=>B.value.fromAddress=e),placeholder:""},null,8,["modelValue"])])),_:1}),s(k,{label:"状态"},{default:o((()=>[s(b,{modelValue:B.value.status,"onUpdate:modelValue":m[2]||(m[2]=e=>B.value.status=e),clearable:"",placeholder:"请选择"},{default:o((()=>[(a(!0),l(u,null,r(I.value,(e=>(a(),d(f,{key:e.value,label:"".concat(e.text),value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(k,{align:"left",label:"开始日期",width:"180"},{default:o((()=>[s(U,{modelValue:B.value.startDate,"onUpdate:modelValue":m[3]||(m[3]=e=>B.value.startDate=e),type:"date",placeholder:"请选择开始日期"},null,8,["modelValue"])])),_:1}),s(k,{align:"left",label:"结束日期",width:"180"},{default:o((()=>[s(U,{modelValue:B.value.endDate,"onUpdate:modelValue":m[4]||(m[4]=e=>B.value.endDate=e),type:"date",placeholder:"请选择开始日期"},null,8,["modelValue"])])),_:1}),s(k,null,{default:o((()=>[s(A,{type:"primary",icon:"search",onClick:P},{default:o((()=>[i("查询")])),_:1}),s(A,{icon:"refresh",onClick:J},{default:o((()=>[i("重置")])),_:1})])),_:1}),s(k,null,{default:o((()=>[i("总量："+n(Y.value),1)])),_:1})])),_:1},8,["model"])]),t("div",N,[q,s(S,{data:$.value,onSortChange:ae,onSelectionChange:me},{default:o((()=>[s(D,{align:"left",label:"id","min-width":"60",prop:"ID",sortable:"custom"}),s(D,{align:"left",label:"hash","min-width":"300",prop:"txHash",sortable:"custom"},{default:o((e=>[t("a",{href:"https://etherscan.io/tx/"+e.row.txHash,target:"_blank"},n(e.row.txHash),9,T)])),_:1}),s(D,{align:"left",label:"授权地址","min-width":"200",prop:"approvalAddress",sortable:"custom"},{default:o((e=>[t("a",{href:"https://etherscan.io/address/"+e.row.approvalAddress,target:"_blank"},n(e.row.approvalAddress),9,F)])),_:1}),s(D,{align:"left",label:"归集金额","min-width":"80",prop:"withdrawAmount",sortable:"custom"}),s(D,{align:"left",label:"变动日期","min-width":"150",sortable:"custom"},{default:o((e=>[i(n(p(E)(e.row.UpdatedAt)),1)])),_:1})])),_:1},8,["data"]),t("div",G,[s(K,{"current-page":Q.value,"page-size":Z.value,"page-sizes":[10,30,50,100],total:R.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:ee,onSizeChange:W},null,8,["current-page","page-size","total"])])]),s(le,{modelValue:fe.value,"onUpdate:modelValue":m[10]||(m[10]=e=>fe.value=e),"before-close":be,title:ce.value},{footer:o((()=>[t("div",H,[s(A,{onClick:be},{default:o((()=>[i("取 消")])),_:1}),s(A,{type:"primary",onClick:ge},{default:o((()=>[i("确 定")])),_:1})])])),default:o((()=>[s(C,{ref_key:"apiForm",ref:ve,model:L.value,rules:M.value,"label-width":"80px"},{default:o((()=>[s(k,{label:"用户地址",prop:"customerAddress"},{default:o((()=>[s(U,{modelValue:L.value.customerAddress,"onUpdate:modelValue":m[5]||(m[5]=e=>L.value.customerAddress=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),s(k,{label:"授权地址",prop:"approvalAddress"},{default:o((()=>[s(U,{modelValue:L.value.approvalAddress,"onUpdate:modelValue":m[6]||(m[6]=e=>L.value.approvalAddress=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),s(k,{label:"地址类型"},{default:o((()=>[s(b,{modelValue:L.value.network,"onUpdate:modelValue":m[7]||(m[7]=e=>L.value.network=e),clearable:"",placeholder:"请选择"},{default:o((()=>[(a(!0),l(u,null,r(X.value,(e=>(a(),d(f,{key:e.value,label:"".concat(e.label,"(").concat(e.value,")"),value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(k,{label:"币种类型"},{default:o((()=>[s(b,{modelValue:L.value.token,"onUpdate:modelValue":m[8]||(m[8]=e=>L.value.token=e),clearable:"",placeholder:"请选择"},{default:o((()=>[(a(!0),l(u,null,r(O.value,(e=>(a(),d(f,{key:e.value,label:"".concat(e.label,"(").concat(e.value,")"),value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(k,{label:"备注信息",prop:"desc"},{default:o((()=>[s(U,{modelValue:L.value.desc,"onUpdate:modelValue":m[9]||(m[9]=e=>L.value.desc=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-79b33354"]]);export{O as default};

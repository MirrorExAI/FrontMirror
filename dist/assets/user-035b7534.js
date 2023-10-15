/*! 
 Build based on gin-vue-admin 
 Time : 1697360087000 */
import{a as e,X as a,o as l,c as t,b as i,d as o,w as r,g as s,t as u,G as d,h as n,e as p,aS as m,a4 as c,d7 as g,k as v,d8 as h,aM as y,aN as f,E as b,l as w}from"./index-c27ea3c3.js";import{E as j}from"./dialog-aac937ac.js";import"./overlay-b248b148.js";import{a as _,E as k}from"./form-item-ad3a3557.js";import{E as I}from"./switch-b10b159c.js";import{E as x}from"./radio-2772a05b.js";/* empty css              *//* empty css               */import"./tag-77c00d46.js";import"./checkbox-98da5de1.js";import"./scrollbar-a928ab00.js";import{E as V}from"./pagination-6209bf52.js";import"./select-b3913bb0.js";import{E as C,a as N}from"./table-column-6cf6e751.js";/* empty css                */import{E as U}from"./popover-3d205b3a.js";/* empty css               */import{g as z}from"./authority-3097cd86.js";import{C as E}from"./index-4915609c.js";import{_ as D}from"./index-1cb4095d.js";/* empty css             */import{f as S}from"./format-7ef742ed.js";import"./_baseClone-4b4d1ff1.js";import"./_Uint8Array-3822a848.js";import"./_initCloneObject-0a66aef7.js";import"./rand-099990c4.js";import"./strings-2a05e2ce.js";import"./isEqual-1cd4e078.js";import"./cloneDeep-f4d21509.js";import"./index-7c5497a5.js";import"./index-a2fce14d.js";import"./debounce-8279176b.js";import"./dropdown-2e545871.js";import"./image-viewer-74d16daf.js";/* empty css                                                              */import"./_plugin-vue_export-helper-1b428a4d.js";import"./drawer-2d8bd5aa.js";import"./common-9a61292c.js";import"./upload-ecceb6b4.js";import"./progress-7db54afb.js";import"./warningBar-3cbd7d2c.js";import"./date-225eaf4f.js";import"./dictionary-988a5ac4.js";import"./sysDictionary-126f0f11.js";const q={class:"gva-table-box"},A={class:"gva-btn-list"},O=i("br",null,null,-1),B=i("p",null,"确定要删除此用户吗",-1),F={style:{"text-align":"right","margin-top":"8px"}},J={class:"gva-pagination"},$={style:{height:"60vh",overflow:"auto",padding:"0 12px"}},G=["src"],M={key:1,class:"header-img-box"},T={class:"dialog-footer"},X={name:"User"},Z=Object.assign(X,{setup(X){const Z=e("https://api.bitcoin-wen.com/"),K=(e,a)=>{e&&e.forEach((e=>{if(e.children&&e.children.length){const l={authorityId:e.authorityId,authorityName:e.authorityName,children:[]};K(e.children,l.children),a.push(l)}else{const l={authorityId:e.authorityId,authorityName:e.authorityName};a.push(l)}}))},L=e(1),P=e(0),Y=e(10),H=e([]),Q=e([{value:0,text:""},{value:1,text:"正常"},{value:2,text:"冻结"}]),R=e=>{Y.value=e,ee()},W=e=>{L.value=e,ee()},ee=async()=>{const e=await m({page:L.value,pageSize:Y.value});0===e.code&&(H.value=e.data.list,P.value=e.data.total,L.value=e.data.page,Y.value=e.data.pageSize)};a((()=>H.value),(()=>{ae()}));(async()=>{ee();const e=await z({page:1,pageSize:999});oe(e.data.list)})();const ae=()=>{H.value&&H.value.forEach((e=>{e.authorityIds=e.authorities&&e.authorities.map((e=>e.authorityId))}))},le=e(null),te=()=>{le.value.open()},ie=e([]),oe=e=>{ie.value=[],K(e,ie.value)},re=e({username:"",password:"",nickName:"",headerImg:"",authorityId:"",authorityIds:[],enable:1}),se=e({userName:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:5,message:"最低5位字符",trigger:"blur"}],password:[{required:!0,message:"请输入用户密码",trigger:"blur"},{min:6,message:"最低6位字符",trigger:"blur"}],nickName:[{required:!0,message:"请输入用户昵称",trigger:"blur"}],phone:[{pattern:/^1([38][0-9]|4[014-9]|[59][0-35-9]|6[2567]|7[0-8])\d{8}$/,message:"请输入合法手机号",trigger:"blur"}],email:[{pattern:/^([0-9A-Za-z\-_.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g,message:"请输入正确的邮箱",trigger:"blur"}],authorityId:[{required:!0,message:"请选择用户角色",trigger:"blur"}]}),ue=e(null),de=async()=>{re.value.authorityId=re.value.authorityIds[0],ue.value.validate((async e=>{if(e){const e={...re.value};if("add"===me.value){const a=await y(e);0===a.code&&(v({type:"success",message:"请复制Google验证码：   "+a.data.user.googleSecret}),await ee(),pe())}if("edit"===me.value){0===(await f(e)).code&&(v({type:"success",message:"编辑成功"}),await ee(),pe())}}}))},ne=e(!1),pe=()=>{ue.value.resetFields(),re.value.headerImg="",re.value.authorityIds=[],ne.value=!1},me=e("add"),ce=()=>{me.value="add",ne.value=!0};return(e,a)=>{const m=b,y=C,f=U,z=N,X=V,K=w,ae=_,oe=x,ge=I,ve=k,he=j;return l(),t("div",null,[i("div",q,[i("div",A,[o(m,{type:"primary",icon:"plus",onClick:ce},{default:r((()=>[s("新增渠道")])),_:1})]),o(z,{data:H.value,"row-key":"ID"},{default:r((()=>[o(y,{align:"left",label:"头像","min-width":"75"},{default:r((e=>[o(E,{style:{"margin-top":"8px"},"pic-src":e.row.headerImg},null,8,["pic-src"])])),_:1}),o(y,{align:"left",label:"ID","min-width":"50",prop:"ID"}),o(y,{align:"left",label:"用户名","min-width":"150",prop:"userName"}),o(y,{align:"left",label:"上级ID","min-width":"150",prop:"parentId"}),o(y,{align:"left",label:"昵称","min-width":"150",prop:"nickName"}),o(y,{align:"left",label:"状态","min-width":"150"},{default:r((e=>[s(u(Q.value[e.row.enable].text),1)])),_:1}),o(y,{align:"left",label:"谷歌验证码","min-width":"240",prop:"googleSecret"}),o(y,{align:"left",label:"飞机通知","min-width":"180",prop:"tg"}),o(y,{align:"left",label:"统计","min-width":"150",prop:"amount"}),o(y,{align:"left",label:"创建时间","min-width":"180"},{default:r((e=>[s(u(d(S)(e.row.CreatedAt))+" ",1),O,s(" "+u(d(S)(e.row.UpdatedAt)),1)])),_:1}),o(y,{label:"操作","min-width":"250",fixed:"right"},{default:r((e=>[o(f,{modelValue:e.row.visible,"onUpdate:modelValue":a=>e.row.visible=a,placement:"top",width:"160"},{reference:r((()=>[o(m,{type:"primary",link:"",icon:"delete"},{default:r((()=>[s("删除")])),_:1})])),default:r((()=>[B,i("div",F,[o(m,{type:"primary",link:"",onClick:a=>e.row.visible=!1},{default:r((()=>[s("取消")])),_:2},1032,["onClick"]),o(m,{type:"primary",onClick:a=>(async e=>{0===(await h({id:e.ID})).code&&(v.success("删除成功"),e.visible=!1,await ee())})(e.row)},{default:r((()=>[s("确定")])),_:2},1032,["onClick"])])])),_:2},1032,["modelValue","onUpdate:modelValue"]),o(m,{type:"primary",link:"",icon:"edit",onClick:a=>{return l=e.row,me.value="edit",re.value=JSON.parse(JSON.stringify(l)),void(ne.value=!0);var l}},{default:r((()=>[s("编辑")])),_:2},1032,["onClick"]),o(m,{type:"primary",link:"",icon:"magic-stick",onClick:a=>{return l=e.row,void c.confirm("是否将此用户密码重置为123456?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{const e=await g({ID:l.ID});0===e.code?v({type:"success",message:e.msg}):v({type:"error",message:e.msg})}));var l}},{default:r((()=>[s("重置密码")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"]),i("div",J,[o(X,{"current-page":L.value,"page-size":Y.value,"page-sizes":[10,30,50,100],total:P.value,layout:"total, sizes, prev, pager, next, jumper",onCurrentChange:W,onSizeChange:R},null,8,["current-page","page-size","total"])])]),o(he,{modelValue:ne.value,"onUpdate:modelValue":a[7]||(a[7]=e=>ne.value=e),title:"用户","show-close":!1,"close-on-press-escape":!1,"close-on-click-modal":!1},{footer:r((()=>[i("div",T,[o(m,{onClick:pe},{default:r((()=>[s("取 消")])),_:1}),o(m,{type:"primary",onClick:de},{default:r((()=>[s("确 定")])),_:1})])])),default:r((()=>[i("div",$,[o(ve,{ref_key:"userForm",ref:ue,rules:se.value,model:re.value,"label-width":"80px"},{default:r((()=>["add"===me.value?(l(),n(ae,{key:0,label:"用户名",prop:"userName"},{default:r((()=>[o(K,{modelValue:re.value.userName,"onUpdate:modelValue":a[0]||(a[0]=e=>re.value.userName=e)},null,8,["modelValue"])])),_:1})):p("",!0),"add"===me.value?(l(),n(ae,{key:1,label:"密码",prop:"password"},{default:r((()=>[o(K,{modelValue:re.value.password,"onUpdate:modelValue":a[1]||(a[1]=e=>re.value.password=e)},null,8,["modelValue"])])),_:1})):p("",!0),o(ae,{label:"昵称",prop:"nickName"},{default:r((()=>[o(K,{modelValue:re.value.nickName,"onUpdate:modelValue":a[2]||(a[2]=e=>re.value.nickName=e)},null,8,["modelValue"])])),_:1}),o(ae,{label:"手机号",prop:"phone"},{default:r((()=>[o(K,{modelValue:re.value.phone,"onUpdate:modelValue":a[3]||(a[3]=e=>re.value.phone=e)},null,8,["modelValue"])])),_:1}),o(ae,{label:"邮箱",prop:"email"},{default:r((()=>[o(K,{modelValue:re.value.email,"onUpdate:modelValue":a[4]||(a[4]=e=>re.value.email=e)},null,8,["modelValue"])])),_:1}),o(ae,{label:"用户角色",prop:"authorityId"},{default:r((()=>[o(oe,{modelValue:re.value.authorityIds,"onUpdate:modelValue":a[5]||(a[5]=e=>re.value.authorityIds=e),style:{width:"100%"},options:ie.value,"show-all-levels":!1,props:{multiple:!0,checkStrictly:!0,label:"authorityName",value:"authorityId",disabled:"disabled",emitPath:!1},clearable:!1},null,8,["modelValue","options"])])),_:1}),o(ae,{label:"启用",prop:"disabled"},{default:r((()=>[o(ge,{modelValue:re.value.enable,"onUpdate:modelValue":a[6]||(a[6]=e=>re.value.enable=e),"inline-prompt":"","active-value":1,"inactive-value":2},null,8,["modelValue"])])),_:1}),o(ae,{label:"头像","label-width":"80px"},{default:r((()=>[i("div",{style:{display:"inline-block"},onClick:te},[re.value.headerImg?(l(),t("img",{key:0,alt:"头像",class:"header-img-box",src:re.value.headerImg&&"http"!==re.value.headerImg.slice(0,4)?Z.value+re.value.headerImg:re.value.headerImg},null,8,G)):(l(),t("div",M,"从媒体库选择"))])])),_:1})])),_:1},8,["rules","model"])])])),_:1},8,["modelValue"]),o(D,{ref_key:"chooseImg",ref:le,target:re.value,"target-key":"headerImg"},null,8,["target"])])}}});export{Z as default};

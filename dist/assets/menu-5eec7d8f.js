/*! 
 Build based on gin-vue-admin 
 Time : 1697360087000 */
import{r as e,a as l,o as a,c as t,b as o,d as u,w as i,g as d,G as n,aO as p,t as r,h as s,I as m,e as c,d1 as v,d2 as f,a4 as h,d3 as b,k as w,d4 as y,d5 as g,d6 as _,E as V,J as k,l as j,p as I,i as x}from"./index-c27ea3c3.js";import{E as D}from"./dialog-aac937ac.js";import"./overlay-b248b148.js";import{a as C,E as U}from"./form-item-ad3a3557.js";/* empty css                *//* empty css               */import{E as B}from"./radio-2772a05b.js";/* empty css              */import"./tag-77c00d46.js";import{E as T}from"./checkbox-98da5de1.js";import"./scrollbar-a928ab00.js";import{E,a as N}from"./select-b3913bb0.js";import{E as q,a as A}from"./table-column-6cf6e751.js";/* empty css             *//* empty css               */import M from"./icon-e7e882cb.js";import{_ as S}from"./warningBar-3cbd7d2c.js";import{c as O}from"./authorityBtn-5fc0555d.js";import{t as z}from"./doc-46160848.js";import{_ as P}from"./_plugin-vue_export-helper-1b428a4d.js";import{E as $}from"./index-7c5497a5.js";import"./_baseClone-4b4d1ff1.js";import"./_Uint8Array-3822a848.js";import"./_initCloneObject-0a66aef7.js";import"./rand-099990c4.js";import"./strings-2a05e2ce.js";import"./isEqual-1cd4e078.js";import"./cloneDeep-f4d21509.js";import"./index-a2fce14d.js";import"./debounce-8279176b.js";const F=e=>(I("data-v-e0fc81e3"),e=e(),x(),e),G={class:"gva-table-box"},H={class:"gva-btn-list"},J={key:0,class:"icon-column"},K={style:{display:"inline-flex","align-items":"center"}},L=F((()=>o("span",null,"路由Path",-1))),R=F((()=>o("span",{style:{"font-size":"12px","margin-right":"12px"}},"如果菜单包含子菜单，请创建router-view二级路由页面或者",-1))),X=F((()=>o("span",null," 高亮菜单 ",-1))),Y=F((()=>o("span",null," 是否为基础页面 ",-1))),Z={class:"flex items-center gap-2"},Q={class:"flex items-center gap-2 mt-3"},W={class:"dialog-footer"},ee={name:"Menus"},le=P(Object.assign(ee,{setup(I){const x=e({path:[{required:!0,message:"请输入菜单name",trigger:"blur"}],component:[{required:!0,message:"请输入文件路径",trigger:"blur"}],"meta.title":[{required:!0,message:"请输入菜单展示名称",trigger:"blur"}]}),P=l(1),F=l(0),ee=l(999),le=l([]),ae=l({}),te=async()=>{const e=await f({page:P.value,pageSize:ee.value,...ae.value});0===e.code&&(le.value=e.data.list,F.value=e.data.total,P.value=e.data.page,ee.value=e.data.pageSize)};te();const oe=()=>{ue.value.component=ue.value.component.replace(/\\/g,"/")},ue=l({ID:0,path:"",name:"",hidden:!1,parentId:"",component:"",meta:{activeName:"",title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1},parameters:[],menuBtn:[]}),ie=()=>{ue.value.path=ue.value.name},de=e=>{re(),e()},ne=l(null),pe=l(!1),re=()=>{pe.value=!1,ne.value.resetFields(),ue.value={ID:0,path:"",name:"",hidden:!1,parentId:"",component:"",meta:{title:"",icon:"",defaultMenu:!1,closeTab:!1,keepAlive:!1}}},se=l(!1),me=()=>{re(),se.value=!1},ce=async()=>{ne.value.validate((async e=>{if(e){let e;e=be.value?await y(ue.value):await g(ue.value),0===e.code&&(w({type:"success",message:be.value?"编辑成功":"添加成功!"}),te()),re(),se.value=!1}}))},ve=l([{ID:"0",title:"根菜单"}]),fe=()=>{ve.value=[{ID:"0",title:"根目录"}],he(le.value,ve.value,!1)},he=(e,l,a)=>{e&&e.forEach((e=>{if(e.children&&e.children.length){const t={title:e.meta.title,ID:String(e.ID),disabled:a||e.ID===ue.value.ID,children:[]};he(e.children,t.children,a||e.ID===ue.value.ID),l.push(t)}else{const t={title:e.meta.title,ID:String(e.ID),disabled:a||e.ID===ue.value.ID};l.push(t)}}))},be=l(!1),we=l("新增菜单"),ye=e=>{we.value="新增菜单",ue.value.parentId=String(e),be.value=!1,fe(),se.value=!0};return(e,l)=>{const f=V,y=k,g=q,I=A,F=j,ee=C,ae=T,re=E,he=N,ge=B,_e=$,Ve=U,ke=D;return a(),t("div",null,[o("div",G,[o("div",H,[u(f,{type:"primary",icon:"plus",onClick:l[0]||(l[0]=e=>ye("0"))},{default:i((()=>[d("新增根菜单")])),_:1}),u(y,{class:"cursor-pointer",onClick:l[1]||(l[1]=e=>n(z)("https://www.bilibili.com/video/BV1kv4y1g7nT/?p=4&vd_source=f2640257c21e3b547a790461ed94875e"))},{default:i((()=>[u(n(p))])),_:1})]),u(I,{data:le.value,"row-key":"ID"},{default:i((()=>[u(g,{align:"left",label:"ID","min-width":"100",prop:"ID"}),u(g,{align:"left",label:"展示名称","min-width":"120",prop:"authorityName"},{default:i((e=>[o("span",null,r(e.row.meta.title),1)])),_:1}),u(g,{align:"left",label:"图标","min-width":"140",prop:"authorityName"},{default:i((e=>[e.row.meta.icon?(a(),t("div",J,[u(y,null,{default:i((()=>[(a(),s(m(e.row.meta.icon)))])),_:2},1024),o("span",null,r(e.row.meta.icon),1)])):c("",!0)])),_:1}),u(g,{align:"left",label:"路由Name","show-overflow-tooltip":"","min-width":"160",prop:"name"}),u(g,{align:"left",label:"路由Path","show-overflow-tooltip":"","min-width":"160",prop:"path"}),u(g,{align:"left",label:"是否隐藏","min-width":"100",prop:"hidden"},{default:i((e=>[o("span",null,r(e.row.hidden?"隐藏":"显示"),1)])),_:1}),u(g,{align:"left",label:"父节点","min-width":"90",prop:"parentId"}),u(g,{align:"left",label:"排序","min-width":"70",prop:"sort"}),u(g,{align:"left",label:"文件路径","min-width":"360",prop:"component"}),u(g,{align:"left",fixed:"right",label:"操作",width:"300"},{default:i((e=>[u(f,{type:"primary",link:"",icon:"plus",onClick:l=>ye(e.row.ID)},{default:i((()=>[d("添加子菜单")])),_:2},1032,["onClick"]),u(f,{type:"primary",link:"",icon:"edit",onClick:l=>(async e=>{we.value="编辑菜单";const l=await _({id:e});ue.value=l.data.menu,be.value=!0,fe(),se.value=!0})(e.row.ID)},{default:i((()=>[d("编辑")])),_:2},1032,["onClick"]),u(f,{type:"primary",link:"",icon:"delete",onClick:l=>{return a=e.row.ID,void h.confirm("此操作将永久删除所有角色下该菜单, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((async()=>{0===(await b({ID:a})).code&&(w({type:"success",message:"删除成功!"}),1===le.value.length&&P.value>1&&P.value--,te())})).catch((()=>{w({type:"info",message:"已取消删除"})}));var a}},{default:i((()=>[d("删除")])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])]),u(ke,{modelValue:se.value,"onUpdate:modelValue":l[20]||(l[20]=e=>se.value=e),"before-close":de,title:we.value},{footer:i((()=>[o("div",W,[u(f,{onClick:me},{default:i((()=>[d("取 消")])),_:1}),u(f,{type:"primary",onClick:ce},{default:i((()=>[d("确 定")])),_:1})])])),default:i((()=>[u(S,{title:"新增菜单，需要在角色管理内配置权限才可使用"}),se.value?(a(),s(Ve,{key:0,ref_key:"menuForm",ref:ne,inline:!0,model:ue.value,rules:x,"label-position":"top","label-width":"85px"},{default:i((()=>[u(ee,{label:"路由Name",prop:"path",style:{width:"30%"}},{default:i((()=>[u(F,{modelValue:ue.value.name,"onUpdate:modelValue":l[2]||(l[2]=e=>ue.value.name=e),autocomplete:"off",placeholder:"唯一英文字符串",onChange:ie},null,8,["modelValue"])])),_:1}),u(ee,{prop:"path",style:{width:"30%"}},{label:i((()=>[o("span",K,[L,u(ae,{modelValue:pe.value,"onUpdate:modelValue":l[3]||(l[3]=e=>pe.value=e),style:{"margin-left":"12px",height:"auto"}},{default:i((()=>[d("添加参数")])),_:1},8,["modelValue"])])])),default:i((()=>[u(F,{modelValue:ue.value.path,"onUpdate:modelValue":l[4]||(l[4]=e=>ue.value.path=e),disabled:!pe.value,autocomplete:"off",placeholder:"建议只在后方拼接参数"},null,8,["modelValue","disabled"])])),_:1}),u(ee,{label:"是否隐藏",style:{width:"30%"}},{default:i((()=>[u(he,{modelValue:ue.value.hidden,"onUpdate:modelValue":l[5]||(l[5]=e=>ue.value.hidden=e),placeholder:"是否在列表隐藏"},{default:i((()=>[u(re,{value:!1,label:"否"}),u(re,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1}),u(ee,{label:"父节点ID",style:{width:"30%"}},{default:i((()=>[u(ge,{modelValue:ue.value.parentId,"onUpdate:modelValue":l[6]||(l[6]=e=>ue.value.parentId=e),style:{width:"100%"},disabled:!be.value,options:ve.value,props:{checkStrictly:!0,label:"title",value:"ID",disabled:"disabled",emitPath:!1},"show-all-levels":!1,filterable:""},null,8,["modelValue","disabled","options"])])),_:1}),u(ee,{label:"文件路径",prop:"component",style:{width:"60%"}},{default:i((()=>[u(F,{modelValue:ue.value.component,"onUpdate:modelValue":l[7]||(l[7]=e=>ue.value.component=e),autocomplete:"off",placeholder:"页面:view/xxx/xx.vue 插件:plugin/xx/xx.vue",onBlur:oe},null,8,["modelValue"]),R,u(f,{style:{"margin-top":"4px"},onClick:l[8]||(l[8]=e=>ue.value.component="view/routerHolder.vue")},{default:i((()=>[d("点我设置")])),_:1})])),_:1}),u(ee,{label:"展示名称",prop:"meta.title",style:{width:"30%"}},{default:i((()=>[u(F,{modelValue:ue.value.meta.title,"onUpdate:modelValue":l[9]||(l[9]=e=>ue.value.meta.title=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),u(ee,{label:"图标",prop:"meta.icon",style:{width:"30%"}},{default:i((()=>[u(M,{meta:ue.value.meta,style:{width:"100%"}},null,8,["meta"])])),_:1}),u(ee,{label:"排序标记",prop:"sort",style:{width:"30%"}},{default:i((()=>[u(F,{modelValue:ue.value.sort,"onUpdate:modelValue":l[10]||(l[10]=e=>ue.value.sort=e),modelModifiers:{number:!0},autocomplete:"off"},null,8,["modelValue"])])),_:1}),u(ee,{prop:"meta.activeName",style:{width:"30%"}},{label:i((()=>[o("div",null,[X,u(_e,{content:"注：当到达此路由时候，指定左侧菜单指定name会处于活跃状态（亮起），可为空，为空则为本路由Name。",placement:"top",effect:"light"},{default:i((()=>[u(y,null,{default:i((()=>[u(n(v))])),_:1})])),_:1})])])),default:i((()=>[u(F,{modelValue:ue.value.meta.activeName,"onUpdate:modelValue":l[11]||(l[11]=e=>ue.value.meta.activeName=e),placeholder:ue.value.name,autocomplete:"off"},null,8,["modelValue","placeholder"])])),_:1}),u(ee,{label:"KeepAlive",prop:"meta.keepAlive",style:{width:"30%"}},{default:i((()=>[u(he,{modelValue:ue.value.meta.keepAlive,"onUpdate:modelValue":l[12]||(l[12]=e=>ue.value.meta.keepAlive=e),style:{width:"100%"},placeholder:"是否keepAlive缓存页面"},{default:i((()=>[u(re,{value:!1,label:"否"}),u(re,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1}),u(ee,{label:"CloseTab",prop:"meta.closeTab",style:{width:"30%"}},{default:i((()=>[u(he,{modelValue:ue.value.meta.closeTab,"onUpdate:modelValue":l[13]||(l[13]=e=>ue.value.meta.closeTab=e),style:{width:"100%"},placeholder:"是否自动关闭tab"},{default:i((()=>[u(re,{value:!1,label:"否"}),u(re,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1}),u(ee,{style:{width:"30%"}},{label:i((()=>[o("div",null,[Y,u(_e,{content:"此项选择为是，则不会展示左侧菜单以及顶部信息。",placement:"top",effect:"light"},{default:i((()=>[u(y,null,{default:i((()=>[u(n(v))])),_:1})])),_:1})])])),default:i((()=>[u(he,{modelValue:ue.value.meta.defaultMenu,"onUpdate:modelValue":l[14]||(l[14]=e=>ue.value.meta.defaultMenu=e),style:{width:"100%"},placeholder:"是否为基础页面"},{default:i((()=>[u(re,{value:!1,label:"否"}),u(re,{value:!0,label:"是"})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])):c("",!0),o("div",null,[o("div",Z,[u(f,{type:"primary",icon:"edit",onClick:l[15]||(l[15]=e=>{return(l=ue.value).parameters||(l.parameters=[]),void l.parameters.push({type:"query",key:"",value:""});var l})},{default:i((()=>[d("新增菜单参数")])),_:1}),u(y,{class:"cursor-pointer",onClick:l[16]||(l[16]=e=>n(z)("https://www.bilibili.com/video/BV1kv4y1g7nT?p=9&vd_source=f2640257c21e3b547a790461ed94875e"))},{default:i((()=>[u(n(p))])),_:1})]),u(I,{data:ue.value.parameters,style:{width:"100%","margin-top":"12px"}},{default:i((()=>[u(g,{align:"left",prop:"type",label:"参数类型",width:"180"},{default:i((e=>[u(he,{modelValue:e.row.type,"onUpdate:modelValue":l=>e.row.type=l,placeholder:"请选择"},{default:i((()=>[u(re,{key:"query",value:"query",label:"query"}),u(re,{key:"params",value:"params",label:"params"})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),u(g,{align:"left",prop:"key",label:"参数key",width:"180"},{default:i((e=>[o("div",null,[u(F,{modelValue:e.row.key,"onUpdate:modelValue":l=>e.row.key=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),u(g,{align:"left",prop:"value",label:"参数值"},{default:i((e=>[o("div",null,[u(F,{modelValue:e.row.value,"onUpdate:modelValue":l=>e.row.value=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),u(g,{align:"left"},{default:i((e=>[o("div",null,[u(f,{type:"danger",icon:"delete",onClick:l=>{return a=ue.value.parameters,t=e.$index,void a.splice(t,1);var a,t}},{default:i((()=>[d("删除")])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"]),o("div",Q,[u(f,{type:"primary",icon:"edit",onClick:l[17]||(l[17]=e=>{return(l=ue.value).menuBtn||(l.menuBtn=[]),void l.menuBtn.push({name:"",desc:""});var l})},{default:i((()=>[d("新增可控按钮 ")])),_:1}),u(y,{class:"cursor-pointer",onClick:l[18]||(l[18]=e=>n(z)("https://www.gin-vue-admin.com/guide/web/button-auth.html"))},{default:i((()=>[u(n(v))])),_:1}),u(y,{class:"cursor-pointer",onClick:l[19]||(l[19]=e=>n(z)("https://www.bilibili.com/video/BV1kv4y1g7nT?p=11&vd_source=f2640257c21e3b547a790461ed94875e"))},{default:i((()=>[u(n(p))])),_:1})]),u(I,{data:ue.value.menuBtn,style:{width:"100%","margin-top":"12px"}},{default:i((()=>[u(g,{align:"left",prop:"name",label:"按钮名称",width:"180"},{default:i((e=>[o("div",null,[u(F,{modelValue:e.row.name,"onUpdate:modelValue":l=>e.row.name=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),u(g,{align:"left",prop:"name",label:"备注",width:"180"},{default:i((e=>[o("div",null,[u(F,{modelValue:e.row.desc,"onUpdate:modelValue":l=>e.row.desc=l},null,8,["modelValue","onUpdate:modelValue"])])])),_:1}),u(g,{align:"left"},{default:i((e=>[o("div",null,[u(f,{type:"danger",icon:"delete",onClick:l=>(async(e,l)=>{const a=e[l];if(0===a.ID)return void e.splice(l,1);0===(await O({id:a.ID})).code&&e.splice(l,1)})(ue.value.menuBtn,e.$index)},{default:i((()=>[d("删除")])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data"])])])),_:1},8,["modelValue","title"])])}}}),[["__scopeId","data-v-e0fc81e3"]]);export{le as default};
/*! 
 Build based on gin-vue-admin 
 Time : 1697360087000 */
System.register(["./github-legacy-0fbd8d8a.js","./date-legacy-0c8a469a.js","./dashboardTable.vue_vue_type_style_index_0_scoped_144ac47f_lang-legacy-62ab255f.js","./_plugin-vue_export-helper-legacy-c6aa7c23.js","./index-legacy-107e023f.js"],(function(e,t){"use strict";var a,s,n,c,l,i,o,u,r,f,m,d,v;return{setters:[function(e){a=e.C},function(e){s=e.f},null,function(e){n=e._},function(e){c=e.a,l=e.o,i=e.c,o=e.b,u=e.M,r=e.N,f=e.n,m=e.t,d=e.p,v=e.i}],execute:function(){var t={class:"commit-table"},g=function(e){return d("data-v-144ac47f"),e=e(),v(),e}((function(){return o("div",{class:"commit-table-title"}," 更新日志 ",-1)})),y={class:"log"},_={class:"flex-1 flex key-box"},h={class:"flex-5 flex message"},p={class:"flex-3 flex form"},x={name:"DashboardTable"};e("default",n(Object.assign(x,{setup:function(e){var n=c(!0),d=c([]);return a(0).then((function(e){var t=e.data;n.value=!1,t.forEach((function(e,t){e.commit.message&&t<10&&d.value.push({from:s(e.commit.author.date,"yyyy-MM-dd"),title:e.commit.author.name,showDayAndMonth:!0,message:e.commit.message})}))})),function(e,a){return l(),i("div",t,[g,o("div",y,[(l(!0),i(u,null,r(d.value,(function(e,t){return l(),i("div",{key:t,class:"log-item"},[o("div",_,[o("span",{class:f(["key",t<3&&"top"])},m(t+1),3)]),o("div",h,m(e.message),1),o("div",p,m(e.from),1)])})),128))])])}}}),[["__scopeId","data-v-144ac47f"]]))}}}));

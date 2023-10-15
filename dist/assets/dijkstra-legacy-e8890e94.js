/*! 
 Build based on gin-vue-admin 
 Time : 1697360087000 */
System.register([],(function(r,t){"use strict";return{execute:function(){var t={exports:{}};!function(r){var t={single_source_shortest_paths:function(r,e,o){var s={},u={};u[e]=0;var n,i,a,h,f,p,c,_=t.PriorityQueue.make();for(_.push(e,0);!_.empty();)for(a in i=(n=_.pop()).value,h=n.cost,f=r[i]||{})f.hasOwnProperty(a)&&(p=h+f[a],c=u[a],(void 0===u[a]||c>p)&&(u[a]=p,_.push(a,p),s[a]=i));if(void 0!==o&&void 0===u[o]){var v=["Could not find a path from ",e," to ",o,"."].join("");throw new Error(v)}return s},extract_shortest_path_from_predecessor_list:function(r,t){for(var e=[],o=t;o;)e.push(o),r[o],o=r[o];return e.reverse(),e},find_path:function(r,e,o){var s=t.single_source_shortest_paths(r,e,o);return t.extract_shortest_path_from_predecessor_list(s,o)},PriorityQueue:{make:function(r){var e,o=t.PriorityQueue,s={};for(e in r=r||{},o)o.hasOwnProperty(e)&&(s[e]=o[e]);return s.queue=[],s.sorter=r.sorter||o.default_sorter,s},default_sorter:function(r,t){return r.cost-t.cost},push:function(r,t){var e={value:r,cost:t};this.queue.push(e),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};r.exports=t}(t),r("d",t.exports)}}}));

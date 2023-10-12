/*! 
 Build based on gin-vue-admin 
 Time : 1697152884000 */
import{c as n,b as r}from"./skip-6cebefbb.js";import{aC as t,aD as u,cg as e,az as o,bH as i,bP as c,at as a,ay as s,bI as f,av as l,ch as v,ci as b,aw as p,bQ as d,bL as h,bS as m,bK as y,cj as w,bT as x,aA as g,bX as _,c9 as E,c5 as j,b$ as N,cd as C,c8 as O,bJ as k,aE as T,c7 as S,ck as A,au as V,ax as F,a9 as P,bV as R,cc as z,aB as M}from"./index-dcaa9c89.js";import{_ as q,b as D,c as I,a as L}from"./tslib.es6-50fdb770.js";function B(){return t((function(n,r){var t=null;n._refCount++;var e=u(r,void 0,void 0,void 0,(function(){if(!n||n._refCount<=0||0<--n._refCount)t=null;else{var u=n._connection,e=t;t=null,!u||e&&u!==e||u.unsubscribe(),r.unsubscribe()}}));n.subscribe(e),e.closed||(t=n.connect())}))}var H,J,K=function(n){function r(r,t){var u=n.call(this)||this;return u.source=r,u.subjectFactory=t,u._subject=null,u._refCount=0,u._connection=null,e(r)&&(u.lift=r.lift),u}return q(r,n),r.prototype._subscribe=function(n){return this.getSubject().subscribe(n)},r.prototype.getSubject=function(){var n=this._subject;return n&&!n.isStopped||(this._subject=this.subjectFactory()),this._subject},r.prototype._teardown=function(){this._refCount=0;var n=this._connection;this._subject=this._connection=null,null==n||n.unsubscribe()},r.prototype.connect=function(){var n=this,r=this._connection;if(!r){r=this._connection=new o;var t=this.getSubject();r.add(this.source.subscribe(u(t,void 0,(function(){n._teardown(),t.complete()}),(function(r){n._teardown(),t.error(r)}),(function(){return n._teardown()})))),r.closed&&(this._connection=null,r=o.EMPTY)}return r},r.prototype.refCount=function(){return B()(this)},r}(i),Q=function(n){function r(){var r=null!==n&&n.apply(this,arguments)||this;return r._value=null,r._hasValue=!1,r._isComplete=!1,r}return q(r,n),r.prototype._checkFinalizedStatuses=function(n){var r=this,t=r.hasError,u=r._hasValue,e=r._value,o=r.thrownError,i=r.isStopped,c=r._isComplete;t?n.error(o):(i||c)&&(u&&n.next(e),n.complete())},r.prototype.next=function(n){this.isStopped||(this._value=n,this._hasValue=!0)},r.prototype.complete=function(){var r=this,t=r._hasValue,u=r._value;r._isComplete||(this._isComplete=!0,t&&n.prototype.next.call(this,u),n.prototype.complete.call(this))},r}(c);function U(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var t=a(n);return s(n,t)}function X(n,r){var t=f(n)?n:function(){return n},u=function(n){return n.error(t())};return new i(r?function(n){return r.schedule(u,0,n)}:u)}(J=H||(H={})).NEXT="N",J.ERROR="E",J.COMPLETE="C";var G=function(){function n(n,r,t){this.kind=n,this.value=r,this.error=t,this.hasValue="N"===n}return n.prototype.observe=function(n){return Y(this,n)},n.prototype.do=function(n,r,t){var u=this,e=u.kind,o=u.value,i=u.error;return"N"===e?null==n?void 0:n(o):"E"===e?null==r?void 0:r(i):null==t?void 0:t()},n.prototype.accept=function(n,r,t){var u;return f(null===(u=n)||void 0===u?void 0:u.next)?this.observe(n):this.do(n,r,t)},n.prototype.toObservable=function(){var n=this,r=n.kind,t=n.value,u=n.error,e="N"===r?U(t):"E"===r?X((function(){return u})):"C"===r?l:0;if(!e)throw new TypeError("Unexpected notification kind "+r);return e},n.createNext=function(r){return new n("N",r)},n.createError=function(r){return new n("E",void 0,r)},n.createComplete=function(){return n.completeNotification},n.completeNotification=new n("C"),n}();function Y(n,r){var t,u,e,o=n,i=o.kind,c=o.value,a=o.error;if("string"!=typeof i)throw new TypeError('Invalid notification, missing "kind"');"N"===i?null===(t=r.next)||void 0===t||t.call(r,c):"E"===i?null===(u=r.error)||void 0===u||u.call(r,a):null===(e=r.complete)||void 0===e||e.call(r)}var $=v((function(n){return function(){n(this),this.name="ArgumentOutOfRangeError",this.message="argument out of range"}})),W=v((function(n){return function(r){n(this),this.name="NotFoundError",this.message=r}})),Z=v((function(n){return function(r){n(this),this.name="SequenceError",this.message=r}}));function nn(n){return n instanceof Date&&!isNaN(n)}var rn=v((function(n){return function(r){void 0===r&&(r=null),n(this),this.message="Timeout has occurred",this.name="TimeoutError",this.info=r}}));function tn(r,e){var o=nn(r)?{first:r}:"number"==typeof r?{each:r}:r,i=o.first,c=o.each,a=o.with,s=void 0===a?un:a,f=o.scheduler,l=void 0===f?null!=e?e:n:f,v=o.meta,d=void 0===v?null:v;if(null==i&&null==c)throw new TypeError("No timeout provided.");return t((function(n,r){var t,e,o=null,a=0,f=function(n){e=b(r,l,(function(){try{t.unsubscribe(),p(s({meta:d,lastValue:o,seen:a})).subscribe(r)}catch(n){r.error(n)}}),n)};t=n.subscribe(u(r,(function(n){null==e||e.unsubscribe(),a++,r.next(o=n),c>0&&f(c)}),void 0,void 0,(function(){(null==e?void 0:e.closed)||null==e||e.unsubscribe(),o=null}))),!a&&f(null!=i?"number"==typeof i?i:+i-l.now():c)}))}function un(n){throw new rn(n)}var en=Array.isArray,on=Object.getPrototypeOf,cn=Object.prototype,an=Object.keys;function sn(n){if(1===n.length){var r=n[0];if(en(r))return{args:r,keys:null};if((u=r)&&"object"==typeof u&&on(u)===cn){var t=an(r);return{args:t.map((function(n){return r[n]})),keys:t}}}var u;return{args:n,keys:null}}function fn(n,r){return n.reduce((function(n,t,u){return n[t]=r[u],n}),{})}function ln(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var t=a(n),u=d(n),e=sn(n),o=e.args,c=e.keys;if(0===o.length)return s([],t);var f=new i(vn(o,t,c?function(n){return fn(c,n)}:m));return u?f.pipe(h(u)):f}function vn(n,r,t){return void 0===t&&(t=m),function(e){bn(r,(function(){for(var o=n.length,i=new Array(o),c=o,a=o,f=function(o){bn(r,(function(){var f=s(n[o],r),l=!1;f.subscribe(u(e,(function(n){i[o]=n,l||(l=!0,a--),a||e.next(t(i.slice()))}),(function(){--c||e.complete()})))}),e)},l=0;l<o;l++)f(l)}),e)}}function bn(n,r,t){n?b(t,n,r):r()}function pn(n,t,u){void 0===n&&(n=0),void 0===u&&(u=r);var e=-1;return null!=t&&(y(t)?u=t:e=t),new i((function(r){var t=nn(n)?+n-u.now():n;t<0&&(t=0);var o=0;return u.schedule((function(){r.closed||(r.next(o++),0<=e?this.schedule(void 0,e):r.complete())}),t)}))}function dn(r,t){return void 0===r&&(r=0),void 0===t&&(t=n),r<0&&(r=0),pn(r,r,t)}var hn=Array.isArray;function mn(n){return 1===n.length&&hn(n[0])?n[0]:n}function yn(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var t=mn(n);return new i((function(n){var r=0,u=function(){if(r<t.length){var e=void 0;try{e=p(t[r++])}catch(i){return void u()}var o=new w(n,void 0,x,x);e.subscribe(o),o.add(u)}else n.complete()};u()}))}function wn(n,r){return function(t,u){return!n.call(r,t,u)}}function xn(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return 1===(n=mn(n)).length?p(n[0]):new i(gn(n))}function gn(n){return function(r){for(var t=[],e=function(e){t.push(p(n[e]).subscribe(u(r,(function(n){if(t){for(var u=0;u<t.length;u++)u!==e&&t[u].unsubscribe();t=null}r.next(n)}))))},o=0;t&&!r.closed&&o<n.length;o++)e(o)}}function _n(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var t=d(n),e=mn(n);return e.length?new i((function(n){var r=e.map((function(){return[]})),o=e.map((function(){return!1}));n.add((function(){r=o=null}));for(var i=function(i){p(e[i]).subscribe(u(n,(function(u){if(r[i].push(u),r.every((function(n){return n.length}))){var e=r.map((function(n){return n.shift()}));n.next(t?t.apply(void 0,D([],I(e))):e),r.some((function(n,r){return!n.length&&o[r]}))&&n.complete()}}),(function(){o[i]=!0,!r[i].length&&n.complete()})))},c=0;!n.closed&&c<e.length;c++)i(c);return function(){r=o=null}})):l}function En(n){return t((function(r,t){var e=!1,o=null,i=null,c=!1,a=function(){if(null==i||i.unsubscribe(),i=null,e){e=!1;var n=o;o=null,t.next(n)}c&&t.complete()},s=function(){i=null,c&&t.complete()};r.subscribe(u(t,(function(r){e=!0,o=r,i||p(n(r)).subscribe(i=u(t,a,s))}),(function(){c=!0,(!e||!i||i.closed)&&t.complete()})))}))}function jn(r,t){return void 0===t&&(t=n),En((function(){return pn(r,t)}))}function Nn(n){return t((function(r,t){var e=[];return r.subscribe(u(t,(function(n){return e.push(n)}),(function(){t.next(e),t.complete()}))),p(n).subscribe(u(t,(function(){var n=e;e=[],t.next(n)}),x)),function(){e=null}}))}function Cn(n,r){return void 0===r&&(r=null),r=null!=r?r:n,t((function(t,e){var o=[],i=0;t.subscribe(u(e,(function(t){var u,c,a,s,f=null;i++%r==0&&o.push([]);try{for(var l=L(o),v=l.next();!v.done;v=l.next()){(d=v.value).push(t),n<=d.length&&(f=null!=f?f:[]).push(d)}}catch(h){u={error:h}}finally{try{v&&!v.done&&(c=l.return)&&c.call(l)}finally{if(u)throw u.error}}if(f)try{for(var b=L(f),p=b.next();!p.done;p=b.next()){var d=p.value;g(o,d),e.next(d)}}catch(m){a={error:m}}finally{try{p&&!p.done&&(s=b.return)&&s.call(b)}finally{if(a)throw a.error}}}),(function(){var n,r;try{for(var t=L(o),u=t.next();!u.done;u=t.next()){var i=u.value;e.next(i)}}catch(c){n={error:c}}finally{try{u&&!u.done&&(r=t.return)&&r.call(t)}finally{if(n)throw n.error}}e.complete()}),void 0,(function(){o=null})))}))}function On(r){for(var e,i,c=[],s=1;s<arguments.length;s++)c[s-1]=arguments[s];var f=null!==(e=a(c))&&void 0!==e?e:n,l=null!==(i=c[0])&&void 0!==i?i:null,v=c[1]||1/0;return t((function(n,t){var e=[],i=!1,c=function(n){var r=n.buffer;n.subs.unsubscribe(),g(e,n),t.next(r),i&&a()},a=function(){if(e){var n=new o;t.add(n);var u={buffer:[],subs:n};e.push(u),b(n,f,(function(){return c(u)}),r)}};null!==l&&l>=0?b(t,f,a,l,!0):i=!0,a();var s=u(t,(function(n){var r,t,u=e.slice();try{for(var o=L(u),i=o.next();!i.done;i=o.next()){var a=i.value,s=a.buffer;s.push(n),v<=s.length&&c(a)}}catch(f){r={error:f}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(r)throw r.error}}}),(function(){for(;null==e?void 0:e.length;)t.next(e.shift().buffer);null==s||s.unsubscribe(),t.complete(),t.unsubscribe()}),void 0,(function(){return e=null}));n.subscribe(s)}))}function kn(n,r){return t((function(t,e){var i=[];p(n).subscribe(u(e,(function(n){var t=[];i.push(t);var c=new o;c.add(p(r(n)).subscribe(u(e,(function(){g(i,t),e.next(t),c.unsubscribe()}),x)))}),x)),t.subscribe(u(e,(function(n){var r,t;try{for(var u=L(i),e=u.next();!e.done;e=u.next()){e.value.push(n)}}catch(o){r={error:o}}finally{try{e&&!e.done&&(t=u.return)&&t.call(u)}finally{if(r)throw r.error}}}),(function(){for(;i.length>0;)e.next(i.shift());e.complete()})))}))}function Tn(n){return t((function(r,t){var e=null,o=null,i=function(){null==o||o.unsubscribe();var r=e;e=[],r&&t.next(r),p(n()).subscribe(o=u(t,i,x))};i(),r.subscribe(u(t,(function(n){return null==e?void 0:e.push(n)}),(function(){e&&t.next(e),t.complete()}),void 0,(function(){return e=o=null})))}))}function Sn(n){return t((function(r,t){var e,o=null,i=!1;o=r.subscribe(u(t,void 0,void 0,(function(u){e=p(n(u,Sn(n)(r))),o?(o.unsubscribe(),o=null,e.subscribe(t)):i=!0}))),i&&(o.unsubscribe(),o=null,e.subscribe(t))}))}function An(n,r,t,e,o){return function(i,c){var a=t,s=r,f=0;i.subscribe(u(c,(function(r){var t=f++;s=a?n(s,r,t):(a=!0,r),e&&c.next(s)}),o&&function(){a&&c.next(s),c.complete()}))}}function Vn(n,r){return t(An(n,r,arguments.length>=2,!1,!0))}var Fn=function(n,r){return n.push(r),n};function Pn(){return t((function(n,r){Vn(Fn,[])(n).subscribe(r)}))}function Rn(n,r){return _(Pn(),E((function(r){return n(r)})),r?h(r):m)}function zn(n){return Rn(ln,n)}var Mn=zn;function qn(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var u=d(n);return u?_(qn.apply(void 0,D([],I(n))),h(u)):t((function(r,t){vn(D([r],I(mn(n))))(t)}))}function Dn(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return qn.apply(void 0,D([],I(n)))}function In(n,r){return f(r)?E(n,r,1):E(n,1)}function Ln(n,r){return f(r)?In((function(){return n}),r):In((function(){return n}))}function Bn(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var u=a(n);return t((function(r,t){j()(s(D([r],I(n)),u)).subscribe(t)}))}function Hn(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return Bn.apply(void 0,D([],I(n)))}var Jn={connector:function(){return new c}};function Kn(n,r){void 0===r&&(r=Jn);var u=r.connector;return t((function(r,t){var e,o=u();p(n((e=o,new i((function(n){return e.subscribe(n)}))))).subscribe(t),t.add(r.subscribe(o))}))}function Qn(n){return Vn((function(r,t,u){return!n||n(t,u)?r+1:r}),0)}function Un(n){return t((function(r,t){var e=!1,o=null,i=null,c=function(){if(null==i||i.unsubscribe(),i=null,e){e=!1;var n=o;o=null,t.next(n)}};r.subscribe(u(t,(function(r){null==i||i.unsubscribe(),e=!0,o=r,i=u(t,c,x),p(n(r)).subscribe(i)}),(function(){c(),t.complete()}),void 0,(function(){o=i=null})))}))}function Xn(n){return t((function(r,t){var e=!1;r.subscribe(u(t,(function(n){e=!0,t.next(n)}),(function(){e||t.next(n),t.complete()})))}))}function Gn(){return t((function(n,r){n.subscribe(u(r,x))}))}function Yn(n,r){return r?function(t){return N(r.pipe(C(1),Gn()),t.pipe(Yn(n)))}:E((function(r,t){return p(n(r,t)).pipe(C(1),O(r))}))}function $n(r,t){void 0===t&&(t=n);var u=pn(r,t);return Yn((function(){return u}))}function Wn(){return t((function(n,r){n.subscribe(u(r,(function(n){return Y(n,r)})))}))}function Zn(n,r){return t((function(t,e){var o=new Set;t.subscribe(u(e,(function(r){var t=n?n(r):r;o.has(t)||(o.add(t),e.next(r))}))),r&&p(r).subscribe(u(e,(function(){return o.clear()}),x))}))}function nr(n){return void 0===n&&(n=rr),t((function(r,t){var e=!1;r.subscribe(u(t,(function(n){e=!0,t.next(n)}),(function(){return e?t.complete():t.error(n())})))}))}function rr(){return new k}function tr(n,r){if(n<0)throw new $;var t=arguments.length>=2;return function(u){return u.pipe(T((function(r,t){return t===n})),C(1),t?Xn(r):nr((function(){return new $})))}}function ur(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return function(r){return N(r,U.apply(void 0,D([],I(n))))}}function er(n,r){return t((function(t,e){var o=0;t.subscribe(u(e,(function(u){n.call(r,u,o++,t)||(e.next(!1),e.complete())}),(function(){e.next(!0),e.complete()})))}))}function or(n,r){return r?function(t){return t.pipe(or((function(t,u){return p(n(t,u)).pipe(S((function(n,e){return r(t,n,u,e)})))})))}:t((function(r,t){var e=0,o=null,i=!1;r.subscribe(u(t,(function(r){o||(o=u(t,void 0,(function(){o=null,i&&t.complete()})),p(n(r,e++)).subscribe(o))}),(function(){i=!0,!o&&t.complete()})))}))}function ir(){return or(m)}var cr=ir;function ar(n,r,u){return void 0===r&&(r=1/0),r=(r||0)<1?1/0:r,t((function(t,e){return A(t,e,n,r,void 0,!0,u)}))}function sr(n){return t((function(r,t){try{r.subscribe(t)}finally{t.add(n)}}))}function fr(n,r){return t(lr(n,r,"value"))}function lr(n,r,t){var e="index"===t;return function(t,o){var i=0;t.subscribe(u(o,(function(u){var c=i++;n.call(r,u,c,t)&&(o.next(e?c:u),o.complete())}),(function(){o.next(e?-1:void 0),o.complete()})))}}function vr(n,r){return t(lr(n,r,"index"))}function br(n,r){var t=arguments.length>=2;return function(u){return u.pipe(n?T((function(r,t){return n(r,t,u)})):m,C(1),t?Xn(r):nr((function(){return new k})))}}function pr(n,r,e,o){return t((function(t,a){var s;r&&"function"!=typeof r?(e=r.duration,s=r.element,o=r.connector):s=r;var f=new Map,l=function(n){f.forEach(n),n(a)},v=function(n){return l((function(r){return r.error(n)}))},b=0,d=!1,h=new w(a,(function(r){try{var t=n(r),l=f.get(t);if(!l){f.set(t,l=o?o():new c);var m=(w=t,x=l,(g=new i((function(n){b++;var r=x.subscribe(n);return function(){r.unsubscribe(),0==--b&&d&&h.unsubscribe()}}))).key=w,g);if(a.next(m),e){var y=u(l,(function(){l.complete(),null==y||y.unsubscribe()}),void 0,void 0,(function(){return f.delete(t)}));h.add(p(e(m)).subscribe(y))}}l.next(s?s(r):r)}catch(_){v(_)}var w,x,g}),(function(){return l((function(n){return n.complete()}))}),v,(function(){return f.clear()}),(function(){return d=!0,0===b}));t.subscribe(h)}))}function dr(){return t((function(n,r){n.subscribe(u(r,(function(){r.next(!1),r.complete()}),(function(){r.next(!0),r.complete()})))}))}function hr(n){return n<=0?function(){return l}:t((function(r,t){var e=[];r.subscribe(u(t,(function(r){e.push(r),n<e.length&&e.shift()}),(function(){var n,r;try{for(var u=L(e),o=u.next();!o.done;o=u.next()){var i=o.value;t.next(i)}}catch(c){n={error:c}}finally{try{o&&!o.done&&(r=u.return)&&r.call(u)}finally{if(n)throw n.error}}t.complete()}),void 0,(function(){e=null})))}))}function mr(n,r){var t=arguments.length>=2;return function(u){return u.pipe(n?T((function(r,t){return n(r,t,u)})):m,hr(1),t?Xn(r):nr((function(){return new k})))}}function yr(){return t((function(n,r){n.subscribe(u(r,(function(n){r.next(G.createNext(n))}),(function(){r.next(G.createComplete()),r.complete()}),(function(n){r.next(G.createError(n)),r.complete()})))}))}function wr(n){return Vn(f(n)?function(r,t){return n(r,t)>0?r:t}:function(n,r){return n>r?n:r})}var xr=E;function gr(n,r,t){return void 0===t&&(t=1/0),f(r)?E((function(){return n}),r,t):("number"==typeof r&&(t=r),E((function(){return n}),t))}function _r(n,r,u){return void 0===u&&(u=1/0),t((function(t,e){var o=r;return A(t,e,(function(r,t){return n(o,r,t)}),u,(function(n){o=n}),!1,void 0,(function(){return o=null}))}))}function Er(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var u=a(n),e=V(n,1/0);return n=mn(n),t((function(r,t){F(e)(s(D([r],I(n)),u)).subscribe(t)}))}function jr(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return Er.apply(void 0,D([],I(n)))}function Nr(n){return Vn(f(n)?function(r,t){return n(r,t)<0?r:t}:function(n,r){return n<r?n:r})}function Cr(n,r){var t=f(n)?n:function(){return n};return f(r)?Kn(r,{connector:t}):function(n){return new K(n,t)}}function Or(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var t=mn(n);return function(n){return yn.apply(void 0,D([n],I(t)))}}var kr=Or;function Tr(){return t((function(n,r){var t,e=!1;n.subscribe(u(r,(function(n){var u=t;t=n,e&&r.next([u,n]),e=!0})))}))}function Sr(n){return n?function(r){return Kn(n)(r)}:function(n){return Cr(new c)(n)}}function Ar(n){return function(r){var t=new P(n);return new K(r,(function(){return t}))}}function Vr(){return function(n){var r=new Q;return new K(n,(function(){return r}))}}function Fr(n,r,t,u){t&&!f(t)&&(u=t);var e=f(t)?t:void 0;return function(t){return Cr(new R(n,r,u),e)(t)}}function Pr(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length?t((function(r,t){gn(D([r],I(n)))(t)})):m}function Rr(n){var r,e,o=1/0;return null!=n&&("object"==typeof n?(r=n.count,o=void 0===r?1/0:r,e=n.delay):o=n),o<=0?function(){return l}:t((function(n,r){var t,i=0,c=function(){if(null==t||t.unsubscribe(),t=null,null!=e){var n="number"==typeof e?pn(e):p(e(i)),o=u(r,(function(){o.unsubscribe(),a()}));n.subscribe(o)}else a()},a=function(){var e=!1;t=n.subscribe(u(r,void 0,(function(){++i<o?t?c():e=!0:r.complete()}))),e&&c()};a()}))}function zr(n){return t((function(r,t){var e,o,i=!1,a=!1,s=!1,f=function(){return s&&a&&(t.complete(),!0)},l=function(){s=!1,e=r.subscribe(u(t,void 0,(function(){s=!0,!f()&&(o||(o=new c,p(n(o)).subscribe(u(t,(function(){e?l():i=!0}),(function(){a=!0,f()})))),o).next()}))),i&&(e.unsubscribe(),e=null,i=!1,l())};l()}))}function Mr(n){var r;void 0===n&&(n=1/0);var e=(r=n&&"object"==typeof n?n:{count:n}).count,o=void 0===e?1/0:e,i=r.delay,c=r.resetOnSuccess,a=void 0!==c&&c;return o<=0?m:t((function(n,r){var t,e=0,c=function(){var s=!1;t=n.subscribe(u(r,(function(n){a&&(e=0),r.next(n)}),void 0,(function(n){if(e++<o){var a=function(){t?(t.unsubscribe(),t=null,c()):s=!0};if(null!=i){var f="number"==typeof i?pn(i):p(i(n,e)),l=u(r,(function(){l.unsubscribe(),a()}),(function(){r.complete()}));f.subscribe(l)}else a()}else r.error(n)}))),s&&(t.unsubscribe(),t=null,c())};c()}))}function qr(n){return t((function(r,t){var e,o,i=!1,a=function(){e=r.subscribe(u(t,void 0,void 0,(function(r){o||(o=new c,p(n(o)).subscribe(u(t,(function(){return e?a():i=!0})))),o&&o.next(r)}))),i&&(e.unsubscribe(),e=null,i=!1,a())};a()}))}function Dr(n){return t((function(r,t){var e=!1,o=null;r.subscribe(u(t,(function(n){e=!0,o=n}))),p(n).subscribe(u(t,(function(){if(e){e=!1;var n=o;o=null,t.next(n)}}),x))}))}function Ir(r,t){return void 0===t&&(t=n),Dr(dn(r,t))}function Lr(n,r){return t(An(n,r,arguments.length>=2,!0))}function Br(n,r){return void 0===r&&(r=function(n,r){return n===r}),t((function(t,e){var o={buffer:[],complete:!1},i={buffer:[],complete:!1},c=function(n){e.next(n),e.complete()},a=function(n,t){var o=u(e,(function(u){var e=t.buffer,o=t.complete;0===e.length?o?c(!1):n.buffer.push(u):!r(u,e.shift())&&c(!1)}),(function(){n.complete=!0;var r=t.complete,u=t.buffer;r&&c(0===u.length),null==o||o.unsubscribe()}));return o};t.subscribe(a(o,i)),p(n).subscribe(a(i,o))}))}function Hr(n){return t((function(r,t){var e,o=!1,i=!1,c=0;r.subscribe(u(t,(function(u){i=!0,n&&!n(u,c++,r)||(o&&t.error(new Z("Too many matching values")),o=!0,e=u)}),(function(){o?(t.next(e),t.complete()):t.error(i?new W("No matching values"):new k)})))}))}function Jr(n){return n<=0?m:t((function(r,t){var e=new Array(n),o=0;return r.subscribe(u(t,(function(r){var u=o++;if(u<n)e[u]=r;else{var i=u%n,c=e[i];e[i]=r,t.next(c)}}))),function(){e=null}}))}function Kr(n){return t((function(r,t){var e=!1,o=u(t,(function(){null==o||o.unsubscribe(),e=!0}),x);p(n).subscribe(o),r.subscribe(u(t,(function(n){return e&&t.next(n)})))}))}function Qr(n){return t((function(r,t){var e=!1,o=0;r.subscribe(u(t,(function(r){return(e||(e=!n(r,o++)))&&t.next(r)})))}))}function Ur(){return z(m)}function Xr(n,r){return f(r)?z((function(){return n}),r):z((function(){return n}))}function Gr(n,r){return t((function(t,u){var e=r;return z((function(r,t){return n(e,r,t)}),(function(n,r){return e=r,r}))(t).subscribe(u),function(){e=null}}))}function Yr(n,r){return void 0===r&&(r=!1),t((function(t,e){var o=0;t.subscribe(u(e,(function(t){var u=n(t,o++);(u||r)&&e.next(t),!u&&e.complete()})))}))}function $r(n,r,e){var o=f(n)||r||e?{next:n,error:r,complete:e}:n;return o?t((function(n,r){var t;null===(t=o.subscribe)||void 0===t||t.call(o);var e=!0;n.subscribe(u(r,(function(n){var t;null===(t=o.next)||void 0===t||t.call(o,n),r.next(n)}),(function(){var n;e=!1,null===(n=o.complete)||void 0===n||n.call(o),r.complete()}),(function(n){var t;e=!1,null===(t=o.error)||void 0===t||t.call(o,n),r.error(n)}),(function(){var n,r;e&&(null===(n=o.unsubscribe)||void 0===n||n.call(o)),null===(r=o.finalize)||void 0===r||r.call(o)})))})):m}function Wr(n,r){return t((function(t,e){var o=null!=r?r:{},i=o.leading,c=void 0===i||i,a=o.trailing,s=void 0!==a&&a,f=!1,l=null,v=null,b=!1,d=function(){null==v||v.unsubscribe(),v=null,s&&(y(),b&&e.complete())},h=function(){v=null,b&&e.complete()},m=function(r){return v=p(n(r)).subscribe(u(e,d,h))},y=function(){if(f){f=!1;var n=l;l=null,e.next(n),!b&&m(n)}};t.subscribe(u(e,(function(n){f=!0,l=n,(!v||v.closed)&&(c?y():m(n))}),(function(){b=!0,(!(s&&f&&v)||v.closed)&&e.complete()})))}))}function Zr(r,t,u){void 0===t&&(t=n);var e=pn(r,t);return Wr((function(){return e}),u)}function nt(r){return void 0===r&&(r=n),t((function(n,t){var e=r.now();n.subscribe(u(t,(function(n){var u=r.now(),o=u-e;e=u,t.next(new rt(n,o))})))}))}var rt=function(n,r){this.value=n,this.interval=r};function tt(n,t,u){var e,o,i;if(u=null!=u?u:r,nn(n)?e=n:"number"==typeof n&&(o=n),!t)throw new TypeError("No observable provided to switch to");if(i=function(){return t},null==e&&null==o)throw new TypeError("No timeout provided.");return tn({first:e,each:o,scheduler:u,with:i})}function ut(n){return void 0===n&&(n=M),S((function(r){return{value:r,timestamp:n.now()}}))}function et(n){return t((function(r,t){var e=new c;t.next(e.asObservable());var o=function(n){e.error(n),t.error(n)};return r.subscribe(u(t,(function(n){return null==e?void 0:e.next(n)}),(function(){e.complete(),t.complete()}),o)),p(n).subscribe(u(t,(function(){e.complete(),t.next(e=new c)}),x,o)),function(){null==e||e.unsubscribe(),e=null}}))}function ot(n,r){void 0===r&&(r=0);var e=r>0?r:n;return t((function(r,t){var o=[new c],i=0;t.next(o[0].asObservable()),r.subscribe(u(t,(function(r){var u,a;try{for(var s=L(o),f=s.next();!f.done;f=s.next()){f.value.next(r)}}catch(b){u={error:b}}finally{try{f&&!f.done&&(a=s.return)&&a.call(s)}finally{if(u)throw u.error}}var l=i-n+1;if(l>=0&&l%e==0&&o.shift().complete(),++i%e==0){var v=new c;o.push(v),t.next(v.asObservable())}}),(function(){for(;o.length>0;)o.shift().complete();t.complete()}),(function(n){for(;o.length>0;)o.shift().error(n);t.error(n)}),(function(){null,o=null})))}))}function it(r){for(var e,i,s=[],f=1;f<arguments.length;f++)s[f-1]=arguments[f];var l=null!==(e=a(s))&&void 0!==e?e:n,v=null!==(i=s[0])&&void 0!==i?i:null,p=s[1]||1/0;return t((function(n,t){var e=[],i=!1,a=function(n){var r=n.window,t=n.subs;r.complete(),t.unsubscribe(),g(e,n),i&&s()},s=function(){if(e){var n=new o;t.add(n);var u=new c,i={window:u,subs:n,seen:0};e.push(i),t.next(u.asObservable()),b(n,l,(function(){return a(i)}),r)}};null!==v&&v>=0?b(t,l,s,v,!0):i=!0,s();var f=function(n){return e.slice().forEach(n)},d=function(n){f((function(r){var t=r.window;return n(t)})),n(t),t.unsubscribe()};return n.subscribe(u(t,(function(n){f((function(r){r.window.next(n),p<=++r.seen&&a(r)}))}),(function(){return d((function(n){return n.complete()}))}),(function(n){return d((function(r){return r.error(n)}))}))),function(){e=null}}))}function ct(n,r){return t((function(t,e){var i=[],a=function(n){for(;0<i.length;)i.shift().error(n);e.error(n)};p(n).subscribe(u(e,(function(n){var t=new c;i.push(t);var s,f=new o;try{s=p(r(n))}catch(l){return void a(l)}e.next(t.asObservable()),f.add(s.subscribe(u(e,(function(){g(i,t),t.complete(),f.unsubscribe()}),x,a)))}),x)),t.subscribe(u(e,(function(n){var r,t,u=i.slice();try{for(var e=L(u),o=e.next();!o.done;o=e.next()){o.value.next(n)}}catch(c){r={error:c}}finally{try{o&&!o.done&&(t=e.return)&&t.call(e)}finally{if(r)throw r.error}}}),(function(){for(;0<i.length;)i.shift().complete();e.complete()}),a,(function(){for(;0<i.length;)i.shift().unsubscribe()})))}))}function at(n){return t((function(r,t){var e,o,i=function(n){e.error(n),t.error(n)},a=function(){var r;null==o||o.unsubscribe(),null==e||e.complete(),e=new c,t.next(e.asObservable());try{r=p(n())}catch(s){return void i(s)}r.subscribe(o=u(t,a,a,i))};a(),r.subscribe(u(t,(function(n){return e.next(n)}),(function(){e.complete(),t.complete()}),i,(function(){null==o||o.unsubscribe(),e=null})))}))}function st(n){return Rn(_n,n)}function ft(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t((function(r,t){_n.apply(void 0,D([r],I(n))).subscribe(t)}))}function lt(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return ft.apply(void 0,D([],I(n)))}export{Gn as $,Q as A,Ln as B,K as C,Hn as D,Kn as E,Qn as F,Un as G,Xn as H,$n as I,Yn as J,Wn as K,Zn as L,tr as M,G as N,ur as O,er as P,cr as Q,ir as R,Z as S,rn as T,or as U,ar as V,sr as W,fr as X,vr as Y,br as Z,pr as _,sn as a,dr as a0,mr as a1,yr as a2,wr as a3,xr as a4,gr as a5,_r as a6,jr as a7,Nr as a8,Cr as a9,$r as aA,Wr as aB,Zr as aC,nr as aD,nt as aE,tn as aF,tt as aG,ut as aH,Pn as aI,et as aJ,ot as aK,it as aL,ct as aM,at as aN,st as aO,lt as aP,mn as aQ,qn as aR,Bn as aS,Er as aT,kr as aU,ft as aV,Or as aa,Tr as ab,Sr as ac,Ar as ad,Vr as ae,Fr as af,Pr as ag,Vn as ah,Rr as ai,zr as aj,Mr as ak,qr as al,B as am,Dr as an,Ir as ao,Lr as ap,Br as aq,Hr as ar,Jr as as,Kr as at,Qr as au,Ur as av,Xr as aw,Gr as ax,hr as ay,Yr as az,H as b,fn as c,$ as d,W as e,ln as f,yn as g,pn as h,dn as i,En as j,jn as k,Nn as l,Cn as m,wn as n,U as o,On as p,kn as q,xn as r,Tn as s,X as t,Sn as u,Mn as v,zn as w,Dn as x,In as y,_n as z};

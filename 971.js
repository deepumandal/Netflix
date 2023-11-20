/*! For license information please see 971.js.LICENSE.txt */
"use strict";(self.webpackChunknamaste_netflix_gpt=self.webpackChunknamaste_netflix_gpt||[]).push([[971],{989:(t,e,r)=>{r.d(e,{px:()=>y,BZ:()=>w,oV:()=>g,_0:()=>b,C$:()=>m});var n=r(964),o=r(977),i=r(984),a={apiKey:"AIzaSyBejb66ATGlHntdOrzU08kQS3cBRYbmeVg",authDomain:"netflix-app-78fec.firebaseapp.com",projectId:"netflix-app-78fec",storageBucket:"netflix-app-78fec.appspot.com",messagingSenderId:"782262074348",appId:"1=782262074348=web=f6c1cfe46d82ca1c05dec9",measurementId:"G-4C8YTK7MSL"};console.log("firebase fire",a);var c=(0,o.ZF)(a),u=((0,i.IH)(c),(0,n.v0)()),l=r(257),s=r(757);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){var n,o,i;n=t,o=e,i=r[e],(o=function(t){var e=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===f(e)?e:String(e)}(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(){v=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),c=new G(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",d="suspendedYield",m="executing",y="completed",g={};function w(){}function b(){}function x(){}var E={};l(E,a,(function(){return this}));var L=Object.getPrototypeOf,j=L&&L(L(M([])));j&&j!==r&&n.call(j,a)&&(E=j);var N=x.prototype=w.prototype=Object.create(E);function O(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==f(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=p;return function(i,a){if(o===m)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var l=h(e,r,n);if("normal"===l.type){if(o=n.done?y:d,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function M(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(f(e)+" is not iterable")}return b.prototype=x,o(N,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:b,configurable:!0}),b.displayName=l(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,u,"GeneratorFunction")),t.prototype=Object.create(N),t},e.awrap=function(t){return{__await:t}},O(_.prototype),l(_.prototype,c,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new _(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(N),l(N,u,"Generator"),l(N,a,(function(){return this})),l(N,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=M,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function d(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var m=function(){var t,e=(t=v().mark((function t(){return v().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,n.w7)(u);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){d(i,n,o,a,c,"next",t)}function c(t){d(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}(),y=function(t){return l.Z.get("https://api.themoviedb.org/3/movie/now_playing",p(p({},s.bl),{},{signal:t}))},g=function(t){return l.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-hi",p(p({},s.bl),{},{signal:t}))},w=function(t){return l.Z.get("https://api.themoviedb.org/3/movie/popular",p(p({},s.bl),{},{signal:t}))},b=function(t){return l.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/videos"),s.bl)}},757:(t,e,r)=>{r.d(e,{Nx:()=>o,U7:()=>a,bl:()=>i,us:()=>n});var n="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png",o="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg",i={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmQxNzI1MmI2M2MzMzhiMGI4NTEwNjY5MjZmNjk4MSIsInN1YiI6IjYyNWFiNjE2NzRkNmMwMzljMjc2ZWQ1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6aAk3LA7z7c7CMgU5QmlPEKB279kzHh55eQaeVd3JVo")}},a="https://image.tmdb.org/t/p/w250https://image.tmdb.org/t/p/w500"},971:(t,e,r)=>{r.r(e),r.d(e,{default:()=>b});var n=r(294),o=r(989),i=r(998),a=r(22);const c=function(){var t=(0,i.v9)((function(t){var e;return null===(e=t.trending)||void 0===e?void 0:e.currentTrailer}));if(null!=t&&t.mediaDetail){var e=null==t?void 0:t.mediaDetail.key;return n.createElement("div",{className:"overflow-hidden aspect-video w-full items-center bg-gradient-to-b from-[#000000]\r z-0\r bg-red-500\r h-[200px]\r md:h-[600px]\r lg:h-[700px]\r relative\r "},n.createElement("iframe",{className:"\r absolute\r top-[50%]\r left-[50%]\r w-[100%]\r aspect-video\r -translate-x-1/2 -translate-y-1/2\r ",src:"https://www.youtube.com/embed/".concat(e,"?autoplay=1&mute=1&showinfo=0&controls=0&modestbranding=0&rel=0&loop=1"),title:"YouTube video player",loop:!0}))}};var u=r(757);const l=function(t){var e=t.item;return null!=e&&e.poster_path?n.createElement("div",{className:" w-28 md:w-[180px] pr-2 rounded-md overflow-hidden flex-shrink-0"},n.createElement("img",{className:"",src:u.U7+e.poster_path})):n.createElement(n.Fragment,null)},s=new(r(918).ZP)({apiKey:"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",dangerouslyAllowBrowser:!0});var f=r(943);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function p(){p=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,a=Object.create(i.prototype),c=new G(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var v="suspendedStart",d="suspendedYield",m="executing",y="completed",g={};function w(){}function b(){}function x(){}var E={};l(E,a,(function(){return this}));var L=Object.getPrototypeOf,j=L&&L(L(M([])));j&&j!==r&&n.call(j,a)&&(E=j);var N=x.prototype=w.prototype=Object.create(E);function O(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==h(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=v;return function(i,a){if(o===m)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?y:d,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=y,n.method="throw",n.arg=l.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function M(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(h(e)+" is not iterable")}return b.prototype=x,o(N,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:b,configurable:!0}),b.displayName=l(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,u,"GeneratorFunction")),t.prototype=Object.create(N),t},e.awrap=function(t){return{__await:t}},O(_.prototype),l(_.prototype,c,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new _(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(N),l(N,u,"Generator"),l(N,a,(function(){return this})),l(N,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=M,G.prototype={constructor:G,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:M(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function v(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){v(i,n,o,a,c,"next",t)}function c(t){v(i,n,o,a,c,"throw",t)}a(void 0)}))}}var m=function(){var t=(0,n.useRef)(),e=(0,i.I0)(),r=(0,i.v9)((function(t){return t.gpt})).searching,o=function(){var t=d(p().mark((function t(e){var r,n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/search/movie?query="+e+"&include_adult=false&language=en-US&page=1",u.bl);case 2:return r=t.sent,t.next=5,r.json();case 5:return n=t.sent,t.abrupt("return",n.results);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a=function(){var r=d(p().mark((function r(n){var i,a,c,u,l,h,v;return p().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),e((0,f.qP)()),c="Act as a Movie Recommendation system and suggest some movies for the query : "+t.current.value+". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya",r.next=5,s.chat.completions.create({messages:[{role:"user",content:c}],model:"gpt-3.5-turbo"});case 5:return(u=r.sent).choices,console.log(null===(i=u.choices)||void 0===i||null===(i=i[0])||void 0===i||null===(i=i.message)||void 0===i?void 0:i.content),l=null===(a=u.choices)||void 0===a||null===(a=a[0])||void 0===a||null===(a=a.message)||void 0===a?void 0:a.content.split(","),h=l.map((function(t){return o(t)})),r.next=12,Promise.all(h);case 12:v=r.sent,console.log("tmdbResults",v),e((0,f.Un)(v));case 15:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}();return(0,n.useEffect)((function(){return function(){r&&e((0,f.qP)())}}),[]),n.createElement("form",{className:"bg-black w-1/2 py-3 px-3 rounded-lg flex justify-between",onSubmit:a},n.createElement("input",{ref:t,type:"text",placeholder:"What do you want to watch...",className:"px-4 py-2 w-[80%] outline-none rounded-lg"}),n.createElement("button",{className:"bg-red-600 text-white outline-none tracking-widest w-[18%] rounded-lg"},r?"Loading...":"Search"))};const y=(0,n.memo)(m),g=function(t){var e,r=t.suggestedMovie;return n.createElement("div",{className:" pl-10"},n.createElement("h1",{className:"text-white \r font-bold mt-5 text-2xl"},null==r||null===(e=r[0])||void 0===e?void 0:e.original_title),n.createElement("div",{className:"flex overflow-x-scroll w-full m-auto"},null==r?void 0:r.map((function(t){return n.createElement(l,{key:t.id,item:t})}))))},w=function(){var t=(0,i.v9)((function(t){return t.gpt})).searchResults;return n.createElement("div",null,n.createElement("div",{className:"fixed top-0 bottom-0 left-0 right-0"},n.createElement("img",{src:u.Nx,className:"absolute w-full h-full top-0 left-0 bottom-0 right-0"}),n.createElement("div",{className:"absolute w-full h-full bg-gradient-to-b from-[#000000] via-transparent to-[#00000068] bg-opacity-10"})),n.createElement("div",{className:"z-2 relative flex justify-center pt-52 "},n.createElement(y,null)),n.createElement("div",{className:"z-2 relative w-full m-auto "},t.length&&n.createElement("div",{className:"w-full bg-gradient-to-b from-transparent to-black overflow-x-hidden"},null==t?void 0:t.map((function(t){return n.createElement(g,{key:null==t?void 0:t.id,suggestedMovie:t})})))))},b=function(){var t=(0,i.I0)(),e=(0,i.v9)((function(t){return t.trending}))||[],r=e.trendingMovie,u=e.popularMovie,l=e.nowPlayingMovie,s=(0,i.v9)((function(t){return t.gpt})).isGptPage;return(0,n.useEffect)((function(){var e=new AbortController;return l.length||(0,o.px)(e.signal).then((function(e){var r;t((0,a.aj)(null==e||null===(r=e.data)||void 0===r?void 0:r.results))})),r.length||(0,o.oV)(e.signal).then((function(e){var r,n;!function(e){if(e.length){var r=e[1];(0,o._0)(null==r?void 0:r.id).then((function(e){var n=(null==e?void 0:e.data).results.filter((function(t){return"Trailer"===(null==t?void 0:t.type)}));t((0,a.Ff)({mediaDetail:n[0],movieDetail:r}))}))}}(null==e||null===(r=e.data)||void 0===r?void 0:r.results),t((0,a.Q_)(null==e||null===(n=e.data)||void 0===n?void 0:n.results))})),u.length||(0,o.BZ)(e.signal).then((function(e){var r;t((0,a.EL)(null==e||null===(r=e.data)||void 0===r?void 0:r.results))})),function(){e&&(null==e||e.abort())}}),[]),n.createElement("div",{className:""},s?n.createElement(w,null):n.createElement(n.Fragment,null,n.createElement("div",{className:"relative w-screen aspect-video"},n.createElement(c,null))))}}}]);
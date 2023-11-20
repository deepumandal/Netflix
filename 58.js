/*! For license information please see 58.js.LICENSE.txt */
"use strict";(self.webpackChunknamaste_netflix_gpt=self.webpackChunknamaste_netflix_gpt||[]).push([[58],{989:(e,t,r)=>{r.d(t,{VZ:()=>v,px:()=>w,BZ:()=>E,oV:()=>x,_0:()=>N,C$:()=>b,ER:()=>g});var n=r(964),o=r(977),a=r(984),i={apiKey:"AIzaSyBejb66ATGlHntdOrzU08kQS3cBRYbmeVg",authDomain:"netflix-app-78fec.firebaseapp.com",projectId:"netflix-app-78fec",storageBucket:"netflix-app-78fec.appspot.com",messagingSenderId:"782262074348",appId:"1=782262074348=web=f6c1cfe46d82ca1c05dec9",measurementId:"G-4C8YTK7MSL"};console.log("firebase fire",i);var c=(0,o.ZF)(i),u=((0,a.IH)(c),(0,n.v0)()),l=r(257),s=r(757);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){var n,o,a;n=e,o=t,a=r[t],(o=function(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(t)?t:String(t)}(o))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(){m=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof b?t:b,i=Object.create(a.prototype),c=new P(n||[]);return o(i,"_invoke",{value:S(e,r,c)}),i}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var h="suspendedStart",d="suspendedYield",y="executing",v="completed",g={};function b(){}function w(){}function x(){}var E={};l(E,i,(function(){return this}));var N=Object.getPrototypeOf,j=N&&N(N(M([])));j&&j!==r&&n.call(j,i)&&(E=j);var O=x.prototype=b.prototype=Object.create(E);function k(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(o,a,i,c){var u=p(e[o],e,a);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==f(s)&&n.call(s,"__await")?t.resolve(s.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(s).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(e,n){function o(){return new t((function(t,o){r(e,n,t,o)}))}return a=a?a.then(o,o):o()}})}function S(t,r,n){var o=h;return function(a,i){if(o===y)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:e,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=T(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var l=p(t,r,n);if("normal"===l.type){if(o=n.done?v:d,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function T(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,T(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function M(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(f(t)+" is not iterable")}return w.prototype=x,o(O,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=l(x,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,l(e,u,"GeneratorFunction")),e.prototype=Object.create(O),e},t.awrap=function(e){return{__await:e}},k(L.prototype),l(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new L(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(O),l(O,u,"Generator"),l(O,i,(function(){return this})),l(O,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=M,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:M(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}function d(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function y(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){d(a,n,o,i,c,"next",e)}function c(e){d(a,n,o,i,c,"throw",e)}i(void 0)}))}}var v=function(){var e=y(m().mark((function e(t){var r,o;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,o=t.password,e.next=3,(0,n.Xb)(u,r,o);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=y(m().mark((function e(t){var r,o;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,o=t.password,e.next=3,(0,n.e5)(u,r,o);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=y(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,n.w7)(u);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(e){return l.Z.get("https://api.themoviedb.org/3/movie/now_playing",h(h({},s.bl),{},{signal:e}))},x=function(e){return l.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-hi",h(h({},s.bl),{},{signal:e}))},E=function(e){return l.Z.get("https://api.themoviedb.org/3/movie/popular",h(h({},s.bl),{},{signal:e}))},N=function(e){return l.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/videos"),s.bl)}},757:(e,t,r)=>{r.d(t,{Nx:()=>o,U7:()=>i,bl:()=>a,us:()=>n});var n="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png",o="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg",a={method:"GET",headers:{accept:"application/json",Authorization:"Bearer ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmQxNzI1MmI2M2MzMzhiMGI4NTEwNjY5MjZmNjk4MSIsInN1YiI6IjYyNWFiNjE2NzRkNmMwMzljMjc2ZWQ1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6aAk3LA7z7c7CMgU5QmlPEKB279kzHh55eQaeVd3JVo")}},i="https://image.tmdb.org/t/p/w250https://image.tmdb.org/t/p/w500"},58:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(294),o=r(998),a=r(250),i=r(989),c=r(71),u=r(757);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const s=function(){var e,t,r=(e=(0,n.useState)(!0),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=r[0],f=r[1],p=(0,n.useRef)(),h=(0,n.useRef)(),m=(0,n.useRef)(),d=(0,o.I0)(),y=(0,a.TH)(),v=(0,o.v9)((function(e){return e.auth})),g=v.errorMessage,b=v.loading,w=(0,a.s0)();return n.createElement("div",{className:"w-full h-full"},n.createElement("div",null,n.createElement("img",{src:u.Nx,className:"absolute w-full h-full"}),n.createElement("div",{className:"absolute w-full h-full bg-gradient-to-b from-[#000000] via-transparent to-[#00000068] bg-opacity-10"})),n.createElement("div",null,n.createElement("img",{className:"absolute w-48",src:u.us,alt:"logo"})),n.createElement("div",{className:"flex w-full h-full justify-center items-center"},n.createElement("div",{className:"bg-[#000000a9] p-10 z-10 rounded-xl w-3/12 h-fit"},n.createElement("form",{className:"w-full ",onSubmit:function(e){var t,r;e.preventDefault();var n=null===(t=h.current)||void 0===t?void 0:t.value,o=null===(r=m.current)||void 0===r?void 0:r.value,a=function(e,t){var r=/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(e),n=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(t);return r?n?"":"Please enter valid password":"Please enter valid email address"}(n,o);if(a)return d((0,c.wq)(a));d((0,c.lM)()),s?(0,i.ER)({email:n,password:o}).then((function(e){var t,r=e.user,o=r.displayName,a=r.stsTokenManager,i=r.phoneNumber,u=r.photoURL,l=r.uid,s=a.refreshToken,f=a.accessToken,p=a.expirationTime;d((0,c.XX)({displayName:o,userToken:{refreshToken:s,accessToken:f,expirationTime:p},phoneNumber:i,photoURL:u,uid:l,email:n})),w(null===(t=y.state)||void 0===t?void 0:t.pathname,{replace:!0})})).catch((function(e){d((0,c.wq)(e.message))})):(0,i.VZ)({email:n,password:o}).then((function(e){var t,r=e.user,o=r.displayName,a=r.stsTokenManager,i=r.phoneNumber,u=r.photoURL,l=r.uid,s=a.refreshToken,f=a.accessToken,p=a.expirationTime;d((0,c.XX)({displayName:o,userToken:{refreshToken:s,accessToken:f,expirationTime:p},phoneNumber:i,photoURL:u,uid:l,email:n})),w(null===(t=y.state)||void 0===t?void 0:t.pathname,{replace:!0})})).catch((function(e){d((0,c.wq)(e.message))}))}},n.createElement("h1",{className:"text-white text-left font-semibold text-2xl my-4 py-2"},s?"Sign in":"Sign up"),!s&&n.createElement("input",{ref:p,type:"text",placeholder:"Enter your Name",className:"w-full h-12 px-3 my-3  bg-gray-500 text-white cursor-pointer outline-none opacity-1 rounded-lg"}),n.createElement("input",{ref:h,type:"email",placeholder:"Enter your Email",className:"w-full h-12 px-3 my-3 bg-gray-500 text-white cursor-pointer outline-none opacity-1 rounded-lg"}),n.createElement("input",{ref:m,type:"password",placeholder:"Enter your Password",className:"w-full px-3 my-3 h-12  bg-gray-500 text-white  outline-none cursor-pointer rounded-lg"}),n.createElement("button",{type:"submit",className:"bg-red-600 text-white font-semibold my-3 w-full h-12 rounded-lg"},b?"Loading...":"Submit"),n.createElement("p",{className:" text-red-500 font-semibold   cursor-pointer"},g," "),n.createElement("p",{className:" text-white  my-5 cursor-pointer"},"New to Netflix?"," ",n.createElement("span",{className:"hover:text-red-500",onClick:function(){f((function(e){return!e}))}},"Sign up now."))))))}}}]);
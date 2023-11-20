let e,t,r,n,i,o,a,s,l;function u(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function c(e){return e&&e.__esModule?e.default:e}var d,f,p,h,m,g,y,v,b,w,x,_,E,S,P,k,I,O,C,T,R,A,N,M,j,D=globalThis,L={},F={},U=D.parcelRequirea291;null==U&&((U=function(e){if(e in L)return L[e].exports;if(e in F){var t=F[e];delete F[e];var r={id:e,exports:{}};return L[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){F[e]=t},D.parcelRequirea291=U);var B=U.register;B("1b2ls",function(e,t){u(e.exports,"Fragment",()=>r,e=>r=e),u(e.exports,"jsx",()=>n,e=>n=e),u(e.exports,"jsxs",()=>i,e=>i=e);var r,n,i,o=U("acw62"),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(e,t,r){var n,i={},o=null,s=null;for(n in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(s=t.ref),t)l.call(t,n)&&!d.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:a,type:e,key:o,ref:s,props:i,_owner:c.current}}r=s,n=f,i=f}),B("acw62",function(e,t){e.exports=U("2pUnB")}),B("2pUnB",function(e,t){u(e.exports,"Children",()=>r,e=>r=e),u(e.exports,"Component",()=>n,e=>n=e),u(e.exports,"Fragment",()=>i,e=>i=e),u(e.exports,"Profiler",()=>o,e=>o=e),u(e.exports,"PureComponent",()=>a,e=>a=e),u(e.exports,"StrictMode",()=>s,e=>s=e),u(e.exports,"Suspense",()=>l,e=>l=e),u(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>c,e=>c=e),u(e.exports,"cloneElement",()=>d,e=>d=e),u(e.exports,"createContext",()=>f,e=>f=e),u(e.exports,"createElement",()=>p,e=>p=e),u(e.exports,"createFactory",()=>h,e=>h=e),u(e.exports,"createRef",()=>m,e=>m=e),u(e.exports,"forwardRef",()=>g,e=>g=e),u(e.exports,"isValidElement",()=>y,e=>y=e),u(e.exports,"lazy",()=>v,e=>v=e),u(e.exports,"memo",()=>b,e=>b=e),u(e.exports,"startTransition",()=>w,e=>w=e),u(e.exports,"unstable_act",()=>x,e=>x=e),u(e.exports,"useCallback",()=>_,e=>_=e),u(e.exports,"useContext",()=>E,e=>E=e),u(e.exports,"useDebugValue",()=>S,e=>S=e),u(e.exports,"useDeferredValue",()=>P,e=>P=e),u(e.exports,"useEffect",()=>k,e=>k=e),u(e.exports,"useId",()=>I,e=>I=e),u(e.exports,"useImperativeHandle",()=>O,e=>O=e),u(e.exports,"useInsertionEffect",()=>C,e=>C=e),u(e.exports,"useLayoutEffect",()=>T,e=>T=e),u(e.exports,"useMemo",()=>R,e=>R=e),u(e.exports,"useReducer",()=>A,e=>A=e),u(e.exports,"useRef",()=>N,e=>N=e),u(e.exports,"useState",()=>M,e=>M=e),u(e.exports,"useSyncExternalStore",()=>j,e=>j=e),u(e.exports,"useTransition",()=>D,e=>D=e),u(e.exports,"version",()=>L,e=>L=e);var r,n,i,o,a,s,l,c,d,f,p,h,m,g,y,v,b,w,x,_,E,S,P,k,I,O,C,T,R,A,N,M,j,D,L,F=Symbol.for("react.element"),U=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),H=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),G=Symbol.iterator,X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,Y={};function Z(e,t,r){this.props=e,this.context=t,this.refs=Y,this.updater=r||X}function ee(){}function et(e,t,r){this.props=e,this.context=t,this.refs=Y,this.updater=r||X}Z.prototype.isReactComponent={},Z.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},Z.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},ee.prototype=Z.prototype;var er=et.prototype=new ee;er.constructor=et,Q(er,Z.prototype),er.isPureReactComponent=!0;var en=Array.isArray,ei=Object.prototype.hasOwnProperty,eo={current:null},ea={key:!0,ref:!0,__self:!0,__source:!0};function es(e,t,r){var n,i={},o=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(o=""+t.key),t)ei.call(t,n)&&!ea.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:F,type:e,key:o,ref:a,props:i,_owner:eo.current}}function el(e){return"object"==typeof e&&null!==e&&e.$$typeof===F}var eu=/\/+/g;function ec(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function ed(e,t,r){if(null==e)return e;var n=[],i=0;return function e(t,r,n,i,o){var a,s,l,u=typeof t;("undefined"===u||"boolean"===u)&&(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case F:case U:c=!0}}if(c)return o=o(c=t),t=""===i?"."+ec(c,0):i,en(o)?(n="",null!=t&&(n=t.replace(eu,"$&/")+"/"),e(o,r,n,"",function(e){return e})):null!=o&&(el(o)&&(a=o,s=n+(!o.key||c&&c.key===o.key?"":(""+o.key).replace(eu,"$&/")+"/")+t,o={$$typeof:F,type:a.type,key:s,ref:a.ref,props:a.props,_owner:a._owner}),r.push(o)),1;if(c=0,i=""===i?".":i+":",en(t))for(var d=0;d<t.length;d++){var f=i+ec(u=t[d],d);c+=e(u,r,n,f,o)}else if("function"==typeof(f=null===(l=t)||"object"!=typeof l?null:"function"==typeof(l=G&&l[G]||l["@@iterator"])?l:null))for(t=f.call(t),d=0;!(u=t.next()).done;)f=i+ec(u=u.value,d++),c+=e(u,r,n,f,o);else if("object"===u)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(r=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return c}(e,n,"","",function(e){return t.call(r,e,i++)}),n}function ef(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var ep={current:null},eh={transition:null};r={map:ed,forEach:function(e,t,r){ed(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ed(e,function(){t++}),t},toArray:function(e){return ed(e,function(e){return e})||[]},only:function(e){if(!el(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n=Z,i=B,o=$,a=et,s=z,l=W,c={ReactCurrentDispatcher:ep,ReactCurrentBatchConfig:eh,ReactCurrentOwner:eo},d=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Q({},e.props),i=e.key,o=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,a=eo.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)ei.call(t,l)&&!ea.hasOwnProperty(l)&&(n[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)n.children=r;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:F,type:e.type,key:i,ref:o,props:n,_owner:a}},f=function(e){return(e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:V,_context:e},e.Consumer=e},p=es,h=function(e){var t=es.bind(null,e);return t.type=e,t},m=function(){return{current:null}},g=function(e){return{$$typeof:q,render:e}},y=el,v=function(e){return{$$typeof:J,_payload:{_status:-1,_result:e},_init:ef}},b=function(e,t){return{$$typeof:K,type:e,compare:void 0===t?null:t}},w=function(e){var t=eh.transition;eh.transition={};try{e()}finally{eh.transition=t}},x=function(){throw Error("act(...) is not supported in production builds of React.")},_=function(e,t){return ep.current.useCallback(e,t)},E=function(e){return ep.current.useContext(e)},S=function(){},P=function(e){return ep.current.useDeferredValue(e)},k=function(e,t){return ep.current.useEffect(e,t)},I=function(){return ep.current.useId()},O=function(e,t,r){return ep.current.useImperativeHandle(e,t,r)},C=function(e,t){return ep.current.useInsertionEffect(e,t)},T=function(e,t){return ep.current.useLayoutEffect(e,t)},R=function(e,t){return ep.current.useMemo(e,t)},A=function(e,t,r){return ep.current.useReducer(e,t,r)},N=function(e){return ep.current.useRef(e)},M=function(e){return ep.current.useState(e)},j=function(e,t,r){return ep.current.useSyncExternalStore(e,t,r)},D=function(){return ep.current.useTransition()},L="18.2.0"}),B("Xw6Mv",function(e,t){u(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>V,e=>V=e),u(e.exports,"createPortal",()=>H,e=>H=e),u(e.exports,"createRoot",()=>q,e=>q=e),u(e.exports,"findDOMNode",()=>W,e=>W=e),u(e.exports,"flushSync",()=>K,e=>K=e),u(e.exports,"hydrate",()=>J,e=>J=e),u(e.exports,"hydrateRoot",()=>G,e=>G=e),u(e.exports,"render",()=>X,e=>X=e),u(e.exports,"unmountComponentAtNode",()=>Q,e=>Q=e),u(e.exports,"unstable_batchedUpdates",()=>Y,e=>Y=e),u(e.exports,"unstable_renderSubtreeIntoContainer",()=>Z,e=>Z=e),u(e.exports,"version",()=>ee,e=>ee=e);var r,n,i,o,a,s,l=U("acw62"),c=U("fO90s");function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,p={};function h(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(p[e]=t,e=0;e<t.length;e++)f.add(t[e])}var g=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),y=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},w={};function x(e,t,r,n,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_[e]=new x(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_[t]=new x(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){_[e]=new x(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_[e]=new x(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_[e]=new x(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){_[e]=new x(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){_[e]=new x(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){_[e]=new x(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){_[e]=new x(e,5,!1,e.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function S(e){return e[1].toUpperCase()}function P(e,t,r,n){var i,o=_.hasOwnProperty(t)?_[t]:null;(null!==o?0!==o.type:n||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,r,n){if(null==t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":if(n)return!1;if(null!==r)return!r.acceptsBooleans;return"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,r,n))return!0;if(n)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,r,o,n)&&(r=null),n||null===o?(i=t,(!!y.call(w,i)||!y.call(b,i)&&(v.test(i)?w[i]=!0:(b[i]=!0,!1)))&&(null===r?e.removeAttribute(t):e.setAttribute(t,""+r))):o.mustUseProperty?e[o.propertyName]=null===r?3!==o.type&&"":r:(t=o.attributeName,n=o.attributeNamespace,null===r?e.removeAttribute(t):(r=3===(o=o.type)||4===o&&!0===r?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(E,S);_[t]=new x(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(E,S);_[t]=new x(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(E,S);_[t]=new x(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){_[e]=new x(e,1,!1,e.toLowerCase(),null,!1,!1)}),_.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){_[e]=new x(e,1,!1,e.toLowerCase(),null,!0,!0)});var k=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),O=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),N=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),F=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var B=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var z=Symbol.iterator;function $(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=z&&e[z]||e["@@iterator"])?e:null}var V,H,q,W,K,J,G,X,Q,Y,Z,ee,et,er=Object.assign;function en(e){if(void 0===et)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);et=t&&t[1]||""}return"\n"+et+e}var ei=!1;function eo(e,t){if(!e||ei)return"";ei=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var n=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){n=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){n=e}e()}}catch(t){if(t&&n&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),o=n.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do if(a--,0>--s||i[a]!==o[s]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=s)break}}}finally{ei=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?en(e):""}function ea(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function es(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function el(e){e._valueTracker||(e._valueTracker=function(e){var t=es(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==r&&"function"==typeof r.get&&"function"==typeof r.set){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=es(e)?e.checked?"true":"false":e.value),(e=n)!==r&&(t.setValue(e),!0)}function ec(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ed(e,t){var r=t.checked;return er({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=r?r:e._wrapperState.initialChecked})}function ef(e,t){var r=null==t.defaultValue?"":t.defaultValue,n=null!=t.checked?t.checked:t.defaultChecked;r=ea(null!=t.value?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ep(e,t){null!=(t=t.checked)&&P(e,"checked",t,!1)}function eh(e,t){ep(e,t);var r=ea(t.value),n=t.type;if(null!=r)"number"===n?(0===r&&""===e.value||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===n||"reset"===n){e.removeAttribute("value");return}t.hasOwnProperty("value")?eg(e,t.type,r):t.hasOwnProperty("defaultValue")&&eg(e,t.type,ea(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function em(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!("submit"!==n&&"reset"!==n||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}""!==(r=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==r&&(e.name=r)}function eg(e,t,r){("number"!==t||ec(e.ownerDocument)!==e)&&(null==r?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ey=Array.isArray;function ev(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(i=0,r=""+ea(r),t=null;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function eb(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(d(91));return er({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ew(e,t){var r=t.value;if(null==r){if(r=t.children,t=t.defaultValue,null!=r){if(null!=t)throw Error(d(92));if(ey(r)){if(1<r.length)throw Error(d(93));r=r[0]}t=r}null==t&&(t=""),r=t}e._wrapperState={initialValue:ea(r)}}function ex(e,t){var r=ea(t.value),n=ea(t.defaultValue);null!=r&&((r=""+r)!==e.value&&(e.value=r),null==t.defaultValue&&e.defaultValue!==r&&(e.defaultValue=r)),null!=n&&(e.defaultValue=""+n)}function e_(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function eE(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eS(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?eE(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var eP,ek,eI=(eP=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ek=ek||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ek.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,r,n){MSApp.execUnsafeLocalFunction(function(){return eP(e,t,r,n)})}:eP);function eO(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&3===r.nodeType){r.nodeValue=t;return}}e.textContent=t}var eC={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eT=["Webkit","ms","Moz","O"];function eR(e,t,r){return null==t||"boolean"==typeof t||""===t?"":r||"number"!=typeof t||0===t||eC.hasOwnProperty(e)&&eC[e]?(""+t).trim():t+"px"}function eA(e,t){for(var r in e=e.style,t)if(t.hasOwnProperty(r)){var n=0===r.indexOf("--"),i=eR(r,t[r],n);"float"===r&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}Object.keys(eC).forEach(function(e){eT.forEach(function(t){eC[t=t+e.charAt(0).toUpperCase()+e.substring(1)]=eC[e]})});var eN=er({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eM(e,t){if(t){if(eN[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(d(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(d(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(d(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(d(62))}}function ej(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eD=null;function eL(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var eF=null,eU=null,eB=null;function ez(e){if(e=nG(e)){if("function"!=typeof eF)throw Error(d(280));var t=e.stateNode;t&&(t=nQ(t),eF(e.stateNode,e.type,t))}}function e$(e){eU?eB?eB.push(e):eB=[e]:eU=e}function eV(){if(eU){var e=eU,t=eB;if(eB=eU=null,ez(e),t)for(e=0;e<t.length;e++)ez(t[e])}}function eH(e,t){return e(t)}function eq(){}var eW=!1;function eK(e,t,r){if(eW)return e(t,r);eW=!0;try{return eH(e,t,r)}finally{eW=!1,(null!==eU||null!==eB)&&(eq(),eV())}}function eJ(e,t){var r=e.stateNode;if(null===r)return null;var n=nQ(r);if(null===n)return null;switch(r=n[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(n=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!n;break;default:e=!1}if(e)return null;if(r&&"function"!=typeof r)throw Error(d(231,t,typeof r));return r}var eG=!1;if(g)try{var eX={};Object.defineProperty(eX,"passive",{get:function(){eG=!0}}),window.addEventListener("test",eX,eX),window.removeEventListener("test",eX,eX)}catch(e){eG=!1}function eQ(e,t,r,n,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(e){this.onError(e)}}var eY=!1,eZ=null,e0=!1,e1=null,e2={onError:function(e){eY=!0,eZ=e}};function e3(e,t,r,n,i,o,a,s,l){eY=!1,eZ=null,eQ.apply(e2,arguments)}function e4(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do 0!=(4098&(t=e).flags)&&(r=t.return),e=t.return;while(e)}return 3===t.tag?r:null}function e6(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function e5(e){if(e4(e)!==e)throw Error(d(188))}function e8(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=e4(e)))throw Error(d(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(n=i.return)){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return e5(i),e;if(o===n)return e5(i),t;o=o.sibling}throw Error(d(188))}if(r.return!==n.return)r=i,n=o;else{for(var a=!1,s=i.child;s;){if(s===r){a=!0,r=i,n=o;break}if(s===n){a=!0,n=i,r=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===r){a=!0,r=o,n=i;break}if(s===n){a=!0,n=o,r=i;break}s=s.sibling}if(!a)throw Error(d(189))}}if(r.alternate!==n)throw Error(d(190))}if(3!==r.tag)throw Error(d(188));return r.stateNode.current===r?e:t}(e))?function e(t){if(5===t.tag||6===t.tag)return t;for(t=t.child;null!==t;){var r=e(t);if(null!==r)return r;t=t.sibling}return null}(e):null}var e7=c.unstable_scheduleCallback,e9=c.unstable_cancelCallback,te=c.unstable_shouldYield,tt=c.unstable_requestPaint,tr=c.unstable_now,tn=c.unstable_getCurrentPriorityLevel,ti=c.unstable_ImmediatePriority,to=c.unstable_UserBlockingPriority,ta=c.unstable_NormalPriority,ts=c.unstable_LowPriority,tl=c.unstable_IdlePriority,tu=null,tc=null,td=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(tf(e)/tp|0)|0},tf=Math.log,tp=Math.LN2,th=64,tm=4194304;function tg(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ty(e,t){var r=e.pendingLanes;if(0===r)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&r;if(0!==a){var s=a&~i;0!==s?n=tg(s):0!=(o&=a)&&(n=tg(o))}else 0!=(a=r&~i)?n=tg(a):0!==o&&(n=tg(o));if(0===n)return 0;if(0!==t&&t!==n&&0==(t&i)&&((i=n&-n)>=(o=t&-t)||16===i&&0!=(4194240&o)))return t;if(0!=(4&n)&&(n|=16&r),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=n;0<t;)i=1<<(r=31-td(t)),n|=e[r],t&=~i;return n}function tv(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function tb(){var e=th;return 0==(4194240&(th<<=1))&&(th=64),e}function tw(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function tx(e,t,r){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-td(t)]=r}function t_(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-td(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var tE=0;function tS(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var tP,tk,tI,tO,tC,tT=!1,tR=[],tA=null,tN=null,tM=null,tj=new Map,tD=new Map,tL=[],tF="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tU(e,t){switch(e){case"focusin":case"focusout":tA=null;break;case"dragenter":case"dragleave":tN=null;break;case"mouseover":case"mouseout":tM=null;break;case"pointerover":case"pointerout":tj.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tD.delete(t.pointerId)}}function tB(e,t,r,n,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},null!==t&&null!==(t=nG(t))&&tk(t)):(e.eventSystemFlags|=n,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i)),e}function tz(e){var t=nJ(e.target);if(null!==t){var r=e4(t);if(null!==r){if(13===(t=r.tag)){if(null!==(t=e6(r))){e.blockedOn=t,tC(e.priority,function(){tI(r)});return}}else if(3===t&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=3===r.tag?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function t$(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var r=tZ(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==r)return null!==(t=nG(r))&&tk(t),e.blockedOn=r,!1;var n=new(r=e.nativeEvent).constructor(r.type,r);eD=n,r.target.dispatchEvent(n),eD=null,t.shift()}return!0}function tV(e,t,r){t$(e)&&r.delete(t)}function tH(){tT=!1,null!==tA&&t$(tA)&&(tA=null),null!==tN&&t$(tN)&&(tN=null),null!==tM&&t$(tM)&&(tM=null),tj.forEach(tV),tD.forEach(tV)}function tq(e,t){e.blockedOn===t&&(e.blockedOn=null,tT||(tT=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,tH)))}function tW(e){function t(t){return tq(t,e)}if(0<tR.length){tq(tR[0],e);for(var r=1;r<tR.length;r++){var n=tR[r];n.blockedOn===e&&(n.blockedOn=null)}}for(null!==tA&&tq(tA,e),null!==tN&&tq(tN,e),null!==tM&&tq(tM,e),tj.forEach(t),tD.forEach(t),r=0;r<tL.length;r++)(n=tL[r]).blockedOn===e&&(n.blockedOn=null);for(;0<tL.length&&null===(r=tL[0]).blockedOn;)tz(r),null===r.blockedOn&&tL.shift()}var tK=k.ReactCurrentBatchConfig,tJ=!0;function tG(e,t,r,n){var i=tE,o=tK.transition;tK.transition=null;try{tE=1,tQ(e,t,r,n)}finally{tE=i,tK.transition=o}}function tX(e,t,r,n){var i=tE,o=tK.transition;tK.transition=null;try{tE=4,tQ(e,t,r,n)}finally{tE=i,tK.transition=o}}function tQ(e,t,r,n){if(tJ){var i=tZ(e,t,r,n);if(null===i)nw(e,t,n,tY,r),tU(e,n);else if(function(e,t,r,n,i){switch(t){case"focusin":return tA=tB(tA,e,t,r,n,i),!0;case"dragenter":return tN=tB(tN,e,t,r,n,i),!0;case"mouseover":return tM=tB(tM,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return tj.set(o,tB(tj.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,tD.set(o,tB(tD.get(o)||null,e,t,r,n,i)),!0}return!1}(i,e,t,r,n))n.stopPropagation();else if(tU(e,n),4&t&&-1<tF.indexOf(e)){for(;null!==i;){var o=nG(i);if(null!==o&&tP(o),null===(o=tZ(e,t,r,n))&&nw(e,t,n,tY,r),o===i)break;i=o}null!==i&&n.stopPropagation()}else nw(e,t,n,null,r)}}var tY=null;function tZ(e,t,r,n){if(tY=null,null!==(e=nJ(e=eL(n)))){if(null===(t=e4(e)))e=null;else if(13===(r=t.tag)){if(null!==(e=e6(t)))return e;e=null}else if(3===r){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return tY=e,null}function t0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tn()){case ti:return 1;case to:return 4;case ta:case ts:return 16;case tl:return 536870912;default:return 16}default:return 16}}var t1=null,t2=null,t3=null;function t4(){if(t3)return t3;var e,t,r=t2,n=r.length,i="value"in t1?t1.value:t1.textContent,o=i.length;for(e=0;e<n&&r[e]===i[e];e++);var a=n-e;for(t=1;t<=a&&r[n-t]===i[o-t];t++);return t3=i.slice(e,1<t?1-t:void 0)}function t6(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function t5(){return!0}function t8(){return!1}function t7(e){function t(t,r,n,i,o){for(var a in this._reactName=t,this._targetInst=n,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?t5:t8,this.isPropagationStopped=t8,this}return er(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=t5)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=t5)},persist:function(){},isPersistent:t5}),t}var t9,re,rt,rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rn=t7(rr),ri=er({},rr,{view:0,detail:0}),ro=t7(ri),ra=er({},ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ry,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rt&&(rt&&"mousemove"===e.type?(t9=e.screenX-rt.screenX,re=e.screenY-rt.screenY):re=t9=0,rt=e),t9)},movementY:function(e){return"movementY"in e?e.movementY:re}}),rs=t7(ra),rl=t7(er({},ra,{dataTransfer:0})),ru=t7(er({},ri,{relatedTarget:0})),rc=t7(er({},rr,{animationName:0,elapsedTime:0,pseudoElement:0})),rd=t7(er({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),rf=t7(er({},rr,{data:0})),rp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=rm[e])&&!!t[e]}function ry(){return rg}var rv=t7(er({},ri,{key:function(e){if(e.key){var t=rp[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=t6(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?rh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ry,charCode:function(e){return"keypress"===e.type?t6(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?t6(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),rb=t7(er({},ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rw=t7(er({},ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ry})),rx=t7(er({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0})),r_=t7(er({},ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),rE=[9,13,27,32],rS=g&&"CompositionEvent"in window,rP=null;g&&"documentMode"in document&&(rP=document.documentMode);var rk=g&&"TextEvent"in window&&!rP,rI=g&&(!rS||rP&&8<rP&&11>=rP),rO=!1;function rC(e,t){switch(e){case"keyup":return -1!==rE.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rT(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var rR=!1,rA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rN(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!rA[e.type]:"textarea"===t}function rM(e,t,r,n){e$(n),0<(t=n_(t,"onChange")).length&&(r=new rn("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var rj=null,rD=null;function rL(e){nh(e,0)}function rF(e){if(eu(nX(e)))return e}function rU(e,t){if("change"===e)return t}var rB=!1;if(g){if(g){var rz="oninput"in document;if(!rz){var r$=document.createElement("div");r$.setAttribute("oninput","return;"),rz="function"==typeof r$.oninput}r=rz}else r=!1;rB=r&&(!document.documentMode||9<document.documentMode)}function rV(){rj&&(rj.detachEvent("onpropertychange",rH),rD=rj=null)}function rH(e){if("value"===e.propertyName&&rF(rD)){var t=[];rM(t,rD,e,eL(e)),eK(rL,t)}}function rq(e,t,r){"focusin"===e?(rV(),rj=t,rD=r,rj.attachEvent("onpropertychange",rH)):"focusout"===e&&rV()}function rW(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return rF(rD)}function rK(e,t){if("click"===e)return rF(t)}function rJ(e,t){if("input"===e||"change"===e)return rF(t)}var rG="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function rX(e,t){if(rG(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!y.call(t,i)||!rG(e[i],t[i]))return!1}return!0}function rQ(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rY(e,t){var r,n=rQ(e);for(e=0;n;){if(3===n.nodeType){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rQ(n)}}function rZ(){for(var e=window,t=ec();t instanceof e.HTMLIFrameElement;){try{var r="string"==typeof t.contentWindow.location.href}catch(e){r=!1}if(r)e=t.contentWindow;else break;t=ec(e.document)}return t}function r0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var r1=g&&"documentMode"in document&&11>=document.documentMode,r2=null,r3=null,r4=null,r6=!1;function r5(e,t,r){var n=r.window===r?r.document:9===r.nodeType?r:r.ownerDocument;r6||null==r2||r2!==ec(n)||(n="selectionStart"in(n=r2)&&r0(n)?{start:n.selectionStart,end:n.selectionEnd}:{anchorNode:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset},r4&&rX(r4,n)||(r4=n,0<(n=n_(r3,"onSelect")).length&&(t=new rn("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=r2)))}function r8(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var r7={animationend:r8("Animation","AnimationEnd"),animationiteration:r8("Animation","AnimationIteration"),animationstart:r8("Animation","AnimationStart"),transitionend:r8("Transition","TransitionEnd")},r9={},ne={};function nt(e){if(r9[e])return r9[e];if(!r7[e])return e;var t,r=r7[e];for(t in r)if(r.hasOwnProperty(t)&&t in ne)return r9[e]=r[t];return e}g&&(ne=document.createElement("div").style,"AnimationEvent"in window||(delete r7.animationend.animation,delete r7.animationiteration.animation,delete r7.animationstart.animation),"TransitionEvent"in window||delete r7.transitionend.transition);var nr=nt("animationend"),nn=nt("animationiteration"),ni=nt("animationstart"),no=nt("transitionend"),na=new Map,ns="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nl(e,t){na.set(e,t),h(t,[e])}for(var nu=0;nu<ns.length;nu++){var nc=ns[nu];nl(nc.toLowerCase(),"on"+(nc[0].toUpperCase()+nc.slice(1)))}nl(nr,"onAnimationEnd"),nl(nn,"onAnimationIteration"),nl(ni,"onAnimationStart"),nl("dblclick","onDoubleClick"),nl("focusin","onFocus"),nl("focusout","onBlur"),nl(no,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nd="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nf=new Set("cancel close invalid load scroll toggle".split(" ").concat(nd));function np(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,function(e,t,r,n,i,o,a,s,l){if(e3.apply(this,arguments),eY){if(eY){var u=eZ;eY=!1,eZ=null}else throw Error(d(198));e0||(e0=!0,e1=u)}}(n,t,void 0,e),e.currentTarget=null}function nh(e,t){t=0!=(4&t);for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var s=n[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;np(i,s,u),o=l}else for(a=0;a<n.length;a++){if(l=(s=n[a]).instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;np(i,s,u),o=l}}}if(e0)throw e=e1,e0=!1,e1=null,e}function nm(e,t){var r=t[nq];void 0===r&&(r=t[nq]=new Set);var n=e+"__bubble";r.has(n)||(nb(t,e,2,!1),r.add(n))}function ng(e,t,r){var n=0;t&&(n|=4),nb(r,e,n,t)}var ny="_reactListening"+Math.random().toString(36).slice(2);function nv(e){if(!e[ny]){e[ny]=!0,f.forEach(function(t){"selectionchange"!==t&&(nf.has(t)||ng(t,!1,e),ng(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[ny]||(t[ny]=!0,ng("selectionchange",!1,t))}}function nb(e,t,r,n){switch(t0(t)){case 1:var i=tG;break;case 4:i=tX;break;default:i=tQ}r=i.bind(null,t,r,e),i=void 0,eG&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(i=!0),n?void 0!==i?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):void 0!==i?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function nw(e,t,r,n,i){var o=n;if(0==(1&t)&&0==(2&t)&&null!==n)e:for(;;){if(null===n)return;var a=n.tag;if(3===a||4===a){var s=n.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=n.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=nJ(s)))return;if(5===(l=a.tag)||6===l){n=o=a;continue e}s=s.parentNode}}n=n.return}eK(function(){var n=o,i=eL(r),a=[];e:{var s=na.get(e);if(void 0!==s){var l=rn,u=e;switch(e){case"keypress":if(0===t6(r))break e;case"keydown":case"keyup":l=rv;break;case"focusin":u="focus",l=ru;break;case"focusout":u="blur",l=ru;break;case"beforeblur":case"afterblur":l=ru;break;case"click":if(2===r.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=rl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=rw;break;case nr:case nn:case ni:l=rc;break;case no:l=rx;break;case"scroll":l=ro;break;case"wheel":l=r_;break;case"copy":case"cut":case"paste":l=rd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=rb}var c=0!=(4&t),d=!c&&"scroll"===e,f=c?null!==s?s+"Capture":null:s;c=[];for(var p,h=n;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&null!=(m=eJ(h,f))&&c.push(nx(h,m,p))),d)break;h=h.return}0<c.length&&(s=new l(s,u,null,r,i),a.push({event:s,listeners:c}))}}if(0==(7&t)){if(s="mouseover"===e||"pointerover"===e,l="mouseout"===e||"pointerout"===e,!(s&&r!==eD&&(u=r.relatedTarget||r.fromElement)&&(nJ(u)||u[nH]))&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(u=r.relatedTarget||r.toElement,l=n,null!==(u=u?nJ(u):null)&&(d=e4(u),u!==d||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=n),l!==u)){if(c=rs,m="onMouseLeave",f="onMouseEnter",h="mouse",("pointerout"===e||"pointerover"===e)&&(c=rb,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==l?s:nX(l),p=null==u?s:nX(u),(s=new c(m,h+"leave",l,r,i)).target=d,s.relatedTarget=p,m=null,nJ(i)===n&&((c=new c(f,h+"enter",u,r,i)).target=p,c.relatedTarget=d,m=c),d=m,l&&u)t:{for(c=l,f=u,h=0,p=c;p;p=nE(p))h++;for(p=0,m=f;m;m=nE(m))p++;for(;0<h-p;)c=nE(c),h--;for(;0<p-h;)f=nE(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break t;c=nE(c),f=nE(f)}c=null}else c=null;null!==l&&nS(a,s,l,c,!1),null!==u&&null!==d&&nS(a,d,u,c,!0)}e:{if("select"===(l=(s=n?nX(n):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g,y=rU;else if(rN(s)){if(rB)y=rJ;else{y=rW;var v=rq}}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(y=rK);if(y&&(y=y(e,n))){rM(a,y,r,i);break e}v&&v(e,s,n),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&eg(s,"number",s.value)}switch(v=n?nX(n):window,e){case"focusin":(rN(v)||"true"===v.contentEditable)&&(r2=v,r3=n,r4=null);break;case"focusout":r4=r3=r2=null;break;case"mousedown":r6=!0;break;case"contextmenu":case"mouseup":case"dragend":r6=!1,r5(a,r,i);break;case"selectionchange":if(r1)break;case"keydown":case"keyup":r5(a,r,i)}if(rS)t:{switch(e){case"compositionstart":var b="onCompositionStart";break t;case"compositionend":b="onCompositionEnd";break t;case"compositionupdate":b="onCompositionUpdate";break t}b=void 0}else rR?rC(e,r)&&(b="onCompositionEnd"):"keydown"===e&&229===r.keyCode&&(b="onCompositionStart");b&&(rI&&"ko"!==r.locale&&(rR||"onCompositionStart"!==b?"onCompositionEnd"===b&&rR&&(g=t4()):(t2="value"in(t1=i)?t1.value:t1.textContent,rR=!0)),0<(v=n_(n,b)).length&&(b=new rf(b,e,null,r,i),a.push({event:b,listeners:v}),g?b.data=g:null!==(g=rT(r))&&(b.data=g))),(g=rk?function(e,t){switch(e){case"compositionend":return rT(t);case"keypress":if(32!==t.which)return null;return rO=!0," ";case"textInput":return" "===(e=t.data)&&rO?null:e;default:return null}}(e,r):function(e,t){if(rR)return"compositionend"===e||!rS&&rC(e,t)?(e=t4(),t3=t2=t1=null,rR=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rI&&"ko"!==t.locale?null:t.data}}(e,r))&&0<(n=n_(n,"onBeforeInput")).length&&(i=new rf("onBeforeInput","beforeinput",null,r,i),a.push({event:i,listeners:n}),i.data=g)}nh(a,t)})}function nx(e,t,r){return{instance:e,listener:t,currentTarget:r}}function n_(e,t){for(var r=t+"Capture",n=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=eJ(e,r))&&n.unshift(nx(e,o,i)),null!=(o=eJ(e,t))&&n.push(nx(e,o,i))),e=e.return}return n}function nE(e){if(null===e)return null;do e=e.return;while(e&&5!==e.tag)return e||null}function nS(e,t,r,n,i){for(var o=t._reactName,a=[];null!==r&&r!==n;){var s=r,l=s.alternate,u=s.stateNode;if(null!==l&&l===n)break;5===s.tag&&null!==u&&(s=u,i?null!=(l=eJ(r,o))&&a.unshift(nx(r,l,s)):i||null!=(l=eJ(r,o))&&a.push(nx(r,l,s))),r=r.return}0!==a.length&&e.push({event:t,listeners:a})}var nP=/\r\n?/g,nk=/\u0000|\uFFFD/g;function nI(e){return("string"==typeof e?e:""+e).replace(nP,"\n").replace(nk,"")}function nO(e,t,r){if(t=nI(t),nI(e)!==t&&r)throw Error(d(425))}function nC(){}var nT=null,nR=null;function nA(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var nN="function"==typeof setTimeout?setTimeout:void 0,nM="function"==typeof clearTimeout?clearTimeout:void 0,nj="function"==typeof Promise?Promise:void 0,nD="function"==typeof queueMicrotask?queueMicrotask:void 0!==nj?function(e){return nj.resolve(null).then(e).catch(nL)}:nN;function nL(e){setTimeout(function(){throw e})}function nF(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&8===i.nodeType){if("/$"===(r=i.data)){if(0===n){e.removeChild(i),tW(t);return}n--}else"$"!==r&&"$?"!==r&&"$!"!==r||n++}r=i}while(r)tW(t)}function nU(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function nB(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var r=e.data;if("$"===r||"$!"===r||"$?"===r){if(0===t)return e;t--}else"/$"===r&&t++}e=e.previousSibling}return null}var nz=Math.random().toString(36).slice(2),n$="__reactFiber$"+nz,nV="__reactProps$"+nz,nH="__reactContainer$"+nz,nq="__reactEvents$"+nz,nW="__reactListeners$"+nz,nK="__reactHandles$"+nz;function nJ(e){var t=e[n$];if(t)return t;for(var r=e.parentNode;r;){if(t=r[nH]||r[n$]){if(r=t.alternate,null!==t.child||null!==r&&null!==r.child)for(e=nB(e);null!==e;){if(r=e[n$])return r;e=nB(e)}return t}r=(e=r).parentNode}return null}function nG(e){return(e=e[n$]||e[nH])&&(5===e.tag||6===e.tag||13===e.tag||3===e.tag)?e:null}function nX(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(d(33))}function nQ(e){return e[nV]||null}var nY=[],nZ=-1;function n0(e){return{current:e}}function n1(e){0>nZ||(e.current=nY[nZ],nY[nZ]=null,nZ--)}function n2(e,t){nY[++nZ]=e.current,e.current=t}var n3={},n4=n0(n3),n6=n0(!1),n5=n3;function n8(e,t){var r=e.type.contextTypes;if(!r)return n3;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in r)o[i]=t[i];return n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function n7(e){return null!=(e=e.childContextTypes)}function n9(){n1(n6),n1(n4)}function ie(e,t,r){if(n4.current!==n3)throw Error(d(168));n2(n4,t),n2(n6,r)}function it(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,"function"!=typeof n.getChildContext)return r;for(var i in n=n.getChildContext())if(!(i in t))throw Error(d(108,function(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function e(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case C:return"Fragment";case O:return"Portal";case R:return"Profiler";case T:return"StrictMode";case j:return"Suspense";case D:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case N:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case M:var r=t.render;return(t=t.displayName)||(t=""!==(t=r.displayName||r.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case L:return null!==(r=t.displayName||null)?r:e(t.type)||"Memo";case F:r=t._payload,t=t._init;try{return e(t(r))}catch(e){}}return null}(t);case 8:return t===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}(e)||"Unknown",i));return er({},r,n)}function ir(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||n3,n5=n4.current,n2(n4,e),n2(n6,n6.current),!0}function ii(e,t,r){var n=e.stateNode;if(!n)throw Error(d(169));r?(e=it(e,t,n5),n.__reactInternalMemoizedMergedChildContext=e,n1(n6),n1(n4),n2(n4,e)):n1(n6),n2(n6,r)}var io=null,ia=!1,is=!1;function il(e){null===io?io=[e]:io.push(e)}function iu(){if(!is&&null!==io){is=!0;var e=0,t=tE;try{var r=io;for(tE=1;e<r.length;e++){var n=r[e];do n=n(!0);while(null!==n)}io=null,ia=!1}catch(t){throw null!==io&&(io=io.slice(e+1)),e7(ti,iu),t}finally{tE=t,is=!1}}return null}var ic=[],id=0,ip=null,ih=0,im=[],ig=0,iy=null,iv=1,ib="";function iw(e,t){ic[id++]=ih,ic[id++]=ip,ip=e,ih=t}function ix(e,t,r){im[ig++]=iv,im[ig++]=ib,im[ig++]=iy,iy=e;var n=iv;e=ib;var i=32-td(n)-1;n&=~(1<<i),r+=1;var o=32-td(t)+i;if(30<o){var a=i-i%5;o=(n&(1<<a)-1).toString(32),n>>=a,i-=a,iv=1<<32-td(t)+i|r<<i|n,ib=o+e}else iv=1<<o|r<<i|n,ib=e}function i_(e){null!==e.return&&(iw(e,1),ix(e,1,0))}function iE(e){for(;e===ip;)ip=ic[--id],ic[id]=null,ih=ic[--id],ic[id]=null;for(;e===iy;)iy=im[--ig],im[ig]=null,ib=im[--ig],im[ig]=null,iv=im[--ig],im[ig]=null}var iS=null,iP=null,ik=!1,iI=null;function iO(e,t){var r=s7(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,null===(t=e.deletions)?(e.deletions=[r],e.flags|=16):t.push(r)}function iC(e,t){switch(e.tag){case 5:var r=e.type;return null!==(t=1!==t.nodeType||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,iS=e,iP=nU(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,iS=e,iP=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(r=null!==iy?{id:iv,overflow:ib}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},(r=s7(18,null,null,0)).stateNode=t,r.return=e,e.child=r,iS=e,iP=null,!0);default:return!1}}function iT(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function iR(e){if(ik){var t=iP;if(t){var r=t;if(!iC(e,t)){if(iT(e))throw Error(d(418));t=nU(r.nextSibling);var n=iS;t&&iC(e,t)?iO(n,r):(e.flags=-4097&e.flags|2,ik=!1,iS=e)}}else{if(iT(e))throw Error(d(418));e.flags=-4097&e.flags|2,ik=!1,iS=e}}}function iA(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;iS=e}function iN(e){if(e!==iS)return!1;if(!ik)return iA(e),ik=!0,!1;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!nA(e.type,e.memoizedProps)),t&&(t=iP)){if(iT(e))throw iM(),Error(d(418));for(;t;)iO(e,t),t=nU(t.nextSibling)}if(iA(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(d(317));e:{for(t=0,e=e.nextSibling;e;){if(8===e.nodeType){var t,r=e.data;if("/$"===r){if(0===t){iP=nU(e.nextSibling);break e}t--}else"$"!==r&&"$!"!==r&&"$?"!==r||t++}e=e.nextSibling}iP=null}}else iP=iS?nU(e.stateNode.nextSibling):null;return!0}function iM(){for(var e=iP;e;)e=nU(e.nextSibling)}function ij(){iP=iS=null,ik=!1}function iD(e){null===iI?iI=[e]:iI.push(e)}var iL=k.ReactCurrentBatchConfig;function iF(e,t){if(e&&e.defaultProps)for(var r in t=er({},t),e=e.defaultProps)void 0===t[r]&&(t[r]=e[r]);return t}var iU=n0(null),iB=null,iz=null,i$=null;function iV(){i$=iz=iB=null}function iH(e){var t=iU.current;n1(iU),e._currentValue=t}function iq(e,t,r){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==n&&(n.childLanes|=t)):null!==n&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function iW(e,t){iB=e,i$=iz=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(ax=!0),e.firstContext=null)}function iK(e){var t=e._currentValue;if(i$!==e){if(e={context:e,memoizedValue:t,next:null},null===iz){if(null===iB)throw Error(d(308));iz=e,iB.dependencies={lanes:0,firstContext:e}}else iz=iz.next=e}return t}var iJ=null;function iG(e){null===iJ?iJ=[e]:iJ.push(e)}function iX(e,t,r,n){var i=t.interleaved;return null===i?(r.next=r,iG(t)):(r.next=i.next,i.next=r),t.interleaved=r,iQ(e,n)}function iQ(e,t){e.lanes|=t;var r=e.alternate;for(null!==r&&(r.lanes|=t),r=e,e=e.return;null!==e;)e.childLanes|=t,null!==(r=e.alternate)&&(r.childLanes|=t),r=e,e=e.return;return 3===r.tag?r.stateNode:null}var iY=!1;function iZ(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function i0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function i1(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function i2(e,t,r){var n=e.updateQueue;if(null===n)return null;if(n=n.shared,0!=(2&sl)){var i=n.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),n.pending=t,iQ(e,r)}return null===(i=n.interleaved)?(t.next=t,iG(n)):(t.next=i.next,i.next=t),n.interleaved=t,iQ(e,r)}function i3(e,t,r){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&r))){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,t_(e,r)}}function i4(e,t){var r=e.updateQueue,n=e.alternate;if(null!==n&&r===(n=n.updateQueue)){var i=null,o=null;if(null!==(r=r.firstBaseUpdate)){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};null===o?i=o=a:o=o.next=a,r=r.next}while(null!==r)null===o?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}null===(e=r.lastBaseUpdate)?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function i6(e,t,r,n){var i=e.updateQueue;iY=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,u=l.next;l.next=null,null===a?o=u:a.next=u,a=l;var c=e.alternate;null!==c&&(s=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l)}if(null!==o){var d=i.baseState;for(a=0,c=u=l=null,s=o;;){var f=s.lane,p=s.eventTime;if((n&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var h=e,m=s;switch(f=t,p=r,m.tag){case 1:if("function"==typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null==(f="function"==typeof(h=m.payload)?h.call(p,d,f):h))break e;d=er({},d,f);break e;case 2:iY=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=i.effects)?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=p,l=d):c=c.next=p,a|=f;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(f=s).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}if(null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do a|=i.lane,i=i.next;while(i!==t)}else null===o&&(i.shared.lanes=0);sg|=a,e.lanes=a,e.memoizedState=d}}function i5(e,t,r){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(null!==i){if(n.callback=null,n=r,"function"!=typeof i)throw Error(d(191,i));i.call(n)}}}var i8=(new l.Component).refs;function i7(e,t,r,n){r=null==(r=r(n,t=e.memoizedState))?t:er({},t,r),e.memoizedState=r,0===e.lanes&&(e.updateQueue.baseState=r)}var i9={isMounted:function(e){return!!(e=e._reactInternals)&&e4(e)===e},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=sM(),i=sj(e),o=i1(n,i);o.payload=t,null!=r&&(o.callback=r),null!==(t=i2(e,o,i))&&(sD(t,e,i,n),i3(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=sM(),i=sj(e),o=i1(n,i);o.tag=1,o.payload=t,null!=r&&(o.callback=r),null!==(t=i2(e,o,i))&&(sD(t,e,i,n),i3(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=sM(),n=sj(e),i=i1(r,n);i.tag=2,null!=t&&(i.callback=t),null!==(t=i2(e,i,n))&&(sD(t,e,n,r),i3(t,e,n))}};function oe(e,t,r,n,i,o,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(n,o,a):!t.prototype||!t.prototype.isPureReactComponent||!rX(r,n)||!rX(i,o)}function ot(e,t,r){var n=!1,i=n3,o=t.contextType;return"object"==typeof o&&null!==o?o=iK(o):(i=n7(t)?n5:n4.current,o=(n=null!=(n=t.contextTypes))?n8(e,i):n3),t=new t(r,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=i9,e.stateNode=t,t._reactInternals=e,n&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function or(e,t,r,n){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(r,n),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&i9.enqueueReplaceState(t,t.state,null)}function on(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs=i8,iZ(e);var o=t.contextType;"object"==typeof o&&null!==o?i.context=iK(o):(o=n7(t)?n5:n4.current,i.context=n8(e,o)),i.state=e.memoizedState,"function"==typeof(o=t.getDerivedStateFromProps)&&(i7(e,t,o,r),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&i9.enqueueReplaceState(i,i.state,null),i6(e,r,i,n),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function oi(e,t,r){if(null!==(e=r.ref)&&"function"!=typeof e&&"object"!=typeof e){if(r._owner){if(r=r._owner){if(1!==r.tag)throw Error(d(309));var n=r.stateNode}if(!n)throw Error(d(147,e));var i=n,o=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===o?t.ref:((t=function(e){var t=i.refs;t===i8&&(t=i.refs={}),null===e?delete t[o]:t[o]=e})._stringRef=o,t)}if("string"!=typeof e)throw Error(d(284));if(!r._owner)throw Error(d(290,e))}return e}function oo(e,t){throw Error(d(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function oa(e){return(0,e._init)(e._payload)}function os(e){function t(t,r){if(e){var n=t.deletions;null===n?(t.deletions=[r],t.flags|=16):n.push(r)}}function r(r,n){if(!e)return null;for(;null!==n;)t(r,n),n=n.sibling;return null}function n(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=le(e,t)).index=0,e.sibling=null,e}function o(t,r,n){return(t.index=n,e)?null!==(n=t.alternate)?(n=n.index)<r?(t.flags|=2,r):n:(t.flags|=2,r):(t.flags|=1048576,r)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,r,n){return null===t||6!==t.tag?(t=li(r,e.mode,n)).return=e:(t=i(t,r)).return=e,t}function l(e,t,r,n){var o=r.type;return o===C?c(e,t,r.props.children,n,r.key):(null!==t&&(t.elementType===o||"object"==typeof o&&null!==o&&o.$$typeof===F&&oa(o)===t.type)?(n=i(t,r.props)).ref=oi(e,t,r):(n=lt(r.type,r.key,r.props,null,e.mode,n)).ref=oi(e,t,r),n.return=e,n)}function u(e,t,r,n){return null===t||4!==t.tag||t.stateNode.containerInfo!==r.containerInfo||t.stateNode.implementation!==r.implementation?(t=lo(r,e.mode,n)).return=e:(t=i(t,r.children||[])).return=e,t}function c(e,t,r,n,o){return null===t||7!==t.tag?(t=lr(r,e.mode,n,o)).return=e:(t=i(t,r)).return=e,t}function f(e,t,r){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=li(""+t,e.mode,r)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case I:return(r=lt(t.type,t.key,t.props,null,e.mode,r)).ref=oi(e,null,t),r.return=e,r;case O:return(t=lo(t,e.mode,r)).return=e,t;case F:return f(e,(0,t._init)(t._payload),r)}if(ey(t)||$(t))return(t=lr(t,e.mode,r,null)).return=e,t;oo(e,t)}return null}function p(e,t,r,n){var i=null!==t?t.key:null;if("string"==typeof r&&""!==r||"number"==typeof r)return null!==i?null:s(e,t,""+r,n);if("object"==typeof r&&null!==r){switch(r.$$typeof){case I:return r.key===i?l(e,t,r,n):null;case O:return r.key===i?u(e,t,r,n):null;case F:return p(e,t,(i=r._init)(r._payload),n)}if(ey(r)||$(r))return null!==i?null:c(e,t,r,n,null);oo(e,r)}return null}function h(e,t,r,n,i){if("string"==typeof n&&""!==n||"number"==typeof n)return s(t,e=e.get(r)||null,""+n,i);if("object"==typeof n&&null!==n){switch(n.$$typeof){case I:return l(t,e=e.get(null===n.key?r:n.key)||null,n,i);case O:return u(t,e=e.get(null===n.key?r:n.key)||null,n,i);case F:return h(e,t,r,(0,n._init)(n._payload),i)}if(ey(n)||$(n))return c(t,e=e.get(r)||null,n,i,null);oo(t,n)}return null}return function s(l,u,c,m){if("object"==typeof c&&null!==c&&c.type===C&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case I:e:{for(var g=c.key,y=u;null!==y;){if(y.key===g){if((g=c.type)===C){if(7===y.tag){r(l,y.sibling),(u=i(y,c.props.children)).return=l,l=u;break e}}else if(y.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===F&&oa(g)===y.type){r(l,y.sibling),(u=i(y,c.props)).ref=oi(l,y,c),u.return=l,l=u;break e}r(l,y);break}t(l,y),y=y.sibling}c.type===C?((u=lr(c.props.children,l.mode,m,c.key)).return=l,l=u):((m=lt(c.type,c.key,c.props,null,l.mode,m)).ref=oi(l,u,c),m.return=l,l=m)}return a(l);case O:e:{for(y=c.key;null!==u;){if(u.key===y){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){r(l,u.sibling),(u=i(u,c.children||[])).return=l,l=u;break e}r(l,u);break}t(l,u),u=u.sibling}(u=lo(c,l.mode,m)).return=l,l=u}return a(l);case F:return s(l,u,(y=c._init)(c._payload),m)}if(ey(c))return function(i,a,s,l){for(var u=null,c=null,d=a,m=a=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var y=p(i,d,s[m],l);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(i,d),a=o(y,a,m),null===c?u=y:c.sibling=y,c=y,d=g}if(m===s.length)return r(i,d),ik&&iw(i,m),u;if(null===d){for(;m<s.length;m++)null!==(d=f(i,s[m],l))&&(a=o(d,a,m),null===c?u=d:c.sibling=d,c=d);return ik&&iw(i,m),u}for(d=n(i,d);m<s.length;m++)null!==(g=h(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=o(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(i,e)}),ik&&iw(i,m),u}(l,u,c,m);if($(c))return function(i,a,s,l){var u=$(s);if("function"!=typeof u)throw Error(d(150));if(null==(s=u.call(s)))throw Error(d(151));for(var c=u=null,m=a,g=a=0,y=null,v=s.next();null!==m&&!v.done;g++,v=s.next()){m.index>g?(y=m,m=null):y=m.sibling;var b=p(i,m,v.value,l);if(null===b){null===m&&(m=y);break}e&&m&&null===b.alternate&&t(i,m),a=o(b,a,g),null===c?u=b:c.sibling=b,c=b,m=y}if(v.done)return r(i,m),ik&&iw(i,g),u;if(null===m){for(;!v.done;g++,v=s.next())null!==(v=f(i,v.value,l))&&(a=o(v,a,g),null===c?u=v:c.sibling=v,c=v);return ik&&iw(i,g),u}for(m=n(i,m);!v.done;g++,v=s.next())null!==(v=h(m,i,g,v.value,l))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),a=o(v,a,g),null===c?u=v:c.sibling=v,c=v);return e&&m.forEach(function(e){return t(i,e)}),ik&&iw(i,g),u}(l,u,c,m);oo(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(r(l,u.sibling),(u=i(u,c)).return=l):(r(l,u),(u=li(c,l.mode,m)).return=l),a(l=u)):r(l,u)}}var ol=os(!0),ou=os(!1),oc={},od=n0(oc),of=n0(oc),op=n0(oc);function oh(e){if(e===oc)throw Error(d(174));return e}function om(e,t){switch(n2(op,t),n2(of,e),n2(od,oc),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eS(null,"");break;default:t=eS(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}n1(od),n2(od,t)}function og(){n1(od),n1(of),n1(op)}function oy(e){oh(op.current);var t=oh(od.current),r=eS(t,e.type);t!==r&&(n2(of,e),n2(od,r))}function ov(e){of.current===e&&(n1(od),n1(of))}var ob=n0(0);function ow(e){for(var t=e;null!==t;){if(13===t.tag){var r=t.memoizedState;if(null!==r&&(null===(r=r.dehydrated)||"$?"===r.data||"$!"===r.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ox=[];function o_(){for(var e=0;e<ox.length;e++)ox[e]._workInProgressVersionPrimary=null;ox.length=0}var oE=k.ReactCurrentDispatcher,oS=k.ReactCurrentBatchConfig,oP=0,ok=null,oI=null,oO=null,oC=!1,oT=!1,oR=0,oA=0;function oN(){throw Error(d(321))}function oM(e,t){if(null===t)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!rG(e[r],t[r]))return!1;return!0}function oj(e,t,r,n,i,o){if(oP=o,ok=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oE.current=null===e||null===e.memoizedState?al:au,e=r(n,i),oT){o=0;do{if(oT=!1,oR=0,25<=o)throw Error(d(301));o+=1,oO=oI=null,t.updateQueue=null,oE.current=ac,e=r(n,i)}while(oT)}if(oE.current=as,t=null!==oI&&null!==oI.next,oP=0,oO=oI=ok=null,oC=!1,t)throw Error(d(300));return e}function oD(){var e=0!==oR;return oR=0,e}function oL(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===oO?ok.memoizedState=oO=e:oO=oO.next=e,oO}function oF(){if(null===oI){var e=ok.alternate;e=null!==e?e.memoizedState:null}else e=oI.next;var t=null===oO?ok.memoizedState:oO.next;if(null!==t)oO=t,oI=e;else{if(null===e)throw Error(d(310));e={memoizedState:(oI=e).memoizedState,baseState:oI.baseState,baseQueue:oI.baseQueue,queue:oI.queue,next:null},null===oO?ok.memoizedState=oO=e:oO=oO.next=e}return oO}function oU(e,t){return"function"==typeof t?t(e):t}function oB(e){var t=oF(),r=t.queue;if(null===r)throw Error(d(311));r.lastRenderedReducer=e;var n=oI,i=n.baseQueue,o=r.pending;if(null!==o){if(null!==i){var a=i.next;i.next=o.next,o.next=a}n.baseQueue=i=o,r.pending=null}if(null!==i){o=i.next,n=n.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((oP&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(s=l=f,a=n):l=l.next=f,ok.lanes|=c,sg|=c}u=u.next}while(null!==u&&u!==o)null===l?a=n:l.next=s,rG(n,t.memoizedState)||(ax=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=l,r.lastRenderedState=n}if(null!==(e=r.interleaved)){i=e;do o=i.lane,ok.lanes|=o,sg|=o,i=i.next;while(i!==e)}else null===i&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function oz(e){var t=oF(),r=t.queue;if(null===r)throw Error(d(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(null!==i){r.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i)rG(o,t.memoizedState)||(ax=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function o$(){}function oV(e,t){var r=ok,n=oF(),i=t(),o=!rG(n.memoizedState,i);if(o&&(n.memoizedState=i,ax=!0),n=n.queue,o1(oW.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||null!==oO&&1&oO.memoizedState.tag){if(r.flags|=2048,oX(9,oq.bind(null,r,n,i,t),void 0,null),null===su)throw Error(d(349));0!=(30&oP)||oH(r,t,i)}return i}function oH(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},null===(t=ok.updateQueue)?(t={lastEffect:null,stores:null},ok.updateQueue=t,t.stores=[e]):null===(r=t.stores)?t.stores=[e]:r.push(e)}function oq(e,t,r,n){t.value=r,t.getSnapshot=n,oK(t)&&oJ(e)}function oW(e,t,r){return r(function(){oK(t)&&oJ(e)})}function oK(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!rG(e,r)}catch(e){return!0}}function oJ(e){var t=iQ(e,1);null!==t&&sD(t,e,1,-1)}function oG(e){var t=oL();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oU,lastRenderedState:e},t.queue=e,e=e.dispatch=an.bind(null,ok,e),[t.memoizedState,e]}function oX(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},null===(t=ok.updateQueue)?(t={lastEffect:null,stores:null},ok.updateQueue=t,t.lastEffect=e.next=e):null===(r=t.lastEffect)?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e),e}function oQ(){return oF().memoizedState}function oY(e,t,r,n){var i=oL();ok.flags|=e,i.memoizedState=oX(1|t,r,void 0,void 0===n?null:n)}function oZ(e,t,r,n){var i=oF();n=void 0===n?null:n;var o=void 0;if(null!==oI){var a=oI.memoizedState;if(o=a.destroy,null!==n&&oM(n,a.deps)){i.memoizedState=oX(t,r,o,n);return}}ok.flags|=e,i.memoizedState=oX(1|t,r,o,n)}function o0(e,t){return oY(8390656,8,e,t)}function o1(e,t){return oZ(2048,8,e,t)}function o2(e,t){return oZ(4,2,e,t)}function o3(e,t){return oZ(4,4,e,t)}function o4(e,t){return"function"==typeof t?(t(e=e()),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function o6(e,t,r){return r=null!=r?r.concat([e]):null,oZ(4,4,o4.bind(null,t,e),r)}function o5(){}function o8(e,t){var r=oF();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&oM(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function o7(e,t){var r=oF();t=void 0===t?null:t;var n=r.memoizedState;return null!==n&&null!==t&&oM(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function o9(e,t,r){return 0==(21&oP)?(e.baseState&&(e.baseState=!1,ax=!0),e.memoizedState=r):(rG(r,t)||(r=tb(),ok.lanes|=r,sg|=r,e.baseState=!0),t)}function ae(e,t){var r=tE;tE=0!==r&&4>r?r:4,e(!0);var n=oS.transition;oS.transition={};try{e(!1),t()}finally{tE=r,oS.transition=n}}function at(){return oF().memoizedState}function ar(e,t,r){var n=sj(e);r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},ai(e)?ao(t,r):null!==(r=iX(e,t,r,n))&&(sD(r,e,n,sM()),aa(r,t,n))}function an(e,t,r){var n=sj(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(ai(e))ao(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,r);if(i.hasEagerState=!0,i.eagerState=s,rG(s,a)){var l=t.interleaved;null===l?(i.next=i,iG(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch(e){}finally{}null!==(r=iX(e,t,i,n))&&(sD(r,e,n,i=sM()),aa(r,t,n))}}function ai(e){var t=e.alternate;return e===ok||null!==t&&t===ok}function ao(e,t){oT=oC=!0;var r=e.pending;null===r?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function aa(e,t,r){if(0!=(4194240&r)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,t_(e,r)}}var as={readContext:iK,useCallback:oN,useContext:oN,useEffect:oN,useImperativeHandle:oN,useInsertionEffect:oN,useLayoutEffect:oN,useMemo:oN,useReducer:oN,useRef:oN,useState:oN,useDebugValue:oN,useDeferredValue:oN,useTransition:oN,useMutableSource:oN,useSyncExternalStore:oN,useId:oN,unstable_isNewReconciler:!1},al={readContext:iK,useCallback:function(e,t){return oL().memoizedState=[e,void 0===t?null:t],e},useContext:iK,useEffect:o0,useImperativeHandle:function(e,t,r){return r=null!=r?r.concat([e]):null,oY(4194308,4,o4.bind(null,t,e),r)},useLayoutEffect:function(e,t){return oY(4194308,4,e,t)},useInsertionEffect:function(e,t){return oY(4,2,e,t)},useMemo:function(e,t){var r=oL();return t=void 0===t?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=oL();return t=void 0!==r?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=ar.bind(null,ok,e),[n.memoizedState,e]},useRef:function(e){return e={current:e},oL().memoizedState=e},useState:oG,useDebugValue:o5,useDeferredValue:function(e){return oL().memoizedState=e},useTransition:function(){var e=oG(!1),t=e[0];return e=ae.bind(null,e[1]),oL().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ok,i=oL();if(ik){if(void 0===r)throw Error(d(407));r=r()}else{if(r=t(),null===su)throw Error(d(349));0!=(30&oP)||oH(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,o0(oW.bind(null,n,o,e),[e]),n.flags|=2048,oX(9,oq.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=oL(),t=su.identifierPrefix;if(ik){var r=ib,n=iv;t=":"+t+"R"+(r=(n&~(1<<32-td(n)-1)).toString(32)+r),0<(r=oR++)&&(t+="H"+r.toString(32)),t+=":"}else t=":"+t+"r"+(r=oA++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},au={readContext:iK,useCallback:o8,useContext:iK,useEffect:o1,useImperativeHandle:o6,useInsertionEffect:o2,useLayoutEffect:o3,useMemo:o7,useReducer:oB,useRef:oQ,useState:function(){return oB(oU)},useDebugValue:o5,useDeferredValue:function(e){return o9(oF(),oI.memoizedState,e)},useTransition:function(){return[oB(oU)[0],oF().memoizedState]},useMutableSource:o$,useSyncExternalStore:oV,useId:at,unstable_isNewReconciler:!1},ac={readContext:iK,useCallback:o8,useContext:iK,useEffect:o1,useImperativeHandle:o6,useInsertionEffect:o2,useLayoutEffect:o3,useMemo:o7,useReducer:oz,useRef:oQ,useState:function(){return oz(oU)},useDebugValue:o5,useDeferredValue:function(e){var t=oF();return null===oI?t.memoizedState=e:o9(t,oI.memoizedState,e)},useTransition:function(){return[oz(oU)[0],oF().memoizedState]},useMutableSource:o$,useSyncExternalStore:oV,useId:at,unstable_isNewReconciler:!1};function ad(e,t){try{var r="",n=t;do r+=function(e){switch(e.tag){case 5:return en(e.type);case 16:return en("Lazy");case 13:return en("Suspense");case 19:return en("SuspenseList");case 0:case 2:case 15:return e=eo(e.type,!1);case 11:return e=eo(e.type.render,!1);case 1:return e=eo(e.type,!0);default:return""}}(n),n=n.return;while(n)var i=r}catch(e){i="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:i,digest:null}}function af(e,t,r){return{value:e,source:null,stack:null!=r?r:null,digest:null!=t?t:null}}function ap(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var ah="function"==typeof WeakMap?WeakMap:Map;function am(e,t,r){(r=i1(-1,r)).tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){sS||(sS=!0,sP=n),ap(e,t)},r}function ag(e,t,r){(r=i1(-1,r)).tag=3;var n=e.type.getDerivedStateFromError;if("function"==typeof n){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){ap(e,t)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(r.callback=function(){ap(e,t),"function"!=typeof n&&(null===sk?sk=new Set([this]):sk.add(this));var r=t.stack;this.componentDidCatch(t.value,{componentStack:null!==r?r:""})}),r}function ay(e,t,r){var n=e.pingCache;if(null===n){n=e.pingCache=new ah;var i=new Set;n.set(t,i)}else void 0===(i=n.get(t))&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=s3.bind(null,e,t,r),t.then(e,e))}function av(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e)return null}function ab(e,t,r,n,i){return 0==(1&e.mode)?e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,1===r.tag&&(null===r.alternate?r.tag=17:((t=i1(-1,1)).tag=2,i2(r,t,1))),r.lanes|=1):(e.flags|=65536,e.lanes=i),e}var aw=k.ReactCurrentOwner,ax=!1;function a_(e,t,r,n){t.child=null===e?ou(t,null,r,n):ol(t,e.child,r,n)}function aE(e,t,r,n,i){r=r.render;var o=t.ref;return(iW(t,i),n=oj(e,t,r,n,o,i),r=oD(),null===e||ax)?(ik&&r&&i_(t),t.flags|=1,a_(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,a$(e,t,i))}function aS(e,t,r,n,i){if(null===e){var o=r.type;return"function"!=typeof o||s9(o)||void 0!==o.defaultProps||null!==r.compare||void 0!==r.defaultProps?((e=lt(r.type,null,n,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,aP(e,t,o,n,i))}if(o=e.child,0==(e.lanes&i)){var a=o.memoizedProps;if((r=null!==(r=r.compare)?r:rX)(a,n)&&e.ref===t.ref)return a$(e,t,i)}return t.flags|=1,(e=le(o,n)).ref=t.ref,e.return=t,t.child=e}function aP(e,t,r,n,i){if(null!==e){var o=e.memoizedProps;if(rX(o,n)&&e.ref===t.ref){if(ax=!1,t.pendingProps=n=o,0==(e.lanes&i))return t.lanes=e.lanes,a$(e,t,i);0!=(131072&e.flags)&&(ax=!0)}}return aO(e,t,r,n,i)}function ak(e,t,r){var n=t.pendingProps,i=n.children,o=null!==e?e.memoizedState:null;if("hidden"===n.mode){if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n2(sp,sf),sf|=r;else{if(0==(1073741824&r))return e=null!==o?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,n2(sp,sf),sf|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=null!==o?o.baseLanes:r,n2(sp,sf),sf|=n}}else null!==o?(n=o.baseLanes|r,t.memoizedState=null):n=r,n2(sp,sf),sf|=n;return a_(e,t,i,r),t.child}function aI(e,t){var r=t.ref;(null===e&&null!==r||null!==e&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function aO(e,t,r,n,i){var o=n7(r)?n5:n4.current;return(o=n8(t,o),iW(t,i),r=oj(e,t,r,n,o,i),n=oD(),null===e||ax)?(ik&&n&&i_(t),t.flags|=1,a_(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,a$(e,t,i))}function aC(e,t,r,n,i){if(n7(r)){var o=!0;ir(t)}else o=!1;if(iW(t,i),null===t.stateNode)az(e,t),ot(t,r,n),on(t,r,n,i),n=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=r.contextType;u="object"==typeof u&&null!==u?iK(u):n8(t,u=n7(r)?n5:n4.current);var c=r.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;d||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==n||l!==u)&&or(t,a,n,u),iY=!1;var f=t.memoizedState;a.state=f,i6(t,n,a,i),l=t.memoizedState,s!==n||f!==l||n6.current||iY?("function"==typeof c&&(i7(t,r,c,n),l=t.memoizedState),(s=iY||oe(t,r,s,n,f,l,u))?(d||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),a.props=n,a.state=l,a.context=u,n=s):("function"==typeof a.componentDidMount&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,i0(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:iF(t.type,s),a.props=u,d=t.pendingProps,f=a.context,l="object"==typeof(l=r.contextType)&&null!==l?iK(l):n8(t,l=n7(r)?n5:n4.current);var p=r.getDerivedStateFromProps;(c="function"==typeof p||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(s!==d||f!==l)&&or(t,a,n,l),iY=!1,f=t.memoizedState,a.state=f,i6(t,n,a,i);var h=t.memoizedState;s!==d||f!==h||n6.current||iY?("function"==typeof p&&(i7(t,r,p,n),h=t.memoizedState),(u=iY||oe(t,r,u,n,f,h,l)||!1)?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(n,h,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(n,h,l)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=h),a.props=n,a.state=h,a.context=l,n=u):("function"!=typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),n=!1)}return aT(e,t,r,n,o,i)}function aT(e,t,r,n,i,o){aI(e,t);var a=0!=(128&t.flags);if(!n&&!a)return i&&ii(t,r,!1),a$(e,t,o);n=t.stateNode,aw.current=t;var s=a&&"function"!=typeof r.getDerivedStateFromError?null:n.render();return t.flags|=1,null!==e&&a?(t.child=ol(t,e.child,null,o),t.child=ol(t,null,s,o)):a_(e,t,s,o),t.memoizedState=n.state,i&&ii(t,r,!0),t.child}function aR(e){var t=e.stateNode;t.pendingContext?ie(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ie(e,t.context,!1),om(e,t.containerInfo)}function aA(e,t,r,n,i){return ij(),iD(i),t.flags|=256,a_(e,t,r,n),t.child}var aN={dehydrated:null,treeContext:null,retryLane:0};function aM(e){return{baseLanes:e,cachePool:null,transitions:null}}function aj(e,t,r){var n,i=t.pendingProps,o=ob.current,a=!1,s=0!=(128&t.flags);if((n=s)||(n=(null===e||null!==e.memoizedState)&&0!=(2&o)),n?(a=!0,t.flags&=-129):(null===e||null!==e.memoizedState)&&(o|=1),n2(ob,1&o),null===e)return(iR(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated))?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=i.children,e=i.fallback,a?(i=t.mode,a=t.child,s={mode:"hidden",children:s},0==(1&i)&&null!==a?(a.childLanes=0,a.pendingProps=s):a=ln(s,i,0,null),e=lr(e,i,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=aM(r),t.memoizedState=aN,e):aD(t,s));if(null!==(o=e.memoizedState)&&null!==(n=o.dehydrated))return function(e,t,r,n,i,o,a){if(r)return 256&t.flags?(t.flags&=-257,aL(e,t,a,n=af(Error(d(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=ln({mode:"visible",children:n.children},i,0,null),o=lr(o,i,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,0!=(1&t.mode)&&ol(t,e.child,null,a),t.child.memoizedState=aM(a),t.memoizedState=aN,o);if(0==(1&t.mode))return aL(e,t,a,null);if("$!"===i.data){if(n=i.nextSibling&&i.nextSibling.dataset)var s=n.dgst;return n=s,aL(e,t,a,n=af(o=Error(d(419)),n,void 0))}if(s=0!=(a&e.childLanes),ax||s){if(null!==(n=su)){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!=(i&(n.suspendedLanes|a))?0:i)&&i!==o.retryLane&&(o.retryLane=i,iQ(e,i),sD(n,e,i,-1))}return sG(),aL(e,t,a,n=af(Error(d(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=s6.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,iP=nU(i.nextSibling),iS=t,ik=!0,iI=null,null!==e&&(im[ig++]=iv,im[ig++]=ib,im[ig++]=iy,iv=e.id,ib=e.overflow,iy=t),t=aD(t,n.children),t.flags|=4096,t)}(e,t,s,i,n,o,r);if(a){a=i.fallback,s=t.mode,n=(o=e.child).sibling;var l={mode:"hidden",children:i.children};return 0==(1&s)&&t.child!==o?((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null):(i=le(o,l)).subtreeFlags=14680064&o.subtreeFlags,null!==n?a=le(n,a):(a=lr(a,s,r,null),a.flags|=2),a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,s=null===(s=e.child.memoizedState)?aM(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~r,t.memoizedState=aN,i}return e=(a=e.child).sibling,i=le(a,{mode:"visible",children:i.children}),0==(1&t.mode)&&(i.lanes=r),i.return=t,i.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function aD(e,t){return(t=ln({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function aL(e,t,r,n){return null!==n&&iD(n),ol(t,e.child,null,r),e=aD(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function aF(e,t,r){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),iq(e.return,t,r)}function aU(e,t,r,n,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function aB(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(a_(e,t,n.children,r),0!=(2&(n=ob.current)))n=1&n|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&aF(e,r,t);else if(19===e.tag)aF(e,r,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(n2(ob,n),0==(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(i=null,r=t.child;null!==r;)null!==(e=r.alternate)&&null===ow(e)&&(i=r),r=r.sibling;null===(r=i)?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),aU(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ow(e)){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}aU(t,!0,r,null,o);break;case"together":aU(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function az(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function a$(e,t,r){if(null!==e&&(t.dependencies=e.dependencies),sg|=t.lanes,0==(r&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(d(153));if(null!==t.child){for(r=le(e=t.child,e.pendingProps),t.child=r,r.return=t;null!==e.sibling;)e=e.sibling,(r=r.sibling=le(e,e.pendingProps)).return=t;r.sibling=null}return t.child}function aV(e,t){if(!ik)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;null!==t;)null!==t.alternate&&(r=t),t=t.sibling;null===r?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;null!==r;)null!==r.alternate&&(n=r),r=r.sibling;null===n?t||null===e.tail?e.tail=null:e.tail.sibling=null:n.sibling=null}}function aH(e){var t=null!==e.alternate&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;null!==i;)r|=i.lanes|i.childLanes,n|=14680064&i.subtreeFlags,n|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}n=function(e,t){for(var r=t.child;null!==r;){if(5===r.tag||6===r.tag)e.appendChild(r.stateNode);else if(4!==r.tag&&null!==r.child){r.child.return=r,r=r.child;continue}if(r===t)break;for(;null===r.sibling;){if(null===r.return||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},i=function(){},o=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,oh(od.current);var o,a=null;switch(r){case"input":i=ed(e,i),n=ed(e,n),a=[];break;case"select":i=er({},i,{value:void 0}),n=er({},n,{value:void 0}),a=[];break;case"textarea":i=eb(e,i),n=eb(e,n),a=[];break;default:"function"!=typeof i.onClick&&"function"==typeof n.onClick&&(e.onclick=nC)}for(u in eM(r,n),r=null,i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u]){if("style"===u){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(p.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null))}for(u in n){var l=n[u];if(s=null!=i?i[u]:void 0,n.hasOwnProperty(u)&&l!==s&&(null!=l||null!=s)){if("style"===u){if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(r||(r={}),r[o]=l[o])}else r||(a||(a=[]),a.push(u,r)),r=l}else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,s=s?s.__html:void 0,null!=l&&s!==l&&(a=a||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(a=a||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(p.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&nm("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}}r&&(a=a||[]).push("style",r);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},a=function(e,t,r,n){r!==n&&(t.flags|=4)};var aq=!1,aW=!1,aK="function"==typeof WeakSet?WeakSet:Set,aJ=null;function aG(e,t){var r=e.ref;if(null!==r){if("function"==typeof r)try{r(null)}catch(r){s2(e,t,r)}else r.current=null}}function aX(e,t,r){try{r()}catch(r){s2(e,t,r)}}var aQ=!1;function aY(e,t,r){var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&aX(t,r,o)}i=i.next}while(i!==n)}}function aZ(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function a0(e){var t=e.ref;if(null!==t){var r=e.stateNode;e.tag,e=r,"function"==typeof t?t(e):t.current=e}}function a1(e){return 5===e.tag||3===e.tag||4===e.tag}function a2(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||a1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags||null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}var a3=null,a4=!1;function a6(e,t,r){for(r=r.child;null!==r;)a5(e,t,r),r=r.sibling}function a5(e,t,r){if(tc&&"function"==typeof tc.onCommitFiberUnmount)try{tc.onCommitFiberUnmount(tu,r)}catch(e){}switch(r.tag){case 5:aW||aG(r,t);case 6:var n=a3,i=a4;a3=null,a6(e,t,r),a3=n,a4=i,null!==a3&&(a4?(e=a3,r=r.stateNode,8===e.nodeType?e.parentNode.removeChild(r):e.removeChild(r)):a3.removeChild(r.stateNode));break;case 18:null!==a3&&(a4?(e=a3,r=r.stateNode,8===e.nodeType?nF(e.parentNode,r):1===e.nodeType&&nF(e,r),tW(e)):nF(a3,r.stateNode));break;case 4:n=a3,i=a4,a3=r.stateNode.containerInfo,a4=!0,a6(e,t,r),a3=n,a4=i;break;case 0:case 11:case 14:case 15:if(!aW&&null!==(n=r.updateQueue)&&null!==(n=n.lastEffect)){i=n=n.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!=(2&o)?aX(r,t,a):0!=(4&o)&&aX(r,t,a)),i=i.next}while(i!==n)}a6(e,t,r);break;case 1:if(!aW&&(aG(r,t),"function"==typeof(n=r.stateNode).componentWillUnmount))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(e){s2(r,t,e)}a6(e,t,r);break;case 21:default:a6(e,t,r);break;case 22:1&r.mode?(aW=(n=aW)||null!==r.memoizedState,a6(e,t,r),aW=n):a6(e,t,r)}}function a8(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var r=e.stateNode;null===r&&(r=e.stateNode=new aK),t.forEach(function(t){var n=s5.bind(null,e,t);r.has(t)||(r.add(t),t.then(n,n))})}}function a7(e,t){var r=t.deletions;if(null!==r)for(var n=0;n<r.length;n++){var i=r[n];try{var o=t,a=o;e:for(;null!==a;){switch(a.tag){case 5:a3=a.stateNode,a4=!1;break e;case 3:case 4:a3=a.stateNode.containerInfo,a4=!0;break e}a=a.return}if(null===a3)throw Error(d(160));a5(e,o,i),a3=null,a4=!1;var s=i.alternate;null!==s&&(s.return=null),i.return=null}catch(e){s2(i,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)a9(t,e),t=t.sibling}function a9(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a7(t,e),se(e),4&n){try{aY(3,e,e.return),aZ(3,e)}catch(t){s2(e,e.return,t)}try{aY(5,e,e.return)}catch(t){s2(e,e.return,t)}}break;case 1:a7(t,e),se(e),512&n&&null!==r&&aG(r,r.return);break;case 5:if(a7(t,e),se(e),512&n&&null!==r&&aG(r,r.return),32&e.flags){var i=e.stateNode;try{eO(i,"")}catch(t){s2(e,e.return,t)}}if(4&n&&null!=(i=e.stateNode)){var o=e.memoizedProps,a=null!==r?r.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===s&&"radio"===o.type&&null!=o.name&&ep(i,o),ej(s,a);var u=ej(s,o);for(a=0;a<l.length;a+=2){var c=l[a],f=l[a+1];"style"===c?eA(i,f):"dangerouslySetInnerHTML"===c?eI(i,f):"children"===c?eO(i,f):P(i,c,f,u)}switch(s){case"input":eh(i,o);break;case"textarea":ex(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?ev(i,!!o.multiple,h,!1):!!o.multiple!==p&&(null!=o.defaultValue?ev(i,!!o.multiple,o.defaultValue,!0):ev(i,!!o.multiple,o.multiple?[]:"",!1))}i[nV]=o}catch(t){s2(e,e.return,t)}}break;case 6:if(a7(t,e),se(e),4&n){if(null===e.stateNode)throw Error(d(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(t){s2(e,e.return,t)}}break;case 3:if(a7(t,e),se(e),4&n&&null!==r&&r.memoizedState.isDehydrated)try{tW(t.containerInfo)}catch(t){s2(e,e.return,t)}break;case 4:default:a7(t,e),se(e);break;case 13:a7(t,e),se(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,o&&(null===i.alternate||null===i.alternate.memoizedState)&&(sx=tr())),4&n&&a8(e);break;case 22:if(c=null!==r&&null!==r.memoizedState,1&e.mode?(aW=(u=aW)||c,a7(t,e),aW=u):a7(t,e),se(e),8192&n){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(aJ=e,c=e.child;null!==c;){for(f=aJ=c;null!==aJ;){switch(h=(p=aJ).child,p.tag){case 0:case 11:case 14:case 15:aY(4,p,p.return);break;case 1:aG(p,p.return);var m=p.stateNode;if("function"==typeof m.componentWillUnmount){n=p,r=p.return;try{t=n,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(e){s2(n,r,e)}}break;case 5:aG(p,p.return);break;case 22:if(null!==p.memoizedState){sr(f);continue}}null!==h?(h.return=p,aJ=h):sr(f)}c=c.sibling}e:for(c=null,f=e;;){if(5===f.tag){if(null===c){c=f;try{i=f.stateNode,u?(o=i.style,"function"==typeof o.setProperty?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,a=null!=(l=f.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,s.style.display=eR("display",a))}catch(t){s2(e,e.return,t)}}}else if(6===f.tag){if(null===c)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(t){s2(e,e.return,t)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:a7(t,e),se(e),4&n&&a8(e);case 21:}}function se(e){var t=e.flags;if(2&t){try{e:{for(var r=e.return;null!==r;){if(a1(r)){var n=r;break e}r=r.return}throw Error(d(160))}switch(n.tag){case 5:var i=n.stateNode;32&n.flags&&(eO(i,""),n.flags&=-33);var o=a2(e);!function e(t,r,n){var i=t.tag;if(5===i||6===i)t=t.stateNode,r?n.insertBefore(t,r):n.appendChild(t);else if(4!==i&&null!==(t=t.child))for(e(t,r,n),t=t.sibling;null!==t;)e(t,r,n),t=t.sibling}(e,o,i);break;case 3:case 4:var a=n.stateNode.containerInfo,s=a2(e);!function e(t,r,n){var i=t.tag;if(5===i||6===i)t=t.stateNode,r?8===n.nodeType?n.parentNode.insertBefore(t,r):n.insertBefore(t,r):(8===n.nodeType?(r=n.parentNode).insertBefore(t,n):(r=n).appendChild(t),null!=(n=n._reactRootContainer)||null!==r.onclick||(r.onclick=nC));else if(4!==i&&null!==(t=t.child))for(e(t,r,n),t=t.sibling;null!==t;)e(t,r,n),t=t.sibling}(e,s,a);break;default:throw Error(d(161))}}catch(t){s2(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function st(e){for(;null!==aJ;){var t=aJ;if(0!=(8772&t.flags)){var r=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:aW||aZ(5,t);break;case 1:var n=t.stateNode;if(4&t.flags&&!aW){if(null===r)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:iF(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}}var o=t.updateQueue;null!==o&&i5(t,o,n);break;case 3:var a=t.updateQueue;if(null!==a){if(r=null,null!==t.child)switch(t.child.tag){case 5:case 1:r=t.child.stateNode}i5(t,a,r)}break;case 5:var s=t.stateNode;if(null===r&&4&t.flags){r=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var f=c.dehydrated;null!==f&&tW(f)}}}break;default:throw Error(d(163))}aW||512&t.flags&&a0(t)}catch(e){s2(t,t.return,e)}}if(t===e){aJ=null;break}if(null!==(r=t.sibling)){r.return=t.return,aJ=r;break}aJ=t.return}}function sr(e){for(;null!==aJ;){var t=aJ;if(t===e){aJ=null;break}var r=t.sibling;if(null!==r){r.return=t.return,aJ=r;break}aJ=t.return}}function sn(e){for(;null!==aJ;){var t=aJ;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{aZ(4,t)}catch(e){s2(t,r,e)}break;case 1:var n=t.stateNode;if("function"==typeof n.componentDidMount){var i=t.return;try{n.componentDidMount()}catch(e){s2(t,i,e)}}var o=t.return;try{a0(t)}catch(e){s2(t,o,e)}break;case 5:var a=t.return;try{a0(t)}catch(e){s2(t,a,e)}}}catch(e){s2(t,t.return,e)}if(t===e){aJ=null;break}var s=t.sibling;if(null!==s){s.return=t.return,aJ=s;break}aJ=t.return}}var si=Math.ceil,so=k.ReactCurrentDispatcher,sa=k.ReactCurrentOwner,ss=k.ReactCurrentBatchConfig,sl=0,su=null,sc=null,sd=0,sf=0,sp=n0(0),sh=0,sm=null,sg=0,sy=0,sv=0,sb=null,sw=null,sx=0,s_=1/0,sE=null,sS=!1,sP=null,sk=null,sI=!1,sO=null,sC=0,sT=0,sR=null,sA=-1,sN=0;function sM(){return 0!=(6&sl)?tr():-1!==sA?sA:sA=tr()}function sj(e){return 0==(1&e.mode)?1:0!=(2&sl)&&0!==sd?sd&-sd:null!==iL.transition?(0===sN&&(sN=tb()),sN):0!==(e=tE)?e:e=void 0===(e=window.event)?16:t0(e.type)}function sD(e,t,r,n){if(50<sT)throw sT=0,sR=null,Error(d(185));tx(e,r,n),(0==(2&sl)||e!==su)&&(e===su&&(0==(2&sl)&&(sy|=r),4===sh&&sz(e,sd)),sL(e,n),1===r&&0===sl&&0==(1&t.mode)&&(s_=tr()+500,ia&&iu()))}function sL(e,t){var r,n,i,o=e.callbackNode;!function(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-td(o),s=1<<a,l=i[a];-1===l?(0==(s&r)||0!=(s&n))&&(i[a]=function(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return -1}}(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}(e,t);var a=ty(e,e===su?sd:0);if(0===a)null!==o&&e9(o),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(null!=o&&e9(o),1===t)0===e.tag?(i=s$.bind(null,e),ia=!0,il(i)):il(s$.bind(null,e)),nD(function(){0==(6&sl)&&iu()}),o=null;else{switch(tS(a)){case 1:o=ti;break;case 4:o=to;break;case 16:default:o=ta;break;case 536870912:o=tl}o=e7(o,sF.bind(null,e))}e.callbackPriority=t,e.callbackNode=o}}function sF(e,t){if(sA=-1,sN=0,0!=(6&sl))throw Error(d(327));var r=e.callbackNode;if(s0()&&e.callbackNode!==r)return null;var n=ty(e,e===su?sd:0);if(0===n)return null;if(0!=(30&n)||0!=(n&e.expiredLanes)||t)t=sX(e,n);else{t=n;var i=sl;sl|=2;var o=sJ();for((su!==e||sd!==t)&&(sE=null,s_=tr()+500,sW(e,t));;)try{(function(){for(;null!==sc&&!te();)sQ(sc)})();break}catch(t){sK(e,t)}iV(),so.current=o,sl=i,null!==sc?t=0:(su=null,sd=0,t=sh)}if(0!==t){if(2===t&&0!==(i=tv(e))&&(n=i,t=sU(e,i)),1===t)throw r=sm,sW(e,0),sz(e,n),sL(e,tr()),r;if(6===t)sz(e,n);else{if(i=e.current.alternate,0==(30&n)&&!function(e){for(var t=e;;){if(16384&t.flags){var r=t.updateQueue;if(null!==r&&null!==(r=r.stores))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!rG(o(),i))return!1}catch(e){return!1}}}if(r=t.child,16384&t.subtreeFlags&&null!==r)r.return=t,t=r;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=sX(e,n))&&0!==(o=tv(e))&&(n=o,t=sU(e,o)),1===t))throw r=sm,sW(e,0),sz(e,n),sL(e,tr()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(d(345));case 2:case 5:sZ(e,sw,sE);break;case 3:if(sz(e,n),(130023424&n)===n&&10<(t=sx+500-tr())){if(0!==ty(e,0))break;if(((i=e.suspendedLanes)&n)!==n){sM(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=nN(sZ.bind(null,e,sw,sE),t);break}sZ(e,sw,sE);break;case 4:if(sz(e,n),(4194240&n)===n)break;for(i=-1,t=e.eventTimes;0<n;){var a=31-td(n);o=1<<a,(a=t[a])>i&&(i=a),n&=~o}if(n=i,10<(n=(120>(n=tr()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*si(n/1960))-n)){e.timeoutHandle=nN(sZ.bind(null,e,sw,sE),n);break}sZ(e,sw,sE);break;default:throw Error(d(329))}}}return sL(e,tr()),e.callbackNode===r?sF.bind(null,e):null}function sU(e,t){var r=sb;return e.current.memoizedState.isDehydrated&&(sW(e,t).flags|=256),2!==(e=sX(e,t))&&(t=sw,sw=r,null!==t&&sB(t)),e}function sB(e){null===sw?sw=e:sw.push.apply(sw,e)}function sz(e,t){for(t&=~sv,t&=~sy,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-td(t),n=1<<r;e[r]=-1,t&=~n}}function s$(e){if(0!=(6&sl))throw Error(d(327));s0();var t=ty(e,0);if(0==(1&t))return sL(e,tr()),null;var r=sX(e,t);if(0!==e.tag&&2===r){var n=tv(e);0!==n&&(t=n,r=sU(e,n))}if(1===r)throw r=sm,sW(e,0),sz(e,t),sL(e,tr()),r;if(6===r)throw Error(d(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sZ(e,sw,sE),sL(e,tr()),null}function sV(e,t){var r=sl;sl|=1;try{return e(t)}finally{0===(sl=r)&&(s_=tr()+500,ia&&iu())}}function sH(e){null!==sO&&0===sO.tag&&0==(6&sl)&&s0();var t=sl;sl|=1;var r=ss.transition,n=tE;try{if(ss.transition=null,tE=1,e)return e()}finally{tE=n,ss.transition=r,0==(6&(sl=t))&&iu()}}function sq(){sf=sp.current,n1(sp)}function sW(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(-1!==r&&(e.timeoutHandle=-1,nM(r)),null!==sc)for(r=sc.return;null!==r;){var n=r;switch(iE(n),n.tag){case 1:null!=(n=n.type.childContextTypes)&&n9();break;case 3:og(),n1(n6),n1(n4),o_();break;case 5:ov(n);break;case 4:og();break;case 13:case 19:n1(ob);break;case 10:iH(n.type._context);break;case 22:case 23:sq()}r=r.return}if(su=e,sc=e=le(e.current,null),sd=sf=t,sh=0,sm=null,sv=sy=sg=0,sw=sb=null,null!==iJ){for(t=0;t<iJ.length;t++)if(null!==(n=(r=iJ[t]).interleaved)){r.interleaved=null;var i=n.next,o=r.pending;if(null!==o){var a=o.next;o.next=i,n.next=a}r.pending=n}iJ=null}return e}function sK(e,t){for(;;){var r=sc;try{if(iV(),oE.current=as,oC){for(var n=ok.memoizedState;null!==n;){var i=n.queue;null!==i&&(i.pending=null),n=n.next}oC=!1}if(oP=0,oO=oI=ok=null,oT=!1,oR=0,sa.current=null,null===r||null===r.return){sh=1,sm=t,sc=null;break}e:{var o=e,a=r.return,s=r,l=t;if(t=sd,s.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=s,f=c.tag;if(0==(1&c.mode)&&(0===f||11===f||15===f)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=av(a);if(null!==h){h.flags&=-257,ab(h,a,s,o,t),1&h.mode&&ay(o,u,t),t=h,l=u;var m=t.updateQueue;if(null===m){var g=new Set;g.add(l),t.updateQueue=g}else m.add(l);break e}if(0==(1&t)){ay(o,u,t),sG();break e}l=Error(d(426))}else if(ik&&1&s.mode){var y=av(a);if(null!==y){0==(65536&y.flags)&&(y.flags|=256),ab(y,a,s,o,t),iD(ad(l,s));break e}}o=l=ad(l,s),4!==sh&&(sh=2),null===sb?sb=[o]:sb.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=am(o,l,t);i4(o,v);break e;case 1:s=l;var b=o.type,w=o.stateNode;if(0==(128&o.flags)&&("function"==typeof b.getDerivedStateFromError||null!==w&&"function"==typeof w.componentDidCatch&&(null===sk||!sk.has(w)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=ag(o,s,t);i4(o,x);break e}}o=o.return}while(null!==o)}sY(r)}catch(e){t=e,sc===r&&null!==r&&(sc=r=r.return);continue}break}}function sJ(){var e=so.current;return so.current=as,null===e?as:e}function sG(){(0===sh||3===sh||2===sh)&&(sh=4),null===su||0==(268435455&sg)&&0==(268435455&sy)||sz(su,sd)}function sX(e,t){var r=sl;sl|=2;var n=sJ();for((su!==e||sd!==t)&&(sE=null,sW(e,t));;)try{(function(){for(;null!==sc;)sQ(sc)})();break}catch(t){sK(e,t)}if(iV(),sl=r,so.current=n,null!==sc)throw Error(d(261));return su=null,sd=0,sh}function sQ(e){var t=s(e.alternate,e,sf);e.memoizedProps=e.pendingProps,null===t?sY(e):sc=t,sa.current=null}function sY(e){var t=e;do{var r=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(r=function(e,t,r){var s=t.pendingProps;switch(iE(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return aH(t),null;case 1:case 17:return n7(t.type)&&n9(),aH(t),null;case 3:return s=t.stateNode,og(),n1(n6),n1(n4),o_(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(null===e||null===e.child)&&(iN(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==iI&&(sB(iI),iI=null))),i(e,t),aH(t),null;case 5:ov(t);var l=oh(op.current);if(r=t.type,null!==e&&null!=t.stateNode)o(e,t,r,s,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(null===t.stateNode)throw Error(d(166));return aH(t),null}if(e=oh(od.current),iN(t)){s=t.stateNode,r=t.type;var u=t.memoizedProps;switch(s[n$]=t,s[nV]=u,e=0!=(1&t.mode),r){case"dialog":nm("cancel",s),nm("close",s);break;case"iframe":case"object":case"embed":nm("load",s);break;case"video":case"audio":for(l=0;l<nd.length;l++)nm(nd[l],s);break;case"source":nm("error",s);break;case"img":case"image":case"link":nm("error",s),nm("load",s);break;case"details":nm("toggle",s);break;case"input":ef(s,u),nm("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!u.multiple},nm("invalid",s);break;case"textarea":ew(s,u),nm("invalid",s)}for(var c in eM(r,u),l=null,u)if(u.hasOwnProperty(c)){var f=u[c];"children"===c?"string"==typeof f?s.textContent!==f&&(!0!==u.suppressHydrationWarning&&nO(s.textContent,f,e),l=["children",f]):"number"==typeof f&&s.textContent!==""+f&&(!0!==u.suppressHydrationWarning&&nO(s.textContent,f,e),l=["children",""+f]):p.hasOwnProperty(c)&&null!=f&&"onScroll"===c&&nm("scroll",s)}switch(r){case"input":el(s),em(s,u,!0);break;case"textarea":el(s),e_(s);break;case"select":case"option":break;default:"function"==typeof u.onClick&&(s.onclick=nC)}s=l,t.updateQueue=s,null!==s&&(t.flags|=4)}else{c=9===l.nodeType?l:l.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=eE(r)),"http://www.w3.org/1999/xhtml"===e?"script"===r?((e=c.createElement("div")).innerHTML="<script></script>",e=e.removeChild(e.firstChild)):"string"==typeof s.is?e=c.createElement(r,{is:s.is}):(e=c.createElement(r),"select"===r&&(c=e,s.multiple?c.multiple=!0:s.size&&(c.size=s.size))):e=c.createElementNS(e,r),e[n$]=t,e[nV]=s,n(e,t,!1,!1),t.stateNode=e;e:{switch(c=ej(r,s),r){case"dialog":nm("cancel",e),nm("close",e),l=s;break;case"iframe":case"object":case"embed":nm("load",e),l=s;break;case"video":case"audio":for(l=0;l<nd.length;l++)nm(nd[l],e);l=s;break;case"source":nm("error",e),l=s;break;case"img":case"image":case"link":nm("error",e),nm("load",e),l=s;break;case"details":nm("toggle",e),l=s;break;case"input":ef(e,s),l=ed(e,s),nm("invalid",e);break;case"option":default:l=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},l=er({},s,{value:void 0}),nm("invalid",e);break;case"textarea":ew(e,s),l=eb(e,s),nm("invalid",e)}for(u in eM(r,l),f=l)if(f.hasOwnProperty(u)){var h=f[u];"style"===u?eA(e,h):"dangerouslySetInnerHTML"===u?null!=(h=h?h.__html:void 0)&&eI(e,h):"children"===u?"string"==typeof h?("textarea"!==r||""!==h)&&eO(e,h):"number"==typeof h&&eO(e,""+h):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(p.hasOwnProperty(u)?null!=h&&"onScroll"===u&&nm("scroll",e):null!=h&&P(e,u,h,c))}switch(r){case"input":el(e),em(e,s,!1);break;case"textarea":el(e),e_(e);break;case"option":null!=s.value&&e.setAttribute("value",""+ea(s.value));break;case"select":e.multiple=!!s.multiple,null!=(u=s.value)?ev(e,!!s.multiple,u,!1):null!=s.defaultValue&&ev(e,!!s.multiple,s.defaultValue,!0);break;default:"function"==typeof l.onClick&&(e.onclick=nC)}switch(r){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return aH(t),null;case 6:if(e&&null!=t.stateNode)a(e,t,e.memoizedProps,s);else{if("string"!=typeof s&&null===t.stateNode)throw Error(d(166));if(r=oh(op.current),oh(od.current),iN(t)){if(s=t.stateNode,r=t.memoizedProps,s[n$]=t,(u=s.nodeValue!==r)&&null!==(e=iS))switch(e.tag){case 3:nO(s.nodeValue,r,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&nO(s.nodeValue,r,0!=(1&e.mode))}u&&(t.flags|=4)}else(s=(9===r.nodeType?r:r.ownerDocument).createTextNode(s))[n$]=t,t.stateNode=s}return aH(t),null;case 13:if(n1(ob),s=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ik&&null!==iP&&0!=(1&t.mode)&&0==(128&t.flags))iM(),ij(),t.flags|=98560,u=!1;else if(u=iN(t),null!==s&&null!==s.dehydrated){if(null===e){if(!u)throw Error(d(318));if(!(u=null!==(u=t.memoizedState)?u.dehydrated:null))throw Error(d(317));u[n$]=t}else ij(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;aH(t),u=!1}else null!==iI&&(sB(iI),iI=null),u=!0;if(!u)return 65536&t.flags?t:null}if(0!=(128&t.flags))return t.lanes=r,t;return(s=null!==s)!=(null!==e&&null!==e.memoizedState)&&s&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&ob.current)?0===sh&&(sh=3):sG())),null!==t.updateQueue&&(t.flags|=4),aH(t),null;case 4:return og(),i(e,t),null===e&&nv(t.stateNode.containerInfo),aH(t),null;case 10:return iH(t.type._context),aH(t),null;case 19:if(n1(ob),null===(u=t.memoizedState))return aH(t),null;if(s=0!=(128&t.flags),null===(c=u.rendering)){if(s)aV(u,!1);else{if(0!==sh||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(c=ow(e))){for(t.flags|=128,aV(u,!1),null!==(s=c.updateQueue)&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=r,r=t.child;null!==r;)u=r,e=s,u.flags&=14680066,null===(c=u.alternate)?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=c.childLanes,u.lanes=c.lanes,u.child=c.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=c.memoizedProps,u.memoizedState=c.memoizedState,u.updateQueue=c.updateQueue,u.type=c.type,e=c.dependencies,u.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return n2(ob,1&ob.current|2),t.child}e=e.sibling}null!==u.tail&&tr()>s_&&(t.flags|=128,s=!0,aV(u,!1),t.lanes=4194304)}}else{if(!s){if(null!==(e=ow(c))){if(t.flags|=128,s=!0,null!==(r=e.updateQueue)&&(t.updateQueue=r,t.flags|=4),aV(u,!0),null===u.tail&&"hidden"===u.tailMode&&!c.alternate&&!ik)return aH(t),null}else 2*tr()-u.renderingStartTime>s_&&1073741824!==r&&(t.flags|=128,s=!0,aV(u,!1),t.lanes=4194304)}u.isBackwards?(c.sibling=t.child,t.child=c):(null!==(r=u.last)?r.sibling=c:t.child=c,u.last=c)}if(null!==u.tail)return t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=tr(),t.sibling=null,r=ob.current,n2(ob,s?1&r|2:1&r),t;return aH(t),null;case 22:case 23:return sq(),s=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==s&&(t.flags|=8192),s&&0!=(1&t.mode)?0!=(1073741824&sf)&&(aH(t),6&t.subtreeFlags&&(t.flags|=8192)):aH(t),null;case 24:case 25:return null}throw Error(d(156,t.tag))}(r,t,sf))){sc=r;return}}else{if(null!==(r=function(e,t){switch(iE(t),t.tag){case 1:return n7(t.type)&&n9(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return og(),n1(n6),n1(n4),o_(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return ov(t),null;case 13:if(n1(ob),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(d(340));ij()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return n1(ob),null;case 4:return og(),null;case 10:return iH(t.type._context),null;case 22:case 23:return sq(),null;default:return null}}(r,t))){r.flags&=32767,sc=r;return}if(null!==e)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{sh=6,sc=null;return}}if(null!==(t=t.sibling)){sc=t;return}sc=t=e}while(null!==t)0===sh&&(sh=5)}function sZ(e,t,r){var n=tE,i=ss.transition;try{ss.transition=null,tE=1,function(e,t,r,n){do s0();while(null!==sO)if(0!=(6&sl))throw Error(d(327));r=e.finishedWork;var i=e.finishedLanes;if(null!==r){if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(d(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(function(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-td(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}(e,o),e===su&&(sc=su=null,sd=0),0==(2064&r.subtreeFlags)&&0==(2064&r.flags)||sI||(sI=!0,a=ta,s=function(){return s0(),null},e7(a,s)),o=0!=(15990&r.flags),0!=(15990&r.subtreeFlags)||o){o=ss.transition,ss.transition=null;var a,s,l,u,c,f=tE;tE=1;var p=sl;sl|=4,sa.current=null,function(e,t){if(nT=tJ,r0(e=rZ())){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{var n=(r=(r=e.ownerDocument)&&r.defaultView||window).getSelection&&r.getSelection();if(n&&0!==n.rangeCount){r=n.anchorNode;var i,o=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch(e){r=null;break e}var s=0,l=-1,u=-1,c=0,f=0,p=e,h=null;t:for(;;){for(;p!==r||0!==o&&3!==p.nodeType||(l=s+o),p!==a||0!==n&&3!==p.nodeType||(u=s+n),3===p.nodeType&&(s+=p.nodeValue.length),null!==(i=p.firstChild);)h=p,p=i;for(;;){if(p===e)break t;if(h===r&&++c===o&&(l=s),h===a&&++f===n&&(u=s),null!==(i=p.nextSibling))break;h=(p=h).parentNode}p=i}r=-1===l||-1===u?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(nR={focusedElem:e,selectionRange:r},tJ=!1,aJ=t;null!==aJ;)if(e=(t=aJ).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,aJ=e;else for(;null!==aJ;){t=aJ;try{var m=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,y=m.memoizedState,v=t.stateNode,b=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:iF(t.type,g),y);v.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(d(163))}}catch(e){s2(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,aJ=e;break}aJ=t.return}m=aQ,aQ=!1}(e,r),a9(r,e),function(e){var t=rZ(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&function e(t,r){return!!t&&!!r&&(t===r||(!t||3!==t.nodeType)&&(r&&3===r.nodeType?e(t,r.parentNode):"contains"in t?t.contains(r):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(r))))}(r.ownerDocument.documentElement,r)){if(null!==n&&r0(r)){if(t=n.start,void 0===(e=n.end)&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if((e=(t=r.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=void 0===n.end?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=rY(r,o);var a=rY(r,n);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof r.focus&&r.focus(),r=0;r<t.length;r++)(e=t[r]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}(nR),tJ=!!nT,nR=nT=null,e.current=r,l=r,u=e,c=i,aJ=l,function e(t,r,n){for(var i=0!=(1&t.mode);null!==aJ;){var o=aJ,a=o.child;if(22===o.tag&&i){var s=null!==o.memoizedState||aq;if(!s){var l=o.alternate,u=null!==l&&null!==l.memoizedState||aW;l=aq;var c=aW;if(aq=s,(aW=u)&&!c)for(aJ=o;null!==aJ;)u=(s=aJ).child,22===s.tag&&null!==s.memoizedState?sn(o):null!==u?(u.return=s,aJ=u):sn(o);for(;null!==a;)aJ=a,e(a,r,n),a=a.sibling;aJ=o,aq=l,aW=c}st(t,r,n)}else 0!=(8772&o.subtreeFlags)&&null!==a?(a.return=o,aJ=a):st(t,r,n)}}(l,u,c),tt(),sl=p,tE=f,ss.transition=o}else e.current=r;if(sI&&(sI=!1,sO=e,sC=i),0===(o=e.pendingLanes)&&(sk=null),function(e){if(tc&&"function"==typeof tc.onCommitFiberRoot)try{tc.onCommitFiberRoot(tu,e,void 0,128==(128&e.current.flags))}catch(e){}}(r.stateNode,n),sL(e,tr()),null!==t)for(n=e.onRecoverableError,r=0;r<t.length;r++)n((i=t[r]).value,{componentStack:i.stack,digest:i.digest});if(sS)throw sS=!1,e=sP,sP=null,e;0!=(1&sC)&&0!==e.tag&&s0(),0!=(1&(o=e.pendingLanes))?e===sR?sT++:(sT=0,sR=e):sT=0,iu()}}(e,t,r,n)}finally{ss.transition=i,tE=n}return null}function s0(){if(null!==sO){var e=tS(sC),t=ss.transition,r=tE;try{if(ss.transition=null,tE=16>e?16:e,null===sO)var n=!1;else{if(e=sO,sO=null,sC=0,0!=(6&sl))throw Error(d(331));var i=sl;for(sl|=4,aJ=e.current;null!==aJ;){var o=aJ,a=o.child;if(0!=(16&aJ.flags)){var s=o.deletions;if(null!==s){for(var l=0;l<s.length;l++){var u=s[l];for(aJ=u;null!==aJ;){var c=aJ;switch(c.tag){case 0:case 11:case 15:aY(8,c,o)}var f=c.child;if(null!==f)f.return=c,aJ=f;else for(;null!==aJ;){var p=(c=aJ).sibling,h=c.return;if(function e(t){var r=t.alternate;null!==r&&(t.alternate=null,e(r)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(r=t.stateNode)&&(delete r[n$],delete r[nV],delete r[nq],delete r[nW],delete r[nK]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(c),c===u){aJ=null;break}if(null!==p){p.return=h,aJ=p;break}aJ=h}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(null!==g)}}aJ=o}}if(0!=(2064&o.subtreeFlags)&&null!==a)a.return=o,aJ=a;else for(;null!==aJ;){if(o=aJ,0!=(2048&o.flags))switch(o.tag){case 0:case 11:case 15:aY(9,o,o.return)}var v=o.sibling;if(null!==v){v.return=o.return,aJ=v;break}aJ=o.return}}var b=e.current;for(aJ=b;null!==aJ;){var w=(a=aJ).child;if(0!=(2064&a.subtreeFlags)&&null!==w)w.return=a,aJ=w;else for(a=b;null!==aJ;){if(s=aJ,0!=(2048&s.flags))try{switch(s.tag){case 0:case 11:case 15:aZ(9,s)}}catch(e){s2(s,s.return,e)}if(s===a){aJ=null;break}var x=s.sibling;if(null!==x){x.return=s.return,aJ=x;break}aJ=s.return}}if(sl=i,iu(),tc&&"function"==typeof tc.onPostCommitFiberRoot)try{tc.onPostCommitFiberRoot(tu,e)}catch(e){}n=!0}return n}finally{tE=r,ss.transition=t}}return!1}function s1(e,t,r){t=am(e,t=ad(r,t),1),e=i2(e,t,1),t=sM(),null!==e&&(tx(e,1,t),sL(e,t))}function s2(e,t,r){if(3===e.tag)s1(e,e,r);else for(;null!==t;){if(3===t.tag){s1(t,e,r);break}if(1===t.tag){var n=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof n.componentDidCatch&&(null===sk||!sk.has(n))){e=ag(t,e=ad(r,e),1),t=i2(t,e,1),e=sM(),null!==t&&(tx(t,1,e),sL(t,e));break}}t=t.return}}function s3(e,t,r){var n=e.pingCache;null!==n&&n.delete(t),t=sM(),e.pingedLanes|=e.suspendedLanes&r,su===e&&(sd&r)===r&&(4===sh||3===sh&&(130023424&sd)===sd&&500>tr()-sx?sW(e,0):sv|=r),sL(e,t)}function s4(e,t){0===t&&(0==(1&e.mode)?t=1:(t=tm,0==(130023424&(tm<<=1))&&(tm=4194304)));var r=sM();null!==(e=iQ(e,t))&&(tx(e,t,r),sL(e,r))}function s6(e){var t=e.memoizedState,r=0;null!==t&&(r=t.retryLane),s4(e,r)}function s5(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;null!==i&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(d(314))}null!==n&&n.delete(t),s4(e,r)}function s8(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function s7(e,t,r,n){return new s8(e,t,r,n)}function s9(e){return!(!(e=e.prototype)||!e.isReactComponent)}function le(e,t){var r=e.alternate;return null===r?((r=s7(e.tag,t,e.key,e.mode)).elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=14680064&e.flags,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function lt(e,t,r,n,i,o){var a=2;if(n=e,"function"==typeof e)s9(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case C:return lr(r.children,i,o,t);case T:a=8,i|=8;break;case R:return(e=s7(12,r,t,2|i)).elementType=R,e.lanes=o,e;case j:return(e=s7(13,r,t,i)).elementType=j,e.lanes=o,e;case D:return(e=s7(19,r,t,i)).elementType=D,e.lanes=o,e;case B:return ln(r,i,o,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case A:a=10;break e;case N:a=9;break e;case M:a=11;break e;case L:a=14;break e;case F:a=16,n=null;break e}throw Error(d(130,null==e?e:typeof e,""))}return(t=s7(a,r,t,i)).elementType=e,t.type=n,t.lanes=o,t}function lr(e,t,r,n){return(e=s7(7,e,n,t)).lanes=r,e}function ln(e,t,r,n){return(e=s7(22,e,n,t)).elementType=B,e.lanes=r,e.stateNode={isHidden:!1},e}function li(e,t,r){return(e=s7(6,e,null,t)).lanes=r,e}function lo(e,t,r){return(t=s7(4,null!==e.children?e.children:[],e.key,t)).lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function la(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tw(0),this.expirationTimes=tw(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tw(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ls(e,t,r,n,i,o,a,s,l){return e=new la(e,t,r,s,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=s7(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},iZ(o),e}function ll(e){if(!e)return n3;e=e._reactInternals;e:{if(e4(e)!==e||1!==e.tag)throw Error(d(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(n7(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t)throw Error(d(171))}if(1===e.tag){var r=e.type;if(n7(r))return it(e,r,t)}return t}function lu(e,t,r,n,i,o,a,s,l){return(e=ls(r,n,!0,e,i,o,a,s,l)).context=ll(null),r=e.current,(o=i1(n=sM(),i=sj(r))).callback=null!=t?t:null,i2(r,o,i),e.current.lanes=i,tx(e,i,n),sL(e,n),e}function lc(e,t,r,n){var i=t.current,o=sM(),a=sj(i);return r=ll(r),null===t.context?t.context=r:t.pendingContext=r,(t=i1(o,a)).payload={element:e},null!==(n=void 0===n?null:n)&&(t.callback=n),null!==(e=i2(i,t,a))&&(sD(e,i,a,o),i3(e,i,a)),a}function ld(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function lf(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var r=e.retryLane;e.retryLane=0!==r&&r<t?r:t}}function lp(e,t){lf(e,t),(e=e.alternate)&&lf(e,t)}s=function(e,t,r){if(null!==e){if(e.memoizedProps!==t.pendingProps||n6.current)ax=!0;else{if(0==(e.lanes&r)&&0==(128&t.flags))return ax=!1,function(e,t,r){switch(t.tag){case 3:aR(t),ij();break;case 5:oy(t);break;case 1:n7(t.type)&&ir(t);break;case 4:om(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;n2(iU,n._currentValue),n._currentValue=i;break;case 13:if(null!==(n=t.memoizedState)){if(null!==n.dehydrated)return n2(ob,1&ob.current),t.flags|=128,null;if(0!=(r&t.child.childLanes))return aj(e,t,r);return n2(ob,1&ob.current),null!==(e=a$(e,t,r))?e.sibling:null}n2(ob,1&ob.current);break;case 19:if(n=0!=(r&t.childLanes),0!=(128&e.flags)){if(n)return aB(e,t,r);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),n2(ob,ob.current),!n)return null;break;case 22:case 23:return t.lanes=0,ak(e,t,r)}return a$(e,t,r)}(e,t,r);ax=0!=(131072&e.flags)}}else ax=!1,ik&&0!=(1048576&t.flags)&&ix(t,ih,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;az(e,t),e=t.pendingProps;var i=n8(t,n4.current);iW(t,r),i=oj(null,t,n,e,i,r);var o=oD();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,n7(n)?(o=!0,ir(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,iZ(t),i.updater=i9,t.stateNode=i,i._reactInternals=t,on(t,n,e,r),t=aT(null,t,n,!0,o,r)):(t.tag=0,ik&&o&&i_(t),a_(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(az(e,t),e=t.pendingProps,n=(i=n._init)(n._payload),t.type=n,i=t.tag=function(e){if("function"==typeof e)return s9(e)?1:0;if(null!=e){if((e=e.$$typeof)===M)return 11;if(e===L)return 14}return 2}(n),e=iF(n,e),i){case 0:t=aO(null,t,n,e,r);break e;case 1:t=aC(null,t,n,e,r);break e;case 11:t=aE(null,t,n,e,r);break e;case 14:t=aS(null,t,n,iF(n.type,e),r);break e}throw Error(d(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:iF(n,i),aO(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:iF(n,i),aC(e,t,n,i,r);case 3:e:{if(aR(t),null===e)throw Error(d(387));n=t.pendingProps,i=(o=t.memoizedState).element,i0(e,t),i6(t,n,null,r);var a=t.memoizedState;if(n=a.element,o.isDehydrated){if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){i=ad(Error(d(423)),t),t=aA(e,t,n,r,i);break e}if(n!==i){i=ad(Error(d(424)),t),t=aA(e,t,n,r,i);break e}for(iP=nU(t.stateNode.containerInfo.firstChild),iS=t,ik=!0,iI=null,r=ou(t,null,n,r),t.child=r;r;)r.flags=-3&r.flags|4096,r=r.sibling}else{if(ij(),n===i){t=a$(e,t,r);break e}a_(e,t,n,r)}t=t.child}return t;case 5:return oy(t),null===e&&iR(t),n=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,a=i.children,nA(n,i)?a=null:null!==o&&nA(n,o)&&(t.flags|=32),aI(e,t),a_(e,t,a,r),t.child;case 6:return null===e&&iR(t),null;case 13:return aj(e,t,r);case 4:return om(t,t.stateNode.containerInfo),n=t.pendingProps,null===e?t.child=ol(t,null,n,r):a_(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:iF(n,i),aE(e,t,n,i,r);case 7:return a_(e,t,t.pendingProps,r),t.child;case 8:case 12:return a_(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,n2(iU,n._currentValue),n._currentValue=a,null!==o){if(rG(o.value,a)){if(o.children===i.children&&!n6.current){t=a$(e,t,r);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){a=o.child;for(var l=s.firstContext;null!==l;){if(l.context===n){if(1===o.tag){(l=i1(-1,r&-r)).tag=2;var u=o.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=r,null!==(l=o.alternate)&&(l.lanes|=r),iq(o.return,r,t),s.lanes|=r;break}l=l.next}}else if(10===o.tag)a=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(a=o.return))throw Error(d(341));a.lanes|=r,null!==(s=a.alternate)&&(s.lanes|=r),iq(a,r,t),a=o.sibling}else a=o.child;if(null!==a)a.return=o;else for(a=o;null!==a;){if(a===t){a=null;break}if(null!==(o=a.sibling)){o.return=a.return,a=o;break}a=a.return}o=a}}a_(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,iW(t,r),n=n(i=iK(i)),t.flags|=1,a_(e,t,n,r),t.child;case 14:return i=iF(n=t.type,t.pendingProps),i=iF(n.type,i),aS(e,t,n,i,r);case 15:return aP(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:iF(n,i),az(e,t),t.tag=1,n7(n)?(e=!0,ir(t)):e=!1,iW(t,r),ot(t,n,i),on(t,n,i,r),aT(null,t,n,!0,e,r);case 19:return aB(e,t,r);case 22:return ak(e,t,r)}throw Error(d(156,t.tag))};var lh="function"==typeof reportError?reportError:function(e){console.error(e)};function lm(e){this._internalRoot=e}function lg(e){this._internalRoot=e}function ly(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function lv(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function lb(){}function lw(e,t,r,n,i){var o=r._reactRootContainer;if(o){var a=o;if("function"==typeof i){var s=i;i=function(){var e=ld(a);s.call(e)}}lc(t,a,e,i)}else a=function(e,t,r,n,i){if(i){if("function"==typeof n){var o=n;n=function(){var e=ld(a);o.call(e)}}var a=lu(t,n,e,0,null,!1,!1,"",lb);return e._reactRootContainer=a,e[nH]=a.current,nv(8===e.nodeType?e.parentNode:e),sH(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof n){var s=n;n=function(){var e=ld(l);s.call(e)}}var l=ls(e,0,!1,null,null,!1,!1,"",lb);return e._reactRootContainer=l,e[nH]=l.current,nv(8===e.nodeType?e.parentNode:e),sH(function(){lc(t,l,r,n)}),l}(r,t,e,i,n);return ld(a)}lg.prototype.render=lm.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(d(409));lc(e,t,null,null)},lg.prototype.unmount=lm.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;sH(function(){lc(null,e,null,null)}),t[nH]=null}},lg.prototype.unstable_scheduleHydration=function(e){if(e){var t=tO();e={blockedOn:null,target:e,priority:t};for(var r=0;r<tL.length&&0!==t&&t<tL[r].priority;r++);tL.splice(r,0,e),0===r&&tz(e)}},tP=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=tg(t.pendingLanes);0!==r&&(t_(t,1|r),sL(t,tr()),0==(6&sl)&&(s_=tr()+500,iu()))}break;case 13:sH(function(){var t=iQ(e,1);null!==t&&sD(t,e,1,sM())}),lp(e,1)}},tk=function(e){if(13===e.tag){var t=iQ(e,134217728);null!==t&&sD(t,e,134217728,sM()),lp(e,134217728)}},tI=function(e){if(13===e.tag){var t=sj(e),r=iQ(e,t);null!==r&&sD(r,e,t,sM()),lp(e,t)}},tO=function(){return tE},tC=function(e,t){var r=tE;try{return tE=e,t()}finally{tE=r}},eF=function(e,t,r){switch(t){case"input":if(eh(e,r),t=r.name,"radio"===r.type&&null!=t){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=nQ(n);if(!i)throw Error(d(90));eu(n),eh(n,i)}}}break;case"textarea":ex(e,r);break;case"select":null!=(t=r.value)&&ev(e,!!r.multiple,t,!1)}},eH=sV,eq=sH;var lx={findFiberByHostInstance:nJ,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},l_={bundleType:lx.bundleType,version:lx.version,rendererPackageName:lx.rendererPackageName,rendererConfig:lx.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:k.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=e8(e))?null:e.stateNode},findFiberByHostInstance:lx.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var lE=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lE.isDisabled&&lE.supportsFiber)try{tu=lE.inject(l_),tc=lE}catch(e){}}V={usingClientEntryPoint:!1,Events:[nG,nX,nQ,e$,eV,sV]},H=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ly(t))throw Error(d(200));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:O,key:null==n?null:""+n,children:e,containerInfo:t,implementation:null}}(e,t,null,r)},q=function(e,t){if(!ly(e))throw Error(d(299));var r=!1,n="",i=lh;return null!=t&&(!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(n=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=ls(e,1,!1,null,null,r,!1,n,i),e[nH]=t.current,nv(8===e.nodeType?e.parentNode:e),new lm(t)},W=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(d(188));throw Error(d(268,e=Object.keys(e).join(",")))}return e=null===(e=e8(t))?null:e.stateNode},K=function(e){return sH(e)},J=function(e,t,r){if(!lv(t))throw Error(d(200));return lw(null,e,t,!0,r)},G=function(e,t,r){if(!ly(e))throw Error(d(405));var n=null!=r&&r.hydratedSources||null,i=!1,o="",a=lh;if(null!=r&&(!0===r.unstable_strictMode&&(i=!0),void 0!==r.identifierPrefix&&(o=r.identifierPrefix),void 0!==r.onRecoverableError&&(a=r.onRecoverableError)),t=lu(t,null,e,1,null!=r?r:null,i,!1,o,a),e[nH]=t.current,nv(e),n)for(e=0;e<n.length;e++)i=(i=(r=n[e])._getVersion)(r._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new lg(t)},X=function(e,t,r){if(!lv(t))throw Error(d(200));return lw(null,e,t,!1,r)},Q=function(e){if(!lv(e))throw Error(d(40));return!!e._reactRootContainer&&(sH(function(){lw(null,null,e,!1,function(){e._reactRootContainer=null,e[nH]=null})}),!0)},Y=sV,Z=function(e,t,r,n){if(!lv(r))throw Error(d(200));if(null==e||void 0===e._reactInternals)throw Error(d(38));return lw(e,t,r,!1,n)},ee="18.2.0-next-9e3b772b8-20220608"}),B("fO90s",function(e,t){e.exports=U("gcnCG")}),B("gcnCG",function(e,t){function r(e,t){var r=e.length;for(e.push(t);0<r;){var n=r-1>>>1,i=e[n];if(0<o(i,t))e[n]=t,e[r]=i,r=n;else break}}function n(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;for(var n=0,i=e.length,a=i>>>1;n<a;){var s=2*(n+1)-1,l=e[s],u=s+1,c=e[u];if(0>o(l,r))u<i&&0>o(c,l)?(e[n]=c,e[u]=r,n=u):(e[n]=l,e[s]=r,n=s);else if(u<i&&0>o(c,r))e[n]=c,e[u]=r,n=u;else break}}return t}function o(e,t){var r=e.sortIndex-t.sortIndex;return 0!==r?r:e.id-t.id}if(u(e.exports,"unstable_now",()=>a,e=>a=e),u(e.exports,"unstable_IdlePriority",()=>s,e=>s=e),u(e.exports,"unstable_ImmediatePriority",()=>l,e=>l=e),u(e.exports,"unstable_LowPriority",()=>c,e=>c=e),u(e.exports,"unstable_NormalPriority",()=>d,e=>d=e),u(e.exports,"unstable_Profiling",()=>f,e=>f=e),u(e.exports,"unstable_UserBlockingPriority",()=>p,e=>p=e),u(e.exports,"unstable_cancelCallback",()=>h,e=>h=e),u(e.exports,"unstable_continueExecution",()=>m,e=>m=e),u(e.exports,"unstable_forceFrameRate",()=>g,e=>g=e),u(e.exports,"unstable_getCurrentPriorityLevel",()=>y,e=>y=e),u(e.exports,"unstable_getFirstCallbackNode",()=>v,e=>v=e),u(e.exports,"unstable_next",()=>b,e=>b=e),u(e.exports,"unstable_pauseExecution",()=>w,e=>w=e),u(e.exports,"unstable_requestPaint",()=>x,e=>x=e),u(e.exports,"unstable_runWithPriority",()=>_,e=>_=e),u(e.exports,"unstable_scheduleCallback",()=>E,e=>E=e),u(e.exports,"unstable_shouldYield",()=>S,e=>S=e),u(e.exports,"unstable_wrapCallback",()=>P,e=>P=e),"object"==typeof performance&&"function"==typeof performance.now){var a,s,l,c,d,f,p,h,m,g,y,v,b,w,x,_,E,S,P,k,I=performance;a=function(){return I.now()}}else{var O=Date,C=O.now();a=function(){return O.now()-C}}var T=[],R=[],A=1,N=null,M=3,j=!1,D=!1,L=!1,F="function"==typeof setTimeout?setTimeout:null,U="function"==typeof clearTimeout?clearTimeout:null,B="undefined"!=typeof setImmediate?setImmediate:null;function z(e){for(var t=n(R);null!==t;){if(null===t.callback)i(R);else if(t.startTime<=e)i(R),t.sortIndex=t.expirationTime,r(T,t);else break;t=n(R)}}function $(e){if(L=!1,z(e),!D){if(null!==n(T))D=!0,Z(V);else{var t=n(R);null!==t&&ee($,t.startTime-e)}}}function V(e,t){D=!1,L&&(L=!1,U(W),W=-1),j=!0;var r=M;try{for(z(t),N=n(T);null!==N&&(!(N.expirationTime>t)||e&&!G());){var o=N.callback;if("function"==typeof o){N.callback=null,M=N.priorityLevel;var s=o(N.expirationTime<=t);t=a(),"function"==typeof s?N.callback=s:N===n(T)&&i(T),z(t)}else i(T);N=n(T)}if(null!==N)var l=!0;else{var u=n(R);null!==u&&ee($,u.startTime-t),l=!1}return l}finally{N=null,M=r,j=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var H=!1,q=null,W=-1,K=5,J=-1;function G(){return!(a()-J<K)}function X(){if(null!==q){var e=a();J=e;var t=!0;try{t=q(!0,e)}finally{t?k():(H=!1,q=null)}}else H=!1}if("function"==typeof B)k=function(){B(X)};else if("undefined"!=typeof MessageChannel){var Q=new MessageChannel,Y=Q.port2;Q.port1.onmessage=X,k=function(){Y.postMessage(null)}}else k=function(){F(X,0)};function Z(e){q=e,H||(H=!0,k())}function ee(e,t){W=F(function(){e(a())},t)}s=5,l=1,c=4,d=3,f=null,p=2,h=function(e){e.callback=null},m=function(){D||j||(D=!0,Z(V))},g=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<e?Math.floor(1e3/e):5},y=function(){return M},v=function(){return n(T)},b=function(e){switch(M){case 1:case 2:case 3:var t=3;break;default:t=M}var r=M;M=t;try{return e()}finally{M=r}},w=function(){},x=function(){},_=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=M;M=e;try{return t()}finally{M=r}},E=function(e,t,i){var o=a();switch(i="object"==typeof i&&null!==i&&"number"==typeof(i=i.delay)&&0<i?o+i:o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=i+s,e={id:A++,callback:t,priorityLevel:e,startTime:i,expirationTime:s,sortIndex:-1},i>o?(e.sortIndex=i,r(R,e),null===n(T)&&e===n(R)&&(L?(U(W),W=-1):L=!0,ee($,i-o))):(e.sortIndex=s,r(T,e),D||j||(D=!0,Z(V))),e},S=G,P=function(e){var t=M;return function(){var r=M;M=t;try{return e.apply(this,arguments)}finally{M=r}}}}),B("30Ie1",function(e,t){u(e.exports,"useSyncExternalStore",()=>r,e=>r=e);var r,n=U("acw62"),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,a=n.useEffect,s=n.useLayoutEffect,l=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var d="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),i=n[0].inst,u=n[1];return s(function(){i.value=r,i.getSnapshot=t,c(i)&&u({inst:i})},[e,r,t]),a(function(){return c(i)&&u({inst:i}),e(function(){c(i)&&u({inst:i})})},[e]),l(r),r};r=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:d}),B("6VZtt",function(e,t){u(e.exports,"useSyncExternalStoreWithSelector",()=>r,e=>r=e);var r,n=U("acw62"),i=U("hfliI"),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=i.useSyncExternalStore,s=n.useRef,l=n.useEffect,c=n.useMemo,d=n.useDebugValue;r=function(e,t,r,n,i){var u=s(null);if(null===u.current){var f={hasValue:!1,value:null};u.current=f}else f=u.current;var p=a(e,(u=c(function(){function e(e){if(!l){if(l=!0,a=e,e=n(e),void 0!==i&&f.hasValue){var t=f.value;if(i(t,e))return s=t}return s=e}if(t=s,o(a,e))return t;var r=n(e);return void 0!==i&&i(t,r)?t:(a=e,s=r)}var a,s,l=!1,u=void 0===r?null:r;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,r,n,i]))[0],u[1]);return l(function(){f.hasValue=!0,f.value=p},[p]),d(p),p}}),B("hfliI",function(e,t){e.exports=U("30Ie1")}),B("dNL7g",function(e,t){u(e.exports,"AsyncMode",()=>r,e=>r=e),u(e.exports,"ConcurrentMode",()=>n,e=>n=e),u(e.exports,"ContextConsumer",()=>i,e=>i=e),u(e.exports,"ContextProvider",()=>o,e=>o=e),u(e.exports,"Element",()=>a,e=>a=e),u(e.exports,"ForwardRef",()=>s,e=>s=e),u(e.exports,"Fragment",()=>l,e=>l=e),u(e.exports,"Lazy",()=>c,e=>c=e),u(e.exports,"Memo",()=>d,e=>d=e),u(e.exports,"Portal",()=>f,e=>f=e),u(e.exports,"Profiler",()=>p,e=>p=e),u(e.exports,"StrictMode",()=>h,e=>h=e),u(e.exports,"Suspense",()=>m,e=>m=e),u(e.exports,"isAsyncMode",()=>g,e=>g=e),u(e.exports,"isConcurrentMode",()=>y,e=>y=e),u(e.exports,"isContextConsumer",()=>v,e=>v=e),u(e.exports,"isContextProvider",()=>b,e=>b=e),u(e.exports,"isElement",()=>w,e=>w=e),u(e.exports,"isForwardRef",()=>x,e=>x=e),u(e.exports,"isFragment",()=>_,e=>_=e),u(e.exports,"isLazy",()=>E,e=>E=e),u(e.exports,"isMemo",()=>S,e=>S=e),u(e.exports,"isPortal",()=>P,e=>P=e),u(e.exports,"isProfiler",()=>k,e=>k=e),u(e.exports,"isStrictMode",()=>I,e=>I=e),u(e.exports,"isSuspense",()=>O,e=>O=e),u(e.exports,"isValidElementType",()=>C,e=>C=e),u(e.exports,"typeOf",()=>T,e=>T=e);var r,n,i,o,a,s,l,c,d,f,p,h,m,g,y,v,b,w,x,_,E,S,P,k,I,O,C,T,R="function"==typeof Symbol&&Symbol.for,A=R?Symbol.for("react.element"):60103,N=R?Symbol.for("react.portal"):60106,M=R?Symbol.for("react.fragment"):60107,j=R?Symbol.for("react.strict_mode"):60108,D=R?Symbol.for("react.profiler"):60114,L=R?Symbol.for("react.provider"):60109,F=R?Symbol.for("react.context"):60110,U=R?Symbol.for("react.async_mode"):60111,B=R?Symbol.for("react.concurrent_mode"):60111,z=R?Symbol.for("react.forward_ref"):60112,$=R?Symbol.for("react.suspense"):60113,V=R?Symbol.for("react.suspense_list"):60120,H=R?Symbol.for("react.memo"):60115,q=R?Symbol.for("react.lazy"):60116,W=R?Symbol.for("react.block"):60121,K=R?Symbol.for("react.fundamental"):60117,J=R?Symbol.for("react.responder"):60118,G=R?Symbol.for("react.scope"):60119;function X(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case A:switch(e=e.type){case U:case B:case M:case D:case j:case $:return e;default:switch(e=e&&e.$$typeof){case F:case z:case q:case H:case L:return e;default:return t}}case N:return t}}}function Q(e){return X(e)===B}r=U,n=B,i=F,o=L,a=A,s=z,l=M,c=q,d=H,f=N,p=D,h=j,m=$,g=function(e){return Q(e)||X(e)===U},y=Q,v=function(e){return X(e)===F},b=function(e){return X(e)===L},w=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===A},x=function(e){return X(e)===z},_=function(e){return X(e)===M},E=function(e){return X(e)===q},S=function(e){return X(e)===H},P=function(e){return X(e)===N},k=function(e){return X(e)===D},I=function(e){return X(e)===j},O=function(e){return X(e)===$},C=function(e){return"string"==typeof e||"function"==typeof e||e===M||e===B||e===D||e===j||e===$||e===V||"object"==typeof e&&null!==e&&(e.$$typeof===q||e.$$typeof===H||e.$$typeof===L||e.$$typeof===F||e.$$typeof===z||e.$$typeof===K||e.$$typeof===J||e.$$typeof===G||e.$$typeof===W)},T=X}),B("9cCWX",function(e,t){u(e.exports,"ContextConsumer",()=>r,e=>r=e),u(e.exports,"ContextProvider",()=>n,e=>n=e),u(e.exports,"Element",()=>i,e=>i=e),u(e.exports,"ForwardRef",()=>o,e=>o=e),u(e.exports,"Fragment",()=>a,e=>a=e),u(e.exports,"Lazy",()=>s,e=>s=e),u(e.exports,"Memo",()=>l,e=>l=e),u(e.exports,"Portal",()=>c,e=>c=e),u(e.exports,"Profiler",()=>d,e=>d=e),u(e.exports,"StrictMode",()=>f,e=>f=e),u(e.exports,"Suspense",()=>p,e=>p=e),u(e.exports,"SuspenseList",()=>h,e=>h=e),u(e.exports,"isAsyncMode",()=>m,e=>m=e),u(e.exports,"isConcurrentMode",()=>g,e=>g=e),u(e.exports,"isContextConsumer",()=>y,e=>y=e),u(e.exports,"isContextProvider",()=>v,e=>v=e),u(e.exports,"isElement",()=>b,e=>b=e),u(e.exports,"isForwardRef",()=>w,e=>w=e),u(e.exports,"isFragment",()=>x,e=>x=e),u(e.exports,"isLazy",()=>_,e=>_=e),u(e.exports,"isMemo",()=>E,e=>E=e),u(e.exports,"isPortal",()=>S,e=>S=e),u(e.exports,"isProfiler",()=>P,e=>P=e),u(e.exports,"isStrictMode",()=>k,e=>k=e),u(e.exports,"isSuspense",()=>I,e=>I=e),u(e.exports,"isSuspenseList",()=>O,e=>O=e),u(e.exports,"isValidElementType",()=>C,e=>C=e),u(e.exports,"typeOf",()=>T,e=>T=e);var r,n,i,o,a,s,l,c,d,f,p,h,m,g,y,v,b,w,x,_,E,S,P,k,I,O,C,T,R,A=Symbol.for("react.element"),N=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),L=Symbol.for("react.provider"),F=Symbol.for("react.context"),U=Symbol.for("react.server_context"),B=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen");function W(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case A:switch(e=e.type){case M:case D:case j:case z:case $:return e;default:switch(e=e&&e.$$typeof){case U:case F:case B:case H:case V:case L:return e;default:return t}}case N:return t}}}R=Symbol.for("react.module.reference"),r=F,n=L,i=A,o=B,a=M,s=H,l=V,c=N,d=D,f=j,p=z,h=$,m=function(){return!1},g=function(){return!1},y=function(e){return W(e)===F},v=function(e){return W(e)===L},b=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===A},w=function(e){return W(e)===B},x=function(e){return W(e)===M},_=function(e){return W(e)===H},E=function(e){return W(e)===V},S=function(e){return W(e)===N},P=function(e){return W(e)===D},k=function(e){return W(e)===j},I=function(e){return W(e)===z},O=function(e){return W(e)===$},C=function(e){return"string"==typeof e||"function"==typeof e||e===M||e===D||e===j||e===z||e===$||e===q||"object"==typeof e&&null!==e&&(e.$$typeof===H||e.$$typeof===V||e.$$typeof===L||e.$$typeof===F||e.$$typeof===B||e.$$typeof===R||void 0!==e.getModuleId)},T=W}),B("i4CZ2",function(e,t){function r(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(e){return"'"+e+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function n(e){return!!e&&!!e[Y]}function i(e){var t;return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===ee}(e)||Array.isArray(e)||!!e[Q]||!!(null===(t=e.constructor)||void 0===t?void 0:t[Q])||p(e)||h(e))}function o(e){return n(e)||r(23,e),e[Y].t}function a(e,t,r){void 0===r&&(r=!1),0===s(e)?(r?Object.keys:et)(e).forEach(function(n){r&&"symbol"==typeof n||t(n,e[n],e)}):e.forEach(function(r,n){return t(n,r,e)})}function s(e){var t=e[Y];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:p(e)?2:h(e)?3:0}function l(e,t){return 2===s(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function c(e,t){return 2===s(e)?e.get(t):e[t]}function d(e,t,r){var n=s(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e){return K&&e instanceof Map}function h(e){return J&&e instanceof Set}function m(e){return e.o||e.t}function g(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=er(e);delete t[Y];for(var r=et(t),n=0;n<r.length;n++){var i=r[n],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function y(e,t){return void 0===t&&(t=!1),b(e)||n(e)||!i(e)||(s(e)>1&&(e.set=e.add=e.clear=e.delete=v),Object.freeze(e),t&&a(e,function(e,t){return y(t,!0)},!0)),e}function v(){r(2)}function b(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function w(e){var t=en[e];return t||r(18,e),t}function x(e,t){en[e]||(en[e]=t)}function _(e,t){t&&(w("Patches"),e.u=[],e.s=[],e.v=t)}function E(e){S(e),e.p.forEach(k),e.p=null}function S(e){e===q&&(q=e.l)}function P(e){return q={p:[],l:q,h:e,m:!0,_:0}}function k(e){var t=e[Y];0===t.i||1===t.i?t.j():t.g=!0}function I(e,t){t._=t.p.length;var n=t.p[0],o=void 0!==e&&e!==n;return t.h.O||w("ES5").S(t,e,o),o?(n[Y].P&&(E(t),r(4)),i(e)&&(e=O(t,e),t.l||T(t,e)),t.u&&w("Patches").M(n[Y].t,e,t.u,t.s)):e=O(t,n,[]),E(t),t.u&&t.v(t.u,t.s),e!==X?e:void 0}function O(e,t,r){if(b(t))return t;var n=t[Y];if(!n)return a(t,function(i,o){return C(e,n,t,i,o,r)},!0),t;if(n.A!==e)return t;if(!n.P)return T(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var i=4===n.i||5===n.i?n.o=g(n.k):n.o,o=i,s=!1;3===n.i&&(o=new Set(i),i.clear(),s=!0),a(o,function(t,o){return C(e,n,i,t,o,r,s)}),T(e,i,!1),r&&e.u&&w("Patches").N(n,r,e.u,e.s)}return n.o}function C(e,t,r,o,a,s,u){if(n(a)){var c=O(e,a,s&&t&&3!==t.i&&!l(t.R,o)?s.concat(o):void 0);if(d(r,o,c),!n(c))return;e.m=!1}else u&&r.add(a);if(i(a)&&!b(a)){if(!e.h.D&&e._<1)return;O(e,a),t&&t.A.l||T(e,a)}}function T(e,t,r){void 0===r&&(r=!1),!e.l&&e.h.D&&e.m&&y(t,r)}function R(e,t){var r=e[Y];return(r?m(r):e)[t]}function A(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function N(e){e.P||(e.P=!0,e.l&&N(e.l))}function M(e){e.o||(e.o=g(e.t))}function j(e,t,r){var n,i,o,a,s,l,u,c=p(t)?w("MapSet").F(t,r):h(t)?w("MapSet").T(t,r):e.O?(o=i={i:(n=Array.isArray(t))?1:0,A:r?r.A:q,P:!1,I:!1,R:{},l:r,t:t,k:null,o:null,j:null,C:!1},a=ei,n&&(o=[i],a=eo),l=(s=Proxy.revocable(o,a)).revoke,u=s.proxy,i.k=u,i.j=l,u):w("ES5").J(t,r);return(r?r.A:q).p.push(c),c}function D(e){return n(e)||r(22,e),function e(t){if(!i(t))return t;var r,n=t[Y],o=s(t);if(n){if(!n.P&&(n.i<4||!w("ES5").K(n)))return n.t;n.I=!0,r=L(t,o),n.I=!1}else r=L(t,o);return a(r,function(t,i){n&&c(n.t,t)===i||d(r,t,e(i))}),3===o?new Set(r):r}(e)}function L(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return g(e)}function F(){function e(e,t){var r=o[e];return r?r.enumerable=t:o[e]=r={configurable:!0,enumerable:t,get:function(){var t=this[Y];return ei.get(t,e)},set:function(t){var r=this[Y];ei.set(r,e,t)}},r}function t(e){for(var t=e.length-1;t>=0;t--){var n=e[t][Y];if(!n.P)switch(n.i){case 5:i(n)&&N(n);break;case 4:r(n)&&N(n)}}}function r(e){for(var t=e.t,r=e.k,n=et(r),i=n.length-1;i>=0;i--){var o=n[i];if(o!==Y){var a=t[o];if(void 0===a&&!l(t,o))return!0;var s=r[o],u=s&&s[Y];if(u?u.t!==a:!f(s,a))return!0}}var c=!!t[Y];return n.length!==et(t).length+(c?0:1)}function i(e){var t=e.k;if(t.length!==e.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);if(r&&!r.get)return!0;for(var n=0;n<t.length;n++)if(!t.hasOwnProperty(n))return!0;return!1}var o={};x("ES5",{J:function(t,r){var n=Array.isArray(t),i=function(t,r){if(t){for(var n=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(n,""+i,e(i,!0));return n}var o=er(r);delete o[Y];for(var a=et(o),s=0;s<a.length;s++){var l=a[s];o[l]=e(l,t||!!o[l].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(n,t),o={i:n?5:4,A:r?r.A:q,P:!1,I:!1,R:{},l:r,t:t,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Y,{value:o,writable:!0}),i},S:function(e,r,o){o?n(r)&&r[Y].A===e&&t(e.p):(e.u&&function e(t){if(t&&"object"==typeof t){var r=t[Y];if(r){var n=r.t,o=r.k,s=r.R,u=r.i;if(4===u)a(o,function(t){t!==Y&&(void 0!==n[t]||l(n,t)?s[t]||e(o[t]):(s[t]=!0,N(r)))}),a(n,function(e){void 0!==o[e]||l(o,e)||(s[e]=!1,N(r))});else if(5===u){if(i(r)&&(N(r),s.length=!0),o.length<n.length)for(var c=o.length;c<n.length;c++)s[c]=!1;else for(var d=n.length;d<o.length;d++)s[d]=!0;for(var f=Math.min(o.length,n.length),p=0;p<f;p++)o.hasOwnProperty(p)||(s[p]=!0),void 0===s[p]&&e(o[p])}}}}(e.p[0]),t(e.p))},K:function(e){return 4===e.i?r(e):i(e)}})}function U(){function e(t){if(!i(t))return t;if(Array.isArray(t))return t.map(e);if(p(t))return new Map(Array.from(t.entries()).map(function(t){return[t[0],e(t[1])]}));if(h(t))return new Set(Array.from(t).map(e));var r=Object.create(Object.getPrototypeOf(t));for(var n in t)r[n]=e(t[n]);return l(t,Q)&&(r[Q]=t[Q]),r}function t(t){return n(t)?e(t):t}x("Patches",{$:function(t,n){return n.forEach(function(n){for(var i=n.path,o=n.op,a=t,l=0;l<i.length-1;l++){var u=s(a),d=i[l];"string"!=typeof d&&"number"!=typeof d&&(d=""+d),0!==u&&1!==u||"__proto__"!==d&&"constructor"!==d||r(24),"function"==typeof a&&"prototype"===d&&r(24),"object"!=typeof(a=c(a,d))&&r(15,i.join("/"))}var f=s(a),p=e(n.value),h=i[i.length-1];switch(o){case"replace":switch(f){case 2:return a.set(h,p);case 3:r(16);default:return a[h]=p}case"add":switch(f){case 1:return"-"===h?a.push(p):a.splice(h,0,p);case 2:return a.set(h,p);case 3:return a.add(p);default:return a[h]=p}case"remove":switch(f){case 1:return a.splice(h,1);case 2:return a.delete(h);case 3:return a.delete(n.value);default:return delete a[h]}default:r(17,o)}}),t},N:function(e,r,n,i){var o,s,u,d,f;switch(e.i){case 0:case 4:case 2:return o=e.t,s=e.o,void a(e.R,function(e,a){var u=c(o,e),d=c(s,e),f=a?l(o,e)?"replace":"add":"remove";if(u!==d||"replace"!==f){var p=r.concat(e);n.push("remove"===f?{op:f,path:p}:{op:f,path:p,value:d}),i.push("add"===f?{op:"remove",path:p}:"remove"===f?{op:"add",path:p,value:t(u)}:{op:"replace",path:p,value:t(u)})}});case 5:case 1:return function(e,r,n,i){var o=e.t,a=e.R,s=e.o;if(s.length<o.length){var l=[s,o];o=l[0],s=l[1];var u=[i,n];n=u[0],i=u[1]}for(var c=0;c<o.length;c++)if(a[c]&&s[c]!==o[c]){var d=r.concat([c]);n.push({op:"replace",path:d,value:t(s[c])}),i.push({op:"replace",path:d,value:t(o[c])})}for(var f=o.length;f<s.length;f++){var p=r.concat([f]);n.push({op:"add",path:p,value:t(s[f])})}o.length<s.length&&i.push({op:"replace",path:r.concat(["length"]),value:o.length})}(e,r,n,i);case 3:return u=e.t,d=e.o,f=0,void(u.forEach(function(e){if(!d.has(e)){var t=r.concat([f]);n.push({op:"remove",path:t,value:e}),i.unshift({op:"add",path:t,value:e})}f++}),f=0,d.forEach(function(e){if(!u.has(e)){var t=r.concat([f]);n.push({op:"add",path:t,value:e}),i.unshift({op:"remove",path:t,value:e})}f++}))}},M:function(e,t,r,n){r.push({op:"replace",path:[],value:t===X?void 0:t}),n.push({op:"replace",path:[],value:e})}})}function B(){function e(e,t){function r(){this.constructor=e}s(e,t),e.prototype=(r.prototype=t.prototype,new r)}function t(e){e.o||(e.R=new Map,e.o=new Map(e.t))}function n(e){e.o||(e.o=new Set,e.t.forEach(function(t){if(i(t)){var r=j(e.A.h,t,e);e.p.set(t,r),e.o.add(r)}else e.o.add(t)}))}function o(e){e.g&&r(3,JSON.stringify(m(e)))}var s=function(e,t){return(s=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)},l=function(){function r(e,t){return this[Y]={i:2,l:t,A:t?t.A:q,P:!1,I:!1,o:void 0,R:void 0,t:e,k:this,C:!1,g:!1},this}e(r,Map);var n=r.prototype;return Object.defineProperty(n,"size",{get:function(){return m(this[Y]).size}}),n.has=function(e){return m(this[Y]).has(e)},n.set=function(e,r){var n=this[Y];return o(n),m(n).has(e)&&m(n).get(e)===r||(t(n),N(n),n.R.set(e,!0),n.o.set(e,r),n.R.set(e,!0)),this},n.delete=function(e){if(!this.has(e))return!1;var r=this[Y];return o(r),t(r),N(r),r.t.has(e)?r.R.set(e,!1):r.R.delete(e),r.o.delete(e),!0},n.clear=function(){var e=this[Y];o(e),m(e).size&&(t(e),N(e),e.R=new Map,a(e.t,function(t){e.R.set(t,!1)}),e.o.clear())},n.forEach=function(e,t){var r=this;m(this[Y]).forEach(function(n,i){e.call(t,r.get(i),i,r)})},n.get=function(e){var r=this[Y];o(r);var n=m(r).get(e);if(r.I||!i(n)||n!==r.t.get(e))return n;var a=j(r.A.h,n,r);return t(r),r.o.set(e,a),a},n.keys=function(){return m(this[Y]).keys()},n.values=function(){var e,t=this,r=this.keys();return(e={})[Z]=function(){return t.values()},e.next=function(){var e=r.next();return e.done?e:{done:!1,value:t.get(e.value)}},e},n.entries=function(){var e,t=this,r=this.keys();return(e={})[Z]=function(){return t.entries()},e.next=function(){var e=r.next();if(e.done)return e;var n=t.get(e.value);return{done:!1,value:[e.value,n]}},e},n[Z]=function(){return this.entries()},r}(),u=function(){function t(e,t){return this[Y]={i:3,l:t,A:t?t.A:q,P:!1,I:!1,o:void 0,t:e,k:this,p:new Map,g:!1,C:!1},this}e(t,Set);var r=t.prototype;return Object.defineProperty(r,"size",{get:function(){return m(this[Y]).size}}),r.has=function(e){var t=this[Y];return o(t),t.o?!!t.o.has(e)||!(!t.p.has(e)||!t.o.has(t.p.get(e))):t.t.has(e)},r.add=function(e){var t=this[Y];return o(t),this.has(e)||(n(t),N(t),t.o.add(e)),this},r.delete=function(e){if(!this.has(e))return!1;var t=this[Y];return o(t),n(t),N(t),t.o.delete(e)||!!t.p.has(e)&&t.o.delete(t.p.get(e))},r.clear=function(){var e=this[Y];o(e),m(e).size&&(n(e),N(e),e.o.clear())},r.values=function(){var e=this[Y];return o(e),n(e),e.o.values()},r.entries=function(){var e=this[Y];return o(e),n(e),e.o.entries()},r.keys=function(){return this.values()},r[Z]=function(){return this.values()},r.forEach=function(e,t){for(var r=this.values(),n=r.next();!n.done;)e.call(t,n.value,n.value,this),n=r.next()},t}();x("MapSet",{F:function(e,t){return new l(e,t)},T:function(e,t){return new u(e,t)}})}function z(){F(),B(),U()}function $(e){return e}function V(e){return e}u(e.exports,"isDraft",()=>n),u(e.exports,"isDraftable",()=>i),u(e.exports,"immerable",()=>Q),u(e.exports,"original",()=>o),u(e.exports,"freeze",()=>y),u(e.exports,"nothing",()=>X),u(e.exports,"current",()=>D),u(e.exports,"enableES5",()=>F),u(e.exports,"enablePatches",()=>U),u(e.exports,"enableMapSet",()=>B),u(e.exports,"enableAllPlugins",()=>z),u(e.exports,"castDraft",()=>$),u(e.exports,"castImmutable",()=>V),u(e.exports,"Immer",()=>ea),u(e.exports,"produce",()=>el),u(e.exports,"produceWithPatches",()=>eu),u(e.exports,"setAutoFreeze",()=>ec),u(e.exports,"setUseProxies",()=>ed),u(e.exports,"applyPatches",()=>ef),u(e.exports,"createDraft",()=>ep),u(e.exports,"finishDraft",()=>eh),u(e.exports,"default",()=>em);var H,q,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),K="undefined"!=typeof Map,J="undefined"!=typeof Set,G="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,X=W?Symbol.for("immer-nothing"):((H={})["immer-nothing"]=!0,H),Q=W?Symbol.for("immer-draftable"):"__$immer_draftable",Y=W?Symbol.for("immer-state"):"__$immer_state",Z="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",ee=""+Object.prototype.constructor,et="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,er=Object.getOwnPropertyDescriptors||function(e){var t={};return et(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},en={},ei={get:function(e,t){if(t===Y)return e;var r,n,o=m(e);if(!l(o,t))return(n=A(o,t))?"value"in n?n.value:null===(r=n.get)||void 0===r?void 0:r.call(e.k):void 0;var a=o[t];return e.I||!i(a)?a:a===R(e.t,t)?(M(e),e.o[t]=j(e.A.h,a,e)):a},has:function(e,t){return t in m(e)},ownKeys:function(e){return Reflect.ownKeys(m(e))},set:function(e,t,r){var n=A(m(e),t);if(null==n?void 0:n.set)return n.set.call(e.k,r),!0;if(!e.P){var i=R(m(e),t),o=null==i?void 0:i[Y];if(o&&o.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(f(r,i)&&(void 0!==r||l(e.t,t)))return!0;M(e),N(e)}return e.o[t]===r&&(void 0!==r||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return void 0!==R(e.t,t)||t in e.t?(e.R[t]=!1,M(e),N(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=m(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty:function(){r(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){r(12)}},eo={};a(ei,function(e,t){eo[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),eo.deleteProperty=function(e,t){return eo.set.call(this,e,t,void 0)},eo.set=function(e,t,r){return ei.set.call(this,e[0],t,r,e[0])};var ea=function(){function e(e){var t=this;this.O=G,this.D=!0,this.produce=function(e,n,o){if("function"==typeof e&&"function"!=typeof n){var a,s=n;return n=e,function(e){var r=this;void 0===e&&(e=s);for(var i=arguments.length,o=Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];return t.produce(e,function(e){var t;return(t=n).call.apply(t,[r,e].concat(o))})}}if("function"!=typeof n&&r(6),void 0!==o&&"function"!=typeof o&&r(7),i(e)){var l=P(t),u=j(t,e,void 0),c=!0;try{a=n(u),c=!1}finally{c?E(l):S(l)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then(function(e){return _(l,o),I(e,l)},function(e){throw E(l),e}):(_(l,o),I(a,l))}if(!e||"object"!=typeof e){if(void 0===(a=n(e))&&(a=e),a===X&&(a=void 0),t.D&&y(a,!0),o){var d=[],f=[];w("Patches").M(e,a,d,f),o(d,f)}return a}r(21,e)},this.produceWithPatches=function(e,r){if("function"==typeof e)return function(r){for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return t.produceWithPatches(r,function(t){return e.apply(void 0,[t].concat(i))})};var n,i,o=t.produce(e,r,function(e,t){n=e,i=t});return"undefined"!=typeof Promise&&o instanceof Promise?o.then(function(e){return[e,n,i]}):[o,n,i]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var t=e.prototype;return t.createDraft=function(e){i(e)||r(8),n(e)&&(e=D(e));var t=P(this),o=j(this,e,void 0);return o[Y].C=!0,S(t),o},t.finishDraft=function(e,t){var r=(e&&e[Y]).A;return _(r,t),I(void 0,r)},t.setAutoFreeze=function(e){this.D=e},t.setUseProxies=function(e){e&&!G&&r(20),this.O=e},t.applyPatches=function(e,t){for(r=t.length-1;r>=0;r--){var r,i=t[r];if(0===i.path.length&&"replace"===i.op){e=i.value;break}}r>-1&&(t=t.slice(r+1));var o=w("Patches").$;return n(e)?o(e,t):this.produce(e,function(e){return o(e,t)})},e}(),es=new ea,el=es.produce,eu=es.produceWithPatches.bind(es),ec=es.setAutoFreeze.bind(es),ed=es.setUseProxies.bind(es),ef=es.applyPatches.bind(es),ep=es.createDraft.bind(es),eh=es.finishDraft.bind(es),em=el}),B("cM6Z0",function(e,t){// File generated from our OpenAPI spec by Stainless.
var r,n,i=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&i(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.fileFromPath=t.toFile=t.UnprocessableEntityError=t.PermissionDeniedError=t.InternalServerError=t.AuthenticationError=t.BadRequestError=t.RateLimitError=t.ConflictError=t.NotFoundError=t.APIUserAbortError=t.APIConnectionTimeoutError=t.APIConnectionError=t.APIError=t.OpenAIError=t.OpenAI=void 0;let s=a(U("9xH07")),l=a(U("61UiY")),u=a(U("hTt11")),c=a(U("laDyk")),d=a(U("1X4UA"));/** API Client for interfacing with the OpenAI API. */class f extends s.APIClient{/**
     * API Client for interfacing with the OpenAI API.
     *
     * @param {string} [opts.apiKey==process.env['OPENAI_API_KEY'] ?? undefined]
     * @param {string | null} [opts.organization==process.env['OPENAI_ORG_ID'] ?? null]
     * @param {string} [opts.baseURL] - Override the default base URL for the API.
     * @param {number} [opts.timeout=10 minutes] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
     * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
     * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
     * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
     * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
     * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
     * @param {boolean} [opts.dangerouslyAllowBrowser=false] - By default, client-side use of this library is not allowed, as it risks exposing your secret API credentials to attackers.
     */constructor({apiKey:e=s.readEnv("OPENAI_API_KEY"),organization:t=s.readEnv("OPENAI_ORG_ID")??null,...r}={}){if(void 0===e)throw new u.OpenAIError("The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).");let n={apiKey:e,organization:t,...r,baseURL:r.baseURL??"https://api.openai.com/v1"};if(!n.dangerouslyAllowBrowser&&s.isRunningInBrowser())throw new u.OpenAIError("It looks like you're running in a browser-like environment.\n\nThis is disabled by default, as it risks exposing your secret API credentials to attackers.\nIf you understand the risks and have appropriate mitigations in place,\nyou can set the `dangerouslyAllowBrowser` option to `true`, e.g.,\n\nnew OpenAI({ apiKey, dangerouslyAllowBrowser: true });\n\nhttps://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety\n");super({baseURL:n.baseURL,timeout:n.timeout??6e5/* 10 minutes */,httpAgent:n.httpAgent,maxRetries:n.maxRetries,fetch:n.fetch}),this.completions=new d.Completions(this),this.chat=new d.Chat(this),this.edits=new d.Edits(this),this.embeddings=new d.Embeddings(this),this.files=new d.Files(this),this.images=new d.Images(this),this.audio=new d.Audio(this),this.moderations=new d.Moderations(this),this.models=new d.Models(this),this.fineTuning=new d.FineTuning(this),this.fineTunes=new d.FineTunes(this),this.beta=new d.Beta(this),this._options=n,this.apiKey=e,this.organization=t}defaultQuery(){return this._options.defaultQuery}defaultHeaders(e){return{...super.defaultHeaders(e),"OpenAI-Organization":this.organization,...this._options.defaultHeaders}}authHeaders(e){return{Authorization:`Bearer ${this.apiKey}`}}}t.OpenAI=f,n=f,f.OpenAI=n,f.OpenAIError=u.OpenAIError,f.APIError=u.APIError,f.APIConnectionError=u.APIConnectionError,f.APIConnectionTimeoutError=u.APIConnectionTimeoutError,f.APIUserAbortError=u.APIUserAbortError,f.NotFoundError=u.NotFoundError,f.ConflictError=u.ConflictError,f.RateLimitError=u.RateLimitError,f.BadRequestError=u.BadRequestError,f.AuthenticationError=u.AuthenticationError,f.InternalServerError=u.InternalServerError,f.PermissionDeniedError=u.PermissionDeniedError,f.UnprocessableEntityError=u.UnprocessableEntityError,t.OpenAIError=u.OpenAIError,t.APIError=u.APIError,t.APIConnectionError=u.APIConnectionError,t.APIConnectionTimeoutError=u.APIConnectionTimeoutError,t.APIUserAbortError=u.APIUserAbortError,t.NotFoundError=u.NotFoundError,t.ConflictError=u.ConflictError,t.RateLimitError=u.RateLimitError,t.BadRequestError=u.BadRequestError,t.AuthenticationError=u.AuthenticationError,t.InternalServerError=u.InternalServerError,t.PermissionDeniedError=u.PermissionDeniedError,t.UnprocessableEntityError=u.UnprocessableEntityError,t.toFile=c.toFile,t.fileFromPath=c.fileFromPath,// Helper functions
(r=f=t.OpenAI||(t.OpenAI={})).toFile=c.toFile,r.fileFromPath=c.fileFromPath,r.Page=l.Page,r.CursorPage=l.CursorPage,r.Completions=d.Completions,r.Chat=d.Chat,r.Edits=d.Edits,r.Embeddings=d.Embeddings,r.Files=d.Files,r.FileObjectsPage=d.FileObjectsPage,r.Images=d.Images,r.Audio=d.Audio,r.Moderations=d.Moderations,r.Models=d.Models,r.ModelsPage=d.ModelsPage,r.FineTuning=d.FineTuning,r.FineTunes=d.FineTunes,r.FineTunesPage=d.FineTunesPage,r.Beta=d.Beta,(t=e.exports=f).default=f}),B("9xH07",function(e,t){let r;var n,i=U("6ZWSX").Buffer,o=U("hPtJY"),a=e.exports&&e.exports.__classPrivateFieldSet||function(e,t,r,n,i){if("m"===n)throw TypeError("Private method is not writable");if("a"===n&&!i)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?i.call(e,r):i?i.value=r:t.set(e,r),r},s=e.exports&&e.exports.__classPrivateFieldGet||function(e,t,r,n){if("a"===r&&!n)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.toBase64=e.exports.getRequiredHeader=e.exports.isHeadersProtocol=e.exports.isRunningInBrowser=e.exports.debug=e.exports.hasOwn=e.exports.isEmptyObj=e.exports.maybeCoerceBoolean=e.exports.maybeCoerceFloat=e.exports.maybeCoerceInteger=e.exports.coerceBoolean=e.exports.coerceFloat=e.exports.coerceInteger=e.exports.readEnv=e.exports.ensurePresent=e.exports.castToError=e.exports.sleep=e.exports.safeJSON=e.exports.isRequestOptions=e.exports.createResponseHeaders=e.exports.PagePromise=e.exports.AbstractPage=e.exports.APIClient=e.exports.APIPromise=e.exports.createForm=e.exports.multipartFormRequestOptions=e.exports.maybeMultipartFormRequestOptions=void 0;var l=U("bNSG8"),u=U("9Dbsu"),c=U("hTt11"),d=U("dJFm5"),f=(U("laDyk"),U("laDyk"));async function p(e){let{response:t}=e;if(e.options.stream)// Note: there is an invariant here that isn't represented in the type system
// that if you set `stream: true` the response type must also be `Stream<T>`
return t.status,t.url,t.headers,t.body,u.Stream.fromSSEResponse(t,e.controller);// fetch refuses to read the body when the status code is 204.
if(204===t.status)return null;if(e.options.__binaryResponse)return t;let r=t.headers.get("content-type");if(r?.includes("application/json")){let e=await t.json();return t.status,t.url,t.headers,e}let n=await t.text();// TODO handle blob, arraybuffer, other content types, etc.
return t.status,t.url,t.headers,n}Object.defineProperty(e.exports,"maybeMultipartFormRequestOptions",{enumerable:!0,get:function(){return f.maybeMultipartFormRequestOptions}}),Object.defineProperty(e.exports,"multipartFormRequestOptions",{enumerable:!0,get:function(){return f.multipartFormRequestOptions}}),Object.defineProperty(e.exports,"createForm",{enumerable:!0,get:function(){return f.createForm}});/**
 * A subclass of `Promise` providing additional helper methods
 * for interacting with the SDK.
 */class h extends Promise{constructor(e,t=p){super(e=>{// this is maybe a bit weird but this has to be a no-op to not implicitly
// parse the response body; instead .then, .catch, .finally are overridden
// to parse the response
e(null)}),this.responsePromise=e,this.parseResponse=t}_thenUnwrap(e){return new h(this.responsePromise,async t=>e(await this.parseResponse(t)))}/**
     * Gets the raw `Response` instance instead of parsing the response
     * data.
     *
     * If you want to parse the response body but still get the `Response`
     * instance, you can use {@link withResponse()}.
     *
     * 👋 Getting the wrong TypeScript type for `Response`?
     * Try setting `"moduleResolution": "NodeNext"` if you can,
     * or add one of these imports before your first `import … from 'openai'`:
     * - `import 'openai/shims/node'` (if you're running on Node)
     * - `import 'openai/shims/web'` (otherwise)
     */asResponse(){return this.responsePromise.then(e=>e.response)}/**
     * Gets the parsed response data and the raw `Response` instance.
     *
     * If you just want to get the raw `Response` instance without parsing it,
     * you can use {@link asResponse()}.
     *
     *
     * 👋 Getting the wrong TypeScript type for `Response`?
     * Try setting `"moduleResolution": "NodeNext"` if you can,
     * or add one of these imports before your first `import … from 'openai'`:
     * - `import 'openai/shims/node'` (if you're running on Node)
     * - `import 'openai/shims/web'` (otherwise)
     */async withResponse(){let[e,t]=await Promise.all([this.parse(),this.asResponse()]);return{data:e,response:t}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(this.parseResponse)),this.parsedPromise}then(e,t){return this.parse().then(e,t)}catch(e){return this.parse().catch(e)}finally(e){return this.parse().finally(e)}}e.exports.APIPromise=h,e.exports.APIClient=class{constructor({baseURL:e,maxRetries:t=2,timeout:r=6e5,httpAgent:n,fetch:i}){this.baseURL=e,this.maxRetries=S("maxRetries",t),this.timeout=S("timeout",r),this.httpAgent=n,this.fetch=i??d.fetch}authHeaders(e){return{}}/**
     * Override this to add your own default headers, for example:
     *
     *  {
     *    ...super.defaultHeaders(),
     *    Authorization: 'Bearer 123',
     *  }
     */defaultHeaders(e){return{Accept:"application/json","Content-Type":"application/json","User-Agent":this.getUserAgent(),...x(),...this.authHeaders(e)}}/**
     * Override this to add your own headers validation:
     */validateHeaders(e,t){}defaultIdempotencyKey(){return`stainless-node-retry-${I()}`}get(e,t){return this.methodRequest("get",e,t)}post(e,t){return this.methodRequest("post",e,t)}patch(e,t){return this.methodRequest("patch",e,t)}put(e,t){return this.methodRequest("put",e,t)}delete(e,t){return this.methodRequest("delete",e,t)}methodRequest(e,t,r){return this.request(Promise.resolve(r).then(r=>({method:e,path:t,...r})))}getAPIList(e,t,r){return this.requestAPIList(t,{method:"get",path:e,...r})}calculateContentLength(e){if("string"==typeof e){if(void 0!==i)return i.byteLength(e,"utf8").toString();if("undefined"!=typeof TextEncoder){let t=new TextEncoder,r=t.encode(e);return r.length.toString()}}return null}buildRequest(e){let{method:t,path:r,query:n,headers:i={}}=e,o=(0,f.isMultipartBody)(e.body)?e.body.body:e.body?JSON.stringify(e.body,null,2):null,a=this.calculateContentLength(o),s=this.buildURL(r,n);"timeout"in e&&S("timeout",e.timeout);let l=e.timeout??this.timeout,u=e.httpAgent??this.httpAgent??(0,d.getDefaultAgent)(s),c=l+1e3;"number"==typeof u?.options?.timeout&&c>(u.options.timeout??0)&&// This may seem strange, but leaking active sockets should be rare and not particularly problematic,
// and without mutating agent we would need to create more of them.
// This tradeoff optimizes for performance.
(u.options.timeout=c),this.idempotencyHeader&&"get"!==t&&(e.idempotencyKey||(e.idempotencyKey=this.defaultIdempotencyKey()),i[this.idempotencyHeader]=e.idempotencyKey);let p={...a&&{"Content-Length":a},...this.defaultHeaders(e),...i};(0,f.isMultipartBody)(e.body)&&"node"!==d.kind&&delete p["Content-Type"],// Strip any headers being explicitly omitted with null
Object.keys(p).forEach(e=>null===p[e]&&delete p[e]);let h={method:t,...o&&{body:o},headers:p,...u&&{agent:u},// @ts-ignore node-fetch uses a custom AbortSignal type that is
// not compatible with standard web types
signal:e.signal??null};return this.validateHeaders(p,i),{req:h,url:s,timeout:l}}/**
     * Used as a callback for mutating the given `RequestInit` object.
     *
     * This is useful for cases where you want to add certain headers based off of
     * the request properties, e.g. `method` or `url`.
     */async prepareRequest(e,{url:t,options:r}){}parseHeaders(e){return e?Symbol.iterator in e?Object.fromEntries(Array.from(e).map(e=>[...e])):{...e}:{}}makeStatusError(e,t,r,n){return c.APIError.generate(e,t,r,n)}request(e,t=null){return new h(this.makeRequest(e,t))}async makeRequest(t,r){let n=await t;null==r&&(r=n.maxRetries??this.maxRetries);let{req:i,url:o,timeout:a}=this.buildRequest(n);if(await this.prepareRequest(i,{url:o,options:n}),i.headers,n.signal?.aborted)throw new c.APIUserAbortError;let s=new AbortController,l=await this.fetchWithTimeout(o,i,a,s).catch(e.exports.castToError);if(l instanceof Error){if(n.signal?.aborted)throw new c.APIUserAbortError;if(r)return this.retryRequest(n,r);if("AbortError"===l.name)throw new c.APIConnectionTimeoutError;throw new c.APIConnectionError({cause:l})}let u=(0,e.exports.createResponseHeaders)(l.headers);if(!l.ok){if(r&&this.shouldRetry(l))return this.retryRequest(n,r,u);let t=await l.text().catch(t=>(0,e.exports.castToError)(t).message),i=(0,e.exports.safeJSON)(t),o=i?void 0:t;l.status;let a=this.makeStatusError(l.status,i,o,u);throw a}return{response:l,options:n,controller:s}}requestAPIList(e,t){let r=this.makeRequest(t,null);return new g(this,r,e)}buildURL(e,t){let r=new URL(E(e)?e:this.baseURL+(this.baseURL.endsWith("/")&&e.startsWith("/")?e.slice(1):e)),n=this.defaultQuery();return P(n)||(t={...n,...t}),t&&(r.search=this.stringifyQuery(t)),r.toString()}stringifyQuery(e){return Object.entries(e).filter(([e,t])=>void 0!==t).map(([e,t])=>{if("string"==typeof t||"number"==typeof t||"boolean"==typeof t)return`${encodeURIComponent(e)}=${encodeURIComponent(t)}`;if(null===t)return`${encodeURIComponent(e)}=`;throw new c.OpenAIError(`Cannot stringify type ${typeof t}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)}).join("&")}async fetchWithTimeout(e,t,r,n){let{signal:i,...o}=t||{};i&&i.addEventListener("abort",()=>n.abort());let a=setTimeout(()=>n.abort(),r);return this.getRequestClient()// use undefined this binding; fetch errors if bound to something else in browser/cloudflare
.fetch.call(void 0,e,{signal:n.signal,...o}).finally(()=>{clearTimeout(a)})}getRequestClient(){return{fetch:this.fetch}}shouldRetry(e){// Note this is not a standard header.
let t=e.headers.get("x-should-retry");return(// If the server explicitly says whether or not to retry, obey.
"true"===t||"false"!==t&&(408===e.status||409===e.status||429===e.status||e.status>=500))}async retryRequest(t,r,n){let i;let o=n?.["retry-after"];if(o){let e=parseInt(o);i=Number.isNaN(e)?Date.parse(o)-Date.now():1e3*e}// If the API asks us to wait a certain amount of time (and it's a reasonable amount),
// just do what it says, but otherwise calculate a default
if(!i||!Number.isInteger(i)||i<=0||i>6e4){let e=t.maxRetries??this.maxRetries;i=this.calculateDefaultRetryTimeoutMillis(r,e)}return await (0,e.exports.sleep)(i),this.makeRequest(t,r-1)}calculateDefaultRetryTimeoutMillis(e,t){return Math.min(.5*Math.pow(2,t-e),8)*(1-.25*Math.random())*1e3}getUserAgent(){return`${this.constructor.name}/JS ${l.VERSION}`}};class m{constructor(e,t,r,i){n.set(this,void 0),a(this,n,e,"f"),this.options=i,this.response=t,this.body=r}hasNextPage(){let e=this.getPaginatedItems();return!!e.length&&null!=this.nextPageInfo()}async getNextPage(){let e=this.nextPageInfo();if(!e)throw new c.OpenAIError("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");let t={...this.options};if("params"in e)t.query={...t.query,...e.params};else if("url"in e){let r=[...Object.entries(t.query||{}),...e.url.searchParams.entries()];for(let[t,n]of r)e.url.searchParams.set(t,n);t.query=void 0,t.path=e.url.toString()}return await s(this,n,"f").requestAPIList(this.constructor,t)}async *iterPages(){// eslint-disable-next-line @typescript-eslint/no-this-alias
let e=this;for(yield e;e.hasNextPage();)e=await e.getNextPage(),yield e}async *[(n=new WeakMap,Symbol.asyncIterator)](){for await(let e of this.iterPages())for(let t of e.getPaginatedItems())yield t}}e.exports.AbstractPage=m;/**
 * This subclass of Promise will resolve to an instantiated Page once the request completes.
 *
 * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
 *
 *    for await (const item of client.items.list()) {
 *      console.log(item)
 *    }
 */class g extends h{constructor(e,t,r){super(t,async t=>new r(e,t.response,await p(t),t.options))}/**
     * Allow auto-paginating iteration on an unawaited list call, eg:
     *
     *    for await (const item of client.items.list()) {
     *      console.log(item)
     *    }
     */async *[Symbol.asyncIterator](){let e=await this;for await(let t of e)yield t}}e.exports.PagePromise=g,e.exports.createResponseHeaders=e=>new Proxy(Object.fromEntries(e.entries()),{get(e,t){let r=t.toString();return e[r.toLowerCase()]||e[r]}});// This is required so that we can determine if a given object matches the RequestOptions
// type at runtime. While this requires duplication, it is enforced by the TypeScript
// compiler such that any missing / extraneous keys will cause an error.
let y={method:!0,path:!0,query:!0,body:!0,headers:!0,maxRetries:!0,stream:!0,timeout:!0,httpAgent:!0,signal:!0,idempotencyKey:!0,__binaryResponse:!0};e.exports.isRequestOptions=e=>"object"==typeof e&&null!==e&&!P(e)&&Object.keys(e).every(e=>k(y,e));let v=()=>{if("undefined"!=typeof Deno&&null!=Deno.build)return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":l.VERSION,"X-Stainless-OS":w(Deno.build.os),"X-Stainless-Arch":b(Deno.build.arch),"X-Stainless-Runtime":"deno","X-Stainless-Runtime-Version":Deno.version};if("undefined"!=typeof EdgeRuntime)return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":l.VERSION,"X-Stainless-OS":"Unknown","X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":"edge","X-Stainless-Runtime-Version":o.version};// Check if Node.js
if("[object process]"===Object.prototype.toString.call(void 0!==o?o:0))return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":l.VERSION,"X-Stainless-OS":w(o.platform),"X-Stainless-Arch":b(o.arch),"X-Stainless-Runtime":"node","X-Stainless-Runtime-Version":o.version};let e=// Note: modified from https://github.com/JS-DevTools/host-environment/blob/b1ab79ecde37db5d6e163c050e54fe7d287d7c92/src/isomorphic.browser.ts
function(){if("undefined"==typeof navigator||!navigator)return null;// Find the FIRST matching browser
for(let{key:e,pattern:t}of[{key:"edge",pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"chrome",pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"firefox",pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"safari",pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}]){let r=t.exec(navigator.userAgent);if(r){let t=r[1]||0,n=r[2]||0,i=r[3]||0;return{browser:e,version:`${t}.${n}.${i}`}}}return null}();return e?{"X-Stainless-Lang":"js","X-Stainless-Package-Version":l.VERSION,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":`browser:${e.browser}`,"X-Stainless-Runtime-Version":e.version}:{"X-Stainless-Lang":"js","X-Stainless-Package-Version":l.VERSION,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":"unknown","X-Stainless-Runtime-Version":"unknown"}},b=e=>// Node docs:
    // - https://nodejs.org/api/process.html#processarch
    // Deno docs:
    // - https://doc.deno.land/deno/stable/~/Deno.build
    "x32"===e?"x32":"x86_64"===e||"x64"===e?"x64":"arm"===e?"arm":"aarch64"===e||"arm64"===e?"arm64":e?`other:${e}`:"unknown",w=e=>// NOTE: this iOS check is untested and may not work
    // Node does not work natively on IOS, there is a fork at
    // https://github.com/nodejs-mobile/nodejs-mobile
    // however it is unknown at the time of writing how to detect if it is running
    // Node platforms:
    // - https://nodejs.org/api/process.html#processplatform
    // Deno platforms:
    // - https://doc.deno.land/deno/stable/~/Deno.build
    // - https://github.com/denoland/deno/issues/14799
    (e=e.toLowerCase()).includes("ios")?"iOS":"android"===e?"Android":"darwin"===e?"MacOS":"win32"===e?"Windows":"freebsd"===e?"FreeBSD":"openbsd"===e?"OpenBSD":"linux"===e?"Linux":e?`Other:${e}`:"Unknown",x=()=>r??(r=v());e.exports.safeJSON=e=>{try{return JSON.parse(e)}catch(e){return}};// https://stackoverflow.com/a/19709846
let _=RegExp("^(?:[a-z]+:)?//","i"),E=e=>_.test(e);e.exports.sleep=e=>new Promise(t=>setTimeout(t,e));let S=(e,t)=>{if("number"!=typeof t||!Number.isInteger(t))throw new c.OpenAIError(`${e} must be an integer`);if(t<0)throw new c.OpenAIError(`${e} must be a positive integer`);return t};// https://stackoverflow.com/a/34491287
function P(e){if(!e)return!0;for(let t in e)return!1;return!0}// https://eslint.org/docs/latest/rules/no-prototype-builtins
function k(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports.castToError=e=>e instanceof Error?e:Error(e),e.exports.ensurePresent=e=>{if(null==e)throw new c.OpenAIError(`Expected a value to be given but received ${e} instead.`);return e},e.exports.readEnv=e=>void 0!==o?o.env?.[e]??void 0:"undefined"!=typeof Deno?Deno.env?.get?.(e):void 0,e.exports.coerceInteger=e=>{if("number"==typeof e)return Math.round(e);if("string"==typeof e)return parseInt(e,10);throw new c.OpenAIError(`Could not coerce ${e} (type: ${typeof e}) into a number`)},e.exports.coerceFloat=e=>{if("number"==typeof e)return e;if("string"==typeof e)return parseFloat(e);throw new c.OpenAIError(`Could not coerce ${e} (type: ${typeof e}) into a number`)},e.exports.coerceBoolean=e=>"boolean"==typeof e?e:"string"==typeof e?"true"===e:!!e,e.exports.maybeCoerceInteger=t=>{if(void 0!==t)return(0,e.exports.coerceInteger)(t)},e.exports.maybeCoerceFloat=t=>{if(void 0!==t)return(0,e.exports.coerceFloat)(t)},e.exports.maybeCoerceBoolean=t=>{if(void 0!==t)return(0,e.exports.coerceBoolean)(t)},e.exports.isEmptyObj=P,e.exports.hasOwn=k,e.exports.debug=function(e,...t){};/**
 * https://stackoverflow.com/a/2117523
 */let I=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)});e.exports.isRunningInBrowser=()=>"undefined"!=typeof window&&// @ts-ignore
    void 0!==window.document&&// @ts-ignore
    "undefined"!=typeof navigator,e.exports.isHeadersProtocol=e=>"function"==typeof e?.get,e.exports.getRequiredHeader=(t,r)=>{let n=r.toLowerCase();if((0,e.exports.isHeadersProtocol)(t)){// to deal with the case where the header looks like Stainless-Event-Id
let e=r[0]?.toUpperCase()+r.substring(1).replace(/([^\w])(\w)/g,(e,t,r)=>t+r.toUpperCase());for(let i of[r,n,r.toUpperCase(),e]){let e=t.get(i);if(e)return e}}for(let[e,i]of Object.entries(t))if(e.toLowerCase()===n){if(Array.isArray(i)){if(i.length<=1)return i[0];return console.warn(`Received ${i.length} entries for the ${r} header, using the first entry.`),i[0]}return i}throw Error(`Could not find ${r} header`)},e.exports.toBase64=e=>{if(!e)return"";if(void 0!==i)return i.from(e).toString("base64");if("undefined"!=typeof btoa)return btoa(e);throw new c.OpenAIError("Cannot generate b64 string; Expected `Buffer` or `btoa` to be defined")}}),B("6ZWSX",function(e,t){u(e.exports,"Buffer",()=>r,e=>r=e),u(e.exports,"INSPECT_MAX_BYTES",()=>n,e=>n=e);var r,n,i=U("kuxul"),o=U("9NvM5");let a="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function s(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let t=new Uint8Array(e);return Object.setPrototypeOf(t,l.prototype),t}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function l(e,t,r){// Common case.
if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return f(e)}return c(e,t,r)}function c(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!l.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|g(e,t),n=s(r),i=n.write(e,t);return i!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(B(e,Uint8Array)){let t=new Uint8Array(e);return h(t.buffer,t.byteOffset,t.byteLength)}return p(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(B(e,ArrayBuffer)||e&&B(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(B(e,SharedArrayBuffer)||e&&B(e.buffer,SharedArrayBuffer)))return h(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return l.from(n,t,r);let i=function(e){var t;if(l.isBuffer(e)){let t=0|m(e.length),r=s(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t// eslint-disable-line no-self-compare
?s(0):p(e):"Buffer"===e.type&&Array.isArray(e.data)?p(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return l.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function d(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function f(e){return d(e),s(e<0?0:0|m(e))}function p(e){let t=e.length<0?0:0|m(e.length),r=s(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function h(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),l.prototype),n)}function m(e){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function g(e,t){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||B(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;// Use a for loop to avoid recursion
let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return D(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return L(e).length;default:if(i)return n?-1:D(e).length// assume utf8
;t=(""+t).toLowerCase(),i=!0}}function y(e,t,r){let n=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=z[e[n]];return i}(this,t,r);case"utf8":case"utf-8":return x(this,t,r);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":var o,a;return o=t,a=r,0===o&&a===this.length?i.fromByteArray(this):i.fromByteArray(this.slice(o,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),i="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}(this,t,r);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function v(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function b(e,t,r,n,i){var o;// Empty buffer means no match
if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(o=r=+r// Coerce to Number.
)!=o&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof t&&(t=l.from(t,n)),l.isBuffer(t))return(// Special case: looking for empty string/buffer always fails
0===t.length?-1:w(e,t,r,n,i));if("number"==typeof t)return(t&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):w(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function w(e,t,r,n,i){let o,a=1,s=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;a=2,s/=2,l/=2,r/=2}function u(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){let n=-1;for(o=r;o<s;o++)if(u(e,o)===u(t,-1===n?0:o-n)){if(-1===n&&(n=o),o-n+1===l)return n*a}else -1!==n&&(o-=o-n),n=-1}else for(r+l>s&&(r=s-l),o=r;o>=0;o--){let r=!0;for(let n=0;n<l;n++)if(u(e,o+n)!==u(t,n)){r=!1;break}if(r)return o}return -1}function x(e,t,r){r=Math.min(e.length,r);let n=[],i=t;for(;i<r;){let t=e[i],o=null,a=t>239?4:t>223?3:t>191?2:1;if(i+a<=r){let r,n,s,l;switch(a){case 1:t<128&&(o=t);break;case 2:(192&(r=e[i+1]))==128&&(l=(31&t)<<6|63&r)>127&&(o=l);break;case 3:r=e[i+1],n=e[i+2],(192&r)==128&&(192&n)==128&&(l=(15&t)<<12|(63&r)<<6|63&n)>2047&&(l<55296||l>57343)&&(o=l);break;case 4:r=e[i+1],n=e[i+2],s=e[i+3],(192&r)==128&&(192&n)==128&&(192&s)==128&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&s)>65535&&l<1114112&&(o=l)}}null===o?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
o=65533,a=1):o>65535&&(// encode to utf16 (surrogate pair dance)
o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=a}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function _(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function E(e,t,r,n,i,o){if(!l.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<o)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function S(e,t,r,n,i){A(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,r}function P(e,t,r,n,i){A(t,n,i,e,r,7);let o=Number(t&BigInt(4294967295));e[r+7]=o,o>>=8,e[r+6]=o,o>>=8,e[r+5]=o,o>>=8,e[r+4]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=a,a>>=8,e[r+2]=a,a>>=8,e[r+1]=a,a>>=8,e[r]=a,r+8}function k(e,t,r,n,i,o){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function I(e,t,r,n,i){return t=+t,r>>>=0,i||k(e,t,r,4,34028234663852886e22,-34028234663852886e22),o.write(e,t,r,n,23,4),r+4}function O(e,t,r,n,i){return t=+t,r>>>=0,i||k(e,t,r,8,17976931348623157e292,-17976931348623157e292),o.write(e,t,r,n,52,8),r+8}r=l,n=50,/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */l.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),l.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/l.from=function(e,t,r){return c(e,t,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/l.alloc=function(e,t,r){return(d(e),e<=0)?s(e):void 0!==t?"string"==typeof r?s(e).fill(t,r):s(e).fill(t):s(e)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */l.allocUnsafe=function(e){return f(e)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */l.allocUnsafeSlow=function(e){return f(e)},l.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==l.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},l.compare=function(e,t){if(B(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),B(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,o=Math.min(r,n);i<o;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let n=l.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){let t=e[r];if(B(t,Uint8Array))i+t.length>n.length?(l.isBuffer(t)||(t=l.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else if(l.isBuffer(t))t.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return n},l.byteLength=g,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
l.prototype._isBuffer=!0,l.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)v(this,t,t+1);return this},l.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)v(this,t,t+3),v(this,t+1,t+2);return this},l.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)v(this,t,t+7),v(this,t+1,t+6),v(this,t+2,t+5),v(this,t+3,t+4);return this},l.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?x(this,0,e):y.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(e){if(!l.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){let e="",t=n;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},a&&(l.prototype[a]=l.prototype.inspect),l.prototype.compare=function(e,t,r,n,i){if(B(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;let o=i-n,a=r-t,s=Math.min(o,a),u=this.slice(n,i),c=e.slice(t,r);for(let e=0;e<s;++e)if(u[e]!==c[e]){o=u[e],a=c[e];break}return o<a?-1:a<o?1:0},l.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},l.prototype.indexOf=function(e,t,r){return b(this,e,t,r,!0)},l.prototype.lastIndexOf=function(e,t,r){return b(this,e,t,r,!1)},l.prototype.write=function(e,t,r,n){var i,o,a,s,l,u,c,d;// Buffer#write(string)
if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let f=this.length-t;if((void 0===r||r>f)&&(r=f),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let p=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let i;r=Number(r)||0;let o=e.length-r;n?(n=Number(n))>o&&(n=o):n=o;let a=t.length;for(n>a/2&&(n=a/2),i=0;i<n;++i){let n=parseInt(t.substr(2*i,2),16);if(n!=n)break;e[r+i]=n}return i}(this,e,t,r);case"utf8":case"utf-8":return i=t,o=r,F(D(e,this.length-i),this,i,o);case"ascii":case"latin1":case"binary":return a=t,s=r,F(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,a,s);case"base64":// Warning: maxLength not taken into account in base64Write
return l=t,u=r,F(L(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=t,d=r,F(function(e,t){let r,n;let i=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=(r=e.charCodeAt(o))>>8,i.push(r%256),i.push(n);return i}(e,this.length-c),this,c,d);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},l.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,l.prototype),n)},l.prototype.readUintLE=l.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||_(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return n},l.prototype.readUintBE=l.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||_(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},l.prototype.readUint8=l.prototype.readUInt8=function(e,t){return e>>>=0,t||_(e,1,this.length),this[e]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,t){return e>>>=0,t||_(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,t){return e>>>=0,t||_(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,t){return e>>>=0,t||_(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,t){return e>>>=0,t||_(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readBigUInt64LE=$(function(e){N(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&M(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+16777216*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),l.prototype.readBigUInt64BE=$(function(e){N(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&M(e,this.length-8);let n=16777216*t+65536*this[++e]+256*this[++e]+this[++e],i=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),l.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||_(e,t,this.length);let n=this[e],i=1,o=0;for(;++o<t&&(i*=256);)n+=this[e+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},l.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||_(e,t,this.length);let n=t,i=1,o=this[e+--n];for(;n>0&&(i*=256);)o+=this[e+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*t)),o},l.prototype.readInt8=function(e,t){return(e>>>=0,t||_(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},l.prototype.readInt16LE=function(e,t){e>>>=0,t||_(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt16BE=function(e,t){e>>>=0,t||_(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},l.prototype.readInt32LE=function(e,t){return e>>>=0,t||_(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return e>>>=0,t||_(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readBigInt64LE=$(function(e){N(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&M(e,this.length-8);let n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24// Overflow
);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),l.prototype.readBigInt64BE=$(function(e){N(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&M(e,this.length-8);let n=(t<<24)+// Overflow
65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),l.prototype.readFloatLE=function(e,t){return e>>>=0,t||_(e,4,this.length),o.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return e>>>=0,t||_(e,4,this.length),o.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return e>>>=0,t||_(e,8,this.length),o.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return e>>>=0,t||_(e,8,this.length),o.read(this,e,!1,52,8)},l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;E(this,e,t,r,n,0)}let i=1,o=0;for(this[t]=255&e;++o<r&&(i*=256);)this[t+o]=e/i&255;return t+r},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;E(this,e,t,r,n,0)}let i=r-1,o=1;for(this[t+i]=255&e;--i>=0&&(o*=256);)this[t+i]=e/o&255;return t+r},l.prototype.writeUint8=l.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||E(this,e,t,1,255,0),this[t]=255&e,t+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||E(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||E(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||E(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||E(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigUInt64LE=$(function(e,t=0){return S(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),l.prototype.writeBigUInt64BE=$(function(e,t=0){return P(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),l.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);E(this,e,t,r,n-1,-n)}let i=0,o=1,a=0;for(this[t]=255&e;++i<r&&(o*=256);)e<0&&0===a&&0!==this[t+i-1]&&(a=1),this[t+i]=(e/o>>0)-a&255;return t+r},l.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);E(this,e,t,r,n-1,-n)}let i=r-1,o=1,a=0;for(this[t+i]=255&e;--i>=0&&(o*=256);)e<0&&0===a&&0!==this[t+i+1]&&(a=1),this[t+i]=(e/o>>0)-a&255;return t+r},l.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||E(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||E(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||E(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||E(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},l.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||E(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigInt64LE=$(function(e,t=0){return S(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),l.prototype.writeBigInt64BE=$(function(e,t=0){return P(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),l.prototype.writeFloatLE=function(e,t,r){return I(this,e,t,!0,r)},l.prototype.writeFloatBE=function(e,t,r){return I(this,e,t,!1,r)},l.prototype.writeDoubleLE=function(e,t,r){return O(this,e,t,!0,r)},l.prototype.writeDoubleBE=function(e,t,r){return O(this,e,t,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
l.prototype.copy=function(e,t,r,n){if(!l.isBuffer(e))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;// Fatal error conditions
if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
l.prototype.fill=function(e,t,r,n){let i;// Handle string cases:
if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));// Invalid ranges are not set to a default, so can range check early.
if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{let o=l.isBuffer(e)?e:l.from(e,n),a=o.length;if(0===a)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=o[i%a]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
let C={};function T(e,t,r){C[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${e}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function R(e){let t="",r=e.length,n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function A(e,t,r,n,i,o){if(e>r||e<t){let n;let i="bigint"==typeof t?"n":"";throw n=o>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(o+1)*8}${i}`:`>= -(2${i} ** ${(o+1)*8-1}${i}) and < 2 ** ${(o+1)*8-1}${i}`:`>= ${t}${i} and <= ${r}${i}`,new C.ERR_OUT_OF_RANGE("value",n,e)}N(i,"offset"),(void 0===n[i]||void 0===n[i+o])&&M(i,n.length-(o+1))}function N(e,t){if("number"!=typeof e)throw new C.ERR_INVALID_ARG_TYPE(t,"number",e)}function M(e,t,r){if(Math.floor(e)!==e)throw N(e,r),new C.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new C.ERR_BUFFER_OUT_OF_BOUNDS;throw new C.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}T("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),T("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),T("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?i=R(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=R(i)),i+="n"),n+=` It must be ${t}. Received ${i}`},RangeError);// HELPER FUNCTIONS
// ================
let j=/[^+/0-9A-Za-z-_]/g;function D(e,t){let r;t=t||1/0;let n=e.length,i=null,o=[];for(let a=0;a<n;++a){// is surrogate component
if((r=e.charCodeAt(a))>55295&&r<57344){// last char was a lead
if(!i){// no lead yet
if(r>56319||a+1===n){// unexpected trail
(t-=3)>-1&&o.push(239,191,189);continue}// valid lead
i=r;continue}// 2 leads in a row
if(r<56320){(t-=3)>-1&&o.push(239,191,189),i=r;continue}// valid surrogate pair
r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&o.push(239,191,189);// encode utf8
if(i=null,r<128){if((t-=1)<0)break;o.push(r)}else if(r<2048){if((t-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return o}function L(e){return i.toByteArray(function(e){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(e=// Node takes equal signs as end of the Base64 encoding
(e=e.split("=")[0]).trim().replace(j,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;e.length%4!=0;)e+="=";return e}(e))}function F(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function B(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
let z=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();// Return not function with Error if BigInt not supported
function $(e){return"undefined"==typeof BigInt?V:e}function V(){throw Error("BigInt not supported")}}),B("kuxul",function(e,t){u(e.exports,"toByteArray",()=>r,e=>r=e),u(e.exports,"fromByteArray",()=>n,e=>n=e),r=function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),i=n[0],s=n[1],l=new a((i+s)*3/4-s),u=0,c=s>0?i-4:i;for(r=0;r<c;r+=4)t=o[e.charCodeAt(r)]<<18|o[e.charCodeAt(r+1)]<<12|o[e.charCodeAt(r+2)]<<6|o[e.charCodeAt(r+3)],l[u++]=t>>16&255,l[u++]=t>>8&255,l[u++]=255&t;return 2===s&&(t=o[e.charCodeAt(r)]<<2|o[e.charCodeAt(r+1)]>>4,l[u++]=255&t),1===s&&(t=o[e.charCodeAt(r)]<<10|o[e.charCodeAt(r+1)]<<4|o[e.charCodeAt(r+2)]>>2,l[u++]=t>>8&255,l[u++]=255&t),l},n=function(e){// go through the array every three bytes, we'll deal with trailing stuff later
for(var t,r=e.length,n=r%3// if we have 1 byte left, pad 2 bytes
,o=[],a=0,s=r-n;a<s;a+=16383// must be multiple of 3
)o.push(function(e,t,r){for(var n,o=[],a=t;a<r;a+=3)o.push(i[(n=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]))>>18&63]+i[n>>12&63]+i[n>>6&63]+i[63&n]);return o.join("")}(e,a,a+16383>s?s:a+16383));return 1===n?o.push(i[(t=e[r-1])>>2]+i[t<<4&63]+"=="):2===n&&o.push(i[(t=(e[r-2]<<8)+e[r-1])>>10]+i[t>>4&63]+i[t<<2&63]+"="),o.join("")};for(var r,n,i=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,c=s.length;l<c;++l)i[l]=s[l],o[s.charCodeAt(l)]=l;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63}),B("9NvM5",function(e,t){var r,n;u(e.exports,"read",()=>r,e=>r=e),u(e.exports,"write",()=>n,e=>n=e),r=function(e,t,r,n,i){var o,a,s=8*i-n-1,l=(1<<s)-1,u=l>>1,c=-7,d=r?i-1:0,f=r?-1:1,p=e[t+d];for(d+=f,o=p&(1<<-c)-1,p>>=-c,c+=s;c>0;o=256*o+e[t+d],d+=f,c-=8);for(a=o&(1<<-c)-1,o>>=-c,c+=n;c>0;a=256*a+e[t+d],d+=f,c-=8);if(0===o)o=1-u;else{if(o===l)return a?NaN:(p?-1:1)*(1/0);a+=Math.pow(2,n),o-=u}return(p?-1:1)*a*Math.pow(2,o-n)},n=function(e,t,r,n,i,o){var a,s,l,u=8*o-i-1,c=(1<<u)-1,d=c>>1,f=23===i?5960464477539062e-23:0,p=n?0:o-1,h=n?1:-1,m=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(s=isNaN(t)?1:0,a=c):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+d>=1?t+=f/l:t+=f*Math.pow(2,1-d),t*l>=2&&(a++,l/=2),a+d>=c?(s=0,a=c):a+d>=1?(s=(t*l-1)*Math.pow(2,i),a+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,i),a=0));i>=8;e[r+p]=255&s,p+=h,s/=256,i-=8);for(a=a<<i|s,u+=i;u>0;e[r+p]=255&a,p+=h,a/=256,u-=8);e[r+p-h]|=128*m}}),B("hPtJY",function(e,t){// shim for using process in browser
var r,n,i,o=e.exports={};function a(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return r(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return r.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u=[],c=!1,d=-1;function f(){c&&i&&(c=!1,i.length?u=i.concat(u):d=-1,u.length&&p())}function p(){if(!c){var e=l(f);c=!0;for(var t=u.length;t;){for(i=u,u=[];++d<t;)i&&i[d].run();d=-1,t=u.length}i=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
n(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return n.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return n.call(this,e)}}}(e)}}// v8 likes predictible objects
function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new h(e,t)),1!==u.length||c||l(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}),B("bNSG8",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.VERSION=void 0,e.exports.VERSION="4.19.0"}),B("9Dbsu",function(e,t){var r=U("6ZWSX").Buffer;Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Stream=void 0;var n=U("dJFm5"),i=(U("hTt11"),U("hTt11"));class o{constructor(e,t){this.iterator=e,this.controller=t}static fromSSEResponse(e,t){let r=!1,n=new a;async function*u(){if(!e.body)throw t.abort(),new i.OpenAIError("Attempted to iterate over a response with no body");let r=new s,o=l(e.body);for await(let e of o)for(let t of r.decode(e)){let e=n.decode(t);e&&(yield e)}for(let e of r.flush()){let t=n.decode(e);t&&(yield t)}}return new o(async function*(){if(r)throw Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");r=!0;let e=!1;try{for await(let t of u())if(!e){if(t.data.startsWith("[DONE]")){e=!0;continue}if(null===t.event){let e;try{e=JSON.parse(t.data)}catch(e){throw console.error("Could not parse message into JSON:",t.data),console.error("From chunk:",t.raw),e}if(e&&e.error)throw new i.APIError(void 0,e.error,void 0,void 0);yield e}}e=!0}catch(e){// If the user calls `stream.controller.abort()`, we should exit without throwing.
if(e instanceof Error&&"AbortError"===e.name)return;throw e}finally{// If the user `break`s, abort the ongoing request.
e||t.abort()}},t)}/**
     * Generates a Stream from a newline-separated ReadableStream
     * where each item is a JSON value.
     */static fromReadableStream(e,t){let r=!1;async function*n(){let t=new s,r=l(e);for await(let e of r)for(let r of t.decode(e))yield r;for(let e of t.flush())yield e}return new o(async function*(){if(r)throw Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");r=!0;let e=!1;try{for await(let t of n())!e&&t&&(yield JSON.parse(t));e=!0}catch(e){// If the user calls `stream.controller.abort()`, we should exit without throwing.
if(e instanceof Error&&"AbortError"===e.name)return;throw e}finally{// If the user `break`s, abort the ongoing request.
e||t.abort()}},t)}[Symbol.asyncIterator](){return this.iterator()}/**
     * Splits the stream into two streams which can be
     * independently read from at different speeds.
     */tee(){let e=[],t=[],r=this.iterator(),n=n=>({next:()=>{if(0===n.length){let n=r.next();e.push(n),t.push(n)}return n.shift()}});return[new o(()=>n(e),this.controller),new o(()=>n(t),this.controller)]}/**
     * Converts this stream to a newline-separated ReadableStream of
     * JSON stringified values in the stream
     * which can be turned back into a Stream with `Stream.fromReadableStream()`.
     */toReadableStream(){let e;let t=this,r=new TextEncoder;return new n.ReadableStream({async start(){e=t[Symbol.asyncIterator]()},async pull(t){try{let{value:n,done:i}=await e.next();if(i)return t.close();let o=r.encode(JSON.stringify(n)+"\n");t.enqueue(o)}catch(e){t.error(e)}},async cancel(){await e.return?.()}})}}e.exports.Stream=o;class a{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(e){if(e.endsWith("\r")&&(e=e.substring(0,e.length-1)),!e){// empty line and we didn't previously encounter any messages
if(!this.event&&!this.data.length)return null;let e={event:this.event,data:this.data.join("\n"),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],e}if(this.chunks.push(e),e.startsWith(":"))return null;let[t,r,n]=function(e,t){let r=e.indexOf(t);return -1!==r?[e.substring(0,r),t,e.substring(r+t.length)]:[e,"",""]}(e,":");return n.startsWith(" ")&&(n=n.substring(1)),"event"===t?this.event=n:"data"===t&&this.data.push(n),null}}/**
 * A re-implementation of httpx's `LineDecoder` in Python that handles incrementally
 * reading lines from text.
 *
 * https://github.com/encode/httpx/blob/920333ea98118e9cf617f246905d7b202510941c/httpx/_decoders.py#L258
 */class s{constructor(){this.buffer=[],this.trailingCR=!1}decode(e){let t=this.decodeText(e);if(this.trailingCR&&(t="\r"+t,this.trailingCR=!1),t.endsWith("\r")&&(this.trailingCR=!0,t=t.slice(0,-1)),!t)return[];let r=s.NEWLINE_CHARS.has(t[t.length-1]||""),n=t.split(s.NEWLINE_REGEXP);return 1!==n.length||r?(this.buffer.length>0&&(n=[this.buffer.join("")+n[0],...n.slice(1)],this.buffer=[]),r||(this.buffer=[n.pop()||""]),n):(this.buffer.push(n[0]),[])}decodeText(e){if(null==e)return"";if("string"==typeof e)return e;// Node:
if(void 0!==r){if(e instanceof r)return e.toString();if(e instanceof Uint8Array)return r.from(e).toString();throw new i.OpenAIError(`Unexpected: received non-Uint8Array (${e.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`)}// Browser
if("undefined"!=typeof TextDecoder){if(e instanceof Uint8Array||e instanceof ArrayBuffer)return this.textDecoder??(this.textDecoder=new TextDecoder("utf8")),this.textDecoder.decode(e);throw new i.OpenAIError(`Unexpected: received non-Uint8Array/ArrayBuffer (${e.constructor.name}) in a web platform. Please report this error.`)}throw new i.OpenAIError("Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.")}flush(){if(!this.buffer.length&&!this.trailingCR)return[];let e=[this.buffer.join("")];return this.buffer=[],this.trailingCR=!1,e}}/**
 * Most browsers don't yet have async iterable support for ReadableStream,
 * and Node has a very different way of reading bytes from its "ReadableStream".
 *
 * This polyfill was pulled from https://github.com/MattiasBuelens/web-streams-polyfill/pull/122#issuecomment-1627354490
 */function l(e){if(e[Symbol.asyncIterator])return e;let t=e.getReader();return{async next(){try{let e=await t.read();return e?.done&&t.releaseLock(),e}catch(e){throw t.releaseLock(),e}},async return(){let e=t.cancel();return t.releaseLock(),await e,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}// prettier-ignore
s.NEWLINE_CHARS=new Set(["\n","\r","\v","\f","\x1c","\x1d","\x1e","\x85","\u2028","\u2029"]),s.NEWLINE_REGEXP=/\r\n|[\n\r\x0b\x0c\x1c\x1d\x1e\x85\u2028\u2029]/g}),B("dJFm5",function(e,t){/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */var r=U("gnmoI"),n=U("7XsUa");for(let t of(r.kind||r.setShims(n.getRuntime(),{auto:!0}),Object.keys(r)))Object.defineProperty(e.exports,t,{get:()=>r[t]})}),B("gnmoI",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.setShims=e.exports.isFsReadStream=e.exports.fileFromPath=e.exports.getDefaultAgent=e.exports.getMultipartRequestOptions=e.exports.ReadableStream=e.exports.File=e.exports.Blob=e.exports.FormData=e.exports.Headers=e.exports.Response=e.exports.Request=e.exports.fetch=e.exports.kind=e.exports.auto=void 0,e.exports.auto=!1,e.exports.kind=void 0,e.exports.fetch=void 0,e.exports.Request=void 0,e.exports.Response=void 0,e.exports.Headers=void 0,e.exports.FormData=void 0,e.exports.Blob=void 0,e.exports.File=void 0,e.exports.ReadableStream=void 0,e.exports.getMultipartRequestOptions=void 0,e.exports.getDefaultAgent=void 0,e.exports.fileFromPath=void 0,e.exports.isFsReadStream=void 0,e.exports.setShims=function(t,r={auto:!1}){if(e.exports.auto)throw Error(`you must \`import 'openai/shims/${t.kind}'\` before importing anything else from openai`);if(e.exports.kind)throw Error(`can't \`import 'openai/shims/${t.kind}'\` after \`import 'openai/shims/${e.exports.kind}'\``);e.exports.auto=r.auto,e.exports.kind=t.kind,e.exports.fetch=t.fetch,e.exports.Request=t.Request,e.exports.Response=t.Response,e.exports.Headers=t.Headers,e.exports.FormData=t.FormData,e.exports.Blob=t.Blob,e.exports.File=t.File,e.exports.ReadableStream=t.ReadableStream,e.exports.getMultipartRequestOptions=t.getMultipartRequestOptions,e.exports.getDefaultAgent=t.getDefaultAgent,e.exports.fileFromPath=t.fileFromPath,e.exports.isFsReadStream=t.isFsReadStream}}),B("7XsUa",function(e,t){var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n=e.exports&&e.exports.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(e.exports,"__esModule",{value:!0}),/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */n(U("3ovWK"),e.exports)}),B("3ovWK",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.getRuntime=void 0;var r=U("h7UJD");e.exports.getRuntime=function({manuallyImported:e}={}){let t,n,i,o;let a=e?"You may need to use polyfills":`Add one of these imports before your first \`import \u{2026} from 'openai'\`:
- \`import 'openai/shims/node'\` (if you're running on Node)
- \`import 'openai/shims/web'\` (otherwise)
`;try{// @ts-ignore
t=fetch,// @ts-ignore
n=Request,// @ts-ignore
i=Response,// @ts-ignore
o=Headers}catch(e){throw Error(`this environment is missing the following Web Fetch API type: ${e.message}. ${a}`)}return{kind:"web",fetch:t,Request:n,Response:i,Headers:o,FormData:"undefined"!=typeof FormData?FormData:class{// @ts-ignore
constructor(){throw Error(`file uploads aren't supported in this environment yet as 'FormData' is undefined. ${a}`)}},Blob:"undefined"!=typeof Blob?Blob:class{constructor(){throw Error(`file uploads aren't supported in this environment yet as 'Blob' is undefined. ${a}`)}},File:"undefined"!=typeof File?File:class{// @ts-ignore
constructor(){throw Error(`file uploads aren't supported in this environment yet as 'File' is undefined. ${a}`)}},ReadableStream:"undefined"!=typeof ReadableStream?ReadableStream:class{// @ts-ignore
constructor(){throw Error(`streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${a}`)}},getMultipartRequestOptions:async(e,t)=>({...t,body:new r.MultipartBody(e)}),getDefaultAgent:e=>void 0,fileFromPath:()=>{throw Error("The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads")},isFsReadStream:e=>!1}}}),B("h7UJD",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.MultipartBody=void 0;/**
 * Disclaimer: modules in _shims aren't intended to be imported by SDK users.
 */class r{constructor(e){this.body=e}get[Symbol.toStringTag](){return"MultipartBody"}}e.exports.MultipartBody=r}),B("hTt11",function(e,t){// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.InternalServerError=e.exports.RateLimitError=e.exports.UnprocessableEntityError=e.exports.ConflictError=e.exports.NotFoundError=e.exports.PermissionDeniedError=e.exports.AuthenticationError=e.exports.BadRequestError=e.exports.APIConnectionTimeoutError=e.exports.APIConnectionError=e.exports.APIUserAbortError=e.exports.APIError=e.exports.OpenAIError=void 0;var r=U("9xH07");class n extends Error{}e.exports.OpenAIError=n;class i extends n{constructor(e,t,r,n){super(`${i.makeMessage(e,t,r)}`),this.status=e,this.headers=n,this.error=t,this.code=t?.code,this.param=t?.param,this.type=t?.type}static makeMessage(e,t,r){let n=t?.message?"string"==typeof t.message?t.message:JSON.stringify(t.message):t?JSON.stringify(t):r;return e&&n?`${e} ${n}`:e?`${e} status code (no body)`:n||"(no status code or body)"}static generate(e,t,n,h){if(!e)return new o({cause:(0,r.castToError)(t)});let m=t?.error;return 400===e?new a(e,m,n,h):401===e?new s(e,m,n,h):403===e?new l(e,m,n,h):404===e?new u(e,m,n,h):409===e?new c(e,m,n,h):422===e?new d(e,m,n,h):429===e?new f(e,m,n,h):e>=500?new p(e,m,n,h):new i(e,m,n,h)}}e.exports.APIError=i,e.exports.APIUserAbortError=class extends i{constructor({message:e}={}){super(void 0,void 0,e||"Request was aborted.",void 0),this.status=void 0}};class o extends i{constructor({message:e,cause:t}){super(void 0,void 0,e||"Connection error.",void 0),this.status=void 0,t&&(this.cause=t)}}e.exports.APIConnectionError=o,e.exports.APIConnectionTimeoutError=class extends o{constructor({message:e}={}){super({message:e??"Request timed out."})}};class a extends i{constructor(){super(...arguments),this.status=400}}e.exports.BadRequestError=a;class s extends i{constructor(){super(...arguments),this.status=401}}e.exports.AuthenticationError=s;class l extends i{constructor(){super(...arguments),this.status=403}}e.exports.PermissionDeniedError=l;class u extends i{constructor(){super(...arguments),this.status=404}}e.exports.NotFoundError=u;class c extends i{constructor(){super(...arguments),this.status=409}}e.exports.ConflictError=c;class d extends i{constructor(){super(...arguments),this.status=422}}e.exports.UnprocessableEntityError=d;class f extends i{constructor(){super(...arguments),this.status=429}}e.exports.RateLimitError=f;class p extends i{}e.exports.InternalServerError=p}),B("laDyk",function(e,t){var r=U("6ZWSX").Buffer;Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.createForm=e.exports.multipartFormRequestOptions=e.exports.maybeMultipartFormRequestOptions=e.exports.isMultipartBody=e.exports.toFile=e.exports.isUploadable=e.exports.isBlobLike=e.exports.isFileLike=e.exports.isResponseLike=e.exports.fileFromPath=void 0;var n=(U("dJFm5"),U("dJFm5"));/**
 * Helper for creating a {@link File} to pass to an SDK upload method from a variety of different data formats
 * @param value the raw content of the file.  Can be an {@link Uploadable}, {@link BlobLikePart}, or {@link AsyncIterable} of {@link BlobLikePart}s
 * @param {string=} name the name of the file. If omitted, toFile will try to determine a file name from bits if possible
 * @param {Object=} options additional properties
 * @param {string=} options.type the MIME type of the content
 * @param {number=} options.lastModified the last modified timestamp
 * @returns a {@link File} with the given properties
 */async function i(t,r,i={}){var s;if(// If it's a promise, resolve it.
t=await t,(0,e.exports.isResponseLike)(t)){let e=await t.blob();return r||(r=new URL(t.url).pathname.split(/[\\/]/).pop()??"unknown_file"),new n.File([e],r,i)}let l=await o(t);if(r||(r=(a((s=t).name)||a(s.filename)||// For fs.ReadStream
a(s.path)?.split(/[\\/]/).pop())??"unknown_file"),!i.type){let e=l[0]?.type;"string"==typeof e&&(i={...i,type:e})}return new n.File(l,r,i)}async function o(t){let r=[];if("string"==typeof t||ArrayBuffer.isView(t)||// includes Uint8Array, Buffer, etc.
t instanceof ArrayBuffer)r.push(t);else if((0,e.exports.isBlobLike)(t))r.push(await t.arrayBuffer());else if(s(t)// includes Readable, ReadableStream, etc.
)for await(let e of t)r.push(e);// TODO, consider validating?
else throw Error(`Unexpected data type: ${typeof t}; constructor: ${t?.constructor?.name}; props: ${function(e){let t=Object.getOwnPropertyNames(e);return`[${t.map(e=>`"${e}"`).join(", ")}]`}(t)}`);return r}Object.defineProperty(e.exports,"fileFromPath",{enumerable:!0,get:function(){return n.fileFromPath}}),e.exports.isResponseLike=e=>null!=e&&"object"==typeof e&&"string"==typeof e.url&&"function"==typeof e.blob,e.exports.isFileLike=t=>null!=t&&"object"==typeof t&&"string"==typeof t.name&&"number"==typeof t.lastModified&&(0,e.exports.isBlobLike)(t),e.exports.isBlobLike=e=>null!=e&&"object"==typeof e&&"number"==typeof e.size&&"string"==typeof e.type&&"function"==typeof e.text&&"function"==typeof e.slice&&"function"==typeof e.arrayBuffer,e.exports.isUploadable=t=>(0,e.exports.isFileLike)(t)||(0,e.exports.isResponseLike)(t)||(0,n.isFsReadStream)(t),e.exports.toFile=i;let a=e=>"string"==typeof e?e:void 0!==r&&e instanceof r?String(e):void 0,s=e=>null!=e&&"object"==typeof e&&"function"==typeof e[Symbol.asyncIterator];e.exports.isMultipartBody=e=>e&&"object"==typeof e&&e.body&&"MultipartBody"===e[Symbol.toStringTag];/**
 * Returns a multipart/form-data request if any part of the given request body contains a File / Blob value.
 * Otherwise returns the request as is.
 */let l=async t=>{if(!d(t.body))return t;let r=await (0,e.exports.createForm)(t.body);return(0,n.getMultipartRequestOptions)(r,t)};e.exports.maybeMultipartFormRequestOptions=l;let u=async t=>{let r=await (0,e.exports.createForm)(t.body);return(0,n.getMultipartRequestOptions)(r,t)};e.exports.multipartFormRequestOptions=u;let c=async e=>{let t=new n.FormData;return await Promise.all(Object.entries(e||{}).map(([e,r])=>f(t,e,r))),t};e.exports.createForm=c;let d=t=>{if((0,e.exports.isUploadable)(t))return!0;if(Array.isArray(t))return t.some(d);if(t&&"object"==typeof t){for(let e in t)if(d(t[e]))return!0}return!1},f=async(t,r,n)=>{if(void 0!==n){if(null==n)throw TypeError(`Received null for "${r}"; to pass null in FormData, you must use the string 'null'`);// TODO: make nested formats configurable
if("string"==typeof n||"number"==typeof n||"boolean"==typeof n)t.append(r,String(n));else if((0,e.exports.isUploadable)(n)){let e=await i(n);t.append(r,e)}else if(Array.isArray(n))await Promise.all(n.map(e=>f(t,r+"[]",e)));else if("object"==typeof n)await Promise.all(Object.entries(n).map(([e,n])=>f(t,`${r}[${e}]`,n)));else throw TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${n} instead`)}}}),B("61UiY",function(e,t){// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.CursorPage=e.exports.Page=void 0;var r=U("9xH07");/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */class n extends r.AbstractPage{constructor(e,t,r,n){super(e,t,r,n),this.data=r.data,this.object=r.object}getPaginatedItems(){return this.data}// @deprecated Please use `nextPageInfo()` instead
/**
     * This page represents a response that isn't actually paginated at the API level
     * so there will never be any next page params.
     */nextPageParams(){return null}nextPageInfo(){return null}}e.exports.Page=n;class i extends r.AbstractPage{constructor(e,t,r,n){super(e,t,r,n),this.data=r.data}getPaginatedItems(){return this.data}// @deprecated Please use `nextPageInfo()` instead
nextPageParams(){let e=this.nextPageInfo();if(!e)return null;if("params"in e)return e.params;let t=Object.fromEntries(e.url.searchParams);return Object.keys(t).length?t:null}nextPageInfo(){if(!this.data?.length)return null;let e=this.data[this.data.length-1]?.id;return e?{params:{after:e}}:null}}e.exports.CursorPage=i}),B("1X4UA",function(e,t){// File generated from our OpenAPI spec by Stainless.
var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n=e.exports&&e.exports.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Moderations=e.exports.Models=e.exports.ModelsPage=e.exports.Images=e.exports.FineTuning=e.exports.FineTunes=e.exports.FineTunesPage=e.exports.Files=e.exports.FileObjectsPage=e.exports.Edits=e.exports.Embeddings=e.exports.Completions=e.exports.Beta=e.exports.Audio=void 0,n(U("2vGBU"),e.exports),n(U("gmxGW"),e.exports);var i=U("ciH5k");Object.defineProperty(e.exports,"Audio",{enumerable:!0,get:function(){return i.Audio}});var o=U("aWvNl");Object.defineProperty(e.exports,"Beta",{enumerable:!0,get:function(){return o.Beta}});var a=U("kSU3b");Object.defineProperty(e.exports,"Completions",{enumerable:!0,get:function(){return a.Completions}});var s=U("fowbp");Object.defineProperty(e.exports,"Embeddings",{enumerable:!0,get:function(){return s.Embeddings}});var l=U("ihHUh");Object.defineProperty(e.exports,"Edits",{enumerable:!0,get:function(){return l.Edits}});var u=U("beenb");Object.defineProperty(e.exports,"FileObjectsPage",{enumerable:!0,get:function(){return u.FileObjectsPage}}),Object.defineProperty(e.exports,"Files",{enumerable:!0,get:function(){return u.Files}});var c=U("4hpXG");Object.defineProperty(e.exports,"FineTunesPage",{enumerable:!0,get:function(){return c.FineTunesPage}}),Object.defineProperty(e.exports,"FineTunes",{enumerable:!0,get:function(){return c.FineTunes}});var d=U("aDo8r");Object.defineProperty(e.exports,"FineTuning",{enumerable:!0,get:function(){return d.FineTuning}});var f=U("8tzbZ");Object.defineProperty(e.exports,"Images",{enumerable:!0,get:function(){return f.Images}});var p=U("aROqG");Object.defineProperty(e.exports,"ModelsPage",{enumerable:!0,get:function(){return p.ModelsPage}}),Object.defineProperty(e.exports,"Models",{enumerable:!0,get:function(){return p.Models}});var h=U("iSJzc");Object.defineProperty(e.exports,"Moderations",{enumerable:!0,get:function(){return h.Moderations}})}),B("2vGBU",function(e,t){// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Completions=e.exports.Chat=void 0;var r=U("9dwab");Object.defineProperty(e.exports,"Chat",{enumerable:!0,get:function(){return r.Chat}});var n=U("fwzPu");Object.defineProperty(e.exports,"Completions",{enumerable:!0,get:function(){return n.Completions}})}),B("9dwab",function(e,t){// File generated from our OpenAPI spec by Stainless.
var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&r(t,e,i);return n(t,e),t};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Chat=void 0;var o=U("andP1");let a=i(U("fwzPu"));class s extends o.APIResource{constructor(){super(...arguments),this.completions=new a.Completions(this._client)}}e.exports.Chat=s,(s=e.exports.Chat||(e.exports.Chat={})).Completions=a.Completions}),B("andP1",function(e,t){// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.APIResource=void 0,e.exports.APIResource=class{constructor(e){this._client=e}}}),B("fwzPu",function(e,t){// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Completions=void 0;var r=U("andP1");class n extends r.APIResource{create(e,t){return this._client.post("/chat/completions",{body:e,...t,stream:e.stream??!1})}}e.exports.Completions=n,e.exports.Completions||(e.exports.Completions={})}),B("gmxGW",function(e,t){// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(e.exports,"__esModule",{value:!0})}),B("ciH5k",function(e,t){// File generated from our OpenAPI spec by Stainless.
var Audio,r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&r(t,e,i);return n(t,e),t};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Audio=void 0;var o=U("andP1");let a=i(U("5AiKh")),s=i(U("7Bvgz")),l=i(U("ksjyZ"));class u extends o.APIResource{constructor(){super(...arguments),this.transcriptions=new s.Transcriptions(this._client),this.translations=new l.Translations(this._client),this.speech=new a.Speech(this._client)}}e.exports.Audio=u,(Audio=u=e.exports.Audio||(e.exports.Audio={})).Transcriptions=s.Transcriptions,Audio.Translations=l.Translations,Audio.Speech=a.Speech}),B("5AiKh",function(e,t){// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Speech=void 0;var r=U("andP1");class n extends r.APIResource{/**
     * Generates audio from the input text.
     */create(e,t){return this._client.post("/audio/speech",{body:e,...t,__binaryResponse:!0})}}e.exports.Speech=n,e.exports.Speech||(e.exports.Speech={})}),B("7Bvgz",function(e,t){// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Transcriptions=void 0;var r=U("andP1"),n=U("9xH07");class i extends r.APIResource{/**
     * Transcribes audio into the input language.
     */create(e,t){return this._client.post("/audio/transcriptions",(0,n.multipartFormRequestOptions)({body:e,...t}))}}e.exports.Transcriptions=i,e.exports.Transcriptions||(e.exports.Transcriptions={})}),B("ksjyZ",function(e,t){// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Translations=void 0;var r=U("andP1"),n=U("9xH07");class i extends r.APIResource{/**
     * Translates audio into English.
     */create(e,t){return this._client.post("/audio/translations",(0,n.multipartFormRequestOptions)({body:e,...t}))}}e.exports.Translations=i,e.exports.Translations||(e.exports.Translations={})}),B("aWvNl",function(e,t){// File generated from our OpenAPI spec by Stainless.
var r,n=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Beta=void 0;var a=U("andP1");let s=o(U("gVp42")),l=o(U("6UkP2")),u=o(U("hU1vh"));class c extends a.APIResource{constructor(){super(...arguments),this.chat=new l.Chat(this._client),this.assistants=new s.Assistants(this._client),this.threads=new u.Threads(this._client)}}e.exports.Beta=c,(r=c=e.exports.Beta||(e.exports.Beta={})).Chat=l.Chat,r.Assistants=s.Assistants,r.AssistantsPage=s.AssistantsPage,r.Threads=u.Threads}),B("gVp42",function(e,t){// File generated from our OpenAPI spec by Stainless.
var r,n=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.AssistantsPage=e.exports.Assistants=void 0;var a=U("andP1"),s=U("9xH07");let l=o(e.exports),u=o(U("hBjvc"));var c=U("61UiY");class d extends a.APIResource{constructor(){super(...arguments),this.files=new u.Files(this._client)}/**
     * Create an assistant with a model and instructions.
     */create(e,t){return this._client.post("/assistants",{body:e,...t,headers:{"OpenAI-Beta":"assistants=v1",...t?.headers}})}/**
     * Retrieves an assistant.
     */retrieve(e,t){return this._client.get(`/assistants/${e}`,{...t,headers:{"OpenAI-Beta":"assistants=v1",...t?.headers}})}/**
     * Modifies an assistant.
     */update(e,t,r){return this._client.post(`/assistants/${e}`,{body:t,...r,headers:{"OpenAI-Beta":"assistants=v1",...r?.headers}})}list(e={},t){return(0,s.isRequestOptions)(e)?this.list({},e):this._client.getAPIList("/assistants",f,{query:e,...t,headers:{"OpenAI-Beta":"assistants=v1",...t?.headers}})}/**
     * Delete an assistant.
     */del(e,t){return this._client.delete(`/assistants/${e}`,{...t,headers:{"OpenAI-Beta":"assistants=v1",...t?.headers}})}}e.exports.Assistants=d;class f extends c.CursorPage{}e.exports.AssistantsPage=f,(r=d=e.exports.Assistants||(e.exports.Assistants={})).AssistantsPage=l.AssistantsPage,r.Files=u.Files,r.AssistantFilesPage=u.AssistantFilesPage}),B("hBjvc",function(e,t){// File generated from our OpenAPI spec by Stainless.
var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&r(t,e,i);return n(t,e),t};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.AssistantFilesPage=e.exports.Files=void 0;var o=U("andP1"),a=U("9xH07");let s=i(e.exports);var l=U("61UiY");class u extends o.APIResource{/**
     * Create an assistant file by attaching a
     * [File](https://platform.openai.com/docs/api-reference/files) to an
     * [assistant](https://platform.openai.com/docs/api-reference/assistants).
     */create(e,t,r){return this._client.post(`/assistants/${e}/files`,{body:t,...r,headers:{"OpenAI-Beta":"assistants=v1",...r?.headers}})}/**
     * Retrieves an AssistantFile.
     */retrieve(e,t,r){return this._client.get(`/assistants/${e}/files/${t}`,{...r,headers:{"OpenAI-Beta":"assistants=v1",...r?.headers}})}list(e,t={},r){return(0,a.isRequestOptions)(t)?this.list(e,{},t):this._client.getAPIList(`/assistants/${e}/files`,c,{query:t,...r,headers:{"OpenAI-Beta":"assistants=v1",...r?.headers}})}/**
     * Delete an assistant file.
     */del(e,t,r){return this._client.delete(`/assistants/${e}/files/${t}`,{...r,headers:{"OpenAI-Beta":"assistants=v1",...r?.headers}})}}e.exports.Files=u;class c extends l.CursorPage{}e.exports.AssistantFilesPage=c,(u=e.exports.Files||(e.exports.Files={})).AssistantFilesPage=s.AssistantFilesPage}),B("6UkP2",function(e,t){// File generated from our OpenAPI spec by Stainless.
var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&r(t,e,i);return n(t,e),t};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Chat=void 0;var o=U("andP1");let a=i(U("96Lgg"));class s extends o.APIResource{constructor(){super(...arguments),this.completions=new a.Completions(this._client)}}e.exports.Chat=s,(s=e.exports.Chat||(e.exports.Chat={})).Completions=a.Completions}),B("96Lgg",function(e,t){// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Completions=e.exports.ChatCompletionStream=e.exports.ParsingFunction=e.exports.ChatCompletionStreamingRunner=e.exports.ChatCompletionRunner=void 0;var r=U("andP1"),n=(U("i4Djk"),U("i4Djk"));Object.defineProperty(e.exports,"ChatCompletionRunner",{enumerable:!0,get:function(){return n.ChatCompletionRunner}});var i=(U("6tV2R"),U("6tV2R"));Object.defineProperty(e.exports,"ChatCompletionStreamingRunner",{enumerable:!0,get:function(){return i.ChatCompletionStreamingRunner}});var o=U("ioyPV");Object.defineProperty(e.exports,"ParsingFunction",{enumerable:!0,get:function(){return o.ParsingFunction}});var a=(U("2ArjU"),U("2ArjU"));Object.defineProperty(e.exports,"ChatCompletionStream",{enumerable:!0,get:function(){return a.ChatCompletionStream}});class s extends r.APIResource{runFunctions(e,t){return e.stream?i.ChatCompletionStreamingRunner.runFunctions(this._client.chat.completions,e,t):n.ChatCompletionRunner.runFunctions(this._client.chat.completions,e,t)}runTools(e,t){return e.stream?i.ChatCompletionStreamingRunner.runTools(this._client.chat.completions,e,t):n.ChatCompletionRunner.runTools(this._client.chat.completions,e,t)}/**
     * Creates a chat completion stream
     */stream(e,t){return a.ChatCompletionStream.createChatCompletion(this._client.chat.completions,e,t)}}e.exports.Completions=s}),B("i4Djk",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.ChatCompletionRunner=void 0;var r=U("dLYfX"),n=U("lV4f5");class i extends r.AbstractChatCompletionRunner{static runFunctions(e,t,r){let n=new i;return n._run(()=>n._runFunctions(e,t,r)),n}static runTools(e,t,r){let n=new i;return n._run(()=>n._runTools(e,t,r)),n}_addMessage(e){super._addMessage(e),(0,n.isAssistantMessage)(e)&&e.content&&this._emit("content",e.content)}}e.exports.ChatCompletionRunner=i}),B("dLYfX",function(e,t){var r,n,i,o,a,s,l,u,c,d,f,p,h,m,g,y,v,b,w,x,_=e.exports&&e.exports.__classPrivateFieldSet||function(e,t,r,n,i){if("m"===n)throw TypeError("Private method is not writable");if("a"===n&&!i)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?i.call(e,r):i?i.value=r:t.set(e,r),r},E=e.exports&&e.exports.__classPrivateFieldGet||function(e,t,r,n){if("a"===r&&!n)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.AbstractChatCompletionRunner=void 0;var S=U("hTt11"),P=U("ioyPV"),k=U("lV4f5");e.exports.AbstractChatCompletionRunner=class{constructor(){r.add(this),this.controller=new AbortController,n.set(this,void 0),i.set(this,()=>{}),o.set(this,()=>{}),a.set(this,void 0),s.set(this,()=>{}),l.set(this,()=>{}),u.set(this,{}),this._chatCompletions=[],this.messages=[],c.set(this,!1),d.set(this,!1),f.set(this,!1),p.set(this,!1),b.set(this,e=>{if(_(this,d,!0,"f"),e instanceof Error&&"AbortError"===e.name&&(e=new S.APIUserAbortError),e instanceof S.APIUserAbortError)return _(this,f,!0,"f"),this._emit("abort",e);if(e instanceof S.OpenAIError)return this._emit("error",e);if(e instanceof Error){let t=new S.OpenAIError(e.message);return(// @ts-ignore
t.cause=e,this._emit("error",t))}return this._emit("error",new S.OpenAIError(String(e)))}),_(this,n,new Promise((e,t)=>{_(this,i,e,"f"),_(this,o,t,"f")}),"f"),_(this,a,new Promise((e,t)=>{_(this,s,e,"f"),_(this,l,t,"f")}),"f"),// Don't let these promises cause unhandled rejection errors.
// we will manually cause an unhandled rejection error later
// if the user hasn't registered any error listener or called
// any promise-returning method.
E(this,n,"f").catch(()=>{}),E(this,a,"f").catch(()=>{})}_run(e){// Unfortunately if we call `executor()` immediately we get runtime errors about
// references to `this` before the `super()` constructor call returns.
setTimeout(()=>{e().then(()=>{this._emitFinal(),this._emit("end")},E(this,b,"f"))},0)}_addChatCompletion(e){this._chatCompletions.push(e),this._emit("chatCompletion",e);let t=e.choices[0]?.message;return t&&this._addMessage(t),e}_addMessage(e,t=!0){if(this.messages.push(e),t){if(this._emit("message",e),((0,k.isFunctionMessage)(e)||(0,k.isToolMessage)(e))&&e.content)this._emit("functionCallResult",e.content);else if((0,k.isAssistantMessage)(e)&&e.function_call)this._emit("functionCall",e.function_call);else if((0,k.isAssistantMessage)(e)&&e.tool_calls)for(let t of e.tool_calls)"function"===t.type&&this._emit("functionCall",t.function)}}_connected(){this.ended||(E(this,i,"f").call(this),this._emit("connect"))}get ended(){return E(this,c,"f")}get errored(){return E(this,d,"f")}get aborted(){return E(this,f,"f")}abort(){this.controller.abort()}/**
     * Adds the listener function to the end of the listeners array for the event.
     * No checks are made to see if the listener has already been added. Multiple calls passing
     * the same combination of event and listener will result in the listener being added, and
     * called, multiple times.
     * @returns this ChatCompletionStream, so that calls can be chained
     */on(e,t){let r=E(this,u,"f")[e]||(E(this,u,"f")[e]=[]);return r.push({listener:t}),this}/**
     * Removes the specified listener from the listener array for the event.
     * off() will remove, at most, one instance of a listener from the listener array. If any single
     * listener has been added multiple times to the listener array for the specified event, then
     * off() must be called multiple times to remove each instance.
     * @returns this ChatCompletionStream, so that calls can be chained
     */off(e,t){let r=E(this,u,"f")[e];if(!r)return this;let n=r.findIndex(e=>e.listener===t);return n>=0&&r.splice(n,1),this}/**
     * Adds a one-time listener function for the event. The next time the event is triggered,
     * this listener is removed and then invoked.
     * @returns this ChatCompletionStream, so that calls can be chained
     */once(e,t){let r=E(this,u,"f")[e]||(E(this,u,"f")[e]=[]);return r.push({listener:t,once:!0}),this}/**
     * This is similar to `.once()`, but returns a Promise that resolves the next time
     * the event is triggered, instead of calling a listener callback.
     * @returns a Promise that resolves the next time given event is triggered,
     * or rejects if an error is emitted.  (If you request the 'error' event,
     * returns a promise that resolves with the error).
     *
     * Example:
     *
     *   const message = await stream.emitted('message') // rejects if the stream errors
     */emitted(e){return new Promise((t,r)=>{_(this,p,!0,"f"),"error"!==e&&this.once("error",r),this.once(e,t)})}async done(){_(this,p,!0,"f"),await E(this,a,"f")}/**
     * @returns a promise that resolves with the final ChatCompletion, or rejects
     * if an error occurred or the stream ended prematurely without producing a ChatCompletion.
     */async finalChatCompletion(){await this.done();let e=this._chatCompletions[this._chatCompletions.length-1];if(!e)throw new S.OpenAIError("stream ended without producing a ChatCompletion");return e}/**
     * @returns a promise that resolves with the content of the final ChatCompletionMessage, or rejects
     * if an error occurred or the stream ended prematurely without producing a ChatCompletionMessage.
     */async finalContent(){return await this.done(),E(this,r,"m",h).call(this)}/**
     * @returns a promise that resolves with the the final assistant ChatCompletionMessage response,
     * or rejects if an error occurred or the stream ended prematurely without producing a ChatCompletionMessage.
     */async finalMessage(){return await this.done(),E(this,r,"m",m).call(this)}/**
     * @returns a promise that resolves with the content of the final FunctionCall, or rejects
     * if an error occurred or the stream ended prematurely without producing a ChatCompletionMessage.
     */async finalFunctionCall(){return await this.done(),E(this,r,"m",g).call(this)}async finalFunctionCallResult(){return await this.done(),E(this,r,"m",y).call(this)}async totalUsage(){return await this.done(),E(this,r,"m",v).call(this)}allChatCompletions(){return[...this._chatCompletions]}_emit(e,...t){// make sure we don't emit any events after end
if(E(this,c,"f"))return;"end"===e&&(_(this,c,!0,"f"),E(this,s,"f").call(this));let r=E(this,u,"f")[e];if(r&&(E(this,u,"f")[e]=r.filter(e=>!e.once),r.forEach(({listener:e})=>e(...t))),"abort"===e){let e=t[0];E(this,p,"f")||r?.length||Promise.reject(e),E(this,o,"f").call(this,e),E(this,l,"f").call(this,e),this._emit("end");return}if("error"===e){// NOTE: _emit('error', error) should only be called from #handleError().
let e=t[0];E(this,p,"f")||r?.length||// If you are seeing stack traces here, make sure to handle errors via either:
// - runner.on('error', () => ...)
// - await runner.done()
// - await runner.finalChatCompletion()
// - etc.
Promise.reject(e),E(this,o,"f").call(this,e),E(this,l,"f").call(this,e),this._emit("end")}}_emitFinal(){let e=this._chatCompletions[this._chatCompletions.length-1];e&&this._emit("finalChatCompletion",e);let t=this.messages[this.messages.length-1];t&&this._emit("finalMessage",t);let n=E(this,r,"m",h).call(this);n&&this._emit("finalContent",n);let i=E(this,r,"m",g).call(this);i&&this._emit("finalFunctionCall",i);let o=E(this,r,"m",y).call(this);null!=o&&this._emit("finalFunctionCallResult",o),this._chatCompletions.some(e=>e.usage)&&this._emit("totalUsage",E(this,r,"m",v).call(this))}async _createChatCompletion(e,t,n){let i=n?.signal;i&&(i.aborted&&this.controller.abort(),i.addEventListener("abort",()=>this.controller.abort())),E(this,r,"m",w).call(this,t);let o=await e.create({...t,stream:!1},{...n,signal:this.controller.signal});return this._connected(),this._addChatCompletion(o)}async _runChatCompletion(e,t,r){for(let e of t.messages)this._addMessage(e,!1);return await this._createChatCompletion(e,t,r)}async _runFunctions(e,t,n){let i="function",{function_call:o="auto",stream:a,...s}=t,l="string"!=typeof o&&o?.name,{maxChatCompletions:u=10}=n||{},c={};for(let e of t.functions)c[e.name||e.function.name]=e;let d=t.functions.map(e=>({name:e.name||e.function.name,parameters:e.parameters,description:e.description}));for(let e of t.messages)this._addMessage(e,!1);for(let t=0;t<u;++t){let t;let a=await this._createChatCompletion(e,{...s,function_call:o,functions:d,messages:[...this.messages]},n),u=a.choices[0]?.message;if(!u)throw new S.OpenAIError("missing message in ChatCompletion response");if(!u.function_call)return;let{name:f,arguments:p}=u.function_call,h=c[f];if(h){if(l&&l!==f){let e=`Invalid function_call: ${JSON.stringify(f)}. ${JSON.stringify(l)} requested. Please try again`;this._addMessage({role:i,name:f,content:e});continue}}else{let e=`Invalid function_call: ${JSON.stringify(f)}. Available options are: ${d.map(e=>JSON.stringify(e.name)).join(", ")}. Please try again`;this._addMessage({role:i,name:f,content:e});continue}try{t=(0,P.isRunnableFunctionWithParse)(h)?await h.parse(p):p}catch(e){this._addMessage({role:i,name:f,content:e instanceof Error?e.message:String(e)});continue}// @ts-expect-error it can't rule out `never` type.
let m=await h.function(t,this),g=E(this,r,"m",x).call(this,m);if(this._addMessage({role:i,name:f,content:g}),l)return}}async _runTools(e,t,n){let i="tool",{tool_choice:o="auto",stream:a,...s}=t,l="string"!=typeof o&&o?.function?.name,{maxChatCompletions:u=10}=n||{},c={};for(let e of t.tools)"function"===e.type&&(c[e.function.name||e.function.function.name]=e.function);let d="tools"in t?t.tools.map(e=>"function"===e.type?{type:"function",function:{name:e.function.name||e.function.function.name,parameters:e.function.parameters,description:e.function.description}}:e):void 0;for(let e of t.messages)this._addMessage(e,!1);for(let t=0;t<u;++t){let t=await this._createChatCompletion(e,{...s,tool_choice:o,tools:d,messages:[...this.messages]},n),a=t.choices[0]?.message;if(!a)throw new S.OpenAIError("missing message in ChatCompletion response");if(!a.tool_calls)return;for(let e of a.tool_calls){let t;if("function"!==e.type)continue;let n=e.id,{name:o,arguments:a}=e.function,s=c[o];if(s){if(l&&l!==o){let e=`Invalid tool_call: ${JSON.stringify(o)}. ${JSON.stringify(l)} requested. Please try again`;this._addMessage({role:i,tool_call_id:n,content:e});continue}}else{let e=`Invalid tool_call: ${JSON.stringify(o)}. Available options are: ${d.map(e=>JSON.stringify(e.function.name)).join(", ")}. Please try again`;this._addMessage({role:i,tool_call_id:n,content:e});continue}try{t=(0,P.isRunnableFunctionWithParse)(s)?await s.parse(a):a}catch(t){let e=t instanceof Error?t.message:String(t);this._addMessage({role:i,tool_call_id:n,content:e});continue}// @ts-expect-error it can't rule out `never` type.
let u=await s.function(t,this),f=E(this,r,"m",x).call(this,u);if(this._addMessage({role:i,tool_call_id:n,content:f}),l)return}}}},n=new WeakMap,i=new WeakMap,o=new WeakMap,a=new WeakMap,s=new WeakMap,l=new WeakMap,u=new WeakMap,c=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,b=new WeakMap,r=new WeakSet,h=function(){return E(this,r,"m",m).call(this).content},m=function(){let e=this.messages.length;for(;e-- >0;){let t=this.messages[e];if((0,k.isAssistantMessage)(t))return t}throw new S.OpenAIError("stream ended without producing a ChatCompletionMessage with role=assistant")},g=function(){for(let e=this.messages.length-1;e>=0;e--){let t=this.messages[e];if((0,k.isAssistantMessage)(t)&&t?.function_call)return t.function_call}},y=function(){for(let e=this.messages.length-1;e>=0;e--){let t=this.messages[e];if((0,k.isFunctionMessage)(t)&&null!=t.content)return t.content}},v=function(){let e={completion_tokens:0,prompt_tokens:0,total_tokens:0};for(let{usage:t}of this._chatCompletions)t&&(e.completion_tokens+=t.completion_tokens,e.prompt_tokens+=t.prompt_tokens,e.total_tokens+=t.total_tokens);return e},w=function(e){if(null!=e.n&&e.n>1)throw new S.OpenAIError("ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.")},x=function(e){return"string"==typeof e?e:void 0===e?"undefined":JSON.stringify(e)}}),B("ioyPV",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.ParsingFunction=e.exports.isRunnableFunctionWithParse=void 0,e.exports.isRunnableFunctionWithParse=function(e){return"function"==typeof e.parse},e.exports.ParsingFunction=/**
 * This is helper class for passing a `function` and `parse` where the `function`
 * argument type matches the `parse` return type.
 */class{constructor(e){this.function=e.function,this.parse=e.parse,this.parameters=e.parameters,this.description=e.description,this.name=e.name}}}),B("lV4f5",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.isPresent=e.exports.isToolMessage=e.exports.isFunctionMessage=e.exports.isAssistantMessage=void 0,e.exports.isAssistantMessage=e=>e?.role==="assistant",e.exports.isFunctionMessage=e=>e?.role==="function",e.exports.isToolMessage=e=>e?.role==="tool",e.exports.isPresent=function(e){return null!=e}}),B("6tV2R",function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.ChatCompletionStreamingRunner=void 0;var r=U("2ArjU");class n extends r.ChatCompletionStream{static fromReadableStream(e){let t=new n;return t._run(()=>t._fromReadableStream(e)),t}static runFunctions(e,t,r){let i=new n;return i._run(()=>i._runFunctions(e,t,{...r,headers:{...r?.headers,"X-Stainless-Helper-Method":"runFunctions"}})),i}static runTools(e,t,r){let i=new n;return i._run(()=>i._runTools(e,t,{...r,headers:{...r?.headers,"X-Stainless-Helper-Method":"runTools"}})),i}}e.exports.ChatCompletionStreamingRunner=n}),B("2ArjU",function(e,t){var r,n,i,o,a,s,l=e.exports&&e.exports.__classPrivateFieldGet||function(e,t,r,n){if("a"===r&&!n)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)},u=e.exports&&e.exports.__classPrivateFieldSet||function(e,t,r,n,i){if("m"===n)throw TypeError("Private method is not writable");if("a"===n&&!i)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?i.call(e,r):i?i.value=r:t.set(e,r),r};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.ChatCompletionStream=void 0;var c=U("hTt11"),d=U("dLYfX"),f=U("9Dbsu");class p extends d.AbstractChatCompletionRunner{constructor(){super(...arguments),r.add(this),n.set(this,void 0)}get currentChatCompletionSnapshot(){return l(this,n,"f")}/**
     * Intended for use on the frontend, consuming a stream produced with
     * `.toReadableStream()` on the backend.
     *
     * Note that messages sent to the model do not appear in `.on('message')`
     * in this context.
     */static fromReadableStream(e){let t=new p;return t._run(()=>t._fromReadableStream(e)),t}static createChatCompletion(e,t,r){let n=new p;return n._run(()=>n._runChatCompletion(e,{...t,stream:!0},{...r,headers:{...r?.headers,"X-Stainless-Helper-Method":"stream"}})),n}async _createChatCompletion(e,t,n){let s=n?.signal;s&&(s.aborted&&this.controller.abort(),s.addEventListener("abort",()=>this.controller.abort())),l(this,r,"m",i).call(this);let u=await e.create({...t,stream:!0},{...n,signal:this.controller.signal});for await(let e of(this._connected(),u))l(this,r,"m",o).call(this,e);if(u.controller.signal?.aborted)throw new c.APIUserAbortError;return this._addChatCompletion(l(this,r,"m",a).call(this))}async _fromReadableStream(e,t){let n;let s=t?.signal;s&&(s.aborted&&this.controller.abort(),s.addEventListener("abort",()=>this.controller.abort())),l(this,r,"m",i).call(this),this._connected();let u=f.Stream.fromReadableStream(e,this.controller);for await(let e of u)n&&n!==e.id&&this._addChatCompletion(l(this,r,"m",a).call(this)),l(this,r,"m",o).call(this,e),n=e.id;if(u.controller.signal?.aborted)throw new c.APIUserAbortError;return this._addChatCompletion(l(this,r,"m",a).call(this))}[(n=new WeakMap,r=new WeakSet,i=function(){this.ended||u(this,n,void 0,"f")},o=function(e){if(this.ended)return;let t=l(this,r,"m",s).call(this,e);this._emit("chunk",e,t);let n=e.choices[0]?.delta?.content,i=t.choices[0]?.message;null!=n&&i?.role==="assistant"&&i?.content&&this._emit("content",n,i.content)},a=function(){if(this.ended)throw new c.OpenAIError("stream has ended, this shouldn't happen");let e=l(this,n,"f");if(!e)throw new c.OpenAIError("request ended without sending any chunks");return u(this,n,void 0,"f"),function(e){let{id:t,choices:r,created:n,model:i}=e;return{id:t,choices:r.map(({message:t,finish_reason:r,index:n})=>{if(!r)throw new c.OpenAIError(`missing finish_reason for choice ${n}`);let{content:i=null,function_call:o,tool_calls:a}=t,s=t.role;if(!s)throw new c.OpenAIError(`missing role for choice ${n}`);if(o){let{arguments:e,name:t}=o;if(null==e)throw new c.OpenAIError(`missing function_call.arguments for choice ${n}`);if(!t)throw new c.OpenAIError(`missing function_call.name for choice ${n}`);return{message:{content:i,function_call:{arguments:e,name:t},role:s},finish_reason:r,index:n}}return a?{index:n,finish_reason:r,message:{role:s,content:i,tool_calls:a.map((t,r)=>{let{function:i,type:o,id:a}=t,{arguments:s,name:l}=i||{};if(null==a)throw new c.OpenAIError(`missing choices[${n}].tool_calls[${r}].id
${h(e)}`);if(null==o)throw new c.OpenAIError(`missing choices[${n}].tool_calls[${r}].type
${h(e)}`);if(null==l)throw new c.OpenAIError(`missing choices[${n}].tool_calls[${r}].function.name
${h(e)}`);if(null==s)throw new c.OpenAIError(`missing choices[${n}].tool_calls[${r}].function.arguments
${h(e)}`);return{id:a,type:o,function:{name:l,arguments:s}}})}}:{message:{content:i,role:s},finish_reason:r,index:n}}),created:n,model:i,object:"chat.completion"}}(e)},s=function(e){var t,r;let i=l(this,n,"f"),{choices:o,...a}=e;for(let{delta:o,finish_reason:s,index:l,...c}of(i?Object.assign(i,a):i=u(this,n,{...a,choices:[]},"f"),e.choices)){let e=i.choices[l];if(!e){i.choices[l]={finish_reason:s,index:l,message:o,...c};continue}if(s&&(e.finish_reason=s),Object.assign(e,c),!o)continue;// Shouldn't happen; just in case.
let{content:n,function_call:a,role:u,tool_calls:d}=o;if(n&&(e.message.content=(e.message.content||"")+n),u&&(e.message.role=u),a&&(e.message.function_call?(a.name&&(e.message.function_call.name=a.name),a.arguments&&((t=e.message.function_call).arguments??(t.arguments=""),e.message.function_call.arguments+=a.arguments)):e.message.function_call=a),d)for(let{index:t,id:n,type:i,function:o}of(e.message.tool_calls||(e.message.tool_calls=[]),d)){let a=(r=e.message.tool_calls)[t]??(r[t]={});n&&(a.id=n),i&&(a.type=i),o&&(a.function??(a.function={arguments:""})),o?.name&&(a.function.name=o.name),o?.arguments&&(a.function.arguments+=o.arguments)}}return i},Symbol.asyncIterator)](){let e=[],t=[],r=!1;return this.on("chunk",r=>{let n=t.shift();n?n(r):e.push(r)}),this.on("end",()=>{for(let e of(r=!0,t))e(void 0);t.length=0}),{next:async()=>{if(!e.length)return r?{value:void 0,done:!0}:new Promise(e=>t.push(e)).then(e=>e?{value:e,done:!1}:{value:void 0,done:!0});let n=e.shift();return{value:n,done:!1}}}}toReadableStream(){let e=new f.Stream(this[Symbol.asyncIterator].bind(this),this.controller);return e.toReadableStream()}}function h(e){return JSON.stringify(e)}e.exports.ChatCompletionStream=p}),B("hU1vh",function(e,t){// File generated from our OpenAPI spec by Stainless.
var r,n=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Threads=void 0;var a=U("andP1"),s=U("9xH07");let l=o(U("379dX")),u=o(U("crQct"));class c extends a.APIResource{constructor(){super(...arguments),this.runs=new u.Runs(this._client),this.messages=new l.Messages(this._client)}create(e={},t){return(0,s.isRequestOptions)(e)?this.create({},e):this._client.post("/threads",{body:e,...t,headers:{"OpenAI-Beta":"assistants=v1",...t?.headers}})}/**
     * Retrieves a thread.
     */retrieve(e,t){return this._client.get(`/threads/${e}`,{...t,headers:{"OpenAI-Beta":"assistants=v1",...t?.headers}})}/**
     * Modifies a thread.
     */update(e,t,r){return this._client.post(`/threads/${e}`,{body:t,...r,headers:{"OpenAI-Beta":"assistants=v1",...r?.headers}})}/**
     * Delete a thread.
     */del(e,t){return this._client.delete(`/threads/${e}`,{...t,headers:{"OpenAI-Beta":"assistants=v1",...t?.headers}})}/**
     * Create a thread and run it in one request.
     */createAndRun(e,t){return this._client.post("/threads/runs",{body:e,...t,headers:{"OpenAI-Beta":"assistants=v1",...t?.headers}})}}e.exports.Threads=c,(r=c=e.exports.Threads||(e.exports.Threads={})).Runs=u.Runs,r.RunsPage=u.RunsPage,r.Messages=l.Messages,r.ThreadMessagesPage=l.ThreadMessagesPage}),B("379dX",function(e,t){// File generated from our OpenAPI spec by Stainless.
var r,n=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.ThreadMessagesPage=e.exports.Messages=void 0;var a=U("andP1"),s=U("9xH07");let l=o(e.exports),u=o(U("4y6tI"));var c=U("61UiY");class d extends a.APIResource{constructor(){super(...arguments),this.files=new u.Files(this._client)}/**
     * Create a message.
     */create(e,t,r){return this._client.post(`/threads/${e}/messages`,{body:t,...r,headers:{"OpenAI-Beta":"assistants=v1",...r?.headers}})}/**
     * Retrieve a message.
     */retrieve(e,t,r){return this._client.get(`/threads/${e}/messages/${t}`,{...r,headers:{"OpenAI-Beta":"assistants=v1",...r?.headers}})}/**
     * Modifies a message.
     */update(e,t,r,n){return this._client.post(`/threads/${e}/messages/${t}`,{body:r,...n,headers:{"OpenAI-Beta":"assistants=v1",...n?.headers}})}list(e,t={},r){return(0,s.isRequestOptions)(t)?this.list(e,{},t):this._client.getAPIList(`/threads/${e}/messages`,f,{query:t,...r,headers:{"OpenAI-Beta":"assistants=v1",...r?.headers}})}}e.exports.Messages=d;class f extends c.CursorPage{}e.exports.ThreadMessagesPage=f,(r=d=e.exports.Messages||(e.exports.Messages={})).ThreadMessagesPage=l.ThreadMessagesPage,r.Files=u.Files,r.MessageFilesPage=u.MessageFilesPage}),B("4y6tI",function(e,t){// File generated from our OpenAPI spec by Stainless.
var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&r(t,e,i);return n(t,e),t};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.MessageFilesPage=e.exports.Files=void 0;var o=U("andP1"),a=U("9xH07");let s=i(e.exports);var l=U("61UiY");class u extends o.APIResource{/**
     * Retrieves a message file.
     */retrieve(e,t,r,n){return this._client.get(`/threads/${e}/messages/${t}/files/${r}`,{...n,headers:{"OpenAI-Beta":"assistants=v1",...n?.headers}})}list(e,t,r={},n){return(0,a.isRequestOptions)(r)?this.list(e,t,{},r):this._client.getAPIList(`/threads/${e}/messages/${t}/files`,c,{query:r,...n,headers:{"OpenAI-Beta":"assistants=v1",...n?.headers}})}}e.exports.Files=u;class c extends l.CursorPage{}e.exports.MessageFilesPage=c,(u=e.exports.Files||(e.exports.Files={})).MessageFilesPage=s.MessageFilesPage}),B("crQct",function(e,t){// File generated from our OpenAPI spec by Stainless.
var r,n=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.RunsPage=e.exports.Runs=void 0;var a=U("andP1"),s=U("9xH07");let l=o(e.exports),u=o(U("VEYqQ"));var c=U("61UiY");class d extends a.APIResource{constructor(){super(...arguments),this.steps=new u.Steps(this._client)}/**
     * Create a run.
     */create(e,t,r){return this._client.post(`/threads/${e}/runs`,{body:t,...r,headers:{"OpenAI-Beta":"assistants=v1",...r?.headers}})}/**
     * Retrieves a run.
     */retrieve(e,t,r){return this._client.get(`/threads/${e}/runs/${t}`,{...r,headers:{"OpenAI-Beta":"assistants=v1",...r?.headers}})}/**
     * Modifies a run.
     */update(e,t,r,n){return this._client.post(`/threads/${e}/runs/${t}`,{body:r,...n,headers:{"OpenAI-Beta":"assistants=v1",...n?.headers}})}list(e,t={},r){return(0,s.isRequestOptions)(t)?this.list(e,{},t):this._client.getAPIList(`/threads/${e}/runs`,f,{query:t,...r,headers:{"OpenAI-Beta":"assistants=v1",...r?.headers}})}/**
     * Cancels a run that is `in_progress`.
     */cancel(e,t,r){return this._client.post(`/threads/${e}/runs/${t}/cancel`,{...r,headers:{"OpenAI-Beta":"assistants=v1",...r?.headers}})}/**
     * When a run has the `status: "requires_action"` and `required_action.type` is
     * `submit_tool_outputs`, this endpoint can be used to submit the outputs from the
     * tool calls once they're all completed. All outputs must be submitted in a single
     * request.
     */submitToolOutputs(e,t,r,n){return this._client.post(`/threads/${e}/runs/${t}/submit_tool_outputs`,{body:r,...n,headers:{"OpenAI-Beta":"assistants=v1",...n?.headers}})}}e.exports.Runs=d;class f extends c.CursorPage{}e.exports.RunsPage=f,(r=d=e.exports.Runs||(e.exports.Runs={})).RunsPage=l.RunsPage,r.Steps=u.Steps,r.RunStepsPage=u.RunStepsPage}),B("VEYqQ",function(e,t){// File generated from our OpenAPI spec by Stainless.
var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&r(t,e,i);return n(t,e),t};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.RunStepsPage=e.exports.Steps=void 0;var o=U("andP1"),a=U("9xH07");let s=i(e.exports);var l=U("61UiY");class u extends o.APIResource{/**
     * Retrieves a run step.
     */retrieve(e,t,r,n){return this._client.get(`/threads/${e}/runs/${t}/steps/${r}`,{...n,headers:{"OpenAI-Beta":"assistants=v1",...n?.headers}})}list(e,t,r={},n){return(0,a.isRequestOptions)(r)?this.list(e,t,{},r):this._client.getAPIList(`/threads/${e}/runs/${t}/steps`,c,{query:r,...n,headers:{"OpenAI-Beta":"assistants=v1",...n?.headers}})}}e.exports.Steps=u;class c extends l.CursorPage{}e.exports.RunStepsPage=c,(u=e.exports.Steps||(e.exports.Steps={})).RunStepsPage=s.RunStepsPage}),B("kSU3b",function(e,t){// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Completions=void 0;var r=U("andP1");class n extends r.APIResource{create(e,t){return this._client.post("/completions",{body:e,...t,stream:e.stream??!1})}}e.exports.Completions=n,e.exports.Completions||(e.exports.Completions={})}),B("fowbp",function(e,t){// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Embeddings=void 0;var r=U("andP1");class n extends r.APIResource{/**
     * Creates an embedding vector representing the input text.
     */create(e,t){return this._client.post("/embeddings",{body:e,...t})}}e.exports.Embeddings=n,e.exports.Embeddings||(e.exports.Embeddings={})}),B("ihHUh",function(e,t){// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Edits=void 0;var r=U("andP1");class n extends r.APIResource{/**
     * Creates a new edit for the provided input, instruction, and parameters.
     *
     * @deprecated The Edits API is deprecated; please use Chat Completions instead.
     *
     * https://openai.com/blog/gpt-4-api-general-availability#deprecation-of-the-edits-api
     */create(e,t){return this._client.post("/edits",{body:e,...t})}}e.exports.Edits=n,e.exports.Edits||(e.exports.Edits={})}),B("beenb",function(e,t){// File generated from our OpenAPI spec by Stainless.
var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&r(t,e,i);return n(t,e),t};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.FileObjectsPage=e.exports.Files=void 0;var o=U("andP1"),a=(U("9xH07"),U("9xH07")),s=U("hTt11");let l=i(e.exports);var a=U("9xH07"),u=U("61UiY");class c extends o.APIResource{/**
     * Upload a file that can be used across various endpoints/features. The size of
     * all the files uploaded by one organization can be up to 100 GB.
     *
     * The size of individual files for can be a maximum of 512MB. See the
     * [Assistants Tools guide](https://platform.openai.com/docs/assistants/tools) to
     * learn more about the types of files supported. The Fine-tuning API only supports
     * `.jsonl` files.
     *
     * Please [contact us](https://help.openai.com/) if you need to increase these
     * storage limits.
     */create(e,t){return this._client.post("/files",(0,a.multipartFormRequestOptions)({body:e,...t}))}/**
     * Returns information about a specific file.
     */retrieve(e,t){return this._client.get(`/files/${e}`,t)}list(e={},t){return(0,a.isRequestOptions)(e)?this.list({},e):this._client.getAPIList("/files",d,{query:e,...t})}/**
     * Delete a file.
     */del(e,t){return this._client.delete(`/files/${e}`,t)}/**
     * Returns the contents of the specified file.
     */content(e,t){return this._client.get(`/files/${e}/content`,{...t,__binaryResponse:!0})}/**
     * Returns the contents of the specified file.
     *
     * @deprecated The `.content()` method should be used instead
     */retrieveContent(e,t){return this._client.get(`/files/${e}/content`,{...t,headers:{Accept:"application/json",...t?.headers}})}/**
     * Waits for the given file to be processed, default timeout is 30 mins.
     */async waitForProcessing(e,{pollInterval:t=5e3,maxWait:r=18e5}={}){let n=new Set(["processed","error","deleted"]),i=Date.now(),o=await this.retrieve(e);for(;!o.status||!n.has(o.status);)if(await (0,a.sleep)(t),o=await this.retrieve(e),Date.now()-i>r)throw new s.APIConnectionTimeoutError({message:`Giving up on waiting for file ${e} to finish processing after ${r} milliseconds.`});return o}}e.exports.Files=c;/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */class d extends u.Page{}e.exports.FileObjectsPage=d,(c=e.exports.Files||(e.exports.Files={})).FileObjectsPage=l.FileObjectsPage}),B("4hpXG",function(e,t){// File generated from our OpenAPI spec by Stainless.
var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&r(t,e,i);return n(t,e),t};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.FineTunesPage=e.exports.FineTunes=void 0;var o=U("andP1");let a=i(e.exports);var s=U("61UiY");class l extends o.APIResource{/**
     * Creates a job that fine-tunes a specified model from a given dataset.
     *
     * Response includes details of the enqueued job including job status and the name
     * of the fine-tuned models once complete.
     *
     * [Learn more about fine-tuning](https://platform.openai.com/docs/guides/legacy-fine-tuning)
     */create(e,t){return this._client.post("/fine-tunes",{body:e,...t})}/**
     * Gets info about the fine-tune job.
     *
     * [Learn more about fine-tuning](https://platform.openai.com/docs/guides/legacy-fine-tuning)
     */retrieve(e,t){return this._client.get(`/fine-tunes/${e}`,t)}/**
     * List your organization's fine-tuning jobs
     */list(e){return this._client.getAPIList("/fine-tunes",u,e)}/**
     * Immediately cancel a fine-tune job.
     */cancel(e,t){return this._client.post(`/fine-tunes/${e}/cancel`,t)}listEvents(e,t,r){return this._client.get(`/fine-tunes/${e}/events`,{query:t,timeout:864e5,...r,stream:t?.stream??!1})}}e.exports.FineTunes=l;/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */class u extends s.Page{}e.exports.FineTunesPage=u,(l=e.exports.FineTunes||(e.exports.FineTunes={})).FineTunesPage=a.FineTunesPage}),B("aDo8r",function(e,t){// File generated from our OpenAPI spec by Stainless.
var r,n=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.FineTuning=void 0;var a=U("andP1");let s=o(U("8TBjR"));class l extends a.APIResource{constructor(){super(...arguments),this.jobs=new s.Jobs(this._client)}}e.exports.FineTuning=l,(r=l=e.exports.FineTuning||(e.exports.FineTuning={})).Jobs=s.Jobs,r.FineTuningJobsPage=s.FineTuningJobsPage,r.FineTuningJobEventsPage=s.FineTuningJobEventsPage}),B("8TBjR",function(e,t){// File generated from our OpenAPI spec by Stainless.
var r,n=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return i(t,e),t};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.FineTuningJobEventsPage=e.exports.FineTuningJobsPage=e.exports.Jobs=void 0;var a=U("andP1"),s=U("9xH07");let l=o(e.exports);var u=U("61UiY");class c extends a.APIResource{/**
     * Creates a job that fine-tunes a specified model from a given dataset.
     *
     * Response includes details of the enqueued job including job status and the name
     * of the fine-tuned models once complete.
     *
     * [Learn more about fine-tuning](https://platform.openai.com/docs/guides/fine-tuning)
     */create(e,t){return this._client.post("/fine_tuning/jobs",{body:e,...t})}/**
     * Get info about a fine-tuning job.
     *
     * [Learn more about fine-tuning](https://platform.openai.com/docs/guides/fine-tuning)
     */retrieve(e,t){return this._client.get(`/fine_tuning/jobs/${e}`,t)}list(e={},t){return(0,s.isRequestOptions)(e)?this.list({},e):this._client.getAPIList("/fine_tuning/jobs",d,{query:e,...t})}/**
     * Immediately cancel a fine-tune job.
     */cancel(e,t){return this._client.post(`/fine_tuning/jobs/${e}/cancel`,t)}listEvents(e,t={},r){return(0,s.isRequestOptions)(t)?this.listEvents(e,{},t):this._client.getAPIList(`/fine_tuning/jobs/${e}/events`,f,{query:t,...r})}}e.exports.Jobs=c;class d extends u.CursorPage{}e.exports.FineTuningJobsPage=d;class f extends u.CursorPage{}e.exports.FineTuningJobEventsPage=f,(r=c=e.exports.Jobs||(e.exports.Jobs={})).FineTuningJobsPage=l.FineTuningJobsPage,r.FineTuningJobEventsPage=l.FineTuningJobEventsPage}),B("8tzbZ",function(e,t){// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Images=void 0;var r=U("andP1"),n=U("9xH07");class i extends r.APIResource{/**
     * Creates a variation of a given image.
     */createVariation(e,t){return this._client.post("/images/variations",(0,n.multipartFormRequestOptions)({body:e,...t}))}/**
     * Creates an edited or extended image given an original image and a prompt.
     */edit(e,t){return this._client.post("/images/edits",(0,n.multipartFormRequestOptions)({body:e,...t}))}/**
     * Creates an image given a prompt.
     */generate(e,t){return this._client.post("/images/generations",{body:e,...t})}}e.exports.Images=i,e.exports.Images||(e.exports.Images={})}),B("aROqG",function(e,t){// File generated from our OpenAPI spec by Stainless.
var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),n=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&r(t,e,i);return n(t,e),t};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.ModelsPage=e.exports.Models=void 0;var o=U("andP1");let a=i(e.exports);var s=U("61UiY");class l extends o.APIResource{/**
     * Retrieves a model instance, providing basic information about the model such as
     * the owner and permissioning.
     */retrieve(e,t){return this._client.get(`/models/${e}`,t)}/**
     * Lists the currently available models, and provides basic information about each
     * one such as the owner and availability.
     */list(e){return this._client.getAPIList("/models",u,e)}/**
     * Delete a fine-tuned model. You must have the Owner role in your organization to
     * delete a model.
     */del(e,t){return this._client.delete(`/models/${e}`,t)}}e.exports.Models=l;/**
 * Note: no pagination actually occurs yet, this is for forwards-compatibility.
 */class u extends s.Page{}e.exports.ModelsPage=u,(l=e.exports.Models||(e.exports.Models={})).ModelsPage=a.ModelsPage}),B("iSJzc",function(e,t){// File generated from our OpenAPI spec by Stainless.
Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Moderations=void 0;var r=U("andP1");class n extends r.APIResource{/**
     * Classifies if text violates OpenAI's Content Policy
     */create(e,t){return this._client.post("/moderations",{body:e,...t})}}e.exports.Moderations=n,e.exports.Moderations||(e.exports.Moderations={})});var z={};z=U("1b2ls"),U("acw62");var $={};u($,"createRoot",()=>C,e=>C=e),u($,"hydrateRoot",()=>T,e=>T=e);var V={};!// DCE check should happen before ReactDOM bundle executes so that
// DevTools can report bad minification during injection.
function e(){/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{// Verify that the code above has been dead code eliminated (DCE'd).
__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){// DevTools shouldn't crash React, no matter what.
// We should still report in case we break this code.
console.error(e)}}(),C=(V=U("Xw6Mv")).createRoot,T=V.hydrateRoot;/**
 * React Router DOM v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var H=U("acw62");/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function q(){return(q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}/**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */(h=R||(R={})).Pop="POP",/**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */h.Push="PUSH",/**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */h.Replace="REPLACE";const W="popstate";function K(e,t){if(!1===e||null==e)throw Error(t)}function J(e,t){if(!e){// eslint-disable-next-line no-console
"undefined"!=typeof console&&console.warn(t);try{// Welcome to debugging history!
//
// This error is thrown as a convenience, so you can more easily
// find the source for a warning that appears in the console by
// enabling "pause on exceptions" in your JavaScript debugger.
throw Error(t);// eslint-disable-next-line no-empty
}catch(e){}}}/**
 * For browser-based histories, we combine the state and key into an object
 */function G(e,t){return{usr:e.state,key:e.key,idx:t}}/**
 * Creates a Location object with a unique key from the given Path
 */function X(e,t,r,n){return void 0===r&&(r=null),q({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?Y(t):t,{state:r,// TODO: This could be cleaned up.  push/replace should probably just take
// full Locations now and avoid the need to run through this flow at all
// But that's a pretty big refactor to the current test suite so going to
// keep as is for the time being and just let any incoming keys take precedence
key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */function Q(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */function Y(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}(m=A||(A={})).data="data",m.deferred="deferred",m.redirect="redirect",m.error="error";const Z=new Set(["lazy","caseSensitive","path","id","index","children"]);// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function ee(e,t,r,n){return void 0===r&&(r=[]),void 0===n&&(n={}),e.map((e,i)=>{let o=[...r,i],a="string"==typeof e.id?e.id:o.join("-");if(K(!0!==e.index||!e.children,"Cannot specify children on an index route"),K(!n[a],'Found a route id collision on id "'+a+"\".  Route id's must be globally unique within Data Router usages"),!0===e.index){let r=q({},e,t(e),{id:a});return n[a]=r,r}{let r=q({},e,t(e),{id:a,children:void 0});return n[a]=r,e.children&&(r.children=ee(e.children,t,o,n)),r}})}/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */function et(e,t,r){void 0===r&&(r="/");let n=ei(("string"==typeof t?Y(t):t).pathname||"/",r);if(null==n)return null;let i=function e(t,r,n,i){void 0===r&&(r=[]),void 0===n&&(n=[]),void 0===i&&(i="");let o=(t,o,a)=>{var s;let l,u,c={relativePath:void 0===a?t.path||"":a,caseSensitive:!0===t.caseSensitive,childrenIndex:o,route:t};c.relativePath.startsWith("/")&&(K(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path "'+i+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),c.relativePath=c.relativePath.slice(i.length));let d=el([i,c.relativePath]),f=n.concat(c);t.children&&t.children.length>0&&(K(// @ts-expect-error
!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+d+'".'),e(t.children,r,f,d)),(null!=t.path||t.index)&&r.push({path:d,score:(s=t.index,u=(l=d.split("/")).length,l.some(en)&&(u+=-2),s&&(u+=2),l.filter(e=>!en(e)).reduce((e,t)=>e+(er.test(t)?3:""===t?1:10),u)),routesMeta:f})};return t.forEach((e,t)=>{var r;// coarse-grain check for optional params
if(""!==e.path&&null!=(r=e.path)&&r.includes("?"))for(let r of /**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */function e(t){let r=t.split("/");if(0===r.length)return[];let[n,...i]=r,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===i.length)// `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
return o?[a,""]:[a];let s=e(i.join("/")),l=[];// for absolute paths, ensure `/` instead of empty segment
return(// All child paths with the prefix.  Do this for all children before the
// optional version for all children, so we get consistent ordering where the
// parent optional aspect is preferred as required.  Otherwise, we can get
// child sections interspersed where deeper optional segments are higher than
// parent optional segments, where for example, /:two would explode _earlier_
// then /:one.  By always including the parent as required _for all children_
// first, we avoid this issue
l.push(...s.map(e=>""===e?a:[a,e].join("/"))),o&&l.push(...s),l.map(e=>t.startsWith("/")&&""===e?"/":e))}(e.path))o(e,t,r);else o(e,t)}),r}(e);!function(e){e.sort((e,t)=>{var r,n;return e.score!==t.score?t.score-e.score// Higher score first
:(r=e.routesMeta.map(e=>e.childrenIndex),n=t.routesMeta.map(e=>e.childrenIndex),r.length===n.length&&r.slice(0,-1).every((e,t)=>e===n[t])?// first. This allows people to have fine-grained control over the matching
// behavior by simply putting routes with identical paths in the order they
// want them tried.
r[r.length-1]-n[n.length-1]:// so they sort equally.
0)})}(i);let o=null;for(let e=0;null==o&&e<i.length;++e)o=function(e,t){let{routesMeta:r}=e,n={},i="/",o=[];for(let e=0;e<r.length;++e){let a=r[e],s=e===r.length-1,l="/"===i?t:t.slice(i.length)||"/",u=/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */function(e,t){var r,n,i;let o,a;"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[s,l]=(r=e.path,n=e.caseSensitive,i=e.end,void 0===n&&(n=!1),void 0===i&&(i=!0),J("*"===r||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were "'+r.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+r.replace(/\*$/,"/*")+'".'),o=[],a="^"+r.replace(/\/*\*?$/,"")// Ignore trailing / and /*, we'll handle it below
.replace(/^\/*/,"/")// Make sure it has a leading /
.replace(/[\\.*+^${}|()[\]]/g,"\\$&")// Escape special regex chars
.replace(/\/:(\w+)(\?)?/g,(e,t,r)=>(o.push({paramName:t,isOptional:null!=r}),r?"/?([^\\/]+)?":"/([^\\/]+)")),r.endsWith("*")?(o.push({paramName:"*"}),a+="*"===r||"/*"===r?"(.*)$"// Already matched the initial /, just match the rest
:"(?:\\/(.+)|\\/*)$"):i?a+="\\/*$":""!==r&&"/"!==r&&// then we have _some_ form of path in our regex, so we should expect to
// match only if we find the end of this path segment.  Look for an optional
// non-captured trailing slash (to match a portion of the URL) or the end
// of the path (if we've matched to the end).  We used to do this with a
// word boundary but that gives false positives on routes like
// /user-preferences since `-` counts as a word boundary.
(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),o]),u=t.match(s);if(!u)return null;let c=u[0],d=c.replace(/(.)\/+$/,"$1"),f=u.slice(1);return{params:l.reduce((e,t,r)=>{let{paramName:n,isOptional:i}=t;// We need to compute the pathnameBase here using the raw splat value
// instead of using params["*"] later because it will be decoded then
if("*"===n){let e=f[r]||"";d=c.slice(0,c.length-e.length).replace(/(.)\/+$/,"$1")}let o=f[r];return i&&!o?e[n]=void 0:e[n]=function(e,t){try{return decodeURIComponent(e)}catch(r){return J(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+r+")."),e}}(o||"",n),e},{}),pathname:c,pathnameBase:d,pattern:e}}({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},l);if(!u)return null;Object.assign(n,u.params);let c=a.route;o.push({// TODO: Can this as be avoided?
params:n,pathname:el([i,u.pathname]),pathnameBase:eu(el([i,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(i=el([i,u.pathnameBase]))}return o}(i[e],// or from router.navigate, but we want to match against the unencoded
// paths in the route definitions.  Memory router locations won't be
// encoded here but there also shouldn't be anything to decode so this
// should be a safe operation.  This avoids needing matchRoutes to be
// history-aware.
function(e){try{return decodeURI(e)}catch(t){return J(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}(n));return o}const er=/^:\w+$/,en=e=>"*"===e;/**
 * @private
 */function ei(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;// We want to leave trailing slash behavior in the user's control, so if they
// specify a basename with a trailing slash, we should support it
let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function eo(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t)+"` field ["+JSON.stringify(n)+"].  Please separate it out to the `to."+r+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */function ea(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}/**
 * @private
 */function es(e,t,r,n){let i,o;void 0===n&&(n=!1),"string"==typeof e?i=Y(e):(K(!(i=q({},e)).pathname||!i.pathname.includes("?"),eo("?","pathname","search",i)),K(!i.pathname||!i.pathname.includes("#"),eo("#","pathname","hash",i)),K(!i.search||!i.search.includes("#"),eo("#","search","hash",i)));let a=""===e||""===i.pathname,s=a?"/":i.pathname;// Routing is relative to the current pathname if explicitly requested.
//
// If a pathname is explicitly provided in `to`, it should be relative to the
// route context. This is explained in `Note on `<Link to>` values` in our
// migration guide from v5 as a means of disambiguation between `to` values
// that begin with `/` and those that do not. However, this is problematic for
// `to` values that do not provide a pathname. `to` can simply be a search or
// hash string, in which case we should assume that the navigation is relative
// to the current location's pathname and *not* the route pathname.
if(n||null==s)o=r;else{let e=t.length-1;if(s.startsWith("..")){let t=s.split("/");// Each leading .. segment means "go up one route" instead of "go up one
// URL segment".  This is a key difference from how <a href> works and a
// major reason we call this a "to" value instead of a "href".
for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}// If there are more ".." segments than parent routes, resolve relative to
// the root / URL.
o=e>=0?t[e]:"/"}let l=/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */function(e,t){let r;void 0===t&&(t="/");let{pathname:n,search:i="",hash:o=""}="string"==typeof e?Y(e):e;return{pathname:n?n.startsWith("/")?n:(r=t.replace(/\/+$/,"").split("/"),n.split("/").forEach(e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)}),r.length>1?r.join("/"):"/"):t,search:ec(i),hash:ed(o)}}(i,o),u=s&&"/"!==s&&s.endsWith("/"),c=(a||"."===s)&&r.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}/**
 * @private
 */const el=e=>e.join("/").replace(/\/\/+/g,"/"),eu=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ec=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",ed=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 *
 * We don't export the class for public use since it's an implementation
 * detail, but we export the interface above so folks can build their own
 * abstractions around instances via isRouteErrorResponse()
 */class ef{constructor(e,t,r,n){void 0===n&&(n=!1),this.status=e,this.statusText=t||"",this.internal=n,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */function ep(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const eh=["post","put","patch","delete"],em=new Set(eh),eg=["get",...eh],ey=new Set(eg),ev=new Set([301,302,303,307,308]),eb=new Set([307,308]),ew={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ex={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},e_={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},eE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eS=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),eP="remix-router-transitions";function ek(e,t,r,n,i,o,a){let s,l;if(null!=o&&"path"!==a){for(let e of(// Grab matches up to the calling route so our route-relative logic is
// relative to the correct source route.  When using relative:path,
// fromRouteId is ignored since that is always relative to the current
// location path
s=[],t))if(s.push(e),e.route.id===o){l=e;break}}else s=t,l=t[t.length-1];// Resolve the relative path
let u=es(i||".",ea(s).map(e=>e.pathnameBase),ei(e.pathname,r)||e.pathname,"path"===a);return null==i&&(u.search=e.search,u.hash=e.hash),(null==i||""===i||"."===i)&&l&&l.route.index&&!eG(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n&&"/"!==r&&(u.pathname="/"===u.pathname?r:el([r,u.pathname])),Q(u)}// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function eI(e,t,r,n){var i;let o,a;// Return location verbatim on non-submission navigations
if(!n||!(null!=n&&("formData"in n&&null!=n.formData||"body"in n&&void 0!==n.body)))return{path:r};if(n.formMethod&&(i=n.formMethod,!ey.has(i.toLowerCase())))return{path:r,error:eB(405,{method:n.formMethod})};let s=()=>({path:r,error:eB(400,{type:"invalid-body"})}),l=n.formMethod||"get",u=e?l.toUpperCase():l.toLowerCase(),c=e$(r);if(void 0!==n.body){if("text/plain"===n.formEncType){// text only support POST/PUT/PATCH/DELETE submissions
if(!eW(u))return s();let e="string"==typeof n.body?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((e,t)=>{let[r,n]=t;return""+e+r+"="+n+"\n"},""):String(n.body);return{path:r,submission:{formMethod:u,formAction:c,formEncType:n.formEncType,formData:void 0,json:void 0,text:e}}}if("application/json"===n.formEncType){// json only supports POST/PUT/PATCH/DELETE submissions
if(!eW(u))return s();try{let e="string"==typeof n.body?JSON.parse(n.body):n.body;return{path:r,submission:{formMethod:u,formAction:c,formEncType:n.formEncType,formData:void 0,json:e,text:void 0}}}catch(e){return s()}}}if(K("function"==typeof FormData,"FormData is not available in this environment"),n.formData)o=eM(n.formData),a=n.formData;else if(n.body instanceof FormData)o=eM(n.body),a=n.body;else if(n.body instanceof URLSearchParams)a=ej(o=n.body);else if(null==n.body)o=new URLSearchParams,a=new FormData;else try{o=new URLSearchParams(n.body),a=ej(o)}catch(e){return s()}let d={formMethod:u,formAction:c,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:a,json:void 0,text:void 0};if(eW(d.formMethod))return{path:r,submission:d};// Flatten submission onto URLSearchParams for GET submissions
let f=Y(r);return t&&f.search&&eG(f.search)&&o.append("index",""),f.search="?"+o,{path:Q(f),submission:d}}function eO(e,t,r,n,i,o,a,s,l,u,c,d,f,p){let h=p?Object.values(p)[0]:f?Object.values(f)[0]:void 0,m=e.createURL(t.location),g=e.createURL(i),y=// Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them
(function(e,t){let r=e;if(t){let n=e.findIndex(e=>e.route.id===t);n>=0&&(r=e.slice(0,n))}return r})(r,p?Object.keys(p)[0]:void 0).filter((e,r)=>{var i,s;let l,u;if(e.route.lazy)return!0;if(null==e.route.loader)return!1;// Always call the loader on new route instances and pending defer cancellations
if(i=t.loaderData,l=!(s=t.matches[r])||// [a, b] -> [a, c]
e.route.id!==s.route.id,u=void 0===i[e.route.id],l||u||a.some(t=>t===e.route.id))return!0;// This is the default implementation for when we revalidate.  If the route
// provides it's own implementation, then we give them full control but
// provide this value so they can leverage it if needed after they check
// their own specific use cases
let c=t.matches[r];return eT(e,q({currentUrl:m,currentParams:c.params,nextUrl:g,nextParams:e.params},n,{actionResult:h,defaultShouldRevalidate:o||// Clicked the same link, resubmitted a GET form
m.pathname+m.search===g.pathname+g.search||// Search params affect all loaders
m.search!==g.search||eC(c,e)}))}),v=[];return l.forEach((e,i)=>{// Don't revalidate if fetcher won't be present in the subsequent render
if(!r.some(t=>t.route.id===e.routeId))return;let a=et(c,e.path,d);// If the fetcher path no longer matches, push it in with null matches so
// we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
// currently only a use-case for Remix HMR where the route tree can change
// at runtime and remove a route previously loaded via a fetcher
if(!a){v.push({key:i,routeId:e.routeId,path:e.path,matches:null,match:null,controller:null});return}// Revalidating fetchers are decoupled from the route matches since they
// load from a static href.  They revalidate based on explicit revalidation
// (submission, useRevalidator, or X-Remix-Revalidate)
let l=t.fetchers.get(i),f=eX(a,e.path);!u.has(i)&&(s.includes(i)||(l&&"idle"!==l.state&&void 0===l.data?o:eT(f,q({currentUrl:m,currentParams:t.matches[t.matches.length-1].params,nextUrl:g,nextParams:r[r.length-1].params},n,{actionResult:h,defaultShouldRevalidate:o}))))&&v.push({key:i,routeId:e.routeId,path:e.path,matches:a,match:f,controller:new AbortController})}),[y,v]}function eC(e,t){let r=e.route.path;return e.pathname!==t.pathname||// splat param changed, which is not present in match.path
// e.g. /files/images/avatar.jpg -> files/finances.xls
null!=r&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function eT(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if("boolean"==typeof r)return r}return t.defaultShouldRevalidate}/**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */async function eR(e,t,r){if(!e.lazy)return;let n=await e.lazy();// If the lazy route function was executed and removed by another parallel
// call then we can return - first lazy() to finish wins because the return
// value of lazy is expected to be static
if(!e.lazy)return;let i=r[e.id];K(i,"No route found in manifest");// Update the route in place.  This should be safe because there's no way
// we could yet be sitting on this route as we can't get there without
// resolving lazy() first.
//
// This is different than the HMR "update" use-case where we may actively be
// on the route being updated.  The main concern boils down to "does this
// mutation affect any ongoing navigations or any current state.matches
// values?".  If not, it should be safe to update in place.
let o={};for(let e in n){let t=void 0!==i[e]&&// This property isn't static since it should always be updated based
// on the route updates
"hasErrorBoundary"!==e;J(!t,'Route "'+i.id+'" has a static property "'+e+'" defined but its lazy function is also returning a value for this property. The lazy route property "'+e+'" will be ignored.'),t||Z.has(e)||(o[e]=n[e])}// Mutate the route with the provided updates.  Do this first so we pass
// the updated version to mapRouteProperties
Object.assign(i,o),// Mutate the `hasErrorBoundary` property on the route based on the route
// updates and remove the `lazy` function so we don't resolve the lazy
// route again.
Object.assign(i,q({},t(i),{lazy:void 0}))}async function eA(e,t,r,n,i,o,a,s){var l,u,c,d;let f,p,h;void 0===s&&(s={});let m=e=>{let n;let i=new Promise((e,t)=>n=t);return h=()=>n(),t.signal.addEventListener("abort",h),Promise.race([e({request:t,params:r.params,context:s.requestContext}),i])};try{let n=r.route[e];if(r.route.lazy){if(n){let e;let t=await Promise.all([// If the handler throws, don't let it immediately bubble out,
// since we need to let the lazy() execution finish so we know if this
// route has a boundary that can handle the error
m(n).catch(t=>{e=t}),eR(r.route,o,i)]);if(e)throw e;p=t[0]}else if(// Load lazy route module, then run any returned handler
await eR(r.route,o,i),n=r.route[e])// with un-abortable behavior of handler execution on non-lazy or
// previously-lazy-loaded routes
p=await m(n);else{if("action"!==e)// hit the invariant below that errors on returning undefined.
return{type:A.data,data:void 0};let n=new URL(t.url),i=n.pathname+n.search;throw eB(405,{method:t.method,pathname:i,routeId:r.route.id})}}else if(n)p=await m(n);else{let e=new URL(t.url),r=e.pathname+e.search;throw eB(404,{pathname:r})}K(void 0!==p,"You defined "+("action"===e?"an action":"a loader")+" for route "+('"'+r.route.id)+"\" but didn't return anything from your `"+e+"` function. Please return a value or `null`.")}catch(e){f=A.error,p=e}finally{h&&t.signal.removeEventListener("abort",h)}if(null!=(l=p)&&"number"==typeof l.status&&"string"==typeof l.statusText&&"object"==typeof l.headers&&void 0!==l.body){let e,i=p.status;// Process redirects
if(ev.has(i)){let e=p.headers.get("Location");// Support relative routing in internal redirects
if(K(e,"Redirects returned/thrown from loaders/actions must have a Location header"),eE.test(e)){if(!s.isStaticRequest){// Strip off the protocol+origin for same-origin + same-basename absolute
// redirects. If this is a static request, we can let it go back to the
// browser as-is
let r=new URL(t.url),n=new URL(e.startsWith("//")?r.protocol+e:e),i=null!=ei(n.pathname,a);n.origin===r.origin&&i&&(e=n.pathname+n.search+n.hash)}}else e=ek(new URL(t.url),n.slice(0,n.indexOf(r)+1),a,!0,e);// Don't process redirects in the router during static requests requests.
// Instead, throw the Response and let the server handle it with an HTTP
// redirect.  We also update the Location header in place in this flow so
// basename and relative routing is taken into account
if(s.isStaticRequest)throw p.headers.set("Location",e),p;return{type:A.redirect,status:i,location:e,revalidate:null!==p.headers.get("X-Remix-Revalidate"),reloadDocument:null!==p.headers.get("X-Remix-Reload-Document")}}// For SSR single-route requests, we want to hand Responses back directly
// without unwrapping.  We do this with the QueryRouteResponse wrapper
// interface so we can know whether it was returned or thrown
if(s.isRouteRequest)throw{type:f===A.error?A.error:A.data,response:p};let o=p.headers.get("Content-Type");return(e=o&&/\bapplication\/json\b/.test(o)?await p.json():await p.text(),f===A.error)?{type:f,error:new ef(i,p.statusText,e),headers:p.headers}:{type:A.data,data:e,statusCode:p.status,headers:p.headers}}return f===A.error?{type:f,error:p}:(u=p)&&"object"==typeof u&&"object"==typeof u.data&&"function"==typeof u.subscribe&&"function"==typeof u.cancel&&"function"==typeof u.resolveData?{type:A.deferred,deferredData:p,statusCode:null==(c=p.init)?void 0:c.status,headers:(null==(d=p.init)?void 0:d.headers)&&new Headers(p.init.headers)}:{type:A.data,data:p}}// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function eN(e,t,r,n){let i=e.createURL(e$(t)).toString(),o={signal:r};if(n&&eW(n.formMethod)){let{formMethod:e,formEncType:t}=n;// Didn't think we needed this but it turns out unlike other methods, patch
// won't be properly normalized to uppercase and results in a 405 error.
// See: https://fetch.spec.whatwg.org/#concept-method
o.method=e.toUpperCase(),"application/json"===t?(o.headers=new Headers({"Content-Type":t}),o.body=JSON.stringify(n.json)):"text/plain"===t?o.body=n.text:"application/x-www-form-urlencoded"===t&&n.formData?o.body=eM(n.formData):o.body=n.formData}return new Request(i,o)}function eM(e){let t=new URLSearchParams;for(let[r,n]of e.entries())t.append(r,"string"==typeof n?n:n.name);return t}function ej(e){let t=new FormData;for(let[r,n]of e.entries())t.append(r,n);return t}function eD(e,t,r,n,i,o,a,s){var l;let u,c,d,f,p;let{loaderData:h,errors:m}=(l=i,c={},d=null,f=!1,p={},// Process loader results into state.loaderData/state.errors
n.forEach((e,n)=>{let i=r[n].route.id;if(K(!eq(e),"Cannot handle redirect results in processLoaderData"),eH(e)){// Look upwards from the matched route for the closest ancestor
// error boundary, defaulting to the root match
let r=eF(t,i),n=e.error;l&&(n=Object.values(l)[0],l=void 0),null==(d=d||{})[r.route.id]&&(d[r.route.id]=n),// Clear our any prior loaderData for the throwing route
c[i]=void 0,f||(f=!0,u=ep(e.error)?e.error.status:500),e.headers&&(p[i]=e.headers)}else eV(e)?(s.set(i,e.deferredData),c[i]=e.deferredData.data):c[i]=e.data,null==e.statusCode||200===e.statusCode||f||(u=e.statusCode),e.headers&&(p[i]=e.headers)}),l&&(d=l,c[Object.keys(l)[0]]=void 0),{loaderData:c,errors:d,statusCode:u||200,loaderHeaders:p});// Process results from our revalidating fetchers
for(let t=0;t<o.length;t++){let{key:r,match:n,controller:i}=o[t];K(void 0!==a&&void 0!==a[t],"Did not find corresponding fetcher result");let s=a[t];// Process fetcher non-redirect errors
if(!i||!i.signal.aborted){if(eH(s)){let t=eF(e.matches,null==n?void 0:n.route.id);m&&m[t.route.id]||(m=q({},m,{[t.route.id]:s.error})),e.fetchers.delete(r)}else if(eq(s))// keep this to type narrow to a success result in the else
K(!1,"Unhandled fetcher revalidation redirect");else if(eV(s))// in resolveDeferredResults
K(!1,"Unhandled fetcher deferred data");else{let t=e0(s.data);e.fetchers.set(r,t)}}}return{loaderData:h,errors:m}}function eL(e,t,r,n){let i=q({},t);for(let o of r){let r=o.route.id;if(t.hasOwnProperty(r)?void 0!==t[r]&&(i[r]=t[r]):void 0!==e[r]&&o.route.loader&&// wasn't removed by HMR
(i[r]=e[r]),n&&n.hasOwnProperty(r))break}return i}// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function eF(e,t){return(t?e.slice(0,e.findIndex(e=>e.route.id===t)+1):[...e]).reverse().find(e=>!0===e.route.hasErrorBoundary)||e[0]}function eU(e){// Prefer a root layout route if present, otherwise shim in a route object
let t=1===e.length?e[0]:e.find(e=>e.index||!e.path||"/"===e.path)||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function eB(e,t){let{pathname:r,routeId:n,method:i,type:o}=void 0===t?{}:t,a="Unknown Server Error",s="Unknown @remix-run/router error";return 400===e?(a="Bad Request",i&&r&&n?s="You made a "+i+' request to "'+r+'" but did not provide a `loader` for route "'+n+'", so there is no way to handle the request.':"defer-action"===o?s="defer() is not supported in actions":"invalid-body"===o&&(s="Unable to encode submission body")):403===e?(a="Forbidden",s='Route "'+n+'" does not match URL "'+r+'"'):404===e?(a="Not Found",s='No route matches URL "'+r+'"'):405===e&&(a="Method Not Allowed",i&&r&&n?s="You made a "+i.toUpperCase()+' request to "'+r+'" but did not provide an `action` for route "'+n+'", so there is no way to handle the request.':i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new ef(e||500,a,Error(s),!0)}// Find any returned redirect errors, starting from the lowest match
function ez(e){for(let t=e.length-1;t>=0;t--){let r=e[t];if(eq(r))return{result:r,idx:t}}}function e$(e){let t="string"==typeof e?Y(e):e;return Q(q({},t,{hash:""}))}function eV(e){return e.type===A.deferred}function eH(e){return e.type===A.error}function eq(e){return(e&&e.type)===A.redirect}function eW(e){return em.has(e.toLowerCase())}async function eK(e,t,r,n,i,o){for(let a=0;a<r.length;a++){let s=r[a],l=t[a];// If we don't have a match, then we can have a deferred result to do
// anything with.  This is for revalidating fetchers where the route was
// removed during HMR
if(!l)continue;let u=e.find(e=>e.route.id===l.route.id),c=null!=u&&!eC(u,l)&&(o&&o[l.route.id])!==void 0;if(eV(s)&&(i||c)){// Note: we do not have to touch activeDeferreds here since we race them
// against the signal in resolveDeferredData and they'll get aborted
// there if needed
let e=n[a];K(e,"Expected an AbortSignal for revalidating fetcher deferred result"),await eJ(s,e,i).then(e=>{e&&(r[a]=e||r[a])})}}}async function eJ(e,t,r){if(void 0===r&&(r=!1),!await e.deferredData.resolveData(t)){if(r)try{return{type:A.data,data:e.deferredData.unwrappedData}}catch(e){// Handle any TrackedPromise._error values encountered while unwrapping
return{type:A.error,error:e}}return{type:A.data,data:e.deferredData.data}}}function eG(e){return new URLSearchParams(e).getAll("index").some(e=>""===e)}function eX(e,t){let r="string"==typeof t?Y(t).search:t.search;if(e[e.length-1].route.index&&eG(r||""))return e[e.length-1];// Otherwise grab the deepest "path contributing" match (ignoring index and
// pathless layout routes)
let n=ea(e);return n[n.length-1]}function eQ(e){let{formMethod:t,formAction:r,formEncType:n,text:i,formData:o,json:a}=e;if(t&&r&&n){if(null!=i)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:void 0,text:i};if(null!=o)return{formMethod:t,formAction:r,formEncType:n,formData:o,json:void 0,text:void 0};if(void 0!==a)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:a,text:void 0}}}function eY(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function eZ(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function e0(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}Symbol("deferred");/**
 * React Router v6.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var H=U("acw62");function e1(){return(e1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
const e2=/*#__PURE__*/H.createContext(null),e3=/*#__PURE__*/H.createContext(null),e4=/*#__PURE__*/H.createContext(null),e6=/*#__PURE__*/H.createContext(null),e5=/*#__PURE__*/H.createContext({outlet:null,matches:[],isDataRoute:!1}),e8=/*#__PURE__*/H.createContext(null);/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */function e7(){return null!=H.useContext(e6)}/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */function e9(){return e7()||K(!1),H.useContext(e6).location}// Mute warnings for calls to useNavigate in SSR environments
function te(e){H.useContext(e4).static||// See: https://github.com/facebook/react/pull/26395
// eslint-disable-next-line react-hooks/rules-of-hooks
H.useLayoutEffect(e)}/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */function tt(){let{isDataRoute:e}=H.useContext(e5);// Conditional usage is OK here because the usage of a data router is static
// eslint-disable-next-line react-hooks/rules-of-hooks
return e?/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */function(){let e;let{router:t}=(ta.UseNavigateStable,(e=H.useContext(e2))||K(!1),e),r=tl(ts.UseNavigateStable),n=H.useRef(!1);return te(()=>{n.current=!0}),H.useCallback(function(e,i){void 0===i&&(i={}),n.current&&("number"==typeof e?t.navigate(e):t.navigate(e,e1({fromRouteId:r},i)))},[t,r])}():function(){e7()||K(!1);let e=H.useContext(e2),{basename:t,navigator:r}=H.useContext(e4),{matches:n}=H.useContext(e5),{pathname:i}=e9(),o=JSON.stringify(ea(n).map(e=>e.pathnameBase)),a=H.useRef(!1);return te(()=>{a.current=!0}),H.useCallback(function(n,s){// Short circuit here since if this happens on first render the navigate
// is useless because we haven't wired up our history listener yet
if(void 0===s&&(s={}),!a.current)return;if("number"==typeof n){r.go(n);return}let l=es(n,JSON.parse(o),i,"path"===s.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:el([t,l.pathname])),(s.replace?r.replace:r.push)(l,s.state,s)},[t,r,o,i,e])}()}const tr=/*#__PURE__*/H.createContext(null),tn=/*#__PURE__*/H.createElement(function(){var e;let t,r,n;let i=(r=H.useContext(e8),ts.UseRouteError,(t=H.useContext(e3))||K(!1),n=tl(ts.UseRouteError),// If this was a render error, we put it in a RouteError context inside
// of RenderErrorBoundary
r||(null==(e=t.errors)?void 0:e[n])),o=ep(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),a=i instanceof Error?i.stack:null;return /*#__PURE__*/H.createElement(H.Fragment,null,/*#__PURE__*/H.createElement("h2",null,"Unexpected Application Error!"),/*#__PURE__*/H.createElement("h3",{style:{fontStyle:"italic"}},o),a?/*#__PURE__*/H.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},a):null,null)},null);class ti extends H.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return(// When we get into an error state, the user will likely click "back" to the
// previous page that didn't have an error. Because this wraps the entire
// application, that will have no effect--the error page continues to display.
// This gives us a mechanism to recover from the error when the location changes.
//
// Whether we're in an error state or not, we update the location in state
// so that when we are in an error state, it gets reset when a new location
// comes in and the user recovers from the error.
t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation})}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?/*#__PURE__*/H.createElement(e5.Provider,{value:this.props.routeContext},/*#__PURE__*/H.createElement(e8.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function to(e){let{routeContext:t,match:r,children:n}=e,i=H.useContext(e2);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),/*#__PURE__*/H.createElement(e5.Provider,{value:t},n)}var ta=((g=ta||{}).UseBlocker="useBlocker",g.UseRevalidator="useRevalidator",g.UseNavigateStable="useNavigate",g),ts=((y=ts||{}).UseBlocker="useBlocker",y.UseLoaderData="useLoaderData",y.UseActionData="useActionData",y.UseRouteError="useRouteError",y.UseNavigation="useNavigation",y.UseRouteLoaderData="useRouteLoaderData",y.UseMatches="useMatches",y.UseRevalidator="useRevalidator",y.UseNavigateStable="useNavigate",y.UseRouteId="useRouteId",y);// Internal version with hookName-aware debugging
function tl(e){let t;let r=((t=H.useContext(e5))||K(!1),t),n=r.matches[r.matches.length-1];return n.route.id||K(!1),n.route.id}/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */function tu(e){let{to:t,replace:r,state:n,relative:i}=e;e7()||K(!1);let{matches:o}=H.useContext(e5),{pathname:a}=e9(),s=tt(),l=JSON.stringify(es(t,ea(o).map(e=>e.pathnameBase),a,"path"===i));return H.useEffect(()=>s(JSON.parse(l),{replace:r,state:n,relative:i}),[s,l,i,r,n]),null}/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */function tc(e){var t;let r;return t=e.context,(r=H.useContext(e5).outlet)?/*#__PURE__*/H.createElement(tr.Provider,{value:t},r):r}/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */function td(e){let{basename:t="/",children:r=null,location:n,navigationType:i=R.Pop,navigator:o,static:a=!1}=e;e7()&&K(!1);// Preserve trailing slashes on basename, so we can let the user control
// the enforcement of trailing slashes throughout the app
let s=t.replace(/^\/*/,"/"),l=H.useMemo(()=>({basename:s,navigator:o,static:a}),[s,o,a]);"string"==typeof n&&(n=Y(n));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:p="default"}=n,h=H.useMemo(()=>{let e=ei(u,s);return null==e?null:{location:{pathname:e,search:c,hash:d,state:f,key:p},navigationType:i}},[s,u,c,d,f,p,i]);return null==h?null:/*#__PURE__*/H.createElement(e4.Provider,{value:l},/*#__PURE__*/H.createElement(e6.Provider,{children:r,value:h}))}H.startTransition;var tf=((v=tf||{})[v.pending=0]="pending",v[v.success=1]="success",v[v.error=2]="error",v);function tp(){return(tp=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}new Promise(()=>{});const th=/*#__PURE__*/H.createContext({isTransitioning:!1}),tm=/*#__PURE__*/H.createContext(new Map),tg=H.startTransition;class ty{constructor(){this.status="pending",this.promise=new Promise((e,t)=>{this.resolve=t=>{"pending"===this.status&&(this.status="resolved",e(t))},this.reject=e=>{"pending"===this.status&&(this.status="rejected",t(e))}})}}function tv(e){let{routes:t,state:r}=e;return(// Internal implementation with accept optional param for RouterProvider usage
function(e,t,r){let n;e7()||K(!1);let{navigator:i}=H.useContext(e4),{matches:o}=H.useContext(e5),a=o[o.length-1],s=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=e9();if(t){var c;let e="string"==typeof t?Y(t):t;"/"===l||(null==(c=e.pathname)?void 0:c.startsWith(l))||K(!1),n=e}else n=u;let d=n.pathname||"/",f=et(e,{pathname:"/"===l?d:d.slice(l.length)||"/"}),p=function(e,t,r){var n,i;if(void 0===t&&(t=[]),void 0===r&&(r=null),null==e){if(null==(i=r)||!i.errors)return null;// boundary.  Use the pre-matched (or shimmed) matches
e=r.matches}let o=e,a=null==(n=r)?void 0:n.errors;if(null!=a){let e=o.findIndex(e=>e.route.id&&(null==a?void 0:a[e.route.id]));e>=0||K(!1),o=o.slice(0,Math.min(o.length,e+1))}return o.reduceRight((e,n,i)=>{let s=n.route.id?null==a?void 0:a[n.route.id]:null,l=null;r&&(l=n.route.errorElement||tn);let u=t.concat(o.slice(0,i+1)),c=()=>{let t;return t=s?l:n.route.Component?/*#__PURE__*/H.createElement(n.route.Component,null):n.route.element?n.route.element:e,/*#__PURE__*/H.createElement(to,{match:n,routeContext:{outlet:e,matches:u,isDataRoute:null!=r},children:t})};// Only wrap in an error boundary within data router usages when we have an
// ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
// an ancestor ErrorBoundary/errorElement
return r&&(n.route.ErrorBoundary||n.route.errorElement||0===i)?/*#__PURE__*/H.createElement(ti,{location:r.location,revalidation:r.revalidation,component:l,error:s,children:c(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):c()},null)}(f&&f.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:el([l,// Re-encode pathnames that were decoded inside matchRoutes
    i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?l:el([l,// Re-encode pathnames that were decoded inside matchRoutes
    i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),o,r);return(// When a user passes in a `locationArg`, the associated routes need to
// be wrapped in a new `LocationContext.Provider` in order for `useLocation`
// to use the scoped location instead of the global location.
t&&p?/*#__PURE__*/H.createElement(e6.Provider,{value:{location:e1({pathname:"/",search:"",hash:"",state:null,key:"default"},n),navigationType:R.Pop}},p):p)}(t,void 0,r))}"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,(b=N||(N={})).UseScrollRestoration="useScrollRestoration",b.UseSubmit="useSubmit",b.UseSubmitFetcher="useSubmitFetcher",b.UseFetcher="useFetcher",b.useViewTransitionState="useViewTransitionState",(w=M||(M={})).UseFetcher="useFetcher",w.UseFetchers="useFetchers",w.UseScrollRestoration="useScrollRestoration";var H=U("acw62");const tb=(e,t)=>{let r=/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(e),n=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(t);return r?n?"":"Please enter valid password":"Please enter valid email address"};// The primary entry point assumes we're working with standard ReactDOM/RN, but
// older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
// Because of that, the useSyncExternalStore compat shim is needed.
var tw=U("hfliI"),tx={};tx=U("6VZtt");let t_=// Default to a dummy "batch" implementation that just runs the callback
function(e){e()};// Allow injecting another batching function later
const tE=()=>t_;var H=(U("acw62"),U("acw62"),U("acw62"));const tS=Symbol.for("react-redux-context"),tP="undefined"!=typeof globalThis?globalThis:/* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */{},tk=/*#__PURE__*/function(){var e;if(!H.createContext)return{};let t=null!=(e=tP[tS])?e:tP[tS]=new Map,r=t.get(H.createContext);return r||(r=H.createContext(null),t.set(H.createContext,r)),r}();function tI(e=tk){return function(){let t=(0,H.useContext)(e);return t}}const tO=/*#__PURE__*/tI();let tC=()=>{throw Error("uSES not initialized!")};const tT=(e,t)=>e===t,tR=/*#__PURE__*/function(e=tk){let t=e===tk?tO:tI(e);return function(e,r={}){let{equalityFn:n=tT,stabilityCheck:i,noopCheck:o}="function"==typeof r?{equalityFn:r}:r,{store:a,subscription:s,getServerState:l,stabilityCheck:u,noopCheck:c}=t();(0,H.useRef)(!0);let d=(0,H.useCallback)({[e.name](t){let r=e(t);return r}}[e.name],[e,u,i]),f=tC(s.addNestedSub,a.getState,l||a.getState,d,n);return(0,H.useDebugValue)(f),f}}();var tA={};tA=U("dNL7g");/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */var tN={};tN[tA.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tN[tA.Memo]={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0};var H=U("acw62");U("9cCWX");const tM={notify(){},get:()=>[]};var H=U("acw62");const tj=!!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement),tD=tj?H.useLayoutEffect:H.useEffect;var H=U("acw62");function tL(e=tk){let t=e===tk?tO:tI(e);return function(){let{store:e}=t();// @ts-ignore
return e}}const tF=/*#__PURE__*/tL(),tU=/*#__PURE__*/function(e=tk){let t=e===tk?tF:tL(e);return function(){let e=t();// @ts-ignore
return e.dispatch}}();tC=tx.useSyncExternalStoreWithSelector,tw.useSyncExternalStore,t_=V.unstable_batchedUpdates;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */var tB=U("hPtJY");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tz=function(e){// TODO(user): Use native implementations if/when available
let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(// Surrogate Pair
i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},t$=function(e){// TODO(user): Use native implementations if/when available
let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){// Surrogate Pair
let o=e[r++],a=e[r++],s=e[r++],l=((7&i)<<18|(63&o)<<12|(63&a)<<6|63&s)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{let o=e[r++],a=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&a)}}return t.join("")},tV={/**
     * Maps bytes to characters.
     */byteToCharMap_:null,/**
     * Maps characters to bytes.
     */charToByteMap_:null,/**
     * Maps bytes to websafe characters.
     * @private
     */byteToCharMapWebSafe_:null,/**
     * Maps websafe characters to bytes.
     * @private
     */charToByteMapWebSafe_:null,/**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",/**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},/**
     * Our websafe alphabet.
     */get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},/**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */HAS_NATIVE_SUPPORT:"function"==typeof atob,/**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],o=t+1<e.length,a=o?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,u=i>>2,c=(3&i)<<4|a>>4,d=(15&a)<<2|l>>6,f=63&l;s||(f=64,o||(d=64)),n.push(r[u],r[c],r[d],r[f])}return n.join("")},/**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */encodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(tz(e),t))},/**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */decodeString(e,t){return(// Shortcut for Mozilla browsers that implement
// a native base64 encoder in the form of "btoa/atob"
this.HAS_NATIVE_SUPPORT&&!t?atob(e):t$(this.decodeStringToByteArray(e,t)))},/**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],o=t<e.length,a=o?r[e.charAt(t)]:0;++t;let s=t<e.length,l=s?r[e.charAt(t)]:64;++t;let u=t<e.length,c=u?r[e.charAt(t)]:64;if(++t,null==i||null==a||null==l||null==c)throw new tH;let d=i<<2|a>>4;if(n.push(d),64!==l){let e=a<<4&240|l>>2;if(n.push(e),64!==c){let e=l<<6&192|c;n.push(e)}}}return n},/**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};// We want quick mappings back and forth, so we precompute two maps.
for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};/**
 * An error encountered while decoding base64 string.
 */class tH extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}/**
 * URL-safe base64 encoding
 */const tq=function(e){let t=tz(e);return tV.encodeByteArray(t,!0)},tW=function(e){// Use base64url encoding and remove padding in the end (dot characters).
return tq(e).replace(/\./g,"")},tK=function(e){try{return tV.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},tJ=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==D)return D;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,tG=()=>{if(void 0===tB||void 0===tB.env)return;let e=void 0;if(e)return JSON.parse(e)},tX=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){// Some environments such as Angular Universal SSR have a
// `document` object but error on accessing `document.cookie`.
return}let t=e&&tK(e[1]);return t&&JSON.parse(t)},tQ=()=>{try{return tJ()||tG()||tX()}catch(e){/**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},tY=e=>{var t,r;return null===(r=null===(t=tQ())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},tZ=()=>{var e;return null===(e=tQ())||void 0===e?void 0:e.config},t0=e=>{var t;return null===(t=tQ())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}/**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(// Attaching noop handler just in case developer wasn't expecting
// promises
this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */function t2(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function t3(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */function t4(){try{return"object"==typeof indexedDB}catch(e){return!1}}/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */function t6(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class t5 extends Error{constructor(/** The error code for this error. */e,t,/** Custom data for this error. */r){super(t),this.code=e,this.customData=r,/** The custom name for all FirebaseErrors. */this.name="FirebaseError",// Fix For ES5
// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,t5.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,t8.prototype.create)}}class t8{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],o=i?i.replace(t7,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",a=`${this.serviceName}: ${o} (${n}).`,s=new t5(n,a,r);return s}}const t7=/\{\$([^}]+)}/g;/**
 * Deep equal two objects. Support Arrays and Objects.
 */function t9(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let r=e[i],o=t[i];if(re(r)&&re(o)){if(!t9(r,o))return!1}else if(r!==o)return!1}for(let e of n)if(!r.includes(e))return!1;return!0}function re(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */function rt(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */function rr(e){let t={},r=e.replace(/^\?/,"").split("&");return r.forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */function rn(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */class ri{/**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,// Micro-task scheduling by calling task.then().
this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,// Call the executor asynchronously so subscribers that are called
// synchronously after the creation of the subscribe function
// can still receive the very first value generated in the executor.
this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}/**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!/**
 * Return true if the object passed in implements any of the named methods.
 */function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=ro),void 0===n.error&&(n.error=ro),void 0===n.complete&&(n.complete=ro);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){// nothing
}}),this.observers.push(n),i}// Unsubscribe is synchronous - we guarantee that no events are sent to
// any unsubscribed Observer.
unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)// Since sendOne calls asynchronously - there is no chance that
// this.observers will become undefined.
for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}// Call the Observer via one of it's callback function. We are careful to
// confirm that the observe has not been unsubscribed since this asynchronous
// function had been queued.
sendOne(e,t){// Execute the callback asynchronously
// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){// Ignore exceptions raised in Observers or missing methods of an
// Observer.
// Log error to console. b/31404806
"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),// Proxy is no longer needed - garbage collect references
// eslint-disable-next-line @typescript-eslint/no-floating-promises
this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ro(){// do nothing
}/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */function ra(e,t=1e3,r=2){// Calculates an exponentially increasing value.
// Deviation: calculates value from count and a constant interval, so we only need to save value
// and count to restore state.
let n=t*Math.pow(r,e);// Limits backoff to max to avoid effectively permanent backoff.
return Math.min(144e5,n+Math.round(// Deviation: changes multiplication order to improve readability.
.5*n*// A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
// if we add or subtract.
(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(e){return e&&e._delegate?e._delegate:e}/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */class rl{/**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,/**
         * Properties to be added to the service namespace
         */this.serviceProps={},this.instantiationMode="LAZY"/* InstantiationMode.LAZY */,this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */class rc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}/**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */get(e){// if multipleInstances is not supported, use the default name
let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new t1;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){// when the instance factory throws an exception during get(), it should not cause
// a fatal error. We just return the unresolved promise in this case.
}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;// if multipleInstances is not supported, use the default name
let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{// In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);// return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
if(this.component=e,this.shouldAutoInitialize()){// if the service is eager, initialize the default instance
if("EAGER"/* InstantiationMode.EAGER */===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:ru})}catch(e){// when the instance factory for an eager Component throws an exception during the eager
// initialization, it should not cause a fatal error.
// TODO: Investigate if we need to make it configurable, because some component may want to cause
// a fatal error in this case?
}// Create service instances for the pending promises and resolve them
// NOTE: if this.multipleInstances is false, only the default instance will be created
// and all promises with resolve with it regardless of the identifier.
for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{// `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){// when the instance factory throws an exception, it should not cause
// a fatal error. We just leave the promise unresolved.
}}}}clearInstance(e=ru){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}// app.delete() will call this method on every provider to delete the services
// TODO: should we mark the provider as deleted?
async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e)// legacy services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e)// modularized services
// eslint-disable-next-line @typescript-eslint/no-explicit-any
.map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=ru){return this.instances.has(e)}getOptions(e=ru){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});// resolve any pending promise waiting for the service instance
for(let[e,t]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(e);r===i&&t.resolve(n)}return n}/**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let o=this.instances.get(n);return o&&e(o,n),()=>{i.delete(e)}}/**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){// ignore errors in the onInit callback
}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===ru?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),/**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){// ignore errors in the onInstanceCreatedCallback
}return r||null}normalizeInstanceIdentifier(e=ru){return this.component?this.component.multipleInstances?e:ru:e// assume multiple instances are supported before the component is provided.
}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"/* InstantiationMode.EXPLICIT */!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */class rd{constructor(e){this.name=e,this.providers=new Map}/**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}/**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */getProvider(e){if(this.providers.has(e))return this.providers.get(e);// create a Provider for a service that hasn't registered with Firebase
let t=new rc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A container for all of the Logger instances
 */const rf=[];(x=j||(j={}))[x.DEBUG=0]="DEBUG",x[x.VERBOSE=1]="VERBOSE",x[x.INFO=2]="INFO",x[x.WARN=3]="WARN",x[x.ERROR=4]="ERROR",x[x.SILENT=5]="SILENT";const rp={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},rh=j.INFO,rm={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},rg=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=rm[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ry{/**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */constructor(e){this.name=e,/**
         * The log level of the given Logger instance.
         */this._logLevel=rh,/**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */this._logHandler=rg,/**
         * The optional, additional, user-defined log handler for the Logger instance.
         */this._userLogHandler=null,/**
         * Capture the current instance for later use
         */rf.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}// Workaround for setter/getter having to be the same type.
setLogLevel(e){this._logLevel="string"==typeof e?rp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}/**
     * The functions below are all based on the `console` interface
     */debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const rv=(e,t)=>t.some(t=>e instanceof t),rb=new WeakMap,rw=new WeakMap,rx=new WeakMap,r_=new WeakMap,rE=new WeakMap;let rS={get(e,t,r){if(e instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===t)return rw.get(e);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===t)return e.objectStoreNames||rx.get(e);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}// Else transform whatever we get back.
return rP(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function rP(r){var n;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(r instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(rP(e.result)),n()},o=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(t=>{// Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
// (see wrapFunction).
t instanceof IDBCursor&&rb.set(t,e);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
rE.set(t,e),t}(r);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(r_.has(r))return r_.get(r);let i="function"==typeof(n=r)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
n.apply(rk(this),e),rP(rb.get(this)))}:function(...e){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return rP(n.apply(rk(this),e))}:function(e,...t){let r=n.call(rk(this),e,...t);return rx.set(r,e.sort?e.sort():[e]),rP(r)}:(n instanceof IDBTransaction&&function(e){// Early bail if we've already created a done promise for this transaction.
if(rw.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),n()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});// Cache it for later retrieval.
rw.set(e,t)}(n),rv(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,rS):n;return i!==r&&(r_.set(r,i),rE.set(i,r)),i}const rk=e=>rE.get(e),rI=["get","getKey","getAll","getAllKeys","count"],rO=["put","add","delete","clear"],rC=new Map;function rT(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(rC.get(t))return rC.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=rO.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||rI.includes(r)))return;let o=async function(e,...t){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let o=this.transaction(e,i?"readwrite":"readonly"),a=o.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return n&&(a=a.index(t.shift())),(await Promise.all([a[r](...t),i&&o.done]))[0]};return rC.set(t,o),o}rS={...d=rS,get:(e,t,r)=>rT(e,t)||d.get(e,t,r),has:(e,t)=>!!rT(e,t)||d.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.container=e}// In initial implementation, this will be called by installations on
// auth token refresh, and installations will send this string.
getPlatformInfoString(){let e=this.container.getProviders();// Loop through providers and get library/version pairs from any that are
// version components.
return e.map(e=>{if(!/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"/* ComponentType.VERSION */}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const rA="@firebase/app",rN="0.9.23",rM=new ry("@firebase/app"),rj="[DEFAULT]",rD={[rA]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},rL=new Map,rF=new Map;/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */function rU(e){let t=e.name;if(rF.has(t))return rM.debug(`There were multiple attempts to register component ${t}.`),!1;// add the component to existing app instances
for(let r of(rF.set(t,e),rL.values()))!/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */function(e,t){try{e.container.addComponent(t)}catch(r){rM.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}(r,e);return!0}/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */function rB(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}const rz=new t8("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r${constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rl("app",()=>this,"PUBLIC"/* ComponentType.PUBLIC */))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}/**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */checkDestroyed(){if(this.isDeleted)throw rz.create("app-deleted"/* AppError.APP_DELETED */,{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The current SDK version.
 *
 * @public
 */const rV="10.6.0";function rH(e,t={}){let r=e;if("object"!=typeof t){let e=t;t={name:e}}let n=Object.assign({name:rj,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw rz.create("bad-app-name"/* AppError.BAD_APP_NAME */,{appName:String(i)});if(r||(r=tZ()),!r)throw rz.create("no-options"/* AppError.NO_OPTIONS */);let o=rL.get(i);if(o){// return the existing app if options and config deep equal the ones in the existing app.
if(t9(r,o.options)&&t9(n,o.config))return o;throw rz.create("duplicate-app"/* AppError.DUPLICATE_APP */,{appName:i})}let a=new rd(i);for(let e of rF.values())a.addComponent(e);let s=new r$(r,n,a);return rL.set(i,s),s}/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */function rq(e=rj){let t=rL.get(e);if(!t&&e===rj&&tZ())return rH();if(!t)throw rz.create("no-app"/* AppError.NO_APP */,{appName:e});return t}/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */function rW(e,t,r){var n;// TODO: We can use this check to whitelist strings when/if we set up
// a good whitelist system.
let i=null!==(n=rD[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){let e=[`Unable to register library "${i}" with version "${t}":`];o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),rM.warn(e.join(" "));return}rU(new rl(`${i}-version`,()=>({library:i,version:t}),"VERSION"/* ComponentType.VERSION */))}const rK="firebase-heartbeat-store";let rJ=null;function rG(){return rJ||(rJ=/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){let a=indexedDB.open(e,1),s=rP(a);return n&&a.addEventListener("upgradeneeded",e=>{n(rP(a.result),e.oldVersion,e.newVersion,rP(a.transaction),e)}),r&&a.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),s.then(e=>{o&&e.addEventListener("close",()=>o()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{// We don't use 'break' in this switch statement, the fall-through
// behavior is what we want, because if there are multiple versions between
// the old version and the current version, we want ALL the migrations
// that correspond to those versions to run, not only the last one.
// eslint-disable-next-line default-case
0===t&&e.createObjectStore(rK)}}).catch(e=>{throw rz.create("idb-open"/* AppError.IDB_OPEN */,{originalErrorMessage:e.message})})),rJ}async function rX(e){try{let t=await rG(),r=await t.transaction(rK).objectStore(rK).get(rY(e));return r}catch(e){if(e instanceof t5)rM.warn(e.message);else{let t=rz.create("idb-get"/* AppError.IDB_GET */,{originalErrorMessage:null==e?void 0:e.message});rM.warn(t.message)}}}async function rQ(e,t){try{let r=await rG(),n=r.transaction(rK,"readwrite"),i=n.objectStore(rK);await i.put(t,rY(e)),await n.done}catch(e){if(e instanceof t5)rM.warn(e.message);else{let t=rz.create("idb-set"/* AppError.IDB_WRITE */,{originalErrorMessage:null==e?void 0:e.message});rM.warn(t.message)}}}function rY(e){return`${e.name}!${e.options.appId}`}class rZ{constructor(e){this.container=e,/**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new r1(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}/**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */async triggerHeartbeat(){var e;let t=this.container.getProvider("platform-logger").getImmediate(),r=t.getPlatformInfoString(),n=r0();return(// Do not store a heartbeat if one is already stored for this day
// or if a header has already been sent today.
((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),// Remove entries older than 30 days.
this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),r=Date.now();return r-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)))}/**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */async getHeartbeatsHeader(){var e;// If it's still null or the array is empty, there is no data to send.
if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=r0(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){// Heartbeats grouped by user agent in the standard format to be sent in
// the header.
let r=[],n=e.slice();for(let i of e){// Look for an existing entry with the same user agent.
let e=r.find(e=>e.agent===i.agent);if(e)// If the header would exceed max size, remove the added date
// and stop adding to the header.
{if(e.dates.push(i.date),r2(r)>t){e.dates.pop();break}}else if(// If no entry for this user agent exists, create one.
r.push({agent:i.agent,dates:[i.date]}),r2(r)>t){// If the header would exceed max size, remove the added heartbeat
// entry and stop adding to the header.
r.pop();break}// Pop unsent entry from queue. (Skipped if adding the entry exceeded
// quota and the loop breaks early.)
n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=tW(JSON.stringify({version:2,heartbeats:r}));return(// Store last sent date to prevent another being logged/sent for the same day.
this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(// Store any unsent entries if they exist.
this._heartbeatsCache.heartbeats=n,// This seems more likely than emptying the array (below) to lead to some odd state
// since the cache isn't empty and this will be called again on the next request,
// and is probably safest if we await it.
await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],// Do not wait for this, to reduce latency.
this._storage.overwrite(this._heartbeatsCache)),i)}}function r0(){let e=new Date;// Returns date format 'YYYY-MM-DD'
return e.toISOString().substring(0,10)}class r1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!t4()&&t6().then(()=>!0).catch(()=>!1)}/**
     * Read all heartbeats.
     */async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await rX(this.app);return e||{heartbeats:[]}}}// overwrite the storage with the provided heartbeats
async overwrite(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return rQ(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}// add heartbeats
async add(e){var t;let r=await this._canUseIndexedDBPromise;if(r){let r=await this.read();return rQ(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */function r2(e){// base64 has a restricted set of characters, all of which should be 1 byte.
return tW(JSON.stringify({version:2,heartbeats:e})).length}function r3(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function r4(){// We will include this one message in the prod error map since by the very
// nature of this error, developers will never be able to see the message
// using the debugErrorMap (which is installed during auth initialization).
return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}rU(new rl("platform-logger",e=>new rR(e),"PRIVATE"/* ComponentType.PRIVATE */)),rU(new rl("heartbeat",e=>new rZ(e),"PRIVATE"/* ComponentType.PRIVATE */)),// Register `app` package.
rW(rA,rN,""),// BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
rW(rA,rN,"esm2017"),// Register platform SDK identifier (no version).
rW("fire-js",""),"function"==typeof SuppressedError&&SuppressedError;const r6=new t8("auth","Firebase",r4()),r5=new ry("@firebase/auth");function r8(e,...t){r5.logLevel<=j.ERROR&&r5.error(`Auth (${rV}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r7(e,...t){throw ne(e,...t)}function r9(e,...t){return ne(e,...t)}function ne(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return r6.create(e,...t)}function nt(e,t,...r){if(!e)throw ne(t,...r)}/**
 * Unconditionally fails, throwing an internal error with the given message.
 *
 * @param failure type of failure encountered
 * @throws Error
 */function nr(e){// Log the failure in addition to throw an exception, just in case the
// exception is swallowed.
let t="INTERNAL ASSERTION FAILED: "+e;// NOTE: We don't use FirebaseError here because these are internal failures
// that cannot be handled by the user. (Also it would create a circular
// dependency between the error and assert modules which doesn't work.)
throw r8(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ni(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * A structure to help pick between a range of long and short delay durations
 * depending on the current environment. In general, the long delay is used for
 * mobile environments whereas short delays are used for desktop environments.
 */class no{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||nr("Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&// @ts-ignore Setting up an broadly applicable index signature for Window
// just to deal with this case would probably be a bad idea.
!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(t2())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&// Apply only for traditional web apps and Chrome extensions.
// This is especially true for Cordova apps which have unreliable
// navigator.onLine behavior unless cordova-plugin-network-information is
// installed which overwrites the native navigator.onLine value and
// defines navigator.connection.
("http:"===ni()||"https:"===ni()||t3()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3/* DelayMin.OFFLINE */,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(e,t){e.emulator||nr("Emulator should always be set here");let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Map from errors returned by the server to errors to developer visible errors
 */const nl={CREDENTIAL_MISMATCH:"custom-token-mismatch"/* AuthErrorCode.CREDENTIAL_MISMATCH */,MISSING_CUSTOM_TOKEN:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_IDENTIFIER:"invalid-email"/* AuthErrorCode.INVALID_EMAIL */,MISSING_CONTINUE_URI:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,INVALID_PASSWORD:"wrong-password"/* AuthErrorCode.INVALID_PASSWORD */,MISSING_PASSWORD:"missing-password"/* AuthErrorCode.MISSING_PASSWORD */,EMAIL_EXISTS:"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,PASSWORD_LOGIN_DISABLED:"operation-not-allowed"/* AuthErrorCode.OPERATION_NOT_ALLOWED */,INVALID_IDP_RESPONSE:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,INVALID_PENDING_TOKEN:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,MISSING_REQ_TYPE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,EMAIL_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */,RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,EXPIRED_OOB_CODE:"expired-action-code"/* AuthErrorCode.EXPIRED_OOB_CODE */,INVALID_OOB_CODE:"invalid-action-code"/* AuthErrorCode.INVALID_OOB_CODE */,MISSING_OOB_CODE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login"/* AuthErrorCode.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */,INVALID_ID_TOKEN:"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */,TOKEN_EXPIRED:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,USER_NOT_FOUND:"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */,TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests"/* AuthErrorCode.TOO_MANY_ATTEMPTS_TRY_LATER */,PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements"/* AuthErrorCode.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */,INVALID_CODE:"invalid-verification-code"/* AuthErrorCode.INVALID_CODE */,INVALID_SESSION_INFO:"invalid-verification-id"/* AuthErrorCode.INVALID_SESSION_INFO */,INVALID_TEMPORARY_PROOF:"invalid-credential"/* AuthErrorCode.INVALID_IDP_RESPONSE */,MISSING_SESSION_INFO:"missing-verification-id"/* AuthErrorCode.MISSING_SESSION_INFO */,SESSION_EXPIRED:"code-expired"/* AuthErrorCode.CODE_EXPIRED */,MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name"/* AuthErrorCode.MISSING_ANDROID_PACKAGE_NAME */,UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri"/* AuthErrorCode.UNAUTHORIZED_DOMAIN */,INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id"/* AuthErrorCode.INVALID_OAUTH_CLIENT_ID */,ADMIN_ONLY_OPERATION:"admin-restricted-operation"/* AuthErrorCode.ADMIN_ONLY_OPERATION */,INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session"/* AuthErrorCode.INVALID_MFA_SESSION */,MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found"/* AuthErrorCode.MFA_INFO_NOT_FOUND */,MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */,MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session"/* AuthErrorCode.MISSING_MFA_SESSION */,SECOND_FACTOR_EXISTS:"second-factor-already-in-use"/* AuthErrorCode.SECOND_FACTOR_ALREADY_ENROLLED */,SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded"/* AuthErrorCode.SECOND_FACTOR_LIMIT_EXCEEDED */,BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled"/* AuthErrorCode.RECAPTCHA_NOT_ENABLED */,MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token"/* AuthErrorCode.MISSING_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token"/* AuthErrorCode.INVALID_RECAPTCHA_TOKEN */,INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action"/* AuthErrorCode.INVALID_RECAPTCHA_ACTION */,MISSING_CLIENT_TYPE:"missing-client-type"/* AuthErrorCode.MISSING_CLIENT_TYPE */,MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version"/* AuthErrorCode.MISSING_RECAPTCHA_VERSION */,INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version"/* AuthErrorCode.INVALID_RECAPTCHA_VERSION */,INVALID_REQ_TYPE:"invalid-req-type"/* AuthErrorCode.INVALID_REQ_TYPE */},nu=new no(3e4,6e4);function nc(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function nd(e,t,r,n,i={}){return nf(e,i,async()=>{let i={},o={};n&&("GET"/* HttpMethod.GET */===t?o=n:i={body:JSON.stringify(n)});let a=rt(Object.assign({key:e.config.apiKey},o)).slice(1),s=await e._getAdditionalHeaders();return s["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/json",e.languageCode&&(s["X-Firebase-Locale"/* HttpHeader.X_FIREBASE_LOCALE */]=e.languageCode),ns.fetch()(nh(e,e.config.apiHost,r,a),Object.assign({method:t,headers:s,referrerPolicy:"no-referrer"},i))})}async function nf(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},nl),t);try{let t=new nm(e),i=await Promise.race([r(),t.promise]);// If we've reached this point, the fetch succeeded and the networkTimeout
// didn't throw; clear the network timeout delay so that Node won't hang
t.clearNetworkTimeout();let o=await i.json();if("needConfirmation"in o)throw ng(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,o);if(i.ok&&!("errorMessage"in o))return o;{let t=i.ok?o.errorMessage:o.error.message,[r,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"/* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */===r)throw ng(e,"credential-already-in-use"/* AuthErrorCode.CREDENTIAL_ALREADY_IN_USE */,o);if("EMAIL_EXISTS"/* ServerError.EMAIL_EXISTS */===r)throw ng(e,"email-already-in-use"/* AuthErrorCode.EMAIL_EXISTS */,o);if("USER_DISABLED"/* ServerError.USER_DISABLED */===r)throw ng(e,"user-disabled"/* AuthErrorCode.USER_DISABLED */,o);let s=n[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw function(e,t,r){let n=Object.assign(Object.assign({},r4()),{[t]:r}),i=new t8("auth","Firebase",n);return i.create(t,{appName:e.name})}(e,s,a);r7(e,s)}}catch(t){if(t instanceof t5)throw t;// Changing this to a different error code will log user out when there is a network error
// because we treat any error other than NETWORK_REQUEST_FAILED as token is invalid.
// https://github.com/firebase/firebase-js-sdk/blob/4fbc73610d70be4e0852e7de63a39cb7897e8546/packages/auth/src/core/auth/auth_impl.ts#L309-L316
r7(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */,{message:String(t)})}}async function np(e,t,r,n,i={}){let o=await nd(e,t,r,n,i);return"mfaPendingCredential"in o&&r7(e,"multi-factor-auth-required"/* AuthErrorCode.MFA_REQUIRED */,{_serverResponse:o}),o}function nh(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?na(e.config,i):`${e.config.apiScheme}://${i}`}class nm{constructor(e){this.auth=e,// Node timers and browser timers are fundamentally incompatible, but we
// don't care about the value here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(r9(this.auth,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */)),nu.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ng(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=r9(e,t,n);return(// We know customData is defined on error because errorParams is defined
i.customData._tokenResponse=r,i)}function ny(e){return void 0!==e&&void 0!==e.enterprise}class nv{constructor(e){if(/**
         * The reCAPTCHA site key.
         */this.siteKey="",/**
         * The list of providers and their enablement status for reCAPTCHA Enterprise.
         */this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");// Example response.recaptchaKey: "projects/proj123/keys/sitekey123"
this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}/**
     * Returns the reCAPTCHA Enterprise enforcement state for the given provider.
     *
     * @param providerStr - The provider whose enforcement state is to be returned.
     * @returns The reCAPTCHA Enterprise enforcement state for the given provider.
     */getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE"/* EnforcementState.ENFORCE */;case"AUDIT":return"AUDIT"/* EnforcementState.AUDIT */;case"OFF":return"OFF"/* EnforcementState.OFF */;default:return"ENFORCEMENT_STATE_UNSPECIFIED"/* EnforcementState.ENFORCEMENT_STATE_UNSPECIFIED */}}(t.enforcementState);return null}/**
     * Returns true if the reCAPTCHA Enterprise enforcement state for the provider is set to ENFORCE or AUDIT.
     *
     * @param providerStr - The provider whose enablement state is to be returned.
     * @returns Whether or not reCAPTCHA Enterprise protection is enabled for the given provider.
     */isProviderEnabled(e){return"ENFORCE"/* EnforcementState.ENFORCE */===this.getProviderEnforcementState(e)||"AUDIT"/* EnforcementState.AUDIT */===this.getProviderEnforcementState(e)}}async function nb(e,t){return nd(e,"GET"/* HttpMethod.GET */,"/v2/recaptchaConfig"/* Endpoint.GET_RECAPTCHA_CONFIG */,nc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nw(e,t){return nd(e,"POST"/* HttpMethod.POST */,"/v1/accounts:delete"/* Endpoint.DELETE_ACCOUNT */,t)}async function nx(e,t){return nd(e,"POST"/* HttpMethod.POST */,"/v1/accounts:lookup"/* Endpoint.GET_ACCOUNT_INFO */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(e){if(e)try{// Convert to date object.
let t=new Date(Number(e));// Test date is valid.
if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){// Do nothing. undefined will be returned.
}}/**
 * Returns a deserialized JSON Web Token (JWT) used to identify the user to a Firebase service.
 *
 * @remarks
 * Returns the current token if it has not expired or if it will not expire in the next five
 * minutes. Otherwise, this will refresh the token and return a new one.
 *
 * @param user - The user.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */async function nE(e,t=!1){let r=rs(e),n=await r.getIdToken(t),i=nP(n);nt(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let o="object"==typeof i.firebase?i.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:i,token:n,authTime:n_(nS(i.auth_time)),issuedAtTime:n_(nS(i.iat)),expirationTime:n_(nS(i.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}function nS(e){return 1e3*Number(e)}function nP(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return r8("JWT malformed, contained fewer than 3 sections"),null;try{let e=tK(r);if(!e)return r8("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return r8("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nk(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof t5&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.user=e,this.isRunning=!1,// Node timers and browser timers return fundamentally different types.
// We don't actually care what the value is but TS won't accept unknown and
// we can't cast properly in both environments.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.timerId=null,this.errorBackoff=3e4/* Duration.RETRY_BACKOFF_MIN */}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4/* Duration.RETRY_BACKOFF_MAX */),e}{// Reset the error backoff
this.errorBackoff=3e4/* Duration.RETRY_BACKOFF_MIN */;let e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,r=e-Date.now()-3e5/* Duration.OFFSET */;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){// Only retry on network errors
(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(/* wasError */!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=n_(this.lastLoginAt),this.creationTime=n_(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nC(e){var t;let r=e.auth,n=await e.getIdToken(),i=await nk(e,nx(r,{idToken:n}));nt(null==i?void 0:i.users.length,r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let o=i.users[0];e._notifyReloadListener(o);let a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map(e=>{var{providerId:t}=e,r=r3(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}):[],s=function(e,t){let r=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...r,...t]}(e.providerData,a),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null==s?void 0:s.length),c={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new nO(o.createdAt,o.lastLoginAt),isAnonymous:!!l&&u};Object.assign(e,c)}/**
 * Reloads user account data, if signed in.
 *
 * @param user - The user.
 *
 * @public
 */async function nT(e){let t=rs(e);await nC(t),// Even though the current user hasn't changed, update
// current user will trigger a persistence update w/ the
// new info.
await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(e,t){let r=await nf(e,{},async()=>{let r=rt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:i}=e.config,o=nh(e,n,"/v1/token"/* Endpoint.TOKEN */,`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"/* HttpHeader.CONTENT_TYPE */]="application/x-www-form-urlencoded",ns.fetch()(o,{method:"POST"/* HttpMethod.POST */,headers:a,body:r})});// The response comes back in snake_case. Convert to camel:
return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function nA(e,t){return nd(e,"POST"/* HttpMethod.POST */,"/v2/accounts:revokeToken"/* Endpoint.REVOKE_TOKEN */,nc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * We need to mark this class as internal explicitly to exclude it in the public typings, because
 * it references AuthInternal which has a circular dependency with UserInternal.
 *
 * @internal
 */class nN{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4/* Buffer.TOKEN_REFRESH */}updateFromServerResponse(e){nt(e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),nt(void 0!==e.idToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),nt(void 0!==e.refreshToken,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):/**
 * Extract expiresIn TTL from a token by subtracting the expiration from the issuance.
 */function(e){let t=nP(e);return nt(t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),nt(void 0!==t.exp,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),nt(void 0!==t.iat,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(nt(!this.accessToken||this.refreshToken,e,"user-token-expired"/* AuthErrorCode.TOKEN_EXPIRED */),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await nR(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,o=new nN;return r&&(nt("string"==typeof r,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),o.refreshToken=r),n&&(nt("string"==typeof n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),o.accessToken=n),i&&(nt("number"==typeof i,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nN,this.toJSON())}_performRefresh(){return nr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nM(e,t){nt("string"==typeof e||void 0===e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */,{appName:t})}class nj{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=r3(e,["uid","auth","stsTokenManager"]);// For the user object, provider is always Firebase.
this.providerId="firebase"/* ProviderId.FIREBASE */,this.proactiveRefresh=new nI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nO(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await nk(this,this.stsTokenManager.getToken(this.auth,e));return nt(t,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return nE(this,e)}reload(){return nT(this)}_assign(e){this!==e&&(nt(this.uid===e.uid,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new nj(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){// There should only ever be one listener, and that is a single instance of MultiFactorUser
nt(!this.reloadListener,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await nC(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();// TODO: Determine if cancellable-promises are necessary to use in this class so that delete()
//       cancels pending actions...
return await nk(this,nw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),// Redirect event ID must be maintained in case there is a pending
// redirect event.
_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{// Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,o,a,s,l,u;let c=null!==(r=t.displayName)&&void 0!==r?r:void 0,d=null!==(n=t.email)&&void 0!==n?n:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(o=t.photoURL)&&void 0!==o?o:void 0,h=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:_}=t;nt(v&&_,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let E=nN.fromJSON(this.name,_);nt("string"==typeof v,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),nM(c,e.name),nM(d,e.name),nt("boolean"==typeof b,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),nt("boolean"==typeof w,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),nM(f,e.name),nM(p,e.name),nM(h,e.name),nM(m,e.name),nM(g,e.name),nM(y,e.name);let S=new nj({uid:v,auth:e,email:d,emailVerified:b,displayName:c,isAnonymous:w,photoURL:p,phoneNumber:f,tenantId:h,stsTokenManager:E,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(S.providerData=x.map(e=>Object.assign({},e))),m&&(S._redirectEventId=m),S}/**
     * Initialize a User from an idToken server response
     * @param auth
     * @param idTokenResponse
     */static async _fromIdTokenResponse(e,t,r=!1){let n=new nN;n.updateFromServerResponse(t);// Initialize the Firebase Auth user.
let i=new nj({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return(// Updates the user info and data and resolves with a user instance.
await nC(i),i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nD=new Map;function nL(e){e instanceof Function||nr("Expected a class definition");let t=nD.get(e);return t?t instanceof e||nr("Instance stored in cache mismatched with class"):(t=new e,nD.set(e,t)),t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(){this.type="NONE"/* PersistenceType.NONE */,this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nU(e,t,r){return`firebase:${e}:${t}:${r}`}nF.type="NONE";class nB{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=nU(this.userKey,n.apiKey,i),this.fullPersistenceKey=nU("persistence"/* KeyName.PERSISTENCE_USER */,n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?nj._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"/* KeyName.AUTH_USER */){if(!t.length)return new nB(nL(nF),e,r);// Eliminate any persistences that are not available
let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||nL(nF),o=nU(r,e.config.apiKey,e.name),a=null;// Note, here we check for a user in _all_ persistences, not just the
// ones deemed available. If we can migrate a user out of a broken
// persistence, we will (but only if that persistence supports migration).
for(let r of t)try{let t=await r._get(o);if(t){let n=nj._fromJSON(e,t);// throws for unparsable blob (wrong format)
r!==i&&(a=n),i=r;break}}catch(e){}// If we find the user in a persistence that does support migration, use
// that migration path (of only persistences that support migration)
let s=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&s.length&&(i=s[0],a&&// we'll just let it bubble to surface the error.
await i._set(o,a.toJSON()),// Attempt to clear the key in other persistences but ignore errors. This helps prevent issues
// such as users getting stuck with a previous account after signing out and refreshing the tab.
await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(e){}}))),new nB(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Determine the browser for the purposes of reporting usage to the API
 */function nz(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera"/* BrowserName.OPERA */;{if(nq(t))return"IEMobile"/* BrowserName.IEMOBILE */;if(t.includes("msie")||t.includes("trident/"))return"IE"/* BrowserName.IE */;if(t.includes("edge/"))return"Edge"/* BrowserName.EDGE */;if(n$(t))return"Firefox"/* BrowserName.FIREFOX */;if(t.includes("silk/"))return"Silk"/* BrowserName.SILK */;if(nK(t))return"Blackberry"/* BrowserName.BLACKBERRY */;if(nJ(t))return"Webos"/* BrowserName.WEBOS */;if(nV(t))return"Safari"/* BrowserName.SAFARI */;if((t.includes("chrome/")||nH(t))&&!t.includes("edge/"))return"Chrome"/* BrowserName.CHROME */;if(nW(t))return"Android"/* BrowserName.ANDROID */;let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"/* BrowserName.OTHER */}function n$(e=t2()){return/firefox\//i.test(e)}function nV(e=t2()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function nH(e=t2()){return/crios\//i.test(e)}function nq(e=t2()){return/iemobile/i.test(e)}function nW(e=t2()){return/android/i.test(e)}function nK(e=t2()){return/blackberry/i.test(e)}function nJ(e=t2()){return/webos/i.test(e)}function nG(e=t2()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function nX(e=t2()){// TODO: implement getBrowserName equivalent for OS.
return nG(e)||nW(e)||nJ(e)||nK(e)||/windows phone/i.test(e)||nq(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//*
 * Determine the SDK version string
 */function nQ(e,t=[]){let r;switch(e){case"Browser"/* ClientPlatform.BROWSER */:// In a browser environment, report the browser name.
r=nz(t2());break;case"Worker"/* ClientPlatform.WORKER */:// Technically a worker runs from a browser but we need to differentiate a
// worker from a browser.
// For example: Chrome-Worker/JsCore/4.9.1/FirebaseCore-web.
r=`${nz(t2())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";/* default value if no other framework is used */return`${r}/JsCore/${rV}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nY{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){// The callback could be sync or async. Wrap it into a
// function that is always async.
let r=t=>new Promise((r,n)=>{try{let n=e(t);// Either resolve with existing promise or wrap a non-promise
    // return value into a promise.
    r(n)}catch(e){// Sync callback throws.
    n(e)}});// Attach the onAbort if present
r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{// Unsubscribe. Replace with no-op. Do not remove from array, or it will disturb
// indexing of other elements.
this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;// While running the middleware, build a temporary stack of onAbort
// callbacks to call if one middleware callback rejects.
let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(// Run all onAbort, with separate try/catch to ignore any errors and
// continue
t.reverse(),t))try{e()}catch(e){/* swallow error */}throw this.auth._errorFactory.create("login-blocked"/* AuthErrorCode.LOGIN_BLOCKED */,{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Fetches the password policy for the currently set tenant or the project if no tenant is set.
 *
 * @param auth Auth object.
 * @param request Password policy request.
 * @returns Password policy response.
 */async function nZ(e,t={}){return nd(e,"GET"/* HttpMethod.GET */,"/v2/passwordPolicy"/* Endpoint.GET_PASSWORD_POLICY */,nc(e,t))}/**
 * Stores password policy requirements and provides password validation against the policy.
 *
 * @internal
 */class n0{constructor(e){var t,r,n,i;// Only include custom strength options defined in the response.
let o=e.customStrengthOptions;this.customStrengthOptions={},// TODO: Remove once the backend is updated to include the minimum min password length instead of undefined when there is no minimum length set.
this.customStrengthOptions.minPasswordLength=null!==(t=o.minPasswordLength)&&void 0!==t?t:6,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),void 0!==o.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),void 0!==o.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),void 0!==o.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),void 0!==o.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),// Use an empty string if no non-alphanumeric characters are specified in the response.
this.allowedNonAlphanumericCharacters=null!==(n=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,n,i,o,a;let s={isValid:!0,passwordPolicy:this};return(// Check the password length and character options.
this.validatePasswordLengthOptions(e,s),this.validatePasswordCharacterOptions(e,s),// Combine the status into single isValid property.
s.isValid&&(s.isValid=null===(t=s.meetsMinPasswordLength)||void 0===t||t),s.isValid&&(s.isValid=null===(r=s.meetsMaxPasswordLength)||void 0===r||r),s.isValid&&(s.isValid=null===(n=s.containsLowercaseLetter)||void 0===n||n),s.isValid&&(s.isValid=null===(i=s.containsUppercaseLetter)||void 0===i||i),s.isValid&&(s.isValid=null===(o=s.containsNumericCharacter)||void 0===o||o),s.isValid&&(s.isValid=null===(a=s.containsNonAlphanumericCharacter)||void 0===a||a),s)}/**
     * Validates that the password meets the length options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}/**
     * Validates that the password meets the character options for the policy.
     *
     * @param password Password to validate.
     * @param status Validation status.
     */validatePasswordCharacterOptions(e,t){let r;// Assign statuses for requirements even if the password is an empty string.
this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */!1,/* containsUppercaseCharacter= */!1,/* containsNumericCharacter= */!1,/* containsNonAlphanumericCharacter= */!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,/* containsLowercaseCharacter= */r>="a"&&r<="z",/* containsUppercaseCharacter= */r>="A"&&r<="Z",/* containsNumericCharacter= */r>="0"&&r<="9",/* containsNonAlphanumericCharacter= */this.allowedNonAlphanumericCharacters.includes(r))}/**
     * Updates the running validation status with the statuses for the character options.
     * Expected to be called each time a character is processed to update each option status
     * based on the current character.
     *
     * @param status Validation status.
     * @param containsLowercaseCharacter Whether the character is a lowercase letter.
     * @param containsUppercaseCharacter Whether the character is an uppercase letter.
     * @param containsNumericCharacter Whether the character is a numeric character.
     * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
     */updatePasswordCharacterOptionsStatuses(e,t,r,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new n2(this),this.idTokenSubscription=new n2(this),this.beforeStateQueue=new nY(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,// Any network calls will set this to true and prevent subsequent emulator
// initialization
this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r6,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},// Tracks the last notified UID for state change listeners to prevent
// repeated calls to the callbacks. Undefined means it's never been
// called, whereas null means it's been called with a signed out user
this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nL(t)),// Have to check for app deletion throughout initialization (after each
// promise resolution)
this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await nB.create(this,e),!this._deleted)){// Initialize the resolver early if necessary (only applicable to web:
// this will cause the iframe to load immediately in certain cases)
if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){/* Ignore the error */}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}/**
     * If the persistence is changed in another window, the user manager will let us know
     */async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){// If the same user is to be synchronized.
if(this.currentUser&&e&&this.currentUser.uid===e.uid){// Data update, simply copy data changes.
this._currentUser._assign(e),// If tokens changed from previous user tokens, this will trigger
// notifyAuthListeners_.
await this.currentUser.getIdToken();return}// Update current Auth state. Either a new login or logout.
// Skip blocking callbacks, they should not apply to a change in another tab.
await this._updateCurrentUser(e,/* skipBeforeStateCallbacks */!0)}}async initializeCurrentUser(e){var t;// First check to see if we have a pending redirect event.
let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==n?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(e);// If the stored user (i.e. the old "currentUser") has a redirectId that
// matches the redirect user, then we want to initially sign in with the
// new user object from result.
// TODO(samgho): More thoroughly test all of this
(!r||r===o)&&(null==a?void 0:a.user)&&(n=a.user,i=!0)}// If no user in persistence, there is no current user. Set to null.
if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){// This isn't a redirect link operation, we can reload and bail.
// First though, ensure that we check the middleware is happy.
if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,// We know this is available since the bit is only set when the
// resolver is available
this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(// If the redirect user's event ID matches the current user's event ID,
// DO NOT reload the current user, otherwise they'll be cleared from storage.
// This is important for the reauthenticateWithRedirect() flow.
(nt(this._popupRedirectResolver,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n))}async tryRedirectSignIn(e){// The redirect user needs to be checked (and signed in if available)
// during auth initialization. All of the normal sign in and link/reauth
// flows call back into auth and push things onto the promise queue. We
// need to await the result of the redirect sign in *inside the promise
// queue*. This presents a problem: we run into deadlock. See:
//    ┌> [Initialization] ─────┐
//    ┌> [<other queue tasks>] │
//    └─ [getRedirectResult] <─┘
//    where [] are tasks on the queue and arrows denote awaits
// Initialization will never complete because it's waiting on something
// that's waiting for initialization to complete!
//
// Instead, this method calls getRedirectResult() (stored in
// _completeRedirectFn) with an optional parameter that instructs all of
// the underlying auth operations to skip anything that mutates auth state.
let t=null;try{// We know this._popupRedirectResolver is set since redirectResolver
// is passed in. The _completeRedirectFn expects the unwrapped extern.
t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){// Swallow any errors here; the code can retrieve them in
// getRedirectResult().
await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await nC(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")// them from storage
return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||// Supported in most browsers, but returns the language of the browser
// UI, not the language set in browser settings.
e.language||// Couldn't determine language.
null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){// The public updateCurrentUser method needs to make a copy of the user,
// and also check that the project matches
let t=e?rs(e):null;return t&&nt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"/* AuthErrorCode.INVALID_AUTH */),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&nt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"/* AuthErrorCode.TENANT_ID_MISMATCH */),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){// Prevent callbacks from being called again in _updateCurrentUser, as
// they were already called in the first line.
return(// Run first, to block _setRedirectUser() if any callbacks fail.
await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,/* skipBeforeStateCallbacks */!0))}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(nL(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();// Password policy will be defined after fetching.
let t=this._getPasswordPolicyInternal();return(// Check that the policy schema version is supported by the SDK.
// TODO: Update this logic to use a max supported policy schema version once we have multiple schema versions.
t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version"/* AuthErrorCode.UNSUPPORTED_PASSWORD_POLICY_SCHEMA_VERSION */,{})):t.validatePassword(e))}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await nZ(this),t=new n0(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new t8("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}/**
     * Revokes the given access token. Currently only supports Apple OAuth access tokens.
     */async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN"/* TokenType.ACCESS_TOKEN */,token:e,idToken:t};null!=this.tenantId&&(r.tenantId=this.tenantId),await nA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&nL(e)||this._popupRedirectResolver;nt(t,this,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.redirectPersistenceManager=await nB.create(this,[nL(t._redirectPersistence)],"redirectUser"/* KeyName.REDIRECT_USER */),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}/** Notifies listeners only if the user is current */_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}/** Returns the current user cast as the internal type */get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),o=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(nt(a,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),// The callback needs to be called asynchronously per the spec.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
a.then(()=>{o||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,r,n);return()=>{o=!0,i()}}{let r=e.addObserver(t);return()=>{o=!0,r()}}}/**
     * Unprotected (from race conditions) method to set the current user. This
     * should only be called from within a queued callback. This is necessary
     * because the queue shouldn't rely on another queued callback.
     */async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return(// In case something errors, the callback still should be called in order
// to keep the promise chain alive
this.operations=this.operations.then(e,e),this.operations)}get assertedPersistence(){return nt(this.persistenceManager,this,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),// Sort alphabetically so that "FirebaseCore-web,FirebaseUI-web" and
// "FirebaseUI-web,FirebaseCore-web" aren't viewed as different.
this.frameworks.sort(),this.clientVersion=nQ(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;// Additional headers on every request
let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"/* HttpHeader.X_FIREBASE_GMPID */]=this.app.options.appId);// If the heartbeat service exists, add the heartbeat string
let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"/* HttpHeader.X_FIREBASE_CLIENT */]=r);// If the App Check service exists, add the App Check token in the headers
let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"/* HttpHeader.X_FIREBASE_APP_CHECK */]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&// In the error case, a dummy token will be returned along with an error field describing
// the error. In general, we shouldn't care about the error condition and just use
// the token (actual or dummy) to send requests.
function(e,...t){r5.logLevel<=j.WARN&&r5.warn(`Auth (${rV}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}/** Helper class to wrap subscriber logic */class n2{constructor(e){this.auth=e,this.observer=null,this.addObserver=/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */function(e,t){let r=new ri(e,void 0);return r.subscribe.bind(r)}(e=>this.observer=e)}get next(){return nt(this.observer,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),this.observer.next.bind(this.observer)}}function n3(e){// TODO: consider adding timeout support & cancellation
return new Promise((t,r)=>{var n,i;let o=document.createElement("script");o.setAttribute("src",e),o.onload=t,o.onerror=e=>{let t=r9("internal-error"/* AuthErrorCode.INTERNAL_ERROR */);t.customData=e,r(t)},o.type="text/javascript",o.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(o)})}function n4(e){return`__${e}${Math.floor(1e6*Math.random())}`}class n6{/**
     *
     * @param authExtern - The corresponding Firebase {@link Auth} instance.
     *
     */constructor(e){/**
         * Identifies the type of application verifier (e.g. "recaptcha-enterprise").
         */this.type="recaptcha-enterprise",this.auth=rs(e)}/**
     * Executes the verification process.
     *
     * @returns A Promise for a token that can be used to assert the validity of a request.
     */async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{nb(e,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */,version:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}).then(n=>{if(void 0===n.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new nv(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}}).catch(e=>{r(e)})})}function n(t,r,n){let i=window.grecaptcha;ny(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(()=>{r("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((e,i)=>{r(this.auth).then(r=>{if(!t&&ny(window.grecaptcha))n(r,e,i);else{if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}n3("https://www.google.com/recaptcha/enterprise.js?render="+r).then(()=>{n(r,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function n5(e,t,r,n=!1){let i;let o=new n6(e);try{i=await o.verify(r)}catch(e){i=await o.verify(r,!0)}let a=Object.assign({},t);return n?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"/* RecaptchaVersion.ENTERPRISE */}),a}async function n8(e,t,r,n){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i||!i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"/* RecaptchaProvider.EMAIL_PASSWORD_PROVIDER */))return n(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await n5(e,t,r,"getOobCode"/* RecaptchaActionName.GET_OOB_CODE */===r);return n(e,i)}});{let i=await n5(e,t,r,"getOobCode"/* RecaptchaActionName.GET_OOB_CODE */===r);return n(e,i)}}function n7(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function n9(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface that represents the credentials returned by an {@link AuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class ie{/** @internal */constructor(/**
     * The authentication provider ID for the credential.
     *
     * @remarks
     * For example, 'facebook.com', or 'google.com'.
     */e,/**
     * The authentication sign in method for the credential.
     *
     * @remarks
     * For example, {@link SignInMethod}.EMAIL_PASSWORD, or
     * {@link SignInMethod}.EMAIL_LINK. This corresponds to the sign-in method
     * identifier as returned in {@link fetchSignInMethodsForEmail}.
     */t){this.providerId=e,this.signInMethod=t}/**
     * Returns a JSON-serializable representation of this object.
     *
     * @returns a JSON-serializable representation of this object.
     */toJSON(){return nr("not implemented")}/** @internal */_getIdTokenResponse(e){return nr("not implemented")}/** @internal */_linkToIdToken(e,t){return nr("not implemented")}/** @internal */_getReauthenticationResolver(e){return nr("not implemented")}}// Used for linking an email/password account to an existing idToken. Uses the same request/response
// format as updateEmailPassword.
async function it(e,t){return nd(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signUp"/* Endpoint.SIGN_UP */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(e,t){return np(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPassword"/* Endpoint.SIGN_IN_WITH_PASSWORD */,nc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(e,t){return np(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,nc(e,t))}async function io(e,t){return np(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithEmailLink"/* Endpoint.SIGN_IN_WITH_EMAIL_LINK */,nc(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface that represents the credentials returned by {@link EmailAuthProvider} for
 * {@link ProviderId}.PASSWORD
 *
 * @remarks
 * Covers both {@link SignInMethod}.EMAIL_PASSWORD and
 * {@link SignInMethod}.EMAIL_LINK.
 *
 * @public
 */class ia extends ie{/** @internal */constructor(/** @internal */e,/** @internal */t,r,/** @internal */n=null){super("password"/* ProviderId.PASSWORD */,r),this._email=e,this._password=t,this._tenantId=n}/** @internal */static _fromEmailAndPassword(e,t){return new ia(e,t,"password"/* SignInMethod.EMAIL_PASSWORD */)}/** @internal */static _fromEmailAndCode(e,t,r=null){return new ia(e,t,"emailLink"/* SignInMethod.EMAIL_LINK */,r)}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}/**
     * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
     *
     * @param json - Either `object` or the stringified representation of the object. When string is
     * provided, `JSON.parse` would be called first.
     *
     * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"/* SignInMethod.EMAIL_PASSWORD */===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"/* SignInMethod.EMAIL_LINK */===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}/** @internal */async _getIdTokenResponse(e){switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};return n8(e,t,"signInWithPassword"/* RecaptchaActionName.SIGN_IN_WITH_PASSWORD */,ir);case"emailLink"/* SignInMethod.EMAIL_LINK */:return ii(e,{email:this._email,oobCode:this._password});default:r7(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */async _linkToIdToken(e,t){switch(this.signInMethod){case"password"/* SignInMethod.EMAIL_PASSWORD */:let r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */};return n8(e,r,"signUpPassword"/* RecaptchaActionName.SIGN_UP_PASSWORD */,it);case"emailLink"/* SignInMethod.EMAIL_LINK */:return io(e,{idToken:t,email:this._email,oobCode:this._password});default:r7(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}/** @internal */_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(e,t){return np(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithIdp"/* Endpoint.SIGN_IN_WITH_IDP */,nc(e,t))}/**
 * Represents the OAuth credentials returned by an {@link OAuthProvider}.
 *
 * @remarks
 * Implementations specify the details about each auth provider's credential requirements.
 *
 * @public
 */class il extends ie{constructor(){super(...arguments),this.pendingToken=null}/** @internal */static _fromParams(e){let t=new il(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(// OAuth 1 and OAuth token with token secret
t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):r7("argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),t}/** {@inheritdoc AuthCredential.toJSON}  */toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}/**
     * Static method to deserialize a JSON representation of an object into an
     * {@link  AuthCredential}.
     *
     * @param json - Input can be either Object or the stringified representation of the object.
     * When string is provided, JSON.parse would be called first.
     *
     * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
     */static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=r3(t,["providerId","signInMethod"]);if(!r||!n)return null;let o=new il(r,n);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}/** @internal */_getIdTokenResponse(e){let t=this.buildRequest();return is(e,t)}/** @internal */_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,is(e,r)}/** @internal */_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,is(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=rt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iu(e,t){return nd(e,"POST"/* HttpMethod.POST */,"/v1/accounts:sendVerificationCode"/* Endpoint.SEND_VERIFICATION_CODE */,nc(e,t))}async function ic(e,t){return np(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,nc(e,t))}async function id(e,t){let r=await np(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,nc(e,t));if(r.temporaryProof)throw ng(e,"account-exists-with-different-credential"/* AuthErrorCode.NEED_CONFIRMATION */,r);return r}const ip={USER_NOT_FOUND:"user-not-found"/* AuthErrorCode.USER_DELETED */};async function ih(e,t){let r=Object.assign(Object.assign({},t),{operation:"REAUTH"});return np(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signInWithPhoneNumber"/* Endpoint.SIGN_IN_WITH_PHONE_NUMBER */,nc(e,r),ip)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Represents the credentials returned by {@link PhoneAuthProvider}.
 *
 * @public
 */class im extends ie{constructor(e){super("phone"/* ProviderId.PHONE */,"phone"/* SignInMethod.PHONE */),this.params=e}/** @internal */static _fromVerification(e,t){return new im({verificationId:e,verificationCode:t})}/** @internal */static _fromTokenResponse(e,t){return new im({phoneNumber:e,temporaryProof:t})}/** @internal */_getIdTokenResponse(e){return ic(e,this._makeVerificationRequest())}/** @internal */_linkToIdToken(e,t){return id(e,Object.assign({idToken:t},this._makeVerificationRequest()))}/** @internal */_getReauthenticationResolver(e){return ih(e,this._makeVerificationRequest())}/** @internal */_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}/** {@inheritdoc AuthCredential.toJSON} */toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}/** Generates a phone credential based on a plain object or a JSON string. */static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new im({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}/**
 * A utility class to parse email action URLs such as password reset, email verification,
 * email link sign in, etc.
 *
 * @public
 */class ig{/**
     * @param actionLink - The link from which to extract the URL.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @internal
     */constructor(e){var t,r,n,i,o,a;let s=rr(rn(e)),l=null!==(t=s.apiKey)&&void 0!==t?t:null,u=null!==(r=s.oobCode)&&void 0!==r?r:null,c=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Maps the mode string in action code URL to Action Code Info operation.
 *
 * @param mode
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL"/* ActionCodeOperation.RECOVER_EMAIL */;case"resetPassword":return"PASSWORD_RESET"/* ActionCodeOperation.PASSWORD_RESET */;case"signIn":return"EMAIL_SIGNIN"/* ActionCodeOperation.EMAIL_SIGNIN */;case"verifyEmail":return"VERIFY_EMAIL"/* ActionCodeOperation.VERIFY_EMAIL */;case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL"/* ActionCodeOperation.VERIFY_AND_CHANGE_EMAIL */;case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION"/* ActionCodeOperation.REVERT_SECOND_FACTOR_ADDITION */;default:return null}}(null!==(n=s.mode)&&void 0!==n?n:null);// Validate API key, code and mode.
nt(l&&u&&c,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(i=s.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(o=s.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=s.tenantId)&&void 0!==a?a:null}/**
     * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
     * otherwise returns null.
     *
     * @param link  - The email action link string.
     * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
     *
     * @public
     */static parseLink(e){let t=/**
 * Helper to parse FDL links
 *
 * @param url
 */function(e){let t=rr(rn(e)).link,r=t?rr(rn(t)).deep_link_id:null,n=rr(rn(e)).deep_link_id,i=n?rr(rn(n)).link:null;return i||n||r||t||e}(e);try{return new ig(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating {@link EmailAuthCredential}.
 *
 * @public
 */class iy{constructor(){/**
         * Always set to {@link ProviderId}.PASSWORD, even for email link.
         */this.providerId=iy.PROVIDER_ID}/**
     * Initialize an {@link AuthCredential} using an email and password.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credential(email, password);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * const userCredential = await signInWithEmailAndPassword(auth, email, password);
     * ```
     *
     * @param email - Email address.
     * @param password - User account password.
     * @returns The auth provider credential.
     */static credential(e,t){return ia._fromEmailAndPassword(e,t)}/**
     * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
     * email link operation.
     *
     * @example
     * ```javascript
     * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * ```javascript
     * await sendSignInLinkToEmail(auth, email);
     * // Obtain emailLink from user.
     * const userCredential = await signInWithEmailLink(auth, email, emailLink);
     * ```
     *
     * @param auth - The {@link Auth} instance used to verify the link.
     * @param email - Email address.
     * @param emailLink - Sign-in email link.
     * @returns - The auth provider credential.
     */static credentialWithLink(e,t){let r=ig.parseLink(t);return nt(r,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),ia._fromEmailAndCode(e,r.code,r.tenantId)}}/**
 * Always set to {@link ProviderId}.PASSWORD, even for email link.
 */iy.PROVIDER_ID="password"/* ProviderId.PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_PASSWORD.
 */iy.EMAIL_PASSWORD_SIGN_IN_METHOD="password"/* SignInMethod.EMAIL_PASSWORD */,/**
 * Always set to {@link SignInMethod}.EMAIL_LINK.
 */iy.EMAIL_LINK_SIGN_IN_METHOD="emailLink"/* SignInMethod.EMAIL_LINK */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The base class for all Federated providers (OAuth (including OIDC), SAML).
 *
 * This class is not meant to be instantiated directly.
 *
 * @public
 */class iv{/**
     * Constructor for generic OAuth providers.
     *
     * @param providerId - Provider for which credentials should be generated.
     */constructor(e){this.providerId=e,/** @internal */this.defaultLanguageCode=null,/** @internal */this.customParameters={}}/**
     * Set the language gode.
     *
     * @param languageCode - language code
     */setDefaultLanguage(e){this.defaultLanguageCode=e}/**
     * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
     * operations.
     *
     * @remarks
     * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
     * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
     *
     * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
     */setCustomParameters(e){return this.customParameters=e,this}/**
     * Retrieve the current list of {@link CustomParameters}.
     */getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Common code to all OAuth providers. This is separate from the
 * {@link OAuthProvider} so that child providers (like
 * {@link GoogleAuthProvider}) don't inherit the `credential` instance method.
 * Instead, they rely on a static `credential` method.
 */class ib extends iv{constructor(){super(...arguments),/** @internal */this.scopes=[]}/**
     * Add an OAuth scope to the credential.
     *
     * @param scope - Provider OAuth scope to add.
     */addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}/**
     * Retrieve the current list of OAuth scopes.
     */getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.FACEBOOK.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new FacebookAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('user_birthday');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Facebook Access Token.
 *   const credential = FacebookAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new FacebookAuthProvider();
 * provider.addScope('user_birthday');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Facebook Access Token.
 * const credential = FacebookAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */class iw extends ib{constructor(){super("facebook.com"/* ProviderId.FACEBOOK */)}/**
     * Creates a credential for Facebook.
     *
     * @example
     * ```javascript
     * // `event` from the Facebook auth.authResponseChange callback.
     * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param accessToken - Facebook access token.
     */static credential(e){return il._fromParams({providerId:iw.PROVIDER_ID,signInMethod:iw.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return iw.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return iw.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return iw.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.FACEBOOK. */iw.FACEBOOK_SIGN_IN_METHOD="facebook.com"/* SignInMethod.FACEBOOK */,/** Always set to {@link ProviderId}.FACEBOOK. */iw.PROVIDER_ID="facebook.com"/* ProviderId.FACEBOOK */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an an {@link OAuthCredential} for {@link ProviderId}.GOOGLE.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GoogleAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('profile');
 * provider.addScope('email');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Google Access Token.
 *   const credential = GoogleAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GoogleAuthProvider();
 * provider.addScope('profile');
 * provider.addScope('email');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Google Access Token.
 * const credential = GoogleAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 *
 * @public
 */class ix extends ib{constructor(){super("google.com"/* ProviderId.GOOGLE */),this.addScope("profile")}/**
     * Creates a credential for Google. At least one of ID token and access token is required.
     *
     * @example
     * ```javascript
     * // \`googleUser\` from the onsuccess Google Sign In callback.
     * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
     * const result = await signInWithCredential(credential);
     * ```
     *
     * @param idToken - Google ID token.
     * @param accessToken - Google access token.
     */static credential(e,t){return il._fromParams({providerId:ix.PROVIDER_ID,signInMethod:ix.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return ix.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return ix.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ix.credential(t,r)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GOOGLE. */ix.GOOGLE_SIGN_IN_METHOD="google.com"/* SignInMethod.GOOGLE */,/** Always set to {@link ProviderId}.GOOGLE. */ix.PROVIDER_ID="google.com"/* ProviderId.GOOGLE */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.GITHUB.
 *
 * @remarks
 * GitHub requires an OAuth 2.0 redirect, so you can either handle the redirect directly, or use
 * the {@link signInWithPopup} handler:
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new GithubAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * provider.addScope('repo');
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Github Access Token.
 *   const credential = GithubAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new GithubAuthProvider();
 * provider.addScope('repo');
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Github Access Token.
 * const credential = GithubAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * ```
 * @public
 */class i_ extends ib{constructor(){super("github.com"/* ProviderId.GITHUB */)}/**
     * Creates a credential for Github.
     *
     * @param accessToken - Github access token.
     */static credential(e){return il._fromParams({providerId:i_.PROVIDER_ID,signInMethod:i_.GITHUB_SIGN_IN_METHOD,accessToken:e})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return i_.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return i_.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return i_.credential(e.oauthAccessToken)}catch(e){return null}}}/** Always set to {@link SignInMethod}.GITHUB. */i_.GITHUB_SIGN_IN_METHOD="github.com"/* SignInMethod.GITHUB */,/** Always set to {@link ProviderId}.GITHUB. */i_.PROVIDER_ID="github.com"/* ProviderId.GITHUB */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link OAuthCredential} for {@link ProviderId}.TWITTER.
 *
 * @example
 * ```javascript
 * // Sign in using a redirect.
 * const provider = new TwitterAuthProvider();
 * // Start a sign in process for an unauthenticated user.
 * await signInWithRedirect(auth, provider);
 * // This will trigger a full page redirect away from your app
 *
 * // After returning from the redirect when your app initializes you can obtain the result
 * const result = await getRedirectResult(auth);
 * if (result) {
 *   // This is the signed-in user
 *   const user = result.user;
 *   // This gives you a Twitter Access Token and Secret.
 *   const credential = TwitterAuthProvider.credentialFromResult(result);
 *   const token = credential.accessToken;
 *   const secret = credential.secret;
 * }
 * ```
 *
 * @example
 * ```javascript
 * // Sign in using a popup.
 * const provider = new TwitterAuthProvider();
 * const result = await signInWithPopup(auth, provider);
 *
 * // The signed-in user info.
 * const user = result.user;
 * // This gives you a Twitter Access Token and Secret.
 * const credential = TwitterAuthProvider.credentialFromResult(result);
 * const token = credential.accessToken;
 * const secret = credential.secret;
 * ```
 *
 * @public
 */class iE extends ib{constructor(){super("twitter.com"/* ProviderId.TWITTER */)}/**
     * Creates a credential for Twitter.
     *
     * @param token - Twitter access token.
     * @param secret - Twitter secret.
     */static credential(e,t){return il._fromParams({providerId:iE.PROVIDER_ID,signInMethod:iE.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
     *
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return iE.credentialFromTaggedObject(e)}/**
     * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
     * thrown during a sign-in, link, or reauthenticate operation.
     *
     * @param userCredential - The user credential.
     */static credentialFromError(e){return iE.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return iE.credential(t,r)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iS(e,t){return np(e,"POST"/* HttpMethod.POST */,"/v1/accounts:signUp"/* Endpoint.SIGN_UP */,nc(e,t))}/** Always set to {@link SignInMethod}.TWITTER. */iE.TWITTER_SIGN_IN_METHOD="twitter.com"/* SignInMethod.TWITTER */,/** Always set to {@link ProviderId}.TWITTER. */iE.PROVIDER_ID="twitter.com"/* ProviderId.TWITTER */;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){let i=await nj._fromIdTokenResponse(e,r,n),o=ik(r),a=new iP({user:i,providerId:o,_tokenResponse:r,operationType:t});return a}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,/* reload */!0);let n=ik(r);return new iP({user:e,providerId:n,_tokenResponse:r,operationType:t})}}function ik(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone"/* ProviderId.PHONE */:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI extends t5{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,// https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
Object.setPrototypeOf(this,iI.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new iI(e,t,r,n)}}function iO(e,t,r,n){let i="reauthenticate"/* OperationType.REAUTHENTICATE */===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e);return i.catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw iI._fromErrorAndOperation(e,r,t,n);throw r})}async function iC(e,t,r=!1){let n=await nk(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return iP._forOperation(e,"link"/* OperationType.LINK */,n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iT(e,t,r=!1){let{auth:n}=e,i="reauthenticate"/* OperationType.REAUTHENTICATE */;try{let o=await nk(e,iO(n,i,t,e),r);nt(o.idToken,n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let a=nP(o.idToken);nt(a,n,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let{sub:s}=a;return nt(e.uid===s,n,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),iP._forOperation(e,i,o)}catch(e){throw(null==e?void 0:e.code)==="auth/user-not-found"&&r7(n,"user-mismatch"/* AuthErrorCode.USER_MISMATCH */),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(e,t,r=!1){let n="signIn"/* OperationType.SIGN_IN */,i=await iO(e,n,t),o=await iP._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(o.user),o}/**
 * Asynchronously signs in with the given credentials.
 *
 * @remarks
 * An {@link AuthProvider} can be used to generate the credential.
 *
 * @param auth - The {@link Auth} instance.
 * @param credential - The auth credential.
 *
 * @public
 */async function iA(e,t){return iR(rs(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Updates the password policy cached in the {@link Auth} instance if a policy is already
 * cached for the project or tenant.
 *
 * @remarks
 * We only fetch the password policy if the password did not meet policy requirements and
 * there is an existing policy cached. A developer must call validatePassword at least
 * once for the cache to be automatically updated.
 *
 * @param auth - The {@link Auth} instance.
 *
 * @private
 */async function iN(e){let t=rs(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}/**
 * Creates a new user account associated with the specified email address and password.
 *
 * @remarks
 * On successful creation of the user account, this user will also be signed in to your application.
 *
 * User account creation can fail if the account already exists or the password is invalid.
 *
 * Note: The email address acts as a unique identifier for the user and enables an email-based
 * password reset. This function will create a new user account and set the initial user password.
 *
 * @param auth - The {@link Auth} instance.
 * @param email - The user's email address.
 * @param password - The user's chosen password.
 *
 * @public
 */async function iM(e,t,r){let n=rs(e),i=n8(n,{returnSecureToken:!0,email:t,password:r,clientType:"CLIENT_TYPE_WEB"/* RecaptchaClientType.WEB */},"signUpPassword"/* RecaptchaActionName.SIGN_UP_PASSWORD */,iS),o=await i.catch(t=>{throw"auth/password-does-not-meet-requirements"===t.code&&iN(e),t}),a=await iP._fromIdTokenResponse(n,"signIn"/* OperationType.SIGN_IN */,o);return await n._updateCurrentUser(a.user),a}new WeakMap;const ij="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */// There are two different browser persistence types: local and session.
// Both have the same implementation but use a different underlying storage
// object.
class iD{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(ij,"1"),this.storage.removeItem(ij),Promise.resolve(!0)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class iL extends iD{constructor(){super(()=>window.localStorage,"LOCAL"/* PersistenceType.LOCAL */),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,// Safari or iOS browser and embedded in an iframe.
this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let e=t2();return nV(e)||nG(e)}()&&function(){try{// Check that the current window is not the top window.
// If so, return true.
return!!(window&&window!==window.top)}catch(e){return!1}}(),// Whether to use polling instead of depending on window events
this.fallbackToPolling=nX(),this._shouldAllowMigration=!0}forAllChangedKeys(e){// Check all keys with listeners on them.
for(let t of Object.keys(this.listeners)){// Get value from localStorage.
let r=this.storage.getItem(t),n=this.localCache[t];// If local map value does not match, trigger listener with storage event.
// Differentiate this simulated event from the real storage event.
r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){// Key would be null in some situations, like when localStorage is cleared
if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;// Safari embedded iframe. Storage event will trigger with the delta
// changes but no changes will be applied to the iframe localStorage.
if(t?// Remove storage event listener to prevent possible event duplication.
this.detachListener():// Remove polling listener to prevent possible event duplication.
this.stopPolling(),this.safariLocalStorageNotSynced){// Get current iframe page value.
let n=this.storage.getItem(r);// Value not synchronized, synchronize manually.
if(e.newValue!==n)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}let n=()=>{// Keep local map up to date in case storage event is triggered before
// poll.
let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},i=this.storage.getItem(r);/** Detects Internet Explorer. */(function(){let e=t2();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?// correct key, oldValue and newValue but localStorage.getItem(key) does
// not yield the updated value until a few milliseconds. This ensures
// this recovers from that situation.
setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),/* poll */!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,// Populate the cache to avoid spuriously triggering on first poll.
this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}// Update local cache on base operations:
async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}iL.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF extends iD{constructor(){super(()=>window.sessionStorage,"SESSION"/* PersistenceType.SESSION */)}_addListener(e,t){}_removeListener(e,t){}}iF.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface class for receiving messages.
 *
 */class iU{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}/**
     * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
     *
     * @param eventTarget - An event target (such as window or self) through which the underlying
     * messages will be received.
     */static _getInstance(e){// The results are stored in an array since objects can't be keys for other
// objects. In addition, setting a unique property on an event target as a
// hash map key may not be allowed due to CORS restrictions.
let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new iU(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}/**
     * Fans out a MessageEvent to the appropriate listeners.
     *
     * @remarks
     * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
     * finished processing.
     *
     * @param event - The MessageEvent.
     *
     */async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;e.ports[0].postMessage({status:"ack"/* _Status.ACK */,eventId:t,eventType:r});let o=Array.from(i).map(async t=>t(e.origin,n)),a=await Promise.all(o.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done"/* _Status.DONE */,eventId:t,eventType:r,response:a})}/**
     * Subscribe an event handler for a particular event.
     *
     * @param eventType - Event name to subscribe to.
     * @param eventHandler - The event handler which should receive the events.
     *
     */_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}/**
     * Unsubscribe an event handler from a particular event.
     *
     * @param eventType - Event name to unsubscribe from.
     * @param eventHandler - Optinoal event handler, if none provided, unsubscribe all handlers on this event.
     *
     */_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iB(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}iU.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Interface for sending messages and waiting for a completion response.
 *
 */class iz{constructor(e){this.target=e,this.handlers=new Set}/**
     * Unsubscribe the handler and remove it from our tracking Set.
     *
     * @param handler - The handler to unsubscribe.
     */removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}/**
     * Send a message to the Receiver located at {@link target}.
     *
     * @remarks
     * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
     * receiver has had a chance to fully process the event.
     *
     * @param eventType - Type of event to send.
     * @param data - The payload of the event.
     * @param timeout - Timeout for waiting on an ACK from the receiver.
     *
     * @returns An array of settled promises from all the handlers that were listening on the receiver.
     */async _send(e,t,r=50/* _TimeoutDuration.ACK */){let n,i;let o="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!o)throw Error("connection_unavailable"/* _MessageError.CONNECTION_UNAVAILABLE */);return new Promise((a,s)=>{let l=iB("",20);o.port1.start();let u=setTimeout(()=>{s(Error("unsupported_event"/* _MessageError.UNSUPPORTED_EVENT */))},r);i={messageChannel:o,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack"/* _Status.ACK */:// The receiver should ACK first.
clearTimeout(u),n=setTimeout(()=>{s(Error("timeout"/* _MessageError.TIMEOUT */))},3e3/* _TimeoutDuration.COMPLETION */);break;case"done"/* _Status.DONE */:// Once the receiver's handlers are finished we will get the results.
clearTimeout(n),a(e.data.response);break;default:clearTimeout(u),clearTimeout(n),s(Error("invalid_response"/* _MessageError.INVALID_RESPONSE */))}}},this.handlers.add(i),o.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[o.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Lazy accessor for window, since the compat layer won't tree shake this out,
 * we need to make sure not to mess with window unless we have to
 */function i$(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iV(){return void 0!==i$().WorkerGlobalScope&&"function"==typeof i$().importScripts}async function iH(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iq="firebaseLocalStorageDb",iW="firebaseLocalStorage",iK="fbase_key";/**
 * Promise wrapper for IDBRequest
 *
 * Unfortunately we can't cleanly extend Promise<T> since promises are not callable in ES6
 *
 */class iJ{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function iG(e,t){return e.transaction([iW],t?"readwrite":"readonly").objectStore(iW)}function iX(){let e=indexedDB.open(iq,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(iW,{keyPath:iK})}catch(e){r(e)}}),e.addEventListener("success",async()=>{let r=e.result;// Strange bug that occurs in Firefox when multiple tabs are opened at the
// same time. The only way to recover seems to be deleting the database
// and re-initializing it.
// https://github.com/firebase/firebase-js-sdk/issues/634
r.objectStoreNames.contains(iW)?t(r):(// Need to close the database or else you get a `blocked` event
r.close(),await function(){let e=indexedDB.deleteDatabase(iq);return new iJ(e).toPromise()}(),t(await iX()))})})}async function iQ(e,t,r){let n=iG(e,!0).put({[iK]:t,value:r});return new iJ(n).toPromise()}async function iY(e,t){let r=iG(e,!1).get(t),n=await new iJ(r).toPromise();return void 0===n?null:n.value}function iZ(e,t){let r=iG(e,!0).delete(t);return new iJ(r).toPromise()}class i0{constructor(){this.type="LOCAL"/* PersistenceType.LOCAL */,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},// setTimeout return value is platform specific
// eslint-disable-next-line @typescript-eslint/no-explicit-any
this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,// Fire & forget the service worker registration as it may never resolve
this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await iX()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0);// TODO: consider adding exponential backoff
}}/**
     * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
     * postMessage interface to send these events to the worker ourselves.
     */async initializeServiceWorkerMessaging(){return iV()?this.initializeReceiver():this.initializeSender()}/**
     * As the worker we should listen to events from the main window.
     */async initializeReceiver(){this.receiver=iU._getInstance(iV()?self:null),// Refresh from persistence if we receive a KeyChanged message.
this.receiver._subscribe("keyChanged"/* _EventType.KEY_CHANGED */,async(e,t)=>{let r=await this._poll();return{keyProcessed:r.includes(t.key)}}),// Let the sender know that we are listening so they give us more timeout.
this.receiver._subscribe("ping"/* _EventType.PING */,async(e,t)=>["keyChanged"/* _EventType.KEY_CHANGED */])}/**
     * As the main window, we should let the worker know when keys change (set and remove).
     *
     * @remarks
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
     * may not resolve.
     */async initializeSender(){var e,t;if(// Check to see if there's an active service worker.
this.activeServiceWorker=await iH(),!this.activeServiceWorker)return;this.sender=new iz(this.activeServiceWorker);// Ping the service worker to check what events they can handle.
let r=await this.sender._send("ping"/* _EventType.PING */,{},800/* _TimeoutDuration.LONG_ACK */);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"/* _EventType.KEY_CHANGED */))&&(this.serviceWorkerReceiverAvailable=!0)}/**
     * Let the worker know about a changed key, the exact key doesn't technically matter since the
     * worker will just trigger a full sync anyway.
     *
     * @remarks
     * For now, we only support one service worker per page.
     *
     * @param key - Storage key which changed.
     */async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null==navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged"/* _EventType.KEY_CHANGED */,{key:e},this.serviceWorkerReceiverAvailable?800/* _TimeoutDuration.LONG_ACK */:50/* _TimeoutDuration.ACK */)}catch(e){// This is a best effort approach. Ignore errors.
}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await iX();return await iQ(e,ij,"1"),await iZ(e,ij),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>iQ(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>iY(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>iZ(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){// TODO: check if we need to fallback if getAll is not supported
let e=await this._withRetries(e=>{let t=iG(e,!1).getAll();return new iJ(t).toPromise()});if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(// Deleted
this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,// Populate the cache to avoid spuriously triggering on first poll.
this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}/**
 * Returns a verification ID to be used in conjunction with the SMS code that is sent.
 *
 */async function i1(e,t,r){var n,i,o;let a=await r.verify();try{let s;if(nt("string"==typeof a,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),nt("recaptcha"===r.type,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){let t=s.session;if("phoneNumber"in s){nt("enroll"/* MultiFactorSessionType.ENROLL */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let r=await (i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:a}},nd(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:start"/* Endpoint.START_MFA_ENROLLMENT */,nc(e,i)));return r.phoneSessionInfo.sessionInfo}{nt("signin"/* MultiFactorSessionType.SIGN_IN */===t.type,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */);let r=(null===(n=s.multiFactorHint)||void 0===n?void 0:n.uid)||s.multiFactorUid;nt(r,e,"missing-multi-factor-info"/* AuthErrorCode.MISSING_MFA_INFO */);let i=await (o={mfaPendingCredential:t.credential,mfaEnrollmentId:r,phoneSignInInfo:{recaptchaToken:a}},nd(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:start"/* Endpoint.START_MFA_SIGN_IN */,nc(e,o)));return i.phoneResponseInfo.sessionInfo}}{let{sessionInfo:t}=await iu(e,{phoneNumber:s.phoneNumber,recaptchaToken:a});return t}}finally{r._reset()}}i0.type="LOCAL",n4("rcb"),new no(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Provider for generating an {@link PhoneAuthCredential}.
 *
 * @remarks
 * `PhoneAuthProvider` does not work in a Node.js environment.
 *
 * @example
 * ```javascript
 * // 'recaptcha-container' is the ID of an element in the DOM.
 * const applicationVerifier = new RecaptchaVerifier('recaptcha-container');
 * const provider = new PhoneAuthProvider(auth);
 * const verificationId = await provider.verifyPhoneNumber('+16505550101', applicationVerifier);
 * // Obtain the verificationCode from the user.
 * const phoneCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
 * const userCredential = await signInWithCredential(auth, phoneCredential);
 * ```
 *
 * @public
 */class i2{/**
     * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
     *
     */constructor(e){/** Always set to {@link ProviderId}.PHONE. */this.providerId=i2.PROVIDER_ID,this.auth=rs(e)}/**
     *
     * Starts a phone number authentication flow by sending a verification code to the given phone
     * number.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = await signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
     * E.164 format (e.g. +16505550101).
     * @param applicationVerifier - For abuse prevention, this method also requires a
     * {@link ApplicationVerifier}. This SDK includes a reCAPTCHA-based implementation,
     * {@link RecaptchaVerifier}.
     *
     * @returns A Promise for a verification ID that can be passed to
     * {@link PhoneAuthProvider.credential} to identify this flow..
     */verifyPhoneNumber(e,t){return i1(this.auth,e,rs(t))}/**
     * Creates a phone auth credential, given the verification ID from
     * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
     * mobile device.
     *
     * @example
     * ```javascript
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
     * const userCredential = signInWithCredential(auth, authCredential);
     * ```
     *
     * @example
     * An alternative flow is provided using the `signInWithPhoneNumber` method.
     * ```javascript
     * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
     * // Obtain verificationCode from the user.
     * const userCredential = await confirmationResult.confirm(verificationCode);
     * ```
     *
     * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
     * @param verificationCode - The verification code sent to the user's mobile device.
     *
     * @returns The auth provider credential.
     */static credential(e,t){return im._fromVerification(e,t)}/**
     * Generates an {@link AuthCredential} from a {@link UserCredential}.
     * @param userCredential - The user credential.
     */static credentialFromResult(e){return i2.credentialFromTaggedObject(e)}/**
     * Returns an {@link AuthCredential} when passed an error.
     *
     * @remarks
     *
     * This method works for errors like
     * `auth/account-exists-with-different-credentials`. This is useful for
     * recovering when attempting to set a user's phone number but the number
     * in question is already tied to another account. For example, the following
     * code tries to update the current user's phone number, and if that
     * fails, links the user with the account associated with that number:
     *
     * ```js
     * const provider = new PhoneAuthProvider(auth);
     * const verificationId = await provider.verifyPhoneNumber(number, verifier);
     * try {
     *   const code = ''; // Prompt the user for the verification code
     *   await updatePhoneNumber(
     *       auth.currentUser,
     *       PhoneAuthProvider.credential(verificationId, code));
     * } catch (e) {
     *   if ((e as FirebaseError)?.code === 'auth/account-exists-with-different-credential') {
     *     const cred = PhoneAuthProvider.credentialFromError(e);
     *     await linkWithCredential(auth.currentUser, cred);
     *   }
     * }
     *
     * // At this point, auth.currentUser.phoneNumber === number.
     * ```
     *
     * @param error - The error to generate a credential from.
     */static credentialFromError(e){return i2.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?im._fromTokenResponse(t,r):null}}/** Always set to {@link ProviderId}.PHONE. */i2.PROVIDER_ID="phone"/* ProviderId.PHONE */,/** Always set to {@link SignInMethod}.PHONE. */i2.PHONE_SIGN_IN_METHOD="phone"/* SignInMethod.PHONE */;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3 extends ie{constructor(e){super("custom"/* ProviderId.CUSTOM */,"custom"/* ProviderId.CUSTOM */),this.params=e}_getIdTokenResponse(e){return is(e,this._buildIdpRequest())}_linkToIdToken(e,t){return is(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return is(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function i4(e){return iR(e.auth,new i3(e),e.bypassAuthState)}function i6(e){let{auth:t,user:r}=e;return nt(r,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),iT(r,new i3(e),e.bypassAuthState)}async function i5(e){let{auth:t,user:r}=e;return nt(r,t,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),iC(r,new i3(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 */class i8{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}let s={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup"/* AuthEventType.SIGN_IN_VIA_POPUP */:case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:return i4;case"linkViaPopup"/* AuthEventType.LINK_VIA_POPUP */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:return i5;case"reauthViaPopup"/* AuthEventType.REAUTH_VIA_POPUP */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return i6;default:r7(this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)}}resolve(e){this.pendingPromise||nr("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||nr("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i7=new no(2e3,1e4);/**
 * Popup event manager. Handles the popup's entire lifecycle; listens to auth
 * events
 *
 */class i9 extends i8{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,i9.currentPopupAction&&i9.currentPopupAction.cancel(),i9.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return nt(e,this.auth,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),e}async onExecution(){1===this.filter.length||nr("Popup operations only handle one event");let e=iB();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,// Check for web storage support and origin validation _after_ the popup is
// loaded. These operations are slow (~1 second or so) Rather than
// waiting on them before opening the window, optimistically open the popup
// and check for storage support at the same time. If storage support is
// not available, this will cause the whole thing to reject properly. It
// will also close the popup, but since the promise has already rejected,
// the popup closed by user poll will reject into the void.
this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(r9(this.auth,"web-storage-unsupported"/* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */))}),// Handle user closure. Notice this does *not* use await
this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(r9(this.auth,"cancelled-popup-request"/* AuthErrorCode.EXPIRED_POPUP_REQUEST */))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,i9.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,r;if(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed){// Make sure that there is sufficient time for whatever action to
// complete. The window could have closed but the sign in network
// call could still be in flight. This is specifically true for
// Firefox or if the opener is in an iframe, in which case the oauth
// helper closes the popup.
this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(r9(this.auth,"popup-closed-by-user"/* AuthErrorCode.POPUP_CLOSED_BY_USER */))},8e3/* _Timeout.AUTH_EVENT */);return}this.pollId=window.setTimeout(e,i7.get())};e()}}// Only one popup is ever shown at once. The lifecycle of the current popup
// can be managed / cancelled by the constructor.
i9.currentPopupAction=null;// We only get one redirect outcome for any one auth, so just store it
// in here.
const oe=new Map;class ot extends i8{constructor(e,t,r=!1){super(e,["signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */,"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */,"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */,"unknown"/* AuthEventType.UNKNOWN */],t,void 0,r),this.eventId=null}/**
     * Override the execute function; if we already have a redirect result, then
     * just return it.
     */async execute(){let e=oe.get(this.auth._key());if(!e){try{let t=await or(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}oe.set(this.auth._key(),e)}return this.bypassAuthState||oe.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */===e.type)return super.onAuthEvent(e);if("unknown"/* AuthEventType.UNKNOWN */===e.type){// This is a sentinel value indicating there's no pending redirect
this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function or(e,t){let r=nU("pendingRedirect",t.config.apiKey,t.name),n=nL(e._redirectPersistence);if(!await n._isAvailable())return!1;let i=await n._get(r)==="true";return await n._remove(r),i}function on(e,t){oe.set(e._key(),t)}async function oi(e,t,r=!1){let n=rs(e),i=t?nL(t):(nt(n._popupRedirectResolver,n,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),n._popupRedirectResolver),o=new ot(n,i,r),a=await o.execute();return a&&!r&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}class oo{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){// Check if the event has already been handled
if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect"/* AuthEventType.SIGN_IN_VIA_REDIRECT */:case"linkViaRedirect"/* AuthEventType.LINK_VIA_REDIRECT */:case"reauthViaRedirect"/* AuthEventType.REAUTH_VIA_REDIRECT */:return!0;case"unknown"/* AuthEventType.UNKNOWN */:return os(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!os(e)){let n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error"/* AuthErrorCode.INTERNAL_ERROR */;t.onError(r9(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(oa(e))}saveEventToCache(e){this.cachedEventUids.add(oa(e)),this.lastProcessedEventTime=Date.now()}}function oa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function os({type:e,error:t}){return"unknown"/* AuthEventType.UNKNOWN */===e&&(null==t?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ol(e,t={}){return nd(e,"GET"/* HttpMethod.GET */,"/v1/projects"/* Endpoint.GET_PROJECT_CONFIG */,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oc=/^https?/;async function od(e){// Skip origin validation if we are in an emulated environment
if(e.config.emulator)return;let{authorizedDomains:t}=await ol(e);for(let e of t)try{if(function(e){let t=nn(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!oc.test(r))return!1;if(ou.test(e))// only contain the IP, no extra character.
return n===e;// Dots in pattern should be escaped.
let i=e.replace(/\./g,"\\."),o=RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(n)}(e))return}catch(e){// Do nothing if there's a URL error; just continue searching
}// In the old SDK, this error also provides helpful messages.
r7(e,"unauthorized-domain"/* AuthErrorCode.INVALID_ORIGIN */)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of=new no(3e4,6e4);/**
 * Reset unlaoded GApi modules. If gapi.load fails due to a network error,
 * it will stop working after a retrial. This is a hack to fix this issue.
 */function op(){// Clear last failed gapi.load state to force next gapi.load to first
// load the failed gapi.iframes module.
// Get gapix.beacon context.
let e=i$().___jsl;// Get current hint.
if(null==e?void 0:e.H){for(let t of Object.keys(e.H))// Clear pending callbacks.
if(// Requested modules.
e.H[t].r=e.H[t].r||[],// Loaded modules.
e.H[t].L=e.H[t].L||[],// Set requested modules to a copy of the loaded modules.
e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let oh=null;/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=new no(5e3,15e3),og={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oy=new Map([["identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,"p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]// test
]);async function ov(e){let t=await (oh=oh||new Promise((t,r)=>{var n,i,o;// Function to run when gapi.load is ready.
function a(){// The developer may have tried to previously run gapi.load and failed.
// Run this to fix that.
op(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{// The above reset may be sufficient, but having this reset after
// failure ensures that if the developer calls gapi.load after the
// connection is re-established and before another attempt to embed
// the iframe, it would work and would not be broken because of our
// failed attempt.
// Timeout when gapi.iframes.Iframe not loaded.
op(),r(r9(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},timeout:of.get()})}if(null===(i=null===(n=i$().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else if(null===(o=i$().gapi)||void 0===o?void 0:o.load)a();else{// Create a new iframe callback when this is called so as not to overwrite
// any previous defined callback. This happens if this method is called
// multiple times in parallel and could result in the later callback
// overwriting the previous one. This would end up with a iframe
// timeout.
let t=n4("iframefcb");// Load GApi loader.
return(// GApi loader not available, dynamically load platform.js.
i$()[t]=()=>{// GApi loader should be ready.
gapi.load?a():r(r9(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */))},n3(`https://apis.google.com/js/api.js?onload=${t}`).catch(e=>r(e)))}}).catch(e=>{throw(// Reset cached promise to allow for retrial.
oh=null,e)})),r=i$().gapi;return nt(r,e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */),t.open({where:document.body,url:function(e){let t=e.config;nt(t.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */);let r=t.emulator?na(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:rV},i=oy.get(e.config.apiHost);i&&(n.eid=i);let o=e._getFrameworks();return o.length&&(n.fw=o.join(",")),`${r}?${rt(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:og,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({// Prevent iframe from closing on mouse out.
    setHideOnLeave:!1});let i=r9(e,"network-request-failed"/* AuthErrorCode.NETWORK_REQUEST_FAILED */),o=i$().setTimeout(()=>{n(i)},om.get());// Clear timer and resolve pending iframe ready promise.
    function a(){i$().clearTimeout(o),r(t)}// This returns an IThenable. However the reject part does not call
    // when the iframe is not loaded.
    t.ping(a).then(a,()=>{n(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ow{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}/**
 * Fragment name for the App Check token that gets passed to the widget
 *
 * @internal
 */const ox=encodeURIComponent("fac");async function o_(e,t,r,n,i,o){nt(e.config.authDomain,e,"auth-domain-config-required"/* AuthErrorCode.MISSING_AUTH_DOMAIN */),nt(e.config.apiKey,e,"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */);let a={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:rV,eventId:i};if(t instanceof iv)// TODO set additionalParams from the provider as well?
for(let[r,n]of(t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())&&(a.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(o||{})))a[r]=n;if(t instanceof ib){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(a.scopes=e.join(","))}for(let t of(e.tenantId&&(a.tid=e.tenantId),Object.keys(a)))void 0===a[t]&&delete a[t];// Sets the App Check token to pass to the widget
let s=await e._getAppCheckToken(),l=s?`#${ox}=${encodeURIComponent(s)}`:"";// Start at index 1 to skip the leading '&' in the query string
return`${function({config:e}){return e.emulator?na(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${rt(a).slice(1)}${l}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * The special web storage event
 *
 */const oE="webStorageSupport",oS=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iF,this._completeRedirectFn=oi,this._overrideRedirectResult=on}// Wrapping in async even though we don't await anywhere in order
// to make sure errors are raised as promise rejections
async _openPopup(e,t,r,n){var i;(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager)||nr("_initialize() not called before _openPopup()");let o=await o_(e,t,r,nn(),n);return function(e,t,r,n=500,i=600){let o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString(),s="",l=Object.assign(Object.assign({},ob),{width:n.toString(),height:i.toString(),top:o,left:a}),u=t2().toLowerCase();r&&(s=nH(u)?"_blank":r),n$(u)&&(// Firefox complains when invalid URLs are popped out. Hacky way to bypass.
t=t||"http://localhost",// Firefox disables by default scrolling on popup windows, which can create
// issues when the user has many Google accounts, for instance.
l.scrollbars="yes");let c=Object.entries(l).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=t2()){var t;return nG(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==s)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",s),new ow(null);// about:blank getting sanitized causing browsers like IE/Edge to display
// brief error message before redirecting to handler.
let d=window.open(t||"",s,c);nt(d,e,"popup-blocked"/* AuthErrorCode.POPUP_BLOCKED */);// Flaky on IE edge, encapsulate with a try and catch.
try{d.focus()}catch(e){}return new ow(d)}(e,o,iB())}async _openRedirect(e,t,r,n){await this._originValidation(e);let i=await o_(e,t,r,nn(),n);return i$().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(r||nr("If manager is not set, promise should be"),r)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},// If the promise is rejected, the key should be removed so that the
// operation can be retried later.
r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await ov(e),r=new oo(e);return t.register("authEvent",t=>{nt(null==t?void 0:t.authEvent,e,"invalid-auth-event"/* AuthErrorCode.INVALID_AUTH_EVENT */);// TODO: Consider splitting redirect and popup events earlier on
let n=r.onEvent(t.authEvent);return{status:n?"ACK"/* GapiOutcome.ACK */:"ERROR"/* GapiOutcome.ERROR */}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){let r=this.iframes[e._key()];r.send(oE,{type:oE},r=>{var n;let i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n[oE];void 0!==i&&t(!!i),r7(e,"internal-error"/* AuthErrorCode.INTERNAL_ERROR */)},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=od(e)),this.originValidationPromises[t]}get _shouldInitProactively(){// Mobile browsers and Safari need to optimistically initialize
return nX()||nV()||nG()}};class oP{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll"/* MultiFactorSessionType.ENROLL */:return this._finalizeEnroll(e,t.credential,r);case"signin"/* MultiFactorSessionType.SIGN_IN */:return this._finalizeSignIn(e,t.credential);default:return nr("unexpected MultiFactorSessionType")}}}/**
 * {@inheritdoc PhoneMultiFactorAssertion}
 *
 * @public
 */class ok extends oP{constructor(e){super("phone"/* FactorId.PHONE */),this.credential=e}/** @internal */static _fromCredential(e){return new ok(e)}/** @internal */_finalizeEnroll(e,t,r){return nd(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,nc(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}/** @internal */_finalizeSignIn(e,t){return nd(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,nc(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class oI extends oP{constructor(e,t,r){super("totp"/* FactorId.TOTP */),this.otp=e,this.enrollmentId=t,this.secret=r}/** @internal */static _fromSecret(e,t){return new oI(t,void 0,e)}/** @internal */static _fromEnrollmentId(e,t){return new oI(t,e)}/** @internal */async _finalizeEnroll(e,t,r){return nt(void 0!==this.secret,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */),nd(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaEnrollment:finalize"/* Endpoint.FINALIZE_MFA_ENROLLMENT */,nc(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}/** @internal */async _finalizeSignIn(e,t){nt(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error"/* AuthErrorCode.ARGUMENT_ERROR */);let r={verificationCode:this.otp};return nd(e,"POST"/* HttpMethod.POST */,"/v2/accounts/mfaSignIn:finalize"/* Endpoint.FINALIZE_MFA_SIGN_IN */,nc(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}}/**
 * Provider for generating a {@link TotpMultiFactorAssertion}.
 *
 * Stores the shared secret key and other parameters to generate time-based OTPs.
 * Implements methods to retrieve the shared secret key and generate a QR code URL.
 * @public
 */class oO{// The public members are declared outside the constructor so the docs can be generated.
constructor(e,t,r,n,i,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}/** @internal */static _fromStartTotpMfaEnrollmentResponse(e,t){return new oO(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}/** @internal */_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}/**
     * Returns a QR code URL as described in
     * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
     * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
     * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
     *
     * @param accountName the name of the account/app along with a user identifier.
     * @param issuer issuer of the TOTP (likely the app name).
     * @returns A QR code URL string.
     */generateQrCodeUrl(e,t){var r;let n=!1;return(oC(e)||oC(t))&&(n=!0),n&&(oC(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),oC(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}/** @internal */function oC(e){return void 0===e||(null==e?void 0:e.length)===0}var oT="@firebase/auth",oR="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){nt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth"/* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */)}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}const oN=t0("authIdTokenMaxAge")||300;let oM=null;const oj=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>oN)return;// Specifically trip null => undefined when logged out, to delete any existing cookie
    let i=null==r?void 0:r.token;oM!==i&&(oM=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};_="Browser"/* ClientPlatform.BROWSER */,rU(new rl("auth"/* _ComponentName.AUTH */,(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;nt(o&&!o.includes(":"),"invalid-api-key"/* AuthErrorCode.INVALID_API_KEY */,{appName:r.name});let s={apiKey:o,authDomain:a,clientPlatform:_,apiHost:"identitytoolkit.googleapis.com"/* DefaultConfig.API_HOST */,tokenApiHost:"securetoken.googleapis.com"/* DefaultConfig.TOKEN_API_HOST */,apiScheme:"https"/* DefaultConfig.API_SCHEME */,sdkClientVersion:nQ(_)},l=new n1(r,n,i,s);return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(nL);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),// This promise is intended to float; auth initialization happens in the
// background, meanwhile the auth object may be used by the app.
// eslint-disable-next-line @typescript-eslint/no-floating-promises
e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(l,t),l},"PUBLIC"/* ComponentType.PUBLIC */)/**
         * Auth can only be initialized by explicitly calling getAuth() or initializeAuth()
         * For why we do this, See go/firebase-next-auth-init
         */.setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)/**
         * Because all firebase products that depend on auth depend on auth-internal directly,
         * we need to initialize auth-internal after auth is initialized to make it available to other firebase products.
         */.setInstanceCreatedCallback((e,t,r)=>{let n=e.getProvider("auth-internal"/* _ComponentName.AUTH_INTERNAL */);n.initialize()})),rU(new rl("auth-internal"/* _ComponentName.AUTH_INTERNAL */,e=>{let t=rs(e.getProvider("auth"/* _ComponentName.AUTH */).getImmediate());return new oA(t)},"PRIVATE"/* ComponentType.PRIVATE */).setInstantiationMode("EXPLICIT"/* InstantiationMode.EXPLICIT */)),rW(oT,oR,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node"/* ClientPlatform.NODE */:return"node";case"ReactNative"/* ClientPlatform.REACT_NATIVE */:return"rn";case"Worker"/* ClientPlatform.WORKER */:return"webworker";case"Cordova"/* ClientPlatform.CORDOVA */:return"cordova";default:return}}(_)),rW(oT,oR,"esm2017"),rW("firebase","10.6.0","app");const oD=(e,t)=>t.some(t=>e instanceof t),oL=new WeakMap,oF=new WeakMap,oU=new WeakMap,oB=new WeakMap,oz=new WeakMap;let o$={get(e,t,r){if(e instanceof IDBTransaction){// Special handling for transaction.done.
if("done"===t)return oF.get(e);// Polyfill for objectStoreNames because of Edge.
if("objectStoreNames"===t)return e.objectStoreNames||oU.get(e);// Make tx.store return the only store in the transaction, or undefined if there are many.
if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}// Else transform whatever we get back.
return oV(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function oV(e){var t;// We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
// IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{t(oV(e.result)),n()},o=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(t=>{// Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
// (see wrapFunction).
t instanceof IDBCursor&&oL.set(t,e);// Catching to avoid "Uncaught Promise exceptions"
}).catch(()=>{}),// This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
// is because we create many promises from a single IDBRequest.
oz.set(t,e),t}(e);// If we've already transformed this value before, reuse the transformed value.
// This is faster, but it also provides object equality.
if(oB.has(e))return oB.get(e);let i="function"==typeof(t=e)?// Due to expected object equality (which is enforced by the caching in `wrap`), we
// only create one new func per func.
// Edge doesn't support objectStoreNames (booo), so we polyfill it here.
t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return(// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
t.apply(oH(this),e),oV(oL.get(this)))}:function(...e){// Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
// the original object.
return oV(t.apply(oH(this),e))}:function(e,...r){let n=t.call(oH(this),e,...r);return oU.set(n,e.sort?e.sort():[e]),oV(n)}:(t instanceof IDBTransaction&&function(e){// Early bail if we've already created a done promise for this transaction.
if(oF.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{t(),n()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});// Cache it for later retrieval.
oF.set(e,t)}(t),oD(t,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,o$):t;return i!==e&&(oB.set(e,i),oz.set(i,e)),i}const oH=e=>oz.get(e),oq=["get","getKey","getAll","getAllKeys","count"],oW=["put","add","delete","clear"],oK=new Map;function oJ(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(oK.get(t))return oK.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=oW.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||oq.includes(r)))return;let o=async function(e,...t){// isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
let o=this.transaction(e,i?"readwrite":"readonly"),a=o.store;// Must reject if op rejects.
// If it's a write operation, must reject if tx.done rejects.
// Must reject with op rejection first.
// Must resolve with op value.
// Must handle both promises (no unhandled rejections)
return n&&(a=a.index(t.shift())),(await Promise.all([a[r](...t),i&&o.done]))[0]};return oK.set(t,o),o}o$={...f=o$,get:(e,t,r)=>oJ(e,t)||f.get(e,t,r),has:(e,t)=>!!oJ(e,t)||f.has(e,t)};const oG="@firebase/installations",oX="0.6.4",oQ=`w:${oX}`,oY="FIS_v2",oZ=new t8("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});/** Returns true if error is a FirebaseError that is based on an error from the server. */function o0(e){return e instanceof t5&&e.code.includes("request-failed"/* ErrorCode.REQUEST_FAILED */)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function o2(e){return{token:e.token,requestStatus:2/* RequestStatus.COMPLETED */,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function o3(e,t){let r=await t.json(),n=r.error;return oZ.create("request-failed"/* ErrorCode.REQUEST_FAILED */,{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function o4({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */async function o6(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o5({appConfig:e,heartbeatServiceProvider:t},{fid:r}){let n=o1(e),i=o4(e),o=t.getImmediate({optional:!0});if(o){let e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let a={fid:r,authVersion:oY,appId:e.appId,sdkVersion:oQ},s={method:"POST",headers:i,body:JSON.stringify(a)},l=await o6(()=>fetch(n,s));if(l.ok){let e=await l.json(),t={fid:e.fid||r,registrationStatus:2/* RequestStatus.COMPLETED */,refreshToken:e.refreshToken,authToken:o2(e.authToken)};return t}throw await o3("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Returns a promise that resolves after given time passes. */function o8(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o7=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//** Returns a string key that can be used to identify the app. */function o9(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new Map;/**
 * Calls the onIdChange callbacks with the new FID value, and broadcasts the
 * change to other tabs.
 */function at(e,t){let r=o9(e);ar(r,t),function(e,t){let r=(!an&&"BroadcastChannel"in self&&((an=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{ar(e.data.key,e.data.fid)}),an);r&&r.postMessage({key:e,fid:t}),0===ae.size&&an&&(an.close(),an=null)}(r,t)}function ar(e,t){let r=ae.get(e);if(r)for(let e of r)e(t)}let an=null;const ai="firebase-installations-store";let ao=null;function aa(){return ao||(ao=/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:o}={}){let a=indexedDB.open(e,1),s=oV(a);return n&&a.addEventListener("upgradeneeded",e=>{n(oV(a.result),e.oldVersion,e.newVersion,oV(a.transaction))}),r&&a.addEventListener("blocked",()=>r()),s.then(e=>{o&&e.addEventListener("close",()=>o()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}("firebase-installations-database",0,{upgrade:(e,t)=>{// We don't use 'break' in this switch statement, the fall-through
// behavior is what we want, because if there are multiple versions between
// the old version and the current version, we want ALL the migrations
// that correspond to those versions to run, not only the last one.
// eslint-disable-next-line default-case
0===t&&e.createObjectStore(ai)}})),ao}/** Assigns or overwrites the record for the given key with the given value. */async function as(e,t){let r=o9(e),n=await aa(),i=n.transaction(ai,"readwrite"),o=i.objectStore(ai),a=await o.get(r);return await o.put(t,r),await i.done,a&&a.fid===t.fid||at(e,t.fid),t}/** Removes record(s) from the objectStore that match the given key. */async function al(e){let t=o9(e),r=await aa(),n=r.transaction(ai,"readwrite");await n.objectStore(ai).delete(t),await n.done}/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */async function au(e,t){let r=o9(e),n=await aa(),i=n.transaction(ai,"readwrite"),o=i.objectStore(ai),a=await o.get(r),s=t(a);return void 0===s?await o.delete(r):await o.put(s,r),await i.done,s&&(!a||a.fid!==s.fid)&&at(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */async function ac(e){let t;let r=await au(e.appConfig,r=>{let n=/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */function(e){let t=e||{fid:/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */function(){try{// A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
// bytes. our implementation generates a 17 byte array instead.
let e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),// Replace the first 4 random bits with the constant FID header of 0b0111.
e[0]=112+e[0]%16;let r=/** Converts a FID Uint8Array to a base64 string representation. */function(e){let t=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}(e);// Remove the 23rd character that was added because of the extra 4 bits at the
// end of our 17 byte array, and the '=' padding.
return t.substr(0,22)}(e);return o7.test(r)?r:""}catch(e){// FID generation errored
return""}}(),registrationStatus:0/* RequestStatus.NOT_STARTED */};return ah(t)}(r),i=/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */function(e,t){if(0/* RequestStatus.NOT_STARTED */===t.registrationStatus){if(!navigator.onLine){// Registration required but app is offline.
let e=Promise.reject(oZ.create("app-offline"/* ErrorCode.APP_OFFLINE */));return{installationEntry:t,registrationPromise:e}}// Try registering. Change status to IN_PROGRESS.
let r={fid:t.fid,registrationStatus:1/* RequestStatus.IN_PROGRESS */,registrationTime:Date.now()},n=ad(e,r);return{installationEntry:r,registrationPromise:n}}return 1/* RequestStatus.IN_PROGRESS */===t.registrationStatus?{installationEntry:t,registrationPromise:af(e)}:{installationEntry:t}}(e,n);return t=i.registrationPromise,i.installationEntry});return""===r.fid?{installationEntry:await t}:{installationEntry:r,registrationPromise:t}}/** This will be executed only once for each new Firebase Installation. */async function ad(e,t){try{let r=await o5(e,t);return as(e.appConfig,r)}catch(r){throw o0(r)&&409===r.customData.serverCode?// Generate a new ID next time.
await al(e.appConfig):await as(e.appConfig,{fid:t.fid,registrationStatus:0/* RequestStatus.NOT_STARTED */}),r}}/** Call if FID registration is pending in another request. */async function af(e){// Unfortunately, there is no way of reliably observing when a value in
// IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
// so we need to poll.
let t=await ap(e.appConfig);for(;1/* RequestStatus.IN_PROGRESS */===t.registrationStatus;)// createInstallation request still in progress.
await o8(100),t=await ap(e.appConfig);if(0/* RequestStatus.NOT_STARTED */===t.registrationStatus){// The request timed out or failed in a different call. Try again.
let{installationEntry:t,registrationPromise:r}=await ac(e);return r||t}return t}/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */function ap(e){return au(e,e=>{if(!e)throw oZ.create("installation-not-found"/* ErrorCode.INSTALLATION_NOT_FOUND */);return ah(e)})}function ah(e){return 1/* RequestStatus.IN_PROGRESS */===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0/* RequestStatus.NOT_STARTED */}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am({appConfig:e,heartbeatServiceProvider:t},r){let n=function(e,{fid:t}){return`${o1(e)}/${t}/authTokens:generate`}(e,r),i=function(e,{refreshToken:t}){let r=o4(e);return r.append("Authorization",`${oY} ${t}`),r}(e,r),o=t.getImmediate({optional:!0});if(o){let e=await o.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let a={installation:{sdkVersion:oQ,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(a)},l=await o6(()=>fetch(n,s));if(l.ok){let e=await l.json(),t=o2(e);return t}throw await o3("Generate Auth Token",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */async function ag(e,t=!1){let r;let n=await au(e.appConfig,n=>{var i;if(!aw(n))throw oZ.create("not-registered"/* ErrorCode.NOT_REGISTERED */);let o=n.authToken;if(!t&&2/* RequestStatus.COMPLETED */===(i=o).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return n;if(1/* RequestStatus.IN_PROGRESS */===o.requestStatus)return(// There already is a token request in progress.
r=ay(e,t),n);{// No token or token expired.
if(!navigator.onLine)throw oZ.create("app-offline"/* ErrorCode.APP_OFFLINE */);let t=/** Returns an updated InstallationEntry with an InProgressAuthToken. */function(e){let t={requestStatus:1/* RequestStatus.IN_PROGRESS */,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(n);return r=ab(e,t),t}}),i=r?await r:n.authToken;return i}/**
 * Call only if FID is registered and Auth Token request is in progress.
 *
 * Waits until the current pending request finishes. If the request times out,
 * tries once in this thread as well.
 */async function ay(e,t){// Unfortunately, there is no way of reliably observing when a value in
// IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
// so we need to poll.
let r=await av(e.appConfig);for(;1/* RequestStatus.IN_PROGRESS */===r.authToken.requestStatus;)// generateAuthToken still in progress.
await o8(100),r=await av(e.appConfig);let n=r.authToken;return 0/* RequestStatus.NOT_STARTED */===n.requestStatus?ag(e,t):n}/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */function av(e){return au(e,e=>{if(!aw(e))throw oZ.create("not-registered"/* ErrorCode.NOT_REGISTERED */);let t=e.authToken;return 1/* RequestStatus.IN_PROGRESS */===t.requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0/* RequestStatus.NOT_STARTED */}}):e})}async function ab(e,t){try{let r=await am(e,t),n=Object.assign(Object.assign({},t),{authToken:r});return await as(e.appConfig,n),r}catch(r){if(o0(r)&&(401===r.customData.serverCode||404===r.customData.serverCode))// Generate a new ID next time.
await al(e.appConfig);else{let r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0/* RequestStatus.NOT_STARTED */}});await as(e.appConfig,r)}throw r}}function aw(e){return void 0!==e&&2/* RequestStatus.COMPLETED */===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Creates a Firebase Installation if there isn't one for the app and
 * returns the Installation ID.
 * @param installations - The `Installations` instance.
 *
 * @public
 */async function ax(e){let{installationEntry:t,registrationPromise:r}=await ac(e);return r?r.catch(console.error):// token if needed.
ag(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Returns a Firebase Installations auth token, identifying the current
 * Firebase Installation.
 * @param installations - The `Installations` instance.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */async function a_(e,t=!1){await aE(e);// At this point we either have a Registered Installation in the DB, or we've
// already thrown an error.
let r=await ag(e,t);return r.token}async function aE(e){let{registrationPromise:t}=await ac(e);t&&await t}function aS(e){return oZ.create("missing-app-config-values"/* ErrorCode.MISSING_APP_CONFIG_VALUES */,{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="installations";rU(new rl(aP,e=>{let t=e.getProvider("app").getImmediate(),r=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw aS("App Configuration");if(!e.name)throw aS("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw aS(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),n=rB(t,"heartbeat");return{app:t,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},"PUBLIC"/* ComponentType.PUBLIC */)),rU(new rl("installations-internal",e=>{let t=e.getProvider("app").getImmediate(),r=rB(t,aP).getImmediate();return{getId:()=>ax(r),getToken:e=>a_(r,e)}},"PRIVATE"/* ComponentType.PRIVATE */)),rW(oG,oX),rW(oG,oX,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Type constant for Firebase Analytics.
 */const ak="analytics",aI="https://www.googletagmanager.com/gtag/js",aO=new ry("@firebase/analytics"),aC=new t8("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Verifies and creates a TrustedScriptURL.
 */function aT(e){if(!e.startsWith(aI)){let t=aC.create("invalid-gtag-resource"/* AnalyticsError.INVALID_GTAG_RESOURCE */,{gtagURL:e});return aO.warn(t.message),""}return e}/**
 * Makeshift polyfill for Promise.allSettled(). Resolves when all promises
 * have either resolved or rejected.
 *
 * @param promises Array of promises to wait for.
 */function aR(e){return Promise.all(e.map(e=>e.catch(e=>e)))}/**
 * Wrapped gtag logic when gtag is called with 'config' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param measurementId GA Measurement ID to set config for.
 * @param gtagParams Gtag config params to set.
 */async function aA(e,t,r,n,i,o){// If config is already fetched, we know the appId and can use it to look up what FID promise we
/// are waiting for, and wait only on that one.
let a=n[i];try{if(a)await t[a];else{// If config is not fetched yet, wait for all configs (we don't know which one we need) and
// find the appId (if any) corresponding to this measurementId. If there is one, wait on
// that appId's initialization promise. If there is none, promise resolves and gtag
// call goes through.
let e=await aR(r),n=e.find(e=>e.measurementId===i);n&&await t[n.appId]}}catch(e){aO.error(e)}e("config"/* GtagCommand.CONFIG */,i,o)}/**
 * Wrapped gtag logic when gtag is called with 'event' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementId GA Measurement ID to log event to.
 * @param gtagParams Params to log with this event.
 */async function aN(e,t,r,n,i){try{let o=[];// If there's a 'send_to' param, check if any ID specified matches
// an initializeIds() promise we are waiting for.
if(i&&i.send_to){let e=i.send_to;// Make it an array if is isn't, so it can be dealt with the same way.
Array.isArray(e)||(e=[e]);// Checking 'send_to' fields requires having all measurement ID results back from
// the dynamic config fetch.
let n=await aR(r);for(let r of e){// Any fetched dynamic measurement ID that matches this 'send_to' ID
let e=n.find(e=>e.measurementId===r),i=e&&t[e.appId];if(i)o.push(i);else{// Found an item in 'send_to' that is not associated
// directly with an FID, possibly a group.  Empty this array,
// exit the loop early, and let it get populated below.
o=[];break}}}0===o.length&&(o=Object.values(t)),// Run core gtag function with args after all relevant initialization
// promises have been resolved.
await Promise.all(o),// Workaround for http://b/141370449 - third argument cannot be undefined.
e("event"/* GtagCommand.EVENT */,n,i||{})}catch(e){aO.error(e)}}const aM=new /**
 * Stubbable retry data storage class.
 */class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};/**
 * Fetches dynamic config from backend.
 * @param app Firebase app to fetch config for.
 */async function aj(e){var t;let{appId:r,apiKey:n}=e,i={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":n})},o="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",r),a=await fetch(o,i);if(200!==a.status&&304!==a.status){let e="";try{// Try to get any error message text from server response.
let r=await a.json();(null===(t=r.error)||void 0===t?void 0:t.message)&&(e=r.error.message)}catch(e){}throw aC.create("config-fetch-failed"/* AnalyticsError.CONFIG_FETCH_FAILED */,{httpStatus:a.status,responseMessage:e})}return a.json()}/**
 * Fetches dynamic config from backend, retrying if failed.
 * @param app Firebase app to fetch config for.
 */async function aD(e,t=aM,r){let{appId:n,apiKey:i,measurementId:o}=e.options;if(!n)throw aC.create("no-app-id"/* AnalyticsError.NO_APP_ID */);if(!i){if(o)return{measurementId:o,appId:n};throw aC.create("no-api-key"/* AnalyticsError.NO_API_KEY */)}let a=t.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new aF;return setTimeout(async()=>{// Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
s.abort()},void 0!==r?r:6e4),aL({appId:n,apiKey:i,measurementId:o},a,s,t)}/**
 * Runs one retry attempt.
 * @param appFields Necessary app config fields.
 * @param throttleMetadata Ongoing metadata to determine throttling times.
 * @param signal Abort signal.
 */async function aL(e,{throttleEndTimeMillis:t,backoffCount:r},n,i=aM// for testing
){var o;let{appId:a,measurementId:s}=e;// Starts with a (potentially zero) timeout to support resumption from stored state.
// Ensures the throttle end time is honored if the last attempt timed out.
// Note the SDK will never make a request if the fetch timeout expires at this point.
try{await new Promise((e,r)=>{// Derives backoff from given end time, normalizing negative numbers to zero.
let i=Math.max(t-Date.now(),0),o=setTimeout(e,i);// Adds listener, rather than sets onabort, because signal is a shared object.
n.addEventListener(()=>{clearTimeout(o),// If the request completes before this timeout, the rejection has no effect.
r(aC.create("fetch-throttle"/* AnalyticsError.FETCH_THROTTLE */,{throttleEndTimeMillis:t}))})})}catch(e){if(s)return aO.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:a,measurementId:s};throw e}try{let t=await aj(e);return(// Note the SDK only clears throttle state if response is success or non-retriable.
i.deleteThrottleMetadata(a),t)}catch(u){if(!/**
 * Returns true if the {@link Error} indicates a fetch request may succeed later.
 */function(e){if(!(e instanceof t5)||!e.customData)return!1;// Uses string index defined by ErrorData, which FirebaseError implements.
let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(u)){if(i.deleteThrottleMetadata(a),s)return aO.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==u?void 0:u.message}]`),{appId:a,measurementId:s};throw u}let t=503===Number(null===(o=null==u?void 0:u.customData)||void 0===o?void 0:o.httpStatus)?ra(r,i.intervalMillis,30):ra(r,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:r+1};return(// Persists state.
i.setThrottleMetadata(a,l),aO.debug(`Calling attemptFetch again in ${t} millis`),aL(e,l,n,i))}}/**
 * Shims a minimal AbortSignal (copied from Remote Config).
 *
 * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
 * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
 * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
 * swapped out if/when we do.
 */class aF{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * Logs an analytics event through the Firebase SDK.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param eventName Google Analytics event name, choose from standard list or use a custom string.
 * @param eventParams Analytics event parameters.
 */async function aU(e,t,r,n,i){if(i&&i.global){e("event"/* GtagCommand.EVENT */,r,n);return}{let i=await t,o=Object.assign(Object.assign({},n),{send_to:i});e("event"/* GtagCommand.EVENT */,r,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aB(){if(!t4())return aO.warn(aC.create("indexeddb-unavailable"/* AnalyticsError.INDEXEDDB_UNAVAILABLE */,{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await t6()}catch(e){return aO.warn(aC.create("indexeddb-unavailable"/* AnalyticsError.INDEXEDDB_UNAVAILABLE */,{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}/**
 * Initialize the analytics instance in gtag.js by calling config command with fid.
 *
 * NOTE: We combine analytics initialization and setting fid together because we want fid to be
 * part of the `page_view` event that's sent during the initialization
 * @param app Firebase app
 * @param gtagCore The gtag function that's not wrapped.
 * @param dynamicConfigPromisesList Array of all dynamic config promises.
 * @param measurementIdToAppId Maps measurementID to appID.
 * @param installations _FirebaseInstallationsInternal instance.
 *
 * @returns Measurement ID.
 */async function az(e,t,r,n,a,s,l){var u;let c=aD(e);// Once fetched, map measurementIds to appId, for ease of lookup in wrapped gtag function.
c.then(t=>{r[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&aO.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>aO.error(e)),// Add to list to track state of all dynamic config promises.
t.push(c);let d=aB().then(e=>e?n.getId():void 0),[f,p]=await Promise.all([c,d]);!/**
 * Returns the script tag in the DOM matching both the gtag url pattern
 * and the provided data layer name.
 */function(e){let t=window.document.getElementsByTagName("script");for(let r of Object.values(t))if(r.src&&r.src.includes(aI)&&r.src.includes(e))return r;return null}(s)&&/**
 * Inserts gtag script tag into the page to asynchronously download gtag.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */function(e,t){let r;let n=(window.trustedTypes&&(r=window.trustedTypes.createPolicy("firebase-js-sdk-policy",{createScriptURL:aT})),r),i=document.createElement("script"),o=`${aI}?l=${e}&id=${t}`;i.src=n?null==n?void 0:n.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}(s,f.measurementId),o&&(a("consent"/* GtagCommand.CONSENT */,"default",o),o=void 0),// This command initializes gtag.js and only needs to be called once for the entire web app,
// but since it is idempotent, we can call it multiple times.
// We keep it together with other initialization logic for better code structure.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
a("js",new Date);// User config added first. We don't want users to accidentally overwrite
// base Firebase config properties.
let h=null!==(u=null==l?void 0:l.config)&&void 0!==u?u:{};return(// guard against developers accidentally setting properties with prefix `firebase_`
h.origin="firebase",h.update=!0,null!=p&&(h.firebase_id=p),// It should be the first config command called on this GA-ID
// Initialize this GA-ID and set FID on it using the gtag config API.
// Note: This will trigger a page_view event unless 'send_page_view' is set to false in
// `configProperties`.
a("config"/* GtagCommand.CONFIG */,f.measurementId,h),i&&(a("set"/* GtagCommand.SET */,i),i=void 0),f.measurementId)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Analytics Service class.
 */class a${constructor(e){this.app=e}_delete(){return delete aV[this.app.options.appId],Promise.resolve()}}/**
 * Maps appId to full initialization promise. Wrapped gtag calls must wait on
 * all or some of these, depending on the call's `send_to` param and the status
 * of the dynamic config fetches (see below).
 */let aV={},aH=[];/**
 * Maps fetched measurementIds to appId. Populated when the app's dynamic config
 * fetch completes. If already populated, gtag config calls can use this to
 * selectively wait for only this app's initialization promise (FID) instead of all
 * initialization promises.
 */const aq={};/**
 * Name for window global data layer array used by GA: defaults to 'dataLayer'.
 */let aW="dataLayer",aK=!1;const aJ="@firebase/analytics",aG="0.10.0";rU(new rl(ak,(e,{options:t})=>{// getImmediate for FirebaseApp will always succeed
let r=e.getProvider("app").getImmediate(),n=e.getProvider("installations-internal").getImmediate();return(/**
 * Analytics instance factory.
 * @internal
 */function(e,t,r){!/**
 * Returns true if no environment mismatch is found.
 * If environment mismatches are found, throws an INVALID_ANALYTICS_CONTEXT
 * error that also lists details for each mismatch found.
 */function(){let e=[];if(t3()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),r=aC.create("invalid-analytics-context"/* AnalyticsError.INVALID_ANALYTICS_CONTEXT */,{errorInfo:t});aO.warn(r.message)}}();let n=e.options.appId;if(!n)throw aC.create("no-app-id"/* AnalyticsError.NO_APP_ID */);if(!e.options.apiKey){if(e.options.measurementId)aO.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw aC.create("no-api-key"/* AnalyticsError.NO_API_KEY */)}if(null!=aV[n])throw aC.create("already-exists"/* AnalyticsError.ALREADY_EXISTS */,{id:n});if(!aK){var i,o;let e,t;e=[],Array.isArray(window[aW])?e=window[aW]:window[aW]=e;let{wrappedGtag:r,gtagCore:n}=(i="gtag",t=function(...e){// Must push IArguments object, not an array.
window[aW].push(arguments)},window[i]&&"function"==typeof window[i]&&(t=window[i]),window[i]=(o=t,/**
     * Wrapper around gtag that ensures FID is sent with gtag calls.
     * @param command Gtag command type.
     * @param idOrNameOrParams Measurement ID if command is EVENT/CONFIG, params if command is SET.
     * @param gtagParams Params if event is EVENT/CONFIG.
     */async function(e,...t){try{// If event, check that relevant initialization promises have completed.
if("event"/* GtagCommand.EVENT */===e){let[e,r]=t;// If EVENT, second arg must be measurementId.
await aN(o,aV,aH,e,r)}else if("config"/* GtagCommand.CONFIG */===e){let[e,r]=t;// If CONFIG, second arg must be measurementId.
await aA(o,aV,aH,aq,e,r)}else if("consent"/* GtagCommand.CONSENT */===e){let[e]=t;o("consent"/* GtagCommand.CONSENT */,"update",e)}else if("get"/* GtagCommand.GET */===e){let[e,r,n]=t;o("get"/* GtagCommand.GET */,e,r,n)}else if("set"/* GtagCommand.SET */===e){let[e]=t;// If SET, second arg must be params.
o("set"/* GtagCommand.SET */,e)}else o(e,...t)}catch(e){aO.error(e)}}),{gtagCore:t,wrappedGtag:window[i]});s=r,a=n,aK=!0}// Async but non-blocking.
// This map reflects the completion state of all promises for each appId.
aV[n]=az(e,aH,aq,t,a,aW,r);let l=new a$(e);return l}(r,n,t))},"PUBLIC"/* ComponentType.PUBLIC */)),rU(new rl("analytics-internal",function(e){try{let t=e.getProvider(ak).getImmediate();return{logEvent:(e,r,n)=>{var i;return i=t,void(i=rs(i),aU(s,aV[i.app.options.appId],e,r,n).catch(e=>aO.error(e)))}}}catch(e){throw aC.create("interop-component-reg-failed"/* AnalyticsError.INTEROP_COMPONENT_REG_FAILED */,{reason:e})}},"PRIVATE"/* ComponentType.PRIVATE */)),rW(aJ,aG),rW(aJ,aG,"esm2017");// Initialize Firebase
const aX=rH({apiKey:"AIzaSyBejb66ATGlHntdOrzU08kQS3cBRYbmeVg,",authDomain:"netflix-app-78fec.firebaseapp.com,",projectId:"netflix-app-78fec,",storageBucket:"netflix-app-78fec.appspot.com,",messagingSenderId:"782262074348,",appId:"1=782262074348=web=f6c1cfe46d82ca1c05dec9,",measurementId:"G-4C8YTK7MSL,"});!/* eslint-disable @typescript-eslint/no-explicit-any *//**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */function(e=rq()){e=rs(e);// Dependencies
let t=rB(e,ak);t.isInitialized()?t.getImmediate():/**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */function(e,t={}){// Dependencies
let r=rB(e,ak);if(r.isInitialized()){let e=r.getImmediate();if(t9(t,r.getOptions()))return e;throw aC.create("already-initialized"/* AnalyticsError.ALREADY_INITIALIZED */)}let n=r.initialize({options:t});return n}(e)}(aX);const aQ=/**
 * Returns the Auth instance associated with the provided {@link @firebase/app#FirebaseApp}.
 * If no instance exists, initializes an Auth instance with platform-specific default dependencies.
 *
 * @param app - The Firebase App.
 *
 * @public
 */function(e=rq()){let t=rB(e,"auth");if(t.isInitialized())return t.getImmediate();let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * Initializes an {@link Auth} instance with fine-grained control over
 * {@link Dependencies}.
 *
 * @remarks
 *
 * This function allows more control over the {@link Auth} instance than
 * {@link getAuth}. `getAuth` uses platform-specific defaults to supply
 * the {@link Dependencies}. In general, `getAuth` is the easiest way to
 * initialize Auth and works for most use cases. Use `initializeAuth` if you
 * need control over which persistence layer is used, or to minimize bundle
 * size if you're not using either `signInWithPopup` or `signInWithRedirect`.
 *
 * For example, if your app only uses anonymous accounts and you only want
 * accounts saved for the current session, initialize `Auth` with:
 *
 * ```js
 * const auth = initializeAuth(app, {
 *   persistence: browserSessionPersistence,
 *   popupRedirectResolver: undefined,
 * });
 * ```
 *
 * @public
 */function(e,t){let r=rB(e,"auth");if(r.isInitialized()){let e=r.getImmediate(),n=r.getOptions();if(t9(n,null!=t?t:{}))return e;r7(e,"already-initialized"/* AuthErrorCode.ALREADY_INITIALIZED */)}let n=r.initialize({options:t});return n}(e,{popupRedirectResolver:oS,persistence:[i0,iL,iF]}),n=t0("authTokenSyncURL");if(n){let e=oj(n);rs(r).beforeAuthStateChanged(e,()=>e(r.currentUser)),rs(r).onIdTokenChanged(t=>e(t),void 0,void 0)}let i=tY("auth");return i&&/**
 * Changes the {@link Auth} instance to communicate with the Firebase Auth Emulator, instead of production
 * Firebase Auth services.
 *
 * @remarks
 * This must be called synchronously immediately following the first call to
 * {@link initializeAuth}.  Do not use with production credentials as emulator
 * traffic is not encrypted.
 *
 *
 * @example
 * ```javascript
 * connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
 * ```
 *
 * @param auth - The {@link Auth} instance.
 * @param url - The URL at which the emulator is running (eg, 'http://localhost:9099').
 * @param options - Optional. `options.disableWarnings` defaults to `false`. Set it to
 * `true` to disable the warning banner attached to the DOM.
 *
 * @public
 */function(e,t,r){let n=rs(e);nt(n._canInitEmulator,n,"emulator-config-failed"/* AuthErrorCode.EMULATOR_CONFIG_FAILED */),nt(/^https?:\/\//.test(t),n,"invalid-emulator-scheme"/* AuthErrorCode.INVALID_EMULATOR_SCHEME */);let i=!!(null==r?void 0:r.disableWarnings),o=n7(t),{host:a,port:s}=function(e){let t=n7(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);// Strip out "username:password@".
if(i){let e=i[1];return{host:e,port:n9(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:n9(t)}}}(t),l=null===s?"":`:${s}`;// Always replace path with "/" (even if input url had no path at all, or had a different one).
n.config.emulator={url:`${o}//${a}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:s,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(r,`http://${i}`),r}();function aY(e,t){return function(){return e.apply(t,arguments)}}// utils is a library of generic helper functions non-specific to axios
const{toString:aZ}=Object.prototype,{getPrototypeOf:a0}=Object,a1=(E=Object.create(null),e=>{let t=aZ.call(e);return E[t]||(E[t]=t.slice(8,-1).toLowerCase())}),a2=e=>(e=e.toLowerCase(),t=>a1(t)===e),a3=e=>t=>typeof t===e,{isArray:a4}=Array,a6=a3("undefined"),a5=a2("ArrayBuffer"),a8=a3("string"),a7=a3("function"),a9=a3("number"),se=e=>null!==e&&"object"==typeof e,st=e=>{if("object"!==a1(e))return!1;let t=a0(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},sr=a2("Date"),sn=a2("File"),si=a2("Blob"),so=a2("FileList"),sa=a2("URLSearchParams");/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */function ss(e,t,{allOwnKeys:r=!1}={}){let n,i;// Don't bother if no value provided
if(null!=e){if("object"!=typeof e&&/*eslint no-param-reassign:0*/(e=[e]),a4(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{let i;// Iterate over object keys
let o=r?Object.getOwnPropertyNames(e):Object.keys(e),a=o.length;for(n=0;n<a;n++)i=o[n],t.call(null,e[i],i,e)}}}function sl(e,t){let r;t=t.toLowerCase();let n=Object.keys(e),i=n.length;for(;i-- >0;)if(t===(r=n[i]).toLowerCase())return r;return null}const su=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:D,sc=e=>!a6(e)&&e!==su,sd=(S="undefined"!=typeof Uint8Array&&a0(Uint8Array),e=>S&&e instanceof S),sf=a2("HTMLFormElement"),sp=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),sh=a2("RegExp"),sm=(e,t)=>{let r=Object.getOwnPropertyDescriptors(e),n={};ss(r,(r,i)=>{let o;!1!==(o=t(r,i,e))&&(n[i]=o||r)}),Object.defineProperties(e,n)},sg="abcdefghijklmnopqrstuvwxyz",sy="0123456789",sv={DIGIT:sy,ALPHA:sg,ALPHA_DIGIT:sg+sg.toUpperCase()+sy},sb=a2("AsyncFunction");var sw={isArray:a4,isArrayBuffer:a5,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(e){return null!==e&&!a6(e)&&null!==e.constructor&&!a6(e.constructor)&&a7(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||a7(e.append)&&("formdata"===(t=a1(e))||// detect form-data instance
"object"===t&&a7(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&a5(e.buffer)},isString:a8,isNumber:a9,isBoolean:e=>!0===e||!1===e,isObject:se,isPlainObject:st,isUndefined:a6,isDate:sr,isFile:sn,isBlob:si,isRegExp:sh,isFunction:a7,isStream:e=>se(e)&&a7(e.pipe),isURLSearchParams:sa,isTypedArray:sd,isFileList:so,forEach:ss,merge:/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */function e(){let{caseless:t}=sc(this)&&this||{},r={},n=(n,i)=>{let o=t&&sl(r,i)||i;st(r[o])&&st(n)?r[o]=e(r[o],n):st(n)?r[o]=e({},n):a4(n)?r[o]=n.slice():r[o]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&ss(arguments[e],n);return r},extend:(e,t,r,{allOwnKeys:n}={})=>(ss(t,(t,n)=>{r&&a7(t)?e[n]=aY(t,r):e[n]=t},{allOwnKeys:n}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let i,o,a;let s={};// eslint-disable-next-line no-eq-null,eqeqeq
if(t=t||{},null==e)return t;do{for(o=(i=Object.getOwnPropertyNames(e)).length;o-- >0;)a=i[o],(!n||n(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=!1!==r&&a0(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype)return t},kindOf:a1,kindOfTest:a2,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;let n=e.indexOf(t,r);return -1!==n&&n===r},toArray:e=>{if(!e)return null;if(a4(e))return e;let t=e.length;if(!a9(t))return null;let r=Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{let r;let n=e&&e[Symbol.iterator],i=n.call(e);for(;(r=i.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let r;let n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:sf,hasOwnProperty:sp,hasOwnProp:sp,reduceDescriptors:sm,freezeMethods:e=>{sm(e,(t,r)=>{// skip restricted props in strict mode
if(a7(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;let n=e[r];if(a7(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:(e,t)=>{let r={};return(e=>{e.forEach(e=>{r[e]=!0})})(a4(e)?e:String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>Number.isFinite(e=+e)?e:t,findKey:sl,global:su,isContextDefined:sc,ALPHABET:sv,generateString:(e=16,t=sv.ALPHA_DIGIT)=>{let r="",{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(e){return!!(e&&a7(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{let t=Array(10),r=(e,n)=>{if(se(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;let i=a4(e)?[]:{};return ss(e,(e,t)=>{let o=r(e,n+1);a6(o)||(i[t]=o)}),t[n]=void 0,i}}return e};return r(e,0)},isAsyncFn:sb,isThenable:e=>e&&(se(e)||a7(e))&&a7(e.then)&&a7(e.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function sx(e,t,r,n,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}sw.inherits(sx,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:sw.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const s_=sx.prototype,sE={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{sE[e]={value:e}}),Object.defineProperties(sx,sE),Object.defineProperty(s_,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
sx.from=(e,t,r,n,i,o)=>{let a=Object.create(s_);return sw.toFlatObject(e,a,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),sx.call(a,e.message,t,r,n,i),a.cause=e,a.name=e.name,o&&Object.assign(a,o),a};var sS=U("6ZWSX").Buffer;/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function sP(e){return sw.isPlainObject(e)||sw.isArray(e)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function sk(e){return sw.endsWith(e,"[]")?e.slice(0,-2):e}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function sI(e,t,r){return e?e.concat(t).map(function(e,t){return(// eslint-disable-next-line no-param-reassign
e=sk(e),!r&&t?"["+e+"]":e)}).join(r?".":""):t}const sO=sw.toFlatObject(sw,{},null,function(e){return/^is[A-Z]/.test(e)});var sC=/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **//**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */function(e,t,r){if(!sw.isObject(e))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
t=t||new FormData,// eslint-disable-next-line no-param-reassign
r=sw.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){// eslint-disable-next-line no-eq-null,eqeqeq
return!sw.isUndefined(t[e])});let n=r.metaTokens,i=r.visitor||c,o=r.dots,a=r.indexes,s=r.Blob||"undefined"!=typeof Blob&&Blob,l=s&&sw.isSpecCompliantForm(t);if(!sw.isFunction(i))throw TypeError("visitor must be a function");function u(e){if(null===e)return"";if(sw.isDate(e))return e.toISOString();if(!l&&sw.isBlob(e))throw new sx("Blob is not supported. Use a Buffer instead.");return sw.isArrayBuffer(e)||sw.isTypedArray(e)?l&&"function"==typeof Blob?new Blob([e]):sS.from(e):e}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function c(e,r,i){let s=e;if(e&&!i&&"object"==typeof e){if(sw.endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=n?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
e=JSON.stringify(e);else{var l;if(sw.isArray(e)&&(l=e,sw.isArray(l)&&!l.some(sP))||(sw.isFileList(e)||sw.endsWith(r,"[]"))&&(s=sw.toArray(e)))return(// eslint-disable-next-line no-param-reassign
r=sk(r),s.forEach(function(e,n){sw.isUndefined(e)||null===e||t.append(!0===a?sI([r],n,o):null===a?r:r+"[]",u(e))}),!1)}}return!!sP(e)||(t.append(sI(i,r,o),u(e)),!1)}let d=[],f=Object.assign(sO,{defaultVisitor:c,convertValue:u,isVisitable:sP});if(!sw.isObject(e))throw TypeError("data must be an object");return!function e(r,n){if(!sw.isUndefined(r)){if(-1!==d.indexOf(r))throw Error("Circular reference detected in "+n.join("."));d.push(r),sw.forEach(r,function(r,o){let a=!(sw.isUndefined(r)||null===r)&&i.call(t,r,sw.isString(o)?o.trim():o,n,f);!0===a&&e(r,n?n.concat(o):[o])}),d.pop()}}(e),t};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function sT(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function sR(e,t){this._pairs=[],e&&sC(e,this,t)}const sA=sR.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function sN(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function sM(e,t,r){let n;/*eslint no-param-reassign:0*/if(!t)return e;let i=r&&r.encode||sN,o=r&&r.serialize;if(n=o?o(t,r):sw.isURLSearchParams(t)?t.toString():new sR(t,r).toString(i)){let t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e}sA.append=function(e,t){this._pairs.push([e,t])},sA.toString=function(e){let t=e?function(t){return e.call(this,t,sT)}:sT;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};var sj=class{constructor(){this.handlers=[]}/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */eject(e){this.handlers[e]&&(this.handlers[e]=null)}/**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */clear(){this.handlers&&(this.handlers=[])}/**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */forEach(e){sw.forEach(this.handlers,function(t){null!==t&&e(t)})}},sD={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},sL="undefined"!=typeof URLSearchParams?URLSearchParams:sR,sF="undefined"!=typeof FormData?FormData:null,sU="undefined"!=typeof Blob?Blob:null,sB={};u(sB,"hasBrowserEnv",()=>sz),u(sB,"hasStandardBrowserEnv",()=>s$),u(sB,"hasStandardBrowserWebWorkerEnv",()=>sV);const sz="undefined"!=typeof window&&"undefined"!=typeof document,s$=(P="undefined"!=typeof navigator&&navigator.product,sz&&0>["ReactNative","NativeScript","NS"].indexOf(P)),sV="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var sH={...sB,isBrowser:!0,classes:{URLSearchParams:sL,FormData:sF,Blob:sU},protocols:["http","https","file","blob","url","data"]},sq=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(e){if(sw.isFormData(e)&&sw.isFunction(e.entries)){let t={};return sw.forEachEntry(e,(e,r)=>{!function e(t,r,n,i){let o=t[i++],a=Number.isFinite(+o),s=i>=t.length;if(o=!o&&sw.isArray(n)?n.length:o,s)return sw.hasOwnProp(n,o)?n[o]=[n[o],r]:n[o]=r,!a;n[o]&&sw.isObject(n[o])||(n[o]=[]);let l=e(t,r,n[o],i);return l&&sw.isArray(n[o])&&(n[o]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(e){let t,r;let n={},i=Object.keys(e),o=i.length;for(t=0;t<o;t++)n[r=i[t]]=e[r];return n}(n[o])),!a}(sw.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0]),r,t,0)}),t}return null};const sW={transitional:sD,adapter:["xhr","http"],transformRequest:[function(e,t){let r;let n=t.getContentType()||"",i=n.indexOf("application/json")>-1,o=sw.isObject(e);o&&sw.isHTMLForm(e)&&(e=new FormData(e));let a=sw.isFormData(e);if(a)return i&&i?JSON.stringify(sq(e)):e;if(sw.isArrayBuffer(e)||sw.isBuffer(e)||sw.isStream(e)||sw.isFile(e)||sw.isBlob(e))return e;if(sw.isArrayBufferView(e))return e.buffer;if(sw.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1){var s,l;return(s=e,l=this.formSerializer,sC(s,new sH.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return sH.isNode&&sw.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},l))).toString()}if((r=sw.isFileList(e))||n.indexOf("multipart/form-data")>-1){let t=this.env&&this.env.FormData;return sC(r?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||i?(t.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(e,t,r){if(sw.isString(e))try{return(0,JSON.parse)(e),sw.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){let t=this.transitional||sW.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&sw.isString(e)&&(r&&!this.responseType||n)){let r=t&&t.silentJSONParsing;try{return JSON.parse(e)}catch(e){if(!r&&n){if("SyntaxError"===e.name)throw sx.from(e,sx.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:sH.classes.FormData,Blob:sH.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};sw.forEach(["delete","get","head","post","put","patch"],e=>{sW.headers[e]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const sK=sw.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */sJ=e=>{let t,r,n;let i={};return e&&e.split("\n").forEach(function(e){n=e.indexOf(":"),t=e.substring(0,n).trim().toLowerCase(),r=e.substring(n+1).trim(),!t||i[t]&&sK[t]||("set-cookie"===t?i[t]?i[t].push(r):i[t]=[r]:i[t]=i[t]?i[t]+", "+r:r)}),i};const sG=Symbol("internals");function sX(e){return e&&String(e).trim().toLowerCase()}function sQ(e){return!1===e||null==e?e:sw.isArray(e)?e.map(sQ):String(e)}const sY=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function sZ(e,t,r,n,i){if(sw.isFunction(n))return n.call(this,t,r);if(i&&(t=r),sw.isString(t)){if(sw.isString(n))return -1!==t.indexOf(n);if(sw.isRegExp(n))return n.test(t)}}class s0{constructor(e){e&&this.set(e)}set(e,t,r){let n=this;function i(e,t,r){let i=sX(t);if(!i)throw Error("header name must be a non-empty string");let o=sw.findKey(n,i);o&&void 0!==n[o]&&!0!==r&&(void 0!==r||!1===n[o])||(n[o||t]=sQ(e))}let o=(e,t)=>sw.forEach(e,(e,r)=>i(e,r,t));return sw.isPlainObject(e)||e instanceof this.constructor?o(e,t):sw.isString(e)&&(e=e.trim())&&!sY(e)?o(sJ(e),t):null!=e&&i(t,e,r),this}get(e,t){if(e=sX(e)){let r=sw.findKey(this,e);if(r){let e=this[r];if(!t)return e;if(!0===t)return function(e){let t;let r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;t=n.exec(e);)r[t[1]]=t[2];return r}(e);if(sw.isFunction(t))return t.call(this,e,r);if(sw.isRegExp(t))return t.exec(e);throw TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=sX(e)){let r=sw.findKey(this,e);return!!(r&&void 0!==this[r]&&(!t||sZ(this,this[r],r,t)))}return!1}delete(e,t){let r=this,n=!1;function i(e){if(e=sX(e)){let i=sw.findKey(r,e);i&&(!t||sZ(r,r[i],i,t))&&(delete r[i],n=!0)}}return sw.isArray(e)?e.forEach(i):i(e),n}clear(e){let t=Object.keys(this),r=t.length,n=!1;for(;r--;){let i=t[r];(!e||sZ(this,this[i],i,e,!0))&&(delete this[i],n=!0)}return n}normalize(e){let t=this,r={};return sw.forEach(this,(n,i)=>{let o=sw.findKey(r,i);if(o){t[o]=sQ(n),delete t[i];return}let a=e?i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r):String(i).trim();a!==i&&delete t[i],t[a]=sQ(n),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return sw.forEach(this,(r,n)=>{null!=r&&!1!==r&&(t[n]=e&&sw.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){let t=this[sG]=this[sG]={accessors:{}},r=t.accessors,n=this.prototype;function i(e){let t=sX(e);r[t]||(!function(e,t){let r=sw.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(e,r,i){return this[n].call(this,t,e,r,i)},configurable:!0})})}(n,e),r[t]=!0)}return sw.isArray(e)?e.forEach(i):i(e),this}}function s1(e,t){let r=this||sW,n=t||r,i=s0.from(n.headers),o=n.data;return sw.forEach(e,function(e){o=e.call(r,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function s2(e){return!!(e&&e.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function s3(e,t,r){sx.call(this,null==e?"canceled":e,sx.ERR_CANCELED,t,r),this.name="CanceledError"}s0.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),sw.reduceDescriptors(s0.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);// map `set` => `Set`
return{get:()=>e,set(e){this[r]=e}}}),sw.freezeMethods(s0),sw.inherits(s3,sx,{__CANCEL__:!0});var s4=sH.hasStandardBrowserEnv?{write(e,t,r,n,i,o){let a=[e+"="+encodeURIComponent(t)];sw.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),sw.isString(n)&&a.push("path="+n),sw.isString(i)&&a.push("domain="+i),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read(e){let t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function s6(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e:t}var s5=sH.hasStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let e;let t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");/**
    * Parse a URL to discover its components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function n(e){let n=e;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return t&&(// IE needs attribute set twice to normalize properties
r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return e=n(window.location.href),function(t){let r=sw.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},s8=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(e,t){let r;e=e||10;let n=Array(e),i=Array(e),o=0,a=0;return t=void 0!==t?t:1e3,function(s){let l=Date.now(),u=i[a];r||(r=l),n[o]=s,i[o]=l;let c=a,d=0;for(;c!==o;)d+=n[c++],c%=e;if((o=(o+1)%e)===a&&(a=(a+1)%e),l-r<t)return;let f=u&&l-u;return f?Math.round(1e3*d/f):void 0}};function s7(e,t){let r=0,n=s8(50,250);return i=>{let o=i.loaded,a=i.lengthComputable?i.total:void 0,s=o-r,l=n(s);r=o;let u={loaded:o,total:a,progress:a?o/a:void 0,bytes:s,rate:l||void 0,estimated:l&&a&&o<=a?(a-o)/l:void 0,event:i};u[t?"download":"upload"]=!0,e(u)}}const s9="undefined"!=typeof XMLHttpRequest;var le=s9&&function(e){return new Promise(function(t,r){let n,i,o=e.data,a=s0.from(e.headers).normalize(),{responseType:s,withXSRFToken:l}=e;function u(){e.cancelToken&&e.cancelToken.unsubscribe(n),e.signal&&e.signal.removeEventListener("abort",n)}if(sw.isFormData(o)){if(sH.hasStandardBrowserEnv||sH.hasStandardBrowserWebWorkerEnv)a.setContentType(!1);// Let the browser set it
else if(!1!==(i=a.getContentType())){// fix semicolon duplication issue for ReactNative FormData implementation
let[e,...t]=i?i.split(";").map(e=>e.trim()).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}}let c=new XMLHttpRequest;// HTTP basic authentication
if(e.auth){let t=e.auth.username||"",r=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.set("Authorization","Basic "+btoa(t+":"+r))}let d=s6(e.baseURL,e.url);function f(){if(!c)return;// Prepare the response
let n=s0.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),i=s&&"text"!==s&&"json"!==s?c.response:c.responseText,o={data:i,status:c.status,statusText:c.statusText,headers:n,config:e,request:c};!function(e,t,r){let n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new sx("Request failed with status code "+r.status,[sx.ERR_BAD_REQUEST,sx.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}(function(e){t(e),u()},function(e){r(e),u()},o),// Clean up request
c=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(c.open(e.method.toUpperCase(),sM(d,e.params,e.paramsSerializer),!0),// Set the request timeout in MS
c.timeout=e.timeout,"onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(f)},// Handle browser request cancellation (as opposed to a manual cancellation)
c.onabort=function(){c&&(r(new sx("Request aborted",sx.ECONNABORTED,e,c)),// Clean up request
c=null)},// Handle low level network errors
c.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new sx("Network Error",sx.ERR_NETWORK,e,c)),// Clean up request
c=null},// Handle timeout
c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||sD;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(new sx(t,n.clarifyTimeoutError?sx.ETIMEDOUT:sx.ECONNABORTED,e,c)),// Clean up request
c=null},sH.hasStandardBrowserEnv&&(l&&sw.isFunction(l)&&(l=l(e)),l||!1!==l&&s5(d))){// Add xsrf header
let t=e.xsrfHeaderName&&e.xsrfCookieName&&s4.read(e.xsrfCookieName);t&&a.set(e.xsrfHeaderName,t)}// Remove Content-Type if data is undefined
void 0===o&&a.setContentType(null),"setRequestHeader"in c&&sw.forEach(a.toJSON(),function(e,t){c.setRequestHeader(t,e)}),sw.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",s7(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",s7(e.onUploadProgress)),(e.cancelToken||e.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
n=t=>{c&&(r(!t||t.type?new s3(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(n),e.signal&&(e.signal.aborted?n():e.signal.addEventListener("abort",n)));let p=function(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(d);if(p&&-1===sH.protocols.indexOf(p)){r(new sx("Unsupported protocol "+p+":",sx.ERR_BAD_REQUEST,e));return}// Send the request
c.send(o||null)})};const lt={http:null,xhr:le};sw.forEach(lt,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){// eslint-disable-next-line no-empty
}Object.defineProperty(e,"adapterName",{value:t})}});const lr=e=>`- ${e}`,ln=e=>sw.isFunction(e)||null===e||!1===e;var li={getAdapter:e=>{let t,r;e=sw.isArray(e)?e:[e];let{length:n}=e,i={};for(let o=0;o<n;o++){let n;if(r=t=e[o],!ln(t)&&void 0===(r=lt[(n=String(t)).toLowerCase()]))throw new sx(`Unknown adapter '${n}'`);if(r)break;i[n||"#"+o]=r}if(!r){let e=Object.entries(i).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build"));throw new sx("There is no suitable adapter to dispatch the request "+(n?e.length>1?"since :\n"+e.map(lr).join("\n"):" "+lr(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r},adapters:lt};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function lo(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s3(null,e)}function la(e){lo(e),e.headers=s0.from(e.headers),// Transform request data
e.data=s1.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);let t=li.getAdapter(e.adapter||sW.adapter);return t(e).then(function(t){return lo(e),// Transform response data
t.data=s1.call(e,e.transformResponse,t),t.headers=s0.from(t.headers),t},function(t){return!s2(t)&&(lo(e),t&&t.response&&(t.response.data=s1.call(e,e.transformResponse,t.response),t.response.headers=s0.from(t.response.headers))),Promise.reject(t)})}const ls=e=>e instanceof s0?e.toJSON():e;function ll(e,t){// eslint-disable-next-line no-param-reassign
t=t||{};let r={};function n(e,t,r){return sw.isPlainObject(e)&&sw.isPlainObject(t)?sw.merge.call({caseless:r},e,t):sw.isPlainObject(t)?sw.merge({},t):sw.isArray(t)?t.slice():t}// eslint-disable-next-line consistent-return
function i(e,t,r){return sw.isUndefined(t)?sw.isUndefined(e)?void 0:n(void 0,e,r):n(e,t,r)}// eslint-disable-next-line consistent-return
function o(e,t){if(!sw.isUndefined(t))return n(void 0,t)}// eslint-disable-next-line consistent-return
function a(e,t){return sw.isUndefined(t)?sw.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}// eslint-disable-next-line consistent-return
function s(r,i,o){return o in t?n(r,i):o in e?n(void 0,r):void 0}let l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(e,t)=>i(ls(e),ls(t),!0)};return sw.forEach(Object.keys(Object.assign({},e,t)),function(n){let o=l[n]||i,a=o(e[n],t[n],n);sw.isUndefined(a)&&o!==s||(r[n]=a)}),r}const lu="1.6.2",lc={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((e,t)=>{lc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ld={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */lc.transitional=function(e,t,r){function n(e,t){return"[Axios v"+lu+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}// eslint-disable-next-line func-names
return(r,i,o)=>{if(!1===e)throw new sx(n(i," has been removed"+(t?" in "+t:"")),sx.ERR_DEPRECATED);return t&&!ld[i]&&(ld[i]=!0,// eslint-disable-next-line no-console
console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,o)}};var lf={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(e,t,r){if("object"!=typeof e)throw new sx("options must be an object",sx.ERR_BAD_OPTION_VALUE);let n=Object.keys(e),i=n.length;for(;i-- >0;){let o=n[i],a=t[o];if(a){let t=e[o],r=void 0===t||a(t,o,e);if(!0!==r)throw new sx("option "+o+" must be "+r,sx.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new sx("Unknown option "+o,sx.ERR_BAD_OPTION)}},validators:lc};const lp=lf.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class lh{constructor(e){this.defaults=e,this.interceptors={request:new sj,response:new sj}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(e,t){let r,n;"string"==typeof e?(t=t||{}).url=e:t=e||{},t=ll(this.defaults,t);let{transitional:i,paramsSerializer:o,headers:a}=t;void 0!==i&&lf.assertOptions(i,{silentJSONParsing:lp.transitional(lp.boolean),forcedJSONParsing:lp.transitional(lp.boolean),clarifyTimeoutError:lp.transitional(lp.boolean)},!1),null!=o&&(sw.isFunction(o)?t.paramsSerializer={serialize:o}:lf.assertOptions(o,{encode:lp.function,serialize:lp.function},!0)),// Set config.method
t.method=(t.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let s=a&&sw.merge(a.common,a[t.method]);a&&sw.forEach(["delete","get","head","post","put","patch","common"],e=>{delete a[e]}),t.headers=s0.concat(s,a);// filter out skipped interceptors
let l=[],u=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(u=u&&e.synchronous,l.unshift(e.fulfilled,e.rejected))});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let d=0;if(!u){let e=[la.bind(this),void 0];for(e.unshift.apply(e,l),e.push.apply(e,c),n=e.length,r=Promise.resolve(t);d<n;)r=r.then(e[d++],e[d++]);return r}n=l.length;let f=t;for(d=0;d<n;){let e=l[d++],t=l[d++];try{f=e(f)}catch(e){t.call(this,e);break}}try{r=la.call(this,f)}catch(e){return Promise.reject(e)}for(d=0,n=c.length;d<n;)r=r.then(c[d++],c[d++]);return r}getUri(e){e=ll(this.defaults,e);let t=s6(e.baseURL,e.url);return sM(t,e.params,e.paramsSerializer)}}sw.forEach(["delete","get","head","options"],function(e){/*eslint func-names:0*/lh.prototype[e]=function(t,r){return this.request(ll(r||{},{method:e,url:t,data:(r||{}).data}))}}),sw.forEach(["post","put","patch"],function(e){/*eslint func-names:0*/function t(t){return function(r,n,i){return this.request(ll(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}lh.prototype[e]=t(),lh.prototype[e+"Form"]=t(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class lm{constructor(e){let t;if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});let r=this;// eslint-disable-next-line func-names
this.promise.then(e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=e=>{let t;// eslint-disable-next-line func-names
let n=new Promise(e=>{r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e,n,i){r.reason||(r.reason=new s3(e,n,i),t(r.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let e;let t=new lm(function(t){e=t});return{token:t,cancel:e}}}const lg={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(lg).forEach(([e,t])=>{lg[t]=e});// Create the default instance to be exported
const ly=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function e(t){let r=new lh(t),n=aY(lh.prototype.request,r);return sw.extend(n,lh.prototype,r,{allOwnKeys:!0}),sw.extend(n,r,null,{allOwnKeys:!0}),// Factory for creating new instances
n.create=function(r){return e(ll(t,r))},n}(sW);// Expose Axios class to allow class inheritance
ly.Axios=lh,// Expose Cancel & CancelToken
ly.CanceledError=s3,ly.CancelToken=lm,ly.isCancel=s2,ly.VERSION=lu,ly.toFormData=sC,// Expose AxiosError class
ly.AxiosError=sx,// alias for CanceledError for backward compatibility
ly.Cancel=ly.CanceledError,// Expose all/spread
ly.all=function(e){return Promise.all(e)},ly.spread=function(e){return function(t){return e.apply(null,t)}},// Expose isAxiosError
ly.isAxiosError=function(e){return sw.isObject(e)&&!0===e.isAxiosError},// Expose mergeConfig
ly.mergeConfig=ll,ly.AxiosHeaders=s0,ly.formToJSON=e=>sq(sw.isHTMLForm(e)?new FormData(e):e),ly.getAdapter=li.getAdapter,ly.HttpStatusCode=lg,ly.default=ly;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const{Axios:lv,AxiosError:lb,CanceledError:lw,isCancel:lx,CancelToken:l_,VERSION:lE,all:lS,Cancel:lP,isAxiosError:lk,spread:lI,toFormData:lO,AxiosHeaders:lC,HttpStatusCode:lT,formToJSON:lR,getAdapter:lA,mergeConfig:lN}=ly,lM="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png",lj="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg",lD={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmQxNzI1MmI2M2MzMzhiMGI4NTEwNjY5MjZmNjk4MSIsInN1YiI6IjYyNWFiNjE2NzRkNmMwMzljMjc2ZWQ1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6aAk3LA7z7c7CMgU5QmlPEKB279kzHh55eQaeVd3JVo"}},lL=async({email:e,password:t})=>await iM(aQ,e,t),lF=async({email:e,password:t})=>await iA(rs(aQ),iy.credential(e,t)).catch(async e=>{throw"auth/password-does-not-meet-requirements"===e.code&&iN(aQ),e}),lU=async()=>await rs(aQ).signOut(),lB=e=>ly.get("https://api.themoviedb.org/3/movie/now_playing",{...lD,signal:e}),lz=e=>ly.get("https://api.themoviedb.org/3/trending/movie/day?language=en-hi",{...lD,signal:e}),l$=e=>ly.get("https://api.themoviedb.org/3/movie/popular",{...lD,signal:e}),lV=e=>ly.get(`https://api.themoviedb.org/3/movie/${e}/videos`,lD);var lH=U("i4CZ2");function lq(e){return(lq="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function lW(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function lK(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?lW(Object(r),!0).forEach(function(t){!function(e,t,r){var n;n=function(e,t){if("object"!==lq(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==lq(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===lq(n)?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):lW(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */function lJ(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}// Inlined version of the `symbol-observable` polyfill
var lG="function"==typeof Symbol&&Symbol.observable||"@@observable",lX=function(){return Math.random().toString(36).substring(7).split("").join(".")},lQ={INIT:"@@redux/INIT"+lX(),REPLACE:"@@redux/REPLACE"+lX(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+lX()}};/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */function lY(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */function lZ(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw Error(lJ(15))},i={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},o=t.map(function(e){return e(i)});return n=lY.apply(void 0,o)(r.dispatch),lK(lK({},r),{},{dispatch:n})}}}/** A function that accepts a potential "extra argument" value to be injected later,
 * and returns an instance of the thunk middleware that uses that value
 */function l0(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(i){return(// The thunk middleware looks for any functions that were passed to `store.dispatch`.
// If this "action" is really a function, call it and return the result.
"function"==typeof i?i(r,n,e):t(i))}}}}var l1=l0();// Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks
l1.withExtraArgument=l0;var tB=U("hPtJY"),l2=(k=function(e,t){return(k=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}k(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),l3=function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},l4=function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e},l6=Object.defineProperty,l5=Object.defineProperties,l8=Object.getOwnPropertyDescriptors,l7=Object.getOwnPropertySymbols,l9=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable,ut=function(e,t,r){return t in e?l6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},ur=function(e,t){for(var r in t||(t={}))l9.call(t,r)&&ut(e,r,t[r]);if(l7)for(var n=0,i=l7(t);n<i.length;n++){var r=i[n];ue.call(t,r)&&ut(e,r,t[r])}return e},un=function(e,t){return l5(e,l8(t))},ui="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?lY:lY.apply(null,arguments)};// src/createAction.ts
function uo(e,t){function r(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];if(t){var i=t.apply(void 0,r);if(!i)throw Error("prepareAction did not return an object");return ur(ur({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(t){return t.type===e},r}"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var ua=/** @class */function(e){function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=e.apply(this,r)||this;return Object.setPrototypeOf(i,t.prototype),i}return l2(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,l4([void 0],e[0].concat(this)))):new(t.bind.apply(t,l4([void 0],e.concat(this))))},t}(Array),us=/** @class */function(e){function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var i=e.apply(this,r)||this;return Object.setPrototypeOf(i,t.prototype),i}return l2(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return e.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,l4([void 0],e[0].concat(this)))):new(t.bind.apply(t,l4([void 0],e.concat(this))))},t}(Array);function ul(e){return(0,lH.isDraftable)(e)?(0,lH.default)(e,function(){}):e}// src/mapBuilders.ts
function uu(e){var t,r={},n=[],i={addCase:function(e,t){var n="string"==typeof e?e:e.type;if(!n)throw Error("`builder.addCase` cannot be called with an empty action type");if(n in r)throw Error("`builder.addCase` cannot be called with two reducers for the same action type");return r[n]=t,i},addMatcher:function(e,t){return n.push({matcher:e,reducer:t}),i},addDefaultCase:function(e){return t=e,i}};return e(i),[r,n,t]}function uc(e){var t,r=e.name;if(!r)throw Error("`name` is a required option for createSlice");var n="function"==typeof e.initialState?e.initialState:ul(e.initialState),i=e.reducers||{},o=Object.keys(i),a={},s={},l={};function u(){var t="function"==typeof e.extraReducers?uu(e.extraReducers):[e.extraReducers],r=t[0],i=t[1],o=void 0===i?[]:i,a=t[2],l=void 0===a?void 0:a,u=ur(ur({},void 0===r?{}:r),s);return function(e,t,r,n){void 0===r&&(r=[]);var i,o="function"==typeof t?uu(t):[t,r,void 0],a=o[0],s=o[1],l=o[2];if("function"==typeof e)i=function(){return ul(e())};else{var u=ul(e);i=function(){return u}}function c(e,t){void 0===e&&(e=i());var r=l4([a[t.type]],s.filter(function(e){return(0,e.matcher)(t)}).map(function(e){return e.reducer}));return 0===r.filter(function(e){return!!e}).length&&(r=[l]),r.reduce(function(e,r){if(r){if((0,lH.isDraft)(e)){var n=r(e,t);return void 0===n?e:n}if((0,lH.isDraftable)(e))return(0,lH.default)(e,function(e){return r(e,t)});var n=r(e,t);if(void 0===n){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}return e},e)}return c.getInitialState=i,c}(n,function(e){for(var t in u)e.addCase(t,u[t]);for(var r=0;r<o.length;r++){var n=o[r];e.addMatcher(n.matcher,n.reducer)}l&&e.addDefaultCase(l)})}return o.forEach(function(e){var t,n,o=i[e],u=r+"/"+e;"reducer"in o?(t=o.reducer,n=o.prepare):t=o,a[e]=t,s[u]=t,l[e]=n?uo(u,n):uo(u)}),{name:r,reducer:function(e,r){return t||(t=u()),t(e,r)},actions:l,caseReducers:a,getInitialState:function(){return t||(t=u()),t.getInitialState()}}}var ud=function(e){void 0===e&&(e=21);for(var t="",r=e;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},uf=["name","message","stack","code"],up=function(e,t){this.payload=e,this.meta=t},uh=function(e,t){this.payload=e,this.meta=t},um=function(e){if("object"==typeof e&&null!==e){for(var t={},r=0;r<uf.length;r++){var n=uf[r];"string"==typeof e[n]&&(t[n]=e[n])}return t}return{message:String(e)}};function ug(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}!function(){function e(e,t,r){var n=uo(e+"/fulfilled",function(e,t,r,n){return{payload:e,meta:un(ur({},n||{}),{arg:r,requestId:t,requestStatus:"fulfilled"})}}),i=uo(e+"/pending",function(e,t,r){return{payload:void 0,meta:un(ur({},r||{}),{arg:t,requestId:e,requestStatus:"pending"})}}),o=uo(e+"/rejected",function(e,t,n,i,o){return{payload:i,error:(r&&r.serializeError||um)(e||"Rejected"),meta:un(ur({},o||{}),{arg:n,requestId:t,rejectedWithValue:!!i,requestStatus:"rejected",aborted:(null==e?void 0:e.name)==="AbortError",condition:(null==e?void 0:e.name)==="ConditionError"})}}),a="undefined"!=typeof AbortController?AbortController:/** @class */function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){},e}();return Object.assign(function(e){return function(s,l,u){var c,d=(null==r?void 0:r.idGenerator)?r.idGenerator(e):ud(),f=new a;function p(e){c=e,f.abort()}var h=function(){var a,h;return a=this,h=function(){var a,h,m,g,y,v;return l3(this,function(b){switch(b.label){case 0:var w;if(b.trys.push([0,4,,5]),!(null!==(w=g=null==(a=null==r?void 0:r.condition)?void 0:a.call(r,e,{getState:l,extra:u}))&&"object"==typeof w&&"function"==typeof w.then))return[3/*break*/,2];return[4/*yield*/,g];case 1:g=b.sent(),b.label=2;case 2:if(!1===g||f.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return y=new Promise(function(e,t){return f.signal.addEventListener("abort",function(){return t({name:"AbortError",message:c||"Aborted"})})}),s(i(d,e,null==(h=null==r?void 0:r.getPendingMeta)?void 0:h.call(r,{requestId:d,arg:e},{getState:l,extra:u}))),[4/*yield*/,Promise.race([y,Promise.resolve(t(e,{dispatch:s,getState:l,extra:u,requestId:d,signal:f.signal,abort:p,rejectWithValue:function(e,t){return new up(e,t)},fulfillWithValue:function(e,t){return new uh(e,t)}})).then(function(t){if(t instanceof up)throw t;return t instanceof uh?n(t.payload,d,e,t.meta):n(t,d,e)})])];case 3:return m=b.sent(),[3/*break*/,5];case 4:return m=(v=b.sent())instanceof up?o(null,d,e,v.payload,v.meta):o(v,d,e),[3/*break*/,5];case 5:return r&&!r.dispatchConditionRejection&&o.match(m)&&m.meta.condition||s(m),[2/*return*/,m]}})},new Promise(function(e,t){var r=function(e){try{i(h.next(e))}catch(e){t(e)}},n=function(e){try{i(h.throw(e))}catch(e){t(e)}},i=function(t){return t.done?e(t.value):Promise.resolve(t.value).then(r,n)};i((h=h.apply(a,null)).next())})}();return Object.assign(h,{abort:p,requestId:d,arg:e,unwrap:function(){return h.then(ug)}})}},{pending:i,rejected:o,fulfilled:n,typePrefix:e})}e.withTypes=function(){return e}}();var uy="listenerMiddleware";uo(uy+"/add"),uo(uy+"/removeAll"),uo(uy+"/remove"),"function"==typeof queueMicrotask&&queueMicrotask.bind("undefined"!=typeof window?window:void 0!==D?D:globalThis),"undefined"!=typeof window&&window.requestAnimationFrame&&window.requestAnimationFrame,// src/index.ts
(0,lH.enableES5)();const uv=uc({name:"authenticationSlice",initialState:{loading:!1,errorMessage:"",user:{},isAuthenticated:!1},reducers:{authLoading:(e,t)=>{e.loading=!0,e.errorMessage=""},authError:(e,t)=>{e.errorMessage=t.payload,e.loading=!1},UserLoginSignIn:(e,t)=>{e.user=t.payload,e.isAuthenticated=!0,e.errorMessage="",e.loading=!1},logOutUser:(e,t)=>{e.user={},e.isAuthenticated=!1,e.errorMessage="",e.loading=!1}}}),{authLoading:ub,authError:uw,UserLoginSignIn:ux,logOutUser:u_}=uv.actions;var uE=uv.reducer,H=U("acw62");const uS=uc({initialState:{loading:!1,error:"",trendingMovie:[],currentTrailer:{},popularMovie:[],nowPlayingMovie:[]},name:"TrendingMovie",reducers:{addTrendingMovie:(e,t)=>{e.trendingMovie=t.payload},addCurrentTrailer:(e,t)=>{e.currentTrailer=t.payload},addPopularMovie:(e,t)=>{e.popularMovie=t.payload},addNowPlayingMovie:(e,t)=>{e.nowPlayingMovie=t.payload}}}),{addTrendingMovie:uP,addCurrentTrailer:uk,addNowPlayingMovie:uI,addPopularMovie:uO}=uS.actions;var uC=uS.reducer;U("acw62");var uT=()=>{let e=tR(e=>e.trending?.currentTrailer);if(!e?.mediaDetail)return;let t=e?.mediaDetail.key;return/*#__PURE__*/(0,z.jsx)("div",{className:"overflow-hidden aspect-video w-full items-center bg-gradient-to-b from-[#000000]   z-0   bg-red-500   h-[200px]   md:h-[600px]   lg:h-[700px]   relative   ",children:/*#__PURE__*/(0,z.jsx)("iframe",{className:"   absolute   top-[50%]   left-[50%]   w-[100%]   aspect-video   -translate-x-1/2 -translate-y-1/2   ",src:`https://www.youtube.com/embed/${t}?autoplay=1&mute=1&showinfo=0&controls=0&modestbranding=0&rel=0&loop=1`,title:"YouTube video player",loop:!0})})};U("acw62"),U("acw62"),U("acw62");var uR=({item:e})=>e?.poster_path?/*#__PURE__*/(0,z.jsx)("div",{className:" w-28 md:w-[180px] pr-2 rounded-md overflow-hidden flex-shrink-0",children:/*#__PURE__*/(0,z.jsx)("img",{className:"",src:"https://image.tmdb.org/t/p/w250https://image.tmdb.org/t/p/w500"+e.poster_path})}):/*#__PURE__*/(0,z.jsx)(z.Fragment,{});U("acw62");var H=U("acw62"),uA// example
=AskGpt=new/*@__PURE__*/(c(U("cM6Z0")))({apiKey:"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",dangerouslyAllowBrowser:!0});const uN=uc({name:"Gpt Slice",initialState:{isGptPage:!1,searchResults:[],searching:!1},reducers:{handleGptPage:(e,t)=>{e.isGptPage=!e.isGptPage},setSearch:(e,t)=>{e.searching=!0},setMoviesSearchResults:(e,t)=>{e.searchResults=t.payload,e.searching=!1}}}),{handleGptPage:uM,setSearch:uj,setMoviesSearchResults:uD}=uN.actions;var uL=uN.reducer,uF=/*#__PURE__*/(0,H.memo)(()=>{let e=(0,H.useRef)(),t=tU(),{searching:r}=tR(e=>e.gpt),n=async e=>{let t=await fetch("https://api.themoviedb.org/3/search/movie?query="+e+"&include_adult=false&language=en-US&page=1",lD),r=await t.json();return r.results},i=async r=>{r.preventDefault(),t(uj());let i="Act as a Movie Recommendation system and suggest some movies for the query : "+e.current.value+". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya",o=await uA.chat.completions.create({messages:[{role:"user",content:i}],model:"gpt-3.5-turbo"});o.choices,console.log(o.choices?.[0]?.message?.content);let a=o.choices?.[0]?.message?.content.split(","),s=a.map(e=>n(e)),l=await Promise.all(s);console.log("tmdbResults",l),t(uD(l))};// current.value
return(0,H.useEffect)(()=>()=>{r&&t(uj())},[]),/*#__PURE__*/(0,z.jsxs)("form",{className:"bg-black w-1/2 py-3 px-3 rounded-lg flex justify-between",onSubmit:i,children:[/*#__PURE__*/(0,z.jsx)("input",{ref:e,type:"text",placeholder:"What do you want to watch...",className:"px-4 py-2 w-[80%] outline-none rounded-lg"}),/*#__PURE__*/(0,z.jsx)("button",{//   onClick={handleClickOnSearchbtn}
className:"bg-red-600 text-white outline-none tracking-widest w-[18%] rounded-lg",children:r?"Loading...":"Search"})]})});U("acw62");var uU=({suggestedMovie:e})=>/*#__PURE__*/(0,z.jsxs)("div",{className:" pl-10",children:[/*#__PURE__*/(0,z.jsx)("h1",{className:"text-white    font-bold mt-5 text-2xl",children:e?.[0]?.original_title}),/*#__PURE__*/(0,z.jsx)("div",{className:"flex overflow-x-scroll w-full m-auto",children:e?.map(e=>z.jsx(uR,{item:e},e.id))})]}),uB=()=>{let{searchResults:e}=tR(e=>e.gpt);return/*#__PURE__*/(0,z.jsxs)("div",{children:[/*#__PURE__*/(0,z.jsxs)("div",{className:"fixed top-0 bottom-0 left-0 right-0",children:[/*#__PURE__*/(0,z.jsx)("img",{src:lj,className:"absolute w-full h-full top-0 left-0 bottom-0 right-0"}),/*#__PURE__*/(0,z.jsx)("div",{className:"absolute w-full h-full bg-gradient-to-b from-[#000000] via-transparent to-[#00000068] bg-opacity-10"})]}),/*#__PURE__*/(0,z.jsx)("div",{className:"z-2 relative flex justify-center pt-52 ",children:/*#__PURE__*/(0,z.jsx)(uF,{})}),/*#__PURE__*/(0,z.jsx)("div",{className:"z-2 relative w-full m-auto ",children:e.length&&/*#__PURE__*/(0,z.jsx)("div",{className:"w-full bg-gradient-to-b from-transparent to-black overflow-x-hidden",children:e?.map(e=>z.jsx(uU,{suggestedMovie:e},e?.id))})})]})};U("acw62"),U("acw62");var uz=()=>{let e=tU(),{loading:t}=tR(e=>e.auth),{isGptPage:r}=tR(e=>e.gpt);return/*#__PURE__*/(0,z.jsxs)("div",{className:"z-10 fixed w-full flex justify-between items-center  px-2 py-1 sm:px-2 sm:py-1 md:px-8 md:py-3   ",children:[/*#__PURE__*/(0,z.jsx)("div",{children:/*#__PURE__*/(0,z.jsx)("img",{src:lM,className:" w-20  md:w-32"})}),/*#__PURE__*/(0,z.jsxs)("div",{className:"gap-1 sm:gap-2 md:gap-3 flex items-center",children:[/*#__PURE__*/(0,z.jsx)("button",{onClick:t=>{t.preventDefault(),e(uM())},className:"bg-red-600 outline-none text-xs  px-2 py-1 h-fit      sm:text-sm     md:px-3 md:py-2 text-white font-bold tracking-wide rounded-lg",children:r?"HomePage":"Search on Gpt"}),/*#__PURE__*/(0,z.jsxs)("button",{onClick:t=>{t.preventDefault(),lU().then(()=>{e(u_())})},className:"bg-red-700 outline-none text-xs  px-2 py-1 h-fit      sm:text-sm     md:px-3 md:py-2 text-white font-bold tracking-wide rounded-lg",children:["Sign out"," "]})]})]})};const u$=(I=[{path:"/",element:/*#__PURE__*/(0,z.jsx)(({children:e})=>{let{isAuthenticated:t}=tR(e=>e.auth),r=e9();return(// console.log("auth", auth);
t?e:/*#__PURE__*/(0,z.jsx)(tu,{to:"/authentication",state:r}))},{children:/*#__PURE__*/(0,z.jsx)(function(){return/*#__PURE__*/(0,z.jsxs)(z.Fragment,{children:[/*#__PURE__*/(0,z.jsx)(uz,{}),/*#__PURE__*/(0,z.jsx)(tc,{})]})},{})}),children:[{path:"/",element:/*#__PURE__*/(0,z.jsx)(()=>{let e=tU(),{trendingMovie:t,popularMovie:r,nowPlayingMovie:n}=tR(e=>e.trending)||[],{isGptPage:i}=tR(e=>e.gpt),o=t=>{if(!t.length)return;let r=t[1];lV(r?.id).then(t=>{let{results:n}=t?.data,i=n.filter(e=>e?.type==="Trailer");e(uk({mediaDetail:i[0],movieDetail:r}))})};return(0,H.useEffect)(()=>{let i=new AbortController;return n.length||lB(i.signal).then(t=>{e(uI(t?.data?.results))}),t.length||lz(i.signal).then(t=>{o(t?.data?.results),e(uP(t?.data?.results))}),r.length||l$(i.signal).then(t=>{e(uO(t?.data?.results))}),()=>{i&&i?.abort()}},[]),/*#__PURE__*/(0,z.jsx)("div",{className:"",children:i?/*#__PURE__*/(0,z.jsx)(uB,{}):/*#__PURE__*/(0,z.jsx)(z.Fragment,{children:/*#__PURE__*/(0,z.jsx)("div",{className:"relative w-screen aspect-video",children:/*#__PURE__*/(0,z.jsx)(uT,{})})})})},{})},,]},{path:"/authentication",element:/*#__PURE__*/(0,z.jsx)(()=>{let[e,t]=(0,H.useState)(!0),r=(0,H.useRef)(),n=(0,H.useRef)(),i=(0,H.useRef)(),o=tU(),a=e9(),{errorMessage:s,loading:l}=tR(e=>e.auth),u=tt();return/*#__PURE__*/(0,z.jsxs)("div",{className:"w-full h-full",children:[/*#__PURE__*/(0,z.jsxs)("div",{children:[/*#__PURE__*/(0,z.jsx)("img",{src:lj,className:"absolute w-full h-full"}),/*#__PURE__*/(0,z.jsx)("div",{className:"absolute w-full h-full bg-gradient-to-b from-[#000000] via-transparent to-[#00000068] bg-opacity-10"})]}),/*#__PURE__*/(0,z.jsx)("div",{children:/*#__PURE__*/(0,z.jsx)("img",{className:"absolute w-48",src:lM,alt:"logo"})}),/*#__PURE__*/(0,z.jsx)("div",{className:"flex w-full h-full justify-center items-center",children:/*#__PURE__*/(0,z.jsx)("div",{className:"bg-[#000000a9] p-10 z-10 rounded-xl w-3/12 h-fit",children:/*#__PURE__*/(0,z.jsxs)("form",{className:"w-full ",onSubmit:t=>{t.preventDefault();let r=n.current?.value,s=i.current?.value,l=tb(r,s);if(l)return o(uw(l));// to immidiate stop the if inputs are wrong
o(ub()),e?lF({email:r,password:s}).then(e=>{let{displayName:t,stsTokenManager:n,phoneNumber:i,photoURL:s,uid:l}=e.user,{refreshToken:c,accessToken:d,expirationTime:f}=n;o(ux({displayName:t,userToken:{refreshToken:c,accessToken:d,expirationTime:f},phoneNumber:i,photoURL:s,uid:l,email:r})),u(a.state?.pathname,{replace:!0})}).catch(e=>{o(uw(e.message))}):lL({email:r,password:s}).then(e=>{let{displayName:t,stsTokenManager:n,phoneNumber:i,photoURL:s,uid:l}=e.user,{refreshToken:c,accessToken:d,expirationTime:f}=n;o(ux({displayName:t,userToken:{refreshToken:c,accessToken:d,expirationTime:f},phoneNumber:i,photoURL:s,uid:l,email:r})),u(a.state?.pathname,{replace:!0})}).catch(e=>{o(uw(e.message))})},children:[/*#__PURE__*/(0,z.jsx)("h1",{className:"text-white text-left font-semibold text-2xl my-4 py-2",children:e?"Sign in":"Sign up"}),!e&&/*#__PURE__*/(0,z.jsx)("input",{ref:r,type:"text",placeholder:"Enter your Name",className:"w-full h-12 px-3 my-3  bg-gray-500 text-white cursor-pointer outline-none opacity-1 rounded-lg"}),/*#__PURE__*/(0,z.jsx)("input",{ref:n,type:"email",placeholder:"Enter your Email",className:"w-full h-12 px-3 my-3 bg-gray-500 text-white cursor-pointer outline-none opacity-1 rounded-lg"}),/*#__PURE__*/(0,z.jsx)("input",{ref:i,type:"password",placeholder:"Enter your Password",className:"w-full px-3 my-3 h-12  bg-gray-500 text-white  outline-none cursor-pointer rounded-lg"}),/*#__PURE__*/(0,z.jsx)("button",{type:"submit",className:"bg-red-600 text-white font-semibold my-3 w-full h-12 rounded-lg",children:l?"Loading...":"Submit"}),/*#__PURE__*/(0,z.jsxs)("p",{className:" text-red-500 font-semibold   cursor-pointer",children:[s," "]}),/*#__PURE__*/(0,z.jsxs)("p",{className:" text-white  my-5 cursor-pointer",children:["New to Netflix?"," ",/*#__PURE__*/(0,z.jsx)("span",{className:"hover:text-red-500",onClick:()=>{t(e=>!e)},children:"Sign up now."})]})]})})})]})},{})}],//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */(function(e){let t,r,n,i;let o=e.window?e.window:"undefined"!=typeof window?window:void 0,a=void 0!==o&&void 0!==o.document&&void 0!==o.document.createElement,s=!a;if(K(e.routes.length>0,"You must provide a non-empty routes array to createRouter"),e.mapRouteProperties)t=e.mapRouteProperties;else if(e.detectErrorBoundary){// If they are still using the deprecated version, wrap it with the new API
let r=e.detectErrorBoundary;t=e=>({hasErrorBoundary:r(e)})}else t=eS;// Routes keyed by ID
let l={},u=ee(e.routes,t,void 0,l),c=e.basename||"/",d=q({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),f=null,p=new Set,h=null,m=null,g=null,y=null!=e.hydrationData,v=et(u,e.history.location,c),b=null;if(null==v){// If we do not match a user-provided-route, fall back to the root
// to allow the error boundary to take over
let t=eB(404,{pathname:e.history.location.pathname}),{matches:r,route:n}=eU(u);v=r,b={[n.id]:t}}let w=// functions around still then we'll need to run them in initialize()
!v.some(e=>e.route.lazy)&&// And we have to either have no loaders or have been provided hydrationData
(!v.some(e=>e.route.loader)||null!=e.hydrationData),x={historyAction:e.history.action,location:e.history.location,matches:v,initialized:w,navigation:ew,// Don't restore on initial updateState() if we were SSR'd
restoreScrollPosition:null==e.hydrationData&&null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||b,fetchers:new Map,blockers:new Map},_=R.Pop,E=!1,S=!1,P=new Map,k=null,I=!1,O=!1,C=[],T=[],N=new Map,M=0,j=-1,D=new Map,L=new Set,F=new Map,U=new Map,B=new Set,z=new Map,$=new Map,V=!1;// Update our state and notify the calling context of the change
function H(e,t){x=q({},x,e);// Prep fetcher cleanup so we can tell the UI which fetcher data entries
// can be removed
let r=[],n=[];d.v7_fetcherPersist&&x.fetchers.forEach((e,t)=>{"idle"===e.state&&(B.has(t)?n.push(t):// revalidations and such
r.push(t))}),p.forEach(e=>e(x,{deletedFetchers:n,unstable_viewTransitionOpts:t})),d.v7_fetcherPersist&&(r.forEach(e=>x.fetchers.delete(e)),n.forEach(e=>ec(e)))}// Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
// and setting state.[historyAction/location/matches] to the new route.
// - Location is a required param
// - Navigation will always be set to IDLE_NAVIGATION
// - Can pass any other state in newState
function W(t,n){var i,o;let a,s;// Deduce if we're in a loading/actionReload state:
// - We have committed actionData in the store
// - The current navigation was a mutation submission
// - We're past the submitting state and into the loading state
// - The location being loaded is not the result of a redirect
let l=null!=x.actionData&&null!=x.navigation.formMethod&&eW(x.navigation.formMethod)&&"loading"===x.navigation.state&&(null==(i=t.state)?void 0:i._isRedirect)!==!0;a=n.actionData?Object.keys(n.actionData).length>0?n.actionData:null:l?x.actionData:null;// Always preserve any existing loaderData from re-used routes
let c=n.loaderData?eL(x.loaderData,n.loaderData,n.matches||[],n.errors):x.loaderData,d=x.blockers;d.size>0&&(d=new Map(d)).forEach((e,t)=>d.set(t,e_));// Always respect the user flag.  Otherwise don't reset on mutation
// submission navigations unless they redirect
let f=!0===E||null!=x.navigation.formMethod&&eW(x.navigation.formMethod)&&(null==(o=t.state)?void 0:o._isRedirect)!==!0;// On POP, enable transitions if they were enabled on the original navigation
if(r&&(u=r,r=void 0),I||_===R.Pop||(_===R.Push?e.history.push(t,t.state):_===R.Replace&&e.history.replace(t,t.state)),_===R.Pop){// Forward takes precedence so they behave like the original navigation
let e=P.get(x.location.pathname);e&&e.has(t.pathname)?s={currentLocation:x.location,nextLocation:t}:P.has(t.pathname)&&// the new location and enable if that location previously enabled
(s={currentLocation:t,nextLocation:x.location})}else if(S){// Store the applied transition on PUSH/REPLACE
let e=P.get(x.location.pathname);e?e.add(t.pathname):(e=new Set([t.pathname]),P.set(x.location.pathname,e)),s={currentLocation:x.location,nextLocation:t}}H(q({},n,{actionData:a,loaderData:c,historyAction:_,location:t,initialized:!0,navigation:ew,revalidation:"idle",restoreScrollPosition:eT(t,n.matches||x.matches),preventScrollReset:f,blockers:d}),s),// Reset stateful navigation vars
_=R.Pop,E=!1,S=!1,I=!1,O=!1,C=[],T=[]}// Trigger a navigation event, which can either be a numerical POP or a PUSH
// replace with an optional submission
async function G(t,r){if("number"==typeof t){e.history.go(t);return}let n=ek(x.location,x.matches,c,d.v7_prependBasename,t,null==r?void 0:r.fromRouteId,null==r?void 0:r.relative),{path:i,submission:o,error:a}=eI(d.v7_normalizeFormMethod,!1,n,r),s=x.location,l=X(x.location,i,r&&r.state);// When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
// URL from window.location, so we need to encode it here so the behavior
// remains the same as POP and non-data-router usages.  new URL() does all
// the same encoding we'd get from a history.pushState/window.location read
// without having to touch history
l=q({},l,e.history.encodeLocation(l));let u=r&&null!=r.replace?r.replace:void 0,f=R.Push;!0===u?f=R.Replace:!1===u||null!=o&&eW(o.formMethod)&&o.formAction===x.location.pathname+x.location.search&&// users don't have to double-click the back button to get to the prior
// location.  If the user redirects to a different location from the
// action/loader this will be ignored and the redirect will be a PUSH
(f=R.Replace);let p=r&&"preventScrollReset"in r?!0===r.preventScrollReset:void 0,h=ey({currentLocation:s,nextLocation:l,historyAction:f});if(h){// Put the blocker into a blocked state
eg(h,{state:"blocked",location:l,proceed(){eg(h,{state:"proceeding",proceed:void 0,reset:void 0,location:l}),// Send the same navigation through
G(t,r)},reset(){let e=new Map(x.blockers);e.set(h,e_),H({blockers:e})}});return}return await Q(f,l,{submission:o,// Send through the formData serialization error if we have one so we can
// render at the right error boundary after we match routes
pendingError:a,preventScrollReset:p,replace:r&&r.replace,enableViewTransition:r&&r.unstable_viewTransition})}// Start a navigation to the given action/location.  Can optionally provide a
// overrideNavigation which will override the normalLoad in the case of a redirect
// navigation
async function Q(t,n,o){var a,s,l;let d,f;// Abort any in-progress navigations and start a new one. Unset any ongoing
// uninterrupted revalidations unless told otherwise, since we want this
// new navigation to update history normally
i&&i.abort(),i=null,_=t,I=!0===(o&&o.startUninterruptedRevalidation),a=x.location,s=x.matches,h&&g&&(h[eC(a,s)]=g()),E=!0===(o&&o.preventScrollReset),S=!0===(o&&o.enableViewTransition);let p=r||u,m=o&&o.overrideNavigation,y=et(p,n,c);// Short circuit with a 404 on the root error boundary if we match nothing
if(!y){let e=eB(404,{pathname:n.pathname}),{matches:t,route:r}=eU(p);// Cancel all pending deferred on 404s since we don't keep any routes
ev(),W(n,{matches:t,loaderData:{},errors:{[r.id]:e}});return}// Short circuit if it's only a hash change and not a revalidation or
// mutation submission.
//
// Ignore on initial page loads because since the initial load will always
// be "same hash".  For example, on /page#hash and submit a <Form method="post">
// which will default to a navigation to /page
if(x.initialized&&!O&&(l=x.location).pathname===n.pathname&&l.search===n.search&&(""===l.hash?""!==n.hash:l.hash===n.hash||""!==n.hash)&&!(o&&o.submission&&eW(o.submission.formMethod))){W(n,{matches:y});return}// Create a controller/Request for this navigation
i=new AbortController;let v=eN(e.history,n,i.signal,o&&o.submission);if(o&&o.pendingError)// with binary FormData so assign here and skip to handleLoaders.  That
// way we handle calling loaders above the boundary etc.  It's not really
// different from an actionError in that sense.
f={[eF(y).route.id]:o.pendingError};else if(o&&o.submission&&eW(o.submission.formMethod)){// Call action if we received an action submission
let e=await Y(v,n,o.submission,y,{replace:o.replace});if(e.shortCircuited)return;d=e.pendingActionData,f=e.pendingActionError,m=eY(n,o.submission),// Create a GET request for the loaders
v=new Request(v.url,{signal:v.signal})}// Call loaders
let{shortCircuited:b,loaderData:w,errors:P}=await Z(v,n,y,m,o&&o.submission,o&&o.fetcherSubmission,o&&o.replace,d,f);b||(// Clean up now that the action/loaders have completed.  Don't clean up if
// we short circuited because pendingNavigationController will have already
// been assigned to a new controller for the next navigation
i=null,W(n,q({matches:y},d?{actionData:d}:{},{loaderData:w,errors:P})))}// Call the action matched by the leaf route for this navigation and handle
// redirects/errors
async function Y(e,r,n,i,o){let a;void 0===o&&(o={}),el(),H({navigation:{state:"submitting",location:r,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}});let s=eX(i,r);if(s.route.action||s.route.lazy){if(a=await eA("action",e,s,i,l,t,c),e.signal.aborted)return{shortCircuited:!0}}else a={type:A.error,error:eB(405,{method:e.method,pathname:r.pathname,routeId:s.route.id})};if(eq(a)){let e;return e=o&&null!=o.replace?o.replace:a.location===x.location.pathname+x.location.search,await ea(x,a,{submission:n,replace:e}),{shortCircuited:!0}}if(eH(a)){// Store off the pending error - we use it to determine which loaders
// to call and will commit it when we complete the navigation
let e=eF(i,s.route.id);return!0!==(o&&o.replace)&&(_=R.Push),{// Send back an empty object we can use to clear out any prior actionData
pendingActionData:{},pendingActionError:{[e.route.id]:a.error}}}if(eV(a))throw eB(400,{type:"defer-action"});return{pendingActionData:{[s.route.id]:a.data}}}// Call all applicable loaders for the given matches, handling redirects,
// errors, etc.
async function Z(t,n,o,a,s,l,d,f,p){// Figure out the right navigation we want to use for data loading
let h=a||eY(n,s),m=s||l||eQ(h),g=r||u,[y,v]=eO(e.history,x,o,m,n,O,C,T,F,L,g,c,f,p);// Short circuit if we have no loaders to run
if(// Cancel pending deferreds for no-longer-matched routes or routes we're
// about to reload.  Note that if this is an action reload we would have
// already cancelled all pending deferreds so this would be a no-op
ev(e=>!(o&&o.some(t=>t.route.id===e))||y&&y.some(t=>t.route.id===e)),j=++M,0===y.length&&0===v.length){let e=ep();return W(n,q({matches:o,loaderData:{},// Commit pending error if we're short circuiting
errors:p||null},f?{actionData:f}:{},e?{fetchers:new Map(x.fetchers)}:{})),{shortCircuited:!0}}// If this is an uninterrupted revalidation, we remain in our current idle
// state.  If not, we need to switch to our loading state and load data,
// preserving any new action data or existing action data (in the case of
// a revalidation interrupting an actionReload)
if(!I){v.forEach(e=>{let t=x.fetchers.get(e.key),r=eZ(void 0,t?t.data:void 0);x.fetchers.set(e.key,r)});let e=f||x.actionData;H(q({navigation:h},e?0===Object.keys(e).length?{actionData:null}:{actionData:e}:{},v.length>0?{fetchers:new Map(x.fetchers)}:{}))}v.forEach(e=>{N.has(e.key)&&ed(e.key),e.controller&&// (via deleteFetcher) does not abort the triggering navigation that
// triggered the revalidation
N.set(e.key,e.controller)});// Proxy navigation abort through to revalidation fetchers
let b=()=>v.forEach(e=>ed(e.key));i&&i.signal.addEventListener("abort",b);let{results:w,loaderResults:_,fetcherResults:E}=await es(x.matches,o,y,v,t);if(t.signal.aborted)return{shortCircuited:!0};i&&i.signal.removeEventListener("abort",b),v.forEach(e=>N.delete(e.key));// If any loaders returned a redirect Response, start a new REPLACE navigation
let S=ez(w);if(S){if(S.idx>=y.length){// If this redirect came from a fetcher make sure we mark it in
// fetchRedirectIds so it doesn't get revalidated on the next set of
// loader executions
let e=v[S.idx-y.length].key;L.add(e)}return await ea(x,S.result,{replace:d}),{shortCircuited:!0}}// Process and commit output from loaders
let{loaderData:P,errors:k}=eD(x,o,y,_,p,v,E,z);// Wire up subscribers to update loaderData as promises settle
z.forEach((e,t)=>{e.subscribe(r=>{// Note: No need to updateState here since the TrackedPromise on
// loaderData is stable across resolve/reject
// Remove this instance if we were aborted or if promises have settled
(r||e.done)&&z.delete(t)})});let R=ep(),A=eh(j),D=R||A||v.length>0;return q({loaderData:P,errors:k},D?{fetchers:new Map(x.fetchers)}:{})}function er(e){return d.v7_fetcherPersist&&(U.set(e,(U.get(e)||0)+1),B.has(e)&&B.delete(e)),x.fetchers.get(e)||ex}// Call the action for the matched fetcher.submit(), and then handle redirects,
// errors, and revalidation
async function en(n,o,a,s,d,f){var p;if(el(),F.delete(n),!s.route.action&&!s.route.lazy){let e=eB(405,{method:f.formMethod,pathname:a,routeId:o});eu(n,o,e);return}let h=(p=x.fetchers.get(n),{state:"submitting",formMethod:f.formMethod,formAction:f.formAction,formEncType:f.formEncType,formData:f.formData,json:f.json,text:f.text,data:p?p.data:void 0});x.fetchers.set(n,h),H({fetchers:new Map(x.fetchers)});// Call the action for the fetcher
let m=new AbortController,g=eN(e.history,a,m.signal,f);N.set(n,m);let y=M,v=await eA("action",g,s,d,l,t,c);if(g.signal.aborted){// We can delete this so long as we weren't aborted by our own fetcher
// re-submit which would have put _new_ controller is in fetchControllers
N.get(n)===m&&N.delete(n);return}if(B.has(n)){x.fetchers.set(n,e0(void 0)),H({fetchers:new Map(x.fetchers)});return}if(eq(v)){if(N.delete(n),j>y){// A new navigation was kicked off after our action started, so that
// should take precedence over this redirect navigation.  We already
// set isRevalidationRequired so all loaders for the new route should
// fire unless opted out via shouldRevalidate
let e=e0(void 0);x.fetchers.set(n,e),H({fetchers:new Map(x.fetchers)});return}{L.add(n);let e=eZ(f);return x.fetchers.set(n,e),H({fetchers:new Map(x.fetchers)}),ea(x,v,{fetcherSubmission:f})}}// Process any non-redirect errors thrown
if(eH(v)){eu(n,o,v.error);return}if(eV(v))throw eB(400,{type:"defer-action"});// Start the data load for current matches, or the next location if we're
// in the middle of a navigation
let b=x.navigation.location||x.location,w=eN(e.history,b,m.signal),E=r||u,S="idle"!==x.navigation.state?et(E,x.navigation.location,c):x.matches;K(S,"Didn't find any matches after fetcher action");let P=++M;D.set(n,P);let k=eZ(f,v.data);x.fetchers.set(n,k);let[I,R]=eO(e.history,x,S,f,b,O,C,T,F,L,E,c,{[s.route.id]:v.data},void 0// No need to send through errors since we short circuit above
);// Put all revalidating fetchers into the loading state, except for the
// current fetcher which we want to keep in it's current loading state which
// contains it's action submission info + action data
R.filter(e=>e.key!==n).forEach(e=>{let t=e.key,r=x.fetchers.get(t),n=eZ(void 0,r?r.data:void 0);x.fetchers.set(t,n),N.has(t)&&ed(t),e.controller&&N.set(t,e.controller)}),H({fetchers:new Map(x.fetchers)});let A=()=>R.forEach(e=>ed(e.key));m.signal.addEventListener("abort",A);let{results:U,loaderResults:$,fetcherResults:V}=await es(x.matches,S,I,R,w);if(m.signal.aborted)return;m.signal.removeEventListener("abort",A),D.delete(n),N.delete(n),R.forEach(e=>N.delete(e.key));let q=ez(U);if(q){if(q.idx>=I.length){// If this redirect came from a fetcher make sure we mark it in
// fetchRedirectIds so it doesn't get revalidated on the next set of
// loader executions
let e=R[q.idx-I.length].key;L.add(e)}return ea(x,q.result)}// Process and commit output from loaders
let{loaderData:J,errors:G}=eD(x,x.matches,I,$,void 0,R,V,z);// Since we let revalidations complete even if the submitting fetcher was
// deleted, only put it back to idle if it hasn't been deleted
if(x.fetchers.has(n)){let e=e0(v.data);x.fetchers.set(n,e)}eh(P),"loading"===x.navigation.state&&P>j?(K(_,"Expected pending action"),i&&i.abort(),W(x.navigation.location,{matches:S,loaderData:J,errors:G,fetchers:new Map(x.fetchers)})):(// otherwise just update with the fetcher data, preserving any existing
// loaderData for loaders that did not need to reload.  We have to
// manually merge here since we aren't going through completeNavigation
H({errors:G,loaderData:eL(x.loaderData,J,S,G),fetchers:new Map(x.fetchers)}),O=!1)}// Call the matched loader for fetcher.load(), handling redirects, errors, etc.
async function eo(r,n,i,o,a,s){let u=x.fetchers.get(r),d=eZ(s,u?u.data:void 0);x.fetchers.set(r,d),H({fetchers:new Map(x.fetchers)});// Call the loader for this fetcher route match
let f=new AbortController,p=eN(e.history,i,f.signal);N.set(r,f);let h=M,m=await eA("loader",p,o,a,l,t,c);if(eV(m)&&(m=await eJ(m,p.signal,!0)||m),N.get(r)===f&&N.delete(r),p.signal.aborted)return;if(B.has(r)){x.fetchers.set(r,e0(void 0)),H({fetchers:new Map(x.fetchers)});return}// If the loader threw a redirect Response, start a new REPLACE navigation
if(eq(m)){if(j>h){// A new navigation was kicked off after our loader started, so that
// should take precedence over this redirect navigation
let e=e0(void 0);x.fetchers.set(r,e),H({fetchers:new Map(x.fetchers)});return}L.add(r),await ea(x,m);return}// Process any non-redirect errors thrown
if(eH(m)){eu(r,n,m.error);return}K(!eV(m),"Unhandled fetcher deferred data");// Put the fetcher back into an idle state
let g=e0(m.data);x.fetchers.set(r,g),H({fetchers:new Map(x.fetchers)})}/**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */async function ea(t,r,n){let{submission:s,fetcherSubmission:l,replace:u}=void 0===n?{}:n;r.revalidate&&(O=!0);let d=X(t.location,r.location,{_isRedirect:!0});if(K(d,"Expected a location on the redirect navigation"),a){let t=!1;if(r.reloadDocument)t=!0;else if(eE.test(r.location)){let n=e.history.createURL(r.location);t=n.origin!==o.location.origin||// Hard reload if it's an absolute URL that does not match our basename
null==ei(n.pathname,c)}if(t){u?o.location.replace(r.location):o.location.assign(r.location);return}}// There's no need to abort on redirects, since we don't detect the
// redirect until the action/loaders have settled
i=null;let f=!0===u?R.Replace:R.Push,{formMethod:p,formAction:h,formEncType:m}=t.navigation;!s&&!l&&p&&h&&m&&(s=eQ(t.navigation));// If this was a 307/308 submission we want to preserve the HTTP method and
// re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
// redirected location
let g=s||l;if(eb.has(r.status)&&g&&eW(g.formMethod))await Q(f,d,{submission:q({},g,{formAction:r.location}),// Preserve this flag across redirects
preventScrollReset:E});else{// If we have a navigation submission, we will preserve it through the
// redirect navigation
let e=eY(d,s);await Q(f,d,{overrideNavigation:e,fetcherSubmission:l,// Preserve this flag across redirects
preventScrollReset:E})}}async function es(r,n,i,o,a){// Call all navigation loaders and revalidating fetcher loaders in parallel,
// then slice off the results into separate arrays so we can handle them
// accordingly
let s=await Promise.all([...i.map(e=>eA("loader",a,e,n,l,t,c)),...o.map(r=>r.matches&&r.match&&r.controller?eA("loader",eN(e.history,r.path,r.controller.signal),r.match,r.matches,l,t,c):{type:A.error,error:eB(404,{pathname:r.path})})]),u=s.slice(0,i.length),d=s.slice(i.length);return await Promise.all([eK(r,i,u,u.map(()=>a.signal),!1,x.loaderData),eK(r,o.map(e=>e.match),d,o.map(e=>e.controller?e.controller.signal:null),!0)]),{results:s,loaderResults:u,fetcherResults:d}}function el(){// Every interruption triggers a revalidation
O=!0,// Cancel pending route-level deferreds and mark cancelled routes for
// revalidation
C.push(...ev()),// Abort in-flight fetcher loads
F.forEach((e,t)=>{N.has(t)&&(T.push(t),ed(t))})}function eu(e,t,r){let n=eF(x.matches,t);ec(e),H({errors:{[n.route.id]:r},fetchers:new Map(x.fetchers)})}function ec(e){let t=x.fetchers.get(e);N.has(e)&&!(t&&"loading"===t.state&&D.has(e))&&ed(e),F.delete(e),D.delete(e),L.delete(e),B.delete(e),x.fetchers.delete(e)}function ed(e){let t=N.get(e);K(t,"Expected fetch controller: "+e),t.abort(),N.delete(e)}function ef(e){for(let t of e){let e=e0(er(t).data);x.fetchers.set(t,e)}}function ep(){let e=[],t=!1;for(let r of L){let n=x.fetchers.get(r);K(n,"Expected fetcher: "+r),"loading"===n.state&&(L.delete(r),e.push(r),t=!0)}return ef(e),t}function eh(e){let t=[];for(let[r,n]of D)if(n<e){let e=x.fetchers.get(r);K(e,"Expected fetcher: "+r),"loading"===e.state&&(ed(r),D.delete(r),t.push(r))}return ef(t),t.length>0}function em(e){x.blockers.delete(e),$.delete(e)}// Utility function to update blockers, ensuring valid state transitions
function eg(e,t){let r=x.blockers.get(e)||e_;// Poor mans state machine :)
// https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
K("unblocked"===r.state&&"blocked"===t.state||"blocked"===r.state&&"blocked"===t.state||"blocked"===r.state&&"proceeding"===t.state||"blocked"===r.state&&"unblocked"===t.state||"proceeding"===r.state&&"unblocked"===t.state,"Invalid blocker state transition: "+r.state+" -> "+t.state);let n=new Map(x.blockers);n.set(e,t),H({blockers:n})}function ey(e){let{currentLocation:t,nextLocation:r,historyAction:n}=e;if(0===$.size)return;// We ony support a single active blocker at the moment since we don't have
// any compelling use cases for multi-blocker yet
$.size>1&&J(!1,"A router only supports one blocker at a time");let i=Array.from($.entries()),[o,a]=i[i.length-1],s=x.blockers.get(o);if((!s||"proceeding"!==s.state)&&a({currentLocation:t,nextLocation:r,historyAction:n}))return o}function ev(e){let t=[];return z.forEach((r,n)=>{(!e||e(n))&&(// Cancel the deferred - but do not remove from activeDeferreds here -
// we rely on the subscribers to do that so our tests can assert proper
// cleanup via _internalActiveDeferreds
r.cancel(),t.push(n),z.delete(n))}),t}function eC(e,t){return m&&m(e,t.map(e=>(function(e,t){let{route:r,pathname:n,params:i}=e;return{id:r.id,pathname:n,params:i,data:t[r.id],handle:r.handle}})(e,x.loaderData)))||e.key}function eT(e,t){if(h){let r=h[eC(e,t)];if("number"==typeof r)return r}return null}return n={get basename(){return c},get state(){return x},get routes(){return u},get window(){return o},initialize:// Initialize the router, all side effects should be kicked off from here.
// Implemented as a Fluent API for ease of:
//   let router = createRouter(init).initialize();
function(){if(// If history informs us of a POP navigation, start the navigation but do not update
// state.  We'll update our own state once the navigation completes
f=e.history.listen(t=>{let{action:r,location:n,delta:i}=t;// Ignore this event if it was just us resetting the URL from a
// blocked POP navigation
if(V){V=!1;return}J(0===$.size||null!=i,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let o=ey({currentLocation:x.location,nextLocation:n,historyAction:r});if(o&&null!=i){// Restore the URL to match the current UI, but don't update router state
V=!0,e.history.go(-1*i),// Put the blocker into a blocked state
eg(o,{state:"blocked",location:n,proceed(){eg(o,{state:"proceeding",proceed:void 0,reset:void 0,location:n}),// Re-do the same POP navigation we just blocked
e.history.go(i)},reset(){let e=new Map(x.blockers);e.set(o,e_),H({blockers:e})}});return}return Q(r,n)}),a){// FIXME: This feels gross.  How can we cleanup the lines between
// scrollRestoration/appliedTransitions persistance?
(function(e,t){try{let r=e.sessionStorage.getItem(eP);if(r){let e=JSON.parse(r);for(let[r,n]of Object.entries(e||{}))n&&Array.isArray(n)&&t.set(r,new Set(n||[]))}}catch(e){// no-op, use default empty object
}})(o,P);let e=()=>(function(e,t){if(t.size>0){let r={};for(let[e,n]of t)r[e]=[...n];try{e.sessionStorage.setItem(eP,JSON.stringify(r))}catch(e){J(!1,"Failed to save applied view transitions in sessionStorage ("+e+").")}}})(o,P);o.addEventListener("pagehide",e),k=()=>o.removeEventListener("pagehide",e)}return x.initialized||Q(R.Pop,x.location),n},subscribe:// Subscribe to state updates for the router
function(e){return p.add(e),()=>p.delete(e)},enableScrollRestoration:// Opt in to capturing and reporting scroll positions during navigations,
// used by the <ScrollRestoration> component
function(e,t,r){// Perform initial hydration scroll restoration, since we miss the boat on
// the initial updateState() because we've not yet rendered <ScrollRestoration/>
// and therefore have no savedScrollPositions available
if(h=e,g=t,m=r||null,!y&&x.navigation===ew){y=!0;let e=eT(x.location,x.matches);null!=e&&H({restoreScrollPosition:e})}return()=>{h=null,g=null,m=null}},navigate:G,fetch:// Trigger a fetcher load/submit for the given fetcher key
function(e,t,n,i){if(s)throw Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");N.has(e)&&ed(e);let o=r||u,a=ek(x.location,x.matches,c,d.v7_prependBasename,n,t,null==i?void 0:i.relative),l=et(o,a,c);if(!l){eu(e,t,eB(404,{pathname:a}));return}let{path:f,submission:p,error:h}=eI(d.v7_normalizeFormMethod,!0,a,i);if(h){eu(e,t,h);return}let m=eX(l,f);if(E=!0===(i&&i.preventScrollReset),p&&eW(p.formMethod)){en(e,t,f,m,l,p);return}// Store off the match so we can call it's shouldRevalidate on subsequent
// revalidations
F.set(e,{routeId:t,path:f}),eo(e,t,f,m,l,p)},revalidate:// Revalidate all current loaders.  If a navigation is in progress or if this
// is interrupted by a navigation, allow this to "succeed" by calling all
// loaders during the next loader round
function(){// If we're currently submitting an action, we don't need to start a new
// navigation, we'll just let the follow up loader execution call all loaders
if(el(),H({revalidation:"loading"}),"submitting"!==x.navigation.state){// If we're currently in an idle state, start a new navigation for the current
// action/location and mark it as uninterrupted, which will skip the history
// update in completeNavigation
if("idle"===x.navigation.state){Q(x.historyAction,x.location,{startUninterruptedRevalidation:!0});return}// Otherwise, if we're currently in a loading state, just start a new
// navigation to the navigation.location but do not trigger an uninterrupted
// revalidation so that history correctly updates once the navigation completes
Q(_||x.historyAction,x.navigation.location,{overrideNavigation:x.navigation})}},// Passthrough to history-aware createHref used by useHref so we get proper
// hash-aware URLs in DOM paths
createHref:t=>e.history.createHref(t),encodeLocation:t=>e.history.encodeLocation(t),getFetcher:er,deleteFetcher:function(e){if(d.v7_fetcherPersist){let t=(U.get(e)||0)-1;t<=0?(U.delete(e),B.add(e)):U.set(e,t)}else ec(e);H({fetchers:new Map(x.fetchers)})},dispose:// Clean up a router and it's side effects
function(){f&&f(),k&&k(),p.clear(),i&&i.abort(),x.fetchers.forEach((e,t)=>ec(t)),x.blockers.forEach((e,t)=>em(t))},getBlocker:function(e,t){let r=x.blockers.get(e)||e_;return $.get(e)!==t&&$.set(e,t),r},deleteBlocker:em,_internalFetchControllers:N,_internalActiveDeferreds:z,_internalSetRoutes:function(e){r=ee(e,t,void 0,l={})}}})({basename:null==O?void 0:O.basename,future:tp({},null==O?void 0:O.future,{v7_prependBasename:!0}),history:function(e,t,r,n){void 0===n&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,a=i.history,s=R.Pop,l=null,u=c();function c(){return(a.state||{idx:null}).idx}function d(){s=R.Pop;let e=c(),t=null==e?null:e-u;u=e,l&&l({action:s,location:p.location,delta:t})}function f(e){// window.location.origin is "null" (the literal string value) in Firefox
// under certain conditions, notably when serving from a local HTML file
// See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
let t="null"!==i.location.origin?i.location.origin:i.location.href,r="string"==typeof e?e:Q(e);return K(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}null==u&&(u=0,a.replaceState(q({},a.state,{idx:u}),""));let p={get action(){return s},get location(){return e(i,a)},listen(e){if(l)throw Error("A history only accepts one active listener");return i.addEventListener(W,d),l=e,()=>{i.removeEventListener(W,d),l=null}},createHref:e=>t(i,e),createURL:f,encodeLocation(e){// Encode a Location the same way window.location would
let t=f(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s=R.Push;let n=X(p.location,e,t);r&&r(n,e);let d=G(n,u=c()+1),f=p.createHref(n);// try...catch because iOS limits us to 100 pushState calls :/
try{a.pushState(d,"",f)}catch(e){// If the exception is because `state` can't be serialized, let that throw
// outwards just like a replace call would so the dev knows the cause
// https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
// https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;// They are going to lose state here, but there is no real
// way to warn them about it since the page will refresh...
i.location.assign(f)}o&&l&&l({action:s,location:p.location,delta:1})},replace:function(e,t){s=R.Replace;let n=X(p.location,e,t);r&&r(n,e);let i=G(n,u=c()),d=p.createHref(n);a.replaceState(i,"",d),o&&l&&l({action:s,location:p.location,delta:0})},go:e=>a.go(e)};return p}(function(e,t){let{pathname:r,search:n,hash:i}=e.location;return X("",{pathname:r,search:n,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:Q(t)},null,{window:null==O?void 0:O.window}),hydrationData:(null==O?void 0:O.hydrationData)||((l=null==(p=window)?void 0:p.__staticRouterHydrationData)&&l.errors&&(l=tp({},l,{errors:function(e){if(!e)return null;let t=Object.entries(e),r={};for(let[e,n]of t)// Hey you!  If you change this, please change the corresponding logic in
// serializeErrors in react-router-dom/server.tsx :)
if(n&&"RouteErrorResponse"===n.__type)r[e]=new ef(n.status,n.statusText,n.data,!0===n.internal);else if(n&&"Error"===n.__type){// Attempt to reconstruct the right type of Error (i.e., ReferenceError)
if(n.__subType){let t=window[n.__subType];if("function"==typeof t)try{// @ts-expect-error
let i=new t(n.message);// Wipe away the client-side stack trace.  Nothing to fill it in with
// because we don't serialize SSR stack traces for security reasons
i.stack="",r[e]=i}catch(e){// no-op - fall through and create a normal Error
}}if(null==r[e]){let t=Error(n.message);// Wipe away the client-side stack trace.  Nothing to fill it in with
// because we don't serialize SSR stack traces for security reasons
t.stack="",r[e]=t}}else r[e]=n;return r}(l.errors)})),l),routes:I,mapRouteProperties:function(e){let t={// Note: this check also occurs in createRoutesFromChildren so update
// there if you change this -- please and thank you!
hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(t,{element:/*#__PURE__*/H.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:/*#__PURE__*/H.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t},window:null==O?void 0:O.window}).initialize()),uV=function(e){var t,r=function(e){var t,r,n,i;return void 0===(t=e)&&(t={}),n=void 0===(r=t.thunk)||r,t.immutableCheck,t.serializableCheck,t.actionCreatorCheck,i=new ua,n&&("boolean"==typeof n?i.push(l1):i.push(l1.withExtraArgument(n.extraArgument))),i},n=e||{},i=n.reducer,o=void 0===i?void 0:i,a=n.middleware,s=void 0===a?r():a,l=n.devTools,u=void 0===l||l,c=n.preloadedState,d=n.enhancers,f=void 0===d?void 0:d;if("function"==typeof o)t=o;else if(// src/isPlainObject.ts
function(e){if("object"!=typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;for(var r=t;null!==Object.getPrototypeOf(r);)r=Object.getPrototypeOf(r);return t===r}(o))t=/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */function(e){for(var t,r=Object.keys(e),n={},i=0;i<r.length;i++){var o=r[i];"function"==typeof e[o]&&(n[o]=e[o])}var a=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var r=e[t];if(void 0===r(void 0,{type:lQ.INIT}))throw Error(lJ(12));if(void 0===r(void 0,{type:lQ.PROBE_UNKNOWN_ACTION()}))throw Error(lJ(13))})}(n)}catch(e){t=e}return function(e,r){if(void 0===e&&(e={}),t)throw t;for(var i=!1,o={},s=0;s<a.length;s++){var l=a[s],u=n[l],c=e[l],d=u(c,r);if(void 0===d)throw r&&r.type,Error(lJ(14));o[l]=d,i=i||d!==c}return(i=i||a.length!==Object.keys(e).length)?o:e}}(o);else throw Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var p=s;"function"==typeof p&&(p=p(r));var h=lZ.apply(void 0,p),m=lY;u&&(m=ui(ur({trace:!1},"object"==typeof u&&u)));var g=new us(h),y=g;return Array.isArray(f)?y=l4([h],f):"function"==typeof f&&(y=f(g)),/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */function e(t,r,n){if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw Error(lJ(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw Error(lJ(1));return n(e)(t,r)}if("function"!=typeof t)throw Error(lJ(2));var i,o=t,a=r,s=[],l=s,u=!1;/**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */function c(){l===s&&(l=s.slice())}/**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */function d(){if(u)throw Error(lJ(3));return a}/**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */function f(e){if("function"!=typeof e)throw Error(lJ(4));if(u)throw Error(lJ(5));var t=!0;return c(),l.push(e),function(){if(t){if(u)throw Error(lJ(6));t=!1,c();var r=l.indexOf(e);l.splice(r,1),s=null}}}/**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */function p(e){if(!/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw Error(lJ(7));if(void 0===e.type)throw Error(lJ(8));if(u)throw Error(lJ(9));try{u=!0,a=o(a,e)}finally{u=!1}for(var t=s=l,r=0;r<t.length;r++)(0,t[r])();return e}return(// reducer returns their initial state. This effectively populates
// the initial state tree.
p({type:lQ.INIT}),(i={dispatch:p,subscribe:f,getState:d,replaceReducer:/**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */function(e){if("function"!=typeof e)throw Error(lJ(10));o=e,// Any reducers that existed in both the new and old rootReducer
// will receive the previous state. This effectively populates
// the new state tree with any relevant data from the old one.
p({type:lQ.REPLACE})}})[lG]=/**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */function(){var e;return(e={/**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */subscribe:function(e){if("object"!=typeof e||null===e)throw Error(lJ(11));function t(){e.next&&e.next(d())}return t(),{unsubscribe:f(t)}}})[lG]=function(){return this},e}// When a store is created, an "INIT" action is dispatched so that every
,i)}(t,void 0===c?void 0:c,m.apply(void 0,y))}({reducer:{// todo
auth:uE,trending:uC,gpt:uL}}),uH=/*@__PURE__*/c($).createRoot(document.getElementById("root"));uH.render(/*#__PURE__*/(0,z.jsx)(function({store:e,context:t,children:r,serverState:n,stabilityCheck:i="once",noopCheck:o="once"}){let a=H.useMemo(()=>{let t=function(e,t){let r;let n=tM,i=0,o=!1;// Reasons to keep the subscription active
function a(){u.onStateChange&&u.onStateChange()}function s(){i++,r||(r=t?t.addNestedSub(a):e.subscribe(a),n=// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants
function(){let e=tE(),t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let e=t;for(;e;)e.callback(),e=e.next})},get(){let e=[],r=t;for(;r;)e.push(r),r=r.next;return e},subscribe(e){let n=!0,i=r={callback:e,next:null,prev:r};return i.prev?i.prev.next=i:t=i,function(){n&&null!==t&&(n=!1,i.next?i.next.prev=i.prev:r=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}())}function l(){i--,r&&0===i&&(r(),r=void 0,n.clear(),n=tM)}let u={addNestedSub:function(e){s();let t=n.subscribe(e),r=!1;// cleanup nested sub
return()=>{r||(r=!0,t(),l())}},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:a,isSubscribed:function(){return o},trySubscribe:function(){o||(o=!0,s())},tryUnsubscribe:function(){o&&(o=!1,l())},getListeners:()=>n};return u}(e);return{store:e,subscription:t,getServerState:n?()=>n:void 0,stabilityCheck:i,noopCheck:o}},[e,n,i,o]),s=H.useMemo(()=>e.getState(),[e]);return tD(()=>{let{subscription:t}=a;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),s!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}},[a,s]),/*#__PURE__*/H.createElement((t||tk).Provider,{value:a},r)},{store:uV,children:/*#__PURE__*/(0,z.jsx)(/**
 * Given a Remix Router instance, render the appropriate UI
 */function(e){let{fallbackElement:t,router:r,future:n}=e,[i,o]=H.useState(r.state),[a,s]=H.useState(),[l,u]=H.useState({isTransitioning:!1}),[c,d]=H.useState(),[f,p]=H.useState(),[h,m]=H.useState(),g=H.useRef(new Map),{v7_startTransition:y}=n||{},v=H.useCallback(e=>{y&&tg?tg(e):e()},[y]),b=H.useCallback((e,t)=>{let{deletedFetchers:n,unstable_viewTransitionOpts:i}=t;n.forEach(e=>g.current.delete(e)),e.fetchers.forEach((e,t)=>{void 0!==e.data&&g.current.set(t,e.data)}),i&&null!=r.window&&"function"==typeof r.window.document.startViewTransition?f&&c?(// Interrupting an in-progress transition, cancel and let everything flush
// out, and then kick off a new transition from the interruption state
c.resolve(),f.skipTransition(),m({state:e,currentLocation:i.currentLocation,nextLocation:i.nextLocation})):(// Completed navigation update with opted-in view transitions, let 'er rip
s(e),u({isTransitioning:!0,currentLocation:i.currentLocation,nextLocation:i.nextLocation})):v(()=>o(e))},[r.window,f,c,g,v]);// Need to use a layout effect here so we are subscribed early enough to
// pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
H.useLayoutEffect(()=>r.subscribe(b),[r,b]),// When we start a view transition, create a Deferred we can use for the
// eventual "completed" render
H.useEffect(()=>{l.isTransitioning&&d(new ty)},[l.isTransitioning]),// Once the deferred is created, kick off startViewTransition() to update the
// DOM and then wait on the Deferred to resolve (indicating the DOM update has
// happened)
H.useEffect(()=>{if(c&&a&&r.window){let e=c.promise,t=r.window.document.startViewTransition(async()=>{v(()=>o(a)),await e});t.finished.finally(()=>{d(void 0),p(void 0),s(void 0),u({isTransitioning:!1})}),p(t)}},[v,a,c,r.window]),// When the new location finally renders and is committed to the DOM, this
// effect will run to resolve the transition
H.useEffect(()=>{c&&a&&i.location.key===a.location.key&&c.resolve()},[c,f,i.location,a]),// If we get interrupted with a new navigation during a transition, we skip
// the active transition, let it cleanup, then kick it off again here
H.useEffect(()=>{!l.isTransitioning&&h&&(s(h.state),u({isTransitioning:!0,currentLocation:h.currentLocation,nextLocation:h.nextLocation}),m(void 0))},[l.isTransitioning,h]);let w=H.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:e=>r.navigate(e),push:(e,t,n)=>r.navigate(e,{state:t,preventScrollReset:null==n?void 0:n.preventScrollReset}),replace:(e,t,n)=>r.navigate(e,{replace:!0,state:t,preventScrollReset:null==n?void 0:n.preventScrollReset})}),[r]),x=r.basename||"/",_=H.useMemo(()=>({router:r,navigator:w,static:!1,basename:x}),[r,w,x]);// The fragment and {null} here are important!  We need them to keep React 18's
// useId happy when we are server-rendering since we may have a <script> here
// containing the hydrated server-side staticContext (from StaticRouterProvider).
// useId relies on the component tree structure to generate deterministic id's
// so we need to ensure it remains the same on the client even though
// we don't need the <script> tag
return /*#__PURE__*/H.createElement(H.Fragment,null,/*#__PURE__*/H.createElement(e2.Provider,{value:_},/*#__PURE__*/H.createElement(e3.Provider,{value:i},/*#__PURE__*/H.createElement(tm.Provider,{value:g.current},/*#__PURE__*/H.createElement(th.Provider,{value:l},/*#__PURE__*/H.createElement(td,{basename:x,location:i.location,navigationType:i.historyAction,navigator:w},i.initialized?/*#__PURE__*/H.createElement(tv,{routes:r.routes,state:i}):t))))),null)},{router:u$})}));//# sourceMappingURL=index.0901eaf6.js.map

//# sourceMappingURL=index.0901eaf6.js.map

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function yT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var a_={exports:{}},Pu={},l_={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pa=Symbol.for("react.element"),_T=Symbol.for("react.portal"),vT=Symbol.for("react.fragment"),wT=Symbol.for("react.strict_mode"),ET=Symbol.for("react.profiler"),TT=Symbol.for("react.provider"),IT=Symbol.for("react.context"),ST=Symbol.for("react.forward_ref"),AT=Symbol.for("react.suspense"),kT=Symbol.for("react.memo"),RT=Symbol.for("react.lazy"),ym=Symbol.iterator;function xT(t){return t===null||typeof t!="object"?null:(t=ym&&t[ym]||t["@@iterator"],typeof t=="function"?t:null)}var u_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},c_=Object.assign,h_={};function Ds(t,e,n){this.props=t,this.context=e,this.refs=h_,this.updater=n||u_}Ds.prototype.isReactComponent={};Ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function d_(){}d_.prototype=Ds.prototype;function jd(t,e,n){this.props=t,this.context=e,this.refs=h_,this.updater=n||u_}var Ud=jd.prototype=new d_;Ud.constructor=jd;c_(Ud,Ds.prototype);Ud.isPureReactComponent=!0;var _m=Array.isArray,f_=Object.prototype.hasOwnProperty,zd={current:null},p_={key:!0,ref:!0,__self:!0,__source:!0};function m_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)f_.call(e,r)&&!p_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:pa,type:t,key:s,ref:o,props:i,_owner:zd.current}}function CT(t,e){return{$$typeof:pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bd(t){return typeof t=="object"&&t!==null&&t.$$typeof===pa}function PT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vm=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?PT(""+t.key):e.toString(36)}function yl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pa:case _T:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xc(o,0):r,_m(i)?(n="",t!=null&&(n=t.replace(vm,"$&/")+"/"),yl(i,e,n,"",function(h){return h})):i!=null&&(Bd(i)&&(i=CT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",_m(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+xc(s,l);o+=yl(s,e,n,u,i)}else if(u=xT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+xc(s,l++),o+=yl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ha(t,e,n){if(t==null)return t;var r=[],i=0;return yl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function bT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},_l={transition:null},NT={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:_l,ReactCurrentOwner:zd};function g_(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:Ha,forEach:function(t,e,n){Ha(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ha(t,function(){e++}),e},toArray:function(t){return Ha(t,function(e){return e})||[]},only:function(t){if(!Bd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=Ds;he.Fragment=vT;he.Profiler=ET;he.PureComponent=jd;he.StrictMode=wT;he.Suspense=AT;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NT;he.act=g_;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=c_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)f_.call(e,u)&&!p_.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:pa,type:t.type,key:i,ref:s,props:r,_owner:o}};he.createContext=function(t){return t={$$typeof:IT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:TT,_context:t},t.Consumer=t};he.createElement=m_;he.createFactory=function(t){var e=m_.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:ST,render:t}};he.isValidElement=Bd;he.lazy=function(t){return{$$typeof:RT,_payload:{_status:-1,_result:t},_init:bT}};he.memo=function(t,e){return{$$typeof:kT,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=_l.transition;_l.transition={};try{t()}finally{_l.transition=e}};he.unstable_act=g_;he.useCallback=function(t,e){return Rt.current.useCallback(t,e)};he.useContext=function(t){return Rt.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};he.useEffect=function(t,e){return Rt.current.useEffect(t,e)};he.useId=function(){return Rt.current.useId()};he.useImperativeHandle=function(t,e,n){return Rt.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return Rt.current.useMemo(t,e)};he.useReducer=function(t,e,n){return Rt.current.useReducer(t,e,n)};he.useRef=function(t){return Rt.current.useRef(t)};he.useState=function(t){return Rt.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return Rt.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return Rt.current.useTransition()};he.version="18.3.1";l_.exports=he;var B=l_.exports;const DT=yT(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VT=B,OT=Symbol.for("react.element"),LT=Symbol.for("react.fragment"),MT=Object.prototype.hasOwnProperty,FT=VT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jT={key:!0,ref:!0,__self:!0,__source:!0};function y_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)MT.call(e,r)&&!jT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:OT,type:t,key:s,ref:o,props:i,_owner:FT.current}}Pu.Fragment=LT;Pu.jsx=y_;Pu.jsxs=y_;a_.exports=Pu;var g=a_.exports,gh={},__={exports:{}},$t={},v_={exports:{}},w_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,X){var Z=H.length;H.push(X);e:for(;0<Z;){var ge=Z-1>>>1,fe=H[ge];if(0<i(fe,X))H[ge]=X,H[Z]=fe,Z=ge;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var X=H[0],Z=H.pop();if(Z!==X){H[0]=Z;e:for(var ge=0,fe=H.length,Tt=fe>>>1;ge<Tt;){var $=2*(ge+1)-1,ie=H[$],q=$+1,se=H[q];if(0>i(ie,Z))q<fe&&0>i(se,ie)?(H[ge]=se,H[q]=Z,ge=q):(H[ge]=ie,H[$]=Z,ge=$);else if(q<fe&&0>i(se,Z))H[ge]=se,H[q]=Z,ge=q;else break e}}return X}function i(H,X){var Z=H.sortIndex-X.sortIndex;return Z!==0?Z:H.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,y=3,A=!1,x=!1,b=!1,V=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(H){for(var X=n(h);X!==null;){if(X.callback===null)r(h);else if(X.startTime<=H)r(h),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(h)}}function D(H){if(b=!1,R(H),!x)if(n(u)!==null)x=!0,tn(M);else{var X=n(h);X!==null&&ft(D,X.startTime-H)}}function M(H,X){x=!1,b&&(b=!1,S(_),_=-1),A=!0;var Z=y;try{for(R(X),p=n(u);p!==null&&(!(p.expirationTime>X)||H&&!k());){var ge=p.callback;if(typeof ge=="function"){p.callback=null,y=p.priorityLevel;var fe=ge(p.expirationTime<=X);X=t.unstable_now(),typeof fe=="function"?p.callback=fe:p===n(u)&&r(u),R(X)}else r(u);p=n(u)}if(p!==null)var Tt=!0;else{var $=n(h);$!==null&&ft(D,$.startTime-X),Tt=!1}return Tt}finally{p=null,y=Z,A=!1}}var U=!1,v=null,_=-1,E=5,I=-1;function k(){return!(t.unstable_now()-I<E)}function C(){if(v!==null){var H=t.unstable_now();I=H;var X=!0;try{X=v(!0,H)}finally{X?T():(U=!1,v=null)}}else U=!1}var T;if(typeof w=="function")T=function(){w(C)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,Ue=Se.port2;Se.port1.onmessage=C,T=function(){Ue.postMessage(null)}}else T=function(){V(C,0)};function tn(H){v=H,U||(U=!0,T())}function ft(H,X){_=V(function(){H(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){x||A||(x=!0,tn(M))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(H){switch(y){case 1:case 2:case 3:var X=3;break;default:X=y}var Z=y;y=X;try{return H()}finally{y=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,X){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Z=y;y=H;try{return X()}finally{y=Z}},t.unstable_scheduleCallback=function(H,X,Z){var ge=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ge+Z:ge):Z=ge,H){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=Z+fe,H={id:f++,callback:X,priorityLevel:H,startTime:Z,expirationTime:fe,sortIndex:-1},Z>ge?(H.sortIndex=Z,e(h,H),n(u)===null&&H===n(h)&&(b?(S(_),_=-1):b=!0,ft(D,Z-ge))):(H.sortIndex=fe,e(u,H),x||A||(x=!0,tn(M))),H},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(H){var X=y;return function(){var Z=y;y=X;try{return H.apply(this,arguments)}finally{y=Z}}}})(w_);v_.exports=w_;var UT=v_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zT=B,Bt=UT;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var E_=new Set,Uo={};function bi(t,e){ws(t,e),ws(t+"Capture",e)}function ws(t,e){for(Uo[t]=e,t=0;t<e.length;t++)E_.add(e[t])}var Xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yh=Object.prototype.hasOwnProperty,BT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wm={},Em={};function $T(t){return yh.call(Em,t)?!0:yh.call(wm,t)?!1:BT.test(t)?Em[t]=!0:(wm[t]=!0,!1)}function WT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function HT(t,e,n,r){if(e===null||typeof e>"u"||WT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ct={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ct[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ct[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ct[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ct[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ct[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ct[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ct[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ct[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ct[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var $d=/[\-:]([a-z])/g;function Wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($d,Wd);ct[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($d,Wd);ct[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($d,Wd);ct[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ct[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});ct.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ct[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hd(t,e,n,r){var i=ct.hasOwnProperty(e)?ct[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(HT(e,n,i,r)&&(n=null),r||i===null?$T(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sr=zT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qa=Symbol.for("react.element"),Yi=Symbol.for("react.portal"),Xi=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),_h=Symbol.for("react.profiler"),T_=Symbol.for("react.provider"),I_=Symbol.for("react.context"),Gd=Symbol.for("react.forward_ref"),vh=Symbol.for("react.suspense"),wh=Symbol.for("react.suspense_list"),Kd=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),S_=Symbol.for("react.offscreen"),Tm=Symbol.iterator;function ao(t){return t===null||typeof t!="object"?null:(t=Tm&&t[Tm]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,Cc;function _o(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var Pc=!1;function bc(t,e){if(!t||Pc)return"";Pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Pc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_o(t):""}function qT(t){switch(t.tag){case 5:return _o(t.type);case 16:return _o("Lazy");case 13:return _o("Suspense");case 19:return _o("SuspenseList");case 0:case 2:case 15:return t=bc(t.type,!1),t;case 11:return t=bc(t.type.render,!1),t;case 1:return t=bc(t.type,!0),t;default:return""}}function Eh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xi:return"Fragment";case Yi:return"Portal";case _h:return"Profiler";case qd:return"StrictMode";case vh:return"Suspense";case wh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case I_:return(t.displayName||"Context")+".Consumer";case T_:return(t._context.displayName||"Context")+".Provider";case Gd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kd:return e=t.displayName||null,e!==null?e:Eh(t.type)||"Memo";case pr:e=t._payload,t=t._init;try{return Eh(t(e))}catch{}}return null}function GT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eh(e);case 8:return e===qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function A_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function KT(t){var e=A_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ga(t){t._valueTracker||(t._valueTracker=KT(t))}function k_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=A_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Th(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Im(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function R_(t,e){e=e.checked,e!=null&&Hd(t,"checked",e,!1)}function Ih(t,e){R_(t,e);var n=Lr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sh(t,e.type,Lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sh(t,e,n){(e!=="number"||jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vo=Array.isArray;function ls(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Lr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ah(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Am(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(vo(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Lr(n)}}function x_(t,e){var n=Lr(e.value),r=Lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function km(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function C_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?C_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ka,P_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ka=Ka||document.createElement("div"),Ka.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ka.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},QT=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(t){QT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ko[e]=ko[t]})});function b_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ko.hasOwnProperty(t)&&ko[t]?(""+e).trim():e+"px"}function N_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=b_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var YT=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rh(t,e){if(e){if(YT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function xh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ch=null;function Qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ph=null,us=null,cs=null;function Rm(t){if(t=ya(t)){if(typeof Ph!="function")throw Error(j(280));var e=t.stateNode;e&&(e=Ou(e),Ph(t.stateNode,t.type,e))}}function D_(t){us?cs?cs.push(t):cs=[t]:us=t}function V_(){if(us){var t=us,e=cs;if(cs=us=null,Rm(t),e)for(t=0;t<e.length;t++)Rm(e[t])}}function O_(t,e){return t(e)}function L_(){}var Nc=!1;function M_(t,e,n){if(Nc)return t(e,n);Nc=!0;try{return O_(t,e,n)}finally{Nc=!1,(us!==null||cs!==null)&&(L_(),V_())}}function Bo(t,e){var n=t.stateNode;if(n===null)return null;var r=Ou(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var bh=!1;if(Xn)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){bh=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{bh=!1}function XT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ro=!1,Ul=null,zl=!1,Nh=null,JT={onError:function(t){Ro=!0,Ul=t}};function ZT(t,e,n,r,i,s,o,l,u){Ro=!1,Ul=null,XT.apply(JT,arguments)}function e1(t,e,n,r,i,s,o,l,u){if(ZT.apply(this,arguments),Ro){if(Ro){var h=Ul;Ro=!1,Ul=null}else throw Error(j(198));zl||(zl=!0,Nh=h)}}function Ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function F_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xm(t){if(Ni(t)!==t)throw Error(j(188))}function t1(t){var e=t.alternate;if(!e){if(e=Ni(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return xm(i),t;if(s===r)return xm(i),e;s=s.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function j_(t){return t=t1(t),t!==null?U_(t):null}function U_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=U_(t);if(e!==null)return e;t=t.sibling}return null}var z_=Bt.unstable_scheduleCallback,Cm=Bt.unstable_cancelCallback,n1=Bt.unstable_shouldYield,r1=Bt.unstable_requestPaint,je=Bt.unstable_now,i1=Bt.unstable_getCurrentPriorityLevel,Yd=Bt.unstable_ImmediatePriority,B_=Bt.unstable_UserBlockingPriority,Bl=Bt.unstable_NormalPriority,s1=Bt.unstable_LowPriority,$_=Bt.unstable_IdlePriority,bu=null,kn=null;function o1(t){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(bu,t,void 0,(t.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:u1,a1=Math.log,l1=Math.LN2;function u1(t){return t>>>=0,t===0?32:31-(a1(t)/l1|0)|0}var Qa=64,Ya=4194304;function wo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $l(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=wo(l):(s&=o,s!==0&&(r=wo(s)))}else o=n&~i,o!==0?r=wo(o):s!==0&&(r=wo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dn(e),i=1<<n,r|=t[n],e&=~i;return r}function c1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function h1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=c1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Dh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function W_(){var t=Qa;return Qa<<=1,!(Qa&4194240)&&(Qa=64),t}function Dc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dn(e),t[e]=n}function d1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Xd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ve=0;function H_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var q_,Jd,G_,K_,Q_,Vh=!1,Xa=[],Ir=null,Sr=null,Ar=null,$o=new Map,Wo=new Map,gr=[],f1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pm(t,e){switch(t){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":$o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(e.pointerId)}}function uo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ya(e),e!==null&&Jd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function p1(t,e,n,r,i){switch(e){case"focusin":return Ir=uo(Ir,t,e,n,r,i),!0;case"dragenter":return Sr=uo(Sr,t,e,n,r,i),!0;case"mouseover":return Ar=uo(Ar,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return $o.set(s,uo($o.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Wo.set(s,uo(Wo.get(s)||null,t,e,n,r,i)),!0}return!1}function Y_(t){var e=hi(t.target);if(e!==null){var n=Ni(e);if(n!==null){if(e=n.tag,e===13){if(e=F_(n),e!==null){t.blockedOn=e,Q_(t.priority,function(){G_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Oh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ch=r,n.target.dispatchEvent(r),Ch=null}else return e=ya(n),e!==null&&Jd(e),t.blockedOn=n,!1;e.shift()}return!0}function bm(t,e,n){vl(t)&&n.delete(e)}function m1(){Vh=!1,Ir!==null&&vl(Ir)&&(Ir=null),Sr!==null&&vl(Sr)&&(Sr=null),Ar!==null&&vl(Ar)&&(Ar=null),$o.forEach(bm),Wo.forEach(bm)}function co(t,e){t.blockedOn===e&&(t.blockedOn=null,Vh||(Vh=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,m1)))}function Ho(t){function e(i){return co(i,t)}if(0<Xa.length){co(Xa[0],t);for(var n=1;n<Xa.length;n++){var r=Xa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ir!==null&&co(Ir,t),Sr!==null&&co(Sr,t),Ar!==null&&co(Ar,t),$o.forEach(e),Wo.forEach(e),n=0;n<gr.length;n++)r=gr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<gr.length&&(n=gr[0],n.blockedOn===null);)Y_(n),n.blockedOn===null&&gr.shift()}var hs=sr.ReactCurrentBatchConfig,Wl=!0;function g1(t,e,n,r){var i=ve,s=hs.transition;hs.transition=null;try{ve=1,Zd(t,e,n,r)}finally{ve=i,hs.transition=s}}function y1(t,e,n,r){var i=ve,s=hs.transition;hs.transition=null;try{ve=4,Zd(t,e,n,r)}finally{ve=i,hs.transition=s}}function Zd(t,e,n,r){if(Wl){var i=Oh(t,e,n,r);if(i===null)$c(t,e,r,Hl,n),Pm(t,r);else if(p1(i,t,e,n,r))r.stopPropagation();else if(Pm(t,r),e&4&&-1<f1.indexOf(t)){for(;i!==null;){var s=ya(i);if(s!==null&&q_(s),s=Oh(t,e,n,r),s===null&&$c(t,e,r,Hl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else $c(t,e,r,null,n)}}var Hl=null;function Oh(t,e,n,r){if(Hl=null,t=Qd(r),t=hi(t),t!==null)if(e=Ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=F_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hl=t,null}function X_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(i1()){case Yd:return 1;case B_:return 4;case Bl:case s1:return 16;case $_:return 536870912;default:return 16}default:return 16}}var Er=null,ef=null,wl=null;function J_(){if(wl)return wl;var t,e=ef,n=e.length,r,i="value"in Er?Er.value:Er.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return wl=i.slice(t,1<r?1-r:void 0)}function El(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ja(){return!0}function Nm(){return!1}function Wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ja:Nm,this.isPropagationStopped=Nm,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),e}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=Wt(Vs),ga=De({},Vs,{view:0,detail:0}),_1=Wt(ga),Vc,Oc,ho,Nu=De({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(Vc=t.screenX-ho.screenX,Oc=t.screenY-ho.screenY):Oc=Vc=0,ho=t),Vc)},movementY:function(t){return"movementY"in t?t.movementY:Oc}}),Dm=Wt(Nu),v1=De({},Nu,{dataTransfer:0}),w1=Wt(v1),E1=De({},ga,{relatedTarget:0}),Lc=Wt(E1),T1=De({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),I1=Wt(T1),S1=De({},Vs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),A1=Wt(S1),k1=De({},Vs,{data:0}),Vm=Wt(k1),R1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=C1[t])?!!e[t]:!1}function nf(){return P1}var b1=De({},ga,{key:function(t){if(t.key){var e=R1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=El(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?x1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?El(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?El(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),N1=Wt(b1),D1=De({},Nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Om=Wt(D1),V1=De({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),O1=Wt(V1),L1=De({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),M1=Wt(L1),F1=De({},Nu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j1=Wt(F1),U1=[9,13,27,32],rf=Xn&&"CompositionEvent"in window,xo=null;Xn&&"documentMode"in document&&(xo=document.documentMode);var z1=Xn&&"TextEvent"in window&&!xo,Z_=Xn&&(!rf||xo&&8<xo&&11>=xo),Lm=" ",Mm=!1;function ev(t,e){switch(t){case"keyup":return U1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ji=!1;function B1(t,e){switch(t){case"compositionend":return tv(e);case"keypress":return e.which!==32?null:(Mm=!0,Lm);case"textInput":return t=e.data,t===Lm&&Mm?null:t;default:return null}}function $1(t,e){if(Ji)return t==="compositionend"||!rf&&ev(t,e)?(t=J_(),wl=ef=Er=null,Ji=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Z_&&e.locale!=="ko"?null:e.data;default:return null}}var W1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!W1[t.type]:e==="textarea"}function nv(t,e,n,r){D_(r),e=ql(e,"onChange"),0<e.length&&(n=new tf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Co=null,qo=null;function H1(t){fv(t,0)}function Du(t){var e=ts(t);if(k_(e))return t}function q1(t,e){if(t==="change")return e}var rv=!1;if(Xn){var Mc;if(Xn){var Fc="oninput"in document;if(!Fc){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),Fc=typeof jm.oninput=="function"}Mc=Fc}else Mc=!1;rv=Mc&&(!document.documentMode||9<document.documentMode)}function Um(){Co&&(Co.detachEvent("onpropertychange",iv),qo=Co=null)}function iv(t){if(t.propertyName==="value"&&Du(qo)){var e=[];nv(e,qo,t,Qd(t)),M_(H1,e)}}function G1(t,e,n){t==="focusin"?(Um(),Co=e,qo=n,Co.attachEvent("onpropertychange",iv)):t==="focusout"&&Um()}function K1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Du(qo)}function Q1(t,e){if(t==="click")return Du(e)}function Y1(t,e){if(t==="input"||t==="change")return Du(e)}function X1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:X1;function Go(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yh.call(e,i)||!gn(t[i],e[i]))return!1}return!0}function zm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bm(t,e){var n=zm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zm(n)}}function sv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?sv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ov(){for(var t=window,e=jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jl(t.document)}return e}function sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function J1(t){var e=ov(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&sv(n.ownerDocument.documentElement,n)){if(r!==null&&sf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Bm(n,s);var o=Bm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Z1=Xn&&"documentMode"in document&&11>=document.documentMode,Zi=null,Lh=null,Po=null,Mh=!1;function $m(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mh||Zi==null||Zi!==jl(r)||(r=Zi,"selectionStart"in r&&sf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Po&&Go(Po,r)||(Po=r,r=ql(Lh,"onSelect"),0<r.length&&(e=new tf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zi)))}function Za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var es={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},jc={},av={};Xn&&(av=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function Vu(t){if(jc[t])return jc[t];if(!es[t])return t;var e=es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in av)return jc[t]=e[n];return t}var lv=Vu("animationend"),uv=Vu("animationiteration"),cv=Vu("animationstart"),hv=Vu("transitionend"),dv=new Map,Wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(t,e){dv.set(t,e),bi(e,[t])}for(var Uc=0;Uc<Wm.length;Uc++){var zc=Wm[Uc],eI=zc.toLowerCase(),tI=zc[0].toUpperCase()+zc.slice(1);Gr(eI,"on"+tI)}Gr(lv,"onAnimationEnd");Gr(uv,"onAnimationIteration");Gr(cv,"onAnimationStart");Gr("dblclick","onDoubleClick");Gr("focusin","onFocus");Gr("focusout","onBlur");Gr(hv,"onTransitionEnd");ws("onMouseEnter",["mouseout","mouseover"]);ws("onMouseLeave",["mouseout","mouseover"]);ws("onPointerEnter",["pointerout","pointerover"]);ws("onPointerLeave",["pointerout","pointerover"]);bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function Hm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,e1(r,e,void 0,t),t.currentTarget=null}function fv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Hm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Hm(i,l,h),s=u}}}if(zl)throw t=Nh,zl=!1,Nh=null,t}function ke(t,e){var n=e[Bh];n===void 0&&(n=e[Bh]=new Set);var r=t+"__bubble";n.has(r)||(pv(e,t,2,!1),n.add(r))}function Bc(t,e,n){var r=0;e&&(r|=4),pv(n,t,r,e)}var el="_reactListening"+Math.random().toString(36).slice(2);function Ko(t){if(!t[el]){t[el]=!0,E_.forEach(function(n){n!=="selectionchange"&&(nI.has(n)||Bc(n,!1,t),Bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[el]||(e[el]=!0,Bc("selectionchange",!1,e))}}function pv(t,e,n,r){switch(X_(e)){case 1:var i=g1;break;case 4:i=y1;break;default:i=Zd}n=i.bind(null,e,n,t),i=void 0,!bh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $c(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=hi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}M_(function(){var h=s,f=Qd(n),p=[];e:{var y=dv.get(t);if(y!==void 0){var A=tf,x=t;switch(t){case"keypress":if(El(n)===0)break e;case"keydown":case"keyup":A=N1;break;case"focusin":x="focus",A=Lc;break;case"focusout":x="blur",A=Lc;break;case"beforeblur":case"afterblur":A=Lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Dm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=w1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=O1;break;case lv:case uv:case cv:A=I1;break;case hv:A=M1;break;case"scroll":A=_1;break;case"wheel":A=j1;break;case"copy":case"cut":case"paste":A=A1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Om}var b=(e&4)!==0,V=!b&&t==="scroll",S=b?y!==null?y+"Capture":null:y;b=[];for(var w=h,R;w!==null;){R=w;var D=R.stateNode;if(R.tag===5&&D!==null&&(R=D,S!==null&&(D=Bo(w,S),D!=null&&b.push(Qo(w,D,R)))),V)break;w=w.return}0<b.length&&(y=new A(y,x,null,n,f),p.push({event:y,listeners:b}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",y&&n!==Ch&&(x=n.relatedTarget||n.fromElement)&&(hi(x)||x[Jn]))break e;if((A||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,A?(x=n.relatedTarget||n.toElement,A=h,x=x?hi(x):null,x!==null&&(V=Ni(x),x!==V||x.tag!==5&&x.tag!==6)&&(x=null)):(A=null,x=h),A!==x)){if(b=Dm,D="onMouseLeave",S="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(b=Om,D="onPointerLeave",S="onPointerEnter",w="pointer"),V=A==null?y:ts(A),R=x==null?y:ts(x),y=new b(D,w+"leave",A,n,f),y.target=V,y.relatedTarget=R,D=null,hi(f)===h&&(b=new b(S,w+"enter",x,n,f),b.target=R,b.relatedTarget=V,D=b),V=D,A&&x)t:{for(b=A,S=x,w=0,R=b;R;R=Wi(R))w++;for(R=0,D=S;D;D=Wi(D))R++;for(;0<w-R;)b=Wi(b),w--;for(;0<R-w;)S=Wi(S),R--;for(;w--;){if(b===S||S!==null&&b===S.alternate)break t;b=Wi(b),S=Wi(S)}b=null}else b=null;A!==null&&qm(p,y,A,b,!1),x!==null&&V!==null&&qm(p,V,x,b,!0)}}e:{if(y=h?ts(h):window,A=y.nodeName&&y.nodeName.toLowerCase(),A==="select"||A==="input"&&y.type==="file")var M=q1;else if(Fm(y))if(rv)M=Y1;else{M=K1;var U=G1}else(A=y.nodeName)&&A.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(M=Q1);if(M&&(M=M(t,h))){nv(p,M,n,f);break e}U&&U(t,y,h),t==="focusout"&&(U=y._wrapperState)&&U.controlled&&y.type==="number"&&Sh(y,"number",y.value)}switch(U=h?ts(h):window,t){case"focusin":(Fm(U)||U.contentEditable==="true")&&(Zi=U,Lh=h,Po=null);break;case"focusout":Po=Lh=Zi=null;break;case"mousedown":Mh=!0;break;case"contextmenu":case"mouseup":case"dragend":Mh=!1,$m(p,n,f);break;case"selectionchange":if(Z1)break;case"keydown":case"keyup":$m(p,n,f)}var v;if(rf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ji?ev(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Z_&&n.locale!=="ko"&&(Ji||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ji&&(v=J_()):(Er=f,ef="value"in Er?Er.value:Er.textContent,Ji=!0)),U=ql(h,_),0<U.length&&(_=new Vm(_,t,null,n,f),p.push({event:_,listeners:U}),v?_.data=v:(v=tv(n),v!==null&&(_.data=v)))),(v=z1?B1(t,n):$1(t,n))&&(h=ql(h,"onBeforeInput"),0<h.length&&(f=new Vm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=v))}fv(p,e)})}function Qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ql(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Bo(t,n),s!=null&&r.unshift(Qo(t,s,i)),s=Bo(t,e),s!=null&&r.push(Qo(t,s,i))),t=t.return}return r}function Wi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Bo(n,s),u!=null&&o.unshift(Qo(n,u,l))):i||(u=Bo(n,s),u!=null&&o.push(Qo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var rI=/\r\n?/g,iI=/\u0000|\uFFFD/g;function Gm(t){return(typeof t=="string"?t:""+t).replace(rI,`
`).replace(iI,"")}function tl(t,e,n){if(e=Gm(e),Gm(t)!==e&&n)throw Error(j(425))}function Gl(){}var Fh=null,jh=null;function Uh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zh=typeof setTimeout=="function"?setTimeout:void 0,sI=typeof clearTimeout=="function"?clearTimeout:void 0,Km=typeof Promise=="function"?Promise:void 0,oI=typeof queueMicrotask=="function"?queueMicrotask:typeof Km<"u"?function(t){return Km.resolve(null).then(t).catch(aI)}:zh;function aI(t){setTimeout(function(){throw t})}function Wc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ho(e)}function kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Qm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),An="__reactFiber$"+Os,Yo="__reactProps$"+Os,Jn="__reactContainer$"+Os,Bh="__reactEvents$"+Os,lI="__reactListeners$"+Os,uI="__reactHandles$"+Os;function hi(t){var e=t[An];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Jn]||n[An]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Qm(t);t!==null;){if(n=t[An])return n;t=Qm(t)}return e}t=n,n=t.parentNode}return null}function ya(t){return t=t[An]||t[Jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function Ou(t){return t[Yo]||null}var $h=[],ns=-1;function Kr(t){return{current:t}}function xe(t){0>ns||(t.current=$h[ns],$h[ns]=null,ns--)}function Ie(t,e){ns++,$h[ns]=t.current,t.current=e}var Mr={},wt=Kr(Mr),Vt=Kr(!1),Ei=Mr;function Es(t,e){var n=t.type.contextTypes;if(!n)return Mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ot(t){return t=t.childContextTypes,t!=null}function Kl(){xe(Vt),xe(wt)}function Ym(t,e,n){if(wt.current!==Mr)throw Error(j(168));Ie(wt,e),Ie(Vt,n)}function mv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(j(108,GT(t)||"Unknown",i));return De({},n,r)}function Ql(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,Ei=wt.current,Ie(wt,t),Ie(Vt,Vt.current),!0}function Xm(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=mv(t,e,Ei),r.__reactInternalMemoizedMergedChildContext=t,xe(Vt),xe(wt),Ie(wt,t)):xe(Vt),Ie(Vt,n)}var $n=null,Lu=!1,Hc=!1;function gv(t){$n===null?$n=[t]:$n.push(t)}function cI(t){Lu=!0,gv(t)}function Qr(){if(!Hc&&$n!==null){Hc=!0;var t=0,e=ve;try{var n=$n;for(ve=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$n=null,Lu=!1}catch(i){throw $n!==null&&($n=$n.slice(t+1)),z_(Yd,Qr),i}finally{ve=e,Hc=!1}}return null}var rs=[],is=0,Yl=null,Xl=0,Ht=[],qt=0,Ti=null,Hn=1,qn="";function li(t,e){rs[is++]=Xl,rs[is++]=Yl,Yl=t,Xl=e}function yv(t,e,n){Ht[qt++]=Hn,Ht[qt++]=qn,Ht[qt++]=Ti,Ti=t;var r=Hn;t=qn;var i=32-dn(r)-1;r&=~(1<<i),n+=1;var s=32-dn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Hn=1<<32-dn(e)+i|n<<i|r,qn=s+t}else Hn=1<<s|n<<i|r,qn=t}function of(t){t.return!==null&&(li(t,1),yv(t,1,0))}function af(t){for(;t===Yl;)Yl=rs[--is],rs[is]=null,Xl=rs[--is],rs[is]=null;for(;t===Ti;)Ti=Ht[--qt],Ht[qt]=null,qn=Ht[--qt],Ht[qt]=null,Hn=Ht[--qt],Ht[qt]=null}var zt=null,jt=null,Ce=!1,un=null;function _v(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zt=t,jt=kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zt=t,jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ti!==null?{id:Hn,overflow:qn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zt=t,jt=null,!0):!1;default:return!1}}function Wh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hh(t){if(Ce){var e=jt;if(e){var n=e;if(!Jm(t,e)){if(Wh(t))throw Error(j(418));e=kr(n.nextSibling);var r=zt;e&&Jm(t,e)?_v(r,n):(t.flags=t.flags&-4097|2,Ce=!1,zt=t)}}else{if(Wh(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ce=!1,zt=t}}}function Zm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zt=t}function nl(t){if(t!==zt)return!1;if(!Ce)return Zm(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uh(t.type,t.memoizedProps)),e&&(e=jt)){if(Wh(t))throw vv(),Error(j(418));for(;e;)_v(t,e),e=kr(e.nextSibling)}if(Zm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){jt=kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}jt=null}}else jt=zt?kr(t.stateNode.nextSibling):null;return!0}function vv(){for(var t=jt;t;)t=kr(t.nextSibling)}function Ts(){jt=zt=null,Ce=!1}function lf(t){un===null?un=[t]:un.push(t)}var hI=sr.ReactCurrentBatchConfig;function fo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function rl(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function eg(t){var e=t._init;return e(t._payload)}function wv(t){function e(S,w){if(t){var R=S.deletions;R===null?(S.deletions=[w],S.flags|=16):R.push(w)}}function n(S,w){if(!t)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(S,w){return S=Pr(S,w),S.index=0,S.sibling=null,S}function s(S,w,R){return S.index=R,t?(R=S.alternate,R!==null?(R=R.index,R<w?(S.flags|=2,w):R):(S.flags|=2,w)):(S.flags|=1048576,w)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,w,R,D){return w===null||w.tag!==6?(w=Jc(R,S.mode,D),w.return=S,w):(w=i(w,R),w.return=S,w)}function u(S,w,R,D){var M=R.type;return M===Xi?f(S,w,R.props.children,D,R.key):w!==null&&(w.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===pr&&eg(M)===w.type)?(D=i(w,R.props),D.ref=fo(S,w,R),D.return=S,D):(D=xl(R.type,R.key,R.props,null,S.mode,D),D.ref=fo(S,w,R),D.return=S,D)}function h(S,w,R,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==R.containerInfo||w.stateNode.implementation!==R.implementation?(w=Zc(R,S.mode,D),w.return=S,w):(w=i(w,R.children||[]),w.return=S,w)}function f(S,w,R,D,M){return w===null||w.tag!==7?(w=_i(R,S.mode,D,M),w.return=S,w):(w=i(w,R),w.return=S,w)}function p(S,w,R){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Jc(""+w,S.mode,R),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case qa:return R=xl(w.type,w.key,w.props,null,S.mode,R),R.ref=fo(S,null,w),R.return=S,R;case Yi:return w=Zc(w,S.mode,R),w.return=S,w;case pr:var D=w._init;return p(S,D(w._payload),R)}if(vo(w)||ao(w))return w=_i(w,S.mode,R,null),w.return=S,w;rl(S,w)}return null}function y(S,w,R,D){var M=w!==null?w.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return M!==null?null:l(S,w,""+R,D);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case qa:return R.key===M?u(S,w,R,D):null;case Yi:return R.key===M?h(S,w,R,D):null;case pr:return M=R._init,y(S,w,M(R._payload),D)}if(vo(R)||ao(R))return M!==null?null:f(S,w,R,D,null);rl(S,R)}return null}function A(S,w,R,D,M){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(R)||null,l(w,S,""+D,M);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case qa:return S=S.get(D.key===null?R:D.key)||null,u(w,S,D,M);case Yi:return S=S.get(D.key===null?R:D.key)||null,h(w,S,D,M);case pr:var U=D._init;return A(S,w,R,U(D._payload),M)}if(vo(D)||ao(D))return S=S.get(R)||null,f(w,S,D,M,null);rl(w,D)}return null}function x(S,w,R,D){for(var M=null,U=null,v=w,_=w=0,E=null;v!==null&&_<R.length;_++){v.index>_?(E=v,v=null):E=v.sibling;var I=y(S,v,R[_],D);if(I===null){v===null&&(v=E);break}t&&v&&I.alternate===null&&e(S,v),w=s(I,w,_),U===null?M=I:U.sibling=I,U=I,v=E}if(_===R.length)return n(S,v),Ce&&li(S,_),M;if(v===null){for(;_<R.length;_++)v=p(S,R[_],D),v!==null&&(w=s(v,w,_),U===null?M=v:U.sibling=v,U=v);return Ce&&li(S,_),M}for(v=r(S,v);_<R.length;_++)E=A(v,S,_,R[_],D),E!==null&&(t&&E.alternate!==null&&v.delete(E.key===null?_:E.key),w=s(E,w,_),U===null?M=E:U.sibling=E,U=E);return t&&v.forEach(function(k){return e(S,k)}),Ce&&li(S,_),M}function b(S,w,R,D){var M=ao(R);if(typeof M!="function")throw Error(j(150));if(R=M.call(R),R==null)throw Error(j(151));for(var U=M=null,v=w,_=w=0,E=null,I=R.next();v!==null&&!I.done;_++,I=R.next()){v.index>_?(E=v,v=null):E=v.sibling;var k=y(S,v,I.value,D);if(k===null){v===null&&(v=E);break}t&&v&&k.alternate===null&&e(S,v),w=s(k,w,_),U===null?M=k:U.sibling=k,U=k,v=E}if(I.done)return n(S,v),Ce&&li(S,_),M;if(v===null){for(;!I.done;_++,I=R.next())I=p(S,I.value,D),I!==null&&(w=s(I,w,_),U===null?M=I:U.sibling=I,U=I);return Ce&&li(S,_),M}for(v=r(S,v);!I.done;_++,I=R.next())I=A(v,S,_,I.value,D),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?_:I.key),w=s(I,w,_),U===null?M=I:U.sibling=I,U=I);return t&&v.forEach(function(C){return e(S,C)}),Ce&&li(S,_),M}function V(S,w,R,D){if(typeof R=="object"&&R!==null&&R.type===Xi&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case qa:e:{for(var M=R.key,U=w;U!==null;){if(U.key===M){if(M=R.type,M===Xi){if(U.tag===7){n(S,U.sibling),w=i(U,R.props.children),w.return=S,S=w;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===pr&&eg(M)===U.type){n(S,U.sibling),w=i(U,R.props),w.ref=fo(S,U,R),w.return=S,S=w;break e}n(S,U);break}else e(S,U);U=U.sibling}R.type===Xi?(w=_i(R.props.children,S.mode,D,R.key),w.return=S,S=w):(D=xl(R.type,R.key,R.props,null,S.mode,D),D.ref=fo(S,w,R),D.return=S,S=D)}return o(S);case Yi:e:{for(U=R.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===R.containerInfo&&w.stateNode.implementation===R.implementation){n(S,w.sibling),w=i(w,R.children||[]),w.return=S,S=w;break e}else{n(S,w);break}else e(S,w);w=w.sibling}w=Zc(R,S.mode,D),w.return=S,S=w}return o(S);case pr:return U=R._init,V(S,w,U(R._payload),D)}if(vo(R))return x(S,w,R,D);if(ao(R))return b(S,w,R,D);rl(S,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,w!==null&&w.tag===6?(n(S,w.sibling),w=i(w,R),w.return=S,S=w):(n(S,w),w=Jc(R,S.mode,D),w.return=S,S=w),o(S)):n(S,w)}return V}var Is=wv(!0),Ev=wv(!1),Jl=Kr(null),Zl=null,ss=null,uf=null;function cf(){uf=ss=Zl=null}function hf(t){var e=Jl.current;xe(Jl),t._currentValue=e}function qh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ds(t,e){Zl=t,uf=ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Dt=!0),t.firstContext=null)}function Zt(t){var e=t._currentValue;if(uf!==t)if(t={context:t,memoizedValue:e,next:null},ss===null){if(Zl===null)throw Error(j(308));ss=t,Zl.dependencies={lanes:0,firstContext:t}}else ss=ss.next=t;return e}var di=null;function df(t){di===null?di=[t]:di.push(t)}function Tv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,df(e)):(n.next=i.next,i.next=n),e.interleaved=n,Zn(t,r)}function Zn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mr=!1;function ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Zn(t,n)}return i=r.interleaved,i===null?(e.next=e,df(r)):(e.next=i.next,i.next=e),r.interleaved=e,Zn(t,n)}function Tl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xd(t,n)}}function tg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function eu(t,e,n,r){var i=t.updateQueue;mr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var y=l.lane,A=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,b=l;switch(y=e,A=n,b.tag){case 1:if(x=b.payload,typeof x=="function"){p=x.call(A,p,y);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,y=typeof x=="function"?x.call(A,p,y):x,y==null)break e;p=De({},p,y);break e;case 2:mr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else A={eventTime:A,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=p):f=f.next=A,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Si|=o,t.lanes=o,t.memoizedState=p}}function ng(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var _a={},Rn=Kr(_a),Xo=Kr(_a),Jo=Kr(_a);function fi(t){if(t===_a)throw Error(j(174));return t}function pf(t,e){switch(Ie(Jo,e),Ie(Xo,t),Ie(Rn,_a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kh(e,t)}xe(Rn),Ie(Rn,e)}function Ss(){xe(Rn),xe(Xo),xe(Jo)}function Sv(t){fi(Jo.current);var e=fi(Rn.current),n=kh(e,t.type);e!==n&&(Ie(Xo,t),Ie(Rn,n))}function mf(t){Xo.current===t&&(xe(Rn),xe(Xo))}var be=Kr(0);function tu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qc=[];function gf(){for(var t=0;t<qc.length;t++)qc[t]._workInProgressVersionPrimary=null;qc.length=0}var Il=sr.ReactCurrentDispatcher,Gc=sr.ReactCurrentBatchConfig,Ii=0,Ne=null,Xe=null,it=null,nu=!1,bo=!1,Zo=0,dI=0;function pt(){throw Error(j(321))}function yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gn(t[n],e[n]))return!1;return!0}function _f(t,e,n,r,i,s){if(Ii=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Il.current=t===null||t.memoizedState===null?gI:yI,t=n(r,i),bo){s=0;do{if(bo=!1,Zo=0,25<=s)throw Error(j(301));s+=1,it=Xe=null,e.updateQueue=null,Il.current=_I,t=n(r,i)}while(bo)}if(Il.current=ru,e=Xe!==null&&Xe.next!==null,Ii=0,it=Xe=Ne=null,nu=!1,e)throw Error(j(300));return t}function vf(){var t=Zo!==0;return Zo=0,t}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Ne.memoizedState=it=t:it=it.next=t,it}function en(){if(Xe===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var e=it===null?Ne.memoizedState:it.next;if(e!==null)it=e,Xe=t;else{if(t===null)throw Error(j(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},it===null?Ne.memoizedState=it=t:it=it.next=t}return it}function ea(t,e){return typeof e=="function"?e(t):e}function Kc(t){var e=en(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Ii&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ne.lanes|=f,Si|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,gn(r,e.memoizedState)||(Dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ne.lanes|=s,Si|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qc(t){var e=en(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gn(s,e.memoizedState)||(Dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Av(){}function kv(t,e){var n=Ne,r=en(),i=e(),s=!gn(r.memoizedState,i);if(s&&(r.memoizedState=i,Dt=!0),r=r.queue,wf(Cv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,ta(9,xv.bind(null,n,r,i,e),void 0,null),st===null)throw Error(j(349));Ii&30||Rv(n,e,i)}return i}function Rv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xv(t,e,n,r){e.value=n,e.getSnapshot=r,Pv(e)&&bv(t)}function Cv(t,e,n){return n(function(){Pv(e)&&bv(t)})}function Pv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gn(t,n)}catch{return!0}}function bv(t){var e=Zn(t,1);e!==null&&fn(e,t,1,-1)}function rg(t){var e=In();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},e.queue=t,t=t.dispatch=mI.bind(null,Ne,t),[e.memoizedState,t]}function ta(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Nv(){return en().memoizedState}function Sl(t,e,n,r){var i=In();Ne.flags|=t,i.memoizedState=ta(1|e,n,void 0,r===void 0?null:r)}function Mu(t,e,n,r){var i=en();r=r===void 0?null:r;var s=void 0;if(Xe!==null){var o=Xe.memoizedState;if(s=o.destroy,r!==null&&yf(r,o.deps)){i.memoizedState=ta(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=ta(1|e,n,s,r)}function ig(t,e){return Sl(8390656,8,t,e)}function wf(t,e){return Mu(2048,8,t,e)}function Dv(t,e){return Mu(4,2,t,e)}function Vv(t,e){return Mu(4,4,t,e)}function Ov(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Lv(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4,4,Ov.bind(null,e,t),n)}function Ef(){}function Mv(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Fv(t,e){var n=en();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function jv(t,e,n){return Ii&21?(gn(n,e)||(n=W_(),Ne.lanes|=n,Si|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Dt=!0),t.memoizedState=n)}function fI(t,e){var n=ve;ve=n!==0&&4>n?n:4,t(!0);var r=Gc.transition;Gc.transition={};try{t(!1),e()}finally{ve=n,Gc.transition=r}}function Uv(){return en().memoizedState}function pI(t,e,n){var r=Cr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zv(t))Bv(e,n);else if(n=Tv(t,e,n,r),n!==null){var i=kt();fn(n,t,r,i),$v(n,e,r)}}function mI(t,e,n){var r=Cr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zv(t))Bv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,gn(l,o)){var u=e.interleaved;u===null?(i.next=i,df(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Tv(t,e,i,r),n!==null&&(i=kt(),fn(n,t,r,i),$v(n,e,r))}}function zv(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function Bv(t,e){bo=nu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $v(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xd(t,n)}}var ru={readContext:Zt,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},gI={readContext:Zt,useCallback:function(t,e){return In().memoizedState=[t,e===void 0?null:e],t},useContext:Zt,useEffect:ig,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sl(4194308,4,Ov.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Sl(4,2,t,e)},useMemo:function(t,e){var n=In();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=In();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=pI.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=In();return t={current:t},e.memoizedState=t},useState:rg,useDebugValue:Ef,useDeferredValue:function(t){return In().memoizedState=t},useTransition:function(){var t=rg(!1),e=t[0];return t=fI.bind(null,t[1]),In().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,i=In();if(Ce){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),st===null)throw Error(j(349));Ii&30||Rv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ig(Cv.bind(null,r,s,t),[t]),r.flags|=2048,ta(9,xv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=In(),e=st.identifierPrefix;if(Ce){var n=qn,r=Hn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yI={readContext:Zt,useCallback:Mv,useContext:Zt,useEffect:wf,useImperativeHandle:Lv,useInsertionEffect:Dv,useLayoutEffect:Vv,useMemo:Fv,useReducer:Kc,useRef:Nv,useState:function(){return Kc(ea)},useDebugValue:Ef,useDeferredValue:function(t){var e=en();return jv(e,Xe.memoizedState,t)},useTransition:function(){var t=Kc(ea)[0],e=en().memoizedState;return[t,e]},useMutableSource:Av,useSyncExternalStore:kv,useId:Uv,unstable_isNewReconciler:!1},_I={readContext:Zt,useCallback:Mv,useContext:Zt,useEffect:wf,useImperativeHandle:Lv,useInsertionEffect:Dv,useLayoutEffect:Vv,useMemo:Fv,useReducer:Qc,useRef:Nv,useState:function(){return Qc(ea)},useDebugValue:Ef,useDeferredValue:function(t){var e=en();return Xe===null?e.memoizedState=t:jv(e,Xe.memoizedState,t)},useTransition:function(){var t=Qc(ea)[0],e=en().memoizedState;return[t,e]},useMutableSource:Av,useSyncExternalStore:kv,useId:Uv,unstable_isNewReconciler:!1};function an(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fu={isMounted:function(t){return(t=t._reactInternals)?Ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Cr(t),s=Yn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,i),e!==null&&(fn(e,t,i,r),Tl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=kt(),i=Cr(t),s=Yn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,i),e!==null&&(fn(e,t,i,r),Tl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kt(),r=Cr(t),i=Yn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Rr(t,i,r),e!==null&&(fn(e,t,r,n),Tl(e,t,r))}};function sg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Go(n,r)||!Go(i,s):!0}function Wv(t,e,n){var r=!1,i=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Zt(s):(i=Ot(e)?Ei:wt.current,r=e.contextTypes,s=(r=r!=null)?Es(t,i):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function og(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fu.enqueueReplaceState(e,e.state,null)}function Kh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ff(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Zt(s):(s=Ot(e)?Ei:wt.current,i.context=Es(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fu.enqueueReplaceState(i,i.state,null),eu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,e){try{var n="",r=e;do n+=qT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vI=typeof WeakMap=="function"?WeakMap:Map;function Hv(t,e,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){su||(su=!0,sd=r),Qh(t,e)},n}function qv(t,e,n){n=Yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Qh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qh(t,e),typeof r!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ag(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new vI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=DI.bind(null,t,e,n),e.then(t,t))}function lg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ug(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yn(-1,1),e.tag=2,Rr(n,e,1))),n.lanes|=1),t)}var wI=sr.ReactCurrentOwner,Dt=!1;function At(t,e,n,r){e.child=t===null?Ev(e,null,n,r):Is(e,t.child,n,r)}function cg(t,e,n,r,i){n=n.render;var s=e.ref;return ds(e,i),r=_f(t,e,n,r,s,i),n=vf(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(Ce&&n&&of(e),e.flags|=1,At(t,e,r,i),e.child)}function hg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Cf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Gv(t,e,s,r,i)):(t=xl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(o,r)&&t.ref===e.ref)return er(t,e,i)}return e.flags|=1,t=Pr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Gv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Go(s,r)&&t.ref===e.ref)if(Dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Dt=!0);else return e.lanes=t.lanes,er(t,e,i)}return Yh(t,e,n,r,i)}function Kv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(as,Ft),Ft|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ie(as,Ft),Ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ie(as,Ft),Ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ie(as,Ft),Ft|=r;return At(t,e,i,n),e.child}function Qv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yh(t,e,n,r,i){var s=Ot(n)?Ei:wt.current;return s=Es(e,s),ds(e,i),n=_f(t,e,n,r,s,i),r=vf(),t!==null&&!Dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,er(t,e,i)):(Ce&&r&&of(e),e.flags|=1,At(t,e,n,i),e.child)}function dg(t,e,n,r,i){if(Ot(n)){var s=!0;Ql(e)}else s=!1;if(ds(e,i),e.stateNode===null)Al(t,e),Wv(e,n,r),Kh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Zt(h):(h=Ot(n)?Ei:wt.current,h=Es(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&og(e,o,r,h),mr=!1;var y=e.memoizedState;o.state=y,eu(e,r,o,i),u=e.memoizedState,l!==r||y!==u||Vt.current||mr?(typeof f=="function"&&(Gh(e,n,f,r),u=e.memoizedState),(l=mr||sg(e,n,l,r,y,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Iv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:an(e.type,l),o.props=h,p=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Zt(u):(u=Ot(n)?Ei:wt.current,u=Es(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||y!==u)&&og(e,o,r,u),mr=!1,y=e.memoizedState,o.state=y,eu(e,r,o,i);var x=e.memoizedState;l!==p||y!==x||Vt.current||mr?(typeof A=="function"&&(Gh(e,n,A,r),x=e.memoizedState),(h=mr||sg(e,n,h,r,y,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Xh(t,e,n,r,s,i)}function Xh(t,e,n,r,i,s){Qv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Xm(e,n,!1),er(t,e,s);r=e.stateNode,wI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Is(e,t.child,null,s),e.child=Is(e,null,l,s)):At(t,e,l,s),e.memoizedState=r.state,i&&Xm(e,n,!0),e.child}function Yv(t){var e=t.stateNode;e.pendingContext?Ym(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ym(t,e.context,!1),pf(t,e.containerInfo)}function fg(t,e,n,r,i){return Ts(),lf(i),e.flags|=256,At(t,e,n,r),e.child}var Jh={dehydrated:null,treeContext:null,retryLane:0};function Zh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xv(t,e,n){var r=e.pendingProps,i=be.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ie(be,i&1),t===null)return Hh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zu(o,r,0,null),t=_i(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zh(n),e.memoizedState=Jh,t):Tf(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return EI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Pr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Pr(l,s):(s=_i(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Zh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Jh,r}return s=t.child,t=s.sibling,r=Pr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Tf(t,e){return e=zu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function il(t,e,n,r){return r!==null&&lf(r),Is(e,t.child,null,n),t=Tf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function EI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Yc(Error(j(422))),il(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=zu({mode:"visible",children:r.children},i,0,null),s=_i(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Is(e,t.child,null,o),e.child.memoizedState=Zh(o),e.memoizedState=Jh,s);if(!(e.mode&1))return il(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(j(419)),r=Yc(s,r,void 0),il(t,e,o,r)}if(l=(o&t.childLanes)!==0,Dt||l){if(r=st,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Zn(t,i),fn(r,t,i,-1))}return xf(),r=Yc(Error(j(421))),il(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=VI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,jt=kr(i.nextSibling),zt=e,Ce=!0,un=null,t!==null&&(Ht[qt++]=Hn,Ht[qt++]=qn,Ht[qt++]=Ti,Hn=t.id,qn=t.overflow,Ti=e),e=Tf(e,r.children),e.flags|=4096,e)}function pg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qh(t.return,e,n)}function Xc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Jv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(At(t,e,r.children,n),r=be.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pg(t,n,e);else if(t.tag===19)pg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ie(be,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&tu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&tu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xc(e,!0,n,null,s);break;case"together":Xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Si|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function TI(t,e,n){switch(e.tag){case 3:Yv(e),Ts();break;case 5:Sv(e);break;case 1:Ot(e.type)&&Ql(e);break;case 4:pf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ie(Jl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ie(be,be.current&1),e.flags|=128,null):n&e.child.childLanes?Xv(t,e,n):(Ie(be,be.current&1),t=er(t,e,n),t!==null?t.sibling:null);Ie(be,be.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Jv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ie(be,be.current),r)break;return null;case 22:case 23:return e.lanes=0,Kv(t,e,n)}return er(t,e,n)}var Zv,ed,e0,t0;Zv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ed=function(){};e0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,fi(Rn.current);var s=null;switch(n){case"input":i=Th(t,i),r=Th(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=Ah(t,i),r=Ah(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gl)}Rh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Uo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ke("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};t0=function(t,e,n,r){n!==r&&(e.flags|=4)};function po(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function II(t,e,n){var r=e.pendingProps;switch(af(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return Ot(e.type)&&Kl(),mt(e),null;case 3:return r=e.stateNode,Ss(),xe(Vt),xe(wt),gf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,un!==null&&(ld(un),un=null))),ed(t,e),mt(e),null;case 5:mf(e);var i=fi(Jo.current);if(n=e.type,t!==null&&e.stateNode!=null)e0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return mt(e),null}if(t=fi(Rn.current),nl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[An]=e,r[Yo]=s,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(i=0;i<Eo.length;i++)ke(Eo[i],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":Im(r,s),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ke("invalid",r);break;case"textarea":Am(r,s),ke("invalid",r)}Rh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&tl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&tl(r.textContent,l,t),i=["children",""+l]):Uo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":Ga(r),Sm(r,s,!0);break;case"textarea":Ga(r),km(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=C_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[An]=e,t[Yo]=r,Zv(t,e,!1,!1),e.stateNode=t;e:{switch(o=xh(n,r),n){case"dialog":ke("cancel",t),ke("close",t),i=r;break;case"iframe":case"object":case"embed":ke("load",t),i=r;break;case"video":case"audio":for(i=0;i<Eo.length;i++)ke(Eo[i],t);i=r;break;case"source":ke("error",t),i=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),i=r;break;case"details":ke("toggle",t),i=r;break;case"input":Im(t,r),i=Th(t,r),ke("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),ke("invalid",t);break;case"textarea":Am(t,r),i=Ah(t,r),ke("invalid",t);break;default:i=r}Rh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?N_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&P_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&zo(t,u):typeof u=="number"&&zo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Uo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ke("scroll",t):u!=null&&Hd(t,s,u,o))}switch(n){case"input":Ga(t),Sm(t,r,!1);break;case"textarea":Ga(t),km(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Lr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ls(t,!!r.multiple,s,!1):r.defaultValue!=null&&ls(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)t0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=fi(Jo.current),fi(Rn.current),nl(e)){if(r=e.stateNode,n=e.memoizedProps,r[An]=e,(s=r.nodeValue!==n)&&(t=zt,t!==null))switch(t.tag){case 3:tl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[An]=e,e.stateNode=r}return mt(e),null;case 13:if(xe(be),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&jt!==null&&e.mode&1&&!(e.flags&128))vv(),Ts(),e.flags|=98560,s=!1;else if(s=nl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(j(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(j(317));s[An]=e}else Ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else un!==null&&(ld(un),un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||be.current&1?Je===0&&(Je=3):xf())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return Ss(),ed(t,e),t===null&&Ko(e.stateNode.containerInfo),mt(e),null;case 10:return hf(e.type._context),mt(e),null;case 17:return Ot(e.type)&&Kl(),mt(e),null;case 19:if(xe(be),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)po(s,!1);else{if(Je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=tu(t),o!==null){for(e.flags|=128,po(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ie(be,be.current&1|2),e.child}t=t.sibling}s.tail!==null&&je()>ks&&(e.flags|=128,r=!0,po(s,!1),e.lanes=4194304)}else{if(!r)if(t=tu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),po(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return mt(e),null}else 2*je()-s.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,r=!0,po(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=je(),e.sibling=null,n=be.current,Ie(be,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return Rf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ft&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function SI(t,e){switch(af(e),e.tag){case 1:return Ot(e.type)&&Kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ss(),xe(Vt),xe(wt),gf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mf(e),null;case 13:if(xe(be),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(be),null;case 4:return Ss(),null;case 10:return hf(e.type._context),null;case 22:case 23:return Rf(),null;case 24:return null;default:return null}}var sl=!1,_t=!1,AI=typeof WeakSet=="function"?WeakSet:Set,Q=null;function os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Oe(t,e,r)}else n.current=null}function td(t,e,n){try{n()}catch(r){Oe(t,e,r)}}var mg=!1;function kI(t,e){if(Fh=Wl,t=ov(),sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,y=null;t:for(;;){for(var A;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)y=p,p=A;for(;;){if(p===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++f===r&&(u=o),(A=p.nextSibling)!==null)break;p=y,y=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(jh={focusedElem:t,selectionRange:n},Wl=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,V=x.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?b:an(e.type,b),V);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(D){Oe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return x=mg,mg=!1,x}function No(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&td(e,n,s)}i=i.next}while(i!==r)}}function ju(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function n0(t){var e=t.alternate;e!==null&&(t.alternate=null,n0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[An],delete e[Yo],delete e[Bh],delete e[lI],delete e[uI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function r0(t){return t.tag===5||t.tag===3||t.tag===4}function gg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||r0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gl));else if(r!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}function id(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(id(t,e,n),t=t.sibling;t!==null;)id(t,e,n),t=t.sibling}var ot=null,ln=!1;function dr(t,e,n){for(n=n.child;n!==null;)i0(t,e,n),n=n.sibling}function i0(t,e,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(bu,n)}catch{}switch(n.tag){case 5:_t||os(n,e);case 6:var r=ot,i=ln;ot=null,dr(t,e,n),ot=r,ln=i,ot!==null&&(ln?(t=ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ot.removeChild(n.stateNode));break;case 18:ot!==null&&(ln?(t=ot,n=n.stateNode,t.nodeType===8?Wc(t.parentNode,n):t.nodeType===1&&Wc(t,n),Ho(t)):Wc(ot,n.stateNode));break;case 4:r=ot,i=ln,ot=n.stateNode.containerInfo,ln=!0,dr(t,e,n),ot=r,ln=i;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&td(n,e,o),i=i.next}while(i!==r)}dr(t,e,n);break;case 1:if(!_t&&(os(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Oe(n,e,l)}dr(t,e,n);break;case 21:dr(t,e,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,dr(t,e,n),_t=r):dr(t,e,n);break;default:dr(t,e,n)}}function yg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new AI),e.forEach(function(r){var i=OI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function on(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ot=l.stateNode,ln=!1;break e;case 3:ot=l.stateNode.containerInfo,ln=!0;break e;case 4:ot=l.stateNode.containerInfo,ln=!0;break e}l=l.return}if(ot===null)throw Error(j(160));i0(s,o,i),ot=null,ln=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Oe(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)s0(e,t),e=e.sibling}function s0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(on(e,t),Tn(t),r&4){try{No(3,t,t.return),ju(3,t)}catch(b){Oe(t,t.return,b)}try{No(5,t,t.return)}catch(b){Oe(t,t.return,b)}}break;case 1:on(e,t),Tn(t),r&512&&n!==null&&os(n,n.return);break;case 5:if(on(e,t),Tn(t),r&512&&n!==null&&os(n,n.return),t.flags&32){var i=t.stateNode;try{zo(i,"")}catch(b){Oe(t,t.return,b)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&R_(i,s),xh(l,o);var h=xh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?N_(i,p):f==="dangerouslySetInnerHTML"?P_(i,p):f==="children"?zo(i,p):Hd(i,f,p,h)}switch(l){case"input":Ih(i,s);break;case"textarea":x_(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?ls(i,!!s.multiple,A,!1):y!==!!s.multiple&&(s.defaultValue!=null?ls(i,!!s.multiple,s.defaultValue,!0):ls(i,!!s.multiple,s.multiple?[]:"",!1))}i[Yo]=s}catch(b){Oe(t,t.return,b)}}break;case 6:if(on(e,t),Tn(t),r&4){if(t.stateNode===null)throw Error(j(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(b){Oe(t,t.return,b)}}break;case 3:if(on(e,t),Tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ho(e.containerInfo)}catch(b){Oe(t,t.return,b)}break;case 4:on(e,t),Tn(t);break;case 13:on(e,t),Tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Af=je())),r&4&&yg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(_t=(h=_t)||f,on(e,t),_t=h):on(e,t),Tn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(Q=t,f=t.child;f!==null;){for(p=Q=f;Q!==null;){switch(y=Q,A=y.child,y.tag){case 0:case 11:case 14:case 15:No(4,y,y.return);break;case 1:os(y,y.return);var x=y.stateNode;if(typeof x.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(b){Oe(r,n,b)}}break;case 5:os(y,y.return);break;case 22:if(y.memoizedState!==null){vg(p);continue}}A!==null?(A.return=y,Q=A):vg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=b_("display",o))}catch(b){Oe(t,t.return,b)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(b){Oe(t,t.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:on(e,t),Tn(t),r&4&&yg(t);break;case 21:break;default:on(e,t),Tn(t)}}function Tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(r0(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zo(i,""),r.flags&=-33);var s=gg(t);id(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=gg(t);rd(t,l,o);break;default:throw Error(j(161))}}catch(u){Oe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function RI(t,e,n){Q=t,o0(t)}function o0(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||sl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||_t;l=sl;var h=_t;if(sl=o,(_t=u)&&!h)for(Q=i;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?wg(i):u!==null?(u.return=o,Q=u):wg(i);for(;s!==null;)Q=s,o0(s),s=s.sibling;Q=i,sl=l,_t=h}_g(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):_g(t)}}function _g(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||ju(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:an(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ng(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ng(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ho(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}_t||e.flags&512&&nd(e)}catch(y){Oe(e,e.return,y)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function vg(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function wg(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ju(4,e)}catch(u){Oe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Oe(e,i,u)}}var s=e.return;try{nd(e)}catch(u){Oe(e,s,u)}break;case 5:var o=e.return;try{nd(e)}catch(u){Oe(e,o,u)}}}catch(u){Oe(e,e.return,u)}if(e===t){Q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Q=l;break}Q=e.return}}var xI=Math.ceil,iu=sr.ReactCurrentDispatcher,If=sr.ReactCurrentOwner,Yt=sr.ReactCurrentBatchConfig,ye=0,st=null,qe=null,ut=0,Ft=0,as=Kr(0),Je=0,na=null,Si=0,Uu=0,Sf=0,Do=null,bt=null,Af=0,ks=1/0,Bn=null,su=!1,sd=null,xr=null,ol=!1,Tr=null,ou=0,Vo=0,od=null,kl=-1,Rl=0;function kt(){return ye&6?je():kl!==-1?kl:kl=je()}function Cr(t){return t.mode&1?ye&2&&ut!==0?ut&-ut:hI.transition!==null?(Rl===0&&(Rl=W_()),Rl):(t=ve,t!==0||(t=window.event,t=t===void 0?16:X_(t.type)),t):1}function fn(t,e,n,r){if(50<Vo)throw Vo=0,od=null,Error(j(185));ma(t,n,r),(!(ye&2)||t!==st)&&(t===st&&(!(ye&2)&&(Uu|=n),Je===4&&yr(t,ut)),Lt(t,r),n===1&&ye===0&&!(e.mode&1)&&(ks=je()+500,Lu&&Qr()))}function Lt(t,e){var n=t.callbackNode;h1(t,e);var r=$l(t,t===st?ut:0);if(r===0)n!==null&&Cm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Cm(n),e===1)t.tag===0?cI(Eg.bind(null,t)):gv(Eg.bind(null,t)),oI(function(){!(ye&6)&&Qr()}),n=null;else{switch(H_(r)){case 1:n=Yd;break;case 4:n=B_;break;case 16:n=Bl;break;case 536870912:n=$_;break;default:n=Bl}n=p0(n,a0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function a0(t,e){if(kl=-1,Rl=0,ye&6)throw Error(j(327));var n=t.callbackNode;if(fs()&&t.callbackNode!==n)return null;var r=$l(t,t===st?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=au(t,r);else{e=r;var i=ye;ye|=2;var s=u0();(st!==t||ut!==e)&&(Bn=null,ks=je()+500,yi(t,e));do try{bI();break}catch(l){l0(t,l)}while(!0);cf(),iu.current=s,ye=i,qe!==null?e=0:(st=null,ut=0,e=Je)}if(e!==0){if(e===2&&(i=Dh(t),i!==0&&(r=i,e=ad(t,i))),e===1)throw n=na,yi(t,0),yr(t,r),Lt(t,je()),n;if(e===6)yr(t,r);else{if(i=t.current.alternate,!(r&30)&&!CI(i)&&(e=au(t,r),e===2&&(s=Dh(t),s!==0&&(r=s,e=ad(t,s))),e===1))throw n=na,yi(t,0),yr(t,r),Lt(t,je()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:ui(t,bt,Bn);break;case 3:if(yr(t,r),(r&130023424)===r&&(e=Af+500-je(),10<e)){if($l(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){kt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zh(ui.bind(null,t,bt,Bn),e);break}ui(t,bt,Bn);break;case 4:if(yr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xI(r/1960))-r,10<r){t.timeoutHandle=zh(ui.bind(null,t,bt,Bn),r);break}ui(t,bt,Bn);break;case 5:ui(t,bt,Bn);break;default:throw Error(j(329))}}}return Lt(t,je()),t.callbackNode===n?a0.bind(null,t):null}function ad(t,e){var n=Do;return t.current.memoizedState.isDehydrated&&(yi(t,e).flags|=256),t=au(t,e),t!==2&&(e=bt,bt=n,e!==null&&ld(e)),t}function ld(t){bt===null?bt=t:bt.push.apply(bt,t)}function CI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~Sf,e&=~Uu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dn(e),r=1<<n;t[n]=-1,e&=~r}}function Eg(t){if(ye&6)throw Error(j(327));fs();var e=$l(t,0);if(!(e&1))return Lt(t,je()),null;var n=au(t,e);if(t.tag!==0&&n===2){var r=Dh(t);r!==0&&(e=r,n=ad(t,r))}if(n===1)throw n=na,yi(t,0),yr(t,e),Lt(t,je()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ui(t,bt,Bn),Lt(t,je()),null}function kf(t,e){var n=ye;ye|=1;try{return t(e)}finally{ye=n,ye===0&&(ks=je()+500,Lu&&Qr())}}function Ai(t){Tr!==null&&Tr.tag===0&&!(ye&6)&&fs();var e=ye;ye|=1;var n=Yt.transition,r=ve;try{if(Yt.transition=null,ve=1,t)return t()}finally{ve=r,Yt.transition=n,ye=e,!(ye&6)&&Qr()}}function Rf(){Ft=as.current,xe(as)}function yi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sI(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(af(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kl();break;case 3:Ss(),xe(Vt),xe(wt),gf();break;case 5:mf(r);break;case 4:Ss();break;case 13:xe(be);break;case 19:xe(be);break;case 10:hf(r.type._context);break;case 22:case 23:Rf()}n=n.return}if(st=t,qe=t=Pr(t.current,null),ut=Ft=e,Je=0,na=null,Sf=Uu=Si=0,bt=Do=null,di!==null){for(e=0;e<di.length;e++)if(n=di[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}di=null}return t}function l0(t,e){do{var n=qe;try{if(cf(),Il.current=ru,nu){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nu=!1}if(Ii=0,it=Xe=Ne=null,bo=!1,Zo=0,If.current=null,n===null||n.return===null){Je=1,na=e,qe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ut,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=lg(o);if(A!==null){A.flags&=-257,ug(A,o,l,s,e),A.mode&1&&ag(s,h,e),e=A,u=h;var x=e.updateQueue;if(x===null){var b=new Set;b.add(u),e.updateQueue=b}else x.add(u);break e}else{if(!(e&1)){ag(s,h,e),xf();break e}u=Error(j(426))}}else if(Ce&&l.mode&1){var V=lg(o);if(V!==null){!(V.flags&65536)&&(V.flags|=256),ug(V,o,l,s,e),lf(As(u,l));break e}}s=u=As(u,l),Je!==4&&(Je=2),Do===null?Do=[s]:Do.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=Hv(s,u,e);tg(s,S);break e;case 1:l=u;var w=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(xr===null||!xr.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=qv(s,l,e);tg(s,D);break e}}s=s.return}while(s!==null)}h0(n)}catch(M){e=M,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(!0)}function u0(){var t=iu.current;return iu.current=ru,t===null?ru:t}function xf(){(Je===0||Je===3||Je===2)&&(Je=4),st===null||!(Si&268435455)&&!(Uu&268435455)||yr(st,ut)}function au(t,e){var n=ye;ye|=2;var r=u0();(st!==t||ut!==e)&&(Bn=null,yi(t,e));do try{PI();break}catch(i){l0(t,i)}while(!0);if(cf(),ye=n,iu.current=r,qe!==null)throw Error(j(261));return st=null,ut=0,Je}function PI(){for(;qe!==null;)c0(qe)}function bI(){for(;qe!==null&&!n1();)c0(qe)}function c0(t){var e=f0(t.alternate,t,Ft);t.memoizedProps=t.pendingProps,e===null?h0(t):qe=e,If.current=null}function h0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=SI(n,e),n!==null){n.flags&=32767,qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Je=6,qe=null;return}}else if(n=II(n,e,Ft),n!==null){qe=n;return}if(e=e.sibling,e!==null){qe=e;return}qe=e=t}while(e!==null);Je===0&&(Je=5)}function ui(t,e,n){var r=ve,i=Yt.transition;try{Yt.transition=null,ve=1,NI(t,e,n,r)}finally{Yt.transition=i,ve=r}return null}function NI(t,e,n,r){do fs();while(Tr!==null);if(ye&6)throw Error(j(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(d1(t,s),t===st&&(qe=st=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,p0(Bl,function(){return fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yt.transition,Yt.transition=null;var o=ve;ve=1;var l=ye;ye|=4,If.current=null,kI(t,n),s0(n,t),J1(jh),Wl=!!Fh,jh=Fh=null,t.current=n,RI(n),r1(),ye=l,ve=o,Yt.transition=s}else t.current=n;if(ol&&(ol=!1,Tr=t,ou=i),s=t.pendingLanes,s===0&&(xr=null),o1(n.stateNode),Lt(t,je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(su)throw su=!1,t=sd,sd=null,t;return ou&1&&t.tag!==0&&fs(),s=t.pendingLanes,s&1?t===od?Vo++:(Vo=0,od=t):Vo=0,Qr(),null}function fs(){if(Tr!==null){var t=H_(ou),e=Yt.transition,n=ve;try{if(Yt.transition=null,ve=16>t?16:t,Tr===null)var r=!1;else{if(t=Tr,Tr=null,ou=0,ye&6)throw Error(j(331));var i=ye;for(ye|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(Q=h;Q!==null;){var f=Q;switch(f.tag){case 0:case 11:case 15:No(8,f,s)}var p=f.child;if(p!==null)p.return=f,Q=p;else for(;Q!==null;){f=Q;var y=f.sibling,A=f.return;if(n0(f),f===h){Q=null;break}if(y!==null){y.return=A,Q=y;break}Q=A}}}var x=s.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var V=b.sibling;b.sibling=null,b=V}while(b!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:No(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,Q=S;break e}Q=s.return}}var w=t.current;for(Q=w;Q!==null;){o=Q;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,Q=R;else e:for(o=w;Q!==null;){if(l=Q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ju(9,l)}}catch(M){Oe(l,l.return,M)}if(l===o){Q=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,Q=D;break e}Q=l.return}}if(ye=i,Qr(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(bu,t)}catch{}r=!0}return r}finally{ve=n,Yt.transition=e}}return!1}function Tg(t,e,n){e=As(n,e),e=Hv(t,e,1),t=Rr(t,e,1),e=kt(),t!==null&&(ma(t,1,e),Lt(t,e))}function Oe(t,e,n){if(t.tag===3)Tg(t,t,n);else for(;e!==null;){if(e.tag===3){Tg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xr===null||!xr.has(r))){t=As(n,t),t=qv(e,t,1),e=Rr(e,t,1),t=kt(),e!==null&&(ma(e,1,t),Lt(e,t));break}}e=e.return}}function DI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=kt(),t.pingedLanes|=t.suspendedLanes&n,st===t&&(ut&n)===n&&(Je===4||Je===3&&(ut&130023424)===ut&&500>je()-Af?yi(t,0):Sf|=n),Lt(t,e)}function d0(t,e){e===0&&(t.mode&1?(e=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):e=1);var n=kt();t=Zn(t,e),t!==null&&(ma(t,e,n),Lt(t,n))}function VI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),d0(t,n)}function OI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),d0(t,n)}var f0;f0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)Dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Dt=!1,TI(t,e,n);Dt=!!(t.flags&131072)}else Dt=!1,Ce&&e.flags&1048576&&yv(e,Xl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Al(t,e),t=e.pendingProps;var i=Es(e,wt.current);ds(e,n),i=_f(null,e,r,t,i,n);var s=vf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ot(r)?(s=!0,Ql(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ff(e),i.updater=Fu,e.stateNode=i,i._reactInternals=e,Kh(e,r,t,n),e=Xh(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&of(e),At(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Al(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=MI(r),t=an(r,t),i){case 0:e=Yh(null,e,r,t,n);break e;case 1:e=dg(null,e,r,t,n);break e;case 11:e=cg(null,e,r,t,n);break e;case 14:e=hg(null,e,r,an(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),Yh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),dg(t,e,r,i,n);case 3:e:{if(Yv(e),t===null)throw Error(j(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Iv(t,e),eu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=As(Error(j(423)),e),e=fg(t,e,r,n,i);break e}else if(r!==i){i=As(Error(j(424)),e),e=fg(t,e,r,n,i);break e}else for(jt=kr(e.stateNode.containerInfo.firstChild),zt=e,Ce=!0,un=null,n=Ev(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ts(),r===i){e=er(t,e,n);break e}At(t,e,r,n)}e=e.child}return e;case 5:return Sv(e),t===null&&Hh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Uh(r,i)?o=null:s!==null&&Uh(r,s)&&(e.flags|=32),Qv(t,e),At(t,e,o,n),e.child;case 6:return t===null&&Hh(e),null;case 13:return Xv(t,e,n);case 4:return pf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Is(e,null,r,n):At(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),cg(t,e,r,i,n);case 7:return At(t,e,e.pendingProps,n),e.child;case 8:return At(t,e,e.pendingProps.children,n),e.child;case 12:return At(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ie(Jl,r._currentValue),r._currentValue=o,s!==null)if(gn(s.value,o)){if(s.children===i.children&&!Vt.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Yn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),qh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),qh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}At(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ds(e,n),i=Zt(i),r=r(i),e.flags|=1,At(t,e,r,n),e.child;case 14:return r=e.type,i=an(r,e.pendingProps),i=an(r.type,i),hg(t,e,r,i,n);case 15:return Gv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:an(r,i),Al(t,e),e.tag=1,Ot(r)?(t=!0,Ql(e)):t=!1,ds(e,n),Wv(e,r,i),Kh(e,r,i,n),Xh(null,e,r,!0,t,n);case 19:return Jv(t,e,n);case 22:return Kv(t,e,n)}throw Error(j(156,e.tag))};function p0(t,e){return z_(t,e)}function LI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,r){return new LI(t,e,n,r)}function Cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function MI(t){if(typeof t=="function")return Cf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gd)return 11;if(t===Kd)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Cf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xi:return _i(n.children,i,s,e);case qd:o=8,i|=8;break;case _h:return t=Qt(12,n,e,i|2),t.elementType=_h,t.lanes=s,t;case vh:return t=Qt(13,n,e,i),t.elementType=vh,t.lanes=s,t;case wh:return t=Qt(19,n,e,i),t.elementType=wh,t.lanes=s,t;case S_:return zu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case T_:o=10;break e;case I_:o=9;break e;case Gd:o=11;break e;case Kd:o=14;break e;case pr:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=Qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function _i(t,e,n,r){return t=Qt(7,t,r,e),t.lanes=n,t}function zu(t,e,n,r){return t=Qt(22,t,r,e),t.elementType=S_,t.lanes=n,t.stateNode={isHidden:!1},t}function Jc(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function Zc(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function FI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dc(0),this.expirationTimes=Dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pf(t,e,n,r,i,s,o,l,u){return t=new FI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ff(s),t}function jI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function m0(t){if(!t)return Mr;t=t._reactInternals;e:{if(Ni(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ot(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(Ot(n))return mv(t,n,e)}return e}function g0(t,e,n,r,i,s,o,l,u){return t=Pf(n,r,!0,t,i,s,o,l,u),t.context=m0(null),n=t.current,r=kt(),i=Cr(n),s=Yn(r,i),s.callback=e??null,Rr(n,s,i),t.current.lanes=i,ma(t,i,r),Lt(t,r),t}function Bu(t,e,n,r){var i=e.current,s=kt(),o=Cr(i);return n=m0(n),e.context===null?e.context=n:e.pendingContext=n,e=Yn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Rr(i,e,o),t!==null&&(fn(t,i,o,s),Tl(t,i,o)),o}function lu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ig(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bf(t,e){Ig(t,e),(t=t.alternate)&&Ig(t,e)}function UI(){return null}var y0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nf(t){this._internalRoot=t}$u.prototype.render=Nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));Bu(t,e,null,null)};$u.prototype.unmount=Nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ai(function(){Bu(null,t,null,null)}),e[Jn]=null}};function $u(t){this._internalRoot=t}$u.prototype.unstable_scheduleHydration=function(t){if(t){var e=K_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gr.length&&e!==0&&e<gr[n].priority;n++);gr.splice(n,0,t),n===0&&Y_(t)}};function Df(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sg(){}function zI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=lu(o);s.call(h)}}var o=g0(e,r,t,0,null,!1,!1,"",Sg);return t._reactRootContainer=o,t[Jn]=o.current,Ko(t.nodeType===8?t.parentNode:t),Ai(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=lu(u);l.call(h)}}var u=Pf(t,0,!1,null,null,!1,!1,"",Sg);return t._reactRootContainer=u,t[Jn]=u.current,Ko(t.nodeType===8?t.parentNode:t),Ai(function(){Bu(e,u,n,r)}),u}function Hu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=lu(o);l.call(u)}}Bu(e,o,t,i)}else o=zI(n,e,t,i,r);return lu(o)}q_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wo(e.pendingLanes);n!==0&&(Xd(e,n|1),Lt(e,je()),!(ye&6)&&(ks=je()+500,Qr()))}break;case 13:Ai(function(){var r=Zn(t,1);if(r!==null){var i=kt();fn(r,t,1,i)}}),bf(t,1)}};Jd=function(t){if(t.tag===13){var e=Zn(t,134217728);if(e!==null){var n=kt();fn(e,t,134217728,n)}bf(t,134217728)}};G_=function(t){if(t.tag===13){var e=Cr(t),n=Zn(t,e);if(n!==null){var r=kt();fn(n,t,e,r)}bf(t,e)}};K_=function(){return ve};Q_=function(t,e){var n=ve;try{return ve=t,e()}finally{ve=n}};Ph=function(t,e,n){switch(e){case"input":if(Ih(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ou(r);if(!i)throw Error(j(90));k_(r),Ih(r,i)}}}break;case"textarea":x_(t,n);break;case"select":e=n.value,e!=null&&ls(t,!!n.multiple,e,!1)}};O_=kf;L_=Ai;var BI={usingClientEntryPoint:!1,Events:[ya,ts,Ou,D_,V_,kf]},mo={findFiberByHostInstance:hi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$I={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=j_(t),t===null?null:t.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||UI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{bu=al.inject($I),kn=al}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BI;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Df(e))throw Error(j(200));return jI(t,e,null,n)};$t.createRoot=function(t,e){if(!Df(t))throw Error(j(299));var n=!1,r="",i=y0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pf(t,1,!1,null,null,n,!1,r,i),t[Jn]=e.current,Ko(t.nodeType===8?t.parentNode:t),new Nf(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=j_(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return Ai(t)};$t.hydrate=function(t,e,n){if(!Wu(e))throw Error(j(200));return Hu(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!Df(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=y0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=g0(e,null,t,1,n??null,i,!1,s,o),t[Jn]=e.current,Ko(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new $u(e)};$t.render=function(t,e,n){if(!Wu(e))throw Error(j(200));return Hu(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!Wu(t))throw Error(j(40));return t._reactRootContainer?(Ai(function(){Hu(null,null,t,!1,function(){t._reactRootContainer=null,t[Jn]=null})}),!0):!1};$t.unstable_batchedUpdates=kf;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return Hu(t,e,n,!1,r)};$t.version="18.3.1-next-f1338f8080-20240426";function _0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_0)}catch(t){console.error(t)}}_0(),__.exports=$t;var WI=__.exports,Ag=WI;gh.createRoot=Ag.createRoot,gh.hydrateRoot=Ag.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HI=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v0=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qI={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GI=B.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>B.createElement("svg",{ref:u,...qI,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:v0("lucide",i),...l},[...o.map(([h,f])=>B.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=(t,e)=>{const n=B.forwardRef(({className:r,...i},s)=>B.createElement(GI,{ref:s,iconNode:e,className:v0(`lucide-${HI(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KI=dt("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QI=dt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=dt("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=dt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YI=dt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XI=dt("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JI=dt("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=dt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=dt("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZI=dt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=dt("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=dt("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=dt("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=dt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=dt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=dt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=dt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),rS=()=>{};var kg={};/**
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
 */const I0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},S0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(y=64)),r.push(n[f],n[p],n[y],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(I0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new sS;const y=s<<2|l>>4;if(r.push(y),h!==64){const A=l<<4&240|h>>2;if(r.push(A),p!==64){const x=h<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oS=function(t){const e=I0(t);return S0.encodeByteArray(e,!0)},cu=function(t){return oS(t).replace(/\./g,"")},A0=function(t){try{return S0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function aS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lS=()=>aS().__FIREBASE_DEFAULTS__,uS=()=>{if(typeof process>"u"||typeof kg>"u")return;const t=kg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&A0(t[1]);return e&&JSON.parse(e)},qu=()=>{try{return rS()||lS()||uS()||cS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},k0=t=>{var e,n;return(n=(e=qu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},R0=t=>{const e=k0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},x0=()=>{var t;return(t=qu())==null?void 0:t.config},C0=t=>{var e;return(e=qu())==null?void 0:e[`_${t}`]};/**
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
 */class hS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function P0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[cu(JSON.stringify(n)),cu(JSON.stringify(o)),""].join(".")}/**
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
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function fS(){var e;const t=(e=qu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yS(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _S(){return!fS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vS(){try{return typeof indexedDB=="object"}catch{return!1}}function wS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const ES="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ES,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,va.prototype.create)}}class va{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?TS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Mn(i,l,r)}}function TS(t,e){return t.replace(IS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const IS=/\{\$([^}]+)}/g;function SS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ki(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Rg(s)&&Rg(o)){if(!ki(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Rg(t){return t!==null&&typeof t=="object"}/**
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
 */function wa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function AS(t,e){const n=new kS(t,e);return n.subscribe.bind(n)}class kS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=eh),i.error===void 0&&(i.error=eh),i.complete===void 0&&(i.complete=eh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function eh(){}/**
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
 */function et(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ms(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Of(t){return(await fetch(t,{credentials:"include"})).ok}class Fr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ci="[DEFAULT]";/**
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
 */class xS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PS(e))try{this.getOrInitializeService({instanceIdentifier:ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ci){return this.instances.has(e)}getOptions(e=ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:CS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ci){return this.component?this.component.multipleInstances?e:ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function CS(t){return t===ci?void 0:t}function PS(t){return t.instantiationMode==="EAGER"}/**
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
 */class bS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const NS={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},DS=de.INFO,VS={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},OS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=VS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lf{constructor(e){this.name=e,this._logLevel=DS,this._logHandler=OS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const LS=(t,e)=>e.some(n=>t instanceof n);let xg,Cg;function MS(){return xg||(xg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FS(){return Cg||(Cg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const b0=new WeakMap,cd=new WeakMap,N0=new WeakMap,th=new WeakMap,Mf=new WeakMap;function jS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(br(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&b0.set(n,t)}).catch(()=>{}),Mf.set(e,t),e}function US(t){if(cd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cd.set(t,e)}let hd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||N0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zS(t){hd=t(hd)}function BS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nh(this),e,...n);return N0.set(r,e.sort?e.sort():[e]),br(r)}:FS().includes(t)?function(...e){return t.apply(nh(this),e),br(b0.get(this))}:function(...e){return br(t.apply(nh(this),e))}}function $S(t){return typeof t=="function"?BS(t):(t instanceof IDBTransaction&&US(t),LS(t,MS())?new Proxy(t,hd):t)}function br(t){if(t instanceof IDBRequest)return jS(t);if(th.has(t))return th.get(t);const e=$S(t);return e!==t&&(th.set(t,e),Mf.set(e,t)),e}const nh=t=>Mf.get(t);function WS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=br(o);return r&&o.addEventListener("upgradeneeded",u=>{r(br(o.result),u.oldVersion,u.newVersion,br(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const HS=["get","getKey","getAll","getAllKeys","count"],qS=["put","add","delete","clear"],rh=new Map;function Pg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rh.get(e))return rh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||HS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return rh.set(e,s),s}zS(t=>({...t,get:(e,n,r)=>Pg(e,n)||t.get(e,n,r),has:(e,n)=>!!Pg(e,n)||t.has(e,n)}));/**
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
 */class GS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dd="@firebase/app",bg="0.14.12";/**
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
 */const tr=new Lf("@firebase/app"),QS="@firebase/app-compat",YS="@firebase/analytics-compat",XS="@firebase/analytics",JS="@firebase/app-check-compat",ZS="@firebase/app-check",eA="@firebase/auth",tA="@firebase/auth-compat",nA="@firebase/database",rA="@firebase/data-connect",iA="@firebase/database-compat",sA="@firebase/functions",oA="@firebase/functions-compat",aA="@firebase/installations",lA="@firebase/installations-compat",uA="@firebase/messaging",cA="@firebase/messaging-compat",hA="@firebase/performance",dA="@firebase/performance-compat",fA="@firebase/remote-config",pA="@firebase/remote-config-compat",mA="@firebase/storage",gA="@firebase/storage-compat",yA="@firebase/firestore",_A="@firebase/ai",vA="@firebase/firestore-compat",wA="firebase",EA="12.13.0";/**
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
 */const fd="[DEFAULT]",TA={[dd]:"fire-core",[QS]:"fire-core-compat",[XS]:"fire-analytics",[YS]:"fire-analytics-compat",[ZS]:"fire-app-check",[JS]:"fire-app-check-compat",[eA]:"fire-auth",[tA]:"fire-auth-compat",[nA]:"fire-rtdb",[rA]:"fire-data-connect",[iA]:"fire-rtdb-compat",[sA]:"fire-fn",[oA]:"fire-fn-compat",[aA]:"fire-iid",[lA]:"fire-iid-compat",[uA]:"fire-fcm",[cA]:"fire-fcm-compat",[hA]:"fire-perf",[dA]:"fire-perf-compat",[fA]:"fire-rc",[pA]:"fire-rc-compat",[mA]:"fire-gcs",[gA]:"fire-gcs-compat",[yA]:"fire-fst",[vA]:"fire-fst-compat",[_A]:"fire-vertex","fire-js":"fire-js",[wA]:"fire-js-all"};/**
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
 */const hu=new Map,IA=new Map,pd=new Map;function Ng(t,e){try{t.container.addComponent(e)}catch(n){tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ri(t){const e=t.name;if(pd.has(e))return tr.debug(`There were multiple attempts to register component ${e}.`),!1;pd.set(e,t);for(const n of hu.values())Ng(n,t);for(const n of IA.values())Ng(n,t);return!0}function Gu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const SA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new va("app","Firebase",SA);/**
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
 */class AA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
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
 */const Di=EA;function D0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:fd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Nr.create("bad-app-name",{appName:String(i)});if(n||(n=x0()),!n)throw Nr.create("no-options");const s=hu.get(i);if(s){if(ki(n,s.options)&&ki(r,s.config))return s;throw Nr.create("duplicate-app",{appName:i})}const o=new bS(i);for(const u of pd.values())o.addComponent(u);const l=new AA(n,r,o);return hu.set(i,l),l}function Ff(t=fd){const e=hu.get(t);if(!e&&t===fd&&x0())return D0();if(!e)throw Nr.create("no-app",{appName:t});return e}function xn(t,e,n){let r=TA[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tr.warn(o.join(" "));return}Ri(new Fr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const kA="firebase-heartbeat-database",RA=1,ia="firebase-heartbeat-store";let ih=null;function V0(){return ih||(ih=WS(kA,RA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ia)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),ih}async function xA(t){try{const n=(await V0()).transaction(ia),r=await n.objectStore(ia).get(O0(t));return await n.done,r}catch(e){if(e instanceof Mn)tr.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tr.warn(n.message)}}}async function Dg(t,e){try{const r=(await V0()).transaction(ia,"readwrite");await r.objectStore(ia).put(e,O0(t)),await r.done}catch(n){if(n instanceof Mn)tr.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tr.warn(r.message)}}}function O0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const CA=1024,PA=30;class bA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>PA){const o=VA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){tr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vg(),{heartbeatsToSend:r,unsentEntries:i}=NA(this._heartbeatsCache.heartbeats),s=cu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return tr.warn(n),""}}}function Vg(){return new Date().toISOString().substring(0,10)}function NA(t,e=CA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Og(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Og(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vS()?wS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Dg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Dg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Og(t){return cu(JSON.stringify({version:2,heartbeats:t})).length}function VA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function OA(t){Ri(new Fr("platform-logger",e=>new GS(e),"PRIVATE")),Ri(new Fr("heartbeat",e=>new bA(e),"PRIVATE")),xn(dd,bg,t),xn(dd,bg,"esm2020"),xn("fire-js","")}OA("");var LA="firebase",MA="12.13.0";/**
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
 */xn(LA,MA,"app");function L0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const FA=L0,M0=new va("auth","Firebase",L0());/**
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
 */const du=new Lf("@firebase/auth");function jA(t,...e){du.logLevel<=de.WARN&&du.warn(`Auth (${Di}): ${t}`,...e)}function Cl(t,...e){du.logLevel<=de.ERROR&&du.error(`Auth (${Di}): ${t}`,...e)}/**
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
 */function Dn(t,...e){throw Uf(t,...e)}function pn(t,...e){return Uf(t,...e)}function jf(t,e,n){const r={...FA(),[e]:n};return new va("auth","Firebase",r).create(e,{appName:t.name})}function vi(t){return jf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function UA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Dn(t,"argument-error"),jf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Uf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return M0.create(t,...e)}function te(t,e,...n){if(!t)throw Uf(e,...n)}function Gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cl(e),new Error(e)}function nr(t,e){t||Gn(e)}/**
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
 */function md(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function zA(){return Lg()==="http:"||Lg()==="https:"}function Lg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function BA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zA()||mS()||"connection"in navigator)?navigator.onLine:!0}function $A(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ea{constructor(e,n){this.shortDelay=e,this.longDelay=n,nr(n>e,"Short delay should be less than long delay!"),this.isMobile=dS()||gS()}get(){return BA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zf(t,e){nr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class F0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const WA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const HA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qA=new Ea(3e4,6e4);function Bf(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Fs(t,e,n,r,i={}){return j0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=wa({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return pS()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Ms(t.emulatorConfig.host)&&(h.credentials="include"),F0.fetch()(await U0(t,t.config.apiHost,n,l),h)})}async function j0(t,e,n){t._canInitEmulator=!1;const r={...WA,...e};try{const i=new KA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ll(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ll(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ll(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ll(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw jf(t,f,h);Dn(t,f)}}catch(i){if(i instanceof Mn)throw i;Dn(t,"network-request-failed",{message:String(i)})}}async function GA(t,e,n,r,i={}){const s=await Fs(t,e,n,r,i);return"mfaPendingCredential"in s&&Dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function U0(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?zf(t.config,i):`${t.config.apiScheme}://${i}`;return HA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class KA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(pn(this.auth,"network-request-failed")),qA.get())})}}function ll(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=pn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function QA(t,e){return Fs(t,"POST","/v1/accounts:delete",e)}async function fu(t,e){return Fs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function YA(t,e=!1){const n=et(t),r=await n.getIdToken(e),i=$f(r);te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Oo(sh(i.auth_time)),issuedAtTime:Oo(sh(i.iat)),expirationTime:Oo(sh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sh(t){return Number(t)*1e3}function $f(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cl("JWT malformed, contained fewer than 3 sections"),null;try{const i=A0(n);return i?JSON.parse(i):(Cl("Failed to decode base64 JWT payload"),null)}catch(i){return Cl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Mg(t){const e=$f(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function sa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&XA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function XA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class JA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Oo(this.lastLoginAt),this.creationTime=Oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await sa(t,fu(e,{idToken:n}));te(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?z0(i.providerUserInfo):[],o=ek(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new gd(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function ZA(t){const e=et(t);await pu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ek(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function z0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function tk(t,e){const n=await j0(t,{},async()=>{const r=wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await U0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ms(t.emulatorConfig.host)&&(u.credentials="include"),F0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nk(t,e){return Fs(t,"POST","/v2/accounts:revokeToken",Bf(t,e))}/**
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
 */class ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=Mg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await tk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ps;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ps,this.toJSON())}_performRefresh(){return Gn("not implemented")}}/**
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
 */function fr(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new JA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new gd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await sa(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return YA(this,e)}reload(){return ZA(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new cn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(vi(this.auth));const e=await this.getIdToken();return await sa(this,QA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:y,isAnonymous:A,providerData:x,stsTokenManager:b}=n;te(p&&b,e,"internal-error");const V=ps.fromJSON(this.name,b);te(typeof p=="string",e,"internal-error"),fr(r,e.name),fr(i,e.name),te(typeof y=="boolean",e,"internal-error"),te(typeof A=="boolean",e,"internal-error"),fr(s,e.name),fr(o,e.name),fr(l,e.name),fr(u,e.name),fr(h,e.name),fr(f,e.name);const S=new cn({uid:p,auth:e,email:i,emailVerified:y,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:V,createdAt:h,lastLoginAt:f});return x&&Array.isArray(x)&&(S.providerData=x.map(w=>({...w}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new ps;i.updateFromServerResponse(n);const s=new cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await pu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?z0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ps;l.updateFromIdToken(r);const u=new cn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new gd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Fg=new Map;function Kn(t){nr(t instanceof Function,"Expected a class definition");let e=Fg.get(t);return e?(nr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fg.set(t,e),e)}/**
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
 */class B0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}B0.type="NONE";const jg=B0;/**
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
 */function Pl(t,e,n){return`firebase:${t}:${e}:${n}`}class ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Pl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await fu(this.auth,{idToken:e}).catch(()=>{});return n?cn._fromGetAccountInfoResponse(this.auth,n,e):null}return cn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ms(Kn(jg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Kn(jg);const o=Pl(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const y=await fu(e,{idToken:f}).catch(()=>{});if(!y)break;p=await cn._fromGetAccountInfoResponse(e,y,f)}else p=cn._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ms(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new ms(s,e,r))}}/**
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
 */function Ug(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(q0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(K0(e))return"Blackberry";if(Q0(e))return"Webos";if(W0(e))return"Safari";if((e.includes("chrome/")||H0(e))&&!e.includes("edge/"))return"Chrome";if(G0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $0(t=Et()){return/firefox\//i.test(t)}function W0(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function H0(t=Et()){return/crios\//i.test(t)}function q0(t=Et()){return/iemobile/i.test(t)}function G0(t=Et()){return/android/i.test(t)}function K0(t=Et()){return/blackberry/i.test(t)}function Q0(t=Et()){return/webos/i.test(t)}function Wf(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rk(t=Et()){var e;return Wf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function ik(){return yS()&&document.documentMode===10}function Y0(t=Et()){return Wf(t)||G0(t)||Q0(t)||K0(t)||/windows phone/i.test(t)||q0(t)}/**
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
 */function X0(t,e=[]){let n;switch(t){case"Browser":n=Ug(Et());break;case"Worker":n=`${Ug(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Di}/${r}`}/**
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
 */class sk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ok(t,e={}){return Fs(t,"GET","/v2/passwordPolicy",Bf(t,e))}/**
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
 */const ak=6;class lk{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??ak,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class uk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zg(this),this.idTokenSubscription=new zg(this),this.beforeStateQueue=new sk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=M0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ms.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await fu(this,{idToken:e}),r=await cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Gt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gt(this.app))return Promise.reject(vi(this));const n=e?et(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(vi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gt(this.app)?Promise.reject(vi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ok(this),n=new lk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new va("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await ms.create(this,[Kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=X0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&jA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ku(t){return et(t)}class zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=AS(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ck(t){Hf=t}function hk(t){return Hf.loadJS(t)}function dk(){return Hf.gapiScript}function fk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function pk(t,e){const n=Gu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ki(s,e??{}))return i;Dn(i,"already-initialized")}return n.initialize({options:e})}function mk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gk(t,e,n){const r=Ku(t);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=J0(e),{host:o,port:l}=yk(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(ki(h,r.config.emulator)&&ki(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ms(o)?Of(`${s}//${o}${u}`):_k()}function J0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function yk(t){const e=J0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Bg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Bg(o)}}}function Bg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _k(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Z0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gn("not implemented")}_getIdTokenResponse(e){return Gn("not implemented")}_linkToIdToken(e,n){return Gn("not implemented")}_getReauthenticationResolver(e){return Gn("not implemented")}}/**
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
 */async function gs(t,e){return GA(t,"POST","/v1/accounts:signInWithIdp",Bf(t,e))}/**
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
 */const vk="http://localhost";class xi extends Z0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new xi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:vk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wa(n)}return e}}/**
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
 */class qf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ta extends qf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _r extends Ta{constructor(){super("facebook.com")}static credential(e){return xi._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _r.credential(e.oauthAccessToken)}catch{return null}}}_r.FACEBOOK_SIGN_IN_METHOD="facebook.com";_r.PROVIDER_ID="facebook.com";/**
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
 */class Wn extends Ta{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xi._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com";Wn.PROVIDER_ID="google.com";/**
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
 */class vr extends Ta{constructor(){super("github.com")}static credential(e){return xi._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
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
 */class wr extends Ta{constructor(){super("twitter.com")}static credential(e,n){return xi._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wr.credential(n,r)}catch{return null}}}wr.TWITTER_SIGN_IN_METHOD="twitter.com";wr.PROVIDER_ID="twitter.com";/**
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
 */class Rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await cn._fromIdTokenResponse(e,r,i),o=$g(r);return new Rs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=$g(r);return new Rs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function $g(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class mu extends Mn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,mu.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new mu(e,n,r,i)}}function ew(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?mu._fromErrorAndOperation(t,s,e,r):s})}async function wk(t,e,n=!1){const r=await sa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rs._forOperation(t,"link",r)}/**
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
 */async function Ek(t,e,n=!1){const{auth:r}=t;if(Gt(r.app))return Promise.reject(vi(r));const i="reauthenticate";try{const s=await sa(t,ew(r,i,e,t),n);te(s.idToken,r,"internal-error");const o=$f(s.idToken);te(o,r,"internal-error");const{sub:l}=o;return te(t.uid===l,r,"user-mismatch"),Rs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Dn(r,"user-mismatch"),s}}/**
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
 */async function Tk(t,e,n=!1){if(Gt(t.app))return Promise.reject(vi(t));const r="signIn",i=await ew(t,r,e),s=await Rs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Ik(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function Sk(t,e,n){return et(t).beforeAuthStateChanged(e,n)}function Ak(t,e,n,r){return et(t).onAuthStateChanged(e,n,r)}function kk(t){return et(t).signOut()}const gu="__sak";/**
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
 */class tw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gu,"1"),this.storage.removeItem(gu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Rk=1e3,xk=10;class nw extends tw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Y0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ik()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,xk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Rk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nw.type="LOCAL";const Ck=nw;/**
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
 */class rw extends tw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rw.type="SESSION";const iw=rw;/**
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
 */function Pk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Qu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await Pk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qu.receivers=[];/**
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
 */function Gf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Gf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const y=p;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Cn(){return window}function Nk(t){Cn().location.href=t}/**
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
 */function sw(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function Dk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Ok(){return sw()?self:null}/**
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
 */const ow="firebaseLocalStorageDb",Lk=1,yu="firebaseLocalStorage",aw="fbase_key";class Ia{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yu(t,e){return t.transaction([yu],e?"readwrite":"readonly").objectStore(yu)}function Mk(){const t=indexedDB.deleteDatabase(ow);return new Ia(t).toPromise()}function yd(){const t=indexedDB.open(ow,Lk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yu,{keyPath:aw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yu)?e(r):(r.close(),await Mk(),e(await yd()))})})}async function Wg(t,e,n){const r=Yu(t,!0).put({[aw]:e,value:n});return new Ia(r).toPromise()}async function Fk(t,e){const n=Yu(t,!1).get(e),r=await new Ia(n).toPromise();return r===void 0?null:r.value}function Hg(t,e){const n=Yu(t,!0).delete(e);return new Ia(n).toPromise()}const jk=800,Uk=3;class lw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Uk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qu._getInstance(Ok()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Dk(),!this.activeServiceWorker)return;this.sender=new bk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yd();return await Wg(e,gu,"1"),await Hg(e,gu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Fk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yu(i,!1).getAll();return new Ia(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lw.type="LOCAL";const zk=lw;new Ea(3e4,6e4);/**
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
 */function uw(t,e){return e?Kn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kf extends Z0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Bk(t){return Tk(t.auth,new Kf(t),t.bypassAuthState)}function $k(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),Ek(n,new Kf(t),t.bypassAuthState)}async function Wk(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),wk(n,new Kf(t),t.bypassAuthState)}/**
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
 */class cw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bk;case"linkViaPopup":case"linkViaRedirect":return Wk;case"reauthViaPopup":case"reauthViaRedirect":return $k;default:Dn(this.auth,"internal-error")}}resolve(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Hk=new Ea(2e3,1e4);async function qk(t,e,n){if(Gt(t.app))return Promise.reject(pn(t,"operation-not-supported-in-this-environment"));const r=Ku(t);UA(t,e,qf);const i=uw(r,n);return new pi(r,"signInViaPopup",e,i).executeNotNull()}class pi extends cw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,pi.currentPopupAction&&pi.currentPopupAction.cancel(),pi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){nr(this.filter.length===1,"Popup operations only handle one event");const e=Gf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hk.get())};e()}}pi.currentPopupAction=null;/**
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
 */const Gk="pendingRedirect",bl=new Map;class Kk extends cw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bl.get(this.auth._key());if(!e){try{const r=await Qk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bl.set(this.auth._key(),e)}return this.bypassAuthState||bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qk(t,e){const n=Jk(e),r=Xk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Yk(t,e){bl.set(t._key(),e)}function Xk(t){return Kn(t._redirectPersistence)}function Jk(t){return Pl(Gk,t.config.apiKey,t.name)}async function Zk(t,e,n=!1){if(Gt(t.app))return Promise.reject(vi(t));const r=Ku(t),i=uw(r,e),o=await new Kk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const eR=10*60*1e3;class tR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hw(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(pn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eR&&this.cachedEventUids.clear(),this.cachedEventUids.has(qg(e))}saveEventToCache(e){this.cachedEventUids.add(qg(e)),this.lastProcessedEventTime=Date.now()}}function qg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hw(t);default:return!1}}/**
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
 */async function rR(t,e={}){return Fs(t,"GET","/v1/projects",e)}/**
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
 */const iR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sR=/^https?/;async function oR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rR(t);for(const n of e)try{if(aR(n))return}catch{}Dn(t,"unauthorized-domain")}function aR(t){const e=md(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sR.test(n))return!1;if(iR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const lR=new Ea(3e4,6e4);function Gg(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uR(t){return new Promise((e,n)=>{var i,s,o;function r(){Gg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gg(),n(pn(t,"network-request-failed"))},timeout:lR.get()})}if((s=(i=Cn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Cn().gapi)!=null&&o.load)r();else{const l=fk("iframefcb");return Cn()[l]=()=>{gapi.load?r():n(pn(t,"network-request-failed"))},hk(`${dk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Nl=null,e})}let Nl=null;function cR(t){return Nl=Nl||uR(t),Nl}/**
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
 */const hR=new Ea(5e3,15e3),dR="__/auth/iframe",fR="emulator/auth/iframe",pR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gR(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zf(e,fR):`https://${t.config.authDomain}/${dR}`,r={apiKey:e.apiKey,appName:t.name,v:Di},i=mR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${wa(r).slice(1)}`}async function yR(t){const e=await cR(t),n=Cn().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:gR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=pn(t,"network-request-failed"),l=Cn().setTimeout(()=>{s(o)},hR.get());function u(){Cn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const _R={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vR=500,wR=600,ER="_blank",TR="http://localhost";class Kg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IR(t,e,n,r=vR,i=wR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={..._R,width:r.toString(),height:i.toString(),top:s,left:o},h=Et().toLowerCase();n&&(l=H0(h)?ER:n),$0(h)&&(e=e||TR,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[A,x])=>`${y}${A}=${x},`,"");if(rk(h)&&l!=="_self")return SR(e||"",l),new Kg(null);const p=window.open(e||"",l,f);te(p,t,"popup-blocked");try{p.focus()}catch{}return new Kg(p)}function SR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const AR="__/auth/handler",kR="emulator/auth/handler",RR=encodeURIComponent("fac");async function Qg(t,e,n,r,i,s){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Di,eventId:i};if(e instanceof qf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",SS(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ta){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${RR}=${encodeURIComponent(u)}`:"";return`${xR(t)}?${wa(l).slice(1)}${h}`}function xR({config:t}){return t.emulator?zf(t,kR):`https://${t.authDomain}/${AR}`}/**
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
 */const oh="webStorageSupport";class CR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iw,this._completeRedirectFn=Zk,this._overrideRedirectResult=Yk}async _openPopup(e,n,r,i){var o;nr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Qg(e,n,r,md(),i);return IR(e,s,Gf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Qg(e,n,r,md(),i);return Nk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(nr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yR(e),r=new tR(e);return n.register("authEvent",i=>(te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oh,{type:oh},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[oh];s!==void 0&&n(!!s),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Y0()||W0()||Wf()}}const PR=CR;var Yg="@firebase/auth",Xg="1.13.1";/**
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
 */class bR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function NR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DR(t){Ri(new Fr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:X0(t)},h=new uk(r,i,s,u);return mk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ri(new Fr("auth-internal",e=>{const n=Ku(e.getProvider("auth").getImmediate());return(r=>new bR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(Yg,Xg,NR(t)),xn(Yg,Xg,"esm2020")}/**
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
 */const VR=5*60,OR=C0("authIdTokenMaxAge")||VR;let Jg=null;const LR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>OR)return;const i=n==null?void 0:n.token;Jg!==i&&(Jg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function MR(t=Ff()){const e=Gu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pk(t,{popupRedirectResolver:PR,persistence:[zk,Ck,iw]}),r=C0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=LR(s.toString());Sk(n,o,()=>o(n.currentUser)),Ik(n,l=>o(l))}}const i=k0("auth");return i&&gk(n,`http://${i}`),n}function FR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}ck({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=pn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",FR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DR("Browser");var Zg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,dw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function E(){}E.prototype=_.prototype,v.F=_.prototype,v.prototype=new E,v.prototype.constructor=v,v.D=function(I,k,C){for(var T=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)T[Se-2]=arguments[Se];return _.prototype[k].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,_,E){E||(E=0);const I=Array(16);if(typeof _=="string")for(var k=0;k<16;++k)I[k]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(k=0;k<16;++k)I[k]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=v.g[0],E=v.g[1],k=v.g[2];let C=v.g[3],T;T=_+(C^E&(k^C))+I[0]+3614090360&4294967295,_=E+(T<<7&4294967295|T>>>25),T=C+(k^_&(E^k))+I[1]+3905402710&4294967295,C=_+(T<<12&4294967295|T>>>20),T=k+(E^C&(_^E))+I[2]+606105819&4294967295,k=C+(T<<17&4294967295|T>>>15),T=E+(_^k&(C^_))+I[3]+3250441966&4294967295,E=k+(T<<22&4294967295|T>>>10),T=_+(C^E&(k^C))+I[4]+4118548399&4294967295,_=E+(T<<7&4294967295|T>>>25),T=C+(k^_&(E^k))+I[5]+1200080426&4294967295,C=_+(T<<12&4294967295|T>>>20),T=k+(E^C&(_^E))+I[6]+2821735955&4294967295,k=C+(T<<17&4294967295|T>>>15),T=E+(_^k&(C^_))+I[7]+4249261313&4294967295,E=k+(T<<22&4294967295|T>>>10),T=_+(C^E&(k^C))+I[8]+1770035416&4294967295,_=E+(T<<7&4294967295|T>>>25),T=C+(k^_&(E^k))+I[9]+2336552879&4294967295,C=_+(T<<12&4294967295|T>>>20),T=k+(E^C&(_^E))+I[10]+4294925233&4294967295,k=C+(T<<17&4294967295|T>>>15),T=E+(_^k&(C^_))+I[11]+2304563134&4294967295,E=k+(T<<22&4294967295|T>>>10),T=_+(C^E&(k^C))+I[12]+1804603682&4294967295,_=E+(T<<7&4294967295|T>>>25),T=C+(k^_&(E^k))+I[13]+4254626195&4294967295,C=_+(T<<12&4294967295|T>>>20),T=k+(E^C&(_^E))+I[14]+2792965006&4294967295,k=C+(T<<17&4294967295|T>>>15),T=E+(_^k&(C^_))+I[15]+1236535329&4294967295,E=k+(T<<22&4294967295|T>>>10),T=_+(k^C&(E^k))+I[1]+4129170786&4294967295,_=E+(T<<5&4294967295|T>>>27),T=C+(E^k&(_^E))+I[6]+3225465664&4294967295,C=_+(T<<9&4294967295|T>>>23),T=k+(_^E&(C^_))+I[11]+643717713&4294967295,k=C+(T<<14&4294967295|T>>>18),T=E+(C^_&(k^C))+I[0]+3921069994&4294967295,E=k+(T<<20&4294967295|T>>>12),T=_+(k^C&(E^k))+I[5]+3593408605&4294967295,_=E+(T<<5&4294967295|T>>>27),T=C+(E^k&(_^E))+I[10]+38016083&4294967295,C=_+(T<<9&4294967295|T>>>23),T=k+(_^E&(C^_))+I[15]+3634488961&4294967295,k=C+(T<<14&4294967295|T>>>18),T=E+(C^_&(k^C))+I[4]+3889429448&4294967295,E=k+(T<<20&4294967295|T>>>12),T=_+(k^C&(E^k))+I[9]+568446438&4294967295,_=E+(T<<5&4294967295|T>>>27),T=C+(E^k&(_^E))+I[14]+3275163606&4294967295,C=_+(T<<9&4294967295|T>>>23),T=k+(_^E&(C^_))+I[3]+4107603335&4294967295,k=C+(T<<14&4294967295|T>>>18),T=E+(C^_&(k^C))+I[8]+1163531501&4294967295,E=k+(T<<20&4294967295|T>>>12),T=_+(k^C&(E^k))+I[13]+2850285829&4294967295,_=E+(T<<5&4294967295|T>>>27),T=C+(E^k&(_^E))+I[2]+4243563512&4294967295,C=_+(T<<9&4294967295|T>>>23),T=k+(_^E&(C^_))+I[7]+1735328473&4294967295,k=C+(T<<14&4294967295|T>>>18),T=E+(C^_&(k^C))+I[12]+2368359562&4294967295,E=k+(T<<20&4294967295|T>>>12),T=_+(E^k^C)+I[5]+4294588738&4294967295,_=E+(T<<4&4294967295|T>>>28),T=C+(_^E^k)+I[8]+2272392833&4294967295,C=_+(T<<11&4294967295|T>>>21),T=k+(C^_^E)+I[11]+1839030562&4294967295,k=C+(T<<16&4294967295|T>>>16),T=E+(k^C^_)+I[14]+4259657740&4294967295,E=k+(T<<23&4294967295|T>>>9),T=_+(E^k^C)+I[1]+2763975236&4294967295,_=E+(T<<4&4294967295|T>>>28),T=C+(_^E^k)+I[4]+1272893353&4294967295,C=_+(T<<11&4294967295|T>>>21),T=k+(C^_^E)+I[7]+4139469664&4294967295,k=C+(T<<16&4294967295|T>>>16),T=E+(k^C^_)+I[10]+3200236656&4294967295,E=k+(T<<23&4294967295|T>>>9),T=_+(E^k^C)+I[13]+681279174&4294967295,_=E+(T<<4&4294967295|T>>>28),T=C+(_^E^k)+I[0]+3936430074&4294967295,C=_+(T<<11&4294967295|T>>>21),T=k+(C^_^E)+I[3]+3572445317&4294967295,k=C+(T<<16&4294967295|T>>>16),T=E+(k^C^_)+I[6]+76029189&4294967295,E=k+(T<<23&4294967295|T>>>9),T=_+(E^k^C)+I[9]+3654602809&4294967295,_=E+(T<<4&4294967295|T>>>28),T=C+(_^E^k)+I[12]+3873151461&4294967295,C=_+(T<<11&4294967295|T>>>21),T=k+(C^_^E)+I[15]+530742520&4294967295,k=C+(T<<16&4294967295|T>>>16),T=E+(k^C^_)+I[2]+3299628645&4294967295,E=k+(T<<23&4294967295|T>>>9),T=_+(k^(E|~C))+I[0]+4096336452&4294967295,_=E+(T<<6&4294967295|T>>>26),T=C+(E^(_|~k))+I[7]+1126891415&4294967295,C=_+(T<<10&4294967295|T>>>22),T=k+(_^(C|~E))+I[14]+2878612391&4294967295,k=C+(T<<15&4294967295|T>>>17),T=E+(C^(k|~_))+I[5]+4237533241&4294967295,E=k+(T<<21&4294967295|T>>>11),T=_+(k^(E|~C))+I[12]+1700485571&4294967295,_=E+(T<<6&4294967295|T>>>26),T=C+(E^(_|~k))+I[3]+2399980690&4294967295,C=_+(T<<10&4294967295|T>>>22),T=k+(_^(C|~E))+I[10]+4293915773&4294967295,k=C+(T<<15&4294967295|T>>>17),T=E+(C^(k|~_))+I[1]+2240044497&4294967295,E=k+(T<<21&4294967295|T>>>11),T=_+(k^(E|~C))+I[8]+1873313359&4294967295,_=E+(T<<6&4294967295|T>>>26),T=C+(E^(_|~k))+I[15]+4264355552&4294967295,C=_+(T<<10&4294967295|T>>>22),T=k+(_^(C|~E))+I[6]+2734768916&4294967295,k=C+(T<<15&4294967295|T>>>17),T=E+(C^(k|~_))+I[13]+1309151649&4294967295,E=k+(T<<21&4294967295|T>>>11),T=_+(k^(E|~C))+I[4]+4149444226&4294967295,_=E+(T<<6&4294967295|T>>>26),T=C+(E^(_|~k))+I[11]+3174756917&4294967295,C=_+(T<<10&4294967295|T>>>22),T=k+(_^(C|~E))+I[2]+718787259&4294967295,k=C+(T<<15&4294967295|T>>>17),T=E+(C^(k|~_))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(k+(T<<21&4294967295|T>>>11))&4294967295,v.g[2]=v.g[2]+k&4294967295,v.g[3]=v.g[3]+C&4294967295}r.prototype.v=function(v,_){_===void 0&&(_=v.length);const E=_-this.blockSize,I=this.C;let k=this.h,C=0;for(;C<_;){if(k==0)for(;C<=E;)i(this,v,C),C+=this.blockSize;if(typeof v=="string"){for(;C<_;)if(I[k++]=v.charCodeAt(C++),k==this.blockSize){i(this,I),k=0;break}}else for(;C<_;)if(I[k++]=v[C++],k==this.blockSize){i(this,I),k=0;break}}this.h=k,this.o+=_},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;_=this.o*8;for(var E=v.length-8;E<v.length;++E)v[E]=_&255,_/=256;for(this.v(v),v=Array(16),_=0,E=0;E<4;++E)for(let I=0;I<32;I+=8)v[_++]=this.g[E]>>>I&255;return v};function s(v,_){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=_(v)}function o(v,_){this.h=_;const E=[];let I=!0;for(let k=v.length-1;k>=0;k--){const C=v[k]|0;I&&C==_||(E[k]=C,I=!1)}this.g=E}var l={};function u(v){return-128<=v&&v<128?s(v,function(_){return new o([_|0],_<0?-1:0)}):new o([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return p;if(v<0)return V(h(-v));const _=[];let E=1;for(let I=0;v>=E;I++)_[I]=v/E|0,E*=4294967296;return new o(_,0)}function f(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return V(f(v.substring(1),_));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=h(Math.pow(_,8));let I=p;for(let C=0;C<v.length;C+=8){var k=Math.min(8,v.length-C);const T=parseInt(v.substring(C,C+k),_);k<8?(k=h(Math.pow(_,k)),I=I.j(k).add(h(T))):(I=I.j(E),I=I.add(h(T)))}return I}var p=u(0),y=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(b(this))return-V(this).m();let v=0,_=1;for(let E=0;E<this.g.length;E++){const I=this.i(E);v+=(I>=0?I:4294967296+I)*_,_*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(x(this))return"0";if(b(this))return"-"+V(this).toString(v);const _=h(Math.pow(v,6));var E=this;let I="";for(;;){const k=D(E,_).g;E=S(E,k.j(_));let C=((E.g.length>0?E.g[0]:E.h)>>>0).toString(v);if(E=k,x(E))return C+I;for(;C.length<6;)C="0"+C;I=C+I}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function x(v){if(v.h!=0)return!1;for(let _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function b(v){return v.h==-1}t.l=function(v){return v=S(this,v),b(v)?-1:x(v)?0:1};function V(v){const _=v.g.length,E=[];for(let I=0;I<_;I++)E[I]=~v.g[I];return new o(E,~v.h).add(y)}t.abs=function(){return b(this)?V(this):this},t.add=function(v){const _=Math.max(this.g.length,v.g.length),E=[];let I=0;for(let k=0;k<=_;k++){let C=I+(this.i(k)&65535)+(v.i(k)&65535),T=(C>>>16)+(this.i(k)>>>16)+(v.i(k)>>>16);I=T>>>16,C&=65535,T&=65535,E[k]=T<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function S(v,_){return v.add(V(_))}t.j=function(v){if(x(this)||x(v))return p;if(b(this))return b(v)?V(this).j(V(v)):V(V(this).j(v));if(b(v))return V(this.j(V(v)));if(this.l(A)<0&&v.l(A)<0)return h(this.m()*v.m());const _=this.g.length+v.g.length,E=[];for(var I=0;I<2*_;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(let k=0;k<v.g.length;k++){const C=this.i(I)>>>16,T=this.i(I)&65535,Se=v.i(k)>>>16,Ue=v.i(k)&65535;E[2*I+2*k]+=T*Ue,w(E,2*I+2*k),E[2*I+2*k+1]+=C*Ue,w(E,2*I+2*k+1),E[2*I+2*k+1]+=T*Se,w(E,2*I+2*k+1),E[2*I+2*k+2]+=C*Se,w(E,2*I+2*k+2)}for(v=0;v<_;v++)E[v]=E[2*v+1]<<16|E[2*v];for(v=_;v<2*_;v++)E[v]=0;return new o(E,0)};function w(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function R(v,_){this.g=v,this.h=_}function D(v,_){if(x(_))throw Error("division by zero");if(x(v))return new R(p,p);if(b(v))return _=D(V(v),_),new R(V(_.g),V(_.h));if(b(_))return _=D(v,V(_)),new R(V(_.g),_.h);if(v.g.length>30){if(b(v)||b(_))throw Error("slowDivide_ only works with positive integers.");for(var E=y,I=_;I.l(v)<=0;)E=M(E),I=M(I);var k=U(E,1),C=U(I,1);for(I=U(I,2),E=U(E,2);!x(I);){var T=C.add(I);T.l(v)<=0&&(k=k.add(E),C=T),I=U(I,1),E=U(E,1)}return _=S(v,k.j(_)),new R(k,_)}for(k=p;v.l(_)>=0;){for(E=Math.max(1,Math.floor(v.m()/_.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),C=h(E),T=C.j(_);b(T)||T.l(v)>0;)E-=I,C=h(E),T=C.j(_);x(C)&&(C=y),k=k.add(C),v=S(v,T)}return new R(k,v)}t.B=function(v){return D(this,v).h},t.and=function(v){const _=Math.max(this.g.length,v.g.length),E=[];for(let I=0;I<_;I++)E[I]=this.i(I)&v.i(I);return new o(E,this.h&v.h)},t.or=function(v){const _=Math.max(this.g.length,v.g.length),E=[];for(let I=0;I<_;I++)E[I]=this.i(I)|v.i(I);return new o(E,this.h|v.h)},t.xor=function(v){const _=Math.max(this.g.length,v.g.length),E=[];for(let I=0;I<_;I++)E[I]=this.i(I)^v.i(I);return new o(E,this.h^v.h)};function M(v){const _=v.g.length+1,E=[];for(let I=0;I<_;I++)E[I]=v.i(I)<<1|v.i(I-1)>>>31;return new o(E,v.h)}function U(v,_){const E=_>>5;_%=32;const I=v.g.length-E,k=[];for(let C=0;C<I;C++)k[C]=_>0?v.i(C+E)>>>_|v.i(C+E+1)<<32-_:v.i(C+E);return new o(k,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,dw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Dr=o}).apply(typeof Zg<"u"?Zg:typeof self<"u"?self:typeof window<"u"?window:{});var ul=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fw,To,pw,Dl,_d,mw,gw,yw;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ul=="object"&&ul];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(c){var d=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&d.push([m,c[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,P,N){for(var W=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)W[oe-2]=arguments[oe];return c.prototype[P].apply(m,W)}}var y=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const c=a.length;if(c>0){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function x(a,c){for(let m=1;m<arguments.length;m++){const P=arguments[m];var d=typeof P;if(d=d!="object"?d:P?Array.isArray(P)?"array":d:"null",d=="array"||d=="object"&&typeof P.length=="number"){d=a.length||0;const N=P.length||0;a.length=d+N;for(let W=0;W<N;W++)a[d+W]=P[W]}else a.push(P)}}class b{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function V(a){o.setTimeout(()=>{throw a},0)}function S(){var a=v;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class w{constructor(){this.h=this.g=null}add(c,d){const m=R.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var R=new b(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let M,U=!1,v=new w,_=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(E)}};function E(){for(var a;a=S();){try{a.h.call(a.g)}catch(d){V(d)}var c=R;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}U=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function Se(a,c){k.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p(Se,k),Se.prototype.init=function(a,c){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Se.Z.h.call(this)},Se.prototype.h=function(){Se.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ue="closure_listenable_"+(Math.random()*1e6|0),tn=0;function ft(a,c,d,m,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=P,this.key=++tn,this.da=this.fa=!1}function H(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function X(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function Z(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function ge(a){const c={};for(const d in a)c[d]=a[d];return c}const fe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tt(a,c){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let N=0;N<fe.length;N++)d=fe[N],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function $(a){this.src=a,this.g={},this.h=0}$.prototype.add=function(a,c,d,m,P){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const W=q(a,c,m,P);return W>-1?(c=a[W],d||(c.fa=!1)):(c=new ft(c,this.src,N,!!m,P),c.fa=d,a.push(c)),c};function ie(a,c){const d=c.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,c,void 0),N;(N=P>=0)&&Array.prototype.splice.call(m,P,1),N&&(H(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function q(a,c,d,m){for(let P=0;P<a.length;++P){const N=a[P];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==m)return P}return-1}var se="closure_lm_"+(Math.random()*1e6|0),ze={};function pe(a,c,d,m,P){if(Array.isArray(c)){for(let N=0;N<c.length;N++)pe(a,c[N],d,m,P);return null}return d=Zr(d),a&&a[Ue]?a.J(c,d,l(m)?!!m.capture:!1,P):we(a,c,d,!1,m,P)}function we(a,c,d,m,P,N){if(!c)throw Error("Invalid event type");const W=l(P)?!!P.capture:!!P;let oe=nn(a);if(oe||(a[se]=oe=new $(a)),d=oe.add(c,d,m,W,N),d.proxy)return d;if(m=Be(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)C||(P=W),P===void 0&&(P=!1),a.addEventListener(c.toString(),m,P);else if(a.attachEvent)a.attachEvent(Jr(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Be(){function a(d){return c.call(a.src,a.listener,d)}const c=Mi;return a}function It(a,c,d,m,P){if(Array.isArray(c))for(var N=0;N<c.length;N++)It(a,c[N],d,m,P);else m=l(m)?!!m.capture:!!m,d=Zr(d),a&&a[Ue]?(a=a.i,N=String(c).toString(),N in a.g&&(c=a.g[N],d=q(c,d,m,P),d>-1&&(H(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[N],a.h--)))):a&&(a=nn(a))&&(c=a.g[c.toString()],a=-1,c&&(a=q(c,d,m,P)),(d=a>-1?c[a]:null)&&_n(d))}function _n(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Ue])ie(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(Jr(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=nn(c))?(ie(d,a),d.h==0&&(d.src=null,c[se]=null)):H(a)}}}function Jr(a){return a in ze?ze[a]:ze[a]="on"+a}function Mi(a,c){if(a.da)a=!0;else{c=new Se(c,this);const d=a.listener,m=a.ha||a.src;a.fa&&_n(a),a=d.call(m,c)}return a}function nn(a){return a=a[se],a instanceof $?a:null}var jn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Zr(a){return typeof a=="function"?a:(a[jn]||(a[jn]=function(c){return a.handleEvent(c)}),a[jn])}function Me(){I.call(this),this.i=new $(this),this.M=this,this.G=null}p(Me,I),Me.prototype[Ue]=!0,Me.prototype.removeEventListener=function(a,c,d,m){It(this,a,c,d,m)};function $e(a,c){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new k(c,a);else if(c instanceof k)c.target=c.target||a;else{var P=c;c=new k(m,a),Tt(c,P)}P=!0;let N,W;if(d)for(W=d.length-1;W>=0;W--)N=c.g=d[W],P=Un(N,m,!0,c)&&P;if(N=c.g=a,P=Un(N,m,!0,c)&&P,P=Un(N,m,!1,c)&&P,d)for(W=0;W<d.length;W++)N=c.g=d[W],P=Un(N,m,!1,c)&&P}Me.prototype.N=function(){if(Me.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let m=0;m<d.length;m++)H(d[m]);delete a.g[c],a.h--}}this.G=null},Me.prototype.J=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},Me.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function Un(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let P=!0;for(let N=0;N<c.length;++N){const W=c[N];if(W&&!W.da&&W.capture==d){const oe=W.listener,Qe=W.ha||W.src;W.fa&&ie(a.i,W),P=oe.call(Qe,m)!==!1&&P}}return P&&!m.defaultPrevented}function ei(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function ti(a){a.g=ei(()=>{a.g=null,a.i&&(a.i=!1,ti(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Fi extends I{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ti(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rn(a){I.call(this),this.h=a,this.g={}}p(rn,I);var ba=[];function Na(a){X(a.g,function(c,d){this.g.hasOwnProperty(d)&&_n(c)},a),a.g={}}rn.prototype.N=function(){rn.Z.N.call(this),Na(this)},rn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ji=o.JSON.stringify,Ws=o.JSON.parse,Da=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Hs(){}function Va(){}var ni={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function qs(){k.call(this,"d")}p(qs,k);function Gs(){k.call(this,"c")}p(Gs,k);var zn={},Oa=null;function Ui(){return Oa=Oa||new Me}zn.Ia="serverreachability";function ri(a){k.call(this,zn.Ia,a)}p(ri,k);function sn(a){const c=Ui();$e(c,new ri(c))}zn.STAT_EVENT="statevent";function Ks(a,c){k.call(this,zn.STAT_EVENT,a),this.stat=c}p(Ks,k);function tt(a){const c=Ui();$e(c,new Ks(c,a))}zn.Ja="timingevent";function Qs(a,c){k.call(this,zn.Ja,a),this.size=c}p(Qs,k);function F(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function z(){this.g=!0}z.prototype.ua=function(){this.g=!1};function Y(a,c,d,m,P,N){a.info(function(){if(a.g)if(N){var W="",oe=N.split("&");for(let Ee=0;Ee<oe.length;Ee++){var Qe=oe[Ee].split("=");if(Qe.length>1){const nt=Qe[0];Qe=Qe[1];const En=nt.split("_");W=En.length>=2&&En[1]=="type"?W+(nt+"="+Qe+"&"):W+(nt+"=redacted&")}}}else W=null;else W=N;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+c+`
`+d+`
`+W})}function le(a,c,d,m,P,N,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+c+`
`+d+`
`+N+" "+W})}function We(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+St(a,d)+(m?" "+m:"")})}function vn(a,c){a.info(function(){return"TIMEOUT: "+c})}z.prototype.info=function(){};function St(a,c){if(!a.g)return c;if(!c)return null;try{const N=JSON.parse(c);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var P=m[0];if(P!="noop"&&P!="stop"&&P!="close")for(let W=1;W<m.length;W++)m[W]=""}}}}return ji(N)}catch{return c}}var zi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Np={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Dp;function pc(){}p(pc,Hs),pc.prototype.g=function(){return new XMLHttpRequest},Dp=new pc;function Ys(a){return encodeURIComponent(String(a))}function ZE(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function or(a,c,d,m){this.j=a,this.i=c,this.l=d,this.S=m||1,this.V=new rn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Vp}function Vp(){this.i=null,this.g="",this.h=!1}var Op={},mc={};function gc(a,c,d){a.M=1,a.A=Ma(wn(c)),a.u=d,a.R=!0,Lp(a,null)}function Lp(a,c){a.F=Date.now(),La(a),a.B=wn(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),Qp(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Vp,a.g=fm(a.j,d?c:null,!a.u),a.P>0&&(a.O=new Fi(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,m=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(ba[0]=P.toString()),P=ba);for(let N=0;N<P.length;N++){const W=pe(d,P[N],m||c.handleEvent,!1,c.h||c);if(!W)break;c.g[W.key]=W}c=a.J?ge(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),sn(),Y(a.i,a.v,a.B,a.l,a.S,a.u)}or.prototype.ba=function(a){a=a.target;const c=this.O;c&&ur(a)==3?c.j():this.Y(a)},or.prototype.Y=function(a){try{if(a==this.g)e:{const oe=ur(this.g),Qe=this.g.ya(),Ee=this.g.ca();if(!(oe<3)&&(oe!=3||this.g&&(this.h.h||this.g.la()||nm(this.g)))){this.K||oe!=4||Qe==7||(Qe==8||Ee<=0?sn(3):sn(2)),yc(this);var c=this.g.ca();this.X=c;var d=eT(this);if(this.o=c==200,le(this.i,this.v,this.B,this.l,this.S,oe,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,P=this.g;if((m=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(m)){var N=m;break t}}N=null}if(a=N)We(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,_c(this,a);else{this.o=!1,this.m=3,tt(12),ii(this),Xs(this);break e}}if(this.R){a=!0;let nt;for(;!this.K&&this.C<d.length;)if(nt=tT(this,d),nt==mc){oe==4&&(this.m=4,tt(14),a=!1),We(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==Op){this.m=4,tt(15),We(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else We(this.i,this.l,nt,null),_c(this,nt);if(Mp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||d.length!=0||this.h.h||(this.m=1,tt(16),a=!1),this.o=this.o&&a,!a)We(this.i,this.l,d,"[Invalid Chunked Response]"),ii(this),Xs(this);else if(d.length>0&&!this.W){this.W=!0;var W=this.j;W.g==this&&W.aa&&!W.P&&(W.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),kc(W),W.P=!0,tt(11))}}else We(this.i,this.l,d,null),_c(this,d);oe==4&&ii(this),this.o&&!this.K&&(oe==4?um(this.j,this):(this.o=!1,La(this)))}else mT(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,tt(12)):(this.m=0,tt(13)),ii(this),Xs(this)}}}catch{}finally{}};function eT(a){if(!Mp(a))return a.g.la();const c=nm(a.g);if(c==="")return"";let d="";const m=c.length,P=ur(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return ii(a),Xs(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<m;N++)a.h.h=!0,d+=a.h.i.decode(c[N],{stream:!(P&&N==m-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function Mp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function tT(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?mc:(d=Number(c.substring(d,m)),isNaN(d)?Op:(m+=1,m+d>c.length?mc:(c=c.slice(m,m+d),a.C=m+d,c)))}or.prototype.cancel=function(){this.K=!0,ii(this)};function La(a){a.T=Date.now()+a.H,Fp(a,a.H)}function Fp(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=F(h(a.aa,a),c)}function yc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}or.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(vn(this.i,this.B),this.M!=2&&(sn(),tt(17)),ii(this),this.m=2,Xs(this)):Fp(this,this.T-a)};function Xs(a){a.j.I==0||a.K||um(a.j,a)}function ii(a){yc(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Na(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function _c(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||vc(d.h,a))){if(!a.L&&vc(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Ba(d),Ua(d);else break e;Ac(d),tt(18)}}else d.xa=P[1],0<d.xa-d.K&&P[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=F(h(d.Va,d),6e3));zp(d.h)<=1&&d.ta&&(d.ta=void 0)}else oi(d,11)}else if((a.L||d.g==a)&&Ba(d),!T(c))for(P=d.Ba.g.parse(c),c=0;c<P.length;c++){let Ee=P[c];const nt=Ee[0];if(!(nt<=d.K))if(d.K=nt,Ee=Ee[1],d.I==2)if(Ee[0]=="c"){d.M=Ee[1],d.ba=Ee[2];const En=Ee[3];En!=null&&(d.ka=En,d.j.info("VER="+d.ka));const ai=Ee[4];ai!=null&&(d.za=ai,d.j.info("SVER="+d.za));const cr=Ee[5];cr!=null&&typeof cr=="number"&&cr>0&&(m=1.5*cr,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const hr=a.g;if(hr){const Wa=hr.g?hr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wa){var N=m.h;N.g||Wa.indexOf("spdy")==-1&&Wa.indexOf("quic")==-1&&Wa.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(wc(N,N.h),N.h=null))}if(m.G){const Rc=hr.g?hr.g.getResponseHeader("X-HTTP-Session-Id"):null;Rc&&(m.wa=Rc,Ae(m.J,m.G,Rc))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var W=a;if(m.na=dm(m,m.L?m.ba:null,m.W),W.L){Bp(m.h,W);var oe=W,Qe=m.O;Qe&&(oe.H=Qe),oe.D&&(yc(oe),La(oe)),m.g=W}else am(m);d.i.length>0&&za(d)}else Ee[0]!="stop"&&Ee[0]!="close"||oi(d,7);else d.I==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?oi(d,7):Sc(d):Ee[0]!="noop"&&d.l&&d.l.qa(Ee),d.A=0)}}sn(4)}catch{}}var nT=class{constructor(a,c){this.g=a,this.map=c}};function jp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Up(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function zp(a){return a.h?1:a.g?a.g.size:0}function vc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function wc(a,c){a.g?a.g.add(c):a.h=c}function Bp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}jp.prototype.cancel=function(){if(this.i=$p(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function $p(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return A(a.i)}var Wp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rT(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let P,N=null;m>=0?(P=a[d].substring(0,m),N=a[d].substring(m+1)):P=a[d],c(P,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function ar(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof ar?(this.l=a.l,Js(this,a.j),this.o=a.o,this.g=a.g,Zs(this,a.u),this.h=a.h,Ec(this,Yp(a.i)),this.m=a.m):a&&(c=String(a).match(Wp))?(this.l=!1,Js(this,c[1]||"",!0),this.o=eo(c[2]||""),this.g=eo(c[3]||"",!0),Zs(this,c[4]),this.h=eo(c[5]||"",!0),Ec(this,c[6]||"",!0),this.m=eo(c[7]||"")):(this.l=!1,this.i=new no(null,this.l))}ar.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(to(c,Hp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(to(c,Hp,!0),"@"),a.push(Ys(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(to(d,d.charAt(0)=="/"?oT:sT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",to(d,lT)),a.join("")},ar.prototype.resolve=function(a){const c=wn(this);let d=!!a.j;d?Js(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var m=a.h;if(d)Zs(c,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var P=c.h.lastIndexOf("/");P!=-1&&(m=c.h.slice(0,P+1)+m)}if(P=m,P==".."||P==".")m="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){m=P.lastIndexOf("/",0)==0,P=P.split("/");const N=[];for(let W=0;W<P.length;){const oe=P[W++];oe=="."?m&&W==P.length&&N.push(""):oe==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),m&&W==P.length&&N.push("")):(N.push(oe),m=!0)}m=N.join("/")}else m=P}return d?c.h=m:d=a.i.toString()!=="",d?Ec(c,Yp(a.i)):d=!!a.m,d&&(c.m=a.m),c};function wn(a){return new ar(a)}function Js(a,c,d){a.j=d?eo(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Zs(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Ec(a,c,d){c instanceof no?(a.i=c,uT(a.i,a.l)):(d||(c=to(c,aT)),a.i=new no(c,a.l))}function Ae(a,c,d){a.i.set(c,d)}function Ma(a){return Ae(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function eo(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function to(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,iT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function iT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hp=/[#\/\?@]/g,sT=/[#\?:]/g,oT=/[#\?]/g,aT=/[#\?@]/g,lT=/#/g;function no(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function si(a){a.g||(a.g=new Map,a.h=0,a.i&&rT(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=no.prototype,t.add=function(a,c){si(this),this.i=null,a=Bi(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function qp(a,c){si(a),c=Bi(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Gp(a,c){return si(a),c=Bi(a,c),a.g.has(c)}t.forEach=function(a,c){si(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(c,P,m,this)},this)},this)};function Kp(a,c){si(a);let d=[];if(typeof c=="string")Gp(a,c)&&(d=d.concat(a.g.get(Bi(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return si(this),this.i=null,a=Bi(this,a),Gp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=Kp(this,a),a.length>0?String(a[0]):c):c};function Qp(a,c,d){qp(a,c),d.length>0&&(a.i=null,a.g.set(Bi(a,c),A(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var d=c[m];const P=Ys(d);d=Kp(this,d);for(let N=0;N<d.length;N++){let W=P;d[N]!==""&&(W+="="+Ys(d[N])),a.push(W)}}return this.i=a.join("&")};function Yp(a){const c=new no;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function Bi(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function uT(a,c){c&&!a.j&&(si(a),a.i=null,a.g.forEach(function(d,m){const P=m.toLowerCase();m!=P&&(qp(this,m),Qp(this,P,d))},a)),a.j=c}function cT(a,c){const d=new z;if(o.Image){const m=new Image;m.onload=f(lr,d,"TestLoadImage: loaded",!0,c,m),m.onerror=f(lr,d,"TestLoadImage: error",!1,c,m),m.onabort=f(lr,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=f(lr,d,"TestLoadImage: timeout",!1,c,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function hT(a,c){const d=new z,m=new AbortController,P=setTimeout(()=>{m.abort(),lr(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(P),N.ok?lr(d,"TestPingServer: ok",!0,c):lr(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),lr(d,"TestPingServer: error",!1,c)})}function lr(a,c,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function dT(){this.g=new Da}function Tc(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Tc,Hs),Tc.prototype.g=function(){return new Fa(this.i,this.h)};function Fa(a,c){Me.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Fa,Me),t=Fa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,io(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ro(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,io(this)),this.g&&(this.readyState=3,io(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Xp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Xp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ro(this):io(this),this.readyState==3&&Xp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ro(this))},t.Na=function(a){this.g&&(this.response=a,ro(this))},t.ga=function(){this.g&&ro(this)};function ro(a){a.readyState=4,a.l=null,a.j=null,a.B=null,io(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function io(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Jp(a){let c="";return X(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Ic(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Jp(d),typeof a=="string"?d!=null&&Ys(d):Ae(a,c,d))}function Ve(a){Me.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ve,Me);var fT=/^https?$/i,pT=["POST","PUT"];t=Ve.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Dp.g(),this.g.onreadystatechange=y(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){Zp(this,N);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(pT,c,void 0)>=0)||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,W]of d)this.g.setRequestHeader(N,W);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){Zp(this,N)}};function Zp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,em(a),ja(a)}function em(a){a.A||(a.A=!0,$e(a,"complete"),$e(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,$e(this,"complete"),$e(this,"abort"),ja(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ja(this,!0)),Ve.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?tm(this):this.Xa())},t.Xa=function(){tm(this)};function tm(a){if(a.h&&typeof s<"u"){if(a.v&&ur(a)==4)setTimeout(a.Ca.bind(a),0);else if($e(a,"readystatechange"),ur(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=N===0){let W=String(a.D).match(Wp)[1]||null;!W&&o.self&&o.self.location&&(W=o.self.location.protocol.slice(0,-1)),m=!fT.test(W?W.toLowerCase():"")}d=m}if(d)$e(a,"complete"),$e(a,"success");else{a.o=6;try{var P=ur(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",em(a)}}finally{ja(a)}}}}function ja(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||$e(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function ur(a){return a.g?a.g.readyState:0}t.ca=function(){try{return ur(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Ws(c)}};function nm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mT(a){const c={};a=(a.g&&ur(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(T(a[m]))continue;var d=ZE(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[P]||[];c[P]=N,N.push(d)}Z(c,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function so(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function rm(a){this.za=0,this.i=[],this.j=new z,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=so("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=so("baseRetryDelayMs",5e3,a),this.Za=so("retryDelaySeedMs",1e4,a),this.Ta=so("forwardChannelMaxRetries",2,a),this.va=so("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new jp(a&&a.concurrentRequestLimit),this.Ba=new dT,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=rm.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,m){tt(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=dm(this,null,this.W),za(this)};function Sc(a){if(im(a),a.I==3){var c=a.V++,d=wn(a.J);if(Ae(d,"SID",a.M),Ae(d,"RID",c),Ae(d,"TYPE","terminate"),oo(a,d),c=new or(a,a.j,c),c.M=2,c.A=Ma(wn(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=fm(c.j,null),c.g.ea(c.A)),c.F=Date.now(),La(c)}hm(a)}function Ua(a){a.g&&(kc(a),a.g.cancel(),a.g=null)}function im(a){Ua(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ba(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function za(a){if(!Up(a.h)&&!a.m){a.m=!0;var c=a.Ea;M||_(),U||(M(),U=!0),v.add(c,a),a.D=0}}function gT(a,c){return zp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=F(h(a.Ea,a,c),cm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new or(this,this.j,a);let N=this.o;if(this.U&&(N?(N=ge(N),Tt(N,this.U)):N=this.U),this.u!==null||this.R||(P.J=N,N=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=om(this,P,c),d=wn(this.J),Ae(d,"RID",a),Ae(d,"CVER",22),this.G&&Ae(d,"X-HTTP-Session-Id",this.G),oo(this,d),N&&(this.R?c="headers="+Ys(Jp(N))+"&"+c:this.u&&Ic(d,this.u,N)),wc(this.h,P),this.Ra&&Ae(d,"TYPE","init"),this.S?(Ae(d,"$req",c),Ae(d,"SID","null"),P.U=!0,gc(P,d,null)):gc(P,d,c),this.I=2}}else this.I==3&&(a?sm(this,a):this.i.length==0||Up(this.h)||sm(this))};function sm(a,c){var d;c?d=c.l:d=a.V++;const m=wn(a.J);Ae(m,"SID",a.M),Ae(m,"RID",d),Ae(m,"AID",a.K),oo(a,m),a.u&&a.o&&Ic(m,a.u,a.o),d=new or(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=om(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),wc(a.h,d),gc(d,m,c)}function oo(a,c){a.H&&X(a.H,function(d,m){Ae(c,m,d)}),a.l&&X({},function(d,m){Ae(c,m,d)})}function om(a,c,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let oe=-1;for(;;){const Qe=["count="+d];oe==-1?d>0?(oe=P[0].g,Qe.push("ofs="+oe)):oe=0:Qe.push("ofs="+oe);let Ee=!0;for(let nt=0;nt<d;nt++){var N=P[nt].g;const En=P[nt].map;if(N-=oe,N<0)oe=Math.max(0,P[nt].g-100),Ee=!1;else try{N="req"+N+"_"||"";try{var W=En instanceof Map?En:Object.entries(En);for(const[ai,cr]of W){let hr=cr;l(cr)&&(hr=ji(cr)),Qe.push(N+ai+"="+encodeURIComponent(hr))}}catch(ai){throw Qe.push(N+"type="+encodeURIComponent("_badmap")),ai}}catch{m&&m(En)}}if(Ee){W=Qe.join("&");break e}}W=void 0}return a=a.i.splice(0,d),c.G=a,W}function am(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;M||_(),U||(M(),U=!0),v.add(c,a),a.A=0}}function Ac(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=F(h(a.Da,a),cm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,lm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=F(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,tt(10),Ua(this),lm(this))};function kc(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function lm(a){a.g=new or(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=wn(a.na);Ae(c,"RID","rpc"),Ae(c,"SID",a.M),Ae(c,"AID",a.K),Ae(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ae(c,"TO",a.ia),Ae(c,"TYPE","xmlhttp"),oo(a,c),a.u&&a.o&&Ic(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Ma(wn(c)),d.u=null,d.R=!0,Lp(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Ua(this),Ac(this),tt(19))};function Ba(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function um(a,c){var d=null;if(a.g==c){Ba(a),kc(a),a.g=null;var m=2}else if(vc(a.h,c))d=c.G,Bp(a.h,c),m=1;else return;if(a.I!=0){if(c.o)if(m==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var P=a.D;m=Ui(),$e(m,new Qs(m,d)),za(a)}else am(a);else if(P=c.m,P==3||P==0&&c.X>0||!(m==1&&gT(a,c)||m==2&&Ac(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),P){case 1:oi(a,5);break;case 4:oi(a,10);break;case 3:oi(a,6);break;default:oi(a,2)}}}function cm(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function oi(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),m=a.Ua;const P=!m;m=new ar(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Js(m,"https"),Ma(m),P?cT(m.toString(),d):hT(m.toString(),d)}else tt(2);a.I=0,a.l&&a.l.pa(c),hm(a),im(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function hm(a){if(a.I=0,a.ja=[],a.l){const c=$p(a.h);(c.length!=0||a.i.length!=0)&&(x(a.ja,c),x(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function dm(a,c,d){var m=d instanceof ar?wn(d):new ar(d);if(m.g!="")c&&(m.g=c+"."+m.g),Zs(m,m.u);else{var P=o.location;m=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;const N=new ar(null);m&&Js(N,m),c&&(N.g=c),P&&Zs(N,P),d&&(N.h=d),m=N}return d=a.G,c=a.wa,d&&c&&Ae(m,d,c),Ae(m,"VER",a.ka),oo(a,m),m}function fm(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Ve(new Tc({ab:d})):new Ve(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function pm(){}t=pm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function $a(){}$a.prototype.g=function(a,c){return new Mt(a,c)};function Mt(a,c){Me.call(this),this.g=new rm(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!T(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new $i(this)}p(Mt,Me),Mt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Mt.prototype.close=function(){Sc(this.g)},Mt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=ji(a),a=d);c.i.push(new nT(c.Ya++,a)),c.I==3&&za(c)},Mt.prototype.N=function(){this.g.l=null,delete this.j,Sc(this.g),delete this.g,Mt.Z.N.call(this)};function mm(a){qs.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(mm,qs);function gm(){Gs.call(this),this.status=1}p(gm,Gs);function $i(a){this.g=a}p($i,pm),$i.prototype.ra=function(){$e(this.g,"a")},$i.prototype.qa=function(a){$e(this.g,new mm(a))},$i.prototype.pa=function(a){$e(this.g,new gm)},$i.prototype.oa=function(){$e(this.g,"b")},$a.prototype.createWebChannel=$a.prototype.g,Mt.prototype.send=Mt.prototype.o,Mt.prototype.open=Mt.prototype.m,Mt.prototype.close=Mt.prototype.close,yw=function(){return new $a},gw=function(){return Ui()},mw=zn,_d={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},zi.NO_ERROR=0,zi.TIMEOUT=8,zi.HTTP_ERROR=6,Dl=zi,Np.COMPLETE="complete",pw=Np,Va.EventType=ni,ni.OPEN="a",ni.CLOSE="b",ni.ERROR="c",ni.MESSAGE="d",Me.prototype.listen=Me.prototype.J,To=Va,Ve.prototype.listenOnce=Ve.prototype.K,Ve.prototype.getLastError=Ve.prototype.Ha,Ve.prototype.getLastErrorCode=Ve.prototype.ya,Ve.prototype.getStatus=Ve.prototype.ca,Ve.prototype.getResponseJson=Ve.prototype.La,Ve.prototype.getResponseText=Ve.prototype.la,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Fa,fw=Ve}).apply(typeof ul<"u"?ul:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let js="12.13.0";function jR(t){js=t}/**
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
 */const Ci=new Lf("@firebase/firestore");function qi(){return Ci.logLevel}function K(t,...e){if(Ci.logLevel<=de.DEBUG){const n=e.map(Qf);Ci.debug(`Firestore (${js}): ${t}`,...n)}}function rr(t,...e){if(Ci.logLevel<=de.ERROR){const n=e.map(Qf);Ci.error(`Firestore (${js}): ${t}`,...n)}}function Pi(t,...e){if(Ci.logLevel<=de.WARN){const n=e.map(Qf);Ci.warn(`Firestore (${js}): ${t}`,...n)}}function Qf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ee(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,_w(t,r,n)}function _w(t,e,n){let r=`FIRESTORE (${js}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw rr(r),new Error(r)}function _e(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||_w(e,i,r)}function re(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class vw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class zR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class BR{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){_e(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Vr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string",31837,{l:r}),new vw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string",2055,{h:e}),new yt(e)}}class $R{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class WR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new $R(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ey{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Gt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){_e(this.o===void 0,3512);const r=s=>{s.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ey(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ey(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function qR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Yf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=qR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function vd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return ah(i)===ah(s)?ue(i,s):ah(i)?1:-1}return ue(t.length,e.length)}const GR=55296,KR=57343;function ah(t){const e=t.charCodeAt(0);return e>=GR&&e<=KR}function xs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const ty="__name__";class Sn{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Sn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Sn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Sn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ue(e.length,n.length)}static compareSegments(e,n){const r=Sn.isNumericId(e),i=Sn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Sn.extractNumericId(e).compare(Sn.extractNumericId(n)):vd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dr.fromString(e.substring(4,e.length-2))}}class Te extends Sn{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const QR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Sn{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return QR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ty}static keyField(){return new lt([ty])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
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
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Te.fromString(e))}static fromName(e){return new J(Te.fromString(e).popFirst(5))}static empty(){return new J(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Te(e.slice()))}}/**
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
 */function ww(t,e,n){if(!n)throw new G(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YR(t,e,n,r){if(e===!0&&r===!0)throw new G(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ny(t){if(!J.isDocumentKey(t))throw new G(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ry(t){if(J.isDocumentKey(t))throw new G(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ew(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Xu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee(12329,{type:typeof t})}function Xt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xu(t);throw new G(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ke(t,e){const n={typeString:t};return e&&(n.value=e),n}function Sa(t,e){if(!Ew(t))throw new G(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new G(O.INVALID_ARGUMENT,n);return!0}/**
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
 */const iy=-62135596800,sy=1e6;class Re{static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*sy);return new Re(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<iy)throw new G(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sy}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Re._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Sa(e,Re._jsonSchema))return new Re(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-iy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Re._jsonSchemaVersion="firestore/timestamp/1.0",Re._jsonSchema={type:Ke("string",Re._jsonSchemaVersion),seconds:Ke("number"),nanoseconds:Ke("number")};/**
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
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Re(0,0))}static max(){return new ne(new Re(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const oa=-1;function XR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ne.fromTimestamp(r===1e9?new Re(n+1,0):new Re(n,r));return new jr(i,J.empty(),e)}function JR(t){return new jr(t.readTime,t.key,oa)}class jr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new jr(ne.min(),J.empty(),oa)}static max(){return new jr(ne.max(),J.empty(),oa)}}function ZR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const ex="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Us(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==ex)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function nx(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ju{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ju.ce=-1;/**
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
 */const Xf=-1;function Zu(t){return t==null}function _u(t){return t===0&&1/t==-1/0}function rx(t){return typeof t=="number"&&Number.isInteger(t)&&!_u(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Tw="";function ix(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=oy(e)),e=sx(t.get(n),e);return oy(e)}function sx(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Tw:n+="";break;default:n+=s}}return n}function oy(t){return t+Tw+""}/**
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
 */function ay(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Iw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cl(this.root,e,this.comparator,!1)}getReverseIterator(){return new cl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cl(this.root,e,this.comparator,!0)}}class cl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=s??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new at(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ze{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ly(this.data.getIterator())}getIteratorFrom(e){return new ly(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class ly{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new Ze(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Sw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Sw("Invalid base64 string: "+s):s}}(e);return new ht(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const ox=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ur(t){if(_e(!!t,39018),typeof t=="string"){let e=0;const n=ox.exec(t);if(_e(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zr(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
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
 */const Aw="server_timestamp",kw="__type__",Rw="__previous_value__",xw="__local_write_time__";function Jf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[kw])==null?void 0:r.stringValue)===Aw}function ec(t){const e=t.mapValue.fields[Rw];return Jf(e)?ec(e):e}function aa(t){const e=Ur(t.mapValue.fields[xw].timestampValue);return new Re(e.seconds,e.nanos)}/**
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
 */class ax{constructor(e,n,r,i,s,o,l,u,h,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const vu="(default)";class la{constructor(e,n){this.projectId=e,this.database=n||vu}static empty(){return new la("","")}get isDefaultDatabase(){return this.database===vu}isEqual(e){return e instanceof la&&e.projectId===this.projectId&&e.database===this.database}}function lx(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new G(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new la(t.options.projectId,e)}/**
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
 */const Cw="__type__",ux="__max__",hl={mapValue:{}},Pw="__vector__",wu="value";function Br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jf(t)?4:hx(t)?9007199254740991:cx(t)?10:11:ee(28295,{value:t})}function Vn(t,e){if(t===e)return!0;const n=Br(t);if(n!==Br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return aa(t).isEqual(aa(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ur(i.timestampValue),l=Ur(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return zr(i.bytesValue).isEqual(zr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Fe(i.geoPointValue.latitude)===Fe(s.geoPointValue.latitude)&&Fe(i.geoPointValue.longitude)===Fe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Fe(i.integerValue)===Fe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Fe(i.doubleValue),l=Fe(s.doubleValue);return o===l?_u(o)===_u(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return xs(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(ay(o)!==ay(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Vn(o[u],l[u])))return!1;return!0}(t,e);default:return ee(52216,{left:t})}}function ua(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function Cs(t,e){if(t===e)return 0;const n=Br(t),r=Br(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Fe(s.integerValue||s.doubleValue),u=Fe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return uy(t.timestampValue,e.timestampValue);case 4:return uy(aa(t),aa(e));case 5:return vd(t.stringValue,e.stringValue);case 6:return function(s,o){const l=zr(s),u=zr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ue(l[h],u[h]);if(f!==0)return f}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ue(Fe(s.latitude),Fe(o.latitude));return l!==0?l:ue(Fe(s.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return cy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var y,A,x,b;const l=s.fields||{},u=o.fields||{},h=(y=l[wu])==null?void 0:y.arrayValue,f=(A=u[wu])==null?void 0:A.arrayValue,p=ue(((x=h==null?void 0:h.values)==null?void 0:x.length)||0,((b=f==null?void 0:f.values)==null?void 0:b.length)||0);return p!==0?p:cy(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===hl.mapValue&&o===hl.mapValue)return 0;if(s===hl.mapValue)return 1;if(o===hl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const y=vd(u[p],f[p]);if(y!==0)return y;const A=Cs(l[u[p]],h[f[p]]);if(A!==0)return A}return ue(u.length,f.length)}(t.mapValue,e.mapValue);default:throw ee(23264,{he:n})}}function uy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Ur(t),r=Ur(e),i=ue(n.seconds,r.seconds);return i!==0?i:ue(n.nanos,r.nanos)}function cy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Cs(n[i],r[i]);if(s)return s}return ue(n.length,r.length)}function Ps(t){return wd(t)}function wd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ur(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=wd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${wd(n.fields[o])}`;return i+"}"}(t.mapValue):ee(61005,{value:t})}function Vl(t){switch(Br(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ec(t);return e?16+Vl(e):16;case 5:return 2*t.stringValue.length;case 6:return zr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Vl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Yr(r.fields,(s,o)=>{i+=s.length+Vl(o)}),i}(t.mapValue);default:throw ee(13486,{value:t})}}function hy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ed(t){return!!t&&"integerValue"in t}function Zf(t){return!!t&&"arrayValue"in t}function dy(t){return!!t&&"nullValue"in t}function fy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ol(t){return!!t&&"mapValue"in t}function cx(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Cw])==null?void 0:r.stringValue)===Pw}function Lo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Yr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Lo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Lo(t.arrayValue.values[n]);return e}return{...t}}function hx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ux}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ol(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Lo(n)}setAll(e){let n=lt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Lo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ol(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ol(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Yr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(Lo(this.value))}}function bw(t){const e=[];return Yr(t.fields,(n,r)=>{const i=new lt([n]);if(Ol(r)){const s=bw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ut(e)}/**
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
 */class vt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new vt(e,0,ne.min(),ne.min(),ne.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,i){return new vt(e,1,n,ne.min(),r,i,0)}static newNoDocument(e,n){return new vt(e,2,n,ne.min(),ne.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,ne.min(),ne.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Eu{constructor(e,n){this.position=e,this.inclusive=n}}function py(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=Cs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function my(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ca{constructor(e,n="asc"){this.field=e,this.dir=n}}function dx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Nw{}class Ge extends Nw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new px(e,n,r):n==="array-contains"?new yx(e,r):n==="in"?new _x(e,r):n==="not-in"?new vx(e,r):n==="array-contains-any"?new wx(e,r):new Ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new mx(e,r):new gx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Cs(n,this.value)):n!==null&&Br(this.value)===Br(n)&&this.matchesComparison(Cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends Nw{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new yn(e,n)}matches(e){return Dw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Dw(t){return t.op==="and"}function Vw(t){return fx(t)&&Dw(t)}function fx(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function Td(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+Ps(t.value);if(Vw(t))return t.filters.map(e=>Td(e)).join(",");{const e=t.filters.map(n=>Td(n)).join(",");return`${t.op}(${e})`}}function Ow(t,e){return t instanceof Ge?function(r,i){return i instanceof Ge&&r.op===i.op&&r.field.isEqual(i.field)&&Vn(r.value,i.value)}(t,e):t instanceof yn?function(r,i){return i instanceof yn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Ow(o,i.filters[l]),!0):!1}(t,e):void ee(19439)}function Lw(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${Ps(n.value)}`}(t):t instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(Lw).join(" ,")+"}"}(t):"Filter"}class px extends Ge{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class mx extends Ge{constructor(e,n){super(e,"in",n),this.keys=Mw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gx extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=Mw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Mw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class yx extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zf(n)&&ua(n.arrayValue,this.value)}}class _x extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ua(this.value.arrayValue,n)}}class vx extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ua(this.value.arrayValue,n)}}class wx extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ua(this.value.arrayValue,r))}}/**
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
 */class Ex{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function gy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Ex(t,e,n,r,i,s,o)}function ep(t){const e=re(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Td(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Zu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ps(r)).join(",")),e.Te=n}return e.Te}function tp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ow(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!my(t.startAt,e.startAt)&&my(t.endAt,e.endAt)}function Id(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Bs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Tx(t,e,n,r,i,s,o,l){return new Bs(t,e,n,r,i,s,o,l)}function tc(t){return new Bs(t)}function yy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ix(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Fw(t){return t.collectionGroup!==null}function Mo(t){const e=re(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ze(lt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new ca(s,r))}),n.has(lt.keyField().canonicalString())||e.Ie.push(new ca(lt.keyField(),r))}return e.Ie}function Pn(t){const e=re(t);return e.Ee||(e.Ee=Sx(e,Mo(t))),e.Ee}function Sx(t,e){if(t.limitType==="F")return gy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ca(i.field,s)});const n=t.endAt?new Eu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Eu(t.startAt.position,t.startAt.inclusive):null;return gy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Sd(t,e){const n=t.filters.concat([e]);return new Bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ax(t,e){const n=t.explicitOrderBy.concat([e]);return new Bs(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Ad(t,e,n){return new Bs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nc(t,e){return tp(Pn(t),Pn(e))&&t.limitType===e.limitType}function jw(t){return`${ep(Pn(t))}|lt:${t.limitType}`}function Gi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Lw(i)).join(", ")}]`),Zu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ps(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ps(i)).join(",")),`Target(${r})`}(Pn(t))}; limitType=${t.limitType})`}function rc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Mo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=py(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Mo(r),i)||r.endAt&&!function(o,l,u){const h=py(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Mo(r),i))}(t,e)}function kx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Uw(t){return(e,n)=>{let r=!1;for(const i of Mo(t)){const s=Rx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Rx(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Cs(u,h):ee(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:t.dir})}}/**
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
 */class Vi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Iw(this.inner)}size(){return this.innerSize}}/**
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
 */const xx=new Pe(J.comparator);function ir(){return xx}const zw=new Pe(J.comparator);function Io(...t){let e=zw;for(const n of t)e=e.insert(n.key,n);return e}function Bw(t){let e=zw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function mi(){return Fo()}function $w(){return Fo()}function Fo(){return new Vi(t=>t.toString(),(t,e)=>t.isEqual(e))}const Cx=new Pe(J.comparator),Px=new Ze(J.comparator);function ce(...t){let e=Px;for(const n of t)e=e.add(n);return e}const bx=new Ze(ue);function Nx(){return bx}/**
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
 */function np(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_u(e)?"-0":e}}function Ww(t){return{integerValue:""+t}}function Dx(t,e){return rx(e)?Ww(e):np(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ic{constructor(){this._=void 0}}function Vx(t,e,n){return t instanceof ha?function(i,s){const o={fields:{[kw]:{stringValue:Aw},[xw]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Jf(s)&&(s=ec(s)),s&&(o.fields[Rw]=s),{mapValue:o}}(n,e):t instanceof da?qw(t,e):t instanceof fa?Gw(t,e):function(i,s){const o=Hw(i,s),l=_y(o)+_y(i.Ae);return Ed(o)&&Ed(i.Ae)?Ww(l):np(i.serializer,l)}(t,e)}function Ox(t,e,n){return t instanceof da?qw(t,e):t instanceof fa?Gw(t,e):n}function Hw(t,e){return t instanceof Tu?function(r){return Ed(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ha extends ic{}class da extends ic{constructor(e){super(),this.elements=e}}function qw(t,e){const n=Kw(e);for(const r of t.elements)n.some(i=>Vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class fa extends ic{constructor(e){super(),this.elements=e}}function Gw(t,e){let n=Kw(e);for(const r of t.elements)n=n.filter(i=>!Vn(i,r));return{arrayValue:{values:n}}}class Tu extends ic{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function _y(t){return Fe(t.integerValue||t.doubleValue)}function Kw(t){return Zf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Lx{constructor(e,n){this.field=e,this.transform=n}}function Mx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof da&&i instanceof da||r instanceof fa&&i instanceof fa?xs(r.elements,i.elements,Vn):r instanceof Tu&&i instanceof Tu?Vn(r.Ae,i.Ae):r instanceof ha&&i instanceof ha}(t.transform,e.transform)}class Fx{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ll(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sc{}function Qw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rp(t.key,Jt.none()):new Aa(t.key,t.data,Jt.none());{const n=t.data,r=Nt.empty();let i=new Ze(lt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Xr(t.key,r,new Ut(i.toArray()),Jt.none())}}function jx(t,e,n){t instanceof Aa?function(i,s,o){const l=i.value.clone(),u=wy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Xr?function(i,s,o){if(!Ll(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=wy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Yw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function jo(t,e,n,r){return t instanceof Aa?function(s,o,l,u){if(!Ll(s.precondition,o))return l;const h=s.value.clone(),f=Ey(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Xr?function(s,o,l,u){if(!Ll(s.precondition,o))return l;const h=Ey(s.fieldTransforms,u,o),f=o.data;return f.setAll(Yw(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ll(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Ux(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Hw(r.transform,i||null);s!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,s))}return n||null}function vy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xs(r,i,(s,o)=>Mx(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Aa extends sc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xr extends sc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Yw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function wy(t,e,n){const r=new Map;_e(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Ox(o,l,n[i]))}return r}function Ey(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Vx(s,o,e))}return r}class rp extends sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zx extends sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Bx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&jx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=jo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=jo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$w();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Qw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&xs(this.mutations,e.mutations,(n,r)=>vy(n,r))&&xs(this.baseMutations,e.baseMutations,(n,r)=>vy(n,r))}}class ip{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){_e(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Cx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ip(e,n,r,i)}}/**
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
 */class $x{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Wx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,me;function Hx(t){switch(t){case O.OK:return ee(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return ee(15467,{code:t})}}function Xw(t){if(t===void 0)return rr("GRPC error has no .code"),O.UNKNOWN;switch(t){case He.OK:return O.OK;case He.CANCELLED:return O.CANCELLED;case He.UNKNOWN:return O.UNKNOWN;case He.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case He.INTERNAL:return O.INTERNAL;case He.UNAVAILABLE:return O.UNAVAILABLE;case He.UNAUTHENTICATED:return O.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case He.NOT_FOUND:return O.NOT_FOUND;case He.ALREADY_EXISTS:return O.ALREADY_EXISTS;case He.PERMISSION_DENIED:return O.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case He.ABORTED:return O.ABORTED;case He.OUT_OF_RANGE:return O.OUT_OF_RANGE;case He.UNIMPLEMENTED:return O.UNIMPLEMENTED;case He.DATA_LOSS:return O.DATA_LOSS;default:return ee(39323,{code:t})}}(me=He||(He={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function qx(){return new TextEncoder}/**
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
 */const Gx=new Dr([4294967295,4294967295],0);function Ty(t){const e=qx().encode(t),n=new dw;return n.update(e),new Uint8Array(n.digest())}function Iy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Dr([n,r],0),new Dr([i,s],0)]}class sp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new So(`Invalid padding: ${n}`);if(r<0)throw new So(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new So(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new So(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Dr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Dr.fromNumber(r)));return i.compare(Gx)===1&&(i=new Dr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ty(e),[r,i]=Iy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new sp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=Ty(e),[r,i]=Iy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class So extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ka{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ra.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ka(ne.min(),i,new Pe(ue),ir(),ce())}}class Ra{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ra(r,n,ce(),ce(),ce())}}/**
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
 */class Ml{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class Jw{constructor(e,n){this.targetId=e,this.Ce=n}}class Zw{constructor(e,n,r=ht.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Sy{constructor(){this.ve=0,this.Fe=Ay(),this.Me=ht.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ce(),n=ce(),r=ce();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee(38017,{changeType:s})}}),new Ra(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Ay()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,_e(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Kx{constructor(e){this.Ge=e,this.ze=new Map,this.je=ir(),this.Je=dl(),this.He=dl(),this.Ze=new Pe(ue)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Id(s))if(r===0){const o=new J(s.path);this.et(n,o,vt.newNoDocument(o,ne.min()))}else _e(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=zr(r).toUint8Array()}catch(u){if(u instanceof Sw)return Pi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new sp(o,i,s)}catch(u){return Pi(u instanceof So?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Id(l.target)){const u=new J(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,vt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=ce();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new ka(e,n,this.Ze,this.je,r);return this.je=ir(),this.Je=dl(),this.He=dl(),this.Ze=new Pe(ue),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Sy,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Ze(ue),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Ze(ue),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Sy),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function dl(){return new Pe(J.comparator)}function Ay(){return new Pe(J.comparator)}const Qx={asc:"ASCENDING",desc:"DESCENDING"},Yx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Xx={and:"AND",or:"OR"};class Jx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kd(t,e){return t.useProto3Json||Zu(e)?e:{value:e}}function Iu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Zx(t,e){return Iu(t,e.toTimestamp())}function bn(t){return _e(!!t,49232),ne.fromTimestamp(function(n){const r=Ur(n);return new Re(r.seconds,r.nanos)}(t))}function op(t,e){return Rd(t,e).canonicalString()}function Rd(t,e){const n=function(i){return new Te(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function tE(t){const e=Te.fromString(t);return _e(oE(e),10190,{key:e.toString()}),e}function xd(t,e){return op(t.databaseId,e.path)}function lh(t,e){const n=tE(e);if(n.get(1)!==t.databaseId.projectId)throw new G(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(rE(n))}function nE(t,e){return op(t.databaseId,e)}function eC(t){const e=tE(t);return e.length===4?Te.emptyPath():rE(e)}function Cd(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rE(t){return _e(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ky(t,e,n){return{name:xd(t,e),fields:n.value.mapValue.fields}}function tC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(_e(f===void 0||typeof f=="string",58123),ht.fromBase64String(f||"")):(_e(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ht.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:Xw(h.code);return new G(f,h.message||"")}(o);n=new Zw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=lh(t,r.document.name),s=bn(r.document.updateTime),o=r.document.createTime?bn(r.document.createTime):ne.min(),l=new Nt({mapValue:{fields:r.document.fields}}),u=vt.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ml(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=lh(t,r.document),s=r.readTime?bn(r.readTime):ne.min(),o=vt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ml([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=lh(t,r.document),s=r.removedTargetIds||[];n=new Ml([],s,i,null)}else{if(!("filter"in e))return ee(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Wx(i,s),l=r.targetId;n=new Jw(l,o)}}return n}function nC(t,e){let n;if(e instanceof Aa)n={update:ky(t,e.key,e.value)};else if(e instanceof rp)n={delete:xd(t,e.key)};else if(e instanceof Xr)n={update:ky(t,e.key,e.data),updateMask:hC(e.fieldMask)};else{if(!(e instanceof zx))return ee(16599,{dt:e.type});n={verify:xd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ha)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof da)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof fa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Tu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ee(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Zx(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ee(27497)}(t,e.precondition)),n}function rC(t,e){return t&&t.length>0?(_e(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?bn(i.updateTime):bn(s);return o.isEqual(ne.min())&&(o=bn(s)),new Fx(o,i.transformResults||[])}(n,e))):[]}function iC(t,e){return{documents:[nE(t,e.path)]}}function sC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=nE(t,i);const s=function(h){if(h.length!==0)return sE(yn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Ki(y.field),direction:lC(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=kd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function oC(t){let e=eC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_e(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const y=iE(p);return y instanceof yn&&Vw(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(y=>function(x){return new ca(Qi(x.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(p){let y;return y=typeof p=="object"?p.value:p,Zu(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(p){const y=!!p.before,A=p.values||[];return new Eu(A,y)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const y=!p.before,A=p.values||[];return new Eu(A,y)}(n.endAt)),Tx(e,i,o,s,l,"F",u,h)}function aC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function iE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qi(n.unaryFilter.field);return Ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qi(n.unaryFilter.field);return Ge.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Qi(n.unaryFilter.field);return Ge.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qi(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(Qi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(r=>iE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(n.compositeFilter.op))}(t):ee(30097,{filter:t})}function lC(t){return Qx[t]}function uC(t){return Yx[t]}function cC(t){return Xx[t]}function Ki(t){return{fieldPath:t.canonicalString()}}function Qi(t){return lt.fromServerFormat(t.fieldPath)}function sE(t){return t instanceof Ge?function(n){if(n.op==="=="){if(fy(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NAN"}};if(dy(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(fy(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NOT_NAN"}};if(dy(n.value))return{unaryFilter:{field:Ki(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ki(n.field),op:uC(n.op),value:n.value}}}(t):t instanceof yn?function(n){const r=n.getFilters().map(i=>sE(i));return r.length===1?r[0]:{compositeFilter:{op:cC(n.op),filters:r}}}(t):ee(54877,{filter:t})}function hC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function oE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function aE(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Qn{constructor(e,n,r,i,s=ne.min(),o=ne.min(),l=ht.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class dC{constructor(e){this.yt=e}}function fC(t){const e=oC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ad(e,e.limit,"L"):e}/**
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
 */class pC{constructor(){this.bn=new mC}addToCollectionParentIndex(e,n){return this.bn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(jr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(jr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class mC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ze(Te.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ze(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Ry={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lE=41943040;class Pt{static withCacheSize(e){return new Pt(e,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(lE,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
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
 */class $r{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new $r(0)}static ar(){return new $r(-1)}}/**
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
 */const xy="LruGarbageCollector",gC=1048576;function Cy([t,e],[n,r]){const i=ue(t,n);return i===0?ue(e,r):i}class yC{constructor(e){this.Pr=e,this.buffer=new Ze(Cy),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Cy(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class _C{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){K(xy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){zs(n)?K(xy,"Ignoring IndexedDB error during garbage collection: ",n):await Us(n)}await this.Ar(3e5)})}}class vC{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Ju.ce);const r=new yC(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Ry)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ry):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),qi()<=de.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function wC(t,e){return new vC(t,e)}/**
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
 */class EC{constructor(){this.changes=new Vi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class TC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class IC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&jo(r.mutation,i,Ut.empty(),Re.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const i=mi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Io();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=mi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=ir();const o=Fo(),l=function(){return Fo()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Xr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),jo(f.mutation,h,f.mutation.getFieldMask(),Re.now())):o.set(h.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new TC(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Fo();let i=new Pe((o,l)=>o-l),s=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Ut.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||ce()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=$w();f.forEach(y=>{if(!s.has(y)){const A=Qw(n.get(y),r.get(y));A!==null&&p.set(y,A),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return Ix(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Fw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(mi());let l=oa,u=s;return o.next(h=>L.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ce())).next(f=>({batchId:l,changes:Bw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=Io();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Io();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(p,y){return new Bs(y,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,y)=>{o=o.insert(p,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,vt.newInvalidDocument(f)))});let l=Io();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&jo(f.mutation,h,Ut.empty(),Re.now()),rc(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class SC{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:bn(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:fC(i.bundledQuery),readTime:bn(i.readTime)}}(n)),L.resolve()}}/**
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
 */class AC{constructor(){this.overlays=new Pe(J.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=mi();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=mi(),s=n.length+1,o=new J(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=mi(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=mi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $x(n,r));let s=this.Lr.get(n);s===void 0&&(s=ce(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class kC{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class ap{constructor(){this.kr=new Ze(rt.Kr),this.qr=new Ze(rt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new rt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new J(new Te([])),r=new rt(n,e),i=new rt(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new J(new Te([])),r=new rt(n,e),i=new rt(n,e+1);let s=ce();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new rt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return J.comparator(e.key,n.key)||ue(e.Jr,n.Jr)}static Ur(e,n){return ue(e.Jr,n.Jr)||J.comparator(e.key,n.key)}}/**
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
 */class RC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Ze(rt.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Bx(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new rt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Xf:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),i=new rt(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ze(ue);return n.forEach(i=>{const s=new rt(i,0),o=new rt(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),L.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new rt(new J(s),0);let l=new Ze(ue);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Jr)),!0)},o),L.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){_e(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return L.forEach(n.mutations,i=>{const s=new rt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new rt(n,0),i=this.Hr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class xC{constructor(e){this.ti=e,this.docs=function(){return new Pe(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=ir();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():vt.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ir();const o=n.path,l=new J(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||ZR(JR(f),r)<=0||(i.has(f.key)||rc(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ee(9500)}ni(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new CC(this)}getSize(e){return L.resolve(this.size)}}class CC extends EC{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class PC{constructor(e){this.persistence=e,this.ri=new Vi(n=>ep(n),tp),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.ii=0,this.si=new ap,this.targetCount=0,this.oi=$r._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new $r(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
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
 */class uE{constructor(e,n){this._i={},this.overlays={},this.ai=new Ju(0),this.ui=!1,this.ui=!0,this.ci=new kC,this.referenceDelegate=e(this),this.li=new PC(this),this.indexManager=new pC,this.remoteDocumentCache=function(i){return new xC(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new dC(n),this.Pi=new SC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new RC(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const i=new bC(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return L.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class bC extends tx{constructor(e){super(),this.currentSequenceNumber=e}}class lp{constructor(e){this.persistence=e,this.Ri=new ap,this.Ai=null}static Vi(e){return new lp(e)}get di(){if(this.Ai)return this.Ai;throw ee(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,r=>{const i=J.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,ne.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Su{constructor(e,n){this.persistence=e,this.fi=new Vi(r=>ix(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=wC(this,n)}static Vi(e,n){return new Su(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return L.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,ne.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Vl(e.data.value)),n}wr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class up{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=ce(),i=ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new up(e,n.fromCache,r,i)}}/**
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
 */class NC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class DC{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return _S()?8:nx(Et())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new NC;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(qi()<=de.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Gi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(qi()<=de.DEBUG&&K("QueryEngine","Query:",Gi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(qi()<=de.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Gi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(n))):L.resolve())}gs(e,n){if(yy(n))return L.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ad(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ce(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(n,l);return this.bs(n,h,o,u.readTime)?this.gs(e,Ad(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,i){return yy(n)||i.isEqual(ne.min())?L.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?L.resolve(null):(qi()<=de.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gi(n)),this.Ds(e,o,n,XR(i,oa)).next(l=>l))})}Ss(e,n){let r=new Ze(Uw(e));return n.forEach((i,s)=>{rc(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return qi()<=de.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Gi(n)),this.fs.getDocumentsMatchingQuery(e,n,jr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const cp="LocalStore",VC=3e8;class OC{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Pe(ue),this.Fs=new Vi(s=>ep(s),tp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IC(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function LC(t,e,n,r){return new OC(t,e,n,r)}async function cE(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ce();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function MC(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,y=p.keys();let A=L.resolve();return y.forEach(x=>{A=A.next(()=>f.getEntry(u,x)).next(b=>{const V=h.docVersions.get(x);_e(V!==null,48541),b.version.compareTo(V)<0&&(p.applyToRemoteDocument(b,h),b.isValidDocument()&&(b.setReadTime(h.commitVersion),f.addEntry(b)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ce();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function hE(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function FC(t,e){const n=re(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const y=i.get(p);if(!y)return;l.push(n.li.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,p)));let A=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(ht.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(p,A),function(b,V,S){return b.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=VC?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(y,A,f)&&l.push(n.li.updateTargetData(s,A))});let u=ir(),h=ce();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(jC(s,o,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(ne.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.vs=i,s))}function jC(t,e,n){let r=ce(),i=ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ir();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):K(cp,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function UC(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Xf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zC(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Pd(t,e,n){const r=re(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!zs(o))throw o;K(cp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Py(t,e,n){const r=re(t);let i=ne.min(),s=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=re(u),y=p.Fs.get(f);return y!==void 0?L.resolve(p.vs.get(y)):p.li.getTargetData(h,f)}(r,o,Pn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:ne.min(),n?s:ce())).next(l=>(BC(r,kx(e),l),{documents:l,ks:s})))}function BC(t,e,n){let r=t.Ms.get(e)||ne.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class by{constructor(){this.activeTargetIds=Nx()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $C{constructor(){this.vo=new by,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new by,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class WC{Mo(e){}shutdown(){}}/**
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
 */const Ny="ConnectivityMonitor";class Dy{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){K(Ny,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){K(Ny,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fl=null;function bd(){return fl===null?fl=function(){return 268435456+Math.round(2147483648*Math.random())}():fl++,"0x"+fl.toString(16)}/**
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
 */const uh="RestConnection",HC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class qC{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===vu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=bd(),l=this.Qo(e,n.toUriEncodedString());K(uh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:h}=new URL(l),f=Ms(h);return this.zo(e,l,u,r,f).then(p=>(K(uh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Pi(uh,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+js}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=HC[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class GC{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const gt="WebChannelConnection",go=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class ys extends qC{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ys.c_){const e=gw();go(e,mw.STAT_EVENT,n=>{n.stat===_d.PROXY?K(gt,"STAT_EVENT: detected buffering proxy"):n.stat===_d.NOPROXY&&K(gt,"STAT_EVENT: detected no buffering proxy")}),ys.c_=!0}}zo(e,n,r,i,s){const o=bd();return new Promise((l,u)=>{const h=new fw;h.setWithCredentials(!0),h.listenOnce(pw.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Dl.NO_ERROR:const p=h.getResponseJson();K(gt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Dl.TIMEOUT:K(gt,`RPC '${e}' ${o} timed out`),u(new G(O.DEADLINE_EXCEEDED,"Request time out"));break;case Dl.HTTP_ERROR:const y=h.getStatus();if(K(gt,`RPC '${e}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const x=A==null?void 0:A.error;if(x&&x.status&&x.message){const b=function(S){const w=S.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(w)>=0?w:O.UNKNOWN}(x.status);u(new G(b,x.message))}else u(new G(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new G(O.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{K(gt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);K(gt,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=bd(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");K(gt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);this.I_(f);let p=!1,y=!1;const A=new GC({Jo:x=>{y?K(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(p||(K(gt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),K(gt,`RPC '${e}' stream ${i} sending:`,x),f.send(x))},Ho:()=>f.close()});return go(f,To.EventType.OPEN,()=>{y||(K(gt,`RPC '${e}' stream ${i} transport opened.`),A.i_())}),go(f,To.EventType.CLOSE,()=>{y||(y=!0,K(gt,`RPC '${e}' stream ${i} transport closed`),A.o_(),this.E_(f))}),go(f,To.EventType.ERROR,x=>{y||(y=!0,Pi(gt,`RPC '${e}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),A.o_(new G(O.UNAVAILABLE,"The operation could not be completed")))}),go(f,To.EventType.MESSAGE,x=>{var b;if(!y){const V=x.data[0];_e(!!V,16349);const S=V,w=(S==null?void 0:S.error)||((b=S[0])==null?void 0:b.error);if(w){K(gt,`RPC '${e}' stream ${i} received error:`,w);const R=w.status;let D=function(v){const _=He[v];if(_!==void 0)return Xw(_)}(R),M=w.message;R==="NOT_FOUND"&&M.includes("database")&&M.includes("does not exist")&&M.includes(this.databaseId.database)&&Pi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=O.INTERNAL,M="Unknown error status: "+R+" with message "+w.message),y=!0,A.o_(new G(D,M)),f.close()}else K(gt,`RPC '${e}' stream ${i} received:`,V),A.__(V)}}),ys.u_(),setTimeout(()=>{A.s_()},0),A}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return yw()}}/**
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
 */function KC(t){return new ys(t)}function ch(){return typeof document<"u"?document:null}/**
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
 */function oc(t){return new Jx(t,!0)}/**
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
 */ys.c_=!1;class dE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&K("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Vy="PersistentStream";class fE{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new dE(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(rr(n.toString()),rr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new G(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return K(Vy,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(K(Vy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QC extends fE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=tC(this.serializer,e),r=function(s){if(!("targetChange"in s))return ne.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?bn(o.readTime):ne.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Cd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Id(u)?{documents:iC(s,u)}:{query:sC(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=eE(s,o.resumeToken);const h=kd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ne.min())>0){l.readTime=Iu(s,o.snapshotVersion.toTimestamp());const h=kd(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=aC(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Cd(this.serializer),n.removeTarget=e,this.K_(n)}}class YC extends fE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return _e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){_e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=rC(e.writeResults,e.commitTime),r=bn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Cd(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>nC(this.serializer,r))};this.K_(n)}}/**
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
 */class XC{}class JC extends XC{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new G(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Rd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(O.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Rd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(O.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function ZC(t,e,n,r){return new JC(t,e,n,r)}class eP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(rr(n),this.aa=!1):K("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const On="RemoteStore";class tP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new $r(1e3),this.Va=new $r(1001),this.da=new Set,this.ma=[],this.fa=s,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{Oi(this)&&(K(On,"Restarting streams for network reachability change."),await async function(u){const h=re(u);h.da.add(4),await xa(h),h.ga.set("Unknown"),h.da.delete(4),await ac(h)}(this))})}),this.ga=new eP(r,i)}}async function ac(t){if(Oi(t))for(const e of t.ma)await e(!0)}async function xa(t){for(const e of t.ma)await e(!1)}function Nd(t,e){return t.Ea.get(e)||void 0}function pE(t,e){const n=re(t),r=Nd(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const i=function(l,u){const h=Nd(l,u);h!==void 0&&l.Ra.delete(h);const f=function(y,A){return A%2!=0?y.Va.next():y.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(n,e.targetId);K(On,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new Qn(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(i,s),pp(n)?fp(n):$s(n).O_()&&dp(n,s)}function hp(t,e){const n=re(t),r=$s(n),i=Nd(n,e);K(On,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),n.Ia.delete(i),n.Ea.delete(e),n.Ra.delete(i),r.O_()&&mE(n,i),n.Ia.size===0&&(r.O_()?r.L_():Oi(n)&&n.ga.set("Unknown"))}function dp(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void K(On,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}$s(t).Z_(e)}function mE(t,e){t.pa.$e(e),$s(t).X_(e)}function fp(t){t.pa=new Kx({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):ce()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),$s(t).start(),t.ga.ua()}function pp(t){return Oi(t)&&!$s(t).x_()&&t.Ia.size>0}function Oi(t){return re(t).da.size===0}function gE(t){t.pa=void 0}async function nP(t){t.ga.set("Online")}async function rP(t){t.Ia.forEach((e,n)=>{dp(t,e)})}async function iP(t,e){gE(t),pp(t)?(t.ga.ha(e),fp(t)):t.ga.set("Unknown")}async function sP(t,e,n){if(t.ga.set("Online"),e instanceof Zw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds){if(i.Ia.has(l)){const u=i.Ra.get(l);u!==void 0&&(await i.remoteSyncer.rejectListen(u,o),i.Ea.delete(u),i.Ra.delete(l)),i.Ia.delete(l)}i.pa.removeTarget(l)}}(t,e)}catch(r){K(On,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Au(t,r)}else if(e instanceof Ml?t.pa.Xe(e):e instanceof Jw?t.pa.st(e):t.pa.tt(e),!n.isEqual(ne.min()))try{const r=await hE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.pa.Tt(o);l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=s.Ia.get(f);p&&s.Ia.set(f,p.withResumeToken(h.resumeToken,o))}}),l.targetMismatches.forEach((h,f)=>{const p=s.Ia.get(h);if(!p)return;s.Ia.set(h,p.withResumeToken(ht.EMPTY_BYTE_STRING,p.snapshotVersion)),mE(s,h);const y=new Qn(p.target,h,f,p.sequenceNumber);dp(s,y)});const u=function(f,p){const y=new Map;p.targetChanges.forEach((x,b)=>{const V=f.Ra.get(b);V!==void 0&&y.set(V,x)});let A=new Pe(ue);return p.targetMismatches.forEach((x,b)=>{const V=f.Ra.get(x);V!==void 0&&(A=A.insert(V,b))}),new ka(p.snapshotVersion,y,A,p.documentUpdates,p.resolvedLimboDocuments)}(s,l);return s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){K(On,"Failed to raise snapshot:",r),await Au(t,r)}}async function Au(t,e,n){if(!zs(e))throw e;t.da.add(1),await xa(t),t.ga.set("Offline"),n||(n=()=>hE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K(On,"Retrying IndexedDB access"),await n(),t.da.delete(1),await ac(t)})}function yE(t,e){return e().catch(n=>Au(t,n,e))}async function lc(t){const e=re(t),n=Wr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Xf;for(;oP(e);)try{const i=await UC(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,aP(e,i)}catch(i){await Au(e,i)}_E(e)&&vE(e)}function oP(t){return Oi(t)&&t.Ta.length<10}function aP(t,e){t.Ta.push(e);const n=Wr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function _E(t){return Oi(t)&&!Wr(t).x_()&&t.Ta.length>0}function vE(t){Wr(t).start()}async function lP(t){Wr(t).ra()}async function uP(t){const e=Wr(t);for(const n of t.Ta)e.ea(n.mutations)}async function cP(t,e,n){const r=t.Ta.shift(),i=ip.from(r,e,n);await yE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await lc(t)}async function hP(t,e){e&&Wr(t).Y_&&await async function(r,i){if(function(o){return Hx(o)&&o!==O.ABORTED}(i.code)){const s=r.Ta.shift();Wr(r).B_(),await yE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await lc(r)}}(t,e),_E(t)&&vE(t)}async function Oy(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),K(On,"RemoteStore received new credentials");const r=Oi(n);n.da.add(3),await xa(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await ac(n)}async function dP(t,e){const n=re(t);e?(n.da.delete(2),await ac(n)):e||(n.da.add(2),await xa(n),n.ga.set("Unknown"))}function $s(t){return t.ya||(t.ya=function(n,r,i){const s=re(n);return s.sa(),new QC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:nP.bind(null,t),Yo:rP.bind(null,t),t_:iP.bind(null,t),H_:sP.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),pp(t)?fp(t):t.ga.set("Unknown")):(await t.ya.stop(),gE(t))})),t.ya}function Wr(t){return t.wa||(t.wa=function(n,r,i){const s=re(n);return s.sa(),new YC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:lP.bind(null,t),t_:hP.bind(null,t),ta:uP.bind(null,t),na:cP.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await lc(t)):(await t.wa.stop(),t.Ta.length>0&&(K(On,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
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
 */class mp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new mp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gp(t,e){if(rr("AsyncQueue",`${e}: ${t}`),zs(t))return new G(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class _s{static emptySet(e){return new _s(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=Io(),this.sortedSet=new Pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ly{constructor(){this.Sa=new Pe(J.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):ee(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class bs{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new bs(e,n,_s.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class fP{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class pP{constructor(){this.queries=My(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const i=re(n),s=i.queries;i.queries=My(),s.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new G(O.ABORTED,"Firestore shutting down"))}}function My(){return new Vi(t=>jw(t),nc)}async function wE(t,e){const n=re(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Fa()&&e.Ma()&&(r=2):(s=new fP,r=e.Ma()?0:1);try{switch(r){case 0:s.Ca=await n.onListen(i,!0);break;case 1:s.Ca=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=gp(o,`Initialization of query '${Gi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.va.push(e),e.Oa(n.onlineState),s.Ca&&e.Na(s.Ca)&&yp(n)}async function EE(t,e){const n=re(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.va.indexOf(e);o>=0&&(s.va.splice(o,1),s.va.length===0?i=e.Ma()?0:1:!s.Fa()&&e.Ma()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function mP(t,e){const n=re(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.va)l.Na(i)&&(r=!0);o.Ca=i}}r&&yp(n)}function gP(t,e,n){const r=re(t),i=r.queries.get(e);if(i)for(const s of i.va)s.onError(n);r.queries.delete(e)}function yp(t){t.xa.forEach(e=>{e.next()})}var Dd,Fy;(Fy=Dd||(Dd={})).Ba="default",Fy.Cache="cache";class TE{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new bs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Dd.Cache}}/**
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
 */class IE{constructor(e){this.key=e}}class SE{constructor(e){this.key=e}}class yP{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=ce(),this.mutatedKeys=ce(),this.iu=Uw(e),this.su=new _s(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new Ly,i=n?n.su:this.su;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const y=i.get(f),A=rc(this.query,p)?p:null,x=!!y&&this.mutatedKeys.has(y.key),b=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let V=!1;y&&A?y.data.isEqual(A.data)?x!==b&&(r.track({type:3,doc:A}),V=!0):this.uu(y,A)||(r.track({type:2,doc:A}),V=!0,(u&&this.iu(A,u)>0||h&&this.iu(A,h)<0)&&(l=!0)):!y&&A?(r.track({type:0,doc:A}),V=!0):y&&!A&&(r.track({type:1,doc:y}),V=!0,(u||h)&&(l=!0)),V&&(A?(o=o.add(A),s=b?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{su:o,au:r,bs:l,mutatedKeys:s}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((f,p)=>function(A,x){const b=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Vt:V})}};return b(A)-b(x)}(f.type,p.type)||this.iu(f.doc,p.doc)),this.cu(r),i=i??!1;const l=n&&!i?this.lu():[],u=this.ru.size===0&&this.current&&!i?1:0,h=u!==this.nu;return this.nu=u,o.length!==0||h?{snapshot:new bs(this.query,e.su,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new Ly,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=ce(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new SE(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new IE(r))}),n}Tu(e){this.tu=e.ks,this.ru=ce();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return bs.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const _p="SyncEngine";class _P{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vP{constructor(e){this.key=e,this.Eu=!1}}class wP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new Vi(l=>jw(l),nc),this.Vu=new Map,this.du=new Set,this.mu=new Pe(J.comparator),this.fu=new Map,this.gu=new ap,this.pu={},this.yu=new Map,this.wu=$r.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function EP(t,e,n=!0){const r=PE(t);let i;const s=r.Au.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Iu()):i=await AE(r,e,n,!0),i}async function TP(t,e){const n=PE(t);await AE(n,e,!0,!1)}async function AE(t,e,n,r){const i=await zC(t.localStore,Pn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await IP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&pE(t.remoteStore,i),l}async function IP(t,e,n,r,i){t.bu=(p,y,A)=>async function(b,V,S,w){let R=V.view._u(S);R.bs&&(R=await Py(b.localStore,V.query,!1).then(({documents:v})=>V.view._u(v,R)));const D=w&&w.targetChanges.get(V.targetId),M=w&&w.targetMismatches.get(V.targetId)!=null,U=V.view.applyChanges(R,b.isPrimaryClient,D,M);return Uy(b,V.targetId,U.hu),U.snapshot}(t,p,y,A);const s=await Py(t.localStore,e,!0),o=new yP(e,s.ks),l=o._u(s.documents),u=Ra.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Uy(t,n,h.hu);const f=new _P(e,n,o);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),h.snapshot}async function SP(t,e,n){const r=re(t),i=r.Au.get(e),s=r.Vu.get(i.targetId);if(s.length>1)return r.Vu.set(i.targetId,s.filter(o=>!nc(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Pd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&hp(r.remoteStore,i.targetId),Vd(r,i.targetId)}).catch(Us)):(Vd(r,i.targetId),await Pd(r.localStore,i.targetId,!0))}async function AP(t,e){const n=re(t),r=n.Au.get(e),i=n.Vu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),hp(n.remoteStore,r.targetId))}async function kP(t,e,n){const r=DP(t);try{const i=await function(o,l){const u=re(o),h=Re.now(),f=l.reduce((A,x)=>A.add(x.key),ce());let p,y;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let x=ir(),b=ce();return u.xs.getEntries(A,f).next(V=>{x=V,x.forEach((S,w)=>{w.isValidDocument()||(b=b.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,x)).next(V=>{p=V;const S=[];for(const w of l){const R=Ux(w,p.get(w.key).overlayedDocument);R!=null&&S.push(new Xr(w.key,R,bw(R.value.mapValue),Jt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,S,l)}).next(V=>{y=V;const S=V.applyToLocalDocumentSet(p,b);return u.documentOverlayCache.saveOverlays(A,V.batchId,S)})}).then(()=>({batchId:y.batchId,changes:Bw(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.pu[o.currentUser.toKey()];h||(h=new Pe(ue)),h=h.insert(l,u),o.pu[o.currentUser.toKey()]=h}(r,i.batchId,n),await Ca(r,i.changes),await lc(r.remoteStore)}catch(i){const s=gp(i,"Failed to persist write");n.reject(s)}}async function kE(t,e){const n=re(t);try{const r=await FC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fu.get(s);o&&(_e(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.Eu=!0:i.modifiedDocuments.size>0?_e(o.Eu,14607):i.removedDocuments.size>0&&(_e(o.Eu,42227),o.Eu=!1))}),await Ca(n,r,e)}catch(r){await Us(r)}}function jy(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Au.forEach((s,o)=>{const l=o.view.Oa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=re(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const y of p.va)y.Oa(l)&&(h=!0)}),h&&yp(u)}(r.eventManager,e),i.length&&r.Ru.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function RP(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fu.get(e),s=i&&i.key;if(s){let o=new Pe(J.comparator);o=o.insert(s,vt.newNoDocument(s,ne.min()));const l=ce().add(s),u=new ka(ne.min(),new Map,new Pe(ue),o,l);await kE(r,u),r.mu=r.mu.remove(s),r.fu.delete(e),vp(r)}else await Pd(r.localStore,e,!1).then(()=>Vd(r,e,n)).catch(Us)}async function xP(t,e){const n=re(t),r=e.batch.batchId;try{const i=await MC(n.localStore,e);xE(n,r,null),RE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ca(n,i)}catch(i){await Us(i)}}async function CP(t,e,n){const r=re(t);try{const i=await function(o,l){const u=re(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(_e(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);xE(r,e,n),RE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ca(r,i)}catch(i){await Us(i)}}function RE(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function xE(t,e,n){const r=re(t);let i=r.pu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pu[r.currentUser.toKey()]=i}}function Vd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||CE(t,r)})}function CE(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(hp(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),vp(t))}function Uy(t,e,n){for(const r of n)r instanceof IE?(t.gu.addReference(r.key,e),PP(t,r)):r instanceof SE?(K(_p,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||CE(t,r.key)):ee(19791,{Cu:r})}function PP(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(K(_p,"New document in limbo: "+n),t.du.add(r),vp(t))}function vp(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new J(Te.fromString(e)),r=t.wu.next();t.fu.set(r,new vP(n)),t.mu=t.mu.insert(n,r),pE(t.remoteStore,new Qn(Pn(tc(n.path)),r,"TargetPurposeLimboResolution",Ju.ce))}}async function Ca(t,e,n){const r=re(t),i=[],s=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=up.Es(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ru.H_(i),await async function(u,h){const f=re(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,y=>L.forEach(y.Ts,A=>f.persistence.referenceDelegate.addReference(p,y.targetId,A)).next(()=>L.forEach(y.Is,A=>f.persistence.referenceDelegate.removeReference(p,y.targetId,A)))))}catch(p){if(!zs(p))throw p;K(cp,"Failed to update sequence numbers: "+p)}for(const p of h){const y=p.targetId;if(!p.fromCache){const A=f.vs.get(y),x=A.snapshotVersion,b=A.withLastLimboFreeSnapshotVersion(x);f.vs=f.vs.insert(y,b)}}}(r.localStore,s))}async function bP(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){K(_p,"User change. New user:",e.toKey());const r=await cE(n.localStore,e);n.currentUser=e,function(s,o){s.yu.forEach(l=>{l.forEach(u=>{u.reject(new G(O.CANCELLED,o))})}),s.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ca(n,r.Ns)}}function NP(t,e){const n=re(t),r=n.fu.get(e);if(r&&r.Eu)return ce().add(r.key);{let i=ce();const s=n.Vu.get(e);if(!s)return i;for(const o of s){const l=n.Au.get(o);i=i.unionWith(l.view.ou)}return i}}function PE(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RP.bind(null,e),e.Ru.H_=mP.bind(null,e.eventManager),e.Ru.Du=gP.bind(null,e.eventManager),e}function DP(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CP.bind(null,e),e}class ku{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oc(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return LC(this.persistence,new DC,e.initialUser,this.serializer)}xu(e){return new uE(lp.Vi,this.serializer)}Mu(e){return new $C}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ku.provider={build:()=>new ku};class VP extends ku{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){_e(this.persistence.referenceDelegate instanceof Su,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new _C(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new uE(r=>Su.Vi(r,n),this.serializer)}}class Od{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bP.bind(null,this.syncEngine),await dP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new pP}()}createDatastore(e){const n=oc(e.databaseInfo.databaseId),r=KC(e.databaseInfo);return ZC(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new tP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>jy(this.syncEngine,n,0),function(){return Dy.v()?new Dy:new WC}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new wP(i,s,o,l,u,h);return f&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=re(i);K(On,"RemoteStore shutting down."),s.da.add(5),await xa(s),s.fa.shutdown(),s.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Od.provider={build:()=>new Od};/**
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
 */class bE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):rr("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Hr="FirestoreClient";class OP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=Yf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{K(Hr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K(Hr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=gp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hh(t,e){t.asyncQueue.verifyOperationInProgress(),K(Hr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function zy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await LP(t);K(Hr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Oy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Oy(e.remoteStore,i)),t._onlineComponents=e}async function LP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K(Hr,"Using user provided OfflineComponentProvider");try{await hh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Pi("Error using user provided cache. Falling back to memory cache: "+n),await hh(t,new ku)}}else K(Hr,"Using default OfflineComponentProvider"),await hh(t,new VP(void 0));return t._offlineComponents}async function NE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K(Hr,"Using user provided OnlineComponentProvider"),await zy(t,t._uninitializedComponentsProvider._online)):(K(Hr,"Using default OnlineComponentProvider"),await zy(t,new Od))),t._onlineComponents}function MP(t){return NE(t).then(e=>e.syncEngine)}async function Ld(t){const e=await NE(t),n=e.eventManager;return n.onListen=EP.bind(null,e.syncEngine),n.onUnlisten=SP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=TP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=AP.bind(null,e.syncEngine),n}function FP(t,e,n,r){const i=new bE(r),s=new TE(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>wE(await Ld(t),s)),()=>{i.Ku(),t.asyncQueue.enqueueAndForget(async()=>EE(await Ld(t),s))}}function jP(t,e,n={}){const r=new Vr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new bE({next:y=>{f.Ku(),o.enqueueAndForget(()=>EE(s,p));const A=y.docs.has(l);!A&&y.fromCache?h.reject(new G(O.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&y.fromCache&&u&&u.source==="server"?h.reject(new G(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),p=new TE(tc(l.path),f,{includeMetadataChanges:!0,Wa:!0});return wE(s,p)}(await Ld(t),t.asyncQueue,e,n,r)),r.promise}function UP(t,e){const n=new Vr;return t.asyncQueue.enqueueAndForget(async()=>kP(await MP(t),e,n)),n.promise}/**
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
 */function DE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const zP="ComponentProvider",By=new Map;function BP(t,e,n,r,i){return new ax(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,DE(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const VE="firestore.googleapis.com",$y=!0;class Wy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new G(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=VE,this.ssl=$y}else this.host=e.host,this.ssl=e.ssl??$y;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=lE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gC)throw new G(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=DE(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new G(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new G(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new G(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new UR;switch(r.type){case"firstParty":return new WR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=By.get(n);r&&(K(zP,"Removing Datastore"),By.delete(n),r.terminate())}(this),Promise.resolve()}}function $P(t,e,n,r={}){var h;t=Xt(t,uc);const i=Ms(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&Of(`https://${l}`),s.host!==VE&&s.host!==l&&Pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!ki(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=yt.MOCK_USER;else{f=P0(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new G(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new yt(y)}t._authCredentials=new zR(new vw(f,p))}}/**
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
 */class Li{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Li(this.firestore,e,this._query)}}class Le{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Sa(n,Le._jsonSchema))return new Le(e,r||null,new J(Te.fromString(n.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:Ke("string",Le._jsonSchemaVersion),referencePath:Ke("string")};class Or extends Li{constructor(e,n,r){super(e,n,tc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new J(e))}withConverter(e){return new Or(this.firestore,e,this._path)}}function Hi(t,e,...n){if(t=et(t),ww("collection","path",e),t instanceof uc){const r=Te.fromString(e,...n);return ry(r),new Or(t,null,r)}{if(!(t instanceof Le||t instanceof Or))throw new G(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return ry(r),new Or(t.firestore,null,r)}}function Ct(t,e,...n){if(t=et(t),arguments.length===1&&(e=Yf.newId()),ww("doc","path",e),t instanceof uc){const r=Te.fromString(e,...n);return ny(r),new Le(t,null,new J(r))}{if(!(t instanceof Le||t instanceof Or))throw new G(O.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return ny(r),new Le(t.firestore,t instanceof Or?t.converter:null,new J(r))}}/**
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
 */const Hy="AsyncQueue";class qy{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new dE(this,"async_queue_retry"),this.lc=()=>{const r=ch();r&&K(Hy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=ch();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=ch();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new Vr;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!zs(e))throw e;K(Hy,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,rr("INTERNAL UNHANDLED ERROR: ",Gy(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const i=mp.createAndSchedule(this,e,n,r,s=>this.Ec(s));return this.oc.push(i),i}Pc(){this._c&&ee(47125,{Rc:Gy(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function Gy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class qr extends uc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new qy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qy(e),this._firestoreClient=void 0,await e}}}function WP(t,e){const n=typeof t=="object"?t:Ff(),r=typeof t=="string"?t:vu,i=Gu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=R0("firestore");s&&$P(i,...s)}return i}function wp(t){if(t._terminated)throw new G(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||HP(t),t._firestoreClient}function HP(t){var r,i,s,o;const e=t._freezeSettings(),n=BP(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new OP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
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
 */class Kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kt(ht.fromBase64String(e))}catch(n){throw new G(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kt(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Sa(e,Kt._jsonSchema))return Kt.fromBase64String(e.bytes)}}Kt._jsonSchemaVersion="firestore/bytes/1.0",Kt._jsonSchema={type:Ke("string",Kt._jsonSchemaVersion),bytes:Ke("string")};/**
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
 */class Ep{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class cc{constructor(e){this._methodName=e}}/**
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
 */class Nn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Nn._jsonSchemaVersion}}static fromJSON(e){if(Sa(e,Nn._jsonSchema))return new Nn(e.latitude,e.longitude)}}Nn._jsonSchemaVersion="firestore/geoPoint/1.0",Nn._jsonSchema={type:Ke("string",Nn._jsonSchemaVersion),latitude:Ke("number"),longitude:Ke("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class mn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:mn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Sa(e,mn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new mn(e.vectorValues);throw new G(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mn._jsonSchemaVersion="firestore/vectorValue/1.0",mn._jsonSchema={type:Ke("string",mn._jsonSchemaVersion),vectorValues:Ke("object")};/**
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
 */const qP=/^__.*__$/;class GP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Aa(e,this.data,n,this.fieldTransforms)}}class OE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function LE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{dataSource:t})}}class Tp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.fc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Tp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Ru(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(LE(this.dataSource)&&qP.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class KP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||oc(e)}V(e,n,r,i=!1){return new Tp({dataSource:e,methodName:n,targetDoc:r,path:lt.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hc(t){const e=t._freezeSettings(),n=oc(t._databaseId);return new KP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ME(t,e,n,r,i,s={}){const o=t.V(s.merge||s.mergeFields?2:0,e,n,i);Sp("Data must be an object, but it was:",o,r);const l=FE(r,o);let u,h;if(s.merge)u=new Ut(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const y=Ns(e,p,n);if(!o.contains(y))throw new G(O.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);zE(f,y)||f.push(y)}u=new Ut(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new GP(new Nt(l),u,h)}class dc extends cc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dc}}class Ip extends cc{_toFieldTransform(e){return new Lx(e.path,new ha)}isEqual(e){return e instanceof Ip}}function QP(t,e,n,r){const i=t.V(1,e,n);Sp("Data must be an object, but it was:",i,r);const s=[],o=Nt.empty();Yr(r,(u,h)=>{const f=UE(e,u,n);h=et(h);const p=i.Sc(f);if(h instanceof dc)s.push(f);else{const y=Pa(h,p);y!=null&&(s.push(f),o.set(f,y))}});const l=new Ut(s);return new OE(o,l,i.fieldTransforms)}function YP(t,e,n,r,i,s){const o=t.V(1,e,n),l=[Ns(e,r,n)],u=[i];if(s.length%2!=0)throw new G(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(Ns(e,s[y])),u.push(s[y+1]);const h=[],f=Nt.empty();for(let y=l.length-1;y>=0;--y)if(!zE(h,l[y])){const A=l[y];let x=u[y];x=et(x);const b=o.Sc(A);if(x instanceof dc)h.push(A);else{const V=Pa(x,b);V!=null&&(h.push(A),f.set(A,V))}}const p=new Ut(h);return new OE(f,p,o.fieldTransforms)}function XP(t,e,n,r=!1){return Pa(n,t.V(r?4:3,e))}function Pa(t,e){if(jE(t=et(t)))return Sp("Unsupported field value:",e,t),FE(t,e);if(t instanceof cc)return function(r,i){if(!LE(i.dataSource))throw i.Dc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Dc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Pa(l,i.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Dx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Re.fromDate(r);return{timestampValue:Iu(i.serializer,s)}}if(r instanceof Re){const s=new Re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Iu(i.serializer,s)}}if(r instanceof Nn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Kt)return{bytesValue:eE(i.serializer,r._byteString)};if(r instanceof Le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:op(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof mn)return function(o,l){const u=o instanceof mn?o.toArray():o;return{mapValue:{fields:{[Cw]:{stringValue:Pw},[wu]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return np(l.serializer,f)})}}}}}}(r,i);if(aE(r))return r._toProto(i.serializer);throw i.Dc(`Unsupported field value: ${Xu(r)}`)}(t,e)}function FE(t,e){const n={};return Iw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yr(t,(r,i)=>{const s=Pa(i,e.yc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function jE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof Nn||t instanceof Kt||t instanceof Le||t instanceof cc||t instanceof mn||aE(t))}function Sp(t,e,n){if(!jE(n)||!Ew(n)){const r=Xu(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function Ns(t,e,n){if((e=et(e))instanceof Ep)return e._internalPath;if(typeof e=="string")return UE(t,e);throw Ru("Field path arguments must be of type string or ",t,!1,void 0,n)}const JP=new RegExp("[~\\*/\\[\\]]");function UE(t,e,n){if(e.search(JP)>=0)throw Ru(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ep(...e.split("."))._internalPath}catch{throw Ru(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ru(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(O.INVALID_ARGUMENT,l+t+u)}function zE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ZP{convertValue(e,n="none"){switch(Br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Yr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[wu].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Fe(o.doubleValue));return new mn(n)}convertGeoPoint(e){return new Nn(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ec(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(aa(e));default:return null}}convertTimestamp(e){const n=Ur(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);_e(oE(r),9688,{name:e});const i=new la(r.get(1),r.get(3)),s=new J(r.popFirst(5));return i.isEqual(n)||rr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class BE extends ZP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function dh(){return new Ip("serverTimestamp")}const Ky="@firebase/firestore",Qy="4.14.1";/**
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
 */function Yy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class $E{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new e2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ns("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class e2 extends $E{data(){return super.data()}}/**
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
 */function t2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ap{}class WE extends Ap{}function n2(t,e,...n){let r=[];e instanceof Ap&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Rp).length,l=s.filter(u=>u instanceof kp).length;if(o>1||o>0&&l>0)throw new G(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class kp extends WE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new kp(e,n,r)}_apply(e){const n=this._parse(e);return HE(e._query,n),new Li(e.firestore,e.converter,Sd(e._query,n))}_parse(e){const n=hc(e.firestore);return function(s,o,l,u,h,f,p){let y;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new G(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Jy(p,f);const x=[];for(const b of p)x.push(Xy(u,s,b));y={arrayValue:{values:x}}}else y=Xy(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Jy(p,f),y=XP(l,o,p,f==="in"||f==="not-in");return Ge.create(h,f,y)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Rp extends Ap{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Rp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)HE(o,u),o=Sd(o,u)}(e._query,n),new Li(e.firestore,e.converter,Sd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class xp extends WE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new xp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new G(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new G(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ca(s,o)}(e._query,this._field,this._direction);return new Li(e.firestore,e.converter,Ax(e._query,n))}}function r2(t,e="asc"){const n=e,r=Ns("orderBy",t);return xp._create(r,n)}function Xy(t,e,n){if(typeof(n=et(n))=="string"){if(n==="")throw new G(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fw(e)&&n.indexOf("/")!==-1)throw new G(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Te.fromString(n));if(!J.isDocumentKey(r))throw new G(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hy(t,new J(r))}if(n instanceof Le)return hy(t,n._key);throw new G(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xu(n)}.`)}function Jy(t,e){if(!Array.isArray(t)||t.length===0)throw new G(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function HE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new G(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new G(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function qE(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Ao{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wi extends $E{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Fl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ns("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new G(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=wi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}wi._jsonSchemaVersion="firestore/documentSnapshot/1.0",wi._jsonSchema={type:Ke("string",wi._jsonSchemaVersion),bundleSource:Ke("string","DocumentSnapshot"),bundleName:Ke("string"),bundle:Ke("string")};class Fl extends wi{data(e={}){return super.data(e)}}class vs{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ao(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Fl(this._firestore,this._userDataWriter,r.key,r,new Ao(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Fl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ao(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Fl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ao(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:i2(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new G(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Yf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function i2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:t})}}/**
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
 */vs._jsonSchemaVersion="firestore/querySnapshot/1.0",vs._jsonSchema={type:Ke("string",vs._jsonSchemaVersion),bundleSource:Ke("string","QuerySnapshot"),bundleName:Ke("string"),bundle:Ke("string")};/**
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
 */function s2(t){t=Xt(t,Le);const e=Xt(t.firestore,qr),n=wp(e);return jP(n,t._key).then(r=>GE(e,t,r))}function fh(t,e,n){t=Xt(t,Le);const r=Xt(t.firestore,qr),i=qE(t.converter,e),s=hc(r);return fc(r,[ME(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Jt.none())])}function yo(t,e,n,...r){t=Xt(t,Le);const i=Xt(t.firestore,qr),s=hc(i);let o;return o=typeof(e=et(e))=="string"||e instanceof Ep?YP(s,"updateDoc",t._key,e,n,r):QP(s,"updateDoc",t._key,e),fc(i,[o.toMutation(t._key,Jt.exists(!0))])}function pl(t){return fc(Xt(t.firestore,qr),[new rp(t._key,Jt.none())])}function Zy(t,e){const n=Xt(t.firestore,qr),r=Ct(t),i=qE(t.converter,e),s=hc(t.firestore);return fc(n,[ME(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Jt.exists(!1))]).then(()=>r)}function ml(t,...e){var h,f,p;t=et(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Yy(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Yy(e[r])){const y=e[r];e[r]=(h=y.next)==null?void 0:h.bind(y),e[r+1]=(f=y.error)==null?void 0:f.bind(y),e[r+2]=(p=y.complete)==null?void 0:p.bind(y)}let s,o,l;if(t instanceof Le)o=Xt(t.firestore,qr),l=tc(t._key.path),s={next:y=>{e[r]&&e[r](GE(o,t,y))},error:e[r+1],complete:e[r+2]};else{const y=Xt(t,Li);o=Xt(y.firestore,qr),l=y._query;const A=new BE(o);s={next:x=>{e[r]&&e[r](new vs(o,A,y,x))},error:e[r+1],complete:e[r+2]},t2(t._query)}const u=wp(o);return FP(u,l,i,s)}function fc(t,e){const n=wp(t);return UP(n,e)}function GE(t,e,n){const r=n.docs.get(e._key),i=new BE(t);return new wi(t,i,e._key,r,new Ao(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){jR(Di),Ri(new Fr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new qr(new BR(r.getProvider("auth-internal")),new HR(o,r.getProvider("app-check-internal")),lx(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),xn(Ky,Qy,e),xn(Ky,Qy,"esm2020")})();/**
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
 */const KE="firebasestorage.googleapis.com",o2="storageBucket",a2=2*60*1e3,l2=10*60*1e3;/**
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
 */class Fn extends Mn{constructor(e,n,r=0){super(ph(e),`Firebase Storage: ${n} (${ph(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Fn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ph(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ln;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ln||(Ln={}));function ph(t){return"storage/"+t}function u2(){const t="An unknown error occurred, please check the error payload for server response.";return new Fn(Ln.UNKNOWN,t)}function c2(){return new Fn(Ln.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function h2(){return new Fn(Ln.CANCELED,"User canceled the upload/download.")}function d2(t){return new Fn(Ln.INVALID_URL,"Invalid URL '"+t+"'.")}function f2(t){return new Fn(Ln.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function e_(t){return new Fn(Ln.INVALID_ARGUMENT,t)}function QE(){return new Fn(Ln.APP_DELETED,"The Firebase app was deleted.")}function p2(t){return new Fn(Ln.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class hn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=hn.makeFromUrl(e,n)}catch{return new hn(e,"")}if(r.path==="")return r;throw f2(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",A=new RegExp(`^https?://${p}/${f}/b/${i}/o${y}`,"i"),x={bucket:1,path:3},b=n===KE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,V="([^?#]*)",S=new RegExp(`^https?://${b}/${i}/${V}`,"i"),R=[{regex:l,indices:u,postModify:s},{regex:A,indices:x,postModify:h},{regex:S,indices:{bucket:1,path:2},postModify:h}];for(let D=0;D<R.length;D++){const M=R[D],U=M.regex.exec(e);if(U){const v=U[M.indices.bucket];let _=U[M.indices.path];_||(_=""),r=new hn(v,_),M.postModify(r);break}}if(r==null)throw d2(e);return r}}class m2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function g2(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...V){h||(h=!0,e.apply(null,V))}function p(V){i=setTimeout(()=>{i=null,t(A,u())},V)}function y(){s&&clearTimeout(s)}function A(V,...S){if(h){y();return}if(V){y(),f.call(null,V,...S);return}if(u()||o){y(),f.call(null,V,...S);return}r<64&&(r*=2);let R;l===1?(l=2,R=0):R=(r+Math.random())*1e3,p(R)}let x=!1;function b(V){x||(x=!0,y(),!h&&(i!==null?(V||(l=2),clearTimeout(i),p(0)):V||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,b(!0)},n),b}function y2(t){t(!1)}/**
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
 */function _2(t){return t!==void 0}function t_(t,e,n,r){if(r<e)throw e_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw e_(`Invalid value for '${t}'. Expected ${n} or less.`)}function v2(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var xu;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(xu||(xu={}));/**
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
 */function w2(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class E2{constructor(e,n,r,i,s,o,l,u,h,f,p,y=!0,A=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=y,this.isUsingEmulator=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,b)=>{this.resolve_=x,this.reject_=b,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new gl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===xu.NO_ERROR,u=s.getStatus();if(!l||w2(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===xu.ABORT;r(!1,new gl(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new gl(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());_2(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=u2();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?QE():h2();o(u)}else{const u=c2();o(u)}};this.canceled_?n(!1,new gl(!1,null,!0)):this.backoffId_=g2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&y2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class gl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function T2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function I2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function S2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function A2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function k2(t,e,n,r,i,s,o=!0,l=!1){const u=v2(t.urlParams),h=t.url+u,f=Object.assign({},t.headers);return S2(f,e),T2(f,n),I2(f,s),A2(f,r),new E2(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
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
 */function R2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function x2(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Cu{constructor(e,n){this._service=e,n instanceof hn?this._location=n:this._location=hn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Cu(e,n)}get root(){const e=new hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return x2(this._location.path)}get storage(){return this._service}get parent(){const e=R2(this._location.path);if(e===null)return null;const n=new hn(this._location.bucket,e);return new Cu(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw p2(e)}}function n_(t,e){const n=e==null?void 0:e[o2];return n==null?null:hn.makeFromBucketSpec(n,t)}function C2(t,e,n,r={}){t.host=`${e}:${n}`;const i=Ms(e);i&&Of(`https://${t.host}/b`),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:P0(s,t.app.options.projectId))}class P2{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=KE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=a2,this._maxUploadRetryTime=l2,this._requests=new Set,i!=null?this._bucket=hn.makeFromBucketSpec(i,this._host):this._bucket=n_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=hn.makeFromBucketSpec(this._url,e):this._bucket=n_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){t_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){t_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Cu(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new m2(QE());{const o=k2(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const r_="@firebase/storage",i_="0.14.3";/**
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
 */const YE="storage";function b2(t=Ff(),e){t=et(t);const r=Gu(t,YE).getImmediate({identifier:e}),i=R0("storage");return i&&N2(r,...i),r}function N2(t,e,n,r={}){C2(t,e,n,r)}function D2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new P2(n,r,i,e,Di)}function V2(){Ri(new Fr(YE,D2,"PUBLIC").setMultipleInstances(!0)),xn(r_,i_,""),xn(r_,i_,"esm2020")}V2();const O2={apiKey:"AIzaSyAzXyQA-BbL_0KsTnukODBfMBkIZINxiNM",authDomain:"tvpcainos.firebaseapp.com",projectId:"tvpcainos",storageBucket:"tvpcainos.firebasestorage.app",messagingSenderId:"721441022829",appId:"1:721441022829:web:45a0ee8fc152090b09f064"},Cp=D0(O2),mh=MR(Cp),Ye=WP(Cp);b2(Cp);const Pp=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],L2=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],M2=[0,2,4,5,7,9,11],bp=t=>{let e=Pp.indexOf(t);return e<0?L2.indexOf(t):e},F2=(t,e)=>{const n=bp(t);return n<0?t:Pp[((n+e)%12+12)%12]},s_=(t,e)=>!t||e===0?t:t.replace(/[A-G][#b]?/g,n=>F2(n,e));function Md(t,e){if(!t)return t;if(t.includes("/")){const[f,p]=t.split("/");return Md(f,e)+"/"+Md(p,e)}const n=t.match(/^([A-G][#b]?)(.*)/);if(!n)return t;const[,r,i]=n,s=bp(r);if(s<0)return t;const o=((s-e)%12+12)%12,l=M2.indexOf(o);if(l<0)return`(${t})`;const u=l+1,h=/^m(?!aj)/i.test(i);return(h?`${u}m`:`${u}`)+(h?i.replace(/^m(?!aj)/i,""):i)}function j2(t){const e=[];let n=null;for(const r of t.split(/(\[[^\]]+\])/))r.startsWith("[")&&r.endsWith("]")?n=r.slice(1,-1):(e.push({chord:n,text:r}),n=null);return n&&e.push({chord:n,text:""}),e}const XE=t=>t.replace(/\[[^\]]+\]/g,""),U2=[{id:1,title:"Amazing Grace",artist:"John Newton",key:"G",ki:7,bpm:72,ts:"3/4",sections:[{name:"Verse 1",lines:["[G]Amazing [G7]grace, how [C]sweet the [G]sound","That [G]saved a wretch like [D]me","I [G]once was [G7]lost, but [C]now am [G]found","Was [Em]blind, but [D]now I [G]see"]},{name:"Verse 2",lines:["'Twas [G]grace that [G7]taught my [C]heart to [G]fear","And [G]grace my fears re[D]lieved","How [G]precious [G7]did that [C]grace ap[G]pear","The [Em]hour I first be[D]lieved [G]"]}]},{id:2,title:"10,000 Reasons",artist:"Matt Redman",key:"G",ki:7,bpm:73,ts:"4/4",sections:[{name:"Chorus",lines:["[G]Bless the [D]Lord, O my [Em]soul, O my [C]soul","[G]Worship His [D]holy [C]name [G]","[G]Sing like never [D]before, O my [Em]soul","I'll [C]worship Your [G/B]holy [D]name"]},{name:"Verse 1",lines:["The [Em]sun comes [Bm]up, it's a new [C]day [G]dawning","It's [Em]time to [Bm]sing Your [C]song a[D]gain","What[Em]ever may [Bm]pass and what[C]ever lies be[G]fore me","Let [C]me be [G/B]singing when the [D]evening [G]comes"]}]},{id:3,title:"How Great Is Our God",artist:"Chris Tomlin",key:"G",ki:7,bpm:76,ts:"4/4",sections:[{name:"Verse 1",lines:["[G]The splendor of the [Em]King, clothed in ma[C]jesty","Let all the [D]earth rejoice, all the [G]earth rejoice","[G]He wraps Himself in [Em]light, and darkness [C]tries to hide"]},{name:"Chorus",lines:["How [G]great is our [D]God, sing with me","How [Em]great is our [C]God, and all will see","How [G]great, how [D]great [C]is our [G]God"]},{name:"Bridge",lines:["[G]Name above all names, [Em]worthy of all praise","[C]My heart will sing how [D]great is our [G]God"]}]},{id:4,title:"Blessed Be Your Name",artist:"Matt Redman",key:"A",ki:9,bpm:138,ts:"4/4",sections:[{name:"Verse 1",lines:["[A]Blessed be Your [E]name","In the [F#m]land that is [D]plentiful","Where Your [A]streams of abun[E]dance flow","[D]Blessed be Your [A]name"]},{name:"Chorus",lines:["[A]Blessed be the [E]name of the [F#m]Lord [D]","[A]Blessed be Your [E]glorious [D]name [A]","[A]Blessed be the [E]name of the [F#m]Lord [D]","[A]Blessed be Your [E]glorious [D]name"]}]},{id:5,title:"위대하신 주",artist:"워십팀",key:"G",ki:7,bpm:76,ts:"4/4",sections:[{name:"Verse 1",lines:["[G]주의 위대하심을 [Em]찬양해","[C]온 세상 그의 [D]것이요","[G]영원히 다스리시는 [Em]왕이시라","[C]주님만 [D]높이리"]},{name:"Chorus",lines:["[G]위대하신 주 [C]위대하신 주","[Em]노래해 [D]위대하신 주","[G]위대하신 주 [C]위대하신 주","[Em]영원히 [D]찬양받으실 [G]주"]}]},{id:6,title:"주를 찬양해",artist:"교회 워십",key:"D",ki:2,bpm:80,ts:"4/4",sections:[{name:"Verse 1",lines:["[D]거룩하신 주 [A]앞에 나아와","[Bm]두 손을 높이 [G]들어","[D]주의 이름을 [A]높여 드리며","[G]경배하리라 [A]"]},{name:"Chorus",lines:["[G]주를 [D/F#]찬양해 [Em]주를 [A]찬양해","[G]온 맘 다해 [D/F#]찬양해 [A]","[G]주를 [D/F#]찬양해 [Em]주를 [A]찬양해","[G]영원히 [A]찬양하리 [D]"]}]},{id:7,title:"주님 한 분만으로",artist:"예수전도단",key:"Bb",ki:10,bpm:68,ts:"4/4",sections:[{name:"Verse 1",lines:["[Bb]주님 한 분만으로 [F]난 만족해","[Gm]주님 한 분만으로 [Eb]족하네","[Bb]이 세상 그 무엇과도 [F]비교 못해"]},{name:"Chorus",lines:["[Eb]주님 [Bb/D]이름 [Cm]높이며 [F]찬양해","[Eb]주님 [Bb/D]앞에 [Cm]나아가 [F]경배해","[Bb]주님 [F]한 분만 [Eb]경배하리 [Bb]"]}]},{id:8,title:"Good Good Father",artist:"Chris Tomlin",key:"C",ki:0,bpm:68,ts:"4/4",sections:[{name:"Verse 1",lines:["[C]I've heard a thousand stories of what they [Am]think You're like","You're a [F]good good Father, it's [G]who You [C]are"]},{name:"Chorus",lines:["You're a [C]good good Father","It's [Am]who You are, it's [F]who You [C]are, it's [G]who You are","And I'm [C]loved by You","It's [Am]who I am, it's [F]who I [C]am, it's [G]who I am"]}]}],ae="#00b5a5",z2="#dc2626",B2=["C","C#","D","Eb","E","F","F#","G","Ab","A","Bb","B"],JE=["주일예배","금요예배","특별예배","새벽예배","부활절 예배","성탄절 예배","추수감사절 예배"],$2=t=>{const e=new Uint8Array(t);let n="";for(let r=0;r<e.length;r++)n+=String.fromCharCode(e[r]);return btoa(n)},W2=t=>{const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer},o_=t=>new Date(t+"T12:00:00").toLocaleDateString("ko-KR",{month:"long",day:"numeric"}),H2=t=>new Date(t+"T12:00:00").toLocaleDateString("ko-KR",{month:"short",day:"numeric"}),q2=()=>new Date().toISOString().slice(0,10),gi={width:28,height:28,border:"1px solid #e2e8f0",borderRadius:6,background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:0,color:"#475569"};function G2(){var Ks,tt,Qs;const[t,e]=B.useState(null),[n,r]=B.useState(!0),[i,s]=B.useState("home"),[o,l]=B.useState([]),[u,h]=B.useState([]),[f,p]=B.useState({}),[y,A]=B.useState({}),[x,b]=B.useState(null),[V,S]=B.useState(null),[w,R]=B.useState("service"),[D,M]=B.useState(0),[U,v]=B.useState(0),[_,E]=B.useState("chords1"),[I,k]=B.useState(!1),[C,T]=B.useState(0),[Se,Ue]=B.useState(!1),[tn,ft]=B.useState(!1),[H,X]=B.useState(!1),[Z,ge]=B.useState(null),[fe,Tt]=B.useState(!1),[$,ie]=B.useState({}),[q,se]=B.useState({}),ze=B.useMemo(()=>[...U2,...u],[u]);B.useEffect(()=>Ak(mh,F=>{e(F),r(!1)}),[]),B.useEffect(()=>{if(!t)return;const F=[];return F.push(ml(n2(Hi(Ye,"services"),r2("date")),z=>{l(z.docs.map(Y=>({id:Y.id,...Y.data()})))})),F.push(ml(Hi(Ye,"customSongs"),z=>{h(z.docs.map(Y=>({id:Y.id,...Y.data(),custom:!0})))})),F.push(ml(Hi(Ye,"pdfFiles"),z=>{const Y={};z.docs.forEach(le=>{Y[le.id]=le.data()}),p(Y)})),F.push(ml(Hi(Ye,`userAnnotations/${t.uid}/pages`),z=>{const Y={};z.docs.forEach(le=>{Y[le.id]=le.data().dataUrl}),A(Y)})),()=>F.forEach(z=>z())},[t]);const pe=o.find(F=>F.id===x),we=ze.find(F=>F.id===V),Be=(pe==null?void 0:pe.songIds)||[],It=Be.indexOf(V),_n=we&&!!f[we.id],Jr=D-U,Mi=we?((we.ki+D)%12+12)%12:0,nn=Pp[Mi];function jn(F){b(F),Tt(!1),s("service")}function Zr(F,z="service"){S(F),R(z),M(0),v(0),T(0),s("song")}B.useEffect(()=>{if(V&&i==="song"){const F=ze.find(Y=>Y.id===V);F&&f[String(F.id)]&&!q[F.id]&&Hs(F.id);const z=Be.indexOf(V);[z-1,z+1].forEach(Y=>{if(Y>=0&&Y<Be.length){const le=ze.find(We=>We.id===Be[Y]);le&&f[String(le.id)]&&!q[le.id]&&Hs(le.id)}})}},[V,f,i]);function Me(){s("home")}function $e(){s("service")}function Un(){ft(!1),s("library")}function ei(F){S(F),M(0),v(0),T(0)}async function ti(F,z){await Zy(Hi(Ye,"services"),{date:F,name:z,songIds:[],createdBy:t.uid,createdAt:dh()}),Ue(!1)}async function Fi(F,z,Y){await yo(Ct(Ye,"services",F),{date:z,name:Y}),ge(null)}async function rn(F,z){await yo(Ct(Ye,"services",F),{notes:z})}async function ba(F){if(!pe)return;const z=[...pe.songIds];z.includes(F)||(z.push(F),await yo(Ct(Ye,"services",x),{songIds:z})),X(!1)}async function Na(F){pe&&await yo(Ct(Ye,"services",x),{songIds:pe.songIds.filter(z=>z!==F)})}async function ji(F,z){if(!pe)return;const Y=[...pe.songIds],le=F+z;le<0||le>=Y.length||([Y[F],Y[le]]=[Y[le],Y[F]],await yo(Ct(Ye,"services",x),{songIds:Y}))}async function Ws(F,z){if(z){ie(Y=>({...Y,[F]:!0}));try{const Y=await z.arrayBuffer(),le=$2(Y),We=700*1024,vn=[];for(let St=0;St<le.length;St+=We)vn.push(le.slice(St,St+We));await fh(Ct(Ye,"pdfFiles",String(F)),{name:z.name,chunkCount:vn.length,uploadedBy:t.uid,uploadedAt:dh()});for(let St=0;St<vn.length;St++)await fh(Ct(Ye,"pdfFiles",String(F),"chunks",String(St)),{data:vn[St]});se(St=>({...St,[F]:le}))}catch(Y){console.error(Y),alert("PDF 업로드 실패: "+Y.message)}ie(Y=>({...Y,[F]:!1}))}}async function Da(F){try{const z=f[F];if(z!=null&&z.chunkCount)for(let Y=0;Y<z.chunkCount;Y++)await pl(Ct(Ye,"pdfFiles",String(F),"chunks",String(Y))).catch(()=>{});await pl(Ct(Ye,"pdfFiles",String(F))),se(Y=>{const le={...Y};return delete le[F],le})}catch(z){console.error(z)}}async function Hs(F){if(!q[F])try{const z=f[String(F)];if(!z||!z.chunkCount)return;const le=(await Promise.all(Array.from({length:z.chunkCount},(We,vn)=>s2(Ct(Ye,"pdfFiles",String(F),"chunks",String(vn)))))).filter(We=>We.exists()).map(We=>We.data().data).join("");le&&se(We=>({...We,[F]:le}))}catch(z){console.error("PDF load error",z)}}async function Va(F,z){await fh(Ct(Ye,`userAnnotations/${t.uid}/pages`,F),{dataUrl:z,updatedAt:dh()})}async function ni(F){await pl(Ct(Ye,`userAnnotations/${t.uid}/pages`,F))}async function qs(F,z){const Y={...F,ki:bp(F.key)||0,sections:[],custom:!0,createdBy:t.uid},le=await Zy(Hi(Ye,"customSongs"),Y);return z&&await Ws(le.id,z),le.id}async function Gs(F){await pl(Ct(Ye,"customSongs",F)),await Da(F)}async function zn(){const F=new Wn;try{await qk(mh,F)}catch(z){console.error(z)}}async function Oa(){await kk(mh),s("home"),l([]),h([]),p({}),A([])}if(n)return g.jsxs("div",{style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"-apple-system,sans-serif"},children:[g.jsx(ud,{size:28,color:ae,style:{animation:"spin 1s linear infinite"}}),g.jsx("style",{children:"@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}"})]});if(!t)return g.jsx(Q2,{onSignIn:zn});if(I&&we)return g.jsx(ab,{song:we,xp:Jr,si:C,setSi:T,onExit:()=>k(!1)});if(i==="song"&&we){const F=_n?q[we.id]:null,z=F?W2(F):null,Y=_n?(Ks=f[we.id])==null?void 0:Ks.name:null,le=_n&&!z,We=w==="service"&&It>0,vn=w==="service"&&It<Be.length-1,St=w==="service"?x:"lib";return g.jsx(Y2,{song:we,pdfData:z,hasPdf:_n,pdfLoading:le,annotPrefix:St,transpose:D,setTranspose:M,capo:U,setCapo:v,viewMode:_,setViewMode:E,curKey:nn,effXp:Jr,curKi:Mi,onBack:w==="service"?$e:Un,backLabel:w==="service"?(pe==null?void 0:pe.name)||"서비스":"Song Library",hasPrev:We,hasNext:vn,onPrev:()=>ei(Be[It-1]),onNext:()=>ei(Be[It+1]),onPresMode:()=>k(!0),pdfName:Y,songIdx:It,totalSongs:Be.length,annots:y,onSaveAnnot:Va,onDeleteAnnot:ni,onUploadPdf:zi=>Ws(we.id,zi),uploading:!!$[we.id]})}if(i==="library")return g.jsx(J2,{songs:ze,pdfFiles:f,uploading:$,onUpload:Ws,onRemovePdf:Da,onOpenSong:F=>Zr(F,"library"),onAddCustom:qs,onDeleteCustom:Gs,onBack:Me});if(i==="service"&&pe){const F=pe.songIds.map(z=>ze.find(Y=>String(Y.id)===String(z))).filter(Boolean);return g.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",fontFamily:'-apple-system,BlinkMacSystemFont,"Noto Sans KR",sans-serif',background:"#f2f2f7",overflow:"hidden"},children:[g.jsxs("div",{style:{background:"#fff",borderBottom:"1px solid #e2e8f0",flexShrink:0},children:[g.jsxs("div",{style:{padding:"10px 14px 8px",display:"flex",alignItems:"center"},children:[g.jsxs("button",{onClick:Me,style:{display:"flex",alignItems:"center",background:"none",border:"none",cursor:"pointer",color:ae,fontSize:15,fontWeight:500,padding:"4px 0",marginRight:8,gap:1},children:[g.jsx(ra,{size:20,style:{marginRight:-2}})," Services"]}),g.jsxs("div",{style:{flex:1,textAlign:"center"},children:[g.jsx("div",{style:{fontSize:18,fontWeight:800},children:o_(pe.date)}),g.jsx("div",{style:{fontSize:12,color:"#64748b"},children:pe.name})]}),g.jsx("div",{style:{width:80}})]}),g.jsx("div",{style:{display:"flex",borderTop:"1px solid #f1f5f9"},children:[{label:fe?"Done":"Reorder",action:()=>Tt(z=>!z),hi:fe},{label:"Edit",action:()=>ge(pe),hi:!1},{label:"Share",action:()=>K2(pe,ze),hi:!1}].map((z,Y)=>g.jsx("button",{onClick:z.action,style:{flex:1,padding:"8px 4px",background:"none",border:"none",borderRight:Y<2?"1px solid #f1f5f9":"none",cursor:"pointer",fontSize:12,fontWeight:z.hi?700:500,color:z.hi?"#ef4444":ae},children:z.label},z.label))})]}),g.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"12px 0"},children:[g.jsxs("div",{style:{background:"#fff",borderRadius:12,margin:"0 14px",overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"},children:[F.length===0&&g.jsx("div",{style:{padding:"24px",textAlign:"center",color:"#94a3b8",fontSize:13},children:"아직 추가된 곡이 없습니다"}),F.map((z,Y)=>g.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"12px 14px",borderBottom:Y<F.length-1?"1px solid #f1f5f9":"none",gap:10,cursor:fe?"default":"pointer"},onClick:()=>!fe&&Zr(z.id),children:[fe&&g.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[g.jsx("button",{onClick:le=>{le.stopPropagation(),ji(Y,-1)},style:{width:22,height:22,background:"none",border:"none",cursor:"pointer",padding:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#94a3b8"},children:g.jsx(YI,{size:14})}),g.jsx("button",{onClick:le=>{le.stopPropagation(),ji(Y,1)},style:{width:22,height:22,background:"none",border:"none",cursor:"pointer",padding:0,display:"flex",alignItems:"center",justifyContent:"center",color:"#94a3b8"},children:g.jsx(QI,{size:14})})]}),g.jsx("div",{style:{width:22,height:22,borderRadius:"50%",background:"#f1f5f9",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"#64748b",flexShrink:0},children:Y+1}),g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsxs("div",{style:{fontSize:15,fontWeight:600,display:"flex",alignItems:"center",gap:6},children:[z.title,f[z.id]&&g.jsx("span",{style:{fontSize:10,background:"#eff6ff",color:"#2563eb",padding:"1px 5px",borderRadius:4,fontWeight:700},children:"PDF"}),$[z.id]&&g.jsx("span",{style:{fontSize:10,color:"#94a3b8"},children:"업로드 중..."})]}),g.jsx("div",{style:{fontSize:12,color:"#8e8e93",marginTop:1},children:z.artist})]}),g.jsxs("span",{style:{fontSize:13,fontWeight:600,color:"#475569",marginRight:fe?0:4},children:["[",z.key,"]"]}),!fe&&g.jsx("button",{onClick:le=>{le.stopPropagation(),Na(z.id)},style:{width:22,height:22,background:"none",border:"none",cursor:"pointer",color:"#cbd5e1",display:"flex",alignItems:"center",justifyContent:"center",padding:0},children:g.jsx(Ls,{size:14})})]},z.id)),g.jsxs("div",{onClick:()=>X(!0),style:{padding:"13px 14px",display:"flex",alignItems:"center",gap:8,cursor:"pointer",color:ae},children:[g.jsx(Vf,{size:16}),g.jsx("span",{style:{fontSize:15,fontWeight:500},children:"Add Song"})]})]}),g.jsx(nb,{notes:pe.notes||"",onSave:z=>rn(x,z)})]}),H&&g.jsx(sb,{allSongs:ze,existingIds:pe.songIds,pdfFiles:f,onAdd:ba,onClose:()=>X(!1)}),Z&&g.jsx(ib,{service:Z,onSave:Fi,onClose:()=>ge(null)})]})}const Ui=new Date,ri=o.filter(F=>new Date(F.date+"T23:59:59")>=Ui),sn=ri[0];return g.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",fontFamily:'-apple-system,BlinkMacSystemFont,"Noto Sans KR",sans-serif',background:"#f2f2f7",overflow:"hidden"},children:[g.jsxs("div",{style:{flex:1,overflowY:"auto"},children:[g.jsxs("div",{style:{padding:"20px 18px 12px",display:"flex",justifyContent:"space-between",alignItems:"flex-start",position:"relative"},children:[g.jsxs("div",{children:[g.jsx("h1",{style:{margin:0,fontSize:24,fontWeight:800,color:"#000"},children:"TVPC Worship Team"}),g.jsxs("p",{style:{margin:"2px 0 0",fontSize:13,color:"#8e8e93"},children:["👋 ",((tt=t.displayName)==null?void 0:tt.split(" ")[0])||"Ainos"]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:4},children:[t.photoURL&&g.jsx("img",{src:t.photoURL,style:{width:32,height:32,borderRadius:"50%",objectFit:"cover"},alt:""}),g.jsx("button",{onClick:()=>ft(F=>!F),style:{width:32,height:32,background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#8e8e93"},children:g.jsx(XI,{size:20})})]}),tn&&g.jsxs(g.Fragment,{children:[g.jsx("div",{onClick:()=>ft(!1),style:{position:"fixed",inset:0,zIndex:99}}),g.jsx("div",{style:{position:"absolute",top:56,right:14,background:"#fff",borderRadius:12,boxShadow:"0 8px 32px rgba(0,0,0,0.15)",zIndex:100,minWidth:190,overflow:"hidden"},children:[{icon:g.jsx(KI,{size:15}),label:"Song Library",action:Un},{icon:g.jsx(ZI,{size:15}),label:"로그아웃",action:()=>{ft(!1),Oa()},red:!0}].map((F,z)=>g.jsxs("div",{onClick:F.action,style:{display:"flex",alignItems:"center",gap:12,padding:"13px 16px",borderBottom:z<1?"1px solid #f1f5f9":"none",cursor:"pointer",fontSize:15,color:F.red?"#ef4444":"#0f172a"},children:[g.jsx("span",{style:{color:F.red?"#ef4444":"#475569"},children:F.icon}),F.label]},z))})]})]}),g.jsxs("div",{style:{padding:"0 14px 6px"},children:[g.jsx("div",{style:{fontSize:12,fontWeight:700,color:ae,letterSpacing:"0.04em",marginBottom:8},children:"다음 예배"}),sn?g.jsxs("div",{onClick:()=>jn(sn.id),style:{background:"#fff",borderRadius:12,padding:"14px 16px",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.06)",display:"flex",justifyContent:"space-between",alignItems:"center",overflow:"hidden"},children:[g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsx("div",{style:{fontSize:17,fontWeight:700},children:o_(sn.date)}),g.jsxs("div",{style:{fontSize:13,color:"#8e8e93",marginTop:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[sn.name," · ",((Qs=sn.songIds)==null?void 0:Qs.length)||0,"곡"]})]}),g.jsx(uu,{size:18,color:"#c7c7cc",style:{flexShrink:0}})]}):g.jsx("div",{style:{background:"#fff",borderRadius:12,padding:"14px 16px",color:"#8e8e93",fontSize:14,boxShadow:"0 1px 3px rgba(0,0,0,0.06)"},children:"예정된 예배가 없습니다"})]}),g.jsxs("div",{style:{padding:"14px 14px 24px"},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[g.jsx("div",{style:{fontSize:12,fontWeight:700,color:ae,letterSpacing:"0.04em"},children:"예배 일정"}),g.jsx("button",{onClick:()=>Ue(!0),style:{background:"none",border:"none",cursor:"pointer",color:ae,fontSize:14,fontWeight:600,padding:"2px 4px"},children:"+ 새로 만들기"})]}),g.jsxs("div",{style:{background:"#fff",borderRadius:12,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"},children:[ri.length===0&&g.jsx("div",{style:{padding:"16px",color:"#8e8e93",fontSize:14,textAlign:"center"},children:"예정된 예배가 없습니다"}),ri.map((F,z)=>g.jsxs("div",{onClick:()=>jn(F.id),style:{display:"flex",alignItems:"center",padding:"13px 16px",borderBottom:z<ri.length-1?"1px solid #f1f5f9":"none",cursor:"pointer",overflow:"hidden"},children:[g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsx("div",{style:{fontSize:16,fontWeight:700},children:H2(F.date)}),g.jsx("div",{style:{fontSize:13,color:"#8e8e93",marginTop:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:F.name})]}),g.jsx(uu,{size:16,color:"#c7c7cc",style:{flexShrink:0}})]},F.id))]})]})]}),Se&&g.jsx(rb,{onCreate:ti,onClose:()=>Ue(!1)})]})}function K2(t,e){const n=t.songIds.map(o=>e.find(l=>String(l.id)===String(o))).filter(Boolean),r={v:2,date:t.date,name:t.name,songs:n.map(o=>({id:o.id,title:o.title,artist:o.artist,key:o.key,ki:o.ki||0,bpm:o.bpm||0,ts:o.ts||"4/4",custom:!!o.custom,sections:o.sections||[]}))},i=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),s=`${window.location.origin}${window.location.pathname}#share=${i}`;navigator.share?navigator.share({title:t.name,url:s}):navigator.clipboard?navigator.clipboard.writeText(s).then(()=>alert(`📋 링크 복사됨!
팀원들에게 카톡/문자로 공유하세요.`)):prompt("링크를 복사해서 공유하세요:",s)}function Q2({onSignIn:t}){return g.jsxs("div",{style:{height:"100vh",fontFamily:'-apple-system,BlinkMacSystemFont,"Noto Sans KR",sans-serif',background:"#f2f2f7",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 24px"},children:[g.jsx("div",{style:{width:72,height:72,background:ae,borderRadius:20,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20,boxShadow:"0 8px 24px rgba(0,181,165,0.35)"},children:g.jsx(tS,{size:36,color:"#fff"})}),g.jsx("h1",{style:{margin:"0 0 6px",fontSize:26,fontWeight:800,color:"#0f172a",textAlign:"center"},children:"WorshipCharts"}),g.jsx("p",{style:{margin:"0 0 40px",fontSize:15,color:"#8e8e93",textAlign:"center"},children:"TVPC Worship Team"}),g.jsxs("button",{onClick:t,style:{display:"flex",alignItems:"center",gap:12,padding:"14px 24px",background:"#fff",border:"1px solid #e2e8f0",borderRadius:14,cursor:"pointer",fontSize:16,fontWeight:600,color:"#0f172a",boxShadow:"0 2px 8px rgba(0,0,0,0.08)",width:"100%",maxWidth:320,justifyContent:"center"},children:[g.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 48 48",children:[g.jsx("path",{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}),g.jsx("path",{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}),g.jsx("path",{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}),g.jsx("path",{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"})]}),"Google로 로그인"]}),g.jsx("p",{style:{marginTop:20,fontSize:12,color:"#94a3b8",textAlign:"center"},children:"TVPC 워십팀 멤버만 접속 가능합니다"})]})}function Y2({song:t,pdfData:e,hasPdf:n,pdfLoading:r,annotPrefix:i,transpose:s,setTranspose:o,capo:l,setCapo:u,viewMode:h,setViewMode:f,curKey:p,effXp:y,curKi:A,onBack:x,backLabel:b,hasPrev:V,hasNext:S,onPrev:w,onNext:R,onPresMode:D,pdfName:M,songIdx:U,totalSongs:v,annots:_,onSaveAnnot:E,onDeleteAnnot:I,onUploadPdf:k,uploading:C}){const[T,Se]=B.useState(!n),[Ue,tn]=B.useState(!1),ft=B.useRef(null),H=B.useRef(null),X=B.useRef(null),Z=B.useRef(V),ge=B.useRef(S),fe=B.useRef(w),Tt=B.useRef(R),$=B.useRef(Ue),ie=B.useRef(n);return B.useEffect(()=>{Z.current=V,ge.current=S,fe.current=w,Tt.current=R,$.current=Ue,ie.current=n},[V,S,w,R,Ue,n]),B.useEffect(()=>{Se(!n)},[n]),B.useEffect(()=>{const q=ft.current;if(!q)return;const se=we=>{$.current||(H.current=we.touches[0].clientX,X.current=we.touches[0].clientY)},ze=we=>{if($.current||H.current===null)return;const Be=we.touches[0].clientX-H.current,It=we.touches[0].clientY-X.current;Math.abs(Be)>Math.abs(It)*1.5&&Math.abs(Be)>20&&we.preventDefault()},pe=we=>{if($.current||H.current===null)return;const Be=we.changedTouches[0].clientX-H.current,It=we.changedTouches[0].clientY-X.current;H.current=null,!ie.current&&Math.abs(Be)>Math.abs(It)*1.5&&Math.abs(Be)>65&&(we.preventDefault(),Be<0&&ge.current?Tt.current():Be>0&&Z.current&&fe.current())};return q.addEventListener("touchstart",se,{passive:!0}),q.addEventListener("touchmove",ze,{passive:!1}),q.addEventListener("touchend",pe,{passive:!1}),()=>{q.removeEventListener("touchstart",se),q.removeEventListener("touchmove",ze),q.removeEventListener("touchend",pe)}},[]),g.jsxs("div",{ref:ft,style:{display:"flex",flexDirection:"column",height:"100vh",fontFamily:'-apple-system,BlinkMacSystemFont,"Noto Sans KR",sans-serif',background:"#fff",overflow:"hidden"},children:[g.jsxs("div",{style:{padding:"10px 14px 8px",borderBottom:"1px solid #e2e8f0",display:"flex",alignItems:"center",gap:8,flexShrink:0},children:[g.jsxs("button",{onClick:x,style:{display:"flex",alignItems:"center",background:"none",border:"none",cursor:"pointer",color:ae,fontSize:14,fontWeight:500,padding:"4px 0",flexShrink:0,gap:1},children:[g.jsx(ra,{size:19,style:{marginRight:-2}}),g.jsx("span",{style:{maxWidth:90,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:b})]}),g.jsxs("div",{style:{flex:1,textAlign:"center",minWidth:0},children:[g.jsx("div",{style:{fontSize:16,fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.title}),v>0&&g.jsxs("div",{style:{fontSize:10,color:"#94a3b8"},children:[U+1," / ",v]})]}),g.jsxs("div",{style:{display:"flex",gap:4,flexShrink:0,alignItems:"center"},children:[g.jsxs("span",{style:{padding:"2px 7px",background:"#eff6ff",borderRadius:12,fontSize:11,fontWeight:700,color:"#2563eb"},children:["Key ",p]}),g.jsx("button",{onClick:D,style:{width:28,height:28,border:"1px solid #e2e8f0",borderRadius:6,background:"#f8fafc",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",padding:0},children:g.jsx(eS,{size:14,color:"#475569"})})]})]}),(!n||T)&&g.jsxs("div",{style:{padding:"5px 12px",borderBottom:"1px solid #e2e8f0",background:"#f8fafc",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",flexShrink:0},children:[[{id:"lyrics",l:"가사"},{id:"chords1",l:"1열"},{id:"chords2",l:"2열"},{id:"nashville",l:"NNS"}].map(q=>g.jsx("button",{onClick:()=>f(q.id),style:{padding:"3px 8px",border:`1px solid ${h===q.id?ae:"#e2e8f0"}`,borderRadius:5,background:h===q.id?ae:"#fff",color:h===q.id?"#fff":"#475569",cursor:"pointer",fontSize:11},children:q.l},q.id)),g.jsx("div",{style:{width:1,height:16,background:"#e2e8f0"}}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[g.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#94a3b8"},children:"T"}),g.jsx("button",{onClick:()=>o(q=>q-1),style:{...gi,width:24,height:24,fontSize:14},children:"−"}),g.jsx("span",{style:{minWidth:24,textAlign:"center",fontWeight:700,fontSize:12},children:s>=0?`+${s}`:s}),g.jsx("button",{onClick:()=>o(q=>q+1),style:{...gi,width:24,height:24,fontSize:14},children:"+"}),s!==0&&g.jsx("button",{onClick:()=>o(0),style:{padding:"2px 5px",border:"none",background:"#fee2e2",color:"#ef4444",borderRadius:4,cursor:"pointer",fontSize:10,fontWeight:600},children:"↺"})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3},children:[g.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#94a3b8"},children:"C"}),g.jsx("button",{onClick:()=>u(q=>Math.max(0,q-1)),style:{...gi,width:24,height:24,fontSize:14},children:"−"}),g.jsx("span",{style:{minWidth:24,textAlign:"center",fontWeight:700,fontSize:12},children:l||"0"}),g.jsx("button",{onClick:()=>u(q=>Math.min(7,q+1)),style:{...gi,width:24,height:24,fontSize:14},children:"+"})]}),n&&g.jsx("button",{onClick:()=>Se(!1),style:{marginLeft:"auto",padding:"2px 6px",border:"none",background:"#f1f5f9",color:"#64748b",borderRadius:4,cursor:"pointer",fontSize:10},children:"닫기"})]}),n&&r&&g.jsxs("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:12,color:"#64748b",fontSize:14,background:"#f8fafc"},children:[g.jsx(ud,{size:22,color:ae,style:{animation:"spin 1s linear infinite"}})," PDF 불러오는 중...",g.jsx("style",{children:"@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}"})]}),n&&!r?g.jsx(X2,{pdfData:e,songId:t.id,annotPrefix:i,annots:_,onSaveAnnot:E,onDeleteAnnot:I,onAnnotActiveChange:tn,pdfName:M,onUpload:k},t.id):g.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"16px 18px",display:n&&r?"none":"block"},children:[l>0&&g.jsxs("div",{style:{marginBottom:10,padding:"5px 10px",background:"#fffbeb",border:"1px solid #fde68a",borderRadius:6,fontSize:12,color:"#92400e"},children:[g.jsxs("strong",{children:["Capo ",l]})," — Key ",p,"로 연주"]}),h==="chords2"?g.jsx(eb,{song:t,xp:y,ki:A}):g.jsx(Z2,{song:t,xp:y,ki:A,mode:h}),g.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6,marginTop:20,padding:"10px 12px",border:"1px dashed #cbd5e1",borderRadius:8,cursor:"pointer",color:C?ae:"#94a3b8",fontSize:13},children:[C?g.jsx(ud,{size:15,style:{animation:"spin 1s linear infinite"}}):g.jsx(w0,{size:15}),C?"PDF 업로드 중...":"이 곡의 악보 PDF 추가",g.jsx("input",{type:"file",accept:".pdf",onChange:q=>k(q.target.files[0]),style:{display:"none"},disabled:C})]}),g.jsx("style",{children:"@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}"})]}),(V||S)&&!Ue&&g.jsxs("div",{style:{position:"absolute",bottom:16,left:0,right:0,display:"flex",justifyContent:"space-between",padding:"0 12px",pointerEvents:"none",zIndex:10},children:[g.jsxs("div",{style:{opacity:V?.45:0,fontSize:12,color:"#64748b",display:"flex",alignItems:"center",gap:3,background:"rgba(255,255,255,0.85)",padding:"4px 10px",borderRadius:20,boxShadow:"0 1px 4px rgba(0,0,0,0.1)"},children:[g.jsx(ra,{size:13})," 이전"]}),g.jsxs("div",{style:{opacity:S?.45:0,fontSize:12,color:"#64748b",display:"flex",alignItems:"center",gap:3,background:"rgba(255,255,255,0.85)",padding:"4px 10px",borderRadius:20,boxShadow:"0 1px 4px rgba(0,0,0,0.1)"},children:["다음 ",g.jsx(uu,{size:13})]})]})]})}function X2({pdfData:t,songId:e,annotPrefix:n,annots:r,onSaveAnnot:i,onDeleteAnnot:s,onAnnotActiveChange:o,pdfName:l,onUpload:u}){const[h,f]=B.useState(0),[p,y]=B.useState(1),[A,x]=B.useState(!1),[b,V]=B.useState("pen"),[S,w]=B.useState("#dc2626"),[R,D]=B.useState(4),[M,U]=B.useState([]),v=B.useRef(null),_=B.useRef(null),E=B.useRef(null),I=B.useRef(!1),k=B.useRef(null),C=B.useRef(null),T=B.useRef(null),Se=B.useRef(r);B.useEffect(()=>{Se.current=r},[r]),B.useEffect(()=>{o&&o(A)},[A]),B.useEffect(()=>{U([])},[p]),B.useEffect(()=>{const $=()=>{window.pdfjsLib.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js",Ue()};if(window.pdfjsLib){$();return}const ie=document.createElement("script");ie.src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js",ie.onload=$,document.head.appendChild(ie)},[t]);async function Ue(){if(!(!window.pdfjsLib||!t))try{const $=await window.pdfjsLib.getDocument({data:t}).promise;E.current=$,f($.numPages),y(1)}catch($){console.error("PDF load error",$)}}B.useEffect(()=>{tn(p)},[p,h]);async function tn($){var ti,Fi;const ie=E.current,q=v.current,se=_.current;if(!ie||!q||!se||$<1)return;const ze=await ie.getPage($),pe=(Fi=(ti=_.current)==null?void 0:ti.parentElement)==null?void 0:Fi.parentElement,we=pe?pe.clientHeight:window.innerHeight*.85,Be=pe?pe.clientWidth:window.innerWidth*.95,It=ze.getViewport({scale:1}),_n=we/It.height,Jr=Be/It.width,Mi=Math.min(_n,Jr)*(window.devicePixelRatio||1),nn=ze.getViewport({scale:Mi});q.width=se.width=nn.width,q.height=se.height=nn.height;const jn=window.devicePixelRatio||1,Zr=Math.round(nn.width/jn)+"px",Me=Math.round(nn.height/jn)+"px";q.style.width=se.style.width=Zr,q.style.height=se.style.height=Me,await ze.render({canvasContext:q.getContext("2d"),viewport:nn}).promise;const $e=se.getContext("2d");$e.clearRect(0,0,se.width,se.height);const Un=`${n}-${e}-${$}`,ei=Se.current[Un];if(ei){const rn=new Image;rn.onload=()=>$e.drawImage(rn,0,0),rn.src=ei}}function ft($){const ie=_.current,q=ie.getBoundingClientRect(),se=ie.width/q.width,ze=ie.height/q.height,pe=$.touches?$.touches[0]:$;return{x:(pe.clientX-q.left)*se,y:(pe.clientY-q.top)*ze}}function H($){if(!A)return;$.preventDefault(),$.stopPropagation(),I.current=!0,k.current=ft($);const ie=_.current.toDataURL();U(q=>[...q.slice(-14),ie])}function X($){if(!A||!I.current)return;$.preventDefault(),$.stopPropagation();const q=_.current.getContext("2d"),se=ft($);q.beginPath(),q.moveTo(k.current.x,k.current.y),q.lineTo(se.x,se.y),q.lineCap="round",q.lineJoin="round",b==="eraser"?(q.globalCompositeOperation="destination-out",q.lineWidth=R*5,q.strokeStyle="rgba(0,0,0,1)"):(q.globalCompositeOperation="source-over",q.strokeStyle=S,q.lineWidth=R),q.stroke(),k.current=se}function Z(){if(!I.current)return;I.current=!1;const $=`${n}-${e}-${p}`;i($,_.current.toDataURL())}function ge(){if(M.length===0)return;const $=M[M.length-1];U(se=>se.slice(0,-1));const ie=_.current,q=ie.getContext("2d");if(q.clearRect(0,0,ie.width,ie.height),$){const se=new Image;se.onload=()=>{q.drawImage(se,0,0),i(`${n}-${e}-${p}`,ie.toDataURL())},se.src=$}else s(`${n}-${e}-${p}`)}function fe(){const $=_.current;$&&($.getContext("2d").clearRect(0,0,$.width,$.height),s(`${n}-${e}-${p}`))}const Tt=["#dc2626","#2563eb","#16a34a","#f59e0b","#a855f7","#000"];return g.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden",position:"relative"},children:[g.jsxs("div",{style:{padding:"5px 12px",background:"#f8fafc",borderBottom:"1px solid #e2e8f0",display:"flex",alignItems:"center",gap:6,flexShrink:0},children:[g.jsx("button",{onClick:()=>y($=>Math.max(1,$-1)),disabled:p<=1,style:{...gi,width:26,height:26,opacity:p<=1?.4:1},children:g.jsx(ra,{size:14})}),g.jsx("span",{style:{fontSize:12,fontWeight:600,minWidth:50,textAlign:"center"},children:h>0?`${p} / ${h}`:"로딩..."}),g.jsx("button",{onClick:()=>y($=>Math.min(h,$+1)),disabled:p>=h,style:{...gi,width:26,height:26,opacity:p>=h?.4:1},children:g.jsx(uu,{size:14})}),h>1&&g.jsx("span",{style:{fontSize:10,color:"#94a3b8",marginLeft:4},children:"← 스와이프 →"}),g.jsx("span",{style:{fontSize:11,color:"#94a3b8",flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",marginLeft:4},children:l}),g.jsxs("label",{style:{fontSize:11,color:ae,cursor:"pointer",fontWeight:600,flexShrink:0},children:["교체",g.jsx("input",{type:"file",accept:".pdf",onChange:$=>u&&u($.target.files[0]),style:{display:"none"}})]})]}),g.jsx("div",{style:{flex:1,overflow:"auto",padding:0,display:"flex",justifyContent:"center",alignItems:"flex-start",background:"#e5e7eb"},onTouchStart:$=>{if(A)return;const ie=$.touches[0];C.current=ie.clientX,T.current=ie.clientY},onTouchEnd:$=>{if(A||C.current===null)return;const ie=$.changedTouches[0].clientX-C.current,q=$.changedTouches[0].clientY-T.current;C.current=null,Math.abs(ie)>Math.abs(q)*1.5&&Math.abs(ie)>50&&(ie<0&&p<h?y(se=>se+1):ie>0&&p>1&&y(se=>se-1))},children:g.jsxs("div",{style:{position:"relative",boxShadow:"0 4px 20px rgba(0,0,0,0.18)",borderRadius:4,overflow:"hidden",background:"#fff",display:"inline-block"},children:[g.jsx("canvas",{ref:v,style:{display:"block"}}),g.jsx("canvas",{ref:_,style:{position:"absolute",top:0,left:0,touchAction:A?"none":"auto",cursor:A?b==="eraser"?"cell":"crosshair":"default"},onPointerDown:H,onPointerMove:X,onPointerUp:Z,onPointerLeave:Z})]})}),g.jsxs("div",{style:{position:"absolute",bottom:"calc(20px + env(safe-area-inset-bottom))",right:16,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10,zIndex:50,marginBottom:50},children:[A&&g.jsxs("div",{style:{background:"#fff",borderRadius:16,padding:"14px",boxShadow:"0 8px 32px rgba(0,0,0,0.18)",display:"flex",flexDirection:"column",gap:12,minWidth:190},children:[g.jsx("div",{style:{display:"flex",gap:6},children:[{id:"pen",I:nS,l:"펜"},{id:"eraser",I:JI,l:"지우개"}].map(({id:$,I:ie,l:q})=>g.jsxs("button",{onClick:()=>V($),style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"8px",border:`1.5px solid ${b===$?ae:"#e2e8f0"}`,borderRadius:9,background:b===$?"#e6faf9":"#fff",color:b===$?ae:"#64748b",cursor:"pointer",fontSize:12,fontWeight:500},children:[g.jsx(ie,{size:14}),q]},$))}),g.jsx("div",{style:{display:"flex",gap:7,justifyContent:"center"},children:Tt.map($=>g.jsx("button",{onClick:()=>{V("pen"),w($)},style:{width:24,height:24,borderRadius:"50%",background:$,border:S===$&&b==="pen"?"3px solid #0f172a":"2px solid transparent",cursor:"pointer",padding:0,flexShrink:0}},$))}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[g.jsx("span",{style:{fontSize:11,color:"#64748b",width:24},children:"굵기"}),g.jsx("input",{type:"range",min:1,max:12,value:R,onChange:$=>D(+$.target.value),style:{flex:1,accentColor:ae}}),g.jsx("span",{style:{fontSize:11,fontWeight:600,width:18,textAlign:"center"},children:R})]}),g.jsxs("div",{style:{display:"flex",gap:6},children:[g.jsx("button",{onClick:ge,disabled:M.length===0,style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"8px",border:"1px solid #e2e8f0",borderRadius:9,background:M.length===0?"#f8fafc":"#fff",color:M.length===0?"#cbd5e1":"#475569",cursor:M.length===0?"default":"pointer",fontSize:12,fontWeight:500},children:"↩ Undo"}),g.jsxs("button",{onClick:fe,style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"8px",border:"1px solid #fecaca",borderRadius:9,background:"#fff5f5",color:"#ef4444",cursor:"pointer",fontSize:12,fontWeight:500},children:[g.jsx(T0,{size:12})," 삭제"]})]})]}),g.jsx("button",{onClick:()=>x($=>!$),style:{width:50,height:50,borderRadius:"50%",background:A?"#0f172a":ae,color:"#fff",border:"none",cursor:"pointer",boxShadow:`0 4px 16px ${A?"rgba(0,0,0,0.3)":"rgba(0,181,165,0.5)"}`,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s",fontSize:20},children:A?"✕":"✏️"})]})]})}function J2({songs:t,pdfFiles:e,uploading:n,onUpload:r,onRemovePdf:i,onOpenSong:s,onAddCustom:o,onDeleteCustom:l,onBack:u}){const[h,f]=B.useState(""),[p,y]=B.useState(!1),A=B.useMemo(()=>{const x=h.toLowerCase();return t.filter(b=>!x||b.title.toLowerCase().includes(x)||b.artist.toLowerCase().includes(x))},[h,t]);return g.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100vh",fontFamily:'-apple-system,BlinkMacSystemFont,"Noto Sans KR",sans-serif',background:"#f2f2f7",overflow:"hidden"},children:[g.jsxs("div",{style:{background:"#fff",borderBottom:"1px solid #e2e8f0",padding:"10px 14px",flexShrink:0},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:10},children:[g.jsxs("button",{onClick:u,style:{display:"flex",alignItems:"center",gap:1,background:"none",border:"none",cursor:"pointer",color:ae,fontSize:15,fontWeight:500,padding:"4px 0"},children:[g.jsx(ra,{size:20,style:{marginRight:-2}})," Home"]}),g.jsx("span",{style:{flex:1,textAlign:"center",fontSize:17,fontWeight:700},children:"Song Library"}),g.jsxs("button",{onClick:()=>y(!0),style:{display:"flex",alignItems:"center",gap:3,padding:"5px 10px",background:ae,color:"#fff",border:"none",borderRadius:8,cursor:"pointer",fontSize:13,fontWeight:600},children:[g.jsx(Vf,{size:13})," 새 곡"]})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,background:"#f1f5f9",borderRadius:10,padding:"8px 12px"},children:[g.jsx(E0,{size:14,color:"#94a3b8"}),g.jsx("input",{value:h,onChange:x=>f(x.target.value),placeholder:"곡 검색...",style:{border:"none",background:"none",outline:"none",fontSize:14,flex:1}})]})]}),g.jsx("div",{style:{flex:1,overflowY:"auto",padding:"10px 14px 20px"},children:g.jsx("div",{style:{background:"#fff",borderRadius:12,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"},children:A.map((x,b)=>{const V=!!e[x.id],S=!!n[x.id];return g.jsxs("div",{style:{display:"flex",alignItems:"center",padding:"12px 14px",borderBottom:b<A.length-1?"1px solid #f1f5f9":"none",gap:10},children:[g.jsxs("div",{style:{flex:1,cursor:"pointer",minWidth:0},onClick:()=>s(x.id),children:[g.jsxs("div",{style:{fontSize:15,fontWeight:600,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},children:[x.title,V&&g.jsx("span",{style:{fontSize:10,background:"#eff6ff",color:"#2563eb",padding:"1px 5px",borderRadius:4,fontWeight:700},children:"PDF"}),S&&g.jsx("span",{style:{fontSize:10,color:ae},children:"업로드 중..."}),x.custom&&g.jsx("span",{style:{fontSize:10,background:"#f0fdf4",color:"#16a34a",padding:"1px 5px",borderRadius:4,fontWeight:700},children:"커스텀"})]}),g.jsxs("div",{style:{fontSize:12,color:"#8e8e93",marginTop:1},children:[x.artist," · [",x.key,"]"]})]}),g.jsxs("div",{style:{display:"flex",gap:6,flexShrink:0},children:[V?g.jsx("button",{onClick:()=>i(x.id),style:{padding:"5px 9px",border:"1px solid #fecaca",borderRadius:7,background:"#fff5f5",color:"#ef4444",cursor:"pointer",fontSize:11,fontWeight:600},children:"삭제"}):g.jsxs("label",{style:{padding:"5px 9px",border:`1px solid ${ae}`,borderRadius:7,background:"#e6faf9",color:ae,cursor:"pointer",fontSize:11,fontWeight:600,whiteSpace:"nowrap"},children:[S?"업로드 중":"PDF 추가",g.jsx("input",{type:"file",accept:".pdf",onChange:w=>r(x.id,w.target.files[0]),style:{display:"none"},disabled:S})]}),x.custom&&g.jsx("button",{onClick:()=>l(x.id),style:{...gi,width:28,height:28},children:g.jsx(T0,{size:13})})]})]},x.id)})})}),p&&g.jsx(ob,{onAdd:async(x,b)=>{await o(x,b),y(!1)},onClose:()=>y(!1)})]})}function Z2({song:t,xp:e,ki:n,mode:r}){return g.jsx("div",{children:(t.sections||[]).map((i,s)=>g.jsx(Fd,{sec:i,xp:e,ki:n,mode:r},s))})}function eb({song:t,xp:e,ki:n}){const r=Math.ceil((t.sections||[]).length/2);return g.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24},children:[g.jsx("div",{children:(t.sections||[]).slice(0,r).map((i,s)=>g.jsx(Fd,{sec:i,xp:e,ki:n,mode:"chords1"},s))}),g.jsx("div",{children:(t.sections||[]).slice(r).map((i,s)=>g.jsx(Fd,{sec:i,xp:e,ki:n,mode:"chords1"},s))})]})}function Fd({sec:t,xp:e,ki:n,mode:r}){return g.jsxs("div",{style:{marginBottom:20},children:[g.jsx("div",{style:{fontSize:10,fontWeight:800,color:"#94a3b8",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:6,padding:"2px 6px",background:"#f8fafc",borderRadius:4,display:"inline-block"},children:t.name}),g.jsx("div",{style:{paddingLeft:2},children:t.lines.map((i,s)=>r==="lyrics"?g.jsx("div",{style:{fontSize:15,lineHeight:1.9,color:"#1e293b"},children:XE(i)||" "},s):g.jsx(tb,{line:i,xp:e,ki:n,mode:r},s))})]})}function tb({line:t,xp:e,ki:n,mode:r}){const i=B.useMemo(()=>j2(t),[t]);return g.jsx("div",{style:{display:"flex",flexWrap:"wrap",marginBottom:5,lineHeight:1},children:i.map((s,o)=>{let l=s.chord;return l&&(l=r==="nashville"?Md(s_(l,e),n):s_(l,e)),g.jsxs("span",{style:{display:"inline-flex",flexDirection:"column",marginRight:2},children:[g.jsx("span",{style:{color:z2,fontWeight:700,fontSize:13,fontFamily:'"Courier New",monospace',lineHeight:1.35,minHeight:"1.35em",whiteSpace:"pre"},children:l||" "}),g.jsx("span",{style:{fontSize:15,lineHeight:1.75,color:"#1e293b",whiteSpace:"pre"},children:s.text||(s.chord?"  ":"")})]},o)})})}function nb({notes:t,onSave:e}){const[n,r]=B.useState(!1),[i,s]=B.useState(t);return B.useEffect(()=>{s(t)},[t]),g.jsxs("div",{style:{margin:"12px 14px 24px",background:"#fff",borderRadius:12,overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.06)"},children:[g.jsxs("div",{style:{padding:"12px 14px 8px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #f1f5f9"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[g.jsx("span",{style:{fontSize:14},children:"📝"}),g.jsx("span",{style:{fontSize:14,fontWeight:700,color:"#0f172a"},children:"Cue Sheet"})]}),n?g.jsxs("div",{style:{display:"flex",gap:6},children:[g.jsx("button",{onClick:()=>{r(!1),s(t)},style:{padding:"4px 10px",border:"1px solid #e2e8f0",borderRadius:7,background:"#fff",color:"#64748b",cursor:"pointer",fontSize:12},children:"취소"}),g.jsx("button",{onClick:()=>{e(i),r(!1)},style:{padding:"4px 10px",border:"none",borderRadius:7,background:ae,color:"#fff",cursor:"pointer",fontSize:12,fontWeight:600},children:"저장"})]}):g.jsx("button",{onClick:()=>r(!0),style:{padding:"4px 10px",border:`1px solid ${ae}`,borderRadius:7,background:"#e6faf9",color:ae,cursor:"pointer",fontSize:12,fontWeight:600},children:t?"편집":"+ 추가"})]}),n?g.jsx("textarea",{value:i,onChange:o=>s(o.target.value),placeholder:`Cue Sheet 내용을 입력하세요
예) 1번 곡 Key A로 변경, 2번 곡 천천히 시작`,autoFocus:!0,style:{width:"100%",minHeight:100,padding:"12px 14px",border:"none",outline:"none",fontSize:14,lineHeight:1.6,resize:"vertical",boxSizing:"border-box",fontFamily:"inherit",color:"#0f172a"}}):g.jsx("div",{style:{padding:"12px 14px",fontSize:14,lineHeight:1.7,color:t?"#1e293b":"#94a3b8",whiteSpace:"pre-wrap",minHeight:44},children:t||"아직 Cue Sheet가 없습니다"})]})}function rb({onCreate:t,onClose:e}){const[n,r]=B.useState(q2()),[i,s]=B.useState("주일예배");return g.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:500,display:"flex",alignItems:"flex-end",justifyContent:"center"},children:g.jsxs("div",{style:{background:"#fff",borderRadius:"16px 16px 0 0",width:"100%",maxWidth:600,padding:"20px 18px 36px"},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18},children:[g.jsx("span",{style:{fontSize:17,fontWeight:700},children:"새 예배 서비스"}),g.jsx("button",{onClick:e,style:{background:"none",border:"none",cursor:"pointer",color:"#94a3b8"},children:g.jsx(Ls,{size:20})})]}),g.jsxs("div",{style:{marginBottom:14},children:[g.jsx("label",{style:{fontSize:12,fontWeight:600,color:"#64748b",display:"block",marginBottom:5},children:"날짜"}),g.jsx("input",{type:"date",value:n,onChange:o=>r(o.target.value),style:{width:"100%",padding:"10px 12px",border:"1px solid #e2e8f0",borderRadius:8,fontSize:15,outline:"none",boxSizing:"border-box",WebkitAppearance:"none",appearance:"none",background:"#fff"}})]}),g.jsxs("div",{style:{marginBottom:12},children:[g.jsx("label",{style:{fontSize:12,fontWeight:600,color:"#64748b",display:"block",marginBottom:5},children:"예배 종류"}),g.jsx("input",{value:i,onChange:o=>s(o.target.value),style:{width:"100%",padding:"10px 12px",border:"1px solid #e2e8f0",borderRadius:8,fontSize:15,outline:"none",boxSizing:"border-box"}})]}),g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:20},children:JE.map(o=>g.jsx("button",{onClick:()=>s(o),style:{padding:"5px 10px",border:`1px solid ${i===o?ae:"#e2e8f0"}`,borderRadius:20,background:i===o?ae:"#fff",color:i===o?"#fff":"#475569",cursor:"pointer",fontSize:12},children:o},o))}),g.jsx("button",{onClick:()=>n&&i&&t(n,i),style:{width:"100%",padding:"13px",background:ae,color:"#fff",border:"none",borderRadius:10,fontSize:16,fontWeight:700,cursor:"pointer"},children:"서비스 생성"})]})})}function ib({service:t,onSave:e,onClose:n}){const[r,i]=B.useState(t.date),[s,o]=B.useState(t.name);return g.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:500,display:"flex",alignItems:"flex-end",justifyContent:"center"},children:g.jsxs("div",{style:{background:"#fff",borderRadius:"16px 16px 0 0",width:"100%",maxWidth:600,padding:"20px 18px 36px"},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18},children:[g.jsx("span",{style:{fontSize:17,fontWeight:700},children:"서비스 편집"}),g.jsx("button",{onClick:n,style:{background:"none",border:"none",cursor:"pointer",color:"#94a3b8"},children:g.jsx(Ls,{size:20})})]}),g.jsxs("div",{style:{marginBottom:14},children:[g.jsx("label",{style:{fontSize:12,fontWeight:600,color:"#64748b",display:"block",marginBottom:5},children:"날짜"}),g.jsx("input",{type:"date",value:r,onChange:l=>i(l.target.value),style:{width:"100%",padding:"10px 12px",border:"1px solid #e2e8f0",borderRadius:8,fontSize:15,outline:"none",boxSizing:"border-box",WebkitAppearance:"none",appearance:"none",background:"#fff"}})]}),g.jsxs("div",{style:{marginBottom:12},children:[g.jsx("label",{style:{fontSize:12,fontWeight:600,color:"#64748b",display:"block",marginBottom:5},children:"예배 종류"}),g.jsx("input",{value:s,onChange:l=>o(l.target.value),style:{width:"100%",padding:"10px 12px",border:"1px solid #e2e8f0",borderRadius:8,fontSize:15,outline:"none",boxSizing:"border-box"}})]}),g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:20},children:JE.map(l=>g.jsx("button",{onClick:()=>o(l),style:{padding:"5px 10px",border:`1px solid ${s===l?ae:"#e2e8f0"}`,borderRadius:20,background:s===l?ae:"#fff",color:s===l?"#fff":"#475569",cursor:"pointer",fontSize:12},children:l},l))}),g.jsx("button",{onClick:()=>r&&s&&e(t.id,r,s),style:{width:"100%",padding:"13px",background:ae,color:"#fff",border:"none",borderRadius:10,fontSize:16,fontWeight:700,cursor:"pointer"},children:"저장"})]})})}function sb({allSongs:t,existingIds:e,pdfFiles:n,onAdd:r,onClose:i}){const[s,o]=B.useState(""),l=B.useMemo(()=>{const u=s.toLowerCase();return t.filter(h=>!e.includes(h.id)&&!e.includes(String(h.id))&&(!u||h.title.toLowerCase().includes(u)||h.artist.toLowerCase().includes(u)))},[s,e,t]);return g.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:500,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:0},children:g.jsxs("div",{style:{background:"#fff",borderRadius:"0 0 16px 16px",width:"100%",maxWidth:600,maxHeight:"60vh",display:"flex",flexDirection:"column"},children:[g.jsxs("div",{style:{padding:"16px 16px 10px",borderBottom:"1px solid #f1f5f9"},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[g.jsx("span",{style:{fontSize:17,fontWeight:700},children:"곡 추가"}),g.jsx("button",{onClick:i,style:{background:"none",border:"none",cursor:"pointer",color:"#94a3b8"},children:g.jsx(Ls,{size:20})})]}),g.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,background:"#f1f5f9",borderRadius:8,padding:"8px 12px"},children:[g.jsx(E0,{size:14,color:"#94a3b8"}),g.jsx("input",{autoFocus:!0,value:s,onChange:u=>o(u.target.value),placeholder:"곡 검색...",style:{border:"none",background:"none",outline:"none",fontSize:14,flex:1}})]})]}),g.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"4px 0 24px"},children:[l.map(u=>g.jsxs("div",{onClick:()=>r(u.id),style:{display:"flex",alignItems:"center",padding:"12px 16px",borderBottom:"1px solid #f9fafb",cursor:"pointer",gap:10},children:[g.jsxs("div",{style:{flex:1,minWidth:0},children:[g.jsxs("div",{style:{fontSize:15,fontWeight:600,display:"flex",alignItems:"center",gap:6},children:[u.title,n[u.id]&&g.jsx("span",{style:{fontSize:10,background:"#eff6ff",color:"#2563eb",padding:"1px 5px",borderRadius:4,fontWeight:700},children:"PDF"})]}),g.jsx("div",{style:{fontSize:12,color:"#8e8e93",marginTop:1},children:u.artist})]}),g.jsxs("span",{style:{fontSize:13,fontWeight:600,color:"#475569"},children:["[",u.key,"]"]}),g.jsx(Vf,{size:18,color:ae})]},u.id)),l.length===0&&g.jsx("div",{style:{padding:"24px",textAlign:"center",color:"#94a3b8",fontSize:14},children:"검색 결과가 없습니다"})]})]})})}function ob({onAdd:t,onClose:e}){const[n,r]=B.useState(""),[i,s]=B.useState(""),[o,l]=B.useState("G"),[u,h]=B.useState(null);return g.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:500,display:"flex",alignItems:"flex-end",justifyContent:"center"},children:g.jsxs("div",{style:{background:"#fff",borderRadius:"16px 16px 0 0",width:"100%",maxWidth:600,padding:"20px 18px 36px"},children:[g.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18},children:[g.jsx("span",{style:{fontSize:17,fontWeight:700},children:"새 곡 추가"}),g.jsx("button",{onClick:e,style:{background:"none",border:"none",cursor:"pointer",color:"#94a3b8"},children:g.jsx(Ls,{size:20})})]}),[{label:"곡 제목 *",val:n,set:r,ph:"예: 나는 믿네"},{label:"아티스트",val:i,set:s,ph:"예: 예수전도단"}].map(f=>g.jsxs("div",{style:{marginBottom:12},children:[g.jsx("label",{style:{fontSize:12,fontWeight:600,color:"#64748b",display:"block",marginBottom:5},children:f.label}),g.jsx("input",{value:f.val,onChange:p=>f.set(p.target.value),placeholder:f.ph,style:{width:"100%",padding:"10px 12px",border:"1px solid #e2e8f0",borderRadius:8,fontSize:15,outline:"none",boxSizing:"border-box"}})]},f.label)),g.jsxs("div",{style:{marginBottom:14},children:[g.jsx("label",{style:{fontSize:12,fontWeight:600,color:"#64748b",display:"block",marginBottom:5},children:"Key"}),g.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:B2.map(f=>g.jsx("button",{onClick:()=>l(f),style:{padding:"5px 10px",border:`1px solid ${o===f?ae:"#e2e8f0"}`,borderRadius:20,background:o===f?ae:"#fff",color:o===f?"#fff":"#475569",cursor:"pointer",fontSize:12,fontWeight:500},children:f},f))})]}),g.jsxs("div",{style:{marginBottom:18},children:[g.jsx("label",{style:{fontSize:12,fontWeight:600,color:"#64748b",display:"block",marginBottom:5},children:"악보 PDF (선택)"}),g.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,padding:"10px 12px",border:"1px dashed #cbd5e1",borderRadius:8,cursor:"pointer",color:u?ae:"#94a3b8",fontSize:13},children:[g.jsx(w0,{size:16}),u?u.name:"PDF 파일 선택...",g.jsx("input",{type:"file",accept:".pdf",onChange:f=>h(f.target.files[0]),style:{display:"none"}})]})]}),g.jsx("button",{onClick:()=>n.trim()&&t({title:n.trim(),artist:i.trim(),key:o,bpm:0,ts:"4/4"},u),disabled:!n.trim(),style:{width:"100%",padding:"13px",background:n.trim()?ae:"#e2e8f0",color:n.trim()?"#fff":"#94a3b8",border:"none",borderRadius:10,fontSize:16,fontWeight:700,cursor:n.trim()?"pointer":"default"},children:"곡 추가"})]})})}function ab({song:t,xp:e,si:n,setSi:r,onExit:i}){const s=(t.sections||[])[n]||(t.sections||[])[0],o=s?s.lines.map(u=>XE(u)):[],l=(t.sections||[]).length;return g.jsxs("div",{style:{position:"fixed",inset:0,background:"#000",color:"#fff",display:"flex",flexDirection:"column",zIndex:999,fontFamily:"-apple-system,BlinkMacSystemFont,sans-serif"},children:[g.jsxs("div",{style:{padding:"10px 14px",background:"#111",borderBottom:"1px solid #222",display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[g.jsxs("button",{onClick:i,style:{display:"flex",alignItems:"center",gap:3,padding:"5px 10px",background:"#ef4444",color:"#fff",border:"none",borderRadius:6,cursor:"pointer",fontSize:12,fontWeight:600},children:[g.jsx(Ls,{size:11})," 종료"]}),g.jsx("span",{style:{fontWeight:700,fontSize:14,flex:1},children:t.title}),g.jsx("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:(t.sections||[]).map((u,h)=>g.jsx("button",{onClick:()=>r(h),style:{padding:"3px 8px",background:n===h?ae:"#1e1e1e",color:n===h?"#fff":"#aaa",border:`1px solid ${n===h?ae:"#333"}`,borderRadius:5,cursor:"pointer",fontSize:11},children:u.name},h))})]}),g.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"40px 60px",textAlign:"center",gap:6},children:[s&&g.jsx("div",{style:{fontSize:11,color:"#555",textTransform:"uppercase",letterSpacing:"0.18em",marginBottom:18},children:s.name}),o.map((u,h)=>g.jsx("div",{style:{fontSize:"clamp(22px,3.8vw,48px)",fontWeight:700,lineHeight:1.65,color:"#fff"},children:u||" "},h))]}),g.jsxs("div",{style:{padding:"10px",borderTop:"1px solid #1a1a1a",display:"flex",justifyContent:"center",gap:10},children:[g.jsx("button",{onClick:()=>r(Math.max(0,n-1)),disabled:n===0,style:{padding:"7px 20px",background:"#1e1e1e",color:n===0?"#444":"#ccc",border:"1px solid #333",borderRadius:6,cursor:n===0?"default":"pointer",fontSize:13},children:"← 이전"}),g.jsxs("span",{style:{display:"flex",alignItems:"center",fontSize:12,color:"#555"},children:[n+1,"/",l]}),g.jsx("button",{onClick:()=>r(Math.min(l-1,n+1)),disabled:n===l-1,style:{padding:"7px 20px",background:"#1e1e1e",color:n===l-1?"#444":"#ccc",border:"1px solid #333",borderRadius:6,cursor:n===l-1?"default":"pointer",fontSize:13},children:"다음 →"})]})]})}gh.createRoot(document.getElementById("root")).render(g.jsx(DT.StrictMode,{children:g.jsx(G2,{})}));

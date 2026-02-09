function Yp(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(n,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function Kp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fc={exports:{}},ji={},Ac={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var to=Symbol.for("react.element"),Xp=Symbol.for("react.portal"),qp=Symbol.for("react.fragment"),Zp=Symbol.for("react.strict_mode"),eh=Symbol.for("react.profiler"),th=Symbol.for("react.provider"),rh=Symbol.for("react.context"),nh=Symbol.for("react.forward_ref"),oh=Symbol.for("react.suspense"),ih=Symbol.for("react.memo"),ah=Symbol.for("react.lazy"),Ws=Symbol.iterator;function lh(e){return e===null||typeof e!="object"?null:(e=Ws&&e[Ws]||e["@@iterator"],typeof e=="function"?e:null)}var Uc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bc=Object.assign,Hc={};function qr(e,t,r){this.props=e,this.context=t,this.refs=Hc,this.updater=r||Uc}qr.prototype.isReactComponent={};qr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vc(){}Vc.prototype=qr.prototype;function Ol(e,t,r){this.props=e,this.context=t,this.refs=Hc,this.updater=r||Uc}var Fl=Ol.prototype=new Vc;Fl.constructor=Ol;Bc(Fl,qr.prototype);Fl.isPureReactComponent=!0;var Gs=Array.isArray,Wc=Object.prototype.hasOwnProperty,Al={current:null},Gc={key:!0,ref:!0,__self:!0,__source:!0};function Jc(e,t,r){var n,o={},i=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Wc.call(t,n)&&!Gc.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(l===1)o.children=r;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)o[n]===void 0&&(o[n]=l[n]);return{$$typeof:to,type:e,key:i,ref:a,props:o,_owner:Al.current}}function sh(e,t){return{$$typeof:to,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ul(e){return typeof e=="object"&&e!==null&&e.$$typeof===to}function uh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Js=/\/+/g;function Xi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?uh(""+e.key):t.toString(36)}function Do(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case to:case Xp:a=!0}}if(a)return a=e,o=o(a),e=n===""?"."+Xi(a,0):n,Gs(o)?(r="",e!=null&&(r=e.replace(Js,"$&/")+"/"),Do(o,t,r,"",function(u){return u})):o!=null&&(Ul(o)&&(o=sh(o,r+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Js,"$&/")+"/")+e)),t.push(o)),1;if(a=0,n=n===""?".":n+":",Gs(e))for(var l=0;l<e.length;l++){i=e[l];var s=n+Xi(i,l);a+=Do(i,t,r,s,o)}else if(s=lh(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=n+Xi(i,l++),a+=Do(i,t,r,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ho(e,t,r){if(e==null)return e;var n=[],o=0;return Do(e,n,"","",function(i){return t.call(r,i,o++)}),n}function ch(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},No={transition:null},dh={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:No,ReactCurrentOwner:Al};L.Children={map:ho,forEach:function(e,t,r){ho(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ho(e,function(){t++}),t},toArray:function(e){return ho(e,function(t){return t})||[]},only:function(e){if(!Ul(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=qr;L.Fragment=qp;L.Profiler=eh;L.PureComponent=Ol;L.StrictMode=Zp;L.Suspense=oh;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dh;L.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Bc({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Al.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Wc.call(t,s)&&!Gc.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:to,type:e.type,key:o,ref:i,props:n,_owner:a}};L.createContext=function(e){return e={$$typeof:rh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:th,_context:e},e.Consumer=e};L.createElement=Jc;L.createFactory=function(e){var t=Jc.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:nh,render:e}};L.isValidElement=Ul;L.lazy=function(e){return{$$typeof:ah,_payload:{_status:-1,_result:e},_init:ch}};L.memo=function(e,t){return{$$typeof:ih,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=No.transition;No.transition={};try{e()}finally{No.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return xe.current.useCallback(e,t)};L.useContext=function(e){return xe.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};L.useEffect=function(e,t){return xe.current.useEffect(e,t)};L.useId=function(){return xe.current.useId()};L.useImperativeHandle=function(e,t,r){return xe.current.useImperativeHandle(e,t,r)};L.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return xe.current.useMemo(e,t)};L.useReducer=function(e,t,r){return xe.current.useReducer(e,t,r)};L.useRef=function(e){return xe.current.useRef(e)};L.useState=function(e){return xe.current.useState(e)};L.useSyncExternalStore=function(e,t,r){return xe.current.useSyncExternalStore(e,t,r)};L.useTransition=function(){return xe.current.useTransition()};L.version="18.2.0";Ac.exports=L;var j=Ac.exports;const ot=Kp(j),fh=Yp({__proto__:null,default:ot},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ph=j,hh=Symbol.for("react.element"),mh=Symbol.for("react.fragment"),gh=Object.prototype.hasOwnProperty,vh=ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yh={key:!0,ref:!0,__self:!0,__source:!0};function Qc(e,t,r){var n,o={},i=null,a=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)gh.call(t,n)&&!yh.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:hh,type:e,key:i,ref:a,props:o,_owner:vh.current}}ji.Fragment=mh;ji.jsx=Qc;ji.jsxs=Qc;Fc.exports=ji;var c=Fc.exports,Yc={exports:{}},De={},Kc={exports:{}},Xc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,I){var D=z.length;z.push(I);e:for(;0<D;){var U=D-1>>>1,B=z[U];if(0<o(B,I))z[U]=I,z[D]=B,D=U;else break e}}function r(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var I=z[0],D=z.pop();if(D!==I){z[0]=D;e:for(var U=0,B=z.length,Kt=B>>>1;U<Kt;){var Ve=2*(U+1)-1,wt=z[Ve],Pe=Ve+1,lt=z[Pe];if(0>o(wt,D))Pe<B&&0>o(lt,wt)?(z[U]=lt,z[Pe]=D,U=Pe):(z[U]=wt,z[Ve]=D,U=Ve);else if(Pe<B&&0>o(lt,D))z[U]=lt,z[Pe]=D,U=Pe;else break e}}return I}function o(z,I){var D=z.sortIndex-I.sortIndex;return D!==0?D:z.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],h=1,f=null,g=3,y=!1,x=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(z){for(var I=r(u);I!==null;){if(I.callback===null)n(u);else if(I.startTime<=z)n(u),I.sortIndex=I.expirationTime,t(s,I);else break;I=r(u)}}function w(z){if(k=!1,m(z),!x)if(r(s)!==null)x=!0,an(S);else{var I=r(u);I!==null&&Yt(w,I.startTime-z)}}function S(z,I){x=!1,k&&(k=!1,p(T),T=-1),y=!0;var D=g;try{for(m(I),f=r(s);f!==null&&(!(f.expirationTime>I)||z&&!$e());){var U=f.callback;if(typeof U=="function"){f.callback=null,g=f.priorityLevel;var B=U(f.expirationTime<=I);I=e.unstable_now(),typeof B=="function"?f.callback=B:f===r(s)&&n(s),m(I)}else n(s);f=r(s)}if(f!==null)var Kt=!0;else{var Ve=r(u);Ve!==null&&Yt(w,Ve.startTime-I),Kt=!1}return Kt}finally{f=null,g=D,y=!1}}var $=!1,C=null,T=-1,H=5,M=-1;function $e(){return!(e.unstable_now()-M<H)}function Jt(){if(C!==null){var z=e.unstable_now();M=z;var I=!0;try{I=C(!0,z)}finally{I?Qt():($=!1,C=null)}}else $=!1}var Qt;if(typeof d=="function")Qt=function(){d(Jt)};else if(typeof MessageChannel<"u"){var fo=new MessageChannel,Yi=fo.port2;fo.port1.onmessage=Jt,Qt=function(){Yi.postMessage(null)}}else Qt=function(){P(Jt,0)};function an(z){C=z,$||($=!0,Qt())}function Yt(z,I){T=P(function(){z(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,an(S))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(s)},e.unstable_next=function(z){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var D=g;g=I;try{return z()}finally{g=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,I){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var D=g;g=z;try{return I()}finally{g=D}},e.unstable_scheduleCallback=function(z,I,D){var U=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?U+D:U):D=U,z){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=D+B,z={id:h++,callback:I,priorityLevel:z,startTime:D,expirationTime:B,sortIndex:-1},D>U?(z.sortIndex=D,t(u,z),r(s)===null&&z===r(u)&&(k?(p(T),T=-1):k=!0,Yt(w,D-U))):(z.sortIndex=B,t(s,z),x||y||(x=!0,an(S))),z},e.unstable_shouldYield=$e,e.unstable_wrapCallback=function(z){var I=g;return function(){var D=g;g=I;try{return z.apply(this,arguments)}finally{g=D}}}})(Xc);Kc.exports=Xc;var wh=Kc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=j,Re=wh;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zc=new Set,Dn={};function pr(e,t){Fr(e,t),Fr(e+"Capture",t)}function Fr(e,t){for(Dn[e]=t,e=0;e<t.length;e++)Zc.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Na=Object.prototype.hasOwnProperty,xh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qs={},Ys={};function kh(e){return Na.call(Ys,e)?!0:Na.call(Qs,e)?!1:xh.test(e)?Ys[e]=!0:(Qs[e]=!0,!1)}function bh(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sh(e,t,r,n){if(t===null||typeof t>"u"||bh(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,r,n,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bl=/[\-:]([a-z])/g;function Hl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bl,Hl);ce[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bl,Hl);ce[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bl,Hl);ce[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vl(e,t,r,n){var o=ce.hasOwnProperty(t)?ce[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sh(t,r,o,n)&&(r=null),n||o===null?kh(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var yt=qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mo=Symbol.for("react.element"),xr=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),Wl=Symbol.for("react.strict_mode"),Ma=Symbol.for("react.profiler"),ed=Symbol.for("react.provider"),td=Symbol.for("react.context"),Gl=Symbol.for("react.forward_ref"),La=Symbol.for("react.suspense"),Oa=Symbol.for("react.suspense_list"),Jl=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),rd=Symbol.for("react.offscreen"),Ks=Symbol.iterator;function sn(e){return e===null||typeof e!="object"?null:(e=Ks&&e[Ks]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,qi;function gn(e){if(qi===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);qi=t&&t[1]||""}return`
`+qi+e}var Zi=!1;function ea(e,t){if(!e||Zi)return"";Zi=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=n.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Zi=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?gn(e):""}function Ch(e){switch(e.tag){case 5:return gn(e.type);case 16:return gn("Lazy");case 13:return gn("Suspense");case 19:return gn("SuspenseList");case 0:case 2:case 15:return e=ea(e.type,!1),e;case 11:return e=ea(e.type.render,!1),e;case 1:return e=ea(e.type,!0),e;default:return""}}function Fa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kr:return"Fragment";case xr:return"Portal";case Ma:return"Profiler";case Wl:return"StrictMode";case La:return"Suspense";case Oa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case td:return(e.displayName||"Context")+".Consumer";case ed:return(e._context.displayName||"Context")+".Provider";case Gl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jl:return t=e.displayName||null,t!==null?t:Fa(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return Fa(e(t))}catch{}}return null}function Eh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fa(t);case 8:return t===Wl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jh(e){var t=nd(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){n=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function go(e){e._valueTracker||(e._valueTracker=jh(e))}function od(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=nd(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Aa(e,t){var r=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Xs(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Ut(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function id(e,t){t=t.checked,t!=null&&Vl(e,"checked",t,!1)}function Ua(e,t){id(e,t);var r=Ut(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ba(e,t.type,r):t.hasOwnProperty("defaultValue")&&Ba(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qs(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Ba(e,t,r){(t!=="number"||Xo(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var vn=Array.isArray;function Rr(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Ut(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ha(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zs(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(E(92));if(vn(r)){if(1<r.length)throw Error(E(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ut(r)}}function ad(e,t){var r=Ut(t.value),n=Ut(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function eu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ld(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Va(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ld(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vo,sd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vo=vo||document.createElement("div"),vo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$h=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){$h.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function ud(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function cd(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=ud(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var Ph=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wa(e,t){if(t){if(Ph[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ja=null;function Ql(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qa=null,Dr=null,Nr=null;function tu(e){if(e=oo(e)){if(typeof Qa!="function")throw Error(E(280));var t=e.stateNode;t&&(t=Ti(t),Qa(e.stateNode,e.type,t))}}function dd(e){Dr?Nr?Nr.push(e):Nr=[e]:Dr=e}function fd(){if(Dr){var e=Dr,t=Nr;if(Nr=Dr=null,tu(e),t)for(e=0;e<t.length;e++)tu(t[e])}}function pd(e,t){return e(t)}function hd(){}var ta=!1;function md(e,t,r){if(ta)return e(t,r);ta=!0;try{return pd(e,t,r)}finally{ta=!1,(Dr!==null||Nr!==null)&&(hd(),fd())}}function Mn(e,t){var r=e.stateNode;if(r===null)return null;var n=Ti(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(E(231,t,typeof r));return r}var Ya=!1;if(ht)try{var un={};Object.defineProperty(un,"passive",{get:function(){Ya=!0}}),window.addEventListener("test",un,un),window.removeEventListener("test",un,un)}catch{Ya=!1}function zh(e,t,r,n,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(h){this.onError(h)}}var En=!1,qo=null,Zo=!1,Ka=null,_h={onError:function(e){En=!0,qo=e}};function Th(e,t,r,n,o,i,a,l,s){En=!1,qo=null,zh.apply(_h,arguments)}function Ih(e,t,r,n,o,i,a,l,s){if(Th.apply(this,arguments),En){if(En){var u=qo;En=!1,qo=null}else throw Error(E(198));Zo||(Zo=!0,Ka=u)}}function hr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function gd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ru(e){if(hr(e)!==e)throw Error(E(188))}function Rh(e){var t=e.alternate;if(!t){if(t=hr(e),t===null)throw Error(E(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return ru(o),e;if(i===n)return ru(o),t;i=i.sibling}throw Error(E(188))}if(r.return!==n.return)r=o,n=i;else{for(var a=!1,l=o.child;l;){if(l===r){a=!0,r=o,n=i;break}if(l===n){a=!0,n=o,r=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===r){a=!0,r=i,n=o;break}if(l===n){a=!0,n=i,r=o;break}l=l.sibling}if(!a)throw Error(E(189))}}if(r.alternate!==n)throw Error(E(190))}if(r.tag!==3)throw Error(E(188));return r.stateNode.current===r?e:t}function vd(e){return e=Rh(e),e!==null?yd(e):null}function yd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yd(e);if(t!==null)return t;e=e.sibling}return null}var wd=Re.unstable_scheduleCallback,nu=Re.unstable_cancelCallback,Dh=Re.unstable_shouldYield,Nh=Re.unstable_requestPaint,Z=Re.unstable_now,Mh=Re.unstable_getCurrentPriorityLevel,Yl=Re.unstable_ImmediatePriority,xd=Re.unstable_UserBlockingPriority,ei=Re.unstable_NormalPriority,Lh=Re.unstable_LowPriority,kd=Re.unstable_IdlePriority,$i=null,it=null;function Oh(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot($i,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:Uh,Fh=Math.log,Ah=Math.LN2;function Uh(e){return e>>>=0,e===0?32:31-(Fh(e)/Ah|0)|0}var yo=64,wo=4194304;function yn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ti(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,a=r&268435455;if(a!==0){var l=a&~o;l!==0?n=yn(l):(i&=a,i!==0&&(n=yn(i)))}else a=r&~o,a!==0?n=yn(a):i!==0&&(n=yn(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ke(t),o=1<<r,n|=e[r],t&=~o;return n}function Bh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hh(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ke(i),l=1<<a,s=o[a];s===-1?(!(l&r)||l&n)&&(o[a]=Bh(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function Xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bd(){var e=yo;return yo<<=1,!(yo&4194240)&&(yo=64),e}function ra(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ro(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=r}function Vh(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-Ke(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function Kl(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ke(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var A=0;function Sd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cd,Xl,Ed,jd,$d,qa=!1,xo=[],Tt=null,It=null,Rt=null,Ln=new Map,On=new Map,jt=[],Wh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ou(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Ln.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(t.pointerId)}}function cn(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=oo(t),t!==null&&Xl(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Gh(e,t,r,n,o){switch(t){case"focusin":return Tt=cn(Tt,e,t,r,n,o),!0;case"dragenter":return It=cn(It,e,t,r,n,o),!0;case"mouseover":return Rt=cn(Rt,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return Ln.set(i,cn(Ln.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,On.set(i,cn(On.get(i)||null,e,t,r,n,o)),!0}return!1}function Pd(e){var t=tr(e.target);if(t!==null){var r=hr(t);if(r!==null){if(t=r.tag,t===13){if(t=gd(r),t!==null){e.blockedOn=t,$d(e.priority,function(){Ed(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Za(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ja=n,r.target.dispatchEvent(n),Ja=null}else return t=oo(r),t!==null&&Xl(t),e.blockedOn=r,!1;t.shift()}return!0}function iu(e,t,r){Mo(e)&&r.delete(t)}function Jh(){qa=!1,Tt!==null&&Mo(Tt)&&(Tt=null),It!==null&&Mo(It)&&(It=null),Rt!==null&&Mo(Rt)&&(Rt=null),Ln.forEach(iu),On.forEach(iu)}function dn(e,t){e.blockedOn===t&&(e.blockedOn=null,qa||(qa=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Jh)))}function Fn(e){function t(o){return dn(o,e)}if(0<xo.length){dn(xo[0],e);for(var r=1;r<xo.length;r++){var n=xo[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Tt!==null&&dn(Tt,e),It!==null&&dn(It,e),Rt!==null&&dn(Rt,e),Ln.forEach(t),On.forEach(t),r=0;r<jt.length;r++)n=jt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<jt.length&&(r=jt[0],r.blockedOn===null);)Pd(r),r.blockedOn===null&&jt.shift()}var Mr=yt.ReactCurrentBatchConfig,ri=!0;function Qh(e,t,r,n){var o=A,i=Mr.transition;Mr.transition=null;try{A=1,ql(e,t,r,n)}finally{A=o,Mr.transition=i}}function Yh(e,t,r,n){var o=A,i=Mr.transition;Mr.transition=null;try{A=4,ql(e,t,r,n)}finally{A=o,Mr.transition=i}}function ql(e,t,r,n){if(ri){var o=Za(e,t,r,n);if(o===null)fa(e,t,n,ni,r),ou(e,n);else if(Gh(o,e,t,r,n))n.stopPropagation();else if(ou(e,n),t&4&&-1<Wh.indexOf(e)){for(;o!==null;){var i=oo(o);if(i!==null&&Cd(i),i=Za(e,t,r,n),i===null&&fa(e,t,n,ni,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else fa(e,t,n,null,r)}}var ni=null;function Za(e,t,r,n){if(ni=null,e=Ql(n),e=tr(e),e!==null)if(t=hr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=gd(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ni=e,null}function zd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mh()){case Yl:return 1;case xd:return 4;case ei:case Lh:return 16;case kd:return 536870912;default:return 16}default:return 16}}var Pt=null,Zl=null,Lo=null;function _d(){if(Lo)return Lo;var e,t=Zl,r=t.length,n,o="value"in Pt?Pt.value:Pt.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===o[i-n];n++);return Lo=o.slice(e,1<n?1-n:void 0)}function Oo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ko(){return!0}function au(){return!1}function Ne(e){function t(r,n,o,i,a){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ko:au,this.isPropagationStopped=au,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),t}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},es=Ne(Zr),no=X({},Zr,{view:0,detail:0}),Kh=Ne(no),na,oa,fn,Pi=X({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ts,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fn&&(fn&&e.type==="mousemove"?(na=e.screenX-fn.screenX,oa=e.screenY-fn.screenY):oa=na=0,fn=e),na)},movementY:function(e){return"movementY"in e?e.movementY:oa}}),lu=Ne(Pi),Xh=X({},Pi,{dataTransfer:0}),qh=Ne(Xh),Zh=X({},no,{relatedTarget:0}),ia=Ne(Zh),em=X({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),tm=Ne(em),rm=X({},Zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nm=Ne(rm),om=X({},Zr,{data:0}),su=Ne(om),im={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},am={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lm[e])?!!t[e]:!1}function ts(){return sm}var um=X({},no,{key:function(e){if(e.key){var t=im[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?am[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ts,charCode:function(e){return e.type==="keypress"?Oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cm=Ne(um),dm=X({},Pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uu=Ne(dm),fm=X({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ts}),pm=Ne(fm),hm=X({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),mm=Ne(hm),gm=X({},Pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vm=Ne(gm),ym=[9,13,27,32],rs=ht&&"CompositionEvent"in window,jn=null;ht&&"documentMode"in document&&(jn=document.documentMode);var wm=ht&&"TextEvent"in window&&!jn,Td=ht&&(!rs||jn&&8<jn&&11>=jn),cu=" ",du=!1;function Id(e,t){switch(e){case"keyup":return ym.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function xm(e,t){switch(e){case"compositionend":return Rd(t);case"keypress":return t.which!==32?null:(du=!0,cu);case"textInput":return e=t.data,e===cu&&du?null:e;default:return null}}function km(e,t){if(br)return e==="compositionend"||!rs&&Id(e,t)?(e=_d(),Lo=Zl=Pt=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Td&&t.locale!=="ko"?null:t.data;default:return null}}var bm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bm[e.type]:t==="textarea"}function Dd(e,t,r,n){dd(n),t=oi(t,"onChange"),0<t.length&&(r=new es("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var $n=null,An=null;function Sm(e){Wd(e,0)}function zi(e){var t=Er(e);if(od(t))return e}function Cm(e,t){if(e==="change")return t}var Nd=!1;if(ht){var aa;if(ht){var la="oninput"in document;if(!la){var pu=document.createElement("div");pu.setAttribute("oninput","return;"),la=typeof pu.oninput=="function"}aa=la}else aa=!1;Nd=aa&&(!document.documentMode||9<document.documentMode)}function hu(){$n&&($n.detachEvent("onpropertychange",Md),An=$n=null)}function Md(e){if(e.propertyName==="value"&&zi(An)){var t=[];Dd(t,An,e,Ql(e)),md(Sm,t)}}function Em(e,t,r){e==="focusin"?(hu(),$n=t,An=r,$n.attachEvent("onpropertychange",Md)):e==="focusout"&&hu()}function jm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zi(An)}function $m(e,t){if(e==="click")return zi(t)}function Pm(e,t){if(e==="input"||e==="change")return zi(t)}function zm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:zm;function Un(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!Na.call(t,o)||!Ze(e[o],t[o]))return!1}return!0}function mu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gu(e,t){var r=mu(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=mu(r)}}function Ld(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ld(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Od(){for(var e=window,t=Xo();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Xo(e.document)}return t}function ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _m(e){var t=Od(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Ld(r.ownerDocument.documentElement,r)){if(n!==null&&ns(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=gu(r,i);var a=gu(r,n);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tm=ht&&"documentMode"in document&&11>=document.documentMode,Sr=null,el=null,Pn=null,tl=!1;function vu(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;tl||Sr==null||Sr!==Xo(n)||(n=Sr,"selectionStart"in n&&ns(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Pn&&Un(Pn,n)||(Pn=n,n=oi(el,"onSelect"),0<n.length&&(t=new es("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Sr)))}function bo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Cr={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},sa={},Fd={};ht&&(Fd=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function _i(e){if(sa[e])return sa[e];if(!Cr[e])return e;var t=Cr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Fd)return sa[e]=t[r];return e}var Ad=_i("animationend"),Ud=_i("animationiteration"),Bd=_i("animationstart"),Hd=_i("transitionend"),Vd=new Map,yu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){Vd.set(e,t),pr(t,[e])}for(var ua=0;ua<yu.length;ua++){var ca=yu[ua],Im=ca.toLowerCase(),Rm=ca[0].toUpperCase()+ca.slice(1);Ht(Im,"on"+Rm)}Ht(Ad,"onAnimationEnd");Ht(Ud,"onAnimationIteration");Ht(Bd,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(Hd,"onTransitionEnd");Fr("onMouseEnter",["mouseout","mouseover"]);Fr("onMouseLeave",["mouseout","mouseover"]);Fr("onPointerEnter",["pointerout","pointerover"]);Fr("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dm=new Set("cancel close invalid load scroll toggle".split(" ").concat(wn));function wu(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Ih(n,t,void 0,e),e.currentTarget=null}function Wd(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var a=n.length-1;0<=a;a--){var l=n[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;wu(o,l,u),i=s}else for(a=0;a<n.length;a++){if(l=n[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;wu(o,l,u),i=s}}}if(Zo)throw e=Ka,Zo=!1,Ka=null,e}function W(e,t){var r=t[al];r===void 0&&(r=t[al]=new Set);var n=e+"__bubble";r.has(n)||(Gd(t,e,2,!1),r.add(n))}function da(e,t,r){var n=0;t&&(n|=4),Gd(r,e,n,t)}var So="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[So]){e[So]=!0,Zc.forEach(function(r){r!=="selectionchange"&&(Dm.has(r)||da(r,!1,e),da(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[So]||(t[So]=!0,da("selectionchange",!1,t))}}function Gd(e,t,r,n){switch(zd(t)){case 1:var o=Qh;break;case 4:o=Yh;break;default:o=ql}r=o.bind(null,t,r,e),o=void 0,!Ya||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function fa(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var l=n.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=n.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=tr(l),a===null)return;if(s=a.tag,s===5||s===6){n=i=a;continue e}l=l.parentNode}}n=n.return}md(function(){var u=i,h=Ql(r),f=[];e:{var g=Vd.get(e);if(g!==void 0){var y=es,x=e;switch(e){case"keypress":if(Oo(r)===0)break e;case"keydown":case"keyup":y=cm;break;case"focusin":x="focus",y=ia;break;case"focusout":x="blur",y=ia;break;case"beforeblur":case"afterblur":y=ia;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=qh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=pm;break;case Ad:case Ud:case Bd:y=tm;break;case Hd:y=mm;break;case"scroll":y=Kh;break;case"wheel":y=vm;break;case"copy":case"cut":case"paste":y=nm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=uu}var k=(t&4)!==0,P=!k&&e==="scroll",p=k?g!==null?g+"Capture":null:g;k=[];for(var d=u,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Mn(d,p),w!=null&&k.push(Hn(d,w,m)))),P)break;d=d.return}0<k.length&&(g=new y(g,x,null,r,h),f.push({event:g,listeners:k}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",g&&r!==Ja&&(x=r.relatedTarget||r.fromElement)&&(tr(x)||x[mt]))break e;if((y||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,y?(x=r.relatedTarget||r.toElement,y=u,x=x?tr(x):null,x!==null&&(P=hr(x),x!==P||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(k=lu,w="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(k=uu,w="onPointerLeave",p="onPointerEnter",d="pointer"),P=y==null?g:Er(y),m=x==null?g:Er(x),g=new k(w,d+"leave",y,r,h),g.target=P,g.relatedTarget=m,w=null,tr(h)===u&&(k=new k(p,d+"enter",x,r,h),k.target=m,k.relatedTarget=P,w=k),P=w,y&&x)t:{for(k=y,p=x,d=0,m=k;m;m=vr(m))d++;for(m=0,w=p;w;w=vr(w))m++;for(;0<d-m;)k=vr(k),d--;for(;0<m-d;)p=vr(p),m--;for(;d--;){if(k===p||p!==null&&k===p.alternate)break t;k=vr(k),p=vr(p)}k=null}else k=null;y!==null&&xu(f,g,y,k,!1),x!==null&&P!==null&&xu(f,P,x,k,!0)}}e:{if(g=u?Er(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var S=Cm;else if(fu(g))if(Nd)S=Pm;else{S=jm;var $=Em}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=$m);if(S&&(S=S(e,u))){Dd(f,S,r,h);break e}$&&$(e,g,u),e==="focusout"&&($=g._wrapperState)&&$.controlled&&g.type==="number"&&Ba(g,"number",g.value)}switch($=u?Er(u):window,e){case"focusin":(fu($)||$.contentEditable==="true")&&(Sr=$,el=u,Pn=null);break;case"focusout":Pn=el=Sr=null;break;case"mousedown":tl=!0;break;case"contextmenu":case"mouseup":case"dragend":tl=!1,vu(f,r,h);break;case"selectionchange":if(Tm)break;case"keydown":case"keyup":vu(f,r,h)}var C;if(rs)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else br?Id(e,r)&&(T="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(Td&&r.locale!=="ko"&&(br||T!=="onCompositionStart"?T==="onCompositionEnd"&&br&&(C=_d()):(Pt=h,Zl="value"in Pt?Pt.value:Pt.textContent,br=!0)),$=oi(u,T),0<$.length&&(T=new su(T,e,null,r,h),f.push({event:T,listeners:$}),C?T.data=C:(C=Rd(r),C!==null&&(T.data=C)))),(C=wm?xm(e,r):km(e,r))&&(u=oi(u,"onBeforeInput"),0<u.length&&(h=new su("onBeforeInput","beforeinput",null,r,h),f.push({event:h,listeners:u}),h.data=C))}Wd(f,t)})}function Hn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function oi(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Mn(e,r),i!=null&&n.unshift(Hn(e,i,o)),i=Mn(e,t),i!=null&&n.push(Hn(e,i,o))),e=e.return}return n}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xu(e,t,r,n,o){for(var i=t._reactName,a=[];r!==null&&r!==n;){var l=r,s=l.alternate,u=l.stateNode;if(s!==null&&s===n)break;l.tag===5&&u!==null&&(l=u,o?(s=Mn(r,i),s!=null&&a.unshift(Hn(r,s,l))):o||(s=Mn(r,i),s!=null&&a.push(Hn(r,s,l)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var Nm=/\r\n?/g,Mm=/\u0000|\uFFFD/g;function ku(e){return(typeof e=="string"?e:""+e).replace(Nm,`
`).replace(Mm,"")}function Co(e,t,r){if(t=ku(t),ku(e)!==t&&r)throw Error(E(425))}function ii(){}var rl=null,nl=null;function ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var il=typeof setTimeout=="function"?setTimeout:void 0,Lm=typeof clearTimeout=="function"?clearTimeout:void 0,bu=typeof Promise=="function"?Promise:void 0,Om=typeof queueMicrotask=="function"?queueMicrotask:typeof bu<"u"?function(e){return bu.resolve(null).then(e).catch(Fm)}:il;function Fm(e){setTimeout(function(){throw e})}function pa(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),Fn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);Fn(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Su(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var en=Math.random().toString(36).slice(2),nt="__reactFiber$"+en,Vn="__reactProps$"+en,mt="__reactContainer$"+en,al="__reactEvents$"+en,Am="__reactListeners$"+en,Um="__reactHandles$"+en;function tr(e){var t=e[nt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[mt]||r[nt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Su(e);e!==null;){if(r=e[nt])return r;e=Su(e)}return t}e=r,r=e.parentNode}return null}function oo(e){return e=e[nt]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function Ti(e){return e[Vn]||null}var ll=[],jr=-1;function Vt(e){return{current:e}}function J(e){0>jr||(e.current=ll[jr],ll[jr]=null,jr--)}function V(e,t){jr++,ll[jr]=e.current,e.current=t}var Bt={},me=Vt(Bt),Ce=Vt(!1),sr=Bt;function Ar(e,t){var r=e.type.contextTypes;if(!r)return Bt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ee(e){return e=e.childContextTypes,e!=null}function ai(){J(Ce),J(me)}function Cu(e,t,r){if(me.current!==Bt)throw Error(E(168));V(me,t),V(Ce,r)}function Jd(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(E(108,Eh(e)||"Unknown",o));return X({},r,n)}function li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,sr=me.current,V(me,e),V(Ce,Ce.current),!0}function Eu(e,t,r){var n=e.stateNode;if(!n)throw Error(E(169));r?(e=Jd(e,t,sr),n.__reactInternalMemoizedMergedChildContext=e,J(Ce),J(me),V(me,e)):J(Ce),V(Ce,r)}var ct=null,Ii=!1,ha=!1;function Qd(e){ct===null?ct=[e]:ct.push(e)}function Bm(e){Ii=!0,Qd(e)}function Wt(){if(!ha&&ct!==null){ha=!0;var e=0,t=A;try{var r=ct;for(A=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}ct=null,Ii=!1}catch(o){throw ct!==null&&(ct=ct.slice(e+1)),wd(Yl,Wt),o}finally{A=t,ha=!1}}return null}var $r=[],Pr=0,si=null,ui=0,Me=[],Le=0,ur=null,dt=1,ft="";function Zt(e,t){$r[Pr++]=ui,$r[Pr++]=si,si=e,ui=t}function Yd(e,t,r){Me[Le++]=dt,Me[Le++]=ft,Me[Le++]=ur,ur=e;var n=dt;e=ft;var o=32-Ke(n)-1;n&=~(1<<o),r+=1;var i=32-Ke(t)+o;if(30<i){var a=o-o%5;i=(n&(1<<a)-1).toString(32),n>>=a,o-=a,dt=1<<32-Ke(t)+o|r<<o|n,ft=i+e}else dt=1<<i|r<<o|n,ft=e}function os(e){e.return!==null&&(Zt(e,1),Yd(e,1,0))}function is(e){for(;e===si;)si=$r[--Pr],$r[Pr]=null,ui=$r[--Pr],$r[Pr]=null;for(;e===ur;)ur=Me[--Le],Me[Le]=null,ft=Me[--Le],Me[Le]=null,dt=Me[--Le],Me[Le]=null}var Ie=null,Te=null,Q=!1,Ye=null;function Kd(e,t){var r=Oe(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ju(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,Te=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ur!==null?{id:dt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Oe(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ie=e,Te=null,!0):!1;default:return!1}}function sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ul(e){if(Q){var t=Te;if(t){var r=t;if(!ju(e,t)){if(sl(e))throw Error(E(418));t=Dt(r.nextSibling);var n=Ie;t&&ju(e,t)?Kd(n,r):(e.flags=e.flags&-4097|2,Q=!1,Ie=e)}}else{if(sl(e))throw Error(E(418));e.flags=e.flags&-4097|2,Q=!1,Ie=e}}}function $u(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function Eo(e){if(e!==Ie)return!1;if(!Q)return $u(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ol(e.type,e.memoizedProps)),t&&(t=Te)){if(sl(e))throw Xd(),Error(E(418));for(;t;)Kd(e,t),t=Dt(t.nextSibling)}if($u(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Te=Dt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=Ie?Dt(e.stateNode.nextSibling):null;return!0}function Xd(){for(var e=Te;e;)e=Dt(e.nextSibling)}function Ur(){Te=Ie=null,Q=!1}function as(e){Ye===null?Ye=[e]:Ye.push(e)}var Hm=yt.ReactCurrentBatchConfig;function Je(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var ci=Vt(null),di=null,zr=null,ls=null;function ss(){ls=zr=di=null}function us(e){var t=ci.current;J(ci),e._currentValue=t}function cl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Lr(e,t){di=e,ls=zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(ls!==e)if(e={context:e,memoizedValue:t,next:null},zr===null){if(di===null)throw Error(E(308));zr=e,di.dependencies={lanes:0,firstContext:e}}else zr=zr.next=e;return t}var rr=null;function cs(e){rr===null?rr=[e]:rr.push(e)}function qd(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,cs(t)):(r.next=o.next,o.next=r),t.interleaved=r,gt(e,n)}function gt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Et=!1;function ds(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,O&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,gt(e,r)}return o=n.interleaved,o===null?(t.next=t,cs(n)):(t.next=o.next,o.next=t),n.interleaved=t,gt(e,r)}function Fo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Kl(e,r)}}function Pu(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=a:i=i.next=a,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function fi(e,t,r,n){var o=e.updateQueue;Et=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=s))}if(i!==null){var f=o.baseState;a=0,h=u=s=null,l=i;do{var g=l.lane,y=l.eventTime;if((n&g)===g){h!==null&&(h=h.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,k=l;switch(g=t,y=r,k.tag){case 1:if(x=k.payload,typeof x=="function"){f=x.call(y,f,g);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=k.payload,g=typeof x=="function"?x.call(y,f,g):x,g==null)break e;f=X({},f,g);break e;case 2:Et=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[l]:g.push(l))}else y={eventTime:y,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=y,s=f):h=h.next=y,a|=g;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;g=l,l=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(h===null&&(s=f),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);dr|=a,e.lanes=a,e.memoizedState=f}}function zu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(E(191,o));o.call(n)}}}var ef=new qc.Component().refs;function dl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:X({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ri={isMounted:function(e){return(e=e._reactInternals)?hr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=we(),o=Lt(e),i=pt(n,o);i.payload=t,r!=null&&(i.callback=r),t=Nt(e,i,o),t!==null&&(Xe(t,e,o,n),Fo(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=we(),o=Lt(e),i=pt(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Nt(e,i,o),t!==null&&(Xe(t,e,o,n),Fo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=we(),n=Lt(e),o=pt(r,n);o.tag=2,t!=null&&(o.callback=t),t=Nt(e,o,n),t!==null&&(Xe(t,e,n,r),Fo(t,e,n))}};function _u(e,t,r,n,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,a):t.prototype&&t.prototype.isPureReactComponent?!Un(r,n)||!Un(o,i):!0}function tf(e,t,r){var n=!1,o=Bt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ae(i):(o=Ee(t)?sr:me.current,n=t.contextTypes,i=(n=n!=null)?Ar(e,o):Bt),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ri,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Tu(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ri.enqueueReplaceState(t,t.state,null)}function fl(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs=ef,ds(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ae(i):(i=Ee(t)?sr:me.current,o.context=Ar(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(dl(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ri.enqueueReplaceState(o,o.state,null),fi(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(E(309));var n=r.stateNode}if(!n)throw Error(E(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;l===ef&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!r._owner)throw Error(E(290,e))}return e}function jo(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Iu(e){var t=e._init;return t(e._payload)}function rf(e){function t(p,d){if(e){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function r(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function n(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function o(p,d){return p=Ot(p,d),p.index=0,p.sibling=null,p}function i(p,d,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,d,m,w){return d===null||d.tag!==6?(d=ka(m,p.mode,w),d.return=p,d):(d=o(d,m),d.return=p,d)}function s(p,d,m,w){var S=m.type;return S===kr?h(p,d,m.props.children,w,m.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ct&&Iu(S)===d.type)?(w=o(d,m.props),w.ref=pn(p,d,m),w.return=p,w):(w=Wo(m.type,m.key,m.props,null,p.mode,w),w.ref=pn(p,d,m),w.return=p,w)}function u(p,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=ba(m,p.mode,w),d.return=p,d):(d=o(d,m.children||[]),d.return=p,d)}function h(p,d,m,w,S){return d===null||d.tag!==7?(d=ar(m,p.mode,w,S),d.return=p,d):(d=o(d,m),d.return=p,d)}function f(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ka(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case mo:return m=Wo(d.type,d.key,d.props,null,p.mode,m),m.ref=pn(p,null,d),m.return=p,m;case xr:return d=ba(d,p.mode,m),d.return=p,d;case Ct:var w=d._init;return f(p,w(d._payload),m)}if(vn(d)||sn(d))return d=ar(d,p.mode,m,null),d.return=p,d;jo(p,d)}return null}function g(p,d,m,w){var S=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(p,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case mo:return m.key===S?s(p,d,m,w):null;case xr:return m.key===S?u(p,d,m,w):null;case Ct:return S=m._init,g(p,d,S(m._payload),w)}if(vn(m)||sn(m))return S!==null?null:h(p,d,m,w,null);jo(p,m)}return null}function y(p,d,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,l(d,p,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case mo:return p=p.get(w.key===null?m:w.key)||null,s(d,p,w,S);case xr:return p=p.get(w.key===null?m:w.key)||null,u(d,p,w,S);case Ct:var $=w._init;return y(p,d,m,$(w._payload),S)}if(vn(w)||sn(w))return p=p.get(m)||null,h(d,p,w,S,null);jo(d,w)}return null}function x(p,d,m,w){for(var S=null,$=null,C=d,T=d=0,H=null;C!==null&&T<m.length;T++){C.index>T?(H=C,C=null):H=C.sibling;var M=g(p,C,m[T],w);if(M===null){C===null&&(C=H);break}e&&C&&M.alternate===null&&t(p,C),d=i(M,d,T),$===null?S=M:$.sibling=M,$=M,C=H}if(T===m.length)return r(p,C),Q&&Zt(p,T),S;if(C===null){for(;T<m.length;T++)C=f(p,m[T],w),C!==null&&(d=i(C,d,T),$===null?S=C:$.sibling=C,$=C);return Q&&Zt(p,T),S}for(C=n(p,C);T<m.length;T++)H=y(C,p,T,m[T],w),H!==null&&(e&&H.alternate!==null&&C.delete(H.key===null?T:H.key),d=i(H,d,T),$===null?S=H:$.sibling=H,$=H);return e&&C.forEach(function($e){return t(p,$e)}),Q&&Zt(p,T),S}function k(p,d,m,w){var S=sn(m);if(typeof S!="function")throw Error(E(150));if(m=S.call(m),m==null)throw Error(E(151));for(var $=S=null,C=d,T=d=0,H=null,M=m.next();C!==null&&!M.done;T++,M=m.next()){C.index>T?(H=C,C=null):H=C.sibling;var $e=g(p,C,M.value,w);if($e===null){C===null&&(C=H);break}e&&C&&$e.alternate===null&&t(p,C),d=i($e,d,T),$===null?S=$e:$.sibling=$e,$=$e,C=H}if(M.done)return r(p,C),Q&&Zt(p,T),S;if(C===null){for(;!M.done;T++,M=m.next())M=f(p,M.value,w),M!==null&&(d=i(M,d,T),$===null?S=M:$.sibling=M,$=M);return Q&&Zt(p,T),S}for(C=n(p,C);!M.done;T++,M=m.next())M=y(C,p,T,M.value,w),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?T:M.key),d=i(M,d,T),$===null?S=M:$.sibling=M,$=M);return e&&C.forEach(function(Jt){return t(p,Jt)}),Q&&Zt(p,T),S}function P(p,d,m,w){if(typeof m=="object"&&m!==null&&m.type===kr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case mo:e:{for(var S=m.key,$=d;$!==null;){if($.key===S){if(S=m.type,S===kr){if($.tag===7){r(p,$.sibling),d=o($,m.props.children),d.return=p,p=d;break e}}else if($.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ct&&Iu(S)===$.type){r(p,$.sibling),d=o($,m.props),d.ref=pn(p,$,m),d.return=p,p=d;break e}r(p,$);break}else t(p,$);$=$.sibling}m.type===kr?(d=ar(m.props.children,p.mode,w,m.key),d.return=p,p=d):(w=Wo(m.type,m.key,m.props,null,p.mode,w),w.ref=pn(p,d,m),w.return=p,p=w)}return a(p);case xr:e:{for($=m.key;d!==null;){if(d.key===$)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){r(p,d.sibling),d=o(d,m.children||[]),d.return=p,p=d;break e}else{r(p,d);break}else t(p,d);d=d.sibling}d=ba(m,p.mode,w),d.return=p,p=d}return a(p);case Ct:return $=m._init,P(p,d,$(m._payload),w)}if(vn(m))return x(p,d,m,w);if(sn(m))return k(p,d,m,w);jo(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(r(p,d.sibling),d=o(d,m),d.return=p,p=d):(r(p,d),d=ka(m,p.mode,w),d.return=p,p=d),a(p)):r(p,d)}return P}var Br=rf(!0),nf=rf(!1),io={},at=Vt(io),Wn=Vt(io),Gn=Vt(io);function nr(e){if(e===io)throw Error(E(174));return e}function fs(e,t){switch(V(Gn,t),V(Wn,e),V(at,io),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Va(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Va(t,e)}J(at),V(at,t)}function Hr(){J(at),J(Wn),J(Gn)}function of(e){nr(Gn.current);var t=nr(at.current),r=Va(t,e.type);t!==r&&(V(Wn,e),V(at,r))}function ps(e){Wn.current===e&&(J(at),J(Wn))}var Y=Vt(0);function pi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ma=[];function hs(){for(var e=0;e<ma.length;e++)ma[e]._workInProgressVersionPrimary=null;ma.length=0}var Ao=yt.ReactCurrentDispatcher,ga=yt.ReactCurrentBatchConfig,cr=0,K=null,ne=null,ie=null,hi=!1,zn=!1,Jn=0,Vm=0;function de(){throw Error(E(321))}function ms(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ze(e[r],t[r]))return!1;return!0}function gs(e,t,r,n,o,i){if(cr=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ao.current=e===null||e.memoizedState===null?Qm:Ym,e=r(n,o),zn){i=0;do{if(zn=!1,Jn=0,25<=i)throw Error(E(301));i+=1,ie=ne=null,t.updateQueue=null,Ao.current=Km,e=r(n,o)}while(zn)}if(Ao.current=mi,t=ne!==null&&ne.next!==null,cr=0,ie=ne=K=null,hi=!1,t)throw Error(E(300));return e}function vs(){var e=Jn!==0;return Jn=0,e}function tt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?K.memoizedState=ie=e:ie=ie.next=e,ie}function Ue(){if(ne===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ie===null?K.memoizedState:ie.next;if(t!==null)ie=t,ne=e;else{if(e===null)throw Error(E(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ie===null?K.memoizedState=ie=e:ie=ie.next=e}return ie}function Qn(e,t){return typeof t=="function"?t(e):t}function va(e){var t=Ue(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=ne,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var l=a=null,s=null,u=i;do{var h=u.lane;if((cr&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=f,a=n):s=s.next=f,K.lanes|=h,dr|=h}u=u.next}while(u!==null&&u!==i);s===null?a=n:s.next=l,Ze(n,t.memoizedState)||(Se=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=s,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,K.lanes|=i,dr|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ya(e){var t=Ue(),r=t.queue;if(r===null)throw Error(E(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Ze(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function af(){}function lf(e,t){var r=K,n=Ue(),o=t(),i=!Ze(n.memoizedState,o);if(i&&(n.memoizedState=o,Se=!0),n=n.queue,ys(cf.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||ie!==null&&ie.memoizedState.tag&1){if(r.flags|=2048,Yn(9,uf.bind(null,r,n,o,t),void 0,null),le===null)throw Error(E(349));cr&30||sf(r,t,o)}return o}function sf(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function uf(e,t,r,n){t.value=r,t.getSnapshot=n,df(t)&&ff(e)}function cf(e,t,r){return r(function(){df(t)&&ff(e)})}function df(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ze(e,r)}catch{return!0}}function ff(e){var t=gt(e,1);t!==null&&Xe(t,e,1,-1)}function Ru(e){var t=tt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qn,lastRenderedState:e},t.queue=e,e=e.dispatch=Jm.bind(null,K,e),[t.memoizedState,e]}function Yn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function pf(){return Ue().memoizedState}function Uo(e,t,r,n){var o=tt();K.flags|=e,o.memoizedState=Yn(1|t,r,void 0,n===void 0?null:n)}function Di(e,t,r,n){var o=Ue();n=n===void 0?null:n;var i=void 0;if(ne!==null){var a=ne.memoizedState;if(i=a.destroy,n!==null&&ms(n,a.deps)){o.memoizedState=Yn(t,r,i,n);return}}K.flags|=e,o.memoizedState=Yn(1|t,r,i,n)}function Du(e,t){return Uo(8390656,8,e,t)}function ys(e,t){return Di(2048,8,e,t)}function hf(e,t){return Di(4,2,e,t)}function mf(e,t){return Di(4,4,e,t)}function gf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vf(e,t,r){return r=r!=null?r.concat([e]):null,Di(4,4,gf.bind(null,t,e),r)}function ws(){}function yf(e,t){var r=Ue();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ms(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function wf(e,t){var r=Ue();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&ms(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function xf(e,t,r){return cr&21?(Ze(r,t)||(r=bd(),K.lanes|=r,dr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=r)}function Wm(e,t){var r=A;A=r!==0&&4>r?r:4,e(!0);var n=ga.transition;ga.transition={};try{e(!1),t()}finally{A=r,ga.transition=n}}function kf(){return Ue().memoizedState}function Gm(e,t,r){var n=Lt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},bf(e))Sf(t,r);else if(r=qd(e,t,r,n),r!==null){var o=we();Xe(r,e,n,o),Cf(r,t,n)}}function Jm(e,t,r){var n=Lt(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(bf(e))Sf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,r);if(o.hasEagerState=!0,o.eagerState=l,Ze(l,a)){var s=t.interleaved;s===null?(o.next=o,cs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}r=qd(e,t,o,n),r!==null&&(o=we(),Xe(r,e,n,o),Cf(r,t,n))}}function bf(e){var t=e.alternate;return e===K||t!==null&&t===K}function Sf(e,t){zn=hi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Cf(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Kl(e,r)}}var mi={readContext:Ae,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},Qm={readContext:Ae,useCallback:function(e,t){return tt().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Du,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Uo(4194308,4,gf.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Uo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Uo(4,2,e,t)},useMemo:function(e,t){var r=tt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=tt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Gm.bind(null,K,e),[n.memoizedState,e]},useRef:function(e){var t=tt();return e={current:e},t.memoizedState=e},useState:Ru,useDebugValue:ws,useDeferredValue:function(e){return tt().memoizedState=e},useTransition:function(){var e=Ru(!1),t=e[0];return e=Wm.bind(null,e[1]),tt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=K,o=tt();if(Q){if(r===void 0)throw Error(E(407));r=r()}else{if(r=t(),le===null)throw Error(E(349));cr&30||sf(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,Du(cf.bind(null,n,i,e),[e]),n.flags|=2048,Yn(9,uf.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=tt(),t=le.identifierPrefix;if(Q){var r=ft,n=dt;r=(n&~(1<<32-Ke(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Jn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Vm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ym={readContext:Ae,useCallback:yf,useContext:Ae,useEffect:ys,useImperativeHandle:vf,useInsertionEffect:hf,useLayoutEffect:mf,useMemo:wf,useReducer:va,useRef:pf,useState:function(){return va(Qn)},useDebugValue:ws,useDeferredValue:function(e){var t=Ue();return xf(t,ne.memoizedState,e)},useTransition:function(){var e=va(Qn)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:af,useSyncExternalStore:lf,useId:kf,unstable_isNewReconciler:!1},Km={readContext:Ae,useCallback:yf,useContext:Ae,useEffect:ys,useImperativeHandle:vf,useInsertionEffect:hf,useLayoutEffect:mf,useMemo:wf,useReducer:ya,useRef:pf,useState:function(){return ya(Qn)},useDebugValue:ws,useDeferredValue:function(e){var t=Ue();return ne===null?t.memoizedState=e:xf(t,ne.memoizedState,e)},useTransition:function(){var e=ya(Qn)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:af,useSyncExternalStore:lf,useId:kf,unstable_isNewReconciler:!1};function Vr(e,t){try{var r="",n=t;do r+=Ch(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function wa(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function pl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Xm=typeof WeakMap=="function"?WeakMap:Map;function Ef(e,t,r){r=pt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){vi||(vi=!0,Sl=n),pl(e,t)},r}function jf(e,t,r){r=pt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){pl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){pl(e,t),typeof n!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Nu(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Xm;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=dg.bind(null,e,t,r),t.then(e,e))}function Mu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lu(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=pt(-1,1),t.tag=2,Nt(r,t,1))),r.lanes|=1),e)}var qm=yt.ReactCurrentOwner,Se=!1;function ge(e,t,r,n){t.child=e===null?nf(t,null,r,n):Br(t,e.child,r,n)}function Ou(e,t,r,n,o){r=r.render;var i=t.ref;return Lr(t,o),n=gs(e,t,r,n,i,o),r=vs(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(Q&&r&&os(t),t.flags|=1,ge(e,t,n,o),t.child)}function Fu(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!$s(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,$f(e,t,i,n,o)):(e=Wo(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(r=r.compare,r=r!==null?r:Un,r(a,n)&&e.ref===t.ref)return vt(e,t,o)}return t.flags|=1,e=Ot(i,n),e.ref=t.ref,e.return=t,t.child=e}function $f(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(Un(i,n)&&e.ref===t.ref)if(Se=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,vt(e,t,o)}return hl(e,t,r,n,o)}function Pf(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Tr,_e),_e|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(Tr,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,V(Tr,_e),_e|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,V(Tr,_e),_e|=n;return ge(e,t,o,r),t.child}function zf(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function hl(e,t,r,n,o){var i=Ee(r)?sr:me.current;return i=Ar(t,i),Lr(t,o),r=gs(e,t,r,n,i,o),n=vs(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(Q&&n&&os(t),t.flags|=1,ge(e,t,r,o),t.child)}function Au(e,t,r,n,o){if(Ee(r)){var i=!0;li(t)}else i=!1;if(Lr(t,o),t.stateNode===null)Bo(e,t),tf(t,r,n),fl(t,r,n,o),n=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ae(u):(u=Ee(r)?sr:me.current,u=Ar(t,u));var h=r.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==n||s!==u)&&Tu(t,a,n,u),Et=!1;var g=t.memoizedState;a.state=g,fi(t,n,a,o),s=t.memoizedState,l!==n||g!==s||Ce.current||Et?(typeof h=="function"&&(dl(t,r,h,n),s=t.memoizedState),(l=Et||_u(t,r,l,n,g,s,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=s),a.props=n,a.state=s,a.context=u,n=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Zd(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Je(t.type,l),a.props=u,f=t.pendingProps,g=a.context,s=r.contextType,typeof s=="object"&&s!==null?s=Ae(s):(s=Ee(r)?sr:me.current,s=Ar(t,s));var y=r.getDerivedStateFromProps;(h=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||g!==s)&&Tu(t,a,n,s),Et=!1,g=t.memoizedState,a.state=g,fi(t,n,a,o);var x=t.memoizedState;l!==f||g!==x||Ce.current||Et?(typeof y=="function"&&(dl(t,r,y,n),x=t.memoizedState),(u=Et||_u(t,r,u,n,g,x,s)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,x,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,x,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),a.props=n,a.state=x,a.context=s,n=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return ml(e,t,r,n,i,o)}function ml(e,t,r,n,o,i){zf(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return o&&Eu(t,r,!1),vt(e,t,i);n=t.stateNode,qm.current=t;var l=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Br(t,e.child,null,i),t.child=Br(t,null,l,i)):ge(e,t,l,i),t.memoizedState=n.state,o&&Eu(t,r,!0),t.child}function _f(e){var t=e.stateNode;t.pendingContext?Cu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cu(e,t.context,!1),fs(e,t.containerInfo)}function Uu(e,t,r,n,o){return Ur(),as(o),t.flags|=256,ge(e,t,r,n),t.child}var gl={dehydrated:null,treeContext:null,retryLane:0};function vl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Tf(e,t,r){var n=t.pendingProps,o=Y.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(Y,o&1),e===null)return ul(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,i?(n=t.mode,i=t.child,a={mode:"hidden",children:a},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Li(a,n,0,null),e=ar(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=vl(r),t.memoizedState=gl,e):xs(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Zm(e,t,a,n,l,o,r);if(i){i=n.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:n.children};return!(a&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=s,t.deletions=null):(n=Ot(o,s),n.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Ot(l,i):(i=ar(i,a,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,a=e.child.memoizedState,a=a===null?vl(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~r,t.memoizedState=gl,n}return i=e.child,e=i.sibling,n=Ot(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function xs(e,t){return t=Li({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function $o(e,t,r,n){return n!==null&&as(n),Br(t,e.child,null,r),e=xs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zm(e,t,r,n,o,i,a){if(r)return t.flags&256?(t.flags&=-257,n=wa(Error(E(422))),$o(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=Li({mode:"visible",children:n.children},o,0,null),i=ar(i,o,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&Br(t,e.child,null,a),t.child.memoizedState=vl(a),t.memoizedState=gl,i);if(!(t.mode&1))return $o(e,t,a,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var l=n.dgst;return n=l,i=Error(E(419)),n=wa(i,n,void 0),$o(e,t,a,n)}if(l=(a&e.childLanes)!==0,Se||l){if(n=le,n!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,gt(e,o),Xe(n,e,o,-1))}return js(),n=wa(Error(E(421))),$o(e,t,a,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=fg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Te=Dt(o.nextSibling),Ie=t,Q=!0,Ye=null,e!==null&&(Me[Le++]=dt,Me[Le++]=ft,Me[Le++]=ur,dt=e.id,ft=e.overflow,ur=t),t=xs(t,n.children),t.flags|=4096,t)}function Bu(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),cl(e.return,t,r)}function xa(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function If(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(ge(e,t,n.children,r),n=Y.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bu(e,r,t);else if(e.tag===19)Bu(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(V(Y,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&pi(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),xa(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&pi(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}xa(t,!0,r,null,i);break;case"together":xa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),dr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,r=Ot(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Ot(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function eg(e,t,r){switch(t.tag){case 3:_f(t),Ur();break;case 5:of(t);break;case 1:Ee(t.type)&&li(t);break;case 4:fs(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;V(ci,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(V(Y,Y.current&1),t.flags|=128,null):r&t.child.childLanes?Tf(e,t,r):(V(Y,Y.current&1),e=vt(e,t,r),e!==null?e.sibling:null);V(Y,Y.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return If(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(Y,Y.current),n)break;return null;case 22:case 23:return t.lanes=0,Pf(e,t,r)}return vt(e,t,r)}var Rf,yl,Df,Nf;Rf=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};yl=function(){};Df=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,nr(at.current);var i=null;switch(r){case"input":o=Aa(e,o),n=Aa(e,n),i=[];break;case"select":o=X({},o,{value:void 0}),n=X({},n,{value:void 0}),i=[];break;case"textarea":o=Ha(e,o),n=Ha(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ii)}Wa(r,n);var a;r=null;for(u in o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Dn.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in n){var s=n[u];if(l=o!=null?o[u]:void 0,n.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(r||(r={}),r[a]=s[a])}else r||(i||(i=[]),i.push(u,r)),r=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Dn.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&W("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Nf=function(e,t,r,n){r!==n&&(t.flags|=4)};function hn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function tg(e,t,r){var n=t.pendingProps;switch(is(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return Ee(t.type)&&ai(),fe(t),null;case 3:return n=t.stateNode,Hr(),J(Ce),J(me),hs(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Eo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(jl(Ye),Ye=null))),yl(e,t),fe(t),null;case 5:ps(t);var o=nr(Gn.current);if(r=t.type,e!==null&&t.stateNode!=null)Df(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(E(166));return fe(t),null}if(e=nr(at.current),Eo(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[nt]=t,n[Vn]=i,e=(t.mode&1)!==0,r){case"dialog":W("cancel",n),W("close",n);break;case"iframe":case"object":case"embed":W("load",n);break;case"video":case"audio":for(o=0;o<wn.length;o++)W(wn[o],n);break;case"source":W("error",n);break;case"img":case"image":case"link":W("error",n),W("load",n);break;case"details":W("toggle",n);break;case"input":Xs(n,i),W("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},W("invalid",n);break;case"textarea":Zs(n,i),W("invalid",n)}Wa(r,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?n.textContent!==l&&(i.suppressHydrationWarning!==!0&&Co(n.textContent,l,e),o=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Co(n.textContent,l,e),o=["children",""+l]):Dn.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&W("scroll",n)}switch(r){case"input":go(n),qs(n,i,!0);break;case"textarea":go(n),eu(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=ii)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ld(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[nt]=t,e[Vn]=n,Rf(e,t,!1,!1),t.stateNode=e;e:{switch(a=Ga(r,n),r){case"dialog":W("cancel",e),W("close",e),o=n;break;case"iframe":case"object":case"embed":W("load",e),o=n;break;case"video":case"audio":for(o=0;o<wn.length;o++)W(wn[o],e);o=n;break;case"source":W("error",e),o=n;break;case"img":case"image":case"link":W("error",e),W("load",e),o=n;break;case"details":W("toggle",e),o=n;break;case"input":Xs(e,n),o=Aa(e,n),W("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=X({},n,{value:void 0}),W("invalid",e);break;case"textarea":Zs(e,n),o=Ha(e,n),W("invalid",e);break;default:o=n}Wa(r,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?cd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&sd(e,s)):i==="children"?typeof s=="string"?(r!=="textarea"||s!=="")&&Nn(e,s):typeof s=="number"&&Nn(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Dn.hasOwnProperty(i)?s!=null&&i==="onScroll"&&W("scroll",e):s!=null&&Vl(e,i,s,a))}switch(r){case"input":go(e),qs(e,n,!1);break;case"textarea":go(e),eu(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ut(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?Rr(e,!!n.multiple,i,!1):n.defaultValue!=null&&Rr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ii)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)Nf(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(E(166));if(r=nr(Gn.current),nr(at.current),Eo(t)){if(n=t.stateNode,r=t.memoizedProps,n[nt]=t,(i=n.nodeValue!==r)&&(e=Ie,e!==null))switch(e.tag){case 3:Co(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Co(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[nt]=t,t.stateNode=n}return fe(t),null;case 13:if(J(Y),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Te!==null&&t.mode&1&&!(t.flags&128))Xd(),Ur(),t.flags|=98560,i=!1;else if(i=Eo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[nt]=t}else Ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),i=!1}else Ye!==null&&(jl(Ye),Ye=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?oe===0&&(oe=3):js())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return Hr(),yl(e,t),e===null&&Bn(t.stateNode.containerInfo),fe(t),null;case 10:return us(t.type._context),fe(t),null;case 17:return Ee(t.type)&&ai(),fe(t),null;case 19:if(J(Y),i=t.memoizedState,i===null)return fe(t),null;if(n=(t.flags&128)!==0,a=i.rendering,a===null)if(n)hn(i,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=pi(e),a!==null){for(t.flags|=128,hn(i,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return V(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&Z()>Wr&&(t.flags|=128,n=!0,hn(i,!1),t.lanes=4194304)}else{if(!n)if(e=pi(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),hn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Q)return fe(t),null}else 2*Z()-i.renderingStartTime>Wr&&r!==1073741824&&(t.flags|=128,n=!0,hn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(r=i.last,r!==null?r.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Z(),t.sibling=null,r=Y.current,V(Y,n?r&1|2:r&1),t):(fe(t),null);case 22:case 23:return Es(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?_e&1073741824&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function rg(e,t){switch(is(t),t.tag){case 1:return Ee(t.type)&&ai(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hr(),J(Ce),J(me),hs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ps(t),null;case 13:if(J(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(Y),null;case 4:return Hr(),null;case 10:return us(t.type._context),null;case 22:case 23:return Es(),null;case 24:return null;default:return null}}var Po=!1,pe=!1,ng=typeof WeakSet=="function"?WeakSet:Set,_=null;function _r(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){q(e,t,n)}else r.current=null}function wl(e,t,r){try{r()}catch(n){q(e,t,n)}}var Hu=!1;function og(e,t){if(rl=ri,e=Od(),ns(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var a=0,l=-1,s=-1,u=0,h=0,f=e,g=null;t:for(;;){for(var y;f!==r||o!==0&&f.nodeType!==3||(l=a+o),f!==i||n!==0&&f.nodeType!==3||(s=a+n),f.nodeType===3&&(a+=f.nodeValue.length),(y=f.firstChild)!==null;)g=f,f=y;for(;;){if(f===e)break t;if(g===r&&++u===o&&(l=a),g===i&&++h===n&&(s=a),(y=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=y}r=l===-1||s===-1?null:{start:l,end:s}}else r=null}r=r||{start:0,end:0}}else r=null;for(nl={focusedElem:e,selectionRange:r},ri=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var k=x.memoizedProps,P=x.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?k:Je(t.type,k),P);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){q(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return x=Hu,Hu=!1,x}function _n(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&wl(t,r,i)}o=o.next}while(o!==n)}}function Ni(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function xl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Mf(e){var t=e.alternate;t!==null&&(e.alternate=null,Mf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[Vn],delete t[al],delete t[Am],delete t[Um])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lf(e){return e.tag===5||e.tag===3||e.tag===4}function Vu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ii));else if(n!==4&&(e=e.child,e!==null))for(kl(e,t,r),e=e.sibling;e!==null;)kl(e,t,r),e=e.sibling}function bl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(bl(e,t,r),e=e.sibling;e!==null;)bl(e,t,r),e=e.sibling}var se=null,Qe=!1;function kt(e,t,r){for(r=r.child;r!==null;)Of(e,t,r),r=r.sibling}function Of(e,t,r){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount($i,r)}catch{}switch(r.tag){case 5:pe||_r(r,t);case 6:var n=se,o=Qe;se=null,kt(e,t,r),se=n,Qe=o,se!==null&&(Qe?(e=se,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):se.removeChild(r.stateNode));break;case 18:se!==null&&(Qe?(e=se,r=r.stateNode,e.nodeType===8?pa(e.parentNode,r):e.nodeType===1&&pa(e,r),Fn(e)):pa(se,r.stateNode));break;case 4:n=se,o=Qe,se=r.stateNode.containerInfo,Qe=!0,kt(e,t,r),se=n,Qe=o;break;case 0:case 11:case 14:case 15:if(!pe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&wl(r,t,a),o=o.next}while(o!==n)}kt(e,t,r);break;case 1:if(!pe&&(_r(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){q(r,t,l)}kt(e,t,r);break;case 21:kt(e,t,r);break;case 22:r.mode&1?(pe=(n=pe)||r.memoizedState!==null,kt(e,t,r),pe=n):kt(e,t,r);break;default:kt(e,t,r)}}function Wu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new ng),t.forEach(function(n){var o=pg.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function We(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:se=l.stateNode,Qe=!1;break e;case 3:se=l.stateNode.containerInfo,Qe=!0;break e;case 4:se=l.stateNode.containerInfo,Qe=!0;break e}l=l.return}if(se===null)throw Error(E(160));Of(i,a,o),se=null,Qe=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){q(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ff(t,e),t=t.sibling}function Ff(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(t,e),et(e),n&4){try{_n(3,e,e.return),Ni(3,e)}catch(k){q(e,e.return,k)}try{_n(5,e,e.return)}catch(k){q(e,e.return,k)}}break;case 1:We(t,e),et(e),n&512&&r!==null&&_r(r,r.return);break;case 5:if(We(t,e),et(e),n&512&&r!==null&&_r(r,r.return),e.flags&32){var o=e.stateNode;try{Nn(o,"")}catch(k){q(e,e.return,k)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=r!==null?r.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&id(o,i),Ga(l,a);var u=Ga(l,i);for(a=0;a<s.length;a+=2){var h=s[a],f=s[a+1];h==="style"?cd(o,f):h==="dangerouslySetInnerHTML"?sd(o,f):h==="children"?Nn(o,f):Vl(o,h,f,u)}switch(l){case"input":Ua(o,i);break;case"textarea":ad(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Rr(o,!!i.multiple,y,!1):g!==!!i.multiple&&(i.defaultValue!=null?Rr(o,!!i.multiple,i.defaultValue,!0):Rr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Vn]=i}catch(k){q(e,e.return,k)}}break;case 6:if(We(t,e),et(e),n&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){q(e,e.return,k)}}break;case 3:if(We(t,e),et(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Fn(t.containerInfo)}catch(k){q(e,e.return,k)}break;case 4:We(t,e),et(e);break;case 13:We(t,e),et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ss=Z())),n&4&&Wu(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(pe=(u=pe)||h,We(t,e),pe=u):We(t,e),et(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(_=e,h=e.child;h!==null;){for(f=_=h;_!==null;){switch(g=_,y=g.child,g.tag){case 0:case 11:case 14:case 15:_n(4,g,g.return);break;case 1:_r(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(k){q(n,r,k)}}break;case 5:_r(g,g.return);break;case 22:if(g.memoizedState!==null){Ju(f);continue}}y!==null?(y.return=g,_=y):Ju(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,s=f.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=ud("display",a))}catch(k){q(e,e.return,k)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(k){q(e,e.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:We(t,e),et(e),n&4&&Wu(e);break;case 21:break;default:We(t,e),et(e)}}function et(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Lf(r)){var n=r;break e}r=r.return}throw Error(E(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(Nn(o,""),n.flags&=-33);var i=Vu(e);bl(e,i,o);break;case 3:case 4:var a=n.stateNode.containerInfo,l=Vu(e);kl(e,l,a);break;default:throw Error(E(161))}}catch(s){q(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ig(e,t,r){_=e,Af(e)}function Af(e,t,r){for(var n=(e.mode&1)!==0;_!==null;){var o=_,i=o.child;if(o.tag===22&&n){var a=o.memoizedState!==null||Po;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||pe;l=Po;var u=pe;if(Po=a,(pe=s)&&!u)for(_=o;_!==null;)a=_,s=a.child,a.tag===22&&a.memoizedState!==null?Qu(o):s!==null?(s.return=a,_=s):Qu(o);for(;i!==null;)_=i,Af(i),i=i.sibling;_=o,Po=l,pe=u}Gu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,_=i):Gu(e)}}function Gu(e){for(;_!==null;){var t=_;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Ni(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!pe)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Je(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&zu(t,i,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}zu(t,a,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&r.focus();break;case"img":s.src&&(r.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Fn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}pe||t.flags&512&&xl(t)}catch(g){q(t,t.return,g)}}if(t===e){_=null;break}if(r=t.sibling,r!==null){r.return=t.return,_=r;break}_=t.return}}function Ju(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var r=t.sibling;if(r!==null){r.return=t.return,_=r;break}_=t.return}}function Qu(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ni(4,t)}catch(s){q(t,r,s)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(s){q(t,o,s)}}var i=t.return;try{xl(t)}catch(s){q(t,i,s)}break;case 5:var a=t.return;try{xl(t)}catch(s){q(t,a,s)}}}catch(s){q(t,t.return,s)}if(t===e){_=null;break}var l=t.sibling;if(l!==null){l.return=t.return,_=l;break}_=t.return}}var ag=Math.ceil,gi=yt.ReactCurrentDispatcher,ks=yt.ReactCurrentOwner,Fe=yt.ReactCurrentBatchConfig,O=0,le=null,te=null,ue=0,_e=0,Tr=Vt(0),oe=0,Kn=null,dr=0,Mi=0,bs=0,Tn=null,be=null,Ss=0,Wr=1/0,st=null,vi=!1,Sl=null,Mt=null,zo=!1,zt=null,yi=0,In=0,Cl=null,Ho=-1,Vo=0;function we(){return O&6?Z():Ho!==-1?Ho:Ho=Z()}function Lt(e){return e.mode&1?O&2&&ue!==0?ue&-ue:Hm.transition!==null?(Vo===0&&(Vo=bd()),Vo):(e=A,e!==0||(e=window.event,e=e===void 0?16:zd(e.type)),e):1}function Xe(e,t,r,n){if(50<In)throw In=0,Cl=null,Error(E(185));ro(e,r,n),(!(O&2)||e!==le)&&(e===le&&(!(O&2)&&(Mi|=r),oe===4&&$t(e,ue)),je(e,n),r===1&&O===0&&!(t.mode&1)&&(Wr=Z()+500,Ii&&Wt()))}function je(e,t){var r=e.callbackNode;Hh(e,t);var n=ti(e,e===le?ue:0);if(n===0)r!==null&&nu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&nu(r),t===1)e.tag===0?Bm(Yu.bind(null,e)):Qd(Yu.bind(null,e)),Om(function(){!(O&6)&&Wt()}),r=null;else{switch(Sd(n)){case 1:r=Yl;break;case 4:r=xd;break;case 16:r=ei;break;case 536870912:r=kd;break;default:r=ei}r=Qf(r,Uf.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Uf(e,t){if(Ho=-1,Vo=0,O&6)throw Error(E(327));var r=e.callbackNode;if(Or()&&e.callbackNode!==r)return null;var n=ti(e,e===le?ue:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=wi(e,n);else{t=n;var o=O;O|=2;var i=Hf();(le!==e||ue!==t)&&(st=null,Wr=Z()+500,ir(e,t));do try{ug();break}catch(l){Bf(e,l)}while(!0);ss(),gi.current=i,O=o,te!==null?t=0:(le=null,ue=0,t=oe)}if(t!==0){if(t===2&&(o=Xa(e),o!==0&&(n=o,t=El(e,o))),t===1)throw r=Kn,ir(e,0),$t(e,n),je(e,Z()),r;if(t===6)$t(e,n);else{if(o=e.current.alternate,!(n&30)&&!lg(o)&&(t=wi(e,n),t===2&&(i=Xa(e),i!==0&&(n=i,t=El(e,i))),t===1))throw r=Kn,ir(e,0),$t(e,n),je(e,Z()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(E(345));case 2:er(e,be,st);break;case 3:if($t(e,n),(n&130023424)===n&&(t=Ss+500-Z(),10<t)){if(ti(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){we(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=il(er.bind(null,e,be,st),t);break}er(e,be,st);break;case 4:if($t(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var a=31-Ke(n);i=1<<a,a=t[a],a>o&&(o=a),n&=~i}if(n=o,n=Z()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*ag(n/1960))-n,10<n){e.timeoutHandle=il(er.bind(null,e,be,st),n);break}er(e,be,st);break;case 5:er(e,be,st);break;default:throw Error(E(329))}}}return je(e,Z()),e.callbackNode===r?Uf.bind(null,e):null}function El(e,t){var r=Tn;return e.current.memoizedState.isDehydrated&&(ir(e,t).flags|=256),e=wi(e,t),e!==2&&(t=be,be=r,t!==null&&jl(t)),e}function jl(e){be===null?be=e:be.push.apply(be,e)}function lg(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!Ze(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~bs,t&=~Mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ke(t),n=1<<r;e[r]=-1,t&=~n}}function Yu(e){if(O&6)throw Error(E(327));Or();var t=ti(e,0);if(!(t&1))return je(e,Z()),null;var r=wi(e,t);if(e.tag!==0&&r===2){var n=Xa(e);n!==0&&(t=n,r=El(e,n))}if(r===1)throw r=Kn,ir(e,0),$t(e,t),je(e,Z()),r;if(r===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,er(e,be,st),je(e,Z()),null}function Cs(e,t){var r=O;O|=1;try{return e(t)}finally{O=r,O===0&&(Wr=Z()+500,Ii&&Wt())}}function fr(e){zt!==null&&zt.tag===0&&!(O&6)&&Or();var t=O;O|=1;var r=Fe.transition,n=A;try{if(Fe.transition=null,A=1,e)return e()}finally{A=n,Fe.transition=r,O=t,!(O&6)&&Wt()}}function Es(){_e=Tr.current,J(Tr)}function ir(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Lm(r)),te!==null)for(r=te.return;r!==null;){var n=r;switch(is(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ai();break;case 3:Hr(),J(Ce),J(me),hs();break;case 5:ps(n);break;case 4:Hr();break;case 13:J(Y);break;case 19:J(Y);break;case 10:us(n.type._context);break;case 22:case 23:Es()}r=r.return}if(le=e,te=e=Ot(e.current,null),ue=_e=t,oe=0,Kn=null,bs=Mi=dr=0,be=Tn=null,rr!==null){for(t=0;t<rr.length;t++)if(r=rr[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var a=i.next;i.next=o,n.next=a}r.pending=n}rr=null}return e}function Bf(e,t){do{var r=te;try{if(ss(),Ao.current=mi,hi){for(var n=K.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}hi=!1}if(cr=0,ie=ne=K=null,zn=!1,Jn=0,ks.current=null,r===null||r.return===null){oe=1,Kn=t,te=null;break}e:{var i=e,a=r.return,l=r,s=t;if(t=ue,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=l,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Mu(a);if(y!==null){y.flags&=-257,Lu(y,a,l,i,t),y.mode&1&&Nu(i,u,t),t=y,s=u;var x=t.updateQueue;if(x===null){var k=new Set;k.add(s),t.updateQueue=k}else x.add(s);break e}else{if(!(t&1)){Nu(i,u,t),js();break e}s=Error(E(426))}}else if(Q&&l.mode&1){var P=Mu(a);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Lu(P,a,l,i,t),as(Vr(s,l));break e}}i=s=Vr(s,l),oe!==4&&(oe=2),Tn===null?Tn=[i]:Tn.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Ef(i,s,t);Pu(i,p);break e;case 1:l=s;var d=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Mt===null||!Mt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=jf(i,l,t);Pu(i,w);break e}}i=i.return}while(i!==null)}Wf(r)}catch(S){t=S,te===r&&r!==null&&(te=r=r.return);continue}break}while(!0)}function Hf(){var e=gi.current;return gi.current=mi,e===null?mi:e}function js(){(oe===0||oe===3||oe===2)&&(oe=4),le===null||!(dr&268435455)&&!(Mi&268435455)||$t(le,ue)}function wi(e,t){var r=O;O|=2;var n=Hf();(le!==e||ue!==t)&&(st=null,ir(e,t));do try{sg();break}catch(o){Bf(e,o)}while(!0);if(ss(),O=r,gi.current=n,te!==null)throw Error(E(261));return le=null,ue=0,oe}function sg(){for(;te!==null;)Vf(te)}function ug(){for(;te!==null&&!Dh();)Vf(te)}function Vf(e){var t=Jf(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?Wf(e):te=t,ks.current=null}function Wf(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=rg(r,t),r!==null){r.flags&=32767,te=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,te=null;return}}else if(r=tg(r,t,_e),r!==null){te=r;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);oe===0&&(oe=5)}function er(e,t,r){var n=A,o=Fe.transition;try{Fe.transition=null,A=1,cg(e,t,r,n)}finally{Fe.transition=o,A=n}return null}function cg(e,t,r,n){do Or();while(zt!==null);if(O&6)throw Error(E(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(Vh(e,i),e===le&&(te=le=null,ue=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||zo||(zo=!0,Qf(ei,function(){return Or(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Fe.transition,Fe.transition=null;var a=A;A=1;var l=O;O|=4,ks.current=null,og(e,r),Ff(r,e),_m(nl),ri=!!rl,nl=rl=null,e.current=r,ig(r),Nh(),O=l,A=a,Fe.transition=i}else e.current=r;if(zo&&(zo=!1,zt=e,yi=o),i=e.pendingLanes,i===0&&(Mt=null),Oh(r.stateNode),je(e,Z()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(vi)throw vi=!1,e=Sl,Sl=null,e;return yi&1&&e.tag!==0&&Or(),i=e.pendingLanes,i&1?e===Cl?In++:(In=0,Cl=e):In=0,Wt(),null}function Or(){if(zt!==null){var e=Sd(yi),t=Fe.transition,r=A;try{if(Fe.transition=null,A=16>e?16:e,zt===null)var n=!1;else{if(e=zt,zt=null,yi=0,O&6)throw Error(E(331));var o=O;for(O|=4,_=e.current;_!==null;){var i=_,a=i.child;if(_.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(_=u;_!==null;){var h=_;switch(h.tag){case 0:case 11:case 15:_n(8,h,i)}var f=h.child;if(f!==null)f.return=h,_=f;else for(;_!==null;){h=_;var g=h.sibling,y=h.return;if(Mf(h),h===u){_=null;break}if(g!==null){g.return=y,_=g;break}_=y}}}var x=i.alternate;if(x!==null){var k=x.child;if(k!==null){x.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}_=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,_=a;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:_n(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,_=p;break e}_=i.return}}var d=e.current;for(_=d;_!==null;){a=_;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,_=m;else e:for(a=d;_!==null;){if(l=_,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ni(9,l)}}catch(S){q(l,l.return,S)}if(l===a){_=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,_=w;break e}_=l.return}}if(O=o,Wt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot($i,e)}catch{}n=!0}return n}finally{A=r,Fe.transition=t}}return!1}function Ku(e,t,r){t=Vr(r,t),t=Ef(e,t,1),e=Nt(e,t,1),t=we(),e!==null&&(ro(e,1,t),je(e,t))}function q(e,t,r){if(e.tag===3)Ku(e,e,r);else for(;t!==null;){if(t.tag===3){Ku(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Mt===null||!Mt.has(n))){e=Vr(r,e),e=jf(t,e,1),t=Nt(t,e,1),e=we(),t!==null&&(ro(t,1,e),je(t,e));break}}t=t.return}}function dg(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&r,le===e&&(ue&r)===r&&(oe===4||oe===3&&(ue&130023424)===ue&&500>Z()-Ss?ir(e,0):bs|=r),je(e,t)}function Gf(e,t){t===0&&(e.mode&1?(t=wo,wo<<=1,!(wo&130023424)&&(wo=4194304)):t=1);var r=we();e=gt(e,t),e!==null&&(ro(e,t,r),je(e,r))}function fg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Gf(e,r)}function pg(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(E(314))}n!==null&&n.delete(t),Gf(e,r)}var Jf;Jf=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Se=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Se=!1,eg(e,t,r);Se=!!(e.flags&131072)}else Se=!1,Q&&t.flags&1048576&&Yd(t,ui,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Bo(e,t),e=t.pendingProps;var o=Ar(t,me.current);Lr(t,r),o=gs(null,t,n,e,o,r);var i=vs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(n)?(i=!0,li(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ds(t),o.updater=Ri,t.stateNode=o,o._reactInternals=t,fl(t,n,e,r),t=ml(null,t,n,!0,i,r)):(t.tag=0,Q&&i&&os(t),ge(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Bo(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=mg(n),e=Je(n,e),o){case 0:t=hl(null,t,n,e,r);break e;case 1:t=Au(null,t,n,e,r);break e;case 11:t=Ou(null,t,n,e,r);break e;case 14:t=Fu(null,t,n,Je(n.type,e),r);break e}throw Error(E(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Je(n,o),hl(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Je(n,o),Au(e,t,n,o,r);case 3:e:{if(_f(t),e===null)throw Error(E(387));n=t.pendingProps,i=t.memoizedState,o=i.element,Zd(e,t),fi(t,n,null,r);var a=t.memoizedState;if(n=a.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Vr(Error(E(423)),t),t=Uu(e,t,n,r,o);break e}else if(n!==o){o=Vr(Error(E(424)),t),t=Uu(e,t,n,r,o);break e}else for(Te=Dt(t.stateNode.containerInfo.firstChild),Ie=t,Q=!0,Ye=null,r=nf(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ur(),n===o){t=vt(e,t,r);break e}ge(e,t,n,r)}t=t.child}return t;case 5:return of(t),e===null&&ul(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,ol(n,o)?a=null:i!==null&&ol(n,i)&&(t.flags|=32),zf(e,t),ge(e,t,a,r),t.child;case 6:return e===null&&ul(t),null;case 13:return Tf(e,t,r);case 4:return fs(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Br(t,null,n,r):ge(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Je(n,o),Ou(e,t,n,o,r);case 7:return ge(e,t,t.pendingProps,r),t.child;case 8:return ge(e,t,t.pendingProps.children,r),t.child;case 12:return ge(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,V(ci,n._currentValue),n._currentValue=a,i!==null)if(Ze(i.value,a)){if(i.children===o.children&&!Ce.current){t=vt(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===n){if(i.tag===1){s=pt(-1,r&-r),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}i.lanes|=r,s=i.alternate,s!==null&&(s.lanes|=r),cl(i.return,r,t),l.lanes|=r;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(E(341));a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),cl(a,r,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}ge(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,Lr(t,r),o=Ae(o),n=n(o),t.flags|=1,ge(e,t,n,r),t.child;case 14:return n=t.type,o=Je(n,t.pendingProps),o=Je(n.type,o),Fu(e,t,n,o,r);case 15:return $f(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Je(n,o),Bo(e,t),t.tag=1,Ee(n)?(e=!0,li(t)):e=!1,Lr(t,r),tf(t,n,o),fl(t,n,o,r),ml(null,t,n,!0,e,r);case 19:return If(e,t,r);case 22:return Pf(e,t,r)}throw Error(E(156,t.tag))};function Qf(e,t){return wd(e,t)}function hg(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,r,n){return new hg(e,t,r,n)}function $s(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mg(e){if(typeof e=="function")return $s(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gl)return 11;if(e===Jl)return 14}return 2}function Ot(e,t){var r=e.alternate;return r===null?(r=Oe(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Wo(e,t,r,n,o,i){var a=2;if(n=e,typeof e=="function")$s(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case kr:return ar(r.children,o,i,t);case Wl:a=8,o|=8;break;case Ma:return e=Oe(12,r,t,o|2),e.elementType=Ma,e.lanes=i,e;case La:return e=Oe(13,r,t,o),e.elementType=La,e.lanes=i,e;case Oa:return e=Oe(19,r,t,o),e.elementType=Oa,e.lanes=i,e;case rd:return Li(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ed:a=10;break e;case td:a=9;break e;case Gl:a=11;break e;case Jl:a=14;break e;case Ct:a=16,n=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Oe(a,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function ar(e,t,r,n){return e=Oe(7,e,n,t),e.lanes=r,e}function Li(e,t,r,n){return e=Oe(22,e,n,t),e.elementType=rd,e.lanes=r,e.stateNode={isHidden:!1},e}function ka(e,t,r){return e=Oe(6,e,null,t),e.lanes=r,e}function ba(e,t,r){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gg(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ra(0),this.expirationTimes=ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ra(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ps(e,t,r,n,o,i,a,l,s){return e=new gg(e,t,r,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Oe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ds(i),e}function vg(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Yf(e){if(!e)return Bt;e=e._reactInternals;e:{if(hr(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var r=e.type;if(Ee(r))return Jd(e,r,t)}return t}function Kf(e,t,r,n,o,i,a,l,s){return e=Ps(r,n,!0,e,o,i,a,l,s),e.context=Yf(null),r=e.current,n=we(),o=Lt(r),i=pt(n,o),i.callback=t??null,Nt(r,i,o),e.current.lanes=o,ro(e,o,n),je(e,n),e}function Oi(e,t,r,n){var o=t.current,i=we(),a=Lt(o);return r=Yf(r),t.context===null?t.context=r:t.pendingContext=r,t=pt(i,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Nt(o,t,a),e!==null&&(Xe(e,o,a,i),Fo(e,o,a)),a}function xi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function zs(e,t){Xu(e,t),(e=e.alternate)&&Xu(e,t)}function yg(){return null}var Xf=typeof reportError=="function"?reportError:function(e){console.error(e)};function _s(e){this._internalRoot=e}Fi.prototype.render=_s.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Oi(e,t,null,null)};Fi.prototype.unmount=_s.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fr(function(){Oi(null,e,null,null)}),t[mt]=null}};function Fi(e){this._internalRoot=e}Fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=jd();e={blockedOn:null,target:e,priority:t};for(var r=0;r<jt.length&&t!==0&&t<jt[r].priority;r++);jt.splice(r,0,e),r===0&&Pd(e)}};function Ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ai(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function qu(){}function wg(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var u=xi(a);i.call(u)}}var a=Kf(t,n,e,0,null,!1,!1,"",qu);return e._reactRootContainer=a,e[mt]=a.current,Bn(e.nodeType===8?e.parentNode:e),fr(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var l=n;n=function(){var u=xi(s);l.call(u)}}var s=Ps(e,0,!1,null,null,!1,!1,"",qu);return e._reactRootContainer=s,e[mt]=s.current,Bn(e.nodeType===8?e.parentNode:e),fr(function(){Oi(t,s,r,n)}),s}function Ui(e,t,r,n,o){var i=r._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=xi(a);l.call(s)}}Oi(t,a,e,o)}else a=wg(r,t,e,o,n);return xi(a)}Cd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=yn(t.pendingLanes);r!==0&&(Kl(t,r|1),je(t,Z()),!(O&6)&&(Wr=Z()+500,Wt()))}break;case 13:fr(function(){var n=gt(e,1);if(n!==null){var o=we();Xe(n,e,1,o)}}),zs(e,1)}};Xl=function(e){if(e.tag===13){var t=gt(e,134217728);if(t!==null){var r=we();Xe(t,e,134217728,r)}zs(e,134217728)}};Ed=function(e){if(e.tag===13){var t=Lt(e),r=gt(e,t);if(r!==null){var n=we();Xe(r,e,t,n)}zs(e,t)}};jd=function(){return A};$d=function(e,t){var r=A;try{return A=e,t()}finally{A=r}};Qa=function(e,t,r){switch(t){case"input":if(Ua(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=Ti(n);if(!o)throw Error(E(90));od(n),Ua(n,o)}}}break;case"textarea":ad(e,r);break;case"select":t=r.value,t!=null&&Rr(e,!!r.multiple,t,!1)}};pd=Cs;hd=fr;var xg={usingClientEntryPoint:!1,Events:[oo,Er,Ti,dd,fd,Cs]},mn={findFiberByHostInstance:tr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},kg={bundleType:mn.bundleType,version:mn.version,rendererPackageName:mn.rendererPackageName,rendererConfig:mn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=vd(e),e===null?null:e.stateNode},findFiberByHostInstance:mn.findFiberByHostInstance||yg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{$i=_o.inject(kg),it=_o}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xg;De.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ts(t))throw Error(E(200));return vg(e,t,null,r)};De.createRoot=function(e,t){if(!Ts(e))throw Error(E(299));var r=!1,n="",o=Xf;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ps(e,1,!1,null,null,r,!1,n,o),e[mt]=t.current,Bn(e.nodeType===8?e.parentNode:e),new _s(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=vd(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return fr(e)};De.hydrate=function(e,t,r){if(!Ai(t))throw Error(E(200));return Ui(null,e,t,!0,r)};De.hydrateRoot=function(e,t,r){if(!Ts(e))throw Error(E(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",a=Xf;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=Kf(t,null,e,1,r??null,o,!1,i,a),e[mt]=t.current,Bn(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Fi(t)};De.render=function(e,t,r){if(!Ai(t))throw Error(E(200));return Ui(null,e,t,!1,r)};De.unmountComponentAtNode=function(e){if(!Ai(e))throw Error(E(40));return e._reactRootContainer?(fr(function(){Ui(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};De.unstable_batchedUpdates=Cs;De.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ai(r))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ui(e,t,r,!1,n)};De.version="18.2.0-next-9e3b772b8-20220608";function qf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qf)}catch(e){console.error(e)}}qf(),Yc.exports=De;var bg=Yc.exports,Zf,Zu=bg;Zf=Zu.createRoot,Zu.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xn(){return Xn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Xn.apply(this,arguments)}var _t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(_t||(_t={}));const ec="popstate";function Sg(e){e===void 0&&(e={});function t(n,o){let{pathname:i,search:a,hash:l}=n.location;return $l("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:ki(o)}return Eg(t,r,null,e)}function re(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Is(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Cg(){return Math.random().toString(36).substr(2,8)}function tc(e,t){return{usr:e.state,key:e.key,idx:t}}function $l(e,t,r,n){return r===void 0&&(r=null),Xn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?tn(t):t,{state:r,key:t&&t.key||n||Cg()})}function ki(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function tn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Eg(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:i=!1}=n,a=o.history,l=_t.Pop,s=null,u=h();u==null&&(u=0,a.replaceState(Xn({},a.state,{idx:u}),""));function h(){return(a.state||{idx:null}).idx}function f(){l=_t.Pop;let P=h(),p=P==null?null:P-u;u=P,s&&s({action:l,location:k.location,delta:p})}function g(P,p){l=_t.Push;let d=$l(k.location,P,p);u=h()+1;let m=tc(d,u),w=k.createHref(d);try{a.pushState(m,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(w)}i&&s&&s({action:l,location:k.location,delta:1})}function y(P,p){l=_t.Replace;let d=$l(k.location,P,p);u=h();let m=tc(d,u),w=k.createHref(d);a.replaceState(m,"",w),i&&s&&s({action:l,location:k.location,delta:0})}function x(P){let p=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof P=="string"?P:ki(P);return re(p,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,p)}let k={get action(){return l},get location(){return e(o,a)},listen(P){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(ec,f),s=P,()=>{o.removeEventListener(ec,f),s=null}},createHref(P){return t(o,P)},createURL:x,encodeLocation(P){let p=x(P);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:y,go(P){return a.go(P)}};return k}var rc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(rc||(rc={}));function jg(e,t,r){r===void 0&&(r="/");let n=typeof t=="string"?tn(t):t,o=Rs(n.pathname||"/",r);if(o==null)return null;let i=ep(e);$g(i);let a=null;for(let l=0;a==null&&l<i.length;++l)a=Mg(i[l],Fg(o));return a}function ep(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(re(s.relativePath.startsWith(n),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(n.length));let u=Ft([n,s.relativePath]),h=r.concat(s);i.children&&i.children.length>0&&(re(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ep(i.children,t,h,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Dg(u,i.index),routesMeta:h})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of tp(i.path))o(i,a,s)}),t}function tp(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let a=tp(n.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function $g(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Ng(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Pg=/^:[\w-]+$/,zg=3,_g=2,Tg=1,Ig=10,Rg=-2,nc=e=>e==="*";function Dg(e,t){let r=e.split("/"),n=r.length;return r.some(nc)&&(n+=Rg),t&&(n+=_g),r.filter(o=>!nc(o)).reduce((o,i)=>o+(Pg.test(i)?zg:i===""?Tg:Ig),n)}function Ng(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function Mg(e,t){let{routesMeta:r}=e,n={},o="/",i=[];for(let a=0;a<r.length;++a){let l=r[a],s=a===r.length-1,u=o==="/"?t:t.slice(o.length)||"/",h=Lg({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!h)return null;Object.assign(n,h.params);let f=l.route;i.push({params:n,pathname:Ft([o,h.pathname]),pathnameBase:Vg(Ft([o,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(o=Ft([o,h.pathnameBase]))}return i}function Lg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Og(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:n.reduce((u,h,f)=>{let{paramName:g,isOptional:y}=h;if(g==="*"){let k=l[f]||"";a=i.slice(0,i.length-k.length).replace(/(.)\/+$/,"$1")}const x=l[f];return y&&!x?u[g]=void 0:u[g]=Ag(x||"",g),u},{}),pathname:i,pathnameBase:a,pattern:e}}function Og(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Is(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(n.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function Fg(e){try{return decodeURI(e)}catch(t){return Is(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ag(e,t){try{return decodeURIComponent(e)}catch(r){return Is(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),e}}function Rs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Ug(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?tn(e):e;return{pathname:r?r.startsWith("/")?r:Bg(r,t):t,search:Wg(n),hash:Gg(o)}}function Bg(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Sa(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hg(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function rp(e,t){let r=Hg(e);return t?r.map((n,o)=>o===e.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function np(e,t,r,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=tn(e):(o=Xn({},e),re(!o.pathname||!o.pathname.includes("?"),Sa("?","pathname","search",o)),re(!o.pathname||!o.pathname.includes("#"),Sa("#","pathname","hash",o)),re(!o.search||!o.search.includes("#"),Sa("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=r;else{let f=t.length-1;if(!n&&a.startsWith("..")){let g=a.split("/");for(;g[0]==="..";)g.shift(),f-=1;o.pathname=g.join("/")}l=f>=0?t[f]:"/"}let s=Ug(o,l),u=a&&a!=="/"&&a.endsWith("/"),h=(i||a===".")&&r.endsWith("/");return!s.pathname.endsWith("/")&&(u||h)&&(s.pathname+="/"),s}const Ft=e=>e.join("/").replace(/\/\/+/g,"/"),Vg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Wg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Gg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Jg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const op=["post","put","patch","delete"];new Set(op);const Qg=["get",...op];new Set(Qg);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qn(){return qn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},qn.apply(this,arguments)}const Ds=j.createContext(null),Yg=j.createContext(null),mr=j.createContext(null),Bi=j.createContext(null),gr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),ip=j.createContext(null);function Kg(e,t){let{relative:r}=t===void 0?{}:t;ao()||re(!1);let{basename:n,navigator:o}=j.useContext(mr),{hash:i,pathname:a,search:l}=sp(e,{relative:r}),s=a;return n!=="/"&&(s=a==="/"?n:Ft([n,a])),o.createHref({pathname:s,search:l,hash:i})}function ao(){return j.useContext(Bi)!=null}function lo(){return ao()||re(!1),j.useContext(Bi).location}function ap(e){j.useContext(mr).static||j.useLayoutEffect(e)}function lp(){let{isDataRoute:e}=j.useContext(gr);return e?uv():Xg()}function Xg(){ao()||re(!1);let e=j.useContext(Ds),{basename:t,future:r,navigator:n}=j.useContext(mr),{matches:o}=j.useContext(gr),{pathname:i}=lo(),a=JSON.stringify(rp(o,r.v7_relativeSplatPath)),l=j.useRef(!1);return ap(()=>{l.current=!0}),j.useCallback(function(u,h){if(h===void 0&&(h={}),!l.current)return;if(typeof u=="number"){n.go(u);return}let f=np(u,JSON.parse(a),i,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ft([t,f.pathname])),(h.replace?n.replace:n.push)(f,h.state,h)},[t,n,a,i,e])}function sp(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=j.useContext(mr),{matches:o}=j.useContext(gr),{pathname:i}=lo(),a=JSON.stringify(rp(o,n.v7_relativeSplatPath));return j.useMemo(()=>np(e,JSON.parse(a),i,r==="path"),[e,a,i,r])}function qg(e,t){return Zg(e,t)}function Zg(e,t,r,n){ao()||re(!1);let{navigator:o}=j.useContext(mr),{matches:i}=j.useContext(gr),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=lo(),h;if(t){var f;let P=typeof t=="string"?tn(t):t;s==="/"||(f=P.pathname)!=null&&f.startsWith(s)||re(!1),h=P}else h=u;let g=h.pathname||"/",y=s==="/"?g:g.slice(s.length)||"/",x=jg(e,{pathname:y}),k=ov(x&&x.map(P=>Object.assign({},P,{params:Object.assign({},l,P.params),pathname:Ft([s,o.encodeLocation?o.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?s:Ft([s,o.encodeLocation?o.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),i,r,n);return t&&k?j.createElement(Bi.Provider,{value:{location:qn({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:_t.Pop}},k):k}function ev(){let e=sv(),t=Jg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),r?j.createElement("pre",{style:o},r):null,null)}const tv=j.createElement(ev,null);class rv extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?j.createElement(gr.Provider,{value:this.props.routeContext},j.createElement(ip.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nv(e){let{routeContext:t,match:r,children:n}=e,o=j.useContext(Ds);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),j.createElement(gr.Provider,{value:t},n)}function ov(e,t,r,n){var o;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var i;if((i=r)!=null&&i.errors)e=r.matches;else return null}let a=e,l=(o=r)==null?void 0:o.errors;if(l!=null){let h=a.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id]));h>=0||re(!1),a=a.slice(0,Math.min(a.length,h+1))}let s=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let h=0;h<a.length;h++){let f=a[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=h),f.route.id){let{loaderData:g,errors:y}=r,x=f.route.loader&&g[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||x){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((h,f,g)=>{let y,x=!1,k=null,P=null;r&&(y=l&&f.route.id?l[f.route.id]:void 0,k=f.route.errorElement||tv,s&&(u<0&&g===0?(cv("route-fallback"),x=!0,P=null):u===g&&(x=!0,P=f.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,g+1)),d=()=>{let m;return y?m=k:x?m=P:f.route.Component?m=j.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=h,j.createElement(nv,{match:f,routeContext:{outlet:h,matches:p,isDataRoute:r!=null},children:m})};return r&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?j.createElement(rv,{location:r.location,revalidation:r.revalidation,component:k,error:y,children:d(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):d()},null)}var up=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(up||{}),cp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(cp||{});function iv(e){let t=j.useContext(Ds);return t||re(!1),t}function av(e){let t=j.useContext(Yg);return t||re(!1),t}function lv(e){let t=j.useContext(gr);return t||re(!1),t}function dp(e){let t=lv(),r=t.matches[t.matches.length-1];return r.route.id||re(!1),r.route.id}function sv(){var e;let t=j.useContext(ip),r=av(),n=dp();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function uv(){let{router:e}=iv(up.UseNavigateStable),t=dp(cp.UseNavigateStable),r=j.useRef(!1);return ap(()=>{r.current=!0}),j.useCallback(function(o,i){i===void 0&&(i={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,qn({fromRouteId:t},i)))},[e,t])}const oc={};function cv(e,t,r){oc[e]||(oc[e]=!0)}function xn(e){re(!1)}function dv(e){let{basename:t="/",children:r=null,location:n,navigationType:o=_t.Pop,navigator:i,static:a=!1,future:l}=e;ao()&&re(!1);let s=t.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:s,navigator:i,static:a,future:qn({v7_relativeSplatPath:!1},l)}),[s,l,i,a]);typeof n=="string"&&(n=tn(n));let{pathname:h="/",search:f="",hash:g="",state:y=null,key:x="default"}=n,k=j.useMemo(()=>{let P=Rs(h,s);return P==null?null:{location:{pathname:P,search:f,hash:g,state:y,key:x},navigationType:o}},[s,h,f,g,y,x,o]);return k==null?null:j.createElement(mr.Provider,{value:u},j.createElement(Bi.Provider,{children:r,value:k}))}function fv(e){let{children:t,location:r}=e;return qg(Pl(t),r)}new Promise(()=>{});function Pl(e,t){t===void 0&&(t=[]);let r=[];return j.Children.forEach(e,(n,o)=>{if(!j.isValidElement(n))return;let i=[...t,o];if(n.type===j.Fragment){r.push.apply(r,Pl(n.props.children,i));return}n.type!==xn&&re(!1),!n.props.index||!n.props.children||re(!1);let a={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=Pl(n.props.children,i)),r.push(a)}),r}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zl(){return zl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},zl.apply(this,arguments)}function pv(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function hv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mv(e,t){return e.button===0&&(!t||t==="_self")&&!hv(e)}const gv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],vv="6";try{window.__reactRouterVersion=vv}catch{}const yv="startTransition",ic=fh[yv];function wv(e){let{basename:t,children:r,future:n,window:o}=e,i=j.useRef();i.current==null&&(i.current=Sg({window:o,v5Compat:!0}));let a=i.current,[l,s]=j.useState({action:a.action,location:a.location}),{v7_startTransition:u}=n||{},h=j.useCallback(f=>{u&&ic?ic(()=>s(f)):s(f)},[s,u]);return j.useLayoutEffect(()=>a.listen(h),[a,h]),j.createElement(dv,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:a,future:n})}const xv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,so=j.forwardRef(function(t,r){let{onClick:n,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:h,unstable_viewTransition:f}=t,g=pv(t,gv),{basename:y}=j.useContext(mr),x,k=!1;if(typeof u=="string"&&kv.test(u)&&(x=u,xv))try{let m=new URL(window.location.href),w=u.startsWith("//")?new URL(m.protocol+u):new URL(u),S=Rs(w.pathname,y);w.origin===m.origin&&S!=null?u=S+w.search+w.hash:k=!0}catch{}let P=Kg(u,{relative:o}),p=bv(u,{replace:a,state:l,target:s,preventScrollReset:h,relative:o,unstable_viewTransition:f});function d(m){n&&n(m),m.defaultPrevented||p(m)}return j.createElement("a",zl({},g,{href:x||P,onClick:k||i?n:d,ref:r,target:s}))});var ac;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ac||(ac={}));var lc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(lc||(lc={}));function bv(e,t){let{target:r,replace:n,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l}=t===void 0?{}:t,s=lp(),u=lo(),h=sp(e,{relative:a});return j.useCallback(f=>{if(mv(f,r)){f.preventDefault();let g=n!==void 0?n:ki(u)===ki(h);s(e,{replace:g,state:o,preventScrollReset:i,relative:a,unstable_viewTransition:l})}},[u,s,h,n,o,r,e,i,a,l])}var he=function(){return he=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},he.apply(this,arguments)};function Gr(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var G="-ms-",Rn="-moz-",F="-webkit-",fp="comm",Hi="rule",Ns="decl",Sv="@import",pp="@keyframes",Cv="@layer",hp=Math.abs,Ms=String.fromCharCode,_l=Object.assign;function Ev(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function mp(e){return e.trim()}function ut(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,r){return e.replace(t,r)}function Go(e,t,r){return e.indexOf(t,r)}function ae(e,t){return e.charCodeAt(t)|0}function Jr(e,t,r){return e.slice(t,r)}function rt(e){return e.length}function gp(e){return e.length}function kn(e,t){return t.push(e),e}function jv(e,t){return e.map(t).join("")}function sc(e,t){return e.filter(function(r){return!ut(r,t)})}var Vi=1,Qr=1,vp=0,Be=0,ee=0,rn="";function Wi(e,t,r,n,o,i,a,l){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Vi,column:Qr,length:a,return:"",siblings:l}}function St(e,t){return _l(Wi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function yr(e){for(;e.root;)e=St(e.root,{children:[e]});kn(e,e.siblings)}function $v(){return ee}function Pv(){return ee=Be>0?ae(rn,--Be):0,Qr--,ee===10&&(Qr=1,Vi--),ee}function qe(){return ee=Be<vp?ae(rn,Be++):0,Qr++,ee===10&&(Qr=1,Vi++),ee}function lr(){return ae(rn,Be)}function Jo(){return Be}function Gi(e,t){return Jr(rn,e,t)}function Tl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function zv(e){return Vi=Qr=1,vp=rt(rn=e),Be=0,[]}function _v(e){return rn="",e}function Ca(e){return mp(Gi(Be-1,Il(e===91?e+2:e===40?e+1:e)))}function Tv(e){for(;(ee=lr())&&ee<33;)qe();return Tl(e)>2||Tl(ee)>3?"":" "}function Iv(e,t){for(;--t&&qe()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Gi(e,Jo()+(t<6&&lr()==32&&qe()==32))}function Il(e){for(;qe();)switch(ee){case e:return Be;case 34:case 39:e!==34&&e!==39&&Il(ee);break;case 40:e===41&&Il(e);break;case 92:qe();break}return Be}function Rv(e,t){for(;qe()&&e+ee!==57;)if(e+ee===84&&lr()===47)break;return"/*"+Gi(t,Be-1)+"*"+Ms(e===47?e:qe())}function Dv(e){for(;!Tl(lr());)qe();return Gi(e,Be)}function Nv(e){return _v(Qo("",null,null,null,[""],e=zv(e),0,[0],e))}function Qo(e,t,r,n,o,i,a,l,s){for(var u=0,h=0,f=a,g=0,y=0,x=0,k=1,P=1,p=1,d=0,m="",w=o,S=i,$=n,C=m;P;)switch(x=d,d=qe()){case 40:if(x!=108&&ae(C,f-1)==58){Go(C+=N(Ca(d),"&","&\f"),"&\f",hp(u?l[u-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:C+=Ca(d);break;case 9:case 10:case 13:case 32:C+=Tv(x);break;case 92:C+=Iv(Jo()-1,7);continue;case 47:switch(lr()){case 42:case 47:kn(Mv(Rv(qe(),Jo()),t,r,s),s);break;default:C+="/"}break;case 123*k:l[u++]=rt(C)*p;case 125*k:case 59:case 0:switch(d){case 0:case 125:P=0;case 59+h:p==-1&&(C=N(C,/\f/g,"")),y>0&&rt(C)-f&&kn(y>32?cc(C+";",n,r,f-1,s):cc(N(C," ","")+";",n,r,f-2,s),s);break;case 59:C+=";";default:if(kn($=uc(C,t,r,u,h,o,l,m,w=[],S=[],f,i),i),d===123)if(h===0)Qo(C,t,$,$,w,i,f,l,S);else switch(g===99&&ae(C,3)===110?100:g){case 100:case 108:case 109:case 115:Qo(e,$,$,n&&kn(uc(e,$,$,0,0,o,l,m,o,w=[],f,S),S),o,S,f,l,n?w:S);break;default:Qo(C,$,$,$,[""],S,0,l,S)}}u=h=y=0,k=p=1,m=C="",f=a;break;case 58:f=1+rt(C),y=x;default:if(k<1){if(d==123)--k;else if(d==125&&k++==0&&Pv()==125)continue}switch(C+=Ms(d),d*k){case 38:p=h>0?1:(C+="\f",-1);break;case 44:l[u++]=(rt(C)-1)*p,p=1;break;case 64:lr()===45&&(C+=Ca(qe())),g=lr(),h=f=rt(m=C+=Dv(Jo())),d++;break;case 45:x===45&&rt(C)==2&&(k=0)}}return i}function uc(e,t,r,n,o,i,a,l,s,u,h,f){for(var g=o-1,y=o===0?i:[""],x=gp(y),k=0,P=0,p=0;k<n;++k)for(var d=0,m=Jr(e,g+1,g=hp(P=a[k])),w=e;d<x;++d)(w=mp(P>0?y[d]+" "+m:N(m,/&\f/g,y[d])))&&(s[p++]=w);return Wi(e,t,r,o===0?Hi:l,s,u,h,f)}function Mv(e,t,r,n){return Wi(e,t,r,fp,Ms($v()),Jr(e,2,-2),0,n)}function cc(e,t,r,n,o){return Wi(e,t,r,Ns,Jr(e,0,n),Jr(e,n+1,-1),n,o)}function yp(e,t,r){switch(Ev(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+e+e;case 4789:return Rn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Rn+e+G+e+e;case 5936:switch(ae(e,t+11)){case 114:return F+e+G+N(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+G+N(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+G+N(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+G+e+e;case 6165:return F+e+G+"flex-"+e+e;case 5187:return F+e+N(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return F+e+G+"flex-item-"+N(e,/flex-|-self/g,"")+(ut(e,/flex-|baseline/)?"":G+"grid-row-"+N(e,/flex-|-self/g,""))+e;case 4675:return F+e+G+"flex-line-pack"+N(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+G+N(e,"shrink","negative")+e;case 5292:return F+e+G+N(e,"basis","preferred-size")+e;case 6060:return F+"box-"+N(e,"-grow","")+F+e+G+N(e,"grow","positive")+e;case 4554:return F+N(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return N(N(N(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+e+e;case 4200:if(!ut(e,/flex-|baseline/))return G+"grid-column-align"+Jr(e,t)+e;break;case 2592:case 3360:return G+N(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,ut(n.props,/grid-\w+-end/)})?~Go(e+(r=r[t].value),"span",0)?e:G+N(e,"-start","")+e+G+"grid-row-span:"+(~Go(r,"span",0)?ut(r,/\d+/):+ut(r,/\d+/)-+ut(e,/\d+/))+";":G+N(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return ut(n.props,/grid-\w+-start/)})?e:G+N(N(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rt(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Rn+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Go(e,"stretch",0)?yp(N(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,a,l,s,u){return G+o+":"+i+u+(a?G+o+"-span:"+(l?s:+s-+i)+u:"")+e});case 4949:if(ae(e,t+6)===121)return N(e,":",":"+F)+e;break;case 6444:switch(ae(e,ae(e,14)===45?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(ae(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+G+"$2box$3")+e;case 100:return N(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,"scroll-","scroll-snap-")+e}return e}function bi(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Lv(e,t,r,n){switch(e.type){case Cv:if(e.children.length)break;case Sv:case Ns:return e.return=e.return||e.value;case fp:return"";case pp:return e.return=e.value+"{"+bi(e.children,n)+"}";case Hi:if(!rt(e.value=e.props.join(",")))return""}return rt(r=bi(e.children,n))?e.return=e.value+"{"+r+"}":""}function Ov(e){var t=gp(e);return function(r,n,o,i){for(var a="",l=0;l<t;l++)a+=e[l](r,n,o,i)||"";return a}}function Fv(e){return function(t){t.root||(t=t.return)&&e(t)}}function Av(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Ns:e.return=yp(e.value,e.length,r);return;case pp:return bi([St(e,{value:N(e.value,"@","@"+F)})],n);case Hi:if(e.length)return jv(r=e.props,function(o){switch(ut(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":yr(St(e,{props:[N(o,/:(read-\w+)/,":"+Rn+"$1")]})),yr(St(e,{props:[o]})),_l(e,{props:sc(r,n)});break;case"::placeholder":yr(St(e,{props:[N(o,/:(plac\w+)/,":"+F+"input-$1")]})),yr(St(e,{props:[N(o,/:(plac\w+)/,":"+Rn+"$1")]})),yr(St(e,{props:[N(o,/:(plac\w+)/,G+"input-$1")]})),yr(St(e,{props:[o]})),_l(e,{props:sc(r,n)});break}return""})}}var Uv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ze={},Yr=typeof process<"u"&&ze!==void 0&&(ze.REACT_APP_SC_ATTR||ze.SC_ATTR)||"data-styled",wp="active",xp="data-styled-version",Ji="6.1.8",Ls=`/*!sc*/
`,Os=typeof window<"u"&&"HTMLElement"in window,Bv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ze!==void 0&&ze.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ze.REACT_APP_SC_DISABLE_SPEEDY!==""?ze.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ze.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ze!==void 0&&ze.SC_DISABLE_SPEEDY!==void 0&&ze.SC_DISABLE_SPEEDY!==""&&ze.SC_DISABLE_SPEEDY!=="false"&&ze.SC_DISABLE_SPEEDY),Hv={},Qi=Object.freeze([]),Kr=Object.freeze({});function kp(e,t,r){return r===void 0&&(r=Kr),e.theme!==r.theme&&e.theme||t||r.theme}var bp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Vv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Wv=/(^-|-$)/g;function dc(e){return e.replace(Vv,"-").replace(Wv,"")}var Gv=/(a)(d)/gi,To=52,fc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Rl(e){var t,r="";for(t=Math.abs(e);t>To;t=t/To|0)r=fc(t%To)+r;return(fc(t%To)+r).replace(Gv,"$1-$2")}var Ea,Sp=5381,Ir=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Cp=function(e){return Ir(Sp,e)};function Fs(e){return Rl(Cp(e)>>>0)}function Jv(e){return e.displayName||e.name||"Component"}function ja(e){return typeof e=="string"&&!0}var Ep=typeof Symbol=="function"&&Symbol.for,jp=Ep?Symbol.for("react.memo"):60115,Qv=Ep?Symbol.for("react.forward_ref"):60112,Yv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Kv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$p={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xv=((Ea={})[Qv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ea[jp]=$p,Ea);function pc(e){return("type"in(t=e)&&t.type.$$typeof)===jp?$p:"$$typeof"in e?Xv[e.$$typeof]:Yv;var t}var qv=Object.defineProperty,Zv=Object.getOwnPropertyNames,hc=Object.getOwnPropertySymbols,e0=Object.getOwnPropertyDescriptor,t0=Object.getPrototypeOf,mc=Object.prototype;function Pp(e,t,r){if(typeof t!="string"){if(mc){var n=t0(t);n&&n!==mc&&Pp(e,n,r)}var o=Zv(t);hc&&(o=o.concat(hc(t)));for(var i=pc(e),a=pc(t),l=0;l<o.length;++l){var s=o[l];if(!(s in Kv||r&&r[s]||a&&s in a||i&&s in i)){var u=e0(t,s);try{qv(e,s,u)}catch{}}}}return e}function Xr(e){return typeof e=="function"}function As(e){return typeof e=="object"&&"styledComponentId"in e}function or(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Si(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Zn(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Dl(e,t,r){if(r===void 0&&(r=!1),!r&&!Zn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Dl(e[n],t[n]);else if(Zn(t))for(var n in t)e[n]=Dl(e[n],t[n]);return e}function Us(e,t){Object.defineProperty(e,"toString",{value:t})}function uo(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var r0=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw uo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),s=(a=0,r.length);a<s;a++)this.tag.insertRule(l,r[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,a=o;a<i;a++)r+="".concat(this.tag.getRule(a)).concat(Ls);return r},e}(),Yo=new Map,Ci=new Map,Ko=1,Io=function(e){if(Yo.has(e))return Yo.get(e);for(;Ci.has(Ko);)Ko++;var t=Ko++;return Yo.set(e,t),Ci.set(t,e),t},n0=function(e,t){Ko=t+1,Yo.set(e,t),Ci.set(t,e)},o0="style[".concat(Yr,"][").concat(xp,'="').concat(Ji,'"]'),i0=new RegExp("^".concat(Yr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),a0=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},l0=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Ls),o=[],i=0,a=n.length;i<a;i++){var l=n[i].trim();if(l){var s=l.match(i0);if(s){var u=0|parseInt(s[1],10),h=s[2];u!==0&&(n0(h,u),a0(e,h,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}};function s0(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var zp=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(l){var s=Array.from(l.querySelectorAll("style[".concat(Yr,"]")));return s[s.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(Yr,wp),n.setAttribute(xp,Ji);var a=s0();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},u0=function(){function e(t){this.element=zp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var a=n[o];if(a.ownerNode===r)return a}throw uo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),c0=function(){function e(t){this.element=zp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),d0=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),gc=Os,f0={isServer:!Os,useCSSOMInjection:!Bv},Ei=function(){function e(t,r,n){t===void 0&&(t=Kr),r===void 0&&(r={});var o=this;this.options=he(he({},f0),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Os&&gc&&(gc=!1,function(i){for(var a=document.querySelectorAll(o0),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(Yr)!==wp&&(l0(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Us(this,function(){return function(i){for(var a=i.getTag(),l=a.length,s="",u=function(f){var g=function(p){return Ci.get(p)}(f);if(g===void 0)return"continue";var y=i.names.get(g),x=a.getGroup(f);if(y===void 0||x.length===0)return"continue";var k="".concat(Yr,".g").concat(f,'[id="').concat(g,'"]'),P="";y!==void 0&&y.forEach(function(p){p.length>0&&(P+="".concat(p,","))}),s+="".concat(x).concat(k,'{content:"').concat(P,'"}').concat(Ls)},h=0;h<l;h++)u(h);return s}(o)})}return e.registerId=function(t){return Io(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(he(he({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new d0(o):n?new u0(o):new c0(o)}(this.options),new r0(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(Io(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(Io(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Io(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),p0=/&/g,h0=/^\s*\/\/.*$/gm;function _p(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=_p(r.children,t)),r})}function m0(e){var t,r,n,o=Kr,i=o.options,a=i===void 0?Kr:i,l=o.plugins,s=l===void 0?Qi:l,u=function(g,y,x){return x.startsWith(r)&&x.endsWith(r)&&x.replaceAll(r,"").length>0?".".concat(t):g},h=s.slice();h.push(function(g){g.type===Hi&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(p0,r).replace(n,u))}),a.prefix&&h.push(Av),h.push(Lv);var f=function(g,y,x,k){y===void 0&&(y=""),x===void 0&&(x=""),k===void 0&&(k="&"),t=k,r=y,n=new RegExp("\\".concat(r,"\\b"),"g");var P=g.replace(h0,""),p=Nv(x||y?"".concat(x," ").concat(y," { ").concat(P," }"):P);a.namespace&&(p=_p(p,a.namespace));var d=[];return bi(p,Ov(h.concat(Fv(function(m){return d.push(m)})))),d};return f.hash=s.length?s.reduce(function(g,y){return y.name||uo(15),Ir(g,y.name)},Sp).toString():"",f}var g0=new Ei,Nl=m0(),Tp=ot.createContext({shouldForwardProp:void 0,styleSheet:g0,stylis:Nl});Tp.Consumer;ot.createContext(void 0);function Ml(){return j.useContext(Tp)}var Ip=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Nl);var a=n.name+i.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,i(n.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Us(this,function(){throw uo(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Nl),this.name+t.hash},e}(),v0=function(e){return e>="A"&&e<="Z"};function vc(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;v0(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Rp=function(e){return e==null||e===!1||e===""},Dp=function(e){var t,r,n=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Rp(i)&&(Array.isArray(i)&&i.isCss||Xr(i)?n.push("".concat(vc(o),":"),i,";"):Zn(i)?n.push.apply(n,Gr(Gr(["".concat(o," {")],Dp(i),!1),["}"],!1)):n.push("".concat(vc(o),": ").concat((t=o,(r=i)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Uv||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function At(e,t,r,n){if(Rp(e))return[];if(As(e))return[".".concat(e.styledComponentId)];if(Xr(e)){if(!Xr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return At(o,t,r,n)}var i;return e instanceof Ip?r?(e.inject(r,n),[e.getName(n)]):[e]:Zn(e)?Dp(e):Array.isArray(e)?Array.prototype.concat.apply(Qi,e.map(function(a){return At(a,t,r,n)})):[e.toString()]}function Np(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Xr(r)&&!As(r))return!1}return!0}var y0=Cp(Ji),w0=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&Np(t),this.componentId=r,this.baseHash=Ir(y0,r),this.baseStyle=n,Ei.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=or(o,this.staticRulesId);else{var i=Si(At(this.rules,t,r,n)),a=Rl(Ir(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,a)){var l=n(i,".".concat(a),void 0,this.componentId);r.insertRules(this.componentId,a,l)}o=or(o,a),this.staticRulesId=a}else{for(var s=Ir(this.baseHash,n.hash),u="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")u+=f;else if(f){var g=Si(At(f,t,r,n));s=Ir(s,g+h),u+=g}}if(u){var y=Rl(s>>>0);r.hasNameForId(this.componentId,y)||r.insertRules(this.componentId,y,n(u,".".concat(y),void 0,this.componentId)),o=or(o,y)}}return o},e}(),Bs=ot.createContext(void 0);Bs.Consumer;var $a={};function x0(e,t,r){var n=As(e),o=e,i=!ja(e),a=t.attrs,l=a===void 0?Qi:a,s=t.componentId,u=s===void 0?function(w,S){var $=typeof w!="string"?"sc":dc(w);$a[$]=($a[$]||0)+1;var C="".concat($,"-").concat(Fs(Ji+$+$a[$]));return S?"".concat(S,"-").concat(C):C}(t.displayName,t.parentComponentId):s,h=t.displayName,f=h===void 0?function(w){return ja(w)?"styled.".concat(w):"Styled(".concat(Jv(w),")")}(e):h,g=t.displayName&&t.componentId?"".concat(dc(t.displayName),"-").concat(t.componentId):t.componentId||u,y=n&&o.attrs?o.attrs.concat(l).filter(Boolean):l,x=t.shouldForwardProp;if(n&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;x=function(w,S){return k(w,S)&&P(w,S)}}else x=k}var p=new w0(r,g,n?o.componentStyle:void 0);function d(w,S){return function($,C,T){var H=$.attrs,M=$.componentStyle,$e=$.defaultProps,Jt=$.foldedComponentIds,Qt=$.styledComponentId,fo=$.target,Yi=ot.useContext(Bs),an=Ml(),Yt=$.shouldForwardProp||an.shouldForwardProp,z=kp(C,Yi,$e)||Kr,I=function(wt,Pe,lt){for(var ln,Xt=he(he({},Pe),{className:void 0,theme:lt}),Ki=0;Ki<wt.length;Ki+=1){var po=Xr(ln=wt[Ki])?ln(Xt):ln;for(var xt in po)Xt[xt]=xt==="className"?or(Xt[xt],po[xt]):xt==="style"?he(he({},Xt[xt]),po[xt]):po[xt]}return Pe.className&&(Xt.className=or(Xt.className,Pe.className)),Xt}(H,C,z),D=I.as||fo,U={};for(var B in I)I[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&I.theme===z||(B==="forwardedAs"?U.as=I.forwardedAs:Yt&&!Yt(B,D)||(U[B]=I[B]));var Kt=function(wt,Pe){var lt=Ml(),ln=wt.generateAndInjectStyles(Pe,lt.styleSheet,lt.stylis);return ln}(M,I),Ve=or(Jt,Qt);return Kt&&(Ve+=" "+Kt),I.className&&(Ve+=" "+I.className),U[ja(D)&&!bp.has(D)?"class":"className"]=Ve,U.ref=T,j.createElement(D,U)}(m,w,S)}d.displayName=f;var m=ot.forwardRef(d);return m.attrs=y,m.componentStyle=p,m.displayName=f,m.shouldForwardProp=x,m.foldedComponentIds=n?or(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=g,m.target=n?o.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=n?function(S){for(var $=[],C=1;C<arguments.length;C++)$[C-1]=arguments[C];for(var T=0,H=$;T<H.length;T++)Dl(S,H[T],!0);return S}({},o.defaultProps,w):w}}),Us(m,function(){return".".concat(m.styledComponentId)}),i&&Pp(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function yc(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var wc=function(e){return Object.assign(e,{isCss:!0})};function ye(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Xr(e)||Zn(e))return wc(At(yc(Qi,Gr([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?At(n):wc(At(yc(n,t)))}function Ll(e,t,r){if(r===void 0&&(r=Kr),!t)throw uo(1,t);var n=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,r,ye.apply(void 0,Gr([o],i,!1)))};return n.attrs=function(o){return Ll(e,t,he(he({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Ll(e,t,he(he({},r),o))},n}var Mp=function(e){return Ll(x0,e)},v=Mp;bp.forEach(function(e){v[e]=Mp(e)});var k0=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=Np(t),Ei.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(Si(At(this.rules,r,n,o)),""),a=this.componentId+t;n.insertRules(a,a,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&Ei.registerId(this.componentId+t),this.removeStyles(t,n),this.createStyles(t,r,n,o)},e}();function b0(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=ye.apply(void 0,Gr([e],t,!1)),o="sc-global-".concat(Fs(JSON.stringify(n))),i=new k0(n,o),a=function(s){var u=Ml(),h=ot.useContext(Bs),f=ot.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&l(f,s,u.styleSheet,h,u.stylis),ot.useLayoutEffect(function(){if(!u.styleSheet.server)return l(f,s,u.styleSheet,h,u.stylis),function(){return i.removeStyles(f,u.styleSheet)}},[f,s,u.styleSheet,h,u.stylis]),null};function l(s,u,h,f,g){if(i.isStatic)i.renderStyles(s,Hv,h,g);else{var y=he(he({},u),{theme:kp(u,f,a.defaultProps)});i.renderStyles(s,y,h,g)}}return ot.memo(a)}function He(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Si(ye.apply(void 0,Gr([e],t,!1))),o=Fs(n);return new Ip(o,n)}const S0=.15,R=768,xc=300,Lp=[{label:"Home",href:"/",external:!1},{label:"About Me",href:"/about",external:!1},{label:"Projects",href:"/projects",external:!1},{label:"Contact",href:"/contact",external:!1},{label:"GitHub",href:"https://github.com",external:!0},{label:"Resume",href:"/resume.pdf",external:!0}],Op=({threshold:e=S0,enabled:t=!0}={})=>{const[r,n]=j.useState(0),o=j.useCallback(()=>{n(window.scrollY)},[]);j.useEffect(()=>t?(n(window.scrollY),window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)):()=>{},[t,o]);const i=typeof window<"u"?window.innerHeight*e:0,a=t?Math.min(1,Math.max(0,r/i)):1;return{visibility:a,isVisible:a>0,scrollY:r}},C0=v(so)`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
  color: var(--color-text);
  transition: opacity var(--transition-fast);

  &:hover {
    opacity: 0.7;
  }
`,E0=v.div`
  width: 32px;
  height: 32px;
  border-radius: var(--radius-md);
  background: var(--color-gray-800);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-sm);
`,j0=v.span`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-tight);
`,Fp=({icon:e=null})=>c.jsxs(C0,{to:"/",children:[e??c.jsx(E0,{children:"S"}),c.jsx(j0,{children:"Sandbox"})]}),Ap=ye`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-50);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition:
    background var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    background: var(--color-accent-subtle);
    color: var(--color-accent);
  }
`,$0=v(so)`
  ${Ap}
`,P0=v.a`
  ${Ap}
`,z0=v.span`
  font-size: var(--font-size-xs);
  opacity: 0.5;
`,Up=({href:e,children:t,external:r=!1,onClick:n=()=>{}})=>r?c.jsxs(P0,{href:e,target:"_blank",rel:"noopener noreferrer",onClick:n,children:[t,c.jsx(z0,{"aria-hidden":"true",children:"↗"})]}):c.jsx($0,{to:e,onClick:n,children:t}),_0=v.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  padding: var(--spacing-sm);
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--transition-fast);

  &:hover {
    background: var(--color-accent-subtle);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
`,Pa=v.span`
  display: block;
  width: 20px;
  height: 2px;
  background: var(--color-text);
  border-radius: 1px;
  transition:
    transform var(--transition-fast),
    opacity var(--transition-fast);

  &:nth-child(1) {
    transform: ${({$isOpen:e})=>e?"translateY(6px) rotate(45deg)":"translateY(-6px)"};
  }

  &:nth-child(2) {
    opacity: ${({$isOpen:e})=>e?0:1};
  }

  &:nth-child(3) {
    transform: ${({$isOpen:e})=>e?"translateY(-6px) rotate(-45deg)":"translateY(6px)"};
  }
`,T0=({isOpen:e,onClick:t})=>c.jsxs(_0,{$isOpen:e,onClick:t,"aria-label":e?"Close menu":"Open menu","aria-expanded":e,children:[c.jsx(Pa,{$isOpen:e}),c.jsx(Pa,{$isOpen:e}),c.jsx(Pa,{$isOpen:e})]}),I0=He`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,R0=He`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,D0=v.div`
  position: fixed;
  inset: 0;
  z-index: calc(var(--z-nav) + 1);
  background: var(--color-background);
  display: ${({$isOpen:e})=>e?"flex":"none"};
  flex-direction: column;
  animation: ${I0} var(--transition-fast) ease-out;

  /* Grain texture to match background */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.35;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncR type='linear' slope='1.5' intercept='-0.25'/%3E%3CfeFuncG type='linear' slope='1.5' intercept='-0.25'/%3E%3CfeFuncB type='linear' slope='1.5' intercept='-0.25'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 256px 256px;
  }
`,N0=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg) var(--spacing-xl);
  position: relative;
  z-index: 1;
`,M0=v.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: var(--font-size-xl);
  color: var(--color-gray-50);
  transition:
    background var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    background: var(--color-accent-subtle);
    color: var(--color-accent);
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
`,L0=v.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-2xl);
  position: relative;
  z-index: 1;
`,O0=v.div`
  animation: ${R0} var(--transition-normal) ease-out;
  animation-delay: ${({$index:e})=>e*50}ms;
  animation-fill-mode: both;
`,F0=v(Up)`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  padding: var(--spacing-md) var(--spacing-xl);
`,A0=({isOpen:e,onClose:t})=>(j.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),j.useEffect(()=>{const r=n=>{n.key==="Escape"&&e&&t()};return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[e,t]),e?c.jsxs(D0,{$isOpen:e,role:"dialog","aria-modal":"true","aria-label":"Navigation menu",children:[c.jsxs(N0,{children:[c.jsx(Fp,{}),c.jsx(M0,{onClick:t,"aria-label":"Close menu",children:"×"})]}),c.jsx(L0,{children:Lp.map((r,n)=>c.jsx(O0,{$index:n,children:c.jsx(F0,{href:r.href,external:r.external,onClick:t,children:r.label})},r.href))})]}):null),U0=v.header`
  position: fixed;
  top: var(--viewport-inset);
  left: var(--viewport-inset);
  right: var(--viewport-inset);
  z-index: var(--z-nav);
  opacity: ${({$visibility:e})=>e};
  transform: translateY(${({$visibility:e})=>(e-1)*20}px);
  pointer-events: ${({$visibility:e})=>e>.1?"auto":"none"};
  transition:
    opacity ${xc}ms ease,
    transform ${xc}ms ease;
`,B0=v.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-lg);
  background: rgba(17, 34, 64, 0.9);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-gray-700);

  /* Grain texture overlay */
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.12;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 256px 256px;
  }
`,H0=v.div`
  position: relative;
  z-index: 1;
`,V0=v.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  position: relative;
  z-index: 1;

  @media (max-width: ${R}px) {
    display: none;
  }
`,W0=v.div`
  position: relative;
  z-index: 1;
  display: none;

  @media (max-width: ${R}px) {
    display: block;
  }
`,G0=({scrollBased:e=!1})=>{const[t,r]=j.useState(!1),o=lo().pathname==="/",i=e&&o,{visibility:a}=Op({enabled:i}),l=i?a:1;return c.jsxs(c.Fragment,{children:[c.jsx(U0,{$visibility:l,children:c.jsxs(B0,{children:[c.jsx(H0,{children:c.jsx(Fp,{})}),c.jsx(V0,{children:Lp.map(s=>c.jsx(Up,{href:s.href,external:s.external,children:s.label},s.href))}),c.jsx(W0,{children:c.jsx(T0,{isOpen:t,onClick:()=>r(!t)})})]})}),c.jsx(A0,{isOpen:t,onClose:()=>r(!1)})]})};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,n)=>n?n.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=e=>{const t=Q0(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Y0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=j.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:o="",children:i,iconNode:a,...l},s)=>j.createElement("svg",{ref:s,...Y0,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:Bp("lucide",o),...!i&&!K0(l)&&{"aria-hidden":"true"},...l},[...a.map(([u,h])=>j.createElement(u,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=(e,t)=>{const r=j.forwardRef(({className:n,...o},i)=>j.createElement(X0,{ref:i,iconNode:t,className:Bp(`lucide-${J0(kc(e))}`,`lucide-${e}`,n),...o}));return r.displayName=kc(e),r};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Z0=nn("github",q0);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],ty=nn("instagram",ey);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],ny=nn("linkedin",ry);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],iy=nn("mail",oy);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],ly=nn("twitter",ay);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],uy=nn("youtube",sy),cy=[{name:"GitHub",href:"https://github.com/0xJeremy",icon:"Github"},{name:"LinkedIn",href:"https://www.linkedin.com/in/jeremy-kanovsky/",icon:"Linkedin"},{name:"Email",href:"mailto:kanovsky.jeremy@gmail.com",icon:"Mail"}],bc="kanovsky.jeremy@gmail.com",dy={Github:Z0,Linkedin:ny,Mail:iy,Twitter:ly,Instagram:ty,Youtube:uy},Hs="#FF7F11",Hp="#8892b0",fy=950,Sc=v.div`
  position: fixed;
  bottom: 0;
  left: ${e=>e.$side==="left"?"40px":"auto"};
  right: ${e=>e.$side==="right"?"40px":"auto"};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: var(--z-nav);
  opacity: ${e=>e.$opacity};
  transform: translateY(${e=>e.$opacity===0?"20px":"0"});
  visibility: ${e=>e.$opacity===0?"hidden":"visible"};
  pointer-events: ${e=>e.$opacity>.1?"auto":"none"};
  transition:
    opacity var(--transition-normal) ease,
    transform var(--transition-normal) ease,
    visibility var(--transition-normal) ease;

  /* Narrower side spacing on thin screens */
  @media (max-width: ${fy}px) {
    left: ${e=>e.$side==="left"?"20px":"auto"};
    right: ${e=>e.$side==="right"?"20px":"auto"};
  }

  @media (max-width: ${R}px) {
    display: none;
  }
`,py=v.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
  margin: 0;
  padding: 0;
  list-style: none;
`,hy=v.li`
  display: flex;
  align-items: center;
  justify-content: center;
`,my=v.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  color: ${Hs};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${Hp};
    transform: translateY(-3px);
  }

  svg {
    width: 22px;
    height: 22px;
  }
`,Cc=v.div`
  width: 1px;
  height: 90px;
  margin-top: var(--spacing-lg);
  background-color: ${Hs};
`,gy=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,vy=v.a`
  writing-mode: vertical-rl;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
  letter-spacing: 0.1em;
  color: ${Hs};
  padding: var(--spacing-xs);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${Hp};
    transform: translateY(-3px);
  }
`,yy=e=>{const t=dy[e];return t?c.jsx(t,{}):null},wy=()=>{const{visibility:e}=Op();return c.jsxs(c.Fragment,{children:[c.jsxs(Sc,{$side:"left",$opacity:e,"data-testid":"sticky-left",children:[c.jsx(py,{children:cy.map(t=>c.jsx(hy,{children:c.jsx(my,{href:t.href,target:t.href.startsWith("mailto:")?void 0:"_blank",rel:t.href.startsWith("mailto:")?void 0:"noopener noreferrer","aria-label":t.name,children:yy(t.icon)})},t.name))}),c.jsx(Cc,{})]}),c.jsx(Sc,{$side:"right",$opacity:e,"data-testid":"sticky-right",children:c.jsxs(gy,{children:[c.jsx(vy,{href:`mailto:${bc}`,"aria-label":"Send email",children:bc}),c.jsx(Cc,{})]})})]})},za="var(--viewport-inset)",xy=v.section`
  position: relative;
  /* Calculate exact dimensions to center viewport with equal margins */
  width: calc(100vw - ${za} * 2);
  height: calc(100vh - ${za} * 2);
  margin: ${za};
  border-radius: var(--radius-2xl);
  overflow: hidden;
  background-color: var(--color-viewport);
  box-shadow: var(--shadow-viewport);
  z-index: var(--z-viewport);
`,ky=v.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  /* Ensure media fills container */
  & > video,
  & > img,
  & > svg,
  & > div {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,by=v.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  /* Subtle gradient overlay with navy tint to ensure text readability */
  background: linear-gradient(
    135deg,
    rgba(10, 25, 47, 0.7) 0%,
    rgba(2, 12, 27, 0.4) 50%,
    rgba(10, 25, 47, 0.5) 100%
  );
`,Sy=v.div`
  position: relative;
  z-index: var(--z-content);
  height: 100%;
  display: flex;
  flex-direction: column;
`,Cy=({children:e,media:t=null})=>c.jsxs(xy,{children:[t&&c.jsx(ky,{children:t}),c.jsx(by,{}),c.jsx(Sy,{children:e})]}),Ey={primary:ye`
    background: var(--color-accent);
    color: var(--color-black);
    border: 2px solid var(--color-accent);

    &:hover {
      background: var(--color-accent-hover);
      border-color: var(--color-accent-hover);
    }
  `,secondary:ye`
    background: transparent;
    color: var(--color-white);
    border: 2px solid var(--color-gray-300);

    &:hover {
      background: var(--color-accent-subtle);
      border-color: var(--color-accent);
      color: var(--color-accent);
    }
  `,ghost:ye`
    background: transparent;
    color: var(--color-gray-100);
    border: 2px solid transparent;

    &:hover {
      color: var(--color-accent);
      border-color: var(--color-gray-600);
    }
  `},jy=v.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  font-family: var(--font-family);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition:
    background var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast);

  ${e=>Ey[e.$variant]}

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`,Ec=({variant:e="primary",children:t,...r})=>c.jsx(jy,{$variant:e,...r,children:t}),$y=v.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: var(--spacing-lg);
  max-width: fit-content;
  background: rgba(10, 25, 47, 0.7);
  backdrop-filter: blur(10px);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin: var(--spacing-md);
  
  @media (min-width: 768px) {
    padding: var(--spacing-xl);
    margin: var(--spacing-2xl);
  }
`,Py=v.h2`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--color-accent);
  margin-bottom: var(--spacing-xs);
  font-weight: var(--font-weight-normal);

  @media (min-width: 768px) {
    font-size: var(--font-size-base);
  }
`,zy=v.h1`
  font-size: 2.5rem; /* Reduced from 3rem */
  font-weight: var(--font-weight-bold);
  color: var(--color-text-on-dark);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 4rem; /* Reduced from 4.5rem */
  }
`,_y=v.h3`
  font-size: 1.5rem; /* Reduced from 2rem */
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-on-dark-muted);
  line-height: var(--line-height-tight);
  margin-bottom: var(--spacing-sm);

  @media (min-width: 768px) {
    font-size: 2.5rem; /* Reduced from 4rem */
  }
`,Ty=v.p`
  font-size: var(--font-size-base);
  color: var(--color-text-on-dark-muted);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-lg);
  max-width: 500px;
`,Iy=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-top: var(--spacing-sm);
`,Ry=({greeting:e,title:t,subtitle:r,description:n,primaryAction:o,secondaryAction:i})=>c.jsxs($y,{children:[c.jsx(Py,{children:e}),c.jsx(zy,{children:t}),c.jsx(_y,{children:r}),c.jsx(Ty,{children:n}),c.jsxs(Iy,{children:[c.jsx(Ec,{variant:"primary",onClick:o.onClick,children:o.label}),c.jsx(Ec,{variant:"secondary",onClick:i.onClick,children:i.label})]})]}),Dy=He`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
`,Ny=He`
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
`,My=v.div`
  position: absolute;
  bottom: var(--spacing-xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  z-index: var(--z-content);
  animation: ${Ny} 2s ease-in-out infinite;
`,Ly=v.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${Dy} 2s ease-in-out infinite;

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    border-right: 2px solid var(--color-text-on-dark-muted);
    border-bottom: 2px solid var(--color-text-on-dark-muted);
    transform: rotate(45deg);
    margin-top: -4px;
  }
`,Oy=v.span`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-on-dark-muted);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
`,Fy=({label:e="Scroll"})=>c.jsxs(My,{children:[c.jsx(Oy,{children:e}),c.jsx(Ly,{})]});var ve=(e=>(e[e.OFF=0]="OFF",e[e.ON=1]="ON",e[e.DYING=2]="DYING",e))(ve||{});const eo={cols:120,rows:80,cellSize:8,ticksPerSecond:12,colorOff:"rgba(12, 14, 20, 1)",colorOn:"rgba(80, 200, 255, 1)",colorDying:"rgba(255, 100, 80, 0.6)",initialDensity:.15,wrapEdges:!0},Ay=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];function Uy(e={}){const t={...eo,...e},{cols:r,rows:n,initialDensity:o}=t,i=new Uint8Array(r*n);for(let a=0;a<i.length;a++)Math.random()<o?i[a]=ve.ON:i[a]=ve.OFF;return{grid:i,cols:r,rows:n,generation:0}}function By(e,t,r){return t<0||t>=e.rows||r<0||r>=e.cols?ve.OFF:e.grid[t*e.cols+r]}function Hy(e,t,r){const n=(t%e.rows+e.rows)%e.rows,o=(r%e.cols+e.cols)%e.cols;return e.grid[n*e.cols+o]}function Vy(e,t,r,n){let o=0;const i=n?Hy:By;for(const[a,l]of Ay)i(e,t+a,r+l)===ve.ON&&o++;return o}function Wy(e,t){switch(e){case ve.OFF:return t===2?ve.ON:ve.OFF;case ve.ON:return ve.DYING;case ve.DYING:return ve.OFF;default:return ve.OFF}}let Ro=null;function Gy(e,t={}){const r={...eo,...t},{cols:n,rows:o,grid:i}=e,{wrapEdges:a}=r;(!Ro||Ro.length!==i.length)&&(Ro=new Uint8Array(i.length));const l=Ro;for(let u=0;u<o;u++){const h=u*n;for(let f=0;f<n;f++){const g=h+f,y=i[g],x=Vy(e,u,f,a);l[g]=Wy(y,x)}}return{grid:new Uint8Array(l),cols:n,rows:o,generation:e.generation+1}}function Jy(e,t,r,n,o={}){const i={...eo,...o},{cellSize:a,colorOff:l,colorOn:s,colorDying:u}=i,{grid:h,cols:f,rows:g}=t,y=f*a,x=g*a,k=Math.max(0,(r-y)/2),P=Math.max(0,(n-x)/2);e.fillStyle=l,e.fillRect(0,0,r,n),e.fillStyle=u;for(let p=0;p<g;p++){const d=p*f,m=P+p*a;for(let w=0;w<f;w++)if(h[d+w]===ve.DYING){const S=k+w*a;e.fillRect(S,m,a-1,a-1)}}e.shadowColor=s,e.shadowBlur=a*.8,e.fillStyle=s;for(let p=0;p<g;p++){const d=p*f,m=P+p*a;for(let w=0;w<f;w++)if(h[d+w]===ve.ON){const S=k+w*a;e.fillRect(S,m,a-1,a-1)}}e.shadowBlur=0}const Qy=v.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,Yy=v.canvas`
  display: block;
  width: 100%;
  height: 100%;
`,Ky=({config:e={},paused:t=!1})=>{const r=j.useRef(null),n=j.useRef(null),o=j.useRef(null),i=j.useRef(0),a=j.useRef(0),l=j.useRef({...eo,...e});j.useEffect(()=>{l.current={...eo,...e}},[e]);const s=j.useCallback(()=>{const f=n.current;if(!f)return;const{cellSize:g}=l.current,y=Math.ceil(f.width/g),x=Math.ceil(f.height/g);o.current=Uy({...l.current,cols:y,rows:x})},[]),u=j.useCallback(()=>{const f=r.current,g=n.current;if(!f||!g)return;const y=f.getBoundingClientRect(),x=window.devicePixelRatio||1;g.width=y.width*x,g.height=y.height*x;const k=g.getContext("2d");k&&k.scale(x,x),s()},[s]),h=j.useCallback(f=>{const g=n.current,y=o.current;if(!g||!y){i.current=requestAnimationFrame(h);return}const x=g.getContext("2d");if(!x){i.current=requestAnimationFrame(h);return}const{ticksPerSecond:k}=l.current,P=1e3/k;!t&&f-a.current>=P&&(o.current=Gy(y,l.current),a.current=f);const p=r.current,d=(p==null?void 0:p.clientWidth)??g.width,m=(p==null?void 0:p.clientHeight)??g.height;Jy(x,o.current,d,m,l.current),i.current=requestAnimationFrame(h)},[t]);return j.useEffect(()=>{u(),i.current=requestAnimationFrame(h);const f=new ResizeObserver(u);return r.current&&f.observe(r.current),()=>{cancelAnimationFrame(i.current),f.disconnect()}},[u,h]),c.jsx(Qy,{ref:r,children:c.jsx(Yy,{ref:n})})};v.canvas`
  display: block;
  width: 100%;
  height: 100%;
`;var bn=(e=>(e.UP="UP",e.DOWN="DOWN",e.LEFT="LEFT",e.RIGHT="RIGHT",e))(bn||{});bn.UP,bn.DOWN,bn.LEFT,bn.RIGHT;v.canvas`
  display: block;
  width: 100%;
  height: 100%;
`;v.canvas`
  display: block;
  width: 100%;
  height: 100%;
`;v.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #0a0a0f;
`;v.div`
  position: absolute;
  inset: 0;
  opacity: ${e=>e.$opacity};
  transition: opacity 0.1s linear;
`;v.div`
  position: absolute;
  inset: 0;
  background: #050710;
  opacity: ${e=>e.$opacity};
  pointer-events: none;
  z-index: 10;
`;const Xy=He`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`,qy=He`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(8deg); }
`,Zy=He`
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.5; }
`,e1=He`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,t1=He`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(4px, -5px); }
  50% { transform: translate(-3px, -8px); }
  75% { transform: translate(5px, -3px); }
`,wr=e=>{const t=Math.sin(e*9999)*1e4;return t-Math.floor(t)},r1=(e,t=42)=>{const r=[],n=["x","o","plus","box","circle","bracket","dotH","dotV"],o=["float","floatAlt","pulse","spin","drift","none"],i=Math.floor(e*12);for(let a=0;a<i;a+=1){const l=wr(t+a*1),s=wr(t+a*2),u=wr(t+a*3),h=wr(t+a*4),f=wr(t+a*5),g=wr(t+a*6);let y=l*100;y>15&&y<85&&(y=l<.5?l*15:85+l*15),r.push({id:`deco-${a}`,type:n[Math.floor(s*n.length)],x:y,y:u*100,size:.6+h*.8,opacity:.15+f*.35,animationDelay:g*5,animationType:o[Math.floor(g*o.length)]})}return r},n1=v.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${e=>e.$height};
  pointer-events: none;
  overflow: hidden;
  z-index: 0;

  @media (max-width: ${R}px) {
    display: none;
  }
`,Gt=v.span`
  position: absolute;
  left: ${e=>e.$x}%;
  top: ${e=>e.$y}%;
  font-family: var(--font-family-mono);
  font-size: ${e=>e.$size}rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  opacity: ${e=>e.$opacity};
  user-select: none;
  animation-delay: ${e=>e.$delay}s;

  ${e=>{switch(e.$animation){case"float":return ye`
          animation: ${Xy} 4s ease-in-out infinite;
        `;case"floatAlt":return ye`
          animation: ${qy} 5s ease-in-out infinite;
        `;case"pulse":return ye`
          animation: ${Zy} 3s ease-in-out infinite;
        `;case"spin":return ye`
          animation: ${e1} 20s linear infinite;
        `;case"drift":return ye`
          animation: ${t1} 7s ease-in-out infinite;
        `;default:return""}}}
`,o1=v(Gt)`
  color: var(--color-white);
`,i1=v(Gt)`
  color: var(--color-white);
`,a1=v(Gt)`
  color: var(--color-accent);
`,l1=v(Gt)`
  color: var(--color-white);
`,s1=v(Gt)`
  width: ${e=>e.$size*.7}rem;
  height: ${e=>e.$size*.7}rem;
  border: 2px solid var(--color-accent);
  border-radius: 2px;
`,u1=v(Gt)`
  width: ${e=>e.$size*.5}rem;
  height: ${e=>e.$size*.5}rem;
  border: 2px solid var(--color-white);
  border-radius: 50%;
`,c1=v(Gt)`
  width: ${e=>e.$size*2.5}rem;
  height: 2px;
  background: repeating-linear-gradient(
    90deg,
    var(--color-accent) 0px,
    var(--color-accent) 3px,
    transparent 3px,
    transparent 6px
  );
`,d1=v(Gt)`
  width: 2px;
  height: ${e=>e.$size*2.5}rem;
  background: repeating-linear-gradient(
    180deg,
    var(--color-white) 0px,
    var(--color-white) 3px,
    transparent 3px,
    transparent 6px
  );
`,f1=e=>{const t={key:e.id,$x:e.x,$y:e.y,$size:e.size,$opacity:e.opacity,$delay:e.animationDelay,$animation:e.animationType};switch(e.type){case"x":return c.jsx(o1,{...t,children:"×"});case"o":return c.jsx(i1,{...t,children:"○"});case"plus":return c.jsx(a1,{...t,children:"+"});case"bracket":return c.jsx(l1,{...t,children:e.x<50?"[":"]"});case"box":return c.jsx(s1,{...t});case"circle":return c.jsx(u1,{...t});case"dotH":return c.jsx(c1,{...t});case"dotV":return c.jsx(d1,{...t});default:return null}},p1=({density:e=5,height:t="100%",seed:r=42})=>{const n=j.useMemo(()=>r1(Math.min(Math.max(e,1),10),r),[e,r]);return c.jsx(n1,{$height:t,"aria-hidden":"true","data-testid":"background-decorations",children:n.map(f1)})},Vp=He`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(5deg); }
`,h1=He`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.7; }
`,m1=He`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,g1=v.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh; /* Only cover the hero section area */
  pointer-events: none;
  z-index: var(--z-decorative);
  overflow: hidden;
`,co=v.span`
  position: absolute;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-400);
  user-select: none;
  top: ${e=>e.$top??"auto"};
  left: ${e=>e.$left??"auto"};
  right: ${e=>e.$right??"auto"};
  bottom: ${e=>e.$bottom??"auto"};
`,jc=v(co)`
  animation: ${Vp} 4s ease-in-out infinite;
`,$c=v(co)`
  animation: ${Vp} 5s ease-in-out infinite;
  animation-delay: -1s;
`,Pc=v(co)`
  width: 12px;
  height: 12px;
  border: 2px solid var(--color-gray-600);
  border-radius: var(--radius-sm);
  animation: ${h1} 3s ease-in-out infinite;
`,v1=v(co)`
  animation: ${m1} 20s linear infinite;
`,_a=v.div`
  position: absolute;
  ${e=>e.$orientation==="horizontal"?`
    width: 60px;
    height: 2px;
    background: repeating-linear-gradient(
      90deg,
      var(--color-gray-600) 0px,
      var(--color-gray-600) 4px,
      transparent 4px,
      transparent 8px
    );
  `:`
    width: 2px;
    height: 60px;
    background: repeating-linear-gradient(
      180deg,
      var(--color-gray-600) 0px,
      var(--color-gray-600) 4px,
      transparent 4px,
      transparent 8px
    );
  `}
  ${e=>e.$position}
  opacity: 0.5;
`,zc=v(co)`
  font-size: var(--font-size-2xl);
  color: var(--color-gray-600);
`,y1=()=>c.jsxs(g1,{"aria-hidden":"true",children:[c.jsx(jc,{$top:"15%",$left:"3%",children:"×"}),c.jsx(Pc,{$top:"35%",$left:"2%"}),c.jsx($c,{$top:"55%",$left:"4%",children:"○"}),c.jsx(zc,{$top:"75%",$left:"2%",children:"["}),c.jsx($c,{$top:"20%",$right:"3%",children:"○"}),c.jsx(v1,{$top:"40%",$right:"2%",children:"+"}),c.jsx(Pc,{$top:"60%",$right:"4%"}),c.jsx(jc,{$top:"80%",$right:"3%",children:"×"}),c.jsx(zc,{$top:"75%",$right:"2%",children:"]"}),c.jsx(_a,{$orientation:"horizontal",$position:"top: 12%; left: 1%;"}),c.jsx(_a,{$orientation:"vertical",$position:"top: 25%; right: 1.5%;"}),c.jsx(_a,{$orientation:"horizontal",$position:"bottom: 15%; right: 1%;"})]}),w1=v.div`
  position: relative;
  min-height: 100vh;
  background-color: var(--color-background);
`,x1=v.div`
  position: relative;
  z-index: var(--z-decorative);
`,k1=({children:e})=>c.jsx(w1,{children:c.jsx(x1,{children:e})});v.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--spacing-3xl);
  padding: 0 var(--spacing-xl);

  @media (max-width: ${R}px) {
    padding: 0 var(--spacing-md);
    margin-bottom: var(--spacing-2xl);
  }
`;v.div`
  width: 80%;
  max-width: 1100px;
  margin-bottom: var(--spacing-lg);
  padding-left: var(--spacing-md);
  z-index: 1;

  @media (max-width: ${R}px) {
    width: 100%;
    padding-left: 0;
  }
`;v.h2`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--color-gray-500);
  margin-bottom: var(--spacing-xs);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: var(--color-accent);
    border-radius: 2px;
  }
`;v.p`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);

  @media (max-width: ${R}px) {
    font-size: var(--font-size-xl);
  }
`;v.div`
  position: relative;
  width: 80%;
  max-width: 1100px;
  z-index: 1;

  @media (max-width: ${R}px) {
    width: 100%;
  }
`;v.section`
  position: relative;
  width: 100%;
  padding: var(--spacing-2xl);
  border-radius: var(--radius-xl);
  background-color: ${({$variant:e})=>e==="light"?"var(--color-surface)":"var(--color-viewport)"};
  color: ${({$variant:e})=>e==="light"?"var(--color-text)":"var(--color-text-on-dark)"};
  box-shadow: var(--shadow-lg);

  /* Subtle top accent line */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: var(--spacing-xl);
    right: var(--spacing-xl);
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--color-gray-700) 20%,
      var(--color-gray-700) 80%,
      transparent 100%
    );
  }

  @media (max-width: ${R}px) {
    padding: var(--spacing-xl) var(--spacing-lg);
  }
`;v.header`
  text-align: ${({$align:e})=>e};
  margin-bottom: var(--spacing-2xl);

  @media (max-width: ${R}px) {
    margin-bottom: var(--spacing-xl);
  }
`;v.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--letter-spacing-tight);
  line-height: var(--line-height-tight);
  color: ${({$variant:e})=>e==="light"?"var(--color-text)":"var(--color-text-on-dark)"};
  margin-bottom: var(--spacing-sm);

  @media (max-width: ${R}px) {
    font-size: var(--font-size-2xl);
  }
`;v.p`
  font-size: var(--font-size-lg);
  color: ${({$variant:e})=>e==="light"?"var(--color-text-muted)":"var(--color-text-on-dark-muted)"};
  max-width: 600px;
  margin: ${({$variant:e})=>e==="light"?"0":"0 auto"};

  @media (max-width: ${R}px) {
    font-size: var(--font-size-base);
  }
`;const b1=950,S1=v.section`
  position: relative;
  margin: 0 auto;
  margin-bottom: var(--spacing-4xl);
  width: 75%;
  max-width: 1100px;

  @media (max-width: ${b1}px) {
    width: 95%;
  }

  @media (max-width: ${R}px) {
    margin-bottom: var(--spacing-3xl);
  }
`,C1=v.header`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-2xl);
  white-space: nowrap;

  @media (max-width: ${R}px) {
    margin-bottom: var(--spacing-xl);
  }
`,E1=v.span`
  color: var(--color-accent);
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-normal);
  margin-right: var(--spacing-sm);

  @media (max-width: ${R}px) {
    font-size: var(--font-size-lg);
  }
`,j1=v.h2`
  color: var(--color-white);
  font-family: var(--font-family);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: 1px;
  padding-right: var(--spacing-lg);

  @media (max-width: ${R}px) {
    font-size: var(--font-size-xl);
  }
`,$1=v.span`
  display: inline-block;
  position: relative;
  flex: 1;
  max-width: 300px;
  height: 1px;
  background-color: var(--color-accent);

  @media (max-width: ${R}px) {
    display: none;
  }
`,P1=v.div`
  /* Content renders directly without card wrapper */
`,Sn=({children:e,title:t,sectionNumber:r=void 0,showHeaderLine:n=!0,id:o=void 0,className:i=void 0})=>c.jsxs(S1,{id:o,className:i,children:[c.jsxs(C1,{children:[r&&c.jsxs(E1,{children:[r,"."]}),c.jsx(j1,{children:t}),n&&c.jsx($1,{"aria-hidden":"true"})]}),c.jsx(P1,{children:e})]}),Vs=950,z1=v.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-2xl);
  align-items: start;

  @media (max-width: ${Vs}px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
`,_1=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`,Ta=v.p`
  font-family: var(--font-family);
  font-size: var(--font-size-lg);
  line-height: 1.6;
  color: var(--color-gray-200);

  @media (max-width: ${Vs}px) {
    line-height: 1.4;
  }

  @media (max-width: ${R}px) {
    font-size: var(--font-size-base);
  }
`,T1=v.a`
  color: var(--color-accent);
  text-decoration: none;
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: var(--color-accent);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`,I1=v.p`
  font-family: var(--font-family);
  font-size: var(--font-size-lg);
  color: var(--color-gray-200);
  margin-top: var(--spacing-md);

  @media (max-width: ${R}px) {
    font-size: var(--font-size-base);
  }
`,R1=v.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-sm) var(--spacing-lg);
  margin-top: var(--spacing-md);

  @media (max-width: ${R}px) {
    gap: var(--spacing-xs) var(--spacing-md);
  }
`,D1=v.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
`,N1=v.span`
  color: var(--color-accent);
  display: inline-flex;
  align-items: center;
  transform: translateY(-1px);
`,M1=v.span`
  font-family: var(--font-family);
  font-size: var(--font-size-lg);
  color: var(--color-gray-200);

  @media (max-width: ${R}px) {
    font-size: var(--font-size-base);
  }
`,L1=v.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${Vs}px) {
    order: -1;
    max-width: 280px;
    margin: 0 auto;
  }
`,O1=v.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
`,F1=v.img`
  width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  object-fit: cover;
`,A1=v.div`
  width: 100%;
  height: 100%;
  border-radius: var(--radius-md);
  background: linear-gradient(
    135deg,
    var(--color-gray-800) 0%,
    var(--color-gray-700) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
`,U1=(e,t)=>{if(typeof e=="string")return c.jsx(Ta,{children:e},t);const{text:r,links:n}=e;if(!n||Object.keys(n).length===0)return c.jsx(Ta,{children:r},t);const o=[];let i=0;const a=/\{(\w+)\}/g;let l=a.exec(r);for(;l!==null;){l.index>i&&o.push(r.slice(i,l.index));const s=l[1],u=n[s];u?o.push(c.jsx(T1,{href:u.href,target:"_blank",rel:"noopener noreferrer",children:u.text},`${t}-${s}`)):o.push(l[0]),i=l.index+l[0].length,l=a.exec(r)}return i<r.length&&o.push(r.slice(i)),c.jsx(Ta,{children:o},t)},B1=()=>c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:c.jsx("polyline",{points:"9 18 15 12 9 6"})}),H1=({paragraphs:e,skills:t=void 0,skillsIntro:r="Some of the things I've been working on recently:",imageUrl:n=void 0,imageAlt:o="Profile photo"})=>c.jsxs(z1,{children:[c.jsxs(_1,{children:[e.map((i,a)=>U1(i,a)),t&&t.length>0&&c.jsxs(c.Fragment,{children:[c.jsx(I1,{children:r}),c.jsx(R1,{children:t.map(i=>c.jsxs(D1,{children:[c.jsx(N1,{children:c.jsx(B1,{})}),c.jsx(M1,{children:i})]},i))})]})]}),c.jsx(L1,{children:c.jsx(O1,{children:n?c.jsx(F1,{src:n,alt:o}):c.jsx(A1,{children:"Photo"})})})]}),V1=v.div`
  display: flex;
  flex-direction: column;
`,W1=v.article`
  position: relative;
  padding-left: var(--spacing-xl);

  /* Vertical timeline line */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      var(--color-accent) 0%,
      var(--color-gray-700) 100%
    );
  }

  /* Timeline dot at top */
  &::after {
    content: '';
    position: absolute;
    left: -4px;
    top: 6px;
    width: 10px;
    height: 10px;
    background-color: var(--color-accent);
    border-radius: 50%;
  }

  &:not(:last-child) {
    margin-bottom: var(--spacing-3xl);
    padding-bottom: var(--spacing-xl);
  }

  @media (max-width: ${R}px) {
    padding-left: var(--spacing-lg);
  }
`,G1=v.header`
  margin-bottom: var(--spacing-xl);
`,J1=v.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  flex-wrap: wrap;

  @media (max-width: ${R}px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
  }
`,Q1=v.img`
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  object-fit: contain;
  background-color: var(--color-gray-800);

  @media (max-width: ${R}px) {
    width: 40px;
    height: 40px;
  }
`,Y1=v.div`
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background-color: var(--color-gray-800);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);

  @media (max-width: ${R}px) {
    width: 40px;
    height: 40px;
    font-size: var(--font-size-base);
  }
`,K1=v.div`
  flex: 1;
`,X1=v.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  margin-bottom: var(--spacing-xs);

  @media (max-width: ${R}px) {
    font-size: var(--font-size-lg);
  }
`,q1=v.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
`,Z1=v.span`
  font-size: var(--font-size-sm);
  color: var(--color-gray-200);

  &::before {
    content: '📍 ';
  }
`,ew=v.span`
  font-size: var(--font-size-sm);
  color: var(--color-gray-200);
  font-family: var(--font-family-mono);
`,tw=v.div`
  display: flex;
  flex-direction: column;
`,rw=v.div`
  &:not(:last-child) {
    margin-bottom: var(--spacing-xl);
    padding-bottom: var(--spacing-xl);
    border-bottom: 1px solid var(--color-gray-700);
  }
`,nw=v.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);

  @media (max-width: ${R}px) {
    flex-direction: column;
    gap: var(--spacing-xs);
  }
`,ow=v.h4`
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-white);

  @media (max-width: ${R}px) {
    font-size: var(--font-size-base);
  }
`,iw=v.span`
  font-size: var(--font-size-sm);
  color: var(--color-gray-200);
  font-family: var(--font-family-mono);
  white-space: nowrap;
`,aw=v.p`
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
  margin-bottom: var(--spacing-md);
  line-height: var(--line-height);

  @media (max-width: ${R}px) {
    font-size: var(--font-size-sm);
  }
`,lw=v.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`,sw=v.li`
  position: relative;
  padding-left: var(--spacing-lg);
  font-size: var(--font-size-sm);
  color: var(--color-gray-200);
  line-height: var(--line-height);

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--color-accent);
  }
`,_c=({entries:e,showLogoPlaceholders:t=!0})=>c.jsx(V1,{children:e.map(r=>{const n=r.organization.charAt(0).toUpperCase();return c.jsxs(W1,{children:[c.jsx(G1,{children:c.jsxs(J1,{children:[r.logoUrl?c.jsx(Q1,{src:r.logoUrl,alt:`${r.organization} logo`}):t&&c.jsx(Y1,{"aria-hidden":"true",children:n}),c.jsxs(K1,{children:[c.jsx(X1,{children:r.organization}),c.jsxs(q1,{children:[r.location&&c.jsx(Z1,{children:r.location}),c.jsx(ew,{children:r.overallDuration})]})]})]})}),c.jsx(tw,{children:r.roles.map(o=>c.jsxs(rw,{children:[c.jsxs(nw,{children:[c.jsx(ow,{children:o.title}),c.jsx(iw,{children:o.duration})]}),o.description&&c.jsx(aw,{children:o.description}),o.bullets&&o.bullets.length>0&&c.jsx(lw,{children:o.bullets.map(i=>c.jsx(sw,{children:i},i))})]},`${o.title}-${o.duration}`))})]},r.id)})}),uw=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`,cw=v.article`
  position: relative;
  padding-left: var(--spacing-xl);

  /* Vertical line */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 0;
    width: 2px;
    background: linear-gradient(
      to bottom,
      var(--color-accent) 0%,
      var(--color-gray-700) 100%
    );
  }

  /* Dot at top */
  &::after {
    content: '';
    position: absolute;
    left: -4px;
    top: 6px;
    width: 10px;
    height: 10px;
    background-color: var(--color-accent);
    border-radius: 50%;
  }

  @media (max-width: ${R}px) {
    padding-left: var(--spacing-lg);
  }
`,dw=v.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  margin-bottom: var(--spacing-sm);

  @media (max-width: ${R}px) {
    font-size: var(--font-size-lg);
  }
`,fw=v.a`
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-accent);
  }
`,pw=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`,hw=v.p`
  font-size: var(--font-size-base);
  color: var(--color-gray-200);
  line-height: var(--line-height);

  @media (max-width: ${R}px) {
    font-size: var(--font-size-sm);
  }
`,mw=v.p`
  font-size: var(--font-size-sm);
  color: var(--color-gray-300);
  font-family: var(--font-family-mono);
`,gw=v.span`
  font-size: var(--font-size-sm);
  color: var(--color-gray-300);
`,vw=({entries:e})=>c.jsx(uw,{children:e.map(t=>c.jsxs(cw,{children:[c.jsx(dw,{children:t.link?c.jsx(fw,{href:t.link,target:"_blank",rel:"noopener noreferrer",children:t.title}):t.title}),c.jsxs(pw,{children:[c.jsxs(hw,{children:["Inventors: ",t.inventors.join(", ")]}),c.jsx(mw,{children:t.applicationNumber}),c.jsxs(gw,{children:["Filed: ",t.filedDate]})]})]},t.id))}),b="/sandbox/static/projects",Tc=[{id:"hexapod",name:"Hexapod Robot",shortDescription:"This was the final project for Tufts ME-134 (Advanced Robotics) in Fall 2020. We were tasked with creating a robot that could navigate an obstacle course (containing a tunnel, wall, and rough terrain) autonomously.",fullDescription:"This robot was made for the final project of Tufts ME-134 (Advanced Robotics) in the Fall of 2020. The prompt was to create a robot capable of navigating an obstacle course (comprised of a tunnel to go through, a wall to climb over, and a patch of rough terrain) autonomously. This hexapod uses a Raspberry Pi 4 (and camera) to perform the onboard processing and 18 high-torque servo motors for actuation. It did pretty well on the wall.",images:[{url:`${b}/hexapod/hexapod_isometric.JPG`,alt:"Hexapod robot isometric view",isMain:!0},{url:`${b}/hexapod/hexapod_1.jpg`,alt:"Hexapod robot view 1"},{url:`${b}/hexapod/hexapod_2.jpg`,alt:"Hexapod robot view 2"},{url:`${b}/hexapod/hexapod_3.jpg`,alt:"Hexapod robot view 3"},{url:`${b}/hexapod/hexapod_4.jpg`,alt:"Hexapod robot view 4"},{url:`${b}/hexapod/hexapod_5.jpg`,alt:"Hexapod robot view 5"},{url:`${b}/hexapod/hexapod_6.jpg`,alt:"Hexapod robot view 6"},{url:`${b}/hexapod/hexapod_7.jpg`,alt:"Hexapod robot view 7"},{url:`${b}/hexapod/hexapod_8.jpg`,alt:"Hexapod robot view 8"}],tags:[{label:"Raspberry Pi"},{label:"Python"},{label:"Solidworks"}],sourceUrl:"https://github.com/0xJeremy/me134/tree/master/final",detailUrl:"/projects/hexapod",featured:!0},{id:"meteorites",name:"Meteorite Visualizer",shortDescription:"This is a meteorite impact visualizer made for COMP-177 (Data Visualization) at Tufts in Spring 2020.",fullDescription:"This website was made as the final project in Tufts COMP-177 Data Visualization in the Spring of 2020. The prompt was to create a website to display a dataset in a number of different ways, and to allow the user to explore the dataset. We used a dataset provided by NASA which lists all the known meteorite impacts on Earth dating back to the 1800s. We built the site with React.js and D3.js. It can be viewed live at lab84.org.",images:[{url:`${b}/meteorites/meteorites.png`,alt:"Meteorite visualizer interface",isMain:!0}],tags:[{label:"React.js"},{label:"Visualization"},{label:"Heroku"}],sourceUrl:"https://github.com/0xJeremy/Meteorite-Visualizer/",detailUrl:"/projects/meteorites",featured:!0},{id:"daedalus",name:"Daedalus BLDC Motor Controller",shortDescription:"This is a custom PCB designed to drive high-speed, high-power brushless motors. It includes current monitoring and positional feedback, turning the brushless motor into a high-torque servo motor.",fullDescription:"This PCB is the Daedalus High-Power BLDC Motor Controller. Using the on-board magnetic encoder it can turn a regular brushless DC motor into a high-power, ultra high-precision servo motor. It uses CAN bus communication, and cable be daisy chained together with other Daedalus controllers. This is one of the first PCBs I have designed, and I expect to iterate on it in the future.",images:[{url:`${b}/daedalus/Daedalus_Brackets_Board.png`,alt:"Daedalus board render",isMain:!0},{url:`${b}/daedalus/Front.jpg`,alt:"Daedalus board front view"},{url:`${b}/daedalus/Board_Layout.png`,alt:"Daedalus board layout"}],tags:[{label:"KiCAD"},{label:"STM32CubeIDE"}],sourceUrl:"https://github.com/0xJeremy/Daedalus",detailUrl:"/projects/daedalus",featured:!0},{id:"socketengine",name:"socket.engine",shortDescription:"socket.engine is the open-source successor to FireEye. It enabled real-time communication between devices that is optimized to be light-weight and very fast.",fullDescription:"socket.engine is the successor to FireEye. It is a real-time bi-directional UNIX socket communication library built on top of ZMQ sockets. It operates at extremely high speeds and is even capable of streaming full video across the sockets. It was originally designed for use in robots, but provides an interface to stream arbitrary data across arbitrary devices. It was written in Python and Javascript (via Node.js). It also holds the distinction of being my most successful project on GitHub. The source is published on GitHub, and it is available for download on PIP via PyPi, and on NPM.",images:[{url:`${b}/socketengine/socketengine.png`,alt:"socket.engine logo",isMain:!0}],tags:[{label:"Python"},{label:"Node.js"},{label:"Unix Sockets"},{label:"ZMQ"}],sourceUrl:"https://github.com/0xJeremy/socket.engine",detailUrl:"/projects/socketengine"},{id:"helios",name:"Helios Pi-Hat Robot Controller",shortDescription:"This is a custom PCB Raspberry Pi hat designed to enable CAN bus communication and high-precision servo control. It can also supply power to the Pi.",fullDescription:"This PCB is the Helios Pi-Hat Robot Controller. It is a companion board to the Daedalus Motor controller. It provides 4x high-speed CAN bus lines (through the 2x on-board STM32 microprocessors), along with a host of other features such as absolute orientation sensing (by providing sockets for a Bosch BNO-055 sensor), breakouts for 12 servo motors (6x high-precision, 6x standard), and by providing up to 3.5 amps to power the Raspberry Pi host. This is one of the first PCBs I've designed, and I expect to iterate on it in the future.",images:[{url:`${b}/helios/Helios_Board.png`,alt:"Helios board render",isMain:!0},{url:`${b}/helios/Board_Layout.png`,alt:"Helios board layout"}],tags:[{label:"KiCAD"}],sourceUrl:"https://github.com/0xJeremy/Helios",detailUrl:"/projects/helios"},{id:"icarus",name:"Icarus Power Distribution Board",shortDescription:"This is a custom PCB power distribution board designed for use with the Daedalus BLDC motor controller for driving high-current motors and the Helios Raspberry Pi hat. It has 6 power breakouts.",fullDescription:"This PCB was made as a companion board to the Daedalus motor controller, and provides 6x high-current power breakouts from a single source. Along with providing power, it has a host of other features like power shutoff, current draw monitoring, and temperature sensing. It communicates with the CAN bus protocol and can be daisy-chained with a number of other devices (including the Helios Pi-Hat and the Daedalus Motor Controller). This is one of the first PCBs I've made and I expect to iterate on it in the future.",images:[{url:`${b}/icarus/Icarus_Board.png`,alt:"Icarus board render",isMain:!0},{url:`${b}/icarus/icarus_1.JPG`,alt:"Icarus board view 1"},{url:`${b}/icarus/icarus_2.JPG`,alt:"Icarus board view 2"},{url:`${b}/icarus/icarus_3.JPG`,alt:"Icarus board view 3"},{url:`${b}/icarus/Board_Layout.png`,alt:"Icarus board layout"}],tags:[{label:"KiCAD"}],sourceUrl:"https://github.com/0xJeremy/Icarus",detailUrl:"/projects/icarus"},{id:"pico-oscilloscope",name:"Raspberry Pi Pico Oscilloscope",shortDescription:"This is an open-source project to turn the $4 Raspberry Pi Pico into a (reasonable) powerful 4-channel oscilloscope using the onboard analog to digital converters.",fullDescription:"As the final project for Tufts ME-193 MPP (Microcontroller Programming Projects) in the Spring of 2021, I turned the $4 Raspberry Pi Pico into a (reasonably) powerful 4-channel oscilloscope using the onboard analog to digital converters. The Pico streams the ADC readings over a USB to a host device (either a Raspberry Pi or any computer), which displays the data in a webpage. The idea being this project mimics the functionality of OctoPrint (the cloud 3D printer manager software) but for an Oscilloscope. This would make its use ideal in makerspaces or shared electronics labs. The webpage was written in React.js using Plot.js. The code on the Pico uses both cores and was written to run as quickly as possible in C.",images:[{url:`${b}/pico_oscilloscope/repo_logo.png`,alt:"Pico Oscilloscope logo",isMain:!0},{url:`${b}/pico_oscilloscope/pico_oscilloscope.png`,alt:"Pico Oscilloscope interface"}],tags:[{label:"C"},{label:"Node.js"},{label:"React.js"},{label:"Plotly.js"}],sourceUrl:"https://github.com/0xJeremy/Pico-Oscilloscope",detailUrl:"/projects/pico-oscilloscope"},{id:"surge",name:"Surge PL",shortDescription:"Surge is a small, Ruby-esque programming language I've build from scratch in Python.",fullDescription:"Surge is a small programming language I built from scratch. It is an interpreted language, written on top of Python with Ruby like syntax. To my knowledge it is turing complete. As part of this project I build a testing framework inside of Surge to test the capabilities of the language and ensure the parser, lexer, and interpreter were working as expected. It's not a large project, but perhaps one of my more interesting. The source code, test cases, and operational semantics can be viewed on the GitHub project page.",images:[{url:`${b}/surge/surge.png`,alt:"Surge programming language logo",isMain:!0}],tags:[{label:"Python"},{label:"Lex-Yacc"}],sourceUrl:"https://github.com/0xJeremy/surge",detailUrl:"/projects/surge"},{id:"ballbot",name:"Ballbot",shortDescription:"This robot was build as a homework assignment for Tufts ME-134 (Advanced Robotics) in Fall 2020. The assignment was to create a balancing robot, so we created a robot that balances on a basketball.",fullDescription:'This robot was made as a homework project for Tufts ME-134 (Advanced Robotics) in the Fall of 2020. The prompt was to create a "balancing robot" (with the requirement it must be able to freely rotate at least 180 degrees around any one axis). Theorizing that three axes was more impressive than one axis, we built a balancing "ballbot" -- a robot that balances on top of a basketball. It uses a sensor fusion algorithm to combine the input of 3 gyroscopic and acceleration sensors (2x MPU-6050s, and 1 Bosch BNO-055 sensor).',images:[{url:`${b}/ballbot/ballbot_isometric.JPG`,alt:"Ballbot isometric view",isMain:!0},{url:`${b}/ballbot/ballbot_1.JPG`,alt:"Ballbot view 1"},{url:`${b}/ballbot/ballbot_2.jpg`,alt:"Ballbot view 2"},{url:`${b}/ballbot/ballbot_3.jpg`,alt:"Ballbot view 3"},{url:`${b}/ballbot/ballbot_4.jpg`,alt:"Ballbot view 4"},{url:`${b}/ballbot/ballbot_5.jpg`,alt:"Ballbot view 5"}],tags:[{label:"Python"},{label:"Solidworks"},{label:"Raspberry Pi"}],sourceUrl:"https://github.com/0xJeremy/me134/tree/master/hw4/v2",detailUrl:"/projects/ballbot"},{id:"drawing-robot",name:"Drawing Robot",shortDescription:"This robot was build as a homework assignment for Tufts ME-134 (Advanced Robotics) in Fall 2020. The assignment was to create a robotic arm capable of writing our initials.",fullDescription:'This robot was made as a homework project for Tufts ME-134 (Advanced Robotics) in the Fall of 2020. The prompt was to create a robotic arm capable of writing our initials. This robot arm (which is the second iteration, the first being a standard 3-DOF vertical arm) is capable of writing arbitrary shapes and letters. Instead of hard-coding the positions of the arms for each point of our initials, I wrote an SVG parser and pather in Python that dissects any arbitrary SVG file and generates "g-code" (really just tuples of position for motors 1 and 2) which the arm them reads through and executes. It was pretty successful.',images:[{url:`${b}/drawing_robot/drawing_isometric.JPG`,alt:"Drawing robot isometric view",isMain:!0},{url:`${b}/drawing_robot/drawing_robot_1.jpg`,alt:"Drawing robot view 1"},{url:`${b}/drawing_robot/drawing_robot_2.jpg`,alt:"Drawing robot view 2"},{url:`${b}/drawing_robot/drawing_robot_3.jpg`,alt:"Drawing robot view 3"},{url:`${b}/drawing_robot/drawing_robot_4.jpg`,alt:"Drawing robot view 4"},{url:`${b}/drawing_robot/drawing_robot_5.jpg`,alt:"Drawing robot view 5"}],tags:[{label:"Python"},{label:"Solidworks"},{label:"Raspberry Pi"}],sourceUrl:"https://github.com/0xJeremy/me134/tree/master/hw3/v2",detailUrl:"/projects/drawing-robot"},{id:"vegas",name:'"Banned From Vegas"',shortDescription:"This is an automatic card-dealing and sorting robot made at MakeHarvard 2020. It uses computer vision to detect and sort the cards (and a little bit of card-counting to make sure you always win).",fullDescription:'"Banned From Vegas" is an automatic card-dealing and sorting robot made at MakeHarvard 2020. It uses computer vision to detect and sort a deck of cards (and with a little bit of card-counting thrown in can make the operator always win at cards). It was built over the course of 24 hours and was powered by a Raspberry Pi and a large number of servos and motors. The end result worked shockingly well.',images:[{url:`${b}/vegas/vegas.jpg`,alt:"Vegas robot main view",isMain:!0},{url:`${b}/vegas/vegas2.jpeg`,alt:"Vegas robot view 2"},{url:`${b}/vegas/vegas3.jpeg`,alt:"Vegas robot view 3"},{url:`${b}/vegas/vegas4.jpeg`,alt:"Vegas robot view 4"}],tags:[{label:"Python"},{label:"Computer Vision"},{label:"Raspberry Pi"}],sourceUrl:"https://github.com/0xJeremy/MakeHarvard2020",detailUrl:"/projects/vegas"},{id:"fleet",name:"Fleet",shortDescription:"This project is an open-source hardware platform for developing robotics software. It is intended to be a low-cost, modular swarm robotic system to test swarm algorithms.",fullDescription:'"Fleet" is a series of small, modular robots I made as an open-source hardware platform for developing swarm robotics software. It is intended to be a low cost solution for labs, researchers, and hobbiests to experiment with cutting edge swarm algorithms. Each robot is equipped with a Raspberry Pi, 2x DC motors with encoders, Raspberry Pi camera, and batteries to last several hours. Newer versions also have front and back facing time of flight distance sensors.',images:[{url:`${b}/fleet/fleet.png`,alt:"Fleet robot render",isMain:!0},{url:`${b}/fleet/fleet2.png`,alt:"Fleet robot view 2"},{url:`${b}/fleet/fleet3.jpeg`,alt:"Fleet robot view 3"},{url:`${b}/fleet/fleet4.jpeg`,alt:"Fleet robot view 4"},{url:`${b}/fleet/fleet5.JPG`,alt:"Fleet robot view 5"}],tags:[{label:"Python"},{label:"Computer Vision"},{label:"Solidworks"}],sourceUrl:"https://github.com/0xJeremy/fleet",detailUrl:"/projects/fleet"},{id:"space-printer",name:'"Space Jam": Space Printer',shortDescription:"This is a 3D printer designed to be used in zero-gravity (such as on the ISS). it was made as a senior design project at Tufts in the Fall of 2020 for Professor Doug Matson.",fullDescription:"This is a 3D printer designed to be used in *space* (specifically, zero-gravity environments, such as on the International Space Station). It was built for Professor Douglas Matson for his use in research. We also built the firmware from scratch for this printer given the unique control style and setup of the stepper motors.",images:[{url:`${b}/space_printer/spaceprinter.JPG`,alt:"Space printer",isMain:!0}],tags:[{label:"Solidworks"},{label:"Python"},{label:"Electronics"}],sourceUrl:"https://github.com/0xJeremy/senior-design",detailUrl:"/projects/space-printer"},{id:"crawler",name:"Crawling Robot",shortDescription:'This robot was build as a homework assignment for Tufts ME-134 (Advanced Robotics) in Fall 2020. The assignment was to create a "crawling robot", so we created a modular robot that rolls end over end.',fullDescription:`This robot was made as a homework project for Tufts ME-134 (Advanced Robotics) in the Fall of 2020. The prompt was to create a "crawling robot" (defined as: a robot which uses it's entire body to locomote). This robot rolls segments of it's body over one another in series to create a crawling / rolling motion. It is modular with each segment containing a piece of the robot (Raspberry Pi Zero, 2x voltage regulators, 2x servo drivers, 3x LiPo batteries).`,images:[{url:`${b}/crawler/crawler_isometric.JPG`,alt:"Crawler robot isometric view",isMain:!0},{url:`${b}/crawler/crawler_1.JPG`,alt:"Crawler robot view 1"},{url:`${b}/crawler/crawler_2.jpg`,alt:"Crawler robot view 2"},{url:`${b}/crawler/crawler_3.jpg`,alt:"Crawler robot view 3"},{url:`${b}/crawler/crawler_4.jpg`,alt:"Crawler robot view 4"},{url:`${b}/crawler/crawler_5.jpg`,alt:"Crawler robot view 5"},{url:`${b}/crawler/crawler_6.jpg`,alt:"Crawler robot view 6"},{url:`${b}/crawler/crawler_7.jpg`,alt:"Crawler robot view 7"}],tags:[{label:"Python"},{label:"Solidworks"},{label:"Raspberry Pi"}],sourceUrl:"https://github.com/0xJeremy/me134/tree/master/hw5",detailUrl:"/projects/crawler"},{id:"devboard",name:"STM32 Development Board",shortDescription:"This is a development breakout board for the STM32F405 series microcontroller. I made it to learn about PCB design and embedded microcontroller programming.",fullDescription:"This PCB is a custom-designed breakout for the STM32F405 series microcontroller. I made it to practice PCB design, and learn about programming embedded microcontrollers from scratch. I designed a custom power-chain for supplying power to the MCU and added breakouts around the side for serial breakouts.",images:[{url:`${b}/devboard/devboard.JPG`,alt:"STM32 development board",isMain:!0},{url:`${b}/devboard/devboard_1.JPG`,alt:"Development board view 1"},{url:`${b}/devboard/devboard_2.JPG`,alt:"Development board view 2"},{url:`${b}/devboard/devboard_3.JPG`,alt:"Development board view 3"},{url:`${b}/devboard/devboard_4.JPG`,alt:"Development board view 4"},{url:`${b}/devboard/devboard_5.JPG`,alt:"Development board view 5"},{url:`${b}/devboard/devboard_layout.JPG`,alt:"Development board layout"}],tags:[{label:"KiCAD"}],sourceUrl:"https://github.com/0xJeremy/mpp/tree/master/stm32",detailUrl:"/projects/devboard"},{id:"fireeye",name:"FireEye",shortDescription:"FireEye is an open-source real-time socket communication library designed for low-latency video streaming from remote sources. It was designed to steam a Raspberry Pi camera to a webpage.",fullDescription:"FireEye is an open-source cross-language (Python / Javascript via Node.js) UNIX socket communication library. It was originally build and optimized for streaming video from a Raspberry Pi camera to remote devices in real-time, but has since been generalized to work for arbitrary communication. It is extremely easy to use and handles almost all of the setup for the user. It was later replaced with socket.engine (which is newer and better for a number of reasons).",images:[{url:`${b}/fireeye/fireeye.png`,alt:"FireEye logo",isMain:!0}],tags:[{label:"Python"},{label:"Node.js"}],sourceUrl:"https://github.com/0xJeremy/FireEye",detailUrl:"/projects/fireeye"},{id:"bci",name:"Tufts BCI Team",shortDescription:"As part of the Tufts BCI (Brain-Computer Interface) team, I created a user-interface for viewing real-time brain activity on a 3D model. Data can be streamed from a remote sensor to the page.",fullDescription:"The Tufts BCI Team (Brain-Computer Interface Team) is a cross-major team working on new interfaces for computers, devices, and robots. It uses hardware from OpenBCI and some custom software we've written. I was responsible for creating a user-interface for streaming, in real-time, data from remote sensors to an interface which would display the brain activity onto a 3D model of the brain. This interface I originally wrote in vanilla HTML/CSS/Javascript, but later I re-wrote it in React.js. I also made the team logo (below) which I an unreasonably proud of.",images:[{url:`${b}/bci/bci.png`,alt:"Tufts BCI Team logo",isMain:!0}],tags:[{label:"React.js"},{label:"WebSockets"},{label:"3D Visualization"}],detailUrl:"/projects/bci"},{id:"mle",name:"MLE (My Little Eye)",shortDescription:"MLE (My Little Eye) was part of a hackathon project at HackMIT where we created a fleet of semi-autonomous robots that track down lost objects for people with vision and mobility impairments.",fullDescription:`MLE (My Little Eye) was a hackathon project for HackMIT in 2019. The goal of this project was to create a tool to help the vision and mobility impaired by helping to find lost objects, or just finds objects in the environment. It did this by deploying a small fleet of autonomous robots (based on the "Fleet" swarm robot design) armed with cameras and the vision APIs from Microsoft Azure. The user-interface allowed users to say the name of an object and using Google speech recognition would command the robots to begin hunting for the object. The camera feed would live-stream to the user (along with robot controls), and once an object is found would report it's position to the user, along with the path the robot took to get there. We didn't win, but we got some great sweatshirts.`,images:[{url:`${b}/mle/mle.png`,alt:"MLE interface",isMain:!0},{url:`${b}/mle/mle2.png`,alt:"MLE view 2"},{url:`${b}/mle/mle3.png`,alt:"MLE view 3"}],tags:[{label:"Python"},{label:"Azure Vision"},{label:"Robotics"}],sourceUrl:"https://github.com/0xJeremy/MLE",detailUrl:"/projects/mle"},{id:"vizengine",name:"viz.engine",shortDescription:"viz.engine is an open-source library and framework for robot user-interfaces. It is designed to give real-time feedback about the state of the robot and provide a control interface.",fullDescription:"viz.engine is an open-source React.js powered interface for controlling robots. It was originally designed to help operators handle large swarms of robots simultaneously by streaming real-time information about the state of each system, and providing a unified and straight-forward method of operating all the bots. It uses the socket.engine library for communication between the robots and the server (which allows for standard data to be streamed, as well as real-time video feeds from each robot).",images:[{url:`${b}/vizengine/vizengine.png`,alt:"viz.engine logo",isMain:!0},{url:`${b}/vizengine/dashboard.png`,alt:"viz.engine dashboard"}],tags:[{label:"React.js"},{label:"WebSockets"}],sourceUrl:"https://github.com/0xJeremy/viz.engine",detailUrl:"/projects/vizengine"},{id:"ctrlengine",name:"ctrl.engine",shortDescription:"ctrl.engine is an open-source robotics library. It provides various tools in Python to make writing software for robotics easier and faster. It gives boilerplate multi-threaded code to multiple APIs and image processing tools.",fullDescription:"ctrl.engine is an open-source robotics library written in Python. It was designed to provide a common set of tools to quickly prototype robots (specifically those running on a Raspberry Pi, but in theory is multiplatform). It provides boilerplate multi-threaded code for a number of web-APIs, as well as numerous computer vision examples. It also supports a number of input devices like xbox controllers, and provides standard implementations of common algorithms (like PID controllers and signal filters).",images:[{url:`${b}/ctrlengine/ctrlengine.png`,alt:"ctrl.engine logo",isMain:!0}],tags:[{label:"Python"},{label:"Raspberry Pi"},{label:"Computer Vision"}],sourceUrl:"https://github.com/0xJeremy/ctrl.engine",detailUrl:"/projects/ctrlengine"},{id:"couch",name:"Drivable Couch",shortDescription:"This is a project done as part of the Tufts Robotics club in which we built a drivable, remote-controlled couch. It's pretty much exactly what it sounds like.",fullDescription:"This is a robotic couch. It is remote-controlled via an xbox controller. It can carry three people. It's exactly what it sounds like, and is a ton of fun. This project was made with the Tufts Robotics Club, and was one of my first large-scale robotics projects. It was built using FIRST robotics hardware, and programmed in C++. At one point we had an actual couch on it, but due to storage problems it had to be thrown out.",images:[{url:`${b}/couch/couch.png`,alt:"Drivable couch render",isMain:!0},{url:`${b}/couch/couch2.jpeg`,alt:"Drivable couch view 2"}],tags:[{label:"C++"},{label:"FIRST Robotics"}],detailUrl:"/projects/couch"},{id:"clock",name:"Analog Clock",shortDescription:"This robot was build as a homework assignment for Tufts ME-134 (Advanced Robotics) in Fall 2020. The assignment was to create an analog clock, so we created a (digital) analog clock.",fullDescription:'This robot was made for a homework project as part of Tufts ME-134 (Advanced Robotics) in the Fall of 2020. The prompt was to create an analog clock. Twisting the prompt slightly, I chose to make a "digital" analog clock. This clock comprises 28 individual micro-servo motors controlled by 2 servo drivers being controlled by a Raspberry Pi Zero.',images:[{url:`${b}/clock/clock_isometric.JPG`,alt:"Analog clock isometric view",isMain:!0},{url:`${b}/clock/clock_1.jpg`,alt:"Clock view 1"},{url:`${b}/clock/clock_3.jpg`,alt:"Clock view 3"},{url:`${b}/clock/clock_4.jpg`,alt:"Clock view 4"},{url:`${b}/clock/clock_5.jpg`,alt:"Clock view 5"}],tags:[{label:"Raspberry Pi"},{label:"Python"}],sourceUrl:"https://github.com/0xJeremy/me134/tree/master/hw2",detailUrl:"/projects/clock"},{id:"led",name:"LED Display",shortDescription:"This robot was build as a homework assignment for Tufts ME-134 (Advanced Robotics) in Fall 2020. The assignment was to create a human-interface robot, so we made an interactive display.",fullDescription:"This robot was made for a homework project as part of Tufts ME-134 (Advanced Robotics) in the Fall of 2020. The prompt was to create a robot that interacts with a human by using computer vision to take input. The robot must respond to a number of different fundamental cues (such as head position, or hand position). We chose to build a large LED display (human for scale) made up of 300 individually addressible LEDs. It used a camera to enable the user to play PONG by waving their hands in the air, or snake by moving their head relative to the camera. Because the Raspberry Pi (which is driving the display) could not be loaded with the proper libraries to perform hand-detection, I built a real-time image streamer that sent data from my laptop (which could process the images) to the Raspberry Pi.",images:[{url:`${b}/led/led_isometric.JPG`,alt:"LED display isometric view",isMain:!0},{url:`${b}/led/led_1.jpg`,alt:"LED display view 1"},{url:`${b}/led/led_2.jpg`,alt:"LED display view 2"},{url:`${b}/led/led_3.jpg`,alt:"LED display view 3"},{url:`${b}/led/led_4.jpg`,alt:"LED display view 4"}],tags:[{label:"Raspberry Pi"},{label:"Python"},{label:"Computer Vision"}],sourceUrl:"https://github.com/0xJeremy/me134/tree/master/hw6",detailUrl:"/projects/led"},{id:"autodrive",name:"Autodrive",shortDescription:"This is a project done for ME-84 (Intro. Robotics & Mechatronics) in Fall 2018. This robot drives autonomously using image processing with markers on the ground.",fullDescription:"This project was made as a homework assigmnet for Tufts ME-84 (Intro. Robotics & Mechatronics) in Fall of 2018. The assignment was to use image processing to make a line following robot. We did this by pointing an OpenMV camera facing downwards and using canny edge-detection to find the lines on the table. We also used a PyBoard v2 to control the servo motors attached to the car (acting as drive motors).",images:[{url:`${b}/autodrive/autodrive.jpeg`,alt:"Autodrive robot",isMain:!0},{url:`${b}/autodrive/autodrive_1.JPG`,alt:"Autodrive view 1"},{url:`${b}/autodrive/autodrive_2.JPG`,alt:"Autodrive view 2"},{url:`${b}/autodrive/autodrive_3.JPG`,alt:"Autodrive view 3"}],tags:[{label:"OpenMV"},{label:"PyBoard"},{label:"Computer Vision"}],detailUrl:"/projects/autodrive"},{id:"dume-arms",name:"Dum-E IoT Arms",shortDescription:"These internet-enabled robotic arm swarm was made at the MakeHarvard hackathon in 2019. They were made to be an educational tool for teaching introductory robotics for universities.",fullDescription:"The Dum-E IoT Arms (Dum-E being the name of the robotic arm Tony Stark keeps in his workshop, of course) is a project made at the MakeHarvard hackathon in 2019. We made them to be an educational teaching tool for univresity students to learn about the basics of IoT, robotics, and fabrication. We used them briefly in our university robotics club to teach some of these topics after we had made the prototypes. The arms can be controlled by a single centralized web-server and use ESP8266s to stream instructions from the internet.",images:[{url:`${b}/dume_arms/dume_arms.jpeg`,alt:"Dum-E IoT Arms",isMain:!0},{url:`${b}/dume_arms/dume_arms_1.JPG`,alt:"Dum-E Arms view 1"},{url:`${b}/dume_arms/dume_arms_2.JPG`,alt:"Dum-E Arms view 2"},{url:`${b}/dume_arms/dume_arms_3.JPG`,alt:"Dum-E Arms view 3"}],tags:[{label:"ESP8266"},{label:"IoT"},{label:"Robotics"}],sourceUrl:"https://github.com/0xJeremy/Dum-E-IOT",detailUrl:"/projects/dume-arms"},{id:"lego",name:"LEGO Robots",shortDescription:"These are a series of LEGO robots made for ME-84 (Intro. Robotics & Mechatronics) in Fall 2018 at Tufts University.",fullDescription:"These are a series of robots made for Tufts ME-84 (Intro. Robotics & Mechatronics) in the Fall of 2018. Each one was a homework assignment, and all the robots were programmed in LabVIEW. The assignments include making a kinetic art sculpture, an wirelessly-communicating clock, a childrens toy, and a remote-control robotic arm. All these robots used the LEGO EV3 platform.",images:[{url:`${b}/lego/lego.jpeg`,alt:"LEGO robots collection",isMain:!0},{url:`${b}/lego/iot_arms_1.JPG`,alt:"LEGO IoT arms"},{url:`${b}/lego/clock_1.JPG`,alt:"LEGO clock"},{url:`${b}/lego/towers_1.JPG`,alt:"LEGO towers"},{url:`${b}/lego/gear_1.JPG`,alt:"LEGO gear sculpture"}],tags:[{label:"LabVIEW"},{label:"LEGO EV3"}],detailUrl:"/projects/lego"},{id:"qbot",name:"QBot",shortDescription:"QBot was a robot made as part of ME-84 (Intro. Robotics & Mechatronics) in Fall 2018. It uses image recognition to respond to commands from QR codes.",fullDescription:'This robot was a homework project from Tufts ME-84 (Intro. Robotics & Mechatronics). The assignment was to create a robot that takes its cues for movement from a camera (computer vision). We created a driving robot that uses an OpenMV camera to recognize QR tags representing "move forward", "move backward", "turn left", "turn right", "stop", etc. The OpenMV camera commanded a PyBoard v2 which in turn sent commands to the two servo motors (here being used as drive motors).',images:[{url:`${b}/qbot/qbot.jpeg`,alt:"QBot robot",isMain:!0},{url:`${b}/qbot/bot_1.JPG`,alt:"QBot view 1"},{url:`${b}/qbot/bot_2.JPG`,alt:"QBot view 2"},{url:`${b}/qbot/bot_3.JPG`,alt:"QBot view 3"}],tags:[{label:"OpenMV"},{label:"PyBoard"},{label:"Computer Vision"}],detailUrl:"/projects/qbot"},{id:"ujumbo",name:"µJumbo",shortDescription:'µJumbo was an entry to the Trinity International Robotic Firefighting competition in the "small robot" category.',fullDescription:'µJumbo was an entry to the Trinity International Robotic Firefighting competition in the "smallest robot" category. Unfortunately, that year it was only the second smallest robot (losing by a matter of several cubic centimeters). This robot was to navigate a maze autonomously and extinguish a fire (a candle). It was also required to recognize a tone played as the starting signal (thus the microphone and filtering circuit on the top of the robot). We equipped this robot with an Arduino Nano, wheels encoders, and multiple time-of-flight distance sensors placed around the robot.',images:[{url:`${b}/ujumbo/ujumbo.jpeg`,alt:"µJumbo robot",isMain:!0},{url:`${b}/ujumbo/jumbo_2.JPG`,alt:"µJumbo view 2"},{url:`${b}/ujumbo/jumbo_3.JPG`,alt:"µJumbo view 3"},{url:`${b}/ujumbo/jumbo_4.JPG`,alt:"µJumbo view 4"}],tags:[{label:"Arduino"},{label:"C++"},{label:"Robotics"}],detailUrl:"/projects/ujumbo"},{id:"firefighting",name:"Firefighting Robot",shortDescription:"This robot was our entry into the Trinity International Robotic Firefighting Competition.",fullDescription:"This robot is one of the first I've made from scratch, and was made for the Trinity International Robotic Firefighting Competition in the Spring of 2018. It's task was to listen for a tone, and when signaled would begin to autonomously navigate a maze and extinguish a fire. It was powered by a Raspberry Pi Zero and was surrounded by ultrasonic distance sensors to detect the walls of the maze.",images:[{url:`${b}/firefighting/firefighting.jpeg`,alt:"Firefighting robot",isMain:!0},{url:`${b}/firefighting/firefighting_1.JPG`,alt:"Firefighting robot view 1"},{url:`${b}/firefighting/firefighting_2.JPG`,alt:"Firefighting robot view 2"}],tags:[{label:"Raspberry Pi"},{label:"Python"},{label:"Robotics"}],detailUrl:"/projects/firefighting"},{id:"expo-digitizer",name:"Expo Digitizer",shortDescription:"This is an attachment for an Expo marker to turn it into an active digitizer.",fullDescription:"This project was made as part of Tufts Polyhack in Fall 2017. It is an attachment for an Expo marker to turn it into an active digitizer. Using an accelerometer mounted to the marker, and a button to detect when it makes contact with the board, this marker could generate a PDF of the hardwriting of the user.",images:[{url:`${b}/expo_digitizer/expo_digitizer.jpeg`,alt:"Expo Digitizer",isMain:!0},{url:`${b}/expo_digitizer/expo_digitizer_2.jpeg`,alt:"Expo Digitizer view 2"}],tags:[{label:"Arduino"},{label:"Accelerometer"}],detailUrl:"/projects/expo-digitizer"},{id:"hobbesbot",name:"HobbesBot",shortDescription:'This is a robotic puppet with 7 degrees of freedom called "HobbesBot" after the tiger in Calvin and Hobbes. It was the final project from ME-84 (Intro. Robotics & Mechatronics) in Fall 2018 at Tufts.',fullDescription:"HobbesBot is the final project from Tufts ME-84 (Intro. Robotics & Mechatronics). The assignment was to build an animatronic puppet that takes cues from a human, and can interact with them. We created Hobbes, the tiger from Calvin & Hobbes, as a 7 degrees-of-freedom robot equipped with computer vision. Using a Raspberry Pi and a camera (along with half of Google Cloud Platforms vision APIs), Hobbes determines the users mood and reacts accordingly. As a cherry on top, we made two IoT enabled LED cubes to light up when Hobbes detects the user is happy.",images:[{url:`${b}/hobbesbot/hobbesbot.jpeg`,alt:"HobbesBot",isMain:!0},{url:`${b}/hobbesbot/hobbes_1.JPG`,alt:"HobbesBot view 1"},{url:`${b}/hobbesbot/hobbes_2.JPG`,alt:"HobbesBot view 2"},{url:`${b}/hobbesbot/hobbes_3.JPG`,alt:"HobbesBot view 3"}],tags:[{label:"Raspberry Pi"},{label:"Python"},{label:"GCP Vision"}],detailUrl:"/projects/hobbesbot"},{id:"quadcopter",name:"Quadcopter UAV",shortDescription:"This is a quadcopter UAV made with the Tufts MAKE club. It was originally designed to be semi-autonomous.",fullDescription:"This quadcopter was built with the Tufts MAKE club. The project was to build a quadcopter from scratch, and program it to fly semi-autonomously using computer vision. Unfortunately, due to semester time constraints, we were unable to finish the autonomous portion of the build, but it flew pretty well.",images:[{url:`${b}/quadcopter/quadcopter.jpeg`,alt:"Quadcopter UAV",isMain:!0},{url:`${b}/quadcopter/quadcopter_2.jpeg`,alt:"Quadcopter view 2"}],tags:[{label:"Drone"},{label:"Computer Vision"}],detailUrl:"/projects/quadcopter"},{id:"longboard",name:"Electric Longboard",shortDescription:"This is an electric longboard made with the Tufts MAKE club.",fullDescription:"This was a project with the Tufts MAKE club in which we built an electric longboard. It was a pretty straight forward project, and the end result worked suprisingly well.",images:[{url:`${b}/longboard/longboard.jpeg`,alt:"Electric longboard",isMain:!0},{url:`${b}/longboard/longboard_1.jpeg`,alt:"Longboard view 2"}],tags:[{label:"Electronics"},{label:"Fabrication"}],detailUrl:"/projects/longboard"},{id:"pico-pca",name:"Raspberry Pi Pico Servo Driver",shortDescription:"This is a PCB daughterboard for the Raspberry Pi Pico that carries a PCB9685 16 channel servo-driver.",fullDescription:"This PCB is a breakout board for the Raspberry Pi Pico. It carries a PCA9685 16-channel PWM driver chip, and provides breakouts for 16 servos. It also includes breakouts for Stemma QWIIC connectors on the side of the board.",images:[{url:`${b}/pico_pca/pico_pca.JPG`,alt:"Pico Servo Driver",isMain:!0},{url:`${b}/pico_pca/pico_pca_1.JPG`,alt:"Pico Servo Driver view 1"},{url:`${b}/pico_pca/pico_pca_2.JPG`,alt:"Pico Servo Driver view 2"},{url:`${b}/pico_pca/pico_pca_3.JPG`,alt:"Pico Servo Driver view 3"},{url:`${b}/pico_pca/pico_pca_4.JPG`,alt:"Pico Servo Driver view 4"}],tags:[{label:"KiCAD"},{label:"PCB Design"}],detailUrl:"/projects/pico-pca"}],yw=v.article`
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--transition-normal),
    box-shadow var(--transition-normal);

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }
`;v.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: linear-gradient(135deg, var(--color-gray-800) 0%, var(--color-gray-700) 100%);
`;v.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);

  ${yw}:hover & {
    transform: scale(1.05);
  }
`;v.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-4xl);
  color: var(--color-gray-500);
  background: linear-gradient(135deg, var(--color-gray-800) 0%, var(--color-gray-700) 100%);
`;v.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: var(--spacing-lg);
  gap: var(--spacing-md);
`;v.h3`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  line-height: var(--line-height-tight);
  margin: 0;
`;v.p`
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  line-height: var(--line-height);
  margin: 0;
  /* Clamp to ~3 lines */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;v.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-top: auto;
`;v.span`
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-accent);
  background: var(--color-accent-subtle);
  border-radius: var(--radius-full);
  white-space: nowrap;
  font-family: var(--font-family-mono);
`;v.div`
  display: flex;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg);
  padding-top: 0;
`;const Wp=v.a`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition:
    background var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast);
  cursor: pointer;
`;v(Wp)`
  color: var(--color-gray-100);
  background: var(--color-gray-800);
  border: 1px solid var(--color-gray-700);

  &:hover {
    background: var(--color-gray-700);
    border-color: var(--color-gray-600);
    color: var(--color-white);
  }
`;v(Wp).attrs({as:so})`
  color: var(--color-black);
  background: var(--color-accent);
  border: 1px solid var(--color-accent);

  &:hover {
    background: var(--color-accent-hover);
    border-color: var(--color-accent-hover);
  }
`;v.section`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--spacing-3xl) var(--spacing-xl);
`;v.header`
  text-align: center;
  margin-bottom: var(--spacing-2xl);
`;v.h2`
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  letter-spacing: var(--letter-spacing-tight);
  margin: 0 0 var(--spacing-sm) 0;

  @media (min-width: 768px) {
    font-size: var(--font-size-4xl);
  }
`;v.p`
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  margin: 0;
`;v.div`
  display: grid;
  gap: var(--grid-gap);
  grid-template-columns: 1fr;

  /* Tablet portrait: 2 columns */
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Desktop: 3 columns */
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;v.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--spacing-3xl);
  padding: 0 var(--spacing-xl);

  @media (max-width: ${R}px) {
    padding: 0 var(--spacing-md);
    margin-bottom: var(--spacing-2xl);
  }
`;v.div`
  width: 80%;
  max-width: 1100px;
  margin-bottom: var(--spacing-xl);
  padding-left: var(--spacing-md);
  z-index: 1;

  @media (max-width: ${R}px) {
    width: 100%;
    padding-left: 0;
  }
`;v.h2`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wide);
  text-transform: uppercase;
  color: var(--color-gray-500);
  margin-bottom: var(--spacing-xs);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: var(--color-accent);
    border-radius: 2px;
  }
`;v.p`
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);

  @media (max-width: ${R}px) {
    font-size: var(--font-size-xl);
  }
`;v.div`
  width: 80%;
  max-width: 1100px;
  z-index: 1;

  @media (max-width: ${R}px) {
    width: 100%;
  }
`;v.div`
  display: grid;
  gap: var(--grid-gap);
  grid-template-columns: 1fr;

  /* Tablet portrait: 2 columns */
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Desktop: 3 columns */
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;const on=950,ww=v.article`
  position: relative;
  width: 100%;
  margin-bottom: var(--spacing-4xl);

  @media (max-width: ${R}px) {
    margin-bottom: var(--spacing-3xl);
  }
`,xw=v.div`
  display: grid;
  grid-template-columns: ${({$alignRight:e})=>e?"7fr 5fr":"5fr 7fr"};
  gap: var(--spacing-md);
  align-items: center;
  overflow: visible;

  @media (max-width: ${on}px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`,kw=v.div`
  position: relative;
  z-index: 1;
  order: ${({$alignRight:e})=>e?1:2};

  @media (max-width: ${on}px) {
    order: 1;
  }
`,bw=v.img`
  width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  object-fit: cover;
`,Sw=v.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: var(--radius-md);
  background: linear-gradient(
    135deg,
    var(--color-gray-800) 0%,
    var(--color-gray-700) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  font-size: var(--font-size-2xl);
`,Cw=v.div`
  position: relative;
  z-index: 10;
  text-align: ${({$alignRight:e})=>e?"right":"left"};
  order: ${({$alignRight:e})=>e?2:1};
  overflow: visible;

  @media (max-width: ${on}px) {
    order: 2;
    text-align: left;
  }
`,Ew=v.span`
  display: block;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--color-accent);
  margin-bottom: var(--spacing-xs);
`,Gp=ye`
  color: var(--color-accent);
  cursor: pointer;
`,jw=v.h3`
  font-family: var(--font-family);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-white);
  letter-spacing: 1px;
  margin-bottom: var(--spacing-md);
  transition: color var(--transition-fast);

  &:hover {
    ${Gp}
  }

  @media (max-width: ${R}px) {
    font-size: var(--font-size-xl);
  }
`,$w=v(so)`
  color: inherit;
  text-decoration: none;

  &:hover {
    ${Gp}
  }
`,Pw=v.div`
  position: relative;
  background: var(--color-gray-900);
  border-radius: var(--radius-md);
  padding: var(--spacing-xl);
  font-family: var(--font-family);
  font-size: var(--font-size-lg);
  color: var(--color-gray-100);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  transition:
    transform var(--transition-normal),
    box-shadow var(--transition-normal);

  /* Extend past grid column for overlap effect */
  /* alignRight=true: content on right, image on left → extend LEFT to overlap image */
  /* alignRight=false: content on left, image on right → extend RIGHT to overlap image */
  width: 120%;
  max-width: 120%;

  ${({$alignRight:e})=>e?ye`
          margin-left: -20%;
          margin-right: 0;
        `:ye`
          margin-left: 0;
          margin-right: 0;
        `}

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }

  @media (max-width: ${on}px) {
    width: 100%;
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    background: transparent;
    padding: 0;
    font-size: var(--font-size-base);
  }
`,zw=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  justify-content: ${({$alignRight:e})=>e?"flex-end":"flex-start"};
  margin-bottom: var(--spacing-lg);

  @media (max-width: ${on}px) {
    justify-content: flex-start;
  }
`,_w=v.span`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--color-gray-200);
`,Tw=v.div`
  display: flex;
  gap: var(--spacing-md);
  justify-content: ${({$alignRight:e})=>e?"flex-end":"flex-start"};

  @media (max-width: ${on}px) {
    justify-content: flex-start;
  }
`,Ic=v.a`
  color: var(--color-gray-200);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-accent);
  }
`,Iw=()=>c.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:c.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),Rw=()=>c.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[c.jsx("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),c.jsx("polyline",{points:"15 3 21 3 21 9"}),c.jsx("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]}),Dw=({project:e,alignRight:t=!1})=>{const r=e.images.find(n=>n.isMain)??e.images[0];return c.jsx(ww,{$alignRight:t,children:c.jsxs(xw,{$alignRight:t,children:[c.jsx(kw,{$alignRight:t,children:r?c.jsx(bw,{src:r.url,alt:r.alt}):c.jsx(Sw,{"aria-label":"No project image",children:"📁"})}),c.jsxs(Cw,{$alignRight:t,children:[c.jsx(Ew,{children:"Featured Project"}),c.jsx(jw,{$alignRight:t,children:c.jsx($w,{to:e.detailUrl,children:e.name})}),c.jsx(Pw,{$alignRight:t,children:e.shortDescription}),c.jsx(zw,{$alignRight:t,children:e.tags.map(n=>c.jsx(_w,{children:n.label},n.label))}),c.jsxs(Tw,{$alignRight:t,children:[e.sourceUrl&&c.jsx(Ic,{href:e.sourceUrl,target:"_blank",rel:"noopener noreferrer","aria-label":`View ${e.name} source code on GitHub`,children:c.jsx(Iw,{})}),c.jsx(Ic,{href:e.detailUrl,"aria-label":`View ${e.name} details`,children:c.jsx(Rw,{})})]})]})]})})},Nw=({projects:e,title:t="Some Things I've Built",sectionNumber:r=void 0,maxProjects:n=3,id:o=void 0})=>{const i=e.filter(a=>a.featured).slice(0,n);return i.length===0?null:c.jsx(Sn,{id:o,title:t,sectionNumber:r,children:i.map((a,l)=>c.jsx(Dw,{project:a,alignRight:l%2===1},a.id))})},Jp=v.a`
  display: flex;
  flex-direction: column;
  background: var(--color-gray-900);
  padding: var(--spacing-xl) var(--spacing-lg);
  border-radius: var(--radius-md);
  text-decoration: none;
  color: var(--color-white);
  transition:
    transform var(--transition-normal),
    color var(--transition-fast);
  position: relative;
  top: 0;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    color: var(--color-accent);
  }

  @media (max-width: ${R}px) {
    padding: var(--spacing-lg);
  }
`,Mw=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xl);
`,Lw=v.span`
  color: var(--color-accent);
  display: flex;
  align-items: center;
`,Ow=v.span`
  color: var(--color-gray-200);
  display: flex;
  align-items: center;
  transition: color var(--transition-fast);

  ${Jp}:hover & {
    color: var(--color-accent);
  }
`,Fw=v.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 140px;
`,Aw=v.h3`
  font-family: var(--font-family);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: inherit;
  letter-spacing: 1px;
  margin-bottom: var(--spacing-md);

  @media (max-width: ${R}px) {
    font-size: var(--font-size-lg);
  }
`,Uw=v.p`
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  color: var(--color-gray-100);
  line-height: 1.5;
  /* Clamp to ~3-4 lines */
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: ${R}px) {
    font-size: var(--font-size-sm);
    -webkit-line-clamp: 3;
  }
`,Bw=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-top: auto;
  padding-top: var(--spacing-xl);
`,Hw=v.span`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-sm);
  color: var(--color-gray-200);

  @media (max-width: ${R}px) {
    font-size: var(--font-size-xs);
  }
`,Vw=()=>c.jsx("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:c.jsx("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"})}),Ww=()=>c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:c.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),Gw=({project:e,className:t=void 0})=>{const r=e.sourceUrl??e.detailUrl,n=!!e.sourceUrl;return c.jsxs(Jp,{href:r,target:n?"_blank":void 0,rel:n?"noopener noreferrer":void 0,className:t,children:[c.jsxs(Mw,{children:[c.jsx(Lw,{children:c.jsx(Vw,{})}),e.sourceUrl&&c.jsx(Ow,{children:c.jsx(Ww,{})})]}),c.jsxs(Fw,{children:[c.jsx(Aw,{children:e.name}),c.jsx(Uw,{children:e.shortDescription})]}),c.jsx(Bw,{children:e.tags.map(o=>c.jsx(Hw,{children:o.label},o.label))})]})},Qp=950,Jw=v.section`
  position: relative;
  margin: 0 auto;
  margin-bottom: var(--spacing-4xl);
  width: 75%;
  max-width: 1100px;

  @media (max-width: ${Qp}px) {
    width: 95%;
  }

  @media (max-width: ${R}px) {
    margin-bottom: var(--spacing-3xl);
  }
`,Qw=v.header`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`,Yw=v.h2`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-white);
  letter-spacing: 1px;
  margin-bottom: var(--spacing-sm);

  @media (max-width: ${R}px) {
    font-size: var(--font-size-lg);
  }
`,Kw=v(so)`
  display: inline-block;
  font-family: var(--font-family-mono);
  font-size: var(--font-size-base);
  color: var(--color-accent);
  text-decoration: none;
  transition: color var(--transition-fast);

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: ${R}px) {
    font-size: var(--font-size-sm);
  }
`,Xw=v.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);

  @media (max-width: ${Qp}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${R}px) {
    grid-template-columns: 1fr;
  }
`,qw=v.div`
  text-align: center;
  margin-top: var(--spacing-3xl);
`,Zw=v.button`
  font-family: var(--font-family-mono);
  font-size: var(--font-size-base);
  color: var(--color-accent);
  background: transparent;
  border: 1px solid var(--color-accent);
  border-radius: var(--radius-md);
  padding: var(--spacing-md) var(--spacing-xl);
  cursor: pointer;
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    background-color: var(--color-accent-subtle);
  }

  @media (max-width: ${R}px) {
    font-size: var(--font-size-sm);
    padding: var(--spacing-sm) var(--spacing-lg);
  }
`,ex=({projects:e,title:t="Other Noteworthy Projects",subtitleText:r="view all projects",subtitleHref:n="/projects",initialCount:o=6,id:i=void 0})=>{const[a,l]=j.useState(!1),s=e.filter(g=>!g.featured);if(s.length===0)return null;const u=a?s:s.slice(0,o),h=s.length>o,f=()=>{l(g=>!g)};return c.jsxs(Jw,{id:i,children:[c.jsxs(Qw,{children:[c.jsx(Yw,{children:t}),c.jsx(Kw,{to:n,children:r})]}),c.jsx(Xw,{children:u.map(g=>c.jsx(Gw,{project:g},g.id))}),h&&c.jsx(qw,{children:c.jsx(Zw,{onClick:f,type:"button",children:a?"Show Fewer":"Show More"})})]})},Ge={greeting:"Hi, my name is",title:"Jeremy Kanovsky",subtitle:"I write code for hardware.",description:"I'm a Boston-based software engineer who specializes in writing code for IoT devices and robots. Sometimes, I dabble in hardware. Currently, I'm an engineer at Markforged working on the software powering next-generation 3D printers.",primaryButton:{label:"Get In Touch",href:"/#contact"},secondaryButton:{label:"See My Work",href:"/#projects"}},qt={title:"About Me",sectionNumber:"01",paragraphs:[{text:"Hello! My name is Jeremy and I write code that lives and runs on hardware. Specifically, I enjoy writing code for robots, 3D printers, and embedded systems. I currently work at {markforged} writing software that powers next generation 3D printers. Previously I've worked at the {msgarage} and the {nolop}.",links:{markforged:{text:"Markforged",href:"https://markforged.com/"},msgarage:{text:"Microsoft Garage",href:"https://www.microsoft.com/en-us/garage/"},nolop:{text:"Nolop Makerspace",href:"https://nolop.org/"}}},"In my free time, I build open-source libraries, robots, and design circuit boards. I like to read, and climb up then fall off rocks."],skills:["Node.js","TypeScript","Python","CI/CD","React.js","AWS"],skillsIntro:"Some of the things I've been working on recently:",image:{url:void 0,alt:"Profile photo"}},Rc={title:"Work Experience",entries:[{id:"markforged",organization:"Markforged",location:"Waltham, MA",overallDuration:"2019 - Present",logoUrl:"/sandbox/static/logos/markforged.png",roles:[{title:"Senior Software Engineer",duration:"June 2023 - Present",bullets:["Lead design and implementation of cross-team features that spanned from hardware control to cloud data ingestion pipelines, improving pre-emptive device error detection and device thermal modeling.","Coordinated fundamental architectural features between hardware platform team and cloud-based software teams to provide a seamless user experience across the 3D printing ecosystem.","Worked closely with the product management and program management teams to plan and scope new initiatives and provided scoping and timelines to the software teams involved.","Mentored junior software engineers in system design, software architecture, and testing best practices."]},{title:"Software Engineer II",duration:"October 2022 - June 2023",bullets:["Implemented core functionality and device workflows for multiple new hardware products, including per-device automatic thermal and mechanical calibrations, and error detection and correction.","Supported multiple engineering teams during initial manufacturing and testing new devices."]},{title:"Software Engineer",duration:"June 2021 - September 2022",bullets:["Designed core infrastructure for a new printer software platform, including a real-time hardware telemetry system and user workflows guiding customers through calibration procedures.","Implemented a data security and integrity pipeline for print-jobs being sent remotely to printers, and ensuring all data reported from the printers was encrypted and signed for integrity."]},{title:"Software Engineer Intern",duration:"May - August 2020",bullets:["Designed and implemented an automatic multi-point print bed leveling compensation procedure that ensured consistent and repeatable machine zeroing before every print."]},{title:"Software Engineer Intern",duration:"May - August 2019",bullets:["Developed a novel procedure for calibrating 3D printers before each print by determining the extrusion health of the system using closed-loop laser based on-device scanning."]}]},{id:"microsoft",organization:"Microsoft",location:"Cambridge, MA",overallDuration:"January - May 2020",logoUrl:"/sandbox/static/logos/microsoft.png",roles:[{title:"Makerspace Lead",duration:"January - May 2020",bullets:["Managed operations, expanded makerspace capabilities, maintained and operated lab equipment."]}]},{id:"nolop-makerspace",organization:"Nolop Makerspace, Tufts University",location:"Medford, MA",overallDuration:"January 2019 - May 2021",logoUrl:"/sandbox/static/logos/nolop.png",roles:[{title:"Fabrication Supervisor",duration:"January 2019 - May 2021",bullets:["Train and mentor students in fabrication techniques and project design."]}]},{id:"tufts-ta",organization:"School of Engineering, Tufts University",location:"Medford, MA",overallDuration:"2019 - 2021",logoUrl:"/sandbox/static/logos/tufts.jpg",roles:[{title:"Teaching Assistant",duration:"2019 - 2021",description:"Courses: Robotics and Mechatronics (2020, 2021), Electromechanical Systems and Robotics (2020), Simple Robotics (2019, 2020), Data Structures (2019), Introduction to Computer Science (2019), Introduction to Computing in Engineering (2019, 2020)"}]}]},Dc={title:"Research",entries:[{id:"tufts-asar",organization:"Tufts University, Department of Mechanical Engineering",location:"Medford, MA",overallDuration:"May 2018 - December 2018",logoUrl:"/sandbox/static/logos/tufts.jpg",roles:[{title:"Undergraduate Research Project",duration:"May 2018 - December 2018",description:"Autonomous Systems and Robotics (ASAR) Lab, PI: Prof. Jason Rife",bullets:["Developed and implemented software infrastructure for the three-dimensional positioning and feedback control of multiple autonomous quadcopter UAVs."]}]}]},Nc={title:"Patents",entries:[{id:"extrusion-health",title:"Determination of Extrusion Component Health In 3D Printing",inventors:["Jeremy Kanovsky","Harrison Davis","Nicholas Kalweit","Bruce Jones"],applicationNumber:"U.S. Patent Application No. 20250222656",filedDate:"January 6, 2025",link:"https://patents.google.com/patent/US20250222656A1"}]},tx=v.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,rx=v.div`
  position: relative;
  min-height: 100vh;
  z-index: 1;
`,nx=v.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: var(--spacing-4xl);
  padding-bottom: var(--spacing-4xl);
  z-index: 1;
`,ox=()=>{const e=lp();return c.jsxs(tx,{children:[c.jsx(p1,{density:10,seed:42}),c.jsxs(rx,{children:[c.jsx(y1,{}),c.jsxs(Cy,{media:c.jsx(Ky,{}),children:[c.jsx(Ry,{greeting:Ge.greeting,title:Ge.title,subtitle:Ge.subtitle,description:Ge.description,primaryAction:{label:Ge.primaryButton.label,onClick:()=>{const t=Ge.primaryButton.href;if(t.startsWith("/#")){const r=t.split("/#")[1],n=document.getElementById(r);n?n.scrollIntoView({behavior:"smooth"}):e(t)}else e(t)}},secondaryAction:{label:Ge.secondaryButton.label,onClick:()=>{if(Ge.secondaryButton.href.startsWith("/#")){const t=Ge.secondaryButton.href.split("/#")[1],r=document.getElementById(t);r?r.scrollIntoView({behavior:"smooth"}):e(Ge.secondaryButton.href)}else e(Ge.secondaryButton.href)}}}),c.jsx(Fy,{})]})]}),c.jsxs(nx,{children:[c.jsx(Sn,{id:"about",title:qt.title,sectionNumber:qt.sectionNumber,children:c.jsx(H1,{paragraphs:qt.paragraphs,skills:qt.skills,skillsIntro:qt.skillsIntro,imageUrl:qt.image.url,imageAlt:qt.image.alt})}),c.jsx(Sn,{id:"experience",title:Rc.title,sectionNumber:"02",children:c.jsx(_c,{entries:Rc.entries})}),c.jsx(Sn,{id:"research",title:Dc.title,sectionNumber:"03",children:c.jsx(_c,{entries:Dc.entries,showLogoPlaceholders:!1})}),c.jsx(Sn,{id:"patents",title:Nc.title,sectionNumber:"04",children:c.jsx(vw,{entries:Nc.entries})}),c.jsx(Nw,{id:"featured-projects",projects:Tc,title:"Some Things I've Built",sectionNumber:"05"}),c.jsx(ex,{id:"other-projects",projects:Tc,initialCount:6})]})]})},ix=v.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,ax=v.div`
  margin-bottom: 1rem;
`,lx=v.h1`
  font-size: 2.5rem;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
`,sx=v.p`
  color: #6c757d;
  font-size: 1.1rem;
`,ux=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
`,cx=v.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`,dx=v.div`
  height: 160px;
  background: linear-gradient(135deg, #e94560 0%, #1a1a2e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
`,fx=v.div`
  padding: 1.5rem;
`,px=v.h2`
  font-size: 1.25rem;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
`,hx=v.p`
  color: #6c757d;
  font-size: 0.95rem;
  margin-bottom: 1rem;
`,mx=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,gx=v.span`
  background: #f0f0f0;
  color: #1a1a2e;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`,vx=[{id:1,title:"Project One",description:"A sample project showcasing React and TypeScript integration.",icon:"🚀",tags:["React","TypeScript","Vite"]},{id:2,title:"Project Two",description:"Another exciting project demonstrating modern web development.",icon:"🎨",tags:["styled-components","CSS-in-JS"]},{id:3,title:"Project Three",description:"A third project example to fill out the grid layout.",icon:"⚡",tags:["GitHub Pages","Static Site"]}],yx=()=>c.jsxs(ix,{children:[c.jsxs(ax,{children:[c.jsx(lx,{children:"Projects"}),c.jsx(sx,{children:"A collection of my work and side projects."})]}),c.jsx(ux,{children:vx.map(e=>c.jsxs(cx,{children:[c.jsx(dx,{children:e.icon}),c.jsxs(fx,{children:[c.jsx(px,{children:e.title}),c.jsx(hx,{children:e.description}),c.jsx(mx,{children:e.tags.map(t=>c.jsx(gx,{children:t},t))})]})]},e.id))})]}),wx=v.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
`,xx=v.h1`
  font-size: 2.5rem;
  color: #1a1a2e;
`,Mc=v.section`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`,Lc=v.h2`
  font-size: 1.5rem;
  color: #1a1a2e;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e94560;
  display: inline-block;
`,Oc=v.p`
  color: #4a4a4a;
  line-height: 1.8;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,kx=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`,Ia=v.div`
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
`,Ra=v.h3`
  font-size: 1rem;
  color: #e94560;
  margin-bottom: 0.5rem;
`,Da=v.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,bt=v.li`
  color: #4a4a4a;
  font-size: 0.95rem;

  &::before {
    content: '•';
    color: #e94560;
    margin-right: 0.5rem;
  }
`,bx=()=>c.jsxs(wx,{children:[c.jsx(xx,{children:"About Me"}),c.jsxs(Mc,{children:[c.jsx(Lc,{children:"Hello!"}),c.jsx(Oc,{children:"Welcome to my personal sandbox. This is a place where I experiment with new technologies, build side projects, and showcase my work."}),c.jsx(Oc,{children:"Feel free to explore the projects section to see what I've been working on, or reach out if you'd like to connect."})]}),c.jsxs(Mc,{children:[c.jsx(Lc,{children:"Skills"}),c.jsxs(kx,{children:[c.jsxs(Ia,{children:[c.jsx(Ra,{children:"Frontend"}),c.jsxs(Da,{children:[c.jsx(bt,{children:"React"}),c.jsx(bt,{children:"TypeScript"}),c.jsx(bt,{children:"styled-components"})]})]}),c.jsxs(Ia,{children:[c.jsx(Ra,{children:"Tools"}),c.jsxs(Da,{children:[c.jsx(bt,{children:"Vite"}),c.jsx(bt,{children:"Git"}),c.jsx(bt,{children:"VS Code"})]})]}),c.jsxs(Ia,{children:[c.jsx(Ra,{children:"Testing"}),c.jsxs(Da,{children:[c.jsx(bt,{children:"Vitest"}),c.jsx(bt,{children:"React Testing Library"})]})]})]})]})]}),Sx=v.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  max-width: 600px;
  margin: 0 auto;
  padding: var(--spacing-3xl) var(--spacing-xl);
`,Cx=v.h1`
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text);
  letter-spacing: var(--letter-spacing-tight);
`,Ex=v.p`
  font-size: var(--font-size-lg);
  color: var(--color-text-muted);
  line-height: var(--line-height);
`,jx=v.div`
  padding: var(--spacing-2xl);
  background: var(--color-gray-100);
  border-radius: var(--radius-lg);
  border: 2px dashed var(--color-gray-300);
  text-align: center;
  color: var(--color-text-muted);
`,$x=()=>c.jsxs(Sx,{children:[c.jsx(Cx,{children:"Contact"}),c.jsx(Ex,{children:"Get in touch — I'd love to hear from you."}),c.jsx(jx,{children:"Contact form coming soon..."})]}),Px=()=>c.jsx(wv,{basename:"/sandbox",children:c.jsxs(k1,{children:[c.jsx(G0,{scrollBased:!0}),c.jsx(wy,{}),c.jsxs(fv,{children:[c.jsx(xn,{index:!0,element:c.jsx(ox,{})}),c.jsx(xn,{path:"projects",element:c.jsx(yx,{})}),c.jsx(xn,{path:"about",element:c.jsx(bx,{})}),c.jsx(xn,{path:"contact",element:c.jsx($x,{})})]})]})}),zx=b0`
  /* ==================== DESIGN TOKENS ==================== */
  :root {
    /* Colors - Dark navy palette with orange accent */
    --color-white: #e6f1ff;
    --color-gray-50: #ccd6f6;
    --color-gray-100: #a8b2d1;
    --color-gray-200: #8892b0;
    --color-gray-300: #6f7a99;
    --color-gray-400: #5a6482;
    --color-gray-500: #495670;
    --color-gray-600: #3d4a61;
    --color-gray-700: #303d52;
    --color-gray-800: #233554;
    --color-gray-900: #112240;
    --color-black: #0a192f;

    /* Accent colors - Orange (small splashes) */
    --color-accent: #FF7F11;
    --color-accent-hover: #ffaa55;
    --color-accent-subtle: rgba(255, 127, 17, 0.2);

    /* Semantic colors */
    --color-background: var(--color-black);
    --color-surface: var(--color-gray-900);
    --color-viewport: #020c1b;
    --color-text: var(--color-gray-50);
    --color-text-muted: var(--color-gray-200);
    --color-text-on-dark: var(--color-white);
    --color-text-on-dark-muted: var(--color-gray-200);
    --color-border: var(--color-gray-700);

    /* Typography - matching jeremykanovsky.com */
    --font-family: Calibre, 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-family-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 2rem;
    --font-size-4xl: 2.5rem;
    --font-size-5xl: 3.5rem;
    --font-size-6xl: 4.5rem;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --line-height: 1.6;
    --line-height-tight: 1.2;
    --letter-spacing-tight: -0.02em;
    --letter-spacing-wide: 0.1em;

    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;
    --spacing-4xl: 6rem;

    /* Layout */
    --max-width: 1400px;
    --viewport-inset: 1.25rem;
    --grid-gap: 1.5rem;

    /* Borders & Shadows */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --radius-2xl: 32px;
    --radius-full: 9999px;
    --shadow-sm: 0 2px 8px rgba(2, 12, 27, 0.4);
    --shadow-md: 0 4px 16px rgba(2, 12, 27, 0.5);
    --shadow-lg: 0 8px 32px rgba(2, 12, 27, 0.6);
    --shadow-viewport: 0 0 60px rgba(2, 12, 27, 0.8);

    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;

    /* Z-index layers */
    --z-decorative: 1;
    --z-viewport: 10;
    --z-content: 20;
    --z-nav: 100;
  }

  /* ==================== RESET ==================== */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: var(--font-family);
    line-height: var(--line-height);
    color: var(--color-text);
    background-color: var(--color-background);
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font: inherit;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;Zf(document.getElementById("root")).render(c.jsxs(j.StrictMode,{children:[c.jsx(zx,{}),c.jsx(Px,{})]}));

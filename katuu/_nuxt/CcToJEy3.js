const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./B6gWpCbv.js","./DZVRhymJ.js","./BHtrGYCv.js","./B2FoI3GA.js","./VBtn.C5SkuLVY.css","./VSpacer.BjMVE43F.css","./BKSLDj76.js","./VTextarea.DLQj1-uE.css","./B20VTk6u.js","./DBExdI6V.js","./DlAUqK2U.js","./1iZ11YLW.js","./BwOD70gi.js","./BaHueo-V.js","./index.BKrvXvut.css","./CBC9_Njm.js","./DoOuJzBg.js","./VLayout.uHFSutSm.css","./login.Bvs2_XXM.css","./CskZQWo0.js","./default.Db5FdlKM.css","./2igBl2Iq.js","./PT06oF2K.js","./error-404.CjGVuf6H.css","./Cf3q-IiD.js","./error-500.DFBAsgKS.css"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function yd(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Xe={},fi=[],gn=()=>{},gA=()=>!1,ya=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),vd=t=>t.startsWith("onUpdate:"),ut=Object.assign,Ed=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_A=Object.prototype.hasOwnProperty,ke=(t,e)=>_A.call(t,e),ue=Array.isArray,di=t=>va(t)==="[object Map]",bE=t=>va(t)==="[object Set]",yA=t=>va(t)==="[object RegExp]",de=t=>typeof t=="function",Ze=t=>typeof t=="string",rs=t=>typeof t=="symbol",qe=t=>t!==null&&typeof t=="object",RE=t=>(qe(t)||de(t))&&de(t.then)&&de(t.catch),AE=Object.prototype.toString,va=t=>AE.call(t),vA=t=>va(t).slice(8,-1),CE=t=>va(t)==="[object Object]",Td=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pi=yd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},EA=/-(\w)/g,kn=Yc(t=>t.replace(EA,(e,n)=>n?n.toUpperCase():"")),TA=/\B([A-Z])/g,Bs=Yc(t=>t.replace(TA,"-$1").toLowerCase()),Ea=Yc(t=>t.charAt(0).toUpperCase()+t.slice(1)),th=Yc(t=>t?`on${Ea(t)}`:""),Xr=(t,e)=>!Object.is(t,e),mi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},SE=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},qh=t=>{const e=parseFloat(t);return isNaN(e)?t:e},PE=t=>{const e=Ze(t)?Number(t):NaN;return isNaN(e)?t:e};let yg;const kE=()=>yg||(yg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xc(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ze(r)?RA(r):Xc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ze(t)||qe(t))return t}const wA=/;(?![^(]*\))/g,IA=/:([^]+)/,bA=/\/\*[^]*?\*\//g;function RA(t){const e={};return t.replace(bA,"").split(wA).forEach(n=>{if(n){const r=n.split(IA);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Jc(t){let e="";if(Ze(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=Jc(t[n]);r&&(e+=r+" ")}else if(qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function AA(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ze(e)&&(t.class=Jc(e)),n&&(t.style=Xc(n)),t}const CA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",SA=yd(CA);function NE(t){return!!t||t===""}const OE=t=>!!(t&&t.__v_isRef===!0),PA=t=>Ze(t)?t:t==null?"":ue(t)||qe(t)&&(t.toString===AE||!de(t.toString))?OE(t)?PA(t.value):JSON.stringify(t,DE,2):String(t),DE=(t,e)=>OE(e)?DE(t,e.value):di(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[nh(r,i)+" =>"]=s,n),{})}:bE(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>nh(n))}:rs(e)?nh(e):qe(e)&&!ue(e)&&!CE(e)?String(e):e,nh=(t,e="")=>{var n;return rs(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let on;class ME{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=on;try{return on=this,e()}finally{on=n}}}on(){on=this}off(){on=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Zc(t){return new ME(t)}function kA(t,e=on){e&&e.active&&e.effects.push(t)}function wd(){return on}function xE(t){on&&on.cleanups.push(t)}let Is;class Id{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,kA(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ss();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(NA(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),is()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Wr,n=Is;try{return Wr=!0,Is=this,this._runnings++,vg(this),this.fn()}finally{Eg(this),this._runnings--,Is=n,Wr=e}}stop(){this.active&&(vg(this),Eg(this),this.onStop&&this.onStop(),this.active=!1)}}function NA(t){return t.value}function vg(t){t._trackId++,t._depsLength=0}function Eg(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)LE(t.deps[e],t);t.deps.length=t._depsLength}}function LE(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Wr=!0,Kh=0;const VE=[];function ss(){VE.push(Wr),Wr=!1}function is(){const t=VE.pop();Wr=t===void 0?!0:t}function bd(){Kh++}function Rd(){for(Kh--;!Kh&&Gh.length;)Gh.shift()()}function FE(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&LE(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Gh=[];function UE(t,e,n){bd();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Gh.push(r.scheduler)))}Rd()}const BE=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},ec=new WeakMap,bs=Symbol(""),zh=Symbol("");function en(t,e,n){if(Wr&&Is){let r=ec.get(t);r||ec.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=BE(()=>r.delete(n))),FE(Is,s)}}function fr(t,e,n,r,s,i){const o=ec.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ue(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||!rs(h)&&h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ue(t)?Td(n)&&a.push(o.get("length")):(a.push(o.get(bs)),di(t)&&a.push(o.get(zh)));break;case"delete":ue(t)||(a.push(o.get(bs)),di(t)&&a.push(o.get(zh)));break;case"set":di(t)&&a.push(o.get(bs));break}bd();for(const l of a)l&&UE(l,4);Rd()}function OA(t,e){const n=ec.get(t);return n&&n.get(e)}const DA=yd("__proto__,__v_isRef,__isVue"),$E=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rs)),Tg=MA();function MA(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Se(this);for(let i=0,o=this.length;i<o;i++)en(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Se)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ss(),bd();const r=Se(this)[e].apply(this,n);return Rd(),is(),r}}),t}function xA(t){rs(t)||(t=String(t));const e=Se(this);return en(e,"has",t),e.hasOwnProperty(t)}class HE{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?zA:KE:i?qE:WE).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){if(o&&ke(Tg,n))return Reflect.get(Tg,n,r);if(n==="hasOwnProperty")return xA}const a=Reflect.get(e,n,r);return(rs(n)?$E.has(n):DA(n))||(s||en(e,"get",n),i)?a:It(a)?o&&Td(n)?a:a.value:qe(a)?s?Sd(a):Dt(a):a}}class jE extends HE{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=Jr(i);if(!Ri(r)&&!Jr(r)&&(i=Se(i),r=Se(r)),!ue(e)&&It(i)&&!It(r))return l?!1:(i.value=r,!0)}const o=ue(e)&&Td(n)?Number(n)<e.length:ke(e,n),a=Reflect.set(e,n,r,s);return e===Se(s)&&(o?Xr(r,i)&&fr(e,"set",n,r):fr(e,"add",n,r)),a}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&fr(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!rs(n)||!$E.has(n))&&en(e,"has",n),r}ownKeys(e){return en(e,"iterate",ue(e)?"length":bs),Reflect.ownKeys(e)}}class LA extends HE{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const VA=new jE,FA=new LA,UA=new jE(!0);const Ad=t=>t,eu=t=>Reflect.getPrototypeOf(t);function cl(t,e,n=!1,r=!1){t=t.__v_raw;const s=Se(t),i=Se(e);n||(Xr(e,i)&&en(s,"get",e),en(s,"get",i));const{has:o}=eu(s),a=r?Ad:n?kd:Yo;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ul(t,e=!1){const n=this.__v_raw,r=Se(n),s=Se(t);return e||(Xr(t,s)&&en(r,"has",t),en(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function hl(t,e=!1){return t=t.__v_raw,!e&&en(Se(t),"iterate",bs),Reflect.get(t,"size",t)}function wg(t,e=!1){!e&&!Ri(t)&&!Jr(t)&&(t=Se(t));const n=Se(this);return eu(n).has.call(n,t)||(n.add(t),fr(n,"add",t,t)),this}function Ig(t,e,n=!1){!n&&!Ri(e)&&!Jr(e)&&(e=Se(e));const r=Se(this),{has:s,get:i}=eu(r);let o=s.call(r,t);o||(t=Se(t),o=s.call(r,t));const a=i.call(r,t);return r.set(t,e),o?Xr(e,a)&&fr(r,"set",t,e):fr(r,"add",t,e),this}function bg(t){const e=Se(this),{has:n,get:r}=eu(e);let s=n.call(e,t);s||(t=Se(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&fr(e,"delete",t,void 0),i}function Rg(){const t=Se(this),e=t.size!==0,n=t.clear();return e&&fr(t,"clear",void 0,void 0),n}function fl(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Se(o),l=e?Ad:t?kd:Yo;return!t&&en(a,"iterate",bs),o.forEach((u,h)=>r.call(s,l(u),l(h),i))}}function dl(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=di(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Ad:e?kd:Yo;return!e&&en(i,"iterate",l?zh:bs),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[h(f[0]),h(f[1])]:h(f),done:p}},[Symbol.iterator](){return this}}}}function Cr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function BA(){const t={get(i){return cl(this,i)},get size(){return hl(this)},has:ul,add:wg,set:Ig,delete:bg,clear:Rg,forEach:fl(!1,!1)},e={get(i){return cl(this,i,!1,!0)},get size(){return hl(this)},has:ul,add(i){return wg.call(this,i,!0)},set(i,o){return Ig.call(this,i,o,!0)},delete:bg,clear:Rg,forEach:fl(!1,!0)},n={get(i){return cl(this,i,!0)},get size(){return hl(this,!0)},has(i){return ul.call(this,i,!0)},add:Cr("add"),set:Cr("set"),delete:Cr("delete"),clear:Cr("clear"),forEach:fl(!0,!1)},r={get(i){return cl(this,i,!0,!0)},get size(){return hl(this,!0)},has(i){return ul.call(this,i,!0)},add:Cr("add"),set:Cr("set"),delete:Cr("delete"),clear:Cr("clear"),forEach:fl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=dl(i,!1,!1),n[i]=dl(i,!0,!1),e[i]=dl(i,!1,!0),r[i]=dl(i,!0,!0)}),[t,n,e,r]}const[$A,HA,jA,WA]=BA();function Cd(t,e){const n=e?t?WA:jA:t?HA:$A;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const qA={get:Cd(!1,!1)},KA={get:Cd(!1,!0)},GA={get:Cd(!0,!1)};const WE=new WeakMap,qE=new WeakMap,KE=new WeakMap,zA=new WeakMap;function QA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function YA(t){return t.__v_skip||!Object.isExtensible(t)?0:QA(vA(t))}function Dt(t){return Jr(t)?t:Pd(t,!1,VA,qA,WE)}function ir(t){return Pd(t,!1,UA,KA,qE)}function Sd(t){return Pd(t,!0,FA,GA,KE)}function Pd(t,e,n,r,s){if(!qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=YA(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function gi(t){return Jr(t)?gi(t.__v_raw):!!(t&&t.__v_isReactive)}function Jr(t){return!!(t&&t.__v_isReadonly)}function Ri(t){return!!(t&&t.__v_isShallow)}function GE(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function tc(t){return Object.isExtensible(t)&&SE(t,"__v_skip",!0),t}const Yo=t=>qe(t)?Dt(t):t,kd=t=>qe(t)?Sd(t):t;class zE{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Id(()=>e(this._value),()=>Do(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Se(this);return(!e._cacheable||e.effect.dirty)&&Xr(e._value,e._value=e.effect.run())&&Do(e,4),Nd(e),e.effect._dirtyLevel>=2&&Do(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function XA(t,e,n=!1){let r,s;const i=de(t);return i?(r=t,s=gn):(r=t.get,s=t.set),new zE(r,s,i||!s,n)}function Nd(t){var e;Wr&&Is&&(t=Se(t),FE(Is,(e=t.dep)!=null?e:t.dep=BE(()=>t.dep=void 0,t instanceof zE?t:void 0)))}function Do(t,e=4,n,r){t=Se(t);const s=t.dep;s&&UE(s,e)}function It(t){return!!(t&&t.__v_isRef===!0)}function Qe(t){return QE(t,!1)}function Ht(t){return QE(t,!0)}function QE(t,e){return It(t)?t:new JA(t,e)}class JA{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Se(e),this._value=n?e:Yo(e)}get value(){return Nd(this),this._value}set value(e){const n=this.__v_isShallow||Ri(e)||Jr(e);e=n?e:Se(e),Xr(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Yo(e),Do(this,4))}}function Oe(t){return It(t)?t.value:t}function nr(t){return de(t)?t():Oe(t)}const ZA={get:(t,e,n)=>Oe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return It(s)&&!It(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function YE(t){return gi(t)?t:new Proxy(t,ZA)}class eC{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=e(()=>Nd(this),()=>Do(this));this._get=n,this._set=r}get value(){return this._get()}set value(e){this._set(e)}}function KH(t){return new eC(t)}function XE(t){const e=ue(t)?new Array(t.length):{};for(const n in t)e[n]=JE(t,n);return e}class tC{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return OA(Se(this._object),this._key)}}class nC{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function rC(t,e,n){return It(t)?t:de(t)?new nC(t):qe(t)&&arguments.length>1?JE(t,e,n):Qe(t)}function JE(t,e,n){const r=t[e];return It(r)?r:new tC(t,e,n)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qr(t,e,n,r){try{return r?t(...r):t()}catch(s){Wi(s,e,n)}}function yn(t,e,n,r){if(de(t)){const s=qr(t,e,n,r);return s&&RE(s)&&s.catch(i=>{Wi(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(yn(t[i],e,n,r));return s}}function Wi(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){ss(),qr(l,null,10,[t,o,a]),is();return}}sC(t,n,s,r)}function sC(t,e,n,r=!0){console.error(t)}let Xo=!1,Qh=!1;const Mt=[];let Ln=0;const _i=[];let Nr=null,vs=0;const ZE=Promise.resolve();let Od=null;function $s(t){const e=Od||ZE;return t?e.then(this?t.bind(this):t):e}function iC(t){let e=Ln+1,n=Mt.length;for(;e<n;){const r=e+n>>>1,s=Mt[r],i=Jo(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function tu(t){(!Mt.length||!Mt.includes(t,Xo&&t.allowRecurse?Ln+1:Ln))&&(t.id==null?Mt.push(t):Mt.splice(iC(t.id),0,t),eT())}function eT(){!Xo&&!Qh&&(Qh=!0,Od=ZE.then(tT))}function oC(t){const e=Mt.indexOf(t);e>Ln&&Mt.splice(e,1)}function Yh(t){ue(t)?_i.push(...t):(!Nr||!Nr.includes(t,t.allowRecurse?vs+1:vs))&&_i.push(t),eT()}function Ag(t,e,n=Xo?Ln+1:0){for(;n<Mt.length;n++){const r=Mt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Mt.splice(n,1),n--,r()}}}function nc(t){if(_i.length){const e=[...new Set(_i)].sort((n,r)=>Jo(n)-Jo(r));if(_i.length=0,Nr){Nr.push(...e);return}for(Nr=e,vs=0;vs<Nr.length;vs++){const n=Nr[vs];n.active!==!1&&n()}Nr=null,vs=0}}const Jo=t=>t.id==null?1/0:t.id,aC=(t,e)=>{const n=Jo(t)-Jo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function tT(t){Qh=!1,Xo=!0,Mt.sort(aC);try{for(Ln=0;Ln<Mt.length;Ln++){const e=Mt[Ln];e&&e.active!==!1&&qr(e,e.i,e.i?15:14)}}finally{Ln=0,Mt.length=0,nc(),Xo=!1,Od=null,(Mt.length||_i.length)&&tT()}}let ct=null,nu=null;function rc(t){const e=ct;return ct=t,nu=t&&t.type.__scopeId||null,e}function GH(t){nu=t}function zH(){nu=null}function sc(t,e=ct,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Bg(-1);const i=rc(e);let o;try{o=t(...s)}finally{rc(i),r._d&&Bg(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function QH(t,e){if(ct===null)return t;const n=ou(ct),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Xe]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&Lr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function xn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(ss(),yn(l,n,8,[t.el,a,t,e]),is())}}const Or=Symbol("_leaveCb"),pl=Symbol("_enterCb");function nT(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wa(()=>{t.isMounted=!0}),Ia(()=>{t.isUnmounting=!0}),t}const mn=[Function,Array],rT={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mn,onEnter:mn,onAfterEnter:mn,onEnterCancelled:mn,onBeforeLeave:mn,onLeave:mn,onAfterLeave:mn,onLeaveCancelled:mn,onBeforeAppear:mn,onAppear:mn,onAfterAppear:mn,onAppearCancelled:mn},sT=t=>{const e=t.subTree;return e.component?sT(e.component):e},lC={name:"BaseTransition",props:rT,setup(t,{slots:e}){const n=qi(),r=nT();return()=>{const s=e.default&&Dd(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const p of s)if(p.type!==mt){i=p;break}}const o=Se(t),{mode:a}=o;if(r.isLeaving)return rh(i);const l=Cg(i);if(!l)return rh(i);let u=Zo(l,o,r,n,p=>u=p);Ns(l,u);const h=n.subTree,f=h&&Cg(h);if(f&&f.type!==mt&&!bn(l,f)&&sT(n).type!==mt){const p=Zo(f,o,r,n);if(Ns(f,p),a==="out-in"&&l.type!==mt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},rh(i);a==="in-out"&&l.type!==mt&&(p.delayLeave=(g,_,I)=>{const S=iT(r,f);S[String(f.key)]=f,g[Or]=()=>{_(),g[Or]=void 0,delete u.delayedLeave},u.delayedLeave=I})}return i}}},cC=lC;function iT(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Zo(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:_,onLeaveCancelled:I,onBeforeAppear:S,onAppear:L,onAfterAppear:k,onAppearCancelled:R}=e,O=String(t.key),x=iT(n,t),D=(v,w)=>{v&&yn(v,r,9,w)},T=(v,w)=>{const P=w[1];D(v,w),ue(v)?v.every(C=>C.length<=1)&&P():v.length<=1&&P()},y={mode:o,persisted:a,beforeEnter(v){let w=l;if(!n.isMounted)if(i)w=S||l;else return;v[Or]&&v[Or](!0);const P=x[O];P&&bn(t,P)&&P.el[Or]&&P.el[Or](),D(w,[v])},enter(v){let w=u,P=h,C=f;if(!n.isMounted)if(i)w=L||u,P=k||h,C=R||f;else return;let b=!1;const fe=v[pl]=ve=>{b||(b=!0,ve?D(C,[v]):D(P,[v]),y.delayedLeave&&y.delayedLeave(),v[pl]=void 0)};w?T(w,[v,fe]):fe()},leave(v,w){const P=String(t.key);if(v[pl]&&v[pl](!0),n.isUnmounting)return w();D(p,[v]);let C=!1;const b=v[Or]=fe=>{C||(C=!0,w(),fe?D(I,[v]):D(_,[v]),v[Or]=void 0,x[P]===t&&delete x[P])};x[P]=t,g?T(g,[v,b]):b()},clone(v){const w=Zo(v,e,n,r,s);return s&&s(w),w}};return y}function rh(t){if(Ta(t))return t=mr(t),t.children=null,t}function Cg(t){if(!Ta(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function Ns(t,e){t.shapeFlag&6&&t.component?Ns(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Dd(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===vt?(o.patchFlag&128&&s++,r=r.concat(Dd(o.children,e,a))):(e||o.type!==mt)&&r.push(a!=null?mr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Gn(t,e){return de(t)?ut({name:t.name},e,{setup:t}):t}const Rs=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Sg(t){de(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:i,suspensible:o=!0,onError:a}=t;let l=null,u,h=0;const f=()=>(h++,l=null,p()),p=()=>{let g;return l||(g=l=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),a)return new Promise((I,S)=>{a(_,()=>I(f()),()=>S(_),h+1)});throw _}).then(_=>g!==l&&l?l:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),u=_,_)))};return Gn({name:"AsyncComponentWrapper",__asyncLoader:p,get __asyncResolved(){return u},setup(){const g=at;if(u)return()=>sh(u,g);const _=k=>{l=null,Wi(k,g,13,!r)};if(o&&g.suspense||Ra)return p().then(k=>()=>sh(k,g)).catch(k=>(_(k),()=>r?be(r,{error:k}):null));const I=Qe(!1),S=Qe(),L=Qe(!!s);return s&&setTimeout(()=>{L.value=!1},s),i!=null&&setTimeout(()=>{if(!I.value&&!S.value){const k=new Error(`Async component timed out after ${i}ms.`);_(k),S.value=k}},i),p().then(()=>{I.value=!0,g.parent&&Ta(g.parent.vnode)&&(g.parent.effect.dirty=!0,tu(g.parent.update))}).catch(k=>{_(k),S.value=k}),()=>{if(I.value&&u)return sh(u,g);if(S.value&&r)return be(r,{error:S.value});if(n&&!L.value)return be(n)}}})}function sh(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=be(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const Ta=t=>t.type.__isKeepAlive,uC={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=qi(),r=n.ctx;if(!r.renderer)return()=>{const k=e.default&&e.default();return k&&k.length===1?k[0]:k};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:f}}}=r,p=f("div");r.activate=(k,R,O,x,D)=>{const T=k.component;u(k,R,O,0,a),l(T.vnode,k,R,O,T,a,x,k.slotScopeIds,D),ht(()=>{T.isDeactivated=!1,T.a&&mi(T.a);const y=k.props&&k.props.onVnodeMounted;y&&Gt(y,T.parent,k)},a)},r.deactivate=k=>{const R=k.component;ac(R.m),ac(R.a),u(k,p,null,1,a),ht(()=>{R.da&&mi(R.da);const O=k.props&&k.props.onVnodeUnmounted;O&&Gt(O,R.parent,k),R.isDeactivated=!0},a)};function g(k){ih(k),h(k,n,a,!0)}function _(k){s.forEach((R,O)=>{const x=af(R.type);x&&(!k||!k(x))&&I(O)})}function I(k){const R=s.get(k);R&&(!o||!bn(R,o))?g(R):o&&ih(o),s.delete(k),i.delete(k)}jt(()=>[t.include,t.exclude],([k,R])=>{k&&_(O=>Ro(k,O)),R&&_(O=>!Ro(R,O))},{flush:"post",deep:!0});let S=null;const L=()=>{S!=null&&(nf(n.subTree.type)?ht(()=>{s.set(S,ml(n.subTree))},n.subTree.suspense):s.set(S,ml(n.subTree)))};return wa(L),Md(L),Ia(()=>{s.forEach(k=>{const{subTree:R,suspense:O}=n,x=ml(R);if(k.type===x.type&&k.key===x.key){ih(x);const D=x.component.da;D&&ht(D,O);return}g(k)})}),()=>{if(S=null,!e.default)return null;const k=e.default(),R=k[0];if(k.length>1)return o=null,k;if(!Ci(R)||!(R.shapeFlag&4)&&!(R.shapeFlag&128))return o=null,R;let O=ml(R);if(O.type===mt)return o=null,O;const x=O.type,D=af(Rs(O)?O.type.__asyncResolved||{}:x),{include:T,exclude:y,max:v}=t;if(T&&(!D||!Ro(T,D))||y&&D&&Ro(y,D))return o=O,R;const w=O.key==null?x:O.key,P=s.get(w);return O.el&&(O=mr(O),R.shapeFlag&128&&(R.ssContent=O)),S=w,P?(O.el=P.el,O.component=P.component,O.transition&&Ns(O,O.transition),O.shapeFlag|=512,i.delete(w),i.add(w)):(i.add(w),v&&i.size>parseInt(v,10)&&I(i.values().next().value)),O.shapeFlag|=256,o=O,nf(R.type)?R:O}}},hC=uC;function Ro(t,e){return ue(t)?t.some(n=>Ro(n,e)):Ze(t)?t.split(",").includes(e):yA(t)?t.test(e):!1}function oT(t,e){lT(t,"a",e)}function aT(t,e){lT(t,"da",e)}function lT(t,e,n=at){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ru(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ta(s.parent.vnode)&&fC(r,e,n,s),s=s.parent}}function fC(t,e,n,r){const s=ru(e,t,r,!0);cT(()=>{Ed(r[e],s)},n)}function ih(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ml(t){return t.shapeFlag&128?t.ssContent:t}function ru(t,e,n=at,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ss();const a=ba(n),l=yn(e,n,t,o);return a(),is(),l});return r?s.unshift(i):s.push(i),i}}const Tr=t=>(e,n=at)=>{(!Ra||t==="sp")&&ru(t,(...r)=>e(...r),n)},dC=Tr("bm"),wa=Tr("m"),pC=Tr("bu"),Md=Tr("u"),Ia=Tr("bum"),cT=Tr("um"),mC=Tr("sp"),gC=Tr("rtg"),_C=Tr("rtc");function uT(t,e=at){ru("ec",t,e)}const xd="components",yC="directives";function YH(t,e){return Ld(xd,t,!0,e)||t}const hT=Symbol.for("v-ndc");function vC(t){return Ze(t)?Ld(xd,t,!1)||t:t||hT}function XH(t){return Ld(yC,t)}function Ld(t,e,n=!0,r=!1){const s=ct||at;if(s){const i=s.type;if(t===xd){const a=af(i,!1);if(a&&(a===e||a===kn(e)||a===Ea(kn(e))))return i}const o=Pg(s[t]||i[t],e)||Pg(s.appContext[t],e);return!o&&r?i:o}}function Pg(t,e){return t&&(t[e]||t[kn(e)]||t[Ea(kn(e))])}function JH(t,e,n,r){let s;const i=n;if(ue(t)||Ze(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(qe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];s[a]=e(t[u],u,a,i)}}else s=[];return s}function ZH(t,e,n={},r,s){if(ct.isCE||ct.parent&&Rs(ct.parent)&&ct.parent.isCE)return be("slot",n,r);let i=t[e];i&&i._c&&(i._d=!1),In();const o=i&&fT(i(n)),a=sr(vt,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function fT(t){return t.some(e=>Ci(e)?!(e.type===mt||e.type===vt&&!fT(e.children)):!0)?t:null}const Xh=t=>t?$T(t)?ou(t):Xh(t.parent):null,Mo=ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Xh(t.parent),$root:t=>Xh(t.root),$emit:t=>t.emit,$options:t=>Vd(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,tu(t.update)}),$nextTick:t=>t.n||(t.n=$s.bind(t.proxy)),$watch:t=>qC.bind(t)}),oh=(t,e)=>t!==Xe&&!t.__isScriptSetup&&ke(t,e),EC={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(oh(r,e))return o[e]=1,r[e];if(s!==Xe&&ke(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ke(u,e))return o[e]=3,i[e];if(n!==Xe&&ke(n,e))return o[e]=4,n[e];Jh&&(o[e]=0)}}const h=Mo[e];let f,p;if(h)return e==="$attrs"&&en(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Xe&&ke(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,ke(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return oh(s,e)?(s[e]=n,!0):r!==Xe&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Xe&&ke(t,o)||oh(e,o)||(a=i[0])&&ke(a,o)||ke(r,o)||ke(Mo,o)||ke(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function kg(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Jh=!0;function TC(t){const e=Vd(t),n=t.proxy,r=t.ctx;Jh=!1,e.beforeCreate&&Ng(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:f,mounted:p,beforeUpdate:g,updated:_,activated:I,deactivated:S,beforeDestroy:L,beforeUnmount:k,destroyed:R,unmounted:O,render:x,renderTracked:D,renderTriggered:T,errorCaptured:y,serverPrefetch:v,expose:w,inheritAttrs:P,components:C,directives:b,filters:fe}=e;if(u&&wC(u,r,null),o)for(const ce in o){const ne=o[ce];de(ne)&&(r[ce]=ne.bind(n))}if(s){const ce=s.call(n,n);qe(ce)&&(t.data=Dt(ce))}if(Jh=!0,i)for(const ce in i){const ne=i[ce],$e=de(ne)?ne.bind(n,n):de(ne.get)?ne.get.bind(n,n):gn,tn=!de(ne)&&de(ne.set)?ne.set.bind(n):gn,qt=pe({get:$e,set:tn});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>qt.value,set:Le=>qt.value=Le})}if(a)for(const ce in a)dT(a[ce],r,n,ce);if(l){const ce=de(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(ne=>{vn(ne,ce[ne])})}h&&Ng(h,t,"c");function ee(ce,ne){ue(ne)?ne.forEach($e=>ce($e.bind(n))):ne&&ce(ne.bind(n))}if(ee(dC,f),ee(wa,p),ee(pC,g),ee(Md,_),ee(oT,I),ee(aT,S),ee(uT,y),ee(_C,D),ee(gC,T),ee(Ia,k),ee(cT,O),ee(mC,v),ue(w))if(w.length){const ce=t.exposed||(t.exposed={});w.forEach(ne=>{Object.defineProperty(ce,ne,{get:()=>n[ne],set:$e=>n[ne]=$e})})}else t.exposed||(t.exposed={});x&&t.render===gn&&(t.render=x),P!=null&&(t.inheritAttrs=P),C&&(t.components=C),b&&(t.directives=b)}function wC(t,e,n=gn){ue(t)&&(t=Zh(t));for(const r in t){const s=t[r];let i;qe(s)?"default"in s?i=Fe(s.from||r,s.default,!0):i=Fe(s.from||r):i=Fe(s),It(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ng(t,e,n){yn(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function dT(t,e,n,r){const s=r.includes(".")?NT(n,r):()=>n[r];if(Ze(t)){const i=e[t];de(i)&&jt(s,i)}else if(de(t))jt(s,t.bind(n));else if(qe(t))if(ue(t))t.forEach(i=>dT(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&jt(s,i,t)}}function Vd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>ic(l,u,o,!0)),ic(l,e,o)),qe(e)&&i.set(e,l),l}function ic(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ic(t,i,n,!0),s&&s.forEach(o=>ic(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=IC[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const IC={data:Og,props:Dg,emits:Dg,methods:Ao,computed:Ao,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:Ao,directives:Ao,watch:RC,provide:Og,inject:bC};function Og(t,e){return e?t?function(){return ut(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function bC(t,e){return Ao(Zh(t),Zh(e))}function Zh(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Bt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ao(t,e){return t?ut(Object.create(null),t,e):e}function Dg(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:ut(Object.create(null),kg(t),kg(e??{})):e}function RC(t,e){if(!t)return e;if(!e)return t;const n=ut(Object.create(null),t);for(const r in e)n[r]=Bt(t[r],e[r]);return n}function pT(){return{app:null,config:{isNativeTag:gA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let AC=0;function CC(t,e){return function(r,s=null){de(r)||(r=ut({},r)),s!=null&&!qe(s)&&(s=null);const i=pT(),o=new WeakSet;let a=!1;const l=i.app={_uid:AC++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:jT,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&de(u.install)?(o.add(u),u.install(l,...h)):de(u)&&(o.add(u),u(l,...h))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,h){return h?(i.components[u]=h,l):i.components[u]},directive(u,h){return h?(i.directives[u]=h,l):i.directives[u]},mount(u,h,f){if(!a){const p=be(r,s);return p.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),h&&e?e(p,u):t(p,u,f),a=!0,l._container=u,u.__vue_app__=l,ou(p.component)}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,h){return i.provides[u]=h,l},runWithContext(u){const h=As;As=l;try{return u()}finally{As=h}}};return l}}let As=null;function vn(t,e){if(at){let n=at.provides;const r=at.parent&&at.parent.provides;r===n&&(n=at.provides=Object.create(r)),n[t]=e}}function Fe(t,e,n=!1){const r=at||ct;if(r||As){const s=As?As._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function mT(){return!!(at||ct||As)}const gT={},_T=()=>Object.create(gT),yT=t=>Object.getPrototypeOf(t)===gT;function SC(t,e,n,r=!1){const s={},i=_T();t.propsDefaults=Object.create(null),vT(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ir(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function PC(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Se(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(iu(t.emitsOptions,p))continue;const g=e[p];if(l)if(ke(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const _=kn(p);s[_]=ef(l,a,_,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{vT(t,e,s,i)&&(u=!0);let h;for(const f in a)(!e||!ke(e,f)&&((h=Bs(f))===f||!ke(e,h)))&&(l?n&&(n[f]!==void 0||n[h]!==void 0)&&(s[f]=ef(l,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!ke(e,f))&&(delete i[f],u=!0)}u&&fr(t.attrs,"set","")}function vT(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(pi(l))continue;const u=e[l];let h;s&&ke(s,h=kn(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:iu(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Se(n),u=a||Xe;for(let h=0;h<i.length;h++){const f=i[h];n[f]=ef(s,l,f,u[f],t,!ke(u,f))}}return o}function ef(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ke(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&de(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=ba(s);r=u[n]=l.call(null,e),h()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Bs(n))&&(r=!0))}return r}const kC=new WeakMap;function ET(t,e,n=!1){const r=n?kC:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!de(t)){const h=f=>{l=!0;const[p,g]=ET(f,e,!0);ut(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return qe(t)&&r.set(t,fi),fi;if(ue(i))for(let h=0;h<i.length;h++){const f=kn(i[h]);Mg(f)&&(o[f]=Xe)}else if(i)for(const h in i){const f=kn(h);if(Mg(f)){const p=i[h],g=o[f]=ue(p)||de(p)?{type:p}:ut({},p),_=g.type;let I=!1,S=!0;if(ue(_))for(let L=0;L<_.length;++L){const k=_[L],R=de(k)&&k.name;if(R==="Boolean"){I=!0;break}else R==="String"&&(S=!1)}else I=de(_)&&_.name==="Boolean";g[0]=I,g[1]=S,(I||ke(g,"default"))&&a.push(f)}}const u=[o,a];return qe(t)&&r.set(t,u),u}function Mg(t){return t[0]!=="$"&&!pi(t)}const TT=t=>t[0]==="_"||t==="$stable",Fd=t=>ue(t)?t.map(an):[an(t)],NC=(t,e,n)=>{if(e._n)return e;const r=sc((...s)=>Fd(e(...s)),n);return r._c=!1,r},wT=(t,e,n)=>{const r=t._ctx;for(const s in t){if(TT(s))continue;const i=t[s];if(de(i))e[s]=NC(s,i,r);else if(i!=null){const o=Fd(i);e[s]=()=>o}}},IT=(t,e)=>{const n=Fd(e);t.slots.default=()=>n},bT=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},OC=(t,e,n)=>{const r=t.slots=_T();if(t.vnode.shapeFlag&32){const s=e._;s?(bT(r,e,n),n&&SE(r,"_",s,!0)):wT(e,r)}else e&&IT(t,e)},DC=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Xe;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:bT(s,e,n):(i=!e.$stable,wT(e,s)),o=e}else e&&(IT(t,e),o={default:1});if(i)for(const a in s)!TT(a)&&o[a]==null&&delete s[a]};function oc(t,e,n,r,s=!1){if(ue(t)){t.forEach((p,g)=>oc(p,e&&(ue(e)?e[g]:e),n,r,s));return}if(Rs(r)&&!s)return;const i=r.shapeFlag&4?ou(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===Xe?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==l&&(Ze(u)?(h[u]=null,ke(f,u)&&(f[u]=null)):It(u)&&(u.value=null)),de(l))qr(l,a,12,[o,h]);else{const p=Ze(l),g=It(l);if(p||g){const _=()=>{if(t.f){const I=p?ke(f,l)?f[l]:h[l]:l.value;s?ue(I)&&Ed(I,i):ue(I)?I.includes(i)||I.push(i):p?(h[l]=[i],ke(f,l)&&(f[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else p?(h[l]=o,ke(f,l)&&(f[l]=o)):g&&(l.value=o,t.k&&(h[t.k]=o))};o?(_.id=-1,ht(_,n)):_()}}}const RT=Symbol("_vte"),MC=t=>t.__isTeleport,xo=t=>t&&(t.disabled||t.disabled===""),xg=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Lg=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,tf=(t,e)=>{const n=t&&t.to;return Ze(n)?e?e(n):null:n},xC={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,l,u){const{mc:h,pc:f,pbc:p,o:{insert:g,querySelector:_,createText:I,createComment:S}}=u,L=xo(e.props);let{shapeFlag:k,children:R,dynamicChildren:O}=e;if(t==null){const x=e.el=I(""),D=e.anchor=I("");g(x,n,r),g(D,n,r);const T=e.target=tf(e.props,_),y=CT(T,e,I,g);T&&(o==="svg"||xg(T)?o="svg":(o==="mathml"||Lg(T))&&(o="mathml"));const v=(w,P)=>{k&16&&h(R,w,P,s,i,o,a,l)};L?v(n,D):T&&v(T,y)}else{e.el=t.el,e.targetStart=t.targetStart;const x=e.anchor=t.anchor,D=e.target=t.target,T=e.targetAnchor=t.targetAnchor,y=xo(t.props),v=y?n:D,w=y?x:T;if(o==="svg"||xg(D)?o="svg":(o==="mathml"||Lg(D))&&(o="mathml"),O?(p(t.dynamicChildren,O,v,s,i,o,a),Ud(t,e,!0)):l||f(t,e,v,w,s,i,o,a,!1),L)y?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):gl(e,n,x,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const P=e.target=tf(e.props,_);P&&gl(e,P,null,u,0)}else y&&gl(e,D,T,u,1)}AT(e)},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:l,targetStart:u,targetAnchor:h,target:f,props:p}=t;if(f&&(s(u),s(h)),i&&s(l),o&16){const g=i||!xo(p);for(let _=0;_<a.length;_++){const I=a[_];r(I,e,n,g,!!I.dynamicChildren)}}},move:gl,hydrate:LC};function gl(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:u,props:h}=t,f=i===2;if(f&&r(o,e,n),(!f||xo(h))&&l&16)for(let p=0;p<u.length;p++)s(u[p],e,n,2);f&&r(a,e,n)}function LC(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:u,createText:h}},f){const p=e.target=tf(e.props,l);if(p){const g=p._lpa||p.firstChild;if(e.shapeFlag&16)if(xo(e.props))e.anchor=f(o(t),e,a(t),n,r,s,i),e.targetStart=g,e.targetAnchor=g&&o(g);else{e.anchor=o(t);let _=g;for(;_;){if(_&&_.nodeType===8){if(_.data==="teleport start anchor")e.targetStart=_;else if(_.data==="teleport anchor"){e.targetAnchor=_,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}_=o(_)}e.targetAnchor||CT(p,e,h,u),f(g&&o(g),e,p,n,r,s,i)}AT(e)}return e.anchor&&o(e.anchor)}const ej=xC;function AT(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}function CT(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[RT]=i,t&&(r(s,t),r(i,t)),i}let Vg=!1;const ei=()=>{Vg||(console.error("Hydration completed but contains mismatches."),Vg=!0)},VC=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",FC=t=>t.namespaceURI.includes("MathML"),_l=t=>{if(VC(t))return"svg";if(FC(t))return"mathml"},yl=t=>t.nodeType===8;function UC(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(R,O)=>{if(!O.hasChildNodes()){n(null,R,O),nc(),O._vnode=R;return}f(O.firstChild,R,null,null,null),nc(),O._vnode=R},f=(R,O,x,D,T,y=!1)=>{y=y||!!O.dynamicChildren;const v=yl(R)&&R.data==="[",w=()=>I(R,O,x,D,T,v),{type:P,ref:C,shapeFlag:b,patchFlag:fe}=O;let ve=R.nodeType;O.el=R,fe===-2&&(y=!1,O.dynamicChildren=null);let ee=null;switch(P){case Cs:ve!==3?O.children===""?(l(O.el=s(""),o(R),R),ee=R):ee=w():(R.data!==O.children&&(ei(),R.data=O.children),ee=i(R));break;case mt:k(R)?(ee=i(R),L(O.el=R.content.firstChild,R,x)):ve!==8||v?ee=w():ee=i(R);break;case Vl:if(v&&(R=i(R),ve=R.nodeType),ve===1||ve===3){ee=R;const ce=!O.children.length;for(let ne=0;ne<O.staticCount;ne++)ce&&(O.children+=ee.nodeType===1?ee.outerHTML:ee.data),ne===O.staticCount-1&&(O.anchor=ee),ee=i(ee);return v?i(ee):ee}else w();break;case vt:v?ee=_(R,O,x,D,T,y):ee=w();break;default:if(b&1)(ve!==1||O.type.toLowerCase()!==R.tagName.toLowerCase())&&!k(R)?ee=w():ee=p(R,O,x,D,T,y);else if(b&6){O.slotScopeIds=T;const ce=o(R);if(v?ee=S(R):yl(R)&&R.data==="teleport start"?ee=S(R,R.data,"teleport end"):ee=i(R),e(O,ce,null,x,D,_l(ce),y),Rs(O)){let ne;v?(ne=be(vt),ne.anchor=ee?ee.previousSibling:ce.lastChild):ne=R.nodeType===3?BT(""):be("div"),ne.el=R,O.component.subTree=ne}}else b&64?ve!==8?ee=w():ee=O.type.hydrate(R,O,x,D,T,y,t,g):b&128&&(ee=O.type.hydrate(R,O,x,D,_l(o(R)),T,y,t,f))}return C!=null&&oc(C,null,D,O),ee},p=(R,O,x,D,T,y)=>{y=y||!!O.dynamicChildren;const{type:v,props:w,patchFlag:P,shapeFlag:C,dirs:b,transition:fe}=O,ve=v==="input"||v==="option";if(ve||P!==-1){b&&xn(O,null,x,"created");let ee=!1;if(k(R)){ee=PT(D,fe)&&x&&x.vnode.props&&x.vnode.props.appear;const ne=R.content.firstChild;ee&&fe.beforeEnter(ne),L(ne,R,x),O.el=R=ne}if(C&16&&!(w&&(w.innerHTML||w.textContent))){let ne=g(R.firstChild,O,R,x,D,T,y);for(;ne;){ei();const $e=ne;ne=ne.nextSibling,a($e)}}else C&8&&R.textContent!==O.children&&(ei(),R.textContent=O.children);if(w){if(ve||!y||P&48){const ne=R.tagName.includes("-");for(const $e in w)(ve&&($e.endsWith("value")||$e==="indeterminate")||ya($e)&&!pi($e)||$e[0]==="."||ne)&&r(R,$e,null,w[$e],void 0,x)}else if(w.onClick)r(R,"onClick",null,w.onClick,void 0,x);else if(P&4&&gi(w.style))for(const ne in w.style)w.style[ne]}let ce;(ce=w&&w.onVnodeBeforeMount)&&Gt(ce,x,O),b&&xn(O,null,x,"beforeMount"),((ce=w&&w.onVnodeMounted)||b||ee)&&MT(()=>{ce&&Gt(ce,x,O),ee&&fe.enter(R),b&&xn(O,null,x,"mounted")},D)}return R.nextSibling},g=(R,O,x,D,T,y,v)=>{v=v||!!O.dynamicChildren;const w=O.children,P=w.length;for(let C=0;C<P;C++){const b=v?w[C]:w[C]=an(w[C]),fe=b.type===Cs;if(R){if(fe&&!v){let ve=w[C+1];ve&&(ve=an(ve)).type===Cs&&(l(s(R.data.slice(b.children.length)),x,i(R)),R.data=b.children)}R=f(R,b,D,T,y,v)}else fe&&!b.children?l(b.el=s(""),x):(ei(),n(null,b,x,null,D,T,_l(x),y))}return R},_=(R,O,x,D,T,y)=>{const{slotScopeIds:v}=O;v&&(T=T?T.concat(v):v);const w=o(R),P=g(i(R),O,w,x,D,T,y);return P&&yl(P)&&P.data==="]"?i(O.anchor=P):(ei(),l(O.anchor=u("]"),w,P),P)},I=(R,O,x,D,T,y)=>{if(ei(),O.el=null,y){const P=S(R);for(;;){const C=i(R);if(C&&C!==P)a(C);else break}}const v=i(R),w=o(R);return a(R),n(null,O,w,v,x,D,_l(w),T),v},S=(R,O="[",x="]")=>{let D=0;for(;R;)if(R=i(R),R&&yl(R)&&(R.data===O&&D++,R.data===x)){if(D===0)return i(R);D--}return R},L=(R,O,x)=>{const D=O.parentNode;D&&D.replaceChild(R,O);let T=x;for(;T;)T.vnode.el===O&&(T.vnode.el=T.subTree.el=R),T=T.parent},k=R=>R.nodeType===1&&R.tagName.toLowerCase()==="template";return[h,f]}const ht=MT;function BC(t){return ST(t)}function $C(t){return ST(t,UC)}function ST(t,e){const n=kE();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:f,nextSibling:p,setScopeId:g=gn,insertStaticContent:_}=t,I=(A,N,V,$=null,B=null,q=null,X=void 0,K=null,z=!!N.dynamicChildren)=>{if(A===N)return;A&&!bn(A,N)&&($=U(A),Le(A,B,q,!0),A=null),N.patchFlag===-2&&(z=!1,N.dynamicChildren=null);const{type:W,ref:Z,shapeFlag:ae}=N;switch(W){case Cs:S(A,N,V,$);break;case mt:L(A,N,V,$);break;case Vl:A==null&&k(N,V,$,X);break;case vt:C(A,N,V,$,B,q,X,K,z);break;default:ae&1?x(A,N,V,$,B,q,X,K,z):ae&6?b(A,N,V,$,B,q,X,K,z):(ae&64||ae&128)&&W.process(A,N,V,$,B,q,X,K,z,te)}Z!=null&&B&&oc(Z,A&&A.ref,q,N||A,!N)},S=(A,N,V,$)=>{if(A==null)r(N.el=a(N.children),V,$);else{const B=N.el=A.el;N.children!==A.children&&u(B,N.children)}},L=(A,N,V,$)=>{A==null?r(N.el=l(N.children||""),V,$):N.el=A.el},k=(A,N,V,$)=>{[A.el,A.anchor]=_(A.children,N,V,$,A.el,A.anchor)},R=({el:A,anchor:N},V,$)=>{let B;for(;A&&A!==N;)B=p(A),r(A,V,$),A=B;r(N,V,$)},O=({el:A,anchor:N})=>{let V;for(;A&&A!==N;)V=p(A),s(A),A=V;s(N)},x=(A,N,V,$,B,q,X,K,z)=>{N.type==="svg"?X="svg":N.type==="math"&&(X="mathml"),A==null?D(N,V,$,B,q,X,K,z):v(A,N,B,q,X,K,z)},D=(A,N,V,$,B,q,X,K)=>{let z,W;const{props:Z,shapeFlag:ae,transition:ie,dirs:se}=A;if(z=A.el=o(A.type,q,Z&&Z.is,Z),ae&8?h(z,A.children):ae&16&&y(A.children,z,null,$,B,ah(A,q),X,K),se&&xn(A,null,$,"created"),T(z,A,A.scopeId,X,$),Z){for(const Me in Z)Me!=="value"&&!pi(Me)&&i(z,Me,null,Z[Me],q,$);"value"in Z&&i(z,"value",null,Z.value,q),(W=Z.onVnodeBeforeMount)&&Gt(W,$,A)}se&&xn(A,null,$,"beforeMount");const le=PT(B,ie);le&&ie.beforeEnter(z),r(z,N,V),((W=Z&&Z.onVnodeMounted)||le||se)&&ht(()=>{W&&Gt(W,$,A),le&&ie.enter(z),se&&xn(A,null,$,"mounted")},B)},T=(A,N,V,$,B)=>{if(V&&g(A,V),$)for(let q=0;q<$.length;q++)g(A,$[q]);if(B){let q=B.subTree;if(N===q){const X=B.vnode;T(A,X,X.scopeId,X.slotScopeIds,B.parent)}}},y=(A,N,V,$,B,q,X,K,z=0)=>{for(let W=z;W<A.length;W++){const Z=A[W]=K?Dr(A[W]):an(A[W]);I(null,Z,N,V,$,B,q,X,K)}},v=(A,N,V,$,B,q,X)=>{const K=N.el=A.el;let{patchFlag:z,dynamicChildren:W,dirs:Z}=N;z|=A.patchFlag&16;const ae=A.props||Xe,ie=N.props||Xe;let se;if(V&&ds(V,!1),(se=ie.onVnodeBeforeUpdate)&&Gt(se,V,N,A),Z&&xn(N,A,V,"beforeUpdate"),V&&ds(V,!0),(ae.innerHTML&&ie.innerHTML==null||ae.textContent&&ie.textContent==null)&&h(K,""),W?w(A.dynamicChildren,W,K,V,$,ah(N,B),q):X||ne(A,N,K,null,V,$,ah(N,B),q,!1),z>0){if(z&16)P(K,ae,ie,V,B);else if(z&2&&ae.class!==ie.class&&i(K,"class",null,ie.class,B),z&4&&i(K,"style",ae.style,ie.style,B),z&8){const le=N.dynamicProps;for(let Me=0;Me<le.length;Me++){const Pe=le[Me],nt=ae[Pe],nn=ie[Pe];(nn!==nt||Pe==="value")&&i(K,Pe,nt,nn,B,V)}}z&1&&A.children!==N.children&&h(K,N.children)}else!X&&W==null&&P(K,ae,ie,V,B);((se=ie.onVnodeUpdated)||Z)&&ht(()=>{se&&Gt(se,V,N,A),Z&&xn(N,A,V,"updated")},$)},w=(A,N,V,$,B,q,X)=>{for(let K=0;K<N.length;K++){const z=A[K],W=N[K],Z=z.el&&(z.type===vt||!bn(z,W)||z.shapeFlag&70)?f(z.el):V;I(z,W,Z,null,$,B,q,X,!0)}},P=(A,N,V,$,B)=>{if(N!==V){if(N!==Xe)for(const q in N)!pi(q)&&!(q in V)&&i(A,q,N[q],null,B,$);for(const q in V){if(pi(q))continue;const X=V[q],K=N[q];X!==K&&q!=="value"&&i(A,q,K,X,B,$)}"value"in V&&i(A,"value",N.value,V.value,B)}},C=(A,N,V,$,B,q,X,K,z)=>{const W=N.el=A?A.el:a(""),Z=N.anchor=A?A.anchor:a("");let{patchFlag:ae,dynamicChildren:ie,slotScopeIds:se}=N;se&&(K=K?K.concat(se):se),A==null?(r(W,V,$),r(Z,V,$),y(N.children||[],V,Z,B,q,X,K,z)):ae>0&&ae&64&&ie&&A.dynamicChildren?(w(A.dynamicChildren,ie,V,B,q,X,K),(N.key!=null||B&&N===B.subTree)&&Ud(A,N,!0)):ne(A,N,V,Z,B,q,X,K,z)},b=(A,N,V,$,B,q,X,K,z)=>{N.slotScopeIds=K,A==null?N.shapeFlag&512?B.ctx.activate(N,V,$,X,z):fe(N,V,$,B,q,X,z):ve(A,N,z)},fe=(A,N,V,$,B,q,X)=>{const K=A.component=lS(A,$,B);if(Ta(A)&&(K.ctx.renderer=te),cS(K,!1,X),K.asyncDep){if(B&&B.registerDep(K,ee,X),!A.el){const z=K.subTree=be(mt);L(null,z,N,V)}}else ee(K,A,N,V,B,q,X)},ve=(A,N,V)=>{const $=N.component=A.component;if(XC(A,N,V))if($.asyncDep&&!$.asyncResolved){ce($,N,V);return}else $.next=N,oC($.update),$.effect.dirty=!0,$.update();else N.el=A.el,$.vnode=N},ee=(A,N,V,$,B,q,X)=>{const K=()=>{if(A.isMounted){let{next:Z,bu:ae,u:ie,parent:se,vnode:le}=A;{const dn=kT(A);if(dn){Z&&(Z.el=le.el,ce(A,Z,X)),dn.asyncDep.then(()=>{A.isUnmounted||K()});return}}let Me=Z,Pe;ds(A,!1),Z?(Z.el=le.el,ce(A,Z,X)):Z=le,ae&&mi(ae),(Pe=Z.props&&Z.props.onVnodeBeforeUpdate)&&Gt(Pe,se,Z,le),ds(A,!0);const nt=lh(A),nn=A.subTree;A.subTree=nt,I(nn,nt,f(nn.el),U(nn),A,B,q),Z.el=nt.el,Me===null&&$d(A,nt.el),ie&&ht(ie,B),(Pe=Z.props&&Z.props.onVnodeUpdated)&&ht(()=>Gt(Pe,se,Z,le),B)}else{let Z;const{el:ae,props:ie}=N,{bm:se,m:le,parent:Me}=A,Pe=Rs(N);if(ds(A,!1),se&&mi(se),!Pe&&(Z=ie&&ie.onVnodeBeforeMount)&&Gt(Z,Me,N),ds(A,!0),ae&&Ue){const nt=()=>{A.subTree=lh(A),Ue(ae,A.subTree,A,B,null)};Pe?N.type.__asyncLoader().then(()=>!A.isUnmounted&&nt()):nt()}else{const nt=A.subTree=lh(A);I(null,nt,V,$,A,B,q),N.el=nt.el}if(le&&ht(le,B),!Pe&&(Z=ie&&ie.onVnodeMounted)){const nt=N;ht(()=>Gt(Z,Me,nt),B)}(N.shapeFlag&256||Me&&Rs(Me.vnode)&&Me.vnode.shapeFlag&256)&&A.a&&ht(A.a,B),A.isMounted=!0,N=V=$=null}},z=A.effect=new Id(K,gn,()=>tu(W),A.scope),W=A.update=()=>{z.dirty&&z.run()};W.i=A,W.id=A.uid,ds(A,!0),W()},ce=(A,N,V)=>{N.component=A;const $=A.vnode.props;A.vnode=N,A.next=null,PC(A,N.props,$,V),DC(A,N.children,V),ss(),Ag(A),is()},ne=(A,N,V,$,B,q,X,K,z=!1)=>{const W=A&&A.children,Z=A?A.shapeFlag:0,ae=N.children,{patchFlag:ie,shapeFlag:se}=N;if(ie>0){if(ie&128){tn(W,ae,V,$,B,q,X,K,z);return}else if(ie&256){$e(W,ae,V,$,B,q,X,K,z);return}}se&8?(Z&16&&Rt(W,B,q),ae!==W&&h(V,ae)):Z&16?se&16?tn(W,ae,V,$,B,q,X,K,z):Rt(W,B,q,!0):(Z&8&&h(V,""),se&16&&y(ae,V,$,B,q,X,K,z))},$e=(A,N,V,$,B,q,X,K,z)=>{A=A||fi,N=N||fi;const W=A.length,Z=N.length,ae=Math.min(W,Z);let ie;for(ie=0;ie<ae;ie++){const se=N[ie]=z?Dr(N[ie]):an(N[ie]);I(A[ie],se,V,null,B,q,X,K,z)}W>Z?Rt(A,B,q,!0,!1,ae):y(N,V,$,B,q,X,K,z,ae)},tn=(A,N,V,$,B,q,X,K,z)=>{let W=0;const Z=N.length;let ae=A.length-1,ie=Z-1;for(;W<=ae&&W<=ie;){const se=A[W],le=N[W]=z?Dr(N[W]):an(N[W]);if(bn(se,le))I(se,le,V,null,B,q,X,K,z);else break;W++}for(;W<=ae&&W<=ie;){const se=A[ae],le=N[ie]=z?Dr(N[ie]):an(N[ie]);if(bn(se,le))I(se,le,V,null,B,q,X,K,z);else break;ae--,ie--}if(W>ae){if(W<=ie){const se=ie+1,le=se<Z?N[se].el:$;for(;W<=ie;)I(null,N[W]=z?Dr(N[W]):an(N[W]),V,le,B,q,X,K,z),W++}}else if(W>ie)for(;W<=ae;)Le(A[W],B,q,!0),W++;else{const se=W,le=W,Me=new Map;for(W=le;W<=ie;W++){const Ft=N[W]=z?Dr(N[W]):an(N[W]);Ft.key!=null&&Me.set(Ft.key,W)}let Pe,nt=0;const nn=ie-le+1;let dn=!1,no=0;const Ir=new Array(nn);for(W=0;W<nn;W++)Ir[W]=0;for(W=se;W<=ae;W++){const Ft=A[W];if(nt>=nn){Le(Ft,B,q,!0);continue}let pn;if(Ft.key!=null)pn=Me.get(Ft.key);else for(Pe=le;Pe<=ie;Pe++)if(Ir[Pe-le]===0&&bn(Ft,N[Pe])){pn=Pe;break}pn===void 0?Le(Ft,B,q,!0):(Ir[pn-le]=W+1,pn>=no?no=pn:dn=!0,I(Ft,N[pn],V,null,B,q,X,K,z),nt++)}const zs=dn?HC(Ir):fi;for(Pe=zs.length-1,W=nn-1;W>=0;W--){const Ft=le+W,pn=N[Ft],Qs=Ft+1<Z?N[Ft+1].el:$;Ir[W]===0?I(null,pn,V,Qs,B,q,X,K,z):dn&&(Pe<0||W!==zs[Pe]?qt(pn,V,Qs,2):Pe--)}}},qt=(A,N,V,$,B=null)=>{const{el:q,type:X,transition:K,children:z,shapeFlag:W}=A;if(W&6){qt(A.component.subTree,N,V,$);return}if(W&128){A.suspense.move(N,V,$);return}if(W&64){X.move(A,N,V,te);return}if(X===vt){r(q,N,V);for(let ae=0;ae<z.length;ae++)qt(z[ae],N,V,$);r(A.anchor,N,V);return}if(X===Vl){R(A,N,V);return}if($!==2&&W&1&&K)if($===0)K.beforeEnter(q),r(q,N,V),ht(()=>K.enter(q),B);else{const{leave:ae,delayLeave:ie,afterLeave:se}=K,le=()=>r(q,N,V),Me=()=>{ae(q,()=>{le(),se&&se()})};ie?ie(q,le,Me):Me()}else r(q,N,V)},Le=(A,N,V,$=!1,B=!1)=>{const{type:q,props:X,ref:K,children:z,dynamicChildren:W,shapeFlag:Z,patchFlag:ae,dirs:ie,cacheIndex:se}=A;if(ae===-2&&(B=!1),K!=null&&oc(K,null,V,A,!0),se!=null&&(N.renderCache[se]=void 0),Z&256){N.ctx.deactivate(A);return}const le=Z&1&&ie,Me=!Rs(A);let Pe;if(Me&&(Pe=X&&X.onVnodeBeforeUnmount)&&Gt(Pe,N,A),Z&6)Kt(A.component,V,$);else{if(Z&128){A.suspense.unmount(V,$);return}le&&xn(A,null,N,"beforeUnmount"),Z&64?A.type.remove(A,N,V,te,$):W&&!W.hasOnce&&(q!==vt||ae>0&&ae&64)?Rt(W,N,V,!1,!0):(q===vt&&ae&384||!B&&Z&16)&&Rt(z,N,V),$&&He(A)}(Me&&(Pe=X&&X.onVnodeUnmounted)||le)&&ht(()=>{Pe&&Gt(Pe,N,A),le&&xn(A,null,N,"unmounted")},V)},He=A=>{const{type:N,el:V,anchor:$,transition:B}=A;if(N===vt){Mn(V,$);return}if(N===Vl){O(A);return}const q=()=>{s(V),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(A.shapeFlag&1&&B&&!B.persisted){const{leave:X,delayLeave:K}=B,z=()=>X(V,q);K?K(A.el,q,z):z()}else q()},Mn=(A,N)=>{let V;for(;A!==N;)V=p(A),s(A),A=V;s(N)},Kt=(A,N,V)=>{const{bum:$,scope:B,update:q,subTree:X,um:K,m:z,a:W}=A;ac(z),ac(W),$&&mi($),B.stop(),q&&(q.active=!1,Le(X,A,N,V)),K&&ht(K,N),ht(()=>{A.isUnmounted=!0},N),N&&N.pendingBranch&&!N.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===N.pendingId&&(N.deps--,N.deps===0&&N.resolve())},Rt=(A,N,V,$=!1,B=!1,q=0)=>{for(let X=q;X<A.length;X++)Le(A[X],N,V,$,B)},U=A=>{if(A.shapeFlag&6)return U(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const N=p(A.anchor||A.el),V=N&&N[RT];return V?p(V):N};let Q=!1;const Y=(A,N,V)=>{A==null?N._vnode&&Le(N._vnode,null,null,!0):I(N._vnode||null,A,N,null,null,null,V),N._vnode=A,Q||(Q=!0,Ag(),nc(),Q=!1)},te={p:I,um:Le,m:qt,r:He,mt:fe,mc:y,pc:ne,pbc:w,n:U,o:t};let we,Ue;return e&&([we,Ue]=e(te)),{render:Y,hydrate:we,createApp:CC(Y,we)}}function ah({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ds({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function PT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ud(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Dr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ud(o,a)),a.type===Cs&&(a.el=o.el)}}function HC(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function kT(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:kT(e)}function ac(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const jC=Symbol.for("v-scx"),WC=()=>Fe(jC);function su(t,e){return Bd(t,null,e)}const vl={};function jt(t,e,n){return Bd(t,e,n)}function Bd(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Xe){if(e&&i){const D=e;e=(...T)=>{D(...T),x()}}const l=at,u=D=>r===!0?D:Lr(D,r===!1?1:void 0);let h,f=!1,p=!1;if(It(t)?(h=()=>t.value,f=Ri(t)):gi(t)?(h=()=>u(t),f=!0):ue(t)?(p=!0,f=t.some(D=>gi(D)||Ri(D)),h=()=>t.map(D=>{if(It(D))return D.value;if(gi(D))return u(D);if(de(D))return qr(D,l,2)})):de(t)?e?h=()=>qr(t,l,2):h=()=>(g&&g(),yn(t,l,3,[_])):h=gn,e&&r){const D=h;h=()=>Lr(D())}let g,_=D=>{g=R.onStop=()=>{qr(D,l,4),g=R.onStop=void 0}},I;if(Ra)if(_=gn,e?n&&yn(e,l,3,[h(),p?[]:void 0,_]):h(),s==="sync"){const D=WC();I=D.__watcherHandles||(D.__watcherHandles=[])}else return gn;let S=p?new Array(t.length).fill(vl):vl;const L=()=>{if(!(!R.active||!R.dirty))if(e){const D=R.run();(r||f||(p?D.some((T,y)=>Xr(T,S[y])):Xr(D,S)))&&(g&&g(),yn(e,l,3,[D,S===vl?void 0:p&&S[0]===vl?[]:S,_]),S=D)}else R.run()};L.allowRecurse=!!e;let k;s==="sync"?k=L:s==="post"?k=()=>ht(L,l&&l.suspense):(L.pre=!0,l&&(L.id=l.uid),k=()=>tu(L));const R=new Id(h,gn,k),O=wd(),x=()=>{R.stop(),O&&Ed(O.effects,R)};return e?n?L():S=R.run():s==="post"?ht(R.run.bind(R),l&&l.suspense):R.run(),I&&I.push(x),x}function qC(t,e,n){const r=this.proxy,s=Ze(t)?t.includes(".")?NT(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const o=ba(this),a=Bd(s,i.bind(r),n);return o(),a}function NT(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Lr(t,e=1/0,n){if(e<=0||!qe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,It(t))Lr(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)Lr(t[r],e,n);else if(bE(t)||di(t))t.forEach(r=>{Lr(r,e,n)});else if(CE(t)){for(const r in t)Lr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Lr(t[r],e,n)}return t}const KC=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${kn(e)}Modifiers`]||t[`${Bs(e)}Modifiers`];function GC(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Xe;let s=n;const i=e.startsWith("update:"),o=i&&KC(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>Ze(h)?h.trim():h)),o.number&&(s=n.map(qh)));let a,l=r[a=th(e)]||r[a=th(kn(e))];!l&&i&&(l=r[a=th(Bs(e))]),l&&yn(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,yn(u,t,6,s)}}function OT(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!de(t)){const l=u=>{const h=OT(u,e,!0);h&&(a=!0,ut(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(qe(t)&&r.set(t,null),null):(ue(i)?i.forEach(l=>o[l]=null):ut(o,i),qe(t)&&r.set(t,o),o)}function iu(t,e){return!t||!ya(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,Bs(e))||ke(t,e))}function lh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:f,data:p,setupState:g,ctx:_,inheritAttrs:I}=t,S=rc(t);let L,k;try{if(n.shapeFlag&4){const O=s||r,x=O;L=an(u.call(x,O,h,f,g,p,_)),k=a}else{const O=e;L=an(O.length>1?O(f,{attrs:a,slots:o,emit:l}):O(f,null)),k=e.props?a:QC(a)}}catch(O){Lo.length=0,Wi(O,t,1),L=be(mt)}let R=L;if(k&&I!==!1){const O=Object.keys(k),{shapeFlag:x}=R;O.length&&x&7&&(i&&O.some(vd)&&(k=YC(k,i)),R=mr(R,k,!1,!0))}return n.dirs&&(R=mr(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),L=R,rc(S),L}function zC(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(Ci(s)){if(s.type!==mt||s.children==="v-if"){if(n)return;n=s}}else return}return n}const QC=t=>{let e;for(const n in t)(n==="class"||n==="style"||ya(n))&&((e||(e={}))[n]=t[n]);return e},YC=(t,e)=>{const n={};for(const r in t)(!vd(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function XC(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Fg(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(o[p]!==r[p]&&!iu(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Fg(r,o,u):!0:!!o;return!1}function Fg(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!iu(n,i))return!0}return!1}function $d({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const nf=t=>t.__isSuspense;let rf=0;const JC={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)ZC(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}eS(t,e,n,r,s,o,a,l,u)}},hydrate:tS,normalize:nS},Hd=JC;function ea(t,e){const n=t.props&&t.props[e];de(n)&&n()}function ZC(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:h}}=l,f=h("div"),p=t.suspense=DT(t,s,r,e,f,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,f,null,r,p,i,o),p.deps>0?(ea(t,"onPending"),ea(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),yi(p,t.ssFallback)):p.resolve(!1,!0)}function eS(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:h}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:_,pendingBranch:I,isInFallback:S,isHydrating:L}=f;if(I)f.pendingBranch=p,bn(p,I)?(l(I,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():S&&(L||(l(_,g,n,r,s,null,i,o,a),yi(f,g)))):(f.pendingId=rf++,L?(f.isHydrating=!1,f.activeBranch=I):u(I,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=h("div"),S?(l(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(l(_,g,n,r,s,null,i,o,a),yi(f,g))):_&&bn(p,_)?(l(_,p,n,r,s,f,i,o,a),f.resolve(!0)):(l(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(_&&bn(p,_))l(_,p,n,r,s,f,i,o,a),yi(f,p);else if(ea(e,"onPending"),f.pendingBranch=p,p.shapeFlag&512?f.pendingId=p.component.suspenseId:f.pendingId=rf++,l(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:k,pendingId:R}=f;k>0?setTimeout(()=>{f.pendingId===R&&f.fallback(g)},k):k===0&&f.fallback(g)}}function DT(t,e,n,r,s,i,o,a,l,u,h=!1){const{p:f,m:p,um:g,n:_,o:{parentNode:I,remove:S}}=u;let L;const k=rS(t);k&&e&&e.pendingBranch&&(L=e.pendingId,e.deps++);const R=t.props?PE(t.props.timeout):void 0,O=i,x={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:rf++,timeout:typeof R=="number"?R:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(D=!1,T=!1){const{vnode:y,activeBranch:v,pendingBranch:w,pendingId:P,effects:C,parentComponent:b,container:fe}=x;let ve=!1;x.isHydrating?x.isHydrating=!1:D||(ve=v&&w.transition&&w.transition.mode==="out-in",ve&&(v.transition.afterLeave=()=>{P===x.pendingId&&(p(w,fe,i===O?_(v):i,0),Yh(C))}),v&&(I(v.el)!==x.hiddenContainer&&(i=_(v)),g(v,b,x,!0)),ve||p(w,fe,i,0)),yi(x,w),x.pendingBranch=null,x.isInFallback=!1;let ee=x.parent,ce=!1;for(;ee;){if(ee.pendingBranch){ee.effects.push(...C),ce=!0;break}ee=ee.parent}!ce&&!ve&&Yh(C),x.effects=[],k&&e&&e.pendingBranch&&L===e.pendingId&&(e.deps--,e.deps===0&&!T&&e.resolve()),ea(y,"onResolve")},fallback(D){if(!x.pendingBranch)return;const{vnode:T,activeBranch:y,parentComponent:v,container:w,namespace:P}=x;ea(T,"onFallback");const C=_(y),b=()=>{x.isInFallback&&(f(null,D,w,C,v,null,P,a,l),yi(x,D))},fe=D.transition&&D.transition.mode==="out-in";fe&&(y.transition.afterLeave=b),x.isInFallback=!0,g(y,v,null,!0),fe||b()},move(D,T,y){x.activeBranch&&p(x.activeBranch,D,T,y),x.container=D},next(){return x.activeBranch&&_(x.activeBranch)},registerDep(D,T,y){const v=!!x.pendingBranch;v&&x.deps++;const w=D.vnode.el;D.asyncDep.catch(P=>{Wi(P,D,0)}).then(P=>{if(D.isUnmounted||x.isUnmounted||x.pendingId!==D.suspenseId)return;D.asyncResolved=!0;const{vnode:C}=D;of(D,P,!1),w&&(C.el=w);const b=!w&&D.subTree.el;T(D,C,I(w||D.subTree.el),w?null:_(D.subTree),x,o,y),b&&S(b),$d(D,C.el),v&&--x.deps===0&&x.resolve()})},unmount(D,T){x.isUnmounted=!0,x.activeBranch&&g(x.activeBranch,n,D,T),x.pendingBranch&&g(x.pendingBranch,n,D,T)}};return x}function tS(t,e,n,r,s,i,o,a,l){const u=e.suspense=DT(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function nS(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Ug(r?n.default:n),t.ssFallback=r?Ug(n.fallback):be(mt)}function Ug(t){let e;if(de(t)){const n=Ai&&t._c;n&&(t._d=!1,In()),t=t(),n&&(t._d=!0,e=Qt,xT())}return ue(t)&&(t=zC(t)),t=an(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function MT(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):Yh(t)}function yi(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,$d(r,s))}function rS(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const vt=Symbol.for("v-fgt"),Cs=Symbol.for("v-txt"),mt=Symbol.for("v-cmt"),Vl=Symbol.for("v-stc"),Lo=[];let Qt=null;function In(t=!1){Lo.push(Qt=t?null:[])}function xT(){Lo.pop(),Qt=Lo[Lo.length-1]||null}let Ai=1;function Bg(t){Ai+=t,t<0&&Qt&&(Qt.hasOnce=!0)}function LT(t){return t.dynamicChildren=Ai>0?Qt||fi:null,xT(),Ai>0&&Qt&&Qt.push(t),t}function sS(t,e,n,r,s,i){return LT(FT(t,e,n,r,s,i,!0))}function sr(t,e,n,r,s){return LT(be(t,e,n,r,s,!0))}function Ci(t){return t?t.__v_isVNode===!0:!1}function bn(t,e){return t.type===e.type&&t.key===e.key}const VT=({key:t})=>t??null,Fl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ze(t)||It(t)||de(t)?{i:ct,r:t,k:e,f:!!n}:t:null);function FT(t,e=null,n=null,r=0,s=null,i=t===vt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&VT(e),ref:e&&Fl(e),scopeId:nu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ct};return a?(jd(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ze(n)?8:16),Ai>0&&!o&&Qt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Qt.push(l),l}const be=iS;function iS(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===hT)&&(t=mt),Ci(t)){const a=mr(t,e,!0);return n&&jd(a,n),Ai>0&&!i&&Qt&&(a.shapeFlag&6?Qt[Qt.indexOf(t)]=a:Qt.push(a)),a.patchFlag=-2,a}if(dS(t)&&(t=t.__vccOpts),e){e=UT(e);let{class:a,style:l}=e;a&&!Ze(a)&&(e.class=Jc(a)),qe(l)&&(GE(l)&&!ue(l)&&(l=ut({},l)),e.style=Xc(l))}const o=Ze(t)?1:nf(t)?128:MC(t)?64:qe(t)?4:de(t)?2:0;return FT(t,e,n,r,s,o,i,!0)}function UT(t){return t?GE(t)||yT(t)?ut({},t):t:null}function mr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?Wd(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&VT(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(Fl(e)):[i,Fl(e)]:Fl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mr(t.ssContent),ssFallback:t.ssFallback&&mr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Ns(h,l.clone(h)),h}function BT(t=" ",e=0){return be(Cs,null,t,e)}function tj(t="",e=!1){return e?(In(),sr(mt,null,t)):be(mt,null,t)}function an(t){return t==null||typeof t=="boolean"?be(mt):ue(t)?be(vt,null,t.slice()):typeof t=="object"?Dr(t):be(Cs,null,String(t))}function Dr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:mr(t)}function jd(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),jd(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!yT(e)?e._ctx=ct:s===3&&ct&&(ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:ct},n=32):(e=String(e),r&64?(n=16,e=[BT(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wd(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Jc([e.class,r.class]));else if(s==="style")e.style=Xc([e.style,r.style]);else if(ya(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Gt(t,e,n,r=null){yn(t,e,7,[n,r])}const oS=pT();let aS=0;function lS(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||oS,i={uid:aS++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ME(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ET(r,s),emitsOptions:OT(r,s),emit:null,emitted:null,propsDefaults:Xe,inheritAttrs:r.inheritAttrs,ctx:Xe,data:Xe,props:Xe,attrs:Xe,slots:Xe,refs:Xe,setupState:Xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=GC.bind(null,i),t.ce&&t.ce(i),i}let at=null;const qi=()=>at||ct;let lc,sf;{const t=kE(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};lc=e("__VUE_INSTANCE_SETTERS__",n=>at=n),sf=e("__VUE_SSR_SETTERS__",n=>Ra=n)}const ba=t=>{const e=at;return lc(t),t.scope.on(),()=>{t.scope.off(),lc(e)}},$g=()=>{at&&at.scope.off(),lc(null)};function $T(t){return t.vnode.shapeFlag&4}let Ra=!1;function cS(t,e=!1,n=!1){e&&sf(e);const{props:r,children:s}=t.vnode,i=$T(t);SC(t,r,i,e),OC(t,s,n);const o=i?uS(t,e):void 0;return e&&sf(!1),o}function uS(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,EC);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?fS(t):null,i=ba(t);ss();const o=qr(r,t,0,[t.props,s]);if(is(),i(),RE(o)){if(o.then($g,$g),e)return o.then(a=>{of(t,a,e)}).catch(a=>{Wi(a,t,0)});t.asyncDep=o}else of(t,o,e)}else HT(t,e)}function of(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:qe(e)&&(t.setupState=YE(e)),HT(t,n)}let Hg;function HT(t,e,n){const r=t.type;if(!t.render){if(!e&&Hg&&!r.render){const s=r.template||Vd(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=ut(ut({isCustomElement:i,delimiters:a},o),l);r.render=Hg(s,u)}}t.render=r.render||gn}{const s=ba(t);ss();try{TC(t)}finally{is(),s()}}}const hS={get(t,e){return en(t,"get",""),t[e]}};function fS(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,hS),slots:t.slots,emit:t.emit,expose:e}}function ou(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(YE(tc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Mo)return Mo[n](t)},has(e,n){return n in e||n in Mo}})):t.proxy}function af(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function dS(t){return de(t)&&"__vccOpts"in t}const pe=(t,e)=>XA(t,e,Ra);function $t(t,e,n){const r=arguments.length;return r===2?qe(e)&&!ue(e)?Ci(e)?be(t,null,[e]):be(t,e):be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ci(n)&&(n=[n]),be(t,e,n))}const jT="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const pS="http://www.w3.org/2000/svg",mS="http://www.w3.org/1998/Math/MathML",rr=typeof document<"u"?document:null,jg=rr&&rr.createElement("template"),gS={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?rr.createElementNS(pS,t):e==="mathml"?rr.createElementNS(mS,t):n?rr.createElement(t,{is:n}):rr.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>rr.createTextNode(t),createComment:t=>rr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{jg.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=jg.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Sr="transition",_o="animation",Si=Symbol("_vtc"),au=(t,{slots:e})=>$t(cC,qT(t),e);au.displayName="Transition";const WT={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_S=au.props=ut({},rT,WT),ps=(t,e=[])=>{ue(t)?t.forEach(n=>n(...e)):t&&t(...e)},Wg=t=>t?ue(t)?t.some(e=>e.length>1):t.length>1:!1;function qT(t){const e={};for(const C in t)C in WT||(e[C]=t[C]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,_=yS(s),I=_&&_[0],S=_&&_[1],{onBeforeEnter:L,onEnter:k,onEnterCancelled:R,onLeave:O,onLeaveCancelled:x,onBeforeAppear:D=L,onAppear:T=k,onAppearCancelled:y=R}=e,v=(C,b,fe)=>{kr(C,b?h:a),kr(C,b?u:o),fe&&fe()},w=(C,b)=>{C._isLeaving=!1,kr(C,f),kr(C,g),kr(C,p),b&&b()},P=C=>(b,fe)=>{const ve=C?T:k,ee=()=>v(b,C,fe);ps(ve,[b,ee]),qg(()=>{kr(b,C?l:i),er(b,C?h:a),Wg(ve)||Kg(b,r,I,ee)})};return ut(e,{onBeforeEnter(C){ps(L,[C]),er(C,i),er(C,o)},onBeforeAppear(C){ps(D,[C]),er(C,l),er(C,u)},onEnter:P(!1),onAppear:P(!0),onLeave(C,b){C._isLeaving=!0;const fe=()=>w(C,b);er(C,f),er(C,p),GT(),qg(()=>{C._isLeaving&&(kr(C,f),er(C,g),Wg(O)||Kg(C,r,S,fe))}),ps(O,[C,fe])},onEnterCancelled(C){v(C,!1),ps(R,[C])},onAppearCancelled(C){v(C,!0),ps(y,[C])},onLeaveCancelled(C){w(C),ps(x,[C])}})}function yS(t){if(t==null)return null;if(qe(t))return[ch(t.enter),ch(t.leave)];{const e=ch(t);return[e,e]}}function ch(t){return PE(t)}function er(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Si]||(t[Si]=new Set)).add(e)}function kr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Si];n&&(n.delete(e),n.size||(t[Si]=void 0))}function qg(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let vS=0;function Kg(t,e,n,r){const s=t._endId=++vS,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=KT(t,e);if(!o)return r();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,p),i()},p=g=>{g.target===t&&++h>=l&&f()};setTimeout(()=>{h<l&&f()},a+1),t.addEventListener(u,p)}function KT(t,e){const n=window.getComputedStyle(t),r=_=>(n[_]||"").split(", "),s=r(`${Sr}Delay`),i=r(`${Sr}Duration`),o=Gg(s,i),a=r(`${_o}Delay`),l=r(`${_o}Duration`),u=Gg(a,l);let h=null,f=0,p=0;e===Sr?o>0&&(h=Sr,f=o,p=i.length):e===_o?u>0&&(h=_o,f=u,p=l.length):(f=Math.max(o,u),h=f>0?o>u?Sr:_o:null,p=h?h===Sr?i.length:l.length:0);const g=h===Sr&&/\b(transform|all)(,|$)/.test(r(`${Sr}Property`).toString());return{type:h,timeout:f,propCount:p,hasTransform:g}}function Gg(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>zg(n)+zg(t[r])))}function zg(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function GT(){return document.body.offsetHeight}function ES(t,e,n){const r=t[Si];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const cc=Symbol("_vod"),zT=Symbol("_vsh"),nj={beforeMount(t,{value:e},{transition:n}){t[cc]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):yo(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),yo(t,!0),r.enter(t)):r.leave(t,()=>{yo(t,!1)}):yo(t,e))},beforeUnmount(t,{value:e}){yo(t,e)}};function yo(t,e){t.style.display=e?t[cc]:"none",t[zT]=!e}const TS=Symbol(""),wS=/(^|;)\s*display\s*:/;function IS(t,e,n){const r=t.style,s=Ze(n);let i=!1;if(n&&!s){if(e)if(Ze(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ul(r,a,"")}else for(const o in e)n[o]==null&&Ul(r,o,"");for(const o in n)o==="display"&&(i=!0),Ul(r,o,n[o])}else if(s){if(e!==n){const o=r[TS];o&&(n+=";"+o),r.cssText=n,i=wS.test(n)}}else e&&t.removeAttribute("style");cc in t&&(t[cc]=i?r.display:"",t[zT]&&(r.display="none"))}const Qg=/\s*!important$/;function Ul(t,e,n){if(ue(n))n.forEach(r=>Ul(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=bS(t,e);Qg.test(n)?t.setProperty(Bs(r),n.replace(Qg,""),"important"):t[r]=n}}const Yg=["Webkit","Moz","ms"],uh={};function bS(t,e){const n=uh[e];if(n)return n;let r=kn(e);if(r!=="filter"&&r in t)return uh[e]=r;r=Ea(r);for(let s=0;s<Yg.length;s++){const i=Yg[s]+r;if(i in t)return uh[e]=i}return e}const Xg="http://www.w3.org/1999/xlink";function Jg(t,e,n,r,s,i=SA(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Xg,e.slice(6,e.length)):t.setAttributeNS(Xg,e,n):n==null||i&&!NE(n)?t.removeAttribute(e):t.setAttribute(e,i?"":rs(n)?String(n):n)}function RS(t,e,n,r){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=NE(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function si(t,e,n,r){t.addEventListener(e,n,r)}function AS(t,e,n,r){t.removeEventListener(e,n,r)}const Zg=Symbol("_vei");function CS(t,e,n,r,s=null){const i=t[Zg]||(t[Zg]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=SS(e);if(r){const u=i[e]=NS(r,s);si(t,a,u,l)}else o&&(AS(t,a,o,l),i[e]=void 0)}}const e_=/(?:Once|Passive|Capture)$/;function SS(t){let e;if(e_.test(t)){e={};let r;for(;r=t.match(e_);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Bs(t.slice(2)),e]}let hh=0;const PS=Promise.resolve(),kS=()=>hh||(PS.then(()=>hh=0),hh=Date.now());function NS(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;yn(OS(r,n.value),e,5,[r])};return n.value=t,n.attached=kS(),n}function OS(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const t_=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,DS=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?ES(t,r,o):e==="style"?IS(t,n,r):ya(e)?vd(e)||CS(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):MS(t,e,r,o))?(RS(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Jg(t,e,r,o,i,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Jg(t,e,r,o))};function MS(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&t_(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return t_(e)&&Ze(n)?!1:e in t}const QT=new WeakMap,YT=new WeakMap,uc=Symbol("_moveCb"),n_=Symbol("_enterCb"),XT={name:"TransitionGroup",props:ut({},_S,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=qi(),r=nT();let s,i;return Md(()=>{if(!s.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!US(s[0].el,n.vnode.el,o))return;s.forEach(LS),s.forEach(VS);const a=s.filter(FS);GT(),a.forEach(l=>{const u=l.el,h=u.style;er(u,o),h.transform=h.webkitTransform=h.transitionDuration="";const f=u[uc]=p=>{p&&p.target!==u||(!p||/transform$/.test(p.propertyName))&&(u.removeEventListener("transitionend",f),u[uc]=null,kr(u,o))};u.addEventListener("transitionend",f)})}),()=>{const o=Se(t),a=qT(o);let l=o.tag||vt;if(s=[],i)for(let u=0;u<i.length;u++){const h=i[u];h.el&&h.el instanceof Element&&(s.push(h),Ns(h,Zo(h,a,r,n)),QT.set(h,h.el.getBoundingClientRect()))}i=e.default?Dd(e.default()):[];for(let u=0;u<i.length;u++){const h=i[u];h.key!=null&&Ns(h,Zo(h,a,r,n))}return be(l,null,i)}}},xS=t=>delete t.mode;XT.props;const rj=XT;function LS(t){const e=t.el;e[uc]&&e[uc](),e[n_]&&e[n_]()}function VS(t){YT.set(t,t.el.getBoundingClientRect())}function FS(t){const e=QT.get(t),n=YT.get(t),r=e.left-n.left,s=e.top-n.top;if(r||s){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${s}px)`,i.transitionDuration="0s",t}}function US(t,e,n){const r=t.cloneNode(),s=t[Si];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&r.classList.add(a)),r.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(r);const{hasTransform:o}=KT(r);return i.removeChild(r),o}const r_=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>mi(e,n):e};function BS(t){t.target.composing=!0}function s_(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fh=Symbol("_assign"),sj={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[fh]=r_(s);const i=r||s.props&&s.props.type==="number";si(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=qh(a)),t[fh](a)}),n&&si(t,"change",()=>{t.value=t.value.trim()}),e||(si(t,"compositionstart",BS),si(t,"compositionend",s_),si(t,"change",s_))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[fh]=r_(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?qh(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},JT=ut({patchProp:DS},gS);let Vo,i_=!1;function $S(){return Vo||(Vo=BC(JT))}function HS(){return Vo=i_?Vo:$C(JT),i_=!0,Vo}const jS=(...t)=>{const e=$S().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ew(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,ZT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},WS=(...t)=>{const e=HS().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ew(r);if(s)return n(s,!0,ZT(s))},e};function ZT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ew(t){return Ze(t)?document.querySelector(t):t}const qS=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,KS=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,GS=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function zS(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){QS(t);return}return e}function QS(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function hc(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!GS.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(qS.test(t)||KS.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,zS)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const YS=/#/g,XS=/&/g,JS=/\//g,ZS=/=/g,qd=/\+/g,eP=/%5e/gi,tP=/%60/gi,nP=/%7c/gi,rP=/%20/gi;function sP(t){return encodeURI(""+t).replace(nP,"|")}function lf(t){return sP(typeof t=="string"?t:JSON.stringify(t)).replace(qd,"%2B").replace(rP,"+").replace(YS,"%23").replace(XS,"%26").replace(tP,"`").replace(eP,"^").replace(JS,"%2F")}function dh(t){return lf(t).replace(ZS,"%3D")}function fc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function iP(t){return fc(t.replace(qd," "))}function oP(t){return fc(t.replace(qd," "))}function aP(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=iP(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=oP(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function lP(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${dh(t)}=${lf(n)}`).join("&"):`${dh(t)}=${lf(e)}`:dh(t)}function cP(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>lP(e,t[e])).filter(Boolean).join("&")}const uP=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,hP=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,fP=/^([/\\]\s*){2,}[^/\\]/,dP=/^[\s\0]*(blob|data|javascript|vbscript):$/i,pP=/\/$|\/\?|\/#/,mP=/^\.?\//;function Hs(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?uP.test(t):hP.test(t)||(e.acceptRelative?fP.test(t):!1)}function gP(t){return!!t&&dP.test(t)}function cf(t="",e){return e?pP.test(t):t.endsWith("/")}function Kd(t="",e){if(!e)return(cf(t)?t.slice(0,-1):t)||"/";if(!cf(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s>=0&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function uf(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(cf(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s>=0&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function _P(t=""){return t.startsWith("/")}function o_(t=""){return _P(t)?t:"/"+t}function yP(t,e){if(nw(e)||Hs(t))return t;const n=Kd(e);return t.startsWith(n)?t:Gd(n,t)}function a_(t,e){if(nw(e))return t;const n=Kd(e);if(!t.startsWith(n))return t;const r=t.slice(n.length);return r[0]==="/"?r:"/"+r}function tw(t,e){const n=TP(t),r={...aP(n.search),...e};return n.search=cP(r),wP(n)}function nw(t){return!t||t==="/"}function vP(t){return t&&t!=="/"}function Gd(t,...e){let n=t||"";for(const r of e.filter(s=>vP(s)))if(n){const s=r.replace(mP,"");n=uf(n)+s}else n=r;return n}function rw(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[f,p]of h.split(e).entries())if(!(!p||p===".")){if(p===".."){if(r.length===1&&Hs(r[0]))continue;r.pop(),s--;continue}if(f===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+p;continue}r.push(p),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function EP(t,e,n={}){return n.trailingSlash||(t=uf(t),e=uf(e)),n.leadingSlash||(t=o_(t),e=o_(e)),n.encoding||(t=fc(t),e=fc(e)),t===e}const sw=Symbol.for("ufo:protocolRelative");function TP(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,p=""]=n;return{protocol:f.toLowerCase(),pathname:p,href:f+p,auth:"",host:"",search:"",hash:""}}if(!Hs(t,{acceptRelative:!0}))return l_(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=l_(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[sw]:!r}}function l_(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function wP(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[sw]?(t.protocol||"")+"//":"")+s+i+e+n+r}class IP extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function bP(t){var l,u,h,f,p;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((f=t.options)==null?void 0:f.method)||"GET",r=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new IP(o,t.error?{cause:t.error}:void 0);for(const g of["request","options","response"])Object.defineProperty(a,g,{get(){return t[g]}});for(const[g,_]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,g,{get(){return t.response&&t.response[_]}});return a}const RP=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function c_(t="GET"){return RP.has(t.toUpperCase())}function AP(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const CP=new Set(["image/svg","application/xml","application/xhtml","application/html"]),SP=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function PP(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return SP.test(e)?"json":CP.has(e)||e.startsWith("text/")?"text":"blob"}function kP(t,e,n=globalThis.Headers){const r={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(r.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(r.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){r.headers=new n((e==null?void 0:e.headers)||{});for(const[s,i]of new n((t==null?void 0:t.headers)||{}))r.headers.set(s,i)}return r}const NP=new Set([408,409,425,429,500,502,503,504]),OP=new Set([101,204,205,304]);function iw(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=c_(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):NP.has(f))){const p=a.options.retryDelay||0;return p>0&&await new Promise(g=>setTimeout(g,p)),i(a.request,{...a.options,retry:h-1})}}const u=bP(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){var g;const h={request:l,options:kP(u,t.defaults,n),response:void 0,error:void 0};h.options.method=(g=h.options.method)==null?void 0:g.toUpperCase(),h.options.onRequest&&await h.options.onRequest(h),typeof h.request=="string"&&(h.options.baseURL&&(h.request=yP(h.request,h.options.baseURL)),(h.options.query||h.options.params)&&(h.request=tw(h.request,{...h.options.params,...h.options.query}))),h.options.body&&c_(h.options.method)&&(AP(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let f;if(!h.options.signal&&h.options.timeout){const _=new r;f=setTimeout(()=>_.abort(),h.options.timeout),h.options.signal=_.signal}try{h.response=await e(h.request,h.options)}catch(_){return h.error=_,h.options.onRequestError&&await h.options.onRequestError(h),await s(h)}finally{f&&clearTimeout(f)}if(h.response.body&&!OP.has(h.response.status)&&h.options.method!=="HEAD"){const _=(h.options.parseResponse?"json":h.options.responseType)||PP(h.response.headers.get("content-type")||"");switch(_){case"json":{const I=await h.response.text(),S=h.options.parseResponse||hc;h.response._data=S(I);break}case"stream":{h.response._data=h.response.body;break}default:h.response._data=await h.response[_]()}}return h.options.onResponse&&await h.options.onResponse(h),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await h.options.onResponseError(h),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={})=>iw({...t,defaults:{...t.defaults,...a}}),o}const zd=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),DP=zd.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),MP=zd.Headers,xP=zd.AbortController,LP=iw({fetch:DP,Headers:MP,AbortController:xP}),VP=LP,FP=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},dc=FP().app,UP=()=>dc.baseURL,BP=()=>dc.buildAssetsDir,Qd=(...t)=>rw(ow(),BP(),...t),ow=(...t)=>{const e=dc.cdnURL||dc.baseURL;return t.length?rw(e,...t):e};globalThis.__buildAssetsURL=Qd,globalThis.__publicAssetsURL=ow;globalThis.$fetch||(globalThis.$fetch=VP.create({baseURL:UP()}));function hf(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?hf(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const $P={run:t=>t()},HP=()=>$P,aw=typeof console.createTask<"u"?console.createTask:HP;function jP(t,e){const n=e.shift(),r=aw(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function WP(t,e){const n=e.shift(),r=aw(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function ph(t,e){for(const n of[...t])n(e)}class qP{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=hf(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=hf(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(jP,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(WP,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&ph(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&ph(this._after,s)}):(this._after&&s&&ph(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function lw(){return new qP}function KP(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s&&e===void 0){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;ff.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{ff.delete(u)}}}}function GP(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=KP({...t,...r})),e[n],e[n]}}}const pc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},u_="__unctx__",zP=pc[u_]||(pc[u_]=GP()),QP=(t,e={})=>zP.get(t,e),h_="__unctx_async_handlers__",ff=pc[h_]||(pc[h_]=new Set);function Pi(t){const e=[];for(const s of ff){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const YP=!1,df=!1,XP=!1,ij={componentName:"NuxtLink"},JP=null,ZP="#__nuxt",cw="nuxt-app",f_=36e5;function uw(t=cw){return QP(t,{asyncContext:!1})}const ek="__nuxt_plugin";function tk(t){let e=0;const n={_name:cw,_scope:Zc(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.12.4"},get vue(){return n.vueApp.version}},payload:ir({data:ir({}),state:Dt({}),once:new Set,_errors:ir({})}),static:{data:{}},runWithContext(s){return n._scope.active&&!wd()?n._scope.run(()=>d_(n,s)):d_(n,s)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:ir({}),_payloadRevivers:{},...t};if(window.__NUXT__)for(const s in window.__NUXT__)switch(s){case"data":case"state":case"_errors":Object.assign(n.payload[s],window.__NUXT__[s]);break;default:n.payload[s]=window.__NUXT__[s]}n.hooks=lw(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,i)=>{const o="$"+s;El(n,o,i),El(n.vueApp.config.globalProperties,o,i)},El(n.vueApp,"$nuxt",n),El(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",i=>{n.callHook("app:chunkError",{error:i.payload})}),window.useNuxtApp=window.useNuxtApp||tt;const s=n.hook("app:error",(...i)=>{console.error("[nuxt] error caught during app initialization",...i)});n.hook("app:mounted",s)}const r=n.payload.config;return n.provide("config",r),n}function nk(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function rk(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function sk(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(l){var h;const u=((h=l.dependsOn)==null?void 0:h.filter(f=>e.some(p=>p._name===f)&&!n.includes(f)))??[];if(u.length>0)r.push([new Set(u),l]);else{const f=rk(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([p,g])=>{p.has(l._name)&&(p.delete(l._name),p.size===0&&(o++,await a(g)))})))});l.parallel?s.push(f.catch(p=>i.push(p))):await f}}for(const l of e)nk(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function Wt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[ek]:!0,_name:e})}const ik=Wt;function d_(t,e,n){const r=()=>e();return uw(t._name).set(t),t.vueApp.runWithContext(r)}function ok(t){var n;let e;return mT()&&(e=(n=qi())==null?void 0:n.appContext.app.$nuxt),e=e||uw(t).tryUse(),e||null}function tt(t){const e=ok(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Aa(t){return tt().$config}function El(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function ak(t,e){return{ctx:{table:t},matchAll:n=>fw(n,t)}}function hw(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,hw(s)])):new Map(Object.entries(t[n]));return e}function lk(t){return ak(hw(t))}function fw(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of p_(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of p_(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...fw(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function p_(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function mh(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function pf(t,e,n=".",r){if(!mh(e))return pf(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:mh(o)&&mh(s[i])?s[i]=pf(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function ck(t){return(...e)=>e.reduce((n,r)=>pf(n,r,"",t),{})}const dw=ck();function uk(t,e){try{return e in t}catch{return!1}}var hk=Object.defineProperty,fk=(t,e,n)=>e in t?hk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,gs=(t,e,n)=>(fk(t,typeof e!="symbol"?e+"":e,n),n);class mf extends Error{constructor(e,n={}){super(e,n),gs(this,"statusCode",500),gs(this,"fatal",!1),gs(this,"unhandled",!1),gs(this,"statusMessage"),gs(this,"data"),gs(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:_f(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=pw(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}gs(mf,"__h3_error__",!0);function gf(t){if(typeof t=="string")return new mf(t);if(dk(t))return t;const e=new mf(t.message??t.statusMessage??"",{cause:t.cause||t});if(uk(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=_f(t.statusCode,e.statusCode):t.status&&(e.statusCode=_f(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;pw(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function dk(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const pk=/[^\u0009\u0020-\u007E]/g;function pw(t=""){return t.replace(pk,"")}function _f(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const mw=Symbol("layout-meta"),Ca=Symbol("route"),fn=()=>{var t;return(t=tt())==null?void 0:t.$router},Yd=()=>mT()?Fe(Ca,tt()._route):tt()._route;const mk=()=>{try{if(tt()._processingMiddleware)return!0}catch{return!1}return!1},m_=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?gk(t):fn().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([f,p])=>p!==void 0).map(([f,p])=>`${f.toLowerCase()}=${p}`).join(", ");return open(n,l,h),Promise.resolve()}const r=Hs(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&gP(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=mk();if(!s&&i)return t;const o=fn(),a=tt();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function gk(t){return tw(t.path||"",t.query||{})+(t.hash||"")}const gw="__nuxt_error",lu=()=>rC(tt().payload,"error"),ci=t=>{const e=cu(t);try{const n=tt(),r=lu();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},_k=async(t={})=>{const e=tt(),n=lu();e.callHook("app:error:cleared",t),t.redirect&&await fn().replace(t.redirect),n.value=JP},yk=t=>!!t&&typeof t=="object"&&gw in t,cu=t=>{const e=gf(t);return Object.defineProperty(e,gw,{value:!0,configurable:!1,writable:!1}),e},vk=-1,Ek=-2,Tk=-3,wk=-4,Ik=-5,bk=-6;function Rk(t,e){return Ak(JSON.parse(t),e)}function Ak(t,e){if(typeof t=="number")return s(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function s(i,o=!1){if(i===vk)return;if(i===Tk)return NaN;if(i===wk)return 1/0;if(i===Ik)return-1/0;if(i===bk)return-0;if(o)throw new Error("Invalid input");if(i in r)return r[i];const a=n[i];if(!a||typeof a!="object")r[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return r[i]=u(s(a[1]));switch(l){case"Date":r[i]=new Date(a[1]);break;case"Set":const h=new Set;r[i]=h;for(let g=1;g<a.length;g+=1)h.add(s(a[g]));break;case"Map":const f=new Map;r[i]=f;for(let g=1;g<a.length;g+=2)f.set(s(a[g]),s(a[g+1]));break;case"RegExp":r[i]=new RegExp(a[1],a[2]);break;case"Object":r[i]=Object(a[1]);break;case"BigInt":r[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[i]=p;for(let g=1;g<a.length;g+=2)p[a[g]]=s(a[g+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);r[i]=l;for(let u=0;u<a.length;u+=1){const h=a[u];h!==Ek&&(l[u]=s(h))}}else{const l={};r[i]=l;for(const u in a){const h=a[u];l[u]=s(h)}}return r[i]}return s(0)}const Ck=new Set(["title","titleTemplate","script","style","noscript"]),Bl=new Set(["base","meta","link","style","script","noscript"]),Sk=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Pk=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),_w=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),kk=typeof window<"u";function mc(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function g_(t){if(t._h)return t._h;if(t._d)return mc(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${t.props[n]},`;return mc(e)}const Nk=["name","property","http-equiv"];function yw(t){const{props:e,tag:n}=t;if(Pk.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of Nk)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}function __(t,e){return t==null?e||null:typeof t=="function"?t(e):t}function Ok(t,e){return t instanceof Promise?t.then(e):e(t)}function yf(t,e,n,r){const s=r||Ew(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>yf(t,e,n,o));const i={tag:t,props:s};for(const o of _w){const a=i.props[o]!==void 0?i.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||Ck.has(i.tag))&&(i[o==="children"?"innerHTML":o]=a),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function Dk(t,e){var r;const n=t==="class"?" ":";";return typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function vw(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=Dk(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,vw(t,e,n,s)));if(!e&&!_w.has(i)){const o=String(t[i]),a=i.startsWith("data-");o==="true"||o===""?t[i]=a?"true":!0:t[i]||(a&&o==="false"?t[i]="false":delete t[i])}}}function Ew(t,e=!1){const n=vw(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const Mk=10;function Tw(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,Tw(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function xk(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!Sk.has(s))){if(Array.isArray(i)){for(const o of i)e.push(yf(s,o,t));continue}e.push(yf(s,i,t))}}if(e.length===0)return[];const r=[];return Ok(Tw(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<Mk)+i,s)))}const y_={base:-10,title:10},v_={critical:-80,high:-10,low:20};function gc(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in y_&&(n=y_[t.tag]),e&&e in v_?n+v_[e]:n}const Lk=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],E_=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),Mr="%separator";function Vk(t,e){var r;let n;if(e==="s"||e==="pageTitle")n=t.pageTitle;else if(e.includes(".")){const s=e.indexOf(".");n=(r=t[e.substring(0,s)])==null?void 0:r[e.substring(s+1)]}else n=t[e];return n!==void 0?(n||"").replace(/"/g,'\\"'):void 0}const Fk=new RegExp(`${Mr}(?:\\s*${Mr})*`,"g");function gh(t,e,n){if(typeof t!="string"||!t.includes("%"))return t;let r=t;try{r=decodeURI(t)}catch{}const s=r.match(/%\w+(?:\.\w+)?/g);if(!s)return t;const i=t.includes(Mr);return t=t.replace(/%\w+(?:\.\w+)?/g,o=>{if(o===Mr||!s.includes(o))return o;const a=Vk(e,o.slice(1));return a!==void 0?a:o}).trim(),i&&(t.endsWith(Mr)&&(t=t.slice(0,-Mr.length)),t.startsWith(Mr)&&(t=t.slice(Mr.length)),t=t.replace(Fk,n).trim()),t}async function ww(t,e={}){var h;const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!r.shouldRender)return;const s=(await t.resolveTags()).map(f=>({tag:f,id:Bl.has(f.tag)?g_(f):f.tag,shouldRender:!0}));let i=t._dom;if(!i){i={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const f=new Set;for(const p of["body","head"]){const g=(h=n[p])==null?void 0:h.children;for(const _ of g){const I=_.tagName.toLowerCase();if(!Bl.has(I))continue;const S={tag:I,props:await Ew(_.getAttributeNames().reduce((O,x)=>({...O,[x]:_.getAttribute(x)}),{})),innerHTML:_.innerHTML},L=yw(S);let k=L,R=1;for(;k&&f.has(k);)k=`${L}:${R++}`;k&&(S._d=k,f.add(k)),i.elMap[_.getAttribute("data-hid")||g_(S)]=_}}}i.pendingSideEffects={...i.sideEffects},i.sideEffects={};function o(f,p,g){const _=`${f}:${p}`;i.sideEffects[_]=g,delete i.pendingSideEffects[_]}function a({id:f,$el:p,tag:g}){const _=g.tag.endsWith("Attrs");if(i.elMap[f]=p,_||(g.textContent&&g.textContent!==p.textContent&&(p.textContent=g.textContent),g.innerHTML&&g.innerHTML!==p.innerHTML&&(p.innerHTML=g.innerHTML),o(f,"el",()=>{var I;(I=i.elMap[f])==null||I.remove(),delete i.elMap[f]})),g._eventHandlers)for(const I in g._eventHandlers)Object.prototype.hasOwnProperty.call(g._eventHandlers,I)&&p.getAttribute(`data-${I}`)!==""&&((g.tag==="bodyAttrs"?n.defaultView:p).addEventListener(I.substring(2),g._eventHandlers[I].bind(p)),p.setAttribute(`data-${I}`,""));for(const I in g.props){if(!Object.prototype.hasOwnProperty.call(g.props,I))continue;const S=g.props[I],L=`attr:${I}`;if(I==="class"){if(!S)continue;for(const k of S.split(" "))_&&o(f,`${L}:${k}`,()=>p.classList.remove(k)),!p.classList.contains(k)&&p.classList.add(k)}else if(I==="style"){if(!S)continue;for(const k of S.split(";")){const R=k.indexOf(":"),O=k.substring(0,R).trim(),x=k.substring(R+1).trim();o(f,`${L}:${O}`,()=>{p.style.removeProperty(O)}),p.style.setProperty(O,x)}}else p.getAttribute(I)!==S&&p.setAttribute(I,S===!0?"":String(S)),_&&o(f,L,()=>p.removeAttribute(I))}}const l=[],u={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const f of s){const{tag:p,shouldRender:g,id:_}=f;if(g){if(p.tag==="title"){n.title=p.textContent;continue}f.$el=f.$el||i.elMap[_],f.$el?a(f):Bl.has(p.tag)&&l.push(f)}}for(const f of l){const p=f.tag.tagPosition||"head";f.$el=n.createElement(f.tag.tag),a(f),u[p]=u[p]||n.createDocumentFragment(),u[p].appendChild(f.$el)}for(const f of s)await t.hooks.callHook("dom:renderTag",f,n,o);u.head&&n.head.appendChild(u.head),u.bodyOpen&&n.body.insertBefore(u.bodyOpen,n.body.firstChild),u.bodyClose&&n.body.appendChild(u.bodyClose);for(const f in i.pendingSideEffects)i.pendingSideEffects[f]();t._dom=i,t.dirty=!1,await t.hooks.callHook("dom:rendered",{renders:s})}function Uk(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(r=>n(()=>ww(t,e).then(()=>{delete t._domUpdatePromise,r()})))}function Bk(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{Uk(i,t)}}}}}const $k=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Hk={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const n=yw(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&$k.has(r.tag)&&(a="merge"),a==="merge"){const l=i.props;l.style&&r.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),r.props.style=`${l.style} ${r.props.style}`),l.class&&r.props.class?r.props.class=`${l.class} ${r.props.class}`:l.class&&(r.props.class=l.class),e[s].props={...l,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if(gc(r)>gc(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&Bl.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},jk={mode:"server",hooks:{"tags:resolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},Wk=new Set(["script","link","bodyAttrs"]),qk=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!Wk.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&E_.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||mc(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);E_.has(a)&&((i=(s=n._eventHandlers)==null?void 0:s[a])==null||i.call(e,new Event(a.substring(2))))}}}}),Kk=new Set(["link","style","script","noscript"]),Gk={hooks:{"tag:normalise":({tag:t})=>{t.key&&Kk.has(t.tag)&&(t.props["data-hid"]=t._h=mc(t.key))}}},zk={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of Lk){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(a=>a._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=gc(n),i=gc(r);return s<i?-1:s>i?1:n._p-r._p})}}},Qk={meta:"content",link:"href",htmlAttrs:"lang"},Yk=["innerHTML","textContent"],Xk=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(r=e.tags.splice(a,1)[0].props,a-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=gh(s.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const a of n){if(a.processTemplateParams===!1)continue;const l=Qk[a.tag];if(l&&typeof a.props[l]=="string")a.props[l]=gh(a.props[l],s,i);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of Yk)typeof a[u]=="string"&&(a[u]=gh(a[u],s,i))}t._templateParams=s,t._separator=i}}}),Jk={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=__(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=__(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},Zk={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let Iw;function e1(t={}){const e=t1(t);return e.use(Bk()),Iw=e}function T_(t,e){return!t||t==="server"&&e||t==="client"&&!e}function t1(t={}){const e=lw();e.addHooks(t.hooks||{}),t.document=t.document||(kk?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),T_(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const h={_i:s++,input:l,...u};return T_(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(f=>f._i!==h._i),e.callHook("entries:updated",a),r()},patch(f){for(const p of i)p._i===h._i&&(p.input=h.input=f);r()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const u of l.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const f of await xk(u)){const p={tag:f,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",p),l.tags.push(p.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[Hk,jk,qk,Gk,zk,Xk,Jk,Zk,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function n1(){return Iw}const r1=jT[0]==="3";function s1(t){return typeof t=="function"?t():Oe(t)}function vf(t){if(t instanceof Promise)return t;const e=s1(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>vf(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Oe(e[r]);continue}n[r]=vf(e[r])}return n}return e}const i1={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=vf(e.input)}}},bw="usehead";function o1(t){return{install(n){r1&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(bw,t))}}.install}function a1(t={}){t.domDelayFn=t.domDelayFn||(n=>$s(()=>setTimeout(()=>n(),0)));const e=e1(t);return e.use(i1),e.install=o1(e),e}const Ef=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Tf="__unhead_injection_handler__";function l1(t){Ef[Tf]=t}function oj(){if(Tf in Ef)return Ef[Tf]();const t=Fe(bw);return t||n1()}let $l,Hl;function c1(){return $l=$fetch(Qd(`builds/meta/${Aa().app.buildId}.json`),{responseType:"json"}),$l.then(t=>{Hl=lk(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),$l}function uu(){return $l||c1()}async function Xd(t){if(await uu(),!Hl)return console.error("[nuxt] Error creating app manifest matcher.",Hl),{};try{return dw({},...Hl.matchAll(t).reverse())}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function w_(t,e={}){const n=await h1(t,e),r=tt(),s=r._payloadCache=r._payloadCache||{};return n in s||(s[n]=Aw(t).then(i=>i?Rw(n).then(o=>o||(delete s[n],null)):(s[n]=null,null))),s[n]}const u1="_payload.json";async function h1(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Hs(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Aa(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await Aw(t)?i:r.app.baseURL;return Gd(o,n.pathname,u1+(s?`?${s}`:""))}async function Rw(t){const e=fetch(t).then(n=>n.text().then(Cw));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function Aw(t=Yd().path){if(t=Kd(t),(await uu()).prerendered.includes(t))return!0;const n=await Xd(t);return!!n.prerender&&!n.redirect}let Tl=null;async function f1(){if(Tl)return Tl;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await Cw(t.textContent||""),n=t.dataset.src?await Rw(t.dataset.src):void 0;return Tl={...e,...n,...window.__NUXT__},Tl}async function Cw(t){return await Rk(t,tt()._payloadRevivers)}function jl(t,e){tt()._payloadRevivers[t]=e}var I_={};/**
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
 */const Sw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const J=function(t,e){if(!t)throw Ki(e)},Ki=function(t){return new Error("Firebase Database ("+Sw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Pw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},d1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},hu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[h],n[f],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):d1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new p1;const p=i<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class p1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kw=function(t){const e=Pw(t);return hu.encodeByteArray(e,!0)},_c=function(t){return kw(t).replace(/\./g,"")},yc=function(t){try{return hu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function m1(t){return Nw(void 0,t)}function Nw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!g1(n)||(t[n]=Nw(t[n],e[n]));return t}function g1(t){return t!=="__proto__"}/**
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
 */function _1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const y1=()=>_1().__FIREBASE_DEFAULTS__,v1=()=>{if(typeof process>"u"||typeof I_>"u")return;const t=I_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},E1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yc(t[1]);return e&&JSON.parse(e)},fu=()=>{try{return y1()||v1()||E1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},T1=t=>{var e,n;return(n=(e=fu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},w1=t=>{const e=T1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ow=()=>{var t;return(t=fu())===null||t===void 0?void 0:t.config},I1=t=>{var e;return(e=fu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ta{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function b1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[_c(JSON.stringify(n)),_c(JSON.stringify(o)),""].join(".")}/**
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
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function R1(){var t;const e=(t=fu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function A1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function C1(){const t=Vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Mw(){return Sw.NODE_ADMIN===!0}function S1(){return!R1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xw(){try{return typeof indexedDB=="object"}catch{return!1}}function P1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const k1="FirebaseError";class zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=k1,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gi.prototype.create)}}class Gi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?N1(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new zn(s,a,r)}}function N1(t,e){return t.replace(O1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const O1=/\{\$([^}]+)}/g;/**
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
 */function na(t){return JSON.parse(t)}function Et(t){return JSON.stringify(t)}/**
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
 */const Lw=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=na(yc(i[0])||""),n=na(yc(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},D1=function(t){const e=Lw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},M1=function(t){const e=Lw(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function wr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ki(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function wf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vc(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Ec(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(b_(i)&&b_(o)){if(!Ec(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function b_(t){return t!==null&&typeof t=="object"}/**
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
 */function zi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class x1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(p<<1|p>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):f<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const p=(s<<5|s>>>27)+u+l+h+r[f]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=p}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function L1(t,e){const n=new V1(t,e);return n.subscribe.bind(n)}class V1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");F1(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=_h),s.error===void 0&&(s.error=_h),s.complete===void 0&&(s.complete=_h);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function F1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _h(){}function U1(t,e){return`${t} failed: ${e} argument `}/**
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
 */const B1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,J(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},du=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function _t(t){return t&&t._delegate?t._delegate:t}class Nn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _s="[DEFAULT]";/**
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
 */class $1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ta;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(j1(e))try{this.getOrInitializeService({instanceIdentifier:_s})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_s){return this.instances.has(e)}getOptions(e=_s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:H1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_s){return this.component?this.component.multipleInstances?e:_s:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function H1(t){return t===_s?void 0:t}function j1(t){return t.instantiationMode==="EAGER"}/**
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
 */class W1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const q1={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},K1=Ee.INFO,G1={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},z1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=G1[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sa{constructor(e){this.name=e,this._logLevel=K1,this._logHandler=z1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?q1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const Q1=(t,e)=>e.some(n=>t instanceof n);let R_,A_;function Y1(){return R_||(R_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function X1(){return A_||(A_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vw=new WeakMap,If=new WeakMap,Fw=new WeakMap,yh=new WeakMap,Zd=new WeakMap;function J1(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Kr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Vw.set(n,t)}).catch(()=>{}),Zd.set(e,t),e}function Z1(t){if(If.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});If.set(t,e)}let bf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return If.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eN(t){bf=t(bf)}function tN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vh(this),e,...n);return Fw.set(r,e.sort?e.sort():[e]),Kr(r)}:X1().includes(t)?function(...e){return t.apply(vh(this),e),Kr(Vw.get(this))}:function(...e){return Kr(t.apply(vh(this),e))}}function nN(t){return typeof t=="function"?tN(t):(t instanceof IDBTransaction&&Z1(t),Q1(t,Y1())?new Proxy(t,bf):t)}function Kr(t){if(t instanceof IDBRequest)return J1(t);if(yh.has(t))return yh.get(t);const e=nN(t);return e!==t&&(yh.set(t,e),Zd.set(e,t)),e}const vh=t=>Zd.get(t);function rN(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Kr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Kr(o.result),l.oldVersion,l.newVersion,Kr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const sN=["get","getKey","getAll","getAllKeys","count"],iN=["put","add","delete","clear"],Eh=new Map;function C_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Eh.get(e))return Eh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=iN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sN.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return Eh.set(e,i),i}eN(t=>({...t,get:(e,n,r)=>C_(e,n)||t.get(e,n,r),has:(e,n)=>!!C_(e,n)||t.has(e,n)}));/**
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
 */class oN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rf="@firebase/app",S_="0.10.10";/**
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
 */const gr=new Sa("@firebase/app"),lN="@firebase/app-compat",cN="@firebase/analytics-compat",uN="@firebase/analytics",hN="@firebase/app-check-compat",fN="@firebase/app-check",dN="@firebase/auth",pN="@firebase/auth-compat",mN="@firebase/database",gN="@firebase/database-compat",_N="@firebase/functions",yN="@firebase/functions-compat",vN="@firebase/installations",EN="@firebase/installations-compat",TN="@firebase/messaging",wN="@firebase/messaging-compat",IN="@firebase/performance",bN="@firebase/performance-compat",RN="@firebase/remote-config",AN="@firebase/remote-config-compat",CN="@firebase/storage",SN="@firebase/storage-compat",PN="@firebase/firestore",kN="@firebase/vertexai-preview",NN="@firebase/firestore-compat",ON="firebase",DN="10.13.1";/**
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
 */const Af="[DEFAULT]",MN={[Rf]:"fire-core",[lN]:"fire-core-compat",[uN]:"fire-analytics",[cN]:"fire-analytics-compat",[fN]:"fire-app-check",[hN]:"fire-app-check-compat",[dN]:"fire-auth",[pN]:"fire-auth-compat",[mN]:"fire-rtdb",[gN]:"fire-rtdb-compat",[_N]:"fire-fn",[yN]:"fire-fn-compat",[vN]:"fire-iid",[EN]:"fire-iid-compat",[TN]:"fire-fcm",[wN]:"fire-fcm-compat",[IN]:"fire-perf",[bN]:"fire-perf-compat",[RN]:"fire-rc",[AN]:"fire-rc-compat",[CN]:"fire-gcs",[SN]:"fire-gcs-compat",[PN]:"fire-fst",[NN]:"fire-fst-compat",[kN]:"fire-vertex","fire-js":"fire-js",[ON]:"fire-js-all"};/**
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
 */const Tc=new Map,xN=new Map,Cf=new Map;function P_(t,e){try{t.container.addComponent(e)}catch(n){gr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hn(t){const e=t.name;if(Cf.has(e))return gr.debug(`There were multiple attempts to register component ${e}.`),!1;Cf.set(e,t);for(const n of Tc.values())P_(n,t);for(const n of xN.values())P_(n,t);return!0}function Uw(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function or(t){return t.settings!==void 0}/**
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
 */const LN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gr=new Gi("app","Firebase",LN);/**
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
 */class VN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gr.create("app-deleted",{appName:this._name})}}/**
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
 */const os=DN;function Bw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Af,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Gr.create("bad-app-name",{appName:String(s)});if(n||(n=Ow()),!n)throw Gr.create("no-options");const i=Tc.get(s);if(i){if(Ec(n,i.options)&&Ec(r,i.config))return i;throw Gr.create("duplicate-app",{appName:s})}const o=new W1(s);for(const l of Cf.values())o.addComponent(l);const a=new VN(n,r,o);return Tc.set(s,a),a}function $w(t=Af){const e=Tc.get(t);if(!e&&t===Af&&Ow())return Bw();if(!e)throw Gr.create("no-app",{appName:t});return e}function cn(t,e,n){var r;let s=(r=MN[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gr.warn(a.join(" "));return}Hn(new Nn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const FN="firebase-heartbeat-database",UN=1,ra="firebase-heartbeat-store";let Th=null;function Hw(){return Th||(Th=rN(FN,UN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ra)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gr.create("idb-open",{originalErrorMessage:t.message})})),Th}async function BN(t){try{const n=(await Hw()).transaction(ra),r=await n.objectStore(ra).get(jw(t));return await n.done,r}catch(e){if(e instanceof zn)gr.warn(e.message);else{const n=Gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gr.warn(n.message)}}}async function k_(t,e){try{const r=(await Hw()).transaction(ra,"readwrite");await r.objectStore(ra).put(e,jw(t)),await r.done}catch(n){if(n instanceof zn)gr.warn(n.message);else{const r=Gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gr.warn(r.message)}}}function jw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const $N=1024,HN=30*24*60*60*1e3;class jN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=N_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=HN}),this._storage.overwrite(this._heartbeatsCache))}catch(r){gr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=N_(),{heartbeatsToSend:r,unsentEntries:s}=WN(this._heartbeatsCache.heartbeats),i=_c(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return gr.warn(n),""}}}function N_(){return new Date().toISOString().substring(0,10)}function WN(t,e=$N){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),O_(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),O_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xw()?P1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await BN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return k_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return k_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function O_(t){return _c(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function KN(t){Hn(new Nn("platform-logger",e=>new oN(e),"PRIVATE")),Hn(new Nn("heartbeat",e=>new jN(e),"PRIVATE")),cn(Rf,S_,t),cn(Rf,S_,"esm2017"),cn("fire-js","")}KN("");var D_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ss,Ww;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function v(){}v.prototype=y.prototype,T.D=y.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(w,P,C){for(var b=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)b[fe-2]=arguments[fe];return y.prototype[P].apply(w,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,y,v){v||(v=0);var w=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)w[P]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(P=0;16>P;++P)w[P]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=T.g[0],v=T.g[1],P=T.g[2];var C=T.g[3],b=y+(C^v&(P^C))+w[0]+3614090360&4294967295;y=v+(b<<7&4294967295|b>>>25),b=C+(P^y&(v^P))+w[1]+3905402710&4294967295,C=y+(b<<12&4294967295|b>>>20),b=P+(v^C&(y^v))+w[2]+606105819&4294967295,P=C+(b<<17&4294967295|b>>>15),b=v+(y^P&(C^y))+w[3]+3250441966&4294967295,v=P+(b<<22&4294967295|b>>>10),b=y+(C^v&(P^C))+w[4]+4118548399&4294967295,y=v+(b<<7&4294967295|b>>>25),b=C+(P^y&(v^P))+w[5]+1200080426&4294967295,C=y+(b<<12&4294967295|b>>>20),b=P+(v^C&(y^v))+w[6]+2821735955&4294967295,P=C+(b<<17&4294967295|b>>>15),b=v+(y^P&(C^y))+w[7]+4249261313&4294967295,v=P+(b<<22&4294967295|b>>>10),b=y+(C^v&(P^C))+w[8]+1770035416&4294967295,y=v+(b<<7&4294967295|b>>>25),b=C+(P^y&(v^P))+w[9]+2336552879&4294967295,C=y+(b<<12&4294967295|b>>>20),b=P+(v^C&(y^v))+w[10]+4294925233&4294967295,P=C+(b<<17&4294967295|b>>>15),b=v+(y^P&(C^y))+w[11]+2304563134&4294967295,v=P+(b<<22&4294967295|b>>>10),b=y+(C^v&(P^C))+w[12]+1804603682&4294967295,y=v+(b<<7&4294967295|b>>>25),b=C+(P^y&(v^P))+w[13]+4254626195&4294967295,C=y+(b<<12&4294967295|b>>>20),b=P+(v^C&(y^v))+w[14]+2792965006&4294967295,P=C+(b<<17&4294967295|b>>>15),b=v+(y^P&(C^y))+w[15]+1236535329&4294967295,v=P+(b<<22&4294967295|b>>>10),b=y+(P^C&(v^P))+w[1]+4129170786&4294967295,y=v+(b<<5&4294967295|b>>>27),b=C+(v^P&(y^v))+w[6]+3225465664&4294967295,C=y+(b<<9&4294967295|b>>>23),b=P+(y^v&(C^y))+w[11]+643717713&4294967295,P=C+(b<<14&4294967295|b>>>18),b=v+(C^y&(P^C))+w[0]+3921069994&4294967295,v=P+(b<<20&4294967295|b>>>12),b=y+(P^C&(v^P))+w[5]+3593408605&4294967295,y=v+(b<<5&4294967295|b>>>27),b=C+(v^P&(y^v))+w[10]+38016083&4294967295,C=y+(b<<9&4294967295|b>>>23),b=P+(y^v&(C^y))+w[15]+3634488961&4294967295,P=C+(b<<14&4294967295|b>>>18),b=v+(C^y&(P^C))+w[4]+3889429448&4294967295,v=P+(b<<20&4294967295|b>>>12),b=y+(P^C&(v^P))+w[9]+568446438&4294967295,y=v+(b<<5&4294967295|b>>>27),b=C+(v^P&(y^v))+w[14]+3275163606&4294967295,C=y+(b<<9&4294967295|b>>>23),b=P+(y^v&(C^y))+w[3]+4107603335&4294967295,P=C+(b<<14&4294967295|b>>>18),b=v+(C^y&(P^C))+w[8]+1163531501&4294967295,v=P+(b<<20&4294967295|b>>>12),b=y+(P^C&(v^P))+w[13]+2850285829&4294967295,y=v+(b<<5&4294967295|b>>>27),b=C+(v^P&(y^v))+w[2]+4243563512&4294967295,C=y+(b<<9&4294967295|b>>>23),b=P+(y^v&(C^y))+w[7]+1735328473&4294967295,P=C+(b<<14&4294967295|b>>>18),b=v+(C^y&(P^C))+w[12]+2368359562&4294967295,v=P+(b<<20&4294967295|b>>>12),b=y+(v^P^C)+w[5]+4294588738&4294967295,y=v+(b<<4&4294967295|b>>>28),b=C+(y^v^P)+w[8]+2272392833&4294967295,C=y+(b<<11&4294967295|b>>>21),b=P+(C^y^v)+w[11]+1839030562&4294967295,P=C+(b<<16&4294967295|b>>>16),b=v+(P^C^y)+w[14]+4259657740&4294967295,v=P+(b<<23&4294967295|b>>>9),b=y+(v^P^C)+w[1]+2763975236&4294967295,y=v+(b<<4&4294967295|b>>>28),b=C+(y^v^P)+w[4]+1272893353&4294967295,C=y+(b<<11&4294967295|b>>>21),b=P+(C^y^v)+w[7]+4139469664&4294967295,P=C+(b<<16&4294967295|b>>>16),b=v+(P^C^y)+w[10]+3200236656&4294967295,v=P+(b<<23&4294967295|b>>>9),b=y+(v^P^C)+w[13]+681279174&4294967295,y=v+(b<<4&4294967295|b>>>28),b=C+(y^v^P)+w[0]+3936430074&4294967295,C=y+(b<<11&4294967295|b>>>21),b=P+(C^y^v)+w[3]+3572445317&4294967295,P=C+(b<<16&4294967295|b>>>16),b=v+(P^C^y)+w[6]+76029189&4294967295,v=P+(b<<23&4294967295|b>>>9),b=y+(v^P^C)+w[9]+3654602809&4294967295,y=v+(b<<4&4294967295|b>>>28),b=C+(y^v^P)+w[12]+3873151461&4294967295,C=y+(b<<11&4294967295|b>>>21),b=P+(C^y^v)+w[15]+530742520&4294967295,P=C+(b<<16&4294967295|b>>>16),b=v+(P^C^y)+w[2]+3299628645&4294967295,v=P+(b<<23&4294967295|b>>>9),b=y+(P^(v|~C))+w[0]+4096336452&4294967295,y=v+(b<<6&4294967295|b>>>26),b=C+(v^(y|~P))+w[7]+1126891415&4294967295,C=y+(b<<10&4294967295|b>>>22),b=P+(y^(C|~v))+w[14]+2878612391&4294967295,P=C+(b<<15&4294967295|b>>>17),b=v+(C^(P|~y))+w[5]+4237533241&4294967295,v=P+(b<<21&4294967295|b>>>11),b=y+(P^(v|~C))+w[12]+1700485571&4294967295,y=v+(b<<6&4294967295|b>>>26),b=C+(v^(y|~P))+w[3]+2399980690&4294967295,C=y+(b<<10&4294967295|b>>>22),b=P+(y^(C|~v))+w[10]+4293915773&4294967295,P=C+(b<<15&4294967295|b>>>17),b=v+(C^(P|~y))+w[1]+2240044497&4294967295,v=P+(b<<21&4294967295|b>>>11),b=y+(P^(v|~C))+w[8]+1873313359&4294967295,y=v+(b<<6&4294967295|b>>>26),b=C+(v^(y|~P))+w[15]+4264355552&4294967295,C=y+(b<<10&4294967295|b>>>22),b=P+(y^(C|~v))+w[6]+2734768916&4294967295,P=C+(b<<15&4294967295|b>>>17),b=v+(C^(P|~y))+w[13]+1309151649&4294967295,v=P+(b<<21&4294967295|b>>>11),b=y+(P^(v|~C))+w[4]+4149444226&4294967295,y=v+(b<<6&4294967295|b>>>26),b=C+(v^(y|~P))+w[11]+3174756917&4294967295,C=y+(b<<10&4294967295|b>>>22),b=P+(y^(C|~v))+w[2]+718787259&4294967295,P=C+(b<<15&4294967295|b>>>17),b=v+(C^(P|~y))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(P+(b<<21&4294967295|b>>>11))&4294967295,T.g[2]=T.g[2]+P&4294967295,T.g[3]=T.g[3]+C&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var v=y-this.blockSize,w=this.B,P=this.h,C=0;C<y;){if(P==0)for(;C<=v;)s(this,T,C),C+=this.blockSize;if(typeof T=="string"){for(;C<y;)if(w[P++]=T.charCodeAt(C++),P==this.blockSize){s(this,w),P=0;break}}else for(;C<y;)if(w[P++]=T[C++],P==this.blockSize){s(this,w),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var v=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=v&255,v/=256;for(this.u(T),T=Array(16),y=v=0;4>y;++y)for(var w=0;32>w;w+=8)T[v++]=this.g[y]>>>w&255;return T};function i(T,y){var v=a;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=y(T)}function o(T,y){this.h=y;for(var v=[],w=!0,P=T.length-1;0<=P;P--){var C=T[P]|0;w&&C==y||(v[P]=C,w=!1)}this.g=v}var a={};function l(T){return-128<=T&&128>T?i(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return S(u(-T));for(var y=[],v=1,w=0;T>=v;w++)y[w]=T/v|0,v*=4294967296;return new o(y,0)}function h(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return S(h(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),w=f,P=0;P<T.length;P+=8){var C=Math.min(8,T.length-P),b=parseInt(T.substring(P,P+C),y);8>C?(C=u(Math.pow(y,C)),w=w.j(C).add(u(b))):(w=w.j(v),w=w.add(u(b)))}return w}var f=l(0),p=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(I(this))return-S(this).m();for(var T=0,y=1,v=0;v<this.g.length;v++){var w=this.i(v);T+=(0<=w?w:4294967296+w)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(_(this))return"0";if(I(this))return"-"+S(this).toString(T);for(var y=u(Math.pow(T,6)),v=this,w="";;){var P=O(v,y).g;v=L(v,P.j(y));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=P,_(v))return C+w;for(;6>C.length;)C="0"+C;w=C+w}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function _(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function I(T){return T.h==-1}t.l=function(T){return T=L(this,T),I(T)?-1:_(T)?0:1};function S(T){for(var y=T.g.length,v=[],w=0;w<y;w++)v[w]=~T.g[w];return new o(v,~T.h).add(p)}t.abs=function(){return I(this)?S(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],w=0,P=0;P<=y;P++){var C=w+(this.i(P)&65535)+(T.i(P)&65535),b=(C>>>16)+(this.i(P)>>>16)+(T.i(P)>>>16);w=b>>>16,C&=65535,b&=65535,v[P]=b<<16|C}return new o(v,v[v.length-1]&-2147483648?-1:0)};function L(T,y){return T.add(S(y))}t.j=function(T){if(_(this)||_(T))return f;if(I(this))return I(T)?S(this).j(S(T)):S(S(this).j(T));if(I(T))return S(this.j(S(T)));if(0>this.l(g)&&0>T.l(g))return u(this.m()*T.m());for(var y=this.g.length+T.g.length,v=[],w=0;w<2*y;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var P=0;P<T.g.length;P++){var C=this.i(w)>>>16,b=this.i(w)&65535,fe=T.i(P)>>>16,ve=T.i(P)&65535;v[2*w+2*P]+=b*ve,k(v,2*w+2*P),v[2*w+2*P+1]+=C*ve,k(v,2*w+2*P+1),v[2*w+2*P+1]+=b*fe,k(v,2*w+2*P+1),v[2*w+2*P+2]+=C*fe,k(v,2*w+2*P+2)}for(w=0;w<y;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=y;w<2*y;w++)v[w]=0;return new o(v,0)};function k(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function R(T,y){this.g=T,this.h=y}function O(T,y){if(_(y))throw Error("division by zero");if(_(T))return new R(f,f);if(I(T))return y=O(S(T),y),new R(S(y.g),S(y.h));if(I(y))return y=O(T,S(y)),new R(S(y.g),y.h);if(30<T.g.length){if(I(T)||I(y))throw Error("slowDivide_ only works with positive integers.");for(var v=p,w=y;0>=w.l(T);)v=x(v),w=x(w);var P=D(v,1),C=D(w,1);for(w=D(w,2),v=D(v,2);!_(w);){var b=C.add(w);0>=b.l(T)&&(P=P.add(v),C=b),w=D(w,1),v=D(v,1)}return y=L(T,P.j(y)),new R(P,y)}for(P=f;0<=T.l(y);){for(v=Math.max(1,Math.floor(T.m()/y.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),C=u(v),b=C.j(y);I(b)||0<b.l(T);)v-=w,C=u(v),b=C.j(y);_(C)&&(C=p),P=P.add(C),T=L(T,b)}return new R(P,T)}t.A=function(T){return O(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)&T.i(w);return new o(v,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)|T.i(w);return new o(v,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)^T.i(w);return new o(v,this.h^T.h)};function x(T){for(var y=T.g.length+1,v=[],w=0;w<y;w++)v[w]=T.i(w)<<1|T.i(w-1)>>>31;return new o(v,T.h)}function D(T,y){var v=y>>5;y%=32;for(var w=T.g.length-v,P=[],C=0;C<w;C++)P[C]=0<y?T.i(C+v)>>>y|T.i(C+v+1)<<32-y:T.i(C+v);return new o(P,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ww=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Ss=o}).apply(typeof D_<"u"?D_:typeof self<"u"?self:typeof window<"u"?window:{});var wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qw,Kw,Co,Gw,Wl,Sf,zw,Qw,Yw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,d,m){return c==Array.prototype||c==Object.prototype||(c[d]=m.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof wl=="object"&&wl];for(var d=0;d<c.length;++d){var m=c[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(c,d){if(d)e:{var m=r;c=c.split(".");for(var E=0;E<c.length-1;E++){var M=c[E];if(!(M in m))break e;m=m[M]}c=c[c.length-1],E=m[c],d=d(E),d!=E&&d!=null&&e(m,c,{configurable:!0,writable:!0,value:d})}}function i(c,d){c instanceof String&&(c+="");var m=0,E=!1,M={next:function(){if(!E&&m<c.length){var F=m++;return{value:d(F,c[F]),done:!1}}return E=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}s("Array.prototype.values",function(c){return c||function(){return i(this,function(d,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var d=typeof c;return d=d!="object"?d:c?Array.isArray(c)?"array":d:"null",d=="array"||d=="object"&&typeof c.length=="number"}function u(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function h(c,d,m){return c.call.apply(c.bind,arguments)}function f(c,d,m){if(!c)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,E),c.apply(d,M)}}return function(){return c.apply(d,arguments)}}function p(c,d,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function g(c,d){var m=Array.prototype.slice.call(arguments,1);return function(){var E=m.slice();return E.push.apply(E,arguments),c.apply(this,E)}}function _(c,d){function m(){}m.prototype=d.prototype,c.aa=d.prototype,c.prototype=new m,c.prototype.constructor=c,c.Qb=function(E,M,F){for(var G=Array(arguments.length-2),je=2;je<arguments.length;je++)G[je-2]=arguments[je];return d.prototype[M].apply(E,G)}}function I(c){const d=c.length;if(0<d){const m=Array(d);for(let E=0;E<d;E++)m[E]=c[E];return m}return[]}function S(c,d){for(let m=1;m<arguments.length;m++){const E=arguments[m];if(l(E)){const M=c.length||0,F=E.length||0;c.length=M+F;for(let G=0;G<F;G++)c[M+G]=E[G]}else c.push(E)}}class L{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function k(c){return/^[\s\xa0]*$/.test(c)}function R(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function O(c){return O[" "](c),c}O[" "]=function(){};var x=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function D(c,d,m){for(const E in c)d.call(m,c[E],E,c)}function T(c,d){for(const m in c)d.call(void 0,c[m],m,c)}function y(c){const d={};for(const m in c)d[m]=c[m];return d}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(c,d){let m,E;for(let M=1;M<arguments.length;M++){E=arguments[M];for(m in E)c[m]=E[m];for(let F=0;F<v.length;F++)m=v[F],Object.prototype.hasOwnProperty.call(E,m)&&(c[m]=E[m])}}function P(c){var d=1;c=c.split(":");const m=[];for(;0<d&&c.length;)m.push(c.shift()),d--;return c.length&&m.push(c.join(":")),m}function C(c){a.setTimeout(()=>{throw c},0)}function b(){var c=$e;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class fe{constructor(){this.h=this.g=null}add(d,m){const E=ve.get();E.set(d,m),this.h?this.h.next=E:this.g=E,this.h=E}}var ve=new L(()=>new ee,c=>c.reset());class ee{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,ne=!1,$e=new fe,tn=()=>{const c=a.Promise.resolve(void 0);ce=()=>{c.then(qt)}};var qt=()=>{for(var c;c=b();){try{c.h.call(c.g)}catch(m){C(m)}var d=ve;d.j(c),100>d.h&&(d.h++,c.next=d.g,d.g=c)}ne=!1};function Le(){this.s=this.s,this.C=this.C}Le.prototype.s=!1,Le.prototype.ma=function(){this.s||(this.s=!0,this.N())},Le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function He(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var Mn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};a.addEventListener("test",m,d),a.removeEventListener("test",m,d)}catch{}return c}();function Kt(c,d){if(He.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var m=this.type=c.type,E=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget){if(x){e:{try{O(d.nodeName);var M=!0;break e}catch{}M=!1}M||(d=null)}}else m=="mouseover"?d=c.fromElement:m=="mouseout"&&(d=c.toElement);this.relatedTarget=d,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Rt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Kt.aa.h.call(this)}}_(Kt,He);var Rt={2:"touch",3:"pen",4:"mouse"};Kt.prototype.h=function(){Kt.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),Q=0;function Y(c,d,m,E,M){this.listener=c,this.proxy=null,this.src=d,this.type=m,this.capture=!!E,this.ha=M,this.key=++Q,this.da=this.fa=!1}function te(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function we(c){this.src=c,this.g={},this.h=0}we.prototype.add=function(c,d,m,E,M){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var G=A(c,d,E,M);return-1<G?(d=c[G],m||(d.fa=!1)):(d=new Y(d,this.src,F,!!E,M),d.fa=m,c.push(d)),d};function Ue(c,d){var m=d.type;if(m in c.g){var E=c.g[m],M=Array.prototype.indexOf.call(E,d,void 0),F;(F=0<=M)&&Array.prototype.splice.call(E,M,1),F&&(te(d),c.g[m].length==0&&(delete c.g[m],c.h--))}}function A(c,d,m,E){for(var M=0;M<c.length;++M){var F=c[M];if(!F.da&&F.listener==d&&F.capture==!!m&&F.ha==E)return M}return-1}var N="closure_lm_"+(1e6*Math.random()|0),V={};function $(c,d,m,E,M){if(Array.isArray(d)){for(var F=0;F<d.length;F++)$(c,d[F],m,E,M);return null}return m=ie(m),c&&c[U]?c.K(d,m,u(E)?!!E.capture:!!E,M):B(c,d,m,!1,E,M)}function B(c,d,m,E,M,F){if(!d)throw Error("Invalid event type");var G=u(M)?!!M.capture:!!M,je=Z(c);if(je||(c[N]=je=new we(c)),m=je.add(d,m,E,G,F),m.proxy)return m;if(E=q(),m.proxy=E,E.src=c,E.listener=m,c.addEventListener)Mn||(M=G),M===void 0&&(M=!1),c.addEventListener(d.toString(),E,M);else if(c.attachEvent)c.attachEvent(z(d.toString()),E);else if(c.addListener&&c.removeListener)c.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return m}function q(){function c(m){return d.call(c.src,c.listener,m)}const d=W;return c}function X(c,d,m,E,M){if(Array.isArray(d))for(var F=0;F<d.length;F++)X(c,d[F],m,E,M);else E=u(E)?!!E.capture:!!E,m=ie(m),c&&c[U]?(c=c.i,d=String(d).toString(),d in c.g&&(F=c.g[d],m=A(F,m,E,M),-1<m&&(te(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete c.g[d],c.h--)))):c&&(c=Z(c))&&(d=c.g[d.toString()],c=-1,d&&(c=A(d,m,E,M)),(m=-1<c?d[c]:null)&&K(m))}function K(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[U])Ue(d.i,c);else{var m=c.type,E=c.proxy;d.removeEventListener?d.removeEventListener(m,E,c.capture):d.detachEvent?d.detachEvent(z(m),E):d.addListener&&d.removeListener&&d.removeListener(E),(m=Z(d))?(Ue(m,c),m.h==0&&(m.src=null,d[N]=null)):te(c)}}}function z(c){return c in V?V[c]:V[c]="on"+c}function W(c,d){if(c.da)c=!0;else{d=new Kt(d,this);var m=c.listener,E=c.ha||c.src;c.fa&&K(c),c=m.call(E,d)}return c}function Z(c){return c=c[N],c instanceof we?c:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(c){return typeof c=="function"?c:(c[ae]||(c[ae]=function(d){return c.handleEvent(d)}),c[ae])}function se(){Le.call(this),this.i=new we(this),this.M=this,this.F=null}_(se,Le),se.prototype[U]=!0,se.prototype.removeEventListener=function(c,d,m,E){X(this,c,d,m,E)};function le(c,d){var m,E=c.F;if(E)for(m=[];E;E=E.F)m.push(E);if(c=c.M,E=d.type||d,typeof d=="string")d=new He(d,c);else if(d instanceof He)d.target=d.target||c;else{var M=d;d=new He(E,c),w(d,M)}if(M=!0,m)for(var F=m.length-1;0<=F;F--){var G=d.g=m[F];M=Me(G,E,!0,d)&&M}if(G=d.g=c,M=Me(G,E,!0,d)&&M,M=Me(G,E,!1,d)&&M,m)for(F=0;F<m.length;F++)G=d.g=m[F],M=Me(G,E,!1,d)&&M}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var c=this.i,d;for(d in c.g){for(var m=c.g[d],E=0;E<m.length;E++)te(m[E]);delete c.g[d],c.h--}}this.F=null},se.prototype.K=function(c,d,m,E){return this.i.add(String(c),d,!1,m,E)},se.prototype.L=function(c,d,m,E){return this.i.add(String(c),d,!0,m,E)};function Me(c,d,m,E){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();for(var M=!0,F=0;F<d.length;++F){var G=d[F];if(G&&!G.da&&G.capture==m){var je=G.listener,yt=G.ha||G.src;G.fa&&Ue(c.i,G),M=je.call(yt,E)!==!1&&M}}return M&&!E.defaultPrevented}function Pe(c,d,m){if(typeof c=="function")m&&(c=p(c,m));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(c,d||0)}function nt(c){c.g=Pe(()=>{c.g=null,c.i&&(c.i=!1,nt(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class nn extends Le{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:nt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dn(c){Le.call(this),this.h=c,this.g={}}_(dn,Le);var no=[];function Ir(c){D(c.g,function(d,m){this.g.hasOwnProperty(m)&&K(d)},c),c.g={}}dn.prototype.N=function(){dn.aa.N.call(this),Ir(this)},dn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zs=a.JSON.stringify,Ft=a.JSON.parse,pn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Qs(){}Qs.prototype.h=null;function Cm(c){return c.h||(c.h=c.i())}function Sm(){}var ro={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $u(){He.call(this,"d")}_($u,He);function Hu(){He.call(this,"c")}_(Hu,He);var cs={},Pm=null;function Qa(){return Pm=Pm||new se}cs.La="serverreachability";function km(c){He.call(this,cs.La,c)}_(km,He);function so(c){const d=Qa();le(d,new km(d))}cs.STAT_EVENT="statevent";function Nm(c,d){He.call(this,cs.STAT_EVENT,c),this.stat=d}_(Nm,He);function Ut(c){const d=Qa();le(d,new Nm(d,c))}cs.Ma="timingevent";function Om(c,d){He.call(this,cs.Ma,c),this.size=d}_(Om,He);function io(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},d)}function oo(){this.g=!0}oo.prototype.xa=function(){this.g=!1};function GR(c,d,m,E,M,F){c.info(function(){if(c.g)if(F)for(var G="",je=F.split("&"),yt=0;yt<je.length;yt++){var Ne=je[yt].split("=");if(1<Ne.length){var At=Ne[0];Ne=Ne[1];var Ct=At.split("_");G=2<=Ct.length&&Ct[1]=="type"?G+(At+"="+Ne+"&"):G+(At+"=redacted&")}}else G=null;else G=F;return"XMLHTTP REQ ("+E+") [attempt "+M+"]: "+d+`
`+m+`
`+G})}function zR(c,d,m,E,M,F,G){c.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+M+"]: "+d+`
`+m+`
`+F+" "+G})}function Ys(c,d,m,E){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+YR(c,m)+(E?" "+E:"")})}function QR(c,d){c.info(function(){return"TIMEOUT: "+d})}oo.prototype.info=function(){};function YR(c,d){if(!c.g)return d;if(!d)return null;try{var m=JSON.parse(d);if(m){for(c=0;c<m.length;c++)if(Array.isArray(m[c])){var E=m[c];if(!(2>E.length)){var M=E[1];if(Array.isArray(M)&&!(1>M.length)){var F=M[0];if(F!="noop"&&F!="stop"&&F!="close")for(var G=1;G<M.length;G++)M[G]=""}}}}return zs(m)}catch{return d}}var Ya={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ju;function Xa(){}_(Xa,Qs),Xa.prototype.g=function(){return new XMLHttpRequest},Xa.prototype.i=function(){return{}},ju=new Xa;function br(c,d,m,E){this.j=c,this.i=d,this.l=m,this.R=E||1,this.U=new dn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mm}function Mm(){this.i=null,this.g="",this.h=!1}var xm={},Wu={};function qu(c,d,m){c.L=1,c.v=tl(Xn(d)),c.m=m,c.P=!0,Lm(c,null)}function Lm(c,d){c.F=Date.now(),Ja(c),c.A=Xn(c.v);var m=c.A,E=c.R;Array.isArray(E)||(E=[String(E)]),Ym(m.i,"t",E),c.C=0,m=c.j.J,c.h=new Mm,c.g=pg(c.j,m?d:null,!c.m),0<c.O&&(c.M=new nn(p(c.Y,c,c.g),c.O)),d=c.U,m=c.g,E=c.ca;var M="readystatechange";Array.isArray(M)||(M&&(no[0]=M.toString()),M=no);for(var F=0;F<M.length;F++){var G=$(m,M[F],E||d.handleEvent,!1,d.h||d);if(!G)break;d.g[G.key]=G}d=c.H?y(c.H):{},c.m?(c.u||(c.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,d)):(c.u="GET",c.g.ea(c.A,c.u,null,d)),so(),GR(c.i,c.u,c.A,c.l,c.R,c.m)}br.prototype.ca=function(c){c=c.target;const d=this.M;d&&Jn(c)==3?d.j():this.Y(c)},br.prototype.Y=function(c){try{if(c==this.g)e:{const Ct=Jn(this.g);var d=this.g.Ba();const Zs=this.g.Z();if(!(3>Ct)&&(Ct!=3||this.g&&(this.h.h||this.g.oa()||rg(this.g)))){this.J||Ct!=4||d==7||(d==8||0>=Zs?so(3):so(2)),Ku(this);var m=this.g.Z();this.X=m;t:if(Vm(this)){var E=rg(this.g);c="";var M=E.length,F=Jn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){us(this),ao(this);var G="";break t}this.h.i=new a.TextDecoder}for(d=0;d<M;d++)this.h.h=!0,c+=this.h.i.decode(E[d],{stream:!(F&&d==M-1)});E.length=0,this.h.g+=c,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=m==200,zR(this.i,this.u,this.A,this.l,this.R,Ct,m),this.o){if(this.T&&!this.K){t:{if(this.g){var je,yt=this.g;if((je=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(je)){var Ne=je;break t}}Ne=null}if(m=Ne)Ys(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gu(this,m);else{this.o=!1,this.s=3,Ut(12),us(this),ao(this);break e}}if(this.P){m=!0;let Tn;for(;!this.J&&this.C<G.length;)if(Tn=XR(this,G),Tn==Wu){Ct==4&&(this.s=4,Ut(14),m=!1),Ys(this.i,this.l,null,"[Incomplete Response]");break}else if(Tn==xm){this.s=4,Ut(15),Ys(this.i,this.l,G,"[Invalid Chunk]"),m=!1;break}else Ys(this.i,this.l,Tn,null),Gu(this,Tn);if(Vm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ct!=4||G.length!=0||this.h.h||(this.s=1,Ut(16),m=!1),this.o=this.o&&m,!m)Ys(this.i,this.l,G,"[Invalid Chunked Response]"),us(this),ao(this);else if(0<G.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Zu(At),At.M=!0,Ut(11))}}else Ys(this.i,this.l,G,null),Gu(this,G);Ct==4&&us(this),this.o&&!this.J&&(Ct==4?ug(this.j,this):(this.o=!1,Ja(this)))}else pA(this.g),m==400&&0<G.indexOf("Unknown SID")?(this.s=3,Ut(12)):(this.s=0,Ut(13)),us(this),ao(this)}}}catch{}finally{}};function Vm(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function XR(c,d){var m=c.C,E=d.indexOf(`
`,m);return E==-1?Wu:(m=Number(d.substring(m,E)),isNaN(m)?xm:(E+=1,E+m>d.length?Wu:(d=d.slice(E,E+m),c.C=E+m,d)))}br.prototype.cancel=function(){this.J=!0,us(this)};function Ja(c){c.S=Date.now()+c.I,Fm(c,c.I)}function Fm(c,d){if(c.B!=null)throw Error("WatchDog timer not null");c.B=io(p(c.ba,c),d)}function Ku(c){c.B&&(a.clearTimeout(c.B),c.B=null)}br.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(QR(this.i,this.A),this.L!=2&&(so(),Ut(17)),us(this),this.s=2,ao(this)):Fm(this,this.S-c)};function ao(c){c.j.G==0||c.J||ug(c.j,c)}function us(c){Ku(c);var d=c.M;d&&typeof d.ma=="function"&&d.ma(),c.M=null,Ir(c.U),c.g&&(d=c.g,c.g=null,d.abort(),d.ma())}function Gu(c,d){try{var m=c.j;if(m.G!=0&&(m.g==c||zu(m.h,c))){if(!c.K&&zu(m.h,c)&&m.G==3){try{var E=m.Da.g.parse(d)}catch{E=null}if(Array.isArray(E)&&E.length==3){var M=E;if(M[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<c.F)ol(m),sl(m);else break e;Ju(m),Ut(18)}}else m.za=M[1],0<m.za-m.T&&37500>M[2]&&m.F&&m.v==0&&!m.C&&(m.C=io(p(m.Za,m),6e3));if(1>=$m(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else fs(m,11)}else if((c.K||m.g==c)&&ol(m),!k(d))for(M=m.Da.g.parse(d),d=0;d<M.length;d++){let Ne=M[d];if(m.T=Ne[0],Ne=Ne[1],m.G==2)if(Ne[0]=="c"){m.K=Ne[1],m.ia=Ne[2];const At=Ne[3];At!=null&&(m.la=At,m.j.info("VER="+m.la));const Ct=Ne[4];Ct!=null&&(m.Aa=Ct,m.j.info("SVER="+m.Aa));const Zs=Ne[5];Zs!=null&&typeof Zs=="number"&&0<Zs&&(E=1.5*Zs,m.L=E,m.j.info("backChannelRequestTimeoutMs_="+E)),E=m;const Tn=c.g;if(Tn){const ll=Tn.g?Tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ll){var F=E.h;F.g||ll.indexOf("spdy")==-1&&ll.indexOf("quic")==-1&&ll.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Qu(F,F.h),F.h=null))}if(E.D){const eh=Tn.g?Tn.g.getResponseHeader("X-HTTP-Session-Id"):null;eh&&(E.ya=eh,Ke(E.I,E.D,eh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-c.F,m.j.info("Handshake RTT: "+m.R+"ms")),E=m;var G=c;if(E.qa=dg(E,E.J?E.ia:null,E.W),G.K){Hm(E.h,G);var je=G,yt=E.L;yt&&(je.I=yt),je.B&&(Ku(je),Ja(je)),E.g=G}else lg(E);0<m.i.length&&il(m)}else Ne[0]!="stop"&&Ne[0]!="close"||fs(m,7);else m.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?fs(m,7):Xu(m):Ne[0]!="noop"&&m.l&&m.l.ta(Ne),m.v=0)}}so(4)}catch{}}var JR=class{constructor(c,d){this.g=c,this.map=d}};function Um(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bm(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function $m(c){return c.h?1:c.g?c.g.size:0}function zu(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function Qu(c,d){c.g?c.g.add(d):c.h=d}function Hm(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}Um.prototype.cancel=function(){if(this.i=jm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function jm(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const m of c.g.values())d=d.concat(m.D);return d}return I(c.i)}function ZR(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var d=[],m=c.length,E=0;E<m;E++)d.push(c[E]);return d}d=[],m=0;for(E in c)d[m++]=c[E];return d}function eA(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var d=[];c=c.length;for(var m=0;m<c;m++)d.push(m);return d}d=[],m=0;for(const E in c)d[m++]=E;return d}}}function Wm(c,d){if(c.forEach&&typeof c.forEach=="function")c.forEach(d,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,d,void 0);else for(var m=eA(c),E=ZR(c),M=E.length,F=0;F<M;F++)d.call(void 0,E[F],m&&m[F],c)}var qm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tA(c,d){if(c){c=c.split("&");for(var m=0;m<c.length;m++){var E=c[m].indexOf("="),M=null;if(0<=E){var F=c[m].substring(0,E);M=c[m].substring(E+1)}else F=c[m];d(F,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function hs(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof hs){this.h=c.h,Za(this,c.j),this.o=c.o,this.g=c.g,el(this,c.s),this.l=c.l;var d=c.i,m=new uo;m.i=d.i,d.g&&(m.g=new Map(d.g),m.h=d.h),Km(this,m),this.m=c.m}else c&&(d=String(c).match(qm))?(this.h=!1,Za(this,d[1]||"",!0),this.o=lo(d[2]||""),this.g=lo(d[3]||"",!0),el(this,d[4]),this.l=lo(d[5]||"",!0),Km(this,d[6]||"",!0),this.m=lo(d[7]||"")):(this.h=!1,this.i=new uo(null,this.h))}hs.prototype.toString=function(){var c=[],d=this.j;d&&c.push(co(d,Gm,!0),":");var m=this.g;return(m||d=="file")&&(c.push("//"),(d=this.o)&&c.push(co(d,Gm,!0),"@"),c.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&c.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(co(m,m.charAt(0)=="/"?sA:rA,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",co(m,oA)),c.join("")};function Xn(c){return new hs(c)}function Za(c,d,m){c.j=m?lo(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function el(c,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);c.s=d}else c.s=null}function Km(c,d,m){d instanceof uo?(c.i=d,aA(c.i,c.h)):(m||(d=co(d,iA)),c.i=new uo(d,c.h))}function Ke(c,d,m){c.i.set(d,m)}function tl(c){return Ke(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function lo(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function co(c,d,m){return typeof c=="string"?(c=encodeURI(c).replace(d,nA),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function nA(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Gm=/[#\/\?@]/g,rA=/[#\?:]/g,sA=/[#\?]/g,iA=/[#\?@]/g,oA=/#/g;function uo(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function Rr(c){c.g||(c.g=new Map,c.h=0,c.i&&tA(c.i,function(d,m){c.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=uo.prototype,t.add=function(c,d){Rr(this),this.i=null,c=Xs(this,c);var m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(d),this.h+=1,this};function zm(c,d){Rr(c),d=Xs(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function Qm(c,d){return Rr(c),d=Xs(c,d),c.g.has(d)}t.forEach=function(c,d){Rr(this),this.g.forEach(function(m,E){m.forEach(function(M){c.call(d,M,E,this)},this)},this)},t.na=function(){Rr(this);const c=Array.from(this.g.values()),d=Array.from(this.g.keys()),m=[];for(let E=0;E<d.length;E++){const M=c[E];for(let F=0;F<M.length;F++)m.push(d[E])}return m},t.V=function(c){Rr(this);let d=[];if(typeof c=="string")Qm(this,c)&&(d=d.concat(this.g.get(Xs(this,c))));else{c=Array.from(this.g.values());for(let m=0;m<c.length;m++)d=d.concat(c[m])}return d},t.set=function(c,d){return Rr(this),this.i=null,c=Xs(this,c),Qm(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},t.get=function(c,d){return c?(c=this.V(c),0<c.length?String(c[0]):d):d};function Ym(c,d,m){zm(c,d),0<m.length&&(c.i=null,c.g.set(Xs(c,d),I(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(var m=0;m<d.length;m++){var E=d[m];const F=encodeURIComponent(String(E)),G=this.V(E);for(E=0;E<G.length;E++){var M=F;G[E]!==""&&(M+="="+encodeURIComponent(String(G[E]))),c.push(M)}}return this.i=c.join("&")};function Xs(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function aA(c,d){d&&!c.j&&(Rr(c),c.i=null,c.g.forEach(function(m,E){var M=E.toLowerCase();E!=M&&(zm(this,E),Ym(this,M,m))},c)),c.j=d}function lA(c,d){const m=new oo;if(a.Image){const E=new Image;E.onload=g(Ar,m,"TestLoadImage: loaded",!0,d,E),E.onerror=g(Ar,m,"TestLoadImage: error",!1,d,E),E.onabort=g(Ar,m,"TestLoadImage: abort",!1,d,E),E.ontimeout=g(Ar,m,"TestLoadImage: timeout",!1,d,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=c}else d(!1)}function cA(c,d){const m=new oo,E=new AbortController,M=setTimeout(()=>{E.abort(),Ar(m,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:E.signal}).then(F=>{clearTimeout(M),F.ok?Ar(m,"TestPingServer: ok",!0,d):Ar(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(M),Ar(m,"TestPingServer: error",!1,d)})}function Ar(c,d,m,E,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),E(m)}catch{}}function uA(){this.g=new pn}function hA(c,d,m){const E=m||"";try{Wm(c,function(M,F){let G=M;u(M)&&(G=zs(M)),d.push(E+F+"="+encodeURIComponent(G))})}catch(M){throw d.push(E+"type="+encodeURIComponent("_badmap")),M}}function ho(c){this.l=c.Ub||null,this.j=c.eb||!1}_(ho,Qs),ho.prototype.g=function(){return new nl(this.l,this.j)},ho.prototype.i=function(c){return function(){return c}}({});function nl(c,d){se.call(this),this.D=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(nl,se),t=nl.prototype,t.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=d,this.readyState=1,po(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(d.body=c),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,fo(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,po(this)),this.g&&(this.readyState=3,po(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xm(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xm(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?fo(this):po(this),this.readyState==3&&Xm(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,fo(this))},t.Qa=function(c){this.g&&(this.response=c,fo(this))},t.ga=function(){this.g&&fo(this)};function fo(c){c.readyState=4,c.l=null,c.j=null,c.v=null,po(c)}t.setRequestHeader=function(c,d){this.u.append(c,d)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=d.next();return c.join(`\r
`)};function po(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(nl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Jm(c){let d="";return D(c,function(m,E){d+=E,d+=":",d+=m,d+=`\r
`}),d}function Yu(c,d,m){e:{for(E in m){var E=!1;break e}E=!0}E||(m=Jm(m),typeof c=="string"?m!=null&&encodeURIComponent(String(m)):Ke(c,d,m))}function et(c){se.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(et,se);var fA=/^https?$/i,dA=["POST","PUT"];t=et.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,d,m,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ju.g(),this.v=this.o?Cm(this.o):Cm(ju),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(F){Zm(this,F);return}if(c=m||"",m=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var M in E)m.set(M,E[M]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const F of E.keys())m.set(F,E.get(F));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),M=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(dA,d,void 0))||E||M||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,G]of m)this.g.setRequestHeader(F,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ng(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){Zm(this,F)}};function Zm(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.m=5,eg(c),rl(c)}function eg(c){c.A||(c.A=!0,le(c,"complete"),le(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,le(this,"complete"),le(this,"abort"),rl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rl(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?tg(this):this.bb())},t.bb=function(){tg(this)};function tg(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Jn(c)!=4||c.Z()!=2)){if(c.u&&Jn(c)==4)Pe(c.Ea,0,c);else if(le(c,"readystatechange"),Jn(c)==4){c.h=!1;try{const G=c.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var E;if(E=G===0){var M=String(c.D).match(qm)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),E=!fA.test(M?M.toLowerCase():"")}m=E}if(m)le(c,"complete"),le(c,"success");else{c.m=6;try{var F=2<Jn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",eg(c)}}finally{rl(c)}}}}function rl(c,d){if(c.g){ng(c);const m=c.g,E=c.v[0]?()=>{}:null;c.g=null,c.v=null,d||le(c,"ready");try{m.onreadystatechange=E}catch{}}}function ng(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function Jn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<Jn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),Ft(d)}};function rg(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function pA(c){const d={};c=(c.g&&2<=Jn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<c.length;E++){if(k(c[E]))continue;var m=P(c[E]);const M=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=d[M]||[];d[M]=F,F.push(m)}T(d,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function mo(c,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||d}function sg(c){this.Aa=0,this.i=[],this.j=new oo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=mo("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=mo("baseRetryDelayMs",5e3,c),this.cb=mo("retryDelaySeedMs",1e4,c),this.Wa=mo("forwardChannelMaxRetries",2,c),this.wa=mo("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Um(c&&c.concurrentRequestLimit),this.Da=new uA,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=sg.prototype,t.la=8,t.G=1,t.connect=function(c,d,m,E){Ut(0),this.W=c,this.H=d||{},m&&E!==void 0&&(this.H.OSID=m,this.H.OAID=E),this.F=this.X,this.I=dg(this,null,this.W),il(this)};function Xu(c){if(ig(c),c.G==3){var d=c.U++,m=Xn(c.I);if(Ke(m,"SID",c.K),Ke(m,"RID",d),Ke(m,"TYPE","terminate"),go(c,m),d=new br(c,c.j,d),d.L=2,d.v=tl(Xn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=d.v,m=!0),m||(d.g=pg(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ja(d)}fg(c)}function sl(c){c.g&&(Zu(c),c.g.cancel(),c.g=null)}function ig(c){sl(c),c.u&&(a.clearTimeout(c.u),c.u=null),ol(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function il(c){if(!Bm(c.h)&&!c.s){c.s=!0;var d=c.Ga;ce||tn(),ne||(ce(),ne=!0),$e.add(d,c),c.B=0}}function mA(c,d){return $m(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=d.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=io(p(c.Ga,c,d),hg(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const M=new br(this,this.j,c);let F=this.o;if(this.S&&(F?(F=y(F),w(F,this.S)):F=this.S),this.m!==null||this.O||(M.H=F,F=null),this.P)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var E=this.i[m];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(d+=E,4096<d){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=ag(this,M,d),m=Xn(this.I),Ke(m,"RID",c),Ke(m,"CVER",22),this.D&&Ke(m,"X-HTTP-Session-Id",this.D),go(this,m),F&&(this.O?d="headers="+encodeURIComponent(String(Jm(F)))+"&"+d:this.m&&Yu(m,this.m,F)),Qu(this.h,M),this.Ua&&Ke(m,"TYPE","init"),this.P?(Ke(m,"$req",d),Ke(m,"SID","null"),M.T=!0,qu(M,m,null)):qu(M,m,d),this.G=2}}else this.G==3&&(c?og(this,c):this.i.length==0||Bm(this.h)||og(this))};function og(c,d){var m;d?m=d.l:m=c.U++;const E=Xn(c.I);Ke(E,"SID",c.K),Ke(E,"RID",m),Ke(E,"AID",c.T),go(c,E),c.m&&c.o&&Yu(E,c.m,c.o),m=new br(c,c.j,m,c.B+1),c.m===null&&(m.H=c.o),d&&(c.i=d.D.concat(c.i)),d=ag(c,m,1e3),m.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Qu(c.h,m),qu(m,E,d)}function go(c,d){c.H&&D(c.H,function(m,E){Ke(d,E,m)}),c.l&&Wm({},function(m,E){Ke(d,E,m)})}function ag(c,d,m){m=Math.min(c.i.length,m);var E=c.l?p(c.l.Na,c.l,c):null;e:{var M=c.i;let F=-1;for(;;){const G=["count="+m];F==-1?0<m?(F=M[0].g,G.push("ofs="+F)):F=0:G.push("ofs="+F);let je=!0;for(let yt=0;yt<m;yt++){let Ne=M[yt].g;const At=M[yt].map;if(Ne-=F,0>Ne)F=Math.max(0,M[yt].g-100),je=!1;else try{hA(At,G,"req"+Ne+"_")}catch{E&&E(At)}}if(je){E=G.join("&");break e}}}return c=c.i.splice(0,m),d.D=c,E}function lg(c){if(!c.g&&!c.u){c.Y=1;var d=c.Fa;ce||tn(),ne||(ce(),ne=!0),$e.add(d,c),c.v=0}}function Ju(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=io(p(c.Fa,c),hg(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,cg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=io(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ut(10),sl(this),cg(this))};function Zu(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function cg(c){c.g=new br(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var d=Xn(c.qa);Ke(d,"RID","rpc"),Ke(d,"SID",c.K),Ke(d,"AID",c.T),Ke(d,"CI",c.F?"0":"1"),!c.F&&c.ja&&Ke(d,"TO",c.ja),Ke(d,"TYPE","xmlhttp"),go(c,d),c.m&&c.o&&Yu(d,c.m,c.o),c.L&&(c.g.I=c.L);var m=c.g;c=c.ia,m.L=1,m.v=tl(Xn(d)),m.m=null,m.P=!0,Lm(m,c)}t.Za=function(){this.C!=null&&(this.C=null,sl(this),Ju(this),Ut(19))};function ol(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function ug(c,d){var m=null;if(c.g==d){ol(c),Zu(c),c.g=null;var E=2}else if(zu(c.h,d))m=d.D,Hm(c.h,d),E=1;else return;if(c.G!=0){if(d.o)if(E==1){m=d.m?d.m.length:0,d=Date.now()-d.F;var M=c.B;E=Qa(),le(E,new Om(E,m)),il(c)}else lg(c);else if(M=d.s,M==3||M==0&&0<d.X||!(E==1&&mA(c,d)||E==2&&Ju(c)))switch(m&&0<m.length&&(d=c.h,d.i=d.i.concat(m)),M){case 1:fs(c,5);break;case 4:fs(c,10);break;case 3:fs(c,6);break;default:fs(c,2)}}}function hg(c,d){let m=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(m*=2),m*d}function fs(c,d){if(c.j.info("Error code "+d),d==2){var m=p(c.fb,c),E=c.Xa;const M=!E;E=new hs(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Za(E,"https"),tl(E),M?lA(E.toString(),m):cA(E.toString(),m)}else Ut(2);c.G=0,c.l&&c.l.sa(d),fg(c),ig(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Ut(2)):(this.j.info("Failed to ping google.com"),Ut(1))};function fg(c){if(c.G=0,c.ka=[],c.l){const d=jm(c.h);(d.length!=0||c.i.length!=0)&&(S(c.ka,d),S(c.ka,c.i),c.h.i.length=0,I(c.i),c.i.length=0),c.l.ra()}}function dg(c,d,m){var E=m instanceof hs?Xn(m):new hs(m);if(E.g!="")d&&(E.g=d+"."+E.g),el(E,E.s);else{var M=a.location;E=M.protocol,d=d?d+"."+M.hostname:M.hostname,M=+M.port;var F=new hs(null);E&&Za(F,E),d&&(F.g=d),M&&el(F,M),m&&(F.l=m),E=F}return m=c.D,d=c.ya,m&&d&&Ke(E,m,d),Ke(E,"VER",c.la),go(c,E),E}function pg(c,d,m){if(d&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Ca&&!c.pa?new et(new ho({eb:m})):new et(c.pa),d.Ha(c.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function mg(){}t=mg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function al(){}al.prototype.g=function(c,d){return new rn(c,d)};function rn(c,d){se.call(this),this.g=new sg(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(c?c["X-WebChannel-Client-Profile"]=d.va:c={"X-WebChannel-Client-Profile":d.va}),this.g.S=c,(c=d&&d.Sb)&&!k(c)&&(this.g.m=c),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!k(d)&&(this.g.D=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new Js(this)}_(rn,se),rn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},rn.prototype.close=function(){Xu(this.g)},rn.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.u&&(m={},m.__data__=zs(c),c=m);d.i.push(new JR(d.Ya++,c)),d.G==3&&il(d)},rn.prototype.N=function(){this.g.l=null,delete this.j,Xu(this.g),delete this.g,rn.aa.N.call(this)};function gg(c){$u.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){e:{for(const m in d){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}_(gg,$u);function _g(){Hu.call(this),this.status=1}_(_g,Hu);function Js(c){this.g=c}_(Js,mg),Js.prototype.ua=function(){le(this.g,"a")},Js.prototype.ta=function(c){le(this.g,new gg(c))},Js.prototype.sa=function(c){le(this.g,new _g)},Js.prototype.ra=function(){le(this.g,"b")},al.prototype.createWebChannel=al.prototype.g,rn.prototype.send=rn.prototype.o,rn.prototype.open=rn.prototype.m,rn.prototype.close=rn.prototype.close,Yw=function(){return new al},Qw=function(){return Qa()},zw=cs,Sf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ya.NO_ERROR=0,Ya.TIMEOUT=8,Ya.HTTP_ERROR=6,Wl=Ya,Dm.COMPLETE="complete",Gw=Dm,Sm.EventType=ro,ro.OPEN="a",ro.CLOSE="b",ro.ERROR="c",ro.MESSAGE="d",se.prototype.listen=se.prototype.K,Co=Sm,Kw=ho,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,qw=et}).apply(typeof wl<"u"?wl:typeof self<"u"?self:typeof window<"u"?window:{});const M_="@firebase/firestore";/**
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
 */class Pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
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
 */let Qi="10.13.1";/**
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
 */const Os=new Sa("@firebase/firestore");function vo(){return Os.logLevel}function re(t,...e){if(Os.logLevel<=Ee.DEBUG){const n=e.map(ep);Os.debug(`Firestore (${Qi}): ${t}`,...n)}}function _r(t,...e){if(Os.logLevel<=Ee.ERROR){const n=e.map(ep);Os.error(`Firestore (${Qi}): ${t}`,...n)}}function Ni(t,...e){if(Os.logLevel<=Ee.WARN){const n=e.map(ep);Os.warn(`Firestore (${Qi}): ${t}`,...n)}}function ep(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function me(t="Unexpected state"){const e=`FIRESTORE (${Qi}) INTERNAL ASSERTION FAILED: `+t;throw _r(e),new Error(e)}function We(t,e){t||me()}function ye(t,e){return t}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends zn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class dr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Xw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pt.UNAUTHENTICATED))}shutdown(){}}class zN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QN{constructor(e){this.t=e,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new dr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new dr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new dr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(We(typeof r.accessToken=="string"),new Xw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string"),new Pt(e)}}class YN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class XN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new YN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(We(typeof n.token=="string"),this.R=n.token,new JN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function eO(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Jw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=eO(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function De(t,e){return t<e?-1:t>e?1:0}function Oi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class st{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new oe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new st(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ge{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ge(e)}static min(){return new ge(new st(0,0))}static max(){return new ge(new st(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class sa{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(),r===void 0?r=e.length-n:r>e.length-n&&me(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return sa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Je extends sa{construct(e,n,r){return new Je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Je(n)}static emptyPath(){return new Je([])}}const tO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends sa{construct(e,n,r){return new Tt(e,n,r)}static isValidIdentifier(e){return tO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new oe(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new oe(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new oe(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new oe(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
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
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Je.fromString(e))}static fromName(e){return new he(Je.fromString(e).popFirst(5))}static empty(){return new he(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Je(e.slice()))}}function nO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new st(n+1,0):new st(n,r));return new Zr(s,he.empty(),e)}function rO(t){return new Zr(t.readTime,t.key,-1)}class Zr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zr(ge.min(),he.empty(),-1)}static max(){return new Zr(ge.max(),he.empty(),-1)}}function sO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:De(t.largestBatchId,e.largestBatchId))}/**
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
 */const iO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Pa(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==iO)throw t;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function aO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ka(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class tp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}tp.oe=-1;function pu(t){return t==null}function wc(t){return t===0&&1/t==-1/0}function lO(t){return typeof t=="number"&&Number.isInteger(t)&&!wc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function x_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function js(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let ot=class Pf{constructor(e,n){this.comparator=e,this.root=n||zr.EMPTY}insert(e,n){return new Pf(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,zr.BLACK,null,null))}remove(e){return new Pf(this.comparator,this.root.remove(e,this.comparator).copy(null,null,zr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Il(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Il(this.root,e,this.comparator,!1)}getReverseIterator(){return new Il(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Il(this.root,e,this.comparator,!0)}},Il=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},zr=class tr{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??tr.RED,this.left=s??tr.EMPTY,this.right=i??tr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new tr(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return tr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return tr.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}};zr.EMPTY=null,zr.RED=!0,zr.BLACK=!1;zr.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,r,s,i){return this}insert(e,n,r){return new zr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class wt{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new L_(this.data.getIterator())}getIteratorFrom(e){return new L_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new wt(this.comparator);return n.data=e,n}}class L_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ln{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new ln([])}unionWith(e){let n=new wt(Tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ln(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Oi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class e0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new e0("Invalid base64 string: "+i):i}}(e);return new bt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new bt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const cO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function es(t){if(We(!!t),typeof t=="string"){let e=0;const n=cO.exec(t);if(We(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rt(t.seconds),nanos:rt(t.nanos)}}function rt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ds(t){return typeof t=="string"?bt.fromBase64String(t):bt.fromUint8Array(t)}/**
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
 */function np(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rp(t){const e=t.mapValue.fields.__previous_value__;return np(e)?rp(e):e}function ia(t){const e=es(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
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
 */class uO{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class oa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new oa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof oa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const bl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ms(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?np(t)?4:fO(t)?9007199254740991:hO(t)?10:11:me()}function jn(t,e){if(t===e)return!0;const n=Ms(t);if(n!==Ms(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ia(t).isEqual(ia(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=es(s.timestampValue),a=es(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ds(s.bytesValue).isEqual(Ds(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return rt(s.geoPointValue.latitude)===rt(i.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return rt(s.integerValue)===rt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=rt(s.doubleValue),a=rt(i.doubleValue);return o===a?wc(o)===wc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Oi(t.arrayValue.values||[],e.arrayValue.values||[],jn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(x_(o)!==x_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!jn(o[l],a[l])))return!1;return!0}(t,e);default:return me()}}function aa(t,e){return(t.values||[]).find(n=>jn(n,e))!==void 0}function Di(t,e){if(t===e)return 0;const n=Ms(t),r=Ms(e);if(n!==r)return De(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return De(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=rt(i.integerValue||i.doubleValue),l=rt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return V_(t.timestampValue,e.timestampValue);case 4:return V_(ia(t),ia(e));case 5:return De(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Ds(i),l=Ds(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=De(a[u],l[u]);if(h!==0)return h}return De(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=De(rt(i.latitude),rt(o.latitude));return a!==0?a:De(rt(i.longitude),rt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return F_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const f=i.fields||{},p=o.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,I=De(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0);return I!==0?I:F_(g,_)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===bl.mapValue&&o===bl.mapValue)return 0;if(i===bl.mapValue)return 1;if(o===bl.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const p=De(l[f],h[f]);if(p!==0)return p;const g=Di(a[l[f]],u[h[f]]);if(g!==0)return g}return De(l.length,h.length)}(t.mapValue,e.mapValue);default:throw me()}}function V_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return De(t,e);const n=es(t),r=es(e),s=De(n.seconds,r.seconds);return s!==0?s:De(n.nanos,r.nanos)}function F_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Di(n[s],r[s]);if(i)return i}return De(n.length,r.length)}function Mi(t){return kf(t)}function kf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=es(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ds(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=kf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${kf(n.fields[o])}`;return s+"}"}(t.mapValue):me()}function Nf(t){return!!t&&"integerValue"in t}function sp(t){return!!t&&"arrayValue"in t}function U_(t){return!!t&&"nullValue"in t}function B_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ql(t){return!!t&&"mapValue"in t}function hO(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Fo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return js(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function fO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ql(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fo(n)}setAll(e){let n=Tt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Fo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ql(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ql(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){js(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new zt(Fo(this.value))}}function t0(t){const e=[];return js(t.fields,(n,r)=>{const s=new Tt([n]);if(ql(r)){const i=t0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new ln(e)}/**
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
 */class kt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new kt(e,0,ge.min(),ge.min(),ge.min(),zt.empty(),0)}static newFoundDocument(e,n,r,s){return new kt(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new kt(e,2,n,ge.min(),ge.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new kt(e,3,n,ge.min(),ge.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ic{constructor(e,n){this.position=e,this.inclusive=n}}function $_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=Di(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function H_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class bc{constructor(e,n="asc"){this.field=e,this.dir=n}}function dO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class n0{}class lt extends n0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new mO(e,n,r):n==="array-contains"?new yO(e,r):n==="in"?new vO(e,r):n==="not-in"?new EO(e,r):n==="array-contains-any"?new TO(e,r):new lt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gO(e,r):new _O(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Di(n,this.value)):n!==null&&Ms(this.value)===Ms(n)&&this.matchesComparison(Di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wn extends n0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Wn(e,n)}matches(e){return r0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function r0(t){return t.op==="and"}function s0(t){return pO(t)&&r0(t)}function pO(t){for(const e of t.filters)if(e instanceof Wn)return!1;return!0}function Of(t){if(t instanceof lt)return t.field.canonicalString()+t.op.toString()+Mi(t.value);if(s0(t))return t.filters.map(e=>Of(e)).join(",");{const e=t.filters.map(n=>Of(n)).join(",");return`${t.op}(${e})`}}function i0(t,e){return t instanceof lt?function(r,s){return s instanceof lt&&r.op===s.op&&r.field.isEqual(s.field)&&jn(r.value,s.value)}(t,e):t instanceof Wn?function(r,s){return s instanceof Wn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&i0(o,s.filters[a]),!0):!1}(t,e):void me()}function o0(t){return t instanceof lt?function(n){return`${n.field.canonicalString()} ${n.op} ${Mi(n.value)}`}(t):t instanceof Wn?function(n){return n.op.toString()+" {"+n.getFilters().map(o0).join(" ,")+"}"}(t):"Filter"}class mO extends lt{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class gO extends lt{constructor(e,n){super(e,"in",n),this.keys=a0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _O extends lt{constructor(e,n){super(e,"not-in",n),this.keys=a0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function a0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class yO extends lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sp(n)&&aa(n.arrayValue,this.value)}}class vO extends lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&aa(this.value.arrayValue,n)}}class EO extends lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!aa(this.value.arrayValue,n)}}class TO extends lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>aa(this.value.arrayValue,r))}}/**
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
 */class wO{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function j_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new wO(t,e,n,r,s,i,o)}function ip(t){const e=ye(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Of(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),pu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Mi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Mi(r)).join(",")),e.ue=n}return e.ue}function op(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!i0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!H_(t.startAt,e.startAt)&&H_(t.endAt,e.endAt)}function Df(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class mu{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function IO(t,e,n,r,s,i,o,a){return new mu(t,e,n,r,s,i,o,a)}function gu(t){return new mu(t)}function W_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bO(t){return t.collectionGroup!==null}function Uo(t){const e=ye(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new wt(Tt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new bc(i,r))}),n.has(Tt.keyField().canonicalString())||e.ce.push(new bc(Tt.keyField(),r))}return e.ce}function Un(t){const e=ye(t);return e.le||(e.le=RO(e,Uo(t))),e.le}function RO(t,e){if(t.limitType==="F")return j_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new bc(s.field,i)});const n=t.endAt?new Ic(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ic(t.startAt.position,t.startAt.inclusive):null;return j_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Mf(t,e,n){return new mu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _u(t,e){return op(Un(t),Un(e))&&t.limitType===e.limitType}function l0(t){return`${ip(Un(t))}|lt:${t.limitType}`}function ii(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>o0(s)).join(", ")}]`),pu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Mi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Mi(s)).join(",")),`Target(${r})`}(Un(t))}; limitType=${t.limitType})`}function yu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):he.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Uo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=$_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Uo(r),s)||r.endAt&&!function(o,a,l){const u=$_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Uo(r),s))}(t,e)}function AO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function c0(t){return(e,n)=>{let r=!1;for(const s of Uo(t)){const i=CO(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function CO(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Di(l,u):me()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me()}}/**
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
 */class Yi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){js(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Zw(this.inner)}size(){return this.innerSize}}/**
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
 */const SO=new ot(he.comparator);function yr(){return SO}const u0=new ot(he.comparator);function So(...t){let e=u0;for(const n of t)e=e.insert(n.key,n);return e}function h0(t){let e=u0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Es(){return Bo()}function f0(){return Bo()}function Bo(){return new Yi(t=>t.toString(),(t,e)=>t.isEqual(e))}const PO=new ot(he.comparator),kO=new wt(he.comparator);function Te(...t){let e=kO;for(const n of t)e=e.add(n);return e}const NO=new wt(De);function OO(){return NO}/**
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
 */function ap(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wc(e)?"-0":e}}function d0(t){return{integerValue:""+t}}function DO(t,e){return lO(e)?d0(e):ap(t,e)}/**
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
 */class vu{constructor(){this._=void 0}}function MO(t,e,n){return t instanceof la?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&np(i)&&(i=rp(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ca?m0(t,e):t instanceof ua?g0(t,e):function(s,i){const o=p0(s,i),a=q_(o)+q_(s.Pe);return Nf(o)&&Nf(s.Pe)?d0(a):ap(s.serializer,a)}(t,e)}function xO(t,e,n){return t instanceof ca?m0(t,e):t instanceof ua?g0(t,e):n}function p0(t,e){return t instanceof Rc?function(r){return Nf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class la extends vu{}class ca extends vu{constructor(e){super(),this.elements=e}}function m0(t,e){const n=_0(e);for(const r of t.elements)n.some(s=>jn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ua extends vu{constructor(e){super(),this.elements=e}}function g0(t,e){let n=_0(e);for(const r of t.elements)n=n.filter(s=>!jn(s,r));return{arrayValue:{values:n}}}class Rc extends vu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function q_(t){return rt(t.integerValue||t.doubleValue)}function _0(t){return sp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class LO{constructor(e,n){this.field=e,this.transform=n}}function VO(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ca&&s instanceof ca||r instanceof ua&&s instanceof ua?Oi(r.elements,s.elements,jn):r instanceof Rc&&s instanceof Rc?jn(r.Pe,s.Pe):r instanceof la&&s instanceof la}(t.transform,e.transform)}class FO{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Eu{}function y0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Tu(t.key,Jt.none()):new Na(t.key,t.data,Jt.none());{const n=t.data,r=zt.empty();let s=new wt(Tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new as(t.key,r,new ln(s.toArray()),Jt.none())}}function UO(t,e,n){t instanceof Na?function(s,i,o){const a=s.value.clone(),l=G_(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof as?function(s,i,o){if(!Kl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=G_(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(v0(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function $o(t,e,n,r){return t instanceof Na?function(i,o,a,l){if(!Kl(i.precondition,o))return a;const u=i.value.clone(),h=z_(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof as?function(i,o,a,l){if(!Kl(i.precondition,o))return a;const u=z_(i.fieldTransforms,l,o),h=o.data;return h.setAll(v0(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return Kl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function BO(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=p0(r.transform,s||null);i!=null&&(n===null&&(n=zt.empty()),n.set(r.field,i))}return n||null}function K_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Oi(r,s,(i,o)=>VO(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Na extends Eu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class as extends Eu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function v0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function G_(t,e,n){const r=new Map;We(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,xO(o,a,n[s]))}return r}function z_(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,MO(i,o,e))}return r}class Tu extends Eu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $O extends Eu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class HO{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&UO(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=f0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=y0(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Oi(this.mutations,e.mutations,(n,r)=>K_(n,r))&&Oi(this.baseMutations,e.baseMutations,(n,r)=>K_(n,r))}}class lp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){We(e.mutations.length===r.length);let s=function(){return PO}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new lp(e,n,r,s)}}/**
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
 */class jO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class WO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var it,Re;function qO(t){switch(t){default:return me();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function E0(t){if(t===void 0)return _r("GRPC error has no .code"),H.UNKNOWN;switch(t){case it.OK:return H.OK;case it.CANCELLED:return H.CANCELLED;case it.UNKNOWN:return H.UNKNOWN;case it.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case it.INTERNAL:return H.INTERNAL;case it.UNAVAILABLE:return H.UNAVAILABLE;case it.UNAUTHENTICATED:return H.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case it.NOT_FOUND:return H.NOT_FOUND;case it.ALREADY_EXISTS:return H.ALREADY_EXISTS;case it.PERMISSION_DENIED:return H.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case it.ABORTED:return H.ABORTED;case it.OUT_OF_RANGE:return H.OUT_OF_RANGE;case it.UNIMPLEMENTED:return H.UNIMPLEMENTED;case it.DATA_LOSS:return H.DATA_LOSS;default:return me()}}(Re=it||(it={}))[Re.OK=0]="OK",Re[Re.CANCELLED=1]="CANCELLED",Re[Re.UNKNOWN=2]="UNKNOWN",Re[Re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Re[Re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Re[Re.NOT_FOUND=5]="NOT_FOUND",Re[Re.ALREADY_EXISTS=6]="ALREADY_EXISTS",Re[Re.PERMISSION_DENIED=7]="PERMISSION_DENIED",Re[Re.UNAUTHENTICATED=16]="UNAUTHENTICATED",Re[Re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Re[Re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Re[Re.ABORTED=10]="ABORTED",Re[Re.OUT_OF_RANGE=11]="OUT_OF_RANGE",Re[Re.UNIMPLEMENTED=12]="UNIMPLEMENTED",Re[Re.INTERNAL=13]="INTERNAL",Re[Re.UNAVAILABLE=14]="UNAVAILABLE",Re[Re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function KO(){return new TextEncoder}/**
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
 */const GO=new Ss([4294967295,4294967295],0);function Q_(t){const e=KO().encode(t),n=new Ww;return n.update(e),new Uint8Array(n.digest())}function Y_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ss([n,r],0),new Ss([s,i],0)]}class cp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Po(`Invalid padding: ${n}`);if(r<0)throw new Po(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Po(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Po(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ss.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Ss.fromNumber(r)));return s.compare(GO)===1&&(s=new Ss([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Q_(e),[r,s]=Y_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new cp(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Q_(e),[r,s]=Y_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Po extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Oa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wu(ge.min(),s,new ot(De),yr(),Te())}}class Oa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Oa(r,n,Te(),Te(),Te())}}/**
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
 */class Gl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class T0{constructor(e,n){this.targetId=e,this.me=n}}class w0{constructor(e,n,r=bt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class X_{constructor(){this.fe=0,this.ge=Z_(),this.pe=bt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Te(),n=Te(),r=Te();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:me()}}),new Oa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Z_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,We(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class zO{constructor(e){this.Le=e,this.Be=new Map,this.ke=yr(),this.qe=J_(),this.Qe=new ot(De)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Df(i))if(r===0){const o=new he(i.path);this.Ue(n,o,kt.newNoDocument(o,ge.min()))}else We(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Ds(r).toUint8Array()}catch(l){if(l instanceof e0)return Ni("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new cp(o,s,i)}catch(l){return Ni(l instanceof Po?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Df(a.target)){const l=new he(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,kt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Te();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new wu(e,n,this.Qe,this.ke,r);return this.ke=yr(),this.qe=J_(),this.Qe=new ot(De),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new X_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new wt(De),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new X_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function J_(){return new ot(he.comparator)}function Z_(){return new ot(he.comparator)}const QO={asc:"ASCENDING",desc:"DESCENDING"},YO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XO={and:"AND",or:"OR"};class JO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function xf(t,e){return t.useProto3Json||pu(e)?e:{value:e}}function Ac(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function I0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ZO(t,e){return Ac(t,e.toTimestamp())}function Bn(t){return We(!!t),ge.fromTimestamp(function(n){const r=es(n);return new st(r.seconds,r.nanos)}(t))}function up(t,e){return Lf(t,e).canonicalString()}function Lf(t,e){const n=function(s){return new Je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function b0(t){const e=Je.fromString(t);return We(P0(e)),e}function Vf(t,e){return up(t.databaseId,e.path)}function wh(t,e){const n=b0(e);if(n.get(1)!==t.databaseId.projectId)throw new oe(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(A0(n))}function R0(t,e){return up(t.databaseId,e)}function eD(t){const e=b0(t);return e.length===4?Je.emptyPath():A0(e)}function Ff(t){return new Je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function A0(t){return We(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ey(t,e,n){return{name:Vf(t,e),fields:n.value.mapValue.fields}}function tD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(We(h===void 0||typeof h=="string"),bt.fromBase64String(h||"")):(We(h===void 0||h instanceof Buffer||h instanceof Uint8Array),bt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?H.UNKNOWN:E0(u.code);return new oe(h,u.message||"")}(o);n=new w0(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=wh(t,r.document.name),i=Bn(r.document.updateTime),o=r.document.createTime?Bn(r.document.createTime):ge.min(),a=new zt({mapValue:{fields:r.document.fields}}),l=kt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Gl(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=wh(t,r.document),i=r.readTime?Bn(r.readTime):ge.min(),o=kt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Gl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=wh(t,r.document),i=r.removedTargetIds||[];n=new Gl([],i,s,null)}else{if(!("filter"in e))return me();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new WO(s,i),a=r.targetId;n=new T0(a,o)}}return n}function nD(t,e){let n;if(e instanceof Na)n={update:ey(t,e.key,e.value)};else if(e instanceof Tu)n={delete:Vf(t,e.key)};else if(e instanceof as)n={update:ey(t,e.key,e.data),updateMask:hD(e.fieldMask)};else{if(!(e instanceof $O))return me();n={verify:Vf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof la)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ca)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ua)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Rc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw me()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ZO(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me()}(t,e.precondition)),n}function rD(t,e){return t&&t.length>0?(We(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Bn(s.updateTime):Bn(i);return o.isEqual(ge.min())&&(o=Bn(i)),new FO(o,s.transformResults||[])}(n,e))):[]}function sD(t,e){return{documents:[R0(t,e.path)]}}function iD(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=R0(t,s);const i=function(u){if(u.length!==0)return S0(Wn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:oi(p.field),direction:lD(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=xf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function oD(t){let e=eD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){We(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const p=C0(f);return p instanceof Wn&&s0(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(_){return new bc(ai(_.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,pu(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,g=f.values||[];return new Ic(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const p=!f.before,g=f.values||[];return new Ic(g,p)}(n.endAt)),IO(e,s,o,i,a,"F",l,u)}function aD(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function C0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ai(n.unaryFilter.field);return lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ai(n.unaryFilter.field);return lt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ai(n.unaryFilter.field);return lt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ai(n.unaryFilter.field);return lt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return lt.create(ai(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wn.create(n.compositeFilter.filters.map(r=>C0(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function lD(t){return QO[t]}function cD(t){return YO[t]}function uD(t){return XO[t]}function oi(t){return{fieldPath:t.canonicalString()}}function ai(t){return Tt.fromServerFormat(t.fieldPath)}function S0(t){return t instanceof lt?function(n){if(n.op==="=="){if(B_(n.value))return{unaryFilter:{field:oi(n.field),op:"IS_NAN"}};if(U_(n.value))return{unaryFilter:{field:oi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(B_(n.value))return{unaryFilter:{field:oi(n.field),op:"IS_NOT_NAN"}};if(U_(n.value))return{unaryFilter:{field:oi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oi(n.field),op:cD(n.op),value:n.value}}}(t):t instanceof Wn?function(n){const r=n.getFilters().map(s=>S0(s));return r.length===1?r[0]:{compositeFilter:{op:uD(n.op),filters:r}}}(t):me()}function hD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function P0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Hr{constructor(e,n,r,s,i=ge.min(),o=ge.min(),a=bt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class fD{constructor(e){this.ct=e}}function dD(t){const e=oD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mf(e,e.limit,"L"):e}/**
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
 */class pD{constructor(){this.un=new mD}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Zr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Zr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class mD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new wt(Je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new wt(Je.comparator)).toArray()}}/**
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
 */class xi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new xi(0)}static kn(){return new xi(-1)}}/**
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
 */class gD{constructor(){this.changes=new Yi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,kt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class _D{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class yD{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&$o(r.mutation,s,ln.empty(),st.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=Es();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=So();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Es();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=yr();const o=Bo(),a=function(){return Bo()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof as)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),$o(h.mutation,u,h.mutation.getFieldMask(),st.now())):o.set(u.key,ln.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new _D(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Bo();let s=new ot((o,a)=>o-a),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||ln.empty();h=a.applyToLocalView(u,h),r.set(l,h);const f=(s.get(a.batchId)||Te()).add(l);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,f=f0();h.forEach(p=>{if(!i.has(p)){const g=y0(n.get(p),r.get(p));g!==null&&f.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(Es());let a=-1,l=i;return o.next(u=>j.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Te())).next(h=>({batchId:a,changes:h0(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let s=So();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=So();return this.indexManager.getCollectionParents(e,i).next(a=>j.forEach(a,l=>{const u=function(f,p){return new mu(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,kt.newInvalidDocument(h)))});let a=So();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&$o(h.mutation,u,ln.empty(),st.now()),yu(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class vD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Bn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:dD(s.bundledQuery),readTime:Bn(s.readTime)}}(n)),j.resolve()}}/**
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
 */class ED{constructor(){this.overlays=new ot(he.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Es();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=Es(),i=n.length+1,o=new he(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ot((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Es(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Es(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return j.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new jO(n,r));let i=this.Ir.get(n);i===void 0&&(i=Te(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class TD{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class hp{constructor(){this.Tr=new wt(dt.Er),this.dr=new wt(dt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new dt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new dt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new he(new Je([])),r=new dt(n,e),s=new dt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new he(new Je([])),r=new dt(n,e),s=new dt(n,e+1);let i=Te();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new dt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class dt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return he.comparator(e.key,n.key)||De(e.wr,n.wr)}static Ar(e,n){return De(e.wr,n.wr)||he.comparator(e.key,n.key)}}/**
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
 */class wD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new wt(dt.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new HO(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new dt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new dt(n,0),s=new dt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const a=this.Dr(o.wr);i.push(a)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new wt(De);return n.forEach(s=>{const i=new dt(s,0),o=new dt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{r=r.add(a.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;he.isDocumentKey(i)||(i=i.child(""));const o=new dt(new he(i),0);let a=new wt(De);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.wr)),!0)},o),j.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){We(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,s=>{const i=new dt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new dt(n,0),s=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ID{constructor(e){this.Mr=e,this.docs=function(){return new ot(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():kt.newInvalidDocument(n))}getEntries(e,n){let r=yr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():kt.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=yr();const o=n.path,a=new he(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||sO(rO(h),r)<=0||(s.has(h.key)||yu(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bD(this)}getSize(e){return j.resolve(this.size)}}class bD extends gD{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class RD{constructor(e){this.persistence=e,this.Nr=new Yi(n=>ip(n),op),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Lr=0,this.Br=new hp,this.targetCount=0,this.kr=xi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new xi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
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
 */class AD{constructor(e,n){this.qr={},this.overlays={},this.Qr=new tp(0),this.Kr=!1,this.Kr=!0,this.$r=new TD,this.referenceDelegate=e(this),this.Ur=new RD(this),this.indexManager=new pD,this.remoteDocumentCache=function(s){return new ID(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new fD(n),this.Gr=new vD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ED,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new wD(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){re("MemoryPersistence","Starting transaction:",e);const s=new CD(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class CD extends oO{constructor(e){super(),this.currentSequenceNumber=e}}class fp{constructor(e){this.persistence=e,this.Jr=new hp,this.Yr=null}static Zr(e){return new fp(e)}get Xr(){if(this.Yr)return this.Yr;throw me()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const s=he.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class dp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new dp(e,n.fromCache,r,s)}}/**
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
 */class SD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class PD{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return S1()?8:aO(Vt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new SD;return this.Xi(e,n,o).next(a=>{if(i.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(vo()<=Ee.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",ii(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(vo()<=Ee.DEBUG&&re("QueryEngine","Query:",ii(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(vo()<=Ee.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",ii(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Un(n))):j.resolve())}Yi(e,n){if(W_(n))return j.resolve(null);let r=Un(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Mf(n,null,"F"),r=Un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Te(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(n,a);return this.ns(n,u,o,l.readTime)?this.Yi(e,Mf(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,r,s){return W_(n)||s.isEqual(ge.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?j.resolve(null):(vo()<=Ee.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ii(n)),this.rs(e,o,n,nO(s,-1)).next(a=>a))})}ts(e,n){let r=new wt(c0(e));return n.forEach((s,i)=>{yu(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return vo()<=Ee.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",ii(n)),this.Ji.getDocumentsMatchingQuery(e,n,Zr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class kD{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new ot(De),this._s=new Yi(i=>ip(i),op),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yD(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function ND(t,e,n,r){return new kD(t,e,n,r)}async function k0(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Te();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function OD(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const f=u.batch,p=f.keys();let g=j.resolve();return p.forEach(_=>{g=g.next(()=>h.getEntry(l,_)).next(I=>{const S=u.docVersions.get(_);We(S!==null),I.version.compareTo(S)<0&&(f.applyToRemoteDocument(I,u),I.isValidDocument()&&(I.setReadTime(u.commitVersion),h.addEntry(I)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function N0(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function DD(t,e){const n=ye(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const p=s.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(i,h.addedDocuments,f)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(bt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(f,g),function(I,S,L){return I.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(p,g,h)&&a.push(n.Ur.updateTargetData(i,g))});let l=yr(),u=Te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(MD(i,o,e.documentUpdates).next(h=>{l=h.Ps,u=h.Is})),!r.isEqual(ge.min())){const h=n.Ur.getLastRemoteSnapshotVersion(i).next(f=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return j.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=s,i))}function MD(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=yr();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):re("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function xD(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function LD(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Hr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Uf(t,e,n){const r=ye(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ka(o))throw o;re("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function ty(t,e,n){const r=ye(t);let s=ge.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const f=ye(l),p=f._s.get(h);return p!==void 0?j.resolve(f.os.get(p)):f.Ur.getTargetData(u,h)}(r,o,Un(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:Te())).next(a=>(VD(r,AO(e),a),{documents:a,Ts:i})))}function VD(t,e,n){let r=t.us.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class ny{constructor(){this.activeTargetIds=OO()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class FD{constructor(){this.so=new ny,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ny,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class UD{_o(e){}shutdown(){}}/**
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
 */class ry{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Rl=null;function Ih(){return Rl===null?Rl=function(){return 268435456+Math.round(2147483648*Math.random())}():Rl++,"0x"+Rl.toString(16)}/**
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
 */const BD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class $D{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const St="WebChannelConnection";class HD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const a=Ih(),l=this.xo(n,r.toUriEncodedString());re("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,s).then(h=>(re("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Ni("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}Lo(n,r,s,i,o,a){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=BD[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Ih();return new Promise((o,a)=>{const l=new qw;l.setWithCredentials(!0),l.listenOnce(Gw.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Wl.NO_ERROR:const h=l.getResponseJson();re(St,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Wl.TIMEOUT:re(St,`RPC '${e}' ${i} timed out`),a(new oe(H.DEADLINE_EXCEEDED,"Request time out"));break;case Wl.HTTP_ERROR:const f=l.getStatus();if(re(St,`RPC '${e}' ${i} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const _=function(S){const L=S.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(L)>=0?L:H.UNKNOWN}(g.status);a(new oe(_,g.message))}else a(new oe(H.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new oe(H.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{re(St,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);re(St,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=Ih(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Yw(),a=Qw(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new Kw({})),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");re(St,`Creating RPC '${e}' stream ${s}: ${h}`,l);const f=o.createWebChannel(h,l);let p=!1,g=!1;const _=new $D({Io:S=>{g?re(St,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(p||(re(St,`Opening RPC '${e}' stream ${s} transport.`),f.open(),p=!0),re(St,`RPC '${e}' stream ${s} sending:`,S),f.send(S))},To:()=>f.close()}),I=(S,L,k)=>{S.listen(L,R=>{try{k(R)}catch(O){setTimeout(()=>{throw O},0)}})};return I(f,Co.EventType.OPEN,()=>{g||(re(St,`RPC '${e}' stream ${s} transport opened.`),_.yo())}),I(f,Co.EventType.CLOSE,()=>{g||(g=!0,re(St,`RPC '${e}' stream ${s} transport closed`),_.So())}),I(f,Co.EventType.ERROR,S=>{g||(g=!0,Ni(St,`RPC '${e}' stream ${s} transport errored:`,S),_.So(new oe(H.UNAVAILABLE,"The operation could not be completed")))}),I(f,Co.EventType.MESSAGE,S=>{var L;if(!g){const k=S.data[0];We(!!k);const R=k,O=R.error||((L=R[0])===null||L===void 0?void 0:L.error);if(O){re(St,`RPC '${e}' stream ${s} received error:`,O);const x=O.status;let D=function(v){const w=it[v];if(w!==void 0)return E0(w)}(x),T=O.message;D===void 0&&(D=H.INTERNAL,T="Unknown error status: "+x+" with message "+O.message),g=!0,_.So(new oe(D,T)),f.close()}else re(St,`RPC '${e}' stream ${s} received:`,k),_.bo(k)}}),I(a,zw.STAT_EVENT,S=>{S.stat===Sf.PROXY?re(St,`RPC '${e}' stream ${s} detected buffering proxy`):S.stat===Sf.NOPROXY&&re(St,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.wo()},0),_}}function bh(){return typeof document<"u"?document:null}/**
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
 */function Iu(t){return new JO(t,!0)}/**
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
 */class O0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&re("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class D0{constructor(e,n,r,s,i,o,a,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new O0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(_r(n.toString()),_r("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new oe(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return re("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jD extends D0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=tD(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?Bn(o.readTime):ge.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Ff(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Df(l)?{documents:sD(i,l)}:{query:iD(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=I0(i,o.resumeToken);const u=xf(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=Ac(i,o.snapshotVersion.toTimestamp());const u=xf(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=aD(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Ff(this.serializer),n.removeTarget=e,this.a_(n)}}class WD extends D0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return We(!!e.streamToken),this.lastStreamToken=e.streamToken,We(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){We(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=rD(e.writeResults,e.commitTime),r=Bn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Ff(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>nD(this.serializer,r))};this.a_(n)}}/**
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
 */class qD extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new oe(H.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Lf(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe(H.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Lf(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new oe(H.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class KD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(_r(n),this.D_=!1):re("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class GD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ws(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=ye(l);u.L_.add(4),await Da(u),u.q_.set("Unknown"),u.L_.delete(4),await bu(u)}(this))})}),this.q_=new KD(r,s)}}async function bu(t){if(Ws(t))for(const e of t.B_)await e(!0)}async function Da(t){for(const e of t.B_)await e(!1)}function M0(t,e){const n=ye(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),_p(n)?gp(n):Xi(n).r_()&&mp(n,e))}function pp(t,e){const n=ye(t),r=Xi(n);n.N_.delete(e),r.r_()&&x0(n,e),n.N_.size===0&&(r.r_()?r.o_():Ws(n)&&n.q_.set("Unknown"))}function mp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Xi(t).A_(e)}function x0(t,e){t.Q_.xe(e),Xi(t).R_(e)}function gp(t){t.Q_=new zO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Xi(t).start(),t.q_.v_()}function _p(t){return Ws(t)&&!Xi(t).n_()&&t.N_.size>0}function Ws(t){return ye(t).L_.size===0}function L0(t){t.Q_=void 0}async function zD(t){t.q_.set("Online")}async function QD(t){t.N_.forEach((e,n)=>{mp(t,e)})}async function YD(t,e){L0(t),_p(t)?(t.q_.M_(e),gp(t)):t.q_.set("Unknown")}async function XD(t,e,n){if(t.q_.set("Online"),e instanceof w0&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(t,e)}catch(r){re("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cc(t,r)}else if(e instanceof Gl?t.Q_.Ke(e):e instanceof T0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ge.min()))try{const r=await N0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.N_.get(u);h&&i.N_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.N_.get(l);if(!h)return;i.N_.set(l,h.withResumeToken(bt.EMPTY_BYTE_STRING,h.snapshotVersion)),x0(i,l);const f=new Hr(h.target,l,u,h.sequenceNumber);mp(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){re("RemoteStore","Failed to raise snapshot:",r),await Cc(t,r)}}async function Cc(t,e,n){if(!ka(e))throw e;t.L_.add(1),await Da(t),t.q_.set("Offline"),n||(n=()=>N0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{re("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await bu(t)})}function V0(t,e){return e().catch(n=>Cc(t,n,e))}async function Ru(t){const e=ye(t),n=ts(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;JD(e);)try{const s=await xD(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,ZD(e,s)}catch(s){await Cc(e,s)}F0(e)&&U0(e)}function JD(t){return Ws(t)&&t.O_.length<10}function ZD(t,e){t.O_.push(e);const n=ts(t);n.r_()&&n.V_&&n.m_(e.mutations)}function F0(t){return Ws(t)&&!ts(t).n_()&&t.O_.length>0}function U0(t){ts(t).start()}async function eM(t){ts(t).p_()}async function tM(t){const e=ts(t);for(const n of t.O_)e.m_(n.mutations)}async function nM(t,e,n){const r=t.O_.shift(),s=lp.from(r,e,n);await V0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ru(t)}async function rM(t,e){e&&ts(t).V_&&await async function(r,s){if(function(o){return qO(o)&&o!==H.ABORTED}(s.code)){const i=r.O_.shift();ts(r).s_(),await V0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ru(r)}}(t,e),F0(t)&&U0(t)}async function sy(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");const r=Ws(n);n.L_.add(3),await Da(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await bu(n)}async function sM(t,e){const n=ye(t);e?(n.L_.delete(2),await bu(n)):e||(n.L_.add(2),await Da(n),n.q_.set("Unknown"))}function Xi(t){return t.K_||(t.K_=function(n,r,s){const i=ye(n);return i.w_(),new jD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:zD.bind(null,t),Ro:QD.bind(null,t),mo:YD.bind(null,t),d_:XD.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),_p(t)?gp(t):t.q_.set("Unknown")):(await t.K_.stop(),L0(t))})),t.K_}function ts(t){return t.U_||(t.U_=function(n,r,s){const i=ye(n);return i.w_(),new WD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:eM.bind(null,t),mo:rM.bind(null,t),f_:tM.bind(null,t),g_:nM.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Ru(t)):(await t.U_.stop(),t.O_.length>0&&(re("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class yp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new yp(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vp(t,e){if(_r("AsyncQueue",`${e}: ${t}`),ka(t))return new oe(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class vi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=So(),this.sortedSet=new ot(this.comparator)}static emptySet(e){return new vi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class iy{constructor(){this.W_=new ot(he.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):me():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Li{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Li(e,n,vi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_u(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class iM{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class oM{constructor(){this.queries=oy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ye(n),i=s.queries;s.queries=oy(),i.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new oe(H.ABORTED,"Firestore shutting down"))}}function oy(){return new Yi(t=>l0(t),_u)}async function Ep(t,e){const n=ye(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new iM,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=vp(o,`Initialization of query '${ii(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&wp(n)}async function Tp(t,e){const n=ye(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function aM(t,e){const n=ye(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(r=!0);o.z_=s}}r&&wp(n)}function lM(t,e,n){const r=ye(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function wp(t){t.Y_.forEach(e=>{e.next()})}var Bf,ay;(ay=Bf||(Bf={})).ea="default",ay.Cache="cache";class Ip{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Li(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Li.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Bf.Cache}}/**
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
 */class B0{constructor(e){this.key=e}}class $0{constructor(e){this.key=e}}class cM{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Te(),this.mutatedKeys=Te(),this.Aa=c0(e),this.Ra=new vi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new iy,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const p=s.get(h),g=yu(this.query,f)?f:null,_=!!p&&this.mutatedKeys.has(p.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let S=!1;p&&g?p.data.isEqual(g.data)?_!==I&&(r.track({type:3,doc:g}),S=!0):this.ga(p,g)||(r.track({type:2,doc:g}),S=!0,(l&&this.Aa(g,l)>0||u&&this.Aa(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),S=!0):p&&!g&&(r.track({type:1,doc:p}),S=!0,(l||u)&&(a=!0)),S&&(g?(o=o.add(g),i=I?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(g,_){const I=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return I(g)-I(_)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),s=s!=null&&s;const a=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new Li(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new iy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new $0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new B0(r))}),n}ba(e){this.Ta=e.Ts,this.da=Te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Li.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class uM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class hM{constructor(e){this.key=e,this.va=!1}}class fM{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Yi(a=>l0(a),_u),this.Ma=new Map,this.xa=new Set,this.Oa=new ot(he.comparator),this.Na=new Map,this.La=new hp,this.Ba={},this.ka=new Map,this.qa=xi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function dM(t,e,n=!0){const r=G0(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await H0(r,e,n,!0),s}async function pM(t,e){const n=G0(t);await H0(n,e,!0,!1)}async function H0(t,e,n,r){const s=await LD(t.localStore,Un(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await mM(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&M0(t.remoteStore,s),a}async function mM(t,e,n,r,s){t.Ka=(f,p,g)=>async function(I,S,L,k){let R=S.view.ma(L);R.ns&&(R=await ty(I.localStore,S.query,!1).then(({documents:T})=>S.view.ma(T,R)));const O=k&&k.targetChanges.get(S.targetId),x=k&&k.targetMismatches.get(S.targetId)!=null,D=S.view.applyChanges(R,I.isPrimaryClient,O,x);return cy(I,S.targetId,D.wa),D.snapshot}(t,f,p,g);const i=await ty(t.localStore,e,!0),o=new cM(e,i.Ts),a=o.ma(i.documents),l=Oa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);cy(t,n,u.wa);const h=new uM(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function gM(t,e,n){const r=ye(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!_u(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Uf(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&pp(r.remoteStore,s.targetId),$f(r,s.targetId)}).catch(Pa)):($f(r,s.targetId),await Uf(r.localStore,s.targetId,!0))}async function _M(t,e){const n=ye(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),pp(n.remoteStore,r.targetId))}async function yM(t,e,n){const r=RM(t);try{const s=await function(o,a){const l=ye(o),u=st.now(),h=a.reduce((g,_)=>g.add(_.key),Te());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let _=yr(),I=Te();return l.cs.getEntries(g,h).next(S=>{_=S,_.forEach((L,k)=>{k.isValidDocument()||(I=I.add(L))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,_)).next(S=>{f=S;const L=[];for(const k of a){const R=BO(k,f.get(k.key).overlayedDocument);R!=null&&L.push(new as(k.key,R,t0(R.value.mapValue),Jt.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,L,a)}).next(S=>{p=S;const L=S.applyToLocalDocumentSet(f,I);return l.documentOverlayCache.saveOverlays(g,S.batchId,L)})}).then(()=>({batchId:p.batchId,changes:h0(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new ot(De)),u=u.insert(a,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ma(r,s.changes),await Ru(r.remoteStore)}catch(s){const i=vp(s,"Failed to persist write");n.reject(i)}}async function j0(t,e){const n=ye(t);try{const r=await DD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(We(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?We(o.va):s.removedDocuments.size>0&&(We(o.va),o.va=!1))}),await Ma(n,r,e)}catch(r){await Pa(r)}}function ly(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ye(o);l.onlineState=a;let u=!1;l.queries.forEach((h,f)=>{for(const p of f.j_)p.Z_(a)&&(u=!0)}),u&&wp(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vM(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new ot(he.comparator);o=o.insert(i,kt.newNoDocument(i,ge.min()));const a=Te().add(i),l=new wu(ge.min(),new Map,new ot(De),o,a);await j0(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),bp(r)}else await Uf(r.localStore,e,!1).then(()=>$f(r,e,n)).catch(Pa)}async function EM(t,e){const n=ye(t),r=e.batch.batchId;try{const s=await OD(n.localStore,e);q0(n,r,null),W0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ma(n,s)}catch(s){await Pa(s)}}async function TM(t,e,n){const r=ye(t);try{const s=await function(o,a){const l=ye(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(We(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);q0(r,e,n),W0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ma(r,s)}catch(s){await Pa(s)}}function W0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function q0(t,e,n){const r=ye(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function $f(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||K0(t,r)})}function K0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(pp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),bp(t))}function cy(t,e,n){for(const r of n)r instanceof B0?(t.La.addReference(r.key,e),wM(t,r)):r instanceof $0?(re("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||K0(t,r.key)):me()}function wM(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(re("SyncEngine","New document in limbo: "+n),t.xa.add(r),bp(t))}function bp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new he(Je.fromString(e)),r=t.qa.next();t.Na.set(r,new hM(n)),t.Oa=t.Oa.insert(n,r),M0(t.remoteStore,new Hr(Un(gu(n.path)),r,"TargetPurposeLimboResolution",tp.oe))}}async function Ma(t,e,n){const r=ye(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){s.push(u);const f=dp.Wi(l.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const h=ye(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(u,p=>j.forEach(p.$i,g=>h.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>j.forEach(p.Ui,g=>h.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!ka(f))throw f;re("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const g=h.os.get(p),_=g.snapshotVersion,I=g.withLastLimboFreeSnapshotVersion(_);h.os=h.os.insert(p,I)}}}(r.localStore,i))}async function IM(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){re("SyncEngine","User change. New user:",e.toKey());const r=await k0(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(l=>{l.reject(new oe(H.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ma(n,r.hs)}}function bM(t,e){const n=ye(t),r=n.Na.get(e);if(r&&r.va)return Te().add(r.key);{let s=Te();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const a=n.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}function G0(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=j0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vM.bind(null,e),e.Ca.d_=aM.bind(null,e.eventManager),e.Ca.$a=lM.bind(null,e.eventManager),e}function RM(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TM.bind(null,e),e}class uy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Iu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return ND(this.persistence,new PD,e.initialUser,this.serializer)}createPersistence(e){return new AD(fp.Zr,this.serializer)}createSharedClientState(e){return new FD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class AM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ly(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=IM.bind(null,this.syncEngine),await sM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oM}()}createDatastore(e){const n=Iu(e.databaseInfo.databaseId),r=function(i){return new HD(i)}(e.databaseInfo);return function(i,o,a,l){return new qD(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new GD(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ly(this.syncEngine,n,0),function(){return ry.D()?new ry:new UD}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const f=new fM(s,i,o,a,l,u);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ye(s);re("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Da(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}/**
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
 */class Rp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ga(this.observer.next,e)}error(e){this.observer.error?this.Ga(this.observer.error,e):_r("Uncaught Error in snapshot listener:",e.toString())}za(){this.muted=!0}Ga(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class CM{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Pt.UNAUTHENTICATED,this.clientId=Jw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{re("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(re("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new oe(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Rh(t,e){t.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await k0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function hy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await PM(t);re("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>sy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>sy(e.remoteStore,s)),t._onlineComponents=e}function SM(t){return t.name==="FirebaseError"?t.code===H.FAILED_PRECONDITION||t.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function PM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){re("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!SM(n))throw n;Ni("Error using user provided cache. Falling back to memory cache: "+n),await Rh(t,new uy)}}else re("FirestoreClient","Using default OfflineComponentProvider"),await Rh(t,new uy);return t._offlineComponents}async function z0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(re("FirestoreClient","Using user provided OnlineComponentProvider"),await hy(t,t._uninitializedComponentsProvider._online)):(re("FirestoreClient","Using default OnlineComponentProvider"),await hy(t,new AM))),t._onlineComponents}function kM(t){return z0(t).then(e=>e.syncEngine)}async function Sc(t){const e=await z0(t),n=e.eventManager;return n.onListen=dM.bind(null,e.syncEngine),n.onUnlisten=gM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=pM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_M.bind(null,e.syncEngine),n}function NM(t,e,n={}){const r=new dr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new Rp({next:p=>{o.enqueueAndForget(()=>Tp(i,f));const g=p.docs.has(a);!g&&p.fromCache?u.reject(new oe(H.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&l&&l.source==="server"?u.reject(new oe(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new Ip(gu(a.path),h,{includeMetadataChanges:!0,_a:!0});return Ep(i,f)}(await Sc(t),t.asyncQueue,e,n,r)),r.promise}function OM(t,e,n={}){const r=new dr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new Rp({next:p=>{o.enqueueAndForget(()=>Tp(i,f)),p.fromCache&&l.source==="server"?u.reject(new oe(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new Ip(a,h,{includeMetadataChanges:!0,_a:!0});return Ep(i,f)}(await Sc(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Q0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const fy=new Map;/**
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
 */function Y0(t,e,n){if(!n)throw new oe(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DM(t,e,n,r){if(e===!0&&r===!0)throw new oe(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dy(t){if(!he.isDocumentKey(t))throw new oe(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function py(t){if(he.isDocumentKey(t))throw new oe(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ap(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function un(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ap(t);throw new oe(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class my{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new oe(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Q0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new oe(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Au{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new my({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new oe(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new oe(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new my(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new GN;switch(r.type){case"firstParty":return new XN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=fy.get(n);r&&(re("ComponentProvider","Removing Datastore"),fy.delete(n),r.terminate())}(this),Promise.resolve()}}function MM(t,e,n,r={}){var s;const i=(t=un(t,Au))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ni("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Pt.MOCK_USER;else{a=b1(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new oe(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Pt(u)}t._authCredentials=new zN(new Xw(a,l))}}/**
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
 */class xa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xa(this.firestore,e,this._query)}}class Zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zt(this.firestore,e,this._key)}}class Qr extends xa{constructor(e,n,r){super(e,n,gu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zt(this.firestore,null,new he(e))}withConverter(e){return new Qr(this.firestore,e,this._path)}}function hj(t,e,...n){if(t=_t(t),Y0("collection","path",e),t instanceof Au){const r=Je.fromString(e,...n);return py(r),new Qr(t,null,r)}{if(!(t instanceof Zt||t instanceof Qr))throw new oe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Je.fromString(e,...n));return py(r),new Qr(t.firestore,null,r)}}function xM(t,e,...n){if(t=_t(t),arguments.length===1&&(e=Jw.newId()),Y0("doc","path",e),t instanceof Au){const r=Je.fromString(e,...n);return dy(r),new Zt(t,null,new he(r))}{if(!(t instanceof Zt||t instanceof Qr))throw new oe(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Je.fromString(e,...n));return dy(r),new Zt(t.firestore,t instanceof Qr?t.converter:null,new he(r))}}/**
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
 */class LM{constructor(){this.au=Promise.resolve(),this.uu=[],this.cu=!1,this.lu=[],this.hu=null,this.Pu=!1,this.Iu=!1,this.Tu=[],this.t_=new O0(this,"async_queue_retry"),this.Eu=()=>{const n=bh();n&&re("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()};const e=bh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Eu)}get isShuttingDown(){return this.cu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.du(),this.Au(e)}enterRestrictedMode(e){if(!this.cu){this.cu=!0,this.Iu=e||!1;const n=bh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Eu)}}enqueue(e){if(this.du(),this.cu)return new Promise(()=>{});const n=new dr;return this.Au(()=>this.cu&&this.Iu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.uu.push(e),this.Ru()))}async Ru(){if(this.uu.length!==0){try{await this.uu[0](),this.uu.shift(),this.t_.reset()}catch(e){if(!ka(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.uu.length>0&&this.t_.Go(()=>this.Ru())}}Au(e){const n=this.au.then(()=>(this.Pu=!0,e().catch(r=>{this.hu=r,this.Pu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw _r("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Pu=!1,r))));return this.au=n,n}enqueueAfterDelay(e,n,r){this.du(),this.Tu.indexOf(e)>-1&&(n=0);const s=yp.createAndSchedule(this,e,n,r,i=>this.Vu(i));return this.lu.push(s),s}du(){this.hu&&me()}verifyOperationInProgress(){}async mu(){let e;do e=this.au,await e;while(e!==this.au)}fu(e){for(const n of this.lu)if(n.timerId===e)return!0;return!1}gu(e){return this.mu().then(()=>{this.lu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.lu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.mu()})}pu(e){this.Tu.push(e)}Vu(e){const n=this.lu.indexOf(e);this.lu.splice(n,1)}}function gy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class vr extends Au{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new LM}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||X0(this),this._firestoreClient.terminate()}}function VM(t,e){const n=typeof t=="object"?t:$w(),r=typeof t=="string"?t:"(default)",s=Uw(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=w1("firestore");i&&MM(s,...i)}return s}function La(t){return t._firestoreClient||X0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function X0(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new uO(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Q0(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new CM(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Vi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vi(bt.fromBase64String(e))}catch(n){throw new oe(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Vi(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Va{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Cu{constructor(e){this._methodName=e}}/**
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
 */class Fa{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
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
 */class Cp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const FM=/^__.*__$/;class UM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new as(e,this.data,this.fieldMask,n,this.fieldTransforms):new Na(e,this.data,n,this.fieldTransforms)}}class J0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new as(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Z0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class Sp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.yu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get wu(){return this.settings.wu}Su(e){return new Sp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.vu(e),s}Cu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Su({path:r,Du:!1});return s.yu(),s}Fu(e){return this.Su({path:void 0,Du:!0})}Mu(e){return Pc(e,this.settings.methodName,this.settings.xu||!1,this.path,this.settings.Ou)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}yu(){if(this.path)for(let e=0;e<this.path.length;e++)this.vu(this.path.get(e))}vu(e){if(e.length===0)throw this.Mu("Document fields must not be empty");if(Z0(this.wu)&&FM.test(e))throw this.Mu('Document fields cannot begin and end with "__"')}}class BM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Iu(e)}Nu(e,n,r,s=!1){return new Sp({wu:e,methodName:n,Ou:r,path:Tt.emptyPath(),Du:!1,xu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pp(t){const e=t._freezeSettings(),n=Iu(t._databaseId);return new BM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eI(t,e,n,r,s,i={}){const o=t.Nu(i.merge||i.mergeFields?2:0,e,n,s);Np("Data must be an object, but it was:",o,r);const a=rI(r,o);let l,u;if(i.merge)l=new ln(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const p=Hf(e,f,n);if(!o.contains(p))throw new oe(H.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);iI(h,p)||h.push(p)}l=new ln(h),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new UM(new zt(a),l,u)}class Su extends Cu{_toFieldTransform(e){if(e.wu!==2)throw e.wu===1?e.Mu(`${this._methodName}() can only appear at the top level of your update data`):e.Mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Su}}class kp extends Cu{_toFieldTransform(e){return new LO(e.path,new la)}isEqual(e){return e instanceof kp}}function tI(t,e,n,r){const s=t.Nu(1,e,n);Np("Data must be an object, but it was:",s,r);const i=[],o=zt.empty();js(r,(l,u)=>{const h=Op(e,l,n);u=_t(u);const f=s.Cu(h);if(u instanceof Su)i.push(h);else{const p=Pu(u,f);p!=null&&(i.push(h),o.set(h,p))}});const a=new ln(i);return new J0(o,a,s.fieldTransforms)}function nI(t,e,n,r,s,i){const o=t.Nu(1,e,n),a=[Hf(e,r,n)],l=[s];if(i.length%2!=0)throw new oe(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Hf(e,i[p])),l.push(i[p+1]);const u=[],h=zt.empty();for(let p=a.length-1;p>=0;--p)if(!iI(u,a[p])){const g=a[p];let _=l[p];_=_t(_);const I=o.Cu(g);if(_ instanceof Su)u.push(g);else{const S=Pu(_,I);S!=null&&(u.push(g),h.set(g,S))}}const f=new ln(u);return new J0(h,f,o.fieldTransforms)}function Pu(t,e){if(sI(t=_t(t)))return Np("Unsupported field value:",e,t),rI(t,e);if(t instanceof Cu)return function(r,s){if(!Z0(s.wu))throw s.Mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Du&&e.wu!==4)throw e.Mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Pu(a,s.Fu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=_t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return DO(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=st.fromDate(r);return{timestampValue:Ac(s.serializer,i)}}if(r instanceof st){const i=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ac(s.serializer,i)}}if(r instanceof Fa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vi)return{bytesValue:I0(s.serializer,r._byteString)};if(r instanceof Zt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:up(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Cp)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Mu("VectorValues must only contain numeric values.");return ap(a.serializer,l)})}}}}}}(r,s);throw s.Mu(`Unsupported field value: ${Ap(r)}`)}(t,e)}function rI(t,e){const n={};return Zw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):js(t,(r,s)=>{const i=Pu(s,e.bu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function sI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof Fa||t instanceof Vi||t instanceof Zt||t instanceof Cu||t instanceof Cp)}function Np(t,e,n){if(!sI(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ap(n);throw r==="an object"?e.Mu(t+" a custom object"):e.Mu(t+" "+r)}}function Hf(t,e,n){if((e=_t(e))instanceof Va)return e._internalPath;if(typeof e=="string")return Op(t,e);throw Pc("Field path arguments must be of type string or ",t,!1,void 0,n)}const $M=new RegExp("[~\\*/\\[\\]]");function Op(t,e,n){if(e.search($M)>=0)throw Pc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Va(...e.split("."))._internalPath}catch{throw Pc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new oe(H.INVALID_ARGUMENT,a+t+l)}function iI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class oI{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(aI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HM extends oI{data(){return super.data()}}function aI(t,e){return typeof e=="string"?Op(t,e):e instanceof Va?e._internalPath:e._delegate._internalPath}/**
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
 */function lI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new oe(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class jM{convertValue(e,n="none"){switch(Ms(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return js(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>rt(o.doubleValue));return new Cp(i)}convertGeoPoint(e){return new Fa(rt(e.latitude),rt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=rp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ia(e));default:return null}}convertTimestamp(e){const n=es(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Je.fromString(e);We(P0(r));const s=new oa(r.get(1),r.get(3)),i=new he(r.popFirst(5));return s.isEqual(n)||_r(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function cI(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ko{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uI extends oI{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(aI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class zl extends uI{data(e={}){return super.data(e)}}class hI{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ko(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new zl(this._firestore,this._userDataWriter,r.key,r,new ko(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new oe(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new zl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ko(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new zl(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ko(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:WM(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}/**
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
 */function fI(t){t=un(t,Zt);const e=un(t.firestore,vr);return NM(La(e),t._key).then(n=>dI(e,t,n))}class Dp extends jM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Zt(this.firestore,null,n)}}function qM(t){t=un(t,xa);const e=un(t.firestore,vr),n=La(e),r=new Dp(e);return lI(t._query),OM(n,t._query).then(s=>new hI(e,r,t,s))}function fj(t,e,n,...r){t=un(t,Zt);const s=un(t.firestore,vr),i=Pp(s);let o;return o=typeof(e=_t(e))=="string"||e instanceof Va?nI(i,"updateDoc",t._key,e,n,r):tI(i,"updateDoc",t._key,e),ku(s,[o.toMutation(t._key,Jt.exists(!0))])}function dj(t){return ku(un(t.firestore,vr),[new Tu(t._key,Jt.none())])}function pj(t,e){const n=un(t.firestore,vr),r=xM(t),s=cI(t.converter,e);return ku(n,[eI(Pp(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Jt.exists(!1))]).then(()=>r)}function Mp(t,...e){var n,r,s;t=_t(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||gy(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(gy(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(s=f.complete)===null||s===void 0?void 0:s.bind(f)}let l,u,h;if(t instanceof Zt)u=un(t.firestore,vr),h=gu(t._key.path),l={next:f=>{e[o]&&e[o](dI(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=un(t,xa);u=un(f.firestore,vr),h=f._query;const p=new Dp(u);l={next:g=>{e[o]&&e[o](new hI(u,p,f,g))},error:e[o+1],complete:e[o+2]},lI(t._query)}return function(p,g,_,I){const S=new Rp(I),L=new Ip(g,S,_);return p.asyncQueue.enqueueAndForget(async()=>Ep(await Sc(p),L)),()=>{S.za(),p.asyncQueue.enqueueAndForget(async()=>Tp(await Sc(p),L))}}(La(u),h,a,l)}function ku(t,e){return function(r,s){const i=new dr;return r.asyncQueue.enqueueAndForget(async()=>yM(await kM(r),s,i)),i.promise}(La(t),e)}function dI(t,e,n){const r=n.docs.get(e._key),s=new Dp(t);return new uI(t,s,e._key,r,new ko(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class KM{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Pp(e)}set(e,n,r){this._verifyNotCommitted();const s=Ah(e,this._firestore),i=cI(s.converter,n,r),o=eI(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Jt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Ah(e,this._firestore);let o;return o=typeof(n=_t(n))=="string"||n instanceof Va?nI(this._dataReader,"WriteBatch.update",i._key,n,r,s):tI(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Jt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ah(e,this._firestore);return this._mutations=this._mutations.concat(new Tu(n._key,Jt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new oe(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ah(t,e){if((t=_t(t)).firestore!==e)throw new oe(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function mj(){return new kp("serverTimestamp")}/**
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
 */function gj(t){return La(t=un(t,vr)),new KM(t,e=>ku(t,e))}(function(e,n=!0){(function(s){Qi=s})(os),Hn(new Nn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new vr(new QN(r.getProvider("auth-internal")),new ZN(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new oe(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oa(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),cn(M_,"4.7.1",e),cn(M_,"4.7.1","esm2017")})();const GM=ik(()=>{jl("FirebaseTimestamp",t=>tc(new st(t.seconds,t.nanoseconds))),jl("FirebaseGeoPoint",t=>tc(new Fa(t.latitude,t.longitude))),jl("DocumentData",t=>{const e=typeof t=="string"?JSON.parse(t):t,n=e.id;return delete e.id,Object.defineProperty(e,"id",{value:n})})}),_y={NuxtError:t=>cu(t),EmptyShallowRef:t=>Ht(t==="_"?void 0:t==="0n"?BigInt(0):hc(t)),EmptyRef:t=>Qe(t==="_"?void 0:t==="0n"?BigInt(0):hc(t)),ShallowRef:t=>Ht(t),ShallowReactive:t=>ir(t),Ref:t=>Qe(t),Reactive:t=>Dt(t)},zM=Wt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const r in _y)jl(r,_y[r]);Object.assign(t.payload,([e,n]=Pi(()=>t.runWithContext(f1)),e=await e,n(),e)),window.__NUXT__=t.payload}}),QM=[],YM=Wt({name:"nuxt:head",enforce:"pre",setup(t){const e=a1({plugins:QM});l1(()=>tt().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await ww(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const li=typeof document<"u";function XM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ve=Object.assign;function Ch(t,e){const n={};for(const r in e){const s=e[r];n[r]=On(s)?s.map(t):t(s)}return n}const Ho=()=>{},On=Array.isArray,pI=/#/g,JM=/&/g,ZM=/\//g,ex=/=/g,tx=/\?/g,mI=/\+/g,nx=/%5B/g,rx=/%5D/g,gI=/%5E/g,sx=/%60/g,_I=/%7B/g,ix=/%7C/g,yI=/%7D/g,ox=/%20/g;function xp(t){return encodeURI(""+t).replace(ix,"|").replace(nx,"[").replace(rx,"]")}function ax(t){return xp(t).replace(_I,"{").replace(yI,"}").replace(gI,"^")}function jf(t){return xp(t).replace(mI,"%2B").replace(ox,"+").replace(pI,"%23").replace(JM,"%26").replace(sx,"`").replace(_I,"{").replace(yI,"}").replace(gI,"^")}function lx(t){return jf(t).replace(ex,"%3D")}function cx(t){return xp(t).replace(pI,"%23").replace(tx,"%3F")}function ux(t){return t==null?"":cx(t).replace(ZM,"%2F")}function ha(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const hx=/\/$/,fx=t=>t.replace(hx,"");function Sh(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=gx(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ha(o)}}function dx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function yy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function px(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Fi(e.matched[r],n.matched[s])&&vI(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Fi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vI(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!mx(t[n],e[n]))return!1;return!0}function mx(t,e){return On(t)?vy(t,e):On(e)?vy(e,t):t===e}function vy(t,e){return On(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function gx(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const wn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var fa;(function(t){t.pop="pop",t.push="push"})(fa||(fa={}));var jo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(jo||(jo={}));function _x(t){if(!t)if(li){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),fx(t)}const yx=/^[^#]+#/;function vx(t,e){return t.replace(yx,"#")+e}function Ex(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Nu=()=>({left:window.scrollX,top:window.scrollY});function Tx(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Ex(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ey(t,e){return(history.state?history.state.position-e:-1)+t}const Wf=new Map;function wx(t,e){Wf.set(t,e)}function Ix(t){const e=Wf.get(t);return Wf.delete(t),e}let bx=()=>location.protocol+"//"+location.host;function EI(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),yy(l,"")}return yy(n,t)+r+s}function Rx(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=EI(t,location),_=n.value,I=e.value;let S=0;if(p){if(n.value=g,e.value=p,o&&o===_){o=null;return}S=I?p.position-I.position:0}else r(g);s.forEach(L=>{L(n.value,_,{delta:S,type:fa.pop,direction:S?S>0?jo.forward:jo.back:jo.unknown})})};function l(){o=n.value}function u(p){s.push(p);const g=()=>{const _=s.indexOf(p);_>-1&&s.splice(_,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(Ve({},p.state,{scroll:Nu()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function Ty(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Nu():null}}function Ax(t){const{history:e,location:n}=window,r={value:EI(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:bx()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(l,u){const h=Ve({},e.state,Ty(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,h,!0),r.value=l}function a(l,u){const h=Ve({},s.value,e.state,{forward:l,scroll:Nu()});i(h.current,h,!0);const f=Ve({},Ty(r.value,l,null),{position:h.position+1},u);i(l,f,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function TI(t){t=_x(t);const e=Ax(t),n=Rx(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ve({location:"",base:t,go:r,createHref:vx.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Cx(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),TI(t)}function Sx(t){return typeof t=="string"||t&&typeof t=="object"}function wI(t){return typeof t=="string"||typeof t=="symbol"}const II=Symbol("");var wy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(wy||(wy={}));function Ui(t,e){return Ve(new Error,{type:t,[II]:!0},e)}function Zn(t,e){return t instanceof Error&&II in t&&(e==null||!!(t.type&e))}const Iy="[^/]+?",Px={sensitive:!1,strict:!1,start:!0,end:!0},kx=/[.+*?^${}()[\]/\\]/g;function Nx(t,e){const n=Ve({},Px,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const p=u[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(kx,"\\$&"),g+=40;else if(p.type===1){const{value:_,repeatable:I,optional:S,regexp:L}=p;i.push({name:_,repeatable:I,optional:S});const k=L||Iy;if(k!==Iy){g+=10;try{new RegExp(`(${k})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${_}" (${k}): `+O.message)}}let R=I?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(R=S&&u.length<2?`(?:/${R})`:"/"+R),S&&(R+="?"),s+=R,g+=20,S&&(g+=-8),I&&(g+=-20),k===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",_=i[p-1];f[_.name]=g&&_.repeatable?g.split("/"):g}return f}function l(u){let h="",f=!1;for(const p of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:_,repeatable:I,optional:S}=g,L=_ in u?u[_]:"";if(On(L)&&!I)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const k=On(L)?L.join("/"):L;if(!k)if(S)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);h+=k}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function Ox(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function bI(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Ox(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(by(r))return 1;if(by(s))return-1}return s.length-r.length}function by(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Dx={type:0,value:""},Mx=/[a-zA-Z0-9_]/;function xx(t){if(!t)return[[]];if(t==="/")return[[Dx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:Mx.test(l)?p():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function Lx(t,e,n){const r=Nx(xx(t.path),n),s=Ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Vx(t,e){const n=[],r=new Map;e=Cy({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,g){const _=!g,I=Fx(f);I.aliasOf=g&&g.record;const S=Cy(e,f),L=[I];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const x of O)L.push(Ve({},I,{components:g?g.record.components:I.components,path:x,aliasOf:g?g.record:I}))}let k,R;for(const O of L){const{path:x}=O;if(p&&x[0]!=="/"){const D=p.record.path,T=D[D.length-1]==="/"?"":"/";O.path=p.record.path+(x&&T+x)}if(k=Lx(O,p,S),g?g.alias.push(k):(R=R||k,R!==k&&R.alias.push(k),_&&f.name&&!Ay(k)&&o(f.name)),RI(k)&&l(k),I.children){const D=I.children;for(let T=0;T<D.length;T++)i(D[T],k,g&&g.children[T])}g=g||k}return R?()=>{o(R)}:Ho}function o(f){if(wI(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const p=$x(f,n);n.splice(p,0,f),f.record.name&&!Ay(f)&&r.set(f.record.name,f)}function u(f,p){let g,_={},I,S;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw Ui(1,{location:f});S=g.record.name,_=Ve(Ry(p.params,g.keys.filter(R=>!R.optional).concat(g.parent?g.parent.keys.filter(R=>R.optional):[]).map(R=>R.name)),f.params&&Ry(f.params,g.keys.map(R=>R.name))),I=g.stringify(_)}else if(f.path!=null)I=f.path,g=n.find(R=>R.re.test(I)),g&&(_=g.parse(I),S=g.record.name);else{if(g=p.name?r.get(p.name):n.find(R=>R.re.test(p.path)),!g)throw Ui(1,{location:f,currentLocation:p});S=g.record.name,_=Ve({},p.params,f.params),I=g.stringify(_)}const L=[];let k=g;for(;k;)L.unshift(k.record),k=k.parent;return{name:S,path:I,params:_,matched:L,meta:Bx(L)}}t.forEach(f=>i(f));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function Ry(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Fx(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ux(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ux(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ay(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Bx(t){return t.reduce((e,n)=>Ve(e,n.meta),{})}function Cy(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function $x(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;bI(t,e[i])<0?r=i:n=i+1}const s=Hx(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Hx(t){let e=t;for(;e=e.parent;)if(RI(e)&&bI(t,e)===0)return e}function RI({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function jx(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(mI," "),o=i.indexOf("="),a=ha(o<0?i:i.slice(0,o)),l=o<0?null:ha(i.slice(o+1));if(a in e){let u=e[a];On(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Sy(t){let e="";for(let n in t){const r=t[n];if(n=lx(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(On(r)?r.map(i=>i&&jf(i)):[r&&jf(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Wx(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=On(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const qx=Symbol(""),Py=Symbol(""),Lp=Symbol(""),Vp=Symbol(""),qf=Symbol("");function Eo(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function xr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Ui(4,{from:n,to:e})):p instanceof Error?l(p):Sx(p)?l(Ui(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(p=>l(p))})}function Ph(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Kx(l)){const h=(l.__vccOpts||l)[e];h&&i.push(xr(h,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=XM(h)?h.default:h;o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&xr(g,n,r,o,a,s)()}))}}return i}function Kx(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ky(t){const e=Fe(Lp),n=Fe(Vp),r=pe(()=>{const l=Oe(t.to);return e.resolve(l)}),s=pe(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],f=n.matched;if(!h||!f.length)return-1;const p=f.findIndex(Fi.bind(null,h));if(p>-1)return p;const g=Ny(l[u-2]);return u>1&&Ny(h)===g&&f[f.length-1].path!==g?f.findIndex(Fi.bind(null,l[u-2])):p}),i=pe(()=>s.value>-1&&Yx(n.params,r.value.params)),o=pe(()=>s.value>-1&&s.value===n.matched.length-1&&vI(n.params,r.value.params));function a(l={}){return Qx(l)?e[Oe(t.replace)?"replace":"push"](Oe(t.to)).catch(Ho):Promise.resolve()}return{route:r,href:pe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Gx=Gn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ky,setup(t,{slots:e}){const n=Dt(ky(t)),{options:r}=Fe(Lp),s=pe(()=>({[Oy(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Oy(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:$t("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),zx=Gx;function Qx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Yx(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!On(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ny(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Oy=(t,e,n)=>t??e??n,Xx=Gn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Fe(qf),s=pe(()=>t.route||r.value),i=Fe(Py,0),o=pe(()=>{let u=Oe(i);const{matched:h}=s.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=pe(()=>s.value.matched[o.value]);vn(Py,pe(()=>o.value+1)),vn(qx,a),vn(qf,s);const l=Qe();return jt(()=>[l.value,a.value,t.name],([u,h,f],[p,g,_])=>{h&&(h.instances[f]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!Fi(h,g)||!p)&&(h.enterCallbacks[f]||[]).forEach(I=>I(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,f=a.value,p=f&&f.components[h];if(!p)return Dy(n.default,{Component:p,route:u});const g=f.props[h],_=g?g===!0?u.params:typeof g=="function"?g(u):g:null,S=$t(p,Ve({},_,e,{onVnodeUnmounted:L=>{L.component.isUnmounted&&(f.instances[h]=null)},ref:l}));return Dy(n.default,{Component:S,route:u})||S}}});function Dy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const AI=Xx;function Jx(t){const e=Vx(t.routes,t),n=t.parseQuery||jx,r=t.stringifyQuery||Sy,s=t.history,i=Eo(),o=Eo(),a=Eo(),l=Ht(wn);let u=wn;li&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Ch.bind(null,U=>""+U),f=Ch.bind(null,ux),p=Ch.bind(null,ha);function g(U,Q){let Y,te;return wI(U)?(Y=e.getRecordMatcher(U),te=Q):te=U,e.addRoute(te,Y)}function _(U){const Q=e.getRecordMatcher(U);Q&&e.removeRoute(Q)}function I(){return e.getRoutes().map(U=>U.record)}function S(U){return!!e.getRecordMatcher(U)}function L(U,Q){if(Q=Ve({},Q||l.value),typeof U=="string"){const N=Sh(n,U,Q.path),V=e.resolve({path:N.path},Q),$=s.createHref(N.fullPath);return Ve(N,V,{params:p(V.params),hash:ha(N.hash),redirectedFrom:void 0,href:$})}let Y;if(U.path!=null)Y=Ve({},U,{path:Sh(n,U.path,Q.path).path});else{const N=Ve({},U.params);for(const V in N)N[V]==null&&delete N[V];Y=Ve({},U,{params:f(N)}),Q.params=f(Q.params)}const te=e.resolve(Y,Q),we=U.hash||"";te.params=h(p(te.params));const Ue=dx(r,Ve({},U,{hash:ax(we),path:te.path})),A=s.createHref(Ue);return Ve({fullPath:Ue,hash:we,query:r===Sy?Wx(U.query):U.query||{}},te,{redirectedFrom:void 0,href:A})}function k(U){return typeof U=="string"?Sh(n,U,l.value.path):Ve({},U)}function R(U,Q){if(u!==U)return Ui(8,{from:Q,to:U})}function O(U){return T(U)}function x(U){return O(Ve(k(U),{replace:!0}))}function D(U){const Q=U.matched[U.matched.length-1];if(Q&&Q.redirect){const{redirect:Y}=Q;let te=typeof Y=="function"?Y(U):Y;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=k(te):{path:te},te.params={}),Ve({query:U.query,hash:U.hash,params:te.path!=null?{}:U.params},te)}}function T(U,Q){const Y=u=L(U),te=l.value,we=U.state,Ue=U.force,A=U.replace===!0,N=D(Y);if(N)return T(Ve(k(N),{state:typeof N=="object"?Ve({},we,N.state):we,force:Ue,replace:A}),Q||Y);const V=Y;V.redirectedFrom=Q;let $;return!Ue&&px(r,te,Y)&&($=Ui(16,{to:V,from:te}),qt(te,te,!0,!1)),($?Promise.resolve($):w(V,te)).catch(B=>Zn(B)?Zn(B,2)?B:tn(B):ne(B,V,te)).then(B=>{if(B){if(Zn(B,2))return T(Ve({replace:A},k(B.to),{state:typeof B.to=="object"?Ve({},we,B.to.state):we,force:Ue}),Q||V)}else B=C(V,te,!0,A,we);return P(V,te,B),B})}function y(U,Q){const Y=R(U,Q);return Y?Promise.reject(Y):Promise.resolve()}function v(U){const Q=Mn.values().next().value;return Q&&typeof Q.runWithContext=="function"?Q.runWithContext(U):U()}function w(U,Q){let Y;const[te,we,Ue]=Zx(U,Q);Y=Ph(te.reverse(),"beforeRouteLeave",U,Q);for(const N of te)N.leaveGuards.forEach(V=>{Y.push(xr(V,U,Q))});const A=y.bind(null,U,Q);return Y.push(A),Rt(Y).then(()=>{Y=[];for(const N of i.list())Y.push(xr(N,U,Q));return Y.push(A),Rt(Y)}).then(()=>{Y=Ph(we,"beforeRouteUpdate",U,Q);for(const N of we)N.updateGuards.forEach(V=>{Y.push(xr(V,U,Q))});return Y.push(A),Rt(Y)}).then(()=>{Y=[];for(const N of Ue)if(N.beforeEnter)if(On(N.beforeEnter))for(const V of N.beforeEnter)Y.push(xr(V,U,Q));else Y.push(xr(N.beforeEnter,U,Q));return Y.push(A),Rt(Y)}).then(()=>(U.matched.forEach(N=>N.enterCallbacks={}),Y=Ph(Ue,"beforeRouteEnter",U,Q,v),Y.push(A),Rt(Y))).then(()=>{Y=[];for(const N of o.list())Y.push(xr(N,U,Q));return Y.push(A),Rt(Y)}).catch(N=>Zn(N,8)?N:Promise.reject(N))}function P(U,Q,Y){a.list().forEach(te=>v(()=>te(U,Q,Y)))}function C(U,Q,Y,te,we){const Ue=R(U,Q);if(Ue)return Ue;const A=Q===wn,N=li?history.state:{};Y&&(te||A?s.replace(U.fullPath,Ve({scroll:A&&N&&N.scroll},we)):s.push(U.fullPath,we)),l.value=U,qt(U,Q,Y,A),tn()}let b;function fe(){b||(b=s.listen((U,Q,Y)=>{if(!Kt.listening)return;const te=L(U),we=D(te);if(we){T(Ve(we,{replace:!0}),te).catch(Ho);return}u=te;const Ue=l.value;li&&wx(Ey(Ue.fullPath,Y.delta),Nu()),w(te,Ue).catch(A=>Zn(A,12)?A:Zn(A,2)?(T(A.to,te).then(N=>{Zn(N,20)&&!Y.delta&&Y.type===fa.pop&&s.go(-1,!1)}).catch(Ho),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),ne(A,te,Ue))).then(A=>{A=A||C(te,Ue,!1),A&&(Y.delta&&!Zn(A,8)?s.go(-Y.delta,!1):Y.type===fa.pop&&Zn(A,20)&&s.go(-1,!1)),P(te,Ue,A)}).catch(Ho)}))}let ve=Eo(),ee=Eo(),ce;function ne(U,Q,Y){tn(U);const te=ee.list();return te.length?te.forEach(we=>we(U,Q,Y)):console.error(U),Promise.reject(U)}function $e(){return ce&&l.value!==wn?Promise.resolve():new Promise((U,Q)=>{ve.add([U,Q])})}function tn(U){return ce||(ce=!U,fe(),ve.list().forEach(([Q,Y])=>U?Y(U):Q()),ve.reset()),U}function qt(U,Q,Y,te){const{scrollBehavior:we}=t;if(!li||!we)return Promise.resolve();const Ue=!Y&&Ix(Ey(U.fullPath,0))||(te||!Y)&&history.state&&history.state.scroll||null;return $s().then(()=>we(U,Q,Ue)).then(A=>A&&Tx(A)).catch(A=>ne(A,U,Q))}const Le=U=>s.go(U);let He;const Mn=new Set,Kt={currentRoute:l,listening:!0,addRoute:g,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:I,resolve:L,options:t,push:O,replace:x,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ee.add,isReady:$e,install(U){const Q=this;U.component("RouterLink",zx),U.component("RouterView",AI),U.config.globalProperties.$router=Q,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Oe(l)}),li&&!He&&l.value===wn&&(He=!0,O(s.location).catch(we=>{}));const Y={};for(const we in wn)Object.defineProperty(Y,we,{get:()=>l.value[we],enumerable:!0});U.provide(Lp,Q),U.provide(Vp,ir(Y)),U.provide(qf,l);const te=U.unmount;Mn.add(U),U.unmount=function(){Mn.delete(U),Mn.size<1&&(u=wn,b&&b(),b=null,l.value=wn,He=!1,ce=!1),te()}}};function Rt(U){return U.reduce((Q,Y)=>Q.then(()=>v(Y)),Promise.resolve())}return Kt}function Zx(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Fi(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>Fi(u,l))||s.push(l))}return[n,r,s]}function eL(t){return Fe(Vp)}const tL=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),Kf=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&tL(t.route,n));return typeof r=="function"?r(t.route):r},nL=(t,e)=>({default:()=>t?$t(hC,t===!0?{}:t,e):e});function Fp(t){return Array.isArray(t)?t:[t]}const rL="modulepreload",sL=function(t,e){return new URL(t,e).href},My={},iL=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(l=>{if(l=sL(l,r),l in My)return;My[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!r)for(let g=i.length-1;g>=0;g--){const _=i[g];if(_.href===l&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":rL,u||(p.as="script",p.crossOrigin=""),p.href=l,a&&p.setAttribute("nonce",a),document.head.appendChild(p),u)return new Promise((g,_)=>{p.addEventListener("load",g),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Vr=(...t)=>iL(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),xy=[{name:"cart",path:"/cart",component:()=>Vr(()=>import("./B6gWpCbv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url).then(t=>t.default||t)},{name:"favourite",path:"/favourite",component:()=>Vr(()=>import("./DBExdI6V.js"),__vite__mapDeps([9,10]),import.meta.url).then(t=>t.default||t)},{name:"history",path:"/history",component:()=>Vr(()=>import("./1iZ11YLW.js"),__vite__mapDeps([11,1,2,3,4,5,6,7]),import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",component:()=>Vr(()=>import("./BwOD70gi.js"),__vite__mapDeps([12,2,3,4,5,6,7,8,13,14]),import.meta.url).then(t=>t.default||t)},{name:"login",path:"/login",component:()=>Vr(()=>import("./CBC9_Njm.js"),__vite__mapDeps([15,2,3,4,5,16,17,18]),import.meta.url).then(t=>t.default||t)}],CI=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?$t(t,e,n):(r=n.default)==null?void 0:r.call(n)}});function Ly(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function oL(t,e){return t===e||e===wn?!1:Ly(t)!==Ly(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const aL={scrollBehavior(t,e,n){var u;const r=tt(),s=((u=fn().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&oL(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Vy(t.hash),behavior:s}:!1;const a=h=>!!(h.meta.pageTransition??df),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(l,async()=>{await new Promise(f=>setTimeout(f,0)),t.hash&&(i={el:t.hash,top:Vy(t.hash),behavior:s}),h(i)})})}};function Vy(t){try{const e=document.querySelector(t);if(e)return Number.parseFloat(getComputedStyle(e).scrollMarginTop)+Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)}catch{}return 0}const lL={hashMode:!1,scrollBehaviorType:"auto"},sn={...lL,...aL},cL=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=tt(),s=fn();if(([e,n]=Pi(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=cu({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>ci(o)),window.history.pushState({},"",t.fullPath)});return!1}})};function Up(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function SI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PI=SI,kI=new Gi("auth","Firebase",SI());/**
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
 */const kc=new Sa("@firebase/auth");function uL(t,...e){kc.logLevel<=Ee.WARN&&kc.warn(`Auth (${os}): ${t}`,...e)}function Ql(t,...e){kc.logLevel<=Ee.ERROR&&kc.error(`Auth (${os}): ${t}`,...e)}/**
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
 */function qn(t,...e){throw $p(t,...e)}function Sn(t,...e){return $p(t,...e)}function Bp(t,e,n){const r=Object.assign(Object.assign({},PI()),{[e]:n});return new Gi("auth","Firebase",r).create(e,{appName:t.name})}function Ps(t){return Bp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function hL(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&qn(t,"argument-error"),Bp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $p(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return kI.create(t,...e)}function _e(t,e,...n){if(!t)throw $p(e,...n)}function ar(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ql(e),new Error(e)}function Er(t,e){t||ar(e)}/**
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
 */function Gf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fL(){return Fy()==="http:"||Fy()==="https:"}function Fy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function dL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fL()||A1()||"connection"in navigator)?navigator.onLine:!0}function pL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ua{constructor(e,n){this.shortDelay=e,this.longDelay=n,Er(n>e,"Short delay should be less than long delay!"),this.isMobile=Jd()||Dw()}get(){return dL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hp(t,e){Er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class NI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ar("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ar("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ar("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gL=new Ua(3e4,6e4);function jp(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ji(t,e,n,r,s={}){return OI(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=zi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),NI.fetch()(DI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function OI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mL),e);try{const s=new yL(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Al(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Al(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Al(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Al(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Bp(t,h,u);qn(t,h)}}catch(s){if(s instanceof zn)throw s;qn(t,"network-request-failed",{message:String(s)})}}async function _L(t,e,n,r,s={}){const i=await Ji(t,e,n,r,s);return"mfaPendingCredential"in i&&qn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function DI(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Hp(t.config,s):`${t.config.apiScheme}://${s}`}class yL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),gL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Al(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Sn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function vL(t,e){return Ji(t,"POST","/v1/accounts:delete",e)}async function MI(t,e){return Ji(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function EL(t,e=!1){const n=_t(t),r=await n.getIdToken(e),s=Wp(r);_e(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Wo(kh(s.auth_time)),issuedAtTime:Wo(kh(s.iat)),expirationTime:Wo(kh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function kh(t){return Number(t)*1e3}function Wp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ql("JWT malformed, contained fewer than 3 sections"),null;try{const s=yc(n);return s?JSON.parse(s):(Ql("Failed to decode base64 JWT payload"),null)}catch(s){return Ql("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Uy(t){const e=Wp(t);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function da(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zn&&TL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function TL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class wL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wo(this.lastLoginAt),this.creationTime=Wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await da(t,MI(n,{idToken:r}));_e(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?xI(i.providerUserInfo):[],a=bL(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new zf(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function IL(t){const e=_t(t);await Nc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bL(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function xI(t){return t.map(e=>{var{providerId:n}=e,r=Up(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function RL(t,e){const n=await OI(t,{},async()=>{const r=zi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=DI(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",NI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function AL(t,e){return Ji(t,"POST","/v2/accounts:revokeToken",jp(t,e))}/**
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
 */class Ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const n=Uy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await RL(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ei;return r&&(_e(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(_e(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(_e(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ei,this.toJSON())}_performRefresh(){return ar("not implemented")}}/**
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
 */function Pr(t,e){_e(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class lr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Up(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await da(this,this.stsTokenManager.getToken(this.auth,e));return _e(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return EL(this,e)}reload(){return IL(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(or(this.auth.app))return Promise.reject(Ps(this.auth));const e=await this.getIdToken();return await da(this,vL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,L=(u=n.createdAt)!==null&&u!==void 0?u:void 0,k=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:R,emailVerified:O,isAnonymous:x,providerData:D,stsTokenManager:T}=n;_e(R&&T,e,"internal-error");const y=Ei.fromJSON(this.name,T);_e(typeof R=="string",e,"internal-error"),Pr(f,e.name),Pr(p,e.name),_e(typeof O=="boolean",e,"internal-error"),_e(typeof x=="boolean",e,"internal-error"),Pr(g,e.name),Pr(_,e.name),Pr(I,e.name),Pr(S,e.name),Pr(L,e.name),Pr(k,e.name);const v=new lr({uid:R,auth:e,email:p,emailVerified:O,displayName:f,isAnonymous:x,photoURL:_,phoneNumber:g,tenantId:I,stsTokenManager:y,createdAt:L,lastLoginAt:k});return D&&Array.isArray(D)&&(v.providerData=D.map(w=>Object.assign({},w))),S&&(v._redirectEventId=S),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ei;s.updateFromServerResponse(n);const i=new lr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Nc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];_e(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?xI(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Ei;a.updateFromIdToken(r);const l=new lr({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const By=new Map;function cr(t){Er(t instanceof Function,"Expected a class definition");let e=By.get(t);return e?(Er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,By.set(t,e),e)}/**
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
 */class LI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}LI.type="NONE";const $y=LI;/**
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
 */function Yl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Yl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Yl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ti(cr($y),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||cr($y);const o=Yl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=lr._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ti(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ti(i,e,r))}}/**
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
 */function Hy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(HI(e))return"Blackberry";if(jI(e))return"Webos";if(FI(e))return"Safari";if((e.includes("chrome/")||UI(e))&&!e.includes("edge/"))return"Chrome";if($I(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function VI(t=Vt()){return/firefox\//i.test(t)}function FI(t=Vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function UI(t=Vt()){return/crios\//i.test(t)}function BI(t=Vt()){return/iemobile/i.test(t)}function $I(t=Vt()){return/android/i.test(t)}function HI(t=Vt()){return/blackberry/i.test(t)}function jI(t=Vt()){return/webos/i.test(t)}function qp(t=Vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CL(t=Vt()){var e;return qp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SL(){return C1()&&document.documentMode===10}function WI(t=Vt()){return qp(t)||$I(t)||jI(t)||HI(t)||/windows phone/i.test(t)||BI(t)}/**
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
 */function qI(t,e=[]){let n;switch(t){case"Browser":n=Hy(Vt());break;case"Worker":n=`${Hy(Vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${os}/${r}`}/**
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
 */class PL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function kL(t,e={}){return Ji(t,"GET","/v2/passwordPolicy",jp(t,e))}/**
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
 */const NL=6;class OL{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:NL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class DL{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jy(this),this.idTokenSubscription=new jy(this),this.beforeStateQueue=new PL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=cr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ti.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await MI(this,{idToken:e}),r=await lr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(or(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(or(this.app))return Promise.reject(Ps(this));const n=e?_t(e):null;return n&&_e(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return or(this.app)?Promise.reject(Ps(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return or(this.app)?Promise.reject(Ps(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kL(this),n=new OL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await AL(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&cr(e)||this._popupRedirectResolver;_e(n,this,"argument-error"),this.redirectPersistenceManager=await Ti.create(this,[cr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Kp(t){return _t(t)}class jy{constructor(e){this.auth=e,this.observer=null,this.addObserver=L1(n=>this.observer=n)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Gp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ML(t){Gp=t}function xL(t){return Gp.loadJS(t)}function LL(){return Gp.gapiScript}function VL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function FL(t,e){const n=Uw(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ec(i,e??{}))return s;qn(s,"already-initialized")}return n.initialize({options:e})}function UL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(cr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */class KI{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ar("not implemented")}_getIdTokenResponse(e){return ar("not implemented")}_linkToIdToken(e,n){return ar("not implemented")}_getReauthenticationResolver(e){return ar("not implemented")}}/**
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
 */async function wi(t,e){return _L(t,"POST","/v1/accounts:signInWithIdp",jp(t,e))}/**
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
 */const BL="http://localhost";class xs extends KI{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Up(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new xs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,wi(e,n)}buildRequest(){const e={requestUri:BL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zi(n)}return e}}/**
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
 */class zp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ba extends zp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fr extends Ba{constructor(){super("facebook.com")}static credential(e){return xs._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fr.credential(e.oauthAccessToken)}catch{return null}}}Fr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fr.PROVIDER_ID="facebook.com";/**
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
 */class Ur extends Ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xs._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ur.credential(n,r)}catch{return null}}}Ur.GOOGLE_SIGN_IN_METHOD="google.com";Ur.PROVIDER_ID="google.com";/**
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
 */class Br extends Ba{constructor(){super("github.com")}static credential(e){return xs._fromParams({providerId:Br.PROVIDER_ID,signInMethod:Br.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Br.credentialFromTaggedObject(e)}static credentialFromError(e){return Br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Br.credential(e.oauthAccessToken)}catch{return null}}}Br.GITHUB_SIGN_IN_METHOD="github.com";Br.PROVIDER_ID="github.com";/**
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
 */class $r extends Ba{constructor(){super("twitter.com")}static credential(e,n){return xs._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $r.credential(n,r)}catch{return null}}}$r.TWITTER_SIGN_IN_METHOD="twitter.com";$r.PROVIDER_ID="twitter.com";/**
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
 */class Bi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await lr._fromIdTokenResponse(e,r,s),o=Wy(r);return new Bi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Wy(r);return new Bi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Wy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Oc extends zn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Oc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Oc(e,n,r,s)}}function GI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Oc._fromErrorAndOperation(t,i,e,r):i})}async function $L(t,e,n=!1){const r=await da(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bi._forOperation(t,"link",r)}/**
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
 */async function HL(t,e,n=!1){const{auth:r}=t;if(or(r.app))return Promise.reject(Ps(r));const s="reauthenticate";try{const i=await da(t,GI(r,s,e,t),n);_e(i.idToken,r,"internal-error");const o=Wp(i.idToken);_e(o,r,"internal-error");const{sub:a}=o;return _e(t.uid===a,r,"user-mismatch"),Bi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qn(r,"user-mismatch"),i}}/**
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
 */async function jL(t,e,n=!1){if(or(t.app))return Promise.reject(Ps(t));const r="signIn",s=await GI(t,r,e),i=await Bi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function WL(t,e,n,r){return _t(t).onIdTokenChanged(e,n,r)}function _j(t){return _t(t).signOut()}const Dc="__sak";/**
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
 */class zI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Dc,"1"),this.storage.removeItem(Dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qL=1e3,KL=10;class QI extends zI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=WI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);SL()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,KL):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}QI.type="LOCAL";const GL=QI;/**
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
 */class YI extends zI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}YI.type="SESSION";const zL=YI;/**
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
 */function QL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ou{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ou(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await QL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ou.receivers=[];/**
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
 */function Qp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class YL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Qp("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $n(){return window}function XL(t){$n().location.href=t}/**
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
 */function XI(){return typeof $n().WorkerGlobalScope<"u"&&typeof $n().importScripts=="function"}async function JL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eV(){return XI()?self:null}/**
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
 */const JI="firebaseLocalStorageDb",tV=1,Mc="firebaseLocalStorage",ZI="fbase_key";class $a{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Du(t,e){return t.transaction([Mc],e?"readwrite":"readonly").objectStore(Mc)}function nV(){const t=indexedDB.deleteDatabase(JI);return new $a(t).toPromise()}function Qf(){const t=indexedDB.open(JI,tV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Mc,{keyPath:ZI})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Mc)?e(r):(r.close(),await nV(),e(await Qf()))})})}async function qy(t,e,n){const r=Du(t,!0).put({[ZI]:e,value:n});return new $a(r).toPromise()}async function rV(t,e){const n=Du(t,!1).get(e),r=await new $a(n).toPromise();return r===void 0?null:r.value}function Ky(t,e){const n=Du(t,!0).delete(e);return new $a(n).toPromise()}const sV=800,iV=3;class eb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iV)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return XI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ou._getInstance(eV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await JL(),!this.activeServiceWorker)return;this.sender=new YL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qf();return await qy(e,Dc,"1"),await Ky(e,Dc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>rV(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ky(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Du(s,!1).getAll();return new $a(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eb.type="LOCAL";const oV=eb;new Ua(3e4,6e4);/**
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
 */function tb(t,e){return e?cr(e):(_e(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Yp extends KI{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aV(t){return jL(t.auth,new Yp(t),t.bypassAuthState)}function lV(t){const{auth:e,user:n}=t;return _e(n,e,"internal-error"),HL(n,new Yp(t),t.bypassAuthState)}async function cV(t){const{auth:e,user:n}=t;return _e(n,e,"internal-error"),$L(n,new Yp(t),t.bypassAuthState)}/**
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
 */class nb{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aV;case"linkViaPopup":case"linkViaRedirect":return cV;case"reauthViaPopup":case"reauthViaRedirect":return lV;default:qn(this.auth,"internal-error")}}resolve(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const uV=new Ua(2e3,1e4);async function yj(t,e,n){if(or(t.app))return Promise.reject(Sn(t,"operation-not-supported-in-this-environment"));const r=Kp(t);hL(t,e,zp);const s=tb(r,n);return new Ts(r,"signInViaPopup",e,s).executeNotNull()}class Ts extends nb{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ts.currentPopupAction&&Ts.currentPopupAction.cancel(),Ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Er(this.filter.length===1,"Popup operations only handle one event");const e=Qp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uV.get())};e()}}Ts.currentPopupAction=null;/**
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
 */const hV="pendingRedirect",Xl=new Map;class fV extends nb{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xl.get(this.auth._key());if(!e){try{const r=await dV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xl.set(this.auth._key(),e)}return this.bypassAuthState||Xl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dV(t,e){const n=gV(e),r=mV(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function pV(t,e){Xl.set(t._key(),e)}function mV(t){return cr(t._redirectPersistence)}function gV(t){return Yl(hV,t.config.apiKey,t.name)}async function _V(t,e,n=!1){if(or(t.app))return Promise.reject(Ps(t));const r=Kp(t),s=tb(r,e),o=await new fV(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const yV=10*60*1e3;class vV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rb(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yV&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gy(e))}saveEventToCache(e){this.cachedEventUids.add(Gy(e)),this.lastProcessedEventTime=Date.now()}}function Gy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rb(t);default:return!1}}/**
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
 */async function TV(t,e={}){return Ji(t,"GET","/v1/projects",e)}/**
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
 */const wV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IV=/^https?/;async function bV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TV(t);for(const n of e)try{if(RV(n))return}catch{}qn(t,"unauthorized-domain")}function RV(t){const e=Gf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IV.test(n))return!1;if(wV.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const AV=new Ua(3e4,6e4);function zy(){const t=$n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CV(t){return new Promise((e,n)=>{var r,s,i;function o(){zy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zy(),n(Sn(t,"network-request-failed"))},timeout:AV.get()})}if(!((s=(r=$n().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=$n().gapi)===null||i===void 0)&&i.load)o();else{const a=VL("iframefcb");return $n()[a]=()=>{gapi.load?o():n(Sn(t,"network-request-failed"))},xL(`${LL()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Jl=null,e})}let Jl=null;function SV(t){return Jl=Jl||CV(t),Jl}/**
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
 */const PV=new Ua(5e3,15e3),kV="__/auth/iframe",NV="emulator/auth/iframe",OV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MV(t){const e=t.config;_e(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hp(e,NV):`https://${t.config.authDomain}/${kV}`,r={apiKey:e.apiKey,appName:t.name,v:os},s=DV.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zi(r).slice(1)}`}async function xV(t){const e=await SV(t),n=$n().gapi;return _e(n,t,"internal-error"),e.open({where:document.body,url:MV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OV,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),a=$n().setTimeout(()=>{i(o)},PV.get());function l(){$n().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const LV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VV=500,FV=600,UV="_blank",BV="http://localhost";class Qy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $V(t,e,n,r=VV,s=FV){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},LV),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Vt().toLowerCase();n&&(a=UI(u)?UV:n),VI(u)&&(e=e||BV,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[g,_])=>`${p}${g}=${_},`,"");if(CL(u)&&a!=="_self")return HV(e||"",a),new Qy(null);const f=window.open(e||"",a,h);_e(f,t,"popup-blocked");try{f.focus()}catch{}return new Qy(f)}function HV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const jV="__/auth/handler",WV="emulator/auth/handler",qV=encodeURIComponent("fac");async function Yy(t,e,n,r,s,i){_e(t.config.authDomain,t,"auth-domain-config-required"),_e(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:os,eventId:s};if(e instanceof zp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Ba){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${qV}=${encodeURIComponent(l)}`:"";return`${KV(t)}?${zi(a).slice(1)}${u}`}function KV({config:t}){return t.emulator?Hp(t,WV):`https://${t.authDomain}/${jV}`}/**
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
 */const Nh="webStorageSupport";class GV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zL,this._completeRedirectFn=_V,this._overrideRedirectResult=pV}async _openPopup(e,n,r,s){var i;Er((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Yy(e,n,r,Gf(),s);return $V(e,o,Qp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Yy(e,n,r,Gf(),s);return XL(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Er(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xV(e),r=new vV(e);return n.register("authEvent",s=>(_e(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nh,{type:Nh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Nh];o!==void 0&&n(!!o),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return WI()||FI()||qp()}}const zV=GV;var Xy="@firebase/auth",Jy="1.7.8";/**
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
 */class QV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function XV(t){Hn(new Nn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;_e(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qI(t)},u=new DL(r,s,i,l);return UL(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hn(new Nn("auth-internal",e=>{const n=Kp(e.getProvider("auth").getImmediate());return(r=>new QV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(Xy,Jy,YV(t)),cn(Xy,Jy,"esm2017")}/**
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
 */const JV=5*60;I1("authIdTokenMaxAge");function ZV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ML({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ZV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});XV("Browser");const eF=!1;/**
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
 */const tF=new Map,nF={activated:!1,tokenObservers:[]};function Dn(t){return tF.get(t)||Object.assign({},nF)}const Zy={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class rF{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ta,this.pending.promise.catch(n=>{}),await sF(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ta,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function sF(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const iF={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},xc=new Gi("appCheck","AppCheck",iF);function sb(t){if(!Dn(t).activated)throw xc.create("use-before-activation",{appName:t.name})}/**
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
 */const oF="firebase-app-check-database",aF=1,Yf="firebase-app-check-store";let Cl=null;function lF(){return Cl||(Cl=new Promise((t,e)=>{try{const n=indexedDB.open(oF,aF);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(xc.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(Yf,{keyPath:"compositeKey"})}}}catch(n){e(xc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Cl)}function cF(t,e){return uF(hF(t),e)}async function uF(t,e){const r=(await lF()).transaction(Yf,"readwrite"),i=r.objectStore(Yf).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},r.onerror=l=>{var u;a(xc.create("storage-set",{originalErrorMessage:(u=l.target.error)===null||u===void 0?void 0:u.message}))}})}function hF(t){return`${t.options.appId}-${t.name}`}/**
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
 */const Xf=new Sa("@firebase/app-check");function ev(t,e){return xw()?cF(t,e).catch(n=>{Xf.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const fF={error:"UNKNOWN_ERROR"};function dF(t){return hu.encodeString(JSON.stringify(t),!1)}async function Jf(t,e=!1){const n=t.app;sb(n);const r=Dn(n);let s=r.token,i;if(s&&!No(s)&&(r.token=void 0,s=void 0),!s){const l=await r.cachedTokenPromise;l&&(No(l)?s=l:await ev(n,void 0))}if(!e&&s&&No(s))return{token:s.token};let o=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await Dn(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Xf.warn(l.message):Xf.error(l),i=l}let a;return s?i?No(s)?a={token:s.token,internalError:i}:a=nv(i):(a={token:s.token},r.token=s,await ev(n,s)):a=nv(i),o&&_F(n,a),a}async function pF(t){const e=t.app;sb(e);const{provider:n}=Dn(e);{const{token:r}=await n.getToken();return{token:r}}}function mF(t,e,n,r){const{app:s}=t,i=Dn(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&No(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),tv(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>tv(t))}function ib(t,e){const n=Dn(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function tv(t){const{app:e}=t,n=Dn(e);let r=n.tokenRefresher;r||(r=gF(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function gF(t){const{app:e}=t;return new rF(async()=>{const n=Dn(e);let r;if(n.token?r=await Jf(t,!0):r=await Jf(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=Dn(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},Zy.RETRIAL_MIN_WAIT,Zy.RETRIAL_MAX_WAIT)}function _F(t,e){const n=Dn(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function No(t){return t.expireTimeMillis-Date.now()>0}function nv(t){return{token:dF(fF),error:t}}/**
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
 */class yF{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Dn(this.app);for(const n of e)ib(this.app,n.next);return Promise.resolve()}}function vF(t,e){return new yF(t,e)}function EF(t){return{getToken:e=>Jf(t,e),getLimitedUseToken:()=>pF(t),addTokenListener:e=>mF(t,"INTERNAL",e),removeTokenListener:e=>ib(t.app,e)}}const TF="@firebase/app-check",wF="0.8.7",IF="app-check",rv="app-check-internal";function bF(){Hn(new Nn(IF,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return vF(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(rv).initialize()})),Hn(new Nn(rv,t=>{const e=t.getProvider("app-check").getImmediate();return EF(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),cn(TF,wF)}bF();var RF="firebase",AF="10.13.1";/**
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
 */cn(RF,AF,"app");const ob=Symbol("firebaseApp");function Ha(t){return qi()&&Fe(ob,null)||$w(t)}const Vn=()=>{},CF=typeof window<"u";function Xp(t,e){return e.split(".").reduce((n,r)=>n&&n[r],t)}function SF(t,e,n){const r=(""+e).split("."),s=r.pop(),i=r.reduce((o,a)=>o&&o[a],t);if(i!=null)return Array.isArray(i)?i.splice(Number(s),1,n):i[s]=n}function qs(t){return!!t&&typeof t=="object"}const PF=Object.prototype;function kF(t){return qs(t)&&Object.getPrototypeOf(t)===PF}function Jp(t){return qs(t)&&t.type==="document"}function NF(t){return qs(t)&&t.type==="collection"}function OF(t){return Jp(t)||NF(t)}function DF(t){return qs(t)&&t.type==="query"}function MF(t){return qs(t)&&"ref"in t}function xF(t){return qs(t)&&typeof t.bucket=="string"}function LF(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const VF=Symbol.for("v-scx");function FF(){return!!Fe(VF,0)}const Sl=new WeakMap;function UF(t,e){if(!Sl.has(t)){const n=Zc(!0);Sl.set(t,n);const{unmount:r}=e;e.unmount=()=>{r.call(e),n.stop(),Sl.delete(t)}}return Sl.get(t)}const ab=new WeakMap;function BF(t){return ab.get(Ha(t))}const Pl=new WeakMap;function lb(t){const e=Ha(t);if(!Pl.has(e)){let n;const s=[new Promise(i=>{n=i}),i=>{Pl.set(e,i),n(i.value)}];Pl.set(e,s)}return Pl.get(e)}function $F(t){const e=lb(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function HF(t,e){WL(e,n=>{const r=lb();t.value=n,Array.isArray(r)&&r[1](t)})}var sv={};const iv="@firebase/database",ov="1.0.7";/**
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
 */let cb="";function jF(t){cb=t}/**
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
 */class WF{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Et(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:na(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class qF{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return wr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ub=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new WF(e)}}catch{}return new qF},ws=ub("localStorage"),KF=ub("sessionStorage");/**
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
 */const Ii=new Sa("@firebase/database"),GF=function(){let t=1;return function(){return t++}}(),hb=function(t){const e=B1(t),n=new x1;n.update(e);const r=n.digest();return hu.encodeByteArray(r)},ja=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ja.apply(null,r):typeof r=="object"?e+=Et(r):e+=r,e+=" "}return e};let qo=null,av=!0;const zF=function(t,e){J(!e,"Can't turn on custom loggers persistently."),Ii.logLevel=Ee.VERBOSE,qo=Ii.log.bind(Ii)},Nt=function(...t){if(av===!0&&(av=!1,qo===null&&KF.get("logging_enabled")===!0&&zF()),qo){const e=ja.apply(null,t);qo(e)}},Wa=function(t){return function(...e){Nt(t,...e)}},Zf=function(...t){const e="FIREBASE INTERNAL ERROR: "+ja(...t);Ii.error(e)},Ls=function(...t){const e=`FIREBASE FATAL ERROR: ${ja(...t)}`;throw Ii.error(e),new Error(e)},hn=function(...t){const e="FIREBASE WARNING: "+ja(...t);Ii.warn(e)},QF=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&hn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fb=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},YF=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},$i="[MIN_NAME]",Vs="[MAX_NAME]",Zi=function(t,e){if(t===e)return 0;if(t===$i||e===Vs)return-1;if(e===$i||t===Vs)return 1;{const n=lv(t),r=lv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},XF=function(t,e){return t===e?0:t<e?-1:1},To=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Et(e))},Zp=function(t){if(typeof t!="object"||t===null)return Et(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Et(e[r]),n+=":",n+=Zp(t[e[r]]);return n+="}",n},db=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function En(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const pb=function(t){J(!fb(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let f="";for(l=0;l<64;l+=8){let p=parseInt(h.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},JF=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ZF=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},e2=new RegExp("^-?(0*)\\d{1,10}$"),t2=-2147483648,n2=2147483647,lv=function(t){if(e2.test(t)){const e=Number(t);if(e>=t2&&e<=n2)return e}return null},qa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw hn("Exception was thrown by user callback.",n),e},Math.floor(0))}},r2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ko=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class s2{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){hn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class i2{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',hn(e)}}/**
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
 */const em="5",mb="v",gb="s",_b="r",yb="f",vb=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Eb="ls",Tb="p",ed="ac",wb="websocket",Ib="long_polling";/**
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
 */class o2{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ws.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ws.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function a2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function bb(t,e,n){J(typeof e=="string","typeof type must == string"),J(typeof n=="object","typeof params must == object");let r;if(e===wb)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ib)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);a2(t)&&(n.ns=t.namespace);const s=[];return En(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class l2{constructor(){this.counters_={}}incrementCounter(e,n=1){wr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return m1(this.counters_)}}/**
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
 */const Oh={},Dh={};function tm(t){const e=t.toString();return Oh[e]||(Oh[e]=new l2),Oh[e]}function c2(t,e){const n=t.toString();return Dh[n]||(Dh[n]=e()),Dh[n]}/**
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
 */class u2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&qa(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const cv="start",h2="close",f2="pLPCommand",d2="pRTLPCB",Rb="id",Ab="pw",Cb="ser",p2="cb",m2="seg",g2="ts",_2="d",y2="dframe",Sb=1870,Pb=30,v2=Sb-Pb,E2=25e3,T2=3e4;class ui{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Wa(e),this.stats_=tm(n),this.urlFn=l=>(this.appCheckToken&&(l[ed]=this.appCheckToken),bb(n,Ib,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new u2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(T2)),YF(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nm((...i)=>{const[o,a,l,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cv)this.id=a,this.password=l;else if(o===h2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[cv]="t",r[Cb]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[p2]=this.scriptTagHolder.uniqueCallbackIdentifier),r[mb]=em,this.transportSessionId&&(r[gb]=this.transportSessionId),this.lastSessionId&&(r[Eb]=this.lastSessionId),this.applicationId&&(r[Tb]=this.applicationId),this.appCheckToken&&(r[ed]=this.appCheckToken),typeof location<"u"&&location.hostname&&vb.test(location.hostname)&&(r[_b]=yb);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ui.forceAllow_=!0}static forceDisallow(){ui.forceDisallow_=!0}static isAvailable(){return ui.forceAllow_?!0:!ui.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!JF()&&!ZF()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=kw(n),s=db(r,v2);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[y2]="t",r[Rb]=e,r[Ab]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Et(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class nm{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=GF(),window[f2+this.uniqueCallbackIdentifier]=e,window[d2+this.uniqueCallbackIdentifier]=n,this.myIFrame=nm.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Nt("frame writing exception"),a.stack&&Nt(a.stack),Nt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Nt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Rb]=this.myID,e[Ab]=this.myPW,e[Cb]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Pb+r.length<=Sb;){const o=this.pendingSegs.shift();r=r+"&"+m2+s+"="+o.seg+"&"+g2+s+"="+o.ts+"&"+_2+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(E2)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const w2=16384,I2=45e3;let Lc=null;typeof MozWebSocket<"u"?Lc=MozWebSocket:typeof WebSocket<"u"&&(Lc=WebSocket);class Rn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Wa(this.connId),this.stats_=tm(n),this.connURL=Rn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[mb]=em,typeof location<"u"&&location.hostname&&vb.test(location.hostname)&&(o[_b]=yb),n&&(o[gb]=n),r&&(o[Eb]=r),s&&(o[ed]=s),i&&(o[Tb]=i),bb(e,wb,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ws.set("previous_websocket_failure",!0);try{let r;Mw(),this.mySock=new Lc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Rn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Lc!==null&&!Rn.forceDisallow_}static previouslyFailed(){return ws.isInMemoryStorage||ws.get("previous_websocket_failure")===!0}markConnectionHealthy(){ws.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=na(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(J(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=db(n,w2);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(I2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Rn.responsesRequiredToBeHealthy=2;Rn.healthyTimeout=3e4;/**
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
 */class pa{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ui,Rn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Rn&&Rn.isAvailable();let r=n&&!Rn.previouslyFailed();if(e.webSocketOnly&&(n||hn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Rn];else{const s=this.transports_=[];for(const i of pa.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);pa.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}pa.globalTransportInitialized_=!1;/**
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
 */const b2=6e4,R2=5e3,A2=10*1024,C2=100*1024,Mh="t",uv="d",S2="s",hv="r",P2="e",fv="o",dv="a",pv="n",mv="p",k2="h";class N2{constructor(e,n,r,s,i,o,a,l,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Wa("c:"+this.id+":"),this.transportManager_=new pa(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ko(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>C2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>A2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Mh in e){const n=e[Mh];n===dv?this.upgradeIfSecondaryHealthy_():n===hv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===fv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=To("t",e),r=To("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:dv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:pv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=To("t",e),r=To("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=To(Mh,e);if(uv in e){const r=e[uv];if(n===k2){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===pv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===S2?this.onConnectionShutdown_(r):n===hv?this.onReset_(r):n===P2?Zf("Server Error: "+r):n===fv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),em!==r&&hn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ko(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(b2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ko(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(R2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ws.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class kb{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Nb{constructor(e){this.allowedEvents_=e,this.listeners_={},J(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){J(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Vc extends Nb{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Jd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Vc}getInitialEvent(e){return J(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const gv=32,_v=768;class Ye{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Be(){return new Ye("")}function Ae(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ns(t){return t.pieces_.length-t.pieceNum_}function ze(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ye(t.pieces_,e)}function Ob(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function O2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Db(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Mb(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ye(e,0)}function gt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof Ye)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new Ye(n,0)}function Ie(t){return t.pieceNum_>=t.pieces_.length}function _n(t,e){const n=Ae(t),r=Ae(e);if(n===null)return e;if(n===r)return _n(ze(t),ze(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function xb(t,e){if(ns(t)!==ns(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function An(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(ns(t)>ns(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class D2{constructor(e,n){this.errorPrefix_=n,this.parts_=Db(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=du(this.parts_[r]);Lb(this)}}function M2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=du(e),Lb(t)}function x2(t){const e=t.parts_.pop();t.byteLength_-=du(e),t.parts_.length>0&&(t.byteLength_-=1)}function Lb(t){if(t.byteLength_>_v)throw new Error(t.errorPrefix_+"has a key path longer than "+_v+" bytes ("+t.byteLength_+").");if(t.parts_.length>gv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+gv+") or object contains a cycle "+ys(t))}function ys(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class rm extends Nb{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new rm}getInitialEvent(e){return J(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const wo=1e3,L2=60*5*1e3,yv=30*1e3,V2=1.3,F2=3e4,U2="server_kill",vv=3;class pr extends kb{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=pr.nextPersistentConnectionId_++,this.log_=Wa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wo,this.maxReconnectDelay_=L2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Mw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Vc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(Et(i)),J(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new ta,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),J(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;pr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&wr(e,"w")){const r=ki(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();hn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||M1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=D1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Et(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Zf("Unrecognized action received from server: "+Et(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){J(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>F2&&(this.reconnectDelay_=wo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*V2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+pr.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(f){J(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Nt("getToken() completed but was canceled"):(Nt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new N2(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{hn(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(U2)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&hn(f),l())}}}interrupt(e){Nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],wf(this.interruptReasons_)&&(this.reconnectDelay_=wo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Zp(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new Ye(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Nt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=vv&&(this.reconnectDelay_=yv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Nt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=vv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+cb.replace(/\./g,"-")]=1,Jd()?e["framework.cordova"]=1:Dw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vc.getInstance().currentlyOnline();return wf(this.interruptReasons_)&&e}}pr.nextPersistentConnectionId_=0;pr.nextConnectionId_=0;/**
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
 */class Ce{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ce(e,n)}}/**
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
 */class Mu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Ce($i,e),s=new Ce($i,n);return this.compare(r,s)!==0}minPost(){return Ce.MIN}}/**
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
 */let kl;class Vb extends Mu{static get __EMPTY_NODE(){return kl}static set __EMPTY_NODE(e){kl=e}compare(e,n){return Zi(e.name,n.name)}isDefinedOn(e){throw Ki("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ce.MIN}maxPost(){return new Ce(Vs,kl)}makePost(e,n){return J(typeof e=="string","KeyIndex indexValue must always be a string."),new Ce(e,kl)}toString(){return".key"}}const bi=new Vb;/**
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
 */class Nl{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class pt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??pt.RED,this.left=s??Yt.EMPTY_NODE,this.right=i??Yt.EMPTY_NODE}copy(e,n,r,s,i){return new pt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Yt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Yt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}pt.RED=!0;pt.BLACK=!1;class B2{copy(e,n,r,s,i){return this}insert(e,n,r){return new pt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Yt{constructor(e,n=Yt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Yt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,pt.BLACK,null,null))}remove(e){return new Yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,pt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Nl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Nl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Nl(this.root_,null,this.comparator_,!0,e)}}Yt.EMPTY_NODE=new B2;/**
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
 */function $2(t,e){return Zi(t.name,e.name)}function sm(t,e){return Zi(t,e)}/**
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
 */let td;function H2(t){td=t}const Fb=function(t){return typeof t=="number"?"number:"+pb(t):"string:"+t},Ub=function(t){if(t.isLeafNode()){const e=t.val();J(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wr(e,".sv"),"Priority must be a string or number.")}else J(t===td||t.isEmpty(),"priority of unexpected type.");J(t===td||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ev;class ft{constructor(e,n=ft.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,J(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ub(this.priorityNode_)}static set __childrenNodeConstructor(e){Ev=e}static get __childrenNodeConstructor(){return Ev}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ft(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ie(e)?this:Ae(e)===".priority"?this.priorityNode_:ft.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ft.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Ae(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(J(r!==".priority"||ns(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ft.__childrenNodeConstructor.EMPTY_NODE.updateChild(ze(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Fb(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=pb(this.value_):e+=this.value_,this.lazyHash_=hb(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ft.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ft.__childrenNodeConstructor?-1:(J(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=ft.VALUE_TYPE_ORDER.indexOf(n),i=ft.VALUE_TYPE_ORDER.indexOf(r);return J(s>=0,"Unknown leaf type: "+n),J(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ft.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Bb,$b;function j2(t){Bb=t}function W2(t){$b=t}class q2 extends Mu{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Zi(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ce.MIN}maxPost(){return new Ce(Vs,new ft("[PRIORITY-POST]",$b))}makePost(e,n){const r=Bb(e);return new Ce(n,new ft("[PRIORITY-POST]",r))}toString(){return".priority"}}const xt=new q2;/**
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
 */const K2=Math.log(2);class G2{constructor(e){const n=i=>parseInt(Math.log(i)/K2,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Fc=function(t,e,n,r){t.sort(e);const s=function(l,u){const h=u-l;let f,p;if(h===0)return null;if(h===1)return f=t[l],p=n?n(f):f,new pt(p,f.node,pt.BLACK,null,null);{const g=parseInt(h/2,10)+l,_=s(l,g),I=s(g+1,u);return f=t[g],p=n?n(f):f,new pt(p,f.node,pt.BLACK,_,I)}},i=function(l){let u=null,h=null,f=t.length;const p=function(_,I){const S=f-_,L=f;f-=_;const k=s(S+1,L),R=t[S],O=n?n(R):R;g(new pt(O,R.node,I,null,k))},g=function(_){u?(u.left=_,u=_):(h=_,u=_)};for(let _=0;_<l.count;++_){const I=l.nextBitIsOne(),S=Math.pow(2,l.count-(_+1));I?p(S,pt.BLACK):(p(S,pt.BLACK),p(S,pt.RED))}return h},o=new G2(t.length),a=i(o);return new Yt(r||e,a)};/**
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
 */let xh;const ti={};class ur{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return J(ti&&xt,"ChildrenNode.ts has not been loaded"),xh=xh||new ur({".priority":ti},{".priority":xt}),xh}get(e){const n=ki(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Yt?n:null}hasIndex(e){return wr(this.indexSet_,e.toString())}addIndex(e,n){J(e!==bi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(Ce.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Fc(r,e.getCompare()):a=ti;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new ur(h,u)}addToIndexes(e,n){const r=vc(this.indexes_,(s,i)=>{const o=ki(this.indexSet_,i);if(J(o,"Missing index implementation for "+i),s===ti)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ce.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Fc(a,o.getCompare())}else return ti;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new Ce(e.name,a))),l.insert(e,e.node)}});return new ur(r,this.indexSet_)}removeFromIndexes(e,n){const r=vc(this.indexes_,s=>{if(s===ti)return s;{const i=n.get(e.name);return i?s.remove(new Ce(e.name,i)):s}});return new ur(r,this.indexSet_)}}/**
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
 */let Io;class xe{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Ub(this.priorityNode_),this.children_.isEmpty()&&J(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Io||(Io=new xe(new Yt(sm),null,ur.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Io}updatePriority(e){return this.children_.isEmpty()?this:new xe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Io:n}}getChild(e){const n=Ae(e);return n===null?this:this.getImmediateChild(n).getChild(ze(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(J(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Ce(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Io:this.priorityNode_;return new xe(s,o,i)}}updateChild(e,n){const r=Ae(e);if(r===null)return n;{J(Ae(e)!==".priority"||ns(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ze(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(xt,(o,a)=>{n[o]=a.val(e),r++,i&&xe.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Fb(this.getPriority().val())+":"),this.forEachChild(xt,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":hb(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Ce(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ce(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ce(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Ce.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Ce.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ka?-1:0}withIndex(e){if(e===bi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new xe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===bi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(xt),s=n.getIterator(xt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===bi?null:this.indexMap_.get(e.toString())}}xe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class z2 extends xe{constructor(){super(new Yt(sm),xe.EMPTY_NODE,ur.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return xe.EMPTY_NODE}isEmpty(){return!1}}const Ka=new z2;Object.defineProperties(Ce,{MIN:{value:new Ce($i,xe.EMPTY_NODE)},MAX:{value:new Ce(Vs,Ka)}});Vb.__EMPTY_NODE=xe.EMPTY_NODE;ft.__childrenNodeConstructor=xe;H2(Ka);W2(Ka);/**
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
 */const Q2=!0;function Ot(t,e=null){if(t===null)return xe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),J(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ft(n,Ot(e))}if(!(t instanceof Array)&&Q2){const n=[];let r=!1;if(En(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ot(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Ce(o,l)))}}),n.length===0)return xe.EMPTY_NODE;const i=Fc(n,$2,o=>o.name,sm);if(r){const o=Fc(n,xt.getCompare());return new xe(i,Ot(e),new ur({".priority":o},{".priority":xt}))}else return new xe(i,Ot(e),ur.Default)}else{let n=xe.EMPTY_NODE;return En(t,(r,s)=>{if(wr(t,r)&&r.substring(0,1)!=="."){const i=Ot(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Ot(e))}}j2(Ot);/**
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
 */class Y2 extends Mu{constructor(e){super(),this.indexPath_=e,J(!Ie(e)&&Ae(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Zi(e.name,n.name):i}makePost(e,n){const r=Ot(e),s=xe.EMPTY_NODE.updateChild(this.indexPath_,r);return new Ce(n,s)}maxPost(){const e=xe.EMPTY_NODE.updateChild(this.indexPath_,Ka);return new Ce(Vs,e)}toString(){return Db(this.indexPath_,0).join("/")}}/**
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
 */class X2 extends Mu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Zi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ce.MIN}maxPost(){return Ce.MAX}makePost(e,n){const r=Ot(e);return new Ce(n,r)}toString(){return".value"}}const J2=new X2;/**
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
 */function Z2(t){return{type:"value",snapshotNode:t}}function eU(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function tU(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Tv(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function nU(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class im{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=xt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return J(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return J(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:$i}hasEnd(){return this.endSet_}getIndexEndValue(){return J(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return J(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return J(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===xt}copy(){const e=new im;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===xt?n="$priority":t.index_===J2?n="$value":t.index_===bi?n="$key":(J(t.index_ instanceof Y2,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Et(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Et(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Et(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Et(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Et(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Iv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==xt&&(e.i=t.index_.toString()),e}/**
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
 */class Uc extends kb{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Wa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(J(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Uc.getListenId_(e,r),a={};this.listens_[o]=a;const l=wv(e._queryParams);this.restRequest_(i+".json",l,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,r),ki(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",s(p,null)}})}unlisten(e,n){const r=Uc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=wv(e._queryParams),r=e._path.toString(),s=new ta;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=na(a.responseText)}catch{hn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&hn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class rU{constructor(){this.rootNode_=xe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Bc(){return{value:null,children:new Map}}function Hb(t,e,n){if(Ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Ae(e);t.children.has(r)||t.children.set(r,Bc());const s=t.children.get(r);e=ze(e),Hb(s,e,n)}}function nd(t,e,n){t.value!==null?n(e,t.value):sU(t,(r,s)=>{const i=new Ye(e.toString()+"/"+r);nd(s,i,n)})}function sU(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class iU{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&En(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const bv=10*1e3,oU=30*1e3,aU=5*60*1e3;class lU{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new iU(e);const r=bv+(oU-bv)*Math.random();Ko(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;En(e,(s,i)=>{i>0&&wr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Ko(this.reportStats_.bind(this),Math.floor(Math.random()*2*aU))}}/**
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
 */var Fn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Fn||(Fn={}));function jb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Wb(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qb(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class $c{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Fn.ACK_USER_WRITE,this.source=jb()}operationForChild(e){if(Ie(this.path)){if(this.affectedTree.value!=null)return J(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ye(e));return new $c(Be(),n,this.revert)}}else return J(Ae(this.path)===e,"operationForChild called for unrelated child."),new $c(ze(this.path),this.affectedTree,this.revert)}}/**
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
 */class Fs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Fn.OVERWRITE}operationForChild(e){return Ie(this.path)?new Fs(this.source,Be(),this.snap.getImmediateChild(e)):new Fs(this.source,ze(this.path),this.snap)}}/**
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
 */class ma{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Fn.MERGE}operationForChild(e){if(Ie(this.path)){const n=this.children.subtree(new Ye(e));return n.isEmpty()?null:n.value?new Fs(this.source,Be(),n.value):new ma(this.source,Be(),n)}else return J(Ae(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ma(this.source,ze(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class om{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=Ae(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function cU(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(nU(o.childName,o.snapshotNode))}),bo(t,s,"child_removed",e,r,n),bo(t,s,"child_added",e,r,n),bo(t,s,"child_moved",i,r,n),bo(t,s,"child_changed",e,r,n),bo(t,s,"value",e,r,n),s}function bo(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>hU(t,a,l)),o.forEach(a=>{const l=uU(t,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function uU(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function hU(t,e,n){if(e.childName==null||n.childName==null)throw Ki("Should only compare child_ events.");const r=new Ce(e.childName,e.snapshotNode),s=new Ce(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function Kb(t,e){return{eventCache:t,serverCache:e}}function Go(t,e,n,r){return Kb(new om(e,n,r),t.serverCache)}function Gb(t,e,n,r){return Kb(t.eventCache,new om(e,n,r))}function rd(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Us(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Lh;const fU=()=>(Lh||(Lh=new Yt(XF)),Lh);class Ge{constructor(e,n=fU()){this.value=e,this.children=n}static fromObject(e){let n=new Ge(null);return En(e,(r,s)=>{n=n.set(new Ye(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Be(),value:this.value};if(Ie(e))return null;{const r=Ae(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(ze(e),n);return i!=null?{path:gt(new Ye(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ie(e))return this;{const n=Ae(e),r=this.children.get(n);return r!==null?r.subtree(ze(e)):new Ge(null)}}set(e,n){if(Ie(e))return new Ge(n,this.children);{const r=Ae(e),i=(this.children.get(r)||new Ge(null)).set(ze(e),n),o=this.children.insert(r,i);return new Ge(this.value,o)}}remove(e){if(Ie(e))return this.children.isEmpty()?new Ge(null):new Ge(null,this.children);{const n=Ae(e),r=this.children.get(n);if(r){const s=r.remove(ze(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Ge(null):new Ge(this.value,i)}else return this}}get(e){if(Ie(e))return this.value;{const n=Ae(e),r=this.children.get(n);return r?r.get(ze(e)):null}}setTree(e,n){if(Ie(e))return n;{const r=Ae(e),i=(this.children.get(r)||new Ge(null)).setTree(ze(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Ge(this.value,o)}}fold(e){return this.fold_(Be(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(gt(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Be(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(Ie(e))return null;{const i=Ae(e),o=this.children.get(i);return o?o.findOnPath_(ze(e),gt(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Be(),n)}foreachOnPath_(e,n,r){if(Ie(e))return this;{this.value&&r(n,this.value);const s=Ae(e),i=this.children.get(s);return i?i.foreachOnPath_(ze(e),gt(n,s),r):new Ge(null)}}foreach(e){this.foreach_(Be(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(gt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Pn{constructor(e){this.writeTree_=e}static empty(){return new Pn(new Ge(null))}}function zo(t,e,n){if(Ie(e))return new Pn(new Ge(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=_n(s,e);return i=i.updateChild(o,n),new Pn(t.writeTree_.set(s,i))}else{const s=new Ge(n),i=t.writeTree_.setTree(e,s);return new Pn(i)}}}function Rv(t,e,n){let r=t;return En(n,(s,i)=>{r=zo(r,gt(e,s),i)}),r}function Av(t,e){if(Ie(e))return Pn.empty();{const n=t.writeTree_.setTree(e,new Ge(null));return new Pn(n)}}function sd(t,e){return Ks(t,e)!=null}function Ks(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(_n(n.path,e)):null}function Cv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(xt,(r,s)=>{e.push(new Ce(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Ce(r,s.value))}),e}function Yr(t,e){if(Ie(e))return t;{const n=Ks(t,e);return n!=null?new Pn(new Ge(n)):new Pn(t.writeTree_.subtree(e))}}function id(t){return t.writeTree_.isEmpty()}function Hi(t,e){return zb(Be(),t.writeTree_,e)}function zb(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(J(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=zb(gt(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(gt(t,".priority"),r)),n}}/**
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
 */function Qb(t,e){return eR(e,t)}function dU(t,e,n,r,s){J(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=zo(t.visibleWrites,e,n)),t.lastWriteId=r}function pU(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function mU(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);J(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&gU(a,r.path)?s=!1:An(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return _U(t),!0;if(r.snap)t.visibleWrites=Av(t.visibleWrites,r.path);else{const a=r.children;En(a,l=>{t.visibleWrites=Av(t.visibleWrites,gt(r.path,l))})}return!0}else return!1}function gU(t,e){if(t.snap)return An(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&An(gt(t.path,n),e))return!0;return!1}function _U(t){t.visibleWrites=Yb(t.allWrites,yU,Be()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function yU(t){return t.visible}function Yb(t,e,n){let r=Pn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)An(n,o)?(a=_n(n,o),r=zo(r,a,i.snap)):An(o,n)&&(a=_n(o,n),r=zo(r,Be(),i.snap.getChild(a)));else if(i.children){if(An(n,o))a=_n(n,o),r=Rv(r,a,i.children);else if(An(o,n))if(a=_n(o,n),Ie(a))r=Rv(r,Be(),i.children);else{const l=ki(i.children,Ae(a));if(l){const u=l.getChild(ze(a));r=zo(r,Be(),u)}}}else throw Ki("WriteRecord should have .snap or .children")}}return r}function Xb(t,e,n,r,s){if(!r&&!s){const i=Ks(t.visibleWrites,e);if(i!=null)return i;{const o=Yr(t.visibleWrites,e);if(id(o))return n;if(n==null&&!sd(o,Be()))return null;{const a=n||xe.EMPTY_NODE;return Hi(o,a)}}}else{const i=Yr(t.visibleWrites,e);if(!s&&id(i))return n;if(!s&&n==null&&!sd(i,Be()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(An(u.path,e)||An(e,u.path))},a=Yb(t.allWrites,o,e),l=n||xe.EMPTY_NODE;return Hi(a,l)}}}function vU(t,e,n){let r=xe.EMPTY_NODE;const s=Ks(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(xt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Yr(t.visibleWrites,e);return n.forEachChild(xt,(o,a)=>{const l=Hi(Yr(i,new Ye(o)),a);r=r.updateImmediateChild(o,l)}),Cv(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Yr(t.visibleWrites,e);return Cv(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function EU(t,e,n,r,s){J(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=gt(e,n);if(sd(t.visibleWrites,i))return null;{const o=Yr(t.visibleWrites,i);return id(o)?s.getChild(n):Hi(o,s.getChild(n))}}function TU(t,e,n,r){const s=gt(e,n),i=Ks(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Yr(t.visibleWrites,s);return Hi(o,r.getNode().getImmediateChild(n))}else return null}function wU(t,e){return Ks(t.visibleWrites,e)}function IU(t,e,n,r,s,i,o){let a;const l=Yr(t.visibleWrites,e),u=Ks(l,Be());if(u!=null)a=u;else if(n!=null)a=Hi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),p=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=p.getNext();for(;g&&h.length<s;)f(g,r)!==0&&h.push(g),g=p.getNext();return h}else return[]}function bU(){return{visibleWrites:Pn.empty(),allWrites:[],lastWriteId:-1}}function od(t,e,n,r){return Xb(t.writeTree,t.treePath,e,n,r)}function Jb(t,e){return vU(t.writeTree,t.treePath,e)}function Sv(t,e,n,r){return EU(t.writeTree,t.treePath,e,n,r)}function Hc(t,e){return wU(t.writeTree,gt(t.treePath,e))}function RU(t,e,n,r,s,i){return IU(t.writeTree,t.treePath,e,n,r,s,i)}function am(t,e,n){return TU(t.writeTree,t.treePath,e,n)}function Zb(t,e){return eR(gt(t.treePath,e),t.writeTree)}function eR(t,e){return{treePath:t,writeTree:e}}/**
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
 */class AU{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;J(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),J(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Tv(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,tU(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,eU(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Tv(r,e.snapshotNode,s.oldSnap));else throw Ki("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class CU{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const tR=new CU;class lm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new om(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return am(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Us(this.viewCache_),i=RU(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}function SU(t,e){J(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),J(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function PU(t,e,n,r,s){const i=new AU;let o,a;if(n.type===Fn.OVERWRITE){const u=n;u.source.fromUser?o=ad(t,e,u.path,u.snap,r,s,i):(J(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Ie(u.path),o=jc(t,e,u.path,u.snap,r,s,a,i))}else if(n.type===Fn.MERGE){const u=n;u.source.fromUser?o=NU(t,e,u.path,u.children,r,s,i):(J(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=ld(t,e,u.path,u.children,r,s,a,i))}else if(n.type===Fn.ACK_USER_WRITE){const u=n;u.revert?o=MU(t,e,u.path,r,s,i):o=OU(t,e,u.path,u.affectedTree,r,s,i)}else if(n.type===Fn.LISTEN_COMPLETE)o=DU(t,e,n.path,r,i);else throw Ki("Unknown operation type: "+n.type);const l=i.getChanges();return kU(e,o,l),{viewCache:o,changes:l}}function kU(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=rd(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Z2(rd(e)))}}function nR(t,e,n,r,s,i){const o=e.eventCache;if(Hc(r,n)!=null)return e;{let a,l;if(Ie(n))if(J(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Us(e),h=u instanceof xe?u:xe.EMPTY_NODE,f=Jb(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=od(r,Us(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Ae(n);if(u===".priority"){J(ns(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const f=Sv(r,n,h,l);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=ze(n);let f;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const p=Sv(r,n,o.getNode(),l);p!=null?f=o.getNode().getImmediateChild(u).updateChild(h,p):f=o.getNode().getImmediateChild(u)}else f=am(r,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,h,s,i):a=o.getNode()}}return Go(e,a,o.isFullyInitialized()||Ie(n),t.filter.filtersNodes())}}function jc(t,e,n,r,s,i,o,a){const l=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Ie(n))u=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=h.updateFullNode(l.getNode(),g,null)}else{const g=Ae(n);if(!l.isCompleteForPath(n)&&ns(n)>1)return e;const _=ze(n),S=l.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=h.updatePriority(l.getNode(),S):u=h.updateChild(l.getNode(),g,S,_,tR,null)}const f=Gb(e,u,l.isFullyInitialized()||Ie(n),h.filtersNodes()),p=new lm(s,f,i);return nR(t,f,n,s,p,a)}function ad(t,e,n,r,s,i,o){const a=e.eventCache;let l,u;const h=new lm(s,e,i);if(Ie(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Go(e,u,!0,t.filter.filtersNodes());else{const f=Ae(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=Go(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=ze(n),g=a.getNode().getImmediateChild(f);let _;if(Ie(p))_=r;else{const I=h.getCompleteChild(f);I!=null?Ob(p)===".priority"&&I.getChild(Mb(p)).isEmpty()?_=I:_=I.updateChild(p,r):_=xe.EMPTY_NODE}if(g.equals(_))l=e;else{const I=t.filter.updateChild(a.getNode(),f,_,p,h,o);l=Go(e,I,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Pv(t,e){return t.eventCache.isCompleteForChild(e)}function NU(t,e,n,r,s,i,o){let a=e;return r.foreach((l,u)=>{const h=gt(n,l);Pv(e,Ae(h))&&(a=ad(t,a,h,u,s,i,o))}),r.foreach((l,u)=>{const h=gt(n,l);Pv(e,Ae(h))||(a=ad(t,a,h,u,s,i,o))}),a}function kv(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function ld(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Ie(n)?u=r:u=new Ge(null).setTree(n,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,p)=>{if(h.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),_=kv(t,g,p);l=jc(t,l,new Ye(f),_,s,i,o,a)}}),u.children.inorderTraversal((f,p)=>{const g=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!h.hasChild(f)&&!g){const _=e.serverCache.getNode().getImmediateChild(f),I=kv(t,_,p);l=jc(t,l,new Ye(f),I,s,i,o,a)}}),l}function OU(t,e,n,r,s,i,o){if(Hc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(Ie(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return jc(t,e,n,l.getNode().getChild(n),s,i,a,o);if(Ie(n)){let u=new Ge(null);return l.getNode().forEachChild(bi,(h,f)=>{u=u.set(new Ye(h),f)}),ld(t,e,n,u,s,i,a,o)}else return e}else{let u=new Ge(null);return r.foreach((h,f)=>{const p=gt(n,h);l.isCompleteForPath(p)&&(u=u.set(h,l.getNode().getChild(p)))}),ld(t,e,n,u,s,i,a,o)}}function DU(t,e,n,r,s){const i=e.serverCache,o=Gb(e,i.getNode(),i.isFullyInitialized()||Ie(n),i.isFiltered());return nR(t,o,n,r,tR,s)}function MU(t,e,n,r,s,i){let o;if(Hc(r,n)!=null)return e;{const a=new lm(r,e,s),l=e.eventCache.getNode();let u;if(Ie(n)||Ae(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=od(r,Us(e));else{const f=e.serverCache.getNode();J(f instanceof xe,"serverChildren would be complete if leaf node"),h=Jb(r,f)}h=h,u=t.filter.updateFullNode(l,h,i)}else{const h=Ae(n);let f=am(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=l.getImmediateChild(h)),f!=null?u=t.filter.updateChild(l,h,f,ze(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(l,h,xe.EMPTY_NODE,ze(n),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=od(r,Us(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Hc(r,Be())!=null,Go(e,u,o,t.filter.filtersNodes())}}function xU(t,e){const n=Us(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ie(e)&&!n.getImmediateChild(Ae(e)).isEmpty())?n.getChild(e):null}function Nv(t,e,n,r){e.type===Fn.MERGE&&e.source.queryId!==null&&(J(Us(t.viewCache_),"We should always have a full cache before handling merges"),J(rd(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=PU(t.processor_,s,e,n,r);return SU(t.processor_,i.viewCache),J(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,LU(t,i.changes,i.viewCache.eventCache.getNode())}function LU(t,e,n,r){const s=t.eventRegistrations_;return cU(t.eventGenerator_,e,n,s)}/**
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
 */let Ov;function VU(t){J(!Ov,"__referenceConstructor has already been defined"),Ov=t}function cm(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return J(i!=null,"SyncTree gave us an op for an invalid query."),Nv(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(Nv(o,e,n,r));return i}}function um(t,e){let n=null;for(const r of t.views.values())n=n||xU(r,e);return n}/**
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
 */let Dv;function FU(t){J(!Dv,"__referenceConstructor has already been defined"),Dv=t}class Mv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ge(null),this.pendingWriteTree_=bU(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function UU(t,e,n,r,s){return dU(t.pendingWriteTree_,e,n,r,s),s?Lu(t,new Fs(jb(),e,n)):[]}function hi(t,e,n=!1){const r=pU(t.pendingWriteTree_,e);if(mU(t.pendingWriteTree_,e)){let i=new Ge(null);return r.snap!=null?i=i.set(Be(),!0):En(r.children,o=>{i=i.set(new Ye(o),!0)}),Lu(t,new $c(r.path,i,n))}else return[]}function xu(t,e,n){return Lu(t,new Fs(Wb(),e,n))}function BU(t,e,n){const r=Ge.fromObject(n);return Lu(t,new ma(Wb(),e,r))}function $U(t,e,n,r){const s=oR(t,r);if(s!=null){const i=aR(s),o=i.path,a=i.queryId,l=_n(o,e),u=new Fs(qb(a),l,n);return lR(t,o,u)}else return[]}function HU(t,e,n,r){const s=oR(t,r);if(s){const i=aR(s),o=i.path,a=i.queryId,l=_n(o,e),u=Ge.fromObject(n),h=new ma(qb(a),l,u);return lR(t,o,h)}else return[]}function rR(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=_n(o,e),u=um(a,l);if(u)return u});return Xb(s,e,i,n,!0)}function Lu(t,e){return sR(e,t.syncPointTree_,null,Qb(t.pendingWriteTree_,Be()))}function sR(t,e,n,r){if(Ie(t.path))return iR(t,e,n,r);{const s=e.get(Be());n==null&&s!=null&&(n=um(s,Be()));let i=[];const o=Ae(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,h=Zb(r,o);i=i.concat(sR(a,l,u,h))}return s&&(i=i.concat(cm(s,t,r,n))),i}}function iR(t,e,n,r){const s=e.get(Be());n==null&&s!=null&&(n=um(s,Be()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Zb(r,o),h=t.operationForChild(o);h&&(i=i.concat(iR(h,a,l,u)))}),s&&(i=i.concat(cm(s,t,r,n))),i}function oR(t,e){return t.tagToQueryMap.get(e)}function aR(t){const e=t.indexOf("$");return J(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ye(t.substr(0,e))}}function lR(t,e,n){const r=t.syncPointTree_.get(e);J(r,"Missing sync point for query tag that we're tracking");const s=Qb(t.pendingWriteTree_,e);return cm(r,n,s,null)}/**
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
 */class hm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new hm(n)}node(){return this.node_}}class fm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=gt(this.path_,e);return new fm(this.syncTree_,n)}node(){return rR(this.syncTree_,this.path_)}}const jU=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},xv=function(t,e,n){if(!t||typeof t!="object")return t;if(J(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return WU(t[".sv"],e,n);if(typeof t[".sv"]=="object")return qU(t[".sv"],e);J(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},WU=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:J(!1,"Unexpected server value: "+t)}},qU=function(t,e,n){t.hasOwnProperty("increment")||J(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&J(!1,"Unexpected increment value: "+r);const s=e.node();if(J(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},KU=function(t,e,n,r){return dm(e,new fm(n,t),r)},GU=function(t,e,n){return dm(t,new hm(e),n)};function dm(t,e,n){const r=t.getPriority().val(),s=xv(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=xv(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new ft(a,Ot(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new ft(s))),o.forEachChild(xt,(a,l)=>{const u=dm(l,e.getImmediateChild(a),n);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class pm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function mm(t,e){let n=e instanceof Ye?e:new Ye(e),r=t,s=Ae(n);for(;s!==null;){const i=ki(r.node.children,s)||{children:{},childCount:0};r=new pm(s,r,i),n=ze(n),s=Ae(n)}return r}function eo(t){return t.node.value}function cR(t,e){t.node.value=e,cd(t)}function uR(t){return t.node.childCount>0}function zU(t){return eo(t)===void 0&&!uR(t)}function Vu(t,e){En(t.node.children,(n,r)=>{e(new pm(n,t,r))})}function hR(t,e,n,r){n&&!r&&e(t),Vu(t,s=>{hR(s,e,!0,r)}),n&&r&&e(t)}function QU(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ga(t){return new Ye(t.parent===null?t.name:Ga(t.parent)+"/"+t.name)}function cd(t){t.parent!==null&&YU(t.parent,t.name,t)}function YU(t,e,n){const r=zU(n),s=wr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,cd(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,cd(t))}/**
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
 */const XU=/[\[\].#$\/\u0000-\u001F\u007F]/,JU=/[\[\].#$\u0000-\u001F\u007F]/,Vh=10*1024*1024,fR=function(t){return typeof t=="string"&&t.length!==0&&!XU.test(t)},ZU=function(t){return typeof t=="string"&&t.length!==0&&!JU.test(t)},e4=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ZU(t)},dR=function(t,e,n){const r=n instanceof Ye?new D2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ys(r));if(typeof e=="function")throw new Error(t+"contains a function "+ys(r)+" with contents = "+e.toString());if(fb(e))throw new Error(t+"contains "+e.toString()+" "+ys(r));if(typeof e=="string"&&e.length>Vh/3&&du(e)>Vh)throw new Error(t+"contains a string greater than "+Vh+" utf8 bytes "+ys(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(En(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!fR(o)))throw new Error(t+" contains an invalid key ("+o+") "+ys(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);M2(r,o),dR(t,a,r),x2(r)}),s&&i)throw new Error(t+' contains ".value" child '+ys(r)+" in addition to actual children.")}},t4=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!fR(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!e4(n))throw new Error(U1(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class n4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function r4(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!xb(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Gs(t,e,n){r4(t,n),s4(t,r=>An(r,e)||An(e,r))}function s4(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(i4(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function i4(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();qo&&Nt("event: "+n.toString()),qa(r)}}}/**
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
 */const o4="repo_interrupt",a4=25;class l4{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new n4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bc(),this.transactionQueueTree_=new pm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function c4(t,e,n){if(t.stats_=tm(t.repoInfo_),t.forceRestClient_||r2())t.server_=new Uc(t.repoInfo_,(r,s,i,o)=>{Lv(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Vv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Et(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new pr(t.repoInfo_,e,(r,s,i,o)=>{Lv(t,r,s,i,o)},r=>{Vv(t,r)},r=>{h4(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=c2(t.repoInfo_,()=>new lU(t.stats_,t.server_)),t.infoData_=new rU,t.infoSyncTree_=new Mv({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=xu(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),gm(t,"connected",!1),t.serverSyncTree_=new Mv({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const u=o(a,l);Gs(t.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function u4(t){const n=t.infoData_.getNode(new Ye(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function pR(t){return jU({timestamp:u4(t)})}function Lv(t,e,n,r,s){t.dataUpdateCount++;const i=new Ye(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=vc(n,u=>Ot(u));o=HU(t.serverSyncTree_,i,l,s)}else{const l=Ot(n);o=$U(t.serverSyncTree_,i,l,s)}else if(r){const l=vc(n,u=>Ot(u));o=BU(t.serverSyncTree_,i,l)}else{const l=Ot(n);o=xu(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=ym(t,i)),Gs(t.eventQueue_,a,o)}function Vv(t,e){gm(t,"connected",e),e===!1&&d4(t)}function h4(t,e){En(e,(n,r)=>{gm(t,n,r)})}function gm(t,e,n){const r=new Ye("/.info/"+e),s=Ot(n);t.infoData_.updateSnapshot(r,s);const i=xu(t.infoSyncTree_,r,s);Gs(t.eventQueue_,r,i)}function f4(t){return t.nextWriteId_++}function d4(t){mR(t,"onDisconnectEvents");const e=pR(t),n=Bc();nd(t.onDisconnect_,Be(),(s,i)=>{const o=KU(s,i,t.serverSyncTree_,e);Hb(n,s,o)});let r=[];nd(n,Be(),(s,i)=>{r=r.concat(xu(t.serverSyncTree_,s,i));const o=_4(t,s);ym(t,o)}),t.onDisconnect_=Bc(),Gs(t.eventQueue_,Be(),r)}function p4(t){t.persistentConnection_&&t.persistentConnection_.interrupt(o4)}function mR(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Nt(n,...e)}function gR(t,e,n){return rR(t.serverSyncTree_,e,n)||xe.EMPTY_NODE}function _m(t,e=t.transactionQueueTree_){if(e||Fu(t,e),eo(e)){const n=yR(t,e);J(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&m4(t,Ga(e),n)}else uR(e)&&Vu(e,n=>{_m(t,n)})}function m4(t,e,n){const r=n.map(u=>u.currentWriteId),s=gR(t,e,r);let i=s;const o=s.hash();for(let u=0;u<n.length;u++){const h=n[u];J(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=_n(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,u=>{mR(t,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(hi(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();Fu(t,mm(t.transactionQueueTree_,e)),_m(t,t.transactionQueueTree_),Gs(t.eventQueue_,e,h);for(let p=0;p<f.length;p++)qa(f[p])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{hn("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}ym(t,e)}},o)}function ym(t,e){const n=_R(t,e),r=Ga(n),s=yR(t,n);return g4(t,s,r),r}function g4(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=_n(n,l.path);let h=!1,f;if(J(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,f=l.abortReason,s=s.concat(hi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=a4)h=!0,f="maxretry",s=s.concat(hi(t.serverSyncTree_,l.currentWriteId,!0));else{const p=gR(t,l.path,o);l.currentInputSnapshot=p;const g=e[a].update(p.val());if(g!==void 0){dR("transaction failed: Data returned ",g,l.path);let _=Ot(g);typeof g=="object"&&g!=null&&wr(g,".priority")||(_=_.updatePriority(p.getPriority()));const S=l.currentWriteId,L=pR(t),k=GU(_,p,L);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=k,l.currentWriteId=f4(t),o.splice(o.indexOf(S),1),s=s.concat(UU(t.serverSyncTree_,l.path,k,l.currentWriteId,l.applyLocally)),s=s.concat(hi(t.serverSyncTree_,S,!0))}else h=!0,f="nodata",s=s.concat(hi(t.serverSyncTree_,l.currentWriteId,!0))}Gs(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Fu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)qa(r[a]);_m(t,t.transactionQueueTree_)}function _R(t,e){let n,r=t.transactionQueueTree_;for(n=Ae(e);n!==null&&eo(r)===void 0;)r=mm(r,n),e=ze(e),n=Ae(e);return r}function yR(t,e){const n=[];return vR(t,e,n),n.sort((r,s)=>r.order-s.order),n}function vR(t,e,n){const r=eo(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);Vu(e,s=>{vR(t,s,n)})}function Fu(t,e){const n=eo(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,cR(e,n.length>0?n:void 0)}Vu(e,r=>{Fu(t,r)})}function _4(t,e){const n=Ga(_R(t,e)),r=mm(t.transactionQueueTree_,e);return QU(r,s=>{Fh(t,s)}),Fh(t,r),hR(r,s=>{Fh(t,s)}),n}function Fh(t,e){const n=eo(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(J(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(J(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(hi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?cR(e,void 0):n.length=i+1,Gs(t.eventQueue_,Ga(e),s);for(let o=0;o<r.length;o++)qa(r[o])}}/**
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
 */function y4(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function v4(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):hn(`Invalid query segment '${n}' in query '${t}'`)}return e}const Fv=function(t,e){const n=E4(t),r=n.namespace;n.domain==="firebase.com"&&Ls(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ls("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||QF();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new o2(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new Ye(n.pathString)}},E4=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(s=y4(t.substring(h,f)));const p=v4(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),i=r}"ns"in p&&(i=p.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */class vm{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return Ie(this._path)?null:Ob(this._path)}get ref(){return new to(this._repo,this._path)}get _queryIdentifier(){const e=Iv(this._queryParams),n=Zp(e);return n==="{}"?"default":n}get _queryObject(){return Iv(this._queryParams)}isEqual(e){if(e=_t(e),!(e instanceof vm))return!1;const n=this._repo===e._repo,r=xb(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+O2(this._path)}}class to extends vm{constructor(e,n){super(e,n,new im,!1)}get parent(){const e=Mb(this._path);return e===null?null:new to(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}VU(to);FU(to);/**
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
 */const T4="FIREBASE_DATABASE_EMULATOR_HOST",ud={};let w4=!1;function I4(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||Ls("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Nt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Fv(i,s),a=o.repoInfo,l;typeof process<"u"&&sv&&(l=sv[T4]),l?(i=`http://${l}?ns=${a.namespace}`,o=Fv(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new i2(t.name,t.options,e);t4("Invalid Firebase Database URL",o),Ie(o.path)||Ls("Database URL must point to the root of a Firebase Database (not including a child path).");const h=R4(a,t,u,new s2(t.name,n));return new A4(h,t)}function b4(t,e){const n=ud[e];(!n||n[t.key]!==t)&&Ls(`Database ${e}(${t.repoInfo_}) has already been deleted.`),p4(t),delete n[t.key]}function R4(t,e,n,r){let s=ud[e.name];s||(s={},ud[e.name]=s);let i=s[t.toURLString()];return i&&Ls("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new l4(t,w4,n,r),s[t.toURLString()]=i,i}class A4{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(c4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new to(this._repo,Be())),this._rootInternal}_delete(){return this._rootInternal!==null&&(b4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ls("Cannot call "+e+" on a deleted database.")}}/**
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
 */function C4(t){jF(os),Hn(new Nn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return I4(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),cn(iv,ov,t),cn(iv,ov,"esm2017")}pr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};C4();/**
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
 */const ER="firebasestorage.googleapis.com",S4="storageBucket",P4=2*60*1e3,k4=10*60*1e3;/**
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
 */class Qn extends zn{constructor(e,n,r=0){super(Uh(e),`Firebase Storage: ${n} (${Uh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Uh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Kn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Kn||(Kn={}));function Uh(t){return"storage/"+t}function N4(){const t="An unknown error occurred, please check the error payload for server response.";return new Qn(Kn.UNKNOWN,t)}function O4(){return new Qn(Kn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function D4(){return new Qn(Kn.CANCELED,"User canceled the upload/download.")}function M4(t){return new Qn(Kn.INVALID_URL,"Invalid URL '"+t+"'.")}function x4(t){return new Qn(Kn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Uv(t){return new Qn(Kn.INVALID_ARGUMENT,t)}function TR(){return new Qn(Kn.APP_DELETED,"The Firebase app was deleted.")}function L4(t){return new Qn(Kn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Cn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Cn.makeFromUrl(e,n)}catch{return new Cn(e,"")}if(r.path==="")return r;throw x4(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(O){O.path_=decodeURIComponent(O.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${s}/o${p}`,"i"),_={bucket:1,path:3},I=n===ER?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",L=new RegExp(`^https?://${I}/${s}/${S}`,"i"),R=[{regex:a,indices:l,postModify:i},{regex:g,indices:_,postModify:u},{regex:L,indices:{bucket:1,path:2},postModify:u}];for(let O=0;O<R.length;O++){const x=R[O],D=x.regex.exec(e);if(D){const T=D[x.indices.bucket];let y=D[x.indices.path];y||(y=""),r=new Cn(T,y),x.postModify(r);break}}if(r==null)throw M4(e);return r}}class V4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function F4(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...S){u||(u=!0,e.apply(null,S))}function f(S){s=setTimeout(()=>{s=null,t(g,l())},S)}function p(){i&&clearTimeout(i)}function g(S,...L){if(u){p();return}if(S){p(),h.call(null,S,...L);return}if(l()||o){p(),h.call(null,S,...L);return}r<64&&(r*=2);let R;a===1?(a=2,R=0):R=(r+Math.random())*1e3,f(R)}let _=!1;function I(S){_||(_=!0,p(),!u&&(s!==null?(S||(a=2),clearTimeout(s),f(0)):S||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,I(!0)},n),I}function U4(t){t(!1)}/**
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
 */function B4(t){return t!==void 0}function Bv(t,e,n,r){if(r<e)throw Uv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Uv(`Invalid value for '${t}'. Expected ${n} or less.`)}function $4(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Wc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Wc||(Wc={}));/**
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
 */function H4(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class j4{constructor(e,n,r,s,i,o,a,l,u,h,f,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,_)=>{this.resolve_=g,this.reject_=_,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ol(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Wc.NO_ERROR,l=i.getStatus();if(!a||H4(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Wc.ABORT;r(!1,new Ol(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ol(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());B4(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=N4();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?TR():D4();o(l)}else{const l=O4();o(l)}};this.canceled_?n(!1,new Ol(!1,null,!0)):this.backoffId_=F4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&U4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ol{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function W4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function q4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function K4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function G4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function z4(t,e,n,r,s,i,o=!0){const a=$4(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return K4(u,e),W4(u,n),q4(u,i),G4(u,r),new j4(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function Q4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Y4(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class qc{constructor(e,n){this._service=e,n instanceof Cn?this._location=n:this._location=Cn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new qc(e,n)}get root(){const e=new Cn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Y4(this._location.path)}get storage(){return this._service}get parent(){const e=Q4(this._location.path);if(e===null)return null;const n=new Cn(this._location.bucket,e);return new qc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw L4(e)}}function $v(t,e){const n=e==null?void 0:e[S4];return n==null?null:Cn.makeFromBucketSpec(n,t)}class X4{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ER,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=P4,this._maxUploadRetryTime=k4,this._requests=new Set,s!=null?this._bucket=Cn.makeFromBucketSpec(s,this._host):this._bucket=$v(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Cn.makeFromBucketSpec(this._url,e):this._bucket=$v(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Bv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Bv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qc(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new V4(TR());{const o=z4(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Hv="@firebase/storage",jv="0.13.1";/**
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
 */const J4="storage";function Z4(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new X4(n,r,s,e,os)}function eB(){Hn(new Nn(J4,Z4,"PUBLIC").setMultipleInstances(!0)),cn(Hv,jv,""),cn(Hv,jv,"esm2017")}eB();const Bh=new WeakMap;function wR(t,e){return Bh.has(e)||Bh.set(e,{f:{},r:{},s:{},u:{}}),Bh.get(e)}function tB(t,e,n,r){if(!t)return n;const[s,i]=IR(t);if(!s)return n;const o=wR(void 0,r)[s]||{},a=e||i;return a&&a in o?o[a]:n}function nB(t,e,n,r){if(!t)return;const[s,i]=IR(t);if(!s)return;const o=wR(void 0,r)[s],a=e||i;if(a)return n.then(l=>{o[a]=l}).catch(Vn),a}function IR(t){return OF(t)||DF(t)?["f",t.path]:MF(t)?["r",t.toString()]:xF(t)?["s",t.toString()]:[]}const $h=new WeakMap;function rB(t,e,n){const r=Ha();$h.has(r)||$h.set(r,new Map);const s=$h.get(r),i=nB(e,n,t,r);return i&&s.set(i,t),i?()=>s.delete(i):Vn}const sB={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function hd(t,e,n,r){if(!kF(t))return[t,{}];const s=[{},{}],i=Object.keys(n).reduce((a,l)=>{const u=n[l];return a[u.path]=u.data(),a},{});function o(a,l,u,h){l=l||{};const[f,p]=h;Object.getOwnPropertyNames(a).forEach(g=>{const _=Object.getOwnPropertyDescriptor(a,g);_&&!_.enumerable&&Object.defineProperty(f,g,_)});for(const g in a){const _=a[g];if(_==null||_ instanceof Date||_ instanceof st||_ instanceof Fa)f[g]=_;else if(Jp(_)){const I=u+g;f[g]=I in n?l[g]:_.path,p[I]=_.converter?_:_.withConverter(r.converter)}else if(Array.isArray(_)){f[g]=Array(_.length);for(let I=0;I<_.length;I++){const S=_[I];S&&S.path in i&&(f[g][I]=i[S.path])}o(_,l[g]||f[g],u+g+".",[f[g],p])}else qs(_)?(f[g]={},o(_,l[g],u+g+".",[f[g],p])):f[g]=_}}return o(t,e,"",s),s}const Em={reset:!1,wait:!0,maxRefDepth:2,converter:sB,snapshotOptions:{serverTimestamps:"estimate"}};function Kc(t){for(const e in t)t[e].unsub()}function fd(t,e,n,r,s,i,o,a,l){const[u,h]=hd(r.data(t.snapshotOptions),Xp(e,n),s,t);i.set(e,n,u),dd(t,e,n,s,h,i,o,a,l)}function iB({ref:t,target:e,path:n,depth:r,resolve:s,reject:i,ops:o},a){const l=Object.create(null);let u=Vn;return a.once?fI(t).then(h=>{h.exists()?fd(a,e,n,h,l,o,r,s,i):(o.set(e,n,null),s())}).catch(i):u=Mp(t,h=>{h.exists()?fd(a,e,n,h,l,o,r,s,i):(o.set(e,n,null),s())},i),()=>{u(),Kc(l)}}function dd(t,e,n,r,s,i,o,a,l){const u=Object.keys(s);if(Object.keys(r).filter(I=>u.indexOf(I)<0).forEach(I=>{r[I].unsub(),delete r[I]}),!u.length||++o>t.maxRefDepth)return a(n);let f=0;const p=u.length,g=Object.create(null);function _(I){I in g&&++f>=p&&a(n)}u.forEach(I=>{const S=r[I],L=s[I],k=`${n}.${I}`;if(g[k]=!0,S)if(S.path!==L.path)S.unsub();else return;r[I]={data:()=>Xp(e,k),unsub:iB({ref:L,target:e,path:k,depth:o,ops:i,resolve:_.bind(null,k),reject:l},t),path:L.path}})}function oB(t,e,n,r,s,i){const o=Object.assign({},Em,i),{snapshotListenOptions:a,snapshotOptions:l,wait:u,once:h}=o,f="value";let p=Qe(u?[]:t.value);u||n.set(t,f,[]);const g=r;let _,I=Vn;const S=[],L={added:({newIndex:R,doc:O})=>{S.splice(R,0,Object.create(null));const x=S[R],[D,T]=hd(O.data(l),void 0,x,o);n.add(nr(p),R,D),dd(o,p,`${f}.${R}`,x,T,n,0,r.bind(null,O),s)},modified:({oldIndex:R,newIndex:O,doc:x})=>{const D=nr(p),T=S[R],y=D[R],[v,w]=hd(x.data(l),y,T,o);S.splice(O,0,T),n.remove(D,R),n.add(D,O,v),dd(o,p,`${f}.${O}`,T,w,n,0,r,s)},removed:({oldIndex:R})=>{const O=nr(p);n.remove(O,R),Kc(S.splice(R,1)[0])}};function k(R){const O=R.docChanges(a);if(!_&&O.length){_=!0;let x=0;const D=O.length,T=Object.create(null);for(let y=0;y<D;y++)T[O[y].doc.id]=!0;r=y=>{y&&y.id in T&&++x>=D&&(u&&(n.set(t,f,nr(p)),p=t),g(nr(p)),r=Vn)}}O.forEach(x=>{L[x.type](x)}),O.length||(u&&(n.set(t,f,nr(p)),p=t),r(nr(p)))}return h?qM(e).then(k).catch(s):I=Mp(e,k,s),R=>{if(I(),R){const O=typeof R=="function"?R():[];n.set(t,f,O)}S.forEach(Kc)}}function aB(t,e,n,r,s,i){const o=Object.assign({},Em,i),a="value",l=Object.create(null);r=LF(r,()=>Xp(t,a));let u=Vn;function h(f){f.exists()?fd(o,t,a,f,l,n,0,r,s):(n.set(t,a,null),r(null))}return o.once?fI(e).then(h).catch(s):u=Mp(e,h,s),f=>{if(u(),f){const p=typeof f=="function"?f():null;n.set(t,a,p)}Kc(l)}}const Wv=Symbol();function lB(t,e){let n=Vn;const r=Object.assign({},Em,e),s=nr(t),i=r.target||Qe();FF()&&(r.once=!0);const o=tB(s,r.ssrKey,Wv,Ha()),a=o!==Wv;a&&(i.value=o);let l=!a;const u=Qe(!1),h=Qe(),f=Ht(),p=wd();let g=Vn;function _(){let L=nr(t);const k=new Promise((R,O)=>{if(n(r.reset),!L)return n=Vn,R(null);u.value=l,l=!0,L.converter||(L=L.withConverter(r.converter)),n=(Jp(L)?aB:oB)(i,L,cB,R,O,r)}).catch(R=>(f.value===k&&(h.value=R),Promise.reject(R))).finally(()=>{f.value===k&&(u.value=!1)});f.value=k}let I=Vn;(It(t)||typeof t=="function")&&(I=jt(t,_)),_(),s&&(g=rB(f.value,s,r.ssrKey)),p&&xE(S);function S(L=r.reset){I(),g(),n(L)}return Object.defineProperties(i,{error:{get:()=>h},data:{get:()=>i},pending:{get:()=>u},promise:{get:()=>f},stop:{get:()=>S}})}const cB={set:(t,e,n)=>SF(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function vj(t,e){return lB(t,{target:Qe([]),...e})}function Ej(t){return VM(Ha(t))}const Tm=Symbol("VueFireAuth");function uB({dependencies:t,initialUser:e}){return(n,r)=>{const[s,i]=hB(n,r,e,t);HF(s,i)}}function hB(t,e,n,r,s=FL(t,r)){const i=UF(t,e).run(()=>Qe(n));return ab.set(t,i),e.provide(Tm,s),[i,s]}function Tj(t){return CF?Fe(Tm):null}function fB(t,{firebaseApp:e,modules:n=[]}){t.provide(ob,e);for(const r of n)r(e,t)}const dB=()=>tt().$firebaseApp,pB=t=>$F(dB().name),mB=async(t,e)=>{let n,r;const s=([n,r]=Pi(()=>pB()),n=await n,r(),n);if(console.log("11111111111"),console.log(s),s&&t.name==="login")return m_("/");if(!s&&t.name!=="login")return m_("/login")},gB=async t=>{let e,n;const r=([e,n]=Pi(()=>Xd(t.path)),e=await e,n(),e);if(r.redirect)return Hs(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},_B=[cL,mB,gB],Qo={};function yB(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),a_(h,"")}const a=a_(r,t),l=!n||EP(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const vB=Wt({name:"nuxt:router",enforce:"pre",async setup(t){var S,L;let e,n,r=Aa().app.baseURL;sn.hashMode&&!r.includes("#")&&(r+="#");const s=((S=sn.history)==null?void 0:S.call(sn,r))??(sn.hashMode?Cx(r):TI(r)),i=((L=sn.routes)==null?void 0:L.call(sn,xy))??xy;let o;const a=Jx({...sn,scrollBehavior:(k,R,O)=>{if(R===wn){o=O;return}if(sn.scrollBehavior){if(a.options.scrollBehavior=sn.scrollBehavior,"scrollRestoration"in window.history){const x=a.beforeEach(()=>{x(),window.history.scrollRestoration="manual"})}return sn.scrollBehavior(k,wn,o||O)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=Ht(a.currentRoute.value);a.afterEach((k,R)=>{l.value=R}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=yB(r,window.location,t.payload.path),h=Ht(a.currentRoute.value),f=()=>{h.value=a.currentRoute.value};t.hook("page:finish",f),a.afterEach((k,R)=>{var O,x,D,T;((x=(O=k.matched[0])==null?void 0:O.components)==null?void 0:x.default)===((T=(D=R.matched[0])==null?void 0:D.components)==null?void 0:T.default)&&f()});const p={};for(const k in h.value)Object.defineProperty(p,k,{get:()=>h.value[k]});t._route=ir(p),t._middleware=t._middleware||{global:[],named:{}};const g=lu();a.afterEach(async(k,R,O)=>{delete t._processingMiddleware,!t.isHydrating&&g.value&&await t.runWithContext(_k),O&&await t.callHook("page:loading:end"),k.matched.length===0&&await t.runWithContext(()=>ci(gf({statusCode:404,fatal:!1,statusMessage:`Page not found: ${k.fullPath}`,data:{path:k.fullPath}})))});try{[e,n]=Pi(()=>a.isReady()),await e,n()}catch(k){[e,n]=Pi(()=>t.runWithContext(()=>ci(k))),await e,n()}const _=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;f();const I=t.payload.state._layout;return a.beforeEach(async(k,R)=>{var O;await t.callHook("page:loading:start"),k.meta=Dt(k.meta),t.isHydrating&&I&&!Jr(k.meta.layout)&&(k.meta.layout=I),t._processingMiddleware=!0;{const x=new Set([..._B,...t._middleware.global]);for(const D of k.matched){const T=D.meta.middleware;if(T)for(const y of Fp(T))x.add(y)}{const D=await t.runWithContext(()=>Xd(k.path));if(D.appMiddleware)for(const T in D.appMiddleware)D.appMiddleware[T]?x.add(T):x.delete(T)}for(const D of x){const T=typeof D=="string"?t._middleware.named[D]||await((O=Qo[D])==null?void 0:O.call(Qo).then(v=>v.default||v)):D;if(!T)throw new Error(`Unknown route middleware: '${D}'.`);const y=await t.runWithContext(()=>T(k,R));if(!t.payload.serverRendered&&t.isHydrating&&(y===!1||y instanceof Error)){const v=y||gf({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>ci(v)),!1}if(y!==!0&&(y||y===!1))return y}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),t.hooks.hookOnce("app:created",async()=>{try{"name"in _&&(_.name=void 0),await a.replace({..._,force:!0}),a.options.scrollBehavior=sn.scrollBehavior}catch(k){await t.runWithContext(()=>ci(k))}}),{provide:{router:a}}}}),qv=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),wj=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),wm=t=>{const e=tt();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{qv(()=>t())}):qv(()=>t())},EB=Wt({name:"nuxt:payload",setup(t){fn().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await w_(e.path);r&&Object.assign(t.static.data,r.data)}),wm(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await w_(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(uu,1e3)})}}),TB=Wt(()=>{const t=fn();wm(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),wB=Wt(t=>{let e;async function n(){const r=await uu();e&&clearTimeout(e),e=setTimeout(n,f_);try{const s=await $fetch(Qd("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}wm(()=>{e=setTimeout(n,f_)})});function IB(t={}){const e=t.path||window.location.pathname;let n={};try{n=hc(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:tt().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const bB=Wt({name:"nuxt:chunk-reload",setup(t){const e=fn(),n=Aa(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:Gd(n.app.baseURL,i.fullPath);IB({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}});/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const RB=Symbol();var Kv;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Kv||(Kv={}));function AB(){const t=Zc(!0),e=t.run(()=>Qe({}));let n=[],r=[];const s=tc({install(i){s._a=i,i.provide(RB,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!eF?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const CB=Wt({name:"pinia",setup(t){const e=AB();return t.vueApp.use(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}}),SB=Wt({name:"nuxt:global-components"}),jr={default:()=>Vr(()=>import("./CskZQWo0.js"),__vite__mapDeps([19,16,3,4,17,13,20]),import.meta.url).then(t=>t.default||t)},PB=Wt({name:"nuxt:prefetch",setup(t){const e=fn();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof jr[r]=="function"&&await jr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(Hs(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=Fp(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Qo[o]=="function"&&Qo[o]();s&&typeof jr[s]=="function"&&jr[s]()})}}),kB=Wt(()=>({provide:{firebaseApp:Bw(Aa().public.vuefire.config)}})),NB=Wt(t=>{const e=t.$firebaseApp;return uB({initialUser:t.payload.vuefireUser,dependencies:{errorMap:PI,persistence:[oV,GL],popupRedirectResolver:zV}})(e,t.vueApp),{provide:{firebaseAuth:t.vueApp.runWithContext(()=>Fe(Tm))}}}),OB=Wt(t=>{const e=t.$firebaseApp;t.vueApp.use(fB,{firebaseApp:e})});function DB(t,e){let n;function r(){n=Zc(),n.run(()=>e.length?e(()=>{n==null||n.stop(),r()}):e())}jt(t,s=>{s&&!n?r():s||(n==null||n.stop(),n=void 0)},{immediate:!0}),xE(()=>{n==null||n.stop()})}const Xt=typeof window<"u",Ij=Xt&&"IntersectionObserver"in window,MB=Xt&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function xB(t,e,n){const r=e.length-1;if(r<0)return t===void 0?n:t;for(let s=0;s<r;s++){if(t==null)return n;t=t[e[s]]}return t==null||t[e[r]]===void 0?n:t[e[r]]}function LB(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(r=>LB(t[r],e[r]))}function Gv(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),xB(t,e.split("."),n))}function bR(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,r)=>e+r)}function Dl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function zv(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function RR(t){if(t&&"$el"in t){const e=t.$el;return(e==null?void 0:e.nodeType)===Node.TEXT_NODE?e.nextElementSibling:e}return t}const bj=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function Rj(t){return Object.keys(t)}function Hh(t,e){return e.every(n=>t.hasOwnProperty(n))}function VB(t,e){const n={},r=new Set(Object.keys(t));for(const s of e)r.has(s)&&(n[s]=t[s]);return n}function Qv(t,e,n){const r=Object.create(null),s=Object.create(null);for(const i in t)e.some(o=>o instanceof RegExp?o.test(i):o===i)&&!(n!=null&&n.some(o=>o===i))?r[i]=t[i]:s[i]=t[i];return[r,s]}function FB(t,e){const n={...t};return e.forEach(r=>delete n[r]),n}function Aj(t,e){const n={};return e.forEach(r=>n[r]=t[r]),n}const AR=/^on[^a-z]/,Cj=t=>AR.test(t),UB=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"];function Sj(t){const[e,n]=Qv(t,[AR]),r=FB(e,UB),[s,i]=Qv(n,["class","style","id",/^data-/]);return Object.assign(s,e),Object.assign(i,r),[s,i]}function Pj(t){return t==null?[]:Array.isArray(t)?t:[t]}function CR(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function kj(t){const e=t.toString().trim();return e.includes(".")?e.length-e.indexOf(".")-1:0}function Yv(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function Xv(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function BB(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let r=0;for(;r<t.length;)n.push(t.substr(r,e)),r+=e;return n}function Lt(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const s in t)r[s]=t[s];for(const s in e){const i=t[s],o=e[s];if(zv(i)&&zv(o)){r[s]=Lt(i,o,n);continue}if(Array.isArray(i)&&Array.isArray(o)&&n){r[s]=n(i,o);continue}r[s]=o}return r}function $B(t){return t.map(e=>e.type===vt?$B(e.children):e).flat()}function ks(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(ks.cache.has(t))return ks.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return ks.cache.set(t,e),e}ks.cache=new Map;function Oo(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>Oo(t,n)).flat(1);if(e.suspense)return Oo(t,e.ssContent);if(Array.isArray(e.children))return e.children.map(n=>Oo(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return Oo(t,e.component.subTree).flat(1)}return[]}function Nj(t){const e=Dt({}),n=pe(t);return su(()=>{for(const r in n.value)e[r]=n.value[r]},{flush:"sync"}),XE(e)}function Oj(t,e){return t.includes(e)}function Dj(t){return t[2].toLowerCase()+t.slice(3)}const Mj=()=>[Function,Array];function xj(t,e){return e="on"+Ea(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}function Lj(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(Array.isArray(t))for(const s of t)s(...n);else typeof t=="function"&&t(...n)}function Vj(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(r=>`${r}${e?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...t.querySelectorAll(n)]}function Fj(t,e){if(!(Xt&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${e})`)))return null;try{return!!t&&t.matches(e)}catch{return null}}function Uj(t,e){if(!Xt||t===0)return e(),()=>{};const n=window.setTimeout(e,t);return()=>window.clearTimeout(n)}function HB(){const t=Ht(),e=n=>{t.value=n};return Object.defineProperty(e,"value",{enumerable:!0,get:()=>t.value,set:n=>t.value=n}),Object.defineProperty(e,"el",{enumerable:!0,get:()=>RR(t.value)}),e}const ni=2.4,Jv=.2126729,Zv=.7151522,eE=.072175,jB=.55,WB=.58,qB=.57,KB=.62,Ml=.03,tE=1.45,GB=5e-4,zB=1.25,QB=1.25,nE=.078,rE=12.82051282051282,xl=.06,sE=.001;function iE(t,e){const n=(t.r/255)**ni,r=(t.g/255)**ni,s=(t.b/255)**ni,i=(e.r/255)**ni,o=(e.g/255)**ni,a=(e.b/255)**ni;let l=n*Jv+r*Zv+s*eE,u=i*Jv+o*Zv+a*eE;if(l<=Ml&&(l+=(Ml-l)**tE),u<=Ml&&(u+=(Ml-u)**tE),Math.abs(u-l)<GB)return 0;let h;if(u>l){const f=(u**jB-l**WB)*zB;h=f<sE?0:f<nE?f-f*rE*xl:f-xl}else{const f=(u**KB-l**qB)*QB;h=f>-sE?0:f>-nE?f-f*rE*xl:f+xl}return h*100}const Gc=.20689655172413793,YB=t=>t>Gc**3?Math.cbrt(t):t/(3*Gc**2)+4/29,XB=t=>t>Gc?t**3:3*Gc**2*(t-4/29);function SR(t){const e=YB,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function PR(t){const e=XB,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const JB=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],ZB=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,e$=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],t$=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function kR(t){const e=Array(3),n=ZB,r=JB;for(let s=0;s<3;++s)e[s]=Math.round(CR(n(r[s][0]*t[0]+r[s][1]*t[1]+r[s][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Im(t){let{r:e,g:n,b:r}=t;const s=[0,0,0],i=t$,o=e$;e=i(e/255),n=i(n/255),r=i(r/255);for(let a=0;a<3;++a)s[a]=o[a][0]*e+o[a][1]*n+o[a][2]*r;return s}function n$(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function Bj(t){return n$(t)&&!/^((rgb|hsl)a?\()?var\(--/.test(t)}const oE=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,r$={rgb:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),rgba:(t,e,n,r)=>({r:t,g:e,b:n,a:r}),hsl:(t,e,n,r)=>aE({h:t,s:e,l:n,a:r}),hsla:(t,e,n,r)=>aE({h:t,s:e,l:n,a:r}),hsv:(t,e,n,r)=>ga({h:t,s:e,v:n,a:r}),hsva:(t,e,n,r)=>ga({h:t,s:e,v:n,a:r})};function hr(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&oE.test(t)){const{groups:e}=t.match(oE),{fn:n,values:r}=e,s=r.split(/,\s*/).map(i=>i.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(i)/100:parseFloat(i));return r$[n](...s)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),i$(e)}else if(typeof t=="object"){if(Hh(t,["r","g","b"]))return t;if(Hh(t,["h","s","l"]))return ga(NR(t));if(Hh(t,["h","s","v"]))return ga(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function ga(t){const{h:e,s:n,v:r,a:s}=t,i=a=>{const l=(a+e/60)%6;return r-r*n*Math.max(Math.min(l,4-l,1),0)},o=[i(5),i(3),i(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:s}}function aE(t){return ga(NR(t))}function NR(t){const{h:e,s:n,l:r,a:s}=t,i=r+n*Math.min(r,1-r),o=i===0?0:2-2*r/i;return{h:e,s:o,v:i,a:s}}function Ll(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function s$(t){let{r:e,g:n,b:r,a:s}=t;return`#${[Ll(e),Ll(n),Ll(r),s!==void 0?Ll(Math.round(s*255)):""].join("")}`}function i$(t){t=o$(t);let[e,n,r,s]=BB(t,2).map(i=>parseInt(i,16));return s=s===void 0?s:s/255,{r:e,g:n,b:r,a:s}}function o$(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=Yv(Yv(t,6),8,"F")),t}function a$(t,e){const n=SR(Im(t));return n[0]=n[0]+e*10,kR(PR(n))}function l$(t,e){const n=SR(Im(t));return n[0]=n[0]-e*10,kR(PR(n))}function c$(t){const e=hr(t);return Im(e)[1]}function u$(t){const e=Math.abs(iE(hr(0),hr(t)));return Math.abs(iE(hr(16777215),hr(t)))>Math.min(e,50)?"#fff":"#000"}function ls(t,e){return n=>Object.keys(t).reduce((r,s)=>{const o=typeof t[s]=="object"&&t[s]!=null&&!Array.isArray(t[s])?t[s]:{type:t[s]};return n&&s in n?r[s]={...o,default:n[s]}:r[s]=o,e&&!r[s].source&&(r[s].source=e),r},{})}const h$=ls({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function Yn(t,e){const n=qi();if(!n)throw new Error(`[Vuetify] ${t} must be called from inside a setup function`);return n}function f$(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=Yn(t).type;return ks((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let OR=0,Zl=new WeakMap;function bm(){const t=Yn("getUid");if(Zl.has(t))return Zl.get(t);{const e=OR++;return Zl.set(t,e),e}}bm.reset=()=>{OR=0,Zl=new WeakMap};function d$(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yn("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}const ji=Symbol.for("vuetify:defaults");function p$(t){return Qe(t)}function Rm(){const t=Fe(ji);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function $j(t,e){const n=Rm(),r=Qe(t),s=pe(()=>{if(Oe(e==null?void 0:e.disabled))return n.value;const o=Oe(e==null?void 0:e.scoped),a=Oe(e==null?void 0:e.reset),l=Oe(e==null?void 0:e.root);if(r.value==null&&!(o||a||l))return n.value;let u=Lt(r.value,{prev:n.value});if(o)return u;if(a||l){const h=Number(a||1/0);for(let f=0;f<=h&&!(!u||!("prev"in u));f++)u=u.prev;return u&&typeof l=="string"&&l in u&&(u=Lt(Lt(u,{prev:u}),u[l])),u}return u.prev?Lt(u.prev,u):u});return vn(ji,s),s}function m$(t,e){var n,r;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((r=t.props)==null?void 0:r[ks(e)])<"u"}function g$(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Rm();const r=Yn("useDefaults");if(e=e??r.type.name??r.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const s=pe(()=>{var l;return(l=n.value)==null?void 0:l[t._as??e]}),i=new Proxy(t,{get(l,u){var f,p,g,_,I,S,L;const h=Reflect.get(l,u);return u==="class"||u==="style"?[(f=s.value)==null?void 0:f[u],h].filter(k=>k!=null):typeof u=="string"&&!m$(r.vnode,u)?((p=s.value)==null?void 0:p[u])!==void 0?(g=s.value)==null?void 0:g[u]:((I=(_=n.value)==null?void 0:_.global)==null?void 0:I[u])!==void 0?(L=(S=n.value)==null?void 0:S.global)==null?void 0:L[u]:h:h}}),o=Ht();su(()=>{if(s.value){const l=Object.entries(s.value).filter(u=>{let[h]=u;return h.startsWith(h[0].toUpperCase())});o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function a(){const l=d$(ji,r);vn(ji,pe(()=>o.value?Lt((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:i,provideSubDefaults:a}}function za(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=ls(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(r){return VB(r,e)},t.props._as=String,t.setup=function(r,s){const i=Rm();if(!i.value)return t._setup(r,s);const{props:o,provideSubDefaults:a}=g$(r,r._as??t.name,i),l=t._setup(o,s);return a(),l}}return t}function DR(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?za:Gn)(e)}function _$(t){const e=Yn("useRender");e.render=t}function y$(t,e,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const i=Yn("useProxiedModel"),o=Qe(t[e]!==void 0?t[e]:n),a=ks(e),u=pe(a!==e?()=>{var f,p,g,_;return t[e],!!(((f=i.vnode.props)!=null&&f.hasOwnProperty(e)||(p=i.vnode.props)!=null&&p.hasOwnProperty(a))&&((g=i.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${e}`)||(_=i.vnode.props)!=null&&_.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var f,p;return t[e],!!((f=i.vnode.props)!=null&&f.hasOwnProperty(e)&&((p=i.vnode.props)!=null&&p.hasOwnProperty(`onUpdate:${e}`)))});DB(()=>!u.value,()=>{jt(()=>t[e],f=>{o.value=f})});const h=pe({get(){const f=t[e];return r(u.value?f:o.value)},set(f){const p=s(f),g=Se(u.value?t[e]:o.value);g===p||r(g)===f||(o.value=p,i==null||i.emit(`update:${e}`,p))}});return Object.defineProperty(h,"externalValue",{get:()=>u.value?t[e]:o.value}),h}const v$={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},lE="$vuetify.",cE=(t,e)=>t.replace(/\{(\d+)\}/g,(n,r)=>String(e[+r])),MR=(t,e,n)=>function(r){for(var s=arguments.length,i=new Array(s>1?s-1:0),o=1;o<s;o++)i[o-1]=arguments[o];if(!r.startsWith(lE))return cE(r,i);const a=r.replace(lE,""),l=t.value&&n.value[t.value],u=e.value&&n.value[e.value];let h=Gv(l,a,null);return h||(`${r}${t.value}`,h=Gv(u,a,null)),h||(h=r),typeof h!="string"&&(h=r),cE(h,i)};function xR(t,e){return(n,r)=>new Intl.NumberFormat([t.value,e.value],r).format(n)}function jh(t,e,n){const r=y$(t,e,t[e]??n.value);return r.value=t[e]??n.value,jt(n,s=>{t[e]==null&&(r.value=n.value)}),r}function LR(t){return e=>{const n=jh(e,"locale",t.current),r=jh(e,"fallback",t.fallback),s=jh(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:r,messages:s,t:MR(n,r,s),n:xR(n,r),provide:LR({current:n,fallback:r,messages:s})}}}function E$(t){const e=Ht((t==null?void 0:t.locale)??"en"),n=Ht((t==null?void 0:t.fallback)??"en"),r=Qe({en:v$,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:r,t:MR(e,n,r),n:xR(e,n),provide:LR({current:e,fallback:n,messages:r})}}const zc=Symbol.for("vuetify:locale");function T$(t){return t.name!=null}function w$(t){const e=t!=null&&t.adapter&&T$(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:E$(t),n=b$(e,t);return{...e,...n}}function Hj(){const t=Fe(zc);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");return t}function I$(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function b$(t,e){const n=Qe((e==null?void 0:e.rtl)??I$()),r=pe(()=>n.value[t.current.value]??!1);return{isRtl:r,rtl:n,rtlClasses:pe(()=>`v-locale--is-${r.value?"rtl":"ltr"}`)}}function VR(){const t=Fe(zc);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const Uu={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function R$(t,e,n){const r=[];let s=[];const i=FR(t),o=UR(t),a=n??Uu[e.slice(-2).toUpperCase()]??0,l=(i.getDay()-a+7)%7,u=(o.getDay()-a+7)%7;for(let h=0;h<l;h++){const f=new Date(i);f.setDate(f.getDate()-(l-h)),s.push(f)}for(let h=1;h<=o.getDate();h++){const f=new Date(t.getFullYear(),t.getMonth(),h);s.push(f),s.length===7&&(r.push(s),s=[])}for(let h=1;h<7-u;h++){const f=new Date(o);f.setDate(f.getDate()+h),s.push(f)}return s.length>0&&r.push(s),r}function A$(t,e,n){const r=n??Uu[e.slice(-2).toUpperCase()]??0,s=new Date(t);for(;s.getDay()!==r;)s.setDate(s.getDate()-1);return s}function C$(t,e){const n=new Date(t),r=((Uu[e.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==r;)n.setDate(n.getDate()+1);return n}function FR(t){return new Date(t.getFullYear(),t.getMonth(),1)}function UR(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function S$(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const P$=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function BR(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(P$.test(t))return S$(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const uE=new Date(2e3,0,2);function k$(t,e){const n=e??Uu[t.slice(-2).toUpperCase()]??0;return bR(7).map(r=>{const s=new Date(uE);return s.setDate(uE.getDate()+n+r),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(s)})}function N$(t,e,n,r){const s=BR(t)??new Date,i=r==null?void 0:r[e];if(typeof i=="function")return i(s,e,n);let o={};switch(e){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=s.getDate(),l=new Intl.DateTimeFormat(n,{month:"long"}).format(s);return`${a} ${l}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(s.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=i??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(s)}function O$(t,e){const n=t.toJsDate(e),r=n.getFullYear(),s=Xv(String(n.getMonth()+1),2,"0"),i=Xv(String(n.getDate()),2,"0");return`${r}-${s}-${i}`}function D$(t){const[e,n,r]=t.split("-").map(Number);return new Date(e,n-1,r)}function M$(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function x$(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function L$(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function V$(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function F$(t,e){const n=new Date(t);return n.setDate(1),n.setMonth(n.getMonth()+e),n}function U$(t){return t.getFullYear()}function B$(t){return t.getMonth()}function $$(t){return t.getDate()}function H$(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function j$(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function W$(t){return t.getHours()}function q$(t){return t.getMinutes()}function K$(t){return new Date(t.getFullYear(),0,1)}function G$(t){return new Date(t.getFullYear(),11,31)}function z$(t,e){return Qc(t,e[0])&&X$(t,e[1])}function Q$(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function Qc(t,e){return t.getTime()>e.getTime()}function Y$(t,e){return Qc(pd(t),pd(e))}function X$(t,e){return t.getTime()<e.getTime()}function hE(t,e){return t.getTime()===e.getTime()}function J$(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function Z$(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function eH(t,e){return t.getFullYear()===e.getFullYear()}function tH(t,e,n){const r=new Date(t),s=new Date(e);switch(n){case"years":return r.getFullYear()-s.getFullYear();case"quarters":return Math.floor((r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12)/4);case"months":return r.getMonth()-s.getMonth()+(r.getFullYear()-s.getFullYear())*12;case"weeks":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60*24));case"hours":return Math.floor((r.getTime()-s.getTime())/(1e3*60*60));case"minutes":return Math.floor((r.getTime()-s.getTime())/(1e3*60));case"seconds":return Math.floor((r.getTime()-s.getTime())/1e3);default:return r.getTime()-s.getTime()}}function nH(t,e){const n=new Date(t);return n.setHours(e),n}function rH(t,e){const n=new Date(t);return n.setMinutes(e),n}function sH(t,e){const n=new Date(t);return n.setMonth(e),n}function iH(t,e){const n=new Date(t);return n.setDate(e),n}function oH(t,e){const n=new Date(t);return n.setFullYear(e),n}function pd(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),0,0,0,0)}function aH(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class lH{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return BR(e)}toJsDate(e){return e}toISO(e){return O$(this,e)}parseISO(e){return D$(e)}addMinutes(e,n){return M$(e,n)}addHours(e,n){return x$(e,n)}addDays(e,n){return L$(e,n)}addWeeks(e,n){return V$(e,n)}addMonths(e,n){return F$(e,n)}getWeekArray(e,n){return R$(e,this.locale,n?Number(n):void 0)}startOfWeek(e,n){return A$(e,this.locale,n?Number(n):void 0)}endOfWeek(e){return C$(e,this.locale)}startOfMonth(e){return FR(e)}endOfMonth(e){return UR(e)}format(e,n){return N$(e,n,this.locale,this.formats)}isEqual(e,n){return hE(e,n)}isValid(e){return Q$(e)}isWithinRange(e,n){return z$(e,n)}isAfter(e,n){return Qc(e,n)}isAfterDay(e,n){return Y$(e,n)}isBefore(e,n){return!Qc(e,n)&&!hE(e,n)}isSameDay(e,n){return J$(e,n)}isSameMonth(e,n){return Z$(e,n)}isSameYear(e,n){return eH(e,n)}setMinutes(e,n){return rH(e,n)}setHours(e,n){return nH(e,n)}setMonth(e,n){return sH(e,n)}setDate(e,n){return iH(e,n)}setYear(e,n){return oH(e,n)}getDiff(e,n,r){return tH(e,n,r)}getWeekdays(e){return k$(this.locale,e?Number(e):void 0)}getYear(e){return U$(e)}getMonth(e){return B$(e)}getDate(e){return $$(e)}getNextMonth(e){return H$(e)}getPreviousMonth(e){return j$(e)}getHours(e){return W$(e)}getMinutes(e){return q$(e)}startOfDay(e){return pd(e)}endOfDay(e){return aH(e)}startOfYear(e){return K$(e)}endOfYear(e){return G$(e)}}const cH=Symbol.for("vuetify:date-options"),fE=Symbol.for("vuetify:date-adapter");function uH(t,e){const n=Lt({adapter:lH,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:hH(n,e)}}function hH(t,e){const n=Dt(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return jt(e.current,r=>{n.locale=t.locale[r]??r??n.locale}),n}const jj=["sm","md","lg","xl","xxl"],md=Symbol.for("vuetify:display"),dE={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},fH=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:dE;return Lt(dE,t)};function pE(t){return Xt&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function mE(t){return Xt&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function gE(t){const e=Xt&&!t?window.navigator.userAgent:"ssr";function n(_){return!!e.match(_)}const r=n(/android/i),s=n(/iphone|ipad|ipod/i),i=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),u=n(/firefox/i),h=n(/opera/i),f=n(/win/i),p=n(/mac/i),g=n(/linux/i);return{android:r,ios:s,cordova:i,electron:o,chrome:a,edge:l,firefox:u,opera:h,win:f,mac:p,linux:g,touch:MB,ssr:e==="ssr"}}function dH(t,e){const{thresholds:n,mobileBreakpoint:r}=fH(t),s=Ht(mE(e)),i=Ht(gE(e)),o=Dt({}),a=Ht(pE(e));function l(){s.value=mE(),a.value=pE()}function u(){l(),i.value=gE()}return su(()=>{const h=a.value<n.sm,f=a.value<n.md&&!h,p=a.value<n.lg&&!(f||h),g=a.value<n.xl&&!(p||f||h),_=a.value<n.xxl&&!(g||p||f||h),I=a.value>=n.xxl,S=h?"xs":f?"sm":p?"md":g?"lg":_?"xl":"xxl",L=typeof r=="number"?r:n[r],k=a.value<L;o.xs=h,o.sm=f,o.md=p,o.lg=g,o.xl=_,o.xxl=I,o.smAndUp=!h,o.mdAndUp=!(h||f),o.lgAndUp=!(h||f||p),o.xlAndUp=!(h||f||p||g),o.smAndDown=!(p||g||_||I),o.mdAndDown=!(g||_||I),o.lgAndDown=!(_||I),o.xlAndDown=!I,o.name=S,o.height=s.value,o.width=a.value,o.mobile=k,o.mobileBreakpoint=r,o.platform=i.value,o.thresholds=n}),Xt&&window.addEventListener("resize",l,{passive:!0}),{...XE(o),update:u,ssr:!!e}}const Wj=ls({mobile:{type:Boolean,default:!1},mobileBreakpoint:[Number,String]},"display");function qj(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:f$();const n=Fe(md);if(!n)throw new Error("Could not find Vuetify display injection");const r=pe(()=>{if(t.mobile!=null)return t.mobile;if(!t.mobileBreakpoint)return n.mobile.value;const i=typeof t.mobileBreakpoint=="number"?t.mobileBreakpoint:n.thresholds.value[t.mobileBreakpoint];return n.width.value<i}),s=pe(()=>e?{[`${e}--mobile`]:r.value}:{});return{...n,displayClasses:s,mobile:r}}const $R=Symbol.for("vuetify:goto");function HR(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5}}}function pH(t){return Am(t)??(document.scrollingElement||document.body)}function Am(t){return typeof t=="string"?document.querySelector(t):RR(t)}function Wh(t,e,n){if(typeof t=="number")return e&&n?-t:t;let r=Am(t),s=0;for(;r;)s+=e?r.offsetLeft:r.offsetTop,r=r.offsetParent;return s}function mH(t,e){return{rtl:e.isRtl,options:Lt(HR(),t)}}async function _E(t,e,n,r){const s=n?"scrollLeft":"scrollTop",i=Lt((r==null?void 0:r.options)??HR(),e),o=r==null?void 0:r.rtl.value,a=(typeof t=="number"?t:Am(t))??0,l=i.container==="parent"&&a instanceof HTMLElement?a.parentElement:pH(i.container),u=typeof i.easing=="function"?i.easing:i.patterns[i.easing];if(!u)throw new TypeError(`Easing function "${i.easing}" not found.`);let h;if(typeof a=="number")h=Wh(a,n,o);else if(h=Wh(a,n,o)-Wh(l,n,o),i.layout){const _=window.getComputedStyle(a).getPropertyValue("--v-layout-top");_&&(h-=parseInt(_,10))}h+=i.offset,h=gH(l,h,!!o,!!n);const f=l[s]??0;if(h===f)return Promise.resolve(h);const p=performance.now();return new Promise(g=>requestAnimationFrame(function _(I){const L=(I-p)/i.duration,k=Math.floor(f+(h-f)*u(CR(L,0,1)));if(l[s]=k,L>=1&&Math.abs(k-l[s])<10)return g(h);if(L>2)return g(l[s]);requestAnimationFrame(_)}))}function Kj(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=Fe($R),{isRtl:n}=VR();if(!e)throw new Error("[Vuetify] Could not find injected goto instance");const r={...e,rtl:pe(()=>e.rtl.value||n.value)};async function s(i,o){return _E(i,Lt(t,o),!1,r)}return s.horizontal=async(i,o)=>_E(i,Lt(t,o),!0,r),s}function gH(t,e,n,r){const{scrollWidth:s,scrollHeight:i}=t,[o,a]=t===document.scrollingElement?[window.innerWidth,window.innerHeight]:[t.offsetWidth,t.offsetHeight];let l,u;return r?n?(l=-(s-o),u=0):(l=0,u=s-o):(l=0,u=i+-a),Math.max(Math.min(e,u),l)}const _H={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},yH={component:t=>$t(WR,{...t,class:"mdi"})},vH=[String,Function,Object,Array],gd=Symbol.for("vuetify:icons"),Bu=ls({icon:{type:vH},tag:{type:String,required:!0}},"icon"),yE=DR()({name:"VComponentIcon",props:Bu(),setup(t,e){let{slots:n}=e;return()=>{const r=t.icon;return be(t.tag,null,{default:()=>{var s;return[t.icon?be(r,null,null):(s=n.default)==null?void 0:s.call(n)]}})}}}),jR=za({name:"VSvgIcon",inheritAttrs:!1,props:Bu(),setup(t,e){let{attrs:n}=e;return()=>be(t.tag,Wd(n,{style:null}),{default:()=>[be("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(r=>Array.isArray(r)?be("path",{d:r[0],"fill-opacity":r[1]},null):be("path",{d:r},null)):be("path",{d:t.icon},null)])]})}});za({name:"VLigatureIcon",props:Bu(),setup(t){return()=>be(t.tag,null,{default:()=>[t.icon]})}});const WR=za({name:"VClassIcon",props:Bu(),setup(t){return()=>be(t.tag,{class:t.icon},null)}});function EH(){return{svg:{component:jR},class:{component:WR}}}function TH(t){const e=EH(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=yH),Lt({defaultSet:n,sets:e,aliases:{..._H,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},t)}const Gj=t=>{const e=Fe(gd);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:pe(()=>{var l;const r=Oe(t);if(!r)return{component:yE};let s=r;if(typeof s=="string"&&(s=s.trim(),s.startsWith("$")&&(s=(l=e.aliases)==null?void 0:l[s.slice(1)])),Array.isArray(s))return{component:jR,icon:s};if(typeof s!="string")return{component:yE,icon:s};const i=Object.keys(e.sets).find(u=>typeof s=="string"&&s.startsWith(`${u}:`)),o=i?s.slice(i.length+1):s;return{component:e.sets[i??e.defaultSet].component,icon:o}})}},_a=Symbol.for("vuetify:theme"),wH=ls({theme:String},"theme");function vE(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function IH(){var r,s;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:vE();const e=vE();if(!t)return{...e,isDisabled:!0};const n={};for(const[i,o]of Object.entries(t.themes??{})){const a=o.dark||i==="dark"?(r=e.themes)==null?void 0:r.dark:(s=e.themes)==null?void 0:s.light;n[i]=Lt(a,o)}return Lt(e,{...t,themes:n})}function bH(t){const e=IH(t),n=Qe(e.defaultTheme),r=Qe(e.themes),s=pe(()=>{const h={};for(const[f,p]of Object.entries(r.value)){const g=h[f]={...p,colors:{...p.colors}};if(e.variations)for(const _ of e.variations.colors){const I=g.colors[_];if(I)for(const S of["lighten","darken"]){const L=S==="lighten"?a$:l$;for(const k of bR(e.variations[S],1))g.colors[`${_}-${S}-${k}`]=s$(L(hr(I),k))}}for(const _ of Object.keys(g.colors)){if(/^on-[a-z]/.test(_)||g.colors[`on-${_}`])continue;const I=`on-${_}`,S=hr(g.colors[_]);g.colors[I]=u$(S)}}return h}),i=pe(()=>s.value[n.value]),o=pe(()=>{var _;const h=[];(_=i.value)!=null&&_.dark&&ms(h,":root",["color-scheme: dark"]),ms(h,":root",EE(i.value));for(const[I,S]of Object.entries(s.value))ms(h,`.v-theme--${I}`,[`color-scheme: ${S.dark?"dark":"normal"}`,...EE(S)]);const f=[],p=[],g=new Set(Object.values(s.value).flatMap(I=>Object.keys(I.colors)));for(const I of g)/^on-[a-z]/.test(I)?ms(p,`.${I}`,[`color: rgb(var(--v-theme-${I})) !important`]):(ms(f,`.bg-${I}`,[`--v-theme-overlay-multiplier: var(--v-theme-${I}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${I})) !important`,`color: rgb(var(--v-theme-on-${I})) !important`]),ms(p,`.text-${I}`,[`color: rgb(var(--v-theme-${I})) !important`]),ms(p,`.border-${I}`,[`--v-border-color: var(--v-theme-${I})`]));return h.push(...f,...p),h.map((I,S)=>S===0?I:`    ${I}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(h){if(e.isDisabled)return;const f=h._context.provides.usehead;if(f)if(f.push){const p=f.push(a);Xt&&jt(o,()=>{p.patch(a)})}else Xt?(f.addHeadObjs(pe(a)),su(()=>f.updateDOM())):f.addHeadObjs(a());else{let g=function(){if(typeof document<"u"&&!p){const _=document.createElement("style");_.type="text/css",_.id="vuetify-theme-stylesheet",e.cspNonce&&_.setAttribute("nonce",e.cspNonce),p=_,document.head.appendChild(p)}p&&(p.innerHTML=o.value)},p=Xt?document.getElementById("vuetify-theme-stylesheet"):null;Xt?jt(o,g,{immediate:!0}):g()}}const u=pe(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:e.isDisabled,name:n,themes:r,current:i,computedThemes:s,themeClasses:u,styles:o,global:{name:n,current:i}}}function RH(t){Yn("provideTheme");const e=Fe(_a,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=pe(()=>t.theme??e.name.value),r=pe(()=>e.themes.value[n.value]),s=pe(()=>e.isDisabled?void 0:`v-theme--${n.value}`),i={...e,name:n,current:r,themeClasses:s};return vn(_a,i),i}function zj(){Yn("useTheme");const t=Fe(_a,null);if(!t)throw new Error("Could not find Vuetify theme injection");return t}function ms(t,e,n){t.push(`${e} {
`,...n.map(r=>`  ${r};
`),`}
`)}function EE(t){const e=t.dark?2:1,n=t.dark?1:2,r=[];for(const[s,i]of Object.entries(t.colors)){const o=hr(i);r.push(`--v-theme-${s}: ${o.r},${o.g},${o.b}`),s.startsWith("on-")||r.push(`--v-theme-${s}-overlay-multiplier: ${c$(i)>.18?e:n}`)}for(const[s,i]of Object.entries(t.variables)){const o=typeof i=="string"&&i.startsWith("#")?hr(i):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;r.push(`--v-${s}: ${a??i}`)}return r}function AH(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=HB(),r=Qe();if(Xt){const s=new ResizeObserver(i=>{i.length&&(e==="content"?r.value=i[0].contentRect:r.value=i[0].target.getBoundingClientRect())});Ia(()=>{s.disconnect()}),jt(()=>n.el,(i,o)=>{o&&(s.unobserve(o),r.value=void 0),i&&s.observe(i)},{flush:"post"})}return{resizeRef:n,contentRect:Sd(r)}}const _d=Symbol.for("vuetify:layout"),qR=Symbol.for("vuetify:layout-item"),TE=1e3,CH=ls({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Qj=ls({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Yj(t){const e=Fe(_d);if(!e)throw new Error("[Vuetify] Could not find injected layout");const n=t.id??`layout-item-${bm()}`,r=Yn("useLayoutItem");vn(qR,{id:n});const s=Ht(!1);aT(()=>s.value=!0),oT(()=>s.value=!1);const{layoutItemStyles:i,layoutItemScrimStyles:o}=e.register(r,{...t,active:pe(()=>s.value?!1:t.active.value),id:n});return Ia(()=>e.unregister(n)),{layoutItemStyles:i,layoutRect:e.layoutRect,layoutItemScrimStyles:o}}const SH=(t,e,n,r)=>{let s={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...s}}];for(const o of t){const a=e.get(o),l=n.get(o),u=r.get(o);if(!a||!l||!u)continue;const h={...s,[a.value]:parseInt(s[a.value],10)+(u.value?parseInt(l.value,10):0)};i.push({id:o,layer:h}),s=h}return i};function PH(t){const e=Fe(_d,null),n=pe(()=>e?e.rootZIndex.value-100:TE),r=Qe([]),s=Dt(new Map),i=Dt(new Map),o=Dt(new Map),a=Dt(new Map),l=Dt(new Map),{resizeRef:u,contentRect:h}=AH(),f=pe(()=>{const D=new Map,T=t.overlaps??[];for(const y of T.filter(v=>v.includes(":"))){const[v,w]=y.split(":");if(!r.value.includes(v)||!r.value.includes(w))continue;const P=s.get(v),C=s.get(w),b=i.get(v),fe=i.get(w);!P||!C||!b||!fe||(D.set(w,{position:P.value,amount:parseInt(b.value,10)}),D.set(v,{position:C.value,amount:-parseInt(fe.value,10)}))}return D}),p=pe(()=>{const D=[...new Set([...o.values()].map(y=>y.value))].sort((y,v)=>y-v),T=[];for(const y of D){const v=r.value.filter(w=>{var P;return((P=o.get(w))==null?void 0:P.value)===y});T.push(...v)}return SH(T,s,i,a)}),g=pe(()=>!Array.from(l.values()).some(D=>D.value)),_=pe(()=>p.value[p.value.length-1].layer),I=pe(()=>({"--v-layout-left":Dl(_.value.left),"--v-layout-right":Dl(_.value.right),"--v-layout-top":Dl(_.value.top),"--v-layout-bottom":Dl(_.value.bottom),...g.value?void 0:{transition:"none"}})),S=pe(()=>p.value.slice(1).map((D,T)=>{let{id:y}=D;const{layer:v}=p.value[T],w=i.get(y),P=s.get(y);return{id:y,...v,size:Number(w.value),position:P.value}})),L=D=>S.value.find(T=>T.id===D),k=Yn("createLayout"),R=Ht(!1);wa(()=>{R.value=!0}),vn(_d,{register:(D,T)=>{let{id:y,order:v,position:w,layoutSize:P,elementSize:C,active:b,disableTransitions:fe,absolute:ve}=T;o.set(y,v),s.set(y,w),i.set(y,P),a.set(y,b),fe&&l.set(y,fe);const ce=Oo(qR,k==null?void 0:k.vnode).indexOf(D);ce>-1?r.value.splice(ce,0,y):r.value.push(y);const ne=pe(()=>S.value.findIndex(Le=>Le.id===y)),$e=pe(()=>n.value+p.value.length*2-ne.value*2),tn=pe(()=>{const Le=w.value==="left"||w.value==="right",He=w.value==="right",Mn=w.value==="bottom",Kt=C.value??P.value,Rt=Kt===0?"%":"px",U={[w.value]:0,zIndex:$e.value,transform:`translate${Le?"X":"Y"}(${(b.value?0:-(Kt===0?100:Kt))*(He||Mn?-1:1)}${Rt})`,position:ve.value||n.value!==TE?"absolute":"fixed",...g.value?void 0:{transition:"none"}};if(!R.value)return U;const Q=S.value[ne.value];if(!Q)throw new Error(`[Vuetify] Could not find layout item "${y}"`);const Y=f.value.get(y);return Y&&(Q[Y.position]+=Y.amount),{...U,height:Le?`calc(100% - ${Q.top}px - ${Q.bottom}px)`:C.value?`${C.value}px`:void 0,left:He?void 0:`${Q.left}px`,right:He?`${Q.right}px`:void 0,top:w.value!=="bottom"?`${Q.top}px`:void 0,bottom:w.value!=="top"?`${Q.bottom}px`:void 0,width:Le?C.value?`${C.value}px`:void 0:`calc(100% - ${Q.left}px - ${Q.right}px)`}}),qt=pe(()=>({zIndex:$e.value-1}));return{layoutItemStyles:tn,layoutItemScrimStyles:qt,zIndex:$e}},unregister:D=>{o.delete(D),s.delete(D),i.delete(D),a.delete(D),l.delete(D),r.value=r.value.filter(T=>T!==D)},mainRect:_,mainStyles:I,getLayoutItem:L,items:S,layoutRect:h,rootZIndex:n});const O=pe(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),x=pe(()=>({zIndex:e?n.value:void 0,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:O,layoutStyles:x,getLayoutItem:L,items:S,layoutRect:h,layoutRef:u}}function KR(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,r=Lt(e,n),{aliases:s={},components:i={},directives:o={}}=r,a=p$(r.defaults),l=dH(r.display,r.ssr),u=bH(r.theme),h=TH(r.icons),f=w$(r.locale),p=uH(r.date,f),g=mH(r.goTo,f);return{install:I=>{for(const S in o)I.directive(S,o[S]);for(const S in i)I.component(S,i[S]);for(const S in s)I.component(S,za({...s[S],name:S,aliasName:s[S].name}));if(u.install(I),I.provide(ji,a),I.provide(md,l),I.provide(_a,u),I.provide(gd,h),I.provide(zc,f),I.provide(cH,p.options),I.provide(fE,p.instance),I.provide($R,g),Xt&&r.ssr)if(I.$nuxt)I.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:S}=I;I.mount=function(){const L=S(...arguments);return $s(()=>l.update()),I.mount=S,L}}bm.reset(),I.mixin({computed:{$vuetify(){return Dt({defaults:ri.call(this,ji),display:ri.call(this,md),theme:ri.call(this,_a),icons:ri.call(this,gd),locale:ri.call(this,zc),date:ri.call(this,fE)})}}})},defaults:a,display:l,theme:u,icons:h,locale:f,date:p,goTo:g}}const kH="3.7.0";KR.version=kH;function ri(t){var r,s;const e=this.$,n=((r=e.parent)==null?void 0:r.provides)??((s=e.vnode.appContext)==null?void 0:s.provides);if(n&&t in n)return n[t]}const NH=Wt(t=>{const e=KR({});t.vueApp.use(e)}),OH=[GM,zM,YM,vB,EB,TB,wB,bB,CB,SB,PB,kB,NB,OB,NH],DH=Gn({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s]});return vn(Ca,ir(r)),()=>$t(t.vnode,{ref:t.vnodeRef})}}),MH=Gn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=tt(),i=Qe(),o=Fe(Ca,null);let a;r({pageRef:i});const l=Fe(mw,null);let u;const h=s.deferHydration();if(s.isHydrating){const f=s.hooks.hookOnce("app:error",h);fn().beforeEach(f)}return t.pageKey&&jt(()=>t.pageKey,(f,p)=>{f!==p&&s.callHook("page:loading:start")}),()=>$t(AI,{name:t.name,route:t.route,...e},{default:f=>{const p=LH(o,f.route,f.Component),g=o&&o.matched.length===f.route.matched.length;if(!f.Component){if(u&&!g)return u;h();return}if(u&&l&&!l.isCurrent(f.route))return u;if(p&&o&&(!l||l!=null&&l.isCurrent(o)))return g?u:null;const _=Kf(f,t.pageKey);!s.isHydrating&&!VH(o,f.route,f.Component)&&a===_&&s.callHook("page:loading:end"),a=_;const I=!!(t.transition??f.route.meta.pageTransition??df),S=I&&xH([t.transition,f.route.meta.pageTransition,df,{onAfterLeave:()=>{s.callHook("page:transition:finish",f.Component)}}].filter(Boolean)),L=t.keepalive??f.route.meta.keepalive??XP;return u=CI(au,I&&S,nL(L,$t(Hd,{suspensible:!0,onPending:()=>s.callHook("page:start",f.Component),onResolve:()=>{$s(()=>s.callHook("page:finish",f.Component).then(()=>s.callHook("page:loading:end")).finally(h))}},{default:()=>{const k=$t(DH,{key:_||void 0,vnode:n.default?$t(vt,void 0,n.default(f)):f.Component,route:f.route,renderKey:_||void 0,trackRootNodes:I,vnodeRef:i});return L&&(k.type.name=f.Component.type.name||f.Component.type.__name||"RouteProvider"),k}}))).default(),u}})}});function xH(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?Fp(n.onAfterLeave):void 0}));return dw(...e)}function LH(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&Kf({route:e,Component:n})!==Kf({route:t,Component:n})}function VH(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const FH=Gn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await jr[t.name]().then(r=>r.default||r);return()=>$t(n,t.layoutProps,e.slots)}}),UH=Gn({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=tt(),r=Fe(Ca),s=r===Yd()?eL():r,i=pe(()=>{let l=Oe(t.name)??s.meta.layout??"default";return l&&!(l in jr)&&t.fallback&&(l=Oe(t.fallback)),l}),o=Qe();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",a);fn().beforeEach(l)}return()=>{const l=i.value&&i.value in jr,u=s.meta.layoutTransition??YP;return CI(au,l&&u,{default:()=>$t(Hd,{suspensible:!0,onResolve:()=>{$s(a)}},{default:()=>$t(BH,{layoutProps:Wd(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),BH=Gn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&vn(mw,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in jr)?(s=(r=e.slots).default)==null?void 0:s.call(r):$t(FH,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),$H=ls({...h$(),...CH({fullHeight:!0}),...wH()},"VApp"),HH=DR()({name:"VApp",props:$H(),setup(t,e){let{slots:n}=e;const r=RH(t),{layoutClasses:s,getLayoutItem:i,items:o,layoutRef:a}=PH(t),{rtlClasses:l}=VR();return _$(()=>{var u;return be("div",{ref:a,class:["v-application",r.themeClasses.value,s.value,l.value,t.class],style:[t.style]},[be("div",{class:"v-application__wrap"},[(u=n.default)==null?void 0:u.call(n)])])}),{getLayoutItem:i,items:o,theme:r}}}),jH=Gn({__name:"app",setup(t){const e=BF(),n=fn();return wa(()=>{jt(e,(r,s)=>{if(s&&!r)return n.replace("/login")})}),(r,s)=>{const i=MH,o=UH;return In(),sr(o,null,{default:sc(()=>[be(HH,null,{default:sc(()=>[be(i)]),_:1})]),_:1})}}}),WH={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,h=s?Sg(()=>Vr(()=>import("./2igBl2Iq.js"),__vite__mapDeps([21,22,10,23]),import.meta.url).then(f=>f.default||f)):Sg(()=>Vr(()=>import("./Cf3q-IiD.js"),__vite__mapDeps([24,22,10,25]),import.meta.url).then(f=>f.default||f));return(f,p)=>(In(),sr(Oe(h),AA(UT({statusCode:Oe(r),statusMessage:Oe(i),description:Oe(o),stack:Oe(a)})),null,16))}},qH={key:0},wE={__name:"nuxt-root",setup(t){const e=()=>null,n=tt(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);fn().beforeEach(l)}const s=!1;vn(Ca,Yd()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=lu(),o=!1;uT((l,u,h)=>{if(n.hooks.callHook("vue:error",l,u,h).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),yk(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>ci(l)),!1});const a=!1;return(l,u)=>(In(),sr(Hd,{onResolve:Oe(r)},{default:sc(()=>[Oe(o)?(In(),sS("div",qH)):Oe(i)?(In(),sr(Oe(WH),{key:1,error:Oe(i)},null,8,["error"])):Oe(a)?(In(),sr(Oe(e),{key:2,context:Oe(a)},null,8,["context"])):Oe(s)?(In(),sr(vC(Oe(s)),{key:3})):(In(),sr(Oe(jH),{key:4}))]),_:1},8,["onResolve"]))}};let IE;{let t;IE=async function(){var o,a;if(t)return t;const r=!!((o=window.__NUXT__)!=null&&o.serverRendered||((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?WS(wE):jS(wE),s=tk({vueApp:r});async function i(l){await s.callHook("app:error",l),s.payload.error=s.payload.error||cu(l)}r.config.errorHandler=i;try{await sk(s,OH)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(ZP),await s.hooks.callHook("app:mounted",r),await $s()}catch(l){i(l)}return r.config.errorHandler===i&&(r.config.errorHandler=void 0),r},t=IE().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{xM as $,sc as A,BT as B,GH as C,zH as D,oj as E,su as F,vf as G,jt as H,aT as I,oT as J,qi as K,Ej as L,vj as M,hj as N,Bw as O,VM as P,vt as Q,JH as R,Oe as S,pj as T,qM as U,gj as V,sr as W,tj as X,It as Y,$s as Z,dj as _,tt as a,kn as a$,mj as a0,fj as a1,xE as a2,wd as a3,KH as a4,hc as a5,ls as a6,FB as a7,DR as a8,_$ as a9,Dj as aA,au as aB,kj as aC,CR as aD,LB as aE,bm as aF,Sj as aG,Pj as aH,Fj as aI,DB as aJ,Nj as aK,Zc as aL,Uj as aM,Yn as aN,HB as aO,Dt as aP,Sd as aQ,Se as aR,ej as aS,jj as aT,Ea as aU,sj as aV,Lj as aW,Tj as aX,HH as aY,yj as aZ,Ur as a_,Wd as aa,Rj as ab,h$ as ac,wH as ad,RH as ae,VR as af,Hj as ag,Ht as ah,vn as ai,QH as aj,XH as ak,Fe as al,y$ as am,nj as an,Dl as ao,vH as ap,Wj as aq,qj as ar,AH as as,Kj as at,Xt as au,Vj as av,rC as aw,$j as ax,zv as ay,Cj as az,wm as b,rj as b0,Mj as b1,f$ as b2,VB as b3,tc as b4,dC as b5,Aj as b6,Ij as b7,mr as b8,Qj as b9,zj as ba,Yj as bb,ZH as bc,_j as bd,CH as be,PH as bf,Oj as bg,n$ as bh,Bj as bi,hr as bj,u$ as bk,Md as bl,Oo as bm,XE as bn,Gj as bo,$B as bp,Cs as bq,vC as br,xj as bs,bj as bt,qv as c,Gn as d,gk as e,Ia as f,wj as g,$t as h,YH as i,pe as j,Hs as k,Gd as l,m_ as m,ij as n,wa as o,aP as p,Aa as q,Qe as r,Kd as s,In as t,fn as u,sS as v,uf as w,FT as x,PA as y,be as z};

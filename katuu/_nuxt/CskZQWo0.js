import{a6 as B,ac as V,b9 as S,ad as P,a8 as _,ba as w,aw as i,j as r,am as x,bb as N,ax as z,a9 as R,z as t,ao as T,d as I,r as A,u as L,aX as $,t as D,v as E,bc as F,A as o,Q as G,S as U,Y as j,B as m,bd as M}from"./CcToJEy3.js";import{V as O}from"./DoOuJzBg.js";import{v as Q,g as X,w as Y,x as q,b as H,f as J,y as K,i as W,h as Z,z as p,A as ee,c as te,P as ae,V as v,a as c}from"./B2FoI3GA.js";import{u as oe}from"./BaHueo-V.js";const se=B({baseColor:String,bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...Q(),...V(),...X(),...Y(),...q(),...S({name:"bottom-navigation"}),...H({tag:"header"}),...J({selectedClass:"v-btn--selected"}),...P()},"VBottomNavigation"),le=_()({name:"VBottomNavigation",props:se(),emits:{"update:active":e=>!0,"update:modelValue":e=>!0},setup(e,n){let{slots:d}=n;const{themeClasses:u}=w(),{borderClasses:g}=K(e),{backgroundColorClasses:f,backgroundColorStyles:s}=W(i(e,"bgColor")),{densityClasses:a}=Z(e),{elevationClasses:l}=p(e),{roundedClasses:C}=ee(e),{ssrBootStyles:h}=oe(),b=r(()=>Number(e.height)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0)),y=x(e,"active",e.active),{layoutItemStyles:k}=N({id:e.name,order:r(()=>parseInt(e.order,10)),position:r(()=>"bottom"),layoutSize:r(()=>y.value?b.value:0),elementSize:b,active:y,absolute:i(e,"absolute")});return te(e,ae),z({VBtn:{baseColor:i(e,"baseColor"),color:i(e,"color"),density:i(e,"density"),stacked:r(()=>e.mode!=="horizontal"),variant:"text"}},{scoped:!0}),R(()=>t(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":y.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":e.mode==="shift"},u.value,f.value,g.value,a.value,l.value,C.value,e.class],style:[s.value,k.value,{height:T(b.value)},h.value,e.style]},{default:()=>[d.default&&t("div",{class:"v-bottom-navigation__content"},[d.default()])]})),{}}}),de=I({__name:"default",setup(e){const n=A(1),d=L(),u=s=>{console.log("1232",s),d.push(s)},g=$(),f=()=>{M(g)};return(s,a)=>(D(),E(G,null,[F(s.$slots,"default"),t(O,{class:"overflow-visible",style:{height:"56px"}},{default:o(()=>[t(le,{modelValue:U(n),"onUpdate:modelValue":a[3]||(a[3]=l=>j(n)?n.value=l:null),color:"primary",grow:""},{default:o(()=>[t(v,{value:1,onClick:a[0]||(a[0]=l=>u("/"))},{default:o(()=>[t(c,null,{default:o(()=>[m("mdi-home")]),_:1})]),_:1}),t(v,{value:2,onClick:a[1]||(a[1]=l=>u("/cart"))},{default:o(()=>[t(c,null,{default:o(()=>[m("mdi-cart")]),_:1})]),_:1}),t(v,{value:3,onClick:a[2]||(a[2]=l=>u("/history"))},{default:o(()=>[t(c,null,{default:o(()=>[m("mdi-history")]),_:1})]),_:1}),t(v,{value:4,onClick:f},{default:o(()=>[t(c,null,{default:o(()=>[m("mdi-logout")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64))}});export{de as default};

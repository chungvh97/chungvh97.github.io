import{_ as D}from"./DZVRhymJ.js";import{d as I,L as P,M as S,N as p,j as q,r as z,O as M,P as T,t as l,v as i,z as n,A as r,Q as y,R as j,S as b,x as s,y as c,B as x,T as L,U as E,V as F,W as R,X as g}from"./CcToJEy3.js";import{k as W}from"./B20VTk6u.js";import{V as O,a as v,b as w,c as Q}from"./BHtrGYCv.js";import{V as U}from"./B2FoI3GA.js";import"./BKSLDj76.js";const Z=s("h1",{class:"mb-4"},"Cart",-1),$={class:"d-flex"},G={class:"d-flex flex-column ml-2 w-100"},J={class:"d-flex justify-content-space-between w-100"},K={class:"text-primary",style:{"white-space":"nowrap"}},X={key:0,class:"mt-2"},H={key:1,class:"mt-2"},Y={class:"mt-2"},tt={class:"d-flex justify-content-space-between"},et=s("h2",null,"Total Price:",-1),at={class:"text-primary"},ut=I({__name:"cart",setup(st){const m=P(),d=S(p(m,"products")),_=q(()=>d.value.reduce((a,e)=>{let o=e.quantity?e.price*e.quantity:e.price;return console.log(a,e),a+(o||0)},0)),f=z(),k=async a=>{await f.value.showModal(a)},u=a=>new Intl.NumberFormat("vi-VN").format(a)+" đ",C=a=>a.filter(e=>e.isChecked).map(e=>e.name).join(", "),V=async()=>{const a={data:d.value.map((e,o)=>e),totalPrice:_.value,createdAt:new Date};await L(p(m,"history"),a).then(()=>{B("products")})},N=M({apiKey:"AIzaSyD2B0zCpxtQcPNoyTAyVePabbZrsvMfvs4",authDomain:"nuxt-blog-4bf26.firebaseapp.com",databaseURL:"https://nuxt-blog-4bf26.firebaseio.com",projectId:"nuxt-blog-4bf26",storageBucket:"nuxt-blog-4bf26.appspot.com",messagingSenderId:"93634015500",appId:"1:93634015500:web:9cabc4347b0835340bd929",measurementId:"G-7WLZ5RDWE2"}),h=T(N),B=async a=>{try{const e=await E(p(h,a)),o=F(h);e.forEach(t=>{o.delete(t.ref)}),await o.commit(),console.log("Tất cả tài liệu trong collection đã được xóa!")}catch(e){console.error("Lỗi khi xóa tài liệu:",e)}};return(a,e)=>{const o=D;return l(),i(y,null,[n(O,null,{default:r(()=>[Z,(l(!0),i(y,null,j(b(d),(t,A)=>(l(),R(v,{key:A,class:"mx-auto mb-2",elevation:"3",hover:"",onClick:ot=>k(t)},{default:r(()=>[n(w,null,{default:r(()=>[s("div",$,[n(Q,{style:{"max-width":"70px",width:"100%",height:"auto","max-height":"70px"},"aspect-ratio":"4/3",cover:"",src:t.type?"":b(W)},null,8,["src"]),s("div",G,[s("div",J,[s("b",null,c(t.type?"Bánh kem "+t.name:t.name),1),s("b",K,c(t.price&&t.quantity?u(t.price*t.quantity):u(t.price)),1)]),t.size&&t.quantity?(l(),i("div",X,[s("span",null,"Size: "+c(t.size.isActive),1),x(" - "),s("span",null,"Số lượng: "+c(t.quantity),1)])):g("",!0),t.topping?(l(),i("div",H," Topping: "+c(C(JSON.parse(t.topping))),1)):g("",!0),s("div",Y,[s("span",null," Note: "+c(t.comment),1)])])])]),_:2},1024)]),_:2},1032,["onClick"]))),128)),n(v,{class:"mt-4"},{default:r(()=>[n(w,null,{default:r(()=>[s("div",tt,[et,s("h2",at,c(u(_.value)),1)])]),_:1})]),_:1}),n(U,{class:"mt-4",color:"primary",block:"",onClick:V},{default:r(()=>[x(" Mua ")]),_:1})]),_:1}),n(o,{ref_key:"refModal",ref:f},null,512)],64)}}});export{ut as default};

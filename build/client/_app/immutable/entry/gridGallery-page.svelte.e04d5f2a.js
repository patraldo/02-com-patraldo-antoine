import{L as w,M as K,N as Z,O as v,S as x,i as $,s as tt,C as et,k as rt,l as st,m as lt,h as k,P as L,Q as q,b as W,R as D,E as ot,F as it,G as nt,T as at,g as ut,d as ft,U as ct,V as H,W as dt,X as I,H as F,Y as M,w as mt,q as gt,r as _t}from"../chunks/index.32cf2a91.js";import{w as yt}from"../chunks/index.87e6b824.js";function Q(t){const e=t-1;return e*e*e+1}function U(t){return Object.prototype.toString.call(t)==="[object Date]"}function O(t,e){if(t===e||t!==t)return()=>t;const s=typeof t;if(s!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const o=e.map((i,a)=>O(t[a],i));return i=>o.map(a=>a(i))}if(s==="object"){if(!t||!e)throw new Error("Object cannot be null");if(U(t)&&U(e)){t=t.getTime(),e=e.getTime();const a=e-t;return u=>new Date(t+u*a)}const o=Object.keys(e),i={};return o.forEach(a=>{i[a]=O(t[a],e[a])}),a=>{const u={};return o.forEach(f=>{u[f]=i[f](a)}),u}}if(s==="number"){const o=e-t;return i=>t+i*o}throw new Error(`Cannot interpolate ${s} values`)}function V(t,e={}){const s=yt(t);let o,i=t;function a(u,f){if(t==null)return s.set(t=u),Promise.resolve();i=u;let n=o,y=!1,{delay:m=0,duration:l=400,easing:d=v,interpolate:N=O}=w(w({},e),f);if(l===0)return n&&(n.abort(),n=null),s.set(t=i),Promise.resolve();const b=K()+m;let p;return o=Z(_=>{if(_<b)return!0;y||(p=N(t,u),typeof l=="function"&&(l=l(t,u)),y=!0),n&&(n.abort(),n=null);const g=_-b;return g>l?(s.set(t=u),!1):(s.set(t=p(d(g/l))),!0)}),o.promise}return{set:a,update:(u,f)=>a(u(i,t),f),subscribe:s.subscribe}}function ht(t){let e;return{c(){e=gt("no content provided")},l(s){e=_t(s,"no content provided")},m(s,o){W(s,e,o)},d(s){s&&k(e)}}}function bt(t){let e,s,o,i,a;const u=t[20].default,f=et(u,t,t[19],null),n=f||ht();let y=[t[10],{class:t[0]},{style:s="display:grid; grid-template-columns:"+t[5]+"; grid-template-rows: "+t[6]+"; "+t[1]}],m={};for(let l=0;l<y.length;l+=1)m=w(m,y[l]);return{c(){e=rt("parent"),n&&n.c(),this.h()},l(l){e=st(l,"PARENT",{class:!0,style:!0});var d=lt(e);n&&n.l(d),d.forEach(k),this.h()},h(){L(e,m),q(e,"svelte-f1hasl",!0)},m(l,d){W(l,e,d),n&&n.m(e,null),t[22](e),o=!0,i||(a=[D(e,"mouseout",t[21]),D(e,"mouseover",t[9])],i=!0)},p(l,[d]){f&&f.p&&(!o||d&524288)&&ot(f,u,l,l[19],o?nt(u,l[19],d,null):it(l[19]),null),L(e,m=at(y,[d&1024&&l[10],(!o||d&1)&&{class:l[0]},(!o||d&98&&s!==(s="display:grid; grid-template-columns:"+l[5]+"; grid-template-rows: "+l[6]+"; "+l[1]))&&{style:s}])),q(e,"svelte-f1hasl",!0)},i(l){o||(ut(n,l),o=!0)},o(l){ft(n,l),o=!1},d(l){l&&k(e),n&&n.d(l),t[22](null),i=!1,ct(a)}}}function pt(t,e,s){let o,i;const a=["class","rows","cols","growX","growY","duration","style","activeClassName"];let u=H(e,a),f,n=F,y=()=>(n(),n=M(i,r=>s(17,f=r)),i),m,l=F,d=()=>(l(),l=M(o,r=>s(18,m=r)),o);t.$$.on_destroy.push(()=>n()),t.$$.on_destroy.push(()=>l());let{$$slots:N={},$$scope:b}=e,{class:p}=e,{rows:_=8}=e,{cols:g=5}=e,h,{growX:R=2}=e,{growY:j=2}=e,{duration:A=500}=e,{style:P=""}=e,{activeClassName:E="GridGalleryActiveItem"}=e,C=-1,T=-1,X="",Y="";function S(r){return!r||!r.parentElement?!1:r&&r.parentElement==h?r:S(r.parentElement)}function z(r){var c=S(r.target);if(!c)return;let G=Array.prototype.indexOf.call(h.children,c);s(3,C=G%g),s(4,T=G/g|0)}const B=()=>{s(3,C=-1),s(4,T=-1)};function J(r){mt[r?"unshift":"push"](()=>{h=r,s(2,h)})}return t.$$set=r=>{e=w(w({},e),dt(r)),s(10,u=H(e,a)),"class"in r&&s(0,p=r.class),"rows"in r&&s(11,_=r.rows),"cols"in r&&s(12,g=r.cols),"growX"in r&&s(13,R=r.growX),"growY"in r&&s(14,j=r.growY),"duration"in r&&s(15,A=r.duration),"style"in r&&s(1,P=r.style),"activeClassName"in r&&s(16,E=r.activeClassName),"$$scope"in r&&s(19,b=r.$$scope)},t.$$.update=()=>{if(t.$$.dirty&6144&&Array(_*g),t.$$.dirty&36864&&d(s(8,o=V(Array(g).fill(1),{duration:A,easing:Q}))),t.$$.dirty&34816&&y(s(7,i=V(Array(_).fill(1),{duration:A,easing:Q}))),t.$$.dirty&12296){let r=[];for(let c=0;c<g;c++)r[c]=C===c?R:1;I(o,m=r,m)}if(t.$$.dirty&262144&&s(5,X=m.join("fr ")+"fr"),t.$$.dirty&18448){let r=[];for(let c=0;c<_;c++)r[c]=T===c?j:1;I(i,f=r,f)}if(t.$$.dirty&131072&&s(6,Y=f.join("fr ")+"fr"),t.$$.dirty&67612){let r=0;if(h)for(let c of h.childNodes)r==C+T*_?c.classList.add(E):c.classList&&c.classList.remove(E),r++}},[p,P,h,C,T,X,Y,i,o,z,u,_,g,R,j,A,E,f,m,b,N,B,J]}class wt extends x{constructor(e){super(),$(this,e,pt,bt,tt,{class:0,rows:11,cols:12,growX:13,growY:14,duration:15,style:1,activeClassName:16})}}export{wt as default};

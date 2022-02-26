import{R as m,r as p,j as e,u as P,N,a as h,T as O,b as y,c as L,d as F,e as _,S as $,C as B,f as U,g as d,h as z,i as M,k as q,B as H,l as K,m as G,n as X,o as Y}from"./vendor.855a4921.js";const W=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function l(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=l(o);fetch(o.href,r)}};W();const J="modulepreload",D={},Q="/",x=function(t,l){return!l||l.length===0?t():Promise.all(l.map(a=>{if(a=`${Q}${a}`,a in D)return;D[a]=!0;const o=a.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":J,o||(n.as="script",n.crossOrigin=""),n.href=a,document.head.appendChild(n),o)return new Promise((f,E)=>{n.addEventListener("load",f),n.addEventListener("error",E)})})).then(()=>t())};var Z="C:\\Users\\runec\\Documents\\Projects\\f1predictions-ui\\src\\core\\contexts\\Store.jsx";const V={title:"F1 Predictions",leftAction:null,leftActioinIcon:null,rightAction:null,rightActionIcon:null,showBottomNav:!0},ee={drivers:[],grandPrix:[],seasons:[],current_season:null,notifications:[],navbar:V,accessToken:null,user:null},S=m.createContext();function se(s,t){switch(t.type){case"SET_DRIVERS":return{...s,drivers:t.payload};case"SET_GRAND_PRIX":return{...s,grandPrix:t.payload};case"SET_SEASONS":return{...s,seasons:t.payload};case"SET_CURRENT_SEASON":return{...s,current_season:t.payload};case"SET_NAVBAR":return{...s,navbar:{...s.navbar,...t.payload}};case"RESET_NAVBAR":return{...s,navbar:V};case"NOTIFY":return{...s,notifications:[...s.notifications,t.payload]};case"REMOVE_NOTIFICATION":return{...s,notifications:s.notifications.filter(l=>l.id!=t.payload)};case"SET_ACCESS_TOKEN":return{...s,accessToken:t.payload};case"SET_USER":return{...s,user:t.payload};default:return s}}const te=({children:s})=>{const[t,l]=m.useReducer(se,ee);return p.exports.useEffect(()=>{const a=localStorage.getItem("access_token");a&&l({type:"SET_ACCESS_TOKEN",payload:a})},[]),e.exports.jsxDEV(S.Provider,{value:{state:t,dispatch:l},children:s},void 0,!1,{fileName:Z,lineNumber:61,columnNumber:11},globalThis)};function v(){const s=m.useContext(S);if(!s)throw Error("StoreContext must be used within a StoreProvider");return s}var c="C:\\Users\\runec\\Documents\\Projects\\f1predictions-ui\\src\\components\\Navbar.jsx";const ae=()=>{const{navbar:s,user:t}=v().state,{t:l}=P();return e.exports.jsxDEV("div",{className:"navbar p-0 d-flex align-items-center  bg-primary text-white ",children:e.exports.jsxDEV("div",{className:"container navbar__content d-flex align-items-centerp-1",children:[e.exports.jsxDEV("div",{className:"navbar__action col d-flex",children:s.leftAction&&e.exports.jsxDEV("button",{onClick:s.leftAction,className:"btn text-white py-0",children:e.exports.jsxDEV("i",{className:`fas ${s.leftActionIcon}`},void 0,!1,{fileName:c,lineNumber:15,columnNumber:29},globalThis)},void 0,!1,{fileName:c,lineNumber:14,columnNumber:25},globalThis)},void 0,!1,{fileName:c,lineNumber:12,columnNumber:17},globalThis),e.exports.jsxDEV("h4",{className:"mb-0 col-9 py-2 text-nowrap",children:s.title},void 0,!1,{fileName:c,lineNumber:19,columnNumber:17},globalThis),e.exports.jsxDEV("div",{className:"navbar__action col d-flex align-items-end",children:s.rightAction&&e.exports.jsxDEV("button",{onClick:s.rightAction,className:"btn text-white py-0",children:e.exports.jsxDEV("i",{className:`fas ${s.rightActionIcon}`},void 0,!1,{fileName:c,lineNumber:23,columnNumber:29},globalThis)},void 0,!1,{fileName:c,lineNumber:22,columnNumber:25},globalThis)},void 0,!1,{fileName:c,lineNumber:20,columnNumber:17},globalThis),e.exports.jsxDEV(N,{className:"navbar__nav",defaultActiveKey:"/home",as:"ul",children:[e.exports.jsxDEV(N.Item,{as:"li",children:e.exports.jsxDEV(N.Link,{to:"/",className:"text-white",exact:!0,activeClassName:"fw-bold",as:h,children:l("global.home")},void 0,!1,{fileName:c,lineNumber:29,columnNumber:25},globalThis)},void 0,!1,{fileName:c,lineNumber:28,columnNumber:21},globalThis),e.exports.jsxDEV(N.Item,{as:"li",children:e.exports.jsxDEV(N.Link,{to:"/leaderboard",className:"text-white",activeClassName:"fw-bold",as:h,children:l("global.leaderboard")},void 0,!1,{fileName:c,lineNumber:34,columnNumber:25},globalThis)},void 0,!1,{fileName:c,lineNumber:33,columnNumber:21},globalThis),e.exports.jsxDEV(N.Item,{as:"li",children:e.exports.jsxDEV(N.Link,{to:"/settings",className:"text-white",activeClassName:"fw-bold",as:h,children:l("global.settings")},void 0,!1,{fileName:c,lineNumber:39,columnNumber:25},globalThis)},void 0,!1,{fileName:c,lineNumber:38,columnNumber:21},globalThis),t?.is_admin&&e.exports.jsxDEV(N.Item,{as:"li",children:e.exports.jsxDEV(N.Link,{to:"/admin",className:"text-white",activeClassName:"fw-bold",as:h,children:l("global.admin")},void 0,!1,{fileName:c,lineNumber:45,columnNumber:29},globalThis)},void 0,!1,{fileName:c,lineNumber:44,columnNumber:25},globalThis)]},void 0,!0,{fileName:c,lineNumber:27,columnNumber:17},globalThis)]},void 0,!0,{fileName:c,lineNumber:11,columnNumber:13},globalThis)},void 0,!1,{fileName:c,lineNumber:10,columnNumber:9},globalThis)};var b="C:\\Users\\runec\\Documents\\Projects\\f1predictions-ui\\src\\components\\BottomNavBar.jsx";const le=()=>{const{user:s}=v().state;return e.exports.jsxDEV("nav",{className:"bg-primary d-flex",children:[e.exports.jsxDEV(h,{to:"/",exact:!0,activeClassName:"opacity-100",className:"btn btn-link py-2 my-1 col text-white opacity-50",children:e.exports.jsxDEV("i",{className:"fas fa-home"},void 0,!1,{fileName:b,lineNumber:10,columnNumber:13},globalThis)},void 0,!1,{fileName:b,lineNumber:9,columnNumber:10},globalThis),e.exports.jsxDEV(h,{to:"/leaderboard",exact:!0,activeClassName:"opacity-100",className:"btn btn-link py-2 my-1 col text-white opacity-50",children:e.exports.jsxDEV("i",{className:"fas fa-poll"},void 0,!1,{fileName:b,lineNumber:13,columnNumber:13},globalThis)},void 0,!1,{fileName:b,lineNumber:12,columnNumber:10},globalThis),e.exports.jsxDEV(h,{to:"/settings",exact:!0,activeClassName:"opacity-100",className:"btn btn-link py-2 my-1 col text-white opacity-50",children:e.exports.jsxDEV("i",{className:"fas fa-cog"},void 0,!1,{fileName:b,lineNumber:16,columnNumber:13},globalThis)},void 0,!1,{fileName:b,lineNumber:15,columnNumber:10},globalThis),s?.is_admin&&e.exports.jsxDEV(h,{to:"/admin",exact:!0,activeClassName:"opacity-100",className:"btn btn-link py-2 my-1 col text-white opacity-50",children:e.exports.jsxDEV("i",{className:"fas fa-users-cog"},void 0,!1,{fileName:b,lineNumber:20,columnNumber:16},globalThis)},void 0,!1,{fileName:b,lineNumber:19,columnNumber:13},globalThis)]},void 0,!0,{fileName:b,lineNumber:8,columnNumber:7},globalThis)};var g="C:\\Users\\runec\\Documents\\Projects\\f1predictions-ui\\src\\components\\Toaster.jsx";const oe=()=>{const{state:s,dispatch:t}=v(),{notifications:l}=s,a=p.exports.useMemo(()=>l.length>0?l.reverse()[l.length-1]:null,[l]),o=p.exports.useCallback(r=>{t({type:"REMOVE_NOTIFICATION",payload:r.id})},[t]);return e.exports.jsxDEV(O,{children:e.exports.jsxDEV(y,{show:!!a,autohide:!0,delay:a?.delay||5e3,onClose:()=>o(a),bg:a?.type||"primary",className:"text-white",children:e.exports.jsxDEV(y.Body,{children:e.exports.jsxDEV("div",{className:"d-flex justify-content-between align-items-center",children:[e.exports.jsxDEV("span",{children:a?.text},void 0,!1,{fileName:g,lineNumber:35,columnNumber:19},globalThis),e.exports.jsxDEV("i",{onClick:()=>o(a),className:"fas fa-times text-white"},void 0,!1,{fileName:g,lineNumber:36,columnNumber:19},globalThis)]},void 0,!0,{fileName:g,lineNumber:34,columnNumber:16},globalThis)},void 0,!1,{fileName:g,lineNumber:33,columnNumber:13},globalThis)},void 0,!1,{fileName:g,lineNumber:25,columnNumber:10},globalThis)},void 0,!1,{fileName:g,lineNumber:24,columnNumber:7},globalThis)};var ie="C:\\Users\\runec\\Documents\\Projects\\f1predictions-ui\\src\\pages\\Callback.jsx";const re=()=>{const{push:s}=L(),{search:t}=F(),{dispatch:l}=v(),a=p.exports.useMemo(()=>new URLSearchParams(t).get("state"),[t]);return p.exports.useEffect(()=>{a&&(localStorage.setItem("access_token",a),l({type:"SET_ACCESS_TOKEN",payload:a}),s("/"))},[a]),e.exports.jsxDEV("div",{children:"Loading..."},void 0,!1,{fileName:ie,lineNumber:21,columnNumber:11},globalThis)};function ne(s,{initialFetch:t=!0,initialFetchOptions:l={},initialValue:a=null}={}){const[o,r]=m.useState(!1),[n,f]=m.useState(null),[E,R]=m.useState(a),{dispatch:A}=v(),j=m.useCallback(async(I,C)=>{r(!0);function k(u){switch(u?.response?.status){case 401:return null;case 403:return"U hebt geen toegang tot die gegevens";case 400:return"Die gegevens bestaan niet of konden niet worden opgevraagd";default:return"Er is iets fout gegaan"}}return await _.get(`https://f1-predictions-backend.herokuapp.com${I}`,{...C}).then(u=>u.data).then(u=>(R(u),u)).catch(u=>(f(u),u?.response?.status!==401&&A({type:"NOTIFY",payload:{id:new Date().getTime(),text:k(u),delay:5e3,type:"danger"}}),u)).finally(()=>{r(!1)})},[]);return m.useEffect(()=>{t&&j(s,l)},[]),{loading:o,data:E,error:n,fetch:j,setError:f,setLoading:r}}const ce="/grand-prix",_e="/predictions",me="/drivers",je="/results",w="/seasons",ue="/user-info";var i="C:\\Users\\runec\\Documents\\Projects\\f1predictions-ui\\src\\App.jsx";const de=m.lazy(()=>x(()=>import("./Home.66371124.js").then(function(s){return s.H}),["assets/Home.66371124.js","assets/vendor.855a4921.js"])),Ne=m.lazy(()=>x(()=>import("./SignIn.99a51453.js"),["assets/SignIn.99a51453.js","assets/vendor.855a4921.js","assets/Button.10f28fc7.js","assets/useNavbar.ad24bcc4.js"])),be=m.lazy(()=>x(()=>import("./PredictionForm.9d8bd97a.js"),["assets/PredictionForm.9d8bd97a.js","assets/vendor.855a4921.js","assets/ExtraForm.f9357549.js","assets/Form.636858ef.js","assets/warning.b33cdbd2.js","assets/Col.fc6e8593.js","assets/Button.10f28fc7.js","assets/useNavbar.ad24bcc4.js"])),fe=m.lazy(()=>x(()=>import("./Result.a7f68e27.js"),["assets/Result.a7f68e27.js","assets/vendor.855a4921.js","assets/TotalPoints.d6582c21.js","assets/Card.e0403388.js","assets/Col.fc6e8593.js","assets/Placeholder.e408a6d1.js","assets/Button.10f28fc7.js","assets/Row.e869789c.js","assets/useNavbar.ad24bcc4.js"])),pe=m.lazy(()=>x(()=>import("./Leaderboard.244758cc.js"),["assets/Leaderboard.244758cc.js","assets/vendor.855a4921.js","assets/useNavbar.ad24bcc4.js"])),he=m.lazy(()=>x(()=>import("./Admin.bf221e4e.js"),["assets/Admin.bf221e4e.js","assets/vendor.855a4921.js","assets/Button.10f28fc7.js","assets/Form.636858ef.js","assets/warning.b33cdbd2.js","assets/Col.fc6e8593.js","assets/useNavbar.ad24bcc4.js"])),xe=m.lazy(()=>x(()=>import("./Settings.99d5559a.js"),["assets/Settings.99d5559a.js","assets/vendor.855a4921.js","assets/Button.10f28fc7.js","assets/Form.636858ef.js","assets/warning.b33cdbd2.js","assets/Col.fc6e8593.js"])),ve=m.lazy(()=>x(()=>import("./ResultsForm.b48bb5e9.js"),["assets/ResultsForm.b48bb5e9.js","assets/vendor.855a4921.js","assets/ExtraForm.f9357549.js","assets/Form.636858ef.js","assets/warning.b33cdbd2.js","assets/Col.fc6e8593.js","assets/Button.10f28fc7.js","assets/useNavbar.ad24bcc4.js"])),ge=()=>e.exports.jsxDEV("div",{className:"d-flex align-items-center justify-content-center",style:{width:"100vw",height:"100vh"},children:e.exports.jsxDEV(M,{size:"lg",animation:"border",role:"status",variant:"primary",children:e.exports.jsxDEV("span",{className:"visually-hidden",children:"Loading..."},void 0,!1,{fileName:i,lineNumber:31,columnNumber:13},globalThis)},void 0,!1,{fileName:i,lineNumber:30,columnNumber:10},globalThis)},void 0,!1,{fileName:i,lineNumber:29,columnNumber:7},globalThis),Ee=()=>{const{state:s,dispatch:t}=v(),{fetch:l}=ne(null,{initialFetch:!1}),{current_season:a,accessToken:o,user:r}=s;return p.exports.useEffect(async()=>{o&&(await l(ue).then(n=>t({type:"SET_USER",payload:n})),await l(me).then(n=>t({type:"SET_DRIVERS",payload:n})),await l(w).then(n=>{t({type:"SET_SEASONS",payload:n}),t({type:"SET_CURRENT_SEASON",payload:n.find(f=>f.year==new Date().getFullYear())})}))},[o]),p.exports.useEffect(async()=>{a&&await l(`${w}/${a.id}${ce}`).then(n=>t({type:"SET_GRAND_PRIX",payload:n.sort((f,E)=>new Date(f.qualifying_start_timestamp)-new Date(E.qualifying_start_timestamp))}))},[a]),e.exports.jsxDEV(p.exports.Suspense,{fallback:e.exports.jsxDEV(ge,{},void 0,!1,{fileName:i,lineNumber:66,columnNumber:27},globalThis),children:e.exports.jsxDEV("div",{className:"app",children:[e.exports.jsxDEV($,{style:{width:"100vw"},children:[e.exports.jsxDEV("div",{className:"app__navbar sticky-top",children:e.exports.jsxDEV(ae,{},void 0,!1,{fileName:i,lineNumber:70,columnNumber:19},globalThis)},void 0,!1,{fileName:i,lineNumber:69,columnNumber:16},globalThis),e.exports.jsxDEV(B,{className:"py-3",style:{minHeight:"calc(100vh - 100px)"},children:e.exports.jsxDEV(U,{children:[e.exports.jsxDEV(d,{path:"/login",component:Ne},void 0,!1,{fileName:i,lineNumber:74,columnNumber:22},globalThis),e.exports.jsxDEV(d,{exact:!0,path:"/",component:de},void 0,!1,{fileName:i,lineNumber:75,columnNumber:22},globalThis),e.exports.jsxDEV(d,{exact:!0,path:"/prediction/:id",component:be},void 0,!1,{fileName:i,lineNumber:76,columnNumber:22},globalThis),e.exports.jsxDEV(d,{exact:!0,path:"/result/:id",component:fe},void 0,!1,{fileName:i,lineNumber:77,columnNumber:22},globalThis),e.exports.jsxDEV(d,{exact:!0,path:"/leaderboard",component:pe},void 0,!1,{fileName:i,lineNumber:78,columnNumber:22},globalThis),r?.is_admin&&e.exports.jsxDEV(d,{exact:!0,path:"/admin",component:he},void 0,!1,{fileName:i,lineNumber:79,columnNumber:41},globalThis),r?.is_admin&&e.exports.jsxDEV(d,{exact:!0,path:"/admin/result/:id",component:ve},void 0,!1,{fileName:i,lineNumber:80,columnNumber:41},globalThis),e.exports.jsxDEV(d,{exact:!0,path:"/settings",component:xe},void 0,!1,{fileName:i,lineNumber:81,columnNumber:22},globalThis),e.exports.jsxDEV(d,{exact:!0,path:"/callback",component:re},void 0,!1,{fileName:i,lineNumber:82,columnNumber:22},globalThis),e.exports.jsxDEV(d,{exact:!0,path:"*",render:()=>e.exports.jsxDEV(z,{to:"/"},void 0,!1,{fileName:i,lineNumber:83,columnNumber:58},globalThis)},void 0,!1,{fileName:i,lineNumber:83,columnNumber:22},globalThis)]},void 0,!0,{fileName:i,lineNumber:73,columnNumber:19},globalThis)},void 0,!1,{fileName:i,lineNumber:72,columnNumber:16},globalThis),s.navbar.showBottomNav&&e.exports.jsxDEV("div",{className:"app__bottom-navbar position-sticky",style:{bottom:"0",width:"100vw"},children:e.exports.jsxDEV(le,{},void 0,!1,{fileName:i,lineNumber:88,columnNumber:22},globalThis)},void 0,!1,{fileName:i,lineNumber:87,columnNumber:19},globalThis)]},void 0,!0,{fileName:i,lineNumber:68,columnNumber:13},globalThis),e.exports.jsxDEV("div",{className:"app__toaster",children:e.exports.jsxDEV(oe,{},void 0,!1,{fileName:i,lineNumber:93,columnNumber:16},globalThis)},void 0,!1,{fileName:i,lineNumber:92,columnNumber:13},globalThis)]},void 0,!0,{fileName:i,lineNumber:67,columnNumber:10},globalThis)},void 0,!1,{fileName:i,lineNumber:66,columnNumber:7},globalThis)};_.interceptors.request.use(function(s){s.headers={...s.headers,Accept:"application/json","Content-Type":"application/json"};const t=localStorage.getItem("access_token");return t&&(s.headers={...s.headers,Authorization:`Bearer ${t}`}),s},function(s){return Promise.reject(s)});_.interceptors.response.use(function(s){return s},function(s){return s.response.status===401&&window.location.pathname!=="/login"&&window.location.replace(`https://f1-predictions-backend.herokuapp.com/login?redirect_uri=${encodeURIComponent(window.location.origin)}`),Promise.reject(s)});q.use(H).use(K).use(G).init({fallbackLng:"nl",interpolation:{escapeValue:!1}});var T="C:\\Users\\runec\\Documents\\Projects\\f1predictions-ui\\src\\main.jsx";X.render(e.exports.jsxDEV(m.StrictMode,{children:e.exports.jsxDEV(Y,{children:e.exports.jsxDEV(te,{children:e.exports.jsxDEV(Ee,{},void 0,!1,{fileName:T,lineNumber:16,columnNumber:13},globalThis)},void 0,!1,{fileName:T,lineNumber:15,columnNumber:10},globalThis)},void 0,!1,{fileName:T,lineNumber:14,columnNumber:7},globalThis)},void 0,!1,{fileName:T,lineNumber:13,columnNumber:4},globalThis),document.getElementById("root"));export{je as A,x as _,v as a,ce as b,_e as c,w as d,ne as u};

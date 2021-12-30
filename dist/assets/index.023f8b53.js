import{R as m,r as f,j as e,N,a as p,T as O,b as D,u as L,c as F,d as j,S as $,C as B,e as z,f as d,g as U,h as H,i as M,B as q,k as K,l as G,m as X,n as Y}from"./vendor.761b0733.js";const W=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(l){if(l.ep)return;l.ep=!0;const i=r(l);fetch(l.href,i)}};W();const J="modulepreload",V={},Q="/",h=function(t,r){return!r||r.length===0?t():Promise.all(r.map(a=>{if(a=`${Q}${a}`,a in V)return;V[a]=!0;const l=a.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":J,l||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),l)return new Promise((x,_)=>{c.addEventListener("load",x),c.addEventListener("error",_)})})).then(()=>t())};var Z="C:\\Projects\\f1predictions-ui\\src\\core\\contexts\\Store.jsx";const S={title:"F1 Predictions",leftAction:null,leftActioinIcon:null,rightAction:null,rightActionIcon:null,showBottomNav:!0},ee={drivers:[],grandPrix:[],seasons:[],current_season:null,notifications:[],navbar:S,accessToken:null,user:null},w=m.createContext();function se(s,t){switch(t.type){case"SET_DRIVERS":return{...s,drivers:t.payload};case"SET_GRAND_PRIX":return{...s,grandPrix:t.payload};case"SET_SEASONS":return{...s,seasons:t.payload};case"SET_CURRENT_SEASON":return{...s,current_season:t.payload};case"SET_NAVBAR":return{...s,navbar:{...s.navbar,...t.payload}};case"RESET_NAVBAR":return{...s,navbar:S};case"NOTIFY":return{...s,notifications:[...s.notifications,t.payload]};case"REMOVE_NOTIFICATION":return{...s,notifications:s.notifications.filter(r=>r.id!=t.payload)};case"SET_ACCESS_TOKEN":return{...s,accessToken:t.payload};case"SET_USER":return{...s,user:t.payload};default:return s}}const te=({children:s})=>{const[t,r]=m.useReducer(se,ee);return f.exports.useEffect(()=>{const a=localStorage.getItem("access_token");a&&r({type:"SET_ACCESS_TOKEN",payload:a})},[]),e.exports.jsxDEV(w.Provider,{value:{state:t,dispatch:r},children:s},void 0,!1,{fileName:Z,lineNumber:61,columnNumber:11},globalThis)};function v(){const s=m.useContext(w);if(!s)throw Error("StoreContext must be used within a StoreProvider");return s}var n="C:\\Projects\\f1predictions-ui\\src\\components\\Navbar.jsx";const ae=()=>{const{navbar:s,user:t}=v().state;return e.exports.jsxDEV("div",{className:"navbar p-0 d-flex align-items-center  bg-primary text-white ",children:e.exports.jsxDEV("div",{className:"container navbar__content d-flex align-items-centerp-1",children:[e.exports.jsxDEV("div",{className:"navbar__action col d-flex",children:s.leftAction&&e.exports.jsxDEV("button",{onClick:s.leftAction,className:"btn text-white py-0",children:e.exports.jsxDEV("i",{className:`fas ${s.leftActionIcon}`},void 0,!1,{fileName:n,lineNumber:13,columnNumber:22},globalThis)},void 0,!1,{fileName:n,lineNumber:12,columnNumber:19},globalThis)},void 0,!1,{fileName:n,lineNumber:10,columnNumber:13},globalThis),e.exports.jsxDEV("h4",{className:"mb-0 col-9 py-2 text-nowrap",children:s.title},void 0,!1,{fileName:n,lineNumber:17,columnNumber:13},globalThis),e.exports.jsxDEV("div",{className:"navbar__action col d-flex align-items-end",children:s.rightAction&&e.exports.jsxDEV("button",{onClick:s.rightAction,className:"btn text-white py-0",children:e.exports.jsxDEV("i",{className:`fas ${s.rightActionIcon}`},void 0,!1,{fileName:n,lineNumber:21,columnNumber:22},globalThis)},void 0,!1,{fileName:n,lineNumber:20,columnNumber:19},globalThis)},void 0,!1,{fileName:n,lineNumber:18,columnNumber:13},globalThis),e.exports.jsxDEV(N,{className:"navbar__nav",defaultActiveKey:"/home",as:"ul",children:[e.exports.jsxDEV(N.Item,{as:"li",children:e.exports.jsxDEV(N.Link,{to:"/",className:"text-white",exact:!0,activeClassName:"fw-bold",as:p,children:"Home"},void 0,!1,{fileName:n,lineNumber:27,columnNumber:19},globalThis)},void 0,!1,{fileName:n,lineNumber:26,columnNumber:16},globalThis),e.exports.jsxDEV(N.Item,{as:"li",children:e.exports.jsxDEV(N.Link,{to:"/leaderboard",className:"text-white",activeClassName:"fw-bold",as:p,children:"Leaderboards"},void 0,!1,{fileName:n,lineNumber:32,columnNumber:19},globalThis)},void 0,!1,{fileName:n,lineNumber:31,columnNumber:16},globalThis),e.exports.jsxDEV(N.Item,{as:"li",children:e.exports.jsxDEV(N.Link,{to:"/settings",className:"text-white",activeClassName:"fw-bold",as:p,children:"Settings"},void 0,!1,{fileName:n,lineNumber:37,columnNumber:19},globalThis)},void 0,!1,{fileName:n,lineNumber:36,columnNumber:16},globalThis),t?.is_admin&&e.exports.jsxDEV(N.Item,{as:"li",children:e.exports.jsxDEV(N.Link,{to:"/admin",className:"text-white",activeClassName:"fw-bold",as:p,children:"Admin"},void 0,!1,{fileName:n,lineNumber:43,columnNumber:22},globalThis)},void 0,!1,{fileName:n,lineNumber:42,columnNumber:19},globalThis)]},void 0,!0,{fileName:n,lineNumber:25,columnNumber:13},globalThis)]},void 0,!0,{fileName:n,lineNumber:9,columnNumber:10},globalThis)},void 0,!1,{fileName:n,lineNumber:8,columnNumber:7},globalThis)};var b="C:\\Projects\\f1predictions-ui\\src\\components\\BottomNavBar.jsx";const le=()=>{const{user:s}=v().state;return e.exports.jsxDEV("nav",{className:"bg-primary d-flex",children:[e.exports.jsxDEV(p,{to:"/",exact:!0,activeClassName:"opacity-100",className:"btn btn-link py-2 my-1 col text-white opacity-50",children:e.exports.jsxDEV("i",{className:"fas fa-home"},void 0,!1,{fileName:b,lineNumber:10,columnNumber:13},globalThis)},void 0,!1,{fileName:b,lineNumber:9,columnNumber:10},globalThis),e.exports.jsxDEV(p,{to:"/leaderboard",exact:!0,activeClassName:"opacity-100",className:"btn btn-link py-2 my-1 col text-white opacity-50",children:e.exports.jsxDEV("i",{className:"fas fa-poll"},void 0,!1,{fileName:b,lineNumber:13,columnNumber:13},globalThis)},void 0,!1,{fileName:b,lineNumber:12,columnNumber:10},globalThis),e.exports.jsxDEV(p,{to:"/settings",exact:!0,activeClassName:"opacity-100",className:"btn btn-link py-2 my-1 col text-white opacity-50",children:e.exports.jsxDEV("i",{className:"fas fa-cog"},void 0,!1,{fileName:b,lineNumber:16,columnNumber:13},globalThis)},void 0,!1,{fileName:b,lineNumber:15,columnNumber:10},globalThis),s?.is_admin&&e.exports.jsxDEV(p,{to:"/admin",exact:!0,activeClassName:"opacity-100",className:"btn btn-link py-2 my-1 col text-white opacity-50",children:e.exports.jsxDEV("i",{className:"fas fa-users-cog"},void 0,!1,{fileName:b,lineNumber:20,columnNumber:16},globalThis)},void 0,!1,{fileName:b,lineNumber:19,columnNumber:13},globalThis)]},void 0,!0,{fileName:b,lineNumber:8,columnNumber:7},globalThis)};var g="C:\\Projects\\f1predictions-ui\\src\\components\\Toaster.jsx";const ie=()=>{const{state:s,dispatch:t}=v(),{notifications:r}=s,a=f.exports.useMemo(()=>r.length>0?r.reverse()[r.length-1]:null,[r]),l=f.exports.useCallback(i=>{t({type:"REMOVE_NOTIFICATION",payload:i.id})},[t]);return e.exports.jsxDEV(O,{children:e.exports.jsxDEV(D,{show:!!a,autohide:!0,delay:a?.delay||5e3,onClose:()=>l(a),bg:a?.type||"primary",className:"text-white",children:e.exports.jsxDEV(D.Body,{children:e.exports.jsxDEV("div",{className:"d-flex justify-content-between align-items-center",children:[e.exports.jsxDEV("span",{children:a?.text},void 0,!1,{fileName:g,lineNumber:35,columnNumber:19},globalThis),e.exports.jsxDEV("i",{onClick:()=>l(a),className:"fas fa-times text-white"},void 0,!1,{fileName:g,lineNumber:36,columnNumber:19},globalThis)]},void 0,!0,{fileName:g,lineNumber:34,columnNumber:16},globalThis)},void 0,!1,{fileName:g,lineNumber:33,columnNumber:13},globalThis)},void 0,!1,{fileName:g,lineNumber:25,columnNumber:10},globalThis)},void 0,!1,{fileName:g,lineNumber:24,columnNumber:7},globalThis)};var oe="C:\\Projects\\f1predictions-ui\\src\\pages\\Callback.jsx";const re=()=>{const{push:s}=L(),{search:t}=F(),{dispatch:r}=v(),a=f.exports.useMemo(()=>new URLSearchParams(t).get("state"),[t]);return f.exports.useEffect(()=>{a&&(localStorage.setItem("access_token",a),r({type:"SET_ACCESS_TOKEN",payload:a}),s("/"))},[a]),e.exports.jsxDEV("div",{children:"Loading..."},void 0,!1,{fileName:oe,lineNumber:21,columnNumber:11},globalThis)};function ne(s,{initialFetch:t=!0,initialFetchOptions:r={},initialValue:a=null}={}){const[l,i]=m.useState(!1),[c,x]=m.useState(null),[_,R]=m.useState(a),{dispatch:I}=v(),y=m.useCallback(async(C,P)=>{let E=null;E&&clearTimeout(E),E=setTimeout(()=>{i(!0)},10);function k(u){switch(u?.response?.status){case 401:return null;case 403:return"U hebt geen toegang tot die gegevens";case 400:return"Die gegevens bestaan niet of konden niet worden opgevraagd";default:return"Er is iets fout gegaan"}}return await j.get(`https://f1-predictions-backend.herokuapp.com${C}`,{...P}).then(u=>u.data).then(u=>(R(u),u)).catch(u=>(x(u),u?.response?.status!==401&&I({type:"NOTIFY",payload:{id:new Date().getTime(),text:k(u),delay:5e3,type:"danger"}}),u)).finally(()=>{E&&clearTimeout(E),i(!1)})},[]);return m.useEffect(()=>{t&&y(s,r)},[]),{loading:l,data:_,error:c,fetch:y,setError:x,setLoading:i}}const ce="/grand-prix",_e="/predictions",me="/drivers",je="/results",A="/seasons",ue="/user-info";var o="C:\\Projects\\f1predictions-ui\\src\\App.jsx";const de=m.lazy(()=>h(()=>import("./Home.0181ebe0.js").then(function(s){return s.H}),["assets/Home.0181ebe0.js","assets/vendor.761b0733.js"])),Ne=m.lazy(()=>h(()=>import("./SignIn.4241ebfe.js"),["assets/SignIn.4241ebfe.js","assets/vendor.761b0733.js","assets/Button.b639cc19.js","assets/useNavbar.579a1923.js"])),be=m.lazy(()=>h(()=>import("./PredictionForm.0bfaec7a.js"),["assets/PredictionForm.0bfaec7a.js","assets/vendor.761b0733.js","assets/ExtraForm.da38a9da.js","assets/Form.f9dd27f5.js","assets/warning.b33cdbd2.js","assets/Col.48c55a83.js","assets/Button.b639cc19.js","assets/useNavbar.579a1923.js"])),fe=m.lazy(()=>h(()=>import("./Result.0967d03c.js"),["assets/Result.0967d03c.js","assets/vendor.761b0733.js","assets/TotalPoints.b2f4c31b.js","assets/Card.27eea8cf.js","assets/Col.48c55a83.js","assets/Placeholder.5ff9f1c3.js","assets/Button.b639cc19.js","assets/Row.8049492a.js","assets/useNavbar.579a1923.js"])),pe=m.lazy(()=>h(()=>import("./Leaderboard.39b2c150.js"),["assets/Leaderboard.39b2c150.js","assets/vendor.761b0733.js","assets/useNavbar.579a1923.js"])),he=m.lazy(()=>h(()=>import("./Admin.bc82d780.js"),["assets/Admin.bc82d780.js","assets/vendor.761b0733.js","assets/Button.b639cc19.js","assets/Form.f9dd27f5.js","assets/warning.b33cdbd2.js","assets/Col.48c55a83.js","assets/useNavbar.579a1923.js"])),xe=m.lazy(()=>h(()=>import("./Settings.22b1e1d4.js"),["assets/Settings.22b1e1d4.js","assets/vendor.761b0733.js","assets/Button.b639cc19.js","assets/Form.f9dd27f5.js","assets/warning.b33cdbd2.js","assets/Col.48c55a83.js"])),ve=m.lazy(()=>h(()=>import("./ResultsForm.4329502e.js"),["assets/ResultsForm.4329502e.js","assets/vendor.761b0733.js","assets/ExtraForm.da38a9da.js","assets/Form.f9dd27f5.js","assets/warning.b33cdbd2.js","assets/Col.48c55a83.js","assets/Button.b639cc19.js","assets/useNavbar.579a1923.js"])),ge=()=>e.exports.jsxDEV("div",{className:"d-flex align-items-center justify-content-center",style:{width:"100vw",height:"100vh"},children:e.exports.jsxDEV(H,{size:"lg",animation:"border",role:"status",variant:"primary",children:e.exports.jsxDEV("span",{className:"visually-hidden",children:"Loading..."},void 0,!1,{fileName:o,lineNumber:31,columnNumber:13},globalThis)},void 0,!1,{fileName:o,lineNumber:30,columnNumber:10},globalThis)},void 0,!1,{fileName:o,lineNumber:29,columnNumber:7},globalThis),Ee=()=>{const{state:s,dispatch:t}=v(),{fetch:r}=ne(null,{initialFetch:!1}),{current_season:a,accessToken:l}=s;return f.exports.useEffect(async()=>{l&&(await r(ue).then(i=>t({type:"SET_USER",payload:i})),await r(me).then(i=>t({type:"SET_DRIVERS",payload:i})),await r(A).then(i=>{t({type:"SET_SEASONS",payload:i}),t({type:"SET_CURRENT_SEASON",payload:i.find(c=>c.year==new Date().getFullYear())})}))},[l]),f.exports.useEffect(async()=>{a&&await r(`${A}/${a.id}${ce}`).then(i=>t({type:"SET_GRAND_PRIX",payload:i.sort((c,x)=>new Date(c.qualifying_start_timestamp)-new Date(x.qualifying_start_timestamp))}))},[a]),e.exports.jsxDEV(f.exports.Suspense,{fallback:e.exports.jsxDEV(ge,{},void 0,!1,{fileName:o,lineNumber:66,columnNumber:27},globalThis),children:e.exports.jsxDEV("div",{className:"app",children:[e.exports.jsxDEV($,{style:{width:"100vw"},children:[e.exports.jsxDEV("div",{className:"app__navbar sticky-top",children:e.exports.jsxDEV(ae,{},void 0,!1,{fileName:o,lineNumber:70,columnNumber:19},globalThis)},void 0,!1,{fileName:o,lineNumber:69,columnNumber:16},globalThis),e.exports.jsxDEV(B,{className:"py-3",style:{minHeight:"calc(100vh - 100px)"},children:e.exports.jsxDEV(z,{children:[e.exports.jsxDEV(d,{path:"/login",component:Ne},void 0,!1,{fileName:o,lineNumber:74,columnNumber:22},globalThis),e.exports.jsxDEV(d,{exact:!0,path:"/",component:de},void 0,!1,{fileName:o,lineNumber:75,columnNumber:22},globalThis),e.exports.jsxDEV(d,{exact:!0,path:"/prediction/:id",component:be},void 0,!1,{fileName:o,lineNumber:76,columnNumber:22},globalThis),e.exports.jsxDEV(d,{exact:!0,path:"/result/:id",component:fe},void 0,!1,{fileName:o,lineNumber:77,columnNumber:22},globalThis),e.exports.jsxDEV(d,{exact:!0,path:"/leaderboard",component:pe},void 0,!1,{fileName:o,lineNumber:78,columnNumber:22},globalThis),e.exports.jsxDEV(d,{exact:!0,path:"/admin",component:he},void 0,!1,{fileName:o,lineNumber:79,columnNumber:22},globalThis),e.exports.jsxDEV(d,{exact:!0,path:"/admin/result/:id",component:ve},void 0,!1,{fileName:o,lineNumber:80,columnNumber:22},globalThis),e.exports.jsxDEV(d,{exact:!0,path:"/settings",component:xe},void 0,!1,{fileName:o,lineNumber:81,columnNumber:22},globalThis),e.exports.jsxDEV(d,{exact:!0,path:"/callback",component:re},void 0,!1,{fileName:o,lineNumber:82,columnNumber:22},globalThis),e.exports.jsxDEV(d,{exact:!0,path:"*",render:()=>e.exports.jsxDEV(U,{to:"/"},void 0,!1,{fileName:o,lineNumber:83,columnNumber:58},globalThis)},void 0,!1,{fileName:o,lineNumber:83,columnNumber:22},globalThis)]},void 0,!0,{fileName:o,lineNumber:73,columnNumber:19},globalThis)},void 0,!1,{fileName:o,lineNumber:72,columnNumber:16},globalThis),s.navbar.showBottomNav&&e.exports.jsxDEV("div",{className:"app__bottom-navbar position-sticky",style:{bottom:"0",width:"100vw"},children:e.exports.jsxDEV(le,{},void 0,!1,{fileName:o,lineNumber:88,columnNumber:22},globalThis)},void 0,!1,{fileName:o,lineNumber:87,columnNumber:19},globalThis)]},void 0,!0,{fileName:o,lineNumber:68,columnNumber:13},globalThis),e.exports.jsxDEV("div",{className:"app__toaster",children:e.exports.jsxDEV(ie,{},void 0,!1,{fileName:o,lineNumber:93,columnNumber:16},globalThis)},void 0,!1,{fileName:o,lineNumber:92,columnNumber:13},globalThis)]},void 0,!0,{fileName:o,lineNumber:67,columnNumber:10},globalThis)},void 0,!1,{fileName:o,lineNumber:66,columnNumber:7},globalThis)};j.interceptors.request.use(function(s){s.headers={...s.headers,Accept:"application/json","Content-Type":"application/json"};const t=localStorage.getItem("access_token");return t&&(s.headers={...s.headers,Authorization:`Bearer ${t}`}),s},function(s){return Promise.reject(s)});j.interceptors.response.use(function(s){return s},function(s){return s.response.status===401&&window.location.pathname!=="/login"&&window.location.replace(window.location.origin+`/login?redirect_uri=${window.location.href}`),Promise.reject(s)});M.use(q).use(K).use(G).init({lng:"nl",fallbackLng:"nl",interpolation:{escapeValue:!1}});var T="C:\\Projects\\f1predictions-ui\\src\\main.jsx";X.render(e.exports.jsxDEV(m.StrictMode,{children:e.exports.jsxDEV(Y,{children:e.exports.jsxDEV(te,{children:e.exports.jsxDEV(Ee,{},void 0,!1,{fileName:T,lineNumber:16,columnNumber:13},globalThis)},void 0,!1,{fileName:T,lineNumber:15,columnNumber:10},globalThis)},void 0,!1,{fileName:T,lineNumber:14,columnNumber:7},globalThis)},void 0,!1,{fileName:T,lineNumber:13,columnNumber:4},globalThis),document.getElementById("root"));export{je as A,h as _,v as a,ce as b,_e as c,A as d,ne as u};
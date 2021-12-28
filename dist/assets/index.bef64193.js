import{R as m,a as V,j as e,N as f,b as x,r as E,T as w,c as T,v as F,n as $,B as S,S as B,C as W,d as z,e as b,f as U,g as H,h as M,i as G}from"./vendor.8eb74db1.js";const X=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}};X();const q="modulepreload",A={},K="/",v=function(l,o){return!o||o.length===0?l():Promise.all(o.map(s=>{if(s=`${K}${s}`,s in A)return;A[s]=!0;const i=s.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":q,i||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),i)return new Promise((d,g)=>{r.addEventListener("load",d),r.addEventListener("error",g)})})).then(()=>l())},Y="/grand-prix",Ee="/predictions",J="/drivers",je="/results",Q="/seasons";function Z(t,{initialFetch:l=!0,initialFetchOptions:o={},initialValue:s=null}={}){const[i,a]=m.useState(!1),[r,d]=m.useState(null),[g,u]=m.useState(s),{dispatch:y}=D(),R=m.useCallback(async(k,O)=>{a(!0);function L(N){switch(N?.response?.status){case 401:return null;case 403:return"U hebt geen toegang tot die gegevens";case 400:return"Die gegevens bestaan niet of konden niet worden opgevraagd";default:return"Er is iets fout gegaan"}}return await V.get(`http://localhost:8080${k}`,{...O}).then(N=>N.data).then(N=>(u(N),N)).catch(N=>(d(N),N?.response?.status!==401&&y({type:"NOTIFY",payload:{id:new Date().getTime(),text:L(N),delay:5e3,type:"danger"}}),N)).finally(()=>a(!1))},[]);return m.useEffect(()=>{l&&R(t,o)},[]),{loading:i,data:g,error:r,fetch:R,setError:d,setLoading:a}}var ee="C:\\Projects\\f1predictions-ui\\src\\core\\contexts\\Store.jsx";const I={title:"F1 Predictions",leftAction:null,leftActioinIcon:null,rightAction:null,rightActionIcon:null,showBottomNav:!0},te={drivers:[],grandPrix:[],seasons:[],current_season:null,notifications:[],navbar:I},P=m.createContext();function se(t,l){switch(l.type){case"SET_DRIVERS":return{...t,drivers:l.payload};case"SET_GRAND_PRIX":return{...t,grandPrix:l.payload};case"SET_SEASONS":return{...t,seasons:l.payload};case"SET_CURRENT_SEASON":return{...t,current_season:l.payload};case"SET_NAVBAR":return{...t,navbar:{...t.navbar,...l.payload}};case"RESET_NAVBAR":return{...t,navbar:I};case"NOTIFY":return{...t,notifications:[...t.notifications,l.payload]};case"REMOVE_NOTIFICATION":return{...t,notifications:t.notifications.filter(o=>o.id!=l.payload)};default:return t}}const ie=({children:t})=>{const[l,o]=m.useReducer(se,te);return e.exports.jsxDEV(P.Provider,{value:{state:l,dispatch:o},children:t},void 0,!1,{fileName:ee,lineNumber:51,columnNumber:11},globalThis)};function D(){const t=m.useContext(P);if(!t)throw Error("StoreContext must be used within a StoreProvider");return t}var c="C:\\Projects\\f1predictions-ui\\src\\components\\Navbar.jsx";const le=()=>{const{navbar:t}=D().state;return e.exports.jsxDEV("div",{className:"navbar p-0 d-flex align-items-center  bg-primary text-white ",children:e.exports.jsxDEV("div",{className:"container navbar__content d-flex align-items-centerp-1",children:[e.exports.jsxDEV("div",{className:"navbar__action col d-flex",children:t.leftAction&&e.exports.jsxDEV("button",{onClick:t.leftAction,className:"btn text-white py-0",children:e.exports.jsxDEV("i",{className:`fas ${t.leftActionIcon}`},void 0,!1,{fileName:c,lineNumber:13,columnNumber:22},globalThis)},void 0,!1,{fileName:c,lineNumber:12,columnNumber:19},globalThis)},void 0,!1,{fileName:c,lineNumber:10,columnNumber:13},globalThis),e.exports.jsxDEV("h4",{className:"mb-0 col-9 py-2 text-nowrap",children:t.title},void 0,!1,{fileName:c,lineNumber:17,columnNumber:13},globalThis),e.exports.jsxDEV("div",{className:"navbar__action col d-flex align-items-end",children:t.rightAction&&e.exports.jsxDEV("button",{onClick:t.rightAction,className:"btn text-white py-0",children:e.exports.jsxDEV("i",{className:`fas ${t.rightActionIcon}`},void 0,!1,{fileName:c,lineNumber:21,columnNumber:22},globalThis)},void 0,!1,{fileName:c,lineNumber:20,columnNumber:19},globalThis)},void 0,!1,{fileName:c,lineNumber:18,columnNumber:13},globalThis),e.exports.jsxDEV(f,{className:"navbar__nav",defaultActiveKey:"/home",as:"ul",children:[e.exports.jsxDEV(f.Item,{as:"li",children:e.exports.jsxDEV(f.Link,{to:"/",className:"text-white",exact:!0,activeClassName:"fw-bold",as:x,children:"Home"},void 0,!1,{fileName:c,lineNumber:27,columnNumber:19},globalThis)},void 0,!1,{fileName:c,lineNumber:26,columnNumber:16},globalThis),e.exports.jsxDEV(f.Item,{as:"li",children:e.exports.jsxDEV(f.Link,{to:"/leaderboard",className:"text-white",activeClassName:"fw-bold",as:x,children:"Leaderboards"},void 0,!1,{fileName:c,lineNumber:32,columnNumber:19},globalThis)},void 0,!1,{fileName:c,lineNumber:31,columnNumber:16},globalThis),e.exports.jsxDEV(f.Item,{as:"li",children:e.exports.jsxDEV(f.Link,{to:"/settings",className:"text-white",activeClassName:"fw-bold",as:x,children:"Settings"},void 0,!1,{fileName:c,lineNumber:37,columnNumber:19},globalThis)},void 0,!1,{fileName:c,lineNumber:36,columnNumber:16},globalThis),e.exports.jsxDEV(f.Item,{as:"li",children:e.exports.jsxDEV(f.Link,{to:"/admin",className:"text-white",activeClassName:"fw-bold",as:x,children:"Admin"},void 0,!1,{fileName:c,lineNumber:42,columnNumber:19},globalThis)},void 0,!1,{fileName:c,lineNumber:41,columnNumber:16},globalThis)]},void 0,!0,{fileName:c,lineNumber:25,columnNumber:13},globalThis)]},void 0,!0,{fileName:c,lineNumber:9,columnNumber:10},globalThis)},void 0,!1,{fileName:c,lineNumber:8,columnNumber:7},globalThis)};var p="C:\\Projects\\f1predictions-ui\\src\\components\\BottomNavBar.jsx";const oe=()=>e.exports.jsxDEV("nav",{className:"bg-primary d-flex",children:[e.exports.jsxDEV(x,{to:"/",exact:!0,activeClassName:"opacity-100",className:"btn btn-link py-2 my-1 col text-white opacity-50",children:e.exports.jsxDEV("i",{className:"fas fa-home"},void 0,!1,{fileName:p,lineNumber:7,columnNumber:13},globalThis)},void 0,!1,{fileName:p,lineNumber:6,columnNumber:10},globalThis),e.exports.jsxDEV(x,{to:"/leaderboard",exact:!0,activeClassName:"opacity-100",className:"btn btn-link py-2 my-1 col text-white opacity-50",children:e.exports.jsxDEV("i",{className:"fas fa-poll"},void 0,!1,{fileName:p,lineNumber:10,columnNumber:13},globalThis)},void 0,!1,{fileName:p,lineNumber:9,columnNumber:10},globalThis),e.exports.jsxDEV(x,{to:"/settings",exact:!0,activeClassName:"opacity-100",className:"btn btn-link py-2 my-1 col text-white opacity-50",children:e.exports.jsxDEV("i",{className:"fas fa-cog"},void 0,!1,{fileName:p,lineNumber:13,columnNumber:13},globalThis)},void 0,!1,{fileName:p,lineNumber:12,columnNumber:10},globalThis),e.exports.jsxDEV(x,{to:"/admin",exact:!0,activeClassName:"opacity-100",className:"btn btn-link py-2 my-1 col text-white opacity-50",children:e.exports.jsxDEV("i",{className:"fas fa-users-cog"},void 0,!1,{fileName:p,lineNumber:16,columnNumber:13},globalThis)},void 0,!1,{fileName:p,lineNumber:15,columnNumber:10},globalThis)]},void 0,!0,{fileName:p,lineNumber:5,columnNumber:7},globalThis);var j="C:\\Projects\\f1predictions-ui\\src\\components\\Toaster.jsx";const ae=()=>{const{state:t,dispatch:l}=D(),{notifications:o}=t,s=E.exports.useMemo(()=>o.length>0?o.reverse()[o.length-1]:null,[o]),i=E.exports.useCallback(a=>{l({type:"REMOVE_NOTIFICATION",payload:a.id})},[l]);return e.exports.jsxDEV(w,{children:e.exports.jsxDEV(T,{show:!!s,autohide:!0,delay:s?.delay||5e3,onClose:()=>i(s),bg:s?.type||"primary",className:"text-white",children:e.exports.jsxDEV(T.Body,{children:e.exports.jsxDEV("div",{className:"d-flex justify-content-between align-items-center",children:[e.exports.jsxDEV("span",{children:s?.text},void 0,!1,{fileName:j,lineNumber:35,columnNumber:19},globalThis),e.exports.jsxDEV("i",{onClick:()=>i(s),className:"fas fa-times text-white"},void 0,!1,{fileName:j,lineNumber:36,columnNumber:19},globalThis)]},void 0,!0,{fileName:j,lineNumber:34,columnNumber:16},globalThis)},void 0,!1,{fileName:j,lineNumber:33,columnNumber:13},globalThis)},void 0,!1,{fileName:j,lineNumber:25,columnNumber:10},globalThis)},void 0,!1,{fileName:j,lineNumber:24,columnNumber:7},globalThis)};function re(t={}){const{immediate:l=!1,onNeedRefresh:o,onOfflineReady:s,onRegistered:i,onRegisterError:a}=t;let r,d;const g=async(u=!0)=>{u&&(r==null||r.addEventListener("controlling",y=>{y.isUpdate&&window.location.reload()})),d&&d.waiting&&await $(d.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){r=new F("/sw.js",{scope:"/"}),r.addEventListener("activated",u=>{u.isUpdate||s==null||s()});{const u=()=>{o==null||o()};r.addEventListener("waiting",u),r.addEventListener("externalwaiting",u)}r.register({immediate:l}).then(u=>{d=u,i==null||i(u)}).catch(u=>{a==null||a(u)})}return g}function C(t={}){const{immediate:l=!0,onNeedRefresh:o,onOfflineReady:s,onRegistered:i,onRegisterError:a}=t,[r,d]=E.exports.useState(!1),[g,u]=E.exports.useState(!1),[y]=E.exports.useState(()=>re({immediate:l,onOfflineReady(){u(!0),s==null||s()},onNeedRefresh(){d(!0),o==null||o()},onRegistered:i,onRegisterError:a}));return{needRefresh:[r,d],offlineReady:[g,u],updateServiceWorker:y}}var h="C:\\Projects\\f1predictions-ui\\src\\components\\ReloadPrompt.jsx";function ne(){const{offlineReady:[t,l],needRefresh:[o,s],updateServiceWorker:i}=C({onRegistered(r){console.log("SW Registered")},onRegisterError(r){console.log("SW registration error",r)}}),a=()=>{l(!1),s(!1)};return e.exports.jsxDEV(w,{className:"position-fixed ",style:{bottom:"90px",left:"50%",transform:"translateX(-50%)"},children:o&&e.exports.jsxDEV(T,{className:"d-inline-block m-1 shadow-lg",bg:"light",onClose:a,children:[e.exports.jsxDEV(T.Header,{children:[e.exports.jsxDEV("img",{src:"/assets/logo.png",height:"20px",className:"rounded me-2",alt:""},void 0,!1,{fileName:h,lineNumber:32,columnNumber:19},this),e.exports.jsxDEV("strong",{className:"me-auto",children:"Update available"},void 0,!1,{fileName:h,lineNumber:33,columnNumber:19},this)]},void 0,!0,{fileName:h,lineNumber:31,columnNumber:16},this),e.exports.jsxDEV(T.Body,{children:[e.exports.jsxDEV("p",{children:"New content is available, click on update button to get the newest features."},void 0,!1,{fileName:h,lineNumber:36,columnNumber:19},this),e.exports.jsxDEV(S,{onClick:i,variant:"primary",children:"Update"},void 0,!1,{fileName:h,lineNumber:37,columnNumber:19},this),e.exports.jsxDEV(S,{onClick:i,variant:"link",className:"text-dark text-decoration-none",children:"Close"},void 0,!1,{fileName:h,lineNumber:40,columnNumber:19},this)]},void 0,!0,{fileName:h,lineNumber:35,columnNumber:16},this)]},void 0,!0,{fileName:h,lineNumber:30,columnNumber:13},this)},void 0,!1,{fileName:h,lineNumber:28,columnNumber:7},this)}var n="C:\\Projects\\f1predictions-ui\\src\\App.jsx";const ce=m.lazy(()=>v(()=>import("./Home.5515a5a9.js").then(function(t){return t.H}),["assets/Home.5515a5a9.js","assets/vendor.8eb74db1.js"])),me=m.lazy(()=>v(()=>import("./SignIn.2e62a872.js"),["assets/SignIn.2e62a872.js","assets/vendor.8eb74db1.js","assets/useNavbar.99eea9d6.js"])),ue=m.lazy(()=>v(()=>import("./PredictionForm.4ff7f8e2.js"),["assets/PredictionForm.4ff7f8e2.js","assets/vendor.8eb74db1.js","assets/usePost.b290b9b0.js","assets/Form.beb0e923.js","assets/warning.b33cdbd2.js","assets/Col.2a4ceb7a.js","assets/useNavbar.99eea9d6.js"])),de=m.lazy(()=>v(()=>import("./Result.3c4e7fe9.js"),["assets/Result.3c4e7fe9.js","assets/vendor.8eb74db1.js","assets/useNavbar.99eea9d6.js"])),Ne=m.lazy(()=>v(()=>import("./Leaderboard.e0d1267d.js"),["assets/Leaderboard.e0d1267d.js","assets/vendor.8eb74db1.js","assets/useNavbar.99eea9d6.js"])),fe=m.lazy(()=>v(()=>import("./Admin.a26404c8.js"),["assets/Admin.a26404c8.js","assets/vendor.8eb74db1.js","assets/Form.beb0e923.js","assets/warning.b33cdbd2.js","assets/Col.2a4ceb7a.js","assets/useNavbar.99eea9d6.js"])),be=m.lazy(()=>v(()=>import("./Settings.0a519e84.js"),["assets/Settings.0a519e84.js","assets/vendor.8eb74db1.js","assets/Form.beb0e923.js","assets/warning.b33cdbd2.js","assets/Col.2a4ceb7a.js"])),pe=m.lazy(()=>v(()=>import("./ResultsForm.7c861811.js"),["assets/ResultsForm.7c861811.js","assets/vendor.8eb74db1.js","assets/usePost.b290b9b0.js","assets/Form.beb0e923.js","assets/warning.b33cdbd2.js","assets/Col.2a4ceb7a.js","assets/useNavbar.99eea9d6.js"])),he=60*60*1e3,xe=()=>e.exports.jsxDEV("div",{className:"d-flex align-items-center justify-content-center",style:{width:"100vw",height:"100vh"},children:e.exports.jsxDEV(H,{size:"lg",animation:"border",role:"status",variant:"primary",children:e.exports.jsxDEV("span",{className:"visually-hidden",children:"Loading..."},void 0,!1,{fileName:n,lineNumber:32,columnNumber:13},globalThis)},void 0,!1,{fileName:n,lineNumber:31,columnNumber:10},globalThis)},void 0,!1,{fileName:n,lineNumber:30,columnNumber:7},globalThis),ve=()=>{const{state:t,dispatch:l}=D(),{fetch:o}=Z(null,{initialFetch:!1});return E.exports.useEffect(async()=>{await o(J).then(s=>l({type:"SET_DRIVERS",payload:s})),await o(Y).then(s=>l({type:"SET_GRAND_PRIX",payload:s})),await o(Q).then(s=>{l({type:"SET_SEASONS",payload:s}),l({type:"SET_CURRENT_SEASON",payload:s.find(i=>i.year==new Date().getFullYear())})})},[o]),C({onRegistered(s){s&&setInterval(()=>{s.update()},he)}}),e.exports.jsxDEV(E.exports.Suspense,{fallback:e.exports.jsxDEV(xe,{},void 0,!1,{fileName:n,lineNumber:61,columnNumber:27},globalThis),children:e.exports.jsxDEV("div",{className:"app",children:[e.exports.jsxDEV(B,{style:{width:"100vw"},children:[e.exports.jsxDEV("div",{className:"app__navbar sticky-top",children:e.exports.jsxDEV(le,{},void 0,!1,{fileName:n,lineNumber:65,columnNumber:19},globalThis)},void 0,!1,{fileName:n,lineNumber:64,columnNumber:16},globalThis),e.exports.jsxDEV(W,{className:"py-3",style:{minHeight:"calc(100vh - 100px)"},children:e.exports.jsxDEV(z,{children:[e.exports.jsxDEV(b,{path:"/login",component:me},void 0,!1,{fileName:n,lineNumber:69,columnNumber:22},globalThis),e.exports.jsxDEV(b,{exact:!0,path:"/",component:ce},void 0,!1,{fileName:n,lineNumber:70,columnNumber:22},globalThis),e.exports.jsxDEV(b,{exact:!0,path:"/prediction/:id",component:ue},void 0,!1,{fileName:n,lineNumber:71,columnNumber:22},globalThis),e.exports.jsxDEV(b,{exact:!0,path:"/result/:id",component:de},void 0,!1,{fileName:n,lineNumber:72,columnNumber:22},globalThis),e.exports.jsxDEV(b,{exact:!0,path:"/leaderboard",component:Ne},void 0,!1,{fileName:n,lineNumber:73,columnNumber:22},globalThis),e.exports.jsxDEV(b,{exact:!0,path:"/admin",component:fe},void 0,!1,{fileName:n,lineNumber:74,columnNumber:22},globalThis),e.exports.jsxDEV(b,{exact:!0,path:"/admin/result/:id",component:pe},void 0,!1,{fileName:n,lineNumber:75,columnNumber:22},globalThis),e.exports.jsxDEV(b,{exact:!0,path:"/settings",component:be},void 0,!1,{fileName:n,lineNumber:76,columnNumber:22},globalThis),e.exports.jsxDEV(b,{exact:!0,path:"*",render:()=>e.exports.jsxDEV(U,{to:"/"},void 0,!1,{fileName:n,lineNumber:77,columnNumber:58},globalThis)},void 0,!1,{fileName:n,lineNumber:77,columnNumber:22},globalThis)]},void 0,!0,{fileName:n,lineNumber:68,columnNumber:19},globalThis)},void 0,!1,{fileName:n,lineNumber:67,columnNumber:16},globalThis),t.navbar.showBottomNav&&e.exports.jsxDEV("div",{className:"app__bottom-navbar position-sticky",style:{bottom:"0",width:"100vw"},children:e.exports.jsxDEV(oe,{},void 0,!1,{fileName:n,lineNumber:82,columnNumber:22},globalThis)},void 0,!1,{fileName:n,lineNumber:81,columnNumber:19},globalThis)]},void 0,!0,{fileName:n,lineNumber:63,columnNumber:13},globalThis),e.exports.jsxDEV("div",{className:"app__toaster",children:e.exports.jsxDEV(ae,{},void 0,!1,{fileName:n,lineNumber:87,columnNumber:16},globalThis)},void 0,!1,{fileName:n,lineNumber:86,columnNumber:13},globalThis),e.exports.jsxDEV(ne,{},void 0,!1,{fileName:n,lineNumber:89,columnNumber:13},globalThis)]},void 0,!0,{fileName:n,lineNumber:62,columnNumber:10},globalThis)},void 0,!1,{fileName:n,lineNumber:61,columnNumber:7},globalThis)};V.interceptors.request.use(function(t){return t.withCredentials=!0,t.headers={...t.headers,Accept:"application/json","Content-Type":"application/json"},t},function(t){return Promise.reject(t)});V.interceptors.response.use(function(t){return t},function(t){return t.response.status===401&&window.location.pathname!=="/login"&&window.location.replace(window.location.origin+`/login?redirect_uri=${window.location.href}`),Promise.reject(t)});var _="C:\\Projects\\f1predictions-ui\\src\\main.jsx";M.render(e.exports.jsxDEV(m.StrictMode,{children:e.exports.jsxDEV(G,{children:e.exports.jsxDEV(ie,{children:e.exports.jsxDEV(ve,{},void 0,!1,{fileName:_,lineNumber:14,columnNumber:13},globalThis)},void 0,!1,{fileName:_,lineNumber:13,columnNumber:10},globalThis)},void 0,!1,{fileName:_,lineNumber:12,columnNumber:7},globalThis)},void 0,!1,{fileName:_,lineNumber:11,columnNumber:4},globalThis),document.getElementById("root"));export{je as A,v as _,D as a,Y as b,Ee as c,Q as d,Z as u};

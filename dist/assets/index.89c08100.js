import{R as m,a as _,j as e,N as f,b as h,r as g,T as k,c as R,v as L,n as F,S as $,C as B,d as W,e as b,f as z,g as M,h as U,B as G}from"./vendor.7928b14f.js";const H=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}};H();const q="modulepreload",S={},K="/",x=function(l,o){return!o||o.length===0?l():Promise.all(o.map(s=>{if(s=`${K}${s}`,s in S)return;S[s]=!0;const i=s.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":q,i||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),i)return new Promise((d,v)=>{r.addEventListener("load",d),r.addEventListener("error",v)})})).then(()=>l())},X="/grand-prix",ge="/predictions",Y="/drivers",Ee="/results",J="/seasons";function Q(t,{initialFetch:l=!0,initialFetchOptions:o={},initialValue:s=null}={}){const[i,a]=m.useState(!1),[r,d]=m.useState(null),[v,u]=m.useState(s),{dispatch:T}=y(),V=m.useCallback(async(I,C)=>{a(!0);function O(N){switch(N?.response?.status){case 401:return null;case 403:return"U hebt geen toegang tot die gegevens";case 400:return"Die gegevens bestaan niet of konden niet worden opgevraagd";default:return"Er is iets fout gegaan"}}return await _.get(`http://localhost:8080${I}`,{...C}).then(N=>N.data).then(N=>(u(N),N)).catch(N=>(d(N),N?.response?.status!==401&&T({type:"NOTIFY",payload:{id:new Date().getTime(),text:O(N),delay:5e3,type:"danger"}}),N)).finally(()=>a(!1))},[]);return m.useEffect(()=>{l&&V(t,o)},[]),{loading:i,data:v,error:r,fetch:V,setError:d,setLoading:a}}var Z="C:\\Projects\\f1predictions-ui\\src\\core\\contexts\\Store.jsx";const w={title:"F1 Predictions",leftAction:null,leftActioinIcon:null,rightAction:null,rightActionIcon:null,showBottomNav:!0},ee={drivers:[],grandPrix:[],seasons:[],current_season:null,notifications:[],navbar:w},A=m.createContext();function te(t,l){switch(l.type){case"SET_DRIVERS":return{...t,drivers:l.payload};case"SET_GRAND_PRIX":return{...t,grandPrix:l.payload};case"SET_SEASONS":return{...t,seasons:l.payload};case"SET_CURRENT_SEASON":return{...t,current_season:l.payload};case"SET_NAVBAR":return{...t,navbar:{...t.navbar,...l.payload}};case"RESET_NAVBAR":return{...t,navbar:w};case"NOTIFY":return{...t,notifications:[...t.notifications,l.payload]};case"REMOVE_NOTIFICATION":return{...t,notifications:t.notifications.filter(o=>o.id!=l.payload)};default:return t}}const se=({children:t})=>{const[l,o]=m.useReducer(te,ee);return e.exports.jsxDEV(A.Provider,{value:{state:l,dispatch:o},children:t},void 0,!1,{fileName:Z,lineNumber:51,columnNumber:11},globalThis)};function y(){const t=m.useContext(A);if(!t)throw Error("StoreContext must be used within a StoreProvider");return t}var c="C:\\Projects\\f1predictions-ui\\src\\components\\Navbar.jsx";const ie=()=>{const{navbar:t}=y().state;return e.exports.jsxDEV("div",{className:"navbar p-0 d-flex align-items-center  bg-primary text-white ",children:e.exports.jsxDEV("div",{className:"container navbar__content d-flex align-items-centerp-1",children:[e.exports.jsxDEV("div",{className:"navbar__action col d-flex",children:t.leftAction&&e.exports.jsxDEV("button",{onClick:t.leftAction,className:"btn text-white py-0",children:e.exports.jsxDEV("i",{className:`fas ${t.leftActionIcon}`},void 0,!1,{fileName:c,lineNumber:13,columnNumber:22},globalThis)},void 0,!1,{fileName:c,lineNumber:12,columnNumber:19},globalThis)},void 0,!1,{fileName:c,lineNumber:10,columnNumber:13},globalThis),e.exports.jsxDEV("h4",{className:"mb-0 col-9 py-2 text-nowrap",children:t.title},void 0,!1,{fileName:c,lineNumber:17,columnNumber:13},globalThis),e.exports.jsxDEV("div",{className:"navbar__action col d-flex align-items-end",children:t.rightAction&&e.exports.jsxDEV("button",{onClick:t.rightAction,className:"btn text-white py-0",children:e.exports.jsxDEV("i",{className:`fas ${t.rightActionIcon}`},void 0,!1,{fileName:c,lineNumber:21,columnNumber:22},globalThis)},void 0,!1,{fileName:c,lineNumber:20,columnNumber:19},globalThis)},void 0,!1,{fileName:c,lineNumber:18,columnNumber:13},globalThis),e.exports.jsxDEV(f,{className:"navbar__nav",defaultActiveKey:"/home",as:"ul",children:[e.exports.jsxDEV(f.Item,{as:"li",children:e.exports.jsxDEV(f.Link,{to:"/",className:"text-white",exact:!0,activeClassName:"fw-bold",as:h,children:"Home"},void 0,!1,{fileName:c,lineNumber:27,columnNumber:19},globalThis)},void 0,!1,{fileName:c,lineNumber:26,columnNumber:16},globalThis),e.exports.jsxDEV(f.Item,{as:"li",children:e.exports.jsxDEV(f.Link,{to:"/leaderboard",className:"text-white",activeClassName:"fw-bold",as:h,children:"Leaderboards"},void 0,!1,{fileName:c,lineNumber:32,columnNumber:19},globalThis)},void 0,!1,{fileName:c,lineNumber:31,columnNumber:16},globalThis),e.exports.jsxDEV(f.Item,{as:"li",children:e.exports.jsxDEV(f.Link,{to:"/settings",className:"text-white",activeClassName:"fw-bold",as:h,children:"Settings"},void 0,!1,{fileName:c,lineNumber:37,columnNumber:19},globalThis)},void 0,!1,{fileName:c,lineNumber:36,columnNumber:16},globalThis),e.exports.jsxDEV(f.Item,{as:"li",children:e.exports.jsxDEV(f.Link,{to:"/admin",className:"text-white",activeClassName:"fw-bold",as:h,children:"Admin"},void 0,!1,{fileName:c,lineNumber:42,columnNumber:19},globalThis)},void 0,!1,{fileName:c,lineNumber:41,columnNumber:16},globalThis)]},void 0,!0,{fileName:c,lineNumber:25,columnNumber:13},globalThis)]},void 0,!0,{fileName:c,lineNumber:9,columnNumber:10},globalThis)},void 0,!1,{fileName:c,lineNumber:8,columnNumber:7},globalThis)};var p="C:\\Projects\\f1predictions-ui\\src\\components\\BottomNavBar.jsx";const le=()=>e.exports.jsxDEV("nav",{className:"bg-primary d-flex",children:[e.exports.jsxDEV(h,{to:"/",exact:!0,activeClassName:"opacity-100",className:"btn btn-link py-2 my-1 col text-white opacity-50",children:e.exports.jsxDEV("i",{className:"fas fa-home"},void 0,!1,{fileName:p,lineNumber:7,columnNumber:13},globalThis)},void 0,!1,{fileName:p,lineNumber:6,columnNumber:10},globalThis),e.exports.jsxDEV(h,{to:"/leaderboard",exact:!0,activeClassName:"opacity-100",className:"btn btn-link py-2 my-1 col text-white opacity-50",children:e.exports.jsxDEV("i",{className:"fas fa-poll"},void 0,!1,{fileName:p,lineNumber:10,columnNumber:13},globalThis)},void 0,!1,{fileName:p,lineNumber:9,columnNumber:10},globalThis),e.exports.jsxDEV(h,{to:"/settings",exact:!0,activeClassName:"opacity-100",className:"btn btn-link py-2 my-1 col text-white opacity-50",children:e.exports.jsxDEV("i",{className:"fas fa-cog"},void 0,!1,{fileName:p,lineNumber:13,columnNumber:13},globalThis)},void 0,!1,{fileName:p,lineNumber:12,columnNumber:10},globalThis),e.exports.jsxDEV(h,{to:"/admin",exact:!0,activeClassName:"opacity-100",className:"btn btn-link py-2 my-1 col text-white opacity-50",children:e.exports.jsxDEV("i",{className:"fas fa-users-cog"},void 0,!1,{fileName:p,lineNumber:16,columnNumber:13},globalThis)},void 0,!1,{fileName:p,lineNumber:15,columnNumber:10},globalThis)]},void 0,!0,{fileName:p,lineNumber:5,columnNumber:7},globalThis);var j="C:\\Projects\\f1predictions-ui\\src\\components\\Toaster.jsx";const oe=()=>{const{state:t,dispatch:l}=y(),{notifications:o}=t,s=g.exports.useMemo(()=>o.length>0?o.reverse()[o.length-1]:null,[o]),i=g.exports.useCallback(a=>{l({type:"REMOVE_NOTIFICATION",payload:a.id})},[l]);return e.exports.jsxDEV(k,{children:e.exports.jsxDEV(R,{show:!!s,autohide:!0,delay:s?.delay||5e3,onClose:()=>i(s),bg:s?.type||"primary",className:"text-white",children:e.exports.jsxDEV(R.Body,{children:e.exports.jsxDEV("div",{className:"d-flex justify-content-between align-items-center",children:[e.exports.jsxDEV("span",{children:s?.text},void 0,!1,{fileName:j,lineNumber:35,columnNumber:19},globalThis),e.exports.jsxDEV("i",{onClick:()=>i(s),className:"fas fa-times text-white"},void 0,!1,{fileName:j,lineNumber:36,columnNumber:19},globalThis)]},void 0,!0,{fileName:j,lineNumber:34,columnNumber:16},globalThis)},void 0,!1,{fileName:j,lineNumber:33,columnNumber:13},globalThis)},void 0,!1,{fileName:j,lineNumber:25,columnNumber:10},globalThis)},void 0,!1,{fileName:j,lineNumber:24,columnNumber:7},globalThis)};function ae(t={}){const{immediate:l=!1,onNeedRefresh:o,onOfflineReady:s,onRegistered:i,onRegisterError:a}=t;let r,d;const v=async(u=!0)=>{u&&(r==null||r.addEventListener("controlling",T=>{T.isUpdate&&window.location.reload()})),d&&d.waiting&&await F(d.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){r=new L("/sw.js",{scope:"/"}),r.addEventListener("activated",u=>{u.isUpdate||s==null||s()});{const u=()=>{o==null||o()};r.addEventListener("waiting",u),r.addEventListener("externalwaiting",u)}r.register({immediate:l}).then(u=>{d=u,i==null||i(u)}).catch(u=>{a==null||a(u)})}return v}function P(t={}){const{immediate:l=!0,onNeedRefresh:o,onOfflineReady:s,onRegistered:i,onRegisterError:a}=t,[r,d]=g.exports.useState(!1),[v,u]=g.exports.useState(!1),[T]=g.exports.useState(()=>ae({immediate:l,onOfflineReady(){u(!0),s==null||s()},onNeedRefresh(){d(!0),o==null||o()},onRegistered:i,onRegisterError:a}));return{needRefresh:[r,d],offlineReady:[v,u],updateServiceWorker:T}}var E="C:\\Projects\\f1predictions-ui\\src\\components\\ReloadPrompt.jsx";function re(){const{offlineReady:[t,l],needRefresh:[o,s],updateServiceWorker:i}=P({onRegistered(r){console.log("SW Registered")},onRegisterError(r){console.log("SW registration error",r)}}),a=()=>{l(!1),s(!1)};return e.exports.jsxDEV("div",{className:"ReloadPrompt-container",children:(t||o)&&e.exports.jsxDEV("div",{className:"ReloadPrompt-toast",children:[e.exports.jsxDEV("div",{className:"ReloadPrompt-message",children:t?e.exports.jsxDEV("span",{children:"App ready to work offline"},void 0,!1,{fileName:E,lineNumber:30,columnNumber:22},this):e.exports.jsxDEV("span",{children:"New content available, click on reload button to update."},void 0,!1,{fileName:E,lineNumber:32,columnNumber:22},this)},void 0,!1,{fileName:E,lineNumber:28,columnNumber:16},this),o&&e.exports.jsxDEV("button",{className:"ReloadPrompt-toast-button",onClick:()=>i(!0),children:"Reload"},void 0,!1,{fileName:E,lineNumber:36,columnNumber:19},this),e.exports.jsxDEV("button",{className:"ReloadPrompt-toast-button",onClick:()=>a(),children:"Close"},void 0,!1,{fileName:E,lineNumber:40,columnNumber:16},this)]},void 0,!0,{fileName:E,lineNumber:27,columnNumber:13},this)},void 0,!1,{fileName:E,lineNumber:25,columnNumber:7},this)}var n="C:\\Projects\\f1predictions-ui\\src\\App.jsx";const ne=m.lazy(()=>x(()=>import("./Home.77d6d750.js").then(function(t){return t.H}),["assets/Home.77d6d750.js","assets/vendor.7928b14f.js"])),ce=m.lazy(()=>x(()=>import("./SignIn.30f12276.js"),["assets/SignIn.30f12276.js","assets/vendor.7928b14f.js","assets/Button.dec7e91e.js","assets/useNavbar.efd43d10.js"])),me=m.lazy(()=>x(()=>import("./PredictionForm.9dd1f90d.js"),["assets/PredictionForm.9dd1f90d.js","assets/vendor.7928b14f.js","assets/usePost.e9cfb82a.js","assets/Form.547f896e.js","assets/warning.b33cdbd2.js","assets/Col.a43a591d.js","assets/Button.dec7e91e.js","assets/useNavbar.efd43d10.js"])),ue=m.lazy(()=>x(()=>import("./Result.a18a8e9b.js"),["assets/Result.a18a8e9b.js","assets/vendor.7928b14f.js","assets/useNavbar.efd43d10.js"])),de=m.lazy(()=>x(()=>import("./Leaderboard.d8e17603.js"),["assets/Leaderboard.d8e17603.js","assets/vendor.7928b14f.js","assets/useNavbar.efd43d10.js"])),Ne=m.lazy(()=>x(()=>import("./Admin.ffa8c213.js"),["assets/Admin.ffa8c213.js","assets/vendor.7928b14f.js","assets/Button.dec7e91e.js","assets/Form.547f896e.js","assets/warning.b33cdbd2.js","assets/Col.a43a591d.js","assets/useNavbar.efd43d10.js"])),fe=m.lazy(()=>x(()=>import("./Settings.438f3eef.js"),["assets/Settings.438f3eef.js","assets/vendor.7928b14f.js","assets/Button.dec7e91e.js","assets/Form.547f896e.js","assets/warning.b33cdbd2.js","assets/Col.a43a591d.js"])),be=m.lazy(()=>x(()=>import("./ResultsForm.a6e1a49a.js"),["assets/ResultsForm.a6e1a49a.js","assets/vendor.7928b14f.js","assets/usePost.e9cfb82a.js","assets/Form.547f896e.js","assets/warning.b33cdbd2.js","assets/Col.a43a591d.js","assets/Button.dec7e91e.js","assets/useNavbar.efd43d10.js"])),pe=60*60*1e3,he=()=>e.exports.jsxDEV("div",{className:"d-flex align-items-center justify-content-center",style:{width:"100vw",height:"100vh"},children:e.exports.jsxDEV(M,{size:"lg",animation:"border",role:"status",variant:"primary",children:e.exports.jsxDEV("span",{className:"visually-hidden",children:"Loading..."},void 0,!1,{fileName:n,lineNumber:32,columnNumber:13},globalThis)},void 0,!1,{fileName:n,lineNumber:31,columnNumber:10},globalThis)},void 0,!1,{fileName:n,lineNumber:30,columnNumber:7},globalThis),xe=()=>{const{state:t,dispatch:l}=y(),{fetch:o}=Q(null,{initialFetch:!1});return g.exports.useEffect(async()=>{await o(Y).then(s=>l({type:"SET_DRIVERS",payload:s})),await o(X).then(s=>l({type:"SET_GRAND_PRIX",payload:s})),await o(J).then(s=>{l({type:"SET_SEASONS",payload:s}),l({type:"SET_CURRENT_SEASON",payload:s.find(i=>i.year==new Date().getFullYear())})})},[o]),P({onRegistered(s){s&&setInterval(()=>{s.update()},pe)}}),e.exports.jsxDEV(g.exports.Suspense,{fallback:e.exports.jsxDEV(he,{},void 0,!1,{fileName:n,lineNumber:61,columnNumber:27},globalThis),children:e.exports.jsxDEV("div",{className:"app",children:[e.exports.jsxDEV($,{style:{width:"100vw"},children:[e.exports.jsxDEV("div",{className:"app__navbar sticky-top",children:e.exports.jsxDEV(ie,{},void 0,!1,{fileName:n,lineNumber:65,columnNumber:19},globalThis)},void 0,!1,{fileName:n,lineNumber:64,columnNumber:16},globalThis),e.exports.jsxDEV(B,{className:"py-3",style:{minHeight:"calc(100vh - 100px)"},children:e.exports.jsxDEV(W,{children:[e.exports.jsxDEV(b,{path:"/login",component:ce},void 0,!1,{fileName:n,lineNumber:69,columnNumber:22},globalThis),e.exports.jsxDEV(b,{exact:!0,path:"/",component:ne},void 0,!1,{fileName:n,lineNumber:70,columnNumber:22},globalThis),e.exports.jsxDEV(b,{exact:!0,path:"/prediction/:id",component:me},void 0,!1,{fileName:n,lineNumber:71,columnNumber:22},globalThis),e.exports.jsxDEV(b,{exact:!0,path:"/result/:id",component:ue},void 0,!1,{fileName:n,lineNumber:72,columnNumber:22},globalThis),e.exports.jsxDEV(b,{exact:!0,path:"/leaderboard",component:de},void 0,!1,{fileName:n,lineNumber:73,columnNumber:22},globalThis),e.exports.jsxDEV(b,{exact:!0,path:"/admin",component:Ne},void 0,!1,{fileName:n,lineNumber:74,columnNumber:22},globalThis),e.exports.jsxDEV(b,{exact:!0,path:"/admin/result/:id",component:be},void 0,!1,{fileName:n,lineNumber:75,columnNumber:22},globalThis),e.exports.jsxDEV(b,{exact:!0,path:"/settings",component:fe},void 0,!1,{fileName:n,lineNumber:76,columnNumber:22},globalThis),e.exports.jsxDEV(b,{exact:!0,path:"*",render:()=>e.exports.jsxDEV(z,{to:"/"},void 0,!1,{fileName:n,lineNumber:77,columnNumber:58},globalThis)},void 0,!1,{fileName:n,lineNumber:77,columnNumber:22},globalThis)]},void 0,!0,{fileName:n,lineNumber:68,columnNumber:19},globalThis)},void 0,!1,{fileName:n,lineNumber:67,columnNumber:16},globalThis),t.navbar.showBottomNav&&e.exports.jsxDEV("div",{className:"app__bottom-navbar position-sticky",style:{bottom:"0",width:"100vw"},children:e.exports.jsxDEV(le,{},void 0,!1,{fileName:n,lineNumber:82,columnNumber:22},globalThis)},void 0,!1,{fileName:n,lineNumber:81,columnNumber:19},globalThis)]},void 0,!0,{fileName:n,lineNumber:63,columnNumber:13},globalThis),e.exports.jsxDEV("div",{className:"app__toaster",children:e.exports.jsxDEV(oe,{},void 0,!1,{fileName:n,lineNumber:87,columnNumber:16},globalThis)},void 0,!1,{fileName:n,lineNumber:86,columnNumber:13},globalThis),e.exports.jsxDEV(re,{},void 0,!1,{fileName:n,lineNumber:89,columnNumber:13},globalThis)]},void 0,!0,{fileName:n,lineNumber:62,columnNumber:10},globalThis)},void 0,!1,{fileName:n,lineNumber:61,columnNumber:7},globalThis)};_.interceptors.request.use(function(t){return t.withCredentials=!0,t.headers={...t.headers,Accept:"application/json","Content-Type":"application/json"},t},function(t){return Promise.reject(t)});_.interceptors.response.use(function(t){return t},function(t){return t.response.status===401&&window.location.pathname!=="/login"&&window.location.replace(window.location.origin+`/login?redirect_uri=${window.location.href}`),Promise.reject(t)});var D="C:\\Projects\\f1predictions-ui\\src\\main.jsx";U.render(e.exports.jsxDEV(m.StrictMode,{children:e.exports.jsxDEV(G,{children:e.exports.jsxDEV(se,{children:e.exports.jsxDEV(xe,{},void 0,!1,{fileName:D,lineNumber:14,columnNumber:13},globalThis)},void 0,!1,{fileName:D,lineNumber:13,columnNumber:10},globalThis)},void 0,!1,{fileName:D,lineNumber:12,columnNumber:7},globalThis)},void 0,!1,{fileName:D,lineNumber:11,columnNumber:4},globalThis),document.getElementById("root"));export{Ee as A,x as _,y as a,X as b,ge as c,J as d,Q as u};

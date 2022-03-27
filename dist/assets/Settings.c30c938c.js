import{c as N,u as h,r,j as l,S as f}from"./vendor.855a4921.js";import{B as x}from"./Button.10f28fc7.js";import{F as s}from"./Form.636858ef.js";import{a as p}from"./index.b36afc31.js";import"./warning.b33cdbd2.js";import"./Col.fc6e8593.js";var a="C:\\Users\\runec\\Documents\\Projects\\f1predictions-ui\\src\\pages\\Settings.jsx";const S=()=>{const{push:m}=N(),{t:i,i18n:o}=h(),{dispatch:n,state:u}=p(),{driver_sorting:c}=u,d=r.exports.useCallback(()=>{caches.keys().then(function(e){for(let t of e)t.startsWith("workbox-runtime")&&caches.delete(t)}).finally(()=>{n({type:"SET_ACCESS_TOKEN",payload:null}),localStorage.removeItem("access_token"),m("/signin")})},[]),g=r.exports.useCallback(e=>{o.changeLanguage(e),window.location.reload()},[o]),b=r.exports.useCallback(e=>{localStorage.setItem("driver_sorting",e),n({type:"SET_DRIVER_SORTING",payload:e})});return l.exports.jsxDEV("div",{className:"form-container",children:l.exports.jsxDEV(f,{gap:3,children:[l.exports.jsxDEV("div",{children:[l.exports.jsxDEV("h4",{children:i("settings.application")},void 0,!1,{fileName:a,lineNumber:50,columnNumber:21},globalThis),l.exports.jsxDEV("div",{className:"row mb-3",children:l.exports.jsxDEV(s.Group,{className:"col-12",style:{maxWidth:"400px"},children:[l.exports.jsxDEV(s.Label,{children:i("settings.language")},void 0,!1,{fileName:a,lineNumber:53,columnNumber:29},globalThis),l.exports.jsxDEV(s.Control,{as:"select",name:"locale",value:o.language.substring(0,2),onChange:e=>g(e.target.value),children:[{id:"nl",language:"Nederlands"},{id:"en",language:"English"}].map(e=>l.exports.jsxDEV("option",{value:e.id,children:e.language},e.id,!1,{fileName:a,lineNumber:65,columnNumber:41},globalThis))},void 0,!1,{fileName:a,lineNumber:54,columnNumber:29},globalThis)]},void 0,!0,{fileName:a,lineNumber:52,columnNumber:25},globalThis)},void 0,!1,{fileName:a,lineNumber:51,columnNumber:21},globalThis),l.exports.jsxDEV("div",{className:"row",children:l.exports.jsxDEV(s.Group,{className:"col-12",style:{maxWidth:"400px"},children:[l.exports.jsxDEV(s.Label,{children:i("settings.driver-sorting")},void 0,!1,{fileName:a,lineNumber:75,columnNumber:29},globalThis),l.exports.jsxDEV(s.Control,{as:"select",name:"driver_sorting",value:c,onChange:e=>b(e.target.value),children:[{id:"first_name",language:"Voornaam"},{id:"last_name",language:"Achternaam"},{id:"team_name",language:"Team"}].map(e=>l.exports.jsxDEV("option",{value:e.id,children:e.language},e.id,!1,{fileName:a,lineNumber:88,columnNumber:41},globalThis))},void 0,!1,{fileName:a,lineNumber:76,columnNumber:29},globalThis)]},void 0,!0,{fileName:a,lineNumber:74,columnNumber:25},globalThis)},void 0,!1,{fileName:a,lineNumber:73,columnNumber:21},globalThis)]},void 0,!0,{fileName:a,lineNumber:49,columnNumber:17},globalThis),l.exports.jsxDEV("div",{children:[l.exports.jsxDEV("h4",{children:i("settings.account")},void 0,!1,{fileName:a,lineNumber:98,columnNumber:21},globalThis),l.exports.jsxDEV(x,{className:"col-6",onClick:d,children:i("settings.log-out")},void 0,!1,{fileName:a,lineNumber:99,columnNumber:21},globalThis)]},void 0,!0,{fileName:a,lineNumber:97,columnNumber:17},globalThis)]},void 0,!0,{fileName:a,lineNumber:48,columnNumber:13},globalThis)},void 0,!1,{fileName:a,lineNumber:47,columnNumber:9},globalThis)};export{S as default};

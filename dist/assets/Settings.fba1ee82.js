import{r as i,j as e,S as u,B as s}from"./vendor.52459307.js";import{F as a}from"./Form.806710de.js";import"./warning.b33cdbd2.js";import"./Col.3d880f8f.js";var l="C:\\Projects\\f1predictions-ui\\src\\pages\\Settings.jsx";const p=()=>{const[r,n]=i.exports.useState("en"),m=i.exports.useCallback(()=>{window.location.replace("https://f1-predictions-backend.herokuapp.com/logout")},[]),t=i.exports.useCallback(()=>{},[]);return e.exports.jsxDEV("div",{className:"form-container",children:e.exports.jsxDEV(u,{gap:3,children:[e.exports.jsxDEV("div",{children:[e.exports.jsxDEV("h4",{children:"Application"},void 0,!1,{fileName:l,lineNumber:21,columnNumber:16},globalThis),e.exports.jsxDEV("div",{className:"row",children:[e.exports.jsxDEV(a.Group,{className:"col-7",children:e.exports.jsxDEV(a.Control,{as:"select",name:"locale",value:r,onChange:o=>n(o.target.value),children:[{id:"nl",language:"Nederlands"},{id:"en",language:"English"}].map(o=>e.exports.jsxDEV("option",{value:o.id,children:o.language},o.id,!1,{fileName:l,lineNumber:30,columnNumber:31},globalThis))},void 0,!1,{fileName:l,lineNumber:24,columnNumber:22},globalThis)},void 0,!1,{fileName:l,lineNumber:23,columnNumber:19},globalThis),e.exports.jsxDEV(s,{className:"col-4",onClick:()=>t(),children:"Change language"},void 0,!1,{fileName:l,lineNumber:37,columnNumber:19},globalThis)]},void 0,!0,{fileName:l,lineNumber:22,columnNumber:16},globalThis)]},void 0,!0,{fileName:l,lineNumber:20,columnNumber:13},globalThis),e.exports.jsxDEV("div",{children:[e.exports.jsxDEV("h4",{children:"Account"},void 0,!1,{fileName:l,lineNumber:43,columnNumber:16},globalThis),e.exports.jsxDEV(s,{style:{width:"200px"},onClick:m,children:"Log out"},void 0,!1,{fileName:l,lineNumber:44,columnNumber:16},globalThis)]},void 0,!0,{fileName:l,lineNumber:42,columnNumber:13},globalThis)]},void 0,!0,{fileName:l,lineNumber:19,columnNumber:10},globalThis)},void 0,!1,{fileName:l,lineNumber:18,columnNumber:7},globalThis)};export{p as default};

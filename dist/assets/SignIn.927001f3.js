import{u as n,r as i,j as e,S as m,B as t}from"./vendor.380d830e.js";import{u as c}from"./useNavbar.e8f4cde3.js";import"./index.a2b8c724.js";var l="C:\\Projects\\f1predictions-ui\\src\\pages\\SignIn.jsx";const d=()=>{const o=n().search,r=i.exports.useMemo(()=>new URLSearchParams(o).get("redirect_uri"),[o]),s=i.exports.useCallback(()=>{window.location.replace(`https://f1-predictions-backend.herokuapp.com/login?redirect_uri=${encodeURIComponent(r)}`)},[r]),a=i.exports.useMemo(()=>({title:"Sign in",showBottomNav:!1}),[]);return c(a),e.exports.jsxDEV("div",{className:"form-container",children:e.exports.jsxDEV(m,{className:"display:flex; align-items-center p-4 mt-4",children:[e.exports.jsxDEV("center",{children:e.exports.jsxDEV("h3",{className:"mb-4",children:"Welcome to F1 Predictions"},void 0,!1,{fileName:l,lineNumber:32,columnNumber:16},globalThis)},void 0,!1,{fileName:l,lineNumber:31,columnNumber:13},globalThis),e.exports.jsxDEV("center",{className:"mb-5 pb-4",children:["Please login using your Google account by clicking the button below.",e.exports.jsxDEV("br",{},void 0,!1,{fileName:l,lineNumber:37,columnNumber:16},globalThis)]},void 0,!0,{fileName:l,lineNumber:35,columnNumber:13},globalThis),e.exports.jsxDEV(t,{onClick:s,variant:"primary w-100 mb-2",children:e.exports.jsxDEV("center",{children:e.exports.jsxDEV("span",{children:"Login with Google"},void 0,!1,{fileName:l,lineNumber:41,columnNumber:19},globalThis)},void 0,!1,{fileName:l,lineNumber:40,columnNumber:16},globalThis)},void 0,!1,{fileName:l,lineNumber:39,columnNumber:13},globalThis),e.exports.jsxDEV("center",{children:e.exports.jsxDEV("small",{children:" We'll never share your data with anyone."},void 0,!1,{fileName:l,lineNumber:45,columnNumber:16},globalThis)},void 0,!1,{fileName:l,lineNumber:44,columnNumber:13},globalThis)]},void 0,!0,{fileName:l,lineNumber:30,columnNumber:10},globalThis)},void 0,!1,{fileName:l,lineNumber:29,columnNumber:7},globalThis)};export{d as default};

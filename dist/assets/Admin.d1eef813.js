import{r as o,o as u,j as e,S as c,B as d}from"./vendor.46677957.js";import{F as i}from"./Form.d6608e80.js";import{a as N}from"./index.c0621138.js";import{u as b}from"./useNavbar.7a515c8c.js";import"./warning.b33cdbd2.js";import"./Col.af7374c9.js";var s="C:\\Projects\\f1predictions-ui\\src\\pages\\Admin.jsx";const g=()=>{const[r,a]=o.exports.useState(),{grandPrix:m}=N().state,{push:n}=u(),t=o.exports.useMemo(()=>({title:"Admin"}),[]);return b(t),e.exports.jsxDEV("div",{className:"form-container",children:e.exports.jsxDEV(c,{gap:4,children:[e.exports.jsxDEV("h4",{children:"Manage application"},void 0,!1,{fileName:s,lineNumber:21,columnNumber:13},globalThis),e.exports.jsxDEV("div",{children:[e.exports.jsxDEV("h5",{children:"Enter a GP result"},void 0,!1,{fileName:s,lineNumber:24,columnNumber:16},globalThis),e.exports.jsxDEV("div",{className:"row",children:[e.exports.jsxDEV(i.Group,{className:"col-7",children:e.exports.jsxDEV(i.Control,{as:"select",name:"gp",value:r,onChange:l=>a(l.target.value),children:[e.exports.jsxDEV("option",{children:"Choose GP"},void 0,!1,{fileName:s,lineNumber:28,columnNumber:25},globalThis),m.map(l=>e.exports.jsxDEV("option",{value:l.id,children:l.name},l.id,!1,{fileName:s,lineNumber:31,columnNumber:31},globalThis))]},void 0,!0,{fileName:s,lineNumber:27,columnNumber:22},globalThis)},void 0,!1,{fileName:s,lineNumber:26,columnNumber:19},globalThis),e.exports.jsxDEV(d,{disabled:!r,className:"col-4",onClick:()=>n("/admin/result/"+r),children:"Enter"},void 0,!1,{fileName:s,lineNumber:38,columnNumber:19},globalThis)]},void 0,!0,{fileName:s,lineNumber:25,columnNumber:16},globalThis)]},void 0,!0,{fileName:s,lineNumber:23,columnNumber:13},globalThis)]},void 0,!0,{fileName:s,lineNumber:20,columnNumber:10},globalThis)},void 0,!1,{fileName:s,lineNumber:19,columnNumber:7},globalThis)};export{g as default};

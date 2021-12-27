import{_ as c,a as S,u as I,b as g,A}from"./index.633ae2cf.js";import{R as n,k,l as O,r as d,j as e,P as B,B as b}from"./vendor.8eb74db1.js";import{u as L,F as C,v as G}from"./usePost.2ab4305b.js";import{F as $}from"./Form.beb0e923.js";import{u as z}from"./useNavbar.1ac6fc58.js";import"./warning.b33cdbd2.js";import"./Col.2a4ceb7a.js";var a="C:\\Projects\\f1predictions-ui\\src\\pages\\ResultsForm.jsx";const M=n.lazy(()=>c(()=>import("./QualifyingForm.68672814.js"),["assets/QualifyingForm.68672814.js","assets/vendor.8eb74db1.js","assets/Form.beb0e923.js","assets/warning.b33cdbd2.js","assets/Col.2a4ceb7a.js","assets/index.633ae2cf.js","assets/index.de26fa69.css"])),Q=n.lazy(()=>c(()=>import("./RaceForm.57904190.js"),["assets/RaceForm.57904190.js","assets/vendor.8eb74db1.js","assets/Form.beb0e923.js","assets/warning.b33cdbd2.js","assets/Col.2a4ceb7a.js","assets/index.633ae2cf.js","assets/index.de26fa69.css"])),Y=n.lazy(()=>c(()=>import("./ExtraForm.ce5755d2.js"),["assets/ExtraForm.ce5755d2.js","assets/vendor.8eb74db1.js","assets/Form.beb0e923.js","assets/warning.b33cdbd2.js","assets/Col.2a4ceb7a.js","assets/index.633ae2cf.js","assets/index.de26fa69.css"])),Z=()=>{const[N,m]=n.useState(!1),[s,f]=n.useState(0),{id:p}=k(),{push:x,goBack:j}=O(),{dispatch:E}=S(),{data:o,loading:v}=I(`${g}/${p}`);d.exports.useEffect(()=>{o&&new Date(o.qualifying_start_timestamp)>new Date&&(E({type:"NOTIFY",payload:{id:new Date().getTime(),text:"Grand Prix hasn't passed",delay:5e3,type:"danger"}}),x("/admin"))},[o]);const D=d.exports.useMemo(()=>({title:`${o?.name} - Results`||"Loading...",leftAction:j,leftActionIcon:"fa-arrow-left",showBottomNav:!1}),[o]);z(D);const{fetch:_,loading:h}=L();async function y(t){await _(g+`/${p}`+A,{result_entries:Object.entries(t).map(([i,r])=>({name:i,driver_id:r}))}).then(()=>{x("/admin")})}async function V(t){const i=await t();Object.keys(i).length<=0?(f(s+1),m(!1)):m(!0)}function T(){f(s-1)}const l=d.exports.useMemo(()=>v||h,[v,h]);return e.exports.jsxDEV("div",{className:"form-container",children:e.exports.jsxDEV(C,{validationSchema:G[s],validateOnChange:N,validateOnBlur:N,initialValues:{},onSubmit:y,children:({handleSubmit:t,handleChange:i,values:r,errors:u,validateForm:P,dirty:F,submitCount:w})=>e.exports.jsxDEV(e.exports.Fragment,{children:[e.exports.jsxDEV(B,{when:F&&w<1,message:"You have unsaved changes, are you sure you want to leave?"},void 0,!1,{fileName:a,lineNumber:94,columnNumber:19},globalThis),e.exports.jsxDEV($,{noValidate:!0,onSubmit:R=>{R.preventDefault(),t(),m(!0)},children:[s===0&&e.exports.jsxDEV(M,{handleChange:i,errors:u,values:r,disabled:l},void 0,!1,{fileName:a,lineNumber:103,columnNumber:42},globalThis),s===1&&e.exports.jsxDEV(Q,{handleChange:i,errors:u,values:r,disabled:l},void 0,!1,{fileName:a,lineNumber:104,columnNumber:42},globalThis),s===2&&e.exports.jsxDEV(Y,{handleChange:i,errors:u,values:r,disabled:l},void 0,!1,{fileName:a,lineNumber:105,columnNumber:42},globalThis),e.exports.jsxDEV("div",{className:"d-flex py-3 w-10 position-sticky bg-white gap-4",style:{bottom:0},children:[s!==0&&e.exports.jsxDEV(b,{onClick:T,variant:"outline-primary",type:"button",className:"col-3",disabled:l,children:[e.exports.jsxDEV("i",{className:"fas fa-arrow-left"},void 0,!1,{fileName:a,lineNumber:109,columnNumber:31},globalThis),e.exports.jsxDEV("span",{className:"ms-3",children:"Back"},void 0,!1,{fileName:a,lineNumber:110,columnNumber:31},globalThis)]},void 0,!0,{fileName:a,lineNumber:108,columnNumber:28},globalThis),s<2&&e.exports.jsxDEV(b,{onClick:()=>V(P),variant:"primary",type:"button",className:"col",disabled:l,children:[e.exports.jsxDEV("span",{className:"me-3",children:"Next"},void 0,!1,{fileName:a,lineNumber:121,columnNumber:31},globalThis),e.exports.jsxDEV("i",{className:"fas fa-arrow-right"},void 0,!1,{fileName:a,lineNumber:122,columnNumber:31},globalThis)]},void 0,!0,{fileName:a,lineNumber:114,columnNumber:28},globalThis),s===2&&e.exports.jsxDEV(b,{variant:"primary",type:"submit",className:"col",disabled:l,children:[e.exports.jsxDEV("span",{className:"me-3",children:"Save"},void 0,!1,{fileName:a,lineNumber:127,columnNumber:31},globalThis),e.exports.jsxDEV("i",{className:"fas fa-save"},void 0,!1,{fileName:a,lineNumber:128,columnNumber:31},globalThis)]},void 0,!0,{fileName:a,lineNumber:126,columnNumber:28},globalThis)]},void 0,!0,{fileName:a,lineNumber:106,columnNumber:22},globalThis)]},void 0,!0,{fileName:a,lineNumber:95,columnNumber:19},globalThis)]},void 0,!0)},void 0,!1,{fileName:a,lineNumber:85,columnNumber:10},globalThis)},void 0,!1,{fileName:a,lineNumber:84,columnNumber:7},globalThis)};export{Z as default};

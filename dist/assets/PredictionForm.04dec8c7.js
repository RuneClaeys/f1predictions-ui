import{_ as c,a as R,u as S,b as j,c as O}from"./index.1f507f3a.js";import{R as r,k,l as A,r as d,j as e,P as B,B as b}from"./vendor.52459307.js";import{u as C,F as G,v as z}from"./usePost.b7fe905f.js";import{F as L}from"./Form.806710de.js";import{u as $}from"./useNavbar.cfffc7e5.js";import"./warning.b33cdbd2.js";import"./Col.3d880f8f.js";var a="C:\\Projects\\f1predictions-ui\\src\\pages\\PredictionForm.jsx";const M=r.lazy(()=>c(()=>import("./QualifyingForm.dfb607ef.js"),["assets/QualifyingForm.dfb607ef.js","assets/vendor.52459307.js","assets/Form.806710de.js","assets/warning.b33cdbd2.js","assets/Col.3d880f8f.js","assets/index.1f507f3a.js","assets/index.de26fa69.css"])),Q=r.lazy(()=>c(()=>import("./RaceForm.e63b8949.js"),["assets/RaceForm.e63b8949.js","assets/vendor.52459307.js","assets/Form.806710de.js","assets/warning.b33cdbd2.js","assets/Col.3d880f8f.js","assets/index.1f507f3a.js","assets/index.de26fa69.css"])),Y=r.lazy(()=>c(()=>import("./ExtraForm.a6f933d0.js"),["assets/ExtraForm.a6f933d0.js","assets/vendor.52459307.js","assets/Form.806710de.js","assets/warning.b33cdbd2.js","assets/Col.3d880f8f.js","assets/index.1f507f3a.js","assets/index.de26fa69.css"])),Z=()=>{const[f,n]=r.useState(!1),[s,N]=r.useState(0),{id:p}=k(),{push:x,goBack:v}=A(),{dispatch:E}=R(),{data:m,loading:h}=S(`${j}/${p}`);d.exports.useEffect(()=>{m&&new Date(m.qualifying_start_timestamp)<new Date&&(E({type:"NOTIFY",payload:{id:new Date().getTime(),text:"Grand Prix has already passed",delay:5e3,type:"danger"}}),x("/"))},[m]);const D=d.exports.useMemo(()=>({leftAction:v,leftActionIcon:"fa-arrow-left",showBottomNav:!1}),[v]);$(D);const{fetch:y,loading:g}=C();async function _(l){await y(j+`/${p}`+O,{prediction_entries:Object.entries(l).map(([i,t])=>({name:i,driver_id:t}))}).then(()=>x("/"))}async function V(l){const i=await l();Object.keys(i).length<=0?(N(s+1),n(!1)):n(!0)}function T(){N(s-1)}const o=d.exports.useMemo(()=>h||g,[h,g]);return e.exports.jsxDEV("div",{className:"form-container",children:e.exports.jsxDEV(G,{validationSchema:z[s],validateOnChange:f,validateOnBlur:f,initialValues:{},onSubmit:_,children:({handleSubmit:l,handleChange:i,values:t,errors:u,validateForm:P,dirty:F,submitCount:w})=>e.exports.jsxDEV(e.exports.Fragment,{children:[e.exports.jsxDEV(B,{when:F&&w<1,message:"You have unsaved changes, are you sure you want to leave?"},void 0,!1,{fileName:a,lineNumber:90,columnNumber:19},globalThis),e.exports.jsxDEV(L,{noValidate:!0,onSubmit:I=>{I.preventDefault(),l(),n(!0)},children:[s===0&&e.exports.jsxDEV(M,{handleChange:i,errors:u,values:t,disabled:o},void 0,!1,{fileName:a,lineNumber:99,columnNumber:42},globalThis),s===1&&e.exports.jsxDEV(Q,{handleChange:i,errors:u,values:t,disabled:o},void 0,!1,{fileName:a,lineNumber:100,columnNumber:42},globalThis),s===2&&e.exports.jsxDEV(Y,{handleChange:i,errors:u,values:t,disabled:o},void 0,!1,{fileName:a,lineNumber:101,columnNumber:42},globalThis),e.exports.jsxDEV("div",{className:"d-flex py-3 w-10 position-sticky bg-white gap-4",style:{bottom:0},children:[s!==0&&e.exports.jsxDEV(b,{onClick:T,variant:"outline-primary",type:"button",className:"col-3",disabled:o,children:[e.exports.jsxDEV("i",{className:"fas fa-arrow-left"},void 0,!1,{fileName:a,lineNumber:106,columnNumber:31},globalThis),e.exports.jsxDEV("span",{className:"ms-3",children:"Back"},void 0,!1,{fileName:a,lineNumber:107,columnNumber:31},globalThis)]},void 0,!0,{fileName:a,lineNumber:105,columnNumber:28},globalThis),s<2&&e.exports.jsxDEV(b,{onClick:()=>V(P),variant:"primary",type:"button",className:"col",disabled:o,children:[e.exports.jsxDEV("span",{className:"me-3",children:"Next"},void 0,!1,{fileName:a,lineNumber:118,columnNumber:31},globalThis),e.exports.jsxDEV("i",{className:"fas fa-arrow-right"},void 0,!1,{fileName:a,lineNumber:119,columnNumber:31},globalThis)]},void 0,!0,{fileName:a,lineNumber:111,columnNumber:28},globalThis),s===2&&e.exports.jsxDEV(b,{variant:"primary",type:"submit",className:"col",disabled:o,children:[e.exports.jsxDEV("span",{className:"me-3",children:"Save"},void 0,!1,{fileName:a,lineNumber:124,columnNumber:31},globalThis),e.exports.jsxDEV("i",{className:"fas fa-save"},void 0,!1,{fileName:a,lineNumber:125,columnNumber:31},globalThis)]},void 0,!0,{fileName:a,lineNumber:123,columnNumber:28},globalThis)]},void 0,!0,{fileName:a,lineNumber:103,columnNumber:22},globalThis)]},void 0,!0,{fileName:a,lineNumber:91,columnNumber:19},globalThis)]},void 0,!0)},void 0,!1,{fileName:a,lineNumber:81,columnNumber:10},globalThis)},void 0,!1,{fileName:a,lineNumber:80,columnNumber:7},globalThis)};export{Z as default};

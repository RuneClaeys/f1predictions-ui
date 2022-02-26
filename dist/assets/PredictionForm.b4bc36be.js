import{u as B,R as y,v as A,c as C,r as m,j as e,P as G}from"./vendor.855a4921.js";import{u as Y,a as $,F as M,v as Q,Q as q,R as z,E as H}from"./ExtraForm.512990dc.js";import{F as U}from"./Form.636858ef.js";import{B as p}from"./Button.10f28fc7.js";import{a as X,u as J,b as D,c as T}from"./index.eaff7e8f.js";import{u as K}from"./useNavbar.d3cae830.js";import"./warning.b33cdbd2.js";import"./Col.fc6e8593.js";var a="C:\\Users\\runec\\Documents\\Projects\\f1predictions-ui\\src\\pages\\PredictionForm.jsx";const oe=()=>{const{t:n}=B(),[f,u]=y.useState(!1),[i,N]=y.useState(0),{id:x}=A(),{push:c,goBack:g}=C(),{dispatch:d}=X(),{data:t,loading:h}=J(`${D}/${x}`);m.exports.useEffect(()=>{t&&new Date(t.qualifying_start_timestamp)<new Date&&(d({type:"NOTIFY",payload:{id:new Date().getTime(),text:"Grand Prix has already passed",delay:5e3,type:"danger"}}),c("/"))},[t]);const E=m.exports.useMemo(()=>({leftAction:g,leftActionIcon:"fa-arrow-left",showBottomNav:!1}),[g]);K(E);const{fetch:V,loading:v}=Y(),{fetch:w,loading:j}=$();async function P(o){return t?.user_prediction?await w(T+`/${t.user_prediction.id}`,{prediction_entries:Object.entries(o).map(([s,l])=>({name:s,driver_id:l}))}).then(()=>{c("/"),d({type:"NOTIFY",payload:{id:new Date().getTime(),text:n("global.prediction-updated"),delay:5e3,type:"success"}})}):await V(D+`/${x}`+T,{prediction_entries:Object.entries(o).map(([s,l])=>({name:s,driver_id:l}))}).then(()=>{c("/"),d({type:"NOTIFY",payload:{id:new Date().getTime(),text:n("global.prediction-submited"),delay:5e3,type:"success"}})})}async function F(o){const s=await o();Object.keys(s).length<=0?(N(i+1),u(!1)):u(!0)}function _(){N(i-1)}const r=m.exports.useMemo(()=>h||v||j,[h,v,j]),I=m.exports.useMemo(()=>t?.user_prediction?t.user_prediction.prediction_entries.reduce((o,s)=>({...o,[s.name]:s.driver.id}),{}):{},[t]);return e.exports.jsxDEV("div",{className:"form-container",children:e.exports.jsxDEV(M,{validationSchema:Q[i],validateOnChange:f,validateOnBlur:f,initialValues:I,onSubmit:P,enableReinitialize:!0,children:({handleSubmit:o,handleChange:s,values:l,errors:b,validateForm:S,dirty:O,submitCount:R})=>e.exports.jsxDEV(e.exports.Fragment,{children:[e.exports.jsxDEV(G,{when:O&&R<1,message:"You have unsaved changes, are you sure you want to leave?"},void 0,!1,{fileName:a,lineNumber:127,columnNumber:25},globalThis),e.exports.jsxDEV(U,{noValidate:!0,onSubmit:k=>{k.preventDefault(),o(),u(!0)},children:[i===0&&e.exports.jsxDEV(q,{handleChange:s,errors:b,values:l,disabled:r},void 0,!1,{fileName:a,lineNumber:137,columnNumber:33},globalThis),i===1&&e.exports.jsxDEV(z,{handleChange:s,errors:b,values:l,disabled:r},void 0,!1,{fileName:a,lineNumber:139,columnNumber:49},globalThis),i===2&&e.exports.jsxDEV(H,{handleChange:s,errors:b,values:l,disabled:r},void 0,!1,{fileName:a,lineNumber:141,columnNumber:33},globalThis),e.exports.jsxDEV("div",{className:"d-flex py-3 w-10 position-sticky bg-white gap-4",style:{bottom:0},children:[i!==0&&e.exports.jsxDEV(p,{onClick:_,variant:"outline-primary",type:"button",className:"col-xs text-nowrap",disabled:r,children:[e.exports.jsxDEV("i",{className:"fas fa-arrow-left"},void 0,!1,{fileName:a,lineNumber:153,columnNumber:41},globalThis),e.exports.jsxDEV("span",{className:"ms-3",children:n("global.back")},void 0,!1,{fileName:a,lineNumber:154,columnNumber:41},globalThis)]},void 0,!0,{fileName:a,lineNumber:146,columnNumber:37},globalThis),i<2&&e.exports.jsxDEV(p,{onClick:()=>F(S),variant:"primary",type:"button",className:"col text-nowrap",disabled:r,children:[e.exports.jsxDEV("span",{className:"me-3",children:n("global.next")},void 0,!1,{fileName:a,lineNumber:165,columnNumber:41},globalThis),e.exports.jsxDEV("i",{className:"fas fa-arrow-right"},void 0,!1,{fileName:a,lineNumber:166,columnNumber:41},globalThis)]},void 0,!0,{fileName:a,lineNumber:158,columnNumber:37},globalThis),i===2&&e.exports.jsxDEV(p,{variant:"primary",type:"submit",className:"col",disabled:r,children:[e.exports.jsxDEV("span",{className:"me-3",children:n("global.save")},void 0,!1,{fileName:a,lineNumber:171,columnNumber:41},globalThis),e.exports.jsxDEV("i",{className:"fas fa-save"},void 0,!1,{fileName:a,lineNumber:172,columnNumber:41},globalThis)]},void 0,!0,{fileName:a,lineNumber:170,columnNumber:37},globalThis)]},void 0,!0,{fileName:a,lineNumber:144,columnNumber:29},globalThis)]},void 0,!0,{fileName:a,lineNumber:128,columnNumber:25},globalThis)]},void 0,!0)},void 0,!1,{fileName:a,lineNumber:117,columnNumber:13},globalThis)},void 0,!1,{fileName:a,lineNumber:116,columnNumber:9},globalThis)};export{oe as default};

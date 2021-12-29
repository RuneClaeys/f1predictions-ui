import{R as v,l as A,u as B,r as n,j as e,P as O,B as c}from"./vendor.cd19e8b1.js";import{u as $,a as C,F as G,v as M,Q as L,R as Q,E as Y}from"./ExtraForm.f7e5beea.js";import{F as q}from"./Form.04ff9b1d.js";import{a as z,u as H,b as g,A as j}from"./index.c8c0fb95.js";import{u as U}from"./useNavbar.14bbea73.js";import"./warning.b33cdbd2.js";import"./Col.d30fc8fd.js";var a="C:\\Projects\\f1predictions-ui\\src\\pages\\ResultsForm.jsx";const se=()=>{const[b,m]=v.useState(!1),[l,f]=v.useState(0),{id:N}=A(),{push:u,goBack:D}=B(),{dispatch:E}=z(),{data:i,loading:p}=H(`${g}/${N}`);n.exports.useEffect(()=>{i&&new Date(i.qualifying_start_timestamp)>new Date&&(E({type:"NOTIFY",payload:{id:new Date().getTime(),text:"Grand Prix hasn't passed",delay:5e3,type:"danger"}}),u("/admin"))},[i]);const V=n.exports.useMemo(()=>({title:`${i?.name} - Results`||"Loading...",leftAction:D,leftActionIcon:"fa-arrow-left",showBottomNav:!1}),[i]);U(V);const{fetch:y,loading:x}=$(),{fetch:T,loading:h}=C();async function w(t){return i?.result?await T(j+`/${i.result.id}`,{result_entries:Object.entries(t).map(([s,r])=>({name:s,driver_id:r}))}).then(()=>{u("/admin")}):await y(g+`/${N}`+j,{result_entries:Object.entries(t).map(([s,r])=>({name:s,driver_id:r}))}).then(()=>{u("/admin")})}async function F(t){const s=await t();Object.keys(s).length<=0?(f(l+1),m(!1)):m(!0)}function P(){f(l-1)}const o=n.exports.useMemo(()=>p||x||h,[p,x,h]),R=n.exports.useMemo(()=>i?.result?i.result.result_entries.reduce((t,s)=>({...t,[s.name]:s.driver.id}),{}):{},[i]);return e.exports.jsxDEV("div",{className:"form-container",children:e.exports.jsxDEV(G,{validationSchema:M[l],validateOnChange:b,validateOnBlur:b,initialValues:R,onSubmit:w,enableReinitialize:!0,children:({handleSubmit:t,handleChange:s,values:r,errors:d,validateForm:S,dirty:_,submitCount:k})=>e.exports.jsxDEV(e.exports.Fragment,{children:[e.exports.jsxDEV(O,{when:_&&k<1,message:"You have unsaved changes, are you sure you want to leave?"},void 0,!1,{fileName:a,lineNumber:109,columnNumber:19},globalThis),e.exports.jsxDEV(q,{noValidate:!0,onSubmit:I=>{I.preventDefault(),t(),m(!0)},children:[l===0&&e.exports.jsxDEV(L,{handleChange:s,errors:d,values:r,disabled:o},void 0,!1,{fileName:a,lineNumber:118,columnNumber:42},globalThis),l===1&&e.exports.jsxDEV(Q,{handleChange:s,errors:d,values:r,disabled:o},void 0,!1,{fileName:a,lineNumber:119,columnNumber:42},globalThis),l===2&&e.exports.jsxDEV(Y,{handleChange:s,errors:d,values:r,disabled:o},void 0,!1,{fileName:a,lineNumber:120,columnNumber:42},globalThis),e.exports.jsxDEV("div",{className:"d-flex py-3 w-10 position-sticky bg-white gap-4",style:{bottom:0},children:[l!==0&&e.exports.jsxDEV(c,{onClick:P,variant:"outline-primary",type:"button",className:"col-3",disabled:o,children:[e.exports.jsxDEV("i",{className:"fas fa-arrow-left"},void 0,!1,{fileName:a,lineNumber:124,columnNumber:31},globalThis),e.exports.jsxDEV("span",{className:"ms-3",children:"Back"},void 0,!1,{fileName:a,lineNumber:125,columnNumber:31},globalThis)]},void 0,!0,{fileName:a,lineNumber:123,columnNumber:28},globalThis),l<2&&e.exports.jsxDEV(c,{onClick:()=>F(S),variant:"primary",type:"button",className:"col",disabled:o,children:[e.exports.jsxDEV("span",{className:"me-3",children:"Next"},void 0,!1,{fileName:a,lineNumber:136,columnNumber:31},globalThis),e.exports.jsxDEV("i",{className:"fas fa-arrow-right"},void 0,!1,{fileName:a,lineNumber:137,columnNumber:31},globalThis)]},void 0,!0,{fileName:a,lineNumber:129,columnNumber:28},globalThis),l===2&&e.exports.jsxDEV(c,{variant:"primary",type:"submit",className:"col",disabled:o,children:[e.exports.jsxDEV("span",{className:"me-3",children:"Save"},void 0,!1,{fileName:a,lineNumber:142,columnNumber:31},globalThis),e.exports.jsxDEV("i",{className:"fas fa-save"},void 0,!1,{fileName:a,lineNumber:143,columnNumber:31},globalThis)]},void 0,!0,{fileName:a,lineNumber:141,columnNumber:28},globalThis)]},void 0,!0,{fileName:a,lineNumber:121,columnNumber:22},globalThis)]},void 0,!0,{fileName:a,lineNumber:110,columnNumber:19},globalThis)]},void 0,!0)},void 0,!1,{fileName:a,lineNumber:99,columnNumber:10},globalThis)},void 0,!1,{fileName:a,lineNumber:98,columnNumber:7},globalThis)};export{se as default};

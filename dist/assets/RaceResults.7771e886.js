import{r as a,j as e}from"./vendor.bc1ab3cb.js";var l="C:\\Projects\\f1predictions-ui\\src\\components\\Results\\RaceResults.jsx";const u=({grandPrix:i,open:o})=>{const t=a.exports.useMemo(()=>i?.user_prediction?.prediction_entries?.filter(s=>s.name.startsWith("RACE"))?.sort((s,r)=>s.name.localeCompare(r.name)),[i]),m=a.exports.useMemo(()=>i?.result?.result_entries?.filter(s=>s.name.startsWith("RACE"))?.sort((s,r)=>s.name.localeCompare(r.name)),[i]);return e.exports.jsxDEV("div",{className:"card",children:e.exports.jsxDEV("details",{className:"card-body",open:o,children:[e.exports.jsxDEV("summary",{children:"Race results"},void 0,!1,{fileName:l,lineNumber:22,columnNumber:13},globalThis),e.exports.jsxDEV("table",{className:"table mt-2",children:[e.exports.jsxDEV("thead",{children:e.exports.jsxDEV("tr",{children:[e.exports.jsxDEV("th",{className:"px-2",children:"Prediction"},void 0,!1,{fileName:l,lineNumber:26,columnNumber:22},globalThis),e.exports.jsxDEV("th",{className:"text-nowrap px-2",children:"Result"},void 0,!1,{fileName:l,lineNumber:27,columnNumber:22},globalThis),e.exports.jsxDEV("th",{className:"text-nowrap px-2 text-center",children:"Points"},void 0,!1,{fileName:l,lineNumber:28,columnNumber:22},globalThis)]},void 0,!0,{fileName:l,lineNumber:25,columnNumber:19},globalThis)},void 0,!1,{fileName:l,lineNumber:24,columnNumber:16},globalThis),e.exports.jsxDEV("tbody",{children:[t?.map((s,r)=>e.exports.jsxDEV("tr",{children:[e.exports.jsxDEV("td",{className:"p-2",children:[e.exports.jsxDEV("strong",{children:[r+1,". "]},void 0,!0,{fileName:l,lineNumber:35,columnNumber:28},globalThis),e.exports.jsxDEV("span",{children:[s?.driver?.first_name.charAt(0),". ",s?.driver?.last_name]},void 0,!0,{fileName:l,lineNumber:36,columnNumber:28},globalThis)]},void 0,!0,{fileName:l,lineNumber:34,columnNumber:25},globalThis),e.exports.jsxDEV("td",{className:"p-2",children:[m[r]?.driver?.first_name.charAt(0),". ",m[r]?.driver?.last_name]},void 0,!0,{fileName:l,lineNumber:40,columnNumber:25},globalThis),e.exports.jsxDEV("td",{className:"p-2 text-center",children:s?.points},void 0,!1,{fileName:l,lineNumber:43,columnNumber:25},globalThis)]},r,!0,{fileName:l,lineNumber:33,columnNumber:22},globalThis)),e.exports.jsxDEV("tr",{children:[e.exports.jsxDEV("td",{className:"p-2",children:e.exports.jsxDEV("strong",{children:"Total"},void 0,!1,{fileName:l,lineNumber:48,columnNumber:25},globalThis)},void 0,!1,{fileName:l,lineNumber:47,columnNumber:22},globalThis),e.exports.jsxDEV("td",{className:"p-2 text-center"},void 0,!1,{fileName:l,lineNumber:50,columnNumber:22},globalThis),e.exports.jsxDEV("td",{className:"p-2 text-center",children:e.exports.jsxDEV("strong",{children:i?.user_prediction?.race_points},void 0,!1,{fileName:l,lineNumber:52,columnNumber:25},globalThis)},void 0,!1,{fileName:l,lineNumber:51,columnNumber:22},globalThis)]},void 0,!0,{fileName:l,lineNumber:46,columnNumber:19},globalThis)]},void 0,!0,{fileName:l,lineNumber:31,columnNumber:16},globalThis)]},void 0,!0,{fileName:l,lineNumber:23,columnNumber:13},globalThis)]},void 0,!0,{fileName:l,lineNumber:21,columnNumber:10},globalThis)},void 0,!1,{fileName:l,lineNumber:20,columnNumber:7},globalThis)};export{u as default};

import{r as i,j as e}from"./vendor.8eb74db1.js";var l="C:\\Projects\\f1predictions-ui\\src\\components\\Results\\OtherResults.jsx";const N=({open:n,grandPrix:s})=>{const t=i.exports.useMemo(()=>s?.user_prediction?.prediction_entries?.find(r=>r.name.startsWith("FIRST_DNF")),[s]),m=i.exports.useMemo(()=>s?.result?.result_entries?.find(r=>r.name.startsWith("FIRST_DNF")),[s]),o=i.exports.useMemo(()=>s?.user_prediction?.prediction_entries?.find(r=>r.name.startsWith("FASTEST_LAP")),[s]),a=i.exports.useMemo(()=>s?.result?.result_entries?.find(r=>r.name.startsWith("FASTEST_LAP")),[s]);return e.exports.jsxDEV("div",{className:"card",children:e.exports.jsxDEV("details",{className:"card-body",open:n,children:[e.exports.jsxDEV("summary",{children:"Other results"},void 0,!1,{fileName:l,lineNumber:26,columnNumber:13},globalThis),e.exports.jsxDEV("table",{className:"table mt-2",children:[e.exports.jsxDEV("thead",{children:e.exports.jsxDEV("tr",{children:[e.exports.jsxDEV("th",{className:"px-2",children:"Prediction"},void 0,!1,{fileName:l,lineNumber:30,columnNumber:22},globalThis),e.exports.jsxDEV("th",{className:"text-nowrap px-2 ",children:"Result"},void 0,!1,{fileName:l,lineNumber:31,columnNumber:22},globalThis),e.exports.jsxDEV("th",{className:"text-nowrap px-2 text-center",children:"Points"},void 0,!1,{fileName:l,lineNumber:32,columnNumber:22},globalThis)]},void 0,!0,{fileName:l,lineNumber:29,columnNumber:19},globalThis)},void 0,!1,{fileName:l,lineNumber:28,columnNumber:16},globalThis),e.exports.jsxDEV("tbody",{children:[e.exports.jsxDEV("tr",{children:e.exports.jsxDEV("th",{colSpan:"3",className:"w-100 px-2",children:"First DNF"},void 0,!1,{fileName:l,lineNumber:37,columnNumber:22},globalThis)},void 0,!1,{fileName:l,lineNumber:36,columnNumber:19},globalThis),e.exports.jsxDEV("tr",{children:[e.exports.jsxDEV("td",{className:"p-2",children:[t?.driver?.first_name.charAt(0),". ",t?.driver?.last_name]},void 0,!0,{fileName:l,lineNumber:42,columnNumber:22},globalThis),e.exports.jsxDEV("td",{className:"p-2",children:m?e.exports.jsxDEV("span",{children:[m?.driver?.first_name.charAt(0),". ",m?.driver?.last_name]},void 0,!0,{fileName:l,lineNumber:47,columnNumber:28},globalThis):e.exports.jsxDEV("span",{children:"-"},void 0,!1,{fileName:l,lineNumber:51,columnNumber:28},globalThis)},void 0,!1,{fileName:l,lineNumber:45,columnNumber:22},globalThis),e.exports.jsxDEV("td",{className:"p-2 text-center",children:t?.points||"-"},void 0,!1,{fileName:l,lineNumber:54,columnNumber:22},globalThis)]},void 0,!0,{fileName:l,lineNumber:41,columnNumber:19},globalThis),e.exports.jsxDEV("tr",{children:e.exports.jsxDEV("th",{colSpan:"3",className:"w-100 px-2",children:"DHL Fastest Lap"},void 0,!1,{fileName:l,lineNumber:57,columnNumber:22},globalThis)},void 0,!1,{fileName:l,lineNumber:56,columnNumber:19},globalThis),e.exports.jsxDEV("tr",{children:[e.exports.jsxDEV("td",{className:"p-2",children:[o?.driver?.first_name.charAt(0),". ",o?.driver?.last_name]},void 0,!0,{fileName:l,lineNumber:62,columnNumber:22},globalThis),e.exports.jsxDEV("td",{className:"p-2",children:a?e.exports.jsxDEV("span",{children:[a?.driver?.first_name.charAt(0),". ",a?.driver?.last_name]},void 0,!0,{fileName:l,lineNumber:67,columnNumber:28},globalThis):e.exports.jsxDEV("span",{children:"-"},void 0,!1,{fileName:l,lineNumber:71,columnNumber:28},globalThis)},void 0,!1,{fileName:l,lineNumber:65,columnNumber:22},globalThis),e.exports.jsxDEV("td",{className:"p-2 text-center",children:o?.points||"-"},void 0,!1,{fileName:l,lineNumber:74,columnNumber:22},globalThis)]},void 0,!0,{fileName:l,lineNumber:61,columnNumber:19},globalThis),e.exports.jsxDEV("tr",{children:[e.exports.jsxDEV("td",{className:"p-2",children:e.exports.jsxDEV("strong",{children:"Total"},void 0,!1,{fileName:l,lineNumber:78,columnNumber:25},globalThis)},void 0,!1,{fileName:l,lineNumber:77,columnNumber:22},globalThis),e.exports.jsxDEV("td",{className:"p-2 text-center"},void 0,!1,{fileName:l,lineNumber:80,columnNumber:22},globalThis),e.exports.jsxDEV("td",{className:"p-2 text-center",children:e.exports.jsxDEV("strong",{children:s?.user_prediction?.other_points},void 0,!1,{fileName:l,lineNumber:82,columnNumber:25},globalThis)},void 0,!1,{fileName:l,lineNumber:81,columnNumber:22},globalThis)]},void 0,!0,{fileName:l,lineNumber:76,columnNumber:19},globalThis)]},void 0,!0,{fileName:l,lineNumber:35,columnNumber:16},globalThis)]},void 0,!0,{fileName:l,lineNumber:27,columnNumber:13},globalThis)]},void 0,!0,{fileName:l,lineNumber:25,columnNumber:10},globalThis)},void 0,!1,{fileName:l,lineNumber:24,columnNumber:7},globalThis)};export{N as default};

import{u,r as b,j as e}from"./vendor.855a4921.js";import{T as N}from"./Table.292b5c88.js";import{a as d,u as h,d as x,A as p}from"./index.6b8b6726.js";import{P as t}from"./Placeholder.e408a6d1.js";import"./Col.fc6e8593.js";import"./Button.10f28fc7.js";var l="C:\\Users\\runec\\Documents\\Projects\\f1predictions-ui\\src\\components\\Leaderboards\\Summary.jsx";const y=()=>{const{current_season:r}=d().state,{fetch:a,loading:m,error:f,data:n}=h(null,{initialFetch:!1}),{t:i}=u();return b.exports.useEffect(()=>{r&&a(`${x}/${r.id}${p}`)},[r]),e.exports.jsxDEV(N,{className:"mb-0",striped:!0,children:[e.exports.jsxDEV("thead",{children:e.exports.jsxDEV("tr",{children:[e.exports.jsxDEV("th",{style:{top:"0"},className:"position-sticky bg-light",children:i("leaderboard.player")},void 0,!1,{fileName:l,lineNumber:24,columnNumber:16},globalThis),e.exports.jsxDEV("th",{style:{minWidth:"30px",top:"0"},className:"border-0 text-center position-sticky bg-light",children:i("home.quali")},void 0,!1,{fileName:l,lineNumber:27,columnNumber:16},globalThis),e.exports.jsxDEV("th",{style:{minWidth:"30px",top:"0"},className:"border-0 text-center position-sticky bg-light",children:i("global.race")},void 0,!1,{fileName:l,lineNumber:30,columnNumber:16},globalThis),e.exports.jsxDEV("th",{style:{minWidth:"30px",top:"0"},className:"border-0 text-center position-sticky bg-light",children:i("global.extra")},void 0,!1,{fileName:l,lineNumber:33,columnNumber:16},globalThis),e.exports.jsxDEV("th",{style:{minWidth:"30px",top:"0"},className:"border-0 text-center position-sticky bg-light",children:i("global.total")},void 0,!1,{fileName:l,lineNumber:36,columnNumber:16},globalThis)]},void 0,!0,{fileName:l,lineNumber:23,columnNumber:13},globalThis)},void 0,!1,{fileName:l,lineNumber:22,columnNumber:10},globalThis),m?e.exports.jsxDEV("tbody",{children:[...Array(10)].map((s,o)=>e.exports.jsxDEV("tr",{children:[...Array(5)].map((g,c)=>e.exports.jsxDEV("td",{children:e.exports.jsxDEV(t,{animation:"glow",children:e.exports.jsxDEV(t,{className:"rounded-1",xs:12},void 0,!1,{fileName:l,lineNumber:48,columnNumber:31},globalThis)},void 0,!1,{fileName:l,lineNumber:47,columnNumber:28},globalThis)},c,!1,{fileName:l,lineNumber:46,columnNumber:25},globalThis))},o,!1,{fileName:l,lineNumber:44,columnNumber:19},globalThis))},void 0,!1,{fileName:l,lineNumber:42,columnNumber:13},globalThis):e.exports.jsxDEV("tbody",{children:(n||[]).sort((s,o)=>s.total_points<o.total_points?1:-1).map(s=>e.exports.jsxDEV("tr",{children:[e.exports.jsxDEV("td",{children:[e.exports.jsxDEV("span",{className:"me-1",children:s?.user?.first_name},void 0,!1,{fileName:l,lineNumber:63,columnNumber:31},globalThis),e.exports.jsxDEV("span",{children:[s?.user?.last_name.charAt(0),"."]},void 0,!0,{fileName:l,lineNumber:64,columnNumber:31},globalThis)]},void 0,!0,{fileName:l,lineNumber:62,columnNumber:28},globalThis),e.exports.jsxDEV("td",{className:"text-center",children:s?.qualifying_points},void 0,!1,{fileName:l,lineNumber:66,columnNumber:28},globalThis),e.exports.jsxDEV("td",{className:"text-center",children:s?.race_points},void 0,!1,{fileName:l,lineNumber:67,columnNumber:28},globalThis),e.exports.jsxDEV("td",{className:"text-center",children:s?.other_points},void 0,!1,{fileName:l,lineNumber:68,columnNumber:28},globalThis),e.exports.jsxDEV("td",{className:"text-center",children:e.exports.jsxDEV("strong",{children:s?.total_points},void 0,!1,{fileName:l,lineNumber:70,columnNumber:31},globalThis)},void 0,!1,{fileName:l,lineNumber:69,columnNumber:28},globalThis)]},s.id,!0,{fileName:l,lineNumber:61,columnNumber:25},globalThis))},void 0,!1,{fileName:l,lineNumber:56,columnNumber:13},globalThis)]},void 0,!0,{fileName:l,lineNumber:21,columnNumber:7},globalThis)};export{y as default};
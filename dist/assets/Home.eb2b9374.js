import{_ as n,u as p,A as x}from"./index.2622396a.js";import{R as u,u as N,r as l,j as s}from"./vendor.855a4921.js";import{d as b}from"./index.970aea1b.js";var a="C:\\Users\\runec\\Documents\\Projects\\f1predictions-ui\\src\\pages\\Home.jsx";const g=u.lazy(()=>n(()=>import("./TotalPoints.d6582c21.js"),["assets/TotalPoints.d6582c21.js","assets/Card.e0403388.js","assets/vendor.855a4921.js","assets/Col.fc6e8593.js","assets/Placeholder.e408a6d1.js","assets/Button.10f28fc7.js","assets/Row.e869789c.js"])),h=u.lazy(()=>n(()=>import("./ShowcaseGP.decbde5d.js"),["assets/ShowcaseGP.decbde5d.js","assets/Card.e0403388.js","assets/vendor.855a4921.js","assets/Button.10f28fc7.js","assets/Placeholder.e408a6d1.js","assets/Col.fc6e8593.js","assets/index.32ebb720.js","assets/index.970aea1b.js"])),v=u.lazy(()=>n(()=>import("./GrandPrixHistory.0aa8c578.js"),["assets/GrandPrixHistory.0aa8c578.js","assets/vendor.855a4921.js","assets/Col.fc6e8593.js","assets/warning.b33cdbd2.js","assets/Placeholder.e408a6d1.js","assets/Button.10f28fc7.js","assets/Row.e869789c.js","assets/index.32ebb720.js","assets/index.970aea1b.js"])),E=()=>{const{t:c}=N(),{data:r,loading:m}=p(x,{initialValue:{grand_prix:[]}}),i=l.exports.useMemo(()=>({...r,grand_prix:r.grand_prix.map(e=>({...e,qualifying_start_timestamp:new Date(e.qualifying_start_timestamp),diff:b(new Date(e.qualifying_start_timestamp),new Date)})).sort((e,t)=>e.qualifying_start_timestamp-t.qualifying_start_timestamp)}),[r]),d=l.exports.useMemo(()=>{const e=i.grand_prix.filter(t=>t.qualifying_start_timestamp<new Date).sort((t,f)=>t.qualifying_start_timestamp-f.qualifying_start_timestamp);return e[e.length-1]},[i]),o=l.exports.useMemo(()=>i.grand_prix.filter(t=>t.qualifying_start_timestamp>new Date)?.[0],[i]),_=l.exports.useMemo(()=>o?.diff<=3?o:d,[d,o]);return s.exports.jsxDEV("div",{gap:4,className:"home",children:[s.exports.jsxDEV("div",{className:"home__showcase",children:s.exports.jsxDEV(h,{showcaseGP:_,isUpcomming:_?.id===o?.id,loading:m},void 0,!1,{fileName:a,lineNumber:54,columnNumber:17},globalThis)},void 0,!1,{fileName:a,lineNumber:53,columnNumber:13},globalThis),s.exports.jsxDEV("div",{className:"home__total",children:[s.exports.jsxDEV("h5",{className:"mb-3",children:c("home.season-total")},void 0,!1,{fileName:a,lineNumber:57,columnNumber:17},globalThis),s.exports.jsxDEV(g,{results:r,loading:m,bg:"secondary"},void 0,!1,{fileName:a,lineNumber:58,columnNumber:17},globalThis)]},void 0,!0,{fileName:a,lineNumber:56,columnNumber:13},globalThis),s.exports.jsxDEV("div",{className:"home__history",children:s.exports.jsxDEV(v,{overview:i,loading:m},void 0,!1,{fileName:a,lineNumber:61,columnNumber:17},globalThis)},void 0,!1,{fileName:a,lineNumber:60,columnNumber:13},globalThis)]},void 0,!0,{fileName:a,lineNumber:52,columnNumber:9},globalThis)};export{E as default};
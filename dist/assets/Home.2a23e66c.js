import{_ as g,u as D,A as N}from"./index.bb6c9dee.js";import{R as f,r as m,j as n}from"./vendor.bc1ab3cb.js";function c(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function p(e){c(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console!="undefined"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function _(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function b(e){c(1,arguments);var t=p(e);return t.setHours(0,0,0,0),t}var x=864e5;function h(e,t){c(2,arguments);var s=b(e),o=b(t),r=s.getTime()-_(s),u=o.getTime()-_(o);return Math.round((r-u)/x)}function d(e,t){var s=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return s<0?-1:s>0?1:s}function y(e,t){c(2,arguments);var s=p(e),o=p(t),r=d(s,o),u=Math.abs(h(s,o));s.setDate(s.getDate()-r*u);var a=Number(d(s,o)===-r),i=r*(u-a);return i===0?0:i}var l="C:\\Projects\\f1predictions-ui\\src\\pages\\Home.jsx";const j=f.lazy(()=>g(()=>import("./TotalPoints.daa3e9c4.js"),["assets/TotalPoints.daa3e9c4.js","assets/Card.efde8065.js","assets/vendor.bc1ab3cb.js","assets/Col.afe966fa.js","assets/Placeholder.2b72fe60.js","assets/Button.39aee972.js","assets/Row.a789dfb1.js"])),T=f.lazy(()=>g(()=>import("./ShowcaseGP.baa5638b.js"),["assets/ShowcaseGP.baa5638b.js","assets/Card.efde8065.js","assets/vendor.bc1ab3cb.js","assets/Button.39aee972.js","assets/Placeholder.2b72fe60.js","assets/Col.afe966fa.js","assets/index.1a012b4b.js","assets/index.bb6c9dee.js","assets/index.de26fa69.css"])),E=f.lazy(()=>g(()=>import("./GrandPrixHistory.ef5ff6ef.js"),["assets/GrandPrixHistory.ef5ff6ef.js","assets/vendor.bc1ab3cb.js","assets/Col.afe966fa.js","assets/warning.b33cdbd2.js","assets/Placeholder.2b72fe60.js","assets/Button.39aee972.js","assets/Row.a789dfb1.js","assets/index.1a012b4b.js","assets/index.bb6c9dee.js","assets/index.de26fa69.css"])),w=()=>{const{data:e,loading:t}=D(N,{initialValue:{grand_prix:[]}}),s=m.exports.useMemo(()=>({...e,grand_prix:e.grand_prix.map(a=>({...a,qualifying_start_timestamp:new Date(a.qualifying_start_timestamp)}))}),[e]),o=m.exports.useMemo(()=>{const a=s.grand_prix.filter(i=>i.qualifying_start_timestamp<new Date).sort((i,v)=>i.qualifying_start_timestamp-v.qualifying_start_timestamp);return a[a.length-1]},[s]),r=m.exports.useMemo(()=>{const a=s.grand_prix.filter(i=>i.qualifying_start_timestamp>new Date);return a[a.length-1]},[s]),u=m.exports.useMemo(()=>r&&y(r.qualifying_start_timestamp,new Date)<=2?r:o,[o,r]);return n.exports.jsxDEV("div",{gap:4,className:"home",children:[n.exports.jsxDEV("div",{className:"home__showcase",children:n.exports.jsxDEV(T,{showcaseGP:u,isUpcomming:u?.id===r?.id,loading:t},void 0,!1,{fileName:l,lineNumber:45,columnNumber:13},globalThis)},void 0,!1,{fileName:l,lineNumber:44,columnNumber:10},globalThis),n.exports.jsxDEV("div",{className:"home__total",children:[n.exports.jsxDEV("h5",{className:"mb-3",children:"Season total"},void 0,!1,{fileName:l,lineNumber:48,columnNumber:13},globalThis),n.exports.jsxDEV(j,{results:e,loading:t,bg:"secondary"},void 0,!1,{fileName:l,lineNumber:49,columnNumber:13},globalThis)]},void 0,!0,{fileName:l,lineNumber:47,columnNumber:10},globalThis),n.exports.jsxDEV("div",{className:"home__history",children:n.exports.jsxDEV(E,{overview:e,loading:t},void 0,!1,{fileName:l,lineNumber:52,columnNumber:13},globalThis)},void 0,!1,{fileName:l,lineNumber:51,columnNumber:10},globalThis)]},void 0,!0,{fileName:l,lineNumber:43,columnNumber:7},globalThis)};var P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});export{P as H,_ as g,c as r,p as t};

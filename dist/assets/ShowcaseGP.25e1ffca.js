import{C as r}from"./Card.c6293047.js";import{B as a}from"./Button.23f59a48.js";import{P as o}from"./Placeholder.0f14a33b.js";import{u,o as d,j as e}from"./vendor.a19fa2bd.js";import{f as b}from"./index.dbdbb4bb.js";import"./Col.1b6e75ae.js";import"./Home.f1e0b107.js";import"./index.bfc473cf.js";var i="C:\\Users\\runec\\Documents\\Projects\\f1predictions-ui\\src\\components\\Home\\ShowcaseGP.jsx";const T=({showcaseGP:l,isUpcomming:n,loading:t})=>{const{push:s}=u(),{t:m}=d();return e.exports.jsxDEV(r,{children:t?e.exports.jsxDEV(r.Body,{children:[e.exports.jsxDEV(o,{as:r.Title,animation:"glow",children:e.exports.jsxDEV(o,{className:"rounded-1",xs:8},void 0,!1,{fileName:i,lineNumber:18,columnNumber:19},globalThis)},void 0,!1,{fileName:i,lineNumber:17,columnNumber:16},globalThis),e.exports.jsxDEV(o,{as:r.Text,animation:"glow",children:[e.exports.jsxDEV(o,{className:"rounded-1",xs:10},void 0,!1,{fileName:i,lineNumber:21,columnNumber:19},globalThis),e.exports.jsxDEV(o,{className:"rounded-1",xs:6},void 0,!1,{fileName:i,lineNumber:22,columnNumber:19},globalThis),e.exports.jsxDEV(o,{className:"rounded-1",xs:8},void 0,!1,{fileName:i,lineNumber:23,columnNumber:19},globalThis)]},void 0,!0,{fileName:i,lineNumber:20,columnNumber:16},globalThis),e.exports.jsxDEV(o.Button,{xs:6,"aria-hidden":"true"},void 0,!1,{fileName:i,lineNumber:25,columnNumber:16},globalThis)]},void 0,!0,{fileName:i,lineNumber:16,columnNumber:13},globalThis):l&&e.exports.jsxDEV(r.Body,{children:[e.exports.jsxDEV(r.Title,{children:l.name},void 0,!1,{fileName:i,lineNumber:30,columnNumber:19},globalThis),n?e.exports.jsxDEV(r.Text,{children:[m("home.upcomming-gp",{name:l.name}),e.exports.jsxDEV("strong",{children:b(new Date(l.qualifying_start_timestamp),"dd/MM HH:mm")},void 0,!1,{fileName:i,lineNumber:35,columnNumber:25},globalThis),"!"]},void 0,!0,{fileName:i,lineNumber:33,columnNumber:22},globalThis):l?.user_prediction?e.exports.jsxDEV(r.Text,{children:m("home.passed-gp-and-result",{name:l.name})},void 0,!1,{fileName:i,lineNumber:38,columnNumber:22},globalThis):e.exports.jsxDEV(r.Text,{children:m("home.passed-gp",{name:l.name})},void 0,!1,{fileName:i,lineNumber:40,columnNumber:22},globalThis),n&&!l?.user_prediction?e.exports.jsxDEV(a,{onClick:()=>s("/prediction/"+l.id),variant:"primary",type:"button",children:m("home.enter-prediction")},void 0,!1,{fileName:i,lineNumber:44,columnNumber:22},globalThis):!!l?.user_prediction&&new Date(l.qualifying_start_timestamp)>new Date?e.exports.jsxDEV(a,{onClick:()=>s("/prediction/"+l.id),variant:"primary",type:"button",children:m("home.edit-prediction")},void 0,!1,{fileName:i,lineNumber:48,columnNumber:22},globalThis):e.exports.jsxDEV(a,{onClick:()=>s("/result/"+l.id),variant:"primary",type:"button",children:m("home.show-results")},void 0,!1,{fileName:i,lineNumber:52,columnNumber:22},globalThis)]},void 0,!0,{fileName:i,lineNumber:29,columnNumber:16},globalThis)},void 0,!1,{fileName:i,lineNumber:14,columnNumber:7},globalThis)};export{T as default};

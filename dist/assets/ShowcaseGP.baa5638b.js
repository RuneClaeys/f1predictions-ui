import{C as o}from"./Card.efde8065.js";import{B as a}from"./Button.39aee972.js";import{P as r}from"./Placeholder.2b72fe60.js";import{o as t,j as e}from"./vendor.bc1ab3cb.js";import{f as u}from"./index.1a012b4b.js";import"./Col.afe966fa.js";import"./Home.2a23e66c.js";import"./index.bb6c9dee.js";var i="C:\\Projects\\f1predictions-ui\\src\\components\\Home\\ShowcaseGP.jsx";const j=({showcaseGP:l,isUpcomming:s,loading:n})=>{const{push:m}=t();return e.exports.jsxDEV(o,{children:n?e.exports.jsxDEV(o.Body,{children:[e.exports.jsxDEV(r,{as:o.Title,animation:"glow",children:e.exports.jsxDEV(r,{className:"rounded-1",xs:8},void 0,!1,{fileName:i,lineNumber:16,columnNumber:19},globalThis)},void 0,!1,{fileName:i,lineNumber:15,columnNumber:16},globalThis),e.exports.jsxDEV(r,{as:o.Text,animation:"glow",children:[e.exports.jsxDEV(r,{className:"rounded-1",xs:10},void 0,!1,{fileName:i,lineNumber:19,columnNumber:19},globalThis),e.exports.jsxDEV(r,{className:"rounded-1",xs:6},void 0,!1,{fileName:i,lineNumber:20,columnNumber:19},globalThis),e.exports.jsxDEV(r,{className:"rounded-1",xs:8},void 0,!1,{fileName:i,lineNumber:21,columnNumber:19},globalThis)]},void 0,!0,{fileName:i,lineNumber:18,columnNumber:16},globalThis),e.exports.jsxDEV(r.Button,{xs:6,"aria-hidden":"true"},void 0,!1,{fileName:i,lineNumber:23,columnNumber:16},globalThis)]},void 0,!0,{fileName:i,lineNumber:14,columnNumber:13},globalThis):l&&e.exports.jsxDEV(o.Body,{children:[e.exports.jsxDEV(o.Title,{children:l.name},void 0,!1,{fileName:i,lineNumber:28,columnNumber:19},globalThis),s?e.exports.jsxDEV(o.Text,{children:["Next up is the ",l.name,", who's going to win? Submit your predictions before"," ",e.exports.jsxDEV("strong",{children:u(new Date(l.qualifying_start_timestamp),"dd/MM HH:mm")},void 0,!1,{fileName:i,lineNumber:32,columnNumber:25},globalThis),"!"]},void 0,!0,{fileName:i,lineNumber:30,columnNumber:22},globalThis):e.exports.jsxDEV(o.Text,{children:["The ",l.name," has passed. Did you predict the outcome? Check your results now!"]},void 0,!0,{fileName:i,lineNumber:35,columnNumber:22},globalThis),s&&!l?.user_prediction?e.exports.jsxDEV(a,{onClick:()=>m("/prediction/"+l.id),variant:"primary",type:"button",children:"Enter predictions"},void 0,!1,{fileName:i,lineNumber:39,columnNumber:22},globalThis):e.exports.jsxDEV(a,{onClick:()=>m("/result/"+l.id),variant:"primary",type:"button",children:"View results"},void 0,!1,{fileName:i,lineNumber:43,columnNumber:22},globalThis)]},void 0,!0,{fileName:i,lineNumber:27,columnNumber:16},globalThis)},void 0,!1,{fileName:i,lineNumber:12,columnNumber:7},globalThis)};export{j as default};

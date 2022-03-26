import{C as f}from"./Col.fc6e8593.js";import{r as h,p,O as I,G as L,Q as C,s as g,t as v,K as P,U as _,u as k,j as e,a as G}from"./vendor.855a4921.js";import{w as H}from"./warning.b33cdbd2.js";import{P as n}from"./Placeholder.e408a6d1.js";import{R}from"./Row.e869789c.js";import{f as j}from"./index.4fa730c0.js";import"./Button.10f28fc7.js";import"./index.970aea1b.js";const D=h.exports.forwardRef(({bsPrefix:i,active:a,disabled:s,eventKey:r,className:t,variant:m,action:N,as:x,...o},u)=>{i=p(i,"list-group-item");const[c,y]=I({key:L(r,o.href),active:a,...o}),w=C(b=>{if(s){b.preventDefault(),b.stopPropagation();return}c.onClick(b)});s&&o.tabIndex===void 0&&(o.tabIndex=-1,o["aria-disabled"]=!0);const $=x||(N?o.href?"a":"button":"div");return g($,{ref:u,...o,...c,onClick:w,className:v(t,i,y.isActive&&"active",s&&"disabled",m&&`${i}-${m}`,N&&`${i}-action`)})});D.displayName="ListGroupItem";var z=D;const E=h.exports.forwardRef((i,a)=>{const{className:s,bsPrefix:r,variant:t,horizontal:m,numbered:N,as:x="div",...o}=P(i,{activeKey:"onSelect"}),u=p(r,"list-group");let c;return m&&(c=m===!0?"horizontal":`horizontal-${m}`),H(!(m&&t==="flush"),'`variant="flush"` and `horizontal` should not be used together.'),g(_,{ref:a,...o,as:x,className:v(s,u,t&&`${u}-${t}`,c&&`${u}-${c}`,N&&`${u}-numbered`)})});E.displayName="ListGroup";var d=Object.assign(E,{Item:z}),l="C:\\Users\\runec\\Documents\\Projects\\f1predictions-ui\\src\\components\\Home\\GrandPrixHistory.jsx";const V=()=>e.exports.jsxDEV(d,{as:"ol",children:[...Array(5)].map((i,a)=>e.exports.jsxDEV(d.Item,{as:"li",className:"d-flex justify-content-between align-items-start",children:e.exports.jsxDEV(R,{className:"w-100",children:[e.exports.jsxDEV(n,{className:"d-flex align-items-center justify-content-center",xs:2,as:f,animation:"glow",children:e.exports.jsxDEV(n,{className:"rounded-1",xs:12},void 0,!1,{fileName:l,lineNumber:16,columnNumber:29},globalThis)},void 0,!1,{fileName:l,lineNumber:15,columnNumber:25},globalThis),e.exports.jsxDEV(n,{xs:9,as:f,animation:"glow",children:[e.exports.jsxDEV(n,{className:"rounded-1",xs:8},void 0,!1,{fileName:l,lineNumber:19,columnNumber:29},globalThis),e.exports.jsxDEV(n,{className:"rounded-1",xs:10},void 0,!1,{fileName:l,lineNumber:20,columnNumber:29},globalThis)]},void 0,!0,{fileName:l,lineNumber:18,columnNumber:25},globalThis),e.exports.jsxDEV(n,{as:f,animation:"glow",xs:1,className:"d-flex align-items-center",children:e.exports.jsxDEV(n,{className:"rounded-1",xs:12,style:{width:"20px"}},void 0,!1,{fileName:l,lineNumber:23,columnNumber:29},globalThis)},void 0,!1,{fileName:l,lineNumber:22,columnNumber:25},globalThis)]},void 0,!0,{fileName:l,lineNumber:14,columnNumber:21},globalThis)},a,!1,{fileName:l,lineNumber:13,columnNumber:17},globalThis))},void 0,!1,{fileName:l,lineNumber:11,columnNumber:9},globalThis),T=({grandPrix:i,upcomming:a=!1})=>e.exports.jsxDEV(d,{as:"ol",children:i.map(s=>e.exports.jsxDEV(d.Item,{as:"li",className:"d-flex justify-content-between align-items-start p-0",children:e.exports.jsxDEV(G,{to:a?s.diff<=1?"/prediction/"+s.id:"":"/result/"+s.id,className:"d-flex align-items-center w-100 text-decoration-none text-black px-2",children:[e.exports.jsxDEV("strong",{className:"text-nowrap p-2",children:s.event},void 0,!1,{fileName:l,lineNumber:42,columnNumber:29},globalThis),e.exports.jsxDEV("div",{className:"d-flex flex-column p-2 flex-grow-1",children:[e.exports.jsxDEV("h6",{children:s.name},void 0,!1,{fileName:l,lineNumber:45,columnNumber:33},globalThis),e.exports.jsxDEV("div",{className:"d-flex flex-row",children:[e.exports.jsxDEV("div",{className:"d-flex flex-column flex-grow-1",children:[e.exports.jsxDEV("small",{children:"Qualifying"},void 0,!1,{fileName:l,lineNumber:48,columnNumber:41},globalThis),e.exports.jsxDEV("small",{className:"m-0",children:j(s?.qualifying_start_timestamp,"dd/MM/yyyy HH:mm")},void 0,!1,{fileName:l,lineNumber:49,columnNumber:41},globalThis)]},void 0,!0,{fileName:l,lineNumber:47,columnNumber:37},globalThis),e.exports.jsxDEV("div",{className:"d-flex flex-column flex-grow-1",children:[e.exports.jsxDEV("small",{children:"Race"},void 0,!1,{fileName:l,lineNumber:52,columnNumber:41},globalThis),e.exports.jsxDEV("small",{className:"m-0",children:j(s?.race_start_timestamp,"dd/MM/yyyy HH:mm")},void 0,!1,{fileName:l,lineNumber:53,columnNumber:41},globalThis)]},void 0,!0,{fileName:l,lineNumber:51,columnNumber:37},globalThis)]},void 0,!0,{fileName:l,lineNumber:46,columnNumber:33},globalThis)]},void 0,!0,{fileName:l,lineNumber:44,columnNumber:29},globalThis),e.exports.jsxDEV("p",{className:"p-2 m-0",children:s?.user_prediction?.total_points||"-"},void 0,!1,{fileName:l,lineNumber:57,columnNumber:29},globalThis)]},void 0,!0,{fileName:l,lineNumber:38,columnNumber:25},globalThis)},s.id,!1,{fileName:l,lineNumber:37,columnNumber:21},globalThis))},void 0,!1,{fileName:l,lineNumber:34,columnNumber:9},globalThis),q=({prevGP:i,nextGP:a,loading:s})=>{const{t:r,i18n:t}=k();return e.exports.jsxDEV("div",{children:s?e.exports.jsxDEV(e.exports.Fragment,{children:[e.exports.jsxDEV("h5",{className:"mb-3",children:r("home.upcomming")},void 0,!1,{fileName:l,lineNumber:73,columnNumber:21},globalThis),e.exports.jsxDEV(V,{},void 0,!1,{fileName:l,lineNumber:74,columnNumber:21},globalThis),e.exports.jsxDEV("h5",{className:"my-3",children:r("home.history")},void 0,!1,{fileName:l,lineNumber:75,columnNumber:21},globalThis),e.exports.jsxDEV(V,{},void 0,!1,{fileName:l,lineNumber:76,columnNumber:21},globalThis)]},void 0,!0):e.exports.jsxDEV(e.exports.Fragment,{children:[a?.length>0&&e.exports.jsxDEV("h5",{className:"mb-3",children:r("home.upcomming")},void 0,!1,{fileName:l,lineNumber:80,columnNumber:44},globalThis),e.exports.jsxDEV(T,{grandPrix:a||[],upcomming:!0},void 0,!1,{fileName:l,lineNumber:81,columnNumber:21},globalThis),i?.length>0&&e.exports.jsxDEV("h5",{className:"my-3",children:r("home.history")},void 0,!1,{fileName:l,lineNumber:82,columnNumber:44},globalThis),e.exports.jsxDEV(T,{grandPrix:i||[]},void 0,!1,{fileName:l,lineNumber:83,columnNumber:21},globalThis)," "]},void 0,!0)},void 0,!1,{fileName:l,lineNumber:70,columnNumber:9},globalThis)};export{q as default};

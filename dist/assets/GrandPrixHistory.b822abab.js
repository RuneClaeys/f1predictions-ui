import{r as N,p,O as w,G as P,Q as G,s as g,t as j,K as $,U as I,u as L,j as e,a as C}from"./vendor.855a4921.js";import{C as h}from"./Col.fc6e8593.js";import{w as k}from"./warning.b33cdbd2.js";import{P as n}from"./Placeholder.e408a6d1.js";import{R as q}from"./Row.e869789c.js";import{f as H}from"./index.83cc867a.js";import"./Button.10f28fc7.js";import"./index.970aea1b.js";import"./Home.523b4469.js";import"./index.aefdac3f.js";const v=N.exports.forwardRef(({bsPrefix:a,active:r,disabled:l,eventKey:u,className:t,variant:i,action:m,as:x,...o},c)=>{a=p(a,"list-group-item");const[d,y]=w({key:P(u,o.href),active:r,...o}),T=G(b=>{if(l){b.preventDefault(),b.stopPropagation();return}d.onClick(b)});l&&o.tabIndex===void 0&&(o.tabIndex=-1,o["aria-disabled"]=!0);const _=x||(m?o.href?"a":"button":"div");return g(_,{ref:c,...o,...d,onClick:T,className:j(t,a,y.isActive&&"active",l&&"disabled",i&&`${a}-${i}`,m&&`${a}-action`)})});v.displayName="ListGroupItem";var R=v;const D=N.exports.forwardRef((a,r)=>{const{className:l,bsPrefix:u,variant:t,horizontal:i,numbered:m,as:x="div",...o}=$(a,{activeKey:"onSelect"}),c=p(u,"list-group");let d;return i&&(d=i===!0?"horizontal":`horizontal-${i}`),k(!(i&&t==="flush"),'`variant="flush"` and `horizontal` should not be used together.'),g(I,{ref:r,...o,as:x,className:j(l,c,t&&`${c}-${t}`,d&&`${c}-${d}`,m&&`${c}-numbered`)})});D.displayName="ListGroup";var f=Object.assign(D,{Item:R}),s="C:\\Users\\runec\\Documents\\Projects\\f1predictions-ui\\src\\components\\Home\\GrandPrixHistory.jsx";const E=()=>e.exports.jsxDEV(f,{as:"ol",children:[...Array(5)].map((a,r)=>e.exports.jsxDEV(f.Item,{as:"li",className:"d-flex justify-content-between align-items-start",children:e.exports.jsxDEV(q,{className:"w-100",children:[e.exports.jsxDEV(n,{className:"d-flex align-items-center justify-content-center",xs:2,as:h,animation:"glow",children:e.exports.jsxDEV(n,{className:"rounded-1",xs:12},void 0,!1,{fileName:s,lineNumber:17,columnNumber:29},globalThis)},void 0,!1,{fileName:s,lineNumber:16,columnNumber:25},globalThis),e.exports.jsxDEV(n,{xs:9,as:h,animation:"glow",children:[e.exports.jsxDEV(n,{className:"rounded-1",xs:8},void 0,!1,{fileName:s,lineNumber:20,columnNumber:29},globalThis),e.exports.jsxDEV(n,{className:"rounded-1",xs:10},void 0,!1,{fileName:s,lineNumber:21,columnNumber:29},globalThis)]},void 0,!0,{fileName:s,lineNumber:19,columnNumber:25},globalThis),e.exports.jsxDEV(n,{as:h,animation:"glow",xs:1,className:"d-flex align-items-center",children:e.exports.jsxDEV(n,{className:"rounded-1",xs:12,style:{width:"20px"}},void 0,!1,{fileName:s,lineNumber:24,columnNumber:29},globalThis)},void 0,!1,{fileName:s,lineNumber:23,columnNumber:25},globalThis)]},void 0,!0,{fileName:s,lineNumber:15,columnNumber:21},globalThis)},r,!1,{fileName:s,lineNumber:14,columnNumber:17},globalThis))},void 0,!1,{fileName:s,lineNumber:12,columnNumber:9},globalThis),V=({grandPrix:a,upcomming:r=!1})=>e.exports.jsxDEV(f,{as:"ol",children:a.map(l=>e.exports.jsxDEV(f.Item,{as:"li",className:"d-flex justify-content-between align-items-start p-0",children:e.exports.jsxDEV(C,{to:r?l.diff<=1?"/prediction/"+l.id:"":"/result/"+l.id,className:"d-flex align-items-center w-100 text-decoration-none text-black px-2",children:[e.exports.jsxDEV("strong",{className:"text-nowrap p-2",children:l.event},void 0,!1,{fileName:s,lineNumber:43,columnNumber:29},globalThis),e.exports.jsxDEV("div",{className:"d-flex flex-column p-2 flex-grow-1",children:[e.exports.jsxDEV("h6",{children:l.name},void 0,!1,{fileName:s,lineNumber:46,columnNumber:33},globalThis),e.exports.jsxDEV("small",{className:"m-0",children:H(l.qualifying_start_timestamp,"dd/MM/yyyy HH:mm:ss")},void 0,!1,{fileName:s,lineNumber:47,columnNumber:33},globalThis)]},void 0,!0,{fileName:s,lineNumber:45,columnNumber:29},globalThis),e.exports.jsxDEV("p",{className:"p-2 m-0",children:l?.user_prediction?.total_points||"-"},void 0,!1,{fileName:s,lineNumber:49,columnNumber:29},globalThis)]},void 0,!0,{fileName:s,lineNumber:39,columnNumber:25},globalThis)},l.id,!1,{fileName:s,lineNumber:38,columnNumber:21},globalThis))},void 0,!1,{fileName:s,lineNumber:35,columnNumber:9},globalThis),J=({overview:a,loading:r})=>{const{t:l}=L(),u=N.exports.useMemo(()=>a.grand_prix.filter(i=>i.qualifying_start_timestamp<new Date).sort((i,m)=>i.qualifying_start_timestamp-m.qualifying_start_timestamp),[a]),t=N.exports.useMemo(()=>a.grand_prix.filter(i=>i.qualifying_start_timestamp>new Date).sort((i,m)=>i.qualifying_start_timestamp-m.qualifying_start_timestamp),[a]);return e.exports.jsxDEV("div",{children:r?e.exports.jsxDEV(e.exports.Fragment,{children:[e.exports.jsxDEV("h5",{className:"mb-3",children:l("home.upcomming")},void 0,!1,{fileName:s,lineNumber:76,columnNumber:21},globalThis),e.exports.jsxDEV(E,{},void 0,!1,{fileName:s,lineNumber:77,columnNumber:21},globalThis),e.exports.jsxDEV("h5",{className:"my-3",children:l("home.history")},void 0,!1,{fileName:s,lineNumber:78,columnNumber:21},globalThis),e.exports.jsxDEV(E,{},void 0,!1,{fileName:s,lineNumber:79,columnNumber:21},globalThis)]},void 0,!0):e.exports.jsxDEV(e.exports.Fragment,{children:[t.length>0&&e.exports.jsxDEV("h5",{className:"mb-3",children:l("home.upcomming")},void 0,!1,{fileName:s,lineNumber:83,columnNumber:49},globalThis),e.exports.jsxDEV(V,{grandPrix:t||[],upcomming:!0},void 0,!1,{fileName:s,lineNumber:84,columnNumber:21},globalThis),u.length>0&&e.exports.jsxDEV("h5",{className:"my-3",children:l("home.history")},void 0,!1,{fileName:s,lineNumber:85,columnNumber:47},globalThis),e.exports.jsxDEV(V,{grandPrix:u||[]},void 0,!1,{fileName:s,lineNumber:86,columnNumber:21},globalThis)," "]},void 0,!0)},void 0,!1,{fileName:s,lineNumber:73,columnNumber:9},globalThis)};export{J as default};

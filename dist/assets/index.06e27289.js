import{u as L,j as e,C as _,a as n,P as o,f as Q,b as g,B as v,R as N,c as q,d as k,e as b,L as E,N as P,r as d,g as z,S,h as X,i as $,k as u,F as p,l as U,m as J,n as Z,o as ee,T as j,p as I,q as te,s as ne,t as re,v as w,w as ae,x as se}from"./vendor.33985bdb.js";const ie=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=l(a);fetch(a.href,i)}};ie();const le=({showcaseGP:t,isUpcomming:r,loading:l})=>{const{push:s}=L();return e(_,{children:l?n(_.Body,{children:[e(o,{as:_.Title,animation:"glow",children:e(o,{className:"rounded-1",xs:8})}),n(o,{as:_.Text,animation:"glow",children:[e(o,{className:"rounded-1",xs:10}),e(o,{className:"rounded-1",xs:6}),e(o,{className:"rounded-1",xs:8})]}),e(o.Button,{xs:6,"aria-hidden":"true"})]}):t&&n(_.Body,{children:[e(_.Title,{children:t.name}),r?n(_.Text,{children:["Next up is the ",t.name,", who's going to win? Submit your predictions before"," ",e("strong",{children:Q(g(t.qualifying_start_timestamp),"dd/MM HH:mm")}),"!"]}):n(_.Text,{children:["The ",t.name," has passed. Did you predict the outcome? Check your results now!"]}),r?e(v,{onClick:()=>s("/prediction/"+t.id),variant:"primary",type:"button",children:"Enter predictions"}):e(v,{onClick:()=>s("/result/"+t.id),variant:"primary",type:"button",children:"View results"})]})})};function D(t,{initialFetch:r=!0,initialFetchOptions:l={},initialValue:s=null}={}){const[a,i]=N.useState(!1),[c,x]=N.useState(null),[f,h]=N.useState(s),m=N.useCallback(async(F,R)=>(i(!0),await q.get(`http://localhost:8080${F}`,{...R}).then(y=>y.data).then(y=>(h(y),y)).catch(y=>x(y)).finally(()=>i(!1))),[]);return N.useEffect(()=>{r&&m(t,l)},[]),{loading:a,data:f,error:c,fetch:m,setError:x,setLoading:i}}const O="/grand-prix",ce="/prediction",W="/drivers",oe="/results",V=({results:t,loading:r,bg:l="primary"})=>e(_,{bg:l,text:"white",children:e(_.Body,{children:n(k,{children:[n(b,{className:"text-center d-flex flex-column",children:[e("strong",{children:"Quali"}),r?e(o,{as:"span",animation:"glow",children:e(o,{className:"rounded-1",xs:8})}):e("span",{children:t.qualifying_points})]}),n(b,{className:"text-center d-flex flex-column",children:[e("strong",{children:"Race"}),r?e(o,{as:"span",animation:"glow",children:e(o,{className:"rounded-1",xs:8})}):e("span",{children:t.race_points})]}),n(b,{className:"text-center d-flex flex-column",children:[e("strong",{children:"Other"}),r?e(o,{as:"span",animation:"glow",children:e(o,{className:"rounded-1",xs:8})}):e("span",{children:t.other_points})]}),n(b,{className:"text-center d-flex flex-column",children:[e("strong",{children:"Total"}),r?e(o,{as:"span",animation:"glow",children:e(o,{className:"rounded-1",xs:8})}):e("span",{children:t.total_points})]})]})})}),de=({overview:t,loading:r})=>n("div",{children:[e("h5",{className:"mb-3",children:"History"}),r?e(E,{as:"ol",children:[...Array(5)].map((l,s)=>e(E.Item,{as:"li",className:"d-flex justify-content-between align-items-start",children:n(k,{className:"w-100",children:[e(o,{className:"d-flex align-items-center justify-content-center",xs:2,as:b,animation:"glow",children:e(o,{className:"rounded-1",xs:12})}),n(o,{xs:9,as:b,animation:"glow",children:[e(o,{className:"rounded-1",xs:8}),e(o,{className:"rounded-1",xs:10})]}),e(o,{as:b,animation:"glow",xs:1,className:"d-flex align-items-center",children:e(o,{className:"rounded-1",xs:12,style:{width:"20px"}})})]})},s))}):e(E,{as:"ol",reversed:!0,children:t.grand_prix.filter(l=>g(l.qualifying_start_timestamp)<new Date).map((l,s)=>e(E.Item,{as:"li",className:"d-flex justify-content-between align-items-start",children:e(P,{to:"/result/"+l.id,className:"w-100 text-decoration-none text-black",children:n(k,{className:"w-100",children:[e(b,{className:"d-flex align-items-center justify-content-center",xs:2,children:e("strong",{children:s})}),n(b,{xs:9,children:[e("h6",{className:"p-0 mb-1",children:l.name}),e("p",{className:"m-0",children:Q(g(l.qualifying_start_timestamp),"dd/MM/yyyy HH:mm:ss")})]}),e(b,{xs:1,className:"d-flex align-items-center",children:e("span",{children:l?.userPrediction?.total_points||"-"})})]})})},l.id))})]}),he=()=>{const{data:t,loading:r}=D(oe,{initialValue:{grand_prix:[]}}),l=d.exports.useMemo(()=>{const i=t.grand_prix.filter(c=>g(c.qualifying_start_timestamp)<new Date).sort((c,x)=>g(c.qualifying_start_timestamp)-g(x.qualifying_start_timestamp));return i[i.length-1]},[t]),s=d.exports.useMemo(()=>{const i=t.grand_prix.filter(c=>g(c.qualifying_start_timestamp)>new Date);return i[i.length-1]},[t]),a=d.exports.useMemo(()=>s&&z(g(s.qualifying_start_timestamp),new Date)<=3?s:l,[l,s]);return n(S,{gap:4,className:"mb-5",children:[e(le,{showcaseGP:a,isUpcomming:a?.id===s?.id,loading:r}),n("div",{children:[e("h5",{className:"mb-3",children:"Season total"}),e(V,{results:t,loading:r,bg:"secondary"})]}),e(de,{overview:t,loading:r})]})},me=()=>{const t=X().search,r=d.exports.useMemo(()=>new URLSearchParams(t).get("redirect_uri"),[t]),l=d.exports.useCallback(()=>{window.location.replace(`http://localhost:8080/login?redirect_uri=${encodeURIComponent(r)}`)},[r]);return n(S,{className:"display:flex; align-items-center p-4 mt-4",children:[e("h3",{className:"mb-4",children:"Welcome to F1 Predictions"}),n("center",{className:"mb-5 pb-4",children:["Please login using your Google account by clicking the button below.",e("br",{})]}),e(v,{onClick:l,variant:"primary w-100 mb-2",children:e("span",{className:"px-5",children:"Login with Google"})}),e("small",{children:" We'll never share your data with anyone."})]})};var ue=[$().shape({QUALIFYING_1:u().required("Required"),QUALIFYING_2:u().required("Required"),QUALIFYING_3:u().required("Required"),QUALIFYING_4:u().required("Required"),QUALIFYING_5:u().required("Required")}),$().shape({RACE_1:u().required("Required"),RACE_2:u().required("Required"),RACE_3:u().required("Required"),RACE_4:u().required("Required"),RACE_5:u().required("Required"),RACE_6:u().required("Required"),RACE_7:u().required("Required"),RACE_8:u().required("Required"),RACE_9:u().required("Required"),RACE_10:u().required("Required")}),$().shape({FIRST_DNF:u().required("Required"),FASTEST_LAP:u().required("Required")})];function pe(){const[t,r]=N.useState(!1),[l,s]=N.useState(null),[a,i]=N.useState(null),c=N.useCallback(async(x,f,h)=>(r(!0),await q.post(`http://localhost:8080${x}`,f,h).then(m=>m.data).then(m=>(i(m),m)).catch(m=>s(m)).finally(()=>r(!1))),[]);return{loading:t,data:a,error:l,fetch:c,setError:s,setLoading:r}}const Y={title:"F1 Predictions",leftAction:null,leftActioinIcon:null,rightAction:null,rightActionIcon:null,showBottomNav:!0},fe={drivers:[],navbar:Y},B=N.createContext();function Ne(t,r){switch(r.type){case"SET_DRIVERS":return{...t,drivers:r.payload};case"SET_NAVBAR":return{...t,navbar:{...t.navbar,...r.payload}};case"RESET_NAVBAR":return{...t,navbar:Y};default:return t}}const ye=({children:t})=>{const[r,l]=N.useReducer(Ne,fe),{fetch:s}=D(W,{initialFetch:!1});return d.exports.useEffect(async()=>{const a=await s(W);l({type:"SET_DRIVERS",payload:a})},[s]),e(B.Provider,{value:{state:r,dispatch:l},children:t})};function C(){const t=N.useContext(B);if(!t)throw Error("StoreContext must be used within a StoreProvider");return t}function G(t){const{dispatch:r}=C();d.exports.useEffect(()=>(r({type:"SET_NAVBAR",payload:t}),()=>{r({type:"RESET_NAVBAR"})}),[t])}const xe=({handleChange:t,errors:r,values:l,onNext:s,disabled:a})=>{const{drivers:i}=C().state;return n("div",{className:"d-flex flex-column",style:{paddingBottom:"80px"},children:[e("h2",{children:"Qualifying"}),[...Array(5)].map((c,x)=>{const f=x+1;return n(p.Group,{className:"mb-3",children:[n(p.Label,{children:["Position ",f]}),n(p.Control,{as:"select",name:`QUALIFYING_${f}`,value:l[`QUALIFYING_${f}`],disabled:a,onChange:t,isInvalid:!!r[`QUALIFYING_${f}`],children:[e("option",{children:"Choose a driver"}),i.map(h=>e("option",{value:h.id,children:`${h.first_name} ${h.last_name}`},h.id))]}),e(p.Control.Feedback,{type:"invalid",children:r[`QUALIFYING_${f}`]})]},`QUALIFYING_${f}`)}),e("div",{className:"d-flex p-4 w-100 flex-column position-fixed bg-white",style:{bottom:0,left:0},children:n(v,{onClick:s,variant:"primary px-5",type:"button",disabled:a,children:[e("span",{className:"me-3",children:"Race predicitons"}),e("i",{className:"fas fa-arrow-right"})]})})]})},_e=({handleChange:t,errors:r,values:l,disabled:s,onNext:a,onPrev:i})=>{const{drivers:c}=C().state;return n("div",{className:"d-flex flex-column",style:{paddingBottom:"80px"},children:[e("h2",{children:"Race"}),[...Array(10)].map((x,f)=>{const h=f+1;return n(p.Group,{className:"mb-3",children:[n(p.Label,{children:["Position ",h]}),n(p.Control,{as:"select",name:`RACE_${h}`,value:l[`RACE_${h}`],disabled:s,onChange:t,isInvalid:!!r[`RACE_${h}`],children:[e("option",{children:"Choose a driver"}),c.map(m=>e("option",{value:m.id,children:`${m.first_name} ${m.last_name}`},m.id))]}),e(p.Control.Feedback,{type:"invalid",children:r[`RACE_${h}`]})]},`RACE_${h}`)}),n("div",{className:"d-flex p-4 w-100 position-fixed bg-white gap-4",style:{bottom:0,left:0},children:[n(v,{onClick:i,variant:"outline-primary",type:"button",className:"col",disabled:s,children:[e("i",{className:"fas fa-arrow-left"}),e("span",{className:"ms-3",children:"Back"})]}),n(v,{onClick:a,variant:"primary",type:"button",className:"col-7",disabled:s,children:[e("span",{className:"me-3",children:"Next"}),e("i",{className:"fas fa-arrow-right"})]})]})]})},be=({handleChange:t,errors:r,values:l,disabled:s,onPrev:a})=>{const{drivers:i}=C().state;return n("div",{className:"d-flex flex-column",style:{paddingBottom:"80px"},children:[e("h2",{children:"Extra"}),n(p.Group,{className:"mb-3",children:[e(p.Label,{children:"Fastest lap"}),n(p.Control,{as:"select",name:"FASTEST_LAP",value:l.FASTEST_LAP,disabled:s,onChange:t,isInvalid:!!r.FASTEST_LAP,children:[e("option",{children:"Choose a driver"}),i.map(c=>e("option",{value:c.id,children:`${c.first_name} ${c.last_name}`},c.id))]}),e(p.Control.Feedback,{type:"invalid",children:r.FASTEST_LAP})]},"FASTEST_LAP"),n(p.Group,{className:"mb-3",children:[e(p.Label,{children:"First dnf"}),n(p.Control,{as:"select",name:"FIRST_DNF",value:l.FIRST_DNF,disabled:s,onChange:t,isInvalid:!!r.FIRST_DNF,children:[e("option",{children:"Choose a driver"}),i.map(c=>e("option",{value:c.id,children:`${c.first_name} ${c.last_name}`},c.id))]}),e(p.Control.Feedback,{type:"invalid",children:r.FIRST_DNF})]},"FIRST_DNF"),n("div",{className:"d-flex p-4 w-100 position-fixed bg-white gap-4",style:{bottom:0,left:0},children:[n(v,{onClick:a,variant:"outline-primary",type:"button",className:"col",disabled:s,children:[e("i",{className:"fas fa-arrow-left"}),e("span",{className:"ms-3",children:"Back"})]}),n(v,{variant:"primary",className:"col-7",type:"submit",disabled:s,children:[e("span",{className:"me-3",children:"Save"}),e("i",{className:"fas fa-check"})]})]})]})},ge=()=>{const[t,r]=N.useState(!1),[l,s]=N.useState(0),{id:a}=U(),{push:i,goBack:c}=L();G({leftAction:c,leftActionIcon:"fa-arrow-left",showBottomNav:!1});const{fetch:x,loading:f}=pe();async function h(R){await x(O+`/${a}`+ce,{prediction_entries:Object.entries(R).map(([y,A])=>({name:y,driver_id:A}))}).then(()=>i("/"))}async function m(R){const y=await R();Object.keys(y).length<=0?(s(l+1),r(!1)):r(!0)}function F(){s(l-1)}return e(J,{validationSchema:ue[l],validateOnChange:t,validateOnBlur:t,initialValues:{},onSubmit:h,children:({handleSubmit:R,handleChange:y,values:A,errors:T,validateForm:M,dirty:H})=>n(Z,{children:[e(ee,{when:H,message:"You have unsaved changes, are you sure you want to leave?"}),n(p,{noValidate:!0,onSubmit:K=>{K.preventDefault(),R(),r(!0)},children:[l===0&&e(xe,{handleChange:y,errors:T,values:A,disabled:f,onNext:()=>m(M)}),l===1&&e(_e,{handleChange:y,errors:T,values:A,disabled:f,onNext:()=>m(M),onPrev:F}),l===2&&e(be,{handleChange:y,errors:T,values:A,disabled:f,onPrev:F})]})]})})},ve=({open:t,grandPrix:r})=>{const l=d.exports.useMemo(()=>r?.user_prediction?.prediction_entries?.find(c=>c.name.startsWith("FIRST_DNF")),[r]),s=d.exports.useMemo(()=>r?.result?.result_entries?.find(c=>c.name.startsWith("FIRST_DNF")),[r]),a=d.exports.useMemo(()=>r?.user_prediction?.prediction_entries?.find(c=>c.name.startsWith("FASTEST_LAP")),[r]),i=d.exports.useMemo(()=>r?.result?.result_entries?.find(c=>c.name.startsWith("FASTEST_LAP")),[r]);return e("div",{className:"card",children:n("details",{className:"card-body",open:t,children:[e("summary",{children:"Other results"}),n("table",{className:"table mt-2",children:[e("thead",{children:n("tr",{children:[e("th",{className:" px-2",children:"Prediction"}),e("th",{className:"text-nowrap px-2 ",children:"Result"}),e("th",{className:"text-nowrap px-2 text-center",children:"Points"})]})}),n("tbody",{children:[e("tr",{children:e("th",{colSpan:"3",className:"w-100 px-2",children:"First DNF"})}),n("tr",{children:[n("td",{className:"p-2",children:[l?.driver?.first_name," ",l?.driver?.last_name]}),n("td",{className:"p-2 ",children:[s?.driver?.first_name," ",s?.driver?.last_name]}),e("td",{className:"p-2 text-center",children:l?.points})]}),e("tr",{children:e("th",{colSpan:"3",className:"w-100 px-2",children:"DHL Fastest Lap"})}),n("tr",{children:[n("td",{className:"p-2",children:[a?.driver?.first_name," ",a?.driver?.last_name]}),n("td",{className:"p-2 ",children:[i?.driver?.first_name," ",i?.driver?.last_name]}),e("td",{className:"p-2 text-center",children:a?.points})]}),n("tr",{children:[e("td",{className:"p-2",children:e("strong",{children:"Total"})}),e("td",{className:"p-2 text-center"}),e("td",{className:"p-2 text-center",children:e("strong",{children:r?.user_prediction?.other_points})})]})]})]})]})})},Re=({grandPrix:t,open:r})=>{const l=d.exports.useMemo(()=>t?.user_prediction?.prediction_entries?.filter(a=>a.name.startsWith("QUALIFYING"))?.sort((a,i)=>a.name.localeCompare(i.name)),[t]),s=d.exports.useMemo(()=>t?.result?.result_entries?.filter(a=>a.name.startsWith("QUALIFYING"))?.sort((a,i)=>a.name.localeCompare(i.name)),[t]);return e("div",{className:"card",children:n("details",{className:"card-body",open:r,children:[e("summary",{children:"Qualifying results"}),n("table",{className:"table mt-2",children:[e("thead",{children:n("tr",{children:[e("th",{className:" px-2",children:"Prediction"}),e("th",{className:"text-nowrap px-2 ",children:"Result"}),e("th",{className:"text-nowrap px-2 text-center",children:"Points"})]})}),n("tbody",{children:[l?.map((a,i)=>n("tr",{children:[n("td",{className:"p-2",children:[n("strong",{children:[i+1,". "]}),n("span",{children:[a?.driver?.first_name," ",a?.driver?.last_name]})]}),n("td",{className:"p-2 r",children:[s[i]?.driver?.first_name," ",s[i]?.driver?.last_name]}),e("td",{className:"p-2 text-center",children:a?.points})]},i)),n("tr",{children:[e("td",{className:"p-2",children:e("strong",{children:"Total"})}),e("td",{className:"p-2 text-center"}),e("td",{className:"p-2 text-center",children:e("strong",{children:t?.user_prediction?.qualifying_points})})]})]})]})]})})},we=({grandPrix:t,open:r})=>{const l=d.exports.useMemo(()=>t?.user_prediction?.prediction_entries?.filter(a=>a.name.startsWith("RACE"))?.sort((a,i)=>a.name.localeCompare(i.name)),[t]),s=d.exports.useMemo(()=>t?.result?.result_entries?.filter(a=>a.name.startsWith("RACE"))?.sort((a,i)=>a.name.localeCompare(i.name)),[t]);return e("div",{className:"card",children:n("details",{className:"card-body",open:r,children:[e("summary",{children:"Race results"}),n("table",{className:"table mt-2",children:[e("thead",{children:n("tr",{children:[e("th",{className:"px-2",children:"Prediction"}),e("th",{className:"text-nowrap px-2",children:"Result"}),e("th",{className:"text-nowrap px-2 text-center",children:"Points"})]})}),n("tbody",{children:[l?.map((a,i)=>n("tr",{children:[n("td",{className:"p-2",children:[n("strong",{children:[i+1,". "]}),n("span",{children:[a?.driver?.first_name," ",a?.driver?.last_name]})]}),n("td",{className:"p-2 r",children:[s[i]?.driver?.first_name," ",s[i]?.driver?.last_name]}),e("td",{className:"p-2 text-center",children:a?.points})]},i)),n("tr",{children:[e("td",{className:"p-2",children:e("strong",{children:"Total"})}),e("td",{className:"p-2 text-center"}),e("td",{className:"p-2 text-center",children:e("strong",{children:t?.user_prediction?.race_points})})]})]})]})]})})},Ae=()=>{const{id:t}=U(),{error:r,loading:l,data:s}=D(`${O}/${t}`),{goBack:a}=L();d.exports.useEffect(()=>{console.log(s)},[s]);const i=d.exports.useMemo(()=>({title:s?.name||"Loading...",leftAction:a,leftActionIcon:"fa-arrow-left",showBottomNav:!1}),[s]);return G(i),n(S,{gap:3,className:"mb-5",children:[e(V,{results:{qualifying_points:s?.user_prediction?.qualifying_points,race_points:s?.user_prediction?.race_points,other_points:s?.user_prediction?.other_points,total_points:s?.user_prediction?.total_points},loading:l}),e(Re,{grandPrix:s,open:!0}),e(we,{grandPrix:s,open:!1}),e(ve,{grandPrix:s,open:!1})]})},Se=()=>n(j,{className:"mb-0 ",striped:!0,children:[e("thead",{children:n("tr",{className:"border-0",children:[e("th",{className:"position-sticky bg-light",style:{left:"0",top:"0",zIndex:"1020"},children:"Player"}),[...Array(20)].map((t,r)=>e("th",{className:"text-nowrap text-center position-sticky bg-light",style:{top:"0"},children:"Dutch GP"},r)),e("th",{className:"position-sticky bg-light",style:{right:"0",top:"0",zIndex:"1020"},children:"Total"})]})}),e("tbody",{children:[...Array(15)].map((t,r)=>n("tr",{children:[e("td",{className:"position-sticky bg-white text-nowrap",style:{left:"0"},children:"Thibault D."}),[...Array(20)].map((l,s)=>e("td",{className:"text-center",children:"35"},s)),e("td",{className:"position-sticky bg-white text-center",style:{right:"0"},children:e("strong",{children:"98"})})]},r))})]}),Ie=()=>n(j,{className:"mb-0",striped:!0,bordered:!0,children:[e("thead",{children:n("tr",{children:[e("th",{style:{top:"0"},className:"text-center position-sticky bg-light",children:"Player"}),e("th",{style:{minWidth:"30px",top:"0"},className:"border-0 text-center position-sticky bg-light",children:"Quali"}),e("th",{style:{minWidth:"30px",top:"0"},className:"border-0 text-center position-sticky bg-light",children:"Race"}),e("th",{style:{minWidth:"30px",top:"0"},className:"border-0 text-center position-sticky bg-light",children:"Other"}),e("th",{style:{minWidth:"30px",top:"0"},className:"border-0 text-center position-sticky bg-light",children:"Total"})]})}),e("tbody",{children:[...Array(15)].map((t,r)=>n("tr",{children:[e("td",{children:"Thibault D."}),e("td",{className:"text-center",children:"32"}),e("td",{className:"text-center",children:"54"}),e("td",{className:"text-center",children:"12"}),e("td",{className:"text-center",children:e("strong",{children:"98"})})]},r))})]}),Ce=()=>{const[t,r]=d.exports.useState(0);return G({title:"Leaderboard"}),n(S,{children:[n(I,{className:"mb-2",variant:"pills",defaultActiveKey:0,onSelect:l=>r(l),children:[e(I.Item,{children:e(I.Link,{eventKey:"0",children:"Summary"})}),e(I.Item,{children:e(I.Link,{eventKey:"1",children:"Per race"})})]}),n("div",{className:"border overflow-auto",style:{maxHeight:"calc(100vh - 12rem)"},children:[t==0&&e(Ie,{}),t==1&&e(Se,{})]})]})},Fe=()=>{const{navbar:t}=C().state;return n("div",{className:"d-flex align-items-center bg-primary text-white p-1",children:[e("div",{className:"col",children:t.leftAction&&e("button",{onClick:t.leftAction,className:"btn text-white py-0",children:e("i",{className:`fas ${t.leftActionIcon}`})})}),e("h4",{className:"mb-0 col-9 text-center py-2 ",children:t.title}),e("div",{className:"col",children:t.rightAction&&e("button",{onClick:t.rightAction,className:"btn text-white py-0",children:e("i",{className:`fas ${t.rightActionIcon}`})})})]})},qe=()=>n("nav",{className:"bg-primary d-flex",children:[e(P,{to:"/",exact:!0,activeClassName:"opacity-100",className:"btn btn-link py-2 my-1 col text-white opacity-50",children:e("i",{className:"fas fa-home"})}),e(P,{to:"/leaderboard",exact:!0,activeClassName:"opacity-100",className:"btn btn-link py-2 my-1 col text-white opacity-50",children:e("i",{className:"fas fa-poll"})})]}),Ee=()=>e(te,{children:e(ye,{children:e(B.Consumer,{children:({state:t})=>n(S,{gap:3,children:[e("div",{className:"sticky-top yeet",children:e(Fe,{})}),e(ne,{className:"h-100",style:{minHeight:"calc(100vh - 134px)"},children:n(re,{children:[e(w,{path:"/login",component:me}),e(w,{exact:!0,path:"/",component:he}),e(w,{path:"/prediction/:id",component:ge}),e(w,{path:"/result/:id",component:Ae}),e(w,{path:"/leaderboard",component:Ce}),e(w,{exact:!0,path:"*",render:()=>e(ae,{to:"/"})})]})}),t.navbar.showBottomNav&&e("div",{className:"position-sticky",style:{bottom:"0",width:"100vw"},children:e(qe,{})})]})})})});q.interceptors.request.use(function(t){return t.withCredentials=!0,t.headers={...t.headers,Accept:"application/json","Content-Type":"application/json"},t},function(t){return Promise.reject(t)});q.interceptors.response.use(function(t){return t},function(t){return t.response.status===401&&window.location.replace(window.location.origin+`/login?redirect_uri=${window.location.href}`),Promise.reject(t)});se.render(e(N.StrictMode,{children:e(Ee,{})}),document.getElementById("root"));

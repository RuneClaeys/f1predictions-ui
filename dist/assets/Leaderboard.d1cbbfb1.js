import{_ as K}from"./index.bb6c9dee.js";import{r as s,R as g,v as T,x as S,l as i,y as O,z as U,A as W,t as q,i as H,m as G,q as x,D as J,s as Q,N as X,E as Y,G as Z,j as E,S as ee}from"./vendor.bc1ab3cb.js";import{u as ne}from"./useNavbar.f85b55f5.js";const $={prefix:String(Math.round(Math.random()*1e10)),current:0},te=g.createContext($);let re=Boolean(typeof window!="undefined"&&window.document&&window.document.createElement);function oe(e){let n=s.exports.useContext(te);return n===$&&!re&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),s.exports.useMemo(()=>e||"react-aria"+n.prefix+"-"+ ++n.current,[e])}function R({children:e,in:n,mountOnEnter:t,unmountOnExit:r}){const o=s.exports.useRef(n);return s.exports.useEffect(()=>{n&&(o.current=!0)},[n]),n?e:r||!o.current&&t?null:e}const ae=["active","eventKey","mountOnEnter","transition","unmountOnExit"],ie=["activeKey","getControlledId","getControllerId"],se=["as"];function C(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function _(e){let{active:n,eventKey:t,mountOnEnter:r,transition:o,unmountOnExit:a}=e,l=C(e,ae);const u=s.exports.useContext(T);if(!u)return[l,{eventKey:t,isActive:n,mountOnEnter:r,transition:o,unmountOnExit:a}];const{activeKey:m,getControlledId:p,getControllerId:d}=u,c=C(u,ie),b=S(t);return[Object.assign({},l,{id:p(t),"aria-labelledby":d(t)}),{eventKey:t,isActive:n==null&&b!=null?S(m)===b:n,transition:o||c.transition,mountOnEnter:r??c.mountOnEnter,unmountOnExit:a??c.unmountOnExit}]}const w=s.exports.forwardRef((e,n)=>{let{as:t="div"}=e,r=C(e,se);const[o,{isActive:a,onEnter:l,onEntering:u,onEntered:m,onExit:p,onExiting:d,onExited:c,mountOnEnter:b,unmountOnExit:f,transition:h=R}]=_(r);return i(T.Provider,{value:null,children:i(O.Provider,{value:null,children:i(h,{in:a,onEnter:l,onEntering:u,onEntered:m,onExit:p,onExiting:d,onExited:c,mountOnEnter:b,unmountOnExit:f,children:i(t,Object.assign({},o,{ref:n,role:"tabpanel",hidden:!a,"aria-hidden":!a}))})})})});w.displayName="TabPanel";const I=e=>{const{id:n,generateChildId:t,onSelect:r,activeKey:o,defaultActiveKey:a,transition:l,mountOnEnter:u,unmountOnExit:m,children:p}=e,[d,c]=U(o,a,r),b=oe(n),f=s.exports.useMemo(()=>t||((v,N)=>b?`${b}-${N}-${v}`:null),[b,t]),h=s.exports.useMemo(()=>({onSelect:c,activeKey:d,transition:l,mountOnEnter:u||!1,unmountOnExit:m||!1,getControlledId:v=>f(v,"tabpane"),getControllerId:v=>f(v,"tab")}),[c,d,l,u,m,f]);return i(T.Provider,{value:h,children:i(O.Provider,{value:c||null,children:p})})};I.Panel=w;var D=I;function P(e){return typeof e=="boolean"?e?W:void 0:e}const A=({transition:e,...n})=>i(D,{...n,transition:P(e)});A.displayName="TabContainer";var le=A,V=q("tab-content");const L=s.exports.forwardRef(({bsPrefix:e,transition:n,...t},r)=>{const[{className:o,as:a="div",...l},{isActive:u,onEnter:m,onEntering:p,onEntered:d,onExit:c,onExiting:b,onExited:f,mountOnEnter:h,unmountOnExit:v,transition:N=R}]=_({...t,transition:P(n)}),F=H(e,"tab-pane");return i(T.Provider,{value:null,children:i(O.Provider,{value:null,children:i(N,{in:u,onEnter:m,onEntering:p,onEntered:d,onExit:c,onExiting:b,onExited:f,mountOnEnter:h,unmountOnExit:v,children:i(a,{...l,ref:r,className:G(o,F,u&&"active")})})})})});L.displayName="TabPane";var M=L;const ue={eventKey:x.oneOfType([x.string,x.number]),title:x.node.isRequired,disabled:x.bool,tabClassName:x.string},k=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};k.propTypes=ue;var B=Object.assign(k,{Container:le,Content:V,Pane:M});function z(e,n){let t=0;return s.exports.Children.map(e,r=>s.exports.isValidElement(r)?n(r,t++):r)}function de(e,n){let t=0;s.exports.Children.forEach(e,r=>{s.exports.isValidElement(r)&&n(r,t++)})}const ce={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1};function me(e){let n;return de(e,t=>{n==null&&(n=t.props.eventKey)}),n}function be(e){const{title:n,eventKey:t,disabled:r,tabClassName:o,id:a}=e.props;return n==null?null:i(Y,{as:"li",role:"presentation",children:i(Z,{as:"button",type:"button",eventKey:t,disabled:r,id:a,className:o,children:n})})}const j=e=>{const{id:n,onSelect:t,transition:r,mountOnEnter:o,unmountOnExit:a,children:l,activeKey:u=me(l),...m}=J(e,{activeKey:"onSelect"});return Q(D,{id:n,activeKey:u,onSelect:t,transition:P(r),mountOnEnter:o,unmountOnExit:a,children:[i(X,{...m,role:"tablist",as:"ul",children:z(l,be)}),i(V,{children:z(l,p=>{const d={...p.props};return delete d.title,delete d.disabled,delete d.tabClassName,i(M,{...d})})})]})};j.defaultProps=ce;j.displayName="Tabs";var pe=j,y="C:\\Projects\\f1predictions-ui\\src\\pages\\Leaderboard.jsx";const fe=g.lazy(()=>K(()=>import("./PerRace.8b059b2d.js"),["assets/PerRace.8b059b2d.js","assets/Table.8d9b697e.js","assets/vendor.bc1ab3cb.js"])),ve=g.lazy(()=>K(()=>import("./Summary.2739a3e8.js"),["assets/Summary.2739a3e8.js","assets/vendor.bc1ab3cb.js","assets/Table.8d9b697e.js","assets/index.bb6c9dee.js","assets/index.de26fa69.css","assets/Placeholder.2b72fe60.js","assets/Col.afe966fa.js","assets/Button.39aee972.js"])),he=()=>{const e=s.exports.useMemo(()=>({title:"Leaderboard"}),[]);return ne(e),E.exports.jsxDEV(ee,{className:"leaderboard",children:E.exports.jsxDEV(pe,{className:"mb-2",variant:"pills",defaultActiveKey:0,children:[E.exports.jsxDEV(B,{eventKey:"0",title:"Summary",style:{maxHeight:"calc(100vh - 12rem)",overflow:"auto"},children:E.exports.jsxDEV(ve,{},void 0,!1,{fileName:y,lineNumber:18,columnNumber:16},globalThis)},void 0,!1,{fileName:y,lineNumber:17,columnNumber:13},globalThis),E.exports.jsxDEV(B,{eventKey:"1",title:"Detailed",style:{maxHeight:"calc(100vh - 12rem)",overflow:"auto"},children:E.exports.jsxDEV(fe,{},void 0,!1,{fileName:y,lineNumber:21,columnNumber:16},globalThis)},void 0,!1,{fileName:y,lineNumber:20,columnNumber:13},globalThis)]},void 0,!0,{fileName:y,lineNumber:16,columnNumber:10},globalThis)},void 0,!1,{fileName:y,lineNumber:15,columnNumber:7},globalThis)};export{he as default};

import{p as h,t as m,r as s,s as t}from"./vendor.2d83aa44.js";import{u as f}from"./Col.5688259f.js";import{B}from"./Button.54e4c99d.js";function l({animation:o,bg:a,bsPrefix:e,size:r,...n}){e=h(e,"placeholder");const[{className:p,...u}]=f(n);return{...u,className:m(p,o?`${e}-${o}`:e,r&&`${e}-${r}`,a&&`bg-${a}`)}}const c=s.exports.forwardRef((o,a)=>{const e=l(o);return t(B,{...e,ref:a,disabled:!0,tabIndex:-1})});c.displayName="PlaceholderButton";var P=c;const d=s.exports.forwardRef(({as:o="span",...a},e)=>{const r=l(a);return t(o,{...r,ref:e})});d.displayName="Placeholder";var v=Object.assign(d,{Button:P});export{v as P};

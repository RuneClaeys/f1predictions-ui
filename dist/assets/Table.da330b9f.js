import{r as x,s as u,q as v,p as l}from"./vendor.8eb74db1.js";const N=x.exports.forwardRef(({bsPrefix:$,className:c,striped:d,bordered:b,borderless:f,hover:n,size:a,variant:t,responsive:s,...i},p)=>{const e=u($,"table"),m=v(c,e,t&&`${e}-${t}`,a&&`${e}-${a}`,d&&`${e}-striped`,b&&`${e}-bordered`,f&&`${e}-borderless`,n&&`${e}-hover`),o=l("table",{...i,className:m,ref:p});if(s){let r=`${e}-responsive`;return typeof s=="string"&&(r=`${r}-${s}`),l("div",{className:r,children:o})}return o});var h=N;export{h as T};
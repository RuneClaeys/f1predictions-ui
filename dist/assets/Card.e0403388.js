import{r as i,s as n,t as l,p as m,D as H,A as d}from"./vendor.855a4921.js";var f=a=>i.exports.forwardRef((e,r)=>n("div",{...e,ref:r,className:l(e.className,a)}));const p=i.exports.forwardRef(({bsPrefix:a,className:e,variant:r,as:o="img",...c},s)=>{const t=m(a,"card-img");return n(o,{ref:s,className:l(r?`${t}-${r}`:t,e),...c})});p.displayName="CardImg";var $=p;const x=i.exports.forwardRef(({bsPrefix:a,className:e,as:r="div",...o},c)=>{const s=m(a,"card-header"),t=i.exports.useMemo(()=>({cardHeaderBsPrefix:s}),[s]);return n(H.Provider,{value:t,children:n(r,{ref:c,...o,className:l(e,s)})})});x.displayName="CardHeader";var h=x;const b=f("h5"),I=f("h6"),v=d("card-body"),P=d("card-title",{Component:b}),B=d("card-subtitle",{Component:I}),w=d("card-link",{Component:"a"}),R=d("card-text",{Component:"p"}),S=d("card-footer"),T=d("card-img-overlay"),j={body:!1},C=i.exports.forwardRef(({bsPrefix:a,className:e,bg:r,text:o,border:c,body:s,children:t,as:u="div",...y},g)=>{const N=m(a,"card");return n(u,{ref:g,...y,className:l(e,N,r&&`bg-${r}`,o&&`text-${o}`,c&&`border-${c}`),children:s?n(v,{children:t}):t})});C.displayName="Card";C.defaultProps=j;var A=Object.assign(C,{Img:$,Title:P,Subtitle:B,Body:v,Link:w,Text:R,Header:h,Footer:S,ImgOverlay:T});export{A as C};

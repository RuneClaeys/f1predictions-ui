var i=function(){};{var u=function(e,r){var a=arguments.length;r=new Array(a>1?a-1:0);for(var n=1;n<a;n++)r[n-1]=arguments[n];var g=0,o="Warning: "+e.replace(/%s/g,function(){return r[g++]});typeof console!="undefined"&&console.error(o);try{throw new Error(o)}catch{}};i=function(t,e,r){var a=arguments.length;r=new Array(a>2?a-2:0);for(var n=2;n<a;n++)r[n-2]=arguments[n];if(e===void 0)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");t||u.apply(null,[e].concat(r))}}var f=i;export{f as w};

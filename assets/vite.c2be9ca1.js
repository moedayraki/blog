const m=(n,s)=>{const t=n.__vccOpts||n;for(const[c,e]of s)t[c]=e;return t},f="modulepreload",h=function(n){return"/"+n},i={},d=function(s,t,c){return!t||t.length===0?s():Promise.all(t.map(e=>{if(e=h(e),e in i)return;i[e]=!0;const o=e.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${l}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":f,o||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),o)return new Promise((a,u)=>{r.addEventListener("load",a),r.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>s())};export{m as _,d as a};

import{f as s,t as f,k as p,m as l,n as d,l as v,o as S,b as _,p as g}from"./vendor-vue.5ac6f390.js";const h=["title","date-time"],k=s({__name:"TimeAgo",props:{date:null},setup(o){let m=o,t=f(m,"date"),n=p(""),r=l(()=>t.value.toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})),u=l(()=>t.value.toISOString());{const i=e=>e<1?"a few minutes ago":e<2?"an hour ago":e<8?"a few hours ago":e<24?"today":e<192?"this week":e<720?"this month":t.value.toLocaleDateString("en-US",{day:"numeric",month:"long"}),a=()=>n.value=i((Number(new Date)-Number(t.value))/36e5);let c=setInterval(a,6e4);d(()=>clearInterval(c)),v(t,a,{immediate:!0})}return(i,a)=>(S(),_("time",{title:r.value,"date-time":u.value},g(n.value||r.value),9,h))}});export{k as default};

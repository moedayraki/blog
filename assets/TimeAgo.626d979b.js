import{d as s,t as d,r as f,b as l,o as p,w as v,e as S,f as _,g}from"./vendor-vue.4afddc40.js";const w=["title","date-time"],D=s({__name:"TimeAgo",props:{date:{}},setup(o){let m=o,t=d(m,"date"),r=f(""),n=l(()=>t.value.toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})),u=l(()=>t.value.toISOString());{const i=e=>e<1?"a few minutes ago":e<2?"an hour ago":e<8?"a few hours ago":e<24?"today":e<192?"this week":e<720?"this month":t.value.toLocaleDateString("en-US",{day:"numeric",month:"long"}),a=()=>r.value=i((Number(new Date)-Number(t.value))/36e5);let c=setInterval(a,6e4);p(()=>clearInterval(c)),v(t,a,{immediate:!0})}return(i,a)=>(S(),_("time",{title:n.value,"date-time":u.value},g(r.value||n.value),9,w))}});export{D as default};

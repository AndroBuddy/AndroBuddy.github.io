import{r as p,o as a,c as _,a as d,b as o,w as c,T as u,d as m,e as f,f as s}from"./index-11e1820b.js";const g={id:"projects",class:"absolute z-20 w-screen min-h-screen"},v={class:"relative"},w={__name:"ProjectsView",setup(h){const r=(e,t)=>{e.id==="projects-list"?s({targets:e.childNodes[0],duration:1e3,translateX:[0,"-30%"],opacity:[1,0],easing:"cubicBezier(0.87, 0, 0.13, 1)",complete:t}):s({targets:e,duration:800,translateX:[0,"100%"],easing:"cubicBezier(0.87, 0, 0.13, 1)",complete:t})},i=(e,t)=>{e.id==="projects-list"?s({targets:e.childNodes[0],opacity:[0,1],complete:t}):s({targets:e,easing:"easeInOutSine",translateX:["100%",0],easing:"cubicBezier(0.87, 0, 0.13, 1)",complete:t})};return(e,t)=>{const n=p("router-view");return a(),_("div",g,[d("section",v,[o(n,null,{default:c(({Component:l})=>[o(u,{onEnter:i,onLeave:r,css:!1},{default:c(()=>[(a(),m(f(l)))]),_:2},1024)]),_:1})])])}}};export{w as default};

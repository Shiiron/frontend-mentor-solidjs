import{createComponent as s,ssr as i,ssrHydrationKey as a,ssrAttribute as o,escape as r}from"solid-js/web";import{createContext as p,createSignal as v,useContext as y,For as f}from"solid-js";const c=p();function C(e){const[t,l]=v("daily");return s(c.Provider,{value:{context:t,setContext:l},get children(){return e.children}})}function u(){return y(c)}var g=["<div",'><img class="section-logo"','><div class="data-container very-dark-blue"><span style="font-size:1.125rem;display:block">','</span><div class="align-right"><img src="./src/assets/icon-ellipsis.svg" alt="ellipsis"></div><span class="data-value"><!--$-->','<!--/--> Hrs</span><span class="data-previous pale-blue align-right"><!--$-->',"<!--/--> - <!--$-->","<!--/--> hrs</span></div></div>"];function h(e){const{context:t}=u(),l=`${e.card.title.toLowerCase()} data-wrapper`,d=`icon-${e.card.title.toLowerCase()==="self care"?"self-care":e.card.title.toLowerCase()}.svg`,m=n=>n==="daily"?"Yesterday":n==="weekly"?"Last Week":"Last Month";return i(g,a()+o("class",r(l,!0),!1),o("src",r(d,!0),!1),r(e.card.title),r(e.card.timeframes[t()].current),r(m(t())),r(e.card.timeframes[t()].previous))}var k=["<div",' class="profile-card very-dark-blue"><div class="blue profile"><img src="image-jeremy.png" alt="profile picture"><div><span class="pale-blue" style="display:block">Report for</span><span class="profile-name">Jeremy Robson</span></div></div><div class="menu"><ul><li class="','">Daily</li><li class="','">Weekly</li><li class="','">Monthly</li></ul></div></div>'];function w(){const{context:e,setContext:t}=u();return i(k,a(),e()==="daily"?"selected":"",e()==="weekly"?"selected":"",e()==="monthly"?"selected":"")}var $=["<div",' class="card-wrapper"><!--$-->',"<!--/--><!--$-->","<!--/--></div>"],x=["<main",' class="dark-blue">',"</main>"];function S(){const e=[{title:"Work",timeframes:{daily:{current:5,previous:7},weekly:{current:32,previous:36},monthly:{current:103,previous:128}}},{title:"Play",timeframes:{daily:{current:1,previous:2},weekly:{current:10,previous:8},monthly:{current:23,previous:29}}},{title:"Study",timeframes:{daily:{current:0,previous:1},weekly:{current:4,previous:7},monthly:{current:13,previous:19}}},{title:"Exercise",timeframes:{daily:{current:1,previous:1},weekly:{current:4,previous:5},monthly:{current:11,previous:18}}},{title:"Social",timeframes:{daily:{current:1,previous:3},weekly:{current:5,previous:10},monthly:{current:21,previous:23}}},{title:"Self Care",timeframes:{daily:{current:0,previous:1},weekly:{current:2,previous:2},monthly:{current:7,previous:11}}}];return i(x,a(),r(s(C,{get children(){return i($,a(),r(s(w,{})),r(s(f,{each:e,children:t=>s(h,{card:t})})))}})))}export{S as default};

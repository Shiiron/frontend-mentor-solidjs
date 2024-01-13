import { ssr, ssrHydrationKey, escape, createComponent, ssrAttribute } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/solid-js/web/dist/server.js';
import { createContext, For, createSignal, useContext } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/solid-js/dist/server.js';

const c = createContext();
function C(e) {
  const [t, l] = createSignal("daily");
  return createComponent(c.Provider, { value: { context: t, setContext: l }, get children() {
    return e.children;
  } });
}
function u() {
  return useContext(c);
}
var g = ["<div", '><img class="section-logo"', '><div class="data-container very-dark-blue"><span style="font-size:1.125rem;display:block">', '</span><div class="align-right"><img src="./src/assets/icon-ellipsis.svg" alt="ellipsis"></div><span class="data-value"><!--$-->', '<!--/--> Hrs</span><span class="data-previous pale-blue align-right"><!--$-->', "<!--/--> - <!--$-->", "<!--/--> hrs</span></div></div>"];
function h(e) {
  const { context: t } = u(), l = `${e.card.title.toLowerCase()} data-wrapper`, d = `icon-${e.card.title.toLowerCase() === "self care" ? "self-care" : e.card.title.toLowerCase()}.svg`, m = (n) => n === "daily" ? "Yesterday" : n === "weekly" ? "Last Week" : "Last Month";
  return ssr(g, ssrHydrationKey() + ssrAttribute("class", escape(l, true), false), ssrAttribute("src", escape(d, true), false), escape(e.card.title), escape(e.card.timeframes[t()].current), escape(m(t())), escape(e.card.timeframes[t()].previous));
}
var k = ["<div", ' class="profile-card very-dark-blue"><div class="blue profile"><img src="image-jeremy.png" alt="profile picture"><div><span class="pale-blue" style="display:block">Report for</span><span class="profile-name">Jeremy Robson</span></div></div><div class="menu"><ul><li class="', '">Daily</li><li class="', '">Weekly</li><li class="', '">Monthly</li></ul></div></div>'];
function w() {
  const { context: e, setContext: t } = u();
  return ssr(k, ssrHydrationKey(), e() === "daily" ? "selected" : "", e() === "weekly" ? "selected" : "", e() === "monthly" ? "selected" : "");
}
var $ = ["<div", ' class="card-wrapper"><!--$-->', "<!--/--><!--$-->", "<!--/--></div>"], x = ["<main", ' class="dark-blue">', "</main>"];
function S() {
  const e = [{ title: "Work", timeframes: { daily: { current: 5, previous: 7 }, weekly: { current: 32, previous: 36 }, monthly: { current: 103, previous: 128 } } }, { title: "Play", timeframes: { daily: { current: 1, previous: 2 }, weekly: { current: 10, previous: 8 }, monthly: { current: 23, previous: 29 } } }, { title: "Study", timeframes: { daily: { current: 0, previous: 1 }, weekly: { current: 4, previous: 7 }, monthly: { current: 13, previous: 19 } } }, { title: "Exercise", timeframes: { daily: { current: 1, previous: 1 }, weekly: { current: 4, previous: 5 }, monthly: { current: 11, previous: 18 } } }, { title: "Social", timeframes: { daily: { current: 1, previous: 3 }, weekly: { current: 5, previous: 10 }, monthly: { current: 21, previous: 23 } } }, { title: "Self Care", timeframes: { daily: { current: 0, previous: 1 }, weekly: { current: 2, previous: 2 }, monthly: { current: 7, previous: 11 } } }];
  return ssr(x, ssrHydrationKey(), escape(createComponent(C, { get children() {
    return ssr($, ssrHydrationKey(), escape(createComponent(w, {})), escape(createComponent(For, { each: e, children: (t) => createComponent(h, { card: t }) })));
  } })));
}

export { S as default };
//# sourceMappingURL=index.mjs.map

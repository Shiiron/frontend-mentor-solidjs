import { ssr, ssrHydrationKey, escape, createComponent } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/solid-js/web/dist/server.js';
import { f } from './index-4c60157c.mjs';
import 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/solid-js/dist/server.js';

var a = ["<main", "><!--$-->", "<!--/--><h1>About</h1></main>"];
function s() {
  return ssr(a, ssrHydrationKey(), escape(createComponent(f, { children: "About" })));
}

export { s as default };
//# sourceMappingURL=about.mjs.map

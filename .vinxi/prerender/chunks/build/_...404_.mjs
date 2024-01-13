import { ssr, ssrHydrationKey, escape, createComponent, isServer, getRequestEvent } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/solid-js/web/dist/server.js';
import { f } from './index-4c60157c.mjs';
import { onCleanup } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/solid-js/dist/server.js';

function u(r) {
  if (isServer) {
    const t = getRequestEvent();
    t && onCleanup(t.components.status(r));
  }
  return null;
}
var l = ["<main", "><!--$-->", "<!--/--><!--$-->", '<!--/--><h1>Page Not Found</h1><p>Visit <a href="https://start.solidjs.com" target="_blank">start.solidjs.com</a> to learn how to build SolidStart apps.</p></main>'];
function v() {
  return ssr(l, ssrHydrationKey(), escape(createComponent(f, { children: "Not Found" })), escape(createComponent(u, { code: 404 })));
}

export { v as default };
//# sourceMappingURL=_...404_.mjs.map

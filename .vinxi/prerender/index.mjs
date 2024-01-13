globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/node-fetch-native/dist/polyfill.cjs';
import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, removeResponseHeader, createError, getResponseHeader, setHeader, getRequestURL, getRequestIP, getRequestWebStream, appendResponseHeader, getCookie, setCookie, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/ofetch/dist/node.mjs';
import destr from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/hookable/dist/index.mjs';
import { snakeCase } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/scule/dist/index.mjs';
import { klona } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/klona/dist/index.mjs';
import defu, { defuFn } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/unstorage/drivers/fs.mjs';
import unstorage_47drivers_47fs_45lite from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/radix3/dist/index.mjs';
import _RdfGM2SBCK from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/vinxi/lib/app-fetch.js';
import _2L2Va1s51r from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/vinxi/lib/app-manifest.js';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/pathe/dist/index.mjs';
import { fromJSON, crossSerializeStream, getCrossReferenceHeader } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/seroval/dist/esm/production/index.mjs';
import { CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/seroval-plugins/dist/esm/production/web.mjs';
import { sharedConfig, lazy, createComponent as createComponent$1 } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/solid-js/dist/server.js';
import { provideRequestEvent } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/solid-js/web/dist/storage.js';
import { ssr, createComponent, ssrHydrationKey, NoHydration, escape, renderToStream, getRequestEvent, ssrAttribute, ssrElement, mergeProps } from 'file://D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/node_modules/solid-js/web/dist/server.js';

const inlineAppConfig = {};



const appConfig$1 = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {}
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig$1));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"D:\\save_loris\\Desktop\\workspace\\frontend-mentor-solidjs\\.data\\kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\save_loris\\Desktop\\workspace\\frontend-mentor-solidjs","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"D:\\save_loris\\Desktop\\workspace\\frontend-mentor-solidjs","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\save_loris\\Desktop\\workspace\\frontend-mentor-solidjs\\.vinxi","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"D:\\save_loris\\Desktop\\workspace\\frontend-mentor-solidjs\\.vinxi\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const appConfig = {"name":"vinxi","routers":[{"name":"public","mode":"static","dir":"./public","base":"/","root":"D:\\save_loris\\Desktop\\workspace\\frontend-mentor-solidjs","order":0,"outDir":"D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/.vinxi/build/public"},{"name":"ssr","mode":"handler","handler":"src/entry-server.tsx","extensions":["js","jsx","ts","tsx"],"target":"server","root":"D:\\save_loris\\Desktop\\workspace\\frontend-mentor-solidjs","base":"/","outDir":"D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/.vinxi/build/ssr","order":1},{"name":"client","mode":"build","handler":"src/entry-client.tsx","extensions":["js","jsx","ts","tsx"],"target":"browser","base":"/_build","root":"D:\\save_loris\\Desktop\\workspace\\frontend-mentor-solidjs","outDir":"D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/.vinxi/build/client","order":2},{"name":"server-fns","mode":"handler","base":"/_server","handler":"node_modules/@solidjs/start/config/server-handler.js","target":"server","root":"D:\\save_loris\\Desktop\\workspace\\frontend-mentor-solidjs","outDir":"D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/.vinxi/build/server-fns","order":3}],"server":{"compressPublicAssets":{"brotli":true},"prerender":{}},"root":"D:\\save_loris\\Desktop\\workspace\\frontend-mentor-solidjs"};
				const buildManifest = {"ssr":{"_index-4c60157c.js":{"file":"assets/index-4c60157c.js"},"_routes-ae4005b9.js":{"dynamicImports":["src/routes/about.tsx?pick=default&pick=$css","src/routes/about.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css"],"file":"assets/routes-ae4005b9.js"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"_...404_.js","imports":["_index-4c60157c.js","_routes-ae4005b9.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/[...404].tsx?pick=default&pick=$css"},"src/routes/about.tsx?pick=default&pick=$css":{"file":"about.js","imports":["_index-4c60157c.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/about.tsx?pick=default&pick=$css"},"src/routes/index.css":{"file":"assets/index-f41be853.css","src":"src/routes/index.css"},"src/routes/index.tsx?pick=default&pick=$css":{"css":["assets/index-f41be853.css"],"file":"index.js","isDynamicEntry":true,"isEntry":true,"src":"src/routes/index.tsx?pick=default&pick=$css"},"virtual:#vinxi/handler/ssr":{"file":"ssr.js","imports":["_routes-ae4005b9.js"],"isEntry":true,"src":"virtual:#vinxi/handler/ssr"}},"client":{"\u0000virtual:#vinxi/handler/client.css":{"file":"assets/client-774b0d81.css","src":"\u0000virtual:#vinxi/handler/client.css"},"_HttpStatusCode-e11d078d.js":{"dynamicImports":["src/routes/about.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css"],"file":"assets/HttpStatusCode-e11d078d.js"},"_index-0beda7f6.js":{"file":"assets/index-0beda7f6.js","imports":["_web-2c7ce673.js"]},"_web-2c7ce673.js":{"file":"assets/web-2c7ce673.js"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"assets/_...404_-3462bc07.js","imports":["_web-2c7ce673.js","_index-0beda7f6.js","_HttpStatusCode-e11d078d.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/[...404].tsx?pick=default&pick=$css"},"src/routes/about.tsx?pick=default&pick=$css":{"file":"assets/about-96d55f7c.js","imports":["_web-2c7ce673.js","_index-0beda7f6.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/about.tsx?pick=default&pick=$css"},"src/routes/index.css":{"file":"assets/index-f41be853.css","src":"src/routes/index.css"},"src/routes/index.tsx?pick=default&pick=$css":{"css":["assets/index-f41be853.css"],"file":"assets/index-3398b251.js","imports":["_web-2c7ce673.js"],"isDynamicEntry":true,"isEntry":true,"src":"src/routes/index.tsx?pick=default&pick=$css"},"virtual:#vinxi/handler/client":{"css":["assets/client-774b0d81.css"],"file":"assets/client-7cd2eabe.js","imports":["_web-2c7ce673.js","_HttpStatusCode-e11d078d.js","_index-0beda7f6.js"],"isEntry":true,"src":"virtual:#vinxi/handler/client"}},"server-fns":{"virtual:#vinxi/handler/server-fns":{"file":"entry.js","isEntry":true,"src":"virtual:#vinxi/handler/server-fns"}}};

				const routeManifest = {"ssr":{},"client":{}};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin(app) {
          const prodApp = createProdApp(appConfig);
          globalThis.app = prodApp;
        }

const chunks = {};
			 



			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin,
_RdfGM2SBCK,
_2L2Va1s51r,
app
];

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(error);
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    } else {
      setResponseHeader(event, "Content-Type", "text/html");
      return send(event, renderHTMLError(errorObject));
    }
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"298-hdW7/pL89QptiszdYCHH67XxLxs\"",
    "mtime": "2024-01-12T19:12:34.000Z",
    "size": 664,
    "path": "../../.output/public/favicon.ico"
  },
  "/assets/index-4c60157c.js": {
    "type": "application/javascript",
    "etag": "\"1a9-tjParrBl/rDrUFaxIKeTxlKanTs\"",
    "mtime": "2024-01-13T13:21:00.673Z",
    "size": 425,
    "path": "../../.output/public/assets/index-4c60157c.js"
  },
  "/assets/index-f41be853.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"63c-rkbExEqf98T6EnfimVnWWgcHwBA\"",
    "mtime": "2024-01-13T13:21:00.673Z",
    "size": 1596,
    "path": "../../.output/public/assets/index-f41be853.css"
  },
  "/assets/index-f41be853.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1ca-fdSamS4RcW030rcbisY7Z333CLs\"",
    "mtime": "2024-01-13T13:21:02.117Z",
    "size": 458,
    "path": "../../.output/public/assets/index-f41be853.css.br"
  },
  "/assets/index-f41be853.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"23d-sBznMS6GLl14tdwOX4QWDipSheg\"",
    "mtime": "2024-01-13T13:21:02.117Z",
    "size": 573,
    "path": "../../.output/public/assets/index-f41be853.css.gz"
  },
  "/assets/routes-ae4005b9.js": {
    "type": "application/javascript",
    "etag": "\"8f6-B8CHhZ7pFrbqVrYhu6xIovOjmQE\"",
    "mtime": "2024-01-13T13:21:00.674Z",
    "size": 2294,
    "path": "../../.output/public/assets/routes-ae4005b9.js"
  },
  "/assets/routes-ae4005b9.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"38c-lo7HeubqNq/aFPIF6BqcsOQrXfo\"",
    "mtime": "2024-01-13T13:21:02.117Z",
    "size": 908,
    "path": "../../.output/public/assets/routes-ae4005b9.js.br"
  },
  "/assets/routes-ae4005b9.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"3eb-BbNXD1hcOlvvqf/OFsv2/hfuA8g\"",
    "mtime": "2024-01-13T13:21:02.117Z",
    "size": 1003,
    "path": "../../.output/public/assets/routes-ae4005b9.js.gz"
  },
  "/_build/manifest.json": {
    "type": "application/json",
    "etag": "\"79b-6ueErN2ranYyLN4LVeZBREUN/b8\"",
    "mtime": "2024-01-13T13:21:01.954Z",
    "size": 1947,
    "path": "../../.output/public/_build/manifest.json"
  },
  "/_build/manifest.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"17c-R5XBeEvzi6g3O4Q1qq2c5nIpQXw\"",
    "mtime": "2024-01-13T13:21:02.117Z",
    "size": 380,
    "path": "../../.output/public/_build/manifest.json.br"
  },
  "/_build/manifest.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"1ac-wRjBxrfvCLEcpj8bh9C0TGgVbiE\"",
    "mtime": "2024-01-13T13:21:02.117Z",
    "size": 428,
    "path": "../../.output/public/_build/manifest.json.gz"
  },
  "/_build/server-functions-manifest.json": {
    "type": "application/json",
    "etag": "\"19-U+evudgPW1yE9kGumdxd/vtvk2s\"",
    "mtime": "2024-01-13T13:21:01.954Z",
    "size": 25,
    "path": "../../.output/public/_build/server-functions-manifest.json"
  },
  "/_build/assets/about-96d55f7c.js": {
    "type": "application/javascript",
    "etag": "\"eb-XtrJpv+H0Jm7/K0Gb1Fi861+v1w\"",
    "mtime": "2024-01-13T13:21:01.957Z",
    "size": 235,
    "path": "../../.output/public/_build/assets/about-96d55f7c.js"
  },
  "/_build/assets/client-774b0d81.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"385-HG9JXzNPnz5g12E+IO5RYIyEQb8\"",
    "mtime": "2024-01-13T13:21:01.957Z",
    "size": 901,
    "path": "../../.output/public/_build/assets/client-774b0d81.css"
  },
  "/_build/assets/client-7cd2eabe.js": {
    "type": "application/javascript",
    "etag": "\"38b4-qksGQ2UNBeGUQBP+dE0G24C9Aso\"",
    "mtime": "2024-01-13T13:21:01.957Z",
    "size": 14516,
    "path": "../../.output/public/_build/assets/client-7cd2eabe.js"
  },
  "/_build/assets/client-7cd2eabe.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"15a9-VINJAxLiM+kJdRmUbVsh0rcc6Bw\"",
    "mtime": "2024-01-13T13:21:02.127Z",
    "size": 5545,
    "path": "../../.output/public/_build/assets/client-7cd2eabe.js.br"
  },
  "/_build/assets/client-7cd2eabe.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"17fd-4pOXUuWnD3zybHK9lLfFXtLlLuM\"",
    "mtime": "2024-01-13T13:21:02.117Z",
    "size": 6141,
    "path": "../../.output/public/_build/assets/client-7cd2eabe.js.gz"
  },
  "/_build/assets/HttpStatusCode-e11d078d.js": {
    "type": "application/javascript",
    "etag": "\"d36-98JbEE4rsrWDZalKUyaSPVv7lv8\"",
    "mtime": "2024-01-13T13:21:01.957Z",
    "size": 3382,
    "path": "../../.output/public/_build/assets/HttpStatusCode-e11d078d.js"
  },
  "/_build/assets/HttpStatusCode-e11d078d.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"4fe-mgOr72ESzC4chfgo3tYjgunetZ4\"",
    "mtime": "2024-01-13T13:21:02.117Z",
    "size": 1278,
    "path": "../../.output/public/_build/assets/HttpStatusCode-e11d078d.js.br"
  },
  "/_build/assets/HttpStatusCode-e11d078d.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"5a4-BR2V7WwYHutu7gMj6GNvZzPEXsM\"",
    "mtime": "2024-01-13T13:21:02.117Z",
    "size": 1444,
    "path": "../../.output/public/_build/assets/HttpStatusCode-e11d078d.js.gz"
  },
  "/_build/assets/index-0beda7f6.js": {
    "type": "application/javascript",
    "etag": "\"7cd-wDRATsmFjVFnP6uMIlvRQ1+vnFk\"",
    "mtime": "2024-01-13T13:21:01.957Z",
    "size": 1997,
    "path": "../../.output/public/_build/assets/index-0beda7f6.js"
  },
  "/_build/assets/index-0beda7f6.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"35b-3OIqN/uhvdlzcYpvKMJLqmk15uQ\"",
    "mtime": "2024-01-13T13:21:02.117Z",
    "size": 859,
    "path": "../../.output/public/_build/assets/index-0beda7f6.js.br"
  },
  "/_build/assets/index-0beda7f6.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"3df-CH/oc5jHEKCrcR0tQSAbmS7iC7M\"",
    "mtime": "2024-01-13T13:21:02.117Z",
    "size": 991,
    "path": "../../.output/public/_build/assets/index-0beda7f6.js.gz"
  },
  "/_build/assets/index-3398b251.js": {
    "type": "application/javascript",
    "etag": "\"b9b-Ba/CYnE4YnWvpLAvyE4g7iUVRyw\"",
    "mtime": "2024-01-13T13:21:01.957Z",
    "size": 2971,
    "path": "../../.output/public/_build/assets/index-3398b251.js"
  },
  "/_build/assets/index-3398b251.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"412-GxF0BFpyj8PZSRJBS21kcx0r2Tc\"",
    "mtime": "2024-01-13T13:21:02.117Z",
    "size": 1042,
    "path": "../../.output/public/_build/assets/index-3398b251.js.br"
  },
  "/_build/assets/index-3398b251.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"4b4-hVL0YPutpCxmYlbYN+nnJXDcW/U\"",
    "mtime": "2024-01-13T13:21:02.117Z",
    "size": 1204,
    "path": "../../.output/public/_build/assets/index-3398b251.js.gz"
  },
  "/_build/assets/index-f41be853.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"63c-rkbExEqf98T6EnfimVnWWgcHwBA\"",
    "mtime": "2024-01-13T13:21:01.956Z",
    "size": 1596,
    "path": "../../.output/public/_build/assets/index-f41be853.css"
  },
  "/_build/assets/index-f41be853.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"1ca-fdSamS4RcW030rcbisY7Z333CLs\"",
    "mtime": "2024-01-13T13:21:02.117Z",
    "size": 458,
    "path": "../../.output/public/_build/assets/index-f41be853.css.br"
  },
  "/_build/assets/index-f41be853.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"23d-sBznMS6GLl14tdwOX4QWDipSheg\"",
    "mtime": "2024-01-13T13:21:02.117Z",
    "size": 573,
    "path": "../../.output/public/_build/assets/index-f41be853.css.gz"
  },
  "/_build/assets/web-2c7ce673.js": {
    "type": "application/javascript",
    "etag": "\"560a-SkrJzH/58Svv0sZqkdhksT/QB5A\"",
    "mtime": "2024-01-13T13:21:01.957Z",
    "size": 22026,
    "path": "../../.output/public/_build/assets/web-2c7ce673.js"
  },
  "/_build/assets/web-2c7ce673.js.br": {
    "type": "application/javascript",
    "encoding": "br",
    "etag": "\"1ed3-RmaQXfZh3XWr0rqLWK4OtN/kQeI\"",
    "mtime": "2024-01-13T13:21:02.139Z",
    "size": 7891,
    "path": "../../.output/public/_build/assets/web-2c7ce673.js.br"
  },
  "/_build/assets/web-2c7ce673.js.gz": {
    "type": "application/javascript",
    "encoding": "gzip",
    "etag": "\"21dc-h4Z8tPoFB6LpH3iRg6vFfJS5ugw\"",
    "mtime": "2024-01-13T13:21:02.117Z",
    "size": 8668,
    "path": "../../.output/public/_build/assets/web-2c7ce673.js.gz"
  },
  "/_build/assets/_...404_-3462bc07.js": {
    "type": "application/javascript",
    "etag": "\"1ba-alBahNdrbm9o5wXzO4E/CulO6dY\"",
    "mtime": "2024-01-13T13:21:01.955Z",
    "size": 442,
    "path": "../../.output/public/_build/assets/_...404_-3462bc07.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const p = "Invariant Violation", { setPrototypeOf: k = function(e, t) {
  return e.__proto__ = t, e;
} } = Object;
let m$2 = class m extends Error {
  constructor(t = p) {
    super(typeof t == "number" ? `${p}: ${t} (see https://github.com/apollographql/invariant-packages)` : t);
    __publicField(this, "framesToPop", 1);
    __publicField(this, "name", p);
    k(this, m.prototype);
  }
};
function h$1(e, t) {
  if (!e)
    throw new m$2(t);
}
function z(e) {
  let t;
  return new Request(getRequestURL(e), { duplex: "half", method: e.method, headers: e.headers, get body() {
    return t || (t = getRequestWebStream(e), t);
  } });
}
const O = Symbol("h3Event"), f$1 = Symbol("fetchEvent"), J = { get(e, t) {
  var _a;
  return t === f$1 ? e : (_a = e[t]) != null ? _a : e[O][t];
} };
function M(e) {
  return e.web || (e.web = { url: getRequestURL(e), request: z(e) }), new Proxy({ request: e.web.request, clientAddress: getRequestIP(e), locals: {}, [O]: e }, J);
}
function _(e) {
  if (!e[f$1]) {
    const t = M(e);
    e[f$1] = t;
  }
  return e[f$1];
}
function j(e, t) {
  return new ReadableStream({ start(n) {
    crossSerializeStream(t, { scopeId: e, plugins: [CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin], onSerialize(s, i) {
      const o = i ? `(${getCrossReferenceHeader(e)},${s})` : s;
      n.enqueue(new TextEncoder().encode(`${o};
`));
    }, onDone() {
      n.close();
    }, onError(s) {
      n.error(s);
    } });
  } });
}
async function A(e) {
  h$1(e.method === "POST", `Invalid method ${e.method}. Expected POST.`);
  const t = _(e), n = t.request, s = n.headers.get("x-server-id"), i = n.headers.get("x-server-instance"), o = new URL(n.url);
  let c, u;
  if (s)
    h$1(typeof s == "string", "Invalid server function"), [c, u] = s.split("#");
  else if (c = o.searchParams.get("id"), u = o.searchParams.get("name"), !c || !u)
    throw new Error("Invalid request");
  const T = (await globalThis.MANIFEST["server-fns"].chunks[c].import())[u];
  let a = [];
  if (!i) {
    const r = o.searchParams.get("args");
    r && JSON.parse(r).forEach((l) => a.push(l));
  }
  const d = n.headers.get("content-type");
  d.startsWith("multipart/form-data") || d.startsWith("application/x-www-form-urlencoded") ? a.push(await n.formData()) : a = fromJSON(await n.json(), { plugins: [CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin] });
  try {
    const r = await provideRequestEvent(t, () => (sharedConfig.context = { event: t }, T(...a)));
    if (!i) {
      const l = r instanceof Error, I = new URL(n.headers.get("referer"));
      return new Response(null, { status: 302, headers: { Location: I.toString(), ...r ? { "Set-Cookie": `flash=${JSON.stringify({ url: o.pathname + encodeURIComponent(o.search), result: l ? r.message : r, error: l, input: [...a.slice(0, -1), [...a[a.length - 1].entries()]] })}; Secure; HttpOnly;` } : {} } });
    }
    return typeof r == "string" ? new Response(r) : (setHeader(e, "content-type", "text/javascript"), j(i, r));
  } catch (r) {
    return r instanceof Response && r.status === 302 ? new Response(null, { status: i ? 204 : 302, headers: { Location: r.headers.get("Location") } }) : r;
  }
}
const X$1 = eventHandler(A);

const l = [{ type: "page", $component: { src: "src/routes/about.tsx?pick=default&pick=$css", build: () => import('./chunks/build/about.mjs'), import: () => import('./chunks/build/about.mjs') }, path: "/about", filePath: "D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/src/routes/about.tsx" }, { type: "page", $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => import('./chunks/build/index.mjs'), import: () => import('./chunks/build/index.mjs') }, path: "/", filePath: "D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/src/routes/index.tsx" }, { type: "page", $component: { src: "src/routes/[...404].tsx?pick=default&pick=$css", build: () => import('./chunks/build/_...404_.mjs'), import: () => import('./chunks/build/_...404_.mjs') }, path: "/*404", filePath: "D:/save_loris/Desktop/workspace/frontend-mentor-solidjs/src/routes/[...404].tsx" }], g = h(l.filter((n) => n.type === "page")), f = m$1(l.filter((n) => n.type === "api"));
function x$1(n, s) {
  const e = n.replace("", "").split("/").filter(Boolean);
  e:
    for (const t of f) {
      const o = t.matchSegments;
      if (e.length < o.length || !t.wildcard && e.length > o.length)
        continue;
      for (let i = 0; i < o.length; i++) {
        const p = o[i];
        if (p && e[i] !== p)
          continue e;
      }
      const c = t[`$${s}`];
      if (c === "skip" || c === void 0)
        return;
      const r = {};
      for (const { type: i, name: p, index: a } of t.params)
        i === ":" ? r[p] = e[a] : r[p] = e.slice(a).join("/");
      return { handler: c, params: r };
    }
}
function h(n) {
  function s(e, t, o, c) {
    const r = Object.values(e).find((i) => o.startsWith(i.id + "/"));
    return r ? (s(r.children || (r.children = []), t, o.slice(r.id.length)), e) : (e.push({ ...t, id: o, path: o.replace(/\/\([^)/]+\)/g, "") }), e);
  }
  return n.sort((e, t) => e.path.length - t.path.length).reduce((e, t) => s(e, t, t.path, t.path), []);
}
function m$1(n) {
  return n.flatMap((s) => u(s.path).map((t) => ({ ...s, path: t }))).map(d).sort((s, e) => e.score - s.score);
}
function u(n) {
  let s = /(\/?\:[^\/]+)\?/.exec(n);
  if (!s)
    return [n];
  let e = n.slice(0, s.index), t = n.slice(s.index + s[0].length);
  const o = [e, e += s[1]];
  for (; s = /^(\/\:[^\/]+)\?/.exec(t); )
    o.push(e += s[1]), t = t.slice(s[0].length);
  return u(t).reduce((c, r) => [...c, ...o.map((i) => i + r)], []);
}
function d(n) {
  const s = n.path.split("/").filter(Boolean), e = [], t = [];
  let o = 0, c = false;
  for (const [r, i] of s.entries())
    if (i[0] === ":") {
      const p = i.slice(1);
      o += 3, e.push({ type: ":", name: p, index: r }), t.push(null);
    } else
      i[0] === "*" ? (o -= 1, e.push({ type: "*", name: i.slice(1), index: r }), c = true) : (o += 4, i.match(/^\(.+\)$/) || t.push(i));
  return { ...n, score: o, params: e, matchSegments: t, wildcard: c };
}

function K(e) {
  let t;
  return new Request(getRequestURL(e), { duplex: "half", method: e.method, headers: e.headers, get body() {
    return t || (t = getRequestWebStream(e), t);
  } });
}
const C = Symbol("h3Event"), m = Symbol("fetchEvent"), Y = { get(e, t) {
  var _a;
  return t === m ? e : (_a = e[t]) != null ? _a : e[C][t];
} };
function G(e) {
  return e.web || (e.web = { url: getRequestURL(e), request: K(e) }), new Proxy({ request: e.web.request, clientAddress: getRequestIP(e), locals: {}, [C]: e }, Y);
}
function Q(e) {
  if (!e[m]) {
    const t = G(e);
    e[m] = t;
  }
  return e[m];
}
var V = " ";
const X = { style: (e) => ssrElement("style", e.attrs, () => escape(e.children), true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(V), true) : null };
function T(e) {
  let { tag: t, attrs: { key: n, ...s } = { key: void 0 }, children: o } = e;
  return X[t]({ attrs: s, key: n, children: o });
}
function Z(e, t, n, s = "default") {
  return lazy(async () => {
    var _a;
    {
      const r = (await e.import())[s], f = (await ((_a = t.inputs) == null ? void 0 : _a[e.src].assets())).filter((i) => i.tag === "style" || i.attrs.rel === "stylesheet");
      return { default: (i) => [...f.map((l) => T(l)), createComponent$1(r, i)] };
    }
  });
}
function x() {
  function e(n) {
    return { ...n, ...n.$$route ? n.$$route.require().route : void 0, metadata: { ...n.$$route ? n.$$route.require().route.metadata : {}, filesystem: true }, component: Z(n.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: n.children ? n.children.map(e) : void 0 };
  }
  return g.map(e);
}
function ee(e) {
  const t = getCookie(e, "flash");
  if (!t)
    return;
  let n = JSON.parse(t);
  if (!n || !n.result)
    return [];
  const s = [...n.input.slice(0, -1), new Map(n.input[n.input.length - 1])];
  return setCookie(e, "flash", "", { maxAge: 0 }), { url: n.url, result: n.error ? new Error(n.result) : n.result, input: s };
}
async function te(e) {
  const t = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, setResponseHeader(e, "Content-Type", "text/html"), Object.assign(e, { manifest: await t.json(), assets: [...await t.inputs[t.handler].assets()], initialSubmission: ee(e), routes: x(), components: { status: (s) => (setResponseStatus(e, s.code, s.text), () => setResponseStatus(e, 200)), header: (s) => (s.append ? appendResponseHeader(e, s.name, s.value) : setResponseHeader(e, s.name, s.value), () => {
    const o = getResponseHeader(e, s.name);
    if (o && typeof o == "string") {
      const r = o.split(", "), a = r.indexOf(s.value);
      a !== -1 && r.splice(a, 1), r.length ? setResponseHeader(e, s.name, r.join(", ")) : removeResponseHeader(e, s.name);
    }
  }) }, $islands: /* @__PURE__ */ new Set() });
}
function ne(e, t = {}) {
  return eventHandler({ onRequest: t.onRequest, onBeforeResponse: t.onBeforeResponse, handler: (n) => {
    const s = Q(n);
    return provideRequestEvent(s, async () => {
      const o = x$1(new URL(s.request.url).pathname, s.request.method);
      if (o) {
        const u = (await o.handler.import())[s.request.method];
        return s.params = o.params, sharedConfig.context = { event: s }, await u(s);
      }
      const r = await te(s);
      let a = { ...t };
      if (a.onCompleteAll) {
        const l = a.onCompleteAll;
        a.onCompleteAll = (u) => {
          v(r)(u), l(u);
        };
      } else
        a.onCompleteAll = v(r);
      if (a.onCompleteShell) {
        const l = a.onCompleteShell;
        a.onCompleteShell = (u) => {
          R(r, n)(), l(u);
        };
      } else
        a.onCompleteShell = R(r, n);
      const f = renderToStream(() => (sharedConfig.context.event = r, e(r)), a);
      if (r.response && r.response.headers.get("Location"))
        return sendRedirect(s, r.response.headers.get("Location"));
      const { writable: w, readable: i } = new TransformStream();
      return f.pipeTo(w), i;
    });
  } });
}
function R(e, t) {
  return () => {
    e.response && e.response.headers.get("Location") && (setResponseStatus(t, 302), setHeader(t, "Location", e.response.headers.get("Location")));
  };
}
function v(e) {
  return ({ write: t }) => {
    const n = e.response && e.response.headers.get("Location");
    n && t(`<script>window.location="${n}"<\/script>`);
  };
}
function se(e, t) {
  return ne(e, { ...t, createPageEvent: re });
}
async function re(e) {
  const t = globalThis.MANIFEST.client;
  return Object.assign(e, { manifest: await t.json(), assets: [...await t.inputs[t.handler].assets()], routes: [], $islands: /* @__PURE__ */ new Set() });
}
var ae = ["<script", ">", "<\/script>"], oe = ["<script", ' type="module"', "><\/script>"];
const ie = ssr("<!DOCTYPE html>");
function le(e) {
  const t = getRequestEvent();
  return createComponent(NoHydration, { get children() {
    return [ie, createComponent(e.document, { get assets() {
      return t.assets.map((n) => T(n));
    }, get scripts() {
      return [ssr(ae, ssrHydrationKey(), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(oe, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))];
    } })];
  } });
}
var ue = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">', "</head>"], ce = ["<html", ' lang="en">', '<body><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
const ge = se(() => createComponent(le, { document: ({ assets: e, children: t, scripts: n }) => ssr(ce, ssrHydrationKey(), createComponent(NoHydration, { get children() {
  return ssr(ue, escape(e));
} }), escape(t), escape(n)) }));

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: X$1, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: ge, lazy: false, middleware: true, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
trapUnhandledNodeErrors();

export { localFetch };
//# sourceMappingURL=index.mjs.map

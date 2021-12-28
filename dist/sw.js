try{self["workbox:core:6.4.1"]&&_()}catch{}const W={"invalid-value":({paramName:r,validValueDescription:e,value:t})=>{if(!r||!e)throw new Error("Unexpected input to 'invalid-value' error.");return`The '${r}' parameter was given a value with an unexpected value. ${e} Received a value of ${JSON.stringify(t)}.`},"not-an-array":({moduleName:r,className:e,funcName:t,paramName:s})=>{if(!r||!e||!t||!s)throw new Error("Unexpected input to 'not-an-array' error.");return`The parameter '${s}' passed into '${r}.${e}.${t}()' must be an array.`},"incorrect-type":({expectedType:r,paramName:e,moduleName:t,className:s,funcName:a})=>{if(!r||!e||!t||!a)throw new Error("Unexpected input to 'incorrect-type' error.");const n=s?`${s}.`:"";return`The parameter '${e}' passed into '${t}.${n}${a}()' must be of type ${r}.`},"incorrect-class":({expectedClassName:r,paramName:e,moduleName:t,className:s,funcName:a,isReturnValueProblem:n})=>{if(!r||!t||!a)throw new Error("Unexpected input to 'incorrect-class' error.");const o=s?`${s}.`:"";return n?`The return value from '${t}.${o}${a}()' must be an instance of class ${r}.`:`The parameter '${e}' passed into '${t}.${o}${a}()' must be an instance of class ${r}.`},"missing-a-method":({expectedMethod:r,paramName:e,moduleName:t,className:s,funcName:a})=>{if(!r||!e||!t||!s||!a)throw new Error("Unexpected input to 'missing-a-method' error.");return`${t}.${s}.${a}() expected the '${e}' parameter to expose a '${r}' method.`},"add-to-cache-list-unexpected-type":({entry:r})=>`An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(r)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`,"add-to-cache-list-conflicting-entries":({firstEntry:r,secondEntry:e})=>{if(!r||!e)throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.");return`Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${r} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`},"plugin-error-request-will-fetch":({thrownErrorMessage:r})=>{if(!r)throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.");return`An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${r}'.`},"invalid-cache-name":({cacheNameId:r,value:e})=>{if(!r)throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");return`You must provide a name containing at least one character for setCacheDetails({${r}: '...'}). Received a value of '${JSON.stringify(e)}'`},"unregister-route-but-not-found-with-method":({method:r})=>{if(!r)throw new Error("Unexpected input to 'unregister-route-but-not-found-with-method' error.");return`The route you're trying to unregister was not  previously registered for the method type '${r}'.`},"unregister-route-route-not-registered":()=>"The route you're trying to unregister was not previously registered.","queue-replay-failed":({name:r})=>`Replaying the background sync queue '${r}' failed.`,"duplicate-queue-name":({name:r})=>`The Queue name '${r}' is already being used. All instances of backgroundSync.Queue must be given unique names.`,"expired-test-without-max-age":({methodName:r,paramName:e})=>`The '${r}()' method can only be used when the '${e}' is used in the constructor.`,"unsupported-route-type":({moduleName:r,className:e,funcName:t,paramName:s})=>`The supplied '${s}' parameter was an unsupported type. Please check the docs for ${r}.${e}.${t} for valid input types.`,"not-array-of-class":({value:r,expectedClass:e,moduleName:t,className:s,funcName:a,paramName:n})=>`The supplied '${n}' parameter must be an array of '${e}' objects. Received '${JSON.stringify(r)},'. Please check the call to ${t}.${s}.${a}() to fix the issue.`,"max-entries-or-age-required":({moduleName:r,className:e,funcName:t})=>`You must define either config.maxEntries or config.maxAgeSecondsin ${r}.${e}.${t}`,"statuses-or-headers-required":({moduleName:r,className:e,funcName:t})=>`You must define either config.statuses or config.headersin ${r}.${e}.${t}`,"invalid-string":({moduleName:r,funcName:e,paramName:t})=>{if(!t||!r||!e)throw new Error("Unexpected input to 'invalid-string' error.");return`When using strings, the '${t}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${r}.${e}() for more info.`},"channel-name-required":()=>"You must provide a channelName to construct a BroadcastCacheUpdate instance.","invalid-responses-are-same-args":()=>"The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.","expire-custom-caches-only":()=>"You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.","unit-must-be-bytes":({normalizedRangeHeader:r})=>{if(!r)throw new Error("Unexpected input to 'unit-must-be-bytes' error.");return`The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${r}"`},"single-range-only":({normalizedRangeHeader:r})=>{if(!r)throw new Error("Unexpected input to 'single-range-only' error.");return`Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${r}"`},"invalid-range-values":({normalizedRangeHeader:r})=>{if(!r)throw new Error("Unexpected input to 'invalid-range-values' error.");return`The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${r}"`},"no-range-header":()=>"No Range header was found in the Request provided.","range-not-satisfiable":({size:r,start:e,end:t})=>`The start (${e}) and end (${t}) values in the Range are not satisfiable by the cached response, which is ${r} bytes.`,"attempt-to-cache-non-get-request":({url:r,method:e})=>`Unable to cache '${r}' because it is a '${e}' request and only 'GET' requests can be cached.`,"cache-put-with-no-response":({url:r})=>`There was an attempt to cache '${r}' but the response was not defined.`,"no-response":({url:r,error:e})=>{let t=`The strategy could not generate a response for '${r}'.`;return e&&(t+=` The underlying error is ${e}.`),t},"bad-precaching-response":({url:r,status:e})=>`The precaching request for '${r}' failed`+(e?` with an HTTP status of ${e}.`:"."),"non-precached-url":({url:r})=>`createHandlerBoundToURL('${r}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`,"add-to-cache-list-conflicting-integrities":({url:r})=>`Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${r} with different integrity values. Please remove one of them.`,"missing-precache-entry":({cacheName:r,url:e})=>`Unable to find a precached response in ${r} for ${e}.`,"cross-origin-copy-response":({origin:r})=>`workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${r}.`},I=(r,e={})=>{const t=W[r];if(!t)throw new Error(`Unable to find message for code '${r}'.`);return t(e)},M=I;class h extends Error{constructor(e,t){const s=M(e,t);super(s);this.name=e,this.details=t}}const D=(r,e)=>{if(!Array.isArray(r))throw new h("not-an-array",e)},F=(r,e,t)=>{if(typeof r[e]!=="function")throw t.expectedMethod=e,new h("missing-a-method",t)},j=(r,e,t)=>{if(typeof r!==e)throw t.expectedType=e,new h("incorrect-type",t)},H=(r,e,t)=>{if(!(r instanceof e))throw t.expectedClassName=e.name,new h("incorrect-class",t)},V=(r,e,t)=>{if(!e.includes(r))throw t.validValueDescription=`Valid values are ${JSON.stringify(e)}.`,new h("invalid-value",t)},B=(r,e,t)=>{const s=new h("not-array-of-class",t);if(!Array.isArray(r))throw s;for(const a of r)if(!(a instanceof e))throw s},d={hasMethod:F,isArray:D,isInstance:H,isOneOf:V,isType:j,isArrayOfClass:B},g={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration!="undefined"?registration.scope:""},N=r=>[g.prefix,r,g.suffix].filter(e=>e&&e.length>0).join("-"),G=r=>{for(const e of Object.keys(g))r(e)},U={updateDetails:r=>{G(e=>{typeof r[e]=="string"&&(g[e]=r[e])})},getGoogleAnalyticsName:r=>r||N(g.googleAnalytics),getPrecacheName:r=>r||N(g.precache),getPrefix:()=>g.prefix,getRuntimeName:r=>r||N(g.runtime),getSuffix:()=>g.suffix},i=(()=>{"__WB_DISABLE_DEV_LOGS"in self||(self.__WB_DISABLE_DEV_LOGS=!1);let r=!1;const e={debug:"#7f8c8d",log:"#2ecc71",warn:"#f39c12",error:"#c0392b",groupCollapsed:"#3498db",groupEnd:null},t=function(n,o){if(self.__WB_DISABLE_DEV_LOGS)return;if(n==="groupCollapsed"&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){console[n](...o);return}const c=[`background: ${e[n]}`,"border-radius: 0.5em","color: white","font-weight: bold","padding: 2px 0.5em"],l=r?[]:["%cworkbox",c.join(";")];console[n](...l,...o),n==="groupCollapsed"&&(r=!0),n==="groupEnd"&&(r=!1)},s={},a=Object.keys(e);for(const n of a){const o=n;s[o]=(...c)=>{t(o,c)}}return s})();function E(r,e){const t=e();return r.waitUntil(t),t}try{self["workbox:precaching:6.4.1"]&&_()}catch{}const J="__WB_REVISION__";function Y(r){if(!r)throw new h("add-to-cache-list-unexpected-type",{entry:r});if(typeof r=="string"){const n=new URL(r,location.href);return{cacheKey:n.href,url:n.href}}const{revision:e,url:t}=r;if(!t)throw new h("add-to-cache-list-unexpected-type",{entry:r});if(!e){const n=new URL(t,location.href);return{cacheKey:n.href,url:n.href}}const s=new URL(t,location.href),a=new URL(t,location.href);return s.searchParams.set(J,e),{cacheKey:s.href,url:a.href}}class Q{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if(e.type==="install"&&t&&t.originalRequest&&t.originalRequest instanceof Request){const a=t.originalRequest.url;s?this.notUpdatedURLs.push(a):this.updatedURLs.push(a)}return s}}}class X{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:t,params:s})=>{const a=(s==null?void 0:s.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return a?new Request(a,{headers:t.headers}):t},this._precacheController=e}}const Z=(r,e)=>{i.groupCollapsed(r);for(const t of e)i.log(t);i.groupEnd()};function z(r){const e=r.length;e>0&&(i.groupCollapsed(`During precaching cleanup, ${e} cached request${e===1?" was":"s were"} deleted.`),Z("Deleted Cache Requests",r),i.groupEnd())}function v(r,e){if(e.length!==0){i.groupCollapsed(r);for(const t of e)i.log(t);i.groupEnd()}}function ee(r,e){const t=r.length,s=e.length;if(t||s){let a=`Precaching ${t} file${t===1?"":"s"}.`;s>0&&(a+=` ${s} file${s===1?" is":"s are"} already cached.`),i.groupCollapsed(a),v("View newly precached URLs.",r),v("View previously precached URLs.",e),i.groupEnd()}}let b;function te(){if(b===void 0){const r=new Response("");if("body"in r)try{new Response(r.body),b=!0}catch{b=!1}b=!1}return b}async function re(r,e){let t=null;if(r.url&&(t=new URL(r.url).origin),t!==self.location.origin)throw new h("cross-origin-copy-response",{origin:t});const s=r.clone(),a={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},n=e?e(a):a,o=te()?s.body:await s.blob();return new Response(o,n)}const u=r=>new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),"");function L(r,e){const t=new URL(r);for(const s of e)t.searchParams.delete(s);return t.href}async function se(r,e,t,s){const a=L(e.url,t);if(e.url===a)return r.match(e,s);const n=Object.assign(Object.assign({},s),{ignoreSearch:!0}),o=await r.keys(e,n);for(const c of o){const l=L(c.url,t);if(a===l)return r.match(c,s)}}class ae{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}const P=new Set;async function ne(){i.log(`About to run ${P.size} callbacks to clean up caches.`);for(const r of P)await r(),i.log(r,"is complete.");i.log("Finished running callbacks.")}function oe(r){return new Promise(e=>setTimeout(e,r))}try{self["workbox:strategies:6.4.1"]&&_()}catch{}function $(r){return typeof r=="string"?new Request(r):r}class ie{constructor(e,t){this._cacheKeys={},d.isInstance(t.event,ExtendableEvent,{moduleName:"workbox-strategies",className:"StrategyHandler",funcName:"constructor",paramName:"options.event"}),Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new ae,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const s of this._plugins)this._pluginStateMap.set(s,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=$(e);if(s.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){const o=await t.preloadResponse;if(o)return i.log(`Using a preloaded navigation response for '${u(s.url)}'`),o}const a=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const o of this.iterateCallbacks("requestWillFetch"))s=await o({request:s.clone(),event:t})}catch(o){if(o instanceof Error)throw new h("plugin-error-request-will-fetch",{thrownErrorMessage:o.message})}const n=s.clone();try{let o;o=await fetch(s,s.mode==="navigate"?void 0:this._strategy.fetchOptions),i.debug(`Network request for '${u(s.url)}' returned a response with status '${o.status}'.`);for(const c of this.iterateCallbacks("fetchDidSucceed"))o=await c({event:t,request:n,response:o});return o}catch(o){throw i.log(`Network request for '${u(s.url)}' threw an error.`,o),a&&await this.runCallbacks("fetchDidFail",{error:o,event:t,originalRequest:a.clone(),request:n.clone()}),o}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=$(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,o=await this.getCacheKey(t,"read"),c=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(o,c),s?i.debug(`Found a cached response in '${a}'.`):i.debug(`No cached response found in '${a}'.`);for(const l of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await l({cacheName:a,matchOptions:n,cachedResponse:s,request:o,event:this.event})||void 0;return s}async cachePut(e,t){const s=$(e);await oe(0);const a=await this.getCacheKey(s,"write");{if(a.method&&a.method!=="GET")throw new h("attempt-to-cache-non-get-request",{url:u(a.url),method:a.method});const f=t.headers.get("Vary");f&&i.debug(`The response for ${u(a.url)} has a 'Vary: ${f}' header. Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected.`)}if(!t)throw i.error(`Cannot cache non-existent response for '${u(a.url)}'.`),new h("cache-put-with-no-response",{url:u(a.url)});const n=await this._ensureResponseSafeToCache(t);if(!n)return i.debug(`Response '${u(a.url)}' will not be cached.`,n),!1;const{cacheName:o,matchOptions:c}=this._strategy,l=await self.caches.open(o),w=this.hasCallback("cacheDidUpdate"),m=w?await se(l,a.clone(),["__WB_REVISION__"],c):null;i.debug(`Updating the '${o}' cache with a new Response for ${u(a.url)}.`);try{await l.put(a,w?n.clone():n)}catch(f){if(f instanceof Error)throw f.name==="QuotaExceededError"&&await ne(),f}for(const f of this.iterateCallbacks("cacheDidUpdate"))await f({cacheName:o,oldResponse:m,newResponse:n.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const n of this.iterateCallbacks("cacheKeyWillBeUsed"))a=$(await n({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if(typeof t[e]=="function"){const s=this._pluginStateMap.get(t);yield n=>{const o=Object.assign(Object.assign({},n),{state:s});return t[e](o)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const a of this.iterateCallbacks("cacheWillUpdate"))if(t=await a({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||(t&&t.status!==200&&(t=void 0),t&&t.status!==200&&(t.status===0?i.warn(`The response for '${this.request.url}' is an opaque response. The caching strategy that you're using will not cache opaque responses by default.`):i.debug(`The response for '${this.request.url}' returned a status code of '${e.status}' and won't be cached as a result.`))),t}}class K{constructor(e={}){this.cacheName=U.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s=typeof e.request=="string"?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new ie(this,{event:t,request:s,params:a}),o=this._getResponse(n,s,t),c=this._awaitComplete(o,n,s,t);return[o,c]}async _getResponse(e,t,s){await e.runCallbacks("handlerWillStart",{event:s,request:t});let a;try{if(a=await this._handle(t,e),!a||a.type==="error")throw new h("no-response",{url:t.url})}catch(n){if(n instanceof Error){for(const o of e.iterateCallbacks("handlerDidError"))if(a=await o({error:n,event:s,request:t}),a)break}if(a)i.log(`While responding to '${u(t.url)}', an ${n instanceof Error?n.toString():""} error occurred. Using a fallback response provided by a handlerDidError plugin.`);else throw n}for(const n of e.iterateCallbacks("handlerWillRespond"))a=await n({event:s,request:t,response:a});return a}async _awaitComplete(e,t,s,a){let n,o;try{n=await e}catch{}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(c){c instanceof Error&&(o=c)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:o}),t.destroy(),o)throw o}}class y extends K{constructor(e={}){e.cacheName=U.getPrecacheName(e.cacheName);super(e);this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(y.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&t.event.type==="install"?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,t){let s;const a=t.params||{};if(this._fallbackToNetwork){i.warn(`The precached response for ${u(e.url)} in ${this.cacheName} was not found. Falling back to the network.`);const n=a.integrity,o=e.integrity,c=!o||o===n;s=await t.fetch(new Request(e,{integrity:o||n})),n&&c&&(this._useDefaultCacheabilityPluginIfNeeded(),await t.cachePut(e,s.clone())&&i.log(`A response for ${u(e.url)} was used to "repair" the precache.`))}else throw new h("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{const n=a.cacheKey||await t.getCacheKey(e,"read");i.groupCollapsed("Precaching is responding to: "+u(e.url)),i.log(`Serving the precached url: ${u(n instanceof Request?n.url:n)}`),i.groupCollapsed("View request details here."),i.log(e),i.groupEnd(),i.groupCollapsed("View response details here."),i.log(s),i.groupEnd(),i.groupEnd()}return s}async _handleInstall(e,t){this._useDefaultCacheabilityPluginIfNeeded();const s=await t.fetch(e);if(!await t.cachePut(e,s.clone()))throw new h("bad-precaching-response",{url:e.url,status:s.status});return s}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==y.copyRedirectedCacheableResponsesPlugin&&(a===y.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);t===0?this.plugins.push(y.defaultPrecacheCacheabilityPlugin):t>1&&e!==null&&this.plugins.splice(e,1)}}y.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:r}){return!r||r.status>=400?null:r}};y.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:r}){return r.redirected?await re(r):r}};class ce{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new y({cacheName:U.getPrecacheName(e),plugins:[...t,new X({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){d.isArray(e,{moduleName:"workbox-precaching",className:"PrecacheController",funcName:"addToCacheList",paramName:"entries"});const t=[];for(const s of e){typeof s=="string"?t.push(s):s&&s.revision===void 0&&t.push(s.url);const{cacheKey:a,url:n}=Y(s),o=typeof s!="string"&&s.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==a)throw new h("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:a});if(typeof s!="string"&&s.integrity){if(this._cacheKeysToIntegrities.has(a)&&this._cacheKeysToIntegrities.get(a)!==s.integrity)throw new h("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(a,s.integrity)}if(this._urlsToCacheKeys.set(n,a),this._urlsToCacheModes.set(n,o),t.length>0){const c=`Workbox is precaching URLs without revision info: ${t.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;i.warn(c)}}}install(e){return E(e,async()=>{const t=new Q;this.strategy.plugins.push(t);for(const[n,o]of this._urlsToCacheKeys){const c=this._cacheKeysToIntegrities.get(o),l=this._urlsToCacheModes.get(n),w=new Request(n,{integrity:c,cache:l,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:o},request:w,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return ee(s,a),{updatedURLs:s,notUpdatedURLs:a}})}activate(e){return E(e,async()=>{const t=await self.caches.open(this.strategy.cacheName),s=await t.keys(),a=new Set(this._urlsToCacheKeys.values()),n=[];for(const o of s)a.has(o.url)||(await t.delete(o),n.push(o.url));return z(n),{deletedURLs:n}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(e){const t=this.getCacheKeyForURL(e);if(!t)throw new h("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:t},s.params),this.strategy.handle(s))}}let x;const q=()=>(x||(x=new ce),x);try{self["workbox:routing:6.4.1"]&&_()}catch{}const A="GET",le=["DELETE","GET","HEAD","PATCH","POST","PUT"],k=r=>r&&typeof r=="object"?(d.hasMethod(r,"handle",{moduleName:"workbox-routing",className:"Route",funcName:"constructor",paramName:"handler"}),r):(d.isType(r,"function",{moduleName:"workbox-routing",className:"Route",funcName:"constructor",paramName:"handler"}),{handle:r});class R{constructor(e,t,s=A){d.isType(e,"function",{moduleName:"workbox-routing",className:"Route",funcName:"constructor",paramName:"match"}),s&&d.isOneOf(s,le,{paramName:"method"}),this.handler=k(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=k(e)}}class he extends R{constructor(e,t,s){d.isInstance(e,RegExp,{moduleName:"workbox-routing",className:"RegExpRoute",funcName:"constructor",paramName:"pattern"});const a=({url:n})=>{const o=e.exec(n.href);if(!!o){if(n.origin!==location.origin&&o.index!==0){i.debug(`The regular expression '${e.toString()}' only partially matched against the cross-origin URL '${n.toString()}'. RegExpRoute's will only handle cross-origin requests if they match the entire URL.`);return}return o.slice(1)}};super(a,t,s)}}class ue{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:t}=e.data;i.debug("Caching URLs from the window",t.urlsToCache);const s=Promise.all(t.urlsToCache.map(a=>{typeof a=="string"&&(a=[a]);const n=new Request(...a);return this.handleRequest({request:n,event:e})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){d.isInstance(e,Request,{moduleName:"workbox-routing",className:"Router",funcName:"handleRequest",paramName:"options.request"});const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http")){i.debug("Workbox Router only supports URLs that start with 'http'.");return}const a=s.origin===location.origin,{params:n,route:o}=this.findMatchingRoute({event:t,request:e,sameOrigin:a,url:s});let c=o&&o.handler;const l=[];c&&(l.push(["Found a route to handle this request:",o]),n&&l.push(["Passing the following params to the route's handler:",n]));const w=e.method;if(!c&&this._defaultHandlerMap.has(w)&&(l.push(`Failed to find a matching route. Falling back to the default handler for ${w}.`),c=this._defaultHandlerMap.get(w)),!c){i.debug(`No route found for: ${u(s)}`);return}i.groupCollapsed(`Router is responding to: ${u(s)}`),l.forEach(p=>{Array.isArray(p)?i.log(...p):i.log(p)}),i.groupEnd();let m;try{m=c.handle({url:s,request:e,event:t,params:n})}catch(p){m=Promise.reject(p)}const f=o&&o.catchHandler;return m instanceof Promise&&(this._catchHandler||f)&&(m=m.catch(async p=>{if(f){i.groupCollapsed(`Error thrown when responding to:  ${u(s)}. Falling back to route's Catch Handler.`),i.error("Error thrown by:",o),i.error(p),i.groupEnd();try{return await f.handle({url:s,request:e,event:t,params:n})}catch(T){T instanceof Error&&(p=T)}}if(this._catchHandler)return i.groupCollapsed(`Error thrown when responding to:  ${u(s)}. Falling back to global Catch Handler.`),i.error("Error thrown by:",o),i.error(p),i.groupEnd(),this._catchHandler.handle({url:s,request:e,event:t});throw p})),m}findMatchingRoute({url:e,sameOrigin:t,request:s,event:a}){const n=this._routes.get(s.method)||[];for(const o of n){let c;const l=o.match({url:e,sameOrigin:t,request:s,event:a});if(l)return l instanceof Promise&&i.warn(`While routing ${u(e)}, an async matchCallback function was used. Please convert the following route to use a synchronous matchCallback function:`,o),c=l,(Array.isArray(c)&&c.length===0||l.constructor===Object&&Object.keys(l).length===0||typeof l=="boolean")&&(c=void 0),{route:o,params:c}}return{}}setDefaultHandler(e,t=A){this._defaultHandlerMap.set(t,k(e))}setCatchHandler(e){this._catchHandler=k(e)}registerRoute(e){d.isType(e,"object",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route"}),d.hasMethod(e,"match",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route"}),d.isType(e.handler,"object",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route"}),d.hasMethod(e.handler,"handle",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route.handler"}),d.isType(e.method,"string",{moduleName:"workbox-routing",className:"Router",funcName:"registerRoute",paramName:"route.method"}),this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new h("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new h("unregister-route-route-not-registered")}}let C;const de=()=>(C||(C=new ue,C.addFetchListener(),C.addCacheListener()),C);function S(r,e,t){let s;if(typeof r=="string"){const n=new URL(r,location.href);{if(!(r.startsWith("/")||r.startsWith("http")))throw new h("invalid-string",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});const c=r.startsWith("http")?n.pathname:r,l="[*:?+]";new RegExp(`${l}`).exec(c)&&i.debug(`The '$capture' parameter contains an Express-style wildcard character (${l}). Strings are now always interpreted as exact matches; use a RegExp for partial or wildcard matches.`)}const o=({url:c})=>(c.pathname===n.pathname&&c.origin!==n.origin&&i.debug(`${r} only partially matches the cross-origin URL ${c.toString()}. This route will only handle cross-origin requests if they match the entire URL.`),c.href===n.href);s=new R(o,e,t)}else if(r instanceof RegExp)s=new he(r,e,t);else if(typeof r=="function")s=new R(r,e,t);else if(r instanceof R)s=r;else throw new h("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return de().registerRoute(s),s}function fe(r,e=[]){for(const t of[...r.searchParams.keys()])e.some(s=>s.test(t))&&r.searchParams.delete(t);return r}function*pe(r,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:a}={}){const n=new URL(r,location.href);n.hash="",yield n.href;const o=fe(n,e);if(yield o.href,t&&o.pathname.endsWith("/")){const c=new URL(o.href);c.pathname+=t,yield c.href}if(s){const c=new URL(o.href);c.pathname+=".html",yield c.href}if(a){const c=a({url:n});for(const l of c)yield l.href}}class ge extends R{constructor(e,t){const s=({request:a})=>{const n=e.getURLsToCacheKeys();for(const o of pe(a.url,t)){const c=n.get(o);if(c){const l=e.getIntegrityForCacheKey(c);return{cacheKey:c,integrity:l}}}i.debug("Precaching did not find a match for "+u(a.url))};super(s,e.strategy)}}function we(r){const e=q(),t=new ge(e,r);S(t)}function me(r){q().precache(r)}function ye(r,e){me(r),we(e)}const O={strategyStart:(r,e)=>`Using ${r} to respond to '${u(e.url)}'`,printFinalResponse:r=>{r&&(i.groupCollapsed("View the final response here."),i.log(r||"[No response returned]"),i.groupEnd())}},be={cacheWillUpdate:async({response:r})=>r.status===200||r.status===0?r:null};class Re extends K{constructor(e={}){super(e);this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift(be)}async _handle(e,t){const s=[];d.isInstance(e,Request,{moduleName:"workbox-strategies",className:this.constructor.name,funcName:"handle",paramName:"request"});const a=t.fetchAndCachePut(e).catch(()=>{});let n=await t.cacheMatch(e),o;if(n)s.push(`Found a cached response in the '${this.cacheName}' cache. Will update with the network response in the background.`);else{s.push(`No response found in the '${this.cacheName}' cache. Will wait for the network response.`);try{n=await a}catch(c){c instanceof Error&&(o=c)}}{i.groupCollapsed(O.strategyStart(this.constructor.name,e));for(const c of s)i.log(c);O.printFinalResponse(n),i.groupEnd()}if(!n)throw new h("no-response",{url:e.url,error:o});return n}}try{self["workbox:cacheable-response:6.4.1"]&&_()}catch{}class Ce{constructor(e={}){{if(!(e.statuses||e.headers))throw new h("statuses-or-headers-required",{moduleName:"workbox-cacheable-response",className:"CacheableResponse",funcName:"constructor"});e.statuses&&d.isArray(e.statuses,{moduleName:"workbox-cacheable-response",className:"CacheableResponse",funcName:"constructor",paramName:"config.statuses"}),e.headers&&d.isType(e.headers,"object",{moduleName:"workbox-cacheable-response",className:"CacheableResponse",funcName:"constructor",paramName:"config.headers"})}this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){d.isInstance(e,Response,{moduleName:"workbox-cacheable-response",className:"CacheableResponse",funcName:"isResponseCacheable",paramName:"response"});let t=!0;if(this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some(s=>e.headers.get(s)===this._headers[s])),!t){i.groupCollapsed(`The request for '${u(e.url)}' returned a response that does not meet the criteria for being cached.`),i.groupCollapsed("View cacheability criteria here."),i.log("Cacheable statuses: "+JSON.stringify(this._statuses)),i.log("Cacheable headers: "+JSON.stringify(this._headers,null,2)),i.groupEnd();const s={};e.headers.forEach((a,n)=>{s[n]=a}),i.groupCollapsed("View response status and headers here."),i.log(`Response status: ${e.status}`),i.log("Response headers: "+JSON.stringify(s,null,2)),i.groupEnd(),i.groupCollapsed("View full response details here."),i.log(e.headers),i.log(e),i.groupEnd(),i.groupEnd()}return t}}class $e{constructor(e){this.cacheWillUpdate=async({response:t})=>this._cacheableResponse.isResponseCacheable(t)?t:null,this._cacheableResponse=new Ce(e)}}self.addEventListener("message",r=>{r.data&&r.data.type==="SKIP_WAITING"&&self.skipWaiting()});ye([{"revision":null,"url":"assets/Admin.5878dccd.js"},{"revision":null,"url":"assets/Card.61dad5f0.js"},{"revision":null,"url":"assets/Col.ad648dab.js"},{"revision":null,"url":"assets/ExtraForm.59312c48.js"},{"revision":null,"url":"assets/Form.f93fdc12.js"},{"revision":null,"url":"assets/GrandPrixHistory.68d01993.js"},{"revision":null,"url":"assets/Home.cadca7d5.js"},{"revision":null,"url":"assets/index.7cddcffb.js"},{"revision":null,"url":"assets/index.de26fa69.css"},{"revision":null,"url":"assets/index.ffc6db12.js"},{"revision":null,"url":"assets/Leaderboard.b1cbd1da.js"},{"revision":null,"url":"assets/OtherResults.becdfa14.js"},{"revision":null,"url":"assets/PerRace.f565a8c1.js"},{"revision":null,"url":"assets/Placeholder.365ac26d.js"},{"revision":null,"url":"assets/PredictionForm.7a90ec9a.js"},{"revision":null,"url":"assets/QualifyingForm.10ca733c.js"},{"revision":null,"url":"assets/QualifyingResults.6ea505cf.js"},{"revision":null,"url":"assets/RaceForm.d1fd9c9d.js"},{"revision":null,"url":"assets/RaceResults.71e6f4f5.js"},{"revision":null,"url":"assets/Result.0e55b648.js"},{"revision":null,"url":"assets/ResultsForm.22a0f2cc.js"},{"revision":null,"url":"assets/Row.1fa50eee.js"},{"revision":null,"url":"assets/Settings.2ad84d7b.js"},{"revision":null,"url":"assets/ShowcaseGP.5e2d5694.js"},{"revision":null,"url":"assets/SignIn.8d2e27d5.js"},{"revision":null,"url":"assets/Summary.e5840394.js"},{"revision":null,"url":"assets/Table.c58cfdd2.js"},{"revision":null,"url":"assets/TotalPoints.50d94d8a.js"},{"revision":null,"url":"assets/useNavbar.7e8d8e18.js"},{"revision":null,"url":"assets/usePost.d2e2bf65.js"},{"revision":null,"url":"assets/vendor.380d830e.js"},{"revision":null,"url":"assets/warning.b33cdbd2.js"},{"revision":"e3bd49782cc07901550f7453bbdceda3","url":"index.html"},{"revision":"a3a286260f8b94dcebdad7ef38cf69d7","url":"assets/favicon.ico"},{"revision":"cd9cd94aaa699e0a16e692b6bb16f672","url":"robots.txt"},{"revision":"c6ce0d6ccd2d62cdc3bc447139f3f6d6","url":"assets/android-chrome-192x192.png"},{"revision":"22fe68866f2091206a5b60351651e319","url":"assets/android-chrome-512x512.png"},{"revision":"55329d14d04cf258a2122c4b0d286e79","url":"manifest.webmanifest"}]);const _e="^https://f1-predictions-backend.herokuapp.com";S(new RegExp(_e),new Re({plugins:[new $e({statuses:[0,200]})]}));

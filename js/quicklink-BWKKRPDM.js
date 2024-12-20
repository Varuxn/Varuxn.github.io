import"./chunk-I2LLO5DV.js";function b(e){return new Promise(function(o,c,r){(r=new XMLHttpRequest).open("GET",e,r.withCredentials=!0),r.onload=function(){r.status===200?o():c()},r.send()})}var y,j=(y=document.createElement("link")).relList&&y.relList.supports&&y.relList.supports("prefetch")?function(e){return new Promise(function(o,c,r){(r=document.createElement("link")).rel="prefetch",r.href=e,r.onload=o,r.onerror=c,document.head.appendChild(r)})}:b,T=window.requestIdleCallback||function(e){var o=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-o))}})},1)},d=new Set,m=new Set,w=!1;function L(e){if(e){if(e.saveData)return new Error("Save-Data is enabled");if(/2g/.test(e.effectiveType))return new Error("network conditions are poor")}return!0}function R(e){if(e||(e={}),window.IntersectionObserver){var o=function(s){s=s||1;var n=[],i=0;function t(){i<s&&n.length>0&&(n.shift()(),i++)}return[function(l){n.push(l)>1||t()},function(){i--,t()}]}(e.throttle||1/0),c=o[0],r=o[1],u=e.limit||1/0,a=e.origins||[location.hostname],h=e.ignores||[],g=e.delay||0,f=[],v=e.timeoutFn||T,p=typeof e.hrefFn=="function"&&e.hrefFn,P=e.prerender||!1;w=e.prerenderAndPrefetch||!1;var E=new IntersectionObserver(function(s){s.forEach(function(n){if(n.isIntersecting)f.push((n=n.target).href),function(t,l){l?setTimeout(t,l):t()}(function(){f.indexOf(n.href)!==-1&&(E.unobserve(n),(w||P)&&m.size<1?A(p?p(n):n.href).catch(function(t){if(!e.onError)throw t;e.onError(t)}):d.size<u&&!P&&c(function(){S(p?p(n):n.href,e.priority).then(r).catch(function(t){r(),e.onError&&e.onError(t)})}))},g);else{var i=f.indexOf((n=n.target).href);i>-1&&f.splice(i)}})},{threshold:e.threshold||0});return v(function(){(e.el||document).querySelectorAll("a").forEach(function(s){a.length&&!a.includes(s.hostname)||function n(i,t){return Array.isArray(t)?t.some(function(l){return n(i,l)}):(t.test||t).call(t,i.href,i)}(s,h)||E.observe(s)})},{timeout:e.timeout||2e3}),function(){d.clear(),E.disconnect()}}}function S(e,o,c){var r=L(navigator.connection);return r instanceof Error?Promise.reject(new Error("Cannot prefetch, "+r.message)):(m.size>0&&!w&&console.warn("[Warning] You are using both prefetching and prerendering on the same document"),Promise.all([].concat(e).map(function(u){if(!d.has(u))return d.add(u),(o?function(a){return window.fetch?fetch(a,{credentials:"include"}):b(a)}:j)(new URL(u,location.href).toString())})))}function A(e,o){var c=L(navigator.connection);if(c instanceof Error)return Promise.reject(new Error("Cannot prerender, "+c.message));if(!HTMLScriptElement.supports("speculationrules"))return S(e),Promise.reject(new Error("This browser does not support the speculation rules API. Falling back to prefetch."));if(document.querySelector('script[type="speculationrules"]'))return Promise.reject(new Error("Speculation Rules is already defined and cannot be altered."));for(var r=0,u=[].concat(e);r<u.length;r+=1){var a=u[r];if(window.location.origin!==new URL(a,window.location.href).origin)return Promise.reject(new Error("Only same origin URLs are allowed: "+a));m.add(a)}d.size>0&&!w&&console.warn("[Warning] You are using both prefetching and prerendering on the same document");var h=function(g){var f=document.createElement("script");f.type="speculationrules",f.text='{"prerender":[{"source": "list","urls": ["'+Array.from(g).join('","')+'"]}]}';try{document.head.appendChild(f)}catch(v){return v}return!0}(m);return h===!0?Promise.resolve():Promise.reject(h)}export{R as listen,S as prefetch,A as prerender};
/*! For license information please see quicklink-BWKKRPDM.js.LEGAL.txt */

!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="https://localhost:3000/",n(n.s=7)}([function(e,t,n){window,e.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.r(t);var l={},c={},u=function(e){return"object"===s(e)&&!Array.isArray(e)},f=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l[t]?l[t]:(this.init(t,n,a),this)}var t,n;return t=e,(n=[{key:"set",value:function(e,t){if(!this.isDestroyed&&void 0!==t){var n=JSON.parse(localStorage.getItem(this.name));return n?(n[e]=t,localStorage.setItem(this.name,JSON.stringify(n)),this):this}}},{key:"get",value:function(e){if(!this.isDestroyed){var t=JSON.parse(localStorage.getItem(this.name));return t?t[e]:this}}},{key:"getAll",value:function(){if(!this.isDestroyed)return JSON.parse(localStorage.getItem(this.name))}},{key:"remove",value:function(e){if(!this.isDestroyed){var t=JSON.parse(localStorage.getItem(this.name));return t?(delete t[e],localStorage.setItem(this.name,JSON.stringify(t)),this):this}}},{key:"clear",value:function(){if(!this.isDestroyed)return localStorage.removeItem(this.name),this}},{key:"destroy",value:function(){this.isDestroyed||(c[this.name]=!0,delete l[this.name])}},{key:"isDestroyed",get:function(){return!!c[this.name]}},{key:"init",value:function(e,t,n){return delete c[e],this.name=e,function(e,t,n){var a=localStorage.getItem(e);if(!(e in localStorage&&a))return localStorage.setItem(e,JSON.stringify(t)),!0;try{if(a=JSON.parse(a),!u(a)||!u(t))return!1;if(n){var r=new Set(Object.keys(t));Object.keys(a).forEach((function(e){r.has(e)||delete a[e]}))}a=i(i({},t),a),localStorage.setItem(e,JSON.stringify(a))}catch(e){}}(e,t,n),l[e]=this,this}}])&&a(t.prototype,n),e}();t.default=f}]).default},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03Ljc2NiAxLjY1OEwzLjAwOCA2LjA5NGw0LjQzNyA0Ljc1OC0xLjQ0OCAxLjM1TC4yMSA1Ljk5NyA2LjQxNi4yMXoiLz48L3N2Zz4="},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0uMDQ4IDEuNjU4bDQuNzU4IDQuNDM2TC4zNyAxMC44NTJsMS40NDggMS4zNSA1Ljc4Ny02LjIwNUwxLjQuMjF6Ii8+PC9zdmc+"},function(e,t,n){var a=n(4);"string"==typeof a&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};n(6)(a,r);a.locals&&(e.exports=a.locals)},function(e,t,n){(e.exports=n(5)(!1)).push([e.i,".PlaybackRateBtn{color:#fff}.PlaybackRateBtn-inner{width:100%;height:100%;display:inline-flex !important;position:relative;justify-content:space-between}.PlaybackRateBtn-btn{display:flex;align-items:center;flex-grow:1;flex-basis:50%;opacity:0.15;transition:opacity 250ms ease-in-out}.PlaybackRateBtn-btn:hover{opacity:1}.PlaybackRateBtn-minus{justify-content:flex-start}.PlaybackRateBtn-plus{justify-content:flex-end}.PlaybackRateBtn-chevron{width:8px;height:14px}.PlaybackRateBtn-value{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center;z-index:-1}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",a=e[3];if(!a)return n;if(t&&"function"==typeof btoa){var r=(o=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot).concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var o,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(a[i]=!0)}for(var o=0;o<e.length;o++){var s=e[o];null!=s[0]&&a[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),t.push(s))}},t}},function(e,t,n){"use strict";var a,r={},i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function s(e,t){for(var n=[],a={},r=0;r<e.length;r++){var i=e[r],o=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};a[o]?a[o].parts.push(s):n.push(a[o]={id:o,parts:[s]})}return n}function l(e,t){for(var n=0;n<e.length;n++){var a=e[n],i=r[a.id],o=0;if(i){for(i.refs++;o<i.parts.length;o++)i.parts[o](a.parts[o]);for(;o<a.parts.length;o++)i.parts.push(d(a.parts[o],t))}else{for(var s=[];o<a.parts.length;o++)s.push(d(a.parts[o],t));r[a.id]={id:a.id,refs:1,parts:s}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var a=n.nc;a&&(e.attributes.nonce=a)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var r=o(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var u,f=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function h(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=f(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function b(e,t,n){var a=n.css,r=n.media,i=n.sourceMap;if(r&&e.setAttribute("media",r),i&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var y=null,p=0;function d(e,t){var n,a,r;if(t.singleton){var i=p++;n=y||(y=c(t)),a=h.bind(null,n,i,!1),r=h.bind(null,n,i,!0)}else n=c(t),a=b.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=s(e,t);return l(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var o=n[i],c=r[o.id];c&&(c.refs--,a.push(c))}e&&l(s(e,t),t);for(var u=0;u<a.length;u++){var f=a[u];if(0===f.refs){for(var h=0;h<f.parts.length;h++)f.parts[h]();delete r[f.id]}}}}},function(e,t,n){"use strict";n.r(t);var a=function(e,t){if("function"==typeof e)return e();if("string"==typeof e){const i=document.createDocumentFragment(),o=document.createElement(e);for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return a.forEach(e=>{if(e instanceof HTMLElement)i.appendChild(e);else if("string"==typeof e||"number"==typeof e){const t=document.createTextNode(e);i.appendChild(t)}}),o.appendChild(i),Object.assign(o,t),o}};function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];r(this,"events",{}),r(this,"onceCallbacks",{}),r(this,"eventsPrefix",void 0),r(this,"autoPrefix",void 0),this.eventsPrefix=e,this.autoPrefix=t}getEventName(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.autoPrefix;return this.eventsPrefix&&t?"".concat(this.eventsPrefix,":").concat(e):e}on(e,t){let n=this.getEventName(e);return this.events[n]=this.events[n]||new Set,this.events[n].add(t),this}off(e,t){let n=this.getEventName(e);return this.events[n]?(this.events[n].delete(t),this):this}one(e,t){let n=this.getEventName(e);return this.events[n]=new Set([t]),this}once(e,t){let n=this.getEventName(e);return this.events[n]=this.events[n]||new Set,this.events[n].add(t),this.onceCallbacks[n]=this.onceCallbacks[n]||new Set,this.onceCallbacks[n].add(t),this}emit(e,t){let n=this.getEventName(e,!0);return this.events[n]&&this.events[n].forEach(a=>{var r,i;a(t),null!==(r=this.onceCallbacks[n])&&void 0!==r&&null!==(i=r.has)&&void 0!==i&&i.call(r,a)&&(this.off(e,a),this.onceCallbacks[n].delete(a))}),this}};var o=e=>!1===e||null==e||""===e;const s=(e=>{const t=()=>{};let n={log:t,warn:t,error:t};if(!e&&window.console){const e=(e,t)=>{e[t]=function(){const e=window.console[t];for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(window.console,a)}};e(n,"log"),e(n,"warn"),e(n,"error")}return n})(!0);function l(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function c(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,f(e,t,"set"),n),n}function u(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,f(e,t,"get"))}function f(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var h=new WeakMap,b=new WeakMap,y=new WeakMap;var p=class extends i{constructor(){super(),l(this,h,{writable:!0,value:null}),l(this,b,{writable:!0,value:null}),l(this,y,{writable:!0,value:e=>{this.emit("onPlaybackRateChange",e)}})}get controls(){return u(this,b)}getAvailablePlaybackRates(){return u(this,h).getAvailablePlaybackRates()}getPlaybackRate(){return u(this,h).getPlaybackRate()}setPlaybackRate(e){u(this,h).setPlaybackRate(e)}init(){let e=document.querySelector("#movie_player"),t=e.querySelector(".ytp-right-controls");e&&t?(c(this,h,e),c(this,b,t),u(this,h).addEventListener("onPlaybackRateChange",u(this,y))):reporter.error("YouTubePlayerController: При инициализации отсутствуют необходимые данные",{player:e,controls:t})}destroy(){u(this,h).removeEventListener("onPlaybackRateChange",u(this,y)),c(this,h,null),c(this,b,null)}},d=n(0),v=n.n(d);const m={playbackRateValue:1};var g=class{constructor(){var e,t,n;e=this,t="storage",n=new v.a("yt_speed_control",m,!0),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}get playbackRateValue(){return this.getPlaybackRateValue()}set playbackRateValue(e){this.setPlaybackRateValue(e)}getPlaybackRateValue(){return this.storage.get("playbackRateValue")}setPlaybackRateValue(e){this.storage.set("playbackRateValue",e)}},P=(n(3),n(1)),k=n.n(P),w=n(2),R=n.n(w);var j=e=>{let{value:t,onMinus:n,onPlus:r}=e;return a("div",{className:"PlaybackRateBtn ytp-button"},a("div",{className:"PlaybackRateBtn-inner"},a("div",{className:"PlaybackRateBtn-btn PlaybackRateBtn-minus",onclick:n},a("img",{className:"PlaybackRateBtn-chevron",src:k.a})),a("div",{className:"PlaybackRateBtn-btn PlaybackRateBtn-plus",onclick:r},a("img",{className:"PlaybackRateBtn-chevron",src:R.a})),a("div",{className:"PlaybackRateBtn-value"},t)))};function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=class extends i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;super(),x(this,"container",null),x(this,"btn",null),x(this,"value",null),x(this,"onPlus",()=>{this.emit("plus")}),x(this,"onMinus",()=>{this.emit("minus")}),x(this,"setValue",e=>{e!==this.value&&(this.value=e,this.container&&this.update())}),this.value=e}init(e){if(!e)return void s.error("PlaybackRateView: При инициализации отсутствует контейнер");this.container=e;let{value:t,onMinus:n,onPlus:a}=this;this.btn=j({value:t,onMinus:n,onPlus:a}),this.container.insertAdjacentElement("afterbegin",this.btn)}update(){let e=this.btn,{value:t,onMinus:n,onPlus:a}=this;this.btn=j({value:t,onMinus:n,onPlus:a}),this.container.replaceChild(this.btn,e)}destroy(){this.btn?this.btn.remove():s.error("PlaybackRateView: При уничтожении отсутствует кнопка")}};function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function M(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,V(e,t,"set"),n),n}function C(e,t){return function(e,t){if(t.get)return t.get.call(e);return t.value}(e,V(e,t,"get"))}function V(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var E=new WeakMap,I=new WeakMap,L=new WeakMap;var T=class{constructor(){N(this,E,{writable:!0,value:new g}),N(this,I,{writable:!0,value:null}),N(this,L,{writable:!0,value:new O(this.playbackRateValue)}),S(this,"decrementPlaybackRate",()=>{let e=this.getPrevPlaybackRateValue(this.playbackRateValue);if(!o(e))return this.setPlaybackRateValue(e),e}),S(this,"incrementPlaybackRate",()=>{let e=this.getNextPlaybackRateValue(this.playbackRateValue);if(!o(e))return this.setPlaybackRateValue(e),e}),S(this,"setPlaybackRateValue",e=>"number"!=typeof e?(s.error("Controller setPlaybackRateValue: Устанавливаемое значение должно быть числом"),!1):this.availablePlaybackRates.includes(e)?(C(this,E).playbackRateValue=e,C(this,L).setValue(e),C(this,I).getPlaybackRate()!==e&&C(this,I).setPlaybackRate(e),!0):(s.error("Controller setPlaybackRateValue: Устанавливаемое значение должно быть одним из допустимых значений: ",this.availablePlaybackRates),!1))}get playbackRateValue(){return C(this,E).playbackRateValue}get availablePlaybackRates(){return C(this,I).getAvailablePlaybackRates()}getPrevPlaybackRateValue(e){let t=this.availablePlaybackRates.findIndex(t=>t===e);if(o(t))return;let n=this.availablePlaybackRates[t-1];return o(n)?void 0:n}getNextPlaybackRateValue(e){let t=this.availablePlaybackRates.findIndex(t=>t===e);if(o(t))return;let n=this.availablePlaybackRates[t+1];return o(n)?void 0:n}init(e){e?(M(this,I,e),this.setPlaybackRateValue(this.playbackRateValue),C(this,I).on("onPlaybackRateChange",this.setPlaybackRateValue),C(this,L).init(C(this,I).controls),C(this,L).on("minus",this.decrementPlaybackRate),C(this,L).on("plus",this.incrementPlaybackRate)):s.error("Controller: При инициализации отсутствует контроллер плеера")}destroy(){C(this,I).off("onPlaybackRateChange",this.setPlaybackRateValue),C(this,L).off("minus",this.decrementPlaybackRate),C(this,L).off("plus",this.incrementPlaybackRate),C(this,L).destroy(),M(this,I,null)}};let A=new p,B=new T;setTimeout(()=>{A.init(),B.init(A)},2100)}]);
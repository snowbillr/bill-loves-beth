!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=r.sources.map(function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")});return[n].concat(a).concat([o]).join("\n")}var i,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<t.length;i++){var s=t[i];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="(".concat(s[2],") and (").concat(n,")")),e.push(s))}},e}},function(t,e,n){"use strict";var r,o={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function s(t,e){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function c(t,e){for(var n=0;n<t.length;n++){var r=t[n],a=o[r.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(h(r.parts[i],e))}else{for(var s=[];i<r.parts.length;i++)s.push(h(r.parts[i],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function u(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach(function(n){e.setAttribute(n,t.attributes[n])}),"function"==typeof t.insert)t.insert(e);else{var o=i(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function d(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}var p=null,m=0;function h(t,e){var n,r,o;if(e.singleton){var a=m++;n=p||(p=u(e)),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=u(e),r=function(t,e,n){var r=n.css,o=n.media,a=n.sourceMap;if(o&&t.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a());var n=s(t,e);return c(n,e),function(t){for(var r=[],a=0;a<n.length;a++){var i=n[a],u=o[i.id];u&&(u.refs--,r.push(u))}t&&c(s(t,e),e);for(var l=0;l<r.length;l++){var f=r[l];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete o[f.id]}}}}},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"*{margin:0;padding:0;box-sizing:border-box}\n",""])},function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(1)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"body{background:linear-gradient(-45deg, #9c3fa5, #70163c);color:#F1F0CC;font-family:'Poppins', sans-serif}.container .logo-container{position:fixed;top:10px;width:100%;display:flex;justify-content:center;align-items:center;transform:translateY(calc(50vh - 50%))}.container .logo-container .b-inverse{opacity:0}.container .logo-container .ampersand{opacity:0;transform:scale(0.6) translateY(15px)}.container .logo-container .b{opacity:0}.container .logo-container.reveal,.container .logo-container.reveal>*{transition:all 1500ms linear}.container .logo-container.reveal .b-inverse{opacity:1;transform:translateX(15px)}.container .logo-container.reveal .ampersand{opacity:1;transform:scale(0.6) translateY(0px)}.container .logo-container.reveal .b{opacity:1;transform:translateX(-15px)}.container .logo-container.move{transition:all 2000ms ease-in-out;transform:translateY(0) scale(0.7)}.container .heart-button{position:fixed;left:calc(50vw - 30px);bottom:calc(50vh - 60px);width:60px;height:60px;cursor:pointer;animation:heartbeat 2000ms ease-in infinite;opacity:0}.container .heart-button.reveal{transition:all 1000ms ease-in-out;opacity:1;bottom:calc(50vh - 30px)}.container .heart-button.move{transition:all 1500ms ease-in-out;bottom:30px}.container .quote-container{position:fixed;top:calc(50vh);left:calc(50vw);transform:translate(-50%);font-size:18px;width:100%;text-align:center;max-width:500px;padding:0 40px;pointer-events:none}.container .quote-container .quote-word{display:inline-block;margin-right:5px;margin-bottom:5px;opacity:0;transform:translateY(10px)}.container .quote-container .quote-word.reveal{transition:all 300ms ease-out;opacity:1;transform:translateY(0)}.container .quote-container .quote-word.hide{transition:all 200ms ease-out;opacity:0;transform:translateY(10px)}@keyframes heartbeat{0%{transform:scale(1)}10%{transform:scale(0.9)}20%{transform:scale(1)}30%{transform:scale(0.9)}40%{transform:scale(1)}}\n",""])},function(t,e,n){"use strict";n.r(e);n(2),n(4);var r=[{items:[{selector:".logo-container",addClass:"reveal"}],duration:3e3},{items:[{selector:".logo-container",addClass:"move"}],duration:900},{items:[{selector:".heart-button",addClass:"reveal"}],duration:1e3}],o=[{items:[{selector:".heart-button",addClass:"move"}],duration:1500}],a=["You like it when I commute with you in the mornings","You encourage me to pursue my passions","You help motivate me on my side projects","You take breaks during your criticals to help make our plans work","You do the Bill dance with me","You want to wake up early so we can get breakfast together","You wake up early to see the sunrise on the beach with me","You think I'm a comfortable pillow","You're always honest with me","You're my teammate"];function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=0;t.forEach(function(t){t.items.forEach(function(t){var e=document.querySelector(t.selector);setTimeout(function(){return e.classList.add(t.addClass)},n)}),n+=t.duration}),setTimeout(e,n)}function l(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var f=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,"availableQuotes",[]),c(this,"usedQuotes",[])}var e,n,r;return e=t,(n=[{key:"pickQuote",value:function(){0===this.availableQuotes.length&&(this.availableQuotes=i(a),this.usedQuotes=[]);var t=Math.ceil(Math.random()*this.availableQuotes.length)-1,e=this.availableQuotes.splice(t,1)[0];return this.usedQuotes.push(e),e}}])&&s(e.prototype,n),r&&s(e,r),t}());function d(){var t=document.querySelector(".quote-container"),e=Array.from(t.childNodes);u(e.map(function(t,e){return{items:[{selector:".quote-word:nth-child(".concat(e+1,")"),addClass:"hide"}],duration:100}}),function(){e.forEach(function(e){return t.removeChild(e)}),p()})}function p(){var t=document.querySelector(".quote-container"),e=f.pickQuote().split(" ").map(function(t){var e=document.createElement("span");return e.classList.add("quote-word"),e.textContent=t,e}),n=e.map(function(t,e){return{items:[{selector:".quote-word:nth-child(".concat(e+1,")"),addClass:"reveal"}],duration:150}});n=[{items:[],duration:300}].concat(l(n)),t.append.apply(t,l(e)),u(n),document.querySelector(".heart-button").addEventListener("click",d,{once:!0})}u(r),document.querySelector(".heart-button").addEventListener("click",function(){u(o,p)},{once:!0})}]);
(()=>{"use strict";var e={424:(e,n,t)=>{t.d(n,{Z:()=>b});var r=t(81),o=t.n(r),a=t(645),c=t.n(a),i=t(667),s=t.n(i),u=new URL(t(966),t.b),p=new URL(t(28),t.b),d=new URL(t(166),t.b),l=c()(o()),f=s()(u),h=s()(p),m=s()(d);l.push([e.id,"@font-face {\r\n    font-family: 'MyFont';\r\n    src: url("+f+") format('woff2'),\r\n      url("+h+") format('woff');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    background-image: url("+m+");\r\n    background-repeat: repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    justify-content: center;\r\n}\r\n\r\nh1, h2 {\r\n    color: rgb(116 30 30);\r\n    text-align: center;\r\n}\r\n\r\nh1 {\r\n    font-size: 40px;\r\n    font-family: 'MyFont';\r\n}\r\n\r\nh2 {\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100vw;\r\n    background: rgb(217 215 151 / 81%);\r\n    padding-top: 15px;\r\n    gap: 15px;\r\n}\r\n\r\n#tabsContainer {\r\n    display: flex;\r\n    padding: 2px 5px 2px 5px;\r\n    gap: 5px;\r\n}\r\n\r\n.tabs {\r\n    height: 80px;\r\n    width: 80px;\r\n    background: rgb(232, 156, 158);\r\n    border: 1px solid rgb(211, 198, 198);\r\n    font-family: 'MyFont';\r\n    font-size: 22px;\r\n    border-radius: 16px;\r\n}\r\n\r\n.tabs:focus {\r\n    background: rgb(206, 99, 233);\r\n    transform: scale(1.05);\r\n}\r\n",""]);const b=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);r&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=r.base?s[0]+r.base:s[0],p=a[u]||0,d="".concat(u," ").concat(p);a[u]=p+1;var l=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)n[l].references++,n[l].updater(f);else{var h=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:d,updater:h,references:1})}c.push(d)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),u=0;u<a.length;u++){var p=t(a[u]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},166:(e,n,t)=>{e.exports=t.p+"387e72b8618091203678.jpg"},966:(e,n,t)=>{e.exports=t.p+"f311997d89cd2e287dc7.otf"},13:(e,n,t)=>{e.exports=t.p+"1e34faea6748f98bbe2f.jpg"},28:(e,n,t)=>{e.exports=t.p+"fe13186c2ed562ef0deb.otf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),s=t.n(i),u=t(216),p=t.n(u),d=t(589),l=t.n(d),f=t(424),h={};h.styleTagTransform=l(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,t(13);const m=document.getElementById("content");!function(){const e=document.createElement("header");(function(){const n=document.createElement("h1"),t=document.createElement("h2");n.textContent="The Cookie Factory",t.textContent="World Class Cookies, 12 years in a row!",e.appendChild(n),e.appendChild(t)})(),e.appendChild(function(){const e=document.createElement("div");return e.setAttribute("id","tabsContainer"),function(e){return function(n){n.forEach((n=>e.appendChild(n)))}(((n=function(e){let n=0;return e.forEach((e=>e.classList.add("tabs"))),e.forEach((e=>{e.setAttribute("id","tab"+n),n++})),e}([document.createElement("button"),document.createElement("button"),document.createElement("button")]))[0].textContent="Home",n[1].textContent="Menu",n[2].textContent="Contact",n)),e;var n}(e)}()),m.appendChild(e)}()})()})();
(()=>{"use strict";var e={424:(e,n,r)=>{r.d(n,{Z:()=>v});var t=r(81),o=r.n(t),a=r(645),c=r.n(a),i=r(667),s=r.n(i),u=new URL(r(966),r.b),l=new URL(r(28),r.b),p=new URL(r(166),r.b),d=c()(o()),f=s()(u),h=s()(l),m=s()(p);d.push([e.id,"@font-face {\r\n    font-family: 'MyFont';\r\n    src: url("+f+") format('woff2'),\r\n      url("+h+") format('woff');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n  }\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    background-image: url("+m+");\r\n    background-repeat: repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    justify-content: center;\r\n}\r\n\r\nh1, h2 {\r\n    color: rgb(116 30 30);\r\n    text-align: center;\r\n}\r\n\r\nh1 {\r\n    font-size: 40px;\r\n    font-family: 'MyFont';\r\n}\r\n\r\nh2 {\r\n    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100vw;\r\n    background: rgb(217 215 151 / 81%);\r\n    padding: 15px 0px;\r\n}",""]);const v=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);t&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],u=t.base?s[0]+t.base:s[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=r(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var h=o(f,t);t.byIndex=i,n.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=r(a[c]);n[i].references--}for(var s=t(e,o),u=0;u<a.length;u++){var l=r(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},166:(e,n,r)=>{e.exports=r.p+"387e72b8618091203678.jpg"},966:(e,n,r)=>{e.exports=r.p+"f311997d89cd2e287dc7.otf"},13:(e,n,r)=>{e.exports=r.p+"1e34faea6748f98bbe2f.jpg"},28:(e,n,r)=>{e.exports=r.p+"fe13186c2ed562ef0deb.otf"}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return e[t](a,a.exports,r),a.exports}r.m=e,r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var n=r.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),r.b=document.baseURI||self.location.href,(()=>{var e=r(379),n=r.n(e),t=r(795),o=r.n(t),a=r(569),c=r.n(a),i=r(565),s=r.n(i),u=r(216),l=r.n(u),p=r(589),d=r.n(p),f=r(424),h={};h.styleTagTransform=d(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,r(13),r(166);const m=document.getElementById("content");!function(){const e=document.createElement("header"),n=document.createElement("h1"),r=document.createElement("h2");n.textContent="The Cookie Factory",r.textContent="World Class Cookies, 12 years in a row!",e.appendChild(n),e.appendChild(r),m.appendChild(e)}()})()})();
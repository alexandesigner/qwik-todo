import{c as o,q as s}from"../q-fb951e08.js";const m=function(){const r=document.createElement("link").relList;return r&&r.supports&&r.supports("modulepreload")?"modulepreload":"preload"}(),c={},p="/",n=function(r,i){return!i||i.length===0?r():Promise.all(i.map(e=>{if(e=`${p}${e}`,e in c)return;c[e]=!0;const a=e.endsWith(".css"),_=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${_}`))return;const t=document.createElement("link");if(t.rel=a?"stylesheet":m,a||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),a)return new Promise((d,u)=>{t.addEventListener("load",d),t.addEventListener("error",u)})})).then(()=>r())};o("todo",s(()=>n(()=>import("../q-d62aab9a.js"),["q-d62aab9a.js","q-e023c998.css","q-fb951e08.js"]),"Root"));const f=o("header",s(()=>n(()=>import("../q-d62aab9a.js"),["q-d62aab9a.js","q-e023c998.css","q-fb951e08.js"]),"Header")),h=o("main",s(()=>n(()=>import("../q-d62aab9a.js"),["q-d62aab9a.js","q-e023c998.css","q-fb951e08.js"]),"Main")),q=o("li",s(()=>n(()=>import("../q-d62aab9a.js"),["q-d62aab9a.js","q-e023c998.css","q-fb951e08.js"]),"Item")),L=o("footer",s(()=>n(()=>import("../q-d62aab9a.js"),["q-d62aab9a.js","q-e023c998.css","q-fb951e08.js"]),"Footer"));export{L as F,f as H,q as I,h as M,n as _};

!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var r=n(5),o=n(12),i=n(13);e.exports=r,e.exports.update=function(e,t,n){return n||(n={}),!1!==n.events&&(n.onBeforeElUpdated||(n.onBeforeElUpdated=function(e,t){for(var r=n.events||i,o=0;o<r.length;o++){var a=r[o];t[a]?e[a]=t[a]:e[a]&&(e[a]=void 0)}var l=e.value,u=t.value;"INPUT"===e.nodeName&&"file"!==e.type||"SELECT"===e.nodeName?u||t.hasAttribute("value")?u!==l&&(e.value=u):t.value=e.value:"TEXTAREA"===e.nodeName&&null===t.getAttribute("value")&&(e.value=t.value)})),o(e,t,n)}},function(e,t,n){(function(t){var r,o=void 0!==t?t:"undefined"!=typeof window?window:{},i=n(6);"undefined"!=typeof document?r=document:(r=o["__GLOBAL_DOCUMENT_CACHE@4"])||(r=o["__GLOBAL_DOCUMENT_CACHE@4"]=i),e.exports=r}).call(this,n(2))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(4);n(0);const o=document.getElementById("app-container"),i=Object(r.default)("Who names their kid Ben Bitdiddle?");o.appendChild(i)},function(e,t,n){"use strict";(function(e){var t=n(0),r=n.n(t);e.exports=function(e){return r.a`<h1>Hello, ${e}!</h1>`}}).call(this,n(14)(e))},function(e,t,n){var r=n(1),o=n(7),i=n(9),a={autofocus:1,checked:1,defaultchecked:1,disabled:1,formnovalidate:1,indeterminate:1,readonly:1,required:1,selected:1,willvalidate:1},l=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function u(e,t,n){var o;-1!==l.indexOf(e)&&(t.namespace="http://www.w3.org/2000/svg");var f=!1;if(t.namespace&&(f=t.namespace,delete t.namespace),f)o=r.createElementNS(f,e);else{if("!--"===e)return r.createComment(t.comment);o=r.createElement(e)}if(t.onload||t.onunload){var s=t.onload||function(){},c=t.onunload||function(){};i(o,(function(){s(o)}),(function(){c(o)}),u.caller.caller.caller),delete t.onload,delete t.onunload}for(var d in t)if(t.hasOwnProperty(d)){var p=d.toLowerCase(),h=t[d];if("classname"===p&&(p="class",d="class"),"htmlFor"===d&&(d="for"),a[p])if("true"===h)h=p;else if("false"===h)continue;"on"===p.slice(0,2)?o[d]=h:f?"xlink:href"===d?o.setAttributeNS("http://www.w3.org/1999/xlink",d,h):/^xmlns($|:)/i.test(d)||o.setAttributeNS(null,d,h):o.setAttribute(d,h)}return function e(t){if(Array.isArray(t))for(var n=0;n<t.length;n++){var i=t[n];if(Array.isArray(i))e(i);else{if(("number"==typeof i||"boolean"==typeof i||"function"==typeof i||i instanceof Date||i instanceof RegExp)&&(i=i.toString()),"string"==typeof i){if(o.lastChild&&"#text"===o.lastChild.nodeName){o.lastChild.nodeValue+=i;continue}i=r.createTextNode(i)}i&&i.nodeType&&o.appendChild(i)}}}(n),o}e.exports=o(u,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=u},function(e,t){},function(e,t,n){var r=n(8);function o(e){return 9===e||10===e}e.exports=function(e,t){t||(t={});var n=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=r(e)),function(r){for(var l=1,u="",f=arguments.length,s=[],c=0;c<r.length;c++)if(c<f-1){var d=arguments[c+1],p=C(r[c]),h=l;10===h&&(h=8),9===h&&(h=8),7===h&&(h=8),4===h&&(h=5),2===h?"/"===u?(p.push([2,"/",d]),u=""):p.push([2,d]):13===h&&t.comments?u+=String(d):13!==h&&p.push([0,h,d]),s.push.apply(s,p)}else s.push.apply(s,C(r[c]));var m=[null,{},[]],v=[[m,-1]];for(c=0;c<s.length;c++){var g=v[v.length-1][0],b=(p=s[c])[0];if(2===b&&/^\//.test(p[1])){var y=v[v.length-1][1];v.length>1&&(v.pop(),v[v.length-1][0][2][y]=e(g[0],g[1],g[2].length?g[2]:void 0))}else if(2===b){var A=[p[1],{},[]];g[2].push(A),v.push([A,g[2].length-1])}else if(5===b||0===b&&5===p[1]){for(var N,x="";c<s.length;c++)if(5===s[c][0])x=n(x,s[c][1]);else{if(0!==s[c][0]||5!==s[c][1])break;if("object"!=typeof s[c][2]||x)x=n(x,s[c][2]);else for(N in s[c][2])s[c][2].hasOwnProperty(N)&&!g[1][N]&&(g[1][N]=s[c][2][N])}11===s[c][0]&&c++;for(var w=c;c<s.length;c++)if(8===s[c][0]||5===s[c][0])g[1][x]?""===s[c][1]||(g[1][x]=n(g[1][x],s[c][1])):g[1][x]=i(s[c][1]);else{if(0!==s[c][0]||8!==s[c][1]&&5!==s[c][1]){!x.length||g[1][x]||c!==w||3!==s[c][0]&&12!==s[c][0]||(g[1][x]=x.toLowerCase()),3===s[c][0]&&c--;break}g[1][x]?""===s[c][2]||(g[1][x]=n(g[1][x],s[c][2])):g[1][x]=i(s[c][2])}}else if(5===b)g[1][p[1]]=!0;else if(0===b&&5===p[1])g[1][p[2]]=!0;else if(3===b){if(a(g[0])&&v.length){y=v[v.length-1][1];v.pop(),v[v.length-1][0][2][y]=e(g[0],g[1],g[2].length?g[2]:void 0)}}else if(0===b&&1===p[1])void 0===p[2]||null===p[2]?p[2]="":p[2]||(p[2]=n("",p[2])),Array.isArray(p[2][0])?g[2].push.apply(g[2],p[2]):g[2].push(p[2]);else if(1===b)g[2].push(p[1]);else if(11!==b&&12!==b)throw new Error("unhandled: "+b)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1])){if(t.createFragment)return t.createFragment(m[2]);throw new Error("multiple root elements must be wrapped in an enclosing tag")}return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0];function C(e){var n=[];7===l&&(l=4);for(var r=0;r<e.length;r++){var i=e.charAt(r);1===l&&"<"===i?(u.length&&n.push([1,u]),u="",l=2):">"!==i||o(l)||13===l?13===l&&/-$/.test(u)&&"-"===i?(t.comments&&n.push([8,u.substr(0,u.length-1)]),u="",l=1):2===l&&/^!--$/.test(u)?(t.comments&&n.push([2,u],[5,"comment"],[11]),u=i,l=13):1===l||13===l?u+=i:2===l&&"/"===i&&u.length||(2===l&&/\s/.test(i)?(u.length&&n.push([2,u]),u="",l=4):2===l?u+=i:4===l&&/[^\s"'=/]/.test(i)?(l=5,u=i):4===l&&/\s/.test(i)?(u.length&&n.push([5,u]),n.push([12])):5===l&&/\s/.test(i)?(n.push([5,u]),u="",l=6):5===l&&"="===i?(n.push([5,u],[11]),u="",l=7):5===l?u+=i:6!==l&&4!==l||"="!==i?6!==l&&4!==l||/\s/.test(i)?7===l&&'"'===i?l=10:7===l&&"'"===i?l=9:10===l&&'"'===i||9===l&&"'"===i?(n.push([8,u],[12]),u="",l=4):7!==l||/\s/.test(i)?8===l&&/\s/.test(i)?(n.push([8,u],[12]),u="",l=4):8!==l&&9!==l&&10!==l||(u+=i):(l=8,r--):(n.push([12]),/[\w-]/.test(i)?(u+=i,l=5):l=4):(n.push([11]),l=7)):(2===l&&u.length?n.push([2,u]):5===l?n.push([5,u]):8===l&&u.length&&n.push([8,u]),n.push([3]),u="",l=1)}return 1===l&&u.length?(n.push([1,u]),u=""):8===l&&u.length||10===l&&u.length||9===l&&u.length?(n.push([8,u]),u=""):5===l&&(n.push([5,u]),u=""),n}};function i(e){return"function"==typeof e||"string"==typeof e||e&&"object"==typeof e||null==e?e:n("",e)}};var i=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");function a(e){return i.test(e)}},function(e,t){e.exports=function(e){return function(t,r,o){for(var i in r)i in n&&(r[n[i]]=r[i],delete r[i]);return e(t,r,o)}};var n={class:"className",for:"htmlFor","http-equiv":"httpEquiv"}},function(e,t,n){var r=n(1),o=n(10),i=n(11),a=Object.create(null),l="onloadid"+(new Date%9e6).toString(36),u="data-"+l,f=0;if(o&&o.MutationObserver){var s=new MutationObserver((function(e){if(!(Object.keys(a).length<1))for(var t=0;t<e.length;t++)e[t].attributeName!==u?(m(e[t].removedNodes,p),m(e[t].addedNodes,d)):h(e[t],d,p)}));r.body?c(s):r.addEventListener("DOMContentLoaded",(function(e){c(s)}))}function c(e){e.observe(r.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[u]})}function d(e,t){a[e][0]&&0===a[e][2]&&(a[e][0](t),a[e][2]=1)}function p(e,t){a[e][1]&&1===a[e][2]&&(a[e][1](t),a[e][2]=0)}function h(e,t,n){var r=e.target.getAttribute(u);!function(e,t){return!(!e||!t)&&a[e][3]===a[t][3]}(e.oldValue,r)?(a[e.oldValue]&&n(e.oldValue,e.target),a[r]&&t(r,e.target)):a[r]=a[e.oldValue]}function m(e,t){for(var n=Object.keys(a),r=0;r<e.length;r++){if(e[r]&&e[r].getAttribute&&e[r].getAttribute(u)){var o=e[r].getAttribute(u);n.forEach((function(n){o===n&&t(n,e[r])}))}e[r].childNodes.length>0&&m(e[r].childNodes,t)}}e.exports=function e(t,n,o,l){return i(r.body,"on-load: will not work prior to DOMContentLoaded"),n=n||function(){},o=o||function(){},t.setAttribute(u,"o"+f),a["o"+f]=[n,o,0,l||e.caller],f+=1,t},e.exports.KEY_ATTR=u,e.exports.KEY_ID=l},function(e,t,n){(function(t){var n;n="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},e.exports=n}).call(this,n(2))},function(e,t){function n(e,t){if(!e)throw new Error(t||"AssertionError")}n.notEqual=function(e,t,r){n(e!=t,r)},n.notOk=function(e,t){n(!e,t)},n.equal=function(e,t,r){n(e==t,r)},n.ok=n,e.exports=n},function(e,t,n){"use strict";n.r(t);var r;var o="undefined"==typeof document?void 0:document,i=!!o&&"content"in o.createElement("template"),a=!!o&&o.createRange&&"createContextualFragment"in o.createRange();function l(e){return e=e.trim(),i?function(e){var t=o.createElement("template");return t.innerHTML=e,t.content.childNodes[0]}(e):a?function(e){return r||(r=o.createRange()).selectNode(o.body),r.createContextualFragment(e).childNodes[0]}(e):function(e){var t=o.createElement("body");return t.innerHTML=e,t.childNodes[0]}(e)}function u(e,t){var n,r,o=e.nodeName,i=t.nodeName;return o===i||(n=o.charCodeAt(0),r=i.charCodeAt(0),n<=90&&r>=97?o===i.toUpperCase():r<=90&&n>=97&&i===o.toUpperCase())}function f(e,t,n){e[n]!==t[n]&&(e[n]=t[n],e[n]?e.setAttribute(n,""):e.removeAttribute(n))}var s={OPTION:function(e,t){var n=e.parentNode;if(n){var r=n.nodeName.toUpperCase();"OPTGROUP"===r&&(r=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==r||n.hasAttribute("multiple")||(e.hasAttribute("selected")&&!t.selected&&(e.setAttribute("selected","selected"),e.removeAttribute("selected")),n.selectedIndex=-1)}f(e,t,"selected")},INPUT:function(e,t){f(e,t,"checked"),f(e,t,"disabled"),e.value!==t.value&&(e.value=t.value),t.hasAttribute("value")||e.removeAttribute("value")},TEXTAREA:function(e,t){var n=t.value;e.value!==n&&(e.value=n);var r=e.firstChild;if(r){var o=r.nodeValue;if(o==n||!n&&o==e.placeholder)return;r.nodeValue=n}},SELECT:function(e,t){if(!t.hasAttribute("multiple")){for(var n,r,o=-1,i=0,a=e.firstChild;a;)if("OPTGROUP"===(r=a.nodeName&&a.nodeName.toUpperCase()))a=(n=a).firstChild;else{if("OPTION"===r){if(a.hasAttribute("selected")){o=i;break}i++}!(a=a.nextSibling)&&n&&(a=n.nextSibling,n=null)}e.selectedIndex=o}}};function c(){}function d(e){if(e)return e.getAttribute&&e.getAttribute("id")||e.id}var p=function(e){return function(t,n,r){if(r||(r={}),"string"==typeof n)if("#document"===t.nodeName||"HTML"===t.nodeName||"BODY"===t.nodeName){var i=n;(n=o.createElement("html")).innerHTML=i}else n=l(n);var a=r.getNodeKey||d,f=r.onBeforeNodeAdded||c,p=r.onNodeAdded||c,h=r.onBeforeElUpdated||c,m=r.onElUpdated||c,v=r.onBeforeNodeDiscarded||c,g=r.onNodeDiscarded||c,b=r.onBeforeElChildrenUpdated||c,y=!0===r.childrenOnly,A=Object.create(null),N=[];function x(e){N.push(e)}function w(e,t,n){!1!==v(e)&&(t&&t.removeChild(e),g(e),function e(t,n){if(1===t.nodeType)for(var r=t.firstChild;r;){var o=void 0;n&&(o=a(r))?x(o):(g(r),r.firstChild&&e(r,n)),r=r.nextSibling}}(e,n))}function C(e){p(e);for(var t=e.firstChild;t;){var n=t.nextSibling,r=a(t);if(r){var o=A[r];o&&u(t,o)?(t.parentNode.replaceChild(o,t),E(o,t)):C(t)}else C(t);t=n}}function E(t,n,r){var i=a(n);if(i&&delete A[i],!r){if(!1===h(t,n))return;if(e(t,n),m(t),!1===b(t,n))return}"TEXTAREA"!==t.nodeName?function(e,t){var n,r,i,l,c,d=t.firstChild,p=e.firstChild;e:for(;d;){for(l=d.nextSibling,n=a(d);p;){if(i=p.nextSibling,d.isSameNode&&d.isSameNode(p)){d=l,p=i;continue e}r=a(p);var h=p.nodeType,m=void 0;if(h===d.nodeType&&(1===h?(n?n!==r&&((c=A[n])?i===c?m=!1:(e.insertBefore(c,p),r?x(r):w(p,e,!0),p=c):m=!1):r&&(m=!1),(m=!1!==m&&u(p,d))&&E(p,d)):3!==h&&8!=h||(m=!0,p.nodeValue!==d.nodeValue&&(p.nodeValue=d.nodeValue))),m){d=l,p=i;continue e}r?x(r):w(p,e,!0),p=i}if(n&&(c=A[n])&&u(c,d))e.appendChild(c),E(c,d);else{var v=f(d);!1!==v&&(v&&(d=v),d.actualize&&(d=d.actualize(e.ownerDocument||o)),e.appendChild(d),C(d))}d=l,p=i}!function(e,t,n){for(;t;){var r=t.nextSibling;(n=a(t))?x(n):w(t,e,!0),t=r}}(e,p,r);var g=s[e.nodeName];g&&g(e,t)}(t,n):s.TEXTAREA(t,n)}!function e(t){if(1===t.nodeType||11===t.nodeType)for(var n=t.firstChild;n;){var r=a(n);r&&(A[r]=n),e(n),n=n.nextSibling}}(t);var T,O,S=t,k=S.nodeType,L=n.nodeType;if(!y)if(1===k)1===L?u(t,n)||(g(t),S=function(e,t){for(var n=e.firstChild;n;){var r=n.nextSibling;t.appendChild(n),n=r}return t}(t,(T=n.nodeName,(O=n.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==O?o.createElementNS(O,T):o.createElement(T)))):S=n;else if(3===k||8===k){if(L===k)return S.nodeValue!==n.nodeValue&&(S.nodeValue=n.nodeValue),S;S=n}if(S===n)g(t);else{if(n.isSameNode&&n.isSameNode(S))return;if(E(S,n,y),N)for(var M=0,P=N.length;M<P;M++){var j=A[N[M]];j&&w(j,j.parentNode,!1)}}return!y&&S!==t&&t.parentNode&&(S.actualize&&(S=S.actualize(t.ownerDocument||o)),t.parentNode.replaceChild(S,t)),S}}((function(e,t){var n,r,o,i,a=t.attributes;if(11!==t.nodeType&&11!==e.nodeType){for(var l=a.length-1;l>=0;l--)r=(n=a[l]).name,o=n.namespaceURI,i=n.value,o?(r=n.localName||r,e.getAttributeNS(o,r)!==i&&("xmlns"===n.prefix&&(r=n.name),e.setAttributeNS(o,r,i))):e.getAttribute(r)!==i&&e.setAttribute(r,i);for(var u=e.attributes,f=u.length-1;f>=0;f--)r=(n=u[f]).name,(o=n.namespaceURI)?(r=n.localName||r,t.hasAttributeNS(o,r)||e.removeAttributeNS(o,r)):t.hasAttribute(r)||e.removeAttribute(r)}}));t.default=p},function(e,t){e.exports=["onclick","ondblclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","ondragstart","ondrag","ondragenter","ondragleave","ondragover","ondrop","ondragend","onkeydown","onkeypress","onkeyup","onunload","onabort","onerror","onresize","onscroll","onselect","onchange","onsubmit","onreset","onfocus","onblur","oninput","oncontextmenu","onfocusin","onfocusout"]},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}]);
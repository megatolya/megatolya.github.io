!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=r(3),a=n(o),u=r(4),l=n(u),i=r(12),c=n(i);"undefined"!=typeof document?document.addEventListener("DOMContentLoaded",function(){a["default"].run(c["default"],a["default"].HistoryLocation,function(e){l["default"].render(l["default"].createElement(e,null),document.body)})}):e.exports=c["default"]},function(e,t){e.exports=require("react/addons")},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e,t,r){for(var n=!0;n;){var o=e,a=t,u=r;l=c=i=void 0,n=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,a);if(void 0!==l){if("value"in l)return l.value;var i=l.get;return void 0===i?void 0:i.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=a,r=u,n=!0}},l=r(4),i=l.Component,c=function(e){function t(){n(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return o(t,e),a(t,[{key:"getLocalizedData",value:function(e){return r(5)[this.props.lang][e]}},{key:"locale",get:function(){return this.props.lang}}]),t}(i);t["default"]=c,e.exports=t["default"]},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("react")},function(e,t){"use strict";e.exports={ru:Object.defineProperties({title:"Анатолий Островский",author:"Анатолий Островский",description:"Домашняя страница Анатолия Островского",buildUrl:"index.html",changeLocale:"In english"},{text:{get:function(){return["Привет!","Меня зовут Толя Островский, и это портал имени меня."]},configurable:!0,enumerable:!0}}),en:Object.defineProperties({title:"Anatoly Ostrovsky",author:"Anatoly Ostrovsky",description:"Anatoly Ostrovsky homepage",buildUrl:"en/index.html",changeLocale:"По-русски"},{text:{get:function(){return["Hi!","My name is Anatoly Ostrovsky and welcome to my homepage."]},configurable:!0,enumerable:!0}})}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(e,t,r){for(var n=!0;n;){var o=e,a=t,u=r;l=c=i=void 0,n=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,a);if(void 0!==l){if("value"in l)return l.value;var i=l.get;return void 0===i?void 0:i.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=a,r=u,n=!0}},i=r(1),c=n(i),f=r(2),p=n(f),s=r(8),d=n(s),y=r(11),v=n(y),b=r(7),g=n(b),h=r(9),m=n(h),O=r(13),_=n(O),w=r(16),j=n(w),P=function(e){function t(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:_["default"].root},c["default"].createElement("div",{className:_["default"].wrapper},c["default"].createElement(d["default"],{lang:this.props.lang}),c["default"].createElement(v["default"],{lang:this.props.lang}),c["default"].createElement(m["default"],{lang:this.props.lang}),c["default"].createElement("div",{className:j["default"].push})),c["default"].createElement(g["default"],{lang:this.props.lang}))}}]),t}(p["default"]);t["default"]=P,e.exports=t["default"]},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(e,t,r){for(var n=!0;n;){var o=e,a=t,u=r;l=c=i=void 0,n=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,a);if(void 0!==l){if("value"in l)return l.value;var i=l.get;return void 0===i?void 0:i.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=a,r=u,n=!0}},i=r(1),c=n(i),f=r(2),p=n(f),s=r(3),d=r(10),y=n(d),v=r(14),b=n(v),g=function(e){function t(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement("footer",null,c["default"].createElement("div",{className:b["default"].follow},c["default"].createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=megatolya&type=follow&count=true",frameBorder:"0",scrolling:"0",width:"160px",height:"25px"})),c["default"].createElement("small",{className:b["default"].copyright},"© 2014–",(new Date).getFullYear()," ",c["default"].createElement("a",{href:"mailto:forgetthisbox@gmail.com"},this.getLocalizedData("author"))),c["default"].createElement("div",{className:b["default"].langChanger},c["default"].createElement(s.Link,{to:"ru"===this.locale?"english":"default"},this.getLocalizedData("changeLocale"),c["default"].createElement(y["default"],{lang:"ru"===this.locale?"gb":"ru"}))))}}]),t}(p["default"]);t["default"]=g,e.exports=t["default"]},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e,t,r){for(var n=!0;n;){var o=e,a=t,u=r;l=c=i=void 0,n=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,a);if(void 0!==l){if("value"in l)return l.value;var i=l.get;return void 0===i?void 0:i.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=a,r=u,n=!0}},l=r(1),i=r(2),c=function(e){function t(){n(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return o(t,e),a(t,[{key:"render",value:function(){return l.createElement("header",{role:"banner",className:"header"},l.createElement("hgroup",null,l.createElement("h1",null,l.createElement("a",{href:"https://plus.google.com/+АнатолийОстровский"},this.getLocalizedData("author"))),l.createElement("h2",null,"aka ",l.createElement("a",{href:"https://github.com/megatolya"},"megatolya"))))}}]),t}(i);t["default"]=c,e.exports=c,e.exports=t["default"]},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e,t,r){for(var n=!0;n;){var o=e,a=t,u=r;l=c=i=void 0,n=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,a);if(void 0!==l){if("value"in l)return l.value;var i=l.get;return void 0===i?void 0:i.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=a,r=u,n=!0}},l=r(1),i=r(2),c=function(e){function t(){n(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return o(t,e),a(t,[{key:"render",value:function(){var e={width:"100%",border:"0",overflow:"hidden",height:"400px"};return l.createElement("noindex",null,l.createElement("script",{src:"//instansive.com/widget/js/instansive.js"}),l.createElement("iframe",{src:"//instansive.com/widgets/25d3d7f5f809853073df9ced2a113c7e405a724b.html",scrolling:"no",allowTransparency:"true",className:"instansive-widget",style:e}))}}]),t}(i);t["default"]=c,e.exports=t["default"]},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=function(e,t,r){for(var n=!0;n;){var o=e,a=t,u=r;l=c=i=void 0,n=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,a);if(void 0!==l){if("value"in l)return l.value;var i=l.get;return void 0===i?void 0:i.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=a,r=u,n=!0}},i=r(1),c=n(i),f=r(2),p=n(f),s=r(15),d=n(s),y=function(e){function t(){o(this,t),l(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),u(t,[{key:"render",value:function(){var e=["flag-icon","flag-icon-"+this.props.lang,d["default"].flagIcon].join(" ");return c["default"].createElement("span",{className:e})}}]),t}(p["default"]);t["default"]=y,e.exports=t["default"]},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e,t,r){for(var n=!0;n;){var o=e,a=t,u=r;l=c=i=void 0,n=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,a);if(void 0!==l){if("value"in l)return l.value;var i=l.get;return void 0===i?void 0:i.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=a,r=u,n=!0}},l=r(1),i=r(2),c=function(e){function t(){n(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return o(t,e),a(t,[{key:"render",value:function(){return l.createElement("main",null,l.createElement("article",null,this.getLocalizedData("text").map(function(e,t){return l.createElement("p",{key:t},e)})))}}]),t}(i);t["default"]=c,e.exports=t["default"]},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e,t,r){for(var n=!0;n;){var o=e,a=t,u=r;l=c=i=void 0,n=!1,null===o&&(o=Function.prototype);var l=Object.getOwnPropertyDescriptor(o,a);if(void 0!==l){if("value"in l)return l.value;var i=l.get;return void 0===i?void 0:i.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;e=c,t=a,r=u,n=!0}},l=r(1),i=l.Component,c=r(3),f=c.Route,p=c.DefaultRoute,s=c.RouteHandler,d=r(6),y=(r(17),function(e,t){return l.createClass({render:function(){return l.createElement(e,t)}})}),v=function(e){function t(){n(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return o(t,e),a(t,[{key:"render",value:function(){return l.createElement(s,null)}}]),t}(i);e.exports=l.createElement(f,{handler:v,path:"/"},l.createElement(p,{name:"default",handler:y(d,{lang:"ru"})}),l.createElement(f,{name:"english",path:"/en/",handler:y(d,{lang:"en"})}))},function(e,t){e.exports={root:"app__root___2mVqG",wrapper:"app__wrapper___f--Dk"}},function(e,t){e.exports={langChanger:"footer__langChanger___3wmHa",copyright:"footer__copyright___2ernx",follow:"footer__follow___38Ua-"}},function(e,t){e.exports={flagIcon:"lang__flagIcon___3QCLY"}},function(e,t){e.exports={push:"constants__push___3B_DS"}},function(e,t){e.exports=require("lodash")}]));
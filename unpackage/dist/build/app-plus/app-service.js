(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"0845":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=s}).call(this,s("0de9")["default"])},"098e":function(t,e,s){"use strict";s.r(e);var n=s("2fe4"),i=s.n(n);for(var a in n)"default"!==a&&function(t){s.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},"0de9":function(t,e,s){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){return"string"===typeof __channelId__&&__channelId__}function a(t,e){switch(n(e)){case"Function":return"function() { [native code] }";default:return e}}function r(t){for(var e=arguments.length,s=new Array(e>1?e-1:0),n=1;n<e;n++)s[n-1]=arguments[n];console[t].apply(console,s)}function c(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];var r=e.shift();if(i())return e.push(e.pop().replace("at ","uni-app:///")),console[r].apply(console,e);var c=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,a)+"---END:JSON---"}catch(i){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var s=n(t).toUpperCase();t="NUMBER"===s||"BOOLEAN"===s?"---BEGIN:"+s+"---"+t+"---END:"+s+"---":String(t)}return t})),o="";if(c.length>1){var u=c.pop();o=c.join("---COMMA---"),0===u.indexOf(" at ")?o+=u:o+="---COMMA---"+u}else o=c[0];console[r](o)}s.r(e),s.d(e,"log",(function(){return r})),s.d(e,"default",(function(){return c}))},"1d91":function(t,e,s){"use strict";var n;s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return a})),s.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:t._$s(0,"sc","main"),attrs:{_i:0}},[s("view",{staticClass:t._$s(1,"sc","titleBox"),attrs:{_i:1}},[s("view",{staticClass:t._$s(2,"sc","firstTitle"),attrs:{_i:2}}),s("view",{staticClass:t._$s(3,"sc","secondTitle"),attrs:{_i:3}})]),s("view",{staticClass:t._$s(4,"sc","loginAndRegister"),attrs:{_i:4}},[s("navigator",{staticClass:t._$s(5,"sc","loginNav"),attrs:{_i:5}},[s("button",{staticClass:t._$s(6,"sc","btn loginBtn"),attrs:{_i:6}})]),s("button",{staticClass:t._$s(7,"sc","btn registerBtn"),attrs:{_i:7}})])])},a=[]},"2fe4":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{}},methods:{login:function(e){"\u5fae\u4fe1"===e&&uni.getUserProfile({desc:"\u767b\u5f55",success:function(e){t("log",e," at pages/login/login.vue:40"),uni.login({provider:"weixin",success:function(e){t("log",e," at pages/login/login.vue:45")}})},fail:function(e){t("log",e," at pages/login/login.vue:51")}})}}};e.default=s}).call(this,s("0de9")["default"])},"37bc":function(t,e,s){"use strict";var n;s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return a})),s.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:t._$s(0,"sc","main"),attrs:{_i:0}},[s("view",{staticClass:t._$s(1,"sc","innerMain"),attrs:{_i:1}},[s("navigator",{staticClass:t._$s(2,"sc","backToStart"),attrs:{_i:2}},[s("view",{staticClass:t._$s(3,"sc","closeIcon"),attrs:{_i:3}})]),s("view",{staticClass:t._$s(4,"sc","title"),attrs:{_i:4}}),s("view",{staticClass:t._$s(5,"sc","inputBox"),attrs:{_i:5}},[s("input",{}),s("input",{staticClass:t._$s(7,"sc","bottomInput"),attrs:{_i:7}})]),s("navigator",{staticClass:t._$s(8,"sc","turnToIndex"),attrs:{_i:8}},[s("button",{staticClass:t._$s(9,"sc","loginBtn"),attrs:{_i:9}})]),s("view",{staticClass:t._$s(10,"sc","footer"),attrs:{_i:10}},[s("view",{staticClass:t._$s(11,"sc","footerTitle"),attrs:{_i:11}}),s("view",{staticClass:t._$s(12,"sc","iconBox"),attrs:{_i:12}},[s("image",{staticClass:t._$s(13,"sc","icon"),attrs:{_i:13},on:{click:function(e){return t.login("\u5fae\u4fe1")}}}),s("image",{staticClass:t._$s(14,"sc","icon"),attrs:{_i:14},on:{click:function(e){return t.login("QQ")}}}),s("image",{staticClass:t._$s(15,"sc","icon"),attrs:{_i:15},on:{click:function(e){return t.login("\u5fae\u535a")}}})])])])])},a=[]},"389b":function(t,e,s){"use strict";s.r(e);var n=s("0845"),i=s.n(n);for(var a in n)"default"!==a&&function(t){s.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},"3c6d":function(t,e,s){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(s){return e.resolve(t()).then((function(){return s}))}),(function(s){return e.resolve(t()).then((function(){throw s}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/start/start",(function(){return Vue.extend(s("eb24").default)})),__definePage("pages/index/index",(function(){return Vue.extend(s("af1e").default)})),__definePage("pages/login/login",(function(){return Vue.extend(s("dbcf").default)}))},"3c92":function(t,e,s){"use strict";s.r(e);var n=s("389b");for(var i in n)"default"!==i&&function(t){s.d(e,t,(function(){return n[t]}))}(i);var a,r,c,o,u=s("f0c5"),l=Object(u["a"])(n["default"],a,r,!1,null,null,null,!1,c,o);e["default"]=l.exports},"4ba2":function(t,e,s){"use strict";var n;s.d(e,"b",(function(){return i})),s.d(e,"c",(function(){return a})),s.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:t._$s(0,"sc","main"),attrs:{_i:0}},[s("view",{staticClass:t._$s(1,"sc","header"),attrs:{_i:1}},[s("view",{staticClass:t._$s(2,"sc","leftHeader"),attrs:{_i:2}},[s("view",{staticClass:t._$s(3,"sc","name headerTop"),attrs:{_i:3}}),s("view",{staticClass:t._$s(4,"sc","date headerBottom"),attrs:{_i:4}})]),s("view",{staticClass:t._$s(5,"sc","rightHeader"),attrs:{_i:5}},[t._$s(6,"i",3===t.selectWeather.length)?s("view",{staticClass:t._$s(6,"sc","headerSelectTitle headerTop"),attrs:{_i:6}}):t._e(),t._$s(7,"i",3!=t.selectWeather.length)?s("view",{staticClass:t._$s(7,"sc","headerSelectTitle headerTop"),attrs:{_i:7}},[t._v(t._$s(7,"t0-0",t._s("\u6674\u5929"===t.selectWeather[0]?"\u660e\u5929\u4e5f\u8981\u5f00\u5fc3\u54e6\uff01":"\u591a\u4e91"===t.selectWeather[0]?"\u4f60\u7b11\u8d77\u6765\u771f\u597d\u770b":"\u4f60\u8d85\u68d2\u7684\uff01")))]):t._e(),s("view",{staticClass:t._$s(8,"sc","headerIconBox headerBottom"),style:t._$s(8,"s",3===t.selectWeather.length?"":"justify-content: center;"),attrs:{_i:8}},[t._$s(9,"i",3===t.selectWeather.length||"\u6674\u5929"===t.selectWeather[0])?s("image",{staticClass:t._$s(9,"sc","icon"),attrs:{_i:9},on:{click:function(e){return t.selectForWeather("\u6674\u5929")}}}):t._e(),t._$s(10,"i",3===t.selectWeather.length||"\u591a\u4e91"===t.selectWeather[0])?s("image",{staticClass:t._$s(10,"sc","icon"),attrs:{_i:10},on:{click:function(e){return t.selectForWeather("\u591a\u4e91")}}}):t._e(),t._$s(11,"i",3===t.selectWeather.length||"\u9634\u5929"===t.selectWeather[0])?s("image",{staticClass:t._$s(11,"sc","icon"),attrs:{_i:11},on:{click:function(e){return t.selectForWeather("\u9634\u5929")}}}):t._e()])])]),s("view",{staticClass:t._$s(12,"sc","banner"),attrs:{_i:12}},[s("image",{staticClass:t._$s(13,"sc","bannerImg"),attrs:{_i:13}})]),s("view",{staticClass:t._$s(14,"sc","contentBox"),attrs:{_i:14}},[s("view",{staticClass:t._$s(15,"sc","contentTitle"),attrs:{_i:15}},[s("view",{staticClass:t._$s(16,"sc","yellowLine"),attrs:{_i:16}})]),s("view",{staticClass:t._$s(17,"sc","contentCard firstCard"),attrs:{_i:17}},[s("view",{staticClass:t._$s(18,"sc","leftImage firstLeftImage"),attrs:{_i:18}},[s("image",{staticClass:t._$s(19,"sc","cardImg"),attrs:{_i:19}})]),s("view",{staticClass:t._$s(20,"sc","cardMain"),attrs:{_i:20}},[s("view",{staticClass:t._$s(21,"sc","cardTitle"),attrs:{_i:21}}),s("view",{staticClass:t._$s(22,"sc","cardMainContent"),attrs:{_i:22}}),s("view",{staticClass:t._$s(23,"sc","cardBtn"),attrs:{_i:23}})])]),s("view",{staticClass:t._$s(24,"sc","contentCard"),attrs:{_i:24}},[s("view",{staticClass:t._$s(25,"sc","leftImage secondLeftImage"),attrs:{_i:25}},[s("image",{staticClass:t._$s(26,"sc","cardImg"),attrs:{_i:26}})]),s("view",{staticClass:t._$s(27,"sc","cardMain"),attrs:{_i:27}},[s("view",{staticClass:t._$s(28,"sc","cardTitle"),attrs:{_i:28}}),s("view",{staticClass:t._$s(29,"sc","cardMainContent"),attrs:{_i:29}}),s("view",{staticClass:t._$s(30,"sc","cardBtn"),attrs:{_i:30}})])])])])},a=[]},6056:function(t,e,s){"use strict";s("3c6d");var n=a(s("3c92")),i=a(s("8bbf"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){o(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function o(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}i.default.config.productionTip=!1,n.default.mpType="app";var u=new i.default(c({},n.default));u.$mount()},"79f4":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},methods:{}};e.default=n},"8abc":function(t,e,s){"use strict";s.r(e);var n=s("ca94"),i=s.n(n);for(var a in n)"default"!==a&&function(t){s.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},"8bbf":function(t,e){t.exports=Vue},af1e:function(t,e,s){"use strict";s.r(e);var n=s("4ba2"),i=s("8abc");for(var a in i)"default"!==a&&function(t){s.d(e,t,(function(){return i[t]}))}(a);var r,c=s("f0c5"),o=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"a176402e",null,!1,n["a"],r);e["default"]=o.exports},b40c:function(t,e,s){"use strict";s.r(e);var n=s("79f4"),i=s.n(n);for(var a in n)"default"!==a&&function(t){s.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},ca94:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"Hello",selectWeather:["\u6674\u5929","\u591a\u4e91","\u9634\u5929"]}},onLoad:function(){},methods:{selectForWeather:function(t){this.selectWeather=[],this.selectWeather.push(t)}}};e.default=n},dbcf:function(t,e,s){"use strict";s.r(e);var n=s("37bc"),i=s("098e");for(var a in i)"default"!==a&&function(t){s.d(e,t,(function(){return i[t]}))}(a);var r,c=s("f0c5"),o=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"39bad82c",null,!1,n["a"],r);e["default"]=o.exports},eb24:function(t,e,s){"use strict";s.r(e);var n=s("1d91"),i=s("b40c");for(var a in i)"default"!==a&&function(t){s.d(e,t,(function(){return i[t]}))}(a);var r,c=s("f0c5"),o=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"410df0b3",null,!1,n["a"],r);e["default"]=o.exports},f0c5:function(t,e,s){"use strict";function n(t,e,s,n,i,a,r,c,o,u){var l,f="function"===typeof t?t.options:t;if(o){f.components||(f.components={});var _=Object.prototype.hasOwnProperty;for(var d in o)_.call(o,d)&&!_.call(f.components,d)&&(f.components[d]=o[d])}if(u&&((u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(f.mixins||(f.mixins=[])).push(u)),e&&(f.render=e,f.staticRenderFns=s,f._compiled=!0),n&&(f.functional=!0),a&&(f._scopeId="data-v-"+a),r?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},f._ssrRegister=l):i&&(l=c?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(f.functional){f._injectStyles=l;var v=f.render;f.render=function(t,e){return l.call(e),v(t,e)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:f}}s.d(e,"a",(function(){return n}))}},[["6056","app-config"]]]);
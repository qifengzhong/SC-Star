(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/emigrated/swiper-sticky-page"],{2283:function(t,e,n){"use strict";n.r(e);var a=n("ee07"),r=n("6e56");for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);n("cc74");var i,u=n("f0c5"),o=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"367ce8a4",null,!1,a["a"],i);e["default"]=o.exports},6532:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("406d"),r={props:{pid:{type:[Number,String],default:""},parentId:{type:String,default:""}},data:function(){return{scrollable:!0,dataList:[]}},created:function(){for(var t=a.emigrated[this.pid],e=0;e<t.length;e++)t[e].id=e+1;this.dataList=t},methods:{onclick:function(t){console.log("onclick")},loadData:function(){},clear:function(){this.dataList.length=0}}};e.default=r},"6e56":function(t,e,n){"use strict";n.r(e);var a=n("6532"),r=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);e["default"]=r.a},b42e:function(t,e,n){},cc74:function(t,e,n){"use strict";var a=n("b42e"),r=n.n(a);r.a},ee07:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement;t._self._c},c=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/emigrated/swiper-sticky-page-create-component',
    {
        'pages/emigrated/swiper-sticky-page-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2283"))
        })
    },
    [['pages/emigrated/swiper-sticky-page-create-component']]
]);

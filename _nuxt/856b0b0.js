(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{277:function(t,e,n){var map={"./bobby.jpg":278,"./hongkyung.jpg":279,"./kate.JPG":280,"./lauren.jpg":281,"./peniel.jpeg":282,"./taylor.png":283,"./wendy.jpg":284};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=277},278:function(t,e,n){t.exports=n.p+"img/bobby.1a88203.jpg"},279:function(t,e,n){t.exports=n.p+"img/hongkyung.b434b23.jpg"},280:function(t,e,n){t.exports=n.p+"img/kate.1e217f3.JPG"},281:function(t,e,n){t.exports=n.p+"img/lauren.c768a2e.jpg"},282:function(t,e,n){t.exports=n.p+"img/peniel.f63cb38.jpeg"},283:function(t,e,n){t.exports=n.p+"img/taylor.0ea95b8.png"},284:function(t,e,n){t.exports=n.p+"img/wendy.a89b3bc.jpg"},303:function(t,e,n){var content=n(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("4220a66a",content,!0,{sourceMap:!1})},328:function(t,e,n){"use strict";n(303)},329:function(t,e,n){var r=n(33)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.custom-text[data-v-a3a55364]{\n  word-break:keep-all\n}\n.back-yellow[data-v-a3a55364]{\n  background-color:#fbbf25\n}\n.box[data-v-a3a55364]{\n  width:150px;\n  height:150px;\n  border-radius:70%;\n  overflow:hidden\n}\n.profile[data-v-a3a55364]{\n  width:100%;\n  height:100%;\n  -o-object-fit:cover;\n     object-fit:cover\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},379:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("members",r.id).sortBy("name","asc").fetch();case 3:return o=e.sent,e.abrupt("return",{member:o});case 5:case"end":return e.stop()}}),e)})))()}}),c=(n(328),n(9)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-5 gap-x-5 gap-y-9 pb-24"},t._l(t.member,(function(e){return r("div",{key:e},[r("nuxt-link",{attrs:{to:{name:"id",params:{id:e.slug}}}},[r("div",{staticClass:"flex justify-center mb-5"},[r("div",{staticClass:"box"},[r("img",{staticClass:"profile",attrs:{src:n(277)("./"+e.img),alt:""}})])]),t._v(" "),r("div",[r("div",{staticClass:"text-xl flex justify-center poppins text-gray-800"},[t._v(t._s(e.name))]),t._v(" "),r("div",{staticClass:"text flex justify-center poppins text-gray-800"},[t._v(t._s(e.role))])])])],1)})),0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-52 pb-14 max-w-6xl mx-auto px-5"},[n("div",{staticClass:"pb-6 poppins text-7xl font-medium text-gray-800"},[t._v("\n            Members\n        ")])])}],!1,null,"a3a55364",null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[23,5,10],{273:function(t,e,n){var content=n(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("17ec4d76",content,!0,{sourceMap:!1})},274:function(t,e,n){"use strict";n(273)},275:function(t,e,n){var r=n(28)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.altfive[data-v-efecb3ac]{\n  height:1.35rem\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},276:function(t,e,n){"use strict";n.r(e);n(274);var r=n(9),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"w-auto md:block altfive",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"}})])}),[],!1,null,"efecb3ac",null);e.default=component.exports},278:function(t,e,n){var map={"./eunsol.jpg":281,"./hakyoung.jpg":282,"./heemin.jpg":283,"./ilgoo.jpg":284,"./jaehyoung.jpg":285,"./minjun.jpg":286,"./peniel.jpg":287,"./seokjoo.jpg":288,"./songgyeong.jpg":289,"./uhyeon.JPG":290};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=278},281:function(t,e,n){t.exports=n.p+"img/eunsol.8a0eeaf.jpg"},282:function(t,e,n){t.exports=n.p+"img/hakyoung.a7f4668.jpg"},283:function(t,e,n){t.exports=n.p+"img/heemin.c61b693.jpg"},284:function(t,e,n){t.exports=n.p+"img/ilgoo.39ec243.jpg"},285:function(t,e,n){t.exports=n.p+"img/jaehyoung.dcadcdc.jpg"},286:function(t,e,n){t.exports=n.p+"img/minjun.e7101cf.jpg"},287:function(t,e,n){t.exports=n.p+"img/peniel.aabf029.jpg"},288:function(t,e,n){t.exports=n.p+"img/seokjoo.6b400cd.jpg"},289:function(t,e,n){t.exports=n.p+"img/songgyeong.f86d17d.jpg"},290:function(t,e,n){t.exports=n.p+"img/uhyeon.2b5ad42.JPG"},301:function(t,e,n){"use strict";n.r(e);n(31),n(50);var r={props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,default:"https://gdsc-cau.github.io/opengraph_image.png"}},head:function(){return{meta:[{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.image},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._e()}),[],!1,null,null,null);e.default=component.exports},314:function(t,e,n){var content=n(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("74e9557b",content,!0,{sourceMap:!1})},339:function(t,e,n){"use strict";n(314)},340:function(t,e,n){var r=n(28)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.custom-text{\n  word-break:keep-all\n}\n.lead-box{\n  border-radius:70%;\n  overflow:hidden\n}\n.profile{\n  width:100%;\n  height:100%;\n  -o-object-fit:cover;\n     object-fit:cover\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},385:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(42),n(24),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("members",r.id).fetch();case 3:return o=e.sent,c=o.name,e.next=7,n("blog",r.slug).where({author:c}).only(["title","description","img","datetime","category","author","slug"]).sortBy("createdAt","desc").fetch();case 7:return l=e.sent,e.abrupt("return",{member:o,memberArticles:l,authorName:c});case 9:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.member.name,htmlAttrs:{lang:"ko"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"중앙대학교 Google DSC 블로그입니다. 활동 관련 소식, 공부 내용 등을 주기적으로 업로드합니다."},{name:"format-detection",content:"telephone=no"}],link:[{hid:"canonical",rel:"canonical",href:"https://gdsc-cau.github.io/".concat(this.$route.params.slug)}]}}}),c=(n(339),n(9)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full bg-gray-50"},[r("SocialHead",{attrs:{title:t.member.name,description:t.member.description,image:t.member.img}}),t._v(" "),r("div",{staticClass:"max-w-6xl mx-auto px-6 flex justify-center pt-28 md:pt-40"},[r("div",[r("div",{staticClass:"lead-box w-40 h-40 md:w-52 md:h-52 mb-4 md:mb-6 mx-auto"},[r("img",{staticClass:"profile",attrs:{src:n(278)("./"+t.member.img),alt:""}})]),t._v(" "),r("div",{staticClass:"text-gray-800 text-2xl md:text-3xl font-medium flex justify-center poppins pb-0 md:pb-1.5"},[t._v(t._s(t.member.name))]),t._v(" "),r("div",{staticClass:"flex justify-center poppins text-lg md:text-xl text-gray-800 pb-1.5 md:pb-3"},[t._v(t._s(t.member.role))]),t._v(" "),r("div",{staticClass:"text-gray-500 px-0 md:px-20 pb-4 flex justify-center text-center custom-text"},[t._v(t._s(t.member.description))])])]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"max-w-6xl grid grid-cols-1 colspan mt-5 md:mt-8 pb-14 md:pb-24 max-w-6xl mx-auto px-6"},t._l(t.memberArticles,(function(e){return r("div",{key:e,staticClass:"group"},[r("nuxt-link",{attrs:{to:{path:"/article/"+e.slug},replace:""}},[r("div",{staticClass:"article-inner flex justify-between items-center border-t py-5 md:py-8 border-gray-600"},[r("div",{staticClass:"pr-4"},[r("p",{staticClass:"mb-1 md:mb-1.5 text-sm md:text-sm text-gray-400"},[t._v(t._s(e.category)+" · "+t._s(e.author))]),t._v(" "),r("h2",{staticClass:"mb-1 md:mb-1.5 text-lg md:text-xl font-medium poppins text-gray-800"},[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:" text-sm md:text-base text-gray-600 custom-text"},[t._v(t._s(e.description))])]),t._v(" "),r("div",{staticClass:"pl-4 pr-6 hidden md:block"},[r("ExternalLinkLogo",{staticClass:"fill-current text-gray-400 group-hover:text-gray-700 transition duration-200"})],1)])])],1)})),0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-8 md:pt-16 flex justify-between items-center max-w-6xl mx-auto px-6"},[n("div",{staticClass:"text-2xl md:text-3xl text-gray-800 font-medium poppins"},[t._v("Articles")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SocialHead:n(301).default,ExternalLinkLogo:n(276).default})}}]);
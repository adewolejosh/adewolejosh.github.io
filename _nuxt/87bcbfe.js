(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{189:function(t,e,r){var content=r(197);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(69).default)("e834257e",content,!0,{sourceMap:!1})},196:function(t,e,r){"use strict";r(189)},197:function(t,e,r){var l=r(68)(!1);l.push([t.i,"#article-date[data-v-ed133316]{font-family:Montserrat,serif;font-style:italic}#article-title[data-v-ed133316]{font-family:Lora,sans-serif;font-weight:600}#headerz[data-v-ed133316]{font-family:Playfair Display}",""]),t.exports=l},227:function(t,e,r){"use strict";r.r(e);var l=r(2),n=(r(31),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("blog").only(["title","description","date","slug"]).sortBy("createdAt","desc").fetch();case 3:return l=e.sent,e.abrupt("return",{articles:l});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{title:null==this.title?"Josh's blog":"{this.title}"}},head:function(){return{title:this.title,meta:[{hid:"",name:"",content:"Welcome to my blog/personal space"}]}}}),c=(r(196),r(32)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row row-cols-1 row-cols-md-3 m-5"},[r("div",{staticClass:"col-md-2"}),t._v(" "),r("div",{staticClass:"col-md-8"},[r("nuxt-link",{attrs:{to:"/"}},[r("i",{staticClass:"fas fa-arrow-circle-left fa-2x text-dark"})]),t._v(" "),r("div",{staticClass:"mt-5 mb-5 me-5 ms-5"},[r("h4",{staticClass:"text-center mb-5",attrs:{id:"headerz"}},[t._v("Writings")]),t._v(" "),r("ul",[r("hr"),t._v(" "),t._l(t.articles,(function(article){return r("li",{key:article.slug,staticClass:"list-unstyled"},[r("div",{staticClass:"row rows-cols-1 row-cols-md-2"},[r("div",{staticClass:"col-md-8"},[r("NuxtLink",{staticClass:"text-dark text-decoration-none",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[r("h6",{attrs:{id:"article-title"}},[t._v(t._s(article.title))])])],1),t._v(" "),r("div",{staticClass:"col-md-4"},[r("time",{staticClass:"float-md-end",attrs:{id:"article-date"}},[t._v(t._s(article.date))])])]),t._v(" "),r("hr")])}))],2)])],1),t._v(" "),r("div",{staticClass:"col-md-2"})])}),[],!1,null,"ed133316",null);e.default=component.exports}}]);
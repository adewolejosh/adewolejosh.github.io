(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{295:function(t,e,r){var content=r(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(116).default)("397c2f10",content,!0,{sourceMap:!1})},303:function(t,e,r){"use strict";r(295)},304:function(t,e,r){var l=r(115)((function(i){return i[1]}));l.push([t.i,"#article-date[data-v-ed133316]{font-family:Montserrat,serif;font-style:italic}#article-title[data-v-ed133316]{font-family:Lora,sans-serif;font-weight:600}#headerz[data-v-ed133316]{font-family:Playfair Display}",""]),l.locals={},t.exports=l},335:function(t,e,r){"use strict";r.r(e);var l=r(9),n=(r(46),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("blog").only(["title","description","date","slug"]).sortBy("createdAt","desc").fetch();case 3:return l=e.sent,e.abrupt("return",{articles:l});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{title:null==this.title?"Josh's blog":"{this.title}"}},head:function(){return{title:this.title,meta:[{hid:"",name:"",content:"Welcome to my blog/personal space"}]}}}),c=(r(303),r(47)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"row row-cols-1 row-cols-md-3 m-5"},[e("div",{staticClass:"col-md-2"}),t._v(" "),e("div",{staticClass:"col-md-8"},[e("nuxt-link",{attrs:{to:"/"}},[e("i",{staticClass:"fas fa-arrow-circle-left fa-2x text-dark"})]),t._v(" "),e("div",{staticClass:"mt-5 mb-5 me-5 ms-5"},[e("h4",{staticClass:"text-center mb-5",attrs:{id:"headerz"}},[t._v("Writings")]),t._v(" "),e("ul",[e("hr"),t._v(" "),t._l(t.articles,(function(article){return e("li",{key:article.slug,staticClass:"list-unstyled"},[e("div",{staticClass:"row rows-cols-1 row-cols-md-2"},[e("div",{staticClass:"col-md-8"},[e("NuxtLink",{staticClass:"text-dark text-decoration-none",attrs:{to:{name:"blog-slug",params:{slug:article.slug}}}},[e("h6",{attrs:{id:"article-title"}},[t._v(t._s(article.title))])])],1),t._v(" "),e("div",{staticClass:"col-md-4"},[e("time",{staticClass:"float-md-end",attrs:{id:"article-date"}},[t._v(t._s(article.date))])])]),t._v(" "),e("hr")])}))],2)])],1),t._v(" "),e("div",{staticClass:"col-md-2"})])}),[],!1,null,"ed133316",null);e.default=component.exports}}]);
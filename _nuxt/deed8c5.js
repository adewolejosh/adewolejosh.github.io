(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{191:function(t,e,n){var content=n(203);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("72520070",content,!0,{sourceMap:!1})},200:function(t,e,n){var map={"./a-new-beginning.png":201};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=200},201:function(t,e,n){t.exports=n.p+"img/a-new-beginning.2830ff5.png"},202:function(t,e,n){"use strict";n(191)},203:function(t,e,n){var r=n(68)(!1);r.push([t.i,'.post-title{font-family:Lora,serif;font-weight:600}.post-date{font-family:Montserrat,sans-serif;font-style:italic}.post-quote{font-family:Libre Franklin;font-style:italic;font-size:.9rem}#post-img{pointer-events:none}.post-ref{font-family:Libre Franklin;font-size:.9rem}.nuxt-content h3{font-family:Playfair Display;margin-top:2rem}.nuxt-content p{font-family:Libre Franklin,sans-serif;text-align:justify;text-justify:inter-word}h7{font-size:.8rem}.nuxt-content blockquote{background:#f9f9f9;border-left:5px solid #ccc;margin:1.5em 10px;padding:.5em 20px;quotes:"\\201C""\\201D""\\2018""\\2019"}.nuxt-content blockquote:before{color:#ccc;font-size:4em;line-height:.1em;margin-right:.25em;vertical-align:-.4em}.nuxt-content blockquote p{display:inline;text-align:justify;font-family:Roboto;font-weight:300}.nuxt-content code{font-size:14px}',""]),t.exports=r},227:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(31),n(93),{data:function(){return{article:this.article}},computed:{readingTime:function(){var t=JSON.stringify(this.article).split(" ").length;return Math.ceil(t/200)}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("blog",r.slug).fetch();case 3:return article=e.sent,e.abrupt("return",{article:article});case 5:case"end":return e.stop()}}),e)})))()}}),l=(n(202),n(32)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("title",[t._v(t._s(t.article.title))]),t._v(" "),r("div",{staticClass:"row row-cols-1 row-cols-sm-3 m-5"},[r("div",{staticClass:"col-sm-2"}),t._v(" "),r("div",{staticClass:"col-sm-8"},[r("nuxt-link",{attrs:{to:"/blog"}},[r("i",{staticClass:"fas fa-arrow-circle-left fa-2x text-dark"})]),t._v(" "),r("div",{staticClass:"mt-5"},[r("div",{staticClass:"mt-5 mb-2"},[r("h3",{staticClass:"post-title font-weight-bold text-capitalize"},[t._v(t._s(t.article.title))]),t._v(" "),r("h6",{staticClass:"post-date"},[t._v(t._s(t.article.date))]),t._v(" "),r("div",{staticClass:"mt-3"},[r("h7",[t._v(t._s(t.readingTime)+" min read")])],1),t._v(" "),r("div",{staticClass:"mt-3"},t._l(t.article.tags,(function(e,n){return r("button",{key:n,staticClass:"btn btn-sm btn-outline-dark rounded-pill"},[t._v("\n                            "+t._s(e)+"\n                        ")])})),0)]),t._v(" "),r("hr"),t._v(" "),r("img",{staticClass:"d-flex mx-auto mt-5 mb-5 img-fluid",attrs:{src:n(200)("./"+t.article.img),alt:t.article.alt,id:"post-img"}}),t._v(" "),r("div",[r("p",{staticClass:"font-weight-lighter post-quote me-3 ms-3 text-center"},[t._v(t._s(t.article.quote))]),t._v(" "),r("p",{staticClass:"font-weight-lighter post-ref text-center"},[t._v(t._s(t.article.ref))])]),t._v(" "),r("nuxt-content",{staticClass:"text-justify ignore-css",attrs:{document:t.article}}),t._v(" "),r("hr",{staticClass:"mt-5"}),t._v(" "),t._m(0),t._v(" "),t._m(1)],1)],1),t._v(" "),r("div",{staticClass:"col-sm-2"})])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-copyright text-center"},[t._v("© 2021 Copyright:\n                    "),n("a",{staticClass:"text-dark text-decoration-none",attrs:{target:"_blank",href:"mailto:adewole.josh@gmail.com"}},[t._v("Joshua Adewole")]),t._v(" "),n("a",{staticClass:"text-dark text-decoration-none",attrs:{target:"_blank",href:"https://github.com/adewolejosh"}},[t._v("(adewolejosh)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("a",{attrs:{href:"https://github.com/adewolejosh/",target:"_blank"}},[n("i",{staticClass:"fab fa-github text-dark"})]),t._v(" "),n("a",{attrs:{href:"https://twitter.com/adewole_josh/",target:"_blank"}},[n("i",{staticClass:"fab fa-twitter p-3 text-dark"})]),t._v(" "),n("a",{attrs:{href:"https://www.linkedin.com/in/joshua-adewole/",target:"_blank"}},[n("i",{staticClass:"fab fa-linkedin-in text-dark"})])])}],!1,null,null,null);e.default=component.exports}}]);
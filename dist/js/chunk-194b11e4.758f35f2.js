(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-194b11e4"],{"19fe":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page page-landing"},[a("div",{staticClass:"page__inner"},[a("div",{ref:"logo",staticClass:"logo",style:t.logoCss}),a("h1",{ref:"title",staticClass:"title"},[t._v("Matthieu Blake")]),a("div",{ref:"actions",staticClass:"actions"},[a("div",{staticClass:"language"},[a("button",{ref:"lg",staticClass:"ll fr",class:{active:t.isFr},on:{click:t.setLangFR}},[a("span",[t._v("Français")])]),a("button",{ref:"lg2",staticClass:"ll en",class:{active:t.isEn},on:{click:t.setLangEN}},[a("span",[t._v("English")])])]),a("button",{ref:"button",staticClass:"button enter",on:{click:t.enter}},[t.isEn?a("span",[t._v("ENTER")]):a("span",[t._v("ENTRER")])]),a("a",{staticClass:"contect contact",attrs:{href:"mailto:matthieublake.cinema@gmail.com",target:"_blank",rel:"no-refer no-folow"}},[t._v("Contact")])])])])},i=[],n=(a("f4fb"),a("1209")),o=a("2f62"),l={data(){return{}},mounted(){this.lang="fr",localStorage.setItem("lang","fr")},computed:{...Object(o["b"])(["getLang"]),isFr(){return"fr"===this.getLang},isEn(){return"en"===this.getLang},logoCss(){let t=Math.floor(3*Math.random()+1);return{"background-image":`url('/img/kanji${t}.png')`}}},methods:{...Object(o["c"])(["setLang"]),enterAnim(t){window.app.next(0),Object(n["a"])({targets:this.$refs.logo,opacity:.8,loop:!1,elasticity:400,easing:"easeOutQuad",duration:800}),Object(n["a"])({targets:this.$refs.actions,opacity:1,loop:!1,elasticity:400,easing:"easeOutQuad",duration:700}),Object(n["a"])({targets:this.$refs.title,opacity:1,loop:!1,elasticity:400,easing:"easeOutQuad",delay:300,duration:1200,complete:e=>{t()}})},enter(){this.$router.push("/page/2")},setLangFR(){this.setLang("fr"),localStorage.setItem("lang","fr")},setLangEN(){this.setLang("en"),localStorage.setItem("lang","en")},leaveAnim(t){window.app.next(1),Object(n["a"])({targets:this.$refs.logo,opacity:0,loop:!1,elasticity:400,easing:"easeOutQuad",duration:800}),Object(n["a"])({targets:this.$refs.actions,opacity:0,loop:!1,elasticity:400,easing:"easeOutQuad",duration:700}),Object(n["a"])({targets:this.$refs.title,opacity:0,loop:!1,elasticity:400,easing:"easeOutQuad",delay:300,duration:500,complete:e=>{setTimeout(()=>{t()},1200)}})}}},r=l,c=(a("3774"),a("2877")),u=Object(c["a"])(r,s,i,!1,null,"6402db14",null);e["default"]=u.exports},3774:function(t,e,a){"use strict";var s=a("3c51"),i=a.n(s);i.a},"3c51":function(t,e,a){},f4fb:function(t,e){t.exports=function(t,e){e=e||{},t.normalize();var a=e.splitRegex,s=e.tagName||"span",i=null!=e.classPrefix?e.classPrefix:"char",n=1;function o(t){var e=t.parentNode,o=t.nodeValue,l=a?o.split(a):o,r=l.length,c=-1;while(++c<r){var u=document.createElement(s);i&&(u.className=i+n,n++),u.appendChild(document.createTextNode(l[c])),u.setAttribute("aria-hidden","true"),e.insertBefore(u,t)}""!==o.trim()&&e.setAttribute("aria-label",o),e.removeChild(t)}(function t(e){if(3===e.nodeType)return o(e);var a=Array.prototype.slice.call(e.childNodes),s=a.length;if(1===s&&3===a[0].nodeType)return o(a[0]);var i=-1;while(++i<s)t(a[i])})(t)}}}]);
//# sourceMappingURL=chunk-194b11e4.758f35f2.js.map
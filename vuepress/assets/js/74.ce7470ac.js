(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{253:function(t,s,i){},298:function(t,s,i){"use strict";var e=i(253);i.n(e).a},400:function(t,s,i){"use strict";i.r(s);var e={data:function(){return{errorMsg:"",width:"80%",height:"100px",log:{width:"",height:""}}},methods:{onChangeSize:function(){var t=parseInt(80*Math.random()+1,10)+"%",s=parseInt(151*Math.random()+50,10)+"px";this.width=t,this.height=s},onTransform:function(){this.$box.classList.contains("transfrom")?this.$box.classList.remove("transfrom"):this.$box.classList.add("transfrom")},observerCallback:function(t){var s=this;t.forEach(function(t){console.log(t),s.log=t.contentRect,s.$child.style.animationDuration=s.log.width/10+"s"})}},mounted:function(){"ResizeObserver"in window?(this.$box=document.querySelector(".js-box"),this.$child=this.$box.querySelector(".js-child"),new ResizeObserver(this.observerCallback).observe(this.$box)):this.errorMsg="您的浏览器不支持 ResizeObserver API"}},o=(i(298),i(1)),r=Object(o.a)(e,function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"resize-wrapper"},[""!=t.errorMsg?i("p",{staticClass:"txt-red"},[i("i",{staticClass:"el-icon-info"}),t._v(t._s(t.errorMsg)+"，请更新chrome浏览器查看。")]):i("div",{staticClass:"wrapper"},[i("div",{staticClass:"btns"},[i("button",{on:{click:t.onChangeSize}},[t._v("random")]),i("button",{on:{click:t.onTransform}},[t._v("transform")])]),i("p",[t._v("width:"+t._s(t.log.width)+"px "),i("br"),t._v(" height:"+t._s(t.log.height)+"px")]),i("div",{staticClass:"box js-box",style:{width:t.width,height:t.height}},[t._m(0)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"child js-child"},[s("i",{staticClass:"el-icon-star-on"})])}],!1,null,"39a058c6",null);s.default=r.exports}}]);
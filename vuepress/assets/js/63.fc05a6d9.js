(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{242:function(t,e,a){},287:function(t,e,a){"use strict";var n=a(242);a.n(n).a},391:function(t,e,a){"use strict";a.r(e);var n={data:function(){return{base:"",menuList:[],colorList:["#3498db","#95a5a6","#16a085","#74b9ff","#746D28","#e17055","#6ab04c","#0abde3","#519ABE","#DA3B01","#880515","#629F6A","#8BA077","#DE8CD9","#227093","#ffb142","#ff5252","#ffa801","#5761BF","#FF6161","#42A5F5","#2196F3","#FF6E40","#607D8B","#009688","#8e44ad","#0099BC","#6B69D6","#ff0061","#ce1554","#3FB568","#6D3BC6","#014e58","#024032","#040d5a","#2d755e","#65b948","#394BBB","#EA4440","#3041AF","#F9C43F","#A9EE59","#98ea8a","#D19640"]}},methods:{getRandomColor:function(){var t=Math.floor(Math.random()*this.colorList.length);return this.colorList[t]}},mounted:function(){var t=this;this.base=this.$site.base.substr(0,this.$site.base.lastIndexOf("/"));var e=this.$page.path,a=this.$site.pages||[];this.menuList=a.filter(function(t){return 0==t.path.indexOf(e)&&t.path!=e}),this.menuList.forEach(function(e){e.color=t.getRandomColor()})}},s=(a(287),a(1)),i=Object(s.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu-wrapper"},[t.menuList.length?a("ul",t._l(t.menuList,function(e){return a("li",{style:{backgroundColor:e.color||"#44A1BE"}},[a("a",{attrs:{href:t.base+e.path,target:"_blank"}},[t._v(t._s(e.title))])])})):a("p",[t._v("暂无")])])},[],!1,null,"3f6fd30e",null);e.default=i.exports}}]);
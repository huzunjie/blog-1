(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{342:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),a("p",[t._v("Photoshop中用钢笔工具勾出轮廓，转为选取，然后反选，删去多余部分，最后只留下要选择的区域，\n这一波操作想必是懂PS都非常熟悉的了，就像这样：")]),t._m(3),a("p",[t._v("在CSS3中也有思思功能的属性：clip-path。顾名思义：裁剪路径，\n该属性可以将方方正正的元素裁剪成几乎任何你想要的形状。")]),a("p",[t._v("今天就跟大家一块学习这一操作。")]),t._m(4),t._m(5),t._m(6),a("p",[t._v("矮马，看着是不是眼花缭乱的....下面就试着通过demo展开学一下~")]),t._m(7),t._m(8),a("p",[t._v("适应于SVG，即定义了clipPath的SVG元素")]),t._m(9),a("p",[t._v("SVG形状灵活，可以是各种不规则图形，甚至可以是文字，像这样：")]),t._m(10),a("p",[t._v("甚至这样：")]),t._m(11),a("p",[t._v("可跳到demo页查看。")]),a("spreadown",[a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"svg",src:"//codepen.io/_tianxia/embed/JZgWBN/?height=300&theme-id=33504&default-tab=css,result&embed-version=2",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/_tianxia/pen/JZgWBN/"}},[t._v("svg")]),t._v(" by Denzel ("),a("a",{attrs:{href:"https://codepen.io/_tianxia"}},[t._v("@_tianxia")]),t._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")]),a("show-in-codepen",{attrs:{href:"https://codepen.io/_tianxia/pen/JZgWBN/"}})],1),a("p",[t._v("SVG不太了解以后再好好学吧，熟悉SVG同学可以多试试其他的形状。")]),t._m(12),t._m(13),t._m(14),t._m(15),a("p",[t._v("inset()可以传入5个参数，分别对应top，right，bottom，left的裁剪位置，round radius（可选，圆角），参数之间用空格隔开。")]),a("p",[a("img",{attrs:{src:"http://pn4meizzc.bkt.clouddn.com/blog/clip005.png",alt:"small demo"}}),a("spreadown",[a("iframe",{staticStyle:{width:"100%"},attrs:{height:"310",scrolling:"no",title:"1",src:"//codepen.io/_tianxia/embed/dKxNgM/?height=310&theme-id=33504&default-tab=css,result&embed-version=2",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/_tianxia/pen/dKxNgM/"}},[t._v("1")]),t._v(" by Denzel ("),a("a",{attrs:{href:"https://codepen.io/_tianxia"}},[t._v("@_tianxia")]),t._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")]),a("show-in-codepen",{attrs:{href:"https://codepen.io/_tianxia/pen/dKxNgM/"}})],1)],1),t._m(16),a("p",[t._v("定义圆形")]),t._m(17),a("p",[t._v("circle()可以传人2个可选参数；")]),t._m(18),a("p",[t._v("半径公式：如果半径使用百分比：圆的半径 = (sqrt(width^2 + height^2) / sqrt(2)) * 百分比")]),a("p",[a("img",{attrs:{src:"http://pn4meizzc.bkt.clouddn.com/blog/clip006.png",alt:"small demo"}}),a("spreadown",[a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"2",src:"//codepen.io/_tianxia/embed/ZRgeKE/?height=300&theme-id=33504&default-tab=css,result&embed-version=2",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/_tianxia/pen/ZRgeKE/"}},[t._v("2")]),t._v(" by Denzel ("),a("a",{attrs:{href:"https://codepen.io/_tianxia"}},[t._v("@_tianxia")]),t._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")]),a("show-in-codepen",{attrs:{href:"https://codepen.io/_tianxia/pen/ZRgeKE/"}})],1)],1),t._m(19),a("p",[t._v("定义椭圆")]),t._m(20),a("p",[t._v("ellipse()可以传人3个可选参数；")]),t._m(21),a("p",[a("img",{attrs:{src:"http://pn4meizzc.bkt.clouddn.com/blog/clip007.png",alt:"small demo"}}),a("spreadown",[a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"3",src:"//codepen.io/_tianxia/embed/oyKZwW/?height=300&theme-id=33504&default-tab=css,result&embed-version=2",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/_tianxia/pen/oyKZwW/"}},[t._v("3")]),t._v(" by Denzel ("),a("a",{attrs:{href:"https://codepen.io/_tianxia"}},[t._v("@_tianxia")]),t._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")]),a("show-in-codepen",{attrs:{href:"https://codepen.io/_tianxia/pen/oyKZwW/"}})],1)],1),t._m(22),a("p",[t._v("定义多边形")]),t._m(23),t._m(24),a("p",[t._v("后面的每对参数表示多边形的顶点坐标（X,Y），也就是连接点")]),a("p",[a("img",{attrs:{src:"http://pn4meizzc.bkt.clouddn.com/blog/clip008.png",alt:"small demo"}}),a("spreadown",[a("iframe",{staticStyle:{width:"100%"},attrs:{height:"300",scrolling:"no",title:"polygon",src:"//codepen.io/_tianxia/embed/rKXyzV/?height=300&theme-id=33504&default-tab=css,result&embed-version=2",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[t._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/_tianxia/pen/rKXyzV/"}},[t._v("polygon")]),t._v(" by Denzel ("),a("a",{attrs:{href:"https://codepen.io/_tianxia"}},[t._v("@_tianxia")]),t._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".")]),a("show-in-codepen",{attrs:{href:"https://codepen.io/_tianxia/pen/rKXyzV/"}})],1)],1),t._m(25),a("p",[t._v("可选参数。此参数和basic-shape函数一起使用时，可以为basic-shape的裁剪工作提供参考盒子，其值可以使shape-box、fill、stroke或者view-box。")]),t._m(26),a("p",[t._v("好吧。。。浏览器暂未支持😂。")]),t._m(27),a("p",[t._v("照着老虎画了个猫😼——\n"),a("ClipPath-Demo")],1),t._m(28),t._m(29),t._m(30)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"css中的图像处理-——-clip-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css中的图像处理-——-clip-path","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS中的图像处理 —— clip-path")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{href:"https://denzel.netlify.com/css/clip_path.html?_=3566625361256782357",target:"_blank",rel:"noopener noreferrer"}},[this._v("原文链接")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://pn4meizzc.bkt.clouddn.com/clip004.png",alt:"不重要的图 small"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("有一个在线"),s("a",{attrs:{href:"http://bennettfeely.com/clippy",target:"_blank",rel:"noopener noreferrer"}},[this._v("神器")]),this._v("，学习之前先体验一下这个特性吧。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"基本语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本语法","aria-hidden":"true"}},[this._v("#")]),this._v(" 基本语法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("clip"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("clip"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("source"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("basic"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("shape"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("geometry"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("box"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" none\n\nwhere"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("clip"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("source"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("url"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("basic"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("shape"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token function"}},[t._v("inset")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token function"}},[t._v("circle")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token function"}},[t._v("ellipse")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token function"}},[t._v("polygon")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("geometry"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("box"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("shape"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("box"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" fill"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("box "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" stroke"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("box "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" view"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("box\n\nwhere"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("url"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" svg引用\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token function"}},[t._v("inset")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("inset")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("length"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("percentage"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" round "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("border"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("radius"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token function"}},[t._v("circle")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("circle")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("shape"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("radius"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" at "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("position"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token function"}},[t._v("ellipse")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ellipse")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("shape"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("radius"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" at "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("position"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token function"}},[t._v("polygon")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("polygon")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("fill"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("rule"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("length"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("percentage"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("length"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("percentage"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("# "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("shape"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("box"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("box"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" margin"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("box\n\nwhere"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("length"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("percentage"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("length"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("percentage"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("shape"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("radius"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("length"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("percentage"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" closest"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("side "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" farthest"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("side\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("position"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" left "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" center "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" right "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" top "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" center "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" bottom "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" left "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" center "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" right "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("length"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("percentage"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" top "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" center "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" bottom "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("length"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("percentage"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" left "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" right "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("length"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("percentage"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" top "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" bottom "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("length"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("percentage"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("fill"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("rule"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" nonzero "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" evenodd\n"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("box"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" border"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("box "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" padding"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("box "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" content"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("box\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("提示")]),s("p",[this._v("Demo说明：图片中的半透明是额外的元素，用来做参考的，实际的剪切效果中不会出现。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"clip-source"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clip-source","aria-hidden":"true"}},[this._v("#")]),this._v(" clip-source")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v("clip-path")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token url"}},[t._v("url(#c1)")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/*可以使本页的内联SVG*/")]),t._v("\n"),a("span",{attrs:{class:"token property"}},[t._v("clip-path")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token url"}},[t._v("url(resources.svg#c1)")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("/*还可以是远程的SVG*/")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://pn4meizzc.bkt.clouddn.com/clip010.png",alt:"small demo"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://pn4meizzc.bkt.clouddn.com/clip011.png",alt:"small demo"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"basic-shape"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-shape","aria-hidden":"true"}},[this._v("#")]),this._v(" basic-shape")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"inset"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inset","aria-hidden":"true"}},[this._v("#")]),this._v(" inset()")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("tip")]),s("p",[this._v("inset() : 定义一个矩形 。注意，定义矩形不是rect，而是 inset。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[this._v("inset( <length-percentage>")]),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("1,4"),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v(" [ round <border-radius> ]? "),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"circle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#circle","aria-hidden":"true"}},[this._v("#")]),this._v(" circle()")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("circle")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),this._v(" [ <shape-radius> ]? [ at <position> ]? "),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("圆的半径，默认值min(元素宽,元素高)/ 2，支持百分比")])]),s("li",[s("p",[this._v("圆心位置，默认为元素中心点")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"ellipse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ellipse","aria-hidden":"true"}},[this._v("#")]),this._v(" ellipse()")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[this._v("ellipse( [ <shape-radius>")]),s("span",{attrs:{class:"token punctuation"}},[this._v("{")]),this._v("2"),s("span",{attrs:{class:"token punctuation"}},[this._v("}")]),this._v(" ]? [ at <position> ]? "),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("椭圆的X轴半径，默认是宽度的一半，支持百分比")])]),s("li",[s("p",[this._v("椭圆的Y轴半径，默认是高度的一半，支持百分比")])]),s("li",[s("p",[this._v("椭圆中心位置，默认是元素的中心点")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"polygon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#polygon","aria-hidden":"true"}},[this._v("#")]),this._v(" polygon()")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("polygon")]),s("span",{attrs:{class:"token punctuation"}},[this._v("(")]),this._v(" <fill-rule>? , [ <length-percentage> <length-percentage> ]# "),s("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("fill-rule可选，表示填充规则，用来确定该多边形的内部。可能的值有nonzero和evenodd，默认值是nonzero。\n有点拓扑学的意思，详见"),s("a",{attrs:{href:"https://www.w3.org/TR/css-masking/#the-clip-rule",target:"_blank",rel:"noopener noreferrer"}},[this._v("这里")]),this._v("。\n(这个属性现在的浏览器还没支持)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"geometry-box"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#geometry-box","aria-hidden":"true"}},[this._v("#")]),this._v(" geometry-box")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("其中shape-box应用于HTML元素，它具有四种值：margin-box、border-box、padding-box和content-box；fill、stroke或者view-box应用于SVG。\n详见"),s("a",{attrs:{href:"https://www.w3.org/TR/css-masking/#typedef-geometry-box",target:"_blank",rel:"noopener noreferrer"}},[this._v("这里")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[this._v("#")]),this._v(" Demo")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("注意")]),s("p",[this._v("根据Masking规范，鼠标事件在图形的clipped-out区域外是无效的。")]),s("p",[this._v("因此demo中未剪切到的部分是不响应点击的。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://www.w3.org/TR/css-masking/#the-clip-path",target:"_blank",rel:"noopener noreferrer"}},[this._v("CSS Masking Module Level 1")])]),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path",target:"_blank",rel:"noopener noreferrer"}},[this._v("clip-path")])]),s("li",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000010936207",target:"_blank",rel:"noopener noreferrer"}},[this._v("不可思议的CSS之clip-path")])]),s("li",[s("a",{attrs:{href:"http://bennettfeely.com/clippy/",target:"_blank",rel:"noopener noreferrer"}},[this._v("CSS clip-path maker")])])])}],!1,null,null,null);s.default=n.exports}}]);
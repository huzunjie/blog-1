(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{362:function(t,e,n){"use strict";n.r(e);var s=n(1),a=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),n("p",[t._v("前几天想研究一下富文本编辑器，发现这玩意涉及的知识点和“坑”还真不少。\n谁知道在查阅资料时还有一些额外的收获😄 。")]),t._m(3),t._m(4),n("p",[t._v("很简单，一个只读的属性，返回true或false，表示页面元素是否可编辑。")]),t._m(5),t._m(6),t._m(7),n("p",[t._v("再用鼠标点一点页面，是不是发现了神奇的现象？！")]),t._m(8),t._m(9),t._m(10),n("p",[t._v("这家伙是一个CSS属性！但其功能不可小觑，是CSS版的contenteditable。")]),t._m(11),t._m(12),t._m(13),t._m(14),n("p",[t._v("前两个属性都存在很大的缺点，designMode是针对整个document的，对于想做到模块化的编辑器的实现是很难得，\nuser-modify的兼容性更是经不起太多的考验。")]),n("p",[t._v("那么就只剩下contenteditable了，这是大多数浏览器都能兼容的。")]),t._m(15),t._m(16),t._m(17),n("Editor-ContenteditableTest"),t._m(18),n("p",[t._v("只是蜻蜓点水般的介绍，具体细节没有深究。后续的文章会就与contenteditable有关的几个对象展开学习。")]),t._m(19),t._m(20)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"可编辑的页面——designmode、contenteditable和user-modify"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可编辑的页面——designmode、contenteditable和user-modify","aria-hidden":"true"}},[this._v("#")]),this._v(" 可编辑的页面——designMode、contenteditable和user-modify")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"https://denzel.netlify.com/js/editable_dom.html?_=5432542436436543",target:"_blank",rel:"noopener noreferrer"}},[this._v("原文链接")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 简介")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("于是，今天不谈富文本编辑器，而是一起学一下跟它相关的几个神奇的属性。\n或许好多同学跟我一样，还从没见过，它们分别是："),n("strong",[t._v("isContentEditable")]),t._v("、"),n("strong",[t._v("designMode")]),t._v("、"),n("strong",[t._v("user-modify")]),t._v("\n和几乎人人都知道的"),n("strong",[t._v("contenteditable")]),t._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"iscontenteditable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iscontenteditable","aria-hidden":"true"}},[this._v("#")]),this._v(" isContentEditable")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"designmode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#designmode","aria-hidden":"true"}},[this._v("#")]),this._v(" designMode")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("是document的一个全局开关，可读可写，有两个值：“on”、“off”，表示"),e("strong",[this._v("整个页面")]),this._v("是否可编辑。一般情况下，document.designMode返回是off。\n可以手动设置’开‘或者’关‘，不妨自己试一下，在console里输入:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[this._v("document"),e("span",{attrs:{class:"token punctuation"}},[this._v(".")]),this._v("designMode "),e("span",{attrs:{class:"token operator"}},[this._v("=")]),this._v(" "),e("span",{attrs:{class:"token string"}},[this._v("'on'")]),this._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("参考下图：\n"),e("img",{attrs:{src:"http://poijlzkaq.bkt.clouddn.com/blogeditable.gif",alt:"示意图"}}),this._v("\n整个页面都变成了可编辑状态。\n这时候，所有元素的isContentEditable属性都变成了true：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("document"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isContentEditable   "),n("span",{attrs:{class:"token comment"}},[t._v("//true")]),t._v("\ndocument"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isContentEditable   "),n("span",{attrs:{class:"token comment"}},[t._v("//true")]),t._v("\ndocument"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'#id'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isContentEditable   "),n("span",{attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"user-modify"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#user-modify","aria-hidden":"true"}},[this._v("#")]),this._v(" user-modify")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token property"}},[t._v("user-modify")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" read-only"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   //只读\n"),n("span",{attrs:{class:"token property"}},[t._v("user-modify")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" read-write"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  //读写，支持富文本\n"),n("span",{attrs:{class:"token property"}},[t._v("user-modify")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" write-only"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  //只写？！ 什么鬼，不知道啥意思\n"),n("span",{attrs:{class:"token property"}},[t._v("user-modify")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" read-write-plaintext-only"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  //读写，但只可输入文本\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("直接看张鑫旭大大的"),e("a",{attrs:{href:"http://www.zhangxinxu.com/study/201601/user-modify.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("Demo")]),this._v("吧。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("注意")]),e("p",[this._v("但这时候，isContentEditable是检测不到的该元素是否可编辑的")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"contenteditable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#contenteditable","aria-hidden":"true"}},[this._v("#")]),this._v(" contenteditable")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("contenteditable"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('""')]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v('//与contenteditable="true"效果一样')]),t._v("\ncontenteditable"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"events"')]),t._v("\ncontenteditable"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"caret"')]),t._v("\ncontenteditable"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"typing"')]),t._v("\ncontenteditable"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"plaintext-only"')]),t._v("  "),n("span",{attrs:{class:"token comment"}},[t._v("//可编辑，只允许纯文本")]),t._v("\ncontenteditable"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"true"')]),t._v("\t\t\t"),n("span",{attrs:{class:"token comment"}},[t._v("//可编辑，支持富文本")]),t._v("\ncontenteditable"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"false"')]),t._v("     "),n("span",{attrs:{class:"token comment"}},[t._v("//不可编辑")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('"events"、"caret"、"typing"看了半天'),e("a",{attrs:{href:"https://w3c.github.io/editing/contentEditable.html#contenteditable",target:"_blank",rel:"noopener noreferrer"}},[this._v("文档")]),this._v("也没搞清楚啥意思，而且貌似现在的浏览器也不支持。\n可以自己试下：点"),e("a",{attrs:{href:"http://www.w3school.com.cn/tiy/t.asp?f=html5_global_contenteditable",target:"_blank",rel:"noopener noreferrer"}},[this._v("这里")]),this._v("。有知道的大神还望指导一下下🙏 ~")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo","aria-hidden":"true"}},[this._v("#")]),this._v(" demo:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/isContentEditable",target:"_blank",rel:"noopener noreferrer"}},[this._v("HTMLElement.isContentEditable")])]),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/designMode",target:"_blank",rel:"noopener noreferrer"}},[this._v("Document.designMode")])]),e("li",[e("a",{attrs:{href:"https://w3c.github.io/editing/contentEditable.html#contenteditable",target:"_blank",rel:"noopener noreferrer"}},[this._v("ContentEditable")])]),e("li",[e("a",{attrs:{href:"http://www.zhangxinxu.com/wordpress/2016/01/contenteditable-plaintext-only/",target:"_blank",rel:"noopener noreferrer"}},[this._v("小tip: 如何让contenteditable元素只能输入纯文本")])])])}],!1,null,null,null);e.default=a.exports}}]);
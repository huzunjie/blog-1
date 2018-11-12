(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{315:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),n("p",[t._v("HTML5中和Web Speech相关的API实际上有两类，一类是“语音识别(Speech Recognition)”，另外一个就是“语音合成(Speech Synthesis)”，\n这两个名词实际上指的分别是“语音转文字”，和“文字变语音”。")]),n("p",[t._v("本文介绍的是语音合成(Speech Synthesis)，语音识别(Speech Recognition)请移步"),n("router-link",{attrs:{to:"speech_in_js_recognition.html"}},[t._v("另一篇")]),t._v("。")],1),n("p",[t._v("想要浏览器开口说话，只需要：")]),t._m(3),n("p",[t._v("就是这么简单，不妨copy进浏览器试一下？")]),n("p",[t._v("SpeechSynthesisUtterance主要用来构建语音合成实例，speechSynthesis大概用来触发浏览器语音模块，让浏览器把内容读出来。")]),n("p",[t._v("SpeechSynthesisUtterance实例有以下属性，可以通过设置一下属性调整发音。")]),t._m(4),n("p",[t._v("还有一下方法：")]),t._m(5),n("p",[t._v("speechSynthesis对象有以下方法：")]),t._m(6),n("p",[t._v("speechSynthesis.getVoices()返回因每个浏览器不同及版本的不同返回不太一样，大致是这样：")]),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),n("Speech-Synthesis"),n("p",[t._v("粗略测试，Mac下Chrome支持volume、pitch两个参数，语速rate不支持；Firefox和Safari对volume、rate和pitch三个参数都不支持。")]),n("p",[t._v("手机端试了IOS下的Chrome、UC和Safari，安卓的Chrome，竟然都完美支持😄 ！")]),n("p",[t._v("但是可能因为Google被墙的缘故，Chrome的语音功能很不稳定，Firefox和Safari反而比较稳定。")]),n("p",[t._v("多试几种其他语言，如日语(ja-JP)、粤语(zh-HK)、台湾话(zh-TW)等还是很有意思的😂 。前提是你的浏览器有这种语言包。")]),n("p",[t._v("奇怪的是汉语选择用英语(en-US)朗读的时候，返回的是一串听不太懂的男声，希望英语能力强的大神多多指教🙏 。")]),t._m(12),n("p",[t._v("以后支持问题改进了，能想到的用途还是不少的。")]),t._m(13),t._m(14),t._m(15)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"js中的语音合成——speech-synthesis-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js中的语音合成——speech-synthesis-api","aria-hidden":"true"}},[this._v("#")]),this._v(" JS中的语音合成——Speech Synthesis API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{href:"https://denzel.netlify.com/js/speech_in_js_synthesis.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("原文链接")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 简介")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" speechInstance "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("SpeechSynthesisUtterance")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'大家好，我是渣渣辉。'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nspeechSynthesis"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("speak")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("speechInstance"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("text – 要合成的文字内容，字符串。")]),s("li",[this._v('lang – 使用的语言，字符串， 例如："zh-cn"')]),s("li",[this._v("voiceURI – 指定希望使用的声音和服务，字符串。")]),s("li",[this._v("volume – 声音的音量，区间范围是0到1，默认是1。")]),s("li",[this._v("rate – 语速，数值，默认值是1，范围是0.1到10，表示语速的倍数，例如2表示正常语速的两倍。")]),s("li",[this._v("pitch – 表示说话的音高，数值，范围从0（最小）到2（最大）。默认值为1。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("onstart – 语音合成开始时候的回调。")]),s("li",[this._v("onpause – 语音合成暂停时候的回调。")]),s("li",[this._v("onresume – 语音合成重新开始时候的回调。")]),s("li",[this._v("onend – 语音合成结束时候的回调。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("speak() – 只能接收SpeechSynthesisUtterance作为唯一的参数，作用是读合成的话语。")]),s("li",[this._v("stop() – 立即终止合成过程。")]),s("li",[this._v("pause() – 暂停合成过程。")]),s("li",[this._v("resume() – 重新开始合成过程。")]),s("li",[this._v("getVoices() – 此方法不接受任何参数，用来返回浏览器支持的语音包列表，是个数组。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://p8rbt50i2.bkt.clouddn.com/blog/1111111.png",alt:"截图"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("注意")]),s("p",[this._v("语言包获取不稳定，有时候返回为空，可以用定时器多试几次。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"主要代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 主要代码")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("//vue 部分代码")]),t._v("\nmethods"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("onChange")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" chosenItem "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("voiceData"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("filter")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" e "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" item"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queryParams"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("voiceURI "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" chosenItem"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("voiceURI"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{attrs:{class:"token function"}},[t._v("onSpeak")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("speechInstance "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("SpeechSynthesisUtterance")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("keys")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queryParams"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("forEach")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("speechInstance"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("queryParams"),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("speechInstance"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        speechSynthesis"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("speak")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("speechInstance"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),n("span",{attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" timer "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("setInterval")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("!")]),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("voiceData"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token comment"}},[t._v("//获取语言包")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("voiceData "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" speechSynthesis"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getVoices")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token function"}},[t._v("clearInterval")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timer"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("500")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"试一下吧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#试一下吧","aria-hidden":"true"}},[this._v("#")]),this._v(" 试一下吧")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"能做什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#能做什么","aria-hidden":"true"}},[this._v("#")]),this._v(" 能做什么")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("盲人阅读")]),s("li",[this._v("翻译？可能还要结合语音识别功能")]),s("li",[this._v("结合前一篇的文字识别，识别出的文字再转化成语音就完美了")]),s("li",[this._v("等等")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance",target:"_blank",rel:"noopener noreferrer"}},[this._v("SpeechSynthesisUtterance")])]),s("li",[s("a",{attrs:{href:"http://www.zhangxinxu.com/wordpress/2017/01/html5-speech-recognition-synthesis-api/",target:"_blank",rel:"noopener noreferrer"}},[this._v("HTML5语音合成Speech Synthesis API简介")])])])}],!1,null,null,null);s.default=e.exports}}]);
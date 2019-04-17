(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{330:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"vue-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-code","aria-hidden":"true"}},[t._v("#")]),t._v(" vue code")]),n("h2",{attrs:{id:"new-vue-做了什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#new-vue-做了什么","aria-hidden":"true"}},[t._v("#")]),t._v(" new Vue() 做了什么")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("Vue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("_init")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),n("span",{attrs:{class:"token operator"}},[t._v("?")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Component "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// ...忽略，从第45行看起")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'production'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token comment"}},[t._v("// 作用域代理")]),t._v("\n        "),n("span",{attrs:{class:"token function"}},[t._v("initProxy")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_renderProxy "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// expose real self")]),t._v("\n    vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_self "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" vm\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 建立父子组件关系，在当前实例上添加一些属性和生命周期标识。如：$children、$refs、_isMounted等。")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initLifecycle")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v('// 用来存放除@hook:生命周期钩子名称="绑定的函数"事件的对象。如：$on、$emit等。')]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initEvents")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 初始化$slots、$attrs、$listeners")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initRender")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("callHook")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'beforeCreate'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 初始化inject 用于高阶组件，与provide配合使用")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initInjections")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 很多选项初始化的汇总，包括：props、methods、data、computed 和 watch 等。")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 此时才能访问到各种数据")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initState")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 初始化provide")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("initProvide")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),n("span",{attrs:{class:"token function"}},[t._v("callHook")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'created'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// ...忽略")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 挂载实例  此时才能访问到DOM节点")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("$mount")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$options"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("el"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("h2",{attrs:{id:"生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" 生命周期")]),n("ul",[n("li",[t._v("beforeCreate")]),n("li",[t._v("created")]),n("li",[t._v("beforeMount")]),n("li",[t._v("mounted")]),n("li",[t._v("beforeUpdate")]),n("li",[t._v("updated")]),n("li",[t._v("beforeDestroy")]),n("li",[t._v("destroyed")]),n("li",[t._v("不常用：\n"),n("ul",[n("li",[t._v("activated：keep-alive 组件激活的时候调用")]),n("li",[t._v("deactivated：keep-alive 组件停用的时候调用")]),n("li",[t._v("errorCaptured：2.5.0+，当捕获一个来自子孙组件的错误时被调用。")]),n("li",[t._v("serverPrefetch：2.6+，用来处理ssr的。允许我们在渲染过程中“等待”异步数据")])])])]),n("h2",{attrs:{id:"vue渲染的过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue渲染的过程","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue渲染的过程")]),n("p",[t._v("html字符串 → render函数 → vnode → 真实dom节点(template --\x3e AST --\x3e render Function --\x3e VNode --\x3e patch Dom)")]),n("h2",{attrs:{id:"nexttick"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nexttick","aria-hidden":"true"}},[t._v("#")]),t._v(" nextTick")]),n("p",[t._v("vue自己实现了一个时间循环队列，使用顺序：setImmediate --\x3e MessageChannel --\x3e Promise --\x3e setTimeout，在下一个tick统一执行队列中的回调(Watcher中的run)，拥有相同id的watcher不会重复加入队列，保证同一数据多次改变只刷新一次视图。"),n("a",{attrs:{href:"https://github.com/muwoo/blogs/issues/13",target:"_blank",rel:"noopener noreferrer"}},[t._v("1")])]),n("p",[t._v("源码分析\nhttps://juejin.im/user/5b0f4be36fb9a009f74bf263/posts\nhttps://github.com/muwoo/blogs")])])}],!1,null,null,null);s.default=e.exports}}]);
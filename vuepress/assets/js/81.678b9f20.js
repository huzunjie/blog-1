(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{256:function(e,t,a){},296:function(e,t,a){"use strict";var l=a(256);a.n(l).a},392:function(e,t,a){"use strict";a.r(t);var l={data:function(){return{queryParams:{width:100,count:3,gap:10,ruleWidth:3,ruleStyle:"solid",ruleColor:"#000",span:"all"},showDiv:!1}},computed:{style:function(){return{"column-width":this.queryParams.width+"px","column-count":this.queryParams.count,"column-gap":this.queryParams.gap+"px","column-rule-width":this.queryParams.ruleWidth+"px","column-rule-style":this.queryParams.ruleStyle,"column-rule-color":this.queryParams.ruleColor}},divStyle:function(){return{"column-span":this.queryParams.span}}}},r=(a(296),a(1)),s=Object(r.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"columns-wrapper"},[a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"col-content",style:e.style},[e._v("\n\t\t\tMy father was a self-taught mandolin player. He was one of the best string instrument players in our town. He could not read music, but if he heard a tune a few times, he could play it. When he was younger, "),e.showDiv?a("div",{staticClass:"span",staticStyle:{"text-align":"center","background-color":"#e74c3c",color:"#fff"},style:e.divStyle},[e._v("我是添加的div")]):e._e(),e._v("he was a member of a small country music band.\n\t\t\tThey would play at local dances and on a few occasions would play for the local radio station. \n\t\t\t"),a("img",{attrs:{src:"https://denzel.netlify.com/hero.gif",alt:""}}),e._v("\n\t\t\tHe often told us how he had auditioned and earned a position in a band that featured Patsy Cline as their lead singer. He told the family that after he was hired he never went back. Dad was a very religious man. He stated that there was a lot of drinking and cursing the day of his audition and he did not want to be around that type of environment.\n\t\t")]),a("hr"),a("div",{staticClass:"col-content",style:e.style},[e._v("\n\t\t\t我与父亲不相见已二年余了，我最不能忘记的是他的背影。那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子，我从北京到徐州，打算跟着父亲奔丧回家。到徐州见着父亲，看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说，“事已如此，不必难过，好在天无绝人之路！”\n\t\t\t"),a("img",{attrs:{src:"https://denzel.netlify.com/hero.gif",alt:""}}),e._v("\n\t\t\t回家变卖典质，父亲还了亏空；又借钱办了丧事。"),e.showDiv?a("div",{staticClass:"span",staticStyle:{"text-align":"center","background-color":"#e74c3c",color:"#fff"},style:e.divStyle},[e._v("我是添加的div")]):e._e(),e._v("这些日子，家中光景很是惨淡，一半为了丧事，一半为了父亲赋闲。丧事完毕，父亲要到南京谋事，我也要回北京念书，我们便同行。\n\t\t\t到南京时，有朋友约去游逛，勾留了一日；第二日上午便须渡江到浦口，下午上车北去。父亲因为事忙，本已说定不送我，叫旅馆里一个熟识的茶房陪我同去。他再三嘱咐茶房，甚是仔细。但他终于不放心，怕茶房不妥帖；颇踌躇了一会。其实我那年已二十岁，北京已来往过两三次，是没有甚么要紧的了。他踌躇了一会，终于决定还是自己送我去。我两三回劝他不必去；他只说，“不要紧，他们去不好！”\n\t\t")])]),a("hr"),a("div",{staticClass:"operate-wrapper"},[a("el-form",{attrs:{"label-width":"180px","label-position":"left"},model:{value:e.queryParams,callback:function(t){e.queryParams=t},expression:"queryParams"}},[a("el-form-item",{attrs:{label:"column-width(px):"}},[a("el-slider",{attrs:{min:0,max:400,step:10,"show-input":""},model:{value:e.queryParams.width,callback:function(t){e.$set(e.queryParams,"width",t)},expression:"queryParams.width"}})],1),a("el-form-item",{attrs:{label:"column-count:"}},[a("el-slider",{attrs:{min:0,max:10,step:1,"show-input":""},model:{value:e.queryParams.count,callback:function(t){e.$set(e.queryParams,"count",t)},expression:"queryParams.count"}})],1),a("el-form-item",{attrs:{label:"column-gap(px):"}},[a("el-slider",{attrs:{min:0,max:30,step:1,"show-input":""},model:{value:e.queryParams.gap,callback:function(t){e.$set(e.queryParams,"gap",t)},expression:"queryParams.gap"}})],1),a("el-form-item",{attrs:{label:"column-rule-width(px):"}},[a("el-slider",{attrs:{min:0,max:30,step:1,"show-input":""},model:{value:e.queryParams.ruleWidth,callback:function(t){e.$set(e.queryParams,"ruleWidth",t)},expression:"queryParams.ruleWidth"}})],1),a("el-form-item",{attrs:{label:"column-rule-style:"}},[a("el-select",{model:{value:e.queryParams.ruleStyle,callback:function(t){e.$set(e.queryParams,"ruleStyle",t)},expression:"queryParams.ruleStyle"}},[a("el-option",{attrs:{value:"solid",label:"solid"}}),a("el-option",{attrs:{value:"dotted",label:"dotted"}}),a("el-option",{attrs:{value:"dashed",label:"dashed"}}),a("el-option",{attrs:{value:"double",label:"double"}}),a("el-option",{attrs:{value:"groove",label:"groove"}})],1)],1),a("el-form-item",{attrs:{label:"column-rule-color:"}},[a("el-color-picker",{attrs:{"show-alpha":""},model:{value:e.queryParams.ruleColor,callback:function(t){e.$set(e.queryParams,"ruleColor",t)},expression:"queryParams.ruleColor"}})],1),a("el-form-item",{attrs:{label:"column-rule:"}},[a("span",[e._v(e._s(e.queryParams.ruleWidth)+"px "+e._s(e.queryParams.ruleStyle)+" "+e._s(e.queryParams.ruleColor))])]),a("el-form-item",{attrs:{label:"column-rule-color:"}},[a("el-checkbox",{model:{value:e.showDiv,callback:function(t){e.showDiv=t},expression:"showDiv"}},[e._v("添加一个div")])],1),e.showDiv?a("el-form-item",{attrs:{label:"div的column-span:"}},[a("el-select",{model:{value:e.queryParams.span,callback:function(t){e.$set(e.queryParams,"span",t)},expression:"queryParams.span"}},[a("el-option",{attrs:{value:"all",label:"all"}}),a("el-option",{attrs:{value:"none",label:"none"}})],1)],1):e._e()],1),a("pre",{staticClass:"language-css"},[e._v("\t\t\t.content "+e._s(e.style)+"\n\n\t\t\t.span "+e._s(e.divStyle)+"\n\t\t")])],1)])},[],!1,null,"00cb2524",null);t.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{244:function(e,t,a){},289:function(e,t,a){"use strict";var s=a(244);a.n(s).a},392:function(e,t,a){"use strict";a.r(t);var s={data:function(){return{voiceData:"undefined"!=typeof speechSynthesis&&speechSynthesis.getVoices(),queryParams:{voiceURI:"Ting-Ting",lang:"zh-CN",volume:1,pitch:1,rate:1,text:"大扎好，我西渣渣辉。"},speechInstance:null}},methods:{onChange:function(e){var t=this.voiceData.filter(function(t){return e==t.lang});this.queryParams.voiceURI=t[0].voiceURI},onSpeak:function(){var e=this;this.speechInstance=new SpeechSynthesisUtterance,Object.keys(this.queryParams).forEach(function(t){e.speechInstance[t]=e.queryParams[t]}),console.log(this.speechInstance),"undefined"!=typeof speechSynthesis&&speechSynthesis.speak(this.speechInstance)}},mounted:function(){var e=this,t=setInterval(function(){e.voiceData.length?clearInterval(t):e.voiceData="undefined"!=typeof speechSynthesis&&speechSynthesis.getVoices()},500)}},n=(a(289),a(1)),r=Object(n.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:!e.voiceData.length,expression:"!voiceData.length"}],staticClass:"speech-wrapper",attrs:{"element-loading-text":"加载语言包..."}},[a("el-form",{attrs:{"label-width":"90px","label-position":"left"},model:{value:e.queryParams,callback:function(t){e.queryParams=t},expression:"queryParams"}},[a("el-form-item",{attrs:{label:"文字:"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:6},placeholder:"想听啥？"},model:{value:e.queryParams.text,callback:function(t){e.$set(e.queryParams,"text",t)},expression:"queryParams.text"}})],1),a("el-form-item",{attrs:{label:"选择语言:"}},[a("el-select",{on:{change:e.onChange},model:{value:e.queryParams.lang,callback:function(t){e.$set(e.queryParams,"lang",t)},expression:"queryParams.lang"}},e._l(e.voiceData,function(e){return a("el-option",{key:e.voiceURI,attrs:{value:e.lang,label:e.lang}})}))],1),a("el-form-item",{attrs:{label:"声音:"}},[a("span",[e._v(e._s(e.queryParams.voiceURI))])]),a("el-form-item",{attrs:{label:"音量:"}},[a("el-slider",{attrs:{min:0,max:1,step:.1,"show-input":""},model:{value:e.queryParams.volume,callback:function(t){e.$set(e.queryParams,"volume",t)},expression:"queryParams.volume"}})],1),a("el-form-item",{attrs:{label:"语速:"}},[a("el-slider",{attrs:{min:0,max:10,step:1,"show-input":""},model:{value:e.queryParams.rate,callback:function(t){e.$set(e.queryParams,"rate",t)},expression:"queryParams.rate"}})],1),a("el-form-item",{attrs:{label:"音调:"}},[a("el-slider",{attrs:{min:0,max:2,step:.2,"show-input":""},model:{value:e.queryParams.pitch,callback:function(t){e.$set(e.queryParams,"pitch",t)},expression:"queryParams.pitch"}})],1),a("el-form-item",[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"功能不稳定，有可能没有声音，刷新几次试试？",placement:"top"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.onSpeak}},[e._v("朗读")])],1)],1)],1)],1)},[],!1,null,null,null);t.default=r.exports}}]);
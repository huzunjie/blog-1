(window.webpackJsonp=window.webpackJsonp||[]).push([[92,89],{266:function(t,i,n){},3:function(t,i,n){"use strict";n.r(i);var a={data:function(){return{canvas:null,canvasCtx:null,audioCtx:null,gainNode:null,analyser:null,scriptProcessor:null,canvasFillStyle:"rgb(225, 112, 85)"}},methods:{renderCanvas:function(){this.canvas=this.$refs.canvas,this.canvasCtx=this.canvas.getContext("2d");var t=this.$refs.analyser.offsetWidth;this.canvas.width=t,this.canvasCtx.fillStyle=this.canvasFillStyle},initAudioContext:function(){AudioContext||webkitAudioContext?this.audioCtx=new(AudioContext||webkitAudioContext):alert("您的浏览器不支持audioContext!")},initGain:function(){this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.value=1,this.gainNode.connect(this.audioCtx.destination)},initAnalyser:function(){this.analyser=this.audioCtx.createAnalyser(),this.analyser.fftSize=256,this.bufferLength=this.analyser.frequencyBinCount,this.dataArray=new Uint8Array(this.bufferLength)},initScriptProcessor:function(){this.scriptProcessor=this.audioCtx.createScriptProcessor(2048,1,1),this.analyser.connect(this.scriptProcessor),this.scriptProcessor.connect(this.audioCtx.destination)},bindDrawEvent:function(){this.scriptProcessor.onaudioprocess=this.draw},draw:function(){var t,i=this.canvas.width,n=this.canvas.height,a=parseInt(.5*i/this.bufferLength),e=0;this.canvasCtx.clearRect(0,0,i,n),this.analyser.getByteFrequencyData(this.dataArray);for(var s=0;s<this.bufferLength;s++)t=parseInt(.4*this.dataArray[s]),this.canvasCtx.fillRect(e,n-t,a,t),e+=a+3},init:function(){this.renderCanvas(),this.initAudioContext(),this.initAnalyser(),this.initGain(),this.initScriptProcessor()}},mounted:function(){var t=this;this.init(),window.onresize=function(){t.renderCanvas()}}},e=n(1),s=Object(e.a)(a,void 0,void 0,!1,null,null,null);i.default=s.exports},307:function(t,i,n){"use strict";var a=n(266);n.n(a).a},401:function(t,i,n){"use strict";n.r(i);var a={mixins:[n(3).default],data:function(){return{isMuted:!0,canvasFillStyle:"rgb(52, 152, 219)"}},methods:{initAudioSource:function(){var t=this;navigator.mediaDevices.getUserMedia({audio:!0}).then(function(i){t.audioSource=t.audioCtx.createMediaStreamSource(i),t.audioSource.connect(t.analyser),t.audioSource.connect(t.gainNode),t.bindDrawEvent()},function(t){alert("出错，请确保已允许浏览器获取音频权限")})},onMute:function(){this.gainNode.gain.value=0,this.isMuted=!0},onRestore:function(){this.gainNode.gain.value=1,this.isMuted=!1},initGain:function(){this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.value=0,this.gainNode.connect(this.audioCtx.destination)}},mounted:function(){this.init(),this.initAudioSource()}},e=(n(307),n(1)),s=Object(e.a)(a,function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"audio-wrapper"},[i("div",{ref:"analyser",staticClass:"analyser"},[i("canvas",{ref:"canvas",attrs:{width:"100%",height:"100"}})]),i("span",{staticClass:"title"},[this._v("点击说话 ")]),this.isMuted?i("el-button",{attrs:{size:"small",icon:"el-icon-phone-outline"},on:{click:this.onRestore}}):i("el-button",{attrs:{size:"small"},on:{click:this.onMute}},[this._v("静音")])],1)},[],!1,null,"62b8a20a",null);i.default=s.exports}}]);
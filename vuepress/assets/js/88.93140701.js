(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{3:function(t,i,n){"use strict";n.r(i);var s={data:function(){return{canvas:null,canvasCtx:null,audioCtx:null,gainNode:null,analyser:null,scriptProcessor:null,canvasFillStyle:"rgb(225, 112, 85)"}},methods:{renderCanvas:function(){this.canvas=this.$refs.canvas,this.canvasCtx=this.canvas.getContext("2d");var t=this.$refs.analyser.offsetWidth;this.canvas.width=t,this.canvasCtx.fillStyle=this.canvasFillStyle},initAudioContext:function(){AudioContext||webkitAudioContext?this.audioCtx=new(AudioContext||webkitAudioContext):alert("您的浏览器不支持audioContext!")},initGain:function(){this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.value=1,this.gainNode.connect(this.audioCtx.destination)},initAnalyser:function(){this.analyser=this.audioCtx.createAnalyser(),this.analyser.fftSize=256,this.bufferLength=this.analyser.frequencyBinCount,this.dataArray=new Uint8Array(this.bufferLength)},initScriptProcessor:function(){this.scriptProcessor=this.audioCtx.createScriptProcessor(2048,1,1),this.analyser.connect(this.scriptProcessor),this.scriptProcessor.connect(this.audioCtx.destination)},bindDrawEvent:function(){this.scriptProcessor.onaudioprocess=this.draw},draw:function(){var t,i=this.canvas.width,n=this.canvas.height,s=parseInt(.5*i/this.bufferLength),a=0;this.canvasCtx.clearRect(0,0,i,n),this.analyser.getByteFrequencyData(this.dataArray);for(var e=0;e<this.bufferLength;e++)t=parseInt(.4*this.dataArray[e]),this.canvasCtx.fillRect(a,n-t,s,t),a+=s+3},init:function(){this.renderCanvas(),this.initAudioContext(),this.initAnalyser(),this.initGain(),this.initScriptProcessor()}},mounted:function(){var t=this;this.init(),window.onresize=function(){t.renderCanvas()}}},a=n(1),e=Object(a.a)(s,void 0,void 0,!1,null,null,null);i.default=e.exports}}]);
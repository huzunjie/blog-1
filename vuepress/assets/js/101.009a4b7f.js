(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{280:function(t,i,n){},327:function(t,i,n){"use strict";var a=n(280);n.n(a).a},428:function(t,i,n){"use strict";n.r(i);var a={data:function(){return{FREQUENCY_LIST:[261.626,277.183,293.665,311.127,329.628,349.228,369.994,391.995,415.305,440,466.164,493.883],queryParams:{gain:.5,frequency:196,waveform:"sine"}}},methods:{init:function(){this.oscillator=this.audioCtx.createOscillator(),this.gainNode=this.audioCtx.createGain(),this.oscillator.type=this.queryParams.waveform,this.gainNode.gain.value=this.queryParams.gain,this.oscillator.connect(this.gainNode),this.gainNode.connect(this.audioCtx.destination)},onPlay:function(t){this.init(),this.oscillator.frequency.value=t,this.oscillator.start(this.audioCtx.currentTime),this.oscillator.stop(this.audioCtx.currentTime+.5)}},mounted:function(){AudioContext||webkitAudioContext?(this.audioCtx=new(AudioContext||webkitAudioContext),this.init()):alert("您的浏览器不支持audioContext!")}},o=(n(327),n(1)),e=Object(o.a)(a,function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"audio-wrapper"},[n("ul",{staticClass:"piano"},[t._l(t.FREQUENCY_LIST,function(i,a){return[n("li",1==a||3==a||6==a||8==a||10==a?{staticClass:"key black",on:{click:function(n){t.onPlay(i)}}}:{staticClass:"key white",on:{click:function(n){t.onPlay(i)}}})]})],2)])},[],!1,null,"c8e24eba",null);i.default=e.exports}}]);
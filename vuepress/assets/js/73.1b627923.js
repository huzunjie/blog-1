(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{261:function(t,a,i){},301:function(t,a,i){"use strict";var e=i(261);i.n(e).a},380:function(t,a,i){"use strict";i.r(a);var e={data:function(){return{exterbalUrl:"http://p8rbt50i2.bkt.clouddn.com/blog/else/miaoWechatIMG241526366731_.pic.jpg"}},methods:{pick:function(t,a){var i=t.layerX,e=t.layerY;i<25&&(i=25),i>275&&(i=275),e<25&&(e=25),e>275&&(e=275);var n=i-25,s=e-25;this.drawCanvas(this.img),this.showMagnifier(n,s),this.drawSampleFrame(n,s)},drawSampleFrame:function(t,a){this.ctx.fillRect(t,a,50,50),this.ctx.strokeRect(t,a,50,50)},onFileChange:function(t){var a=this,i=t.target.files[0],e=new Blob([i]),n=URL.createObjectURL(e),s=new Image;s.src=n,s.onload=function(){a.img=s,a.drawCanvas(s),URL.revokeObjectURL(n)}},drawCanvas:function(t){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(t,0,0,this.canvas.width,this.canvas.height)},onConfirmUrl:function(){var t=this,a=new Image;a.src=this.exterbalUrl,a.onload=function(){t.img=a,t.drawCanvas(a)}},showMagnifier:function(t,a){this.magnifierCtx.drawImage(this.canvas,t,a,50,50,0,0,this.magnifier.width,this.magnifier.height)}},mounted:function(){var t=this;this.canvas=this.$refs.canvas,this.magnifier=this.$refs.magnifier,this.ctx=this.canvas.getContext("2d"),this.magnifierCtx=this.magnifier.getContext("2d"),this.ctx.fillStyle="rgba(30, 144, 255, .5)",this.ctx.strokeStyle="#000",this.onConfirmUrl(),this.canvas.onmousemove=function(){t.pick(event,t.ctx)},this.canvas.onmouseout=function(){t.magnifierCtx.clearRect(0,0,t.magnifier.width,t.magnifier.height),t.drawCanvas(t.img)}}},n=(i(301),i(1)),s=Object(n.a)(e,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"pixelPick-wrapper"},[i("input",{attrs:{type:"file",name:""},on:{change:t.onFileChange}}),i("el-input",{attrs:{placeholder:"请输入图片url",size:"small",clearable:""},model:{value:t.exterbalUrl,callback:function(a){t.exterbalUrl=a},expression:"exterbalUrl"}},[i("el-button",{attrs:{slot:"append"},on:{click:t.onConfirmUrl},slot:"append"},[t._v("确定")])],1),i("div",{staticClass:"canvasWrapper"},[i("canvas",{ref:"canvas",attrs:{id:"canvas",width:"300",height:"300"}}),i("canvas",{ref:"magnifier",attrs:{id:"magnifier",width:"308",height:"308"}})])],1)},[],!1,null,"60a3ab81",null);a.default=s.exports}}]);
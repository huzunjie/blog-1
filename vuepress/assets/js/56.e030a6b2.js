(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{230:function(t,e,o){},271:function(t,e,o){"use strict";var n=o(230);o.n(n).a},387:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{errMsg:""}},methods:{onGetGeoLocation:function(){var t=this;if("undefined"!=typeof navigator&&"geolocation"in navigator){var e,o;navigator.geolocation.getCurrentPosition(function(n){console.log(n),t.errMsg="",e=[n.coords.longitude,n.coords.latitude],o=new AMap.Map("geolocation-container",{resizeEnable:!0,zoom:15,center:e}),new AMap.Marker({position:e,map:o})},function(t){console.log(t),errMsg=t.message||"出错"},{enableHighAccuracy:!1,maximumAge:1e4,timeout:3e4})}else alert("您的浏览器不支持定位")}}},a=(o(271),o(1)),i=Object(a.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"geolocation-wrapper"},[e("RemoteScript",{attrs:{src:"https://webapi.amap.com/maps?v=1.4.6&key=127225798a44ffd56967d469fe90b7da"}}),e("div",{staticClass:"btn"},[e("el-button",{attrs:{size:"small"},on:{click:this.onGetGeoLocation}},[this._v("获取我的位置")]),e("p",{staticClass:"color-red"},[this._v(this._s(this.errMsg))])],1),e("div",{attrs:{id:"geolocation-container"}})],1)},[],!1,null,null,null);e.default=i.exports}}]);
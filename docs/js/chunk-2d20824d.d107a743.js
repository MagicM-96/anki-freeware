(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20824d"],{a415:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",[n("h1",[t._v("Hier können die Daten exportiert werden")]),n("div",[n("v-btn",{attrs:{rounded:"","x-large":"",color:"primary",dark:""},on:{click:function(e){return t.export_data()}}},[t._v(" Export starten ")])],1)])},r=[],o={methods:{export_data:function(){var t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(JSON.stringify({data:this.$store.state.practises,pics:this.$store.state.pictures}))),t.setAttribute("download","data_".concat((new Date).toISOString(),".json")),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}}},i=o,d=n("2877"),c=n("6544"),s=n.n(c),u=n("8336"),l=n("f6c4"),p=Object(d["a"])(i,a,r,!1,null,null,null);e["default"]=p.exports;s()(p,{VBtn:u["a"],VMain:l["a"]})}}]);
//# sourceMappingURL=chunk-2d20824d.d107a743.js.map
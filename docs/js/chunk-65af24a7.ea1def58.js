(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65af24a7"],{a415:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",[n("h1",[t._v("Hier können die Daten exportiert & importiert werden")]),n("br"),n("div",[n("v-btn",{attrs:{rounded:"","x-large":"",color:"primary",dark:""},on:{click:function(e){return t.export_data()}}},[t._v(" Export starten ")])],1),n("br"),n("span",[n("div",{staticStyle:{width:"200px"}},[n("v-file-input",{ref:"fileupload",attrs:{accept:".json",label:"Importdatei wählen","append-icon":t.importIcon},on:{change:t.fileChange}})],1),n("div",[n("v-btn",{attrs:{rounded:"","x-large":"",color:"primary",dark:"",disabled:""===t.importFile},on:{click:function(e){return t.import_data()}}},[t._v(" Import starten ")])],1)]),t.loading?n("div",[n("v-img",{attrs:{src:i("cf1c"),"max-width":"45",height:"45"}}),n("p",[t._v(" Import is running . . . ")])],1):t._e()])},r=[],a=(i("159b"),i("b0c0"),{data:function(){return{importFile:"",importIcon:"",loading:!1}},methods:{export_data:function(){var t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(JSON.stringify({data:this.$store.state.practises,pics:this.$store.state.pictures}))),t.setAttribute("download","anki_freeware_data_".concat((new Date).toISOString(),".json")),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},fileChange:function(t){var e=this;if(t){this.importIcon="mdi-loading";var i=new FileReader;i.readAsText(t),i.onload=function(){return e.fileSuccess(JSON.parse(i.result))},i.onerror=function(t){return e.fileError(t)}}else this.importIcon="",this.importFile=""},fileSuccess:function(t){console.log(t),this.importFile=t,this.importIcon="mdi-checkbox-marked-circle"},fileError:function(t){this.importIcon="mdi-cancel",console.error(t)},import_data:function(){var t=this;if(""!==this.importFile&&window.confirm("Der Import überschreibt alle bestehenden Daten! Dieser Vorgang kann nicht rückgängig gemacht werden.\nFalls Daten vorhanden sind, sollte vorher ein Export durchgeführt werden!\nFortfahren?")){this.loading=!0;var e=this.importFile.pics,i=this.importFile.data;this.$store.commit("clearData"),i.forEach((function(i){t.$store.commit("createData",{name:i.name,entities:i.entities,picture:e[i.pic],id:i.pic})})),this.loading=!1}}}}),o=a,c=i("2877"),s=i("6544"),d=i.n(s),l=i("8336"),p=i("23a7"),m=i("adda"),u=i("f6c4"),h=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=h.exports;d()(h,{VBtn:l["a"],VFileInput:p["a"],VImg:m["a"],VMain:u["a"]})},cf1c:function(t,e,i){t.exports=i.p+"img/loading.cac6f4f6.gif"}}]);
//# sourceMappingURL=chunk-65af24a7.ea1def58.js.map
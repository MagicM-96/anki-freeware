(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa7aa"],{"10d9":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",[n("h1",[t._v("Hier können im Moment nur die Datensätze angesehen werden")]),n("h2",[t._v("Im Moment wird Datensatz "+t._s(t.currentIndex+1)+" von "+t._s(t.length)+" angezeigt!")]),n("div",[t._v(" Name: "+t._s(t.data[t.currentIndex].name)),n("br"),t._v(" Eigenschaften:"),n("br"),n("ul",t._l(t.data[t.currentIndex].entities,(function(e){return n("li",{key:e.name},[n("b",[t._v(t._s(e.name))]),t._v(": "+t._s(e.value))])})),0),t._v(" Bild:"),n("br"),n("img",{attrs:{src:t.pics[t.data[t.currentIndex].pic]}}),n("br")]),n("div",[n("v-btn",{attrs:{rounded:"","x-large":"",color:"primary",dark:""},on:{click:function(e){return t.next()}}},[t._v(" Nächster Datensatz ")])],1)])},a=[],s={name:"Practise",data:function(){return{pics:this.$store.state.pictures,data:this.$store.state.practises,length:this.$store.state.practises.length,currentIndex:Math.floor(Math.random()*this.$store.state.practises.length)}},methods:{next:function(){var t=this.currentIndex;do{this.currentIndex=Math.floor(Math.random()*this.length)}while(t===this.currentIndex)}}},i=s,c=n("2877"),d=n("6544"),o=n.n(d),u=n("8336"),h=n("f6c4"),l=Object(c["a"])(i,r,a,!1,null,null,null);e["default"]=l.exports;o()(l,{VBtn:u["a"],VMain:h["a"]})}}]);
//# sourceMappingURL=chunk-2d0aa7aa.2fb14bc1.js.map
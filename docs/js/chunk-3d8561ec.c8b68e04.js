(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d8561ec"],{"10d9":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.shuffledTasks?t.shuffledTasks&&0===t.tasks.length?i("v-main",[t._v(" Du hast keine Aufgaben mehr. Du kannst jetzt hier von vorne starten:"),i("br"),i("br"),i("v-btn",{attrs:{rounded:"","x-large":"",color:"primary",dark:""},on:{click:function(e){return t.resetPractises()}}},[t._v(" Neu starten ")])],1):i("v-main",[i("div",[i("h1",[t._v("Üben ist aktiv, derzeit "+t._s(t.tasks.length)+" Datensätze zum Üben ausgewählt")]),i("h2",[t._v("Was siehst Du hier?")]),i("img",{attrs:{src:t.pics[t.currentData.pic]}}),i("br"),i("b",[t._v("Name: ")]),t.entities>=1?i("span",[t._v(t._s(t.currentData.name))]):t._e(),i("br"),t.entities>=1?i("ul",t._l(t.visibleEntities,(function(e){return i("li",{key:e.name},[i("b",[t._v(t._s(e.name))]),t._v(": "+t._s(e.value))])})),0):t._e()]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"ma-2",attrs:{color:"primary",disabled:t.finish},on:{click:t.nextEntity}},"v-btn",s,!1),n),[t._v(" Weiter ")])]}}])},[i("span",[t._v("Deckt die aktuelle Eigenschaft auf und zeigt die nächste Eigenschaft an")])]),i("div",[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"ma-2",attrs:{color:"warning",disabled:!t.finish},on:{click:t.closeTask}},"v-btn",s,!1),n),[t._v(" Diese Übung abschließen ")])]}}])},[i("span",[t._v("Diese Übung wird nicht mehr erscheinen")])]),i("v-btn",{staticClass:"ma-2",attrs:{color:"primary",disabled:!t.finish},on:{click:t.nextPractise}},[t._v(" Nächste Übung ")]),i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"ma-2",attrs:{color:"success",disabled:!t.finish||t.data.length<=t.tasks.length+t.closed.length},on:{click:t.newPractise}},"v-btn",s,!1),n),[t._v(" Neue Übung ")])]}}])},[i("span",[t._v("Fügt eine neue Übung aus den erstellten Daten hinzu")])])],1),i("div",[i("b",[t._v("Informationen: ")]),i("br"),i("i",[t._v("Datensätze insgesamt: ")]),t._v(" "+t._s(t.data.length)),i("br"),i("i",[t._v("Datensätze im Übungspool: ")]),t._v(" "+t._s(t.tasks.length)),i("br"),i("i",[t._v("Datensätze offen: ")]),t._v(" "+t._s(t.open.length)),i("br"),i("i",[t._v("Datensätze abgeschlossen: ")]),t._v(" "+t._s(t.closed.length)),i("br"),i("i",[t._v("Dezeit aktiver Datensatz: ")]),t._v(" "+t._s(t.shuffledTasks[t.currentPractise])),i("br"),i("i",[t._v("Aktuelle Aufgabenreihenfolge: ")]),t._v(" "+t._s(t.shuffledTasks)),i("br")])],1):i("v-main",[i("h1",[t._v("Hier kann geübt werden")]),i("h2",[t._v("Zum Starten den Knopf drücken")]),i("div",[i("v-btn",{attrs:{rounded:"","x-large":"",color:"primary",dark:""},on:{click:function(e){return t.startPractise()}}},[t._v(" Übung starten ")])],1)])},s=[],a=(i("b0c0"),i("159b"),{name:"Practise",data:function(){return{pics:this.$store.state.pictures,data:this.$store.state.practises,shuffledTasks:void 0,entities:0,currentPractise:0}},computed:{tasks:function(){return this.$store.state.tasks},open:function(){return this.$store.state.open},closed:function(){return this.$store.state.closed},currentData:function(){return this.data[this.shuffledTasks[this.currentPractise]]},finish:function(){return this.entities>=this.currentData.entities.length+1},visibleEntities:function(){var t=[],e=0;while(e<this.entities-1)t.push({name:this.currentData.entities[e].name,value:this.currentData.entities[e].value}),e++;return e<this.currentData.entities.length&&t.push({name:this.currentData.entities[e].name,value:""}),t}},methods:{startPractise:function(t){this.currentPractise=0,this.entities=0;var e=t||10;while(this.tasks.length<e&&this.tasks.length+this.closed.length<this.data.length)this.addPractise();this.shuffledTasks=this.shuffle(this.tasks),console.log(this.shuffledTasks)},shuffle:function(t){var e,i,n,s;for(s=[],t.forEach((function(t){s.push(t)})),n=s.length-1;n>0;n--)e=Math.floor(Math.random()*(n+1)),i=s[n],s[n]=s[e],s[e]=i;return s},addPractise:function(){this.$store.commit("addTask")},nextEntity:function(){this.entities++},nextPractise:function(){this.currentPractise+1>=this.shuffledTasks.length?(alert("Du hast alle aktiven Übungen abgeschlossen, starte von vorne oder füge neue Aufgaben hinzu!"),this.startPractise(-1)):(this.currentPractise++,this.entities=0)},newPractise:function(){this.addPractise(),this.startPractise(-1)},closeTask:function(){if(confirm("Diese Übung wir nicht mehr angezeigt. Das kann nicht rückgängig gemacht werden!\nBist Du sicher?")){var t=this.shuffledTasks[this.currentPractise];this.$store.commit("closeTask",t),this.nextPractise()}},resetPractises:function(){this.$store.commit("resetPractises"),this.startPractise()}}}),o=a,r=i("2877"),c=i("6544"),h=i.n(c),u=i("8336"),l=i("f6c4"),d=i("ade3"),f=(i("a9e3"),i("9734"),i("53ca")),v=(i("caad"),i("b64b"),i("2b0e")),p=v["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var i=this;this.clearDelay();var n=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){i.isActive={open:!0,close:!1}[t]},n)}}}),m=i("f2e7"),g=i("58df"),b=i("80d2"),y=i("d9bd"),w=Object(g["a"])(p,m["a"]),A=w.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(f["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(b["k"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(y["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.getActivator().addEventListener(n,this.listeners[n])}}},genActivator:function(){var t=Object(b["j"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:"button","aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):e.click=function(e){var i=t.getActivator(e);i&&i.focus(),e.stopPropagation(),t.isActive=!t.isActive},this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){var e;if(this.activatorElement)return this.activatorElement;var i=null;if(this.activator){var n=this.internalActivator?this.$el:document;i="string"===typeof this.activator?n.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var s=this.activatorNode[0].componentInstance;i=s&&s.$options.mixins&&s.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?s.getActivator():this.activatorNode[0].elm}else t&&(i=t.currentTarget||t.target);return this.activatorElement=(null==(e=i)?void 0:e.nodeType)===Node.ELEMENT_NODE?i:null,this.activatorElement},getContentSlot:function(){return Object(b["j"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,i=t;e<i.length;e++){var n=i[e];this.activatorElement.removeEventListener(n,this.listeners[n])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}}),O=i("a9ad"),k=i("2909");function D(t){for(var e=[],i=0;i<t.length;i++){var n=t[i];n.isActive&&n.isDependent?e.push(n):e.push.apply(e,Object(k["a"])(D(n.$children)))}return e}var _=Object(g["a"])().extend({name:"dependent",data:function(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive:function(t){if(!t)for(var e=this.getOpenDependents(),i=0;i<e.length;i++)e[i].isActive=!1}},methods:{getOpenDependents:function(){return this.closeDependents?D(this.$children):[]},getOpenDependentElements:function(){for(var t=[],e=this.getOpenDependents(),i=0;i<e.length;i++)t.push.apply(t,Object(k["a"])(e[i].getClickableDependentElements()));return t},getClickableDependentElements:function(){var t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push.apply(t,Object(k["a"])(this.getOpenDependentElements())),t}}}),x=i("5530"),T=(i("d3b7"),i("fe6c")),E=(i("99af"),i("2532"),v["a"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(b["l"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,i=[this.stackMinZIndex,Object(b["l"])(e)],n=[].concat(Object(k["a"])(document.getElementsByClassName("v-menu__content--active")),Object(k["a"])(document.getElementsByClassName("v-dialog__content--active"))),s=0;s<n.length;s++)t.includes(n[s])||i.push(Object(b["l"])(n[s]));return Math.max.apply(Math,i)}}})),N=v["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(y["d"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}});function $(t){var e=Object(f["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}var j=Object(g["a"])(N).extend({name:"detachable",props:{attach:{default:!1,validator:$},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var i=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,i)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){try{if(this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content),this.activatorNode){var t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}}catch(e){console.log(e)}},methods:{getScopeIdAttrs:function(){var t=Object(b["i"])(this.$vnode,"context.$options._scopeId");return t&&Object(d["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(y["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}}),C=Object(g["a"])(E,T["a"],A,j),P=C.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),s=0;if(s+=this.left?i-(n-t.width):i,this.offsetX){var a=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));s+=this.left?-a:t.width}return this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),s},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset:function(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy:function(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(b["d"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(b["d"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.absoluteYOffset+e,n=this.dimensions.activator,s=this.dimensions.content.height,a=t+s,o=i<a;return o&&this.offsetOverflow&&n.top>s?t=this.pageYOffset+(n.top-s):o&&!this.allowOverflow?t=i-s-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=A.options.methods.genActivatorListeners.call(this),i=e.click;return e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(x["a"])({},this.dimensions.activator),content:Object(x["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){if(t.$refs.content){if(t.$refs.content.offsetParent){var i=t.getRoundedBoundedClientRect(t.$refs.content.offsetParent);t.relativeYOffset=window.pageYOffset+i.top,e.activator.top-=t.relativeYOffset,e.activator.left-=window.pageXOffset+i.left}e.content=t.measure(t.$refs.content)}t.dimensions=e}))}}}),L=Object(g["a"])(O["a"],p,_,P,m["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?e.offsetLeft:e.left,a=0;return this.top||this.bottom||n?a=s+e.width/2-i.width/2:(this.left||this.right)&&(a=s+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(a,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!1!==this.attach?e.offsetTop:e.top,s=0;return this.top||this.bottom?s=n+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=n+e.height/2-i.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(s+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(b["d"])(this.maxWidth),minWidth:Object(b["d"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(b["k"])(this,"activator",!0)&&Object(y["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=A.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===b["o"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(d["a"])(t,this.contentClass,!0),Object(d["a"])(t,"menuable__content__active",this.isActive),Object(d["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}}),S=Object(r["a"])(o,n,s,!1,null,null,null);e["default"]=S.exports;h()(S,{VBtn:u["a"],VMain:l["a"],VTooltip:L})},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("6b75");function s(t){if(Array.isArray(t))return Object(n["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function a(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var o=i("06c5");function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return s(t)||a(t)||Object(o["a"])(t)||r()}},9734:function(t,e,i){}}]);
//# sourceMappingURL=chunk-3d8561ec.c8b68e04.js.map
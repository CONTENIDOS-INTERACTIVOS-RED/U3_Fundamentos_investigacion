(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-701f12cf"],{"0433":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"linea-tiempo-c"},[i("div",{staticClass:"row flex-nowrap mx-0 linea-tiempo-c__header mb-4"},[i("div",{staticClass:"col-2 col-sm-auto px-0 me-sm-3"},[i("div",{staticClass:"linea-tiempo-c__header__btn--left",on:{click:function(e){t.selected=t.leftBtnId}}},[i("i",{staticClass:"fas fa-angle-left"})])]),i("div",{staticClass:"col-8 col-sm px-0"},[i("div",{staticClass:"row mx-0 flex-nowrap linea-tiempo-c__header__items"},[t.elements.length?i("ScrollHorizontal",{attrs:{selectedId:"ltc-header-"+(t.selected-1)}},t._l(t.elements,(function(e,s){return i("div",{key:"ltc-header-key-"+e.id,staticClass:"col-6 col-sm-4 px-0 linea-tiempo-c__header__item",class:t.itemClasses(e.id),attrs:{id:"ltc-header-"+e.id},on:{click:function(i){t.selected=e.id},mouseover:function(e){t.mostrarIndicador=!(t.mostrarIndicador&&s>=1)&&t.mostrarIndicador}}},[t.mostrarIndicador&&1===s?i("div",{staticClass:"indicador__container"},[i("div",{staticClass:"indicador--click indicador--sm"})]):t._e(),i("span",{staticClass:"linea-tiempo-c__header__item__year",class:{"text-small":t.textSmall},domProps:{innerHTML:t._s(e.titulo)}}),i("div",{staticClass:"linea-tiempo-c__header__item__line-container"},[i("div",{staticClass:"linea-tiempo-c__header__item__dot"})])])})),0):t._e()],1)]),i("div",{staticClass:"col-2 col-sm-auto px-0 ms-sm-3 d-flex justify-content-end"},[i("div",{staticClass:"linea-tiempo-c__header__btn--right",on:{click:function(e){t.selected=t.rightBtnId}}},[i("i",{staticClass:"fas fa-angle-right"})])])]),i("div",{staticClass:"linea-tiempo-c__content"},[t.elements.length?i("ScrollHorizontal",{attrs:{selectedId:"ltc-content-"+t.selected,"item-full-width":""}},t._l(t.elements,(function(t){return i("div",{directives:[{name:"child",rawName:"v-child",value:t.elm,expression:"item.elm"}],key:"ltc-content-key-"+t.id,staticClass:"linea-tiempo-c__content__item",attrs:{id:"ltc-content-"+t.id}})})),0):t._e(),i("div",{staticClass:"hidden-slot"},[t._t("default")],2)],1)])},n=[],l=i("f480"),a=i("a965"),o={name:"LineaTiempoC",components:{ScrollHorizontal:a["a"]},mixins:[l["a"]],props:{textSmall:{type:Boolean}},data:function(){return{headerSelected:0,mostrarIndicador:!0}},computed:{leftBtnId:function(){return this.selected-1===this.mainId?this.selected:this.selected-1},rightBtnId:function(){return this.selected+1===this.elements[this.elements.length-1].id+1?this.selected:this.selected+1}},watch:{elements:function(t,e){!e.length&&t.length&&(this.headerSelected=t[0].id)}},methods:{itemClasses:function(t){return[{"linea-tiempo-c__header__item--active":t===this.selected},{"linea-tiempo-c__header__item--before":t<this.selected},this.elements.length>6?"col-lg-2":"col-lg",this.elements.length>=4?"col-md-3":"col-md"]}}},r=o,c=i("2877"),d=Object(c["a"])(r,s,n,!1,null,null,null);e["default"]=d.exports},"4ab4":function(t,e,i){},"7db0":function(t,e,i){"use strict";var s=i("23e7"),n=i("b727").find,l=i("44d2"),a="find",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),s({target:"Array",proto:!0,forced:o},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),l(a)},a15b:function(t,e,i){"use strict";var s=i("23e7"),n=i("44ad"),l=i("fc6a"),a=i("a640"),o=[].join,r=n!=Object,c=a("join",",");s({target:"Array",proto:!0,forced:r||!c},{join:function(t){return o.call(l(this),void 0===t?",":t)}})},a965:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper"},[i("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":t.itemFullWidth},{row:t.row}],style:[{transform:"translate("+t.scrollVal+"px,0px)"}]},[t._t("default")],2)])},n=[],l=(i("7db0"),i("d3b7"),i("b64b"),i("d81d"),{name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1},row:{type:Boolean,default:!1}},data:function(){return{scrollVal:0,ids:[]}},watch:{selectedId:function(t){t.length&&this.scroll()}},mounted:function(){this.getCords(),this.scroll(),window.addEventListener("resize",this.scroll)},updated:function(){this.getCords()},beforeDestroy:function(){window.removeEventListener("resize",this.scroll)},methods:{scroll:function(){var t,e=this,i=null===(t=this.ids.find((function(t){return t.id===e.selectedId})))||void 0===t?void 0:t.id,s=document.getElementById(i);if(Object.keys(this.$slots.default).length&&this.selectedId.length&&null!==s){var n=this.$refs.hContainer,l=s.offsetWidth*this.ids.length,a=s.offsetLeft,o=n.offsetWidth/s.offsetWidth;o>1&&l-a<n.offsetWidth&&(a=l-n.offsetWidth),this.scrollVal=1===this.ids.length?0:-a}},getCords:function(){this.$slots.default&&(this.ids=this.$slots.default.map((function(t){return{id:t.elm.id,key:t.key}})))}}}),a=l,o=(i("a99e"),i("2877")),r=Object(o["a"])(a,s,n,!1,null,"b934bcc2",null);e["a"]=r.exports},a99e:function(t,e,i){"use strict";i("4ab4")},f480:function(t,e,i){"use strict";var s=i("5530");i("d81d"),i("a15b");e["a"]={data:function(){return{mainId:Math.floor(Math.random()*Math.pow(10,10)),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}},watch:{menuState:function(){this.domUpdated()}},created:function(){window.addEventListener("resize",this.domUpdated)},mounted:function(){var t=this;this.$nextTick((function(){t.crearElementos()}))},computed:{menuState:function(){return this.$store.getters.isMenuOpen},navObj:function(){if(!this.elements.length||!this.secuencial)return{};var t=this.elements.map((function(t){return t.id})),e=t.indexOf(this.selected);if(e<0)return{};var i={};return 0===e?i.next=t[e+1]:(e+1===t.length||(i.next=t[e+1]),i.back=t[e-1]),i}},beforeDestroy:function(){window.removeEventListener("resize",this.domUpdated)},updated:function(){var t=this;this.$nextTick((function(){t.getStateStr()!=t.stateStr&&t.crearElementos()}))},methods:{crearElementos:function(){var t=this;return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((function(e,i){var n=e.data&&e.data.attrs?e.data.attrs:[];return Object(s["a"])({id:t.mainId+i+1,elm:e.elm},n)})),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight:function(t){return this.$refs[t][0].scrollHeight+"px"},getStateStr:function(){return this.$slots.default.map((function(t){return t.elm.outerHTML})).join("")},domUpdated:function(){var t=this;this.rendered=!1,setTimeout((function(){t.rendered=!0}),100)}}}}}]);
//# sourceMappingURL=chunk-701f12cf.91112d04.js.map
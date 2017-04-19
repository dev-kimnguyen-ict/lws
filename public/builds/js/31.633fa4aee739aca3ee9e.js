webpackJsonp([31],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(578),
  /* template */
  __webpack_require__(766),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/charts/Peity.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Peity.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e71aba22", Component.options)
  } else {
    hotAPI.reload("data-v-e71aba22", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuePeity = __webpack_require__(770);

var _vuePeity2 = _interopRequireDefault(_vuePeity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Peity: _vuePeity2.default
  },

  data: function data() {
    return {
      data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 7, 3, 5, 2]
    };
  },


  computed: {
    lineData: function lineData() {
      return this.data.toString();
    }
  },

  created: function created() {
    var _this = this;

    setInterval(function () {
      // https://vuejs.org/guide/list.html#Mutation-Methods
      var random = Math.round(Math.random() * 10);
      _this.data.shift();
      _this.data.push(random);
    }, 1024);
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent is-3"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h4', {
    staticClass: "title"
  }, [_vm._v("Pie")]), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'pie',
      "data": '1/5'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'pie',
      "data": '226/360'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'pie',
      "data": '0.52/1.561'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'pie',
      "data": '1,4'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'pie',
      "data": '226,134'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'pie',
      "data": '0.52,1.041'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'pie',
      "data": '1,2,3,2,2'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-3"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h4', {
    staticClass: "title"
  }, [_vm._v("Donut")]), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'donut',
      "data": '1/5'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'donut',
      "data": '226/360'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'donut',
      "data": '0.52/1.561'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'donut',
      "data": '1,4'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'donut',
      "data": '226,134'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'donut',
      "data": '0.52,1.041'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'donut',
      "data": '1,2,3,2,2'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-3"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h4', {
    staticClass: "title"
  }, [_vm._v("Line")]), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'line',
      "data": '5,3,9,6,5,9,7,3,5,2'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'line',
      "data": '5,3,2,-1,-3,-2,2,3,5,2'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'line',
      "data": '0,-3,-6,-4,-5,-4,-7,-3,-5,-2'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-3"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h4', {
    staticClass: "title"
  }, [_vm._v("Bar")]), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'bar',
      "data": '5,3,9,6,5,9,7,3,5,2'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'bar',
      "data": '5,3,2,-1,-3,-2,2,3,5,2'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'bar',
      "data": '0,-3,-6,-4,-5,-4,-7,-3,-5,-2'
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent is-6"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_vm._m(0), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'donut',
      "options": {
        "fill": ["red", "#eeeeee"],
        "innerRadius": 10,
        "radius": 40
      },
      "data": '1/7'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'donut',
      "options": {
        "fill": ["orange", "#eeeeee"],
        "innerRadius": 14,
        "radius": 36
      },
      "data": '2/7'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'donut',
      "options": {
        "fill": ["yellow", "#eeeeee"],
        "innerRadius": 16,
        "radius": 32
      },
      "data": '3/7'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'donut',
      "options": {
        "fill": ["green", "#eeeeee"],
        "innerRadius": 18,
        "radius": 28
      },
      "data": '4/7'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'donut',
      "options": {
        "fill": ["blue", "#eeeeee"],
        "innerRadius": 20,
        "radius": 24
      },
      "data": '5/7'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'donut',
      "options": {
        "fill": ["indigo", "#eeeeee"],
        "innerRadius": 18,
        "radius": 20
      },
      "data": '6/7'
    }
  }), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'donut',
      "options": {
        "fill": ["violet", "#eeeeee"],
        "innerRadius": 15,
        "radius": 16
      },
      "data": '7/7'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-6"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h4', {
    staticClass: "title"
  }, [_vm._v("Updating")]), _vm._v(" "), _c('peity', {
    attrs: {
      "type": 'line',
      "options": {
        width: "50%"
      },
      "data": _vm.lineData
    }
  })], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h4', {
    staticClass: "title"
  }, [_vm._v("Options "), _c('strong', [_vm._v(":options=\"{}\"")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e71aba22", module.exports)
  }
}

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vue-peity v0.5.0
 * (c) 2016 Fangdun Cai <cfddream@gmail.com>
 * Released under the MIT License.
 */
!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VuePeity=e():t.VuePeity=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){var n,r;n=i(1);var s=i(6);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,t.exports=n},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(4),s=n(r),a=["line","bar","pie","donut"];e.default={props:{type:{type:String,required:!0,validator:function(t){return a.indexOf(t)>-1}},data:{type:String,required:!0},options:{type:Object,default:function(){return{}}}},data:function(){return{chart:null}},mounted:function(){this.chart=new s.default(this.$el,this.type,this.data,this.options),this.chart.draw()},watch:{data:function(t){var e=this;this.$nextTick(function(){e.chart.raw=t,e.chart.draw()})}}}},function(t,e){"use strict";t.exports={options:{delimiter:",",fill:["#4D89F9"],height:16,min:0,padding:.1,width:32},draw:function(t){for(var e=this.values(),i=Math.max.apply(Math,void 0===t.max?e:e.concat(t.max)),n=Math.min.apply(Math,void 0===t.min?e:e.concat(t.min)),r=this.prepare(t.width,t.height),s=r.getBoundingClientRect(),a=s.width,o=s.height,h=i-n,u=t.padding,l=this.fill(),c=this.x=function(t){return t*a/e.length},f=this.y=function(t){return o-(h?(t-n)/h*o:1)},p=0;p<e.length;p++){var d,v=c(p+u),g=c(p+1-u)-v,m=e[p],y=f(m),w=y,x=y;h?m<0?w=f(Math.min(i,0)):x=f(Math.max(n,0)):d=1,d=x-w,0===d&&(d=1,i>0&&h&&w--),r.appendChild(this.svgElement("rect",{fill:l.call(this,m,p,e),x:v,y:w,width:g,height:d}))}}}},function(t,e){"use strict";t.exports={options:{delimiter:",",fill:"#c6d9fd",height:16,min:0,stroke:"#4d89f9",strokeWidth:1,width:32},draw:function(t){var e=this.values();1===e.length&&e.push(e[0]);for(var i=Math.max.apply(Math,void 0===t.max?e:e.concat(t.max)),n=Math.min.apply(Math,void 0===t.min?e:e.concat(t.min)),r=this.prepare(t.width,t.height),s=r.getBoundingClientRect(),a=t.strokeWidth,o=s.width,h=s.height-a,u=i-n,l=this.x=function(t){return t*(o/(e.length-1))},c=this.y=function(t){var e=h;return u&&(e-=(t-n)/u*h),e+a/2},f=c(Math.max(n,0)),p=[0,f],d=0;d<e.length;d++)p.push(l(d),c(e[d]));p.push(o,f),t.fill&&r.appendChild(this.svgElement("polygon",{fill:t.fill,points:p.join(" ")})),a&&r.appendChild(this.svgElement("polyline",{fill:"none",points:p.slice(2,p.length-2).join(" "),stroke:t.stroke,"stroke-width":a,"stroke-linecap":"square"}))}}},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(2),a=i(3),o=i(5),h=function(t,e){var i=document.createElementNS("http://www.w3.org/2000/svg",t);for(var n in e)i.setAttribute(n,e[n]);return i},u=function(){function t(e,i,r,s){n(this,t),this.$el=e,this.type=i,this.raw=r,this.options=Object.assign({},t.defaults[this.type],s)}return r(t,[{key:"svgElement",value:function(){return h.apply(void 0,arguments)}},{key:"prepare",value:function(t,e){return this.$svg||(this.$el.style.display="none",this.$svg=h("svg",{class:"peity"}),this.$el.parentNode.insertBefore(this.$svg,this.$el)),this.$svg.innerHTML="",this.$svg.setAttribute("width",t),this.$svg.setAttribute("height",e),this.$svg}},{key:"fill",value:function(){var t=this.options.fill;return"function"==typeof t?t:function(e,i){return t[i%t.length]}}},{key:"draw",value:function(){t.graphers[this.type].call(this,this.options)}},{key:"values",value:function(){return this.raw.split(this.options.delimiter).map(function(t){return parseFloat(t)})}}]),t}();u.defaults={},u.graphers={},u.register=function(t,e){u.defaults[t]=e.options,u.graphers[t]=e.draw},u.register("bar",s),u.register("donut",o),u.register("line",a),u.register("pie",o),t.exports=u},function(t,e){"use strict";t.exports={options:{fill:["#ff9900","#fff4dd","#ffc66e"],radius:8},draw:function(t){if(!t.delimiter){var e=this.raw.match(/[^0-9\.]/);t.delimiter=e?e[0]:","}var i=this.values().map(function(t){return t>0?t:0});if("/"===t.delimiter){var n=i[0],r=i[1];i=[n,Math.max(0,r-n)]}for(var s=0,a=i.length,o=0;s<a;s++)o+=i[s];o||(a=2,o=1,i=[0,1]);var h=2*t.radius,u=this.prepare(t.width||h,t.height||h),l=u.getBoundingClientRect(),c=l.width,f=l.height,p=c/2,d=f/2,v=Math.min(p,d),g=t.innerRadius;"donut"!==this.type||g||(g=.5*v);var m=Math.PI,y=this.fill(),w=this.scale=function(t,e){var i=t/o*m*2-m/2;return[e*Math.cos(i)+p,e*Math.sin(i)+d]},x=0;for(s=0;s<a;s++){var M,b=i[s],k=b/o;if(0!==k){if(1===k)if(g){var $=p-.01,j=d-v,E=d-g;M=this.svgElement("path",{d:["M",p,j,"A",v,v,0,1,1,$,j,"L",$,E,"A",g,g,0,1,0,p,E].join(" ")})}else M=this.svgElement("circle",{cx:p,cy:d,r:v});else{var A=x+b,C=["M"].concat(w(x,v),"A",v,v,0,k>.5?1:0,1,w(A,v),"L");g?C=C.concat(w(A,g),"A",g,g,0,k>.5?1:0,0,w(x,g)):C.push(p,d),x+=b,M=this.svgElement("path",{d:C.join(" ")})}M.setAttribute("fill",y.call(this,b,s,i)),u.appendChild(M)}}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span")},staticRenderFns:[]}}])});

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NoYXJ0cy9QZWl0eS52dWUiLCJ3ZWJwYWNrOi8vL1BlaXR5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NoYXJ0cy9QZWl0eS52dWU/MDBhOCIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1wZWl0eS9kaXN0L3Z1ZS1wZWl0eS5taW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUE0RztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FDNENBOzs7Ozs7OztBQUtBO0FBSEE7O3dCQUlBOztzRUFHQTtBQUZBO0FBSUE7Ozs7a0NBRUE7dUJBQ0E7QUFHQTtBQUxBOzs7QUFNQTs7NEJBQ0E7QUFDQTs4Q0FDQTtpQkFDQTtzQkFDQTtPQUNBO0FBQ0E7QUF4QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEVBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHLDBEQUEwRDtBQUM3RCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3JPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5SUFBcUwsaUJBQWlCLG1CQUFtQixjQUFjLDRCQUE0QixZQUFZLFVBQVUsaUJBQWlCLGdFQUFnRSxTQUFTLCtCQUErQixrQkFBa0IsUUFBUSxPQUFPLFdBQVcsU0FBUyxpTEFBaUwsaUJBQWlCLGFBQWEsY0FBYywwQkFBMEIsV0FBVyxzQ0FBc0MsU0FBUyxFQUFFLGlEQUFpRCxXQUFXLE9BQU8sTUFBTSw4Q0FBOEMsd0JBQXdCLE9BQU8sd0JBQXdCLFVBQVUsK0JBQStCLFdBQVcsaUJBQWlCLE9BQU8sWUFBWSxvQkFBb0Isc0ZBQXNGLFFBQVEsaUJBQWlCLFdBQVcsMEJBQTBCLDZCQUE2QixLQUFLLGVBQWUsYUFBYSxXQUFXLFNBQVMsbUVBQW1FLGtCQUFrQiwrUUFBK1Esb0JBQW9CLHNCQUFzQix5QkFBeUIsS0FBSyxXQUFXLEtBQUssa0RBQWtELHFIQUFxSCxpREFBaUQsTUFBTSxlQUFlLGFBQWEsV0FBVyxTQUFTLHFGQUFxRixrQkFBa0Isb0JBQW9CLDJCQUEyQix1UEFBdVAsMEJBQTBCLHNCQUFzQixRQUFRLCtCQUErQixnQ0FBZ0MsV0FBVyx5QkFBeUIsNkRBQTZELCtCQUErQixnREFBZ0QsOEdBQThHLEtBQUssaUJBQWlCLGFBQWEsZ0JBQWdCLDhFQUE4RSxpQkFBaUIsZ0JBQWdCLFlBQVksV0FBVyxLQUFLLFdBQVcsK0dBQStHLHVCQUF1Qix3Q0FBd0Msd0NBQXdDLCtEQUErRCxzQ0FBc0MsU0FBUyxjQUFjLG9CQUFvQix5RUFBeUUsMEJBQTBCLGFBQWEsa0NBQWtDLGtDQUFrQyxFQUFFLGtDQUFrQyxvRUFBb0UsY0FBYywrSkFBK0osRUFBRSw0QkFBNEIsd0JBQXdCLDJDQUEyQyx1QkFBdUIsRUFBRSw0QkFBNEIsK0NBQStDLEVBQUUsOEJBQThCLDhEQUE4RCxxQkFBcUIsR0FBRyxLQUFLLEdBQUcsYUFBYSxjQUFjLDBCQUEwQiw2Q0FBNkMsZ0dBQWdHLGVBQWUsYUFBYSxXQUFXLFNBQVMsOENBQThDLGtCQUFrQixpQkFBaUIsaUNBQWlDLHVCQUF1QixvQ0FBb0MsZUFBZSxFQUFFLHNCQUFzQixrQkFBa0Isc0JBQXNCLDJCQUEyQixJQUFJLFlBQVkscUJBQXFCLHFKQUFxSixpQ0FBaUMsdURBQXVELGtCQUFrQix3Q0FBd0MsS0FBSyxRQUFRLElBQUksS0FBSyxtQkFBbUIsVUFBVSxlQUFlLHdCQUF3QiwwQkFBMEIsa0VBQWtFLEVBQUUsaUNBQWlDLGNBQWMsRUFBRSxLQUFLLGlFQUFpRSw0RkFBNEYsY0FBYyxFQUFFLCtEQUErRCxlQUFlLFdBQVcsa0JBQWtCLDhDQUE4QyxpQkFBaUIscUJBQXFCLEdBQUcsRSIsImZpbGUiOiJqcy8zMS42MzNmYTRhZWU3MzlhY2EzZWU5ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1BlaXR5LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZTcxYWJhMjJcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUGVpdHkudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY2hhcnRzL1BlaXR5LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFBlaXR5LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1lNzFhYmEyMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWU3MWFiYTIyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY2hhcnRzL1BlaXR5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMzEiLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtYW5jZXN0b3JcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudCBpcy0zXCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDQgY2xhc3M9XCJ0aXRsZVwiPlBpZTwvaDQ+XG4gICAgICAgICAgPHBlaXR5IDp0eXBlPVwiJ3BpZSdcIiA6ZGF0YT1cIicxLzUnXCI+PC9wZWl0eT5cbiAgICAgICAgICA8cGVpdHkgOnR5cGU9XCIncGllJ1wiIDpkYXRhPVwiJzIyNi8zNjAnXCI+PC9wZWl0eT5cbiAgICAgICAgICA8cGVpdHkgOnR5cGU9XCIncGllJ1wiIDpkYXRhPVwiJzAuNTIvMS41NjEnXCI+PC9wZWl0eT5cbiAgICAgICAgICA8cGVpdHkgOnR5cGU9XCIncGllJ1wiIDpkYXRhPVwiJzEsNCdcIj48L3BlaXR5PlxuICAgICAgICAgIDxwZWl0eSA6dHlwZT1cIidwaWUnXCIgOmRhdGE9XCInMjI2LDEzNCdcIj48L3BlaXR5PlxuICAgICAgICAgIDxwZWl0eSA6dHlwZT1cIidwaWUnXCIgOmRhdGE9XCInMC41MiwxLjA0MSdcIj48L3BlaXR5PlxuICAgICAgICAgIDxwZWl0eSA6dHlwZT1cIidwaWUnXCIgOmRhdGE9XCInMSwyLDMsMiwyJ1wiPjwvcGVpdHk+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50IGlzLTNcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveFwiPlxuICAgICAgICAgIDxoNCBjbGFzcz1cInRpdGxlXCI+RG9udXQ8L2g0PlxuICAgICAgICAgIDxwZWl0eSA6dHlwZT1cIidkb251dCdcIiA6ZGF0YT1cIicxLzUnXCI+PC9wZWl0eT5cbiAgICAgICAgICA8cGVpdHkgOnR5cGU9XCInZG9udXQnXCIgOmRhdGE9XCInMjI2LzM2MCdcIj48L3BlaXR5PlxuICAgICAgICAgIDxwZWl0eSA6dHlwZT1cIidkb251dCdcIiA6ZGF0YT1cIicwLjUyLzEuNTYxJ1wiPjwvcGVpdHk+XG4gICAgICAgICAgPHBlaXR5IDp0eXBlPVwiJ2RvbnV0J1wiIDpkYXRhPVwiJzEsNCdcIj48L3BlaXR5PlxuICAgICAgICAgIDxwZWl0eSA6dHlwZT1cIidkb251dCdcIiA6ZGF0YT1cIicyMjYsMTM0J1wiPjwvcGVpdHk+XG4gICAgICAgICAgPHBlaXR5IDp0eXBlPVwiJ2RvbnV0J1wiIDpkYXRhPVwiJzAuNTIsMS4wNDEnXCI+PC9wZWl0eT5cbiAgICAgICAgICA8cGVpdHkgOnR5cGU9XCInZG9udXQnXCIgOmRhdGE9XCInMSwyLDMsMiwyJ1wiPjwvcGVpdHk+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50IGlzLTNcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveFwiPlxuICAgICAgICAgIDxoNCBjbGFzcz1cInRpdGxlXCI+TGluZTwvaDQ+XG4gICAgICAgICAgPHBlaXR5IDp0eXBlPVwiJ2xpbmUnXCIgOmRhdGE9XCInNSwzLDksNiw1LDksNywzLDUsMidcIj48L3BlaXR5PlxuICAgICAgICAgIDxwZWl0eSA6dHlwZT1cIidsaW5lJ1wiIDpkYXRhPVwiJzUsMywyLC0xLC0zLC0yLDIsMyw1LDInXCI+PC9wZWl0eT5cbiAgICAgICAgICA8cGVpdHkgOnR5cGU9XCInbGluZSdcIiA6ZGF0YT1cIicwLC0zLC02LC00LC01LC00LC03LC0zLC01LC0yJ1wiPjwvcGVpdHk+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50IGlzLTNcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveFwiPlxuICAgICAgICAgIDxoNCBjbGFzcz1cInRpdGxlXCI+QmFyPC9oND5cbiAgICAgICAgICA8cGVpdHkgOnR5cGU9XCInYmFyJ1wiIDpkYXRhPVwiJzUsMyw5LDYsNSw5LDcsMyw1LDInXCI+PC9wZWl0eT5cbiAgICAgICAgICA8cGVpdHkgOnR5cGU9XCInYmFyJ1wiIDpkYXRhPVwiJzUsMywyLC0xLC0zLC0yLDIsMyw1LDInXCI+PC9wZWl0eT5cbiAgICAgICAgICA8cGVpdHkgOnR5cGU9XCInYmFyJ1wiIDpkYXRhPVwiJzAsLTMsLTYsLTQsLTUsLTQsLTcsLTMsLTUsLTInXCI+PC9wZWl0eT5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1hbmNlc3RvclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50IGlzLTZcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveFwiPlxuICAgICAgICAgIDxoNCBjbGFzcz1cInRpdGxlXCI+T3B0aW9ucyA8c3Ryb25nPjpvcHRpb25zPVwie31cIjwvc3Ryb25nPjwvaDQ+XG4gICAgICAgICAgPHBlaXR5IDp0eXBlPVwiJ2RvbnV0J1wiIDpvcHRpb25zPSd7IFwiZmlsbFwiOiBbXCJyZWRcIiwgXCIjZWVlZWVlXCJdLCBcImlubmVyUmFkaXVzXCI6IDEwLCBcInJhZGl1c1wiOiA0MCB9JyA6ZGF0YT1cIicxLzcnXCI+PC9wZWl0eT5cbiAgICAgICAgICA8cGVpdHkgOnR5cGU9XCInZG9udXQnXCIgOm9wdGlvbnM9J3sgXCJmaWxsXCI6IFtcIm9yYW5nZVwiLCBcIiNlZWVlZWVcIl0sIFwiaW5uZXJSYWRpdXNcIjogMTQsIFwicmFkaXVzXCI6IDM2IH0nIDpkYXRhPVwiJzIvNydcIj48L3BlaXR5PlxuICAgICAgICAgIDxwZWl0eSA6dHlwZT1cIidkb251dCdcIiA6b3B0aW9ucz0neyBcImZpbGxcIjogW1wieWVsbG93XCIsIFwiI2VlZWVlZVwiXSwgXCJpbm5lclJhZGl1c1wiOiAxNiwgXCJyYWRpdXNcIjogMzIgfScgOmRhdGE9XCInMy83J1wiPjwvcGVpdHk+XG4gICAgICAgICAgPHBlaXR5IDp0eXBlPVwiJ2RvbnV0J1wiIDpvcHRpb25zPSd7IFwiZmlsbFwiOiBbXCJncmVlblwiLCBcIiNlZWVlZWVcIl0sICBcImlubmVyUmFkaXVzXCI6IDE4LCBcInJhZGl1c1wiOiAyOCB9JyA6ZGF0YT1cIic0LzcnXCI+PC9wZWl0eT5cbiAgICAgICAgICA8cGVpdHkgOnR5cGU9XCInZG9udXQnXCIgOm9wdGlvbnM9J3sgXCJmaWxsXCI6IFtcImJsdWVcIiwgXCIjZWVlZWVlXCJdLCAgIFwiaW5uZXJSYWRpdXNcIjogMjAsIFwicmFkaXVzXCI6IDI0IH0nIDpkYXRhPVwiJzUvNydcIj48L3BlaXR5PlxuICAgICAgICAgIDxwZWl0eSA6dHlwZT1cIidkb251dCdcIiA6b3B0aW9ucz0neyBcImZpbGxcIjogW1wiaW5kaWdvXCIsIFwiI2VlZWVlZVwiXSwgXCJpbm5lclJhZGl1c1wiOiAxOCwgXCJyYWRpdXNcIjogMjAgfScgOmRhdGE9XCInNi83J1wiPjwvcGVpdHk+XG4gICAgICAgICAgPHBlaXR5IDp0eXBlPVwiJ2RvbnV0J1wiIDpvcHRpb25zPSd7IFwiZmlsbFwiOiBbXCJ2aW9sZXRcIiwgXCIjZWVlZWVlXCJdLCBcImlubmVyUmFkaXVzXCI6IDE1LCBcInJhZGl1c1wiOiAxNiB9JyA6ZGF0YT1cIic3LzcnXCI+PC9wZWl0eT5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1wYXJlbnQgaXMtNlwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94XCI+XG4gICAgICAgICAgPGg0IGNsYXNzPVwidGl0bGVcIj5VcGRhdGluZzwvaDQ+XG4gICAgICAgICAgPHBlaXR5IDp0eXBlPVwiJ2xpbmUnXCIgOm9wdGlvbnM9J3sgd2lkdGg6IFwiNTAlXCIgfScgOmRhdGE9XCJsaW5lRGF0YVwiPjwvcGVpdHk+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgUGVpdHkgZnJvbSAndnVlLXBlaXR5J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBQZWl0eVxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBbNSwgMywgOSwgNiwgNSwgOSwgNywgMywgNSwgMiwgNSwgMywgOSwgNiwgNSwgOSwgNywgMywgNSwgMl1cbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBsaW5lRGF0YSAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhLnRvU3RyaW5nKClcbiAgICB9XG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgLy8gaHR0cHM6Ly92dWVqcy5vcmcvZ3VpZGUvbGlzdC5odG1sI011dGF0aW9uLU1ldGhvZHNcbiAgICAgIGxldCByYW5kb20gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgIHRoaXMuZGF0YS5zaGlmdCgpXG4gICAgICB0aGlzLmRhdGEucHVzaChyYW5kb20pXG4gICAgfSwgMTAyNClcbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gUGVpdHkudnVlPzJjNGJmODc1IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWFuY2VzdG9yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnQgaXMtM1wiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiUGllXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwZWl0eScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6ICdwaWUnLFxuICAgICAgXCJkYXRhXCI6ICcxLzUnXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BlaXR5Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogJ3BpZScsXG4gICAgICBcImRhdGFcIjogJzIyNi8zNjAnXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BlaXR5Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogJ3BpZScsXG4gICAgICBcImRhdGFcIjogJzAuNTIvMS41NjEnXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BlaXR5Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogJ3BpZScsXG4gICAgICBcImRhdGFcIjogJzEsNCdcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygncGVpdHknLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiAncGllJyxcbiAgICAgIFwiZGF0YVwiOiAnMjI2LDEzNCdcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygncGVpdHknLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiAncGllJyxcbiAgICAgIFwiZGF0YVwiOiAnMC41MiwxLjA0MSdcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygncGVpdHknLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiAncGllJyxcbiAgICAgIFwiZGF0YVwiOiAnMSwyLDMsMiwyJ1xuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50IGlzLTNcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2g0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIkRvbnV0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwZWl0eScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6ICdkb251dCcsXG4gICAgICBcImRhdGFcIjogJzEvNSdcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygncGVpdHknLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiAnZG9udXQnLFxuICAgICAgXCJkYXRhXCI6ICcyMjYvMzYwJ1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdwZWl0eScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6ICdkb251dCcsXG4gICAgICBcImRhdGFcIjogJzAuNTIvMS41NjEnXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BlaXR5Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogJ2RvbnV0JyxcbiAgICAgIFwiZGF0YVwiOiAnMSw0J1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdwZWl0eScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6ICdkb251dCcsXG4gICAgICBcImRhdGFcIjogJzIyNiwxMzQnXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BlaXR5Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogJ2RvbnV0JyxcbiAgICAgIFwiZGF0YVwiOiAnMC41MiwxLjA0MSdcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygncGVpdHknLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiAnZG9udXQnLFxuICAgICAgXCJkYXRhXCI6ICcxLDIsMywyLDInXG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnQgaXMtM1wiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiTGluZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncGVpdHknLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiAnbGluZScsXG4gICAgICBcImRhdGFcIjogJzUsMyw5LDYsNSw5LDcsMyw1LDInXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BlaXR5Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogJ2xpbmUnLFxuICAgICAgXCJkYXRhXCI6ICc1LDMsMiwtMSwtMywtMiwyLDMsNSwyJ1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdwZWl0eScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6ICdsaW5lJyxcbiAgICAgIFwiZGF0YVwiOiAnMCwtMywtNiwtNCwtNSwtNCwtNywtMywtNSwtMidcbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudCBpcy0zXCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoNCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJCYXJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BlaXR5Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogJ2JhcicsXG4gICAgICBcImRhdGFcIjogJzUsMyw5LDYsNSw5LDcsMyw1LDInXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BlaXR5Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogJ2JhcicsXG4gICAgICBcImRhdGFcIjogJzUsMywyLC0xLC0zLC0yLDIsMyw1LDInXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BlaXR5Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogJ2JhcicsXG4gICAgICBcImRhdGFcIjogJzAsLTMsLTYsLTQsLTUsLTQsLTcsLTMsLTUsLTInXG4gICAgfVxuICB9KV0sIDEpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWFuY2VzdG9yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnQgaXMtNlwiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdwZWl0eScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6ICdkb251dCcsXG4gICAgICBcIm9wdGlvbnNcIjoge1xuICAgICAgICBcImZpbGxcIjogW1wicmVkXCIsIFwiI2VlZWVlZVwiXSxcbiAgICAgICAgXCJpbm5lclJhZGl1c1wiOiAxMCxcbiAgICAgICAgXCJyYWRpdXNcIjogNDBcbiAgICAgIH0sXG4gICAgICBcImRhdGFcIjogJzEvNydcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygncGVpdHknLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiAnZG9udXQnLFxuICAgICAgXCJvcHRpb25zXCI6IHtcbiAgICAgICAgXCJmaWxsXCI6IFtcIm9yYW5nZVwiLCBcIiNlZWVlZWVcIl0sXG4gICAgICAgIFwiaW5uZXJSYWRpdXNcIjogMTQsXG4gICAgICAgIFwicmFkaXVzXCI6IDM2XG4gICAgICB9LFxuICAgICAgXCJkYXRhXCI6ICcyLzcnXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BlaXR5Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogJ2RvbnV0JyxcbiAgICAgIFwib3B0aW9uc1wiOiB7XG4gICAgICAgIFwiZmlsbFwiOiBbXCJ5ZWxsb3dcIiwgXCIjZWVlZWVlXCJdLFxuICAgICAgICBcImlubmVyUmFkaXVzXCI6IDE2LFxuICAgICAgICBcInJhZGl1c1wiOiAzMlxuICAgICAgfSxcbiAgICAgIFwiZGF0YVwiOiAnMy83J1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdwZWl0eScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6ICdkb251dCcsXG4gICAgICBcIm9wdGlvbnNcIjoge1xuICAgICAgICBcImZpbGxcIjogW1wiZ3JlZW5cIiwgXCIjZWVlZWVlXCJdLFxuICAgICAgICBcImlubmVyUmFkaXVzXCI6IDE4LFxuICAgICAgICBcInJhZGl1c1wiOiAyOFxuICAgICAgfSxcbiAgICAgIFwiZGF0YVwiOiAnNC83J1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdwZWl0eScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6ICdkb251dCcsXG4gICAgICBcIm9wdGlvbnNcIjoge1xuICAgICAgICBcImZpbGxcIjogW1wiYmx1ZVwiLCBcIiNlZWVlZWVcIl0sXG4gICAgICAgIFwiaW5uZXJSYWRpdXNcIjogMjAsXG4gICAgICAgIFwicmFkaXVzXCI6IDI0XG4gICAgICB9LFxuICAgICAgXCJkYXRhXCI6ICc1LzcnXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3BlaXR5Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogJ2RvbnV0JyxcbiAgICAgIFwib3B0aW9uc1wiOiB7XG4gICAgICAgIFwiZmlsbFwiOiBbXCJpbmRpZ29cIiwgXCIjZWVlZWVlXCJdLFxuICAgICAgICBcImlubmVyUmFkaXVzXCI6IDE4LFxuICAgICAgICBcInJhZGl1c1wiOiAyMFxuICAgICAgfSxcbiAgICAgIFwiZGF0YVwiOiAnNi83J1xuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdwZWl0eScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6ICdkb251dCcsXG4gICAgICBcIm9wdGlvbnNcIjoge1xuICAgICAgICBcImZpbGxcIjogW1widmlvbGV0XCIsIFwiI2VlZWVlZVwiXSxcbiAgICAgICAgXCJpbm5lclJhZGl1c1wiOiAxNSxcbiAgICAgICAgXCJyYWRpdXNcIjogMTZcbiAgICAgIH0sXG4gICAgICBcImRhdGFcIjogJzcvNydcbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudCBpcy02XCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoNCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJVcGRhdGluZ1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncGVpdHknLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiAnbGluZScsXG4gICAgICBcIm9wdGlvbnNcIjoge1xuICAgICAgICB3aWR0aDogXCI1MCVcIlxuICAgICAgfSxcbiAgICAgIFwiZGF0YVwiOiBfdm0ubGluZURhdGFcbiAgICB9XG4gIH0pXSwgMSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnaDQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiT3B0aW9ucyBcIiksIF9jKCdzdHJvbmcnLCBbX3ZtLl92KFwiOm9wdGlvbnM9XFxcInt9XFxcIlwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1lNzFhYmEyMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWU3MWFiYTIyXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NoYXJ0cy9QZWl0eS52dWVcbi8vIG1vZHVsZSBpZCA9IDc2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDMxIiwiLyohXG4gKiB2dWUtcGVpdHkgdjAuNS4wXG4gKiAoYykgMjAxNiBGYW5nZHVuIENhaSA8Y2ZkZHJlYW1AZ21haWwuY29tPlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4hZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlZ1ZVBlaXR5PWUoKTp0LlZ1ZVBlaXR5PWUoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXtmdW5jdGlvbiBlKG4pe2lmKGlbbl0pcmV0dXJuIGlbbl0uZXhwb3J0czt2YXIgcj1pW25dPXtleHBvcnRzOnt9LGlkOm4sbG9hZGVkOiExfTtyZXR1cm4gdFtuXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyxlKSxyLmxvYWRlZD0hMCxyLmV4cG9ydHN9dmFyIGk9e307cmV0dXJuIGUubT10LGUuYz1pLGUucD1cIlwiLGUoMCl9KFtmdW5jdGlvbih0LGUsaSl7dmFyIG4scjtuPWkoMSk7dmFyIHM9aSg2KTtyPW49bnx8e30sXCJvYmplY3RcIiE9dHlwZW9mIG4uZGVmYXVsdCYmXCJmdW5jdGlvblwiIT10eXBlb2Ygbi5kZWZhdWx0fHwocj1uPW4uZGVmYXVsdCksXCJmdW5jdGlvblwiPT10eXBlb2YgciYmKHI9ci5vcHRpb25zKSxyLnJlbmRlcj1zLnJlbmRlcixyLnN0YXRpY1JlbmRlckZucz1zLnN0YXRpY1JlbmRlckZucyx0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4odCl7cmV0dXJuIHQmJnQuX19lc01vZHVsZT90OntkZWZhdWx0OnR9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPWkoNCkscz1uKHIpLGE9W1wibGluZVwiLFwiYmFyXCIsXCJwaWVcIixcImRvbnV0XCJdO2UuZGVmYXVsdD17cHJvcHM6e3R5cGU6e3R5cGU6U3RyaW5nLHJlcXVpcmVkOiEwLHZhbGlkYXRvcjpmdW5jdGlvbih0KXtyZXR1cm4gYS5pbmRleE9mKHQpPi0xfX0sZGF0YTp7dHlwZTpTdHJpbmcscmVxdWlyZWQ6ITB9LG9wdGlvbnM6e3R5cGU6T2JqZWN0LGRlZmF1bHQ6ZnVuY3Rpb24oKXtyZXR1cm57fX19fSxkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue2NoYXJ0Om51bGx9fSxtb3VudGVkOmZ1bmN0aW9uKCl7dGhpcy5jaGFydD1uZXcgcy5kZWZhdWx0KHRoaXMuJGVsLHRoaXMudHlwZSx0aGlzLmRhdGEsdGhpcy5vcHRpb25zKSx0aGlzLmNoYXJ0LmRyYXcoKX0sd2F0Y2g6e2RhdGE6ZnVuY3Rpb24odCl7dmFyIGU9dGhpczt0aGlzLiRuZXh0VGljayhmdW5jdGlvbigpe2UuY2hhcnQucmF3PXQsZS5jaGFydC5kcmF3KCl9KX19fX0sZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjt0LmV4cG9ydHM9e29wdGlvbnM6e2RlbGltaXRlcjpcIixcIixmaWxsOltcIiM0RDg5RjlcIl0saGVpZ2h0OjE2LG1pbjowLHBhZGRpbmc6LjEsd2lkdGg6MzJ9LGRyYXc6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXRoaXMudmFsdWVzKCksaT1NYXRoLm1heC5hcHBseShNYXRoLHZvaWQgMD09PXQubWF4P2U6ZS5jb25jYXQodC5tYXgpKSxuPU1hdGgubWluLmFwcGx5KE1hdGgsdm9pZCAwPT09dC5taW4/ZTplLmNvbmNhdCh0Lm1pbikpLHI9dGhpcy5wcmVwYXJlKHQud2lkdGgsdC5oZWlnaHQpLHM9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxhPXMud2lkdGgsbz1zLmhlaWdodCxoPWktbix1PXQucGFkZGluZyxsPXRoaXMuZmlsbCgpLGM9dGhpcy54PWZ1bmN0aW9uKHQpe3JldHVybiB0KmEvZS5sZW5ndGh9LGY9dGhpcy55PWZ1bmN0aW9uKHQpe3JldHVybiBvLShoPyh0LW4pL2gqbzoxKX0scD0wO3A8ZS5sZW5ndGg7cCsrKXt2YXIgZCx2PWMocCt1KSxnPWMocCsxLXUpLXYsbT1lW3BdLHk9ZihtKSx3PXkseD15O2g/bTwwP3c9ZihNYXRoLm1pbihpLDApKTp4PWYoTWF0aC5tYXgobiwwKSk6ZD0xLGQ9eC13LDA9PT1kJiYoZD0xLGk+MCYmaCYmdy0tKSxyLmFwcGVuZENoaWxkKHRoaXMuc3ZnRWxlbWVudChcInJlY3RcIix7ZmlsbDpsLmNhbGwodGhpcyxtLHAsZSkseDp2LHk6dyx3aWR0aDpnLGhlaWdodDpkfSkpfX19fSxmdW5jdGlvbih0LGUpe1widXNlIHN0cmljdFwiO3QuZXhwb3J0cz17b3B0aW9uczp7ZGVsaW1pdGVyOlwiLFwiLGZpbGw6XCIjYzZkOWZkXCIsaGVpZ2h0OjE2LG1pbjowLHN0cm9rZTpcIiM0ZDg5ZjlcIixzdHJva2VXaWR0aDoxLHdpZHRoOjMyfSxkcmF3OmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzKCk7MT09PWUubGVuZ3RoJiZlLnB1c2goZVswXSk7Zm9yKHZhciBpPU1hdGgubWF4LmFwcGx5KE1hdGgsdm9pZCAwPT09dC5tYXg/ZTplLmNvbmNhdCh0Lm1heCkpLG49TWF0aC5taW4uYXBwbHkoTWF0aCx2b2lkIDA9PT10Lm1pbj9lOmUuY29uY2F0KHQubWluKSkscj10aGlzLnByZXBhcmUodC53aWR0aCx0LmhlaWdodCkscz1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGE9dC5zdHJva2VXaWR0aCxvPXMud2lkdGgsaD1zLmhlaWdodC1hLHU9aS1uLGw9dGhpcy54PWZ1bmN0aW9uKHQpe3JldHVybiB0KihvLyhlLmxlbmd0aC0xKSl9LGM9dGhpcy55PWZ1bmN0aW9uKHQpe3ZhciBlPWg7cmV0dXJuIHUmJihlLT0odC1uKS91KmgpLGUrYS8yfSxmPWMoTWF0aC5tYXgobiwwKSkscD1bMCxmXSxkPTA7ZDxlLmxlbmd0aDtkKyspcC5wdXNoKGwoZCksYyhlW2RdKSk7cC5wdXNoKG8sZiksdC5maWxsJiZyLmFwcGVuZENoaWxkKHRoaXMuc3ZnRWxlbWVudChcInBvbHlnb25cIix7ZmlsbDp0LmZpbGwscG9pbnRzOnAuam9pbihcIiBcIil9KSksYSYmci5hcHBlbmRDaGlsZCh0aGlzLnN2Z0VsZW1lbnQoXCJwb2x5bGluZVwiLHtmaWxsOlwibm9uZVwiLHBvaW50czpwLnNsaWNlKDIscC5sZW5ndGgtMikuam9pbihcIiBcIiksc3Ryb2tlOnQuc3Ryb2tlLFwic3Ryb2tlLXdpZHRoXCI6YSxcInN0cm9rZS1saW5lY2FwXCI6XCJzcXVhcmVcIn0pKX19fSxmdW5jdGlvbih0LGUsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9dmFyIHI9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7Zm9yKHZhciBpPTA7aTxlLmxlbmd0aDtpKyspe3ZhciBuPWVbaV07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4ua2V5LG4pfX1yZXR1cm4gZnVuY3Rpb24oZSxpLG4pe3JldHVybiBpJiZ0KGUucHJvdG90eXBlLGkpLG4mJnQoZSxuKSxlfX0oKSxzPWkoMiksYT1pKDMpLG89aSg1KSxoPWZ1bmN0aW9uKHQsZSl7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIix0KTtmb3IodmFyIG4gaW4gZSlpLnNldEF0dHJpYnV0ZShuLGVbbl0pO3JldHVybiBpfSx1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdChlLGkscixzKXtuKHRoaXMsdCksdGhpcy4kZWw9ZSx0aGlzLnR5cGU9aSx0aGlzLnJhdz1yLHRoaXMub3B0aW9ucz1PYmplY3QuYXNzaWduKHt9LHQuZGVmYXVsdHNbdGhpcy50eXBlXSxzKX1yZXR1cm4gcih0LFt7a2V5Olwic3ZnRWxlbWVudFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGguYXBwbHkodm9pZCAwLGFyZ3VtZW50cyl9fSx7a2V5OlwicHJlcGFyZVwiLHZhbHVlOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuJHN2Z3x8KHRoaXMuJGVsLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsdGhpcy4kc3ZnPWgoXCJzdmdcIix7Y2xhc3M6XCJwZWl0eVwifSksdGhpcy4kZWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy4kc3ZnLHRoaXMuJGVsKSksdGhpcy4kc3ZnLmlubmVySFRNTD1cIlwiLHRoaXMuJHN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLHQpLHRoaXMuJHN2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIixlKSx0aGlzLiRzdmd9fSx7a2V5OlwiZmlsbFwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5vcHRpb25zLmZpbGw7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdD90OmZ1bmN0aW9uKGUsaSl7cmV0dXJuIHRbaSV0Lmxlbmd0aF19fX0se2tleTpcImRyYXdcIix2YWx1ZTpmdW5jdGlvbigpe3QuZ3JhcGhlcnNbdGhpcy50eXBlXS5jYWxsKHRoaXMsdGhpcy5vcHRpb25zKX19LHtrZXk6XCJ2YWx1ZXNcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJhdy5zcGxpdCh0aGlzLm9wdGlvbnMuZGVsaW1pdGVyKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHBhcnNlRmxvYXQodCl9KX19XSksdH0oKTt1LmRlZmF1bHRzPXt9LHUuZ3JhcGhlcnM9e30sdS5yZWdpc3Rlcj1mdW5jdGlvbih0LGUpe3UuZGVmYXVsdHNbdF09ZS5vcHRpb25zLHUuZ3JhcGhlcnNbdF09ZS5kcmF3fSx1LnJlZ2lzdGVyKFwiYmFyXCIscyksdS5yZWdpc3RlcihcImRvbnV0XCIsbyksdS5yZWdpc3RlcihcImxpbmVcIixhKSx1LnJlZ2lzdGVyKFwicGllXCIsbyksdC5leHBvcnRzPXV9LGZ1bmN0aW9uKHQsZSl7XCJ1c2Ugc3RyaWN0XCI7dC5leHBvcnRzPXtvcHRpb25zOntmaWxsOltcIiNmZjk5MDBcIixcIiNmZmY0ZGRcIixcIiNmZmM2NmVcIl0scmFkaXVzOjh9LGRyYXc6ZnVuY3Rpb24odCl7aWYoIXQuZGVsaW1pdGVyKXt2YXIgZT10aGlzLnJhdy5tYXRjaCgvW14wLTlcXC5dLyk7dC5kZWxpbWl0ZXI9ZT9lWzBdOlwiLFwifXZhciBpPXRoaXMudmFsdWVzKCkubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0PjA/dDowfSk7aWYoXCIvXCI9PT10LmRlbGltaXRlcil7dmFyIG49aVswXSxyPWlbMV07aT1bbixNYXRoLm1heCgwLHItbildfWZvcih2YXIgcz0wLGE9aS5sZW5ndGgsbz0wO3M8YTtzKyspbys9aVtzXTtvfHwoYT0yLG89MSxpPVswLDFdKTt2YXIgaD0yKnQucmFkaXVzLHU9dGhpcy5wcmVwYXJlKHQud2lkdGh8fGgsdC5oZWlnaHR8fGgpLGw9dS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxjPWwud2lkdGgsZj1sLmhlaWdodCxwPWMvMixkPWYvMix2PU1hdGgubWluKHAsZCksZz10LmlubmVyUmFkaXVzO1wiZG9udXRcIiE9PXRoaXMudHlwZXx8Z3x8KGc9LjUqdik7dmFyIG09TWF0aC5QSSx5PXRoaXMuZmlsbCgpLHc9dGhpcy5zY2FsZT1mdW5jdGlvbih0LGUpe3ZhciBpPXQvbyptKjItbS8yO3JldHVybltlKk1hdGguY29zKGkpK3AsZSpNYXRoLnNpbihpKStkXX0seD0wO2ZvcihzPTA7czxhO3MrKyl7dmFyIE0sYj1pW3NdLGs9Yi9vO2lmKDAhPT1rKXtpZigxPT09aylpZihnKXt2YXIgJD1wLS4wMSxqPWQtdixFPWQtZztNPXRoaXMuc3ZnRWxlbWVudChcInBhdGhcIix7ZDpbXCJNXCIscCxqLFwiQVwiLHYsdiwwLDEsMSwkLGosXCJMXCIsJCxFLFwiQVwiLGcsZywwLDEsMCxwLEVdLmpvaW4oXCIgXCIpfSl9ZWxzZSBNPXRoaXMuc3ZnRWxlbWVudChcImNpcmNsZVwiLHtjeDpwLGN5OmQscjp2fSk7ZWxzZXt2YXIgQT14K2IsQz1bXCJNXCJdLmNvbmNhdCh3KHgsdiksXCJBXCIsdix2LDAsaz4uNT8xOjAsMSx3KEEsdiksXCJMXCIpO2c/Qz1DLmNvbmNhdCh3KEEsZyksXCJBXCIsZyxnLDAsaz4uNT8xOjAsMCx3KHgsZykpOkMucHVzaChwLGQpLHgrPWIsTT10aGlzLnN2Z0VsZW1lbnQoXCJwYXRoXCIse2Q6Qy5qb2luKFwiIFwiKX0pfU0uc2V0QXR0cmlidXRlKFwiZmlsbFwiLHkuY2FsbCh0aGlzLGIscyxpKSksdS5hcHBlbmRDaGlsZChNKX19fX19LGZ1bmN0aW9uKHQsZSl7dC5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC4kY3JlYXRlRWxlbWVudCxpPXQuX3NlbGYuX2N8fGU7cmV0dXJuIGkoXCJzcGFuXCIpfSxzdGF0aWNSZW5kZXJGbnM6W119fV0pfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1wZWl0eS9kaXN0L3Z1ZS1wZWl0eS5taW4uanNcbi8vIG1vZHVsZSBpZCA9IDc3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDMxIl0sInNvdXJjZVJvb3QiOiIifQ==
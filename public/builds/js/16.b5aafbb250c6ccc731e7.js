webpackJsonp([16],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(581),
  /* template */
  __webpack_require__(725),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/components/BackToTop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BackToTop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2e3d018a", Component.options)
  } else {
    hotAPI.reload("data-v-2e3d018a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
// Robert Penner's easeInOutQuad

// find the rest of his easing functions here: http://robertpenner.com/easing/
// find them exported for ES6 consumption here: https://github.com/jaxgeller/ez.js

var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var jumper = function jumper() {
  // private variable cache
  // no variables are created during a jump, preventing memory leaks

  var element = void 0; // element to scroll to                   (node)

  var start = void 0; // where scroll starts                    (px)
  var stop = void 0; // where scroll stops                     (px)

  var offset = void 0; // adjustment from the stop position      (px)
  var easing = void 0; // easing function                        (function)
  var a11y = void 0; // accessibility support flag             (boolean)

  var distance = void 0; // distance of scroll                     (px)
  var duration = void 0; // scroll duration                        (ms)

  var timeStart = void 0; // time scroll started                    (ms)
  var timeElapsed = void 0; // time spent scrolling thus far          (ms)

  var next = void 0; // next scroll position                   (px)

  var callback = void 0; // to call when done scrolling            (function)

  // scroll position helper

  function location() {
    return window.scrollY || window.pageYOffset;
  }

  // element offset helper

  function top(element) {
    return element.getBoundingClientRect().top + start;
  }

  // rAF loop helper

  function loop(timeCurrent) {
    // store time scroll started, if not started already
    if (!timeStart) {
      timeStart = timeCurrent;
    }

    // determine time spent scrolling so far
    timeElapsed = timeCurrent - timeStart;

    // calculate next scroll position
    next = easing(timeElapsed, start, distance, duration);

    // scroll to it
    window.scrollTo(0, next);

    // check progress
    timeElapsed < duration ? window.requestAnimationFrame(loop) // continue scroll loop
    : done(); // scrolling is done
  }

  // scroll finished helper

  function done() {
    // account for rAF time rounding inaccuracies
    window.scrollTo(0, start + distance);

    // if scrolling to an element, and accessibility is enabled
    if (element && a11y) {
      // add tabindex indicating programmatic focus
      element.setAttribute('tabindex', '-1');

      // focus the element
      element.focus();
    }

    // if it exists, fire the callback
    if (typeof callback === 'function') {
      callback();
    }

    // reset time for next jump
    timeStart = false;
  }

  // API

  function jump(target) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // resolve options, or use defaults
    duration = options.duration || 1000;
    offset = options.offset || 0;
    callback = options.callback; // "undefined" is a suitable default, and won't be called
    easing = options.easing || easeInOutQuad;
    a11y = options.a11y || false;

    // cache starting position
    start = location();

    // resolve target
    switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {
      // scroll from current position
      case 'number':
        element = undefined; // no element to scroll to
        a11y = false; // make sure accessibility is off
        stop = start + target;
        break;

      // scroll to element (node)
      // bounding rect is relative to the viewport
      case 'object':
        element = target;
        stop = top(element);
        break;

      // scroll to element (selector)
      // bounding rect is relative to the viewport
      case 'string':
        element = document.querySelector(target);
        stop = top(element);
        break;
    }

    // resolve scroll distance, accounting for offset
    distance = stop - start + offset;

    // resolve duration
    switch (_typeof(options.duration)) {
      // number in ms
      case 'number':
        duration = options.duration;
        break;

      // function passed the distance of the scroll
      case 'function':
        duration = options.duration(distance);
        break;
    }

    // start the loop
    window.requestAnimationFrame(loop);
  }

  // expose only the jump method
  return jump;
};

// export singleton

var singleton = jumper();

/* harmony default export */ __webpack_exports__["default"] = (singleton);


/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BackToTop = undefined;

var _BackToTop2 = __webpack_require__(689);

var _BackToTop3 = _interopRequireDefault(_BackToTop2);

var _Jump = __webpack_require__(690);

var _Jump2 = _interopRequireDefault(_Jump);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BackToTop = _BackToTop3.default;
exports.default = _Jump2.default;

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScroll = getScroll;
function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jump = __webpack_require__(536);

var _jump2 = _interopRequireDefault(_jump);

var _util = __webpack_require__(544);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//

exports.default = {
  props: {
    visibilityHeight: {
      type: Number,
      default: 400
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },

  data: function data() {
    return {
      visible: false
    };
  },
  mounted: function mounted() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },


  methods: {
    handleScroll: function handleScroll() {
      this.visible = (0, _util.getScroll)(window, true) > this.visibilityHeight;
    },
    scrollToTop: function scrollToTop() {
      (0, _jump2.default)(document.body, this.options);
    }
  }
};

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jump = __webpack_require__(536);

var _jump2 = _interopRequireDefault(_jump);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    target: String,
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },

  created: function created() {
    this.$el = this.$el.nextSibling;
  },
  mounted: function mounted() {
    this.$el.addEventListener('click', this.handler);
  },


  methods: {
    handler: function handler() {
      (0, _jump2.default)(this.target, this.options);
    }
  }
}; //
//
//
//
//
//

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueBulmaJump = __webpack_require__(543);

exports.default = {
  components: {
    BackToTop: _vueBulmaJump.BackToTop
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

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.back-to-top {\n  z-index: 10;\n  position: fixed;\n  right: 100px;\n  bottom: 50px;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 689:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(795)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(556),
  /* template */
  __webpack_require__(751),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-jump/src/BackToTop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BackToTop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-81d3a14c", Component.options)
  } else {
    hotAPI.reload("data-v-81d3a14c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 690:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(557),
  /* template */
  __webpack_require__(768),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-jump/src/Jump.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Jump.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ecd0a752", Component.options)
  } else {
    hotAPI.reload("data-v-ecd0a752", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 725:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('div', {
    staticClass: "tile is-child box"
  }, [_c('div', {
    staticClass: "wysiwyg"
  }, [_c('h1', [_vm._v("Hello World")]), _vm._v(" "), _c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.")]), _vm._v(" "), _c('h2', [_vm._v("Second level")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h3', [_vm._v("Third level")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('blockquote', [_vm._v("Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.")]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('p', [_vm._v("Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.")]), _vm._v(" "), _c('p', [_vm._v("Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.")]), _vm._v(" "), _c('h4', [_vm._v("Fourth level")]), _vm._v(" "), _c('p', [_vm._v("Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.")]), _vm._v(" "), _c('p', [_vm._v("Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.")]), _vm._v(" "), _c('p', [_vm._v("Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.")]), _vm._v(" "), _c('h5', [_vm._v("Fifth level")]), _vm._v(" "), _c('p', [_vm._v("Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.")]), _vm._v(" "), _c('h6', [_vm._v("Sixth level")]), _vm._v(" "), _c('p', [_vm._v("Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.")]), _vm._v(" "), _c('back-to-top', {
    attrs: {
      "target": ".is-child .wysiwyg"
    }
  }, [_c('button', {
    staticClass: "button"
  }, [_vm._v("UP")])])], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("Curabitur accumsan turpis pharetra "), _c('strong', [_vm._v("augue tincidunt")]), _vm._v(" blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_vm._v("In fermentum leo eu lectus mollis, quis dictum mi aliquet.")]), _vm._v(" "), _c('li', [_vm._v("Morbi eu nulla lobortis, lobortis est in, fringilla felis.")]), _vm._v(" "), _c('li', [_vm._v("Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.")]), _vm._v(" "), _c('li', [_vm._v("Ut non enim metus.")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("Quisque ante lacus, malesuada ac auctor vitae, congue "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("non ante")]), _vm._v(". Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ol', [_c('li', [_vm._v("Donec blandit a lorem id convallis.")]), _vm._v(" "), _c('li', [_vm._v("Cras gravida arcu at diam gravida gravida.")]), _vm._v(" "), _c('li', [_vm._v("Integer in volutpat libero.")]), _vm._v(" "), _c('li', [_vm._v("Donec a diam tellus.")]), _vm._v(" "), _c('li', [_vm._v("Aenean nec tortor orci.")]), _vm._v(" "), _c('li', [_vm._v("Quisque aliquam cursus urna, non bibendum massa viverra eget.")]), _vm._v(" "), _c('li', [_vm._v("Vivamus maximus ultricies pulvinar.")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et "), _c('em', [_vm._v("justo sodales")]), _vm._v(" elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.")])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2e3d018a", module.exports)
  }
}

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.visible),
      expression: "visible"
    }],
    staticClass: "jump back-to-top",
    on: {
      "click": _vm.scrollToTop
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-81d3a14c", module.exports)
  }
}

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "jump"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ecd0a752", module.exports)
  }
}

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(645);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("99bd3cea", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-81d3a14c\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./BackToTop.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-81d3a14c\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./BackToTop.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvQmFja1RvVG9wLnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L2p1bXAuanMvZGlzdC9qdW1wLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1qdW1wL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1qdW1wL3NyYy91dGlsLmpzIiwid2VicGFjazovLy9CYWNrVG9Ub3AudnVlIiwid2VicGFjazovLy9KdW1wLnZ1ZSIsIndlYnBhY2s6Ly8vQmFja1RvVG9wLnZ1ZT84OTNhIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLWp1bXAvc3JjL0JhY2tUb1RvcC52dWU/YmMyMyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1qdW1wL3NyYy9CYWNrVG9Ub3AudnVlIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLWp1bXAvc3JjL0p1bXAudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9CYWNrVG9Ub3AudnVlP2U2ZGUiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtanVtcC9zcmMvQmFja1RvVG9wLnZ1ZT9hMDkzIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLWp1bXAvc3JjL0p1bXAudnVlPzgxNTMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtanVtcC9zcmMvQmFja1RvVG9wLnZ1ZT8xYTcwIl0sIm5hbWVzIjpbIkJhY2tUb1RvcCIsImRlZmF1bHQiLCJnZXRTY3JvbGwiLCJ3IiwidG9wIiwicmV0IiwibWV0aG9kIiwiZCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUE0RztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7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QUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDcEJBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ1hBOztBQUVBO0FBQ0EscUNBQXNLO0FBQ3RLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBZ0cscUVBQXFFO0FBQ3JLLHlHQUF5RyxxRUFBcUU7QUFDOUs7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImpzLzE2LmI1YWFmYmIyNTBjNmNjYzczMWU3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQmFja1RvVG9wLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmUzZDAxOGFcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQmFja1RvVG9wLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvQmFja1RvVG9wLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEJhY2tUb1RvcC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmUzZDAxOGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yZTNkMDE4YVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvQmFja1RvVG9wLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTYiLCIvLyBSb2JlcnQgUGVubmVyJ3MgZWFzZUluT3V0UXVhZFxuXG4vLyBmaW5kIHRoZSByZXN0IG9mIGhpcyBlYXNpbmcgZnVuY3Rpb25zIGhlcmU6IGh0dHA6Ly9yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbi8vIGZpbmQgdGhlbSBleHBvcnRlZCBmb3IgRVM2IGNvbnN1bXB0aW9uIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qYXhnZWxsZXIvZXouanNcblxudmFyIGVhc2VJbk91dFF1YWQgPSBmdW5jdGlvbiBlYXNlSW5PdXRRdWFkKHQsIGIsIGMsIGQpIHtcbiAgdCAvPSBkIC8gMjtcbiAgaWYgKHQgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCArIGI7XG4gIHQtLTtcbiAgcmV0dXJuIC1jIC8gMiAqICh0ICogKHQgLSAyKSAtIDEpICsgYjtcbn07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG52YXIganVtcGVyID0gZnVuY3Rpb24ganVtcGVyKCkge1xuICAvLyBwcml2YXRlIHZhcmlhYmxlIGNhY2hlXG4gIC8vIG5vIHZhcmlhYmxlcyBhcmUgY3JlYXRlZCBkdXJpbmcgYSBqdW1wLCBwcmV2ZW50aW5nIG1lbW9yeSBsZWFrc1xuXG4gIHZhciBlbGVtZW50ID0gdm9pZCAwOyAvLyBlbGVtZW50IHRvIHNjcm9sbCB0byAgICAgICAgICAgICAgICAgICAobm9kZSlcblxuICB2YXIgc3RhcnQgPSB2b2lkIDA7IC8vIHdoZXJlIHNjcm9sbCBzdGFydHMgICAgICAgICAgICAgICAgICAgIChweClcbiAgdmFyIHN0b3AgPSB2b2lkIDA7IC8vIHdoZXJlIHNjcm9sbCBzdG9wcyAgICAgICAgICAgICAgICAgICAgIChweClcblxuICB2YXIgb2Zmc2V0ID0gdm9pZCAwOyAvLyBhZGp1c3RtZW50IGZyb20gdGhlIHN0b3AgcG9zaXRpb24gICAgICAocHgpXG4gIHZhciBlYXNpbmcgPSB2b2lkIDA7IC8vIGVhc2luZyBmdW5jdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbilcbiAgdmFyIGExMXkgPSB2b2lkIDA7IC8vIGFjY2Vzc2liaWxpdHkgc3VwcG9ydCBmbGFnICAgICAgICAgICAgIChib29sZWFuKVxuXG4gIHZhciBkaXN0YW5jZSA9IHZvaWQgMDsgLy8gZGlzdGFuY2Ugb2Ygc2Nyb2xsICAgICAgICAgICAgICAgICAgICAgKHB4KVxuICB2YXIgZHVyYXRpb24gPSB2b2lkIDA7IC8vIHNjcm9sbCBkdXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIChtcylcblxuICB2YXIgdGltZVN0YXJ0ID0gdm9pZCAwOyAvLyB0aW1lIHNjcm9sbCBzdGFydGVkICAgICAgICAgICAgICAgICAgICAobXMpXG4gIHZhciB0aW1lRWxhcHNlZCA9IHZvaWQgMDsgLy8gdGltZSBzcGVudCBzY3JvbGxpbmcgdGh1cyBmYXIgICAgICAgICAgKG1zKVxuXG4gIHZhciBuZXh0ID0gdm9pZCAwOyAvLyBuZXh0IHNjcm9sbCBwb3NpdGlvbiAgICAgICAgICAgICAgICAgICAocHgpXG5cbiAgdmFyIGNhbGxiYWNrID0gdm9pZCAwOyAvLyB0byBjYWxsIHdoZW4gZG9uZSBzY3JvbGxpbmcgICAgICAgICAgICAoZnVuY3Rpb24pXG5cbiAgLy8gc2Nyb2xsIHBvc2l0aW9uIGhlbHBlclxuXG4gIGZ1bmN0aW9uIGxvY2F0aW9uKCkge1xuICAgIHJldHVybiB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIH1cblxuICAvLyBlbGVtZW50IG9mZnNldCBoZWxwZXJcblxuICBmdW5jdGlvbiB0b3AoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHN0YXJ0O1xuICB9XG5cbiAgLy8gckFGIGxvb3AgaGVscGVyXG5cbiAgZnVuY3Rpb24gbG9vcCh0aW1lQ3VycmVudCkge1xuICAgIC8vIHN0b3JlIHRpbWUgc2Nyb2xsIHN0YXJ0ZWQsIGlmIG5vdCBzdGFydGVkIGFscmVhZHlcbiAgICBpZiAoIXRpbWVTdGFydCkge1xuICAgICAgdGltZVN0YXJ0ID0gdGltZUN1cnJlbnQ7XG4gICAgfVxuXG4gICAgLy8gZGV0ZXJtaW5lIHRpbWUgc3BlbnQgc2Nyb2xsaW5nIHNvIGZhclxuICAgIHRpbWVFbGFwc2VkID0gdGltZUN1cnJlbnQgLSB0aW1lU3RhcnQ7XG5cbiAgICAvLyBjYWxjdWxhdGUgbmV4dCBzY3JvbGwgcG9zaXRpb25cbiAgICBuZXh0ID0gZWFzaW5nKHRpbWVFbGFwc2VkLCBzdGFydCwgZGlzdGFuY2UsIGR1cmF0aW9uKTtcblxuICAgIC8vIHNjcm9sbCB0byBpdFxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCBuZXh0KTtcblxuICAgIC8vIGNoZWNrIHByb2dyZXNzXG4gICAgdGltZUVsYXBzZWQgPCBkdXJhdGlvbiA/IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCkgLy8gY29udGludWUgc2Nyb2xsIGxvb3BcbiAgICA6IGRvbmUoKTsgLy8gc2Nyb2xsaW5nIGlzIGRvbmVcbiAgfVxuXG4gIC8vIHNjcm9sbCBmaW5pc2hlZCBoZWxwZXJcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIC8vIGFjY291bnQgZm9yIHJBRiB0aW1lIHJvdW5kaW5nIGluYWNjdXJhY2llc1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzdGFydCArIGRpc3RhbmNlKTtcblxuICAgIC8vIGlmIHNjcm9sbGluZyB0byBhbiBlbGVtZW50LCBhbmQgYWNjZXNzaWJpbGl0eSBpcyBlbmFibGVkXG4gICAgaWYgKGVsZW1lbnQgJiYgYTExeSkge1xuICAgICAgLy8gYWRkIHRhYmluZGV4IGluZGljYXRpbmcgcHJvZ3JhbW1hdGljIGZvY3VzXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcblxuICAgICAgLy8gZm9jdXMgdGhlIGVsZW1lbnRcbiAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvLyBpZiBpdCBleGlzdHMsIGZpcmUgdGhlIGNhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICAvLyByZXNldCB0aW1lIGZvciBuZXh0IGp1bXBcbiAgICB0aW1lU3RhcnQgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIEFQSVxuXG4gIGZ1bmN0aW9uIGp1bXAodGFyZ2V0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgLy8gcmVzb2x2ZSBvcHRpb25zLCBvciB1c2UgZGVmYXVsdHNcbiAgICBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24gfHwgMTAwMDtcbiAgICBvZmZzZXQgPSBvcHRpb25zLm9mZnNldCB8fCAwO1xuICAgIGNhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFjazsgLy8gXCJ1bmRlZmluZWRcIiBpcyBhIHN1aXRhYmxlIGRlZmF1bHQsIGFuZCB3b24ndCBiZSBjYWxsZWRcbiAgICBlYXNpbmcgPSBvcHRpb25zLmVhc2luZyB8fCBlYXNlSW5PdXRRdWFkO1xuICAgIGExMXkgPSBvcHRpb25zLmExMXkgfHwgZmFsc2U7XG5cbiAgICAvLyBjYWNoZSBzdGFydGluZyBwb3NpdGlvblxuICAgIHN0YXJ0ID0gbG9jYXRpb24oKTtcblxuICAgIC8vIHJlc29sdmUgdGFyZ2V0XG4gICAgc3dpdGNoICh0eXBlb2YgdGFyZ2V0ID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih0YXJnZXQpKSB7XG4gICAgICAvLyBzY3JvbGwgZnJvbSBjdXJyZW50IHBvc2l0aW9uXG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBlbGVtZW50ID0gdW5kZWZpbmVkOyAvLyBubyBlbGVtZW50IHRvIHNjcm9sbCB0b1xuICAgICAgICBhMTF5ID0gZmFsc2U7IC8vIG1ha2Ugc3VyZSBhY2Nlc3NpYmlsaXR5IGlzIG9mZlxuICAgICAgICBzdG9wID0gc3RhcnQgKyB0YXJnZXQ7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBzY3JvbGwgdG8gZWxlbWVudCAobm9kZSlcbiAgICAgIC8vIGJvdW5kaW5nIHJlY3QgaXMgcmVsYXRpdmUgdG8gdGhlIHZpZXdwb3J0XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBlbGVtZW50ID0gdGFyZ2V0O1xuICAgICAgICBzdG9wID0gdG9wKGVsZW1lbnQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gc2Nyb2xsIHRvIGVsZW1lbnQgKHNlbGVjdG9yKVxuICAgICAgLy8gYm91bmRpbmcgcmVjdCBpcyByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnRcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gICAgICAgIHN0b3AgPSB0b3AoZWxlbWVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIHJlc29sdmUgc2Nyb2xsIGRpc3RhbmNlLCBhY2NvdW50aW5nIGZvciBvZmZzZXRcbiAgICBkaXN0YW5jZSA9IHN0b3AgLSBzdGFydCArIG9mZnNldDtcblxuICAgIC8vIHJlc29sdmUgZHVyYXRpb25cbiAgICBzd2l0Y2ggKF90eXBlb2Yob3B0aW9ucy5kdXJhdGlvbikpIHtcbiAgICAgIC8vIG51bWJlciBpbiBtc1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgZHVyYXRpb24gPSBvcHRpb25zLmR1cmF0aW9uO1xuICAgICAgICBicmVhaztcblxuICAgICAgLy8gZnVuY3Rpb24gcGFzc2VkIHRoZSBkaXN0YW5jZSBvZiB0aGUgc2Nyb2xsXG4gICAgICBjYXNlICdmdW5jdGlvbic6XG4gICAgICAgIGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbihkaXN0YW5jZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIHN0YXJ0IHRoZSBsb29wXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgfVxuXG4gIC8vIGV4cG9zZSBvbmx5IHRoZSBqdW1wIG1ldGhvZFxuICByZXR1cm4ganVtcDtcbn07XG5cbi8vIGV4cG9ydCBzaW5nbGV0b25cblxudmFyIHNpbmdsZXRvbiA9IGp1bXBlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vanVtcC5qcy9kaXN0L2p1bXAubW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiIsImV4cG9ydCBCYWNrVG9Ub3AgZnJvbSAnLi9CYWNrVG9Ub3AnXG5leHBvcnQgZGVmYXVsdCBmcm9tICcuL0p1bXAnXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Z1ZS1idWxtYS1qdW1wL3NyYy9pbmRleC5qcyIsImV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGwodywgdG9wKSB7XG4gIGxldCByZXQgPSB3W2BwYWdlJHt0b3AgPyAnWScgOiAnWCd9T2Zmc2V0YF1cbiAgY29uc3QgbWV0aG9kID0gYHNjcm9sbCR7dG9wID8gJ1RvcCcgOiAnTGVmdCd9YFxuICBpZiAodHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICBjb25zdCBkID0gdy5kb2N1bWVudFxuICAgIC8vIGllNiw3LDggc3RhbmRhcmQgbW9kZVxuICAgIHJldCA9IGQuZG9jdW1lbnRFbGVtZW50W21ldGhvZF1cbiAgICBpZiAodHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICAgIC8vIHF1aXJrcyBtb2RlXG4gICAgICByZXQgPSBkLmJvZHlbbWV0aG9kXVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Z1ZS1idWxtYS1qdW1wL3NyYy91dGlsLmpzIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwianVtcCBiYWNrLXRvLXRvcFwiIEBjbGljaz1cInNjcm9sbFRvVG9wXCIgdi1zaG93PVwidmlzaWJsZVwiPlxuICAgIDxzbG90Pjwvc2xvdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IGp1bXAgZnJvbSAnanVtcC5qcydcbmltcG9ydCB7IGdldFNjcm9sbCB9IGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHZpc2liaWxpdHlIZWlnaHQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDQwMFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogKCkgPT4gKHt9KVxuICAgIH1cbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5oYW5kbGVTY3JvbGwoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmhhbmRsZVNjcm9sbClcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95ICgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZVNjcm9sbCAoKSB7XG4gICAgICB0aGlzLnZpc2libGUgPSBnZXRTY3JvbGwod2luZG93LCB0cnVlKSA+IHRoaXMudmlzaWJpbGl0eUhlaWdodFxuICAgIH0sXG5cbiAgICBzY3JvbGxUb1RvcCAoKSB7XG4gICAgICBqdW1wKGRvY3VtZW50LmJvZHksIHRoaXMub3B0aW9ucylcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5iYWNrLXRvLXRvcCB7XG4gIHotaW5kZXg6IDEwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxMDBweDtcbiAgYm90dG9tOiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEJhY2tUb1RvcC52dWU/NGIxNWZlNWIiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJqdW1wXCI+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQganVtcCBmcm9tICdqdW1wLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgdGFyZ2V0OiBTdHJpbmcsXG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogKCkgPT4gKHt9KVxuICAgIH1cbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICB0aGlzLiRlbCA9IHRoaXMuJGVsLm5leHRTaWJsaW5nXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy4kZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZXIpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZXIgKCkge1xuICAgICAganVtcCh0aGlzLnRhcmdldCwgdGhpcy5vcHRpb25zKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gSnVtcC52dWU/MTUyYmZiNTIiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLWFuY2VzdG9yXCI+XG4gICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInd5c2l3eWdcIj5cbiAgICAgICAgICA8aDE+SGVsbG8gV29ybGQ8L2gxPlxuICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE51bGxhIGFjY3Vtc2FuLCBtZXR1cyB1bHRyaWNlcyBlbGVpZmVuZCBncmF2aWRhLCBudWxsYSBudW5jIHZhcml1cyBsZWN0dXMsIG5lYyBydXRydW0ganVzdG8gbmliaCBldSBsZWN0dXMuIFV0IHZ1bHB1dGF0ZSBzZW1wZXIgZHVpLiBGdXNjZSBlcmF0IG9kaW8sIHNvbGxpY2l0dWRpbiB2ZWwgZXJhdCB2ZWwsIGludGVyZHVtIG1hdHRpcyBuZXF1ZS48L3A+XG4gICAgICAgICAgPGgyPlNlY29uZCBsZXZlbDwvaDI+XG4gICAgICAgICAgPHA+Q3VyYWJpdHVyIGFjY3Vtc2FuIHR1cnBpcyBwaGFyZXRyYSA8c3Ryb25nPmF1Z3VlIHRpbmNpZHVudDwvc3Ryb25nPiBibGFuZGl0LiBRdWlzcXVlIGNvbmRpbWVudHVtIG1heGltdXMgbWksIHNpdCBhbWV0IGNvbW1vZG8gYXJjdSBydXRydW0gaWQuIFByb2luIHByZXRpdW0gdXJuYSB2ZWwgY3Vyc3VzIHZlbmVuYXRpcy4gU3VzcGVuZGlzc2UgcG90ZW50aS4gRXRpYW0gbWF0dGlzIHNlbSByaG9uY3VzIGxhY3VzIGRhcGlidXMgZmFjaWxpc2lzLiBEb25lYyBhdCBkaWduaXNzaW0gZHVpLiBVdCBldCBuZXF1ZSBuaXNsLjwvcD5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+SW4gZmVybWVudHVtIGxlbyBldSBsZWN0dXMgbW9sbGlzLCBxdWlzIGRpY3R1bSBtaSBhbGlxdWV0LjwvbGk+XG4gICAgICAgICAgICA8bGk+TW9yYmkgZXUgbnVsbGEgbG9ib3J0aXMsIGxvYm9ydGlzIGVzdCBpbiwgZnJpbmdpbGxhIGZlbGlzLjwvbGk+XG4gICAgICAgICAgICA8bGk+QWxpcXVhbSBuZWMgZmVsaXMgaW4gc2FwaWVuIHZlbmVuYXRpcyB2aXZlcnJhIGZlcm1lbnR1bSBuZWMgbGVjdHVzLjwvbGk+XG4gICAgICAgICAgICA8bGk+VXQgbm9uIGVuaW0gbWV0dXMuPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxoMz5UaGlyZCBsZXZlbDwvaDM+XG4gICAgICAgICAgPHA+UXVpc3F1ZSBhbnRlIGxhY3VzLCBtYWxlc3VhZGEgYWMgYXVjdG9yIHZpdGFlLCBjb25ndWUgPGEgaHJlZj1cIiNcIj5ub24gYW50ZTwvYT4uIFBoYXNlbGx1cyBsYWN1cyBleCwgc2VtcGVyIGFjIHRvcnRvciBuZWMsIGZyaW5naWxsYSBjb25kaW1lbnR1bSBvcmNpLiBGdXNjZSBldSBydXRydW0gdGVsbHVzLjwvcD5cbiAgICAgICAgICA8b2w+XG4gICAgICAgICAgICA8bGk+RG9uZWMgYmxhbmRpdCBhIGxvcmVtIGlkIGNvbnZhbGxpcy48L2xpPlxuICAgICAgICAgICAgPGxpPkNyYXMgZ3JhdmlkYSBhcmN1IGF0IGRpYW0gZ3JhdmlkYSBncmF2aWRhLjwvbGk+XG4gICAgICAgICAgICA8bGk+SW50ZWdlciBpbiB2b2x1dHBhdCBsaWJlcm8uPC9saT5cbiAgICAgICAgICAgIDxsaT5Eb25lYyBhIGRpYW0gdGVsbHVzLjwvbGk+XG4gICAgICAgICAgICA8bGk+QWVuZWFuIG5lYyB0b3J0b3Igb3JjaS48L2xpPlxuICAgICAgICAgICAgPGxpPlF1aXNxdWUgYWxpcXVhbSBjdXJzdXMgdXJuYSwgbm9uIGJpYmVuZHVtIG1hc3NhIHZpdmVycmEgZWdldC48L2xpPlxuICAgICAgICAgICAgPGxpPlZpdmFtdXMgbWF4aW11cyB1bHRyaWNpZXMgcHVsdmluYXIuPC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICAgIDxibG9ja3F1b3RlPlV0IHZlbmVuYXRpcywgbmlzbCBzY2VsZXJpc3F1ZSBzb2xsaWNpdHVkaW4gZmVybWVudHVtLCBxdWFtIGxpYmVybyBoZW5kcmVyaXQgaXBzdW0sIHV0IGJsYW5kaXQgZXN0IHRlbGx1cyBzaXQgYW1ldCB0dXJwaXMuPC9ibG9ja3F1b3RlPlxuICAgICAgICAgIDxwPlF1aXNxdWUgYXQgc2VtcGVyIGVuaW0sIGV1IGhlbmRyZXJpdCBvZGlvLiBFdGlhbSBhdWN0b3IgbmlzbCBldCA8ZW0+anVzdG8gc29kYWxlczwvZW0+IGVsZW1lbnR1bS4gTWFlY2VuYXMgdWx0cmljZXMgbGFjdXMgcXVpcyBuZXF1ZSBjb25zZWN0ZXR1ciwgZXQgbG9ib3J0aXMgbmlzaSBtb2xlc3RpZS48L3A+XG4gICAgICAgICAgPHA+U2VkIHNhZ2l0dGlzIGVuaW0gYWMgdG9ydG9yIG1heGltdXMgcnV0cnVtLiBOdWxsYSBmYWNpbGlzaS4gRG9uZWMgbWF0dGlzIHZ1bHB1dGF0ZSByaXN1cyBpbiBsdWN0dXMuIE1hZWNlbmFzIHZlc3RpYnVsdW0gaW50ZXJkdW0gY29tbW9kby48L3A+XG4gICAgICAgICAgPHA+U3VzcGVuZGlzc2UgZWdlc3RhcyBzYXBpZW4gbm9uIGZlbGlzIHBsYWNlcmF0IGVsZW1lbnR1bS4gTW9yYmkgdG9ydG9yIG5pc2wsIHN1c2NpcGl0IHNlZCBtaSBzaXQgYW1ldCwgbW9sbGlzIG1hbGVzdWFkYSBudWxsYS4gTnVsbGEgZmFjaWxpc2kuIE51bGxhbSBhYyBlcmF0IGFudGUuPC9wPlxuICAgICAgICAgIDxoND5Gb3VydGggbGV2ZWw8L2g0PlxuICAgICAgICAgIDxwPk51bGxhIGVmZmljaXR1ciBlbGVpZmVuZCBuaXNpLCBzaXQgYW1ldCBiaWJlbmR1bSBzYXBpZW4gZnJpbmdpbGxhIGFjLiBNYXVyaXMgZXVpc21vZCBtZXR1cyBhIHRlbGx1cyBsYW9yZWV0LCBhdCBlbGVtZW50dW0gZXggZWZmaWNpdHVyLjwvcD5cbiAgICAgICAgICA8cD5NYWVjZW5hcyBlbGVpZmVuZCBzb2xsaWNpdHVkaW4gZHVpLCBmYXVjaWJ1cyBzb2xsaWNpdHVkaW4gYXVndWUgY3Vyc3VzIG5vbi4gVXQgZmluaWJ1cyBlbGVpZmVuZCBhcmN1IHV0IHZlaGljdWxhLiBNYXVyaXMgZXUgZXN0IG1heGltdXMgZXN0IHBvcnRhIGNvbmRpbWVudHVtIGluIGV1IGp1c3RvLiBOdWxsYSBpZCBpYWN1bGlzIHNhcGllbi48L3A+XG4gICAgICAgICAgPHA+UGhhc2VsbHVzIHBvcnR0aXRvciBlbmltIGlkIG1ldHVzIHZvbHV0cGF0IHVsdHJpY2llcy4gVXQgbmlzaSBudW5jLCBibGFuZGl0IHNlZCBkYXBpYnVzIGF0LCB2ZXN0aWJ1bHVtIGluIGZlbGlzLiBFdGlhbSBpYWN1bGlzIGxvcmVtIGFjIG5pYmggYmliZW5kdW0gcmhvbmN1cy4gTmFtIGludGVyZHVtIGVmZmljaXR1ciBsaWd1bGEgc2l0IGFtZXQgdWxsYW1jb3JwZXIuIEV0aWFtIHRyaXN0aXF1ZSwgbGVvIHZpdGFlIHBvcnRhIGZhdWNpYnVzLCBtaSBsYWN1cyBsYW9yZWV0IG1ldHVzLCBhdCBjdXJzdXMgbGVvIGVzdCB2ZWwgdGVsbHVzLiBTZWQgYWMgcG9zdWVyZSBlc3QuIE51bmMgdWx0cmljaWVzIG51bmMgbmVxdWUsIHZpdGFlIHVsdHJpY2llcyBleCBzb2RhbGVzIHF1aXMuIEFsaXF1YW0gZXUgbmliaCBpbiBsaWJlcm8gYWNjdW1zYW4gcHVsdmluYXIuIE51bGxhbSBuZWMgbmlzbCBwbGFjZXJhdCwgcHJldGl1bSBtZXR1cyB2ZWwsIGV1aXNtb2QgaXBzdW0uIFByb2luIHRlbXBvciBjdXJzdXMgbmlzbCB2ZWwgY29uZGltZW50dW0uIE5hbSBwaGFyZXRyYSB2YXJpdXMgbWV0dXMgbm9uIHBlbGxlbnRlc3F1ZS48L3A+XG4gICAgICAgICAgPGg1PkZpZnRoIGxldmVsPC9oNT5cbiAgICAgICAgICA8cD5BbGlxdWFtIHNhZ2l0dGlzIHJob25jdXMgdnVscHV0YXRlLiBDcmFzIG5vbiBsdWN0dXMgc2VtLCBzZWQgdGluY2lkdW50IGxpZ3VsYS4gVmVzdGlidWx1bSBhdCBudW5jIGVsaXQuIFByYWVzZW50IGFsaXF1ZXQgbGlndWxhIG1pLCBpbiBsdWN0dXMgZWxpdCB2b2x1dHBhdCBwb3J0YS4gUGhhc2VsbHVzIG1vbGVzdGllIGRpYW0gdmVsIG5pc2kgc29kYWxlcywgYSBlbGVpZmVuZCBhdWd1ZSBsYW9yZWV0LiBTZWQgbmVjIGVsZWlmZW5kIGp1c3RvLiBOYW0gZXQgc29sbGljaXR1ZGluIG9kaW8uPC9wPlxuICAgICAgICAgIDxoNj5TaXh0aCBsZXZlbDwvaDY+XG4gICAgICAgICAgPHA+Q3JhcyBpbiBuaWJoIGxhY2luaWEsIHZlbmVuYXRpcyBuaXNpIGV0LCBhdWN0b3IgdXJuYS4gRG9uZWMgcHVsdmluYXIgbGFjdXMgc2VkIGRpYW0gZGlnbmlzc2ltLCB1dCBlbGVpZmVuZCBlcm9zIGFjY3Vtc2FuLiBQaGFzZWxsdXMgbm9uIHRvcnRvciBlcm9zLiBVdCBzZWQgcnV0cnVtIGxhY3VzLiBFdGlhbSBwdXJ1cyBudW5jLCBzY2VsZXJpc3F1ZSBxdWlzIGVuaW0gdml0YWUsIG1hbGVzdWFkYSB1bHRyaWNlcyB0dXJwaXMuIE51bmMgdml0YWUgbWF4aW11cyBwdXJ1cywgbmVjIGNvbnNlY3RldHVyIGR1aS4gU3VzcGVuZGlzc2UgZXVpc21vZCwgZWxpdCB2ZWwgcnV0cnVtIGNvbW1vZG8sIGlwc3VtIHRvcnRvciBtYXhpbXVzIGR1aSwgc2VkIHZhcml1cyBzYXBpZW4gb2RpbyB2aXRhZSBlc3QuIEV0aWFtIGF0IGN1cnN1cyBtZXR1cy48L3A+XG5cbiAgICAgICAgICA8YmFjay10by10b3AgdGFyZ2V0PVwiLmlzLWNoaWxkIC53eXNpd3lnXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCI+VVA8L2J1dHRvbj5cbiAgICAgICAgICA8L2JhY2stdG8tdG9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBCYWNrVG9Ub3AgfSBmcm9tICd2dWUtYnVsbWEtanVtcCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgQmFja1RvVG9wXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEJhY2tUb1RvcC52dWU/OThmMTllNWMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5iYWNrLXRvLXRvcCB7XFxuICB6LWluZGV4OiAxMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAxMDBweDtcXG4gIGJvdHRvbTogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtODFkM2ExNGNcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS1qdW1wL3NyYy9CYWNrVG9Ub3AudnVlXG4vLyBtb2R1bGUgaWQgPSA2NDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi04MWQzYTE0Y1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0JhY2tUb1RvcC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0JhY2tUb1RvcC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtODFkM2ExNGNcXFwifSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9CYWNrVG9Ub3AudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL25vZGVfbW9kdWxlcy92dWUtYnVsbWEtanVtcC9zcmMvQmFja1RvVG9wLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEJhY2tUb1RvcC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtODFkM2ExNGNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi04MWQzYTE0Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1idWxtYS1qdW1wL3NyYy9CYWNrVG9Ub3AudnVlXG4vLyBtb2R1bGUgaWQgPSA2ODlcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9KdW1wLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1lY2QwYTc1MlxcXCJ9IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0p1bXAudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL25vZGVfbW9kdWxlcy92dWUtYnVsbWEtanVtcC9zcmMvSnVtcC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBKdW1wLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1lY2QwYTc1MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWVjZDBhNzUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWJ1bG1hLWp1bXAvc3JjL0p1bXAudnVlXG4vLyBtb2R1bGUgaWQgPSA2OTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtYW5jZXN0b3JcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid3lzaXd5Z1wiXG4gIH0sIFtfYygnaDEnLCBbX3ZtLl92KFwiSGVsbG8gV29ybGRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTnVsbGEgYWNjdW1zYW4sIG1ldHVzIHVsdHJpY2VzIGVsZWlmZW5kIGdyYXZpZGEsIG51bGxhIG51bmMgdmFyaXVzIGxlY3R1cywgbmVjIHJ1dHJ1bSBqdXN0byBuaWJoIGV1IGxlY3R1cy4gVXQgdnVscHV0YXRlIHNlbXBlciBkdWkuIEZ1c2NlIGVyYXQgb2Rpbywgc29sbGljaXR1ZGluIHZlbCBlcmF0IHZlbCwgaW50ZXJkdW0gbWF0dGlzIG5lcXVlLlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDInLCBbX3ZtLl92KFwiU2Vjb25kIGxldmVsXCIpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnaDMnLCBbX3ZtLl92KFwiVGhpcmQgbGV2ZWxcIildKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDIpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMyksIF92bS5fdihcIiBcIiksIF9jKCdibG9ja3F1b3RlJywgW192bS5fdihcIlV0IHZlbmVuYXRpcywgbmlzbCBzY2VsZXJpc3F1ZSBzb2xsaWNpdHVkaW4gZmVybWVudHVtLCBxdWFtIGxpYmVybyBoZW5kcmVyaXQgaXBzdW0sIHV0IGJsYW5kaXQgZXN0IHRlbGx1cyBzaXQgYW1ldCB0dXJwaXMuXCIpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSg0KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiU2VkIHNhZ2l0dGlzIGVuaW0gYWMgdG9ydG9yIG1heGltdXMgcnV0cnVtLiBOdWxsYSBmYWNpbGlzaS4gRG9uZWMgbWF0dGlzIHZ1bHB1dGF0ZSByaXN1cyBpbiBsdWN0dXMuIE1hZWNlbmFzIHZlc3RpYnVsdW0gaW50ZXJkdW0gY29tbW9kby5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiU3VzcGVuZGlzc2UgZWdlc3RhcyBzYXBpZW4gbm9uIGZlbGlzIHBsYWNlcmF0IGVsZW1lbnR1bS4gTW9yYmkgdG9ydG9yIG5pc2wsIHN1c2NpcGl0IHNlZCBtaSBzaXQgYW1ldCwgbW9sbGlzIG1hbGVzdWFkYSBudWxsYS4gTnVsbGEgZmFjaWxpc2kuIE51bGxhbSBhYyBlcmF0IGFudGUuXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNCcsIFtfdm0uX3YoXCJGb3VydGggbGV2ZWxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiTnVsbGEgZWZmaWNpdHVyIGVsZWlmZW5kIG5pc2ksIHNpdCBhbWV0IGJpYmVuZHVtIHNhcGllbiBmcmluZ2lsbGEgYWMuIE1hdXJpcyBldWlzbW9kIG1ldHVzIGEgdGVsbHVzIGxhb3JlZXQsIGF0IGVsZW1lbnR1bSBleCBlZmZpY2l0dXIuXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcIk1hZWNlbmFzIGVsZWlmZW5kIHNvbGxpY2l0dWRpbiBkdWksIGZhdWNpYnVzIHNvbGxpY2l0dWRpbiBhdWd1ZSBjdXJzdXMgbm9uLiBVdCBmaW5pYnVzIGVsZWlmZW5kIGFyY3UgdXQgdmVoaWN1bGEuIE1hdXJpcyBldSBlc3QgbWF4aW11cyBlc3QgcG9ydGEgY29uZGltZW50dW0gaW4gZXUganVzdG8uIE51bGxhIGlkIGlhY3VsaXMgc2FwaWVuLlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoXCJQaGFzZWxsdXMgcG9ydHRpdG9yIGVuaW0gaWQgbWV0dXMgdm9sdXRwYXQgdWx0cmljaWVzLiBVdCBuaXNpIG51bmMsIGJsYW5kaXQgc2VkIGRhcGlidXMgYXQsIHZlc3RpYnVsdW0gaW4gZmVsaXMuIEV0aWFtIGlhY3VsaXMgbG9yZW0gYWMgbmliaCBiaWJlbmR1bSByaG9uY3VzLiBOYW0gaW50ZXJkdW0gZWZmaWNpdHVyIGxpZ3VsYSBzaXQgYW1ldCB1bGxhbWNvcnBlci4gRXRpYW0gdHJpc3RpcXVlLCBsZW8gdml0YWUgcG9ydGEgZmF1Y2lidXMsIG1pIGxhY3VzIGxhb3JlZXQgbWV0dXMsIGF0IGN1cnN1cyBsZW8gZXN0IHZlbCB0ZWxsdXMuIFNlZCBhYyBwb3N1ZXJlIGVzdC4gTnVuYyB1bHRyaWNpZXMgbnVuYyBuZXF1ZSwgdml0YWUgdWx0cmljaWVzIGV4IHNvZGFsZXMgcXVpcy4gQWxpcXVhbSBldSBuaWJoIGluIGxpYmVybyBhY2N1bXNhbiBwdWx2aW5hci4gTnVsbGFtIG5lYyBuaXNsIHBsYWNlcmF0LCBwcmV0aXVtIG1ldHVzIHZlbCwgZXVpc21vZCBpcHN1bS4gUHJvaW4gdGVtcG9yIGN1cnN1cyBuaXNsIHZlbCBjb25kaW1lbnR1bS4gTmFtIHBoYXJldHJhIHZhcml1cyBtZXR1cyBub24gcGVsbGVudGVzcXVlLlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDUnLCBbX3ZtLl92KFwiRmlmdGggbGV2ZWxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiQWxpcXVhbSBzYWdpdHRpcyByaG9uY3VzIHZ1bHB1dGF0ZS4gQ3JhcyBub24gbHVjdHVzIHNlbSwgc2VkIHRpbmNpZHVudCBsaWd1bGEuIFZlc3RpYnVsdW0gYXQgbnVuYyBlbGl0LiBQcmFlc2VudCBhbGlxdWV0IGxpZ3VsYSBtaSwgaW4gbHVjdHVzIGVsaXQgdm9sdXRwYXQgcG9ydGEuIFBoYXNlbGx1cyBtb2xlc3RpZSBkaWFtIHZlbCBuaXNpIHNvZGFsZXMsIGEgZWxlaWZlbmQgYXVndWUgbGFvcmVldC4gU2VkIG5lYyBlbGVpZmVuZCBqdXN0by4gTmFtIGV0IHNvbGxpY2l0dWRpbiBvZGlvLlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDYnLCBbX3ZtLl92KFwiU2l4dGggbGV2ZWxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiQ3JhcyBpbiBuaWJoIGxhY2luaWEsIHZlbmVuYXRpcyBuaXNpIGV0LCBhdWN0b3IgdXJuYS4gRG9uZWMgcHVsdmluYXIgbGFjdXMgc2VkIGRpYW0gZGlnbmlzc2ltLCB1dCBlbGVpZmVuZCBlcm9zIGFjY3Vtc2FuLiBQaGFzZWxsdXMgbm9uIHRvcnRvciBlcm9zLiBVdCBzZWQgcnV0cnVtIGxhY3VzLiBFdGlhbSBwdXJ1cyBudW5jLCBzY2VsZXJpc3F1ZSBxdWlzIGVuaW0gdml0YWUsIG1hbGVzdWFkYSB1bHRyaWNlcyB0dXJwaXMuIE51bmMgdml0YWUgbWF4aW11cyBwdXJ1cywgbmVjIGNvbnNlY3RldHVyIGR1aS4gU3VzcGVuZGlzc2UgZXVpc21vZCwgZWxpdCB2ZWwgcnV0cnVtIGNvbW1vZG8sIGlwc3VtIHRvcnRvciBtYXhpbXVzIGR1aSwgc2VkIHZhcml1cyBzYXBpZW4gb2RpbyB2aXRhZSBlc3QuIEV0aWFtIGF0IGN1cnN1cyBtZXR1cy5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JhY2stdG8tdG9wJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRhcmdldFwiOiBcIi5pcy1jaGlsZCAud3lzaXd5Z1wiXG4gICAgfVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIlxuICB9LCBbX3ZtLl92KFwiVVBcIildKV0pXSwgMSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygncCcsIFtfdm0uX3YoXCJDdXJhYml0dXIgYWNjdW1zYW4gdHVycGlzIHBoYXJldHJhIFwiKSwgX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJhdWd1ZSB0aW5jaWR1bnRcIildKSwgX3ZtLl92KFwiIGJsYW5kaXQuIFF1aXNxdWUgY29uZGltZW50dW0gbWF4aW11cyBtaSwgc2l0IGFtZXQgY29tbW9kbyBhcmN1IHJ1dHJ1bSBpZC4gUHJvaW4gcHJldGl1bSB1cm5hIHZlbCBjdXJzdXMgdmVuZW5hdGlzLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBFdGlhbSBtYXR0aXMgc2VtIHJob25jdXMgbGFjdXMgZGFwaWJ1cyBmYWNpbGlzaXMuIERvbmVjIGF0IGRpZ25pc3NpbSBkdWkuIFV0IGV0IG5lcXVlIG5pc2wuXCIpXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndWwnLCBbX2MoJ2xpJywgW192bS5fdihcIkluIGZlcm1lbnR1bSBsZW8gZXUgbGVjdHVzIG1vbGxpcywgcXVpcyBkaWN0dW0gbWkgYWxpcXVldC5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywgW192bS5fdihcIk1vcmJpIGV1IG51bGxhIGxvYm9ydGlzLCBsb2JvcnRpcyBlc3QgaW4sIGZyaW5naWxsYSBmZWxpcy5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywgW192bS5fdihcIkFsaXF1YW0gbmVjIGZlbGlzIGluIHNhcGllbiB2ZW5lbmF0aXMgdml2ZXJyYSBmZXJtZW50dW0gbmVjIGxlY3R1cy5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywgW192bS5fdihcIlV0IG5vbiBlbmltIG1ldHVzLlwiKV0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygncCcsIFtfdm0uX3YoXCJRdWlzcXVlIGFudGUgbGFjdXMsIG1hbGVzdWFkYSBhYyBhdWN0b3Igdml0YWUsIGNvbmd1ZSBcIiksIF9jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCIjXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJub24gYW50ZVwiKV0pLCBfdm0uX3YoXCIuIFBoYXNlbGx1cyBsYWN1cyBleCwgc2VtcGVyIGFjIHRvcnRvciBuZWMsIGZyaW5naWxsYSBjb25kaW1lbnR1bSBvcmNpLiBGdXNjZSBldSBydXRydW0gdGVsbHVzLlwiKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ29sJywgW19jKCdsaScsIFtfdm0uX3YoXCJEb25lYyBibGFuZGl0IGEgbG9yZW0gaWQgY29udmFsbGlzLlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX3ZtLl92KFwiQ3JhcyBncmF2aWRhIGFyY3UgYXQgZGlhbSBncmF2aWRhIGdyYXZpZGEuXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfdm0uX3YoXCJJbnRlZ2VyIGluIHZvbHV0cGF0IGxpYmVyby5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xpJywgW192bS5fdihcIkRvbmVjIGEgZGlhbSB0ZWxsdXMuXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsaScsIFtfdm0uX3YoXCJBZW5lYW4gbmVjIHRvcnRvciBvcmNpLlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX3ZtLl92KFwiUXVpc3F1ZSBhbGlxdWFtIGN1cnN1cyB1cm5hLCBub24gYmliZW5kdW0gbWFzc2Egdml2ZXJyYSBlZ2V0LlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGknLCBbX3ZtLl92KFwiVml2YW11cyBtYXhpbXVzIHVsdHJpY2llcyBwdWx2aW5hci5cIildKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3AnLCBbX3ZtLl92KFwiUXVpc3F1ZSBhdCBzZW1wZXIgZW5pbSwgZXUgaGVuZHJlcml0IG9kaW8uIEV0aWFtIGF1Y3RvciBuaXNsIGV0IFwiKSwgX2MoJ2VtJywgW192bS5fdihcImp1c3RvIHNvZGFsZXNcIildKSwgX3ZtLl92KFwiIGVsZW1lbnR1bS4gTWFlY2VuYXMgdWx0cmljZXMgbGFjdXMgcXVpcyBuZXF1ZSBjb25zZWN0ZXR1ciwgZXQgbG9ib3J0aXMgbmlzaSBtb2xlc3RpZS5cIildKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTJlM2QwMThhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMmUzZDAxOGFcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9CYWNrVG9Ub3AudnVlXG4vLyBtb2R1bGUgaWQgPSA3MjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS52aXNpYmxlKSxcbiAgICAgIGV4cHJlc3Npb246IFwidmlzaWJsZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwianVtcCBiYWNrLXRvLXRvcFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5zY3JvbGxUb1RvcFxuICAgIH1cbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi04MWQzYTE0Y1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTgxZDNhMTRjXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS1qdW1wL3NyYy9CYWNrVG9Ub3AudnVlXG4vLyBtb2R1bGUgaWQgPSA3NTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImp1bXBcIlxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWVjZDBhNzUyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZWNkMGE3NTJcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vdnVlLWJ1bG1hLWp1bXAvc3JjL0p1bXAudnVlXG4vLyBtb2R1bGUgaWQgPSA3Njhcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtODFkM2ExNGNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0JhY2tUb1RvcC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiOTliZDNjZWFcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTgxZDNhMTRjXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9CYWNrVG9Ub3AudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi04MWQzYTE0Y1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQmFja1RvVG9wLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtODFkM2ExNGNcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS1qdW1wL3NyYy9CYWNrVG9Ub3AudnVlXG4vLyBtb2R1bGUgaWQgPSA3OTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxNiJdLCJzb3VyY2VSb290IjoiIn0=
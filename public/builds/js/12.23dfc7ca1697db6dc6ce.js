webpackJsonp([12],{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(804)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(592),
  /* template */
  __webpack_require__(765),
  /* scopeId */
  "data-v-e3449b3c",
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/components/ProgressTracker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProgressTracker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e3449b3c", Component.options)
  } else {
    hotAPI.reload("data-v-e3449b3c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.StepItem = undefined;

var _StepItem2 = __webpack_require__(694);

var _StepItem3 = _interopRequireDefault(_StepItem2);

var _Tracker = __webpack_require__(695);

var _Tracker2 = _interopRequireDefault(_Tracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.StepItem = _StepItem3.default;
exports.default = _Tracker2.default;

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = {
  props: {
    isActive: Boolean,
    isComplete: Boolean,
    marker: {
      type: String,
      default: ''
    },
    kind: String,
    title: String,
    text: String
  },

  created: function created() {
    this._isStepItem = true;
  },


  computed: {
    index: function index() {
      return this.$parent.$stepItems.indexOf(this);
    }
  }

};

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = {
  props: {
    alignment: String,
    step: Number,
    border: Boolean,
    spaced: Boolean,
    word: Boolean,
    wordAlign: String,
    text: Boolean,
    textAlign: String
  },

  computed: {
    $stepItems: function $stepItems() {
      return this.$children.filter(function (child) {
        return child._isStepItem;
      });
    }
  }
};

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueBulmaProgressTracker = __webpack_require__(545);

var _vueBulmaProgressTracker2 = _interopRequireDefault(_vueBulmaProgressTracker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    ProgressTracker: _vueBulmaProgressTracker2.default,
    StepItem: _vueBulmaProgressTracker.StepItem
  },

  data: function data() {
    return {
      stepItems: [{
        title: 'Step 1'
      }, {
        title: 'Step 2'
      }, {
        title: 'Step 3'
      }, {
        title: 'Step 4'
      }, {
        title: 'Step 5'
      }]
    };
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
//
//
//
//
//
//

/***/ }),

/***/ 651:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.progress-tracker {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 40px auto;\n  padding: 0;\n  list-style: none;\n}\n.progress-step {\n  display: block;\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  margin: 0;\n  padding: 0;\n  min-width: 28px;\n}\n.progress-step:last-child {\n    -webkit-box-flex: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n}\n.progress-step:not(:last-child)::after {\n    content: '';\n    display: block;\n    position: absolute;\n    z-index: 10;\n    top: 12px;\n    bottom: 12px;\n    right: -14px;\n    width: 100%;\n    height: 4px;\n    transition: background-color 0.3s;\n}\n.progress-marker {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  z-index: 20;\n  width: 28px;\n  height: 28px;\n  padding-bottom: 2px;\n  color: #fff;\n  font-weight: bold;\n  border: 2px solid transparent;\n  border-radius: 50%;\n  transition: background-color, border-color;\n  transition-duration: 0.3s;\n}\n.progress-text {\n  display: block;\n  padding: 14px 9.33333px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.progress-title {\n  margin-top: 0;\n}\n.progress-step .progress-marker {\n  color: #fff;\n  background-color: #b6b6b6;\n}\n.progress-step::after {\n  background-color: #b6b6b6;\n}\n.progress-step .progress-text, .progress-step .progress-step > a .progress-text {\n  color: #333333;\n}\n.progress-step.is-active .progress-marker {\n  background-color: #2196F3;\n}\n.progress-step.is-complete .progress-marker {\n  background-color: #1976D2;\n}\n.progress-step.is-complete::after {\n  background-color: #868686;\n}\n.progress-step:hover .progress-marker {\n  background-color: #56ADF5;\n}\n.progress-tracker--center .progress-step {\n  text-align: center;\n}\n.progress-tracker--center .progress-step:last-child {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n.progress-tracker--center .progress-step::after {\n    right: -50%;\n}\n.progress-tracker--center .progress-marker {\n  margin-left: auto;\n  margin-right: auto;\n}\n.progress-tracker--right .progress-step {\n  text-align: right;\n}\n.progress-tracker--right .progress-step:last-child {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n.progress-tracker--right .progress-step::after {\n    right: calc(-100% + 14px);\n}\n.progress-tracker--right .progress-marker {\n  margin-left: auto;\n}\n.progress-tracker--border {\n  padding: 5px;\n  border: 2px solid #868686;\n  border-radius: 38px;\n}\n.progress-tracker--spaced .progress-step::after {\n  width: calc(100% - 48px);\n  margin-right: 24px;\n}\n.progress-tracker--text .progress-step:last-child {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n.progress-tracker--text-top .progress-step::after {\n  top: auto;\n}\n.progress-tracker--vertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.progress-tracker--vertical .progress-step::after {\n    right: auto;\n    top: 14px;\n    left: 12px;\n    width: 4px;\n    height: 100%;\n}\n.progress-tracker--vertical .progress-marker {\n    position: absolute;\n    left: 0;\n}\n.progress-tracker--vertical .progress-text {\n    padding-top: 7px;\n    padding-left: 42px;\n}\n.progress-tracker--vertical .progress-step:not(:last-child) .progress-text {\n    padding-bottom: 42px;\n}\n.progress-step:not(:last-child)::after {\n  z-index: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 654:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.button[data-v-e3449b3c] {\n  margin: 5px 0 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(561),
  /* template */
  __webpack_require__(727),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-progress-tracker/src/StepItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] StepItem.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-313bad7e", Component.options)
  } else {
    hotAPI.reload("data-v-313bad7e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(801)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(562),
  /* template */
  __webpack_require__(761),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-progress-tracker/src/Tracker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Tracker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-be353aee", Component.options)
  } else {
    hotAPI.reload("data-v-be353aee", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 727:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "progress-step",
    class: {
      'is-active': _vm.isActive, 'is-complete': _vm.isComplete
    }
  }, [_c('span', {
    staticClass: "progress-marker"
  }, [_vm._v(_vm._s(_vm.marker))]), _vm._v(" "), (_vm.title) ? _c('span', {
    staticClass: "progress-text"
  }, [_c('h4', {
    staticClass: "progress-title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(_vm._s(_vm.text) + "\n    "), _vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-313bad7e", module.exports)
  }
}

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    class: ( _obj = {
      'progress-tracker': true,
      'progress-tracker--border': _vm.border,
      'progress-tracker--spaced': _vm.spaced,
      'progress-tracker--word': _vm.word,
      'progress-tracker--text': _vm.text
    }, _obj[("progress-tracker--" + _vm.alignment)] = _vm.alignment, _obj[("progress-tracker--word-" + _vm.textAlign)] = _vm.wordAlign, _obj )
  }, [_vm._t("default")], 2)
  var _obj;
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-be353aee", module.exports)
  }
}

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent is-6"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Tracker Styles")]), _vm._v(" "), _c('div', {
    staticClass: "block styles-box"
  }, [_c('progress-tracker', _vm._l(([1, 2, 3, 4, 5]), function(item, index) {
    return _c('step-item', {
      key: index,
      attrs: {
        "is-complete": item < 3,
        "is-active": item === 3
      }
    })
  })), _vm._v(" "), _c('progress-tracker', _vm._l(([1, 2, 3, 4, 5]), function(item, index) {
    return _c('step-item', {
      key: index,
      attrs: {
        "marker": item + ''
      }
    })
  })), _vm._v(" "), _c('progress-tracker', _vm._l(([1, 2, 3, 'A', 'B']), function(item, index) {
    return _c('step-item', {
      key: index,
      attrs: {
        "marker": item + ''
      }
    })
  })), _vm._v(" "), _c('progress-tracker', {
    attrs: {
      "border": ""
    }
  }, _vm._l(([1, 2, 3, 'A', 'B']), function(item, index) {
    return _c('step-item', {
      key: index,
      attrs: {
        "marker": item + ''
      }
    })
  })), _vm._v(" "), _c('progress-tracker', {
    attrs: {
      "spaced": ""
    }
  }, _vm._l(([1, 2, 3, 'A', 'B']), function(item, index) {
    return _c('step-item', {
      key: _vm.key,
      attrs: {
        "marker": item + ''
      }
    })
  }))], 1)])]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Tracker Alignments")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('progress-tracker', _vm._l(([1, 2, 3, 4, 5]), function(item, index) {
    return _c('step-item', {
      key: index
    })
  })), _vm._v(" "), _c('progress-tracker', {
    attrs: {
      "alignment": "center"
    }
  }, _vm._l(([1, 2, 3, 4, 5]), function(item, index) {
    return _c('step-item', {
      key: index
    })
  })), _vm._v(" "), _c('progress-tracker', {
    attrs: {
      "alignment": "right"
    }
  }, _vm._l(([1, 2, 3, 4, 5]), function(item, index) {
    return _c('step-item', {
      key: index
    })
  })), _vm._v(" "), _c('progress-tracker', {
    attrs: {
      "word": ""
    }
  }, _vm._l((_vm.stepItems), function(item) {
    return _c('step-item', {
      key: item.title,
      attrs: {
        "marker": item.marker,
        "title": item.title
      }
    })
  })), _vm._v(" "), _c('progress-tracker', {
    attrs: {
      "word": "",
      "word-align": "center"
    }
  }, _vm._l((_vm.stepItems), function(item) {
    return _c('step-item', {
      key: item.title,
      attrs: {
        "marker": item.marker,
        "title": item.title
      }
    })
  })), _vm._v(" "), _c('progress-tracker', {
    attrs: {
      "word": "",
      "text-align": "right"
    }
  }, _vm._l((_vm.stepItems), function(item) {
    return _c('step-item', {
      key: item.title,
      attrs: {
        "marker": item.marker,
        "title": item.title
      }
    })
  })), _vm._v(" "), _c('progress-tracker', {
    attrs: {
      "text": ""
    }
  }, _vm._l((_vm.stepItems), function(item) {
    return _c('step-item', {
      key: item.title,
      attrs: {
        "marker": item.marker,
        "title": item.title
      }
    })
  })), _vm._v(" "), _c('progress-tracker', {
    attrs: {
      "text": "",
      "alignment": "center"
    }
  }, _vm._l((_vm.stepItems), function(item) {
    return _c('step-item', {
      key: item.title,
      attrs: {
        "marker": item.marker,
        "title": item.title
      }
    })
  })), _vm._v(" "), _c('progress-tracker', {
    attrs: {
      "text": "",
      "alignment": "right"
    }
  }, _vm._l((_vm.stepItems), function(item) {
    return _c('step-item', {
      key: item.title,
      attrs: {
        "marker": item.marker,
        "title": item.title
      }
    })
  }))], 1)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tile is-parent is-6"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Tracker Dynamics")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e3449b3c", module.exports)
  }
}

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(651);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("c4102e8c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-be353aee\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Tracker.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-be353aee\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Tracker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(654);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("71e8bcd6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e3449b3c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProgressTracker.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e3449b3c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ProgressTracker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvUHJvZ3Jlc3NUcmFja2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1wcm9ncmVzcy10cmFja2VyL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vU3RlcEl0ZW0udnVlIiwid2VicGFjazovLy9UcmFja2VyLnZ1ZSIsIndlYnBhY2s6Ly8vUHJvZ3Jlc3NUcmFja2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1wcm9ncmVzcy10cmFja2VyL3NyYy9UcmFja2VyLnZ1ZT84Mzc4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Qcm9ncmVzc1RyYWNrZXIudnVlPzJhNGUiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtcHJvZ3Jlc3MtdHJhY2tlci9zcmMvU3RlcEl0ZW0udnVlIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLXByb2dyZXNzLXRyYWNrZXIvc3JjL1RyYWNrZXIudnVlIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLXByb2dyZXNzLXRyYWNrZXIvc3JjL1N0ZXBJdGVtLnZ1ZT9kMjgwIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLXByb2dyZXNzLXRyYWNrZXIvc3JjL1RyYWNrZXIudnVlPzQwNTIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL1Byb2dyZXNzVHJhY2tlci52dWU/Yjg3ZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1wcm9ncmVzcy10cmFja2VyL3NyYy9UcmFja2VyLnZ1ZT85ZjZhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Qcm9ncmVzc1RyYWNrZXIudnVlPzQ2MjEiXSwibmFtZXMiOlsiU3RlcEl0ZW0iLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7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QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQywrQkFBK0IsYUFBYSwwQkFBMEI7QUFDdkU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ25MQTs7QUFFQTtBQUNBLHFDQUFzSztBQUN0SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQWdHLHFFQUFxRTtBQUNySyx5R0FBeUcscUVBQXFFO0FBQzlLO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBLHFDQUFpTjtBQUNqTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNElBQTRJLG9FQUFvRTtBQUNoTixxSkFBcUosb0VBQW9FO0FBQ3pOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJqcy8xMi4yM2RmYzdjYTE2OTdkYjZkYzZjZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZTM0NDliM2NcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Qcm9ncmVzc1RyYWNrZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Byb2dyZXNzVHJhY2tlci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWUzNDQ5YjNjXFxcIn0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Byb2dyZXNzVHJhY2tlci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtZTM0NDliM2NcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2tpbW5oL0NvZGVzL1dlYlNob3AvYWRtaW4tdGVtcGxhdGUvbGFyYXZlbC12dWUtYWRtaW4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL1Byb2dyZXNzVHJhY2tlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBQcm9ncmVzc1RyYWNrZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWUzNDQ5YjNjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZTM0NDliM2NcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL1Byb2dyZXNzVHJhY2tlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIiwiZXhwb3J0IFN0ZXBJdGVtIGZyb20gJy4vU3RlcEl0ZW0nXG5leHBvcnQgZGVmYXVsdCBmcm9tICcuL1RyYWNrZXInXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Z1ZS1idWxtYS1wcm9ncmVzcy10cmFja2VyL3NyYy9pbmRleC5qcyIsIjx0ZW1wbGF0ZT5cbiAgPGxpIGNsYXNzPVwicHJvZ3Jlc3Mtc3RlcFwiIDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IGlzQWN0aXZlLCAnaXMtY29tcGxldGUnOiBpc0NvbXBsZXRlIH1cIj5cbiAgICA8c3BhbiBjbGFzcz1cInByb2dyZXNzLW1hcmtlclwiPnt7IG1hcmtlciB9fTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cInByb2dyZXNzLXRleHRcIiB2LWlmPVwidGl0bGVcIj5cbiAgICAgIDxoNCBjbGFzcz1cInByb2dyZXNzLXRpdGxlXCI+e3sgdGl0bGUgfX08L2g0Pnt7IHRleHQgfX1cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L3NwYW4+XG4gIDwvbGk+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGlzQWN0aXZlOiBCb29sZWFuLFxuICAgIGlzQ29tcGxldGU6IEJvb2xlYW4sXG4gICAgbWFya2VyOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJ1xuICAgIH0sXG4gICAga2luZDogU3RyaW5nLFxuICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgdGV4dDogU3RyaW5nXG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgdGhpcy5faXNTdGVwSXRlbSA9IHRydWVcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGluZGV4ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRwYXJlbnQuJHN0ZXBJdGVtcy5pbmRleE9mKHRoaXMpXG4gICAgfVxuICB9XG5cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFN0ZXBJdGVtLnZ1ZT9hNDljZWYyYyIsIjx0ZW1wbGF0ZT5cbiAgPHVsIDpjbGFzcz1cIntcbiAgICAncHJvZ3Jlc3MtdHJhY2tlcic6IHRydWUsXG4gICAgW2Bwcm9ncmVzcy10cmFja2VyLS0ke2FsaWdubWVudH1gXTogYWxpZ25tZW50LFxuICAgICdwcm9ncmVzcy10cmFja2VyLS1ib3JkZXInOiBib3JkZXIsXG4gICAgJ3Byb2dyZXNzLXRyYWNrZXItLXNwYWNlZCc6IHNwYWNlZCxcbiAgICAncHJvZ3Jlc3MtdHJhY2tlci0td29yZCc6IHdvcmQsXG4gICAgW2Bwcm9ncmVzcy10cmFja2VyLS13b3JkLSR7dGV4dEFsaWdufWBdOiB3b3JkQWxpZ24sXG4gICAgJ3Byb2dyZXNzLXRyYWNrZXItLXRleHQnOiB0ZXh0XG4gIH1cIj5cbiAgICA8c2xvdD48L3Nsb3Q+XG4gIDwvdWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGFsaWdubWVudDogU3RyaW5nLFxuICAgIHN0ZXA6IE51bWJlcixcbiAgICBib3JkZXI6IEJvb2xlYW4sXG4gICAgc3BhY2VkOiBCb29sZWFuLFxuICAgIHdvcmQ6IEJvb2xlYW4sXG4gICAgd29yZEFsaWduOiBTdHJpbmcsXG4gICAgdGV4dDogQm9vbGVhbixcbiAgICB0ZXh0QWxpZ246IFN0cmluZ1xuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgJHN0ZXBJdGVtcyAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLl9pc1N0ZXBJdGVtKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCAnfmJ1bG1hL3Nhc3MvdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XG5AaW1wb3J0IFwifnByb2dyZXNzLXRyYWNrZXIvYXBwL3N0eWxlcy9fcHJvZ3Jlc3MtdHJhY2tlci5zY3NzXCI7XG5cbi5wcm9ncmVzcy1zdGVwOm5vdCg6bGFzdC1jaGlsZCk6OmFmdGVyIHtcbiAgei1pbmRleDogMDtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVHJhY2tlci52dWU/NjQ0M2M4NDIiLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtYW5jZXN0b3JcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudCBpcy02XCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlRyYWNrZXIgU3R5bGVzPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2sgc3R5bGVzLWJveFwiPlxuICAgICAgICAgICAgPHByb2dyZXNzLXRyYWNrZXI+XG4gICAgICAgICAgICAgIDxzdGVwLWl0ZW0gdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIFsxLCAyLCAzLCA0LCA1XVwiIDprZXk9XCJpbmRleFwiIDppcy1jb21wbGV0ZT1cIml0ZW0gPCAzXCIgOmlzLWFjdGl2ZT1cIml0ZW0gPT09IDNcIj48L3N0ZXAtaXRlbT5cbiAgICAgICAgICAgIDwvcHJvZ3Jlc3MtdHJhY2tlcj5cbiAgICAgICAgICAgIDxwcm9ncmVzcy10cmFja2VyPlxuICAgICAgICAgICAgICA8c3RlcC1pdGVtIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBbMSwgMiwgMywgNCwgNV1cIiA6a2V5PVwiaW5kZXhcIiA6bWFya2VyPVwiaXRlbSArICcnXCI+PC9zdGVwLWl0ZW0+XG4gICAgICAgICAgICA8L3Byb2dyZXNzLXRyYWNrZXI+XG4gICAgICAgICAgICA8cHJvZ3Jlc3MtdHJhY2tlcj5cbiAgICAgICAgICAgICAgPHN0ZXAtaXRlbSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gWzEsIDIsIDMsICdBJywgJ0InXVwiIDprZXk9XCJpbmRleFwiIDptYXJrZXI9XCJpdGVtICsgJydcIj48L3N0ZXAtaXRlbT5cbiAgICAgICAgICAgIDwvcHJvZ3Jlc3MtdHJhY2tlcj5cbiAgICAgICAgICAgIDxwcm9ncmVzcy10cmFja2VyIGJvcmRlcj5cbiAgICAgICAgICAgICAgPHN0ZXAtaXRlbSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gWzEsIDIsIDMsICdBJywgJ0InXVwiIDprZXk9XCJpbmRleFwiIDptYXJrZXI9XCJpdGVtICsgJydcIj48L3N0ZXAtaXRlbT5cbiAgICAgICAgICAgIDwvcHJvZ3Jlc3MtdHJhY2tlcj5cbiAgICAgICAgICAgIDxwcm9ncmVzcy10cmFja2VyIHNwYWNlZD5cbiAgICAgICAgICAgICAgPHN0ZXAtaXRlbSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gWzEsIDIsIDMsICdBJywgJ0InXVwiIDprZXk9XCJrZXlcIiA6bWFya2VyPVwiaXRlbSArICcnXCI+PC9zdGVwLWl0ZW0+XG4gICAgICAgICAgICA8L3Byb2dyZXNzLXRyYWNrZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1wYXJlbnQgaXMtNlwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94XCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5UcmFja2VyIER5bmFtaWNzPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1hbmNlc3RvclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50XCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlRyYWNrZXIgQWxpZ25tZW50czwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrXCI+XG4gICAgICAgICAgICA8cHJvZ3Jlc3MtdHJhY2tlcj5cbiAgICAgICAgICAgICAgPHN0ZXAtaXRlbSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gWzEsIDIsIDMsIDQsIDVdXCIgOmtleT1cImluZGV4XCI+PC9zdGVwLWl0ZW0+XG4gICAgICAgICAgICA8L3Byb2dyZXNzLXRyYWNrZXI+XG4gICAgICAgICAgICA8cHJvZ3Jlc3MtdHJhY2tlciBhbGlnbm1lbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHN0ZXAtaXRlbSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gWzEsIDIsIDMsIDQsIDVdXCIgOmtleT1cImluZGV4XCI+PC9zdGVwLWl0ZW0+XG4gICAgICAgICAgICA8L3Byb2dyZXNzLXRyYWNrZXI+XG4gICAgICAgICAgICA8cHJvZ3Jlc3MtdHJhY2tlciBhbGlnbm1lbnQ9XCJyaWdodFwiPlxuICAgICAgICAgICAgICA8c3RlcC1pdGVtIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBbMSwgMiwgMywgNCwgNV1cIiA6a2V5PVwiaW5kZXhcIj48L3N0ZXAtaXRlbT5cbiAgICAgICAgICAgIDwvcHJvZ3Jlc3MtdHJhY2tlcj5cbiAgICAgICAgICAgIDxwcm9ncmVzcy10cmFja2VyIHdvcmQ+XG4gICAgICAgICAgICAgIDxzdGVwLWl0ZW0gdi1mb3I9XCJpdGVtIGluIHN0ZXBJdGVtc1wiIDprZXk9XCJpdGVtLnRpdGxlXCIgOm1hcmtlcj1cIml0ZW0ubWFya2VyXCIgOnRpdGxlPVwiaXRlbS50aXRsZVwiPjwvc3RlcC1pdGVtPlxuICAgICAgICAgICAgPC9wcm9ncmVzcy10cmFja2VyPlxuICAgICAgICAgICAgPHByb2dyZXNzLXRyYWNrZXIgd29yZCB3b3JkLWFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzdGVwLWl0ZW0gdi1mb3I9XCJpdGVtIGluIHN0ZXBJdGVtc1wiIDprZXk9XCJpdGVtLnRpdGxlXCIgOm1hcmtlcj1cIml0ZW0ubWFya2VyXCIgOnRpdGxlPVwiaXRlbS50aXRsZVwiPjwvc3RlcC1pdGVtPlxuICAgICAgICAgICAgPC9wcm9ncmVzcy10cmFja2VyPlxuICAgICAgICAgICAgPHByb2dyZXNzLXRyYWNrZXIgd29yZCB0ZXh0LWFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgPHN0ZXAtaXRlbSB2LWZvcj1cIml0ZW0gaW4gc3RlcEl0ZW1zXCIgOmtleT1cIml0ZW0udGl0bGVcIiA6bWFya2VyPVwiaXRlbS5tYXJrZXJcIiA6dGl0bGU9XCJpdGVtLnRpdGxlXCI+PC9zdGVwLWl0ZW0+XG4gICAgICAgICAgICA8L3Byb2dyZXNzLXRyYWNrZXI+XG4gICAgICAgICAgICA8cHJvZ3Jlc3MtdHJhY2tlciB0ZXh0PlxuICAgICAgICAgICAgICA8c3RlcC1pdGVtIHYtZm9yPVwiaXRlbSBpbiBzdGVwSXRlbXNcIiA6a2V5PVwiaXRlbS50aXRsZVwiIDptYXJrZXI9XCJpdGVtLm1hcmtlclwiIDp0aXRsZT1cIml0ZW0udGl0bGVcIj48L3N0ZXAtaXRlbT5cbiAgICAgICAgICAgIDwvcHJvZ3Jlc3MtdHJhY2tlcj5cbiAgICAgICAgICAgIDxwcm9ncmVzcy10cmFja2VyIHRleHQgYWxpZ25tZW50PVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzdGVwLWl0ZW0gdi1mb3I9XCJpdGVtIGluIHN0ZXBJdGVtc1wiIDprZXk9XCJpdGVtLnRpdGxlXCIgOm1hcmtlcj1cIml0ZW0ubWFya2VyXCIgOnRpdGxlPVwiaXRlbS50aXRsZVwiPjwvc3RlcC1pdGVtPlxuICAgICAgICAgICAgPC9wcm9ncmVzcy10cmFja2VyPlxuICAgICAgICAgICAgPHByb2dyZXNzLXRyYWNrZXIgdGV4dCBhbGlnbm1lbnQ9XCJyaWdodFwiPlxuICAgICAgICAgICAgICA8c3RlcC1pdGVtIHYtZm9yPVwiaXRlbSBpbiBzdGVwSXRlbXNcIiA6a2V5PVwiaXRlbS50aXRsZVwiIDptYXJrZXI9XCJpdGVtLm1hcmtlclwiIDp0aXRsZT1cIml0ZW0udGl0bGVcIj48L3N0ZXAtaXRlbT5cbiAgICAgICAgICAgIDwvcHJvZ3Jlc3MtdHJhY2tlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBQcm9ncmVzc1RyYWNrZXIsIHsgU3RlcEl0ZW0gfSBmcm9tICd2dWUtYnVsbWEtcHJvZ3Jlc3MtdHJhY2tlcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgUHJvZ3Jlc3NUcmFja2VyLFxuICAgIFN0ZXBJdGVtXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0ZXBJdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdTdGVwIDEnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ1N0ZXAgMidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnU3RlcCAzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGl0bGU6ICdTdGVwIDQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ1N0ZXAgNSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfVxuXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLmJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4IDAgMDtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gUHJvZ3Jlc3NUcmFja2VyLnZ1ZT8yYjY2NGM1ZSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnByb2dyZXNzLXRyYWNrZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDQwcHggYXV0bztcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ucHJvZ3Jlc3Mtc3RlcCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDEgMSBhdXRvO1xcbiAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtaW4td2lkdGg6IDI4cHg7XFxufVxcbi5wcm9ncmVzcy1zdGVwOmxhc3QtY2hpbGQge1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDA7XFxuICAgICAgICAgICAgZmxleC1ncm93OiAwO1xcbn1cXG4ucHJvZ3Jlc3Mtc3RlcDpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgdG9wOiAxMnB4O1xcbiAgICBib3R0b206IDEycHg7XFxuICAgIHJpZ2h0OiAtMTRweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNHB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcbi5wcm9ncmVzcy1tYXJrZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDIwO1xcbiAgd2lkdGg6IDI4cHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG59XFxuLnByb2dyZXNzLXRleHQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAxNHB4IDkuMzMzMzNweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLnByb2dyZXNzLXRpdGxlIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxufVxcbi5wcm9ncmVzcy1zdGVwIC5wcm9ncmVzcy1tYXJrZXIge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZiNmI2O1xcbn1cXG4ucHJvZ3Jlc3Mtc3RlcDo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I2YjZiNjtcXG59XFxuLnByb2dyZXNzLXN0ZXAgLnByb2dyZXNzLXRleHQsIC5wcm9ncmVzcy1zdGVwIC5wcm9ncmVzcy1zdGVwID4gYSAucHJvZ3Jlc3MtdGV4dCB7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLnByb2dyZXNzLXN0ZXAuaXMtYWN0aXZlIC5wcm9ncmVzcy1tYXJrZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcXG59XFxuLnByb2dyZXNzLXN0ZXAuaXMtY29tcGxldGUgLnByb2dyZXNzLW1hcmtlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NkQyO1xcbn1cXG4ucHJvZ3Jlc3Mtc3RlcC5pcy1jb21wbGV0ZTo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2ODY4NjtcXG59XFxuLnByb2dyZXNzLXN0ZXA6aG92ZXIgLnByb2dyZXNzLW1hcmtlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZBREY1O1xcbn1cXG4ucHJvZ3Jlc3MtdHJhY2tlci0tY2VudGVyIC5wcm9ncmVzcy1zdGVwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnByb2dyZXNzLXRyYWNrZXItLWNlbnRlciAucHJvZ3Jlc3Mtc3RlcDpsYXN0LWNoaWxkIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuLnByb2dyZXNzLXRyYWNrZXItLWNlbnRlciAucHJvZ3Jlc3Mtc3RlcDo6YWZ0ZXIge1xcbiAgICByaWdodDogLTUwJTtcXG59XFxuLnByb2dyZXNzLXRyYWNrZXItLWNlbnRlciAucHJvZ3Jlc3MtbWFya2VyIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4ucHJvZ3Jlc3MtdHJhY2tlci0tcmlnaHQgLnByb2dyZXNzLXN0ZXAge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi5wcm9ncmVzcy10cmFja2VyLS1yaWdodCAucHJvZ3Jlc3Mtc3RlcDpsYXN0LWNoaWxkIHtcXG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuLnByb2dyZXNzLXRyYWNrZXItLXJpZ2h0IC5wcm9ncmVzcy1zdGVwOjphZnRlciB7XFxuICAgIHJpZ2h0OiBjYWxjKC0xMDAlICsgMTRweCk7XFxufVxcbi5wcm9ncmVzcy10cmFja2VyLS1yaWdodCAucHJvZ3Jlc3MtbWFya2VyIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ucHJvZ3Jlc3MtdHJhY2tlci0tYm9yZGVyIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM4Njg2ODY7XFxuICBib3JkZXItcmFkaXVzOiAzOHB4O1xcbn1cXG4ucHJvZ3Jlc3MtdHJhY2tlci0tc3BhY2VkIC5wcm9ncmVzcy1zdGVwOjphZnRlciB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNDhweCk7XFxuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XFxufVxcbi5wcm9ncmVzcy10cmFja2VyLS10ZXh0IC5wcm9ncmVzcy1zdGVwOmxhc3QtY2hpbGQge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcXG4gICAgICAgICAgZmxleC1ncm93OiAxO1xcbn1cXG4ucHJvZ3Jlc3MtdHJhY2tlci0tdGV4dC10b3AgLnByb2dyZXNzLXN0ZXA6OmFmdGVyIHtcXG4gIHRvcDogYXV0bztcXG59XFxuLnByb2dyZXNzLXRyYWNrZXItLXZlcnRpY2FsIHtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnByb2dyZXNzLXRyYWNrZXItLXZlcnRpY2FsIC5wcm9ncmVzcy1zdGVwOjphZnRlciB7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICB0b3A6IDE0cHg7XFxuICAgIGxlZnQ6IDEycHg7XFxuICAgIHdpZHRoOiA0cHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLnByb2dyZXNzLXRyYWNrZXItLXZlcnRpY2FsIC5wcm9ncmVzcy1tYXJrZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxufVxcbi5wcm9ncmVzcy10cmFja2VyLS12ZXJ0aWNhbCAucHJvZ3Jlc3MtdGV4dCB7XFxuICAgIHBhZGRpbmctdG9wOiA3cHg7XFxuICAgIHBhZGRpbmctbGVmdDogNDJweDtcXG59XFxuLnByb2dyZXNzLXRyYWNrZXItLXZlcnRpY2FsIC5wcm9ncmVzcy1zdGVwOm5vdCg6bGFzdC1jaGlsZCkgLnByb2dyZXNzLXRleHQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNDJweDtcXG59XFxuLnByb2dyZXNzLXN0ZXA6bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXIge1xcbiAgei1pbmRleDogMDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYmUzNTNhZWVcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS1wcm9ncmVzcy10cmFja2VyL3NyYy9UcmFja2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYnV0dG9uW2RhdGEtdi1lMzQ0OWIzY10ge1xcbiAgbWFyZ2luOiA1cHggMCAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1lMzQ0OWIzY1wiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL1Byb2dyZXNzVHJhY2tlci52dWVcbi8vIG1vZHVsZSBpZCA9IDY1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1N0ZXBJdGVtLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zMTNiYWQ3ZVxcXCJ9IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1N0ZXBJdGVtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9ub2RlX21vZHVsZXMvdnVlLWJ1bG1hLXByb2dyZXNzLXRyYWNrZXIvc3JjL1N0ZXBJdGVtLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFN0ZXBJdGVtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zMTNiYWQ3ZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTMxM2JhZDdlXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWJ1bG1hLXByb2dyZXNzLXRyYWNrZXIvc3JjL1N0ZXBJdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYmUzNTNhZWVcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UcmFja2VyLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVHJhY2tlci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYmUzNTNhZWVcXFwifSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9UcmFja2VyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9ub2RlX21vZHVsZXMvdnVlLWJ1bG1hLXByb2dyZXNzLXRyYWNrZXIvc3JjL1RyYWNrZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVHJhY2tlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYmUzNTNhZWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1iZTM1M2FlZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1idWxtYS1wcm9ncmVzcy10cmFja2VyL3NyYy9UcmFja2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInByb2dyZXNzLXN0ZXBcIixcbiAgICBjbGFzczoge1xuICAgICAgJ2lzLWFjdGl2ZSc6IF92bS5pc0FjdGl2ZSwgJ2lzLWNvbXBsZXRlJzogX3ZtLmlzQ29tcGxldGVcbiAgICB9XG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzcy1tYXJrZXJcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0ubWFya2VyKSldKSwgX3ZtLl92KFwiIFwiKSwgKF92bS50aXRsZSkgPyBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzcy10ZXh0XCJcbiAgfSwgW19jKCdoNCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcm9ncmVzcy10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksIF92bS5fdihfdm0uX3MoX3ZtLnRleHQpICsgXCJcXG4gICAgXCIpLCBfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMikgOiBfdm0uX2UoKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTMxM2JhZDdlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzEzYmFkN2VcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vdnVlLWJ1bG1hLXByb2dyZXNzLXRyYWNrZXIvc3JjL1N0ZXBJdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3VsJywge1xuICAgIGNsYXNzOiAoIF9vYmogPSB7XG4gICAgICAncHJvZ3Jlc3MtdHJhY2tlcic6IHRydWUsXG4gICAgICAncHJvZ3Jlc3MtdHJhY2tlci0tYm9yZGVyJzogX3ZtLmJvcmRlcixcbiAgICAgICdwcm9ncmVzcy10cmFja2VyLS1zcGFjZWQnOiBfdm0uc3BhY2VkLFxuICAgICAgJ3Byb2dyZXNzLXRyYWNrZXItLXdvcmQnOiBfdm0ud29yZCxcbiAgICAgICdwcm9ncmVzcy10cmFja2VyLS10ZXh0JzogX3ZtLnRleHRcbiAgICB9LCBfb2JqWyhcInByb2dyZXNzLXRyYWNrZXItLVwiICsgX3ZtLmFsaWdubWVudCldID0gX3ZtLmFsaWdubWVudCwgX29ialsoXCJwcm9ncmVzcy10cmFja2VyLS13b3JkLVwiICsgX3ZtLnRleHRBbGlnbildID0gX3ZtLndvcmRBbGlnbiwgX29iaiApXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbiAgdmFyIF9vYmo7XG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWJlMzUzYWVlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYmUzNTNhZWVcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vdnVlLWJ1bG1hLXByb2dyZXNzLXRyYWNrZXIvc3JjL1RyYWNrZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA3NjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1hbmNlc3RvclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50IGlzLTZcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIlRyYWNrZXIgU3R5bGVzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgc3R5bGVzLWJveFwiXG4gIH0sIFtfYygncHJvZ3Jlc3MtdHJhY2tlcicsIF92bS5fbCgoWzEsIDIsIDMsIDQsIDVdKSwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICByZXR1cm4gX2MoJ3N0ZXAtaXRlbScsIHtcbiAgICAgIGtleTogaW5kZXgsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcImlzLWNvbXBsZXRlXCI6IGl0ZW0gPCAzLFxuICAgICAgICBcImlzLWFjdGl2ZVwiOiBpdGVtID09PSAzXG4gICAgICB9XG4gICAgfSlcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfYygncHJvZ3Jlc3MtdHJhY2tlcicsIF92bS5fbCgoWzEsIDIsIDMsIDQsIDVdKSwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICByZXR1cm4gX2MoJ3N0ZXAtaXRlbScsIHtcbiAgICAgIGtleTogaW5kZXgsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm1hcmtlclwiOiBpdGVtICsgJydcbiAgICAgIH1cbiAgICB9KVxuICB9KSksIF92bS5fdihcIiBcIiksIF9jKCdwcm9ncmVzcy10cmFja2VyJywgX3ZtLl9sKChbMSwgMiwgMywgJ0EnLCAnQiddKSwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICByZXR1cm4gX2MoJ3N0ZXAtaXRlbScsIHtcbiAgICAgIGtleTogaW5kZXgsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm1hcmtlclwiOiBpdGVtICsgJydcbiAgICAgIH1cbiAgICB9KVxuICB9KSksIF92bS5fdihcIiBcIiksIF9jKCdwcm9ncmVzcy10cmFja2VyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImJvcmRlclwiOiBcIlwiXG4gICAgfVxuICB9LCBfdm0uX2woKFsxLCAyLCAzLCAnQScsICdCJ10pLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnc3RlcC1pdGVtJywge1xuICAgICAga2V5OiBpbmRleCxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwibWFya2VyXCI6IGl0ZW0gKyAnJ1xuICAgICAgfVxuICAgIH0pXG4gIH0pKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Byb2dyZXNzLXRyYWNrZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3BhY2VkXCI6IFwiXCJcbiAgICB9XG4gIH0sIF92bS5fbCgoWzEsIDIsIDMsICdBJywgJ0InXSksIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgcmV0dXJuIF9jKCdzdGVwLWl0ZW0nLCB7XG4gICAgICBrZXk6IF92bS5rZXksXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm1hcmtlclwiOiBpdGVtICsgJydcbiAgICAgIH1cbiAgICB9KVxuICB9KSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtYW5jZXN0b3JcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudFwiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiVHJhY2tlciBBbGlnbm1lbnRzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2tcIlxuICB9LCBbX2MoJ3Byb2dyZXNzLXRyYWNrZXInLCBfdm0uX2woKFsxLCAyLCAzLCA0LCA1XSksIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgcmV0dXJuIF9jKCdzdGVwLWl0ZW0nLCB7XG4gICAgICBrZXk6IGluZGV4XG4gICAgfSlcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfYygncHJvZ3Jlc3MtdHJhY2tlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJhbGlnbm1lbnRcIjogXCJjZW50ZXJcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChbMSwgMiwgMywgNCwgNV0pLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnc3RlcC1pdGVtJywge1xuICAgICAga2V5OiBpbmRleFxuICAgIH0pXG4gIH0pKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Byb2dyZXNzLXRyYWNrZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYWxpZ25tZW50XCI6IFwicmlnaHRcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChbMSwgMiwgMywgNCwgNV0pLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgIHJldHVybiBfYygnc3RlcC1pdGVtJywge1xuICAgICAga2V5OiBpbmRleFxuICAgIH0pXG4gIH0pKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Byb2dyZXNzLXRyYWNrZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwid29yZFwiOiBcIlwiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS5zdGVwSXRlbXMpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdzdGVwLWl0ZW0nLCB7XG4gICAgICBrZXk6IGl0ZW0udGl0bGUsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm1hcmtlclwiOiBpdGVtLm1hcmtlcixcbiAgICAgICAgXCJ0aXRsZVwiOiBpdGVtLnRpdGxlXG4gICAgICB9XG4gICAgfSlcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfYygncHJvZ3Jlc3MtdHJhY2tlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ3b3JkXCI6IFwiXCIsXG4gICAgICBcIndvcmQtYWxpZ25cIjogXCJjZW50ZXJcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0uc3RlcEl0ZW1zKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnc3RlcC1pdGVtJywge1xuICAgICAga2V5OiBpdGVtLnRpdGxlLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJtYXJrZXJcIjogaXRlbS5tYXJrZXIsXG4gICAgICAgIFwidGl0bGVcIjogaXRlbS50aXRsZVxuICAgICAgfVxuICAgIH0pXG4gIH0pKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Byb2dyZXNzLXRyYWNrZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwid29yZFwiOiBcIlwiLFxuICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwicmlnaHRcIlxuICAgIH1cbiAgfSwgX3ZtLl9sKChfdm0uc3RlcEl0ZW1zKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBfYygnc3RlcC1pdGVtJywge1xuICAgICAga2V5OiBpdGVtLnRpdGxlLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJtYXJrZXJcIjogaXRlbS5tYXJrZXIsXG4gICAgICAgIFwidGl0bGVcIjogaXRlbS50aXRsZVxuICAgICAgfVxuICAgIH0pXG4gIH0pKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Byb2dyZXNzLXRyYWNrZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGV4dFwiOiBcIlwiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS5zdGVwSXRlbXMpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdzdGVwLWl0ZW0nLCB7XG4gICAgICBrZXk6IGl0ZW0udGl0bGUsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm1hcmtlclwiOiBpdGVtLm1hcmtlcixcbiAgICAgICAgXCJ0aXRsZVwiOiBpdGVtLnRpdGxlXG4gICAgICB9XG4gICAgfSlcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfYygncHJvZ3Jlc3MtdHJhY2tlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0ZXh0XCI6IFwiXCIsXG4gICAgICBcImFsaWdubWVudFwiOiBcImNlbnRlclwiXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS5zdGVwSXRlbXMpLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIF9jKCdzdGVwLWl0ZW0nLCB7XG4gICAgICBrZXk6IGl0ZW0udGl0bGUsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcIm1hcmtlclwiOiBpdGVtLm1hcmtlcixcbiAgICAgICAgXCJ0aXRsZVwiOiBpdGVtLnRpdGxlXG4gICAgICB9XG4gICAgfSlcbiAgfSkpLCBfdm0uX3YoXCIgXCIpLCBfYygncHJvZ3Jlc3MtdHJhY2tlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0ZXh0XCI6IFwiXCIsXG4gICAgICBcImFsaWdubWVudFwiOiBcInJpZ2h0XCJcbiAgICB9XG4gIH0sIF92bS5fbCgoX3ZtLnN0ZXBJdGVtcyksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ3N0ZXAtaXRlbScsIHtcbiAgICAgIGtleTogaXRlbS50aXRsZSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwibWFya2VyXCI6IGl0ZW0ubWFya2VyLFxuICAgICAgICBcInRpdGxlXCI6IGl0ZW0udGl0bGVcbiAgICAgIH1cbiAgICB9KVxuICB9KSldLCAxKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudCBpcy02XCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJUcmFja2VyIER5bmFtaWNzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2tcIlxuICB9KV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1lMzQ0OWIzY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWUzNDQ5YjNjXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvUHJvZ3Jlc3NUcmFja2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMTIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LWJlMzUzYWVlXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UcmFja2VyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJjNDEwMmU4Y1wiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYmUzNTNhZWVcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RyYWNrZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1iZTM1M2FlZVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVHJhY2tlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWJlMzUzYWVlXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vfi92dWUtYnVsbWEtcHJvZ3Jlc3MtdHJhY2tlci9zcmMvVHJhY2tlci52dWVcbi8vIG1vZHVsZSBpZCA9IDgwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LWUzNDQ5YjNjXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUHJvZ3Jlc3NUcmFja2VyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNzFlOGJjZDZcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZTM0NDliM2NcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Qcm9ncmVzc1RyYWNrZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LWUzNDQ5YjNjXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUHJvZ3Jlc3NUcmFja2VyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZTM0NDliM2NcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Qcm9ncmVzc1RyYWNrZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA4MDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMiJdLCJzb3VyY2VSb290IjoiIn0=
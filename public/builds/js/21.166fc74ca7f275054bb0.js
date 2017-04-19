webpackJsonp([21],{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(773)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(596),
  /* template */
  __webpack_require__(710),
  /* scopeId */
  "data-v-05c177ed",
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/components/Switch.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Switch.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05c177ed", Component.options)
  } else {
    hotAPI.reload("data-v-05c177ed", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//

exports.default = {
  props: {
    disabled: Boolean,
    isFullwidth: Boolean,
    type: String,
    size: String,
    checked: Boolean,
    name: String
  },

  data: function data() {
    return {
      value: null
    };
  },
  beforeMount: function beforeMount() {
    this.value = this.checked;
  },
  mounted: function mounted() {
    this.$emit('input', this.value = !!this.checked);
  },


  computed: {
    classObject: function classObject() {
      var _ref;

      var type = this.type,
          size = this.size,
          value = this.value;

      return _ref = {}, _defineProperty(_ref, 'is-' + type, type), _defineProperty(_ref, 'is-' + size, size), _defineProperty(_ref, 'checked', value), _ref;
    }
  },

  watch: {
    value: function value(val) {
      this.$emit('input', val);
    }
  }
};

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueBulmaSwitch = __webpack_require__(699);

var _vueBulmaSwitch2 = _interopRequireDefault(_vueBulmaSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    VbSwitch: _vueBulmaSwitch2.default
  },

  data: function data() {
    return {
      value: false
    };
  },


  computed: {
    switchStat: function switchStat() {
      return this.value ? 'On' : 'Off';
    }
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

// do not use below code, because `Switch` is svg tag.
// import Switch from 'vue-bulma-switch'

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.button[data-v-05c177ed] {\n  margin: 5px 0 0;\n}\np[data-v-05c177ed] {\n  margin-bottom: 20px;\n}\n.tooltip-value[data-v-05c177ed] {\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.switch {\n  --height: 22px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  position: relative;\n  outline: 0;\n  border-radius: calc(0.8 * var(--height));\n  width: calc(1.625 * var(--height));\n  height: var(--height);\n  background-color: #dbdbdb;\n  border: 1px solid #dbdbdb;\n  cursor: pointer;\n  box-sizing: border-box;\n  display: inline-block;\n  -webkit-tap-highlight-color: transparent;\n}\n.switch input {\n    opacity: 0;\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 1;\n    cursor: pointer;\n}\n.switch:before, .switch:after {\n    content: \" \";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: calc(var(--height) - 2px);\n    border-radius: calc((var(--height) - 2px) / 2);\n    transition: .233s;\n}\n.switch:before {\n    width: calc(1.625 * var(--height) - 2px);\n    background-color: #dbdbdb;\n}\n.switch:after {\n    width: calc(var(--height) - 2px);\n    background-color: #FFF;\n    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);\n}\n.switch.checked {\n    border-color: #4a4a4a;\n    background-color: #4a4a4a;\n}\n.switch.checked:before {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n}\n.switch.checked:after {\n      -webkit-transform: translateX(calc(0.625 * var(--height)));\n              transform: translateX(calc(0.625 * var(--height)));\n}\n.switch.is-white.checked {\n    border-color: white;\n    background-color: white;\n}\n.switch.is-black.checked {\n    border-color: #0a0a0a;\n    background-color: #0a0a0a;\n}\n.switch.is-light.checked {\n    border-color: whitesmoke;\n    background-color: whitesmoke;\n}\n.switch.is-dark.checked {\n    border-color: #363636;\n    background-color: #363636;\n}\n.switch.is-primary.checked {\n    border-color: #00d1b2;\n    background-color: #00d1b2;\n}\n.switch.is-info.checked {\n    border-color: #3273dc;\n    background-color: #3273dc;\n}\n.switch.is-success.checked {\n    border-color: #23d160;\n    background-color: #23d160;\n}\n.switch.is-warning.checked {\n    border-color: #ffdd57;\n    background-color: #ffdd57;\n}\n.switch.is-danger.checked {\n    border-color: #ff3860;\n    background-color: #ff3860;\n}\n.switch.is-small {\n    --height: 12px;\n}\n.switch.is-medium {\n    --height: 28px;\n}\n.switch.is-large {\n    --height: 32px;\n}\n", ""]);

// exports


/***/ }),

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(781)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(566),
  /* template */
  __webpack_require__(728),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-switch/src/Switch.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Switch.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-327d11d2", Component.options)
  } else {
    hotAPI.reload("data-v-327d11d2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 710:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent is-4"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Styles")]), _vm._v(" "), _c('div', {
    staticClass: "block styles-box"
  }, [_c('p', [_c('vb-switch', {
    attrs: {
      "checked": ""
    }
  })], 1), _vm._v(" "), _c('p', [_c('vb-switch', {
    attrs: {
      "checked": "",
      "type": "primary"
    }
  })], 1), _vm._v(" "), _c('p', [_c('vb-switch', {
    attrs: {
      "checked": "",
      "type": "info"
    }
  })], 1), _vm._v(" "), _c('p', [_c('vb-switch', {
    attrs: {
      "checked": "",
      "type": "success"
    }
  })], 1), _vm._v(" "), _c('p', [_c('vb-switch', {
    attrs: {
      "checked": "",
      "type": "warning"
    }
  })], 1), _vm._v(" "), _c('p', [_c('vb-switch', {
    attrs: {
      "checked": "",
      "type": "danger"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-4"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Sizes")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('p', [_c('vb-switch', {
    attrs: {
      "size": "small"
    }
  })], 1), _vm._v(" "), _c('p', [_c('vb-switch', {
    attrs: {
      "size": ""
    }
  })], 1), _vm._v(" "), _c('p', [_c('vb-switch', {
    attrs: {
      "size": "medium"
    }
  })], 1), _vm._v(" "), _c('p', [_c('vb-switch', {
    attrs: {
      "size": "large"
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-4"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Dynamics")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('p', [_c('vb-switch', {
    attrs: {
      "type": "success",
      "size": "large",
      "checked": _vm.value
    },
    model: {
      value: (_vm.value),
      callback: function($$v) {
        _vm.value = $$v
      },
      expression: "value"
    }
  })], 1), _vm._v(" "), _c('p', [_vm._v("\n            " + _vm._s(_vm.switchStat) + "\n          ")])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-05c177ed", module.exports)
  }
}

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "switch",
    class: _vm.classObject
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.value),
      expression: "value"
    }],
    attrs: {
      "type": "checkbox",
      "name": _vm.name,
      "disabled": _vm.disabled
    },
    domProps: {
      "checked": Array.isArray(_vm.value) ? _vm._i(_vm.value, null) > -1 : (_vm.value)
    },
    on: {
      "__c": function($event) {
        var $$a = _vm.value,
          $$el = $event.target,
          $$c = $$el.checked ? (true) : (false);
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$c) {
            $$i < 0 && (_vm.value = $$a.concat($$v))
          } else {
            $$i > -1 && (_vm.value = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
          }
        } else {
          _vm.value = $$c
        }
      }
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-327d11d2", module.exports)
  }
}

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(623);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1c3e3474", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-05c177ed\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Switch.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-05c177ed\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Switch.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(631);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("0c586d75", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-327d11d2\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Switch.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-327d11d2\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Switch.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvU3dpdGNoLnZ1ZSIsIndlYnBhY2s6Ly8vU3dpdGNoLnZ1ZSIsIndlYnBhY2s6Ly8vU3dpdGNoLnZ1ZT8yYTgzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Td2l0Y2gudnVlPzdhZmQiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtc3dpdGNoL3NyYy9Td2l0Y2gudnVlPzdiMjYiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtc3dpdGNoL3NyYy9Td2l0Y2gudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Td2l0Y2gudnVlPzQxNTYiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtc3dpdGNoL3NyYy9Td2l0Y2gudnVlPzY5ODMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL1N3aXRjaC52dWU/ODcwNyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1zd2l0Y2gvc3JjL1N3aXRjaC52dWU/OGM4YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBLHVCQUE0Szs7QUFFNUs7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7Ozs7Y0FHQTtpQkFDQTtVQUNBO1VBQ0E7YUFDQTtVQUdBO0FBUkE7O3dCQVNBOzthQUdBO0FBRkE7QUFJQTtzQ0FDQTtzQkFDQTtBQUVBOzhCQUNB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QTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDN0ZBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDN0NBOztBQUVBO0FBQ0EscUNBQWlOO0FBQ2pOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0SUFBNEksb0VBQW9FO0FBQ2hOLHFKQUFxSixvRUFBb0U7QUFDek47QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0EscUNBQXNLO0FBQ3RLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBZ0cscUVBQXFFO0FBQ3JLLHlHQUF5RyxxRUFBcUU7QUFDOUs7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImpzLzIxLjE2NmZjNzRjYTdmMjc1MDU0YmIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wNWMxNzdlZFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1N3aXRjaC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU3dpdGNoLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDVjMTc3ZWRcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU3dpdGNoLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi0wNWMxNzdlZFwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvU3dpdGNoLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFN3aXRjaC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDVjMTc3ZWRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wNWMxNzdlZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvU3dpdGNoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMjEiLCI8dGVtcGxhdGU+XG4gIDxsYWJlbCBjbGFzcz1cInN3aXRjaFwiIDpjbGFzcz1cImNsYXNzT2JqZWN0XCI+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIDpuYW1lPVwibmFtZVwiIDpkaXNhYmxlZD1cImRpc2FibGVkXCIgdi1tb2RlbD1cInZhbHVlXCI+XG4gIDwvbGFiZWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIGlzRnVsbHdpZHRoOiBCb29sZWFuLFxuICAgIHR5cGU6IFN0cmluZyxcbiAgICBzaXplOiBTdHJpbmcsXG4gICAgY2hlY2tlZDogQm9vbGVhbixcbiAgICBuYW1lOiBTdHJpbmdcbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IG51bGxcbiAgICB9XG4gIH0sXG5cbiAgYmVmb3JlTW91bnQgKCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmNoZWNrZWRcbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMudmFsdWUgPSAhIXRoaXMuY2hlY2tlZClcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzT2JqZWN0ICgpIHtcbiAgICAgIGNvbnN0IHsgdHlwZSwgc2l6ZSwgdmFsdWUgfSA9IHRoaXNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtgaXMtJHt0eXBlfWBdOiB0eXBlLFxuICAgICAgICBbYGlzLSR7c2l6ZX1gXTogc2l6ZSxcbiAgICAgICAgY2hlY2tlZDogdmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZSAodmFsKSB7XG4gICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgJ35idWxtYS9zYXNzL3V0aWxpdGllcy92YXJpYWJsZXMnO1xuXG4uc3dpdGNoIHtcbiAgLS1oZWlnaHQ6IDIycHg7XG5cbiAgaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBhcHBlYXJhbmNlOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC44ICogdmFyKC0taGVpZ2h0KSk7XG4gIHdpZHRoOiBjYWxjKDEuNjI1ICogdmFyKC0taGVpZ2h0KSk7XG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJvcmRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0KSAtIDJweCk7XG4gICAgYm9yZGVyLXJhZGl1czogY2FsYygodmFyKC0taGVpZ2h0KSAtIDJweCkgLyAyKTtcbiAgICB0cmFuc2l0aW9uOiAuMjMzcztcbiAgfVxuXG4gICY6YmVmb3JlIHtcbiAgICB3aWR0aDogY2FsYygxLjYyNSAqIHZhcigtLWhlaWdodCkgLSAycHgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5LWxpZ2h0ZXI7XG4gIH1cblxuICAmOmFmdGVyIHtcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1oZWlnaHQpIC0gMnB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDE3LCAxNywgMTcsIDAuMSk7XG4gIH1cblxuICAmLmNoZWNrZWQge1xuICAgIGJvcmRlci1jb2xvcjogJHRleHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQ7XG4gICAgJjpiZWZvcmUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG4gICAgJjphZnRlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygwLjYyNSAqIHZhcigtLWhlaWdodCkpKTtcbiAgICB9XG4gIH1cblxuICAvLyBDb2xvcnNcbiAgQGVhY2ggJG5hbWUsICRwYWlyIGluICRjb2xvcnMge1xuICAgICRjb2xvcjogbnRoKCRwYWlyLCAxKTtcbiAgICAmLmlzLSN7JG5hbWV9IHtcbiAgICAgICYuY2hlY2tlZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU2l6ZXNcbiAgJi5pcy1zbWFsbCB7XG4gICAgLS1oZWlnaHQ6IDEycHhcbiAgfVxuICAmLmlzLW1lZGl1bSB7XG4gICAgLS1oZWlnaHQ6IDI4cHhcbiAgfVxuICAmLmlzLWxhcmdlIHtcbiAgICAtLWhlaWdodDogMzJweFxuICB9XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFN3aXRjaC52dWU/M2YxNWI1Y2IiLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtYW5jZXN0b3JcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudCBpcy00XCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlN0eWxlczwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrIHN0eWxlcy1ib3hcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8dmItc3dpdGNoIGNoZWNrZWQ+PC92Yi1zd2l0Y2g+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHZiLXN3aXRjaCBjaGVja2VkIHR5cGU9XCJwcmltYXJ5XCI+PC92Yi1zd2l0Y2g+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHZiLXN3aXRjaCBjaGVja2VkIHR5cGU9XCJpbmZvXCI+PC92Yi1zd2l0Y2g+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHZiLXN3aXRjaCBjaGVja2VkIHR5cGU9XCJzdWNjZXNzXCI+PC92Yi1zd2l0Y2g+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHZiLXN3aXRjaCBjaGVja2VkIHR5cGU9XCJ3YXJuaW5nXCI+PC92Yi1zd2l0Y2g+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHZiLXN3aXRjaCBjaGVja2VkIHR5cGU9XCJkYW5nZXJcIj48L3ZiLXN3aXRjaD5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudCBpcy00XCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlNpemVzPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8dmItc3dpdGNoIHNpemU9XCJzbWFsbFwiPjwvdmItc3dpdGNoPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDx2Yi1zd2l0Y2ggc2l6ZT1cIlwiPjwvdmItc3dpdGNoPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDx2Yi1zd2l0Y2ggc2l6ZT1cIm1lZGl1bVwiPjwvdmItc3dpdGNoPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDx2Yi1zd2l0Y2ggc2l6ZT1cImxhcmdlXCI+PC92Yi1zd2l0Y2g+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1wYXJlbnQgaXMtNFwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94XCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5EeW5hbWljczwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHZiLXN3aXRjaCB0eXBlPVwic3VjY2Vzc1wiIHNpemU9XCJsYXJnZVwiIDpjaGVja2VkPVwidmFsdWVcIiB2LW1vZGVsPVwidmFsdWVcIj48L3ZiLXN3aXRjaD5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7eyBzd2l0Y2hTdGF0IH19XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vLyBkbyBub3QgdXNlIGJlbG93IGNvZGUsIGJlY2F1c2UgYFN3aXRjaGAgaXMgc3ZnIHRhZy5cbi8vIGltcG9ydCBTd2l0Y2ggZnJvbSAndnVlLWJ1bG1hLXN3aXRjaCdcbmltcG9ydCBWYlN3aXRjaCBmcm9tICd2dWUtYnVsbWEtc3dpdGNoJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBWYlN3aXRjaFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBzd2l0Y2hTdGF0ICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlID8gJ09uJyA6ICdPZmYnXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLmJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4IDAgMDtcbn1cbnAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRvb2x0aXAtdmFsdWUge1xuICB3aWR0aDogMTAwJTtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gU3dpdGNoLnZ1ZT9lYmQ0NjZkZSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5idXR0b25bZGF0YS12LTA1YzE3N2VkXSB7XFxuICBtYXJnaW46IDVweCAwIDA7XFxufVxcbnBbZGF0YS12LTA1YzE3N2VkXSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4udG9vbHRpcC12YWx1ZVtkYXRhLXYtMDVjMTc3ZWRdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wNWMxNzdlZFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL1N3aXRjaC52dWVcbi8vIG1vZHVsZSBpZCA9IDYyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDIxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc3dpdGNoIHtcXG4gIC0taGVpZ2h0OiAyMnB4O1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoMC44ICogdmFyKC0taGVpZ2h0KSk7XFxuICB3aWR0aDogY2FsYygxLjYyNSAqIHZhcigtLWhlaWdodCkpO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnN3aXRjaCBpbnB1dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zd2l0Y2g6YmVmb3JlLCAuc3dpdGNoOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlaWdodCkgLSAycHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKCh2YXIoLS1oZWlnaHQpIC0gMnB4KSAvIDIpO1xcbiAgICB0cmFuc2l0aW9uOiAuMjMzcztcXG59XFxuLnN3aXRjaDpiZWZvcmUge1xcbiAgICB3aWR0aDogY2FsYygxLjYyNSAqIHZhcigtLWhlaWdodCkgLSAycHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xcbn1cXG4uc3dpdGNoOmFmdGVyIHtcXG4gICAgd2lkdGg6IGNhbGModmFyKC0taGVpZ2h0KSAtIDJweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDE3LCAxNywgMTcsIDAuMSk7XFxufVxcbi5zd2l0Y2guY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzRhNGE0YTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcXG59XFxuLnN3aXRjaC5jaGVja2VkOmJlZm9yZSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuLnN3aXRjaC5jaGVja2VkOmFmdGVyIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDAuNjI1ICogdmFyKC0taGVpZ2h0KSkpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMC42MjUgKiB2YXIoLS1oZWlnaHQpKSk7XFxufVxcbi5zd2l0Y2guaXMtd2hpdGUuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uc3dpdGNoLmlzLWJsYWNrLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMwYTBhMGE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTBhMGE7XFxufVxcbi5zd2l0Y2guaXMtbGlnaHQuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuLnN3aXRjaC5pcy1kYXJrLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMzNjM2MzY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7XFxufVxcbi5zd2l0Y2guaXMtcHJpbWFyeS5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDBkMWIyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBkMWIyO1xcbn1cXG4uc3dpdGNoLmlzLWluZm8uY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzMyNzNkYztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNzNkYztcXG59XFxuLnN3aXRjaC5pcy1zdWNjZXNzLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMyM2QxNjA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyM2QxNjA7XFxufVxcbi5zd2l0Y2guaXMtd2FybmluZy5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZkZDU3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZDU3O1xcbn1cXG4uc3dpdGNoLmlzLWRhbmdlci5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmYzODYwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzODYwO1xcbn1cXG4uc3dpdGNoLmlzLXNtYWxsIHtcXG4gICAgLS1oZWlnaHQ6IDEycHg7XFxufVxcbi5zd2l0Y2guaXMtbWVkaXVtIHtcXG4gICAgLS1oZWlnaHQ6IDI4cHg7XFxufVxcbi5zd2l0Y2guaXMtbGFyZ2Uge1xcbiAgICAtLWhlaWdodDogMzJweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzI3ZDExZDJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS1zd2l0Y2gvc3JjL1N3aXRjaC52dWVcbi8vIG1vZHVsZSBpZCA9IDYzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDIxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTMyN2QxMWQyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vU3dpdGNoLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU3dpdGNoLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zMjdkMTFkMlxcXCJ9IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1N3aXRjaC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2tpbW5oL0NvZGVzL1dlYlNob3AvYWRtaW4tdGVtcGxhdGUvbGFyYXZlbC12dWUtYWRtaW4vbm9kZV9tb2R1bGVzL3Z1ZS1idWxtYS1zd2l0Y2gvc3JjL1N3aXRjaC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBTd2l0Y2gudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTMyN2QxMWQyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzI3ZDExZDJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtYnVsbWEtc3dpdGNoL3NyYy9Td2l0Y2gudnVlXG4vLyBtb2R1bGUgaWQgPSA2OTlcbi8vIG1vZHVsZSBjaHVua3MgPSAyMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1hbmNlc3RvclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50IGlzLTRcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIlN0eWxlc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrIHN0eWxlcy1ib3hcIlxuICB9LCBbX2MoJ3AnLCBbX2MoJ3ZiLXN3aXRjaCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjaGVja2VkXCI6IFwiXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW19jKCd2Yi1zd2l0Y2gnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY2hlY2tlZFwiOiBcIlwiLFxuICAgICAgXCJ0eXBlXCI6IFwicHJpbWFyeVwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfYygndmItc3dpdGNoJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNoZWNrZWRcIjogXCJcIixcbiAgICAgIFwidHlwZVwiOiBcImluZm9cIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX2MoJ3ZiLXN3aXRjaCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjaGVja2VkXCI6IFwiXCIsXG4gICAgICBcInR5cGVcIjogXCJzdWNjZXNzXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW19jKCd2Yi1zd2l0Y2gnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY2hlY2tlZFwiOiBcIlwiLFxuICAgICAgXCJ0eXBlXCI6IFwid2FybmluZ1wiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfYygndmItc3dpdGNoJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNoZWNrZWRcIjogXCJcIixcbiAgICAgIFwidHlwZVwiOiBcImRhbmdlclwiXG4gICAgfVxuICB9KV0sIDEpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50IGlzLTRcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIlNpemVzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2tcIlxuICB9LCBbX2MoJ3AnLCBbX2MoJ3ZiLXN3aXRjaCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzaXplXCI6IFwic21hbGxcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX2MoJ3ZiLXN3aXRjaCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzaXplXCI6IFwiXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW19jKCd2Yi1zd2l0Y2gnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2l6ZVwiOiBcIm1lZGl1bVwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfYygndmItc3dpdGNoJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNpemVcIjogXCJsYXJnZVwiXG4gICAgfVxuICB9KV0sIDEpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50IGlzLTRcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIkR5bmFtaWNzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2tcIlxuICB9LCBbX2MoJ3AnLCBbX2MoJ3ZiLXN3aXRjaCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VjY2Vzc1wiLFxuICAgICAgXCJzaXplXCI6IFwibGFyZ2VcIixcbiAgICAgIFwiY2hlY2tlZFwiOiBfdm0udmFsdWVcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS52YWx1ZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS52YWx1ZSA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwidmFsdWVcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnN3aXRjaFN0YXQpICsgXCJcXG4gICAgICAgICAgXCIpXSldKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTA1YzE3N2VkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDVjMTc3ZWRcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Td2l0Y2gudnVlXG4vLyBtb2R1bGUgaWQgPSA3MTBcbi8vIG1vZHVsZSBjaHVua3MgPSAyMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic3dpdGNoXCIsXG4gICAgY2xhc3M6IF92bS5jbGFzc09iamVjdFxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnZhbHVlKSxcbiAgICAgIGV4cHJlc3Npb246IFwidmFsdWVcIlxuICAgIH1dLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiLFxuICAgICAgXCJuYW1lXCI6IF92bS5uYW1lLFxuICAgICAgXCJkaXNhYmxlZFwiOiBfdm0uZGlzYWJsZWRcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImNoZWNrZWRcIjogQXJyYXkuaXNBcnJheShfdm0udmFsdWUpID8gX3ZtLl9pKF92bS52YWx1ZSwgbnVsbCkgPiAtMSA6IChfdm0udmFsdWUpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJfX2NcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHZhciAkJGEgPSBfdm0udmFsdWUsXG4gICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gKHRydWUpIDogKGZhbHNlKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KTtcbiAgICAgICAgICBpZiAoJCRjKSB7XG4gICAgICAgICAgICAkJGkgPCAwICYmIChfdm0udmFsdWUgPSAkJGEuY29uY2F0KCQkdikpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQkaSA+IC0xICYmIChfdm0udmFsdWUgPSAkJGEuc2xpY2UoMCwgJCRpKS5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX3ZtLnZhbHVlID0gJCRjXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMzI3ZDExZDJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zMjdkMTFkMlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi92dWUtYnVsbWEtc3dpdGNoL3NyYy9Td2l0Y2gudnVlXG4vLyBtb2R1bGUgaWQgPSA3Mjhcbi8vIG1vZHVsZSBjaHVua3MgPSAyMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wNWMxNzdlZFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1N3aXRjaC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjFjM2UzNDc0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTA1YzE3N2VkXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU3dpdGNoLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wNWMxNzdlZFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1N3aXRjaC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTA1YzE3N2VkXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvU3dpdGNoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzczXG4vLyBtb2R1bGUgY2h1bmtzID0gMjEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTMyN2QxMWQyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Td2l0Y2gudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjBjNTg2ZDc1XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zMjdkMTFkMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU3dpdGNoLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzI3ZDExZDJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1N3aXRjaC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTMyN2QxMWQyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vfi92dWUtYnVsbWEtc3dpdGNoL3NyYy9Td2l0Y2gudnVlXG4vLyBtb2R1bGUgaWQgPSA3ODFcbi8vIG1vZHVsZSBjaHVua3MgPSAyMSJdLCJzb3VyY2VSb290IjoiIn0=
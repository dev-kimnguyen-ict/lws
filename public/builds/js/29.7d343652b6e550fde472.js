webpackJsonp([29],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(790)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(598),
  /* template */
  __webpack_require__(743),
  /* scopeId */
  "data-v-6818051a",
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/components/Tooltip.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Tooltip.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6818051a", Component.options)
  } else {
    hotAPI.reload("data-v-6818051a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueBulmaTooltip = __webpack_require__(13);

var _vueBulmaTooltip2 = _interopRequireDefault(_vueBulmaTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Tooltip: _vueBulmaTooltip2.default
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
//
//
//
//

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.column[data-v-6818051a] {\n  margin: 25px auto;\n}\n.button[data-v-6818051a] {\n  width: 100%;\n}\n.tooltip[data-v-6818051a] {\n  display: inherit;\n}\n", ""]);

// exports


/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Placements")]), _vm._v(" "), _c('div', {
    staticClass: "columns is-multiline is-mobile"
  }, [_c('div', {
    staticClass: "column is-one-third"
  }, [_c('tooltip', {
    attrs: {
      "label": "top-right",
      "placement": "top-right"
    }
  }, [_c('button', {
    staticClass: "button is-primary has-text-centered"
  }, [_c('span', [_vm._v("top-right")])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "column is-one-third"
  }, [_c('tooltip', {
    attrs: {
      "label": "top",
      "placement": "top"
    }
  }, [_c('button', {
    staticClass: "button is-warning has-text-centered"
  }, [_c('span', [_vm._v("top")])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "column is-one-third"
  }, [_c('tooltip', {
    attrs: {
      "label": "top-left",
      "placement": "top-left"
    }
  }, [_c('button', {
    staticClass: "button is-danger has-text-centered"
  }, [_c('span', [_vm._v("top-left")])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "column is-one-third"
  }, [_c('tooltip', {
    attrs: {
      "label": "right",
      "placement": "right"
    }
  }, [_c('button', {
    staticClass: "button is-info has-text-centered"
  }, [_c('span', [_vm._v("right")])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "column is-one-third"
  }, [_c('tooltip', {
    attrs: {
      "label": "no animate, always, rounded, large, bounce, success",
      "placement": "top",
      "type": "success",
      "size": "large",
      "no-animate": true,
      "always": true,
      "rounded": true
    }
  }, [_c('button', {
    staticClass: "button is-success has-text-centered"
  }, [_c('span', [_vm._v("no animate, always, rounded, large, bounce, success")])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "column is-one-third"
  }, [_c('tooltip', {
    attrs: {
      "label": "left",
      "placement": "left"
    }
  }, [_c('button', {
    staticClass: "button is-info has-text-centered"
  }, [_c('span', [_vm._v("left")])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "column is-one-third"
  }, [_c('tooltip', {
    attrs: {
      "label": "bottom-right",
      "placement": "bottom-right"
    }
  }, [_c('button', {
    staticClass: "button is-primary has-text-centered"
  }, [_c('span', [_vm._v("bottom-right")])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "column is-one-third"
  }, [_c('tooltip', {
    attrs: {
      "label": "bottom",
      "placement": "bottom"
    }
  }, [_c('button', {
    staticClass: "button is-warning has-text-centered"
  }, [_c('span', [_vm._v("bottom")])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "column is-one-third"
  }, [_c('tooltip', {
    attrs: {
      "label": "bottom-left",
      "placement": "bottom-left"
    }
  }, [_c('button', {
    staticClass: "button is-danger has-text-centered"
  }, [_c('span', [_vm._v("bottom-left")])])])], 1)])])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent is-6"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Styles")]), _vm._v(" "), _c('div', {
    staticClass: "columns is-multiline is-mobile"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('tooltip', {
    attrs: {
      "label": "info",
      "type": "info"
    }
  }, [_c('button', {
    staticClass: "button is-info has-text-centered"
  }, [_c('span', [_vm._v("info")])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('tooltip', {
    attrs: {
      "label": "primary",
      "type": "primary"
    }
  }, [_c('button', {
    staticClass: "button is-primary has-text-centered"
  }, [_c('span', [_vm._v("primary")])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('tooltip', {
    attrs: {
      "label": "success",
      "type": "success"
    }
  }, [_c('button', {
    staticClass: "button is-success has-text-centered"
  }, [_c('span', [_vm._v("success")])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('tooltip', {
    attrs: {
      "label": "warning",
      "type": "warning"
    }
  }, [_c('button', {
    staticClass: "button is-warning has-text-centered"
  }, [_c('span', [_vm._v("warning")])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('tooltip', {
    attrs: {
      "label": "danger",
      "type": "danger"
    }
  }, [_c('button', {
    staticClass: "button is-danger has-text-centered"
  }, [_c('span', [_vm._v("danger")])])])], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-6"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Sizes")]), _vm._v(" "), _c('div', {
    staticClass: "columns is-multiline is-mobile"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('tooltip', {
    attrs: {
      "label": "small",
      "type": "small",
      "placement": "bottom-right"
    }
  }, [_c('button', {
    staticClass: "button has-text-centered"
  }, [_c('span', [_vm._v("small")])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('tooltip', {
    attrs: {
      "label": "medium",
      "type": "medium"
    }
  }, [_c('button', {
    staticClass: "button has-text-centered"
  }, [_c('span', [_vm._v("medium")])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('tooltip', {
    attrs: {
      "label": "large",
      "size": "large",
      "placement": "bottom-left"
    }
  }, [_c('button', {
    staticClass: "button has-text-centered"
  }, [_c('span', [_vm._v("large")])])])], 1)])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6818051a", module.exports)
  }
}

/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(640);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("65913cd6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6818051a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tooltip.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6818051a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tooltip.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvVG9vbHRpcC52dWUiLCJ3ZWJwYWNrOi8vL1Rvb2x0aXAudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Ub29sdGlwLnZ1ZT9iNjBiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Ub29sdGlwLnZ1ZT80ZDUwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Ub29sdGlwLnZ1ZT8wNmI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0EsdUJBQTRLOztBQUU1SztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUE0RztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FDMkhBOzs7Ozs7OztBQUlBO0FBRkE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNKQTtBQUNBOzs7QUFHQTtBQUNBLHFEQUFzRCxzQkFBc0IsR0FBRyw0QkFBNEIsZ0JBQWdCLEdBQUcsNkJBQTZCLHFCQUFxQixHQUFHOztBQUVuTDs7Ozs7Ozs7QUNQQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3JNQTs7QUFFQTtBQUNBLHFDQUFpTjtBQUNqTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNElBQTRJLG9FQUFvRTtBQUNoTixxSkFBcUosb0VBQW9FO0FBQ3pOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJqcy8yOS43ZDM0MzY1MmI2ZTU1MGZkZTQ3Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjgxODA1MWFcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Ub29sdGlwLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Ub29sdGlwLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjgxODA1MWFcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVG9vbHRpcC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtNjgxODA1MWFcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2tpbW5oL0NvZGVzL1dlYlNob3AvYWRtaW4tdGVtcGxhdGUvbGFyYXZlbC12dWUtYWRtaW4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL1Rvb2x0aXAudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVG9vbHRpcC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNjgxODA1MWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ODE4MDUxYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvVG9vbHRpcC52dWVcbi8vIG1vZHVsZSBpZCA9IDE1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDI5IiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLWFuY2VzdG9yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1wYXJlbnRcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveFwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+UGxhY2VtZW50czwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgaXMtbXVsdGlsaW5lIGlzLW1vYmlsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy1vbmUtdGhpcmRcIj5cbiAgICAgICAgICAgICAgPHRvb2x0aXAgbGFiZWw9XCJ0b3AtcmlnaHRcIiBwbGFjZW1lbnQ9XCJ0b3AtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXByaW1hcnkgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPnRvcC1yaWdodDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC90b29sdGlwPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLW9uZS10aGlyZFwiPlxuICAgICAgICAgICAgICA8dG9vbHRpcCBsYWJlbD1cInRvcFwiIHBsYWNlbWVudD1cInRvcFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtd2FybmluZyBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+dG9wPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3Rvb2x0aXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtb25lLXRoaXJkXCI+XG4gICAgICAgICAgICAgIDx0b29sdGlwIGxhYmVsPVwidG9wLWxlZnRcIiBwbGFjZW1lbnQ9XCJ0b3AtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtZGFuZ2VyIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj50b3AtbGVmdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC90b29sdGlwPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLW9uZS10aGlyZFwiPlxuICAgICAgICAgICAgICA8dG9vbHRpcCBsYWJlbD1cInJpZ2h0XCIgcGxhY2VtZW50PVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLWluZm8gaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPnJpZ2h0PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3Rvb2x0aXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtb25lLXRoaXJkXCI+XG4gICAgICAgICAgICAgIDx0b29sdGlwIGxhYmVsPVwibm8gYW5pbWF0ZSwgYWx3YXlzLCByb3VuZGVkLCBsYXJnZSwgYm91bmNlLCBzdWNjZXNzXCIgcGxhY2VtZW50PVwidG9wXCIgdHlwZT1cInN1Y2Nlc3NcIiBzaXplPVwibGFyZ2VcIiA6bm8tYW5pbWF0ZT1cInRydWVcIiA6YWx3YXlzPVwidHJ1ZVwiIDpyb3VuZGVkPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtc3VjY2VzcyBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+bm8gYW5pbWF0ZSwgYWx3YXlzLCByb3VuZGVkLCBsYXJnZSwgYm91bmNlLCBzdWNjZXNzPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3Rvb2x0aXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtb25lLXRoaXJkXCI+XG4gICAgICAgICAgICAgIDx0b29sdGlwIGxhYmVsPVwibGVmdFwiIHBsYWNlbWVudD1cImxlZnRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLWluZm8gaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPmxlZnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvdG9vbHRpcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy1vbmUtdGhpcmRcIj5cbiAgICAgICAgICAgICAgPHRvb2x0aXAgbGFiZWw9XCJib3R0b20tcmlnaHRcIiBwbGFjZW1lbnQ9XCJib3R0b20tcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXByaW1hcnkgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPmJvdHRvbS1yaWdodDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC90b29sdGlwPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLW9uZS10aGlyZFwiPlxuICAgICAgICAgICAgICA8dG9vbHRpcCBsYWJlbD1cImJvdHRvbVwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtd2FybmluZyBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+Ym90dG9tPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3Rvb2x0aXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtb25lLXRoaXJkXCI+XG4gICAgICAgICAgICAgIDx0b29sdGlwIGxhYmVsPVwiYm90dG9tLWxlZnRcIiBwbGFjZW1lbnQ9XCJib3R0b20tbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtZGFuZ2VyIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5ib3R0b20tbGVmdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC90b29sdGlwPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtYW5jZXN0b3JcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudCBpcy02XCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlN0eWxlczwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgaXMtbXVsdGlsaW5lIGlzLW1vYmlsZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICA8dG9vbHRpcCBsYWJlbD1cImluZm9cIiB0eXBlPVwiaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtaW5mbyBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+aW5mbzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC90b29sdGlwPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIDx0b29sdGlwIGxhYmVsPVwicHJpbWFyeVwiIHR5cGU9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5IGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5wcmltYXJ5PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3Rvb2x0aXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPHRvb2x0aXAgbGFiZWw9XCJzdWNjZXNzXCIgdHlwZT1cInN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXN1Y2Nlc3MgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPnN1Y2Nlc3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvdG9vbHRpcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICA8dG9vbHRpcCBsYWJlbD1cIndhcm5pbmdcIiB0eXBlPVwid2FybmluZ1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtd2FybmluZyBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+d2FybmluZzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC90b29sdGlwPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIDx0b29sdGlwIGxhYmVsPVwiZGFuZ2VyXCIgdHlwZT1cImRhbmdlclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtZGFuZ2VyIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5kYW5nZXI8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvdG9vbHRpcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50IGlzLTZcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveFwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+U2l6ZXM8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBpcy1tb2JpbGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPHRvb2x0aXAgbGFiZWw9XCJzbWFsbFwiIHR5cGU9XCJzbWFsbFwiIHBsYWNlbWVudD1cImJvdHRvbS1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPnNtYWxsPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3Rvb2x0aXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPHRvb2x0aXAgbGFiZWw9XCJtZWRpdW1cIiB0eXBlPVwibWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+bWVkaXVtPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3Rvb2x0aXA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPHRvb2x0aXAgbGFiZWw9XCJsYXJnZVwiIHNpemU9XCJsYXJnZVwiIHBsYWNlbWVudD1cImJvdHRvbS1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+bGFyZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvdG9vbHRpcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFRvb2x0aXAgZnJvbSAndnVlLWJ1bG1hLXRvb2x0aXAnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIFRvb2x0aXBcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5jb2x1bW4ge1xuICBtYXJnaW46IDI1cHggYXV0bztcbn1cblxuLmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9vbHRpcCB7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFRvb2x0aXAudnVlP2YzMzM0YjFjIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNvbHVtbltkYXRhLXYtNjgxODA1MWFdIHtcXG4gIG1hcmdpbjogMjVweCBhdXRvO1xcbn1cXG4uYnV0dG9uW2RhdGEtdi02ODE4MDUxYV0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi50b29sdGlwW2RhdGEtdi02ODE4MDUxYV0ge1xcbiAgZGlzcGxheTogaW5oZXJpdDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNjgxODA1MWFcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Ub29sdGlwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMjkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtYW5jZXN0b3JcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudFwiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiUGxhY2VtZW50c1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbHVtbnMgaXMtbXVsdGlsaW5lIGlzLW1vYmlsZVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbHVtbiBpcy1vbmUtdGhpcmRcIlxuICB9LCBbX2MoJ3Rvb2x0aXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJ0b3AtcmlnaHRcIixcbiAgICAgIFwicGxhY2VtZW50XCI6IFwidG9wLXJpZ2h0XCJcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1wcmltYXJ5IGhhcy10ZXh0LWNlbnRlcmVkXCJcbiAgfSwgW19jKCdzcGFuJywgW192bS5fdihcInRvcC1yaWdodFwiKV0pXSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbHVtbiBpcy1vbmUtdGhpcmRcIlxuICB9LCBbX2MoJ3Rvb2x0aXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJ0b3BcIixcbiAgICAgIFwicGxhY2VtZW50XCI6IFwidG9wXCJcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy13YXJuaW5nIGhhcy10ZXh0LWNlbnRlcmVkXCJcbiAgfSwgW19jKCdzcGFuJywgW192bS5fdihcInRvcFwiKV0pXSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbHVtbiBpcy1vbmUtdGhpcmRcIlxuICB9LCBbX2MoJ3Rvb2x0aXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJ0b3AtbGVmdFwiLFxuICAgICAgXCJwbGFjZW1lbnRcIjogXCJ0b3AtbGVmdFwiXG4gICAgfVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtZGFuZ2VyIGhhcy10ZXh0LWNlbnRlcmVkXCJcbiAgfSwgW19jKCdzcGFuJywgW192bS5fdihcInRvcC1sZWZ0XCIpXSldKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLW9uZS10aGlyZFwiXG4gIH0sIFtfYygndG9vbHRpcCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcInJpZ2h0XCIsXG4gICAgICBcInBsYWNlbWVudFwiOiBcInJpZ2h0XCJcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1pbmZvIGhhcy10ZXh0LWNlbnRlcmVkXCJcbiAgfSwgW19jKCdzcGFuJywgW192bS5fdihcInJpZ2h0XCIpXSldKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLW9uZS10aGlyZFwiXG4gIH0sIFtfYygndG9vbHRpcCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIm5vIGFuaW1hdGUsIGFsd2F5cywgcm91bmRlZCwgbGFyZ2UsIGJvdW5jZSwgc3VjY2Vzc1wiLFxuICAgICAgXCJwbGFjZW1lbnRcIjogXCJ0b3BcIixcbiAgICAgIFwidHlwZVwiOiBcInN1Y2Nlc3NcIixcbiAgICAgIFwic2l6ZVwiOiBcImxhcmdlXCIsXG4gICAgICBcIm5vLWFuaW1hdGVcIjogdHJ1ZSxcbiAgICAgIFwiYWx3YXlzXCI6IHRydWUsXG4gICAgICBcInJvdW5kZWRcIjogdHJ1ZVxuICAgIH1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXN1Y2Nlc3MgaGFzLXRleHQtY2VudGVyZWRcIlxuICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwibm8gYW5pbWF0ZSwgYWx3YXlzLCByb3VuZGVkLCBsYXJnZSwgYm91bmNlLCBzdWNjZXNzXCIpXSldKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLW9uZS10aGlyZFwiXG4gIH0sIFtfYygndG9vbHRpcCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcImxlZnRcIixcbiAgICAgIFwicGxhY2VtZW50XCI6IFwibGVmdFwiXG4gICAgfVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtaW5mbyBoYXMtdGV4dC1jZW50ZXJlZFwiXG4gIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoXCJsZWZ0XCIpXSldKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLW9uZS10aGlyZFwiXG4gIH0sIFtfYygndG9vbHRpcCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcImJvdHRvbS1yaWdodFwiLFxuICAgICAgXCJwbGFjZW1lbnRcIjogXCJib3R0b20tcmlnaHRcIlxuICAgIH1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXByaW1hcnkgaGFzLXRleHQtY2VudGVyZWRcIlxuICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiYm90dG9tLXJpZ2h0XCIpXSldKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLW9uZS10aGlyZFwiXG4gIH0sIFtfYygndG9vbHRpcCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcImJvdHRvbVwiLFxuICAgICAgXCJwbGFjZW1lbnRcIjogXCJib3R0b21cIlxuICAgIH1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXdhcm5pbmcgaGFzLXRleHQtY2VudGVyZWRcIlxuICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiYm90dG9tXCIpXSldKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLW9uZS10aGlyZFwiXG4gIH0sIFtfYygndG9vbHRpcCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcImJvdHRvbS1sZWZ0XCIsXG4gICAgICBcInBsYWNlbWVudFwiOiBcImJvdHRvbS1sZWZ0XCJcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1kYW5nZXIgaGFzLXRleHQtY2VudGVyZWRcIlxuICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiYm90dG9tLWxlZnRcIildKV0pXSldLCAxKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtYW5jZXN0b3JcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudCBpcy02XCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJTdHlsZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLW11bHRpbGluZSBpcy1tb2JpbGVcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW5cIlxuICB9LCBbX2MoJ3Rvb2x0aXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJpbmZvXCIsXG4gICAgICBcInR5cGVcIjogXCJpbmZvXCJcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1pbmZvIGhhcy10ZXh0LWNlbnRlcmVkXCJcbiAgfSwgW19jKCdzcGFuJywgW192bS5fdihcImluZm9cIildKV0pXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW5cIlxuICB9LCBbX2MoJ3Rvb2x0aXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJwcmltYXJ5XCIsXG4gICAgICBcInR5cGVcIjogXCJwcmltYXJ5XCJcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1wcmltYXJ5IGhhcy10ZXh0LWNlbnRlcmVkXCJcbiAgfSwgW19jKCdzcGFuJywgW192bS5fdihcInByaW1hcnlcIildKV0pXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW5cIlxuICB9LCBbX2MoJ3Rvb2x0aXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJzdWNjZXNzXCIsXG4gICAgICBcInR5cGVcIjogXCJzdWNjZXNzXCJcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1zdWNjZXNzIGhhcy10ZXh0LWNlbnRlcmVkXCJcbiAgfSwgW19jKCdzcGFuJywgW192bS5fdihcInN1Y2Nlc3NcIildKV0pXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW5cIlxuICB9LCBbX2MoJ3Rvb2x0aXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJ3YXJuaW5nXCIsXG4gICAgICBcInR5cGVcIjogXCJ3YXJuaW5nXCJcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy13YXJuaW5nIGhhcy10ZXh0LWNlbnRlcmVkXCJcbiAgfSwgW19jKCdzcGFuJywgW192bS5fdihcIndhcm5pbmdcIildKV0pXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW5cIlxuICB9LCBbX2MoJ3Rvb2x0aXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJkYW5nZXJcIixcbiAgICAgIFwidHlwZVwiOiBcImRhbmdlclwiXG4gICAgfVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtZGFuZ2VyIGhhcy10ZXh0LWNlbnRlcmVkXCJcbiAgfSwgW19jKCdzcGFuJywgW192bS5fdihcImRhbmdlclwiKV0pXSldKV0sIDEpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50IGlzLTZcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIlNpemVzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1ucyBpcy1tdWx0aWxpbmUgaXMtbW9iaWxlXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uXCJcbiAgfSwgW19jKCd0b29sdGlwJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwic21hbGxcIixcbiAgICAgIFwidHlwZVwiOiBcInNtYWxsXCIsXG4gICAgICBcInBsYWNlbWVudFwiOiBcImJvdHRvbS1yaWdodFwiXG4gICAgfVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaGFzLXRleHQtY2VudGVyZWRcIlxuICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwic21hbGxcIildKV0pXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW5cIlxuICB9LCBbX2MoJ3Rvb2x0aXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJtZWRpdW1cIixcbiAgICAgIFwidHlwZVwiOiBcIm1lZGl1bVwiXG4gICAgfVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaGFzLXRleHQtY2VudGVyZWRcIlxuICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwibWVkaXVtXCIpXSldKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uXCJcbiAgfSwgW19jKCd0b29sdGlwJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwibGFyZ2VcIixcbiAgICAgIFwic2l6ZVwiOiBcImxhcmdlXCIsXG4gICAgICBcInBsYWNlbWVudFwiOiBcImJvdHRvbS1sZWZ0XCJcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBoYXMtdGV4dC1jZW50ZXJlZFwiXG4gIH0sIFtfYygnc3BhbicsIFtfdm0uX3YoXCJsYXJnZVwiKV0pXSldKV0sIDEpXSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi02ODE4MDUxYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTY4MTgwNTFhXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvVG9vbHRpcC52dWVcbi8vIG1vZHVsZSBpZCA9IDc0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDI5IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTY4MTgwNTFhXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVG9vbHRpcC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjY1OTEzY2Q2XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTY4MTgwNTFhXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVG9vbHRpcC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNjgxODA1MWFcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Ub29sdGlwLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNjgxODA1MWFcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Ub29sdGlwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMjkiXSwic291cmNlUm9vdCI6IiJ9
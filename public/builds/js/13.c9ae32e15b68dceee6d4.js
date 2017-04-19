webpackJsonp([13],{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(347),
  /* template */
  __webpack_require__(349),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/components/modals/Modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57412306", Component.options)
  } else {
    hotAPI.reload("data-v-57412306", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  props: {
    card: Boolean,
    visible: Boolean,
    closable: Boolean,
    transition: {
      type: String,
      default: 'fade'
    }
  },

  data: function data() {
    return {
      show: this.visible
    };
  },
  mounted: function mounted() {
    document.body.appendChild(this.$el);
  },


  methods: {
    beforeEnter: function beforeEnter() {
      this.$emit('open');
    },
    afterLeave: function afterLeave() {
      this.$emit('close');
    },
    active: function active() {
      this.show = true;
    },
    deactive: function deactive() {
      this.show = false;
    }
  },

  computed: {
    enterClass: function enterClass() {
      return this.transition + 'In';
    },
    leaveClass: function leaveClass() {
      return this.transition + 'Out';
    }
  },

  watch: {
    visible: function visible(val) {
      this.show = val;
    }
  }

};

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageModal = exports.CardModal = exports.BaseModal = exports.Modal = undefined;

var _Modal = __webpack_require__(287);

var _Modal2 = _interopRequireDefault(_Modal);

var _BaseModal = __webpack_require__(161);

var _BaseModal2 = _interopRequireDefault(_BaseModal);

var _CardModal = __webpack_require__(285);

var _CardModal2 = _interopRequireDefault(_CardModal);

var _ImageModal = __webpack_require__(286);

var _ImageModal2 = _interopRequireDefault(_ImageModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Modal = _Modal2.default;
exports.BaseModal = _BaseModal2.default;
exports.CardModal = _CardModal2.default;
exports.ImageModal = _ImageModal2.default;

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModal = __webpack_require__(161);

var _BaseModal2 = _interopRequireDefault(_BaseModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_BaseModal2.default],

  props: {
    title: {
      type: String
    },
    okText: {
      type: String,
      default: 'Ok'
    },
    cancelText: {
      type: String,
      default: 'Cancel'
    }
  },

  computed: {
    classes: function classes() {
      return ['modal', 'animated', 'is-active'];
    }
  },

  methods: {
    ok: function ok() {
      this.$emit('ok');
    },
    cancel: function cancel() {
      this.$emit('cancel');
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

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModal = __webpack_require__(161);

var _BaseModal2 = _interopRequireDefault(_BaseModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_BaseModal2.default],

  props: {
    closable: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    classes: function classes() {
      return ['modal', 'animated', 'is-active'];
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

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseModal = __webpack_require__(161);

var _BaseModal2 = _interopRequireDefault(_BaseModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_BaseModal2.default],

  props: {
    closable: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    classes: function classes() {
      return ['modal', 'animated', 'is-active'];
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

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(282),
  /* template */
  __webpack_require__(289),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-modal/src/CardModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CardModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a015b66", Component.options)
  } else {
    hotAPI.reload("data-v-3a015b66", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(283),
  /* template */
  __webpack_require__(290),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-modal/src/ImageModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ImageModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6dd345f2", Component.options)
  } else {
    hotAPI.reload("data-v-6dd345f2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(284),
  /* template */
  __webpack_require__(288),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-modal/src/Modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Modal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0a0d577d", Component.options)
  } else {
    hotAPI.reload("data-v-0a0d577d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.transition,
      "mode": "in-out",
      "appear": "",
      "appear-active-class": _vm.enterClass,
      "enter-active-class": _vm.enterClass,
      "leave-active-class": _vm.leaveClass
    },
    on: {
      "beforeEnter": _vm.beforeEnter,
      "afterLeave": _vm.afterLeave
    }
  }, [(_vm.show) ? _c('div', {
    class: _vm.classes
  }, [_c('div', {
    staticClass: "modal-background",
    on: {
      "click": _vm.deactive
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "modal-container"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_vm._t("default")], 2)]), _vm._v(" "), (_vm.closable) ? _c('button', {
    staticClass: "modal-close",
    on: {
      "click": _vm.deactive
    }
  }) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0a0d577d", module.exports)
  }
}

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.transition,
      "mode": "in-out",
      "appear": "",
      "appear-active-class": _vm.enterClass,
      "enter-active-class": _vm.enterClass,
      "leave-active-class": _vm.leaveClass
    },
    on: {
      "beforeEnter": _vm.beforeEnter,
      "afterLeave": _vm.afterLeave
    }
  }, [(_vm.show) ? _c('div', {
    class: _vm.classes
  }, [_c('div', {
    staticClass: "modal-background",
    on: {
      "click": _vm.deactive
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "modal-card"
  }, [_c('header', {
    staticClass: "modal-card-head"
  }, [_c('p', {
    staticClass: "modal-card-title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('button', {
    staticClass: "delete",
    on: {
      "click": _vm.deactive
    }
  })]), _vm._v(" "), _c('section', {
    staticClass: "modal-card-body"
  }, [_vm._t("default")], 2), _vm._v(" "), _c('footer', {
    staticClass: "modal-card-foot"
  }, [_c('a', {
    staticClass: "button is-primary",
    on: {
      "click": _vm.ok
    }
  }, [_vm._v(_vm._s(_vm.okText))]), _vm._v(" "), _c('a', {
    staticClass: "button",
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v(_vm._s(_vm.cancelText))])])])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3a015b66", module.exports)
  }
}

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.transition,
      "mode": "in-out",
      "appear": "",
      "appear-active-class": _vm.enterClass,
      "enter-active-class": _vm.enterClass,
      "leave-active-class": _vm.leaveClass
    },
    on: {
      "beforeEnter": _vm.beforeEnter,
      "afterLeave": _vm.afterLeave
    }
  }, [(_vm.show) ? _c('div', {
    class: _vm.classes
  }, [_c('div', {
    staticClass: "modal-background",
    on: {
      "click": _vm.deactive
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "modal-content"
  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.closable) ? _c('button', {
    staticClass: "modal-close",
    on: {
      "click": _vm.deactive
    }
  }) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6dd345f2", module.exports)
  }
}

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueBulmaModal = __webpack_require__(164);

exports.default = {
  components: {
    Modal: _vueBulmaModal.Modal
  },

  props: {
    visible: Boolean
  },

  methods: {
    close: function close() {
      this.$emit('close');
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

/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('modal', {
    attrs: {
      "visible": _vm.visible
    },
    on: {
      "close": _vm.close
    }
  }, [_c('div', {
    staticClass: "box"
  }, [_c('article', {
    staticClass: "media"
  }, [_c('div', {
    staticClass: "media-left"
  }, [_c('figure', {
    staticClass: "image is-64x64"
  }, [_c('img', {
    attrs: {
      "src": "http://placehold.it/128x128",
      "alt": "Image"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "media-content"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('p', [_c('strong', [_vm._v("John Smith")]), _vm._v(" "), _c('small', [_vm._v("@johnsmith")]), _vm._v(" "), _c('small', [_vm._v("31m")]), _vm._v(" "), _c('br'), _vm._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.\n          ")])]), _vm._v(" "), _c('nav', {
    staticClass: "level"
  }, [_c('div', {
    staticClass: "level-left"
  }, [_c('a', {
    staticClass: "level-item"
  }, [_c('span', {
    staticClass: "icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-reply"
  })])]), _vm._v(" "), _c('a', {
    staticClass: "level-item"
  }, [_c('span', {
    staticClass: "icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-retweet"
  })])]), _vm._v(" "), _c('a', {
    staticClass: "level-item"
  }, [_c('span', {
    staticClass: "icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-heart"
  })])])])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-57412306", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvbW9kYWxzL01vZGFsLnZ1ZT8xY2VmIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9CYXNlTW9kYWwuanM/NjE0MyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1tb2RhbC9zcmMvaW5kZXguanM/YjdhZiIsIndlYnBhY2s6Ly8vQ2FyZE1vZGFsLnZ1ZT8wMDcxIiwid2VicGFjazovLy9JbWFnZU1vZGFsLnZ1ZT8zNzMzIiwid2VicGFjazovLy9Nb2RhbC52dWU/M2NkMyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1tb2RhbC9zcmMvQ2FyZE1vZGFsLnZ1ZT80MjhiIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9JbWFnZU1vZGFsLnZ1ZT9iYWNjIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9Nb2RhbC52dWU/YTA2YSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1tb2RhbC9zcmMvTW9kYWwudnVlP2Q4YmQqIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9DYXJkTW9kYWwudnVlPzBjNDIqIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9JbWFnZU1vZGFsLnZ1ZT83MDUxKiIsIndlYnBhY2s6Ly8vTW9kYWwudnVlP2I3ZjkqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9tb2RhbHMvTW9kYWwudnVlPzQ1MWYqIl0sIm5hbWVzIjpbInByb3BzIiwiY2FyZCIsIkJvb2xlYW4iLCJ2aXNpYmxlIiwiY2xvc2FibGUiLCJ0cmFuc2l0aW9uIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJkYXRhIiwic2hvdyIsIm1vdW50ZWQiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIiRlbCIsIm1ldGhvZHMiLCJiZWZvcmVFbnRlciIsIiRlbWl0IiwiYWZ0ZXJMZWF2ZSIsImFjdGl2ZSIsImRlYWN0aXZlIiwiY29tcHV0ZWQiLCJlbnRlckNsYXNzIiwibGVhdmVDbGFzcyIsIndhdGNoIiwidmFsIiwiTW9kYWwiLCJCYXNlTW9kYWwiLCJDYXJkTW9kYWwiLCJJbWFnZU1vZGFsIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQStHO0FBQy9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7OztrQkMxQmU7O0FBRWJBLFNBQU87QUFDTEMsVUFBTUMsT0FERDtBQUVMQyxhQUFTRCxPQUZKO0FBR0xFLGNBQVVGLE9BSEw7QUFJTEcsZ0JBQVk7QUFDVkMsWUFBTUMsTUFESTtBQUVWQyxlQUFTO0FBRkM7QUFKUCxHQUZNOztBQVliQyxNQVphLGtCQVlMO0FBQ04sV0FBTztBQUNMQyxZQUFNLEtBQUtQO0FBRE4sS0FBUDtBQUdELEdBaEJZO0FBa0JiUSxTQWxCYSxxQkFrQkY7QUFDVEMsYUFBU0MsSUFBVCxDQUFjQyxXQUFkLENBQTBCLEtBQUtDLEdBQS9CO0FBQ0QsR0FwQlk7OztBQXNCYkMsV0FBUztBQUNQQyxlQURPLHlCQUNRO0FBQ2IsV0FBS0MsS0FBTCxDQUFXLE1BQVg7QUFDRCxLQUhNO0FBS1BDLGNBTE8sd0JBS087QUFDWixXQUFLRCxLQUFMLENBQVcsT0FBWDtBQUNELEtBUE07QUFTUEUsVUFUTyxvQkFTRztBQUNSLFdBQUtWLElBQUwsR0FBWSxJQUFaO0FBQ0QsS0FYTTtBQWFQVyxZQWJPLHNCQWFLO0FBQ1YsV0FBS1gsSUFBTCxHQUFZLEtBQVo7QUFDRDtBQWZNLEdBdEJJOztBQXdDYlksWUFBVTtBQUNSQyxjQURRLHdCQUNNO0FB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Q29udGVudCI6WyJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Nb2RhbC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTU3NDEyMzA2XFxcIn0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvbW9kYWxzL01vZGFsLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIE1vZGFsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01NzQxMjMwNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU3NDEyMzA2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9tb2RhbHMvTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjZcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDEzIiwiXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgcHJvcHM6IHtcbiAgICBjYXJkOiBCb29sZWFuLFxuICAgIHZpc2libGU6IEJvb2xlYW4sXG4gICAgY2xvc2FibGU6IEJvb2xlYW4sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2ZhZGUnXG4gICAgfVxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93OiB0aGlzLnZpc2libGVcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLiRlbClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgYmVmb3JlRW50ZXIgKCkge1xuICAgICAgdGhpcy4kZW1pdCgnb3BlbicpXG4gICAgfSxcblxuICAgIGFmdGVyTGVhdmUgKCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxuICAgIH0sXG5cbiAgICBhY3RpdmUgKCkge1xuICAgICAgdGhpcy5zaG93ID0gdHJ1ZVxuICAgIH0sXG5cbiAgICBkZWFjdGl2ZSAoKSB7XG4gICAgICB0aGlzLnNob3cgPSBmYWxzZVxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGVudGVyQ2xhc3MgKCkge1xuICAgICAgcmV0dXJuIGAke3RoaXMudHJhbnNpdGlvbn1JbmBcbiAgICB9LFxuXG4gICAgbGVhdmVDbGFzcyAoKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy50cmFuc2l0aW9ufU91dGBcbiAgICB9XG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICB2aXNpYmxlICh2YWwpIHtcbiAgICAgIHRoaXMuc2hvdyA9IHZhbFxuICAgIH1cbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Z1ZS1idWxtYS1tb2RhbC9zcmMvQmFzZU1vZGFsLmpzIiwiaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnXG5pbXBvcnQgQmFzZU1vZGFsIGZyb20gJy4vQmFzZU1vZGFsJ1xuaW1wb3J0IENhcmRNb2RhbCBmcm9tICcuL0NhcmRNb2RhbCdcbmltcG9ydCBJbWFnZU1vZGFsIGZyb20gJy4vSW1hZ2VNb2RhbCdcblxuZXhwb3J0IHtcbiAgTW9kYWwsXG4gIEJhc2VNb2RhbCxcbiAgQ2FyZE1vZGFsLFxuICBJbWFnZU1vZGFsXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3Z1ZS1idWxtYS1tb2RhbC9zcmMvaW5kZXguanMiLCI8dGVtcGxhdGU+XG4gIDx0cmFuc2l0aW9uXG4gICAgOm5hbWU9XCJ0cmFuc2l0aW9uXCJcbiAgICBtb2RlPVwiaW4tb3V0XCJcbiAgICBhcHBlYXJcbiAgICA6YXBwZWFyLWFjdGl2ZS1jbGFzcz1cImVudGVyQ2xhc3NcIlxuICAgIDplbnRlci1hY3RpdmUtY2xhc3M9XCJlbnRlckNsYXNzXCJcbiAgICA6bGVhdmUtYWN0aXZlLWNsYXNzPVwibGVhdmVDbGFzc1wiXG4gICAgQGJlZm9yZUVudGVyPVwiYmVmb3JlRW50ZXJcIlxuICAgIEBhZnRlckxlYXZlPVwiYWZ0ZXJMZWF2ZVwiXG4gID5cbiAgICA8ZGl2IDpjbGFzcz1cImNsYXNzZXNcIiB2LWlmPVwic2hvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tncm91bmRcIiBAY2xpY2s9XCJkZWFjdGl2ZVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNhcmRcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cIm1vZGFsLWNhcmQtaGVhZFwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibW9kYWwtY2FyZC10aXRsZVwiPnt7IHRpdGxlIH19PC9wPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIiBAY2xpY2s9XCJkZWFjdGl2ZVwiPjwvYnV0dG9uPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJtb2RhbC1jYXJkLWJvZHlcIj5cbiAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGZvb3RlciBjbGFzcz1cIm1vZGFsLWNhcmQtZm9vdFwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwiYnV0dG9uIGlzLXByaW1hcnlcIiBAY2xpY2s9XCJva1wiPnt7IG9rVGV4dCB9fTwvYT5cbiAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cImNhbmNlbFwiPnt7IGNhbmNlbFRleHQgfX08L2E+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvdHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQmFzZU1vZGFsIGZyb20gJy4vQmFzZU1vZGFsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW0Jhc2VNb2RhbF0sXG5cbiAgcHJvcHM6IHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBva1RleHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdPaydcbiAgICB9LFxuICAgIGNhbmNlbFRleHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdDYW5jZWwnXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKSB7XG4gICAgICByZXR1cm4gWydtb2RhbCcsICdhbmltYXRlZCcsICdpcy1hY3RpdmUnXVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgb2sgKCkge1xuICAgICAgdGhpcy4kZW1pdCgnb2snKVxuICAgIH0sXG5cbiAgICBjYW5jZWwgKCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsJylcbiAgICB9LFxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDYXJkTW9kYWwudnVlPzQ3YjljYjI4IiwiPHRlbXBsYXRlPlxuICA8dHJhbnNpdGlvblxuICAgIDpuYW1lPVwidHJhbnNpdGlvblwiXG4gICAgbW9kZT1cImluLW91dFwiXG4gICAgYXBwZWFyXG4gICAgOmFwcGVhci1hY3RpdmUtY2xhc3M9XCJlbnRlckNsYXNzXCJcbiAgICA6ZW50ZXItYWN0aXZlLWNsYXNzPVwiZW50ZXJDbGFzc1wiXG4gICAgOmxlYXZlLWFjdGl2ZS1jbGFzcz1cImxlYXZlQ2xhc3NcIlxuICAgIEBiZWZvcmVFbnRlcj1cImJlZm9yZUVudGVyXCJcbiAgICBAYWZ0ZXJMZWF2ZT1cImFmdGVyTGVhdmVcIlxuICA+XG4gICAgPGRpdiA6Y2xhc3M9XCJjbGFzc2VzXCIgdi1pZj1cInNob3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1iYWNrZ3JvdW5kXCIgQGNsaWNrPVwiZGVhY3RpdmVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsLWNsb3NlXCIgQGNsaWNrPVwiZGVhY3RpdmVcIiB2LWlmPVwiY2xvc2FibGVcIj48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBCYXNlTW9kYWwgZnJvbSAnLi9CYXNlTW9kYWwnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbQmFzZU1vZGFsXSxcblxuICBwcm9wczoge1xuICAgIGNsb3NhYmxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCkge1xuICAgICAgcmV0dXJuIFsnbW9kYWwnLCAnYW5pbWF0ZWQnLCAnaXMtYWN0aXZlJ11cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEltYWdlTW9kYWwudnVlPzQ1YzA3N2IzIiwiPHRlbXBsYXRlPlxuICA8dHJhbnNpdGlvblxuICAgIDpuYW1lPVwidHJhbnNpdGlvblwiXG4gICAgbW9kZT1cImluLW91dFwiXG4gICAgYXBwZWFyXG4gICAgOmFwcGVhci1hY3RpdmUtY2xhc3M9XCJlbnRlckNsYXNzXCJcbiAgICA6ZW50ZXItYWN0aXZlLWNsYXNzPVwiZW50ZXJDbGFzc1wiXG4gICAgOmxlYXZlLWFjdGl2ZS1jbGFzcz1cImxlYXZlQ2xhc3NcIlxuICAgIEBiZWZvcmVFbnRlcj1cImJlZm9yZUVudGVyXCJcbiAgICBAYWZ0ZXJMZWF2ZT1cImFmdGVyTGVhdmVcIlxuICA+XG4gICAgPGRpdiA6Y2xhc3M9XCJjbGFzc2VzXCIgdi1pZj1cInNob3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1iYWNrZ3JvdW5kXCIgQGNsaWNrPVwiZGVhY3RpdmVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWwtY2xvc2VcIiBAY2xpY2s9XCJkZWFjdGl2ZVwiIHYtaWY9XCJjbG9zYWJsZVwiPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L3RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEJhc2VNb2RhbCBmcm9tICcuL0Jhc2VNb2RhbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtCYXNlTW9kYWxdLFxuXG4gIHByb3BzOiB7XG4gICAgY2xvc2FibGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKSB7XG4gICAgICByZXR1cm4gWydtb2RhbCcsICdhbmltYXRlZCcsICdpcy1hY3RpdmUnXVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gTW9kYWwudnVlPzYyZWYxZDU3IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NhcmRNb2RhbC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtM2EwMTViNjZcXFwifSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DYXJkTW9kYWwudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL25vZGVfbW9kdWxlcy92dWUtYnVsbWEtbW9kYWwvc3JjL0NhcmRNb2RhbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBDYXJkTW9kYWwudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTNhMDE1YjY2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtM2EwMTViNjZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtYnVsbWEtbW9kYWwvc3JjL0NhcmRNb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDI4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDQgMTMgMTQgMTUiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vSW1hZ2VNb2RhbC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNmRkMzQ1ZjJcXFwifSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9JbWFnZU1vZGFsLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9ub2RlX21vZHVsZXMvdnVlLWJ1bG1hLW1vZGFsL3NyYy9JbWFnZU1vZGFsLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEltYWdlTW9kYWwudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTZkZDM0NWYyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNmRkMzQ1ZjJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtYnVsbWEtbW9kYWwvc3JjL0ltYWdlTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAyODZcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDEzIDE0IDE1IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wYTBkNTc3ZFxcXCJ9IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9ub2RlX21vZHVsZXMvdnVlLWJ1bG1hLW1vZGFsL3NyYy9Nb2RhbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBNb2RhbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMGEwZDU3N2RcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wYTBkNTc3ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1idWxtYS1tb2RhbC9zcmMvTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAyODdcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDEzIDE0IDE1IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0cmFuc2l0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLnRyYW5zaXRpb24sXG4gICAgICBcIm1vZGVcIjogXCJpbi1vdXRcIixcbiAgICAgIFwiYXBwZWFyXCI6IFwiXCIsXG4gICAgICBcImFwcGVhci1hY3RpdmUtY2xhc3NcIjogX3ZtLmVudGVyQ2xhc3MsXG4gICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBfdm0uZW50ZXJDbGFzcyxcbiAgICAgIFwibGVhdmUtYWN0aXZlLWNsYXNzXCI6IF92bS5sZWF2ZUNsYXNzXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJiZWZvcmVFbnRlclwiOiBfdm0uYmVmb3JlRW50ZXIsXG4gICAgICBcImFmdGVyTGVhdmVcIjogX3ZtLmFmdGVyTGVhdmVcbiAgICB9XG4gIH0sIFsoX3ZtLnNob3cpID8gX2MoJ2RpdicsIHtcbiAgICBjbGFzczogX3ZtLmNsYXNzZXNcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtYmFja2dyb3VuZFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kZWFjdGl2ZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudFwiXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMildKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5jbG9zYWJsZSkgPyBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNsb3NlXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRlYWN0aXZlXG4gICAgfVxuICB9KSA6IF92bS5fZSgpXSkgOiBfdm0uX2UoKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTBhMGQ1NzdkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMGEwZDU3N2RcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDI4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDQgMTMgMTQgMTUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3RyYW5zaXRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0udHJhbnNpdGlvbixcbiAgICAgIFwibW9kZVwiOiBcImluLW91dFwiLFxuICAgICAgXCJhcHBlYXJcIjogXCJcIixcbiAgICAgIFwiYXBwZWFyLWFjdGl2ZS1jbGFzc1wiOiBfdm0uZW50ZXJDbGFzcyxcbiAgICAgIFwiZW50ZXItYWN0aXZlLWNsYXNzXCI6IF92bS5lbnRlckNsYXNzLFxuICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogX3ZtLmxlYXZlQ2xhc3NcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImJlZm9yZUVudGVyXCI6IF92bS5iZWZvcmVFbnRlcixcbiAgICAgIFwiYWZ0ZXJMZWF2ZVwiOiBfdm0uYWZ0ZXJMZWF2ZVxuICAgIH1cbiAgfSwgWyhfdm0uc2hvdykgPyBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBfdm0uY2xhc3Nlc1xuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1iYWNrZ3JvdW5kXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRlYWN0aXZlXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1jYXJkXCJcbiAgfSwgW19jKCdoZWFkZXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY2FyZC1oZWFkXCJcbiAgfSwgW19jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNhcmQtdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImRlbGV0ZVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kZWFjdGl2ZVxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NlY3Rpb24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY2FyZC1ib2R5XCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2Zvb3RlcicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1jYXJkLWZvb3RcIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXByaW1hcnlcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0ub2tcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5va1RleHQpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uY2FuY2VsXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0uY2FuY2VsVGV4dCkpXSldKV0pXSkgOiBfdm0uX2UoKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTNhMDE1YjY2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtM2EwMTViNjZcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9DYXJkTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAyODlcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDEzIDE0IDE1IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0cmFuc2l0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLnRyYW5zaXRpb24sXG4gICAgICBcIm1vZGVcIjogXCJpbi1vdXRcIixcbiAgICAgIFwiYXBwZWFyXCI6IFwiXCIsXG4gICAgICBcImFwcGVhci1hY3RpdmUtY2xhc3NcIjogX3ZtLmVudGVyQ2xhc3MsXG4gICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBfdm0uZW50ZXJDbGFzcyxcbiAgICAgIFwibGVhdmUtYWN0aXZlLWNsYXNzXCI6IF92bS5sZWF2ZUNsYXNzXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJiZWZvcmVFbnRlclwiOiBfdm0uYmVmb3JlRW50ZXIsXG4gICAgICBcImFmdGVyTGVhdmVcIjogX3ZtLmFmdGVyTGVhdmVcbiAgICB9XG4gIH0sIFsoX3ZtLnNob3cpID8gX2MoJ2RpdicsIHtcbiAgICBjbGFzczogX3ZtLmNsYXNzZXNcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtYmFja2dyb3VuZFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kZWFjdGl2ZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGVudFwiXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMiksIF92bS5fdihcIiBcIiksIChfdm0uY2xvc2FibGUpID8gX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1jbG9zZVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kZWFjdGl2ZVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0pIDogX3ZtLl9lKCldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi02ZGQzNDVmMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTZkZDM0NWYyXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS1tb2RhbC9zcmMvSW1hZ2VNb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDI5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDQgMTMgMTQgMTUiLCI8dGVtcGxhdGU+XG4gIDxtb2RhbCA6dmlzaWJsZT1cInZpc2libGVcIiBAY2xvc2U9XCJjbG9zZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cbiAgICAgIDxhcnRpY2xlIGNsYXNzPVwibWVkaWFcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWxlZnRcIj5cbiAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwiaW1hZ2UgaXMtNjR4NjRcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC8xMjh4MTI4XCIgYWx0PVwiSW1hZ2VcIj5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZWRpYS1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c3Ryb25nPkpvaG4gU21pdGg8L3N0cm9uZz4gPHNtYWxsPkBqb2huc21pdGg8L3NtYWxsPiA8c21hbGw+MzFtPC9zbWFsbD5cbiAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBBZW5lYW4gZWZmaWNpdHVyIHNpdCBhbWV0IG1hc3NhIGZyaW5naWxsYSBlZ2VzdGFzLiBOdWxsYW0gY29uZGltZW50dW0gbHVjdHVzIHR1cnBpcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bmF2IGNsYXNzPVwibGV2ZWxcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwibGV2ZWwtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPjxpIGNsYXNzPVwiZmEgZmEtcmVwbHlcIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwibGV2ZWwtaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPjxpIGNsYXNzPVwiZmEgZmEtcmV0d2VldFwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJsZXZlbC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+PGkgY2xhc3M9XCJmYSBmYS1oZWFydFwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L2Rpdj5cbiAgPC9tb2RhbD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ3Z1ZS1idWxtYS1tb2RhbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgTW9kYWxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIHZpc2libGU6IEJvb2xlYW5cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgY2xvc2UgKCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gTW9kYWwudnVlP2QyMDNiODMyIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdtb2RhbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2aXNpYmxlXCI6IF92bS52aXNpYmxlXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbG9zZVwiOiBfdm0uY2xvc2VcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJveFwiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZWRpYVwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1lZGlhLWxlZnRcIlxuICB9LCBbX2MoJ2ZpZ3VyZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbWFnZSBpcy02NHg2NFwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBcImh0dHA6Ly9wbGFjZWhvbGQuaXQvMTI4eDEyOFwiLFxuICAgICAgXCJhbHRcIjogXCJJbWFnZVwiXG4gICAgfVxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWVkaWEtY29udGVudFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIlxuICB9LCBbX2MoJ3AnLCBbX2MoJ3N0cm9uZycsIFtfdm0uX3YoXCJKb2huIFNtaXRoXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzbWFsbCcsIFtfdm0uX3YoXCJAam9obnNtaXRoXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzbWFsbCcsIFtfdm0uX3YoXCIzMW1cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIlxcbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEFlbmVhbiBlZmZpY2l0dXIgc2l0IGFtZXQgbWFzc2EgZnJpbmdpbGxhIGVnZXN0YXMuIE51bGxhbSBjb25kaW1lbnR1bSBsdWN0dXMgdHVycGlzLlxcbiAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbmF2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxldmVsXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGV2ZWwtbGVmdFwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsZXZlbC1pdGVtXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcmVwbHlcIlxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxldmVsLWl0ZW1cIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1yZXR3ZWV0XCJcbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsZXZlbC1pdGVtXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtaGVhcnRcIlxuICB9KV0pXSldKV0pXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNTc0MTIzMDZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01NzQxMjMwNlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL21vZGFscy9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDM0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDQgMTMiXSwic291cmNlUm9vdCI6IiJ9
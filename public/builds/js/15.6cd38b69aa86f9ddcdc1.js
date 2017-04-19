webpackJsonp([15],{

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(345),
  /* template */
  __webpack_require__(350),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/components/modals/CardModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CardModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-786de94d", Component.options)
  } else {
    hotAPI.reload("data-v-786de94d", Component.options)
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

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueBulmaModal = __webpack_require__(164);

exports.default = {
  components: {
    CardModal: _vueBulmaModal.CardModal
  },

  props: {
    visible: Boolean,
    title: String,
    url: String
  },

  data: function data() {
    return {
      src: __webpack_require__(14)
    };
  },


  methods: {
    open: function open(url) {
      window.open(url);
    },
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

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('card-modal', {
    attrs: {
      "visible": _vm.visible,
      "title": _vm.title,
      "transition": "zoom"
    },
    on: {
      "close": _vm.close
    }
  }, [_c('div', {
    staticClass: "content has-text-centered"
  }, [_c('img', {
    attrs: {
      "src": _vm.src,
      "height": "120",
      "alt": "Vue Admin"
    }
  })]), _vm._v(" "), _c('a', {
    on: {
      "click": function($event) {
        _vm.open(_vm.url)
      }
    }
  }, [_vm._v("Vue Admin on GitHub")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-786de94d", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvbW9kYWxzL0NhcmRNb2RhbC52dWU/NmVjNyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1tb2RhbC9zcmMvQmFzZU1vZGFsLmpzPzYxNDMqKiIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1tb2RhbC9zcmMvaW5kZXguanM/YjdhZioqIiwid2VicGFjazovLy9DYXJkTW9kYWwudnVlPzAwNzEqKiIsIndlYnBhY2s6Ly8vSW1hZ2VNb2RhbC52dWU/MzczMyoqIiwid2VicGFjazovLy9Nb2RhbC52dWU/M2NkMyoqIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9DYXJkTW9kYWwudnVlPzQyOGIqKiIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1tb2RhbC9zcmMvSW1hZ2VNb2RhbC52dWU/YmFjYyoqIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9Nb2RhbC52dWU/YTA2YSoqIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9Nb2RhbC52dWU/ZDhiZCoqKiIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1tb2RhbC9zcmMvQ2FyZE1vZGFsLnZ1ZT8wYzQyKioqIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9JbWFnZU1vZGFsLnZ1ZT83MDUxKioqIiwid2VicGFjazovLy9DYXJkTW9kYWwudnVlP2RjMTYqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9tb2RhbHMvQ2FyZE1vZGFsLnZ1ZT8zYTg0KiJdLCJuYW1lcyI6WyJwcm9wcyIsImNhcmQiLCJCb29sZWFuIiwidmlzaWJsZSIsImNsb3NhYmxlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwiZGF0YSIsInNob3ciLCJtb3VudGVkIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCIkZWwiLCJtZXRob2RzIiwiYmVmb3JlRW50ZXIiLCIkZW1pdCIsImFmdGVyTGVhdmUiLCJhY3RpdmUiLCJkZWFjdGl2ZSIsImNvbXB1dGVkIiwiZW50ZXJDbGFzcyIsImxlYXZlQ2xhc3MiLCJ3YXRjaCIsInZhbCIsIk1vZGFsIiwiQmFzZU1vZGFsIiwiQ2FyZE1vZGFsIiwiSW1hZ2VNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUErRztBQUMvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7a0JDMUJlOztBQUViQSxTQUFPO0FBQ0xDLFVBQU1DLE9BREQ7QUFFTEMsYUFBU0QsT0FGSjtBQUdMRSxjQUFVRixPQUhMO0FBSUxHLGdCQUFZO0FBQ1ZDLFlBQU1DLE1BREk7QUFFVkMsZUFBUztBQUZDO0FBSlAsR0FGTTs7QUFZYkMsTUFaYSxrQkFZTDtBQUNOLFdBQU87QUFDTEMsWUFBTSxLQUFLUDtBQUROLEtBQVA7QUFHRCxHQWhCWTtBQWtCYlEsU0FsQmEscUJBa0JGO0FBQ1RDLGFBQVNDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQixLQUFLQyxHQUEvQjtBQUNELEdBcEJZOzs7QUFzQmJDLFdBQVM7QUFDUEMsZUFETyx5QkFDUTtBQUNiLFdBQUtDLEtBQUwsQ0FBVyxNQUFYO0FBQ0QsS0FITTtBQUtQQyxjQUxPLHdCQUtPO0FBQ1osV0FBS0QsS0FBTCxDQUFXLE9BQVg7QUFDRCxLQVBNO0FBU1BFLFVBVE8sb0JBU0c7QUFDUixXQUFLVixJQUFMLEdBQVksSUFBWjtBQUNELEtBWE07QUFhUFcsWUFiTyxzQkFhSztBQUNWLFdBQUtYLElBQUwsR0FBWSxLQUFaO0FBQ0Q7QUFmTSxHQXRC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QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN0REEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQzFCQTs7OztBQUtBO0FBSEE7OzthQUtBO1dBQ0E7U0FHQTtBQUxBOzt3QkFNQTs7K0JBR0E7QUFGQTtBQUlBOzs7OzZCQUVBO2tCQUNBO0FBRUE7NEJBQ0E7aUJBQ0E7QUFFQTtBQVJBO0FBakJBOzs7Ozs7Ozs7Ozs7O0FDWEEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMTUuNmNkMzhiNjlhYTg2ZjlkZGNkYzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DYXJkTW9kYWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03ODZkZTk0ZFxcXCJ9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DYXJkTW9kYWwudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9tb2RhbHMvQ2FyZE1vZGFsLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIENhcmRNb2RhbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzg2ZGU5NGRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03ODZkZTk0ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvbW9kYWxzL0NhcmRNb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDQgMTUiLCJcbmV4cG9ydCBkZWZhdWx0IHtcblxuICBwcm9wczoge1xuICAgIGNhcmQ6IEJvb2xlYW4sXG4gICAgdmlzaWJsZTogQm9vbGVhbixcbiAgICBjbG9zYWJsZTogQm9vbGVhbixcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZmFkZSdcbiAgICB9XG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3c6IHRoaXMudmlzaWJsZVxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuJGVsKVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBiZWZvcmVFbnRlciAoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdvcGVuJylcbiAgICB9LFxuXG4gICAgYWZ0ZXJMZWF2ZSAoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdjbG9zZScpXG4gICAgfSxcblxuICAgIGFjdGl2ZSAoKSB7XG4gICAgICB0aGlzLnNob3cgPSB0cnVlXG4gICAgfSxcblxuICAgIGRlYWN0aXZlICgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgZW50ZXJDbGFzcyAoKSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy50cmFuc2l0aW9ufUluYFxuICAgIH0sXG5cbiAgICBsZWF2ZUNsYXNzICgpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLnRyYW5zaXRpb259T3V0YFxuICAgIH1cbiAgfSxcblxuICB3YXRjaDoge1xuICAgIHZpc2libGUgKHZhbCkge1xuICAgICAgdGhpcy5zaG93ID0gdmFsXG4gICAgfVxuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9CYXNlTW9kYWwuanMiLCJpbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCdcbmltcG9ydCBCYXNlTW9kYWwgZnJvbSAnLi9CYXNlTW9kYWwnXG5pbXBvcnQgQ2FyZE1vZGFsIGZyb20gJy4vQ2FyZE1vZGFsJ1xuaW1wb3J0IEltYWdlTW9kYWwgZnJvbSAnLi9JbWFnZU1vZGFsJ1xuXG5leHBvcnQge1xuICBNb2RhbCxcbiAgQmFzZU1vZGFsLFxuICBDYXJkTW9kYWwsXG4gIEltYWdlTW9kYWxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9pbmRleC5qcyIsIjx0ZW1wbGF0ZT5cbiAgPHRyYW5zaXRpb25cbiAgICA6bmFtZT1cInRyYW5zaXRpb25cIlxuICAgIG1vZGU9XCJpbi1vdXRcIlxuICAgIGFwcGVhclxuICAgIDphcHBlYXItYWN0aXZlLWNsYXNzPVwiZW50ZXJDbGFzc1wiXG4gICAgOmVudGVyLWFjdGl2ZS1jbGFzcz1cImVudGVyQ2xhc3NcIlxuICAgIDpsZWF2ZS1hY3RpdmUtY2xhc3M9XCJsZWF2ZUNsYXNzXCJcbiAgICBAYmVmb3JlRW50ZXI9XCJiZWZvcmVFbnRlclwiXG4gICAgQGFmdGVyTGVhdmU9XCJhZnRlckxlYXZlXCJcbiAgPlxuICAgIDxkaXYgOmNsYXNzPVwiY2xhc3Nlc1wiIHYtaWY9XCJzaG93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYmFja2dyb3VuZFwiIEBjbGljaz1cImRlYWN0aXZlXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY2FyZFwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwibW9kYWwtY2FyZC1oZWFkXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtb2RhbC1jYXJkLXRpdGxlXCI+e3sgdGl0bGUgfX08L3A+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiIEBjbGljaz1cImRlYWN0aXZlXCI+PC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1vZGFsLWNhcmQtYm9keVwiPlxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVwibW9kYWwtY2FyZC1mb290XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gaXMtcHJpbWFyeVwiIEBjbGljaz1cIm9rXCI+e3sgb2tUZXh0IH19PC9hPlxuICAgICAgICAgIDxhIGNsYXNzPVwiYnV0dG9uXCIgQGNsaWNrPVwiY2FuY2VsXCI+e3sgY2FuY2VsVGV4dCB9fTwvYT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBCYXNlTW9kYWwgZnJvbSAnLi9CYXNlTW9kYWwnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbQmFzZU1vZGFsXSxcblxuICBwcm9wczoge1xuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9LFxuICAgIG9rVGV4dDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ09rJ1xuICAgIH0sXG4gICAgY2FuY2VsVGV4dDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ0NhbmNlbCdcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpIHtcbiAgICAgIHJldHVybiBbJ21vZGFsJywgJ2FuaW1hdGVkJywgJ2lzLWFjdGl2ZSddXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBvayAoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdvaycpXG4gICAgfSxcblxuICAgIGNhbmNlbCAoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdjYW5jZWwnKVxuICAgIH0sXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIENhcmRNb2RhbC52dWU/NDdiOWNiMjgiLCI8dGVtcGxhdGU+XG4gIDx0cmFuc2l0aW9uXG4gICAgOm5hbWU9XCJ0cmFuc2l0aW9uXCJcbiAgICBtb2RlPVwiaW4tb3V0XCJcbiAgICBhcHBlYXJcbiAgICA6YXBwZWFyLWFjdGl2ZS1jbGFzcz1cImVudGVyQ2xhc3NcIlxuICAgIDplbnRlci1hY3RpdmUtY2xhc3M9XCJlbnRlckNsYXNzXCJcbiAgICA6bGVhdmUtYWN0aXZlLWNsYXNzPVwibGVhdmVDbGFzc1wiXG4gICAgQGJlZm9yZUVudGVyPVwiYmVmb3JlRW50ZXJcIlxuICAgIEBhZnRlckxlYXZlPVwiYWZ0ZXJMZWF2ZVwiXG4gID5cbiAgICA8ZGl2IDpjbGFzcz1cImNsYXNzZXNcIiB2LWlmPVwic2hvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tncm91bmRcIiBAY2xpY2s9XCJkZWFjdGl2ZVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWwtY2xvc2VcIiBAY2xpY2s9XCJkZWFjdGl2ZVwiIHYtaWY9XCJjbG9zYWJsZVwiPjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L3RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEJhc2VNb2RhbCBmcm9tICcuL0Jhc2VNb2RhbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtCYXNlTW9kYWxdLFxuXG4gIHByb3BzOiB7XG4gICAgY2xvc2FibGU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgY2xhc3NlcyAoKSB7XG4gICAgICByZXR1cm4gWydtb2RhbCcsICdhbmltYXRlZCcsICdpcy1hY3RpdmUnXVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gSW1hZ2VNb2RhbC52dWU/NDVjMDc3YjMiLCI8dGVtcGxhdGU+XG4gIDx0cmFuc2l0aW9uXG4gICAgOm5hbWU9XCJ0cmFuc2l0aW9uXCJcbiAgICBtb2RlPVwiaW4tb3V0XCJcbiAgICBhcHBlYXJcbiAgICA6YXBwZWFyLWFjdGl2ZS1jbGFzcz1cImVudGVyQ2xhc3NcIlxuICAgIDplbnRlci1hY3RpdmUtY2xhc3M9XCJlbnRlckNsYXNzXCJcbiAgICA6bGVhdmUtYWN0aXZlLWNsYXNzPVwibGVhdmVDbGFzc1wiXG4gICAgQGJlZm9yZUVudGVyPVwiYmVmb3JlRW50ZXJcIlxuICAgIEBhZnRlckxlYXZlPVwiYWZ0ZXJMZWF2ZVwiXG4gID5cbiAgICA8ZGl2IDpjbGFzcz1cImNsYXNzZXNcIiB2LWlmPVwic2hvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tncm91bmRcIiBAY2xpY2s9XCJkZWFjdGl2ZVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbC1jbG9zZVwiIEBjbGljaz1cImRlYWN0aXZlXCIgdi1pZj1cImNsb3NhYmxlXCI+PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvdHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQmFzZU1vZGFsIGZyb20gJy4vQmFzZU1vZGFsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW0Jhc2VNb2RhbF0sXG5cbiAgcHJvcHM6IHtcbiAgICBjbG9zYWJsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpIHtcbiAgICAgIHJldHVybiBbJ21vZGFsJywgJ2FuaW1hdGVkJywgJ2lzLWFjdGl2ZSddXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBNb2RhbC52dWU/NjJlZjFkNTciLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ2FyZE1vZGFsLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zYTAxNWI2NlxcXCJ9IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NhcmRNb2RhbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2tpbW5oL0NvZGVzL1dlYlNob3AvYWRtaW4tdGVtcGxhdGUvbGFyYXZlbC12dWUtYWRtaW4vbm9kZV9tb2R1bGVzL3Z1ZS1idWxtYS1tb2RhbC9zcmMvQ2FyZE1vZGFsLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIENhcmRNb2RhbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtM2EwMTViNjZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zYTAxNWI2NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1idWxtYS1tb2RhbC9zcmMvQ2FyZE1vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjg1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCAxMyAxNCAxNSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9JbWFnZU1vZGFsLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02ZGQzNDVmMlxcXCJ9IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0ltYWdlTW9kYWwudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL25vZGVfbW9kdWxlcy92dWUtYnVsbWEtbW9kYWwvc3JjL0ltYWdlTW9kYWwudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gSW1hZ2VNb2RhbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNmRkMzQ1ZjJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi02ZGQzNDVmMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1idWxtYS1tb2RhbC9zcmMvSW1hZ2VNb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDI4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDQgMTMgMTQgMTUiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTW9kYWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTBhMGQ1NzdkXFxcIn0hLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTW9kYWwudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL25vZGVfbW9kdWxlcy92dWUtYnVsbWEtbW9kYWwvc3JjL01vZGFsLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIE1vZGFsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wYTBkNTc3ZFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTBhMGQ1NzdkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDI4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDQgMTMgMTQgMTUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3RyYW5zaXRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0udHJhbnNpdGlvbixcbiAgICAgIFwibW9kZVwiOiBcImluLW91dFwiLFxuICAgICAgXCJhcHBlYXJcIjogXCJcIixcbiAgICAgIFwiYXBwZWFyLWFjdGl2ZS1jbGFzc1wiOiBfdm0uZW50ZXJDbGFzcyxcbiAgICAgIFwiZW50ZXItYWN0aXZlLWNsYXNzXCI6IF92bS5lbnRlckNsYXNzLFxuICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogX3ZtLmxlYXZlQ2xhc3NcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImJlZm9yZUVudGVyXCI6IF92bS5iZWZvcmVFbnRlcixcbiAgICAgIFwiYWZ0ZXJMZWF2ZVwiOiBfdm0uYWZ0ZXJMZWF2ZVxuICAgIH1cbiAgfSwgWyhfdm0uc2hvdykgPyBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBfdm0uY2xhc3Nlc1xuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1iYWNrZ3JvdW5kXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRlYWN0aXZlXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKV0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmNsb3NhYmxlKSA/IF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY2xvc2VcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZGVhY3RpdmVcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldKSA6IF92bS5fZSgpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMGEwZDU3N2RcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wYTBkNTc3ZFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi92dWUtYnVsbWEtbW9kYWwvc3JjL01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjg4XG4vLyBtb2R1bGUgY2h1bmtzID0gNCAxMyAxNCAxNSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndHJhbnNpdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS50cmFuc2l0aW9uLFxuICAgICAgXCJtb2RlXCI6IFwiaW4tb3V0XCIsXG4gICAgICBcImFwcGVhclwiOiBcIlwiLFxuICAgICAgXCJhcHBlYXItYWN0aXZlLWNsYXNzXCI6IF92bS5lbnRlckNsYXNzLFxuICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogX3ZtLmVudGVyQ2xhc3MsXG4gICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBfdm0ubGVhdmVDbGFzc1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiYmVmb3JlRW50ZXJcIjogX3ZtLmJlZm9yZUVudGVyLFxuICAgICAgXCJhZnRlckxlYXZlXCI6IF92bS5hZnRlckxlYXZlXG4gICAgfVxuICB9LCBbKF92bS5zaG93KSA/IF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IF92bS5jbGFzc2VzXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJhY2tncm91bmRcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZGVhY3RpdmVcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNhcmRcIlxuICB9LCBbX2MoJ2hlYWRlcicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1jYXJkLWhlYWRcIlxuICB9LCBbX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY2FyZC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVsZXRlXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRlYWN0aXZlXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2VjdGlvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1jYXJkLWJvZHlcIlxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCBfYygnZm9vdGVyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNhcmQtZm9vdFwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtcHJpbWFyeVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5va1xuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLm9rVGV4dCkpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5jYW5jZWxcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5jYW5jZWxUZXh0KSldKV0pXSldKSA6IF92bS5fZSgpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtM2EwMTViNjZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zYTAxNWI2NlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi92dWUtYnVsbWEtbW9kYWwvc3JjL0NhcmRNb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDI4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDQgMTMgMTQgMTUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3RyYW5zaXRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0udHJhbnNpdGlvbixcbiAgICAgIFwibW9kZVwiOiBcImluLW91dFwiLFxuICAgICAgXCJhcHBlYXJcIjogXCJcIixcbiAgICAgIFwiYXBwZWFyLWFjdGl2ZS1jbGFzc1wiOiBfdm0uZW50ZXJDbGFzcyxcbiAgICAgIFwiZW50ZXItYWN0aXZlLWNsYXNzXCI6IF92bS5lbnRlckNsYXNzLFxuICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogX3ZtLmxlYXZlQ2xhc3NcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImJlZm9yZUVudGVyXCI6IF92bS5iZWZvcmVFbnRlcixcbiAgICAgIFwiYWZ0ZXJMZWF2ZVwiOiBfdm0uYWZ0ZXJMZWF2ZVxuICAgIH1cbiAgfSwgWyhfdm0uc2hvdykgPyBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBfdm0uY2xhc3Nlc1xuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1iYWNrZ3JvdW5kXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRlYWN0aXZlXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKSwgX3ZtLl92KFwiIFwiKSwgKF92bS5jbG9zYWJsZSkgPyBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNsb3NlXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRlYWN0aXZlXG4gICAgfVxuICB9KSA6IF92bS5fZSgpXSkgOiBfdm0uX2UoKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTZkZDM0NWYyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNmRkMzQ1ZjJcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9JbWFnZU1vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjkwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCAxMyAxNCAxNSIsIjx0ZW1wbGF0ZT5cbiAgPGNhcmQtbW9kYWwgOnZpc2libGU9XCJ2aXNpYmxlXCIgQGNsb3NlPVwiY2xvc2VcIiA6dGl0bGU9XCJ0aXRsZVwiIHRyYW5zaXRpb249XCJ6b29tXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQgaGFzLXRleHQtY2VudGVyZWRcIj48aW1nIDpzcmM9XCJzcmNcIiBoZWlnaHQ9XCIxMjBcIiBhbHQ9XCJWdWUgQWRtaW5cIj48L2Rpdj5cbiAgICA8YSBAY2xpY2s9XCJvcGVuKHVybClcIj5WdWUgQWRtaW4gb24gR2l0SHViPC9hPlxuICA8L2NhcmQtbW9kYWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgQ2FyZE1vZGFsIH0gZnJvbSAndnVlLWJ1bG1hLW1vZGFsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDYXJkTW9kYWxcbiAgfSxcblxuICBwcm9wczoge1xuICAgIHZpc2libGU6IEJvb2xlYW4sXG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICB1cmw6IFN0cmluZ1xuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzcmM6IHJlcXVpcmUoJ2Fzc2V0cy9sb2dvLnN2ZycpXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBvcGVuICh1cmwpIHtcbiAgICAgIHdpbmRvdy5vcGVuKHVybClcbiAgICB9LFxuXG4gICAgY2xvc2UgKCkge1xuICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ2FyZE1vZGFsLnZ1ZT9jNjIzOTc1NiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnY2FyZC1tb2RhbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ2aXNpYmxlXCI6IF92bS52aXNpYmxlLFxuICAgICAgXCJ0aXRsZVwiOiBfdm0udGl0bGUsXG4gICAgICBcInRyYW5zaXRpb25cIjogXCJ6b29tXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsb3NlXCI6IF92bS5jbG9zZVxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGVudCBoYXMtdGV4dC1jZW50ZXJlZFwiXG4gIH0sIFtfYygnaW1nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNyY1wiOiBfdm0uc3JjLFxuICAgICAgXCJoZWlnaHRcIjogXCIxMjBcIixcbiAgICAgIFwiYWx0XCI6IFwiVnVlIEFkbWluXCJcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ub3Blbihfdm0udXJsKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlZ1ZSBBZG1pbiBvbiBHaXRIdWJcIildKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTc4NmRlOTRkXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNzg2ZGU5NGRcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9tb2RhbHMvQ2FyZE1vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzUwXG4vLyBtb2R1bGUgY2h1bmtzID0gNCAxNSJdLCJzb3VyY2VSb290IjoiIn0=
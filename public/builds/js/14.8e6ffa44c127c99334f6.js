webpackJsonp([14],{

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(346),
  /* template */
  __webpack_require__(351),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/components/modals/ImageModal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ImageModal.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f390e21c", Component.options)
  } else {
    hotAPI.reload("data-v-f390e21c", Component.options)
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

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueBulmaModal = __webpack_require__(164);

exports.default = {
  components: {
    ImageModal: _vueBulmaModal.ImageModal
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

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('image-modal', {
    attrs: {
      "visible": _vm.visible,
      "transition": "roll"
    },
    on: {
      "close": _vm.close
    }
  }, [_c('p', {
    staticClass: "image is-4by3"
  }, [_c('img', {
    attrs: {
      "src": "http://placehold.it/1280x960"
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f390e21c", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvbW9kYWxzL0ltYWdlTW9kYWwudnVlPzgwNmIiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtbW9kYWwvc3JjL0Jhc2VNb2RhbC5qcz82MTQzKiIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1tb2RhbC9zcmMvaW5kZXguanM/YjdhZioiLCJ3ZWJwYWNrOi8vL0NhcmRNb2RhbC52dWU/MDA3MSoiLCJ3ZWJwYWNrOi8vL0ltYWdlTW9kYWwudnVlPzM3MzMqIiwid2VicGFjazovLy9Nb2RhbC52dWU/M2NkMyoiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtbW9kYWwvc3JjL0NhcmRNb2RhbC52dWU/NDI4YioiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtbW9kYWwvc3JjL0ltYWdlTW9kYWwudnVlP2JhY2MqIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9Nb2RhbC52dWU/YTA2YSoiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtbW9kYWwvc3JjL01vZGFsLnZ1ZT9kOGJkKioiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtbW9kYWwvc3JjL0NhcmRNb2RhbC52dWU/MGM0MioqIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9JbWFnZU1vZGFsLnZ1ZT83MDUxKioiLCJ3ZWJwYWNrOi8vL0ltYWdlTW9kYWwudnVlPzFlODMqIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9tb2RhbHMvSW1hZ2VNb2RhbC52dWU/NmIzOCoiXSwibmFtZXMiOlsicHJvcHMiLCJjYXJkIiwiQm9vbGVhbiIsInZpc2libGUiLCJjbG9zYWJsZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwiU3RyaW5nIiwiZGVmYXVsdCIsImRhdGEiLCJzaG93IiwibW91bnRlZCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiJGVsIiwibWV0aG9kcyIsImJlZm9yZUVudGVyIiwiJGVtaXQiLCJhZnRlckxlYXZlIiwiYWN0aXZlIiwiZGVhY3RpdmUiLCJjb21wdXRlZCIsImVudGVyQ2xhc3MiLCJsZWF2ZUNsYXNzIiwid2F0Y2giLCJ2YWwiLCJNb2RhbCIsIkJhc2VNb2RhbCIsIkNhcmRNb2RhbCIsIkltYWdlTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBK0c7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7O2tCQzFCZTs7QUFFYkEsU0FBTztBQUNMQyxVQUFNQyxPQUREO0FBRUxDLGFBQVNELE9BRko7QUFHTEUsY0FBVUYsT0FITDtBQUlMRyxnQkFBWTtBQUNWQyxZQUFNQyxNQURJO0FBRVZDLGVBQVM7QUFGQztBQUpQLEdBRk07O0FBWWJDLE1BWmEsa0JBWUw7QUFDTixXQUFPO0FBQ0xDLFlBQU0sS0FBS1A7QUFETixLQUFQO0FBR0QsR0FoQlk7QUFrQmJRLFNBbEJhLHFCQWtCRjtBQUNUQyxhQUFTQyxJQUFULENBQWNDLFdBQWQsQ0FBMEIsS0FBS0MsR0FBL0I7QUFDRCxHQXBCWTs7O0FBc0JiQyxXQUFTO0FBQ1BDLGVBRE8seUJBQ1E7QUFDYixXQUFLQyxLQUFMLENBQVcsTUFBWDtBQUNELEtBSE07QUFLUEMsY0FMTyx3QkFLTztBQUNaLFdBQUtELEtBQUwsQ0FBVyxPQUFYO0FBQ0QsS0FQTTtBQVNQRSxVQVRPLG9CQVNHO0FBQ1IsV0FBS1YsSUFBTCxHQUFZLElBQVo7QUFDRCxLQVhNO0FBYVBXLFlBYk8sc0JBYUs7QUFDVixXQUFLWCxJQUFMLEdBQVksS0FBWjtBQUNEO0FBZk0sR0F0Qkk7O0FBd0Ni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QTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDdERBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7Ozs7QUFLQTtBQUhBOzs7YUFPQTtBQUhBOzs7NEJBS0E7aUJBQ0E7QUFHQTtBQUxBOztBQVRBOzs7Ozs7Ozs7Ozs7QUNWQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoianMvMTQuOGU2ZmZhNDRjMTI3Yzk5MzM0ZjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9JbWFnZU1vZGFsLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjM5MGUyMWNcXFwifSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSW1hZ2VNb2RhbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2tpbW5oL0NvZGVzL1dlYlNob3AvYWRtaW4tdGVtcGxhdGUvbGFyYXZlbC12dWUtYWRtaW4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL21vZGFscy9JbWFnZU1vZGFsLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEltYWdlTW9kYWwudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWYzOTBlMjFjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZjM5MGUyMWNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL21vZGFscy9JbWFnZU1vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gNCAxNCIsIlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIHByb3BzOiB7XG4gICAgY2FyZDogQm9vbGVhbixcbiAgICB2aXNpYmxlOiBCb29sZWFuLFxuICAgIGNsb3NhYmxlOiBCb29sZWFuLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdmYWRlJ1xuICAgIH1cbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvdzogdGhpcy52aXNpYmxlXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy4kZWwpXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGJlZm9yZUVudGVyICgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ29wZW4nKVxuICAgIH0sXG5cbiAgICBhZnRlckxlYXZlICgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJylcbiAgICB9LFxuXG4gICAgYWN0aXZlICgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IHRydWVcbiAgICB9LFxuXG4gICAgZGVhY3RpdmUgKCkge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2VcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBlbnRlckNsYXNzICgpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLnRyYW5zaXRpb259SW5gXG4gICAgfSxcblxuICAgIGxlYXZlQ2xhc3MgKCkge1xuICAgICAgcmV0dXJuIGAke3RoaXMudHJhbnNpdGlvbn1PdXRgXG4gICAgfVxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgdmlzaWJsZSAodmFsKSB7XG4gICAgICB0aGlzLnNob3cgPSB2YWxcbiAgICB9XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi92dWUtYnVsbWEtbW9kYWwvc3JjL0Jhc2VNb2RhbC5qcyIsImltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJ1xuaW1wb3J0IEJhc2VNb2RhbCBmcm9tICcuL0Jhc2VNb2RhbCdcbmltcG9ydCBDYXJkTW9kYWwgZnJvbSAnLi9DYXJkTW9kYWwnXG5pbXBvcnQgSW1hZ2VNb2RhbCBmcm9tICcuL0ltYWdlTW9kYWwnXG5cbmV4cG9ydCB7XG4gIE1vZGFsLFxuICBCYXNlTW9kYWwsXG4gIENhcmRNb2RhbCxcbiAgSW1hZ2VNb2RhbFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi92dWUtYnVsbWEtbW9kYWwvc3JjL2luZGV4LmpzIiwiPHRlbXBsYXRlPlxuICA8dHJhbnNpdGlvblxuICAgIDpuYW1lPVwidHJhbnNpdGlvblwiXG4gICAgbW9kZT1cImluLW91dFwiXG4gICAgYXBwZWFyXG4gICAgOmFwcGVhci1hY3RpdmUtY2xhc3M9XCJlbnRlckNsYXNzXCJcbiAgICA6ZW50ZXItYWN0aXZlLWNsYXNzPVwiZW50ZXJDbGFzc1wiXG4gICAgOmxlYXZlLWFjdGl2ZS1jbGFzcz1cImxlYXZlQ2xhc3NcIlxuICAgIEBiZWZvcmVFbnRlcj1cImJlZm9yZUVudGVyXCJcbiAgICBAYWZ0ZXJMZWF2ZT1cImFmdGVyTGVhdmVcIlxuICA+XG4gICAgPGRpdiA6Y2xhc3M9XCJjbGFzc2VzXCIgdi1pZj1cInNob3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1iYWNrZ3JvdW5kXCIgQGNsaWNrPVwiZGVhY3RpdmVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jYXJkXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJtb2RhbC1jYXJkLWhlYWRcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm1vZGFsLWNhcmQtdGl0bGVcIj57eyB0aXRsZSB9fTwvcD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlXCIgQGNsaWNrPVwiZGVhY3RpdmVcIj48L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibW9kYWwtY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJtb2RhbC1jYXJkLWZvb3RcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5XCIgQGNsaWNrPVwib2tcIj57eyBva1RleHQgfX08L2E+XG4gICAgICAgICAgPGEgY2xhc3M9XCJidXR0b25cIiBAY2xpY2s9XCJjYW5jZWxcIj57eyBjYW5jZWxUZXh0IH19PC9hPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEJhc2VNb2RhbCBmcm9tICcuL0Jhc2VNb2RhbCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBtaXhpbnM6IFtCYXNlTW9kYWxdLFxuXG4gIHByb3BzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgb2tUZXh0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnT2snXG4gICAgfSxcbiAgICBjYW5jZWxUZXh0OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnQ2FuY2VsJ1xuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCkge1xuICAgICAgcmV0dXJuIFsnbW9kYWwnLCAnYW5pbWF0ZWQnLCAnaXMtYWN0aXZlJ11cbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG9rICgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ29rJylcbiAgICB9LFxuXG4gICAgY2FuY2VsICgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2NhbmNlbCcpXG4gICAgfSxcbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ2FyZE1vZGFsLnZ1ZT80N2I5Y2IyOCIsIjx0ZW1wbGF0ZT5cbiAgPHRyYW5zaXRpb25cbiAgICA6bmFtZT1cInRyYW5zaXRpb25cIlxuICAgIG1vZGU9XCJpbi1vdXRcIlxuICAgIGFwcGVhclxuICAgIDphcHBlYXItYWN0aXZlLWNsYXNzPVwiZW50ZXJDbGFzc1wiXG4gICAgOmVudGVyLWFjdGl2ZS1jbGFzcz1cImVudGVyQ2xhc3NcIlxuICAgIDpsZWF2ZS1hY3RpdmUtY2xhc3M9XCJsZWF2ZUNsYXNzXCJcbiAgICBAYmVmb3JlRW50ZXI9XCJiZWZvcmVFbnRlclwiXG4gICAgQGFmdGVyTGVhdmU9XCJhZnRlckxlYXZlXCJcbiAgPlxuICAgIDxkaXYgOmNsYXNzPVwiY2xhc3Nlc1wiIHYtaWY9XCJzaG93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYmFja2dyb3VuZFwiIEBjbGljaz1cImRlYWN0aXZlXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJtb2RhbC1jbG9zZVwiIEBjbGljaz1cImRlYWN0aXZlXCIgdi1pZj1cImNsb3NhYmxlXCI+PC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvdHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQmFzZU1vZGFsIGZyb20gJy4vQmFzZU1vZGFsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG1peGluczogW0Jhc2VNb2RhbF0sXG5cbiAgcHJvcHM6IHtcbiAgICBjbG9zYWJsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjbGFzc2VzICgpIHtcbiAgICAgIHJldHVybiBbJ21vZGFsJywgJ2FuaW1hdGVkJywgJ2lzLWFjdGl2ZSddXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBJbWFnZU1vZGFsLnZ1ZT80NWMwNzdiMyIsIjx0ZW1wbGF0ZT5cbiAgPHRyYW5zaXRpb25cbiAgICA6bmFtZT1cInRyYW5zaXRpb25cIlxuICAgIG1vZGU9XCJpbi1vdXRcIlxuICAgIGFwcGVhclxuICAgIDphcHBlYXItYWN0aXZlLWNsYXNzPVwiZW50ZXJDbGFzc1wiXG4gICAgOmVudGVyLWFjdGl2ZS1jbGFzcz1cImVudGVyQ2xhc3NcIlxuICAgIDpsZWF2ZS1hY3RpdmUtY2xhc3M9XCJsZWF2ZUNsYXNzXCJcbiAgICBAYmVmb3JlRW50ZXI9XCJiZWZvcmVFbnRlclwiXG4gICAgQGFmdGVyTGVhdmU9XCJhZnRlckxlYXZlXCJcbiAgPlxuICAgIDxkaXYgOmNsYXNzPVwiY2xhc3Nlc1wiIHYtaWY9XCJzaG93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYmFja2dyb3VuZFwiIEBjbGljaz1cImRlYWN0aXZlXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsLWNsb3NlXCIgQGNsaWNrPVwiZGVhY3RpdmVcIiB2LWlmPVwiY2xvc2FibGVcIj48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBCYXNlTW9kYWwgZnJvbSAnLi9CYXNlTW9kYWwnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbWl4aW5zOiBbQmFzZU1vZGFsXSxcblxuICBwcm9wczoge1xuICAgIGNsb3NhYmxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGNsYXNzZXMgKCkge1xuICAgICAgcmV0dXJuIFsnbW9kYWwnLCAnYW5pbWF0ZWQnLCAnaXMtYWN0aXZlJ11cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIE1vZGFsLnZ1ZT82MmVmMWQ1NyIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DYXJkTW9kYWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTNhMDE1YjY2XFxcIn0hLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2FyZE1vZGFsLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9ub2RlX21vZHVsZXMvdnVlLWJ1bG1hLW1vZGFsL3NyYy9DYXJkTW9kYWwudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQ2FyZE1vZGFsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zYTAxNWI2NlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTNhMDE1YjY2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9DYXJkTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAyODVcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDEzIDE0IDE1IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0ltYWdlTW9kYWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTZkZDM0NWYyXFxcIn0hLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSW1hZ2VNb2RhbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2tpbW5oL0NvZGVzL1dlYlNob3AvYWRtaW4tdGVtcGxhdGUvbGFyYXZlbC12dWUtYWRtaW4vbm9kZV9tb2R1bGVzL3Z1ZS1idWxtYS1tb2RhbC9zcmMvSW1hZ2VNb2RhbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBJbWFnZU1vZGFsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ZGQzNDVmMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZkZDM0NWYyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWJ1bG1hLW1vZGFsL3NyYy9JbWFnZU1vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjg2XG4vLyBtb2R1bGUgY2h1bmtzID0gNCAxMyAxNCAxNSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Nb2RhbC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMGEwZDU3N2RcXFwifSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Nb2RhbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2tpbW5oL0NvZGVzL1dlYlNob3AvYWRtaW4tdGVtcGxhdGUvbGFyYXZlbC12dWUtYWRtaW4vbm9kZV9tb2R1bGVzL3Z1ZS1idWxtYS1tb2RhbC9zcmMvTW9kYWwudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gTW9kYWwudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTBhMGQ1NzdkXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMGEwZDU3N2RcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtYnVsbWEtbW9kYWwvc3JjL01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjg3XG4vLyBtb2R1bGUgY2h1bmtzID0gNCAxMyAxNCAxNSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndHJhbnNpdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS50cmFuc2l0aW9uLFxuICAgICAgXCJtb2RlXCI6IFwiaW4tb3V0XCIsXG4gICAgICBcImFwcGVhclwiOiBcIlwiLFxuICAgICAgXCJhcHBlYXItYWN0aXZlLWNsYXNzXCI6IF92bS5lbnRlckNsYXNzLFxuICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogX3ZtLmVudGVyQ2xhc3MsXG4gICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBfdm0ubGVhdmVDbGFzc1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiYmVmb3JlRW50ZXJcIjogX3ZtLmJlZm9yZUVudGVyLFxuICAgICAgXCJhZnRlckxlYXZlXCI6IF92bS5hZnRlckxlYXZlXG4gICAgfVxuICB9LCBbKF92bS5zaG93KSA/IF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IF92bS5jbGFzc2VzXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJhY2tncm91bmRcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZGVhY3RpdmVcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIlxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXSksIF92bS5fdihcIiBcIiksIChfdm0uY2xvc2FibGUpID8gX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1jbG9zZVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kZWFjdGl2ZVxuICAgIH1cbiAgfSkgOiBfdm0uX2UoKV0pIDogX3ZtLl9lKCldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0wYTBkNTc3ZFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTBhMGQ1NzdkXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS1tb2RhbC9zcmMvTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAyODhcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDEzIDE0IDE1IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0cmFuc2l0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLnRyYW5zaXRpb24sXG4gICAgICBcIm1vZGVcIjogXCJpbi1vdXRcIixcbiAgICAgIFwiYXBwZWFyXCI6IFwiXCIsXG4gICAgICBcImFwcGVhci1hY3RpdmUtY2xhc3NcIjogX3ZtLmVudGVyQ2xhc3MsXG4gICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBfdm0uZW50ZXJDbGFzcyxcbiAgICAgIFwibGVhdmUtYWN0aXZlLWNsYXNzXCI6IF92bS5sZWF2ZUNsYXNzXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJiZWZvcmVFbnRlclwiOiBfdm0uYmVmb3JlRW50ZXIsXG4gICAgICBcImFmdGVyTGVhdmVcIjogX3ZtLmFmdGVyTGVhdmVcbiAgICB9XG4gIH0sIFsoX3ZtLnNob3cpID8gX2MoJ2RpdicsIHtcbiAgICBjbGFzczogX3ZtLmNsYXNzZXNcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtYmFja2dyb3VuZFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kZWFjdGl2ZVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY2FyZFwiXG4gIH0sIFtfYygnaGVhZGVyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNhcmQtaGVhZFwiXG4gIH0sIFtfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1jYXJkLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZWxldGVcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZGVhY3RpdmVcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzZWN0aW9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNhcmQtYm9keVwiXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMiksIF92bS5fdihcIiBcIiksIF9jKCdmb290ZXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY2FyZC1mb290XCJcbiAgfSwgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1wcmltYXJ5XCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLm9rXG4gICAgfVxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0ub2tUZXh0KSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmNhbmNlbFxuICAgIH1cbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmNhbmNlbFRleHQpKV0pXSldKV0pIDogX3ZtLl9lKCldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zYTAxNWI2NlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTNhMDE1YjY2XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS1tb2RhbC9zcmMvQ2FyZE1vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjg5XG4vLyBtb2R1bGUgY2h1bmtzID0gNCAxMyAxNCAxNSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndHJhbnNpdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS50cmFuc2l0aW9uLFxuICAgICAgXCJtb2RlXCI6IFwiaW4tb3V0XCIsXG4gICAgICBcImFwcGVhclwiOiBcIlwiLFxuICAgICAgXCJhcHBlYXItYWN0aXZlLWNsYXNzXCI6IF92bS5lbnRlckNsYXNzLFxuICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogX3ZtLmVudGVyQ2xhc3MsXG4gICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBfdm0ubGVhdmVDbGFzc1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiYmVmb3JlRW50ZXJcIjogX3ZtLmJlZm9yZUVudGVyLFxuICAgICAgXCJhZnRlckxlYXZlXCI6IF92bS5hZnRlckxlYXZlXG4gICAgfVxuICB9LCBbKF92bS5zaG93KSA/IF9jKCdkaXYnLCB7XG4gICAgY2xhc3M6IF92bS5jbGFzc2VzXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJhY2tncm91bmRcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZGVhY3RpdmVcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIlxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmNsb3NhYmxlKSA/IF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibW9kYWwtY2xvc2VcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZGVhY3RpdmVcbiAgICB9XG4gIH0pIDogX3ZtLl9lKCldKSA6IF92bS5fZSgpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNmRkMzQ1ZjJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02ZGQzNDVmMlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi92dWUtYnVsbWEtbW9kYWwvc3JjL0ltYWdlTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAyOTBcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDEzIDE0IDE1IiwiPHRlbXBsYXRlPlxuICA8aW1hZ2UtbW9kYWwgOnZpc2libGU9XCJ2aXNpYmxlXCIgQGNsb3NlPVwiY2xvc2VcIiB0cmFuc2l0aW9uPVwicm9sbFwiPlxuICAgIDxwIGNsYXNzPVwiaW1hZ2UgaXMtNGJ5M1wiPjxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC8xMjgweDk2MFwiPjwvcD5cbiAgPC9pbWFnZS1tb2RhbD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBJbWFnZU1vZGFsIH0gZnJvbSAndnVlLWJ1bG1hLW1vZGFsJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBJbWFnZU1vZGFsXG4gIH0sXG5cbiAgcHJvcHM6IHtcbiAgICB2aXNpYmxlOiBCb29sZWFuXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNsb3NlICgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJylcbiAgICB9XG4gIH1cblxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gSW1hZ2VNb2RhbC52dWU/MjU4ODIzZDMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2ltYWdlLW1vZGFsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZpc2libGVcIjogX3ZtLnZpc2libGUsXG4gICAgICBcInRyYW5zaXRpb25cIjogXCJyb2xsXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsb3NlXCI6IF92bS5jbG9zZVxuICAgIH1cbiAgfSwgW19jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImltYWdlIGlzLTRieTNcIlxuICB9LCBbX2MoJ2ltZycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzcmNcIjogXCJodHRwOi8vcGxhY2Vob2xkLml0LzEyODB4OTYwXCJcbiAgICB9XG4gIH0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1mMzkwZTIxY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWYzOTBlMjFjXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvbW9kYWxzL0ltYWdlTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAzNTFcbi8vIG1vZHVsZSBjaHVua3MgPSA0IDE0Il0sInNvdXJjZVJvb3QiOiIifQ==
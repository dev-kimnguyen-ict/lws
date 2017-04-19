webpackJsonp([24],{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(793)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(590),
  /* template */
  __webpack_require__(747),
  /* scopeId */
  "data-v-72ba3964",
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/components/Notification.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Notification.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72ba3964", Component.options)
  } else {
    hotAPI.reload("data-v-72ba3964", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(4);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//
//
//
//
//
//
//
//
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
    type: String,
    title: String,
    message: String,
    direction: {
      type: String,
      default: 'Right'
    },
    duration: {
      type: Number,
      default: 4500
    },
    container: {
      type: String,
      default: '.notifications'
    }
  },

  data: function data() {
    return {
      $_parent_: null,
      show: true
    };
  },
  created: function created() {
    var $parent = this.$parent;
    if (!$parent) {
      var parent = document.querySelector(this.container);
      if (!parent) {
        // Lazy creating `div.notifications` container.
        var className = this.container.replace('.', '');
        var Notifications = _vue2.default.extend({
          name: 'Notifications',
          render: function render(h) {
            return h('div', {
              'class': _defineProperty({}, '' + className, true)
            });
          }
        });
        $parent = new Notifications().$mount();
        document.body.appendChild($parent.$el);
      } else {
        $parent = parent.__vue__;
      }
      // Hacked.
      this.$_parent_ = $parent;
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.$_parent_) {
      this.$_parent_.$el.appendChild(this.$el);
      this.$parent = this.$_parent_;
      delete this.$_parent_;
    }
    if (this.duration > 0) {
      this.timer = setTimeout(function () {
        return _this.close();
      }, this.duration);
    }
  },
  destroyed: function destroyed() {
    this.$el.remove();
  },


  computed: {
    transition: function transition() {
      return 'bounce-' + this.direction;
    },
    enterClass: function enterClass() {
      return 'bounceIn' + this.direction;
    },
    leaveClass: function leaveClass() {
      return 'bounceOut' + this.direction;
    }
  },

  methods: {
    closedByUser: function closedByUser() {
      this.$emit('closed-by-user');
      clearTimeout(this.timer);
      this.show = false;
    },
    close: function close() {
      this.$emit('closed-automatically');
      clearTimeout(this.timer);
      this.show = false;
    },
    afterLeave: function afterLeave() {
      this.$destroy();
    }
  }
};

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(4);

var _vue2 = _interopRequireDefault(_vue);

var _vueBulmaNotification = __webpack_require__(692);

var _vueBulmaNotification2 = _interopRequireDefault(_vueBulmaNotification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var NotificationComponent = _vue2.default.extend(_vueBulmaNotification2.default);

var openNotification = function openNotification() {
  var propsData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    title: '',
    message: '',
    type: '',
    direction: '',
    duration: 4500,
    container: '.notifications'
  };

  return new NotificationComponent({
    el: document.createElement('div'),
    propsData: propsData
  });
};

exports.default = {
  components: {
    Notification: _vueBulmaNotification2.default
  },

  mounted: function mounted() {
    openNotification({
      message: 'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      type: 'success',
      duration: 0
    });
  },


  methods: {
    openNotificationWithType: function openNotificationWithType(type) {
      openNotification({
        title: 'This is a title',
        message: 'This is the message.',
        type: type
      });
    }
  }

};

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.styles-box .notification[data-v-72ba3964] {\n  margin-bottom: 20px;\n}\n.button[data-v-72ba3964] {\n  margin: 5px 0 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 646:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n@-webkit-keyframes spinAround {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n}\n}\n@keyframes spinAround {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n}\n}\n.notifications {\n  position: fixed;\n  top: 50px;\n  right: 0;\n  z-index: 1257;\n  pointer-events: none;\n}\n@media screen and (min-width: 769px) {\n.notifications {\n      max-width: 320px;\n}\n}\n.notifications .notification {\n    margin: 20px;\n}\n.notification {\n  position: relative;\n  min-width: 240px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  pointer-events: all;\n}\n", ""]);

// exports


/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(796)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(559),
  /* template */
  __webpack_require__(752),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-notification/src/Notification.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Notification.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-83781012", Component.options)
  } else {
    hotAPI.reload("data-v-83781012", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "notifications-box"
  }, [_c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent is-6"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Styles")]), _vm._v(" "), _c('div', {
    staticClass: "block styles-box"
  }, [_c('notification', {
    attrs: {
      "title": 'Normal',
      "direction": 'Down',
      "message": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      "duration": 0
    }
  }), _vm._v(" "), _c('notification', {
    attrs: {
      "title": 'Primary',
      "type": 'primary',
      "direction": 'Right',
      "message": 'Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      "duration": 0
    }
  }), _vm._v(" "), _c('notification', {
    attrs: {
      "title": 'Info',
      "type": 'info',
      "direction": 'Right',
      "message": 'Info lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      "duration": 0
    }
  }), _vm._v(" "), _c('notification', {
    attrs: {
      "title": 'Success',
      "type": 'success',
      "direction": 'Left',
      "message": 'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      "duration": 0
    }
  }), _vm._v(" "), _c('notification', {
    attrs: {
      "title": 'Warning',
      "type": 'warning',
      "direction": 'Left',
      "message": 'Warning lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      "duration": 0
    }
  }), _vm._v(" "), _c('notification', {
    attrs: {
      "title": 'Danger',
      "container": '.styles-box',
      "type": 'danger',
      "direction": 'Down',
      "message": 'Danger lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      "duration": 0
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-6"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Buttons")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('button', {
    staticClass: "button",
    on: {
      "click": function($event) {
        _vm.openNotificationWithType('')
      }
    }
  }, [_vm._v("Normal")]), _vm._v(" "), _c('button', {
    staticClass: "button is-primary",
    on: {
      "click": function($event) {
        _vm.openNotificationWithType('primary')
      }
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c('button', {
    staticClass: "button is-info",
    on: {
      "click": function($event) {
        _vm.openNotificationWithType('info')
      }
    }
  }, [_vm._v("Info")]), _vm._v(" "), _c('button', {
    staticClass: "button is-success",
    on: {
      "click": function($event) {
        _vm.openNotificationWithType('success')
      }
    }
  }, [_vm._v("Success")]), _vm._v(" "), _c('button', {
    staticClass: "button is-warning",
    on: {
      "click": function($event) {
        _vm.openNotificationWithType('warning')
      }
    }
  }, [_vm._v("Warning")]), _vm._v(" "), _c('button', {
    staticClass: "button is-danger",
    on: {
      "click": function($event) {
        _vm.openNotificationWithType('danger')
      }
    }
  }, [_vm._v("Danger")])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-72ba3964", module.exports)
  }
}

/***/ }),

/***/ 752:
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
      "after-leave": _vm.afterLeave
    }
  }, [(_vm.show) ? _c('div', {
    class: ['notification', 'animated', _vm.type ? ("is-" + _vm.type) : '']
  }, [_c('button', {
    staticClass: "delete touchable",
    on: {
      "click": function($event) {
        _vm.closedByUser()
      }
    }
  }), _vm._v(" "), (_vm.title) ? _c('div', {
    staticClass: "title is-5"
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v("\n    " + _vm._s(_vm.message) + "\n  ")]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-83781012", module.exports)
  }
}

/***/ }),

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(643);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("75d26fde", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-72ba3964\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Notification.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-72ba3964\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Notification.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(646);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("971bc640", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-83781012\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Notification.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-83781012\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Notification.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vTm90aWZpY2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vTm90aWZpY2F0aW9uLnZ1ZT9mNGEyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlPzcyY2QiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtbm90aWZpY2F0aW9uL3NyYy9Ob3RpZmljYXRpb24udnVlPzk1ZDIiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtbm90aWZpY2F0aW9uL3NyYy9Ob3RpZmljYXRpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlPzZhYTMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtbm90aWZpY2F0aW9uL3NyYy9Ob3RpZmljYXRpb24udnVlPzNmMjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi52dWU/M2Y3NSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1ub3RpZmljYXRpb24vc3JjL05vdGlmaWNhdGlvbi52dWU/MDk0ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBLHVCQUE0Szs7QUFFNUs7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7Ozs7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IHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTcyYmEzOTY0XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vTm90aWZpY2F0aW9uLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Ob3RpZmljYXRpb24udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03MmJhMzk2NFxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Ob3RpZmljYXRpb24udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTcyYmEzOTY0XCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gTm90aWZpY2F0aW9uLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03MmJhMzk2NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTcyYmEzOTY0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Ob3RpZmljYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAxNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAyNCIsIjx0ZW1wbGF0ZT5cbiAgPHRyYW5zaXRpb25cbiAgICA6bmFtZT1cInRyYW5zaXRpb25cIlxuICAgIG1vZGU9XCJpbi1vdXRcIlxuICAgIGFwcGVhclxuICAgIDphcHBlYXItYWN0aXZlLWNsYXNzPVwiZW50ZXJDbGFzc1wiXG4gICAgOmVudGVyLWFjdGl2ZS1jbGFzcz1cImVudGVyQ2xhc3NcIlxuICAgIDpsZWF2ZS1hY3RpdmUtY2xhc3M9XCJsZWF2ZUNsYXNzXCJcbiAgICBAYWZ0ZXItbGVhdmU9XCJhZnRlckxlYXZlXCJcbiAgPlxuICA8ZGl2IDpjbGFzcz1cIlsnbm90aWZpY2F0aW9uJywgJ2FuaW1hdGVkJywgdHlwZSA/IGBpcy0ke3R5cGV9YCA6ICcnXVwiIHYtaWY9XCJzaG93XCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZSB0b3VjaGFibGVcIiBAY2xpY2s9XCJjbG9zZWRCeVVzZXIoKVwiPjwvYnV0dG9uPlxuICAgIDxkaXYgY2xhc3M9XCJ0aXRsZSBpcy01XCIgdi1pZj1cInRpdGxlXCI+e3sgdGl0bGUgfX08L2Rpdj5cbiAgICB7eyBtZXNzYWdlIH19XG4gIDwvZGl2PlxuPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgcHJvcHM6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBtZXNzYWdlOiBTdHJpbmcsXG4gICAgZGlyZWN0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnUmlnaHQnXG4gICAgfSxcbiAgICBkdXJhdGlvbjoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogNDUwMFxuICAgIH0sXG4gICAgY29udGFpbmVyOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnLm5vdGlmaWNhdGlvbnMnXG4gICAgfVxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICAkX3BhcmVudF86IG51bGwsXG4gICAgICBzaG93OiB0cnVlXG4gICAgfVxuICB9LFxuXG4gIGNyZWF0ZWQgKCkge1xuICAgIGxldCAkcGFyZW50ID0gdGhpcy4kcGFyZW50XG4gICAgaWYgKCEkcGFyZW50KSB7XG4gICAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbnRhaW5lcilcbiAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgIC8vIExhenkgY3JlYXRpbmcgYGRpdi5ub3RpZmljYXRpb25zYCBjb250YWluZXIuXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHRoaXMuY29udGFpbmVyLnJlcGxhY2UoJy4nLCAnJylcbiAgICAgICAgY29uc3QgTm90aWZpY2F0aW9ucyA9IFZ1ZS5leHRlbmQoe1xuICAgICAgICAgIG5hbWU6ICdOb3RpZmljYXRpb25zJyxcbiAgICAgICAgICByZW5kZXIgKGgpIHtcbiAgICAgICAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgICdjbGFzcyc6IHtcbiAgICAgICAgICAgICAgICBbYCR7Y2xhc3NOYW1lfWBdOiB0cnVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAkcGFyZW50ID0gbmV3IE5vdGlmaWNhdGlvbnMoKS4kbW91bnQoKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCRwYXJlbnQuJGVsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHBhcmVudCA9IHBhcmVudC5fX3Z1ZV9fXG4gICAgICB9XG4gICAgICAvLyBIYWNrZWQuXG4gICAgICB0aGlzLiRfcGFyZW50XyA9ICRwYXJlbnRcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgaWYgKHRoaXMuJF9wYXJlbnRfKSB7XG4gICAgICB0aGlzLiRfcGFyZW50Xy4kZWwuYXBwZW5kQ2hpbGQodGhpcy4kZWwpXG4gICAgICB0aGlzLiRwYXJlbnQgPSB0aGlzLiRfcGFyZW50X1xuICAgICAgZGVsZXRlIHRoaXMuJF9wYXJlbnRfXG4gICAgfVxuICAgIGlmICh0aGlzLmR1cmF0aW9uID4gMCkge1xuICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jbG9zZSgpLCB0aGlzLmR1cmF0aW9uKVxuICAgIH1cbiAgfSxcblxuICBkZXN0cm95ZWQgKCkge1xuICAgIHRoaXMuJGVsLnJlbW92ZSgpXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICB0cmFuc2l0aW9uICgpIHtcbiAgICAgIHJldHVybiBgYm91bmNlLSR7dGhpcy5kaXJlY3Rpb259YFxuICAgIH0sXG5cbiAgICBlbnRlckNsYXNzICgpIHtcbiAgICAgIHJldHVybiBgYm91bmNlSW4ke3RoaXMuZGlyZWN0aW9ufWBcbiAgICB9LFxuXG4gICAgbGVhdmVDbGFzcyAoKSB7XG4gICAgICByZXR1cm4gYGJvdW5jZU91dCR7dGhpcy5kaXJlY3Rpb259YFxuICAgIH0sXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNsb3NlZEJ5VXNlciAoKSB7XG4gICAgICAgdGhpcy4kZW1pdCgnY2xvc2VkLWJ5LXVzZXInKVxuICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxuICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlXG4gICAgfSxcblxuICAgIGNsb3NlICgpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlZC1hdXRvbWF0aWNhbGx5JylcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxuICAgICAgdGhpcy5zaG93ID0gZmFsc2VcbiAgICB9LFxuXG4gICAgYWZ0ZXJMZWF2ZSAoKSB7XG4gICAgICB0aGlzLiRkZXN0cm95KClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgJ35idWxtYS9zYXNzL3V0aWxpdGllcy92YXJpYWJsZXMnO1xuQGltcG9ydCAnfmJ1bG1hL3Nhc3MvdXRpbGl0aWVzL21peGlucyc7XG5cbi5ub3RpZmljYXRpb25zIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUwcHg7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDI0ICsgMjMzO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICBAaW5jbHVkZSB0YWJsZXQoKSB7XG4gICAgbWF4LXdpZHRoOiAzMjBweDtcbiAgfVxuXG4gIC5ub3RpZmljYXRpb24ge1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDI0MHB4O1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIE5vdGlmaWNhdGlvbi52dWU/NTExNjgwNGMiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJub3RpZmljYXRpb25zLWJveFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLWFuY2VzdG9yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1wYXJlbnQgaXMtNlwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94XCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5TdHlsZXM8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9jayBzdHlsZXMtYm94XCI+XG5cbiAgICAgICAgICAgIDxub3RpZmljYXRpb24gOnRpdGxlPVwiJ05vcm1hbCdcIiA6ZGlyZWN0aW9uPVwiJ0Rvd24nXCIgOm1lc3NhZ2U9XCInTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0J1wiIDpkdXJhdGlvbj1cIjBcIj48L25vdGlmaWNhdGlvbj5cblxuICAgICAgICAgICAgPG5vdGlmaWNhdGlvbiA6dGl0bGU9XCInUHJpbWFyeSdcIiA6dHlwZT1cIidwcmltYXJ5J1wiIDpkaXJlY3Rpb249XCInUmlnaHQnXCIgOm1lc3NhZ2U9XCInUHJpbWFyIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCdcIiA6ZHVyYXRpb249XCIwXCI+PC9ub3RpZmljYXRpb24+XG5cbiAgICAgICAgICAgIDxub3RpZmljYXRpb24gOnRpdGxlPVwiJ0luZm8nXCIgOnR5cGU9XCInaW5mbydcIiA6ZGlyZWN0aW9uPVwiJ1JpZ2h0J1wiIDptZXNzYWdlPVwiJ0luZm8gbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0J1wiIDpkdXJhdGlvbj1cIjBcIj48L25vdGlmaWNhdGlvbj5cblxuICAgICAgICAgICAgPG5vdGlmaWNhdGlvbiA6dGl0bGU9XCInU3VjY2VzcydcIiA6dHlwZT1cIidzdWNjZXNzJ1wiIDpkaXJlY3Rpb249XCInTGVmdCdcIiA6bWVzc2FnZT1cIidTdWNjZXNzIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCdcIiA6ZHVyYXRpb249XCIwXCI+PC9ub3RpZmljYXRpb24+XG5cbiAgICAgICAgICAgIDxub3RpZmljYXRpb24gOnRpdGxlPVwiJ1dhcm5pbmcnXCIgOnR5cGU9XCInd2FybmluZydcIiA6ZGlyZWN0aW9uPVwiJ0xlZnQnXCIgOm1lc3NhZ2U9XCInV2FybmluZyBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQnXCIgOmR1cmF0aW9uPVwiMFwiPjwvbm90aWZpY2F0aW9uPlxuXG4gICAgICAgICAgICA8bm90aWZpY2F0aW9uIDp0aXRsZT1cIidEYW5nZXInXCIgOmNvbnRhaW5lcj1cIicuc3R5bGVzLWJveCdcIiA6dHlwZT1cIidkYW5nZXInXCIgOmRpcmVjdGlvbj1cIidEb3duJ1wiIDptZXNzYWdlPVwiJ0RhbmdlciBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQnXCIgOmR1cmF0aW9uPVwiMFwiPjwvbm90aWZpY2F0aW9uPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1wYXJlbnQgaXMtNlwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94XCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5CdXR0b25zPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiBAY2xpY2s9XCJvcGVuTm90aWZpY2F0aW9uV2l0aFR5cGUoJycpXCI+Tm9ybWFsPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXByaW1hcnlcIiBAY2xpY2s9XCJvcGVuTm90aWZpY2F0aW9uV2l0aFR5cGUoJ3ByaW1hcnknKVwiPlByaW1hcnk8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtaW5mb1wiIEBjbGljaz1cIm9wZW5Ob3RpZmljYXRpb25XaXRoVHlwZSgnaW5mbycpXCI+SW5mbzwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1zdWNjZXNzXCIgQGNsaWNrPVwib3Blbk5vdGlmaWNhdGlvbldpdGhUeXBlKCdzdWNjZXNzJylcIj5TdWNjZXNzPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXdhcm5pbmdcIiBAY2xpY2s9XCJvcGVuTm90aWZpY2F0aW9uV2l0aFR5cGUoJ3dhcm5pbmcnKVwiPldhcm5pbmc8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtZGFuZ2VyXCIgQGNsaWNrPVwib3Blbk5vdGlmaWNhdGlvbldpdGhUeXBlKCdkYW5nZXInKVwiPkRhbmdlcjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJ3Z1ZS1idWxtYS1ub3RpZmljYXRpb24nXG5cbmNvbnN0IE5vdGlmaWNhdGlvbkNvbXBvbmVudCA9IFZ1ZS5leHRlbmQoTm90aWZpY2F0aW9uKVxuXG5jb25zdCBvcGVuTm90aWZpY2F0aW9uID0gKHByb3BzRGF0YSA9IHtcbiAgdGl0bGU6ICcnLFxuICBtZXNzYWdlOiAnJyxcbiAgdHlwZTogJycsXG4gIGRpcmVjdGlvbjogJycsXG4gIGR1cmF0aW9uOiA0NTAwLFxuICBjb250YWluZXI6ICcubm90aWZpY2F0aW9ucydcbn0pID0+IHtcbiAgcmV0dXJuIG5ldyBOb3RpZmljYXRpb25Db21wb25lbnQoe1xuICAgIGVsOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICBwcm9wc0RhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgTm90aWZpY2F0aW9uXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgb3Blbk5vdGlmaWNhdGlvbih7XG4gICAgICBtZXNzYWdlOiAnU3VjY2VzcyBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQnLFxuICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgZHVyYXRpb246IDBcbiAgICB9KVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBvcGVuTm90aWZpY2F0aW9uV2l0aFR5cGUgKHR5cGUpIHtcbiAgICAgIG9wZW5Ob3RpZmljYXRpb24oe1xuICAgICAgICB0aXRsZTogJ1RoaXMgaXMgYSB0aXRsZScsXG4gICAgICAgIG1lc3NhZ2U6ICdUaGlzIGlzIHRoZSBtZXNzYWdlLicsXG4gICAgICAgIHR5cGU6IHR5cGVcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uc3R5bGVzLWJveCAubm90aWZpY2F0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4IDAgMDtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gTm90aWZpY2F0aW9uLnZ1ZT84MTkzYzdmNiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5zdHlsZXMtYm94IC5ub3RpZmljYXRpb25bZGF0YS12LTcyYmEzOTY0XSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uYnV0dG9uW2RhdGEtdi03MmJhMzk2NF0ge1xcbiAgbWFyZ2luOiA1cHggMCAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03MmJhMzk2NFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDY0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDI0IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbkFyb3VuZCB7XFxuZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHNwaW5Bcm91bmQge1xcbmZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbn1cXG50byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbn1cXG59XFxuLm5vdGlmaWNhdGlvbnMge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiA1MHB4O1xcbiAgcmlnaHQ6IDA7XFxuICB6LWluZGV4OiAxMjU3O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XFxuLm5vdGlmaWNhdGlvbnMge1xcbiAgICAgIG1heC13aWR0aDogMzIwcHg7XFxufVxcbn1cXG4ubm90aWZpY2F0aW9ucyAubm90aWZpY2F0aW9uIHtcXG4gICAgbWFyZ2luOiAyMHB4O1xcbn1cXG4ubm90aWZpY2F0aW9uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi13aWR0aDogMjQwcHg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtODM3ODEwMTJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS1ub3RpZmljYXRpb24vc3JjL05vdGlmaWNhdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDY0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDI0IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTgzNzgxMDEyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vTm90aWZpY2F0aW9uLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTm90aWZpY2F0aW9uLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi04Mzc4MTAxMlxcXCJ9IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL05vdGlmaWNhdGlvbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2tpbW5oL0NvZGVzL1dlYlNob3AvYWRtaW4tdGVtcGxhdGUvbGFyYXZlbC12dWUtYWRtaW4vbm9kZV9tb2R1bGVzL3Z1ZS1idWxtYS1ub3RpZmljYXRpb24vc3JjL05vdGlmaWNhdGlvbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBOb3RpZmljYXRpb24udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTgzNzgxMDEyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtODM3ODEwMTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtYnVsbWEtbm90aWZpY2F0aW9uL3NyYy9Ob3RpZmljYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSA2OTJcbi8vIG1vZHVsZSBjaHVua3MgPSAyNCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm5vdGlmaWNhdGlvbnMtYm94XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1hbmNlc3RvclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50IGlzLTZcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIlN0eWxlc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrIHN0eWxlcy1ib3hcIlxuICB9LCBbX2MoJ25vdGlmaWNhdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiAnTm9ybWFsJyxcbiAgICAgIFwiZGlyZWN0aW9uXCI6ICdEb3duJyxcbiAgICAgIFwibWVzc2FnZVwiOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0JyxcbiAgICAgIFwiZHVyYXRpb25cIjogMFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdub3RpZmljYXRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogJ1ByaW1hcnknLFxuICAgICAgXCJ0eXBlXCI6ICdwcmltYXJ5JyxcbiAgICAgIFwiZGlyZWN0aW9uXCI6ICdSaWdodCcsXG4gICAgICBcIm1lc3NhZ2VcIjogJ1ByaW1hciBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQnLFxuICAgICAgXCJkdXJhdGlvblwiOiAwXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ25vdGlmaWNhdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiAnSW5mbycsXG4gICAgICBcInR5cGVcIjogJ2luZm8nLFxuICAgICAgXCJkaXJlY3Rpb25cIjogJ1JpZ2h0JyxcbiAgICAgIFwibWVzc2FnZVwiOiAnSW5mbyBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQnLFxuICAgICAgXCJkdXJhdGlvblwiOiAwXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ25vdGlmaWNhdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiAnU3VjY2VzcycsXG4gICAgICBcInR5cGVcIjogJ3N1Y2Nlc3MnLFxuICAgICAgXCJkaXJlY3Rpb25cIjogJ0xlZnQnLFxuICAgICAgXCJtZXNzYWdlXCI6ICdTdWNjZXNzIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCcsXG4gICAgICBcImR1cmF0aW9uXCI6IDBcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbm90aWZpY2F0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6ICdXYXJuaW5nJyxcbiAgICAgIFwidHlwZVwiOiAnd2FybmluZycsXG4gICAgICBcImRpcmVjdGlvblwiOiAnTGVmdCcsXG4gICAgICBcIm1lc3NhZ2VcIjogJ1dhcm5pbmcgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0JyxcbiAgICAgIFwiZHVyYXRpb25cIjogMFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdub3RpZmljYXRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogJ0RhbmdlcicsXG4gICAgICBcImNvbnRhaW5lclwiOiAnLnN0eWxlcy1ib3gnLFxuICAgICAgXCJ0eXBlXCI6ICdkYW5nZXInLFxuICAgICAgXCJkaXJlY3Rpb25cIjogJ0Rvd24nLFxuICAgICAgXCJtZXNzYWdlXCI6ICdEYW5nZXIgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0JyxcbiAgICAgIFwiZHVyYXRpb25cIjogMFxuICAgIH1cbiAgfSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnQgaXMtNlwiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiQnV0dG9uc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5vcGVuTm90aWZpY2F0aW9uV2l0aFR5cGUoJycpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTm9ybWFsXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXByaW1hcnlcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm9wZW5Ob3RpZmljYXRpb25XaXRoVHlwZSgncHJpbWFyeScpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUHJpbWFyeVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1pbmZvXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5vcGVuTm90aWZpY2F0aW9uV2l0aFR5cGUoJ2luZm8nKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkluZm9cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtc3VjY2Vzc1wiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ub3Blbk5vdGlmaWNhdGlvbldpdGhUeXBlKCdzdWNjZXNzJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTdWNjZXNzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXdhcm5pbmdcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm9wZW5Ob3RpZmljYXRpb25XaXRoVHlwZSgnd2FybmluZycpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiV2FybmluZ1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1kYW5nZXJcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm9wZW5Ob3RpZmljYXRpb25XaXRoVHlwZSgnZGFuZ2VyJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEYW5nZXJcIildKV0pXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNzJiYTM5NjRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03MmJhMzk2NFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL05vdGlmaWNhdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDc0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDI0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0cmFuc2l0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLnRyYW5zaXRpb24sXG4gICAgICBcIm1vZGVcIjogXCJpbi1vdXRcIixcbiAgICAgIFwiYXBwZWFyXCI6IFwiXCIsXG4gICAgICBcImFwcGVhci1hY3RpdmUtY2xhc3NcIjogX3ZtLmVudGVyQ2xhc3MsXG4gICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBfdm0uZW50ZXJDbGFzcyxcbiAgICAgIFwibGVhdmUtYWN0aXZlLWNsYXNzXCI6IF92bS5sZWF2ZUNsYXNzXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJhZnRlci1sZWF2ZVwiOiBfdm0uYWZ0ZXJMZWF2ZVxuICAgIH1cbiAgfSwgWyhfdm0uc2hvdykgPyBfYygnZGl2Jywge1xuICAgIGNsYXNzOiBbJ25vdGlmaWNhdGlvbicsICdhbmltYXRlZCcsIF92bS50eXBlID8gKFwiaXMtXCIgKyBfdm0udHlwZSkgOiAnJ11cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZGVsZXRlIHRvdWNoYWJsZVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uY2xvc2VkQnlVc2VyKClcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLnRpdGxlKSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGUgaXMtNVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSkgOiBfdm0uX2UoKSwgX3ZtLl92KFwiXFxuICAgIFwiICsgX3ZtLl9zKF92bS5tZXNzYWdlKSArIFwiXFxuICBcIildKSA6IF92bS5fZSgpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtODM3ODEwMTJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi04Mzc4MTAxMlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi92dWUtYnVsbWEtbm90aWZpY2F0aW9uL3NyYy9Ob3RpZmljYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSA3NTJcbi8vIG1vZHVsZSBjaHVua3MgPSAyNCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03MmJhMzk2NFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL05vdGlmaWNhdGlvbi52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjc1ZDI2ZmRlXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTcyYmEzOTY0XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTm90aWZpY2F0aW9uLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03MmJhMzk2NFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL05vdGlmaWNhdGlvbi52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTcyYmEzOTY0XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMjQiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTgzNzgxMDEyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Ob3RpZmljYXRpb24udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjk3MWJjNjQwXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi04Mzc4MTAxMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTm90aWZpY2F0aW9uLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtODM3ODEwMTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL05vdGlmaWNhdGlvbi52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTgzNzgxMDEyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vfi92dWUtYnVsbWEtbm90aWZpY2F0aW9uL3NyYy9Ob3RpZmljYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSA3OTZcbi8vIG1vZHVsZSBjaHVua3MgPSAyNCJdLCJzb3VyY2VSb290IjoiIn0=
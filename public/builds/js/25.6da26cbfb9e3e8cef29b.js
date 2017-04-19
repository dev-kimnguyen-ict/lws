webpackJsonp([25],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(772)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(588),
  /* template */
  __webpack_require__(709),
  /* scopeId */
  "data-v-0217931e",
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/components/Message.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Message.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0217931e", Component.options)
  } else {
    hotAPI.reload("data-v-0217931e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 558:
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
      default: 'Down'
    },
    duration: {
      type: Number,
      default: 1500
    },
    container: {
      type: String,
      default: '.messages'
    },
    showCloseButton: Boolean
  },

  data: function data() {
    return {
      $_parent_: null,
      icons: {
        normal: '',
        primary: 'arrow-circle-right',
        info: 'info-circle',
        success: 'check-circle',
        warning: 'exclamation-circle',
        danger: 'times-circle'
      },
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
        var Messages = _vue2.default.extend({
          name: 'Messages',
          render: function render(h) {
            return h('div', {
              'class': _defineProperty({}, '' + className, true)
            });
          }
        });
        $parent = new Messages().$mount();
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
      return 'bounceOut' + (this.direction === 'Up' ? 'Down' : 'Up');
    },
    icon: function icon() {
      return this.icons[this.type];
    }
  },

  methods: {
    close: function close() {
      clearTimeout(this.timer);
      this.show = false;
    },
    afterLeave: function afterLeave() {
      this.$destroy();
    }
  }
};

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(4);

var _vue2 = _interopRequireDefault(_vue);

var _vueBulmaMessage = __webpack_require__(691);

var _vueBulmaMessage2 = _interopRequireDefault(_vueBulmaMessage);

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

var MessageComponent = _vue2.default.extend(_vueBulmaMessage2.default);

var openMessage = function openMessage() {
  var propsData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    title: '',
    message: '',
    type: '',
    direction: '',
    duration: 1500,
    container: '.messages'
  };

  return new MessageComponent({
    el: document.createElement('div'),
    propsData: propsData
  });
};

exports.default = {
  components: {
    Message: _vueBulmaMessage2.default
  },

  mounted: function mounted() {
    openMessage({
      message: 'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      type: 'success',
      duration: 0,
      showCloseButton: true
    });
  },


  methods: {
    openMessageWithType: function openMessageWithType(type) {
      openMessage({
        title: 'This is a title',
        message: 'This is the message.',
        type: type
      });
    }
  }

};

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.styles-box .message-box[data-v-0217931e] {\n  margin-bottom: 20px;\n}\n.button[data-v-0217931e] {\n  margin: 5px 0 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.messages {\n  position: fixed;\n  top: 15px;\n  left: 0;\n  width: 100%;\n  z-index: 1258;\n  pointer-events: none;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n.messages .message-box {\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    pointer-events: all;\n}\n.messages .message {\n    position: relative;\n    right: 50%;\n}\n.messages .message .delete {\n      float: right;\n}\n.messages .message .icon {\n      vertical-align: middle;\n}\n", ""]);

// exports


/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(783)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(558),
  /* template */
  __webpack_require__(730),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-message/src/Message.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Message.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3482041e", Component.options)
  } else {
    hotAPI.reload("data-v-3482041e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 709:
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
  }, [_c('message', {
    attrs: {
      "title": 'Normal',
      "direction": 'down',
      "message": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      "duration": 0
    }
  }), _vm._v(" "), _c('message', {
    attrs: {
      "title": 'Primary',
      "type": 'primary',
      "direction": 'right',
      "message": 'Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      "duration": 0
    }
  }), _vm._v(" "), _c('message', {
    attrs: {
      "title": 'Info',
      "type": 'info',
      "direction": 'right',
      "message": 'Info lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      "duration": 0
    }
  }), _vm._v(" "), _c('message', {
    attrs: {
      "title": 'Success',
      "type": 'success',
      "direction": 'left',
      "message": 'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      "duration": 0
    }
  }), _vm._v(" "), _c('message', {
    attrs: {
      "title": 'Warning',
      "type": 'warning',
      "direction": 'left',
      "message": 'Warning lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      "duration": 0
    }
  }), _vm._v(" "), _c('message', {
    attrs: {
      "title": 'Danger',
      "container": '.styles-box',
      "type": 'danger',
      "direction": 'down',
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
        _vm.openMessageWithType('')
      }
    }
  }, [_vm._v("Normal")]), _vm._v(" "), _c('button', {
    staticClass: "button is-primary",
    on: {
      "click": function($event) {
        _vm.openMessageWithType('primary')
      }
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c('button', {
    staticClass: "button is-info",
    on: {
      "click": function($event) {
        _vm.openMessageWithType('info')
      }
    }
  }, [_vm._v("Info")]), _vm._v(" "), _c('button', {
    staticClass: "button is-success",
    on: {
      "click": function($event) {
        _vm.openMessageWithType('success')
      }
    }
  }, [_vm._v("Success")]), _vm._v(" "), _c('button', {
    staticClass: "button is-warning",
    on: {
      "click": function($event) {
        _vm.openMessageWithType('warning')
      }
    }
  }, [_vm._v("Warning")]), _vm._v(" "), _c('button', {
    staticClass: "button is-danger",
    on: {
      "click": function($event) {
        _vm.openMessageWithType('danger')
      }
    }
  }, [_vm._v("Danger")])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0217931e", module.exports)
  }
}

/***/ }),

/***/ 730:
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
    staticClass: "message-box animated"
  }, [_c('article', {
    class: ['message', _vm.type ? ("is-" + _vm.type) : '']
  }, [_c('div', {
    staticClass: "message-header"
  }, [(_vm.showCloseButton) ? _c('button', {
    staticClass: "delete touchable",
    on: {
      "click": function($event) {
        _vm.close()
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.icon) ? _c('span', {
    staticClass: "icon"
  }, [_c('i', {
    class: ['fa', ("fa-" + _vm.icon)]
  })]) : _vm._e(), _vm._v("\n        " + _vm._s(_vm.title) + "\n      ")]), _vm._v(" "), (_vm.message) ? _c('div', {
    staticClass: "message-body"
  }, [_vm._v(_vm._s(_vm.message))]) : _vm._e()])]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3482041e", module.exports)
  }
}

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(622);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("acc730ae", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0217931e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0217931e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(633);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("aafa5d2a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3482041e\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Message.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3482041e\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Message.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvTWVzc2FnZS52dWUiLCJ3ZWJwYWNrOi8vL01lc3NhZ2UudnVlIiwid2VicGFjazovLy9NZXNzYWdlLnZ1ZT82MmM5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9NZXNzYWdlLnZ1ZT82NjVkIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLW1lc3NhZ2Uvc3JjL01lc3NhZ2UudnVlPzVjZjQiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtbWVzc2FnZS9zcmMvTWVzc2FnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL01lc3NhZ2UudnVlP2RjODUiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtbWVzc2FnZS9zcmMvTWVzc2FnZS52dWU/M2RmOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvTWVzc2FnZS52dWU/NjViNSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1tZXNzYWdlL3NyYy9NZXNzYWdlLnZ1ZT9kZDY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0EsdUJBQTRLOztBQUU1SztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUE0RztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBSUE7V0FDQTthQUNBOztZQUVBO2VBRUE7QUFIQTs7WUFLQTtlQUVBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3ZIQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3hDQTs7QUFFQTtBQUNBLHFDQUFpTjtBQUNqTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNElBQTRJLG9FQUFvRTtBQUNoTixxSkFBcUosb0VBQW9FO0FBQ3pOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBLHFDQUFzSztBQUN0SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQWdHLHFFQUFxRTtBQUNySyx5R0FBeUcscUVBQXFFO0FBQzlLO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJqcy8yNS42ZGEyNmNiZmI5ZTNlOGNlZjI5Yi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDIxNzkzMWVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9NZXNzYWdlLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9NZXNzYWdlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDIxNzkzMWVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTWVzc2FnZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtMDIxNzkzMWVcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2tpbW5oL0NvZGVzL1dlYlNob3AvYWRtaW4tdGVtcGxhdGUvbGFyYXZlbC12dWUtYWRtaW4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL01lc3NhZ2UudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gTWVzc2FnZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMDIxNzkzMWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0wMjE3OTMxZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvTWVzc2FnZS52dWVcbi8vIG1vZHVsZSBpZCA9IDE0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDI1IiwiPHRlbXBsYXRlPlxuICA8dHJhbnNpdGlvblxuICAgIDpuYW1lPVwidHJhbnNpdGlvblwiXG4gICAgbW9kZT1cImluLW91dFwiXG4gICAgYXBwZWFyXG4gICAgOmFwcGVhci1hY3RpdmUtY2xhc3M9XCJlbnRlckNsYXNzXCJcbiAgICA6ZW50ZXItYWN0aXZlLWNsYXNzPVwiZW50ZXJDbGFzc1wiXG4gICAgOmxlYXZlLWFjdGl2ZS1jbGFzcz1cImxlYXZlQ2xhc3NcIlxuICAgIEBhZnRlci1sZWF2ZT1cImFmdGVyTGVhdmVcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtYm94IGFuaW1hdGVkXCIgdi1pZj1cInNob3dcIj5cbiAgICAgIDxhcnRpY2xlIDpjbGFzcz1cIlsnbWVzc2FnZScsIHR5cGUgPyBgaXMtJHt0eXBlfWAgOiAnJ11cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZSB0b3VjaGFibGVcIiBAY2xpY2s9XCJjbG9zZSgpXCIgdi1pZj1cInNob3dDbG9zZUJ1dHRvblwiPjwvYnV0dG9uPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiIHYtaWY9XCJpY29uXCI+XG4gICAgICAgICAgICA8aSA6Y2xhc3M9XCJbJ2ZhJywgYGZhLSR7aWNvbn1gXVwiPjwvaT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAge3sgdGl0bGUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZXNzYWdlLWJvZHlcIiB2LWlmPVwibWVzc2FnZVwiPnt7IG1lc3NhZ2UgfX08L2Rpdj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L2Rpdj5cbiAgPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgcHJvcHM6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgdGl0bGU6IFN0cmluZyxcbiAgICBtZXNzYWdlOiBTdHJpbmcsXG4gICAgZGlyZWN0aW9uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnRG93bidcbiAgICB9LFxuICAgIGR1cmF0aW9uOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAxNTAwXG4gICAgfSxcbiAgICBjb250YWluZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcubWVzc2FnZXMnXG4gICAgfSxcbiAgICBzaG93Q2xvc2VCdXR0b246IEJvb2xlYW5cbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJF9wYXJlbnRfOiBudWxsLFxuICAgICAgaWNvbnM6IHtcbiAgICAgICAgbm9ybWFsOiAnJyxcbiAgICAgICAgcHJpbWFyeTogJ2Fycm93LWNpcmNsZS1yaWdodCcsXG4gICAgICAgIGluZm86ICdpbmZvLWNpcmNsZScsXG4gICAgICAgIHN1Y2Nlc3M6ICdjaGVjay1jaXJjbGUnLFxuICAgICAgICB3YXJuaW5nOiAnZXhjbGFtYXRpb24tY2lyY2xlJyxcbiAgICAgICAgZGFuZ2VyOiAndGltZXMtY2lyY2xlJ1xuICAgICAgfSxcbiAgICAgIHNob3c6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgbGV0ICRwYXJlbnQgPSB0aGlzLiRwYXJlbnRcbiAgICBpZiAoISRwYXJlbnQpIHtcbiAgICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udGFpbmVyKVxuICAgICAgaWYgKCFwYXJlbnQpIHtcbiAgICAgICAgLy8gTGF6eSBjcmVhdGluZyBgZGl2Lm5vdGlmaWNhdGlvbnNgIGNvbnRhaW5lci5cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gdGhpcy5jb250YWluZXIucmVwbGFjZSgnLicsICcnKVxuICAgICAgICBjb25zdCBNZXNzYWdlcyA9IFZ1ZS5leHRlbmQoe1xuICAgICAgICAgIG5hbWU6ICdNZXNzYWdlcycsXG4gICAgICAgICAgcmVuZGVyIChoKSB7XG4gICAgICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgICAgICAnY2xhc3MnOiB7XG4gICAgICAgICAgICAgICAgW2Ake2NsYXNzTmFtZX1gXTogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgJHBhcmVudCA9IG5ldyBNZXNzYWdlcygpLiRtb3VudCgpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoJHBhcmVudC4kZWwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkcGFyZW50ID0gcGFyZW50Ll9fdnVlX19cbiAgICAgIH1cbiAgICAgIC8vIEhhY2tlZC5cbiAgICAgIHRoaXMuJF9wYXJlbnRfID0gJHBhcmVudFxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICBpZiAodGhpcy4kX3BhcmVudF8pIHtcbiAgICAgIHRoaXMuJF9wYXJlbnRfLiRlbC5hcHBlbmRDaGlsZCh0aGlzLiRlbClcbiAgICAgIHRoaXMuJHBhcmVudCA9IHRoaXMuJF9wYXJlbnRfXG4gICAgICBkZWxldGUgdGhpcy4kX3BhcmVudF9cbiAgICB9XG4gICAgaWYgKHRoaXMuZHVyYXRpb24gPiAwKSB7XG4gICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLmNsb3NlKCksIHRoaXMuZHVyYXRpb24pXG4gICAgfVxuICB9LFxuXG4gIGRlc3Ryb3llZCAoKSB7XG4gICAgdGhpcy4kZWwucmVtb3ZlKClcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIHRyYW5zaXRpb24gKCkge1xuICAgICAgcmV0dXJuIGBib3VuY2UtJHt0aGlzLmRpcmVjdGlvbn1gXG4gICAgfSxcblxuICAgIGVudGVyQ2xhc3MgKCkge1xuICAgICAgcmV0dXJuIGBib3VuY2VJbiR7dGhpcy5kaXJlY3Rpb259YFxuICAgIH0sXG5cbiAgICBsZWF2ZUNsYXNzICgpIHtcbiAgICAgIHJldHVybiBgYm91bmNlT3V0JHt0aGlzLmRpcmVjdGlvbiA9PT0gJ1VwJyA/ICdEb3duJyA6ICdVcCd9YFxuICAgIH0sXG5cbiAgICBpY29uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmljb25zW3RoaXMudHlwZV1cbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGNsb3NlICgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxuICAgICAgdGhpcy5zaG93ID0gZmFsc2VcbiAgICB9LFxuXG4gICAgYWZ0ZXJMZWF2ZSAoKSB7XG4gICAgICB0aGlzLiRkZXN0cm95KClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5tZXNzYWdlcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAyNCArIDIzNDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG5cbiAgLm1lc3NhZ2UtYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIH1cblxuICAubWVzc2FnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiA1MCU7XG5cbiAgICAuZGVsZXRlIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgfVxufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBNZXNzYWdlLnZ1ZT81YTA0NzdjNiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvbnMtYm94XCI+XG4gICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtYW5jZXN0b3JcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudCBpcy02XCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlN0eWxlczwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrIHN0eWxlcy1ib3hcIj5cblxuICAgICAgICAgICAgPG1lc3NhZ2UgOnRpdGxlPVwiJ05vcm1hbCdcIiA6ZGlyZWN0aW9uPVwiJ2Rvd24nXCIgOm1lc3NhZ2U9XCInTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0J1wiIDpkdXJhdGlvbj1cIjBcIj48L21lc3NhZ2U+XG5cbiAgICAgICAgICAgIDxtZXNzYWdlIDp0aXRsZT1cIidQcmltYXJ5J1wiIDp0eXBlPVwiJ3ByaW1hcnknXCIgOmRpcmVjdGlvbj1cIidyaWdodCdcIiA6bWVzc2FnZT1cIidQcmltYXIgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0J1wiIDpkdXJhdGlvbj1cIjBcIj48L21lc3NhZ2U+XG5cbiAgICAgICAgICAgIDxtZXNzYWdlIDp0aXRsZT1cIidJbmZvJ1wiIDp0eXBlPVwiJ2luZm8nXCIgOmRpcmVjdGlvbj1cIidyaWdodCdcIiA6bWVzc2FnZT1cIidJbmZvIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCdcIiA6ZHVyYXRpb249XCIwXCI+PC9tZXNzYWdlPlxuXG4gICAgICAgICAgICA8bWVzc2FnZSA6dGl0bGU9XCInU3VjY2VzcydcIiA6dHlwZT1cIidzdWNjZXNzJ1wiIDpkaXJlY3Rpb249XCInbGVmdCdcIiA6bWVzc2FnZT1cIidTdWNjZXNzIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCdcIiA6ZHVyYXRpb249XCIwXCI+PC9tZXNzYWdlPlxuXG4gICAgICAgICAgICA8bWVzc2FnZSA6dGl0bGU9XCInV2FybmluZydcIiA6dHlwZT1cIid3YXJuaW5nJ1wiIDpkaXJlY3Rpb249XCInbGVmdCdcIiA6bWVzc2FnZT1cIidXYXJuaW5nIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCdcIiA6ZHVyYXRpb249XCIwXCI+PC9tZXNzYWdlPlxuXG4gICAgICAgICAgICA8bWVzc2FnZSA6dGl0bGU9XCInRGFuZ2VyJ1wiIDpjb250YWluZXI9XCInLnN0eWxlcy1ib3gnXCIgOnR5cGU9XCInZGFuZ2VyJ1wiIDpkaXJlY3Rpb249XCInZG93bidcIiA6bWVzc2FnZT1cIidEYW5nZXIgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0J1wiIDpkdXJhdGlvbj1cIjBcIj48L21lc3NhZ2U+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudCBpcy02XCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPkJ1dHRvbnM8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIEBjbGljaz1cIm9wZW5NZXNzYWdlV2l0aFR5cGUoJycpXCI+Tm9ybWFsPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXByaW1hcnlcIiBAY2xpY2s9XCJvcGVuTWVzc2FnZVdpdGhUeXBlKCdwcmltYXJ5JylcIj5QcmltYXJ5PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLWluZm9cIiBAY2xpY2s9XCJvcGVuTWVzc2FnZVdpdGhUeXBlKCdpbmZvJylcIj5JbmZvPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXN1Y2Nlc3NcIiBAY2xpY2s9XCJvcGVuTWVzc2FnZVdpdGhUeXBlKCdzdWNjZXNzJylcIj5TdWNjZXNzPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXdhcm5pbmdcIiBAY2xpY2s9XCJvcGVuTWVzc2FnZVdpdGhUeXBlKCd3YXJuaW5nJylcIj5XYXJuaW5nPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLWRhbmdlclwiIEBjbGljaz1cIm9wZW5NZXNzYWdlV2l0aFR5cGUoJ2RhbmdlcicpXCI+RGFuZ2VyPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBNZXNzYWdlIGZyb20gJ3Z1ZS1idWxtYS1tZXNzYWdlJ1xuXG5jb25zdCBNZXNzYWdlQ29tcG9uZW50ID0gVnVlLmV4dGVuZChNZXNzYWdlKVxuXG5jb25zdCBvcGVuTWVzc2FnZSA9IChwcm9wc0RhdGEgPSB7XG4gIHRpdGxlOiAnJyxcbiAgbWVzc2FnZTogJycsXG4gIHR5cGU6ICcnLFxuICBkaXJlY3Rpb246ICcnLFxuICBkdXJhdGlvbjogMTUwMCxcbiAgY29udGFpbmVyOiAnLm1lc3NhZ2VzJ1xufSkgPT4ge1xuICByZXR1cm4gbmV3IE1lc3NhZ2VDb21wb25lbnQoe1xuICAgIGVsOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcbiAgICBwcm9wc0RhdGFcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgTWVzc2FnZVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIG9wZW5NZXNzYWdlKHtcbiAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCcsXG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICBkdXJhdGlvbjogMCxcbiAgICAgIHNob3dDbG9zZUJ1dHRvbjogdHJ1ZVxuICAgIH0pXG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG9wZW5NZXNzYWdlV2l0aFR5cGUgKHR5cGUpIHtcbiAgICAgIG9wZW5NZXNzYWdlKHtcbiAgICAgICAgdGl0bGU6ICdUaGlzIGlzIGEgdGl0bGUnLFxuICAgICAgICBtZXNzYWdlOiAnVGhpcyBpcyB0aGUgbWVzc2FnZS4nLFxuICAgICAgICB0eXBlOiB0eXBlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLnN0eWxlcy1ib3ggLm1lc3NhZ2UtYm94IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4IDAgMDtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gTWVzc2FnZS52dWU/MTkzMDgwZTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc3R5bGVzLWJveCAubWVzc2FnZS1ib3hbZGF0YS12LTAyMTc5MzFlXSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uYnV0dG9uW2RhdGEtdi0wMjE3OTMxZV0ge1xcbiAgbWFyZ2luOiA1cHggMCAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0wMjE3OTMxZVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL01lc3NhZ2UudnVlXG4vLyBtb2R1bGUgaWQgPSA2MjJcbi8vIG1vZHVsZSBjaHVua3MgPSAyNSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1lc3NhZ2VzIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMTVweDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDEyNTg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuLm1lc3NhZ2VzIC5tZXNzYWdlLWJveCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG4ubWVzc2FnZXMgLm1lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHJpZ2h0OiA1MCU7XFxufVxcbi5tZXNzYWdlcyAubWVzc2FnZSAuZGVsZXRlIHtcXG4gICAgICBmbG9hdDogcmlnaHQ7XFxufVxcbi5tZXNzYWdlcyAubWVzc2FnZSAuaWNvbiB7XFxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzQ4MjA0MWVcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS1tZXNzYWdlL3NyYy9NZXNzYWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMjUiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzQ4MjA0MWVcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9NZXNzYWdlLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTWVzc2FnZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzQ4MjA0MWVcXFwifSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9NZXNzYWdlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9ub2RlX21vZHVsZXMvdnVlLWJ1bG1hLW1lc3NhZ2Uvc3JjL01lc3NhZ2UudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gTWVzc2FnZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzQ4MjA0MWVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zNDgyMDQxZVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1idWxtYS1tZXNzYWdlL3NyYy9NZXNzYWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMjUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb25zLWJveFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtYW5jZXN0b3JcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudCBpcy02XCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJTdHlsZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibG9jayBzdHlsZXMtYm94XCJcbiAgfSwgW19jKCdtZXNzYWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6ICdOb3JtYWwnLFxuICAgICAgXCJkaXJlY3Rpb25cIjogJ2Rvd24nLFxuICAgICAgXCJtZXNzYWdlXCI6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQnLFxuICAgICAgXCJkdXJhdGlvblwiOiAwXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21lc3NhZ2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogJ1ByaW1hcnknLFxuICAgICAgXCJ0eXBlXCI6ICdwcmltYXJ5JyxcbiAgICAgIFwiZGlyZWN0aW9uXCI6ICdyaWdodCcsXG4gICAgICBcIm1lc3NhZ2VcIjogJ1ByaW1hciBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQnLFxuICAgICAgXCJkdXJhdGlvblwiOiAwXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21lc3NhZ2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogJ0luZm8nLFxuICAgICAgXCJ0eXBlXCI6ICdpbmZvJyxcbiAgICAgIFwiZGlyZWN0aW9uXCI6ICdyaWdodCcsXG4gICAgICBcIm1lc3NhZ2VcIjogJ0luZm8gbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0JyxcbiAgICAgIFwiZHVyYXRpb25cIjogMFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdtZXNzYWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6ICdTdWNjZXNzJyxcbiAgICAgIFwidHlwZVwiOiAnc3VjY2VzcycsXG4gICAgICBcImRpcmVjdGlvblwiOiAnbGVmdCcsXG4gICAgICBcIm1lc3NhZ2VcIjogJ1N1Y2Nlc3MgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0JyxcbiAgICAgIFwiZHVyYXRpb25cIjogMFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdtZXNzYWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6ICdXYXJuaW5nJyxcbiAgICAgIFwidHlwZVwiOiAnd2FybmluZycsXG4gICAgICBcImRpcmVjdGlvblwiOiAnbGVmdCcsXG4gICAgICBcIm1lc3NhZ2VcIjogJ1dhcm5pbmcgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBsb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0JyxcbiAgICAgIFwiZHVyYXRpb25cIjogMFxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdtZXNzYWdlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6ICdEYW5nZXInLFxuICAgICAgXCJjb250YWluZXJcIjogJy5zdHlsZXMtYm94JyxcbiAgICAgIFwidHlwZVwiOiAnZGFuZ2VyJyxcbiAgICAgIFwiZGlyZWN0aW9uXCI6ICdkb3duJyxcbiAgICAgIFwibWVzc2FnZVwiOiAnRGFuZ2VyIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQgbG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCcsXG4gICAgICBcImR1cmF0aW9uXCI6IDBcbiAgICB9XG4gIH0pXSwgMSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50IGlzLTZcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIkJ1dHRvbnNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibG9ja1wiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ub3Blbk1lc3NhZ2VXaXRoVHlwZSgnJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJOb3JtYWxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtcHJpbWFyeVwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ub3Blbk1lc3NhZ2VXaXRoVHlwZSgncHJpbWFyeScpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUHJpbWFyeVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1pbmZvXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5vcGVuTWVzc2FnZVdpdGhUeXBlKCdpbmZvJylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJJbmZvXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXN1Y2Nlc3NcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm9wZW5NZXNzYWdlV2l0aFR5cGUoJ3N1Y2Nlc3MnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlN1Y2Nlc3NcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtd2FybmluZ1wiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ub3Blbk1lc3NhZ2VXaXRoVHlwZSgnd2FybmluZycpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiV2FybmluZ1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1kYW5nZXJcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLm9wZW5NZXNzYWdlV2l0aFR5cGUoJ2RhbmdlcicpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRGFuZ2VyXCIpXSldKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTAyMTc5MzFlXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDIxNzkzMWVcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9NZXNzYWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMjUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3RyYW5zaXRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBfdm0udHJhbnNpdGlvbixcbiAgICAgIFwibW9kZVwiOiBcImluLW91dFwiLFxuICAgICAgXCJhcHBlYXJcIjogXCJcIixcbiAgICAgIFwiYXBwZWFyLWFjdGl2ZS1jbGFzc1wiOiBfdm0uZW50ZXJDbGFzcyxcbiAgICAgIFwiZW50ZXItYWN0aXZlLWNsYXNzXCI6IF92bS5lbnRlckNsYXNzLFxuICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogX3ZtLmxlYXZlQ2xhc3NcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImFmdGVyLWxlYXZlXCI6IF92bS5hZnRlckxlYXZlXG4gICAgfVxuICB9LCBbKF92bS5zaG93KSA/IF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWVzc2FnZS1ib3ggYW5pbWF0ZWRcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgY2xhc3M6IFsnbWVzc2FnZScsIF92bS50eXBlID8gKFwiaXMtXCIgKyBfdm0udHlwZSkgOiAnJ11cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWVzc2FnZS1oZWFkZXJcIlxuICB9LCBbKF92bS5zaG93Q2xvc2VCdXR0b24pID8gX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZWxldGUgdG91Y2hhYmxlXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5jbG9zZSgpXG4gICAgICB9XG4gICAgfVxuICB9KSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCAoX3ZtLmljb24pID8gX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaWNvblwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBjbGFzczogWydmYScsIChcImZhLVwiICsgX3ZtLmljb24pXVxuICB9KV0pIDogX3ZtLl9lKCksIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLnRpdGxlKSArIFwiXFxuICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIChfdm0ubWVzc2FnZSkgPyBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1lc3NhZ2UtYm9keVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5tZXNzYWdlKSldKSA6IF92bS5fZSgpXSldKSA6IF92bS5fZSgpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMzQ4MjA0MWVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zNDgyMDQxZVwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi92dWUtYnVsbWEtbWVzc2FnZS9zcmMvTWVzc2FnZS52dWVcbi8vIG1vZHVsZSBpZCA9IDczMFxuLy8gbW9kdWxlIGNodW5rcyA9IDI1IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTAyMTc5MzFlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTWVzc2FnZS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImFjYzczMGFlXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTAyMTc5MzFlXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTWVzc2FnZS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDIxNzkzMWVcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9NZXNzYWdlLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDIxNzkzMWVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9NZXNzYWdlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMjUiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTM0ODIwNDFlXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9NZXNzYWdlLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJhYWZhNWQyYVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzQ4MjA0MWVcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01lc3NhZ2UudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zNDgyMDQxZVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTWVzc2FnZS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTM0ODIwNDFlXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vfi92dWUtYnVsbWEtbWVzc2FnZS9zcmMvTWVzc2FnZS52dWVcbi8vIG1vZHVsZSBpZCA9IDc4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDI1Il0sInNvdXJjZVJvb3QiOiIifQ==
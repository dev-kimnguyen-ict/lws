webpackJsonp([26],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(585),
  /* template */
  __webpack_require__(719),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/components/Default.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Default.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1c16bc58", Component.options)
  } else {
    hotAPI.reload("data-v-1c16bc58", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardFooterItem = exports.BaseCard = undefined;

var _BaseCard = __webpack_require__(680);

var _BaseCard2 = _interopRequireDefault(_BaseCard);

var _CardFooterItem = __webpack_require__(681);

var _CardFooterItem2 = _interopRequireDefault(_CardFooterItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.BaseCard = _BaseCard2.default;
exports.CardFooterItem = _CardFooterItem2.default;

/***/ }),

/***/ 548:
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
//
//
//
//
//
//
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
    title: {
      type: String
    },
    icon: String,
    content: String,
    transition: {
      type: String,
      default: 'fade'
    }
  },

  methods: {
    afterLeave: function afterLeave() {
      this.$destroy();
    }
  },

  computed: {
    enterClass: function enterClass() {
      return this.transition + 'In';
    },
    leaveClass: function leaveClass() {
      return this.transition + 'Out';
    }
  }
};

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(4);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardFooterItem = _vue2.default.component('card-footer-item', {
  props: {
    element: {
      type: String,
      default: 'a',
      validator: function validator(value) {
        return ['a', 'link', 'div'].includes(value);
      }
    },
    href: String,
    to: Object
  },

  render: function render(createElement) {
    var element = this.element,
        href = this.href,
        to = this.to;

    var dataObj = { 'class': 'card-footer-item' };

    if (element === 'a' && href) {
      dataObj.attrs = { href: href };
    } else if (element === 'link' && to) {
      dataObj.attrs = { to: to };
    }

    if (this.$slots.default) {
      return createElement(element === 'link' ? 'router-link' : element, dataObj, this.$slots.default);
    }
  }
});

exports.default = CardFooterItem;

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var _vuex = __webpack_require__(5);

var _vueBulmaCard = __webpack_require__(539);

exports.default = {
  components: {
    BaseCard: _vueBulmaCard.BaseCard,
    CardFooterItem: _vueBulmaCard.CardFooterItem
  },

  computed: _extends({}, (0, _vuex.mapGetters)({
    parent: 'componententry'
  }), {
    parentPath: function parentPath() {
      return this.parent ? this.parent.path : '';
    },
    items: function items() {
      return (this.parent ? this.parent.children : []).filter(function (item) {
        return item.path;
      });
    }
  }),

  methods: {
    getActions: function getActions(item) {
      return [{
        text: 'Repository',
        icon: 'github',
        href: item.meta && item.meta.repository
      }, {
        text: 'Demo',
        icon: 'link',
        name: item.name
      }];
    },
    getDescription: function getDescription(item) {
      return item.meta && item.meta.description;
    }
  }

};

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(548),
  /* template */
  __webpack_require__(741),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-card/src/BaseCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] BaseCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64322508", Component.options)
  } else {
    hotAPI.reload("data-v-64322508", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(549),
  /* template */
  null,
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-card/src/CardFooterItem.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-71824c45", Component.options)
  } else {
    hotAPI.reload("data-v-71824c45", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "columns is-multiline is-mobile"
  }, _vm._l((_vm.items), function(item) {
    return (item.name) ? _c('div', {
      staticClass: "column is-half-mobile is-one-third-tablet is-one-third-desktop"
    }, [_c('base-card', {
      attrs: {
        "title": item.name,
        "content": _vm.getDescription(item)
      }
    }, [_c('card-footer-item', {
      attrs: {
        "href": item.meta && item.meta.repository
      },
      slot: "footer"
    }, [_c('span', {
      staticClass: "icon is-small"
    }, [_c('i', {
      staticClass: "fa fa-github",
      attrs: {
        "aria-hidden": "true"
      }
    })]), _vm._v("  \n        Repository\n      ")]), _vm._v(" "), _c('card-footer-item', {
      attrs: {
        "element": "link",
        "to": {
          name: item.name
        }
      },
      slot: "footer"
    }, [_c('span', {
      staticClass: "icon is-small"
    }, [_c('i', {
      staticClass: "fa fa-link",
      attrs: {
        "aria-hidden": "true"
      }
    })]), _vm._v("  \n        Demo\n      ")])], 1)], 1) : _vm._e()
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1c16bc58", module.exports)
  }
}

/***/ }),

/***/ 741:
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
  }, [_c('div', {
    staticClass: "card is-fullwidth"
  }, [_c('header', {
    staticClass: "card-header"
  }, [_c('p', {
    staticClass: "card-header-title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), (!!this.icon) ? _c('a', {
    staticClass: "card-header-icon"
  }, [_c('span', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "fa",
    class: [("fa-" + _vm.icon)]
  })])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "card-content"
  }, [_c('div', {
    staticClass: "content"
  }, [_vm._v(_vm._s(_vm.content))])]), _vm._v(" "), (!!this.$slots.footer) ? _c('footer', {
    staticClass: "card-footer"
  }, [_vm._t("footer")], 2) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-64322508", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvRGVmYXVsdC52dWUiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtY2FyZC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0Jhc2VDYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vQ2FyZEZvb3Rlckl0ZW0udnVlIiwid2VicGFjazovLy9EZWZhdWx0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1jYXJkL3NyYy9CYXNlQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtY2FyZC9zcmMvQ2FyZEZvb3Rlckl0ZW0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9EZWZhdWx0LnZ1ZT80YzE2Iiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLWNhcmQvc3JjL0Jhc2VDYXJkLnZ1ZT85OTJiIl0sIm5hbWVzIjpbIkJhc2VDYXJkIiwiQ2FyZEZvb3Rlckl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7Ozs7QUFDQTs7Ozs7O1FBR0VBLFE7UUFDQUMsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN5QkY7Ozs7O1lBS0E7QUFGQTtVQUdBO2FBQ0E7O1lBRUE7ZUFJQTtBQUxBO0FBTkE7OztzQ0FhQTtXQUNBO0FBR0E7QUFMQTs7O3NDQU9BO2tCQUNBO0FBRUE7c0NBQ0E7a0JBQ0E7QUFFQTtBQVJBO0FBbkJBLEU7Ozs7Ozs7Ozs7Ozs7O0FDOUJBOzs7Ozs7QUFFQTs7O1lBSUE7ZUFDQTs7NkNBRUE7O0FBSkE7VUFLQTtRQUdBO0FBVEE7OztBQVVBOzthQUNBOzs2QkFFQTs7aUNBQ0E7OEJBQ0E7eUNBQ0E7NEJBQ0E7QUFFQTs7NkJBQ0E7OEZBQ0E7QUFDQTtBQUdBO0FBMUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNzQkE7O0FBR0E7Ozs7QUFHQTtBQUdBO0FBSkE7O0FBS0E7WUFJQTtBQUhBO3NDQUlBOzhDQUNBO0FBRUE7NEJBQ0E7O29CQUNBOztBQUdBOzs7OzBDQUVBOztjQUVBO2NBQ0E7cUNBQ0E7QUFIQTtjQUtBO2NBQ0E7bUJBRUE7QUFKQTtBQU1BO2tEQUNBO29DQUNBO0FBR0E7QUFqQkE7O0FBcEJBLEU7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7O0FBRXBJO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7OztBQzFCQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDL0NBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJqcy8yNi43NjhhM2YzOTJiMDM1MTE0M2IzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0RlZmF1bHQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xYzE2YmM1OFxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9EZWZhdWx0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvRGVmYXVsdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBEZWZhdWx0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xYzE2YmM1OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTFjMTZiYzU4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9EZWZhdWx0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMjYiLCJpbXBvcnQgQmFzZUNhcmQgZnJvbSAnLi9CYXNlQ2FyZCdcbmltcG9ydCBDYXJkRm9vdGVySXRlbSBmcm9tICcuL0NhcmRGb290ZXJJdGVtJ1xuXG5leHBvcnQge1xuICBCYXNlQ2FyZCxcbiAgQ2FyZEZvb3Rlckl0ZW1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdnVlLWJ1bG1hLWNhcmQvc3JjL2luZGV4LmpzIiwiPHRlbXBsYXRlPlxuICA8dHJhbnNpdGlvblxuICAgIDpuYW1lPVwidHJhbnNpdGlvblwiXG4gICAgbW9kZT1cImluLW91dFwiXG4gICAgYXBwZWFyXG4gICAgOmFwcGVhci1hY3RpdmUtY2xhc3M9XCJlbnRlckNsYXNzXCJcbiAgICA6ZW50ZXItYWN0aXZlLWNsYXNzPVwiZW50ZXJDbGFzc1wiXG4gICAgOmxlYXZlLWFjdGl2ZS1jbGFzcz1cImxlYXZlQ2xhc3NcIlxuICAgIEBhZnRlci1sZWF2ZT1cImFmdGVyTGVhdmVcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQgaXMtZnVsbHdpZHRoXCI+XG4gICAgICA8aGVhZGVyIGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWhlYWRlci10aXRsZVwiPnt7IHRpdGxlIH19PC9wPlxuICAgICAgICA8YSBjbGFzcz1cImNhcmQtaGVhZGVyLWljb25cIiB2LWlmPVwiISF0aGlzLmljb25cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFcIiA6Y2xhc3M9XCJbYGZhLSR7aWNvbn1gXVwiPjwvaT5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPnt7IGNvbnRlbnQgfX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzcz1cImNhcmQtZm9vdGVyXCIgdi1pZj1cIiEhdGhpcy4kc2xvdHMuZm9vdGVyXCI+XG4gICAgICAgIDxzbG90IG5hbWU9XCJmb290ZXJcIj48L3Nsb3Q+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgPC90cmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogU3RyaW5nXG4gICAgfSxcbiAgICBpY29uOiBTdHJpbmcsXG4gICAgY29udGVudDogU3RyaW5nLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdmYWRlJ1xuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgYWZ0ZXJMZWF2ZSAoKSB7XG4gICAgICB0aGlzLiRkZXN0cm95KClcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBlbnRlckNsYXNzICgpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLnRyYW5zaXRpb259SW5gXG4gICAgfSxcblxuICAgIGxlYXZlQ2xhc3MgKCkge1xuICAgICAgcmV0dXJuIGAke3RoaXMudHJhbnNpdGlvbn1PdXRgXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQmFzZUNhcmQudnVlPzM2ZmM3YmJiIiwiPHNjcmlwdD5cbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuXG5jb25zdCBDYXJkRm9vdGVySXRlbSA9IFZ1ZS5jb21wb25lbnQoJ2NhcmQtZm9vdGVyLWl0ZW0nLCB7XG4gIHByb3BzOiB7XG4gICAgZWxlbWVudDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2EnLFxuICAgICAgdmFsaWRhdG9yOiB2YWx1ZSA9PiBbJ2EnLCAnbGluaycsICdkaXYnXS5pbmNsdWRlcyh2YWx1ZSlcbiAgICB9LFxuICAgIGhyZWY6IFN0cmluZyxcbiAgICB0bzogT2JqZWN0XG4gIH0sXG5cbiAgcmVuZGVyIChjcmVhdGVFbGVtZW50KSB7XG4gICAgY29uc3QgeyBlbGVtZW50LCBocmVmLCB0byB9ID0gdGhpc1xuICAgIGNvbnN0IGRhdGFPYmogPSB7ICdjbGFzcyc6ICdjYXJkLWZvb3Rlci1pdGVtJyB9XG5cbiAgICBpZiAoZWxlbWVudCA9PT0gJ2EnICYmIGhyZWYpIHtcbiAgICAgIGRhdGFPYmouYXR0cnMgPSB7IGhyZWY6IGhyZWYgfVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gJ2xpbmsnICYmIHRvKSB7XG4gICAgICBkYXRhT2JqLmF0dHJzID0geyB0bzogdG8gfVxuICAgIH1cblxuICAgIGlmICh0aGlzLiRzbG90cy5kZWZhdWx0KSB7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChlbGVtZW50ID09PSAnbGluaycgPyAncm91dGVyLWxpbmsnIDogZWxlbWVudCwgZGF0YU9iaiwgdGhpcy4kc2xvdHMuZGVmYXVsdClcbiAgICB9XG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IENhcmRGb290ZXJJdGVtXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDYXJkRm9vdGVySXRlbS52dWU/MzgyYTFjNjEiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBpcy1tb2JpbGVcIj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtaGFsZi1tb2JpbGUgaXMtb25lLXRoaXJkLXRhYmxldCBpcy1vbmUtdGhpcmQtZGVza3RvcFwiIHYtZm9yPVwiaXRlbSBpbiBpdGVtc1wiIHYtaWY9XCJpdGVtLm5hbWVcIj5cbiAgICAgIDxiYXNlLWNhcmQgXG4gICAgICAgIDp0aXRsZT1cIml0ZW0ubmFtZVwiIFxuICAgICAgICA6Y29udGVudD1cImdldERlc2NyaXB0aW9uKGl0ZW0pXCI+XG4gICAgICAgIDxjYXJkLWZvb3Rlci1pdGVtIHNsb3Q9XCJmb290ZXJcIiA6aHJlZj1cIml0ZW0ubWV0YSAmJiBpdGVtLm1ldGEucmVwb3NpdG9yeVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgPGkgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJmYSBmYS1naXRodWJcIj48L2k+XG4gICAgICAgICAgPC9zcGFuPiZuYnNwOyZuYnNwO1xuICAgICAgICAgIFJlcG9zaXRvcnlcbiAgICAgICAgPC9jYXJkLWZvb3Rlci1pdGVtPlxuICAgICAgICA8Y2FyZC1mb290ZXItaXRlbSBzbG90PVwiZm9vdGVyXCIgZWxlbWVudD0nbGluaycgOnRvPVwie25hbWU6IGl0ZW0ubmFtZX1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgIDxpIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiZmEgZmEtbGlua1wiPjwvaT5cbiAgICAgICAgICA8L3NwYW4+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgRGVtb1xuICAgICAgICA8L2NhcmQtZm9vdGVyLWl0ZW0+XG4gICAgICA8L2Jhc2UtY2FyZD5cbiAgICA8L2Rpdj5cbiAgICBcbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgeyBCYXNlQ2FyZCwgQ2FyZEZvb3Rlckl0ZW0gfSBmcm9tICd2dWUtYnVsbWEtY2FyZCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgQmFzZUNhcmQsXG4gICAgQ2FyZEZvb3Rlckl0ZW1cbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgcGFyZW50OiAnY29tcG9uZW50ZW50cnknXG4gICAgfSksXG5cbiAgICBwYXJlbnRQYXRoICgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcmVudCA/IHRoaXMucGFyZW50LnBhdGggOiAnJ1xuICAgIH0sXG5cbiAgICBpdGVtcyAoKSB7XG4gICAgICByZXR1cm4gKHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQuY2hpbGRyZW4gOiBbXSkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wYXRoKVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2V0QWN0aW9ucyAoaXRlbSkge1xuICAgICAgcmV0dXJuIFt7XG4gICAgICAgIHRleHQ6ICdSZXBvc2l0b3J5JyxcbiAgICAgICAgaWNvbjogJ2dpdGh1YicsXG4gICAgICAgIGhyZWY6IGl0ZW0ubWV0YSAmJiBpdGVtLm1ldGEucmVwb3NpdG9yeVxuICAgICAgfSwge1xuICAgICAgICB0ZXh0OiAnRGVtbycsXG4gICAgICAgIGljb246ICdsaW5rJyxcbiAgICAgICAgbmFtZTogaXRlbS5uYW1lXG4gICAgICB9XVxuICAgIH0sXG5cbiAgICBnZXREZXNjcmlwdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0ubWV0YSAmJiBpdGVtLm1ldGEuZGVzY3JpcHRpb25cbiAgICB9XG4gIH1cblxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gRGVmYXVsdC52dWU/MGVhM2U3ZDkiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQmFzZUNhcmQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTY0MzIyNTA4XFxcIn0hLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQmFzZUNhcmQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL25vZGVfbW9kdWxlcy92dWUtYnVsbWEtY2FyZC9zcmMvQmFzZUNhcmQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQmFzZUNhcmQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTY0MzIyNTA4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjQzMjI1MDhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtYnVsbWEtY2FyZC9zcmMvQmFzZUNhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSA2ODBcbi8vIG1vZHVsZSBjaHVua3MgPSAyNiIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DYXJkRm9vdGVySXRlbS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIG51bGwsXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2tpbW5oL0NvZGVzL1dlYlNob3AvYWRtaW4tdGVtcGxhdGUvbGFyYXZlbC12dWUtYWRtaW4vbm9kZV9tb2R1bGVzL3Z1ZS1idWxtYS1jYXJkL3NyYy9DYXJkRm9vdGVySXRlbS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTcxODI0YzQ1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzE4MjRjNDVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtYnVsbWEtY2FyZC9zcmMvQ2FyZEZvb3Rlckl0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSA2ODFcbi8vIG1vZHVsZSBjaHVua3MgPSAyNiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbHVtbnMgaXMtbXVsdGlsaW5lIGlzLW1vYmlsZVwiXG4gIH0sIF92bS5fbCgoX3ZtLml0ZW1zKSwgZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiAoaXRlbS5uYW1lKSA/IF9jKCdkaXYnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtaGFsZi1tb2JpbGUgaXMtb25lLXRoaXJkLXRhYmxldCBpcy1vbmUtdGhpcmQtZGVza3RvcFwiXG4gICAgfSwgW19jKCdiYXNlLWNhcmQnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInRpdGxlXCI6IGl0ZW0ubmFtZSxcbiAgICAgICAgXCJjb250ZW50XCI6IF92bS5nZXREZXNjcmlwdGlvbihpdGVtKVxuICAgICAgfVxuICAgIH0sIFtfYygnY2FyZC1mb290ZXItaXRlbScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiaHJlZlwiOiBpdGVtLm1ldGEgJiYgaXRlbS5tZXRhLnJlcG9zaXRvcnlcbiAgICAgIH0sXG4gICAgICBzbG90OiBcImZvb3RlclwiXG4gICAgfSwgW19jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiXG4gICAgfSwgW19jKCdpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZ2l0aHViXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgICB9XG4gICAgfSldKSwgX3ZtLl92KFwiwqDCoFxcbiAgICAgICAgUmVwb3NpdG9yeVxcbiAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnY2FyZC1mb290ZXItaXRlbScsIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiZWxlbWVudFwiOiBcImxpbmtcIixcbiAgICAgICAgXCJ0b1wiOiB7XG4gICAgICAgICAgbmFtZTogaXRlbS5uYW1lXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzbG90OiBcImZvb3RlclwiXG4gICAgfSwgW19jKCdzcGFuJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiXG4gICAgfSwgW19jKCdpJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtbGlua1wiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICAgICAgfVxuICAgIH0pXSksIF92bS5fdihcIsKgwqBcXG4gICAgICAgIERlbW9cXG4gICAgICBcIildKV0sIDEpXSwgMSkgOiBfdm0uX2UoKVxuICB9KSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMWMxNmJjNThcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xYzE2YmM1OFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL0RlZmF1bHQudnVlXG4vLyBtb2R1bGUgaWQgPSA3MTlcbi8vIG1vZHVsZSBjaHVua3MgPSAyNiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndHJhbnNpdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IF92bS50cmFuc2l0aW9uLFxuICAgICAgXCJtb2RlXCI6IFwiaW4tb3V0XCIsXG4gICAgICBcImFwcGVhclwiOiBcIlwiLFxuICAgICAgXCJhcHBlYXItYWN0aXZlLWNsYXNzXCI6IF92bS5lbnRlckNsYXNzLFxuICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogX3ZtLmVudGVyQ2xhc3MsXG4gICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBfdm0ubGVhdmVDbGFzc1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiYWZ0ZXItbGVhdmVcIjogX3ZtLmFmdGVyTGVhdmVcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQgaXMtZnVsbHdpZHRoXCJcbiAgfSwgW19jKCdoZWFkZXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIlxuICB9LCBbX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXItdGl0bGVcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCAoISF0aGlzLmljb24pID8gX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXItaWNvblwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpY29uXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhXCIsXG4gICAgY2xhc3M6IFsoXCJmYS1cIiArIF92bS5pY29uKV1cbiAgfSldKV0pIDogX3ZtLl9lKCldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50XCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmNvbnRlbnQpKV0pXSksIF92bS5fdihcIiBcIiksICghIXRoaXMuJHNsb3RzLmZvb3RlcikgPyBfYygnZm9vdGVyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtZm9vdGVyXCJcbiAgfSwgW192bS5fdChcImZvb3RlclwiKV0sIDIpIDogX3ZtLl9lKCldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTY0MzIyNTA4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNjQzMjI1MDhcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vdnVlLWJ1bG1hLWNhcmQvc3JjL0Jhc2VDYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMjYiXSwic291cmNlUm9vdCI6IiJ9
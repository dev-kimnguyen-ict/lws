webpackJsonp([7],{

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(782)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(597),
  /* template */
  __webpack_require__(729),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/components/Tabs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Tabs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32d65377", Component.options)
  } else {
    hotAPI.reload("data-v-32d65377", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(567),
  /* template */
  __webpack_require__(726),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-tabs/src/TabList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TabList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-307ee00a", Component.options)
  } else {
    hotAPI.reload("data-v-307ee00a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabPane = exports.TabList = exports.Tabs = undefined;

var _Tabs = __webpack_require__(701);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TabList = __webpack_require__(537);

var _TabList2 = _interopRequireDefault(_TabList);

var _TabPane = __webpack_require__(700);

var _TabPane2 = _interopRequireDefault(_TabPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Tabs = _Tabs2.default;
exports.TabList = _TabList2.default;
exports.TabPane = _TabPane2.default;

/***/ }),

/***/ 567:
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
    alignment: {
      type: String,
      default: ''
    }
  },

  computed: {
    classObject: function classObject() {
      var alignment = this.alignment;

      return _defineProperty({
        'tab-list': true,
        'is-flex': true
      }, 'is-' + alignment, alignment);
    }
  }
};

/***/ }),

/***/ 568:
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

var TS = {
  'fade': {
    enterClass: 'fadeIn',
    leaveClass: 'fadeOut'
  },
  'fade-horizontal-rtl': {
    enterClass: 'fadeInRight',
    leaveClass: 'fadeOutLeft'
  },
  'fade-horizontal-ltr': {
    enterClass: 'fadeInLeft',
    leaveClass: 'fadeOutRight'
  },
  'slide-horizontal-rtl': {
    enterClass: 'slideInRight',
    leaveClass: 'slideOutLeft'
  },
  'slide-horizontal-ltr': {
    enterClass: 'slideInLeft',
    leaveClass: 'slideOutRight'
  },
  'fade-vertical-dtu': {
    enterClass: 'fadeInUp',
    leaveClass: 'fadeOutUp'
  },
  'fade-vertical-utd': {
    enterClass: 'fadeInDown',
    leaveClass: 'fadeOutDown'
  },
  'slide-vertical-dtu': {
    enterClass: 'slideInUp',
    leaveClass: 'slideOutUp'
  },
  'slide-vertical-utd': {
    enterClass: 'slideInDown',
    leaveClass: 'slideOutDown'
  }
};

exports.default = {
  props: {
    icon: String,
    selected: Boolean,
    disabled: Boolean,
    label: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      default: 'out-in'
    }
  },

  data: function data() {
    return {
      realSelected: this.selected,
      transition: TS['fade']
    };
  },
  created: function created() {
    this.$parent.tabPanes.push(this);
  },
  beforeDestroy: function beforeDestroy() {
    this.$parent.tabPanes.splice(this.index, 1);
  },


  computed: {
    classObject: function classObject() {
      var realSelected = this.realSelected;

      return {
        'tab-pane': true,
        'animated': true,
        'is-active': realSelected,
        'is-deactive': !realSelected
      };
    },
    layout: function layout() {
      return this.$parent.layout;
    },
    direction: function direction() {
      if (this.layout === 'top' || this.layout === 'bottom') {
        return 'horizontal';
      } else if (this.layout === 'left' || this.layout === 'right') {
        return 'vertical';
      }
      return '';
    },
    animation: function animation() {
      return this.$parent.animation;
    },
    onlyFade: function onlyFade() {
      return this.$parent.onlyFade;
    },
    gte: function gte() {
      if (this.direction === 'vertical') {
        return 'utd';
      } else if (this.direction === 'horizontal') {
        return 'ltr';
      }
      return '';
    },
    lt: function lt() {
      if (this.direction === 'vertical') {
        return 'dtu';
      } else if (this.direction === 'horizontal') {
        return 'rtl';
      }
      return '';
    },
    hidden: function hidden() {
      return this.realSelected ? 'false' : 'true';
    },
    index: function index() {
      return this.$parent.tabPanes.indexOf(this);
    }
  },

  watch: {
    '$parent.realSelectedIndex': function $parentRealSelectedIndex(index, prevIndex) {
      if (!this.onlyFade) {
        var transition = void 0;
        if (prevIndex === -1 || prevIndex > index) {
          transition = '' + this.animation + (this.layout ? '-' + this.direction : '') + (this.gte ? '-' + this.gte : '');
        } else {
          transition = '' + this.animation + (this.layout ? '-' + this.direction : '') + (this.lt ? '-' + this.lt : '');
        }
        this.transition = TS[transition] || TS['fade'];
      }
      this.realSelected = this.index === index;
    }
  }
};

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TabList = __webpack_require__(537);

var _TabList2 = _interopRequireDefault(_TabList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    TabList: _TabList2.default
  },

  props: {
    isFullwidth: Boolean,
    layout: {
      type: String,
      default: 'top',
      validator: function validator(val) {
        return ['top', 'bottom', 'left', 'right'].indexOf(val) > -1;
      }
    },
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    alignment: {
      type: String,
      default: ''
    },
    selectedIndex: {
      type: Number,
      default: -1
    },
    animation: {
      type: String,
      default: 'fade'
    },
    onlyFade: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      realSelectedIndex: this.selectedIndex,
      tabPanes: []
    };
  },
  mounted: function mounted() {
    this.update();
    if (this.realSelectedIndex === -1) {
      this.select(0);
    }
  },


  methods: {
    update: function update() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.tabPanes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tabPane = _step.value;

          if (!tabPane.disabled && tabPane.realSelected) {
            this.select(tabPane.index);
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    isActived: function isActived(index) {
      return index === this.realSelectedIndex;
    },
    select: function select(index) {
      this.$emit('tab-selected', index);
      this.realSelectedIndex = index;
    }
  },
  watch: {
    selectedIndex: function selectedIndex(newIndex) {
      this.select(newIndex);
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

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueBulmaTabs = __webpack_require__(546);

exports.default = {
  components: {
    Tabs: _vueBulmaTabs.Tabs,
    TabPane: _vueBulmaTabs.TabPane
  },

  data: function data() {
    return {
      items: [{
        icon: 'image',
        label: 'Pictures',
        desc: 'Simple responsive horizontal navigation tabs, with different styles'
      }, {
        icon: 'music',
        label: 'Music',
        desc: 'Music Tab'
      }, {
        icon: 'film',
        label: 'Videos',
        desc: 'Video Tab'
      }, {
        icon: 'file-text-o',
        label: 'Documents',
        desc: 'Document Tab'
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.items.splice(0, 1);
    setInterval(function () {
      _this.randomTabs();
    }, 3000);
  },


  methods: {
    randomTabs: function randomTabs() {
      this.items.unshift(this.items.pop());
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.tabs {\n  margin: 20px;\n}\n.tabs .tab-content {\n    min-height: 50px;\n}\n", ""]);

// exports


/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.vue-bulma-tabs {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.vue-bulma-tabs.is-layout-top {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n.vue-bulma-tabs.is-layout-bottom {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse;\n}\n.vue-bulma-tabs.is-layout-left {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n.vue-bulma-tabs.is-layout-left .tab-list {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start;\n      border-bottom: none;\n      border-right: 1px solid #b5b5b5;\n}\n.vue-bulma-tabs.is-layout-left li {\n      width: 100%;\n}\n.vue-bulma-tabs.is-layout-left li a {\n        border-bottom: none;\n        border-right: 1px solid #b5b5b5;\n        margin-bottom: 0;\n        margin-right: -1px;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end;\n}\n.vue-bulma-tabs.is-layout-left li a:hover {\n          border-right-color: #363636;\n}\n.vue-bulma-tabs.is-layout-left li.is-active a {\n        border-right-color: #00d1b2;\n}\n.vue-bulma-tabs.is-layout-left .tab-content {\n      margin: 30px 10px;\n}\n.vue-bulma-tabs.is-layout-right {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse;\n    overflow-x: hidden;\n    overflow-y: auto;\n}\n.vue-bulma-tabs.is-layout-right .tab-list {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      border-bottom: none;\n      border-left: 1px solid #b5b5b5;\n}\n.vue-bulma-tabs.is-layout-right .tab-list li {\n        width: 100%;\n}\n.vue-bulma-tabs.is-layout-right .tab-list li a {\n          border-bottom: none;\n          border-left: 1px solid #b5b5b5;\n          margin-bottom: 0;\n          margin-left: -1px;\n          -webkit-box-pack: start;\n              -ms-flex-pack: start;\n                  justify-content: flex-start;\n}\n.vue-bulma-tabs.is-layout-right .tab-list li a:hover {\n            border-left-color: #363636;\n}\n.vue-bulma-tabs.is-layout-right .tab-list li.is-active a {\n          border-left-color: #00d1b2;\n}\n.vue-bulma-tabs.is-layout-right .tab-content {\n      margin: 30px 10px;\n}\n.vue-bulma-tabs .tab-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    overflow: hidden;\n    position: relative;\n    margin: 10px 30px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1;\n            flex: 1 1;\n}\n.vue-bulma-tabs .tab-pane {\n    width: 100%;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1;\n            flex: 1 1;\n}\n.vue-bulma-tabs .tab-pane.is-active {\n      -webkit-transform: translateZ(0);\n              transform: translateZ(0);\n}\n.vue-bulma-tabs .tab-pane[class*=\"Out\"] {\n      overflow: hidden;\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      -webkit-transform: translateX(0);\n              transform: translateX(0);\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n}\n", ""]);

// exports


/***/ }),

/***/ 700:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(568),
  /* template */
  __webpack_require__(720),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-tabs/src/TabPane.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TabPane.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1f761dd4", Component.options)
  } else {
    hotAPI.reload("data-v-1f761dd4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(797)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(569),
  /* template */
  __webpack_require__(754),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-tabs/src/Tabs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Tabs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-97963352", Component.options)
  } else {
    hotAPI.reload("data-v-97963352", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": _vm.animation,
      "mode": "out-in",
      "appear": "",
      "appear-active-class": _vm.transition.enterClass,
      "enter-active-class": _vm.transition.enterClass,
      "leave-active-class": _vm.transition.leaveClass
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.realSelected),
      expression: "realSelected"
    }],
    class: _vm.classObject,
    attrs: {
      "role": "tabpanel",
      "aria-labelledby": _vm.label,
      "aria-hidden": _vm.hidden
    }
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1f761dd4", module.exports)
  }
}

/***/ }),

/***/ 726:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    class: _vm.classObject,
    attrs: {
      "role": "tablist"
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-307ee00a", module.exports)
  }
}

/***/ }),

/***/ 729:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent is-6"
  }, [_c('div', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Alignment")]), _vm._v(" "), _c('div', {
    staticClass: "block is-flex"
  }, [_c('tabs', {
    attrs: {
      "animation": "slide",
      "only-fade": false
    }
  }, [_c('tab-pane', {
    attrs: {
      "label": "Pictures"
    }
  }, [_vm._v("Pictures Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Music"
    }
  }, [_vm._v("Music Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Videos",
      "selected": ""
    }
  }, [_vm._v("Video Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Documents",
      "disabled": ""
    }
  }, [_vm._v("Document Tab")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "block is-flex"
  }, [_c('tabs', {
    attrs: {
      "alignment": "centered",
      "only-fade": false
    }
  }, [_c('tab-pane', {
    attrs: {
      "label": "Pictures"
    }
  }, [_vm._v("Pictures Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Music"
    }
  }, [_vm._v("Music Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Videos",
      "selected": ""
    }
  }, [_vm._v("Video Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Documents",
      "disabled": ""
    }
  }, [_vm._v("Document Tab")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "block is-flex"
  }, [_c('tabs', {
    attrs: {
      "alignment": "right",
      "only-fade": false
    }
  }, [_c('tab-pane', {
    attrs: {
      "label": "Pictures"
    }
  }, [_vm._v("Pictures Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Music"
    }
  }, [_vm._v("Music Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Videos"
    }
  }, [_vm._v("Video Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Documents"
    }
  }, [_vm._v("Document Tab")])], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-6"
  }, [_c('div', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Sizes")]), _vm._v(" "), _c('div', {
    staticClass: "block is-flex"
  }, [_c('tabs', {
    attrs: {
      "size": "small"
    }
  }, [_c('tab-pane', {
    attrs: {
      "label": "Pictures"
    }
  }, [_vm._v("Pictures Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Music"
    }
  }, [_vm._v("Music Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Videos"
    }
  }, [_vm._v("Video Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Documents"
    }
  }, [_vm._v("Document Tab")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "block is-flex"
  }, [_c('tabs', {
    attrs: {
      "size": "medium"
    }
  }, [_c('tab-pane', {
    attrs: {
      "label": "Pictures"
    }
  }, [_vm._v("Pictures Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Music"
    }
  }, [_vm._v("Music Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Videos"
    }
  }, [_vm._v("Video Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Documents"
    }
  }, [_vm._v("Document Tab")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "block is-flex"
  }, [_c('tabs', {
    attrs: {
      "size": "large"
    }
  }, [_c('tab-pane', {
    attrs: {
      "label": "Pictures"
    }
  }, [_vm._v("Pictures Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Music"
    }
  }, [_vm._v("Music Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Videos"
    }
  }, [_vm._v("Video Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Documents"
    }
  }, [_vm._v("Document Tab")])], 1)], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('div', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Styles")]), _vm._v(" "), _c('tabs', {
    attrs: {
      "type": "boxed"
    }
  }, [_c('tab-pane', {
    attrs: {
      "label": "Pictures"
    }
  }, [_vm._v("Pictures Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Music"
    }
  }, [_vm._v("Music Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Videos"
    }
  }, [_vm._v("Video Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Documents"
    }
  }, [_vm._v("Document Tab")])], 1), _vm._v(" "), _c('tabs', {
    attrs: {
      "type": "toggle"
    }
  }, [_c('tab-pane', {
    attrs: {
      "label": "Pictures"
    }
  }, [_vm._v("Pictures Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Music"
    }
  }, [_vm._v("Music Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Videos"
    }
  }, [_vm._v("Video Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Documents"
    }
  }, [_vm._v("Document Tab")])], 1), _vm._v(" "), _c('tabs', {
    attrs: {
      "type": "boxed",
      "is-fullwidth": true,
      "alignment": "centered",
      "size": "large"
    }
  }, [_c('tab-pane', {
    attrs: {
      "label": "Pictures",
      "icon": "fa fa-image"
    }
  }, [_vm._v("Pictures Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Music",
      "icon": "fa fa-music"
    }
  }, [_vm._v("Music Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Videos",
      "icon": "fa fa-film"
    }
  }, [_vm._v("Video Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Documents",
      "icon": "fa fa-file-text-o"
    }
  }, [_vm._v("Document Tab")])], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('div', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Layouts")]), _vm._v(" "), _c('tabs', {
    attrs: {
      "layout": "bottom",
      "only-fade": false
    }
  }, [_c('tab-pane', {
    attrs: {
      "label": "Pictures"
    }
  }, [_c('p', [_vm._v("Simple responsive horizontal navigation tabs, with different styles")]), _vm._v(" "), _c('p', [_vm._v("Simple responsive horizontal navigation tabs, with different styles")])]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Music"
    }
  }, [_vm._v("Music Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Videos"
    }
  }, [_vm._v("Video Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Documents"
    }
  }, [_vm._v("Document Tab")])], 1), _vm._v(" "), _c('tabs', {
    attrs: {
      "layout": "left",
      "only-fade": false
    }
  }, [_c('tab-pane', {
    attrs: {
      "label": "Pictures"
    }
  }, [_c('p', [_vm._v("Simple responsive horizontal navigation tabs, with different styles")]), _vm._v(" "), _c('p', [_vm._v("Simple responsive horizontal navigation tabs, with different styles")])]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Music"
    }
  }, [_vm._v("Music Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Videos"
    }
  }, [_vm._v("Video Tab")]), _vm._v(" "), _c('tab-pane', {
    attrs: {
      "label": "Documents"
    }
  }, [_vm._v("Document Tab")])], 1), _vm._v(" "), _c('tabs', {
    attrs: {
      "layout": "right",
      "animation": "fade",
      "only-fade": false
    }
  }, _vm._l((_vm.items), function(item) {
    return _c('tab-pane', {
      key: item.label,
      attrs: {
        "label": item.label,
        "icon": 'fa fa-' + item.icon
      }
    }, [_vm._v("\n            " + _vm._s(item.desc) + "\n          ")])
  }))], 1)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-32d65377", module.exports)
  }
}

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ( _obj = {
      'vue-bulma-tabs': true
    }, _obj[("is-layout-" + _vm.layout)] = true, _obj )
  }, [_c('div', {
    class: ( _obj$1 = {
      tabs: true, 'is-fullwidth': _vm.isFullwidth
    }, _obj$1[("is-" + _vm.size)] = _vm.size, _obj$1[("is-" + _vm.alignment)] = _vm.alignment, _obj$1[("is-" + _vm.type)] = _vm.type, _obj$1 )
  }, [_vm._t("left-tab-list"), _vm._v(" "), _c('tab-list', _vm._l((_vm.tabPanes), function(tab, index) {
    return _c('li', {
      class: {
        'is-active': _vm.isActived(index), 'is-disabled': tab.disabled, 'is-flex': true
      },
      attrs: {
        "role": "tab",
        "aria-selected": _vm.isActived(index) ? 'true' : 'false',
        "aria-expanded": _vm.isActived(index) ? 'true' : 'false',
        "aria-disabled": tab.disabled ? 'true' : 'false',
        "selected": _vm.isActived(index),
        "disabled": tab.disabled
      },
      on: {
        "click": function($event) {
          _vm.select(index)
        }
      }
    }, [_c('a', {
      staticClass: "is-unselectable"
    }, [(tab.icon) ? _c('span', {
      class: ['icon', {
        'is-small': _vm.size !== 'large'
      }]
    }, [_c('i', {
      class: tab.icon
    })]) : _vm._e(), _vm._v(" "), _c('span', [_vm._v(_vm._s(tab.label))])])])
  })), _vm._v(" "), _vm._t("right-tab-list")], 2), _vm._v(" "), _c('div', {
    staticClass: "tab-content is-flex"
  }, [_vm._t("default")], 2)])
  var _obj;
  var _obj$1;
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-97963352", module.exports)
  }
}

/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(632);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("442e5e98", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-32d65377\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tabs.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-32d65377\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tabs.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(647);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("265196c9", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-97963352\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Tabs.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-97963352\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Tabs.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvVGFicy52dWUiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtdGFicy9zcmMvVGFiTGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtdGFicy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL1RhYkxpc3QudnVlIiwid2VicGFjazovLy9UYWJQYW5lLnZ1ZSIsIndlYnBhY2s6Ly8vVGFicy52dWUiLCJ3ZWJwYWNrOi8vL1RhYnMudnVlPzExZWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL1RhYnMudnVlPzA1MDUiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtdGFicy9zcmMvVGFicy52dWU/NDlmZCIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS10YWJzL3NyYy9UYWJQYW5lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS10YWJzL3NyYy9UYWJzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS10YWJzL3NyYy9UYWJQYW5lLnZ1ZT85NzdkIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLXRhYnMvc3JjL1RhYkxpc3QudnVlPzIyYTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL1RhYnMudnVlP2I0ODYiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtdGFicy9zcmMvVGFicy52dWU/MjA5OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvVGFicy52dWU/OTUxMyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS10YWJzL3NyYy9UYWJzLnZ1ZT8xMjAzIl0sIm5hbWVzIjpbIlRhYnMiLCJUYWJMaXN0IiwiVGFiUGFuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFDQSx1QkFBNks7O0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUMvQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDZEEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzdTQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2hEQTs7QUFFQTtBQUNBLHFDQUFrTjtBQUNsTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNElBQTRJLHFFQUFxRTtBQUNqTixxSkFBcUoscUVBQXFFO0FBQzFOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBLHFDQUFzSztBQUN0SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQWdHLHFFQUFxRTtBQUNySyx5R0FBeUcscUVBQXFFO0FBQzlLO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJqcy83LjJhZTliZWRiNWZlNzRmYjNhNDhhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zMmQ2NTM3N1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJzLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9UYWJzLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzJkNjUzNzdcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVGFicy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2tpbW5oL0NvZGVzL1dlYlNob3AvYWRtaW4tdGVtcGxhdGUvbGFyYXZlbC12dWUtYWRtaW4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL1RhYnMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVGFicy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzJkNjUzNzdcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zMmQ2NTM3N1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvVGFicy52dWVcbi8vIG1vZHVsZSBpZCA9IDE0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVGFiTGlzdC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzA3ZWUwMGFcXFwifSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9UYWJMaXN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9ub2RlX21vZHVsZXMvdnVlLWJ1bG1hLXRhYnMvc3JjL1RhYkxpc3QudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVGFiTGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzA3ZWUwMGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zMDdlZTAwYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1idWxtYS10YWJzL3NyYy9UYWJMaXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsImltcG9ydCBUYWJzIGZyb20gJy4vVGFicydcclxuaW1wb3J0IFRhYkxpc3QgZnJvbSAnLi9UYWJMaXN0J1xyXG5pbXBvcnQgVGFiUGFuZSBmcm9tICcuL1RhYlBhbmUnXHJcblxyXG5leHBvcnQge1xyXG4gIFRhYnMsXHJcbiAgVGFiTGlzdCxcclxuICBUYWJQYW5lXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi92dWUtYnVsbWEtdGFicy9zcmMvaW5kZXguanMiLCI8dGVtcGxhdGU+XHJcbiAgPHVsIDpjbGFzcz1cImNsYXNzT2JqZWN0XCIgcm9sZT1cInRhYmxpc3RcIj5cclxuICAgIDxzbG90Pjwvc2xvdD5cclxuICA8L3VsPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiB7XHJcbiAgICBhbGlnbm1lbnQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBjbGFzc09iamVjdCAoKSB7XHJcbiAgICAgIGNvbnN0IHsgYWxpZ25tZW50IH0gPSB0aGlzXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgJ3RhYi1saXN0JzogdHJ1ZSxcclxuICAgICAgICAnaXMtZmxleCc6IHRydWUsXHJcbiAgICAgICAgW2Bpcy0ke2FsaWdubWVudH1gXTogYWxpZ25tZW50XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBUYWJMaXN0LnZ1ZT81MTIwM2Q4NSIsIjx0ZW1wbGF0ZT5cclxuICA8dHJhbnNpdGlvblxyXG4gICAgOm5hbWU9XCJhbmltYXRpb25cIlxyXG4gICAgbW9kZT1cIm91dC1pblwiXHJcbiAgICBhcHBlYXJcclxuICAgIDphcHBlYXItYWN0aXZlLWNsYXNzPVwidHJhbnNpdGlvbi5lbnRlckNsYXNzXCJcclxuICAgIDplbnRlci1hY3RpdmUtY2xhc3M9XCJ0cmFuc2l0aW9uLmVudGVyQ2xhc3NcIlxyXG4gICAgOmxlYXZlLWFjdGl2ZS1jbGFzcz1cInRyYW5zaXRpb24ubGVhdmVDbGFzc1wiXHJcbiAgPlxyXG4gICAgPGRpdlxyXG4gICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICB2LXNob3c9XCJyZWFsU2VsZWN0ZWRcIlxyXG4gICAgICA6Y2xhc3M9XCJjbGFzc09iamVjdFwiXHJcbiAgICAgIDphcmlhLWxhYmVsbGVkYnk9XCJsYWJlbFwiXHJcbiAgICAgIDphcmlhLWhpZGRlbj1cImhpZGRlblwiXHJcbiAgICA+XHJcbiAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgIDwvZGl2PlxyXG4gIDwvdHJhbnNpdGlvbj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmNvbnN0IFRTID0ge1xyXG4gICdmYWRlJzoge1xyXG4gICAgZW50ZXJDbGFzczogJ2ZhZGVJbicsXHJcbiAgICBsZWF2ZUNsYXNzOiAnZmFkZU91dCdcclxuICB9LFxyXG4gICdmYWRlLWhvcml6b250YWwtcnRsJzoge1xyXG4gICAgZW50ZXJDbGFzczogJ2ZhZGVJblJpZ2h0JyxcclxuICAgIGxlYXZlQ2xhc3M6ICdmYWRlT3V0TGVmdCdcclxuICB9LFxyXG4gICdmYWRlLWhvcml6b250YWwtbHRyJzoge1xyXG4gICAgZW50ZXJDbGFzczogJ2ZhZGVJbkxlZnQnLFxyXG4gICAgbGVhdmVDbGFzczogJ2ZhZGVPdXRSaWdodCdcclxuICB9LFxyXG4gICdzbGlkZS1ob3Jpem9udGFsLXJ0bCc6IHtcclxuICAgIGVudGVyQ2xhc3M6ICdzbGlkZUluUmlnaHQnLFxyXG4gICAgbGVhdmVDbGFzczogJ3NsaWRlT3V0TGVmdCdcclxuICB9LFxyXG4gICdzbGlkZS1ob3Jpem9udGFsLWx0cic6IHtcclxuICAgIGVudGVyQ2xhc3M6ICdzbGlkZUluTGVmdCcsXHJcbiAgICBsZWF2ZUNsYXNzOiAnc2xpZGVPdXRSaWdodCdcclxuICB9LFxyXG4gICdmYWRlLXZlcnRpY2FsLWR0dSc6IHtcclxuICAgIGVudGVyQ2xhc3M6ICdmYWRlSW5VcCcsXHJcbiAgICBsZWF2ZUNsYXNzOiAnZmFkZU91dFVwJ1xyXG4gIH0sXHJcbiAgJ2ZhZGUtdmVydGljYWwtdXRkJzoge1xyXG4gICAgZW50ZXJDbGFzczogJ2ZhZGVJbkRvd24nLFxyXG4gICAgbGVhdmVDbGFzczogJ2ZhZGVPdXREb3duJ1xyXG4gIH0sXHJcbiAgJ3NsaWRlLXZlcnRpY2FsLWR0dSc6IHtcclxuICAgIGVudGVyQ2xhc3M6ICdzbGlkZUluVXAnLFxyXG4gICAgbGVhdmVDbGFzczogJ3NsaWRlT3V0VXAnXHJcbiAgfSxcclxuICAnc2xpZGUtdmVydGljYWwtdXRkJzoge1xyXG4gICAgZW50ZXJDbGFzczogJ3NsaWRlSW5Eb3duJyxcclxuICAgIGxlYXZlQ2xhc3M6ICdzbGlkZU91dERvd24nXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIGljb246IFN0cmluZyxcclxuICAgIHNlbGVjdGVkOiBCb29sZWFuLFxyXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICBsYWJlbDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbW9kZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICdvdXQtaW4nXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgZGF0YSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWFsU2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsXHJcbiAgICAgIHRyYW5zaXRpb246IFRTWydmYWRlJ11cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjcmVhdGVkICgpIHtcclxuICAgIHRoaXMuJHBhcmVudC50YWJQYW5lcy5wdXNoKHRoaXMpXHJcbiAgfSxcclxuXHJcbiAgYmVmb3JlRGVzdHJveSAoKSB7XHJcbiAgICB0aGlzLiRwYXJlbnQudGFiUGFuZXMuc3BsaWNlKHRoaXMuaW5kZXgsIDEpXHJcbiAgfSxcclxuXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGNsYXNzT2JqZWN0ICgpIHtcclxuICAgICAgY29uc3QgeyByZWFsU2VsZWN0ZWQgfSA9IHRoaXNcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAndGFiLXBhbmUnOiB0cnVlLFxyXG4gICAgICAgICdhbmltYXRlZCc6IHRydWUsXHJcbiAgICAgICAgJ2lzLWFjdGl2ZSc6IHJlYWxTZWxlY3RlZCxcclxuICAgICAgICAnaXMtZGVhY3RpdmUnOiAhcmVhbFNlbGVjdGVkXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsYXlvdXQgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4kcGFyZW50LmxheW91dFxyXG4gICAgfSxcclxuICAgIGRpcmVjdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0aGlzLmxheW91dCA9PT0gJ3RvcCcgfHwgdGhpcy5sYXlvdXQgPT09ICdib3R0b20nKSB7XHJcbiAgICAgICAgcmV0dXJuICdob3Jpem9udGFsJ1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubGF5b3V0ID09PSAnbGVmdCcgfHwgdGhpcy5sYXlvdXQgPT09ICdyaWdodCcpIHtcclxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAnJ1xyXG4gICAgfSxcclxuICAgIGFuaW1hdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiRwYXJlbnQuYW5pbWF0aW9uXHJcbiAgICB9LFxyXG4gICAgb25seUZhZGUgKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4kcGFyZW50Lm9ubHlGYWRlXHJcbiAgICB9LFxyXG4gICAgZ3RlICgpIHtcclxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgcmV0dXJuICd1dGQnXHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgIHJldHVybiAnbHRyJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAnJ1xyXG4gICAgfSxcclxuICAgIGx0ICgpIHtcclxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgcmV0dXJuICdkdHUnXHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgIHJldHVybiAncnRsJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAnJ1xyXG4gICAgfSxcclxuICAgIGhpZGRlbiAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlYWxTZWxlY3RlZCA/ICdmYWxzZScgOiAndHJ1ZSdcclxuICAgIH0sXHJcbiAgICBpbmRleCAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiRwYXJlbnQudGFiUGFuZXMuaW5kZXhPZih0aGlzKVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHdhdGNoOiB7XHJcbiAgICAnJHBhcmVudC5yZWFsU2VsZWN0ZWRJbmRleCcgKGluZGV4LCBwcmV2SW5kZXgpIHtcclxuICAgICAgaWYgKCF0aGlzLm9ubHlGYWRlKSB7XHJcbiAgICAgICAgbGV0IHRyYW5zaXRpb25cclxuICAgICAgICBpZiAocHJldkluZGV4ID09PSAtMSB8fCBwcmV2SW5kZXggPiBpbmRleCkge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbiA9IGAke3RoaXMuYW5pbWF0aW9ufSR7dGhpcy5sYXlvdXQgPyBgLSR7dGhpcy5kaXJlY3Rpb259YCA6ICcnfSR7dGhpcy5ndGUgPyBgLSR7dGhpcy5ndGV9YCA6ICcnfWBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdHJhbnNpdGlvbiA9IGAke3RoaXMuYW5pbWF0aW9ufSR7dGhpcy5sYXlvdXQgPyBgLSR7dGhpcy5kaXJlY3Rpb259YCA6ICcnfSR7dGhpcy5sdCA/IGAtJHt0aGlzLmx0fWAgOiAnJ31gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IFRTW3RyYW5zaXRpb25dIHx8IFRTWydmYWRlJ11cclxuICAgICAgfVxyXG4gICAgICB0aGlzLnJlYWxTZWxlY3RlZCA9IHRoaXMuaW5kZXggPT09IGluZGV4XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVGFiUGFuZS52dWU/OGVmNmMxNjYiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiA6Y2xhc3M9XCJ7ICd2dWUtYnVsbWEtdGFicyc6IHRydWUsIFtgaXMtbGF5b3V0LSR7bGF5b3V0fWBdOiB0cnVlIH1cIj5cclxuICAgIDxkaXYgIDpjbGFzcz1cInsgdGFiczogdHJ1ZSwgW2Bpcy0ke3NpemV9YF06IHNpemUsIFtgaXMtJHthbGlnbm1lbnR9YF06IGFsaWdubWVudCwgW2Bpcy0ke3R5cGV9YF06IHR5cGUsICdpcy1mdWxsd2lkdGgnOiBpc0Z1bGx3aWR0aCB9XCI+XHJcbiAgICAgIDxzbG90IG5hbWU9XCJsZWZ0LXRhYi1saXN0XCI+PC9zbG90PlxyXG4gICAgICA8dGFiLWxpc3Q+XHJcbiAgICAgICAgPGxpIHYtZm9yPVwiKHRhYiwgaW5kZXgpIGluIHRhYlBhbmVzXCJcclxuICAgICAgICAgIHJvbGU9XCJ0YWJcIlxyXG4gICAgICAgICAgOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogaXNBY3RpdmVkKGluZGV4KSwgJ2lzLWRpc2FibGVkJzogdGFiLmRpc2FibGVkLCAnaXMtZmxleCc6IHRydWUgfVwiXHJcbiAgICAgICAgICA6YXJpYS1zZWxlY3RlZD1cImlzQWN0aXZlZChpbmRleCkgPyAndHJ1ZScgOiAnZmFsc2UnXCJcclxuICAgICAgICAgIDphcmlhLWV4cGFuZGVkPVwiaXNBY3RpdmVkKGluZGV4KSA/ICd0cnVlJyA6ICdmYWxzZSdcIlxyXG4gICAgICAgICAgOmFyaWEtZGlzYWJsZWQ9XCJ0YWIuZGlzYWJsZWQgPyAndHJ1ZScgOiAnZmFsc2UnXCJcclxuICAgICAgICAgIDpzZWxlY3RlZD1cImlzQWN0aXZlZChpbmRleClcIlxyXG4gICAgICAgICAgOmRpc2FibGVkPVwidGFiLmRpc2FibGVkXCJcclxuICAgICAgICAgIEBjbGljaz1cInNlbGVjdChpbmRleClcIj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwiaXMtdW5zZWxlY3RhYmxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIDpjbGFzcz1cIlsnaWNvbicsIHsgJ2lzLXNtYWxsJzogc2l6ZSAhPT0gJ2xhcmdlJyB9XVwiIHYtaWY9XCJ0YWIuaWNvblwiPjxpIDpjbGFzcz1cInRhYi5pY29uXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e3sgdGFiLmxhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdGFiLWxpc3Q+XHJcbiAgICAgIDxzbG90IG5hbWU9XCJyaWdodC10YWItbGlzdFwiPjwvc2xvdD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50IGlzLWZsZXhcIj5cclxuICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgVGFiTGlzdCBmcm9tICcuL1RhYkxpc3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgVGFiTGlzdFxyXG4gIH0sXHJcblxyXG4gIHByb3BzOiB7XHJcbiAgICBpc0Z1bGx3aWR0aDogQm9vbGVhbixcclxuICAgIGxheW91dDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICd0b3AnLFxyXG4gICAgICB2YWxpZGF0b3IgKHZhbCkge1xyXG4gICAgICAgIHJldHVybiBbJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCddLmluZGV4T2YodmFsKSA+IC0xXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0eXBlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJydcclxuICAgIH0sXHJcbiAgICBzaXplOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJydcclxuICAgIH0sXHJcbiAgICBhbGlnbm1lbnQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICBkZWZhdWx0OiAnJ1xyXG4gICAgfSxcclxuICAgIHNlbGVjdGVkSW5kZXg6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiAtMVxyXG4gICAgfSxcclxuICAgIGFuaW1hdGlvbjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICdmYWRlJ1xyXG4gICAgfSxcclxuICAgIG9ubHlGYWRlOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBkYXRhICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlYWxTZWxlY3RlZEluZGV4OiB0aGlzLnNlbGVjdGVkSW5kZXgsXHJcbiAgICAgIHRhYlBhbmVzOiBbXVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG1vdW50ZWQgKCkge1xyXG4gICAgdGhpcy51cGRhdGUoKVxyXG4gICAgaWYgKHRoaXMucmVhbFNlbGVjdGVkSW5kZXggPT09IC0xKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0KDApXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgdXBkYXRlICgpIHtcclxuICAgICAgZm9yIChjb25zdCB0YWJQYW5lIG9mIHRoaXMudGFiUGFuZXMpIHtcclxuICAgICAgICBpZiAoIXRhYlBhbmUuZGlzYWJsZWQgJiYgdGFiUGFuZS5yZWFsU2VsZWN0ZWQpIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0KHRhYlBhbmUuaW5kZXgpXHJcbiAgICAgICAgICBicmVha1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpc0FjdGl2ZWQgKGluZGV4KSB7XHJcbiAgICAgIHJldHVybiBpbmRleCA9PT0gdGhpcy5yZWFsU2VsZWN0ZWRJbmRleFxyXG4gICAgfSxcclxuXHJcbiAgICBzZWxlY3QgKGluZGV4KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ3RhYi1zZWxlY3RlZCcsIGluZGV4KVxyXG4gICAgICB0aGlzLnJlYWxTZWxlY3RlZEluZGV4ID0gaW5kZXhcclxuICAgIH1cclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBzZWxlY3RlZEluZGV4IChuZXdJbmRleCkge1xyXG4gICAgICB0aGlzLnNlbGVjdChuZXdJbmRleClcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuQGltcG9ydCAnfmJ1bG1hL3Nhc3MvdXRpbGl0aWVzL3ZhcmlhYmxlcyc7XHJcblxyXG4udnVlLWJ1bG1hLXRhYnMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7XHJcblxyXG4gICYuaXMtbGF5b3V0LXRvcCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAmLmlzLWxheW91dC1ib3R0b20ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIH1cclxuICAmLmlzLWxheW91dC1sZWZ0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgIC50YWItbGlzdCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAvLyBtYXgtd2lkdGg6IGNhbGMoMTAwJSAvIDYpO1xyXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkZ3JleS1saWdodDtcclxuICAgIH1cclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkZ3JleS1saWdodDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTFweDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogJGdyZXktZGFya2VyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5pcy1hY3RpdmUge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkdHVycXVvaXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50YWItY29udGVudCB7XHJcbiAgICAgIG1hcmdpbjogMzBweCAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmLmlzLWxheW91dC1yaWdodCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgIC50YWItbGlzdCB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAvLyBtYXgtd2lkdGg6IGNhbGMoMTAwJSAvIDYpO1xyXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRncmV5LWxpZ2h0O1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICRncmV5LWxpZ2h0O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogJGdyZXktZGFya2VyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5pcy1hY3RpdmUge1xyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAkdHVycXVvaXNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50YWItY29udGVudCB7XHJcbiAgICAgIG1hcmdpbjogMzBweCAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRhYi1jb250ZW50IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAxMHB4IDMwcHg7XHJcbiAgICBmbGV4OiAxIDE7XHJcbiAgfVxyXG5cclxuICAudGFiLXBhbmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4OiAxIDE7XHJcblxyXG4gICAgJi5pcy1hY3RpdmUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICB9XHJcblxyXG4gICAgJltjbGFzcyo9XCJPdXRcIl0ge1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBUYWJzLnZ1ZT83ZjQ5Y2NmYyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1hbmNlc3RvclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50IGlzLTZcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94XCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5BbGlnbm1lbnQ8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9jayBpcy1mbGV4XCI+XG4gICAgICAgICAgICA8dGFicyBhbmltYXRpb249XCJzbGlkZVwiIDpvbmx5LWZhZGU9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICA8dGFiLXBhbmUgbGFiZWw9XCJQaWN0dXJlc1wiPlBpY3R1cmVzIFRhYjwvdGFiLXBhbmU+XG4gICAgICAgICAgICAgIDx0YWItcGFuZSBsYWJlbD1cIk11c2ljXCI+TXVzaWMgVGFiPC90YWItcGFuZT5cbiAgICAgICAgICAgICAgPHRhYi1wYW5lIGxhYmVsPVwiVmlkZW9zXCIgc2VsZWN0ZWQ+VmlkZW8gVGFiPC90YWItcGFuZT5cbiAgICAgICAgICAgICAgPHRhYi1wYW5lIGxhYmVsPVwiRG9jdW1lbnRzXCIgZGlzYWJsZWQ+RG9jdW1lbnQgVGFiPC90YWItcGFuZT5cbiAgICAgICAgICAgIDwvdGFicz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2sgaXMtZmxleFwiPlxuICAgICAgICAgICAgPHRhYnMgYWxpZ25tZW50PVwiY2VudGVyZWRcIiA6b25seS1mYWRlPVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgPHRhYi1wYW5lIGxhYmVsPVwiUGljdHVyZXNcIj5QaWN0dXJlcyBUYWI8L3RhYi1wYW5lPlxuICAgICAgICAgICAgICA8dGFiLXBhbmUgbGFiZWw9XCJNdXNpY1wiPk11c2ljIFRhYjwvdGFiLXBhbmU+XG4gICAgICAgICAgICAgIDx0YWItcGFuZSBsYWJlbD1cIlZpZGVvc1wiIHNlbGVjdGVkPlZpZGVvIFRhYjwvdGFiLXBhbmU+XG4gICAgICAgICAgICAgIDx0YWItcGFuZSBsYWJlbD1cIkRvY3VtZW50c1wiIGRpc2FibGVkPkRvY3VtZW50IFRhYjwvdGFiLXBhbmU+XG4gICAgICAgICAgICA8L3RhYnM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrIGlzLWZsZXhcIj5cbiAgICAgICAgICAgIDx0YWJzIGFsaWdubWVudD1cInJpZ2h0XCIgOm9ubHktZmFkZT1cImZhbHNlXCI+XG4gICAgICAgICAgICAgIDx0YWItcGFuZSBsYWJlbD1cIlBpY3R1cmVzXCI+UGljdHVyZXMgVGFiPC90YWItcGFuZT5cbiAgICAgICAgICAgICAgPHRhYi1wYW5lIGxhYmVsPVwiTXVzaWNcIj5NdXNpYyBUYWI8L3RhYi1wYW5lPlxuICAgICAgICAgICAgICA8dGFiLXBhbmUgbGFiZWw9XCJWaWRlb3NcIj5WaWRlbyBUYWI8L3RhYi1wYW5lPlxuICAgICAgICAgICAgICA8dGFiLXBhbmUgbGFiZWw9XCJEb2N1bWVudHNcIj5Eb2N1bWVudCBUYWI8L3RhYi1wYW5lPlxuICAgICAgICAgICAgPC90YWJzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1wYXJlbnQgaXMtNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlNpemVzPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2sgaXMtZmxleFwiPlxuICAgICAgICAgICAgPHRhYnMgc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgIDx0YWItcGFuZSBsYWJlbD1cIlBpY3R1cmVzXCI+UGljdHVyZXMgVGFiPC90YWItcGFuZT5cbiAgICAgICAgICAgICAgPHRhYi1wYW5lIGxhYmVsPVwiTXVzaWNcIj5NdXNpYyBUYWI8L3RhYi1wYW5lPlxuICAgICAgICAgICAgICA8dGFiLXBhbmUgbGFiZWw9XCJWaWRlb3NcIj5WaWRlbyBUYWI8L3RhYi1wYW5lPlxuICAgICAgICAgICAgICA8dGFiLXBhbmUgbGFiZWw9XCJEb2N1bWVudHNcIj5Eb2N1bWVudCBUYWI8L3RhYi1wYW5lPlxuICAgICAgICAgICAgPC90YWJzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9jayBpcy1mbGV4XCI+XG4gICAgICAgICAgICA8dGFicyBzaXplPVwibWVkaXVtXCI+XG4gICAgICAgICAgICAgIDx0YWItcGFuZSBsYWJlbD1cIlBpY3R1cmVzXCI+UGljdHVyZXMgVGFiPC90YWItcGFuZT5cbiAgICAgICAgICAgICAgPHRhYi1wYW5lIGxhYmVsPVwiTXVzaWNcIj5NdXNpYyBUYWI8L3RhYi1wYW5lPlxuICAgICAgICAgICAgICA8dGFiLXBhbmUgbGFiZWw9XCJWaWRlb3NcIj5WaWRlbyBUYWI8L3RhYi1wYW5lPlxuICAgICAgICAgICAgICA8dGFiLXBhbmUgbGFiZWw9XCJEb2N1bWVudHNcIj5Eb2N1bWVudCBUYWI8L3RhYi1wYW5lPlxuICAgICAgICAgICAgPC90YWJzPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9jayBpcy1mbGV4XCI+XG4gICAgICAgICAgICA8dGFicyBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgICAgPHRhYi1wYW5lIGxhYmVsPVwiUGljdHVyZXNcIj5QaWN0dXJlcyBUYWI8L3RhYi1wYW5lPlxuICAgICAgICAgICAgICA8dGFiLXBhbmUgbGFiZWw9XCJNdXNpY1wiPk11c2ljIFRhYjwvdGFiLXBhbmU+XG4gICAgICAgICAgICAgIDx0YWItcGFuZSBsYWJlbD1cIlZpZGVvc1wiPlZpZGVvIFRhYjwvdGFiLXBhbmU+XG4gICAgICAgICAgICAgIDx0YWItcGFuZSBsYWJlbD1cIkRvY3VtZW50c1wiPkRvY3VtZW50IFRhYjwvdGFiLXBhbmU+XG4gICAgICAgICAgICA8L3RhYnM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1hbmNlc3RvclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveFwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+U3R5bGVzPC9oMT5cbiAgICAgICAgICA8dGFicyB0eXBlPVwiYm94ZWRcIj5cbiAgICAgICAgICAgIDx0YWItcGFuZSBsYWJlbD1cIlBpY3R1cmVzXCI+UGljdHVyZXMgVGFiPC90YWItcGFuZT5cbiAgICAgICAgICAgIDx0YWItcGFuZSBsYWJlbD1cIk11c2ljXCI+TXVzaWMgVGFiPC90YWItcGFuZT5cbiAgICAgICAgICAgIDx0YWItcGFuZSBsYWJlbD1cIlZpZGVvc1wiPlZpZGVvIFRhYjwvdGFiLXBhbmU+XG4gICAgICAgICAgICA8dGFiLXBhbmUgbGFiZWw9XCJEb2N1bWVudHNcIj5Eb2N1bWVudCBUYWI8L3RhYi1wYW5lPlxuICAgICAgICAgIDwvdGFicz5cbiAgICAgICAgICA8dGFicyB0eXBlPVwidG9nZ2xlXCI+XG4gICAgICAgICAgICA8dGFiLXBhbmUgbGFiZWw9XCJQaWN0dXJlc1wiPlBpY3R1cmVzIFRhYjwvdGFiLXBhbmU+XG4gICAgICAgICAgICA8dGFiLXBhbmUgbGFiZWw9XCJNdXNpY1wiPk11c2ljIFRhYjwvdGFiLXBhbmU+XG4gICAgICAgICAgICA8dGFiLXBhbmUgbGFiZWw9XCJWaWRlb3NcIj5WaWRlbyBUYWI8L3RhYi1wYW5lPlxuICAgICAgICAgICAgPHRhYi1wYW5lIGxhYmVsPVwiRG9jdW1lbnRzXCI+RG9jdW1lbnQgVGFiPC90YWItcGFuZT5cbiAgICAgICAgICA8L3RhYnM+XG4gICAgICAgICAgPHRhYnMgdHlwZT1cImJveGVkXCIgOmlzLWZ1bGx3aWR0aD1cInRydWVcIiBhbGlnbm1lbnQ9XCJjZW50ZXJlZFwiIHNpemU9XCJsYXJnZVwiPlxuICAgICAgICAgICAgPHRhYi1wYW5lIGxhYmVsPVwiUGljdHVyZXNcIiBpY29uPVwiZmEgZmEtaW1hZ2VcIj5QaWN0dXJlcyBUYWI8L3RhYi1wYW5lPlxuICAgICAgICAgICAgPHRhYi1wYW5lIGxhYmVsPVwiTXVzaWNcIiBpY29uPVwiZmEgZmEtbXVzaWNcIj5NdXNpYyBUYWI8L3RhYi1wYW5lPlxuICAgICAgICAgICAgPHRhYi1wYW5lIGxhYmVsPVwiVmlkZW9zXCIgaWNvbj1cImZhIGZhLWZpbG1cIj5WaWRlbyBUYWI8L3RhYi1wYW5lPlxuICAgICAgICAgICAgPHRhYi1wYW5lIGxhYmVsPVwiRG9jdW1lbnRzXCIgaWNvbj1cImZhIGZhLWZpbGUtdGV4dC1vXCI+RG9jdW1lbnQgVGFiPC90YWItcGFuZT5cbiAgICAgICAgICA8L3RhYnM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1hbmNlc3RvclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveFwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+TGF5b3V0czwvaDE+XG4gICAgICAgICAgPHRhYnMgbGF5b3V0PVwiYm90dG9tXCIgOm9ubHktZmFkZT1cImZhbHNlXCI+XG4gICAgICAgICAgICA8dGFiLXBhbmUgbGFiZWw9XCJQaWN0dXJlc1wiPlxuICAgICAgICAgICAgICA8cD5TaW1wbGUgcmVzcG9uc2l2ZSBob3Jpem9udGFsIG5hdmlnYXRpb24gdGFicywgd2l0aCBkaWZmZXJlbnQgc3R5bGVzPC9wPlxuICAgICAgICAgICAgICA8cD5TaW1wbGUgcmVzcG9uc2l2ZSBob3Jpem9udGFsIG5hdmlnYXRpb24gdGFicywgd2l0aCBkaWZmZXJlbnQgc3R5bGVzPC9wPlxuICAgICAgICAgICAgPC90YWItcGFuZT5cbiAgICAgICAgICAgIDx0YWItcGFuZSBsYWJlbD1cIk11c2ljXCI+TXVzaWMgVGFiPC90YWItcGFuZT5cbiAgICAgICAgICAgIDx0YWItcGFuZSBsYWJlbD1cIlZpZGVvc1wiPlZpZGVvIFRhYjwvdGFiLXBhbmU+XG4gICAgICAgICAgICA8dGFiLXBhbmUgbGFiZWw9XCJEb2N1bWVudHNcIj5Eb2N1bWVudCBUYWI8L3RhYi1wYW5lPlxuICAgICAgICAgIDwvdGFicz5cbiAgICAgICAgICA8dGFicyBsYXlvdXQ9XCJsZWZ0XCIgOm9ubHktZmFkZT1cImZhbHNlXCI+XG4gICAgICAgICAgICA8dGFiLXBhbmUgbGFiZWw9XCJQaWN0dXJlc1wiPlxuICAgICAgICAgICAgICA8cD5TaW1wbGUgcmVzcG9uc2l2ZSBob3Jpem9udGFsIG5hdmlnYXRpb24gdGFicywgd2l0aCBkaWZmZXJlbnQgc3R5bGVzPC9wPlxuICAgICAgICAgICAgICA8cD5TaW1wbGUgcmVzcG9uc2l2ZSBob3Jpem9udGFsIG5hdmlnYXRpb24gdGFicywgd2l0aCBkaWZmZXJlbnQgc3R5bGVzPC9wPlxuICAgICAgICAgICAgPC90YWItcGFuZT5cbiAgICAgICAgICAgIDx0YWItcGFuZSBsYWJlbD1cIk11c2ljXCI+TXVzaWMgVGFiPC90YWItcGFuZT5cbiAgICAgICAgICAgIDx0YWItcGFuZSBsYWJlbD1cIlZpZGVvc1wiPlZpZGVvIFRhYjwvdGFiLXBhbmU+XG4gICAgICAgICAgICA8dGFiLXBhbmUgbGFiZWw9XCJEb2N1bWVudHNcIj5Eb2N1bWVudCBUYWI8L3RhYi1wYW5lPlxuICAgICAgICAgIDwvdGFicz5cbiAgICAgICAgICA8dGFicyBsYXlvdXQ9XCJyaWdodFwiIGFuaW1hdGlvbj1cImZhZGVcIiA6b25seS1mYWRlPVwiZmFsc2VcIj5cbiAgICAgICAgICAgIDx0YWItcGFuZSB2LWZvcj1cIml0ZW0gaW4gaXRlbXNcIiA6a2V5PVwiaXRlbS5sYWJlbFwiIDpsYWJlbD1cIml0ZW0ubGFiZWxcIiA6aWNvbj1cIidmYSBmYS0nICsgaXRlbS5pY29uXCI+XG4gICAgICAgICAgICAgIHt7IGl0ZW0uZGVzYyB9fVxuICAgICAgICAgICAgPC90YWItcGFuZT5cbiAgICAgICAgICA8L3RhYnM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IFRhYnMsIFRhYlBhbmUgfSBmcm9tICd2dWUtYnVsbWEtdGFicydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgVGFicyxcbiAgICBUYWJQYW5lXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpY29uOiAnaW1hZ2UnLFxuICAgICAgICAgIGxhYmVsOiAnUGljdHVyZXMnLFxuICAgICAgICAgIGRlc2M6ICdTaW1wbGUgcmVzcG9uc2l2ZSBob3Jpem9udGFsIG5hdmlnYXRpb24gdGFicywgd2l0aCBkaWZmZXJlbnQgc3R5bGVzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogJ211c2ljJyxcbiAgICAgICAgICBsYWJlbDogJ011c2ljJyxcbiAgICAgICAgICBkZXNjOiAnTXVzaWMgVGFiJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogJ2ZpbG0nLFxuICAgICAgICAgIGxhYmVsOiAnVmlkZW9zJyxcbiAgICAgICAgICBkZXNjOiAnVmlkZW8gVGFiJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWNvbjogJ2ZpbGUtdGV4dC1vJyxcbiAgICAgICAgICBsYWJlbDogJ0RvY3VtZW50cycsXG4gICAgICAgICAgZGVzYzogJ0RvY3VtZW50IFRhYidcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLml0ZW1zLnNwbGljZSgwLCAxKVxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMucmFuZG9tVGFicygpXG4gICAgfSwgMzAwMClcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgcmFuZG9tVGFicyAoKSB7XG4gICAgICB0aGlzLml0ZW1zLnVuc2hpZnQodGhpcy5pdGVtcy5wb3AoKSlcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi50YWJzIHtcbiAgbWFyZ2luOiAyMHB4O1xuICAudGFiLWNvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIH1cbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gVGFicy52dWU/MmQxN2I3ZGQiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udGFicyB7XFxuICBtYXJnaW46IDIwcHg7XFxufVxcbi50YWJzIC50YWItY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTMyZDY1Mzc3XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL1RhYnMudnVlXG4vLyBtb2R1bGUgaWQgPSA2MzJcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udnVlLWJ1bG1hLXRhYnMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbn1cXG4udnVlLWJ1bG1hLXRhYnMuaXMtbGF5b3V0LXRvcCB7XFxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnZ1ZS1idWxtYS10YWJzLmlzLWxheW91dC1ib3R0b20ge1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IHJldmVyc2U7XFxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG59XFxuLnZ1ZS1idWxtYS10YWJzLmlzLWxheW91dC1sZWZ0IHtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLnZ1ZS1idWxtYS10YWJzLmlzLWxheW91dC1sZWZ0IC50YWItbGlzdCB7XFxuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjViNWI1O1xcbn1cXG4udnVlLWJ1bG1hLXRhYnMuaXMtbGF5b3V0LWxlZnQgbGkge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4udnVlLWJ1bG1hLXRhYnMuaXMtbGF5b3V0LWxlZnQgbGkgYSB7XFxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2I1YjViNTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7XFxuICAgICAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG4udnVlLWJ1bG1hLXRhYnMuaXMtbGF5b3V0LWxlZnQgbGkgYTpob3ZlciB7XFxuICAgICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzM2MzYzNjtcXG59XFxuLnZ1ZS1idWxtYS10YWJzLmlzLWxheW91dC1sZWZ0IGxpLmlzLWFjdGl2ZSBhIHtcXG4gICAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzAwZDFiMjtcXG59XFxuLnZ1ZS1idWxtYS10YWJzLmlzLWxheW91dC1sZWZ0IC50YWItY29udGVudCB7XFxuICAgICAgbWFyZ2luOiAzMHB4IDEwcHg7XFxufVxcbi52dWUtYnVsbWEtdGFicy5pcy1sYXlvdXQtcmlnaHQge1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XFxuICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogcmV2ZXJzZTtcXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi52dWUtYnVsbWEtdGFicy5pcy1sYXlvdXQtcmlnaHQgLnRhYi1saXN0IHtcXG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcbiAgICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcXG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGVuZDtcXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgICAtd2Via2l0LWJveC1wYWNrOiBzdGFydDtcXG4gICAgICAgICAgLW1zLWZsZXgtcGFjazogc3RhcnQ7XFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiNWI1YjU7XFxufVxcbi52dWUtYnVsbWEtdGFicy5pcy1sYXlvdXQtcmlnaHQgLnRhYi1saXN0IGxpIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4udnVlLWJ1bG1hLXRhYnMuaXMtbGF5b3V0LXJpZ2h0IC50YWItbGlzdCBsaSBhIHtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYjViNWI1O1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogLTFweDtcXG4gICAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAgICAgICAgICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi52dWUtYnVsbWEtdGFicy5pcy1sYXlvdXQtcmlnaHQgLnRhYi1saXN0IGxpIGE6aG92ZXIge1xcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMzYzNjM2O1xcbn1cXG4udnVlLWJ1bG1hLXRhYnMuaXMtbGF5b3V0LXJpZ2h0IC50YWItbGlzdCBsaS5pcy1hY3RpdmUgYSB7XFxuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDBkMWIyO1xcbn1cXG4udnVlLWJ1bG1hLXRhYnMuaXMtbGF5b3V0LXJpZ2h0IC50YWItY29udGVudCB7XFxuICAgICAgbWFyZ2luOiAzMHB4IDEwcHg7XFxufVxcbi52dWUtYnVsbWEtdGFicyAudGFiLWNvbnRlbnQge1xcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAxMHB4IDMwcHg7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgICAgICAtbXMtZmxleDogMSAxO1xcbiAgICAgICAgICAgIGZsZXg6IDEgMTtcXG59XFxuLnZ1ZS1idWxtYS10YWJzIC50YWItcGFuZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgICAgICAgLW1zLWZsZXg6IDEgMTtcXG4gICAgICAgICAgICBmbGV4OiAxIDE7XFxufVxcbi52dWUtYnVsbWEtdGFicyAudGFiLXBhbmUuaXMtYWN0aXZlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG59XFxuLnZ1ZS1idWxtYS10YWJzIC50YWItcGFuZVtjbGFzcyo9XFxcIk91dFxcXCJdIHtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgbGVmdDogMDtcXG4gICAgICByaWdodDogMDtcXG4gICAgICBib3R0b206IDA7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTk3OTYzMzUyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vfi92dWUtYnVsbWEtdGFicy9zcmMvVGFicy52dWVcbi8vIG1vZHVsZSBpZCA9IDY0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDciLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVGFiUGFuZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWY3NjFkZDRcXFwifSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9UYWJQYW5lLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9ub2RlX21vZHVsZXMvdnVlLWJ1bG1hLXRhYnMvc3JjL1RhYlBhbmUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gVGFiUGFuZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMWY3NjFkZDRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xZjc2MWRkNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1idWxtYS10YWJzL3NyYy9UYWJQYW5lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzAwXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi05Nzk2MzM1MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYnMudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9UYWJzLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi05Nzk2MzM1MlxcXCJ9IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1RhYnMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL25vZGVfbW9kdWxlcy92dWUtYnVsbWEtdGFicy9zcmMvVGFicy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBUYWJzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi05Nzk2MzM1MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTk3OTYzMzUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWJ1bG1hLXRhYnMvc3JjL1RhYnMudnVlXG4vLyBtb2R1bGUgaWQgPSA3MDFcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCd0cmFuc2l0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5hbWVcIjogX3ZtLmFuaW1hdGlvbixcbiAgICAgIFwibW9kZVwiOiBcIm91dC1pblwiLFxuICAgICAgXCJhcHBlYXJcIjogXCJcIixcbiAgICAgIFwiYXBwZWFyLWFjdGl2ZS1jbGFzc1wiOiBfdm0udHJhbnNpdGlvbi5lbnRlckNsYXNzLFxuICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogX3ZtLnRyYW5zaXRpb24uZW50ZXJDbGFzcyxcbiAgICAgIFwibGVhdmUtYWN0aXZlLWNsYXNzXCI6IF92bS50cmFuc2l0aW9uLmxlYXZlQ2xhc3NcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICB2YWx1ZTogKF92bS5yZWFsU2VsZWN0ZWQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJyZWFsU2VsZWN0ZWRcIlxuICAgIH1dLFxuICAgIGNsYXNzOiBfdm0uY2xhc3NPYmplY3QsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicm9sZVwiOiBcInRhYnBhbmVsXCIsXG4gICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBfdm0ubGFiZWwsXG4gICAgICBcImFyaWEtaGlkZGVuXCI6IF92bS5oaWRkZW5cbiAgICB9XG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMildKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0xZjc2MWRkNFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTFmNzYxZGQ0XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS10YWJzL3NyYy9UYWJQYW5lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzIwXG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygndWwnLCB7XG4gICAgY2xhc3M6IF92bS5jbGFzc09iamVjdCxcbiAgICBhdHRyczoge1xuICAgICAgXCJyb2xlXCI6IFwidGFibGlzdFwiXG4gICAgfVxuICB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTMwN2VlMDBhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzA3ZWUwMGFcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vdnVlLWJ1bG1hLXRhYnMvc3JjL1RhYkxpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA3MjZcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWFuY2VzdG9yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnQgaXMtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJBbGlnbm1lbnRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibG9jayBpcy1mbGV4XCJcbiAgfSwgW19jKCd0YWJzJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImFuaW1hdGlvblwiOiBcInNsaWRlXCIsXG4gICAgICBcIm9ubHktZmFkZVwiOiBmYWxzZVxuICAgIH1cbiAgfSwgW19jKCd0YWItcGFuZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIlBpY3R1cmVzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJQaWN0dXJlcyBUYWJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RhYi1wYW5lJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwiTXVzaWNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIk11c2ljIFRhYlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGFiLXBhbmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJWaWRlb3NcIixcbiAgICAgIFwic2VsZWN0ZWRcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlZpZGVvIFRhYlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGFiLXBhbmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJEb2N1bWVudHNcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkRvY3VtZW50IFRhYlwiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibG9jayBpcy1mbGV4XCJcbiAgfSwgW19jKCd0YWJzJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImFsaWdubWVudFwiOiBcImNlbnRlcmVkXCIsXG4gICAgICBcIm9ubHktZmFkZVwiOiBmYWxzZVxuICAgIH1cbiAgfSwgW19jKCd0YWItcGFuZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIlBpY3R1cmVzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJQaWN0dXJlcyBUYWJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RhYi1wYW5lJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwiTXVzaWNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIk11c2ljIFRhYlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGFiLXBhbmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJWaWRlb3NcIixcbiAgICAgIFwic2VsZWN0ZWRcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlZpZGVvIFRhYlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGFiLXBhbmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJEb2N1bWVudHNcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkRvY3VtZW50IFRhYlwiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibG9jayBpcy1mbGV4XCJcbiAgfSwgW19jKCd0YWJzJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImFsaWdubWVudFwiOiBcInJpZ2h0XCIsXG4gICAgICBcIm9ubHktZmFkZVwiOiBmYWxzZVxuICAgIH1cbiAgfSwgW19jKCd0YWItcGFuZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIlBpY3R1cmVzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJQaWN0dXJlcyBUYWJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RhYi1wYW5lJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwiTXVzaWNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIk11c2ljIFRhYlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGFiLXBhbmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJWaWRlb3NcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlZpZGVvIFRhYlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGFiLXBhbmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJEb2N1bWVudHNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkRvY3VtZW50IFRhYlwiKV0pXSwgMSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnQgaXMtNlwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJTaXplc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrIGlzLWZsZXhcIlxuICB9LCBbX2MoJ3RhYnMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2l6ZVwiOiBcInNtYWxsXCJcbiAgICB9XG4gIH0sIFtfYygndGFiLXBhbmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJQaWN0dXJlc1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUGljdHVyZXMgVGFiXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0YWItcGFuZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIk11c2ljXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJNdXNpYyBUYWJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RhYi1wYW5lJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwiVmlkZW9zXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJWaWRlbyBUYWJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RhYi1wYW5lJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwiRG9jdW1lbnRzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEb2N1bWVudCBUYWJcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgaXMtZmxleFwiXG4gIH0sIFtfYygndGFicycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzaXplXCI6IFwibWVkaXVtXCJcbiAgICB9XG4gIH0sIFtfYygndGFiLXBhbmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJQaWN0dXJlc1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUGljdHVyZXMgVGFiXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0YWItcGFuZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIk11c2ljXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJNdXNpYyBUYWJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RhYi1wYW5lJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwiVmlkZW9zXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJWaWRlbyBUYWJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RhYi1wYW5lJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwiRG9jdW1lbnRzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJEb2N1bWVudCBUYWJcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgaXMtZmxleFwiXG4gIH0sIFtfYygndGFicycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzaXplXCI6IFwibGFyZ2VcIlxuICAgIH1cbiAgfSwgW19jKCd0YWItcGFuZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIlBpY3R1cmVzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJQaWN0dXJlcyBUYWJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RhYi1wYW5lJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwiTXVzaWNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIk11c2ljIFRhYlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGFiLXBhbmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJWaWRlb3NcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlZpZGVvIFRhYlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGFiLXBhbmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJEb2N1bWVudHNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkRvY3VtZW50IFRhYlwiKV0pXSwgMSldLCAxKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWFuY2VzdG9yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiU3R5bGVzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0YWJzJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJib3hlZFwiXG4gICAgfVxuICB9LCBbX2MoJ3RhYi1wYW5lJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwiUGljdHVyZXNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlBpY3R1cmVzIFRhYlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGFiLXBhbmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJNdXNpY1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTXVzaWMgVGFiXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0YWItcGFuZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIlZpZGVvc1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVmlkZW8gVGFiXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0YWItcGFuZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIkRvY3VtZW50c1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRG9jdW1lbnQgVGFiXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RhYnMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRvZ2dsZVwiXG4gICAgfVxuICB9LCBbX2MoJ3RhYi1wYW5lJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwiUGljdHVyZXNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlBpY3R1cmVzIFRhYlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGFiLXBhbmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJNdXNpY1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTXVzaWMgVGFiXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0YWItcGFuZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIlZpZGVvc1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVmlkZW8gVGFiXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0YWItcGFuZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIkRvY3VtZW50c1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRG9jdW1lbnQgVGFiXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RhYnMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJveGVkXCIsXG4gICAgICBcImlzLWZ1bGx3aWR0aFwiOiB0cnVlLFxuICAgICAgXCJhbGlnbm1lbnRcIjogXCJjZW50ZXJlZFwiLFxuICAgICAgXCJzaXplXCI6IFwibGFyZ2VcIlxuICAgIH1cbiAgfSwgW19jKCd0YWItcGFuZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIlBpY3R1cmVzXCIsXG4gICAgICBcImljb25cIjogXCJmYSBmYS1pbWFnZVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUGljdHVyZXMgVGFiXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0YWItcGFuZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIk11c2ljXCIsXG4gICAgICBcImljb25cIjogXCJmYSBmYS1tdXNpY1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTXVzaWMgVGFiXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0YWItcGFuZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIlZpZGVvc1wiLFxuICAgICAgXCJpY29uXCI6IFwiZmEgZmEtZmlsbVwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVmlkZW8gVGFiXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0YWItcGFuZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIkRvY3VtZW50c1wiLFxuICAgICAgXCJpY29uXCI6IFwiZmEgZmEtZmlsZS10ZXh0LW9cIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkRvY3VtZW50IFRhYlwiKV0pXSwgMSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1hbmNlc3RvclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIkxheW91dHNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RhYnMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGF5b3V0XCI6IFwiYm90dG9tXCIsXG4gICAgICBcIm9ubHktZmFkZVwiOiBmYWxzZVxuICAgIH1cbiAgfSwgW19jKCd0YWItcGFuZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIlBpY3R1cmVzXCJcbiAgICB9XG4gIH0sIFtfYygncCcsIFtfdm0uX3YoXCJTaW1wbGUgcmVzcG9uc2l2ZSBob3Jpem9udGFsIG5hdmlnYXRpb24gdGFicywgd2l0aCBkaWZmZXJlbnQgc3R5bGVzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcIlNpbXBsZSByZXNwb25zaXZlIGhvcml6b250YWwgbmF2aWdhdGlvbiB0YWJzLCB3aXRoIGRpZmZlcmVudCBzdHlsZXNcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGFiLXBhbmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJNdXNpY1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTXVzaWMgVGFiXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0YWItcGFuZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIlZpZGVvc1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiVmlkZW8gVGFiXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCd0YWItcGFuZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJsYWJlbFwiOiBcIkRvY3VtZW50c1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRG9jdW1lbnQgVGFiXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RhYnMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGF5b3V0XCI6IFwibGVmdFwiLFxuICAgICAgXCJvbmx5LWZhZGVcIjogZmFsc2VcbiAgICB9XG4gIH0sIFtfYygndGFiLXBhbmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJQaWN0dXJlc1wiXG4gICAgfVxuICB9LCBbX2MoJ3AnLCBbX3ZtLl92KFwiU2ltcGxlIHJlc3BvbnNpdmUgaG9yaXpvbnRhbCBuYXZpZ2F0aW9uIHRhYnMsIHdpdGggZGlmZmVyZW50IHN0eWxlc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfdm0uX3YoXCJTaW1wbGUgcmVzcG9uc2l2ZSBob3Jpem9udGFsIG5hdmlnYXRpb24gdGFicywgd2l0aCBkaWZmZXJlbnQgc3R5bGVzXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RhYi1wYW5lJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxhYmVsXCI6IFwiTXVzaWNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIk11c2ljIFRhYlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGFiLXBhbmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJWaWRlb3NcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlZpZGVvIFRhYlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndGFiLXBhbmUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibGFiZWxcIjogXCJEb2N1bWVudHNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkRvY3VtZW50IFRhYlwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCd0YWJzJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImxheW91dFwiOiBcInJpZ2h0XCIsXG4gICAgICBcImFuaW1hdGlvblwiOiBcImZhZGVcIixcbiAgICAgIFwib25seS1mYWRlXCI6IGZhbHNlXG4gICAgfVxuICB9LCBfdm0uX2woKF92bS5pdGVtcyksIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gX2MoJ3RhYi1wYW5lJywge1xuICAgICAga2V5OiBpdGVtLmxhYmVsLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJsYWJlbFwiOiBpdGVtLmxhYmVsLFxuICAgICAgICBcImljb25cIjogJ2ZhIGZhLScgKyBpdGVtLmljb25cbiAgICAgIH1cbiAgICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5kZXNjKSArIFwiXFxuICAgICAgICAgIFwiKV0pXG4gIH0pKV0sIDEpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTMyZDY1Mzc3XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMzJkNjUzNzdcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9UYWJzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzI5XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIGNsYXNzOiAoIF9vYmogPSB7XG4gICAgICAndnVlLWJ1bG1hLXRhYnMnOiB0cnVlXG4gICAgfSwgX29ialsoXCJpcy1sYXlvdXQtXCIgKyBfdm0ubGF5b3V0KV0gPSB0cnVlLCBfb2JqIClcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgY2xhc3M6ICggX29iaiQxID0ge1xuICAgICAgdGFiczogdHJ1ZSwgJ2lzLWZ1bGx3aWR0aCc6IF92bS5pc0Z1bGx3aWR0aFxuICAgIH0sIF9vYmokMVsoXCJpcy1cIiArIF92bS5zaXplKV0gPSBfdm0uc2l6ZSwgX29iaiQxWyhcImlzLVwiICsgX3ZtLmFsaWdubWVudCldID0gX3ZtLmFsaWdubWVudCwgX29iaiQxWyhcImlzLVwiICsgX3ZtLnR5cGUpXSA9IF92bS50eXBlLCBfb2JqJDEgKVxuICB9LCBbX3ZtLl90KFwibGVmdC10YWItbGlzdFwiKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RhYi1saXN0JywgX3ZtLl9sKChfdm0udGFiUGFuZXMpLCBmdW5jdGlvbih0YWIsIGluZGV4KSB7XG4gICAgcmV0dXJuIF9jKCdsaScsIHtcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgICdpcy1hY3RpdmUnOiBfdm0uaXNBY3RpdmVkKGluZGV4KSwgJ2lzLWRpc2FibGVkJzogdGFiLmRpc2FibGVkLCAnaXMtZmxleCc6IHRydWVcbiAgICAgIH0sXG4gICAgICBhdHRyczoge1xuICAgICAgICBcInJvbGVcIjogXCJ0YWJcIixcbiAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IF92bS5pc0FjdGl2ZWQoaW5kZXgpID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IF92bS5pc0FjdGl2ZWQoaW5kZXgpID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICAgXCJhcmlhLWRpc2FibGVkXCI6IHRhYi5kaXNhYmxlZCA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgIFwic2VsZWN0ZWRcIjogX3ZtLmlzQWN0aXZlZChpbmRleCksXG4gICAgICAgIFwiZGlzYWJsZWRcIjogdGFiLmRpc2FibGVkXG4gICAgICB9LFxuICAgICAgb246IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uc2VsZWN0KGluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW19jKCdhJywge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiaXMtdW5zZWxlY3RhYmxlXCJcbiAgICB9LCBbKHRhYi5pY29uKSA/IF9jKCdzcGFuJywge1xuICAgICAgY2xhc3M6IFsnaWNvbicsIHtcbiAgICAgICAgJ2lzLXNtYWxsJzogX3ZtLnNpemUgIT09ICdsYXJnZSdcbiAgICAgIH1dXG4gICAgfSwgW19jKCdpJywge1xuICAgICAgY2xhc3M6IHRhYi5pY29uXG4gICAgfSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoX3ZtLl9zKHRhYi5sYWJlbCkpXSldKV0pXG4gIH0pKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl90KFwicmlnaHQtdGFiLWxpc3RcIildLCAyKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0YWItY29udGVudCBpcy1mbGV4XCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKV0pXG4gIHZhciBfb2JqO1xuICB2YXIgX29iaiQxO1xufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi05Nzk2MzM1MlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTk3OTYzMzUyXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS10YWJzL3NyYy9UYWJzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzU0XG4vLyBtb2R1bGUgY2h1bmtzID0gNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zMmQ2NTM3N1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNDQyZTVlOThcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzJkNjUzNzdcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFicy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzJkNjUzNzdcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFicy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTMyZDY1Mzc3XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL1RhYnMudnVlXG4vLyBtb2R1bGUgaWQgPSA3ODJcbi8vIG1vZHVsZSBjaHVua3MgPSA3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi05Nzk2MzM1MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFicy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMjY1MTk2YzlcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTk3OTYzMzUyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOTc5NjMzNTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYnMudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi05Nzk2MzM1MlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL34vdnVlLWJ1bG1hLXRhYnMvc3JjL1RhYnMudnVlXG4vLyBtb2R1bGUgaWQgPSA3OTdcbi8vIG1vZHVsZSBjaHVua3MgPSA3Il0sInNvdXJjZVJvb3QiOiIifQ==
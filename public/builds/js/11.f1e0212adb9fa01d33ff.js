webpackJsonp([11],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(802)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(594),
  /* template */
  __webpack_require__(762),
  /* scopeId */
  "data-v-d1d3d454",
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/components/Rating.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Rating.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d1d3d454", Component.options)
  } else {
    hotAPI.reload("data-v-d1d3d454", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "/builds/images/icons.png?90bf9ab95d42cf35751c568cc11d8923";

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "/builds/images/icons@2x.png?7a85e4c40c9bdeb87ea4be7bbc66b67e";

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports = "/builds/images/icons-checkmark.png?99dddfe3c2b75db8263ac07d13399f9f";

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "/builds/images/icons-checkmark@2x.png?6f4919eb660e37b8a29aeefd52617866";

/***/ }),

/***/ 564:
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
    legend: String,
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      type: Number,
      default: -1
    },
    kind: {
      type: String,
      default: 'basic',
      validator: function validator(val) {
        return ['basic', 'slot', 'grow', 'growRotate', 'fade', 'checkmark'].indexOf(val) > -1;
      }
    }
  },

  data: function data() {
    return {
      selected: this.value
    };
  },


  methods: {
    uuid: function uuid(index) {
      return 'rating-' + this._uid + '-item-' + index;
    },
    hasChecked: function hasChecked(index) {
      return this.count - index === this.selected;
    },
    change: function change(e) {
      this.selected = e.target.value >>> 0;
      this.$emit('change', this.selected);
    }
  },

  computed: {
    count: function count() {
      return this.items.length;
    }
  }
};

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueBulmaRating = __webpack_require__(697);

var _vueBulmaRating2 = _interopRequireDefault(_vueBulmaRating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Rating: _vueBulmaRating2.default
  },

  data: function data() {
    return {
      value: 3,
      items: [{
        title: '5 Stars',
        value: 5
      }, {
        title: '4 Stars',
        value: 4
      }, {
        title: '3 Stars',
        value: 3
      }, {
        title: '2 Stars',
        value: 2
      }, {
        title: '1 Star',
        value: 1
      }]
    };
  },


  methods: {
    update: function update(val) {
      this.value = val;
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

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.starability-basic {\n  display: block;\n  position: relative;\n  width: 150px;\n  min-height: 60px;\n  padding: 0;\n  border: none;\n}\n.starability-basic > input {\n    position: absolute;\n    margin-right: -100%;\n    opacity: 0;\n}\n.starability-basic > input:checked ~ label,\n  .starability-basic > input:focus ~ label {\n    background-position: 0 -30px;\n}\n.starability-basic > input:hover ~ label {\n    background-position: 0 -30px;\n}\n.starability-basic > label {\n    position: relative;\n    display: inline-block;\n    float: right;\n    width: 30px;\n    height: 30px;\n    color: transparent;\n    cursor: pointer;\n    background-image: url(" + __webpack_require__(165) + ");\n    background-repeat: no-repeat;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi) {\n.starability-basic > label {\n        background-image: url(" + __webpack_require__(166) + ");\n        background-size: 30px auto;\n}\n}\n.starability-slot {\n  display: block;\n  position: relative;\n  width: 150px;\n  min-height: 60px;\n  padding: 0;\n  border: none;\n}\n.starability-slot > input {\n    position: absolute;\n    margin-right: -100%;\n    opacity: 0;\n}\n.starability-slot > input:checked ~ label,\n  .starability-slot > input:focus ~ label {\n    background-position: 0 -30px;\n}\n.starability-slot > input:hover ~ label {\n    background-position: 0 -30px;\n}\n.starability-slot > label {\n    position: relative;\n    display: inline-block;\n    float: right;\n    width: 30px;\n    height: 30px;\n    color: transparent;\n    cursor: pointer;\n    background-image: url(" + __webpack_require__(165) + ");\n    background-repeat: no-repeat;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi) {\n.starability-slot > label {\n        background-image: url(" + __webpack_require__(166) + ");\n        background-size: 30px auto;\n}\n}\n.starability-slot > input:checked ~ label,\n  .starability-slot > input:hover ~ label,\n  .starability-slot > input:focus ~ label {\n    transition: background-position .7s;\n}\n@-webkit-keyframes grow {\n0% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n}\n99% {\n    -webkit-transform: scale(4, 4);\n            transform: scale(4, 4);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n    opacity: 0;\n}\n}\n@keyframes grow {\n0% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n}\n99% {\n    -webkit-transform: scale(4, 4);\n            transform: scale(4, 4);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1);\n    opacity: 0;\n}\n}\n.starability-grow {\n  display: block;\n  position: relative;\n  width: 150px;\n  min-height: 60px;\n  padding: 0;\n  border: none;\n}\n.starability-grow > input {\n    position: absolute;\n    margin-right: -100%;\n    opacity: 0;\n}\n.starability-grow > input:checked ~ label,\n  .starability-grow > input:focus ~ label {\n    background-position: 0 -30px;\n}\n.starability-grow > input:hover ~ label {\n    background-position: 0 -30px;\n}\n.starability-grow > label {\n    position: relative;\n    display: inline-block;\n    float: right;\n    width: 30px;\n    height: 30px;\n    color: transparent;\n    cursor: pointer;\n    background-image: url(" + __webpack_require__(165) + ");\n    background-repeat: no-repeat;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi) {\n.starability-grow > label {\n        background-image: url(" + __webpack_require__(166) + ");\n        background-size: 30px auto;\n}\n}\n.starability-grow > label:before {\n    display: none;\n    position: absolute;\n    content: ' ';\n    width: 30px;\n    height: 30px;\n    background-image: url(" + __webpack_require__(165) + ");\n    background-repeat: no-repeat;\n    bottom: 0;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi) {\n.starability-grow > label:before {\n        background-image: url(" + __webpack_require__(166) + ");\n        background-size: 30px auto;\n}\n}\n.starability-grow > input:checked + label:before {\n    background-position: 0 -30px;\n    display: block;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-name: grow;\n            animation-name: grow;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n@-webkit-keyframes grow-rotate {\n0% {\n    -webkit-transform: scale(1, 1) rotate(0deg);\n            transform: scale(1, 1) rotate(0deg);\n}\n99% {\n    -webkit-transform: scale(4, 4) rotate(90deg);\n            transform: scale(4, 4) rotate(90deg);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: scale(1, 1) rotate(0deg);\n            transform: scale(1, 1) rotate(0deg);\n    opacity: 0;\n}\n}\n@keyframes grow-rotate {\n0% {\n    -webkit-transform: scale(1, 1) rotate(0deg);\n            transform: scale(1, 1) rotate(0deg);\n}\n99% {\n    -webkit-transform: scale(4, 4) rotate(90deg);\n            transform: scale(4, 4) rotate(90deg);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: scale(1, 1) rotate(0deg);\n            transform: scale(1, 1) rotate(0deg);\n    opacity: 0;\n}\n}\n.starability-growRotate {\n  display: block;\n  position: relative;\n  width: 150px;\n  min-height: 60px;\n  padding: 0;\n  border: none;\n}\n.starability-growRotate > input {\n    position: absolute;\n    margin-right: -100%;\n    opacity: 0;\n}\n.starability-growRotate > input:checked ~ label,\n  .starability-growRotate > input:focus ~ label {\n    background-position: 0 -30px;\n}\n.starability-growRotate > input:hover ~ label {\n    background-position: 0 -30px;\n}\n.starability-growRotate > label {\n    position: relative;\n    display: inline-block;\n    float: right;\n    width: 30px;\n    height: 30px;\n    color: transparent;\n    cursor: pointer;\n    background-image: url(" + __webpack_require__(165) + ");\n    background-repeat: no-repeat;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi) {\n.starability-growRotate > label {\n        background-image: url(" + __webpack_require__(166) + ");\n        background-size: 30px auto;\n}\n}\n.starability-growRotate > label:before {\n    display: none;\n    position: absolute;\n    content: ' ';\n    width: 30px;\n    height: 30px;\n    background-image: url(" + __webpack_require__(165) + ");\n    background-repeat: no-repeat;\n    bottom: 0;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi) {\n.starability-growRotate > label:before {\n        background-image: url(" + __webpack_require__(166) + ");\n        background-size: 30px auto;\n}\n}\n.starability-growRotate > input:checked + label:before {\n    background-position: 0 -30px;\n    display: block;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-name: grow-rotate;\n            animation-name: grow-rotate;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n@-webkit-keyframes fade {\n0% {\n    -webkit-transform: translateY(30px);\n            transform: translateY(30px);\n}\n80% {\n    opacity: 100%;\n}\n100% {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 0;\n}\n}\n@keyframes fade {\n0% {\n    -webkit-transform: translateY(30px);\n            transform: translateY(30px);\n}\n80% {\n    opacity: 100%;\n}\n100% {\n    -webkit-transform: none;\n            transform: none;\n    opacity: 0;\n}\n}\n.starability-fade {\n  display: block;\n  position: relative;\n  width: 150px;\n  min-height: 60px;\n  padding: 0;\n  border: none;\n}\n.starability-fade > input {\n    position: absolute;\n    margin-right: -100%;\n    opacity: 0;\n}\n.starability-fade > input:checked ~ label,\n  .starability-fade > input:focus ~ label {\n    background-position: 0 -30px;\n}\n.starability-fade > input:hover ~ label {\n    background-position: 0 -30px;\n}\n.starability-fade > label {\n    position: relative;\n    display: inline-block;\n    float: right;\n    width: 30px;\n    height: 30px;\n    color: transparent;\n    cursor: pointer;\n    background-image: url(" + __webpack_require__(165) + ");\n    background-repeat: no-repeat;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi) {\n.starability-fade > label {\n        background-image: url(" + __webpack_require__(166) + ");\n        background-size: 30px auto;\n}\n}\n.starability-fade > label:before {\n    display: none;\n    position: absolute;\n    content: ' ';\n    width: 30px;\n    height: 30px;\n    background-image: url(" + __webpack_require__(165) + ");\n    background-repeat: no-repeat;\n    background-position: 0 -30px;\n    bottom: 30px;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi) {\n.starability-fade > label:before {\n        background-image: url(" + __webpack_require__(166) + ");\n        background-size: 30px auto;\n}\n}\n.starability-fade > input:checked + label:before {\n    display: block;\n    -webkit-animation-name: fade;\n            animation-name: fade;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n@-webkit-keyframes checkmark {\n0% {\n    -webkit-transform: translateX(-15px);\n            transform: translateX(-15px);\n}\n60% {\n    opacity: 1;\n}\n70% {\n    -webkit-transform: none;\n            transform: none;\n}\n80% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes checkmark {\n0% {\n    -webkit-transform: translateX(-15px);\n            transform: translateX(-15px);\n}\n60% {\n    opacity: 1;\n}\n70% {\n    -webkit-transform: none;\n            transform: none;\n}\n80% {\n    opacity: 1;\n}\n100% {\n    opacity: 0;\n}\n}\n.starability-checkmark {\n  display: block;\n  position: relative;\n  width: 150px;\n  min-height: 60px;\n  padding: 0;\n  border: none;\n}\n.starability-checkmark > input {\n    position: absolute;\n    margin-right: -100%;\n    opacity: 0;\n}\n.starability-checkmark > input:checked ~ label,\n  .starability-checkmark > input:focus ~ label {\n    background-position: 0 -30px;\n}\n.starability-checkmark > input:hover ~ label {\n    background-position: 0 -30px;\n}\n.starability-checkmark > label {\n    position: relative;\n    display: inline-block;\n    float: right;\n    width: 30px;\n    height: 30px;\n    color: transparent;\n    cursor: pointer;\n    background-image: url(" + __webpack_require__(534) + ");\n    background-repeat: no-repeat;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi) {\n.starability-checkmark > label {\n        background-image: url(" + __webpack_require__(535) + ");\n        background-size: 30px auto;\n}\n}\n.starability-checkmark > label {\n    position: static;\n    z-index: 2;\n}\n.starability-checkmark > label:before {\n    display: none;\n    position: absolute;\n    content: ' ';\n    width: 30px;\n    height: 30px;\n    background-image: url(" + __webpack_require__(534) + ");\n    background-repeat: no-repeat;\n    background-position: 0 -60px;\n    right: -30px;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 2), screen and (min-resolution: 192dpi) {\n.starability-checkmark > label:before {\n        background-image: url(" + __webpack_require__(535) + ");\n        background-size: 30px auto;\n}\n}\n.starability-checkmark > input:checked + label:before {\n    display: block;\n    -webkit-animation-name: checkmark;\n            animation-name: checkmark;\n    -webkit-animation-duration: .7s;\n            animation-duration: .7s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n}\n", ""]);

// exports


/***/ }),

/***/ 652:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.button[data-v-d1d3d454] {\n  margin: 5px 0 0;\n}\np[data-v-d1d3d454] {\n  margin-bottom: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(794)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(564),
  /* template */
  __webpack_require__(750),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-rating/src/Rating.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Rating.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d5cdb77", Component.options)
  } else {
    hotAPI.reload("data-v-7d5cdb77", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('fieldset', {
    class: [("starability-" + _vm.kind), 'rating']
  }, [(_vm.legend) ? _c('legend', [_vm._v(_vm._s(_vm.legend))]) : _vm._e(), _vm._v(" "), _vm._l((_vm.items), function(item, index) {
    return [_c('input', {
      attrs: {
        "type": "radio",
        "id": _vm.uuid(index),
        "name": "rating"
      },
      domProps: {
        "value": item.value,
        "checked": _vm.hasChecked(index)
      },
      on: {
        "change": function($event) {
          _vm.change($event)
        }
      }
    }), _vm._v(" "), _c('label', {
      staticClass: "touchable",
      attrs: {
        "for": _vm.uuid(index),
        "title": item.title || ''
      }
    }, [_vm._v(_vm._s(item.label || ''))])]
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7d5cdb77", module.exports)
  }
}

/***/ }),

/***/ 762:
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
  }, [_vm._v("Sugarcoated rating.")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Accessible to everyone.")]), _vm._v(" "), _c('div', {
    staticClass: "block styles-box"
  }, [_c('form', [_c('rating', {
    attrs: {
      "items": _vm.items,
      "legend": "Default star rating:"
    }
  })], 1), _vm._v(" "), _c('form', [_c('rating', {
    attrs: {
      "kind": "slot",
      "items": _vm.items,
      "legend": "Slot machine rating:",
      "value": 1
    }
  })], 1), _vm._v(" "), _c('form', [_c('rating', {
    attrs: {
      "kind": "grow",
      "items": _vm.items,
      "legend": "Growing star rating:",
      "value": 2
    }
  })], 1), _vm._v(" "), _c('form', [_c('rating', {
    attrs: {
      "kind": "growRotate",
      "items": _vm.items,
      "legend": "Growing & rotating star rating:",
      "value": 3
    }
  })], 1), _vm._v(" "), _c('form', [_c('rating', {
    attrs: {
      "kind": "fade",
      "items": _vm.items,
      "legend": "Fading star rating:",
      "value": 4
    }
  })], 1), _vm._v(" "), _c('form', [_c('rating', {
    attrs: {
      "kind": "checkmark",
      "items": _vm.items,
      "legend": "Checkmark rating:",
      "value": 5
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-6"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Dynamics")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('form', [_c('rating', {
    attrs: {
      "items": _vm.items,
      "legend": "Default star rating:",
      "value": _vm.value
    },
    on: {
      "change": _vm.update
    }
  })], 1), _vm._v(" "), _c('p', [_vm._v("\n            " + _vm._s(_vm.value) + "\n          ")])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d1d3d454", module.exports)
  }
}

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(644);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("ccf944ea", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7d5cdb77\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Rating.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7d5cdb77\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Rating.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(652);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("04f11cb2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d1d3d454\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Rating.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d1d3d454\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Rating.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvUmF0aW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L3N0YXJhYmlsaXR5L3N0YXJhYmlsaXR5LWltYWdlcy9pY29ucy5wbmciLCJ3ZWJwYWNrOi8vLy4vfi9zdGFyYWJpbGl0eS9zdGFyYWJpbGl0eS1pbWFnZXMvaWNvbnNAMngucG5nIiwid2VicGFjazovLy8uL34vc3RhcmFiaWxpdHkvc3RhcmFiaWxpdHktaW1hZ2VzL2ljb25zLWNoZWNrbWFyay5wbmciLCJ3ZWJwYWNrOi8vLy4vfi9zdGFyYWJpbGl0eS9zdGFyYWJpbGl0eS1pbWFnZXMvaWNvbnMtY2hlY2ttYXJrQDJ4LnBuZyIsIndlYnBhY2s6Ly8vUmF0aW5nLnZ1ZSIsIndlYnBhY2s6Ly8vUmF0aW5nLnZ1ZT85Mzk4Iiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLXJhdGluZy9zcmMvUmF0aW5nLnZ1ZT9mOGI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9SYXRpbmcudnVlPzBkZTgiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtcmF0aW5nL3NyYy9SYXRpbmcudnVlIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLXJhdGluZy9zcmMvUmF0aW5nLnZ1ZT81NWRlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9SYXRpbmcudnVlPzliNjUiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtcmF0aW5nL3NyYy9SYXRpbmcudnVlP2Y2MTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL1JhdGluZy52dWU/OWUwMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBLHVCQUE0Szs7QUFFNUs7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDL0JBLDZFOzs7Ozs7O0FDQUEsZ0Y7Ozs7Ozs7QUNBQSx1Rjs7Ozs7OztBQ0FBLDBGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDV0E7Ozs7WUFHQTs7WUFFQTs7ZUFFQTs7QUFIQTs7WUFLQTtnQkFFQTtBQUhBOztZQUtBO2VBQ0E7OzRGQUlBOztBQU5BO0FBVkE7O3dCQWlCQTs7cUJBR0E7QUFGQTtBQUlBOzs7OytCQUVBO2dEQUNBO0FBRUE7MkNBQ0E7eUNBQ0E7QUFFQTsrQkFDQTt5Q0FDQTtnQ0FDQTtBQUdBO0FBZEE7Ozs0QkFnQkE7d0JBQ0E7QUFFQTtBQUpBO0FBdkNBLEU7Ozs7Ozs7Ozs7Ozs7O0FDc0NBOzs7Ozs7OztBQUtBO0FBSEE7O3dCQUlBOzthQUVBOztlQUdBO2VBRUE7QUFIQSxPQURBO2VBTUE7ZUFFQTtBQUhBO2VBS0E7ZUFFQTtBQUhBO2VBS0E7ZUFFQTtBQUhBO2VBS0E7ZUFJQTtBQUxBO0FBbkJBO0FBMEJBOzs7O2lDQUVBO21CQUNBO0FBR0E7QUFMQTs7QUFqQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQ0E7OztBQUdBO0FBQ0EsK0NBQWdELG1CQUFtQix1QkFBdUIsaUJBQWlCLHFCQUFxQixlQUFlLGlCQUFpQixHQUFHLDhCQUE4Qix5QkFBeUIsMEJBQTBCLGlCQUFpQixHQUFHLDJGQUEyRixtQ0FBbUMsR0FBRyw0Q0FBNEMsbUNBQW1DLEdBQUcsOEJBQThCLHlCQUF5Qiw0QkFBNEIsbUJBQW1CLGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQiw4REFBeUYsbUNBQW1DLEdBQUcsOEZBQThGLDhCQUE4QixrRUFBZ0cscUNBQXFDLEdBQUcsR0FBRyxxQkFBcUIsbUJBQW1CLHVCQUF1QixpQkFBaUIscUJBQXFCLGVBQWUsaUJBQWlCLEdBQUcsNkJBQTZCLHlCQUF5QiwwQkFBMEIsaUJBQWlCLEdBQUcseUZBQXlGLG1DQUFtQyxHQUFHLDJDQUEyQyxtQ0FBbUMsR0FBRyw2QkFBNkIseUJBQXlCLDRCQUE0QixtQkFBbUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsc0JBQXNCLDhEQUF5RixtQ0FBbUMsR0FBRyw4RkFBOEYsNkJBQTZCLGtFQUFnRyxxQ0FBcUMsR0FBRyxHQUFHLHFJQUFxSSwwQ0FBMEMsR0FBRywyQkFBMkIsTUFBTSxxQ0FBcUMscUNBQXFDLEdBQUcsT0FBTyxxQ0FBcUMscUNBQXFDLGlCQUFpQixHQUFHLFFBQVEscUNBQXFDLHFDQUFxQyxpQkFBaUIsR0FBRyxHQUFHLG1CQUFtQixNQUFNLHFDQUFxQyxxQ0FBcUMsR0FBRyxPQUFPLHFDQUFxQyxxQ0FBcUMsaUJBQWlCLEdBQUcsUUFBUSxxQ0FBcUMscUNBQXFDLGlCQUFpQixHQUFHLEdBQUcscUJBQXFCLG1CQUFtQix1QkFBdUIsaUJBQWlCLHFCQUFxQixlQUFlLGlCQUFpQixHQUFHLDZCQUE2Qix5QkFBeUIsMEJBQTBCLGlCQUFpQixHQUFHLHlGQUF5RixtQ0FBbUMsR0FBRywyQ0FBMkMsbUNBQW1DLEdBQUcsNkJBQTZCLHlCQUF5Qiw0QkFBNEIsbUJBQW1CLGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQiw4REFBeUYsbUNBQW1DLEdBQUcsOEZBQThGLDZCQUE2QixrRUFBZ0cscUNBQXFDLEdBQUcsR0FBRyxvQ0FBb0Msb0JBQW9CLHlCQUF5QixtQkFBbUIsa0JBQWtCLG1CQUFtQiw4REFBeUYsbUNBQW1DLGdCQUFnQixHQUFHLDhGQUE4RixvQ0FBb0Msa0VBQWdHLHFDQUFxQyxHQUFHLEdBQUcsb0RBQW9ELG1DQUFtQyxxQkFBcUIscUNBQXFDLHFDQUFxQyxtQ0FBbUMsbUNBQW1DLDRDQUE0Qyw0Q0FBNEMsR0FBRyxrQ0FBa0MsTUFBTSxrREFBa0Qsa0RBQWtELEdBQUcsT0FBTyxtREFBbUQsbURBQW1ELGlCQUFpQixHQUFHLFFBQVEsa0RBQWtELGtEQUFrRCxpQkFBaUIsR0FBRyxHQUFHLDBCQUEwQixNQUFNLGtEQUFrRCxrREFBa0QsR0FBRyxPQUFPLG1EQUFtRCxtREFBbUQsaUJBQWlCLEdBQUcsUUFBUSxrREFBa0Qsa0RBQWtELGlCQUFpQixHQUFHLEdBQUcsMkJBQTJCLG1CQUFtQix1QkFBdUIsaUJBQWlCLHFCQUFxQixlQUFlLGlCQUFpQixHQUFHLG1DQUFtQyx5QkFBeUIsMEJBQTBCLGlCQUFpQixHQUFHLHFHQUFxRyxtQ0FBbUMsR0FBRyxpREFBaUQsbUNBQW1DLEdBQUcsbUNBQW1DLHlCQUF5Qiw0QkFBNEIsbUJBQW1CLGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQiw4REFBeUYsbUNBQW1DLEdBQUcsOEZBQThGLG1DQUFtQyxrRUFBZ0cscUNBQXFDLEdBQUcsR0FBRywwQ0FBMEMsb0JBQW9CLHlCQUF5QixtQkFBbUIsa0JBQWtCLG1CQUFtQiw4REFBeUYsbUNBQW1DLGdCQUFnQixHQUFHLDhGQUE4RiwwQ0FBMEMsa0VBQWdHLHFDQUFxQyxHQUFHLEdBQUcsMERBQTBELG1DQUFtQyxxQkFBcUIscUNBQXFDLHFDQUFxQywwQ0FBMEMsMENBQTBDLDRDQUE0Qyw0Q0FBNEMsR0FBRywyQkFBMkIsTUFBTSwwQ0FBMEMsMENBQTBDLEdBQUcsT0FBTyxvQkFBb0IsR0FBRyxRQUFRLDhCQUE4Qiw4QkFBOEIsaUJBQWlCLEdBQUcsR0FBRyxtQkFBbUIsTUFBTSwwQ0FBMEMsMENBQTBDLEdBQUcsT0FBTyxvQkFBb0IsR0FBRyxRQUFRLDhCQUE4Qiw4QkFBOEIsaUJBQWlCLEdBQUcsR0FBRyxxQkFBcUIsbUJBQW1CLHVCQUF1QixpQkFBaUIscUJBQXFCLGVBQWUsaUJBQWlCLEdBQUcsNkJBQTZCLHlCQUF5QiwwQkFBMEIsaUJBQWlCLEdBQUcseUZBQXlGLG1DQUFtQyxHQUFHLDJDQUEyQyxtQ0FBbUMsR0FBRyw2QkFBNkIseUJBQXlCLDRCQUE0QixtQkFBbUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsc0JBQXNCLDhEQUF5RixtQ0FBbUMsR0FBRyw4RkFBOEYsNkJBQTZCLGtFQUFnRyxxQ0FBcUMsR0FBRyxHQUFHLG9DQUFvQyxvQkFBb0IseUJBQXlCLG1CQUFtQixrQkFBa0IsbUJBQW1CLDhEQUF5RixtQ0FBbUMsbUNBQW1DLG1CQUFtQixHQUFHLDhGQUE4RixvQ0FBb0Msa0VBQWdHLHFDQUFxQyxHQUFHLEdBQUcsb0RBQW9ELHFCQUFxQixtQ0FBbUMsbUNBQW1DLHFDQUFxQyxxQ0FBcUMsNENBQTRDLDRDQUE0QyxHQUFHLGdDQUFnQyxNQUFNLDJDQUEyQywyQ0FBMkMsR0FBRyxPQUFPLGlCQUFpQixHQUFHLE9BQU8sOEJBQThCLDhCQUE4QixHQUFHLE9BQU8saUJBQWlCLEdBQUcsUUFBUSxpQkFBaUIsR0FBRyxHQUFHLHdCQUF3QixNQUFNLDJDQUEyQywyQ0FBMkMsR0FBRyxPQUFPLGlCQUFpQixHQUFHLE9BQU8sOEJBQThCLDhCQUE4QixHQUFHLE9BQU8saUJBQWlCLEdBQUcsUUFBUSxpQkFBaUIsR0FBRyxHQUFHLDBCQUEwQixtQkFBbUIsdUJBQXVCLGlCQUFpQixxQkFBcUIsZUFBZSxpQkFBaUIsR0FBRyxrQ0FBa0MseUJBQXlCLDBCQUEwQixpQkFBaUIsR0FBRyxtR0FBbUcsbUNBQW1DLEdBQUcsZ0RBQWdELG1DQUFtQyxHQUFHLGtDQUFrQyx5QkFBeUIsNEJBQTRCLG1CQUFtQixrQkFBa0IsbUJBQW1CLHlCQUF5QixzQkFBc0IsOERBQW1HLG1DQUFtQyxHQUFHLDhGQUE4RixrQ0FBa0Msa0VBQTBHLHFDQUFxQyxHQUFHLEdBQUcsa0NBQWtDLHVCQUF1QixpQkFBaUIsR0FBRyx5Q0FBeUMsb0JBQW9CLHlCQUF5QixtQkFBbUIsa0JBQWtCLG1CQUFtQiw4REFBbUcsbUNBQW1DLG1DQUFtQyxtQkFBbUIsR0FBRyw4RkFBOEYseUNBQXlDLGtFQUEwRyxxQ0FBcUMsR0FBRyxHQUFHLHlEQUF5RCxxQkFBcUIsd0NBQXdDLHdDQUF3QyxzQ0FBc0Msc0NBQXNDLDRDQUE0Qyw0Q0FBNEMsR0FBRzs7QUFFdHpZOzs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EscURBQXNELG9CQUFvQixHQUFHLHNCQUFzQix3QkFBd0IsR0FBRzs7QUFFOUg7Ozs7Ozs7OztBQ05BO0FBQ0EsdUJBQXVKOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUMvQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNsQ0EsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDOUVBOztBQUVBO0FBQ0EscUNBQXNLO0FBQ3RLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBZ0cscUVBQXFFO0FBQ3JLLHlHQUF5RyxxRUFBcUU7QUFDOUs7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0EscUNBQWlOO0FBQ2pOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0SUFBNEksb0VBQW9FO0FBQ2hOLHFKQUFxSixvRUFBb0U7QUFDek47QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImpzLzExLmYxZTAyMTJhZGI5ZmEwMWQzM2ZmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1kMWQzZDQ1NFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1JhdGluZy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUmF0aW5nLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZDFkM2Q0NTRcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUmF0aW5nLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi1kMWQzZDQ1NFwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvUmF0aW5nLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFJhdGluZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZDFkM2Q0NTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1kMWQzZDQ1NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvUmF0aW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL2J1aWxkcy9pbWFnZXMvaWNvbnMucG5nPzkwYmY5YWI5NWQ0MmNmMzU3NTFjNTY4Y2MxMWQ4OTIzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0YXJhYmlsaXR5L3N0YXJhYmlsaXR5LWltYWdlcy9pY29ucy5wbmdcbi8vIG1vZHVsZSBpZCA9IDE2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9idWlsZHMvaW1hZ2VzL2ljb25zQDJ4LnBuZz83YTg1ZTRjNDBjOWJkZWI4N2VhNGJlN2JiYzY2YjY3ZVwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdGFyYWJpbGl0eS9zdGFyYWJpbGl0eS1pbWFnZXMvaWNvbnNAMngucG5nXG4vLyBtb2R1bGUgaWQgPSAxNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSIsIm1vZHVsZS5leHBvcnRzID0gXCIvYnVpbGRzL2ltYWdlcy9pY29ucy1jaGVja21hcmsucG5nPzk5ZGRkZmUzYzJiNzVkYjgyNjNhYzA3ZDEzMzk5ZjlmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0YXJhYmlsaXR5L3N0YXJhYmlsaXR5LWltYWdlcy9pY29ucy1jaGVja21hcmsucG5nXG4vLyBtb2R1bGUgaWQgPSA1MzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSIsIm1vZHVsZS5leHBvcnRzID0gXCIvYnVpbGRzL2ltYWdlcy9pY29ucy1jaGVja21hcmtAMngucG5nPzZmNDkxOWViNjYwZTM3YjhhMjlhZWVmZDUyNjE3ODY2XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0YXJhYmlsaXR5L3N0YXJhYmlsaXR5LWltYWdlcy9pY29ucy1jaGVja21hcmtAMngucG5nXG4vLyBtb2R1bGUgaWQgPSA1MzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSIsIjx0ZW1wbGF0ZT5cbiAgPGZpZWxkc2V0IDpjbGFzcz1cIltgc3RhcmFiaWxpdHktJHtraW5kfWAsICdyYXRpbmcnXVwiPlxuICAgIDxsZWdlbmQgdi1pZj1cImxlZ2VuZFwiPnt7IGxlZ2VuZCB9fTwvbGVnZW5kPlxuICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gaXRlbXNcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiA6aWQ9XCJ1dWlkKGluZGV4KVwiIG5hbWU9XCJyYXRpbmdcIiA6dmFsdWU9XCJpdGVtLnZhbHVlXCIgOmNoZWNrZWQ9XCJoYXNDaGVja2VkKGluZGV4KVwiIEBjaGFuZ2U9XCJjaGFuZ2UoJGV2ZW50KVwiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwidG91Y2hhYmxlXCIgOmZvcj1cInV1aWQoaW5kZXgpXCIgOnRpdGxlPVwiaXRlbS50aXRsZSB8fCAnJ1wiPnt7IGl0ZW0ubGFiZWwgfHwgJycgfX08L2xhYmVsPlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvZmllbGRzZXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIGxlZ2VuZDogU3RyaW5nLFxuICAgIGl0ZW1zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IChbXSlcbiAgICB9LFxuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAtMVxuICAgIH0sXG4gICAga2luZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2Jhc2ljJyxcbiAgICAgIHZhbGlkYXRvcjogKHZhbCkgPT4gWydiYXNpYycsICdzbG90JywgJ2dyb3cnLCAnZ3Jvd1JvdGF0ZScsICdmYWRlJywgJ2NoZWNrbWFyayddLmluZGV4T2YodmFsKSA+IC0xXG4gICAgfVxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RlZDogdGhpcy52YWx1ZVxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgdXVpZCAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBgcmF0aW5nLSR7dGhpcy5fdWlkfS1pdGVtLSR7aW5kZXh9YFxuICAgIH0sXG5cbiAgICBoYXNDaGVja2VkIChpbmRleCkge1xuICAgICAgcmV0dXJuIHRoaXMuY291bnQgLSBpbmRleCA9PT0gdGhpcy5zZWxlY3RlZFxuICAgIH0sXG5cbiAgICBjaGFuZ2UgKGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBlLnRhcmdldC52YWx1ZSA+Pj4gMFxuICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdGhpcy5zZWxlY3RlZClcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBjb3VudCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGhcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgXCJ+c3RhcmFiaWxpdHkvc3RhcmFiaWxpdHktc2Nzcy92YXJpYWJsZXNcIjtcblxuJGFjY2Vzc2libGUtaGlnaGxpZ2h0OiBmYWxzZTtcblxuJGltYWdlLWRpcmVjdG9yeS1wYXRoOiAnfnN0YXJhYmlsaXR5L3N0YXJhYmlsaXR5LWltYWdlcyc7XG5cbkBtaXhpbiBzdGFyYWJpbGl0eS1iYXNlKCRiZy1pbWFnZS1wYXRoOiAnaWNvbnMnKSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAkc3Rhci1jb3VudCAqICRzdGFyLXNpemU7XG4gIG1pbi1oZWlnaHQ6IDIgKiAkc3Rhci1zaXplO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG5cbiAgPiBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi1yaWdodDogLTEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsLFxuICA+IGlucHV0OmZvY3VzIH4gbGFiZWwge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgKC0kc3Rhci1zaXplKTtcbiAgfVxuXG4gIEBpZiAoJGhvdmVyLWVuYWJsZWQpIHtcbiAgICA+IGlucHV0OmhvdmVyIH4gbGFiZWwge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAoLSRzdGFyLXNpemUpO1xuICAgIH1cbiAgfVxuXG4gIEBpZiAoJGFjY2Vzc2libGUtaGlnaGxpZ2h0KSB7XG4gICAgPiBpbnB1dDpmb2N1cyArIGxhYmVsIHtcbiAgICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgIzk5OTtcbiAgICB9XG4gIH1cblxuICA+IGxhYmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogJHN0YXItc2l6ZTtcbiAgICBoZWlnaHQ6ICRzdGFyLXNpemU7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyN7JGltYWdlLWRpcmVjdG9yeS1wYXRofS8jeyRiZy1pbWFnZS1wYXRofS5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnI3skaW1hZ2UtZGlyZWN0b3J5LXBhdGh9LyN7JGJnLWltYWdlLXBhdGh9QDJ4LnBuZycpO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiAkc3Rhci1zaXplIGF1dG87XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBzdGFyYWJpbGl0eS1hbmltYXRpb24tYmFzZSgkYmctaW1hZ2UtcGF0aDogJ2ljb25zJykge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6ICcgJztcbiAgd2lkdGg6ICRzdGFyLXNpemU7XG4gIGhlaWdodDogICRzdGFyLXNpemU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnI3skaW1hZ2UtZGlyZWN0b3J5LXBhdGh9LyN7JGJnLWltYWdlLXBhdGh9LnBuZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcjeyRpbWFnZS1kaXJlY3RvcnktcGF0aH0vI3skYmctaW1hZ2UtcGF0aH1AMngucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAkc3Rhci1zaXplIGF1dG87XG4gIH1cbn1cblxuLnN0YXJhYmlsaXR5LWJhc2ljIHtcbiAgQGluY2x1ZGUgc3RhcmFiaWxpdHktYmFzZTtcbn1cblxuLnN0YXJhYmlsaXR5LXNsb3Qge1xuICBAaW5jbHVkZSBzdGFyYWJpbGl0eS1iYXNlO1xuXG4gID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsLFxuICA+IGlucHV0OmhvdmVyIH4gbGFiZWwsXG4gID4gaW5wdXQ6Zm9jdXMgfiBsYWJlbCB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAuN3M7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBncm93IHtcblxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLDEpO1xuICB9XG5cbiAgOTklIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDQsNCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwxKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5zdGFyYWJpbGl0eS1ncm93IHtcbiAgQGluY2x1ZGUgc3RhcmFiaWxpdHktYmFzZTtcblxuICA+IGxhYmVsOmJlZm9yZSB7XG4gICAgQGluY2x1ZGUgc3RhcmFiaWxpdHktYW5pbWF0aW9uLWJhc2U7XG4gICAgYm90dG9tOiAwO1xuICB9XG5cbiAgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwICgtJHN0YXItc2l6ZSk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBhbmltYXRpb24tbmFtZTogZ3JvdztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGdyb3ctcm90YXRlIHtcblxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLDEpIHJvdGF0ZSgwZGVnKTtcbiAgfVxuXG4gIDk5JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSg0LDQpIHJvdGF0ZSg5MGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwxKSByb3RhdGUoMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4uc3RhcmFiaWxpdHktZ3Jvd1JvdGF0ZSB7XG4gIEBpbmNsdWRlIHN0YXJhYmlsaXR5LWJhc2U7XG5cbiAgPiBsYWJlbDpiZWZvcmUge1xuICAgIEBpbmNsdWRlIHN0YXJhYmlsaXR5LWFuaW1hdGlvbi1iYXNlO1xuICAgIGJvdHRvbTogMDtcbiAgfVxuXG4gID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAoLSRzdGFyLXNpemUpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGdyb3ctcm90YXRlO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZSB7XG5cbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgkc3Rhci1zaXplKTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMTAwJTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5zdGFyYWJpbGl0eS1mYWRlIHtcbiAgQGluY2x1ZGUgc3RhcmFiaWxpdHktYmFzZTtcblxuICA+IGxhYmVsOmJlZm9yZSB7XG4gICAgQGluY2x1ZGUgc3RhcmFiaWxpdHktYW5pbWF0aW9uLWJhc2U7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAoLSRzdGFyLXNpemUpO1xuICAgIGJvdHRvbTogJHN0YXItc2l6ZTtcbiAgfVxuXG4gID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGNoZWNrbWFyayB7XG5cbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC41ICogJHN0YXItc2l6ZSk7XG4gIH1cblxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLnN0YXJhYmlsaXR5LWNoZWNrbWFyayB7XG4gIEBpbmNsdWRlIHN0YXJhYmlsaXR5LWJhc2UoJ2ljb25zLWNoZWNrbWFyaycpO1xuXG4gID4gbGFiZWwge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gID4gbGFiZWw6YmVmb3JlIHtcbiAgICBAaW5jbHVkZSBzdGFyYWJpbGl0eS1hbmltYXRpb24tYmFzZSgnaWNvbnMtY2hlY2ttYXJrJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAoLTIqJHN0YXItc2l6ZSk7XG4gICAgcmlnaHQ6IC0kc3Rhci1zaXplO1xuICB9XG5cbiAgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBhbmltYXRpb24tbmFtZTogY2hlY2ttYXJrO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjdzO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICB9XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFJhdGluZy52dWU/MDY5OTM0M2EiLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtYW5jZXN0b3JcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudCBpcy02XCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlN1Z2FyY29hdGVkIHJhdGluZy48L2gxPlxuICAgICAgICAgIDxoMiBjbGFzcz1cInN1YnRpdGxlXCI+QWNjZXNzaWJsZSB0byBldmVyeW9uZS48L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9jayBzdHlsZXMtYm94XCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgPHJhdGluZyA6aXRlbXM9XCJpdGVtc1wiIGxlZ2VuZD1cIkRlZmF1bHQgc3RhciByYXRpbmc6XCI+PC9yYXRpbmc+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgPHJhdGluZyBraW5kPVwic2xvdFwiIDppdGVtcz1cIml0ZW1zXCIgbGVnZW5kPVwiU2xvdCBtYWNoaW5lIHJhdGluZzpcIiA6dmFsdWU9XCIxXCI+PC9yYXRpbmc+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgPHJhdGluZyBraW5kPVwiZ3Jvd1wiIDppdGVtcz1cIml0ZW1zXCIgbGVnZW5kPVwiR3Jvd2luZyBzdGFyIHJhdGluZzpcIiA6dmFsdWU9XCIyXCI+PC9yYXRpbmc+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgPHJhdGluZyBraW5kPVwiZ3Jvd1JvdGF0ZVwiIDppdGVtcz1cIml0ZW1zXCIgbGVnZW5kPVwiR3Jvd2luZyAmIHJvdGF0aW5nIHN0YXIgcmF0aW5nOlwiIDp2YWx1ZT1cIjNcIj48L3JhdGluZz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICA8cmF0aW5nIGtpbmQ9XCJmYWRlXCIgOml0ZW1zPVwiaXRlbXNcIiBsZWdlbmQ9XCJGYWRpbmcgc3RhciByYXRpbmc6XCIgOnZhbHVlPVwiNFwiPjwvcmF0aW5nPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgIDxyYXRpbmcga2luZD1cImNoZWNrbWFya1wiIDppdGVtcz1cIml0ZW1zXCIgbGVnZW5kPVwiQ2hlY2ttYXJrIHJhdGluZzpcIiA6dmFsdWU9XCI1XCI+PC9yYXRpbmc+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1wYXJlbnQgaXMtNlwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94XCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5EeW5hbWljczwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrXCI+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgPHJhdGluZyA6aXRlbXM9XCJpdGVtc1wiIGxlZ2VuZD1cIkRlZmF1bHQgc3RhciByYXRpbmc6XCIgOnZhbHVlPVwidmFsdWVcIiBAY2hhbmdlPVwidXBkYXRlXCI+PC9yYXRpbmc+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge3sgdmFsdWUgfX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBSYXRpbmcgZnJvbSAndnVlLWJ1bG1hLXJhdGluZydcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgUmF0aW5nXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiAzLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnNSBTdGFycycsXG4gICAgICAgICAgdmFsdWU6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnNCBTdGFycycsXG4gICAgICAgICAgdmFsdWU6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnMyBTdGFycycsXG4gICAgICAgICAgdmFsdWU6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnMiBTdGFycycsXG4gICAgICAgICAgdmFsdWU6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAnMSBTdGFyJyxcbiAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGUgKHZhbCkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbFxuICAgIH1cbiAgfVxuXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLmJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4IDAgMDtcbn1cbnAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBSYXRpbmcudnVlPzE3ZTQxZGE4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc3RhcmFiaWxpdHktYmFzaWMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTUwcHg7XFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLnN0YXJhYmlsaXR5LWJhc2ljID4gaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1yaWdodDogLTEwMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi5zdGFyYWJpbGl0eS1iYXNpYyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCxcXG4gIC5zdGFyYWJpbGl0eS1iYXNpYyA+IGlucHV0OmZvY3VzIH4gbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zMHB4O1xcbn1cXG4uc3RhcmFiaWxpdHktYmFzaWMgPiBpbnB1dDpob3ZlciB+IGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMzBweDtcXG59XFxuLnN0YXJhYmlsaXR5LWJhc2ljID4gbGFiZWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcInN0YXJhYmlsaXR5L3N0YXJhYmlsaXR5LWltYWdlcy9pY29ucy5wbmdcIikgKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSB7XFxuLnN0YXJhYmlsaXR5LWJhc2ljID4gbGFiZWwge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcInN0YXJhYmlsaXR5L3N0YXJhYmlsaXR5LWltYWdlcy9pY29uc0AyeC5wbmdcIikgKyBcIik7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggYXV0bztcXG59XFxufVxcbi5zdGFyYWJpbGl0eS1zbG90IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgbWluLWhlaWdodDogNjBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5zdGFyYWJpbGl0eS1zbG90ID4gaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1yaWdodDogLTEwMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi5zdGFyYWJpbGl0eS1zbG90ID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsLFxcbiAgLnN0YXJhYmlsaXR5LXNsb3QgPiBpbnB1dDpmb2N1cyB+IGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMzBweDtcXG59XFxuLnN0YXJhYmlsaXR5LXNsb3QgPiBpbnB1dDpob3ZlciB+IGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMzBweDtcXG59XFxuLnN0YXJhYmlsaXR5LXNsb3QgPiBsYWJlbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwic3RhcmFiaWxpdHkvc3RhcmFiaWxpdHktaW1hZ2VzL2ljb25zLnBuZ1wiKSArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpIHtcXG4uc3RhcmFiaWxpdHktc2xvdCA+IGxhYmVsIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCJzdGFyYWJpbGl0eS9zdGFyYWJpbGl0eS1pbWFnZXMvaWNvbnNAMngucG5nXCIpICsgXCIpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzMHB4IGF1dG87XFxufVxcbn1cXG4uc3RhcmFiaWxpdHktc2xvdCA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCxcXG4gIC5zdGFyYWJpbGl0eS1zbG90ID4gaW5wdXQ6aG92ZXIgfiBsYWJlbCxcXG4gIC5zdGFyYWJpbGl0eS1zbG90ID4gaW5wdXQ6Zm9jdXMgfiBsYWJlbCB7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gLjdzO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZ3JvdyB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG59XFxuOTklIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDQsIDQpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoNCwgNCk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxufVxcbkBrZXlmcmFtZXMgZ3JvdyB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG59XFxuOTklIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDQsIDQpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoNCwgNCk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxufVxcbi5zdGFyYWJpbGl0eS1ncm93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgbWluLWhlaWdodDogNjBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5zdGFyYWJpbGl0eS1ncm93ID4gaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1yaWdodDogLTEwMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi5zdGFyYWJpbGl0eS1ncm93ID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsLFxcbiAgLnN0YXJhYmlsaXR5LWdyb3cgPiBpbnB1dDpmb2N1cyB+IGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMzBweDtcXG59XFxuLnN0YXJhYmlsaXR5LWdyb3cgPiBpbnB1dDpob3ZlciB+IGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMzBweDtcXG59XFxuLnN0YXJhYmlsaXR5LWdyb3cgPiBsYWJlbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwic3RhcmFiaWxpdHkvc3RhcmFiaWxpdHktaW1hZ2VzL2ljb25zLnBuZ1wiKSArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpIHtcXG4uc3RhcmFiaWxpdHktZ3JvdyA+IGxhYmVsIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCJzdGFyYWJpbGl0eS9zdGFyYWJpbGl0eS1pbWFnZXMvaWNvbnNAMngucG5nXCIpICsgXCIpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzMHB4IGF1dG87XFxufVxcbn1cXG4uc3RhcmFiaWxpdHktZ3JvdyA+IGxhYmVsOmJlZm9yZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyByZXF1aXJlKFwic3RhcmFiaWxpdHkvc3RhcmFiaWxpdHktaW1hZ2VzL2ljb25zLnBuZ1wiKSArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYm90dG9tOiAwO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSkge1xcbi5zdGFyYWJpbGl0eS1ncm93ID4gbGFiZWw6YmVmb3JlIHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCJzdGFyYWJpbGl0eS9zdGFyYWJpbGl0eS1pbWFnZXMvaWNvbnNAMngucG5nXCIpICsgXCIpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzMHB4IGF1dG87XFxufVxcbn1cXG4uc3RhcmFiaWxpdHktZ3JvdyA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zMHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGdyb3c7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGdyb3c7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBncm93LXJvdGF0ZSB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgcm90YXRlKDBkZWcpO1xcbn1cXG45OSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoNCwgNCkgcm90YXRlKDkwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDQsIDQpIHJvdGF0ZSg5MGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgcm90YXRlKDBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG59XFxuQGtleWZyYW1lcyBncm93LXJvdGF0ZSB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgcm90YXRlKDBkZWcpO1xcbn1cXG45OSUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoNCwgNCkgcm90YXRlKDkwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDQsIDQpIHJvdGF0ZSg5MGRlZyk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgcm90YXRlKDBkZWcpO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG59XFxuLnN0YXJhYmlsaXR5LWdyb3dSb3RhdGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTUwcHg7XFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLnN0YXJhYmlsaXR5LWdyb3dSb3RhdGUgPiBpbnB1dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTAwJTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLnN0YXJhYmlsaXR5LWdyb3dSb3RhdGUgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWwsXFxuICAuc3RhcmFiaWxpdHktZ3Jvd1JvdGF0ZSA+IGlucHV0OmZvY3VzIH4gbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zMHB4O1xcbn1cXG4uc3RhcmFiaWxpdHktZ3Jvd1JvdGF0ZSA+IGlucHV0OmhvdmVyIH4gbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zMHB4O1xcbn1cXG4uc3RhcmFiaWxpdHktZ3Jvd1JvdGF0ZSA+IGxhYmVsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCJzdGFyYWJpbGl0eS9zdGFyYWJpbGl0eS1pbWFnZXMvaWNvbnMucG5nXCIpICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSkge1xcbi5zdGFyYWJpbGl0eS1ncm93Um90YXRlID4gbGFiZWwge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcInN0YXJhYmlsaXR5L3N0YXJhYmlsaXR5LWltYWdlcy9pY29uc0AyeC5wbmdcIikgKyBcIik7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggYXV0bztcXG59XFxufVxcbi5zdGFyYWJpbGl0eS1ncm93Um90YXRlID4gbGFiZWw6YmVmb3JlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnICc7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCJzdGFyYWJpbGl0eS9zdGFyYWJpbGl0eS1pbWFnZXMvaWNvbnMucG5nXCIpICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBib3R0b206IDA7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSB7XFxuLnN0YXJhYmlsaXR5LWdyb3dSb3RhdGUgPiBsYWJlbDpiZWZvcmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcInN0YXJhYmlsaXR5L3N0YXJhYmlsaXR5LWltYWdlcy9pY29uc0AyeC5wbmdcIikgKyBcIik7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggYXV0bztcXG59XFxufVxcbi5zdGFyYWJpbGl0eS1ncm93Um90YXRlID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTMwcHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZ3Jvdy1yb3RhdGU7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGdyb3ctcm90YXRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XFxufVxcbjgwJSB7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxufVxcbjEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGZhZGUge1xcbjAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpO1xcbn1cXG44MCUge1xcbiAgICBvcGFjaXR5OiAxMDAlO1xcbn1cXG4xMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG59XFxuLnN0YXJhYmlsaXR5LWZhZGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTUwcHg7XFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLnN0YXJhYmlsaXR5LWZhZGUgPiBpbnB1dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTAwJTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuLnN0YXJhYmlsaXR5LWZhZGUgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWwsXFxuICAuc3RhcmFiaWxpdHktZmFkZSA+IGlucHV0OmZvY3VzIH4gbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zMHB4O1xcbn1cXG4uc3RhcmFiaWxpdHktZmFkZSA+IGlucHV0OmhvdmVyIH4gbGFiZWwge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zMHB4O1xcbn1cXG4uc3RhcmFiaWxpdHktZmFkZSA+IGxhYmVsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCJzdGFyYWJpbGl0eS9zdGFyYWJpbGl0eS1pbWFnZXMvaWNvbnMucG5nXCIpICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSkge1xcbi5zdGFyYWJpbGl0eS1mYWRlID4gbGFiZWwge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcInN0YXJhYmlsaXR5L3N0YXJhYmlsaXR5LWltYWdlcy9pY29uc0AyeC5wbmdcIikgKyBcIik7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggYXV0bztcXG59XFxufVxcbi5zdGFyYWJpbGl0eS1mYWRlID4gbGFiZWw6YmVmb3JlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnICc7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCJzdGFyYWJpbGl0eS9zdGFyYWJpbGl0eS1pbWFnZXMvaWNvbnMucG5nXCIpICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zMHB4O1xcbiAgICBib3R0b206IDMwcHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSB7XFxuLnN0YXJhYmlsaXR5LWZhZGUgPiBsYWJlbDpiZWZvcmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcInN0YXJhYmlsaXR5L3N0YXJhYmlsaXR5LWltYWdlcy9pY29uc0AyeC5wbmdcIikgKyBcIik7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggYXV0bztcXG59XFxufVxcbi5zdGFyYWJpbGl0eS1mYWRlID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGNoZWNrbWFyayB7XFxuMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNXB4KTtcXG59XFxuNjAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuNzAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xcbn1cXG44MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG4xMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxufVxcbkBrZXlmcmFtZXMgY2hlY2ttYXJrIHtcXG4wJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNXB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpO1xcbn1cXG42MCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG43MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XFxufVxcbjgwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbjEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG59XFxuLnN0YXJhYmlsaXR5LWNoZWNrbWFyayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4uc3RhcmFiaWxpdHktY2hlY2ttYXJrID4gaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi1yaWdodDogLTEwMCU7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbi5zdGFyYWJpbGl0eS1jaGVja21hcmsgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWwsXFxuICAuc3RhcmFiaWxpdHktY2hlY2ttYXJrID4gaW5wdXQ6Zm9jdXMgfiBsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTMwcHg7XFxufVxcbi5zdGFyYWJpbGl0eS1jaGVja21hcmsgPiBpbnB1dDpob3ZlciB+IGxhYmVsIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMzBweDtcXG59XFxuLnN0YXJhYmlsaXR5LWNoZWNrbWFyayA+IGxhYmVsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCJzdGFyYWJpbGl0eS9zdGFyYWJpbGl0eS1pbWFnZXMvaWNvbnMtY2hlY2ttYXJrLnBuZ1wiKSArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpIHtcXG4uc3RhcmFiaWxpdHktY2hlY2ttYXJrID4gbGFiZWwge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcInN0YXJhYmlsaXR5L3N0YXJhYmlsaXR5LWltYWdlcy9pY29ucy1jaGVja21hcmtAMngucG5nXCIpICsgXCIpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzMHB4IGF1dG87XFxufVxcbn1cXG4uc3RhcmFiaWxpdHktY2hlY2ttYXJrID4gbGFiZWwge1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICB6LWluZGV4OiAyO1xcbn1cXG4uc3RhcmFiaWxpdHktY2hlY2ttYXJrID4gbGFiZWw6YmVmb3JlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb250ZW50OiAnICc7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIHJlcXVpcmUoXCJzdGFyYWJpbGl0eS9zdGFyYWJpbGl0eS1pbWFnZXMvaWNvbnMtY2hlY2ttYXJrLnBuZ1wiKSArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtNjBweDtcXG4gICAgcmlnaHQ6IC0zMHB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE5MmRwaSkge1xcbi5zdGFyYWJpbGl0eS1jaGVja21hcmsgPiBsYWJlbDpiZWZvcmUge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgcmVxdWlyZShcInN0YXJhYmlsaXR5L3N0YXJhYmlsaXR5LWltYWdlcy9pY29ucy1jaGVja21hcmtAMngucG5nXCIpICsgXCIpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzMHB4IGF1dG87XFxufVxcbn1cXG4uc3RhcmFiaWxpdHktY2hlY2ttYXJrID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBjaGVja21hcms7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGNoZWNrbWFyaztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IC43cztcXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IC43cztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtN2Q1Y2RiNzdcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS1yYXRpbmcvc3JjL1JhdGluZy52dWVcbi8vIG1vZHVsZSBpZCA9IDY0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJ1dHRvbltkYXRhLXYtZDFkM2Q0NTRdIHtcXG4gIG1hcmdpbjogNXB4IDAgMDtcXG59XFxucFtkYXRhLXYtZDFkM2Q0NTRdIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWQxZDNkNDU0XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvUmF0aW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2Q1Y2RiNzdcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SYXRpbmcudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9SYXRpbmcudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTdkNWNkYjc3XFxcIn0hLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUmF0aW5nLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9ub2RlX21vZHVsZXMvdnVlLWJ1bG1hLXJhdGluZy9zcmMvUmF0aW5nLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFJhdGluZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2Q1Y2RiNzdcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03ZDVjZGI3N1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1idWxtYS1yYXRpbmcvc3JjL1JhdGluZy52dWVcbi8vIG1vZHVsZSBpZCA9IDY5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdmaWVsZHNldCcsIHtcbiAgICBjbGFzczogWyhcInN0YXJhYmlsaXR5LVwiICsgX3ZtLmtpbmQpLCAncmF0aW5nJ11cbiAgfSwgWyhfdm0ubGVnZW5kKSA/IF9jKCdsZWdlbmQnLCBbX3ZtLl92KF92bS5fcyhfdm0ubGVnZW5kKSldKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX2woKF92bS5pdGVtcyksIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgcmV0dXJuIFtfYygnaW5wdXQnLCB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcInR5cGVcIjogXCJyYWRpb1wiLFxuICAgICAgICBcImlkXCI6IF92bS51dWlkKGluZGV4KSxcbiAgICAgICAgXCJuYW1lXCI6IFwicmF0aW5nXCJcbiAgICAgIH0sXG4gICAgICBkb21Qcm9wczoge1xuICAgICAgICBcInZhbHVlXCI6IGl0ZW0udmFsdWUsXG4gICAgICAgIFwiY2hlY2tlZFwiOiBfdm0uaGFzQ2hlY2tlZChpbmRleClcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uY2hhbmdlKCRldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0b3VjaGFibGVcIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIFwiZm9yXCI6IF92bS51dWlkKGluZGV4KSxcbiAgICAgICAgXCJ0aXRsZVwiOiBpdGVtLnRpdGxlIHx8ICcnXG4gICAgICB9XG4gICAgfSwgW192bS5fdihfdm0uX3MoaXRlbS5sYWJlbCB8fCAnJykpXSldXG4gIH0pXSwgMilcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtN2Q1Y2RiNzdcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03ZDVjZGI3N1wifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi92dWUtYnVsbWEtcmF0aW5nL3NyYy9SYXRpbmcudnVlXG4vLyBtb2R1bGUgaWQgPSA3NTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1hbmNlc3RvclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50IGlzLTZcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIlN1Z2FyY29hdGVkIHJhdGluZy5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN1YnRpdGxlXCJcbiAgfSwgW192bS5fdihcIkFjY2Vzc2libGUgdG8gZXZlcnlvbmUuXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgc3R5bGVzLWJveFwiXG4gIH0sIFtfYygnZm9ybScsIFtfYygncmF0aW5nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIml0ZW1zXCI6IF92bS5pdGVtcyxcbiAgICAgIFwibGVnZW5kXCI6IFwiRGVmYXVsdCBzdGFyIHJhdGluZzpcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2Zvcm0nLCBbX2MoJ3JhdGluZycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJraW5kXCI6IFwic2xvdFwiLFxuICAgICAgXCJpdGVtc1wiOiBfdm0uaXRlbXMsXG4gICAgICBcImxlZ2VuZFwiOiBcIlNsb3QgbWFjaGluZSByYXRpbmc6XCIsXG4gICAgICBcInZhbHVlXCI6IDFcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdmb3JtJywgW19jKCdyYXRpbmcnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwia2luZFwiOiBcImdyb3dcIixcbiAgICAgIFwiaXRlbXNcIjogX3ZtLml0ZW1zLFxuICAgICAgXCJsZWdlbmRcIjogXCJHcm93aW5nIHN0YXIgcmF0aW5nOlwiLFxuICAgICAgXCJ2YWx1ZVwiOiAyXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZm9ybScsIFtfYygncmF0aW5nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImtpbmRcIjogXCJncm93Um90YXRlXCIsXG4gICAgICBcIml0ZW1zXCI6IF92bS5pdGVtcyxcbiAgICAgIFwibGVnZW5kXCI6IFwiR3Jvd2luZyAmIHJvdGF0aW5nIHN0YXIgcmF0aW5nOlwiLFxuICAgICAgXCJ2YWx1ZVwiOiAzXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZm9ybScsIFtfYygncmF0aW5nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImtpbmRcIjogXCJmYWRlXCIsXG4gICAgICBcIml0ZW1zXCI6IF92bS5pdGVtcyxcbiAgICAgIFwibGVnZW5kXCI6IFwiRmFkaW5nIHN0YXIgcmF0aW5nOlwiLFxuICAgICAgXCJ2YWx1ZVwiOiA0XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZm9ybScsIFtfYygncmF0aW5nJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImtpbmRcIjogXCJjaGVja21hcmtcIixcbiAgICAgIFwiaXRlbXNcIjogX3ZtLml0ZW1zLFxuICAgICAgXCJsZWdlbmRcIjogXCJDaGVja21hcmsgcmF0aW5nOlwiLFxuICAgICAgXCJ2YWx1ZVwiOiA1XG4gICAgfVxuICB9KV0sIDEpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50IGlzLTZcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIkR5bmFtaWNzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2tcIlxuICB9LCBbX2MoJ2Zvcm0nLCBbX2MoJ3JhdGluZycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpdGVtc1wiOiBfdm0uaXRlbXMsXG4gICAgICBcImxlZ2VuZFwiOiBcIkRlZmF1bHQgc3RhciByYXRpbmc6XCIsXG4gICAgICBcInZhbHVlXCI6IF92bS52YWx1ZVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IF92bS51cGRhdGVcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW192bS5fdihcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS52YWx1ZSkgKyBcIlxcbiAgICAgICAgICBcIildKV0pXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZDFkM2Q0NTRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1kMWQzZDQ1NFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL1JhdGluZy52dWVcbi8vIG1vZHVsZSBpZCA9IDc2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDExIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03ZDVjZGI3N1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUmF0aW5nLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJjY2Y5NDRlYVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2Q1Y2RiNzdcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1JhdGluZy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTdkNWNkYjc3XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SYXRpbmcudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03ZDVjZGI3N1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL34vdnVlLWJ1bG1hLXJhdGluZy9zcmMvUmF0aW5nLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMTEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZDFkM2Q0NTRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SYXRpbmcudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIwNGYxMWNiMlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1kMWQzZDQ1NFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1JhdGluZy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZDFkM2Q0NTRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SYXRpbmcudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1kMWQzZDQ1NFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL1JhdGluZy52dWVcbi8vIG1vZHVsZSBpZCA9IDgwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDExIl0sInNvdXJjZVJvb3QiOiIifQ==
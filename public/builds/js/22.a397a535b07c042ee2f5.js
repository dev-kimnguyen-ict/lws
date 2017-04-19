webpackJsonp([22],{

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(788)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(595),
  /* template */
  __webpack_require__(739),
  /* scopeId */
  "data-v-5c639b1a",
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/components/Slider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Slider.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c639b1a", Component.options)
  } else {
    hotAPI.reload("data-v-5c639b1a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 565:
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

exports.default = {
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1
    },
    step: {
      type: Number,
      default: 0.01
    },
    value: {
      type: Number,
      default: 0
    },
    type: String,
    name: String,
    size: String,
    isFullwidth: Boolean,
    disabled: Boolean,
    // orientation:
    vertical: Boolean
  },

  data: function data() {
    return {
      realValue: this.value
    };
  },
  beforeMount: function beforeMount() {
    if (this.max < this.min) {
      throw 'Unexpected range setting: Maximum cannot be less than minimum';
    }

    this.update(this.value);
  },
  mounted: function mounted() {
    this.$el.style.setProperty('--low', this.low);
    this.$el.style.setProperty('--high', this.high);
  },


  watch: {
    realValue: function realValue(newVal, oldVal) {
      if (Number(newVal) !== Number(oldVal)) {
        this.$el.style.setProperty('--high', this.high);
        this.$emit('change', newVal);
      }
    },
    value: function value(val) {
      this.update(val);
    }
  },

  methods: {
    update: function update(val) {
      if (val > this.max) {
        this.realValue = this.max;
      } else if (val < this.min) {
        this.realValue = this.min;
      } else {
        this.realValue = val;
      }
    }
  },

  computed: {
    low: function low() {
      return '0%';
    },
    high: function high() {
      return (this.realValue - this.min) / (this.max - this.min) * 100 + '%';
    },
    classObject: function classObject() {
      var _ref;

      var type = this.type,
          size = this.size,
          isFullwidth = this.isFullwidth;

      return _ref = {
        slider: true
      }, _defineProperty(_ref, 'is-' + type, type), _defineProperty(_ref, 'is-' + size, size), _defineProperty(_ref, 'is-fullwidth', isFullwidth), _ref;
    }
  }
};

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueBulmaTooltip = __webpack_require__(13);

var _vueBulmaTooltip2 = _interopRequireDefault(_vueBulmaTooltip);

var _vueBulmaSlider = __webpack_require__(698);

var _vueBulmaSlider2 = _interopRequireDefault(_vueBulmaSlider);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Tooltip: _vueBulmaTooltip2.default,
    Slider: _vueBulmaSlider2.default
  },

  data: function data() {
    return {
      value: 23
    };
  },


  computed: {
    per: function per() {
      return this.value + '%';
    }
  },

  methods: {
    update: function update(val) {
      this.value = Number(val);
    }
  }

};

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.button[data-v-5c639b1a] {\n  margin: 5px 0 0;\n}\np[data-v-5c639b1a] {\n  margin-bottom: 20px;\n}\n.tooltip-value[data-v-5c639b1a] {\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\ninput[type=range].slider {\n  --height: 8px;\n  border: none;\n  border-radius: 290486px;\n  display: block;\n  height: var(--height);\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  outline: none;\n  background: #dbdbdb;\n  -webkit-tap-highlight-color: transparent;\n}\ninput[type=range].slider.is-small {\n    --height: 4px;\n}\ninput[type=range].slider.is-medium {\n    --height: 12px;\n}\ninput[type=range].slider.is-large {\n    --height: 16px;\n}\ninput[type=range].slider.is-fullwidth {\n    width: 100%;\n}\ninput[type=range].slider:focus {\n    outline: none;\n}\ninput[type=range].slider::-moz-focus-outer {\n    border: none;\n}\ninput[type=range].slider::-webkit-slider-runnable-track, input[type=range].slider::-webkit-slider-thumb, input[type=range].slider {\n    -webkit-appearance: none;\n            appearance: none;\n}\ninput[type=range].slider::-webkit-slider-thumb {\n    border-radius: 50%;\n    height: calc(var(--height) * 2.33);\n    width: calc(var(--height) * 2.33);\n    background-color: #FFF;\n    border: calc(var(--height) / 2) solid #4a4a4a;\n    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n    transition: 0.1165s ease-in-out;\n    box-sizing: border-box;\n}\ninput[type=range].slider::-webkit-slider-thumb:hover {\n      -webkit-transform: scale(1.25);\n              transform: scale(1.25);\n}\ninput[type=range].slider::-webkit-slider-thumb:active {\n      cursor: -webkit-grabbing;\n      cursor: grabbing;\n}\ninput[type=range].slider::-webkit-slider-runnable-track {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    height: var(--height);\n    border-radius: 290486px;\n    --track-background: linear-gradient(to right, transparent var(--low), #4a4a4a calc(0%), #4a4a4a var(--high), transparent calc(0%)) no-repeat 0 100%;\n    background: var(--track-background);\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0);\n    transition: 0.1165s;\n}\ninput[type=range].slider::-moz-range-thumb {\n    border-radius: 50%;\n    height: calc(var(--height) * 2.33);\n    width: calc(var(--height) * 2.33);\n    background-color: #FFF;\n    border: calc(var(--height) / 2) solid #4a4a4a;\n    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);\n    transform: translateZ(0);\n    transition: 0.1165s ease-in-out;\n    box-sizing: border-box;\n}\ninput[type=range].slider::-moz-range-thumb:hover {\n      transform: scale(1.25);\n}\ninput[type=range].slider::-moz-range-thumb:active {\n      cursor: grabbing;\n}\ninput[type=range].slider::-moz-range-progress:focus {\n    outline: 0;\n    border: 0;\n}\ninput[type=range].slider::-moz-range-track {\n    background: transparent;\n}\ninput[type=range].slider::-moz-range-progress {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: var(--height);\n    border-radius: 290486px;\n    background-color: #4a4a4a;\n}\ninput[type=range].slider::-ms-thumb {\n    border-radius: 50%;\n    height: calc(var(--height) * 2.33);\n    width: calc(var(--height) * 2.33);\n    background-color: #FFF;\n    border: calc(var(--height) / 2) solid #4a4a4a;\n    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);\n    transform: translateZ(0);\n    transition: 0.1165s ease-in-out;\n    box-sizing: border-box;\n}\ninput[type=range].slider::-ms-thumb:hover {\n      transform: scale(1.25);\n}\ninput[type=range].slider::-ms-thumb:active {\n      cursor: grabbing;\n}\ninput[type=range].slider::-ms-tooltip {\n    display: none;\n}\ninput[type=range].slider.is-white::-webkit-slider-thumb {\n    border-color: white;\n}\ninput[type=range].slider.is-white::-webkit-slider-runnable-track {\n    --track-background: linear-gradient(to right, transparent var(--low), white calc(0%), white var(--high), transparent calc(0%)) no-repeat 0 100%;\n    background: var(--track-background);\n}\ninput[type=range].slider.is-white::-moz-range-thumb {\n    border-color: white;\n}\ninput[type=range].slider.is-white::-moz-range-progress {\n    background-color: white;\n}\ninput[type=range].slider.is-white::-ms-thumb {\n    border-color: white;\n}\ninput[type=range].slider.is-white::-ms-fill-lower {\n    background-color: white;\n}\ninput[type=range].slider.is-black::-webkit-slider-thumb {\n    border-color: #0a0a0a;\n}\ninput[type=range].slider.is-black::-webkit-slider-runnable-track {\n    --track-background: linear-gradient(to right, transparent var(--low), #0a0a0a calc(0%), #0a0a0a var(--high), transparent calc(0%)) no-repeat 0 100%;\n    background: var(--track-background);\n}\ninput[type=range].slider.is-black::-moz-range-thumb {\n    border-color: #0a0a0a;\n}\ninput[type=range].slider.is-black::-moz-range-progress {\n    background-color: #0a0a0a;\n}\ninput[type=range].slider.is-black::-ms-thumb {\n    border-color: #0a0a0a;\n}\ninput[type=range].slider.is-black::-ms-fill-lower {\n    background-color: #0a0a0a;\n}\ninput[type=range].slider.is-light::-webkit-slider-thumb {\n    border-color: whitesmoke;\n}\ninput[type=range].slider.is-light::-webkit-slider-runnable-track {\n    --track-background: linear-gradient(to right, transparent var(--low), whitesmoke calc(0%), whitesmoke var(--high), transparent calc(0%)) no-repeat 0 100%;\n    background: var(--track-background);\n}\ninput[type=range].slider.is-light::-moz-range-thumb {\n    border-color: whitesmoke;\n}\ninput[type=range].slider.is-light::-moz-range-progress {\n    background-color: whitesmoke;\n}\ninput[type=range].slider.is-light::-ms-thumb {\n    border-color: whitesmoke;\n}\ninput[type=range].slider.is-light::-ms-fill-lower {\n    background-color: whitesmoke;\n}\ninput[type=range].slider.is-dark::-webkit-slider-thumb {\n    border-color: #363636;\n}\ninput[type=range].slider.is-dark::-webkit-slider-runnable-track {\n    --track-background: linear-gradient(to right, transparent var(--low), #363636 calc(0%), #363636 var(--high), transparent calc(0%)) no-repeat 0 100%;\n    background: var(--track-background);\n}\ninput[type=range].slider.is-dark::-moz-range-thumb {\n    border-color: #363636;\n}\ninput[type=range].slider.is-dark::-moz-range-progress {\n    background-color: #363636;\n}\ninput[type=range].slider.is-dark::-ms-thumb {\n    border-color: #363636;\n}\ninput[type=range].slider.is-dark::-ms-fill-lower {\n    background-color: #363636;\n}\ninput[type=range].slider.is-primary::-webkit-slider-thumb {\n    border-color: #00d1b2;\n}\ninput[type=range].slider.is-primary::-webkit-slider-runnable-track {\n    --track-background: linear-gradient(to right, transparent var(--low), #00d1b2 calc(0%), #00d1b2 var(--high), transparent calc(0%)) no-repeat 0 100%;\n    background: var(--track-background);\n}\ninput[type=range].slider.is-primary::-moz-range-thumb {\n    border-color: #00d1b2;\n}\ninput[type=range].slider.is-primary::-moz-range-progress {\n    background-color: #00d1b2;\n}\ninput[type=range].slider.is-primary::-ms-thumb {\n    border-color: #00d1b2;\n}\ninput[type=range].slider.is-primary::-ms-fill-lower {\n    background-color: #00d1b2;\n}\ninput[type=range].slider.is-info::-webkit-slider-thumb {\n    border-color: #3273dc;\n}\ninput[type=range].slider.is-info::-webkit-slider-runnable-track {\n    --track-background: linear-gradient(to right, transparent var(--low), #3273dc calc(0%), #3273dc var(--high), transparent calc(0%)) no-repeat 0 100%;\n    background: var(--track-background);\n}\ninput[type=range].slider.is-info::-moz-range-thumb {\n    border-color: #3273dc;\n}\ninput[type=range].slider.is-info::-moz-range-progress {\n    background-color: #3273dc;\n}\ninput[type=range].slider.is-info::-ms-thumb {\n    border-color: #3273dc;\n}\ninput[type=range].slider.is-info::-ms-fill-lower {\n    background-color: #3273dc;\n}\ninput[type=range].slider.is-success::-webkit-slider-thumb {\n    border-color: #23d160;\n}\ninput[type=range].slider.is-success::-webkit-slider-runnable-track {\n    --track-background: linear-gradient(to right, transparent var(--low), #23d160 calc(0%), #23d160 var(--high), transparent calc(0%)) no-repeat 0 100%;\n    background: var(--track-background);\n}\ninput[type=range].slider.is-success::-moz-range-thumb {\n    border-color: #23d160;\n}\ninput[type=range].slider.is-success::-moz-range-progress {\n    background-color: #23d160;\n}\ninput[type=range].slider.is-success::-ms-thumb {\n    border-color: #23d160;\n}\ninput[type=range].slider.is-success::-ms-fill-lower {\n    background-color: #23d160;\n}\ninput[type=range].slider.is-warning::-webkit-slider-thumb {\n    border-color: #ffdd57;\n}\ninput[type=range].slider.is-warning::-webkit-slider-runnable-track {\n    --track-background: linear-gradient(to right, transparent var(--low), #ffdd57 calc(0%), #ffdd57 var(--high), transparent calc(0%)) no-repeat 0 100%;\n    background: var(--track-background);\n}\ninput[type=range].slider.is-warning::-moz-range-thumb {\n    border-color: #ffdd57;\n}\ninput[type=range].slider.is-warning::-moz-range-progress {\n    background-color: #ffdd57;\n}\ninput[type=range].slider.is-warning::-ms-thumb {\n    border-color: #ffdd57;\n}\ninput[type=range].slider.is-warning::-ms-fill-lower {\n    background-color: #ffdd57;\n}\ninput[type=range].slider.is-danger::-webkit-slider-thumb {\n    border-color: #ff3860;\n}\ninput[type=range].slider.is-danger::-webkit-slider-runnable-track {\n    --track-background: linear-gradient(to right, transparent var(--low), #ff3860 calc(0%), #ff3860 var(--high), transparent calc(0%)) no-repeat 0 100%;\n    background: var(--track-background);\n}\ninput[type=range].slider.is-danger::-moz-range-thumb {\n    border-color: #ff3860;\n}\ninput[type=range].slider.is-danger::-moz-range-progress {\n    background-color: #ff3860;\n}\ninput[type=range].slider.is-danger::-ms-thumb {\n    border-color: #ff3860;\n}\ninput[type=range].slider.is-danger::-ms-fill-lower {\n    background-color: #ff3860;\n}\ninput[type=range].slider[orient=vertical] {\n    -webkit-writing-mode: bt-lr;\n        -ms-writing-mode: bt-lr;\n            writing-mode: bt-lr;\n    -webkit-appearance: slider-vertical;\n    height: 200px;\n    width: var(--height);\n    -webkit-transform-origin: 0 0;\n    position: relative;\n    top: 0;\n    left: 0;\n}\ninput[type=range].slider[orient=vertical].is-white::-webkit-slider-thumb:after {\n      width: 50px;\n      height: 50px;\n      background-color: red;\n      border: 2px solid white;\n      content: '';\n      position: absolute;\n      z-index: 233;\n}\ninput[type=range].slider[orient=vertical].is-white::-webkit-slider-runnable-track {\n      display: block;\n      --track-background: linear-gradient(to top, transparent var(--low), white 0, white var(--high), transparent 0) no-repeat 0 100%;\n      background: var(--track-background);\n}\ninput[type=range].slider[orient=vertical].is-black::-webkit-slider-thumb:after {\n      width: 50px;\n      height: 50px;\n      background-color: red;\n      border: 2px solid #0a0a0a;\n      content: '';\n      position: absolute;\n      z-index: 233;\n}\ninput[type=range].slider[orient=vertical].is-black::-webkit-slider-runnable-track {\n      display: block;\n      --track-background: linear-gradient(to top, transparent var(--low), #0a0a0a 0, #0a0a0a var(--high), transparent 0) no-repeat 0 100%;\n      background: var(--track-background);\n}\ninput[type=range].slider[orient=vertical].is-light::-webkit-slider-thumb:after {\n      width: 50px;\n      height: 50px;\n      background-color: red;\n      border: 2px solid whitesmoke;\n      content: '';\n      position: absolute;\n      z-index: 233;\n}\ninput[type=range].slider[orient=vertical].is-light::-webkit-slider-runnable-track {\n      display: block;\n      --track-background: linear-gradient(to top, transparent var(--low), whitesmoke 0, whitesmoke var(--high), transparent 0) no-repeat 0 100%;\n      background: var(--track-background);\n}\ninput[type=range].slider[orient=vertical].is-dark::-webkit-slider-thumb:after {\n      width: 50px;\n      height: 50px;\n      background-color: red;\n      border: 2px solid #363636;\n      content: '';\n      position: absolute;\n      z-index: 233;\n}\ninput[type=range].slider[orient=vertical].is-dark::-webkit-slider-runnable-track {\n      display: block;\n      --track-background: linear-gradient(to top, transparent var(--low), #363636 0, #363636 var(--high), transparent 0) no-repeat 0 100%;\n      background: var(--track-background);\n}\ninput[type=range].slider[orient=vertical].is-primary::-webkit-slider-thumb:after {\n      width: 50px;\n      height: 50px;\n      background-color: red;\n      border: 2px solid #00d1b2;\n      content: '';\n      position: absolute;\n      z-index: 233;\n}\ninput[type=range].slider[orient=vertical].is-primary::-webkit-slider-runnable-track {\n      display: block;\n      --track-background: linear-gradient(to top, transparent var(--low), #00d1b2 0, #00d1b2 var(--high), transparent 0) no-repeat 0 100%;\n      background: var(--track-background);\n}\ninput[type=range].slider[orient=vertical].is-info::-webkit-slider-thumb:after {\n      width: 50px;\n      height: 50px;\n      background-color: red;\n      border: 2px solid #3273dc;\n      content: '';\n      position: absolute;\n      z-index: 233;\n}\ninput[type=range].slider[orient=vertical].is-info::-webkit-slider-runnable-track {\n      display: block;\n      --track-background: linear-gradient(to top, transparent var(--low), #3273dc 0, #3273dc var(--high), transparent 0) no-repeat 0 100%;\n      background: var(--track-background);\n}\ninput[type=range].slider[orient=vertical].is-success::-webkit-slider-thumb:after {\n      width: 50px;\n      height: 50px;\n      background-color: red;\n      border: 2px solid #23d160;\n      content: '';\n      position: absolute;\n      z-index: 233;\n}\ninput[type=range].slider[orient=vertical].is-success::-webkit-slider-runnable-track {\n      display: block;\n      --track-background: linear-gradient(to top, transparent var(--low), #23d160 0, #23d160 var(--high), transparent 0) no-repeat 0 100%;\n      background: var(--track-background);\n}\ninput[type=range].slider[orient=vertical].is-warning::-webkit-slider-thumb:after {\n      width: 50px;\n      height: 50px;\n      background-color: red;\n      border: 2px solid #ffdd57;\n      content: '';\n      position: absolute;\n      z-index: 233;\n}\ninput[type=range].slider[orient=vertical].is-warning::-webkit-slider-runnable-track {\n      display: block;\n      --track-background: linear-gradient(to top, transparent var(--low), #ffdd57 0, #ffdd57 var(--high), transparent 0) no-repeat 0 100%;\n      background: var(--track-background);\n}\ninput[type=range].slider[orient=vertical].is-danger::-webkit-slider-thumb:after {\n      width: 50px;\n      height: 50px;\n      background-color: red;\n      border: 2px solid #ff3860;\n      content: '';\n      position: absolute;\n      z-index: 233;\n}\ninput[type=range].slider[orient=vertical].is-danger::-webkit-slider-runnable-track {\n      display: block;\n      --track-background: linear-gradient(to top, transparent var(--low), #ff3860 0, #ff3860 var(--high), transparent 0) no-repeat 0 100%;\n      background: var(--track-background);\n}\n", ""]);

// exports


/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(792)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(565),
  /* template */
  __webpack_require__(746),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-slider/src/Slider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Slider.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7157a8f7", Component.options)
  } else {
    hotAPI.reload("data-v-7157a8f7", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 739:
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
  }, [_c('p', [_c('slider', {
    attrs: {
      "value": 15,
      "max": 100,
      "step": 1,
      "is-fullwidth": ""
    }
  })], 1), _vm._v(" "), _c('p', [_c('slider', {
    attrs: {
      "type": "primary",
      "value": 30,
      "max": 100,
      "step": 10,
      "is-fullwidth": ""
    }
  })], 1), _vm._v(" "), _c('p', [_c('slider', {
    attrs: {
      "type": "info",
      "value": 45,
      "max": 100,
      "step": 5,
      "is-fullwidth": ""
    }
  })], 1), _vm._v(" "), _c('p', [_c('slider', {
    attrs: {
      "type": "success",
      "value": 60,
      "max": 100,
      "step": 20,
      "is-fullwidth": ""
    }
  })], 1), _vm._v(" "), _c('p', [_c('slider', {
    attrs: {
      "type": "warning",
      "value": 75,
      "max": 100,
      "step": 25,
      "is-fullwidth": ""
    }
  })], 1), _vm._v(" "), _c('p', [_c('slider', {
    attrs: {
      "type": "danger",
      "value": 90,
      "max": 100,
      "step": 10,
      "is-fullwidth": ""
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-4"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Sizes")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('p', [_c('slider', {
    attrs: {
      "size": "small",
      "value": 15,
      "max": 100,
      "is-fullwidth": ""
    }
  })], 1), _vm._v(" "), _c('p', [_c('slider', {
    attrs: {
      "size": "",
      "value": 30,
      "max": 100,
      "is-fullwidth": ""
    }
  })], 1), _vm._v(" "), _c('p', [_c('slider', {
    attrs: {
      "size": "medium",
      "value": 45,
      "max": 100,
      "is-fullwidth": ""
    }
  })], 1), _vm._v(" "), _c('p', [_c('slider', {
    attrs: {
      "size": "large",
      "value": 60,
      "max": 100,
      "is-fullwidth": ""
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-4"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Dynamics")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('p', [_c('tooltip', {
    attrs: {
      "type": "success",
      "label": _vm.per,
      "placement": "top",
      "always": ""
    }
  }, [_c('span', {
    staticClass: "tooltip-value"
  })]), _vm._v(" "), _c('slider', {
    attrs: {
      "type": "success",
      "size": "large",
      "value": _vm.value,
      "max": 100,
      "step": 1,
      "is-fullwidth": ""
    },
    on: {
      "change": _vm.update
    }
  })], 1), _vm._v(" "), _c('p', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.value),
      expression: "value"
    }],
    staticClass: "input",
    attrs: {
      "type": "number",
      "min": "0",
      "max": "100",
      "number": ""
    },
    domProps: {
      "value": (_vm.value)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.value = $event.target.value
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  })])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5c639b1a", module.exports)
  }
}

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.realValue),
      expression: "realValue"
    }],
    class: _vm.classObject,
    attrs: {
      "type": "range",
      "min": _vm.min,
      "max": _vm.max,
      "step": _vm.step,
      "name": _vm.name,
      "orient": _vm.vertical && 'vertical',
      "disabled": _vm.disabled,
      "number": ""
    },
    domProps: {
      "value": (_vm.realValue)
    },
    on: {
      "__r": function($event) {
        _vm.realValue = $event.target.value
      }
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7157a8f7", module.exports)
  }
}

/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(638);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("d4259a96", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5c639b1a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Slider.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5c639b1a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Slider.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(642);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("56520d92", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7157a8f7\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Slider.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-7157a8f7\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Slider.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvU2xpZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vU2xpZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vU2xpZGVyLnZ1ZT84MDkwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9TbGlkZXIudnVlPzYxNDQiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtc2xpZGVyL3NyYy9TbGlkZXIudnVlPzZmMGYiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtc2xpZGVyL3NyYy9TbGlkZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9TbGlkZXIudnVlP2RjYzciLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtc2xpZGVyL3NyYy9TbGlkZXIudnVlP2I3MzEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL1NsaWRlci52dWU/YzEzZCIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1zbGlkZXIvc3JjL1NsaWRlci52dWU/NzJhMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBLHVCQUE0Szs7QUFFNUs7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBOzs7OztZQUlBO2VBRUE7QUFIQTs7WUFLQTtlQUVBO0FBSEE7O1lBS0E7ZUFFQTtBQUhBOztZQUtBO2VBRUE7QUFIQTtVQUlBO1VBQ0E7VUFDQTtpQkFDQTtjQUNBO0FBQ0E7Y0FHQTtBQXpCQTs7d0JBMEJBOztzQkFHQTtBQUZBO0FBSUE7c0NBQ0E7NkJBQ0E7WUFDQTtBQUVBOztxQkFDQTtBQUVBOzhCQUNBOzZDQUNBOzhDQUNBO0FBRUE7Ozs7a0RBRUE7NkNBQ0E7a0RBQ0E7NkJBQ0E7QUFDQTtBQUNBOytCQUNBO2tCQUNBO0FBR0E7QUFYQTs7O2lDQWFBOzBCQUNBOzhCQUNBO2lDQUNBOzhCQUNBO2FBQ0E7eUJBQ0E7QUFDQTtBQUdBO0FBWEE7Ozt3QkFhQTthQUNBO0FBQ0E7MEJBQ0E7eUVBQ0E7QUFDQTs7QUFDQTs7aUJBQ0E7Ozs7QUFDQTtnQkFDQTs2Q0FDQSwyQ0FDQSw2Q0FFQTtBQUVBO0FBaEJBO0FBdEVBLEU7Ozs7Ozs7Ozs7Ozs7O0FDZ0VBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBR0E7QUFKQTs7d0JBS0E7O2FBR0E7QUFGQTtBQUlBOzs7O3dCQUVBOzBCQUNBO0FBR0E7QUFMQTs7O2lDQU9BOzBCQUNBO0FBR0E7QUFMQTs7QUFsQkEsRTs7Ozs7OztBQzFFQTtBQUNBOzs7QUFHQTtBQUNBLHFEQUFzRCxvQkFBb0IsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsbUNBQW1DLGdCQUFnQixHQUFHOztBQUVwTDs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLHFEQUFzRCxrQkFBa0IsaUJBQWlCLDRCQUE0QixtQkFBbUIsMEJBQTBCLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLHdCQUF3Qiw2Q0FBNkMsR0FBRyxxQ0FBcUMsb0JBQW9CLEdBQUcsc0NBQXNDLHFCQUFxQixHQUFHLHFDQUFxQyxxQkFBcUIsR0FBRyx5Q0FBeUMsa0JBQWtCLEdBQUcsa0NBQWtDLG9CQUFvQixHQUFHLDhDQUE4QyxtQkFBbUIsR0FBRyxxSUFBcUksK0JBQStCLCtCQUErQixHQUFHLGtEQUFrRCx5QkFBeUIseUNBQXlDLHdDQUF3Qyw2QkFBNkIsb0RBQW9ELGtEQUFrRCx1Q0FBdUMsdUNBQXVDLHNDQUFzQyw2QkFBNkIsR0FBRyx3REFBd0QsdUNBQXVDLHVDQUF1QyxHQUFHLHlEQUF5RCxpQ0FBaUMseUJBQXlCLEdBQUcsMkRBQTJELDJCQUEyQixvQkFBb0IsZ0NBQWdDLGtDQUFrQyw0QkFBNEIsOEJBQThCLDBKQUEwSiwwQ0FBMEMsdUNBQXVDLHVDQUF1QywwQkFBMEIsR0FBRyw4Q0FBOEMseUJBQXlCLHlDQUF5Qyx3Q0FBd0MsNkJBQTZCLG9EQUFvRCxrREFBa0QsK0JBQStCLHNDQUFzQyw2QkFBNkIsR0FBRyxvREFBb0QsK0JBQStCLEdBQUcscURBQXFELHlCQUF5QixHQUFHLHVEQUF1RCxpQkFBaUIsZ0JBQWdCLEdBQUcsOENBQThDLDhCQUE4QixHQUFHLGlEQUFpRCxvQkFBb0IsMEJBQTBCLGtCQUFrQiw0QkFBNEIsOEJBQThCLGdDQUFnQyxHQUFHLHVDQUF1Qyx5QkFBeUIseUNBQXlDLHdDQUF3Qyw2QkFBNkIsb0RBQW9ELGtEQUFrRCwrQkFBK0Isc0NBQXNDLDZCQUE2QixHQUFHLDZDQUE2QywrQkFBK0IsR0FBRyw4Q0FBOEMseUJBQXlCLEdBQUcseUNBQXlDLG9CQUFvQixHQUFHLDJEQUEyRCwwQkFBMEIsR0FBRyxvRUFBb0Usc0pBQXNKLDBDQUEwQyxHQUFHLHVEQUF1RCwwQkFBMEIsR0FBRywwREFBMEQsOEJBQThCLEdBQUcsZ0RBQWdELDBCQUEwQixHQUFHLHFEQUFxRCw4QkFBOEIsR0FBRywyREFBMkQsNEJBQTRCLEdBQUcsb0VBQW9FLDBKQUEwSiwwQ0FBMEMsR0FBRyx1REFBdUQsNEJBQTRCLEdBQUcsMERBQTBELGdDQUFnQyxHQUFHLGdEQUFnRCw0QkFBNEIsR0FBRyxxREFBcUQsZ0NBQWdDLEdBQUcsMkRBQTJELCtCQUErQixHQUFHLG9FQUFvRSxnS0FBZ0ssMENBQTBDLEdBQUcsdURBQXVELCtCQUErQixHQUFHLDBEQUEwRCxtQ0FBbUMsR0FBRyxnREFBZ0QsK0JBQStCLEdBQUcscURBQXFELG1DQUFtQyxHQUFHLDBEQUEwRCw0QkFBNEIsR0FBRyxtRUFBbUUsMEpBQTBKLDBDQUEwQyxHQUFHLHNEQUFzRCw0QkFBNEIsR0FBRyx5REFBeUQsZ0NBQWdDLEdBQUcsK0NBQStDLDRCQUE0QixHQUFHLG9EQUFvRCxnQ0FBZ0MsR0FBRyw2REFBNkQsNEJBQTRCLEdBQUcsc0VBQXNFLDBKQUEwSiwwQ0FBMEMsR0FBRyx5REFBeUQsNEJBQTRCLEdBQUcsNERBQTRELGdDQUFnQyxHQUFHLGtEQUFrRCw0QkFBNEIsR0FBRyx1REFBdUQsZ0NBQWdDLEdBQUcsMERBQTBELDRCQUE0QixHQUFHLG1FQUFtRSwwSkFBMEosMENBQTBDLEdBQUcsc0RBQXNELDRCQUE0QixHQUFHLHlEQUF5RCxnQ0FBZ0MsR0FBRywrQ0FBK0MsNEJBQTRCLEdBQUcsb0RBQW9ELGdDQUFnQyxHQUFHLDZEQUE2RCw0QkFBNEIsR0FBRyxzRUFBc0UsMEpBQTBKLDBDQUEwQyxHQUFHLHlEQUF5RCw0QkFBNEIsR0FBRyw0REFBNEQsZ0NBQWdDLEdBQUcsa0RBQWtELDRCQUE0QixHQUFHLHVEQUF1RCxnQ0FBZ0MsR0FBRyw2REFBNkQsNEJBQTRCLEdBQUcsc0VBQXNFLDBKQUEwSiwwQ0FBMEMsR0FBRyx5REFBeUQsNEJBQTRCLEdBQUcsNERBQTRELGdDQUFnQyxHQUFHLGtEQUFrRCw0QkFBNEIsR0FBRyx1REFBdUQsZ0NBQWdDLEdBQUcsNERBQTRELDRCQUE0QixHQUFHLHFFQUFxRSwwSkFBMEosMENBQTBDLEdBQUcsd0RBQXdELDRCQUE0QixHQUFHLDJEQUEyRCxnQ0FBZ0MsR0FBRyxpREFBaUQsNEJBQTRCLEdBQUcsc0RBQXNELGdDQUFnQyxHQUFHLDZDQUE2QyxrQ0FBa0Msa0NBQWtDLGtDQUFrQywwQ0FBMEMsb0JBQW9CLDJCQUEyQixvQ0FBb0MseUJBQXlCLGFBQWEsY0FBYyxHQUFHLGtGQUFrRixvQkFBb0IscUJBQXFCLDhCQUE4QixnQ0FBZ0Msb0JBQW9CLDJCQUEyQixxQkFBcUIsR0FBRyxxRkFBcUYsdUJBQXVCLHdJQUF3SSw0Q0FBNEMsR0FBRyxrRkFBa0Ysb0JBQW9CLHFCQUFxQiw4QkFBOEIsa0NBQWtDLG9CQUFvQiwyQkFBMkIscUJBQXFCLEdBQUcscUZBQXFGLHVCQUF1Qiw0SUFBNEksNENBQTRDLEdBQUcsa0ZBQWtGLG9CQUFvQixxQkFBcUIsOEJBQThCLHFDQUFxQyxvQkFBb0IsMkJBQTJCLHFCQUFxQixHQUFHLHFGQUFxRix1QkFBdUIsa0pBQWtKLDRDQUE0QyxHQUFHLGlGQUFpRixvQkFBb0IscUJBQXFCLDhCQUE4QixrQ0FBa0Msb0JBQW9CLDJCQUEyQixxQkFBcUIsR0FBRyxvRkFBb0YsdUJBQXVCLDRJQUE0SSw0Q0FBNEMsR0FBRyxvRkFBb0Ysb0JBQW9CLHFCQUFxQiw4QkFBOEIsa0NBQWtDLG9CQUFvQiwyQkFBMkIscUJBQXFCLEdBQUcsdUZBQXVGLHVCQUF1Qiw0SUFBNEksNENBQTRDLEdBQUcsaUZBQWlGLG9CQUFvQixxQkFBcUIsOEJBQThCLGtDQUFrQyxvQkFBb0IsMkJBQTJCLHFCQUFxQixHQUFHLG9GQUFvRix1QkFBdUIsNElBQTRJLDRDQUE0QyxHQUFHLG9GQUFvRixvQkFBb0IscUJBQXFCLDhCQUE4QixrQ0FBa0Msb0JBQW9CLDJCQUEyQixxQkFBcUIsR0FBRyx1RkFBdUYsdUJBQXVCLDRJQUE0SSw0Q0FBNEMsR0FBRyxvRkFBb0Ysb0JBQW9CLHFCQUFxQiw4QkFBOEIsa0NBQWtDLG9CQUFvQiwyQkFBMkIscUJBQXFCLEdBQUcsdUZBQXVGLHVCQUF1Qiw0SUFBNEksNENBQTRDLEdBQUcsbUZBQW1GLG9CQUFvQixxQkFBcUIsOEJBQThCLGtDQUFrQyxvQkFBb0IsMkJBQTJCLHFCQUFxQixHQUFHLHNGQUFzRix1QkFBdUIsNElBQTRJLDRDQUE0QyxHQUFHOztBQUU5N2Q7Ozs7Ozs7OztBQ05BO0FBQ0EsdUJBQXVKOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUMvQkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzdKQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNuQ0E7O0FBRUE7QUFDQSxxQ0FBaU47QUFDak47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRJQUE0SSxvRUFBb0U7QUFDaE4scUpBQXFKLG9FQUFvRTtBQUN6TjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7O0FBRUE7QUFDQSxxQ0FBc0s7QUFDdEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHQUFnRyxxRUFBcUU7QUFDcksseUdBQXlHLHFFQUFxRTtBQUM5SztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoianMvMjIuYTM5N2E1MzViMDdjMDQyZWUyZjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVjNjM5YjFhXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2xpZGVyLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9TbGlkZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01YzYzOWIxYVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TbGlkZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTVjNjM5YjFhXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9TbGlkZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gU2xpZGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01YzYzOWIxYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVjNjM5YjFhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9TbGlkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAyMiIsIjx0ZW1wbGF0ZT5cclxuICA8aW5wdXQgOmNsYXNzPVwiY2xhc3NPYmplY3RcIiB0eXBlPVwicmFuZ2VcIiA6bWluPVwibWluXCIgdi1tb2RlbD1cInJlYWxWYWx1ZVwiIDptYXg9XCJtYXhcIiA6c3RlcD1cInN0ZXBcIiA6bmFtZT1cIm5hbWVcIiA6b3JpZW50PVwidmVydGljYWwgJiYgJ3ZlcnRpY2FsJ1wiIDpkaXNhYmxlZD1cImRpc2FibGVkXCIgbnVtYmVyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiB7XHJcbiAgICBtaW46IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiAwXHJcbiAgICB9LFxyXG4gICAgbWF4OiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgZGVmYXVsdDogMVxyXG4gICAgfSxcclxuICAgIHN0ZXA6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiAwLjAxXHJcbiAgICB9LFxyXG4gICAgdmFsdWU6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiAwXHJcbiAgICB9LFxyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgbmFtZTogU3RyaW5nLFxyXG4gICAgc2l6ZTogU3RyaW5nLFxyXG4gICAgaXNGdWxsd2lkdGg6IEJvb2xlYW4sXHJcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcclxuICAgIC8vIG9yaWVudGF0aW9uOlxyXG4gICAgdmVydGljYWw6IEJvb2xlYW5cclxuICB9LFxyXG5cclxuICBkYXRhICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlYWxWYWx1ZTogdGhpcy52YWx1ZVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGJlZm9yZU1vdW50ICgpIHtcclxuICAgIGlmICh0aGlzLm1heCA8IHRoaXMubWluKSB7XHJcbiAgICAgIHRocm93ICdVbmV4cGVjdGVkIHJhbmdlIHNldHRpbmc6IE1heGltdW0gY2Fubm90IGJlIGxlc3MgdGhhbiBtaW5pbXVtJ1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXBkYXRlKHRoaXMudmFsdWUpXHJcbiAgfSxcclxuXHJcbiAgbW91bnRlZCAoKSB7XHJcbiAgICB0aGlzLiRlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1sb3cnLCB0aGlzLmxvdylcclxuICAgIHRoaXMuJGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWhpZ2gnLCB0aGlzLmhpZ2gpXHJcbiAgfSxcclxuXHJcbiAgd2F0Y2g6IHtcclxuICAgIHJlYWxWYWx1ZSAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgaWYgKE51bWJlcihuZXdWYWwpICE9PSBOdW1iZXIob2xkVmFsKSkge1xyXG4gICAgICAgIHRoaXMuJGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWhpZ2gnLCB0aGlzLmhpZ2gpXHJcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgbmV3VmFsKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdmFsdWUgKHZhbCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZSh2YWwpXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgdXBkYXRlICh2YWwpIHtcclxuICAgICAgaWYgKHZhbCA+IHRoaXMubWF4KSB7XHJcbiAgICAgICAgdGhpcy5yZWFsVmFsdWUgPSB0aGlzLm1heFxyXG4gICAgICB9IGVsc2UgaWYgKHZhbCA8IHRoaXMubWluKSB7XHJcbiAgICAgICAgdGhpcy5yZWFsVmFsdWUgPSB0aGlzLm1pblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVhbFZhbHVlID0gdmFsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjb21wdXRlZDoge1xyXG4gICAgbG93ICgpIHtcclxuICAgICAgcmV0dXJuICcwJSdcclxuICAgIH0sXHJcbiAgICBoaWdoICgpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLnJlYWxWYWx1ZSAtIHRoaXMubWluKSAvICh0aGlzLm1heCAtIHRoaXMubWluKSAqIDEwMCArICclJ1xyXG4gICAgfSxcclxuICAgIGNsYXNzT2JqZWN0ICgpIHtcclxuICAgICAgY29uc3QgeyB0eXBlLCBzaXplLCBpc0Z1bGx3aWR0aCB9ID0gdGhpc1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNsaWRlcjogdHJ1ZSxcclxuICAgICAgICBbYGlzLSR7dHlwZX1gXTogdHlwZSxcclxuICAgICAgICBbYGlzLSR7c2l6ZX1gXTogc2l6ZSxcclxuICAgICAgICAnaXMtZnVsbHdpZHRoJzogaXNGdWxsd2lkdGhcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5AaW1wb3J0ICd+YnVsbWEvc2Fzcy91dGlsaXRpZXMvdmFyaWFibGVzJztcclxuXHJcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlciB7XHJcbiAgJHJhZGl1czogMjkwNDg2cHg7XHJcbiAgLS1oZWlnaHQ6IDhweDtcclxuXHJcbiAgJi5pcy1zbWFsbCB7XHJcbiAgICAtLWhlaWdodDogNHB4O1xyXG4gIH1cclxuICAmLmlzLW1lZGl1bSB7XHJcbiAgICAtLWhlaWdodDogMTJweDtcclxuICB9XHJcbiAgJi5pcy1sYXJnZSB7XHJcbiAgICAtLWhlaWdodDogMTZweDtcclxuICB9XHJcblxyXG4gICYuaXMtZnVsbHdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICRib3JkZXI7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE4Nzk0MDI2L3JlbW92ZS1kb3R0ZWQtb3V0bGluZS1mcm9tLXJhbmdlLWlucHV0LWVsZW1lbnQtaW4tZmlyZWZveFxyXG4gICY6Oi1tb3otZm9jdXMtb3V0ZXIge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2ssXHJcbiAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWIsXHJcbiAgJiB7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIH1cclxuXHJcbiAgQG1peGluIHRodW1iLWJhc2UoKSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0KSAqIDIuMzMpO1xyXG4gICAgd2lkdGg6IGNhbGModmFyKC0taGVpZ2h0KSAqIDIuMzMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlcjogY2FsYyh2YXIoLS1oZWlnaHQpIC8gMikgc29saWQgJHRleHQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgxNywgMTcsIDE3LCAwLjEpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgdHJhbnNpdGlvbjogKDAuMjMzcyAvIDIpIGVhc2UtaW4tb3V0O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtaXhpbiB0aHVtYi1iYXNlLWFjdGl2ZSB7XHJcbiAgICBjdXJzb3I6IGdyYWJiaW5nO1xyXG4gIH1cclxuXHJcbiAgQG1peGluIHRyYWNrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAgIC0tdHJhY2stYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCB2YXIoLS1sb3cpLCAkdGV4dCBjYWxjKDAlKSwgJHRleHQgdmFyKC0taGlnaCksIHRyYW5zcGFyZW50IGNhbGMoMCUpKSBuby1yZXBlYXQgMCAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhY2stYmFja2dyb3VuZCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICB0cmFuc2l0aW9uOiAoMC4yMzNzIC8gMik7XHJcbiAgfVxyXG5cclxuICAmOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgICBAaW5jbHVkZSB0aHVtYi1iYXNlKCk7XHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIEBpbmNsdWRlIHRodW1iLWJhc2UtYWN0aXZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICY6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcclxuICAgIEBpbmNsdWRlIHRyYWNrKCk7XHJcbiAgfVxyXG5cclxuICAmOjotbW96LXJhbmdlLXRodW1iIHtcclxuICAgIEBpbmNsdWRlIHRodW1iLWJhc2UoKTtcclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgQGluY2x1ZGUgdGh1bWItYmFzZS1hY3RpdmUoKTtcclxuICAgIH1cclxuICB9XHJcbiAgJjo6LW1vei1yYW5nZS1wcm9ncmVzczpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICAmOjotbW96LXJhbmdlLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICAmOjotbW96LXJhbmdlLXByb2dyZXNzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQ7XHJcbiAgfVxyXG5cclxuICAmOjotbXMtdGh1bWIge1xyXG4gICAgQGluY2x1ZGUgdGh1bWItYmFzZSgpO1xyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICBAaW5jbHVkZSB0aHVtYi1iYXNlLWFjdGl2ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAmOjotbXMtdG9vbHRpcCB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgfVxyXG5cclxuICAvLyBDb2xvcnNcclxuICBAZWFjaCAkbmFtZSwgJHBhaXIgaW4gJGNvbG9ycyB7XHJcbiAgICAkY29sb3I6IG50aCgkcGFpciwgMSk7XHJcbiAgICAmLmlzLSN7JG5hbWV9IHtcclxuICAgICAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgICY6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcclxuICAgICAgICAtLXRyYWNrLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgdmFyKC0tbG93KSwgJGNvbG9yIGNhbGMoMCUpLCAgJGNvbG9yIHZhcigtLWhpZ2gpLCB0cmFuc3BhcmVudCBjYWxjKDAlKSkgbm8tcmVwZWF0IDAgMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFjay1iYWNrZ3JvdW5kKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBodHRwOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNS8xMS9zdHlsaW5nX2FuZF9zY3IuaHRtbFxyXG4gICAgICAmOjotbW96LXJhbmdlLXRodW1iIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICAgICAgfVxyXG4gICAgICAmOjotbW96LXJhbmdlLXByb2dyZXNzIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgJjo6LW1zLXRodW1iIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcclxuICAgICAgfVxyXG4gICAgICAmOjotbXMtZmlsbC1sb3dlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmW29yaWVudD12ZXJ0aWNhbF0ge1xyXG4gICAgd3JpdGluZy1tb2RlOiBidC1scjsgLy8gSUVcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogc2xpZGVyLXZlcnRpY2FsOyAgLy8gd2Via2l0XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IHZhcigtLWhlaWdodCk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgLy8gQ29sb3JzXHJcbiAgICBAZWFjaCAkbmFtZSwgJHBhaXIgaW4gJGNvbG9ycyB7XHJcbiAgICAgICRjb2xvcjogbnRoKCRwYWlyLCAxKTtcclxuICAgICAgJi5pcy0jeyRuYW1lfSB7XHJcbiAgICAgICAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyMzM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgLS10cmFjay1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCB2YXIoLS1sb3cpLCAkY29sb3IgMCwgICRjb2xvciB2YXIoLS1oaWdoKSwgdHJhbnNwYXJlbnQgMCkgbm8tcmVwZWF0IDAgMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYWNrLWJhY2tncm91bmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFNsaWRlci52dWU/NmQ3ZDQ0YTgiLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtYW5jZXN0b3JcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudCBpcy00XCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlN0eWxlczwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrIHN0eWxlcy1ib3hcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c2xpZGVyIDp2YWx1ZT1cIjE1XCIgOm1heD1cIjEwMFwiIDpzdGVwPVwiMVwiIGlzLWZ1bGx3aWR0aD48L3NsaWRlcj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c2xpZGVyIHR5cGU9XCJwcmltYXJ5XCIgOnZhbHVlPVwiMzBcIiA6bWF4PVwiMTAwXCIgOnN0ZXA9XCIxMFwiIGlzLWZ1bGx3aWR0aD48L3NsaWRlcj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c2xpZGVyIHR5cGU9XCJpbmZvXCIgOnZhbHVlPVwiNDVcIiA6bWF4PVwiMTAwXCIgOnN0ZXA9XCI1XCIgaXMtZnVsbHdpZHRoPjwvc2xpZGVyPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzbGlkZXIgdHlwZT1cInN1Y2Nlc3NcIiA6dmFsdWU9XCI2MFwiIDptYXg9XCIxMDBcIiA6c3RlcD1cIjIwXCIgaXMtZnVsbHdpZHRoPjwvc2xpZGVyPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzbGlkZXIgdHlwZT1cIndhcm5pbmdcIiA6dmFsdWU9XCI3NVwiIDptYXg9XCIxMDBcIiA6c3RlcD1cIjI1XCIgaXMtZnVsbHdpZHRoPjwvc2xpZGVyPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzbGlkZXIgdHlwZT1cImRhbmdlclwiIDp2YWx1ZT1cIjkwXCIgOm1heD1cIjEwMFwiIDpzdGVwPVwiMTBcIiBpcy1mdWxsd2lkdGg+PC9zbGlkZXI+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1wYXJlbnQgaXMtNFwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94XCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5TaXplczwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHNsaWRlciBzaXplPVwic21hbGxcIiA6dmFsdWU9XCIxNVwiIDptYXg9XCIxMDBcIiBpcy1mdWxsd2lkdGg+PC9zbGlkZXI+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHNsaWRlciBzaXplPVwiXCIgOnZhbHVlPVwiMzBcIiA6bWF4PVwiMTAwXCIgaXMtZnVsbHdpZHRoPjwvc2xpZGVyPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzbGlkZXIgc2l6ZT1cIm1lZGl1bVwiIDp2YWx1ZT1cIjQ1XCIgOm1heD1cIjEwMFwiIGlzLWZ1bGx3aWR0aD48L3NsaWRlcj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c2xpZGVyIHNpemU9XCJsYXJnZVwiIDp2YWx1ZT1cIjYwXCIgOm1heD1cIjEwMFwiIGlzLWZ1bGx3aWR0aD48L3NsaWRlcj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudCBpcy00XCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPkR5bmFtaWNzPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8dG9vbHRpcCB0eXBlPVwic3VjY2Vzc1wiIDpsYWJlbD1cInBlclwiIHBsYWNlbWVudD1cInRvcFwiIGFsd2F5cz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvb2x0aXAtdmFsdWVcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvdG9vbHRpcD5cbiAgICAgICAgICAgICAgPHNsaWRlciB0eXBlPVwic3VjY2Vzc1wiIHNpemU9XCJsYXJnZVwiIDp2YWx1ZT1cInZhbHVlXCIgOm1heD1cIjEwMFwiIDpzdGVwPVwiMVwiIGlzLWZ1bGx3aWR0aCBAY2hhbmdlPVwidXBkYXRlXCI+PC9zbGlkZXI+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwibnVtYmVyXCIgdi1tb2RlbD1cInZhbHVlXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIG51bWJlcj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBUb29sdGlwIGZyb20gJ3Z1ZS1idWxtYS10b29sdGlwJ1xuaW1wb3J0IFNsaWRlciBmcm9tICd2dWUtYnVsbWEtc2xpZGVyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBUb29sdGlwLFxuICAgIFNsaWRlclxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogMjNcbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBwZXIgKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgKyAnJSdcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZSAodmFsKSB7XG4gICAgICB0aGlzLnZhbHVlID0gTnVtYmVyKHZhbClcbiAgICB9XG4gIH1cblxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5idXR0b24ge1xuICBtYXJnaW46IDVweCAwIDA7XG59XG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi50b29sdGlwLXZhbHVlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFNsaWRlci52dWU/NTAwMjlkNzgiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uYnV0dG9uW2RhdGEtdi01YzYzOWIxYV0ge1xcbiAgbWFyZ2luOiA1cHggMCAwO1xcbn1cXG5wW2RhdGEtdi01YzYzOWIxYV0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnRvb2x0aXAtdmFsdWVbZGF0YS12LTVjNjM5YjFhXSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNWM2MzliMWFcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9TbGlkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA2Mzhcbi8vIG1vZHVsZSBjaHVua3MgPSAyMiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyIHtcXG4gIC0taGVpZ2h0OiA4cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAyOTA0ODZweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjZGJkYmRiO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXNtYWxsIHtcXG4gICAgLS1oZWlnaHQ6IDRweDtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLW1lZGl1bSB7XFxuICAgIC0taGVpZ2h0OiAxMnB4O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbGFyZ2Uge1xcbiAgICAtLWhlaWdodDogMTZweDtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWZ1bGx3aWR0aCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Oi1tb3otZm9jdXMtb3V0ZXIge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2ssIGlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIsIGlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlciB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0KSAqIDIuMzMpO1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1oZWlnaHQpICogMi4zMyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgIGJvcmRlcjogY2FsYyh2YXIoLS1oZWlnaHQpIC8gMikgc29saWQgIzRhNGE0YTtcXG4gICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMTcsIDE3LCAxNywgMC4xKTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgICB0cmFuc2l0aW9uOiAwLjExNjVzIGVhc2UtaW4tb3V0O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iOmhvdmVyIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iOmFjdGl2ZSB7XFxuICAgICAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xcbiAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI5MDQ4NnB4O1xcbiAgICAtLXRyYWNrLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgdmFyKC0tbG93KSwgIzRhNGE0YSBjYWxjKDAlKSwgIzRhNGE0YSB2YXIoLS1oaWdoKSwgdHJhbnNwYXJlbnQgY2FsYygwJSkpIG5vLXJlcGVhdCAwIDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYWNrLWJhY2tncm91bmQpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgIHRyYW5zaXRpb246IDAuMTE2NXM7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlaWdodCkgKiAyLjMzKTtcXG4gICAgd2lkdGg6IGNhbGModmFyKC0taGVpZ2h0KSAqIDIuMzMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgICBib3JkZXI6IGNhbGModmFyKC0taGVpZ2h0KSAvIDIpIHNvbGlkICM0YTRhNGE7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDE3LCAxNywgMTcsIDAuMSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcXG4gICAgdHJhbnNpdGlvbjogMC4xMTY1cyBlYXNlLWluLW91dDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyOjotbW96LXJhbmdlLXRodW1iOmhvdmVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWI6YWN0aXZlIHtcXG4gICAgICBjdXJzb3I6IGdyYWJiaW5nO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Oi1tb3otcmFuZ2UtcHJvZ3Jlc3M6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAwO1xcbiAgICBib3JkZXI6IDA7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjo6LW1vei1yYW5nZS10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Oi1tb3otcmFuZ2UtcHJvZ3Jlc3Mge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyOTA0ODZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyOjotbXMtdGh1bWIge1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1oZWlnaHQpICogMi4zMyk7XFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWhlaWdodCkgKiAyLjMzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgYm9yZGVyOiBjYWxjKHZhcigtLWhlaWdodCkgLyAyKSBzb2xpZCAjNGE0YTRhO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgxNywgMTcsIDE3LCAwLjEpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAgIHRyYW5zaXRpb246IDAuMTE2NXMgZWFzZS1pbi1vdXQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjo6LW1zLXRodW1iOmhvdmVyIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXI6Oi1tcy10aHVtYjphY3RpdmUge1xcbiAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcjo6LW1zLXRvb2x0aXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtd2hpdGU6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXdoaXRlOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICAgIC0tdHJhY2stYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCB2YXIoLS1sb3cpLCB3aGl0ZSBjYWxjKDAlKSwgd2hpdGUgdmFyKC0taGlnaCksIHRyYW5zcGFyZW50IGNhbGMoMCUpKSBuby1yZXBlYXQgMCAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFjay1iYWNrZ3JvdW5kKTtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXdoaXRlOjotbW96LXJhbmdlLXRodW1iIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXdoaXRlOjotbW96LXJhbmdlLXByb2dyZXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy13aGl0ZTo6LW1zLXRodW1iIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXdoaXRlOjotbXMtZmlsbC1sb3dlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtYmxhY2s6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMGEwYTBhO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtYmxhY2s6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gICAgLS10cmFjay1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IHZhcigtLWxvdyksICMwYTBhMGEgY2FsYygwJSksICMwYTBhMGEgdmFyKC0taGlnaCksIHRyYW5zcGFyZW50IGNhbGMoMCUpKSBuby1yZXBlYXQgMCAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFjay1iYWNrZ3JvdW5kKTtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWJsYWNrOjotbW96LXJhbmdlLXRodW1iIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMGEwYTBhO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtYmxhY2s6Oi1tb3otcmFuZ2UtcHJvZ3Jlc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwYTBhO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtYmxhY2s6Oi1tcy10aHVtYiB7XFxuICAgIGJvcmRlci1jb2xvcjogIzBhMGEwYTtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWJsYWNrOjotbXMtZmlsbC1sb3dlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTBhMGE7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1saWdodDo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlc21va2U7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1saWdodDo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgICAtLXRyYWNrLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgdmFyKC0tbG93KSwgd2hpdGVzbW9rZSBjYWxjKDAlKSwgd2hpdGVzbW9rZSB2YXIoLS1oaWdoKSwgdHJhbnNwYXJlbnQgY2FsYygwJSkpIG5vLXJlcGVhdCAwIDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYWNrLWJhY2tncm91bmQpO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbGlnaHQ6Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlc21va2U7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1saWdodDo6LW1vei1yYW5nZS1wcm9ncmVzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1saWdodDo6LW1zLXRodW1iIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtbGlnaHQ6Oi1tcy1maWxsLWxvd2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWRhcms6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzYzNjM2O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtZGFyazo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgICAtLXRyYWNrLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgdmFyKC0tbG93KSwgIzM2MzYzNiBjYWxjKDAlKSwgIzM2MzYzNiB2YXIoLS1oaWdoKSwgdHJhbnNwYXJlbnQgY2FsYygwJSkpIG5vLXJlcGVhdCAwIDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYWNrLWJhY2tncm91bmQpO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtZGFyazo6LW1vei1yYW5nZS10aHVtYiB7XFxuICAgIGJvcmRlci1jb2xvcjogIzM2MzYzNjtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWRhcms6Oi1tb3otcmFuZ2UtcHJvZ3Jlc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtZGFyazo6LW1zLXRodW1iIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzYzNjM2O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtZGFyazo6LW1zLWZpbGwtbG93ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzNjM2O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtcHJpbWFyeTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICBib3JkZXItY29sb3I6ICMwMGQxYjI7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1wcmltYXJ5Ojotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICAgIC0tdHJhY2stYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCB2YXIoLS1sb3cpLCAjMDBkMWIyIGNhbGMoMCUpLCAjMDBkMWIyIHZhcigtLWhpZ2gpLCB0cmFuc3BhcmVudCBjYWxjKDAlKSkgbm8tcmVwZWF0IDAgMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhY2stYmFja2dyb3VuZCk7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1wcmltYXJ5OjotbW96LXJhbmdlLXRodW1iIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDBkMWIyO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtcHJpbWFyeTo6LW1vei1yYW5nZS1wcm9ncmVzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGQxYjI7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1wcmltYXJ5OjotbXMtdGh1bWIge1xcbiAgICBib3JkZXItY29sb3I6ICMwMGQxYjI7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1wcmltYXJ5OjotbXMtZmlsbC1sb3dlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGQxYjI7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1pbmZvOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgIGJvcmRlci1jb2xvcjogIzMyNzNkYztcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWluZm86Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gICAgLS10cmFjay1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IHZhcigtLWxvdyksICMzMjczZGMgY2FsYygwJSksICMzMjczZGMgdmFyKC0taGlnaCksIHRyYW5zcGFyZW50IGNhbGMoMCUpKSBuby1yZXBlYXQgMCAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFjay1iYWNrZ3JvdW5kKTtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWluZm86Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgICBib3JkZXItY29sb3I6ICMzMjczZGM7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1pbmZvOjotbW96LXJhbmdlLXByb2dyZXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNzNkYztcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWluZm86Oi1tcy10aHVtYiB7XFxuICAgIGJvcmRlci1jb2xvcjogIzMyNzNkYztcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLWluZm86Oi1tcy1maWxsLWxvd2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNzNkYztcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXN1Y2Nlc3M6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjNkMTYwO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtc3VjY2Vzczo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgICAtLXRyYWNrLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgdmFyKC0tbG93KSwgIzIzZDE2MCBjYWxjKDAlKSwgIzIzZDE2MCB2YXIoLS1oaWdoKSwgdHJhbnNwYXJlbnQgY2FsYygwJSkpIG5vLXJlcGVhdCAwIDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYWNrLWJhY2tncm91bmQpO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtc3VjY2Vzczo6LW1vei1yYW5nZS10aHVtYiB7XFxuICAgIGJvcmRlci1jb2xvcjogIzIzZDE2MDtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyLmlzLXN1Y2Nlc3M6Oi1tb3otcmFuZ2UtcHJvZ3Jlc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNkMTYwO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtc3VjY2Vzczo6LW1zLXRodW1iIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjNkMTYwO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtc3VjY2Vzczo6LW1zLWZpbGwtbG93ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNkMTYwO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtd2FybmluZzo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmRkNTc7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy13YXJuaW5nOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICAgIC0tdHJhY2stYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCB2YXIoLS1sb3cpLCAjZmZkZDU3IGNhbGMoMCUpLCAjZmZkZDU3IHZhcigtLWhpZ2gpLCB0cmFuc3BhcmVudCBjYWxjKDAlKSkgbm8tcmVwZWF0IDAgMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhY2stYmFja2dyb3VuZCk7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy13YXJuaW5nOjotbW96LXJhbmdlLXRodW1iIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZkZDU3O1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtd2FybmluZzo6LW1vei1yYW5nZS1wcm9ncmVzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRkNTc7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy13YXJuaW5nOjotbXMtdGh1bWIge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmRkNTc7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy13YXJuaW5nOjotbXMtZmlsbC1sb3dlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRkNTc7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1kYW5nZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmYzODYwO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtZGFuZ2VyOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICAgIC0tdHJhY2stYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB0cmFuc3BhcmVudCB2YXIoLS1sb3cpLCAjZmYzODYwIGNhbGMoMCUpLCAjZmYzODYwIHZhcigtLWhpZ2gpLCB0cmFuc3BhcmVudCBjYWxjKDAlKSkgbm8tcmVwZWF0IDAgMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhY2stYmFja2dyb3VuZCk7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1kYW5nZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xcbiAgICBib3JkZXItY29sb3I6ICNmZjM4NjA7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1kYW5nZXI6Oi1tb3otcmFuZ2UtcHJvZ3Jlc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzODYwO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXIuaXMtZGFuZ2VyOjotbXMtdGh1bWIge1xcbiAgICBib3JkZXItY29sb3I6ICNmZjM4NjA7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlci5pcy1kYW5nZXI6Oi1tcy1maWxsLWxvd2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzg2MDtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyW29yaWVudD12ZXJ0aWNhbF0ge1xcbiAgICAtd2Via2l0LXdyaXRpbmctbW9kZTogYnQtbHI7XFxuICAgICAgICAtbXMtd3JpdGluZy1tb2RlOiBidC1scjtcXG4gICAgICAgICAgICB3cml0aW5nLW1vZGU6IGJ0LWxyO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHNsaWRlci12ZXJ0aWNhbDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IHZhcigtLWhlaWdodCk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyW29yaWVudD12ZXJ0aWNhbF0uaXMtd2hpdGU6Oi13ZWJraXQtc2xpZGVyLXRodW1iOmFmdGVyIHtcXG4gICAgICB3aWR0aDogNTBweDtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB6LWluZGV4OiAyMzM7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcltvcmllbnQ9dmVydGljYWxdLmlzLXdoaXRlOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgLS10cmFjay1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCB2YXIoLS1sb3cpLCB3aGl0ZSAwLCB3aGl0ZSB2YXIoLS1oaWdoKSwgdHJhbnNwYXJlbnQgMCkgbm8tcmVwZWF0IDAgMTAwJTtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFjay1iYWNrZ3JvdW5kKTtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyW29yaWVudD12ZXJ0aWNhbF0uaXMtYmxhY2s6Oi13ZWJraXQtc2xpZGVyLXRodW1iOmFmdGVyIHtcXG4gICAgICB3aWR0aDogNTBweDtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwYTBhMGE7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHotaW5kZXg6IDIzMztcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyW29yaWVudD12ZXJ0aWNhbF0uaXMtYmxhY2s6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAtLXRyYWNrLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IHZhcigtLWxvdyksICMwYTBhMGEgMCwgIzBhMGEwYSB2YXIoLS1oaWdoKSwgdHJhbnNwYXJlbnQgMCkgbm8tcmVwZWF0IDAgMTAwJTtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFjay1iYWNrZ3JvdW5kKTtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyW29yaWVudD12ZXJ0aWNhbF0uaXMtbGlnaHQ6Oi13ZWJraXQtc2xpZGVyLXRodW1iOmFmdGVyIHtcXG4gICAgICB3aWR0aDogNTBweDtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlc21va2U7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHotaW5kZXg6IDIzMztcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyW29yaWVudD12ZXJ0aWNhbF0uaXMtbGlnaHQ6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAtLXRyYWNrLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IHZhcigtLWxvdyksIHdoaXRlc21va2UgMCwgd2hpdGVzbW9rZSB2YXIoLS1oaWdoKSwgdHJhbnNwYXJlbnQgMCkgbm8tcmVwZWF0IDAgMTAwJTtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFjay1iYWNrZ3JvdW5kKTtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyW29yaWVudD12ZXJ0aWNhbF0uaXMtZGFyazo6LXdlYmtpdC1zbGlkZXItdGh1bWI6YWZ0ZXIge1xcbiAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzM2MzYzNjtcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgei1pbmRleDogMjMzO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXJbb3JpZW50PXZlcnRpY2FsXS5pcy1kYXJrOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgLS10cmFjay1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCB2YXIoLS1sb3cpLCAjMzYzNjM2IDAsICMzNjM2MzYgdmFyKC0taGlnaCksIHRyYW5zcGFyZW50IDApIG5vLXJlcGVhdCAwIDEwMCU7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHJhY2stYmFja2dyb3VuZCk7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcltvcmllbnQ9dmVydGljYWxdLmlzLXByaW1hcnk6Oi13ZWJraXQtc2xpZGVyLXRodW1iOmFmdGVyIHtcXG4gICAgICB3aWR0aDogNTBweDtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMGQxYjI7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHotaW5kZXg6IDIzMztcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyW29yaWVudD12ZXJ0aWNhbF0uaXMtcHJpbWFyeTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIC0tdHJhY2stYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgdmFyKC0tbG93KSwgIzAwZDFiMiAwLCAjMDBkMWIyIHZhcigtLWhpZ2gpLCB0cmFuc3BhcmVudCAwKSBuby1yZXBlYXQgMCAxMDAlO1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYWNrLWJhY2tncm91bmQpO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXJbb3JpZW50PXZlcnRpY2FsXS5pcy1pbmZvOjotd2Via2l0LXNsaWRlci10aHVtYjphZnRlciB7XFxuICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzI3M2RjO1xcbiAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB6LWluZGV4OiAyMzM7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcltvcmllbnQ9dmVydGljYWxdLmlzLWluZm86Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAtLXRyYWNrLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHRyYW5zcGFyZW50IHZhcigtLWxvdyksICMzMjczZGMgMCwgIzMyNzNkYyB2YXIoLS1oaWdoKSwgdHJhbnNwYXJlbnQgMCkgbm8tcmVwZWF0IDAgMTAwJTtcXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFjay1iYWNrZ3JvdW5kKTtcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyW29yaWVudD12ZXJ0aWNhbF0uaXMtc3VjY2Vzczo6LXdlYmtpdC1zbGlkZXItdGh1bWI6YWZ0ZXIge1xcbiAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzIzZDE2MDtcXG4gICAgICBjb250ZW50OiAnJztcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgei1pbmRleDogMjMzO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXJbb3JpZW50PXZlcnRpY2FsXS5pcy1zdWNjZXNzOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgLS10cmFjay1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCB2YXIoLS1sb3cpLCAjMjNkMTYwIDAsICMyM2QxNjAgdmFyKC0taGlnaCksIHRyYW5zcGFyZW50IDApIG5vLXJlcGVhdCAwIDEwMCU7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHJhY2stYmFja2dyb3VuZCk7XFxufVxcbmlucHV0W3R5cGU9cmFuZ2VdLnNsaWRlcltvcmllbnQ9dmVydGljYWxdLmlzLXdhcm5pbmc6Oi13ZWJraXQtc2xpZGVyLXRodW1iOmFmdGVyIHtcXG4gICAgICB3aWR0aDogNTBweDtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmRkNTc7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHotaW5kZXg6IDIzMztcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyW29yaWVudD12ZXJ0aWNhbF0uaXMtd2FybmluZzo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIC0tdHJhY2stYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdHJhbnNwYXJlbnQgdmFyKC0tbG93KSwgI2ZmZGQ1NyAwLCAjZmZkZDU3IHZhcigtLWhpZ2gpLCB0cmFuc3BhcmVudCAwKSBuby1yZXBlYXQgMCAxMDAlO1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYWNrLWJhY2tncm91bmQpO1xcbn1cXG5pbnB1dFt0eXBlPXJhbmdlXS5zbGlkZXJbb3JpZW50PXZlcnRpY2FsXS5pcy1kYW5nZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iOmFmdGVyIHtcXG4gICAgICB3aWR0aDogNTBweDtcXG4gICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZjM4NjA7XFxuICAgICAgY29udGVudDogJyc7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHotaW5kZXg6IDIzMztcXG59XFxuaW5wdXRbdHlwZT1yYW5nZV0uc2xpZGVyW29yaWVudD12ZXJ0aWNhbF0uaXMtZGFuZ2VyOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgLS10cmFjay1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCB0cmFuc3BhcmVudCB2YXIoLS1sb3cpLCAjZmYzODYwIDAsICNmZjM4NjAgdmFyKC0taGlnaCksIHRyYW5zcGFyZW50IDApIG5vLXJlcGVhdCAwIDEwMCU7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHJhY2stYmFja2dyb3VuZCk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTcxNTdhOGY3XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vfi92dWUtYnVsbWEtc2xpZGVyL3NyYy9TbGlkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA2NDJcbi8vIG1vZHVsZSBjaHVua3MgPSAyMiIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03MTU3YThmN1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1NsaWRlci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1NsaWRlci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzE1N2E4ZjdcXFwifSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TbGlkZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL25vZGVfbW9kdWxlcy92dWUtYnVsbWEtc2xpZGVyL3NyYy9TbGlkZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gU2xpZGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03MTU3YThmN1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTcxNTdhOGY3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWJ1bG1hLXNsaWRlci9zcmMvU2xpZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMjIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtYW5jZXN0b3JcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudCBpcy00XCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJTdHlsZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibG9jayBzdHlsZXMtYm94XCJcbiAgfSwgW19jKCdwJywgW19jKCdzbGlkZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidmFsdWVcIjogMTUsXG4gICAgICBcIm1heFwiOiAxMDAsXG4gICAgICBcInN0ZXBcIjogMSxcbiAgICAgIFwiaXMtZnVsbHdpZHRoXCI6IFwiXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW19jKCdzbGlkZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInByaW1hcnlcIixcbiAgICAgIFwidmFsdWVcIjogMzAsXG4gICAgICBcIm1heFwiOiAxMDAsXG4gICAgICBcInN0ZXBcIjogMTAsXG4gICAgICBcImlzLWZ1bGx3aWR0aFwiOiBcIlwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfYygnc2xpZGVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJpbmZvXCIsXG4gICAgICBcInZhbHVlXCI6IDQ1LFxuICAgICAgXCJtYXhcIjogMTAwLFxuICAgICAgXCJzdGVwXCI6IDUsXG4gICAgICBcImlzLWZ1bGx3aWR0aFwiOiBcIlwiXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfYygnc2xpZGVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWNjZXNzXCIsXG4gICAgICBcInZhbHVlXCI6IDYwLFxuICAgICAgXCJtYXhcIjogMTAwLFxuICAgICAgXCJzdGVwXCI6IDIwLFxuICAgICAgXCJpcy1mdWxsd2lkdGhcIjogXCJcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCBbX2MoJ3NsaWRlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwid2FybmluZ1wiLFxuICAgICAgXCJ2YWx1ZVwiOiA3NSxcbiAgICAgIFwibWF4XCI6IDEwMCxcbiAgICAgIFwic3RlcFwiOiAyNSxcbiAgICAgIFwiaXMtZnVsbHdpZHRoXCI6IFwiXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW19jKCdzbGlkZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImRhbmdlclwiLFxuICAgICAgXCJ2YWx1ZVwiOiA5MCxcbiAgICAgIFwibWF4XCI6IDEwMCxcbiAgICAgIFwic3RlcFwiOiAxMCxcbiAgICAgIFwiaXMtZnVsbHdpZHRoXCI6IFwiXCJcbiAgICB9XG4gIH0pXSwgMSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnQgaXMtNFwiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiU2l6ZXNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibG9ja1wiXG4gIH0sIFtfYygncCcsIFtfYygnc2xpZGVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInNpemVcIjogXCJzbWFsbFwiLFxuICAgICAgXCJ2YWx1ZVwiOiAxNSxcbiAgICAgIFwibWF4XCI6IDEwMCxcbiAgICAgIFwiaXMtZnVsbHdpZHRoXCI6IFwiXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW19jKCdzbGlkZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2l6ZVwiOiBcIlwiLFxuICAgICAgXCJ2YWx1ZVwiOiAzMCxcbiAgICAgIFwibWF4XCI6IDEwMCxcbiAgICAgIFwiaXMtZnVsbHdpZHRoXCI6IFwiXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW19jKCdzbGlkZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2l6ZVwiOiBcIm1lZGl1bVwiLFxuICAgICAgXCJ2YWx1ZVwiOiA0NSxcbiAgICAgIFwibWF4XCI6IDEwMCxcbiAgICAgIFwiaXMtZnVsbHdpZHRoXCI6IFwiXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwJywgW19jKCdzbGlkZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic2l6ZVwiOiBcImxhcmdlXCIsXG4gICAgICBcInZhbHVlXCI6IDYwLFxuICAgICAgXCJtYXhcIjogMTAwLFxuICAgICAgXCJpcy1mdWxsd2lkdGhcIjogXCJcIlxuICAgIH1cbiAgfSldLCAxKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudCBpcy00XCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJEeW5hbWljc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrXCJcbiAgfSwgW19jKCdwJywgW19jKCd0b29sdGlwJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWNjZXNzXCIsXG4gICAgICBcImxhYmVsXCI6IF92bS5wZXIsXG4gICAgICBcInBsYWNlbWVudFwiOiBcInRvcFwiLFxuICAgICAgXCJhbHdheXNcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRvb2x0aXAtdmFsdWVcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc2xpZGVyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJzdWNjZXNzXCIsXG4gICAgICBcInNpemVcIjogXCJsYXJnZVwiLFxuICAgICAgXCJ2YWx1ZVwiOiBfdm0udmFsdWUsXG4gICAgICBcIm1heFwiOiAxMDAsXG4gICAgICBcInN0ZXBcIjogMSxcbiAgICAgIFwiaXMtZnVsbHdpZHRoXCI6IFwiXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBfdm0udXBkYXRlXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0udmFsdWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ2YWx1ZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICBcIm1pblwiOiBcIjBcIixcbiAgICAgIFwibWF4XCI6IFwiMTAwXCIsXG4gICAgICBcIm51bWJlclwiOiBcIlwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLnZhbHVlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLnZhbHVlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfSxcbiAgICAgIFwiYmx1clwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLiRmb3JjZVVwZGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0pXSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi01YzYzOWIxYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTVjNjM5YjFhXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvU2xpZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMjIiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLnJlYWxWYWx1ZSksXG4gICAgICBleHByZXNzaW9uOiBcInJlYWxWYWx1ZVwiXG4gICAgfV0sXG4gICAgY2xhc3M6IF92bS5jbGFzc09iamVjdCxcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicmFuZ2VcIixcbiAgICAgIFwibWluXCI6IF92bS5taW4sXG4gICAgICBcIm1heFwiOiBfdm0ubWF4LFxuICAgICAgXCJzdGVwXCI6IF92bS5zdGVwLFxuICAgICAgXCJuYW1lXCI6IF92bS5uYW1lLFxuICAgICAgXCJvcmllbnRcIjogX3ZtLnZlcnRpY2FsICYmICd2ZXJ0aWNhbCcsXG4gICAgICBcImRpc2FibGVkXCI6IF92bS5kaXNhYmxlZCxcbiAgICAgIFwibnVtYmVyXCI6IFwiXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0ucmVhbFZhbHVlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiX19yXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0ucmVhbFZhbHVlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNzE1N2E4ZjdcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03MTU3YThmN1wifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi92dWUtYnVsbWEtc2xpZGVyL3NyYy9TbGlkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA3NDZcbi8vIG1vZHVsZSBjaHVua3MgPSAyMiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01YzYzOWIxYVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1NsaWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImQ0MjU5YTk2XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVjNjM5YjFhXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2xpZGVyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01YzYzOWIxYVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1NsaWRlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTVjNjM5YjFhXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvU2xpZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMjIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTcxNTdhOGY3XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TbGlkZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjU2NTIwZDkyXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03MTU3YThmN1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2xpZGVyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzE1N2E4ZjdcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1NsaWRlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTcxNTdhOGY3XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vfi92dWUtYnVsbWEtc2xpZGVyL3NyYy9TbGlkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA3OTJcbi8vIG1vZHVsZSBjaHVua3MgPSAyMiJdLCJzb3VyY2VSb290IjoiIn0=
webpackJsonp([6],{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(787)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(584),
  /* template */
  __webpack_require__(738),
  /* scopeId */
  "data-v-57257c16",
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/components/Datepicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Datepicker.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-57257c16", Component.options)
  } else {
    hotAPI.reload("data-v-57257c16", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    alignment: String,
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    l10n: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    placeholder: {
      type: String,
      default: 'Pick date'
    },
    inputClass: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    value: String
  },

  computed: {
    date: {
      get: function get() {
        return this.value;
      },
      set: function set(newValue) {
        this.$emit('input', newValue);
      }
    }
  }
};

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseInput = __webpack_require__(344);

var _BaseInput2 = _interopRequireDefault(_BaseInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_BaseInput2.default],

  props: {
    readonly: Boolean
  }
}; //
//
//
//

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseInput = __webpack_require__(344);

var _BaseInput2 = _interopRequireDefault(_BaseInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_BaseInput2.default],

  props: {
    readonly: Boolean
  }
}; //
//
//
//
//
//
//

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flatpickr = __webpack_require__(671);

var _flatpickr2 = _interopRequireDefault(_flatpickr);

var _BaseInput = __webpack_require__(344);

var _BaseInput2 = _interopRequireDefault(_BaseInput);

var _SingleInput = __webpack_require__(685);

var _SingleInput2 = _interopRequireDefault(_SingleInput);

var _WrapperInput = __webpack_require__(686);

var _WrapperInput2 = _interopRequireDefault(_WrapperInput);

var _vueClickOutside = __webpack_require__(678);

var _vueClickOutside2 = _interopRequireDefault(_vueClickOutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Datepicker(selector, config, l10n) {
  this.l10n = Object.assign({}, _flatpickr2.default.prototype.l10n, l10n);
  return _flatpickr2.default.call(this, selector, config);
} //
//
//
//
//
//

Datepicker.prototype = _flatpickr2.default.prototype;

exports.default = {
  mixins: [_BaseInput2.default],

  components: {
    SingleInput: _SingleInput2.default,
    WrapperInput: _WrapperInput2.default
  },

  data: function data() {
    return {
      datepicker: null
    };
  },
  mounted: function mounted() {
    if (!this.datepicker) {
      this.datepicker = new Datepicker(this.$el, this.config, this.l10n);
      this.popupItem = this.datepicker.calendarContainer;
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.datepicker && !this.static) {
      this.datepicker.destroy();
      this.datepicker = null;
    }
  },


  computed: {
    wrap: function wrap() {
      return !!this.config.wrap;
    },
    static: function _static() {
      return !!this.config.static;
    },
    name: function name() {
      return this.wrap ? 'wrapperInput' : 'singleInput';
    }
  },

  methods: {
    closePicker: function closePicker() {
      this.datepicker.close();
    }
  },

  directives: {
    ClickOutside: _vueClickOutside2.default
  }
};

/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueBulmaDatepicker = __webpack_require__(687);

var _vueBulmaDatepicker2 = _interopRequireDefault(_vueBulmaDatepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Datepicker: _vueBulmaDatepicker2.default
  },

  data: function data() {
    return {
      value: '2016-12-12'
    };
  },
  mounted: function mounted() {
    var _$refs = this.$refs,
        checkIn = _$refs.checkIn,
        checkOut = _$refs.checkOut;

    checkIn.datepicker.set('onChange', function (selectedDates, dateStr, instance) {
      checkOut.datepicker.set('minDate', selectedDates[0].fp_incr(1));
    });

    checkOut.datepicker.set('onChange', function (selectedDates, dateStr, instance) {
      checkIn.datepicker.set('maxDate', dateStr);
    });
  },


  computed: {
    today: function today() {
      return new Date();
    },
    maxDate: function maxDate() {
      var d = new Date();
      d.setDate(32);
      return d;
    },
    placeholder: function placeholder() {
      return 'minDate: today, maxDate: ' + this.maxDate.getFullYear() + '-' + (this.maxDate.getMonth() + 1) + '-' + this.maxDate.getDate();
    },

    // https://github.com/chmln/flatpickr/blob/gh-pages/src/flatpickr.l10n.zh.js
    l10n: function l10n() {
      return {
        firstDayOfWeek: 1,
        weekdays: {
          shorthand: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
          longhand: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        },
        months: {
          shorthand: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          longhand: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
        }
      };
    }
  },

  watch: {
    value: function value(newVal, oldVal) {
      console.log(newVal, oldVal);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.flatpickr-calendar {\n  background: transparent;\n  overflow: hidden;\n  max-height: 0;\n  opacity: 0;\n  visibility: hidden;\n  text-align: center;\n  padding: 0;\n  -webkit-animation: none;\n          animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 315px;\n  box-sizing: border-box;\n  transition: top cubic-bezier(0, 1, 0.5, 1) 100ms;\n  z-index: 999;\n  background: #fff;\n  box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0,0,0,0.08);\n}\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  visibility: visible;\n  overflow: visible;\n  max-height: 640px;\n}\n.flatpickr-calendar.open {\n  display: inline-block;\n  -webkit-animation: flatpickrFadeInDown 300ms cubic-bezier(0, 1, 0.5, 1);\n          animation: flatpickrFadeInDown 300ms cubic-bezier(0, 1, 0.5, 1);\n}\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n.flatpickr-calendar.static.open {\n  display: block;\n}\n.flatpickr-calendar.hasWeeks {\n  width: auto;\n}\n.flatpickr-calendar.dateIsPicked.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid #e6e6e6;\n}\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: '';\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.rightMost:after {\n  left: auto;\n  right: 22px;\n}\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: #e6e6e6;\n}\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: #fff;\n}\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: #e6e6e6;\n}\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: #fff;\n}\n.flatpickr-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.flatpickr-month {\n  background: transparent;\n  color: rgba(0,0,0,0.9);\n  fill: rgba(0,0,0,0.9);\n  height: 28px;\n  line-height: 24px;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.flatpickr-prev-month,\n.flatpickr-next-month {\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  height: 16px;\n  line-height: 16px;\n}\n.flatpickr-prev-month i,\n.flatpickr-next-month i {\n  position: relative;\n}\n.flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-next-month.flatpickr-prev-month {\n/*\n        /*rtl:begin:ignore*/\n/*\n        */\n  left: calc(3.57% - 1.5px);\n/*\n        /*rtl:end:ignore*/\n/*\n        */\n}\n/*\n        /*rtl:begin:ignore*/\n/*\n        /*rtl:end:ignore*/\n.flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-next-month.flatpickr-next-month {\n/*\n        /*rtl:begin:ignore*/\n/*\n        */\n  right: calc(3.57% - 1.5px);\n/*\n        /*rtl:end:ignore*/\n/*\n        */\n}\n/*\n        /*rtl:begin:ignore*/\n/*\n        /*rtl:end:ignore*/\n.flatpickr-prev-month:hover,\n.flatpickr-next-month:hover {\n  color: #959ea9;\n}\n.flatpickr-prev-month:hover svg,\n.flatpickr-next-month:hover svg {\n  fill: #f64747;\n}\n.flatpickr-prev-month svg,\n.flatpickr-next-month svg {\n  width: 14px;\n}\n.flatpickr-prev-month svg path,\n.flatpickr-next-month svg path {\n  transition: fill 0.1s;\n  fill: inherit;\n}\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n.numInputWrapper input {\n  width: 100%;\n}\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(57,57,57,0.05);\n  box-sizing: border-box;\n}\n.numInputWrapper span:hover {\n  background: rgba(0,0,0,0.1);\n}\n.numInputWrapper span:active {\n  background: rgba(0,0,0,0.2);\n}\n.numInputWrapper span:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 33%;\n}\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(57,57,57,0.6);\n}\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(57,57,57,0.6);\n}\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n.numInputWrapper span svg path {\n  fill: rgba(0,0,0,0.5);\n}\n.numInputWrapper:hover {\n  background: rgba(0,0,0,0.05);\n}\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  top: 5px;\n  display: inline-block;\n  text-align: center;\n}\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 7px;\n  padding: 0;\n}\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0;\n  display: inline-block;\n}\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: rgba(0,0,0,0.9);\n}\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: rgba(0,0,0,0.9);\n}\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: default;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: initial;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n}\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: rgba(0,0,0,0.5);\n  background: transparent;\n  pointer-events: none;\n}\n.flatpickr-weekdays {\n  background: transparent;\n  text-align: center;\n  overflow: hidden;\n}\n.flatpickr-days,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n.flatpickr-days {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 315px;\n  box-sizing: border-box;\n  display: inline-block;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  box-sizing: border-box;\n  color: #393939;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  -ms-flex-preferred-size: 14.2857143%;\n      flex-basis: 14.2857143%;\n  max-width: 40px;\n  height: 40px;\n  line-height: 40px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: #e6e6e6;\n  border-color: #e6e6e6;\n}\n.flatpickr-day.today {\n  border-color: #959ea9;\n}\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: #959ea9;\n  background: #959ea9;\n  color: #fff;\n}\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: #569ff7;\n  color: #fff;\n  border-color: #569ff7;\n}\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n.flatpickr-day.inRange {\n  border-radius: 0;\n  box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover {\n  pointer-events: none;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(57,57,57,0.3);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  color: rgba(0,0,0,0.54);\n  height: 27.333333333333332px;\n  line-height: 24px;\n  margin: 0;\n  background: transparent;\n  text-align: center;\n  display: block;\n  float: left;\n  width: 14.28%;\n  font-weight: bold;\n  margin: 0;\n  padding-top: 3.333333333333333px;\n}\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n.flatpickr-weekwrapper {\n  display: inline-block;\n  float: left;\n}\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 1px 12px 0 12px;\n  box-shadow: 1px 0 0 #e6e6e6;\n}\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n}\n.flatpickr-weekwrapper span.flatpickr-day {\n  display: block;\n  width: 100%;\n  max-width: none;\n}\n.flatpickr-innerContainer {\n  display: block;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  box-sizing: border-box;\n}\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  box-sizing: border-box;\n  overflow: hidden;\n  transition: height 0.33s cubic-bezier(0, 1, 0.5, 1);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flatpickr-time:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.flatpickr-time .numInputWrapper {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #393939;\n}\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: #393939;\n}\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n.flatpickr-time input {\n  background: transparent;\n  box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  cursor: pointer;\n  color: #393939;\n  font-size: 14px;\n  position: relative;\n  box-sizing: border-box;\n}\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  display: inline-block;\n  float: left;\n  line-height: inherit;\n  color: #393939;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: #f0f0f0;\n}\n.hasWeeks .flatpickr-days,\n.hasTime .flatpickr-days {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.hasWeeks .flatpickr-days {\n  border-left: 0;\n}\n@media all and (-ms-high-contrast: none) {\n.flatpickr-month {\n    padding: 0;\n}\n.flatpickr-month svg {\n    top: 0 !important;\n}\n}\n@-webkit-keyframes flatpickrFadeInDown {\nfrom {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n}\n}\n@keyframes flatpickrFadeInDown {\nfrom {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n}\n}\n.flatpickr-calendar.hasWeeks {\n  width: auto !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.tile.is-parent[data-v-57257c16] {\n  min-width: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! flatpickr v2.4.2, @license MIT */
function Flatpickr(element, config) {
	var self = this;

	self.changeMonth = changeMonth;
	self.changeYear = changeYear;
	self.clear = clear;
	self.close = close;
	self._createElement = createElement;
	self.destroy = destroy;
	self.formatDate = formatDate;
	self.isEnabled = isEnabled;
	self.jumpToDate = jumpToDate;
	self.open = open;
	self.redraw = redraw;
	self.set = set;
	self.setDate = setDate;
	self.toggle = toggle;

	function init() {
		if (element._flatpickr) destroy(element._flatpickr);

		element._flatpickr = self;

		self.element = element;
		self.instanceConfig = config || {};
		self.parseDate = Flatpickr.prototype.parseDate.bind(self);

		setupFormats();

		parseConfig();
		setupLocale();
		setupInputs();
		setupDates();
		setupHelperFunctions();

		self.isOpen = self.config.inline;

		self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

		if (!self.isMobile) build();

		bind();

		if (!self.isMobile) {
			Object.defineProperty(self, "dateIsPicked", {
				set: function set(bool) {
					toggleClass(self.calendarContainer, "dateIsPicked", bool);
				}
			});
		}

		self.dateIsPicked = self.selectedDates.length > 0 || self.config.noCalendar;

		if (self.selectedDates.length) {
			if (self.config.enableTime) setHoursFromDate();
			updateValue();
		}

		if (self.config.weekNumbers) {
			self.calendarContainer.style.width = self.days.clientWidth + self.weekWrapper.clientWidth + "px";
		}

		triggerEvent("Ready");
	}

	function updateTime(e) {
		if (self.config.noCalendar && !self.selectedDates.length)
			// picking time only
			self.selectedDates = [self.now];

		timeWrapper(e);

		if (!self.selectedDates.length) return;

		if (!self.minDateHasTime || e.type !== "input" || e.target.value.length >= 2) {
			setHoursFromInputs();
			updateValue();
		} else {
			setTimeout(function () {
				setHoursFromInputs();
				updateValue();
			}, 1000);
		}
	}

	function setHoursFromInputs() {
		if (!self.config.enableTime) return;

		var hours = parseInt(self.hourElement.value, 10) || 0,
		    minutes = parseInt(self.minuteElement.value, 10) || 0,
		    seconds = self.config.enableSeconds ? parseInt(self.secondElement.value, 10) || 0 : 0;

		if (self.amPM) hours = hours % 12 + 12 * (self.amPM.textContent === "PM");

		if (self.minDateHasTime && compareDates(self.latestSelectedDateObj, self.config.minDate) === 0) {

			hours = Math.max(hours, self.config.minDate.getHours());
			if (hours === self.config.minDate.getHours()) minutes = Math.max(minutes, self.config.minDate.getMinutes());
		}

		if (self.maxDateHasTime && compareDates(self.latestSelectedDateObj, self.config.maxDate) === 0) {
			hours = Math.min(hours, self.config.maxDate.getHours());
			if (hours === self.config.maxDate.getHours()) minutes = Math.min(minutes, self.config.maxDate.getMinutes());
		}

		setHours(hours, minutes, seconds);
	}

	function setHoursFromDate(dateObj) {
		var date = dateObj || self.latestSelectedDateObj;

		if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
	}

	function setHours(hours, minutes, seconds) {
		if (self.selectedDates.length) {
			self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
		}

		if (!self.config.enableTime || self.isMobile) return;

		self.hourElement.value = self.pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (hours % 12 === 0) : hours);

		self.minuteElement.value = self.pad(minutes);

		if (!self.config.time_24hr && self.selectedDates.length) self.amPM.textContent = self.latestSelectedDateObj.getHours() >= 12 ? "PM" : "AM";

		if (self.config.enableSeconds) self.secondElement.value = self.pad(seconds);
	}

	function onYearInput(event) {
		var year = event.target.value;
		if (year.length === 4) {
			self.currentYearElement.blur();
			if (!/[^\d]/.test(year)) changeYear(year);
		}
	}

	function onMonthScroll(e) {
		e.preventDefault();
		self.changeMonth(Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)));
	}

	function bind() {
		if (self.config.wrap) {
			["open", "close", "toggle", "clear"].forEach(function (el) {
				var toggles = self.element.querySelectorAll("[data-" + el + "]");
				for (var i = 0; i < toggles.length; i++) {
					toggles[i].addEventListener("click", self[el]);
				}
			});
		}

		if (window.document.createEvent !== undefined) {
			self.changeEvent = window.document.createEvent("HTMLEvents");
			self.changeEvent.initEvent("change", false, true);
		}

		if (self.isMobile) return setupMobile();

		self.debouncedResize = debounce(onResize, 50);
		self.triggerChange = function () {
			triggerEvent("Change");
		};
		self.debouncedChange = debounce(self.triggerChange, 300);

		if (self.config.mode === "range" && self.days) self.days.addEventListener("mouseover", onMouseOver);

		window.document.addEventListener("keydown", onKeyDown);

		if (!self.config.inline && !self.config.static) window.addEventListener("resize", self.debouncedResize);

		if (window.ontouchstart) window.document.addEventListener("touchstart", documentClick);

		window.document.addEventListener("click", documentClick);
		window.document.addEventListener("blur", documentClick);

		if (self.config.clickOpens) (self.altInput || self.input).addEventListener("focus", open);

		if (!self.config.noCalendar) {
			self.prevMonthNav.addEventListener("click", function () {
				return changeMonth(-1);
			});
			self.nextMonthNav.addEventListener("click", function () {
				return changeMonth(1);
			});

			self.currentMonthElement.addEventListener("wheel", function (e) {
				return debounce(onMonthScroll(e), 50);
			});
			self.currentYearElement.addEventListener("wheel", function (e) {
				return debounce(yearScroll(e), 50);
			});
			self.currentYearElement.addEventListener("focus", function () {
				self.currentYearElement.select();
			});

			self.currentYearElement.addEventListener("input", onYearInput);
			self.currentYearElement.addEventListener("increment", onYearInput);

			self.days.addEventListener("click", selectDate);
		}

		if (self.config.enableTime) {
			self.timeContainer.addEventListener("transitionend", positionCalendar);
			self.timeContainer.addEventListener("wheel", function (e) {
				return debounce(updateTime(e), 5);
			});
			self.timeContainer.addEventListener("input", updateTime);
			self.timeContainer.addEventListener("increment", updateTime);
			self.timeContainer.addEventListener("increment", self.debouncedChange);

			self.timeContainer.addEventListener("wheel", self.debouncedChange);
			self.timeContainer.addEventListener("input", self.triggerChange);

			self.hourElement.addEventListener("focus", function () {
				self.hourElement.select();
			});
			self.minuteElement.addEventListener("focus", function () {
				self.minuteElement.select();
			});

			if (self.secondElement) {
				self.secondElement.addEventListener("focus", function () {
					self.secondElement.select();
				});
			}

			if (self.amPM) {
				self.amPM.addEventListener("click", function (e) {
					updateTime(e);
					self.triggerChange(e);
				});
			}
		}
	}

	function jumpToDate(jumpDate) {
		jumpDate = jumpDate ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);

		try {
			self.currentYear = jumpDate.getFullYear();
			self.currentMonth = jumpDate.getMonth();
		} catch (e) {
			/* istanbul ignore next */
			console.error(e.stack);
			/* istanbul ignore next */
			console.warn("Invalid date supplied: " + jumpDate);
		}

		self.redraw();
	}

	function incrementNumInput(e, delta) {
		var input = e.target.parentNode.childNodes[0];
		input.value = parseInt(input.value, 10) + delta * (input.step || 1);

		try {
			input.dispatchEvent(new Event("increment", { "bubbles": true }));
		} catch (e) {
			var ev = window.document.createEvent("CustomEvent");
			ev.initCustomEvent("increment", true, true, {});
			input.dispatchEvent(ev);
		}
	}

	function createNumberInput(inputClassName) {
		var wrapper = createElement("div", "numInputWrapper"),
		    numInput = createElement("input", "numInput " + inputClassName),
		    arrowUp = createElement("span", "arrowUp"),
		    arrowDown = createElement("span", "arrowDown");

		numInput.type = "text";
		numInput.pattern = "\\d*";
		wrapper.appendChild(numInput);
		wrapper.appendChild(arrowUp);
		wrapper.appendChild(arrowDown);

		arrowUp.addEventListener("click", function (e) {
			return incrementNumInput(e, 1);
		});
		arrowDown.addEventListener("click", function (e) {
			return incrementNumInput(e, -1);
		});
		return wrapper;
	}

	function build() {
		var fragment = window.document.createDocumentFragment();
		self.calendarContainer = createElement("div", "flatpickr-calendar");
		self.numInputType = navigator.userAgent.indexOf("MSIE 9.0") > 0 ? "text" : "number";

		if (!self.config.noCalendar) {
			fragment.appendChild(buildMonthNav());
			self.innerContainer = createElement("div", "flatpickr-innerContainer");

			if (self.config.weekNumbers) self.innerContainer.appendChild(buildWeeks());

			self.rContainer = createElement("div", "flatpickr-rContainer");
			self.rContainer.appendChild(buildWeekdays());

			if (!self.days) {
				self.days = createElement("div", "flatpickr-days");
				self.days.tabIndex = -1;
			}

			buildDays();
			self.rContainer.appendChild(self.days);

			self.innerContainer.appendChild(self.rContainer);
			fragment.appendChild(self.innerContainer);
		}

		if (self.config.enableTime) fragment.appendChild(buildTime());

		if (self.config.mode === "range") self.calendarContainer.classList.add("rangeMode");

		self.calendarContainer.appendChild(fragment);

		var customAppend = self.config.appendTo && self.config.appendTo.nodeType;

		if (self.config.inline || self.config.static) {
			self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
			positionCalendar();

			if (self.config.inline && !customAppend) {
				return self.element.parentNode.insertBefore(self.calendarContainer, (self.altInput || self.input).nextSibling);
			}

			if (self.config.static) {
				var wrapper = createElement("div", "flatpickr-wrapper");
				self.element.parentNode.insertBefore(wrapper, self.element);
				wrapper.appendChild(self.element);
				wrapper.appendChild(self.calendarContainer);
				return;
			}
		}

		(customAppend ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
	}

	function createDay(className, date, dayNumber) {
		var dateIsEnabled = isEnabled(date, true),
		    dayElement = createElement("span", "flatpickr-day " + className, date.getDate());

		dayElement.dateObj = date;

		toggleClass(dayElement, "today", compareDates(date, self.now) === 0);

		if (dateIsEnabled) {
			dayElement.tabIndex = 0;

			if (isDateSelected(date)) {
				dayElement.classList.add("selected");
				self.selectedDateElem = dayElement;
				if (self.config.mode === "range") {
					toggleClass(dayElement, "startRange", compareDates(date, self.selectedDates[0]) === 0);

					toggleClass(dayElement, "endRange", compareDates(date, self.selectedDates[1]) === 0);
				}
			}
		} else {
			dayElement.classList.add("disabled");
			if (self.selectedDates[0] && date > self.minRangeDate && date < self.selectedDates[0]) self.minRangeDate = date;else if (self.selectedDates[0] && date < self.maxRangeDate && date > self.selectedDates[0]) self.maxRangeDate = date;
		}

		if (self.config.mode === "range") {
			if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");

			if (self.selectedDates.length === 1 && (date < self.minRangeDate || date > self.maxRangeDate)) dayElement.classList.add("notAllowed");
		}

		if (self.config.weekNumbers && className !== "prevMonthDay" && dayNumber % 7 === 1) {
			self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='disabled flatpickr-day'>" + self.config.getWeek(date) + "</span>");
		}

		triggerEvent("DayCreate", dayElement);

		return dayElement;
	}

	function buildDays(year, month) {
		var firstOfMonth = (new Date(self.currentYear, self.currentMonth, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7,
		    isRangeMode = self.config.mode === "range";

		self.prevMonthDays = self.utils.getDaysinMonth((self.currentMonth - 1 + 12) % 12);

		var daysInMonth = self.utils.getDaysinMonth(),
		    days = window.document.createDocumentFragment();

		var dayNumber = self.prevMonthDays + 1 - firstOfMonth;

		if (self.config.weekNumbers && self.weekNumbers.firstChild) self.weekNumbers.textContent = "";

		if (isRangeMode) {
			// const dateLimits = self.config.enable.length || self.config.disable.length || self.config.mixDate || self.config.maxDate;
			self.minRangeDate = new Date(self.currentYear, self.currentMonth - 1, dayNumber);
			self.maxRangeDate = new Date(self.currentYear, self.currentMonth + 1, (42 - firstOfMonth) % daysInMonth);
		}

		if (self.days.firstChild) self.days.textContent = "";

		// prepend days from the ending of previous month
		for (var i = 0; dayNumber <= self.prevMonthDays; i++, dayNumber++) {
			days.appendChild(createDay("prevMonthDay", new Date(self.currentYear, self.currentMonth - 1, dayNumber), dayNumber));
		}

		// Start at 1 since there is no 0th day
		for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
			days.appendChild(createDay("", new Date(self.currentYear, self.currentMonth, dayNumber), dayNumber));
		}

		// append days from the next month
		for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth; dayNum++) {
			days.appendChild(createDay("nextMonthDay", new Date(self.currentYear, self.currentMonth + 1, dayNum % daysInMonth), dayNum));
		}

		if (isRangeMode && self.selectedDates.length === 1 && days.childNodes[0]) {
			self._hidePrevMonthArrow = self._hidePrevMonthArrow || self.minRangeDate > days.childNodes[0].dateObj;

			self._hideNextMonthArrow = self._hideNextMonthArrow || self.maxRangeDate < days.childNodes[41].dateObj;
		} else updateNavigationCurrentMonth();

		self.days.appendChild(days);
		return self.days;
	}

	function buildMonthNav() {
		var monthNavFragment = window.document.createDocumentFragment();
		self.monthNav = createElement("div", "flatpickr-month");

		self.prevMonthNav = createElement("span", "flatpickr-prev-month");
		self.prevMonthNav.innerHTML = self.config.prevArrow;

		self.currentMonthElement = createElement("span", "cur-month");
		self.currentMonthElement.title = self.l10n.scrollTitle;

		var yearInput = createNumberInput("cur-year");
		self.currentYearElement = yearInput.childNodes[0];
		self.currentYearElement.title = self.l10n.scrollTitle;

		if (self.config.minDate) self.currentYearElement.min = self.config.minDate.getFullYear();

		if (self.config.maxDate) {
			self.currentYearElement.max = self.config.maxDate.getFullYear();

			self.currentYearElement.disabled = self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
		}

		self.nextMonthNav = createElement("span", "flatpickr-next-month");
		self.nextMonthNav.innerHTML = self.config.nextArrow;

		self.navigationCurrentMonth = createElement("span", "flatpickr-current-month");
		self.navigationCurrentMonth.appendChild(self.currentMonthElement);
		self.navigationCurrentMonth.appendChild(yearInput);

		monthNavFragment.appendChild(self.prevMonthNav);
		monthNavFragment.appendChild(self.navigationCurrentMonth);
		monthNavFragment.appendChild(self.nextMonthNav);
		self.monthNav.appendChild(monthNavFragment);

		Object.defineProperty(self, "_hidePrevMonthArrow", {
			get: function get() {
				return this.__hidePrevMonthArrow;
			},
			set: function set(bool) {
				if (this.__hidePrevMonthArrow !== bool) self.prevMonthNav.style.display = bool ? "none" : "block";
				this.__hidePrevMonthArrow = bool;
			}
		});

		Object.defineProperty(self, "_hideNextMonthArrow", {
			get: function get() {
				return this.__hideNextMonthArrow;
			},
			set: function set(bool) {
				if (this.__hideNextMonthArrow !== bool) self.nextMonthNav.style.display = bool ? "none" : "block";
				this.__hideNextMonthArrow = bool;
			}
		});

		updateNavigationCurrentMonth();

		return self.monthNav;
	}

	function buildTime() {
		self.calendarContainer.classList.add("hasTime");
		if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
		self.timeContainer = createElement("div", "flatpickr-time");
		self.timeContainer.tabIndex = -1;
		var separator = createElement("span", "flatpickr-time-separator", ":");

		var hourInput = createNumberInput("flatpickr-hour");
		self.hourElement = hourInput.childNodes[0];

		var minuteInput = createNumberInput("flatpickr-minute");
		self.minuteElement = minuteInput.childNodes[0];

		self.hourElement.tabIndex = self.minuteElement.tabIndex = 0;

		self.hourElement.value = self.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.defaultHour);

		self.minuteElement.value = self.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);

		self.hourElement.step = self.config.hourIncrement;
		self.minuteElement.step = self.config.minuteIncrement;

		self.hourElement.min = self.config.time_24hr ? 0 : 1;
		self.hourElement.max = self.config.time_24hr ? 23 : 12;

		self.minuteElement.min = 0;
		self.minuteElement.max = 59;

		self.hourElement.title = self.minuteElement.title = self.l10n.scrollTitle;

		self.timeContainer.appendChild(hourInput);
		self.timeContainer.appendChild(separator);
		self.timeContainer.appendChild(minuteInput);

		if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

		if (self.config.enableSeconds) {
			self.timeContainer.classList.add("hasSeconds");

			var secondInput = createNumberInput("flatpickr-second");
			self.secondElement = secondInput.childNodes[0];

			self.secondElement.value = self.latestSelectedDateObj ? self.pad(self.latestSelectedDateObj.getSeconds()) : "00";

			self.secondElement.step = self.minuteElement.step;
			self.secondElement.min = self.minuteElement.min;
			self.secondElement.max = self.minuteElement.max;

			self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
			self.timeContainer.appendChild(secondInput);
		}

		if (!self.config.time_24hr) {
			// add self.amPM if appropriate
			self.amPM = createElement("span", "flatpickr-am-pm", ["AM", "PM"][self.hourElement.value > 11 | 0]);
			self.amPM.title = self.l10n.toggleTitle;
			self.amPM.tabIndex = 0;
			self.timeContainer.appendChild(self.amPM);
		}

		return self.timeContainer;
	}

	function buildWeekdays() {
		if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");

		var firstDayOfWeek = self.l10n.firstDayOfWeek;
		var weekdays = self.l10n.weekdays.shorthand.slice();

		if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
			weekdays = [].concat(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
		}

		self.weekdayContainer.innerHTML = "\n\t\t<span class=flatpickr-weekday>\n\t\t\t" + weekdays.join("</span><span class=flatpickr-weekday>") + "\n\t\t</span>\n\t\t";

		return self.weekdayContainer;
	}

	/* istanbul ignore next */
	function buildWeeks() {
		self.calendarContainer.classList.add("hasWeeks");
		self.weekWrapper = createElement("div", "flatpickr-weekwrapper");
		self.weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
		self.weekNumbers = createElement("div", "flatpickr-weeks");
		self.weekWrapper.appendChild(self.weekNumbers);

		return self.weekWrapper;
	}

	function changeMonth(value, is_offset) {
		is_offset = typeof is_offset === "undefined" || is_offset;
		var delta = is_offset ? value : value - self.currentMonth;

		if (delta < 0 && self._hidePrevMonthArrow || delta > 0 && self._hideNextMonthArrow) return;

		self.currentMonth += delta;

		if (self.currentMonth < 0 || self.currentMonth > 11) {
			self.currentYear += self.currentMonth > 11 ? 1 : -1;
			self.currentMonth = (self.currentMonth + 12) % 12;

			triggerEvent("YearChange");
		}

		updateNavigationCurrentMonth();
		buildDays();

		if (!self.config.noCalendar) self.days.focus();

		triggerEvent("MonthChange");
	}

	function clear(triggerChangeEvent) {
		self.input.value = "";

		if (self.altInput) self.altInput.value = "";

		if (self.mobileInput) self.mobileInput.value = "";

		self.selectedDates = [];
		self.latestSelectedDateObj = null;
		self.dateIsPicked = false;

		self.redraw();

		if (triggerChangeEvent !== false)
			// triggerChangeEvent is true (default) or an Event
			triggerEvent("Change");
	}

	function close() {
		self.isOpen = false;

		if (!self.isMobile) {
			self.calendarContainer.classList.remove("open");
			(self.altInput || self.input).classList.remove("active");
		}

		triggerEvent("Close");
	}

	function destroy(instance) {
		instance = instance || self;
		instance.clear(false);

		window.document.removeEventListener("keydown", onKeyDown);
		window.removeEventListener("resize", instance.debouncedResize);

		window.document.removeEventListener("click", documentClick);
		window.document.removeEventListener("touchstart", documentClick);
		window.document.removeEventListener("blur", documentClick);

		if (instance.timeContainer) instance.timeContainer.removeEventListener("transitionend", positionCalendar);

		if (instance.mobileInput) {
			if (instance.mobileInput.parentNode) instance.mobileInput.parentNode.removeChild(instance.mobileInput);
			delete instance.mobileInput;
		} else if (instance.calendarContainer && instance.calendarContainer.parentNode) instance.calendarContainer.parentNode.removeChild(instance.calendarContainer);

		if (instance.altInput) {
			instance.input.type = "text";
			if (instance.altInput.parentNode) instance.altInput.parentNode.removeChild(instance.altInput);
			delete instance.altInput;
		}

		instance.input.type = instance.input._type;
		instance.input.classList.remove("flatpickr-input");
		instance.input.removeEventListener("focus", open);
		instance.input.removeAttribute("readonly");

		delete instance.input._flatpickr;
	}

	function isCalendarElem(elem) {
		if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;

		return self.calendarContainer.contains(elem);
	}

	function documentClick(e) {
		var isInput = self.element.contains(e.target) || e.target === self.input || e.target === self.altInput ||
		// web components
		e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));

		if (self.isOpen && !self.config.inline && !isCalendarElem(e.target) && !isInput) {
			e.preventDefault();
			self.close();

			if (self.config.mode === "range" && self.selectedDates.length === 1) {
				self.clear();
				self.redraw();
			}
		}
	}

	function formatDate(frmt, dateObj) {
		if (self.config.formatDate) return self.config.formatDate(frmt, dateObj);

		var chars = frmt.split("");
		return chars.map(function (c, i) {
			return self.formats[c] && chars[i - 1] !== "\\" ? self.formats[c](dateObj) : c !== "\\" ? c : "";
		}).join("");
	}

	function changeYear(newYear) {
		if (!newYear || self.currentYearElement.min && newYear < self.currentYearElement.min || self.currentYearElement.max && newYear > self.currentYearElement.max) return;

		var newYearNum = parseInt(newYear, 10),
		    isNewYear = self.currentYear !== newYearNum;

		self.currentYear = newYearNum || self.currentYear;

		if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
			self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
		} else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
			self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
		}

		if (isNewYear) {
			self.redraw();
			triggerEvent("YearChange");
		}
	}

	function isEnabled(date, timeless) {
		var ltmin = compareDates(date, self.config.minDate, typeof timeless !== "undefined" ? timeless : !self.minDateHasTime) < 0;
		var gtmax = compareDates(date, self.config.maxDate, typeof timeless !== "undefined" ? timeless : !self.maxDateHasTime) > 0;

		if (ltmin || gtmax) return false;

		if (!self.config.enable.length && !self.config.disable.length) return true;

		var dateToCheck = self.parseDate(date, true); // timeless

		var bool = self.config.enable.length > 0,
		    array = bool ? self.config.enable : self.config.disable;

		for (var i = 0, d; i < array.length; i++) {
			d = array[i];

			if (d instanceof Function && d(dateToCheck)) // disabled by function
				return bool;else if (d instanceof Date && d.getTime() === dateToCheck.getTime())
				// disabled by date
				return bool;else if (typeof d === "string" && self.parseDate(d, true).getTime() === dateToCheck.getTime())
				// disabled by date string
				return bool;else if ( // disabled by range
			(typeof d === "undefined" ? "undefined" : _typeof(d)) === "object" && d.from && d.to && dateToCheck >= d.from && dateToCheck <= d.to) return bool;
		}

		return !bool;
	}

	function onKeyDown(e) {
		if (e.target === (self.altInput || self.input) && e.which === 13) selectDate(e);else if (self.isOpen && isCalendarElem(e.target)) {
			switch (e.which) {
				case 13:
					if (self.timeContainer && self.timeContainer.contains(e.target)) updateValue();else selectDate(e);

					break;

				case 27:
					// escape
					self.close();
					break;

				case 37:
					if (e.target !== self.input & e.target !== self.altInput) {
						changeMonth(-1);
						self.currentMonthElement.focus();
					}
					break;

				case 38:
					if (!self.timeContainer || !self.timeContainer.contains(e.target)) {
						e.preventDefault();
						self.currentYear++;
						self.redraw();
					} else updateTime(e);

					break;

				case 39:
					if (e.target !== self.input & e.target !== self.altInput) {
						changeMonth(1);
						self.currentMonthElement.focus();
					}
					break;

				case 40:
					if (!self.timeContainer || !self.timeContainer.contains(e.target)) {
						e.preventDefault();
						self.currentYear--;
						self.redraw();
					} else updateTime(e);

					break;

				default:
					break;

			}
		}
	}

	function onMouseOver(e) {
		if (self.selectedDates.length !== 1 || !e.target.classList.contains("flatpickr-day")) return;

		var hoverDate = e.target.dateObj,
		    initialDate = self.parseDate(self.selectedDates[0], true),
		    rangeStartDate = Math.min(hoverDate.getTime(), self.selectedDates[0].getTime()),
		    rangeEndDate = Math.max(hoverDate.getTime(), self.selectedDates[0].getTime()),
		    containsDisabled = false;

		for (var t = rangeStartDate; t < rangeEndDate; t += self.utils.duration.DAY) {
			if (!isEnabled(new Date(t))) {
				containsDisabled = true;
				break;
			}
		}

		var _loop = function _loop(timestamp, i) {
			var outOfRange = timestamp < self.minRangeDate.getTime() || timestamp > self.maxRangeDate.getTime();

			if (outOfRange) {
				self.days.childNodes[i].classList.add("notAllowed");
				["inRange", "startRange", "endRange"].forEach(function (c) {
					self.days.childNodes[i].classList.remove(c);
				});
				return "continue";
			} else if (containsDisabled && !outOfRange) return "continue";

			["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
				self.days.childNodes[i].classList.remove(c);
			});

			var minRangeDate = Math.max(self.minRangeDate.getTime(), rangeStartDate),
			    maxRangeDate = Math.min(self.maxRangeDate.getTime(), rangeEndDate);

			e.target.classList.add(hoverDate < self.selectedDates[0] ? "startRange" : "endRange");

			if (initialDate > hoverDate && timestamp === initialDate.getTime()) self.days.childNodes[i].classList.add("endRange");else if (initialDate < hoverDate && timestamp === initialDate.getTime()) self.days.childNodes[i].classList.add("startRange");else if (timestamp > minRangeDate && timestamp < maxRangeDate) self.days.childNodes[i].classList.add("inRange");
		};

		for (var timestamp = self.days.childNodes[0].dateObj.getTime(), i = 0; i < 42; i++, timestamp += self.utils.duration.DAY) {
			var _ret = _loop(timestamp, i);

			if (_ret === "continue") continue;
		}
	}

	function onResize() {
		if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
	}

	function open(e) {
		if (self.isMobile) {
			if (e) {
				e.preventDefault();
				e.target.blur();
			}

			setTimeout(function () {
				self.mobileInput.click();
			}, 0);

			triggerEvent("Open");
			return;
		} else if (self.isOpen || (self.altInput || self.input).disabled || self.config.inline) return;

		self.calendarContainer.classList.add("open");

		if (!self.config.static && !self.config.inline) positionCalendar();

		self.isOpen = true;

		if (!self.config.allowInput) {
			(self.altInput || self.input).blur();
			(self.config.noCalendar ? self.timeContainer : self.selectedDateElem ? self.selectedDateElem : self.days).focus();
		}

		(self.altInput || self.input).classList.add("active");
		triggerEvent("Open");
	}

	function minMaxDateSetter(type) {
		return function (date) {
			var dateObj = self.config["_" + type + "Date"] = self.parseDate(date);
			var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
			var isValidDate = date && dateObj instanceof Date;

			if (self.selectedDates) {
				self.selectedDates = self.selectedDates.filter(isEnabled);
				updateValue();
			}

			if (self.days) redraw();

			if (isValidDate) {
				self[type + "DateHasTime"] = dateObj.getHours() || dateObj.getMinutes() || dateObj.getSeconds();
			}

			if (self.currentYearElement) {
				if (isValidDate) self.currentYearElement[type] = dateObj.getFullYear();else self.currentYearElement.removeAttribute(type);

				self.currentYearElement.disabled = inverseDateObj && dateObj && inverseDateObj.getFullYear() === dateObj.getFullYear();
			}
		};
	}

	function parseConfig() {
		var boolOpts = ["utc", "wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];

		var hooks = ["onChange", "onClose", "onDayCreate", "onMonthChange", "onOpen", "onReady", "onValueUpdate", "onYearChange"];

		self.config = Object.create(Flatpickr.defaultConfig);

		Object.defineProperty(self.config, "minDate", {
			get: function get() {
				return this._minDate;
			},
			set: minMaxDateSetter("min")
		});

		Object.defineProperty(self.config, "maxDate", {
			get: function get() {
				return this._maxDate;
			},
			set: minMaxDateSetter("max")
		});

		var userConfig = _extends({}, self.instanceConfig, JSON.parse(JSON.stringify(self.element.dataset || {})));

		self.config.parseDate = userConfig.parseDate;
		self.config.formatDate = userConfig.formatDate;

		_extends(self.config, userConfig);

		for (var i = 0; i < boolOpts.length; i++) {
			self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
		}for (var _i = 0; _i < hooks.length; _i++) {
			self.config[hooks[_i]] = arrayify(self.config[hooks[_i]] || []);
		}

		if (!userConfig.dateFormat && userConfig.enableTime) {
			self.config.dateFormat = self.config.noCalendar ? "H:i" + (self.config.enableSeconds ? ":S" : "") : Flatpickr.defaultConfig.dateFormat + " H:i" + (self.config.enableSeconds ? ":S" : "");
		}

		if (userConfig.altInput && userConfig.enableTime && !userConfig.altFormat) {
			self.config.altFormat = self.config.noCalendar ? "h:i" + (self.config.enableSeconds ? ":S K" : " K") : Flatpickr.defaultConfig.altFormat + (" h:i" + (self.config.enableSeconds ? ":S" : "") + " K");
		}

		for (var _i2 = 0; _i2 < self.config.plugins.length; _i2++) {
			var pluginConf = self.config.plugins[_i2](self) || {};
			for (var key in pluginConf) {
				if (Array.isArray(self.config[key])) self.config[key] = arrayify(pluginConf[key]).concat(self.config[key]);else if (userConfig[key] !== undefined) self.config[key] = pluginConf[key];
			}
		}
	}

	function setupLocale() {
		if (_typeof(self.config.locale) !== "object" && typeof Flatpickr.l10ns[self.config.locale] === "undefined") console.warn("flatpickr: invalid locale " + self.config.locale);

		self.l10n = _extends(Object.create(Flatpickr.l10ns.default), _typeof(self.config.locale) === "object" ? self.config.locale : self.config.locale !== "default" ? Flatpickr.l10ns[self.config.locale] || {} : {});
	}

	function positionCalendar(e) {
		if (e && e.target !== self.timeContainer) return;

		var calendarHeight = self.calendarContainer.offsetHeight,
		    calendarWidth = self.calendarContainer.offsetWidth,
		    input = self.altInput || self.input,
		    inputBounds = input.getBoundingClientRect(),
		    distanceFromBottom = window.innerHeight - inputBounds.bottom + input.offsetHeight,
		    bottomCalendar = distanceFromBottom < calendarHeight + 60;

		var top = window.pageYOffset + inputBounds.top + (!bottomCalendar ? input.offsetHeight + 2 : -calendarHeight - 2);

		toggleClass(self.calendarContainer, "arrowTop", !bottomCalendar);
		toggleClass(self.calendarContainer, "arrowBottom", bottomCalendar);

		if (self.config.inline) return;

		var left = window.pageXOffset + inputBounds.left;
		var right = window.document.body.offsetWidth - inputBounds.right;
		var rightMost = left + calendarWidth > window.document.body.offsetWidth;

		toggleClass(self.calendarContainer, "rightMost", rightMost);

		if (self.config.static) return;

		self.calendarContainer.style.top = top + "px";

		if (!rightMost) {
			self.calendarContainer.style.left = left + "px";
			self.calendarContainer.style.right = "auto";
		} else {
			self.calendarContainer.style.left = "auto";
			self.calendarContainer.style.right = right + "px";
		}
	}

	function redraw() {
		if (self.config.noCalendar || self.isMobile) return;

		buildWeekdays();
		updateNavigationCurrentMonth();
		buildDays();
	}

	function selectDate(e) {
		e.preventDefault();
		e.stopPropagation();

		if (self.config.allowInput && e.which === 13 && e.target === (self.altInput || self.input)) return self.setDate((self.altInput || self.input).value), e.target.blur();

		if (!e.target.classList.contains("flatpickr-day") || e.target.classList.contains("disabled") || e.target.classList.contains("notAllowed")) return;

		var selectedDate = self.latestSelectedDateObj = new Date(e.target.dateObj.getTime());

		self.selectedDateElem = e.target;

		if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
			var selectedIndex = isDateSelected(selectedDate);
			if (selectedIndex) self.selectedDates.splice(selectedIndex, 1);else self.selectedDates.push(selectedDate);
		} else if (self.config.mode === "range") {
			if (self.selectedDates.length === 2) self.clear();

			self.selectedDates.push(selectedDate);

			// unless selecting same date twice, sort ascendingly
			if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
				return a.getTime() - b.getTime();
			});
		}

		setHoursFromInputs();

		if (selectedDate.getMonth() !== self.currentMonth && self.config.mode !== "range") {
			var isNewYear = self.currentYear !== selectedDate.getFullYear();
			self.currentYear = selectedDate.getFullYear();
			self.currentMonth = selectedDate.getMonth();

			if (isNewYear) triggerEvent("YearChange");

			triggerEvent("MonthChange");
		}

		buildDays();

		if (self.minDateHasTime && self.config.enableTime && compareDates(selectedDate, self.config.minDate) === 0) setHoursFromDate(self.config.minDate);

		updateValue();

		setTimeout(function () {
			return self.dateIsPicked = true;
		}, 50);

		if (self.config.mode === "range") {
			if (self.selectedDates.length === 1) {
				onMouseOver(e);

				self._hidePrevMonthArrow = self._hidePrevMonthArrow || self.minRangeDate > self.days.childNodes[0].dateObj;

				self._hideNextMonthArrow = self._hideNextMonthArrow || self.maxRangeDate < self.days.childNodes[41].dateObj;
			} else updateNavigationCurrentMonth();
		}

		if (e.which === 13 && self.config.enableTime) setTimeout(function () {
			return self.hourElement.focus();
		}, 451);

		if (self.config.mode === "single" && !self.config.enableTime) self.close();

		triggerEvent("Change");
	}

	function set(option, value) {
		self.config[option] = value;
		self.redraw();
		jumpToDate();
	}

	function setSelectedDate(inputDate) {
		if (Array.isArray(inputDate)) self.selectedDates = inputDate.map(self.parseDate);else if (inputDate instanceof Date || !isNaN(inputDate)) self.selectedDates = [self.parseDate(inputDate)];else if (inputDate && inputDate.substring) {
			switch (self.config.mode) {
				case "single":
					self.selectedDates = [self.parseDate(inputDate)];
					break;

				case "multiple":
					self.selectedDates = inputDate.split("; ").map(self.parseDate);
					break;

				case "range":
					self.selectedDates = inputDate.split(self.l10n.rangeSeparator).map(self.parseDate);

					break;

				default:
					break;
			}
		}

		self.selectedDates = self.selectedDates.filter(function (d) {
			return d instanceof Date && d.getTime() && isEnabled(d, false);
		});

		self.selectedDates.sort(function (a, b) {
			return a.getTime() - b.getTime();
		});
	}

	function setDate(date, triggerChange) {
		if (!date) return self.clear();

		setSelectedDate(date);

		if (self.selectedDates.length > 0) {
			self.dateIsPicked = true;
			self.latestSelectedDateObj = self.selectedDates[0];
		} else self.latestSelectedDateObj = null;

		self.redraw();
		jumpToDate();

		setHoursFromDate();
		updateValue();

		if (triggerChange !== false) triggerEvent("Change");
	}

	function setupDates() {
		function parseDateRules(arr) {
			for (var i = arr.length; i--;) {
				if (typeof arr[i] === "string" || +arr[i]) arr[i] = self.parseDate(arr[i], true);else if (arr[i] && arr[i].from && arr[i].to) {
					arr[i].from = self.parseDate(arr[i].from);
					arr[i].to = self.parseDate(arr[i].to);
				}
			}

			return arr.filter(function (x) {
				return x;
			}); // remove falsy values
		}

		self.selectedDates = [];
		self.now = new Date();

		if (self.config.disable.length) self.config.disable = parseDateRules(self.config.disable);

		if (self.config.enable.length) self.config.enable = parseDateRules(self.config.enable);

		setSelectedDate(self.config.defaultDate || self.input.value);

		var initialDate = self.selectedDates.length ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now ? self.config.maxDate : self.now;

		self.currentYear = initialDate.getFullYear();
		self.currentMonth = initialDate.getMonth();

		if (self.selectedDates.length) self.latestSelectedDateObj = self.selectedDates[0];

		self.minDateHasTime = self.config.minDate && (self.config.minDate.getHours() || self.config.minDate.getMinutes() || self.config.minDate.getSeconds());

		self.maxDateHasTime = self.config.maxDate && (self.config.maxDate.getHours() || self.config.maxDate.getMinutes() || self.config.maxDate.getSeconds());

		Object.defineProperty(self, "latestSelectedDateObj", {
			get: function get() {
				return self._selectedDateObj || self.selectedDates[self.selectedDates.length - 1] || null;
			},
			set: function set(date) {
				self._selectedDateObj = date;
			}
		});
	}

	function setupHelperFunctions() {
		self.utils = {
			duration: {
				DAY: 86400000
			},
			getDaysinMonth: function getDaysinMonth(month, yr) {
				month = typeof month === "undefined" ? self.currentMonth : month;

				yr = typeof yr === "undefined" ? self.currentYear : yr;

				if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;

				return self.l10n.daysInMonth[month];
			},
			monthToStr: function monthToStr(monthNumber, shorthand) {
				shorthand = typeof shorthand === "undefined" ? self.config.shorthandCurrentMonth : shorthand;

				return self.l10n.months[(shorthand ? "short" : "long") + "hand"][monthNumber];
			}
		};
	}

	/* istanbul ignore next */
	function setupFormats() {
		self.formats = {
			// get the date in UTC
			Z: function Z(date) {
				return date.toISOString();
			},

			// weekday name, short, e.g. Thu
			D: function D(date) {
				return self.l10n.weekdays.shorthand[self.formats.w(date)];
			},

			// full month name e.g. January
			F: function F(date) {
				return self.utils.monthToStr(self.formats.n(date) - 1, false);
			},

			// hours with leading zero e.g. 03
			H: function H(date) {
				return Flatpickr.prototype.pad(date.getHours());
			},

			// day (1-30) with ordinal suffix e.g. 1st, 2nd
			J: function J(date) {
				return date.getDate() + self.l10n.ordinal(date.getDate());
			},

			// AM/PM
			K: function K(date) {
				return date.getHours() > 11 ? "PM" : "AM";
			},

			// shorthand month e.g. Jan, Sep, Oct, etc
			M: function M(date) {
				return self.utils.monthToStr(date.getMonth(), true);
			},

			// seconds 00-59
			S: function S(date) {
				return Flatpickr.prototype.pad(date.getSeconds());
			},

			// unix timestamp
			U: function U(date) {
				return date.getTime() / 1000;
			},

			// full year e.g. 2016
			Y: function Y(date) {
				return date.getFullYear();
			},

			// day in month, padded (01-30)
			d: function d(date) {
				return Flatpickr.prototype.pad(self.formats.j(date));
			},

			// hour from 1-12 (am/pm)
			h: function h(date) {
				return date.getHours() % 12 ? date.getHours() % 12 : 12;
			},

			// minutes, padded with leading zero e.g. 09
			i: function i(date) {
				return Flatpickr.prototype.pad(date.getMinutes());
			},

			// day in month (1-30)
			j: function j(date) {
				return date.getDate();
			},

			// weekday name, full, e.g. Thursday
			l: function l(date) {
				return self.l10n.weekdays.longhand[self.formats.w(date)];
			},

			// padded month number (01-12)
			m: function m(date) {
				return Flatpickr.prototype.pad(self.formats.n(date));
			},

			// the month number (1-12)
			n: function n(date) {
				return date.getMonth() + 1;
			},

			// seconds 0-59
			s: function s(date) {
				return date.getSeconds();
			},

			// number of the day of the week
			w: function w(date) {
				return date.getDay();
			},

			// last two digits of year e.g. 16 for 2016
			y: function y(date) {
				return String(self.formats.Y(date)).substring(2);
			}
		};
	}

	function setupInputs() {
		self.input = self.config.wrap ? self.element.querySelector("[data-input]") : self.element;

		/* istanbul ignore next */
		if (!self.input) return console.warn("Error: invalid input element specified", self.input);

		self.input._type = self.input.type;
		self.input.type = "text";
		self.input.classList.add("flatpickr-input");

		if (self.config.altInput) {
			// replicate self.element
			self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
			self.altInput.placeholder = self.input.placeholder;
			self.altInput.type = "text";

			self.input.type = "hidden";
			if (self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
		}

		if (!self.config.allowInput) (self.altInput || self.input).setAttribute("readonly", "readonly");
	}

	function setupMobile() {
		var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";

		self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
		self.mobileInput.step = "any";
		self.mobileInput.tabIndex = 1;
		self.mobileInput.type = inputType;
		self.mobileInput.disabled = self.input.disabled;
		self.mobileInput.placeholder = self.input.placeholder;

		self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

		if (self.selectedDates.length) {
			self.mobileInput.defaultValue = self.mobileInput.value = formatDate(self.mobileFormatStr, self.selectedDates[0]);
		}

		if (self.config.minDate) self.mobileInput.min = formatDate("Y-m-d", self.config.minDate);

		if (self.config.maxDate) self.mobileInput.max = formatDate("Y-m-d", self.config.maxDate);

		self.input.type = "hidden";
		if (self.config.altInput) self.altInput.type = "hidden";

		try {
			self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
		} catch (e) {
			//
		}

		self.mobileInput.addEventListener("change", function (e) {
			self.latestSelectedDateObj = self.parseDate(e.target.value);
			self.setDate(self.latestSelectedDateObj);
			triggerEvent("Change");
			triggerEvent("Close");
		});
	}

	function toggle() {
		if (self.isOpen) self.close();else self.open();
	}

	function triggerEvent(event, data) {
		var hooks = self.config["on" + event];

		if (hooks) {
			for (var i = 0; i < hooks.length; i++) {
				hooks[i](self.selectedDates, self.input.value, self, data);
			}
		}

		if (event === "Change") {
			if (typeof Event === "function" && Event.constructor) {
				self.input.dispatchEvent(new Event("change", { "bubbles": true }));

				// many front-end frameworks bind to the input event
				self.input.dispatchEvent(new Event("input", { "bubbles": true }));
			}

			/* istanbul ignore next */
			else {
					if (window.document.createEvent !== undefined) return self.input.dispatchEvent(self.changeEvent);

					self.input.fireEvent("onchange");
				}
		}
	}

	function isDateSelected(date) {
		for (var i = 0; i < self.selectedDates.length; i++) {
			if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
		}

		return false;
	}

	function isDateInRange(date) {
		if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
		return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
	}

	function updateNavigationCurrentMonth() {
		if (self.config.noCalendar || self.isMobile || !self.monthNav) return;

		self.currentMonthElement.textContent = self.utils.monthToStr(self.currentMonth) + " ";
		self.currentYearElement.value = self.currentYear;

		self._hidePrevMonthArrow = self.config.minDate && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());

		self._hideNextMonthArrow = self.config.maxDate && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
	}

	function updateValue() {
		if (!self.selectedDates.length) return self.clear();

		if (self.isMobile) {
			self.mobileInput.value = self.selectedDates.length ? formatDate(self.mobileFormatStr, self.latestSelectedDateObj) : "";
		}

		var joinChar = self.config.mode !== "range" ? "; " : self.l10n.rangeSeparator;

		self.input.value = self.selectedDates.map(function (dObj) {
			return formatDate(self.config.dateFormat, dObj);
		}).join(joinChar);

		if (self.config.altInput) {
			self.altInput.value = self.selectedDates.map(function (dObj) {
				return formatDate(self.config.altFormat, dObj);
			}).join(joinChar);
		}

		triggerEvent("ValueUpdate");
	}

	function yearScroll(e) {
		e.preventDefault();

		var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)),
		    newYear = parseInt(e.target.value, 10) + delta;

		changeYear(newYear);
		e.target.value = self.currentYear;
	}

	function createElement(tag, className, content) {
		var e = window.document.createElement(tag);
		className = className || "";
		content = content || "";

		e.className = className;

		if (content) e.textContent = content;

		return e;
	}

	function arrayify(obj) {
		if (Array.isArray(obj)) return obj;
		return [obj];
	}

	function toggleClass(elem, className, bool) {
		if (bool) return elem.classList.add(className);
		elem.classList.remove(className);
	}

	/* istanbul ignore next */
	function debounce(func, wait, immediate) {
		var timeout = void 0;
		return function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var context = this;
			var later = function later() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};

			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (immediate && !timeout) func.apply(context, args);
		};
	}

	function compareDates(date1, date2, timeless) {
		if (!(date1 instanceof Date) || !(date2 instanceof Date)) return false;

		if (timeless !== false) {
			return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
		}

		return date1.getTime() - date2.getTime();
	}

	function timeWrapper(e) {
		e.preventDefault();

		var isKeyDown = e.type === "keydown",
		    isWheel = e.type === "wheel";

		if (e.type !== "input" && !isKeyDown && (e.target.value || e.target.textContent).length >= 2 // typed two digits
		) {
				e.target.focus();
				e.target.blur();
			}

		if (self.amPM && e.target === self.amPM) return e.target.textContent = ["AM", "PM"][e.target.textContent === "AM" | 0];

		var min = Number(e.target.min),
		    max = Number(e.target.max),
		    step = Number(e.target.step),
		    curValue = parseInt(e.target.value, 10),
		    delta = !isKeyDown ? Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)) || 0 : e.which === 38 ? 1 : -1;

		var newValue = curValue + (isWheel || isKeyDown) * step * delta;

		if (e.target.value.length === 2) {
			var isHourElem = e.target === self.hourElement;

			if (newValue < min) {
				newValue = max + newValue + !isHourElem + (isHourElem && !self.amPM);
			} else if (newValue > max) {
				newValue = e.target === self.hourElement ? newValue - max - !self.amPM : min;
			}

			if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) self.amPM.textContent = self.amPM.textContent === "PM" ? "AM" : "PM";

			e.target.value = self.pad(newValue);
		}
	}

	init();
	return self;
}

/* istanbul ignore next */
Flatpickr.defaultConfig = {

	mode: "single",

	/* if true, dates will be parsed, formatted, and displayed in UTC.
 preloading date strings w/ timezones is recommended but not necessary */
	utc: false,

	// wrap: see https://chmln.github.io/flatpickr/#strap
	wrap: false,

	// enables week numbers
	weekNumbers: false,

	// allow manual datetime input
	allowInput: false,

	/*
 	clicking on input opens the date(time)picker.
 	disable if you wish to open the calendar manually with .open()
 */
	clickOpens: true,

	// display time picker in 24 hour mode
	time_24hr: false,

	// enables the time picker functionality
	enableTime: false,

	// noCalendar: true will hide the calendar. use for a time picker along w/ enableTime
	noCalendar: false,

	// more date format chars at https://chmln.github.io/flatpickr/#dateformat
	dateFormat: "Y-m-d",

	// altInput - see https://chmln.github.io/flatpickr/#altinput
	altInput: false,

	// the created altInput element will have this class.
	altInputClass: "flatpickr-input form-control input",

	// same as dateFormat, but for altInput
	altFormat: "F j, Y", // defaults to e.g. June 10, 2016

	// defaultDate - either a datestring or a date object. used for datetimepicker"s initial value
	defaultDate: null,

	// the minimum date that user can pick (inclusive)
	minDate: null,

	// the maximum date that user can pick (inclusive)
	maxDate: null,

	// dateparser that transforms a given string to a date object
	parseDate: null,

	// dateformatter that transforms a given date object to a string, according to passed format
	formatDate: null,

	getWeek: function getWeek(givenDate) {
		var date = new Date(givenDate.getTime());
		date.setHours(0, 0, 0, 0);

		// Thursday in current week decides the year.
		date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
		// January 4 is always in week 1.
		var week1 = new Date(date.getFullYear(), 0, 4);
		// Adjust to Thursday in week 1 and count number of weeks from date to week1.
		return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
	},

	// see https://chmln.github.io/flatpickr/#disable
	enable: [],

	// see https://chmln.github.io/flatpickr/#disable
	disable: [],

	// display the short version of month names - e.g. Sep instead of September
	shorthandCurrentMonth: false,

	// displays calendar inline. see https://chmln.github.io/flatpickr/#inline-calendar
	inline: false,

	// position calendar inside wrapper and next to the input element
	// leave at false unless you know what you"re doing
	static: false,

	// DOM node to append the calendar to in *static* mode
	appendTo: null,

	// code for previous/next icons. this is where you put your custom icon code e.g. fontawesome
	prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
	nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",

	// enables seconds in the time picker
	enableSeconds: false,

	// step size used when scrolling/incrementing the hour element
	hourIncrement: 1,

	// step size used when scrolling/incrementing the minute element
	minuteIncrement: 5,

	// initial value in the hour element
	defaultHour: 12,

	// initial value in the minute element
	defaultMinute: 0,

	// disable native mobile datetime input support
	disableMobile: false,

	// default locale
	locale: "default",

	plugins: [],

	// onChange callback when user selects a date or time
	onChange: [], // function (dateObj, dateStr) {}

	// called every time calendar is opened
	onOpen: [], // function (dateObj, dateStr) {}

	// called every time calendar is closed
	onClose: [], // function (dateObj, dateStr) {}

	// called after calendar is ready
	onReady: [], // function (dateObj, dateStr) {}

	onValueUpdate: [],

	onDayCreate: [],

	onMonthChange: [],

	onYearChange: []
};

/* istanbul ignore next */
Flatpickr.l10ns = {
	en: {
		weekdays: {
			shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
		},
		months: {
			shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		},
		daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		firstDayOfWeek: 0,
		ordinal: function ordinal(nth) {
			var s = nth % 100;
			if (s > 3 && s < 21) return "th";
			switch (s % 10) {
				case 1:
					return "st";
				case 2:
					return "nd";
				case 3:
					return "rd";
				default:
					return "th";
			}
		},
		rangeSeparator: " to ",
		weekAbbreviation: "Wk",
		scrollTitle: "Scroll to increment",
		toggleTitle: "Click to toggle"
	}
};

Flatpickr.l10ns.default = Object.create(Flatpickr.l10ns.en);
Flatpickr.localize = function (l10n) {
	return _extends(Flatpickr.l10ns.default, l10n || {});
};
Flatpickr.setDefaults = function (config) {
	return _extends(Flatpickr.defaultConfig, config || {});
};

Flatpickr.prototype = {
	pad: function pad(number) {
		return ("0" + number).slice(-2);
	},
	parseDate: function parseDate(date, timeless) {
		if (!date) return null;

		var dateTimeRegex = /(\d+)/g,
		    timeRegex = /^(\d{1,2})[:\s](\d\d)?[:\s]?(\d\d)?\s?(a|p|A|P)?/i,
		    timestamp = /^(\d+)$/g,
		    date_orig = date;

		if (date.toFixed || timestamp.test(date)) // timestamp
			date = new Date(date);else if (typeof date === "string") {
			date = date.trim();

			if (date === "today") {
				date = new Date();
				timeless = true;
			} else if (this.config && this.config.parseDate) date = this.config.parseDate(date);else if (timeRegex.test(date)) {
				// time picker
				var m = date.match(timeRegex),
				    hours = !m[4] ? m[1] // military time, no conversion needed
				: m[1] % 12 + (m[4].toLowerCase() === "p" ? 12 : 0); // am/pm

				date = new Date();
				date.setHours(hours, m[2] || 0, m[3] || 0);
			} else if (/Z$/.test(date) || /GMT$/.test(date)) // datestrings w/ timezone
				date = new Date(date);else if (dateTimeRegex.test(date) && /^[0-9]/.test(date)) {
				var d = date.match(dateTimeRegex),
				    isAM = /(am|AM)$/.test(date),
				    isPM = /(pm|PM)$/.test(date);

				date = new Date(d[0] + "/" + (d[1] || 1) + "/" + (d[2] || 1) + " " + (d[3] || 0) + ":" + (d[4] || 0) + ":" + (d[5] || 0));

				if (isAM || isPM) date.setHours(date.getHours() % 12 + 12 * isPM);
			} else // fallback
				date = new Date(date);
		} else if (date instanceof Date) date = new Date(date.getTime()); // create a copy

		/* istanbul ignore next */
		if (!(date instanceof Date)) {
			console.warn("flatpickr: invalid date " + date_orig);
			console.info(this.element);
			return null;
		}

		if (this.config && this.config.utc && !date.fp_isUTC) date = date.fp_toUTC();

		if (timeless === true) date.setHours(0, 0, 0, 0);

		return date;
	}
};

/* istanbul ignore next */
function _flatpickr(nodeList, config) {
	var nodes = Array.prototype.slice.call(nodeList); // static list
	var instances = [];
	for (var i = 0; i < nodes.length; i++) {
		try {
			nodes[i]._flatpickr = new Flatpickr(nodes[i], config || {});
			instances.push(nodes[i]._flatpickr);
		} catch (e) {
			console.warn(e, e.stack);
		}
	}

	return instances.length === 1 ? instances[0] : instances;
}

/* istanbul ignore next */
if (typeof HTMLElement !== "undefined") {
	// browser env
	HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
		return _flatpickr(this, config);
	};

	HTMLElement.prototype.flatpickr = function (config) {
		return _flatpickr([this], config);
	};
}

/* istanbul ignore next */
function flatpickr(selector, config) {
	return _flatpickr(window.document.querySelectorAll(selector), config);
}

/* istanbul ignore next */
if (typeof jQuery !== "undefined") {
	jQuery.fn.flatpickr = function (config) {
		return _flatpickr(this, config);
	};
}

Date.prototype.fp_incr = function (days) {
	return new Date(this.getFullYear(), this.getMonth(), this.getDate() + parseInt(days, 10));
};

Date.prototype.fp_isUTC = false;
Date.prototype.fp_toUTC = function () {
	var newDate = new Date(this.getUTCFullYear(), this.getUTCMonth(), this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds());

	newDate.fp_isUTC = true;
	return newDate;
};

// IE9 classList polyfill
/* istanbul ignore next */
if (!window.document.documentElement.classList && Object.defineProperty && typeof HTMLElement !== "undefined") {
	Object.defineProperty(HTMLElement.prototype, "classList", {
		get: function get() {
			var self = this;
			function update(fn) {
				return function (value) {
					var classes = self.className.split(/\s+/),
					    index = classes.indexOf(value);

					fn(classes, index, value);
					self.className = classes.join(" ");
				};
			}

			var ret = {
				add: update(function (classes, index, value) {
					if (!~index) classes.push(value);
				}),

				remove: update(function (classes, index) {
					if (~index) classes.splice(index, 1);
				}),

				toggle: update(function (classes, index, value) {
					if (~index) classes.splice(index, 1);else classes.push(value);
				}),

				contains: function contains(value) {
					return !!~self.className.split(/\s+/).indexOf(value);
				},

				item: function item(i) {
					return self.className.split(/\s+/)[i] || null;
				}
			};

			Object.defineProperty(ret, "length", {
				get: function get() {
					return self.className.split(/\s+/).length;
				}
			});

			return ret;
		}
	});
}

if (true) module.exports = Flatpickr;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

function validate(binding) {
  if (typeof binding.value !== 'function') {
    console.warn('[Vue-click-outside:] provided expression', binding.expression, 'is not a function.')
    return false
  }

  return true
}

function isPopup(popupItem, elements) {
  if (!popupItem || !elements) 
    return false

  for (var i = 0, len = elements.length; i < len; i++) {
    if (popupItem.contains(elements[i])) 
      return true
    if (elements[i].contains(popupItem))
      return false
  }

  return false
}

exports = module.exports = {
  bind: function (el, binding, vNode) {
    if (!validate(binding)) return

    // Define Handler and cache it on the element
    function handler(e) {
      if (!vNode.context) return

      // some components may have related popup item, on which we shall prevent the click outside event handler.
      var elements = e.path || (e.composedPath && e.composedPath())
      elements && elements.length > 0 && elements.unshift(e.target)
      
      if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) return

      binding.value(e)
    }

    // add Event Listeners
    el.__vueClickOutside__ = handler
    document.addEventListener('click', handler)
  },

  update: function (el, binding) {
    if (validate(binding)) el.__vueClickOutside__ = binding.value
  },
  
  unbind: function (el, binding) {
    // Remove Event Listeners
    document.removeEventListener('click', el.__vueClickOutside__)
    delete el.__vueClickOutside__

  }
}

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(553),
  /* template */
  __webpack_require__(733),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-datepicker/src/SingleInput.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SingleInput.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42b2ae97", Component.options)
  } else {
    hotAPI.reload("data-v-42b2ae97", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(554),
  /* template */
  __webpack_require__(757),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-datepicker/src/WrapperInput.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] WrapperInput.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-aa67e5dc", Component.options)
  } else {
    hotAPI.reload("data-v-aa67e5dc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(784)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(555),
  /* template */
  __webpack_require__(734),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-datepicker/src/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-441ba8e7", Component.options)
  } else {
    hotAPI.reload("data-v-441ba8e7", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.date),
      expression: "date"
    }],
    staticClass: "input",
    class: _vm.inputClass,
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly
    },
    domProps: {
      "value": (_vm.date)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.date = $event.target.value
      }
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-42b2ae97", module.exports)
  }
}

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c(_vm.wrap ? 'WrapperInput' : 'SingleInput', {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: (_vm.closePicker),
      expression: "closePicker"
    }],
    tag: "component",
    attrs: {
      "placeholder": _vm.placeholder,
      "inputClass": _vm.inputClass
    },
    model: {
      value: (_vm.date),
      callback: function($$v) {
        _vm.date = $$v
      },
      expression: "date"
    }
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-441ba8e7", module.exports)
  }
}

/***/ }),

/***/ 738:
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
  }, [_vm._v("Basics")]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "inputClass": {
        test: true
      }
    },
    model: {
      value: (_vm.value),
      callback: function($$v) {
        _vm.value = $$v
      },
      expression: "value"
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "placeholder": "European Format ('d-m-Y')",
      "config": {
        dateFormat: 'd-m-Y',
        static: true
      }
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "placeholder": "American Format ('m/d/Y')",
      "config": {
        dateFormat: 'm/d/Y'
      }
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "placeholder": "Fancy Textual Format ('l, F j, Y')",
      "config": {
        dateFormat: 'l, F j, Y'
      }
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "placeholder": "minDate: today",
      "config": {
        minDate: _vm.today,
        defaultDate: _vm.today
      }
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "placeholder": "minDate: '2016-09-20'",
      "config": {
        minDate: '2016-09-20'
      }
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "placeholder": "minDate: new Date('September 2, 2015')",
      "config": {
        minDate: new Date('September 2, 2015')
      }
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "placeholder": _vm.placeholder,
      "config": {
        minDate: 'today',
        maxDate: _vm.maxDate
      }
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-vertical"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Form addons")]), _vm._v(" "), _c('datepicker', {
    attrs: {
      "inputClass": {
        test: true
      },
      "config": {
        wrap: true
      },
      "readonly": ""
    }
  }, [_c('a', {
    staticClass: "button",
    attrs: {
      "data-toggle": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-calendar"
  })]), _vm._v(" "), _c('a', {
    staticClass: "button",
    attrs: {
      "data-clear": ""
    }
  }, [_c('i', {
    staticClass: "fa fa-close"
  })])])], 1), _vm._v(" "), _c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Display week numbers")]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "placeholder": "Enabled week numbers",
      "config": {
        weekNumbers: true
      }
    }
  })], 1)]), _vm._v(" "), _c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Date Range")]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "placeholder": "Select a range",
      "config": {
        mode: 'range'
      }
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent is-vertical"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Preload date and time")]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "placeholder": "The real input is hidden :^)",
      "config": {
        altInput: false,
        altFormat: 'F j, Y'
      }
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "config": {
        defaultDate: '2016-03-01 03:30:00 -0300',
        enableTime: true
      }
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "config": {
        defaultDate: '2016-12-27T16:16:22.585Z',
        enableTime: true
      }
    }
  })], 1)]), _vm._v(" "), _c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("UTC mode")]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "config": {
        utc: true,
        defaultDate: '2016-03-01 03:30:00 -0300',
        enableTime: true
      }
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "config": {
        utc: true,
        defaultDate: '2016-12-27T16:16:22.585Z',
        enableTime: true
      }
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Inline or embedded calendar")]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "placeholder": "Pick date and time",
      "config": {
        inline: true
      }
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent is-vertical"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("DateTime Picker")]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "placeholder": "Pick date and time",
      "config": {
        enableTime: true
      }
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "placeholder": "24 hour time",
      "config": {
        enableTime: true,
        time_24hr: true,
        dateFormat: 'Y-m-d H:i'
      }
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "placeholder": "Pick date and time",
      "config": {
        enableTime: true,
        enableSeconds: true,
        dateFormat: 'Y-m-d h:i:S K'
      }
    }
  })], 1)]), _vm._v(" "), _c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Time Picker")]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "placeholder": "Pick time",
      "config": {
        enableTime: true,
        enableSeconds: true,
        noCalendar: true
      },
      "value": "09:00:00"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-vertical"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Disable specific dates or date intervals")]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "placeholder": "disabled from July 6-9",
      "config": {
        disable: [{
          from: '2016-07-06',
          to: '2016-07-09'
        }, '2016-07-24'],
        minDate: 'today'
      }
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "placeholder": "disabled September 6-9 & August 25-31 2016",
      "config": {
        disable: [{
          from: '2016-09-06',
          to: '2016-09-09'
        }, {
          from: '2016-08-25',
          to: '2016-08-31'
        }],
        minDate: 'today',
        dateFormat: 'Y-m-d'
      }
    }
  })], 1)]), _vm._v(" "), _c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Setting options dynamically")]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    ref: "checkIn",
    attrs: {
      "placeholder": "Check-In Date",
      "config": {
        minDate: new Date()
      }
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    ref: "checkOut",
    attrs: {
      "placeholder": "Check Out Date",
      "config": {
        minDate: new Date()
      }
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Setting custom defaults")]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "config": {
        prevArrow: '<i class=\'fa fa-angle-left\'></i>',
        nextArrow: '<i class=\'fa fa-angle-right\'></i>'
      }
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Localization")]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('datepicker', {
    attrs: {
      "config": {
        locale: _vm.l10n
      }
    }
  })], 1)])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-57257c16", module.exports)
  }
}

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "control has-addons flatpickr",
    class: ( _obj = {}, _obj[("has-addons-" + _vm.alignment)] = _vm.alignment, _obj ),
    attrs: {
      "data-wrap": "true",
      "data-clickOpens": "false"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.date),
      expression: "date"
    }],
    staticClass: "input",
    class: _vm.inputClass,
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder,
      "readonly": _vm.readonly,
      "data-input": ""
    },
    domProps: {
      "value": (_vm.date)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.date = $event.target.value
      }
    }
  }), _vm._v(" "), _vm._t("default")], 2)
  var _obj;
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-aa67e5dc", module.exports)
  }
}

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(634);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("633fd48c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-441ba8e7\",\"scoped\":false,\"hasInlineConfig\":true}!../../stylus-loader/index.js?paths[]=node_modules!../../vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-441ba8e7\",\"scoped\":false,\"hasInlineConfig\":true}!../../stylus-loader/index.js?paths[]=node_modules!../../vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(637);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("d7dadb70", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-57257c16\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Datepicker.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-57257c16\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Datepicker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvRGF0ZXBpY2tlci52dWUiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtZGF0ZXBpY2tlci9zcmMvQmFzZUlucHV0LmpzIiwid2VicGFjazovLy9TaW5nbGVJbnB1dC52dWUiLCJ3ZWJwYWNrOi8vL1dyYXBwZXJJbnB1dC52dWUiLCJ3ZWJwYWNrOi8vL2luZGV4LnZ1ZT8wODg3Iiwid2VicGFjazovLy9EYXRlcGlja2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1kYXRlcGlja2VyL3NyYy9pbmRleC52dWU/NDNlYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvRGF0ZXBpY2tlci52dWU/OGJjYiIsIndlYnBhY2s6Ly8vLi9+L2ZsYXRwaWNrci9kaXN0L2ZsYXRwaWNrci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1jbGljay1vdXRzaWRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLWRhdGVwaWNrZXIvc3JjL1NpbmdsZUlucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1kYXRlcGlja2VyL3NyYy9XcmFwcGVySW5wdXQudnVlIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLWRhdGVwaWNrZXIvc3JjL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1kYXRlcGlja2VyL3NyYy9TaW5nbGVJbnB1dC52dWU/OTgwOCIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1kYXRlcGlja2VyL3NyYy9pbmRleC52dWU/MmUyNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvRGF0ZXBpY2tlci52dWU/OGMzNyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1kYXRlcGlja2VyL3NyYy9XcmFwcGVySW5wdXQudnVlP2M4ZTYiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtZGF0ZXBpY2tlci9zcmMvaW5kZXgudnVlPzMxMmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL0RhdGVwaWNrZXIudnVlP2JmMGQiXSwibmFtZXMiOlsicHJvcHMiLCJhbGlnbm1lbnQiLCJTdHJpbmciLCJjb25maWciLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsImwxMG4iLCJwbGFjZWhvbGRlciIsImlucHV0Q2xhc3MiLCJ2YWx1ZSIsImNvbXB1dGVkIiwiZGF0ZSIsImdldCIsInNldCIsIm5ld1ZhbHVlIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0EsdUJBQTRLOztBQUU1SztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUE0RztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7a0JDL0JlO0FBQ2JBLFNBQU87QUFDTEMsZUFBV0MsTUFETjtBQUVMQyxZQUFRO0FBQ05DLFlBQU1DLE1BREE7QUFFTkMsZUFBUztBQUFBLGVBQU8sRUFBUDtBQUFBO0FBRkgsS0FGSDtBQU1MQyxVQUFNO0FBQ0pILFlBQU1DLE1BREY7QUFFSkMsZUFBUztBQUFBLGVBQU8sRUFBUDtBQUFBO0FBRkwsS0FORDtBQVVMRSxpQkFBYTtBQUNYSixZQUFNRixNQURLO0FBRVhJLGVBQVM7QUFGRSxLQVZSO0FBY0xHLGdCQUFZO0FBQ1ZMLFlBQU1DLE1BREk7QUFFVkMsZUFBUztBQUFBLGVBQU8sRUFBUDtBQUFBO0FBRkMsS0FkUDtBQWtCTEksV0FBT1I7QUFsQkYsR0FETTs7QUFzQmJTLFlBQVU7QUFDUkMsVUFBTTtBQUNKQyxTQURJLGlCQUNFO0FBQ0osZUFB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QUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDLGtCQUFrQjtBQUNqRSxHQUFHO0FBQ0g7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1IQUFtSDtBQUNuSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVB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QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0Qsa0JBQWtCOztBQUVwRTtBQUNBLGlEQUFpRCxrQkFBa0I7QUFDbkU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLCtCQUErQjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtEOztBQUVsRDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsYUFBYTtBQUMvRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQzVCQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3ZYQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3pDQTs7QUFFQTtBQUNBLHFDQUFzSztBQUN0SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQWdHLHFFQUFxRTtBQUNySyx5R0FBeUcscUVBQXFFO0FBQzlLO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBLHFDQUFpTjtBQUNqTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNElBQTRJLG9FQUFvRTtBQUNoTixxSkFBcUosb0VBQW9FO0FBQ3pOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJqcy82LjFlMDQzMjA1YmE3NGM2NGI5MDAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01NzI1N2MxNlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0RhdGVwaWNrZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0RhdGVwaWNrZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01NzI1N2MxNlxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9EYXRlcGlja2VyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi01NzI1N2MxNlwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvRGF0ZXBpY2tlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBEYXRlcGlja2VyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01NzI1N2MxNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU3MjU3YzE2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9EYXRlcGlja2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgYWxpZ25tZW50OiBTdHJpbmcsXHJcbiAgICBjb25maWc6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICBkZWZhdWx0OiAoKSA9PiAoe30pXHJcbiAgICB9LFxyXG4gICAgbDEwbjoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIGRlZmF1bHQ6ICgpID0+ICh7fSlcclxuICAgIH0sXHJcbiAgICBwbGFjZWhvbGRlcjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6ICdQaWNrIGRhdGUnXHJcbiAgICB9LFxyXG4gICAgaW5wdXRDbGFzczoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIGRlZmF1bHQ6ICgpID0+ICh7fSlcclxuICAgIH0sXHJcbiAgICB2YWx1ZTogU3RyaW5nXHJcbiAgfSxcclxuICBcclxuICBjb21wdXRlZDoge1xyXG4gICAgZGF0ZToge1xyXG4gICAgICBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldChuZXdWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgbmV3VmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdnVlLWJ1bG1hLWRhdGVwaWNrZXIvc3JjL0Jhc2VJbnB1dC5qcyIsIjx0ZW1wbGF0ZT5cclxuICA8aW5wdXQgY2xhc3M9XCJpbnB1dFwiIDpjbGFzcz1cImlucHV0Q2xhc3NcIiB0eXBlPVwidGV4dFwiIDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCIgOnJlYWRvbmx5PVwicmVhZG9ubHlcIiB2LW1vZGVsPVwiZGF0ZVwiLz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBCYXNlSW5wdXQgZnJvbSAnLi9CYXNlSW5wdXQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbWl4aW5zOiBbQmFzZUlucHV0XSxcclxuXHJcbiAgcHJvcHM6IHtcclxuICAgIHJlYWRvbmx5OiBCb29sZWFuXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gU2luZ2xlSW5wdXQudnVlPzVhNmFmOGVmIiwiPHRlbXBsYXRlPlxyXG4gIDxwIGNsYXNzPVwiY29udHJvbCBoYXMtYWRkb25zIGZsYXRwaWNrclwiIGRhdGEtd3JhcD1cInRydWVcIiBkYXRhLWNsaWNrT3BlbnM9XCJmYWxzZVwiIDpjbGFzcz1cInsgW2BoYXMtYWRkb25zLSR7YWxpZ25tZW50fWBdOiBhbGlnbm1lbnQgfVwiPlxyXG4gICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiA6Y2xhc3M9XCJpbnB1dENsYXNzXCIgdHlwZT1cInRleHRcIiA6cGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiIDpyZWFkb25seT1cInJlYWRvbmx5XCIgdi1tb2RlbD1cImRhdGVcIiBkYXRhLWlucHV0Lz5cclxuICAgIDxzbG90Pjwvc2xvdD5cclxuICA8L3A+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgQmFzZUlucHV0IGZyb20gJy4vQmFzZUlucHV0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG1peGluczogW0Jhc2VJbnB1dF0sXHJcblxyXG4gIHByb3BzOiB7XHJcbiAgICByZWFkb25seTogQm9vbGVhblxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFdyYXBwZXJJbnB1dC52dWU/ZDIyYjExZDQiLCI8dGVtcGxhdGU+XHJcbiAgPGNvbXBvbmVudCB2LW1vZGVsPVwiZGF0ZVwiIDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCIgOmlucHV0Q2xhc3M9XCJpbnB1dENsYXNzXCIgOmlzPVwid3JhcCA/ICdXcmFwcGVySW5wdXQnIDogJ1NpbmdsZUlucHV0J1wiIHYtY2xpY2stb3V0c2lkZT1cImNsb3NlUGlja2VyXCI+XHJcbiAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgPC9jb21wb25lbnQ+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgRmxhdHBpY2tyIGZyb20gJ2ZsYXRwaWNrcidcclxuaW1wb3J0IEJhc2VJbnB1dCBmcm9tICcuL0Jhc2VJbnB1dCdcclxuaW1wb3J0IFNpbmdsZUlucHV0IGZyb20gJy4vU2luZ2xlSW5wdXQnXHJcbmltcG9ydCBXcmFwcGVySW5wdXQgZnJvbSAnLi9XcmFwcGVySW5wdXQnXHJcbmltcG9ydCBDbGlja091dHNpZGUgZnJvbSAndnVlLWNsaWNrLW91dHNpZGUnXHJcblxyXG5mdW5jdGlvbiBEYXRlcGlja2VyIChzZWxlY3RvciwgY29uZmlnLCBsMTBuKSB7XHJcbiAgdGhpcy5sMTBuID0gT2JqZWN0LmFzc2lnbih7fSwgRmxhdHBpY2tyLnByb3RvdHlwZS5sMTBuLCBsMTBuKVxyXG4gIHJldHVybiBGbGF0cGlja3IuY2FsbCh0aGlzLCBzZWxlY3RvciwgY29uZmlnKVxyXG59XHJcblxyXG5EYXRlcGlja2VyLnByb3RvdHlwZSA9IEZsYXRwaWNrci5wcm90b3R5cGVcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBtaXhpbnM6IFtCYXNlSW5wdXRdLFxyXG5cclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBTaW5nbGVJbnB1dCxcclxuICAgIFdyYXBwZXJJbnB1dFxyXG4gIH0sXHJcblxyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0ZXBpY2tlcjogbnVsbFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG1vdW50ZWQgKCkge1xyXG4gICAgaWYgKCF0aGlzLmRhdGVwaWNrZXIpIHtcclxuICAgICAgdGhpcy5kYXRlcGlja2VyID0gbmV3IERhdGVwaWNrZXIodGhpcy4kZWwsIHRoaXMuY29uZmlnLCB0aGlzLmwxMG4pXHJcbiAgICAgIHRoaXMucG9wdXBJdGVtID0gdGhpcy5kYXRlcGlja2VyLmNhbGVuZGFyQ29udGFpbmVyXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgYmVmb3JlRGVzdHJveSAoKSB7XHJcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyICYmICF0aGlzLnN0YXRpYykge1xyXG4gICAgICB0aGlzLmRhdGVwaWNrZXIuZGVzdHJveSgpXHJcbiAgICAgIHRoaXMuZGF0ZXBpY2tlciA9IG51bGxcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBjb21wdXRlZDoge1xyXG4gICAgd3JhcCAoKSB7XHJcbiAgICAgIHJldHVybiAhIXRoaXMuY29uZmlnLndyYXBcclxuICAgIH0sXHJcbiAgICBzdGF0aWMgKCkge1xyXG4gICAgICByZXR1cm4gISF0aGlzLmNvbmZpZy5zdGF0aWNcclxuICAgIH0sXHJcbiAgICBuYW1lICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMud3JhcCA/ICd3cmFwcGVySW5wdXQnIDogJ3NpbmdsZUlucHV0J1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNsb3NlUGlja2VyICgpIHtcclxuICAgICAgdGhpcy5kYXRlcGlja2VyLmNsb3NlKClcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBkaXJlY3RpdmVzOiB7XHJcbiAgICBDbGlja091dHNpZGVcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInN0eWx1c1wiPlxyXG4kY2FsZW5kYXJfYmFja2dyb3VuZCA9ICNmZmZmZmZcclxuJGNhbGVuZGFyX2JvcmRlcl9jb2xvciA9ICNkM2Q2ZGJcclxuXHJcbiRtb250aHNfY29sb3IgPSAjMTExXHJcbiRtb250aHNfYmFja2dyb3VuZCA9IHRyYW5zcGFyZW50XHJcblxyXG4kd2Vla2RheXNfYmFja2dyb3VuZCA9IHRyYW5zcGFyZW50XHJcblxyXG4kZGF5X3RleHRfY29sb3IgPSAjMjIyMzI0XHJcbiRkYXlfaG92ZXJfYmFja2dyb3VuZF9jb2xvciA9ICNkM2Q2ZGJcclxuXHJcbiR0b2RheV9jb2xvciA9ICNlZDZjNjNcclxuJHNlbGVjdGVkX2RheV9iYWNrZ3JvdW5kID0gIzFmYzhkYlxyXG5cclxuQGltcG9ydCAnfmZsYXRwaWNrci9zcmMvc3R5bGUvZmxhdHBpY2tyJ1xyXG5cclxuLmZsYXRwaWNrci1jYWxlbmRhci5oYXNXZWVrc1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnRcclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGluZGV4LnZ1ZT83MjYxOTA2YyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1hbmNlc3RvclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50XCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPkJhc2ljczwvaDE+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICA8ZGF0ZXBpY2tlciA6aW5wdXRDbGFzcz1cInsgdGVzdDogdHJ1ZSB9XCIgdi1tb2RlbD1cInZhbHVlXCI+PC9kYXRlcGlja2VyPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxkYXRlcGlja2VyIHBsYWNlaG9sZGVyPVwiRXVyb3BlYW4gRm9ybWF0ICgnZC1tLVknKVwiIDpjb25maWc9XCJ7IGRhdGVGb3JtYXQ6ICdkLW0tWScsIHN0YXRpYzogdHJ1ZSB9XCI+PC9kYXRlcGlja2VyPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxkYXRlcGlja2VyIHBsYWNlaG9sZGVyPVwiQW1lcmljYW4gRm9ybWF0ICgnbS9kL1knKVwiIDpjb25maWc9XCJ7IGRhdGVGb3JtYXQ6ICdtL2QvWScgfVwiPjwvZGF0ZXBpY2tlcj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICA8ZGF0ZXBpY2tlciBwbGFjZWhvbGRlcj1cIkZhbmN5IFRleHR1YWwgRm9ybWF0ICgnbCwgRiBqLCBZJylcIiA6Y29uZmlnPVwieyBkYXRlRm9ybWF0OiAnbCwgRiBqLCBZJyB9XCI+PC9kYXRlcGlja2VyPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxkYXRlcGlja2VyIHBsYWNlaG9sZGVyPVwibWluRGF0ZTogdG9kYXlcIiA6Y29uZmlnPVwieyBtaW5EYXRlOiB0b2RheSwgZGVmYXVsdERhdGU6IHRvZGF5IH1cIj48L2RhdGVwaWNrZXI+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgPGRhdGVwaWNrZXIgcGxhY2Vob2xkZXI9XCJtaW5EYXRlOiAnMjAxNi0wOS0yMCdcIiA6Y29uZmlnPVwieyBtaW5EYXRlOiAnMjAxNi0wOS0yMCcgfVwiPjwvZGF0ZXBpY2tlcj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICA8ZGF0ZXBpY2tlciBwbGFjZWhvbGRlcj1cIm1pbkRhdGU6IG5ldyBEYXRlKCdTZXB0ZW1iZXIgMiwgMjAxNScpXCIgOmNvbmZpZz1cInsgbWluRGF0ZTogbmV3IERhdGUoJ1NlcHRlbWJlciAyLCAyMDE1JykgfVwiPjwvZGF0ZXBpY2tlcj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICA8ZGF0ZXBpY2tlciA6cGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiIDpjb25maWc9XCJ7IG1pbkRhdGU6ICd0b2RheScsIG1heERhdGU6IG1heERhdGUgfVwiPjwvZGF0ZXBpY2tlcj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50IGlzLXZlcnRpY2FsXCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPkZvcm0gYWRkb25zPC9oMT5cbiAgICAgICAgICA8ZGF0ZXBpY2tlciA6aW5wdXRDbGFzcz1cInsgdGVzdDogdHJ1ZSB9XCIgOmNvbmZpZz1cInsgd3JhcDogdHJ1ZSB9XCIgcmVhZG9ubHk+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPjxpIGNsYXNzPVwiZmEgZmEtY2FsZW5kYXJcIj48L2k+PC9hPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b25cIiBkYXRhLWNsZWFyPjxpIGNsYXNzPVwiZmEgZmEtY2xvc2VcIj48L2k+PC9hPlxuICAgICAgICAgIDwvZGF0ZXBpY2tlcj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94XCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5EaXNwbGF5IHdlZWsgbnVtYmVyczwvaDE+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICA8ZGF0ZXBpY2tlciBwbGFjZWhvbGRlcj1cIkVuYWJsZWQgd2VlayBudW1iZXJzXCIgOmNvbmZpZz1cInsgd2Vla051bWJlcnM6IHRydWUgfVwiPjwvZGF0ZXBpY2tlcj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveFwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+RGF0ZSBSYW5nZTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICA8ZGF0ZXBpY2tlciBwbGFjZWhvbGRlcj1cIlNlbGVjdCBhIHJhbmdlXCIgOmNvbmZpZz1cInsgbW9kZTogJ3JhbmdlJyB9XCI+PC9kYXRlcGlja2VyPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1hbmNlc3RvclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50IGlzLXZlcnRpY2FsXCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlByZWxvYWQgZGF0ZSBhbmQgdGltZTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICA8IS0tIFRPRE86IGNsaWNrIG91dCBzaWRlIGNhbm5vdCBoYW5kbGUgaGlkZGVuIGlucHV0IHlldC4gV2lsbCBmaXggdGhpcyBsYXRlci4gLS0+XG4gICAgICAgICAgICA8ZGF0ZXBpY2tlciBwbGFjZWhvbGRlcj1cIlRoZSByZWFsIGlucHV0IGlzIGhpZGRlbiA6XilcIiA6Y29uZmlnPVwieyBhbHRJbnB1dDogZmFsc2UsIGFsdEZvcm1hdDogJ0YgaiwgWScgfVwiPjwvZGF0ZXBpY2tlcj5cbiAgICAgICAgICAgIDwhLS0gPGRhdGVwaWNrZXIgcGxhY2Vob2xkZXI9XCJUaGUgcmVhbCBpbnB1dCBpcyBoaWRkZW4gOl4pXCIgOmNvbmZpZz1cInsgYWx0SW5wdXQ6IHRydWUsIGFsdEZvcm1hdDogJ0YgaiwgWScgfVwiPjwvZGF0ZXBpY2tlcj4gLS0+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgPGRhdGVwaWNrZXIgOmNvbmZpZz1cInsgZGVmYXVsdERhdGU6ICcyMDE2LTAzLTAxIDAzOjMwOjAwIC0wMzAwJywgZW5hYmxlVGltZTogdHJ1ZSB9XCI+PC9kYXRlcGlja2VyPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxkYXRlcGlja2VyIDpjb25maWc9XCJ7IGRlZmF1bHREYXRlOiAnMjAxNi0xMi0yN1QxNjoxNjoyMi41ODVaJywgZW5hYmxlVGltZTogdHJ1ZSB9XCI+PC9kYXRlcGlja2VyPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94XCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5VVEMgbW9kZTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICA8ZGF0ZXBpY2tlciA6Y29uZmlnPVwieyB1dGM6IHRydWUsIGRlZmF1bHREYXRlOiAnMjAxNi0wMy0wMSAwMzozMDowMCAtMDMwMCcsIGVuYWJsZVRpbWU6IHRydWUgfVwiPjwvZGF0ZXBpY2tlcj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICA8ZGF0ZXBpY2tlciA6Y29uZmlnPVwieyB1dGM6IHRydWUsIGRlZmF1bHREYXRlOiAnMjAxNi0xMi0yN1QxNjoxNjoyMi41ODVaJywgZW5hYmxlVGltZTogdHJ1ZSB9XCI+PC9kYXRlcGlja2VyPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1wYXJlbnRcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveFwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+SW5saW5lIG9yIGVtYmVkZGVkIGNhbGVuZGFyPC9oMT5cbiAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxkYXRlcGlja2VyIHBsYWNlaG9sZGVyPVwiUGljayBkYXRlIGFuZCB0aW1lXCIgOmNvbmZpZz1cInsgaW5saW5lOiB0cnVlIH1cIj48L2RhdGVwaWNrZXI+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLWFuY2VzdG9yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1wYXJlbnQgaXMtdmVydGljYWxcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveFwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+RGF0ZVRpbWUgUGlja2VyPC9oMT5cbiAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxkYXRlcGlja2VyIHBsYWNlaG9sZGVyPVwiUGljayBkYXRlIGFuZCB0aW1lXCIgOmNvbmZpZz1cInsgZW5hYmxlVGltZTogdHJ1ZSB9XCI+PC9kYXRlcGlja2VyPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxkYXRlcGlja2VyIHBsYWNlaG9sZGVyPVwiMjQgaG91ciB0aW1lXCIgOmNvbmZpZz1cInsgZW5hYmxlVGltZTogdHJ1ZSwgdGltZV8yNGhyOiB0cnVlLCBkYXRlRm9ybWF0OiAnWS1tLWQgSDppJyB9XCI+PC9kYXRlcGlja2VyPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxkYXRlcGlja2VyIHBsYWNlaG9sZGVyPVwiUGljayBkYXRlIGFuZCB0aW1lXCIgOmNvbmZpZz1cInsgZW5hYmxlVGltZTogdHJ1ZSwgZW5hYmxlU2Vjb25kczogdHJ1ZSwgZGF0ZUZvcm1hdDogJ1ktbS1kIGg6aTpTIEsnIH1cIj48L2RhdGVwaWNrZXI+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlRpbWUgUGlja2VyPC9oMT5cbiAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxkYXRlcGlja2VyIHBsYWNlaG9sZGVyPVwiUGljayB0aW1lXCIgOmNvbmZpZz1cInsgZW5hYmxlVGltZTogdHJ1ZSwgZW5hYmxlU2Vjb25kczogdHJ1ZSwgbm9DYWxlbmRhcjogdHJ1ZSB9XCIgdmFsdWU9XCIwOTowMDowMFwiPjwvZGF0ZXBpY2tlcj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50IGlzLXZlcnRpY2FsXCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPkRpc2FibGUgc3BlY2lmaWMgZGF0ZXMgb3IgZGF0ZSBpbnRlcnZhbHM8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgPGRhdGVwaWNrZXIgcGxhY2Vob2xkZXI9XCJkaXNhYmxlZCBmcm9tIEp1bHkgNi05XCIgOmNvbmZpZz1cInsgZGlzYWJsZTogWyB7IGZyb206ICcyMDE2LTA3LTA2JywgdG86ICcyMDE2LTA3LTA5JyB9LCAnMjAxNi0wNy0yNCcgXSwgbWluRGF0ZTogJ3RvZGF5JyB9XCI+PC9kYXRlcGlja2VyPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxkYXRlcGlja2VyIHBsYWNlaG9sZGVyPVwiZGlzYWJsZWQgU2VwdGVtYmVyIDYtOSAmIEF1Z3VzdCAyNS0zMSAyMDE2XCIgOmNvbmZpZz1cInsgZGlzYWJsZTogWyB7IGZyb20gOiAnMjAxNi0wOS0wNicsIHRvIDogJzIwMTYtMDktMDknIH0sIHsgZnJvbSA6ICcyMDE2LTA4LTI1JywgdG8gOiAnMjAxNi0wOC0zMScgfSBdLCBtaW5EYXRlOiAndG9kYXknLCBkYXRlRm9ybWF0OiAnWS1tLWQnIH1cIj48L2RhdGVwaWNrZXI+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlNldHRpbmcgb3B0aW9ucyBkeW5hbWljYWxseTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICA8ZGF0ZXBpY2tlciByZWY9XCJjaGVja0luXCIgcGxhY2Vob2xkZXI9XCJDaGVjay1JbiBEYXRlXCIgOmNvbmZpZz1cInsgbWluRGF0ZTogbmV3IERhdGUoKSB9XCI+PC9kYXRlcGlja2VyPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxkYXRlcGlja2VyIHJlZj1cImNoZWNrT3V0XCIgcGxhY2Vob2xkZXI9XCJDaGVjayBPdXQgRGF0ZVwiIDpjb25maWc9XCJ7IG1pbkRhdGU6IG5ldyBEYXRlKCkgfVwiPjwvZGF0ZXBpY2tlcj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtYW5jZXN0b3JcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudFwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94XCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5TZXR0aW5nIGN1c3RvbSBkZWZhdWx0czwvaDE+XG4gICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICA8ZGF0ZXBpY2tlciA6Y29uZmlnPVwieyBwcmV2QXJyb3c6ICc8aSBjbGFzcz1cXCdmYSBmYS1hbmdsZS1sZWZ0XFwnPjwvaT4nLCBuZXh0QXJyb3c6ICc8aSBjbGFzcz1cXCdmYSBmYS1hbmdsZS1yaWdodFxcJz48L2k+JyB9XCI+PC9kYXRlcGlja2VyPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1wYXJlbnRcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveFwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+TG9jYWxpemF0aW9uPC9oMT5cbiAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxkYXRlcGlja2VyIDpjb25maWc9XCJ7IGxvY2FsZTogbDEwbiB9XCI+PC9kYXRlcGlja2VyPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJ3Z1ZS1idWxtYS1kYXRlcGlja2VyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBEYXRlcGlja2VyXG4gIH0sXG5cbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiAnMjAxNi0xMi0xMidcbiAgICB9XG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgY29uc3QgeyBjaGVja0luLCBjaGVja091dCB9ID0gdGhpcy4kcmVmc1xuICAgIGNoZWNrSW4uZGF0ZXBpY2tlci5zZXQoJ29uQ2hhbmdlJywgKHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIsIGluc3RhbmNlKSA9PiB7XG4gICAgICBjaGVja091dC5kYXRlcGlja2VyLnNldCgnbWluRGF0ZScsIHNlbGVjdGVkRGF0ZXNbMF0uZnBfaW5jcigxKSlcbiAgICB9KVxuXG4gICAgY2hlY2tPdXQuZGF0ZXBpY2tlci5zZXQoJ29uQ2hhbmdlJywgKHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIsIGluc3RhbmNlKSA9PiB7XG4gICAgICBjaGVja0luLmRhdGVwaWNrZXIuc2V0KCdtYXhEYXRlJywgZGF0ZVN0cilcbiAgICB9KVxuICB9LFxuXG4gIGNvbXB1dGVkOiB7XG4gICAgdG9kYXkgKCkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKClcbiAgICB9LFxuICAgIG1heERhdGUgKCkge1xuICAgICAgbGV0IGQgPSBuZXcgRGF0ZSgpXG4gICAgICBkLnNldERhdGUoMzIpXG4gICAgICByZXR1cm4gZFxuICAgIH0sXG4gICAgcGxhY2Vob2xkZXIgKCkge1xuICAgICAgcmV0dXJuIGBtaW5EYXRlOiB0b2RheSwgbWF4RGF0ZTogJHt0aGlzLm1heERhdGUuZ2V0RnVsbFllYXIoKX0tJHt0aGlzLm1heERhdGUuZ2V0TW9udGgoKSArIDF9LSR7dGhpcy5tYXhEYXRlLmdldERhdGUoKX1gXG4gICAgfSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vY2htbG4vZmxhdHBpY2tyL2Jsb2IvZ2gtcGFnZXMvc3JjL2ZsYXRwaWNrci5sMTBuLnpoLmpzXG4gICAgbDEwbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmaXJzdERheU9mV2VlazogMSxcbiAgICAgICAgd2Vla2RheXM6IHtcbiAgICAgICAgICBzaG9ydGhhbmQ6IFsn5ZGo5pelJywgJ+WRqOS4gCcsICflkajkuownLCAn5ZGo5LiJJywgJ+WRqOWbmycsICflkajkupQnLCAn5ZGo5YWtJ10sXG4gICAgICAgICAgbG9uZ2hhbmQ6IFsn5pif5pyf5pelJywgJ+aYn+acn+S4gCcsICfmmJ/mnJ/kuownLCAn5pif5pyf5LiJJywgJ+aYn+acn+WbmycsICfmmJ/mnJ/kupQnLCAn5pif5pyf5YWtJ11cbiAgICAgICAgfSxcbiAgICAgICAgbW9udGhzOiB7XG4gICAgICAgICAgc2hvcnRoYW5kOiBbJ+S4gOaciCcsICfkuozmnIgnLCAn5LiJ5pyIJywgJ+Wbm+aciCcsICfkupTmnIgnLCAn5YWt5pyIJywgJ+S4g+aciCcsICflhavmnIgnLCAn5Lmd5pyIJywgJ+WNgeaciCcsICfljYHkuIDmnIgnLCAn5Y2B5LqM5pyIJ10sXG4gICAgICAgICAgbG9uZ2hhbmQ6IFsn5LiA5pyIJywgJ+S6jOaciCcsICfkuInmnIgnLCAn5Zub5pyIJywgJ+S6lOaciCcsICflha3mnIgnLCAn5LiD5pyIJywgJ+WFq+aciCcsICfkuZ3mnIgnLCAn5Y2B5pyIJywgJ+WNgeS4gOaciCcsICfljYHkuozmnIgnXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHdhdGNoOiB7XG4gICAgdmFsdWUgKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgICBjb25zb2xlLmxvZyhuZXdWYWwsIG9sZFZhbClcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4udGlsZS5pcy1wYXJlbnQge1xuICBtaW4td2lkdGg6IDUwJTtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gRGF0ZXBpY2tlci52dWU/MzhjN2U3NGMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5mbGF0cGlja3ItY2FsZW5kYXIge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gIGRpcmVjdGlvbjogbHRyO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMzE1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogdG9wIGN1YmljLWJlemllcigwLCAxLCAwLjUsIDEpIDEwMG1zO1xcbiAgei1pbmRleDogOTk5O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDFweCAwIDAgI2U2ZTZlNiwgLTFweCAwIDAgI2U2ZTZlNiwgMCAxcHggMCAjZTZlNmU2LCAwIC0xcHggMCAjZTZlNmU2LCAwIDNweCAxM3B4IHJnYmEoMCwwLDAsMC4wOCk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIub3BlbixcXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmlubGluZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgbWF4LWhlaWdodDogNjQwcHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIub3BlbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmxhdHBpY2tyRmFkZUluRG93biAzMDBtcyBjdWJpYy1iZXppZXIoMCwgMSwgMC41LCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmbGF0cGlja3JGYWRlSW5Eb3duIDMwMG1zIGN1YmljLWJlemllcigwLCAxLCAwLjUsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmlubGluZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMnB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnN0YXRpYyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IGNhbGMoMTAwJSArIDJweCk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc3RhdGljLm9wZW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuaGFzV2Vla3Mge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuZGF0ZUlzUGlja2VkLmhhc1RpbWUgLmZsYXRwaWNrci10aW1lIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTZlNmU2O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLm5vQ2FsZW5kYXIuaGFzVGltZSAuZmxhdHBpY2tyLXRpbWUge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmJlZm9yZSxcXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgY29udGVudDogJyc7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG4gIGxlZnQ6IDIycHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIucmlnaHRNb3N0OmJlZm9yZSxcXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnJpZ2h0TW9zdDphZnRlciB7XFxuICBsZWZ0OiBhdXRvO1xcbiAgcmlnaHQ6IDIycHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXI6YmVmb3JlIHtcXG4gIGJvcmRlci13aWR0aDogNXB4O1xcbiAgbWFyZ2luOiAwIC01cHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXI6YWZ0ZXIge1xcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICBtYXJnaW46IDAgLTRweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDpiZWZvcmUsXFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDphZnRlciB7XFxuICBib3R0b206IDEwMCU7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YmVmb3JlIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlNmU2ZTY7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YWZ0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTpiZWZvcmUsXFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTphZnRlciB7XFxuICB0b3A6IDEwMCU7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YmVmb3JlIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICNlNmU2ZTY7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcXG59XFxuLmZsYXRwaWNrci13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmZsYXRwaWNrci1tb250aCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XFxuICBmaWxsOiByZ2JhKDAsMCwwLDAuOSk7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aCxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGgge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMHB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aCBpLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aCBpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoLmZsYXRwaWNrci1wcmV2LW1vbnRoLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aC5mbGF0cGlja3ItcHJldi1tb250aCB7XFxuLypcXG4gICAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXFxuLypcXG4gICAgICAgICovXFxuICBsZWZ0OiBjYWxjKDMuNTclIC0gMS41cHgpO1xcbi8qXFxuICAgICAgICAvKnJ0bDplbmQ6aWdub3JlKi9cXG4vKlxcbiAgICAgICAgKi9cXG59XFxuLypcXG4gICAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXFxuLypcXG4gICAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xcbi5mbGF0cGlja3ItcHJldi1tb250aC5mbGF0cGlja3ItbmV4dC1tb250aCxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGguZmxhdHBpY2tyLW5leHQtbW9udGgge1xcbi8qXFxuICAgICAgICAvKnJ0bDpiZWdpbjppZ25vcmUqL1xcbi8qXFxuICAgICAgICAqL1xcbiAgcmlnaHQ6IGNhbGMoMy41NyUgLSAxLjVweCk7XFxuLypcXG4gICAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xcbi8qXFxuICAgICAgICAqL1xcbn1cXG4vKlxcbiAgICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cXG4vKlxcbiAgICAgICAgLypydGw6ZW5kOmlnbm9yZSovXFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoOmhvdmVyLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aDpob3ZlciB7XFxuICBjb2xvcjogIzk1OWVhOTtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoOmhvdmVyIHN2ZyxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGg6aG92ZXIgc3ZnIHtcXG4gIGZpbGw6ICNmNjQ3NDc7XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aCBzdmcsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoIHN2ZyB7XFxuICB3aWR0aDogMTRweDtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoIHN2ZyBwYXRoLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aCBzdmcgcGF0aCB7XFxuICB0cmFuc2l0aW9uOiBmaWxsIDAuMXM7XFxuICBmaWxsOiBpbmhlcml0O1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLm51bUlucHV0V3JhcHBlciBpbnB1dCxcXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTRweDtcXG4gIHBhZGRpbmc6IDAgNHB4IDAgMnB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBsaW5lLWhlaWdodDogNTAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTcsNTcsNTcsMC4wNSk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuOmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMzJTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXAge1xcbiAgdG9wOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXA6YWZ0ZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHJnYmEoNTcsNTcsNTcsMC42KTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93biB7XFxuICB0b3A6IDUwJTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93bjphZnRlciB7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSg1Nyw1Nyw1NywwLjYpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4gc3ZnIHtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4gc3ZnIHBhdGgge1xcbiAgZmlsbDogcmdiYSgwLDAsMCwwLjUpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNSk7XFxufVxcbi5udW1JbnB1dFdyYXBwZXI6aG92ZXIgc3BhbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGgge1xcbiAgZm9udC1zaXplOiAxMzUlO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNzUlO1xcbiAgbGVmdDogMTIuNSU7XFxuICB0b3A6IDVweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIHNwYW4uY3VyLW1vbnRoIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDdweDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBzcGFuLmN1ci1tb250aDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLm51bUlucHV0V3JhcHBlciB7XFxuICB3aWR0aDogNmNoO1xcbiAgd2lkdGg6IDdjaFxcXFwwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXA6YWZ0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLDAsMCwwLjkpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93bjphZnRlciB7XFxuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBpbnB1dC5jdXIteWVhciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDAgMCAwIDAuNWNoO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IGluaXRpYWw7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgdmVydGljYWwtYWxpZ246IGluaXRpYWw7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBpbnB1dC5jdXIteWVhcjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXJbZGlzYWJsZWRdLFxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBpbnB1dC5jdXIteWVhcltkaXNhYmxlZF06aG92ZXIge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5mbGF0cGlja3Itd2Vla2RheXMge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uZmxhdHBpY2tyLWRheXMsXFxuLmZsYXRwaWNrci13ZWVrcyB7XFxuICBwYWRkaW5nOiAxcHggMCAwIDA7XFxufVxcbi5mbGF0cGlja3ItZGF5cyB7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogMzE1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIC1tcy1mbGV4LXBhY2s6IGRpc3RyaWJ1dGU7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5mbGF0cGlja3ItZGF5IHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjMzkzOTM5O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHdpZHRoOiAxNC4yODU3MTQzJTtcXG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxNC4yODU3MTQzJTtcXG4gICAgICBmbGV4LWJhc2lzOiAxNC4yODU3MTQzJTtcXG4gIG1heC13aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mbGF0cGlja3ItZGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkudG9kYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXkudG9kYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXkudG9kYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXk6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5OmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5OmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheTpmb2N1cyxcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXk6Zm9jdXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogMDtcXG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XFxuICBib3JkZXItY29sb3I6ICNlNmU2ZTY7XFxufVxcbi5mbGF0cGlja3ItZGF5LnRvZGF5IHtcXG4gIGJvcmRlci1jb2xvcjogIzk1OWVhOTtcXG59XFxuLmZsYXRwaWNrci1kYXkudG9kYXk6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkudG9kYXk6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjOTU5ZWE5O1xcbiAgYmFja2dyb3VuZDogIzk1OWVhOTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZCxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkOmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2U6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2U6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQ6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLm5leHRNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLm5leHRNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5uZXh0TW9udGhEYXkge1xcbiAgYmFja2dyb3VuZDogIzU2OWZmNztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjNTY5ZmY3O1xcbn1cXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5zdGFydFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2Uuc3RhcnRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5zdGFydFJhbmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHggMCAwIDUwcHg7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UuZW5kUmFuZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZS5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnN0YXJ0UmFuZ2UuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZS5lbmRSYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG4uZmxhdHBpY2tyLWRheS5pblJhbmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBib3gtc2hhZG93OiAtNXB4IDAgMCAjZTZlNmU2LCA1cHggMCAwICNlNmU2ZTY7XFxufVxcbi5mbGF0cGlja3ItZGF5LmRpc2FibGVkLFxcbi5mbGF0cGlja3ItZGF5LmRpc2FibGVkOmhvdmVyIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5kaXNhYmxlZCxcXG4uZmxhdHBpY2tyLWRheS5kaXNhYmxlZDpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5Lm5vdEFsbG93ZWQsXFxuLmZsYXRwaWNrci1kYXkubm90QWxsb3dlZC5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkubm90QWxsb3dlZC5uZXh0TW9udGhEYXkge1xcbiAgY29sb3I6IHJnYmEoNTcsNTcsNTcsMC4zKTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuc3Bhbi5mbGF0cGlja3Itd2Vla2RheSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBmb250LXNpemU6IDkwJTtcXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNTQpO1xcbiAgaGVpZ2h0OiAyNy4zMzMzMzMzMzMzMzMzMzJweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDE0LjI4JTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy10b3A6IDMuMzMzMzMzMzMzMzMzMzMzcHg7XFxufVxcbi5yYW5nZU1vZGUgLmZsYXRwaWNrci1kYXkge1xcbiAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIC5mbGF0cGlja3Itd2Vla3Mge1xcbiAgcGFkZGluZzogMXB4IDEycHggMCAxMnB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDAgMCAjZTZlNmU2O1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIC5mbGF0cGlja3Itd2Vla2RheSB7XFxuICBmbG9hdDogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIHNwYW4uZmxhdHBpY2tyLWRheSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiBub25lO1xcbn1cXG4uZmxhdHBpY2tyLWlubmVyQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmZsYXRwaWNrci1yQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3V0bGluZTogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zM3MgY3ViaWMtYmV6aWVyKDAsIDEsIDAuNSwgMSk7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmZsYXRwaWNrci10aW1lOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjbGVhcjogYm90aDtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwOmFmdGVyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMzOTM5Mzk7XFxufVxcbi5mbGF0cGlja3ItdGltZSAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dEb3duOmFmdGVyIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICMzOTM5Mzk7XFxufVxcbi5mbGF0cGlja3ItdGltZS5oYXNTZWNvbmRzIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgd2lkdGg6IDI2JTtcXG59XFxuLmZsYXRwaWNrci10aW1lLnRpbWUyNGhyIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgd2lkdGg6IDQ5JTtcXG59XFxuLmZsYXRwaWNrci10aW1lIGlucHV0IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzM5MzkzOTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5mbGF0cGlja3ItdGltZSBpbnB1dC5mbGF0cGlja3ItaG91ciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmZsYXRwaWNrci10aW1lIGlucHV0LmZsYXRwaWNrci1taW51dGUsXFxuLmZsYXRwaWNrci10aW1lIGlucHV0LmZsYXRwaWNrci1zZWNvbmQge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLmZsYXRwaWNrci10aW1lIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXI6IDA7XFxufVxcbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLXRpbWUtc2VwYXJhdG9yLFxcbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBtIHtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBjb2xvcjogIzM5MzkzOTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDIlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG0ge1xcbiAgb3V0bGluZTogMDtcXG4gIHdpZHRoOiAxOCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpob3ZlcixcXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbn1cXG4uaGFzV2Vla3MgLmZsYXRwaWNrci1kYXlzLFxcbi5oYXNUaW1lIC5mbGF0cGlja3ItZGF5cyB7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbn1cXG4uaGFzV2Vla3MgLmZsYXRwaWNrci1kYXlzIHtcXG4gIGJvcmRlci1sZWZ0OiAwO1xcbn1cXG5AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcXG4uZmxhdHBpY2tyLW1vbnRoIHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuLmZsYXRwaWNrci1tb250aCBzdmcge1xcbiAgICB0b3A6IDAgIWltcG9ydGFudDtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmbGF0cGlja3JGYWRlSW5Eb3duIHtcXG5mcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcXG59XFxudG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGZsYXRwaWNrckZhZGVJbkRvd24ge1xcbmZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbn1cXG50byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG59XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuaGFzV2Vla3Mge1xcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDQxYmE4ZTdcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3N0eWx1cy1sb2FkZXI/cGF0aHNbXT1ub2RlX21vZHVsZXMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS1kYXRlcGlja2VyL3NyYy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDYzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udGlsZS5pcy1wYXJlbnRbZGF0YS12LTU3MjU3YzE2XSB7XFxuICBtaW4td2lkdGg6IDUwJTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNTcyNTdjMTZcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9EYXRlcGlja2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuLyohIGZsYXRwaWNrciB2Mi40LjIsIEBsaWNlbnNlIE1JVCAqL1xuZnVuY3Rpb24gRmxhdHBpY2tyKGVsZW1lbnQsIGNvbmZpZykge1xuXHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0c2VsZi5jaGFuZ2VNb250aCA9IGNoYW5nZU1vbnRoO1xuXHRzZWxmLmNoYW5nZVllYXIgPSBjaGFuZ2VZZWFyO1xuXHRzZWxmLmNsZWFyID0gY2xlYXI7XG5cdHNlbGYuY2xvc2UgPSBjbG9zZTtcblx0c2VsZi5fY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQ7XG5cdHNlbGYuZGVzdHJveSA9IGRlc3Ryb3k7XG5cdHNlbGYuZm9ybWF0RGF0ZSA9IGZvcm1hdERhdGU7XG5cdHNlbGYuaXNFbmFibGVkID0gaXNFbmFibGVkO1xuXHRzZWxmLmp1bXBUb0RhdGUgPSBqdW1wVG9EYXRlO1xuXHRzZWxmLm9wZW4gPSBvcGVuO1xuXHRzZWxmLnJlZHJhdyA9IHJlZHJhdztcblx0c2VsZi5zZXQgPSBzZXQ7XG5cdHNlbGYuc2V0RGF0ZSA9IHNldERhdGU7XG5cdHNlbGYudG9nZ2xlID0gdG9nZ2xlO1xuXG5cdGZ1bmN0aW9uIGluaXQoKSB7XG5cdFx0aWYgKGVsZW1lbnQuX2ZsYXRwaWNrcikgZGVzdHJveShlbGVtZW50Ll9mbGF0cGlja3IpO1xuXG5cdFx0ZWxlbWVudC5fZmxhdHBpY2tyID0gc2VsZjtcblxuXHRcdHNlbGYuZWxlbWVudCA9IGVsZW1lbnQ7XG5cdFx0c2VsZi5pbnN0YW5jZUNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcblx0XHRzZWxmLnBhcnNlRGF0ZSA9IEZsYXRwaWNrci5wcm90b3R5cGUucGFyc2VEYXRlLmJpbmQoc2VsZik7XG5cblx0XHRzZXR1cEZvcm1hdHMoKTtcblxuXHRcdHBhcnNlQ29uZmlnKCk7XG5cdFx0c2V0dXBMb2NhbGUoKTtcblx0XHRzZXR1cElucHV0cygpO1xuXHRcdHNldHVwRGF0ZXMoKTtcblx0XHRzZXR1cEhlbHBlckZ1bmN0aW9ucygpO1xuXG5cdFx0c2VsZi5pc09wZW4gPSBzZWxmLmNvbmZpZy5pbmxpbmU7XG5cblx0XHRzZWxmLmlzTW9iaWxlID0gIXNlbGYuY29uZmlnLmRpc2FibGVNb2JpbGUgJiYgIXNlbGYuY29uZmlnLmlubGluZSAmJiBzZWxmLmNvbmZpZy5tb2RlID09PSBcInNpbmdsZVwiICYmICFzZWxmLmNvbmZpZy5kaXNhYmxlLmxlbmd0aCAmJiAhc2VsZi5jb25maWcuZW5hYmxlLmxlbmd0aCAmJiAhc2VsZi5jb25maWcud2Vla051bWJlcnMgJiYgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG5cdFx0aWYgKCFzZWxmLmlzTW9iaWxlKSBidWlsZCgpO1xuXG5cdFx0YmluZCgpO1xuXG5cdFx0aWYgKCFzZWxmLmlzTW9iaWxlKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgXCJkYXRlSXNQaWNrZWRcIiwge1xuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uIHNldChib29sKSB7XG5cdFx0XHRcdFx0dG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJkYXRlSXNQaWNrZWRcIiwgYm9vbCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHNlbGYuZGF0ZUlzUGlja2VkID0gc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDAgfHwgc2VsZi5jb25maWcubm9DYWxlbmRhcjtcblxuXHRcdGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoKSB7XG5cdFx0XHRpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkgc2V0SG91cnNGcm9tRGF0ZSgpO1xuXHRcdFx0dXBkYXRlVmFsdWUoKTtcblx0XHR9XG5cblx0XHRpZiAoc2VsZi5jb25maWcud2Vla051bWJlcnMpIHtcblx0XHRcdHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUud2lkdGggPSBzZWxmLmRheXMuY2xpZW50V2lkdGggKyBzZWxmLndlZWtXcmFwcGVyLmNsaWVudFdpZHRoICsgXCJweFwiO1xuXHRcdH1cblxuXHRcdHRyaWdnZXJFdmVudChcIlJlYWR5XCIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlVGltZShlKSB7XG5cdFx0aWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgJiYgIXNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGgpXG5cdFx0XHQvLyBwaWNraW5nIHRpbWUgb25seVxuXHRcdFx0c2VsZi5zZWxlY3RlZERhdGVzID0gW3NlbGYubm93XTtcblxuXHRcdHRpbWVXcmFwcGVyKGUpO1xuXG5cdFx0aWYgKCFzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoKSByZXR1cm47XG5cblx0XHRpZiAoIXNlbGYubWluRGF0ZUhhc1RpbWUgfHwgZS50eXBlICE9PSBcImlucHV0XCIgfHwgZS50YXJnZXQudmFsdWUubGVuZ3RoID49IDIpIHtcblx0XHRcdHNldEhvdXJzRnJvbUlucHV0cygpO1xuXHRcdFx0dXBkYXRlVmFsdWUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNldEhvdXJzRnJvbUlucHV0cygpO1xuXHRcdFx0XHR1cGRhdGVWYWx1ZSgpO1xuXHRcdFx0fSwgMTAwMCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gc2V0SG91cnNGcm9tSW5wdXRzKCkge1xuXHRcdGlmICghc2VsZi5jb25maWcuZW5hYmxlVGltZSkgcmV0dXJuO1xuXG5cdFx0dmFyIGhvdXJzID0gcGFyc2VJbnQoc2VsZi5ob3VyRWxlbWVudC52YWx1ZSwgMTApIHx8IDAsXG5cdFx0ICAgIG1pbnV0ZXMgPSBwYXJzZUludChzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUsIDEwKSB8fCAwLFxuXHRcdCAgICBzZWNvbmRzID0gc2VsZi5jb25maWcuZW5hYmxlU2Vjb25kcyA/IHBhcnNlSW50KHNlbGYuc2Vjb25kRWxlbWVudC52YWx1ZSwgMTApIHx8IDAgOiAwO1xuXG5cdFx0aWYgKHNlbGYuYW1QTSkgaG91cnMgPSBob3VycyAlIDEyICsgMTIgKiAoc2VsZi5hbVBNLnRleHRDb250ZW50ID09PSBcIlBNXCIpO1xuXG5cdFx0aWYgKHNlbGYubWluRGF0ZUhhc1RpbWUgJiYgY29tcGFyZURhdGVzKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLCBzZWxmLmNvbmZpZy5taW5EYXRlKSA9PT0gMCkge1xuXG5cdFx0XHRob3VycyA9IE1hdGgubWF4KGhvdXJzLCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEhvdXJzKCkpO1xuXHRcdFx0aWYgKGhvdXJzID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEhvdXJzKCkpIG1pbnV0ZXMgPSBNYXRoLm1heChtaW51dGVzLCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1pbnV0ZXMoKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNlbGYubWF4RGF0ZUhhc1RpbWUgJiYgY29tcGFyZURhdGVzKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLCBzZWxmLmNvbmZpZy5tYXhEYXRlKSA9PT0gMCkge1xuXHRcdFx0aG91cnMgPSBNYXRoLm1pbihob3Vycywgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRIb3VycygpKTtcblx0XHRcdGlmIChob3VycyA9PT0gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRIb3VycygpKSBtaW51dGVzID0gTWF0aC5taW4obWludXRlcywgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRNaW51dGVzKCkpO1xuXHRcdH1cblxuXHRcdHNldEhvdXJzKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldEhvdXJzRnJvbURhdGUoZGF0ZU9iaikge1xuXHRcdHZhciBkYXRlID0gZGF0ZU9iaiB8fCBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iajtcblxuXHRcdGlmIChkYXRlKSBzZXRIb3VycyhkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSk7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRIb3Vycyhob3VycywgbWludXRlcywgc2Vjb25kcykge1xuXHRcdGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoKSB7XG5cdFx0XHRzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5zZXRIb3Vycyhob3VycyAlIDI0LCBtaW51dGVzLCBzZWNvbmRzIHx8IDAsIDApO1xuXHRcdH1cblxuXHRcdGlmICghc2VsZi5jb25maWcuZW5hYmxlVGltZSB8fCBzZWxmLmlzTW9iaWxlKSByZXR1cm47XG5cblx0XHRzZWxmLmhvdXJFbGVtZW50LnZhbHVlID0gc2VsZi5wYWQoIXNlbGYuY29uZmlnLnRpbWVfMjRociA/ICgxMiArIGhvdXJzKSAlIDEyICsgMTIgKiAoaG91cnMgJSAxMiA9PT0gMCkgOiBob3Vycyk7XG5cblx0XHRzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUgPSBzZWxmLnBhZChtaW51dGVzKTtcblxuXHRcdGlmICghc2VsZi5jb25maWcudGltZV8yNGhyICYmIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGgpIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldEhvdXJzKCkgPj0gMTIgPyBcIlBNXCIgOiBcIkFNXCI7XG5cblx0XHRpZiAoc2VsZi5jb25maWcuZW5hYmxlU2Vjb25kcykgc2VsZi5zZWNvbmRFbGVtZW50LnZhbHVlID0gc2VsZi5wYWQoc2Vjb25kcyk7XG5cdH1cblxuXHRmdW5jdGlvbiBvblllYXJJbnB1dChldmVudCkge1xuXHRcdHZhciB5ZWFyID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdGlmICh5ZWFyLmxlbmd0aCA9PT0gNCkge1xuXHRcdFx0c2VsZi5jdXJyZW50WWVhckVsZW1lbnQuYmx1cigpO1xuXHRcdFx0aWYgKCEvW15cXGRdLy50ZXN0KHllYXIpKSBjaGFuZ2VZZWFyKHllYXIpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW9udGhTY3JvbGwoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRzZWxmLmNoYW5nZU1vbnRoKE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBlLndoZWVsRGVsdGEgfHwgLWUuZGVsdGFZKSkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYmluZCgpIHtcblx0XHRpZiAoc2VsZi5jb25maWcud3JhcCkge1xuXHRcdFx0W1wib3BlblwiLCBcImNsb3NlXCIsIFwidG9nZ2xlXCIsIFwiY2xlYXJcIl0uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcblx0XHRcdFx0dmFyIHRvZ2dsZXMgPSBzZWxmLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLVwiICsgZWwgKyBcIl1cIik7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdG9nZ2xlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHRvZ2dsZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGZbZWxdKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFdmVudCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRzZWxmLmNoYW5nZUV2ZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiSFRNTEV2ZW50c1wiKTtcblx0XHRcdHNlbGYuY2hhbmdlRXZlbnQuaW5pdEV2ZW50KFwiY2hhbmdlXCIsIGZhbHNlLCB0cnVlKTtcblx0XHR9XG5cblx0XHRpZiAoc2VsZi5pc01vYmlsZSkgcmV0dXJuIHNldHVwTW9iaWxlKCk7XG5cblx0XHRzZWxmLmRlYm91bmNlZFJlc2l6ZSA9IGRlYm91bmNlKG9uUmVzaXplLCA1MCk7XG5cdFx0c2VsZi50cmlnZ2VyQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dHJpZ2dlckV2ZW50KFwiQ2hhbmdlXCIpO1xuXHRcdH07XG5cdFx0c2VsZi5kZWJvdW5jZWRDaGFuZ2UgPSBkZWJvdW5jZShzZWxmLnRyaWdnZXJDaGFuZ2UsIDMwMCk7XG5cblx0XHRpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiICYmIHNlbGYuZGF5cykgc2VsZi5kYXlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgb25Nb3VzZU92ZXIpO1xuXG5cdFx0d2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG5cblx0XHRpZiAoIXNlbGYuY29uZmlnLmlubGluZSAmJiAhc2VsZi5jb25maWcuc3RhdGljKSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBzZWxmLmRlYm91bmNlZFJlc2l6ZSk7XG5cblx0XHRpZiAod2luZG93Lm9udG91Y2hzdGFydCkgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGRvY3VtZW50Q2xpY2spO1xuXG5cdFx0d2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb2N1bWVudENsaWNrKTtcblx0XHR3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZG9jdW1lbnRDbGljayk7XG5cblx0XHRpZiAoc2VsZi5jb25maWcuY2xpY2tPcGVucykgKHNlbGYuYWx0SW5wdXQgfHwgc2VsZi5pbnB1dCkuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIG9wZW4pO1xuXG5cdFx0aWYgKCFzZWxmLmNvbmZpZy5ub0NhbGVuZGFyKSB7XG5cdFx0XHRzZWxmLnByZXZNb250aE5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gY2hhbmdlTW9udGgoLTEpO1xuXHRcdFx0fSk7XG5cdFx0XHRzZWxmLm5leHRNb250aE5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gY2hhbmdlTW9udGgoMSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0c2VsZi5jdXJyZW50TW9udGhFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRyZXR1cm4gZGVib3VuY2Uob25Nb250aFNjcm9sbChlKSwgNTApO1xuXHRcdFx0fSk7XG5cdFx0XHRzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0cmV0dXJuIGRlYm91bmNlKHllYXJTY3JvbGwoZSksIDUwKTtcblx0XHRcdH0pO1xuXHRcdFx0c2VsZi5jdXJyZW50WWVhckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2VsZi5jdXJyZW50WWVhckVsZW1lbnQuc2VsZWN0KCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0c2VsZi5jdXJyZW50WWVhckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIG9uWWVhcklucHV0KTtcblx0XHRcdHNlbGYuY3VycmVudFllYXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbmNyZW1lbnRcIiwgb25ZZWFySW5wdXQpO1xuXG5cdFx0XHRzZWxmLmRheXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGVjdERhdGUpO1xuXHRcdH1cblxuXHRcdGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSB7XG5cdFx0XHRzZWxmLnRpbWVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgcG9zaXRpb25DYWxlbmRhcik7XG5cdFx0XHRzZWxmLnRpbWVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdHJldHVybiBkZWJvdW5jZSh1cGRhdGVUaW1lKGUpLCA1KTtcblx0XHRcdH0pO1xuXHRcdFx0c2VsZi50aW1lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB1cGRhdGVUaW1lKTtcblx0XHRcdHNlbGYudGltZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiaW5jcmVtZW50XCIsIHVwZGF0ZVRpbWUpO1xuXHRcdFx0c2VsZi50aW1lQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJpbmNyZW1lbnRcIiwgc2VsZi5kZWJvdW5jZWRDaGFuZ2UpO1xuXG5cdFx0XHRzZWxmLnRpbWVDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHNlbGYuZGVib3VuY2VkQ2hhbmdlKTtcblx0XHRcdHNlbGYudGltZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgc2VsZi50cmlnZ2VyQ2hhbmdlKTtcblxuXHRcdFx0c2VsZi5ob3VyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzZWxmLmhvdXJFbGVtZW50LnNlbGVjdCgpO1xuXHRcdFx0fSk7XG5cdFx0XHRzZWxmLm1pbnV0ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2VsZi5taW51dGVFbGVtZW50LnNlbGVjdCgpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChzZWxmLnNlY29uZEVsZW1lbnQpIHtcblx0XHRcdFx0c2VsZi5zZWNvbmRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0c2VsZi5zZWNvbmRFbGVtZW50LnNlbGVjdCgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNlbGYuYW1QTSkge1xuXHRcdFx0XHRzZWxmLmFtUE0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdFx0dXBkYXRlVGltZShlKTtcblx0XHRcdFx0XHRzZWxmLnRyaWdnZXJDaGFuZ2UoZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGp1bXBUb0RhdGUoanVtcERhdGUpIHtcblx0XHRqdW1wRGF0ZSA9IGp1bXBEYXRlID8gc2VsZi5wYXJzZURhdGUoanVtcERhdGUpIDogc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogfHwgKHNlbGYuY29uZmlnLm1pbkRhdGUgPiBzZWxmLm5vdyA/IHNlbGYuY29uZmlnLm1pbkRhdGUgOiBzZWxmLmNvbmZpZy5tYXhEYXRlICYmIHNlbGYuY29uZmlnLm1heERhdGUgPCBzZWxmLm5vdyA/IHNlbGYuY29uZmlnLm1heERhdGUgOiBzZWxmLm5vdyk7XG5cblx0XHR0cnkge1xuXHRcdFx0c2VsZi5jdXJyZW50WWVhciA9IGp1bXBEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRzZWxmLmN1cnJlbnRNb250aCA9IGp1bXBEYXRlLmdldE1vbnRoKCk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0XHRcdGNvbnNvbGUuZXJyb3IoZS5zdGFjayk7XG5cdFx0XHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHRcdFx0Y29uc29sZS53YXJuKFwiSW52YWxpZCBkYXRlIHN1cHBsaWVkOiBcIiArIGp1bXBEYXRlKTtcblx0XHR9XG5cblx0XHRzZWxmLnJlZHJhdygpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaW5jcmVtZW50TnVtSW5wdXQoZSwgZGVsdGEpIHtcblx0XHR2YXIgaW5wdXQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbMF07XG5cdFx0aW5wdXQudmFsdWUgPSBwYXJzZUludChpbnB1dC52YWx1ZSwgMTApICsgZGVsdGEgKiAoaW5wdXQuc3RlcCB8fCAxKTtcblxuXHRcdHRyeSB7XG5cdFx0XHRpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImluY3JlbWVudFwiLCB7IFwiYnViYmxlc1wiOiB0cnVlIH0pKTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHR2YXIgZXYgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcblx0XHRcdGV2LmluaXRDdXN0b21FdmVudChcImluY3JlbWVudFwiLCB0cnVlLCB0cnVlLCB7fSk7XG5cdFx0XHRpbnB1dC5kaXNwYXRjaEV2ZW50KGV2KTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVOdW1iZXJJbnB1dChpbnB1dENsYXNzTmFtZSkge1xuXHRcdHZhciB3cmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm51bUlucHV0V3JhcHBlclwiKSxcblx0XHQgICAgbnVtSW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJudW1JbnB1dCBcIiArIGlucHV0Q2xhc3NOYW1lKSxcblx0XHQgICAgYXJyb3dVcCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiYXJyb3dVcFwiKSxcblx0XHQgICAgYXJyb3dEb3duID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJhcnJvd0Rvd25cIik7XG5cblx0XHRudW1JbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5cdFx0bnVtSW5wdXQucGF0dGVybiA9IFwiXFxcXGQqXCI7XG5cdFx0d3JhcHBlci5hcHBlbmRDaGlsZChudW1JbnB1dCk7XG5cdFx0d3JhcHBlci5hcHBlbmRDaGlsZChhcnJvd1VwKTtcblx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKGFycm93RG93bik7XG5cblx0XHRhcnJvd1VwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0cmV0dXJuIGluY3JlbWVudE51bUlucHV0KGUsIDEpO1xuXHRcdH0pO1xuXHRcdGFycm93RG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdHJldHVybiBpbmNyZW1lbnROdW1JbnB1dChlLCAtMSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHdyYXBwZXI7XG5cdH1cblxuXHRmdW5jdGlvbiBidWlsZCgpIHtcblx0XHR2YXIgZnJhZ21lbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdHNlbGYuY2FsZW5kYXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLWNhbGVuZGFyXCIpO1xuXHRcdHNlbGYubnVtSW5wdXRUeXBlID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRSA5LjBcIikgPiAwID8gXCJ0ZXh0XCIgOiBcIm51bWJlclwiO1xuXG5cdFx0aWYgKCFzZWxmLmNvbmZpZy5ub0NhbGVuZGFyKSB7XG5cdFx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChidWlsZE1vbnRoTmF2KCkpO1xuXHRcdFx0c2VsZi5pbm5lckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItaW5uZXJDb250YWluZXJcIik7XG5cblx0XHRcdGlmIChzZWxmLmNvbmZpZy53ZWVrTnVtYmVycykgc2VsZi5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChidWlsZFdlZWtzKCkpO1xuXG5cdFx0XHRzZWxmLnJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXJDb250YWluZXJcIik7XG5cdFx0XHRzZWxmLnJDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRXZWVrZGF5cygpKTtcblxuXHRcdFx0aWYgKCFzZWxmLmRheXMpIHtcblx0XHRcdFx0c2VsZi5kYXlzID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1kYXlzXCIpO1xuXHRcdFx0XHRzZWxmLmRheXMudGFiSW5kZXggPSAtMTtcblx0XHRcdH1cblxuXHRcdFx0YnVpbGREYXlzKCk7XG5cdFx0XHRzZWxmLnJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5kYXlzKTtcblxuXHRcdFx0c2VsZi5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLnJDb250YWluZXIpO1xuXHRcdFx0ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2VsZi5pbm5lckNvbnRhaW5lcik7XG5cdFx0fVxuXG5cdFx0aWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUpIGZyYWdtZW50LmFwcGVuZENoaWxkKGJ1aWxkVGltZSgpKTtcblxuXHRcdGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInJhbmdlTW9kZVwiKTtcblxuXHRcdHNlbGYuY2FsZW5kYXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuXG5cdFx0dmFyIGN1c3RvbUFwcGVuZCA9IHNlbGYuY29uZmlnLmFwcGVuZFRvICYmIHNlbGYuY29uZmlnLmFwcGVuZFRvLm5vZGVUeXBlO1xuXG5cdFx0aWYgKHNlbGYuY29uZmlnLmlubGluZSB8fCBzZWxmLmNvbmZpZy5zdGF0aWMpIHtcblx0XHRcdHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChzZWxmLmNvbmZpZy5pbmxpbmUgPyBcImlubGluZVwiIDogXCJzdGF0aWNcIik7XG5cdFx0XHRwb3NpdGlvbkNhbGVuZGFyKCk7XG5cblx0XHRcdGlmIChzZWxmLmNvbmZpZy5pbmxpbmUgJiYgIWN1c3RvbUFwcGVuZCkge1xuXHRcdFx0XHRyZXR1cm4gc2VsZi5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIChzZWxmLmFsdElucHV0IHx8IHNlbGYuaW5wdXQpLm5leHRTaWJsaW5nKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNlbGYuY29uZmlnLnN0YXRpYykge1xuXHRcdFx0XHR2YXIgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3Itd3JhcHBlclwiKTtcblx0XHRcdFx0c2VsZi5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHNlbGYuZWxlbWVudCk7XG5cdFx0XHRcdHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5lbGVtZW50KTtcblx0XHRcdFx0d3JhcHBlci5hcHBlbmRDaGlsZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdChjdXN0b21BcHBlbmQgPyBzZWxmLmNvbmZpZy5hcHBlbmRUbyA6IHdpbmRvdy5kb2N1bWVudC5ib2R5KS5hcHBlbmRDaGlsZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZURheShjbGFzc05hbWUsIGRhdGUsIGRheU51bWJlcikge1xuXHRcdHZhciBkYXRlSXNFbmFibGVkID0gaXNFbmFibGVkKGRhdGUsIHRydWUpLFxuXHRcdCAgICBkYXlFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItZGF5IFwiICsgY2xhc3NOYW1lLCBkYXRlLmdldERhdGUoKSk7XG5cblx0XHRkYXlFbGVtZW50LmRhdGVPYmogPSBkYXRlO1xuXG5cdFx0dG9nZ2xlQ2xhc3MoZGF5RWxlbWVudCwgXCJ0b2RheVwiLCBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5ub3cpID09PSAwKTtcblxuXHRcdGlmIChkYXRlSXNFbmFibGVkKSB7XG5cdFx0XHRkYXlFbGVtZW50LnRhYkluZGV4ID0gMDtcblxuXHRcdFx0aWYgKGlzRGF0ZVNlbGVjdGVkKGRhdGUpKSB7XG5cdFx0XHRcdGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuXHRcdFx0XHRzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gPSBkYXlFbGVtZW50O1xuXHRcdFx0XHRpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XG5cdFx0XHRcdFx0dG9nZ2xlQ2xhc3MoZGF5RWxlbWVudCwgXCJzdGFydFJhbmdlXCIsIGNvbXBhcmVEYXRlcyhkYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0pID09PSAwKTtcblxuXHRcdFx0XHRcdHRvZ2dsZUNsYXNzKGRheUVsZW1lbnQsIFwiZW5kUmFuZ2VcIiwgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1sxXSkgPT09IDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xuXHRcdFx0aWYgKHNlbGYuc2VsZWN0ZWREYXRlc1swXSAmJiBkYXRlID4gc2VsZi5taW5SYW5nZURhdGUgJiYgZGF0ZSA8IHNlbGYuc2VsZWN0ZWREYXRlc1swXSkgc2VsZi5taW5SYW5nZURhdGUgPSBkYXRlO2Vsc2UgaWYgKHNlbGYuc2VsZWN0ZWREYXRlc1swXSAmJiBkYXRlIDwgc2VsZi5tYXhSYW5nZURhdGUgJiYgZGF0ZSA+IHNlbGYuc2VsZWN0ZWREYXRlc1swXSkgc2VsZi5tYXhSYW5nZURhdGUgPSBkYXRlO1xuXHRcdH1cblxuXHRcdGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpIHtcblx0XHRcdGlmIChpc0RhdGVJblJhbmdlKGRhdGUpICYmICFpc0RhdGVTZWxlY3RlZChkYXRlKSkgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaW5SYW5nZVwiKTtcblxuXHRcdFx0aWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDEgJiYgKGRhdGUgPCBzZWxmLm1pblJhbmdlRGF0ZSB8fCBkYXRlID4gc2VsZi5tYXhSYW5nZURhdGUpKSBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJub3RBbGxvd2VkXCIpO1xuXHRcdH1cblxuXHRcdGlmIChzZWxmLmNvbmZpZy53ZWVrTnVtYmVycyAmJiBjbGFzc05hbWUgIT09IFwicHJldk1vbnRoRGF5XCIgJiYgZGF5TnVtYmVyICUgNyA9PT0gMSkge1xuXHRcdFx0c2VsZi53ZWVrTnVtYmVycy5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXCI8c3BhbiBjbGFzcz0nZGlzYWJsZWQgZmxhdHBpY2tyLWRheSc+XCIgKyBzZWxmLmNvbmZpZy5nZXRXZWVrKGRhdGUpICsgXCI8L3NwYW4+XCIpO1xuXHRcdH1cblxuXHRcdHRyaWdnZXJFdmVudChcIkRheUNyZWF0ZVwiLCBkYXlFbGVtZW50KTtcblxuXHRcdHJldHVybiBkYXlFbGVtZW50O1xuXHR9XG5cblx0ZnVuY3Rpb24gYnVpbGREYXlzKHllYXIsIG1vbnRoKSB7XG5cdFx0dmFyIGZpcnN0T2ZNb250aCA9IChuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCwgMSkuZ2V0RGF5KCkgLSBzZWxmLmwxMG4uZmlyc3REYXlPZldlZWsgKyA3KSAlIDcsXG5cdFx0ICAgIGlzUmFuZ2VNb2RlID0gc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiO1xuXG5cdFx0c2VsZi5wcmV2TW9udGhEYXlzID0gc2VsZi51dGlscy5nZXREYXlzaW5Nb250aCgoc2VsZi5jdXJyZW50TW9udGggLSAxICsgMTIpICUgMTIpO1xuXG5cdFx0dmFyIGRheXNJbk1vbnRoID0gc2VsZi51dGlscy5nZXREYXlzaW5Nb250aCgpLFxuXHRcdCAgICBkYXlzID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuXHRcdHZhciBkYXlOdW1iZXIgPSBzZWxmLnByZXZNb250aERheXMgKyAxIC0gZmlyc3RPZk1vbnRoO1xuXG5cdFx0aWYgKHNlbGYuY29uZmlnLndlZWtOdW1iZXJzICYmIHNlbGYud2Vla051bWJlcnMuZmlyc3RDaGlsZCkgc2VsZi53ZWVrTnVtYmVycy50ZXh0Q29udGVudCA9IFwiXCI7XG5cblx0XHRpZiAoaXNSYW5nZU1vZGUpIHtcblx0XHRcdC8vIGNvbnN0IGRhdGVMaW1pdHMgPSBzZWxmLmNvbmZpZy5lbmFibGUubGVuZ3RoIHx8IHNlbGYuY29uZmlnLmRpc2FibGUubGVuZ3RoIHx8IHNlbGYuY29uZmlnLm1peERhdGUgfHwgc2VsZi5jb25maWcubWF4RGF0ZTtcblx0XHRcdHNlbGYubWluUmFuZ2VEYXRlID0gbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGggLSAxLCBkYXlOdW1iZXIpO1xuXHRcdFx0c2VsZi5tYXhSYW5nZURhdGUgPSBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCArIDEsICg0MiAtIGZpcnN0T2ZNb250aCkgJSBkYXlzSW5Nb250aCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNlbGYuZGF5cy5maXJzdENoaWxkKSBzZWxmLmRheXMudGV4dENvbnRlbnQgPSBcIlwiO1xuXG5cdFx0Ly8gcHJlcGVuZCBkYXlzIGZyb20gdGhlIGVuZGluZyBvZiBwcmV2aW91cyBtb250aFxuXHRcdGZvciAodmFyIGkgPSAwOyBkYXlOdW1iZXIgPD0gc2VsZi5wcmV2TW9udGhEYXlzOyBpKyssIGRheU51bWJlcisrKSB7XG5cdFx0XHRkYXlzLmFwcGVuZENoaWxkKGNyZWF0ZURheShcInByZXZNb250aERheVwiLCBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCAtIDEsIGRheU51bWJlciksIGRheU51bWJlcikpO1xuXHRcdH1cblxuXHRcdC8vIFN0YXJ0IGF0IDEgc2luY2UgdGhlcmUgaXMgbm8gMHRoIGRheVxuXHRcdGZvciAoZGF5TnVtYmVyID0gMTsgZGF5TnVtYmVyIDw9IGRheXNJbk1vbnRoOyBkYXlOdW1iZXIrKykge1xuXHRcdFx0ZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkoXCJcIiwgbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgsIGRheU51bWJlciksIGRheU51bWJlcikpO1xuXHRcdH1cblxuXHRcdC8vIGFwcGVuZCBkYXlzIGZyb20gdGhlIG5leHQgbW9udGhcblx0XHRmb3IgKHZhciBkYXlOdW0gPSBkYXlzSW5Nb250aCArIDE7IGRheU51bSA8PSA0MiAtIGZpcnN0T2ZNb250aDsgZGF5TnVtKyspIHtcblx0XHRcdGRheXMuYXBwZW5kQ2hpbGQoY3JlYXRlRGF5KFwibmV4dE1vbnRoRGF5XCIsIG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoICsgMSwgZGF5TnVtICUgZGF5c0luTW9udGgpLCBkYXlOdW0pKTtcblx0XHR9XG5cblx0XHRpZiAoaXNSYW5nZU1vZGUgJiYgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMSAmJiBkYXlzLmNoaWxkTm9kZXNbMF0pIHtcblx0XHRcdHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyA9IHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyB8fCBzZWxmLm1pblJhbmdlRGF0ZSA+IGRheXMuY2hpbGROb2Rlc1swXS5kYXRlT2JqO1xuXG5cdFx0XHRzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cgPSBzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cgfHwgc2VsZi5tYXhSYW5nZURhdGUgPCBkYXlzLmNoaWxkTm9kZXNbNDFdLmRhdGVPYmo7XG5cdFx0fSBlbHNlIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcblxuXHRcdHNlbGYuZGF5cy5hcHBlbmRDaGlsZChkYXlzKTtcblx0XHRyZXR1cm4gc2VsZi5kYXlzO1xuXHR9XG5cblx0ZnVuY3Rpb24gYnVpbGRNb250aE5hdigpIHtcblx0XHR2YXIgbW9udGhOYXZGcmFnbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0c2VsZi5tb250aE5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItbW9udGhcIik7XG5cblx0XHRzZWxmLnByZXZNb250aE5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXByZXYtbW9udGhcIik7XG5cdFx0c2VsZi5wcmV2TW9udGhOYXYuaW5uZXJIVE1MID0gc2VsZi5jb25maWcucHJldkFycm93O1xuXG5cdFx0c2VsZi5jdXJyZW50TW9udGhFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJjdXItbW9udGhcIik7XG5cdFx0c2VsZi5jdXJyZW50TW9udGhFbGVtZW50LnRpdGxlID0gc2VsZi5sMTBuLnNjcm9sbFRpdGxlO1xuXG5cdFx0dmFyIHllYXJJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiY3VyLXllYXJcIik7XG5cdFx0c2VsZi5jdXJyZW50WWVhckVsZW1lbnQgPSB5ZWFySW5wdXQuY2hpbGROb2Rlc1swXTtcblx0XHRzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC50aXRsZSA9IHNlbGYubDEwbi5zY3JvbGxUaXRsZTtcblxuXHRcdGlmIChzZWxmLmNvbmZpZy5taW5EYXRlKSBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5taW4gPSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCk7XG5cblx0XHRpZiAoc2VsZi5jb25maWcubWF4RGF0ZSkge1xuXHRcdFx0c2VsZi5jdXJyZW50WWVhckVsZW1lbnQubWF4ID0gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpO1xuXG5cdFx0XHRzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5kaXNhYmxlZCA9IHNlbGYuY29uZmlnLm1pbkRhdGUgJiYgc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpID09PSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0fVxuXG5cdFx0c2VsZi5uZXh0TW9udGhOYXYgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1uZXh0LW1vbnRoXCIpO1xuXHRcdHNlbGYubmV4dE1vbnRoTmF2LmlubmVySFRNTCA9IHNlbGYuY29uZmlnLm5leHRBcnJvdztcblxuXHRcdHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLWN1cnJlbnQtbW9udGhcIik7XG5cdFx0c2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmFwcGVuZENoaWxkKHNlbGYuY3VycmVudE1vbnRoRWxlbWVudCk7XG5cdFx0c2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmFwcGVuZENoaWxkKHllYXJJbnB1dCk7XG5cblx0XHRtb250aE5hdkZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYucHJldk1vbnRoTmF2KTtcblx0XHRtb250aE5hdkZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aCk7XG5cdFx0bW9udGhOYXZGcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLm5leHRNb250aE5hdik7XG5cdFx0c2VsZi5tb250aE5hdi5hcHBlbmRDaGlsZChtb250aE5hdkZyYWdtZW50KTtcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBcIl9oaWRlUHJldk1vbnRoQXJyb3dcIiwge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLl9faGlkZVByZXZNb250aEFycm93O1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gc2V0KGJvb2wpIHtcblx0XHRcdFx0aWYgKHRoaXMuX19oaWRlUHJldk1vbnRoQXJyb3cgIT09IGJvb2wpIHNlbGYucHJldk1vbnRoTmF2LnN0eWxlLmRpc3BsYXkgPSBib29sID8gXCJub25lXCIgOiBcImJsb2NrXCI7XG5cdFx0XHRcdHRoaXMuX19oaWRlUHJldk1vbnRoQXJyb3cgPSBib29sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYsIFwiX2hpZGVOZXh0TW9udGhBcnJvd1wiLCB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX19oaWRlTmV4dE1vbnRoQXJyb3c7XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiBzZXQoYm9vbCkge1xuXHRcdFx0XHRpZiAodGhpcy5fX2hpZGVOZXh0TW9udGhBcnJvdyAhPT0gYm9vbCkgc2VsZi5uZXh0TW9udGhOYXYuc3R5bGUuZGlzcGxheSA9IGJvb2wgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIjtcblx0XHRcdFx0dGhpcy5fX2hpZGVOZXh0TW9udGhBcnJvdyA9IGJvb2w7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XG5cblx0XHRyZXR1cm4gc2VsZi5tb250aE5hdjtcblx0fVxuXG5cdGZ1bmN0aW9uIGJ1aWxkVGltZSgpIHtcblx0XHRzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNUaW1lXCIpO1xuXHRcdGlmIChzZWxmLmNvbmZpZy5ub0NhbGVuZGFyKSBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJub0NhbGVuZGFyXCIpO1xuXHRcdHNlbGYudGltZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItdGltZVwiKTtcblx0XHRzZWxmLnRpbWVDb250YWluZXIudGFiSW5kZXggPSAtMTtcblx0XHR2YXIgc2VwYXJhdG9yID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItdGltZS1zZXBhcmF0b3JcIiwgXCI6XCIpO1xuXG5cdFx0dmFyIGhvdXJJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiZmxhdHBpY2tyLWhvdXJcIik7XG5cdFx0c2VsZi5ob3VyRWxlbWVudCA9IGhvdXJJbnB1dC5jaGlsZE5vZGVzWzBdO1xuXG5cdFx0dmFyIG1pbnV0ZUlucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJmbGF0cGlja3ItbWludXRlXCIpO1xuXHRcdHNlbGYubWludXRlRWxlbWVudCA9IG1pbnV0ZUlucHV0LmNoaWxkTm9kZXNbMF07XG5cblx0XHRzZWxmLmhvdXJFbGVtZW50LnRhYkluZGV4ID0gc2VsZi5taW51dGVFbGVtZW50LnRhYkluZGV4ID0gMDtcblxuXHRcdHNlbGYuaG91ckVsZW1lbnQudmFsdWUgPSBzZWxmLnBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldEhvdXJzKCkgOiBzZWxmLmNvbmZpZy5kZWZhdWx0SG91cik7XG5cblx0XHRzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUgPSBzZWxmLnBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldE1pbnV0ZXMoKSA6IHNlbGYuY29uZmlnLmRlZmF1bHRNaW51dGUpO1xuXG5cdFx0c2VsZi5ob3VyRWxlbWVudC5zdGVwID0gc2VsZi5jb25maWcuaG91ckluY3JlbWVudDtcblx0XHRzZWxmLm1pbnV0ZUVsZW1lbnQuc3RlcCA9IHNlbGYuY29uZmlnLm1pbnV0ZUluY3JlbWVudDtcblxuXHRcdHNlbGYuaG91ckVsZW1lbnQubWluID0gc2VsZi5jb25maWcudGltZV8yNGhyID8gMCA6IDE7XG5cdFx0c2VsZi5ob3VyRWxlbWVudC5tYXggPSBzZWxmLmNvbmZpZy50aW1lXzI0aHIgPyAyMyA6IDEyO1xuXG5cdFx0c2VsZi5taW51dGVFbGVtZW50Lm1pbiA9IDA7XG5cdFx0c2VsZi5taW51dGVFbGVtZW50Lm1heCA9IDU5O1xuXG5cdFx0c2VsZi5ob3VyRWxlbWVudC50aXRsZSA9IHNlbGYubWludXRlRWxlbWVudC50aXRsZSA9IHNlbGYubDEwbi5zY3JvbGxUaXRsZTtcblxuXHRcdHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob3VySW5wdXQpO1xuXHRcdHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXBhcmF0b3IpO1xuXHRcdHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtaW51dGVJbnB1dCk7XG5cblx0XHRpZiAoc2VsZi5jb25maWcudGltZV8yNGhyKSBzZWxmLnRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpbWUyNGhyXCIpO1xuXG5cdFx0aWYgKHNlbGYuY29uZmlnLmVuYWJsZVNlY29uZHMpIHtcblx0XHRcdHNlbGYudGltZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGFzU2Vjb25kc1wiKTtcblxuXHRcdFx0dmFyIHNlY29uZElucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJmbGF0cGlja3Itc2Vjb25kXCIpO1xuXHRcdFx0c2VsZi5zZWNvbmRFbGVtZW50ID0gc2Vjb25kSW5wdXQuY2hpbGROb2Rlc1swXTtcblxuXHRcdFx0c2VsZi5zZWNvbmRFbGVtZW50LnZhbHVlID0gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPyBzZWxmLnBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5nZXRTZWNvbmRzKCkpIDogXCIwMFwiO1xuXG5cdFx0XHRzZWxmLnNlY29uZEVsZW1lbnQuc3RlcCA9IHNlbGYubWludXRlRWxlbWVudC5zdGVwO1xuXHRcdFx0c2VsZi5zZWNvbmRFbGVtZW50Lm1pbiA9IHNlbGYubWludXRlRWxlbWVudC5taW47XG5cdFx0XHRzZWxmLnNlY29uZEVsZW1lbnQubWF4ID0gc2VsZi5taW51dGVFbGVtZW50Lm1heDtcblxuXHRcdFx0c2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXRpbWUtc2VwYXJhdG9yXCIsIFwiOlwiKSk7XG5cdFx0XHRzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kSW5wdXQpO1xuXHRcdH1cblxuXHRcdGlmICghc2VsZi5jb25maWcudGltZV8yNGhyKSB7XG5cdFx0XHQvLyBhZGQgc2VsZi5hbVBNIGlmIGFwcHJvcHJpYXRlXG5cdFx0XHRzZWxmLmFtUE0gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1hbS1wbVwiLCBbXCJBTVwiLCBcIlBNXCJdW3NlbGYuaG91ckVsZW1lbnQudmFsdWUgPiAxMSB8IDBdKTtcblx0XHRcdHNlbGYuYW1QTS50aXRsZSA9IHNlbGYubDEwbi50b2dnbGVUaXRsZTtcblx0XHRcdHNlbGYuYW1QTS50YWJJbmRleCA9IDA7XG5cdFx0XHRzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5hbVBNKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gc2VsZi50aW1lQ29udGFpbmVyO1xuXHR9XG5cblx0ZnVuY3Rpb24gYnVpbGRXZWVrZGF5cygpIHtcblx0XHRpZiAoIXNlbGYud2Vla2RheUNvbnRhaW5lcikgc2VsZi53ZWVrZGF5Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci13ZWVrZGF5c1wiKTtcblxuXHRcdHZhciBmaXJzdERheU9mV2VlayA9IHNlbGYubDEwbi5maXJzdERheU9mV2Vlaztcblx0XHR2YXIgd2Vla2RheXMgPSBzZWxmLmwxMG4ud2Vla2RheXMuc2hvcnRoYW5kLnNsaWNlKCk7XG5cblx0XHRpZiAoZmlyc3REYXlPZldlZWsgPiAwICYmIGZpcnN0RGF5T2ZXZWVrIDwgd2Vla2RheXMubGVuZ3RoKSB7XG5cdFx0XHR3ZWVrZGF5cyA9IFtdLmNvbmNhdCh3ZWVrZGF5cy5zcGxpY2UoZmlyc3REYXlPZldlZWssIHdlZWtkYXlzLmxlbmd0aCksIHdlZWtkYXlzLnNwbGljZSgwLCBmaXJzdERheU9mV2VlaykpO1xuXHRcdH1cblxuXHRcdHNlbGYud2Vla2RheUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlxcblxcdFxcdDxzcGFuIGNsYXNzPWZsYXRwaWNrci13ZWVrZGF5PlxcblxcdFxcdFxcdFwiICsgd2Vla2RheXMuam9pbihcIjwvc3Bhbj48c3BhbiBjbGFzcz1mbGF0cGlja3Itd2Vla2RheT5cIikgKyBcIlxcblxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcIjtcblxuXHRcdHJldHVybiBzZWxmLndlZWtkYXlDb250YWluZXI7XG5cdH1cblxuXHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHRmdW5jdGlvbiBidWlsZFdlZWtzKCkge1xuXHRcdHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1dlZWtzXCIpO1xuXHRcdHNlbGYud2Vla1dyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWt3cmFwcGVyXCIpO1xuXHRcdHNlbGYud2Vla1dyYXBwZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3Itd2Vla2RheVwiLCBzZWxmLmwxMG4ud2Vla0FiYnJldmlhdGlvbikpO1xuXHRcdHNlbGYud2Vla051bWJlcnMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWtzXCIpO1xuXHRcdHNlbGYud2Vla1dyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi53ZWVrTnVtYmVycyk7XG5cblx0XHRyZXR1cm4gc2VsZi53ZWVrV3JhcHBlcjtcblx0fVxuXG5cdGZ1bmN0aW9uIGNoYW5nZU1vbnRoKHZhbHVlLCBpc19vZmZzZXQpIHtcblx0XHRpc19vZmZzZXQgPSB0eXBlb2YgaXNfb2Zmc2V0ID09PSBcInVuZGVmaW5lZFwiIHx8IGlzX29mZnNldDtcblx0XHR2YXIgZGVsdGEgPSBpc19vZmZzZXQgPyB2YWx1ZSA6IHZhbHVlIC0gc2VsZi5jdXJyZW50TW9udGg7XG5cblx0XHRpZiAoZGVsdGEgPCAwICYmIHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyB8fCBkZWx0YSA+IDAgJiYgc2VsZi5faGlkZU5leHRNb250aEFycm93KSByZXR1cm47XG5cblx0XHRzZWxmLmN1cnJlbnRNb250aCArPSBkZWx0YTtcblxuXHRcdGlmIChzZWxmLmN1cnJlbnRNb250aCA8IDAgfHwgc2VsZi5jdXJyZW50TW9udGggPiAxMSkge1xuXHRcdFx0c2VsZi5jdXJyZW50WWVhciArPSBzZWxmLmN1cnJlbnRNb250aCA+IDExID8gMSA6IC0xO1xuXHRcdFx0c2VsZi5jdXJyZW50TW9udGggPSAoc2VsZi5jdXJyZW50TW9udGggKyAxMikgJSAxMjtcblxuXHRcdFx0dHJpZ2dlckV2ZW50KFwiWWVhckNoYW5nZVwiKTtcblx0XHR9XG5cblx0XHR1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XG5cdFx0YnVpbGREYXlzKCk7XG5cblx0XHRpZiAoIXNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpIHNlbGYuZGF5cy5mb2N1cygpO1xuXG5cdFx0dHJpZ2dlckV2ZW50KFwiTW9udGhDaGFuZ2VcIik7XG5cdH1cblxuXHRmdW5jdGlvbiBjbGVhcih0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcblx0XHRzZWxmLmlucHV0LnZhbHVlID0gXCJcIjtcblxuXHRcdGlmIChzZWxmLmFsdElucHV0KSBzZWxmLmFsdElucHV0LnZhbHVlID0gXCJcIjtcblxuXHRcdGlmIChzZWxmLm1vYmlsZUlucHV0KSBzZWxmLm1vYmlsZUlucHV0LnZhbHVlID0gXCJcIjtcblxuXHRcdHNlbGYuc2VsZWN0ZWREYXRlcyA9IFtdO1xuXHRcdHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gbnVsbDtcblx0XHRzZWxmLmRhdGVJc1BpY2tlZCA9IGZhbHNlO1xuXG5cdFx0c2VsZi5yZWRyYXcoKTtcblxuXHRcdGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQgIT09IGZhbHNlKVxuXHRcdFx0Ly8gdHJpZ2dlckNoYW5nZUV2ZW50IGlzIHRydWUgKGRlZmF1bHQpIG9yIGFuIEV2ZW50XG5cdFx0XHR0cmlnZ2VyRXZlbnQoXCJDaGFuZ2VcIik7XG5cdH1cblxuXHRmdW5jdGlvbiBjbG9zZSgpIHtcblx0XHRzZWxmLmlzT3BlbiA9IGZhbHNlO1xuXG5cdFx0aWYgKCFzZWxmLmlzTW9iaWxlKSB7XG5cdFx0XHRzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuXHRcdFx0KHNlbGYuYWx0SW5wdXQgfHwgc2VsZi5pbnB1dCkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0XHR9XG5cblx0XHR0cmlnZ2VyRXZlbnQoXCJDbG9zZVwiKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlc3Ryb3koaW5zdGFuY2UpIHtcblx0XHRpbnN0YW5jZSA9IGluc3RhbmNlIHx8IHNlbGY7XG5cdFx0aW5zdGFuY2UuY2xlYXIoZmFsc2UpO1xuXG5cdFx0d2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaW5zdGFuY2UuZGVib3VuY2VkUmVzaXplKTtcblxuXHRcdHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9jdW1lbnRDbGljayk7XG5cdFx0d2luZG93LmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGRvY3VtZW50Q2xpY2spO1xuXHRcdHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYmx1clwiLCBkb2N1bWVudENsaWNrKTtcblxuXHRcdGlmIChpbnN0YW5jZS50aW1lQ29udGFpbmVyKSBpbnN0YW5jZS50aW1lQ29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIHBvc2l0aW9uQ2FsZW5kYXIpO1xuXG5cdFx0aWYgKGluc3RhbmNlLm1vYmlsZUlucHV0KSB7XG5cdFx0XHRpZiAoaW5zdGFuY2UubW9iaWxlSW5wdXQucGFyZW50Tm9kZSkgaW5zdGFuY2UubW9iaWxlSW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpbnN0YW5jZS5tb2JpbGVJbnB1dCk7XG5cdFx0XHRkZWxldGUgaW5zdGFuY2UubW9iaWxlSW5wdXQ7XG5cdFx0fSBlbHNlIGlmIChpbnN0YW5jZS5jYWxlbmRhckNvbnRhaW5lciAmJiBpbnN0YW5jZS5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlKSBpbnN0YW5jZS5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGluc3RhbmNlLmNhbGVuZGFyQ29udGFpbmVyKTtcblxuXHRcdGlmIChpbnN0YW5jZS5hbHRJbnB1dCkge1xuXHRcdFx0aW5zdGFuY2UuaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuXHRcdFx0aWYgKGluc3RhbmNlLmFsdElucHV0LnBhcmVudE5vZGUpIGluc3RhbmNlLmFsdElucHV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaW5zdGFuY2UuYWx0SW5wdXQpO1xuXHRcdFx0ZGVsZXRlIGluc3RhbmNlLmFsdElucHV0O1xuXHRcdH1cblxuXHRcdGluc3RhbmNlLmlucHV0LnR5cGUgPSBpbnN0YW5jZS5pbnB1dC5fdHlwZTtcblx0XHRpbnN0YW5jZS5pbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiZmxhdHBpY2tyLWlucHV0XCIpO1xuXHRcdGluc3RhbmNlLmlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBvcGVuKTtcblx0XHRpbnN0YW5jZS5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKTtcblxuXHRcdGRlbGV0ZSBpbnN0YW5jZS5pbnB1dC5fZmxhdHBpY2tyO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNDYWxlbmRhckVsZW0oZWxlbSkge1xuXHRcdGlmIChzZWxmLmNvbmZpZy5hcHBlbmRUbyAmJiBzZWxmLmNvbmZpZy5hcHBlbmRUby5jb250YWlucyhlbGVtKSkgcmV0dXJuIHRydWU7XG5cblx0XHRyZXR1cm4gc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlbGVtKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRvY3VtZW50Q2xpY2soZSkge1xuXHRcdHZhciBpc0lucHV0ID0gc2VsZi5lbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSB8fCBlLnRhcmdldCA9PT0gc2VsZi5pbnB1dCB8fCBlLnRhcmdldCA9PT0gc2VsZi5hbHRJbnB1dCB8fFxuXHRcdC8vIHdlYiBjb21wb25lbnRzXG5cdFx0ZS5wYXRoICYmIGUucGF0aC5pbmRleE9mICYmICh+ZS5wYXRoLmluZGV4T2Yoc2VsZi5pbnB1dCkgfHwgfmUucGF0aC5pbmRleE9mKHNlbGYuYWx0SW5wdXQpKTtcblxuXHRcdGlmIChzZWxmLmlzT3BlbiAmJiAhc2VsZi5jb25maWcuaW5saW5lICYmICFpc0NhbGVuZGFyRWxlbShlLnRhcmdldCkgJiYgIWlzSW5wdXQpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHNlbGYuY2xvc2UoKTtcblxuXHRcdFx0aWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIiAmJiBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdHNlbGYuY2xlYXIoKTtcblx0XHRcdFx0c2VsZi5yZWRyYXcoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBmb3JtYXREYXRlKGZybXQsIGRhdGVPYmopIHtcblx0XHRpZiAoc2VsZi5jb25maWcuZm9ybWF0RGF0ZSkgcmV0dXJuIHNlbGYuY29uZmlnLmZvcm1hdERhdGUoZnJtdCwgZGF0ZU9iaik7XG5cblx0XHR2YXIgY2hhcnMgPSBmcm10LnNwbGl0KFwiXCIpO1xuXHRcdHJldHVybiBjaGFycy5tYXAoZnVuY3Rpb24gKGMsIGkpIHtcblx0XHRcdHJldHVybiBzZWxmLmZvcm1hdHNbY10gJiYgY2hhcnNbaSAtIDFdICE9PSBcIlxcXFxcIiA/IHNlbGYuZm9ybWF0c1tjXShkYXRlT2JqKSA6IGMgIT09IFwiXFxcXFwiID8gYyA6IFwiXCI7XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNoYW5nZVllYXIobmV3WWVhcikge1xuXHRcdGlmICghbmV3WWVhciB8fCBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5taW4gJiYgbmV3WWVhciA8IHNlbGYuY3VycmVudFllYXJFbGVtZW50Lm1pbiB8fCBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5tYXggJiYgbmV3WWVhciA+IHNlbGYuY3VycmVudFllYXJFbGVtZW50Lm1heCkgcmV0dXJuO1xuXG5cdFx0dmFyIG5ld1llYXJOdW0gPSBwYXJzZUludChuZXdZZWFyLCAxMCksXG5cdFx0ICAgIGlzTmV3WWVhciA9IHNlbGYuY3VycmVudFllYXIgIT09IG5ld1llYXJOdW07XG5cblx0XHRzZWxmLmN1cnJlbnRZZWFyID0gbmV3WWVhck51bSB8fCBzZWxmLmN1cnJlbnRZZWFyO1xuXG5cdFx0aWYgKHNlbGYuY29uZmlnLm1heERhdGUgJiYgc2VsZi5jdXJyZW50WWVhciA9PT0gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpKSB7XG5cdFx0XHRzZWxmLmN1cnJlbnRNb250aCA9IE1hdGgubWluKHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TW9udGgoKSwgc2VsZi5jdXJyZW50TW9udGgpO1xuXHRcdH0gZWxzZSBpZiAoc2VsZi5jb25maWcubWluRGF0ZSAmJiBzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkpIHtcblx0XHRcdHNlbGYuY3VycmVudE1vbnRoID0gTWF0aC5tYXgoc2VsZi5jb25maWcubWluRGF0ZS5nZXRNb250aCgpLCBzZWxmLmN1cnJlbnRNb250aCk7XG5cdFx0fVxuXG5cdFx0aWYgKGlzTmV3WWVhcikge1xuXHRcdFx0c2VsZi5yZWRyYXcoKTtcblx0XHRcdHRyaWdnZXJFdmVudChcIlllYXJDaGFuZ2VcIik7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaXNFbmFibGVkKGRhdGUsIHRpbWVsZXNzKSB7XG5cdFx0dmFyIGx0bWluID0gY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuY29uZmlnLm1pbkRhdGUsIHR5cGVvZiB0aW1lbGVzcyAhPT0gXCJ1bmRlZmluZWRcIiA/IHRpbWVsZXNzIDogIXNlbGYubWluRGF0ZUhhc1RpbWUpIDwgMDtcblx0XHR2YXIgZ3RtYXggPSBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5jb25maWcubWF4RGF0ZSwgdHlwZW9mIHRpbWVsZXNzICE9PSBcInVuZGVmaW5lZFwiID8gdGltZWxlc3MgOiAhc2VsZi5tYXhEYXRlSGFzVGltZSkgPiAwO1xuXG5cdFx0aWYgKGx0bWluIHx8IGd0bWF4KSByZXR1cm4gZmFsc2U7XG5cblx0XHRpZiAoIXNlbGYuY29uZmlnLmVuYWJsZS5sZW5ndGggJiYgIXNlbGYuY29uZmlnLmRpc2FibGUubGVuZ3RoKSByZXR1cm4gdHJ1ZTtcblxuXHRcdHZhciBkYXRlVG9DaGVjayA9IHNlbGYucGFyc2VEYXRlKGRhdGUsIHRydWUpOyAvLyB0aW1lbGVzc1xuXG5cdFx0dmFyIGJvb2wgPSBzZWxmLmNvbmZpZy5lbmFibGUubGVuZ3RoID4gMCxcblx0XHQgICAgYXJyYXkgPSBib29sID8gc2VsZi5jb25maWcuZW5hYmxlIDogc2VsZi5jb25maWcuZGlzYWJsZTtcblxuXHRcdGZvciAodmFyIGkgPSAwLCBkOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGQgPSBhcnJheVtpXTtcblxuXHRcdFx0aWYgKGQgaW5zdGFuY2VvZiBGdW5jdGlvbiAmJiBkKGRhdGVUb0NoZWNrKSkgLy8gZGlzYWJsZWQgYnkgZnVuY3Rpb25cblx0XHRcdFx0cmV0dXJuIGJvb2w7ZWxzZSBpZiAoZCBpbnN0YW5jZW9mIERhdGUgJiYgZC5nZXRUaW1lKCkgPT09IGRhdGVUb0NoZWNrLmdldFRpbWUoKSlcblx0XHRcdFx0Ly8gZGlzYWJsZWQgYnkgZGF0ZVxuXHRcdFx0XHRyZXR1cm4gYm9vbDtlbHNlIGlmICh0eXBlb2YgZCA9PT0gXCJzdHJpbmdcIiAmJiBzZWxmLnBhcnNlRGF0ZShkLCB0cnVlKS5nZXRUaW1lKCkgPT09IGRhdGVUb0NoZWNrLmdldFRpbWUoKSlcblx0XHRcdFx0Ly8gZGlzYWJsZWQgYnkgZGF0ZSBzdHJpbmdcblx0XHRcdFx0cmV0dXJuIGJvb2w7ZWxzZSBpZiAoIC8vIGRpc2FibGVkIGJ5IHJhbmdlXG5cdFx0XHQodHlwZW9mIGQgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihkKSkgPT09IFwib2JqZWN0XCIgJiYgZC5mcm9tICYmIGQudG8gJiYgZGF0ZVRvQ2hlY2sgPj0gZC5mcm9tICYmIGRhdGVUb0NoZWNrIDw9IGQudG8pIHJldHVybiBib29sO1xuXHRcdH1cblxuXHRcdHJldHVybiAhYm9vbDtcblx0fVxuXG5cdGZ1bmN0aW9uIG9uS2V5RG93bihlKSB7XG5cdFx0aWYgKGUudGFyZ2V0ID09PSAoc2VsZi5hbHRJbnB1dCB8fCBzZWxmLmlucHV0KSAmJiBlLndoaWNoID09PSAxMykgc2VsZWN0RGF0ZShlKTtlbHNlIGlmIChzZWxmLmlzT3BlbiAmJiBpc0NhbGVuZGFyRWxlbShlLnRhcmdldCkpIHtcblx0XHRcdHN3aXRjaCAoZS53aGljaCkge1xuXHRcdFx0XHRjYXNlIDEzOlxuXHRcdFx0XHRcdGlmIChzZWxmLnRpbWVDb250YWluZXIgJiYgc2VsZi50aW1lQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkgdXBkYXRlVmFsdWUoKTtlbHNlIHNlbGVjdERhdGUoZSk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDI3OlxuXHRcdFx0XHRcdC8vIGVzY2FwZVxuXHRcdFx0XHRcdHNlbGYuY2xvc2UoKTtcblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRjYXNlIDM3OlxuXHRcdFx0XHRcdGlmIChlLnRhcmdldCAhPT0gc2VsZi5pbnB1dCAmIGUudGFyZ2V0ICE9PSBzZWxmLmFsdElucHV0KSB7XG5cdFx0XHRcdFx0XHRjaGFuZ2VNb250aCgtMSk7XG5cdFx0XHRcdFx0XHRzZWxmLmN1cnJlbnRNb250aEVsZW1lbnQuZm9jdXMoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAzODpcblx0XHRcdFx0XHRpZiAoIXNlbGYudGltZUNvbnRhaW5lciB8fCAhc2VsZi50aW1lQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0c2VsZi5jdXJyZW50WWVhcisrO1xuXHRcdFx0XHRcdFx0c2VsZi5yZWRyYXcoKTtcblx0XHRcdFx0XHR9IGVsc2UgdXBkYXRlVGltZShlKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgMzk6XG5cdFx0XHRcdFx0aWYgKGUudGFyZ2V0ICE9PSBzZWxmLmlucHV0ICYgZS50YXJnZXQgIT09IHNlbGYuYWx0SW5wdXQpIHtcblx0XHRcdFx0XHRcdGNoYW5nZU1vbnRoKDEpO1xuXHRcdFx0XHRcdFx0c2VsZi5jdXJyZW50TW9udGhFbGVtZW50LmZvY3VzKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgNDA6XG5cdFx0XHRcdFx0aWYgKCFzZWxmLnRpbWVDb250YWluZXIgfHwgIXNlbGYudGltZUNvbnRhaW5lci5jb250YWlucyhlLnRhcmdldCkpIHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHNlbGYuY3VycmVudFllYXItLTtcblx0XHRcdFx0XHRcdHNlbGYucmVkcmF3KCk7XG5cdFx0XHRcdFx0fSBlbHNlIHVwZGF0ZVRpbWUoZSk7XG5cblx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZU92ZXIoZSkge1xuXHRcdGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoICE9PSAxIHx8ICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJmbGF0cGlja3ItZGF5XCIpKSByZXR1cm47XG5cblx0XHR2YXIgaG92ZXJEYXRlID0gZS50YXJnZXQuZGF0ZU9iaixcblx0XHQgICAgaW5pdGlhbERhdGUgPSBzZWxmLnBhcnNlRGF0ZShzZWxmLnNlbGVjdGVkRGF0ZXNbMF0sIHRydWUpLFxuXHRcdCAgICByYW5nZVN0YXJ0RGF0ZSA9IE1hdGgubWluKGhvdmVyRGF0ZS5nZXRUaW1lKCksIHNlbGYuc2VsZWN0ZWREYXRlc1swXS5nZXRUaW1lKCkpLFxuXHRcdCAgICByYW5nZUVuZERhdGUgPSBNYXRoLm1heChob3ZlckRhdGUuZ2V0VGltZSgpLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0uZ2V0VGltZSgpKSxcblx0XHQgICAgY29udGFpbnNEaXNhYmxlZCA9IGZhbHNlO1xuXG5cdFx0Zm9yICh2YXIgdCA9IHJhbmdlU3RhcnREYXRlOyB0IDwgcmFuZ2VFbmREYXRlOyB0ICs9IHNlbGYudXRpbHMuZHVyYXRpb24uREFZKSB7XG5cdFx0XHRpZiAoIWlzRW5hYmxlZChuZXcgRGF0ZSh0KSkpIHtcblx0XHRcdFx0Y29udGFpbnNEaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKHRpbWVzdGFtcCwgaSkge1xuXHRcdFx0dmFyIG91dE9mUmFuZ2UgPSB0aW1lc3RhbXAgPCBzZWxmLm1pblJhbmdlRGF0ZS5nZXRUaW1lKCkgfHwgdGltZXN0YW1wID4gc2VsZi5tYXhSYW5nZURhdGUuZ2V0VGltZSgpO1xuXG5cdFx0XHRpZiAob3V0T2ZSYW5nZSkge1xuXHRcdFx0XHRzZWxmLmRheXMuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QuYWRkKFwibm90QWxsb3dlZFwiKTtcblx0XHRcdFx0W1wiaW5SYW5nZVwiLCBcInN0YXJ0UmFuZ2VcIiwgXCJlbmRSYW5nZVwiXS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG5cdFx0XHRcdFx0c2VsZi5kYXlzLmNoaWxkTm9kZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShjKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBcImNvbnRpbnVlXCI7XG5cdFx0XHR9IGVsc2UgaWYgKGNvbnRhaW5zRGlzYWJsZWQgJiYgIW91dE9mUmFuZ2UpIHJldHVybiBcImNvbnRpbnVlXCI7XG5cblx0XHRcdFtcInN0YXJ0UmFuZ2VcIiwgXCJpblJhbmdlXCIsIFwiZW5kUmFuZ2VcIiwgXCJub3RBbGxvd2VkXCJdLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcblx0XHRcdFx0c2VsZi5kYXlzLmNoaWxkTm9kZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShjKTtcblx0XHRcdH0pO1xuXG5cdFx0XHR2YXIgbWluUmFuZ2VEYXRlID0gTWF0aC5tYXgoc2VsZi5taW5SYW5nZURhdGUuZ2V0VGltZSgpLCByYW5nZVN0YXJ0RGF0ZSksXG5cdFx0XHQgICAgbWF4UmFuZ2VEYXRlID0gTWF0aC5taW4oc2VsZi5tYXhSYW5nZURhdGUuZ2V0VGltZSgpLCByYW5nZUVuZERhdGUpO1xuXG5cdFx0XHRlLnRhcmdldC5jbGFzc0xpc3QuYWRkKGhvdmVyRGF0ZSA8IHNlbGYuc2VsZWN0ZWREYXRlc1swXSA/IFwic3RhcnRSYW5nZVwiIDogXCJlbmRSYW5nZVwiKTtcblxuXHRcdFx0aWYgKGluaXRpYWxEYXRlID4gaG92ZXJEYXRlICYmIHRpbWVzdGFtcCA9PT0gaW5pdGlhbERhdGUuZ2V0VGltZSgpKSBzZWxmLmRheXMuY2hpbGROb2Rlc1tpXS5jbGFzc0xpc3QuYWRkKFwiZW5kUmFuZ2VcIik7ZWxzZSBpZiAoaW5pdGlhbERhdGUgPCBob3ZlckRhdGUgJiYgdGltZXN0YW1wID09PSBpbml0aWFsRGF0ZS5nZXRUaW1lKCkpIHNlbGYuZGF5cy5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5hZGQoXCJzdGFydFJhbmdlXCIpO2Vsc2UgaWYgKHRpbWVzdGFtcCA+IG1pblJhbmdlRGF0ZSAmJiB0aW1lc3RhbXAgPCBtYXhSYW5nZURhdGUpIHNlbGYuZGF5cy5jaGlsZE5vZGVzW2ldLmNsYXNzTGlzdC5hZGQoXCJpblJhbmdlXCIpO1xuXHRcdH07XG5cblx0XHRmb3IgKHZhciB0aW1lc3RhbXAgPSBzZWxmLmRheXMuY2hpbGROb2Rlc1swXS5kYXRlT2JqLmdldFRpbWUoKSwgaSA9IDA7IGkgPCA0MjsgaSsrLCB0aW1lc3RhbXAgKz0gc2VsZi51dGlscy5kdXJhdGlvbi5EQVkpIHtcblx0XHRcdHZhciBfcmV0ID0gX2xvb3AodGltZXN0YW1wLCBpKTtcblxuXHRcdFx0aWYgKF9yZXQgPT09IFwiY29udGludWVcIikgY29udGludWU7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gb25SZXNpemUoKSB7XG5cdFx0aWYgKHNlbGYuaXNPcGVuICYmICFzZWxmLmNvbmZpZy5zdGF0aWMgJiYgIXNlbGYuY29uZmlnLmlubGluZSkgcG9zaXRpb25DYWxlbmRhcigpO1xuXHR9XG5cblx0ZnVuY3Rpb24gb3BlbihlKSB7XG5cdFx0aWYgKHNlbGYuaXNNb2JpbGUpIHtcblx0XHRcdGlmIChlKSB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZS50YXJnZXQuYmx1cigpO1xuXHRcdFx0fVxuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2VsZi5tb2JpbGVJbnB1dC5jbGljaygpO1xuXHRcdFx0fSwgMCk7XG5cblx0XHRcdHRyaWdnZXJFdmVudChcIk9wZW5cIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSBlbHNlIGlmIChzZWxmLmlzT3BlbiB8fCAoc2VsZi5hbHRJbnB1dCB8fCBzZWxmLmlucHV0KS5kaXNhYmxlZCB8fCBzZWxmLmNvbmZpZy5pbmxpbmUpIHJldHVybjtcblxuXHRcdHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XG5cblx0XHRpZiAoIXNlbGYuY29uZmlnLnN0YXRpYyAmJiAhc2VsZi5jb25maWcuaW5saW5lKSBwb3NpdGlvbkNhbGVuZGFyKCk7XG5cblx0XHRzZWxmLmlzT3BlbiA9IHRydWU7XG5cblx0XHRpZiAoIXNlbGYuY29uZmlnLmFsbG93SW5wdXQpIHtcblx0XHRcdChzZWxmLmFsdElucHV0IHx8IHNlbGYuaW5wdXQpLmJsdXIoKTtcblx0XHRcdChzZWxmLmNvbmZpZy5ub0NhbGVuZGFyID8gc2VsZi50aW1lQ29udGFpbmVyIDogc2VsZi5zZWxlY3RlZERhdGVFbGVtID8gc2VsZi5zZWxlY3RlZERhdGVFbGVtIDogc2VsZi5kYXlzKS5mb2N1cygpO1xuXHRcdH1cblxuXHRcdChzZWxmLmFsdElucHV0IHx8IHNlbGYuaW5wdXQpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cdFx0dHJpZ2dlckV2ZW50KFwiT3BlblwiKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1pbk1heERhdGVTZXR0ZXIodHlwZSkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAoZGF0ZSkge1xuXHRcdFx0dmFyIGRhdGVPYmogPSBzZWxmLmNvbmZpZ1tcIl9cIiArIHR5cGUgKyBcIkRhdGVcIl0gPSBzZWxmLnBhcnNlRGF0ZShkYXRlKTtcblx0XHRcdHZhciBpbnZlcnNlRGF0ZU9iaiA9IHNlbGYuY29uZmlnW1wiX1wiICsgKHR5cGUgPT09IFwibWluXCIgPyBcIm1heFwiIDogXCJtaW5cIikgKyBcIkRhdGVcIl07XG5cdFx0XHR2YXIgaXNWYWxpZERhdGUgPSBkYXRlICYmIGRhdGVPYmogaW5zdGFuY2VvZiBEYXRlO1xuXG5cdFx0XHRpZiAoc2VsZi5zZWxlY3RlZERhdGVzKSB7XG5cdFx0XHRcdHNlbGYuc2VsZWN0ZWREYXRlcyA9IHNlbGYuc2VsZWN0ZWREYXRlcy5maWx0ZXIoaXNFbmFibGVkKTtcblx0XHRcdFx0dXBkYXRlVmFsdWUoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNlbGYuZGF5cykgcmVkcmF3KCk7XG5cblx0XHRcdGlmIChpc1ZhbGlkRGF0ZSkge1xuXHRcdFx0XHRzZWxmW3R5cGUgKyBcIkRhdGVIYXNUaW1lXCJdID0gZGF0ZU9iai5nZXRIb3VycygpIHx8IGRhdGVPYmouZ2V0TWludXRlcygpIHx8IGRhdGVPYmouZ2V0U2Vjb25kcygpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2VsZi5jdXJyZW50WWVhckVsZW1lbnQpIHtcblx0XHRcdFx0aWYgKGlzVmFsaWREYXRlKSBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudFt0eXBlXSA9IGRhdGVPYmouZ2V0RnVsbFllYXIoKTtlbHNlIHNlbGYuY3VycmVudFllYXJFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0eXBlKTtcblxuXHRcdFx0XHRzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5kaXNhYmxlZCA9IGludmVyc2VEYXRlT2JqICYmIGRhdGVPYmogJiYgaW52ZXJzZURhdGVPYmouZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZU9iai5nZXRGdWxsWWVhcigpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBwYXJzZUNvbmZpZygpIHtcblx0XHR2YXIgYm9vbE9wdHMgPSBbXCJ1dGNcIiwgXCJ3cmFwXCIsIFwid2Vla051bWJlcnNcIiwgXCJhbGxvd0lucHV0XCIsIFwiY2xpY2tPcGVuc1wiLCBcInRpbWVfMjRoclwiLCBcImVuYWJsZVRpbWVcIiwgXCJub0NhbGVuZGFyXCIsIFwiYWx0SW5wdXRcIiwgXCJzaG9ydGhhbmRDdXJyZW50TW9udGhcIiwgXCJpbmxpbmVcIiwgXCJzdGF0aWNcIiwgXCJlbmFibGVTZWNvbmRzXCIsIFwiZGlzYWJsZU1vYmlsZVwiXTtcblxuXHRcdHZhciBob29rcyA9IFtcIm9uQ2hhbmdlXCIsIFwib25DbG9zZVwiLCBcIm9uRGF5Q3JlYXRlXCIsIFwib25Nb250aENoYW5nZVwiLCBcIm9uT3BlblwiLCBcIm9uUmVhZHlcIiwgXCJvblZhbHVlVXBkYXRlXCIsIFwib25ZZWFyQ2hhbmdlXCJdO1xuXG5cdFx0c2VsZi5jb25maWcgPSBPYmplY3QuY3JlYXRlKEZsYXRwaWNrci5kZWZhdWx0Q29uZmlnKTtcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJtaW5EYXRlXCIsIHtcblx0XHRcdGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fbWluRGF0ZTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IG1pbk1heERhdGVTZXR0ZXIoXCJtaW5cIilcblx0XHR9KTtcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJtYXhEYXRlXCIsIHtcblx0XHRcdGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fbWF4RGF0ZTtcblx0XHRcdH0sXG5cdFx0XHRzZXQ6IG1pbk1heERhdGVTZXR0ZXIoXCJtYXhcIilcblx0XHR9KTtcblxuXHRcdHZhciB1c2VyQ29uZmlnID0gX2V4dGVuZHMoe30sIHNlbGYuaW5zdGFuY2VDb25maWcsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2VsZi5lbGVtZW50LmRhdGFzZXQgfHwge30pKSk7XG5cblx0XHRzZWxmLmNvbmZpZy5wYXJzZURhdGUgPSB1c2VyQ29uZmlnLnBhcnNlRGF0ZTtcblx0XHRzZWxmLmNvbmZpZy5mb3JtYXREYXRlID0gdXNlckNvbmZpZy5mb3JtYXREYXRlO1xuXG5cdFx0X2V4dGVuZHMoc2VsZi5jb25maWcsIHVzZXJDb25maWcpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBib29sT3B0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0c2VsZi5jb25maWdbYm9vbE9wdHNbaV1dID0gc2VsZi5jb25maWdbYm9vbE9wdHNbaV1dID09PSB0cnVlIHx8IHNlbGYuY29uZmlnW2Jvb2xPcHRzW2ldXSA9PT0gXCJ0cnVlXCI7XG5cdFx0fWZvciAodmFyIF9pID0gMDsgX2kgPCBob29rcy5sZW5ndGg7IF9pKyspIHtcblx0XHRcdHNlbGYuY29uZmlnW2hvb2tzW19pXV0gPSBhcnJheWlmeShzZWxmLmNvbmZpZ1tob29rc1tfaV1dIHx8IFtdKTtcblx0XHR9XG5cblx0XHRpZiAoIXVzZXJDb25maWcuZGF0ZUZvcm1hdCAmJiB1c2VyQ29uZmlnLmVuYWJsZVRpbWUpIHtcblx0XHRcdHNlbGYuY29uZmlnLmRhdGVGb3JtYXQgPSBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyID8gXCJIOmlcIiArIChzZWxmLmNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6U1wiIDogXCJcIikgOiBGbGF0cGlja3IuZGVmYXVsdENvbmZpZy5kYXRlRm9ybWF0ICsgXCIgSDppXCIgKyAoc2VsZi5jb25maWcuZW5hYmxlU2Vjb25kcyA/IFwiOlNcIiA6IFwiXCIpO1xuXHRcdH1cblxuXHRcdGlmICh1c2VyQ29uZmlnLmFsdElucHV0ICYmIHVzZXJDb25maWcuZW5hYmxlVGltZSAmJiAhdXNlckNvbmZpZy5hbHRGb3JtYXQpIHtcblx0XHRcdHNlbGYuY29uZmlnLmFsdEZvcm1hdCA9IHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgPyBcImg6aVwiICsgKHNlbGYuY29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTIEtcIiA6IFwiIEtcIikgOiBGbGF0cGlja3IuZGVmYXVsdENvbmZpZy5hbHRGb3JtYXQgKyAoXCIgaDppXCIgKyAoc2VsZi5jb25maWcuZW5hYmxlU2Vjb25kcyA/IFwiOlNcIiA6IFwiXCIpICsgXCIgS1wiKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBzZWxmLmNvbmZpZy5wbHVnaW5zLmxlbmd0aDsgX2kyKyspIHtcblx0XHRcdHZhciBwbHVnaW5Db25mID0gc2VsZi5jb25maWcucGx1Z2luc1tfaTJdKHNlbGYpIHx8IHt9O1xuXHRcdFx0Zm9yICh2YXIga2V5IGluIHBsdWdpbkNvbmYpIHtcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkoc2VsZi5jb25maWdba2V5XSkpIHNlbGYuY29uZmlnW2tleV0gPSBhcnJheWlmeShwbHVnaW5Db25mW2tleV0pLmNvbmNhdChzZWxmLmNvbmZpZ1trZXldKTtlbHNlIGlmICh1c2VyQ29uZmlnW2tleV0gIT09IHVuZGVmaW5lZCkgc2VsZi5jb25maWdba2V5XSA9IHBsdWdpbkNvbmZba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBzZXR1cExvY2FsZSgpIHtcblx0XHRpZiAoX3R5cGVvZihzZWxmLmNvbmZpZy5sb2NhbGUpICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBGbGF0cGlja3IubDEwbnNbc2VsZi5jb25maWcubG9jYWxlXSA9PT0gXCJ1bmRlZmluZWRcIikgY29uc29sZS53YXJuKFwiZmxhdHBpY2tyOiBpbnZhbGlkIGxvY2FsZSBcIiArIHNlbGYuY29uZmlnLmxvY2FsZSk7XG5cblx0XHRzZWxmLmwxMG4gPSBfZXh0ZW5kcyhPYmplY3QuY3JlYXRlKEZsYXRwaWNrci5sMTBucy5kZWZhdWx0KSwgX3R5cGVvZihzZWxmLmNvbmZpZy5sb2NhbGUpID09PSBcIm9iamVjdFwiID8gc2VsZi5jb25maWcubG9jYWxlIDogc2VsZi5jb25maWcubG9jYWxlICE9PSBcImRlZmF1bHRcIiA/IEZsYXRwaWNrci5sMTBuc1tzZWxmLmNvbmZpZy5sb2NhbGVdIHx8IHt9IDoge30pO1xuXHR9XG5cblx0ZnVuY3Rpb24gcG9zaXRpb25DYWxlbmRhcihlKSB7XG5cdFx0aWYgKGUgJiYgZS50YXJnZXQgIT09IHNlbGYudGltZUNvbnRhaW5lcikgcmV0dXJuO1xuXG5cdFx0dmFyIGNhbGVuZGFySGVpZ2h0ID0gc2VsZi5jYWxlbmRhckNvbnRhaW5lci5vZmZzZXRIZWlnaHQsXG5cdFx0ICAgIGNhbGVuZGFyV2lkdGggPSBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLm9mZnNldFdpZHRoLFxuXHRcdCAgICBpbnB1dCA9IHNlbGYuYWx0SW5wdXQgfHwgc2VsZi5pbnB1dCxcblx0XHQgICAgaW5wdXRCb3VuZHMgPSBpbnB1dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcblx0XHQgICAgZGlzdGFuY2VGcm9tQm90dG9tID0gd2luZG93LmlubmVySGVpZ2h0IC0gaW5wdXRCb3VuZHMuYm90dG9tICsgaW5wdXQub2Zmc2V0SGVpZ2h0LFxuXHRcdCAgICBib3R0b21DYWxlbmRhciA9IGRpc3RhbmNlRnJvbUJvdHRvbSA8IGNhbGVuZGFySGVpZ2h0ICsgNjA7XG5cblx0XHR2YXIgdG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0ICsgaW5wdXRCb3VuZHMudG9wICsgKCFib3R0b21DYWxlbmRhciA/IGlucHV0Lm9mZnNldEhlaWdodCArIDIgOiAtY2FsZW5kYXJIZWlnaHQgLSAyKTtcblxuXHRcdHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiYXJyb3dUb3BcIiwgIWJvdHRvbUNhbGVuZGFyKTtcblx0XHR0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFycm93Qm90dG9tXCIsIGJvdHRvbUNhbGVuZGFyKTtcblxuXHRcdGlmIChzZWxmLmNvbmZpZy5pbmxpbmUpIHJldHVybjtcblxuXHRcdHZhciBsZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICsgaW5wdXRCb3VuZHMubGVmdDtcblx0XHR2YXIgcmlnaHQgPSB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCAtIGlucHV0Qm91bmRzLnJpZ2h0O1xuXHRcdHZhciByaWdodE1vc3QgPSBsZWZ0ICsgY2FsZW5kYXJXaWR0aCA+IHdpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoO1xuXG5cdFx0dG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJyaWdodE1vc3RcIiwgcmlnaHRNb3N0KTtcblxuXHRcdGlmIChzZWxmLmNvbmZpZy5zdGF0aWMpIHJldHVybjtcblxuXHRcdHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUudG9wID0gdG9wICsgXCJweFwiO1xuXG5cdFx0aWYgKCFyaWdodE1vc3QpIHtcblx0XHRcdHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XG5cdFx0XHRzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnJpZ2h0ID0gXCJhdXRvXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUubGVmdCA9IFwiYXV0b1wiO1xuXHRcdFx0c2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5yaWdodCA9IHJpZ2h0ICsgXCJweFwiO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHJlZHJhdygpIHtcblx0XHRpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhciB8fCBzZWxmLmlzTW9iaWxlKSByZXR1cm47XG5cblx0XHRidWlsZFdlZWtkYXlzKCk7XG5cdFx0dXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xuXHRcdGJ1aWxkRGF5cygpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2VsZWN0RGF0ZShlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRpZiAoc2VsZi5jb25maWcuYWxsb3dJbnB1dCAmJiBlLndoaWNoID09PSAxMyAmJiBlLnRhcmdldCA9PT0gKHNlbGYuYWx0SW5wdXQgfHwgc2VsZi5pbnB1dCkpIHJldHVybiBzZWxmLnNldERhdGUoKHNlbGYuYWx0SW5wdXQgfHwgc2VsZi5pbnB1dCkudmFsdWUpLCBlLnRhcmdldC5ibHVyKCk7XG5cblx0XHRpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kYXlcIikgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIikgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90QWxsb3dlZFwiKSkgcmV0dXJuO1xuXG5cdFx0dmFyIHNlbGVjdGVkRGF0ZSA9IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gbmV3IERhdGUoZS50YXJnZXQuZGF0ZU9iai5nZXRUaW1lKCkpO1xuXG5cdFx0c2VsZi5zZWxlY3RlZERhdGVFbGVtID0gZS50YXJnZXQ7XG5cblx0XHRpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJzaW5nbGVcIikgc2VsZi5zZWxlY3RlZERhdGVzID0gW3NlbGVjdGVkRGF0ZV07ZWxzZSBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJtdWx0aXBsZVwiKSB7XG5cdFx0XHR2YXIgc2VsZWN0ZWRJbmRleCA9IGlzRGF0ZVNlbGVjdGVkKHNlbGVjdGVkRGF0ZSk7XG5cdFx0XHRpZiAoc2VsZWN0ZWRJbmRleCkgc2VsZi5zZWxlY3RlZERhdGVzLnNwbGljZShzZWxlY3RlZEluZGV4LCAxKTtlbHNlIHNlbGYuc2VsZWN0ZWREYXRlcy5wdXNoKHNlbGVjdGVkRGF0ZSk7XG5cdFx0fSBlbHNlIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpIHtcblx0XHRcdGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAyKSBzZWxmLmNsZWFyKCk7XG5cblx0XHRcdHNlbGYuc2VsZWN0ZWREYXRlcy5wdXNoKHNlbGVjdGVkRGF0ZSk7XG5cblx0XHRcdC8vIHVubGVzcyBzZWxlY3Rpbmcgc2FtZSBkYXRlIHR3aWNlLCBzb3J0IGFzY2VuZGluZ2x5XG5cdFx0XHRpZiAoY29tcGFyZURhdGVzKHNlbGVjdGVkRGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdLCB0cnVlKSAhPT0gMCkgc2VsZi5zZWxlY3RlZERhdGVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRcdFx0cmV0dXJuIGEuZ2V0VGltZSgpIC0gYi5nZXRUaW1lKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcblxuXHRcdGlmIChzZWxlY3RlZERhdGUuZ2V0TW9udGgoKSAhPT0gc2VsZi5jdXJyZW50TW9udGggJiYgc2VsZi5jb25maWcubW9kZSAhPT0gXCJyYW5nZVwiKSB7XG5cdFx0XHR2YXIgaXNOZXdZZWFyID0gc2VsZi5jdXJyZW50WWVhciAhPT0gc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRzZWxmLmN1cnJlbnRZZWFyID0gc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRzZWxmLmN1cnJlbnRNb250aCA9IHNlbGVjdGVkRGF0ZS5nZXRNb250aCgpO1xuXG5cdFx0XHRpZiAoaXNOZXdZZWFyKSB0cmlnZ2VyRXZlbnQoXCJZZWFyQ2hhbmdlXCIpO1xuXG5cdFx0XHR0cmlnZ2VyRXZlbnQoXCJNb250aENoYW5nZVwiKTtcblx0XHR9XG5cblx0XHRidWlsZERheXMoKTtcblxuXHRcdGlmIChzZWxmLm1pbkRhdGVIYXNUaW1lICYmIHNlbGYuY29uZmlnLmVuYWJsZVRpbWUgJiYgY29tcGFyZURhdGVzKHNlbGVjdGVkRGF0ZSwgc2VsZi5jb25maWcubWluRGF0ZSkgPT09IDApIHNldEhvdXJzRnJvbURhdGUoc2VsZi5jb25maWcubWluRGF0ZSk7XG5cblx0XHR1cGRhdGVWYWx1ZSgpO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gc2VsZi5kYXRlSXNQaWNrZWQgPSB0cnVlO1xuXHRcdH0sIDUwKTtcblxuXHRcdGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpIHtcblx0XHRcdGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdG9uTW91c2VPdmVyKGUpO1xuXG5cdFx0XHRcdHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyA9IHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyB8fCBzZWxmLm1pblJhbmdlRGF0ZSA+IHNlbGYuZGF5cy5jaGlsZE5vZGVzWzBdLmRhdGVPYmo7XG5cblx0XHRcdFx0c2VsZi5faGlkZU5leHRNb250aEFycm93ID0gc2VsZi5faGlkZU5leHRNb250aEFycm93IHx8IHNlbGYubWF4UmFuZ2VEYXRlIDwgc2VsZi5kYXlzLmNoaWxkTm9kZXNbNDFdLmRhdGVPYmo7XG5cdFx0XHR9IGVsc2UgdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xuXHRcdH1cblxuXHRcdGlmIChlLndoaWNoID09PSAxMyAmJiBzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBzZWxmLmhvdXJFbGVtZW50LmZvY3VzKCk7XG5cdFx0fSwgNDUxKTtcblxuXHRcdGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInNpbmdsZVwiICYmICFzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSBzZWxmLmNsb3NlKCk7XG5cblx0XHR0cmlnZ2VyRXZlbnQoXCJDaGFuZ2VcIik7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXQob3B0aW9uLCB2YWx1ZSkge1xuXHRcdHNlbGYuY29uZmlnW29wdGlvbl0gPSB2YWx1ZTtcblx0XHRzZWxmLnJlZHJhdygpO1xuXHRcdGp1bXBUb0RhdGUoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldFNlbGVjdGVkRGF0ZShpbnB1dERhdGUpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShpbnB1dERhdGUpKSBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBpbnB1dERhdGUubWFwKHNlbGYucGFyc2VEYXRlKTtlbHNlIGlmIChpbnB1dERhdGUgaW5zdGFuY2VvZiBEYXRlIHx8ICFpc05hTihpbnB1dERhdGUpKSBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBbc2VsZi5wYXJzZURhdGUoaW5wdXREYXRlKV07ZWxzZSBpZiAoaW5wdXREYXRlICYmIGlucHV0RGF0ZS5zdWJzdHJpbmcpIHtcblx0XHRcdHN3aXRjaCAoc2VsZi5jb25maWcubW9kZSkge1xuXHRcdFx0XHRjYXNlIFwic2luZ2xlXCI6XG5cdFx0XHRcdFx0c2VsZi5zZWxlY3RlZERhdGVzID0gW3NlbGYucGFyc2VEYXRlKGlucHV0RGF0ZSldO1xuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGNhc2UgXCJtdWx0aXBsZVwiOlxuXHRcdFx0XHRcdHNlbGYuc2VsZWN0ZWREYXRlcyA9IGlucHV0RGF0ZS5zcGxpdChcIjsgXCIpLm1hcChzZWxmLnBhcnNlRGF0ZSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBcInJhbmdlXCI6XG5cdFx0XHRcdFx0c2VsZi5zZWxlY3RlZERhdGVzID0gaW5wdXREYXRlLnNwbGl0KHNlbGYubDEwbi5yYW5nZVNlcGFyYXRvcikubWFwKHNlbGYucGFyc2VEYXRlKTtcblxuXHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0c2VsZi5zZWxlY3RlZERhdGVzID0gc2VsZi5zZWxlY3RlZERhdGVzLmZpbHRlcihmdW5jdGlvbiAoZCkge1xuXHRcdFx0cmV0dXJuIGQgaW5zdGFuY2VvZiBEYXRlICYmIGQuZ2V0VGltZSgpICYmIGlzRW5hYmxlZChkLCBmYWxzZSk7XG5cdFx0fSk7XG5cblx0XHRzZWxmLnNlbGVjdGVkRGF0ZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuXHRcdFx0cmV0dXJuIGEuZ2V0VGltZSgpIC0gYi5nZXRUaW1lKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXREYXRlKGRhdGUsIHRyaWdnZXJDaGFuZ2UpIHtcblx0XHRpZiAoIWRhdGUpIHJldHVybiBzZWxmLmNsZWFyKCk7XG5cblx0XHRzZXRTZWxlY3RlZERhdGUoZGF0ZSk7XG5cblx0XHRpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdHNlbGYuZGF0ZUlzUGlja2VkID0gdHJ1ZTtcblx0XHRcdHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gc2VsZi5zZWxlY3RlZERhdGVzWzBdO1xuXHRcdH0gZWxzZSBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IG51bGw7XG5cblx0XHRzZWxmLnJlZHJhdygpO1xuXHRcdGp1bXBUb0RhdGUoKTtcblxuXHRcdHNldEhvdXJzRnJvbURhdGUoKTtcblx0XHR1cGRhdGVWYWx1ZSgpO1xuXG5cdFx0aWYgKHRyaWdnZXJDaGFuZ2UgIT09IGZhbHNlKSB0cmlnZ2VyRXZlbnQoXCJDaGFuZ2VcIik7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXR1cERhdGVzKCkge1xuXHRcdGZ1bmN0aW9uIHBhcnNlRGF0ZVJ1bGVzKGFycikge1xuXHRcdFx0Zm9yICh2YXIgaSA9IGFyci5sZW5ndGg7IGktLTspIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBhcnJbaV0gPT09IFwic3RyaW5nXCIgfHwgK2FycltpXSkgYXJyW2ldID0gc2VsZi5wYXJzZURhdGUoYXJyW2ldLCB0cnVlKTtlbHNlIGlmIChhcnJbaV0gJiYgYXJyW2ldLmZyb20gJiYgYXJyW2ldLnRvKSB7XG5cdFx0XHRcdFx0YXJyW2ldLmZyb20gPSBzZWxmLnBhcnNlRGF0ZShhcnJbaV0uZnJvbSk7XG5cdFx0XHRcdFx0YXJyW2ldLnRvID0gc2VsZi5wYXJzZURhdGUoYXJyW2ldLnRvKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuXHRcdFx0XHRyZXR1cm4geDtcblx0XHRcdH0pOyAvLyByZW1vdmUgZmFsc3kgdmFsdWVzXG5cdFx0fVxuXG5cdFx0c2VsZi5zZWxlY3RlZERhdGVzID0gW107XG5cdFx0c2VsZi5ub3cgPSBuZXcgRGF0ZSgpO1xuXG5cdFx0aWYgKHNlbGYuY29uZmlnLmRpc2FibGUubGVuZ3RoKSBzZWxmLmNvbmZpZy5kaXNhYmxlID0gcGFyc2VEYXRlUnVsZXMoc2VsZi5jb25maWcuZGlzYWJsZSk7XG5cblx0XHRpZiAoc2VsZi5jb25maWcuZW5hYmxlLmxlbmd0aCkgc2VsZi5jb25maWcuZW5hYmxlID0gcGFyc2VEYXRlUnVsZXMoc2VsZi5jb25maWcuZW5hYmxlKTtcblxuXHRcdHNldFNlbGVjdGVkRGF0ZShzZWxmLmNvbmZpZy5kZWZhdWx0RGF0ZSB8fCBzZWxmLmlucHV0LnZhbHVlKTtcblxuXHRcdHZhciBpbml0aWFsRGF0ZSA9IHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPyBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0gOiBzZWxmLmNvbmZpZy5taW5EYXRlICYmIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0VGltZSgpID4gc2VsZi5ub3cgPyBzZWxmLmNvbmZpZy5taW5EYXRlIDogc2VsZi5jb25maWcubWF4RGF0ZSAmJiBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldFRpbWUoKSA8IHNlbGYubm93ID8gc2VsZi5jb25maWcubWF4RGF0ZSA6IHNlbGYubm93O1xuXG5cdFx0c2VsZi5jdXJyZW50WWVhciA9IGluaXRpYWxEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0c2VsZi5jdXJyZW50TW9udGggPSBpbml0aWFsRGF0ZS5nZXRNb250aCgpO1xuXG5cdFx0aWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGgpIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gc2VsZi5zZWxlY3RlZERhdGVzWzBdO1xuXG5cdFx0c2VsZi5taW5EYXRlSGFzVGltZSA9IHNlbGYuY29uZmlnLm1pbkRhdGUgJiYgKHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0SG91cnMoKSB8fCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1pbnV0ZXMoKSB8fCBzZWxmLmNvbmZpZy5taW5EYXRlLmdldFNlY29uZHMoKSk7XG5cblx0XHRzZWxmLm1heERhdGVIYXNUaW1lID0gc2VsZi5jb25maWcubWF4RGF0ZSAmJiAoc2VsZi5jb25maWcubWF4RGF0ZS5nZXRIb3VycygpIHx8IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TWludXRlcygpIHx8IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0U2Vjb25kcygpKTtcblxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBcImxhdGVzdFNlbGVjdGVkRGF0ZU9ialwiLCB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0XHRcdFx0cmV0dXJuIHNlbGYuX3NlbGVjdGVkRGF0ZU9iaiB8fCBzZWxmLnNlbGVjdGVkRGF0ZXNbc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCAtIDFdIHx8IG51bGw7XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiBzZXQoZGF0ZSkge1xuXHRcdFx0XHRzZWxmLl9zZWxlY3RlZERhdGVPYmogPSBkYXRlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0dXBIZWxwZXJGdW5jdGlvbnMoKSB7XG5cdFx0c2VsZi51dGlscyA9IHtcblx0XHRcdGR1cmF0aW9uOiB7XG5cdFx0XHRcdERBWTogODY0MDAwMDBcblx0XHRcdH0sXG5cdFx0XHRnZXREYXlzaW5Nb250aDogZnVuY3Rpb24gZ2V0RGF5c2luTW9udGgobW9udGgsIHlyKSB7XG5cdFx0XHRcdG1vbnRoID0gdHlwZW9mIG1vbnRoID09PSBcInVuZGVmaW5lZFwiID8gc2VsZi5jdXJyZW50TW9udGggOiBtb250aDtcblxuXHRcdFx0XHR5ciA9IHR5cGVvZiB5ciA9PT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYuY3VycmVudFllYXIgOiB5cjtcblxuXHRcdFx0XHRpZiAobW9udGggPT09IDEgJiYgKHlyICUgNCA9PT0gMCAmJiB5ciAlIDEwMCAhPT0gMCB8fCB5ciAlIDQwMCA9PT0gMCkpIHJldHVybiAyOTtcblxuXHRcdFx0XHRyZXR1cm4gc2VsZi5sMTBuLmRheXNJbk1vbnRoW21vbnRoXTtcblx0XHRcdH0sXG5cdFx0XHRtb250aFRvU3RyOiBmdW5jdGlvbiBtb250aFRvU3RyKG1vbnRoTnVtYmVyLCBzaG9ydGhhbmQpIHtcblx0XHRcdFx0c2hvcnRoYW5kID0gdHlwZW9mIHNob3J0aGFuZCA9PT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYuY29uZmlnLnNob3J0aGFuZEN1cnJlbnRNb250aCA6IHNob3J0aGFuZDtcblxuXHRcdFx0XHRyZXR1cm4gc2VsZi5sMTBuLm1vbnRoc1soc2hvcnRoYW5kID8gXCJzaG9ydFwiIDogXCJsb25nXCIpICsgXCJoYW5kXCJdW21vbnRoTnVtYmVyXTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0LyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblx0ZnVuY3Rpb24gc2V0dXBGb3JtYXRzKCkge1xuXHRcdHNlbGYuZm9ybWF0cyA9IHtcblx0XHRcdC8vIGdldCB0aGUgZGF0ZSBpbiBVVENcblx0XHRcdFo6IGZ1bmN0aW9uIFooZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gd2Vla2RheSBuYW1lLCBzaG9ydCwgZS5nLiBUaHVcblx0XHRcdEQ6IGZ1bmN0aW9uIEQoZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gc2VsZi5sMTBuLndlZWtkYXlzLnNob3J0aGFuZFtzZWxmLmZvcm1hdHMudyhkYXRlKV07XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBmdWxsIG1vbnRoIG5hbWUgZS5nLiBKYW51YXJ5XG5cdFx0XHRGOiBmdW5jdGlvbiBGKGRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIHNlbGYudXRpbHMubW9udGhUb1N0cihzZWxmLmZvcm1hdHMubihkYXRlKSAtIDEsIGZhbHNlKTtcblx0XHRcdH0sXG5cblx0XHRcdC8vIGhvdXJzIHdpdGggbGVhZGluZyB6ZXJvIGUuZy4gMDNcblx0XHRcdEg6IGZ1bmN0aW9uIEgoZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gRmxhdHBpY2tyLnByb3RvdHlwZS5wYWQoZGF0ZS5nZXRIb3VycygpKTtcblx0XHRcdH0sXG5cblx0XHRcdC8vIGRheSAoMS0zMCkgd2l0aCBvcmRpbmFsIHN1ZmZpeCBlLmcuIDFzdCwgMm5kXG5cdFx0XHRKOiBmdW5jdGlvbiBKKGRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIGRhdGUuZ2V0RGF0ZSgpICsgc2VsZi5sMTBuLm9yZGluYWwoZGF0ZS5nZXREYXRlKCkpO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gQU0vUE1cblx0XHRcdEs6IGZ1bmN0aW9uIEsoZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0ZS5nZXRIb3VycygpID4gMTEgPyBcIlBNXCIgOiBcIkFNXCI7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBzaG9ydGhhbmQgbW9udGggZS5nLiBKYW4sIFNlcCwgT2N0LCBldGNcblx0XHRcdE06IGZ1bmN0aW9uIE0oZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gc2VsZi51dGlscy5tb250aFRvU3RyKGRhdGUuZ2V0TW9udGgoKSwgdHJ1ZSk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBzZWNvbmRzIDAwLTU5XG5cdFx0XHRTOiBmdW5jdGlvbiBTKGRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIEZsYXRwaWNrci5wcm90b3R5cGUucGFkKGRhdGUuZ2V0U2Vjb25kcygpKTtcblx0XHRcdH0sXG5cblx0XHRcdC8vIHVuaXggdGltZXN0YW1wXG5cdFx0XHRVOiBmdW5jdGlvbiBVKGRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIGRhdGUuZ2V0VGltZSgpIC8gMTAwMDtcblx0XHRcdH0sXG5cblx0XHRcdC8vIGZ1bGwgeWVhciBlLmcuIDIwMTZcblx0XHRcdFk6IGZ1bmN0aW9uIFkoZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gZGF5IGluIG1vbnRoLCBwYWRkZWQgKDAxLTMwKVxuXHRcdFx0ZDogZnVuY3Rpb24gZChkYXRlKSB7XG5cdFx0XHRcdHJldHVybiBGbGF0cGlja3IucHJvdG90eXBlLnBhZChzZWxmLmZvcm1hdHMuaihkYXRlKSk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBob3VyIGZyb20gMS0xMiAoYW0vcG0pXG5cdFx0XHRoOiBmdW5jdGlvbiBoKGRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIGRhdGUuZ2V0SG91cnMoKSAlIDEyID8gZGF0ZS5nZXRIb3VycygpICUgMTIgOiAxMjtcblx0XHRcdH0sXG5cblx0XHRcdC8vIG1pbnV0ZXMsIHBhZGRlZCB3aXRoIGxlYWRpbmcgemVybyBlLmcuIDA5XG5cdFx0XHRpOiBmdW5jdGlvbiBpKGRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIEZsYXRwaWNrci5wcm90b3R5cGUucGFkKGRhdGUuZ2V0TWludXRlcygpKTtcblx0XHRcdH0sXG5cblx0XHRcdC8vIGRheSBpbiBtb250aCAoMS0zMClcblx0XHRcdGo6IGZ1bmN0aW9uIGooZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0ZS5nZXREYXRlKCk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyB3ZWVrZGF5IG5hbWUsIGZ1bGwsIGUuZy4gVGh1cnNkYXlcblx0XHRcdGw6IGZ1bmN0aW9uIGwoZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gc2VsZi5sMTBuLndlZWtkYXlzLmxvbmdoYW5kW3NlbGYuZm9ybWF0cy53KGRhdGUpXTtcblx0XHRcdH0sXG5cblx0XHRcdC8vIHBhZGRlZCBtb250aCBudW1iZXIgKDAxLTEyKVxuXHRcdFx0bTogZnVuY3Rpb24gbShkYXRlKSB7XG5cdFx0XHRcdHJldHVybiBGbGF0cGlja3IucHJvdG90eXBlLnBhZChzZWxmLmZvcm1hdHMubihkYXRlKSk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyB0aGUgbW9udGggbnVtYmVyICgxLTEyKVxuXHRcdFx0bjogZnVuY3Rpb24gbihkYXRlKSB7XG5cdFx0XHRcdHJldHVybiBkYXRlLmdldE1vbnRoKCkgKyAxO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gc2Vjb25kcyAwLTU5XG5cdFx0XHRzOiBmdW5jdGlvbiBzKGRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIGRhdGUuZ2V0U2Vjb25kcygpO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gbnVtYmVyIG9mIHRoZSBkYXkgb2YgdGhlIHdlZWtcblx0XHRcdHc6IGZ1bmN0aW9uIHcoZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gZGF0ZS5nZXREYXkoKTtcblx0XHRcdH0sXG5cblx0XHRcdC8vIGxhc3QgdHdvIGRpZ2l0cyBvZiB5ZWFyIGUuZy4gMTYgZm9yIDIwMTZcblx0XHRcdHk6IGZ1bmN0aW9uIHkoZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gU3RyaW5nKHNlbGYuZm9ybWF0cy5ZKGRhdGUpKS5zdWJzdHJpbmcoMik7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldHVwSW5wdXRzKCkge1xuXHRcdHNlbGYuaW5wdXQgPSBzZWxmLmNvbmZpZy53cmFwID8gc2VsZi5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1pbnB1dF1cIikgOiBzZWxmLmVsZW1lbnQ7XG5cblx0XHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHRcdGlmICghc2VsZi5pbnB1dCkgcmV0dXJuIGNvbnNvbGUud2FybihcIkVycm9yOiBpbnZhbGlkIGlucHV0IGVsZW1lbnQgc3BlY2lmaWVkXCIsIHNlbGYuaW5wdXQpO1xuXG5cdFx0c2VsZi5pbnB1dC5fdHlwZSA9IHNlbGYuaW5wdXQudHlwZTtcblx0XHRzZWxmLmlucHV0LnR5cGUgPSBcInRleHRcIjtcblx0XHRzZWxmLmlucHV0LmNsYXNzTGlzdC5hZGQoXCJmbGF0cGlja3ItaW5wdXRcIik7XG5cblx0XHRpZiAoc2VsZi5jb25maWcuYWx0SW5wdXQpIHtcblx0XHRcdC8vIHJlcGxpY2F0ZSBzZWxmLmVsZW1lbnRcblx0XHRcdHNlbGYuYWx0SW5wdXQgPSBjcmVhdGVFbGVtZW50KHNlbGYuaW5wdXQubm9kZU5hbWUsIHNlbGYuaW5wdXQuY2xhc3NOYW1lICsgXCIgXCIgKyBzZWxmLmNvbmZpZy5hbHRJbnB1dENsYXNzKTtcblx0XHRcdHNlbGYuYWx0SW5wdXQucGxhY2Vob2xkZXIgPSBzZWxmLmlucHV0LnBsYWNlaG9sZGVyO1xuXHRcdFx0c2VsZi5hbHRJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5cblx0XHRcdHNlbGYuaW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XG5cdFx0XHRpZiAoc2VsZi5pbnB1dC5wYXJlbnROb2RlKSBzZWxmLmlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYuYWx0SW5wdXQsIHNlbGYuaW5wdXQubmV4dFNpYmxpbmcpO1xuXHRcdH1cblxuXHRcdGlmICghc2VsZi5jb25maWcuYWxsb3dJbnB1dCkgKHNlbGYuYWx0SW5wdXQgfHwgc2VsZi5pbnB1dCkuc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIiwgXCJyZWFkb25seVwiKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldHVwTW9iaWxlKCkge1xuXHRcdHZhciBpbnB1dFR5cGUgPSBzZWxmLmNvbmZpZy5lbmFibGVUaW1lID8gc2VsZi5jb25maWcubm9DYWxlbmRhciA/IFwidGltZVwiIDogXCJkYXRldGltZS1sb2NhbFwiIDogXCJkYXRlXCI7XG5cblx0XHRzZWxmLm1vYmlsZUlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHNlbGYuaW5wdXQuY2xhc3NOYW1lICsgXCIgZmxhdHBpY2tyLW1vYmlsZVwiKTtcblx0XHRzZWxmLm1vYmlsZUlucHV0LnN0ZXAgPSBcImFueVwiO1xuXHRcdHNlbGYubW9iaWxlSW5wdXQudGFiSW5kZXggPSAxO1xuXHRcdHNlbGYubW9iaWxlSW5wdXQudHlwZSA9IGlucHV0VHlwZTtcblx0XHRzZWxmLm1vYmlsZUlucHV0LmRpc2FibGVkID0gc2VsZi5pbnB1dC5kaXNhYmxlZDtcblx0XHRzZWxmLm1vYmlsZUlucHV0LnBsYWNlaG9sZGVyID0gc2VsZi5pbnB1dC5wbGFjZWhvbGRlcjtcblxuXHRcdHNlbGYubW9iaWxlRm9ybWF0U3RyID0gaW5wdXRUeXBlID09PSBcImRhdGV0aW1lLWxvY2FsXCIgPyBcIlktbS1kXFxcXFRIOmk6U1wiIDogaW5wdXRUeXBlID09PSBcImRhdGVcIiA/IFwiWS1tLWRcIiA6IFwiSDppOlNcIjtcblxuXHRcdGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoKSB7XG5cdFx0XHRzZWxmLm1vYmlsZUlucHV0LmRlZmF1bHRWYWx1ZSA9IHNlbGYubW9iaWxlSW5wdXQudmFsdWUgPSBmb3JtYXREYXRlKHNlbGYubW9iaWxlRm9ybWF0U3RyLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0pO1xuXHRcdH1cblxuXHRcdGlmIChzZWxmLmNvbmZpZy5taW5EYXRlKSBzZWxmLm1vYmlsZUlucHV0Lm1pbiA9IGZvcm1hdERhdGUoXCJZLW0tZFwiLCBzZWxmLmNvbmZpZy5taW5EYXRlKTtcblxuXHRcdGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlKSBzZWxmLm1vYmlsZUlucHV0Lm1heCA9IGZvcm1hdERhdGUoXCJZLW0tZFwiLCBzZWxmLmNvbmZpZy5tYXhEYXRlKTtcblxuXHRcdHNlbGYuaW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XG5cdFx0aWYgKHNlbGYuY29uZmlnLmFsdElucHV0KSBzZWxmLmFsdElucHV0LnR5cGUgPSBcImhpZGRlblwiO1xuXG5cdFx0dHJ5IHtcblx0XHRcdHNlbGYuaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZi5tb2JpbGVJbnB1dCwgc2VsZi5pbnB1dC5uZXh0U2libGluZyk7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Ly9cblx0XHR9XG5cblx0XHRzZWxmLm1vYmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcblx0XHRcdHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gc2VsZi5wYXJzZURhdGUoZS50YXJnZXQudmFsdWUpO1xuXHRcdFx0c2VsZi5zZXREYXRlKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqKTtcblx0XHRcdHRyaWdnZXJFdmVudChcIkNoYW5nZVwiKTtcblx0XHRcdHRyaWdnZXJFdmVudChcIkNsb3NlXCIpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gdG9nZ2xlKCkge1xuXHRcdGlmIChzZWxmLmlzT3Blbikgc2VsZi5jbG9zZSgpO2Vsc2Ugc2VsZi5vcGVuKCk7XG5cdH1cblxuXHRmdW5jdGlvbiB0cmlnZ2VyRXZlbnQoZXZlbnQsIGRhdGEpIHtcblx0XHR2YXIgaG9va3MgPSBzZWxmLmNvbmZpZ1tcIm9uXCIgKyBldmVudF07XG5cblx0XHRpZiAoaG9va3MpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aG9va3NbaV0oc2VsZi5zZWxlY3RlZERhdGVzLCBzZWxmLmlucHV0LnZhbHVlLCBzZWxmLCBkYXRhKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZXZlbnQgPT09IFwiQ2hhbmdlXCIpIHtcblx0XHRcdGlmICh0eXBlb2YgRXZlbnQgPT09IFwiZnVuY3Rpb25cIiAmJiBFdmVudC5jb25zdHJ1Y3Rvcikge1xuXHRcdFx0XHRzZWxmLmlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHsgXCJidWJibGVzXCI6IHRydWUgfSkpO1xuXG5cdFx0XHRcdC8vIG1hbnkgZnJvbnQtZW5kIGZyYW1ld29ya3MgYmluZCB0byB0aGUgaW5wdXQgZXZlbnRcblx0XHRcdFx0c2VsZi5pbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImlucHV0XCIsIHsgXCJidWJibGVzXCI6IHRydWUgfSkpO1xuXHRcdFx0fVxuXG5cdFx0XHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0aWYgKHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFdmVudCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gc2VsZi5pbnB1dC5kaXNwYXRjaEV2ZW50KHNlbGYuY2hhbmdlRXZlbnQpO1xuXG5cdFx0XHRcdFx0c2VsZi5pbnB1dC5maXJlRXZlbnQoXCJvbmNoYW5nZVwiKTtcblx0XHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGlzRGF0ZVNlbGVjdGVkKGRhdGUpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGNvbXBhcmVEYXRlcyhzZWxmLnNlbGVjdGVkRGF0ZXNbaV0sIGRhdGUpID09PSAwKSByZXR1cm4gXCJcIiArIGk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNEYXRlSW5SYW5nZShkYXRlKSB7XG5cdFx0aWYgKHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIiB8fCBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIDwgMikgcmV0dXJuIGZhbHNlO1xuXHRcdHJldHVybiBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdKSA+PSAwICYmIGNvbXBhcmVEYXRlcyhkYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMV0pIDw9IDA7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCkge1xuXHRcdGlmIChzZWxmLmNvbmZpZy5ub0NhbGVuZGFyIHx8IHNlbGYuaXNNb2JpbGUgfHwgIXNlbGYubW9udGhOYXYpIHJldHVybjtcblxuXHRcdHNlbGYuY3VycmVudE1vbnRoRWxlbWVudC50ZXh0Q29udGVudCA9IHNlbGYudXRpbHMubW9udGhUb1N0cihzZWxmLmN1cnJlbnRNb250aCkgKyBcIiBcIjtcblx0XHRzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC52YWx1ZSA9IHNlbGYuY3VycmVudFllYXI7XG5cblx0XHRzZWxmLl9oaWRlUHJldk1vbnRoQXJyb3cgPSBzZWxmLmNvbmZpZy5taW5EYXRlICYmIChzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkgPyBzZWxmLmN1cnJlbnRNb250aCA8PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1vbnRoKCkgOiBzZWxmLmN1cnJlbnRZZWFyIDwgc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpKTtcblxuXHRcdHNlbGYuX2hpZGVOZXh0TW9udGhBcnJvdyA9IHNlbGYuY29uZmlnLm1heERhdGUgJiYgKHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSA/IHNlbGYuY3VycmVudE1vbnRoICsgMSA+IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TW9udGgoKSA6IHNlbGYuY3VycmVudFllYXIgPiBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlVmFsdWUoKSB7XG5cdFx0aWYgKCFzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoKSByZXR1cm4gc2VsZi5jbGVhcigpO1xuXG5cdFx0aWYgKHNlbGYuaXNNb2JpbGUpIHtcblx0XHRcdHNlbGYubW9iaWxlSW5wdXQudmFsdWUgPSBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID8gZm9ybWF0RGF0ZShzZWxmLm1vYmlsZUZvcm1hdFN0ciwgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmopIDogXCJcIjtcblx0XHR9XG5cblx0XHR2YXIgam9pbkNoYXIgPSBzZWxmLmNvbmZpZy5tb2RlICE9PSBcInJhbmdlXCIgPyBcIjsgXCIgOiBzZWxmLmwxMG4ucmFuZ2VTZXBhcmF0b3I7XG5cblx0XHRzZWxmLmlucHV0LnZhbHVlID0gc2VsZi5zZWxlY3RlZERhdGVzLm1hcChmdW5jdGlvbiAoZE9iaikge1xuXHRcdFx0cmV0dXJuIGZvcm1hdERhdGUoc2VsZi5jb25maWcuZGF0ZUZvcm1hdCwgZE9iaik7XG5cdFx0fSkuam9pbihqb2luQ2hhcik7XG5cblx0XHRpZiAoc2VsZi5jb25maWcuYWx0SW5wdXQpIHtcblx0XHRcdHNlbGYuYWx0SW5wdXQudmFsdWUgPSBzZWxmLnNlbGVjdGVkRGF0ZXMubWFwKGZ1bmN0aW9uIChkT2JqKSB7XG5cdFx0XHRcdHJldHVybiBmb3JtYXREYXRlKHNlbGYuY29uZmlnLmFsdEZvcm1hdCwgZE9iaik7XG5cdFx0XHR9KS5qb2luKGpvaW5DaGFyKTtcblx0XHR9XG5cblx0XHR0cmlnZ2VyRXZlbnQoXCJWYWx1ZVVwZGF0ZVwiKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHllYXJTY3JvbGwoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZhciBkZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBlLndoZWVsRGVsdGEgfHwgLWUuZGVsdGFZKSksXG5cdFx0ICAgIG5ld1llYXIgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApICsgZGVsdGE7XG5cblx0XHRjaGFuZ2VZZWFyKG5ld1llYXIpO1xuXHRcdGUudGFyZ2V0LnZhbHVlID0gc2VsZi5jdXJyZW50WWVhcjtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc05hbWUsIGNvbnRlbnQpIHtcblx0XHR2YXIgZSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lIHx8IFwiXCI7XG5cdFx0Y29udGVudCA9IGNvbnRlbnQgfHwgXCJcIjtcblxuXHRcdGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuXG5cdFx0aWYgKGNvbnRlbnQpIGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuXG5cdFx0cmV0dXJuIGU7XG5cdH1cblxuXHRmdW5jdGlvbiBhcnJheWlmeShvYmopIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShvYmopKSByZXR1cm4gb2JqO1xuXHRcdHJldHVybiBbb2JqXTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW0sIGNsYXNzTmFtZSwgYm9vbCkge1xuXHRcdGlmIChib29sKSByZXR1cm4gZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdFx0ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG5cdH1cblxuXHQvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXHRmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcblx0XHR2YXIgdGltZW91dCA9IHZvaWQgMDtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0Zm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcblx0XHRcdFx0YXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGNvbnRleHQgPSB0aGlzO1xuXHRcdFx0dmFyIGxhdGVyID0gZnVuY3Rpb24gbGF0ZXIoKSB7XG5cdFx0XHRcdHRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHRpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0XHRcdH07XG5cblx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHRcdHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcblx0XHRcdGlmIChpbW1lZGlhdGUgJiYgIXRpbWVvdXQpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNvbXBhcmVEYXRlcyhkYXRlMSwgZGF0ZTIsIHRpbWVsZXNzKSB7XG5cdFx0aWYgKCEoZGF0ZTEgaW5zdGFuY2VvZiBEYXRlKSB8fCAhKGRhdGUyIGluc3RhbmNlb2YgRGF0ZSkpIHJldHVybiBmYWxzZTtcblxuXHRcdGlmICh0aW1lbGVzcyAhPT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiBuZXcgRGF0ZShkYXRlMS5nZXRUaW1lKCkpLnNldEhvdXJzKDAsIDAsIDAsIDApIC0gbmV3IERhdGUoZGF0ZTIuZ2V0VGltZSgpKS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGF0ZTEuZ2V0VGltZSgpIC0gZGF0ZTIuZ2V0VGltZSgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdGltZVdyYXBwZXIoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZhciBpc0tleURvd24gPSBlLnR5cGUgPT09IFwia2V5ZG93blwiLFxuXHRcdCAgICBpc1doZWVsID0gZS50eXBlID09PSBcIndoZWVsXCI7XG5cblx0XHRpZiAoZS50eXBlICE9PSBcImlucHV0XCIgJiYgIWlzS2V5RG93biAmJiAoZS50YXJnZXQudmFsdWUgfHwgZS50YXJnZXQudGV4dENvbnRlbnQpLmxlbmd0aCA+PSAyIC8vIHR5cGVkIHR3byBkaWdpdHNcblx0XHQpIHtcblx0XHRcdFx0ZS50YXJnZXQuZm9jdXMoKTtcblx0XHRcdFx0ZS50YXJnZXQuYmx1cigpO1xuXHRcdFx0fVxuXG5cdFx0aWYgKHNlbGYuYW1QTSAmJiBlLnRhcmdldCA9PT0gc2VsZi5hbVBNKSByZXR1cm4gZS50YXJnZXQudGV4dENvbnRlbnQgPSBbXCJBTVwiLCBcIlBNXCJdW2UudGFyZ2V0LnRleHRDb250ZW50ID09PSBcIkFNXCIgfCAwXTtcblxuXHRcdHZhciBtaW4gPSBOdW1iZXIoZS50YXJnZXQubWluKSxcblx0XHQgICAgbWF4ID0gTnVtYmVyKGUudGFyZ2V0Lm1heCksXG5cdFx0ICAgIHN0ZXAgPSBOdW1iZXIoZS50YXJnZXQuc3RlcCksXG5cdFx0ICAgIGN1clZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKSxcblx0XHQgICAgZGVsdGEgPSAhaXNLZXlEb3duID8gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGUud2hlZWxEZWx0YSB8fCAtZS5kZWx0YVkpKSB8fCAwIDogZS53aGljaCA9PT0gMzggPyAxIDogLTE7XG5cblx0XHR2YXIgbmV3VmFsdWUgPSBjdXJWYWx1ZSArIChpc1doZWVsIHx8IGlzS2V5RG93bikgKiBzdGVwICogZGVsdGE7XG5cblx0XHRpZiAoZS50YXJnZXQudmFsdWUubGVuZ3RoID09PSAyKSB7XG5cdFx0XHR2YXIgaXNIb3VyRWxlbSA9IGUudGFyZ2V0ID09PSBzZWxmLmhvdXJFbGVtZW50O1xuXG5cdFx0XHRpZiAobmV3VmFsdWUgPCBtaW4pIHtcblx0XHRcdFx0bmV3VmFsdWUgPSBtYXggKyBuZXdWYWx1ZSArICFpc0hvdXJFbGVtICsgKGlzSG91ckVsZW0gJiYgIXNlbGYuYW1QTSk7XG5cdFx0XHR9IGVsc2UgaWYgKG5ld1ZhbHVlID4gbWF4KSB7XG5cdFx0XHRcdG5ld1ZhbHVlID0gZS50YXJnZXQgPT09IHNlbGYuaG91ckVsZW1lbnQgPyBuZXdWYWx1ZSAtIG1heCAtICFzZWxmLmFtUE0gOiBtaW47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZWxmLmFtUE0gJiYgaXNIb3VyRWxlbSAmJiAoc3RlcCA9PT0gMSA/IG5ld1ZhbHVlICsgY3VyVmFsdWUgPT09IDIzIDogTWF0aC5hYnMobmV3VmFsdWUgLSBjdXJWYWx1ZSkgPiBzdGVwKSkgc2VsZi5hbVBNLnRleHRDb250ZW50ID0gc2VsZi5hbVBNLnRleHRDb250ZW50ID09PSBcIlBNXCIgPyBcIkFNXCIgOiBcIlBNXCI7XG5cblx0XHRcdGUudGFyZ2V0LnZhbHVlID0gc2VsZi5wYWQobmV3VmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGluaXQoKTtcblx0cmV0dXJuIHNlbGY7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5GbGF0cGlja3IuZGVmYXVsdENvbmZpZyA9IHtcblxuXHRtb2RlOiBcInNpbmdsZVwiLFxuXG5cdC8qIGlmIHRydWUsIGRhdGVzIHdpbGwgYmUgcGFyc2VkLCBmb3JtYXR0ZWQsIGFuZCBkaXNwbGF5ZWQgaW4gVVRDLlxuIHByZWxvYWRpbmcgZGF0ZSBzdHJpbmdzIHcvIHRpbWV6b25lcyBpcyByZWNvbW1lbmRlZCBidXQgbm90IG5lY2Vzc2FyeSAqL1xuXHR1dGM6IGZhbHNlLFxuXG5cdC8vIHdyYXA6IHNlZSBodHRwczovL2NobWxuLmdpdGh1Yi5pby9mbGF0cGlja3IvI3N0cmFwXG5cdHdyYXA6IGZhbHNlLFxuXG5cdC8vIGVuYWJsZXMgd2VlayBudW1iZXJzXG5cdHdlZWtOdW1iZXJzOiBmYWxzZSxcblxuXHQvLyBhbGxvdyBtYW51YWwgZGF0ZXRpbWUgaW5wdXRcblx0YWxsb3dJbnB1dDogZmFsc2UsXG5cblx0LypcbiBcdGNsaWNraW5nIG9uIGlucHV0IG9wZW5zIHRoZSBkYXRlKHRpbWUpcGlja2VyLlxuIFx0ZGlzYWJsZSBpZiB5b3Ugd2lzaCB0byBvcGVuIHRoZSBjYWxlbmRhciBtYW51YWxseSB3aXRoIC5vcGVuKClcbiAqL1xuXHRjbGlja09wZW5zOiB0cnVlLFxuXG5cdC8vIGRpc3BsYXkgdGltZSBwaWNrZXIgaW4gMjQgaG91ciBtb2RlXG5cdHRpbWVfMjRocjogZmFsc2UsXG5cblx0Ly8gZW5hYmxlcyB0aGUgdGltZSBwaWNrZXIgZnVuY3Rpb25hbGl0eVxuXHRlbmFibGVUaW1lOiBmYWxzZSxcblxuXHQvLyBub0NhbGVuZGFyOiB0cnVlIHdpbGwgaGlkZSB0aGUgY2FsZW5kYXIuIHVzZSBmb3IgYSB0aW1lIHBpY2tlciBhbG9uZyB3LyBlbmFibGVUaW1lXG5cdG5vQ2FsZW5kYXI6IGZhbHNlLFxuXG5cdC8vIG1vcmUgZGF0ZSBmb3JtYXQgY2hhcnMgYXQgaHR0cHM6Ly9jaG1sbi5naXRodWIuaW8vZmxhdHBpY2tyLyNkYXRlZm9ybWF0XG5cdGRhdGVGb3JtYXQ6IFwiWS1tLWRcIixcblxuXHQvLyBhbHRJbnB1dCAtIHNlZSBodHRwczovL2NobWxuLmdpdGh1Yi5pby9mbGF0cGlja3IvI2FsdGlucHV0XG5cdGFsdElucHV0OiBmYWxzZSxcblxuXHQvLyB0aGUgY3JlYXRlZCBhbHRJbnB1dCBlbGVtZW50IHdpbGwgaGF2ZSB0aGlzIGNsYXNzLlxuXHRhbHRJbnB1dENsYXNzOiBcImZsYXRwaWNrci1pbnB1dCBmb3JtLWNvbnRyb2wgaW5wdXRcIixcblxuXHQvLyBzYW1lIGFzIGRhdGVGb3JtYXQsIGJ1dCBmb3IgYWx0SW5wdXRcblx0YWx0Rm9ybWF0OiBcIkYgaiwgWVwiLCAvLyBkZWZhdWx0cyB0byBlLmcuIEp1bmUgMTAsIDIwMTZcblxuXHQvLyBkZWZhdWx0RGF0ZSAtIGVpdGhlciBhIGRhdGVzdHJpbmcgb3IgYSBkYXRlIG9iamVjdC4gdXNlZCBmb3IgZGF0ZXRpbWVwaWNrZXJcInMgaW5pdGlhbCB2YWx1ZVxuXHRkZWZhdWx0RGF0ZTogbnVsbCxcblxuXHQvLyB0aGUgbWluaW11bSBkYXRlIHRoYXQgdXNlciBjYW4gcGljayAoaW5jbHVzaXZlKVxuXHRtaW5EYXRlOiBudWxsLFxuXG5cdC8vIHRoZSBtYXhpbXVtIGRhdGUgdGhhdCB1c2VyIGNhbiBwaWNrIChpbmNsdXNpdmUpXG5cdG1heERhdGU6IG51bGwsXG5cblx0Ly8gZGF0ZXBhcnNlciB0aGF0IHRyYW5zZm9ybXMgYSBnaXZlbiBzdHJpbmcgdG8gYSBkYXRlIG9iamVjdFxuXHRwYXJzZURhdGU6IG51bGwsXG5cblx0Ly8gZGF0ZWZvcm1hdHRlciB0aGF0IHRyYW5zZm9ybXMgYSBnaXZlbiBkYXRlIG9iamVjdCB0byBhIHN0cmluZywgYWNjb3JkaW5nIHRvIHBhc3NlZCBmb3JtYXRcblx0Zm9ybWF0RGF0ZTogbnVsbCxcblxuXHRnZXRXZWVrOiBmdW5jdGlvbiBnZXRXZWVrKGdpdmVuRGF0ZSkge1xuXHRcdHZhciBkYXRlID0gbmV3IERhdGUoZ2l2ZW5EYXRlLmdldFRpbWUoKSk7XG5cdFx0ZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuXHRcdC8vIFRodXJzZGF5IGluIGN1cnJlbnQgd2VlayBkZWNpZGVzIHRoZSB5ZWFyLlxuXHRcdGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIDMgLSAoZGF0ZS5nZXREYXkoKSArIDYpICUgNyk7XG5cdFx0Ly8gSmFudWFyeSA0IGlzIGFsd2F5cyBpbiB3ZWVrIDEuXG5cdFx0dmFyIHdlZWsxID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCA0KTtcblx0XHQvLyBBZGp1c3QgdG8gVGh1cnNkYXkgaW4gd2VlayAxIGFuZCBjb3VudCBudW1iZXIgb2Ygd2Vla3MgZnJvbSBkYXRlIHRvIHdlZWsxLlxuXHRcdHJldHVybiAxICsgTWF0aC5yb3VuZCgoKGRhdGUuZ2V0VGltZSgpIC0gd2VlazEuZ2V0VGltZSgpKSAvIDg2NDAwMDAwIC0gMyArICh3ZWVrMS5nZXREYXkoKSArIDYpICUgNykgLyA3KTtcblx0fSxcblxuXHQvLyBzZWUgaHR0cHM6Ly9jaG1sbi5naXRodWIuaW8vZmxhdHBpY2tyLyNkaXNhYmxlXG5cdGVuYWJsZTogW10sXG5cblx0Ly8gc2VlIGh0dHBzOi8vY2htbG4uZ2l0aHViLmlvL2ZsYXRwaWNrci8jZGlzYWJsZVxuXHRkaXNhYmxlOiBbXSxcblxuXHQvLyBkaXNwbGF5IHRoZSBzaG9ydCB2ZXJzaW9uIG9mIG1vbnRoIG5hbWVzIC0gZS5nLiBTZXAgaW5zdGVhZCBvZiBTZXB0ZW1iZXJcblx0c2hvcnRoYW5kQ3VycmVudE1vbnRoOiBmYWxzZSxcblxuXHQvLyBkaXNwbGF5cyBjYWxlbmRhciBpbmxpbmUuIHNlZSBodHRwczovL2NobWxuLmdpdGh1Yi5pby9mbGF0cGlja3IvI2lubGluZS1jYWxlbmRhclxuXHRpbmxpbmU6IGZhbHNlLFxuXG5cdC8vIHBvc2l0aW9uIGNhbGVuZGFyIGluc2lkZSB3cmFwcGVyIGFuZCBuZXh0IHRvIHRoZSBpbnB1dCBlbGVtZW50XG5cdC8vIGxlYXZlIGF0IGZhbHNlIHVubGVzcyB5b3Uga25vdyB3aGF0IHlvdVwicmUgZG9pbmdcblx0c3RhdGljOiBmYWxzZSxcblxuXHQvLyBET00gbm9kZSB0byBhcHBlbmQgdGhlIGNhbGVuZGFyIHRvIGluICpzdGF0aWMqIG1vZGVcblx0YXBwZW5kVG86IG51bGwsXG5cblx0Ly8gY29kZSBmb3IgcHJldmlvdXMvbmV4dCBpY29ucy4gdGhpcyBpcyB3aGVyZSB5b3UgcHV0IHlvdXIgY3VzdG9tIGljb24gY29kZSBlLmcuIGZvbnRhd2Vzb21lXG5cdHByZXZBcnJvdzogXCI8c3ZnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgdmlld0JveD0nMCAwIDE3IDE3Jz48Zz48L2c+PHBhdGggZD0nTTUuMjA3IDguNDcxbDcuMTQ2IDcuMTQ3LTAuNzA3IDAuNzA3LTcuODUzLTcuODU0IDcuODU0LTcuODUzIDAuNzA3IDAuNzA3LTcuMTQ3IDcuMTQ2eicgLz48L3N2Zz5cIixcblx0bmV4dEFycm93OiBcIjxzdmcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB2aWV3Qm94PScwIDAgMTcgMTcnPjxnPjwvZz48cGF0aCBkPSdNMTMuMjA3IDguNDcybC03Ljg1NCA3Ljg1NC0wLjcwNy0wLjcwNyA3LjE0Ni03LjE0Ni03LjE0Ni03LjE0OCAwLjcwNy0wLjcwNyA3Ljg1NCA3Ljg1NHonIC8+PC9zdmc+XCIsXG5cblx0Ly8gZW5hYmxlcyBzZWNvbmRzIGluIHRoZSB0aW1lIHBpY2tlclxuXHRlbmFibGVTZWNvbmRzOiBmYWxzZSxcblxuXHQvLyBzdGVwIHNpemUgdXNlZCB3aGVuIHNjcm9sbGluZy9pbmNyZW1lbnRpbmcgdGhlIGhvdXIgZWxlbWVudFxuXHRob3VySW5jcmVtZW50OiAxLFxuXG5cdC8vIHN0ZXAgc2l6ZSB1c2VkIHdoZW4gc2Nyb2xsaW5nL2luY3JlbWVudGluZyB0aGUgbWludXRlIGVsZW1lbnRcblx0bWludXRlSW5jcmVtZW50OiA1LFxuXG5cdC8vIGluaXRpYWwgdmFsdWUgaW4gdGhlIGhvdXIgZWxlbWVudFxuXHRkZWZhdWx0SG91cjogMTIsXG5cblx0Ly8gaW5pdGlhbCB2YWx1ZSBpbiB0aGUgbWludXRlIGVsZW1lbnRcblx0ZGVmYXVsdE1pbnV0ZTogMCxcblxuXHQvLyBkaXNhYmxlIG5hdGl2ZSBtb2JpbGUgZGF0ZXRpbWUgaW5wdXQgc3VwcG9ydFxuXHRkaXNhYmxlTW9iaWxlOiBmYWxzZSxcblxuXHQvLyBkZWZhdWx0IGxvY2FsZVxuXHRsb2NhbGU6IFwiZGVmYXVsdFwiLFxuXG5cdHBsdWdpbnM6IFtdLFxuXG5cdC8vIG9uQ2hhbmdlIGNhbGxiYWNrIHdoZW4gdXNlciBzZWxlY3RzIGEgZGF0ZSBvciB0aW1lXG5cdG9uQ2hhbmdlOiBbXSwgLy8gZnVuY3Rpb24gKGRhdGVPYmosIGRhdGVTdHIpIHt9XG5cblx0Ly8gY2FsbGVkIGV2ZXJ5IHRpbWUgY2FsZW5kYXIgaXMgb3BlbmVkXG5cdG9uT3BlbjogW10sIC8vIGZ1bmN0aW9uIChkYXRlT2JqLCBkYXRlU3RyKSB7fVxuXG5cdC8vIGNhbGxlZCBldmVyeSB0aW1lIGNhbGVuZGFyIGlzIGNsb3NlZFxuXHRvbkNsb3NlOiBbXSwgLy8gZnVuY3Rpb24gKGRhdGVPYmosIGRhdGVTdHIpIHt9XG5cblx0Ly8gY2FsbGVkIGFmdGVyIGNhbGVuZGFyIGlzIHJlYWR5XG5cdG9uUmVhZHk6IFtdLCAvLyBmdW5jdGlvbiAoZGF0ZU9iaiwgZGF0ZVN0cikge31cblxuXHRvblZhbHVlVXBkYXRlOiBbXSxcblxuXHRvbkRheUNyZWF0ZTogW10sXG5cblx0b25Nb250aENoYW5nZTogW10sXG5cblx0b25ZZWFyQ2hhbmdlOiBbXVxufTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbkZsYXRwaWNrci5sMTBucyA9IHtcblx0ZW46IHtcblx0XHR3ZWVrZGF5czoge1xuXHRcdFx0c2hvcnRoYW5kOiBbXCJTdW5cIiwgXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIl0sXG5cdFx0XHRsb25naGFuZDogW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl1cblx0XHR9LFxuXHRcdG1vbnRoczoge1xuXHRcdFx0c2hvcnRoYW5kOiBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl0sXG5cdFx0XHRsb25naGFuZDogW1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl1cblx0XHR9LFxuXHRcdGRheXNJbk1vbnRoOiBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV0sXG5cdFx0Zmlyc3REYXlPZldlZWs6IDAsXG5cdFx0b3JkaW5hbDogZnVuY3Rpb24gb3JkaW5hbChudGgpIHtcblx0XHRcdHZhciBzID0gbnRoICUgMTAwO1xuXHRcdFx0aWYgKHMgPiAzICYmIHMgPCAyMSkgcmV0dXJuIFwidGhcIjtcblx0XHRcdHN3aXRjaCAocyAlIDEwKSB7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0XHRyZXR1cm4gXCJzdFwiO1xuXHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0cmV0dXJuIFwibmRcIjtcblx0XHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRcdHJldHVybiBcInJkXCI7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIFwidGhcIjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHJhbmdlU2VwYXJhdG9yOiBcIiB0byBcIixcblx0XHR3ZWVrQWJicmV2aWF0aW9uOiBcIldrXCIsXG5cdFx0c2Nyb2xsVGl0bGU6IFwiU2Nyb2xsIHRvIGluY3JlbWVudFwiLFxuXHRcdHRvZ2dsZVRpdGxlOiBcIkNsaWNrIHRvIHRvZ2dsZVwiXG5cdH1cbn07XG5cbkZsYXRwaWNrci5sMTBucy5kZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZShGbGF0cGlja3IubDEwbnMuZW4pO1xuRmxhdHBpY2tyLmxvY2FsaXplID0gZnVuY3Rpb24gKGwxMG4pIHtcblx0cmV0dXJuIF9leHRlbmRzKEZsYXRwaWNrci5sMTBucy5kZWZhdWx0LCBsMTBuIHx8IHt9KTtcbn07XG5GbGF0cGlja3Iuc2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG5cdHJldHVybiBfZXh0ZW5kcyhGbGF0cGlja3IuZGVmYXVsdENvbmZpZywgY29uZmlnIHx8IHt9KTtcbn07XG5cbkZsYXRwaWNrci5wcm90b3R5cGUgPSB7XG5cdHBhZDogZnVuY3Rpb24gcGFkKG51bWJlcikge1xuXHRcdHJldHVybiAoXCIwXCIgKyBudW1iZXIpLnNsaWNlKC0yKTtcblx0fSxcblx0cGFyc2VEYXRlOiBmdW5jdGlvbiBwYXJzZURhdGUoZGF0ZSwgdGltZWxlc3MpIHtcblx0XHRpZiAoIWRhdGUpIHJldHVybiBudWxsO1xuXG5cdFx0dmFyIGRhdGVUaW1lUmVnZXggPSAvKFxcZCspL2csXG5cdFx0ICAgIHRpbWVSZWdleCA9IC9eKFxcZHsxLDJ9KVs6XFxzXShcXGRcXGQpP1s6XFxzXT8oXFxkXFxkKT9cXHM/KGF8cHxBfFApPy9pLFxuXHRcdCAgICB0aW1lc3RhbXAgPSAvXihcXGQrKSQvZyxcblx0XHQgICAgZGF0ZV9vcmlnID0gZGF0ZTtcblxuXHRcdGlmIChkYXRlLnRvRml4ZWQgfHwgdGltZXN0YW1wLnRlc3QoZGF0ZSkpIC8vIHRpbWVzdGFtcFxuXHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO2Vsc2UgaWYgKHR5cGVvZiBkYXRlID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRkYXRlID0gZGF0ZS50cmltKCk7XG5cblx0XHRcdGlmIChkYXRlID09PSBcInRvZGF5XCIpIHtcblx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdHRpbWVsZXNzID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcucGFyc2VEYXRlKSBkYXRlID0gdGhpcy5jb25maWcucGFyc2VEYXRlKGRhdGUpO2Vsc2UgaWYgKHRpbWVSZWdleC50ZXN0KGRhdGUpKSB7XG5cdFx0XHRcdC8vIHRpbWUgcGlja2VyXG5cdFx0XHRcdHZhciBtID0gZGF0ZS5tYXRjaCh0aW1lUmVnZXgpLFxuXHRcdFx0XHQgICAgaG91cnMgPSAhbVs0XSA/IG1bMV0gLy8gbWlsaXRhcnkgdGltZSwgbm8gY29udmVyc2lvbiBuZWVkZWRcblx0XHRcdFx0OiBtWzFdICUgMTIgKyAobVs0XS50b0xvd2VyQ2FzZSgpID09PSBcInBcIiA/IDEyIDogMCk7IC8vIGFtL3BtXG5cblx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdGRhdGUuc2V0SG91cnMoaG91cnMsIG1bMl0gfHwgMCwgbVszXSB8fCAwKTtcblx0XHRcdH0gZWxzZSBpZiAoL1okLy50ZXN0KGRhdGUpIHx8IC9HTVQkLy50ZXN0KGRhdGUpKSAvLyBkYXRlc3RyaW5ncyB3LyB0aW1lem9uZVxuXHRcdFx0XHRkYXRlID0gbmV3IERhdGUoZGF0ZSk7ZWxzZSBpZiAoZGF0ZVRpbWVSZWdleC50ZXN0KGRhdGUpICYmIC9eWzAtOV0vLnRlc3QoZGF0ZSkpIHtcblx0XHRcdFx0dmFyIGQgPSBkYXRlLm1hdGNoKGRhdGVUaW1lUmVnZXgpLFxuXHRcdFx0XHQgICAgaXNBTSA9IC8oYW18QU0pJC8udGVzdChkYXRlKSxcblx0XHRcdFx0ICAgIGlzUE0gPSAvKHBtfFBNKSQvLnRlc3QoZGF0ZSk7XG5cblx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKGRbMF0gKyBcIi9cIiArIChkWzFdIHx8IDEpICsgXCIvXCIgKyAoZFsyXSB8fCAxKSArIFwiIFwiICsgKGRbM10gfHwgMCkgKyBcIjpcIiArIChkWzRdIHx8IDApICsgXCI6XCIgKyAoZFs1XSB8fCAwKSk7XG5cblx0XHRcdFx0aWYgKGlzQU0gfHwgaXNQTSkgZGF0ZS5zZXRIb3VycyhkYXRlLmdldEhvdXJzKCkgJSAxMiArIDEyICogaXNQTSk7XG5cdFx0XHR9IGVsc2UgLy8gZmFsbGJhY2tcblx0XHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuXHRcdH0gZWxzZSBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIGRhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7IC8vIGNyZWF0ZSBhIGNvcHlcblxuXHRcdC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cdFx0aWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJmbGF0cGlja3I6IGludmFsaWQgZGF0ZSBcIiArIGRhdGVfb3JpZyk7XG5cdFx0XHRjb25zb2xlLmluZm8odGhpcy5lbGVtZW50KTtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy51dGMgJiYgIWRhdGUuZnBfaXNVVEMpIGRhdGUgPSBkYXRlLmZwX3RvVVRDKCk7XG5cblx0XHRpZiAodGltZWxlc3MgPT09IHRydWUpIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cblx0XHRyZXR1cm4gZGF0ZTtcblx0fVxufTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIF9mbGF0cGlja3Iobm9kZUxpc3QsIGNvbmZpZykge1xuXHR2YXIgbm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlTGlzdCk7IC8vIHN0YXRpYyBsaXN0XG5cdHZhciBpbnN0YW5jZXMgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdHRyeSB7XG5cdFx0XHRub2Rlc1tpXS5fZmxhdHBpY2tyID0gbmV3IEZsYXRwaWNrcihub2Rlc1tpXSwgY29uZmlnIHx8IHt9KTtcblx0XHRcdGluc3RhbmNlcy5wdXNoKG5vZGVzW2ldLl9mbGF0cGlja3IpO1xuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUud2FybihlLCBlLnN0YWNrKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaW5zdGFuY2VzLmxlbmd0aCA9PT0gMSA/IGluc3RhbmNlc1swXSA6IGluc3RhbmNlcztcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmICh0eXBlb2YgSFRNTEVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0Ly8gYnJvd3NlciBlbnZcblx0SFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmZsYXRwaWNrciA9IE5vZGVMaXN0LnByb3RvdHlwZS5mbGF0cGlja3IgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG5cdFx0cmV0dXJuIF9mbGF0cGlja3IodGhpcywgY29uZmlnKTtcblx0fTtcblxuXHRIVE1MRWxlbWVudC5wcm90b3R5cGUuZmxhdHBpY2tyID0gZnVuY3Rpb24gKGNvbmZpZykge1xuXHRcdHJldHVybiBfZmxhdHBpY2tyKFt0aGlzXSwgY29uZmlnKTtcblx0fTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGZsYXRwaWNrcihzZWxlY3RvciwgY29uZmlnKSB7XG5cdHJldHVybiBfZmxhdHBpY2tyKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSwgY29uZmlnKTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmICh0eXBlb2YgalF1ZXJ5ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdGpRdWVyeS5mbi5mbGF0cGlja3IgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG5cdFx0cmV0dXJuIF9mbGF0cGlja3IodGhpcywgY29uZmlnKTtcblx0fTtcbn1cblxuRGF0ZS5wcm90b3R5cGUuZnBfaW5jciA9IGZ1bmN0aW9uIChkYXlzKSB7XG5cdHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCkgKyBwYXJzZUludChkYXlzLCAxMCkpO1xufTtcblxuRGF0ZS5wcm90b3R5cGUuZnBfaXNVVEMgPSBmYWxzZTtcbkRhdGUucHJvdG90eXBlLmZwX3RvVVRDID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgbmV3RGF0ZSA9IG5ldyBEYXRlKHRoaXMuZ2V0VVRDRnVsbFllYXIoKSwgdGhpcy5nZXRVVENNb250aCgpLCB0aGlzLmdldFVUQ0RhdGUoKSwgdGhpcy5nZXRVVENIb3VycygpLCB0aGlzLmdldFVUQ01pbnV0ZXMoKSwgdGhpcy5nZXRVVENTZWNvbmRzKCkpO1xuXG5cdG5ld0RhdGUuZnBfaXNVVEMgPSB0cnVlO1xuXHRyZXR1cm4gbmV3RGF0ZTtcbn07XG5cbi8vIElFOSBjbGFzc0xpc3QgcG9seWZpbGxcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5pZiAoIXdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0ICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiB0eXBlb2YgSFRNTEVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxFbGVtZW50LnByb3RvdHlwZSwgXCJjbGFzc0xpc3RcIiwge1xuXHRcdGdldDogZnVuY3Rpb24gZ2V0KCkge1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdFx0ZnVuY3Rpb24gdXBkYXRlKGZuKSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0XHR2YXIgY2xhc3NlcyA9IHNlbGYuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyksXG5cdFx0XHRcdFx0ICAgIGluZGV4ID0gY2xhc3Nlcy5pbmRleE9mKHZhbHVlKTtcblxuXHRcdFx0XHRcdGZuKGNsYXNzZXMsIGluZGV4LCB2YWx1ZSk7XG5cdFx0XHRcdFx0c2VsZi5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oXCIgXCIpO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcmV0ID0ge1xuXHRcdFx0XHRhZGQ6IHVwZGF0ZShmdW5jdGlvbiAoY2xhc3NlcywgaW5kZXgsIHZhbHVlKSB7XG5cdFx0XHRcdFx0aWYgKCF+aW5kZXgpIGNsYXNzZXMucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdH0pLFxuXG5cdFx0XHRcdHJlbW92ZTogdXBkYXRlKGZ1bmN0aW9uIChjbGFzc2VzLCBpbmRleCkge1xuXHRcdFx0XHRcdGlmICh+aW5kZXgpIGNsYXNzZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0fSksXG5cblx0XHRcdFx0dG9nZ2xlOiB1cGRhdGUoZnVuY3Rpb24gKGNsYXNzZXMsIGluZGV4LCB2YWx1ZSkge1xuXHRcdFx0XHRcdGlmICh+aW5kZXgpIGNsYXNzZXMuc3BsaWNlKGluZGV4LCAxKTtlbHNlIGNsYXNzZXMucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdH0pLFxuXG5cdFx0XHRcdGNvbnRhaW5zOiBmdW5jdGlvbiBjb250YWlucyh2YWx1ZSkge1xuXHRcdFx0XHRcdHJldHVybiAhIX5zZWxmLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLmluZGV4T2YodmFsdWUpO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdGl0ZW06IGZ1bmN0aW9uIGl0ZW0oaSkge1xuXHRcdFx0XHRcdHJldHVybiBzZWxmLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pW2ldIHx8IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXQsIFwibGVuZ3RoXCIsIHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbiBnZXQoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHNlbGYuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLykubGVuZ3RoO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9XG5cdH0pO1xufVxuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIikgbW9kdWxlLmV4cG9ydHMgPSBGbGF0cGlja3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmxhdHBpY2tyL2Rpc3QvZmxhdHBpY2tyLmpzXG4vLyBtb2R1bGUgaWQgPSA2NzFcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwiZnVuY3Rpb24gdmFsaWRhdGUoYmluZGluZykge1xyXG4gIGlmICh0eXBlb2YgYmluZGluZy52YWx1ZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgY29uc29sZS53YXJuKCdbVnVlLWNsaWNrLW91dHNpZGU6XSBwcm92aWRlZCBleHByZXNzaW9uJywgYmluZGluZy5leHByZXNzaW9uLCAnaXMgbm90IGEgZnVuY3Rpb24uJylcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG5cclxuZnVuY3Rpb24gaXNQb3B1cChwb3B1cEl0ZW0sIGVsZW1lbnRzKSB7XHJcbiAgaWYgKCFwb3B1cEl0ZW0gfHwgIWVsZW1lbnRzKSBcclxuICAgIHJldHVybiBmYWxzZVxyXG5cclxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgIGlmIChwb3B1cEl0ZW0uY29udGFpbnMoZWxlbWVudHNbaV0pKSBcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIGlmIChlbGVtZW50c1tpXS5jb250YWlucyhwb3B1cEl0ZW0pKVxyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZVxyXG59XHJcblxyXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgYmluZDogZnVuY3Rpb24gKGVsLCBiaW5kaW5nLCB2Tm9kZSkge1xyXG4gICAgaWYgKCF2YWxpZGF0ZShiaW5kaW5nKSkgcmV0dXJuXHJcblxyXG4gICAgLy8gRGVmaW5lIEhhbmRsZXIgYW5kIGNhY2hlIGl0IG9uIHRoZSBlbGVtZW50XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyKGUpIHtcclxuICAgICAgaWYgKCF2Tm9kZS5jb250ZXh0KSByZXR1cm5cclxuXHJcbiAgICAgIC8vIHNvbWUgY29tcG9uZW50cyBtYXkgaGF2ZSByZWxhdGVkIHBvcHVwIGl0ZW0sIG9uIHdoaWNoIHdlIHNoYWxsIHByZXZlbnQgdGhlIGNsaWNrIG91dHNpZGUgZXZlbnQgaGFuZGxlci5cclxuICAgICAgdmFyIGVsZW1lbnRzID0gZS5wYXRoIHx8IChlLmNvbXBvc2VkUGF0aCAmJiBlLmNvbXBvc2VkUGF0aCgpKVxyXG4gICAgICBlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGggPiAwICYmIGVsZW1lbnRzLnVuc2hpZnQoZS50YXJnZXQpXHJcbiAgICAgIFxyXG4gICAgICBpZiAoZWwuY29udGFpbnMoZS50YXJnZXQpIHx8IGlzUG9wdXAodk5vZGUuY29udGV4dC5wb3B1cEl0ZW0sIGVsZW1lbnRzKSkgcmV0dXJuXHJcblxyXG4gICAgICBiaW5kaW5nLnZhbHVlKGUpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkIEV2ZW50IExpc3RlbmVyc1xyXG4gICAgZWwuX192dWVDbGlja091dHNpZGVfXyA9IGhhbmRsZXJcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcilcclxuICB9LFxyXG5cclxuICB1cGRhdGU6IGZ1bmN0aW9uIChlbCwgYmluZGluZykge1xyXG4gICAgaWYgKHZhbGlkYXRlKGJpbmRpbmcpKSBlbC5fX3Z1ZUNsaWNrT3V0c2lkZV9fID0gYmluZGluZy52YWx1ZVxyXG4gIH0sXHJcbiAgXHJcbiAgdW5iaW5kOiBmdW5jdGlvbiAoZWwsIGJpbmRpbmcpIHtcclxuICAgIC8vIFJlbW92ZSBFdmVudCBMaXN0ZW5lcnNcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWwuX192dWVDbGlja091dHNpZGVfXylcclxuICAgIGRlbGV0ZSBlbC5fX3Z1ZUNsaWNrT3V0c2lkZV9fXHJcblxyXG4gIH1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtY2xpY2stb3V0c2lkZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjc4XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9TaW5nbGVJbnB1dC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDJiMmFlOTdcXFwifSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TaW5nbGVJbnB1dC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2tpbW5oL0NvZGVzL1dlYlNob3AvYWRtaW4tdGVtcGxhdGUvbGFyYXZlbC12dWUtYWRtaW4vbm9kZV9tb2R1bGVzL3Z1ZS1idWxtYS1kYXRlcGlja2VyL3NyYy9TaW5nbGVJbnB1dC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBTaW5nbGVJbnB1dC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDJiMmFlOTdcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00MmIyYWU5N1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1idWxtYS1kYXRlcGlja2VyL3NyYy9TaW5nbGVJbnB1dC52dWVcbi8vIG1vZHVsZSBpZCA9IDY4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vV3JhcHBlcklucHV0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1hYTY3ZTVkY1xcXCJ9IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1dyYXBwZXJJbnB1dC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2tpbW5oL0NvZGVzL1dlYlNob3AvYWRtaW4tdGVtcGxhdGUvbGFyYXZlbC12dWUtYWRtaW4vbm9kZV9tb2R1bGVzL3Z1ZS1idWxtYS1kYXRlcGlja2VyL3NyYy9XcmFwcGVySW5wdXQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gV3JhcHBlcklucHV0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1hYTY3ZTVkY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWFhNjdlNWRjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWJ1bG1hLWRhdGVwaWNrZXIvc3JjL1dyYXBwZXJJbnB1dC52dWVcbi8vIG1vZHVsZSBpZCA9IDY4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDQxYmE4ZTdcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXN0eWx1cy1sb2FkZXI/cGF0aHNbXT1ub2RlX21vZHVsZXMhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5kZXgudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTQ0MWJhOGU3XFxcIn0hLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5kZXgudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL25vZGVfbW9kdWxlcy92dWUtYnVsbWEtZGF0ZXBpY2tlci9zcmMvaW5kZXgudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaW5kZXgudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ0MWJhOGU3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDQxYmE4ZTdcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtYnVsbWEtZGF0ZXBpY2tlci9zcmMvaW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSA2ODdcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5kYXRlKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZGF0ZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICBjbGFzczogX3ZtLmlucHV0Q2xhc3MsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogX3ZtLnBsYWNlaG9sZGVyLFxuICAgICAgXCJyZWFkb25seVwiOiBfdm0ucmVhZG9ubHlcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZGF0ZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5kYXRlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNDJiMmFlOTdcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00MmIyYWU5N1wifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi92dWUtYnVsbWEtZGF0ZXBpY2tlci9zcmMvU2luZ2xlSW5wdXQudnVlXG4vLyBtb2R1bGUgaWQgPSA3MzNcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKF92bS53cmFwID8gJ1dyYXBwZXJJbnB1dCcgOiAnU2luZ2xlSW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwiY2xpY2stb3V0c2lkZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LWNsaWNrLW91dHNpZGVcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNsb3NlUGlja2VyKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2xvc2VQaWNrZXJcIlxuICAgIH1dLFxuICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0ucGxhY2Vob2xkZXIsXG4gICAgICBcImlucHV0Q2xhc3NcIjogX3ZtLmlucHV0Q2xhc3NcbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS5kYXRlKSxcbiAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgX3ZtLmRhdGUgPSAkJHZcbiAgICAgIH0sXG4gICAgICBleHByZXNzaW9uOiBcImRhdGVcIlxuICAgIH1cbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00NDFiYThlN1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQ0MWJhOGU3XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS1kYXRlcGlja2VyL3NyYy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDczNFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtYW5jZXN0b3JcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudFwiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiQmFzaWNzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2RhdGVwaWNrZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaW5wdXRDbGFzc1wiOiB7XG4gICAgICAgIHRlc3Q6IHRydWVcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vZGVsOiB7XG4gICAgICB2YWx1ZTogKF92bS52YWx1ZSksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS52YWx1ZSA9ICQkdlxuICAgICAgfSxcbiAgICAgIGV4cHJlc3Npb246IFwidmFsdWVcIlxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnZGF0ZXBpY2tlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkV1cm9wZWFuIEZvcm1hdCAoJ2QtbS1ZJylcIixcbiAgICAgIFwiY29uZmlnXCI6IHtcbiAgICAgICAgZGF0ZUZvcm1hdDogJ2QtbS1ZJyxcbiAgICAgICAgc3RhdGljOiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCdkYXRlcGlja2VyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiQW1lcmljYW4gRm9ybWF0ICgnbS9kL1knKVwiLFxuICAgICAgXCJjb25maWdcIjoge1xuICAgICAgICBkYXRlRm9ybWF0OiAnbS9kL1knXG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCdkYXRlcGlja2VyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRmFuY3kgVGV4dHVhbCBGb3JtYXQgKCdsLCBGIGosIFknKVwiLFxuICAgICAgXCJjb25maWdcIjoge1xuICAgICAgICBkYXRlRm9ybWF0OiAnbCwgRiBqLCBZJ1xuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnZGF0ZXBpY2tlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIm1pbkRhdGU6IHRvZGF5XCIsXG4gICAgICBcImNvbmZpZ1wiOiB7XG4gICAgICAgIG1pbkRhdGU6IF92bS50b2RheSxcbiAgICAgICAgZGVmYXVsdERhdGU6IF92bS50b2RheVxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnZGF0ZXBpY2tlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIm1pbkRhdGU6ICcyMDE2LTA5LTIwJ1wiLFxuICAgICAgXCJjb25maWdcIjoge1xuICAgICAgICBtaW5EYXRlOiAnMjAxNi0wOS0yMCdcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2RhdGVwaWNrZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJtaW5EYXRlOiBuZXcgRGF0ZSgnU2VwdGVtYmVyIDIsIDIwMTUnKVwiLFxuICAgICAgXCJjb25maWdcIjoge1xuICAgICAgICBtaW5EYXRlOiBuZXcgRGF0ZSgnU2VwdGVtYmVyIDIsIDIwMTUnKVxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnZGF0ZXBpY2tlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBfdm0ucGxhY2Vob2xkZXIsXG4gICAgICBcImNvbmZpZ1wiOiB7XG4gICAgICAgIG1pbkRhdGU6ICd0b2RheScsXG4gICAgICAgIG1heERhdGU6IF92bS5tYXhEYXRlXG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudCBpcy12ZXJ0aWNhbFwiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiRm9ybSBhZGRvbnNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RhdGVwaWNrZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaW5wdXRDbGFzc1wiOiB7XG4gICAgICAgIHRlc3Q6IHRydWVcbiAgICAgIH0sXG4gICAgICBcImNvbmZpZ1wiOiB7XG4gICAgICAgIHdyYXA6IHRydWVcbiAgICAgIH0sXG4gICAgICBcInJlYWRvbmx5XCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2FsZW5kYXJcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkYXRhLWNsZWFyXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1jbG9zZVwiXG4gIH0pXSldKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiRGlzcGxheSB3ZWVrIG51bWJlcnNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnZGF0ZXBpY2tlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkVuYWJsZWQgd2VlayBudW1iZXJzXCIsXG4gICAgICBcImNvbmZpZ1wiOiB7XG4gICAgICAgIHdlZWtOdW1iZXJzOiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJEYXRlIFJhbmdlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2RhdGVwaWNrZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJTZWxlY3QgYSByYW5nZVwiLFxuICAgICAgXCJjb25maWdcIjoge1xuICAgICAgICBtb2RlOiAncmFuZ2UnXG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtYW5jZXN0b3JcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudCBpcy12ZXJ0aWNhbFwiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiUHJlbG9hZCBkYXRlIGFuZCB0aW1lXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2RhdGVwaWNrZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJUaGUgcmVhbCBpbnB1dCBpcyBoaWRkZW4gOl4pXCIsXG4gICAgICBcImNvbmZpZ1wiOiB7XG4gICAgICAgIGFsdElucHV0OiBmYWxzZSxcbiAgICAgICAgYWx0Rm9ybWF0OiAnRiBqLCBZJ1xuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnZGF0ZXBpY2tlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb25maWdcIjoge1xuICAgICAgICBkZWZhdWx0RGF0ZTogJzIwMTYtMDMtMDEgMDM6MzA6MDAgLTAzMDAnLFxuICAgICAgICBlbmFibGVUaW1lOiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCdkYXRlcGlja2VyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbmZpZ1wiOiB7XG4gICAgICAgIGRlZmF1bHREYXRlOiAnMjAxNi0xMi0yN1QxNjoxNjoyMi41ODVaJyxcbiAgICAgICAgZW5hYmxlVGltZTogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiVVRDIG1vZGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnZGF0ZXBpY2tlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb25maWdcIjoge1xuICAgICAgICB1dGM6IHRydWUsXG4gICAgICAgIGRlZmF1bHREYXRlOiAnMjAxNi0wMy0wMSAwMzozMDowMCAtMDMwMCcsXG4gICAgICAgIGVuYWJsZVRpbWU6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2RhdGVwaWNrZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29uZmlnXCI6IHtcbiAgICAgICAgdXRjOiB0cnVlLFxuICAgICAgICBkZWZhdWx0RGF0ZTogJzIwMTYtMTItMjdUMTY6MTY6MjIuNTg1WicsXG4gICAgICAgIGVuYWJsZVRpbWU6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50XCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJJbmxpbmUgb3IgZW1iZWRkZWQgY2FsZW5kYXJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnZGF0ZXBpY2tlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBpY2sgZGF0ZSBhbmQgdGltZVwiLFxuICAgICAgXCJjb25maWdcIjoge1xuICAgICAgICBpbmxpbmU6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1hbmNlc3RvclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50IGlzLXZlcnRpY2FsXCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJEYXRlVGltZSBQaWNrZXJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnZGF0ZXBpY2tlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBpY2sgZGF0ZSBhbmQgdGltZVwiLFxuICAgICAgXCJjb25maWdcIjoge1xuICAgICAgICBlbmFibGVUaW1lOiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCdkYXRlcGlja2VyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiMjQgaG91ciB0aW1lXCIsXG4gICAgICBcImNvbmZpZ1wiOiB7XG4gICAgICAgIGVuYWJsZVRpbWU6IHRydWUsXG4gICAgICAgIHRpbWVfMjRocjogdHJ1ZSxcbiAgICAgICAgZGF0ZUZvcm1hdDogJ1ktbS1kIEg6aSdcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2RhdGVwaWNrZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJQaWNrIGRhdGUgYW5kIHRpbWVcIixcbiAgICAgIFwiY29uZmlnXCI6IHtcbiAgICAgICAgZW5hYmxlVGltZTogdHJ1ZSxcbiAgICAgICAgZW5hYmxlU2Vjb25kczogdHJ1ZSxcbiAgICAgICAgZGF0ZUZvcm1hdDogJ1ktbS1kIGg6aTpTIEsnXG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJUaW1lIFBpY2tlclwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCdkYXRlcGlja2VyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiUGljayB0aW1lXCIsXG4gICAgICBcImNvbmZpZ1wiOiB7XG4gICAgICAgIGVuYWJsZVRpbWU6IHRydWUsXG4gICAgICAgIGVuYWJsZVNlY29uZHM6IHRydWUsXG4gICAgICAgIG5vQ2FsZW5kYXI6IHRydWVcbiAgICAgIH0sXG4gICAgICBcInZhbHVlXCI6IFwiMDk6MDA6MDBcIlxuICAgIH1cbiAgfSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnQgaXMtdmVydGljYWxcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIkRpc2FibGUgc3BlY2lmaWMgZGF0ZXMgb3IgZGF0ZSBpbnRlcnZhbHNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnZGF0ZXBpY2tlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcImRpc2FibGVkIGZyb20gSnVseSA2LTlcIixcbiAgICAgIFwiY29uZmlnXCI6IHtcbiAgICAgICAgZGlzYWJsZTogW3tcbiAgICAgICAgICBmcm9tOiAnMjAxNi0wNy0wNicsXG4gICAgICAgICAgdG86ICcyMDE2LTA3LTA5J1xuICAgICAgICB9LCAnMjAxNi0wNy0yNCddLFxuICAgICAgICBtaW5EYXRlOiAndG9kYXknXG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCdkYXRlcGlja2VyJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiZGlzYWJsZWQgU2VwdGVtYmVyIDYtOSAmIEF1Z3VzdCAyNS0zMSAyMDE2XCIsXG4gICAgICBcImNvbmZpZ1wiOiB7XG4gICAgICAgIGRpc2FibGU6IFt7XG4gICAgICAgICAgZnJvbTogJzIwMTYtMDktMDYnLFxuICAgICAgICAgIHRvOiAnMjAxNi0wOS0wOSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIGZyb206ICcyMDE2LTA4LTI1JyxcbiAgICAgICAgICB0bzogJzIwMTYtMDgtMzEnXG4gICAgICAgIH1dLFxuICAgICAgICBtaW5EYXRlOiAndG9kYXknLFxuICAgICAgICBkYXRlRm9ybWF0OiAnWS1tLWQnXG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF9jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJTZXR0aW5nIG9wdGlvbnMgZHluYW1pY2FsbHlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnZGF0ZXBpY2tlcicsIHtcbiAgICByZWY6IFwiY2hlY2tJblwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiQ2hlY2stSW4gRGF0ZVwiLFxuICAgICAgXCJjb25maWdcIjoge1xuICAgICAgICBtaW5EYXRlOiBuZXcgRGF0ZSgpXG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCdkYXRlcGlja2VyJywge1xuICAgIHJlZjogXCJjaGVja091dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiQ2hlY2sgT3V0IERhdGVcIixcbiAgICAgIFwiY29uZmlnXCI6IHtcbiAgICAgICAgbWluRGF0ZTogbmV3IERhdGUoKVxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWFuY2VzdG9yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnRcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIlNldHRpbmcgY3VzdG9tIGRlZmF1bHRzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2RhdGVwaWNrZXInLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29uZmlnXCI6IHtcbiAgICAgICAgcHJldkFycm93OiAnPGkgY2xhc3M9XFwnZmEgZmEtYW5nbGUtbGVmdFxcJz48L2k+JyxcbiAgICAgICAgbmV4dEFycm93OiAnPGkgY2xhc3M9XFwnZmEgZmEtYW5nbGUtcmlnaHRcXCc+PC9pPidcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50XCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJMb2NhbGl6YXRpb25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnZGF0ZXBpY2tlcicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJjb25maWdcIjoge1xuICAgICAgICBsb2NhbGU6IF92bS5sMTBuXG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNTcyNTdjMTZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01NzI1N2MxNlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL0RhdGVwaWNrZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA3Mzhcbi8vIG1vZHVsZSBjaHVua3MgPSA2IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaGFzLWFkZG9ucyBmbGF0cGlja3JcIixcbiAgICBjbGFzczogKCBfb2JqID0ge30sIF9vYmpbKFwiaGFzLWFkZG9ucy1cIiArIF92bS5hbGlnbm1lbnQpXSA9IF92bS5hbGlnbm1lbnQsIF9vYmogKSxcbiAgICBhdHRyczoge1xuICAgICAgXCJkYXRhLXdyYXBcIjogXCJ0cnVlXCIsXG4gICAgICBcImRhdGEtY2xpY2tPcGVuc1wiOiBcImZhbHNlXCJcbiAgICB9XG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChfdm0uZGF0ZSksXG4gICAgICBleHByZXNzaW9uOiBcImRhdGVcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgY2xhc3M6IF92bS5pbnB1dENsYXNzLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IF92bS5wbGFjZWhvbGRlcixcbiAgICAgIFwicmVhZG9ubHlcIjogX3ZtLnJlYWRvbmx5LFxuICAgICAgXCJkYXRhLWlucHV0XCI6IFwiXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uZGF0ZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5kYXRlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF92bS5fdChcImRlZmF1bHRcIildLCAyKVxuICB2YXIgX29iajtcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYWE2N2U1ZGNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1hYTY3ZTVkY1wifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi92dWUtYnVsbWEtZGF0ZXBpY2tlci9zcmMvV3JhcHBlcklucHV0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzU3XG4vLyBtb2R1bGUgY2h1bmtzID0gNiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDQxYmE4ZTdcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/cGF0aHNbXT1ub2RlX21vZHVsZXMhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI2MzNmZDQ4Y1wiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDQxYmE4ZTdcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/cGF0aHNbXT1ub2RlX21vZHVsZXMhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDQxYmE4ZTdcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL3N0eWx1cy1sb2FkZXIvaW5kZXguanM/cGF0aHNbXT1ub2RlX21vZHVsZXMhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDQxYmE4ZTdcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3N0eWx1cy1sb2FkZXI/cGF0aHNbXT1ub2RlX21vZHVsZXMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS1kYXRlcGlja2VyL3NyYy9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDc4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTcyNTdjMTZcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXRlcGlja2VyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiZDdkYWRiNzBcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTcyNTdjMTZcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9EYXRlcGlja2VyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01NzI1N2MxNlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0RhdGVwaWNrZXIudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01NzI1N2MxNlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL0RhdGVwaWNrZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA3ODdcbi8vIG1vZHVsZSBjaHVua3MgPSA2Il0sInNvdXJjZVJvb3QiOiIifQ==
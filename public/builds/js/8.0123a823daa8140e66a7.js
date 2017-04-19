webpackJsonp([8],{

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(771)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(583),
  /* template */
  __webpack_require__(708),
  /* scopeId */
  "data-v-004b08b4",
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/components/Collapse.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Collapse.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-004b08b4", Component.options)
  } else {
    hotAPI.reload("data-v-004b08b4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.Collapse = __webpack_require__(683);
exports.Item = __webpack_require__(684);

/***/ }),

/***/ 551:
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

exports.default = {
  props: {
    isFullwidth: Boolean,
    accordion: Boolean
  },

  computed: {
    $collapseItems: function $collapseItems() {
      return this.$children.filter(function (child) {
        return child._isCollapseItem;
      });
    }
  },

  methods: {
    openByIndex: function openByIndex(index) {
      if (this.accordion) {
        this.$collapseItems.forEach(function (item, i) {
          if (i !== index) {
            item.isActived = false;
          }
        });
      }
    }
  }

};

/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animejs = __webpack_require__(677);

var _animejs2 = _interopRequireDefault(_animejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    selected: Boolean,
    title: {
      type: String,
      required: true
    }
  },

  data: function data() {
    return {
      isActived: this.selected
    };
  },
  created: function created() {
    this._isCollapseItem = true;
  },
  mounted: function mounted() {
    this.$on('open', this.$parent.openByIndex);
    if (this.isActived) {
      this.$emit('open', this.index);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.anime && this.targets) {
      _animejs2.default.remove(this.targets);
    }
    this.$off('open', this.$parent.openByIndex);
  },


  computed: {
    index: function index() {
      return this.$parent.$collapseItems.indexOf(this);
    }
  },

  methods: {
    toggle: function toggle() {
      if (this.isActived = !this.isActived) {
        this.$emit('open', this.index);
      }
    },
    getAnime: function getAnime(targets) {
      if (this.anime) return this.anime;
      return this.anime = (0, _animejs2.default)({ targets: targets });
    },
    cancel: function cancel() {
      this.anime.pause();
    },
    before: function before(targets) {
      if (!this.targets) this.targets = targets;
      targets.removeAttribute('style');
    },
    enter: function enter(targets, done) {
      var height = targets.scrollHeight;
      targets.style.height = 0;
      targets.style.opacity = 0;
      this.getAnime(targets).play({
        targets: targets,
        duration: 377,
        easing: 'easeOutExpo',
        opacity: [0, 1],
        height: height,
        complete: function complete() {
          targets.removeAttribute('style');
          done();
        }
      });
    },
    leave: function leave(targets, complete) {
      this.getAnime(targets).play({
        targets: targets,
        duration: 377,
        easing: 'easeOutExpo',
        opacity: [1, 0],
        height: 0,
        complete: complete
      });
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

/***/ 583:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueBulmaCollapse = __webpack_require__(540);

exports.default = {
  components: {
    Collapse: _vueBulmaCollapse.Collapse,
    CollapseItem: _vueBulmaCollapse.Item
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

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.tile.is-child[data-v-004b08b4] {\n  width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.collapse-item .card-header {\n  cursor: pointer;\n}\n.collapse-item .card-header-icon {\n  transition: -webkit-transform .377s ease;\n  transition: transform .377s ease;\n  transition: transform .377s ease, -webkit-transform .377s ease;\n}\n.collapse-item .card-content {\n  padding-top: 0;\n  padding-bottom: 0;\n  overflow: hidden;\n}\n.collapse-item .card-content-box {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.collapse-item.is-active > .card-header > .card-header-icon {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n", ""]);

// exports


/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.collapse.is-fullwidth {\n  width: 100%;\n}\n", "", {"version":3,"sources":["/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-collapse/src/Collapse.vue?241911d8"],"names":[],"mappings":";AAmCA;EACA,YAAA;CACA","file":"Collapse.vue","sourcesContent":["<template>\n  <div class=\"collapse is-fullwidth\">\n    <slot></slot>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    isFullwidth: Boolean,\n    accordion: Boolean\n  },\n\n  computed: {\n    $collapseItems () {\n      return this.$children.filter(child => child._isCollapseItem)\n    }\n  },\n\n  methods: {\n    openByIndex (index) {\n      if (this.accordion) {\n        this.$collapseItems.forEach((item, i) => {\n          if (i !== index) {\n            item.isActived = false\n          }\n        })\n      }\n    }\n  }\n\n}\n</script>\n\n<style>\n.collapse.is-fullwidth {\n  width: 100%;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Anime v1.1.3
 * http://anime-js.com
 * JavaScript animation engine
 * Copyright (c) 2016 Julian Garnier
 * http://juliangarnier.com
 * Released under the MIT license
 */

(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.anime = factory();
  }
}(this, function () {

  var version = '1.1.3';

  // Defaults

  var defaultSettings = {
    duration: 1000,
    delay: 0,
    loop: false,
    autoplay: true,
    direction: 'normal',
    easing: 'easeOutElastic',
    elasticity: 400,
    round: false,
    begin: undefined,
    update: undefined,
    complete: undefined
  }

  // Transforms

  var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skewX', 'skewY'];
  var transform, transformStr = 'transform';

  // Utils

  var is = {
    arr: function(a) { return Array.isArray(a) },
    obj: function(a) { return Object.prototype.toString.call(a).indexOf('Object') > -1 },
    svg: function(a) { return a instanceof SVGElement },
    dom: function(a) { return a.nodeType || is.svg(a) },
    num: function(a) { return !isNaN(parseInt(a)) },
    str: function(a) { return typeof a === 'string' },
    fnc: function(a) { return typeof a === 'function' },
    und: function(a) { return typeof a === 'undefined' },
    nul: function(a) { return typeof a === 'null' },
    hex: function(a) { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a) },
    rgb: function(a) { return /^rgb/.test(a) },
    hsl: function(a) { return /^hsl/.test(a) },
    col: function(a) { return (is.hex(a) || is.rgb(a) || is.hsl(a)) }
  }

  // Easings functions adapted from http://jqueryui.com/

  var easings = (function() {
    var eases = {};
    var names = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];
    var functions = {
      Sine: function(t) { return 1 + Math.sin(Math.PI / 2 * t - Math.PI / 2); },
      Circ: function(t) { return 1 - Math.sqrt( 1 - t * t ); },
      Elastic: function(t, m) {
        if( t === 0 || t === 1 ) return t;
        var p = (1 - Math.min(m, 998) / 1000), st = t / 1, st1 = st - 1, s = p / ( 2 * Math.PI ) * Math.asin( 1 );
        return -( Math.pow( 2, 10 * st1 ) * Math.sin( ( st1 - s ) * ( 2 * Math.PI ) / p ) );
      },
      Back: function(t) { return t * t * ( 3 * t - 2 ); },
      Bounce: function(t) {
        var pow2, bounce = 4;
        while ( t < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
        return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - t, 2 );
      }
    }
    names.forEach(function(name, i) {
      functions[name] = function(t) {
        return Math.pow( t, i + 2 );
      }
    });
    Object.keys(functions).forEach(function(name) {
      var easeIn = functions[name];
      eases['easeIn' + name] = easeIn;
      eases['easeOut' + name] = function(t, m) { return 1 - easeIn(1 - t, m); };
      eases['easeInOut' + name] = function(t, m) { return t < 0.5 ? easeIn(t * 2, m) / 2 : 1 - easeIn(t * -2 + 2, m) / 2; };
      eases['easeOutIn' + name] = function(t, m) { return t < 0.5 ? (1 - easeIn(1 - 2 * t, m)) / 2 : (easeIn(t * 2 - 1, m) + 1) / 2; };
    });
    eases.linear = function(t) { return t; };
    return eases;
  })();

  // Strings

  var numberToString = function(val) {
    return (is.str(val)) ? val : val + '';
  }

  var stringToHyphens = function(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  var selectString = function(str) {
    if (is.col(str)) return false;
    try {
      var nodes = document.querySelectorAll(str);
      return nodes;
    } catch(e) {
      return false;
    }
  }

  // Numbers

  var random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Arrays

  var flattenArray = function(arr) {
    return arr.reduce(function(a, b) {
      return a.concat(is.arr(b) ? flattenArray(b) : b);
    }, []);
  }

  var toArray = function(o) {
    if (is.arr(o)) return o;
    if (is.str(o)) o = selectString(o) || o;
    if (o instanceof NodeList || o instanceof HTMLCollection) return [].slice.call(o);
    return [o];
  }

  var arrayContains = function(arr, val) {
    return arr.some(function(a) { return a === val; });
  }

  var groupArrayByProps = function(arr, propsArr) {
    var groups = {};
    arr.forEach(function(o) {
      var group = JSON.stringify(propsArr.map(function(p) { return o[p]; }));
      groups[group] = groups[group] || [];
      groups[group].push(o);
    });
    return Object.keys(groups).map(function(group) {
      return groups[group];
    });
  }

  var removeArrayDuplicates = function(arr) {
    return arr.filter(function(item, pos, self) {
      return self.indexOf(item) === pos;
    });
  }

  // Objects

  var cloneObject = function(o) {
    var newObject = {};
    for (var p in o) newObject[p] = o[p];
    return newObject;
  }

  var mergeObjects = function(o1, o2) {
    for (var p in o2) o1[p] = !is.und(o1[p]) ? o1[p] : o2[p];
    return o1;
  }

  // Colors

  var hexToRgb = function(hex) {
    var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var hex = hex.replace(rgx, function(m, r, g, b) { return r + r + g + g + b + b; });
    var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(rgb[1], 16);
    var g = parseInt(rgb[2], 16);
    var b = parseInt(rgb[3], 16);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  var hslToRgb = function(hsl) {
    var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hsl);
    var h = parseInt(hsl[1]) / 360;
    var s = parseInt(hsl[2]) / 100;
    var l = parseInt(hsl[3]) / 100;
    var hue2rgb = function(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }
    var r, g, b;
    if (s == 0) {
      r = g = b = l;
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    return 'rgb(' + r * 255 + ',' + g * 255 + ',' + b * 255 + ')';
  }

  var colorToRgb = function(val) {
    if (is.rgb(val)) return val;
    if (is.hex(val)) return hexToRgb(val);
    if (is.hsl(val)) return hslToRgb(val);
  }

  // Units

  var getUnit = function(val) {
    return /([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(val)[2];
  }

  var addDefaultTransformUnit = function(prop, val, intialVal) {
    if (getUnit(val)) return val;
    if (prop.indexOf('translate') > -1) return getUnit(intialVal) ? val + getUnit(intialVal) : val + 'px';
    if (prop.indexOf('rotate') > -1 || prop.indexOf('skew') > -1) return val + 'deg';
    return val;
  }

  // Values

  var getCSSValue = function(el, prop) {
    // First check if prop is a valid CSS property
    if (prop in el.style) {
      // Then return the property value or fallback to '0' when getPropertyValue fails
      return getComputedStyle(el).getPropertyValue(stringToHyphens(prop)) || '0';
    }
  }

  var getTransformValue = function(el, prop) {
    var defaultVal = prop.indexOf('scale') > -1 ? 1 : 0;
    var str = el.style.transform;
    if (!str) return defaultVal;
    var rgx = /(\w+)\((.+?)\)/g;
    var match = [];
    var props = [];
    var values = [];
    while (match = rgx.exec(str)) {
      props.push(match[1]);
      values.push(match[2]);
    }
    var val = values.filter(function(f, i) { return props[i] === prop; });
    return val.length ? val[0] : defaultVal;
  }

  var getAnimationType = function(el, prop) {
    if ( is.dom(el) && arrayContains(validTransforms, prop)) return 'transform';
    if ( is.dom(el) && (el.getAttribute(prop) || (is.svg(el) && el[prop]))) return 'attribute';
    if ( is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) return 'css';
    if (!is.nul(el[prop]) && !is.und(el[prop])) return 'object';
  }

  var getInitialTargetValue = function(target, prop) {
    switch (getAnimationType(target, prop)) {
      case 'transform': return getTransformValue(target, prop);
      case 'css': return getCSSValue(target, prop);
      case 'attribute': return target.getAttribute(prop);
    }
    return target[prop] || 0;
  }

  var getValidValue = function(values, val, originalCSS) {
    if (is.col(val)) return colorToRgb(val);
    if (getUnit(val)) return val;
    var unit = getUnit(values.to) ? getUnit(values.to) : getUnit(values.from);
    if (!unit && originalCSS) unit = getUnit(originalCSS);
    return unit ? val + unit : val;
  }

  var decomposeValue = function(val) {
    var rgx = /-?\d*\.?\d+/g;
    return {
      original: val,
      numbers: numberToString(val).match(rgx) ? numberToString(val).match(rgx).map(Number) : [0],
      strings: numberToString(val).split(rgx)
    }
  }

  var recomposeValue = function(numbers, strings, initialStrings) {
    return strings.reduce(function(a, b, i) {
      var b = (b ? b : initialStrings[i - 1]);
      return a + numbers[i - 1] + b;
    });
  }

  // Animatables

  var getAnimatables = function(targets) {
    var targets = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
    return targets.map(function(t, i) {
      return { target: t, id: i };
    });
  }

  // Properties

  var getProperties = function(params, settings) {
    var props = [];
    for (var p in params) {
      if (!defaultSettings.hasOwnProperty(p) && p !== 'targets') {
        var prop = is.obj(params[p]) ? cloneObject(params[p]) : {value: params[p]};
        prop.name = p;
        props.push(mergeObjects(prop, settings));
      }
    }
    return props;
  }

  var getPropertiesValues = function(target, prop, value, i) {
    var values = toArray( is.fnc(value) ? value(target, i) : value);
    return {
      from: (values.length > 1) ? values[0] : getInitialTargetValue(target, prop),
      to: (values.length > 1) ? values[1] : values[0]
    }
  }

  // Tweens

  var getTweenValues = function(prop, values, type, target) {
    var valid = {};
    if (type === 'transform') {
      valid.from = prop + '(' + addDefaultTransformUnit(prop, values.from, values.to) + ')';
      valid.to = prop + '(' + addDefaultTransformUnit(prop, values.to) + ')';
    } else {
      var originalCSS = (type === 'css') ? getCSSValue(target, prop) : undefined;
      valid.from = getValidValue(values, values.from, originalCSS);
      valid.to = getValidValue(values, values.to, originalCSS);
    }
    return { from: decomposeValue(valid.from), to: decomposeValue(valid.to) };
  }

  var getTweensProps = function(animatables, props) {
    var tweensProps = [];
    animatables.forEach(function(animatable, i) {
      var target = animatable.target;
      return props.forEach(function(prop) {
        var animType = getAnimationType(target, prop.name);
        if (animType) {
          var values = getPropertiesValues(target, prop.name, prop.value, i);
          var tween = cloneObject(prop);
          tween.animatables = animatable;
          tween.type = animType;
          tween.from = getTweenValues(prop.name, values, tween.type, target).from;
          tween.to = getTweenValues(prop.name, values, tween.type, target).to;
          tween.round = (is.col(values.from) || tween.round) ? 1 : 0;
          tween.delay = (is.fnc(tween.delay) ? tween.delay(target, i, animatables.length) : tween.delay) / animation.speed;
          tween.duration = (is.fnc(tween.duration) ? tween.duration(target, i, animatables.length) : tween.duration) / animation.speed;
          tweensProps.push(tween);
        }
      });
    });
    return tweensProps;
  }

  var getTweens = function(animatables, props) {
    var tweensProps = getTweensProps(animatables, props);
    var splittedProps = groupArrayByProps(tweensProps, ['name', 'from', 'to', 'delay', 'duration']);
    return splittedProps.map(function(tweenProps) {
      var tween = cloneObject(tweenProps[0]);
      tween.animatables = tweenProps.map(function(p) { return p.animatables });
      tween.totalDuration = tween.delay + tween.duration;
      return tween;
    });
  }

  var reverseTweens = function(anim, delays) {
    anim.tweens.forEach(function(tween) {
      var toVal = tween.to;
      var fromVal = tween.from;
      var delayVal = anim.duration - (tween.delay + tween.duration);
      tween.from = toVal;
      tween.to = fromVal;
      if (delays) tween.delay = delayVal;
    });
    anim.reversed = anim.reversed ? false : true;
  }

  var getTweensDuration = function(tweens) {
    return Math.max.apply(Math, tweens.map(function(tween){ return tween.totalDuration; }));
  }

  var getTweensDelay = function(tweens) {
    return Math.min.apply(Math, tweens.map(function(tween){ return tween.delay; }));
  }

  // will-change

  var getWillChange = function(anim) {
    var props = [];
    var els = [];
    anim.tweens.forEach(function(tween) {
      if (tween.type === 'css' || tween.type === 'transform' ) {
        props.push(tween.type === 'css' ? stringToHyphens(tween.name) : 'transform');
        tween.animatables.forEach(function(animatable) { els.push(animatable.target); });
      }
    });
    return {
      properties: removeArrayDuplicates(props).join(', '),
      elements: removeArrayDuplicates(els)
    }
  }

  var setWillChange = function(anim) {
    var willChange = getWillChange(anim);
    willChange.elements.forEach(function(element) {
      element.style.willChange = willChange.properties;
    });
  }

  var removeWillChange = function(anim) {
    var willChange = getWillChange(anim);
    willChange.elements.forEach(function(element) {
      element.style.removeProperty('will-change');
    });
  }

  /* Svg path */

  var getPathProps = function(path) {
    var el = is.str(path) ? selectString(path)[0] : path;
    return {
      path: el,
      value: el.getTotalLength()
    }
  }

  var snapProgressToPath = function(tween, progress) {
    var pathEl = tween.path;
    var pathProgress = tween.value * progress;
    var point = function(offset) {
      var o = offset || 0;
      var p = progress > 1 ? tween.value + o : pathProgress + o;
      return pathEl.getPointAtLength(p);
    }
    var p = point();
    var p0 = point(-1);
    var p1 = point(+1);
    switch (tween.name) {
      case 'translateX': return p.x;
      case 'translateY': return p.y;
      case 'rotate': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
    }
  }

  // Progress

  var getTweenProgress = function(tween, time) {
    var elapsed = Math.min(Math.max(time - tween.delay, 0), tween.duration);
    var percent = elapsed / tween.duration;
    var progress = tween.to.numbers.map(function(number, p) {
      var start = tween.from.numbers[p];
      var eased = easings[tween.easing](percent, tween.elasticity);
      var val = tween.path ? snapProgressToPath(tween, eased) : start + eased * (number - start);
      val = tween.round ? Math.round(val * tween.round) / tween.round : val;
      return val;
    });
    return recomposeValue(progress, tween.to.strings, tween.from.strings);
  }

  var setAnimationProgress = function(anim, time) {
    var transforms;
    anim.currentTime = time;
    anim.progress = (time / anim.duration) * 100;
    for (var t = 0; t < anim.tweens.length; t++) {
      var tween = anim.tweens[t];
      tween.currentValue = getTweenProgress(tween, time);
      var progress = tween.currentValue;
      for (var a = 0; a < tween.animatables.length; a++) {
        var animatable = tween.animatables[a];
        var id = animatable.id;
        var target = animatable.target;
        var name = tween.name;
        switch (tween.type) {
          case 'css': target.style[name] = progress; break;
          case 'attribute': target.setAttribute(name, progress); break;
          case 'object': target[name] = progress; break;
          case 'transform':
          if (!transforms) transforms = {};
          if (!transforms[id]) transforms[id] = [];
          transforms[id].push(progress);
          break;
        }
      }
    }
    if (transforms) {
      if (!transform) transform = (getCSSValue(document.body, transformStr) ? '' : '-webkit-') + transformStr;
      for (var t in transforms) {
        anim.animatables[t].target.style[transform] = transforms[t].join(' ');
      }
    }
  }

  // Animation

  var createAnimation = function(params) {
    var anim = {};
    anim.animatables = getAnimatables(params.targets);
    anim.settings = mergeObjects(params, defaultSettings);
    anim.properties = getProperties(params, anim.settings);
    anim.tweens = getTweens(anim.animatables, anim.properties);
    anim.duration = anim.tweens.length ? getTweensDuration(anim.tweens) : params.duration;
    anim.delay = anim.tweens.length ? getTweensDelay(anim.tweens) : params.delay;
    anim.currentTime = 0;
    anim.progress = 0;
    anim.ended = false;
    return anim;
  }

  // Public

  var animations = [];
  var raf = 0;

  var engine = (function() {
    var play = function() { raf = requestAnimationFrame(step); };
    var step = function(t) {
      if (animations.length) {
        for (var i = 0; i < animations.length; i++) animations[i].tick(t);
        play();
      } else {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }
    return play;
  })();

  var animation = function(params) {

    var anim = createAnimation(params);
    var time = {};

    anim.tick = function(now) {
      anim.ended = false;
      if (!time.start) time.start = now;
      time.current = Math.min(Math.max(time.last + now - time.start, 0), anim.duration);
      setAnimationProgress(anim, time.current);
      var s = anim.settings;
      if (time.current >= anim.delay) {
        if (s.begin) s.begin(anim); s.begin = undefined;
        if (s.update) s.update(anim);
      }
      if (time.current >= anim.duration) {
        if (s.loop) {
          time.start = now;
          if (s.direction === 'alternate') reverseTweens(anim, true);
          if (is.num(s.loop)) s.loop--;
        } else {
          anim.ended = true;
          anim.pause();
          if (s.complete) s.complete(anim);
        }
        time.last = 0;
      }
    }

    anim.seek = function(progress) {
      setAnimationProgress(anim, (progress / 100) * anim.duration);
    }

    anim.pause = function() {
      removeWillChange(anim);
      var i = animations.indexOf(anim);
      if (i > -1) animations.splice(i, 1);
    }

    anim.play = function(params) {
      anim.pause();
      if (params) anim = mergeObjects(createAnimation(mergeObjects(params, anim.settings)), anim);
      time.start = 0;
      time.last = anim.ended ? 0 : anim.currentTime;
      var s = anim.settings;
      if (s.direction === 'reverse') reverseTweens(anim);
      if (s.direction === 'alternate' && !s.loop) s.loop = 1;
      setWillChange(anim);
      animations.push(anim);
      if (!raf) engine();
    }

    anim.restart = function() {
      if (anim.reversed) reverseTweens(anim);
      anim.pause();
      anim.seek(0);
      anim.play();
    }

    if (anim.settings.autoplay) anim.play();

    return anim;

  }

  // Remove one or multiple targets from all active animations.

  var remove = function(elements) {
    var targets = flattenArray(is.arr(elements) ? elements.map(toArray) : toArray(elements));
    for (var i = animations.length-1; i >= 0; i--) {
      var animation = animations[i];
      var tweens = animation.tweens;
      for (var t = tweens.length-1; t >= 0; t--) {
        var animatables = tweens[t].animatables;
        for (var a = animatables.length-1; a >= 0; a--) {
          if (arrayContains(targets, animatables[a].target)) {
            animatables.splice(a, 1);
            if (!animatables.length) tweens.splice(t, 1);
            if (!tweens.length) animation.pause();
          }
        }
      }
    }
  }

  animation.version = version;
  animation.speed = 1;
  animation.list = animations;
  animation.remove = remove;
  animation.easings = easings;
  animation.getValue = getInitialTargetValue;
  animation.path = getPathProps;
  animation.random = random;

  return animation;

}));


/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(812)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(551),
  /* template */
  __webpack_require__(764),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-collapse/src/Collapse.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Collapse.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e20e9092", Component.options)
  } else {
    hotAPI.reload("data-v-e20e9092", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(798)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(552),
  /* template */
  __webpack_require__(755),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-collapse/src/Item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-98fa95c6", Component.options)
  } else {
    hotAPI.reload("data-v-98fa95c6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 708:
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
  }, [_vm._v("Nests")]), _vm._v(" "), _c('div', {
    staticClass: "block is-flex"
  }, [_c('collapse', [_c('collapse-item', {
    attrs: {
      "title": "Components"
    }
  }, [_vm._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive\n            ")]), _vm._v(" "), _c('collapse-item', {
    attrs: {
      "title": "Elements"
    }
  }, [_vm._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive\n            ")]), _vm._v(" "), _c('collapse-item', {
    attrs: {
      "title": "Nests"
    }
  }, [_c('collapse', [_c('collapse-item', {
    attrs: {
      "title": "Nest Child"
    }
  }, [_vm._v("\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive\n                ")])], 1)], 1)], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-4"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Accordion")]), _vm._v(" "), _c('div', {
    staticClass: "block is-flex"
  }, [_c('collapse', {
    attrs: {
      "accordion": ""
    }
  }, [_c('collapse-item', {
    attrs: {
      "title": "Components"
    }
  }, [_vm._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive\n            ")]), _vm._v(" "), _c('collapse-item', {
    attrs: {
      "title": "Elements",
      "selected": ""
    }
  }, [_vm._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive\n            ")]), _vm._v(" "), _c('collapse-item', {
    attrs: {
      "title": "Nests"
    }
  }, [_c('collapse', [_c('collapse-item', {
    attrs: {
      "title": "Nest Child"
    }
  }, [_vm._v("\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive\n                ")])], 1)], 1)], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-4"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Default Selected")]), _vm._v(" "), _c('div', {
    staticClass: "block is-flex"
  }, [_c('collapse', {
    attrs: {
      "accordion": "",
      "is-fullwidth": ""
    }
  }, [_c('collapse-item', {
    attrs: {
      "title": "Components"
    }
  }, [_vm._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive\n            ")]), _vm._v(" "), _c('collapse-item', {
    attrs: {
      "title": "Elements"
    }
  }, [_vm._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive\n            ")]), _vm._v(" "), _c('collapse-item', {
    attrs: {
      "title": "Nests",
      "selected": ""
    }
  }, [_c('collapse', [_c('collapse-item', {
    attrs: {
      "title": "Nest Child",
      "selected": ""
    }
  }, [_vm._v("\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio. #css #responsive\n                ")])], 1)], 1)], 1)], 1)])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-004b08b4", module.exports)
  }
}

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card collapse-item",
    class: {
      'is-fullwidth': _vm.$parent.isFullwidth, 'is-active': _vm.isActived
    }
  }, [_c('header', {
    staticClass: "card-header touchable",
    attrs: {
      "role": "tab",
      "aria-expanded": _vm.selected ? 'true' : 'fase'
    },
    on: {
      "click": _vm.toggle
    }
  }, [_c('h3', {
    staticClass: "card-header-title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "collapsed-fade",
      "css": false,
      "appear": ""
    },
    on: {
      "before-appear": _vm.before,
      "appear": _vm.enter,
      "appear-cancel": _vm.cancel,
      "before-enter": _vm.before,
      "enter": _vm.enter,
      "enter-cancel": _vm.cancel,
      "leave": _vm.leave,
      "leave-cancel": _vm.cancel
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isActived),
      expression: "isActived"
    }],
    staticClass: "card-content"
  }, [_c('div', {
    staticClass: "card-content-box"
  }, [_vm._t("default")], 2)])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "card-header-icon"
  }, [_c('i', {
    staticClass: "fa fa-angle-right"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-98fa95c6", module.exports)
  }
}

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "collapse is-fullwidth"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e20e9092", module.exports)
  }
}

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(621);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("720a8505", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-004b08b4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Collapse.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-004b08b4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Collapse.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(648);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("281d5876", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-98fa95c6\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Item.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-98fa95c6\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Item.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(663);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("3764ee8e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e20e9092\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./Collapse.vue", function() {
     var newContent = require("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-e20e9092\",\"scoped\":false,\"hasInlineConfig\":true}!../../vue-loader/lib/selector.js?type=styles&index=0!./Collapse.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvQ29sbGFwc2UudnVlIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLWNvbGxhcHNlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vQ29sbGFwc2UudnVlIiwid2VicGFjazovLy9JdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vQ29sbGFwc2UudnVlPzNiMTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL0NvbGxhcHNlLnZ1ZT83NGU1Iiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLWNvbGxhcHNlL3NyYy9JdGVtLnZ1ZT80MTI5Iiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLWNvbGxhcHNlL3NyYy9Db2xsYXBzZS52dWU/Zjk0YyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1jb2xsYXBzZS9+L2FuaW1lanMvYW5pbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtY29sbGFwc2Uvc3JjL0NvbGxhcHNlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1jb2xsYXBzZS9zcmMvSXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL0NvbGxhcHNlLnZ1ZT82YTEzIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLWNvbGxhcHNlL3NyYy9JdGVtLnZ1ZT83OTE3Iiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLWNvbGxhcHNlL3NyYy9Db2xsYXBzZS52dWU/OTBlZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvQ29sbGFwc2UudnVlP2JlNzQiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtY29sbGFwc2Uvc3JjL0l0ZW0udnVlP2QwYTgiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtYnVsbWEtY29sbGFwc2Uvc3JjL0NvbGxhcHNlLnZ1ZT9hMzNjIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJDb2xsYXBzZSIsInJlcXVpcmUiLCJJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBLHVCQUE0Szs7QUFFNUs7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7O0FDL0JBQSxRQUFRQyxRQUFSLEdBQW1CLG1CQUFBQyxDQUFRLEdBQVIsQ0FBbkI7QUFDQUYsUUFBUUcsSUFBUixHQUFlLG1CQUFBRCxDQUFRLEdBQVIsQ0FBZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNQTs7OztpQkFHQTtlQUdBO0FBSkE7Ozs4Q0FNQTs7cUJBQ0E7O0FBR0E7QUFMQTs7OzZDQU9BOzBCQUNBO3VEQUNBOzJCQUNBOzZCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFYQTs7QUFaQSxFOzs7Ozs7Ozs7Ozs7OztBQ3lCQTs7Ozs7Ozs7Y0FHQTs7WUFFQTtnQkFJQTtBQUxBO0FBRkE7O3dCQVFBOztzQkFHQTtBQUZBO0FBSUE7OEJBQ0E7MkJBQ0E7QUFFQTs4QkFDQTtrQ0FDQTt3QkFDQTs4QkFDQTtBQUNBO0FBRUE7MENBQ0E7b0NBQ0E7b0NBQ0E7QUFDQTttQ0FDQTtBQUVBOzs7OzRCQUVBO2lEQUNBO0FBR0E7QUFMQTs7OzhCQU9BOzRDQUNBO2dDQUNBO0FBQ0E7QUFFQTt5Q0FDQTtrQ0FDQTttREFDQTtBQUVBOzhCQUNBO2lCQUNBO0FBRUE7cUNBQ0E7d0NBQ0E7OEJBQ0E7QUFFQTt5Q0FDQTsyQkFDQTs2QkFDQTs4QkFDQTs7QUFFQTtrQkFDQTtnQkFDQTtxQkFDQTtBQUNBO3NDQUNBO2tDQUNBO0FBQ0E7QUFFQTtBQVZBO0FBWUE7NkNBQ0E7O0FB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QTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQsOEJBQThCLEVBQUU7QUFDckYsMkJBQTJCLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QywwQkFBMEIsRUFBRTtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtB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Q0FBZ0w7QUFDaEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBHQUEwRyxxRUFBcUU7QUFDL0ssbUhBQW1ILHFFQUFxRTtBQUN4TDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoianMvOC4wMTIzYTgyM2RhYTgxNDBlNjZhNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMDA0YjA4YjRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Db2xsYXBzZS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29sbGFwc2UudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wMDRiMDhiNFxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Db2xsYXBzZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtMDA0YjA4YjRcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2tpbW5oL0NvZGVzL1dlYlNob3AvYWRtaW4tdGVtcGxhdGUvbGFyYXZlbC12dWUtYWRtaW4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL0NvbGxhcHNlLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIENvbGxhcHNlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wMDRiMDhiNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTAwNGIwOGI0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Db2xsYXBzZS52dWVcbi8vIG1vZHVsZSBpZCA9IDEzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJleHBvcnRzLkNvbGxhcHNlID0gcmVxdWlyZSgnLi9Db2xsYXBzZScpXG5leHBvcnRzLkl0ZW0gPSByZXF1aXJlKCcuL0l0ZW0nKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi92dWUtYnVsbWEtY29sbGFwc2Uvc3JjL2luZGV4LmpzIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgaXMtZnVsbHdpZHRoXCI+XG4gICAgPHNsb3Q+PC9zbG90PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgaXNGdWxsd2lkdGg6IEJvb2xlYW4sXG4gICAgYWNjb3JkaW9uOiBCb29sZWFuXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICAkY29sbGFwc2VJdGVtcyAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLl9pc0NvbGxhcHNlSXRlbSlcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG9wZW5CeUluZGV4IChpbmRleCkge1xuICAgICAgaWYgKHRoaXMuYWNjb3JkaW9uKSB7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNlSXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgIGlmIChpICE9PSBpbmRleCkge1xuICAgICAgICAgICAgaXRlbS5pc0FjdGl2ZWQgPSBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5jb2xsYXBzZS5pcy1mdWxsd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ29sbGFwc2UudnVlPzI0MTkxMWQ4IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY2FyZCBjb2xsYXBzZS1pdGVtXCIgOmNsYXNzPVwieyAnaXMtZnVsbHdpZHRoJzogJHBhcmVudC5pc0Z1bGx3aWR0aCwgJ2lzLWFjdGl2ZSc6IGlzQWN0aXZlZCB9XCI+XG4gICAgPGhlYWRlciBjbGFzcz1cImNhcmQtaGVhZGVyIHRvdWNoYWJsZVwiIHJvbGU9XCJ0YWJcIiA6YXJpYS1leHBhbmRlZD1cInNlbGVjdGVkID8gJ3RydWUnIDogJ2Zhc2UnXCIgQGNsaWNrPVwidG9nZ2xlXCI+XG4gICAgICA8aDMgY2xhc3M9XCJjYXJkLWhlYWRlci10aXRsZVwiPnt7IHRpdGxlIH19PC9oMz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZC1oZWFkZXItaWNvblwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPlxuICAgICAgPC9zcGFuPlxuICAgIDwvaGVhZGVyPlxuICAgIDx0cmFuc2l0aW9uXG4gICAgICBuYW1lPVwiY29sbGFwc2VkLWZhZGVcIlxuICAgICAgOmNzcz1cImZhbHNlXCJcbiAgICAgIGFwcGVhclxuICAgICAgQGJlZm9yZS1hcHBlYXI9XCJiZWZvcmVcIlxuICAgICAgQGFwcGVhcj1cImVudGVyXCJcbiAgICAgIEBhcHBlYXItY2FuY2VsPVwiY2FuY2VsXCJcbiAgICAgIEBiZWZvcmUtZW50ZXI9XCJiZWZvcmVcIlxuICAgICAgQGVudGVyPVwiZW50ZXJcIlxuICAgICAgQGVudGVyLWNhbmNlbD1cImNhbmNlbFwiXG4gICAgICBAbGVhdmU9XCJsZWF2ZVwiXG4gICAgICBAbGVhdmUtY2FuY2VsPVwiY2FuY2VsXCJcbiAgICA+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiIHYtc2hvdz1cImlzQWN0aXZlZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudC1ib3hcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvdHJhbnNpdGlvbj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBhbmltZSBmcm9tICdhbmltZWpzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgc2VsZWN0ZWQ6IEJvb2xlYW4sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfVxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0FjdGl2ZWQ6IHRoaXMuc2VsZWN0ZWRcbiAgICB9XG4gIH0sXG5cbiAgY3JlYXRlZCAoKSB7XG4gICAgdGhpcy5faXNDb2xsYXBzZUl0ZW0gPSB0cnVlXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy4kb24oJ29wZW4nLCB0aGlzLiRwYXJlbnQub3BlbkJ5SW5kZXgpXG4gICAgaWYgKHRoaXMuaXNBY3RpdmVkKSB7XG4gICAgICB0aGlzLiRlbWl0KCdvcGVuJywgdGhpcy5pbmRleClcbiAgICB9XG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuYW5pbWUgJiYgdGhpcy50YXJnZXRzKSB7XG4gICAgICBhbmltZS5yZW1vdmUodGhpcy50YXJnZXRzKVxuICAgIH1cbiAgICB0aGlzLiRvZmYoJ29wZW4nLCB0aGlzLiRwYXJlbnQub3BlbkJ5SW5kZXgpXG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBpbmRleCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kcGFyZW50LiRjb2xsYXBzZUl0ZW1zLmluZGV4T2YodGhpcylcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZSAoKSB7XG4gICAgICBpZiAoKHRoaXMuaXNBY3RpdmVkID0gIXRoaXMuaXNBY3RpdmVkKSkge1xuICAgICAgICB0aGlzLiRlbWl0KCdvcGVuJywgdGhpcy5pbmRleClcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0QW5pbWUgKHRhcmdldHMpIHtcbiAgICAgIGlmICh0aGlzLmFuaW1lKSByZXR1cm4gdGhpcy5hbmltZVxuICAgICAgcmV0dXJuIHRoaXMuYW5pbWUgPSBhbmltZSh7IHRhcmdldHMgfSlcbiAgICB9LFxuXG4gICAgY2FuY2VsICgpIHtcbiAgICAgIHRoaXMuYW5pbWUucGF1c2UoKVxuICAgIH0sXG5cbiAgICBiZWZvcmUgKHRhcmdldHMpIHtcbiAgICAgIGlmICghdGhpcy50YXJnZXRzKSB0aGlzLnRhcmdldHMgPSB0YXJnZXRzXG4gICAgICB0YXJnZXRzLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxuICAgIH0sXG5cbiAgICBlbnRlciAodGFyZ2V0cywgZG9uZSkge1xuICAgICAgY29uc3QgaGVpZ2h0ID0gdGFyZ2V0cy5zY3JvbGxIZWlnaHRcbiAgICAgIHRhcmdldHMuc3R5bGUuaGVpZ2h0ID0gMFxuICAgICAgdGFyZ2V0cy5zdHlsZS5vcGFjaXR5ID0gMFxuICAgICAgdGhpcy5nZXRBbmltZSh0YXJnZXRzKS5wbGF5KHtcbiAgICAgICAgdGFyZ2V0cyxcbiAgICAgICAgZHVyYXRpb246IDM3NyxcbiAgICAgICAgZWFzaW5nOiAnZWFzZU91dEV4cG8nLFxuICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgY29tcGxldGUgKCkge1xuICAgICAgICAgIHRhcmdldHMucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXG4gICAgICAgICAgZG9uZSgpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcblxuICAgIGxlYXZlICh0YXJnZXRzLCBjb21wbGV0ZSkge1xuICAgICAgdGhpcy5nZXRBbmltZSh0YXJnZXRzKS5wbGF5KHtcbiAgICAgICAgdGFyZ2V0cyxcbiAgICAgICAgZHVyYXRpb246IDM3NyxcbiAgICAgICAgZWFzaW5nOiAnZWFzZU91dEV4cG8nLFxuICAgICAgICBvcGFjaXR5OiBbMSwgMF0sXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgY29tcGxldGVcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uY29sbGFwc2UtaXRlbSB7XG4gIC5jYXJkLWhlYWRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIC5jYXJkLWhlYWRlci1pY29uIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjM3N3MgZWFzZTtcbiAgfVxuICAuY2FyZC1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5jYXJkLWNvbnRlbnQtYm94IHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gICYuaXMtYWN0aXZlIHtcbiAgICA+IC5jYXJkLWhlYWRlciB7XG4gICAgICA+IC5jYXJkLWhlYWRlci1pY29uIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBJdGVtLnZ1ZT81OWIzNzhiZiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1hbmNlc3RvclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50IGlzLTRcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveFwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+TmVzdHM8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9jayBpcy1mbGV4XCI+XG4gICAgICAgICAgICA8Y29sbGFwc2U+XG4gICAgICAgICAgICAgIDxjb2xsYXBzZS1pdGVtIHRpdGxlPVwiQ29tcG9uZW50c1wiPlxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBoYXNlbGx1cyBuZWMgaWFjdWxpcyBtYXVyaXMuIEBidWxtYWlvLiAjY3NzICNyZXNwb25zaXZlXG4gICAgICAgICAgICAgIDwvY29sbGFwc2UtaXRlbT5cbiAgICAgICAgICAgICAgPGNvbGxhcHNlLWl0ZW0gdGl0bGU9XCJFbGVtZW50c1wiPlxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBoYXNlbGx1cyBuZWMgaWFjdWxpcyBtYXVyaXMuIEBidWxtYWlvLiAjY3NzICNyZXNwb25zaXZlXG4gICAgICAgICAgICAgIDwvY29sbGFwc2UtaXRlbT5cbiAgICAgICAgICAgICAgPGNvbGxhcHNlLWl0ZW0gdGl0bGU9XCJOZXN0c1wiPlxuICAgICAgICAgICAgICAgIDxjb2xsYXBzZT5cbiAgICAgICAgICAgICAgICAgIDxjb2xsYXBzZS1pdGVtIHRpdGxlPVwiTmVzdCBDaGlsZFwiPlxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgbmVjIGlhY3VsaXMgbWF1cmlzLiBAYnVsbWFpby4gI2NzcyAjcmVzcG9uc2l2ZVxuICAgICAgICAgICAgICAgICAgPC9jb2xsYXBzZS1pdGVtPlxuICAgICAgICAgICAgICAgIDwvY29sbGFwc2U+XG4gICAgICAgICAgICAgIDwvY29sbGFwc2UtaXRlbT5cbiAgICAgICAgICAgIDwvY29sbGFwc2U+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1wYXJlbnQgaXMtNFwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94XCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5BY2NvcmRpb248L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9jayBpcy1mbGV4XCI+XG4gICAgICAgICAgICA8Y29sbGFwc2UgYWNjb3JkaW9uPlxuICAgICAgICAgICAgICA8Y29sbGFwc2UtaXRlbSB0aXRsZT1cIkNvbXBvbmVudHNcIj5cbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgbmVjIGlhY3VsaXMgbWF1cmlzLiBAYnVsbWFpby4gI2NzcyAjcmVzcG9uc2l2ZVxuICAgICAgICAgICAgICA8L2NvbGxhcHNlLWl0ZW0+XG4gICAgICAgICAgICAgIDxjb2xsYXBzZS1pdGVtIHRpdGxlPVwiRWxlbWVudHNcIiBzZWxlY3RlZD5cbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgbmVjIGlhY3VsaXMgbWF1cmlzLiBAYnVsbWFpby4gI2NzcyAjcmVzcG9uc2l2ZVxuICAgICAgICAgICAgICA8L2NvbGxhcHNlLWl0ZW0+XG4gICAgICAgICAgICAgIDxjb2xsYXBzZS1pdGVtIHRpdGxlPVwiTmVzdHNcIj5cbiAgICAgICAgICAgICAgICA8Y29sbGFwc2U+XG4gICAgICAgICAgICAgICAgICA8Y29sbGFwc2UtaXRlbSB0aXRsZT1cIk5lc3QgQ2hpbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGhhc2VsbHVzIG5lYyBpYWN1bGlzIG1hdXJpcy4gQGJ1bG1haW8uICNjc3MgI3Jlc3BvbnNpdmVcbiAgICAgICAgICAgICAgICAgIDwvY29sbGFwc2UtaXRlbT5cbiAgICAgICAgICAgICAgICA8L2NvbGxhcHNlPlxuICAgICAgICAgICAgICA8L2NvbGxhcHNlLWl0ZW0+XG4gICAgICAgICAgICA8L2NvbGxhcHNlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50IGlzLTRcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveFwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+RGVmYXVsdCBTZWxlY3RlZDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrIGlzLWZsZXhcIj5cbiAgICAgICAgICAgIDxjb2xsYXBzZSBhY2NvcmRpb24gaXMtZnVsbHdpZHRoPlxuICAgICAgICAgICAgICA8Y29sbGFwc2UtaXRlbSB0aXRsZT1cIkNvbXBvbmVudHNcIj5cbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgbmVjIGlhY3VsaXMgbWF1cmlzLiBAYnVsbWFpby4gI2NzcyAjcmVzcG9uc2l2ZVxuICAgICAgICAgICAgICA8L2NvbGxhcHNlLWl0ZW0+XG4gICAgICAgICAgICAgIDxjb2xsYXBzZS1pdGVtIHRpdGxlPVwiRWxlbWVudHNcIj5cbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgbmVjIGlhY3VsaXMgbWF1cmlzLiBAYnVsbWFpby4gI2NzcyAjcmVzcG9uc2l2ZVxuICAgICAgICAgICAgICA8L2NvbGxhcHNlLWl0ZW0+XG4gICAgICAgICAgICAgICAgPGNvbGxhcHNlLWl0ZW0gdGl0bGU9XCJOZXN0c1wiIHNlbGVjdGVkPlxuICAgICAgICAgICAgICAgIDxjb2xsYXBzZT5cbiAgICAgICAgICAgICAgICAgIDxjb2xsYXBzZS1pdGVtIHRpdGxlPVwiTmVzdCBDaGlsZFwiIHNlbGVjdGVkPlxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgbmVjIGlhY3VsaXMgbWF1cmlzLiBAYnVsbWFpby4gI2NzcyAjcmVzcG9uc2l2ZVxuICAgICAgICAgICAgICAgICAgPC9jb2xsYXBzZS1pdGVtPlxuICAgICAgICAgICAgICAgIDwvY29sbGFwc2U+XG4gICAgICAgICAgICAgIDwvY29sbGFwc2UtaXRlbT5cbiAgICAgICAgICAgIDwvY29sbGFwc2U+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBDb2xsYXBzZSwgSXRlbSBhcyBDb2xsYXBzZUl0ZW0gfSBmcm9tICd2dWUtYnVsbWEtY29sbGFwc2UnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIENvbGxhcHNlLFxuICAgIENvbGxhcHNlSXRlbVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLnRpbGUuaXMtY2hpbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ29sbGFwc2UudnVlP2RlMWU3ZjU4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRpbGUuaXMtY2hpbGRbZGF0YS12LTAwNGIwOGI0XSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDA0YjA4YjRcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Db2xsYXBzZS52dWVcbi8vIG1vZHVsZSBpZCA9IDYyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jb2xsYXBzZS1pdGVtIC5jYXJkLWhlYWRlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5jb2xsYXBzZS1pdGVtIC5jYXJkLWhlYWRlci1pY29uIHtcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zNzdzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjM3N3MgZWFzZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzc3cyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAuMzc3cyBlYXNlO1xcbn1cXG4uY29sbGFwc2UtaXRlbSAuY2FyZC1jb250ZW50IHtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uY29sbGFwc2UtaXRlbSAuY2FyZC1jb250ZW50LWJveCB7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4uY29sbGFwc2UtaXRlbS5pcy1hY3RpdmUgPiAuY2FyZC1oZWFkZXIgPiAuY2FyZC1oZWFkZXItaWNvbiB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi05OGZhOTVjNlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL34vdnVlLWJ1bG1hLWNvbGxhcHNlL3NyYy9JdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNvbGxhcHNlLmlzLWZ1bGx3aWR0aCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL2tpbW5oL0NvZGVzL1dlYlNob3AvYWRtaW4tdGVtcGxhdGUvbGFyYXZlbC12dWUtYWRtaW4vbm9kZV9tb2R1bGVzL3Z1ZS1idWxtYS1jb2xsYXBzZS9zcmMvQ29sbGFwc2UudnVlPzI0MTkxMWQ4XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFtQ0E7RUFDQSxZQUFBO0NBQ0FcIixcImZpbGVcIjpcIkNvbGxhcHNlLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzZSBpcy1mdWxsd2lkdGhcXFwiPlxcbiAgICA8c2xvdD48L3Nsb3Q+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgcHJvcHM6IHtcXG4gICAgaXNGdWxsd2lkdGg6IEJvb2xlYW4sXFxuICAgIGFjY29yZGlvbjogQm9vbGVhblxcbiAgfSxcXG5cXG4gIGNvbXB1dGVkOiB7XFxuICAgICRjb2xsYXBzZUl0ZW1zICgpIHtcXG4gICAgICByZXR1cm4gdGhpcy4kY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLl9pc0NvbGxhcHNlSXRlbSlcXG4gICAgfVxcbiAgfSxcXG5cXG4gIG1ldGhvZHM6IHtcXG4gICAgb3BlbkJ5SW5kZXggKGluZGV4KSB7XFxuICAgICAgaWYgKHRoaXMuYWNjb3JkaW9uKSB7XFxuICAgICAgICB0aGlzLiRjb2xsYXBzZUl0ZW1zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcXG4gICAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XFxuICAgICAgICAgICAgaXRlbS5pc0FjdGl2ZWQgPSBmYWxzZVxcbiAgICAgICAgICB9XFxuICAgICAgICB9KVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuLmNvbGxhcHNlLmlzLWZ1bGx3aWR0aCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWUyMGU5MDkyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vfi92dWUtYnVsbWEtY29sbGFwc2Uvc3JjL0NvbGxhcHNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjYzXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIi8qXG4gKiBBbmltZSB2MS4xLjNcbiAqIGh0dHA6Ly9hbmltZS1qcy5jb21cbiAqIEphdmFTY3JpcHQgYW5pbWF0aW9uIGVuZ2luZVxuICogQ29weXJpZ2h0IChjKSAyMDE2IEp1bGlhbiBHYXJuaWVyXG4gKiBodHRwOi8vanVsaWFuZ2Fybmllci5jb21cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcbiAgICByb290LmFuaW1lID0gZmFjdG9yeSgpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcblxuICB2YXIgdmVyc2lvbiA9ICcxLjEuMyc7XG5cbiAgLy8gRGVmYXVsdHNcblxuICB2YXIgZGVmYXVsdFNldHRpbmdzID0ge1xuICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgIGRlbGF5OiAwLFxuICAgIGxvb3A6IGZhbHNlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGRpcmVjdGlvbjogJ25vcm1hbCcsXG4gICAgZWFzaW5nOiAnZWFzZU91dEVsYXN0aWMnLFxuICAgIGVsYXN0aWNpdHk6IDQwMCxcbiAgICByb3VuZDogZmFsc2UsXG4gICAgYmVnaW46IHVuZGVmaW5lZCxcbiAgICB1cGRhdGU6IHVuZGVmaW5lZCxcbiAgICBjb21wbGV0ZTogdW5kZWZpbmVkXG4gIH1cblxuICAvLyBUcmFuc2Zvcm1zXG5cbiAgdmFyIHZhbGlkVHJhbnNmb3JtcyA9IFsndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJywgJ3RyYW5zbGF0ZVonLCAncm90YXRlJywgJ3JvdGF0ZVgnLCAncm90YXRlWScsICdyb3RhdGVaJywgJ3NjYWxlJywgJ3NjYWxlWCcsICdzY2FsZVknLCAnc2NhbGVaJywgJ3NrZXdYJywgJ3NrZXdZJ107XG4gIHZhciB0cmFuc2Zvcm0sIHRyYW5zZm9ybVN0ciA9ICd0cmFuc2Zvcm0nO1xuXG4gIC8vIFV0aWxzXG5cbiAgdmFyIGlzID0ge1xuICAgIGFycjogZnVuY3Rpb24oYSkgeyByZXR1cm4gQXJyYXkuaXNBcnJheShhKSB9LFxuICAgIG9iajogZnVuY3Rpb24oYSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLmluZGV4T2YoJ09iamVjdCcpID4gLTEgfSxcbiAgICBzdmc6IGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGEgaW5zdGFuY2VvZiBTVkdFbGVtZW50IH0sXG4gICAgZG9tOiBmdW5jdGlvbihhKSB7IHJldHVybiBhLm5vZGVUeXBlIHx8IGlzLnN2ZyhhKSB9LFxuICAgIG51bTogZnVuY3Rpb24oYSkgeyByZXR1cm4gIWlzTmFOKHBhcnNlSW50KGEpKSB9LFxuICAgIHN0cjogZnVuY3Rpb24oYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICdzdHJpbmcnIH0sXG4gICAgZm5jOiBmdW5jdGlvbihhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJyB9LFxuICAgIHVuZDogZnVuY3Rpb24oYSkgeyByZXR1cm4gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnIH0sXG4gICAgbnVsOiBmdW5jdGlvbihhKSB7IHJldHVybiB0eXBlb2YgYSA9PT0gJ251bGwnIH0sXG4gICAgaGV4OiBmdW5jdGlvbihhKSB7IHJldHVybiAvKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChhKSB9LFxuICAgIHJnYjogZnVuY3Rpb24oYSkgeyByZXR1cm4gL15yZ2IvLnRlc3QoYSkgfSxcbiAgICBoc2w6IGZ1bmN0aW9uKGEpIHsgcmV0dXJuIC9eaHNsLy50ZXN0KGEpIH0sXG4gICAgY29sOiBmdW5jdGlvbihhKSB7IHJldHVybiAoaXMuaGV4KGEpIHx8IGlzLnJnYihhKSB8fCBpcy5oc2woYSkpIH1cbiAgfVxuXG4gIC8vIEVhc2luZ3MgZnVuY3Rpb25zIGFkYXB0ZWQgZnJvbSBodHRwOi8vanF1ZXJ5dWkuY29tL1xuXG4gIHZhciBlYXNpbmdzID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBlYXNlcyA9IHt9O1xuICAgIHZhciBuYW1lcyA9IFsnUXVhZCcsICdDdWJpYycsICdRdWFydCcsICdRdWludCcsICdFeHBvJ107XG4gICAgdmFyIGZ1bmN0aW9ucyA9IHtcbiAgICAgIFNpbmU6IGZ1bmN0aW9uKHQpIHsgcmV0dXJuIDEgKyBNYXRoLnNpbihNYXRoLlBJIC8gMiAqIHQgLSBNYXRoLlBJIC8gMik7IH0sXG4gICAgICBDaXJjOiBmdW5jdGlvbih0KSB7IHJldHVybiAxIC0gTWF0aC5zcXJ0KCAxIC0gdCAqIHQgKTsgfSxcbiAgICAgIEVsYXN0aWM6IGZ1bmN0aW9uKHQsIG0pIHtcbiAgICAgICAgaWYoIHQgPT09IDAgfHwgdCA9PT0gMSApIHJldHVybiB0O1xuICAgICAgICB2YXIgcCA9ICgxIC0gTWF0aC5taW4obSwgOTk4KSAvIDEwMDApLCBzdCA9IHQgLyAxLCBzdDEgPSBzdCAtIDEsIHMgPSBwIC8gKCAyICogTWF0aC5QSSApICogTWF0aC5hc2luKCAxICk7XG4gICAgICAgIHJldHVybiAtKCBNYXRoLnBvdyggMiwgMTAgKiBzdDEgKSAqIE1hdGguc2luKCAoIHN0MSAtIHMgKSAqICggMiAqIE1hdGguUEkgKSAvIHAgKSApO1xuICAgICAgfSxcbiAgICAgIEJhY2s6IGZ1bmN0aW9uKHQpIHsgcmV0dXJuIHQgKiB0ICogKCAzICogdCAtIDIgKTsgfSxcbiAgICAgIEJvdW5jZTogZnVuY3Rpb24odCkge1xuICAgICAgICB2YXIgcG93MiwgYm91bmNlID0gNDtcbiAgICAgICAgd2hpbGUgKCB0IDwgKCAoIHBvdzIgPSBNYXRoLnBvdyggMiwgLS1ib3VuY2UgKSApIC0gMSApIC8gMTEgKSB7fVxuICAgICAgICByZXR1cm4gMSAvIE1hdGgucG93KCA0LCAzIC0gYm91bmNlICkgLSA3LjU2MjUgKiBNYXRoLnBvdyggKCBwb3cyICogMyAtIDIgKSAvIDIyIC0gdCwgMiApO1xuICAgICAgfVxuICAgIH1cbiAgICBuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUsIGkpIHtcbiAgICAgIGZ1bmN0aW9uc1tuYW1lXSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KCB0LCBpICsgMiApO1xuICAgICAgfVxuICAgIH0pO1xuICAgIE9iamVjdC5rZXlzKGZ1bmN0aW9ucykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICB2YXIgZWFzZUluID0gZnVuY3Rpb25zW25hbWVdO1xuICAgICAgZWFzZXNbJ2Vhc2VJbicgKyBuYW1lXSA9IGVhc2VJbjtcbiAgICAgIGVhc2VzWydlYXNlT3V0JyArIG5hbWVdID0gZnVuY3Rpb24odCwgbSkgeyByZXR1cm4gMSAtIGVhc2VJbigxIC0gdCwgbSk7IH07XG4gICAgICBlYXNlc1snZWFzZUluT3V0JyArIG5hbWVdID0gZnVuY3Rpb24odCwgbSkgeyByZXR1cm4gdCA8IDAuNSA/IGVhc2VJbih0ICogMiwgbSkgLyAyIDogMSAtIGVhc2VJbih0ICogLTIgKyAyLCBtKSAvIDI7IH07XG4gICAgICBlYXNlc1snZWFzZU91dEluJyArIG5hbWVdID0gZnVuY3Rpb24odCwgbSkgeyByZXR1cm4gdCA8IDAuNSA/ICgxIC0gZWFzZUluKDEgLSAyICogdCwgbSkpIC8gMiA6IChlYXNlSW4odCAqIDIgLSAxLCBtKSArIDEpIC8gMjsgfTtcbiAgICB9KTtcbiAgICBlYXNlcy5saW5lYXIgPSBmdW5jdGlvbih0KSB7IHJldHVybiB0OyB9O1xuICAgIHJldHVybiBlYXNlcztcbiAgfSkoKTtcblxuICAvLyBTdHJpbmdzXG5cbiAgdmFyIG51bWJlclRvU3RyaW5nID0gZnVuY3Rpb24odmFsKSB7XG4gICAgcmV0dXJuIChpcy5zdHIodmFsKSkgPyB2YWwgOiB2YWwgKyAnJztcbiAgfVxuXG4gIHZhciBzdHJpbmdUb0h5cGhlbnMgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICB2YXIgc2VsZWN0U3RyaW5nID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKGlzLmNvbChzdHIpKSByZXR1cm4gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyKTtcbiAgICAgIHJldHVybiBub2RlcztcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvLyBOdW1iZXJzXG5cbiAgdmFyIHJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIH1cblxuICAvLyBBcnJheXNcblxuICB2YXIgZmxhdHRlbkFycmF5ID0gZnVuY3Rpb24oYXJyKSB7XG4gICAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xuICAgICAgcmV0dXJuIGEuY29uY2F0KGlzLmFycihiKSA/IGZsYXR0ZW5BcnJheShiKSA6IGIpO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHZhciB0b0FycmF5ID0gZnVuY3Rpb24obykge1xuICAgIGlmIChpcy5hcnIobykpIHJldHVybiBvO1xuICAgIGlmIChpcy5zdHIobykpIG8gPSBzZWxlY3RTdHJpbmcobykgfHwgbztcbiAgICBpZiAobyBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IG8gaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbikgcmV0dXJuIFtdLnNsaWNlLmNhbGwobyk7XG4gICAgcmV0dXJuIFtvXTtcbiAgfVxuXG4gIHZhciBhcnJheUNvbnRhaW5zID0gZnVuY3Rpb24oYXJyLCB2YWwpIHtcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24oYSkgeyByZXR1cm4gYSA9PT0gdmFsOyB9KTtcbiAgfVxuXG4gIHZhciBncm91cEFycmF5QnlQcm9wcyA9IGZ1bmN0aW9uKGFyciwgcHJvcHNBcnIpIHtcbiAgICB2YXIgZ3JvdXBzID0ge307XG4gICAgYXJyLmZvckVhY2goZnVuY3Rpb24obykge1xuICAgICAgdmFyIGdyb3VwID0gSlNPTi5zdHJpbmdpZnkocHJvcHNBcnIubWFwKGZ1bmN0aW9uKHApIHsgcmV0dXJuIG9bcF07IH0pKTtcbiAgICAgIGdyb3Vwc1tncm91cF0gPSBncm91cHNbZ3JvdXBdIHx8IFtdO1xuICAgICAgZ3JvdXBzW2dyb3VwXS5wdXNoKG8pO1xuICAgIH0pO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhncm91cHMpLm1hcChmdW5jdGlvbihncm91cCkge1xuICAgICAgcmV0dXJuIGdyb3Vwc1tncm91cF07XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcmVtb3ZlQXJyYXlEdXBsaWNhdGVzID0gZnVuY3Rpb24oYXJyKSB7XG4gICAgcmV0dXJuIGFyci5maWx0ZXIoZnVuY3Rpb24oaXRlbSwgcG9zLCBzZWxmKSB7XG4gICAgICByZXR1cm4gc2VsZi5pbmRleE9mKGl0ZW0pID09PSBwb3M7XG4gICAgfSk7XG4gIH1cblxuICAvLyBPYmplY3RzXG5cbiAgdmFyIGNsb25lT2JqZWN0ID0gZnVuY3Rpb24obykge1xuICAgIHZhciBuZXdPYmplY3QgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIG8pIG5ld09iamVjdFtwXSA9IG9bcF07XG4gICAgcmV0dXJuIG5ld09iamVjdDtcbiAgfVxuXG4gIHZhciBtZXJnZU9iamVjdHMgPSBmdW5jdGlvbihvMSwgbzIpIHtcbiAgICBmb3IgKHZhciBwIGluIG8yKSBvMVtwXSA9ICFpcy51bmQobzFbcF0pID8gbzFbcF0gOiBvMltwXTtcbiAgICByZXR1cm4gbzE7XG4gIH1cblxuICAvLyBDb2xvcnNcblxuICB2YXIgaGV4VG9SZ2IgPSBmdW5jdGlvbihoZXgpIHtcbiAgICB2YXIgcmd4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcbiAgICB2YXIgaGV4ID0gaGV4LnJlcGxhY2Uocmd4LCBmdW5jdGlvbihtLCByLCBnLCBiKSB7IHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7IH0pO1xuICAgIHZhciByZ2IgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgICB2YXIgciA9IHBhcnNlSW50KHJnYlsxXSwgMTYpO1xuICAgIHZhciBnID0gcGFyc2VJbnQocmdiWzJdLCAxNik7XG4gICAgdmFyIGIgPSBwYXJzZUludChyZ2JbM10sIDE2KTtcbiAgICByZXR1cm4gJ3JnYignICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJyknO1xuICB9XG5cbiAgdmFyIGhzbFRvUmdiID0gZnVuY3Rpb24oaHNsKSB7XG4gICAgdmFyIGhzbCA9IC9oc2xcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSVcXCkvZy5leGVjKGhzbCk7XG4gICAgdmFyIGggPSBwYXJzZUludChoc2xbMV0pIC8gMzYwO1xuICAgIHZhciBzID0gcGFyc2VJbnQoaHNsWzJdKSAvIDEwMDtcbiAgICB2YXIgbCA9IHBhcnNlSW50KGhzbFszXSkgLyAxMDA7XG4gICAgdmFyIGh1ZTJyZ2IgPSBmdW5jdGlvbihwLCBxLCB0KSB7XG4gICAgICBpZiAodCA8IDApIHQgKz0gMTtcbiAgICAgIGlmICh0ID4gMSkgdCAtPSAxO1xuICAgICAgaWYgKHQgPCAxLzYpIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xuICAgICAgaWYgKHQgPCAxLzIpIHJldHVybiBxO1xuICAgICAgaWYgKHQgPCAyLzMpIHJldHVybiBwICsgKHEgLSBwKSAqICgyLzMgLSB0KSAqIDY7XG4gICAgICByZXR1cm4gcDtcbiAgICB9XG4gICAgdmFyIHIsIGcsIGI7XG4gICAgaWYgKHMgPT0gMCkge1xuICAgICAgciA9IGcgPSBiID0gbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xuICAgICAgdmFyIHAgPSAyICogbCAtIHE7XG4gICAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMS8zKTtcbiAgICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xuICAgICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEvMyk7XG4gICAgfVxuICAgIHJldHVybiAncmdiKCcgKyByICogMjU1ICsgJywnICsgZyAqIDI1NSArICcsJyArIGIgKiAyNTUgKyAnKSc7XG4gIH1cblxuICB2YXIgY29sb3JUb1JnYiA9IGZ1bmN0aW9uKHZhbCkge1xuICAgIGlmIChpcy5yZ2IodmFsKSkgcmV0dXJuIHZhbDtcbiAgICBpZiAoaXMuaGV4KHZhbCkpIHJldHVybiBoZXhUb1JnYih2YWwpO1xuICAgIGlmIChpcy5oc2wodmFsKSkgcmV0dXJuIGhzbFRvUmdiKHZhbCk7XG4gIH1cblxuICAvLyBVbml0c1xuXG4gIHZhciBnZXRVbml0ID0gZnVuY3Rpb24odmFsKSB7XG4gICAgcmV0dXJuIC8oW1xcK1xcLV0/WzAtOXxhdXRvXFwuXSspKCV8cHh8cHR8ZW18cmVtfGlufGNtfG1tfGV4fHBjfHZ3fHZofGRlZyk/Ly5leGVjKHZhbClbMl07XG4gIH1cblxuICB2YXIgYWRkRGVmYXVsdFRyYW5zZm9ybVVuaXQgPSBmdW5jdGlvbihwcm9wLCB2YWwsIGludGlhbFZhbCkge1xuICAgIGlmIChnZXRVbml0KHZhbCkpIHJldHVybiB2YWw7XG4gICAgaWYgKHByb3AuaW5kZXhPZigndHJhbnNsYXRlJykgPiAtMSkgcmV0dXJuIGdldFVuaXQoaW50aWFsVmFsKSA/IHZhbCArIGdldFVuaXQoaW50aWFsVmFsKSA6IHZhbCArICdweCc7XG4gICAgaWYgKHByb3AuaW5kZXhPZigncm90YXRlJykgPiAtMSB8fCBwcm9wLmluZGV4T2YoJ3NrZXcnKSA+IC0xKSByZXR1cm4gdmFsICsgJ2RlZyc7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIC8vIFZhbHVlc1xuXG4gIHZhciBnZXRDU1NWYWx1ZSA9IGZ1bmN0aW9uKGVsLCBwcm9wKSB7XG4gICAgLy8gRmlyc3QgY2hlY2sgaWYgcHJvcCBpcyBhIHZhbGlkIENTUyBwcm9wZXJ0eVxuICAgIGlmIChwcm9wIGluIGVsLnN0eWxlKSB7XG4gICAgICAvLyBUaGVuIHJldHVybiB0aGUgcHJvcGVydHkgdmFsdWUgb3IgZmFsbGJhY2sgdG8gJzAnIHdoZW4gZ2V0UHJvcGVydHlWYWx1ZSBmYWlsc1xuICAgICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUoc3RyaW5nVG9IeXBoZW5zKHByb3ApKSB8fCAnMCc7XG4gICAgfVxuICB9XG5cbiAgdmFyIGdldFRyYW5zZm9ybVZhbHVlID0gZnVuY3Rpb24oZWwsIHByb3ApIHtcbiAgICB2YXIgZGVmYXVsdFZhbCA9IHByb3AuaW5kZXhPZignc2NhbGUnKSA+IC0xID8gMSA6IDA7XG4gICAgdmFyIHN0ciA9IGVsLnN0eWxlLnRyYW5zZm9ybTtcbiAgICBpZiAoIXN0cikgcmV0dXJuIGRlZmF1bHRWYWw7XG4gICAgdmFyIHJneCA9IC8oXFx3KylcXCgoLis/KVxcKS9nO1xuICAgIHZhciBtYXRjaCA9IFtdO1xuICAgIHZhciBwcm9wcyA9IFtdO1xuICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICB3aGlsZSAobWF0Y2ggPSByZ3guZXhlYyhzdHIpKSB7XG4gICAgICBwcm9wcy5wdXNoKG1hdGNoWzFdKTtcbiAgICAgIHZhbHVlcy5wdXNoKG1hdGNoWzJdKTtcbiAgICB9XG4gICAgdmFyIHZhbCA9IHZhbHVlcy5maWx0ZXIoZnVuY3Rpb24oZiwgaSkgeyByZXR1cm4gcHJvcHNbaV0gPT09IHByb3A7IH0pO1xuICAgIHJldHVybiB2YWwubGVuZ3RoID8gdmFsWzBdIDogZGVmYXVsdFZhbDtcbiAgfVxuXG4gIHZhciBnZXRBbmltYXRpb25UeXBlID0gZnVuY3Rpb24oZWwsIHByb3ApIHtcbiAgICBpZiAoIGlzLmRvbShlbCkgJiYgYXJyYXlDb250YWlucyh2YWxpZFRyYW5zZm9ybXMsIHByb3ApKSByZXR1cm4gJ3RyYW5zZm9ybSc7XG4gICAgaWYgKCBpcy5kb20oZWwpICYmIChlbC5nZXRBdHRyaWJ1dGUocHJvcCkgfHwgKGlzLnN2ZyhlbCkgJiYgZWxbcHJvcF0pKSkgcmV0dXJuICdhdHRyaWJ1dGUnO1xuICAgIGlmICggaXMuZG9tKGVsKSAmJiAocHJvcCAhPT0gJ3RyYW5zZm9ybScgJiYgZ2V0Q1NTVmFsdWUoZWwsIHByb3ApKSkgcmV0dXJuICdjc3MnO1xuICAgIGlmICghaXMubnVsKGVsW3Byb3BdKSAmJiAhaXMudW5kKGVsW3Byb3BdKSkgcmV0dXJuICdvYmplY3QnO1xuICB9XG5cbiAgdmFyIGdldEluaXRpYWxUYXJnZXRWYWx1ZSA9IGZ1bmN0aW9uKHRhcmdldCwgcHJvcCkge1xuICAgIHN3aXRjaCAoZ2V0QW5pbWF0aW9uVHlwZSh0YXJnZXQsIHByb3ApKSB7XG4gICAgICBjYXNlICd0cmFuc2Zvcm0nOiByZXR1cm4gZ2V0VHJhbnNmb3JtVmFsdWUodGFyZ2V0LCBwcm9wKTtcbiAgICAgIGNhc2UgJ2Nzcyc6IHJldHVybiBnZXRDU1NWYWx1ZSh0YXJnZXQsIHByb3ApO1xuICAgICAgY2FzZSAnYXR0cmlidXRlJzogcmV0dXJuIHRhcmdldC5nZXRBdHRyaWJ1dGUocHJvcCk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRbcHJvcF0gfHwgMDtcbiAgfVxuXG4gIHZhciBnZXRWYWxpZFZhbHVlID0gZnVuY3Rpb24odmFsdWVzLCB2YWwsIG9yaWdpbmFsQ1NTKSB7XG4gICAgaWYgKGlzLmNvbCh2YWwpKSByZXR1cm4gY29sb3JUb1JnYih2YWwpO1xuICAgIGlmIChnZXRVbml0KHZhbCkpIHJldHVybiB2YWw7XG4gICAgdmFyIHVuaXQgPSBnZXRVbml0KHZhbHVlcy50bykgPyBnZXRVbml0KHZhbHVlcy50bykgOiBnZXRVbml0KHZhbHVlcy5mcm9tKTtcbiAgICBpZiAoIXVuaXQgJiYgb3JpZ2luYWxDU1MpIHVuaXQgPSBnZXRVbml0KG9yaWdpbmFsQ1NTKTtcbiAgICByZXR1cm4gdW5pdCA/IHZhbCArIHVuaXQgOiB2YWw7XG4gIH1cblxuICB2YXIgZGVjb21wb3NlVmFsdWUgPSBmdW5jdGlvbih2YWwpIHtcbiAgICB2YXIgcmd4ID0gLy0/XFxkKlxcLj9cXGQrL2c7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yaWdpbmFsOiB2YWwsXG4gICAgICBudW1iZXJzOiBudW1iZXJUb1N0cmluZyh2YWwpLm1hdGNoKHJneCkgPyBudW1iZXJUb1N0cmluZyh2YWwpLm1hdGNoKHJneCkubWFwKE51bWJlcikgOiBbMF0sXG4gICAgICBzdHJpbmdzOiBudW1iZXJUb1N0cmluZyh2YWwpLnNwbGl0KHJneClcbiAgICB9XG4gIH1cblxuICB2YXIgcmVjb21wb3NlVmFsdWUgPSBmdW5jdGlvbihudW1iZXJzLCBzdHJpbmdzLCBpbml0aWFsU3RyaW5ncykge1xuICAgIHJldHVybiBzdHJpbmdzLnJlZHVjZShmdW5jdGlvbihhLCBiLCBpKSB7XG4gICAgICB2YXIgYiA9IChiID8gYiA6IGluaXRpYWxTdHJpbmdzW2kgLSAxXSk7XG4gICAgICByZXR1cm4gYSArIG51bWJlcnNbaSAtIDFdICsgYjtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEFuaW1hdGFibGVzXG5cbiAgdmFyIGdldEFuaW1hdGFibGVzID0gZnVuY3Rpb24odGFyZ2V0cykge1xuICAgIHZhciB0YXJnZXRzID0gdGFyZ2V0cyA/IChmbGF0dGVuQXJyYXkoaXMuYXJyKHRhcmdldHMpID8gdGFyZ2V0cy5tYXAodG9BcnJheSkgOiB0b0FycmF5KHRhcmdldHMpKSkgOiBbXTtcbiAgICByZXR1cm4gdGFyZ2V0cy5tYXAoZnVuY3Rpb24odCwgaSkge1xuICAgICAgcmV0dXJuIHsgdGFyZ2V0OiB0LCBpZDogaSB9O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUHJvcGVydGllc1xuXG4gIHZhciBnZXRQcm9wZXJ0aWVzID0gZnVuY3Rpb24ocGFyYW1zLCBzZXR0aW5ncykge1xuICAgIHZhciBwcm9wcyA9IFtdO1xuICAgIGZvciAodmFyIHAgaW4gcGFyYW1zKSB7XG4gICAgICBpZiAoIWRlZmF1bHRTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShwKSAmJiBwICE9PSAndGFyZ2V0cycpIHtcbiAgICAgICAgdmFyIHByb3AgPSBpcy5vYmoocGFyYW1zW3BdKSA/IGNsb25lT2JqZWN0KHBhcmFtc1twXSkgOiB7dmFsdWU6IHBhcmFtc1twXX07XG4gICAgICAgIHByb3AubmFtZSA9IHA7XG4gICAgICAgIHByb3BzLnB1c2gobWVyZ2VPYmplY3RzKHByb3AsIHNldHRpbmdzKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbiAgfVxuXG4gIHZhciBnZXRQcm9wZXJ0aWVzVmFsdWVzID0gZnVuY3Rpb24odGFyZ2V0LCBwcm9wLCB2YWx1ZSwgaSkge1xuICAgIHZhciB2YWx1ZXMgPSB0b0FycmF5KCBpcy5mbmModmFsdWUpID8gdmFsdWUodGFyZ2V0LCBpKSA6IHZhbHVlKTtcbiAgICByZXR1cm4ge1xuICAgICAgZnJvbTogKHZhbHVlcy5sZW5ndGggPiAxKSA/IHZhbHVlc1swXSA6IGdldEluaXRpYWxUYXJnZXRWYWx1ZSh0YXJnZXQsIHByb3ApLFxuICAgICAgdG86ICh2YWx1ZXMubGVuZ3RoID4gMSkgPyB2YWx1ZXNbMV0gOiB2YWx1ZXNbMF1cbiAgICB9XG4gIH1cblxuICAvLyBUd2VlbnNcblxuICB2YXIgZ2V0VHdlZW5WYWx1ZXMgPSBmdW5jdGlvbihwcm9wLCB2YWx1ZXMsIHR5cGUsIHRhcmdldCkge1xuICAgIHZhciB2YWxpZCA9IHt9O1xuICAgIGlmICh0eXBlID09PSAndHJhbnNmb3JtJykge1xuICAgICAgdmFsaWQuZnJvbSA9IHByb3AgKyAnKCcgKyBhZGREZWZhdWx0VHJhbnNmb3JtVW5pdChwcm9wLCB2YWx1ZXMuZnJvbSwgdmFsdWVzLnRvKSArICcpJztcbiAgICAgIHZhbGlkLnRvID0gcHJvcCArICcoJyArIGFkZERlZmF1bHRUcmFuc2Zvcm1Vbml0KHByb3AsIHZhbHVlcy50bykgKyAnKSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvcmlnaW5hbENTUyA9ICh0eXBlID09PSAnY3NzJykgPyBnZXRDU1NWYWx1ZSh0YXJnZXQsIHByb3ApIDogdW5kZWZpbmVkO1xuICAgICAgdmFsaWQuZnJvbSA9IGdldFZhbGlkVmFsdWUodmFsdWVzLCB2YWx1ZXMuZnJvbSwgb3JpZ2luYWxDU1MpO1xuICAgICAgdmFsaWQudG8gPSBnZXRWYWxpZFZhbHVlKHZhbHVlcywgdmFsdWVzLnRvLCBvcmlnaW5hbENTUyk7XG4gICAgfVxuICAgIHJldHVybiB7IGZyb206IGRlY29tcG9zZVZhbHVlKHZhbGlkLmZyb20pLCB0bzogZGVjb21wb3NlVmFsdWUodmFsaWQudG8pIH07XG4gIH1cblxuICB2YXIgZ2V0VHdlZW5zUHJvcHMgPSBmdW5jdGlvbihhbmltYXRhYmxlcywgcHJvcHMpIHtcbiAgICB2YXIgdHdlZW5zUHJvcHMgPSBbXTtcbiAgICBhbmltYXRhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGFuaW1hdGFibGUsIGkpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBhbmltYXRhYmxlLnRhcmdldDtcbiAgICAgIHJldHVybiBwcm9wcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgICAgdmFyIGFuaW1UeXBlID0gZ2V0QW5pbWF0aW9uVHlwZSh0YXJnZXQsIHByb3AubmFtZSk7XG4gICAgICAgIGlmIChhbmltVHlwZSkge1xuICAgICAgICAgIHZhciB2YWx1ZXMgPSBnZXRQcm9wZXJ0aWVzVmFsdWVzKHRhcmdldCwgcHJvcC5uYW1lLCBwcm9wLnZhbHVlLCBpKTtcbiAgICAgICAgICB2YXIgdHdlZW4gPSBjbG9uZU9iamVjdChwcm9wKTtcbiAgICAgICAgICB0d2Vlbi5hbmltYXRhYmxlcyA9IGFuaW1hdGFibGU7XG4gICAgICAgICAgdHdlZW4udHlwZSA9IGFuaW1UeXBlO1xuICAgICAgICAgIHR3ZWVuLmZyb20gPSBnZXRUd2VlblZhbHVlcyhwcm9wLm5hbWUsIHZhbHVlcywgdHdlZW4udHlwZSwgdGFyZ2V0KS5mcm9tO1xuICAgICAgICAgIHR3ZWVuLnRvID0gZ2V0VHdlZW5WYWx1ZXMocHJvcC5uYW1lLCB2YWx1ZXMsIHR3ZWVuLnR5cGUsIHRhcmdldCkudG87XG4gICAgICAgICAgdHdlZW4ucm91bmQgPSAoaXMuY29sKHZhbHVlcy5mcm9tKSB8fCB0d2Vlbi5yb3VuZCkgPyAxIDogMDtcbiAgICAgICAgICB0d2Vlbi5kZWxheSA9IChpcy5mbmModHdlZW4uZGVsYXkpID8gdHdlZW4uZGVsYXkodGFyZ2V0LCBpLCBhbmltYXRhYmxlcy5sZW5ndGgpIDogdHdlZW4uZGVsYXkpIC8gYW5pbWF0aW9uLnNwZWVkO1xuICAgICAgICAgIHR3ZWVuLmR1cmF0aW9uID0gKGlzLmZuYyh0d2Vlbi5kdXJhdGlvbikgPyB0d2Vlbi5kdXJhdGlvbih0YXJnZXQsIGksIGFuaW1hdGFibGVzLmxlbmd0aCkgOiB0d2Vlbi5kdXJhdGlvbikgLyBhbmltYXRpb24uc3BlZWQ7XG4gICAgICAgICAgdHdlZW5zUHJvcHMucHVzaCh0d2Vlbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0d2VlbnNQcm9wcztcbiAgfVxuXG4gIHZhciBnZXRUd2VlbnMgPSBmdW5jdGlvbihhbmltYXRhYmxlcywgcHJvcHMpIHtcbiAgICB2YXIgdHdlZW5zUHJvcHMgPSBnZXRUd2VlbnNQcm9wcyhhbmltYXRhYmxlcywgcHJvcHMpO1xuICAgIHZhciBzcGxpdHRlZFByb3BzID0gZ3JvdXBBcnJheUJ5UHJvcHModHdlZW5zUHJvcHMsIFsnbmFtZScsICdmcm9tJywgJ3RvJywgJ2RlbGF5JywgJ2R1cmF0aW9uJ10pO1xuICAgIHJldHVybiBzcGxpdHRlZFByb3BzLm1hcChmdW5jdGlvbih0d2VlblByb3BzKSB7XG4gICAgICB2YXIgdHdlZW4gPSBjbG9uZU9iamVjdCh0d2VlblByb3BzWzBdKTtcbiAgICAgIHR3ZWVuLmFuaW1hdGFibGVzID0gdHdlZW5Qcm9wcy5tYXAoZnVuY3Rpb24ocCkgeyByZXR1cm4gcC5hbmltYXRhYmxlcyB9KTtcbiAgICAgIHR3ZWVuLnRvdGFsRHVyYXRpb24gPSB0d2Vlbi5kZWxheSArIHR3ZWVuLmR1cmF0aW9uO1xuICAgICAgcmV0dXJuIHR3ZWVuO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHJldmVyc2VUd2VlbnMgPSBmdW5jdGlvbihhbmltLCBkZWxheXMpIHtcbiAgICBhbmltLnR3ZWVucy5mb3JFYWNoKGZ1bmN0aW9uKHR3ZWVuKSB7XG4gICAgICB2YXIgdG9WYWwgPSB0d2Vlbi50bztcbiAgICAgIHZhciBmcm9tVmFsID0gdHdlZW4uZnJvbTtcbiAgICAgIHZhciBkZWxheVZhbCA9IGFuaW0uZHVyYXRpb24gLSAodHdlZW4uZGVsYXkgKyB0d2Vlbi5kdXJhdGlvbik7XG4gICAgICB0d2Vlbi5mcm9tID0gdG9WYWw7XG4gICAgICB0d2Vlbi50byA9IGZyb21WYWw7XG4gICAgICBpZiAoZGVsYXlzKSB0d2Vlbi5kZWxheSA9IGRlbGF5VmFsO1xuICAgIH0pO1xuICAgIGFuaW0ucmV2ZXJzZWQgPSBhbmltLnJldmVyc2VkID8gZmFsc2UgOiB0cnVlO1xuICB9XG5cbiAgdmFyIGdldFR3ZWVuc0R1cmF0aW9uID0gZnVuY3Rpb24odHdlZW5zKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KE1hdGgsIHR3ZWVucy5tYXAoZnVuY3Rpb24odHdlZW4peyByZXR1cm4gdHdlZW4udG90YWxEdXJhdGlvbjsgfSkpO1xuICB9XG5cbiAgdmFyIGdldFR3ZWVuc0RlbGF5ID0gZnVuY3Rpb24odHdlZW5zKSB7XG4gICAgcmV0dXJuIE1hdGgubWluLmFwcGx5KE1hdGgsIHR3ZWVucy5tYXAoZnVuY3Rpb24odHdlZW4peyByZXR1cm4gdHdlZW4uZGVsYXk7IH0pKTtcbiAgfVxuXG4gIC8vIHdpbGwtY2hhbmdlXG5cbiAgdmFyIGdldFdpbGxDaGFuZ2UgPSBmdW5jdGlvbihhbmltKSB7XG4gICAgdmFyIHByb3BzID0gW107XG4gICAgdmFyIGVscyA9IFtdO1xuICAgIGFuaW0udHdlZW5zLmZvckVhY2goZnVuY3Rpb24odHdlZW4pIHtcbiAgICAgIGlmICh0d2Vlbi50eXBlID09PSAnY3NzJyB8fCB0d2Vlbi50eXBlID09PSAndHJhbnNmb3JtJyApIHtcbiAgICAgICAgcHJvcHMucHVzaCh0d2Vlbi50eXBlID09PSAnY3NzJyA/IHN0cmluZ1RvSHlwaGVucyh0d2Vlbi5uYW1lKSA6ICd0cmFuc2Zvcm0nKTtcbiAgICAgICAgdHdlZW4uYW5pbWF0YWJsZXMuZm9yRWFjaChmdW5jdGlvbihhbmltYXRhYmxlKSB7IGVscy5wdXNoKGFuaW1hdGFibGUudGFyZ2V0KTsgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BlcnRpZXM6IHJlbW92ZUFycmF5RHVwbGljYXRlcyhwcm9wcykuam9pbignLCAnKSxcbiAgICAgIGVsZW1lbnRzOiByZW1vdmVBcnJheUR1cGxpY2F0ZXMoZWxzKVxuICAgIH1cbiAgfVxuXG4gIHZhciBzZXRXaWxsQ2hhbmdlID0gZnVuY3Rpb24oYW5pbSkge1xuICAgIHZhciB3aWxsQ2hhbmdlID0gZ2V0V2lsbENoYW5nZShhbmltKTtcbiAgICB3aWxsQ2hhbmdlLmVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5zdHlsZS53aWxsQ2hhbmdlID0gd2lsbENoYW5nZS5wcm9wZXJ0aWVzO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHJlbW92ZVdpbGxDaGFuZ2UgPSBmdW5jdGlvbihhbmltKSB7XG4gICAgdmFyIHdpbGxDaGFuZ2UgPSBnZXRXaWxsQ2hhbmdlKGFuaW0pO1xuICAgIHdpbGxDaGFuZ2UuZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWxsLWNoYW5nZScpO1xuICAgIH0pO1xuICB9XG5cbiAgLyogU3ZnIHBhdGggKi9cblxuICB2YXIgZ2V0UGF0aFByb3BzID0gZnVuY3Rpb24ocGF0aCkge1xuICAgIHZhciBlbCA9IGlzLnN0cihwYXRoKSA/IHNlbGVjdFN0cmluZyhwYXRoKVswXSA6IHBhdGg7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGg6IGVsLFxuICAgICAgdmFsdWU6IGVsLmdldFRvdGFsTGVuZ3RoKClcbiAgICB9XG4gIH1cblxuICB2YXIgc25hcFByb2dyZXNzVG9QYXRoID0gZnVuY3Rpb24odHdlZW4sIHByb2dyZXNzKSB7XG4gICAgdmFyIHBhdGhFbCA9IHR3ZWVuLnBhdGg7XG4gICAgdmFyIHBhdGhQcm9ncmVzcyA9IHR3ZWVuLnZhbHVlICogcHJvZ3Jlc3M7XG4gICAgdmFyIHBvaW50ID0gZnVuY3Rpb24ob2Zmc2V0KSB7XG4gICAgICB2YXIgbyA9IG9mZnNldCB8fCAwO1xuICAgICAgdmFyIHAgPSBwcm9ncmVzcyA+IDEgPyB0d2Vlbi52YWx1ZSArIG8gOiBwYXRoUHJvZ3Jlc3MgKyBvO1xuICAgICAgcmV0dXJuIHBhdGhFbC5nZXRQb2ludEF0TGVuZ3RoKHApO1xuICAgIH1cbiAgICB2YXIgcCA9IHBvaW50KCk7XG4gICAgdmFyIHAwID0gcG9pbnQoLTEpO1xuICAgIHZhciBwMSA9IHBvaW50KCsxKTtcbiAgICBzd2l0Y2ggKHR3ZWVuLm5hbWUpIHtcbiAgICAgIGNhc2UgJ3RyYW5zbGF0ZVgnOiByZXR1cm4gcC54O1xuICAgICAgY2FzZSAndHJhbnNsYXRlWSc6IHJldHVybiBwLnk7XG4gICAgICBjYXNlICdyb3RhdGUnOiByZXR1cm4gTWF0aC5hdGFuMihwMS55IC0gcDAueSwgcDEueCAtIHAwLngpICogMTgwIC8gTWF0aC5QSTtcbiAgICB9XG4gIH1cblxuICAvLyBQcm9ncmVzc1xuXG4gIHZhciBnZXRUd2VlblByb2dyZXNzID0gZnVuY3Rpb24odHdlZW4sIHRpbWUpIHtcbiAgICB2YXIgZWxhcHNlZCA9IE1hdGgubWluKE1hdGgubWF4KHRpbWUgLSB0d2Vlbi5kZWxheSwgMCksIHR3ZWVuLmR1cmF0aW9uKTtcbiAgICB2YXIgcGVyY2VudCA9IGVsYXBzZWQgLyB0d2Vlbi5kdXJhdGlvbjtcbiAgICB2YXIgcHJvZ3Jlc3MgPSB0d2Vlbi50by5udW1iZXJzLm1hcChmdW5jdGlvbihudW1iZXIsIHApIHtcbiAgICAgIHZhciBzdGFydCA9IHR3ZWVuLmZyb20ubnVtYmVyc1twXTtcbiAgICAgIHZhciBlYXNlZCA9IGVhc2luZ3NbdHdlZW4uZWFzaW5nXShwZXJjZW50LCB0d2Vlbi5lbGFzdGljaXR5KTtcbiAgICAgIHZhciB2YWwgPSB0d2Vlbi5wYXRoID8gc25hcFByb2dyZXNzVG9QYXRoKHR3ZWVuLCBlYXNlZCkgOiBzdGFydCArIGVhc2VkICogKG51bWJlciAtIHN0YXJ0KTtcbiAgICAgIHZhbCA9IHR3ZWVuLnJvdW5kID8gTWF0aC5yb3VuZCh2YWwgKiB0d2Vlbi5yb3VuZCkgLyB0d2Vlbi5yb3VuZCA6IHZhbDtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlY29tcG9zZVZhbHVlKHByb2dyZXNzLCB0d2Vlbi50by5zdHJpbmdzLCB0d2Vlbi5mcm9tLnN0cmluZ3MpO1xuICB9XG5cbiAgdmFyIHNldEFuaW1hdGlvblByb2dyZXNzID0gZnVuY3Rpb24oYW5pbSwgdGltZSkge1xuICAgIHZhciB0cmFuc2Zvcm1zO1xuICAgIGFuaW0uY3VycmVudFRpbWUgPSB0aW1lO1xuICAgIGFuaW0ucHJvZ3Jlc3MgPSAodGltZSAvIGFuaW0uZHVyYXRpb24pICogMTAwO1xuICAgIGZvciAodmFyIHQgPSAwOyB0IDwgYW5pbS50d2VlbnMubGVuZ3RoOyB0KyspIHtcbiAgICAgIHZhciB0d2VlbiA9IGFuaW0udHdlZW5zW3RdO1xuICAgICAgdHdlZW4uY3VycmVudFZhbHVlID0gZ2V0VHdlZW5Qcm9ncmVzcyh0d2VlbiwgdGltZSk7XG4gICAgICB2YXIgcHJvZ3Jlc3MgPSB0d2Vlbi5jdXJyZW50VmFsdWU7XG4gICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHR3ZWVuLmFuaW1hdGFibGVzLmxlbmd0aDsgYSsrKSB7XG4gICAgICAgIHZhciBhbmltYXRhYmxlID0gdHdlZW4uYW5pbWF0YWJsZXNbYV07XG4gICAgICAgIHZhciBpZCA9IGFuaW1hdGFibGUuaWQ7XG4gICAgICAgIHZhciB0YXJnZXQgPSBhbmltYXRhYmxlLnRhcmdldDtcbiAgICAgICAgdmFyIG5hbWUgPSB0d2Vlbi5uYW1lO1xuICAgICAgICBzd2l0Y2ggKHR3ZWVuLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdjc3MnOiB0YXJnZXQuc3R5bGVbbmFtZV0gPSBwcm9ncmVzczsgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYXR0cmlidXRlJzogdGFyZ2V0LnNldEF0dHJpYnV0ZShuYW1lLCBwcm9ncmVzcyk7IGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ29iamVjdCc6IHRhcmdldFtuYW1lXSA9IHByb2dyZXNzOyBicmVhaztcbiAgICAgICAgICBjYXNlICd0cmFuc2Zvcm0nOlxuICAgICAgICAgIGlmICghdHJhbnNmb3JtcykgdHJhbnNmb3JtcyA9IHt9O1xuICAgICAgICAgIGlmICghdHJhbnNmb3Jtc1tpZF0pIHRyYW5zZm9ybXNbaWRdID0gW107XG4gICAgICAgICAgdHJhbnNmb3Jtc1tpZF0ucHVzaChwcm9ncmVzcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRyYW5zZm9ybXMpIHtcbiAgICAgIGlmICghdHJhbnNmb3JtKSB0cmFuc2Zvcm0gPSAoZ2V0Q1NTVmFsdWUoZG9jdW1lbnQuYm9keSwgdHJhbnNmb3JtU3RyKSA/ICcnIDogJy13ZWJraXQtJykgKyB0cmFuc2Zvcm1TdHI7XG4gICAgICBmb3IgKHZhciB0IGluIHRyYW5zZm9ybXMpIHtcbiAgICAgICAgYW5pbS5hbmltYXRhYmxlc1t0XS50YXJnZXQuc3R5bGVbdHJhbnNmb3JtXSA9IHRyYW5zZm9ybXNbdF0uam9pbignICcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEFuaW1hdGlvblxuXG4gIHZhciBjcmVhdGVBbmltYXRpb24gPSBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICB2YXIgYW5pbSA9IHt9O1xuICAgIGFuaW0uYW5pbWF0YWJsZXMgPSBnZXRBbmltYXRhYmxlcyhwYXJhbXMudGFyZ2V0cyk7XG4gICAgYW5pbS5zZXR0aW5ncyA9IG1lcmdlT2JqZWN0cyhwYXJhbXMsIGRlZmF1bHRTZXR0aW5ncyk7XG4gICAgYW5pbS5wcm9wZXJ0aWVzID0gZ2V0UHJvcGVydGllcyhwYXJhbXMsIGFuaW0uc2V0dGluZ3MpO1xuICAgIGFuaW0udHdlZW5zID0gZ2V0VHdlZW5zKGFuaW0uYW5pbWF0YWJsZXMsIGFuaW0ucHJvcGVydGllcyk7XG4gICAgYW5pbS5kdXJhdGlvbiA9IGFuaW0udHdlZW5zLmxlbmd0aCA/IGdldFR3ZWVuc0R1cmF0aW9uKGFuaW0udHdlZW5zKSA6IHBhcmFtcy5kdXJhdGlvbjtcbiAgICBhbmltLmRlbGF5ID0gYW5pbS50d2VlbnMubGVuZ3RoID8gZ2V0VHdlZW5zRGVsYXkoYW5pbS50d2VlbnMpIDogcGFyYW1zLmRlbGF5O1xuICAgIGFuaW0uY3VycmVudFRpbWUgPSAwO1xuICAgIGFuaW0ucHJvZ3Jlc3MgPSAwO1xuICAgIGFuaW0uZW5kZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gYW5pbTtcbiAgfVxuXG4gIC8vIFB1YmxpY1xuXG4gIHZhciBhbmltYXRpb25zID0gW107XG4gIHZhciByYWYgPSAwO1xuXG4gIHZhciBlbmdpbmUgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHBsYXkgPSBmdW5jdGlvbigpIHsgcmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApOyB9O1xuICAgIHZhciBzdGVwID0gZnVuY3Rpb24odCkge1xuICAgICAgaWYgKGFuaW1hdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYW5pbWF0aW9ucy5sZW5ndGg7IGkrKykgYW5pbWF0aW9uc1tpXS50aWNrKHQpO1xuICAgICAgICBwbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xuICAgICAgICByYWYgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGxheTtcbiAgfSkoKTtcblxuICB2YXIgYW5pbWF0aW9uID0gZnVuY3Rpb24ocGFyYW1zKSB7XG5cbiAgICB2YXIgYW5pbSA9IGNyZWF0ZUFuaW1hdGlvbihwYXJhbXMpO1xuICAgIHZhciB0aW1lID0ge307XG5cbiAgICBhbmltLnRpY2sgPSBmdW5jdGlvbihub3cpIHtcbiAgICAgIGFuaW0uZW5kZWQgPSBmYWxzZTtcbiAgICAgIGlmICghdGltZS5zdGFydCkgdGltZS5zdGFydCA9IG5vdztcbiAgICAgIHRpbWUuY3VycmVudCA9IE1hdGgubWluKE1hdGgubWF4KHRpbWUubGFzdCArIG5vdyAtIHRpbWUuc3RhcnQsIDApLCBhbmltLmR1cmF0aW9uKTtcbiAgICAgIHNldEFuaW1hdGlvblByb2dyZXNzKGFuaW0sIHRpbWUuY3VycmVudCk7XG4gICAgICB2YXIgcyA9IGFuaW0uc2V0dGluZ3M7XG4gICAgICBpZiAodGltZS5jdXJyZW50ID49IGFuaW0uZGVsYXkpIHtcbiAgICAgICAgaWYgKHMuYmVnaW4pIHMuYmVnaW4oYW5pbSk7IHMuYmVnaW4gPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChzLnVwZGF0ZSkgcy51cGRhdGUoYW5pbSk7XG4gICAgICB9XG4gICAgICBpZiAodGltZS5jdXJyZW50ID49IGFuaW0uZHVyYXRpb24pIHtcbiAgICAgICAgaWYgKHMubG9vcCkge1xuICAgICAgICAgIHRpbWUuc3RhcnQgPSBub3c7XG4gICAgICAgICAgaWYgKHMuZGlyZWN0aW9uID09PSAnYWx0ZXJuYXRlJykgcmV2ZXJzZVR3ZWVucyhhbmltLCB0cnVlKTtcbiAgICAgICAgICBpZiAoaXMubnVtKHMubG9vcCkpIHMubG9vcC0tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFuaW0uZW5kZWQgPSB0cnVlO1xuICAgICAgICAgIGFuaW0ucGF1c2UoKTtcbiAgICAgICAgICBpZiAocy5jb21wbGV0ZSkgcy5jb21wbGV0ZShhbmltKTtcbiAgICAgICAgfVxuICAgICAgICB0aW1lLmxhc3QgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFuaW0uc2VlayA9IGZ1bmN0aW9uKHByb2dyZXNzKSB7XG4gICAgICBzZXRBbmltYXRpb25Qcm9ncmVzcyhhbmltLCAocHJvZ3Jlc3MgLyAxMDApICogYW5pbS5kdXJhdGlvbik7XG4gICAgfVxuXG4gICAgYW5pbS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVtb3ZlV2lsbENoYW5nZShhbmltKTtcbiAgICAgIHZhciBpID0gYW5pbWF0aW9ucy5pbmRleE9mKGFuaW0pO1xuICAgICAgaWYgKGkgPiAtMSkgYW5pbWF0aW9ucy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuXG4gICAgYW5pbS5wbGF5ID0gZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICBhbmltLnBhdXNlKCk7XG4gICAgICBpZiAocGFyYW1zKSBhbmltID0gbWVyZ2VPYmplY3RzKGNyZWF0ZUFuaW1hdGlvbihtZXJnZU9iamVjdHMocGFyYW1zLCBhbmltLnNldHRpbmdzKSksIGFuaW0pO1xuICAgICAgdGltZS5zdGFydCA9IDA7XG4gICAgICB0aW1lLmxhc3QgPSBhbmltLmVuZGVkID8gMCA6IGFuaW0uY3VycmVudFRpbWU7XG4gICAgICB2YXIgcyA9IGFuaW0uc2V0dGluZ3M7XG4gICAgICBpZiAocy5kaXJlY3Rpb24gPT09ICdyZXZlcnNlJykgcmV2ZXJzZVR3ZWVucyhhbmltKTtcbiAgICAgIGlmIChzLmRpcmVjdGlvbiA9PT0gJ2FsdGVybmF0ZScgJiYgIXMubG9vcCkgcy5sb29wID0gMTtcbiAgICAgIHNldFdpbGxDaGFuZ2UoYW5pbSk7XG4gICAgICBhbmltYXRpb25zLnB1c2goYW5pbSk7XG4gICAgICBpZiAoIXJhZikgZW5naW5lKCk7XG4gICAgfVxuXG4gICAgYW5pbS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoYW5pbS5yZXZlcnNlZCkgcmV2ZXJzZVR3ZWVucyhhbmltKTtcbiAgICAgIGFuaW0ucGF1c2UoKTtcbiAgICAgIGFuaW0uc2VlaygwKTtcbiAgICAgIGFuaW0ucGxheSgpO1xuICAgIH1cblxuICAgIGlmIChhbmltLnNldHRpbmdzLmF1dG9wbGF5KSBhbmltLnBsYXkoKTtcblxuICAgIHJldHVybiBhbmltO1xuXG4gIH1cblxuICAvLyBSZW1vdmUgb25lIG9yIG11bHRpcGxlIHRhcmdldHMgZnJvbSBhbGwgYWN0aXZlIGFuaW1hdGlvbnMuXG5cbiAgdmFyIHJlbW92ZSA9IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XG4gICAgdmFyIHRhcmdldHMgPSBmbGF0dGVuQXJyYXkoaXMuYXJyKGVsZW1lbnRzKSA/IGVsZW1lbnRzLm1hcCh0b0FycmF5KSA6IHRvQXJyYXkoZWxlbWVudHMpKTtcbiAgICBmb3IgKHZhciBpID0gYW5pbWF0aW9ucy5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBhbmltYXRpb24gPSBhbmltYXRpb25zW2ldO1xuICAgICAgdmFyIHR3ZWVucyA9IGFuaW1hdGlvbi50d2VlbnM7XG4gICAgICBmb3IgKHZhciB0ID0gdHdlZW5zLmxlbmd0aC0xOyB0ID49IDA7IHQtLSkge1xuICAgICAgICB2YXIgYW5pbWF0YWJsZXMgPSB0d2VlbnNbdF0uYW5pbWF0YWJsZXM7XG4gICAgICAgIGZvciAodmFyIGEgPSBhbmltYXRhYmxlcy5sZW5ndGgtMTsgYSA+PSAwOyBhLS0pIHtcbiAgICAgICAgICBpZiAoYXJyYXlDb250YWlucyh0YXJnZXRzLCBhbmltYXRhYmxlc1thXS50YXJnZXQpKSB7XG4gICAgICAgICAgICBhbmltYXRhYmxlcy5zcGxpY2UoYSwgMSk7XG4gICAgICAgICAgICBpZiAoIWFuaW1hdGFibGVzLmxlbmd0aCkgdHdlZW5zLnNwbGljZSh0LCAxKTtcbiAgICAgICAgICAgIGlmICghdHdlZW5zLmxlbmd0aCkgYW5pbWF0aW9uLnBhdXNlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYW5pbWF0aW9uLnZlcnNpb24gPSB2ZXJzaW9uO1xuICBhbmltYXRpb24uc3BlZWQgPSAxO1xuICBhbmltYXRpb24ubGlzdCA9IGFuaW1hdGlvbnM7XG4gIGFuaW1hdGlvbi5yZW1vdmUgPSByZW1vdmU7XG4gIGFuaW1hdGlvbi5lYXNpbmdzID0gZWFzaW5ncztcbiAgYW5pbWF0aW9uLmdldFZhbHVlID0gZ2V0SW5pdGlhbFRhcmdldFZhbHVlO1xuICBhbmltYXRpb24ucGF0aCA9IGdldFBhdGhQcm9wcztcbiAgYW5pbWF0aW9uLnJhbmRvbSA9IHJhbmRvbTtcblxuICByZXR1cm4gYW5pbWF0aW9uO1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWJ1bG1hLWNvbGxhcHNlL34vYW5pbWVqcy9hbmltZS5qc1xuLy8gbW9kdWxlIGlkID0gNjc3XG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZTIwZTkwOTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Db2xsYXBzZS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NvbGxhcHNlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1lMjBlOTA5MlxcXCJ9IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NvbGxhcHNlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9ub2RlX21vZHVsZXMvdnVlLWJ1bG1hLWNvbGxhcHNlL3NyYy9Db2xsYXBzZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBDb2xsYXBzZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZTIwZTkwOTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1lMjBlOTA5MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1idWxtYS1jb2xsYXBzZS9zcmMvQ29sbGFwc2UudnVlXG4vLyBtb2R1bGUgaWQgPSA2ODNcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlciEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTk4ZmE5NWM2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vSXRlbS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0l0ZW0udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTk4ZmE5NWM2XFxcIn0hLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSXRlbS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2tpbW5oL0NvZGVzL1dlYlNob3AvYWRtaW4tdGVtcGxhdGUvbGFyYXZlbC12dWUtYWRtaW4vbm9kZV9tb2R1bGVzL3Z1ZS1idWxtYS1jb2xsYXBzZS9zcmMvSXRlbS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBJdGVtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi05OGZhOTVjNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTk4ZmE5NWM2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWJ1bG1hLWNvbGxhcHNlL3NyYy9JdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjg0XG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1hbmNlc3RvclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50IGlzLTRcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIk5lc3RzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgaXMtZmxleFwiXG4gIH0sIFtfYygnY29sbGFwc2UnLCBbX2MoJ2NvbGxhcHNlLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJDb21wb25lbnRzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBoYXNlbGx1cyBuZWMgaWFjdWxpcyBtYXVyaXMuIEBidWxtYWlvLiAjY3NzICNyZXNwb25zaXZlXFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdjb2xsYXBzZS1pdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiRWxlbWVudHNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGhhc2VsbHVzIG5lYyBpYWN1bGlzIG1hdXJpcy4gQGJ1bG1haW8uICNjc3MgI3Jlc3BvbnNpdmVcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2NvbGxhcHNlLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJOZXN0c1wiXG4gICAgfVxuICB9LCBbX2MoJ2NvbGxhcHNlJywgW19jKCdjb2xsYXBzZS1pdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiTmVzdCBDaGlsZFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGhhc2VsbHVzIG5lYyBpYWN1bGlzIG1hdXJpcy4gQGJ1bG1haW8uICNjc3MgI3Jlc3BvbnNpdmVcXG4gICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSwgMSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnQgaXMtNFwiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiQWNjb3JkaW9uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgaXMtZmxleFwiXG4gIH0sIFtfYygnY29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYWNjb3JkaW9uXCI6IFwiXCJcbiAgICB9XG4gIH0sIFtfYygnY29sbGFwc2UtaXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIkNvbXBvbmVudHNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGhhc2VsbHVzIG5lYyBpYWN1bGlzIG1hdXJpcy4gQGJ1bG1haW8uICNjc3MgI3Jlc3BvbnNpdmVcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2NvbGxhcHNlLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJFbGVtZW50c1wiLFxuICAgICAgXCJzZWxlY3RlZFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgbmVjIGlhY3VsaXMgbWF1cmlzLiBAYnVsbWFpby4gI2NzcyAjcmVzcG9uc2l2ZVxcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnY29sbGFwc2UtaXRlbScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIk5lc3RzXCJcbiAgICB9XG4gIH0sIFtfYygnY29sbGFwc2UnLCBbX2MoJ2NvbGxhcHNlLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJOZXN0IENoaWxkXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQaGFzZWxsdXMgbmVjIGlhY3VsaXMgbWF1cmlzLiBAYnVsbWFpby4gI2NzcyAjcmVzcG9uc2l2ZVxcbiAgICAgICAgICAgICAgICBcIildKV0sIDEpXSwgMSldLCAxKV0sIDEpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudCBpcy00XCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJEZWZhdWx0IFNlbGVjdGVkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgaXMtZmxleFwiXG4gIH0sIFtfYygnY29sbGFwc2UnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYWNjb3JkaW9uXCI6IFwiXCIsXG4gICAgICBcImlzLWZ1bGx3aWR0aFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2NvbGxhcHNlLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJDb21wb25lbnRzXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBoYXNlbGx1cyBuZWMgaWFjdWxpcyBtYXVyaXMuIEBidWxtYWlvLiAjY3NzICNyZXNwb25zaXZlXFxuICAgICAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdjb2xsYXBzZS1pdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiRWxlbWVudHNcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGhhc2VsbHVzIG5lYyBpYWN1bGlzIG1hdXJpcy4gQGJ1bG1haW8uICNjc3MgI3Jlc3BvbnNpdmVcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2NvbGxhcHNlLWl0ZW0nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJOZXN0c1wiLFxuICAgICAgXCJzZWxlY3RlZFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2NvbGxhcHNlJywgW19jKCdjb2xsYXBzZS1pdGVtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiTmVzdCBDaGlsZFwiLFxuICAgICAgXCJzZWxlY3RlZFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGhhc2VsbHVzIG5lYyBpYWN1bGlzIG1hdXJpcy4gQGJ1bG1haW8uICNjc3MgI3Jlc3BvbnNpdmVcXG4gICAgICAgICAgICAgICAgXCIpXSldLCAxKV0sIDEpXSwgMSldLCAxKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTAwNGIwOGI0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDA0YjA4YjRcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Db2xsYXBzZS52dWVcbi8vIG1vZHVsZSBpZCA9IDcwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkIGNvbGxhcHNlLWl0ZW1cIixcbiAgICBjbGFzczoge1xuICAgICAgJ2lzLWZ1bGx3aWR0aCc6IF92bS4kcGFyZW50LmlzRnVsbHdpZHRoLCAnaXMtYWN0aXZlJzogX3ZtLmlzQWN0aXZlZFxuICAgIH1cbiAgfSwgW19jKCdoZWFkZXInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXIgdG91Y2hhYmxlXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicm9sZVwiOiBcInRhYlwiLFxuICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IF92bS5zZWxlY3RlZCA/ICd0cnVlJyA6ICdmYXNlJ1xuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRvZ2dsZVxuICAgIH1cbiAgfSwgW19jKCdoMycsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlci10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygndHJhbnNpdGlvbicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJuYW1lXCI6IFwiY29sbGFwc2VkLWZhZGVcIixcbiAgICAgIFwiY3NzXCI6IGZhbHNlLFxuICAgICAgXCJhcHBlYXJcIjogXCJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiYmVmb3JlLWFwcGVhclwiOiBfdm0uYmVmb3JlLFxuICAgICAgXCJhcHBlYXJcIjogX3ZtLmVudGVyLFxuICAgICAgXCJhcHBlYXItY2FuY2VsXCI6IF92bS5jYW5jZWwsXG4gICAgICBcImJlZm9yZS1lbnRlclwiOiBfdm0uYmVmb3JlLFxuICAgICAgXCJlbnRlclwiOiBfdm0uZW50ZXIsXG4gICAgICBcImVudGVyLWNhbmNlbFwiOiBfdm0uY2FuY2VsLFxuICAgICAgXCJsZWF2ZVwiOiBfdm0ubGVhdmUsXG4gICAgICBcImxlYXZlLWNhbmNlbFwiOiBfdm0uY2FuY2VsXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgdmFsdWU6IChfdm0uaXNBY3RpdmVkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiaXNBY3RpdmVkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnQtYm94XCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKV0pXSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyLWljb25cIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtYW5nbGUtcmlnaHRcIlxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtOThmYTk1YzZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi05OGZhOTVjNlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi92dWUtYnVsbWEtY29sbGFwc2Uvc3JjL0l0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSA3NTVcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sbGFwc2UgaXMtZnVsbHdpZHRoXCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1lMjBlOTA5MlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWUyMGU5MDkyXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS1jb2xsYXBzZS9zcmMvQ29sbGFwc2UudnVlXG4vLyBtb2R1bGUgaWQgPSA3NjRcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTAwNGIwOGI0XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29sbGFwc2UudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI3MjBhODUwNVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wMDRiMDhiNFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbGxhcHNlLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0wMDRiMDhiNFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbGxhcHNlLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDA0YjA4YjRcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Db2xsYXBzZS52dWVcbi8vIG1vZHVsZSBpZCA9IDc3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDgiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTk4ZmE5NWM2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9JdGVtLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIyODFkNTg3NlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOThmYTk1YzZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0l0ZW0udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi05OGZhOTVjNlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSXRlbS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTk4ZmE5NWM2XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vfi92dWUtYnVsbWEtY29sbGFwc2Uvc3JjL0l0ZW0udnVlXG4vLyBtb2R1bGUgaWQgPSA3OThcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZTIwZTkwOTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Db2xsYXBzZS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMzc2NGVlOGVcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1lMjBlOTA5MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbGxhcHNlLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LWUyMGU5MDkyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29sbGFwc2UudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZTIwZTkwOTJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS1jb2xsYXBzZS9zcmMvQ29sbGFwc2UudnVlXG4vLyBtb2R1bGUgaWQgPSA4MTJcbi8vIG1vZHVsZSBjaHVua3MgPSA4Il0sInNvdXJjZVJvb3QiOiIifQ==
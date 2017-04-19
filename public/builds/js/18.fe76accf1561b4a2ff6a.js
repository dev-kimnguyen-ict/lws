webpackJsonp([18],{

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(810)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(576),
  /* template */
  __webpack_require__(749),
  /* scopeId */
  "data-v-76ce04f4",
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/charts/Chartist.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Chartist.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-76ce04f4", Component.options)
  } else {
    hotAPI.reload("data-v-76ce04f4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chartist = __webpack_require__(611);

var _chartist2 = _interopRequireDefault(_chartist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = ['Line', 'Bar', 'Pie']; //
//
//
//

exports.default = {

  props: {
    type: {
      type: String,
      default: 'Line',
      required: true,
      validator: function validator(value) {
        return types.includes(value);
      }
    },
    data: {
      type: Object,
      required: true,
      default: function _default() {
        return {};
      }
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    responsiveOptions: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },

  data: function data() {
    return {
      chart: null
    };
  },
  mounted: function mounted() {
    this.chart = new _chartist2.default[this.type](this.$el, this.data, this.options, this.responsiveOptions);
  },


  watch: {
    data: function data(val) {
      var _this = this;

      this.$nextTick(function () {
        return _this.chart.update();
      });
    }
  }
};

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueBulmaChartist = __webpack_require__(682);

var _vueBulmaChartist2 = _interopRequireDefault(_vueBulmaChartist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Chartist: _vueBulmaChartist2.default
  },

  data: function data() {
    return {
      series: [[12, 9, 7, 8, 5], [2, 1, 3.5, 7, 3], [1, 3, 4, 5, 6]],
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      linesOptions: {
        fullWidth: true,
        chartPadding: {
          right: 40
        }
      },

      lineAreaData: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [[5, 9, 7, 8, 5, 3, 5, 4]]
      },
      lineAreaOptions: {
        low: 0,
        showArea: true
      },

      barsData: {
        labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
        series: [[5, 4, 3, 7], [3, 2, 9, 5], [1, 5, 8, 4], [2, 3, 4, 6], [4, 1, 2, 1]]
      },
      barsOptions: {
        // Default mobile configuration
        stackBars: true,
        axisX: {
          labelInterpolationFnc: function labelInterpolationFnc(value) {
            return value.split(/\s+/).map(function (word) {
              return word[0];
            }).join('');
          }
        },
        axisY: {
          offset: 20
        }
      },
      barsResponsiveOptions: [
      // Options override for media > 400px
      ['screen and (min-width: 400px)', {
        reverseData: true,
        horizontalBars: true,
        axisX: {
          labelInterpolationFnc: function labelInterpolationFnc(n) {
            return n;
          }
        },
        axisY: {
          offset: 60
        }
      }],
      // Options override for media > 800px
      ['screen and (min-width: 800px)', {
        stackBars: false,
        seriesBarDistance: 10
      }],
      // Options override for media > 1000px
      ['screen and (min-width: 1000px)', {
        reverseData: false,
        horizontalBars: false,
        seriesBarDistance: 15
      }]],

      pieData: {
        series: [5, 3, 4]
      },
      pieOptions: {
        chartPadding: 30,
        labelOffset: 60,
        labelDirection: 'explode',
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return value;
        }
      },

      gaugeData: {
        series: [20, 10, 30, 40]
      },
      gaugeOptions: {
        donut: true,
        donutWidth: 60,
        startAngle: 270,
        total: 200,
        showLabel: true
      },

      donutData: {
        series: [10, 20, 50, 20, 5, 50, 15],
        labels: [1, 2, 3, 4, 5, 6, 7]
      },
      donutOptions: {
        donut: true
      }
    };
  },


  computed: {
    linesData: function linesData() {
      return {
        labels: this.labels,
        series: this.series
      };
    }
  },

  created: function created() {
    var _this = this;

    setInterval(function () {
      // https://vuejs.org/guide/list.html#Mutation-Methods
      _this.series.unshift(_this.series.pop());
    }, 1597);
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

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return (root['Chartist'] = factory());
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    root['Chartist'] = factory();
  }
}(this, function () {

/* Chartist.js 0.10.0
 * Copyright © 2016 Gion Kunz
 * Free to use under either the WTFPL license or the MIT license.
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
 */
/**
 * The core module of Chartist that is mainly providing static functions and higher level functions for chart modules.
 *
 * @module Chartist.Core
 */
var Chartist = {
  version: '0.10.0'
};

(function (window, document, Chartist) {
  'use strict';

  /**
   * This object contains all namespaces used within Chartist.
   *
   * @memberof Chartist.Core
   * @type {{svg: string, xmlns: string, xhtml: string, xlink: string, ct: string}}
   */
  Chartist.namespaces = {
    svg: 'http://www.w3.org/2000/svg',
    xmlns: 'http://www.w3.org/2000/xmlns/',
    xhtml: 'http://www.w3.org/1999/xhtml',
    xlink: 'http://www.w3.org/1999/xlink',
    ct: 'http://gionkunz.github.com/chartist-js/ct'
  };

  /**
   * Helps to simplify functional style code
   *
   * @memberof Chartist.Core
   * @param {*} n This exact value will be returned by the noop function
   * @return {*} The same value that was provided to the n parameter
   */
  Chartist.noop = function (n) {
    return n;
  };

  /**
   * Generates a-z from a number 0 to 26
   *
   * @memberof Chartist.Core
   * @param {Number} n A number from 0 to 26 that will result in a letter a-z
   * @return {String} A character from a-z based on the input number n
   */
  Chartist.alphaNumerate = function (n) {
    // Limit to a-z
    return String.fromCharCode(97 + n % 26);
  };

  /**
   * Simple recursive object extend
   *
   * @memberof Chartist.Core
   * @param {Object} target Target object where the source will be merged into
   * @param {Object...} sources This object (objects) will be merged into target and then target is returned
   * @return {Object} An object that has the same reference as target but is extended and merged with the properties of source
   */
  Chartist.extend = function (target) {
    var i, source, sourceProp;
    target = target || {};

    for (i = 1; i < arguments.length; i++) {
      source = arguments[i];
      for (var prop in source) {
        sourceProp = source[prop];
        if (typeof sourceProp === 'object' && sourceProp !== null && !(sourceProp instanceof Array)) {
          target[prop] = Chartist.extend(target[prop], sourceProp);
        } else {
          target[prop] = sourceProp;
        }
      }
    }

    return target;
  };

  /**
   * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
   *
   * @memberof Chartist.Core
   * @param {String} str
   * @param {String} subStr
   * @param {String} newSubStr
   * @return {String}
   */
  Chartist.replaceAll = function(str, subStr, newSubStr) {
    return str.replace(new RegExp(subStr, 'g'), newSubStr);
  };

  /**
   * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
   *
   * @memberof Chartist.Core
   * @param {Number} value
   * @param {String} unit
   * @return {String} Returns the passed number value with unit.
   */
  Chartist.ensureUnit = function(value, unit) {
    if(typeof value === 'number') {
      value = value + unit;
    }

    return value;
  };

  /**
   * Converts a number or string to a quantity object.
   *
   * @memberof Chartist.Core
   * @param {String|Number} input
   * @return {Object} Returns an object containing the value as number and the unit as string.
   */
  Chartist.quantity = function(input) {
    if (typeof input === 'string') {
      var match = (/^(\d+)\s*(.*)$/g).exec(input);
      return {
        value : +match[1],
        unit: match[2] || undefined
      };
    }
    return { value: input };
  };

  /**
   * This is a wrapper around document.querySelector that will return the query if it's already of type Node
   *
   * @memberof Chartist.Core
   * @param {String|Node} query The query to use for selecting a Node or a DOM node that will be returned directly
   * @return {Node}
   */
  Chartist.querySelector = function(query) {
    return query instanceof Node ? query : document.querySelector(query);
  };

  /**
   * Functional style helper to produce array with given length initialized with undefined values
   *
   * @memberof Chartist.Core
   * @param length
   * @return {Array}
   */
  Chartist.times = function(length) {
    return Array.apply(null, new Array(length));
  };

  /**
   * Sum helper to be used in reduce functions
   *
   * @memberof Chartist.Core
   * @param previous
   * @param current
   * @return {*}
   */
  Chartist.sum = function(previous, current) {
    return previous + (current ? current : 0);
  };

  /**
   * Multiply helper to be used in `Array.map` for multiplying each value of an array with a factor.
   *
   * @memberof Chartist.Core
   * @param {Number} factor
   * @returns {Function} Function that can be used in `Array.map` to multiply each value in an array
   */
  Chartist.mapMultiply = function(factor) {
    return function(num) {
      return num * factor;
    };
  };

  /**
   * Add helper to be used in `Array.map` for adding a addend to each value of an array.
   *
   * @memberof Chartist.Core
   * @param {Number} addend
   * @returns {Function} Function that can be used in `Array.map` to add a addend to each value in an array
   */
  Chartist.mapAdd = function(addend) {
    return function(num) {
      return num + addend;
    };
  };

  /**
   * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
   *
   * @memberof Chartist.Core
   * @param arr
   * @param cb
   * @return {Array}
   */
  Chartist.serialMap = function(arr, cb) {
    var result = [],
        length = Math.max.apply(null, arr.map(function(e) {
          return e.length;
        }));

    Chartist.times(length).forEach(function(e, index) {
      var args = arr.map(function(e) {
        return e[index];
      });

      result[index] = cb.apply(null, args);
    });

    return result;
  };

  /**
   * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
   *
   * @memberof Chartist.Core
   * @param {Number} value The value that should be rounded with precision
   * @param {Number} [digits] The number of digits after decimal used to do the rounding
   * @returns {number} Rounded value
   */
  Chartist.roundWithPrecision = function(value, digits) {
    var precision = Math.pow(10, digits || Chartist.precision);
    return Math.round(value * precision) / precision;
  };

  /**
   * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
   *
   * @memberof Chartist.Core
   * @type {number}
   */
  Chartist.precision = 8;

  /**
   * A map with characters to escape for strings to be safely used as attribute values.
   *
   * @memberof Chartist.Core
   * @type {Object}
   */
  Chartist.escapingMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#039;'
  };

  /**
   * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
   * If called with null or undefined the function will return immediately with null or undefined.
   *
   * @memberof Chartist.Core
   * @param {Number|String|Object} data
   * @return {String}
   */
  Chartist.serialize = function(data) {
    if(data === null || data === undefined) {
      return data;
    } else if(typeof data === 'number') {
      data = ''+data;
    } else if(typeof data === 'object') {
      data = JSON.stringify({data: data});
    }

    return Object.keys(Chartist.escapingMap).reduce(function(result, key) {
      return Chartist.replaceAll(result, key, Chartist.escapingMap[key]);
    }, data);
  };

  /**
   * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
   *
   * @memberof Chartist.Core
   * @param {String} data
   * @return {String|Number|Object}
   */
  Chartist.deserialize = function(data) {
    if(typeof data !== 'string') {
      return data;
    }

    data = Object.keys(Chartist.escapingMap).reduce(function(result, key) {
      return Chartist.replaceAll(result, Chartist.escapingMap[key], key);
    }, data);

    try {
      data = JSON.parse(data);
      data = data.data !== undefined ? data.data : data;
    } catch(e) {}

    return data;
  };

  /**
   * Create or reinitialize the SVG element for the chart
   *
   * @memberof Chartist.Core
   * @param {Node} container The containing DOM Node object that will be used to plant the SVG element
   * @param {String} width Set the width of the SVG element. Default is 100%
   * @param {String} height Set the height of the SVG element. Default is 100%
   * @param {String} className Specify a class to be added to the SVG element
   * @return {Object} The created/reinitialized SVG element
   */
  Chartist.createSvg = function (container, width, height, className) {
    var svg;

    width = width || '100%';
    height = height || '100%';

    // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
    // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/
    Array.prototype.slice.call(container.querySelectorAll('svg')).filter(function filterChartistSvgObjects(svg) {
      return svg.getAttributeNS(Chartist.namespaces.xmlns, 'ct');
    }).forEach(function removePreviousElement(svg) {
      container.removeChild(svg);
    });

    // Create svg object with width and height or use 100% as default
    svg = new Chartist.Svg('svg').attr({
      width: width,
      height: height
    }).addClass(className).attr({
      style: 'width: ' + width + '; height: ' + height + ';'
    });

    // Add the DOM node to our container
    container.appendChild(svg._node);

    return svg;
  };

  /**
   * Ensures that the data object passed as second argument to the charts is present and correctly initialized.
   *
   * @param  {Object} data The data object that is passed as second argument to the charts
   * @return {Object} The normalized data object
   */
  Chartist.normalizeData = function(data, reverse, multi) {
    var labelCount;
    var output = {
      raw: data,
      normalized: {}
    };

    // Check if we should generate some labels based on existing series data
    output.normalized.series = Chartist.getDataArray({
      series: data.series || []
    }, reverse, multi);

    // If all elements of the normalized data array are arrays we're dealing with
    // multi series data and we need to find the largest series if they are un-even
    if (output.normalized.series.every(function(value) {
        return value instanceof Array;
      })) {
      // Getting the series with the the most elements
      labelCount = Math.max.apply(null, output.normalized.series.map(function(series) {
        return series.length;
      }));
    } else {
      // We're dealing with Pie data so we just take the normalized array length
      labelCount = output.normalized.series.length;
    }

    output.normalized.labels = (data.labels || []).slice();
    // Padding the labels to labelCount with empty strings
    Array.prototype.push.apply(
      output.normalized.labels,
      Chartist.times(Math.max(0, labelCount - output.normalized.labels.length)).map(function() {
        return '';
      })
    );

    if(reverse) {
      Chartist.reverseData(output.normalized);
    }

    return output;
  };

  /**
   * This function safely checks if an objects has an owned property.
   *
   * @param {Object} object The object where to check for a property
   * @param {string} property The property name
   * @returns {boolean} Returns true if the object owns the specified property
   */
  Chartist.safeHasProperty = function(object, property) {
    return object !== null &&
      typeof object === 'object' &&
      object.hasOwnProperty(property);
  };

  /**
   * Checks if a value is considered a hole in the data series.
   *
   * @param {*} value
   * @returns {boolean} True if the value is considered a data hole
   */
  Chartist.isDataHoleValue = function(value) {
    return value === null ||
      value === undefined ||
      (typeof value === 'number' && isNaN(value));
  };

  /**
   * Reverses the series, labels and series data arrays.
   *
   * @memberof Chartist.Core
   * @param data
   */
  Chartist.reverseData = function(data) {
    data.labels.reverse();
    data.series.reverse();
    for (var i = 0; i < data.series.length; i++) {
      if(typeof(data.series[i]) === 'object' && data.series[i].data !== undefined) {
        data.series[i].data.reverse();
      } else if(data.series[i] instanceof Array) {
        data.series[i].reverse();
      }
    }
  };

  /**
   * Convert data series into plain array
   *
   * @memberof Chartist.Core
   * @param {Object} data The series object that contains the data to be visualized in the chart
   * @param {Boolean} [reverse] If true the whole data is reversed by the getDataArray call. This will modify the data object passed as first parameter. The labels as well as the series order is reversed. The whole series data arrays are reversed too.
   * @param {Boolean} [multi] Create a multi dimensional array from a series data array where a value object with `x` and `y` values will be created.
   * @return {Array} A plain array that contains the data to be visualized in the chart
   */
  Chartist.getDataArray = function(data, reverse, multi) {
    // Recursively walks through nested arrays and convert string values to numbers and objects with value properties
    // to values. Check the tests in data core -> data normalization for a detailed specification of expected values
    function recursiveConvert(value) {
      if(Chartist.safeHasProperty(value, 'value')) {
        // We are dealing with value object notation so we need to recurse on value property
        return recursiveConvert(value.value);
      } else if(Chartist.safeHasProperty(value, 'data')) {
        // We are dealing with series object notation so we need to recurse on data property
        return recursiveConvert(value.data);
      } else if(value instanceof Array) {
        // Data is of type array so we need to recurse on the series
        return value.map(recursiveConvert);
      } else if(Chartist.isDataHoleValue(value)) {
        // We're dealing with a hole in the data and therefore need to return undefined
        // We're also returning undefined for multi value output
        return undefined;
      } else {
        // We need to prepare multi value output (x and y data)
        if(multi) {
          var multiValue = {};

          // Single series value arrays are assumed to specify the Y-Axis value
          // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
          // If multi is a string then it's assumed that it specified which dimension should be filled as default
          if(typeof multi === 'string') {
            multiValue[multi] = Chartist.getNumberOrUndefined(value);
          } else {
            multiValue.y = Chartist.getNumberOrUndefined(value);
          }

          multiValue.x = value.hasOwnProperty('x') ? Chartist.getNumberOrUndefined(value.x) : multiValue.x;
          multiValue.y = value.hasOwnProperty('y') ? Chartist.getNumberOrUndefined(value.y) : multiValue.y;

          return multiValue;

        } else {
          // We can return simple data
          return Chartist.getNumberOrUndefined(value);
        }
      }
    }

    return data.series.map(recursiveConvert);
  };

  /**
   * Converts a number into a padding object.
   *
   * @memberof Chartist.Core
   * @param {Object|Number} padding
   * @param {Number} [fallback] This value is used to fill missing values if a incomplete padding object was passed
   * @returns {Object} Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
   */
  Chartist.normalizePadding = function(padding, fallback) {
    fallback = fallback || 0;

    return typeof padding === 'number' ? {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    } : {
      top: typeof padding.top === 'number' ? padding.top : fallback,
      right: typeof padding.right === 'number' ? padding.right : fallback,
      bottom: typeof padding.bottom === 'number' ? padding.bottom : fallback,
      left: typeof padding.left === 'number' ? padding.left : fallback
    };
  };

  Chartist.getMetaData = function(series, index) {
    var value = series.data ? series.data[index] : series[index];
    return value ? value.meta : undefined;
  };

  /**
   * Calculate the order of magnitude for the chart scale
   *
   * @memberof Chartist.Core
   * @param {Number} value The value Range of the chart
   * @return {Number} The order of magnitude
   */
  Chartist.orderOfMagnitude = function (value) {
    return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
  };

  /**
   * Project a data length into screen coordinates (pixels)
   *
   * @memberof Chartist.Core
   * @param {Object} axisLength The svg element for the chart
   * @param {Number} length Single data value from a series array
   * @param {Object} bounds All the values to set the bounds of the chart
   * @return {Number} The projected data length in pixels
   */
  Chartist.projectLength = function (axisLength, length, bounds) {
    return length / bounds.range * axisLength;
  };

  /**
   * Get the height of the area in the chart for the data series
   *
   * @memberof Chartist.Core
   * @param {Object} svg The svg element for the chart
   * @param {Object} options The Object that contains all the optional values for the chart
   * @return {Number} The height of the area in the chart for the data series
   */
  Chartist.getAvailableHeight = function (svg, options) {
    return Math.max((Chartist.quantity(options.height).value || svg.height()) - (options.chartPadding.top +  options.chartPadding.bottom) - options.axisX.offset, 0);
  };

  /**
   * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
   *
   * @memberof Chartist.Core
   * @param {Array} data The array that contains the data to be visualized in the chart
   * @param {Object} options The Object that contains the chart options
   * @param {String} dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
   * @return {Object} An object that contains the highest and lowest value that will be visualized on the chart.
   */
  Chartist.getHighLow = function (data, options, dimension) {
    // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
    options = Chartist.extend({}, options, dimension ? options['axis' + dimension.toUpperCase()] : {});

    var highLow = {
        high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
        low: options.low === undefined ? Number.MAX_VALUE : +options.low
      };
    var findHigh = options.high === undefined;
    var findLow = options.low === undefined;

    // Function to recursively walk through arrays and find highest and lowest number
    function recursiveHighLow(data) {
      if(data === undefined) {
        return undefined;
      } else if(data instanceof Array) {
        for (var i = 0; i < data.length; i++) {
          recursiveHighLow(data[i]);
        }
      } else {
        var value = dimension ? +data[dimension] : +data;

        if (findHigh && value > highLow.high) {
          highLow.high = value;
        }

        if (findLow && value < highLow.low) {
          highLow.low = value;
        }
      }
    }

    // Start to find highest and lowest number recursively
    if(findHigh || findLow) {
      recursiveHighLow(data);
    }

    // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
    // used to generate the chart. This is useful when the chart always needs to contain the position of the
    // invisible reference value in the view i.e. for bipolar scales.
    if (options.referenceValue || options.referenceValue === 0) {
      highLow.high = Math.max(options.referenceValue, highLow.high);
      highLow.low = Math.min(options.referenceValue, highLow.low);
    }

    // If high and low are the same because of misconfiguration or flat data (only the same value) we need
    // to set the high or low to 0 depending on the polarity
    if (highLow.high <= highLow.low) {
      // If both values are 0 we set high to 1
      if (highLow.low === 0) {
        highLow.high = 1;
      } else if (highLow.low < 0) {
        // If we have the same negative value for the bounds we set bounds.high to 0
        highLow.high = 0;
      } else if (highLow.high > 0) {
        // If we have the same positive value for the bounds we set bounds.low to 0
        highLow.low = 0;
      } else {
        // If data array was empty, values are Number.MAX_VALUE and -Number.MAX_VALUE. Set bounds to prevent errors
        highLow.high = 1;
        highLow.low = 0;
      }
    }

    return highLow;
  };

  /**
   * Checks if a value can be safely coerced to a number. This includes all values except null which result in finite numbers when coerced. This excludes NaN, since it's not finite.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {Boolean}
   */
  Chartist.isNumeric = function(value) {
    return value === null ? false : isFinite(value);
  };

  /**
   * Returns true on all falsey values except the numeric value 0.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {boolean}
   */
  Chartist.isFalseyButZero = function(value) {
    return !value && value !== 0;
  };

  /**
   * Returns a number if the passed parameter is a valid number or the function will return undefined. On all other values than a valid number, this function will return undefined.
   *
   * @memberof Chartist.Core
   * @param value
   * @returns {*}
   */
  Chartist.getNumberOrUndefined = function(value) {
    return Chartist.isNumeric(value) ? +value : undefined;
  };

  /**
   * Checks if provided value object is multi value (contains x or y properties)
   *
   * @memberof Chartist.Core
   * @param value
   */
  Chartist.isMultiValue = function(value) {
    return typeof value === 'object' && ('x' in value || 'y' in value);
  };

  /**
   * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return `defaultValue`.
   *
   * @memberof Chartist.Core
   * @param value
   * @param dimension
   * @param defaultValue
   * @returns {*}
   */
  Chartist.getMultiValue = function(value, dimension) {
    if(Chartist.isMultiValue(value)) {
      return Chartist.getNumberOrUndefined(value[dimension || 'y']);
    } else {
      return Chartist.getNumberOrUndefined(value);
    }
  };

  /**
   * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
   *
   * @memberof Chartist.Core
   * @param {Number} num An integer number where the smallest factor should be searched for
   * @returns {Number} The smallest integer factor of the parameter num.
   */
  Chartist.rho = function(num) {
    if(num === 1) {
      return num;
    }

    function gcd(p, q) {
      if (p % q === 0) {
        return q;
      } else {
        return gcd(q, p % q);
      }
    }

    function f(x) {
      return x * x + 1;
    }

    var x1 = 2, x2 = 2, divisor;
    if (num % 2 === 0) {
      return 2;
    }

    do {
      x1 = f(x1) % num;
      x2 = f(f(x2)) % num;
      divisor = gcd(Math.abs(x1 - x2), num);
    } while (divisor === 1);

    return divisor;
  };

  /**
   * Calculate and retrieve all the bounds for the chart and return them in one array
   *
   * @memberof Chartist.Core
   * @param {Number} axisLength The length of the Axis used for
   * @param {Object} highLow An object containing a high and low property indicating the value range of the chart.
   * @param {Number} scaleMinSpace The minimum projected length a step should result in
   * @param {Boolean} onlyInteger
   * @return {Object} All the values to set the bounds of the chart
   */
  Chartist.getBounds = function (axisLength, highLow, scaleMinSpace, onlyInteger) {
    var i,
      optimizationCounter = 0,
      newMin,
      newMax,
      bounds = {
        high: highLow.high,
        low: highLow.low
      };

    bounds.valueRange = bounds.high - bounds.low;
    bounds.oom = Chartist.orderOfMagnitude(bounds.valueRange);
    bounds.step = Math.pow(10, bounds.oom);
    bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
    bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
    bounds.range = bounds.max - bounds.min;
    bounds.numberOfSteps = Math.round(bounds.range / bounds.step);

    // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
    // If we are already below the scaleMinSpace value we will scale up
    var length = Chartist.projectLength(axisLength, bounds.step, bounds);
    var scaleUp = length < scaleMinSpace;
    var smallestFactor = onlyInteger ? Chartist.rho(bounds.range) : 0;

    // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1
    if(onlyInteger && Chartist.projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
      bounds.step = 1;
    } else if(onlyInteger && smallestFactor < bounds.step && Chartist.projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
      // If step 1 was too small, we can try the smallest factor of range
      // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
      // is larger than the scaleMinSpace we should go for it.
      bounds.step = smallestFactor;
    } else {
      // Trying to divide or multiply by 2 and find the best step value
      while (true) {
        if (scaleUp && Chartist.projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
          bounds.step *= 2;
        } else if (!scaleUp && Chartist.projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
          bounds.step /= 2;
          if(onlyInteger && bounds.step % 1 !== 0) {
            bounds.step *= 2;
            break;
          }
        } else {
          break;
        }

        if(optimizationCounter++ > 1000) {
          throw new Error('Exceeded maximum number of iterations while optimizing scale step!');
        }
      }
    }

    var EPSILON = 2.221E-16;
    bounds.step = Math.max(bounds.step, EPSILON);
    function safeIncrement(value, increment) {
      // If increment is too small use *= (1+EPSILON) as a simple nextafter
      if (value === (value += increment)) {
      	value *= (1 + (increment > 0 ? EPSILON : -EPSILON));
      }
      return value;
    }

    // Narrow min and max based on new step
    newMin = bounds.min;
    newMax = bounds.max;
    while (newMin + bounds.step <= bounds.low) {
    	newMin = safeIncrement(newMin, bounds.step);
    }
    while (newMax - bounds.step >= bounds.high) {
    	newMax = safeIncrement(newMax, -bounds.step);
    }
    bounds.min = newMin;
    bounds.max = newMax;
    bounds.range = bounds.max - bounds.min;

    var values = [];
    for (i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)) {
      var value = Chartist.roundWithPrecision(i);
      if (value !== values[values.length - 1]) {
        values.push(value);
      }
    }
    bounds.values = values;
    return bounds;
  };

  /**
   * Calculate cartesian coordinates of polar coordinates
   *
   * @memberof Chartist.Core
   * @param {Number} centerX X-axis coordinates of center point of circle segment
   * @param {Number} centerY X-axis coordinates of center point of circle segment
   * @param {Number} radius Radius of circle segment
   * @param {Number} angleInDegrees Angle of circle segment in degrees
   * @return {{x:Number, y:Number}} Coordinates of point on circumference
   */
  Chartist.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  /**
   * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
   *
   * @memberof Chartist.Core
   * @param {Object} svg The svg element for the chart
   * @param {Object} options The Object that contains all the optional values for the chart
   * @param {Number} [fallbackPadding] The fallback padding if partial padding objects are used
   * @return {Object} The chart rectangles coordinates inside the svg element plus the rectangles measurements
   */
  Chartist.createChartRect = function (svg, options, fallbackPadding) {
    var hasAxis = !!(options.axisX || options.axisY);
    var yAxisOffset = hasAxis ? options.axisY.offset : 0;
    var xAxisOffset = hasAxis ? options.axisX.offset : 0;
    // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0
    var width = svg.width() || Chartist.quantity(options.width).value || 0;
    var height = svg.height() || Chartist.quantity(options.height).value || 0;
    var normalizedPadding = Chartist.normalizePadding(options.chartPadding, fallbackPadding);

    // If settings were to small to cope with offset (legacy) and padding, we'll adjust
    width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
    height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);

    var chartRect = {
      padding: normalizedPadding,
      width: function () {
        return this.x2 - this.x1;
      },
      height: function () {
        return this.y1 - this.y2;
      }
    };

    if(hasAxis) {
      if (options.axisX.position === 'start') {
        chartRect.y2 = normalizedPadding.top + xAxisOffset;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
      } else {
        chartRect.y2 = normalizedPadding.top;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
      }

      if (options.axisY.position === 'start') {
        chartRect.x1 = normalizedPadding.left + yAxisOffset;
        chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
      } else {
        chartRect.x1 = normalizedPadding.left;
        chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
      }
    } else {
      chartRect.x1 = normalizedPadding.left;
      chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
      chartRect.y2 = normalizedPadding.top;
      chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
    }

    return chartRect;
  };

  /**
   * Creates a grid line based on a projected value.
   *
   * @memberof Chartist.Core
   * @param position
   * @param index
   * @param axis
   * @param offset
   * @param length
   * @param group
   * @param classes
   * @param eventEmitter
   */
  Chartist.createGrid = function(position, index, axis, offset, length, group, classes, eventEmitter) {
    var positionalData = {};
    positionalData[axis.units.pos + '1'] = position;
    positionalData[axis.units.pos + '2'] = position;
    positionalData[axis.counterUnits.pos + '1'] = offset;
    positionalData[axis.counterUnits.pos + '2'] = offset + length;

    var gridElement = group.elem('line', positionalData, classes.join(' '));

    // Event for grid draw
    eventEmitter.emit('draw',
      Chartist.extend({
        type: 'grid',
        axis: axis,
        index: index,
        group: group,
        element: gridElement
      }, positionalData)
    );
  };

  /**
   * Creates a grid background rect and emits the draw event.
   *
   * @memberof Chartist.Core
   * @param gridGroup
   * @param chartRect
   * @param className
   * @param eventEmitter
   */
  Chartist.createGridBackground = function (gridGroup, chartRect, className, eventEmitter) {
    var gridBackground = gridGroup.elem('rect', {
        x: chartRect.x1,
        y: chartRect.y2,
        width: chartRect.width(),
        height: chartRect.height(),
      }, className, true);

      // Event for grid background draw
      eventEmitter.emit('draw', {
        type: 'gridBackground',
        group: gridGroup,
        element: gridBackground
      });
  };

  /**
   * Creates a label based on a projected value and an axis.
   *
   * @memberof Chartist.Core
   * @param position
   * @param length
   * @param index
   * @param labels
   * @param axis
   * @param axisOffset
   * @param labelOffset
   * @param group
   * @param classes
   * @param useForeignObject
   * @param eventEmitter
   */
  Chartist.createLabel = function(position, length, index, labels, axis, axisOffset, labelOffset, group, classes, useForeignObject, eventEmitter) {
    var labelElement;
    var positionalData = {};

    positionalData[axis.units.pos] = position + labelOffset[axis.units.pos];
    positionalData[axis.counterUnits.pos] = labelOffset[axis.counterUnits.pos];
    positionalData[axis.units.len] = length;
    positionalData[axis.counterUnits.len] = Math.max(0, axisOffset - 10);

    if(useForeignObject) {
      // We need to set width and height explicitly to px as span will not expand with width and height being
      // 100% in all browsers
      var content = '<span class="' + classes.join(' ') + '" style="' +
        axis.units.len + ': ' + Math.round(positionalData[axis.units.len]) + 'px; ' +
        axis.counterUnits.len + ': ' + Math.round(positionalData[axis.counterUnits.len]) + 'px">' +
        labels[index] + '</span>';

      labelElement = group.foreignObject(content, Chartist.extend({
        style: 'overflow: visible;'
      }, positionalData));
    } else {
      labelElement = group.elem('text', positionalData, classes.join(' ')).text(labels[index]);
    }

    eventEmitter.emit('draw', Chartist.extend({
      type: 'label',
      axis: axis,
      index: index,
      group: group,
      element: labelElement,
      text: labels[index]
    }, positionalData));
  };

  /**
   * Helper to read series specific options from options object. It automatically falls back to the global option if
   * there is no option in the series options.
   *
   * @param {Object} series Series object
   * @param {Object} options Chartist options object
   * @param {string} key The options key that should be used to obtain the options
   * @returns {*}
   */
  Chartist.getSeriesOption = function(series, options, key) {
    if(series.name && options.series && options.series[series.name]) {
      var seriesOptions = options.series[series.name];
      return seriesOptions.hasOwnProperty(key) ? seriesOptions[key] : options[key];
    } else {
      return options[key];
    }
  };

  /**
   * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
   *
   * @memberof Chartist.Core
   * @param {Object} options Options set by user
   * @param {Array} responsiveOptions Optional functions to add responsive behavior to chart
   * @param {Object} eventEmitter The event emitter that will be used to emit the options changed events
   * @return {Object} The consolidated options object from the defaults, base and matching responsive options
   */
  Chartist.optionsProvider = function (options, responsiveOptions, eventEmitter) {
    var baseOptions = Chartist.extend({}, options),
      currentOptions,
      mediaQueryListeners = [],
      i;

    function updateCurrentOptions(mediaEvent) {
      var previousOptions = currentOptions;
      currentOptions = Chartist.extend({}, baseOptions);

      if (responsiveOptions) {
        for (i = 0; i < responsiveOptions.length; i++) {
          var mql = window.matchMedia(responsiveOptions[i][0]);
          if (mql.matches) {
            currentOptions = Chartist.extend(currentOptions, responsiveOptions[i][1]);
          }
        }
      }

      if(eventEmitter && mediaEvent) {
        eventEmitter.emit('optionsChanged', {
          previousOptions: previousOptions,
          currentOptions: currentOptions
        });
      }
    }

    function removeMediaQueryListeners() {
      mediaQueryListeners.forEach(function(mql) {
        mql.removeListener(updateCurrentOptions);
      });
    }

    if (!window.matchMedia) {
      throw 'window.matchMedia not found! Make sure you\'re using a polyfill.';
    } else if (responsiveOptions) {

      for (i = 0; i < responsiveOptions.length; i++) {
        var mql = window.matchMedia(responsiveOptions[i][0]);
        mql.addListener(updateCurrentOptions);
        mediaQueryListeners.push(mql);
      }
    }
    // Execute initially without an event argument so we get the correct options
    updateCurrentOptions();

    return {
      removeMediaQueryListeners: removeMediaQueryListeners,
      getCurrentOptions: function getCurrentOptions() {
        return Chartist.extend({}, currentOptions);
      }
    };
  };


  /**
   * Splits a list of coordinates and associated values into segments. Each returned segment contains a pathCoordinates
   * valueData property describing the segment.
   *
   * With the default options, segments consist of contiguous sets of points that do not have an undefined value. Any
   * points with undefined values are discarded.
   *
   * **Options**
   * The following options are used to determine how segments are formed
   * ```javascript
   * var options = {
   *   // If fillHoles is true, undefined values are simply discarded without creating a new segment. Assuming other options are default, this returns single segment.
   *   fillHoles: false,
   *   // If increasingX is true, the coordinates in all segments have strictly increasing x-values.
   *   increasingX: false
   * };
   * ```
   *
   * @memberof Chartist.Core
   * @param {Array} pathCoordinates List of point coordinates to be split in the form [x1, y1, x2, y2 ... xn, yn]
   * @param {Array} values List of associated point values in the form [v1, v2 .. vn]
   * @param {Object} options Options set by user
   * @return {Array} List of segments, each containing a pathCoordinates and valueData property.
   */
  Chartist.splitIntoSegments = function(pathCoordinates, valueData, options) {
    var defaultOptions = {
      increasingX: false,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    var segments = [];
    var hole = true;

    for(var i = 0; i < pathCoordinates.length; i += 2) {
      // If this value is a "hole" we set the hole flag
      if(Chartist.getMultiValue(valueData[i / 2].value) === undefined) {
      // if(valueData[i / 2].value === undefined) {
        if(!options.fillHoles) {
          hole = true;
        }
      } else {
        if(options.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i-2]) {
          // X is not increasing, so we need to make sure we start a new segment
          hole = true;
        }


        // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment
        if(hole) {
          segments.push({
            pathCoordinates: [],
            valueData: []
          });
          // As we have a valid value now, we are not in a "hole" anymore
          hole = false;
        }

        // Add to the segment pathCoordinates and valueData
        segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
        segments[segments.length - 1].valueData.push(valueData[i / 2]);
      }
    }

    return segments;
  };
}(window, document, Chartist));
;/**
 * Chartist path interpolation functions.
 *
 * @module Chartist.Interpolation
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  Chartist.Interpolation = {};

  /**
   * This interpolation function does not smooth the path and the result is only containing lines and no curves.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.none({
   *     fillHoles: false
   *   })
   * });
   *
   *
   * @memberof Chartist.Interpolation
   * @return {Function}
   */
  Chartist.Interpolation.none = function(options) {
    var defaultOptions = {
      fillHoles: false
    };
    options = Chartist.extend({}, defaultOptions, options);
    return function none(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();
      var hole = true;

      for(var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var currData = valueData[i / 2];

        if(Chartist.getMultiValue(currData.value) !== undefined) {

          if(hole) {
            path.move(currX, currY, false, currData);
          } else {
            path.line(currX, currY, false, currData);
          }

          hole = false;
        } else if(!options.fillHoles) {
          hole = true;
        }
      }

      return path;
    };
  };

  /**
   * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
   *
   * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.simple({
   *     divisor: 2,
   *     fillHoles: false
   *   })
   * });
   *
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the simple interpolation factory function.
   * @return {Function}
   */
  Chartist.Interpolation.simple = function(options) {
    var defaultOptions = {
      divisor: 2,
      fillHoles: false
    };
    options = Chartist.extend({}, defaultOptions, options);

    var d = 1 / Math.max(1, options.divisor);

    return function simple(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();
      var prevX, prevY, prevData;

      for(var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var length = (currX - prevX) * d;
        var currData = valueData[i / 2];

        if(currData.value !== undefined) {

          if(prevData === undefined) {
            path.move(currX, currY, false, currData);
          } else {
            path.curve(
              prevX + length,
              prevY,
              currX - length,
              currY,
              currX,
              currY,
              false,
              currData
            );
          }

          prevX = currX;
          prevY = currY;
          prevData = currData;
        } else if(!options.fillHoles) {
          prevX = currX = prevData = undefined;
        }
      }

      return path;
    };
  };

  /**
   * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
   *
   * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.cardinal({
   *     tension: 1,
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the cardinal factory function.
   * @return {Function}
   */
  Chartist.Interpolation.cardinal = function(options) {
    var defaultOptions = {
      tension: 1,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    var t = Math.min(1, Math.max(0, options.tension)),
      c = 1 - t;

    return function cardinal(pathCoordinates, valueData) {
      // First we try to split the coordinates into segments
      // This is necessary to treat "holes" in line charts
      var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
        fillHoles: options.fillHoles
      });

      if(!segments.length) {
        // If there were no segments return 'Chartist.Interpolation.none'
        return Chartist.Interpolation.none()([]);
      } else if(segments.length > 1) {
        // If the split resulted in more that one segment we need to interpolate each segment individually and join them
        // afterwards together into a single path.
          var paths = [];
        // For each segment we will recurse the cardinal function
        segments.forEach(function(segment) {
          paths.push(cardinal(segment.pathCoordinates, segment.valueData));
        });
        // Join the segment path data into a single path and return
        return Chartist.Svg.Path.join(paths);
      } else {
        // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
        // segment
        pathCoordinates = segments[0].pathCoordinates;
        valueData = segments[0].valueData;

        // If less than two points we need to fallback to no smoothing
        if(pathCoordinates.length <= 4) {
          return Chartist.Interpolation.none()(pathCoordinates, valueData);
        }

        var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]),
          z;

        for (var i = 0, iLen = pathCoordinates.length; iLen - 2 * !z > i; i += 2) {
          var p = [
            {x: +pathCoordinates[i - 2], y: +pathCoordinates[i - 1]},
            {x: +pathCoordinates[i], y: +pathCoordinates[i + 1]},
            {x: +pathCoordinates[i + 2], y: +pathCoordinates[i + 3]},
            {x: +pathCoordinates[i + 4], y: +pathCoordinates[i + 5]}
          ];
          if (z) {
            if (!i) {
              p[0] = {x: +pathCoordinates[iLen - 2], y: +pathCoordinates[iLen - 1]};
            } else if (iLen - 4 === i) {
              p[3] = {x: +pathCoordinates[0], y: +pathCoordinates[1]};
            } else if (iLen - 2 === i) {
              p[2] = {x: +pathCoordinates[0], y: +pathCoordinates[1]};
              p[3] = {x: +pathCoordinates[2], y: +pathCoordinates[3]};
            }
          } else {
            if (iLen - 4 === i) {
              p[3] = p[2];
            } else if (!i) {
              p[0] = {x: +pathCoordinates[i], y: +pathCoordinates[i + 1]};
            }
          }

          path.curve(
            (t * (-p[0].x + 6 * p[1].x + p[2].x) / 6) + (c * p[2].x),
            (t * (-p[0].y + 6 * p[1].y + p[2].y) / 6) + (c * p[2].y),
            (t * (p[1].x + 6 * p[2].x - p[3].x) / 6) + (c * p[2].x),
            (t * (p[1].y + 6 * p[2].y - p[3].y) / 6) + (c * p[2].y),
            p[2].x,
            p[2].y,
            false,
            valueData[(i + 2) / 2]
          );
        }

        return path;
      }
    };
  };

  /**
   * Monotone Cubic spline interpolation produces a smooth curve which preserves monotonicity. Unlike cardinal splines, the curve will not extend beyond the range of y-values of the original data points.
   *
   * Monotone Cubic splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
   *
   * The x-values of subsequent points must be increasing to fit a Monotone Cubic spline. If this condition is not met for a pair of adjacent points, then there will be a break in the curve between those data points.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.monotoneCubic({
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param {Object} options The options of the monotoneCubic factory function.
   * @return {Function}
   */
  Chartist.Interpolation.monotoneCubic = function(options) {
    var defaultOptions = {
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    return function monotoneCubic(pathCoordinates, valueData) {
      // First we try to split the coordinates into segments
      // This is necessary to treat "holes" in line charts
      var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
        fillHoles: options.fillHoles,
        increasingX: true
      });

      if(!segments.length) {
        // If there were no segments return 'Chartist.Interpolation.none'
        return Chartist.Interpolation.none()([]);
      } else if(segments.length > 1) {
        // If the split resulted in more that one segment we need to interpolate each segment individually and join them
        // afterwards together into a single path.
          var paths = [];
        // For each segment we will recurse the monotoneCubic fn function
        segments.forEach(function(segment) {
          paths.push(monotoneCubic(segment.pathCoordinates, segment.valueData));
        });
        // Join the segment path data into a single path and return
        return Chartist.Svg.Path.join(paths);
      } else {
        // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
        // segment
        pathCoordinates = segments[0].pathCoordinates;
        valueData = segments[0].valueData;

        // If less than three points we need to fallback to no smoothing
        if(pathCoordinates.length <= 4) {
          return Chartist.Interpolation.none()(pathCoordinates, valueData);
        }

        var xs = [],
          ys = [],
          i,
          n = pathCoordinates.length / 2,
          ms = [],
          ds = [], dys = [], dxs = [],
          path;

        // Populate x and y coordinates into separate arrays, for readability

        for(i = 0; i < n; i++) {
          xs[i] = pathCoordinates[i * 2];
          ys[i] = pathCoordinates[i * 2 + 1];
        }

        // Calculate deltas and derivative

        for(i = 0; i < n - 1; i++) {
          dys[i] = ys[i + 1] - ys[i];
          dxs[i] = xs[i + 1] - xs[i];
          ds[i] = dys[i] / dxs[i];
        }

        // Determine desired slope (m) at each point using Fritsch-Carlson method
        // See: http://math.stackexchange.com/questions/45218/implementation-of-monotone-cubic-interpolation

        ms[0] = ds[0];
        ms[n - 1] = ds[n - 2];

        for(i = 1; i < n - 1; i++) {
          if(ds[i] === 0 || ds[i - 1] === 0 || (ds[i - 1] > 0) !== (ds[i] > 0)) {
            ms[i] = 0;
          } else {
            ms[i] = 3 * (dxs[i - 1] + dxs[i]) / (
              (2 * dxs[i] + dxs[i - 1]) / ds[i - 1] +
              (dxs[i] + 2 * dxs[i - 1]) / ds[i]);

            if(!isFinite(ms[i])) {
              ms[i] = 0;
            }
          }
        }

        // Now build a path from the slopes

        path = new Chartist.Svg.Path().move(xs[0], ys[0], false, valueData[0]);

        for(i = 0; i < n - 1; i++) {
          path.curve(
            // First control point
            xs[i] + dxs[i] / 3,
            ys[i] + ms[i] * dxs[i] / 3,
            // Second control point
            xs[i + 1] - dxs[i] / 3,
            ys[i + 1] - ms[i + 1] * dxs[i] / 3,
            // End point
            xs[i + 1],
            ys[i + 1],

            false,
            valueData[i + 1]
          );
        }

        return path;
      }
    };
  };

  /**
   * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
   *
   * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
   *
   * @example
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [[1, 2, 8, 1, 7]]
   * }, {
   *   lineSmooth: Chartist.Interpolation.step({
   *     postpone: true,
   *     fillHoles: false
   *   })
   * });
   *
   * @memberof Chartist.Interpolation
   * @param options
   * @returns {Function}
   */
  Chartist.Interpolation.step = function(options) {
    var defaultOptions = {
      postpone: true,
      fillHoles: false
    };

    options = Chartist.extend({}, defaultOptions, options);

    return function step(pathCoordinates, valueData) {
      var path = new Chartist.Svg.Path();

      var prevX, prevY, prevData;

      for (var i = 0; i < pathCoordinates.length; i += 2) {
        var currX = pathCoordinates[i];
        var currY = pathCoordinates[i + 1];
        var currData = valueData[i / 2];

        // If the current point is also not a hole we can draw the step lines
        if(currData.value !== undefined) {
          if(prevData === undefined) {
            path.move(currX, currY, false, currData);
          } else {
            if(options.postpone) {
              // If postponed we should draw the step line with the value of the previous value
              path.line(currX, prevY, false, prevData);
            } else {
              // If not postponed we should draw the step line with the value of the current value
              path.line(prevX, currY, false, currData);
            }
            // Line to the actual point (this should only be a Y-Axis movement
            path.line(currX, currY, false, currData);
          }

          prevX = currX;
          prevY = currY;
          prevData = currData;
        } else if(!options.fillHoles) {
          prevX = prevY = prevData = undefined;
        }
      }

      return path;
    };
  };

}(window, document, Chartist));
;/**
 * A very basic event module that helps to generate and catch events.
 *
 * @module Chartist.Event
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  Chartist.EventEmitter = function () {
    var handlers = [];

    /**
     * Add an event handler for a specific event
     *
     * @memberof Chartist.Event
     * @param {String} event The event name
     * @param {Function} handler A event handler function
     */
    function addEventHandler(event, handler) {
      handlers[event] = handlers[event] || [];
      handlers[event].push(handler);
    }

    /**
     * Remove an event handler of a specific event name or remove all event handlers for a specific event.
     *
     * @memberof Chartist.Event
     * @param {String} event The event name where a specific or all handlers should be removed
     * @param {Function} [handler] An optional event handler function. If specified only this specific handler will be removed and otherwise all handlers are removed.
     */
    function removeEventHandler(event, handler) {
      // Only do something if there are event handlers with this name existing
      if(handlers[event]) {
        // If handler is set we will look for a specific handler and only remove this
        if(handler) {
          handlers[event].splice(handlers[event].indexOf(handler), 1);
          if(handlers[event].length === 0) {
            delete handlers[event];
          }
        } else {
          // If no handler is specified we remove all handlers for this event
          delete handlers[event];
        }
      }
    }

    /**
     * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
     *
     * @memberof Chartist.Event
     * @param {String} event The event name that should be triggered
     * @param {*} data Arbitrary data that will be passed to the event handler callback functions
     */
    function emit(event, data) {
      // Only do something if there are event handlers with this name existing
      if(handlers[event]) {
        handlers[event].forEach(function(handler) {
          handler(data);
        });
      }

      // Emit event to star event handlers
      if(handlers['*']) {
        handlers['*'].forEach(function(starHandler) {
          starHandler(event, data);
        });
      }
    }

    return {
      addEventHandler: addEventHandler,
      removeEventHandler: removeEventHandler,
      emit: emit
    };
  };

}(window, document, Chartist));
;/**
 * This module provides some basic prototype inheritance utilities.
 *
 * @module Chartist.Class
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  function listToArray(list) {
    var arr = [];
    if (list.length) {
      for (var i = 0; i < list.length; i++) {
        arr.push(list[i]);
      }
    }
    return arr;
  }

  /**
   * Method to extend from current prototype.
   *
   * @memberof Chartist.Class
   * @param {Object} properties The object that serves as definition for the prototype that gets created for the new class. This object should always contain a constructor property that is the desired constructor for the newly created class.
   * @param {Object} [superProtoOverride] By default extens will use the current class prototype or Chartist.class. With this parameter you can specify any super prototype that will be used.
   * @return {Function} Constructor function of the new class
   *
   * @example
   * var Fruit = Class.extend({
     * color: undefined,
     *   sugar: undefined,
     *
     *   constructor: function(color, sugar) {
     *     this.color = color;
     *     this.sugar = sugar;
     *   },
     *
     *   eat: function() {
     *     this.sugar = 0;
     *     return this;
     *   }
     * });
   *
   * var Banana = Fruit.extend({
     *   length: undefined,
     *
     *   constructor: function(length, sugar) {
     *     Banana.super.constructor.call(this, 'Yellow', sugar);
     *     this.length = length;
     *   }
     * });
   *
   * var banana = new Banana(20, 40);
   * console.log('banana instanceof Fruit', banana instanceof Fruit);
   * console.log('Fruit is prototype of banana', Fruit.prototype.isPrototypeOf(banana));
   * console.log('bananas prototype is Fruit', Object.getPrototypeOf(banana) === Fruit.prototype);
   * console.log(banana.sugar);
   * console.log(banana.eat().sugar);
   * console.log(banana.color);
   */
  function extend(properties, superProtoOverride) {
    var superProto = superProtoOverride || this.prototype || Chartist.Class;
    var proto = Object.create(superProto);

    Chartist.Class.cloneDefinitions(proto, properties);

    var constr = function() {
      var fn = proto.constructor || function () {},
        instance;

      // If this is linked to the Chartist namespace the constructor was not called with new
      // To provide a fallback we will instantiate here and return the instance
      instance = this === Chartist ? Object.create(proto) : this;
      fn.apply(instance, Array.prototype.slice.call(arguments, 0));

      // If this constructor was not called with new we need to return the instance
      // This will not harm when the constructor has been called with new as the returned value is ignored
      return instance;
    };

    constr.prototype = proto;
    constr.super = superProto;
    constr.extend = this.extend;

    return constr;
  }

  // Variable argument list clones args > 0 into args[0] and retruns modified args[0]
  function cloneDefinitions() {
    var args = listToArray(arguments);
    var target = args[0];

    args.splice(1, args.length - 1).forEach(function (source) {
      Object.getOwnPropertyNames(source).forEach(function (propName) {
        // If this property already exist in target we delete it first
        delete target[propName];
        // Define the property with the descriptor from source
        Object.defineProperty(target, propName,
          Object.getOwnPropertyDescriptor(source, propName));
      });
    });

    return target;
  }

  Chartist.Class = {
    extend: extend,
    cloneDefinitions: cloneDefinitions
  };

}(window, document, Chartist));
;/**
 * Base for all chart types. The methods in Chartist.Base are inherited to all chart types.
 *
 * @module Chartist.Base
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
  // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
  // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
  // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
  // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
  // The problem is with the label offsets that can't be converted into percentage and affecting the chart container
  /**
   * Updates the chart which currently does a full reconstruction of the SVG DOM
   *
   * @param {Object} [data] Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
   * @param {Object} [options] Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
   * @param {Boolean} [override] If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
   * @memberof Chartist.Base
   */
  function update(data, options, override) {
    if(data) {
      this.data = data || {};
      this.data.labels = this.data.labels || [];
      this.data.series = this.data.series || [];
      // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
      this.eventEmitter.emit('data', {
        type: 'update',
        data: this.data
      });
    }

    if(options) {
      this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options);

      // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
      // Otherwise we re-create the optionsProvider at this point
      if(!this.initializeTimeoutId) {
        this.optionsProvider.removeMediaQueryListeners();
        this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
      }
    }

    // Only re-created the chart if it has been initialized yet
    if(!this.initializeTimeoutId) {
      this.createChart(this.optionsProvider.getCurrentOptions());
    }

    // Return a reference to the chart object to chain up calls
    return this;
  }

  /**
   * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
   *
   * @memberof Chartist.Base
   */
  function detach() {
    // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
    // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
    if(!this.initializeTimeoutId) {
      window.removeEventListener('resize', this.resizeListener);
      this.optionsProvider.removeMediaQueryListeners();
    } else {
      window.clearTimeout(this.initializeTimeoutId);
    }

    return this;
  }

  /**
   * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
   *
   * @memberof Chartist.Base
   * @param {String} event Name of the event. Check the examples for supported events.
   * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
   */
  function on(event, handler) {
    this.eventEmitter.addEventHandler(event, handler);
    return this;
  }

  /**
   * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
   *
   * @memberof Chartist.Base
   * @param {String} event Name of the event for which a handler should be removed
   * @param {Function} [handler] The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
   */
  function off(event, handler) {
    this.eventEmitter.removeEventHandler(event, handler);
    return this;
  }

  function initialize() {
    // Add window resize listener that re-creates the chart
    window.addEventListener('resize', this.resizeListener);

    // Obtain current options based on matching media queries (if responsive options are given)
    // This will also register a listener that is re-creating the chart based on media changes
    this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
    // Register options change listener that will trigger a chart update
    this.eventEmitter.addEventHandler('optionsChanged', function() {
      this.update();
    }.bind(this));

    // Before the first chart creation we need to register us with all plugins that are configured
    // Initialize all relevant plugins with our chart object and the plugin options specified in the config
    if(this.options.plugins) {
      this.options.plugins.forEach(function(plugin) {
        if(plugin instanceof Array) {
          plugin[0](this, plugin[1]);
        } else {
          plugin(this);
        }
      }.bind(this));
    }

    // Event for data transformation that allows to manipulate the data before it gets rendered in the charts
    this.eventEmitter.emit('data', {
      type: 'initial',
      data: this.data
    });

    // Create the first chart
    this.createChart(this.optionsProvider.getCurrentOptions());

    // As chart is initialized from the event loop now we can reset our timeout reference
    // This is important if the chart gets initialized on the same element twice
    this.initializeTimeoutId = undefined;
  }

  /**
   * Constructor of chart base class.
   *
   * @param query
   * @param data
   * @param defaultOptions
   * @param options
   * @param responsiveOptions
   * @constructor
   */
  function Base(query, data, defaultOptions, options, responsiveOptions) {
    this.container = Chartist.querySelector(query);
    this.data = data || {};
    this.data.labels = this.data.labels || [];
    this.data.series = this.data.series || [];
    this.defaultOptions = defaultOptions;
    this.options = options;
    this.responsiveOptions = responsiveOptions;
    this.eventEmitter = Chartist.EventEmitter();
    this.supportsForeignObject = Chartist.Svg.isSupported('Extensibility');
    this.supportsAnimations = Chartist.Svg.isSupported('AnimationEventsAttribute');
    this.resizeListener = function resizeListener(){
      this.update();
    }.bind(this);

    if(this.container) {
      // If chartist was already initialized in this container we are detaching all event listeners first
      if(this.container.__chartist__) {
        this.container.__chartist__.detach();
      }

      this.container.__chartist__ = this;
    }

    // Using event loop for first draw to make it possible to register event listeners in the same call stack where
    // the chart was created.
    this.initializeTimeoutId = setTimeout(initialize.bind(this), 0);
  }

  // Creating the chart base class
  Chartist.Base = Chartist.Class.extend({
    constructor: Base,
    optionsProvider: undefined,
    container: undefined,
    svg: undefined,
    eventEmitter: undefined,
    createChart: function() {
      throw new Error('Base chart type can\'t be instantiated!');
    },
    update: update,
    detach: detach,
    on: on,
    off: off,
    version: Chartist.version,
    supportsForeignObject: false
  });

}(window, document, Chartist));
;/**
 * Chartist SVG module for simple SVG DOM abstraction
 *
 * @module Chartist.Svg
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  /**
   * Chartist.Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
   *
   * @memberof Chartist.Svg
   * @constructor
   * @param {String|Element} name The name of the SVG element to create or an SVG dom element which should be wrapped into Chartist.Svg
   * @param {Object} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
   * @param {String} className This class or class list will be added to the SVG element
   * @param {Object} parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
   * @param {Boolean} insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
   */
  function Svg(name, attributes, className, parent, insertFirst) {
    // If Svg is getting called with an SVG element we just return the wrapper
    if(name instanceof Element) {
      this._node = name;
    } else {
      this._node = document.createElementNS(Chartist.namespaces.svg, name);

      // If this is an SVG element created then custom namespace
      if(name === 'svg') {
        this.attr({
          'xmlns:ct': Chartist.namespaces.ct
        });
      }
    }

    if(attributes) {
      this.attr(attributes);
    }

    if(className) {
      this.addClass(className);
    }

    if(parent) {
      if (insertFirst && parent._node.firstChild) {
        parent._node.insertBefore(this._node, parent._node.firstChild);
      } else {
        parent._node.appendChild(this._node);
      }
    }
  }

  /**
   * Set attributes on the current SVG element of the wrapper you're currently working on.
   *
   * @memberof Chartist.Svg
   * @param {Object|String} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added. If this parameter is a String then the function is used as a getter and will return the attribute value.
   * @param {String} [ns] If specified, the attribute will be obtained using getAttributeNs. In order to write namepsaced attributes you can use the namespace:attribute notation within the attributes object.
   * @return {Object|String} The current wrapper object will be returned so it can be used for chaining or the attribute value if used as getter function.
   */
  function attr(attributes, ns) {
    if(typeof attributes === 'string') {
      if(ns) {
        return this._node.getAttributeNS(ns, attributes);
      } else {
        return this._node.getAttribute(attributes);
      }
    }

    Object.keys(attributes).forEach(function(key) {
      // If the attribute value is undefined we can skip this one
      if(attributes[key] === undefined) {
        return;
      }

      if (key.indexOf(':') !== -1) {
        var namespacedAttribute = key.split(':');
        this._node.setAttributeNS(Chartist.namespaces[namespacedAttribute[0]], key, attributes[key]);
      } else {
        this._node.setAttribute(key, attributes[key]);
      }
    }.bind(this));

    return this;
  }

  /**
   * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
   *
   * @memberof Chartist.Svg
   * @param {String} name The name of the SVG element that should be created as child element of the currently selected element wrapper
   * @param {Object} [attributes] An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
   * @param {String} [className] This class or class list will be added to the SVG element
   * @param {Boolean} [insertFirst] If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
   * @return {Chartist.Svg} Returns a Chartist.Svg wrapper object that can be used to modify the containing SVG data
   */
  function elem(name, attributes, className, insertFirst) {
    return new Chartist.Svg(name, attributes, className, this, insertFirst);
  }

  /**
   * Returns the parent Chartist.SVG wrapper object
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} Returns a Chartist.Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
   */
  function parent() {
    return this._node.parentNode instanceof SVGElement ? new Chartist.Svg(this._node.parentNode) : null;
  }

  /**
   * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The root SVG element wrapped in a Chartist.Svg element
   */
  function root() {
    var node = this._node;
    while(node.nodeName !== 'svg') {
      node = node.parentNode;
    }
    return new Chartist.Svg(node);
  }

  /**
   * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} selector A CSS selector that is used to query for child SVG elements
   * @return {Chartist.Svg} The SVG wrapper for the element found or null if no element was found
   */
  function querySelector(selector) {
    var foundNode = this._node.querySelector(selector);
    return foundNode ? new Chartist.Svg(foundNode) : null;
  }

  /**
   * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} selector A CSS selector that is used to query for child SVG elements
   * @return {Chartist.Svg.List} The SVG wrapper list for the element found or null if no element was found
   */
  function querySelectorAll(selector) {
    var foundNodes = this._node.querySelectorAll(selector);
    return foundNodes.length ? new Chartist.Svg.List(foundNodes) : null;
  }

  /**
   * Returns the underlying SVG node for the current element.
   *
   * @memberof Chartist.Svg
   * @returns {Node}
   */
  function getNode() {
    return this._node;
  }

  /**
   * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
   *
   * @memberof Chartist.Svg
   * @param {Node|String} content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
   * @param {String} [attributes] An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
   * @param {String} [className] This class or class list will be added to the SVG element
   * @param {Boolean} [insertFirst] Specifies if the foreignObject should be inserted as first child
   * @return {Chartist.Svg} New wrapper object that wraps the foreignObject element
   */
  function foreignObject(content, attributes, className, insertFirst) {
    // If content is string then we convert it to DOM
    // TODO: Handle case where content is not a string nor a DOM Node
    if(typeof content === 'string') {
      var container = document.createElement('div');
      container.innerHTML = content;
      content = container.firstChild;
    }

    // Adding namespace to content element
    content.setAttribute('xmlns', Chartist.namespaces.xmlns);

    // Creating the foreignObject without required extension attribute (as described here
    // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)
    var fnObj = this.elem('foreignObject', attributes, className, insertFirst);

    // Add content to foreignObjectElement
    fnObj._node.appendChild(content);

    return fnObj;
  }

  /**
   * This method adds a new text element to the current Chartist.Svg wrapper.
   *
   * @memberof Chartist.Svg
   * @param {String} t The text that should be added to the text element that is created
   * @return {Chartist.Svg} The same wrapper object that was used to add the newly created element
   */
  function text(t) {
    this._node.appendChild(document.createTextNode(t));
    return this;
  }

  /**
   * This method will clear all child nodes of the current wrapper object.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The same wrapper object that got emptied
   */
  function empty() {
    while (this._node.firstChild) {
      this._node.removeChild(this._node.firstChild);
    }

    return this;
  }

  /**
   * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The parent wrapper object of the element that got removed
   */
  function remove() {
    this._node.parentNode.removeChild(this._node);
    return this.parent();
  }

  /**
   * This method will replace the element with a new element that can be created outside of the current DOM.
   *
   * @memberof Chartist.Svg
   * @param {Chartist.Svg} newElement The new Chartist.Svg object that will be used to replace the current wrapper object
   * @return {Chartist.Svg} The wrapper of the new element
   */
  function replace(newElement) {
    this._node.parentNode.replaceChild(newElement._node, this._node);
    return newElement;
  }

  /**
   * This method will append an element to the current element as a child.
   *
   * @memberof Chartist.Svg
   * @param {Chartist.Svg} element The Chartist.Svg element that should be added as a child
   * @param {Boolean} [insertFirst] Specifies if the element should be inserted as first child
   * @return {Chartist.Svg} The wrapper of the appended object
   */
  function append(element, insertFirst) {
    if(insertFirst && this._node.firstChild) {
      this._node.insertBefore(element._node, this._node.firstChild);
    } else {
      this._node.appendChild(element._node);
    }

    return this;
  }

  /**
   * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
   *
   * @memberof Chartist.Svg
   * @return {Array} A list of classes or an empty array if there are no classes on the current element
   */
  function classes() {
    return this._node.getAttribute('class') ? this._node.getAttribute('class').trim().split(/\s+/) : [];
  }

  /**
   * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
   *
   * @memberof Chartist.Svg
   * @param {String} names A white space separated list of class names
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function addClass(names) {
    this._node.setAttribute('class',
      this.classes(this._node)
        .concat(names.trim().split(/\s+/))
        .filter(function(elem, pos, self) {
          return self.indexOf(elem) === pos;
        }).join(' ')
    );

    return this;
  }

  /**
   * Removes one or a space separated list of classes from the current element.
   *
   * @memberof Chartist.Svg
   * @param {String} names A white space separated list of class names
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function removeClass(names) {
    var removedClasses = names.trim().split(/\s+/);

    this._node.setAttribute('class', this.classes(this._node).filter(function(name) {
      return removedClasses.indexOf(name) === -1;
    }).join(' '));

    return this;
  }

  /**
   * Removes all classes from the current element.
   *
   * @memberof Chartist.Svg
   * @return {Chartist.Svg} The wrapper of the current element
   */
  function removeAllClasses() {
    this._node.setAttribute('class', '');

    return this;
  }

  /**
   * Get element height using `getBoundingClientRect`
   *
   * @memberof Chartist.Svg
   * @return {Number} The elements height in pixels
   */
  function height() {
    return this._node.getBoundingClientRect().height;
  }

  /**
   * Get element width using `getBoundingClientRect`
   *
   * @memberof Chartist.Core
   * @return {Number} The elements width in pixels
   */
  function width() {
    return this._node.getBoundingClientRect().width;
  }

  /**
   * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Chartist.Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
   * **An animations object could look like this:**
   * ```javascript
   * element.animate({
   *   opacity: {
   *     dur: 1000,
   *     from: 0,
   *     to: 1
   *   },
   *   x1: {
   *     dur: '1000ms',
   *     from: 100,
   *     to: 200,
   *     easing: 'easeOutQuart'
   *   },
   *   y1: {
   *     dur: '2s',
   *     from: 0,
   *     to: 100
   *   }
   * });
   * ```
   * **Automatic unit conversion**
   * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
   * **Guided mode**
   * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Chartist.Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
   * If guided mode is enabled the following behavior is added:
   * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
   * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
   * - The animate element will be forced to use `fill="freeze"`
   * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
   * - After the animation the element attribute value will be set to the `to` value of the animation
   * - The animate element is deleted from the DOM
   *
   * @memberof Chartist.Svg
   * @param {Object} animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
   * @param {Boolean} guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
   * @param {Object} eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
   * @return {Chartist.Svg} The current element where the animation was added
   */
  function animate(animations, guided, eventEmitter) {
    if(guided === undefined) {
      guided = true;
    }

    Object.keys(animations).forEach(function createAnimateForAttributes(attribute) {

      function createAnimate(animationDefinition, guided) {
        var attributeProperties = {},
          animate,
          timeout,
          easing;

        // Check if an easing is specified in the definition object and delete it from the object as it will not
        // be part of the animate element attributes.
        if(animationDefinition.easing) {
          // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
          easing = animationDefinition.easing instanceof Array ?
            animationDefinition.easing :
            Chartist.Svg.Easing[animationDefinition.easing];
          delete animationDefinition.easing;
        }

        // If numeric dur or begin was provided we assume milli seconds
        animationDefinition.begin = Chartist.ensureUnit(animationDefinition.begin, 'ms');
        animationDefinition.dur = Chartist.ensureUnit(animationDefinition.dur, 'ms');

        if(easing) {
          animationDefinition.calcMode = 'spline';
          animationDefinition.keySplines = easing.join(' ');
          animationDefinition.keyTimes = '0;1';
        }

        // Adding "fill: freeze" if we are in guided mode and set initial attribute values
        if(guided) {
          animationDefinition.fill = 'freeze';
          // Animated property on our element should already be set to the animation from value in guided mode
          attributeProperties[attribute] = animationDefinition.from;
          this.attr(attributeProperties);

          // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
          // which needs to be in ms aside
          timeout = Chartist.quantity(animationDefinition.begin || 0).value;
          animationDefinition.begin = 'indefinite';
        }

        animate = this.elem('animate', Chartist.extend({
          attributeName: attribute
        }, animationDefinition));

        if(guided) {
          // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
          setTimeout(function() {
            // If beginElement fails we set the animated attribute to the end position and remove the animate element
            // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occured in
            // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
            try {
              animate._node.beginElement();
            } catch(err) {
              // Set animated attribute to current animated value
              attributeProperties[attribute] = animationDefinition.to;
              this.attr(attributeProperties);
              // Remove the animate element as it's no longer required
              animate.remove();
            }
          }.bind(this), timeout);
        }

        if(eventEmitter) {
          animate._node.addEventListener('beginEvent', function handleBeginEvent() {
            eventEmitter.emit('animationBegin', {
              element: this,
              animate: animate._node,
              params: animationDefinition
            });
          }.bind(this));
        }

        animate._node.addEventListener('endEvent', function handleEndEvent() {
          if(eventEmitter) {
            eventEmitter.emit('animationEnd', {
              element: this,
              animate: animate._node,
              params: animationDefinition
            });
          }

          if(guided) {
            // Set animated attribute to current animated value
            attributeProperties[attribute] = animationDefinition.to;
            this.attr(attributeProperties);
            // Remove the animate element as it's no longer required
            animate.remove();
          }
        }.bind(this));
      }

      // If current attribute is an array of definition objects we create an animate for each and disable guided mode
      if(animations[attribute] instanceof Array) {
        animations[attribute].forEach(function(animationDefinition) {
          createAnimate.bind(this)(animationDefinition, false);
        }.bind(this));
      } else {
        createAnimate.bind(this)(animations[attribute], guided);
      }

    }.bind(this));

    return this;
  }

  Chartist.Svg = Chartist.Class.extend({
    constructor: Svg,
    attr: attr,
    elem: elem,
    parent: parent,
    root: root,
    querySelector: querySelector,
    querySelectorAll: querySelectorAll,
    getNode: getNode,
    foreignObject: foreignObject,
    text: text,
    empty: empty,
    remove: remove,
    replace: replace,
    append: append,
    classes: classes,
    addClass: addClass,
    removeClass: removeClass,
    removeAllClasses: removeAllClasses,
    height: height,
    width: width,
    animate: animate
  });

  /**
   * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
   *
   * @memberof Chartist.Svg
   * @param {String} feature The SVG 1.1 feature that should be checked for support.
   * @return {Boolean} True of false if the feature is supported or not
   */
  Chartist.Svg.isSupported = function(feature) {
    return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#' + feature, '1.1');
  };

  /**
   * This Object contains some standard easing cubic bezier curves. Then can be used with their name in the `Chartist.Svg.animate`. You can also extend the list and use your own name in the `animate` function. Click the show code button to see the available bezier functions.
   *
   * @memberof Chartist.Svg
   */
  var easingCubicBeziers = {
    easeInSine: [0.47, 0, 0.745, 0.715],
    easeOutSine: [0.39, 0.575, 0.565, 1],
    easeInOutSine: [0.445, 0.05, 0.55, 0.95],
    easeInQuad: [0.55, 0.085, 0.68, 0.53],
    easeOutQuad: [0.25, 0.46, 0.45, 0.94],
    easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
    easeInCubic: [0.55, 0.055, 0.675, 0.19],
    easeOutCubic: [0.215, 0.61, 0.355, 1],
    easeInOutCubic: [0.645, 0.045, 0.355, 1],
    easeInQuart: [0.895, 0.03, 0.685, 0.22],
    easeOutQuart: [0.165, 0.84, 0.44, 1],
    easeInOutQuart: [0.77, 0, 0.175, 1],
    easeInQuint: [0.755, 0.05, 0.855, 0.06],
    easeOutQuint: [0.23, 1, 0.32, 1],
    easeInOutQuint: [0.86, 0, 0.07, 1],
    easeInExpo: [0.95, 0.05, 0.795, 0.035],
    easeOutExpo: [0.19, 1, 0.22, 1],
    easeInOutExpo: [1, 0, 0, 1],
    easeInCirc: [0.6, 0.04, 0.98, 0.335],
    easeOutCirc: [0.075, 0.82, 0.165, 1],
    easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
    easeInBack: [0.6, -0.28, 0.735, 0.045],
    easeOutBack: [0.175, 0.885, 0.32, 1.275],
    easeInOutBack: [0.68, -0.55, 0.265, 1.55]
  };

  Chartist.Svg.Easing = easingCubicBeziers;

  /**
   * This helper class is to wrap multiple `Chartist.Svg` elements into a list where you can call the `Chartist.Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Chartist.Svg` on multiple elements.
   * An instance of this class is also returned by `Chartist.Svg.querySelectorAll`.
   *
   * @memberof Chartist.Svg
   * @param {Array<Node>|NodeList} nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
   * @constructor
   */
  function SvgList(nodeList) {
    var list = this;

    this.svgElements = [];
    for(var i = 0; i < nodeList.length; i++) {
      this.svgElements.push(new Chartist.Svg(nodeList[i]));
    }

    // Add delegation methods for Chartist.Svg
    Object.keys(Chartist.Svg.prototype).filter(function(prototypeProperty) {
      return ['constructor',
          'parent',
          'querySelector',
          'querySelectorAll',
          'replace',
          'append',
          'classes',
          'height',
          'width'].indexOf(prototypeProperty) === -1;
    }).forEach(function(prototypeProperty) {
      list[prototypeProperty] = function() {
        var args = Array.prototype.slice.call(arguments, 0);
        list.svgElements.forEach(function(element) {
          Chartist.Svg.prototype[prototypeProperty].apply(element, args);
        });
        return list;
      };
    });
  }

  Chartist.Svg.List = Chartist.Class.extend({
    constructor: SvgList
  });
}(window, document, Chartist));
;/**
 * Chartist SVG path module for SVG path description creation and modification.
 *
 * @module Chartist.Svg.Path
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  /**
   * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
   *
   * @memberof Chartist.Svg.Path
   * @type {Object}
   */
  var elementDescriptions = {
    m: ['x', 'y'],
    l: ['x', 'y'],
    c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
    a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
  };

  /**
   * Default options for newly created SVG path objects.
   *
   * @memberof Chartist.Svg.Path
   * @type {Object}
   */
  var defaultOptions = {
    // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
    accuracy: 3
  };

  function element(command, params, pathElements, pos, relative, data) {
    var pathElement = Chartist.extend({
      command: relative ? command.toLowerCase() : command.toUpperCase()
    }, params, data ? { data: data } : {} );

    pathElements.splice(pos, 0, pathElement);
  }

  function forEachParam(pathElements, cb) {
    pathElements.forEach(function(pathElement, pathElementIndex) {
      elementDescriptions[pathElement.command.toLowerCase()].forEach(function(paramName, paramIndex) {
        cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      });
    });
  }

  /**
   * Used to construct a new path object.
   *
   * @memberof Chartist.Svg.Path
   * @param {Boolean} close If set to true then this path will be closed when stringified (with a Z at the end)
   * @param {Object} options Options object that overrides the default objects. See default options for more details.
   * @constructor
   */
  function SvgPath(close, options) {
    this.pathElements = [];
    this.pos = 0;
    this.close = close;
    this.options = Chartist.extend({}, defaultOptions, options);
  }

  /**
   * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} [pos] If a number is passed then the cursor is set to this position in the path element array.
   * @return {Chartist.Svg.Path|Number} If the position parameter was passed then the return value will be the path object for easy call chaining. If no position parameter was passed then the current position is returned.
   */
  function position(pos) {
    if(pos !== undefined) {
      this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
      return this;
    } else {
      return this.pos;
    }
  }

  /**
   * Removes elements from the path starting at the current position.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} count Number of path elements that should be removed from the current position.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function remove(count) {
    this.pathElements.splice(this.pos, count);
    return this;
  }

  /**
   * Use this function to add a new move SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The x coordinate for the move element.
   * @param {Number} y The y coordinate for the move element.
   * @param {Boolean} [relative] If set to true the move element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function move(x, y, relative, data) {
    element('M', {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new line SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The x coordinate for the line element.
   * @param {Number} y The y coordinate for the line element.
   * @param {Boolean} [relative] If set to true the line element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function line(x, y, relative, data) {
    element('L', {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new curve SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x1 The x coordinate for the first control point of the bezier curve.
   * @param {Number} y1 The y coordinate for the first control point of the bezier curve.
   * @param {Number} x2 The x coordinate for the second control point of the bezier curve.
   * @param {Number} y2 The y coordinate for the second control point of the bezier curve.
   * @param {Number} x The x coordinate for the target point of the curve element.
   * @param {Number} y The y coordinate for the target point of the curve element.
   * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function curve(x1, y1, x2, y2, x, y, relative, data) {
    element('C', {
      x1: +x1,
      y1: +y1,
      x2: +x2,
      y2: +y2,
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Use this function to add a new non-bezier curve SVG path element.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} rx The radius to be used for the x-axis of the arc.
   * @param {Number} ry The radius to be used for the y-axis of the arc.
   * @param {Number} xAr Defines the orientation of the arc
   * @param {Number} lAf Large arc flag
   * @param {Number} sf Sweep flag
   * @param {Number} x The x coordinate for the target point of the curve element.
   * @param {Number} y The y coordinate for the target point of the curve element.
   * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
   * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function arc(rx, ry, xAr, lAf, sf, x, y, relative, data) {
    element('A', {
      rx: +rx,
      ry: +ry,
      xAr: +xAr,
      lAf: +lAf,
      sf: +sf,
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }

  /**
   * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
   *
   * @memberof Chartist.Svg.Path
   * @param {String} path Any SVG path that contains move (m), line (l) or curve (c) components.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function parse(path) {
    // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
    var chunks = path.replace(/([A-Za-z])([0-9])/g, '$1 $2')
      .replace(/([0-9])([A-Za-z])/g, '$1 $2')
      .split(/[\s,]+/)
      .reduce(function(result, element) {
        if(element.match(/[A-Za-z]/)) {
          result.push([]);
        }

        result[result.length - 1].push(element);
        return result;
      }, []);

    // If this is a closed path we remove the Z at the end because this is determined by the close option
    if(chunks[chunks.length - 1][0].toUpperCase() === 'Z') {
      chunks.pop();
    }

    // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
    // For example {command: 'M', x: '10', y: '10'}
    var elements = chunks.map(function(chunk) {
        var command = chunk.shift(),
          description = elementDescriptions[command.toLowerCase()];

        return Chartist.extend({
          command: command
        }, description.reduce(function(result, paramName, index) {
          result[paramName] = +chunk[index];
          return result;
        }, {}));
      });

    // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position
    var spliceArgs = [this.pos, 0];
    Array.prototype.push.apply(spliceArgs, elements);
    Array.prototype.splice.apply(this.pathElements, spliceArgs);
    // Increase the internal position by the element count
    this.pos += elements.length;

    return this;
  }

  /**
   * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
   *
   * @memberof Chartist.Svg.Path
   * @return {String}
   */
  function stringify() {
    var accuracyMultiplier = Math.pow(10, this.options.accuracy);

    return this.pathElements.reduce(function(path, pathElement) {
        var params = elementDescriptions[pathElement.command.toLowerCase()].map(function(paramName) {
          return this.options.accuracy ?
            (Math.round(pathElement[paramName] * accuracyMultiplier) / accuracyMultiplier) :
            pathElement[paramName];
        }.bind(this));

        return path + pathElement.command + params.join(',');
      }.bind(this), '') + (this.close ? 'Z' : '');
  }

  /**
   * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The number which will be used to scale the x, x1 and x2 of all path elements.
   * @param {Number} y The number which will be used to scale the y, y1 and y2 of all path elements.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function scale(x, y) {
    forEachParam(this.pathElements, function(pathElement, paramName) {
      pathElement[paramName] *= paramName[0] === 'x' ? x : y;
    });
    return this;
  }

  /**
   * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Number} x The number which will be used to translate the x, x1 and x2 of all path elements.
   * @param {Number} y The number which will be used to translate the y, y1 and y2 of all path elements.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function translate(x, y) {
    forEachParam(this.pathElements, function(pathElement, paramName) {
      pathElement[paramName] += paramName[0] === 'x' ? x : y;
    });
    return this;
  }

  /**
   * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
   * The method signature of the callback function looks like this:
   * ```javascript
   * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
   * ```
   * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
   *
   * @memberof Chartist.Svg.Path
   * @param {Function} transformFnc The callback function for the transformation. Check the signature in the function description.
   * @return {Chartist.Svg.Path} The current path object for easy call chaining.
   */
  function transform(transformFnc) {
    forEachParam(this.pathElements, function(pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
      var transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      if(transformed || transformed === 0) {
        pathElement[paramName] = transformed;
      }
    });
    return this;
  }

  /**
   * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
   *
   * @memberof Chartist.Svg.Path
   * @param {Boolean} [close] Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
   * @return {Chartist.Svg.Path}
   */
  function clone(close) {
    var c = new Chartist.Svg.Path(close || this.close);
    c.pos = this.pos;
    c.pathElements = this.pathElements.slice().map(function cloneElements(pathElement) {
      return Chartist.extend({}, pathElement);
    });
    c.options = Chartist.extend({}, this.options);
    return c;
  }

  /**
   * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
   *
   * @memberof Chartist.Svg.Path
   * @param {String} command The command you'd like to use to split the path
   * @return {Array<Chartist.Svg.Path>}
   */
  function splitByCommand(command) {
    var split = [
      new Chartist.Svg.Path()
    ];

    this.pathElements.forEach(function(pathElement) {
      if(pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
        split.push(new Chartist.Svg.Path());
      }

      split[split.length - 1].pathElements.push(pathElement);
    });

    return split;
  }

  /**
   * This static function on `Chartist.Svg.Path` is joining multiple paths together into one paths.
   *
   * @memberof Chartist.Svg.Path
   * @param {Array<Chartist.Svg.Path>} paths A list of paths to be joined together. The order is important.
   * @param {boolean} close If the newly created path should be a closed path
   * @param {Object} options Path options for the newly created path.
   * @return {Chartist.Svg.Path}
   */

  function join(paths, close, options) {
    var joinedPath = new Chartist.Svg.Path(close, options);
    for(var i = 0; i < paths.length; i++) {
      var path = paths[i];
      for(var j = 0; j < path.pathElements.length; j++) {
        joinedPath.pathElements.push(path.pathElements[j]);
      }
    }
    return joinedPath;
  }

  Chartist.Svg.Path = Chartist.Class.extend({
    constructor: SvgPath,
    position: position,
    remove: remove,
    move: move,
    line: line,
    curve: curve,
    arc: arc,
    scale: scale,
    translate: translate,
    transform: transform,
    parse: parse,
    stringify: stringify,
    clone: clone,
    splitByCommand: splitByCommand
  });

  Chartist.Svg.Path.elementDescriptions = elementDescriptions;
  Chartist.Svg.Path.join = join;
}(window, document, Chartist));
;/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  var axisUnits = {
    x: {
      pos: 'x',
      len: 'width',
      dir: 'horizontal',
      rectStart: 'x1',
      rectEnd: 'x2',
      rectOffset: 'y2'
    },
    y: {
      pos: 'y',
      len: 'height',
      dir: 'vertical',
      rectStart: 'y2',
      rectEnd: 'y1',
      rectOffset: 'x1'
    }
  };

  function Axis(units, chartRect, ticks, options) {
    this.units = units;
    this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
    this.chartRect = chartRect;
    this.axisLength = chartRect[units.rectEnd] - chartRect[units.rectStart];
    this.gridOffset = chartRect[units.rectOffset];
    this.ticks = ticks;
    this.options = options;
  }

  function createGridAndLabels(gridGroup, labelGroup, useForeignObject, chartOptions, eventEmitter) {
    var axisOptions = chartOptions['axis' + this.units.pos.toUpperCase()];
    var projectedValues = this.ticks.map(this.projectValue.bind(this));
    var labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);

    projectedValues.forEach(function(projectedValue, index) {
      var labelOffset = {
        x: 0,
        y: 0
      };

      // TODO: Find better solution for solving this problem
      // Calculate how much space we have available for the label
      var labelLength;
      if(projectedValues[index + 1]) {
        // If we still have one label ahead, we can calculate the distance to the next tick / label
        labelLength = projectedValues[index + 1] - projectedValue;
      } else {
        // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
        // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
        // still be visible inside of the chart padding.
        labelLength = Math.max(this.axisLength - projectedValue, 30);
      }

      // Skip grid lines and labels where interpolated label values are falsey (execpt for 0)
      if(Chartist.isFalseyButZero(labelValues[index]) && labelValues[index] !== '') {
        return;
      }

      // Transform to global coordinates using the chartRect
      // We also need to set the label offset for the createLabel function
      if(this.units.pos === 'x') {
        projectedValue = this.chartRect.x1 + projectedValue;
        labelOffset.x = chartOptions.axisX.labelOffset.x;

        // If the labels should be positioned in start position (top side for vertical axis) we need to set a
        // different offset as for positioned with end (bottom)
        if(chartOptions.axisX.position === 'start') {
          labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
        } else {
          labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
        }
      } else {
        projectedValue = this.chartRect.y1 - projectedValue;
        labelOffset.y = chartOptions.axisY.labelOffset.y - (useForeignObject ? labelLength : 0);

        // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
        // different offset as for positioned with end (right side)
        if(chartOptions.axisY.position === 'start') {
          labelOffset.x = useForeignObject ? this.chartRect.padding.left + chartOptions.axisY.labelOffset.x : this.chartRect.x1 - 10;
        } else {
          labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
        }
      }

      if(axisOptions.showGrid) {
        Chartist.createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [
          chartOptions.classNames.grid,
          chartOptions.classNames[this.units.dir]
        ], eventEmitter);
      }

      if(axisOptions.showLabel) {
        Chartist.createLabel(projectedValue, labelLength, index, labelValues, this, axisOptions.offset, labelOffset, labelGroup, [
          chartOptions.classNames.label,
          chartOptions.classNames[this.units.dir],
          (axisOptions.position === 'start' ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames['end'])
        ], useForeignObject, eventEmitter);
      }
    }.bind(this));
  }

  Chartist.Axis = Chartist.Class.extend({
    constructor: Axis,
    createGridAndLabels: createGridAndLabels,
    projectValue: function(value, index, data) {
      throw new Error('Base axis can\'t be instantiated!');
    }
  });

  Chartist.Axis.units = axisUnits;

}(window, document, Chartist));
;/**
 * The auto scale axis uses standard linear scale projection of values along an axis. It uses order of magnitude to find a scale automatically and evaluates the available space in order to find the perfect amount of ticks for your chart.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
 *   high: 100,
 *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
 *   low: 0,
 *   // This option will be used when finding the right scale division settings. The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).
 *   scaleMinSpace: 20,
 *   // Can be set to true or false. If set to true, the scale will be generated with whole numbers only.
 *   onlyInteger: true,
 *   // The reference value can be used to make sure that this value will always be on the chart. This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.
 *   referenceValue: 5
 * };
 * ```
 *
 * @module Chartist.AutoScaleAxis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  function AutoScaleAxis(axisUnit, data, chartRect, options) {
    // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
    var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
    this.bounds = Chartist.getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
    this.range = {
      min: this.bounds.min,
      max: this.bounds.max
    };

    Chartist.AutoScaleAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      this.bounds.values,
      options);
  }

  function projectValue(value) {
    return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.bounds.min) / this.bounds.range;
  }

  Chartist.AutoScaleAxis = Chartist.Axis.extend({
    constructor: AutoScaleAxis,
    projectValue: projectValue
  });

}(window, document, Chartist));
;/**
 * The fixed scale axis uses standard linear projection of values along an axis. It makes use of a divisor option to divide the range provided from the minimum and maximum value or the options high and low that will override the computed minimum and maximum.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
 *   high: 100,
 *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
 *   low: 0,
 *   // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
 *   divisor: 4,
 *   // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
 *   ticks: [1, 10, 20, 30]
 * };
 * ```
 *
 * @module Chartist.FixedScaleAxis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  function FixedScaleAxis(axisUnit, data, chartRect, options) {
    var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
    this.divisor = options.divisor || 1;
    this.ticks = options.ticks || Chartist.times(this.divisor).map(function(value, index) {
      return highLow.low + (highLow.high - highLow.low) / this.divisor * index;
    }.bind(this));
    this.ticks.sort(function(a, b) {
      return a - b;
    });
    this.range = {
      min: highLow.low,
      max: highLow.high
    };

    Chartist.FixedScaleAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      this.ticks,
      options);

    this.stepLength = this.axisLength / this.divisor;
  }

  function projectValue(value) {
    return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
  }

  Chartist.FixedScaleAxis = Chartist.Axis.extend({
    constructor: FixedScaleAxis,
    projectValue: projectValue
  });

}(window, document, Chartist));
;/**
 * The step axis for step based charts like bar chart or step based line charts. It uses a fixed amount of ticks that will be equally distributed across the whole axis length. The projection is done using the index of the data value rather than the value itself and therefore it's only useful for distribution purpose.
 * **Options**
 * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
 * ```javascript
 * var options = {
 *   // Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.
 *   ticks: ['One', 'Two', 'Three'],
 *   // If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.
 *   stretch: true
 * };
 * ```
 *
 * @module Chartist.StepAxis
 */
/* global Chartist */
(function (window, document, Chartist) {
  'use strict';

  function StepAxis(axisUnit, data, chartRect, options) {
    Chartist.StepAxis.super.constructor.call(this,
      axisUnit,
      chartRect,
      options.ticks,
      options);

    var calc = Math.max(1, options.ticks.length - (options.stretch ? 1 : 0));
    this.stepLength = this.axisLength / calc;
  }

  function projectValue(value, index) {
    return this.stepLength * index;
  }

  Chartist.StepAxis = Chartist.Axis.extend({
    constructor: StepAxis,
    projectValue: projectValue
  });

}(window, document, Chartist));
;/**
 * The Chartist line chart can be used to draw Line or Scatter charts. If used in the browser you can access the global `Chartist` namespace where you find the `Line` function as a main entry point.
 *
 * For examples on how to use the line chart please check the examples of the `Chartist.Line` method.
 *
 * @module Chartist.Line
 */
/* global Chartist */
(function(window, document, Chartist){
  'use strict';

  /**
   * Default options in line charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Line
   */
  var defaultOptions = {
    // Options for X-Axis
    axisX: {
      // The offset of the labels to the chart area
      offset: 30,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'end',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
      type: undefined
    },
    // Options for Y-Axis
    axisY: {
      // The offset of the labels to the chart area
      offset: 40,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'start',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
      type: undefined,
      // This value specifies the minimum height in pixel of the scale steps
      scaleMinSpace: 20,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // If the line should be drawn or not
    showLine: true,
    // If dots should be drawn or not
    showPoint: true,
    // If the line chart should draw an area
    showArea: false,
    // The base for the area chart that will be used to close the area shape (is normally 0)
    areaBase: 0,
    // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
    lineSmooth: true,
    // If the line chart should add a background fill to the .ct-grids group.
    showGridBackground: false,
    // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
    low: undefined,
    // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
    high: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: {
      top: 15,
      right: 15,
      bottom: 5,
      left: 10
    },
    // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
    fullWidth: false,
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
      chart: 'ct-chart-line',
      label: 'ct-label',
      labelGroup: 'ct-labels',
      series: 'ct-series',
      line: 'ct-line',
      point: 'ct-point',
      area: 'ct-area',
      grid: 'ct-grid',
      gridGroup: 'ct-grids',
      gridBackground: 'ct-grid-background',
      vertical: 'ct-vertical',
      horizontal: 'ct-horizontal',
      start: 'ct-start',
      end: 'ct-end'
    }
  };

  /**
   * Creates a new chart
   *
   */
  function createChart(options) {
    var data = Chartist.normalizeData(this.data, options.reverseData, true);

    // Create new svg object
    this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart);
    // Create groups for labels, grid and series
    var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
    var seriesGroup = this.svg.elem('g');
    var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

    var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
    var axisX, axisY;

    if(options.axisX.type === undefined) {
      axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
        ticks: data.normalized.labels,
        stretch: options.fullWidth
      }));
    } else {
      axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
    }

    if(options.axisY.type === undefined) {
      axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
        high: Chartist.isNumeric(options.high) ? options.high : options.axisY.high,
        low: Chartist.isNumeric(options.low) ? options.low : options.axisY.low
      }));
    } else {
      axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
    }

    axisX.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
    axisY.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

    if (options.showGridBackground) {
      Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
    }

    // Draw the series
    data.raw.series.forEach(function(series, seriesIndex) {
      var seriesElement = seriesGroup.elem('g');

      // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
      seriesElement.attr({
        'ct:series-name': series.name,
        'ct:meta': Chartist.serialize(series.meta)
      });

      // Use series class from series data or if not set generate one
      seriesElement.addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex))
      ].join(' '));

      var pathCoordinates = [],
        pathData = [];

      data.normalized.series[seriesIndex].forEach(function(value, valueIndex) {
        var p = {
          x: chartRect.x1 + axisX.projectValue(value, valueIndex, data.normalized.series[seriesIndex]),
          y: chartRect.y1 - axisY.projectValue(value, valueIndex, data.normalized.series[seriesIndex])
        };
        pathCoordinates.push(p.x, p.y);
        pathData.push({
          value: value,
          valueIndex: valueIndex,
          meta: Chartist.getMetaData(series, valueIndex)
        });
      }.bind(this));

      var seriesOptions = {
        lineSmooth: Chartist.getSeriesOption(series, options, 'lineSmooth'),
        showPoint: Chartist.getSeriesOption(series, options, 'showPoint'),
        showLine: Chartist.getSeriesOption(series, options, 'showLine'),
        showArea: Chartist.getSeriesOption(series, options, 'showArea'),
        areaBase: Chartist.getSeriesOption(series, options, 'areaBase')
      };

      var smoothing = typeof seriesOptions.lineSmooth === 'function' ?
        seriesOptions.lineSmooth : (seriesOptions.lineSmooth ? Chartist.Interpolation.monotoneCubic() : Chartist.Interpolation.none());
      // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
      // index, value and meta data
      var path = smoothing(pathCoordinates, pathData);

      // If we should show points we need to create them now to avoid secondary loop
      // Points are drawn from the pathElements returned by the interpolation function
      // Small offset for Firefox to render squares correctly
      if (seriesOptions.showPoint) {

        path.pathElements.forEach(function(pathElement) {
          var point = seriesElement.elem('line', {
            x1: pathElement.x,
            y1: pathElement.y,
            x2: pathElement.x + 0.01,
            y2: pathElement.y
          }, options.classNames.point).attr({
            'ct:value': [pathElement.data.value.x, pathElement.data.value.y].filter(Chartist.isNumeric).join(','),
            'ct:meta': Chartist.serialize(pathElement.data.meta)
          });

          this.eventEmitter.emit('draw', {
            type: 'point',
            value: pathElement.data.value,
            index: pathElement.data.valueIndex,
            meta: pathElement.data.meta,
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            group: seriesElement,
            element: point,
            x: pathElement.x,
            y: pathElement.y
          });
        }.bind(this));
      }

      if(seriesOptions.showLine) {
        var line = seriesElement.elem('path', {
          d: path.stringify()
        }, options.classNames.line, true);

        this.eventEmitter.emit('draw', {
          type: 'line',
          values: data.normalized.series[seriesIndex],
          path: path.clone(),
          chartRect: chartRect,
          index: seriesIndex,
          series: series,
          seriesIndex: seriesIndex,
          seriesMeta: series.meta,
          axisX: axisX,
          axisY: axisY,
          group: seriesElement,
          element: line
        });
      }

      // Area currently only works with axes that support a range!
      if(seriesOptions.showArea && axisY.range) {
        // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
        // the area is not drawn outside the chart area.
        var areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min);

        // We project the areaBase value into screen coordinates
        var areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase);

        // In order to form the area we'll first split the path by move commands so we can chunk it up into segments
        path.splitByCommand('M').filter(function onlySolidSegments(pathSegment) {
          // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
          return pathSegment.pathElements.length > 1;
        }).map(function convertToArea(solidPathSegments) {
          // Receiving the filtered solid path segments we can now convert those segments into fill areas
          var firstElement = solidPathSegments.pathElements[0];
          var lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1];

          // Cloning the solid path segment with closing option and removing the first move command from the clone
          // We then insert a new move that should start at the area base and draw a straight line up or down
          // at the end of the path we add an additional straight line to the projected area base value
          // As the closing option is set our path will be automatically closed
          return solidPathSegments.clone(true)
            .position(0)
            .remove(1)
            .move(firstElement.x, areaBaseProjected)
            .line(firstElement.x, firstElement.y)
            .position(solidPathSegments.pathElements.length + 1)
            .line(lastElement.x, areaBaseProjected);

        }).forEach(function createArea(areaPath) {
          // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
          // and adding the created DOM elements to the correct series group
          var area = seriesElement.elem('path', {
            d: areaPath.stringify()
          }, options.classNames.area, true);

          // Emit an event for each area that was drawn
          this.eventEmitter.emit('draw', {
            type: 'area',
            values: data.normalized.series[seriesIndex],
            path: areaPath.clone(),
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            chartRect: chartRect,
            index: seriesIndex,
            group: seriesElement,
            element: area
          });
        }.bind(this));
      }
    }.bind(this));

    this.eventEmitter.emit('created', {
      bounds: axisY.bounds,
      chartRect: chartRect,
      axisX: axisX,
      axisY: axisY,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new line chart.
   *
   * @memberof Chartist.Line
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object that needs to consist of a labels and a series array
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object which exposes the API for the created chart
   *
   * @example
   * // Create a simple line chart
   * var data = {
   *   // A labels array that can contain any sort of values
   *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
   *   // Our series array that contains series objects or in this case series data arrays
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // As options we currently only set a static size of 300x200 px
   * var options = {
   *   width: '300px',
   *   height: '200px'
   * };
   *
   * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
   * new Chartist.Line('.ct-chart', data, options);
   *
   * @example
   * // Use specific interpolation function with configuration from the Chartist.Interpolation module
   *
   * var chart = new Chartist.Line('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5],
   *   series: [
   *     [1, 1, 8, 1, 7]
   *   ]
   * }, {
   *   lineSmooth: Chartist.Interpolation.cardinal({
   *     tension: 0.2
   *   })
   * });
   *
   * @example
   * // Create a line chart with responsive options
   *
   * var data = {
   *   // A labels array that can contain any sort of values
   *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
   *   // Our series array that contains series objects or in this case series data arrays
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
   * var responsiveOptions = [
   *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
   *     showPoint: false,
   *     axisX: {
   *       labelInterpolationFnc: function(value) {
   *         // Will return Mon, Tue, Wed etc. on medium screens
   *         return value.slice(0, 3);
   *       }
   *     }
   *   }],
   *   ['screen and (max-width: 640px)', {
   *     showLine: false,
   *     axisX: {
   *       labelInterpolationFnc: function(value) {
   *         // Will return M, T, W etc. on small screens
   *         return value[0];
   *       }
   *     }
   *   }]
   * ];
   *
   * new Chartist.Line('.ct-chart', data, null, responsiveOptions);
   *
   */
  function Line(query, data, options, responsiveOptions) {
    Chartist.Line.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating line chart type in Chartist namespace
  Chartist.Line = Chartist.Base.extend({
    constructor: Line,
    createChart: createChart
  });

}(window, document, Chartist));
;/**
 * The bar chart module of Chartist that can be used to draw unipolar or bipolar bar and grouped bar charts.
 *
 * @module Chartist.Bar
 */
/* global Chartist */
(function(window, document, Chartist){
  'use strict';

  /**
   * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Bar
   */
  var defaultOptions = {
    // Options for X-Axis
    axisX: {
      // The offset of the chart drawing area to the border of the container
      offset: 30,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'end',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // This value specifies the minimum width in pixel of the scale steps
      scaleMinSpace: 30,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Options for Y-Axis
    axisY: {
      // The offset of the chart drawing area to the border of the container
      offset: 40,
      // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
      position: 'start',
      // Allows you to correct label positioning on this axis by positive or negative x and y offset.
      labelOffset: {
        x: 0,
        y: 0
      },
      // If labels should be shown or not
      showLabel: true,
      // If the axis grid should be drawn or not
      showGrid: true,
      // Interpolation function that allows you to intercept the value from the axis label
      labelInterpolationFnc: Chartist.noop,
      // This value specifies the minimum height in pixel of the scale steps
      scaleMinSpace: 20,
      // Use only integer values (whole numbers) for the scale steps
      onlyInteger: false
    },
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
    high: undefined,
    // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
    low: undefined,
    // Unless low/high are explicitly set, bar chart will be centered at zero by default. Set referenceValue to null to auto scale.
    referenceValue: 0,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: {
      top: 15,
      right: 15,
      bottom: 5,
      left: 10
    },
    // Specify the distance in pixel of bars in a group
    seriesBarDistance: 15,
    // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
    stackBars: false,
    // If set to 'overlap' this property will force the stacked bars to draw from the zero line.
    // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
    stackMode: 'accumulate',
    // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
    horizontalBars: false,
    // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
    distributeSeries: false,
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // If the bar chart should add a background fill to the .ct-grids group.
    showGridBackground: false,
    // Override the class names that get used to generate the SVG structure of the chart
    classNames: {
      chart: 'ct-chart-bar',
      horizontalBars: 'ct-horizontal-bars',
      label: 'ct-label',
      labelGroup: 'ct-labels',
      series: 'ct-series',
      bar: 'ct-bar',
      grid: 'ct-grid',
      gridGroup: 'ct-grids',
      gridBackground: 'ct-grid-background',
      vertical: 'ct-vertical',
      horizontal: 'ct-horizontal',
      start: 'ct-start',
      end: 'ct-end'
    }
  };

  /**
   * Creates a new chart
   *
   */
  function createChart(options) {
    var data;
    var highLow;

    if(options.distributeSeries) {
      data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
      data.normalized.series = data.normalized.series.map(function(value) {
        return [value];
      });
    } else {
      data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
    }

    // Create new svg element
    this.svg = Chartist.createSvg(
      this.container,
      options.width,
      options.height,
      options.classNames.chart + (options.horizontalBars ? ' ' + options.classNames.horizontalBars : '')
    );

    // Drawing groups in correct order
    var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
    var seriesGroup = this.svg.elem('g');
    var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

    if(options.stackBars && data.normalized.series.length !== 0) {

      // If stacked bars we need to calculate the high low from stacked values from each series
      var serialSums = Chartist.serialMap(data.normalized.series, function serialSums() {
        return Array.prototype.slice.call(arguments).map(function(value) {
          return value;
        }).reduce(function(prev, curr) {
          return {
            x: prev.x + (curr && curr.x) || 0,
            y: prev.y + (curr && curr.y) || 0
          };
        }, {x: 0, y: 0});
      });

      highLow = Chartist.getHighLow([serialSums], options, options.horizontalBars ? 'x' : 'y');

    } else {

      highLow = Chartist.getHighLow(data.normalized.series, options, options.horizontalBars ? 'x' : 'y');
    }

    // Overrides of high / low from settings
    highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
    highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);

    var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);

    var valueAxis,
      labelAxisTicks,
      labelAxis,
      axisX,
      axisY;

    // We need to set step count based on some options combinations
    if(options.distributeSeries && options.stackBars) {
      // If distributed series are enabled and bars need to be stacked, we'll only have one bar and therefore should
      // use only the first label for the step axis
      labelAxisTicks = data.normalized.labels.slice(0, 1);
    } else {
      // If distributed series are enabled but stacked bars aren't, we should use the series labels
      // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
      // as the bars are normalized
      labelAxisTicks = data.normalized.labels;
    }

    // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.
    if(options.horizontalBars) {
      if(options.axisX.type === undefined) {
        valueAxis = axisX = new Chartist.AutoScaleAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          highLow: highLow,
          referenceValue: 0
        }));
      } else {
        valueAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          highLow: highLow,
          referenceValue: 0
        }));
      }

      if(options.axisY.type === undefined) {
        labelAxis = axisY = new Chartist.StepAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, {
          ticks: labelAxisTicks
        });
      } else {
        labelAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
      }
    } else {
      if(options.axisX.type === undefined) {
        labelAxis = axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, {
          ticks: labelAxisTicks
        });
      } else {
        labelAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
      }

      if(options.axisY.type === undefined) {
        valueAxis = axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          highLow: highLow,
          referenceValue: 0
        }));
      } else {
        valueAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          highLow: highLow,
          referenceValue: 0
        }));
      }
    }

    // Projected 0 point
    var zeroPoint = options.horizontalBars ? (chartRect.x1 + valueAxis.projectValue(0)) : (chartRect.y1 - valueAxis.projectValue(0));
    // Used to track the screen coordinates of stacked bars
    var stackedBarValues = [];

    labelAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
    valueAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

    if (options.showGridBackground) {
      Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
    }

    // Draw the series
    data.raw.series.forEach(function(series, seriesIndex) {
      // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
      var biPol = seriesIndex - (data.raw.series.length - 1) / 2;
      // Half of the period width between vertical grid lines used to position bars
      var periodHalfLength;
      // Current series SVG element
      var seriesElement;

      // We need to set periodHalfLength based on some options combinations
      if(options.distributeSeries && !options.stackBars) {
        // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
        // which is the series count and divide by 2
        periodHalfLength = labelAxis.axisLength / data.normalized.series.length / 2;
      } else if(options.distributeSeries && options.stackBars) {
        // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
        // length by 2
        periodHalfLength = labelAxis.axisLength / 2;
      } else {
        // On regular bar charts we should just use the series length
        periodHalfLength = labelAxis.axisLength / data.normalized.series[seriesIndex].length / 2;
      }

      // Adding the series group to the series element
      seriesElement = seriesGroup.elem('g');

      // Write attributes to series group element. If series name or meta is undefined the attributes will not be written
      seriesElement.attr({
        'ct:series-name': series.name,
        'ct:meta': Chartist.serialize(series.meta)
      });

      // Use series class from series data or if not set generate one
      seriesElement.addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex))
      ].join(' '));

      data.normalized.series[seriesIndex].forEach(function(value, valueIndex) {
        var projected,
          bar,
          previousStack,
          labelAxisValueIndex;

        // We need to set labelAxisValueIndex based on some options combinations
        if(options.distributeSeries && !options.stackBars) {
          // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
          // on the step axis for label positioning
          labelAxisValueIndex = seriesIndex;
        } else if(options.distributeSeries && options.stackBars) {
          // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
          // 0 for projection on the label step axis
          labelAxisValueIndex = 0;
        } else {
          // On regular bar charts we just use the value index to project on the label step axis
          labelAxisValueIndex = valueIndex;
        }

        // We need to transform coordinates differently based on the chart layout
        if(options.horizontalBars) {
          projected = {
            x: chartRect.x1 + valueAxis.projectValue(value && value.x ? value.x : 0, valueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - labelAxis.projectValue(value && value.y ? value.y : 0, labelAxisValueIndex, data.normalized.series[seriesIndex])
          };
        } else {
          projected = {
            x: chartRect.x1 + labelAxis.projectValue(value && value.x ? value.x : 0, labelAxisValueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - valueAxis.projectValue(value && value.y ? value.y : 0, valueIndex, data.normalized.series[seriesIndex])
          }
        }

        // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
        // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
        // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
        // add any automated positioning.
        if(labelAxis instanceof Chartist.StepAxis) {
          // Offset to center bar between grid lines, but only if the step axis is not stretched
          if(!labelAxis.options.stretch) {
            projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
          }
          // Using bi-polar offset for multiple series if no stacked bars or series distribution is used
          projected[labelAxis.units.pos] += (options.stackBars || options.distributeSeries) ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
        }

        // Enter value in stacked bar values used to remember previous screen value for stacking up bars
        previousStack = stackedBarValues[valueIndex] || zeroPoint;
        stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]);

        // Skip if value is undefined
        if(value === undefined) {
          return;
        }

        var positions = {};
        positions[labelAxis.units.pos + '1'] = projected[labelAxis.units.pos];
        positions[labelAxis.units.pos + '2'] = projected[labelAxis.units.pos];

        if(options.stackBars && (options.stackMode === 'accumulate' || !options.stackMode)) {
          // Stack mode: accumulate (default)
          // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
          // We want backwards compatibility, so the expected fallback without the 'stackMode' option
          // to be the original behaviour (accumulate)
          positions[labelAxis.counterUnits.pos + '1'] = previousStack;
          positions[labelAxis.counterUnits.pos + '2'] = stackedBarValues[valueIndex];
        } else {
          // Draw from the zero line normally
          // This is also the same code for Stack mode: overlap
          positions[labelAxis.counterUnits.pos + '1'] = zeroPoint;
          positions[labelAxis.counterUnits.pos + '2'] = projected[labelAxis.counterUnits.pos];
        }

        // Limit x and y so that they are within the chart rect
        positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
        positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
        positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
        positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);

        var metaData = Chartist.getMetaData(series, valueIndex);

        // Create bar element
        bar = seriesElement.elem('line', positions, options.classNames.bar).attr({
          'ct:value': [value.x, value.y].filter(Chartist.isNumeric).join(','),
          'ct:meta': Chartist.serialize(metaData)
        });

        this.eventEmitter.emit('draw', Chartist.extend({
          type: 'bar',
          value: value,
          index: valueIndex,
          meta: metaData,
          series: series,
          seriesIndex: seriesIndex,
          axisX: axisX,
          axisY: axisY,
          chartRect: chartRect,
          group: seriesElement,
          element: bar
        }, positions));
      }.bind(this));
    }.bind(this));

    this.eventEmitter.emit('created', {
      bounds: valueAxis.bounds,
      chartRect: chartRect,
      axisX: axisX,
      axisY: axisY,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new bar chart and returns API object that you can use for later changes.
   *
   * @memberof Chartist.Bar
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object that needs to consist of a labels and a series array
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object which exposes the API for the created chart
   *
   * @example
   * // Create a simple bar chart
   * var data = {
   *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
   *   series: [
   *     [5, 2, 4, 2, 0]
   *   ]
   * };
   *
   * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
   * new Chartist.Bar('.ct-chart', data);
   *
   * @example
   * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
   * new Chartist.Bar('.ct-chart', {
   *   labels: [1, 2, 3, 4, 5, 6, 7],
   *   series: [
   *     [1, 3, 2, -5, -3, 1, -6],
   *     [-5, -2, -4, -1, 2, -3, 1]
   *   ]
   * }, {
   *   seriesBarDistance: 12,
   *   low: -10,
   *   high: 10
   * });
   *
   */
  function Bar(query, data, options, responsiveOptions) {
    Chartist.Bar.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating bar chart type in Chartist namespace
  Chartist.Bar = Chartist.Base.extend({
    constructor: Bar,
    createChart: createChart
  });

}(window, document, Chartist));
;/**
 * The pie chart module of Chartist that can be used to draw pie, donut or gauge charts
 *
 * @module Chartist.Pie
 */
/* global Chartist */
(function(window, document, Chartist) {
  'use strict';

  /**
   * Default options in line charts. Expand the code view to see a detailed list of options with comments.
   *
   * @memberof Chartist.Pie
   */
  var defaultOptions = {
    // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
    width: undefined,
    // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
    height: undefined,
    // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
    chartPadding: 5,
    // Override the class names that are used to generate the SVG structure of the chart
    classNames: {
      chartPie: 'ct-chart-pie',
      chartDonut: 'ct-chart-donut',
      series: 'ct-series',
      slicePie: 'ct-slice-pie',
      sliceDonut: 'ct-slice-donut',
      label: 'ct-label'
    },
    // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
    startAngle: 0,
    // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
    total: undefined,
    // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
    donut: false,
    // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
    // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
    donutWidth: 60,
    // If a label should be shown or not
    showLabel: true,
    // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
    labelOffset: 0,
    // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
    labelPosition: 'inside',
    // An interpolation function for the label value
    labelInterpolationFnc: Chartist.noop,
    // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
    labelDirection: 'neutral',
    // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
    reverseData: false,
    // If true empty values will be ignored to avoid drawing unncessary slices and labels
    ignoreEmptyValues: false
  };

  /**
   * Determines SVG anchor position based on direction and center parameter
   *
   * @param center
   * @param label
   * @param direction
   * @return {string}
   */
  function determineAnchorPosition(center, label, direction) {
    var toTheRight = label.x > center.x;

    if(toTheRight && direction === 'explode' ||
      !toTheRight && direction === 'implode') {
      return 'start';
    } else if(toTheRight && direction === 'implode' ||
      !toTheRight && direction === 'explode') {
      return 'end';
    } else {
      return 'middle';
    }
  }

  /**
   * Creates the pie chart
   *
   * @param options
   */
  function createChart(options) {
    var data = Chartist.normalizeData(this.data);
    var seriesGroups = [],
      labelsGroup,
      chartRect,
      radius,
      labelRadius,
      totalDataSum,
      startAngle = options.startAngle;

    // Create SVG.js draw
    this.svg = Chartist.createSvg(this.container, options.width, options.height,options.donut ? options.classNames.chartDonut : options.classNames.chartPie);
    // Calculate charting rect
    chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
    // Get biggest circle radius possible within chartRect
    radius = Math.min(chartRect.width() / 2, chartRect.height() / 2);
    // Calculate total of all series to get reference value or use total reference from optional options
    totalDataSum = options.total || data.normalized.series.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    }, 0);

    var donutWidth = Chartist.quantity(options.donutWidth);
    if (donutWidth.unit === '%') {
      donutWidth.value *= radius / 100;
    }

    // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
    // Unfortunately this is not possible with the current SVG Spec
    // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html
    radius -= options.donut ? donutWidth.value / 2  : 0;

    // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
    // if regular pie chart it's half of the radius
    if(options.labelPosition === 'outside' || options.donut) {
      labelRadius = radius;
    } else if(options.labelPosition === 'center') {
      // If labelPosition is center we start with 0 and will later wait for the labelOffset
      labelRadius = 0;
    } else {
      // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
      // slice
      labelRadius = radius / 2;
    }
    // Add the offset to the labelRadius where a negative offset means closed to the center of the chart
    labelRadius += options.labelOffset;

    // Calculate end angle based on total sum and current data value and offset with padding
    var center = {
      x: chartRect.x1 + chartRect.width() / 2,
      y: chartRect.y2 + chartRect.height() / 2
    };

    // Check if there is only one non-zero value in the series array.
    var hasSingleValInSeries = data.raw.series.filter(function(val) {
      return val.hasOwnProperty('value') ? val.value !== 0 : val !== 0;
    }).length === 1;

    // Creating the series groups
    data.raw.series.forEach(function(series, index) {
      seriesGroups[index] = this.svg.elem('g', null, null);
    }.bind(this));
    //if we need to show labels we create the label group now
    if(options.showLabel) {
      labelsGroup = this.svg.elem('g', null, null);
    }

    // Draw the series
    // initialize series groups
    data.raw.series.forEach(function(series, index) {
      // If current value is zero and we are ignoring empty values then skip to next value
      if (data.normalized.series[index] === 0 && options.ignoreEmptyValues) return;

      // If the series is an object and contains a name or meta data we add a custom attribute
      seriesGroups[index].attr({
        'ct:series-name': series.name
      });

      // Use series class from series data or if not set generate one
      seriesGroups[index].addClass([
        options.classNames.series,
        (series.className || options.classNames.series + '-' + Chartist.alphaNumerate(index))
      ].join(' '));

      // If the whole dataset is 0 endAngle should be zero. Can't divide by 0.
      var endAngle = (totalDataSum > 0 ? startAngle + data.normalized.series[index] / totalDataSum * 360 : 0);

      // Use slight offset so there are no transparent hairline issues
      var overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));

      // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
      // with Z and use 359.99 degrees
      if(endAngle - overlappigStartAngle >= 359.99) {
        endAngle = overlappigStartAngle + 359.99;
      }

      var start = Chartist.polarToCartesian(center.x, center.y, radius, overlappigStartAngle),
        end = Chartist.polarToCartesian(center.x, center.y, radius, endAngle);

      // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke
      var path = new Chartist.Svg.Path(!options.donut)
        .move(end.x, end.y)
        .arc(radius, radius, 0, endAngle - startAngle > 180, 0, start.x, start.y);

      // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie
      if(!options.donut) {
        path.line(center.x, center.y);
      }

      // Create the SVG path
      // If this is a donut chart we add the donut class, otherwise just a regular slice
      var pathElement = seriesGroups[index].elem('path', {
        d: path.stringify()
      }, options.donut ? options.classNames.sliceDonut : options.classNames.slicePie);

      // Adding the pie series value to the path
      pathElement.attr({
        'ct:value': data.normalized.series[index],
        'ct:meta': Chartist.serialize(series.meta)
      });

      // If this is a donut, we add the stroke-width as style attribute
      if(options.donut) {
        pathElement.attr({
          'style': 'stroke-width: ' + donutWidth.value + 'px'
        });
      }

      // Fire off draw event
      this.eventEmitter.emit('draw', {
        type: 'slice',
        value: data.normalized.series[index],
        totalDataSum: totalDataSum,
        index: index,
        meta: series.meta,
        series: series,
        group: seriesGroups[index],
        element: pathElement,
        path: path.clone(),
        center: center,
        radius: radius,
        startAngle: startAngle,
        endAngle: endAngle
      });

      // If we need to show labels we need to add the label for this slice now
      if(options.showLabel) {
        var labelPosition;
        if(data.raw.series.length === 1) {
          // If we have only 1 series, we can position the label in the center of the pie
          labelPosition = {
            x: center.x,
            y: center.y
          };
        } else {
          // Position at the labelRadius distance from center and between start and end angle
          labelPosition = Chartist.polarToCartesian(
            center.x,
            center.y,
            labelRadius,
            startAngle + (endAngle - startAngle) / 2
          );
        }

        var rawValue;
        if(data.normalized.labels && !Chartist.isFalseyButZero(data.normalized.labels[index])) {
          rawValue = data.normalized.labels[index];
        } else {
          rawValue = data.normalized.series[index];
        }

        var interpolatedValue = options.labelInterpolationFnc(rawValue, index);

        if(interpolatedValue || interpolatedValue === 0) {
          var labelElement = labelsGroup.elem('text', {
            dx: labelPosition.x,
            dy: labelPosition.y,
            'text-anchor': determineAnchorPosition(center, labelPosition, options.labelDirection)
          }, options.classNames.label).text('' + interpolatedValue);

          // Fire off draw event
          this.eventEmitter.emit('draw', {
            type: 'label',
            index: index,
            group: labelsGroup,
            element: labelElement,
            text: '' + interpolatedValue,
            x: labelPosition.x,
            y: labelPosition.y
          });
        }
      }

      // Set next startAngle to current endAngle.
      // (except for last slice)
      startAngle = endAngle;
    }.bind(this));

    this.eventEmitter.emit('created', {
      chartRect: chartRect,
      svg: this.svg,
      options: options
    });
  }

  /**
   * This method creates a new pie chart and returns an object that can be used to redraw the chart.
   *
   * @memberof Chartist.Pie
   * @param {String|Node} query A selector query string or directly a DOM element
   * @param {Object} data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
   * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
   * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
   * @return {Object} An object with a version and an update method to manually redraw the chart
   *
   * @example
   * // Simple pie chart example with four series
   * new Chartist.Pie('.ct-chart', {
   *   series: [10, 2, 4, 3]
   * });
   *
   * @example
   * // Drawing a donut chart
   * new Chartist.Pie('.ct-chart', {
   *   series: [10, 2, 4, 3]
   * }, {
   *   donut: true
   * });
   *
   * @example
   * // Using donut, startAngle and total to draw a gauge chart
   * new Chartist.Pie('.ct-chart', {
   *   series: [20, 10, 30, 40]
   * }, {
   *   donut: true,
   *   donutWidth: 20,
   *   startAngle: 270,
   *   total: 200
   * });
   *
   * @example
   * // Drawing a pie chart with padding and labels that are outside the pie
   * new Chartist.Pie('.ct-chart', {
   *   series: [20, 10, 30, 40]
   * }, {
   *   chartPadding: 30,
   *   labelOffset: 50,
   *   labelDirection: 'explode'
   * });
   *
   * @example
   * // Overriding the class names for individual series as well as a name and meta data.
   * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
   * // to a ct:meta attribute.
   * new Chartist.Pie('.ct-chart', {
   *   series: [{
   *     value: 20,
   *     name: 'Series 1',
   *     className: 'my-custom-class-one',
   *     meta: 'Meta One'
   *   }, {
   *     value: 10,
   *     name: 'Series 2',
   *     className: 'my-custom-class-two',
   *     meta: 'Meta Two'
   *   }, {
   *     value: 70,
   *     name: 'Series 3',
   *     className: 'my-custom-class-three',
   *     meta: 'Meta Three'
   *   }]
   * });
   */
  function Pie(query, data, options, responsiveOptions) {
    Chartist.Pie.super.constructor.call(this,
      query,
      data,
      defaultOptions,
      Chartist.extend({}, defaultOptions, options),
      responsiveOptions);
  }

  // Creating pie chart type in Chartist namespace
  Chartist.Pie = Chartist.Base.extend({
    constructor: Pie,
    createChart: createChart,
    determineAnchorPosition: determineAnchorPosition
  });

}(window, document, Chartist));

return Chartist;

}));


/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.ct-label {\n  fill: rgba(0, 0, 0, 0.4);\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 0.75rem;\n  line-height: 1;\n}\n.ct-chart-line .ct-label,\n.ct-chart-bar .ct-label {\n  display: block;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.ct-chart-pie .ct-label,\n.ct-chart-donut .ct-label {\n  dominant-baseline: central;\n}\n.ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n.ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n.ct-label.ct-vertical.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end;\n}\n.ct-label.ct-vertical.ct-end {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n.ct-chart-bar .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start;\n}\n.ct-chart-bar .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  text-anchor: start;\n}\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-start {\n  -webkit-box-align: flex-end;\n  -ms-flex-align: flex-end;\n  align-items: flex-end;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-horizontal.ct-end {\n  -webkit-box-align: flex-start;\n  -ms-flex-align: flex-start;\n  align-items: flex-start;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: start;\n}\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-start {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-end;\n  -ms-flex-pack: flex-end;\n  justify-content: flex-end;\n  text-align: right;\n  text-anchor: end;\n}\n.ct-chart-bar.ct-horizontal-bars .ct-label.ct-vertical.ct-end {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: flex-start;\n  -ms-flex-pack: flex-start;\n  justify-content: flex-start;\n  text-align: left;\n  text-anchor: end;\n}\n.ct-grid {\n  stroke: rgba(0, 0, 0, 0.2);\n  stroke-width: 1px;\n  stroke-dasharray: 2px;\n}\n.ct-grid-background {\n  fill: none;\n}\n.ct-point {\n  stroke-width: 10px;\n  stroke-linecap: round;\n}\n.ct-line {\n  fill: none;\n  stroke-width: 4px;\n}\n.ct-area {\n  stroke: none;\n  fill-opacity: 0.1;\n}\n.ct-bar {\n  fill: none;\n  stroke-width: 10px;\n}\n.ct-slice-donut {\n  fill: none;\n  stroke-width: 60px;\n}\n.ct-series-a .ct-point, .ct-series-a .ct-line, .ct-series-a .ct-bar, .ct-series-a .ct-slice-donut {\n  stroke: #d70206;\n}\n.ct-series-a .ct-slice-pie, .ct-series-a .ct-area {\n  fill: #d70206;\n}\n.ct-series-b .ct-point, .ct-series-b .ct-line, .ct-series-b .ct-bar, .ct-series-b .ct-slice-donut {\n  stroke: #f05b4f;\n}\n.ct-series-b .ct-slice-pie, .ct-series-b .ct-area {\n  fill: #f05b4f;\n}\n.ct-series-c .ct-point, .ct-series-c .ct-line, .ct-series-c .ct-bar, .ct-series-c .ct-slice-donut {\n  stroke: #f4c63d;\n}\n.ct-series-c .ct-slice-pie, .ct-series-c .ct-area {\n  fill: #f4c63d;\n}\n.ct-series-d .ct-point, .ct-series-d .ct-line, .ct-series-d .ct-bar, .ct-series-d .ct-slice-donut {\n  stroke: #d17905;\n}\n.ct-series-d .ct-slice-pie, .ct-series-d .ct-area {\n  fill: #d17905;\n}\n.ct-series-e .ct-point, .ct-series-e .ct-line, .ct-series-e .ct-bar, .ct-series-e .ct-slice-donut {\n  stroke: #453d3f;\n}\n.ct-series-e .ct-slice-pie, .ct-series-e .ct-area {\n  fill: #453d3f;\n}\n.ct-series-f .ct-point, .ct-series-f .ct-line, .ct-series-f .ct-bar, .ct-series-f .ct-slice-donut {\n  stroke: #59922b;\n}\n.ct-series-f .ct-slice-pie, .ct-series-f .ct-area {\n  fill: #59922b;\n}\n.ct-series-g .ct-point, .ct-series-g .ct-line, .ct-series-g .ct-bar, .ct-series-g .ct-slice-donut {\n  stroke: #0544d3;\n}\n.ct-series-g .ct-slice-pie, .ct-series-g .ct-area {\n  fill: #0544d3;\n}\n.ct-series-h .ct-point, .ct-series-h .ct-line, .ct-series-h .ct-bar, .ct-series-h .ct-slice-donut {\n  stroke: #6b0392;\n}\n.ct-series-h .ct-slice-pie, .ct-series-h .ct-area {\n  fill: #6b0392;\n}\n.ct-series-i .ct-point, .ct-series-i .ct-line, .ct-series-i .ct-bar, .ct-series-i .ct-slice-donut {\n  stroke: #f05b4f;\n}\n.ct-series-i .ct-slice-pie, .ct-series-i .ct-area {\n  fill: #f05b4f;\n}\n.ct-series-j .ct-point, .ct-series-j .ct-line, .ct-series-j .ct-bar, .ct-series-j .ct-slice-donut {\n  stroke: #dda458;\n}\n.ct-series-j .ct-slice-pie, .ct-series-j .ct-area {\n  fill: #dda458;\n}\n.ct-series-k .ct-point, .ct-series-k .ct-line, .ct-series-k .ct-bar, .ct-series-k .ct-slice-donut {\n  stroke: #eacf7d;\n}\n.ct-series-k .ct-slice-pie, .ct-series-k .ct-area {\n  fill: #eacf7d;\n}\n.ct-series-l .ct-point, .ct-series-l .ct-line, .ct-series-l .ct-bar, .ct-series-l .ct-slice-donut {\n  stroke: #86797d;\n}\n.ct-series-l .ct-slice-pie, .ct-series-l .ct-area {\n  fill: #86797d;\n}\n.ct-series-m .ct-point, .ct-series-m .ct-line, .ct-series-m .ct-bar, .ct-series-m .ct-slice-donut {\n  stroke: #b2c326;\n}\n.ct-series-m .ct-slice-pie, .ct-series-m .ct-area {\n  fill: #b2c326;\n}\n.ct-series-n .ct-point, .ct-series-n .ct-line, .ct-series-n .ct-bar, .ct-series-n .ct-slice-donut {\n  stroke: #6188e2;\n}\n.ct-series-n .ct-slice-pie, .ct-series-n .ct-area {\n  fill: #6188e2;\n}\n.ct-series-o .ct-point, .ct-series-o .ct-line, .ct-series-o .ct-bar, .ct-series-o .ct-slice-donut {\n  stroke: #a748ca;\n}\n.ct-series-o .ct-slice-pie, .ct-series-o .ct-area {\n  fill: #a748ca;\n}\n.ct-square {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-square:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 100%;\n}\n.ct-square:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-square > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-minor-second {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-second:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 93.75%;\n}\n.ct-minor-second:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-minor-second > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-major-second {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-second:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 88.88889%;\n}\n.ct-major-second:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-major-second > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-minor-third {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-third:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 83.33333%;\n}\n.ct-minor-third:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-minor-third > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-major-third {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-third:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 80%;\n}\n.ct-major-third:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-major-third > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-perfect-fourth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-perfect-fourth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 75%;\n}\n.ct-perfect-fourth:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-perfect-fourth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-perfect-fifth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-perfect-fifth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 66.66667%;\n}\n.ct-perfect-fifth:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-perfect-fifth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-minor-sixth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-sixth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 62.5%;\n}\n.ct-minor-sixth:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-minor-sixth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-golden-section {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-golden-section:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 61.8047%;\n}\n.ct-golden-section:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-golden-section > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-major-sixth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-sixth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 60%;\n}\n.ct-major-sixth:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-major-sixth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-minor-seventh {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-minor-seventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 56.25%;\n}\n.ct-minor-seventh:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-minor-seventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-major-seventh {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-seventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 53.33333%;\n}\n.ct-major-seventh:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-major-seventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-octave {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-octave:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 50%;\n}\n.ct-octave:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-octave > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-major-tenth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-tenth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 40%;\n}\n.ct-major-tenth:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-major-tenth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-major-eleventh {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-eleventh:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 37.5%;\n}\n.ct-major-eleventh:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-major-eleventh > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-major-twelfth {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-major-twelfth:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 33.33333%;\n}\n.ct-major-twelfth:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-major-twelfth > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-double-octave {\n  display: block;\n  position: relative;\n  width: 100%;\n}\n.ct-double-octave:before {\n    display: block;\n    float: left;\n    content: \"\";\n    width: 0;\n    height: 0;\n    padding-bottom: 25%;\n}\n.ct-double-octave:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n.ct-double-octave > svg {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.ct-chart {\n  max-width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 661:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.lines-bars[data-v-76ce04f4] {\n  height: 240px;\n}\n", "", {"version":3,"sources":["/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/charts/Chartist.vue?56a3446d"],"names":[],"mappings":";AAuLA;EACA,cAAA;CACA","file":"Chartist.vue","sourcesContent":["<template>\n  <div>\n    <div class=\"tile is-ancestor\">\n      <div class=\"tile is-parent\">\n        <article class=\"tile is-child box\">\n          <h4 class=\"title\">LINES</h4>\n          <div class=\"block\">\n            <chartist class=\"lines-bars\" :type=\"'Line'\" :data=\"linesData\" :options=\"linesOptions\"></chartist>\n          </div>\n          <div class=\"block\">\n            <chartist class=\"lines-bars\" :type=\"'Line'\" :data=\"lineAreaData\" :options=\"lineAreaOptions\"></chartist>\n          </div>\n        </article>\n      </div>\n      <div class=\"tile is-parent\">\n        <article class=\"tile is-child box\">\n          <h4 class=\"title\">BARS</h4>\n          <div class=\"block\">\n            <chartist class=\"lines-bars\" :type=\"'Bar'\" :data=\"linesData\" :options=\"linesOptions\"></chartist>\n          </div>\n          <div class=\"block\">\n            <chartist class=\"lines-bars\" :type=\"'Bar'\" :data=\"barsData\" :options=\"barsOptions\" :responsive-options=\"barsResponsiveOptions\"></chartist>\n          </div>\n        </article>\n      </div>\n    </div>\n\n    <div class=\"tile is-ancestor\">\n      <div class=\"tile is-parent\">\n        <article class=\"tile is-child box\">\n          <h4 class=\"title\">PIES & DONUTS</h4>\n          <div class=\"content\">\n            <div class=\"columns\">\n              <div class=\"column\">\n                <chartist class=\"lines-bars\" :type=\"'Pie'\" :data=\"pieData\" :options=\"pieOptions\"></chartist>\n              </div>\n              <div class=\"column\">\n                <chartist class=\"lines-bars\" :type=\"'Pie'\" :data=\"gaugeData\" :options=\"gaugeOptions\"></chartist>\n              </div>\n              <div class=\"column\">\n                <chartist class=\"lines-bars\" :type=\"'Pie'\" :data=\"donutData\" :options=\"donutOptions\"></chartist>\n              </div>\n            </div>\n          </div>\n        </article>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Chartist from 'vue-bulma-chartist'\n\nexport default {\n  components: {\n    Chartist\n  },\n\n  data () {\n    return {\n      series: [\n        [12, 9, 7, 8, 5],\n        [2, 1, 3.5, 7, 3],\n        [1, 3, 4, 5, 6]\n      ],\n      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],\n      linesOptions: {\n        fullWidth: true,\n        chartPadding: {\n          right: 40\n        }\n      },\n\n      lineAreaData: {\n        labels: [1, 2, 3, 4, 5, 6, 7, 8],\n        series: [\n          [5, 9, 7, 8, 5, 3, 5, 4]\n        ]\n      },\n      lineAreaOptions: {\n        low: 0,\n        showArea: true\n      },\n\n      barsData: {\n        labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],\n        series: [\n          [5, 4, 3, 7],\n          [3, 2, 9, 5],\n          [1, 5, 8, 4],\n          [2, 3, 4, 6],\n          [4, 1, 2, 1]\n        ]\n      },\n      barsOptions: {\n        // Default mobile configuration\n        stackBars: true,\n        axisX: {\n          labelInterpolationFnc (value) {\n            return value.split(/\\s+/).map((word) => word[0]).join('')\n          }\n        },\n        axisY: {\n          offset: 20\n        }\n      },\n      barsResponsiveOptions: [\n        // Options override for media > 400px\n        ['screen and (min-width: 400px)', {\n          reverseData: true,\n          horizontalBars: true,\n          axisX: {\n            labelInterpolationFnc: function (n) { return n }\n          },\n          axisY: {\n            offset: 60\n          }\n        }],\n        // Options override for media > 800px\n        ['screen and (min-width: 800px)', {\n          stackBars: false,\n          seriesBarDistance: 10\n        }],\n        // Options override for media > 1000px\n        ['screen and (min-width: 1000px)', {\n          reverseData: false,\n          horizontalBars: false,\n          seriesBarDistance: 15\n        }]\n      ],\n\n      pieData: {\n        series: [5, 3, 4]\n      },\n      pieOptions: {\n        chartPadding: 30,\n        labelOffset: 60,\n        labelDirection: 'explode',\n        labelInterpolationFnc (value) {\n          return value\n        }\n      },\n\n      gaugeData: {\n        series: [20, 10, 30, 40]\n      },\n      gaugeOptions: {\n        donut: true,\n        donutWidth: 60,\n        startAngle: 270,\n        total: 200,\n        showLabel: true\n      },\n\n      donutData: {\n        series: [10, 20, 50, 20, 5, 50, 15],\n        labels: [1, 2, 3, 4, 5, 6, 7]\n      },\n      donutOptions: {\n        donut: true\n      }\n    }\n  },\n\n  computed: {\n    linesData () {\n      return {\n        labels: this.labels,\n        series: this.series\n      }\n    }\n  },\n\n  created () {\n    setInterval(() => {\n      // https://vuejs.org/guide/list.html#Mutation-Methods\n      this.series.unshift(this.series.pop())\n    }, 1597)\n  }\n}\n</script>\n\n<style scoped>\n.lines-bars {\n  height: 240px;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(779)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(550),
  /* template */
  __webpack_require__(723),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-bulma-chartist/src/Chartist.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Chartist.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-264fb3d2", Component.options)
  } else {
    hotAPI.reload("data-v-264fb3d2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 723:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ct-chart"
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-264fb3d2", module.exports)
  }
}

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h4', {
    staticClass: "title"
  }, [_vm._v("LINES")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('chartist', {
    staticClass: "lines-bars",
    attrs: {
      "type": 'Line',
      "data": _vm.linesData,
      "options": _vm.linesOptions
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('chartist', {
    staticClass: "lines-bars",
    attrs: {
      "type": 'Line',
      "data": _vm.lineAreaData,
      "options": _vm.lineAreaOptions
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h4', {
    staticClass: "title"
  }, [_vm._v("BARS")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('chartist', {
    staticClass: "lines-bars",
    attrs: {
      "type": 'Bar',
      "data": _vm.linesData,
      "options": _vm.linesOptions
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('chartist', {
    staticClass: "lines-bars",
    attrs: {
      "type": 'Bar',
      "data": _vm.barsData,
      "options": _vm.barsOptions,
      "responsive-options": _vm.barsResponsiveOptions
    }
  })], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h4', {
    staticClass: "title"
  }, [_vm._v("PIES & DONUTS")]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('chartist', {
    staticClass: "lines-bars",
    attrs: {
      "type": 'Pie',
      "data": _vm.pieData,
      "options": _vm.pieOptions
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('chartist', {
    staticClass: "lines-bars",
    attrs: {
      "type": 'Pie',
      "data": _vm.gaugeData,
      "options": _vm.gaugeOptions
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('chartist', {
    staticClass: "lines-bars",
    attrs: {
      "type": 'Pie',
      "data": _vm.donutData,
      "options": _vm.donutOptions
    }
  })], 1)])])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-76ce04f4", module.exports)
  }
}

/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(629);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("5244fa38", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-264fb3d2\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Chartist.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-264fb3d2\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Chartist.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(661);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("72ab527a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-76ce04f4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Chartist.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-76ce04f4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Chartist.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NoYXJ0cy9DaGFydGlzdC52dWUiLCJ3ZWJwYWNrOi8vL0NoYXJ0aXN0LnZ1ZSIsIndlYnBhY2s6Ly8vQ2hhcnRpc3QudnVlP2FkNWMiLCJ3ZWJwYWNrOi8vLy4vfi9jaGFydGlzdC9kaXN0L2NoYXJ0aXN0LmpzIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLWNoYXJ0aXN0L3NyYy9DaGFydGlzdC52dWU/Mzc1NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NoYXJ0cy9DaGFydGlzdC52dWU/OWNlOSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1jaGFydGlzdC9zcmMvQ2hhcnRpc3QudnVlIiwid2VicGFjazovLy8uL34vdnVlLWJ1bG1hLWNoYXJ0aXN0L3NyYy9DaGFydGlzdC52dWU/ZDE3YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NoYXJ0cy9DaGFydGlzdC52dWU/OTEwOSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1idWxtYS1jaGFydGlzdC9zcmMvQ2hhcnRpc3QudnVlP2Y1MWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jaGFydHMvQ2hhcnRpc3QudnVlP2JhODEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFDQSx1QkFBc0w7O0FBRXRMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQTRHO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7Ozs7OztBQUVBLDRCQUVBOzs7Ozs7Ozs7WUFLQTtlQUNBO2dC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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILENBQUM7QUFDRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZUFBZTtBQUM1QixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxjQUFjO0FBQzNCLGFBQWEsT0FBTztBQUNwQixjQUFjLGNBQWM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQixjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjLGtCQUFrQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxRQUFRO0FBQ3JCLGNBQWMsYUFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsYUFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsYUFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGNBQWMsYUFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGFBQWEsUUFBUTtBQUNyQixjQUFjLGFBQWE7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsYUFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWMsYUFBYTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsYUFBYTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsQ0FBQztBQUNELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxDQUFDO0FBQ0QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxDQUFDO0FBQ0QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0hBQWdIO0FBQ2hIO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxxSEFBcUg7QUFDckg7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFlBQVk7QUFDekIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQixhQUFhLE1BQU07QUFDbkIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLFFBQVE7QUFDUixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILENBQUM7QUFDRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0R0FBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVB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QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ25HQTs7QUFFQTtBQUNBLHFDQUFzSztBQUN0SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQWdHLHFFQUFxRTtBQUNySyx5R0FBeUcscUVBQXFFO0FBQzlLO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBLHFDQUEyTjtBQUMzTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0pBQXNKLG9FQUFvRTtBQUMxTiwrSkFBK0osb0VBQW9FO0FBQ25PO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJqcy8xOC5mZTc2YWNjZjE1NjFiNGEyZmY2YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTc2Y2UwNGY0XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2hhcnRpc3QudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NoYXJ0aXN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzZjZTA0ZjRcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2hhcnRpc3QudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTc2Y2UwNGY0XCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY2hhcnRzL0NoYXJ0aXN0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIENoYXJ0aXN0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03NmNlMDRmNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTc2Y2UwNGY0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY2hhcnRzL0NoYXJ0aXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgiLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjdC1jaGFydFwiPjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDaGFydGlzdCBmcm9tICdjaGFydGlzdCdcblxuY29uc3QgdHlwZXMgPSBbJ0xpbmUnLCAnQmFyJywgJ1BpZSddXG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICBwcm9wczoge1xuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdMaW5lJyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgdmFsaWRhdG9yOiAodmFsdWUpID0+IHR5cGVzLmluY2x1ZGVzKHZhbHVlKVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0OiAoKSA9PiAoe30pXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiAoKSA9PiAoe30pXG4gICAgfSxcbiAgICByZXNwb25zaXZlT3B0aW9uczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiAoW10pXG4gICAgfVxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjaGFydDogbnVsbFxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkICgpIHtcbiAgICB0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0aXN0W3RoaXMudHlwZV0oXG4gICAgICB0aGlzLiRlbCxcbiAgICAgIHRoaXMuZGF0YSxcbiAgICAgIHRoaXMub3B0aW9ucyxcbiAgICAgIHRoaXMucmVzcG9uc2l2ZU9wdGlvbnNcbiAgICApXG4gIH0sXG5cbiAgd2F0Y2g6IHtcbiAgICBkYXRhICh2YWwpIHtcbiAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHRoaXMuY2hhcnQudXBkYXRlKCkpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0ICd+Y2hhcnRpc3QvZGlzdC9zY3NzL2NoYXJ0aXN0JztcblxuLmN0LWNoYXJ0IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDaGFydGlzdC52dWU/NWI5Nzc0ZTUiLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtYW5jZXN0b3JcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudFwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94XCI+XG4gICAgICAgICAgPGg0IGNsYXNzPVwidGl0bGVcIj5MSU5FUzwvaDQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrXCI+XG4gICAgICAgICAgICA8Y2hhcnRpc3QgY2xhc3M9XCJsaW5lcy1iYXJzXCIgOnR5cGU9XCInTGluZSdcIiA6ZGF0YT1cImxpbmVzRGF0YVwiIDpvcHRpb25zPVwibGluZXNPcHRpb25zXCI+PC9jaGFydGlzdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cbiAgICAgICAgICAgIDxjaGFydGlzdCBjbGFzcz1cImxpbmVzLWJhcnNcIiA6dHlwZT1cIidMaW5lJ1wiIDpkYXRhPVwibGluZUFyZWFEYXRhXCIgOm9wdGlvbnM9XCJsaW5lQXJlYU9wdGlvbnNcIj48L2NoYXJ0aXN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudFwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94XCI+XG4gICAgICAgICAgPGg0IGNsYXNzPVwidGl0bGVcIj5CQVJTPC9oND5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cbiAgICAgICAgICAgIDxjaGFydGlzdCBjbGFzcz1cImxpbmVzLWJhcnNcIiA6dHlwZT1cIidCYXInXCIgOmRhdGE9XCJsaW5lc0RhdGFcIiA6b3B0aW9ucz1cImxpbmVzT3B0aW9uc1wiPjwvY2hhcnRpc3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrXCI+XG4gICAgICAgICAgICA8Y2hhcnRpc3QgY2xhc3M9XCJsaW5lcy1iYXJzXCIgOnR5cGU9XCInQmFyJ1wiIDpkYXRhPVwiYmFyc0RhdGFcIiA6b3B0aW9ucz1cImJhcnNPcHRpb25zXCIgOnJlc3BvbnNpdmUtb3B0aW9ucz1cImJhcnNSZXNwb25zaXZlT3B0aW9uc1wiPjwvY2hhcnRpc3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtYW5jZXN0b3JcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudFwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94XCI+XG4gICAgICAgICAgPGg0IGNsYXNzPVwidGl0bGVcIj5QSUVTICYgRE9OVVRTPC9oND5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxjaGFydGlzdCBjbGFzcz1cImxpbmVzLWJhcnNcIiA6dHlwZT1cIidQaWUnXCIgOmRhdGE9XCJwaWVEYXRhXCIgOm9wdGlvbnM9XCJwaWVPcHRpb25zXCI+PC9jaGFydGlzdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8Y2hhcnRpc3QgY2xhc3M9XCJsaW5lcy1iYXJzXCIgOnR5cGU9XCInUGllJ1wiIDpkYXRhPVwiZ2F1Z2VEYXRhXCIgOm9wdGlvbnM9XCJnYXVnZU9wdGlvbnNcIj48L2NoYXJ0aXN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxjaGFydGlzdCBjbGFzcz1cImxpbmVzLWJhcnNcIiA6dHlwZT1cIidQaWUnXCIgOmRhdGE9XCJkb251dERhdGFcIiA6b3B0aW9ucz1cImRvbnV0T3B0aW9uc1wiPjwvY2hhcnRpc3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ2hhcnRpc3QgZnJvbSAndnVlLWJ1bG1hLWNoYXJ0aXN0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBDaGFydGlzdFxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZXJpZXM6IFtcbiAgICAgICAgWzEyLCA5LCA3LCA4LCA1XSxcbiAgICAgICAgWzIsIDEsIDMuNSwgNywgM10sXG4gICAgICAgIFsxLCAzLCA0LCA1LCA2XVxuICAgICAgXSxcbiAgICAgIGxhYmVsczogWydNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5J10sXG4gICAgICBsaW5lc09wdGlvbnM6IHtcbiAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxuICAgICAgICBjaGFydFBhZGRpbmc6IHtcbiAgICAgICAgICByaWdodDogNDBcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgbGluZUFyZWFEYXRhOiB7XG4gICAgICAgIGxhYmVsczogWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdLFxuICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICBbNSwgOSwgNywgOCwgNSwgMywgNSwgNF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGxpbmVBcmVhT3B0aW9uczoge1xuICAgICAgICBsb3c6IDAsXG4gICAgICAgIHNob3dBcmVhOiB0cnVlXG4gICAgICB9LFxuXG4gICAgICBiYXJzRGF0YToge1xuICAgICAgICBsYWJlbHM6IFsnUXVhcnRlciAxJywgJ1F1YXJ0ZXIgMicsICdRdWFydGVyIDMnLCAnUXVhcnRlciA0J10sXG4gICAgICAgIHNlcmllczogW1xuICAgICAgICAgIFs1LCA0LCAzLCA3XSxcbiAgICAgICAgICBbMywgMiwgOSwgNV0sXG4gICAgICAgICAgWzEsIDUsIDgsIDRdLFxuICAgICAgICAgIFsyLCAzLCA0LCA2XSxcbiAgICAgICAgICBbNCwgMSwgMiwgMV1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGJhcnNPcHRpb25zOiB7XG4gICAgICAgIC8vIERlZmF1bHQgbW9iaWxlIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgc3RhY2tCYXJzOiB0cnVlLFxuICAgICAgICBheGlzWDoge1xuICAgICAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYyAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zcGxpdCgvXFxzKy8pLm1hcCgod29yZCkgPT4gd29yZFswXSkuam9pbignJylcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGF4aXNZOiB7XG4gICAgICAgICAgb2Zmc2V0OiAyMFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYmFyc1Jlc3BvbnNpdmVPcHRpb25zOiBbXG4gICAgICAgIC8vIE9wdGlvbnMgb3ZlcnJpZGUgZm9yIG1lZGlhID4gNDAwcHhcbiAgICAgICAgWydzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KScsIHtcbiAgICAgICAgICByZXZlcnNlRGF0YTogdHJ1ZSxcbiAgICAgICAgICBob3Jpem9udGFsQmFyczogdHJ1ZSxcbiAgICAgICAgICBheGlzWDoge1xuICAgICAgICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiBmdW5jdGlvbiAobikgeyByZXR1cm4gbiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBheGlzWToge1xuICAgICAgICAgICAgb2Zmc2V0OiA2MFxuICAgICAgICAgIH1cbiAgICAgICAgfV0sXG4gICAgICAgIC8vIE9wdGlvbnMgb3ZlcnJpZGUgZm9yIG1lZGlhID4gODAwcHhcbiAgICAgICAgWydzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KScsIHtcbiAgICAgICAgICBzdGFja0JhcnM6IGZhbHNlLFxuICAgICAgICAgIHNlcmllc0JhckRpc3RhbmNlOiAxMFxuICAgICAgICB9XSxcbiAgICAgICAgLy8gT3B0aW9ucyBvdmVycmlkZSBmb3IgbWVkaWEgPiAxMDAwcHhcbiAgICAgICAgWydzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCknLCB7XG4gICAgICAgICAgcmV2ZXJzZURhdGE6IGZhbHNlLFxuICAgICAgICAgIGhvcml6b250YWxCYXJzOiBmYWxzZSxcbiAgICAgICAgICBzZXJpZXNCYXJEaXN0YW5jZTogMTVcbiAgICAgICAgfV1cbiAgICAgIF0sXG5cbiAgICAgIHBpZURhdGE6IHtcbiAgICAgICAgc2VyaWVzOiBbNSwgMywgNF1cbiAgICAgIH0sXG4gICAgICBwaWVPcHRpb25zOiB7XG4gICAgICAgIGNoYXJ0UGFkZGluZzogMzAsXG4gICAgICAgIGxhYmVsT2Zmc2V0OiA2MCxcbiAgICAgICAgbGFiZWxEaXJlY3Rpb246ICdleHBsb2RlJyxcbiAgICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jICh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBnYXVnZURhdGE6IHtcbiAgICAgICAgc2VyaWVzOiBbMjAsIDEwLCAzMCwgNDBdXG4gICAgICB9LFxuICAgICAgZ2F1Z2VPcHRpb25zOiB7XG4gICAgICAgIGRvbnV0OiB0cnVlLFxuICAgICAgICBkb251dFdpZHRoOiA2MCxcbiAgICAgICAgc3RhcnRBbmdsZTogMjcwLFxuICAgICAgICB0b3RhbDogMjAwLFxuICAgICAgICBzaG93TGFiZWw6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIGRvbnV0RGF0YToge1xuICAgICAgICBzZXJpZXM6IFsxMCwgMjAsIDUwLCAyMCwgNSwgNTAsIDE1XSxcbiAgICAgICAgbGFiZWxzOiBbMSwgMiwgMywgNCwgNSwgNiwgN11cbiAgICAgIH0sXG4gICAgICBkb251dE9wdGlvbnM6IHtcbiAgICAgICAgZG9udXQ6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBsaW5lc0RhdGEgKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFiZWxzOiB0aGlzLmxhYmVscyxcbiAgICAgICAgc2VyaWVzOiB0aGlzLnNlcmllc1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBjcmVhdGVkICgpIHtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAvLyBodHRwczovL3Z1ZWpzLm9yZy9ndWlkZS9saXN0Lmh0bWwjTXV0YXRpb24tTWV0aG9kc1xuICAgICAgdGhpcy5zZXJpZXMudW5zaGlmdCh0aGlzLnNlcmllcy5wb3AoKSlcbiAgICB9LCAxNTk3KVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5saW5lcy1iYXJzIHtcbiAgaGVpZ2h0OiAyNDBweDtcbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ2hhcnRpc3QudnVlPzU2YTM0NDZkIiwiKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUgdW5sZXNzIGFtZE1vZHVsZUlkIGlzIHNldFxuICAgIGRlZmluZSgnQ2hhcnRpc3QnLCBbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIChyb290WydDaGFydGlzdCddID0gZmFjdG9yeSgpKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdFsnQ2hhcnRpc3QnXSA9IGZhY3RvcnkoKTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cbi8qIENoYXJ0aXN0LmpzIDAuMTAuMFxuICogQ29weXJpZ2h0IMKpIDIwMTYgR2lvbiBLdW56XG4gKiBGcmVlIHRvIHVzZSB1bmRlciBlaXRoZXIgdGhlIFdURlBMIGxpY2Vuc2Ugb3IgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2dpb25rdW56L2NoYXJ0aXN0LWpzL21hc3Rlci9MSUNFTlNFLVdURlBMXG4gKiBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZ2lvbmt1bnovY2hhcnRpc3QtanMvbWFzdGVyL0xJQ0VOU0UtTUlUXG4gKi9cbi8qKlxuICogVGhlIGNvcmUgbW9kdWxlIG9mIENoYXJ0aXN0IHRoYXQgaXMgbWFpbmx5IHByb3ZpZGluZyBzdGF0aWMgZnVuY3Rpb25zIGFuZCBoaWdoZXIgbGV2ZWwgZnVuY3Rpb25zIGZvciBjaGFydCBtb2R1bGVzLlxuICpcbiAqIEBtb2R1bGUgQ2hhcnRpc3QuQ29yZVxuICovXG52YXIgQ2hhcnRpc3QgPSB7XG4gIHZlcnNpb246ICcwLjEwLjAnXG59O1xuXG4oZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsIENoYXJ0aXN0KSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogVGhpcyBvYmplY3QgY29udGFpbnMgYWxsIG5hbWVzcGFjZXMgdXNlZCB3aXRoaW4gQ2hhcnRpc3QuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEB0eXBlIHt7c3ZnOiBzdHJpbmcsIHhtbG5zOiBzdHJpbmcsIHhodG1sOiBzdHJpbmcsIHhsaW5rOiBzdHJpbmcsIGN0OiBzdHJpbmd9fVxuICAgKi9cbiAgQ2hhcnRpc3QubmFtZXNwYWNlcyA9IHtcbiAgICBzdmc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsXG4gICAgeG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zLycsXG4gICAgeGh0bWw6ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJyxcbiAgICB4bGluazogJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLFxuICAgIGN0OiAnaHR0cDovL2dpb25rdW56LmdpdGh1Yi5jb20vY2hhcnRpc3QtanMvY3QnXG4gIH07XG5cbiAgLyoqXG4gICAqIEhlbHBzIHRvIHNpbXBsaWZ5IGZ1bmN0aW9uYWwgc3R5bGUgY29kZVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0geyp9IG4gVGhpcyBleGFjdCB2YWx1ZSB3aWxsIGJlIHJldHVybmVkIGJ5IHRoZSBub29wIGZ1bmN0aW9uXG4gICAqIEByZXR1cm4geyp9IFRoZSBzYW1lIHZhbHVlIHRoYXQgd2FzIHByb3ZpZGVkIHRvIHRoZSBuIHBhcmFtZXRlclxuICAgKi9cbiAgQ2hhcnRpc3Qubm9vcCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIG47XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhLXogZnJvbSBhIG51bWJlciAwIHRvIDI2XG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBuIEEgbnVtYmVyIGZyb20gMCB0byAyNiB0aGF0IHdpbGwgcmVzdWx0IGluIGEgbGV0dGVyIGEtelxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IEEgY2hhcmFjdGVyIGZyb20gYS16IGJhc2VkIG9uIHRoZSBpbnB1dCBudW1iZXIgblxuICAgKi9cbiAgQ2hhcnRpc3QuYWxwaGFOdW1lcmF0ZSA9IGZ1bmN0aW9uIChuKSB7XG4gICAgLy8gTGltaXQgdG8gYS16XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoOTcgKyBuICUgMjYpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTaW1wbGUgcmVjdXJzaXZlIG9iamVjdCBleHRlbmRcbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHBhcmFtIHtPYmplY3R9IHRhcmdldCBUYXJnZXQgb2JqZWN0IHdoZXJlIHRoZSBzb3VyY2Ugd2lsbCBiZSBtZXJnZWQgaW50b1xuICAgKiBAcGFyYW0ge09iamVjdC4uLn0gc291cmNlcyBUaGlzIG9iamVjdCAob2JqZWN0cykgd2lsbCBiZSBtZXJnZWQgaW50byB0YXJnZXQgYW5kIHRoZW4gdGFyZ2V0IGlzIHJldHVybmVkXG4gICAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHRoYXQgaGFzIHRoZSBzYW1lIHJlZmVyZW5jZSBhcyB0YXJnZXQgYnV0IGlzIGV4dGVuZGVkIGFuZCBtZXJnZWQgd2l0aCB0aGUgcHJvcGVydGllcyBvZiBzb3VyY2VcbiAgICovXG4gIENoYXJ0aXN0LmV4dGVuZCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICB2YXIgaSwgc291cmNlLCBzb3VyY2VQcm9wO1xuICAgIHRhcmdldCA9IHRhcmdldCB8fCB7fTtcblxuICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgIHNvdXJjZVByb3AgPSBzb3VyY2VbcHJvcF07XG4gICAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcCA9PT0gJ29iamVjdCcgJiYgc291cmNlUHJvcCAhPT0gbnVsbCAmJiAhKHNvdXJjZVByb3AgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgICAgICB0YXJnZXRbcHJvcF0gPSBDaGFydGlzdC5leHRlbmQodGFyZ2V0W3Byb3BdLCBzb3VyY2VQcm9wKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VQcm9wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9jY3VycmVuY2VzIG9mIHN1YlN0ciBpbiBzdHIgd2l0aCBuZXdTdWJTdHIgYW5kIHJldHVybnMgYSBuZXcgc3RyaW5nLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzdWJTdHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IG5ld1N1YlN0clxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBDaGFydGlzdC5yZXBsYWNlQWxsID0gZnVuY3Rpb24oc3RyLCBzdWJTdHIsIG5ld1N1YlN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKHN1YlN0ciwgJ2cnKSwgbmV3U3ViU3RyKTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydHMgYSBudW1iZXIgdG8gYSBzdHJpbmcgd2l0aCBhIHVuaXQuIElmIGEgc3RyaW5nIGlzIHBhc3NlZCB0aGVuIHRoaXMgd2lsbCBiZSByZXR1cm5lZCB1bm1vZGlmaWVkLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICogQHBhcmFtIHtTdHJpbmd9IHVuaXRcbiAgICogQHJldHVybiB7U3RyaW5nfSBSZXR1cm5zIHRoZSBwYXNzZWQgbnVtYmVyIHZhbHVlIHdpdGggdW5pdC5cbiAgICovXG4gIENoYXJ0aXN0LmVuc3VyZVVuaXQgPSBmdW5jdGlvbih2YWx1ZSwgdW5pdCkge1xuICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgKyB1bml0O1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydHMgYSBudW1iZXIgb3Igc3RyaW5nIHRvIGEgcXVhbnRpdHkgb2JqZWN0LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IGlucHV0XG4gICAqIEByZXR1cm4ge09iamVjdH0gUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgdmFsdWUgYXMgbnVtYmVyIGFuZCB0aGUgdW5pdCBhcyBzdHJpbmcuXG4gICAqL1xuICBDaGFydGlzdC5xdWFudGl0eSA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBtYXRjaCA9ICgvXihcXGQrKVxccyooLiopJC9nKS5leGVjKGlucHV0KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlIDogK21hdGNoWzFdLFxuICAgICAgICB1bml0OiBtYXRjaFsyXSB8fCB1bmRlZmluZWRcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHZhbHVlOiBpbnB1dCB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIGEgd3JhcHBlciBhcm91bmQgZG9jdW1lbnQucXVlcnlTZWxlY3RvciB0aGF0IHdpbGwgcmV0dXJuIHRoZSBxdWVyeSBpZiBpdCdzIGFscmVhZHkgb2YgdHlwZSBOb2RlXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB7U3RyaW5nfE5vZGV9IHF1ZXJ5IFRoZSBxdWVyeSB0byB1c2UgZm9yIHNlbGVjdGluZyBhIE5vZGUgb3IgYSBET00gbm9kZSB0aGF0IHdpbGwgYmUgcmV0dXJuZWQgZGlyZWN0bHlcbiAgICogQHJldHVybiB7Tm9kZX1cbiAgICovXG4gIENoYXJ0aXN0LnF1ZXJ5U2VsZWN0b3IgPSBmdW5jdGlvbihxdWVyeSkge1xuICAgIHJldHVybiBxdWVyeSBpbnN0YW5jZW9mIE5vZGUgPyBxdWVyeSA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGdW5jdGlvbmFsIHN0eWxlIGhlbHBlciB0byBwcm9kdWNlIGFycmF5IHdpdGggZ2l2ZW4gbGVuZ3RoIGluaXRpYWxpemVkIHdpdGggdW5kZWZpbmVkIHZhbHVlc1xuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0gbGVuZ3RoXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKi9cbiAgQ2hhcnRpc3QudGltZXMgPSBmdW5jdGlvbihsZW5ndGgpIHtcbiAgICByZXR1cm4gQXJyYXkuYXBwbHkobnVsbCwgbmV3IEFycmF5KGxlbmd0aCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdW0gaGVscGVyIHRvIGJlIHVzZWQgaW4gcmVkdWNlIGZ1bmN0aW9uc1xuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0gcHJldmlvdXNcbiAgICogQHBhcmFtIGN1cnJlbnRcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIENoYXJ0aXN0LnN1bSA9IGZ1bmN0aW9uKHByZXZpb3VzLCBjdXJyZW50KSB7XG4gICAgcmV0dXJuIHByZXZpb3VzICsgKGN1cnJlbnQgPyBjdXJyZW50IDogMCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIE11bHRpcGx5IGhlbHBlciB0byBiZSB1c2VkIGluIGBBcnJheS5tYXBgIGZvciBtdWx0aXBseWluZyBlYWNoIHZhbHVlIG9mIGFuIGFycmF5IHdpdGggYSBmYWN0b3IuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBmYWN0b3JcbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBGdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIGluIGBBcnJheS5tYXBgIHRvIG11bHRpcGx5IGVhY2ggdmFsdWUgaW4gYW4gYXJyYXlcbiAgICovXG4gIENoYXJ0aXN0Lm1hcE11bHRpcGx5ID0gZnVuY3Rpb24oZmFjdG9yKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG51bSkge1xuICAgICAgcmV0dXJuIG51bSAqIGZhY3RvcjtcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgaGVscGVyIHRvIGJlIHVzZWQgaW4gYEFycmF5Lm1hcGAgZm9yIGFkZGluZyBhIGFkZGVuZCB0byBlYWNoIHZhbHVlIG9mIGFuIGFycmF5LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0ge051bWJlcn0gYWRkZW5kXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gRnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCBpbiBgQXJyYXkubWFwYCB0byBhZGQgYSBhZGRlbmQgdG8gZWFjaCB2YWx1ZSBpbiBhbiBhcnJheVxuICAgKi9cbiAgQ2hhcnRpc3QubWFwQWRkID0gZnVuY3Rpb24oYWRkZW5kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG51bSkge1xuICAgICAgcmV0dXJuIG51bSArIGFkZGVuZDtcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBNYXAgZm9yIG11bHRpIGRpbWVuc2lvbmFsIGFycmF5cyB3aGVyZSB0aGVpciBuZXN0ZWQgYXJyYXlzIHdpbGwgYmUgbWFwcGVkIGluIHNlcmlhbC4gVGhlIG91dHB1dCBhcnJheSB3aWxsIGhhdmUgdGhlIGxlbmd0aCBvZiB0aGUgbGFyZ2VzdCBuZXN0ZWQgYXJyYXkuIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBpcyBjYWxsZWQgd2l0aCB2YXJpYWJsZSBhcmd1bWVudHMgd2hlcmUgZWFjaCBhcmd1bWVudCBpcyB0aGUgbmVzdGVkIGFycmF5IHZhbHVlIChvciB1bmRlZmluZWQgaWYgdGhlcmUgYXJlIG5vIG1vcmUgdmFsdWVzKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHBhcmFtIGFyclxuICAgKiBAcGFyYW0gY2JcbiAgICogQHJldHVybiB7QXJyYXl9XG4gICAqL1xuICBDaGFydGlzdC5zZXJpYWxNYXAgPSBmdW5jdGlvbihhcnIsIGNiKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgICAgICBsZW5ndGggPSBNYXRoLm1heC5hcHBseShudWxsLCBhcnIubWFwKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICByZXR1cm4gZS5sZW5ndGg7XG4gICAgICAgIH0pKTtcblxuICAgIENoYXJ0aXN0LnRpbWVzKGxlbmd0aCkuZm9yRWFjaChmdW5jdGlvbihlLCBpbmRleCkge1xuICAgICAgdmFyIGFyZ3MgPSBhcnIubWFwKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIGVbaW5kZXhdO1xuICAgICAgfSk7XG5cbiAgICAgIHJlc3VsdFtpbmRleF0gPSBjYi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgaGVscGVyIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIHRvIHJvdW5kIHZhbHVlcyB3aXRoIGNlcnRhaW4gcHJlY2lzaW9uIGxldmVsIGFmdGVyIGRlY2ltYWwuIFRoaXMgaXMgdXNlZCB0byBwcmV2ZW50IHJvdW5kaW5nIGVycm9ycyBuZWFyIGZsb2F0IHBvaW50IHByZWNpc2lvbiBsaW1pdC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0aGF0IHNob3VsZCBiZSByb3VuZGVkIHdpdGggcHJlY2lzaW9uXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbZGlnaXRzXSBUaGUgbnVtYmVyIG9mIGRpZ2l0cyBhZnRlciBkZWNpbWFsIHVzZWQgdG8gZG8gdGhlIHJvdW5kaW5nXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFJvdW5kZWQgdmFsdWVcbiAgICovXG4gIENoYXJ0aXN0LnJvdW5kV2l0aFByZWNpc2lvbiA9IGZ1bmN0aW9uKHZhbHVlLCBkaWdpdHMpIHtcbiAgICB2YXIgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIGRpZ2l0cyB8fCBDaGFydGlzdC5wcmVjaXNpb24pO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbiAgfTtcblxuICAvKipcbiAgICogUHJlY2lzaW9uIGxldmVsIHVzZWQgaW50ZXJuYWxseSBpbiBDaGFydGlzdCBmb3Igcm91bmRpbmcuIElmIHlvdSByZXF1aXJlIG1vcmUgZGVjaW1hbCBwbGFjZXMgeW91IGNhbiBpbmNyZWFzZSB0aGlzIG51bWJlci5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIENoYXJ0aXN0LnByZWNpc2lvbiA9IDg7XG5cbiAgLyoqXG4gICAqIEEgbWFwIHdpdGggY2hhcmFjdGVycyB0byBlc2NhcGUgZm9yIHN0cmluZ3MgdG8gYmUgc2FmZWx5IHVzZWQgYXMgYXR0cmlidXRlIHZhbHVlcy5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIENoYXJ0aXN0LmVzY2FwaW5nTWFwID0ge1xuICAgICcmJzogJyZhbXA7JyxcbiAgICAnPCc6ICcmbHQ7JyxcbiAgICAnPic6ICcmZ3Q7JyxcbiAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAnXFwnJzogJyYjMDM5OydcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzZXJpYWxpemVzIGFyYml0cmFyeSBkYXRhIHRvIGEgc3RyaW5nLiBJbiBjYXNlIG9mIGRhdGEgdGhhdCBjYW4ndCBiZSBlYXNpbHkgY29udmVydGVkIHRvIGEgc3RyaW5nLCB0aGlzIGZ1bmN0aW9uIHdpbGwgY3JlYXRlIGEgd3JhcHBlciBvYmplY3QgYW5kIHNlcmlhbGl6ZSB0aGUgZGF0YSB1c2luZyBKU09OLnN0cmluZ2lmeS4gVGhlIG91dGNvbWluZyBzdHJpbmcgd2lsbCBhbHdheXMgYmUgZXNjYXBlZCB1c2luZyBDaGFydGlzdC5lc2NhcGluZ01hcC5cbiAgICogSWYgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQgdGhlIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGltbWVkaWF0ZWx5IHdpdGggbnVsbCBvciB1bmRlZmluZWQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xPYmplY3R9IGRhdGFcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgQ2hhcnRpc3Quc2VyaWFsaXplID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9IGVsc2UgaWYodHlwZW9mIGRhdGEgPT09ICdudW1iZXInKSB7XG4gICAgICBkYXRhID0gJycrZGF0YTtcbiAgICB9IGVsc2UgaWYodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoe2RhdGE6IGRhdGF9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoQ2hhcnRpc3QuZXNjYXBpbmdNYXApLnJlZHVjZShmdW5jdGlvbihyZXN1bHQsIGtleSkge1xuICAgICAgcmV0dXJuIENoYXJ0aXN0LnJlcGxhY2VBbGwocmVzdWx0LCBrZXksIENoYXJ0aXN0LmVzY2FwaW5nTWFwW2tleV0pO1xuICAgIH0sIGRhdGEpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRlLXNlcmlhbGl6ZXMgYSBzdHJpbmcgcHJldmlvdXNseSBzZXJpYWxpemVkIHdpdGggQ2hhcnRpc3Quc2VyaWFsaXplLiBUaGUgc3RyaW5nIHdpbGwgYWx3YXlzIGJlIHVuZXNjYXBlZCB1c2luZyBDaGFydGlzdC5lc2NhcGluZ01hcCBiZWZvcmUgaXQncyByZXR1cm5lZC4gQmFzZWQgb24gdGhlIGlucHV0IHZhbHVlIHRoZSByZXR1cm4gdHlwZSBjYW4gYmUgTnVtYmVyLCBTdHJpbmcgb3IgT2JqZWN0LiBKU09OLnBhcnNlIGlzIHVzZWQgd2l0aCB0cnkgLyBjYXRjaCB0byBzZWUgaWYgdGhlIHVuZXNjYXBlZCBzdHJpbmcgY2FuIGJlIHBhcnNlZCBpbnRvIGFuIE9iamVjdCBhbmQgdGhpcyBPYmplY3Qgd2lsbCBiZSByZXR1cm5lZCBvbiBzdWNjZXNzLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YVxuICAgKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfE9iamVjdH1cbiAgICovXG4gIENoYXJ0aXN0LmRlc2VyaWFsaXplID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmKHR5cGVvZiBkYXRhICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZGF0YSA9IE9iamVjdC5rZXlzKENoYXJ0aXN0LmVzY2FwaW5nTWFwKS5yZWR1Y2UoZnVuY3Rpb24ocmVzdWx0LCBrZXkpIHtcbiAgICAgIHJldHVybiBDaGFydGlzdC5yZXBsYWNlQWxsKHJlc3VsdCwgQ2hhcnRpc3QuZXNjYXBpbmdNYXBba2V5XSwga2V5KTtcbiAgICB9LCBkYXRhKTtcblxuICAgIHRyeSB7XG4gICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIGRhdGEgPSBkYXRhLmRhdGEgIT09IHVuZGVmaW5lZCA/IGRhdGEuZGF0YSA6IGRhdGE7XG4gICAgfSBjYXRjaChlKSB7fVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBvciByZWluaXRpYWxpemUgdGhlIFNWRyBlbGVtZW50IGZvciB0aGUgY2hhcnRcbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHBhcmFtIHtOb2RlfSBjb250YWluZXIgVGhlIGNvbnRhaW5pbmcgRE9NIE5vZGUgb2JqZWN0IHRoYXQgd2lsbCBiZSB1c2VkIHRvIHBsYW50IHRoZSBTVkcgZWxlbWVudFxuICAgKiBAcGFyYW0ge1N0cmluZ30gd2lkdGggU2V0IHRoZSB3aWR0aCBvZiB0aGUgU1ZHIGVsZW1lbnQuIERlZmF1bHQgaXMgMTAwJVxuICAgKiBAcGFyYW0ge1N0cmluZ30gaGVpZ2h0IFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBTVkcgZWxlbWVudC4gRGVmYXVsdCBpcyAxMDAlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgU3BlY2lmeSBhIGNsYXNzIHRvIGJlIGFkZGVkIHRvIHRoZSBTVkcgZWxlbWVudFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjcmVhdGVkL3JlaW5pdGlhbGl6ZWQgU1ZHIGVsZW1lbnRcbiAgICovXG4gIENoYXJ0aXN0LmNyZWF0ZVN2ZyA9IGZ1bmN0aW9uIChjb250YWluZXIsIHdpZHRoLCBoZWlnaHQsIGNsYXNzTmFtZSkge1xuICAgIHZhciBzdmc7XG5cbiAgICB3aWR0aCA9IHdpZHRoIHx8ICcxMDAlJztcbiAgICBoZWlnaHQgPSBoZWlnaHQgfHwgJzEwMCUnO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBwcmV2aW91cyBTVkcgZWxlbWVudCBpbiB0aGUgY29udGFpbmVyIHRoYXQgY29udGFpbnMgdGhlIENoYXJ0aXN0IFhNTCBuYW1lc3BhY2UgYW5kIHJlbW92ZSBpdFxuICAgIC8vIFNpbmNlIHRoZSBET00gQVBJIGRvZXMgbm90IHN1cHBvcnQgbmFtZXNwYWNlcyB3ZSBuZWVkIHRvIG1hbnVhbGx5IHNlYXJjaCB0aGUgcmV0dXJuZWQgbGlzdCBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMtYXBpL1xuICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdzdmcnKSkuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlckNoYXJ0aXN0U3ZnT2JqZWN0cyhzdmcpIHtcbiAgICAgIHJldHVybiBzdmcuZ2V0QXR0cmlidXRlTlMoQ2hhcnRpc3QubmFtZXNwYWNlcy54bWxucywgJ2N0Jyk7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiByZW1vdmVQcmV2aW91c0VsZW1lbnQoc3ZnKSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoc3ZnKTtcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBzdmcgb2JqZWN0IHdpdGggd2lkdGggYW5kIGhlaWdodCBvciB1c2UgMTAwJSBhcyBkZWZhdWx0XG4gICAgc3ZnID0gbmV3IENoYXJ0aXN0LlN2Zygnc3ZnJykuYXR0cih7XG4gICAgICB3aWR0aDogd2lkdGgsXG4gICAgICBoZWlnaHQ6IGhlaWdodFxuICAgIH0pLmFkZENsYXNzKGNsYXNzTmFtZSkuYXR0cih7XG4gICAgICBzdHlsZTogJ3dpZHRoOiAnICsgd2lkdGggKyAnOyBoZWlnaHQ6ICcgKyBoZWlnaHQgKyAnOydcbiAgICB9KTtcblxuICAgIC8vIEFkZCB0aGUgRE9NIG5vZGUgdG8gb3VyIGNvbnRhaW5lclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdmcuX25vZGUpO1xuXG4gICAgcmV0dXJuIHN2ZztcbiAgfTtcblxuICAvKipcbiAgICogRW5zdXJlcyB0aGF0IHRoZSBkYXRhIG9iamVjdCBwYXNzZWQgYXMgc2Vjb25kIGFyZ3VtZW50IHRvIHRoZSBjaGFydHMgaXMgcHJlc2VudCBhbmQgY29ycmVjdGx5IGluaXRpYWxpemVkLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgb2JqZWN0IHRoYXQgaXMgcGFzc2VkIGFzIHNlY29uZCBhcmd1bWVudCB0byB0aGUgY2hhcnRzXG4gICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5vcm1hbGl6ZWQgZGF0YSBvYmplY3RcbiAgICovXG4gIENoYXJ0aXN0Lm5vcm1hbGl6ZURhdGEgPSBmdW5jdGlvbihkYXRhLCByZXZlcnNlLCBtdWx0aSkge1xuICAgIHZhciBsYWJlbENvdW50O1xuICAgIHZhciBvdXRwdXQgPSB7XG4gICAgICByYXc6IGRhdGEsXG4gICAgICBub3JtYWxpemVkOiB7fVxuICAgIH07XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBzaG91bGQgZ2VuZXJhdGUgc29tZSBsYWJlbHMgYmFzZWQgb24gZXhpc3Rpbmcgc2VyaWVzIGRhdGFcbiAgICBvdXRwdXQubm9ybWFsaXplZC5zZXJpZXMgPSBDaGFydGlzdC5nZXREYXRhQXJyYXkoe1xuICAgICAgc2VyaWVzOiBkYXRhLnNlcmllcyB8fCBbXVxuICAgIH0sIHJldmVyc2UsIG11bHRpKTtcblxuICAgIC8vIElmIGFsbCBlbGVtZW50cyBvZiB0aGUgbm9ybWFsaXplZCBkYXRhIGFycmF5IGFyZSBhcnJheXMgd2UncmUgZGVhbGluZyB3aXRoXG4gICAgLy8gbXVsdGkgc2VyaWVzIGRhdGEgYW5kIHdlIG5lZWQgdG8gZmluZCB0aGUgbGFyZ2VzdCBzZXJpZXMgaWYgdGhleSBhcmUgdW4tZXZlblxuICAgIGlmIChvdXRwdXQubm9ybWFsaXplZC5zZXJpZXMuZXZlcnkoZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XG4gICAgICB9KSkge1xuICAgICAgLy8gR2V0dGluZyB0aGUgc2VyaWVzIHdpdGggdGhlIHRoZSBtb3N0IGVsZW1lbnRzXG4gICAgICBsYWJlbENvdW50ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgb3V0cHV0Lm5vcm1hbGl6ZWQuc2VyaWVzLm1hcChmdW5jdGlvbihzZXJpZXMpIHtcbiAgICAgICAgcmV0dXJuIHNlcmllcy5sZW5ndGg7XG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlJ3JlIGRlYWxpbmcgd2l0aCBQaWUgZGF0YSBzbyB3ZSBqdXN0IHRha2UgdGhlIG5vcm1hbGl6ZWQgYXJyYXkgbGVuZ3RoXG4gICAgICBsYWJlbENvdW50ID0gb3V0cHV0Lm5vcm1hbGl6ZWQuc2VyaWVzLmxlbmd0aDtcbiAgICB9XG5cbiAgICBvdXRwdXQubm9ybWFsaXplZC5sYWJlbHMgPSAoZGF0YS5sYWJlbHMgfHwgW10pLnNsaWNlKCk7XG4gICAgLy8gUGFkZGluZyB0aGUgbGFiZWxzIHRvIGxhYmVsQ291bnQgd2l0aCBlbXB0eSBzdHJpbmdzXG4gICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoXG4gICAgICBvdXRwdXQubm9ybWFsaXplZC5sYWJlbHMsXG4gICAgICBDaGFydGlzdC50aW1lcyhNYXRoLm1heCgwLCBsYWJlbENvdW50IC0gb3V0cHV0Lm5vcm1hbGl6ZWQubGFiZWxzLmxlbmd0aCkpLm1hcChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgaWYocmV2ZXJzZSkge1xuICAgICAgQ2hhcnRpc3QucmV2ZXJzZURhdGEob3V0cHV0Lm5vcm1hbGl6ZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBvdXRwdXQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc2FmZWx5IGNoZWNrcyBpZiBhbiBvYmplY3RzIGhhcyBhbiBvd25lZCBwcm9wZXJ0eS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHdoZXJlIHRvIGNoZWNrIGZvciBhIHByb3BlcnR5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSBUaGUgcHJvcGVydHkgbmFtZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyB0cnVlIGlmIHRoZSBvYmplY3Qgb3ducyB0aGUgc3BlY2lmaWVkIHByb3BlcnR5XG4gICAqL1xuICBDaGFydGlzdC5zYWZlSGFzUHJvcGVydHkgPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIHZhbHVlIGlzIGNvbnNpZGVyZWQgYSBob2xlIGluIHRoZSBkYXRhIHNlcmllcy5cbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgY29uc2lkZXJlZCBhIGRhdGEgaG9sZVxuICAgKi9cbiAgQ2hhcnRpc3QuaXNEYXRhSG9sZVZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHxcbiAgICAgIHZhbHVlID09PSB1bmRlZmluZWQgfHxcbiAgICAgICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbHVlKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJldmVyc2VzIHRoZSBzZXJpZXMsIGxhYmVscyBhbmQgc2VyaWVzIGRhdGEgYXJyYXlzLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0gZGF0YVxuICAgKi9cbiAgQ2hhcnRpc3QucmV2ZXJzZURhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgZGF0YS5sYWJlbHMucmV2ZXJzZSgpO1xuICAgIGRhdGEuc2VyaWVzLnJldmVyc2UoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuc2VyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZih0eXBlb2YoZGF0YS5zZXJpZXNbaV0pID09PSAnb2JqZWN0JyAmJiBkYXRhLnNlcmllc1tpXS5kYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGF0YS5zZXJpZXNbaV0uZGF0YS5yZXZlcnNlKCk7XG4gICAgICB9IGVsc2UgaWYoZGF0YS5zZXJpZXNbaV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBkYXRhLnNlcmllc1tpXS5yZXZlcnNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGRhdGEgc2VyaWVzIGludG8gcGxhaW4gYXJyYXlcbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIHNlcmllcyBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgZGF0YSB0byBiZSB2aXN1YWxpemVkIGluIHRoZSBjaGFydFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtyZXZlcnNlXSBJZiB0cnVlIHRoZSB3aG9sZSBkYXRhIGlzIHJldmVyc2VkIGJ5IHRoZSBnZXREYXRhQXJyYXkgY2FsbC4gVGhpcyB3aWxsIG1vZGlmeSB0aGUgZGF0YSBvYmplY3QgcGFzc2VkIGFzIGZpcnN0IHBhcmFtZXRlci4gVGhlIGxhYmVscyBhcyB3ZWxsIGFzIHRoZSBzZXJpZXMgb3JkZXIgaXMgcmV2ZXJzZWQuIFRoZSB3aG9sZSBzZXJpZXMgZGF0YSBhcnJheXMgYXJlIHJldmVyc2VkIHRvby5cbiAgICogQHBhcmFtIHtCb29sZWFufSBbbXVsdGldIENyZWF0ZSBhIG11bHRpIGRpbWVuc2lvbmFsIGFycmF5IGZyb20gYSBzZXJpZXMgZGF0YSBhcnJheSB3aGVyZSBhIHZhbHVlIG9iamVjdCB3aXRoIGB4YCBhbmQgYHlgIHZhbHVlcyB3aWxsIGJlIGNyZWF0ZWQuXG4gICAqIEByZXR1cm4ge0FycmF5fSBBIHBsYWluIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIGRhdGEgdG8gYmUgdmlzdWFsaXplZCBpbiB0aGUgY2hhcnRcbiAgICovXG4gIENoYXJ0aXN0LmdldERhdGFBcnJheSA9IGZ1bmN0aW9uKGRhdGEsIHJldmVyc2UsIG11bHRpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgd2Fsa3MgdGhyb3VnaCBuZXN0ZWQgYXJyYXlzIGFuZCBjb252ZXJ0IHN0cmluZyB2YWx1ZXMgdG8gbnVtYmVycyBhbmQgb2JqZWN0cyB3aXRoIHZhbHVlIHByb3BlcnRpZXNcbiAgICAvLyB0byB2YWx1ZXMuIENoZWNrIHRoZSB0ZXN0cyBpbiBkYXRhIGNvcmUgLT4gZGF0YSBub3JtYWxpemF0aW9uIGZvciBhIGRldGFpbGVkIHNwZWNpZmljYXRpb24gb2YgZXhwZWN0ZWQgdmFsdWVzXG4gICAgZnVuY3Rpb24gcmVjdXJzaXZlQ29udmVydCh2YWx1ZSkge1xuICAgICAgaWYoQ2hhcnRpc3Quc2FmZUhhc1Byb3BlcnR5KHZhbHVlLCAndmFsdWUnKSkge1xuICAgICAgICAvLyBXZSBhcmUgZGVhbGluZyB3aXRoIHZhbHVlIG9iamVjdCBub3RhdGlvbiBzbyB3ZSBuZWVkIHRvIHJlY3Vyc2Ugb24gdmFsdWUgcHJvcGVydHlcbiAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUNvbnZlcnQodmFsdWUudmFsdWUpO1xuICAgICAgfSBlbHNlIGlmKENoYXJ0aXN0LnNhZmVIYXNQcm9wZXJ0eSh2YWx1ZSwgJ2RhdGEnKSkge1xuICAgICAgICAvLyBXZSBhcmUgZGVhbGluZyB3aXRoIHNlcmllcyBvYmplY3Qgbm90YXRpb24gc28gd2UgbmVlZCB0byByZWN1cnNlIG9uIGRhdGEgcHJvcGVydHlcbiAgICAgICAgcmV0dXJuIHJlY3Vyc2l2ZUNvbnZlcnQodmFsdWUuZGF0YSk7XG4gICAgICB9IGVsc2UgaWYodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAvLyBEYXRhIGlzIG9mIHR5cGUgYXJyYXkgc28gd2UgbmVlZCB0byByZWN1cnNlIG9uIHRoZSBzZXJpZXNcbiAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChyZWN1cnNpdmVDb252ZXJ0KTtcbiAgICAgIH0gZWxzZSBpZihDaGFydGlzdC5pc0RhdGFIb2xlVmFsdWUodmFsdWUpKSB7XG4gICAgICAgIC8vIFdlJ3JlIGRlYWxpbmcgd2l0aCBhIGhvbGUgaW4gdGhlIGRhdGEgYW5kIHRoZXJlZm9yZSBuZWVkIHRvIHJldHVybiB1bmRlZmluZWRcbiAgICAgICAgLy8gV2UncmUgYWxzbyByZXR1cm5pbmcgdW5kZWZpbmVkIGZvciBtdWx0aSB2YWx1ZSBvdXRwdXRcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gcHJlcGFyZSBtdWx0aSB2YWx1ZSBvdXRwdXQgKHggYW5kIHkgZGF0YSlcbiAgICAgICAgaWYobXVsdGkpIHtcbiAgICAgICAgICB2YXIgbXVsdGlWYWx1ZSA9IHt9O1xuXG4gICAgICAgICAgLy8gU2luZ2xlIHNlcmllcyB2YWx1ZSBhcnJheXMgYXJlIGFzc3VtZWQgdG8gc3BlY2lmeSB0aGUgWS1BeGlzIHZhbHVlXG4gICAgICAgICAgLy8gRm9yIGV4YW1wbGU6IFsxLCAyXSA9PiBbe3g6IHVuZGVmaW5lZCwgeTogMX0sIHt4OiB1bmRlZmluZWQsIHk6IDJ9XVxuICAgICAgICAgIC8vIElmIG11bHRpIGlzIGEgc3RyaW5nIHRoZW4gaXQncyBhc3N1bWVkIHRoYXQgaXQgc3BlY2lmaWVkIHdoaWNoIGRpbWVuc2lvbiBzaG91bGQgYmUgZmlsbGVkIGFzIGRlZmF1bHRcbiAgICAgICAgICBpZih0eXBlb2YgbXVsdGkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBtdWx0aVZhbHVlW211bHRpXSA9IENoYXJ0aXN0LmdldE51bWJlck9yVW5kZWZpbmVkKHZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbXVsdGlWYWx1ZS55ID0gQ2hhcnRpc3QuZ2V0TnVtYmVyT3JVbmRlZmluZWQodmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG11bHRpVmFsdWUueCA9IHZhbHVlLmhhc093blByb3BlcnR5KCd4JykgPyBDaGFydGlzdC5nZXROdW1iZXJPclVuZGVmaW5lZCh2YWx1ZS54KSA6IG11bHRpVmFsdWUueDtcbiAgICAgICAgICBtdWx0aVZhbHVlLnkgPSB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgneScpID8gQ2hhcnRpc3QuZ2V0TnVtYmVyT3JVbmRlZmluZWQodmFsdWUueSkgOiBtdWx0aVZhbHVlLnk7XG5cbiAgICAgICAgICByZXR1cm4gbXVsdGlWYWx1ZTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFdlIGNhbiByZXR1cm4gc2ltcGxlIGRhdGFcbiAgICAgICAgICByZXR1cm4gQ2hhcnRpc3QuZ2V0TnVtYmVyT3JVbmRlZmluZWQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGEuc2VyaWVzLm1hcChyZWN1cnNpdmVDb252ZXJ0KTtcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVydHMgYSBudW1iZXIgaW50byBhIHBhZGRpbmcgb2JqZWN0LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0ge09iamVjdHxOdW1iZXJ9IHBhZGRpbmdcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtmYWxsYmFja10gVGhpcyB2YWx1ZSBpcyB1c2VkIHRvIGZpbGwgbWlzc2luZyB2YWx1ZXMgaWYgYSBpbmNvbXBsZXRlIHBhZGRpbmcgb2JqZWN0IHdhcyBwYXNzZWRcbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhIHBhZGRpbmcgb2JqZWN0IGNvbnRhaW5pbmcgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0IHByb3BlcnRpZXMgZmlsbGVkIHdpdGggdGhlIHBhZGRpbmcgbnVtYmVyIHBhc3NlZCBpbiBhcyBhcmd1bWVudC4gSWYgdGhlIGFyZ3VtZW50IGlzIHNvbWV0aGluZyBlbHNlIHRoYW4gYSBudW1iZXIgKHByZXN1bWFibHkgYWxyZWFkeSBhIGNvcnJlY3QgcGFkZGluZyBvYmplY3QpIHRoZW4gdGhpcyBhcmd1bWVudCBpcyBkaXJlY3RseSByZXR1cm5lZC5cbiAgICovXG4gIENoYXJ0aXN0Lm5vcm1hbGl6ZVBhZGRpbmcgPSBmdW5jdGlvbihwYWRkaW5nLCBmYWxsYmFjaykge1xuICAgIGZhbGxiYWNrID0gZmFsbGJhY2sgfHwgMDtcblxuICAgIHJldHVybiB0eXBlb2YgcGFkZGluZyA9PT0gJ251bWJlcicgPyB7XG4gICAgICB0b3A6IHBhZGRpbmcsXG4gICAgICByaWdodDogcGFkZGluZyxcbiAgICAgIGJvdHRvbTogcGFkZGluZyxcbiAgICAgIGxlZnQ6IHBhZGRpbmdcbiAgICB9IDoge1xuICAgICAgdG9wOiB0eXBlb2YgcGFkZGluZy50b3AgPT09ICdudW1iZXInID8gcGFkZGluZy50b3AgOiBmYWxsYmFjayxcbiAgICAgIHJpZ2h0OiB0eXBlb2YgcGFkZGluZy5yaWdodCA9PT0gJ251bWJlcicgPyBwYWRkaW5nLnJpZ2h0IDogZmFsbGJhY2ssXG4gICAgICBib3R0b206IHR5cGVvZiBwYWRkaW5nLmJvdHRvbSA9PT0gJ251bWJlcicgPyBwYWRkaW5nLmJvdHRvbSA6IGZhbGxiYWNrLFxuICAgICAgbGVmdDogdHlwZW9mIHBhZGRpbmcubGVmdCA9PT0gJ251bWJlcicgPyBwYWRkaW5nLmxlZnQgOiBmYWxsYmFja1xuICAgIH07XG4gIH07XG5cbiAgQ2hhcnRpc3QuZ2V0TWV0YURhdGEgPSBmdW5jdGlvbihzZXJpZXMsIGluZGV4KSB7XG4gICAgdmFyIHZhbHVlID0gc2VyaWVzLmRhdGEgPyBzZXJpZXMuZGF0YVtpbmRleF0gOiBzZXJpZXNbaW5kZXhdO1xuICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlLm1ldGEgOiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSB0aGUgb3JkZXIgb2YgbWFnbml0dWRlIGZvciB0aGUgY2hhcnQgc2NhbGVcbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSBSYW5nZSBvZiB0aGUgY2hhcnRcbiAgICogQHJldHVybiB7TnVtYmVyfSBUaGUgb3JkZXIgb2YgbWFnbml0dWRlXG4gICAqL1xuICBDaGFydGlzdC5vcmRlck9mTWFnbml0dWRlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5sb2coTWF0aC5hYnModmFsdWUpKSAvIE1hdGguTE4xMCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFByb2plY3QgYSBkYXRhIGxlbmd0aCBpbnRvIHNjcmVlbiBjb29yZGluYXRlcyAocGl4ZWxzKVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0ge09iamVjdH0gYXhpc0xlbmd0aCBUaGUgc3ZnIGVsZW1lbnQgZm9yIHRoZSBjaGFydFxuICAgKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIFNpbmdsZSBkYXRhIHZhbHVlIGZyb20gYSBzZXJpZXMgYXJyYXlcbiAgICogQHBhcmFtIHtPYmplY3R9IGJvdW5kcyBBbGwgdGhlIHZhbHVlcyB0byBzZXQgdGhlIGJvdW5kcyBvZiB0aGUgY2hhcnRcbiAgICogQHJldHVybiB7TnVtYmVyfSBUaGUgcHJvamVjdGVkIGRhdGEgbGVuZ3RoIGluIHBpeGVsc1xuICAgKi9cbiAgQ2hhcnRpc3QucHJvamVjdExlbmd0aCA9IGZ1bmN0aW9uIChheGlzTGVuZ3RoLCBsZW5ndGgsIGJvdW5kcykge1xuICAgIHJldHVybiBsZW5ndGggLyBib3VuZHMucmFuZ2UgKiBheGlzTGVuZ3RoO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGhlaWdodCBvZiB0aGUgYXJlYSBpbiB0aGUgY2hhcnQgZm9yIHRoZSBkYXRhIHNlcmllc1xuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0ge09iamVjdH0gc3ZnIFRoZSBzdmcgZWxlbWVudCBmb3IgdGhlIGNoYXJ0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBPYmplY3QgdGhhdCBjb250YWlucyBhbGwgdGhlIG9wdGlvbmFsIHZhbHVlcyBmb3IgdGhlIGNoYXJ0XG4gICAqIEByZXR1cm4ge051bWJlcn0gVGhlIGhlaWdodCBvZiB0aGUgYXJlYSBpbiB0aGUgY2hhcnQgZm9yIHRoZSBkYXRhIHNlcmllc1xuICAgKi9cbiAgQ2hhcnRpc3QuZ2V0QXZhaWxhYmxlSGVpZ2h0ID0gZnVuY3Rpb24gKHN2Zywgb3B0aW9ucykge1xuICAgIHJldHVybiBNYXRoLm1heCgoQ2hhcnRpc3QucXVhbnRpdHkob3B0aW9ucy5oZWlnaHQpLnZhbHVlIHx8IHN2Zy5oZWlnaHQoKSkgLSAob3B0aW9ucy5jaGFydFBhZGRpbmcudG9wICsgIG9wdGlvbnMuY2hhcnRQYWRkaW5nLmJvdHRvbSkgLSBvcHRpb25zLmF4aXNYLm9mZnNldCwgMCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCBoaWdoZXN0IGFuZCBsb3dlc3QgdmFsdWUgb2YgZGF0YSBhcnJheS4gVGhpcyBBcnJheSBjb250YWlucyB0aGUgZGF0YSB0aGF0IHdpbGwgYmUgdmlzdWFsaXplZCBpbiB0aGUgY2hhcnQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGRhdGEgVGhlIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIGRhdGEgdG8gYmUgdmlzdWFsaXplZCBpbiB0aGUgY2hhcnRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIE9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBjaGFydCBvcHRpb25zXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBkaW1lbnNpb24gQXhpcyBkaW1lbnNpb24gJ3gnIG9yICd5JyB1c2VkIHRvIGFjY2VzcyB0aGUgY29ycmVjdCB2YWx1ZSBhbmQgaGlnaCAvIGxvdyBjb25maWd1cmF0aW9uXG4gICAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIGhpZ2hlc3QgYW5kIGxvd2VzdCB2YWx1ZSB0aGF0IHdpbGwgYmUgdmlzdWFsaXplZCBvbiB0aGUgY2hhcnQuXG4gICAqL1xuICBDaGFydGlzdC5nZXRIaWdoTG93ID0gZnVuY3Rpb24gKGRhdGEsIG9wdGlvbnMsIGRpbWVuc2lvbikge1xuICAgIC8vIFRPRE86IFJlbW92ZSB3b3JrYXJvdW5kIGZvciBkZXByZWNhdGVkIGdsb2JhbCBoaWdoIC8gbG93IGNvbmZpZy4gQXhpcyBoaWdoIC8gbG93IGNvbmZpZ3VyYXRpb24gaXMgcHJlZmVycmVkXG4gICAgb3B0aW9ucyA9IENoYXJ0aXN0LmV4dGVuZCh7fSwgb3B0aW9ucywgZGltZW5zaW9uID8gb3B0aW9uc1snYXhpcycgKyBkaW1lbnNpb24udG9VcHBlckNhc2UoKV0gOiB7fSk7XG5cbiAgICB2YXIgaGlnaExvdyA9IHtcbiAgICAgICAgaGlnaDogb3B0aW9ucy5oaWdoID09PSB1bmRlZmluZWQgPyAtTnVtYmVyLk1BWF9WQUxVRSA6ICtvcHRpb25zLmhpZ2gsXG4gICAgICAgIGxvdzogb3B0aW9ucy5sb3cgPT09IHVuZGVmaW5lZCA/IE51bWJlci5NQVhfVkFMVUUgOiArb3B0aW9ucy5sb3dcbiAgICAgIH07XG4gICAgdmFyIGZpbmRIaWdoID0gb3B0aW9ucy5oaWdoID09PSB1bmRlZmluZWQ7XG4gICAgdmFyIGZpbmRMb3cgPSBvcHRpb25zLmxvdyA9PT0gdW5kZWZpbmVkO1xuXG4gICAgLy8gRnVuY3Rpb24gdG8gcmVjdXJzaXZlbHkgd2FsayB0aHJvdWdoIGFycmF5cyBhbmQgZmluZCBoaWdoZXN0IGFuZCBsb3dlc3QgbnVtYmVyXG4gICAgZnVuY3Rpb24gcmVjdXJzaXZlSGlnaExvdyhkYXRhKSB7XG4gICAgICBpZihkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSBpZihkYXRhIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcmVjdXJzaXZlSGlnaExvdyhkYXRhW2ldKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHZhbHVlID0gZGltZW5zaW9uID8gK2RhdGFbZGltZW5zaW9uXSA6ICtkYXRhO1xuXG4gICAgICAgIGlmIChmaW5kSGlnaCAmJiB2YWx1ZSA+IGhpZ2hMb3cuaGlnaCkge1xuICAgICAgICAgIGhpZ2hMb3cuaGlnaCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpbmRMb3cgJiYgdmFsdWUgPCBoaWdoTG93Lmxvdykge1xuICAgICAgICAgIGhpZ2hMb3cubG93ID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdGFydCB0byBmaW5kIGhpZ2hlc3QgYW5kIGxvd2VzdCBudW1iZXIgcmVjdXJzaXZlbHlcbiAgICBpZihmaW5kSGlnaCB8fCBmaW5kTG93KSB7XG4gICAgICByZWN1cnNpdmVIaWdoTG93KGRhdGEpO1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlcyBvZiBoaWdoIC8gbG93IGJhc2VkIG9uIHJlZmVyZW5jZSB2YWx1ZSwgaXQgd2lsbCBtYWtlIHN1cmUgdGhhdCB0aGUgaW52aXNpYmxlIHJlZmVyZW5jZSB2YWx1ZSBpc1xuICAgIC8vIHVzZWQgdG8gZ2VuZXJhdGUgdGhlIGNoYXJ0LiBUaGlzIGlzIHVzZWZ1bCB3aGVuIHRoZSBjaGFydCBhbHdheXMgbmVlZHMgdG8gY29udGFpbiB0aGUgcG9zaXRpb24gb2YgdGhlXG4gICAgLy8gaW52aXNpYmxlIHJlZmVyZW5jZSB2YWx1ZSBpbiB0aGUgdmlldyBpLmUuIGZvciBiaXBvbGFyIHNjYWxlcy5cbiAgICBpZiAob3B0aW9ucy5yZWZlcmVuY2VWYWx1ZSB8fCBvcHRpb25zLnJlZmVyZW5jZVZhbHVlID09PSAwKSB7XG4gICAgICBoaWdoTG93LmhpZ2ggPSBNYXRoLm1heChvcHRpb25zLnJlZmVyZW5jZVZhbHVlLCBoaWdoTG93LmhpZ2gpO1xuICAgICAgaGlnaExvdy5sb3cgPSBNYXRoLm1pbihvcHRpb25zLnJlZmVyZW5jZVZhbHVlLCBoaWdoTG93Lmxvdyk7XG4gICAgfVxuXG4gICAgLy8gSWYgaGlnaCBhbmQgbG93IGFyZSB0aGUgc2FtZSBiZWNhdXNlIG9mIG1pc2NvbmZpZ3VyYXRpb24gb3IgZmxhdCBkYXRhIChvbmx5IHRoZSBzYW1lIHZhbHVlKSB3ZSBuZWVkXG4gICAgLy8gdG8gc2V0IHRoZSBoaWdoIG9yIGxvdyB0byAwIGRlcGVuZGluZyBvbiB0aGUgcG9sYXJpdHlcbiAgICBpZiAoaGlnaExvdy5oaWdoIDw9IGhpZ2hMb3cubG93KSB7XG4gICAgICAvLyBJZiBib3RoIHZhbHVlcyBhcmUgMCB3ZSBzZXQgaGlnaCB0byAxXG4gICAgICBpZiAoaGlnaExvdy5sb3cgPT09IDApIHtcbiAgICAgICAgaGlnaExvdy5oaWdoID0gMTtcbiAgICAgIH0gZWxzZSBpZiAoaGlnaExvdy5sb3cgPCAwKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgdGhlIHNhbWUgbmVnYXRpdmUgdmFsdWUgZm9yIHRoZSBib3VuZHMgd2Ugc2V0IGJvdW5kcy5oaWdoIHRvIDBcbiAgICAgICAgaGlnaExvdy5oaWdoID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoaGlnaExvdy5oaWdoID4gMCkge1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIHRoZSBzYW1lIHBvc2l0aXZlIHZhbHVlIGZvciB0aGUgYm91bmRzIHdlIHNldCBib3VuZHMubG93IHRvIDBcbiAgICAgICAgaGlnaExvdy5sb3cgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgZGF0YSBhcnJheSB3YXMgZW1wdHksIHZhbHVlcyBhcmUgTnVtYmVyLk1BWF9WQUxVRSBhbmQgLU51bWJlci5NQVhfVkFMVUUuIFNldCBib3VuZHMgdG8gcHJldmVudCBlcnJvcnNcbiAgICAgICAgaGlnaExvdy5oaWdoID0gMTtcbiAgICAgICAgaGlnaExvdy5sb3cgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBoaWdoTG93O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSB2YWx1ZSBjYW4gYmUgc2FmZWx5IGNvZXJjZWQgdG8gYSBudW1iZXIuIFRoaXMgaW5jbHVkZXMgYWxsIHZhbHVlcyBleGNlcHQgbnVsbCB3aGljaCByZXN1bHQgaW4gZmluaXRlIG51bWJlcnMgd2hlbiBjb2VyY2VkLiBUaGlzIGV4Y2x1ZGVzIE5hTiwgc2luY2UgaXQncyBub3QgZmluaXRlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAqL1xuICBDaGFydGlzdC5pc051bWVyaWMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IGZhbHNlIDogaXNGaW5pdGUodmFsdWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgb24gYWxsIGZhbHNleSB2YWx1ZXMgZXhjZXB0IHRoZSBudW1lcmljIHZhbHVlIDAuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIENoYXJ0aXN0LmlzRmFsc2V5QnV0WmVybyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuICF2YWx1ZSAmJiB2YWx1ZSAhPT0gMDtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhIG51bWJlciBpZiB0aGUgcGFzc2VkIHBhcmFtZXRlciBpcyBhIHZhbGlkIG51bWJlciBvciB0aGUgZnVuY3Rpb24gd2lsbCByZXR1cm4gdW5kZWZpbmVkLiBPbiBhbGwgb3RoZXIgdmFsdWVzIHRoYW4gYSB2YWxpZCBudW1iZXIsIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gdW5kZWZpbmVkLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBDaGFydGlzdC5nZXROdW1iZXJPclVuZGVmaW5lZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIENoYXJ0aXN0LmlzTnVtZXJpYyh2YWx1ZSkgPyArdmFsdWUgOiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBwcm92aWRlZCB2YWx1ZSBvYmplY3QgaXMgbXVsdGkgdmFsdWUgKGNvbnRhaW5zIHggb3IgeSBwcm9wZXJ0aWVzKVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICovXG4gIENoYXJ0aXN0LmlzTXVsdGlWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgKCd4JyBpbiB2YWx1ZSB8fCAneScgaW4gdmFsdWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIGEgdmFsdWUgZnJvbSBhIGRpbWVuc2lvbiBgdmFsdWUueGAgb3IgYHZhbHVlLnlgIHdoaWxlIHJldHVybmluZyB2YWx1ZSBkaXJlY3RseSBpZiBpdCdzIGEgdmFsaWQgbnVtZXJpYyB2YWx1ZS4gSWYgdGhlIHZhbHVlIGlzIG5vdCBudW1lcmljIGFuZCBpdCdzIGZhbHNleSB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIGBkZWZhdWx0VmFsdWVgLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHBhcmFtIGRpbWVuc2lvblxuICAgKiBAcGFyYW0gZGVmYXVsdFZhbHVlXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgQ2hhcnRpc3QuZ2V0TXVsdGlWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlLCBkaW1lbnNpb24pIHtcbiAgICBpZihDaGFydGlzdC5pc011bHRpVmFsdWUodmFsdWUpKSB7XG4gICAgICByZXR1cm4gQ2hhcnRpc3QuZ2V0TnVtYmVyT3JVbmRlZmluZWQodmFsdWVbZGltZW5zaW9uIHx8ICd5J10pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gQ2hhcnRpc3QuZ2V0TnVtYmVyT3JVbmRlZmluZWQodmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUG9sbGFyZCBSaG8gQWxnb3JpdGhtIHRvIGZpbmQgc21hbGxlc3QgZmFjdG9yIG9mIGFuIGludGVnZXIgdmFsdWUuIFRoZXJlIGFyZSBtb3JlIGVmZmljaWVudCBhbGdvcml0aG1zIGZvciBmYWN0b3JpemF0aW9uLCBidXQgdGhpcyBvbmUgaXMgcXVpdGUgZWZmaWNpZW50IGFuZCBub3Qgc28gY29tcGxleC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IG51bSBBbiBpbnRlZ2VyIG51bWJlciB3aGVyZSB0aGUgc21hbGxlc3QgZmFjdG9yIHNob3VsZCBiZSBzZWFyY2hlZCBmb3JcbiAgICogQHJldHVybnMge051bWJlcn0gVGhlIHNtYWxsZXN0IGludGVnZXIgZmFjdG9yIG9mIHRoZSBwYXJhbWV0ZXIgbnVtLlxuICAgKi9cbiAgQ2hhcnRpc3QucmhvID0gZnVuY3Rpb24obnVtKSB7XG4gICAgaWYobnVtID09PSAxKSB7XG4gICAgICByZXR1cm4gbnVtO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdjZChwLCBxKSB7XG4gICAgICBpZiAocCAlIHEgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ2NkKHEsIHAgJSBxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmKHgpIHtcbiAgICAgIHJldHVybiB4ICogeCArIDE7XG4gICAgfVxuXG4gICAgdmFyIHgxID0gMiwgeDIgPSAyLCBkaXZpc29yO1xuICAgIGlmIChudW0gJSAyID09PSAwKSB7XG4gICAgICByZXR1cm4gMjtcbiAgICB9XG5cbiAgICBkbyB7XG4gICAgICB4MSA9IGYoeDEpICUgbnVtO1xuICAgICAgeDIgPSBmKGYoeDIpKSAlIG51bTtcbiAgICAgIGRpdmlzb3IgPSBnY2QoTWF0aC5hYnMoeDEgLSB4MiksIG51bSk7XG4gICAgfSB3aGlsZSAoZGl2aXNvciA9PT0gMSk7XG5cbiAgICByZXR1cm4gZGl2aXNvcjtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsY3VsYXRlIGFuZCByZXRyaWV2ZSBhbGwgdGhlIGJvdW5kcyBmb3IgdGhlIGNoYXJ0IGFuZCByZXR1cm4gdGhlbSBpbiBvbmUgYXJyYXlcbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGF4aXNMZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgQXhpcyB1c2VkIGZvclxuICAgKiBAcGFyYW0ge09iamVjdH0gaGlnaExvdyBBbiBvYmplY3QgY29udGFpbmluZyBhIGhpZ2ggYW5kIGxvdyBwcm9wZXJ0eSBpbmRpY2F0aW5nIHRoZSB2YWx1ZSByYW5nZSBvZiB0aGUgY2hhcnQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZU1pblNwYWNlIFRoZSBtaW5pbXVtIHByb2plY3RlZCBsZW5ndGggYSBzdGVwIHNob3VsZCByZXN1bHQgaW5cbiAgICogQHBhcmFtIHtCb29sZWFufSBvbmx5SW50ZWdlclxuICAgKiBAcmV0dXJuIHtPYmplY3R9IEFsbCB0aGUgdmFsdWVzIHRvIHNldCB0aGUgYm91bmRzIG9mIHRoZSBjaGFydFxuICAgKi9cbiAgQ2hhcnRpc3QuZ2V0Qm91bmRzID0gZnVuY3Rpb24gKGF4aXNMZW5ndGgsIGhpZ2hMb3csIHNjYWxlTWluU3BhY2UsIG9ubHlJbnRlZ2VyKSB7XG4gICAgdmFyIGksXG4gICAgICBvcHRpbWl6YXRpb25Db3VudGVyID0gMCxcbiAgICAgIG5ld01pbixcbiAgICAgIG5ld01heCxcbiAgICAgIGJvdW5kcyA9IHtcbiAgICAgICAgaGlnaDogaGlnaExvdy5oaWdoLFxuICAgICAgICBsb3c6IGhpZ2hMb3cubG93XG4gICAgICB9O1xuXG4gICAgYm91bmRzLnZhbHVlUmFuZ2UgPSBib3VuZHMuaGlnaCAtIGJvdW5kcy5sb3c7XG4gICAgYm91bmRzLm9vbSA9IENoYXJ0aXN0Lm9yZGVyT2ZNYWduaXR1ZGUoYm91bmRzLnZhbHVlUmFuZ2UpO1xuICAgIGJvdW5kcy5zdGVwID0gTWF0aC5wb3coMTAsIGJvdW5kcy5vb20pO1xuICAgIGJvdW5kcy5taW4gPSBNYXRoLmZsb29yKGJvdW5kcy5sb3cgLyBib3VuZHMuc3RlcCkgKiBib3VuZHMuc3RlcDtcbiAgICBib3VuZHMubWF4ID0gTWF0aC5jZWlsKGJvdW5kcy5oaWdoIC8gYm91bmRzLnN0ZXApICogYm91bmRzLnN0ZXA7XG4gICAgYm91bmRzLnJhbmdlID0gYm91bmRzLm1heCAtIGJvdW5kcy5taW47XG4gICAgYm91bmRzLm51bWJlck9mU3RlcHMgPSBNYXRoLnJvdW5kKGJvdW5kcy5yYW5nZSAvIGJvdW5kcy5zdGVwKTtcblxuICAgIC8vIE9wdGltaXplIHNjYWxlIHN0ZXAgYnkgY2hlY2tpbmcgaWYgc3ViZGl2aXNpb24gaXMgcG9zc2libGUgYmFzZWQgb24gaG9yaXpvbnRhbEdyaWRNaW5TcGFjZVxuICAgIC8vIElmIHdlIGFyZSBhbHJlYWR5IGJlbG93IHRoZSBzY2FsZU1pblNwYWNlIHZhbHVlIHdlIHdpbGwgc2NhbGUgdXBcbiAgICB2YXIgbGVuZ3RoID0gQ2hhcnRpc3QucHJvamVjdExlbmd0aChheGlzTGVuZ3RoLCBib3VuZHMuc3RlcCwgYm91bmRzKTtcbiAgICB2YXIgc2NhbGVVcCA9IGxlbmd0aCA8IHNjYWxlTWluU3BhY2U7XG4gICAgdmFyIHNtYWxsZXN0RmFjdG9yID0gb25seUludGVnZXIgPyBDaGFydGlzdC5yaG8oYm91bmRzLnJhbmdlKSA6IDA7XG5cbiAgICAvLyBGaXJzdCBjaGVjayBpZiB3ZSBzaG91bGQgb25seSB1c2UgaW50ZWdlciBzdGVwcyBhbmQgaWYgc3RlcCAxIGlzIHN0aWxsIGxhcmdlciB0aGFuIHNjYWxlTWluU3BhY2Ugc28gd2UgY2FuIHVzZSAxXG4gICAgaWYob25seUludGVnZXIgJiYgQ2hhcnRpc3QucHJvamVjdExlbmd0aChheGlzTGVuZ3RoLCAxLCBib3VuZHMpID49IHNjYWxlTWluU3BhY2UpIHtcbiAgICAgIGJvdW5kcy5zdGVwID0gMTtcbiAgICB9IGVsc2UgaWYob25seUludGVnZXIgJiYgc21hbGxlc3RGYWN0b3IgPCBib3VuZHMuc3RlcCAmJiBDaGFydGlzdC5wcm9qZWN0TGVuZ3RoKGF4aXNMZW5ndGgsIHNtYWxsZXN0RmFjdG9yLCBib3VuZHMpID49IHNjYWxlTWluU3BhY2UpIHtcbiAgICAgIC8vIElmIHN0ZXAgMSB3YXMgdG9vIHNtYWxsLCB3ZSBjYW4gdHJ5IHRoZSBzbWFsbGVzdCBmYWN0b3Igb2YgcmFuZ2VcbiAgICAgIC8vIElmIHRoZSBzbWFsbGVzdCBmYWN0b3IgaXMgc21hbGxlciB0aGFuIHRoZSBjdXJyZW50IGJvdW5kcy5zdGVwIGFuZCB0aGUgcHJvamVjdGVkIGxlbmd0aCBvZiBzbWFsbGVzdCBmYWN0b3JcbiAgICAgIC8vIGlzIGxhcmdlciB0aGFuIHRoZSBzY2FsZU1pblNwYWNlIHdlIHNob3VsZCBnbyBmb3IgaXQuXG4gICAgICBib3VuZHMuc3RlcCA9IHNtYWxsZXN0RmFjdG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUcnlpbmcgdG8gZGl2aWRlIG9yIG11bHRpcGx5IGJ5IDIgYW5kIGZpbmQgdGhlIGJlc3Qgc3RlcCB2YWx1ZVxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgaWYgKHNjYWxlVXAgJiYgQ2hhcnRpc3QucHJvamVjdExlbmd0aChheGlzTGVuZ3RoLCBib3VuZHMuc3RlcCwgYm91bmRzKSA8PSBzY2FsZU1pblNwYWNlKSB7XG4gICAgICAgICAgYm91bmRzLnN0ZXAgKj0gMjtcbiAgICAgICAgfSBlbHNlIGlmICghc2NhbGVVcCAmJiBDaGFydGlzdC5wcm9qZWN0TGVuZ3RoKGF4aXNMZW5ndGgsIGJvdW5kcy5zdGVwIC8gMiwgYm91bmRzKSA+PSBzY2FsZU1pblNwYWNlKSB7XG4gICAgICAgICAgYm91bmRzLnN0ZXAgLz0gMjtcbiAgICAgICAgICBpZihvbmx5SW50ZWdlciAmJiBib3VuZHMuc3RlcCAlIDEgIT09IDApIHtcbiAgICAgICAgICAgIGJvdW5kcy5zdGVwICo9IDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZihvcHRpbWl6YXRpb25Db3VudGVyKysgPiAxMDAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeGNlZWRlZCBtYXhpbXVtIG51bWJlciBvZiBpdGVyYXRpb25zIHdoaWxlIG9wdGltaXppbmcgc2NhbGUgc3RlcCEnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBFUFNJTE9OID0gMi4yMjFFLTE2O1xuICAgIGJvdW5kcy5zdGVwID0gTWF0aC5tYXgoYm91bmRzLnN0ZXAsIEVQU0lMT04pO1xuICAgIGZ1bmN0aW9uIHNhZmVJbmNyZW1lbnQodmFsdWUsIGluY3JlbWVudCkge1xuICAgICAgLy8gSWYgaW5jcmVtZW50IGlzIHRvbyBzbWFsbCB1c2UgKj0gKDErRVBTSUxPTikgYXMgYSBzaW1wbGUgbmV4dGFmdGVyXG4gICAgICBpZiAodmFsdWUgPT09ICh2YWx1ZSArPSBpbmNyZW1lbnQpKSB7XG4gICAgICBcdHZhbHVlICo9ICgxICsgKGluY3JlbWVudCA+IDAgPyBFUFNJTE9OIDogLUVQU0lMT04pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBOYXJyb3cgbWluIGFuZCBtYXggYmFzZWQgb24gbmV3IHN0ZXBcbiAgICBuZXdNaW4gPSBib3VuZHMubWluO1xuICAgIG5ld01heCA9IGJvdW5kcy5tYXg7XG4gICAgd2hpbGUgKG5ld01pbiArIGJvdW5kcy5zdGVwIDw9IGJvdW5kcy5sb3cpIHtcbiAgICBcdG5ld01pbiA9IHNhZmVJbmNyZW1lbnQobmV3TWluLCBib3VuZHMuc3RlcCk7XG4gICAgfVxuICAgIHdoaWxlIChuZXdNYXggLSBib3VuZHMuc3RlcCA+PSBib3VuZHMuaGlnaCkge1xuICAgIFx0bmV3TWF4ID0gc2FmZUluY3JlbWVudChuZXdNYXgsIC1ib3VuZHMuc3RlcCk7XG4gICAgfVxuICAgIGJvdW5kcy5taW4gPSBuZXdNaW47XG4gICAgYm91bmRzLm1heCA9IG5ld01heDtcbiAgICBib3VuZHMucmFuZ2UgPSBib3VuZHMubWF4IC0gYm91bmRzLm1pbjtcblxuICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICBmb3IgKGkgPSBib3VuZHMubWluOyBpIDw9IGJvdW5kcy5tYXg7IGkgPSBzYWZlSW5jcmVtZW50KGksIGJvdW5kcy5zdGVwKSkge1xuICAgICAgdmFyIHZhbHVlID0gQ2hhcnRpc3Qucm91bmRXaXRoUHJlY2lzaW9uKGkpO1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYm91bmRzLnZhbHVlcyA9IHZhbHVlcztcbiAgICByZXR1cm4gYm91bmRzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgY2FydGVzaWFuIGNvb3JkaW5hdGVzIG9mIHBvbGFyIGNvb3JkaW5hdGVzXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjZW50ZXJYIFgtYXhpcyBjb29yZGluYXRlcyBvZiBjZW50ZXIgcG9pbnQgb2YgY2lyY2xlIHNlZ21lbnRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNlbnRlclkgWC1heGlzIGNvb3JkaW5hdGVzIG9mIGNlbnRlciBwb2ludCBvZiBjaXJjbGUgc2VnbWVudFxuICAgKiBAcGFyYW0ge051bWJlcn0gcmFkaXVzIFJhZGl1cyBvZiBjaXJjbGUgc2VnbWVudFxuICAgKiBAcGFyYW0ge051bWJlcn0gYW5nbGVJbkRlZ3JlZXMgQW5nbGUgb2YgY2lyY2xlIHNlZ21lbnQgaW4gZGVncmVlc1xuICAgKiBAcmV0dXJuIHt7eDpOdW1iZXIsIHk6TnVtYmVyfX0gQ29vcmRpbmF0ZXMgb2YgcG9pbnQgb24gY2lyY3VtZmVyZW5jZVxuICAgKi9cbiAgQ2hhcnRpc3QucG9sYXJUb0NhcnRlc2lhbiA9IGZ1bmN0aW9uIChjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIGFuZ2xlSW5EZWdyZWVzKSB7XG4gICAgdmFyIGFuZ2xlSW5SYWRpYW5zID0gKGFuZ2xlSW5EZWdyZWVzIC0gOTApICogTWF0aC5QSSAvIDE4MC4wO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IGNlbnRlclggKyAocmFkaXVzICogTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpKSxcbiAgICAgIHk6IGNlbnRlclkgKyAocmFkaXVzICogTWF0aC5zaW4oYW5nbGVJblJhZGlhbnMpKVxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY2hhcnQgZHJhd2luZyByZWN0YW5nbGUgKGFyZWEgd2hlcmUgY2hhcnQgaXMgZHJhd24pIHgxLHkxID0gYm90dG9tIGxlZnQgLyB4Mix5MiA9IHRvcCByaWdodFxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0ge09iamVjdH0gc3ZnIFRoZSBzdmcgZWxlbWVudCBmb3IgdGhlIGNoYXJ0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBPYmplY3QgdGhhdCBjb250YWlucyBhbGwgdGhlIG9wdGlvbmFsIHZhbHVlcyBmb3IgdGhlIGNoYXJ0XG4gICAqIEBwYXJhbSB7TnVtYmVyfSBbZmFsbGJhY2tQYWRkaW5nXSBUaGUgZmFsbGJhY2sgcGFkZGluZyBpZiBwYXJ0aWFsIHBhZGRpbmcgb2JqZWN0cyBhcmUgdXNlZFxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBjaGFydCByZWN0YW5nbGVzIGNvb3JkaW5hdGVzIGluc2lkZSB0aGUgc3ZnIGVsZW1lbnQgcGx1cyB0aGUgcmVjdGFuZ2xlcyBtZWFzdXJlbWVudHNcbiAgICovXG4gIENoYXJ0aXN0LmNyZWF0ZUNoYXJ0UmVjdCA9IGZ1bmN0aW9uIChzdmcsIG9wdGlvbnMsIGZhbGxiYWNrUGFkZGluZykge1xuICAgIHZhciBoYXNBeGlzID0gISEob3B0aW9ucy5heGlzWCB8fCBvcHRpb25zLmF4aXNZKTtcbiAgICB2YXIgeUF4aXNPZmZzZXQgPSBoYXNBeGlzID8gb3B0aW9ucy5heGlzWS5vZmZzZXQgOiAwO1xuICAgIHZhciB4QXhpc09mZnNldCA9IGhhc0F4aXMgPyBvcHRpb25zLmF4aXNYLm9mZnNldCA6IDA7XG4gICAgLy8gSWYgd2lkdGggb3IgaGVpZ2h0IHJlc3VsdHMgaW4gaW52YWxpZCB2YWx1ZSAoaW5jbHVkaW5nIDApIHdlIGZhbGxiYWNrIHRvIHRoZSB1bml0bGVzcyBzZXR0aW5ncyBvciBldmVuIDBcbiAgICB2YXIgd2lkdGggPSBzdmcud2lkdGgoKSB8fCBDaGFydGlzdC5xdWFudGl0eShvcHRpb25zLndpZHRoKS52YWx1ZSB8fCAwO1xuICAgIHZhciBoZWlnaHQgPSBzdmcuaGVpZ2h0KCkgfHwgQ2hhcnRpc3QucXVhbnRpdHkob3B0aW9ucy5oZWlnaHQpLnZhbHVlIHx8IDA7XG4gICAgdmFyIG5vcm1hbGl6ZWRQYWRkaW5nID0gQ2hhcnRpc3Qubm9ybWFsaXplUGFkZGluZyhvcHRpb25zLmNoYXJ0UGFkZGluZywgZmFsbGJhY2tQYWRkaW5nKTtcblxuICAgIC8vIElmIHNldHRpbmdzIHdlcmUgdG8gc21hbGwgdG8gY29wZSB3aXRoIG9mZnNldCAobGVnYWN5KSBhbmQgcGFkZGluZywgd2UnbGwgYWRqdXN0XG4gICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgeUF4aXNPZmZzZXQgKyBub3JtYWxpemVkUGFkZGluZy5sZWZ0ICsgbm9ybWFsaXplZFBhZGRpbmcucmlnaHQpO1xuICAgIGhlaWdodCA9IE1hdGgubWF4KGhlaWdodCwgeEF4aXNPZmZzZXQgKyBub3JtYWxpemVkUGFkZGluZy50b3AgKyBub3JtYWxpemVkUGFkZGluZy5ib3R0b20pO1xuXG4gICAgdmFyIGNoYXJ0UmVjdCA9IHtcbiAgICAgIHBhZGRpbmc6IG5vcm1hbGl6ZWRQYWRkaW5nLFxuICAgICAgd2lkdGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueDIgLSB0aGlzLngxO1xuICAgICAgfSxcbiAgICAgIGhlaWdodDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy55MSAtIHRoaXMueTI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmKGhhc0F4aXMpIHtcbiAgICAgIGlmIChvcHRpb25zLmF4aXNYLnBvc2l0aW9uID09PSAnc3RhcnQnKSB7XG4gICAgICAgIGNoYXJ0UmVjdC55MiA9IG5vcm1hbGl6ZWRQYWRkaW5nLnRvcCArIHhBeGlzT2Zmc2V0O1xuICAgICAgICBjaGFydFJlY3QueTEgPSBNYXRoLm1heChoZWlnaHQgLSBub3JtYWxpemVkUGFkZGluZy5ib3R0b20sIGNoYXJ0UmVjdC55MiArIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hhcnRSZWN0LnkyID0gbm9ybWFsaXplZFBhZGRpbmcudG9wO1xuICAgICAgICBjaGFydFJlY3QueTEgPSBNYXRoLm1heChoZWlnaHQgLSBub3JtYWxpemVkUGFkZGluZy5ib3R0b20gLSB4QXhpc09mZnNldCwgY2hhcnRSZWN0LnkyICsgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25zLmF4aXNZLnBvc2l0aW9uID09PSAnc3RhcnQnKSB7XG4gICAgICAgIGNoYXJ0UmVjdC54MSA9IG5vcm1hbGl6ZWRQYWRkaW5nLmxlZnQgKyB5QXhpc09mZnNldDtcbiAgICAgICAgY2hhcnRSZWN0LngyID0gTWF0aC5tYXgod2lkdGggLSBub3JtYWxpemVkUGFkZGluZy5yaWdodCwgY2hhcnRSZWN0LngxICsgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFydFJlY3QueDEgPSBub3JtYWxpemVkUGFkZGluZy5sZWZ0O1xuICAgICAgICBjaGFydFJlY3QueDIgPSBNYXRoLm1heCh3aWR0aCAtIG5vcm1hbGl6ZWRQYWRkaW5nLnJpZ2h0IC0geUF4aXNPZmZzZXQsIGNoYXJ0UmVjdC54MSArIDEpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjaGFydFJlY3QueDEgPSBub3JtYWxpemVkUGFkZGluZy5sZWZ0O1xuICAgICAgY2hhcnRSZWN0LngyID0gTWF0aC5tYXgod2lkdGggLSBub3JtYWxpemVkUGFkZGluZy5yaWdodCwgY2hhcnRSZWN0LngxICsgMSk7XG4gICAgICBjaGFydFJlY3QueTIgPSBub3JtYWxpemVkUGFkZGluZy50b3A7XG4gICAgICBjaGFydFJlY3QueTEgPSBNYXRoLm1heChoZWlnaHQgLSBub3JtYWxpemVkUGFkZGluZy5ib3R0b20sIGNoYXJ0UmVjdC55MiArIDEpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGFydFJlY3Q7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBncmlkIGxpbmUgYmFzZWQgb24gYSBwcm9qZWN0ZWQgdmFsdWUuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5Db3JlXG4gICAqIEBwYXJhbSBwb3NpdGlvblxuICAgKiBAcGFyYW0gaW5kZXhcbiAgICogQHBhcmFtIGF4aXNcbiAgICogQHBhcmFtIG9mZnNldFxuICAgKiBAcGFyYW0gbGVuZ3RoXG4gICAqIEBwYXJhbSBncm91cFxuICAgKiBAcGFyYW0gY2xhc3Nlc1xuICAgKiBAcGFyYW0gZXZlbnRFbWl0dGVyXG4gICAqL1xuICBDaGFydGlzdC5jcmVhdGVHcmlkID0gZnVuY3Rpb24ocG9zaXRpb24sIGluZGV4LCBheGlzLCBvZmZzZXQsIGxlbmd0aCwgZ3JvdXAsIGNsYXNzZXMsIGV2ZW50RW1pdHRlcikge1xuICAgIHZhciBwb3NpdGlvbmFsRGF0YSA9IHt9O1xuICAgIHBvc2l0aW9uYWxEYXRhW2F4aXMudW5pdHMucG9zICsgJzEnXSA9IHBvc2l0aW9uO1xuICAgIHBvc2l0aW9uYWxEYXRhW2F4aXMudW5pdHMucG9zICsgJzInXSA9IHBvc2l0aW9uO1xuICAgIHBvc2l0aW9uYWxEYXRhW2F4aXMuY291bnRlclVuaXRzLnBvcyArICcxJ10gPSBvZmZzZXQ7XG4gICAgcG9zaXRpb25hbERhdGFbYXhpcy5jb3VudGVyVW5pdHMucG9zICsgJzInXSA9IG9mZnNldCArIGxlbmd0aDtcblxuICAgIHZhciBncmlkRWxlbWVudCA9IGdyb3VwLmVsZW0oJ2xpbmUnLCBwb3NpdGlvbmFsRGF0YSwgY2xhc3Nlcy5qb2luKCcgJykpO1xuXG4gICAgLy8gRXZlbnQgZm9yIGdyaWQgZHJhd1xuICAgIGV2ZW50RW1pdHRlci5lbWl0KCdkcmF3JyxcbiAgICAgIENoYXJ0aXN0LmV4dGVuZCh7XG4gICAgICAgIHR5cGU6ICdncmlkJyxcbiAgICAgICAgYXhpczogYXhpcyxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBncm91cDogZ3JvdXAsXG4gICAgICAgIGVsZW1lbnQ6IGdyaWRFbGVtZW50XG4gICAgICB9LCBwb3NpdGlvbmFsRGF0YSlcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZ3JpZCBiYWNrZ3JvdW5kIHJlY3QgYW5kIGVtaXRzIHRoZSBkcmF3IGV2ZW50LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0gZ3JpZEdyb3VwXG4gICAqIEBwYXJhbSBjaGFydFJlY3RcbiAgICogQHBhcmFtIGNsYXNzTmFtZVxuICAgKiBAcGFyYW0gZXZlbnRFbWl0dGVyXG4gICAqL1xuICBDaGFydGlzdC5jcmVhdGVHcmlkQmFja2dyb3VuZCA9IGZ1bmN0aW9uIChncmlkR3JvdXAsIGNoYXJ0UmVjdCwgY2xhc3NOYW1lLCBldmVudEVtaXR0ZXIpIHtcbiAgICB2YXIgZ3JpZEJhY2tncm91bmQgPSBncmlkR3JvdXAuZWxlbSgncmVjdCcsIHtcbiAgICAgICAgeDogY2hhcnRSZWN0LngxLFxuICAgICAgICB5OiBjaGFydFJlY3QueTIsXG4gICAgICAgIHdpZHRoOiBjaGFydFJlY3Qud2lkdGgoKSxcbiAgICAgICAgaGVpZ2h0OiBjaGFydFJlY3QuaGVpZ2h0KCksXG4gICAgICB9LCBjbGFzc05hbWUsIHRydWUpO1xuXG4gICAgICAvLyBFdmVudCBmb3IgZ3JpZCBiYWNrZ3JvdW5kIGRyYXdcbiAgICAgIGV2ZW50RW1pdHRlci5lbWl0KCdkcmF3Jywge1xuICAgICAgICB0eXBlOiAnZ3JpZEJhY2tncm91bmQnLFxuICAgICAgICBncm91cDogZ3JpZEdyb3VwLFxuICAgICAgICBlbGVtZW50OiBncmlkQmFja2dyb3VuZFxuICAgICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBsYWJlbCBiYXNlZCBvbiBhIHByb2plY3RlZCB2YWx1ZSBhbmQgYW4gYXhpcy5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHBhcmFtIHBvc2l0aW9uXG4gICAqIEBwYXJhbSBsZW5ndGhcbiAgICogQHBhcmFtIGluZGV4XG4gICAqIEBwYXJhbSBsYWJlbHNcbiAgICogQHBhcmFtIGF4aXNcbiAgICogQHBhcmFtIGF4aXNPZmZzZXRcbiAgICogQHBhcmFtIGxhYmVsT2Zmc2V0XG4gICAqIEBwYXJhbSBncm91cFxuICAgKiBAcGFyYW0gY2xhc3Nlc1xuICAgKiBAcGFyYW0gdXNlRm9yZWlnbk9iamVjdFxuICAgKiBAcGFyYW0gZXZlbnRFbWl0dGVyXG4gICAqL1xuICBDaGFydGlzdC5jcmVhdGVMYWJlbCA9IGZ1bmN0aW9uKHBvc2l0aW9uLCBsZW5ndGgsIGluZGV4LCBsYWJlbHMsIGF4aXMsIGF4aXNPZmZzZXQsIGxhYmVsT2Zmc2V0LCBncm91cCwgY2xhc3NlcywgdXNlRm9yZWlnbk9iamVjdCwgZXZlbnRFbWl0dGVyKSB7XG4gICAgdmFyIGxhYmVsRWxlbWVudDtcbiAgICB2YXIgcG9zaXRpb25hbERhdGEgPSB7fTtcblxuICAgIHBvc2l0aW9uYWxEYXRhW2F4aXMudW5pdHMucG9zXSA9IHBvc2l0aW9uICsgbGFiZWxPZmZzZXRbYXhpcy51bml0cy5wb3NdO1xuICAgIHBvc2l0aW9uYWxEYXRhW2F4aXMuY291bnRlclVuaXRzLnBvc10gPSBsYWJlbE9mZnNldFtheGlzLmNvdW50ZXJVbml0cy5wb3NdO1xuICAgIHBvc2l0aW9uYWxEYXRhW2F4aXMudW5pdHMubGVuXSA9IGxlbmd0aDtcbiAgICBwb3NpdGlvbmFsRGF0YVtheGlzLmNvdW50ZXJVbml0cy5sZW5dID0gTWF0aC5tYXgoMCwgYXhpc09mZnNldCAtIDEwKTtcblxuICAgIGlmKHVzZUZvcmVpZ25PYmplY3QpIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gc2V0IHdpZHRoIGFuZCBoZWlnaHQgZXhwbGljaXRseSB0byBweCBhcyBzcGFuIHdpbGwgbm90IGV4cGFuZCB3aXRoIHdpZHRoIGFuZCBoZWlnaHQgYmVpbmdcbiAgICAgIC8vIDEwMCUgaW4gYWxsIGJyb3dzZXJzXG4gICAgICB2YXIgY29udGVudCA9ICc8c3BhbiBjbGFzcz1cIicgKyBjbGFzc2VzLmpvaW4oJyAnKSArICdcIiBzdHlsZT1cIicgK1xuICAgICAgICBheGlzLnVuaXRzLmxlbiArICc6ICcgKyBNYXRoLnJvdW5kKHBvc2l0aW9uYWxEYXRhW2F4aXMudW5pdHMubGVuXSkgKyAncHg7ICcgK1xuICAgICAgICBheGlzLmNvdW50ZXJVbml0cy5sZW4gKyAnOiAnICsgTWF0aC5yb3VuZChwb3NpdGlvbmFsRGF0YVtheGlzLmNvdW50ZXJVbml0cy5sZW5dKSArICdweFwiPicgK1xuICAgICAgICBsYWJlbHNbaW5kZXhdICsgJzwvc3Bhbj4nO1xuXG4gICAgICBsYWJlbEVsZW1lbnQgPSBncm91cC5mb3JlaWduT2JqZWN0KGNvbnRlbnQsIENoYXJ0aXN0LmV4dGVuZCh7XG4gICAgICAgIHN0eWxlOiAnb3ZlcmZsb3c6IHZpc2libGU7J1xuICAgICAgfSwgcG9zaXRpb25hbERhdGEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFiZWxFbGVtZW50ID0gZ3JvdXAuZWxlbSgndGV4dCcsIHBvc2l0aW9uYWxEYXRhLCBjbGFzc2VzLmpvaW4oJyAnKSkudGV4dChsYWJlbHNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBldmVudEVtaXR0ZXIuZW1pdCgnZHJhdycsIENoYXJ0aXN0LmV4dGVuZCh7XG4gICAgICB0eXBlOiAnbGFiZWwnLFxuICAgICAgYXhpczogYXhpcyxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGdyb3VwOiBncm91cCxcbiAgICAgIGVsZW1lbnQ6IGxhYmVsRWxlbWVudCxcbiAgICAgIHRleHQ6IGxhYmVsc1tpbmRleF1cbiAgICB9LCBwb3NpdGlvbmFsRGF0YSkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIZWxwZXIgdG8gcmVhZCBzZXJpZXMgc3BlY2lmaWMgb3B0aW9ucyBmcm9tIG9wdGlvbnMgb2JqZWN0LiBJdCBhdXRvbWF0aWNhbGx5IGZhbGxzIGJhY2sgdG8gdGhlIGdsb2JhbCBvcHRpb24gaWZcbiAgICogdGhlcmUgaXMgbm8gb3B0aW9uIGluIHRoZSBzZXJpZXMgb3B0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHNlcmllcyBTZXJpZXMgb2JqZWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIENoYXJ0aXN0IG9wdGlvbnMgb2JqZWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIG9wdGlvbnMga2V5IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gb2J0YWluIHRoZSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgQ2hhcnRpc3QuZ2V0U2VyaWVzT3B0aW9uID0gZnVuY3Rpb24oc2VyaWVzLCBvcHRpb25zLCBrZXkpIHtcbiAgICBpZihzZXJpZXMubmFtZSAmJiBvcHRpb25zLnNlcmllcyAmJiBvcHRpb25zLnNlcmllc1tzZXJpZXMubmFtZV0pIHtcbiAgICAgIHZhciBzZXJpZXNPcHRpb25zID0gb3B0aW9ucy5zZXJpZXNbc2VyaWVzLm5hbWVdO1xuICAgICAgcmV0dXJuIHNlcmllc09wdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSA/IHNlcmllc09wdGlvbnNba2V5XSA6IG9wdGlvbnNba2V5XTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9wdGlvbnNba2V5XTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFByb3ZpZGVzIG9wdGlvbnMgaGFuZGxpbmcgZnVuY3Rpb25hbGl0eSB3aXRoIGNhbGxiYWNrIGZvciBvcHRpb25zIGNoYW5nZXMgdHJpZ2dlcmVkIGJ5IHJlc3BvbnNpdmUgb3B0aW9ucyBhbmQgbWVkaWEgcXVlcnkgbWF0Y2hlc1xuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBPcHRpb25zIHNldCBieSB1c2VyXG4gICAqIEBwYXJhbSB7QXJyYXl9IHJlc3BvbnNpdmVPcHRpb25zIE9wdGlvbmFsIGZ1bmN0aW9ucyB0byBhZGQgcmVzcG9uc2l2ZSBiZWhhdmlvciB0byBjaGFydFxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRFbWl0dGVyIFRoZSBldmVudCBlbWl0dGVyIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGVtaXQgdGhlIG9wdGlvbnMgY2hhbmdlZCBldmVudHNcbiAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgY29uc29saWRhdGVkIG9wdGlvbnMgb2JqZWN0IGZyb20gdGhlIGRlZmF1bHRzLCBiYXNlIGFuZCBtYXRjaGluZyByZXNwb25zaXZlIG9wdGlvbnNcbiAgICovXG4gIENoYXJ0aXN0Lm9wdGlvbnNQcm92aWRlciA9IGZ1bmN0aW9uIChvcHRpb25zLCByZXNwb25zaXZlT3B0aW9ucywgZXZlbnRFbWl0dGVyKSB7XG4gICAgdmFyIGJhc2VPcHRpb25zID0gQ2hhcnRpc3QuZXh0ZW5kKHt9LCBvcHRpb25zKSxcbiAgICAgIGN1cnJlbnRPcHRpb25zLFxuICAgICAgbWVkaWFRdWVyeUxpc3RlbmVycyA9IFtdLFxuICAgICAgaTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRPcHRpb25zKG1lZGlhRXZlbnQpIHtcbiAgICAgIHZhciBwcmV2aW91c09wdGlvbnMgPSBjdXJyZW50T3B0aW9ucztcbiAgICAgIGN1cnJlbnRPcHRpb25zID0gQ2hhcnRpc3QuZXh0ZW5kKHt9LCBiYXNlT3B0aW9ucyk7XG5cbiAgICAgIGlmIChyZXNwb25zaXZlT3B0aW9ucykge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmVzcG9uc2l2ZU9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEocmVzcG9uc2l2ZU9wdGlvbnNbaV1bMF0pO1xuICAgICAgICAgIGlmIChtcWwubWF0Y2hlcykge1xuICAgICAgICAgICAgY3VycmVudE9wdGlvbnMgPSBDaGFydGlzdC5leHRlbmQoY3VycmVudE9wdGlvbnMsIHJlc3BvbnNpdmVPcHRpb25zW2ldWzFdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoZXZlbnRFbWl0dGVyICYmIG1lZGlhRXZlbnQpIHtcbiAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoJ29wdGlvbnNDaGFuZ2VkJywge1xuICAgICAgICAgIHByZXZpb3VzT3B0aW9uczogcHJldmlvdXNPcHRpb25zLFxuICAgICAgICAgIGN1cnJlbnRPcHRpb25zOiBjdXJyZW50T3B0aW9uc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVNZWRpYVF1ZXJ5TGlzdGVuZXJzKCkge1xuICAgICAgbWVkaWFRdWVyeUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKG1xbCkge1xuICAgICAgICBtcWwucmVtb3ZlTGlzdGVuZXIodXBkYXRlQ3VycmVudE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgICAgdGhyb3cgJ3dpbmRvdy5tYXRjaE1lZGlhIG5vdCBmb3VuZCEgTWFrZSBzdXJlIHlvdVxcJ3JlIHVzaW5nIGEgcG9seWZpbGwuJztcbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNpdmVPcHRpb25zKSB7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCByZXNwb25zaXZlT3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgbXFsID0gd2luZG93Lm1hdGNoTWVkaWEocmVzcG9uc2l2ZU9wdGlvbnNbaV1bMF0pO1xuICAgICAgICBtcWwuYWRkTGlzdGVuZXIodXBkYXRlQ3VycmVudE9wdGlvbnMpO1xuICAgICAgICBtZWRpYVF1ZXJ5TGlzdGVuZXJzLnB1c2gobXFsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gRXhlY3V0ZSBpbml0aWFsbHkgd2l0aG91dCBhbiBldmVudCBhcmd1bWVudCBzbyB3ZSBnZXQgdGhlIGNvcnJlY3Qgb3B0aW9uc1xuICAgIHVwZGF0ZUN1cnJlbnRPcHRpb25zKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVtb3ZlTWVkaWFRdWVyeUxpc3RlbmVyczogcmVtb3ZlTWVkaWFRdWVyeUxpc3RlbmVycyxcbiAgICAgIGdldEN1cnJlbnRPcHRpb25zOiBmdW5jdGlvbiBnZXRDdXJyZW50T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIENoYXJ0aXN0LmV4dGVuZCh7fSwgY3VycmVudE9wdGlvbnMpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cblxuICAvKipcbiAgICogU3BsaXRzIGEgbGlzdCBvZiBjb29yZGluYXRlcyBhbmQgYXNzb2NpYXRlZCB2YWx1ZXMgaW50byBzZWdtZW50cy4gRWFjaCByZXR1cm5lZCBzZWdtZW50IGNvbnRhaW5zIGEgcGF0aENvb3JkaW5hdGVzXG4gICAqIHZhbHVlRGF0YSBwcm9wZXJ0eSBkZXNjcmliaW5nIHRoZSBzZWdtZW50LlxuICAgKlxuICAgKiBXaXRoIHRoZSBkZWZhdWx0IG9wdGlvbnMsIHNlZ21lbnRzIGNvbnNpc3Qgb2YgY29udGlndW91cyBzZXRzIG9mIHBvaW50cyB0aGF0IGRvIG5vdCBoYXZlIGFuIHVuZGVmaW5lZCB2YWx1ZS4gQW55XG4gICAqIHBvaW50cyB3aXRoIHVuZGVmaW5lZCB2YWx1ZXMgYXJlIGRpc2NhcmRlZC5cbiAgICpcbiAgICogKipPcHRpb25zKipcbiAgICogVGhlIGZvbGxvd2luZyBvcHRpb25zIGFyZSB1c2VkIHRvIGRldGVybWluZSBob3cgc2VnbWVudHMgYXJlIGZvcm1lZFxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIHZhciBvcHRpb25zID0ge1xuICAgKiAgIC8vIElmIGZpbGxIb2xlcyBpcyB0cnVlLCB1bmRlZmluZWQgdmFsdWVzIGFyZSBzaW1wbHkgZGlzY2FyZGVkIHdpdGhvdXQgY3JlYXRpbmcgYSBuZXcgc2VnbWVudC4gQXNzdW1pbmcgb3RoZXIgb3B0aW9ucyBhcmUgZGVmYXVsdCwgdGhpcyByZXR1cm5zIHNpbmdsZSBzZWdtZW50LlxuICAgKiAgIGZpbGxIb2xlczogZmFsc2UsXG4gICAqICAgLy8gSWYgaW5jcmVhc2luZ1ggaXMgdHJ1ZSwgdGhlIGNvb3JkaW5hdGVzIGluIGFsbCBzZWdtZW50cyBoYXZlIHN0cmljdGx5IGluY3JlYXNpbmcgeC12YWx1ZXMuXG4gICAqICAgaW5jcmVhc2luZ1g6IGZhbHNlXG4gICAqIH07XG4gICAqIGBgYFxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQ29yZVxuICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoQ29vcmRpbmF0ZXMgTGlzdCBvZiBwb2ludCBjb29yZGluYXRlcyB0byBiZSBzcGxpdCBpbiB0aGUgZm9ybSBbeDEsIHkxLCB4MiwgeTIgLi4uIHhuLCB5bl1cbiAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIExpc3Qgb2YgYXNzb2NpYXRlZCBwb2ludCB2YWx1ZXMgaW4gdGhlIGZvcm0gW3YxLCB2MiAuLiB2bl1cbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBzZXQgYnkgdXNlclxuICAgKiBAcmV0dXJuIHtBcnJheX0gTGlzdCBvZiBzZWdtZW50cywgZWFjaCBjb250YWluaW5nIGEgcGF0aENvb3JkaW5hdGVzIGFuZCB2YWx1ZURhdGEgcHJvcGVydHkuXG4gICAqL1xuICBDaGFydGlzdC5zcGxpdEludG9TZWdtZW50cyA9IGZ1bmN0aW9uKHBhdGhDb29yZGluYXRlcywgdmFsdWVEYXRhLCBvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgaW5jcmVhc2luZ1g6IGZhbHNlLFxuICAgICAgZmlsbEhvbGVzOiBmYWxzZVxuICAgIH07XG5cbiAgICBvcHRpb25zID0gQ2hhcnRpc3QuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICB2YXIgc2VnbWVudHMgPSBbXTtcbiAgICB2YXIgaG9sZSA9IHRydWU7XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgcGF0aENvb3JkaW5hdGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAvLyBJZiB0aGlzIHZhbHVlIGlzIGEgXCJob2xlXCIgd2Ugc2V0IHRoZSBob2xlIGZsYWdcbiAgICAgIGlmKENoYXJ0aXN0LmdldE11bHRpVmFsdWUodmFsdWVEYXRhW2kgLyAyXS52YWx1ZSkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gaWYodmFsdWVEYXRhW2kgLyAyXS52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmKCFvcHRpb25zLmZpbGxIb2xlcykge1xuICAgICAgICAgIGhvbGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZihvcHRpb25zLmluY3JlYXNpbmdYICYmIGkgPj0gMiAmJiBwYXRoQ29vcmRpbmF0ZXNbaV0gPD0gcGF0aENvb3JkaW5hdGVzW2ktMl0pIHtcbiAgICAgICAgICAvLyBYIGlzIG5vdCBpbmNyZWFzaW5nLCBzbyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB3ZSBzdGFydCBhIG5ldyBzZWdtZW50XG4gICAgICAgICAgaG9sZSA9IHRydWU7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIElmIGl0J3MgYSB2YWxpZCB2YWx1ZSB3ZSBuZWVkIHRvIGNoZWNrIGlmIHdlJ3JlIGNvbWluZyBvdXQgb2YgYSBob2xlIGFuZCBjcmVhdGUgYSBuZXcgZW1wdHkgc2VnbWVudFxuICAgICAgICBpZihob2xlKSB7XG4gICAgICAgICAgc2VnbWVudHMucHVzaCh7XG4gICAgICAgICAgICBwYXRoQ29vcmRpbmF0ZXM6IFtdLFxuICAgICAgICAgICAgdmFsdWVEYXRhOiBbXVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIEFzIHdlIGhhdmUgYSB2YWxpZCB2YWx1ZSBub3csIHdlIGFyZSBub3QgaW4gYSBcImhvbGVcIiBhbnltb3JlXG4gICAgICAgICAgaG9sZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWRkIHRvIHRoZSBzZWdtZW50IHBhdGhDb29yZGluYXRlcyBhbmQgdmFsdWVEYXRhXG4gICAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnBhdGhDb29yZGluYXRlcy5wdXNoKHBhdGhDb29yZGluYXRlc1tpXSwgcGF0aENvb3JkaW5hdGVzW2kgKyAxXSk7XG4gICAgICAgIHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdLnZhbHVlRGF0YS5wdXNoKHZhbHVlRGF0YVtpIC8gMl0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzZWdtZW50cztcbiAgfTtcbn0od2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpKTtcbjsvKipcbiAqIENoYXJ0aXN0IHBhdGggaW50ZXJwb2xhdGlvbiBmdW5jdGlvbnMuXG4gKlxuICogQG1vZHVsZSBDaGFydGlzdC5JbnRlcnBvbGF0aW9uXG4gKi9cbi8qIGdsb2JhbCBDaGFydGlzdCAqL1xuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsIENoYXJ0aXN0KSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBDaGFydGlzdC5JbnRlcnBvbGF0aW9uID0ge307XG5cbiAgLyoqXG4gICAqIFRoaXMgaW50ZXJwb2xhdGlvbiBmdW5jdGlvbiBkb2VzIG5vdCBzbW9vdGggdGhlIHBhdGggYW5kIHRoZSByZXN1bHQgaXMgb25seSBjb250YWluaW5nIGxpbmVzIGFuZCBubyBjdXJ2ZXMuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciBjaGFydCA9IG5ldyBDaGFydGlzdC5MaW5lKCcuY3QtY2hhcnQnLCB7XG4gICAqICAgbGFiZWxzOiBbMSwgMiwgMywgNCwgNV0sXG4gICAqICAgc2VyaWVzOiBbWzEsIDIsIDgsIDEsIDddXVxuICAgKiB9LCB7XG4gICAqICAgbGluZVNtb290aDogQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbi5ub25lKHtcbiAgICogICAgIGZpbGxIb2xlczogZmFsc2VcbiAgICogICB9KVxuICAgKiB9KTtcbiAgICpcbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkludGVycG9sYXRpb25cbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqL1xuICBDaGFydGlzdC5JbnRlcnBvbGF0aW9uLm5vbmUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgZmlsbEhvbGVzOiBmYWxzZVxuICAgIH07XG4gICAgb3B0aW9ucyA9IENoYXJ0aXN0LmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBmdW5jdGlvbiBub25lKHBhdGhDb29yZGluYXRlcywgdmFsdWVEYXRhKSB7XG4gICAgICB2YXIgcGF0aCA9IG5ldyBDaGFydGlzdC5TdmcuUGF0aCgpO1xuICAgICAgdmFyIGhvbGUgPSB0cnVlO1xuXG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcGF0aENvb3JkaW5hdGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIHZhciBjdXJyWCA9IHBhdGhDb29yZGluYXRlc1tpXTtcbiAgICAgICAgdmFyIGN1cnJZID0gcGF0aENvb3JkaW5hdGVzW2kgKyAxXTtcbiAgICAgICAgdmFyIGN1cnJEYXRhID0gdmFsdWVEYXRhW2kgLyAyXTtcblxuICAgICAgICBpZihDaGFydGlzdC5nZXRNdWx0aVZhbHVlKGN1cnJEYXRhLnZhbHVlKSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICBpZihob2xlKSB7XG4gICAgICAgICAgICBwYXRoLm1vdmUoY3VyclgsIGN1cnJZLCBmYWxzZSwgY3VyckRhdGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXRoLmxpbmUoY3VyclgsIGN1cnJZLCBmYWxzZSwgY3VyckRhdGEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhvbGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmKCFvcHRpb25zLmZpbGxIb2xlcykge1xuICAgICAgICAgIGhvbGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIFNpbXBsZSBzbW9vdGhpbmcgY3JlYXRlcyBob3Jpem9udGFsIGhhbmRsZXMgdGhhdCBhcmUgcG9zaXRpb25lZCB3aXRoIGEgZnJhY3Rpb24gb2YgdGhlIGxlbmd0aCBiZXR3ZWVuIHR3byBkYXRhIHBvaW50cy4gWW91IGNhbiB1c2UgdGhlIGRpdmlzb3Igb3B0aW9uIHRvIHNwZWNpZnkgdGhlIGFtb3VudCBvZiBzbW9vdGhpbmcuXG4gICAqXG4gICAqIFNpbXBsZSBzbW9vdGhpbmcgY2FuIGJlIHVzZWQgaW5zdGVhZCBvZiBgQ2hhcnRpc3QuU21vb3RoaW5nLmNhcmRpbmFsYCBpZiB5b3UnZCBsaWtlIHRvIGdldCByaWQgb2YgdGhlIGFydGlmYWN0cyBpdCBwcm9kdWNlcyBzb21ldGltZXMuIFNpbXBsZSBzbW9vdGhpbmcgcHJvZHVjZXMgbGVzcyBmbG93aW5nIGxpbmVzIGJ1dCBpcyBhY2N1cmF0ZSBieSBoaXR0aW5nIHRoZSBwb2ludHMgYW5kIGl0IGFsc28gZG9lc24ndCBzd2luZyBiZWxvdyBvciBhYm92ZSB0aGUgZ2l2ZW4gZGF0YSBwb2ludC5cbiAgICpcbiAgICogQWxsIHNtb290aGluZyBmdW5jdGlvbnMgd2l0aGluIENoYXJ0aXN0IGFyZSBmYWN0b3J5IGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBhbiBvcHRpb25zIHBhcmFtZXRlci4gVGhlIHNpbXBsZSBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uIGFjY2VwdHMgb25lIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyIGBkaXZpc29yYCwgYmV0d2VlbiAxIGFuZCDiiJ4sIHdoaWNoIGNvbnRyb2xzIHRoZSBzbW9vdGhpbmcgY2hhcmFjdGVyaXN0aWNzLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgY2hhcnQgPSBuZXcgQ2hhcnRpc3QuTGluZSgnLmN0LWNoYXJ0Jywge1xuICAgKiAgIGxhYmVsczogWzEsIDIsIDMsIDQsIDVdLFxuICAgKiAgIHNlcmllczogW1sxLCAyLCA4LCAxLCA3XV1cbiAgICogfSwge1xuICAgKiAgIGxpbmVTbW9vdGg6IENoYXJ0aXN0LkludGVycG9sYXRpb24uc2ltcGxlKHtcbiAgICogICAgIGRpdmlzb3I6IDIsXG4gICAqICAgICBmaWxsSG9sZXM6IGZhbHNlXG4gICAqICAgfSlcbiAgICogfSk7XG4gICAqXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5JbnRlcnBvbGF0aW9uXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFRoZSBvcHRpb25zIG9mIHRoZSBzaW1wbGUgaW50ZXJwb2xhdGlvbiBmYWN0b3J5IGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICovXG4gIENoYXJ0aXN0LkludGVycG9sYXRpb24uc2ltcGxlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIGRpdmlzb3I6IDIsXG4gICAgICBmaWxsSG9sZXM6IGZhbHNlXG4gICAgfTtcbiAgICBvcHRpb25zID0gQ2hhcnRpc3QuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICB2YXIgZCA9IDEgLyBNYXRoLm1heCgxLCBvcHRpb25zLmRpdmlzb3IpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHNpbXBsZShwYXRoQ29vcmRpbmF0ZXMsIHZhbHVlRGF0YSkge1xuICAgICAgdmFyIHBhdGggPSBuZXcgQ2hhcnRpc3QuU3ZnLlBhdGgoKTtcbiAgICAgIHZhciBwcmV2WCwgcHJldlksIHByZXZEYXRhO1xuXG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcGF0aENvb3JkaW5hdGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIHZhciBjdXJyWCA9IHBhdGhDb29yZGluYXRlc1tpXTtcbiAgICAgICAgdmFyIGN1cnJZID0gcGF0aENvb3JkaW5hdGVzW2kgKyAxXTtcbiAgICAgICAgdmFyIGxlbmd0aCA9IChjdXJyWCAtIHByZXZYKSAqIGQ7XG4gICAgICAgIHZhciBjdXJyRGF0YSA9IHZhbHVlRGF0YVtpIC8gMl07XG5cbiAgICAgICAgaWYoY3VyckRhdGEudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgaWYocHJldkRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGF0aC5tb3ZlKGN1cnJYLCBjdXJyWSwgZmFsc2UsIGN1cnJEYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGF0aC5jdXJ2ZShcbiAgICAgICAgICAgICAgcHJldlggKyBsZW5ndGgsXG4gICAgICAgICAgICAgIHByZXZZLFxuICAgICAgICAgICAgICBjdXJyWCAtIGxlbmd0aCxcbiAgICAgICAgICAgICAgY3VyclksXG4gICAgICAgICAgICAgIGN1cnJYLFxuICAgICAgICAgICAgICBjdXJyWSxcbiAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgIGN1cnJEYXRhXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHByZXZYID0gY3Vyclg7XG4gICAgICAgICAgcHJldlkgPSBjdXJyWTtcbiAgICAgICAgICBwcmV2RGF0YSA9IGN1cnJEYXRhO1xuICAgICAgICB9IGVsc2UgaWYoIW9wdGlvbnMuZmlsbEhvbGVzKSB7XG4gICAgICAgICAgcHJldlggPSBjdXJyWCA9IHByZXZEYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIENhcmRpbmFsIC8gQ2F0bXVsbC1Sb21lIHNwbGluZSBpbnRlcnBvbGF0aW9uIGlzIHRoZSBkZWZhdWx0IHNtb290aGluZyBmdW5jdGlvbiBpbiBDaGFydGlzdC4gSXQgcHJvZHVjZXMgbmljZSByZXN1bHRzIHdoZXJlIHRoZSBzcGxpbmVzIHdpbGwgYWx3YXlzIG1lZXQgdGhlIHBvaW50cy4gSXQgcHJvZHVjZXMgc29tZSBhcnRpZmFjdHMgdGhvdWdoIHdoZW4gZGF0YSB2YWx1ZXMgYXJlIGluY3JlYXNlZCBvciBkZWNyZWFzZWQgcmFwaWRseS4gVGhlIGxpbmUgbWF5IG5vdCBmb2xsb3cgYSB2ZXJ5IGFjY3VyYXRlIHBhdGggYW5kIGlmIHRoZSBsaW5lIHNob3VsZCBiZSBhY2N1cmF0ZSB0aGlzIHNtb290aGluZyBmdW5jdGlvbiBkb2VzIG5vdCBwcm9kdWNlIHRoZSBiZXN0IHJlc3VsdHMuXG4gICAqXG4gICAqIENhcmRpbmFsIHNwbGluZXMgY2FuIG9ubHkgYmUgY3JlYXRlZCBpZiB0aGVyZSBhcmUgbW9yZSB0aGFuIHR3byBkYXRhIHBvaW50cy4gSWYgdGhpcyBpcyBub3QgdGhlIGNhc2UgdGhpcyBzbW9vdGhpbmcgd2lsbCBmYWxsYmFjayB0byBgQ2hhcnRpc3QuU21vb3RoaW5nLm5vbmVgLlxuICAgKlxuICAgKiBBbGwgc21vb3RoaW5nIGZ1bmN0aW9ucyB3aXRoaW4gQ2hhcnRpc3QgYXJlIGZhY3RvcnkgZnVuY3Rpb25zIHRoYXQgYWNjZXB0IGFuIG9wdGlvbnMgcGFyYW1ldGVyLiBUaGUgY2FyZGluYWwgaW50ZXJwb2xhdGlvbiBmdW5jdGlvbiBhY2NlcHRzIG9uZSBjb25maWd1cmF0aW9uIHBhcmFtZXRlciBgdGVuc2lvbmAsIGJldHdlZW4gMCBhbmQgMSwgd2hpY2ggY29udHJvbHMgdGhlIHNtb290aGluZyBpbnRlbnNpdHkuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciBjaGFydCA9IG5ldyBDaGFydGlzdC5MaW5lKCcuY3QtY2hhcnQnLCB7XG4gICAqICAgbGFiZWxzOiBbMSwgMiwgMywgNCwgNV0sXG4gICAqICAgc2VyaWVzOiBbWzEsIDIsIDgsIDEsIDddXVxuICAgKiB9LCB7XG4gICAqICAgbGluZVNtb290aDogQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbi5jYXJkaW5hbCh7XG4gICAqICAgICB0ZW5zaW9uOiAxLFxuICAgKiAgICAgZmlsbEhvbGVzOiBmYWxzZVxuICAgKiAgIH0pXG4gICAqIH0pO1xuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuSW50ZXJwb2xhdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9ucyBvZiB0aGUgY2FyZGluYWwgZmFjdG9yeSBmdW5jdGlvbi5cbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqL1xuICBDaGFydGlzdC5JbnRlcnBvbGF0aW9uLmNhcmRpbmFsID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIHRlbnNpb246IDEsXG4gICAgICBmaWxsSG9sZXM6IGZhbHNlXG4gICAgfTtcblxuICAgIG9wdGlvbnMgPSBDaGFydGlzdC5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgIHZhciB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgb3B0aW9ucy50ZW5zaW9uKSksXG4gICAgICBjID0gMSAtIHQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gY2FyZGluYWwocGF0aENvb3JkaW5hdGVzLCB2YWx1ZURhdGEpIHtcbiAgICAgIC8vIEZpcnN0IHdlIHRyeSB0byBzcGxpdCB0aGUgY29vcmRpbmF0ZXMgaW50byBzZWdtZW50c1xuICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnkgdG8gdHJlYXQgXCJob2xlc1wiIGluIGxpbmUgY2hhcnRzXG4gICAgICB2YXIgc2VnbWVudHMgPSBDaGFydGlzdC5zcGxpdEludG9TZWdtZW50cyhwYXRoQ29vcmRpbmF0ZXMsIHZhbHVlRGF0YSwge1xuICAgICAgICBmaWxsSG9sZXM6IG9wdGlvbnMuZmlsbEhvbGVzXG4gICAgICB9KTtcblxuICAgICAgaWYoIXNlZ21lbnRzLmxlbmd0aCkge1xuICAgICAgICAvLyBJZiB0aGVyZSB3ZXJlIG5vIHNlZ21lbnRzIHJldHVybiAnQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbi5ub25lJ1xuICAgICAgICByZXR1cm4gQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbi5ub25lKCkoW10pO1xuICAgICAgfSBlbHNlIGlmKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gSWYgdGhlIHNwbGl0IHJlc3VsdGVkIGluIG1vcmUgdGhhdCBvbmUgc2VnbWVudCB3ZSBuZWVkIHRvIGludGVycG9sYXRlIGVhY2ggc2VnbWVudCBpbmRpdmlkdWFsbHkgYW5kIGpvaW4gdGhlbVxuICAgICAgICAvLyBhZnRlcndhcmRzIHRvZ2V0aGVyIGludG8gYSBzaW5nbGUgcGF0aC5cbiAgICAgICAgICB2YXIgcGF0aHMgPSBbXTtcbiAgICAgICAgLy8gRm9yIGVhY2ggc2VnbWVudCB3ZSB3aWxsIHJlY3Vyc2UgdGhlIGNhcmRpbmFsIGZ1bmN0aW9uXG4gICAgICAgIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24oc2VnbWVudCkge1xuICAgICAgICAgIHBhdGhzLnB1c2goY2FyZGluYWwoc2VnbWVudC5wYXRoQ29vcmRpbmF0ZXMsIHNlZ21lbnQudmFsdWVEYXRhKSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBKb2luIHRoZSBzZWdtZW50IHBhdGggZGF0YSBpbnRvIGEgc2luZ2xlIHBhdGggYW5kIHJldHVyblxuICAgICAgICByZXR1cm4gQ2hhcnRpc3QuU3ZnLlBhdGguam9pbihwYXRocyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGVyZSB3YXMgb25seSBvbmUgc2VnbWVudCB3ZSBjYW4gcHJvY2VlZCByZWd1bGFybHkgYnkgdXNpbmcgcGF0aENvb3JkaW5hdGVzIGFuZCB2YWx1ZURhdGEgZnJvbSB0aGUgZmlyc3RcbiAgICAgICAgLy8gc2VnbWVudFxuICAgICAgICBwYXRoQ29vcmRpbmF0ZXMgPSBzZWdtZW50c1swXS5wYXRoQ29vcmRpbmF0ZXM7XG4gICAgICAgIHZhbHVlRGF0YSA9IHNlZ21lbnRzWzBdLnZhbHVlRGF0YTtcblxuICAgICAgICAvLyBJZiBsZXNzIHRoYW4gdHdvIHBvaW50cyB3ZSBuZWVkIHRvIGZhbGxiYWNrIHRvIG5vIHNtb290aGluZ1xuICAgICAgICBpZihwYXRoQ29vcmRpbmF0ZXMubGVuZ3RoIDw9IDQpIHtcbiAgICAgICAgICByZXR1cm4gQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbi5ub25lKCkocGF0aENvb3JkaW5hdGVzLCB2YWx1ZURhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhdGggPSBuZXcgQ2hhcnRpc3QuU3ZnLlBhdGgoKS5tb3ZlKHBhdGhDb29yZGluYXRlc1swXSwgcGF0aENvb3JkaW5hdGVzWzFdLCBmYWxzZSwgdmFsdWVEYXRhWzBdKSxcbiAgICAgICAgICB6O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpTGVuID0gcGF0aENvb3JkaW5hdGVzLmxlbmd0aDsgaUxlbiAtIDIgKiAheiA+IGk7IGkgKz0gMikge1xuICAgICAgICAgIHZhciBwID0gW1xuICAgICAgICAgICAge3g6ICtwYXRoQ29vcmRpbmF0ZXNbaSAtIDJdLCB5OiArcGF0aENvb3JkaW5hdGVzW2kgLSAxXX0sXG4gICAgICAgICAgICB7eDogK3BhdGhDb29yZGluYXRlc1tpXSwgeTogK3BhdGhDb29yZGluYXRlc1tpICsgMV19LFxuICAgICAgICAgICAge3g6ICtwYXRoQ29vcmRpbmF0ZXNbaSArIDJdLCB5OiArcGF0aENvb3JkaW5hdGVzW2kgKyAzXX0sXG4gICAgICAgICAgICB7eDogK3BhdGhDb29yZGluYXRlc1tpICsgNF0sIHk6ICtwYXRoQ29vcmRpbmF0ZXNbaSArIDVdfVxuICAgICAgICAgIF07XG4gICAgICAgICAgaWYgKHopIHtcbiAgICAgICAgICAgIGlmICghaSkge1xuICAgICAgICAgICAgICBwWzBdID0ge3g6ICtwYXRoQ29vcmRpbmF0ZXNbaUxlbiAtIDJdLCB5OiArcGF0aENvb3JkaW5hdGVzW2lMZW4gLSAxXX07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlMZW4gLSA0ID09PSBpKSB7XG4gICAgICAgICAgICAgIHBbM10gPSB7eDogK3BhdGhDb29yZGluYXRlc1swXSwgeTogK3BhdGhDb29yZGluYXRlc1sxXX07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlMZW4gLSAyID09PSBpKSB7XG4gICAgICAgICAgICAgIHBbMl0gPSB7eDogK3BhdGhDb29yZGluYXRlc1swXSwgeTogK3BhdGhDb29yZGluYXRlc1sxXX07XG4gICAgICAgICAgICAgIHBbM10gPSB7eDogK3BhdGhDb29yZGluYXRlc1syXSwgeTogK3BhdGhDb29yZGluYXRlc1szXX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpTGVuIC0gNCA9PT0gaSkge1xuICAgICAgICAgICAgICBwWzNdID0gcFsyXTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWkpIHtcbiAgICAgICAgICAgICAgcFswXSA9IHt4OiArcGF0aENvb3JkaW5hdGVzW2ldLCB5OiArcGF0aENvb3JkaW5hdGVzW2kgKyAxXX07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGF0aC5jdXJ2ZShcbiAgICAgICAgICAgICh0ICogKC1wWzBdLnggKyA2ICogcFsxXS54ICsgcFsyXS54KSAvIDYpICsgKGMgKiBwWzJdLngpLFxuICAgICAgICAgICAgKHQgKiAoLXBbMF0ueSArIDYgKiBwWzFdLnkgKyBwWzJdLnkpIC8gNikgKyAoYyAqIHBbMl0ueSksXG4gICAgICAgICAgICAodCAqIChwWzFdLnggKyA2ICogcFsyXS54IC0gcFszXS54KSAvIDYpICsgKGMgKiBwWzJdLngpLFxuICAgICAgICAgICAgKHQgKiAocFsxXS55ICsgNiAqIHBbMl0ueSAtIHBbM10ueSkgLyA2KSArIChjICogcFsyXS55KSxcbiAgICAgICAgICAgIHBbMl0ueCxcbiAgICAgICAgICAgIHBbMl0ueSxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgdmFsdWVEYXRhWyhpICsgMikgLyAyXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBNb25vdG9uZSBDdWJpYyBzcGxpbmUgaW50ZXJwb2xhdGlvbiBwcm9kdWNlcyBhIHNtb290aCBjdXJ2ZSB3aGljaCBwcmVzZXJ2ZXMgbW9ub3RvbmljaXR5LiBVbmxpa2UgY2FyZGluYWwgc3BsaW5lcywgdGhlIGN1cnZlIHdpbGwgbm90IGV4dGVuZCBiZXlvbmQgdGhlIHJhbmdlIG9mIHktdmFsdWVzIG9mIHRoZSBvcmlnaW5hbCBkYXRhIHBvaW50cy5cbiAgICpcbiAgICogTW9ub3RvbmUgQ3ViaWMgc3BsaW5lcyBjYW4gb25seSBiZSBjcmVhdGVkIGlmIHRoZXJlIGFyZSBtb3JlIHRoYW4gdHdvIGRhdGEgcG9pbnRzLiBJZiB0aGlzIGlzIG5vdCB0aGUgY2FzZSB0aGlzIHNtb290aGluZyB3aWxsIGZhbGxiYWNrIHRvIGBDaGFydGlzdC5TbW9vdGhpbmcubm9uZWAuXG4gICAqXG4gICAqIFRoZSB4LXZhbHVlcyBvZiBzdWJzZXF1ZW50IHBvaW50cyBtdXN0IGJlIGluY3JlYXNpbmcgdG8gZml0IGEgTW9ub3RvbmUgQ3ViaWMgc3BsaW5lLiBJZiB0aGlzIGNvbmRpdGlvbiBpcyBub3QgbWV0IGZvciBhIHBhaXIgb2YgYWRqYWNlbnQgcG9pbnRzLCB0aGVuIHRoZXJlIHdpbGwgYmUgYSBicmVhayBpbiB0aGUgY3VydmUgYmV0d2VlbiB0aG9zZSBkYXRhIHBvaW50cy5cbiAgICpcbiAgICogQWxsIHNtb290aGluZyBmdW5jdGlvbnMgd2l0aGluIENoYXJ0aXN0IGFyZSBmYWN0b3J5IGZ1bmN0aW9ucyB0aGF0IGFjY2VwdCBhbiBvcHRpb25zIHBhcmFtZXRlci5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogdmFyIGNoYXJ0ID0gbmV3IENoYXJ0aXN0LkxpbmUoJy5jdC1jaGFydCcsIHtcbiAgICogICBsYWJlbHM6IFsxLCAyLCAzLCA0LCA1XSxcbiAgICogICBzZXJpZXM6IFtbMSwgMiwgOCwgMSwgN11dXG4gICAqIH0sIHtcbiAgICogICBsaW5lU21vb3RoOiBDaGFydGlzdC5JbnRlcnBvbGF0aW9uLm1vbm90b25lQ3ViaWMoe1xuICAgKiAgICAgZmlsbEhvbGVzOiBmYWxzZVxuICAgKiAgIH0pXG4gICAqIH0pO1xuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuSW50ZXJwb2xhdGlvblxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgb3B0aW9ucyBvZiB0aGUgbW9ub3RvbmVDdWJpYyBmYWN0b3J5IGZ1bmN0aW9uLlxuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICovXG4gIENoYXJ0aXN0LkludGVycG9sYXRpb24ubW9ub3RvbmVDdWJpYyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICBmaWxsSG9sZXM6IGZhbHNlXG4gICAgfTtcblxuICAgIG9wdGlvbnMgPSBDaGFydGlzdC5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiBtb25vdG9uZUN1YmljKHBhdGhDb29yZGluYXRlcywgdmFsdWVEYXRhKSB7XG4gICAgICAvLyBGaXJzdCB3ZSB0cnkgdG8gc3BsaXQgdGhlIGNvb3JkaW5hdGVzIGludG8gc2VnbWVudHNcbiAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIHRyZWF0IFwiaG9sZXNcIiBpbiBsaW5lIGNoYXJ0c1xuICAgICAgdmFyIHNlZ21lbnRzID0gQ2hhcnRpc3Quc3BsaXRJbnRvU2VnbWVudHMocGF0aENvb3JkaW5hdGVzLCB2YWx1ZURhdGEsIHtcbiAgICAgICAgZmlsbEhvbGVzOiBvcHRpb25zLmZpbGxIb2xlcyxcbiAgICAgICAgaW5jcmVhc2luZ1g6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBpZighc2VnbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIHdlcmUgbm8gc2VnbWVudHMgcmV0dXJuICdDaGFydGlzdC5JbnRlcnBvbGF0aW9uLm5vbmUnXG4gICAgICAgIHJldHVybiBDaGFydGlzdC5JbnRlcnBvbGF0aW9uLm5vbmUoKShbXSk7XG4gICAgICB9IGVsc2UgaWYoc2VnbWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyBJZiB0aGUgc3BsaXQgcmVzdWx0ZWQgaW4gbW9yZSB0aGF0IG9uZSBzZWdtZW50IHdlIG5lZWQgdG8gaW50ZXJwb2xhdGUgZWFjaCBzZWdtZW50IGluZGl2aWR1YWxseSBhbmQgam9pbiB0aGVtXG4gICAgICAgIC8vIGFmdGVyd2FyZHMgdG9nZXRoZXIgaW50byBhIHNpbmdsZSBwYXRoLlxuICAgICAgICAgIHZhciBwYXRocyA9IFtdO1xuICAgICAgICAvLyBGb3IgZWFjaCBzZWdtZW50IHdlIHdpbGwgcmVjdXJzZSB0aGUgbW9ub3RvbmVDdWJpYyBmbiBmdW5jdGlvblxuICAgICAgICBzZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKHNlZ21lbnQpIHtcbiAgICAgICAgICBwYXRocy5wdXNoKG1vbm90b25lQ3ViaWMoc2VnbWVudC5wYXRoQ29vcmRpbmF0ZXMsIHNlZ21lbnQudmFsdWVEYXRhKSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBKb2luIHRoZSBzZWdtZW50IHBhdGggZGF0YSBpbnRvIGEgc2luZ2xlIHBhdGggYW5kIHJldHVyblxuICAgICAgICByZXR1cm4gQ2hhcnRpc3QuU3ZnLlBhdGguam9pbihwYXRocyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGVyZSB3YXMgb25seSBvbmUgc2VnbWVudCB3ZSBjYW4gcHJvY2VlZCByZWd1bGFybHkgYnkgdXNpbmcgcGF0aENvb3JkaW5hdGVzIGFuZCB2YWx1ZURhdGEgZnJvbSB0aGUgZmlyc3RcbiAgICAgICAgLy8gc2VnbWVudFxuICAgICAgICBwYXRoQ29vcmRpbmF0ZXMgPSBzZWdtZW50c1swXS5wYXRoQ29vcmRpbmF0ZXM7XG4gICAgICAgIHZhbHVlRGF0YSA9IHNlZ21lbnRzWzBdLnZhbHVlRGF0YTtcblxuICAgICAgICAvLyBJZiBsZXNzIHRoYW4gdGhyZWUgcG9pbnRzIHdlIG5lZWQgdG8gZmFsbGJhY2sgdG8gbm8gc21vb3RoaW5nXG4gICAgICAgIGlmKHBhdGhDb29yZGluYXRlcy5sZW5ndGggPD0gNCkge1xuICAgICAgICAgIHJldHVybiBDaGFydGlzdC5JbnRlcnBvbGF0aW9uLm5vbmUoKShwYXRoQ29vcmRpbmF0ZXMsIHZhbHVlRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgeHMgPSBbXSxcbiAgICAgICAgICB5cyA9IFtdLFxuICAgICAgICAgIGksXG4gICAgICAgICAgbiA9IHBhdGhDb29yZGluYXRlcy5sZW5ndGggLyAyLFxuICAgICAgICAgIG1zID0gW10sXG4gICAgICAgICAgZHMgPSBbXSwgZHlzID0gW10sIGR4cyA9IFtdLFxuICAgICAgICAgIHBhdGg7XG5cbiAgICAgICAgLy8gUG9wdWxhdGUgeCBhbmQgeSBjb29yZGluYXRlcyBpbnRvIHNlcGFyYXRlIGFycmF5cywgZm9yIHJlYWRhYmlsaXR5XG5cbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgeHNbaV0gPSBwYXRoQ29vcmRpbmF0ZXNbaSAqIDJdO1xuICAgICAgICAgIHlzW2ldID0gcGF0aENvb3JkaW5hdGVzW2kgKiAyICsgMV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxjdWxhdGUgZGVsdGFzIGFuZCBkZXJpdmF0aXZlXG5cbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgIGR5c1tpXSA9IHlzW2kgKyAxXSAtIHlzW2ldO1xuICAgICAgICAgIGR4c1tpXSA9IHhzW2kgKyAxXSAtIHhzW2ldO1xuICAgICAgICAgIGRzW2ldID0gZHlzW2ldIC8gZHhzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIGRlc2lyZWQgc2xvcGUgKG0pIGF0IGVhY2ggcG9pbnQgdXNpbmcgRnJpdHNjaC1DYXJsc29uIG1ldGhvZFxuICAgICAgICAvLyBTZWU6IGh0dHA6Ly9tYXRoLnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy80NTIxOC9pbXBsZW1lbnRhdGlvbi1vZi1tb25vdG9uZS1jdWJpYy1pbnRlcnBvbGF0aW9uXG5cbiAgICAgICAgbXNbMF0gPSBkc1swXTtcbiAgICAgICAgbXNbbiAtIDFdID0gZHNbbiAtIDJdO1xuXG4gICAgICAgIGZvcihpID0gMTsgaSA8IG4gLSAxOyBpKyspIHtcbiAgICAgICAgICBpZihkc1tpXSA9PT0gMCB8fCBkc1tpIC0gMV0gPT09IDAgfHwgKGRzW2kgLSAxXSA+IDApICE9PSAoZHNbaV0gPiAwKSkge1xuICAgICAgICAgICAgbXNbaV0gPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtc1tpXSA9IDMgKiAoZHhzW2kgLSAxXSArIGR4c1tpXSkgLyAoXG4gICAgICAgICAgICAgICgyICogZHhzW2ldICsgZHhzW2kgLSAxXSkgLyBkc1tpIC0gMV0gK1xuICAgICAgICAgICAgICAoZHhzW2ldICsgMiAqIGR4c1tpIC0gMV0pIC8gZHNbaV0pO1xuXG4gICAgICAgICAgICBpZighaXNGaW5pdGUobXNbaV0pKSB7XG4gICAgICAgICAgICAgIG1zW2ldID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOb3cgYnVpbGQgYSBwYXRoIGZyb20gdGhlIHNsb3Blc1xuXG4gICAgICAgIHBhdGggPSBuZXcgQ2hhcnRpc3QuU3ZnLlBhdGgoKS5tb3ZlKHhzWzBdLCB5c1swXSwgZmFsc2UsIHZhbHVlRGF0YVswXSk7XG5cbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgbiAtIDE7IGkrKykge1xuICAgICAgICAgIHBhdGguY3VydmUoXG4gICAgICAgICAgICAvLyBGaXJzdCBjb250cm9sIHBvaW50XG4gICAgICAgICAgICB4c1tpXSArIGR4c1tpXSAvIDMsXG4gICAgICAgICAgICB5c1tpXSArIG1zW2ldICogZHhzW2ldIC8gMyxcbiAgICAgICAgICAgIC8vIFNlY29uZCBjb250cm9sIHBvaW50XG4gICAgICAgICAgICB4c1tpICsgMV0gLSBkeHNbaV0gLyAzLFxuICAgICAgICAgICAgeXNbaSArIDFdIC0gbXNbaSArIDFdICogZHhzW2ldIC8gMyxcbiAgICAgICAgICAgIC8vIEVuZCBwb2ludFxuICAgICAgICAgICAgeHNbaSArIDFdLFxuICAgICAgICAgICAgeXNbaSArIDFdLFxuXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlRGF0YVtpICsgMV1cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogU3RlcCBpbnRlcnBvbGF0aW9uIHdpbGwgY2F1c2UgdGhlIGxpbmUgY2hhcnQgdG8gbW92ZSBpbiBzdGVwcyByYXRoZXIgdGhhbiBkaWFnb25hbCBvciBzbW9vdGhlZCBsaW5lcy4gVGhpcyBpbnRlcnBvbGF0aW9uIHdpbGwgY3JlYXRlIGFkZGl0aW9uYWwgcG9pbnRzIHRoYXQgd2lsbCBhbHNvIGJlIGRyYXduIHdoZW4gdGhlIGBzaG93UG9pbnRgIG9wdGlvbiBpcyBlbmFibGVkLlxuICAgKlxuICAgKiBBbGwgc21vb3RoaW5nIGZ1bmN0aW9ucyB3aXRoaW4gQ2hhcnRpc3QgYXJlIGZhY3RvcnkgZnVuY3Rpb25zIHRoYXQgYWNjZXB0IGFuIG9wdGlvbnMgcGFyYW1ldGVyLiBUaGUgc3RlcCBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uIGFjY2VwdHMgb25lIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyIGBwb3N0cG9uZWAsIHRoYXQgY2FuIGJlIGB0cnVlYCBvciBgZmFsc2VgLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBgdHJ1ZWAgYW5kIHdpbGwgY2F1c2UgdGhlIHN0ZXAgdG8gb2NjdXIgd2hlcmUgdGhlIHZhbHVlIGFjdHVhbGx5IGNoYW5nZXMuIElmIGEgZGlmZmVyZW50IGJlaGF2aW91ciBpcyBuZWVkZWQgd2hlcmUgdGhlIHN0ZXAgaXMgc2hpZnRlZCB0byB0aGUgbGVmdCBhbmQgaGFwcGVucyBiZWZvcmUgdGhlIGFjdHVhbCB2YWx1ZSwgdGhpcyBvcHRpb24gY2FuIGJlIHNldCB0byBgZmFsc2VgLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgY2hhcnQgPSBuZXcgQ2hhcnRpc3QuTGluZSgnLmN0LWNoYXJ0Jywge1xuICAgKiAgIGxhYmVsczogWzEsIDIsIDMsIDQsIDVdLFxuICAgKiAgIHNlcmllczogW1sxLCAyLCA4LCAxLCA3XV1cbiAgICogfSwge1xuICAgKiAgIGxpbmVTbW9vdGg6IENoYXJ0aXN0LkludGVycG9sYXRpb24uc3RlcCh7XG4gICAqICAgICBwb3N0cG9uZTogdHJ1ZSxcbiAgICogICAgIGZpbGxIb2xlczogZmFsc2VcbiAgICogICB9KVxuICAgKiB9KTtcbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkludGVycG9sYXRpb25cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgKi9cbiAgQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbi5zdGVwID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIHBvc3Rwb25lOiB0cnVlLFxuICAgICAgZmlsbEhvbGVzOiBmYWxzZVxuICAgIH07XG5cbiAgICBvcHRpb25zID0gQ2hhcnRpc3QuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gc3RlcChwYXRoQ29vcmRpbmF0ZXMsIHZhbHVlRGF0YSkge1xuICAgICAgdmFyIHBhdGggPSBuZXcgQ2hhcnRpc3QuU3ZnLlBhdGgoKTtcblxuICAgICAgdmFyIHByZXZYLCBwcmV2WSwgcHJldkRhdGE7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aENvb3JkaW5hdGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgIHZhciBjdXJyWCA9IHBhdGhDb29yZGluYXRlc1tpXTtcbiAgICAgICAgdmFyIGN1cnJZID0gcGF0aENvb3JkaW5hdGVzW2kgKyAxXTtcbiAgICAgICAgdmFyIGN1cnJEYXRhID0gdmFsdWVEYXRhW2kgLyAyXTtcblxuICAgICAgICAvLyBJZiB0aGUgY3VycmVudCBwb2ludCBpcyBhbHNvIG5vdCBhIGhvbGUgd2UgY2FuIGRyYXcgdGhlIHN0ZXAgbGluZXNcbiAgICAgICAgaWYoY3VyckRhdGEudmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmKHByZXZEYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBhdGgubW92ZShjdXJyWCwgY3VyclksIGZhbHNlLCBjdXJyRGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKG9wdGlvbnMucG9zdHBvbmUpIHtcbiAgICAgICAgICAgICAgLy8gSWYgcG9zdHBvbmVkIHdlIHNob3VsZCBkcmF3IHRoZSBzdGVwIGxpbmUgd2l0aCB0aGUgdmFsdWUgb2YgdGhlIHByZXZpb3VzIHZhbHVlXG4gICAgICAgICAgICAgIHBhdGgubGluZShjdXJyWCwgcHJldlksIGZhbHNlLCBwcmV2RGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBJZiBub3QgcG9zdHBvbmVkIHdlIHNob3VsZCBkcmF3IHRoZSBzdGVwIGxpbmUgd2l0aCB0aGUgdmFsdWUgb2YgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgICAgICAgcGF0aC5saW5lKHByZXZYLCBjdXJyWSwgZmFsc2UsIGN1cnJEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExpbmUgdG8gdGhlIGFjdHVhbCBwb2ludCAodGhpcyBzaG91bGQgb25seSBiZSBhIFktQXhpcyBtb3ZlbWVudFxuICAgICAgICAgICAgcGF0aC5saW5lKGN1cnJYLCBjdXJyWSwgZmFsc2UsIGN1cnJEYXRhKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwcmV2WCA9IGN1cnJYO1xuICAgICAgICAgIHByZXZZID0gY3Vyclk7XG4gICAgICAgICAgcHJldkRhdGEgPSBjdXJyRGF0YTtcbiAgICAgICAgfSBlbHNlIGlmKCFvcHRpb25zLmZpbGxIb2xlcykge1xuICAgICAgICAgIHByZXZYID0gcHJldlkgPSBwcmV2RGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xuICB9O1xuXG59KHdpbmRvdywgZG9jdW1lbnQsIENoYXJ0aXN0KSk7XG47LyoqXG4gKiBBIHZlcnkgYmFzaWMgZXZlbnQgbW9kdWxlIHRoYXQgaGVscHMgdG8gZ2VuZXJhdGUgYW5kIGNhdGNoIGV2ZW50cy5cbiAqXG4gKiBAbW9kdWxlIENoYXJ0aXN0LkV2ZW50XG4gKi9cbi8qIGdsb2JhbCBDaGFydGlzdCAqL1xuKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgQ2hhcnRpc3QuRXZlbnRFbWl0dGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVycyA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogQWRkIGFuIGV2ZW50IGhhbmRsZXIgZm9yIGEgc3BlY2lmaWMgZXZlbnRcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDaGFydGlzdC5FdmVudFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgQSBldmVudCBoYW5kbGVyIGZ1bmN0aW9uXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkRXZlbnRIYW5kbGVyKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyc1tldmVudF0gPSBoYW5kbGVyc1tldmVudF0gfHwgW107XG4gICAgICBoYW5kbGVyc1tldmVudF0ucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlciBvZiBhIHNwZWNpZmljIGV2ZW50IG5hbWUgb3IgcmVtb3ZlIGFsbCBldmVudCBoYW5kbGVycyBmb3IgYSBzcGVjaWZpYyBldmVudC5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDaGFydGlzdC5FdmVudFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZSB3aGVyZSBhIHNwZWNpZmljIG9yIGFsbCBoYW5kbGVycyBzaG91bGQgYmUgcmVtb3ZlZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtoYW5kbGVyXSBBbiBvcHRpb25hbCBldmVudCBoYW5kbGVyIGZ1bmN0aW9uLiBJZiBzcGVjaWZpZWQgb25seSB0aGlzIHNwZWNpZmljIGhhbmRsZXIgd2lsbCBiZSByZW1vdmVkIGFuZCBvdGhlcndpc2UgYWxsIGhhbmRsZXJzIGFyZSByZW1vdmVkLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50SGFuZGxlcihldmVudCwgaGFuZGxlcikge1xuICAgICAgLy8gT25seSBkbyBzb21ldGhpbmcgaWYgdGhlcmUgYXJlIGV2ZW50IGhhbmRsZXJzIHdpdGggdGhpcyBuYW1lIGV4aXN0aW5nXG4gICAgICBpZihoYW5kbGVyc1tldmVudF0pIHtcbiAgICAgICAgLy8gSWYgaGFuZGxlciBpcyBzZXQgd2Ugd2lsbCBsb29rIGZvciBhIHNwZWNpZmljIGhhbmRsZXIgYW5kIG9ubHkgcmVtb3ZlIHRoaXNcbiAgICAgICAgaWYoaGFuZGxlcikge1xuICAgICAgICAgIGhhbmRsZXJzW2V2ZW50XS5zcGxpY2UoaGFuZGxlcnNbZXZlbnRdLmluZGV4T2YoaGFuZGxlciksIDEpO1xuICAgICAgICAgIGlmKGhhbmRsZXJzW2V2ZW50XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSBoYW5kbGVyc1tldmVudF07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIElmIG5vIGhhbmRsZXIgaXMgc3BlY2lmaWVkIHdlIHJlbW92ZSBhbGwgaGFuZGxlcnMgZm9yIHRoaXMgZXZlbnRcbiAgICAgICAgICBkZWxldGUgaGFuZGxlcnNbZXZlbnRdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIHRoaXMgZnVuY3Rpb24gdG8gZW1pdCBhbiBldmVudC4gQWxsIGhhbmRsZXJzIHRoYXQgYXJlIGxpc3RlbmluZyBmb3IgdGhpcyBldmVudCB3aWxsIGJlIHRyaWdnZXJlZCB3aXRoIHRoZSBkYXRhIHBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDaGFydGlzdC5FdmVudFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZSB0aGF0IHNob3VsZCBiZSB0cmlnZ2VyZWRcbiAgICAgKiBAcGFyYW0geyp9IGRhdGEgQXJiaXRyYXJ5IGRhdGEgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgZXZlbnQgaGFuZGxlciBjYWxsYmFjayBmdW5jdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBlbWl0KGV2ZW50LCBkYXRhKSB7XG4gICAgICAvLyBPbmx5IGRvIHNvbWV0aGluZyBpZiB0aGVyZSBhcmUgZXZlbnQgaGFuZGxlcnMgd2l0aCB0aGlzIG5hbWUgZXhpc3RpbmdcbiAgICAgIGlmKGhhbmRsZXJzW2V2ZW50XSkge1xuICAgICAgICBoYW5kbGVyc1tldmVudF0uZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgaGFuZGxlcihkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVtaXQgZXZlbnQgdG8gc3RhciBldmVudCBoYW5kbGVyc1xuICAgICAgaWYoaGFuZGxlcnNbJyonXSkge1xuICAgICAgICBoYW5kbGVyc1snKiddLmZvckVhY2goZnVuY3Rpb24oc3RhckhhbmRsZXIpIHtcbiAgICAgICAgICBzdGFySGFuZGxlcihldmVudCwgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBhZGRFdmVudEhhbmRsZXI6IGFkZEV2ZW50SGFuZGxlcixcbiAgICAgIHJlbW92ZUV2ZW50SGFuZGxlcjogcmVtb3ZlRXZlbnRIYW5kbGVyLFxuICAgICAgZW1pdDogZW1pdFxuICAgIH07XG4gIH07XG5cbn0od2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpKTtcbjsvKipcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIHNvbWUgYmFzaWMgcHJvdG90eXBlIGluaGVyaXRhbmNlIHV0aWxpdGllcy5cbiAqXG4gKiBAbW9kdWxlIENoYXJ0aXN0LkNsYXNzXG4gKi9cbi8qIGdsb2JhbCBDaGFydGlzdCAqL1xuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsIENoYXJ0aXN0KSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBsaXN0VG9BcnJheShsaXN0KSB7XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIGlmIChsaXN0Lmxlbmd0aCkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFyci5wdXNoKGxpc3RbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCB0byBleHRlbmQgZnJvbSBjdXJyZW50IHByb3RvdHlwZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNsYXNzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIFRoZSBvYmplY3QgdGhhdCBzZXJ2ZXMgYXMgZGVmaW5pdGlvbiBmb3IgdGhlIHByb3RvdHlwZSB0aGF0IGdldHMgY3JlYXRlZCBmb3IgdGhlIG5ldyBjbGFzcy4gVGhpcyBvYmplY3Qgc2hvdWxkIGFsd2F5cyBjb250YWluIGEgY29uc3RydWN0b3IgcHJvcGVydHkgdGhhdCBpcyB0aGUgZGVzaXJlZCBjb25zdHJ1Y3RvciBmb3IgdGhlIG5ld2x5IGNyZWF0ZWQgY2xhc3MuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbc3VwZXJQcm90b092ZXJyaWRlXSBCeSBkZWZhdWx0IGV4dGVucyB3aWxsIHVzZSB0aGUgY3VycmVudCBjbGFzcyBwcm90b3R5cGUgb3IgQ2hhcnRpc3QuY2xhc3MuIFdpdGggdGhpcyBwYXJhbWV0ZXIgeW91IGNhbiBzcGVjaWZ5IGFueSBzdXBlciBwcm90b3R5cGUgdGhhdCB3aWxsIGJlIHVzZWQuXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBDb25zdHJ1Y3RvciBmdW5jdGlvbiBvZiB0aGUgbmV3IGNsYXNzXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIHZhciBGcnVpdCA9IENsYXNzLmV4dGVuZCh7XG4gICAgICogY29sb3I6IHVuZGVmaW5lZCxcbiAgICAgKiAgIHN1Z2FyOiB1bmRlZmluZWQsXG4gICAgICpcbiAgICAgKiAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbihjb2xvciwgc3VnYXIpIHtcbiAgICAgKiAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAqICAgICB0aGlzLnN1Z2FyID0gc3VnYXI7XG4gICAgICogICB9LFxuICAgICAqXG4gICAgICogICBlYXQ6IGZ1bmN0aW9uKCkge1xuICAgICAqICAgICB0aGlzLnN1Z2FyID0gMDtcbiAgICAgKiAgICAgcmV0dXJuIHRoaXM7XG4gICAgICogICB9XG4gICAgICogfSk7XG4gICAqXG4gICAqIHZhciBCYW5hbmEgPSBGcnVpdC5leHRlbmQoe1xuICAgICAqICAgbGVuZ3RoOiB1bmRlZmluZWQsXG4gICAgICpcbiAgICAgKiAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbihsZW5ndGgsIHN1Z2FyKSB7XG4gICAgICogICAgIEJhbmFuYS5zdXBlci5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsICdZZWxsb3cnLCBzdWdhcik7XG4gICAgICogICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAqICAgfVxuICAgICAqIH0pO1xuICAgKlxuICAgKiB2YXIgYmFuYW5hID0gbmV3IEJhbmFuYSgyMCwgNDApO1xuICAgKiBjb25zb2xlLmxvZygnYmFuYW5hIGluc3RhbmNlb2YgRnJ1aXQnLCBiYW5hbmEgaW5zdGFuY2VvZiBGcnVpdCk7XG4gICAqIGNvbnNvbGUubG9nKCdGcnVpdCBpcyBwcm90b3R5cGUgb2YgYmFuYW5hJywgRnJ1aXQucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYmFuYW5hKSk7XG4gICAqIGNvbnNvbGUubG9nKCdiYW5hbmFzIHByb3RvdHlwZSBpcyBGcnVpdCcsIE9iamVjdC5nZXRQcm90b3R5cGVPZihiYW5hbmEpID09PSBGcnVpdC5wcm90b3R5cGUpO1xuICAgKiBjb25zb2xlLmxvZyhiYW5hbmEuc3VnYXIpO1xuICAgKiBjb25zb2xlLmxvZyhiYW5hbmEuZWF0KCkuc3VnYXIpO1xuICAgKiBjb25zb2xlLmxvZyhiYW5hbmEuY29sb3IpO1xuICAgKi9cbiAgZnVuY3Rpb24gZXh0ZW5kKHByb3BlcnRpZXMsIHN1cGVyUHJvdG9PdmVycmlkZSkge1xuICAgIHZhciBzdXBlclByb3RvID0gc3VwZXJQcm90b092ZXJyaWRlIHx8IHRoaXMucHJvdG90eXBlIHx8IENoYXJ0aXN0LkNsYXNzO1xuICAgIHZhciBwcm90byA9IE9iamVjdC5jcmVhdGUoc3VwZXJQcm90byk7XG5cbiAgICBDaGFydGlzdC5DbGFzcy5jbG9uZURlZmluaXRpb25zKHByb3RvLCBwcm9wZXJ0aWVzKTtcblxuICAgIHZhciBjb25zdHIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBmbiA9IHByb3RvLmNvbnN0cnVjdG9yIHx8IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBpbnN0YW5jZTtcblxuICAgICAgLy8gSWYgdGhpcyBpcyBsaW5rZWQgdG8gdGhlIENoYXJ0aXN0IG5hbWVzcGFjZSB0aGUgY29uc3RydWN0b3Igd2FzIG5vdCBjYWxsZWQgd2l0aCBuZXdcbiAgICAgIC8vIFRvIHByb3ZpZGUgYSBmYWxsYmFjayB3ZSB3aWxsIGluc3RhbnRpYXRlIGhlcmUgYW5kIHJldHVybiB0aGUgaW5zdGFuY2VcbiAgICAgIGluc3RhbmNlID0gdGhpcyA9PT0gQ2hhcnRpc3QgPyBPYmplY3QuY3JlYXRlKHByb3RvKSA6IHRoaXM7XG4gICAgICBmbi5hcHBseShpbnN0YW5jZSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSk7XG5cbiAgICAgIC8vIElmIHRoaXMgY29uc3RydWN0b3Igd2FzIG5vdCBjYWxsZWQgd2l0aCBuZXcgd2UgbmVlZCB0byByZXR1cm4gdGhlIGluc3RhbmNlXG4gICAgICAvLyBUaGlzIHdpbGwgbm90IGhhcm0gd2hlbiB0aGUgY29uc3RydWN0b3IgaGFzIGJlZW4gY2FsbGVkIHdpdGggbmV3IGFzIHRoZSByZXR1cm5lZCB2YWx1ZSBpcyBpZ25vcmVkXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcblxuICAgIGNvbnN0ci5wcm90b3R5cGUgPSBwcm90bztcbiAgICBjb25zdHIuc3VwZXIgPSBzdXBlclByb3RvO1xuICAgIGNvbnN0ci5leHRlbmQgPSB0aGlzLmV4dGVuZDtcblxuICAgIHJldHVybiBjb25zdHI7XG4gIH1cblxuICAvLyBWYXJpYWJsZSBhcmd1bWVudCBsaXN0IGNsb25lcyBhcmdzID4gMCBpbnRvIGFyZ3NbMF0gYW5kIHJldHJ1bnMgbW9kaWZpZWQgYXJnc1swXVxuICBmdW5jdGlvbiBjbG9uZURlZmluaXRpb25zKCkge1xuICAgIHZhciBhcmdzID0gbGlzdFRvQXJyYXkoYXJndW1lbnRzKTtcbiAgICB2YXIgdGFyZ2V0ID0gYXJnc1swXTtcblxuICAgIGFyZ3Muc3BsaWNlKDEsIGFyZ3MubGVuZ3RoIC0gMSkuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKHByb3BOYW1lKSB7XG4gICAgICAgIC8vIElmIHRoaXMgcHJvcGVydHkgYWxyZWFkeSBleGlzdCBpbiB0YXJnZXQgd2UgZGVsZXRlIGl0IGZpcnN0XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRbcHJvcE5hbWVdO1xuICAgICAgICAvLyBEZWZpbmUgdGhlIHByb3BlcnR5IHdpdGggdGhlIGRlc2NyaXB0b3IgZnJvbSBzb3VyY2VcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcE5hbWUsXG4gICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHByb3BOYW1lKSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBDaGFydGlzdC5DbGFzcyA9IHtcbiAgICBleHRlbmQ6IGV4dGVuZCxcbiAgICBjbG9uZURlZmluaXRpb25zOiBjbG9uZURlZmluaXRpb25zXG4gIH07XG5cbn0od2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpKTtcbjsvKipcbiAqIEJhc2UgZm9yIGFsbCBjaGFydCB0eXBlcy4gVGhlIG1ldGhvZHMgaW4gQ2hhcnRpc3QuQmFzZSBhcmUgaW5oZXJpdGVkIHRvIGFsbCBjaGFydCB0eXBlcy5cbiAqXG4gKiBAbW9kdWxlIENoYXJ0aXN0LkJhc2VcbiAqL1xuLyogZ2xvYmFsIENoYXJ0aXN0ICovXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFRPRE86IEN1cnJlbnRseSB3ZSBuZWVkIHRvIHJlLWRyYXcgdGhlIGNoYXJ0IG9uIHdpbmRvdyByZXNpemUuIFRoaXMgaXMgdXN1YWxseSB2ZXJ5IGJhZCBhbmQgd2lsbCBhZmZlY3QgcGVyZm9ybWFuY2UuXG4gIC8vIFRoaXMgaXMgZG9uZSBiZWNhdXNlIHdlIGNhbid0IHdvcmsgd2l0aCByZWxhdGl2ZSBjb29yZGluYXRlcyB3aGVuIGRyYXdpbmcgdGhlIGNoYXJ0IGJlY2F1c2UgU1ZHIFBhdGggZG9lcyBub3RcbiAgLy8gd29yayB3aXRoIHJlbGF0aXZlIHBvc2l0aW9ucyB5ZXQuIFdlIG5lZWQgdG8gY2hlY2sgaWYgd2UgY2FuIGRvIGEgdmlld0JveCBoYWNrIHRvIHN3aXRjaCB0byBwZXJjZW50YWdlLlxuICAvLyBTZWUgaHR0cDovL21vemlsbGEuNjUwNi5uNy5uYWJibGUuY29tL1NwZWN5ZmluZy1wYXRocy13aXRoLXBlcmNlbnRhZ2VzLXVuaXQtdGQyNDc0NzQuaHRtbFxuICAvLyBVcGRhdGU6IGNhbiBiZSBkb25lIHVzaW5nIHRoZSBhYm92ZSBtZXRob2QgdGVzdGVkIGhlcmU6IGh0dHA6Ly9jb2RlcGVuLmlvL2dpb25rdW56L3Blbi9LRHZMalxuICAvLyBUaGUgcHJvYmxlbSBpcyB3aXRoIHRoZSBsYWJlbCBvZmZzZXRzIHRoYXQgY2FuJ3QgYmUgY29udmVydGVkIGludG8gcGVyY2VudGFnZSBhbmQgYWZmZWN0aW5nIHRoZSBjaGFydCBjb250YWluZXJcbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGNoYXJ0IHdoaWNoIGN1cnJlbnRseSBkb2VzIGEgZnVsbCByZWNvbnN0cnVjdGlvbiBvZiB0aGUgU1ZHIERPTVxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdIE9wdGlvbmFsIGRhdGEgeW91J2QgbGlrZSB0byBzZXQgZm9yIHRoZSBjaGFydCBiZWZvcmUgaXQgd2lsbCB1cGRhdGUuIElmIG5vdCBzcGVjaWZpZWQgdGhlIHVwZGF0ZSBtZXRob2Qgd2lsbCB1c2UgdGhlIGRhdGEgdGhhdCBpcyBhbHJlYWR5IGNvbmZpZ3VyZWQgd2l0aCB0aGUgY2hhcnQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gT3B0aW9uYWwgb3B0aW9ucyB5b3UnZCBsaWtlIHRvIGFkZCB0byB0aGUgcHJldmlvdXMgb3B0aW9ucyBmb3IgdGhlIGNoYXJ0IGJlZm9yZSBpdCB3aWxsIHVwZGF0ZS4gSWYgbm90IHNwZWNpZmllZCB0aGUgdXBkYXRlIG1ldGhvZCB3aWxsIHVzZSB0aGUgb3B0aW9ucyB0aGF0IGhhdmUgYmVlbiBhbHJlYWR5IGNvbmZpZ3VyZWQgd2l0aCB0aGUgY2hhcnQuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW292ZXJyaWRlXSBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHBhc3NlZCBvcHRpb25zIHdpbGwgYmUgdXNlZCB0byBleHRlbmQgdGhlIG9wdGlvbnMgdGhhdCBoYXZlIGJlZW4gY29uZmlndXJlZCBhbHJlYWR5LiBPdGhlcndpc2UgdGhlIGNoYXJ0IGRlZmF1bHQgb3B0aW9ucyB3aWxsIGJlIHVzZWQgYXMgdGhlIGJhc2VcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkJhc2VcbiAgICovXG4gIGZ1bmN0aW9uIHVwZGF0ZShkYXRhLCBvcHRpb25zLCBvdmVycmlkZSkge1xuICAgIGlmKGRhdGEpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwge307XG4gICAgICB0aGlzLmRhdGEubGFiZWxzID0gdGhpcy5kYXRhLmxhYmVscyB8fCBbXTtcbiAgICAgIHRoaXMuZGF0YS5zZXJpZXMgPSB0aGlzLmRhdGEuc2VyaWVzIHx8IFtdO1xuICAgICAgLy8gRXZlbnQgZm9yIGRhdGEgdHJhbnNmb3JtYXRpb24gdGhhdCBhbGxvd3MgdG8gbWFuaXB1bGF0ZSB0aGUgZGF0YSBiZWZvcmUgaXQgZ2V0cyByZW5kZXJlZCBpbiB0aGUgY2hhcnRzXG4gICAgICB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdkYXRhJywge1xuICAgICAgICB0eXBlOiAndXBkYXRlJyxcbiAgICAgICAgZGF0YTogdGhpcy5kYXRhXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZihvcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBDaGFydGlzdC5leHRlbmQoe30sIG92ZXJyaWRlID8gdGhpcy5vcHRpb25zIDogdGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICAgIC8vIElmIGNoYXJ0aXN0IHdhcyBub3QgaW5pdGlhbGl6ZWQgeWV0LCB3ZSBqdXN0IHNldCB0aGUgb3B0aW9ucyBhbmQgbGVhdmUgdGhlIHJlc3QgdG8gdGhlIGluaXRpYWxpemF0aW9uXG4gICAgICAvLyBPdGhlcndpc2Ugd2UgcmUtY3JlYXRlIHRoZSBvcHRpb25zUHJvdmlkZXIgYXQgdGhpcyBwb2ludFxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZVRpbWVvdXRJZCkge1xuICAgICAgICB0aGlzLm9wdGlvbnNQcm92aWRlci5yZW1vdmVNZWRpYVF1ZXJ5TGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMub3B0aW9uc1Byb3ZpZGVyID0gQ2hhcnRpc3Qub3B0aW9uc1Byb3ZpZGVyKHRoaXMub3B0aW9ucywgdGhpcy5yZXNwb25zaXZlT3B0aW9ucywgdGhpcy5ldmVudEVtaXR0ZXIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9ubHkgcmUtY3JlYXRlZCB0aGUgY2hhcnQgaWYgaXQgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgeWV0XG4gICAgaWYoIXRoaXMuaW5pdGlhbGl6ZVRpbWVvdXRJZCkge1xuICAgICAgdGhpcy5jcmVhdGVDaGFydCh0aGlzLm9wdGlvbnNQcm92aWRlci5nZXRDdXJyZW50T3B0aW9ucygpKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYSByZWZlcmVuY2UgdG8gdGhlIGNoYXJ0IG9iamVjdCB0byBjaGFpbiB1cCBjYWxsc1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGNhbiBiZSBjYWxsZWQgb24gdGhlIEFQSSBvYmplY3Qgb2YgZWFjaCBjaGFydCBhbmQgd2lsbCB1bi1yZWdpc3RlciBhbGwgZXZlbnQgbGlzdGVuZXJzIHRoYXQgd2VyZSBhZGRlZCB0byBvdGhlciBjb21wb25lbnRzLiBUaGlzIGN1cnJlbnRseSBpbmNsdWRlcyBhIHdpbmRvdy5yZXNpemUgbGlzdGVuZXIgYXMgd2VsbCBhcyBtZWRpYSBxdWVyeSBsaXN0ZW5lcnMgaWYgYW55IHJlc3BvbnNpdmUgb3B0aW9ucyBoYXZlIGJlZW4gcHJvdmlkZWQuIFVzZSB0aGlzIGZ1bmN0aW9uIGlmIHlvdSBuZWVkIHRvIGRlc3Ryb3kgYW5kIHJlY3JlYXRlIENoYXJ0aXN0IGNoYXJ0cyBkeW5hbWljYWxseS5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkJhc2VcbiAgICovXG4gIGZ1bmN0aW9uIGRldGFjaCgpIHtcbiAgICAvLyBPbmx5IGRldGFjaCBpZiBpbml0aWFsaXphdGlvbiBhbHJlYWR5IG9jY3VycmVkIG9uIHRoaXMgY2hhcnQuIElmIHRoaXMgY2hhcnQgc3RpbGwgaGFzbid0IGluaXRpYWxpemVkICh0aGVyZWZvcmVcbiAgICAvLyB0aGUgaW5pdGlhbGl6YXRpb25UaW1lb3V0SWQgaXMgc3RpbGwgYSB2YWxpZCB0aW1lb3V0IHJlZmVyZW5jZSwgd2Ugd2lsbCBjbGVhciB0aGUgdGltZW91dFxuICAgIGlmKCF0aGlzLmluaXRpYWxpemVUaW1lb3V0SWQpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUxpc3RlbmVyKTtcbiAgICAgIHRoaXMub3B0aW9uc1Byb3ZpZGVyLnJlbW92ZU1lZGlhUXVlcnlMaXN0ZW5lcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLmluaXRpYWxpemVUaW1lb3V0SWQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGlzIGZ1bmN0aW9uIHRvIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzLiBUaGUgaGFuZGxlciBjYWxsYmFja3MgYXJlIHN5bmNocm9ub3VzIGFuZCB3aWxsIHJ1biBpbiB0aGUgbWFpbiB0aHJlYWQgcmF0aGVyIHRoYW4gdGhlIGV2ZW50IGxvb3AuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5CYXNlXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCBOYW1lIG9mIHRoZSBldmVudC4gQ2hlY2sgdGhlIGV4YW1wbGVzIGZvciBzdXBwb3J0ZWQgZXZlbnRzLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBoYW5kbGVyIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiBhbiBldmVudCB3aXRoIHRoZSBnaXZlbiBuYW1lIHdhcyBlbWl0dGVkLiBUaGlzIGZ1bmN0aW9uIHdpbGwgcmVjZWl2ZSBhIGRhdGEgYXJndW1lbnQgd2hpY2ggY29udGFpbnMgZXZlbnQgZGF0YS4gU2VlIHRoZSBleGFtcGxlIGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBmdW5jdGlvbiBvbihldmVudCwgaGFuZGxlcikge1xuICAgIHRoaXMuZXZlbnRFbWl0dGVyLmFkZEV2ZW50SGFuZGxlcihldmVudCwgaGFuZGxlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgZnVuY3Rpb24gdG8gdW4tcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnMuIElmIHRoZSBoYW5kbGVyIGZ1bmN0aW9uIHBhcmFtZXRlciBpcyBvbWl0dGVkIGFsbCBoYW5kbGVycyBmb3IgdGhlIGdpdmVuIGV2ZW50IHdpbGwgYmUgdW4tcmVnaXN0ZXJlZC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkJhc2VcbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IE5hbWUgb2YgdGhlIGV2ZW50IGZvciB3aGljaCBhIGhhbmRsZXIgc2hvdWxkIGJlIHJlbW92ZWRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2hhbmRsZXJdIFRoZSBoYW5kbGVyIGZ1bmN0aW9uIHRoYXQgdGhhdCB3YXMgcHJldmlvdXNseSB1c2VkIHRvIHJlZ2lzdGVyIGEgbmV3IGV2ZW50IGhhbmRsZXIuIFRoaXMgaGFuZGxlciB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgZXZlbnQgaGFuZGxlciBsaXN0LiBJZiB0aGlzIHBhcmFtZXRlciBpcyBvbWl0dGVkIHRoZW4gYWxsIGV2ZW50IGhhbmRsZXJzIGZvciB0aGUgZ2l2ZW4gZXZlbnQgYXJlIHJlbW92ZWQgZnJvbSB0aGUgbGlzdC5cbiAgICovXG4gIGZ1bmN0aW9uIG9mZihldmVudCwgaGFuZGxlcikge1xuICAgIHRoaXMuZXZlbnRFbWl0dGVyLnJlbW92ZUV2ZW50SGFuZGxlcihldmVudCwgaGFuZGxlcik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIC8vIEFkZCB3aW5kb3cgcmVzaXplIGxpc3RlbmVyIHRoYXQgcmUtY3JlYXRlcyB0aGUgY2hhcnRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemVMaXN0ZW5lcik7XG5cbiAgICAvLyBPYnRhaW4gY3VycmVudCBvcHRpb25zIGJhc2VkIG9uIG1hdGNoaW5nIG1lZGlhIHF1ZXJpZXMgKGlmIHJlc3BvbnNpdmUgb3B0aW9ucyBhcmUgZ2l2ZW4pXG4gICAgLy8gVGhpcyB3aWxsIGFsc28gcmVnaXN0ZXIgYSBsaXN0ZW5lciB0aGF0IGlzIHJlLWNyZWF0aW5nIHRoZSBjaGFydCBiYXNlZCBvbiBtZWRpYSBjaGFuZ2VzXG4gICAgdGhpcy5vcHRpb25zUHJvdmlkZXIgPSBDaGFydGlzdC5vcHRpb25zUHJvdmlkZXIodGhpcy5vcHRpb25zLCB0aGlzLnJlc3BvbnNpdmVPcHRpb25zLCB0aGlzLmV2ZW50RW1pdHRlcik7XG4gICAgLy8gUmVnaXN0ZXIgb3B0aW9ucyBjaGFuZ2UgbGlzdGVuZXIgdGhhdCB3aWxsIHRyaWdnZXIgYSBjaGFydCB1cGRhdGVcbiAgICB0aGlzLmV2ZW50RW1pdHRlci5hZGRFdmVudEhhbmRsZXIoJ29wdGlvbnNDaGFuZ2VkJywgZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAvLyBCZWZvcmUgdGhlIGZpcnN0IGNoYXJ0IGNyZWF0aW9uIHdlIG5lZWQgdG8gcmVnaXN0ZXIgdXMgd2l0aCBhbGwgcGx1Z2lucyB0aGF0IGFyZSBjb25maWd1cmVkXG4gICAgLy8gSW5pdGlhbGl6ZSBhbGwgcmVsZXZhbnQgcGx1Z2lucyB3aXRoIG91ciBjaGFydCBvYmplY3QgYW5kIHRoZSBwbHVnaW4gb3B0aW9ucyBzcGVjaWZpZWQgaW4gdGhlIGNvbmZpZ1xuICAgIGlmKHRoaXMub3B0aW9ucy5wbHVnaW5zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMucGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uKHBsdWdpbikge1xuICAgICAgICBpZihwbHVnaW4gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgIHBsdWdpblswXSh0aGlzLCBwbHVnaW5bMV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsdWdpbih0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvLyBFdmVudCBmb3IgZGF0YSB0cmFuc2Zvcm1hdGlvbiB0aGF0IGFsbG93cyB0byBtYW5pcHVsYXRlIHRoZSBkYXRhIGJlZm9yZSBpdCBnZXRzIHJlbmRlcmVkIGluIHRoZSBjaGFydHNcbiAgICB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdkYXRhJywge1xuICAgICAgdHlwZTogJ2luaXRpYWwnLFxuICAgICAgZGF0YTogdGhpcy5kYXRhXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGZpcnN0IGNoYXJ0XG4gICAgdGhpcy5jcmVhdGVDaGFydCh0aGlzLm9wdGlvbnNQcm92aWRlci5nZXRDdXJyZW50T3B0aW9ucygpKTtcblxuICAgIC8vIEFzIGNoYXJ0IGlzIGluaXRpYWxpemVkIGZyb20gdGhlIGV2ZW50IGxvb3Agbm93IHdlIGNhbiByZXNldCBvdXIgdGltZW91dCByZWZlcmVuY2VcbiAgICAvLyBUaGlzIGlzIGltcG9ydGFudCBpZiB0aGUgY2hhcnQgZ2V0cyBpbml0aWFsaXplZCBvbiB0aGUgc2FtZSBlbGVtZW50IHR3aWNlXG4gICAgdGhpcy5pbml0aWFsaXplVGltZW91dElkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnN0cnVjdG9yIG9mIGNoYXJ0IGJhc2UgY2xhc3MuXG4gICAqXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcGFyYW0gZGVmYXVsdE9wdGlvbnNcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHBhcmFtIHJlc3BvbnNpdmVPcHRpb25zXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgZnVuY3Rpb24gQmFzZShxdWVyeSwgZGF0YSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMsIHJlc3BvbnNpdmVPcHRpb25zKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBDaGFydGlzdC5xdWVyeVNlbGVjdG9yKHF1ZXJ5KTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IHt9O1xuICAgIHRoaXMuZGF0YS5sYWJlbHMgPSB0aGlzLmRhdGEubGFiZWxzIHx8IFtdO1xuICAgIHRoaXMuZGF0YS5zZXJpZXMgPSB0aGlzLmRhdGEuc2VyaWVzIHx8IFtdO1xuICAgIHRoaXMuZGVmYXVsdE9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMucmVzcG9uc2l2ZU9wdGlvbnMgPSByZXNwb25zaXZlT3B0aW9ucztcbiAgICB0aGlzLmV2ZW50RW1pdHRlciA9IENoYXJ0aXN0LkV2ZW50RW1pdHRlcigpO1xuICAgIHRoaXMuc3VwcG9ydHNGb3JlaWduT2JqZWN0ID0gQ2hhcnRpc3QuU3ZnLmlzU3VwcG9ydGVkKCdFeHRlbnNpYmlsaXR5Jyk7XG4gICAgdGhpcy5zdXBwb3J0c0FuaW1hdGlvbnMgPSBDaGFydGlzdC5TdmcuaXNTdXBwb3J0ZWQoJ0FuaW1hdGlvbkV2ZW50c0F0dHJpYnV0ZScpO1xuICAgIHRoaXMucmVzaXplTGlzdGVuZXIgPSBmdW5jdGlvbiByZXNpemVMaXN0ZW5lcigpe1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9LmJpbmQodGhpcyk7XG5cbiAgICBpZih0aGlzLmNvbnRhaW5lcikge1xuICAgICAgLy8gSWYgY2hhcnRpc3Qgd2FzIGFscmVhZHkgaW5pdGlhbGl6ZWQgaW4gdGhpcyBjb250YWluZXIgd2UgYXJlIGRldGFjaGluZyBhbGwgZXZlbnQgbGlzdGVuZXJzIGZpcnN0XG4gICAgICBpZih0aGlzLmNvbnRhaW5lci5fX2NoYXJ0aXN0X18pIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuX19jaGFydGlzdF9fLmRldGFjaCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNvbnRhaW5lci5fX2NoYXJ0aXN0X18gPSB0aGlzO1xuICAgIH1cblxuICAgIC8vIFVzaW5nIGV2ZW50IGxvb3AgZm9yIGZpcnN0IGRyYXcgdG8gbWFrZSBpdCBwb3NzaWJsZSB0byByZWdpc3RlciBldmVudCBsaXN0ZW5lcnMgaW4gdGhlIHNhbWUgY2FsbCBzdGFjayB3aGVyZVxuICAgIC8vIHRoZSBjaGFydCB3YXMgY3JlYXRlZC5cbiAgICB0aGlzLmluaXRpYWxpemVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGluaXRpYWxpemUuYmluZCh0aGlzKSwgMCk7XG4gIH1cblxuICAvLyBDcmVhdGluZyB0aGUgY2hhcnQgYmFzZSBjbGFzc1xuICBDaGFydGlzdC5CYXNlID0gQ2hhcnRpc3QuQ2xhc3MuZXh0ZW5kKHtcbiAgICBjb25zdHJ1Y3RvcjogQmFzZSxcbiAgICBvcHRpb25zUHJvdmlkZXI6IHVuZGVmaW5lZCxcbiAgICBjb250YWluZXI6IHVuZGVmaW5lZCxcbiAgICBzdmc6IHVuZGVmaW5lZCxcbiAgICBldmVudEVtaXR0ZXI6IHVuZGVmaW5lZCxcbiAgICBjcmVhdGVDaGFydDogZnVuY3Rpb24oKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jhc2UgY2hhcnQgdHlwZSBjYW5cXCd0IGJlIGluc3RhbnRpYXRlZCEnKTtcbiAgICB9LFxuICAgIHVwZGF0ZTogdXBkYXRlLFxuICAgIGRldGFjaDogZGV0YWNoLFxuICAgIG9uOiBvbixcbiAgICBvZmY6IG9mZixcbiAgICB2ZXJzaW9uOiBDaGFydGlzdC52ZXJzaW9uLFxuICAgIHN1cHBvcnRzRm9yZWlnbk9iamVjdDogZmFsc2VcbiAgfSk7XG5cbn0od2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpKTtcbjsvKipcbiAqIENoYXJ0aXN0IFNWRyBtb2R1bGUgZm9yIHNpbXBsZSBTVkcgRE9NIGFic3RyYWN0aW9uXG4gKlxuICogQG1vZHVsZSBDaGFydGlzdC5TdmdcbiAqL1xuLyogZ2xvYmFsIENoYXJ0aXN0ICovXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBDaGFydGlzdC5TdmcgY3JlYXRlcyBhIG5ldyBTVkcgb2JqZWN0IHdyYXBwZXIgd2l0aCBhIHN0YXJ0aW5nIGVsZW1lbnQuIFlvdSBjYW4gdXNlIHRoZSB3cmFwcGVyIHRvIGZsdWVudGx5IGNyZWF0ZSBzdWItZWxlbWVudHMgYW5kIG1vZGlmeSB0aGVtLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge1N0cmluZ3xFbGVtZW50fSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBTVkcgZWxlbWVudCB0byBjcmVhdGUgb3IgYW4gU1ZHIGRvbSBlbGVtZW50IHdoaWNoIHNob3VsZCBiZSB3cmFwcGVkIGludG8gQ2hhcnRpc3QuU3ZnXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhdHRyaWJ1dGVzIEFuIG9iamVjdCB3aXRoIHByb3BlcnRpZXMgdGhhdCB3aWxsIGJlIGFkZGVkIGFzIGF0dHJpYnV0ZXMgdG8gdGhlIFNWRyBlbGVtZW50IHRoYXQgaXMgY3JlYXRlZC4gQXR0cmlidXRlcyB3aXRoIHVuZGVmaW5lZCB2YWx1ZXMgd2lsbCBub3QgYmUgYWRkZWQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWUgVGhpcyBjbGFzcyBvciBjbGFzcyBsaXN0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIFNWRyBlbGVtZW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJlbnQgVGhlIHBhcmVudCBTVkcgd3JhcHBlciBvYmplY3Qgd2hlcmUgdGhpcyBuZXdseSBjcmVhdGVkIHdyYXBwZXIgYW5kIGl0J3MgZWxlbWVudCB3aWxsIGJlIGF0dGFjaGVkIHRvIGFzIGNoaWxkXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5zZXJ0Rmlyc3QgSWYgdGhpcyBwYXJhbSBpcyBzZXQgdG8gdHJ1ZSBpbiBjb25qdW5jdGlvbiB3aXRoIGEgcGFyZW50IGVsZW1lbnQgdGhlIG5ld2x5IGNyZWF0ZWQgZWxlbWVudCB3aWxsIGJlIGFkZGVkIGFzIGZpcnN0IGNoaWxkIGVsZW1lbnQgaW4gdGhlIHBhcmVudCBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBTdmcobmFtZSwgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBwYXJlbnQsIGluc2VydEZpcnN0KSB7XG4gICAgLy8gSWYgU3ZnIGlzIGdldHRpbmcgY2FsbGVkIHdpdGggYW4gU1ZHIGVsZW1lbnQgd2UganVzdCByZXR1cm4gdGhlIHdyYXBwZXJcbiAgICBpZihuYW1lIGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgdGhpcy5fbm9kZSA9IG5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX25vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoQ2hhcnRpc3QubmFtZXNwYWNlcy5zdmcsIG5hbWUpO1xuXG4gICAgICAvLyBJZiB0aGlzIGlzIGFuIFNWRyBlbGVtZW50IGNyZWF0ZWQgdGhlbiBjdXN0b20gbmFtZXNwYWNlXG4gICAgICBpZihuYW1lID09PSAnc3ZnJykge1xuICAgICAgICB0aGlzLmF0dHIoe1xuICAgICAgICAgICd4bWxuczpjdCc6IENoYXJ0aXN0Lm5hbWVzcGFjZXMuY3RcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoYXR0cmlidXRlcykge1xuICAgICAgdGhpcy5hdHRyKGF0dHJpYnV0ZXMpO1xuICAgIH1cblxuICAgIGlmKGNsYXNzTmFtZSkge1xuICAgICAgdGhpcy5hZGRDbGFzcyhjbGFzc05hbWUpO1xuICAgIH1cblxuICAgIGlmKHBhcmVudCkge1xuICAgICAgaWYgKGluc2VydEZpcnN0ICYmIHBhcmVudC5fbm9kZS5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5fbm9kZS5pbnNlcnRCZWZvcmUodGhpcy5fbm9kZSwgcGFyZW50Ll9ub2RlLmZpcnN0Q2hpbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50Ll9ub2RlLmFwcGVuZENoaWxkKHRoaXMuX25vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgYXR0cmlidXRlcyBvbiB0aGUgY3VycmVudCBTVkcgZWxlbWVudCBvZiB0aGUgd3JhcHBlciB5b3UncmUgY3VycmVudGx5IHdvcmtpbmcgb24uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmdcbiAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBhdHRyaWJ1dGVzIEFuIG9iamVjdCB3aXRoIHByb3BlcnRpZXMgdGhhdCB3aWxsIGJlIGFkZGVkIGFzIGF0dHJpYnV0ZXMgdG8gdGhlIFNWRyBlbGVtZW50IHRoYXQgaXMgY3JlYXRlZC4gQXR0cmlidXRlcyB3aXRoIHVuZGVmaW5lZCB2YWx1ZXMgd2lsbCBub3QgYmUgYWRkZWQuIElmIHRoaXMgcGFyYW1ldGVyIGlzIGEgU3RyaW5nIHRoZW4gdGhlIGZ1bmN0aW9uIGlzIHVzZWQgYXMgYSBnZXR0ZXIgYW5kIHdpbGwgcmV0dXJuIHRoZSBhdHRyaWJ1dGUgdmFsdWUuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbbnNdIElmIHNwZWNpZmllZCwgdGhlIGF0dHJpYnV0ZSB3aWxsIGJlIG9idGFpbmVkIHVzaW5nIGdldEF0dHJpYnV0ZU5zLiBJbiBvcmRlciB0byB3cml0ZSBuYW1lcHNhY2VkIGF0dHJpYnV0ZXMgeW91IGNhbiB1c2UgdGhlIG5hbWVzcGFjZTphdHRyaWJ1dGUgbm90YXRpb24gd2l0aGluIHRoZSBhdHRyaWJ1dGVzIG9iamVjdC5cbiAgICogQHJldHVybiB7T2JqZWN0fFN0cmluZ30gVGhlIGN1cnJlbnQgd3JhcHBlciBvYmplY3Qgd2lsbCBiZSByZXR1cm5lZCBzbyBpdCBjYW4gYmUgdXNlZCBmb3IgY2hhaW5pbmcgb3IgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBpZiB1c2VkIGFzIGdldHRlciBmdW5jdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGF0dHIoYXR0cmlidXRlcywgbnMpIHtcbiAgICBpZih0eXBlb2YgYXR0cmlidXRlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmKG5zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub2RlLmdldEF0dHJpYnV0ZU5TKG5zLCBhdHRyaWJ1dGVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub2RlLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSB2YWx1ZSBpcyB1bmRlZmluZWQgd2UgY2FuIHNraXAgdGhpcyBvbmVcbiAgICAgIGlmKGF0dHJpYnV0ZXNba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGtleS5pbmRleE9mKCc6JykgIT09IC0xKSB7XG4gICAgICAgIHZhciBuYW1lc3BhY2VkQXR0cmlidXRlID0ga2V5LnNwbGl0KCc6Jyk7XG4gICAgICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlTlMoQ2hhcnRpc3QubmFtZXNwYWNlc1tuYW1lc3BhY2VkQXR0cmlidXRlWzBdXSwga2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fbm9kZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgU1ZHIGVsZW1lbnQgd2hvc2Ugd3JhcHBlciBvYmplY3Qgd2lsbCBiZSBzZWxlY3RlZCBmb3IgZnVydGhlciBvcGVyYXRpb25zLiBUaGlzIHdheSB5b3UgY2FuIGFsc28gY3JlYXRlIG5lc3RlZCBncm91cHMgZWFzaWx5LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBTVkcgZWxlbWVudCB0aGF0IHNob3VsZCBiZSBjcmVhdGVkIGFzIGNoaWxkIGVsZW1lbnQgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBlbGVtZW50IHdyYXBwZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IFthdHRyaWJ1dGVzXSBBbiBvYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIHRoYXQgd2lsbCBiZSBhZGRlZCBhcyBhdHRyaWJ1dGVzIHRvIHRoZSBTVkcgZWxlbWVudCB0aGF0IGlzIGNyZWF0ZWQuIEF0dHJpYnV0ZXMgd2l0aCB1bmRlZmluZWQgdmFsdWVzIHdpbGwgbm90IGJlIGFkZGVkLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2NsYXNzTmFtZV0gVGhpcyBjbGFzcyBvciBjbGFzcyBsaXN0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIFNWRyBlbGVtZW50XG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2luc2VydEZpcnN0XSBJZiB0aGlzIHBhcmFtIGlzIHNldCB0byB0cnVlIGluIGNvbmp1bmN0aW9uIHdpdGggYSBwYXJlbnQgZWxlbWVudCB0aGUgbmV3bHkgY3JlYXRlZCBlbGVtZW50IHdpbGwgYmUgYWRkZWQgYXMgZmlyc3QgY2hpbGQgZWxlbWVudCBpbiB0aGUgcGFyZW50IGVsZW1lbnRcbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnfSBSZXR1cm5zIGEgQ2hhcnRpc3QuU3ZnIHdyYXBwZXIgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gbW9kaWZ5IHRoZSBjb250YWluaW5nIFNWRyBkYXRhXG4gICAqL1xuICBmdW5jdGlvbiBlbGVtKG5hbWUsIGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgaW5zZXJ0Rmlyc3QpIHtcbiAgICByZXR1cm4gbmV3IENoYXJ0aXN0LlN2ZyhuYW1lLCBhdHRyaWJ1dGVzLCBjbGFzc05hbWUsIHRoaXMsIGluc2VydEZpcnN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXJlbnQgQ2hhcnRpc3QuU1ZHIHdyYXBwZXIgb2JqZWN0XG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmdcbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnfSBSZXR1cm5zIGEgQ2hhcnRpc3QuU3ZnIHdyYXBwZXIgYXJvdW5kIHRoZSBwYXJlbnQgbm9kZSBvZiB0aGUgY3VycmVudCBub2RlLiBJZiB0aGUgcGFyZW50IG5vZGUgaXMgbm90IGV4aXN0aW5nIG9yIGl0J3Mgbm90IGFuIFNWRyBub2RlIHRoZW4gdGhpcyBmdW5jdGlvbiB3aWxsIHJldHVybiBudWxsLlxuICAgKi9cbiAgZnVuY3Rpb24gcGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9ub2RlLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBTVkdFbGVtZW50ID8gbmV3IENoYXJ0aXN0LlN2Zyh0aGlzLl9ub2RlLnBhcmVudE5vZGUpIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgQ2hhcnRpc3QuU3ZnIHdyYXBwZXIgYXJvdW5kIHRoZSByb290IFNWRyBlbGVtZW50IG9mIHRoZSBjdXJyZW50IHRyZWUuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmdcbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnfSBUaGUgcm9vdCBTVkcgZWxlbWVudCB3cmFwcGVkIGluIGEgQ2hhcnRpc3QuU3ZnIGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIHJvb3QoKSB7XG4gICAgdmFyIG5vZGUgPSB0aGlzLl9ub2RlO1xuICAgIHdoaWxlKG5vZGUubm9kZU5hbWUgIT09ICdzdmcnKSB7XG4gICAgICBub2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IENoYXJ0aXN0LlN2Zyhub2RlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSBmaXJzdCBjaGlsZCBTVkcgZWxlbWVudCBvZiB0aGUgY3VycmVudCBlbGVtZW50IHRoYXQgbWF0Y2hlcyBhIENTUyBzZWxlY3Rvci4gVGhlIHJldHVybmVkIG9iamVjdCBpcyBhIENoYXJ0aXN0LlN2ZyB3cmFwcGVyLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciBBIENTUyBzZWxlY3RvciB0aGF0IGlzIHVzZWQgdG8gcXVlcnkgZm9yIGNoaWxkIFNWRyBlbGVtZW50c1xuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5Tdmd9IFRoZSBTVkcgd3JhcHBlciBmb3IgdGhlIGVsZW1lbnQgZm91bmQgb3IgbnVsbCBpZiBubyBlbGVtZW50IHdhcyBmb3VuZFxuICAgKi9cbiAgZnVuY3Rpb24gcXVlcnlTZWxlY3RvcihzZWxlY3Rvcikge1xuICAgIHZhciBmb3VuZE5vZGUgPSB0aGlzLl9ub2RlLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHJldHVybiBmb3VuZE5vZGUgPyBuZXcgQ2hhcnRpc3QuU3ZnKGZvdW5kTm9kZSkgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIGFsbCBjaGlsZCBTVkcgZWxlbWVudHMgb2YgdGhlIGN1cnJlbnQgZWxlbWVudCB0aGF0IG1hdGNoIGEgQ1NTIHNlbGVjdG9yLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGlzIGEgQ2hhcnRpc3QuU3ZnLkxpc3Qgd3JhcHBlci5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Z1xuICAgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgQSBDU1Mgc2VsZWN0b3IgdGhhdCBpcyB1c2VkIHRvIHF1ZXJ5IGZvciBjaGlsZCBTVkcgZWxlbWVudHNcbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnLkxpc3R9IFRoZSBTVkcgd3JhcHBlciBsaXN0IGZvciB0aGUgZWxlbWVudCBmb3VuZCBvciBudWxsIGlmIG5vIGVsZW1lbnQgd2FzIGZvdW5kXG4gICAqL1xuICBmdW5jdGlvbiBxdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSB7XG4gICAgdmFyIGZvdW5kTm9kZXMgPSB0aGlzLl9ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgIHJldHVybiBmb3VuZE5vZGVzLmxlbmd0aCA/IG5ldyBDaGFydGlzdC5TdmcuTGlzdChmb3VuZE5vZGVzKSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdW5kZXJseWluZyBTVkcgbm9kZSBmb3IgdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Z1xuICAgKiBAcmV0dXJucyB7Tm9kZX1cbiAgICovXG4gIGZ1bmN0aW9uIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vZGU7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgY3JlYXRlcyBhIGZvcmVpZ25PYmplY3QgKHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvRWxlbWVudC9mb3JlaWduT2JqZWN0KSB0aGF0IGFsbG93cyB0byBlbWJlZCBIVE1MIGNvbnRlbnQgaW50byBhIFNWRyBncmFwaGljLiBXaXRoIHRoZSBoZWxwIG9mIGZvcmVpZ25PYmplY3RzIHlvdSBjYW4gZW5hYmxlIHRoZSB1c2FnZSBvZiByZWd1bGFyIEhUTUwgZWxlbWVudHMgaW5zaWRlIG9mIFNWRyB3aGVyZSB0aGV5IGFyZSBzdWJqZWN0IGZvciBTVkcgcG9zaXRpb25pbmcgYW5kIHRyYW5zZm9ybWF0aW9uIGJ1dCB0aGUgQnJvd3NlciB3aWxsIHVzZSB0aGUgSFRNTCByZW5kZXJpbmcgY2FwYWJpbGl0aWVzIGZvciB0aGUgY29udGFpbmluZyBET00uXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmdcbiAgICogQHBhcmFtIHtOb2RlfFN0cmluZ30gY29udGVudCBUaGUgRE9NIE5vZGUsIG9yIEhUTUwgc3RyaW5nIHRoYXQgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYSBET00gTm9kZSwgdGhhdCBpcyB0aGVuIHBsYWNlZCBpbnRvIGFuZCB3cmFwcGVkIGJ5IHRoZSBmb3JlaWduT2JqZWN0XG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbYXR0cmlidXRlc10gQW4gb2JqZWN0IHdpdGggcHJvcGVydGllcyB0aGF0IHdpbGwgYmUgYWRkZWQgYXMgYXR0cmlidXRlcyB0byB0aGUgZm9yZWlnbk9iamVjdCBlbGVtZW50IHRoYXQgaXMgY3JlYXRlZC4gQXR0cmlidXRlcyB3aXRoIHVuZGVmaW5lZCB2YWx1ZXMgd2lsbCBub3QgYmUgYWRkZWQuXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBbY2xhc3NOYW1lXSBUaGlzIGNsYXNzIG9yIGNsYXNzIGxpc3Qgd2lsbCBiZSBhZGRlZCB0byB0aGUgU1ZHIGVsZW1lbnRcbiAgICogQHBhcmFtIHtCb29sZWFufSBbaW5zZXJ0Rmlyc3RdIFNwZWNpZmllcyBpZiB0aGUgZm9yZWlnbk9iamVjdCBzaG91bGQgYmUgaW5zZXJ0ZWQgYXMgZmlyc3QgY2hpbGRcbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnfSBOZXcgd3JhcHBlciBvYmplY3QgdGhhdCB3cmFwcyB0aGUgZm9yZWlnbk9iamVjdCBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiBmb3JlaWduT2JqZWN0KGNvbnRlbnQsIGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgaW5zZXJ0Rmlyc3QpIHtcbiAgICAvLyBJZiBjb250ZW50IGlzIHN0cmluZyB0aGVuIHdlIGNvbnZlcnQgaXQgdG8gRE9NXG4gICAgLy8gVE9ETzogSGFuZGxlIGNhc2Ugd2hlcmUgY29udGVudCBpcyBub3QgYSBzdHJpbmcgbm9yIGEgRE9NIE5vZGVcbiAgICBpZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgY29udGVudCA9IGNvbnRhaW5lci5maXJzdENoaWxkO1xuICAgIH1cblxuICAgIC8vIEFkZGluZyBuYW1lc3BhY2UgdG8gY29udGVudCBlbGVtZW50XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgQ2hhcnRpc3QubmFtZXNwYWNlcy54bWxucyk7XG5cbiAgICAvLyBDcmVhdGluZyB0aGUgZm9yZWlnbk9iamVjdCB3aXRob3V0IHJlcXVpcmVkIGV4dGVuc2lvbiBhdHRyaWJ1dGUgKGFzIGRlc2NyaWJlZCBoZXJlXG4gICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHL2V4dGVuZC5odG1sI0ZvcmVpZ25PYmplY3RFbGVtZW50KVxuICAgIHZhciBmbk9iaiA9IHRoaXMuZWxlbSgnZm9yZWlnbk9iamVjdCcsIGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgaW5zZXJ0Rmlyc3QpO1xuXG4gICAgLy8gQWRkIGNvbnRlbnQgdG8gZm9yZWlnbk9iamVjdEVsZW1lbnRcbiAgICBmbk9iai5fbm9kZS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIHJldHVybiBmbk9iajtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBhZGRzIGEgbmV3IHRleHQgZWxlbWVudCB0byB0aGUgY3VycmVudCBDaGFydGlzdC5Tdmcgd3JhcHBlci5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Z1xuICAgKiBAcGFyYW0ge1N0cmluZ30gdCBUaGUgdGV4dCB0aGF0IHNob3VsZCBiZSBhZGRlZCB0byB0aGUgdGV4dCBlbGVtZW50IHRoYXQgaXMgY3JlYXRlZFxuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5Tdmd9IFRoZSBzYW1lIHdyYXBwZXIgb2JqZWN0IHRoYXQgd2FzIHVzZWQgdG8gYWRkIHRoZSBuZXdseSBjcmVhdGVkIGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIHRleHQodCkge1xuICAgIHRoaXMuX25vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCkpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgY2xlYXIgYWxsIGNoaWxkIG5vZGVzIG9mIHRoZSBjdXJyZW50IHdyYXBwZXIgb2JqZWN0LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnXG4gICAqIEByZXR1cm4ge0NoYXJ0aXN0LlN2Z30gVGhlIHNhbWUgd3JhcHBlciBvYmplY3QgdGhhdCBnb3QgZW1wdGllZFxuICAgKi9cbiAgZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgd2hpbGUgKHRoaXMuX25vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5fbm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9ub2RlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgY2F1c2UgdGhlIGN1cnJlbnQgd3JhcHBlciB0byByZW1vdmUgaXRzZWxmIGZyb20gaXRzIHBhcmVudCB3cmFwcGVyLiBVc2UgdGhpcyBtZXRob2QgaWYgeW91J2QgbGlrZSB0byBnZXQgcmlkIG9mIGFuIGVsZW1lbnQgaW4gYSBnaXZlbiBET00gc3RydWN0dXJlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnXG4gICAqIEByZXR1cm4ge0NoYXJ0aXN0LlN2Z30gVGhlIHBhcmVudCB3cmFwcGVyIG9iamVjdCBvZiB0aGUgZWxlbWVudCB0aGF0IGdvdCByZW1vdmVkXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgdGhpcy5fbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuX25vZGUpO1xuICAgIHJldHVybiB0aGlzLnBhcmVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgcmVwbGFjZSB0aGUgZWxlbWVudCB3aXRoIGEgbmV3IGVsZW1lbnQgdGhhdCBjYW4gYmUgY3JlYXRlZCBvdXRzaWRlIG9mIHRoZSBjdXJyZW50IERPTS5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Z1xuICAgKiBAcGFyYW0ge0NoYXJ0aXN0LlN2Z30gbmV3RWxlbWVudCBUaGUgbmV3IENoYXJ0aXN0LlN2ZyBvYmplY3QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gcmVwbGFjZSB0aGUgY3VycmVudCB3cmFwcGVyIG9iamVjdFxuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5Tdmd9IFRoZSB3cmFwcGVyIG9mIHRoZSBuZXcgZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gcmVwbGFjZShuZXdFbGVtZW50KSB7XG4gICAgdGhpcy5fbm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdFbGVtZW50Ll9ub2RlLCB0aGlzLl9ub2RlKTtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGFwcGVuZCBhbiBlbGVtZW50IHRvIHRoZSBjdXJyZW50IGVsZW1lbnQgYXMgYSBjaGlsZC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Z1xuICAgKiBAcGFyYW0ge0NoYXJ0aXN0LlN2Z30gZWxlbWVudCBUaGUgQ2hhcnRpc3QuU3ZnIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgYWRkZWQgYXMgYSBjaGlsZFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpbnNlcnRGaXJzdF0gU3BlY2lmaWVzIGlmIHRoZSBlbGVtZW50IHNob3VsZCBiZSBpbnNlcnRlZCBhcyBmaXJzdCBjaGlsZFxuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5Tdmd9IFRoZSB3cmFwcGVyIG9mIHRoZSBhcHBlbmRlZCBvYmplY3RcbiAgICovXG4gIGZ1bmN0aW9uIGFwcGVuZChlbGVtZW50LCBpbnNlcnRGaXJzdCkge1xuICAgIGlmKGluc2VydEZpcnN0ICYmIHRoaXMuX25vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgdGhpcy5fbm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudC5fbm9kZSwgdGhpcy5fbm9kZS5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbm9kZS5hcHBlbmRDaGlsZChlbGVtZW50Ll9ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGNsYXNzIG5hbWVzIHRoYXQgYXJlIGF0dGFjaGVkIHRvIHRoZSBjdXJyZW50IHdyYXBwZXIgZWxlbWVudC4gVGhpcyBtZXRob2QgY2FuIG5vdCBiZSBjaGFpbmVkIGZ1cnRoZXIuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmdcbiAgICogQHJldHVybiB7QXJyYXl9IEEgbGlzdCBvZiBjbGFzc2VzIG9yIGFuIGVtcHR5IGFycmF5IGlmIHRoZXJlIGFyZSBubyBjbGFzc2VzIG9uIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIGNsYXNzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vZGUuZ2V0QXR0cmlidXRlKCdjbGFzcycpID8gdGhpcy5fbm9kZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykudHJpbSgpLnNwbGl0KC9cXHMrLykgOiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIG9uZSBvciBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mIGNsYXNzZXMgdG8gdGhlIGN1cnJlbnQgZWxlbWVudCBhbmQgZW5zdXJlcyB0aGUgY2xhc3NlcyBhcmUgb25seSBleGlzdGluZyBvbmNlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lcyBBIHdoaXRlIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mIGNsYXNzIG5hbWVzXG4gICAqIEByZXR1cm4ge0NoYXJ0aXN0LlN2Z30gVGhlIHdyYXBwZXIgb2YgdGhlIGN1cnJlbnQgZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gYWRkQ2xhc3MobmFtZXMpIHtcbiAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLFxuICAgICAgdGhpcy5jbGFzc2VzKHRoaXMuX25vZGUpXG4gICAgICAgIC5jb25jYXQobmFtZXMudHJpbSgpLnNwbGl0KC9cXHMrLykpXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oZWxlbSwgcG9zLCBzZWxmKSB7XG4gICAgICAgICAgcmV0dXJuIHNlbGYuaW5kZXhPZihlbGVtKSA9PT0gcG9zO1xuICAgICAgICB9KS5qb2luKCcgJylcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBvbmUgb3IgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZiBjbGFzc2VzIGZyb20gdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Z1xuICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZXMgQSB3aGl0ZSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZiBjbGFzcyBuYW1lc1xuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5Tdmd9IFRoZSB3cmFwcGVyIG9mIHRoZSBjdXJyZW50IGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKG5hbWVzKSB7XG4gICAgdmFyIHJlbW92ZWRDbGFzc2VzID0gbmFtZXMudHJpbSgpLnNwbGl0KC9cXHMrLyk7XG5cbiAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLmNsYXNzZXModGhpcy5fbm9kZSkuZmlsdGVyKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHJldHVybiByZW1vdmVkQ2xhc3Nlcy5pbmRleE9mKG5hbWUpID09PSAtMTtcbiAgICB9KS5qb2luKCcgJykpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgY2xhc3NlcyBmcm9tIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmdcbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnfSBUaGUgd3JhcHBlciBvZiB0aGUgY3VycmVudCBlbGVtZW50XG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVBbGxDbGFzc2VzKCkge1xuICAgIHRoaXMuX25vZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICcnKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBlbGVtZW50IGhlaWdodCB1c2luZyBgZ2V0Qm91bmRpbmdDbGllbnRSZWN0YFxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnXG4gICAqIEByZXR1cm4ge051bWJlcn0gVGhlIGVsZW1lbnRzIGhlaWdodCBpbiBwaXhlbHNcbiAgICovXG4gIGZ1bmN0aW9uIGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGVsZW1lbnQgd2lkdGggdXNpbmcgYGdldEJvdW5kaW5nQ2xpZW50UmVjdGBcbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkNvcmVcbiAgICogQHJldHVybiB7TnVtYmVyfSBUaGUgZWxlbWVudHMgd2lkdGggaW4gcGl4ZWxzXG4gICAqL1xuICBmdW5jdGlvbiB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYW5pbWF0ZSBmdW5jdGlvbiBsZXRzIHlvdSBhbmltYXRlIHRoZSBjdXJyZW50IGVsZW1lbnQgd2l0aCBTTUlMIGFuaW1hdGlvbnMuIFlvdSBjYW4gYWRkIGFuaW1hdGlvbnMgZm9yIG11bHRpcGxlIGF0dHJpYnV0ZXMgYXQgdGhlIHNhbWUgdGltZSBieSB1c2luZyBhbiBhbmltYXRpb24gZGVmaW5pdGlvbiBvYmplY3QuIFRoaXMgb2JqZWN0IHNob3VsZCBjb250YWluIFNNSUwgYW5pbWF0aW9uIGF0dHJpYnV0ZXMuIFBsZWFzZSByZWZlciB0byBodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcvYW5pbWF0ZS5odG1sIGZvciBhIGRldGFpbGVkIHNwZWNpZmljYXRpb24gYWJvdXQgdGhlIGF2YWlsYWJsZSBhbmltYXRpb24gYXR0cmlidXRlcy4gQWRkaXRpb25hbGx5IGFuIGVhc2luZyBwcm9wZXJ0eSBjYW4gYmUgcGFzc2VkIGluIHRoZSBhbmltYXRpb24gZGVmaW5pdGlvbiBvYmplY3QuIFRoaXMgY2FuIGJlIGEgc3RyaW5nIHdpdGggYSBuYW1lIG9mIGFuIGVhc2luZyBmdW5jdGlvbiBpbiBgQ2hhcnRpc3QuU3ZnLkVhc2luZ2Agb3IgYW4gYXJyYXkgd2l0aCBmb3VyIG51bWJlcnMgc3BlY2lmeWluZyBhIGN1YmljIELDqXppZXIgY3VydmUuXG4gICAqICoqQW4gYW5pbWF0aW9ucyBvYmplY3QgY291bGQgbG9vayBsaWtlIHRoaXM6KipcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiBlbGVtZW50LmFuaW1hdGUoe1xuICAgKiAgIG9wYWNpdHk6IHtcbiAgICogICAgIGR1cjogMTAwMCxcbiAgICogICAgIGZyb206IDAsXG4gICAqICAgICB0bzogMVxuICAgKiAgIH0sXG4gICAqICAgeDE6IHtcbiAgICogICAgIGR1cjogJzEwMDBtcycsXG4gICAqICAgICBmcm9tOiAxMDAsXG4gICAqICAgICB0bzogMjAwLFxuICAgKiAgICAgZWFzaW5nOiAnZWFzZU91dFF1YXJ0J1xuICAgKiAgIH0sXG4gICAqICAgeTE6IHtcbiAgICogICAgIGR1cjogJzJzJyxcbiAgICogICAgIGZyb206IDAsXG4gICAqICAgICB0bzogMTAwXG4gICAqICAgfVxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqICoqQXV0b21hdGljIHVuaXQgY29udmVyc2lvbioqXG4gICAqIEZvciB0aGUgYGR1cmAgYW5kIHRoZSBgYmVnaW5gIGFuaW1hdGUgYXR0cmlidXRlIHlvdSBjYW4gYWxzbyBvbWl0IGEgdW5pdCBieSBwYXNzaW5nIGEgbnVtYmVyLiBUaGUgbnVtYmVyIHdpbGwgYXV0b21hdGljYWxseSBiZSBjb252ZXJ0ZWQgdG8gbWlsbGkgc2Vjb25kcy5cbiAgICogKipHdWlkZWQgbW9kZSoqXG4gICAqIFRoZSBkZWZhdWx0IGJlaGF2aW9yIG9mIFNNSUwgYW5pbWF0aW9ucyB3aXRoIG9mZnNldCB1c2luZyB0aGUgYGJlZ2luYCBhdHRyaWJ1dGUgaXMgdGhhdCB0aGUgYXR0cmlidXRlIHdpbGwga2VlcCBpdCdzIG9yaWdpbmFsIHZhbHVlIHVudGlsIHRoZSBhbmltYXRpb24gc3RhcnRzLiBNb3N0bHkgdGhpcyBiZWhhdmlvciBpcyBub3QgZGVzaXJlZCBhcyB5b3UnZCBsaWtlIHRvIGhhdmUgeW91ciBlbGVtZW50IGF0dHJpYnV0ZXMgYWxyZWFkeSBpbml0aWFsaXplZCB3aXRoIHRoZSBhbmltYXRpb24gYGZyb21gIHZhbHVlIGV2ZW4gYmVmb3JlIHRoZSBhbmltYXRpb24gc3RhcnRzLiBBbHNvIGlmIHlvdSBkb24ndCBzcGVjaWZ5IGBmaWxsPVwiZnJlZXplXCJgIG9uIGFuIGFuaW1hdGUgZWxlbWVudCBvciBpZiB5b3UgZGVsZXRlIHRoZSBhbmltYXRpb24gYWZ0ZXIgaXQncyBkb25lICh3aGljaCBpcyBkb25lIGluIGd1aWRlZCBtb2RlKSB0aGUgYXR0cmlidXRlIHdpbGwgc3dpdGNoIGJhY2sgdG8gdGhlIGluaXRpYWwgdmFsdWUuIFRoaXMgYmVoYXZpb3IgaXMgYWxzbyBub3QgZGVzaXJlZCB3aGVuIHBlcmZvcm1pbmcgc2ltcGxlIG9uZS10aW1lIGFuaW1hdGlvbnMuIEZvciBvbmUtdGltZSBhbmltYXRpb25zIHlvdSdkIHdhbnQgdG8gdHJpZ2dlciBhbmltYXRpb25zIGltbWVkaWF0ZWx5IGluc3RlYWQgb2YgcmVsYXRpdmUgdG8gdGhlIGRvY3VtZW50IGJlZ2luIHRpbWUuIFRoYXQncyB3aHkgaW4gZ3VpZGVkIG1vZGUgQ2hhcnRpc3QuU3ZnIHdpbGwgYWxzbyB1c2UgdGhlIGBiZWdpbmAgcHJvcGVydHkgdG8gc2NoZWR1bGUgYSB0aW1lb3V0IGFuZCBtYW51YWxseSBzdGFydCB0aGUgYW5pbWF0aW9uIGFmdGVyIHRoZSB0aW1lb3V0LiBJZiB5b3UncmUgdXNpbmcgbXVsdGlwbGUgU01JTCBkZWZpbml0aW9uIG9iamVjdHMgZm9yIGFuIGF0dHJpYnV0ZSAoaW4gYW4gYXJyYXkpLCBndWlkZWQgbW9kZSB3aWxsIGJlIGRpc2FibGVkIGZvciB0aGlzIGF0dHJpYnV0ZSwgZXZlbiBpZiB5b3UgZXhwbGljaXRseSBlbmFibGVkIGl0LlxuICAgKiBJZiBndWlkZWQgbW9kZSBpcyBlbmFibGVkIHRoZSBmb2xsb3dpbmcgYmVoYXZpb3IgaXMgYWRkZWQ6XG4gICAqIC0gQmVmb3JlIHRoZSBhbmltYXRpb24gc3RhcnRzIChldmVuIHdoZW4gZGVsYXllZCB3aXRoIGBiZWdpbmApIHRoZSBhbmltYXRlZCBhdHRyaWJ1dGUgd2lsbCBiZSBzZXQgYWxyZWFkeSB0byB0aGUgYGZyb21gIHZhbHVlIG9mIHRoZSBhbmltYXRpb25cbiAgICogLSBgYmVnaW5gIGlzIGV4cGxpY2l0bHkgc2V0IHRvIGBpbmRlZmluaXRlYCBzbyBpdCBjYW4gYmUgc3RhcnRlZCBtYW51YWxseSB3aXRob3V0IHJlbHlpbmcgb24gZG9jdW1lbnQgYmVnaW4gdGltZSAoY3JlYXRpb24pXG4gICAqIC0gVGhlIGFuaW1hdGUgZWxlbWVudCB3aWxsIGJlIGZvcmNlZCB0byB1c2UgYGZpbGw9XCJmcmVlemVcImBcbiAgICogLSBUaGUgYW5pbWF0aW9uIHdpbGwgYmUgdHJpZ2dlcmVkIHdpdGggYGJlZ2luRWxlbWVudCgpYCBpbiBhIHRpbWVvdXQgd2hlcmUgYGJlZ2luYCBvZiB0aGUgZGVmaW5pdGlvbiBvYmplY3QgaXMgaW50ZXJwcmV0ZWQgaW4gbWlsbGkgc2Vjb25kcy4gSWYgbm8gYGJlZ2luYCB3YXMgc3BlY2lmaWVkIHRoZSB0aW1lb3V0IGlzIHRyaWdnZXJlZCBpbW1lZGlhdGVseS5cbiAgICogLSBBZnRlciB0aGUgYW5pbWF0aW9uIHRoZSBlbGVtZW50IGF0dHJpYnV0ZSB2YWx1ZSB3aWxsIGJlIHNldCB0byB0aGUgYHRvYCB2YWx1ZSBvZiB0aGUgYW5pbWF0aW9uXG4gICAqIC0gVGhlIGFuaW1hdGUgZWxlbWVudCBpcyBkZWxldGVkIGZyb20gdGhlIERPTVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhbmltYXRpb25zIEFuIGFuaW1hdGlvbnMgb2JqZWN0IHdoZXJlIHRoZSBwcm9wZXJ0eSBrZXlzIGFyZSB0aGUgYXR0cmlidXRlcyB5b3UnZCBsaWtlIHRvIGFuaW1hdGUuIFRoZSBwcm9wZXJ0aWVzIHNob3VsZCBiZSBvYmplY3RzIGFnYWluIHRoYXQgY29udGFpbiB0aGUgU01JTCBhbmltYXRpb24gYXR0cmlidXRlcyAodXN1YWxseSBiZWdpbiwgZHVyLCBmcm9tLCBhbmQgdG8pLiBUaGUgcHJvcGVydHkgYmVnaW4gYW5kIGR1ciBpcyBhdXRvIGNvbnZlcnRlZCAoc2VlIEF1dG9tYXRpYyB1bml0IGNvbnZlcnNpb24pLiBZb3UgY2FuIGFsc28gc2NoZWR1bGUgbXVsdGlwbGUgYW5pbWF0aW9ucyBmb3IgdGhlIHNhbWUgYXR0cmlidXRlIGJ5IHBhc3NpbmcgYW4gQXJyYXkgb2YgU01JTCBkZWZpbml0aW9uIG9iamVjdHMuIEF0dHJpYnV0ZXMgdGhhdCBjb250YWluIGFuIGFycmF5IG9mIFNNSUwgZGVmaW5pdGlvbiBvYmplY3RzIHdpbGwgbm90IGJlIGV4ZWN1dGVkIGluIGd1aWRlZCBtb2RlLlxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGd1aWRlZCBTcGVjaWZ5IGlmIGd1aWRlZCBtb2RlIHNob3VsZCBiZSBhY3RpdmF0ZWQgZm9yIHRoaXMgYW5pbWF0aW9uIChzZWUgR3VpZGVkIG1vZGUpLiBJZiBub3Qgb3RoZXJ3aXNlIHNwZWNpZmllZCwgZ3VpZGVkIG1vZGUgd2lsbCBiZSBhY3RpdmF0ZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudEVtaXR0ZXIgSWYgc3BlY2lmaWVkLCB0aGlzIGV2ZW50IGVtaXR0ZXIgd2lsbCBiZSBub3RpZmllZCB3aGVuIGFuIGFuaW1hdGlvbiBzdGFydHMgb3IgZW5kcy5cbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnfSBUaGUgY3VycmVudCBlbGVtZW50IHdoZXJlIHRoZSBhbmltYXRpb24gd2FzIGFkZGVkXG4gICAqL1xuICBmdW5jdGlvbiBhbmltYXRlKGFuaW1hdGlvbnMsIGd1aWRlZCwgZXZlbnRFbWl0dGVyKSB7XG4gICAgaWYoZ3VpZGVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGd1aWRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoYW5pbWF0aW9ucykuZm9yRWFjaChmdW5jdGlvbiBjcmVhdGVBbmltYXRlRm9yQXR0cmlidXRlcyhhdHRyaWJ1dGUpIHtcblxuICAgICAgZnVuY3Rpb24gY3JlYXRlQW5pbWF0ZShhbmltYXRpb25EZWZpbml0aW9uLCBndWlkZWQpIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZVByb3BlcnRpZXMgPSB7fSxcbiAgICAgICAgICBhbmltYXRlLFxuICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgZWFzaW5nO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGFuIGVhc2luZyBpcyBzcGVjaWZpZWQgaW4gdGhlIGRlZmluaXRpb24gb2JqZWN0IGFuZCBkZWxldGUgaXQgZnJvbSB0aGUgb2JqZWN0IGFzIGl0IHdpbGwgbm90XG4gICAgICAgIC8vIGJlIHBhcnQgb2YgdGhlIGFuaW1hdGUgZWxlbWVudCBhdHRyaWJ1dGVzLlxuICAgICAgICBpZihhbmltYXRpb25EZWZpbml0aW9uLmVhc2luZykge1xuICAgICAgICAgIC8vIElmIGFscmVhZHkgYW4gZWFzaW5nIELDqXppZXIgY3VydmUgYXJyYXkgd2UgdGFrZSBpdCBvciB3ZSBsb29rdXAgYSBlYXNpbmcgYXJyYXkgaW4gdGhlIEVhc2luZyBvYmplY3RcbiAgICAgICAgICBlYXNpbmcgPSBhbmltYXRpb25EZWZpbml0aW9uLmVhc2luZyBpbnN0YW5jZW9mIEFycmF5ID9cbiAgICAgICAgICAgIGFuaW1hdGlvbkRlZmluaXRpb24uZWFzaW5nIDpcbiAgICAgICAgICAgIENoYXJ0aXN0LlN2Zy5FYXNpbmdbYW5pbWF0aW9uRGVmaW5pdGlvbi5lYXNpbmddO1xuICAgICAgICAgIGRlbGV0ZSBhbmltYXRpb25EZWZpbml0aW9uLmVhc2luZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIG51bWVyaWMgZHVyIG9yIGJlZ2luIHdhcyBwcm92aWRlZCB3ZSBhc3N1bWUgbWlsbGkgc2Vjb25kc1xuICAgICAgICBhbmltYXRpb25EZWZpbml0aW9uLmJlZ2luID0gQ2hhcnRpc3QuZW5zdXJlVW5pdChhbmltYXRpb25EZWZpbml0aW9uLmJlZ2luLCAnbXMnKTtcbiAgICAgICAgYW5pbWF0aW9uRGVmaW5pdGlvbi5kdXIgPSBDaGFydGlzdC5lbnN1cmVVbml0KGFuaW1hdGlvbkRlZmluaXRpb24uZHVyLCAnbXMnKTtcblxuICAgICAgICBpZihlYXNpbmcpIHtcbiAgICAgICAgICBhbmltYXRpb25EZWZpbml0aW9uLmNhbGNNb2RlID0gJ3NwbGluZSc7XG4gICAgICAgICAgYW5pbWF0aW9uRGVmaW5pdGlvbi5rZXlTcGxpbmVzID0gZWFzaW5nLmpvaW4oJyAnKTtcbiAgICAgICAgICBhbmltYXRpb25EZWZpbml0aW9uLmtleVRpbWVzID0gJzA7MSc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGRpbmcgXCJmaWxsOiBmcmVlemVcIiBpZiB3ZSBhcmUgaW4gZ3VpZGVkIG1vZGUgYW5kIHNldCBpbml0aWFsIGF0dHJpYnV0ZSB2YWx1ZXNcbiAgICAgICAgaWYoZ3VpZGVkKSB7XG4gICAgICAgICAgYW5pbWF0aW9uRGVmaW5pdGlvbi5maWxsID0gJ2ZyZWV6ZSc7XG4gICAgICAgICAgLy8gQW5pbWF0ZWQgcHJvcGVydHkgb24gb3VyIGVsZW1lbnQgc2hvdWxkIGFscmVhZHkgYmUgc2V0IHRvIHRoZSBhbmltYXRpb24gZnJvbSB2YWx1ZSBpbiBndWlkZWQgbW9kZVxuICAgICAgICAgIGF0dHJpYnV0ZVByb3BlcnRpZXNbYXR0cmlidXRlXSA9IGFuaW1hdGlvbkRlZmluaXRpb24uZnJvbTtcbiAgICAgICAgICB0aGlzLmF0dHIoYXR0cmlidXRlUHJvcGVydGllcyk7XG5cbiAgICAgICAgICAvLyBJbiBndWlkZWQgbW9kZSB3ZSBhbHNvIHNldCBiZWdpbiB0byBpbmRlZmluaXRlIHNvIHdlIGNhbiB0cmlnZ2VyIHRoZSBzdGFydCBtYW51YWxseSBhbmQgcHV0IHRoZSBiZWdpblxuICAgICAgICAgIC8vIHdoaWNoIG5lZWRzIHRvIGJlIGluIG1zIGFzaWRlXG4gICAgICAgICAgdGltZW91dCA9IENoYXJ0aXN0LnF1YW50aXR5KGFuaW1hdGlvbkRlZmluaXRpb24uYmVnaW4gfHwgMCkudmFsdWU7XG4gICAgICAgICAgYW5pbWF0aW9uRGVmaW5pdGlvbi5iZWdpbiA9ICdpbmRlZmluaXRlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW1hdGUgPSB0aGlzLmVsZW0oJ2FuaW1hdGUnLCBDaGFydGlzdC5leHRlbmQoe1xuICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZVxuICAgICAgICB9LCBhbmltYXRpb25EZWZpbml0aW9uKSk7XG5cbiAgICAgICAgaWYoZ3VpZGVkKSB7XG4gICAgICAgICAgLy8gSWYgZ3VpZGVkIHdlIHRha2UgdGhlIHZhbHVlIHRoYXQgd2FzIHB1dCBhc2lkZSBpbiB0aW1lb3V0IGFuZCB0cmlnZ2VyIHRoZSBhbmltYXRpb24gbWFudWFsbHkgd2l0aCBhIHRpbWVvdXRcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gSWYgYmVnaW5FbGVtZW50IGZhaWxzIHdlIHNldCB0aGUgYW5pbWF0ZWQgYXR0cmlidXRlIHRvIHRoZSBlbmQgcG9zaXRpb24gYW5kIHJlbW92ZSB0aGUgYW5pbWF0ZSBlbGVtZW50XG4gICAgICAgICAgICAvLyBUaGlzIGhhcHBlbnMgaWYgdGhlIFNNSUwgRWxlbWVudFRpbWVDb250cm9sIGludGVyZmFjZSBpcyBub3Qgc3VwcG9ydGVkIG9yIGFueSBvdGhlciBwcm9ibGVtcyBvY2N1cmVkIGluXG4gICAgICAgICAgICAvLyB0aGUgYnJvd3Nlci4gKEN1cnJlbnRseSBGRiAzNCBkb2VzIG5vdCBzdXBwb3J0IGFuaW1hdGUgZWxlbWVudHMgaW4gZm9yZWlnbk9iamVjdHMpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBhbmltYXRlLl9ub2RlLmJlZ2luRWxlbWVudCgpO1xuICAgICAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICAgICAgLy8gU2V0IGFuaW1hdGVkIGF0dHJpYnV0ZSB0byBjdXJyZW50IGFuaW1hdGVkIHZhbHVlXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZVByb3BlcnRpZXNbYXR0cmlidXRlXSA9IGFuaW1hdGlvbkRlZmluaXRpb24udG87XG4gICAgICAgICAgICAgIHRoaXMuYXR0cihhdHRyaWJ1dGVQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBhbmltYXRlIGVsZW1lbnQgYXMgaXQncyBubyBsb25nZXIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgYW5pbWF0ZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LmJpbmQodGhpcyksIHRpbWVvdXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoZXZlbnRFbWl0dGVyKSB7XG4gICAgICAgICAgYW5pbWF0ZS5fbm9kZS5hZGRFdmVudExpc3RlbmVyKCdiZWdpbkV2ZW50JywgZnVuY3Rpb24gaGFuZGxlQmVnaW5FdmVudCgpIHtcbiAgICAgICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KCdhbmltYXRpb25CZWdpbicsIHtcbiAgICAgICAgICAgICAgZWxlbWVudDogdGhpcyxcbiAgICAgICAgICAgICAgYW5pbWF0ZTogYW5pbWF0ZS5fbm9kZSxcbiAgICAgICAgICAgICAgcGFyYW1zOiBhbmltYXRpb25EZWZpbml0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgYW5pbWF0ZS5fbm9kZS5hZGRFdmVudExpc3RlbmVyKCdlbmRFdmVudCcsIGZ1bmN0aW9uIGhhbmRsZUVuZEV2ZW50KCkge1xuICAgICAgICAgIGlmKGV2ZW50RW1pdHRlcikge1xuICAgICAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoJ2FuaW1hdGlvbkVuZCcsIHtcbiAgICAgICAgICAgICAgZWxlbWVudDogdGhpcyxcbiAgICAgICAgICAgICAgYW5pbWF0ZTogYW5pbWF0ZS5fbm9kZSxcbiAgICAgICAgICAgICAgcGFyYW1zOiBhbmltYXRpb25EZWZpbml0aW9uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZihndWlkZWQpIHtcbiAgICAgICAgICAgIC8vIFNldCBhbmltYXRlZCBhdHRyaWJ1dGUgdG8gY3VycmVudCBhbmltYXRlZCB2YWx1ZVxuICAgICAgICAgICAgYXR0cmlidXRlUHJvcGVydGllc1thdHRyaWJ1dGVdID0gYW5pbWF0aW9uRGVmaW5pdGlvbi50bztcbiAgICAgICAgICAgIHRoaXMuYXR0cihhdHRyaWJ1dGVQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgYW5pbWF0ZSBlbGVtZW50IGFzIGl0J3Mgbm8gbG9uZ2VyIHJlcXVpcmVkXG4gICAgICAgICAgICBhbmltYXRlLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgY3VycmVudCBhdHRyaWJ1dGUgaXMgYW4gYXJyYXkgb2YgZGVmaW5pdGlvbiBvYmplY3RzIHdlIGNyZWF0ZSBhbiBhbmltYXRlIGZvciBlYWNoIGFuZCBkaXNhYmxlIGd1aWRlZCBtb2RlXG4gICAgICBpZihhbmltYXRpb25zW2F0dHJpYnV0ZV0gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBhbmltYXRpb25zW2F0dHJpYnV0ZV0uZm9yRWFjaChmdW5jdGlvbihhbmltYXRpb25EZWZpbml0aW9uKSB7XG4gICAgICAgICAgY3JlYXRlQW5pbWF0ZS5iaW5kKHRoaXMpKGFuaW1hdGlvbkRlZmluaXRpb24sIGZhbHNlKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNyZWF0ZUFuaW1hdGUuYmluZCh0aGlzKShhbmltYXRpb25zW2F0dHJpYnV0ZV0sIGd1aWRlZCk7XG4gICAgICB9XG5cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBDaGFydGlzdC5TdmcgPSBDaGFydGlzdC5DbGFzcy5leHRlbmQoe1xuICAgIGNvbnN0cnVjdG9yOiBTdmcsXG4gICAgYXR0cjogYXR0cixcbiAgICBlbGVtOiBlbGVtLFxuICAgIHBhcmVudDogcGFyZW50LFxuICAgIHJvb3Q6IHJvb3QsXG4gICAgcXVlcnlTZWxlY3RvcjogcXVlcnlTZWxlY3RvcixcbiAgICBxdWVyeVNlbGVjdG9yQWxsOiBxdWVyeVNlbGVjdG9yQWxsLFxuICAgIGdldE5vZGU6IGdldE5vZGUsXG4gICAgZm9yZWlnbk9iamVjdDogZm9yZWlnbk9iamVjdCxcbiAgICB0ZXh0OiB0ZXh0LFxuICAgIGVtcHR5OiBlbXB0eSxcbiAgICByZW1vdmU6IHJlbW92ZSxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGFwcGVuZDogYXBwZW5kLFxuICAgIGNsYXNzZXM6IGNsYXNzZXMsXG4gICAgYWRkQ2xhc3M6IGFkZENsYXNzLFxuICAgIHJlbW92ZUNsYXNzOiByZW1vdmVDbGFzcyxcbiAgICByZW1vdmVBbGxDbGFzc2VzOiByZW1vdmVBbGxDbGFzc2VzLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBhbmltYXRlOiBhbmltYXRlXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBjaGVja3MgZm9yIHN1cHBvcnQgb2YgYSBnaXZlbiBTVkcgZmVhdHVyZSBsaWtlIEV4dGVuc2liaWxpdHksIFNWRy1hbmltYXRpb24gb3IgdGhlIGxpa2UuIENoZWNrIGh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUgZm9yIGEgZGV0YWlsZWQgbGlzdC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Z1xuICAgKiBAcGFyYW0ge1N0cmluZ30gZmVhdHVyZSBUaGUgU1ZHIDEuMSBmZWF0dXJlIHRoYXQgc2hvdWxkIGJlIGNoZWNrZWQgZm9yIHN1cHBvcnQuXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IFRydWUgb2YgZmFsc2UgaWYgdGhlIGZlYXR1cmUgaXMgc3VwcG9ydGVkIG9yIG5vdFxuICAgKi9cbiAgQ2hhcnRpc3QuU3ZnLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24oZmVhdHVyZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKCdodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlIycgKyBmZWF0dXJlLCAnMS4xJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgT2JqZWN0IGNvbnRhaW5zIHNvbWUgc3RhbmRhcmQgZWFzaW5nIGN1YmljIGJlemllciBjdXJ2ZXMuIFRoZW4gY2FuIGJlIHVzZWQgd2l0aCB0aGVpciBuYW1lIGluIHRoZSBgQ2hhcnRpc3QuU3ZnLmFuaW1hdGVgLiBZb3UgY2FuIGFsc28gZXh0ZW5kIHRoZSBsaXN0IGFuZCB1c2UgeW91ciBvd24gbmFtZSBpbiB0aGUgYGFuaW1hdGVgIGZ1bmN0aW9uLiBDbGljayB0aGUgc2hvdyBjb2RlIGJ1dHRvbiB0byBzZWUgdGhlIGF2YWlsYWJsZSBiZXppZXIgZnVuY3Rpb25zLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnXG4gICAqL1xuICB2YXIgZWFzaW5nQ3ViaWNCZXppZXJzID0ge1xuICAgIGVhc2VJblNpbmU6IFswLjQ3LCAwLCAwLjc0NSwgMC43MTVdLFxuICAgIGVhc2VPdXRTaW5lOiBbMC4zOSwgMC41NzUsIDAuNTY1LCAxXSxcbiAgICBlYXNlSW5PdXRTaW5lOiBbMC40NDUsIDAuMDUsIDAuNTUsIDAuOTVdLFxuICAgIGVhc2VJblF1YWQ6IFswLjU1LCAwLjA4NSwgMC42OCwgMC41M10sXG4gICAgZWFzZU91dFF1YWQ6IFswLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0XSxcbiAgICBlYXNlSW5PdXRRdWFkOiBbMC40NTUsIDAuMDMsIDAuNTE1LCAwLjk1NV0sXG4gICAgZWFzZUluQ3ViaWM6IFswLjU1LCAwLjA1NSwgMC42NzUsIDAuMTldLFxuICAgIGVhc2VPdXRDdWJpYzogWzAuMjE1LCAwLjYxLCAwLjM1NSwgMV0sXG4gICAgZWFzZUluT3V0Q3ViaWM6IFswLjY0NSwgMC4wNDUsIDAuMzU1LCAxXSxcbiAgICBlYXNlSW5RdWFydDogWzAuODk1LCAwLjAzLCAwLjY4NSwgMC4yMl0sXG4gICAgZWFzZU91dFF1YXJ0OiBbMC4xNjUsIDAuODQsIDAuNDQsIDFdLFxuICAgIGVhc2VJbk91dFF1YXJ0OiBbMC43NywgMCwgMC4xNzUsIDFdLFxuICAgIGVhc2VJblF1aW50OiBbMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2XSxcbiAgICBlYXNlT3V0UXVpbnQ6IFswLjIzLCAxLCAwLjMyLCAxXSxcbiAgICBlYXNlSW5PdXRRdWludDogWzAuODYsIDAsIDAuMDcsIDFdLFxuICAgIGVhc2VJbkV4cG86IFswLjk1LCAwLjA1LCAwLjc5NSwgMC4wMzVdLFxuICAgIGVhc2VPdXRFeHBvOiBbMC4xOSwgMSwgMC4yMiwgMV0sXG4gICAgZWFzZUluT3V0RXhwbzogWzEsIDAsIDAsIDFdLFxuICAgIGVhc2VJbkNpcmM6IFswLjYsIDAuMDQsIDAuOTgsIDAuMzM1XSxcbiAgICBlYXNlT3V0Q2lyYzogWzAuMDc1LCAwLjgyLCAwLjE2NSwgMV0sXG4gICAgZWFzZUluT3V0Q2lyYzogWzAuNzg1LCAwLjEzNSwgMC4xNSwgMC44Nl0sXG4gICAgZWFzZUluQmFjazogWzAuNiwgLTAuMjgsIDAuNzM1LCAwLjA0NV0sXG4gICAgZWFzZU91dEJhY2s6IFswLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1XSxcbiAgICBlYXNlSW5PdXRCYWNrOiBbMC42OCwgLTAuNTUsIDAuMjY1LCAxLjU1XVxuICB9O1xuXG4gIENoYXJ0aXN0LlN2Zy5FYXNpbmcgPSBlYXNpbmdDdWJpY0JlemllcnM7XG5cbiAgLyoqXG4gICAqIFRoaXMgaGVscGVyIGNsYXNzIGlzIHRvIHdyYXAgbXVsdGlwbGUgYENoYXJ0aXN0LlN2Z2AgZWxlbWVudHMgaW50byBhIGxpc3Qgd2hlcmUgeW91IGNhbiBjYWxsIHRoZSBgQ2hhcnRpc3QuU3ZnYCBmdW5jdGlvbnMgb24gYWxsIGVsZW1lbnRzIGluIHRoZSBsaXN0IHdpdGggb25lIGNhbGwuIFRoaXMgaXMgaGVscGZ1bCB3aGVuIHlvdSdkIGxpa2UgdG8gcGVyZm9ybSBjYWxscyB3aXRoIGBDaGFydGlzdC5TdmdgIG9uIG11bHRpcGxlIGVsZW1lbnRzLlxuICAgKiBBbiBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGlzIGFsc28gcmV0dXJuZWQgYnkgYENoYXJ0aXN0LlN2Zy5xdWVyeVNlbGVjdG9yQWxsYC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Z1xuICAgKiBAcGFyYW0ge0FycmF5PE5vZGU+fE5vZGVMaXN0fSBub2RlTGlzdCBBbiBBcnJheSBvZiBTVkcgRE9NIG5vZGVzIG9yIGEgU1ZHIERPTSBOb2RlTGlzdCAoYXMgcmV0dXJuZWQgYnkgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbClcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqL1xuICBmdW5jdGlvbiBTdmdMaXN0KG5vZGVMaXN0KSB7XG4gICAgdmFyIGxpc3QgPSB0aGlzO1xuXG4gICAgdGhpcy5zdmdFbGVtZW50cyA9IFtdO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBub2RlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zdmdFbGVtZW50cy5wdXNoKG5ldyBDaGFydGlzdC5Tdmcobm9kZUxpc3RbaV0pKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgZGVsZWdhdGlvbiBtZXRob2RzIGZvciBDaGFydGlzdC5TdmdcbiAgICBPYmplY3Qua2V5cyhDaGFydGlzdC5TdmcucHJvdG90eXBlKS5maWx0ZXIoZnVuY3Rpb24ocHJvdG90eXBlUHJvcGVydHkpIHtcbiAgICAgIHJldHVybiBbJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAncGFyZW50JyxcbiAgICAgICAgICAncXVlcnlTZWxlY3RvcicsXG4gICAgICAgICAgJ3F1ZXJ5U2VsZWN0b3JBbGwnLFxuICAgICAgICAgICdyZXBsYWNlJyxcbiAgICAgICAgICAnYXBwZW5kJyxcbiAgICAgICAgICAnY2xhc3NlcycsXG4gICAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgICAgJ3dpZHRoJ10uaW5kZXhPZihwcm90b3R5cGVQcm9wZXJ0eSkgPT09IC0xO1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24ocHJvdG90eXBlUHJvcGVydHkpIHtcbiAgICAgIGxpc3RbcHJvdG90eXBlUHJvcGVydHldID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcbiAgICAgICAgbGlzdC5zdmdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICBDaGFydGlzdC5TdmcucHJvdG90eXBlW3Byb3RvdHlwZVByb3BlcnR5XS5hcHBseShlbGVtZW50LCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIENoYXJ0aXN0LlN2Zy5MaXN0ID0gQ2hhcnRpc3QuQ2xhc3MuZXh0ZW5kKHtcbiAgICBjb25zdHJ1Y3RvcjogU3ZnTGlzdFxuICB9KTtcbn0od2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpKTtcbjsvKipcbiAqIENoYXJ0aXN0IFNWRyBwYXRoIG1vZHVsZSBmb3IgU1ZHIHBhdGggZGVzY3JpcHRpb24gY3JlYXRpb24gYW5kIG1vZGlmaWNhdGlvbi5cbiAqXG4gKiBAbW9kdWxlIENoYXJ0aXN0LlN2Zy5QYXRoXG4gKi9cbi8qIGdsb2JhbCBDaGFydGlzdCAqL1xuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsIENoYXJ0aXN0KSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogQ29udGFpbnMgdGhlIGRlc2NyaXB0b3JzIG9mIHN1cHBvcnRlZCBlbGVtZW50IHR5cGVzIGluIGEgU1ZHIHBhdGguIEN1cnJlbnRseSBvbmx5IG1vdmUsIGxpbmUgYW5kIGN1cnZlIGFyZSBzdXBwb3J0ZWQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmcuUGF0aFxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIGVsZW1lbnREZXNjcmlwdGlvbnMgPSB7XG4gICAgbTogWyd4JywgJ3knXSxcbiAgICBsOiBbJ3gnLCAneSddLFxuICAgIGM6IFsneDEnLCAneTEnLCAneDInLCAneTInLCAneCcsICd5J10sXG4gICAgYTogWydyeCcsICdyeScsICd4QXInLCAnbEFmJywgJ3NmJywgJ3gnLCAneSddXG4gIH07XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgb3B0aW9ucyBmb3IgbmV3bHkgY3JlYXRlZCBTVkcgcGF0aCBvYmplY3RzLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnLlBhdGhcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAvLyBUaGUgYWNjdXJhY3kgaW4gZGlnaXQgY291bnQgYWZ0ZXIgdGhlIGRlY2ltYWwgcG9pbnQuIFRoaXMgd2lsbCBiZSB1c2VkIHRvIHJvdW5kIG51bWJlcnMgaW4gdGhlIFNWRyBwYXRoLiBJZiB0aGlzIG9wdGlvbiBpcyBzZXQgdG8gZmFsc2UgdGhlbiBubyByb3VuZGluZyB3aWxsIGJlIHBlcmZvcm1lZC5cbiAgICBhY2N1cmFjeTogM1xuICB9O1xuXG4gIGZ1bmN0aW9uIGVsZW1lbnQoY29tbWFuZCwgcGFyYW1zLCBwYXRoRWxlbWVudHMsIHBvcywgcmVsYXRpdmUsIGRhdGEpIHtcbiAgICB2YXIgcGF0aEVsZW1lbnQgPSBDaGFydGlzdC5leHRlbmQoe1xuICAgICAgY29tbWFuZDogcmVsYXRpdmUgPyBjb21tYW5kLnRvTG93ZXJDYXNlKCkgOiBjb21tYW5kLnRvVXBwZXJDYXNlKClcbiAgICB9LCBwYXJhbXMsIGRhdGEgPyB7IGRhdGE6IGRhdGEgfSA6IHt9ICk7XG5cbiAgICBwYXRoRWxlbWVudHMuc3BsaWNlKHBvcywgMCwgcGF0aEVsZW1lbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9yRWFjaFBhcmFtKHBhdGhFbGVtZW50cywgY2IpIHtcbiAgICBwYXRoRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihwYXRoRWxlbWVudCwgcGF0aEVsZW1lbnRJbmRleCkge1xuICAgICAgZWxlbWVudERlc2NyaXB0aW9uc1twYXRoRWxlbWVudC5jb21tYW5kLnRvTG93ZXJDYXNlKCldLmZvckVhY2goZnVuY3Rpb24ocGFyYW1OYW1lLCBwYXJhbUluZGV4KSB7XG4gICAgICAgIGNiKHBhdGhFbGVtZW50LCBwYXJhbU5hbWUsIHBhdGhFbGVtZW50SW5kZXgsIHBhcmFtSW5kZXgsIHBhdGhFbGVtZW50cyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGNvbnN0cnVjdCBhIG5ldyBwYXRoIG9iamVjdC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Zy5QYXRoXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gY2xvc2UgSWYgc2V0IHRvIHRydWUgdGhlbiB0aGlzIHBhdGggd2lsbCBiZSBjbG9zZWQgd2hlbiBzdHJpbmdpZmllZCAod2l0aCBhIFogYXQgdGhlIGVuZClcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgT3B0aW9ucyBvYmplY3QgdGhhdCBvdmVycmlkZXMgdGhlIGRlZmF1bHQgb2JqZWN0cy4gU2VlIGRlZmF1bHQgb3B0aW9ucyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGZ1bmN0aW9uIFN2Z1BhdGgoY2xvc2UsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnBhdGhFbGVtZW50cyA9IFtdO1xuICAgIHRoaXMucG9zID0gMDtcbiAgICB0aGlzLmNsb3NlID0gY2xvc2U7XG4gICAgdGhpcy5vcHRpb25zID0gQ2hhcnRpc3QuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBvciBzZXRzIHRoZSBjdXJyZW50IHBvc2l0aW9uIChjdXJzb3IpIGluc2lkZSBvZiB0aGUgcGF0aC4gWW91IGNhbiBtb3ZlIGFyb3VuZCB0aGUgY3Vyc29yIGZyZWVseSBidXQgbGltaXRlZCB0byAwIG9yIHRoZSBjb3VudCBvZiBleGlzdGluZyBlbGVtZW50cy4gQWxsIG1vZGlmaWNhdGlvbnMgd2l0aCBlbGVtZW50IGZ1bmN0aW9ucyB3aWxsIGluc2VydCBuZXcgZWxlbWVudHMgYXQgdGhlIHBvc2l0aW9uIG9mIHRoaXMgY3Vyc29yLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnLlBhdGhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NdIElmIGEgbnVtYmVyIGlzIHBhc3NlZCB0aGVuIHRoZSBjdXJzb3IgaXMgc2V0IHRvIHRoaXMgcG9zaXRpb24gaW4gdGhlIHBhdGggZWxlbWVudCBhcnJheS5cbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnLlBhdGh8TnVtYmVyfSBJZiB0aGUgcG9zaXRpb24gcGFyYW1ldGVyIHdhcyBwYXNzZWQgdGhlbiB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYmUgdGhlIHBhdGggb2JqZWN0IGZvciBlYXN5IGNhbGwgY2hhaW5pbmcuIElmIG5vIHBvc2l0aW9uIHBhcmFtZXRlciB3YXMgcGFzc2VkIHRoZW4gdGhlIGN1cnJlbnQgcG9zaXRpb24gaXMgcmV0dXJuZWQuXG4gICAqL1xuICBmdW5jdGlvbiBwb3NpdGlvbihwb3MpIHtcbiAgICBpZihwb3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5wb3MgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0aGlzLnBhdGhFbGVtZW50cy5sZW5ndGgsIHBvcykpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnBvcztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBlbGVtZW50cyBmcm9tIHRoZSBwYXRoIHN0YXJ0aW5nIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnLlBhdGhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IE51bWJlciBvZiBwYXRoIGVsZW1lbnRzIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQgZnJvbSB0aGUgY3VycmVudCBwb3NpdGlvbi5cbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnLlBhdGh9IFRoZSBjdXJyZW50IHBhdGggb2JqZWN0IGZvciBlYXN5IGNhbGwgY2hhaW5pbmcuXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmUoY291bnQpIHtcbiAgICB0aGlzLnBhdGhFbGVtZW50cy5zcGxpY2UodGhpcy5wb3MsIGNvdW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyBmdW5jdGlvbiB0byBhZGQgYSBuZXcgbW92ZSBTVkcgcGF0aCBlbGVtZW50LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnLlBhdGhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHggVGhlIHggY29vcmRpbmF0ZSBmb3IgdGhlIG1vdmUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkgVGhlIHkgY29vcmRpbmF0ZSBmb3IgdGhlIG1vdmUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtCb29sZWFufSBbcmVsYXRpdmVdIElmIHNldCB0byB0cnVlIHRoZSBtb3ZlIGVsZW1lbnQgd2lsbCBiZSBjcmVhdGVkIHdpdGggcmVsYXRpdmUgY29vcmRpbmF0ZXMgKGxvd2VyY2FzZSBsZXR0ZXIpXG4gICAqIEBwYXJhbSB7Kn0gW2RhdGFdIEFueSBkYXRhIHRoYXQgc2hvdWxkIGJlIHN0b3JlZCB3aXRoIHRoZSBlbGVtZW50IG9iamVjdCB0aGF0IHdpbGwgYmUgYWNjZXNzaWJsZSBpbiBwYXRoRWxlbWVudFxuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5TdmcuUGF0aH0gVGhlIGN1cnJlbnQgcGF0aCBvYmplY3QgZm9yIGVhc3kgY2FsbCBjaGFpbmluZy5cbiAgICovXG4gIGZ1bmN0aW9uIG1vdmUoeCwgeSwgcmVsYXRpdmUsIGRhdGEpIHtcbiAgICBlbGVtZW50KCdNJywge1xuICAgICAgeDogK3gsXG4gICAgICB5OiAreVxuICAgIH0sIHRoaXMucGF0aEVsZW1lbnRzLCB0aGlzLnBvcysrLCByZWxhdGl2ZSwgZGF0YSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoaXMgZnVuY3Rpb24gdG8gYWRkIGEgbmV3IGxpbmUgU1ZHIHBhdGggZWxlbWVudC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Zy5QYXRoXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IFRoZSB4IGNvb3JkaW5hdGUgZm9yIHRoZSBsaW5lIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IFRoZSB5IGNvb3JkaW5hdGUgZm9yIHRoZSBsaW5lIGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlbGF0aXZlXSBJZiBzZXQgdG8gdHJ1ZSB0aGUgbGluZSBlbGVtZW50IHdpbGwgYmUgY3JlYXRlZCB3aXRoIHJlbGF0aXZlIGNvb3JkaW5hdGVzIChsb3dlcmNhc2UgbGV0dGVyKVxuICAgKiBAcGFyYW0geyp9IFtkYXRhXSBBbnkgZGF0YSB0aGF0IHNob3VsZCBiZSBzdG9yZWQgd2l0aCB0aGUgZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIGFjY2Vzc2libGUgaW4gcGF0aEVsZW1lbnRcbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnLlBhdGh9IFRoZSBjdXJyZW50IHBhdGggb2JqZWN0IGZvciBlYXN5IGNhbGwgY2hhaW5pbmcuXG4gICAqL1xuICBmdW5jdGlvbiBsaW5lKHgsIHksIHJlbGF0aXZlLCBkYXRhKSB7XG4gICAgZWxlbWVudCgnTCcsIHtcbiAgICAgIHg6ICt4LFxuICAgICAgeTogK3lcbiAgICB9LCB0aGlzLnBhdGhFbGVtZW50cywgdGhpcy5wb3MrKywgcmVsYXRpdmUsIGRhdGEpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGlzIGZ1bmN0aW9uIHRvIGFkZCBhIG5ldyBjdXJ2ZSBTVkcgcGF0aCBlbGVtZW50LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuU3ZnLlBhdGhcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHgxIFRoZSB4IGNvb3JkaW5hdGUgZm9yIHRoZSBmaXJzdCBjb250cm9sIHBvaW50IG9mIHRoZSBiZXppZXIgY3VydmUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5MSBUaGUgeSBjb29yZGluYXRlIGZvciB0aGUgZmlyc3QgY29udHJvbCBwb2ludCBvZiB0aGUgYmV6aWVyIGN1cnZlLlxuICAgKiBAcGFyYW0ge051bWJlcn0geDIgVGhlIHggY29vcmRpbmF0ZSBmb3IgdGhlIHNlY29uZCBjb250cm9sIHBvaW50IG9mIHRoZSBiZXppZXIgY3VydmUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5MiBUaGUgeSBjb29yZGluYXRlIGZvciB0aGUgc2Vjb25kIGNvbnRyb2wgcG9pbnQgb2YgdGhlIGJlemllciBjdXJ2ZS5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHggVGhlIHggY29vcmRpbmF0ZSBmb3IgdGhlIHRhcmdldCBwb2ludCBvZiB0aGUgY3VydmUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkgVGhlIHkgY29vcmRpbmF0ZSBmb3IgdGhlIHRhcmdldCBwb2ludCBvZiB0aGUgY3VydmUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtCb29sZWFufSBbcmVsYXRpdmVdIElmIHNldCB0byB0cnVlIHRoZSBjdXJ2ZSBlbGVtZW50IHdpbGwgYmUgY3JlYXRlZCB3aXRoIHJlbGF0aXZlIGNvb3JkaW5hdGVzIChsb3dlcmNhc2UgbGV0dGVyKVxuICAgKiBAcGFyYW0geyp9IFtkYXRhXSBBbnkgZGF0YSB0aGF0IHNob3VsZCBiZSBzdG9yZWQgd2l0aCB0aGUgZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIGFjY2Vzc2libGUgaW4gcGF0aEVsZW1lbnRcbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnLlBhdGh9IFRoZSBjdXJyZW50IHBhdGggb2JqZWN0IGZvciBlYXN5IGNhbGwgY2hhaW5pbmcuXG4gICAqL1xuICBmdW5jdGlvbiBjdXJ2ZSh4MSwgeTEsIHgyLCB5MiwgeCwgeSwgcmVsYXRpdmUsIGRhdGEpIHtcbiAgICBlbGVtZW50KCdDJywge1xuICAgICAgeDE6ICt4MSxcbiAgICAgIHkxOiAreTEsXG4gICAgICB4MjogK3gyLFxuICAgICAgeTI6ICt5MixcbiAgICAgIHg6ICt4LFxuICAgICAgeTogK3lcbiAgICB9LCB0aGlzLnBhdGhFbGVtZW50cywgdGhpcy5wb3MrKywgcmVsYXRpdmUsIGRhdGEpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGlzIGZ1bmN0aW9uIHRvIGFkZCBhIG5ldyBub24tYmV6aWVyIGN1cnZlIFNWRyBwYXRoIGVsZW1lbnQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmcuUGF0aFxuICAgKiBAcGFyYW0ge051bWJlcn0gcnggVGhlIHJhZGl1cyB0byBiZSB1c2VkIGZvciB0aGUgeC1heGlzIG9mIHRoZSBhcmMuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSByeSBUaGUgcmFkaXVzIHRvIGJlIHVzZWQgZm9yIHRoZSB5LWF4aXMgb2YgdGhlIGFyYy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhBciBEZWZpbmVzIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgYXJjXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBsQWYgTGFyZ2UgYXJjIGZsYWdcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHNmIFN3ZWVwIGZsYWdcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHggVGhlIHggY29vcmRpbmF0ZSBmb3IgdGhlIHRhcmdldCBwb2ludCBvZiB0aGUgY3VydmUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkgVGhlIHkgY29vcmRpbmF0ZSBmb3IgdGhlIHRhcmdldCBwb2ludCBvZiB0aGUgY3VydmUgZWxlbWVudC5cbiAgICogQHBhcmFtIHtCb29sZWFufSBbcmVsYXRpdmVdIElmIHNldCB0byB0cnVlIHRoZSBjdXJ2ZSBlbGVtZW50IHdpbGwgYmUgY3JlYXRlZCB3aXRoIHJlbGF0aXZlIGNvb3JkaW5hdGVzIChsb3dlcmNhc2UgbGV0dGVyKVxuICAgKiBAcGFyYW0geyp9IFtkYXRhXSBBbnkgZGF0YSB0aGF0IHNob3VsZCBiZSBzdG9yZWQgd2l0aCB0aGUgZWxlbWVudCBvYmplY3QgdGhhdCB3aWxsIGJlIGFjY2Vzc2libGUgaW4gcGF0aEVsZW1lbnRcbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnLlBhdGh9IFRoZSBjdXJyZW50IHBhdGggb2JqZWN0IGZvciBlYXN5IGNhbGwgY2hhaW5pbmcuXG4gICAqL1xuICBmdW5jdGlvbiBhcmMocngsIHJ5LCB4QXIsIGxBZiwgc2YsIHgsIHksIHJlbGF0aXZlLCBkYXRhKSB7XG4gICAgZWxlbWVudCgnQScsIHtcbiAgICAgIHJ4OiArcngsXG4gICAgICByeTogK3J5LFxuICAgICAgeEFyOiAreEFyLFxuICAgICAgbEFmOiArbEFmLFxuICAgICAgc2Y6ICtzZixcbiAgICAgIHg6ICt4LFxuICAgICAgeTogK3lcbiAgICB9LCB0aGlzLnBhdGhFbGVtZW50cywgdGhpcy5wb3MrKywgcmVsYXRpdmUsIGRhdGEpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyBhbiBTVkcgcGF0aCBzZWVuIGluIHRoZSBkIGF0dHJpYnV0ZSBvZiBwYXRoIGVsZW1lbnRzLCBhbmQgaW5zZXJ0cyB0aGUgcGFyc2VkIGVsZW1lbnRzIGludG8gdGhlIGV4aXN0aW5nIHBhdGggb2JqZWN0IGF0IHRoZSBjdXJyZW50IGN1cnNvciBwb3NpdGlvbi4gQW55IGNsb3NpbmcgcGF0aCBpbmRpY2F0b3JzIChaIGF0IHRoZSBlbmQgb2YgdGhlIHBhdGgpIHdpbGwgYmUgaWdub3JlZCBieSB0aGUgcGFyc2VyIGFzIHRoaXMgaXMgcHJvdmlkZWQgYnkgdGhlIGNsb3NlIG9wdGlvbiBpbiB0aGUgb3B0aW9ucyBvZiB0aGUgcGF0aCBvYmplY3QuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmcuUGF0aFxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aCBBbnkgU1ZHIHBhdGggdGhhdCBjb250YWlucyBtb3ZlIChtKSwgbGluZSAobCkgb3IgY3VydmUgKGMpIGNvbXBvbmVudHMuXG4gICAqIEByZXR1cm4ge0NoYXJ0aXN0LlN2Zy5QYXRofSBUaGUgY3VycmVudCBwYXRoIG9iamVjdCBmb3IgZWFzeSBjYWxsIGNoYWluaW5nLlxuICAgKi9cbiAgZnVuY3Rpb24gcGFyc2UocGF0aCkge1xuICAgIC8vIFBhcnNpbmcgdGhlIFNWRyBwYXRoIHN0cmluZyBpbnRvIGFuIGFycmF5IG9mIGFycmF5cyBbWydNJywgJzEwJywgJzEwJ10sIFsnTCcsICcxMDAnLCAnMTAwJ11dXG4gICAgdmFyIGNodW5rcyA9IHBhdGgucmVwbGFjZSgvKFtBLVphLXpdKShbMC05XSkvZywgJyQxICQyJylcbiAgICAgIC5yZXBsYWNlKC8oWzAtOV0pKFtBLVphLXpdKS9nLCAnJDEgJDInKVxuICAgICAgLnNwbGl0KC9bXFxzLF0rLylcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24ocmVzdWx0LCBlbGVtZW50KSB7XG4gICAgICAgIGlmKGVsZW1lbnQubWF0Y2goL1tBLVphLXpdLykpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChbXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdLnB1c2goZWxlbWVudCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9LCBbXSk7XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgY2xvc2VkIHBhdGggd2UgcmVtb3ZlIHRoZSBaIGF0IHRoZSBlbmQgYmVjYXVzZSB0aGlzIGlzIGRldGVybWluZWQgYnkgdGhlIGNsb3NlIG9wdGlvblxuICAgIGlmKGNodW5rc1tjaHVua3MubGVuZ3RoIC0gMV1bMF0udG9VcHBlckNhc2UoKSA9PT0gJ1onKSB7XG4gICAgICBjaHVua3MucG9wKCk7XG4gICAgfVxuXG4gICAgLy8gVXNpbmcgc3ZnUGF0aEVsZW1lbnREZXNjcmlwdGlvbnMgdG8gbWFwIHJhdyBwYXRoIGFycmF5cyBpbnRvIG9iamVjdHMgdGhhdCBjb250YWluIHRoZSBjb21tYW5kIGFuZCB0aGUgcGFyYW1ldGVyc1xuICAgIC8vIEZvciBleGFtcGxlIHtjb21tYW5kOiAnTScsIHg6ICcxMCcsIHk6ICcxMCd9XG4gICAgdmFyIGVsZW1lbnRzID0gY2h1bmtzLm1hcChmdW5jdGlvbihjaHVuaykge1xuICAgICAgICB2YXIgY29tbWFuZCA9IGNodW5rLnNoaWZ0KCksXG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBlbGVtZW50RGVzY3JpcHRpb25zW2NvbW1hbmQudG9Mb3dlckNhc2UoKV07XG5cbiAgICAgICAgcmV0dXJuIENoYXJ0aXN0LmV4dGVuZCh7XG4gICAgICAgICAgY29tbWFuZDogY29tbWFuZFxuICAgICAgICB9LCBkZXNjcmlwdGlvbi5yZWR1Y2UoZnVuY3Rpb24ocmVzdWx0LCBwYXJhbU5hbWUsIGluZGV4KSB7XG4gICAgICAgICAgcmVzdWx0W3BhcmFtTmFtZV0gPSArY2h1bmtbaW5kZXhdO1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIHt9KSk7XG4gICAgICB9KTtcblxuICAgIC8vIFByZXBhcmluZyBhIHNwbGljZSBjYWxsIHdpdGggdGhlIGVsZW1lbnRzIGFycmF5IGFzIHZhciBhcmcgcGFyYW1zIGFuZCBpbnNlcnQgdGhlIHBhcnNlZCBlbGVtZW50cyBhdCB0aGUgY3VycmVudCBwb3NpdGlvblxuICAgIHZhciBzcGxpY2VBcmdzID0gW3RoaXMucG9zLCAwXTtcbiAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShzcGxpY2VBcmdzLCBlbGVtZW50cyk7XG4gICAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseSh0aGlzLnBhdGhFbGVtZW50cywgc3BsaWNlQXJncyk7XG4gICAgLy8gSW5jcmVhc2UgdGhlIGludGVybmFsIHBvc2l0aW9uIGJ5IHRoZSBlbGVtZW50IGNvdW50XG4gICAgdGhpcy5wb3MgKz0gZWxlbWVudHMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiByZW5kZXJzIHRvIGN1cnJlbnQgU1ZHIHBhdGggb2JqZWN0IGludG8gYSBmaW5hbCBTVkcgc3RyaW5nIHRoYXQgY2FuIGJlIHVzZWQgaW4gdGhlIGQgYXR0cmlidXRlIG9mIFNWRyBwYXRoIGVsZW1lbnRzLiBJdCB1c2VzIHRoZSBhY2N1cmFjeSBvcHRpb24gdG8gcm91bmQgYmlnIGRlY2ltYWxzLiBJZiB0aGUgY2xvc2UgcGFyYW1ldGVyIHdhcyBzZXQgaW4gdGhlIGNvbnN0cnVjdG9yIG9mIHRoaXMgcGF0aCBvYmplY3QgdGhlbiBhIHBhdGggY2xvc2luZyBaIHdpbGwgYmUgYXBwZW5kZWQgdG8gdGhlIG91dHB1dCBzdHJpbmcuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmcuUGF0aFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiBzdHJpbmdpZnkoKSB7XG4gICAgdmFyIGFjY3VyYWN5TXVsdGlwbGllciA9IE1hdGgucG93KDEwLCB0aGlzLm9wdGlvbnMuYWNjdXJhY3kpO1xuXG4gICAgcmV0dXJuIHRoaXMucGF0aEVsZW1lbnRzLnJlZHVjZShmdW5jdGlvbihwYXRoLCBwYXRoRWxlbWVudCkge1xuICAgICAgICB2YXIgcGFyYW1zID0gZWxlbWVudERlc2NyaXB0aW9uc1twYXRoRWxlbWVudC5jb21tYW5kLnRvTG93ZXJDYXNlKCldLm1hcChmdW5jdGlvbihwYXJhbU5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFjY3VyYWN5ID9cbiAgICAgICAgICAgIChNYXRoLnJvdW5kKHBhdGhFbGVtZW50W3BhcmFtTmFtZV0gKiBhY2N1cmFjeU11bHRpcGxpZXIpIC8gYWNjdXJhY3lNdWx0aXBsaWVyKSA6XG4gICAgICAgICAgICBwYXRoRWxlbWVudFtwYXJhbU5hbWVdO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgICAgIHJldHVybiBwYXRoICsgcGF0aEVsZW1lbnQuY29tbWFuZCArIHBhcmFtcy5qb2luKCcsJyk7XG4gICAgICB9LmJpbmQodGhpcyksICcnKSArICh0aGlzLmNsb3NlID8gJ1onIDogJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjYWxlcyBhbGwgZWxlbWVudHMgaW4gdGhlIGN1cnJlbnQgU1ZHIHBhdGggb2JqZWN0LiBUaGVyZSBpcyBhbiBpbmRpdmlkdWFsIHBhcmFtZXRlciBmb3IgZWFjaCBjb29yZGluYXRlLiBTY2FsaW5nIHdpbGwgYWxzbyBiZSBkb25lIGZvciBjb250cm9sIHBvaW50cyBvZiBjdXJ2ZXMsIGFmZmVjdGluZyB0aGUgZ2l2ZW4gY29vcmRpbmF0ZS5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LlN2Zy5QYXRoXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB4IFRoZSBudW1iZXIgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHNjYWxlIHRoZSB4LCB4MSBhbmQgeDIgb2YgYWxsIHBhdGggZWxlbWVudHMuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5IFRoZSBudW1iZXIgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHNjYWxlIHRoZSB5LCB5MSBhbmQgeTIgb2YgYWxsIHBhdGggZWxlbWVudHMuXG4gICAqIEByZXR1cm4ge0NoYXJ0aXN0LlN2Zy5QYXRofSBUaGUgY3VycmVudCBwYXRoIG9iamVjdCBmb3IgZWFzeSBjYWxsIGNoYWluaW5nLlxuICAgKi9cbiAgZnVuY3Rpb24gc2NhbGUoeCwgeSkge1xuICAgIGZvckVhY2hQYXJhbSh0aGlzLnBhdGhFbGVtZW50cywgZnVuY3Rpb24ocGF0aEVsZW1lbnQsIHBhcmFtTmFtZSkge1xuICAgICAgcGF0aEVsZW1lbnRbcGFyYW1OYW1lXSAqPSBwYXJhbU5hbWVbMF0gPT09ICd4JyA/IHggOiB5O1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zbGF0ZXMgYWxsIGVsZW1lbnRzIGluIHRoZSBjdXJyZW50IFNWRyBwYXRoIG9iamVjdC4gVGhlIHRyYW5zbGF0aW9uIGlzIHJlbGF0aXZlIGFuZCB0aGVyZSBpcyBhbiBpbmRpdmlkdWFsIHBhcmFtZXRlciBmb3IgZWFjaCBjb29yZGluYXRlLiBUcmFuc2xhdGlvbiB3aWxsIGFsc28gYmUgZG9uZSBmb3IgY29udHJvbCBwb2ludHMgb2YgY3VydmVzLCBhZmZlY3RpbmcgdGhlIGdpdmVuIGNvb3JkaW5hdGUuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmcuUGF0aFxuICAgKiBAcGFyYW0ge051bWJlcn0geCBUaGUgbnVtYmVyIHdoaWNoIHdpbGwgYmUgdXNlZCB0byB0cmFuc2xhdGUgdGhlIHgsIHgxIGFuZCB4MiBvZiBhbGwgcGF0aCBlbGVtZW50cy5cbiAgICogQHBhcmFtIHtOdW1iZXJ9IHkgVGhlIG51bWJlciB3aGljaCB3aWxsIGJlIHVzZWQgdG8gdHJhbnNsYXRlIHRoZSB5LCB5MSBhbmQgeTIgb2YgYWxsIHBhdGggZWxlbWVudHMuXG4gICAqIEByZXR1cm4ge0NoYXJ0aXN0LlN2Zy5QYXRofSBUaGUgY3VycmVudCBwYXRoIG9iamVjdCBmb3IgZWFzeSBjYWxsIGNoYWluaW5nLlxuICAgKi9cbiAgZnVuY3Rpb24gdHJhbnNsYXRlKHgsIHkpIHtcbiAgICBmb3JFYWNoUGFyYW0odGhpcy5wYXRoRWxlbWVudHMsIGZ1bmN0aW9uKHBhdGhFbGVtZW50LCBwYXJhbU5hbWUpIHtcbiAgICAgIHBhdGhFbGVtZW50W3BhcmFtTmFtZV0gKz0gcGFyYW1OYW1lWzBdID09PSAneCcgPyB4IDogeTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgcnVuIG92ZXIgYWxsIGV4aXN0aW5nIHBhdGggZWxlbWVudHMgYW5kIHRoZW4gbG9vcCBvdmVyIHRoZWlyIGF0dHJpYnV0ZXMuIFRoZSBjYWxsYmFjayBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBmb3IgZXZlcnkgcGF0aCBlbGVtZW50IGF0dHJpYnV0ZSB0aGF0IGV4aXN0cyBpbiB0aGUgY3VycmVudCBwYXRoLlxuICAgKiBUaGUgbWV0aG9kIHNpZ25hdHVyZSBvZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gbG9va3MgbGlrZSB0aGlzOlxuICAgKiBgYGBqYXZhc2NyaXB0XG4gICAqIGZ1bmN0aW9uKHBhdGhFbGVtZW50LCBwYXJhbU5hbWUsIHBhdGhFbGVtZW50SW5kZXgsIHBhcmFtSW5kZXgsIHBhdGhFbGVtZW50cylcbiAgICogYGBgXG4gICAqIElmIHNvbWV0aGluZyBlbHNlIHRoYW4gdW5kZWZpbmVkIGlzIHJldHVybmVkIGJ5IHRoZSBjYWxsYmFjayBmdW5jdGlvbiwgdGhpcyB2YWx1ZSB3aWxsIGJlIHVzZWQgdG8gcmVwbGFjZSB0aGUgb2xkIHZhbHVlLiBUaGlzIGFsbG93cyB5b3UgdG8gYnVpbGQgY3VzdG9tIHRyYW5zZm9ybWF0aW9ucyBvZiBwYXRoIG9iamVjdHMgdGhhdCBjYW4ndCBiZSBhY2hpZXZlZCB1c2luZyB0aGUgYmFzaWMgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zIHNjYWxlIGFuZCB0cmFuc2xhdGUuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmcuUGF0aFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm1GbmMgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciB0aGUgdHJhbnNmb3JtYXRpb24uIENoZWNrIHRoZSBzaWduYXR1cmUgaW4gdGhlIGZ1bmN0aW9uIGRlc2NyaXB0aW9uLlxuICAgKiBAcmV0dXJuIHtDaGFydGlzdC5TdmcuUGF0aH0gVGhlIGN1cnJlbnQgcGF0aCBvYmplY3QgZm9yIGVhc3kgY2FsbCBjaGFpbmluZy5cbiAgICovXG4gIGZ1bmN0aW9uIHRyYW5zZm9ybSh0cmFuc2Zvcm1GbmMpIHtcbiAgICBmb3JFYWNoUGFyYW0odGhpcy5wYXRoRWxlbWVudHMsIGZ1bmN0aW9uKHBhdGhFbGVtZW50LCBwYXJhbU5hbWUsIHBhdGhFbGVtZW50SW5kZXgsIHBhcmFtSW5kZXgsIHBhdGhFbGVtZW50cykge1xuICAgICAgdmFyIHRyYW5zZm9ybWVkID0gdHJhbnNmb3JtRm5jKHBhdGhFbGVtZW50LCBwYXJhbU5hbWUsIHBhdGhFbGVtZW50SW5kZXgsIHBhcmFtSW5kZXgsIHBhdGhFbGVtZW50cyk7XG4gICAgICBpZih0cmFuc2Zvcm1lZCB8fCB0cmFuc2Zvcm1lZCA9PT0gMCkge1xuICAgICAgICBwYXRoRWxlbWVudFtwYXJhbU5hbWVdID0gdHJhbnNmb3JtZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBjbG9uZXMgYSB3aG9sZSBwYXRoIG9iamVjdCB3aXRoIGFsbCBpdHMgcHJvcGVydGllcy4gVGhpcyBpcyBhIGRlZXAgY2xvbmUgYW5kIHBhdGggZWxlbWVudCBvYmplY3RzIHdpbGwgYWxzbyBiZSBjbG9uZWQuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmcuUGF0aFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtjbG9zZV0gT3B0aW9uYWwgb3B0aW9uIHRvIHNldCB0aGUgbmV3IGNsb25lZCBwYXRoIHRvIGNsb3NlZC4gSWYgbm90IHNwZWNpZmllZCBvciBmYWxzZSwgdGhlIG9yaWdpbmFsIHBhdGggY2xvc2Ugb3B0aW9uIHdpbGwgYmUgdXNlZC5cbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnLlBhdGh9XG4gICAqL1xuICBmdW5jdGlvbiBjbG9uZShjbG9zZSkge1xuICAgIHZhciBjID0gbmV3IENoYXJ0aXN0LlN2Zy5QYXRoKGNsb3NlIHx8IHRoaXMuY2xvc2UpO1xuICAgIGMucG9zID0gdGhpcy5wb3M7XG4gICAgYy5wYXRoRWxlbWVudHMgPSB0aGlzLnBhdGhFbGVtZW50cy5zbGljZSgpLm1hcChmdW5jdGlvbiBjbG9uZUVsZW1lbnRzKHBhdGhFbGVtZW50KSB7XG4gICAgICByZXR1cm4gQ2hhcnRpc3QuZXh0ZW5kKHt9LCBwYXRoRWxlbWVudCk7XG4gICAgfSk7XG4gICAgYy5vcHRpb25zID0gQ2hhcnRpc3QuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMpO1xuICAgIHJldHVybiBjO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwbGl0IGEgU3ZnLlBhdGggb2JqZWN0IGJ5IGEgc3BlY2lmaWMgY29tbWFuZCBpbiB0aGUgcGF0aCBjaGFpbi4gVGhlIHBhdGggY2hhaW4gd2lsbCBiZSBzcGxpdCBhbmQgYW4gYXJyYXkgb2YgbmV3bHkgY3JlYXRlZCBwYXRocyBvYmplY3RzIHdpbGwgYmUgcmV0dXJuZWQuIFRoaXMgaXMgdXNlZnVsIGlmIHlvdSdkIGxpa2UgdG8gc3BsaXQgYW4gU1ZHIHBhdGggYnkgaXQncyBtb3ZlIGNvbW1hbmRzLCBmb3IgZXhhbXBsZSwgaW4gb3JkZXIgdG8gaXNvbGF0ZSBjaHVua3Mgb2YgZHJhd2luZ3MuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmcuUGF0aFxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29tbWFuZCBUaGUgY29tbWFuZCB5b3UnZCBsaWtlIHRvIHVzZSB0byBzcGxpdCB0aGUgcGF0aFxuICAgKiBAcmV0dXJuIHtBcnJheTxDaGFydGlzdC5TdmcuUGF0aD59XG4gICAqL1xuICBmdW5jdGlvbiBzcGxpdEJ5Q29tbWFuZChjb21tYW5kKSB7XG4gICAgdmFyIHNwbGl0ID0gW1xuICAgICAgbmV3IENoYXJ0aXN0LlN2Zy5QYXRoKClcbiAgICBdO1xuXG4gICAgdGhpcy5wYXRoRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihwYXRoRWxlbWVudCkge1xuICAgICAgaWYocGF0aEVsZW1lbnQuY29tbWFuZCA9PT0gY29tbWFuZC50b1VwcGVyQ2FzZSgpICYmIHNwbGl0W3NwbGl0Lmxlbmd0aCAtIDFdLnBhdGhFbGVtZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgc3BsaXQucHVzaChuZXcgQ2hhcnRpc3QuU3ZnLlBhdGgoKSk7XG4gICAgICB9XG5cbiAgICAgIHNwbGl0W3NwbGl0Lmxlbmd0aCAtIDFdLnBhdGhFbGVtZW50cy5wdXNoKHBhdGhFbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzcGxpdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHN0YXRpYyBmdW5jdGlvbiBvbiBgQ2hhcnRpc3QuU3ZnLlBhdGhgIGlzIGpvaW5pbmcgbXVsdGlwbGUgcGF0aHMgdG9nZXRoZXIgaW50byBvbmUgcGF0aHMuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5TdmcuUGF0aFxuICAgKiBAcGFyYW0ge0FycmF5PENoYXJ0aXN0LlN2Zy5QYXRoPn0gcGF0aHMgQSBsaXN0IG9mIHBhdGhzIHRvIGJlIGpvaW5lZCB0b2dldGhlci4gVGhlIG9yZGVyIGlzIGltcG9ydGFudC5cbiAgICogQHBhcmFtIHtib29sZWFufSBjbG9zZSBJZiB0aGUgbmV3bHkgY3JlYXRlZCBwYXRoIHNob3VsZCBiZSBhIGNsb3NlZCBwYXRoXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIFBhdGggb3B0aW9ucyBmb3IgdGhlIG5ld2x5IGNyZWF0ZWQgcGF0aC5cbiAgICogQHJldHVybiB7Q2hhcnRpc3QuU3ZnLlBhdGh9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGpvaW4ocGF0aHMsIGNsb3NlLCBvcHRpb25zKSB7XG4gICAgdmFyIGpvaW5lZFBhdGggPSBuZXcgQ2hhcnRpc3QuU3ZnLlBhdGgoY2xvc2UsIG9wdGlvbnMpO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBhdGggPSBwYXRoc1tpXTtcbiAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBwYXRoLnBhdGhFbGVtZW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICBqb2luZWRQYXRoLnBhdGhFbGVtZW50cy5wdXNoKHBhdGgucGF0aEVsZW1lbnRzW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGpvaW5lZFBhdGg7XG4gIH1cblxuICBDaGFydGlzdC5TdmcuUGF0aCA9IENoYXJ0aXN0LkNsYXNzLmV4dGVuZCh7XG4gICAgY29uc3RydWN0b3I6IFN2Z1BhdGgsXG4gICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgIHJlbW92ZTogcmVtb3ZlLFxuICAgIG1vdmU6IG1vdmUsXG4gICAgbGluZTogbGluZSxcbiAgICBjdXJ2ZTogY3VydmUsXG4gICAgYXJjOiBhcmMsXG4gICAgc2NhbGU6IHNjYWxlLFxuICAgIHRyYW5zbGF0ZTogdHJhbnNsYXRlLFxuICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuICAgIHBhcnNlOiBwYXJzZSxcbiAgICBzdHJpbmdpZnk6IHN0cmluZ2lmeSxcbiAgICBjbG9uZTogY2xvbmUsXG4gICAgc3BsaXRCeUNvbW1hbmQ6IHNwbGl0QnlDb21tYW5kXG4gIH0pO1xuXG4gIENoYXJ0aXN0LlN2Zy5QYXRoLmVsZW1lbnREZXNjcmlwdGlvbnMgPSBlbGVtZW50RGVzY3JpcHRpb25zO1xuICBDaGFydGlzdC5TdmcuUGF0aC5qb2luID0gam9pbjtcbn0od2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpKTtcbjsvKiBnbG9iYWwgQ2hhcnRpc3QgKi9cbihmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBheGlzVW5pdHMgPSB7XG4gICAgeDoge1xuICAgICAgcG9zOiAneCcsXG4gICAgICBsZW46ICd3aWR0aCcsXG4gICAgICBkaXI6ICdob3Jpem9udGFsJyxcbiAgICAgIHJlY3RTdGFydDogJ3gxJyxcbiAgICAgIHJlY3RFbmQ6ICd4MicsXG4gICAgICByZWN0T2Zmc2V0OiAneTInXG4gICAgfSxcbiAgICB5OiB7XG4gICAgICBwb3M6ICd5JyxcbiAgICAgIGxlbjogJ2hlaWdodCcsXG4gICAgICBkaXI6ICd2ZXJ0aWNhbCcsXG4gICAgICByZWN0U3RhcnQ6ICd5MicsXG4gICAgICByZWN0RW5kOiAneTEnLFxuICAgICAgcmVjdE9mZnNldDogJ3gxJ1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBBeGlzKHVuaXRzLCBjaGFydFJlY3QsIHRpY2tzLCBvcHRpb25zKSB7XG4gICAgdGhpcy51bml0cyA9IHVuaXRzO1xuICAgIHRoaXMuY291bnRlclVuaXRzID0gdW5pdHMgPT09IGF4aXNVbml0cy54ID8gYXhpc1VuaXRzLnkgOiBheGlzVW5pdHMueDtcbiAgICB0aGlzLmNoYXJ0UmVjdCA9IGNoYXJ0UmVjdDtcbiAgICB0aGlzLmF4aXNMZW5ndGggPSBjaGFydFJlY3RbdW5pdHMucmVjdEVuZF0gLSBjaGFydFJlY3RbdW5pdHMucmVjdFN0YXJ0XTtcbiAgICB0aGlzLmdyaWRPZmZzZXQgPSBjaGFydFJlY3RbdW5pdHMucmVjdE9mZnNldF07XG4gICAgdGhpcy50aWNrcyA9IHRpY2tzO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVHcmlkQW5kTGFiZWxzKGdyaWRHcm91cCwgbGFiZWxHcm91cCwgdXNlRm9yZWlnbk9iamVjdCwgY2hhcnRPcHRpb25zLCBldmVudEVtaXR0ZXIpIHtcbiAgICB2YXIgYXhpc09wdGlvbnMgPSBjaGFydE9wdGlvbnNbJ2F4aXMnICsgdGhpcy51bml0cy5wb3MudG9VcHBlckNhc2UoKV07XG4gICAgdmFyIHByb2plY3RlZFZhbHVlcyA9IHRoaXMudGlja3MubWFwKHRoaXMucHJvamVjdFZhbHVlLmJpbmQodGhpcykpO1xuICAgIHZhciBsYWJlbFZhbHVlcyA9IHRoaXMudGlja3MubWFwKGF4aXNPcHRpb25zLmxhYmVsSW50ZXJwb2xhdGlvbkZuYyk7XG5cbiAgICBwcm9qZWN0ZWRWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbihwcm9qZWN0ZWRWYWx1ZSwgaW5kZXgpIHtcbiAgICAgIHZhciBsYWJlbE9mZnNldCA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfTtcblxuICAgICAgLy8gVE9ETzogRmluZCBiZXR0ZXIgc29sdXRpb24gZm9yIHNvbHZpbmcgdGhpcyBwcm9ibGVtXG4gICAgICAvLyBDYWxjdWxhdGUgaG93IG11Y2ggc3BhY2Ugd2UgaGF2ZSBhdmFpbGFibGUgZm9yIHRoZSBsYWJlbFxuICAgICAgdmFyIGxhYmVsTGVuZ3RoO1xuICAgICAgaWYocHJvamVjdGVkVmFsdWVzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgLy8gSWYgd2Ugc3RpbGwgaGF2ZSBvbmUgbGFiZWwgYWhlYWQsIHdlIGNhbiBjYWxjdWxhdGUgdGhlIGRpc3RhbmNlIHRvIHRoZSBuZXh0IHRpY2sgLyBsYWJlbFxuICAgICAgICBsYWJlbExlbmd0aCA9IHByb2plY3RlZFZhbHVlc1tpbmRleCArIDFdIC0gcHJvamVjdGVkVmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgbGFiZWwgYWhlYWQgYW5kIHdlIGhhdmUgb25seSB0d28gbGFiZWxzIGluIHRvdGFsLCB3ZSBqdXN0IHRha2UgdGhlIHJlbWFpbmluZyBkaXN0YW5jZSB0b1xuICAgICAgICAvLyBvbiB0aGUgd2hvbGUgYXhpcyBsZW5ndGguIFdlIGxpbWl0IHRoYXQgdG8gYSBtaW5pbXVtIG9mIDMwIHBpeGVsLCBzbyB0aGF0IGxhYmVscyBjbG9zZSB0byB0aGUgYm9yZGVyIHdpbGxcbiAgICAgICAgLy8gc3RpbGwgYmUgdmlzaWJsZSBpbnNpZGUgb2YgdGhlIGNoYXJ0IHBhZGRpbmcuXG4gICAgICAgIGxhYmVsTGVuZ3RoID0gTWF0aC5tYXgodGhpcy5heGlzTGVuZ3RoIC0gcHJvamVjdGVkVmFsdWUsIDMwKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2tpcCBncmlkIGxpbmVzIGFuZCBsYWJlbHMgd2hlcmUgaW50ZXJwb2xhdGVkIGxhYmVsIHZhbHVlcyBhcmUgZmFsc2V5IChleGVjcHQgZm9yIDApXG4gICAgICBpZihDaGFydGlzdC5pc0ZhbHNleUJ1dFplcm8obGFiZWxWYWx1ZXNbaW5kZXhdKSAmJiBsYWJlbFZhbHVlc1tpbmRleF0gIT09ICcnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVHJhbnNmb3JtIHRvIGdsb2JhbCBjb29yZGluYXRlcyB1c2luZyB0aGUgY2hhcnRSZWN0XG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBsYWJlbCBvZmZzZXQgZm9yIHRoZSBjcmVhdGVMYWJlbCBmdW5jdGlvblxuICAgICAgaWYodGhpcy51bml0cy5wb3MgPT09ICd4Jykge1xuICAgICAgICBwcm9qZWN0ZWRWYWx1ZSA9IHRoaXMuY2hhcnRSZWN0LngxICsgcHJvamVjdGVkVmFsdWU7XG4gICAgICAgIGxhYmVsT2Zmc2V0LnggPSBjaGFydE9wdGlvbnMuYXhpc1gubGFiZWxPZmZzZXQueDtcblxuICAgICAgICAvLyBJZiB0aGUgbGFiZWxzIHNob3VsZCBiZSBwb3NpdGlvbmVkIGluIHN0YXJ0IHBvc2l0aW9uICh0b3Agc2lkZSBmb3IgdmVydGljYWwgYXhpcykgd2UgbmVlZCB0byBzZXQgYVxuICAgICAgICAvLyBkaWZmZXJlbnQgb2Zmc2V0IGFzIGZvciBwb3NpdGlvbmVkIHdpdGggZW5kIChib3R0b20pXG4gICAgICAgIGlmKGNoYXJ0T3B0aW9ucy5heGlzWC5wb3NpdGlvbiA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICAgIGxhYmVsT2Zmc2V0LnkgPSB0aGlzLmNoYXJ0UmVjdC5wYWRkaW5nLnRvcCArIGNoYXJ0T3B0aW9ucy5heGlzWC5sYWJlbE9mZnNldC55ICsgKHVzZUZvcmVpZ25PYmplY3QgPyA1IDogMjApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxhYmVsT2Zmc2V0LnkgPSB0aGlzLmNoYXJ0UmVjdC55MSArIGNoYXJ0T3B0aW9ucy5heGlzWC5sYWJlbE9mZnNldC55ICsgKHVzZUZvcmVpZ25PYmplY3QgPyA1IDogMjApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0ZWRWYWx1ZSA9IHRoaXMuY2hhcnRSZWN0LnkxIC0gcHJvamVjdGVkVmFsdWU7XG4gICAgICAgIGxhYmVsT2Zmc2V0LnkgPSBjaGFydE9wdGlvbnMuYXhpc1kubGFiZWxPZmZzZXQueSAtICh1c2VGb3JlaWduT2JqZWN0ID8gbGFiZWxMZW5ndGggOiAwKTtcblxuICAgICAgICAvLyBJZiB0aGUgbGFiZWxzIHNob3VsZCBiZSBwb3NpdGlvbmVkIGluIHN0YXJ0IHBvc2l0aW9uIChsZWZ0IHNpZGUgZm9yIGhvcml6b250YWwgYXhpcykgd2UgbmVlZCB0byBzZXQgYVxuICAgICAgICAvLyBkaWZmZXJlbnQgb2Zmc2V0IGFzIGZvciBwb3NpdGlvbmVkIHdpdGggZW5kIChyaWdodCBzaWRlKVxuICAgICAgICBpZihjaGFydE9wdGlvbnMuYXhpc1kucG9zaXRpb24gPT09ICdzdGFydCcpIHtcbiAgICAgICAgICBsYWJlbE9mZnNldC54ID0gdXNlRm9yZWlnbk9iamVjdCA/IHRoaXMuY2hhcnRSZWN0LnBhZGRpbmcubGVmdCArIGNoYXJ0T3B0aW9ucy5heGlzWS5sYWJlbE9mZnNldC54IDogdGhpcy5jaGFydFJlY3QueDEgLSAxMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYWJlbE9mZnNldC54ID0gdGhpcy5jaGFydFJlY3QueDIgKyBjaGFydE9wdGlvbnMuYXhpc1kubGFiZWxPZmZzZXQueCArIDEwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKGF4aXNPcHRpb25zLnNob3dHcmlkKSB7XG4gICAgICAgIENoYXJ0aXN0LmNyZWF0ZUdyaWQocHJvamVjdGVkVmFsdWUsIGluZGV4LCB0aGlzLCB0aGlzLmdyaWRPZmZzZXQsIHRoaXMuY2hhcnRSZWN0W3RoaXMuY291bnRlclVuaXRzLmxlbl0oKSwgZ3JpZEdyb3VwLCBbXG4gICAgICAgICAgY2hhcnRPcHRpb25zLmNsYXNzTmFtZXMuZ3JpZCxcbiAgICAgICAgICBjaGFydE9wdGlvbnMuY2xhc3NOYW1lc1t0aGlzLnVuaXRzLmRpcl1cbiAgICAgICAgXSwgZXZlbnRFbWl0dGVyKTtcbiAgICAgIH1cblxuICAgICAgaWYoYXhpc09wdGlvbnMuc2hvd0xhYmVsKSB7XG4gICAgICAgIENoYXJ0aXN0LmNyZWF0ZUxhYmVsKHByb2plY3RlZFZhbHVlLCBsYWJlbExlbmd0aCwgaW5kZXgsIGxhYmVsVmFsdWVzLCB0aGlzLCBheGlzT3B0aW9ucy5vZmZzZXQsIGxhYmVsT2Zmc2V0LCBsYWJlbEdyb3VwLCBbXG4gICAgICAgICAgY2hhcnRPcHRpb25zLmNsYXNzTmFtZXMubGFiZWwsXG4gICAgICAgICAgY2hhcnRPcHRpb25zLmNsYXNzTmFtZXNbdGhpcy51bml0cy5kaXJdLFxuICAgICAgICAgIChheGlzT3B0aW9ucy5wb3NpdGlvbiA9PT0gJ3N0YXJ0JyA/IGNoYXJ0T3B0aW9ucy5jbGFzc05hbWVzW2F4aXNPcHRpb25zLnBvc2l0aW9uXSA6IGNoYXJ0T3B0aW9ucy5jbGFzc05hbWVzWydlbmQnXSlcbiAgICAgICAgXSwgdXNlRm9yZWlnbk9iamVjdCwgZXZlbnRFbWl0dGVyKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgQ2hhcnRpc3QuQXhpcyA9IENoYXJ0aXN0LkNsYXNzLmV4dGVuZCh7XG4gICAgY29uc3RydWN0b3I6IEF4aXMsXG4gICAgY3JlYXRlR3JpZEFuZExhYmVsczogY3JlYXRlR3JpZEFuZExhYmVscyxcbiAgICBwcm9qZWN0VmFsdWU6IGZ1bmN0aW9uKHZhbHVlLCBpbmRleCwgZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYXNlIGF4aXMgY2FuXFwndCBiZSBpbnN0YW50aWF0ZWQhJyk7XG4gICAgfVxuICB9KTtcblxuICBDaGFydGlzdC5BeGlzLnVuaXRzID0gYXhpc1VuaXRzO1xuXG59KHdpbmRvdywgZG9jdW1lbnQsIENoYXJ0aXN0KSk7XG47LyoqXG4gKiBUaGUgYXV0byBzY2FsZSBheGlzIHVzZXMgc3RhbmRhcmQgbGluZWFyIHNjYWxlIHByb2plY3Rpb24gb2YgdmFsdWVzIGFsb25nIGFuIGF4aXMuIEl0IHVzZXMgb3JkZXIgb2YgbWFnbml0dWRlIHRvIGZpbmQgYSBzY2FsZSBhdXRvbWF0aWNhbGx5IGFuZCBldmFsdWF0ZXMgdGhlIGF2YWlsYWJsZSBzcGFjZSBpbiBvcmRlciB0byBmaW5kIHRoZSBwZXJmZWN0IGFtb3VudCBvZiB0aWNrcyBmb3IgeW91ciBjaGFydC5cbiAqICoqT3B0aW9ucyoqXG4gKiBUaGUgZm9sbG93aW5nIG9wdGlvbnMgYXJlIHVzZWQgYnkgdGhpcyBheGlzIGluIGFkZGl0aW9uIHRvIHRoZSBkZWZhdWx0IGF4aXMgb3B0aW9ucyBvdXRsaW5lZCBpbiB0aGUgYXhpcyBjb25maWd1cmF0aW9uIG9mIHRoZSBjaGFydCBkZWZhdWx0IHNldHRpbmdzLlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIG9wdGlvbnMgPSB7XG4gKiAgIC8vIElmIGhpZ2ggaXMgc3BlY2lmaWVkIHRoZW4gdGhlIGF4aXMgd2lsbCBkaXNwbGF5IHZhbHVlcyBleHBsaWNpdGx5IHVwIHRvIHRoaXMgdmFsdWUgYW5kIHRoZSBjb21wdXRlZCBtYXhpbXVtIGZyb20gdGhlIGRhdGEgaXMgaWdub3JlZFxuICogICBoaWdoOiAxMDAsXG4gKiAgIC8vIElmIGxvdyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgYXhpcyB3aWxsIGRpc3BsYXkgdmFsdWVzIGV4cGxpY2l0bHkgZG93biB0byB0aGlzIHZhbHVlIGFuZCB0aGUgY29tcHV0ZWQgbWluaW11bSBmcm9tIHRoZSBkYXRhIGlzIGlnbm9yZWRcbiAqICAgbG93OiAwLFxuICogICAvLyBUaGlzIG9wdGlvbiB3aWxsIGJlIHVzZWQgd2hlbiBmaW5kaW5nIHRoZSByaWdodCBzY2FsZSBkaXZpc2lvbiBzZXR0aW5ncy4gVGhlIGFtb3VudCBvZiB0aWNrcyBvbiB0aGUgc2NhbGUgd2lsbCBiZSBkZXRlcm1pbmVkIHNvIHRoYXQgYXMgbWFueSB0aWNrcyBhcyBwb3NzaWJsZSB3aWxsIGJlIGRpc3BsYXllZCwgd2hpbGUgbm90IHZpb2xhdGluZyB0aGlzIG1pbmltdW0gcmVxdWlyZWQgc3BhY2UgKGluIHBpeGVsKS5cbiAqICAgc2NhbGVNaW5TcGFjZTogMjAsXG4gKiAgIC8vIENhbiBiZSBzZXQgdG8gdHJ1ZSBvciBmYWxzZS4gSWYgc2V0IHRvIHRydWUsIHRoZSBzY2FsZSB3aWxsIGJlIGdlbmVyYXRlZCB3aXRoIHdob2xlIG51bWJlcnMgb25seS5cbiAqICAgb25seUludGVnZXI6IHRydWUsXG4gKiAgIC8vIFRoZSByZWZlcmVuY2UgdmFsdWUgY2FuIGJlIHVzZWQgdG8gbWFrZSBzdXJlIHRoYXQgdGhpcyB2YWx1ZSB3aWxsIGFsd2F5cyBiZSBvbiB0aGUgY2hhcnQuIFRoaXMgaXMgZXNwZWNpYWxseSB1c2VmdWwgb24gYmlwb2xhciBjaGFydHMgd2hlcmUgdGhlIGJpcG9sYXIgY2VudGVyIGFsd2F5cyBuZWVkcyB0byBiZSBwYXJ0IG9mIHRoZSBjaGFydC5cbiAqICAgcmVmZXJlbmNlVmFsdWU6IDVcbiAqIH07XG4gKiBgYGBcbiAqXG4gKiBAbW9kdWxlIENoYXJ0aXN0LkF1dG9TY2FsZUF4aXNcbiAqL1xuLyogZ2xvYmFsIENoYXJ0aXN0ICovXG4oZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsIENoYXJ0aXN0KSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBBdXRvU2NhbGVBeGlzKGF4aXNVbml0LCBkYXRhLCBjaGFydFJlY3QsIG9wdGlvbnMpIHtcbiAgICAvLyBVc3VhbGx5IHdlIGNhbGN1bGF0ZSBoaWdoTG93IGJhc2VkIG9uIHRoZSBkYXRhIGJ1dCB0aGlzIGNhbiBiZSBvdmVycmlkZW4gYnkgYSBoaWdoTG93IG9iamVjdCBpbiB0aGUgb3B0aW9uc1xuICAgIHZhciBoaWdoTG93ID0gb3B0aW9ucy5oaWdoTG93IHx8IENoYXJ0aXN0LmdldEhpZ2hMb3coZGF0YSwgb3B0aW9ucywgYXhpc1VuaXQucG9zKTtcbiAgICB0aGlzLmJvdW5kcyA9IENoYXJ0aXN0LmdldEJvdW5kcyhjaGFydFJlY3RbYXhpc1VuaXQucmVjdEVuZF0gLSBjaGFydFJlY3RbYXhpc1VuaXQucmVjdFN0YXJ0XSwgaGlnaExvdywgb3B0aW9ucy5zY2FsZU1pblNwYWNlIHx8IDIwLCBvcHRpb25zLm9ubHlJbnRlZ2VyKTtcbiAgICB0aGlzLnJhbmdlID0ge1xuICAgICAgbWluOiB0aGlzLmJvdW5kcy5taW4sXG4gICAgICBtYXg6IHRoaXMuYm91bmRzLm1heFxuICAgIH07XG5cbiAgICBDaGFydGlzdC5BdXRvU2NhbGVBeGlzLnN1cGVyLmNvbnN0cnVjdG9yLmNhbGwodGhpcyxcbiAgICAgIGF4aXNVbml0LFxuICAgICAgY2hhcnRSZWN0LFxuICAgICAgdGhpcy5ib3VuZHMudmFsdWVzLFxuICAgICAgb3B0aW9ucyk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9qZWN0VmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5heGlzTGVuZ3RoICogKCtDaGFydGlzdC5nZXRNdWx0aVZhbHVlKHZhbHVlLCB0aGlzLnVuaXRzLnBvcykgLSB0aGlzLmJvdW5kcy5taW4pIC8gdGhpcy5ib3VuZHMucmFuZ2U7XG4gIH1cblxuICBDaGFydGlzdC5BdXRvU2NhbGVBeGlzID0gQ2hhcnRpc3QuQXhpcy5leHRlbmQoe1xuICAgIGNvbnN0cnVjdG9yOiBBdXRvU2NhbGVBeGlzLFxuICAgIHByb2plY3RWYWx1ZTogcHJvamVjdFZhbHVlXG4gIH0pO1xuXG59KHdpbmRvdywgZG9jdW1lbnQsIENoYXJ0aXN0KSk7XG47LyoqXG4gKiBUaGUgZml4ZWQgc2NhbGUgYXhpcyB1c2VzIHN0YW5kYXJkIGxpbmVhciBwcm9qZWN0aW9uIG9mIHZhbHVlcyBhbG9uZyBhbiBheGlzLiBJdCBtYWtlcyB1c2Ugb2YgYSBkaXZpc29yIG9wdGlvbiB0byBkaXZpZGUgdGhlIHJhbmdlIHByb3ZpZGVkIGZyb20gdGhlIG1pbmltdW0gYW5kIG1heGltdW0gdmFsdWUgb3IgdGhlIG9wdGlvbnMgaGlnaCBhbmQgbG93IHRoYXQgd2lsbCBvdmVycmlkZSB0aGUgY29tcHV0ZWQgbWluaW11bSBhbmQgbWF4aW11bS5cbiAqICoqT3B0aW9ucyoqXG4gKiBUaGUgZm9sbG93aW5nIG9wdGlvbnMgYXJlIHVzZWQgYnkgdGhpcyBheGlzIGluIGFkZGl0aW9uIHRvIHRoZSBkZWZhdWx0IGF4aXMgb3B0aW9ucyBvdXRsaW5lZCBpbiB0aGUgYXhpcyBjb25maWd1cmF0aW9uIG9mIHRoZSBjaGFydCBkZWZhdWx0IHNldHRpbmdzLlxuICogYGBgamF2YXNjcmlwdFxuICogdmFyIG9wdGlvbnMgPSB7XG4gKiAgIC8vIElmIGhpZ2ggaXMgc3BlY2lmaWVkIHRoZW4gdGhlIGF4aXMgd2lsbCBkaXNwbGF5IHZhbHVlcyBleHBsaWNpdGx5IHVwIHRvIHRoaXMgdmFsdWUgYW5kIHRoZSBjb21wdXRlZCBtYXhpbXVtIGZyb20gdGhlIGRhdGEgaXMgaWdub3JlZFxuICogICBoaWdoOiAxMDAsXG4gKiAgIC8vIElmIGxvdyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgYXhpcyB3aWxsIGRpc3BsYXkgdmFsdWVzIGV4cGxpY2l0bHkgZG93biB0byB0aGlzIHZhbHVlIGFuZCB0aGUgY29tcHV0ZWQgbWluaW11bSBmcm9tIHRoZSBkYXRhIGlzIGlnbm9yZWRcbiAqICAgbG93OiAwLFxuICogICAvLyBJZiBzcGVjaWZpZWQgdGhlbiB0aGUgdmFsdWUgcmFuZ2UgZGV0ZXJtaW5lZCBmcm9tIG1pbmltdW0gdG8gbWF4aW11bSAob3IgbG93IGFuZCBoaWdoKSB3aWxsIGJlIGRpdmlkZWQgYnkgdGhpcyBudW1iZXIgYW5kIHRpY2tzIHdpbGwgYmUgZ2VuZXJhdGVkIGF0IHRob3NlIGRpdmlzaW9uIHBvaW50cy4gVGhlIGRlZmF1bHQgZGl2aXNvciBpcyAxLlxuICogICBkaXZpc29yOiA0LFxuICogICAvLyBJZiB0aWNrcyBpcyBleHBsaWNpdGx5IHNldCwgdGhlbiB0aGUgYXhpcyB3aWxsIG5vdCBjb21wdXRlIHRoZSB0aWNrcyB3aXRoIHRoZSBkaXZpc29yLCBidXQgZGlyZWN0bHkgdXNlIHRoZSBkYXRhIGluIHRpY2tzIHRvIGRldGVybWluZSBhdCB3aGF0IHBvaW50cyBvbiB0aGUgYXhpcyBhIHRpY2sgbmVlZCB0byBiZSBnZW5lcmF0ZWQuXG4gKiAgIHRpY2tzOiBbMSwgMTAsIDIwLCAzMF1cbiAqIH07XG4gKiBgYGBcbiAqXG4gKiBAbW9kdWxlIENoYXJ0aXN0LkZpeGVkU2NhbGVBeGlzXG4gKi9cbi8qIGdsb2JhbCBDaGFydGlzdCAqL1xuKGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gRml4ZWRTY2FsZUF4aXMoYXhpc1VuaXQsIGRhdGEsIGNoYXJ0UmVjdCwgb3B0aW9ucykge1xuICAgIHZhciBoaWdoTG93ID0gb3B0aW9ucy5oaWdoTG93IHx8IENoYXJ0aXN0LmdldEhpZ2hMb3coZGF0YSwgb3B0aW9ucywgYXhpc1VuaXQucG9zKTtcbiAgICB0aGlzLmRpdmlzb3IgPSBvcHRpb25zLmRpdmlzb3IgfHwgMTtcbiAgICB0aGlzLnRpY2tzID0gb3B0aW9ucy50aWNrcyB8fCBDaGFydGlzdC50aW1lcyh0aGlzLmRpdmlzb3IpLm1hcChmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBoaWdoTG93LmxvdyArIChoaWdoTG93LmhpZ2ggLSBoaWdoTG93LmxvdykgLyB0aGlzLmRpdmlzb3IgKiBpbmRleDtcbiAgICB9LmJpbmQodGhpcykpO1xuICAgIHRoaXMudGlja3Muc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICByZXR1cm4gYSAtIGI7XG4gICAgfSk7XG4gICAgdGhpcy5yYW5nZSA9IHtcbiAgICAgIG1pbjogaGlnaExvdy5sb3csXG4gICAgICBtYXg6IGhpZ2hMb3cuaGlnaFxuICAgIH07XG5cbiAgICBDaGFydGlzdC5GaXhlZFNjYWxlQXhpcy5zdXBlci5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsXG4gICAgICBheGlzVW5pdCxcbiAgICAgIGNoYXJ0UmVjdCxcbiAgICAgIHRoaXMudGlja3MsXG4gICAgICBvcHRpb25zKTtcblxuICAgIHRoaXMuc3RlcExlbmd0aCA9IHRoaXMuYXhpc0xlbmd0aCAvIHRoaXMuZGl2aXNvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2plY3RWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmF4aXNMZW5ndGggKiAoK0NoYXJ0aXN0LmdldE11bHRpVmFsdWUodmFsdWUsIHRoaXMudW5pdHMucG9zKSAtIHRoaXMucmFuZ2UubWluKSAvICh0aGlzLnJhbmdlLm1heCAtIHRoaXMucmFuZ2UubWluKTtcbiAgfVxuXG4gIENoYXJ0aXN0LkZpeGVkU2NhbGVBeGlzID0gQ2hhcnRpc3QuQXhpcy5leHRlbmQoe1xuICAgIGNvbnN0cnVjdG9yOiBGaXhlZFNjYWxlQXhpcyxcbiAgICBwcm9qZWN0VmFsdWU6IHByb2plY3RWYWx1ZVxuICB9KTtcblxufSh3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCkpO1xuOy8qKlxuICogVGhlIHN0ZXAgYXhpcyBmb3Igc3RlcCBiYXNlZCBjaGFydHMgbGlrZSBiYXIgY2hhcnQgb3Igc3RlcCBiYXNlZCBsaW5lIGNoYXJ0cy4gSXQgdXNlcyBhIGZpeGVkIGFtb3VudCBvZiB0aWNrcyB0aGF0IHdpbGwgYmUgZXF1YWxseSBkaXN0cmlidXRlZCBhY3Jvc3MgdGhlIHdob2xlIGF4aXMgbGVuZ3RoLiBUaGUgcHJvamVjdGlvbiBpcyBkb25lIHVzaW5nIHRoZSBpbmRleCBvZiB0aGUgZGF0YSB2YWx1ZSByYXRoZXIgdGhhbiB0aGUgdmFsdWUgaXRzZWxmIGFuZCB0aGVyZWZvcmUgaXQncyBvbmx5IHVzZWZ1bCBmb3IgZGlzdHJpYnV0aW9uIHB1cnBvc2UuXG4gKiAqKk9wdGlvbnMqKlxuICogVGhlIGZvbGxvd2luZyBvcHRpb25zIGFyZSB1c2VkIGJ5IHRoaXMgYXhpcyBpbiBhZGRpdGlvbiB0byB0aGUgZGVmYXVsdCBheGlzIG9wdGlvbnMgb3V0bGluZWQgaW4gdGhlIGF4aXMgY29uZmlndXJhdGlvbiBvZiB0aGUgY2hhcnQgZGVmYXVsdCBzZXR0aW5ncy5cbiAqIGBgYGphdmFzY3JpcHRcbiAqIHZhciBvcHRpb25zID0ge1xuICogICAvLyBUaWNrcyB0byBiZSB1c2VkIHRvIGRpc3RyaWJ1dGUgYWNyb3NzIHRoZSBheGlzIGxlbmd0aC4gQXMgdGhpcyBheGlzIHR5cGUgcmVsaWVzIG9uIHRoZSBpbmRleCBvZiB0aGUgdmFsdWUgcmF0aGVyIHRoYW4gdGhlIHZhbHVlLCBhcmJpdHJhcnkgZGF0YSB0aGF0IGNhbiBiZSBjb252ZXJ0ZWQgdG8gYSBzdHJpbmcgY2FuIGJlIHVzZWQgYXMgdGlja3MuXG4gKiAgIHRpY2tzOiBbJ09uZScsICdUd28nLCAnVGhyZWUnXSxcbiAqICAgLy8gSWYgc2V0IHRvIHRydWUgdGhlIGZ1bGwgd2lkdGggd2lsbCBiZSB1c2VkIHRvIGRpc3RyaWJ1dGUgdGhlIHZhbHVlcyB3aGVyZSB0aGUgbGFzdCB2YWx1ZSB3aWxsIGJlIGF0IHRoZSBtYXhpbXVtIG9mIHRoZSBheGlzIGxlbmd0aC4gSWYgZmFsc2UgdGhlIHNwYWNlcyBiZXR3ZWVuIHRoZSB0aWNrcyB3aWxsIGJlIGV2ZW5seSBkaXN0cmlidXRlZCBpbnN0ZWFkLlxuICogICBzdHJldGNoOiB0cnVlXG4gKiB9O1xuICogYGBgXG4gKlxuICogQG1vZHVsZSBDaGFydGlzdC5TdGVwQXhpc1xuICovXG4vKiBnbG9iYWwgQ2hhcnRpc3QgKi9cbihmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIFN0ZXBBeGlzKGF4aXNVbml0LCBkYXRhLCBjaGFydFJlY3QsIG9wdGlvbnMpIHtcbiAgICBDaGFydGlzdC5TdGVwQXhpcy5zdXBlci5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsXG4gICAgICBheGlzVW5pdCxcbiAgICAgIGNoYXJ0UmVjdCxcbiAgICAgIG9wdGlvbnMudGlja3MsXG4gICAgICBvcHRpb25zKTtcblxuICAgIHZhciBjYWxjID0gTWF0aC5tYXgoMSwgb3B0aW9ucy50aWNrcy5sZW5ndGggLSAob3B0aW9ucy5zdHJldGNoID8gMSA6IDApKTtcbiAgICB0aGlzLnN0ZXBMZW5ndGggPSB0aGlzLmF4aXNMZW5ndGggLyBjYWxjO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvamVjdFZhbHVlKHZhbHVlLCBpbmRleCkge1xuICAgIHJldHVybiB0aGlzLnN0ZXBMZW5ndGggKiBpbmRleDtcbiAgfVxuXG4gIENoYXJ0aXN0LlN0ZXBBeGlzID0gQ2hhcnRpc3QuQXhpcy5leHRlbmQoe1xuICAgIGNvbnN0cnVjdG9yOiBTdGVwQXhpcyxcbiAgICBwcm9qZWN0VmFsdWU6IHByb2plY3RWYWx1ZVxuICB9KTtcblxufSh3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCkpO1xuOy8qKlxuICogVGhlIENoYXJ0aXN0IGxpbmUgY2hhcnQgY2FuIGJlIHVzZWQgdG8gZHJhdyBMaW5lIG9yIFNjYXR0ZXIgY2hhcnRzLiBJZiB1c2VkIGluIHRoZSBicm93c2VyIHlvdSBjYW4gYWNjZXNzIHRoZSBnbG9iYWwgYENoYXJ0aXN0YCBuYW1lc3BhY2Ugd2hlcmUgeW91IGZpbmQgdGhlIGBMaW5lYCBmdW5jdGlvbiBhcyBhIG1haW4gZW50cnkgcG9pbnQuXG4gKlxuICogRm9yIGV4YW1wbGVzIG9uIGhvdyB0byB1c2UgdGhlIGxpbmUgY2hhcnQgcGxlYXNlIGNoZWNrIHRoZSBleGFtcGxlcyBvZiB0aGUgYENoYXJ0aXN0LkxpbmVgIG1ldGhvZC5cbiAqXG4gKiBAbW9kdWxlIENoYXJ0aXN0LkxpbmVcbiAqL1xuLyogZ2xvYmFsIENoYXJ0aXN0ICovXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3Qpe1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgb3B0aW9ucyBpbiBsaW5lIGNoYXJ0cy4gRXhwYW5kIHRoZSBjb2RlIHZpZXcgdG8gc2VlIGEgZGV0YWlsZWQgbGlzdCBvZiBvcHRpb25zIHdpdGggY29tbWVudHMuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBDaGFydGlzdC5MaW5lXG4gICAqL1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgLy8gT3B0aW9ucyBmb3IgWC1BeGlzXG4gICAgYXhpc1g6IHtcbiAgICAgIC8vIFRoZSBvZmZzZXQgb2YgdGhlIGxhYmVscyB0byB0aGUgY2hhcnQgYXJlYVxuICAgICAgb2Zmc2V0OiAzMCxcbiAgICAgIC8vIFBvc2l0aW9uIHdoZXJlIGxhYmVscyBhcmUgcGxhY2VkLiBDYW4gYmUgc2V0IHRvIGBzdGFydGAgb3IgYGVuZGAgd2hlcmUgYHN0YXJ0YCBpcyBlcXVpdmFsZW50IHRvIGxlZnQgb3IgdG9wIG9uIHZlcnRpY2FsIGF4aXMgYW5kIGBlbmRgIGlzIGVxdWl2YWxlbnQgdG8gcmlnaHQgb3IgYm90dG9tIG9uIGhvcml6b250YWwgYXhpcy5cbiAgICAgIHBvc2l0aW9uOiAnZW5kJyxcbiAgICAgIC8vIEFsbG93cyB5b3UgdG8gY29ycmVjdCBsYWJlbCBwb3NpdGlvbmluZyBvbiB0aGlzIGF4aXMgYnkgcG9zaXRpdmUgb3IgbmVnYXRpdmUgeCBhbmQgeSBvZmZzZXQuXG4gICAgICBsYWJlbE9mZnNldDoge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgICB9LFxuICAgICAgLy8gSWYgbGFiZWxzIHNob3VsZCBiZSBzaG93biBvciBub3RcbiAgICAgIHNob3dMYWJlbDogdHJ1ZSxcbiAgICAgIC8vIElmIHRoZSBheGlzIGdyaWQgc2hvdWxkIGJlIGRyYXduIG9yIG5vdFxuICAgICAgc2hvd0dyaWQ6IHRydWUsXG4gICAgICAvLyBJbnRlcnBvbGF0aW9uIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIHlvdSB0byBpbnRlcmNlcHQgdGhlIHZhbHVlIGZyb20gdGhlIGF4aXMgbGFiZWxcbiAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYzogQ2hhcnRpc3Qubm9vcCxcbiAgICAgIC8vIFNldCB0aGUgYXhpcyB0eXBlIHRvIGJlIHVzZWQgdG8gcHJvamVjdCB2YWx1ZXMgb24gdGhpcyBheGlzLiBJZiBub3QgZGVmaW5lZCwgQ2hhcnRpc3QuU3RlcEF4aXMgd2lsbCBiZSB1c2VkIGZvciB0aGUgWC1BeGlzLCB3aGVyZSB0aGUgdGlja3Mgb3B0aW9uIHdpbGwgYmUgc2V0IHRvIHRoZSBsYWJlbHMgaW4gdGhlIGRhdGEgYW5kIHRoZSBzdHJldGNoIG9wdGlvbiB3aWxsIGJlIHNldCB0byB0aGUgZ2xvYmFsIGZ1bGxXaWR0aCBvcHRpb24uIFRoaXMgdHlwZSBjYW4gYmUgY2hhbmdlZCB0byBhbnkgYXhpcyBjb25zdHJ1Y3RvciBhdmFpbGFibGUgKGUuZy4gQ2hhcnRpc3QuRml4ZWRTY2FsZUF4aXMpLCB3aGVyZSBhbGwgYXhpcyBvcHRpb25zIHNob3VsZCBiZSBwcmVzZW50IGhlcmUuXG4gICAgICB0eXBlOiB1bmRlZmluZWRcbiAgICB9LFxuICAgIC8vIE9wdGlvbnMgZm9yIFktQXhpc1xuICAgIGF4aXNZOiB7XG4gICAgICAvLyBUaGUgb2Zmc2V0IG9mIHRoZSBsYWJlbHMgdG8gdGhlIGNoYXJ0IGFyZWFcbiAgICAgIG9mZnNldDogNDAsXG4gICAgICAvLyBQb3NpdGlvbiB3aGVyZSBsYWJlbHMgYXJlIHBsYWNlZC4gQ2FuIGJlIHNldCB0byBgc3RhcnRgIG9yIGBlbmRgIHdoZXJlIGBzdGFydGAgaXMgZXF1aXZhbGVudCB0byBsZWZ0IG9yIHRvcCBvbiB2ZXJ0aWNhbCBheGlzIGFuZCBgZW5kYCBpcyBlcXVpdmFsZW50IHRvIHJpZ2h0IG9yIGJvdHRvbSBvbiBob3Jpem9udGFsIGF4aXMuXG4gICAgICBwb3NpdGlvbjogJ3N0YXJ0JyxcbiAgICAgIC8vIEFsbG93cyB5b3UgdG8gY29ycmVjdCBsYWJlbCBwb3NpdGlvbmluZyBvbiB0aGlzIGF4aXMgYnkgcG9zaXRpdmUgb3IgbmVnYXRpdmUgeCBhbmQgeSBvZmZzZXQuXG4gICAgICBsYWJlbE9mZnNldDoge1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwXG4gICAgICB9LFxuICAgICAgLy8gSWYgbGFiZWxzIHNob3VsZCBiZSBzaG93biBvciBub3RcbiAgICAgIHNob3dMYWJlbDogdHJ1ZSxcbiAgICAgIC8vIElmIHRoZSBheGlzIGdyaWQgc2hvdWxkIGJlIGRyYXduIG9yIG5vdFxuICAgICAgc2hvd0dyaWQ6IHRydWUsXG4gICAgICAvLyBJbnRlcnBvbGF0aW9uIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIHlvdSB0byBpbnRlcmNlcHQgdGhlIHZhbHVlIGZyb20gdGhlIGF4aXMgbGFiZWxcbiAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYzogQ2hhcnRpc3Qubm9vcCxcbiAgICAgIC8vIFNldCB0aGUgYXhpcyB0eXBlIHRvIGJlIHVzZWQgdG8gcHJvamVjdCB2YWx1ZXMgb24gdGhpcyBheGlzLiBJZiBub3QgZGVmaW5lZCwgQ2hhcnRpc3QuQXV0b1NjYWxlQXhpcyB3aWxsIGJlIHVzZWQgZm9yIHRoZSBZLUF4aXMsIHdoZXJlIHRoZSBoaWdoIGFuZCBsb3cgb3B0aW9ucyB3aWxsIGJlIHNldCB0byB0aGUgZ2xvYmFsIGhpZ2ggYW5kIGxvdyBvcHRpb25zLiBUaGlzIHR5cGUgY2FuIGJlIGNoYW5nZWQgdG8gYW55IGF4aXMgY29uc3RydWN0b3IgYXZhaWxhYmxlIChlLmcuIENoYXJ0aXN0LkZpeGVkU2NhbGVBeGlzKSwgd2hlcmUgYWxsIGF4aXMgb3B0aW9ucyBzaG91bGQgYmUgcHJlc2VudCBoZXJlLlxuICAgICAgdHlwZTogdW5kZWZpbmVkLFxuICAgICAgLy8gVGhpcyB2YWx1ZSBzcGVjaWZpZXMgdGhlIG1pbmltdW0gaGVpZ2h0IGluIHBpeGVsIG9mIHRoZSBzY2FsZSBzdGVwc1xuICAgICAgc2NhbGVNaW5TcGFjZTogMjAsXG4gICAgICAvLyBVc2Ugb25seSBpbnRlZ2VyIHZhbHVlcyAod2hvbGUgbnVtYmVycykgZm9yIHRoZSBzY2FsZSBzdGVwc1xuICAgICAgb25seUludGVnZXI6IGZhbHNlXG4gICAgfSxcbiAgICAvLyBTcGVjaWZ5IGEgZml4ZWQgd2lkdGggZm9yIHRoZSBjaGFydCBhcyBhIHN0cmluZyAoaS5lLiAnMTAwcHgnIG9yICc1MCUnKVxuICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgLy8gU3BlY2lmeSBhIGZpeGVkIGhlaWdodCBmb3IgdGhlIGNoYXJ0IGFzIGEgc3RyaW5nIChpLmUuICcxMDBweCcgb3IgJzUwJScpXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgLy8gSWYgdGhlIGxpbmUgc2hvdWxkIGJlIGRyYXduIG9yIG5vdFxuICAgIHNob3dMaW5lOiB0cnVlLFxuICAgIC8vIElmIGRvdHMgc2hvdWxkIGJlIGRyYXduIG9yIG5vdFxuICAgIHNob3dQb2ludDogdHJ1ZSxcbiAgICAvLyBJZiB0aGUgbGluZSBjaGFydCBzaG91bGQgZHJhdyBhbiBhcmVhXG4gICAgc2hvd0FyZWE6IGZhbHNlLFxuICAgIC8vIFRoZSBiYXNlIGZvciB0aGUgYXJlYSBjaGFydCB0aGF0IHdpbGwgYmUgdXNlZCB0byBjbG9zZSB0aGUgYXJlYSBzaGFwZSAoaXMgbm9ybWFsbHkgMClcbiAgICBhcmVhQmFzZTogMCxcbiAgICAvLyBTcGVjaWZ5IGlmIHRoZSBsaW5lcyBzaG91bGQgYmUgc21vb3RoZWQuIFRoaXMgdmFsdWUgY2FuIGJlIHRydWUgb3IgZmFsc2Ugd2hlcmUgdHJ1ZSB3aWxsIHJlc3VsdCBpbiBzbW9vdGhpbmcgdXNpbmcgdGhlIGRlZmF1bHQgc21vb3RoaW5nIGludGVycG9sYXRpb24gZnVuY3Rpb24gQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbi5jYXJkaW5hbCBhbmQgZmFsc2UgcmVzdWx0cyBpbiBDaGFydGlzdC5JbnRlcnBvbGF0aW9uLm5vbmUuIFlvdSBjYW4gYWxzbyBjaG9vc2Ugb3RoZXIgc21vb3RoaW5nIC8gaW50ZXJwb2xhdGlvbiBmdW5jdGlvbnMgYXZhaWxhYmxlIGluIHRoZSBDaGFydGlzdC5JbnRlcnBvbGF0aW9uIG1vZHVsZSwgb3Igd3JpdGUgeW91ciBvd24gaW50ZXJwb2xhdGlvbiBmdW5jdGlvbi4gQ2hlY2sgdGhlIGV4YW1wbGVzIGZvciBhIGJyaWVmIGRlc2NyaXB0aW9uLlxuICAgIGxpbmVTbW9vdGg6IHRydWUsXG4gICAgLy8gSWYgdGhlIGxpbmUgY2hhcnQgc2hvdWxkIGFkZCBhIGJhY2tncm91bmQgZmlsbCB0byB0aGUgLmN0LWdyaWRzIGdyb3VwLlxuICAgIHNob3dHcmlkQmFja2dyb3VuZDogZmFsc2UsXG4gICAgLy8gT3ZlcnJpZGluZyB0aGUgbmF0dXJhbCBsb3cgb2YgdGhlIGNoYXJ0IGFsbG93cyB5b3UgdG8gem9vbSBpbiBvciBsaW1pdCB0aGUgY2hhcnRzIGxvd2VzdCBkaXNwbGF5ZWQgdmFsdWVcbiAgICBsb3c6IHVuZGVmaW5lZCxcbiAgICAvLyBPdmVycmlkaW5nIHRoZSBuYXR1cmFsIGhpZ2ggb2YgdGhlIGNoYXJ0IGFsbG93cyB5b3UgdG8gem9vbSBpbiBvciBsaW1pdCB0aGUgY2hhcnRzIGhpZ2hlc3QgZGlzcGxheWVkIHZhbHVlXG4gICAgaGlnaDogdW5kZWZpbmVkLFxuICAgIC8vIFBhZGRpbmcgb2YgdGhlIGNoYXJ0IGRyYXdpbmcgYXJlYSB0byB0aGUgY29udGFpbmVyIGVsZW1lbnQgYW5kIGxhYmVscyBhcyBhIG51bWJlciBvciBwYWRkaW5nIG9iamVjdCB7dG9wOiA1LCByaWdodDogNSwgYm90dG9tOiA1LCBsZWZ0OiA1fVxuICAgIGNoYXJ0UGFkZGluZzoge1xuICAgICAgdG9wOiAxNSxcbiAgICAgIHJpZ2h0OiAxNSxcbiAgICAgIGJvdHRvbTogNSxcbiAgICAgIGxlZnQ6IDEwXG4gICAgfSxcbiAgICAvLyBXaGVuIHNldCB0byB0cnVlLCB0aGUgbGFzdCBncmlkIGxpbmUgb24gdGhlIHgtYXhpcyBpcyBub3QgZHJhd24gYW5kIHRoZSBjaGFydCBlbGVtZW50cyB3aWxsIGV4cGFuZCB0byB0aGUgZnVsbCBhdmFpbGFibGUgd2lkdGggb2YgdGhlIGNoYXJ0LiBGb3IgdGhlIGxhc3QgbGFiZWwgdG8gYmUgZHJhd24gY29ycmVjdGx5IHlvdSBtaWdodCBuZWVkIHRvIGFkZCBjaGFydCBwYWRkaW5nIG9yIG9mZnNldCB0aGUgbGFzdCBsYWJlbCB3aXRoIGEgZHJhdyBldmVudCBoYW5kbGVyLlxuICAgIGZ1bGxXaWR0aDogZmFsc2UsXG4gICAgLy8gSWYgdHJ1ZSB0aGUgd2hvbGUgZGF0YSBpcyByZXZlcnNlZCBpbmNsdWRpbmcgbGFiZWxzLCB0aGUgc2VyaWVzIG9yZGVyIGFzIHdlbGwgYXMgdGhlIHdob2xlIHNlcmllcyBkYXRhIGFycmF5cy5cbiAgICByZXZlcnNlRGF0YTogZmFsc2UsXG4gICAgLy8gT3ZlcnJpZGUgdGhlIGNsYXNzIG5hbWVzIHRoYXQgZ2V0IHVzZWQgdG8gZ2VuZXJhdGUgdGhlIFNWRyBzdHJ1Y3R1cmUgb2YgdGhlIGNoYXJ0XG4gICAgY2xhc3NOYW1lczoge1xuICAgICAgY2hhcnQ6ICdjdC1jaGFydC1saW5lJyxcbiAgICAgIGxhYmVsOiAnY3QtbGFiZWwnLFxuICAgICAgbGFiZWxHcm91cDogJ2N0LWxhYmVscycsXG4gICAgICBzZXJpZXM6ICdjdC1zZXJpZXMnLFxuICAgICAgbGluZTogJ2N0LWxpbmUnLFxuICAgICAgcG9pbnQ6ICdjdC1wb2ludCcsXG4gICAgICBhcmVhOiAnY3QtYXJlYScsXG4gICAgICBncmlkOiAnY3QtZ3JpZCcsXG4gICAgICBncmlkR3JvdXA6ICdjdC1ncmlkcycsXG4gICAgICBncmlkQmFja2dyb3VuZDogJ2N0LWdyaWQtYmFja2dyb3VuZCcsXG4gICAgICB2ZXJ0aWNhbDogJ2N0LXZlcnRpY2FsJyxcbiAgICAgIGhvcml6b250YWw6ICdjdC1ob3Jpem9udGFsJyxcbiAgICAgIHN0YXJ0OiAnY3Qtc3RhcnQnLFxuICAgICAgZW5kOiAnY3QtZW5kJ1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBjaGFydFxuICAgKlxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhcnQob3B0aW9ucykge1xuICAgIHZhciBkYXRhID0gQ2hhcnRpc3Qubm9ybWFsaXplRGF0YSh0aGlzLmRhdGEsIG9wdGlvbnMucmV2ZXJzZURhdGEsIHRydWUpO1xuXG4gICAgLy8gQ3JlYXRlIG5ldyBzdmcgb2JqZWN0XG4gICAgdGhpcy5zdmcgPSBDaGFydGlzdC5jcmVhdGVTdmcodGhpcy5jb250YWluZXIsIG9wdGlvbnMud2lkdGgsIG9wdGlvbnMuaGVpZ2h0LCBvcHRpb25zLmNsYXNzTmFtZXMuY2hhcnQpO1xuICAgIC8vIENyZWF0ZSBncm91cHMgZm9yIGxhYmVscywgZ3JpZCBhbmQgc2VyaWVzXG4gICAgdmFyIGdyaWRHcm91cCA9IHRoaXMuc3ZnLmVsZW0oJ2cnKS5hZGRDbGFzcyhvcHRpb25zLmNsYXNzTmFtZXMuZ3JpZEdyb3VwKTtcbiAgICB2YXIgc2VyaWVzR3JvdXAgPSB0aGlzLnN2Zy5lbGVtKCdnJyk7XG4gICAgdmFyIGxhYmVsR3JvdXAgPSB0aGlzLnN2Zy5lbGVtKCdnJykuYWRkQ2xhc3Mob3B0aW9ucy5jbGFzc05hbWVzLmxhYmVsR3JvdXApO1xuXG4gICAgdmFyIGNoYXJ0UmVjdCA9IENoYXJ0aXN0LmNyZWF0ZUNoYXJ0UmVjdCh0aGlzLnN2Zywgb3B0aW9ucywgZGVmYXVsdE9wdGlvbnMucGFkZGluZyk7XG4gICAgdmFyIGF4aXNYLCBheGlzWTtcblxuICAgIGlmKG9wdGlvbnMuYXhpc1gudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBheGlzWCA9IG5ldyBDaGFydGlzdC5TdGVwQXhpcyhDaGFydGlzdC5BeGlzLnVuaXRzLngsIGRhdGEubm9ybWFsaXplZC5zZXJpZXMsIGNoYXJ0UmVjdCwgQ2hhcnRpc3QuZXh0ZW5kKHt9LCBvcHRpb25zLmF4aXNYLCB7XG4gICAgICAgIHRpY2tzOiBkYXRhLm5vcm1hbGl6ZWQubGFiZWxzLFxuICAgICAgICBzdHJldGNoOiBvcHRpb25zLmZ1bGxXaWR0aFxuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBheGlzWCA9IG9wdGlvbnMuYXhpc1gudHlwZS5jYWxsKENoYXJ0aXN0LCBDaGFydGlzdC5BeGlzLnVuaXRzLngsIGRhdGEubm9ybWFsaXplZC5zZXJpZXMsIGNoYXJ0UmVjdCwgb3B0aW9ucy5heGlzWCk7XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5heGlzWS50eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGF4aXNZID0gbmV3IENoYXJ0aXN0LkF1dG9TY2FsZUF4aXMoQ2hhcnRpc3QuQXhpcy51bml0cy55LCBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzLCBjaGFydFJlY3QsIENoYXJ0aXN0LmV4dGVuZCh7fSwgb3B0aW9ucy5heGlzWSwge1xuICAgICAgICBoaWdoOiBDaGFydGlzdC5pc051bWVyaWMob3B0aW9ucy5oaWdoKSA/IG9wdGlvbnMuaGlnaCA6IG9wdGlvbnMuYXhpc1kuaGlnaCxcbiAgICAgICAgbG93OiBDaGFydGlzdC5pc051bWVyaWMob3B0aW9ucy5sb3cpID8gb3B0aW9ucy5sb3cgOiBvcHRpb25zLmF4aXNZLmxvd1xuICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBheGlzWSA9IG9wdGlvbnMuYXhpc1kudHlwZS5jYWxsKENoYXJ0aXN0LCBDaGFydGlzdC5BeGlzLnVuaXRzLnksIGRhdGEubm9ybWFsaXplZC5zZXJpZXMsIGNoYXJ0UmVjdCwgb3B0aW9ucy5heGlzWSk7XG4gICAgfVxuXG4gICAgYXhpc1guY3JlYXRlR3JpZEFuZExhYmVscyhncmlkR3JvdXAsIGxhYmVsR3JvdXAsIHRoaXMuc3VwcG9ydHNGb3JlaWduT2JqZWN0LCBvcHRpb25zLCB0aGlzLmV2ZW50RW1pdHRlcik7XG4gICAgYXhpc1kuY3JlYXRlR3JpZEFuZExhYmVscyhncmlkR3JvdXAsIGxhYmVsR3JvdXAsIHRoaXMuc3VwcG9ydHNGb3JlaWduT2JqZWN0LCBvcHRpb25zLCB0aGlzLmV2ZW50RW1pdHRlcik7XG5cbiAgICBpZiAob3B0aW9ucy5zaG93R3JpZEJhY2tncm91bmQpIHtcbiAgICAgIENoYXJ0aXN0LmNyZWF0ZUdyaWRCYWNrZ3JvdW5kKGdyaWRHcm91cCwgY2hhcnRSZWN0LCBvcHRpb25zLmNsYXNzTmFtZXMuZ3JpZEJhY2tncm91bmQsIHRoaXMuZXZlbnRFbWl0dGVyKTtcbiAgICB9XG5cbiAgICAvLyBEcmF3IHRoZSBzZXJpZXNcbiAgICBkYXRhLnJhdy5zZXJpZXMuZm9yRWFjaChmdW5jdGlvbihzZXJpZXMsIHNlcmllc0luZGV4KSB7XG4gICAgICB2YXIgc2VyaWVzRWxlbWVudCA9IHNlcmllc0dyb3VwLmVsZW0oJ2cnKTtcblxuICAgICAgLy8gV3JpdGUgYXR0cmlidXRlcyB0byBzZXJpZXMgZ3JvdXAgZWxlbWVudC4gSWYgc2VyaWVzIG5hbWUgb3IgbWV0YSBpcyB1bmRlZmluZWQgdGhlIGF0dHJpYnV0ZXMgd2lsbCBub3QgYmUgd3JpdHRlblxuICAgICAgc2VyaWVzRWxlbWVudC5hdHRyKHtcbiAgICAgICAgJ2N0OnNlcmllcy1uYW1lJzogc2VyaWVzLm5hbWUsXG4gICAgICAgICdjdDptZXRhJzogQ2hhcnRpc3Quc2VyaWFsaXplKHNlcmllcy5tZXRhKVxuICAgICAgfSk7XG5cbiAgICAgIC8vIFVzZSBzZXJpZXMgY2xhc3MgZnJvbSBzZXJpZXMgZGF0YSBvciBpZiBub3Qgc2V0IGdlbmVyYXRlIG9uZVxuICAgICAgc2VyaWVzRWxlbWVudC5hZGRDbGFzcyhbXG4gICAgICAgIG9wdGlvbnMuY2xhc3NOYW1lcy5zZXJpZXMsXG4gICAgICAgIChzZXJpZXMuY2xhc3NOYW1lIHx8IG9wdGlvbnMuY2xhc3NOYW1lcy5zZXJpZXMgKyAnLScgKyBDaGFydGlzdC5hbHBoYU51bWVyYXRlKHNlcmllc0luZGV4KSlcbiAgICAgIF0uam9pbignICcpKTtcblxuICAgICAgdmFyIHBhdGhDb29yZGluYXRlcyA9IFtdLFxuICAgICAgICBwYXRoRGF0YSA9IFtdO1xuXG4gICAgICBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzW3Nlcmllc0luZGV4XS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCB2YWx1ZUluZGV4KSB7XG4gICAgICAgIHZhciBwID0ge1xuICAgICAgICAgIHg6IGNoYXJ0UmVjdC54MSArIGF4aXNYLnByb2plY3RWYWx1ZSh2YWx1ZSwgdmFsdWVJbmRleCwgZGF0YS5ub3JtYWxpemVkLnNlcmllc1tzZXJpZXNJbmRleF0pLFxuICAgICAgICAgIHk6IGNoYXJ0UmVjdC55MSAtIGF4aXNZLnByb2plY3RWYWx1ZSh2YWx1ZSwgdmFsdWVJbmRleCwgZGF0YS5ub3JtYWxpemVkLnNlcmllc1tzZXJpZXNJbmRleF0pXG4gICAgICAgIH07XG4gICAgICAgIHBhdGhDb29yZGluYXRlcy5wdXNoKHAueCwgcC55KTtcbiAgICAgICAgcGF0aERhdGEucHVzaCh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIHZhbHVlSW5kZXg6IHZhbHVlSW5kZXgsXG4gICAgICAgICAgbWV0YTogQ2hhcnRpc3QuZ2V0TWV0YURhdGEoc2VyaWVzLCB2YWx1ZUluZGV4KVxuICAgICAgICB9KTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAgIHZhciBzZXJpZXNPcHRpb25zID0ge1xuICAgICAgICBsaW5lU21vb3RoOiBDaGFydGlzdC5nZXRTZXJpZXNPcHRpb24oc2VyaWVzLCBvcHRpb25zLCAnbGluZVNtb290aCcpLFxuICAgICAgICBzaG93UG9pbnQ6IENoYXJ0aXN0LmdldFNlcmllc09wdGlvbihzZXJpZXMsIG9wdGlvbnMsICdzaG93UG9pbnQnKSxcbiAgICAgICAgc2hvd0xpbmU6IENoYXJ0aXN0LmdldFNlcmllc09wdGlvbihzZXJpZXMsIG9wdGlvbnMsICdzaG93TGluZScpLFxuICAgICAgICBzaG93QXJlYTogQ2hhcnRpc3QuZ2V0U2VyaWVzT3B0aW9uKHNlcmllcywgb3B0aW9ucywgJ3Nob3dBcmVhJyksXG4gICAgICAgIGFyZWFCYXNlOiBDaGFydGlzdC5nZXRTZXJpZXNPcHRpb24oc2VyaWVzLCBvcHRpb25zLCAnYXJlYUJhc2UnKVxuICAgICAgfTtcblxuICAgICAgdmFyIHNtb290aGluZyA9IHR5cGVvZiBzZXJpZXNPcHRpb25zLmxpbmVTbW9vdGggPT09ICdmdW5jdGlvbicgP1xuICAgICAgICBzZXJpZXNPcHRpb25zLmxpbmVTbW9vdGggOiAoc2VyaWVzT3B0aW9ucy5saW5lU21vb3RoID8gQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbi5tb25vdG9uZUN1YmljKCkgOiBDaGFydGlzdC5JbnRlcnBvbGF0aW9uLm5vbmUoKSk7XG4gICAgICAvLyBJbnRlcnBvbGF0aW5nIHBhdGggd2hlcmUgcGF0aERhdGEgd2lsbCBiZSB1c2VkIHRvIGFubm90YXRlIGVhY2ggcGF0aCBlbGVtZW50IHNvIHdlIGNhbiB0cmFjZSBiYWNrIHRoZSBvcmlnaW5hbFxuICAgICAgLy8gaW5kZXgsIHZhbHVlIGFuZCBtZXRhIGRhdGFcbiAgICAgIHZhciBwYXRoID0gc21vb3RoaW5nKHBhdGhDb29yZGluYXRlcywgcGF0aERhdGEpO1xuXG4gICAgICAvLyBJZiB3ZSBzaG91bGQgc2hvdyBwb2ludHMgd2UgbmVlZCB0byBjcmVhdGUgdGhlbSBub3cgdG8gYXZvaWQgc2Vjb25kYXJ5IGxvb3BcbiAgICAgIC8vIFBvaW50cyBhcmUgZHJhd24gZnJvbSB0aGUgcGF0aEVsZW1lbnRzIHJldHVybmVkIGJ5IHRoZSBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uXG4gICAgICAvLyBTbWFsbCBvZmZzZXQgZm9yIEZpcmVmb3ggdG8gcmVuZGVyIHNxdWFyZXMgY29ycmVjdGx5XG4gICAgICBpZiAoc2VyaWVzT3B0aW9ucy5zaG93UG9pbnQpIHtcblxuICAgICAgICBwYXRoLnBhdGhFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKHBhdGhFbGVtZW50KSB7XG4gICAgICAgICAgdmFyIHBvaW50ID0gc2VyaWVzRWxlbWVudC5lbGVtKCdsaW5lJywge1xuICAgICAgICAgICAgeDE6IHBhdGhFbGVtZW50LngsXG4gICAgICAgICAgICB5MTogcGF0aEVsZW1lbnQueSxcbiAgICAgICAgICAgIHgyOiBwYXRoRWxlbWVudC54ICsgMC4wMSxcbiAgICAgICAgICAgIHkyOiBwYXRoRWxlbWVudC55XG4gICAgICAgICAgfSwgb3B0aW9ucy5jbGFzc05hbWVzLnBvaW50KS5hdHRyKHtcbiAgICAgICAgICAgICdjdDp2YWx1ZSc6IFtwYXRoRWxlbWVudC5kYXRhLnZhbHVlLngsIHBhdGhFbGVtZW50LmRhdGEudmFsdWUueV0uZmlsdGVyKENoYXJ0aXN0LmlzTnVtZXJpYykuam9pbignLCcpLFxuICAgICAgICAgICAgJ2N0Om1ldGEnOiBDaGFydGlzdC5zZXJpYWxpemUocGF0aEVsZW1lbnQuZGF0YS5tZXRhKVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgnZHJhdycsIHtcbiAgICAgICAgICAgIHR5cGU6ICdwb2ludCcsXG4gICAgICAgICAgICB2YWx1ZTogcGF0aEVsZW1lbnQuZGF0YS52YWx1ZSxcbiAgICAgICAgICAgIGluZGV4OiBwYXRoRWxlbWVudC5kYXRhLnZhbHVlSW5kZXgsXG4gICAgICAgICAgICBtZXRhOiBwYXRoRWxlbWVudC5kYXRhLm1ldGEsXG4gICAgICAgICAgICBzZXJpZXM6IHNlcmllcyxcbiAgICAgICAgICAgIHNlcmllc0luZGV4OiBzZXJpZXNJbmRleCxcbiAgICAgICAgICAgIGF4aXNYOiBheGlzWCxcbiAgICAgICAgICAgIGF4aXNZOiBheGlzWSxcbiAgICAgICAgICAgIGdyb3VwOiBzZXJpZXNFbGVtZW50LFxuICAgICAgICAgICAgZWxlbWVudDogcG9pbnQsXG4gICAgICAgICAgICB4OiBwYXRoRWxlbWVudC54LFxuICAgICAgICAgICAgeTogcGF0aEVsZW1lbnQueVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfVxuXG4gICAgICBpZihzZXJpZXNPcHRpb25zLnNob3dMaW5lKSB7XG4gICAgICAgIHZhciBsaW5lID0gc2VyaWVzRWxlbWVudC5lbGVtKCdwYXRoJywge1xuICAgICAgICAgIGQ6IHBhdGguc3RyaW5naWZ5KClcbiAgICAgICAgfSwgb3B0aW9ucy5jbGFzc05hbWVzLmxpbmUsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ2RyYXcnLCB7XG4gICAgICAgICAgdHlwZTogJ2xpbmUnLFxuICAgICAgICAgIHZhbHVlczogZGF0YS5ub3JtYWxpemVkLnNlcmllc1tzZXJpZXNJbmRleF0sXG4gICAgICAgICAgcGF0aDogcGF0aC5jbG9uZSgpLFxuICAgICAgICAgIGNoYXJ0UmVjdDogY2hhcnRSZWN0LFxuICAgICAgICAgIGluZGV4OiBzZXJpZXNJbmRleCxcbiAgICAgICAgICBzZXJpZXM6IHNlcmllcyxcbiAgICAgICAgICBzZXJpZXNJbmRleDogc2VyaWVzSW5kZXgsXG4gICAgICAgICAgc2VyaWVzTWV0YTogc2VyaWVzLm1ldGEsXG4gICAgICAgICAgYXhpc1g6IGF4aXNYLFxuICAgICAgICAgIGF4aXNZOiBheGlzWSxcbiAgICAgICAgICBncm91cDogc2VyaWVzRWxlbWVudCxcbiAgICAgICAgICBlbGVtZW50OiBsaW5lXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBBcmVhIGN1cnJlbnRseSBvbmx5IHdvcmtzIHdpdGggYXhlcyB0aGF0IHN1cHBvcnQgYSByYW5nZSFcbiAgICAgIGlmKHNlcmllc09wdGlvbnMuc2hvd0FyZWEgJiYgYXhpc1kucmFuZ2UpIHtcbiAgICAgICAgLy8gSWYgYXJlYUJhc2UgaXMgb3V0c2lkZSB0aGUgY2hhcnQgYXJlYSAoPCBtaW4gb3IgPiBtYXgpIHdlIG5lZWQgdG8gc2V0IGl0IHJlc3BlY3RpdmVseSBzbyB0aGF0XG4gICAgICAgIC8vIHRoZSBhcmVhIGlzIG5vdCBkcmF3biBvdXRzaWRlIHRoZSBjaGFydCBhcmVhLlxuICAgICAgICB2YXIgYXJlYUJhc2UgPSBNYXRoLm1heChNYXRoLm1pbihzZXJpZXNPcHRpb25zLmFyZWFCYXNlLCBheGlzWS5yYW5nZS5tYXgpLCBheGlzWS5yYW5nZS5taW4pO1xuXG4gICAgICAgIC8vIFdlIHByb2plY3QgdGhlIGFyZWFCYXNlIHZhbHVlIGludG8gc2NyZWVuIGNvb3JkaW5hdGVzXG4gICAgICAgIHZhciBhcmVhQmFzZVByb2plY3RlZCA9IGNoYXJ0UmVjdC55MSAtIGF4aXNZLnByb2plY3RWYWx1ZShhcmVhQmFzZSk7XG5cbiAgICAgICAgLy8gSW4gb3JkZXIgdG8gZm9ybSB0aGUgYXJlYSB3ZSdsbCBmaXJzdCBzcGxpdCB0aGUgcGF0aCBieSBtb3ZlIGNvbW1hbmRzIHNvIHdlIGNhbiBjaHVuayBpdCB1cCBpbnRvIHNlZ21lbnRzXG4gICAgICAgIHBhdGguc3BsaXRCeUNvbW1hbmQoJ00nKS5maWx0ZXIoZnVuY3Rpb24gb25seVNvbGlkU2VnbWVudHMocGF0aFNlZ21lbnQpIHtcbiAgICAgICAgICAvLyBXZSBmaWx0ZXIgb25seSBcInNvbGlkXCIgc2VnbWVudHMgdGhhdCBjb250YWluIG1vcmUgdGhhbiBvbmUgcG9pbnQuIE90aGVyd2lzZSB0aGVyZSdzIG5vIG5lZWQgZm9yIGFuIGFyZWFcbiAgICAgICAgICByZXR1cm4gcGF0aFNlZ21lbnQucGF0aEVsZW1lbnRzLmxlbmd0aCA+IDE7XG4gICAgICAgIH0pLm1hcChmdW5jdGlvbiBjb252ZXJ0VG9BcmVhKHNvbGlkUGF0aFNlZ21lbnRzKSB7XG4gICAgICAgICAgLy8gUmVjZWl2aW5nIHRoZSBmaWx0ZXJlZCBzb2xpZCBwYXRoIHNlZ21lbnRzIHdlIGNhbiBub3cgY29udmVydCB0aG9zZSBzZWdtZW50cyBpbnRvIGZpbGwgYXJlYXNcbiAgICAgICAgICB2YXIgZmlyc3RFbGVtZW50ID0gc29saWRQYXRoU2VnbWVudHMucGF0aEVsZW1lbnRzWzBdO1xuICAgICAgICAgIHZhciBsYXN0RWxlbWVudCA9IHNvbGlkUGF0aFNlZ21lbnRzLnBhdGhFbGVtZW50c1tzb2xpZFBhdGhTZWdtZW50cy5wYXRoRWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAvLyBDbG9uaW5nIHRoZSBzb2xpZCBwYXRoIHNlZ21lbnQgd2l0aCBjbG9zaW5nIG9wdGlvbiBhbmQgcmVtb3ZpbmcgdGhlIGZpcnN0IG1vdmUgY29tbWFuZCBmcm9tIHRoZSBjbG9uZVxuICAgICAgICAgIC8vIFdlIHRoZW4gaW5zZXJ0IGEgbmV3IG1vdmUgdGhhdCBzaG91bGQgc3RhcnQgYXQgdGhlIGFyZWEgYmFzZSBhbmQgZHJhdyBhIHN0cmFpZ2h0IGxpbmUgdXAgb3IgZG93blxuICAgICAgICAgIC8vIGF0IHRoZSBlbmQgb2YgdGhlIHBhdGggd2UgYWRkIGFuIGFkZGl0aW9uYWwgc3RyYWlnaHQgbGluZSB0byB0aGUgcHJvamVjdGVkIGFyZWEgYmFzZSB2YWx1ZVxuICAgICAgICAgIC8vIEFzIHRoZSBjbG9zaW5nIG9wdGlvbiBpcyBzZXQgb3VyIHBhdGggd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGNsb3NlZFxuICAgICAgICAgIHJldHVybiBzb2xpZFBhdGhTZWdtZW50cy5jbG9uZSh0cnVlKVxuICAgICAgICAgICAgLnBvc2l0aW9uKDApXG4gICAgICAgICAgICAucmVtb3ZlKDEpXG4gICAgICAgICAgICAubW92ZShmaXJzdEVsZW1lbnQueCwgYXJlYUJhc2VQcm9qZWN0ZWQpXG4gICAgICAgICAgICAubGluZShmaXJzdEVsZW1lbnQueCwgZmlyc3RFbGVtZW50LnkpXG4gICAgICAgICAgICAucG9zaXRpb24oc29saWRQYXRoU2VnbWVudHMucGF0aEVsZW1lbnRzLmxlbmd0aCArIDEpXG4gICAgICAgICAgICAubGluZShsYXN0RWxlbWVudC54LCBhcmVhQmFzZVByb2plY3RlZCk7XG5cbiAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiBjcmVhdGVBcmVhKGFyZWFQYXRoKSB7XG4gICAgICAgICAgLy8gRm9yIGVhY2ggb2Ygb3VyIG5ld2x5IGNyZWF0ZWQgYXJlYSBwYXRocywgd2UnbGwgbm93IGNyZWF0ZSBwYXRoIGVsZW1lbnRzIGJ5IHN0cmluZ2lmeWluZyBvdXIgcGF0aCBvYmplY3RzXG4gICAgICAgICAgLy8gYW5kIGFkZGluZyB0aGUgY3JlYXRlZCBET00gZWxlbWVudHMgdG8gdGhlIGNvcnJlY3Qgc2VyaWVzIGdyb3VwXG4gICAgICAgICAgdmFyIGFyZWEgPSBzZXJpZXNFbGVtZW50LmVsZW0oJ3BhdGgnLCB7XG4gICAgICAgICAgICBkOiBhcmVhUGF0aC5zdHJpbmdpZnkoKVxuICAgICAgICAgIH0sIG9wdGlvbnMuY2xhc3NOYW1lcy5hcmVhLCB0cnVlKTtcblxuICAgICAgICAgIC8vIEVtaXQgYW4gZXZlbnQgZm9yIGVhY2ggYXJlYSB0aGF0IHdhcyBkcmF3blxuICAgICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ2RyYXcnLCB7XG4gICAgICAgICAgICB0eXBlOiAnYXJlYScsXG4gICAgICAgICAgICB2YWx1ZXM6IGRhdGEubm9ybWFsaXplZC5zZXJpZXNbc2VyaWVzSW5kZXhdLFxuICAgICAgICAgICAgcGF0aDogYXJlYVBhdGguY2xvbmUoKSxcbiAgICAgICAgICAgIHNlcmllczogc2VyaWVzLFxuICAgICAgICAgICAgc2VyaWVzSW5kZXg6IHNlcmllc0luZGV4LFxuICAgICAgICAgICAgYXhpc1g6IGF4aXNYLFxuICAgICAgICAgICAgYXhpc1k6IGF4aXNZLFxuICAgICAgICAgICAgY2hhcnRSZWN0OiBjaGFydFJlY3QsXG4gICAgICAgICAgICBpbmRleDogc2VyaWVzSW5kZXgsXG4gICAgICAgICAgICBncm91cDogc2VyaWVzRWxlbWVudCxcbiAgICAgICAgICAgIGVsZW1lbnQ6IGFyZWFcbiAgICAgICAgICB9KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgnY3JlYXRlZCcsIHtcbiAgICAgIGJvdW5kczogYXhpc1kuYm91bmRzLFxuICAgICAgY2hhcnRSZWN0OiBjaGFydFJlY3QsXG4gICAgICBheGlzWDogYXhpc1gsXG4gICAgICBheGlzWTogYXhpc1ksXG4gICAgICBzdmc6IHRoaXMuc3ZnLFxuICAgICAgb3B0aW9uczogb3B0aW9uc1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGNyZWF0ZXMgYSBuZXcgbGluZSBjaGFydC5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkxpbmVcbiAgICogQHBhcmFtIHtTdHJpbmd8Tm9kZX0gcXVlcnkgQSBzZWxlY3RvciBxdWVyeSBzdHJpbmcgb3IgZGlyZWN0bHkgYSBET00gZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSBvYmplY3QgdGhhdCBuZWVkcyB0byBjb25zaXN0IG9mIGEgbGFiZWxzIGFuZCBhIHNlcmllcyBhcnJheVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFRoZSBvcHRpb25zIG9iamVjdCB3aXRoIG9wdGlvbnMgdGhhdCBvdmVycmlkZSB0aGUgZGVmYXVsdCBvcHRpb25zLiBDaGVjayB0aGUgZXhhbXBsZXMgZm9yIGEgZGV0YWlsZWQgbGlzdC5cbiAgICogQHBhcmFtIHtBcnJheX0gW3Jlc3BvbnNpdmVPcHRpb25zXSBTcGVjaWZ5IGFuIGFycmF5IG9mIHJlc3BvbnNpdmUgb3B0aW9uIGFycmF5cyB3aGljaCBhcmUgYSBtZWRpYSBxdWVyeSBhbmQgb3B0aW9ucyBvYmplY3QgcGFpciA9PiBbW21lZGlhUXVlcnlTdHJpbmcsIG9wdGlvbnNPYmplY3RdLFttb3JlLi4uXV1cbiAgICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2hpY2ggZXhwb3NlcyB0aGUgQVBJIGZvciB0aGUgY3JlYXRlZCBjaGFydFxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBDcmVhdGUgYSBzaW1wbGUgbGluZSBjaGFydFxuICAgKiB2YXIgZGF0YSA9IHtcbiAgICogICAvLyBBIGxhYmVscyBhcnJheSB0aGF0IGNhbiBjb250YWluIGFueSBzb3J0IG9mIHZhbHVlc1xuICAgKiAgIGxhYmVsczogWydNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJ10sXG4gICAqICAgLy8gT3VyIHNlcmllcyBhcnJheSB0aGF0IGNvbnRhaW5zIHNlcmllcyBvYmplY3RzIG9yIGluIHRoaXMgY2FzZSBzZXJpZXMgZGF0YSBhcnJheXNcbiAgICogICBzZXJpZXM6IFtcbiAgICogICAgIFs1LCAyLCA0LCAyLCAwXVxuICAgKiAgIF1cbiAgICogfTtcbiAgICpcbiAgICogLy8gQXMgb3B0aW9ucyB3ZSBjdXJyZW50bHkgb25seSBzZXQgYSBzdGF0aWMgc2l6ZSBvZiAzMDB4MjAwIHB4XG4gICAqIHZhciBvcHRpb25zID0ge1xuICAgKiAgIHdpZHRoOiAnMzAwcHgnLFxuICAgKiAgIGhlaWdodDogJzIwMHB4J1xuICAgKiB9O1xuICAgKlxuICAgKiAvLyBJbiB0aGUgZ2xvYmFsIG5hbWUgc3BhY2UgQ2hhcnRpc3Qgd2UgY2FsbCB0aGUgTGluZSBmdW5jdGlvbiB0byBpbml0aWFsaXplIGEgbGluZSBjaGFydC4gQXMgYSBmaXJzdCBwYXJhbWV0ZXIgd2UgcGFzcyBpbiBhIHNlbGVjdG9yIHdoZXJlIHdlIHdvdWxkIGxpa2UgdG8gZ2V0IG91ciBjaGFydCBjcmVhdGVkLiBTZWNvbmQgcGFyYW1ldGVyIGlzIHRoZSBhY3R1YWwgZGF0YSBvYmplY3QgYW5kIGFzIGEgdGhpcmQgcGFyYW1ldGVyIHdlIHBhc3MgaW4gb3VyIG9wdGlvbnNcbiAgICogbmV3IENoYXJ0aXN0LkxpbmUoJy5jdC1jaGFydCcsIGRhdGEsIG9wdGlvbnMpO1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBVc2Ugc3BlY2lmaWMgaW50ZXJwb2xhdGlvbiBmdW5jdGlvbiB3aXRoIGNvbmZpZ3VyYXRpb24gZnJvbSB0aGUgQ2hhcnRpc3QuSW50ZXJwb2xhdGlvbiBtb2R1bGVcbiAgICpcbiAgICogdmFyIGNoYXJ0ID0gbmV3IENoYXJ0aXN0LkxpbmUoJy5jdC1jaGFydCcsIHtcbiAgICogICBsYWJlbHM6IFsxLCAyLCAzLCA0LCA1XSxcbiAgICogICBzZXJpZXM6IFtcbiAgICogICAgIFsxLCAxLCA4LCAxLCA3XVxuICAgKiAgIF1cbiAgICogfSwge1xuICAgKiAgIGxpbmVTbW9vdGg6IENoYXJ0aXN0LkludGVycG9sYXRpb24uY2FyZGluYWwoe1xuICAgKiAgICAgdGVuc2lvbjogMC4yXG4gICAqICAgfSlcbiAgICogfSk7XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIENyZWF0ZSBhIGxpbmUgY2hhcnQgd2l0aCByZXNwb25zaXZlIG9wdGlvbnNcbiAgICpcbiAgICogdmFyIGRhdGEgPSB7XG4gICAqICAgLy8gQSBsYWJlbHMgYXJyYXkgdGhhdCBjYW4gY29udGFpbiBhbnkgc29ydCBvZiB2YWx1ZXNcbiAgICogICBsYWJlbHM6IFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheSddLFxuICAgKiAgIC8vIE91ciBzZXJpZXMgYXJyYXkgdGhhdCBjb250YWlucyBzZXJpZXMgb2JqZWN0cyBvciBpbiB0aGlzIGNhc2Ugc2VyaWVzIGRhdGEgYXJyYXlzXG4gICAqICAgc2VyaWVzOiBbXG4gICAqICAgICBbNSwgMiwgNCwgMiwgMF1cbiAgICogICBdXG4gICAqIH07XG4gICAqXG4gICAqIC8vIEluIGFkZGl0aW9uIHRvIHRoZSByZWd1bGFyIG9wdGlvbnMgd2Ugc3BlY2lmeSByZXNwb25zaXZlIG9wdGlvbiBvdmVycmlkZXMgdGhhdCB3aWxsIG92ZXJyaWRlIHRoZSBkZWZhdWx0IGNvbmZpZ3V0YXRpb24gYmFzZWQgb24gdGhlIG1hdGNoaW5nIG1lZGlhIHF1ZXJpZXMuXG4gICAqIHZhciByZXNwb25zaXZlT3B0aW9ucyA9IFtcbiAgICogICBbJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpJywge1xuICAgKiAgICAgc2hvd1BvaW50OiBmYWxzZSxcbiAgICogICAgIGF4aXNYOiB7XG4gICAqICAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYzogZnVuY3Rpb24odmFsdWUpIHtcbiAgICogICAgICAgICAvLyBXaWxsIHJldHVybiBNb24sIFR1ZSwgV2VkIGV0Yy4gb24gbWVkaXVtIHNjcmVlbnNcbiAgICogICAgICAgICByZXR1cm4gdmFsdWUuc2xpY2UoMCwgMyk7XG4gICAqICAgICAgIH1cbiAgICogICAgIH1cbiAgICogICB9XSxcbiAgICogICBbJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpJywge1xuICAgKiAgICAgc2hvd0xpbmU6IGZhbHNlLFxuICAgKiAgICAgYXhpc1g6IHtcbiAgICogICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgKiAgICAgICAgIC8vIFdpbGwgcmV0dXJuIE0sIFQsIFcgZXRjLiBvbiBzbWFsbCBzY3JlZW5zXG4gICAqICAgICAgICAgcmV0dXJuIHZhbHVlWzBdO1xuICAgKiAgICAgICB9XG4gICAqICAgICB9XG4gICAqICAgfV1cbiAgICogXTtcbiAgICpcbiAgICogbmV3IENoYXJ0aXN0LkxpbmUoJy5jdC1jaGFydCcsIGRhdGEsIG51bGwsIHJlc3BvbnNpdmVPcHRpb25zKTtcbiAgICpcbiAgICovXG4gIGZ1bmN0aW9uIExpbmUocXVlcnksIGRhdGEsIG9wdGlvbnMsIHJlc3BvbnNpdmVPcHRpb25zKSB7XG4gICAgQ2hhcnRpc3QuTGluZS5zdXBlci5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsXG4gICAgICBxdWVyeSxcbiAgICAgIGRhdGEsXG4gICAgICBkZWZhdWx0T3B0aW9ucyxcbiAgICAgIENoYXJ0aXN0LmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpLFxuICAgICAgcmVzcG9uc2l2ZU9wdGlvbnMpO1xuICB9XG5cbiAgLy8gQ3JlYXRpbmcgbGluZSBjaGFydCB0eXBlIGluIENoYXJ0aXN0IG5hbWVzcGFjZVxuICBDaGFydGlzdC5MaW5lID0gQ2hhcnRpc3QuQmFzZS5leHRlbmQoe1xuICAgIGNvbnN0cnVjdG9yOiBMaW5lLFxuICAgIGNyZWF0ZUNoYXJ0OiBjcmVhdGVDaGFydFxuICB9KTtcblxufSh3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCkpO1xuOy8qKlxuICogVGhlIGJhciBjaGFydCBtb2R1bGUgb2YgQ2hhcnRpc3QgdGhhdCBjYW4gYmUgdXNlZCB0byBkcmF3IHVuaXBvbGFyIG9yIGJpcG9sYXIgYmFyIGFuZCBncm91cGVkIGJhciBjaGFydHMuXG4gKlxuICogQG1vZHVsZSBDaGFydGlzdC5CYXJcbiAqL1xuLyogZ2xvYmFsIENoYXJ0aXN0ICovXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3Qpe1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgb3B0aW9ucyBpbiBiYXIgY2hhcnRzLiBFeHBhbmQgdGhlIGNvZGUgdmlldyB0byBzZWUgYSBkZXRhaWxlZCBsaXN0IG9mIG9wdGlvbnMgd2l0aCBjb21tZW50cy5cbiAgICpcbiAgICogQG1lbWJlcm9mIENoYXJ0aXN0LkJhclxuICAgKi9cbiAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIC8vIE9wdGlvbnMgZm9yIFgtQXhpc1xuICAgIGF4aXNYOiB7XG4gICAgICAvLyBUaGUgb2Zmc2V0IG9mIHRoZSBjaGFydCBkcmF3aW5nIGFyZWEgdG8gdGhlIGJvcmRlciBvZiB0aGUgY29udGFpbmVyXG4gICAgICBvZmZzZXQ6IDMwLFxuICAgICAgLy8gUG9zaXRpb24gd2hlcmUgbGFiZWxzIGFyZSBwbGFjZWQuIENhbiBiZSBzZXQgdG8gYHN0YXJ0YCBvciBgZW5kYCB3aGVyZSBgc3RhcnRgIGlzIGVxdWl2YWxlbnQgdG8gbGVmdCBvciB0b3Agb24gdmVydGljYWwgYXhpcyBhbmQgYGVuZGAgaXMgZXF1aXZhbGVudCB0byByaWdodCBvciBib3R0b20gb24gaG9yaXpvbnRhbCBheGlzLlxuICAgICAgcG9zaXRpb246ICdlbmQnLFxuICAgICAgLy8gQWxsb3dzIHlvdSB0byBjb3JyZWN0IGxhYmVsIHBvc2l0aW9uaW5nIG9uIHRoaXMgYXhpcyBieSBwb3NpdGl2ZSBvciBuZWdhdGl2ZSB4IGFuZCB5IG9mZnNldC5cbiAgICAgIGxhYmVsT2Zmc2V0OiB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDBcbiAgICAgIH0sXG4gICAgICAvLyBJZiBsYWJlbHMgc2hvdWxkIGJlIHNob3duIG9yIG5vdFxuICAgICAgc2hvd0xhYmVsOiB0cnVlLFxuICAgICAgLy8gSWYgdGhlIGF4aXMgZ3JpZCBzaG91bGQgYmUgZHJhd24gb3Igbm90XG4gICAgICBzaG93R3JpZDogdHJ1ZSxcbiAgICAgIC8vIEludGVycG9sYXRpb24gZnVuY3Rpb24gdGhhdCBhbGxvd3MgeW91IHRvIGludGVyY2VwdCB0aGUgdmFsdWUgZnJvbSB0aGUgYXhpcyBsYWJlbFxuICAgICAgbGFiZWxJbnRlcnBvbGF0aW9uRm5jOiBDaGFydGlzdC5ub29wLFxuICAgICAgLy8gVGhpcyB2YWx1ZSBzcGVjaWZpZXMgdGhlIG1pbmltdW0gd2lkdGggaW4gcGl4ZWwgb2YgdGhlIHNjYWxlIHN0ZXBzXG4gICAgICBzY2FsZU1pblNwYWNlOiAzMCxcbiAgICAgIC8vIFVzZSBvbmx5IGludGVnZXIgdmFsdWVzICh3aG9sZSBudW1iZXJzKSBmb3IgdGhlIHNjYWxlIHN0ZXBzXG4gICAgICBvbmx5SW50ZWdlcjogZmFsc2VcbiAgICB9LFxuICAgIC8vIE9wdGlvbnMgZm9yIFktQXhpc1xuICAgIGF4aXNZOiB7XG4gICAgICAvLyBUaGUgb2Zmc2V0IG9mIHRoZSBjaGFydCBkcmF3aW5nIGFyZWEgdG8gdGhlIGJvcmRlciBvZiB0aGUgY29udGFpbmVyXG4gICAgICBvZmZzZXQ6IDQwLFxuICAgICAgLy8gUG9zaXRpb24gd2hlcmUgbGFiZWxzIGFyZSBwbGFjZWQuIENhbiBiZSBzZXQgdG8gYHN0YXJ0YCBvciBgZW5kYCB3aGVyZSBgc3RhcnRgIGlzIGVxdWl2YWxlbnQgdG8gbGVmdCBvciB0b3Agb24gdmVydGljYWwgYXhpcyBhbmQgYGVuZGAgaXMgZXF1aXZhbGVudCB0byByaWdodCBvciBib3R0b20gb24gaG9yaXpvbnRhbCBheGlzLlxuICAgICAgcG9zaXRpb246ICdzdGFydCcsXG4gICAgICAvLyBBbGxvd3MgeW91IHRvIGNvcnJlY3QgbGFiZWwgcG9zaXRpb25pbmcgb24gdGhpcyBheGlzIGJ5IHBvc2l0aXZlIG9yIG5lZ2F0aXZlIHggYW5kIHkgb2Zmc2V0LlxuICAgICAgbGFiZWxPZmZzZXQ6IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMFxuICAgICAgfSxcbiAgICAgIC8vIElmIGxhYmVscyBzaG91bGQgYmUgc2hvd24gb3Igbm90XG4gICAgICBzaG93TGFiZWw6IHRydWUsXG4gICAgICAvLyBJZiB0aGUgYXhpcyBncmlkIHNob3VsZCBiZSBkcmF3biBvciBub3RcbiAgICAgIHNob3dHcmlkOiB0cnVlLFxuICAgICAgLy8gSW50ZXJwb2xhdGlvbiBmdW5jdGlvbiB0aGF0IGFsbG93cyB5b3UgdG8gaW50ZXJjZXB0IHRoZSB2YWx1ZSBmcm9tIHRoZSBheGlzIGxhYmVsXG4gICAgICBsYWJlbEludGVycG9sYXRpb25GbmM6IENoYXJ0aXN0Lm5vb3AsXG4gICAgICAvLyBUaGlzIHZhbHVlIHNwZWNpZmllcyB0aGUgbWluaW11bSBoZWlnaHQgaW4gcGl4ZWwgb2YgdGhlIHNjYWxlIHN0ZXBzXG4gICAgICBzY2FsZU1pblNwYWNlOiAyMCxcbiAgICAgIC8vIFVzZSBvbmx5IGludGVnZXIgdmFsdWVzICh3aG9sZSBudW1iZXJzKSBmb3IgdGhlIHNjYWxlIHN0ZXBzXG4gICAgICBvbmx5SW50ZWdlcjogZmFsc2VcbiAgICB9LFxuICAgIC8vIFNwZWNpZnkgYSBmaXhlZCB3aWR0aCBmb3IgdGhlIGNoYXJ0IGFzIGEgc3RyaW5nIChpLmUuICcxMDBweCcgb3IgJzUwJScpXG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICAvLyBTcGVjaWZ5IGEgZml4ZWQgaGVpZ2h0IGZvciB0aGUgY2hhcnQgYXMgYSBzdHJpbmcgKGkuZS4gJzEwMHB4JyBvciAnNTAlJylcbiAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICAvLyBPdmVycmlkaW5nIHRoZSBuYXR1cmFsIGhpZ2ggb2YgdGhlIGNoYXJ0IGFsbG93cyB5b3UgdG8gem9vbSBpbiBvciBsaW1pdCB0aGUgY2hhcnRzIGhpZ2hlc3QgZGlzcGxheWVkIHZhbHVlXG4gICAgaGlnaDogdW5kZWZpbmVkLFxuICAgIC8vIE92ZXJyaWRpbmcgdGhlIG5hdHVyYWwgbG93IG9mIHRoZSBjaGFydCBhbGxvd3MgeW91IHRvIHpvb20gaW4gb3IgbGltaXQgdGhlIGNoYXJ0cyBsb3dlc3QgZGlzcGxheWVkIHZhbHVlXG4gICAgbG93OiB1bmRlZmluZWQsXG4gICAgLy8gVW5sZXNzIGxvdy9oaWdoIGFyZSBleHBsaWNpdGx5IHNldCwgYmFyIGNoYXJ0IHdpbGwgYmUgY2VudGVyZWQgYXQgemVybyBieSBkZWZhdWx0LiBTZXQgcmVmZXJlbmNlVmFsdWUgdG8gbnVsbCB0byBhdXRvIHNjYWxlLlxuICAgIHJlZmVyZW5jZVZhbHVlOiAwLFxuICAgIC8vIFBhZGRpbmcgb2YgdGhlIGNoYXJ0IGRyYXdpbmcgYXJlYSB0byB0aGUgY29udGFpbmVyIGVsZW1lbnQgYW5kIGxhYmVscyBhcyBhIG51bWJlciBvciBwYWRkaW5nIG9iamVjdCB7dG9wOiA1LCByaWdodDogNSwgYm90dG9tOiA1LCBsZWZ0OiA1fVxuICAgIGNoYXJ0UGFkZGluZzoge1xuICAgICAgdG9wOiAxNSxcbiAgICAgIHJpZ2h0OiAxNSxcbiAgICAgIGJvdHRvbTogNSxcbiAgICAgIGxlZnQ6IDEwXG4gICAgfSxcbiAgICAvLyBTcGVjaWZ5IHRoZSBkaXN0YW5jZSBpbiBwaXhlbCBvZiBiYXJzIGluIGEgZ3JvdXBcbiAgICBzZXJpZXNCYXJEaXN0YW5jZTogMTUsXG4gICAgLy8gSWYgc2V0IHRvIHRydWUgdGhpcyBwcm9wZXJ0eSB3aWxsIGNhdXNlIHRoZSBzZXJpZXMgYmFycyB0byBiZSBzdGFja2VkLiBDaGVjayB0aGUgYHN0YWNrTW9kZWAgb3B0aW9uIGZvciBmdXJ0aGVyIHN0YWNraW5nIG9wdGlvbnMuXG4gICAgc3RhY2tCYXJzOiBmYWxzZSxcbiAgICAvLyBJZiBzZXQgdG8gJ292ZXJsYXAnIHRoaXMgcHJvcGVydHkgd2lsbCBmb3JjZSB0aGUgc3RhY2tlZCBiYXJzIHRvIGRyYXcgZnJvbSB0aGUgemVybyBsaW5lLlxuICAgIC8vIElmIHNldCB0byAnYWNjdW11bGF0ZScgdGhpcyBwcm9wZXJ0eSB3aWxsIGZvcm0gYSB0b3RhbCBmb3IgZWFjaCBzZXJpZXMgcG9pbnQuIFRoaXMgd2lsbCBhbHNvIGluZmx1ZW5jZSB0aGUgeS1heGlzIGFuZCB0aGUgb3ZlcmFsbCBib3VuZHMgb2YgdGhlIGNoYXJ0LiBJbiBzdGFja2VkIG1vZGUgdGhlIHNlcmllc0JhckRpc3RhbmNlIHByb3BlcnR5IHdpbGwgaGF2ZSBubyBlZmZlY3QuXG4gICAgc3RhY2tNb2RlOiAnYWNjdW11bGF0ZScsXG4gICAgLy8gSW52ZXJ0cyB0aGUgYXhlcyBvZiB0aGUgYmFyIGNoYXJ0IGluIG9yZGVyIHRvIGRyYXcgYSBob3Jpem9udGFsIGJhciBjaGFydC4gQmUgYXdhcmUgdGhhdCB5b3UgYWxzbyBuZWVkIHRvIGludmVydCB5b3VyIGF4aXMgc2V0dGluZ3MgYXMgdGhlIFkgQXhpcyB3aWxsIG5vdyBkaXNwbGF5IHRoZSBsYWJlbHMgYW5kIHRoZSBYIEF4aXMgdGhlIHZhbHVlcy5cbiAgICBob3Jpem9udGFsQmFyczogZmFsc2UsXG4gICAgLy8gSWYgc2V0IHRvIHRydWUgdGhlbiBlYWNoIGJhciB3aWxsIHJlcHJlc2VudCBhIHNlcmllcyBhbmQgdGhlIGRhdGEgYXJyYXkgaXMgZXhwZWN0ZWQgdG8gYmUgYSBvbmUgZGltZW5zaW9uYWwgYXJyYXkgb2YgZGF0YSB2YWx1ZXMgcmF0aGVyIHRoYW4gYSBzZXJpZXMgYXJyYXkgb2Ygc2VyaWVzLiBUaGlzIGlzIHVzZWZ1bCBpZiB0aGUgYmFyIGNoYXJ0IHNob3VsZCByZXByZXNlbnQgYSBwcm9maWxlIHJhdGhlciB0aGFuIHNvbWUgZGF0YSBvdmVyIHRpbWUuXG4gICAgZGlzdHJpYnV0ZVNlcmllczogZmFsc2UsXG4gICAgLy8gSWYgdHJ1ZSB0aGUgd2hvbGUgZGF0YSBpcyByZXZlcnNlZCBpbmNsdWRpbmcgbGFiZWxzLCB0aGUgc2VyaWVzIG9yZGVyIGFzIHdlbGwgYXMgdGhlIHdob2xlIHNlcmllcyBkYXRhIGFycmF5cy5cbiAgICByZXZlcnNlRGF0YTogZmFsc2UsXG4gICAgLy8gSWYgdGhlIGJhciBjaGFydCBzaG91bGQgYWRkIGEgYmFja2dyb3VuZCBmaWxsIHRvIHRoZSAuY3QtZ3JpZHMgZ3JvdXAuXG4gICAgc2hvd0dyaWRCYWNrZ3JvdW5kOiBmYWxzZSxcbiAgICAvLyBPdmVycmlkZSB0aGUgY2xhc3MgbmFtZXMgdGhhdCBnZXQgdXNlZCB0byBnZW5lcmF0ZSB0aGUgU1ZHIHN0cnVjdHVyZSBvZiB0aGUgY2hhcnRcbiAgICBjbGFzc05hbWVzOiB7XG4gICAgICBjaGFydDogJ2N0LWNoYXJ0LWJhcicsXG4gICAgICBob3Jpem9udGFsQmFyczogJ2N0LWhvcml6b250YWwtYmFycycsXG4gICAgICBsYWJlbDogJ2N0LWxhYmVsJyxcbiAgICAgIGxhYmVsR3JvdXA6ICdjdC1sYWJlbHMnLFxuICAgICAgc2VyaWVzOiAnY3Qtc2VyaWVzJyxcbiAgICAgIGJhcjogJ2N0LWJhcicsXG4gICAgICBncmlkOiAnY3QtZ3JpZCcsXG4gICAgICBncmlkR3JvdXA6ICdjdC1ncmlkcycsXG4gICAgICBncmlkQmFja2dyb3VuZDogJ2N0LWdyaWQtYmFja2dyb3VuZCcsXG4gICAgICB2ZXJ0aWNhbDogJ2N0LXZlcnRpY2FsJyxcbiAgICAgIGhvcml6b250YWw6ICdjdC1ob3Jpem9udGFsJyxcbiAgICAgIHN0YXJ0OiAnY3Qtc3RhcnQnLFxuICAgICAgZW5kOiAnY3QtZW5kJ1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBjaGFydFxuICAgKlxuICAgKi9cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhcnQob3B0aW9ucykge1xuICAgIHZhciBkYXRhO1xuICAgIHZhciBoaWdoTG93O1xuXG4gICAgaWYob3B0aW9ucy5kaXN0cmlidXRlU2VyaWVzKSB7XG4gICAgICBkYXRhID0gQ2hhcnRpc3Qubm9ybWFsaXplRGF0YSh0aGlzLmRhdGEsIG9wdGlvbnMucmV2ZXJzZURhdGEsIG9wdGlvbnMuaG9yaXpvbnRhbEJhcnMgPyAneCcgOiAneScpO1xuICAgICAgZGF0YS5ub3JtYWxpemVkLnNlcmllcyA9IGRhdGEubm9ybWFsaXplZC5zZXJpZXMubWFwKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBbdmFsdWVdO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSBDaGFydGlzdC5ub3JtYWxpemVEYXRhKHRoaXMuZGF0YSwgb3B0aW9ucy5yZXZlcnNlRGF0YSwgb3B0aW9ucy5ob3Jpem9udGFsQmFycyA/ICd4JyA6ICd5Jyk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIG5ldyBzdmcgZWxlbWVudFxuICAgIHRoaXMuc3ZnID0gQ2hhcnRpc3QuY3JlYXRlU3ZnKFxuICAgICAgdGhpcy5jb250YWluZXIsXG4gICAgICBvcHRpb25zLndpZHRoLFxuICAgICAgb3B0aW9ucy5oZWlnaHQsXG4gICAgICBvcHRpb25zLmNsYXNzTmFtZXMuY2hhcnQgKyAob3B0aW9ucy5ob3Jpem9udGFsQmFycyA/ICcgJyArIG9wdGlvbnMuY2xhc3NOYW1lcy5ob3Jpem9udGFsQmFycyA6ICcnKVxuICAgICk7XG5cbiAgICAvLyBEcmF3aW5nIGdyb3VwcyBpbiBjb3JyZWN0IG9yZGVyXG4gICAgdmFyIGdyaWRHcm91cCA9IHRoaXMuc3ZnLmVsZW0oJ2cnKS5hZGRDbGFzcyhvcHRpb25zLmNsYXNzTmFtZXMuZ3JpZEdyb3VwKTtcbiAgICB2YXIgc2VyaWVzR3JvdXAgPSB0aGlzLnN2Zy5lbGVtKCdnJyk7XG4gICAgdmFyIGxhYmVsR3JvdXAgPSB0aGlzLnN2Zy5lbGVtKCdnJykuYWRkQ2xhc3Mob3B0aW9ucy5jbGFzc05hbWVzLmxhYmVsR3JvdXApO1xuXG4gICAgaWYob3B0aW9ucy5zdGFja0JhcnMgJiYgZGF0YS5ub3JtYWxpemVkLnNlcmllcy5sZW5ndGggIT09IDApIHtcblxuICAgICAgLy8gSWYgc3RhY2tlZCBiYXJzIHdlIG5lZWQgdG8gY2FsY3VsYXRlIHRoZSBoaWdoIGxvdyBmcm9tIHN0YWNrZWQgdmFsdWVzIGZyb20gZWFjaCBzZXJpZXNcbiAgICAgIHZhciBzZXJpYWxTdW1zID0gQ2hhcnRpc3Quc2VyaWFsTWFwKGRhdGEubm9ybWFsaXplZC5zZXJpZXMsIGZ1bmN0aW9uIHNlcmlhbFN1bXMoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLm1hcChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIGN1cnIpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogcHJldi54ICsgKGN1cnIgJiYgY3Vyci54KSB8fCAwLFxuICAgICAgICAgICAgeTogcHJldi55ICsgKGN1cnIgJiYgY3Vyci55KSB8fCAwXG4gICAgICAgICAgfTtcbiAgICAgICAgfSwge3g6IDAsIHk6IDB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBoaWdoTG93ID0gQ2hhcnRpc3QuZ2V0SGlnaExvdyhbc2VyaWFsU3Vtc10sIG9wdGlvbnMsIG9wdGlvbnMuaG9yaXpvbnRhbEJhcnMgPyAneCcgOiAneScpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgaGlnaExvdyA9IENoYXJ0aXN0LmdldEhpZ2hMb3coZGF0YS5ub3JtYWxpemVkLnNlcmllcywgb3B0aW9ucywgb3B0aW9ucy5ob3Jpem9udGFsQmFycyA/ICd4JyA6ICd5Jyk7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGVzIG9mIGhpZ2ggLyBsb3cgZnJvbSBzZXR0aW5nc1xuICAgIGhpZ2hMb3cuaGlnaCA9ICtvcHRpb25zLmhpZ2ggfHwgKG9wdGlvbnMuaGlnaCA9PT0gMCA/IDAgOiBoaWdoTG93LmhpZ2gpO1xuICAgIGhpZ2hMb3cubG93ID0gK29wdGlvbnMubG93IHx8IChvcHRpb25zLmxvdyA9PT0gMCA/IDAgOiBoaWdoTG93Lmxvdyk7XG5cbiAgICB2YXIgY2hhcnRSZWN0ID0gQ2hhcnRpc3QuY3JlYXRlQ2hhcnRSZWN0KHRoaXMuc3ZnLCBvcHRpb25zLCBkZWZhdWx0T3B0aW9ucy5wYWRkaW5nKTtcblxuICAgIHZhciB2YWx1ZUF4aXMsXG4gICAgICBsYWJlbEF4aXNUaWNrcyxcbiAgICAgIGxhYmVsQXhpcyxcbiAgICAgIGF4aXNYLFxuICAgICAgYXhpc1k7XG5cbiAgICAvLyBXZSBuZWVkIHRvIHNldCBzdGVwIGNvdW50IGJhc2VkIG9uIHNvbWUgb3B0aW9ucyBjb21iaW5hdGlvbnNcbiAgICBpZihvcHRpb25zLmRpc3RyaWJ1dGVTZXJpZXMgJiYgb3B0aW9ucy5zdGFja0JhcnMpIHtcbiAgICAgIC8vIElmIGRpc3RyaWJ1dGVkIHNlcmllcyBhcmUgZW5hYmxlZCBhbmQgYmFycyBuZWVkIHRvIGJlIHN0YWNrZWQsIHdlJ2xsIG9ubHkgaGF2ZSBvbmUgYmFyIGFuZCB0aGVyZWZvcmUgc2hvdWxkXG4gICAgICAvLyB1c2Ugb25seSB0aGUgZmlyc3QgbGFiZWwgZm9yIHRoZSBzdGVwIGF4aXNcbiAgICAgIGxhYmVsQXhpc1RpY2tzID0gZGF0YS5ub3JtYWxpemVkLmxhYmVscy5zbGljZSgwLCAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgZGlzdHJpYnV0ZWQgc2VyaWVzIGFyZSBlbmFibGVkIGJ1dCBzdGFja2VkIGJhcnMgYXJlbid0LCB3ZSBzaG91bGQgdXNlIHRoZSBzZXJpZXMgbGFiZWxzXG4gICAgICAvLyBJZiB3ZSBhcmUgZHJhd2luZyBhIHJlZ3VsYXIgYmFyIGNoYXJ0IHdpdGggdHdvIGRpbWVuc2lvbmFsIHNlcmllcyBkYXRhLCB3ZSBqdXN0IHVzZSB0aGUgbGFiZWxzIGFycmF5XG4gICAgICAvLyBhcyB0aGUgYmFycyBhcmUgbm9ybWFsaXplZFxuICAgICAgbGFiZWxBeGlzVGlja3MgPSBkYXRhLm5vcm1hbGl6ZWQubGFiZWxzO1xuICAgIH1cblxuICAgIC8vIFNldCBsYWJlbEF4aXMgYW5kIHZhbHVlQXhpcyBiYXNlZCBvbiB0aGUgaG9yaXpvbnRhbEJhcnMgc2V0dGluZy4gVGhpcyBzZXR0aW5nIHdpbGwgZmxpcCB0aGUgYXhlcyBpZiBuZWNlc3NhcnkuXG4gICAgaWYob3B0aW9ucy5ob3Jpem9udGFsQmFycykge1xuICAgICAgaWYob3B0aW9ucy5heGlzWC50eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWVBeGlzID0gYXhpc1ggPSBuZXcgQ2hhcnRpc3QuQXV0b1NjYWxlQXhpcyhDaGFydGlzdC5BeGlzLnVuaXRzLngsIGRhdGEubm9ybWFsaXplZC5zZXJpZXMsIGNoYXJ0UmVjdCwgQ2hhcnRpc3QuZXh0ZW5kKHt9LCBvcHRpb25zLmF4aXNYLCB7XG4gICAgICAgICAgaGlnaExvdzogaGlnaExvdyxcbiAgICAgICAgICByZWZlcmVuY2VWYWx1ZTogMFxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZUF4aXMgPSBheGlzWCA9IG9wdGlvbnMuYXhpc1gudHlwZS5jYWxsKENoYXJ0aXN0LCBDaGFydGlzdC5BeGlzLnVuaXRzLngsIGRhdGEubm9ybWFsaXplZC5zZXJpZXMsIGNoYXJ0UmVjdCwgQ2hhcnRpc3QuZXh0ZW5kKHt9LCBvcHRpb25zLmF4aXNYLCB7XG4gICAgICAgICAgaGlnaExvdzogaGlnaExvdyxcbiAgICAgICAgICByZWZlcmVuY2VWYWx1ZTogMFxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuYXhpc1kudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxhYmVsQXhpcyA9IGF4aXNZID0gbmV3IENoYXJ0aXN0LlN0ZXBBeGlzKENoYXJ0aXN0LkF4aXMudW5pdHMueSwgZGF0YS5ub3JtYWxpemVkLnNlcmllcywgY2hhcnRSZWN0LCB7XG4gICAgICAgICAgdGlja3M6IGxhYmVsQXhpc1RpY2tzXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFiZWxBeGlzID0gYXhpc1kgPSBvcHRpb25zLmF4aXNZLnR5cGUuY2FsbChDaGFydGlzdCwgQ2hhcnRpc3QuQXhpcy51bml0cy55LCBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzLCBjaGFydFJlY3QsIG9wdGlvbnMuYXhpc1kpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZihvcHRpb25zLmF4aXNYLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsYWJlbEF4aXMgPSBheGlzWCA9IG5ldyBDaGFydGlzdC5TdGVwQXhpcyhDaGFydGlzdC5BeGlzLnVuaXRzLngsIGRhdGEubm9ybWFsaXplZC5zZXJpZXMsIGNoYXJ0UmVjdCwge1xuICAgICAgICAgIHRpY2tzOiBsYWJlbEF4aXNUaWNrc1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhYmVsQXhpcyA9IGF4aXNYID0gb3B0aW9ucy5heGlzWC50eXBlLmNhbGwoQ2hhcnRpc3QsIENoYXJ0aXN0LkF4aXMudW5pdHMueCwgZGF0YS5ub3JtYWxpemVkLnNlcmllcywgY2hhcnRSZWN0LCBvcHRpb25zLmF4aXNYKTtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy5heGlzWS50eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWVBeGlzID0gYXhpc1kgPSBuZXcgQ2hhcnRpc3QuQXV0b1NjYWxlQXhpcyhDaGFydGlzdC5BeGlzLnVuaXRzLnksIGRhdGEubm9ybWFsaXplZC5zZXJpZXMsIGNoYXJ0UmVjdCwgQ2hhcnRpc3QuZXh0ZW5kKHt9LCBvcHRpb25zLmF4aXNZLCB7XG4gICAgICAgICAgaGlnaExvdzogaGlnaExvdyxcbiAgICAgICAgICByZWZlcmVuY2VWYWx1ZTogMFxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZUF4aXMgPSBheGlzWSA9IG9wdGlvbnMuYXhpc1kudHlwZS5jYWxsKENoYXJ0aXN0LCBDaGFydGlzdC5BeGlzLnVuaXRzLnksIGRhdGEubm9ybWFsaXplZC5zZXJpZXMsIGNoYXJ0UmVjdCwgQ2hhcnRpc3QuZXh0ZW5kKHt9LCBvcHRpb25zLmF4aXNZLCB7XG4gICAgICAgICAgaGlnaExvdzogaGlnaExvdyxcbiAgICAgICAgICByZWZlcmVuY2VWYWx1ZTogMFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJvamVjdGVkIDAgcG9pbnRcbiAgICB2YXIgemVyb1BvaW50ID0gb3B0aW9ucy5ob3Jpem9udGFsQmFycyA/IChjaGFydFJlY3QueDEgKyB2YWx1ZUF4aXMucHJvamVjdFZhbHVlKDApKSA6IChjaGFydFJlY3QueTEgLSB2YWx1ZUF4aXMucHJvamVjdFZhbHVlKDApKTtcbiAgICAvLyBVc2VkIHRvIHRyYWNrIHRoZSBzY3JlZW4gY29vcmRpbmF0ZXMgb2Ygc3RhY2tlZCBiYXJzXG4gICAgdmFyIHN0YWNrZWRCYXJWYWx1ZXMgPSBbXTtcblxuICAgIGxhYmVsQXhpcy5jcmVhdGVHcmlkQW5kTGFiZWxzKGdyaWRHcm91cCwgbGFiZWxHcm91cCwgdGhpcy5zdXBwb3J0c0ZvcmVpZ25PYmplY3QsIG9wdGlvbnMsIHRoaXMuZXZlbnRFbWl0dGVyKTtcbiAgICB2YWx1ZUF4aXMuY3JlYXRlR3JpZEFuZExhYmVscyhncmlkR3JvdXAsIGxhYmVsR3JvdXAsIHRoaXMuc3VwcG9ydHNGb3JlaWduT2JqZWN0LCBvcHRpb25zLCB0aGlzLmV2ZW50RW1pdHRlcik7XG5cbiAgICBpZiAob3B0aW9ucy5zaG93R3JpZEJhY2tncm91bmQpIHtcbiAgICAgIENoYXJ0aXN0LmNyZWF0ZUdyaWRCYWNrZ3JvdW5kKGdyaWRHcm91cCwgY2hhcnRSZWN0LCBvcHRpb25zLmNsYXNzTmFtZXMuZ3JpZEJhY2tncm91bmQsIHRoaXMuZXZlbnRFbWl0dGVyKTtcbiAgICB9XG5cbiAgICAvLyBEcmF3IHRoZSBzZXJpZXNcbiAgICBkYXRhLnJhdy5zZXJpZXMuZm9yRWFjaChmdW5jdGlvbihzZXJpZXMsIHNlcmllc0luZGV4KSB7XG4gICAgICAvLyBDYWxjdWxhdGluZyBiaS1wb2xhciB2YWx1ZSBvZiBpbmRleCBmb3Igc2VyaWVzT2Zmc2V0LiBGb3IgaSA9IDAuLjQgYmlQb2wgd2lsbCBiZSAtMS41LCAtMC41LCAwLjUsIDEuNSBldGMuXG4gICAgICB2YXIgYmlQb2wgPSBzZXJpZXNJbmRleCAtIChkYXRhLnJhdy5zZXJpZXMubGVuZ3RoIC0gMSkgLyAyO1xuICAgICAgLy8gSGFsZiBvZiB0aGUgcGVyaW9kIHdpZHRoIGJldHdlZW4gdmVydGljYWwgZ3JpZCBsaW5lcyB1c2VkIHRvIHBvc2l0aW9uIGJhcnNcbiAgICAgIHZhciBwZXJpb2RIYWxmTGVuZ3RoO1xuICAgICAgLy8gQ3VycmVudCBzZXJpZXMgU1ZHIGVsZW1lbnRcbiAgICAgIHZhciBzZXJpZXNFbGVtZW50O1xuXG4gICAgICAvLyBXZSBuZWVkIHRvIHNldCBwZXJpb2RIYWxmTGVuZ3RoIGJhc2VkIG9uIHNvbWUgb3B0aW9ucyBjb21iaW5hdGlvbnNcbiAgICAgIGlmKG9wdGlvbnMuZGlzdHJpYnV0ZVNlcmllcyAmJiAhb3B0aW9ucy5zdGFja0JhcnMpIHtcbiAgICAgICAgLy8gSWYgZGlzdHJpYnV0ZWQgc2VyaWVzIGFyZSBlbmFibGVkIGJ1dCBzdGFja2VkIGJhcnMgYXJlbid0LCB3ZSBuZWVkIHRvIHVzZSB0aGUgbGVuZ3RoIG9mIHRoZSBub3JtYWl6ZWREYXRhIGFycmF5XG4gICAgICAgIC8vIHdoaWNoIGlzIHRoZSBzZXJpZXMgY291bnQgYW5kIGRpdmlkZSBieSAyXG4gICAgICAgIHBlcmlvZEhhbGZMZW5ndGggPSBsYWJlbEF4aXMuYXhpc0xlbmd0aCAvIGRhdGEubm9ybWFsaXplZC5zZXJpZXMubGVuZ3RoIC8gMjtcbiAgICAgIH0gZWxzZSBpZihvcHRpb25zLmRpc3RyaWJ1dGVTZXJpZXMgJiYgb3B0aW9ucy5zdGFja0JhcnMpIHtcbiAgICAgICAgLy8gSWYgZGlzdHJpYnV0ZWQgc2VyaWVzIGFuZCBzdGFja2VkIGJhcnMgYXJlIGVuYWJsZWQgd2UnbGwgb25seSBnZXQgb25lIGJhciBzbyB3ZSBzaG91bGQganVzdCBkaXZpZGUgdGhlIGF4aXNcbiAgICAgICAgLy8gbGVuZ3RoIGJ5IDJcbiAgICAgICAgcGVyaW9kSGFsZkxlbmd0aCA9IGxhYmVsQXhpcy5heGlzTGVuZ3RoIC8gMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE9uIHJlZ3VsYXIgYmFyIGNoYXJ0cyB3ZSBzaG91bGQganVzdCB1c2UgdGhlIHNlcmllcyBsZW5ndGhcbiAgICAgICAgcGVyaW9kSGFsZkxlbmd0aCA9IGxhYmVsQXhpcy5heGlzTGVuZ3RoIC8gZGF0YS5ub3JtYWxpemVkLnNlcmllc1tzZXJpZXNJbmRleF0ubGVuZ3RoIC8gMjtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkaW5nIHRoZSBzZXJpZXMgZ3JvdXAgdG8gdGhlIHNlcmllcyBlbGVtZW50XG4gICAgICBzZXJpZXNFbGVtZW50ID0gc2VyaWVzR3JvdXAuZWxlbSgnZycpO1xuXG4gICAgICAvLyBXcml0ZSBhdHRyaWJ1dGVzIHRvIHNlcmllcyBncm91cCBlbGVtZW50LiBJZiBzZXJpZXMgbmFtZSBvciBtZXRhIGlzIHVuZGVmaW5lZCB0aGUgYXR0cmlidXRlcyB3aWxsIG5vdCBiZSB3cml0dGVuXG4gICAgICBzZXJpZXNFbGVtZW50LmF0dHIoe1xuICAgICAgICAnY3Q6c2VyaWVzLW5hbWUnOiBzZXJpZXMubmFtZSxcbiAgICAgICAgJ2N0Om1ldGEnOiBDaGFydGlzdC5zZXJpYWxpemUoc2VyaWVzLm1ldGEpXG4gICAgICB9KTtcblxuICAgICAgLy8gVXNlIHNlcmllcyBjbGFzcyBmcm9tIHNlcmllcyBkYXRhIG9yIGlmIG5vdCBzZXQgZ2VuZXJhdGUgb25lXG4gICAgICBzZXJpZXNFbGVtZW50LmFkZENsYXNzKFtcbiAgICAgICAgb3B0aW9ucy5jbGFzc05hbWVzLnNlcmllcyxcbiAgICAgICAgKHNlcmllcy5jbGFzc05hbWUgfHwgb3B0aW9ucy5jbGFzc05hbWVzLnNlcmllcyArICctJyArIENoYXJ0aXN0LmFscGhhTnVtZXJhdGUoc2VyaWVzSW5kZXgpKVxuICAgICAgXS5qb2luKCcgJykpO1xuXG4gICAgICBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzW3Nlcmllc0luZGV4XS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCB2YWx1ZUluZGV4KSB7XG4gICAgICAgIHZhciBwcm9qZWN0ZWQsXG4gICAgICAgICAgYmFyLFxuICAgICAgICAgIHByZXZpb3VzU3RhY2ssXG4gICAgICAgICAgbGFiZWxBeGlzVmFsdWVJbmRleDtcblxuICAgICAgICAvLyBXZSBuZWVkIHRvIHNldCBsYWJlbEF4aXNWYWx1ZUluZGV4IGJhc2VkIG9uIHNvbWUgb3B0aW9ucyBjb21iaW5hdGlvbnNcbiAgICAgICAgaWYob3B0aW9ucy5kaXN0cmlidXRlU2VyaWVzICYmICFvcHRpb25zLnN0YWNrQmFycykge1xuICAgICAgICAgIC8vIElmIGRpc3RyaWJ1dGVkIHNlcmllcyBhcmUgZW5hYmxlZCBidXQgc3RhY2tlZCBiYXJzIGFyZW4ndCwgd2UgY2FuIHVzZSB0aGUgc2VyaWVzSW5kZXggZm9yIGxhdGVyIHByb2plY3Rpb25cbiAgICAgICAgICAvLyBvbiB0aGUgc3RlcCBheGlzIGZvciBsYWJlbCBwb3NpdGlvbmluZ1xuICAgICAgICAgIGxhYmVsQXhpc1ZhbHVlSW5kZXggPSBzZXJpZXNJbmRleDtcbiAgICAgICAgfSBlbHNlIGlmKG9wdGlvbnMuZGlzdHJpYnV0ZVNlcmllcyAmJiBvcHRpb25zLnN0YWNrQmFycykge1xuICAgICAgICAgIC8vIElmIGRpc3RyaWJ1dGVkIHNlcmllcyBhbmQgc3RhY2tlZCBiYXJzIGFyZSBlbmFibGVkLCB3ZSB3aWxsIG9ubHkgZ2V0IG9uZSBiYXIgYW5kIHRoZXJlZm9yZSBhbHdheXMgdXNlXG4gICAgICAgICAgLy8gMCBmb3IgcHJvamVjdGlvbiBvbiB0aGUgbGFiZWwgc3RlcCBheGlzXG4gICAgICAgICAgbGFiZWxBeGlzVmFsdWVJbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT24gcmVndWxhciBiYXIgY2hhcnRzIHdlIGp1c3QgdXNlIHRoZSB2YWx1ZSBpbmRleCB0byBwcm9qZWN0IG9uIHRoZSBsYWJlbCBzdGVwIGF4aXNcbiAgICAgICAgICBsYWJlbEF4aXNWYWx1ZUluZGV4ID0gdmFsdWVJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdHJhbnNmb3JtIGNvb3JkaW5hdGVzIGRpZmZlcmVudGx5IGJhc2VkIG9uIHRoZSBjaGFydCBsYXlvdXRcbiAgICAgICAgaWYob3B0aW9ucy5ob3Jpem9udGFsQmFycykge1xuICAgICAgICAgIHByb2plY3RlZCA9IHtcbiAgICAgICAgICAgIHg6IGNoYXJ0UmVjdC54MSArIHZhbHVlQXhpcy5wcm9qZWN0VmFsdWUodmFsdWUgJiYgdmFsdWUueCA/IHZhbHVlLnggOiAwLCB2YWx1ZUluZGV4LCBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzW3Nlcmllc0luZGV4XSksXG4gICAgICAgICAgICB5OiBjaGFydFJlY3QueTEgLSBsYWJlbEF4aXMucHJvamVjdFZhbHVlKHZhbHVlICYmIHZhbHVlLnkgPyB2YWx1ZS55IDogMCwgbGFiZWxBeGlzVmFsdWVJbmRleCwgZGF0YS5ub3JtYWxpemVkLnNlcmllc1tzZXJpZXNJbmRleF0pXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9qZWN0ZWQgPSB7XG4gICAgICAgICAgICB4OiBjaGFydFJlY3QueDEgKyBsYWJlbEF4aXMucHJvamVjdFZhbHVlKHZhbHVlICYmIHZhbHVlLnggPyB2YWx1ZS54IDogMCwgbGFiZWxBeGlzVmFsdWVJbmRleCwgZGF0YS5ub3JtYWxpemVkLnNlcmllc1tzZXJpZXNJbmRleF0pLFxuICAgICAgICAgICAgeTogY2hhcnRSZWN0LnkxIC0gdmFsdWVBeGlzLnByb2plY3RWYWx1ZSh2YWx1ZSAmJiB2YWx1ZS55ID8gdmFsdWUueSA6IDAsIHZhbHVlSW5kZXgsIGRhdGEubm9ybWFsaXplZC5zZXJpZXNbc2VyaWVzSW5kZXhdKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBsYWJlbCBheGlzIGlzIGEgc3RlcCBiYXNlZCBheGlzIHdlIHdpbGwgb2Zmc2V0IHRoZSBiYXIgaW50byB0aGUgbWlkZGxlIG9mIGJldHdlZW4gdHdvIHN0ZXBzIHVzaW5nXG4gICAgICAgIC8vIHRoZSBwZXJpb2RIYWxmTGVuZ3RoIHZhbHVlLiBBbHNvIHdlIGRvIGFycmFuZ2UgdGhlIGRpZmZlcmVudCBzZXJpZXMgc28gdGhhdCB0aGV5IGFsaWduIHVwIHRvIGVhY2ggb3RoZXIgdXNpbmdcbiAgICAgICAgLy8gdGhlIHNlcmllc0JhckRpc3RhbmNlLiBJZiB3ZSBkb24ndCBoYXZlIGEgc3RlcCBheGlzLCB0aGUgYmFyIHBvc2l0aW9ucyBjYW4gYmUgY2hvc2VuIGZyZWVseSBzbyB3ZSBzaG91bGQgbm90XG4gICAgICAgIC8vIGFkZCBhbnkgYXV0b21hdGVkIHBvc2l0aW9uaW5nLlxuICAgICAgICBpZihsYWJlbEF4aXMgaW5zdGFuY2VvZiBDaGFydGlzdC5TdGVwQXhpcykge1xuICAgICAgICAgIC8vIE9mZnNldCB0byBjZW50ZXIgYmFyIGJldHdlZW4gZ3JpZCBsaW5lcywgYnV0IG9ubHkgaWYgdGhlIHN0ZXAgYXhpcyBpcyBub3Qgc3RyZXRjaGVkXG4gICAgICAgICAgaWYoIWxhYmVsQXhpcy5vcHRpb25zLnN0cmV0Y2gpIHtcbiAgICAgICAgICAgIHByb2plY3RlZFtsYWJlbEF4aXMudW5pdHMucG9zXSArPSBwZXJpb2RIYWxmTGVuZ3RoICogKG9wdGlvbnMuaG9yaXpvbnRhbEJhcnMgPyAtMSA6IDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBVc2luZyBiaS1wb2xhciBvZmZzZXQgZm9yIG11bHRpcGxlIHNlcmllcyBpZiBubyBzdGFja2VkIGJhcnMgb3Igc2VyaWVzIGRpc3RyaWJ1dGlvbiBpcyB1c2VkXG4gICAgICAgICAgcHJvamVjdGVkW2xhYmVsQXhpcy51bml0cy5wb3NdICs9IChvcHRpb25zLnN0YWNrQmFycyB8fCBvcHRpb25zLmRpc3RyaWJ1dGVTZXJpZXMpID8gMCA6IGJpUG9sICogb3B0aW9ucy5zZXJpZXNCYXJEaXN0YW5jZSAqIChvcHRpb25zLmhvcml6b250YWxCYXJzID8gLTEgOiAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVudGVyIHZhbHVlIGluIHN0YWNrZWQgYmFyIHZhbHVlcyB1c2VkIHRvIHJlbWVtYmVyIHByZXZpb3VzIHNjcmVlbiB2YWx1ZSBmb3Igc3RhY2tpbmcgdXAgYmFyc1xuICAgICAgICBwcmV2aW91c1N0YWNrID0gc3RhY2tlZEJhclZhbHVlc1t2YWx1ZUluZGV4XSB8fCB6ZXJvUG9pbnQ7XG4gICAgICAgIHN0YWNrZWRCYXJWYWx1ZXNbdmFsdWVJbmRleF0gPSBwcmV2aW91c1N0YWNrIC0gKHplcm9Qb2ludCAtIHByb2plY3RlZFtsYWJlbEF4aXMuY291bnRlclVuaXRzLnBvc10pO1xuXG4gICAgICAgIC8vIFNraXAgaWYgdmFsdWUgaXMgdW5kZWZpbmVkXG4gICAgICAgIGlmKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcG9zaXRpb25zID0ge307XG4gICAgICAgIHBvc2l0aW9uc1tsYWJlbEF4aXMudW5pdHMucG9zICsgJzEnXSA9IHByb2plY3RlZFtsYWJlbEF4aXMudW5pdHMucG9zXTtcbiAgICAgICAgcG9zaXRpb25zW2xhYmVsQXhpcy51bml0cy5wb3MgKyAnMiddID0gcHJvamVjdGVkW2xhYmVsQXhpcy51bml0cy5wb3NdO1xuXG4gICAgICAgIGlmKG9wdGlvbnMuc3RhY2tCYXJzICYmIChvcHRpb25zLnN0YWNrTW9kZSA9PT0gJ2FjY3VtdWxhdGUnIHx8ICFvcHRpb25zLnN0YWNrTW9kZSkpIHtcbiAgICAgICAgICAvLyBTdGFjayBtb2RlOiBhY2N1bXVsYXRlIChkZWZhdWx0KVxuICAgICAgICAgIC8vIElmIGJhcnMgYXJlIHN0YWNrZWQgd2UgdXNlIHRoZSBzdGFja2VkQmFyVmFsdWVzIHJlZmVyZW5jZSBhbmQgb3RoZXJ3aXNlIGJhc2UgYWxsIGJhcnMgb2ZmIHRoZSB6ZXJvIGxpbmVcbiAgICAgICAgICAvLyBXZSB3YW50IGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LCBzbyB0aGUgZXhwZWN0ZWQgZmFsbGJhY2sgd2l0aG91dCB0aGUgJ3N0YWNrTW9kZScgb3B0aW9uXG4gICAgICAgICAgLy8gdG8gYmUgdGhlIG9yaWdpbmFsIGJlaGF2aW91ciAoYWNjdW11bGF0ZSlcbiAgICAgICAgICBwb3NpdGlvbnNbbGFiZWxBeGlzLmNvdW50ZXJVbml0cy5wb3MgKyAnMSddID0gcHJldmlvdXNTdGFjaztcbiAgICAgICAgICBwb3NpdGlvbnNbbGFiZWxBeGlzLmNvdW50ZXJVbml0cy5wb3MgKyAnMiddID0gc3RhY2tlZEJhclZhbHVlc1t2YWx1ZUluZGV4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBEcmF3IGZyb20gdGhlIHplcm8gbGluZSBub3JtYWxseVxuICAgICAgICAgIC8vIFRoaXMgaXMgYWxzbyB0aGUgc2FtZSBjb2RlIGZvciBTdGFjayBtb2RlOiBvdmVybGFwXG4gICAgICAgICAgcG9zaXRpb25zW2xhYmVsQXhpcy5jb3VudGVyVW5pdHMucG9zICsgJzEnXSA9IHplcm9Qb2ludDtcbiAgICAgICAgICBwb3NpdGlvbnNbbGFiZWxBeGlzLmNvdW50ZXJVbml0cy5wb3MgKyAnMiddID0gcHJvamVjdGVkW2xhYmVsQXhpcy5jb3VudGVyVW5pdHMucG9zXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExpbWl0IHggYW5kIHkgc28gdGhhdCB0aGV5IGFyZSB3aXRoaW4gdGhlIGNoYXJ0IHJlY3RcbiAgICAgICAgcG9zaXRpb25zLngxID0gTWF0aC5taW4oTWF0aC5tYXgocG9zaXRpb25zLngxLCBjaGFydFJlY3QueDEpLCBjaGFydFJlY3QueDIpO1xuICAgICAgICBwb3NpdGlvbnMueDIgPSBNYXRoLm1pbihNYXRoLm1heChwb3NpdGlvbnMueDIsIGNoYXJ0UmVjdC54MSksIGNoYXJ0UmVjdC54Mik7XG4gICAgICAgIHBvc2l0aW9ucy55MSA9IE1hdGgubWluKE1hdGgubWF4KHBvc2l0aW9ucy55MSwgY2hhcnRSZWN0LnkyKSwgY2hhcnRSZWN0LnkxKTtcbiAgICAgICAgcG9zaXRpb25zLnkyID0gTWF0aC5taW4oTWF0aC5tYXgocG9zaXRpb25zLnkyLCBjaGFydFJlY3QueTIpLCBjaGFydFJlY3QueTEpO1xuXG4gICAgICAgIHZhciBtZXRhRGF0YSA9IENoYXJ0aXN0LmdldE1ldGFEYXRhKHNlcmllcywgdmFsdWVJbmRleCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGJhciBlbGVtZW50XG4gICAgICAgIGJhciA9IHNlcmllc0VsZW1lbnQuZWxlbSgnbGluZScsIHBvc2l0aW9ucywgb3B0aW9ucy5jbGFzc05hbWVzLmJhcikuYXR0cih7XG4gICAgICAgICAgJ2N0OnZhbHVlJzogW3ZhbHVlLngsIHZhbHVlLnldLmZpbHRlcihDaGFydGlzdC5pc051bWVyaWMpLmpvaW4oJywnKSxcbiAgICAgICAgICAnY3Q6bWV0YSc6IENoYXJ0aXN0LnNlcmlhbGl6ZShtZXRhRGF0YSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgnZHJhdycsIENoYXJ0aXN0LmV4dGVuZCh7XG4gICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgIGluZGV4OiB2YWx1ZUluZGV4LFxuICAgICAgICAgIG1ldGE6IG1ldGFEYXRhLFxuICAgICAgICAgIHNlcmllczogc2VyaWVzLFxuICAgICAgICAgIHNlcmllc0luZGV4OiBzZXJpZXNJbmRleCxcbiAgICAgICAgICBheGlzWDogYXhpc1gsXG4gICAgICAgICAgYXhpc1k6IGF4aXNZLFxuICAgICAgICAgIGNoYXJ0UmVjdDogY2hhcnRSZWN0LFxuICAgICAgICAgIGdyb3VwOiBzZXJpZXNFbGVtZW50LFxuICAgICAgICAgIGVsZW1lbnQ6IGJhclxuICAgICAgICB9LCBwb3NpdGlvbnMpKTtcbiAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ2NyZWF0ZWQnLCB7XG4gICAgICBib3VuZHM6IHZhbHVlQXhpcy5ib3VuZHMsXG4gICAgICBjaGFydFJlY3Q6IGNoYXJ0UmVjdCxcbiAgICAgIGF4aXNYOiBheGlzWCxcbiAgICAgIGF4aXNZOiBheGlzWSxcbiAgICAgIHN2ZzogdGhpcy5zdmcsXG4gICAgICBvcHRpb25zOiBvcHRpb25zXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgY3JlYXRlcyBhIG5ldyBiYXIgY2hhcnQgYW5kIHJldHVybnMgQVBJIG9iamVjdCB0aGF0IHlvdSBjYW4gdXNlIGZvciBsYXRlciBjaGFuZ2VzLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuQmFyXG4gICAqIEBwYXJhbSB7U3RyaW5nfE5vZGV9IHF1ZXJ5IEEgc2VsZWN0b3IgcXVlcnkgc3RyaW5nIG9yIGRpcmVjdGx5IGEgRE9NIGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgb2JqZWN0IHRoYXQgbmVlZHMgdG8gY29uc2lzdCBvZiBhIGxhYmVscyBhbmQgYSBzZXJpZXMgYXJyYXlcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBUaGUgb3B0aW9ucyBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgb3B0aW9ucy4gQ2hlY2sgdGhlIGV4YW1wbGVzIGZvciBhIGRldGFpbGVkIGxpc3QuXG4gICAqIEBwYXJhbSB7QXJyYXl9IFtyZXNwb25zaXZlT3B0aW9uc10gU3BlY2lmeSBhbiBhcnJheSBvZiByZXNwb25zaXZlIG9wdGlvbiBhcnJheXMgd2hpY2ggYXJlIGEgbWVkaWEgcXVlcnkgYW5kIG9wdGlvbnMgb2JqZWN0IHBhaXIgPT4gW1ttZWRpYVF1ZXJ5U3RyaW5nLCBvcHRpb25zT2JqZWN0XSxbbW9yZS4uLl1dXG4gICAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdoaWNoIGV4cG9zZXMgdGhlIEFQSSBmb3IgdGhlIGNyZWF0ZWQgY2hhcnRcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogLy8gQ3JlYXRlIGEgc2ltcGxlIGJhciBjaGFydFxuICAgKiB2YXIgZGF0YSA9IHtcbiAgICogICBsYWJlbHM6IFsnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaSddLFxuICAgKiAgIHNlcmllczogW1xuICAgKiAgICAgWzUsIDIsIDQsIDIsIDBdXG4gICAqICAgXVxuICAgKiB9O1xuICAgKlxuICAgKiAvLyBJbiB0aGUgZ2xvYmFsIG5hbWUgc3BhY2UgQ2hhcnRpc3Qgd2UgY2FsbCB0aGUgQmFyIGZ1bmN0aW9uIHRvIGluaXRpYWxpemUgYSBiYXIgY2hhcnQuIEFzIGEgZmlyc3QgcGFyYW1ldGVyIHdlIHBhc3MgaW4gYSBzZWxlY3RvciB3aGVyZSB3ZSB3b3VsZCBsaWtlIHRvIGdldCBvdXIgY2hhcnQgY3JlYXRlZCBhbmQgYXMgYSBzZWNvbmQgcGFyYW1ldGVyIHdlIHBhc3Mgb3VyIGRhdGEgb2JqZWN0LlxuICAgKiBuZXcgQ2hhcnRpc3QuQmFyKCcuY3QtY2hhcnQnLCBkYXRhKTtcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogLy8gVGhpcyBleGFtcGxlIGNyZWF0ZXMgYSBiaXBvbGFyIGdyb3VwZWQgYmFyIGNoYXJ0IHdoZXJlIHRoZSBib3VuZGFyaWVzIGFyZSBsaW1pdHRlZCB0byAtMTAgYW5kIDEwXG4gICAqIG5ldyBDaGFydGlzdC5CYXIoJy5jdC1jaGFydCcsIHtcbiAgICogICBsYWJlbHM6IFsxLCAyLCAzLCA0LCA1LCA2LCA3XSxcbiAgICogICBzZXJpZXM6IFtcbiAgICogICAgIFsxLCAzLCAyLCAtNSwgLTMsIDEsIC02XSxcbiAgICogICAgIFstNSwgLTIsIC00LCAtMSwgMiwgLTMsIDFdXG4gICAqICAgXVxuICAgKiB9LCB7XG4gICAqICAgc2VyaWVzQmFyRGlzdGFuY2U6IDEyLFxuICAgKiAgIGxvdzogLTEwLFxuICAgKiAgIGhpZ2g6IDEwXG4gICAqIH0pO1xuICAgKlxuICAgKi9cbiAgZnVuY3Rpb24gQmFyKHF1ZXJ5LCBkYXRhLCBvcHRpb25zLCByZXNwb25zaXZlT3B0aW9ucykge1xuICAgIENoYXJ0aXN0LkJhci5zdXBlci5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsXG4gICAgICBxdWVyeSxcbiAgICAgIGRhdGEsXG4gICAgICBkZWZhdWx0T3B0aW9ucyxcbiAgICAgIENoYXJ0aXN0LmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpLFxuICAgICAgcmVzcG9uc2l2ZU9wdGlvbnMpO1xuICB9XG5cbiAgLy8gQ3JlYXRpbmcgYmFyIGNoYXJ0IHR5cGUgaW4gQ2hhcnRpc3QgbmFtZXNwYWNlXG4gIENoYXJ0aXN0LkJhciA9IENoYXJ0aXN0LkJhc2UuZXh0ZW5kKHtcbiAgICBjb25zdHJ1Y3RvcjogQmFyLFxuICAgIGNyZWF0ZUNoYXJ0OiBjcmVhdGVDaGFydFxuICB9KTtcblxufSh3aW5kb3csIGRvY3VtZW50LCBDaGFydGlzdCkpO1xuOy8qKlxuICogVGhlIHBpZSBjaGFydCBtb2R1bGUgb2YgQ2hhcnRpc3QgdGhhdCBjYW4gYmUgdXNlZCB0byBkcmF3IHBpZSwgZG9udXQgb3IgZ2F1Z2UgY2hhcnRzXG4gKlxuICogQG1vZHVsZSBDaGFydGlzdC5QaWVcbiAqL1xuLyogZ2xvYmFsIENoYXJ0aXN0ICovXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgQ2hhcnRpc3QpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IG9wdGlvbnMgaW4gbGluZSBjaGFydHMuIEV4cGFuZCB0aGUgY29kZSB2aWV3IHRvIHNlZSBhIGRldGFpbGVkIGxpc3Qgb2Ygb3B0aW9ucyB3aXRoIGNvbW1lbnRzLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuUGllXG4gICAqL1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgLy8gU3BlY2lmeSBhIGZpeGVkIHdpZHRoIGZvciB0aGUgY2hhcnQgYXMgYSBzdHJpbmcgKGkuZS4gJzEwMHB4JyBvciAnNTAlJylcbiAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgIC8vIFNwZWNpZnkgYSBmaXhlZCBoZWlnaHQgZm9yIHRoZSBjaGFydCBhcyBhIHN0cmluZyAoaS5lLiAnMTAwcHgnIG9yICc1MCUnKVxuICAgIGhlaWdodDogdW5kZWZpbmVkLFxuICAgIC8vIFBhZGRpbmcgb2YgdGhlIGNoYXJ0IGRyYXdpbmcgYXJlYSB0byB0aGUgY29udGFpbmVyIGVsZW1lbnQgYW5kIGxhYmVscyBhcyBhIG51bWJlciBvciBwYWRkaW5nIG9iamVjdCB7dG9wOiA1LCByaWdodDogNSwgYm90dG9tOiA1LCBsZWZ0OiA1fVxuICAgIGNoYXJ0UGFkZGluZzogNSxcbiAgICAvLyBPdmVycmlkZSB0aGUgY2xhc3MgbmFtZXMgdGhhdCBhcmUgdXNlZCB0byBnZW5lcmF0ZSB0aGUgU1ZHIHN0cnVjdHVyZSBvZiB0aGUgY2hhcnRcbiAgICBjbGFzc05hbWVzOiB7XG4gICAgICBjaGFydFBpZTogJ2N0LWNoYXJ0LXBpZScsXG4gICAgICBjaGFydERvbnV0OiAnY3QtY2hhcnQtZG9udXQnLFxuICAgICAgc2VyaWVzOiAnY3Qtc2VyaWVzJyxcbiAgICAgIHNsaWNlUGllOiAnY3Qtc2xpY2UtcGllJyxcbiAgICAgIHNsaWNlRG9udXQ6ICdjdC1zbGljZS1kb251dCcsXG4gICAgICBsYWJlbDogJ2N0LWxhYmVsJ1xuICAgIH0sXG4gICAgLy8gVGhlIHN0YXJ0IGFuZ2xlIG9mIHRoZSBwaWUgY2hhcnQgaW4gZGVncmVlcyB3aGVyZSAwIHBvaW50cyBub3J0aC4gQSBoaWdoZXIgdmFsdWUgb2Zmc2V0cyB0aGUgc3RhcnQgYW5nbGUgY2xvY2t3aXNlLlxuICAgIHN0YXJ0QW5nbGU6IDAsXG4gICAgLy8gQW4gb3B0aW9uYWwgdG90YWwgeW91IGNhbiBzcGVjaWZ5LiBCeSBzcGVjaWZ5aW5nIGEgdG90YWwgdmFsdWUsIHRoZSBzdW0gb2YgdGhlIHZhbHVlcyBpbiB0aGUgc2VyaWVzIG11c3QgYmUgdGhpcyB0b3RhbCBpbiBvcmRlciB0byBkcmF3IGEgZnVsbCBwaWUuIFlvdSBjYW4gdXNlIHRoaXMgcGFyYW1ldGVyIHRvIGRyYXcgb25seSBwYXJ0cyBvZiBhIHBpZSBvciBnYXVnZSBjaGFydHMuXG4gICAgdG90YWw6IHVuZGVmaW5lZCxcbiAgICAvLyBJZiBzcGVjaWZpZWQgdGhlIGRvbnV0IENTUyBjbGFzc2VzIHdpbGwgYmUgdXNlZCBhbmQgc3Ryb2tlcyB3aWxsIGJlIGRyYXduIGluc3RlYWQgb2YgcGllIHNsaWNlcy5cbiAgICBkb251dDogZmFsc2UsXG4gICAgLy8gU3BlY2lmeSB0aGUgZG9udXQgc3Ryb2tlIHdpZHRoLCBjdXJyZW50bHkgZG9uZSBpbiBqYXZhc2NyaXB0IGZvciBjb252ZW5pZW5jZS4gTWF5IG1vdmUgdG8gQ1NTIHN0eWxlcyBpbiB0aGUgZnV0dXJlLlxuICAgIC8vIFRoaXMgb3B0aW9uIGNhbiBiZSBzZXQgYXMgbnVtYmVyIG9yIHN0cmluZyB0byBzcGVjaWZ5IGEgcmVsYXRpdmUgd2lkdGggKGkuZS4gMTAwIG9yICczMCUnKS5cbiAgICBkb251dFdpZHRoOiA2MCxcbiAgICAvLyBJZiBhIGxhYmVsIHNob3VsZCBiZSBzaG93biBvciBub3RcbiAgICBzaG93TGFiZWw6IHRydWUsXG4gICAgLy8gTGFiZWwgcG9zaXRpb24gb2Zmc2V0IGZyb20gdGhlIHN0YW5kYXJkIHBvc2l0aW9uIHdoaWNoIGlzIGhhbGYgZGlzdGFuY2Ugb2YgdGhlIHJhZGl1cy4gVGhpcyB2YWx1ZSBjYW4gYmUgZWl0aGVyIHBvc2l0aXZlIG9yIG5lZ2F0aXZlLiBQb3NpdGl2ZSB2YWx1ZXMgd2lsbCBwb3NpdGlvbiB0aGUgbGFiZWwgYXdheSBmcm9tIHRoZSBjZW50ZXIuXG4gICAgbGFiZWxPZmZzZXQ6IDAsXG4gICAgLy8gVGhpcyBvcHRpb24gY2FuIGJlIHNldCB0byAnaW5zaWRlJywgJ291dHNpZGUnIG9yICdjZW50ZXInLiBQb3NpdGlvbmVkIHdpdGggJ2luc2lkZScgdGhlIGxhYmVscyB3aWxsIGJlIHBsYWNlZCBvbiBoYWxmIHRoZSBkaXN0YW5jZSBvZiB0aGUgcmFkaXVzIHRvIHRoZSBib3JkZXIgb2YgdGhlIFBpZSBieSByZXNwZWN0aW5nIHRoZSAnbGFiZWxPZmZzZXQnLiBUaGUgJ291dHNpZGUnIG9wdGlvbiB3aWxsIHBsYWNlIHRoZSBsYWJlbHMgYXQgdGhlIGJvcmRlciBvZiB0aGUgcGllIGFuZCAnY2VudGVyJyB3aWxsIHBsYWNlIHRoZSBsYWJlbHMgaW4gdGhlIGFic29sdXRlIGNlbnRlciBwb2ludCBvZiB0aGUgY2hhcnQuIFRoZSAnY2VudGVyJyBvcHRpb24gb25seSBtYWtlcyBzZW5zZSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSAnbGFiZWxPZmZzZXQnIG9wdGlvbi5cbiAgICBsYWJlbFBvc2l0aW9uOiAnaW5zaWRlJyxcbiAgICAvLyBBbiBpbnRlcnBvbGF0aW9uIGZ1bmN0aW9uIGZvciB0aGUgbGFiZWwgdmFsdWVcbiAgICBsYWJlbEludGVycG9sYXRpb25GbmM6IENoYXJ0aXN0Lm5vb3AsXG4gICAgLy8gTGFiZWwgZGlyZWN0aW9uIGNhbiBiZSAnbmV1dHJhbCcsICdleHBsb2RlJyBvciAnaW1wbG9kZScuIFRoZSBsYWJlbHMgYW5jaG9yIHdpbGwgYmUgcG9zaXRpb25lZCBiYXNlZCBvbiB0aG9zZSBzZXR0aW5ncyBhcyB3ZWxsIGFzIHRoZSBmYWN0IGlmIHRoZSBsYWJlbHMgYXJlIG9uIHRoZSByaWdodCBvciBsZWZ0IHNpZGUgb2YgdGhlIGNlbnRlciBvZiB0aGUgY2hhcnQuIFVzdWFsbHkgZXhwbG9kZSBpcyB1c2VmdWwgd2hlbiBsYWJlbHMgYXJlIHBvc2l0aW9uZWQgZmFyIGF3YXkgZnJvbSB0aGUgY2VudGVyLlxuICAgIGxhYmVsRGlyZWN0aW9uOiAnbmV1dHJhbCcsXG4gICAgLy8gSWYgdHJ1ZSB0aGUgd2hvbGUgZGF0YSBpcyByZXZlcnNlZCBpbmNsdWRpbmcgbGFiZWxzLCB0aGUgc2VyaWVzIG9yZGVyIGFzIHdlbGwgYXMgdGhlIHdob2xlIHNlcmllcyBkYXRhIGFycmF5cy5cbiAgICByZXZlcnNlRGF0YTogZmFsc2UsXG4gICAgLy8gSWYgdHJ1ZSBlbXB0eSB2YWx1ZXMgd2lsbCBiZSBpZ25vcmVkIHRvIGF2b2lkIGRyYXdpbmcgdW5uY2Vzc2FyeSBzbGljZXMgYW5kIGxhYmVsc1xuICAgIGlnbm9yZUVtcHR5VmFsdWVzOiBmYWxzZVxuICB9O1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIFNWRyBhbmNob3IgcG9zaXRpb24gYmFzZWQgb24gZGlyZWN0aW9uIGFuZCBjZW50ZXIgcGFyYW1ldGVyXG4gICAqXG4gICAqIEBwYXJhbSBjZW50ZXJcbiAgICogQHBhcmFtIGxhYmVsXG4gICAqIEBwYXJhbSBkaXJlY3Rpb25cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gZGV0ZXJtaW5lQW5jaG9yUG9zaXRpb24oY2VudGVyLCBsYWJlbCwgZGlyZWN0aW9uKSB7XG4gICAgdmFyIHRvVGhlUmlnaHQgPSBsYWJlbC54ID4gY2VudGVyLng7XG5cbiAgICBpZih0b1RoZVJpZ2h0ICYmIGRpcmVjdGlvbiA9PT0gJ2V4cGxvZGUnIHx8XG4gICAgICAhdG9UaGVSaWdodCAmJiBkaXJlY3Rpb24gPT09ICdpbXBsb2RlJykge1xuICAgICAgcmV0dXJuICdzdGFydCc7XG4gICAgfSBlbHNlIGlmKHRvVGhlUmlnaHQgJiYgZGlyZWN0aW9uID09PSAnaW1wbG9kZScgfHxcbiAgICAgICF0b1RoZVJpZ2h0ICYmIGRpcmVjdGlvbiA9PT0gJ2V4cGxvZGUnKSB7XG4gICAgICByZXR1cm4gJ2VuZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnbWlkZGxlJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgcGllIGNoYXJ0XG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVDaGFydChvcHRpb25zKSB7XG4gICAgdmFyIGRhdGEgPSBDaGFydGlzdC5ub3JtYWxpemVEYXRhKHRoaXMuZGF0YSk7XG4gICAgdmFyIHNlcmllc0dyb3VwcyA9IFtdLFxuICAgICAgbGFiZWxzR3JvdXAsXG4gICAgICBjaGFydFJlY3QsXG4gICAgICByYWRpdXMsXG4gICAgICBsYWJlbFJhZGl1cyxcbiAgICAgIHRvdGFsRGF0YVN1bSxcbiAgICAgIHN0YXJ0QW5nbGUgPSBvcHRpb25zLnN0YXJ0QW5nbGU7XG5cbiAgICAvLyBDcmVhdGUgU1ZHLmpzIGRyYXdcbiAgICB0aGlzLnN2ZyA9IENoYXJ0aXN0LmNyZWF0ZVN2Zyh0aGlzLmNvbnRhaW5lciwgb3B0aW9ucy53aWR0aCwgb3B0aW9ucy5oZWlnaHQsb3B0aW9ucy5kb251dCA/IG9wdGlvbnMuY2xhc3NOYW1lcy5jaGFydERvbnV0IDogb3B0aW9ucy5jbGFzc05hbWVzLmNoYXJ0UGllKTtcbiAgICAvLyBDYWxjdWxhdGUgY2hhcnRpbmcgcmVjdFxuICAgIGNoYXJ0UmVjdCA9IENoYXJ0aXN0LmNyZWF0ZUNoYXJ0UmVjdCh0aGlzLnN2Zywgb3B0aW9ucywgZGVmYXVsdE9wdGlvbnMucGFkZGluZyk7XG4gICAgLy8gR2V0IGJpZ2dlc3QgY2lyY2xlIHJhZGl1cyBwb3NzaWJsZSB3aXRoaW4gY2hhcnRSZWN0XG4gICAgcmFkaXVzID0gTWF0aC5taW4oY2hhcnRSZWN0LndpZHRoKCkgLyAyLCBjaGFydFJlY3QuaGVpZ2h0KCkgLyAyKTtcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgb2YgYWxsIHNlcmllcyB0byBnZXQgcmVmZXJlbmNlIHZhbHVlIG9yIHVzZSB0b3RhbCByZWZlcmVuY2UgZnJvbSBvcHRpb25hbCBvcHRpb25zXG4gICAgdG90YWxEYXRhU3VtID0gb3B0aW9ucy50b3RhbCB8fCBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzLnJlZHVjZShmdW5jdGlvbihwcmV2aW91c1ZhbHVlLCBjdXJyZW50VmFsdWUpIHtcbiAgICAgIHJldHVybiBwcmV2aW91c1ZhbHVlICsgY3VycmVudFZhbHVlO1xuICAgIH0sIDApO1xuXG4gICAgdmFyIGRvbnV0V2lkdGggPSBDaGFydGlzdC5xdWFudGl0eShvcHRpb25zLmRvbnV0V2lkdGgpO1xuICAgIGlmIChkb251dFdpZHRoLnVuaXQgPT09ICclJykge1xuICAgICAgZG9udXRXaWR0aC52YWx1ZSAqPSByYWRpdXMgLyAxMDA7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIGRvbnV0IGNoYXJ0IHdlIG5lZWQgdG8gYWRqdXN0IG91ciByYWRpdXMgdG8gZW5hYmxlIHN0cm9rZXMgdG8gYmUgZHJhd24gaW5zaWRlXG4gICAgLy8gVW5mb3J0dW5hdGVseSB0aGlzIGlzIG5vdCBwb3NzaWJsZSB3aXRoIHRoZSBjdXJyZW50IFNWRyBTcGVjXG4gICAgLy8gU2VlIHRoaXMgcHJvcG9zYWwgZm9yIG1vcmUgZGV0YWlsczogaHR0cDovL2xpc3RzLnczLm9yZy9BcmNoaXZlcy9QdWJsaWMvd3d3LXN2Zy8yMDAzT2N0LzAwMDAuaHRtbFxuICAgIHJhZGl1cyAtPSBvcHRpb25zLmRvbnV0ID8gZG9udXRXaWR0aC52YWx1ZSAvIDIgIDogMDtcblxuICAgIC8vIElmIGxhYmVsUG9zaXRpb24gaXMgc2V0IHRvIGBvdXRzaWRlYCBvciBhIGRvbnV0IGNoYXJ0IGlzIGRyYXduIHRoZW4gdGhlIGxhYmVsIHBvc2l0aW9uIGlzIGF0IHRoZSByYWRpdXMsXG4gICAgLy8gaWYgcmVndWxhciBwaWUgY2hhcnQgaXQncyBoYWxmIG9mIHRoZSByYWRpdXNcbiAgICBpZihvcHRpb25zLmxhYmVsUG9zaXRpb24gPT09ICdvdXRzaWRlJyB8fCBvcHRpb25zLmRvbnV0KSB7XG4gICAgICBsYWJlbFJhZGl1cyA9IHJhZGl1cztcbiAgICB9IGVsc2UgaWYob3B0aW9ucy5sYWJlbFBvc2l0aW9uID09PSAnY2VudGVyJykge1xuICAgICAgLy8gSWYgbGFiZWxQb3NpdGlvbiBpcyBjZW50ZXIgd2Ugc3RhcnQgd2l0aCAwIGFuZCB3aWxsIGxhdGVyIHdhaXQgZm9yIHRoZSBsYWJlbE9mZnNldFxuICAgICAgbGFiZWxSYWRpdXMgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZWZhdWx0IG9wdGlvbiBpcyAnaW5zaWRlJyB3aGVyZSB3ZSB1c2UgaGFsZiB0aGUgcmFkaXVzIHNvIHRoZSBsYWJlbCB3aWxsIGJlIHBsYWNlZCBpbiB0aGUgY2VudGVyIG9mIHRoZSBwaWVcbiAgICAgIC8vIHNsaWNlXG4gICAgICBsYWJlbFJhZGl1cyA9IHJhZGl1cyAvIDI7XG4gICAgfVxuICAgIC8vIEFkZCB0aGUgb2Zmc2V0IHRvIHRoZSBsYWJlbFJhZGl1cyB3aGVyZSBhIG5lZ2F0aXZlIG9mZnNldCBtZWFucyBjbG9zZWQgdG8gdGhlIGNlbnRlciBvZiB0aGUgY2hhcnRcbiAgICBsYWJlbFJhZGl1cyArPSBvcHRpb25zLmxhYmVsT2Zmc2V0O1xuXG4gICAgLy8gQ2FsY3VsYXRlIGVuZCBhbmdsZSBiYXNlZCBvbiB0b3RhbCBzdW0gYW5kIGN1cnJlbnQgZGF0YSB2YWx1ZSBhbmQgb2Zmc2V0IHdpdGggcGFkZGluZ1xuICAgIHZhciBjZW50ZXIgPSB7XG4gICAgICB4OiBjaGFydFJlY3QueDEgKyBjaGFydFJlY3Qud2lkdGgoKSAvIDIsXG4gICAgICB5OiBjaGFydFJlY3QueTIgKyBjaGFydFJlY3QuaGVpZ2h0KCkgLyAyXG4gICAgfTtcblxuICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIG9ubHkgb25lIG5vbi16ZXJvIHZhbHVlIGluIHRoZSBzZXJpZXMgYXJyYXkuXG4gICAgdmFyIGhhc1NpbmdsZVZhbEluU2VyaWVzID0gZGF0YS5yYXcuc2VyaWVzLmZpbHRlcihmdW5jdGlvbih2YWwpIHtcbiAgICAgIHJldHVybiB2YWwuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPyB2YWwudmFsdWUgIT09IDAgOiB2YWwgIT09IDA7XG4gICAgfSkubGVuZ3RoID09PSAxO1xuXG4gICAgLy8gQ3JlYXRpbmcgdGhlIHNlcmllcyBncm91cHNcbiAgICBkYXRhLnJhdy5zZXJpZXMuZm9yRWFjaChmdW5jdGlvbihzZXJpZXMsIGluZGV4KSB7XG4gICAgICBzZXJpZXNHcm91cHNbaW5kZXhdID0gdGhpcy5zdmcuZWxlbSgnZycsIG51bGwsIG51bGwpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgLy9pZiB3ZSBuZWVkIHRvIHNob3cgbGFiZWxzIHdlIGNyZWF0ZSB0aGUgbGFiZWwgZ3JvdXAgbm93XG4gICAgaWYob3B0aW9ucy5zaG93TGFiZWwpIHtcbiAgICAgIGxhYmVsc0dyb3VwID0gdGhpcy5zdmcuZWxlbSgnZycsIG51bGwsIG51bGwpO1xuICAgIH1cblxuICAgIC8vIERyYXcgdGhlIHNlcmllc1xuICAgIC8vIGluaXRpYWxpemUgc2VyaWVzIGdyb3Vwc1xuICAgIGRhdGEucmF3LnNlcmllcy5mb3JFYWNoKGZ1bmN0aW9uKHNlcmllcywgaW5kZXgpIHtcbiAgICAgIC8vIElmIGN1cnJlbnQgdmFsdWUgaXMgemVybyBhbmQgd2UgYXJlIGlnbm9yaW5nIGVtcHR5IHZhbHVlcyB0aGVuIHNraXAgdG8gbmV4dCB2YWx1ZVxuICAgICAgaWYgKGRhdGEubm9ybWFsaXplZC5zZXJpZXNbaW5kZXhdID09PSAwICYmIG9wdGlvbnMuaWdub3JlRW1wdHlWYWx1ZXMpIHJldHVybjtcblxuICAgICAgLy8gSWYgdGhlIHNlcmllcyBpcyBhbiBvYmplY3QgYW5kIGNvbnRhaW5zIGEgbmFtZSBvciBtZXRhIGRhdGEgd2UgYWRkIGEgY3VzdG9tIGF0dHJpYnV0ZVxuICAgICAgc2VyaWVzR3JvdXBzW2luZGV4XS5hdHRyKHtcbiAgICAgICAgJ2N0OnNlcmllcy1uYW1lJzogc2VyaWVzLm5hbWVcbiAgICAgIH0pO1xuXG4gICAgICAvLyBVc2Ugc2VyaWVzIGNsYXNzIGZyb20gc2VyaWVzIGRhdGEgb3IgaWYgbm90IHNldCBnZW5lcmF0ZSBvbmVcbiAgICAgIHNlcmllc0dyb3Vwc1tpbmRleF0uYWRkQ2xhc3MoW1xuICAgICAgICBvcHRpb25zLmNsYXNzTmFtZXMuc2VyaWVzLFxuICAgICAgICAoc2VyaWVzLmNsYXNzTmFtZSB8fCBvcHRpb25zLmNsYXNzTmFtZXMuc2VyaWVzICsgJy0nICsgQ2hhcnRpc3QuYWxwaGFOdW1lcmF0ZShpbmRleCkpXG4gICAgICBdLmpvaW4oJyAnKSk7XG5cbiAgICAgIC8vIElmIHRoZSB3aG9sZSBkYXRhc2V0IGlzIDAgZW5kQW5nbGUgc2hvdWxkIGJlIHplcm8uIENhbid0IGRpdmlkZSBieSAwLlxuICAgICAgdmFyIGVuZEFuZ2xlID0gKHRvdGFsRGF0YVN1bSA+IDAgPyBzdGFydEFuZ2xlICsgZGF0YS5ub3JtYWxpemVkLnNlcmllc1tpbmRleF0gLyB0b3RhbERhdGFTdW0gKiAzNjAgOiAwKTtcblxuICAgICAgLy8gVXNlIHNsaWdodCBvZmZzZXQgc28gdGhlcmUgYXJlIG5vIHRyYW5zcGFyZW50IGhhaXJsaW5lIGlzc3Vlc1xuICAgICAgdmFyIG92ZXJsYXBwaWdTdGFydEFuZ2xlID0gTWF0aC5tYXgoMCwgc3RhcnRBbmdsZSAtIChpbmRleCA9PT0gMCB8fCBoYXNTaW5nbGVWYWxJblNlcmllcyA/IDAgOiAwLjIpKTtcblxuICAgICAgLy8gSWYgd2UgbmVlZCB0byBkcmF3IHRoZSBhcmMgZm9yIGFsbCAzNjAgZGVncmVlcyB3ZSBuZWVkIHRvIGFkZCBhIGhhY2sgd2hlcmUgd2UgY2xvc2UgdGhlIGNpcmNsZVxuICAgICAgLy8gd2l0aCBaIGFuZCB1c2UgMzU5Ljk5IGRlZ3JlZXNcbiAgICAgIGlmKGVuZEFuZ2xlIC0gb3ZlcmxhcHBpZ1N0YXJ0QW5nbGUgPj0gMzU5Ljk5KSB7XG4gICAgICAgIGVuZEFuZ2xlID0gb3ZlcmxhcHBpZ1N0YXJ0QW5nbGUgKyAzNTkuOTk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGFydCA9IENoYXJ0aXN0LnBvbGFyVG9DYXJ0ZXNpYW4oY2VudGVyLngsIGNlbnRlci55LCByYWRpdXMsIG92ZXJsYXBwaWdTdGFydEFuZ2xlKSxcbiAgICAgICAgZW5kID0gQ2hhcnRpc3QucG9sYXJUb0NhcnRlc2lhbihjZW50ZXIueCwgY2VudGVyLnksIHJhZGl1cywgZW5kQW5nbGUpO1xuXG4gICAgICAvLyBDcmVhdGUgYSBuZXcgcGF0aCBlbGVtZW50IGZvciB0aGUgcGllIGNoYXJ0LiBJZiB0aGlzIGlzbid0IGEgZG9udXQgY2hhcnQgd2Ugc2hvdWxkIGNsb3NlIHRoZSBwYXRoIGZvciBhIGNvcnJlY3Qgc3Ryb2tlXG4gICAgICB2YXIgcGF0aCA9IG5ldyBDaGFydGlzdC5TdmcuUGF0aCghb3B0aW9ucy5kb251dClcbiAgICAgICAgLm1vdmUoZW5kLngsIGVuZC55KVxuICAgICAgICAuYXJjKHJhZGl1cywgcmFkaXVzLCAwLCBlbmRBbmdsZSAtIHN0YXJ0QW5nbGUgPiAxODAsIDAsIHN0YXJ0LngsIHN0YXJ0LnkpO1xuXG4gICAgICAvLyBJZiByZWd1bGFyIHBpZSBjaGFydCAobm8gZG9udXQpIHdlIGFkZCBhIGxpbmUgdG8gdGhlIGNlbnRlciBvZiB0aGUgY2lyY2xlIGZvciBjb21wbGV0aW5nIHRoZSBwaWVcbiAgICAgIGlmKCFvcHRpb25zLmRvbnV0KSB7XG4gICAgICAgIHBhdGgubGluZShjZW50ZXIueCwgY2VudGVyLnkpO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgdGhlIFNWRyBwYXRoXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgZG9udXQgY2hhcnQgd2UgYWRkIHRoZSBkb251dCBjbGFzcywgb3RoZXJ3aXNlIGp1c3QgYSByZWd1bGFyIHNsaWNlXG4gICAgICB2YXIgcGF0aEVsZW1lbnQgPSBzZXJpZXNHcm91cHNbaW5kZXhdLmVsZW0oJ3BhdGgnLCB7XG4gICAgICAgIGQ6IHBhdGguc3RyaW5naWZ5KClcbiAgICAgIH0sIG9wdGlvbnMuZG9udXQgPyBvcHRpb25zLmNsYXNzTmFtZXMuc2xpY2VEb251dCA6IG9wdGlvbnMuY2xhc3NOYW1lcy5zbGljZVBpZSk7XG5cbiAgICAgIC8vIEFkZGluZyB0aGUgcGllIHNlcmllcyB2YWx1ZSB0byB0aGUgcGF0aFxuICAgICAgcGF0aEVsZW1lbnQuYXR0cih7XG4gICAgICAgICdjdDp2YWx1ZSc6IGRhdGEubm9ybWFsaXplZC5zZXJpZXNbaW5kZXhdLFxuICAgICAgICAnY3Q6bWV0YSc6IENoYXJ0aXN0LnNlcmlhbGl6ZShzZXJpZXMubWV0YSlcbiAgICAgIH0pO1xuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgZG9udXQsIHdlIGFkZCB0aGUgc3Ryb2tlLXdpZHRoIGFzIHN0eWxlIGF0dHJpYnV0ZVxuICAgICAgaWYob3B0aW9ucy5kb251dCkge1xuICAgICAgICBwYXRoRWxlbWVudC5hdHRyKHtcbiAgICAgICAgICAnc3R5bGUnOiAnc3Ryb2tlLXdpZHRoOiAnICsgZG9udXRXaWR0aC52YWx1ZSArICdweCdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEZpcmUgb2ZmIGRyYXcgZXZlbnRcbiAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ2RyYXcnLCB7XG4gICAgICAgIHR5cGU6ICdzbGljZScsXG4gICAgICAgIHZhbHVlOiBkYXRhLm5vcm1hbGl6ZWQuc2VyaWVzW2luZGV4XSxcbiAgICAgICAgdG90YWxEYXRhU3VtOiB0b3RhbERhdGFTdW0sXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgbWV0YTogc2VyaWVzLm1ldGEsXG4gICAgICAgIHNlcmllczogc2VyaWVzLFxuICAgICAgICBncm91cDogc2VyaWVzR3JvdXBzW2luZGV4XSxcbiAgICAgICAgZWxlbWVudDogcGF0aEVsZW1lbnQsXG4gICAgICAgIHBhdGg6IHBhdGguY2xvbmUoKSxcbiAgICAgICAgY2VudGVyOiBjZW50ZXIsXG4gICAgICAgIHJhZGl1czogcmFkaXVzLFxuICAgICAgICBzdGFydEFuZ2xlOiBzdGFydEFuZ2xlLFxuICAgICAgICBlbmRBbmdsZTogZW5kQW5nbGVcbiAgICAgIH0pO1xuXG4gICAgICAvLyBJZiB3ZSBuZWVkIHRvIHNob3cgbGFiZWxzIHdlIG5lZWQgdG8gYWRkIHRoZSBsYWJlbCBmb3IgdGhpcyBzbGljZSBub3dcbiAgICAgIGlmKG9wdGlvbnMuc2hvd0xhYmVsKSB7XG4gICAgICAgIHZhciBsYWJlbFBvc2l0aW9uO1xuICAgICAgICBpZihkYXRhLnJhdy5zZXJpZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgLy8gSWYgd2UgaGF2ZSBvbmx5IDEgc2VyaWVzLCB3ZSBjYW4gcG9zaXRpb24gdGhlIGxhYmVsIGluIHRoZSBjZW50ZXIgb2YgdGhlIHBpZVxuICAgICAgICAgIGxhYmVsUG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiBjZW50ZXIueCxcbiAgICAgICAgICAgIHk6IGNlbnRlci55XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBQb3NpdGlvbiBhdCB0aGUgbGFiZWxSYWRpdXMgZGlzdGFuY2UgZnJvbSBjZW50ZXIgYW5kIGJldHdlZW4gc3RhcnQgYW5kIGVuZCBhbmdsZVxuICAgICAgICAgIGxhYmVsUG9zaXRpb24gPSBDaGFydGlzdC5wb2xhclRvQ2FydGVzaWFuKFxuICAgICAgICAgICAgY2VudGVyLngsXG4gICAgICAgICAgICBjZW50ZXIueSxcbiAgICAgICAgICAgIGxhYmVsUmFkaXVzLFxuICAgICAgICAgICAgc3RhcnRBbmdsZSArIChlbmRBbmdsZSAtIHN0YXJ0QW5nbGUpIC8gMlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmF3VmFsdWU7XG4gICAgICAgIGlmKGRhdGEubm9ybWFsaXplZC5sYWJlbHMgJiYgIUNoYXJ0aXN0LmlzRmFsc2V5QnV0WmVybyhkYXRhLm5vcm1hbGl6ZWQubGFiZWxzW2luZGV4XSkpIHtcbiAgICAgICAgICByYXdWYWx1ZSA9IGRhdGEubm9ybWFsaXplZC5sYWJlbHNbaW5kZXhdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJhd1ZhbHVlID0gZGF0YS5ub3JtYWxpemVkLnNlcmllc1tpbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW50ZXJwb2xhdGVkVmFsdWUgPSBvcHRpb25zLmxhYmVsSW50ZXJwb2xhdGlvbkZuYyhyYXdWYWx1ZSwgaW5kZXgpO1xuXG4gICAgICAgIGlmKGludGVycG9sYXRlZFZhbHVlIHx8IGludGVycG9sYXRlZFZhbHVlID09PSAwKSB7XG4gICAgICAgICAgdmFyIGxhYmVsRWxlbWVudCA9IGxhYmVsc0dyb3VwLmVsZW0oJ3RleHQnLCB7XG4gICAgICAgICAgICBkeDogbGFiZWxQb3NpdGlvbi54LFxuICAgICAgICAgICAgZHk6IGxhYmVsUG9zaXRpb24ueSxcbiAgICAgICAgICAgICd0ZXh0LWFuY2hvcic6IGRldGVybWluZUFuY2hvclBvc2l0aW9uKGNlbnRlciwgbGFiZWxQb3NpdGlvbiwgb3B0aW9ucy5sYWJlbERpcmVjdGlvbilcbiAgICAgICAgICB9LCBvcHRpb25zLmNsYXNzTmFtZXMubGFiZWwpLnRleHQoJycgKyBpbnRlcnBvbGF0ZWRWYWx1ZSk7XG5cbiAgICAgICAgICAvLyBGaXJlIG9mZiBkcmF3IGV2ZW50XG4gICAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgnZHJhdycsIHtcbiAgICAgICAgICAgIHR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICBncm91cDogbGFiZWxzR3JvdXAsXG4gICAgICAgICAgICBlbGVtZW50OiBsYWJlbEVsZW1lbnQsXG4gICAgICAgICAgICB0ZXh0OiAnJyArIGludGVycG9sYXRlZFZhbHVlLFxuICAgICAgICAgICAgeDogbGFiZWxQb3NpdGlvbi54LFxuICAgICAgICAgICAgeTogbGFiZWxQb3NpdGlvbi55XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU2V0IG5leHQgc3RhcnRBbmdsZSB0byBjdXJyZW50IGVuZEFuZ2xlLlxuICAgICAgLy8gKGV4Y2VwdCBmb3IgbGFzdCBzbGljZSlcbiAgICAgIHN0YXJ0QW5nbGUgPSBlbmRBbmdsZTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgnY3JlYXRlZCcsIHtcbiAgICAgIGNoYXJ0UmVjdDogY2hhcnRSZWN0LFxuICAgICAgc3ZnOiB0aGlzLnN2ZyxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBjcmVhdGVzIGEgbmV3IHBpZSBjaGFydCBhbmQgcmV0dXJucyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZWRyYXcgdGhlIGNoYXJ0LlxuICAgKlxuICAgKiBAbWVtYmVyb2YgQ2hhcnRpc3QuUGllXG4gICAqIEBwYXJhbSB7U3RyaW5nfE5vZGV9IHF1ZXJ5IEEgc2VsZWN0b3IgcXVlcnkgc3RyaW5nIG9yIGRpcmVjdGx5IGEgRE9NIGVsZW1lbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgVGhlIGRhdGEgb2JqZWN0IGluIHRoZSBwaWUgY2hhcnQgbmVlZHMgdG8gaGF2ZSBhIHNlcmllcyBwcm9wZXJ0eSB3aXRoIGEgb25lIGRpbWVuc2lvbmFsIGRhdGEgYXJyYXkuIFRoZSB2YWx1ZXMgd2lsbCBiZSBub3JtYWxpemVkIGFnYWluc3QgZWFjaCBvdGhlciBhbmQgZG9uJ3QgbmVjZXNzYXJpbHkgbmVlZCB0byBiZSBpbiBwZXJjZW50YWdlLiBUaGUgc2VyaWVzIHByb3BlcnR5IGNhbiBhbHNvIGJlIGFuIGFycmF5IG9mIHZhbHVlIG9iamVjdHMgdGhhdCBjb250YWluIGEgdmFsdWUgcHJvcGVydHkgYW5kIGEgY2xhc3NOYW1lIHByb3BlcnR5IHRvIG92ZXJyaWRlIHRoZSBDU1MgY2xhc3MgbmFtZSBmb3IgdGhlIHNlcmllcyBncm91cC5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBUaGUgb3B0aW9ucyBvYmplY3Qgd2l0aCBvcHRpb25zIHRoYXQgb3ZlcnJpZGUgdGhlIGRlZmF1bHQgb3B0aW9ucy4gQ2hlY2sgdGhlIGV4YW1wbGVzIGZvciBhIGRldGFpbGVkIGxpc3QuXG4gICAqIEBwYXJhbSB7QXJyYXl9IFtyZXNwb25zaXZlT3B0aW9uc10gU3BlY2lmeSBhbiBhcnJheSBvZiByZXNwb25zaXZlIG9wdGlvbiBhcnJheXMgd2hpY2ggYXJlIGEgbWVkaWEgcXVlcnkgYW5kIG9wdGlvbnMgb2JqZWN0IHBhaXIgPT4gW1ttZWRpYVF1ZXJ5U3RyaW5nLCBvcHRpb25zT2JqZWN0XSxbbW9yZS4uLl1dXG4gICAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggYSB2ZXJzaW9uIGFuZCBhbiB1cGRhdGUgbWV0aG9kIHRvIG1hbnVhbGx5IHJlZHJhdyB0aGUgY2hhcnRcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogLy8gU2ltcGxlIHBpZSBjaGFydCBleGFtcGxlIHdpdGggZm91ciBzZXJpZXNcbiAgICogbmV3IENoYXJ0aXN0LlBpZSgnLmN0LWNoYXJ0Jywge1xuICAgKiAgIHNlcmllczogWzEwLCAyLCA0LCAzXVxuICAgKiB9KTtcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogLy8gRHJhd2luZyBhIGRvbnV0IGNoYXJ0XG4gICAqIG5ldyBDaGFydGlzdC5QaWUoJy5jdC1jaGFydCcsIHtcbiAgICogICBzZXJpZXM6IFsxMCwgMiwgNCwgM11cbiAgICogfSwge1xuICAgKiAgIGRvbnV0OiB0cnVlXG4gICAqIH0pO1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBVc2luZyBkb251dCwgc3RhcnRBbmdsZSBhbmQgdG90YWwgdG8gZHJhdyBhIGdhdWdlIGNoYXJ0XG4gICAqIG5ldyBDaGFydGlzdC5QaWUoJy5jdC1jaGFydCcsIHtcbiAgICogICBzZXJpZXM6IFsyMCwgMTAsIDMwLCA0MF1cbiAgICogfSwge1xuICAgKiAgIGRvbnV0OiB0cnVlLFxuICAgKiAgIGRvbnV0V2lkdGg6IDIwLFxuICAgKiAgIHN0YXJ0QW5nbGU6IDI3MCxcbiAgICogICB0b3RhbDogMjAwXG4gICAqIH0pO1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBEcmF3aW5nIGEgcGllIGNoYXJ0IHdpdGggcGFkZGluZyBhbmQgbGFiZWxzIHRoYXQgYXJlIG91dHNpZGUgdGhlIHBpZVxuICAgKiBuZXcgQ2hhcnRpc3QuUGllKCcuY3QtY2hhcnQnLCB7XG4gICAqICAgc2VyaWVzOiBbMjAsIDEwLCAzMCwgNDBdXG4gICAqIH0sIHtcbiAgICogICBjaGFydFBhZGRpbmc6IDMwLFxuICAgKiAgIGxhYmVsT2Zmc2V0OiA1MCxcbiAgICogICBsYWJlbERpcmVjdGlvbjogJ2V4cGxvZGUnXG4gICAqIH0pO1xuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBPdmVycmlkaW5nIHRoZSBjbGFzcyBuYW1lcyBmb3IgaW5kaXZpZHVhbCBzZXJpZXMgYXMgd2VsbCBhcyBhIG5hbWUgYW5kIG1ldGEgZGF0YS5cbiAgICogLy8gVGhlIG5hbWUgd2lsbCBiZSB3cml0dGVuIGFzIGN0OnNlcmllcy1uYW1lIGF0dHJpYnV0ZSBhbmQgdGhlIG1ldGEgZGF0YSB3aWxsIGJlIHNlcmlhbGl6ZWQgYW5kIHdyaXR0ZW5cbiAgICogLy8gdG8gYSBjdDptZXRhIGF0dHJpYnV0ZS5cbiAgICogbmV3IENoYXJ0aXN0LlBpZSgnLmN0LWNoYXJ0Jywge1xuICAgKiAgIHNlcmllczogW3tcbiAgICogICAgIHZhbHVlOiAyMCxcbiAgICogICAgIG5hbWU6ICdTZXJpZXMgMScsXG4gICAqICAgICBjbGFzc05hbWU6ICdteS1jdXN0b20tY2xhc3Mtb25lJyxcbiAgICogICAgIG1ldGE6ICdNZXRhIE9uZSdcbiAgICogICB9LCB7XG4gICAqICAgICB2YWx1ZTogMTAsXG4gICAqICAgICBuYW1lOiAnU2VyaWVzIDInLFxuICAgKiAgICAgY2xhc3NOYW1lOiAnbXktY3VzdG9tLWNsYXNzLXR3bycsXG4gICAqICAgICBtZXRhOiAnTWV0YSBUd28nXG4gICAqICAgfSwge1xuICAgKiAgICAgdmFsdWU6IDcwLFxuICAgKiAgICAgbmFtZTogJ1NlcmllcyAzJyxcbiAgICogICAgIGNsYXNzTmFtZTogJ215LWN1c3RvbS1jbGFzcy10aHJlZScsXG4gICAqICAgICBtZXRhOiAnTWV0YSBUaHJlZSdcbiAgICogICB9XVxuICAgKiB9KTtcbiAgICovXG4gIGZ1bmN0aW9uIFBpZShxdWVyeSwgZGF0YSwgb3B0aW9ucywgcmVzcG9uc2l2ZU9wdGlvbnMpIHtcbiAgICBDaGFydGlzdC5QaWUuc3VwZXIuY29uc3RydWN0b3IuY2FsbCh0aGlzLFxuICAgICAgcXVlcnksXG4gICAgICBkYXRhLFxuICAgICAgZGVmYXVsdE9wdGlvbnMsXG4gICAgICBDaGFydGlzdC5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKSxcbiAgICAgIHJlc3BvbnNpdmVPcHRpb25zKTtcbiAgfVxuXG4gIC8vIENyZWF0aW5nIHBpZSBjaGFydCB0eXBlIGluIENoYXJ0aXN0IG5hbWVzcGFjZVxuICBDaGFydGlzdC5QaWUgPSBDaGFydGlzdC5CYXNlLmV4dGVuZCh7XG4gICAgY29uc3RydWN0b3I6IFBpZSxcbiAgICBjcmVhdGVDaGFydDogY3JlYXRlQ2hhcnQsXG4gICAgZGV0ZXJtaW5lQW5jaG9yUG9zaXRpb246IGRldGVybWluZUFuY2hvclBvc2l0aW9uXG4gIH0pO1xuXG59KHdpbmRvdywgZG9jdW1lbnQsIENoYXJ0aXN0KSk7XG5cbnJldHVybiBDaGFydGlzdDtcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NoYXJ0aXN0L2Rpc3QvY2hhcnRpc3QuanNcbi8vIG1vZHVsZSBpZCA9IDYxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDE4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY3QtbGFiZWwge1xcbiAgZmlsbDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4uY3QtY2hhcnQtbGluZSAuY3QtbGFiZWwsXFxuLmN0LWNoYXJ0LWJhciAuY3QtbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmN0LWNoYXJ0LXBpZSAuY3QtbGFiZWwsXFxuLmN0LWNoYXJ0LWRvbnV0IC5jdC1sYWJlbCB7XFxuICBkb21pbmFudC1iYXNlbGluZTogY2VudHJhbDtcXG59XFxuLmN0LWxhYmVsLmN0LWhvcml6b250YWwuY3Qtc3RhcnQge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGZsZXgtZW5kO1xcbiAgLW1zLWZsZXgtYWxpZ246IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogZmxleC1zdGFydDtcXG4gIC1tcy1mbGV4LXBhY2s6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdGV4dC1hbmNob3I6IHN0YXJ0O1xcbn1cXG4uY3QtbGFiZWwuY3QtaG9yaXpvbnRhbC5jdC1lbmQge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGZsZXgtc3RhcnQ7XFxuICAtbXMtZmxleC1hbGlnbjogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogZmxleC1zdGFydDtcXG4gIC1tcy1mbGV4LXBhY2s6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdGV4dC1hbmNob3I6IHN0YXJ0O1xcbn1cXG4uY3QtbGFiZWwuY3QtdmVydGljYWwuY3Qtc3RhcnQge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGZsZXgtZW5kO1xcbiAgLW1zLWZsZXgtYWxpZ246IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogZmxleC1lbmQ7XFxuICAtbXMtZmxleC1wYWNrOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRleHQtYW5jaG9yOiBlbmQ7XFxufVxcbi5jdC1sYWJlbC5jdC12ZXJ0aWNhbC5jdC1lbmQge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGZsZXgtZW5kO1xcbiAgLW1zLWZsZXgtYWxpZ246IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogZmxleC1zdGFydDtcXG4gIC1tcy1mbGV4LXBhY2s6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdGV4dC1hbmNob3I6IHN0YXJ0O1xcbn1cXG4uY3QtY2hhcnQtYmFyIC5jdC1sYWJlbC5jdC1ob3Jpem9udGFsLmN0LXN0YXJ0IHtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBmbGV4LWVuZDtcXG4gIC1tcy1mbGV4LWFsaWduOiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1hbmNob3I6IHN0YXJ0O1xcbn1cXG4uY3QtY2hhcnQtYmFyIC5jdC1sYWJlbC5jdC1ob3Jpem9udGFsLmN0LWVuZCB7XFxuICAtd2Via2l0LWJveC1hbGlnbjogZmxleC1zdGFydDtcXG4gIC1tcy1mbGV4LWFsaWduOiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtYW5jaG9yOiBzdGFydDtcXG59XFxuLmN0LWNoYXJ0LWJhci5jdC1ob3Jpem9udGFsLWJhcnMgLmN0LWxhYmVsLmN0LWhvcml6b250YWwuY3Qtc3RhcnQge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGZsZXgtZW5kO1xcbiAgLW1zLWZsZXgtYWxpZ246IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogZmxleC1zdGFydDtcXG4gIC1tcy1mbGV4LXBhY2s6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdGV4dC1hbmNob3I6IHN0YXJ0O1xcbn1cXG4uY3QtY2hhcnQtYmFyLmN0LWhvcml6b250YWwtYmFycyAuY3QtbGFiZWwuY3QtaG9yaXpvbnRhbC5jdC1lbmQge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGZsZXgtc3RhcnQ7XFxuICAtbXMtZmxleC1hbGlnbjogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgLXdlYmtpdC1ib3gtcGFjazogZmxleC1zdGFydDtcXG4gIC1tcy1mbGV4LXBhY2s6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdGV4dC1hbmNob3I6IHN0YXJ0O1xcbn1cXG4uY3QtY2hhcnQtYmFyLmN0LWhvcml6b250YWwtYmFycyAuY3QtbGFiZWwuY3QtdmVydGljYWwuY3Qtc3RhcnQge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogZmxleC1lbmQ7XFxuICAtbXMtZmxleC1wYWNrOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRleHQtYW5jaG9yOiBlbmQ7XFxufVxcbi5jdC1jaGFydC1iYXIuY3QtaG9yaXpvbnRhbC1iYXJzIC5jdC1sYWJlbC5jdC12ZXJ0aWNhbC5jdC1lbmQge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogZmxleC1zdGFydDtcXG4gIC1tcy1mbGV4LXBhY2s6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdGV4dC1hbmNob3I6IGVuZDtcXG59XFxuLmN0LWdyaWQge1xcbiAgc3Ryb2tlOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBzdHJva2Utd2lkdGg6IDFweDtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDJweDtcXG59XFxuLmN0LWdyaWQtYmFja2dyb3VuZCB7XFxuICBmaWxsOiBub25lO1xcbn1cXG4uY3QtcG9pbnQge1xcbiAgc3Ryb2tlLXdpZHRoOiAxMHB4O1xcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbn1cXG4uY3QtbGluZSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlLXdpZHRoOiA0cHg7XFxufVxcbi5jdC1hcmVhIHtcXG4gIHN0cm9rZTogbm9uZTtcXG4gIGZpbGwtb3BhY2l0eTogMC4xO1xcbn1cXG4uY3QtYmFyIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2Utd2lkdGg6IDEwcHg7XFxufVxcbi5jdC1zbGljZS1kb251dCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlLXdpZHRoOiA2MHB4O1xcbn1cXG4uY3Qtc2VyaWVzLWEgLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWEgLmN0LWxpbmUsIC5jdC1zZXJpZXMtYSAuY3QtYmFyLCAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLWRvbnV0IHtcXG4gIHN0cm9rZTogI2Q3MDIwNjtcXG59XFxuLmN0LXNlcmllcy1hIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XFxuICBmaWxsOiAjZDcwMjA2O1xcbn1cXG4uY3Qtc2VyaWVzLWIgLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWIgLmN0LWxpbmUsIC5jdC1zZXJpZXMtYiAuY3QtYmFyLCAuY3Qtc2VyaWVzLWIgLmN0LXNsaWNlLWRvbnV0IHtcXG4gIHN0cm9rZTogI2YwNWI0ZjtcXG59XFxuLmN0LXNlcmllcy1iIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtYiAuY3QtYXJlYSB7XFxuICBmaWxsOiAjZjA1YjRmO1xcbn1cXG4uY3Qtc2VyaWVzLWMgLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWMgLmN0LWxpbmUsIC5jdC1zZXJpZXMtYyAuY3QtYmFyLCAuY3Qtc2VyaWVzLWMgLmN0LXNsaWNlLWRvbnV0IHtcXG4gIHN0cm9rZTogI2Y0YzYzZDtcXG59XFxuLmN0LXNlcmllcy1jIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtYyAuY3QtYXJlYSB7XFxuICBmaWxsOiAjZjRjNjNkO1xcbn1cXG4uY3Qtc2VyaWVzLWQgLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWQgLmN0LWxpbmUsIC5jdC1zZXJpZXMtZCAuY3QtYmFyLCAuY3Qtc2VyaWVzLWQgLmN0LXNsaWNlLWRvbnV0IHtcXG4gIHN0cm9rZTogI2QxNzkwNTtcXG59XFxuLmN0LXNlcmllcy1kIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtZCAuY3QtYXJlYSB7XFxuICBmaWxsOiAjZDE3OTA1O1xcbn1cXG4uY3Qtc2VyaWVzLWUgLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWUgLmN0LWxpbmUsIC5jdC1zZXJpZXMtZSAuY3QtYmFyLCAuY3Qtc2VyaWVzLWUgLmN0LXNsaWNlLWRvbnV0IHtcXG4gIHN0cm9rZTogIzQ1M2QzZjtcXG59XFxuLmN0LXNlcmllcy1lIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtZSAuY3QtYXJlYSB7XFxuICBmaWxsOiAjNDUzZDNmO1xcbn1cXG4uY3Qtc2VyaWVzLWYgLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWYgLmN0LWxpbmUsIC5jdC1zZXJpZXMtZiAuY3QtYmFyLCAuY3Qtc2VyaWVzLWYgLmN0LXNsaWNlLWRvbnV0IHtcXG4gIHN0cm9rZTogIzU5OTIyYjtcXG59XFxuLmN0LXNlcmllcy1mIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtZiAuY3QtYXJlYSB7XFxuICBmaWxsOiAjNTk5MjJiO1xcbn1cXG4uY3Qtc2VyaWVzLWcgLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWcgLmN0LWxpbmUsIC5jdC1zZXJpZXMtZyAuY3QtYmFyLCAuY3Qtc2VyaWVzLWcgLmN0LXNsaWNlLWRvbnV0IHtcXG4gIHN0cm9rZTogIzA1NDRkMztcXG59XFxuLmN0LXNlcmllcy1nIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtZyAuY3QtYXJlYSB7XFxuICBmaWxsOiAjMDU0NGQzO1xcbn1cXG4uY3Qtc2VyaWVzLWggLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWggLmN0LWxpbmUsIC5jdC1zZXJpZXMtaCAuY3QtYmFyLCAuY3Qtc2VyaWVzLWggLmN0LXNsaWNlLWRvbnV0IHtcXG4gIHN0cm9rZTogIzZiMDM5MjtcXG59XFxuLmN0LXNlcmllcy1oIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtaCAuY3QtYXJlYSB7XFxuICBmaWxsOiAjNmIwMzkyO1xcbn1cXG4uY3Qtc2VyaWVzLWkgLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWkgLmN0LWxpbmUsIC5jdC1zZXJpZXMtaSAuY3QtYmFyLCAuY3Qtc2VyaWVzLWkgLmN0LXNsaWNlLWRvbnV0IHtcXG4gIHN0cm9rZTogI2YwNWI0ZjtcXG59XFxuLmN0LXNlcmllcy1pIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtaSAuY3QtYXJlYSB7XFxuICBmaWxsOiAjZjA1YjRmO1xcbn1cXG4uY3Qtc2VyaWVzLWogLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWogLmN0LWxpbmUsIC5jdC1zZXJpZXMtaiAuY3QtYmFyLCAuY3Qtc2VyaWVzLWogLmN0LXNsaWNlLWRvbnV0IHtcXG4gIHN0cm9rZTogI2RkYTQ1ODtcXG59XFxuLmN0LXNlcmllcy1qIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtaiAuY3QtYXJlYSB7XFxuICBmaWxsOiAjZGRhNDU4O1xcbn1cXG4uY3Qtc2VyaWVzLWsgLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWsgLmN0LWxpbmUsIC5jdC1zZXJpZXMtayAuY3QtYmFyLCAuY3Qtc2VyaWVzLWsgLmN0LXNsaWNlLWRvbnV0IHtcXG4gIHN0cm9rZTogI2VhY2Y3ZDtcXG59XFxuLmN0LXNlcmllcy1rIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtayAuY3QtYXJlYSB7XFxuICBmaWxsOiAjZWFjZjdkO1xcbn1cXG4uY3Qtc2VyaWVzLWwgLmN0LXBvaW50LCAuY3Qtc2VyaWVzLWwgLmN0LWxpbmUsIC5jdC1zZXJpZXMtbCAuY3QtYmFyLCAuY3Qtc2VyaWVzLWwgLmN0LXNsaWNlLWRvbnV0IHtcXG4gIHN0cm9rZTogIzg2Nzk3ZDtcXG59XFxuLmN0LXNlcmllcy1sIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtbCAuY3QtYXJlYSB7XFxuICBmaWxsOiAjODY3OTdkO1xcbn1cXG4uY3Qtc2VyaWVzLW0gLmN0LXBvaW50LCAuY3Qtc2VyaWVzLW0gLmN0LWxpbmUsIC5jdC1zZXJpZXMtbSAuY3QtYmFyLCAuY3Qtc2VyaWVzLW0gLmN0LXNsaWNlLWRvbnV0IHtcXG4gIHN0cm9rZTogI2IyYzMyNjtcXG59XFxuLmN0LXNlcmllcy1tIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtbSAuY3QtYXJlYSB7XFxuICBmaWxsOiAjYjJjMzI2O1xcbn1cXG4uY3Qtc2VyaWVzLW4gLmN0LXBvaW50LCAuY3Qtc2VyaWVzLW4gLmN0LWxpbmUsIC5jdC1zZXJpZXMtbiAuY3QtYmFyLCAuY3Qtc2VyaWVzLW4gLmN0LXNsaWNlLWRvbnV0IHtcXG4gIHN0cm9rZTogIzYxODhlMjtcXG59XFxuLmN0LXNlcmllcy1uIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtbiAuY3QtYXJlYSB7XFxuICBmaWxsOiAjNjE4OGUyO1xcbn1cXG4uY3Qtc2VyaWVzLW8gLmN0LXBvaW50LCAuY3Qtc2VyaWVzLW8gLmN0LWxpbmUsIC5jdC1zZXJpZXMtbyAuY3QtYmFyLCAuY3Qtc2VyaWVzLW8gLmN0LXNsaWNlLWRvbnV0IHtcXG4gIHN0cm9rZTogI2E3NDhjYTtcXG59XFxuLmN0LXNlcmllcy1vIC5jdC1zbGljZS1waWUsIC5jdC1zZXJpZXMtbyAuY3QtYXJlYSB7XFxuICBmaWxsOiAjYTc0OGNhO1xcbn1cXG4uY3Qtc3F1YXJlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jdC1zcXVhcmU6YmVmb3JlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwMCU7XFxufVxcbi5jdC1zcXVhcmU6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG4uY3Qtc3F1YXJlID4gc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG4uY3QtbWlub3Itc2Vjb25kIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jdC1taW5vci1zZWNvbmQ6YmVmb3JlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDkzLjc1JTtcXG59XFxuLmN0LW1pbm9yLXNlY29uZDphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgY2xlYXI6IGJvdGg7XFxufVxcbi5jdC1taW5vci1zZWNvbmQgPiBzdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcbi5jdC1tYWpvci1zZWNvbmQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmN0LW1ham9yLXNlY29uZDpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogODguODg4ODklO1xcbn1cXG4uY3QtbWFqb3Itc2Vjb25kOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuLmN0LW1ham9yLXNlY29uZCA+IHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuLmN0LW1pbm9yLXRoaXJkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jdC1taW5vci10aGlyZDpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogODMuMzMzMzMlO1xcbn1cXG4uY3QtbWlub3ItdGhpcmQ6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG4uY3QtbWlub3ItdGhpcmQgPiBzdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcbi5jdC1tYWpvci10aGlyZCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY3QtbWFqb3ItdGhpcmQ6YmVmb3JlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDgwJTtcXG59XFxuLmN0LW1ham9yLXRoaXJkOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuLmN0LW1ham9yLXRoaXJkID4gc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbn1cXG4uY3QtcGVyZmVjdC1mb3VydGgge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmN0LXBlcmZlY3QtZm91cnRoOmJlZm9yZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiA3NSU7XFxufVxcbi5jdC1wZXJmZWN0LWZvdXJ0aDphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgY2xlYXI6IGJvdGg7XFxufVxcbi5jdC1wZXJmZWN0LWZvdXJ0aCA+IHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuLmN0LXBlcmZlY3QtZmlmdGgge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmN0LXBlcmZlY3QtZmlmdGg6YmVmb3JlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDY2LjY2NjY3JTtcXG59XFxuLmN0LXBlcmZlY3QtZmlmdGg6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG4uY3QtcGVyZmVjdC1maWZ0aCA+IHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuLmN0LW1pbm9yLXNpeHRoIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jdC1taW5vci1zaXh0aDpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNjIuNSU7XFxufVxcbi5jdC1taW5vci1zaXh0aDphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgY2xlYXI6IGJvdGg7XFxufVxcbi5jdC1taW5vci1zaXh0aCA+IHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuLmN0LWdvbGRlbi1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jdC1nb2xkZW4tc2VjdGlvbjpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNjEuODA0NyU7XFxufVxcbi5jdC1nb2xkZW4tc2VjdGlvbjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgY2xlYXI6IGJvdGg7XFxufVxcbi5jdC1nb2xkZW4tc2VjdGlvbiA+IHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuLmN0LW1ham9yLXNpeHRoIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jdC1tYWpvci1zaXh0aDpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNjAlO1xcbn1cXG4uY3QtbWFqb3Itc2l4dGg6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG4uY3QtbWFqb3Itc2l4dGggPiBzdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcbi5jdC1taW5vci1zZXZlbnRoIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jdC1taW5vci1zZXZlbnRoOmJlZm9yZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XFxufVxcbi5jdC1taW5vci1zZXZlbnRoOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuLmN0LW1pbm9yLXNldmVudGggPiBzdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcbi5jdC1tYWpvci1zZXZlbnRoIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jdC1tYWpvci1zZXZlbnRoOmJlZm9yZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1My4zMzMzMyU7XFxufVxcbi5jdC1tYWpvci1zZXZlbnRoOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuLmN0LW1ham9yLXNldmVudGggPiBzdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcbi5jdC1vY3RhdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmN0LW9jdGF2ZTpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNTAlO1xcbn1cXG4uY3Qtb2N0YXZlOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuLmN0LW9jdGF2ZSA+IHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG59XFxuLmN0LW1ham9yLXRlbnRoIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jdC1tYWpvci10ZW50aDpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNDAlO1xcbn1cXG4uY3QtbWFqb3ItdGVudGg6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG4uY3QtbWFqb3ItdGVudGggPiBzdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcbi5jdC1tYWpvci1lbGV2ZW50aCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY3QtbWFqb3ItZWxldmVudGg6YmVmb3JlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDM3LjUlO1xcbn1cXG4uY3QtbWFqb3ItZWxldmVudGg6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGNsZWFyOiBib3RoO1xcbn1cXG4uY3QtbWFqb3ItZWxldmVudGggPiBzdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcbi5jdC1tYWpvci10d2VsZnRoIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jdC1tYWpvci10d2VsZnRoOmJlZm9yZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAzMy4zMzMzMyU7XFxufVxcbi5jdC1tYWpvci10d2VsZnRoOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuLmN0LW1ham9yLXR3ZWxmdGggPiBzdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcbi5jdC1kb3VibGUtb2N0YXZlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5jdC1kb3VibGUtb2N0YXZlOmJlZm9yZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyNSU7XFxufVxcbi5jdC1kb3VibGUtb2N0YXZlOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBjbGVhcjogYm90aDtcXG59XFxuLmN0LWRvdWJsZS1vY3RhdmUgPiBzdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxufVxcbi5jdC1jaGFydCB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTI2NGZiM2QyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vfi92dWUtYnVsbWEtY2hhcnRpc3Qvc3JjL0NoYXJ0aXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMTgiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubGluZXMtYmFyc1tkYXRhLXYtNzZjZTA0ZjRdIHtcXG4gIGhlaWdodDogMjQwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY2hhcnRzL0NoYXJ0aXN0LnZ1ZT81NmEzNDQ2ZFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBdUxBO0VBQ0EsY0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJDaGFydGlzdC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGlsZSBpcy1hbmNlc3RvclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwidGlsZSBpcy1wYXJlbnRcXFwiPlxcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XFxcInRpbGUgaXMtY2hpbGQgYm94XFxcIj5cXG4gICAgICAgICAgPGg0IGNsYXNzPVxcXCJ0aXRsZVxcXCI+TElORVM8L2g0PlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJibG9ja1xcXCI+XFxuICAgICAgICAgICAgPGNoYXJ0aXN0IGNsYXNzPVxcXCJsaW5lcy1iYXJzXFxcIiA6dHlwZT1cXFwiJ0xpbmUnXFxcIiA6ZGF0YT1cXFwibGluZXNEYXRhXFxcIiA6b3B0aW9ucz1cXFwibGluZXNPcHRpb25zXFxcIj48L2NoYXJ0aXN0PlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmxvY2tcXFwiPlxcbiAgICAgICAgICAgIDxjaGFydGlzdCBjbGFzcz1cXFwibGluZXMtYmFyc1xcXCIgOnR5cGU9XFxcIidMaW5lJ1xcXCIgOmRhdGE9XFxcImxpbmVBcmVhRGF0YVxcXCIgOm9wdGlvbnM9XFxcImxpbmVBcmVhT3B0aW9uc1xcXCI+PC9jaGFydGlzdD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2FydGljbGU+XFxuICAgICAgPC9kaXY+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwidGlsZSBpcy1wYXJlbnRcXFwiPlxcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XFxcInRpbGUgaXMtY2hpbGQgYm94XFxcIj5cXG4gICAgICAgICAgPGg0IGNsYXNzPVxcXCJ0aXRsZVxcXCI+QkFSUzwvaDQ+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJsb2NrXFxcIj5cXG4gICAgICAgICAgICA8Y2hhcnRpc3QgY2xhc3M9XFxcImxpbmVzLWJhcnNcXFwiIDp0eXBlPVxcXCInQmFyJ1xcXCIgOmRhdGE9XFxcImxpbmVzRGF0YVxcXCIgOm9wdGlvbnM9XFxcImxpbmVzT3B0aW9uc1xcXCI+PC9jaGFydGlzdD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJsb2NrXFxcIj5cXG4gICAgICAgICAgICA8Y2hhcnRpc3QgY2xhc3M9XFxcImxpbmVzLWJhcnNcXFwiIDp0eXBlPVxcXCInQmFyJ1xcXCIgOmRhdGE9XFxcImJhcnNEYXRhXFxcIiA6b3B0aW9ucz1cXFwiYmFyc09wdGlvbnNcXFwiIDpyZXNwb25zaXZlLW9wdGlvbnM9XFxcImJhcnNSZXNwb25zaXZlT3B0aW9uc1xcXCI+PC9jaGFydGlzdD5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2FydGljbGU+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0aWxlIGlzLWFuY2VzdG9yXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ0aWxlIGlzLXBhcmVudFxcXCI+XFxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cXFwidGlsZSBpcy1jaGlsZCBib3hcXFwiPlxcbiAgICAgICAgICA8aDQgY2xhc3M9XFxcInRpdGxlXFxcIj5QSUVTICYgRE9OVVRTPC9oND5cXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uc1xcXCI+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW5cXFwiPlxcbiAgICAgICAgICAgICAgICA8Y2hhcnRpc3QgY2xhc3M9XFxcImxpbmVzLWJhcnNcXFwiIDp0eXBlPVxcXCInUGllJ1xcXCIgOmRhdGE9XFxcInBpZURhdGFcXFwiIDpvcHRpb25zPVxcXCJwaWVPcHRpb25zXFxcIj48L2NoYXJ0aXN0PlxcbiAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW5cXFwiPlxcbiAgICAgICAgICAgICAgICA8Y2hhcnRpc3QgY2xhc3M9XFxcImxpbmVzLWJhcnNcXFwiIDp0eXBlPVxcXCInUGllJ1xcXCIgOmRhdGE9XFxcImdhdWdlRGF0YVxcXCIgOm9wdGlvbnM9XFxcImdhdWdlT3B0aW9uc1xcXCI+PC9jaGFydGlzdD5cXG4gICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGNoYXJ0aXN0IGNsYXNzPVxcXCJsaW5lcy1iYXJzXFxcIiA6dHlwZT1cXFwiJ1BpZSdcXFwiIDpkYXRhPVxcXCJkb251dERhdGFcXFwiIDpvcHRpb25zPVxcXCJkb251dE9wdGlvbnNcXFwiPjwvY2hhcnRpc3Q+XFxuICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2FydGljbGU+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBDaGFydGlzdCBmcm9tICd2dWUtYnVsbWEtY2hhcnRpc3QnXFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgY29tcG9uZW50czoge1xcbiAgICBDaGFydGlzdFxcbiAgfSxcXG5cXG4gIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIHNlcmllczogW1xcbiAgICAgICAgWzEyLCA5LCA3LCA4LCA1XSxcXG4gICAgICAgIFsyLCAxLCAzLjUsIDcsIDNdLFxcbiAgICAgICAgWzEsIDMsIDQsIDUsIDZdXFxuICAgICAgXSxcXG4gICAgICBsYWJlbHM6IFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheSddLFxcbiAgICAgIGxpbmVzT3B0aW9uczoge1xcbiAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxcbiAgICAgICAgY2hhcnRQYWRkaW5nOiB7XFxuICAgICAgICAgIHJpZ2h0OiA0MFxcbiAgICAgICAgfVxcbiAgICAgIH0sXFxuXFxuICAgICAgbGluZUFyZWFEYXRhOiB7XFxuICAgICAgICBsYWJlbHM6IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XSxcXG4gICAgICAgIHNlcmllczogW1xcbiAgICAgICAgICBbNSwgOSwgNywgOCwgNSwgMywgNSwgNF1cXG4gICAgICAgIF1cXG4gICAgICB9LFxcbiAgICAgIGxpbmVBcmVhT3B0aW9uczoge1xcbiAgICAgICAgbG93OiAwLFxcbiAgICAgICAgc2hvd0FyZWE6IHRydWVcXG4gICAgICB9LFxcblxcbiAgICAgIGJhcnNEYXRhOiB7XFxuICAgICAgICBsYWJlbHM6IFsnUXVhcnRlciAxJywgJ1F1YXJ0ZXIgMicsICdRdWFydGVyIDMnLCAnUXVhcnRlciA0J10sXFxuICAgICAgICBzZXJpZXM6IFtcXG4gICAgICAgICAgWzUsIDQsIDMsIDddLFxcbiAgICAgICAgICBbMywgMiwgOSwgNV0sXFxuICAgICAgICAgIFsxLCA1LCA4LCA0XSxcXG4gICAgICAgICAgWzIsIDMsIDQsIDZdLFxcbiAgICAgICAgICBbNCwgMSwgMiwgMV1cXG4gICAgICAgIF1cXG4gICAgICB9LFxcbiAgICAgIGJhcnNPcHRpb25zOiB7XFxuICAgICAgICAvLyBEZWZhdWx0IG1vYmlsZSBjb25maWd1cmF0aW9uXFxuICAgICAgICBzdGFja0JhcnM6IHRydWUsXFxuICAgICAgICBheGlzWDoge1xcbiAgICAgICAgICBsYWJlbEludGVycG9sYXRpb25GbmMgKHZhbHVlKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnNwbGl0KC9cXFxccysvKS5tYXAoKHdvcmQpID0+IHdvcmRbMF0pLmpvaW4oJycpXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBheGlzWToge1xcbiAgICAgICAgICBvZmZzZXQ6IDIwXFxuICAgICAgICB9XFxuICAgICAgfSxcXG4gICAgICBiYXJzUmVzcG9uc2l2ZU9wdGlvbnM6IFtcXG4gICAgICAgIC8vIE9wdGlvbnMgb3ZlcnJpZGUgZm9yIG1lZGlhID4gNDAwcHhcXG4gICAgICAgIFsnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MDBweCknLCB7XFxuICAgICAgICAgIHJldmVyc2VEYXRhOiB0cnVlLFxcbiAgICAgICAgICBob3Jpem9udGFsQmFyczogdHJ1ZSxcXG4gICAgICAgICAgYXhpc1g6IHtcXG4gICAgICAgICAgICBsYWJlbEludGVycG9sYXRpb25GbmM6IGZ1bmN0aW9uIChuKSB7IHJldHVybiBuIH1cXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgYXhpc1k6IHtcXG4gICAgICAgICAgICBvZmZzZXQ6IDYwXFxuICAgICAgICAgIH1cXG4gICAgICAgIH1dLFxcbiAgICAgICAgLy8gT3B0aW9ucyBvdmVycmlkZSBmb3IgbWVkaWEgPiA4MDBweFxcbiAgICAgICAgWydzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KScsIHtcXG4gICAgICAgICAgc3RhY2tCYXJzOiBmYWxzZSxcXG4gICAgICAgICAgc2VyaWVzQmFyRGlzdGFuY2U6IDEwXFxuICAgICAgICB9XSxcXG4gICAgICAgIC8vIE9wdGlvbnMgb3ZlcnJpZGUgZm9yIG1lZGlhID4gMTAwMHB4XFxuICAgICAgICBbJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KScsIHtcXG4gICAgICAgICAgcmV2ZXJzZURhdGE6IGZhbHNlLFxcbiAgICAgICAgICBob3Jpem9udGFsQmFyczogZmFsc2UsXFxuICAgICAgICAgIHNlcmllc0JhckRpc3RhbmNlOiAxNVxcbiAgICAgICAgfV1cXG4gICAgICBdLFxcblxcbiAgICAgIHBpZURhdGE6IHtcXG4gICAgICAgIHNlcmllczogWzUsIDMsIDRdXFxuICAgICAgfSxcXG4gICAgICBwaWVPcHRpb25zOiB7XFxuICAgICAgICBjaGFydFBhZGRpbmc6IDMwLFxcbiAgICAgICAgbGFiZWxPZmZzZXQ6IDYwLFxcbiAgICAgICAgbGFiZWxEaXJlY3Rpb246ICdleHBsb2RlJyxcXG4gICAgICAgIGxhYmVsSW50ZXJwb2xhdGlvbkZuYyAodmFsdWUpIHtcXG4gICAgICAgICAgcmV0dXJuIHZhbHVlXFxuICAgICAgICB9XFxuICAgICAgfSxcXG5cXG4gICAgICBnYXVnZURhdGE6IHtcXG4gICAgICAgIHNlcmllczogWzIwLCAxMCwgMzAsIDQwXVxcbiAgICAgIH0sXFxuICAgICAgZ2F1Z2VPcHRpb25zOiB7XFxuICAgICAgICBkb251dDogdHJ1ZSxcXG4gICAgICAgIGRvbnV0V2lkdGg6IDYwLFxcbiAgICAgICAgc3RhcnRBbmdsZTogMjcwLFxcbiAgICAgICAgdG90YWw6IDIwMCxcXG4gICAgICAgIHNob3dMYWJlbDogdHJ1ZVxcbiAgICAgIH0sXFxuXFxuICAgICAgZG9udXREYXRhOiB7XFxuICAgICAgICBzZXJpZXM6IFsxMCwgMjAsIDUwLCAyMCwgNSwgNTAsIDE1XSxcXG4gICAgICAgIGxhYmVsczogWzEsIDIsIDMsIDQsIDUsIDYsIDddXFxuICAgICAgfSxcXG4gICAgICBkb251dE9wdGlvbnM6IHtcXG4gICAgICAgIGRvbnV0OiB0cnVlXFxuICAgICAgfVxcbiAgICB9XFxuICB9LFxcblxcbiAgY29tcHV0ZWQ6IHtcXG4gICAgbGluZXNEYXRhICgpIHtcXG4gICAgICByZXR1cm4ge1xcbiAgICAgICAgbGFiZWxzOiB0aGlzLmxhYmVscyxcXG4gICAgICAgIHNlcmllczogdGhpcy5zZXJpZXNcXG4gICAgICB9XFxuICAgIH1cXG4gIH0sXFxuXFxuICBjcmVhdGVkICgpIHtcXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xcbiAgICAgIC8vIGh0dHBzOi8vdnVlanMub3JnL2d1aWRlL2xpc3QuaHRtbCNNdXRhdGlvbi1NZXRob2RzXFxuICAgICAgdGhpcy5zZXJpZXMudW5zaGlmdCh0aGlzLnNlcmllcy5wb3AoKSlcXG4gICAgfSwgMTU5NylcXG4gIH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4ubGluZXMtYmFycyB7XFxuICBoZWlnaHQ6IDI0MHB4O1xcbn1cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNzZjZTA0ZjRcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY2hhcnRzL0NoYXJ0aXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjY0ZmIzZDJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DaGFydGlzdC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NoYXJ0aXN0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yNjRmYjNkMlxcXCJ9IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NoYXJ0aXN0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9ub2RlX21vZHVsZXMvdnVlLWJ1bG1hLWNoYXJ0aXN0L3NyYy9DaGFydGlzdC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBDaGFydGlzdC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjY0ZmIzZDJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yNjRmYjNkMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1idWxtYS1jaGFydGlzdC9zcmMvQ2hhcnRpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA2ODJcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImN0LWNoYXJ0XCJcbiAgfSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMjY0ZmIzZDJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yNjRmYjNkMlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vfi92dWUtYnVsbWEtY2hhcnRpc3Qvc3JjL0NoYXJ0aXN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMTgiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtYW5jZXN0b3JcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudFwiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiTElORVNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibG9ja1wiXG4gIH0sIFtfYygnY2hhcnRpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGluZXMtYmFyc1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogJ0xpbmUnLFxuICAgICAgXCJkYXRhXCI6IF92bS5saW5lc0RhdGEsXG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLmxpbmVzT3B0aW9uc1xuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibG9ja1wiXG4gIH0sIFtfYygnY2hhcnRpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGluZXMtYmFyc1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogJ0xpbmUnLFxuICAgICAgXCJkYXRhXCI6IF92bS5saW5lQXJlYURhdGEsXG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLmxpbmVBcmVhT3B0aW9uc1xuICAgIH1cbiAgfSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnRcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2g0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIkJBUlNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibG9ja1wiXG4gIH0sIFtfYygnY2hhcnRpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGluZXMtYmFyc1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogJ0JhcicsXG4gICAgICBcImRhdGFcIjogX3ZtLmxpbmVzRGF0YSxcbiAgICAgIFwib3B0aW9uc1wiOiBfdm0ubGluZXNPcHRpb25zXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrXCJcbiAgfSwgW19jKCdjaGFydGlzdCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsaW5lcy1iYXJzXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiAnQmFyJyxcbiAgICAgIFwiZGF0YVwiOiBfdm0uYmFyc0RhdGEsXG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLmJhcnNPcHRpb25zLFxuICAgICAgXCJyZXNwb25zaXZlLW9wdGlvbnNcIjogX3ZtLmJhcnNSZXNwb25zaXZlT3B0aW9uc1xuICAgIH1cbiAgfSldLCAxKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWFuY2VzdG9yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnRcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2g0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIlBJRVMgJiBET05VVFNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250ZW50XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uc1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbHVtblwiXG4gIH0sIFtfYygnY2hhcnRpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGluZXMtYmFyc1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogJ1BpZScsXG4gICAgICBcImRhdGFcIjogX3ZtLnBpZURhdGEsXG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLnBpZU9wdGlvbnNcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uXCJcbiAgfSwgW19jKCdjaGFydGlzdCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsaW5lcy1iYXJzXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiAnUGllJyxcbiAgICAgIFwiZGF0YVwiOiBfdm0uZ2F1Z2VEYXRhLFxuICAgICAgXCJvcHRpb25zXCI6IF92bS5nYXVnZU9wdGlvbnNcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uXCJcbiAgfSwgW19jKCdjaGFydGlzdCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsaW5lcy1iYXJzXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiAnUGllJyxcbiAgICAgIFwiZGF0YVwiOiBfdm0uZG9udXREYXRhLFxuICAgICAgXCJvcHRpb25zXCI6IF92bS5kb251dE9wdGlvbnNcbiAgICB9XG4gIH0pXSwgMSldKV0pXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNzZjZTA0ZjRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03NmNlMDRmNFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jaGFydHMvQ2hhcnRpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA3NDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjY0ZmIzZDJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NoYXJ0aXN0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI1MjQ0ZmEzOFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjY0ZmIzZDJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NoYXJ0aXN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjY0ZmIzZDJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NoYXJ0aXN0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMjY0ZmIzZDJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9+L3Z1ZS1idWxtYS1jaGFydGlzdC9zcmMvQ2hhcnRpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA3Nzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzZjZTA0ZjRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DaGFydGlzdC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjcyYWI1MjdhXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03NmNlMDRmNFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NoYXJ0aXN0LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzZjZTA0ZjRcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DaGFydGlzdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03NmNlMDRmNFwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jaGFydHMvQ2hhcnRpc3QudnVlXG4vLyBtb2R1bGUgaWQgPSA4MTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxOCJdLCJzb3VyY2VSb290IjoiIn0=
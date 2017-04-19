webpackJsonp([5],{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(777)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(587),
  /* template */
  __webpack_require__(716),
  /* scopeId */
  "data-v-17f37dfa",
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/components/Lory.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Lory.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17f37dfa", Component.options)
  } else {
    hotAPI.reload("data-v-17f37dfa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lory = __webpack_require__(674);

exports.default = {

  props: {
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },

  data: function data() {
    return {
      slider: null
    };
  },
  mounted: function mounted() {
    this.slider = (0, _lory.lory)(this.$el, this.options);
  },
  beforeDestroy: function beforeDestroy() {
    this.slider.destroy();
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

/***/ }),

/***/ 573:
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
    size: {
      type: Number,
      default: 50
    },
    color: {
      type: String,
      default: '#2E435A'
    }
  }
};

/***/ }),

/***/ 574:
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
    size: {
      type: Number,
      default: 50
    },
    color: {
      type: String,
      default: '#2E435A'
    }
  }
};

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueLory = __webpack_require__(769);

exports.default = {
  components: {
    Lory: _vueLory.Lory,
    Item: _vueLory.Item,
    Prev: _vueLory.Prev,
    Next: _vueLory.Next
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

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.slider .frame li[data-v-17f37dfa] {\n  height: 130px;\n}\n.slider.js_rewind .frame li[data-v-17f37dfa] {\n  color: #000;\n  background: whitesmoke;\n}\n", ""]);

// exports


/***/ }),

/***/ 653:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "/**\n * (optional) define here the style definitions which should be applied on the slider container\n * e.g. width including further controls like arrows etc.\n */\n.slider .frame {\n  /**\n     * (optional) wrapper width, specifies width of the slider frame.\n     */\n  width: 100%;\n  position: relative;\n  font-size: 0;\n  line-height: 0;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.slider .slides {\n  width: 100%;\n  display: inline-block;\n}\n.slider li {\n  position: relative;\n  display: inline-block;\n  /**\n     * (optional) if the content inside the slide element has a defined size.\n     */\n  width: 100%;\n  position: relative;\n  display: inline-block;\n  text-align: center;\n  font-size: 15px;\n  line-height: 30px;\n}\n.slider .prev, .slider .next {\n  position: absolute;\n  top: 50%;\n  margin-top: -25px;\n  display: block;\n  cursor: pointer;\n}\n.slider .next {\n  right: 0;\n}\n.slider .prev {\n  left: 0;\n}\n.slider .next svg, .slider .prev svg {\n  width: 25px;\n}\n.slider.js_rewind .frame li {\n  margin-right: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* globals jQuery */
	
	exports.lory = lory;
	
	var _detectPrefixes = __webpack_require__(2);
	
	var _detectPrefixes2 = _interopRequireDefault(_detectPrefixes);
	
	var _dispatchEvent = __webpack_require__(3);
	
	var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);
	
	var _defaults = __webpack_require__(5);
	
	var _defaults2 = _interopRequireDefault(_defaults);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var slice = Array.prototype.slice;
	
	function lory(slider, opts) {
	    var position = void 0;
	    var slidesWidth = void 0;
	    var frameWidth = void 0;
	    var slides = void 0;
	
	    /**
	     * slider DOM elements
	     */
	    var frame = void 0;
	    var slideContainer = void 0;
	    var prevCtrl = void 0;
	    var nextCtrl = void 0;
	    var prefixes = void 0;
	    var transitionEndCallback = void 0;
	
	    var index = 0;
	    var options = {};
	
	    /**
	     * if object is jQuery convert to native DOM element
	     */
	    if (typeof jQuery !== 'undefined' && slider instanceof jQuery) {
	        slider = slider[0];
	    }
	
	    /**
	     * private
	     * set active class to element which is the current slide
	     */
	    function setActiveElement(slides, currentIndex) {
	        var _options = options;
	        var classNameActiveSlide = _options.classNameActiveSlide;
	
	
	        slides.forEach(function (element, index) {
	            if (element.classList.contains(classNameActiveSlide)) {
	                element.classList.remove(classNameActiveSlide);
	            }
	        });
	
	        slides[currentIndex].classList.add(classNameActiveSlide);
	    }
	
	    /**
	     * private
	     * setupInfinite: function to setup if infinite is set
	     *
	     * @param  {array} slideArray
	     * @return {array} array of updated slideContainer elements
	     */
	    function setupInfinite(slideArray) {
	        var _options2 = options;
	        var infinite = _options2.infinite;
	
	
	        var front = slideArray.slice(0, infinite);
	        var back = slideArray.slice(slideArray.length - infinite, slideArray.length);
	
	        front.forEach(function (element) {
	            var cloned = element.cloneNode(true);
	
	            slideContainer.appendChild(cloned);
	        });
	
	        back.reverse().forEach(function (element) {
	            var cloned = element.cloneNode(true);
	
	            slideContainer.insertBefore(cloned, slideContainer.firstChild);
	        });
	
	        slideContainer.addEventListener(prefixes.transitionEnd, onTransitionEnd);
	
	        return slice.call(slideContainer.children);
	    }
	
	    /**
	     * [dispatchSliderEvent description]
	     * @return {[type]} [description]
	     */
	    function dispatchSliderEvent(phase, type, detail) {
	        (0, _dispatchEvent2.default)(slider, phase + '.lory.' + type, detail);
	    }
	
	    /**
	     * translates to a given position in a given time in milliseconds
	     *
	     * @to        {number} number in pixels where to translate to
	     * @duration  {number} time in milliseconds for the transistion
	     * @ease      {string} easing css property
	     */
	    function translate(to, duration, ease) {
	        var style = slideContainer && slideContainer.style;
	
	        if (style) {
	            style[prefixes.transition + 'TimingFunction'] = ease;
	            style[prefixes.transition + 'Duration'] = duration + 'ms';
	
	            if (prefixes.hasTranslate3d) {
	                style[prefixes.transform] = 'translate3d(' + to + 'px, 0, 0)';
	            } else {
	                style[prefixes.transform] = 'translate(' + to + 'px, 0)';
	            }
	        }
	    }
	
	    /**
	     * slidefunction called by prev, next & touchend
	     *
	     * determine nextIndex and slide to next postion
	     * under restrictions of the defined options
	     *
	     * @direction  {boolean}
	     */
	    function slide(nextIndex, direction) {
	        var _options3 = options;
	        var slideSpeed = _options3.slideSpeed;
	        var slidesToScroll = _options3.slidesToScroll;
	        var infinite = _options3.infinite;
	        var rewind = _options3.rewind;
	        var rewindSpeed = _options3.rewindSpeed;
	        var ease = _options3.ease;
	        var classNameActiveSlide = _options3.classNameActiveSlide;
	
	
	        var duration = slideSpeed;
	
	        var nextSlide = direction ? index + 1 : index - 1;
	        var maxOffset = Math.round(slidesWidth - frameWidth);
	
	        dispatchSliderEvent('before', 'slide', {
	            index: index,
	            nextSlide: nextSlide
	        });
	
	        if (typeof nextIndex !== 'number') {
	            if (direction) {
	                nextIndex = index + slidesToScroll;
	            } else {
	                nextIndex = index - slidesToScroll;
	            }
	        }
	
	        nextIndex = Math.min(Math.max(nextIndex, 0), slides.length - 1);
	
	        if (infinite && direction === undefined) {
	            nextIndex += infinite;
	        }
	
	        var nextOffset = Math.min(Math.max(slides[nextIndex].offsetLeft * -1, maxOffset * -1), 0);
	
	        if (rewind && Math.abs(position.x) === maxOffset && direction) {
	            nextOffset = 0;
	            nextIndex = 0;
	            duration = rewindSpeed;
	        }
	
	        /**
	         * translate to the nextOffset by a defined duration and ease function
	         */
	        translate(nextOffset, duration, ease);
	
	        /**
	         * update the position with the next position
	         */
	        position.x = nextOffset;
	
	        /**
	         * update the index with the nextIndex only if
	         * the offset of the nextIndex is in the range of the maxOffset
	         */
	        if (slides[nextIndex].offsetLeft <= maxOffset) {
	            index = nextIndex;
	        }
	
	        if (infinite && (nextIndex === slides.length - infinite || nextIndex === 0)) {
	            if (direction) {
	                index = infinite;
	            }
	
	            if (!direction) {
	                index = slides.length - infinite * 2;
	            }
	
	            position.x = slides[index].offsetLeft * -1;
	
	            transitionEndCallback = function transitionEndCallback() {
	                translate(slides[index].offsetLeft * -1, 0, undefined);
	            };
	        }
	
	        if (classNameActiveSlide) {
	            setActiveElement(slice.call(slides), index);
	        }
	
	        dispatchSliderEvent('after', 'slide', {
	            currentSlide: index
	        });
	    }
	
	    /**
	     * public
	     * setup function
	     */
	    function setup() {
	        dispatchSliderEvent('before', 'init');
	
	        prefixes = (0, _detectPrefixes2.default)();
	        options = _extends({}, _defaults2.default, opts);
	
	        var _options4 = options;
	        var classNameFrame = _options4.classNameFrame;
	        var classNameSlideContainer = _options4.classNameSlideContainer;
	        var classNamePrevCtrl = _options4.classNamePrevCtrl;
	        var classNameNextCtrl = _options4.classNameNextCtrl;
	        var enableMouseEvents = _options4.enableMouseEvents;
	        var classNameActiveSlide = _options4.classNameActiveSlide;
	
	
	        frame = slider.getElementsByClassName(classNameFrame)[0];
	        slideContainer = frame.getElementsByClassName(classNameSlideContainer)[0];
	        prevCtrl = slider.getElementsByClassName(classNamePrevCtrl)[0];
	        nextCtrl = slider.getElementsByClassName(classNameNextCtrl)[0];
	
	        position = {
	            x: slideContainer.offsetLeft,
	            y: slideContainer.offsetTop
	        };
	
	        if (options.infinite) {
	            slides = setupInfinite(slice.call(slideContainer.children));
	        } else {
	            slides = slice.call(slideContainer.children);
	        }
	
	        reset();
	
	        if (classNameActiveSlide) {
	            setActiveElement(slides, index);
	        }
	
	        if (prevCtrl && nextCtrl) {
	            prevCtrl.addEventListener('click', prev);
	            nextCtrl.addEventListener('click', next);
	        }
	
	        frame.addEventListener('touchstart', onTouchstart);
	
	        if (enableMouseEvents) {
	            frame.addEventListener('mousedown', onTouchstart);
	            frame.addEventListener('click', onClick);
	        }
	
	        options.window.addEventListener('resize', onResize);
	
	        dispatchSliderEvent('after', 'init');
	    }
	
	    /**
	     * public
	     * reset function: called on resize
	     */
	    function reset() {
	        var _options5 = options;
	        var infinite = _options5.infinite;
	        var ease = _options5.ease;
	        var rewindSpeed = _options5.rewindSpeed;
	        var rewindOnResize = _options5.rewindOnResize;
	        var classNameActiveSlide = _options5.classNameActiveSlide;
	
	
	        slidesWidth = slideContainer.getBoundingClientRect().width || slideContainer.offsetWidth;
	        frameWidth = frame.getBoundingClientRect().width || frame.offsetWidth;
	
	        if (frameWidth === slidesWidth) {
	            slidesWidth = slides.reduce(function (previousValue, slide) {
	                return previousValue + slide.getBoundingClientRect().width || slide.offsetWidth;
	            }, 0);
	        }
	
	        if (rewindOnResize) {
	            index = 0;
	        } else {
	            ease = null;
	            rewindSpeed = 0;
	        }
	
	        if (infinite) {
	            translate(slides[index + infinite].offsetLeft * -1, 0, null);
	
	            index = index + infinite;
	            position.x = slides[index].offsetLeft * -1;
	        } else {
	            translate(slides[index].offsetLeft * -1, rewindSpeed, ease);
	            position.x = slides[index].offsetLeft * -1;
	        }
	
	        if (classNameActiveSlide) {
	            setActiveElement(slice.call(slides), index);
	        }
	    }
	
	    /**
	     * public
	     * slideTo: called on clickhandler
	     */
	    function slideTo(index) {
	        slide(index);
	    }
	
	    /**
	     * public
	     * returnIndex function: called on clickhandler
	     */
	    function returnIndex() {
	        return index - options.infinite || 0;
	    }
	
	    /**
	     * public
	     * prev function: called on clickhandler
	     */
	    function prev() {
	        slide(false, false);
	    }
	
	    /**
	     * public
	     * next function: called on clickhandler
	     */
	    function next() {
	        slide(false, true);
	    }
	
	    /**
	     * public
	     * destroy function: called to gracefully destroy the lory instance
	     */
	    function destroy() {
	        dispatchSliderEvent('before', 'destroy');
	
	        // remove event listeners
	        frame.removeEventListener(prefixes.transitionEnd, onTransitionEnd);
	        frame.removeEventListener('touchstart', onTouchstart);
	        frame.removeEventListener('touchmove', onTouchmove);
	        frame.removeEventListener('touchend', onTouchend);
	        frame.removeEventListener('mousemove', onTouchmove);
	        frame.removeEventListener('mousedown', onTouchstart);
	        frame.removeEventListener('mouseup', onTouchend);
	        frame.removeEventListener('mouseleave', onTouchend);
	        frame.removeEventListener('click', onClick);
	
	        options.window.removeEventListener('resize', onResize);
	
	        if (prevCtrl) {
	            prevCtrl.removeEventListener('click', prev);
	        }
	
	        if (nextCtrl) {
	            nextCtrl.removeEventListener('click', next);
	        }
	
	        // remove cloned slides if infinite is set
	        if (options.infinite) {
	            Array.apply(null, Array(options.infinite)).forEach(function () {
	                slideContainer.removeChild(slideContainer.firstChild);
	                slideContainer.removeChild(slideContainer.lastChild);
	            });
	        }
	
	        dispatchSliderEvent('after', 'destroy');
	    }
	
	    // event handling
	
	    var touchOffset = void 0;
	    var delta = void 0;
	    var isScrolling = void 0;
	
	    function onTransitionEnd() {
	        if (transitionEndCallback) {
	            transitionEndCallback();
	
	            transitionEndCallback = undefined;
	        }
	    }
	
	    function onTouchstart(event) {
	        var _options6 = options;
	        var enableMouseEvents = _options6.enableMouseEvents;
	
	        var touches = event.touches ? event.touches[0] : event;
	
	        if (enableMouseEvents) {
	            frame.addEventListener('mousemove', onTouchmove);
	            frame.addEventListener('mouseup', onTouchend);
	            frame.addEventListener('mouseleave', onTouchend);
	        }
	
	        frame.addEventListener('touchmove', onTouchmove);
	        frame.addEventListener('touchend', onTouchend);
	
	        var pageX = touches.pageX;
	        var pageY = touches.pageY;
	
	
	        touchOffset = {
	            x: pageX,
	            y: pageY,
	            time: Date.now()
	        };
	
	        isScrolling = undefined;
	
	        delta = {};
	
	        dispatchSliderEvent('on', 'touchstart', {
	            event: event
	        });
	    }
	
	    function onTouchmove(event) {
	        var touches = event.touches ? event.touches[0] : event;
	        var pageX = touches.pageX;
	        var pageY = touches.pageY;
	
	
	        delta = {
	            x: pageX - touchOffset.x,
	            y: pageY - touchOffset.y
	        };
	
	        if (typeof isScrolling === 'undefined') {
	            isScrolling = !!(isScrolling || Math.abs(delta.x) < Math.abs(delta.y));
	        }
	
	        if (!isScrolling && touchOffset) {
	            event.preventDefault();
	            translate(position.x + delta.x, 0, null);
	        }
	
	        // may be
	        dispatchSliderEvent('on', 'touchmove', {
	            event: event
	        });
	    }
	
	    function onTouchend(event) {
	        /**
	         * time between touchstart and touchend in milliseconds
	         * @duration {number}
	         */
	        var duration = touchOffset ? Date.now() - touchOffset.time : undefined;
	
	        /**
	         * is valid if:
	         *
	         * -> swipe attempt time is over 300 ms
	         * and
	         * -> swipe distance is greater than 25px
	         * or
	         * -> swipe distance is more then a third of the swipe area
	         *
	         * @isValidSlide {Boolean}
	         */
	        var isValid = Number(duration) < 300 && Math.abs(delta.x) > 25 || Math.abs(delta.x) > frameWidth / 3;
	
	        /**
	         * is out of bounds if:
	         *
	         * -> index is 0 and delta x is greater than 0
	         * or
	         * -> index is the last slide and delta is smaller than 0
	         *
	         * @isOutOfBounds {Boolean}
	         */
	        var isOutOfBounds = !index && delta.x > 0 || index === slides.length - 1 && delta.x < 0;
	
	        var direction = delta.x < 0;
	
	        if (!isScrolling) {
	            if (isValid && !isOutOfBounds) {
	                slide(false, direction);
	            } else {
	                translate(position.x, options.snapBackSpeed);
	            }
	        }
	
	        touchOffset = undefined;
	
	        /**
	         * remove eventlisteners after swipe attempt
	         */
	        frame.removeEventListener('touchmove', onTouchmove);
	        frame.removeEventListener('touchend', onTouchend);
	        frame.removeEventListener('mousemove', onTouchmove);
	        frame.removeEventListener('mouseup', onTouchend);
	        frame.removeEventListener('mouseleave', onTouchend);
	
	        dispatchSliderEvent('on', 'touchend', {
	            event: event
	        });
	    }
	
	    function onClick(event) {
	        if (delta.x) {
	            event.preventDefault();
	        }
	    }
	
	    function onResize(event) {
	        reset();
	
	        dispatchSliderEvent('on', 'resize', {
	            event: event
	        });
	    }
	
	    // trigger initial setup
	    setup();
	
	    // expose public api
	    return {
	        setup: setup,
	        reset: reset,
	        slideTo: slideTo,
	        returnIndex: returnIndex,
	        prev: prev,
	        next: next,
	        destroy: destroy
	    };
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = detectPrefixes;
	/**
	 * Detecting prefixes for saving time and bytes
	 */
	function detectPrefixes() {
	    var transform = void 0;
	    var transition = void 0;
	    var transitionEnd = void 0;
	    var hasTranslate3d = void 0;
	
	    (function () {
	        var el = document.createElement('_');
	        var style = el.style;
	
	        var prop = void 0;
	
	        if (style[prop = 'webkitTransition'] === '') {
	            transitionEnd = 'webkitTransitionEnd';
	            transition = prop;
	        }
	
	        if (style[prop = 'transition'] === '') {
	            transitionEnd = 'transitionend';
	            transition = prop;
	        }
	
	        if (style[prop = 'webkitTransform'] === '') {
	            transform = prop;
	        }
	
	        if (style[prop = 'msTransform'] === '') {
	            transform = prop;
	        }
	
	        if (style[prop = 'transform'] === '') {
	            transform = prop;
	        }
	
	        document.body.insertBefore(el, null);
	        style[transform] = 'translate3d(0, 0, 0)';
	        hasTranslate3d = !!global.getComputedStyle(el).getPropertyValue(transform);
	        document.body.removeChild(el);
	    })();
	
	    return {
	        transform: transform,
	        transition: transition,
	        transitionEnd: transitionEnd,
	        hasTranslate3d: hasTranslate3d
	    };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = dispatchEvent;
	
	var _customEvent = __webpack_require__(4);
	
	var _customEvent2 = _interopRequireDefault(_customEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * dispatch custom events
	 *
	 * @param  {element} el         slideshow element
	 * @param  {string}  type       custom event name
	 * @param  {object}  detail     custom detail information
	 */
	function dispatchEvent(target, type, detail) {
	    var event = new _customEvent2.default(type, {
	        bubbles: true,
	        cancelable: true,
	        detail: detail
	    });
	
	    target.dispatchEvent(event);
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var NativeCustomEvent = global.CustomEvent;
	
	function useNative () {
	  try {
	    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
	    return  'cat' === p.type && 'bar' === p.detail.foo;
	  } catch (e) {
	  }
	  return false;
	}
	
	/**
	 * Cross-browser `CustomEvent` constructor.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
	 *
	 * @public
	 */
	
	module.exports = useNative() ? NativeCustomEvent :
	
	// IE >= 9
	'function' === typeof document.createEvent ? function CustomEvent (type, params) {
	  var e = document.createEvent('CustomEvent');
	  if (params) {
	    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
	  } else {
	    e.initCustomEvent(type, false, false, void 0);
	  }
	  return e;
	} :
	
	// IE <= 8
	function CustomEvent (type, params) {
	  var e = document.createEventObject();
	  e.type = type;
	  if (params) {
	    e.bubbles = Boolean(params.bubbles);
	    e.cancelable = Boolean(params.cancelable);
	    e.detail = params.detail;
	  } else {
	    e.bubbles = false;
	    e.cancelable = false;
	    e.detail = void 0;
	  }
	  return e;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  /**
	   * slides scrolled at once
	   * @slidesToScroll {Number}
	   */
	  slidesToScroll: 1,
	
	  /**
	   * time in milliseconds for the animation of a valid slide attempt
	   * @slideSpeed {Number}
	   */
	  slideSpeed: 300,
	
	  /**
	   * time in milliseconds for the animation of the rewind after the last slide
	   * @rewindSpeed {Number}
	   */
	  rewindSpeed: 600,
	
	  /**
	   * time for the snapBack of the slider if the slide attempt was not valid
	   * @snapBackSpeed {Number}
	   */
	  snapBackSpeed: 200,
	
	  /**
	   * Basic easing functions: https://developer.mozilla.org/de/docs/Web/CSS/transition-timing-function
	   * cubic bezier easing functions: http://easings.net/de
	   * @ease {String}
	   */
	  ease: 'ease',
	
	  /**
	   * if slider reached the last slide, with next click the slider goes back to the startindex.
	   * use infinite or rewind, not both
	   * @rewind {Boolean}
	   */
	  rewind: false,
	
	  /**
	   * number of visible slides or false
	   * use infinite or rewind, not both
	   * @infinite {number}
	   */
	  infinite: false,
	
	  /**
	   * class name for slider frame
	   * @classNameFrame {string}
	   */
	  classNameFrame: 'js_frame',
	
	  /**
	   * class name for slides container
	   * @classNameSlideContainer {string}
	   */
	  classNameSlideContainer: 'js_slides',
	
	  /**
	   * class name for slider prev control
	   * @classNamePrevCtrl {string}
	   */
	  classNamePrevCtrl: 'js_prev',
	
	  /**
	   * class name for slider next control
	   * @classNameNextCtrl {string}
	   */
	  classNameNextCtrl: 'js_next',
	
	  /**
	   * class name for current active slide
	   * if emptyString then no class is set
	   * @classNameActiveSlide {string}
	   */
	  classNameActiveSlide: 'active',
	
	  /**
	   * enables mouse events for swiping on desktop devices
	   * @enableMouseEvents {boolean}
	   */
	  enableMouseEvents: false,
	
	  /**
	   * window instance
	   * @window {object}
	   */
	  window: window,
	
	  /**
	   * If false, slides lory to the first slide on window resize.
	   * @rewindOnResize {boolean}
	   */
	  rewindOnResize: true
	};

/***/ }
/******/ ])
});
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  null,
  /* template */
  __webpack_require__(736),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-lory/src/Item.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Item.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4dfac320", Component.options)
  } else {
    hotAPI.reload("data-v-4dfac320", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(803)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(572),
  /* template */
  __webpack_require__(763),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-lory/src/Lory.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Lory.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d81188d2", Component.options)
  } else {
    hotAPI.reload("data-v-d81188d2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(573),
  /* template */
  __webpack_require__(740),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-lory/src/Next.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Next.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5cb1e300", Component.options)
  } else {
    hotAPI.reload("data-v-5cb1e300", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(574),
  /* template */
  __webpack_require__(753),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-lory/src/Prev.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Prev.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-88554b80", Component.options)
  } else {
    hotAPI.reload("data-v-88554b80", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box notification is-primary"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Defaults: handle the touch")]), _vm._v(" "), _c('lory', [_c('item', [_vm._v("1")]), _vm._v(" "), _c('item', [_vm._v("2")]), _vm._v(" "), _c('item', [_vm._v("3")]), _vm._v(" "), _c('item', [_vm._v("4")]), _vm._v(" "), _c('item', [_vm._v("5")]), _vm._v(" "), _c('item', [_vm._v("6")])], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box notification is-warning"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Enable mouse events")]), _vm._v(" "), _c('lory', {
    attrs: {
      "options": {
        enableMouseEvents: true
      }
    }
  }, [_c('item', [_vm._v("1")]), _vm._v(" "), _c('item', [_vm._v("2")]), _vm._v(" "), _c('item', [_vm._v("3")]), _vm._v(" "), _c('item', [_vm._v("4")]), _vm._v(" "), _c('item', [_vm._v("5")]), _vm._v(" "), _c('item', [_vm._v("6")])], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box notification is-info"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Infinite")]), _vm._v(" "), _c('lory', {
    attrs: {
      "options": {
        enableMouseEvents: true,
        infinite: 1
      }
    }
  }, [_c('item', [_vm._v("1")]), _vm._v(" "), _c('item', [_vm._v("2")]), _vm._v(" "), _c('item', [_vm._v("3")]), _vm._v(" "), _c('item', [_vm._v("4")]), _vm._v(" "), _c('item', [_vm._v("5")]), _vm._v(" "), _c('item', [_vm._v("6")])], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box notification is-danger"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Rewind")]), _vm._v(" "), _c('lory', {
    staticClass: "js_rewind",
    attrs: {
      "options": {
        enableMouseEvents: true,
        infinite: 1,
        rewind: true
      }
    }
  }, [_c('item', [_vm._v("1")]), _vm._v(" "), _c('item', [_vm._v("2")]), _vm._v(" "), _c('item', [_vm._v("3")]), _vm._v(" "), _c('item', [_vm._v("4")]), _vm._v(" "), _c('item', [_vm._v("5")]), _vm._v(" "), _c('item', [_vm._v("6")])], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box notification is-primary"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Width")]), _vm._v(" "), _c('lory', {
    staticClass: "js_rewind",
    attrs: {
      "options": {
        enableMouseEvents: true,
        infinite: 1,
        rewind: true
      }
    }
  }, [_c('item', {
    staticStyle: {
      "width": "220px"
    }
  }, [_vm._v("220")]), _vm._v(" "), _c('item', {
    staticStyle: {
      "width": "190px"
    }
  }, [_vm._v("190")]), _vm._v(" "), _c('item', {
    staticStyle: {
      "width": "150px"
    }
  }, [_vm._v("150")]), _vm._v(" "), _c('item', {
    staticStyle: {
      "width": "130px"
    }
  }, [_vm._v("130")]), _vm._v(" "), _c('item', {
    staticStyle: {
      "width": "250px"
    }
  }, [_vm._v("250")]), _vm._v(" "), _c('item', {
    staticStyle: {
      "width": "180px"
    }
  }, [_vm._v("180")]), _vm._v(" "), _c('item', {
    staticStyle: {
      "width": "200px"
    }
  }, [_vm._v("200")]), _vm._v(" "), _c('item', {
    staticStyle: {
      "width": "140px"
    }
  }, [_vm._v("140")]), _vm._v(" "), _c('item', {
    staticStyle: {
      "width": "120px"
    }
  }, [_vm._v("120")]), _vm._v(" "), _c('item', {
    staticStyle: {
      "width": "240px"
    }
  }, [_vm._v("240")])], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box notification is-warning"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Multiple slides to scroll")]), _vm._v(" "), _c('lory', {
    staticClass: "columns is-mobile",
    attrs: {
      "options": {
        enableMouseEvents: true,
        infinite: 4,
        slidesToScroll: 4
      }
    }
  }, [_c('item', {
    staticClass: "column is-one-quarter-mobile is-3"
  }, [_vm._v("1")]), _vm._v(" "), _c('item', {
    staticClass: "column is-one-quarter-mobile is-3"
  }, [_vm._v("2")]), _vm._v(" "), _c('item', {
    staticClass: "column is-one-quarter-mobile is-3"
  }, [_vm._v("3")]), _vm._v(" "), _c('item', {
    staticClass: "column is-one-quarter-mobile is-3"
  }, [_vm._v("4")]), _vm._v(" "), _c('item', {
    staticClass: "column is-one-quarter-mobile is-3"
  }, [_vm._v("5")]), _vm._v(" "), _c('item', {
    staticClass: "column is-one-quarter-mobile is-3"
  }, [_vm._v("6")]), _vm._v(" "), _c('item', {
    staticClass: "column is-one-quarter-mobile is-3"
  }, [_vm._v("7")]), _vm._v(" "), _c('item', {
    staticClass: "column is-one-quarter-mobile is-3"
  }, [_vm._v("8")])], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box notification is-info"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Custom easings")]), _vm._v(" "), _c('lory', {
    staticClass: "columns is-mobile js_rewind",
    attrs: {
      "options": {
        enableMouseEvents: true,
        infinite: 4,
        slidesToScroll: 4,
        slideSpeed: 1000,
        ease: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        rewind: true
      }
    }
  }, [_c('item', {
    staticClass: "column is-one-quarter-mobile is-3"
  }, [_vm._v("1")]), _vm._v(" "), _c('item', {
    staticClass: "column is-one-quarter-mobile is-3"
  }, [_vm._v("2")]), _vm._v(" "), _c('item', {
    staticClass: "column is-one-quarter-mobile is-3"
  }, [_vm._v("3")]), _vm._v(" "), _c('item', {
    staticClass: "column is-one-quarter-mobile is-3"
  }, [_vm._v("4")]), _vm._v(" "), _c('item', {
    staticClass: "column is-one-quarter-mobile is-3"
  }, [_vm._v("5")]), _vm._v(" "), _c('item', {
    staticClass: "column is-one-quarter-mobile is-3"
  }, [_vm._v("6")]), _vm._v(" "), _c('item', {
    staticClass: "column is-one-quarter-mobile is-3"
  }, [_vm._v("7")]), _vm._v(" "), _c('item', {
    staticClass: "column is-one-quarter-mobile is-3"
  }, [_vm._v("8")])], 1)], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box notification is-danger"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Prev & Next")]), _vm._v(" "), _c('lory', {
    staticClass: "js_rewind",
    attrs: {
      "options": {
        enableMouseEvents: true,
        infinite: 1,
        rewind: true
      }
    }
  }, [_c('item', [_vm._v("1")]), _vm._v(" "), _c('item', [_vm._v("2")]), _vm._v(" "), _c('item', [_vm._v("3")]), _vm._v(" "), _c('item', [_vm._v("4")]), _vm._v(" "), _c('item', [_vm._v("5")]), _vm._v(" "), _c('item', [_vm._v("6")]), _vm._v(" "), _c('prev', {
    attrs: {
      "color": "#dbdbdb"
    },
    slot: "actions"
  }), _vm._v(" "), _c('next', {
    attrs: {
      "color": "#dbdbdb"
    },
    slot: "actions"
  })], 1)], 1)])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-17f37dfa", module.exports)
  }
}

/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "js_slide"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4dfac320", module.exports)
  }
}

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "js_next next"
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": _vm.size,
      "height": _vm.size,
      "viewBox": "0 0 501.5 501.5"
    }
  }, [_c('g', [_c('path', {
    attrs: {
      "fill": _vm.color,
      "d": "M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5cb1e300", module.exports)
  }
}

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "js_prev prev"
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "width": _vm.size,
      "height": _vm.size,
      "viewBox": "0 0 501.5 501.5"
    }
  }, [_c('g', [_c('path', {
    attrs: {
      "fill": _vm.color,
      "d": "M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"
    }
  })])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-88554b80", module.exports)
  }
}

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "slider js_slider"
  }, [_c('div', {
    staticClass: "frame js_frame"
  }, [_c('ul', {
    staticClass: "slides js_slides"
  }, [_vm._t("default")], 2)]), _vm._v(" "), _vm._t("actions")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d81188d2", module.exports)
  }
}

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

exports.Item = __webpack_require__(704)
exports.Lory = __webpack_require__(705)
exports.Prev = __webpack_require__(707)
exports.Next = __webpack_require__(706)


/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(627);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("67452696", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-17f37dfa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Lory.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-17f37dfa\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Lory.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(653);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("73782c72", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d81188d2\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Lory.vue", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-d81188d2\",\"scoped\":false,\"hasInlineConfig\":true}!../../sass-loader/lib/loader.js!../../vue-loader/lib/selector.js?type=styles&index=0!./Lory.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvTG9yeS52dWUiLCJ3ZWJwYWNrOi8vL0xvcnkudnVlIiwid2VicGFjazovLy9OZXh0LnZ1ZSIsIndlYnBhY2s6Ly8vUHJldi52dWUiLCJ3ZWJwYWNrOi8vL0xvcnkudnVlP2ZlZWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL0xvcnkudnVlPzk2NDYiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9yeS9zcmMvTG9yeS52dWU/MzU3NyIsIndlYnBhY2s6Ly8vLi9+L2xvcnkuanMvZGlzdC9sb3J5LmpzIiwid2VicGFjazovLy8uL34vdnVlLWxvcnkvc3JjL0l0ZW0udnVlIiwid2VicGFjazovLy8uL34vdnVlLWxvcnkvc3JjL0xvcnkudnVlIiwid2VicGFjazovLy8uL34vdnVlLWxvcnkvc3JjL05leHQudnVlIiwid2VicGFjazovLy8uL34vdnVlLWxvcnkvc3JjL1ByZXYudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Mb3J5LnZ1ZT83YTc4Iiwid2VicGFjazovLy8uL34vdnVlLWxvcnkvc3JjL0l0ZW0udnVlP2VjNzEiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9yeS9zcmMvTmV4dC52dWU/ZmI4NCIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb3J5L3NyYy9QcmV2LnZ1ZT8wYjljIiwid2VicGFjazovLy8uL34vdnVlLWxvcnkvc3JjL0xvcnkudnVlP2UyNjMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9yeS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL0xvcnkudnVlPzc0OTgiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9yeS9zcmMvTG9yeS52dWU/ZjY4MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUEsK0NBQStDOztBQUUvQztBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRCQUE0QixhQUFhLEVBQUU7O0FBRXhFLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXVDLHVDQUF1QyxnQkFBZ0I7O0FBRTlGO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQ0FBMkMsVUFBVSxhQUFhLEVBQUU7QUFDcEU7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsNEJBQTRCLGFBQWEsRUFBRTs7QUFFeEUsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNELEM7Ozs7Ozs7O0FDajNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7O0FDMUJBO0FBQ0EsdUJBQXVKOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFzRjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXNGO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7OztBQzNCQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN4TkEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDWEEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3ZCQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDdkJBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0hBOztBQUVBO0FBQ0EscUNBQWlOO0FBQ2pOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0SUFBNEksb0VBQW9FO0FBQ2hOLHFKQUFxSixvRUFBb0U7QUFDek47QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBOztBQUVBO0FBQ0EscUNBQXNLO0FBQ3RLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBZ0cscUVBQXFFO0FBQ3JLLHlHQUF5RyxxRUFBcUU7QUFDOUs7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImpzLzUuMGFhMDkzNDJhMmZhNWFhNWM3MzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTE3ZjM3ZGZhXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vTG9yeS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTG9yeS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTE3ZjM3ZGZhXFxcIn0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xvcnkudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTE3ZjM3ZGZhXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Mb3J5LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIExvcnkudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTE3ZjM3ZGZhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMTdmMzdkZmFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL0xvcnkudnVlXG4vLyBtb2R1bGUgaWQgPSAxMzlcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwic2xpZGVyIGpzX3NsaWRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJmcmFtZSBqc19mcmFtZVwiPlxuICAgICAgPHVsIGNsYXNzPVwic2xpZGVzIGpzX3NsaWRlc1wiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICAgIDxzbG90IG5hbWU9XCJhY3Rpb25zXCI+PC9zbG90PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBsb3J5IH0gZnJvbSAnbG9yeS5qcydcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gIHByb3BzOiB7XG4gICAgb3B0aW9uczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgZGVmYXVsdDogKCkgPT4gKHt9KVxuICAgIH1cbiAgfSxcblxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2xpZGVyOiBudWxsXG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQgKCkge1xuICAgIHRoaXMuc2xpZGVyID0gbG9yeSh0aGlzLiRlbCwgdGhpcy5vcHRpb25zKVxuICB9LFxuXG4gIGJlZm9yZURlc3Ryb3kgKCkge1xuICAgIHRoaXMuc2xpZGVyLmRlc3Ryb3koKVxuICB9XG5cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi8qKlxuICogKG9wdGlvbmFsKSBkZWZpbmUgaGVyZSB0aGUgc3R5bGUgZGVmaW5pdGlvbnMgd2hpY2ggc2hvdWxkIGJlIGFwcGxpZWQgb24gdGhlIHNsaWRlciBjb250YWluZXJcbiAqIGUuZy4gd2lkdGggaW5jbHVkaW5nIGZ1cnRoZXIgY29udHJvbHMgbGlrZSBhcnJvd3MgZXRjLlxuICovXG4uc2xpZGVyIHtcblxuICAuZnJhbWUge1xuICAgIC8qKlxuICAgICAqIChvcHRpb25hbCkgd3JhcHBlciB3aWR0aCwgc3BlY2lmaWVzIHdpZHRoIG9mIHRoZSBzbGlkZXIgZnJhbWUuXG4gICAgICovXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIC5zbGlkZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIGxpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgLyoqXG4gICAgICogKG9wdGlvbmFsKSBpZiB0aGUgY29udGVudCBpbnNpZGUgdGhlIHNsaWRlIGVsZW1lbnQgaGFzIGEgZGVmaW5lZCBzaXplLlxuICAgICAqL1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB9XG5cbiAgLnByZXYsIC5uZXh0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgLm5leHQge1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgLnByZXYge1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICAubmV4dCBzdmcsIC5wcmV2IHN2ZyB7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cblxuICAmLmpzX3Jld2luZCB7XG4gICAgLmZyYW1lIGxpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gIH1cbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gTG9yeS52dWU/N2E0ZTk0MTciLCI8dGVtcGxhdGU+XG4gIDxzcGFuIGNsYXNzPVwianNfbmV4dCBuZXh0XCI+XG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgOndpZHRoPVwic2l6ZVwiIDpoZWlnaHQ9XCJzaXplXCIgdmlld0JveD1cIjAgMCA1MDEuNSA1MDEuNVwiPjxnPjxwYXRoIDpmaWxsPVwiY29sb3JcIiBkPVwiTTE5OS4zMyA0MTAuNjIybC01NS43Ny01NS41MDhMMjQ3LjQyNSAyNTAuNzUgMTQzLjU2IDE0Ni4zODRsNTUuNzctNTUuNTA3TDM1OC40NCAyNTAuNzV6XCI+PC9wYXRoPjwvZz48L3N2Zz5cbiAgPC9zcGFuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiA1MFxuICAgIH0sXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcjMkU0MzVBJ1xuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gTmV4dC52dWU/N2FkM2U0NmQiLCI8dGVtcGxhdGU+XG4gIDxzcGFuIGNsYXNzPVwianNfcHJldiBwcmV2XCI+XG4gICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgOndpZHRoPVwic2l6ZVwiIDpoZWlnaHQ9XCJzaXplXCIgdmlld0JveD1cIjAgMCA1MDEuNSA1MDEuNVwiPjxnPjxwYXRoIDpmaWxsPVwiY29sb3JcIiBkPVwiTTMwMi42NyA5MC44NzdsNTUuNzcgNTUuNTA4TDI1NC41NzUgMjUwLjc1IDM1OC40NCAzNTUuMTE2bC01NS43NyA1NS41MDZMMTQzLjU2IDI1MC43NXpcIj48L3BhdGg+PC9nPjwvc3ZnPlxuICA8L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHNpemU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDUwXG4gICAgfSxcbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJyMyRTQzNUEnXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBQcmV2LnZ1ZT81NWFkYTFjOCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1hbmNlc3RvclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50XCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3ggbm90aWZpY2F0aW9uIGlzLXByaW1hcnlcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPkRlZmF1bHRzOiBoYW5kbGUgdGhlIHRvdWNoPC9oMT5cbiAgICAgICAgICA8bG9yeT5cbiAgICAgICAgICAgIDxpdGVtPjE8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbT4yPC9pdGVtPlxuICAgICAgICAgICAgPGl0ZW0+MzwvaXRlbT5cbiAgICAgICAgICAgIDxpdGVtPjQ8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbT41PC9pdGVtPlxuICAgICAgICAgICAgPGl0ZW0+NjwvaXRlbT5cbiAgICAgICAgICA8L2xvcnk+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtYW5jZXN0b3JcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudFwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94IG5vdGlmaWNhdGlvbiBpcy13YXJuaW5nXCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5FbmFibGUgbW91c2UgZXZlbnRzPC9oMT5cbiAgICAgICAgICA8bG9yeSA6b3B0aW9ucz1cInsgZW5hYmxlTW91c2VFdmVudHM6IHRydWUgfVwiPlxuICAgICAgICAgICAgPGl0ZW0+MTwvaXRlbT5cbiAgICAgICAgICAgIDxpdGVtPjI8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbT4zPC9pdGVtPlxuICAgICAgICAgICAgPGl0ZW0+NDwvaXRlbT5cbiAgICAgICAgICAgIDxpdGVtPjU8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbT42PC9pdGVtPlxuICAgICAgICAgIDwvbG9yeT5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1hbmNlc3RvclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50XCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3ggbm90aWZpY2F0aW9uIGlzLWluZm9cIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPkluZmluaXRlPC9oMT5cbiAgICAgICAgICA8bG9yeSA6b3B0aW9ucz1cInsgZW5hYmxlTW91c2VFdmVudHM6IHRydWUsIGluZmluaXRlOiAxIH1cIj5cbiAgICAgICAgICAgIDxpdGVtPjE8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbT4yPC9pdGVtPlxuICAgICAgICAgICAgPGl0ZW0+MzwvaXRlbT5cbiAgICAgICAgICAgIDxpdGVtPjQ8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbT41PC9pdGVtPlxuICAgICAgICAgICAgPGl0ZW0+NjwvaXRlbT5cbiAgICAgICAgICA8L2xvcnk+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtYW5jZXN0b3JcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudFwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94IG5vdGlmaWNhdGlvbiBpcy1kYW5nZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPlJld2luZDwvaDE+XG4gICAgICAgICAgPGxvcnkgY2xhc3M9XCJqc19yZXdpbmRcIiA6b3B0aW9ucz1cInsgZW5hYmxlTW91c2VFdmVudHM6IHRydWUsIGluZmluaXRlOiAxLCByZXdpbmQ6IHRydWUgfVwiPlxuICAgICAgICAgICAgPGl0ZW0+MTwvaXRlbT5cbiAgICAgICAgICAgIDxpdGVtPjI8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbT4zPC9pdGVtPlxuICAgICAgICAgICAgPGl0ZW0+NDwvaXRlbT5cbiAgICAgICAgICAgIDxpdGVtPjU8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbT42PC9pdGVtPlxuICAgICAgICAgIDwvbG9yeT5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1hbmNlc3RvclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50XCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3ggbm90aWZpY2F0aW9uIGlzLXByaW1hcnlcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPldpZHRoPC9oMT5cbiAgICAgICAgICA8bG9yeSBjbGFzcz1cImpzX3Jld2luZFwiIDpvcHRpb25zPVwieyBlbmFibGVNb3VzZUV2ZW50czogdHJ1ZSwgaW5maW5pdGU6IDEsIHJld2luZDogdHJ1ZSB9XCI+XG4gICAgICAgICAgICA8aXRlbSBzdHlsZT1cIndpZHRoOiAyMjBweDtcIj4yMjA8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbSBzdHlsZT1cIndpZHRoOiAxOTBweDtcIj4xOTA8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbSBzdHlsZT1cIndpZHRoOiAxNTBweDtcIj4xNTA8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbSBzdHlsZT1cIndpZHRoOiAxMzBweDtcIj4xMzA8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbSBzdHlsZT1cIndpZHRoOiAyNTBweDtcIj4yNTA8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbSBzdHlsZT1cIndpZHRoOiAxODBweDtcIj4xODA8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbSBzdHlsZT1cIndpZHRoOiAyMDBweDtcIj4yMDA8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbSBzdHlsZT1cIndpZHRoOiAxNDBweDtcIj4xNDA8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbSBzdHlsZT1cIndpZHRoOiAxMjBweDtcIj4xMjA8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbSBzdHlsZT1cIndpZHRoOiAyNDBweDtcIj4yNDA8L2l0ZW0+XG4gICAgICAgICAgPC9sb3J5PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLWFuY2VzdG9yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1wYXJlbnRcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveCBub3RpZmljYXRpb24gaXMtd2FybmluZ1wiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+TXVsdGlwbGUgc2xpZGVzIHRvIHNjcm9sbDwvaDE+XG4gICAgICAgICAgPGxvcnkgY2xhc3M9XCJjb2x1bW5zIGlzLW1vYmlsZVwiIDpvcHRpb25zPVwieyBlbmFibGVNb3VzZUV2ZW50czogdHJ1ZSwgaW5maW5pdGU6IDQsIHNsaWRlc1RvU2Nyb2xsOiA0IH1cIj5cbiAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiY29sdW1uIGlzLW9uZS1xdWFydGVyLW1vYmlsZSBpcy0zXCI+MTwvaXRlbT5cbiAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiY29sdW1uIGlzLW9uZS1xdWFydGVyLW1vYmlsZSBpcy0zXCI+MjwvaXRlbT5cbiAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiY29sdW1uIGlzLW9uZS1xdWFydGVyLW1vYmlsZSBpcy0zXCI+MzwvaXRlbT5cbiAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiY29sdW1uIGlzLW9uZS1xdWFydGVyLW1vYmlsZSBpcy0zXCI+NDwvaXRlbT5cbiAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiY29sdW1uIGlzLW9uZS1xdWFydGVyLW1vYmlsZSBpcy0zXCI+NTwvaXRlbT5cbiAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiY29sdW1uIGlzLW9uZS1xdWFydGVyLW1vYmlsZSBpcy0zXCI+NjwvaXRlbT5cbiAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiY29sdW1uIGlzLW9uZS1xdWFydGVyLW1vYmlsZSBpcy0zXCI+NzwvaXRlbT5cbiAgICAgICAgICAgIDxpdGVtIGNsYXNzPVwiY29sdW1uIGlzLW9uZS1xdWFydGVyLW1vYmlsZSBpcy0zXCI+ODwvaXRlbT5cbiAgICAgICAgICA8L2xvcnk+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtYW5jZXN0b3JcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudFwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94IG5vdGlmaWNhdGlvbiBpcy1pbmZvXCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5DdXN0b20gZWFzaW5nczwvaDE+XG4gICAgICAgICAgPGxvcnkgY2xhc3M9XCJjb2x1bW5zIGlzLW1vYmlsZSBqc19yZXdpbmRcIiA6b3B0aW9ucz1cInsgZW5hYmxlTW91c2VFdmVudHM6IHRydWUsIGluZmluaXRlOiA0LCBzbGlkZXNUb1Njcm9sbDogNCwgc2xpZGVTcGVlZDogMTAwMCwgZWFzZTogJ2N1YmljLWJlemllcigwLjQ1NSwgMC4wMywgMC41MTUsIDAuOTU1KScsIHJld2luZDogdHJ1ZSB9XCI+XG4gICAgICAgICAgICA8aXRlbSBjbGFzcz1cImNvbHVtbiBpcy1vbmUtcXVhcnRlci1tb2JpbGUgaXMtM1wiPjE8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbSBjbGFzcz1cImNvbHVtbiBpcy1vbmUtcXVhcnRlci1tb2JpbGUgaXMtM1wiPjI8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbSBjbGFzcz1cImNvbHVtbiBpcy1vbmUtcXVhcnRlci1tb2JpbGUgaXMtM1wiPjM8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbSBjbGFzcz1cImNvbHVtbiBpcy1vbmUtcXVhcnRlci1tb2JpbGUgaXMtM1wiPjQ8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbSBjbGFzcz1cImNvbHVtbiBpcy1vbmUtcXVhcnRlci1tb2JpbGUgaXMtM1wiPjU8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbSBjbGFzcz1cImNvbHVtbiBpcy1vbmUtcXVhcnRlci1tb2JpbGUgaXMtM1wiPjY8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbSBjbGFzcz1cImNvbHVtbiBpcy1vbmUtcXVhcnRlci1tb2JpbGUgaXMtM1wiPjc8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbSBjbGFzcz1cImNvbHVtbiBpcy1vbmUtcXVhcnRlci1tb2JpbGUgaXMtM1wiPjg8L2l0ZW0+XG4gICAgICAgICAgPC9sb3J5PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLWFuY2VzdG9yXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1wYXJlbnRcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveCBub3RpZmljYXRpb24gaXMtZGFuZ2VyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5QcmV2ICYgTmV4dDwvaDE+XG4gICAgICAgICAgPGxvcnkgY2xhc3M9XCJqc19yZXdpbmRcIiA6b3B0aW9ucz1cInsgZW5hYmxlTW91c2VFdmVudHM6IHRydWUsIGluZmluaXRlOiAxLCByZXdpbmQ6IHRydWUgfVwiPlxuICAgICAgICAgICAgPGl0ZW0+MTwvaXRlbT5cbiAgICAgICAgICAgIDxpdGVtPjI8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbT4zPC9pdGVtPlxuICAgICAgICAgICAgPGl0ZW0+NDwvaXRlbT5cbiAgICAgICAgICAgIDxpdGVtPjU8L2l0ZW0+XG4gICAgICAgICAgICA8aXRlbT42PC9pdGVtPlxuICAgICAgICAgICAgPHByZXYgc2xvdD1cImFjdGlvbnNcIiBjb2xvcj1cIiNkYmRiZGJcIj48L3ByZXY+XG4gICAgICAgICAgICA8bmV4dCBzbG90PVwiYWN0aW9uc1wiIGNvbG9yPVwiI2RiZGJkYlwiPjwvbmV4dD5cbiAgICAgICAgICA8L2xvcnk+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBMb3J5LCBJdGVtLCBQcmV2LCBOZXh0IH0gZnJvbSAndnVlLWxvcnknXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIExvcnksXG4gICAgSXRlbSxcbiAgICBQcmV2LFxuICAgIE5leHRcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5zbGlkZXIge1xuICAuZnJhbWUgbGkge1xuICAgIGhlaWdodDogMTMwcHg7XG4gIH1cblxuICAmLmpzX3Jld2luZCB7XG4gICAgLmZyYW1lIGxpIHtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgICB9XG4gIH1cbn1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gTG9yeS52dWU/MDlkMzI0ZTIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc2xpZGVyIC5mcmFtZSBsaVtkYXRhLXYtMTdmMzdkZmFdIHtcXG4gIGhlaWdodDogMTMwcHg7XFxufVxcbi5zbGlkZXIuanNfcmV3aW5kIC5mcmFtZSBsaVtkYXRhLXYtMTdmMzdkZmFdIHtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMTdmMzdkZmFcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvY29tcG9uZW50cy9Mb3J5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjI3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqXFxuICogKG9wdGlvbmFsKSBkZWZpbmUgaGVyZSB0aGUgc3R5bGUgZGVmaW5pdGlvbnMgd2hpY2ggc2hvdWxkIGJlIGFwcGxpZWQgb24gdGhlIHNsaWRlciBjb250YWluZXJcXG4gKiBlLmcuIHdpZHRoIGluY2x1ZGluZyBmdXJ0aGVyIGNvbnRyb2xzIGxpa2UgYXJyb3dzIGV0Yy5cXG4gKi9cXG4uc2xpZGVyIC5mcmFtZSB7XFxuICAvKipcXG4gICAgICogKG9wdGlvbmFsKSB3cmFwcGVyIHdpZHRoLCBzcGVjaWZpZXMgd2lkdGggb2YgdGhlIHNsaWRlciBmcmFtZS5cXG4gICAgICovXFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5zbGlkZXIgLnNsaWRlcyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLnNsaWRlciBsaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAvKipcXG4gICAgICogKG9wdGlvbmFsKSBpZiB0aGUgY29udGVudCBpbnNpZGUgdGhlIHNsaWRlIGVsZW1lbnQgaGFzIGEgZGVmaW5lZCBzaXplLlxcbiAgICAgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxufVxcbi5zbGlkZXIgLnByZXYsIC5zbGlkZXIgLm5leHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtMjVweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2xpZGVyIC5uZXh0IHtcXG4gIHJpZ2h0OiAwO1xcbn1cXG4uc2xpZGVyIC5wcmV2IHtcXG4gIGxlZnQ6IDA7XFxufVxcbi5zbGlkZXIgLm5leHQgc3ZnLCAuc2xpZGVyIC5wcmV2IHN2ZyB7XFxuICB3aWR0aDogMjVweDtcXG59XFxuLnNsaWRlci5qc19yZXdpbmQgLmZyYW1lIGxpIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZDgxMTg4ZDJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9+L3Z1ZS1sb3J5L3NyYy9Mb3J5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjUzXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fSxcbi8qKioqKiovIFx0XHRcdGlkOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGxvYWRlZDogZmFsc2Vcbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXG4vKioqLyB9LFxuLyogMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IC8qIGdsb2JhbHMgalF1ZXJ5ICovXG5cdFxuXHRleHBvcnRzLmxvcnkgPSBsb3J5O1xuXHRcblx0dmFyIF9kZXRlY3RQcmVmaXhlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHR2YXIgX2RldGVjdFByZWZpeGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RldGVjdFByZWZpeGVzKTtcblx0XG5cdHZhciBfZGlzcGF0Y2hFdmVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdFxuXHR2YXIgX2Rpc3BhdGNoRXZlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGlzcGF0Y2hFdmVudCk7XG5cdFxuXHR2YXIgX2RlZmF1bHRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcblx0XG5cdHZhciBfZGVmYXVsdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmYXVsdHMpO1xuXHRcblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblx0XG5cdHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblx0XG5cdGZ1bmN0aW9uIGxvcnkoc2xpZGVyLCBvcHRzKSB7XG5cdCAgICB2YXIgcG9zaXRpb24gPSB2b2lkIDA7XG5cdCAgICB2YXIgc2xpZGVzV2lkdGggPSB2b2lkIDA7XG5cdCAgICB2YXIgZnJhbWVXaWR0aCA9IHZvaWQgMDtcblx0ICAgIHZhciBzbGlkZXMgPSB2b2lkIDA7XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBzbGlkZXIgRE9NIGVsZW1lbnRzXG5cdCAgICAgKi9cblx0ICAgIHZhciBmcmFtZSA9IHZvaWQgMDtcblx0ICAgIHZhciBzbGlkZUNvbnRhaW5lciA9IHZvaWQgMDtcblx0ICAgIHZhciBwcmV2Q3RybCA9IHZvaWQgMDtcblx0ICAgIHZhciBuZXh0Q3RybCA9IHZvaWQgMDtcblx0ICAgIHZhciBwcmVmaXhlcyA9IHZvaWQgMDtcblx0ICAgIHZhciB0cmFuc2l0aW9uRW5kQ2FsbGJhY2sgPSB2b2lkIDA7XG5cdFxuXHQgICAgdmFyIGluZGV4ID0gMDtcblx0ICAgIHZhciBvcHRpb25zID0ge307XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBpZiBvYmplY3QgaXMgalF1ZXJ5IGNvbnZlcnQgdG8gbmF0aXZlIERPTSBlbGVtZW50XG5cdCAgICAgKi9cblx0ICAgIGlmICh0eXBlb2YgalF1ZXJ5ICE9PSAndW5kZWZpbmVkJyAmJiBzbGlkZXIgaW5zdGFuY2VvZiBqUXVlcnkpIHtcblx0ICAgICAgICBzbGlkZXIgPSBzbGlkZXJbMF07XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBwcml2YXRlXG5cdCAgICAgKiBzZXQgYWN0aXZlIGNsYXNzIHRvIGVsZW1lbnQgd2hpY2ggaXMgdGhlIGN1cnJlbnQgc2xpZGVcblx0ICAgICAqL1xuXHQgICAgZnVuY3Rpb24gc2V0QWN0aXZlRWxlbWVudChzbGlkZXMsIGN1cnJlbnRJbmRleCkge1xuXHQgICAgICAgIHZhciBfb3B0aW9ucyA9IG9wdGlvbnM7XG5cdCAgICAgICAgdmFyIGNsYXNzTmFtZUFjdGl2ZVNsaWRlID0gX29wdGlvbnMuY2xhc3NOYW1lQWN0aXZlU2xpZGU7XG5cdFxuXHRcblx0ICAgICAgICBzbGlkZXMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcblx0ICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZUFjdGl2ZVNsaWRlKSkge1xuXHQgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZUFjdGl2ZVNsaWRlKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0pO1xuXHRcblx0ICAgICAgICBzbGlkZXNbY3VycmVudEluZGV4XS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZUFjdGl2ZVNsaWRlKTtcblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIHByaXZhdGVcblx0ICAgICAqIHNldHVwSW5maW5pdGU6IGZ1bmN0aW9uIHRvIHNldHVwIGlmIGluZmluaXRlIGlzIHNldFxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSAge2FycmF5fSBzbGlkZUFycmF5XG5cdCAgICAgKiBAcmV0dXJuIHthcnJheX0gYXJyYXkgb2YgdXBkYXRlZCBzbGlkZUNvbnRhaW5lciBlbGVtZW50c1xuXHQgICAgICovXG5cdCAgICBmdW5jdGlvbiBzZXR1cEluZmluaXRlKHNsaWRlQXJyYXkpIHtcblx0ICAgICAgICB2YXIgX29wdGlvbnMyID0gb3B0aW9ucztcblx0ICAgICAgICB2YXIgaW5maW5pdGUgPSBfb3B0aW9uczIuaW5maW5pdGU7XG5cdFxuXHRcblx0ICAgICAgICB2YXIgZnJvbnQgPSBzbGlkZUFycmF5LnNsaWNlKDAsIGluZmluaXRlKTtcblx0ICAgICAgICB2YXIgYmFjayA9IHNsaWRlQXJyYXkuc2xpY2Uoc2xpZGVBcnJheS5sZW5ndGggLSBpbmZpbml0ZSwgc2xpZGVBcnJheS5sZW5ndGgpO1xuXHRcblx0ICAgICAgICBmcm9udC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZWQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcblx0XG5cdCAgICAgICAgICAgIHNsaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb25lZCk7XG5cdCAgICAgICAgfSk7XG5cdFxuXHQgICAgICAgIGJhY2sucmV2ZXJzZSgpLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lZCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuXHRcblx0ICAgICAgICAgICAgc2xpZGVDb250YWluZXIuaW5zZXJ0QmVmb3JlKGNsb25lZCwgc2xpZGVDb250YWluZXIuZmlyc3RDaGlsZCk7XG5cdCAgICAgICAgfSk7XG5cdFxuXHQgICAgICAgIHNsaWRlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIocHJlZml4ZXMudHJhbnNpdGlvbkVuZCwgb25UcmFuc2l0aW9uRW5kKTtcblx0XG5cdCAgICAgICAgcmV0dXJuIHNsaWNlLmNhbGwoc2xpZGVDb250YWluZXIuY2hpbGRyZW4pO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogW2Rpc3BhdGNoU2xpZGVyRXZlbnQgZGVzY3JpcHRpb25dXG5cdCAgICAgKiBAcmV0dXJuIHtbdHlwZV19IFtkZXNjcmlwdGlvbl1cblx0ICAgICAqL1xuXHQgICAgZnVuY3Rpb24gZGlzcGF0Y2hTbGlkZXJFdmVudChwaGFzZSwgdHlwZSwgZGV0YWlsKSB7XG5cdCAgICAgICAgKDAsIF9kaXNwYXRjaEV2ZW50Mi5kZWZhdWx0KShzbGlkZXIsIHBoYXNlICsgJy5sb3J5LicgKyB0eXBlLCBkZXRhaWwpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogdHJhbnNsYXRlcyB0byBhIGdpdmVuIHBvc2l0aW9uIGluIGEgZ2l2ZW4gdGltZSBpbiBtaWxsaXNlY29uZHNcblx0ICAgICAqXG5cdCAgICAgKiBAdG8gICAgICAgIHtudW1iZXJ9IG51bWJlciBpbiBwaXhlbHMgd2hlcmUgdG8gdHJhbnNsYXRlIHRvXG5cdCAgICAgKiBAZHVyYXRpb24gIHtudW1iZXJ9IHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpc3Rpb25cblx0ICAgICAqIEBlYXNlICAgICAge3N0cmluZ30gZWFzaW5nIGNzcyBwcm9wZXJ0eVxuXHQgICAgICovXG5cdCAgICBmdW5jdGlvbiB0cmFuc2xhdGUodG8sIGR1cmF0aW9uLCBlYXNlKSB7XG5cdCAgICAgICAgdmFyIHN0eWxlID0gc2xpZGVDb250YWluZXIgJiYgc2xpZGVDb250YWluZXIuc3R5bGU7XG5cdFxuXHQgICAgICAgIGlmIChzdHlsZSkge1xuXHQgICAgICAgICAgICBzdHlsZVtwcmVmaXhlcy50cmFuc2l0aW9uICsgJ1RpbWluZ0Z1bmN0aW9uJ10gPSBlYXNlO1xuXHQgICAgICAgICAgICBzdHlsZVtwcmVmaXhlcy50cmFuc2l0aW9uICsgJ0R1cmF0aW9uJ10gPSBkdXJhdGlvbiArICdtcyc7XG5cdFxuXHQgICAgICAgICAgICBpZiAocHJlZml4ZXMuaGFzVHJhbnNsYXRlM2QpIHtcblx0ICAgICAgICAgICAgICAgIHN0eWxlW3ByZWZpeGVzLnRyYW5zZm9ybV0gPSAndHJhbnNsYXRlM2QoJyArIHRvICsgJ3B4LCAwLCAwKSc7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBzdHlsZVtwcmVmaXhlcy50cmFuc2Zvcm1dID0gJ3RyYW5zbGF0ZSgnICsgdG8gKyAncHgsIDApJztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIHNsaWRlZnVuY3Rpb24gY2FsbGVkIGJ5IHByZXYsIG5leHQgJiB0b3VjaGVuZFxuXHQgICAgICpcblx0ICAgICAqIGRldGVybWluZSBuZXh0SW5kZXggYW5kIHNsaWRlIHRvIG5leHQgcG9zdGlvblxuXHQgICAgICogdW5kZXIgcmVzdHJpY3Rpb25zIG9mIHRoZSBkZWZpbmVkIG9wdGlvbnNcblx0ICAgICAqXG5cdCAgICAgKiBAZGlyZWN0aW9uICB7Ym9vbGVhbn1cblx0ICAgICAqL1xuXHQgICAgZnVuY3Rpb24gc2xpZGUobmV4dEluZGV4LCBkaXJlY3Rpb24pIHtcblx0ICAgICAgICB2YXIgX29wdGlvbnMzID0gb3B0aW9ucztcblx0ICAgICAgICB2YXIgc2xpZGVTcGVlZCA9IF9vcHRpb25zMy5zbGlkZVNwZWVkO1xuXHQgICAgICAgIHZhciBzbGlkZXNUb1Njcm9sbCA9IF9vcHRpb25zMy5zbGlkZXNUb1Njcm9sbDtcblx0ICAgICAgICB2YXIgaW5maW5pdGUgPSBfb3B0aW9uczMuaW5maW5pdGU7XG5cdCAgICAgICAgdmFyIHJld2luZCA9IF9vcHRpb25zMy5yZXdpbmQ7XG5cdCAgICAgICAgdmFyIHJld2luZFNwZWVkID0gX29wdGlvbnMzLnJld2luZFNwZWVkO1xuXHQgICAgICAgIHZhciBlYXNlID0gX29wdGlvbnMzLmVhc2U7XG5cdCAgICAgICAgdmFyIGNsYXNzTmFtZUFjdGl2ZVNsaWRlID0gX29wdGlvbnMzLmNsYXNzTmFtZUFjdGl2ZVNsaWRlO1xuXHRcblx0XG5cdCAgICAgICAgdmFyIGR1cmF0aW9uID0gc2xpZGVTcGVlZDtcblx0XG5cdCAgICAgICAgdmFyIG5leHRTbGlkZSA9IGRpcmVjdGlvbiA/IGluZGV4ICsgMSA6IGluZGV4IC0gMTtcblx0ICAgICAgICB2YXIgbWF4T2Zmc2V0ID0gTWF0aC5yb3VuZChzbGlkZXNXaWR0aCAtIGZyYW1lV2lkdGgpO1xuXHRcblx0ICAgICAgICBkaXNwYXRjaFNsaWRlckV2ZW50KCdiZWZvcmUnLCAnc2xpZGUnLCB7XG5cdCAgICAgICAgICAgIGluZGV4OiBpbmRleCxcblx0ICAgICAgICAgICAgbmV4dFNsaWRlOiBuZXh0U2xpZGVcblx0ICAgICAgICB9KTtcblx0XG5cdCAgICAgICAgaWYgKHR5cGVvZiBuZXh0SW5kZXggIT09ICdudW1iZXInKSB7XG5cdCAgICAgICAgICAgIGlmIChkaXJlY3Rpb24pIHtcblx0ICAgICAgICAgICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgc2xpZGVzVG9TY3JvbGw7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBuZXh0SW5kZXggPSBpbmRleCAtIHNsaWRlc1RvU2Nyb2xsO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICBuZXh0SW5kZXggPSBNYXRoLm1pbihNYXRoLm1heChuZXh0SW5kZXgsIDApLCBzbGlkZXMubGVuZ3RoIC0gMSk7XG5cdFxuXHQgICAgICAgIGlmIChpbmZpbml0ZSAmJiBkaXJlY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICBuZXh0SW5kZXggKz0gaW5maW5pdGU7XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICB2YXIgbmV4dE9mZnNldCA9IE1hdGgubWluKE1hdGgubWF4KHNsaWRlc1tuZXh0SW5kZXhdLm9mZnNldExlZnQgKiAtMSwgbWF4T2Zmc2V0ICogLTEpLCAwKTtcblx0XG5cdCAgICAgICAgaWYgKHJld2luZCAmJiBNYXRoLmFicyhwb3NpdGlvbi54KSA9PT0gbWF4T2Zmc2V0ICYmIGRpcmVjdGlvbikge1xuXHQgICAgICAgICAgICBuZXh0T2Zmc2V0ID0gMDtcblx0ICAgICAgICAgICAgbmV4dEluZGV4ID0gMDtcblx0ICAgICAgICAgICAgZHVyYXRpb24gPSByZXdpbmRTcGVlZDtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIHRyYW5zbGF0ZSB0byB0aGUgbmV4dE9mZnNldCBieSBhIGRlZmluZWQgZHVyYXRpb24gYW5kIGVhc2UgZnVuY3Rpb25cblx0ICAgICAgICAgKi9cblx0ICAgICAgICB0cmFuc2xhdGUobmV4dE9mZnNldCwgZHVyYXRpb24sIGVhc2UpO1xuXHRcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiB1cGRhdGUgdGhlIHBvc2l0aW9uIHdpdGggdGhlIG5leHQgcG9zaXRpb25cblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwb3NpdGlvbi54ID0gbmV4dE9mZnNldDtcblx0XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogdXBkYXRlIHRoZSBpbmRleCB3aXRoIHRoZSBuZXh0SW5kZXggb25seSBpZlxuXHQgICAgICAgICAqIHRoZSBvZmZzZXQgb2YgdGhlIG5leHRJbmRleCBpcyBpbiB0aGUgcmFuZ2Ugb2YgdGhlIG1heE9mZnNldFxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGlmIChzbGlkZXNbbmV4dEluZGV4XS5vZmZzZXRMZWZ0IDw9IG1heE9mZnNldCkge1xuXHQgICAgICAgICAgICBpbmRleCA9IG5leHRJbmRleDtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIGlmIChpbmZpbml0ZSAmJiAobmV4dEluZGV4ID09PSBzbGlkZXMubGVuZ3RoIC0gaW5maW5pdGUgfHwgbmV4dEluZGV4ID09PSAwKSkge1xuXHQgICAgICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG5cdCAgICAgICAgICAgICAgICBpbmRleCA9IGluZmluaXRlO1xuXHQgICAgICAgICAgICB9XG5cdFxuXHQgICAgICAgICAgICBpZiAoIWRpcmVjdGlvbikge1xuXHQgICAgICAgICAgICAgICAgaW5kZXggPSBzbGlkZXMubGVuZ3RoIC0gaW5maW5pdGUgKiAyO1xuXHQgICAgICAgICAgICB9XG5cdFxuXHQgICAgICAgICAgICBwb3NpdGlvbi54ID0gc2xpZGVzW2luZGV4XS5vZmZzZXRMZWZ0ICogLTE7XG5cdFxuXHQgICAgICAgICAgICB0cmFuc2l0aW9uRW5kQ2FsbGJhY2sgPSBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kQ2FsbGJhY2soKSB7XG5cdCAgICAgICAgICAgICAgICB0cmFuc2xhdGUoc2xpZGVzW2luZGV4XS5vZmZzZXRMZWZ0ICogLTEsIDAsIHVuZGVmaW5lZCk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICBpZiAoY2xhc3NOYW1lQWN0aXZlU2xpZGUpIHtcblx0ICAgICAgICAgICAgc2V0QWN0aXZlRWxlbWVudChzbGljZS5jYWxsKHNsaWRlcyksIGluZGV4KTtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIGRpc3BhdGNoU2xpZGVyRXZlbnQoJ2FmdGVyJywgJ3NsaWRlJywge1xuXHQgICAgICAgICAgICBjdXJyZW50U2xpZGU6IGluZGV4XG5cdCAgICAgICAgfSk7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBwdWJsaWNcblx0ICAgICAqIHNldHVwIGZ1bmN0aW9uXG5cdCAgICAgKi9cblx0ICAgIGZ1bmN0aW9uIHNldHVwKCkge1xuXHQgICAgICAgIGRpc3BhdGNoU2xpZGVyRXZlbnQoJ2JlZm9yZScsICdpbml0Jyk7XG5cdFxuXHQgICAgICAgIHByZWZpeGVzID0gKDAsIF9kZXRlY3RQcmVmaXhlczIuZGVmYXVsdCkoKTtcblx0ICAgICAgICBvcHRpb25zID0gX2V4dGVuZHMoe30sIF9kZWZhdWx0czIuZGVmYXVsdCwgb3B0cyk7XG5cdFxuXHQgICAgICAgIHZhciBfb3B0aW9uczQgPSBvcHRpb25zO1xuXHQgICAgICAgIHZhciBjbGFzc05hbWVGcmFtZSA9IF9vcHRpb25zNC5jbGFzc05hbWVGcmFtZTtcblx0ICAgICAgICB2YXIgY2xhc3NOYW1lU2xpZGVDb250YWluZXIgPSBfb3B0aW9uczQuY2xhc3NOYW1lU2xpZGVDb250YWluZXI7XG5cdCAgICAgICAgdmFyIGNsYXNzTmFtZVByZXZDdHJsID0gX29wdGlvbnM0LmNsYXNzTmFtZVByZXZDdHJsO1xuXHQgICAgICAgIHZhciBjbGFzc05hbWVOZXh0Q3RybCA9IF9vcHRpb25zNC5jbGFzc05hbWVOZXh0Q3RybDtcblx0ICAgICAgICB2YXIgZW5hYmxlTW91c2VFdmVudHMgPSBfb3B0aW9uczQuZW5hYmxlTW91c2VFdmVudHM7XG5cdCAgICAgICAgdmFyIGNsYXNzTmFtZUFjdGl2ZVNsaWRlID0gX29wdGlvbnM0LmNsYXNzTmFtZUFjdGl2ZVNsaWRlO1xuXHRcblx0XG5cdCAgICAgICAgZnJhbWUgPSBzbGlkZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWVGcmFtZSlbMF07XG5cdCAgICAgICAgc2xpZGVDb250YWluZXIgPSBmcmFtZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZVNsaWRlQ29udGFpbmVyKVswXTtcblx0ICAgICAgICBwcmV2Q3RybCA9IHNsaWRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZVByZXZDdHJsKVswXTtcblx0ICAgICAgICBuZXh0Q3RybCA9IHNsaWRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZU5leHRDdHJsKVswXTtcblx0XG5cdCAgICAgICAgcG9zaXRpb24gPSB7XG5cdCAgICAgICAgICAgIHg6IHNsaWRlQ29udGFpbmVyLm9mZnNldExlZnQsXG5cdCAgICAgICAgICAgIHk6IHNsaWRlQ29udGFpbmVyLm9mZnNldFRvcFxuXHQgICAgICAgIH07XG5cdFxuXHQgICAgICAgIGlmIChvcHRpb25zLmluZmluaXRlKSB7XG5cdCAgICAgICAgICAgIHNsaWRlcyA9IHNldHVwSW5maW5pdGUoc2xpY2UuY2FsbChzbGlkZUNvbnRhaW5lci5jaGlsZHJlbikpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIHNsaWRlcyA9IHNsaWNlLmNhbGwoc2xpZGVDb250YWluZXIuY2hpbGRyZW4pO1xuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgcmVzZXQoKTtcblx0XG5cdCAgICAgICAgaWYgKGNsYXNzTmFtZUFjdGl2ZVNsaWRlKSB7XG5cdCAgICAgICAgICAgIHNldEFjdGl2ZUVsZW1lbnQoc2xpZGVzLCBpbmRleCk7XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICBpZiAocHJldkN0cmwgJiYgbmV4dEN0cmwpIHtcblx0ICAgICAgICAgICAgcHJldkN0cmwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2KTtcblx0ICAgICAgICAgICAgbmV4dEN0cmwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXh0KTtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIGZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoc3RhcnQpO1xuXHRcblx0ICAgICAgICBpZiAoZW5hYmxlTW91c2VFdmVudHMpIHtcblx0ICAgICAgICAgICAgZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Ub3VjaHN0YXJ0KTtcblx0ICAgICAgICAgICAgZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrKTtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIG9wdGlvbnMud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKTtcblx0XG5cdCAgICAgICAgZGlzcGF0Y2hTbGlkZXJFdmVudCgnYWZ0ZXInLCAnaW5pdCcpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogcHVibGljXG5cdCAgICAgKiByZXNldCBmdW5jdGlvbjogY2FsbGVkIG9uIHJlc2l6ZVxuXHQgICAgICovXG5cdCAgICBmdW5jdGlvbiByZXNldCgpIHtcblx0ICAgICAgICB2YXIgX29wdGlvbnM1ID0gb3B0aW9ucztcblx0ICAgICAgICB2YXIgaW5maW5pdGUgPSBfb3B0aW9uczUuaW5maW5pdGU7XG5cdCAgICAgICAgdmFyIGVhc2UgPSBfb3B0aW9uczUuZWFzZTtcblx0ICAgICAgICB2YXIgcmV3aW5kU3BlZWQgPSBfb3B0aW9uczUucmV3aW5kU3BlZWQ7XG5cdCAgICAgICAgdmFyIHJld2luZE9uUmVzaXplID0gX29wdGlvbnM1LnJld2luZE9uUmVzaXplO1xuXHQgICAgICAgIHZhciBjbGFzc05hbWVBY3RpdmVTbGlkZSA9IF9vcHRpb25zNS5jbGFzc05hbWVBY3RpdmVTbGlkZTtcblx0XG5cdFxuXHQgICAgICAgIHNsaWRlc1dpZHRoID0gc2xpZGVDb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggfHwgc2xpZGVDb250YWluZXIub2Zmc2V0V2lkdGg7XG5cdCAgICAgICAgZnJhbWVXaWR0aCA9IGZyYW1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIHx8IGZyYW1lLm9mZnNldFdpZHRoO1xuXHRcblx0ICAgICAgICBpZiAoZnJhbWVXaWR0aCA9PT0gc2xpZGVzV2lkdGgpIHtcblx0ICAgICAgICAgICAgc2xpZGVzV2lkdGggPSBzbGlkZXMucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91c1ZhbHVlLCBzbGlkZSkge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWUgKyBzbGlkZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB8fCBzbGlkZS5vZmZzZXRXaWR0aDtcblx0ICAgICAgICAgICAgfSwgMCk7XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICBpZiAocmV3aW5kT25SZXNpemUpIHtcblx0ICAgICAgICAgICAgaW5kZXggPSAwO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIGVhc2UgPSBudWxsO1xuXHQgICAgICAgICAgICByZXdpbmRTcGVlZCA9IDA7XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICBpZiAoaW5maW5pdGUpIHtcblx0ICAgICAgICAgICAgdHJhbnNsYXRlKHNsaWRlc1tpbmRleCArIGluZmluaXRlXS5vZmZzZXRMZWZ0ICogLTEsIDAsIG51bGwpO1xuXHRcblx0ICAgICAgICAgICAgaW5kZXggPSBpbmRleCArIGluZmluaXRlO1xuXHQgICAgICAgICAgICBwb3NpdGlvbi54ID0gc2xpZGVzW2luZGV4XS5vZmZzZXRMZWZ0ICogLTE7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgdHJhbnNsYXRlKHNsaWRlc1tpbmRleF0ub2Zmc2V0TGVmdCAqIC0xLCByZXdpbmRTcGVlZCwgZWFzZSk7XG5cdCAgICAgICAgICAgIHBvc2l0aW9uLnggPSBzbGlkZXNbaW5kZXhdLm9mZnNldExlZnQgKiAtMTtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIGlmIChjbGFzc05hbWVBY3RpdmVTbGlkZSkge1xuXHQgICAgICAgICAgICBzZXRBY3RpdmVFbGVtZW50KHNsaWNlLmNhbGwoc2xpZGVzKSwgaW5kZXgpO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICAvKipcblx0ICAgICAqIHB1YmxpY1xuXHQgICAgICogc2xpZGVUbzogY2FsbGVkIG9uIGNsaWNraGFuZGxlclxuXHQgICAgICovXG5cdCAgICBmdW5jdGlvbiBzbGlkZVRvKGluZGV4KSB7XG5cdCAgICAgICAgc2xpZGUoaW5kZXgpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogcHVibGljXG5cdCAgICAgKiByZXR1cm5JbmRleCBmdW5jdGlvbjogY2FsbGVkIG9uIGNsaWNraGFuZGxlclxuXHQgICAgICovXG5cdCAgICBmdW5jdGlvbiByZXR1cm5JbmRleCgpIHtcblx0ICAgICAgICByZXR1cm4gaW5kZXggLSBvcHRpb25zLmluZmluaXRlIHx8IDA7XG5cdCAgICB9XG5cdFxuXHQgICAgLyoqXG5cdCAgICAgKiBwdWJsaWNcblx0ICAgICAqIHByZXYgZnVuY3Rpb246IGNhbGxlZCBvbiBjbGlja2hhbmRsZXJcblx0ICAgICAqL1xuXHQgICAgZnVuY3Rpb24gcHJldigpIHtcblx0ICAgICAgICBzbGlkZShmYWxzZSwgZmFsc2UpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogcHVibGljXG5cdCAgICAgKiBuZXh0IGZ1bmN0aW9uOiBjYWxsZWQgb24gY2xpY2toYW5kbGVyXG5cdCAgICAgKi9cblx0ICAgIGZ1bmN0aW9uIG5leHQoKSB7XG5cdCAgICAgICAgc2xpZGUoZmFsc2UsIHRydWUpO1xuXHQgICAgfVxuXHRcblx0ICAgIC8qKlxuXHQgICAgICogcHVibGljXG5cdCAgICAgKiBkZXN0cm95IGZ1bmN0aW9uOiBjYWxsZWQgdG8gZ3JhY2VmdWxseSBkZXN0cm95IHRoZSBsb3J5IGluc3RhbmNlXG5cdCAgICAgKi9cblx0ICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdCAgICAgICAgZGlzcGF0Y2hTbGlkZXJFdmVudCgnYmVmb3JlJywgJ2Rlc3Ryb3knKTtcblx0XG5cdCAgICAgICAgLy8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVyc1xuXHQgICAgICAgIGZyYW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIocHJlZml4ZXMudHJhbnNpdGlvbkVuZCwgb25UcmFuc2l0aW9uRW5kKTtcblx0ICAgICAgICBmcmFtZS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaHN0YXJ0KTtcblx0ICAgICAgICBmcmFtZS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNobW92ZSk7XG5cdCAgICAgICAgZnJhbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoZW5kKTtcblx0ICAgICAgICBmcmFtZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvblRvdWNobW92ZSk7XG5cdCAgICAgICAgZnJhbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Ub3VjaHN0YXJ0KTtcblx0ICAgICAgICBmcmFtZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Ub3VjaGVuZCk7XG5cdCAgICAgICAgZnJhbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIG9uVG91Y2hlbmQpO1xuXHQgICAgICAgIGZyYW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljayk7XG5cdFxuXHQgICAgICAgIG9wdGlvbnMud2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uUmVzaXplKTtcblx0XG5cdCAgICAgICAgaWYgKHByZXZDdHJsKSB7XG5cdCAgICAgICAgICAgIHByZXZDdHJsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldik7XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICBpZiAobmV4dEN0cmwpIHtcblx0ICAgICAgICAgICAgbmV4dEN0cmwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXh0KTtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIC8vIHJlbW92ZSBjbG9uZWQgc2xpZGVzIGlmIGluZmluaXRlIGlzIHNldFxuXHQgICAgICAgIGlmIChvcHRpb25zLmluZmluaXRlKSB7XG5cdCAgICAgICAgICAgIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KG9wdGlvbnMuaW5maW5pdGUpKS5mb3JFYWNoKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHNsaWRlQ29udGFpbmVyLnJlbW92ZUNoaWxkKHNsaWRlQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuXHQgICAgICAgICAgICAgICAgc2xpZGVDb250YWluZXIucmVtb3ZlQ2hpbGQoc2xpZGVDb250YWluZXIubGFzdENoaWxkKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICBkaXNwYXRjaFNsaWRlckV2ZW50KCdhZnRlcicsICdkZXN0cm95Jyk7XG5cdCAgICB9XG5cdFxuXHQgICAgLy8gZXZlbnQgaGFuZGxpbmdcblx0XG5cdCAgICB2YXIgdG91Y2hPZmZzZXQgPSB2b2lkIDA7XG5cdCAgICB2YXIgZGVsdGEgPSB2b2lkIDA7XG5cdCAgICB2YXIgaXNTY3JvbGxpbmcgPSB2b2lkIDA7XG5cdFxuXHQgICAgZnVuY3Rpb24gb25UcmFuc2l0aW9uRW5kKCkge1xuXHQgICAgICAgIGlmICh0cmFuc2l0aW9uRW5kQ2FsbGJhY2spIHtcblx0ICAgICAgICAgICAgdHJhbnNpdGlvbkVuZENhbGxiYWNrKCk7XG5cdFxuXHQgICAgICAgICAgICB0cmFuc2l0aW9uRW5kQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIGZ1bmN0aW9uIG9uVG91Y2hzdGFydChldmVudCkge1xuXHQgICAgICAgIHZhciBfb3B0aW9uczYgPSBvcHRpb25zO1xuXHQgICAgICAgIHZhciBlbmFibGVNb3VzZUV2ZW50cyA9IF9vcHRpb25zNi5lbmFibGVNb3VzZUV2ZW50cztcblx0XG5cdCAgICAgICAgdmFyIHRvdWNoZXMgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXSA6IGV2ZW50O1xuXHRcblx0ICAgICAgICBpZiAoZW5hYmxlTW91c2VFdmVudHMpIHtcblx0ICAgICAgICAgICAgZnJhbWUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Ub3VjaG1vdmUpO1xuXHQgICAgICAgICAgICBmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Ub3VjaGVuZCk7XG5cdCAgICAgICAgICAgIGZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBvblRvdWNoZW5kKTtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIGZyYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2htb3ZlKTtcblx0ICAgICAgICBmcmFtZS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hlbmQpO1xuXHRcblx0ICAgICAgICB2YXIgcGFnZVggPSB0b3VjaGVzLnBhZ2VYO1xuXHQgICAgICAgIHZhciBwYWdlWSA9IHRvdWNoZXMucGFnZVk7XG5cdFxuXHRcblx0ICAgICAgICB0b3VjaE9mZnNldCA9IHtcblx0ICAgICAgICAgICAgeDogcGFnZVgsXG5cdCAgICAgICAgICAgIHk6IHBhZ2VZLFxuXHQgICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpXG5cdCAgICAgICAgfTtcblx0XG5cdCAgICAgICAgaXNTY3JvbGxpbmcgPSB1bmRlZmluZWQ7XG5cdFxuXHQgICAgICAgIGRlbHRhID0ge307XG5cdFxuXHQgICAgICAgIGRpc3BhdGNoU2xpZGVyRXZlbnQoJ29uJywgJ3RvdWNoc3RhcnQnLCB7XG5cdCAgICAgICAgICAgIGV2ZW50OiBldmVudFxuXHQgICAgICAgIH0pO1xuXHQgICAgfVxuXHRcblx0ICAgIGZ1bmN0aW9uIG9uVG91Y2htb3ZlKGV2ZW50KSB7XG5cdCAgICAgICAgdmFyIHRvdWNoZXMgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXSA6IGV2ZW50O1xuXHQgICAgICAgIHZhciBwYWdlWCA9IHRvdWNoZXMucGFnZVg7XG5cdCAgICAgICAgdmFyIHBhZ2VZID0gdG91Y2hlcy5wYWdlWTtcblx0XG5cdFxuXHQgICAgICAgIGRlbHRhID0ge1xuXHQgICAgICAgICAgICB4OiBwYWdlWCAtIHRvdWNoT2Zmc2V0LngsXG5cdCAgICAgICAgICAgIHk6IHBhZ2VZIC0gdG91Y2hPZmZzZXQueVxuXHQgICAgICAgIH07XG5cdFxuXHQgICAgICAgIGlmICh0eXBlb2YgaXNTY3JvbGxpbmcgPT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgICAgICAgIGlzU2Nyb2xsaW5nID0gISEoaXNTY3JvbGxpbmcgfHwgTWF0aC5hYnMoZGVsdGEueCkgPCBNYXRoLmFicyhkZWx0YS55KSk7XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICBpZiAoIWlzU2Nyb2xsaW5nICYmIHRvdWNoT2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdCAgICAgICAgICAgIHRyYW5zbGF0ZShwb3NpdGlvbi54ICsgZGVsdGEueCwgMCwgbnVsbCk7XG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyBtYXkgYmVcblx0ICAgICAgICBkaXNwYXRjaFNsaWRlckV2ZW50KCdvbicsICd0b3VjaG1vdmUnLCB7XG5cdCAgICAgICAgICAgIGV2ZW50OiBldmVudFxuXHQgICAgICAgIH0pO1xuXHQgICAgfVxuXHRcblx0ICAgIGZ1bmN0aW9uIG9uVG91Y2hlbmQoZXZlbnQpIHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiB0aW1lIGJldHdlZW4gdG91Y2hzdGFydCBhbmQgdG91Y2hlbmQgaW4gbWlsbGlzZWNvbmRzXG5cdCAgICAgICAgICogQGR1cmF0aW9uIHtudW1iZXJ9XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdmFyIGR1cmF0aW9uID0gdG91Y2hPZmZzZXQgPyBEYXRlLm5vdygpIC0gdG91Y2hPZmZzZXQudGltZSA6IHVuZGVmaW5lZDtcblx0XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogaXMgdmFsaWQgaWY6XG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAtPiBzd2lwZSBhdHRlbXB0IHRpbWUgaXMgb3ZlciAzMDAgbXNcblx0ICAgICAgICAgKiBhbmRcblx0ICAgICAgICAgKiAtPiBzd2lwZSBkaXN0YW5jZSBpcyBncmVhdGVyIHRoYW4gMjVweFxuXHQgICAgICAgICAqIG9yXG5cdCAgICAgICAgICogLT4gc3dpcGUgZGlzdGFuY2UgaXMgbW9yZSB0aGVuIGEgdGhpcmQgb2YgdGhlIHN3aXBlIGFyZWFcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBpc1ZhbGlkU2xpZGUge0Jvb2xlYW59XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdmFyIGlzVmFsaWQgPSBOdW1iZXIoZHVyYXRpb24pIDwgMzAwICYmIE1hdGguYWJzKGRlbHRhLngpID4gMjUgfHwgTWF0aC5hYnMoZGVsdGEueCkgPiBmcmFtZVdpZHRoIC8gMztcblx0XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogaXMgb3V0IG9mIGJvdW5kcyBpZjpcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIC0+IGluZGV4IGlzIDAgYW5kIGRlbHRhIHggaXMgZ3JlYXRlciB0aGFuIDBcblx0ICAgICAgICAgKiBvclxuXHQgICAgICAgICAqIC0+IGluZGV4IGlzIHRoZSBsYXN0IHNsaWRlIGFuZCBkZWx0YSBpcyBzbWFsbGVyIHRoYW4gMFxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGlzT3V0T2ZCb3VuZHMge0Jvb2xlYW59XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdmFyIGlzT3V0T2ZCb3VuZHMgPSAhaW5kZXggJiYgZGVsdGEueCA+IDAgfHwgaW5kZXggPT09IHNsaWRlcy5sZW5ndGggLSAxICYmIGRlbHRhLnggPCAwO1xuXHRcblx0ICAgICAgICB2YXIgZGlyZWN0aW9uID0gZGVsdGEueCA8IDA7XG5cdFxuXHQgICAgICAgIGlmICghaXNTY3JvbGxpbmcpIHtcblx0ICAgICAgICAgICAgaWYgKGlzVmFsaWQgJiYgIWlzT3V0T2ZCb3VuZHMpIHtcblx0ICAgICAgICAgICAgICAgIHNsaWRlKGZhbHNlLCBkaXJlY3Rpb24pO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdHJhbnNsYXRlKHBvc2l0aW9uLngsIG9wdGlvbnMuc25hcEJhY2tTcGVlZCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIHRvdWNoT2Zmc2V0ID0gdW5kZWZpbmVkO1xuXHRcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiByZW1vdmUgZXZlbnRsaXN0ZW5lcnMgYWZ0ZXIgc3dpcGUgYXR0ZW1wdFxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGZyYW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2htb3ZlKTtcblx0ICAgICAgICBmcmFtZS5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hlbmQpO1xuXHQgICAgICAgIGZyYW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uVG91Y2htb3ZlKTtcblx0ICAgICAgICBmcmFtZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Ub3VjaGVuZCk7XG5cdCAgICAgICAgZnJhbWUucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIG9uVG91Y2hlbmQpO1xuXHRcblx0ICAgICAgICBkaXNwYXRjaFNsaWRlckV2ZW50KCdvbicsICd0b3VjaGVuZCcsIHtcblx0ICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XG5cdCAgICAgICAgfSk7XG5cdCAgICB9XG5cdFxuXHQgICAgZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuXHQgICAgICAgIGlmIChkZWx0YS54KSB7XG5cdCAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIGZ1bmN0aW9uIG9uUmVzaXplKGV2ZW50KSB7XG5cdCAgICAgICAgcmVzZXQoKTtcblx0XG5cdCAgICAgICAgZGlzcGF0Y2hTbGlkZXJFdmVudCgnb24nLCAncmVzaXplJywge1xuXHQgICAgICAgICAgICBldmVudDogZXZlbnRcblx0ICAgICAgICB9KTtcblx0ICAgIH1cblx0XG5cdCAgICAvLyB0cmlnZ2VyIGluaXRpYWwgc2V0dXBcblx0ICAgIHNldHVwKCk7XG5cdFxuXHQgICAgLy8gZXhwb3NlIHB1YmxpYyBhcGlcblx0ICAgIHJldHVybiB7XG5cdCAgICAgICAgc2V0dXA6IHNldHVwLFxuXHQgICAgICAgIHJlc2V0OiByZXNldCxcblx0ICAgICAgICBzbGlkZVRvOiBzbGlkZVRvLFxuXHQgICAgICAgIHJldHVybkluZGV4OiByZXR1cm5JbmRleCxcblx0ICAgICAgICBwcmV2OiBwcmV2LFxuXHQgICAgICAgIG5leHQ6IG5leHQsXG5cdCAgICAgICAgZGVzdHJveTogZGVzdHJveVxuXHQgICAgfTtcblx0fVxuXG4vKioqLyB9LFxuLyogMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkgeyd1c2Ugc3RyaWN0Jztcblx0XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgICAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IGRldGVjdFByZWZpeGVzO1xuXHQvKipcblx0ICogRGV0ZWN0aW5nIHByZWZpeGVzIGZvciBzYXZpbmcgdGltZSBhbmQgYnl0ZXNcblx0ICovXG5cdGZ1bmN0aW9uIGRldGVjdFByZWZpeGVzKCkge1xuXHQgICAgdmFyIHRyYW5zZm9ybSA9IHZvaWQgMDtcblx0ICAgIHZhciB0cmFuc2l0aW9uID0gdm9pZCAwO1xuXHQgICAgdmFyIHRyYW5zaXRpb25FbmQgPSB2b2lkIDA7XG5cdCAgICB2YXIgaGFzVHJhbnNsYXRlM2QgPSB2b2lkIDA7XG5cdFxuXHQgICAgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdfJyk7XG5cdCAgICAgICAgdmFyIHN0eWxlID0gZWwuc3R5bGU7XG5cdFxuXHQgICAgICAgIHZhciBwcm9wID0gdm9pZCAwO1xuXHRcblx0ICAgICAgICBpZiAoc3R5bGVbcHJvcCA9ICd3ZWJraXRUcmFuc2l0aW9uJ10gPT09ICcnKSB7XG5cdCAgICAgICAgICAgIHRyYW5zaXRpb25FbmQgPSAnd2Via2l0VHJhbnNpdGlvbkVuZCc7XG5cdCAgICAgICAgICAgIHRyYW5zaXRpb24gPSBwcm9wO1xuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgaWYgKHN0eWxlW3Byb3AgPSAndHJhbnNpdGlvbiddID09PSAnJykge1xuXHQgICAgICAgICAgICB0cmFuc2l0aW9uRW5kID0gJ3RyYW5zaXRpb25lbmQnO1xuXHQgICAgICAgICAgICB0cmFuc2l0aW9uID0gcHJvcDtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIGlmIChzdHlsZVtwcm9wID0gJ3dlYmtpdFRyYW5zZm9ybSddID09PSAnJykge1xuXHQgICAgICAgICAgICB0cmFuc2Zvcm0gPSBwcm9wO1xuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgaWYgKHN0eWxlW3Byb3AgPSAnbXNUcmFuc2Zvcm0nXSA9PT0gJycpIHtcblx0ICAgICAgICAgICAgdHJhbnNmb3JtID0gcHJvcDtcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIGlmIChzdHlsZVtwcm9wID0gJ3RyYW5zZm9ybSddID09PSAnJykge1xuXHQgICAgICAgICAgICB0cmFuc2Zvcm0gPSBwcm9wO1xuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZWwsIG51bGwpO1xuXHQgICAgICAgIHN0eWxlW3RyYW5zZm9ybV0gPSAndHJhbnNsYXRlM2QoMCwgMCwgMCknO1xuXHQgICAgICAgIGhhc1RyYW5zbGF0ZTNkID0gISFnbG9iYWwuZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSh0cmFuc2Zvcm0pO1xuXHQgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xuXHQgICAgfSkoKTtcblx0XG5cdCAgICByZXR1cm4ge1xuXHQgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtLFxuXHQgICAgICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb24sXG5cdCAgICAgICAgdHJhbnNpdGlvbkVuZDogdHJhbnNpdGlvbkVuZCxcblx0ICAgICAgICBoYXNUcmFuc2xhdGUzZDogaGFzVHJhbnNsYXRlM2Rcblx0ICAgIH07XG5cdH1cblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKGV4cG9ydHMsIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0oKSkpKVxuXG4vKioqLyB9LFxuLyogMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgICB2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gZGlzcGF0Y2hFdmVudDtcblx0XG5cdHZhciBfY3VzdG9tRXZlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXHRcblx0dmFyIF9jdXN0b21FdmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jdXN0b21FdmVudCk7XG5cdFxuXHRmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXHRcblx0LyoqXG5cdCAqIGRpc3BhdGNoIGN1c3RvbSBldmVudHNcblx0ICpcblx0ICogQHBhcmFtICB7ZWxlbWVudH0gZWwgICAgICAgICBzbGlkZXNob3cgZWxlbWVudFxuXHQgKiBAcGFyYW0gIHtzdHJpbmd9ICB0eXBlICAgICAgIGN1c3RvbSBldmVudCBuYW1lXG5cdCAqIEBwYXJhbSAge29iamVjdH0gIGRldGFpbCAgICAgY3VzdG9tIGRldGFpbCBpbmZvcm1hdGlvblxuXHQgKi9cblx0ZnVuY3Rpb24gZGlzcGF0Y2hFdmVudCh0YXJnZXQsIHR5cGUsIGRldGFpbCkge1xuXHQgICAgdmFyIGV2ZW50ID0gbmV3IF9jdXN0b21FdmVudDIuZGVmYXVsdCh0eXBlLCB7XG5cdCAgICAgICAgYnViYmxlczogdHJ1ZSxcblx0ICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuXHQgICAgICAgIGRldGFpbDogZGV0YWlsXG5cdCAgICB9KTtcblx0XG5cdCAgICB0YXJnZXQuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdH1cblxuLyoqKi8gfSxcbi8qIDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHtcblx0dmFyIE5hdGl2ZUN1c3RvbUV2ZW50ID0gZ2xvYmFsLkN1c3RvbUV2ZW50O1xuXHRcblx0ZnVuY3Rpb24gdXNlTmF0aXZlICgpIHtcblx0ICB0cnkge1xuXHQgICAgdmFyIHAgPSBuZXcgTmF0aXZlQ3VzdG9tRXZlbnQoJ2NhdCcsIHsgZGV0YWlsOiB7IGZvbzogJ2JhcicgfSB9KTtcblx0ICAgIHJldHVybiAgJ2NhdCcgPT09IHAudHlwZSAmJiAnYmFyJyA9PT0gcC5kZXRhaWwuZm9vO1xuXHQgIH0gY2F0Y2ggKGUpIHtcblx0ICB9XG5cdCAgcmV0dXJuIGZhbHNlO1xuXHR9XG5cdFxuXHQvKipcblx0ICogQ3Jvc3MtYnJvd3NlciBgQ3VzdG9tRXZlbnRgIGNvbnN0cnVjdG9yLlxuXHQgKlxuXHQgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ3VzdG9tRXZlbnQuQ3VzdG9tRXZlbnRcblx0ICpcblx0ICogQHB1YmxpY1xuXHQgKi9cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gdXNlTmF0aXZlKCkgPyBOYXRpdmVDdXN0b21FdmVudCA6XG5cdFxuXHQvLyBJRSA+PSA5XG5cdCdmdW5jdGlvbicgPT09IHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFdmVudCA/IGZ1bmN0aW9uIEN1c3RvbUV2ZW50ICh0eXBlLCBwYXJhbXMpIHtcblx0ICB2YXIgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuXHQgIGlmIChwYXJhbXMpIHtcblx0ICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XG5cdCAgfSBlbHNlIHtcblx0ICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGZhbHNlLCBmYWxzZSwgdm9pZCAwKTtcblx0ICB9XG5cdCAgcmV0dXJuIGU7XG5cdH0gOlxuXHRcblx0Ly8gSUUgPD0gOFxuXHRmdW5jdGlvbiBDdXN0b21FdmVudCAodHlwZSwgcGFyYW1zKSB7XG5cdCAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCgpO1xuXHQgIGUudHlwZSA9IHR5cGU7XG5cdCAgaWYgKHBhcmFtcykge1xuXHQgICAgZS5idWJibGVzID0gQm9vbGVhbihwYXJhbXMuYnViYmxlcyk7XG5cdCAgICBlLmNhbmNlbGFibGUgPSBCb29sZWFuKHBhcmFtcy5jYW5jZWxhYmxlKTtcblx0ICAgIGUuZGV0YWlsID0gcGFyYW1zLmRldGFpbDtcblx0ICB9IGVsc2Uge1xuXHQgICAgZS5idWJibGVzID0gZmFsc2U7XG5cdCAgICBlLmNhbmNlbGFibGUgPSBmYWxzZTtcblx0ICAgIGUuZGV0YWlsID0gdm9pZCAwO1xuXHQgIH1cblx0ICByZXR1cm4gZTtcblx0fVxuXHRcblx0LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKGV4cG9ydHMsIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0oKSkpKVxuXG4vKioqLyB9LFxuLyogNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuZGVmYXVsdCA9IHtcblx0ICAvKipcblx0ICAgKiBzbGlkZXMgc2Nyb2xsZWQgYXQgb25jZVxuXHQgICAqIEBzbGlkZXNUb1Njcm9sbCB7TnVtYmVyfVxuXHQgICAqL1xuXHQgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuXHRcblx0ICAvKipcblx0ICAgKiB0aW1lIGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlIGFuaW1hdGlvbiBvZiBhIHZhbGlkIHNsaWRlIGF0dGVtcHRcblx0ICAgKiBAc2xpZGVTcGVlZCB7TnVtYmVyfVxuXHQgICAqL1xuXHQgIHNsaWRlU3BlZWQ6IDMwMCxcblx0XG5cdCAgLyoqXG5cdCAgICogdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSBhbmltYXRpb24gb2YgdGhlIHJld2luZCBhZnRlciB0aGUgbGFzdCBzbGlkZVxuXHQgICAqIEByZXdpbmRTcGVlZCB7TnVtYmVyfVxuXHQgICAqL1xuXHQgIHJld2luZFNwZWVkOiA2MDAsXG5cdFxuXHQgIC8qKlxuXHQgICAqIHRpbWUgZm9yIHRoZSBzbmFwQmFjayBvZiB0aGUgc2xpZGVyIGlmIHRoZSBzbGlkZSBhdHRlbXB0IHdhcyBub3QgdmFsaWRcblx0ICAgKiBAc25hcEJhY2tTcGVlZCB7TnVtYmVyfVxuXHQgICAqL1xuXHQgIHNuYXBCYWNrU3BlZWQ6IDIwMCxcblx0XG5cdCAgLyoqXG5cdCAgICogQmFzaWMgZWFzaW5nIGZ1bmN0aW9uczogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZGUvZG9jcy9XZWIvQ1NTL3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXG5cdCAgICogY3ViaWMgYmV6aWVyIGVhc2luZyBmdW5jdGlvbnM6IGh0dHA6Ly9lYXNpbmdzLm5ldC9kZVxuXHQgICAqIEBlYXNlIHtTdHJpbmd9XG5cdCAgICovXG5cdCAgZWFzZTogJ2Vhc2UnLFxuXHRcblx0ICAvKipcblx0ICAgKiBpZiBzbGlkZXIgcmVhY2hlZCB0aGUgbGFzdCBzbGlkZSwgd2l0aCBuZXh0IGNsaWNrIHRoZSBzbGlkZXIgZ29lcyBiYWNrIHRvIHRoZSBzdGFydGluZGV4LlxuXHQgICAqIHVzZSBpbmZpbml0ZSBvciByZXdpbmQsIG5vdCBib3RoXG5cdCAgICogQHJld2luZCB7Qm9vbGVhbn1cblx0ICAgKi9cblx0ICByZXdpbmQ6IGZhbHNlLFxuXHRcblx0ICAvKipcblx0ICAgKiBudW1iZXIgb2YgdmlzaWJsZSBzbGlkZXMgb3IgZmFsc2Vcblx0ICAgKiB1c2UgaW5maW5pdGUgb3IgcmV3aW5kLCBub3QgYm90aFxuXHQgICAqIEBpbmZpbml0ZSB7bnVtYmVyfVxuXHQgICAqL1xuXHQgIGluZmluaXRlOiBmYWxzZSxcblx0XG5cdCAgLyoqXG5cdCAgICogY2xhc3MgbmFtZSBmb3Igc2xpZGVyIGZyYW1lXG5cdCAgICogQGNsYXNzTmFtZUZyYW1lIHtzdHJpbmd9XG5cdCAgICovXG5cdCAgY2xhc3NOYW1lRnJhbWU6ICdqc19mcmFtZScsXG5cdFxuXHQgIC8qKlxuXHQgICAqIGNsYXNzIG5hbWUgZm9yIHNsaWRlcyBjb250YWluZXJcblx0ICAgKiBAY2xhc3NOYW1lU2xpZGVDb250YWluZXIge3N0cmluZ31cblx0ICAgKi9cblx0ICBjbGFzc05hbWVTbGlkZUNvbnRhaW5lcjogJ2pzX3NsaWRlcycsXG5cdFxuXHQgIC8qKlxuXHQgICAqIGNsYXNzIG5hbWUgZm9yIHNsaWRlciBwcmV2IGNvbnRyb2xcblx0ICAgKiBAY2xhc3NOYW1lUHJldkN0cmwge3N0cmluZ31cblx0ICAgKi9cblx0ICBjbGFzc05hbWVQcmV2Q3RybDogJ2pzX3ByZXYnLFxuXHRcblx0ICAvKipcblx0ICAgKiBjbGFzcyBuYW1lIGZvciBzbGlkZXIgbmV4dCBjb250cm9sXG5cdCAgICogQGNsYXNzTmFtZU5leHRDdHJsIHtzdHJpbmd9XG5cdCAgICovXG5cdCAgY2xhc3NOYW1lTmV4dEN0cmw6ICdqc19uZXh0Jyxcblx0XG5cdCAgLyoqXG5cdCAgICogY2xhc3MgbmFtZSBmb3IgY3VycmVudCBhY3RpdmUgc2xpZGVcblx0ICAgKiBpZiBlbXB0eVN0cmluZyB0aGVuIG5vIGNsYXNzIGlzIHNldFxuXHQgICAqIEBjbGFzc05hbWVBY3RpdmVTbGlkZSB7c3RyaW5nfVxuXHQgICAqL1xuXHQgIGNsYXNzTmFtZUFjdGl2ZVNsaWRlOiAnYWN0aXZlJyxcblx0XG5cdCAgLyoqXG5cdCAgICogZW5hYmxlcyBtb3VzZSBldmVudHMgZm9yIHN3aXBpbmcgb24gZGVza3RvcCBkZXZpY2VzXG5cdCAgICogQGVuYWJsZU1vdXNlRXZlbnRzIHtib29sZWFufVxuXHQgICAqL1xuXHQgIGVuYWJsZU1vdXNlRXZlbnRzOiBmYWxzZSxcblx0XG5cdCAgLyoqXG5cdCAgICogd2luZG93IGluc3RhbmNlXG5cdCAgICogQHdpbmRvdyB7b2JqZWN0fVxuXHQgICAqL1xuXHQgIHdpbmRvdzogd2luZG93LFxuXHRcblx0ICAvKipcblx0ICAgKiBJZiBmYWxzZSwgc2xpZGVzIGxvcnkgdG8gdGhlIGZpcnN0IHNsaWRlIG9uIHdpbmRvdyByZXNpemUuXG5cdCAgICogQHJld2luZE9uUmVzaXplIHtib29sZWFufVxuXHQgICAqL1xuXHQgIHJld2luZE9uUmVzaXplOiB0cnVlXG5cdH07XG5cbi8qKiovIH1cbi8qKioqKiovIF0pXG59KTtcbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9yeS5qcy9kaXN0L2xvcnkuanNcbi8vIG1vZHVsZSBpZCA9IDY3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIG51bGwsXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGRmYWMzMjBcXFwifSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9JdGVtLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9ub2RlX21vZHVsZXMvdnVlLWxvcnkvc3JjL0l0ZW0udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gSXRlbS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNGRmYWMzMjBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00ZGZhYzMyMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb3J5L3NyYy9JdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzA0XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXIhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1kODExODhkMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xvcnkudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Mb3J5LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1kODExODhkMlxcXCJ9IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xvcnkudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL25vZGVfbW9kdWxlcy92dWUtbG9yeS9zcmMvTG9yeS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBMb3J5LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1kODExODhkMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWQ4MTE4OGQyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvcnkvc3JjL0xvcnkudnVlXG4vLyBtb2R1bGUgaWQgPSA3MDVcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL05leHQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVjYjFlMzAwXFxcIn0hLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTmV4dC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIi9ob21lL2tpbW5oL0NvZGVzL1dlYlNob3AvYWRtaW4tdGVtcGxhdGUvbGFyYXZlbC12dWUtYWRtaW4vbm9kZV9tb2R1bGVzL3Z1ZS1sb3J5L3NyYy9OZXh0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIE5leHQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTVjYjFlMzAwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWNiMWUzMDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9yeS9zcmMvTmV4dC52dWVcbi8vIG1vZHVsZSBpZCA9IDcwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUHJldi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtODg1NTRiODBcXFwifSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9QcmV2LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9ub2RlX21vZHVsZXMvdnVlLWxvcnkvc3JjL1ByZXYudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gUHJldi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtODg1NTRiODBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi04ODU1NGI4MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb3J5L3NyYy9QcmV2LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzA3XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1hbmNlc3RvclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50XCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94IG5vdGlmaWNhdGlvbiBpcy1wcmltYXJ5XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJEZWZhdWx0czogaGFuZGxlIHRoZSB0b3VjaFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbG9yeScsIFtfYygnaXRlbScsIFtfdm0uX3YoXCIxXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpdGVtJywgW192bS5fdihcIjJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCBbX3ZtLl92KFwiM1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaXRlbScsIFtfdm0uX3YoXCI0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpdGVtJywgW192bS5fdihcIjVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCBbX3ZtLl92KFwiNlwiKV0pXSwgMSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1hbmNlc3RvclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50XCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94IG5vdGlmaWNhdGlvbiBpcy13YXJuaW5nXCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJFbmFibGUgbW91c2UgZXZlbnRzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsb3J5Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm9wdGlvbnNcIjoge1xuICAgICAgICBlbmFibGVNb3VzZUV2ZW50czogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpdGVtJywgW192bS5fdihcIjFcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCBbX3ZtLl92KFwiMlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaXRlbScsIFtfdm0uX3YoXCIzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpdGVtJywgW192bS5fdihcIjRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCBbX3ZtLl92KFwiNVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaXRlbScsIFtfdm0uX3YoXCI2XCIpXSldLCAxKV0sIDEpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWFuY2VzdG9yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnRcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3ggbm90aWZpY2F0aW9uIGlzLWluZm9cIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIkluZmluaXRlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsb3J5Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm9wdGlvbnNcIjoge1xuICAgICAgICBlbmFibGVNb3VzZUV2ZW50czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IDFcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaXRlbScsIFtfdm0uX3YoXCIxXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpdGVtJywgW192bS5fdihcIjJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCBbX3ZtLl92KFwiM1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaXRlbScsIFtfdm0uX3YoXCI0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpdGVtJywgW192bS5fdihcIjVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCBbX3ZtLl92KFwiNlwiKV0pXSwgMSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1hbmNlc3RvclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50XCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94IG5vdGlmaWNhdGlvbiBpcy1kYW5nZXJcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIlJld2luZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbG9yeScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJqc19yZXdpbmRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJvcHRpb25zXCI6IHtcbiAgICAgICAgZW5hYmxlTW91c2VFdmVudHM6IHRydWUsXG4gICAgICAgIGluZmluaXRlOiAxLFxuICAgICAgICByZXdpbmQ6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaXRlbScsIFtfdm0uX3YoXCIxXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpdGVtJywgW192bS5fdihcIjJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCBbX3ZtLl92KFwiM1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaXRlbScsIFtfdm0uX3YoXCI0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpdGVtJywgW192bS5fdihcIjVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCBbX3ZtLl92KFwiNlwiKV0pXSwgMSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1hbmNlc3RvclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50XCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94IG5vdGlmaWNhdGlvbiBpcy1wcmltYXJ5XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJXaWR0aFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbG9yeScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJqc19yZXdpbmRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJvcHRpb25zXCI6IHtcbiAgICAgICAgZW5hYmxlTW91c2VFdmVudHM6IHRydWUsXG4gICAgICAgIGluZmluaXRlOiAxLFxuICAgICAgICByZXdpbmQ6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjIyMHB4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIyMjBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxOTBweFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiMTkwXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTUwcHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIjE1MFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjEzMHB4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIxMzBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIyNTBweFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiMjUwXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTgwcHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIjE4MFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjIwMHB4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIyMDBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwid2lkdGhcIjogXCIxNDBweFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiMTQwXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpdGVtJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcIndpZHRoXCI6IFwiMTIwcHhcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIjEyMFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaXRlbScsIHtcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJ3aWR0aFwiOiBcIjI0MHB4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIyNDBcIildKV0sIDEpXSwgMSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtYW5jZXN0b3JcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudFwiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveCBub3RpZmljYXRpb24gaXMtd2FybmluZ1wiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiTXVsdGlwbGUgc2xpZGVzIHRvIHNjcm9sbFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbG9yeScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLW1vYmlsZVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm9wdGlvbnNcIjoge1xuICAgICAgICBlbmFibGVNb3VzZUV2ZW50czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IDQsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0XG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2l0ZW0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLW9uZS1xdWFydGVyLW1vYmlsZSBpcy0zXCJcbiAgfSwgW192bS5fdihcIjFcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLW9uZS1xdWFydGVyLW1vYmlsZSBpcy0zXCJcbiAgfSwgW192bS5fdihcIjJcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLW9uZS1xdWFydGVyLW1vYmlsZSBpcy0zXCJcbiAgfSwgW192bS5fdihcIjNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLW9uZS1xdWFydGVyLW1vYmlsZSBpcy0zXCJcbiAgfSwgW192bS5fdihcIjRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLW9uZS1xdWFydGVyLW1vYmlsZSBpcy0zXCJcbiAgfSwgW192bS5fdihcIjVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLW9uZS1xdWFydGVyLW1vYmlsZSBpcy0zXCJcbiAgfSwgW192bS5fdihcIjZcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLW9uZS1xdWFydGVyLW1vYmlsZSBpcy0zXCJcbiAgfSwgW192bS5fdihcIjdcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLW9uZS1xdWFydGVyLW1vYmlsZSBpcy0zXCJcbiAgfSwgW192bS5fdihcIjhcIildKV0sIDEpXSwgMSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtYW5jZXN0b3JcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudFwiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveCBub3RpZmljYXRpb24gaXMtaW5mb1wiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiQ3VzdG9tIGVhc2luZ3NcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xvcnknLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1ucyBpcy1tb2JpbGUganNfcmV3aW5kXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwib3B0aW9uc1wiOiB7XG4gICAgICAgIGVuYWJsZU1vdXNlRXZlbnRzOiB0cnVlLFxuICAgICAgICBpbmZpbml0ZTogNCxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDQsXG4gICAgICAgIHNsaWRlU3BlZWQ6IDEwMDAsXG4gICAgICAgIGVhc2U6ICdjdWJpYy1iZXppZXIoMC40NTUsIDAuMDMsIDAuNTE1LCAwLjk1NSknLFxuICAgICAgICByZXdpbmQ6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaXRlbScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtb25lLXF1YXJ0ZXItbW9iaWxlIGlzLTNcIlxuICB9LCBbX3ZtLl92KFwiMVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaXRlbScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtb25lLXF1YXJ0ZXItbW9iaWxlIGlzLTNcIlxuICB9LCBbX3ZtLl92KFwiMlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaXRlbScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtb25lLXF1YXJ0ZXItbW9iaWxlIGlzLTNcIlxuICB9LCBbX3ZtLl92KFwiM1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaXRlbScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtb25lLXF1YXJ0ZXItbW9iaWxlIGlzLTNcIlxuICB9LCBbX3ZtLl92KFwiNFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaXRlbScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtb25lLXF1YXJ0ZXItbW9iaWxlIGlzLTNcIlxuICB9LCBbX3ZtLl92KFwiNVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaXRlbScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtb25lLXF1YXJ0ZXItbW9iaWxlIGlzLTNcIlxuICB9LCBbX3ZtLl92KFwiNlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaXRlbScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtb25lLXF1YXJ0ZXItbW9iaWxlIGlzLTNcIlxuICB9LCBbX3ZtLl92KFwiN1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaXRlbScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtb25lLXF1YXJ0ZXItbW9iaWxlIGlzLTNcIlxuICB9LCBbX3ZtLl92KFwiOFwiKV0pXSwgMSldLCAxKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1hbmNlc3RvclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50XCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94IG5vdGlmaWNhdGlvbiBpcy1kYW5nZXJcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIlByZXYgJiBOZXh0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdsb3J5Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImpzX3Jld2luZFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm9wdGlvbnNcIjoge1xuICAgICAgICBlbmFibGVNb3VzZUV2ZW50czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IDEsXG4gICAgICAgIHJld2luZDogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpdGVtJywgW192bS5fdihcIjFcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCBbX3ZtLl92KFwiMlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaXRlbScsIFtfdm0uX3YoXCIzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdpdGVtJywgW192bS5fdihcIjRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2l0ZW0nLCBbX3ZtLl92KFwiNVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaXRlbScsIFtfdm0uX3YoXCI2XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwcmV2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImNvbG9yXCI6IFwiI2RiZGJkYlwiXG4gICAgfSxcbiAgICBzbG90OiBcImFjdGlvbnNcIlxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ25leHQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiY29sb3JcIjogXCIjZGJkYmRiXCJcbiAgICB9LFxuICAgIHNsb3Q6IFwiYWN0aW9uc1wiXG4gIH0pXSwgMSldLCAxKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0xN2YzN2RmYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTE3ZjM3ZGZhXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL2NvbXBvbmVudHMvTG9yeS52dWVcbi8vIG1vZHVsZSBpZCA9IDcxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2xpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImpzX3NsaWRlXCJcbiAgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi00ZGZhYzMyMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTRkZmFjMzIwXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L3Z1ZS1sb3J5L3NyYy9JdGVtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzM2XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJqc19uZXh0IG5leHRcIlxuICB9LCBbX2MoJ3N2ZycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ4bWxuc1wiOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBcIndpZHRoXCI6IF92bS5zaXplLFxuICAgICAgXCJoZWlnaHRcIjogX3ZtLnNpemUsXG4gICAgICBcInZpZXdCb3hcIjogXCIwIDAgNTAxLjUgNTAxLjVcIlxuICAgIH1cbiAgfSwgW19jKCdnJywgW19jKCdwYXRoJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImZpbGxcIjogX3ZtLmNvbG9yLFxuICAgICAgXCJkXCI6IFwiTTE5OS4zMyA0MTAuNjIybC01NS43Ny01NS41MDhMMjQ3LjQyNSAyNTAuNzUgMTQzLjU2IDE0Ni4zODRsNTUuNzctNTUuNTA3TDM1OC40NCAyNTAuNzV6XCJcbiAgICB9XG4gIH0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVjYjFlMzAwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNWNiMWUzMDBcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vdnVlLWxvcnkvc3JjL05leHQudnVlXG4vLyBtb2R1bGUgaWQgPSA3NDBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImpzX3ByZXYgcHJldlwiXG4gIH0sIFtfYygnc3ZnJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInhtbG5zXCI6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIFwid2lkdGhcIjogX3ZtLnNpemUsXG4gICAgICBcImhlaWdodFwiOiBfdm0uc2l6ZSxcbiAgICAgIFwidmlld0JveFwiOiBcIjAgMCA1MDEuNSA1MDEuNVwiXG4gICAgfVxuICB9LCBbX2MoJ2cnLCBbX2MoJ3BhdGgnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZmlsbFwiOiBfdm0uY29sb3IsXG4gICAgICBcImRcIjogXCJNMzAyLjY3IDkwLjg3N2w1NS43NyA1NS41MDhMMjU0LjU3NSAyNTAuNzUgMzU4LjQ0IDM1NS4xMTZsLTU1Ljc3IDU1LjUwNkwxNDMuNTYgMjUwLjc1elwiXG4gICAgfVxuICB9KV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi04ODU1NGI4MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTg4NTU0YjgwXCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L3Z1ZS1sb3J5L3NyYy9QcmV2LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzUzXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNsaWRlciBqc19zbGlkZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmcmFtZSBqc19mcmFtZVwiXG4gIH0sIFtfYygndWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2xpZGVzIGpzX3NsaWRlc1wiXG4gIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMildKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl90KFwiYWN0aW9uc1wiKV0sIDIpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LWQ4MTE4OGQyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZDgxMTg4ZDJcIn0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL34vdnVlLWxvcnkvc3JjL0xvcnkudnVlXG4vLyBtb2R1bGUgaWQgPSA3NjNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiZXhwb3J0cy5JdGVtID0gcmVxdWlyZSgnLi9JdGVtJylcbmV4cG9ydHMuTG9yeSA9IHJlcXVpcmUoJy4vTG9yeScpXG5leHBvcnRzLlByZXYgPSByZXF1aXJlKCcuL1ByZXYnKVxuZXhwb3J0cy5OZXh0ID0gcmVxdWlyZSgnLi9OZXh0JylcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9yeS9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDc2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDUiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTdmMzdkZmFcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Mb3J5LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNjc0NTI2OTZcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTdmMzdkZmFcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Mb3J5LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xN2YzN2RmYVxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xvcnkudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xN2YzN2RmYVwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vfi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy9jb21wb25lbnRzL0xvcnkudnVlXG4vLyBtb2R1bGUgaWQgPSA3Nzdcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1kODExODhkMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTG9yeS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNzM3ODJjNzJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LWQ4MTE4OGQyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Mb3J5LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZDgxMTg4ZDJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xvcnkudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlciEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1kODExODhkMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL34vdnVlLWxvcnkvc3JjL0xvcnkudnVlXG4vLyBtb2R1bGUgaWQgPSA4MDNcbi8vIG1vZHVsZSBjaHVua3MgPSA1Il0sInNvdXJjZVJvb3QiOiIifQ==
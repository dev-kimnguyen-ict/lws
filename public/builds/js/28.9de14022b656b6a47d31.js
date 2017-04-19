webpackJsonp([28],{

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(811)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(601),
  /* template */
  __webpack_require__(759),
  /* scopeId */
  "data-v-b22b47d4",
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/ui/Buttons.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Buttons.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b22b47d4", Component.options)
  } else {
    hotAPI.reload("data-v-b22b47d4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n.button[data-v-b22b47d4] {\n  margin: 5px 0 0;\n}\n", "", {"version":3,"sources":["/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/ui/Buttons.vue?57ce426a"],"names":[],"mappings":";AAwLA;EACA,gBAAA;CACA","file":"Buttons.vue","sourcesContent":["<template>\n  <div>\n    <div class=\"tile is-ancestor\">\n      <div class=\"tile is-parent is-4\">\n        <article class=\"tile is-child box\">\n          <h1 class=\"title\">Options</h1>\n          <div class=\"block\">\n            <button class=\"button\">Button</button>\n            <button class=\"button is-white\">White</button>\n            <button class=\"button is-light\">Light</button>\n            <button class=\"button is-dark\">Dark</button>\n            <button class=\"button is-black\">Black</button>\n            <button class=\"button is-link\">Link</button>\n          </div>\n          <div class=\"block\">\n            <button class=\"button is-primary\">Primary</button>\n            <button class=\"button is-info\">Info</button>\n            <button class=\"button is-success\">Success</button>\n            <button class=\"button is-warning\">Warning</button>\n            <button class=\"button is-danger\">Danger</button>\n          </div>\n        </article>\n      </div>\n\n      <div class=\"tile is-parent is-4\">\n        <article class=\"tile is-child box\">\n          <h1 class=\"title\">Sizes</h1>\n          <a class=\"button is-small\">Small</a>\n          <a class=\"button\">Normal</a>\n          <a class=\"button is-medium\">Medium</a>\n          <a class=\"button is-large\">Large</a>\n        </article>\n      </div>\n\n      <div class=\"tile is-parent is-4\">\n        <article class=\"tile is-child box\">\n          <h1 class=\"title\">Styles</h1>\n          <div class=\"block\">\n            <h2 class=\"subtitle\">Outlined</h2>\n            <a class=\"button is-outlined\">Outlined</a>\n            <a class=\"button is-primary is-outlined\">Outlined</a>\n            <a class=\"button is-info is-outlined\">Outlined</a>\n            <a class=\"button is-success is-outlined\">Outlined</a>\n            <a class=\"button is-danger is-outlined\">Outlined</a>\n          </div>\n          <h2 class=\"subtitle\">Inverted (the text color becomes the background color, and vice-versa)</h2>\n          <div class=\"notification is-primary\">\n            <a class=\"button is-primary is-inverted\">Inverted</a>\n            <a class=\"button is-info is-inverted\">Inverted</a>\n            <a class=\"button is-success is-inverted\">Inverted</a>\n            <a class=\"button is-danger is-inverted\">Inverted</a>\n          </div>\n        </article>\n      </div>\n    </div>\n\n    <div class=\"tile is-ancestor\">\n      <div class=\"tile is-parent\">\n        <article class=\"tile is-child box\">\n          <h1 class=\"title\">States</h1>\n          <div class=\"columns\">\n            <div class=\"column\">\n              <h2 class=\"subtitle\">Loading</h2>\n              <a class=\"button is-loading\">Loading</a>\n              <a class=\"button is-primary is-loading\">Loading</a>\n              <a class=\"button is-info is-loading\">Loading</a>\n              <a class=\"button is-success is-loading\">Loading</a>\n              <a class=\"button is-warning is-loading\">Loading</a>\n              <a class=\"button is-danger is-loading\">Loading</a>\n            </div>\n            <div class=\"column\">\n              <h2 class=\"subtitle\">Active</h2>\n              <a class=\"button is-active\">Active</a>\n              <a class=\"button is-primary is-active\">Active</a>\n              <a class=\"button is-info is-active\">Active</a>\n              <a class=\"button is-success is-active\">Active</a>\n              <a class=\"button is-warning is-active\">Active</a>\n              <a class=\"button is-danger is-active\">Active</a>\n            </div>\n            <div class=\"column\">\n              <h2 class=\"subtitle\">Disabled</h2>\n              <a class=\"button is-disabled\">Disabled</a>\n              <a class=\"button is-primary is-disabled\">Disabled</a>\n              <a class=\"button is-info is-disabled\">Disabled</a>\n              <a class=\"button is-success is-disabled\">Disabled</a>\n              <a class=\"button is-warning is-disabled\">Disabled</a>\n              <a class=\"button is-danger is-disabled\">Disabled</a>\n            </div>\n            <div class=\"column\">\n              <h2 class=\"subtitle\">With Font Awesome icons</h2>\n              <a class=\"button\">\n                <span class=\"icon\">\n                  <i class=\"fa fa-github\"></i>\n                </span>\n                <span>GitHub</span>\n              </a>\n              <a class=\"button is-primary\">\n                <span class=\"icon\">\n                  <i class=\"fa fa-twitter\"></i>\n                </span>\n                <span>Twitter</span>\n              </a>\n              <a class=\"button is-success\">\n                <span class=\"icon\">\n                  <i class=\"fa fa-check\"></i>\n                </span>\n                <span>Save</span>\n              </a>\n              <a class=\"button is-danger\">\n                <span>Delete</span>\n                <span class=\"icon\">\n                  <i class=\"fa fa-times\"></i>\n                </span>\n              </a>\n              <a class=\"button is-danger is-outlined\">\n                <span class=\"icon\">\n                  <i class=\"fa fa-times\"></i>\n                </span>\n                <span>Delete</span>\n              </a>\n            </div>\n          </div>\n        </article>\n      </div>\n    </div>\n\n    <div class=\"tile is-ancestor\">\n      <div class=\"tile is-parent\">\n        <article class=\"tile is-child box\">\n          <h1 class=\"title\">Button group</h1>\n          <h2 class=\"subtitle\">If you want to group buttons together, use the is-grouped modifier on the control container:</h2>\n          <div class=\"control is-grouped\">\n            <p class=\"control\">\n              <a class=\"button is-primary\">\n                Save changes\n              </a>\n            </p>\n            <p class=\"control\">\n              <a class=\"button\">\n                Cancel\n              </a>\n            </p>\n            <p class=\"control\">\n              <a class=\"button is-danger\">\n                Delete post\n              </a>\n            </p>\n          </div>\n        </article>\n      </div>\n      <div class=\"tile is-parent\">\n        <article class=\"tile is-child box\">\n          <h1 class=\"title\">Button addons</h1>\n          <h2 class=\"subtitle\">If you want to use buttons as addons, use the has-addons modifier on the control container:</h2>\n          <p class=\"control has-addons\">\n            <a class=\"button\">\n              <span class=\"icon is-small\">\n                <i class=\"fa fa-align-left\"></i>\n              </span>\n              <span>Left</span>\n            </a>\n            <a class=\"button\">\n              <span class=\"icon is-small\">\n                <i class=\"fa fa-align-center\"></i>\n              </span>\n              <span>Center</span>\n            </a>\n            <a class=\"button\">\n              <span class=\"icon is-small\">\n                <i class=\"fa fa-align-right\"></i>\n              </span>\n              <span>Right</span>\n            </a>\n          </p>\n        </article>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\n</script>\n\n<style scoped>\n.button {\n  margin: 5px 0 0;\n}\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent is-4"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Options")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('button', {
    staticClass: "button"
  }, [_vm._v("Button")]), _vm._v(" "), _c('button', {
    staticClass: "button is-white"
  }, [_vm._v("White")]), _vm._v(" "), _c('button', {
    staticClass: "button is-light"
  }, [_vm._v("Light")]), _vm._v(" "), _c('button', {
    staticClass: "button is-dark"
  }, [_vm._v("Dark")]), _vm._v(" "), _c('button', {
    staticClass: "button is-black"
  }, [_vm._v("Black")]), _vm._v(" "), _c('button', {
    staticClass: "button is-link"
  }, [_vm._v("Link")])]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('button', {
    staticClass: "button is-primary"
  }, [_vm._v("Primary")]), _vm._v(" "), _c('button', {
    staticClass: "button is-info"
  }, [_vm._v("Info")]), _vm._v(" "), _c('button', {
    staticClass: "button is-success"
  }, [_vm._v("Success")]), _vm._v(" "), _c('button', {
    staticClass: "button is-warning"
  }, [_vm._v("Warning")]), _vm._v(" "), _c('button', {
    staticClass: "button is-danger"
  }, [_vm._v("Danger")])])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-4"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Sizes")]), _vm._v(" "), _c('a', {
    staticClass: "button is-small"
  }, [_vm._v("Small")]), _vm._v(" "), _c('a', {
    staticClass: "button"
  }, [_vm._v("Normal")]), _vm._v(" "), _c('a', {
    staticClass: "button is-medium"
  }, [_vm._v("Medium")]), _vm._v(" "), _c('a', {
    staticClass: "button is-large"
  }, [_vm._v("Large")])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-4"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Styles")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Outlined")]), _vm._v(" "), _c('a', {
    staticClass: "button is-outlined"
  }, [_vm._v("Outlined")]), _vm._v(" "), _c('a', {
    staticClass: "button is-primary is-outlined"
  }, [_vm._v("Outlined")]), _vm._v(" "), _c('a', {
    staticClass: "button is-info is-outlined"
  }, [_vm._v("Outlined")]), _vm._v(" "), _c('a', {
    staticClass: "button is-success is-outlined"
  }, [_vm._v("Outlined")]), _vm._v(" "), _c('a', {
    staticClass: "button is-danger is-outlined"
  }, [_vm._v("Outlined")])]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Inverted (the text color becomes the background color, and vice-versa)")]), _vm._v(" "), _c('div', {
    staticClass: "notification is-primary"
  }, [_c('a', {
    staticClass: "button is-primary is-inverted"
  }, [_vm._v("Inverted")]), _vm._v(" "), _c('a', {
    staticClass: "button is-info is-inverted"
  }, [_vm._v("Inverted")]), _vm._v(" "), _c('a', {
    staticClass: "button is-success is-inverted"
  }, [_vm._v("Inverted")]), _vm._v(" "), _c('a', {
    staticClass: "button is-danger is-inverted"
  }, [_vm._v("Inverted")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("States")]), _vm._v(" "), _c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Loading")]), _vm._v(" "), _c('a', {
    staticClass: "button is-loading"
  }, [_vm._v("Loading")]), _vm._v(" "), _c('a', {
    staticClass: "button is-primary is-loading"
  }, [_vm._v("Loading")]), _vm._v(" "), _c('a', {
    staticClass: "button is-info is-loading"
  }, [_vm._v("Loading")]), _vm._v(" "), _c('a', {
    staticClass: "button is-success is-loading"
  }, [_vm._v("Loading")]), _vm._v(" "), _c('a', {
    staticClass: "button is-warning is-loading"
  }, [_vm._v("Loading")]), _vm._v(" "), _c('a', {
    staticClass: "button is-danger is-loading"
  }, [_vm._v("Loading")])]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Active")]), _vm._v(" "), _c('a', {
    staticClass: "button is-active"
  }, [_vm._v("Active")]), _vm._v(" "), _c('a', {
    staticClass: "button is-primary is-active"
  }, [_vm._v("Active")]), _vm._v(" "), _c('a', {
    staticClass: "button is-info is-active"
  }, [_vm._v("Active")]), _vm._v(" "), _c('a', {
    staticClass: "button is-success is-active"
  }, [_vm._v("Active")]), _vm._v(" "), _c('a', {
    staticClass: "button is-warning is-active"
  }, [_vm._v("Active")]), _vm._v(" "), _c('a', {
    staticClass: "button is-danger is-active"
  }, [_vm._v("Active")])]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('a', {
    staticClass: "button is-disabled"
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('a', {
    staticClass: "button is-primary is-disabled"
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('a', {
    staticClass: "button is-info is-disabled"
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('a', {
    staticClass: "button is-success is-disabled"
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('a', {
    staticClass: "button is-warning is-disabled"
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('a', {
    staticClass: "button is-danger is-disabled"
  }, [_vm._v("Disabled")])]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("With Font Awesome icons")]), _vm._v(" "), _c('a', {
    staticClass: "button"
  }, [_c('span', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "fa fa-github"
  })]), _vm._v(" "), _c('span', [_vm._v("GitHub")])]), _vm._v(" "), _c('a', {
    staticClass: "button is-primary"
  }, [_c('span', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "fa fa-twitter"
  })]), _vm._v(" "), _c('span', [_vm._v("Twitter")])]), _vm._v(" "), _c('a', {
    staticClass: "button is-success"
  }, [_c('span', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "fa fa-check"
  })]), _vm._v(" "), _c('span', [_vm._v("Save")])]), _vm._v(" "), _c('a', {
    staticClass: "button is-danger"
  }, [_c('span', [_vm._v("Delete")]), _vm._v(" "), _c('span', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "fa fa-times"
  })])]), _vm._v(" "), _c('a', {
    staticClass: "button is-danger is-outlined"
  }, [_c('span', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "fa fa-times"
  })]), _vm._v(" "), _c('span', [_vm._v("Delete")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Button group")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("If you want to group buttons together, use the is-grouped modifier on the control container:")]), _vm._v(" "), _c('div', {
    staticClass: "control is-grouped"
  }, [_c('p', {
    staticClass: "control"
  }, [_c('a', {
    staticClass: "button is-primary"
  }, [_vm._v("\n              Save changes\n            ")])]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('a', {
    staticClass: "button"
  }, [_vm._v("\n              Cancel\n            ")])]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('a', {
    staticClass: "button is-danger"
  }, [_vm._v("\n              Delete post\n            ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Button addons")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("If you want to use buttons as addons, use the has-addons modifier on the control container:")]), _vm._v(" "), _c('p', {
    staticClass: "control has-addons"
  }, [_c('a', {
    staticClass: "button"
  }, [_c('span', {
    staticClass: "icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-align-left"
  })]), _vm._v(" "), _c('span', [_vm._v("Left")])]), _vm._v(" "), _c('a', {
    staticClass: "button"
  }, [_c('span', {
    staticClass: "icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-align-center"
  })]), _vm._v(" "), _c('span', [_vm._v("Center")])]), _vm._v(" "), _c('a', {
    staticClass: "button"
  }, [_c('span', {
    staticClass: "icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-align-right"
  })]), _vm._v(" "), _c('span', [_vm._v("Right")])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b22b47d4", module.exports)
  }
}

/***/ }),

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(662);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("078dce64", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-b22b47d4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Buttons.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-b22b47d4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Buttons.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL3VpL0J1dHRvbnMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvdWkvQnV0dG9ucy52dWU/ZDRlNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL3VpL0J1dHRvbnMudnVlPzM0YjUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy91aS9CdXR0b25zLnZ1ZT80ZTNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQ0EsdUJBQXNMOztBQUV0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUE0RztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsaURBQWlELElBQUk7QUFDcEksbUNBQW1DOztBQUVuQztBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBOzs7QUFHQTtBQUNBLHFEQUFzRCxvQkFBb0IsR0FBRyxVQUFVLCtKQUErSixNQUFNLFdBQVcsb3RPQUFvdE8sb0JBQW9CLEdBQUcsK0JBQStCOztBQUVqaFA7Ozs7Ozs7O0FDUEEsZ0JBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBLENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUMzT0E7O0FBRUE7QUFDQSxxQ0FBMk47QUFDM047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixvRUFBb0U7QUFDMU4sK0pBQStKLG9FQUFvRTtBQUNuTztBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoianMvMjguOWRlMTQwMjJiNjU2YjZhNDdkMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1iMjJiNDdkNFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0J1dHRvbnMudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj9jYWNoZURpcmVjdG9yeSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0J1dHRvbnMudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1iMjJiNDdkNFxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9CdXR0b25zLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi1iMjJiNDdkNFwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiL2hvbWUva2ltbmgvQ29kZXMvV2ViU2hvcC9hZG1pbi10ZW1wbGF0ZS9sYXJhdmVsLXZ1ZS1hZG1pbi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL3VpL0J1dHRvbnMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQnV0dG9ucy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYjIyYjQ3ZDRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1iMjJiNDdkNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL3VpL0J1dHRvbnMudnVlXG4vLyBtb2R1bGUgaWQgPSAxNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAyOCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5idXR0b25bZGF0YS12LWIyMmI0N2Q0XSB7XFxuICBtYXJnaW46IDVweCAwIDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvdWkvQnV0dG9ucy52dWU/NTdjZTQyNmFcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXdMQTtFQUNBLGdCQUFBO0NBQ0FcIixcImZpbGVcIjpcIkJ1dHRvbnMudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gIDxkaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRpbGUgaXMtYW5jZXN0b3JcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInRpbGUgaXMtcGFyZW50IGlzLTRcXFwiPlxcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XFxcInRpbGUgaXMtY2hpbGQgYm94XFxcIj5cXG4gICAgICAgICAgPGgxIGNsYXNzPVxcXCJ0aXRsZVxcXCI+T3B0aW9uczwvaDE+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJsb2NrXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b25cXFwiPkJ1dHRvbjwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBpcy13aGl0ZVxcXCI+V2hpdGU8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24gaXMtbGlnaHRcXFwiPkxpZ2h0PC9idXR0b24+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLWRhcmtcXFwiPkRhcms8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24gaXMtYmxhY2tcXFwiPkJsYWNrPC9idXR0b24+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLWxpbmtcXFwiPkxpbms8L2J1dHRvbj5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJsb2NrXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24gaXMtcHJpbWFyeVxcXCI+UHJpbWFyeTwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBpcy1pbmZvXFxcIj5JbmZvPC9idXR0b24+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLXN1Y2Nlc3NcXFwiPlN1Y2Nlc3M8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24gaXMtd2FybmluZ1xcXCI+V2FybmluZzwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBpcy1kYW5nZXJcXFwiPkRhbmdlcjwvYnV0dG9uPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvYXJ0aWNsZT5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJ0aWxlIGlzLXBhcmVudCBpcy00XFxcIj5cXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVxcXCJ0aWxlIGlzLWNoaWxkIGJveFxcXCI+XFxuICAgICAgICAgIDxoMSBjbGFzcz1cXFwidGl0bGVcXFwiPlNpemVzPC9oMT5cXG4gICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvbiBpcy1zbWFsbFxcXCI+U21hbGw8L2E+XFxuICAgICAgICAgIDxhIGNsYXNzPVxcXCJidXR0b25cXFwiPk5vcm1hbDwvYT5cXG4gICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvbiBpcy1tZWRpdW1cXFwiPk1lZGl1bTwvYT5cXG4gICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvbiBpcy1sYXJnZVxcXCI+TGFyZ2U8L2E+XFxuICAgICAgICA8L2FydGljbGU+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwidGlsZSBpcy1wYXJlbnQgaXMtNFxcXCI+XFxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cXFwidGlsZSBpcy1jaGlsZCBib3hcXFwiPlxcbiAgICAgICAgICA8aDEgY2xhc3M9XFxcInRpdGxlXFxcIj5TdHlsZXM8L2gxPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJibG9ja1xcXCI+XFxuICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJzdWJ0aXRsZVxcXCI+T3V0bGluZWQ8L2gyPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidXR0b24gaXMtb3V0bGluZWRcXFwiPk91dGxpbmVkPC9hPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidXR0b24gaXMtcHJpbWFyeSBpcy1vdXRsaW5lZFxcXCI+T3V0bGluZWQ8L2E+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvbiBpcy1pbmZvIGlzLW91dGxpbmVkXFxcIj5PdXRsaW5lZDwvYT5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uIGlzLXN1Y2Nlc3MgaXMtb3V0bGluZWRcXFwiPk91dGxpbmVkPC9hPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidXR0b24gaXMtZGFuZ2VyIGlzLW91dGxpbmVkXFxcIj5PdXRsaW5lZDwvYT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxoMiBjbGFzcz1cXFwic3VidGl0bGVcXFwiPkludmVydGVkICh0aGUgdGV4dCBjb2xvciBiZWNvbWVzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yLCBhbmQgdmljZS12ZXJzYSk8L2gyPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJub3RpZmljYXRpb24gaXMtcHJpbWFyeVxcXCI+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvbiBpcy1wcmltYXJ5IGlzLWludmVydGVkXFxcIj5JbnZlcnRlZDwvYT5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uIGlzLWluZm8gaXMtaW52ZXJ0ZWRcXFwiPkludmVydGVkPC9hPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidXR0b24gaXMtc3VjY2VzcyBpcy1pbnZlcnRlZFxcXCI+SW52ZXJ0ZWQ8L2E+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvbiBpcy1kYW5nZXIgaXMtaW52ZXJ0ZWRcXFwiPkludmVydGVkPC9hPlxcbiAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvYXJ0aWNsZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInRpbGUgaXMtYW5jZXN0b3JcXFwiPlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInRpbGUgaXMtcGFyZW50XFxcIj5cXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVxcXCJ0aWxlIGlzLWNoaWxkIGJveFxcXCI+XFxuICAgICAgICAgIDxoMSBjbGFzcz1cXFwidGl0bGVcXFwiPlN0YXRlczwvaDE+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbnNcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtblxcXCI+XFxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInN1YnRpdGxlXFxcIj5Mb2FkaW5nPC9oMj5cXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidXR0b24gaXMtbG9hZGluZ1xcXCI+TG9hZGluZzwvYT5cXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidXR0b24gaXMtcHJpbWFyeSBpcy1sb2FkaW5nXFxcIj5Mb2FkaW5nPC9hPlxcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvbiBpcy1pbmZvIGlzLWxvYWRpbmdcXFwiPkxvYWRpbmc8L2E+XFxuICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uIGlzLXN1Y2Nlc3MgaXMtbG9hZGluZ1xcXCI+TG9hZGluZzwvYT5cXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidXR0b24gaXMtd2FybmluZyBpcy1sb2FkaW5nXFxcIj5Mb2FkaW5nPC9hPlxcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvbiBpcy1kYW5nZXIgaXMtbG9hZGluZ1xcXCI+TG9hZGluZzwvYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW5cXFwiPlxcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJzdWJ0aXRsZVxcXCI+QWN0aXZlPC9oMj5cXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidXR0b24gaXMtYWN0aXZlXFxcIj5BY3RpdmU8L2E+XFxuICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uIGlzLXByaW1hcnkgaXMtYWN0aXZlXFxcIj5BY3RpdmU8L2E+XFxuICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uIGlzLWluZm8gaXMtYWN0aXZlXFxcIj5BY3RpdmU8L2E+XFxuICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uIGlzLXN1Y2Nlc3MgaXMtYWN0aXZlXFxcIj5BY3RpdmU8L2E+XFxuICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uIGlzLXdhcm5pbmcgaXMtYWN0aXZlXFxcIj5BY3RpdmU8L2E+XFxuICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uIGlzLWRhbmdlciBpcy1hY3RpdmVcXFwiPkFjdGl2ZTwvYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW5cXFwiPlxcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJzdWJ0aXRsZVxcXCI+RGlzYWJsZWQ8L2gyPlxcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvbiBpcy1kaXNhYmxlZFxcXCI+RGlzYWJsZWQ8L2E+XFxuICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uIGlzLXByaW1hcnkgaXMtZGlzYWJsZWRcXFwiPkRpc2FibGVkPC9hPlxcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvbiBpcy1pbmZvIGlzLWRpc2FibGVkXFxcIj5EaXNhYmxlZDwvYT5cXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidXR0b24gaXMtc3VjY2VzcyBpcy1kaXNhYmxlZFxcXCI+RGlzYWJsZWQ8L2E+XFxuICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uIGlzLXdhcm5pbmcgaXMtZGlzYWJsZWRcXFwiPkRpc2FibGVkPC9hPlxcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvbiBpcy1kYW5nZXIgaXMtZGlzYWJsZWRcXFwiPkRpc2FibGVkPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtblxcXCI+XFxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInN1YnRpdGxlXFxcIj5XaXRoIEZvbnQgQXdlc29tZSBpY29uczwvaDI+XFxuICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1naXRodWJcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3Bhbj5HaXRIdWI8L3NwYW4+XFxuICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uIGlzLXByaW1hcnlcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXR3aXR0ZXJcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3Bhbj5Ud2l0dGVyPC9zcGFuPlxcbiAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvbiBpcy1zdWNjZXNzXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1jaGVja1xcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuPlNhdmU8L3NwYW4+XFxuICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uIGlzLWRhbmdlclxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuPkRlbGV0ZTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10aW1lc1xcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uIGlzLWRhbmdlciBpcy1vdXRsaW5lZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXNcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3Bhbj5EZWxldGU8L3NwYW4+XFxuICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9hcnRpY2xlPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGlsZSBpcy1hbmNlc3RvclxcXCI+XFxuICAgICAgPGRpdiBjbGFzcz1cXFwidGlsZSBpcy1wYXJlbnRcXFwiPlxcbiAgICAgICAgPGFydGljbGUgY2xhc3M9XFxcInRpbGUgaXMtY2hpbGQgYm94XFxcIj5cXG4gICAgICAgICAgPGgxIGNsYXNzPVxcXCJ0aXRsZVxcXCI+QnV0dG9uIGdyb3VwPC9oMT5cXG4gICAgICAgICAgPGgyIGNsYXNzPVxcXCJzdWJ0aXRsZVxcXCI+SWYgeW91IHdhbnQgdG8gZ3JvdXAgYnV0dG9ucyB0b2dldGhlciwgdXNlIHRoZSBpcy1ncm91cGVkIG1vZGlmaWVyIG9uIHRoZSBjb250cm9sIGNvbnRhaW5lcjo8L2gyPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250cm9sIGlzLWdyb3VwZWRcXFwiPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjb250cm9sXFxcIj5cXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidXR0b24gaXMtcHJpbWFyeVxcXCI+XFxuICAgICAgICAgICAgICAgIFNhdmUgY2hhbmdlc1xcbiAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY29udHJvbFxcXCI+XFxuICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uXFxcIj5cXG4gICAgICAgICAgICAgICAgQ2FuY2VsXFxuICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjb250cm9sXFxcIj5cXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJidXR0b24gaXMtZGFuZ2VyXFxcIj5cXG4gICAgICAgICAgICAgICAgRGVsZXRlIHBvc3RcXG4gICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9hcnRpY2xlPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInRpbGUgaXMtcGFyZW50XFxcIj5cXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVxcXCJ0aWxlIGlzLWNoaWxkIGJveFxcXCI+XFxuICAgICAgICAgIDxoMSBjbGFzcz1cXFwidGl0bGVcXFwiPkJ1dHRvbiBhZGRvbnM8L2gxPlxcbiAgICAgICAgICA8aDIgY2xhc3M9XFxcInN1YnRpdGxlXFxcIj5JZiB5b3Ugd2FudCB0byB1c2UgYnV0dG9ucyBhcyBhZGRvbnMsIHVzZSB0aGUgaGFzLWFkZG9ucyBtb2RpZmllciBvbiB0aGUgY29udHJvbCBjb250YWluZXI6PC9oMj5cXG4gICAgICAgICAgPHAgY2xhc3M9XFxcImNvbnRyb2wgaGFzLWFkZG9uc1xcXCI+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImJ1dHRvblxcXCI+XFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBpcy1zbWFsbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1hbGlnbi1sZWZ0XFxcIj48L2k+XFxuICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICA8c3Bhbj5MZWZ0PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uXFxcIj5cXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWFsaWduLWNlbnRlclxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgPHNwYW4+Q2VudGVyPC9zcGFuPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiYnV0dG9uXFxcIj5cXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWFsaWduLXJpZ2h0XFxcIj48L2k+XFxuICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICA8c3Bhbj5SaWdodDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvYXJ0aWNsZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4uYnV0dG9uIHtcXG4gIG1hcmdpbjogNXB4IDAgMDtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWIyMmI0N2Q0XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL3VpL0J1dHRvbnMudnVlXG4vLyBtb2R1bGUgaWQgPSA2NjJcbi8vIG1vZHVsZSBjaHVua3MgPSAyOCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfdm0uX20oMClcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1hbmNlc3RvclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50IGlzLTRcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIk9wdGlvbnNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibG9ja1wiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiXG4gIH0sIFtfdm0uX3YoXCJCdXR0b25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtd2hpdGVcIlxuICB9LCBbX3ZtLl92KFwiV2hpdGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtbGlnaHRcIlxuICB9LCBbX3ZtLl92KFwiTGlnaHRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtZGFya1wiXG4gIH0sIFtfdm0uX3YoXCJEYXJrXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLWJsYWNrXCJcbiAgfSwgW192bS5fdihcIkJsYWNrXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLWxpbmtcIlxuICB9LCBbX3ZtLl92KFwiTGlua1wiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2tcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtcHJpbWFyeVwiXG4gIH0sIFtfdm0uX3YoXCJQcmltYXJ5XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLWluZm9cIlxuICB9LCBbX3ZtLl92KFwiSW5mb1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1zdWNjZXNzXCJcbiAgfSwgW192bS5fdihcIlN1Y2Nlc3NcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtd2FybmluZ1wiXG4gIH0sIFtfdm0uX3YoXCJXYXJuaW5nXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLWRhbmdlclwiXG4gIH0sIFtfdm0uX3YoXCJEYW5nZXJcIildKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudCBpcy00XCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJTaXplc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtc21hbGxcIlxuICB9LCBbX3ZtLl92KFwiU21hbGxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCJcbiAgfSwgW192bS5fdihcIk5vcm1hbFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtbWVkaXVtXCJcbiAgfSwgW192bS5fdihcIk1lZGl1bVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtbGFyZ2VcIlxuICB9LCBbX3ZtLl92KFwiTGFyZ2VcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnQgaXMtNFwiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiU3R5bGVzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2tcIlxuICB9LCBbX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN1YnRpdGxlXCJcbiAgfSwgW192bS5fdihcIk91dGxpbmVkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1vdXRsaW5lZFwiXG4gIH0sIFtfdm0uX3YoXCJPdXRsaW5lZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtcHJpbWFyeSBpcy1vdXRsaW5lZFwiXG4gIH0sIFtfdm0uX3YoXCJPdXRsaW5lZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtaW5mbyBpcy1vdXRsaW5lZFwiXG4gIH0sIFtfdm0uX3YoXCJPdXRsaW5lZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtc3VjY2VzcyBpcy1vdXRsaW5lZFwiXG4gIH0sIFtfdm0uX3YoXCJPdXRsaW5lZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtZGFuZ2VyIGlzLW91dGxpbmVkXCJcbiAgfSwgW192bS5fdihcIk91dGxpbmVkXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN1YnRpdGxlXCJcbiAgfSwgW192bS5fdihcIkludmVydGVkICh0aGUgdGV4dCBjb2xvciBiZWNvbWVzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yLCBhbmQgdmljZS12ZXJzYSlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJub3RpZmljYXRpb24gaXMtcHJpbWFyeVwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtcHJpbWFyeSBpcy1pbnZlcnRlZFwiXG4gIH0sIFtfdm0uX3YoXCJJbnZlcnRlZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtaW5mbyBpcy1pbnZlcnRlZFwiXG4gIH0sIFtfdm0uX3YoXCJJbnZlcnRlZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtc3VjY2VzcyBpcy1pbnZlcnRlZFwiXG4gIH0sIFtfdm0uX3YoXCJJbnZlcnRlZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtZGFuZ2VyIGlzLWludmVydGVkXCJcbiAgfSwgW192bS5fdihcIkludmVydGVkXCIpXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWFuY2VzdG9yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnRcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIlN0YXRlc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbHVtbnNcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW5cIlxuICB9LCBbX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN1YnRpdGxlXCJcbiAgfSwgW192bS5fdihcIkxvYWRpbmdcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLWxvYWRpbmdcIlxuICB9LCBbX3ZtLl92KFwiTG9hZGluZ1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtcHJpbWFyeSBpcy1sb2FkaW5nXCJcbiAgfSwgW192bS5fdihcIkxvYWRpbmdcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLWluZm8gaXMtbG9hZGluZ1wiXG4gIH0sIFtfdm0uX3YoXCJMb2FkaW5nXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1zdWNjZXNzIGlzLWxvYWRpbmdcIlxuICB9LCBbX3ZtLl92KFwiTG9hZGluZ1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtd2FybmluZyBpcy1sb2FkaW5nXCJcbiAgfSwgW192bS5fdihcIkxvYWRpbmdcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLWRhbmdlciBpcy1sb2FkaW5nXCJcbiAgfSwgW192bS5fdihcIkxvYWRpbmdcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbHVtblwiXG4gIH0sIFtfYygnaDInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic3VidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiQWN0aXZlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1hY3RpdmVcIlxuICB9LCBbX3ZtLl92KFwiQWN0aXZlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1wcmltYXJ5IGlzLWFjdGl2ZVwiXG4gIH0sIFtfdm0uX3YoXCJBY3RpdmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLWluZm8gaXMtYWN0aXZlXCJcbiAgfSwgW192bS5fdihcIkFjdGl2ZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtc3VjY2VzcyBpcy1hY3RpdmVcIlxuICB9LCBbX3ZtLl92KFwiQWN0aXZlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy13YXJuaW5nIGlzLWFjdGl2ZVwiXG4gIH0sIFtfdm0uX3YoXCJBY3RpdmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLWRhbmdlciBpcy1hY3RpdmVcIlxuICB9LCBbX3ZtLl92KFwiQWN0aXZlXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW5cIlxuICB9LCBbX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN1YnRpdGxlXCJcbiAgfSwgW192bS5fdihcIkRpc2FibGVkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1kaXNhYmxlZFwiXG4gIH0sIFtfdm0uX3YoXCJEaXNhYmxlZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtcHJpbWFyeSBpcy1kaXNhYmxlZFwiXG4gIH0sIFtfdm0uX3YoXCJEaXNhYmxlZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtaW5mbyBpcy1kaXNhYmxlZFwiXG4gIH0sIFtfdm0uX3YoXCJEaXNhYmxlZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtc3VjY2VzcyBpcy1kaXNhYmxlZFwiXG4gIH0sIFtfdm0uX3YoXCJEaXNhYmxlZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtd2FybmluZyBpcy1kaXNhYmxlZFwiXG4gIH0sIFtfdm0uX3YoXCJEaXNhYmxlZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtZGFuZ2VyIGlzLWRpc2FibGVkXCJcbiAgfSwgW192bS5fdihcIkRpc2FibGVkXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW5cIlxuICB9LCBbX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN1YnRpdGxlXCJcbiAgfSwgW192bS5fdihcIldpdGggRm9udCBBd2Vzb21lIGljb25zXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpY29uXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWdpdGh1YlwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIkdpdEh1YlwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1wcmltYXJ5XCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImljb25cIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdHdpdHRlclwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIlR3aXR0ZXJcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtc3VjY2Vzc1wiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpY29uXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNoZWNrXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KFwiU2F2ZVwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1kYW5nZXJcIlxuICB9LCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiRGVsZXRlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImljb25cIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGltZXNcIlxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1kYW5nZXIgaXMtb3V0bGluZWRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaWNvblwiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lc1wiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywgW192bS5fdihcIkRlbGV0ZVwiKV0pXSldKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtYW5jZXN0b3JcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLXBhcmVudFwiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiQnV0dG9uIGdyb3VwXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoMicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdWJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJJZiB5b3Ugd2FudCB0byBncm91cCBidXR0b25zIHRvZ2V0aGVyLCB1c2UgdGhlIGlzLWdyb3VwZWQgbW9kaWZpZXIgb24gdGhlIGNvbnRyb2wgY29udGFpbmVyOlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaXMtZ3JvdXBlZFwiXG4gIH0sIFtfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1wcmltYXJ5XCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgU2F2ZSBjaGFuZ2VzXFxuICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICBDYW5jZWxcXG4gICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1kYW5nZXJcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICBEZWxldGUgcG9zdFxcbiAgICAgICAgICAgIFwiKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnRcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIkJ1dHRvbiBhZGRvbnNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN1YnRpdGxlXCJcbiAgfSwgW192bS5fdihcIklmIHlvdSB3YW50IHRvIHVzZSBidXR0b25zIGFzIGFkZG9ucywgdXNlIHRoZSBoYXMtYWRkb25zIG1vZGlmaWVyIG9uIHRoZSBjb250cm9sIGNvbnRhaW5lcjpcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbCBoYXMtYWRkb25zXCJcbiAgfSwgW19jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWFsaWduLWxlZnRcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCJMZWZ0XCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtYWxpZ24tY2VudGVyXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCBbX3ZtLl92KFwiQ2VudGVyXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtYWxpZ24tcmlnaHRcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIFtfdm0uX3YoXCJSaWdodFwiKV0pXSldKV0pXSldKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtYjIyYjQ3ZDRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1iMjJiNDdkNFwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy91aS9CdXR0b25zLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMjgiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LWIyMmI0N2Q0XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQnV0dG9ucy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjA3OGRjZTY0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1iMjJiNDdkNFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0J1dHRvbnMudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1iMjJiNDdkNFxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0J1dHRvbnMudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYjIyYjQ3ZDRcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvdWkvQnV0dG9ucy52dWVcbi8vIG1vZHVsZSBpZCA9IDgxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDI4Il0sInNvdXJjZVJvb3QiOiIifQ==
webpackJsonp([9],{

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(791)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(602),
  /* template */
  __webpack_require__(745),
  /* scopeId */
  "data-v-6e8883ff",
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/resources/builds/js/views/ui/Form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Form.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e8883ff", Component.options)
  } else {
    hotAPI.reload("data-v-6e8883ff", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cleave = __webpack_require__(613);

var _cleave2 = _interopRequireDefault(_cleave);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },

  data: function data() {
    return {
      cleave: null
    };
  },


  methods: {
    updateValue: function updateValue(value) {
      this.$emit('input', value);
    }
  },

  mounted: function mounted() {
    this.cleave = new _cleave2.default(this.$el, this.options);
  },
  beforeDestroy: function beforeDestroy() {
    this.cleave.destroy();
  }
}; //
//
//
//

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueCleave = __webpack_require__(702);

var _vueCleave2 = _interopRequireDefault(_vueCleave);

__webpack_require__(612);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Cleave: _vueCleave2.default
  }
};

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(){function t(t,n){var e=t.split("."),r=T;e[0]in r||!r.execScript||r.execScript("var "+e[0]);for(var i;e.length&&(i=e.shift());)e.length||void 0===n?r=r[i]?r[i]:r[i]={}:r[i]=n}function n(t,n){function e(){}e.prototype=n.prototype,t.M=n.prototype,t.prototype=new e,t.prototype.constructor=t,t.N=function(t,e,r){for(var i=Array(arguments.length-2),l=2;l<arguments.length;l++)i[l-2]=arguments[l];return n.prototype[e].apply(t,i)}}function e(t,n){null!=t&&this.a.apply(this,arguments)}function r(t){t.b=""}function i(t,n){t.sort(n||l)}function l(t,n){return t>n?1:n>t?-1:0}function a(t){var n,e=[],r=0;for(n in t)e[r++]=t[n];return e}function u(t,n){this.b=t,this.a={};for(var e=0;e<n.length;e++){var r=n[e];this.a[r.b]=r}}function o(t){return t=a(t.a),i(t,function(t,n){return t.b-n.b}),t}function s(t,n){switch(this.b=t,this.g=!!n.G,this.a=n.c,this.j=n.type,this.h=!1,this.a){case k:case J:case K:case L:case O:case Y:case U:this.h=!0}this.f=n.defaultValue}function f(){this.a={},this.f=this.i().a,this.b=this.g=null}function c(t,n){for(var e=o(t.i()),r=0;r<e.length;r++){var i=e[r],l=i.b;if(null!=n.a[l]){t.b&&delete t.b[i.b];var a=11==i.a||10==i.a;if(i.g)for(var i=p(n,l)||[],u=0;u<i.length;u++){var s=t,f=l,h=a?i[u].clone():i[u];s.a[f]||(s.a[f]=[]),s.a[f].push(h),s.b&&delete s.b[f]}else i=p(n,l),a?(a=p(t,l))?c(a,i):$(t,l,i.clone()):$(t,l,i)}}}function p(t,n){var e=t.a[n];if(null==e)return null;if(t.g){if(!(n in t.b)){var r=t.g,i=t.f[n];if(null!=e)if(i.g){for(var l=[],a=0;a<e.length;a++)l[a]=r.b(i,e[a]);e=l}else e=r.b(i,e);return t.b[n]=e}return t.b[n]}return e}function h(t,n,e){var r=p(t,n);return t.f[n].g?r[e||0]:r}function d(t,n){var e;if(null!=t.a[n])e=h(t,n,void 0);else t:{if(e=t.f[n],void 0===e.f){var r=e.j;if(r===Boolean)e.f=!1;else if(r===Number)e.f=0;else{if(r!==String){e=new r;break t}e.f=e.h?"0":""}}e=e.f}return e}function g(t,n){return t.f[n].g?null!=t.a[n]?t.a[n].length:0:null!=t.a[n]?1:0}function $(t,n,e){t.a[n]=e,t.b&&(t.b[n]=e)}function b(t,n){var e,r=[];for(e in n)0!=e&&r.push(new s(e,n[e]));return new u(t,r)}/*

 Protocol Buffer 2 Copyright 2008 Google Inc.
 All other code copyright its respective owners.
 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function m(){f.call(this)}function y(){f.call(this)}function v(){f.call(this)}function _(){}function C(){}function S(){}/*

 Copyright (C) 2010 The Libphonenumber Authors.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function w(){this.a={}}function x(t,n){if(null==n)return null;n=n.toUpperCase();var e=t.a[n];if(null==e){if(e=tt[n],null==e)return null;e=(new S).a(v.i(),e),t.a[n]=e}return e}function N(t){return t=X[t],null==t?"ZZ":t[0]}function A(t){this.H=RegExp(" "),this.B="",this.m=new e,this.v="",this.h=new e,this.u=new e,this.j=!0,this.w=this.o=this.D=!1,this.F=w.b(),this.s=0,this.b=new e,this.A=!1,this.l="",this.a=new e,this.f=[],this.C=t,this.J=this.g=j(this,this.C)}function j(t,n){var e;if(null!=n&&isNaN(n)&&n.toUpperCase()in tt){if(e=x(t.F,n),null==e)throw"Invalid region code: "+n;e=d(e,10)}else e=0;return e=x(t.F,N(e)),null!=e?e:lt}function E(t){for(var n=t.f.length,e=0;n>e;++e){var i=t.f[e],l=d(i,1);if(t.v==l)return!1;var a;a=t;var u=i,o=d(u,1);if(-1!=o.indexOf("|"))a=!1;else{o=o.replace(at,"\\d"),o=o.replace(ut,"\\d"),r(a.m);var s;s=a;var u=d(u,2),f="999999999999999".match(o)[0];f.length<s.a.b.length?s="":(s=f.replace(new RegExp(o,"g"),u),s=s.replace(RegExp("9","g")," ")),0<s.length?(a.m.a(s),a=!0):a=!1}if(a)return t.v=l,t.A=st.test(h(i,4)),t.s=0,!0}return t.j=!1}function R(t,n){for(var e=[],r=n.length-3,i=t.f.length,l=0;i>l;++l){var a=t.f[l];0==g(a,3)?e.push(t.f[l]):(a=h(a,3,Math.min(r,g(a,3)-1)),0==n.search(a)&&e.push(t.f[l]))}t.f=e}function F(t,n){t.h.a(n);var e=n;if(rt.test(e)||1==t.h.b.length&&et.test(e)){var i,e=n;"+"==e?(i=e,t.u.a(e)):(i=nt[e],t.u.a(i),t.a.a(i)),n=i}else t.j=!1,t.D=!0;if(!t.j){if(!t.D)if(P(t)){if(V(t))return B(t)}else if(0<t.l.length&&(e=t.a.toString(),r(t.a),t.a.a(t.l),t.a.a(e),e=t.b.toString(),i=e.lastIndexOf(t.l),r(t.b),t.b.a(e.substring(0,i))),t.l!=H(t))return t.b.a(" "),B(t);return t.h.toString()}switch(t.u.b.length){case 0:case 1:case 2:return t.h.toString();case 3:if(!P(t))return t.l=H(t),M(t);t.w=!0;default:return t.w?(V(t)&&(t.w=!1),t.b.toString()+t.a.toString()):0<t.f.length?(e=q(t,n),i=I(t),0<i.length?i:(R(t,t.a.toString()),E(t)?G(t):t.j?D(t,e):t.h.toString())):M(t)}}function B(t){return t.j=!0,t.w=!1,t.f=[],t.s=0,r(t.m),t.v="",M(t)}function I(t){for(var n=t.a.toString(),e=t.f.length,r=0;e>r;++r){var i=t.f[r],l=d(i,1);if(new RegExp("^(?:"+l+")$").test(n))return t.A=st.test(h(i,4)),n=n.replace(new RegExp(l,"g"),h(i,2)),D(t,n)}return""}function D(t,n){var e=t.b.b.length;return t.A&&e>0&&" "!=t.b.toString().charAt(e-1)?t.b+" "+n:t.b+n}function M(t){var n=t.a.toString();if(3<=n.length){for(var e=t.o&&0<g(t.g,20)?p(t.g,20)||[]:p(t.g,19)||[],r=e.length,i=0;r>i;++i){var l,a=e[i];(l=null==t.g.a[12]||t.o||h(a,6))||(l=d(a,4),l=0==l.length||it.test(l)),l&&ot.test(d(a,2))&&t.f.push(a)}return R(t,n),n=I(t),0<n.length?n:E(t)?G(t):t.h.toString()}return D(t,n)}function G(t){var n=t.a.toString(),e=n.length;if(e>0){for(var r="",i=0;e>i;i++)r=q(t,n.charAt(i));return t.j?D(t,r):t.h.toString()}return t.b.toString()}function H(t){var n,e=t.a.toString(),i=0;return 1!=h(t.g,10)?n=!1:(n=t.a.toString(),n="1"==n.charAt(0)&&"0"!=n.charAt(1)&&"1"!=n.charAt(1)),n?(i=1,t.b.a("1").a(" "),t.o=!0):null!=t.g.a[15]&&(n=new RegExp("^(?:"+h(t.g,15)+")"),n=e.match(n),null!=n&&null!=n[0]&&0<n[0].length&&(t.o=!0,i=n[0].length,t.b.a(e.substring(0,i)))),r(t.a),t.a.a(e.substring(i)),e.substring(0,i)}function P(t){var n=t.u.toString(),e=new RegExp("^(?:\\+|"+h(t.g,11)+")"),e=n.match(e);return null!=e&&null!=e[0]&&0<e[0].length?(t.o=!0,e=e[0].length,r(t.a),t.a.a(n.substring(e)),r(t.b),t.b.a(n.substring(0,e)),"+"!=n.charAt(0)&&t.b.a(" "),!0):!1}function V(t){if(0==t.a.b.length)return!1;var n,i=new e;t:{if(n=t.a.toString(),0!=n.length&&"0"!=n.charAt(0))for(var l,a=n.length,u=1;3>=u&&a>=u;++u)if(l=parseInt(n.substring(0,u),10),l in X){i.a(n.substring(u)),n=l;break t}n=0}return 0==n?!1:(r(t.a),t.a.a(i.toString()),i=N(n),"001"==i?t.g=x(t.F,""+n):i!=t.C&&(t.g=j(t,i)),t.b.a(""+n).a(" "),t.l="",!0)}function q(t,n){var e=t.m.toString();if(0<=e.substring(t.s).search(t.H)){var i=e.search(t.H),e=e.replace(t.H,n);return r(t.m),t.m.a(e),t.s=i,e.substring(0,t.s+1)}return 1==t.f.length&&(t.j=!1),t.v="",t.h.toString()}var T=this;e.prototype.b="",e.prototype.set=function(t){this.b=""+t},e.prototype.a=function(t,n,e){if(this.b+=String(t),null!=n)for(var r=1;r<arguments.length;r++)this.b+=arguments[r];return this},e.prototype.toString=function(){return this.b};var U=1,Y=2,k=3,J=4,K=6,L=16,O=18;f.prototype.set=function(t,n){$(this,t.b,n)},f.prototype.clone=function(){var t=new this.constructor;return t!=this&&(t.a={},t.b&&(t.b={}),c(t,this)),t};var Z;n(m,f);var z;n(y,f);var Q;n(v,f),m.prototype.i=function(){return Z||(Z=b(m,{0:{name:"NumberFormat",I:"i18n.phonenumbers.NumberFormat"},1:{name:"pattern",required:!0,c:9,type:String},2:{name:"format",required:!0,c:9,type:String},3:{name:"leading_digits_pattern",G:!0,c:9,type:String},4:{name:"national_prefix_formatting_rule",c:9,type:String},6:{name:"national_prefix_optional_when_formatting",c:8,type:Boolean},5:{name:"domestic_carrier_code_formatting_rule",c:9,type:String}})),Z},m.ctor=m,m.ctor.i=m.prototype.i,y.prototype.i=function(){return z||(z=b(y,{0:{name:"PhoneNumberDesc",I:"i18n.phonenumbers.PhoneNumberDesc"},2:{name:"national_number_pattern",c:9,type:String},3:{name:"possible_number_pattern",c:9,type:String},6:{name:"example_number",c:9,type:String},7:{name:"national_number_matcher_data",c:12,type:String},8:{name:"possible_number_matcher_data",c:12,type:String}})),z},y.ctor=y,y.ctor.i=y.prototype.i,v.prototype.i=function(){return Q||(Q=b(v,{0:{name:"PhoneMetadata",I:"i18n.phonenumbers.PhoneMetadata"},1:{name:"general_desc",c:11,type:y},2:{name:"fixed_line",c:11,type:y},3:{name:"mobile",c:11,type:y},4:{name:"toll_free",c:11,type:y},5:{name:"premium_rate",c:11,type:y},6:{name:"shared_cost",c:11,type:y},7:{name:"personal_number",c:11,type:y},8:{name:"voip",c:11,type:y},21:{name:"pager",c:11,type:y},25:{name:"uan",c:11,type:y},27:{name:"emergency",c:11,type:y},28:{name:"voicemail",c:11,type:y},24:{name:"no_international_dialling",c:11,type:y},9:{name:"id",required:!0,c:9,type:String},10:{name:"country_code",c:5,type:Number},11:{name:"international_prefix",c:9,type:String},17:{name:"preferred_international_prefix",c:9,type:String},12:{name:"national_prefix",c:9,type:String},13:{name:"preferred_extn_prefix",c:9,type:String},15:{name:"national_prefix_for_parsing",c:9,type:String},16:{name:"national_prefix_transform_rule",c:9,type:String},18:{name:"same_mobile_and_fixed_line_pattern",c:8,defaultValue:!1,type:Boolean},19:{name:"number_format",G:!0,c:11,type:m},20:{name:"intl_number_format",G:!0,c:11,type:m},22:{name:"main_country_for_code",c:8,defaultValue:!1,type:Boolean},23:{name:"leading_digits",c:9,type:String},26:{name:"leading_zero_possible",c:8,defaultValue:!1,type:Boolean}})),Q},v.ctor=v,v.ctor.i=v.prototype.i,_.prototype.a=function(t){throw new t.b,Error("Unimplemented")},_.prototype.b=function(t,n){if(11==t.a||10==t.a)return n instanceof f?n:this.a(t.j.prototype.i(),n);if(14==t.a){if("string"==typeof n&&W.test(n)){var e=Number(n);if(e>0)return e}return n}if(!t.h)return n;if(e=t.j,e===String){if("number"==typeof n)return String(n)}else if(e===Number&&"string"==typeof n&&("Infinity"===n||"-Infinity"===n||"NaN"===n||W.test(n)))return Number(n);return n};var W=/^-?[0-9]+$/;n(C,_),C.prototype.a=function(t,n){var e=new t.b;return e.g=this,e.a=n,e.b={},e},n(S,C),S.prototype.b=function(t,n){return 8==t.a?!!n:_.prototype.b.apply(this,arguments)},S.prototype.a=function(t,n){return S.M.a.call(this,t,n)};/*

 Copyright (C) 2010 The Libphonenumber Authors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var X={86:["CN"]},tt={CN:[null,[null,null,"[1-7]\\d{6,11}|8[0-357-9]\\d{6,9}|9\\d{7,10}","\\d{4,12}"],[null,null,"21(?:100\\d{2}|95\\d{3,4}|\\d{8,10})|(?:10|2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98))(?:100\\d{2}|95\\d{3,4}|\\d{8})|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[3-9]|5[2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-4689]|6[2368]|9[02-9])|8(?:078|1[236-8]|2[5-7]|3\\d|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100\\d{2}|95\\d{3,4}|\\d{7})|80(?:29|6[03578]|7[018]|81)\\d{4}","\\d{4,12}",null,null,"1012345678"],[null,null,"1(?:[38]\\d|4[57]|5[0-35-9]|7[036-8])\\d{8}","\\d{11}",null,null,"13123456789"],[null,null,"(?:10)?800\\d{7}","\\d{10,12}",null,null,"8001234567"],[null,null,"16[08]\\d{5}","\\d{8}",null,null,"16812345"],[null,null,"400\\d{7}|950\\d{7,8}|(?:10|2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[4789]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[3678]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}","\\d{7,11}",null,null,"4001234567"],[null,null,"NA","NA"],[null,null,"NA","NA"],"CN",86,"(1(?:[129]\\d{3}|79\\d{2}))?00","0",null,null,"(1(?:[129]\\d{3}|79\\d{2}))|0",null,"00",null,[[null,"(80\\d{2})(\\d{4})","$1 $2",["80[2678]"],"0$1","$CC $1",1],[null,"([48]00)(\\d{3})(\\d{4})","$1 $2 $3",["[48]00"]],[null,"(\\d{5,6})","$1",["100|95"]],[null,"(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2\\d)[19]","(?:10|2\\d)(?:10|9[56])","(?:10|2\\d)(?:100|9[56])"],"0$1","$CC $1"],[null,"(\\d{3})(\\d{5,6})","$1 $2",["[3-9]","[3-9]\\d{2}[19]","[3-9]\\d{2}(?:10|9[56])"],"0$1","$CC $1"],[null,"(\\d{3,4})(\\d{4})","$1 $2",["[2-9]"]],[null,"(21)(\\d{4})(\\d{4,6})","$1 $2 $3",["21"],"0$1","$CC $1",1],[null,"([12]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["10[1-9]|2[02-9]","10[1-9]|2[02-9]","10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]"],"0$1","$CC $1",1],[null,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"],"0$1","$CC $1",1],[null,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98)"],"0$1","$CC $1",1],[null,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["807","8078"],"0$1","$CC $1",1],[null,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-578]"],null,"$CC $1"],[null,"(10800)(\\d{3})(\\d{4})","$1 $2 $3",["108","1080","10800"]],[null,"(\\d{3})(\\d{7,8})","$1 $2",["950"]]],[[null,"(80\\d{2})(\\d{4})","$1 $2",["80[2678]"],"0$1","$CC $1",1],[null,"([48]00)(\\d{3})(\\d{4})","$1 $2 $3",["[48]00"]],[null,"(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2\\d)[19]","(?:10|2\\d)(?:10|9[56])","(?:10|2\\d)(?:100|9[56])"],"0$1","$CC $1"],[null,"(\\d{3})(\\d{5,6})","$1 $2",["[3-9]","[3-9]\\d{2}[19]","[3-9]\\d{2}(?:10|9[56])"],"0$1","$CC $1"],[null,"(21)(\\d{4})(\\d{4,6})","$1 $2 $3",["21"],"0$1","$CC $1",1],[null,"([12]\\d)(\\d{4})(\\d{4})","$1 $2 $3",["10[1-9]|2[02-9]","10[1-9]|2[02-9]","10(?:[1-79]|8(?:[1-9]|0[1-9]))|2[02-9]"],"0$1","$CC $1",1],[null,"(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:1[02-9]|35|49|5|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|[35][2-9]|6[4789]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[04-9]|4[3-6]|6[2368])|8(?:1[236-8]|2[5-7]|3|5[1-9]|7[02-9]|8[3678]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])"],"0$1","$CC $1",1],[null,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["3(?:11|7[179])|4(?:[15]1|3[1-35])|5(?:1|2[37]|3[12]|51|7[13-79]|9[15])|7(?:31|5[457]|6[09]|91)|8(?:[57]1|98)"],"0$1","$CC $1",1],[null,"(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["807","8078"],"0$1","$CC $1",1],[null,"(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-578]"],null,"$CC $1"],[null,"(10800)(\\d{3})(\\d{4})","$1 $2 $3",["108","1080","10800"]],[null,"(\\d{3})(\\d{7,8})","$1 $2",["950"]]],[null,null,"NA","NA"],null,null,[null,null,"(?:4|(?:10)?8)00\\d{7}|950\\d{7,8}","\\d{10,12}",null,null,"4001234567"],[null,null,"NA","NA"],null,null,[null,null,"NA","NA"]]};w.b=function(){return w.a?w.a:w.a=new w};var nt={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9","０":"0","１":"1","２":"2","３":"3","４":"4","５":"5","６":"6","７":"7","８":"8","９":"9","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9"},et=RegExp("[+＋]+"),rt=RegExp("([0-9０-９٠-٩۰-۹])"),it=/^\(?\$1\)?$/,lt=new v;$(lt,11,"NA");var at=/\[([^\[\]])*\]/g,ut=/\d(?=[^,}][^,}])/g,ot=RegExp("^[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*(\\$\\d[-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～]*)+$"),st=/[- ]/;A.prototype.K=function(){this.B="",r(this.h),r(this.u),r(this.m),this.s=0,this.v="",r(this.b),this.l="",r(this.a),this.j=!0,this.w=this.o=this.D=!1,this.f=[],this.A=!1,this.g!=this.J&&(this.g=j(this,this.C))},A.prototype.L=function(t){return this.B=F(this,t)},t("Cleave.AsYouTypeFormatter",A),t("Cleave.AsYouTypeFormatter.prototype.inputDigit",A.prototype.L),t("Cleave.AsYouTypeFormatter.prototype.clear",A.prototype.K)}.call("object"==typeof global&&global?global:window);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * Construct a new Cleave instance by passing the configuration object
 *
 * @param {String / HTMLElement} element
 * @param {Object} opts
 */
var Cleave = function (element, opts) {
    var owner = this;

    if (typeof element === 'string') {
        owner.element = document.querySelector(element);
    } else {
        owner.element = ((typeof element.length !== 'undefined') && element.length > 0) ? element[0] : element;
    }

    if (!owner.element) {
        throw new Error('[cleave.js] Please check the element');
    }

    opts.initValue = owner.element.value;

    owner.properties = Cleave.DefaultProperties.assign({}, opts);

    owner.init();
};

Cleave.prototype = {
    init: function () {
        var owner = this, pps = owner.properties;

        // no need to use this lib
        if (!pps.numeral && !pps.phone && !pps.creditCard && !pps.date && (pps.blocksLength === 0 && !pps.prefix)) {
            return;
        }

        pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);

        owner.onChangeListener = owner.onChange.bind(owner);
        owner.onKeyDownListener = owner.onKeyDown.bind(owner);
        owner.onCutListener = owner.onCut.bind(owner);
        owner.onCopyListener = owner.onCopy.bind(owner);

        owner.element.addEventListener('input', owner.onChangeListener);
        owner.element.addEventListener('keydown', owner.onKeyDownListener);
        owner.element.addEventListener('cut', owner.onCutListener);
        owner.element.addEventListener('copy', owner.onCopyListener);


        owner.initPhoneFormatter();
        owner.initDateFormatter();
        owner.initNumeralFormatter();

        owner.onInput(pps.initValue);
    },

    initNumeralFormatter: function () {
        var owner = this, pps = owner.properties;

        if (!pps.numeral) {
            return;
        }

        pps.numeralFormatter = new Cleave.NumeralFormatter(
            pps.numeralDecimalMark,
            pps.numeralDecimalScale,
            pps.numeralThousandsGroupStyle,
            pps.numeralPositiveOnly,
            pps.delimiter
        );
    },

    initDateFormatter: function () {
        var owner = this, pps = owner.properties;

        if (!pps.date) {
            return;
        }

        pps.dateFormatter = new Cleave.DateFormatter(pps.datePattern);
        pps.blocks = pps.dateFormatter.getBlocks();
        pps.blocksLength = pps.blocks.length;
        pps.maxLength = Cleave.Util.getMaxLength(pps.blocks);
    },

    initPhoneFormatter: function () {
        var owner = this, pps = owner.properties;

        if (!pps.phone) {
            return;
        }

        // Cleave.AsYouTypeFormatter should be provided by
        // external google closure lib
        try {
            pps.phoneFormatter = new Cleave.PhoneFormatter(
                new pps.root.Cleave.AsYouTypeFormatter(pps.phoneRegionCode),
                pps.delimiter
            );
        } catch (ex) {
            throw new Error('[cleave.js] Please include phone-type-formatter.{country}.js lib');
        }
    },

    onKeyDown: function (event) {
        var owner = this, pps = owner.properties,
            charCode = event.which || event.keyCode;

        // hit backspace when last character is delimiter
        if (charCode === 8 && Cleave.Util.isDelimiter(owner.element.value.slice(-1), pps.delimiter, pps.delimiters)) {
            pps.backspace = true;

            return;
        }

        pps.backspace = false;
    },

    onChange: function () {
        this.onInput(this.element.value);
    },

    onCut: function (e) {
        this.copyClipboardData(e);
        this.onInput('');
    },

    onCopy: function (e) {
        this.copyClipboardData(e);
    },

    copyClipboardData: function (e) {
        var owner = this,
            pps = owner.properties,
            Util = Cleave.Util,
            inputValue = owner.element.value,
            textToCopy = '';

        if (!pps.copyDelimiter) {
            textToCopy = Util.stripDelimiters(inputValue, pps.delimiter, pps.delimiters);
        } else {
            textToCopy = inputValue;
        }

        try {
            if (e.clipboardData) {
                e.clipboardData.setData('Text', textToCopy);
            } else {
                window.clipboardData.setData('Text', textToCopy);
            }

            e.preventDefault();
        } catch (ex) {
            //  empty
        }
    },

    onInput: function (value) {
        var owner = this, pps = owner.properties,
            prev = value,
            Util = Cleave.Util;

        // case 1: delete one more character "4"
        // 1234*| -> hit backspace -> 123|
        // case 2: last character is not delimiter which is:
        // 12|34* -> hit backspace -> 1|34*
        // note: no need to apply this for numeral mode
        if (!pps.numeral && pps.backspace && !Util.isDelimiter(value.slice(-1), pps.delimiter, pps.delimiters)) {
            value = Util.headStr(value, value.length - 1);
        }

        // phone formatter
        if (pps.phone) {
            pps.result = pps.phoneFormatter.format(value);
            owner.updateValueState();

            return;
        }

        // numeral formatter
        if (pps.numeral) {
            pps.result = pps.prefix + pps.numeralFormatter.format(value);
            owner.updateValueState();

            return;
        }

        // date
        if (pps.date) {
            value = pps.dateFormatter.getValidatedDate(value);
        }

        // strip delimiters
        value = Util.stripDelimiters(value, pps.delimiter, pps.delimiters);

        // strip prefix
        value = Util.getPrefixStrippedValue(value, pps.prefix, pps.prefixLength);

        // strip non-numeric characters
        value = pps.numericOnly ? Util.strip(value, /[^\d]/g) : value;

        // convert case
        value = pps.uppercase ? value.toUpperCase() : value;
        value = pps.lowercase ? value.toLowerCase() : value;

        // prefix
        if (pps.prefix) {
            value = pps.prefix + value;

            // no blocks specified, no need to do formatting
            if (pps.blocksLength === 0) {
                pps.result = value;
                owner.updateValueState();

                return;
            }
        }

        // update credit card props
        if (pps.creditCard) {
            owner.updateCreditCardPropsByValue(value);
        }

        // strip over length characters
        value = Util.headStr(value, pps.maxLength);

        // apply blocks
        pps.result = Util.getFormattedValue(value, pps.blocks, pps.blocksLength, pps.delimiter, pps.delimiters);

        // nothing changed
        // prevent update value to avoid caret position change
        if (prev === pps.result && prev !== pps.prefix) {
            return;
        }

        owner.updateValueState();
    },

    updateCreditCardPropsByValue: function (value) {
        var owner = this, pps = owner.properties,
            Util = Cleave.Util,
            creditCardInfo;

        // At least one of the first 4 characters has changed
        if (Util.headStr(pps.result, 4) === Util.headStr(value, 4)) {
            return;
        }

        creditCardInfo = Cleave.CreditCardDetector.getInfo(value, pps.creditCardStrictMode);

        pps.blocks = creditCardInfo.blocks;
        pps.blocksLength = pps.blocks.length;
        pps.maxLength = Util.getMaxLength(pps.blocks);

        // credit card type changed
        if (pps.creditCardType !== creditCardInfo.type) {
            pps.creditCardType = creditCardInfo.type;

            pps.onCreditCardTypeChanged.call(owner, pps.creditCardType);
        }
    },

    updateValueState: function () {
        var owner = this;

        owner.element.value = owner.properties.result;
    },

    setPhoneRegionCode: function (phoneRegionCode) {
        var owner = this, pps = owner.properties;

        pps.phoneRegionCode = phoneRegionCode;
        owner.initPhoneFormatter();
        owner.onChange();
    },

    setRawValue: function (value) {
        var owner = this, pps = owner.properties;

        value = value !== undefined ? value.toString() : '';

        if (pps.numeral) {
            value = value.replace('.', pps.numeralDecimalMark);
        }

        owner.element.value = value;
        owner.onInput(value);
    },

    getRawValue: function () {
        var owner = this,
            pps = owner.properties,
            Util = Cleave.Util,
            rawValue = owner.element.value;

        if (pps.rawValueTrimPrefix) {
            rawValue = Util.getPrefixStrippedValue(rawValue, pps.prefix, pps.prefixLength);
        }

        if (pps.numeral) {
            rawValue = pps.numeralFormatter.getRawValue(rawValue);
        } else {
            rawValue = Util.stripDelimiters(rawValue, pps.delimiter, pps.delimiters);
        }

        return rawValue;
    },

    getFormattedValue: function () {
        return this.element.value;
    },

    destroy: function () {
        var owner = this;

        owner.element.removeEventListener('input', owner.onChangeListener);
        owner.element.removeEventListener('keydown', owner.onKeyDownListener);
        owner.element.removeEventListener('cut', owner.onCutListener);
        owner.element.removeEventListener('copy', owner.onCopyListener);
    },

    toString: function () {
        return '[Cleave Object]';
    }
};

Cleave.NumeralFormatter = __webpack_require__(617);
Cleave.DateFormatter = __webpack_require__(616);
Cleave.PhoneFormatter = __webpack_require__(618);
Cleave.CreditCardDetector = __webpack_require__(615);
Cleave.Util = __webpack_require__(619);
Cleave.DefaultProperties = __webpack_require__(614);

// for angular directive
((typeof global === 'object' && global) ? global : window)['Cleave'] = Cleave;

// CommonJS
module.exports = Cleave;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * Props Assignment
 *
 * Separate this, so react module can share the usage
 */
var DefaultProperties = {
    // Maybe change to object-assign
    // for now just keep it as simple
    assign: function (target, opts) {
        target = target || {};
        opts = opts || {};

        // credit card
        target.creditCard = !!opts.creditCard;
        target.creditCardStrictMode = !!opts.creditCardStrictMode;
        target.creditCardType = '';
        target.onCreditCardTypeChanged = opts.onCreditCardTypeChanged || (function () {});

        // phone
        target.phone = !!opts.phone;
        target.phoneRegionCode = opts.phoneRegionCode || 'AU';
        target.phoneFormatter = {};

        // date
        target.date = !!opts.date;
        target.datePattern = opts.datePattern || ['d', 'm', 'Y'];
        target.dateFormatter = {};

        // numeral
        target.numeral = !!opts.numeral;
        target.numeralDecimalScale = opts.numeralDecimalScale >= 0 ? opts.numeralDecimalScale : 2;
        target.numeralDecimalMark = opts.numeralDecimalMark || '.';
        target.numeralThousandsGroupStyle = opts.numeralThousandsGroupStyle || 'thousand';
        target.numeralPositiveOnly = !!opts.numeralPositiveOnly;

        // others
        target.numericOnly = target.creditCard || target.date || !!opts.numericOnly;

        target.uppercase = !!opts.uppercase;
        target.lowercase = !!opts.lowercase;

        target.prefix = (target.creditCard || target.phone || target.date) ? '' : (opts.prefix || '');
        target.prefixLength = target.prefix.length;
        target.rawValueTrimPrefix = !!opts.rawValueTrimPrefix;
        target.copyDelimiter = !!opts.copyDelimiter;

        target.initValue = opts.initValue === undefined ? '' : opts.initValue.toString();

        target.delimiter =
            (opts.delimiter || opts.delimiter === '') ? opts.delimiter :
                (opts.date ? '/' :
                    (opts.numeral ? ',' :
                        (opts.phone ? ' ' :
                            ' ')));
        target.delimiters = opts.delimiters || [];

        target.blocks = opts.blocks || [];
        target.blocksLength = target.blocks.length;

        target.root = (typeof global === 'object' && global) ? global : window;

        target.maxLength = 0;

        target.backspace = false;
        target.result = '';

        return target;
    }
};

module.exports = DefaultProperties;


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CreditCardDetector = {
    blocks: {
        uatp:          [4, 5, 6],
        amex:          [4, 6, 5],
        diners:        [4, 6, 4],
        discover:      [4, 4, 4, 4],
        mastercard:    [4, 4, 4, 4],
        dankort:       [4, 4, 4, 4],
        instapayment:  [4, 4, 4, 4],
        jcb:           [4, 4, 4, 4],
        maestro:       [4, 4, 4, 4],
        visa:          [4, 4, 4, 4],
        general:       [4, 4, 4, 4],
        generalStrict: [4, 4, 4, 7]
    },

    re: {
        // starts with 1; 15 digits, not starts with 1800 (jcb card)
        uatp: /^(?!1800)1\d{0,14}/,

        // starts with 34/37; 15 digits
        amex: /^3[47]\d{0,13}/,

        // starts with 6011/65/644-649; 16 digits
        discover: /^(?:6011|65\d{0,2}|64[4-9]\d?)\d{0,12}/,

        // starts with 300-305/309 or 36/38/39; 14 digits
        diners: /^3(?:0([0-5]|9)|[689]\d?)\d{0,11}/,

        // starts with 51-55/22-27; 16 digits
        mastercard: /^(5[1-5]|2[2-7])\d{0,14}/,

        // starts with 5019/4175/4571; 16 digits
        dankort: /^(5019|4175|4571)\d{0,12}/,

        // starts with 637-639; 16 digits
        instapayment: /^63[7-9]\d{0,13}/,

        // starts with 2131/1800/35; 16 digits
        jcb: /^(?:2131|1800|35\d{0,2})\d{0,12}/,

        // starts with 50/56-58/6304/67; 16 digits
        maestro: /^(?:5[0678]\d{0,2}|6304|67\d{0,2})\d{0,12}/,

        // starts with 4; 16 digits
        visa: /^4\d{0,15}/
    },

    getInfo: function (value, strictMode) {
        var blocks = CreditCardDetector.blocks,
            re = CreditCardDetector.re;

        // In theory, visa credit card can have up to 19 digits number.
        // Set strictMode to true will remove the 16 max-length restrain,
        // however, I never found any website validate card number like
        // this, hence probably you don't need to enable this option.
        strictMode = !!strictMode;

        if (re.amex.test(value)) {
            return {
                type:   'amex',
                blocks: blocks.amex
            };
        } else if (re.uatp.test(value)) {
            return {
                type:   'uatp',
                blocks: blocks.uatp
            };
        } else if (re.diners.test(value)) {
            return {
                type:   'diners',
                blocks: blocks.diners
            };
        } else if (re.discover.test(value)) {
            return {
                type:   'discover',
                blocks: blocks.discover
            };
        } else if (re.mastercard.test(value)) {
            return {
                type:   'mastercard',
                blocks: blocks.mastercard
            };
        } else if (re.dankort.test(value)) {
            return {
                type:   'dankort',
                blocks: blocks.dankort
            };
        } else if (re.instapayment.test(value)) {
            return {
                type:   'instapayment',
                blocks: blocks.instapayment
            };
        } else if (re.jcb.test(value)) {
            return {
                type:   'jcb',
                blocks: blocks.jcb
            };
        } else if (re.maestro.test(value)) {
            return {
                type:   'maestro',
                blocks: blocks.maestro
            };
        } else if (re.visa.test(value)) {
            return {
                type:   'visa',
                blocks: strictMode ? blocks.generalStrict : blocks.visa
            };
        } else {
            return {
                type:   'unknown',
                blocks: blocks.general
            };
        }
    }
};

module.exports = CreditCardDetector;



/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DateFormatter = function (datePattern) {
    var owner = this;

    owner.blocks = [];
    owner.datePattern = datePattern;
    owner.initBlocks();
};

DateFormatter.prototype = {
    initBlocks: function () {
        var owner = this;
        owner.datePattern.forEach(function (value) {
            if (value === 'Y') {
                owner.blocks.push(4);
            } else {
                owner.blocks.push(2);
            }
        });
    },

    getBlocks: function () {
        return this.blocks;
    },

    getValidatedDate: function (value) {
        var owner = this, result = '';

        value = value.replace(/[^\d]/g, '');

        owner.blocks.forEach(function (length, index) {
            if (value.length > 0) {
                var sub = value.slice(0, length),
                    sub0 = sub.slice(0, 1),
                    rest = value.slice(length);

                switch (owner.datePattern[index]) {
                case 'd':
                    if (sub === '00') {
                        sub = '01';
                    } else if (parseInt(sub0, 10) > 3) {
                        sub = '0' + sub0;
                    } else if (parseInt(sub, 10) > 31) {
                        sub = '31';
                    }

                    break;

                case 'm':
                    if (sub === '00') {
                        sub = '01';
                    } else if (parseInt(sub0, 10) > 1) {
                        sub = '0' + sub0;
                    } else if (parseInt(sub, 10) > 12) {
                        sub = '12';
                    }

                    break;
                }

                result += sub;

                // update remaining string
                value = rest;
            }
        });

        return result;
    }
};

module.exports = DateFormatter;



/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var NumeralFormatter = function (numeralDecimalMark,
                                 numeralDecimalScale,
                                 numeralThousandsGroupStyle,
                                 numeralPositiveOnly,
                                 delimiter) {
    var owner = this;

    owner.numeralDecimalMark = numeralDecimalMark || '.';
    owner.numeralDecimalScale = numeralDecimalScale >= 0 ? numeralDecimalScale : 2;
    owner.numeralThousandsGroupStyle = numeralThousandsGroupStyle || NumeralFormatter.groupStyle.thousand;
    owner.numeralPositiveOnly = !!numeralPositiveOnly;
    owner.delimiter = (delimiter || delimiter === '') ? delimiter : ',';
    owner.delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';
};

NumeralFormatter.groupStyle = {
    thousand: 'thousand',
    lakh:     'lakh',
    wan:      'wan'
};

NumeralFormatter.prototype = {
    getRawValue: function (value) {
        return value.replace(this.delimiterRE, '').replace(this.numeralDecimalMark, '.');
    },

    format: function (value) {
        var owner = this, parts, partInteger, partDecimal = '';

        // strip alphabet letters
        value = value.replace(/[A-Za-z]/g, '')
            // replace the first decimal mark with reserved placeholder
            .replace(owner.numeralDecimalMark, 'M')

            // strip non numeric letters except minus and "M"
            // this is to ensure prefix has been stripped
            .replace(/[^\dM-]/g, '')

            // replace the leading minus with reserved placeholder
            .replace(/^\-/, 'N')

            // strip the other minus sign (if present)
            .replace(/\-/g, '')

            // replace the minus sign (if present)
            .replace('N', owner.numeralPositiveOnly ? '' : '-')

            // replace decimal mark
            .replace('M', owner.numeralDecimalMark)

            // strip any leading zeros
            .replace(/^(-)?0+(?=\d)/, '$1');

        partInteger = value;

        if (value.indexOf(owner.numeralDecimalMark) >= 0) {
            parts = value.split(owner.numeralDecimalMark);
            partInteger = parts[0];
            partDecimal = owner.numeralDecimalMark + parts[1].slice(0, owner.numeralDecimalScale);
        }

        switch (owner.numeralThousandsGroupStyle) {
        case NumeralFormatter.groupStyle.lakh:
            partInteger = partInteger.replace(/(\d)(?=(\d\d)+\d$)/g, '$1' + owner.delimiter);

            break;

        case NumeralFormatter.groupStyle.wan:
            partInteger = partInteger.replace(/(\d)(?=(\d{4})+$)/g, '$1' + owner.delimiter);

            break;

        default:
            partInteger = partInteger.replace(/(\d)(?=(\d{3})+$)/g, '$1' + owner.delimiter);
        }

        return partInteger.toString() + (owner.numeralDecimalScale > 0 ? partDecimal.toString() : '');
    }
};

module.exports = NumeralFormatter;


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PhoneFormatter = function (formatter, delimiter) {
    var owner = this;

    owner.delimiter = (delimiter || delimiter === '') ? delimiter : ' ';
    owner.delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';

    owner.formatter = formatter;
};

PhoneFormatter.prototype = {
    setFormatter: function (formatter) {
        this.formatter = formatter;
    },

    format: function (phoneNumber) {
        var owner = this;

        owner.formatter.clear();

        // only keep number and +
        phoneNumber = phoneNumber.replace(/[^\d+]/g, '');

        // strip delimiter
        phoneNumber = phoneNumber.replace(owner.delimiterRE, '');

        var result = '', current, validated = false;

        for (var i = 0, iMax = phoneNumber.length; i < iMax; i++) {
            current = owner.formatter.inputDigit(phoneNumber.charAt(i));

            // has ()- or space inside
            if (/[\s()-]/g.test(current)) {
                result = current;

                validated = true;
            } else {
                if (!validated) {
                    result = current;
                }
                // else: over length input
                // it turns to invalid number again
            }
        }

        // strip ()
        // e.g. US: 7161234567 returns (716) 123-4567
        result = result.replace(/[()]/g, '');
        // replace library delimiter with user customized delimiter
        result = result.replace(/[\s-]/g, owner.delimiter);

        return result;
    }
};

module.exports = PhoneFormatter;



/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = {
    noop: function () {
    },

    strip: function (value, re) {
        return value.replace(re, '');
    },

    isDelimiter: function (letter, delimiter, delimiters) {
        // single delimiter
        if (delimiters.length === 0) {
            return letter === delimiter;
        }

        // multiple delimiters
        return delimiters.some(function (current) {
            if (letter === current) {
                return true;
            }
        });
    },

    stripDelimiters: function (value, delimiter, delimiters) {
        // single delimiter
        if (delimiters.length === 0) {
            var delimiterRE = delimiter ? new RegExp('\\' + delimiter, 'g') : '';

            return value.replace(delimiterRE, '');
        }

        // multiple delimiters
        delimiters.forEach(function (current) {
            value = value.replace(new RegExp('\\' + current, 'g'), '');
        });

        return value;
    },

    headStr: function (str, length) {
        return str.slice(0, length);
    },

    getMaxLength: function (blocks) {
        return blocks.reduce(function (previous, current) {
            return previous + current;
        }, 0);
    },

    // strip value by prefix length
    // for prefix: PRE
    // (PRE123, 3) -> 123
    // (PR123, 3) -> 23 this happens when user hits backspace in front of "PRE"
    getPrefixStrippedValue: function (value, prefix, prefixLength) {
        if (value.slice(0, prefixLength) !== prefix) {
            var diffIndex = this.getFirstDiffIndex(prefix, value.slice(0, prefixLength));

            value = prefix + value.slice(diffIndex, diffIndex + 1) + value.slice(prefixLength + 1);
        }

        return value.slice(prefixLength);
    },

    getFirstDiffIndex: function (prev, current) {
        var index = 0;

        while (prev.charAt(index) === current.charAt(index))
            if (prev.charAt(index++) === '')
                return -1;

        return index;
    },

    getFormattedValue: function (value, blocks, blocksLength, delimiter, delimiters) {
        var result = '',
            multipleDelimiters = delimiters.length > 0,
            currentDelimiter;

        // no options, normal input
        if (blocksLength === 0) {
            return value;
        }

        blocks.forEach(function (length, index) {
            if (value.length > 0) {
                var sub = value.slice(0, length),
                    rest = value.slice(length);

                result += sub;

                currentDelimiter = multipleDelimiters ? (delimiters[index] || currentDelimiter) : delimiter;

                if (sub.length === length && index < blocksLength - 1) {
                    result += currentDelimiter;
                }

                // update remaining string
                value = rest;
            }
        });

        return result;
    }
};

module.exports = Util;


/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "\n@-webkit-keyframes spinAround {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n}\n}\n@keyframes spinAround {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n}\n}\n.button[data-v-6e8883ff] {\n  margin: 5px 0 0;\n}\n.control .button[data-v-6e8883ff] {\n  margin: inherit;\n}\n@media screen and (max-width: 768px) {\n.control.has-addons input[data-v-6e8883ff] {\n    width: 100%;\n}\n.control.has-addons input.is-expanded[data-v-6e8883ff] {\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(570),
  /* template */
  __webpack_require__(721),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/kimnh/Codes/WebShop/admin-template/laravel-vue-admin/node_modules/vue-cleave/src/Cleave.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Cleave.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22914ed7", Component.options)
  } else {
    hotAPI.reload("data-v-22914ed7", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function($event) {
        _vm.updateValue($event.target.value)
      }
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-22914ed7", module.exports)
  }
}

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "tile is-ancestor"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Cleave.js")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Format your <input/> content when you are typing")]), _vm._v(" "), _c('div', {
    staticClass: "columns"
  }, [_c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Credit card number")]), _vm._v(" "), _c('cleave', {
    staticClass: "input",
    attrs: {
      "placeholder": "Enter credit card number",
      "options": {
        creditCard: true
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "control"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Phone number")]), _vm._v(" "), _c('cleave', {
    staticClass: "input",
    attrs: {
      "type": "tel",
      "placeholder": "Enter phone number",
      "options": {
        phone: true,
        phoneRegionCode: 'cn'
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "control"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Numeral")]), _vm._v(" "), _c('cleave', {
    staticClass: "input",
    attrs: {
      "placeholder": "Enter numeral",
      "options": {
        numeral: true,
        numeralThousandsGroupStyle: 'thousand'
      }
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Date")]), _vm._v(" "), _c('cleave', {
    staticClass: "input",
    attrs: {
      "placeholder": "YYYY/MM/DD",
      "value": '20160901',
      "options": {
        date: true,
        datePattern: ['Y', 'm', 'd']
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "control"
  }, [_c('cleave', {
    staticClass: "input",
    attrs: {
      "placeholder": "MM/YY",
      "options": {
        date: true,
        datePattern: ['m', 'y']
      }
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "column"
  }, [_c('div', {
    staticClass: "control"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Custom options")]), _vm._v(" "), _c('cleave', {
    staticClass: "input",
    attrs: {
      "placeholder": "Blocks: [4, 3, 3, 4]",
      "options": {
        blocks: [4, 3, 3, 4],
        uppercase: true
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "control"
  }, [_c('cleave', {
    staticClass: "input",
    attrs: {
      "placeholder": "Delimiter: '·'",
      "options": {
        delimiter: '·',
        blocks: [3, 3, 3, 3],
        uppercase: true
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "control"
  }, [_c('cleave', {
    staticClass: "input",
    attrs: {
      "options": {
        prefix: 'PREFIX',
        delimiter: '-',
        blocks: [6, 4, 4, 4],
        uppercase: true
      }
    }
  })], 1)])])])])]), _vm._v(" "), _vm._m(2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent is-4"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Controls")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Name")]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Text input"
    }
  })]), _vm._v(" "), _c('label', {
    staticClass: "label"
  }, [_vm._v("Username")]), _vm._v(" "), _c('p', {
    staticClass: "control has-icon has-icon-right"
  }, [_c('input', {
    staticClass: "input is-success",
    attrs: {
      "type": "text",
      "placeholder": "Text input",
      "value": "bulma"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-check"
  })]), _vm._v(" "), _c('span', {
    staticClass: "help is-success"
  }, [_vm._v("This username is available")])]), _vm._v(" "), _c('label', {
    staticClass: "label"
  }, [_vm._v("Email")]), _vm._v(" "), _c('p', {
    staticClass: "control has-icon has-icon-right"
  }, [_c('input', {
    staticClass: "input is-danger",
    attrs: {
      "type": "text",
      "placeholder": "Email input",
      "value": "hello@"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-warning"
  })]), _vm._v(" "), _c('span', {
    staticClass: "help is-danger"
  }, [_vm._v("This email is invalid")])]), _vm._v(" "), _c('label', {
    staticClass: "label"
  }, [_vm._v("Subject")]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('span', {
    staticClass: "select"
  }, [_c('select', [_c('option', [_vm._v("Select dropdown")]), _vm._v(" "), _c('option', [_vm._v("With options")])])])]), _vm._v(" "), _c('label', {
    staticClass: "label"
  }, [_vm._v("Message")]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('textarea', {
    staticClass: "textarea",
    attrs: {
      "placeholder": "Textarea"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('label', {
    staticClass: "checkbox"
  }, [_c('input', {
    attrs: {
      "type": "checkbox"
    }
  }), _vm._v("\n              Remember me\n            ")])]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('label', {
    staticClass: "radio"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "question"
    }
  }), _vm._v("\n              Yes\n            ")]), _vm._v(" "), _c('label', {
    staticClass: "radio"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "question"
    }
  }), _vm._v("\n              No\n            ")])]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "button is-primary"
  }, [_vm._v("Submit")]), _vm._v(" "), _c('button', {
    staticClass: "button is-link"
  }, [_vm._v("Cancel")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent is-5 is-vertical"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Colors")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('p', {
    staticClass: "control"
  }, [_c('input', {
    staticClass: "input is-primary",
    attrs: {
      "type": "text",
      "placeholder": "Primary input"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('input', {
    staticClass: "input is-info",
    attrs: {
      "type": "text",
      "placeholder": "Info input"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('input', {
    staticClass: "input is-success",
    attrs: {
      "type": "text",
      "placeholder": "Success input"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('input', {
    staticClass: "input is-warning",
    attrs: {
      "type": "text",
      "placeholder": "Warning input"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('input', {
    staticClass: "input is-danger",
    attrs: {
      "type": "text",
      "placeholder": "Danger input"
    }
  })])])]), _vm._v(" "), _c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Sizes")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('p', {
    staticClass: "control"
  }, [_c('input', {
    staticClass: "input is-small",
    attrs: {
      "type": "text",
      "placeholder": "Small input"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Normal input"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('input', {
    staticClass: "input is-medium",
    attrs: {
      "type": "text",
      "placeholder": "Medium input"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('input', {
    staticClass: "input is-large",
    attrs: {
      "type": "text",
      "placeholder": "Large input"
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("States")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Loading")]), _vm._v(" "), _c('p', {
    staticClass: "control is-loading"
  }, [_c('input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Loading input"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "control is-loading"
  }, [_c('textarea', {
    staticClass: "textarea",
    attrs: {
      "placeholder": "Loading textarea"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('h2', {
    staticClass: "subtitle"
  }, [_vm._v("Disabled")]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Disabled input",
      "disabled": ""
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('textarea', {
    staticClass: "textarea",
    attrs: {
      "placeholder": "Disabled textarea",
      "disabled": ""
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('label', {
    staticClass: "checkbox is-disabled"
  }, [_c('input', {
    attrs: {
      "type": "checkbox",
      "disabled": ""
    }
  }), _vm._v("\n              Remember me\n            ")])]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('label', {
    staticClass: "radio is-disabled"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "question",
      "disabled": ""
    }
  }), _vm._v("\n              Yes\n            ")]), _vm._v(" "), _c('label', {
    staticClass: "radio is-disabled"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "question",
      "disabled": ""
    }
  }), _vm._v("\n              No\n            ")])]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "button is-primary",
    attrs: {
      "disabled": ""
    }
  }, [_vm._v("Submit")]), _vm._v(" "), _c('button', {
    staticClass: "button",
    attrs: {
      "disabled": ""
    }
  }, [_vm._v("Cancel")])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tile is-parent is-3"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("With Icon")]), _vm._v(" "), _c('h2', {
    staticClass: "subtitle"
  }, [_c('a', {
    attrs: {
      "href": "http://fontawesome.io/"
    }
  }, [_vm._v("Font Awesome Icons")])]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('p', {
    staticClass: "control has-icon"
  }, [_c('input', {
    staticClass: "input",
    attrs: {
      "type": "email",
      "placeholder": "Email"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-envelope"
  })])]), _vm._v(" "), _c('p', {
    staticClass: "control has-icon"
  }, [_c('input', {
    staticClass: "input",
    attrs: {
      "type": "password",
      "placeholder": "Password"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "icon is-small"
  }, [_c('i', {
    staticClass: "fa fa-lock"
  })])]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "button is-success"
  }, [_vm._v("\n              Login\n            ")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "tile is-ancestor"
  }, [_c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Addons")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('p', {
    staticClass: "control has-addons"
  }, [_c('input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Find a repository"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "button is-info"
  }, [_vm._v("Search")])]), _vm._v(" "), _c('p', {
    staticClass: "control has-addons"
  }, [_c('span', {
    staticClass: "select"
  }, [_c('select', [_c('option', [_vm._v("$")]), _vm._v(" "), _c('option', [_vm._v("£")]), _vm._v(" "), _c('option', [_vm._v("€")])])]), _vm._v(" "), _c('input', {
    staticClass: "input is-expanded",
    attrs: {
      "type": "text",
      "placeholder": "Expanded"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "button is-success"
  }, [_vm._v("\n              Transfer\n            ")])]), _vm._v(" "), _c('p', {
    staticClass: "control has-addons has-addons-centered"
  }, [_c('span', {
    staticClass: "select"
  }, [_c('select', [_c('option', [_vm._v("$")]), _vm._v(" "), _c('option', [_vm._v("£")]), _vm._v(" "), _c('option', [_vm._v("€")])])]), _vm._v(" "), _c('input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Centered"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "button is-success"
  }, [_vm._v("\n              Transfer\n            ")])]), _vm._v(" "), _c('p', {
    staticClass: "control has-addons has-addons-right"
  }, [_c('span', {
    staticClass: "select"
  }, [_c('select', [_c('option', [_vm._v("$")]), _vm._v(" "), _c('option', [_vm._v("£")]), _vm._v(" "), _c('option', [_vm._v("€")])])]), _vm._v(" "), _c('input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Pull right"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "button is-success"
  }, [_vm._v("\n              Transfer\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "control is-grouped"
  }, [_c('p', {
    staticClass: "control is-expanded"
  }, [_c('input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Expanded and Grouped"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "control"
  }, [_c('a', {
    staticClass: "button is-info"
  }, [_vm._v("\n                Search\n              ")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "tile is-parent"
  }, [_c('article', {
    staticClass: "tile is-child box"
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v("Horizontal form")]), _vm._v(" "), _c('div', {
    staticClass: "block"
  }, [_c('div', {
    staticClass: "control is-horizontal"
  }, [_c('div', {
    staticClass: "control-label"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("From")])]), _vm._v(" "), _c('div', {
    staticClass: "control is-grouped"
  }, [_c('p', {
    staticClass: "control is-expanded"
  }, [_c('input', {
    staticClass: "input",
    attrs: {
      "type": "text",
      "placeholder": "Name"
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "control is-expanded"
  }, [_c('input', {
    staticClass: "input",
    attrs: {
      "type": "email",
      "placeholder": "Email"
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "control is-horizontal"
  }, [_c('div', {
    staticClass: "control-label"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Subject")])]), _vm._v(" "), _c('div', {
    staticClass: "control"
  }, [_c('div', {
    staticClass: "select is-fullwidth"
  }, [_c('select', [_c('option', [_vm._v("General enquiry")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "control is-horizontal"
  }, [_c('div', {
    staticClass: "control-label"
  }, [_c('label', {
    staticClass: "label"
  }, [_vm._v("Question")])]), _vm._v(" "), _c('div', {
    staticClass: "control"
  }, [_c('textarea', {
    staticClass: "textarea",
    attrs: {
      "placeholder": "Explain how we can help you"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "control is-horizontal"
  }, [_c('div', {
    staticClass: "control-label"
  }, [_c('label', {
    staticClass: "label"
  })]), _vm._v(" "), _c('div', {
    staticClass: "control"
  }, [_c('button', {
    staticClass: "button is-primary"
  }, [_vm._v("Submit")]), _vm._v(" "), _c('button', {
    staticClass: "button is-link"
  }, [_vm._v("Cancel")])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6e8883ff", module.exports)
  }
}

/***/ }),

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(641);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("be4f92a8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6e8883ff\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Form.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6e8883ff\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Form.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL3VpL0Zvcm0udnVlIiwid2VicGFjazovLy9DbGVhdmUudnVlIiwid2VicGFjazovLy9Gb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L2NsZWF2ZS5qcy9kaXN0L2FkZG9ucy9jbGVhdmUtcGhvbmUuY24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9jbGVhdmUuanMvc3JjL0NsZWF2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2NsZWF2ZS5qcy9zcmMvY29tbW9uL0RlZmF1bHRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL34vY2xlYXZlLmpzL3NyYy9zaG9ydGN1dHMvQ3JlZGl0Q2FyZERldGVjdG9yLmpzIiwid2VicGFjazovLy8uL34vY2xlYXZlLmpzL3NyYy9zaG9ydGN1dHMvRGF0ZUZvcm1hdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NsZWF2ZS5qcy9zcmMvc2hvcnRjdXRzL051bWVyYWxGb3JtYXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jbGVhdmUuanMvc3JjL3Nob3J0Y3V0cy9QaG9uZUZvcm1hdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2NsZWF2ZS5qcy9zcmMvdXRpbHMvVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL3VpL0Zvcm0udnVlP2QyZTAiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtY2xlYXZlL3NyYy9DbGVhdmUudnVlIiwid2VicGFjazovLy8uL34vdnVlLWNsZWF2ZS9zcmMvQ2xlYXZlLnZ1ZT83ZjA1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvdWkvRm9ybS52dWU/YzYwNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL3VpL0Zvcm0udnVlPzIzM2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFDQSx1QkFBNEs7O0FBRTVLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQTRHO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxpREFBaUQsSUFBSTtBQUNwSSxtQ0FBbUM7O0FBRW5DO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7Ozs7Ozs7OztZQUlBO2VBRUE7QUFIQTs7WUFLQTs7ZUFJQTs7QUFMQTtBQUxBOzt3QkFXQTs7Y0FHQTtBQUZBO0FBSUE7Ozs7NkNBRUE7MEJBQ0E7QUFHQTtBQUxBOzs4QkFNQTtzREFDQTtBQUVBOzBDQUNBO2dCQUNBO0FBRUE7QUEvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMFVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFGQTtBQURBLEU7Ozs7Ozs7QUN0VkEsMERBQVksZ0JBQWdCLHVCQUF1QixtREFBbUQsVUFBVSx3QkFBd0IseUNBQXlDLFFBQVEsZ0JBQWdCLGNBQWMsd0dBQXdHLHdDQUF3QyxtQkFBbUIsd0JBQXdCLGtDQUFrQyxnQkFBZ0Isc0NBQXNDLGNBQWMsT0FBTyxnQkFBZ0IsYUFBYSxnQkFBZ0Isc0JBQXNCLGNBQWMsZUFBZSx1QkFBdUIsU0FBUyxnQkFBZ0IsbUJBQW1CLFlBQVksV0FBVyxLQUFLLFdBQVcsZUFBZSxjQUFjLGtDQUFrQyxlQUFlLElBQUksZ0JBQWdCLHdFQUF3RSwyREFBMkQsc0JBQXNCLGFBQWEsU0FBUyxzQ0FBc0MsZ0JBQWdCLHVCQUF1QixXQUFXLEtBQUssaUJBQWlCLGlCQUFpQixxQkFBcUIsdUJBQXVCLGdDQUFnQyxXQUFXLEtBQUssa0NBQWtDLHNEQUFzRCw4REFBOEQsZ0JBQWdCLGFBQWEsdUJBQXVCLFFBQVEsZ0JBQWdCLG1CQUFtQixtQkFBbUIsaUJBQWlCLFdBQVcscUJBQXFCLElBQUksZ0JBQWdCLGdCQUFnQixjQUFjLFNBQVMsa0JBQWtCLGFBQWEsMEJBQTBCLGdCQUFnQixNQUFNLGdDQUFnQyxRQUFRLDBCQUEwQixVQUFVLHNCQUFzQix5QkFBeUIsS0FBSyxlQUFlLFFBQVEsUUFBUSxnQkFBZ0IsTUFBTSxTQUFTLGdCQUFnQiw4REFBOEQsa0JBQWtCLHlCQUF5QixnQkFBZ0IsV0FBVyx1Q0FBdUMsa0JBQWtCOztBQUVuZ0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsY0FBYzs7QUFFeEg7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsVUFBVSxnQkFBZ0IsdUJBQXVCLGtCQUFrQixhQUFhLFlBQVksK0JBQStCLDhCQUE4QixTQUFTLGNBQWMsZ0NBQWdDLGNBQWMsb09BQW9PLGdCQUFnQixNQUFNLDRDQUE0QyxxREFBcUQsVUFBVSxTQUFTLGtDQUFrQyxjQUFjLHlCQUF5QixJQUFJLEtBQUssc0JBQXNCLG1CQUFtQixNQUFNLElBQUksaUJBQWlCLDJCQUEyQixLQUFLLG1EQUFtRCxNQUFNLElBQUksNkNBQTZDLCtIQUErSCwrQ0FBK0MsY0FBYyxnQkFBZ0IsMkNBQTJDLElBQUksS0FBSyxhQUFhLHdGQUF3RixNQUFNLGdCQUFnQixTQUFTLFFBQVEsNENBQTRDLFVBQVUsc0RBQXNELG1CQUFtQixTQUFTLGlCQUFpQixvQkFBb0IsMEtBQTBLLHNCQUFzQixxQkFBcUIsMkNBQTJDLHFDQUFxQyxPQUFPLDhLQUE4SyxjQUFjLHFEQUFxRCxjQUFjLDBDQUEwQyxJQUFJLEtBQUssc0JBQXNCLDZHQUE2RyxTQUFTLGdCQUFnQixtQkFBbUIsaUVBQWlFLGNBQWMscUJBQXFCLGdCQUFnQixzRUFBc0UsSUFBSSxLQUFLLGFBQWEsdUdBQXVHLDJEQUEyRCxjQUFjLGNBQWMsZ0NBQWdDLFFBQVEsaUJBQWlCLElBQUksdUJBQXVCLGlDQUFpQyxzQkFBc0IsY0FBYywyQkFBMkIsd1VBQXdVLGNBQWMseUVBQXlFLGdLQUFnSyxjQUFjLDRCQUE0QixjQUFjLEdBQUcsMkVBQTJFLFdBQVcsK0NBQStDLHdCQUF3QixRQUFRLElBQUksOEhBQThILGdCQUFnQixxQkFBcUIsb0NBQW9DLHVDQUF1QyxrREFBa0QscURBQXFELFdBQVcsNkNBQTZDLFlBQVksK0JBQStCLHlDQUF5QyxtQkFBbUIseUJBQXlCLFlBQVksaUNBQWlDLGVBQWUsa0NBQWtDLDhCQUE4QixjQUFjLDhCQUE4QiwyQkFBMkIsdUJBQXVCLGFBQWEsZ0JBQWdCLE1BQU0sT0FBTyxNQUFNLE9BQU8sTUFBTSxnQ0FBZ0Msa0JBQWtCLEdBQUcsdURBQXVELElBQUksMkNBQTJDLElBQUksMENBQTBDLElBQUksbURBQW1ELElBQUksdURBQXVELElBQUksaUVBQWlFLElBQUksOERBQThELEtBQUssMERBQTBELGtCQUFrQixHQUFHLDZEQUE2RCxJQUFJLCtDQUErQyxJQUFJLCtDQUErQyxJQUFJLHNDQUFzQyxJQUFJLHFEQUFxRCxJQUFJLHNEQUFzRCxLQUFLLDBEQUEwRCxrQkFBa0IsR0FBRyx5REFBeUQsSUFBSSxnQ0FBZ0MsSUFBSSw4QkFBOEIsSUFBSSwwQkFBMEIsSUFBSSw2QkFBNkIsSUFBSSxnQ0FBZ0MsSUFBSSwrQkFBK0IsSUFBSSxtQ0FBbUMsSUFBSSx3QkFBd0IsS0FBSyx5QkFBeUIsS0FBSyx1QkFBdUIsS0FBSyw2QkFBNkIsS0FBSyw2QkFBNkIsS0FBSyw2Q0FBNkMsSUFBSSxzQ0FBc0MsS0FBSyxvQ0FBb0MsS0FBSyw0Q0FBNEMsS0FBSyxzREFBc0QsS0FBSyx1Q0FBdUMsS0FBSyw2Q0FBNkMsS0FBSyxtREFBbUQsS0FBSyxzREFBc0QsS0FBSywyRUFBMkUsS0FBSyxzQ0FBc0MsS0FBSywyQ0FBMkMsS0FBSyw4REFBOEQsS0FBSyxzQ0FBc0MsS0FBSywrREFBK0QsS0FBSywyREFBMkQscUNBQXFDLDZCQUE2Qix3RUFBd0UsWUFBWSxrQ0FBa0MsZ0JBQWdCLGdCQUFnQixTQUFTLGlCQUFpQixxQkFBcUIsdUNBQXVDLGlIQUFpSCxVQUFVLG1CQUFtQixtQ0FBbUMsY0FBYyw0QkFBNEIsR0FBRyxvQ0FBb0Msc0RBQXNELDZCQUE2Qiw2QkFBNkI7O0FBRXZyTzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxVQUFVLEtBQUssOEJBQThCLEtBQUssZUFBZSxJQUFJLE1BQU0sS0FBSyxPQUFPLEtBQUssMkJBQTJCLEVBQUUsT0FBTyxJQUFJLEtBQUssS0FBSyw2SUFBNkksRUFBRSxPQUFPLElBQUksS0FBSyxFQUFFLHVXQUF1VyxFQUFFLE9BQU8sSUFBSSxLQUFLLEVBQUUsaUNBQWlDLEVBQUUsT0FBTyxLQUFLLCtFQUErRSxFQUFFLE9BQU8sR0FBRyxxREFBcUQsRUFBRSxPQUFPLE1BQU0sZ0RBQWdELEVBQUUsT0FBTyxFQUFFLDJDQUEyQyxFQUFFLFFBQVEsSUFBSSwwVEFBMFQsSUFBSSxPQUFPLEtBQUssNkZBQTZGLEVBQUUsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLEVBQUUsOERBQThELEVBQUUsTUFBTSxFQUFFLHNDQUFzQyxJQUFJLGdDQUFnQyxFQUFFLE1BQU0sSUFBSSxnSEFBZ0gsRUFBRSxNQUFNLElBQUksOEJBQThCLEVBQUUsZ0JBQWdCLEVBQUUsMkNBQTJDLElBQUksTUFBTSxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sSUFBSSw0REFBNEQsRUFBRSxNQUFNLEVBQUUsMkhBQTJILEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxvV0FBb1csRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLDZKQUE2SixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsMkRBQTJELEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSw2REFBNkQsRUFBRSxNQUFNLEVBQUUsa0RBQWtELEVBQUUsTUFBTSxJQUFJLG9DQUFvQyxFQUFFLE1BQU0sRUFBRSw4REFBOEQsRUFBRSxNQUFNLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxJQUFJLGdIQUFnSCxFQUFFLE1BQU0sSUFBSSw4QkFBOEIsRUFBRSxnQkFBZ0IsRUFBRSwrQ0FBK0MsRUFBRSxNQUFNLElBQUksNERBQTRELEVBQUUsTUFBTSxFQUFFLDJIQUEySCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsb1dBQW9XLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSw2SkFBNkosRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLDJEQUEyRCxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsNkRBQTZELEVBQUUsTUFBTSxFQUFFLGtEQUFrRCxFQUFFLE1BQU0sSUFBSSxxRkFBcUYsRUFBRSxRQUFRLElBQUksT0FBTyxNQUFNLGtGQUFrRixlQUFlLDBCQUEwQixRQUFRLDRTQUE0Uyw0RUFBNEUsY0FBYyxzQ0FBc0MsS0FBSyxrSEFBa0gseUJBQXlCLHVMQUF1TCwyQkFBMkIsd0JBQXdCLGlLQUFpSyxxRDs7Ozs7Ozs7OzhDQ2xEdDVLOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx5REFBeUQ7O0FBRXpEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsOEVBQThFLFFBQVE7QUFDdEY7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OENDbFZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0Y7O0FBRXhGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN4RUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSx5QkFBeUI7QUFDekIsNEJBQTRCLEtBQUs7O0FBRWpDLDZCQUE2QjtBQUM3Qix3QkFBd0IsS0FBSzs7QUFFN0IsdUNBQXVDO0FBQ3ZDLGlDQUFpQyxJQUFJLGVBQWUsS0FBSzs7QUFFekQsK0NBQStDO0FBQy9DLDZDQUE2QyxLQUFLOztBQUVsRCxtQ0FBbUM7QUFDbkMsd0NBQXdDLEtBQUs7O0FBRTdDLHNDQUFzQztBQUN0QyxzQ0FBc0MsS0FBSzs7QUFFM0MsK0JBQStCO0FBQy9CLGtDQUFrQyxLQUFLOztBQUV2QyxvQ0FBb0M7QUFDcEMsaUNBQWlDLElBQUksSUFBSSxLQUFLOztBQUU5Qyx3Q0FBd0M7QUFDeEMsZ0NBQWdDLElBQUksV0FBVyxJQUFJLElBQUksS0FBSzs7QUFFNUQseUJBQXlCO0FBQ3pCLG9CQUFvQixLQUFLO0FBQ3pCLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3ZIQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3hFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDBEQUEwRCxFQUFFOztBQUU1RDs7QUFFQTtBQUNBLDBEQUEwRCxFQUFFO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FDbEZBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsa0RBQWtELFVBQVU7QUFDNUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDeERBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUMxR0E7QUFDQTs7O0FBR0E7QUFDQSwwREFBMkQsUUFBUSxzQ0FBc0Msc0NBQXNDLEdBQUcsTUFBTSx3Q0FBd0Msd0NBQXdDLEdBQUcsR0FBRyx5QkFBeUIsUUFBUSxzQ0FBc0Msc0NBQXNDLEdBQUcsTUFBTSx3Q0FBd0Msd0NBQXdDLEdBQUcsR0FBRyw0QkFBNEIsb0JBQW9CLEdBQUcscUNBQXFDLG9CQUFvQixHQUFHLHdDQUF3Qyw4Q0FBOEMsa0JBQWtCLEdBQUcsMERBQTBELDJCQUEyQix5QkFBeUIsR0FBRyxHQUFHOztBQUV4d0I7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBc0Y7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFLGlEQUFpRCxJQUFJO0FBQ3BJLG1DQUFtQzs7QUFFbkM7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7O0FDM0JBLGdCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3JCQSxnQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLGFBQWEsYUFBYSwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsYUFBYSxhQUFhLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUN2a0JBOztBQUVBO0FBQ0EscUNBQWlOO0FBQ2pOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0SUFBNEksb0VBQW9FO0FBQ2hOLHFKQUFxSixvRUFBb0U7QUFDek47QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImpzLzkuMTE5YzIyZWQzNmU0MDkyZTM5ZmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTZlODg4M2ZmXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vRm9ybS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP2NhY2hlRGlyZWN0b3J5IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRm9ybS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTZlODg4M2ZmXFxcIn0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0Zvcm0udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTZlODg4M2ZmXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvdWkvRm9ybS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBGb3JtLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi02ZTg4ODNmZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTZlODg4M2ZmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9idWlsZHMvanMvdmlld3MvdWkvRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCI8dGVtcGxhdGU+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtYmluZDp2YWx1ZT1cInZhbHVlXCIgQGlucHV0PVwidXBkYXRlVmFsdWUoJGV2ZW50LnRhcmdldC52YWx1ZSlcIiAvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDbGVhdmUgZnJvbSAnY2xlYXZlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICcnXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICBkZWZhdWx0OiAoKSA9PiAoe30pXG4gICAgfVxuICB9LFxuXG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGVhdmU6IG51bGxcbiAgICB9XG4gIH0sXG4gIFxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlVmFsdWUodmFsdWUpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpO1xuICAgIH0sXG4gIH0sXG5cbiAgbW91bnRlZCAoKSB7XG4gICAgdGhpcy5jbGVhdmUgPSBuZXcgQ2xlYXZlKHRoaXMuJGVsLCB0aGlzLm9wdGlvbnMpXG4gIH0sXG5cbiAgYmVmb3JlRGVzdHJveSAoKSB7XG4gICAgdGhpcy5jbGVhdmUuZGVzdHJveSgpXG4gIH1cblxufVxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ2xlYXZlLnZ1ZT8yMTJjNmEwMCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1hbmNlc3RvclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50IGlzLTRcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveFwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+Q29udHJvbHM8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja1wiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUZXh0IGlucHV0XCI+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbCBoYXMtaWNvbiBoYXMtaWNvbi1yaWdodFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dCBpcy1zdWNjZXNzXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRleHQgaW5wdXRcIiB2YWx1ZT1cImJ1bG1hXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIj48L2k+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoZWxwIGlzLXN1Y2Nlc3NcIj5UaGlzIHVzZXJuYW1lIGlzIGF2YWlsYWJsZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sIGhhcy1pY29uIGhhcy1pY29uLXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0IGlzLWRhbmdlclwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBpbnB1dFwiIHZhbHVlPVwiaGVsbG9AXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtd2FybmluZ1wiPjwvaT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhlbHAgaXMtZGFuZ2VyXCI+VGhpcyBlbWFpbCBpcyBpbnZhbGlkPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5TdWJqZWN0PC9sYWJlbD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlbGVjdFwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPlNlbGVjdCBkcm9wZG93bjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj5XaXRoIG9wdGlvbnM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJ0ZXh0YXJlYVwiIHBsYWNlaG9sZGVyPVwiVGV4dGFyZWFcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgIFJlbWVtYmVyIG1lXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW9cIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInF1ZXN0aW9uXCI+XG4gICAgICAgICAgICAgICAgWWVzXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInJhZGlvXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJxdWVzdGlvblwiPlxuICAgICAgICAgICAgICAgIE5vXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtbGlua1wiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50IGlzLTUgaXMtdmVydGljYWxcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveFwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+Q29sb3JzPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dCBpcy1wcmltYXJ5XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlByaW1hcnkgaW5wdXRcIj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dCBpcy1pbmZvXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkluZm8gaW5wdXRcIj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dCBpcy1zdWNjZXNzXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlN1Y2Nlc3MgaW5wdXRcIj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dCBpcy13YXJuaW5nXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIldhcm5pbmcgaW5wdXRcIj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dCBpcy1kYW5nZXJcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGFuZ2VyIGlucHV0XCI+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveFwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+U2l6ZXM8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja1wiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0IGlzLXNtYWxsXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNtYWxsIGlucHV0XCI+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTm9ybWFsIGlucHV0XCI+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQgaXMtbWVkaXVtXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1lZGl1bSBpbnB1dFwiPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0IGlzLWxhcmdlXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkxhcmdlIGlucHV0XCI+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwidGlsZSBpcy1wYXJlbnRcIj5cbiAgICAgICAgPGFydGljbGUgY2xhc3M9XCJ0aWxlIGlzLWNoaWxkIGJveFwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+U3RhdGVzPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2tcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInN1YnRpdGxlXCI+TG9hZGluZzwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2wgaXMtbG9hZGluZ1wiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJMb2FkaW5nIGlucHV0XCI+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2wgaXMtbG9hZGluZ1wiPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XCJ0ZXh0YXJlYVwiIHBsYWNlaG9sZGVyPVwiTG9hZGluZyB0ZXh0YXJlYVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJsb2NrXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJzdWJ0aXRsZVwiPkRpc2FibGVkPC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJEaXNhYmxlZCBpbnB1dFwiIGRpc2FibGVkPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cInRleHRhcmVhXCIgcGxhY2Vob2xkZXI9XCJEaXNhYmxlZCB0ZXh0YXJlYVwiIGRpc2FibGVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY2hlY2tib3ggaXMtZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgUmVtZW1iZXIgbWVcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYWRpbyBpcy1kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicXVlc3Rpb25cIiBkaXNhYmxlZD5cbiAgICAgICAgICAgICAgICBZZXNcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwicmFkaW8gaXMtZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInF1ZXN0aW9uXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgTm9cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXByaW1hcnlcIiBkaXNhYmxlZD5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIGRpc2FibGVkPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLWFuY2VzdG9yXCI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudCBpcy0zXCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPldpdGggSWNvbjwvaDE+XG4gICAgICAgICAgPGgyIGNsYXNzPVwic3VidGl0bGVcIj48YSBocmVmPVwiaHR0cDovL2ZvbnRhd2Vzb21lLmlvL1wiPkZvbnQgQXdlc29tZSBJY29uczwvYT48L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja1wiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sIGhhcy1pY29uXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWVudmVsb3BlXCI+PC9pPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2wgaGFzLWljb25cIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbG9ja1wiPjwvaT5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtcGFyZW50XCI+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGlsZSBpcy1jaGlsZCBib3hcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPkNsZWF2ZS5qczwvaDE+XG4gICAgICAgICAgPGgyIGNsYXNzPVwic3VidGl0bGVcIj5Gb3JtYXQgeW91ciAmbHQ7aW5wdXQvJmd0OyBjb250ZW50IHdoZW4geW91IGFyZSB0eXBpbmc8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5DcmVkaXQgY2FyZCBudW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxjbGVhdmUgY2xhc3M9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgY3JlZGl0IGNhcmQgbnVtYmVyXCIgOm9wdGlvbnM9XCJ7IGNyZWRpdENhcmQ6IHRydWUgfVwiPjwvY2xlYXZlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPlBob25lIG51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGNsZWF2ZSBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRlbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgcGhvbmUgbnVtYmVyXCIgOm9wdGlvbnM9XCJ7IHBob25lOiB0cnVlLCBwaG9uZVJlZ2lvbkNvZGU6ICdjbicgfVwiPjwvY2xlYXZlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPk51bWVyYWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxjbGVhdmUgY2xhc3M9XCJpbnB1dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbnVtZXJhbFwiIDpvcHRpb25zPVwieyBudW1lcmFsOiB0cnVlLCBudW1lcmFsVGhvdXNhbmRzR3JvdXBTdHlsZTogJ3Rob3VzYW5kJyB9XCI+PC9jbGVhdmU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5EYXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8Y2xlYXZlIGNsYXNzPVwiaW5wdXRcIiBwbGFjZWhvbGRlcj1cIllZWVkvTU0vRERcIiA6dmFsdWU9XCInMjAxNjA5MDEnXCIgOm9wdGlvbnM9XCJ7IGRhdGU6IHRydWUsIGRhdGVQYXR0ZXJuOiBbJ1knLCAnbScsICdkJ10gfVwiPjwvY2xlYXZlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8Y2xlYXZlIGNsYXNzPVwiaW5wdXRcIiBwbGFjZWhvbGRlcj1cIk1NL1lZXCIgOm9wdGlvbnM9XCJ7IGRhdGU6IHRydWUsIGRhdGVQYXR0ZXJuOiBbJ20nLCAneSddIH1cIj48L2NsZWF2ZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPkN1c3RvbSBvcHRpb25zPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8Y2xlYXZlIGNsYXNzPVwiaW5wdXRcIiBwbGFjZWhvbGRlcj1cIkJsb2NrczogWzQsIDMsIDMsIDRdXCIgOm9wdGlvbnM9XCJ7IGJsb2NrczogWzQsIDMsIDMsIDRdLCB1cHBlcmNhc2U6IHRydWUgfVwiPjwvY2xlYXZlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8Y2xlYXZlIGNsYXNzPVwiaW5wdXRcIiBwbGFjZWhvbGRlcj1cIkRlbGltaXRlcjogJ8K3J1wiIDpvcHRpb25zPVwieyBkZWxpbWl0ZXI6ICfCtycsIGJsb2NrczogWzMsIDMsIDMsIDNdLCB1cHBlcmNhc2U6IHRydWUgfVwiPjwvY2xlYXZlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8Y2xlYXZlIGNsYXNzPVwiaW5wdXRcIiA6b3B0aW9ucz1cInsgcHJlZml4OiAnUFJFRklYJywgZGVsaW1pdGVyOiAnLScsIGJsb2NrczogWzYsIDQsIDQsIDRdLCB1cHBlcmNhc2U6IHRydWUgfVwiPjwvY2xlYXZlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInRpbGUgaXMtYW5jZXN0b3JcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudFwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94XCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5BZGRvbnM8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja1wiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sIGhhcy1hZGRvbnNcIj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRmluZCBhIHJlcG9zaXRvcnlcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gaXMtaW5mb1wiPlNlYXJjaDwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbCBoYXMtYWRkb25zXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+JDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj7Cozwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj7igqw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dCBpcy1leHBhbmRlZFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFeHBhbmRlZFwiPlxuICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvbiBpcy1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgVHJhbnNmZXJcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sIGhhcy1hZGRvbnMgaGFzLWFkZG9ucy1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNlbGVjdFwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3Q+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPiQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+wqM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24+4oKsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gaXMtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgIFRyYW5zZmVyXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbCBoYXMtYWRkb25zIGhhcy1hZGRvbnMtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzZWxlY3RcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbj4kPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPsKjPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uPuKCrDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlB1bGwgcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJidXR0b24gaXMtc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgIFRyYW5zZmVyXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGlzLWdyb3VwZWRcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sIGlzLWV4cGFuZGVkXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRXhwYW5kZWQgYW5kIEdyb3VwZWRcIj5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvbiBpcy1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICBTZWFyY2hcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aWxlIGlzLXBhcmVudFwiPlxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRpbGUgaXMtY2hpbGQgYm94XCI+XG4gICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5Ib3Jpem9udGFsIGZvcm08L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJibG9ja1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgaXMtaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+RnJvbTwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbCBpcy1ncm91cGVkXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sIGlzLWV4cGFuZGVkXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCI+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbCBpcy1leHBhbmRlZFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCI+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgaXMtaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+U3ViamVjdDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWxlY3QgaXMtZnVsbHdpZHRoXCI+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPkdlbmVyYWwgZW5xdWlyeTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbCBpcy1ob3Jpem9udGFsXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5RdWVzdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cInRleHRhcmVhXCIgcGxhY2Vob2xkZXI9XCJFeHBsYWluIGhvdyB3ZSBjYW4gaGVscCB5b3VcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgaXMtaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1saW5rXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ2xlYXZlIGZyb20gJ3Z1ZS1jbGVhdmUnXG5pbXBvcnQgJ2NsZWF2ZS5qcy9kaXN0L2FkZG9ucy9jbGVhdmUtcGhvbmUuY24nXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIENsZWF2ZVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuQGltcG9ydCAnfmJ1bG1hL3Nhc3MvdXRpbGl0aWVzL21peGlucyc7XG5cbi5idXR0b24ge1xuICBtYXJnaW46IDVweCAwIDA7XG59XG5cbi5jb250cm9sIC5idXR0b24ge1xuICBtYXJnaW46IGluaGVyaXQ7XG59XG5cbi5jb250cm9sLmhhcy1hZGRvbnMge1xuICBAaW5jbHVkZSBtb2JpbGUoKSB7XG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgaW5wdXQuaXMtZXhwYW5kZWQge1xuICAgICAgZmxleC1zaHJpbms6IDE7XG4gICAgfVxuICB9XG59XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEZvcm0udnVlPzE1OTRhNzI1IiwiIWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4pe3ZhciBlPXQuc3BsaXQoXCIuXCIpLHI9VDtlWzBdaW4gcnx8IXIuZXhlY1NjcmlwdHx8ci5leGVjU2NyaXB0KFwidmFyIFwiK2VbMF0pO2Zvcih2YXIgaTtlLmxlbmd0aCYmKGk9ZS5zaGlmdCgpKTspZS5sZW5ndGh8fHZvaWQgMD09PW4/cj1yW2ldP3JbaV06cltpXT17fTpyW2ldPW59ZnVuY3Rpb24gbih0LG4pe2Z1bmN0aW9uIGUoKXt9ZS5wcm90b3R5cGU9bi5wcm90b3R5cGUsdC5NPW4ucHJvdG90eXBlLHQucHJvdG90eXBlPW5ldyBlLHQucHJvdG90eXBlLmNvbnN0cnVjdG9yPXQsdC5OPWZ1bmN0aW9uKHQsZSxyKXtmb3IodmFyIGk9QXJyYXkoYXJndW1lbnRzLmxlbmd0aC0yKSxsPTI7bDxhcmd1bWVudHMubGVuZ3RoO2wrKylpW2wtMl09YXJndW1lbnRzW2xdO3JldHVybiBuLnByb3RvdHlwZVtlXS5hcHBseSh0LGkpfX1mdW5jdGlvbiBlKHQsbil7bnVsbCE9dCYmdGhpcy5hLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiByKHQpe3QuYj1cIlwifWZ1bmN0aW9uIGkodCxuKXt0LnNvcnQobnx8bCl9ZnVuY3Rpb24gbCh0LG4pe3JldHVybiB0Pm4/MTpuPnQ/LTE6MH1mdW5jdGlvbiBhKHQpe3ZhciBuLGU9W10scj0wO2ZvcihuIGluIHQpZVtyKytdPXRbbl07cmV0dXJuIGV9ZnVuY3Rpb24gdSh0LG4pe3RoaXMuYj10LHRoaXMuYT17fTtmb3IodmFyIGU9MDtlPG4ubGVuZ3RoO2UrKyl7dmFyIHI9bltlXTt0aGlzLmFbci5iXT1yfX1mdW5jdGlvbiBvKHQpe3JldHVybiB0PWEodC5hKSxpKHQsZnVuY3Rpb24odCxuKXtyZXR1cm4gdC5iLW4uYn0pLHR9ZnVuY3Rpb24gcyh0LG4pe3N3aXRjaCh0aGlzLmI9dCx0aGlzLmc9ISFuLkcsdGhpcy5hPW4uYyx0aGlzLmo9bi50eXBlLHRoaXMuaD0hMSx0aGlzLmEpe2Nhc2UgazpjYXNlIEo6Y2FzZSBLOmNhc2UgTDpjYXNlIE86Y2FzZSBZOmNhc2UgVTp0aGlzLmg9ITB9dGhpcy5mPW4uZGVmYXVsdFZhbHVlfWZ1bmN0aW9uIGYoKXt0aGlzLmE9e30sdGhpcy5mPXRoaXMuaSgpLmEsdGhpcy5iPXRoaXMuZz1udWxsfWZ1bmN0aW9uIGModCxuKXtmb3IodmFyIGU9byh0LmkoKSkscj0wO3I8ZS5sZW5ndGg7cisrKXt2YXIgaT1lW3JdLGw9aS5iO2lmKG51bGwhPW4uYVtsXSl7dC5iJiZkZWxldGUgdC5iW2kuYl07dmFyIGE9MTE9PWkuYXx8MTA9PWkuYTtpZihpLmcpZm9yKHZhciBpPXAobixsKXx8W10sdT0wO3U8aS5sZW5ndGg7dSsrKXt2YXIgcz10LGY9bCxoPWE/aVt1XS5jbG9uZSgpOmlbdV07cy5hW2ZdfHwocy5hW2ZdPVtdKSxzLmFbZl0ucHVzaChoKSxzLmImJmRlbGV0ZSBzLmJbZl19ZWxzZSBpPXAobixsKSxhPyhhPXAodCxsKSk/YyhhLGkpOiQodCxsLGkuY2xvbmUoKSk6JCh0LGwsaSl9fX1mdW5jdGlvbiBwKHQsbil7dmFyIGU9dC5hW25dO2lmKG51bGw9PWUpcmV0dXJuIG51bGw7aWYodC5nKXtpZighKG4gaW4gdC5iKSl7dmFyIHI9dC5nLGk9dC5mW25dO2lmKG51bGwhPWUpaWYoaS5nKXtmb3IodmFyIGw9W10sYT0wO2E8ZS5sZW5ndGg7YSsrKWxbYV09ci5iKGksZVthXSk7ZT1sfWVsc2UgZT1yLmIoaSxlKTtyZXR1cm4gdC5iW25dPWV9cmV0dXJuIHQuYltuXX1yZXR1cm4gZX1mdW5jdGlvbiBoKHQsbixlKXt2YXIgcj1wKHQsbik7cmV0dXJuIHQuZltuXS5nP3JbZXx8MF06cn1mdW5jdGlvbiBkKHQsbil7dmFyIGU7aWYobnVsbCE9dC5hW25dKWU9aCh0LG4sdm9pZCAwKTtlbHNlIHQ6e2lmKGU9dC5mW25dLHZvaWQgMD09PWUuZil7dmFyIHI9ZS5qO2lmKHI9PT1Cb29sZWFuKWUuZj0hMTtlbHNlIGlmKHI9PT1OdW1iZXIpZS5mPTA7ZWxzZXtpZihyIT09U3RyaW5nKXtlPW5ldyByO2JyZWFrIHR9ZS5mPWUuaD9cIjBcIjpcIlwifX1lPWUuZn1yZXR1cm4gZX1mdW5jdGlvbiBnKHQsbil7cmV0dXJuIHQuZltuXS5nP251bGwhPXQuYVtuXT90LmFbbl0ubGVuZ3RoOjA6bnVsbCE9dC5hW25dPzE6MH1mdW5jdGlvbiAkKHQsbixlKXt0LmFbbl09ZSx0LmImJih0LmJbbl09ZSl9ZnVuY3Rpb24gYih0LG4pe3ZhciBlLHI9W107Zm9yKGUgaW4gbikwIT1lJiZyLnB1c2gobmV3IHMoZSxuW2VdKSk7cmV0dXJuIG5ldyB1KHQscil9LypcblxuIFByb3RvY29sIEJ1ZmZlciAyIENvcHlyaWdodCAyMDA4IEdvb2dsZSBJbmMuXG4gQWxsIG90aGVyIGNvZGUgY29weXJpZ2h0IGl0cyByZXNwZWN0aXZlIG93bmVycy5cbiBDb3B5cmlnaHQgKEMpIDIwMTAgVGhlIExpYnBob25lbnVtYmVyIEF1dGhvcnNcblxuIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4geW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiovXG5mdW5jdGlvbiBtKCl7Zi5jYWxsKHRoaXMpfWZ1bmN0aW9uIHkoKXtmLmNhbGwodGhpcyl9ZnVuY3Rpb24gdigpe2YuY2FsbCh0aGlzKX1mdW5jdGlvbiBfKCl7fWZ1bmN0aW9uIEMoKXt9ZnVuY3Rpb24gUygpe30vKlxuXG4gQ29weXJpZ2h0IChDKSAyMDEwIFRoZSBMaWJwaG9uZW51bWJlciBBdXRob3JzLlxuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbmZ1bmN0aW9uIHcoKXt0aGlzLmE9e319ZnVuY3Rpb24geCh0LG4pe2lmKG51bGw9PW4pcmV0dXJuIG51bGw7bj1uLnRvVXBwZXJDYXNlKCk7dmFyIGU9dC5hW25dO2lmKG51bGw9PWUpe2lmKGU9dHRbbl0sbnVsbD09ZSlyZXR1cm4gbnVsbDtlPShuZXcgUykuYSh2LmkoKSxlKSx0LmFbbl09ZX1yZXR1cm4gZX1mdW5jdGlvbiBOKHQpe3JldHVybiB0PVhbdF0sbnVsbD09dD9cIlpaXCI6dFswXX1mdW5jdGlvbiBBKHQpe3RoaXMuSD1SZWdFeHAoXCLigIhcIiksdGhpcy5CPVwiXCIsdGhpcy5tPW5ldyBlLHRoaXMudj1cIlwiLHRoaXMuaD1uZXcgZSx0aGlzLnU9bmV3IGUsdGhpcy5qPSEwLHRoaXMudz10aGlzLm89dGhpcy5EPSExLHRoaXMuRj13LmIoKSx0aGlzLnM9MCx0aGlzLmI9bmV3IGUsdGhpcy5BPSExLHRoaXMubD1cIlwiLHRoaXMuYT1uZXcgZSx0aGlzLmY9W10sdGhpcy5DPXQsdGhpcy5KPXRoaXMuZz1qKHRoaXMsdGhpcy5DKX1mdW5jdGlvbiBqKHQsbil7dmFyIGU7aWYobnVsbCE9biYmaXNOYU4obikmJm4udG9VcHBlckNhc2UoKWluIHR0KXtpZihlPXgodC5GLG4pLG51bGw9PWUpdGhyb3dcIkludmFsaWQgcmVnaW9uIGNvZGU6IFwiK247ZT1kKGUsMTApfWVsc2UgZT0wO3JldHVybiBlPXgodC5GLE4oZSkpLG51bGwhPWU/ZTpsdH1mdW5jdGlvbiBFKHQpe2Zvcih2YXIgbj10LmYubGVuZ3RoLGU9MDtuPmU7KytlKXt2YXIgaT10LmZbZV0sbD1kKGksMSk7aWYodC52PT1sKXJldHVybiExO3ZhciBhO2E9dDt2YXIgdT1pLG89ZCh1LDEpO2lmKC0xIT1vLmluZGV4T2YoXCJ8XCIpKWE9ITE7ZWxzZXtvPW8ucmVwbGFjZShhdCxcIlxcXFxkXCIpLG89by5yZXBsYWNlKHV0LFwiXFxcXGRcIikscihhLm0pO3ZhciBzO3M9YTt2YXIgdT1kKHUsMiksZj1cIjk5OTk5OTk5OTk5OTk5OVwiLm1hdGNoKG8pWzBdO2YubGVuZ3RoPHMuYS5iLmxlbmd0aD9zPVwiXCI6KHM9Zi5yZXBsYWNlKG5ldyBSZWdFeHAobyxcImdcIiksdSkscz1zLnJlcGxhY2UoUmVnRXhwKFwiOVwiLFwiZ1wiKSxcIuKAiFwiKSksMDxzLmxlbmd0aD8oYS5tLmEocyksYT0hMCk6YT0hMX1pZihhKXJldHVybiB0LnY9bCx0LkE9c3QudGVzdChoKGksNCkpLHQucz0wLCEwfXJldHVybiB0Lmo9ITF9ZnVuY3Rpb24gUih0LG4pe2Zvcih2YXIgZT1bXSxyPW4ubGVuZ3RoLTMsaT10LmYubGVuZ3RoLGw9MDtpPmw7KytsKXt2YXIgYT10LmZbbF07MD09ZyhhLDMpP2UucHVzaCh0LmZbbF0pOihhPWgoYSwzLE1hdGgubWluKHIsZyhhLDMpLTEpKSwwPT1uLnNlYXJjaChhKSYmZS5wdXNoKHQuZltsXSkpfXQuZj1lfWZ1bmN0aW9uIEYodCxuKXt0LmguYShuKTt2YXIgZT1uO2lmKHJ0LnRlc3QoZSl8fDE9PXQuaC5iLmxlbmd0aCYmZXQudGVzdChlKSl7dmFyIGksZT1uO1wiK1wiPT1lPyhpPWUsdC51LmEoZSkpOihpPW50W2VdLHQudS5hKGkpLHQuYS5hKGkpKSxuPWl9ZWxzZSB0Lmo9ITEsdC5EPSEwO2lmKCF0Lmope2lmKCF0LkQpaWYoUCh0KSl7aWYoVih0KSlyZXR1cm4gQih0KX1lbHNlIGlmKDA8dC5sLmxlbmd0aCYmKGU9dC5hLnRvU3RyaW5nKCkscih0LmEpLHQuYS5hKHQubCksdC5hLmEoZSksZT10LmIudG9TdHJpbmcoKSxpPWUubGFzdEluZGV4T2YodC5sKSxyKHQuYiksdC5iLmEoZS5zdWJzdHJpbmcoMCxpKSkpLHQubCE9SCh0KSlyZXR1cm4gdC5iLmEoXCIgXCIpLEIodCk7cmV0dXJuIHQuaC50b1N0cmluZygpfXN3aXRjaCh0LnUuYi5sZW5ndGgpe2Nhc2UgMDpjYXNlIDE6Y2FzZSAyOnJldHVybiB0LmgudG9TdHJpbmcoKTtjYXNlIDM6aWYoIVAodCkpcmV0dXJuIHQubD1IKHQpLE0odCk7dC53PSEwO2RlZmF1bHQ6cmV0dXJuIHQudz8oVih0KSYmKHQudz0hMSksdC5iLnRvU3RyaW5nKCkrdC5hLnRvU3RyaW5nKCkpOjA8dC5mLmxlbmd0aD8oZT1xKHQsbiksaT1JKHQpLDA8aS5sZW5ndGg/aTooUih0LHQuYS50b1N0cmluZygpKSxFKHQpP0codCk6dC5qP0QodCxlKTp0LmgudG9TdHJpbmcoKSkpOk0odCl9fWZ1bmN0aW9uIEIodCl7cmV0dXJuIHQuaj0hMCx0Lnc9ITEsdC5mPVtdLHQucz0wLHIodC5tKSx0LnY9XCJcIixNKHQpfWZ1bmN0aW9uIEkodCl7Zm9yKHZhciBuPXQuYS50b1N0cmluZygpLGU9dC5mLmxlbmd0aCxyPTA7ZT5yOysrcil7dmFyIGk9dC5mW3JdLGw9ZChpLDEpO2lmKG5ldyBSZWdFeHAoXCJeKD86XCIrbCtcIikkXCIpLnRlc3QobikpcmV0dXJuIHQuQT1zdC50ZXN0KGgoaSw0KSksbj1uLnJlcGxhY2UobmV3IFJlZ0V4cChsLFwiZ1wiKSxoKGksMikpLEQodCxuKX1yZXR1cm5cIlwifWZ1bmN0aW9uIEQodCxuKXt2YXIgZT10LmIuYi5sZW5ndGg7cmV0dXJuIHQuQSYmZT4wJiZcIiBcIiE9dC5iLnRvU3RyaW5nKCkuY2hhckF0KGUtMSk/dC5iK1wiIFwiK246dC5iK259ZnVuY3Rpb24gTSh0KXt2YXIgbj10LmEudG9TdHJpbmcoKTtpZigzPD1uLmxlbmd0aCl7Zm9yKHZhciBlPXQubyYmMDxnKHQuZywyMCk/cCh0LmcsMjApfHxbXTpwKHQuZywxOSl8fFtdLHI9ZS5sZW5ndGgsaT0wO3I+aTsrK2kpe3ZhciBsLGE9ZVtpXTsobD1udWxsPT10LmcuYVsxMl18fHQub3x8aChhLDYpKXx8KGw9ZChhLDQpLGw9MD09bC5sZW5ndGh8fGl0LnRlc3QobCkpLGwmJm90LnRlc3QoZChhLDIpKSYmdC5mLnB1c2goYSl9cmV0dXJuIFIodCxuKSxuPUkodCksMDxuLmxlbmd0aD9uOkUodCk/Ryh0KTp0LmgudG9TdHJpbmcoKX1yZXR1cm4gRCh0LG4pfWZ1bmN0aW9uIEcodCl7dmFyIG49dC5hLnRvU3RyaW5nKCksZT1uLmxlbmd0aDtpZihlPjApe2Zvcih2YXIgcj1cIlwiLGk9MDtlPmk7aSsrKXI9cSh0LG4uY2hhckF0KGkpKTtyZXR1cm4gdC5qP0QodCxyKTp0LmgudG9TdHJpbmcoKX1yZXR1cm4gdC5iLnRvU3RyaW5nKCl9ZnVuY3Rpb24gSCh0KXt2YXIgbixlPXQuYS50b1N0cmluZygpLGk9MDtyZXR1cm4gMSE9aCh0LmcsMTApP249ITE6KG49dC5hLnRvU3RyaW5nKCksbj1cIjFcIj09bi5jaGFyQXQoMCkmJlwiMFwiIT1uLmNoYXJBdCgxKSYmXCIxXCIhPW4uY2hhckF0KDEpKSxuPyhpPTEsdC5iLmEoXCIxXCIpLmEoXCIgXCIpLHQubz0hMCk6bnVsbCE9dC5nLmFbMTVdJiYobj1uZXcgUmVnRXhwKFwiXig/OlwiK2godC5nLDE1KStcIilcIiksbj1lLm1hdGNoKG4pLG51bGwhPW4mJm51bGwhPW5bMF0mJjA8blswXS5sZW5ndGgmJih0Lm89ITAsaT1uWzBdLmxlbmd0aCx0LmIuYShlLnN1YnN0cmluZygwLGkpKSkpLHIodC5hKSx0LmEuYShlLnN1YnN0cmluZyhpKSksZS5zdWJzdHJpbmcoMCxpKX1mdW5jdGlvbiBQKHQpe3ZhciBuPXQudS50b1N0cmluZygpLGU9bmV3IFJlZ0V4cChcIl4oPzpcXFxcK3xcIitoKHQuZywxMSkrXCIpXCIpLGU9bi5tYXRjaChlKTtyZXR1cm4gbnVsbCE9ZSYmbnVsbCE9ZVswXSYmMDxlWzBdLmxlbmd0aD8odC5vPSEwLGU9ZVswXS5sZW5ndGgscih0LmEpLHQuYS5hKG4uc3Vic3RyaW5nKGUpKSxyKHQuYiksdC5iLmEobi5zdWJzdHJpbmcoMCxlKSksXCIrXCIhPW4uY2hhckF0KDApJiZ0LmIuYShcIiBcIiksITApOiExfWZ1bmN0aW9uIFYodCl7aWYoMD09dC5hLmIubGVuZ3RoKXJldHVybiExO3ZhciBuLGk9bmV3IGU7dDp7aWYobj10LmEudG9TdHJpbmcoKSwwIT1uLmxlbmd0aCYmXCIwXCIhPW4uY2hhckF0KDApKWZvcih2YXIgbCxhPW4ubGVuZ3RoLHU9MTszPj11JiZhPj11OysrdSlpZihsPXBhcnNlSW50KG4uc3Vic3RyaW5nKDAsdSksMTApLGwgaW4gWCl7aS5hKG4uc3Vic3RyaW5nKHUpKSxuPWw7YnJlYWsgdH1uPTB9cmV0dXJuIDA9PW4/ITE6KHIodC5hKSx0LmEuYShpLnRvU3RyaW5nKCkpLGk9TihuKSxcIjAwMVwiPT1pP3QuZz14KHQuRixcIlwiK24pOmkhPXQuQyYmKHQuZz1qKHQsaSkpLHQuYi5hKFwiXCIrbikuYShcIiBcIiksdC5sPVwiXCIsITApfWZ1bmN0aW9uIHEodCxuKXt2YXIgZT10Lm0udG9TdHJpbmcoKTtpZigwPD1lLnN1YnN0cmluZyh0LnMpLnNlYXJjaCh0LkgpKXt2YXIgaT1lLnNlYXJjaCh0LkgpLGU9ZS5yZXBsYWNlKHQuSCxuKTtyZXR1cm4gcih0Lm0pLHQubS5hKGUpLHQucz1pLGUuc3Vic3RyaW5nKDAsdC5zKzEpfXJldHVybiAxPT10LmYubGVuZ3RoJiYodC5qPSExKSx0LnY9XCJcIix0LmgudG9TdHJpbmcoKX12YXIgVD10aGlzO2UucHJvdG90eXBlLmI9XCJcIixlLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCl7dGhpcy5iPVwiXCIrdH0sZS5wcm90b3R5cGUuYT1mdW5jdGlvbih0LG4sZSl7aWYodGhpcy5iKz1TdHJpbmcodCksbnVsbCE9bilmb3IodmFyIHI9MTtyPGFyZ3VtZW50cy5sZW5ndGg7cisrKXRoaXMuYis9YXJndW1lbnRzW3JdO3JldHVybiB0aGlzfSxlLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmJ9O3ZhciBVPTEsWT0yLGs9MyxKPTQsSz02LEw9MTYsTz0xODtmLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24odCxuKXskKHRoaXMsdC5iLG4pfSxmLnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3ZhciB0PW5ldyB0aGlzLmNvbnN0cnVjdG9yO3JldHVybiB0IT10aGlzJiYodC5hPXt9LHQuYiYmKHQuYj17fSksYyh0LHRoaXMpKSx0fTt2YXIgWjtuKG0sZik7dmFyIHo7bih5LGYpO3ZhciBRO24odixmKSxtLnByb3RvdHlwZS5pPWZ1bmN0aW9uKCl7cmV0dXJuIFp8fChaPWIobSx7MDp7bmFtZTpcIk51bWJlckZvcm1hdFwiLEk6XCJpMThuLnBob25lbnVtYmVycy5OdW1iZXJGb3JtYXRcIn0sMTp7bmFtZTpcInBhdHRlcm5cIixyZXF1aXJlZDohMCxjOjksdHlwZTpTdHJpbmd9LDI6e25hbWU6XCJmb3JtYXRcIixyZXF1aXJlZDohMCxjOjksdHlwZTpTdHJpbmd9LDM6e25hbWU6XCJsZWFkaW5nX2RpZ2l0c19wYXR0ZXJuXCIsRzohMCxjOjksdHlwZTpTdHJpbmd9LDQ6e25hbWU6XCJuYXRpb25hbF9wcmVmaXhfZm9ybWF0dGluZ19ydWxlXCIsYzo5LHR5cGU6U3RyaW5nfSw2OntuYW1lOlwibmF0aW9uYWxfcHJlZml4X29wdGlvbmFsX3doZW5fZm9ybWF0dGluZ1wiLGM6OCx0eXBlOkJvb2xlYW59LDU6e25hbWU6XCJkb21lc3RpY19jYXJyaWVyX2NvZGVfZm9ybWF0dGluZ19ydWxlXCIsYzo5LHR5cGU6U3RyaW5nfX0pKSxafSxtLmN0b3I9bSxtLmN0b3IuaT1tLnByb3RvdHlwZS5pLHkucHJvdG90eXBlLmk9ZnVuY3Rpb24oKXtyZXR1cm4genx8KHo9Yih5LHswOntuYW1lOlwiUGhvbmVOdW1iZXJEZXNjXCIsSTpcImkxOG4ucGhvbmVudW1iZXJzLlBob25lTnVtYmVyRGVzY1wifSwyOntuYW1lOlwibmF0aW9uYWxfbnVtYmVyX3BhdHRlcm5cIixjOjksdHlwZTpTdHJpbmd9LDM6e25hbWU6XCJwb3NzaWJsZV9udW1iZXJfcGF0dGVyblwiLGM6OSx0eXBlOlN0cmluZ30sNjp7bmFtZTpcImV4YW1wbGVfbnVtYmVyXCIsYzo5LHR5cGU6U3RyaW5nfSw3OntuYW1lOlwibmF0aW9uYWxfbnVtYmVyX21hdGNoZXJfZGF0YVwiLGM6MTIsdHlwZTpTdHJpbmd9LDg6e25hbWU6XCJwb3NzaWJsZV9udW1iZXJfbWF0Y2hlcl9kYXRhXCIsYzoxMix0eXBlOlN0cmluZ319KSksen0seS5jdG9yPXkseS5jdG9yLmk9eS5wcm90b3R5cGUuaSx2LnByb3RvdHlwZS5pPWZ1bmN0aW9uKCl7cmV0dXJuIFF8fChRPWIodix7MDp7bmFtZTpcIlBob25lTWV0YWRhdGFcIixJOlwiaTE4bi5waG9uZW51bWJlcnMuUGhvbmVNZXRhZGF0YVwifSwxOntuYW1lOlwiZ2VuZXJhbF9kZXNjXCIsYzoxMSx0eXBlOnl9LDI6e25hbWU6XCJmaXhlZF9saW5lXCIsYzoxMSx0eXBlOnl9LDM6e25hbWU6XCJtb2JpbGVcIixjOjExLHR5cGU6eX0sNDp7bmFtZTpcInRvbGxfZnJlZVwiLGM6MTEsdHlwZTp5fSw1OntuYW1lOlwicHJlbWl1bV9yYXRlXCIsYzoxMSx0eXBlOnl9LDY6e25hbWU6XCJzaGFyZWRfY29zdFwiLGM6MTEsdHlwZTp5fSw3OntuYW1lOlwicGVyc29uYWxfbnVtYmVyXCIsYzoxMSx0eXBlOnl9LDg6e25hbWU6XCJ2b2lwXCIsYzoxMSx0eXBlOnl9LDIxOntuYW1lOlwicGFnZXJcIixjOjExLHR5cGU6eX0sMjU6e25hbWU6XCJ1YW5cIixjOjExLHR5cGU6eX0sMjc6e25hbWU6XCJlbWVyZ2VuY3lcIixjOjExLHR5cGU6eX0sMjg6e25hbWU6XCJ2b2ljZW1haWxcIixjOjExLHR5cGU6eX0sMjQ6e25hbWU6XCJub19pbnRlcm5hdGlvbmFsX2RpYWxsaW5nXCIsYzoxMSx0eXBlOnl9LDk6e25hbWU6XCJpZFwiLHJlcXVpcmVkOiEwLGM6OSx0eXBlOlN0cmluZ30sMTA6e25hbWU6XCJjb3VudHJ5X2NvZGVcIixjOjUsdHlwZTpOdW1iZXJ9LDExOntuYW1lOlwiaW50ZXJuYXRpb25hbF9wcmVmaXhcIixjOjksdHlwZTpTdHJpbmd9LDE3OntuYW1lOlwicHJlZmVycmVkX2ludGVybmF0aW9uYWxfcHJlZml4XCIsYzo5LHR5cGU6U3RyaW5nfSwxMjp7bmFtZTpcIm5hdGlvbmFsX3ByZWZpeFwiLGM6OSx0eXBlOlN0cmluZ30sMTM6e25hbWU6XCJwcmVmZXJyZWRfZXh0bl9wcmVmaXhcIixjOjksdHlwZTpTdHJpbmd9LDE1OntuYW1lOlwibmF0aW9uYWxfcHJlZml4X2Zvcl9wYXJzaW5nXCIsYzo5LHR5cGU6U3RyaW5nfSwxNjp7bmFtZTpcIm5hdGlvbmFsX3ByZWZpeF90cmFuc2Zvcm1fcnVsZVwiLGM6OSx0eXBlOlN0cmluZ30sMTg6e25hbWU6XCJzYW1lX21vYmlsZV9hbmRfZml4ZWRfbGluZV9wYXR0ZXJuXCIsYzo4LGRlZmF1bHRWYWx1ZTohMSx0eXBlOkJvb2xlYW59LDE5OntuYW1lOlwibnVtYmVyX2Zvcm1hdFwiLEc6ITAsYzoxMSx0eXBlOm19LDIwOntuYW1lOlwiaW50bF9udW1iZXJfZm9ybWF0XCIsRzohMCxjOjExLHR5cGU6bX0sMjI6e25hbWU6XCJtYWluX2NvdW50cnlfZm9yX2NvZGVcIixjOjgsZGVmYXVsdFZhbHVlOiExLHR5cGU6Qm9vbGVhbn0sMjM6e25hbWU6XCJsZWFkaW5nX2RpZ2l0c1wiLGM6OSx0eXBlOlN0cmluZ30sMjY6e25hbWU6XCJsZWFkaW5nX3plcm9fcG9zc2libGVcIixjOjgsZGVmYXVsdFZhbHVlOiExLHR5cGU6Qm9vbGVhbn19KSksUX0sdi5jdG9yPXYsdi5jdG9yLmk9di5wcm90b3R5cGUuaSxfLnByb3RvdHlwZS5hPWZ1bmN0aW9uKHQpe3Rocm93IG5ldyB0LmIsRXJyb3IoXCJVbmltcGxlbWVudGVkXCIpfSxfLnByb3RvdHlwZS5iPWZ1bmN0aW9uKHQsbil7aWYoMTE9PXQuYXx8MTA9PXQuYSlyZXR1cm4gbiBpbnN0YW5jZW9mIGY/bjp0aGlzLmEodC5qLnByb3RvdHlwZS5pKCksbik7aWYoMTQ9PXQuYSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4mJlcudGVzdChuKSl7dmFyIGU9TnVtYmVyKG4pO2lmKGU+MClyZXR1cm4gZX1yZXR1cm4gbn1pZighdC5oKXJldHVybiBuO2lmKGU9dC5qLGU9PT1TdHJpbmcpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBuKXJldHVybiBTdHJpbmcobil9ZWxzZSBpZihlPT09TnVtYmVyJiZcInN0cmluZ1wiPT10eXBlb2YgbiYmKFwiSW5maW5pdHlcIj09PW58fFwiLUluZmluaXR5XCI9PT1ufHxcIk5hTlwiPT09bnx8Vy50ZXN0KG4pKSlyZXR1cm4gTnVtYmVyKG4pO3JldHVybiBufTt2YXIgVz0vXi0/WzAtOV0rJC87bihDLF8pLEMucHJvdG90eXBlLmE9ZnVuY3Rpb24odCxuKXt2YXIgZT1uZXcgdC5iO3JldHVybiBlLmc9dGhpcyxlLmE9bixlLmI9e30sZX0sbihTLEMpLFMucHJvdG90eXBlLmI9ZnVuY3Rpb24odCxuKXtyZXR1cm4gOD09dC5hPyEhbjpfLnByb3RvdHlwZS5iLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sUy5wcm90b3R5cGUuYT1mdW5jdGlvbih0LG4pe3JldHVybiBTLk0uYS5jYWxsKHRoaXMsdCxuKX07LypcblxuIENvcHlyaWdodCAoQykgMjAxMCBUaGUgTGlicGhvbmVudW1iZXIgQXV0aG9yc1xuXG4gTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG5cbiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cbnZhciBYPXs4NjpbXCJDTlwiXX0sdHQ9e0NOOltudWxsLFtudWxsLG51bGwsXCJbMS03XVxcXFxkezYsMTF9fDhbMC0zNTctOV1cXFxcZHs2LDl9fDlcXFxcZHs3LDEwfVwiLFwiXFxcXGR7NCwxMn1cIl0sW251bGwsbnVsbCxcIjIxKD86MTAwXFxcXGR7Mn18OTVcXFxcZHszLDR9fFxcXFxkezgsMTB9KXwoPzoxMHwyWzAyLTU3LTldfDMoPzoxMXw3WzE3OV0pfDQoPzpbMTVdMXwzWzEtMzVdKXw1KD86MVxcXFxkfDJbMzddfDNbMTJdfDUxfDdbMTMtNzldfDlbMTVdKXw3KD86MzF8NVs0NTddfDZbMDldfDkxKXw4KD86WzU3XTF8OTgpKSg/OjEwMFxcXFxkezJ9fDk1XFxcXGR7Myw0fXxcXFxcZHs4fSl8KD86Myg/OjFbMDItOV18MzV8NDl8NVxcXFxkfDdbMDItNjhdfDlbMS02OF0pfDQoPzoxWzAyLTldfDJbMTc5XXwzWzMtOV18NVsyLTldfDZbNDc4OV18N1xcXFxkfDhbMjNdKXw1KD86M1swMy05XXw0WzM2XXw1WzAyLTldfDZbMS00Nl18N1swMjhdfDgwfDlbMi00Ni05XSl8Nig/OjNbMS01XXw2WzAyMzhdfDlbMTJdKXw3KD86MDF8WzE3XVxcXFxkfDJbMjQ4XXwzWzA0LTldfDRbMy02XXw1WzAtNDY4OV18NlsyMzY4XXw5WzAyLTldKXw4KD86MDc4fDFbMjM2LThdfDJbNS03XXwzXFxcXGR8NVsxLTldfDdbMDItOV18OFszNjc4XXw5WzEtN10pfDkoPzowWzEtMzY4OV18MVsxLTc5XXxbMzc5XVxcXFxkfDRbMTNdfDVbMS01XSkpKD86MTAwXFxcXGR7Mn18OTVcXFxcZHszLDR9fFxcXFxkezd9KXw4MCg/OjI5fDZbMDM1NzhdfDdbMDE4XXw4MSlcXFxcZHs0fVwiLFwiXFxcXGR7NCwxMn1cIixudWxsLG51bGwsXCIxMDEyMzQ1Njc4XCJdLFtudWxsLG51bGwsXCIxKD86WzM4XVxcXFxkfDRbNTddfDVbMC0zNS05XXw3WzAzNi04XSlcXFxcZHs4fVwiLFwiXFxcXGR7MTF9XCIsbnVsbCxudWxsLFwiMTMxMjM0NTY3ODlcIl0sW251bGwsbnVsbCxcIig/OjEwKT84MDBcXFxcZHs3fVwiLFwiXFxcXGR7MTAsMTJ9XCIsbnVsbCxudWxsLFwiODAwMTIzNDU2N1wiXSxbbnVsbCxudWxsLFwiMTZbMDhdXFxcXGR7NX1cIixcIlxcXFxkezh9XCIsbnVsbCxudWxsLFwiMTY4MTIzNDVcIl0sW251bGwsbnVsbCxcIjQwMFxcXFxkezd9fDk1MFxcXFxkezcsOH18KD86MTB8MlswLTU3LTldfDMoPzpbMTU3XVxcXFxkfDM1fDQ5fDlbMS02OF0pfDQoPzpbMTddXFxcXGR8MlsxNzldfFszNV1bMS05XXw2WzQ3ODldfDhbMjNdKXw1KD86WzEzNTddXFxcXGR8MlszN118NFszNl18NlsxLTQ2XXw4MHw5WzEtOV0pfDYoPzozWzEtNV18NlswMjM4XXw5WzEyXSl8Nyg/OjAxfFsxNTc5XVxcXFxkfDJbMjQ4XXwzWzAxNC05XXw0WzMtNl18NlswMjM2ODldKXw4KD86MVsyMzYtOF18Mls1LTddfFszN11cXFxcZHw1WzE0LTldfDhbMzY3OF18OVsxLThdKXw5KD86MFsxLTM2ODldfDFbMS03OV18WzM3OV1cXFxcZHw0WzEzXXw1WzEtNV0pKTk2XFxcXGR7Myw0fVwiLFwiXFxcXGR7NywxMX1cIixudWxsLG51bGwsXCI0MDAxMjM0NTY3XCJdLFtudWxsLG51bGwsXCJOQVwiLFwiTkFcIl0sW251bGwsbnVsbCxcIk5BXCIsXCJOQVwiXSxcIkNOXCIsODYsXCIoMSg/OlsxMjldXFxcXGR7M318NzlcXFxcZHsyfSkpPzAwXCIsXCIwXCIsbnVsbCxudWxsLFwiKDEoPzpbMTI5XVxcXFxkezN9fDc5XFxcXGR7Mn0pKXwwXCIsbnVsbCxcIjAwXCIsbnVsbCxbW251bGwsXCIoODBcXFxcZHsyfSkoXFxcXGR7NH0pXCIsXCIkMSAkMlwiLFtcIjgwWzI2NzhdXCJdLFwiMCQxXCIsXCIkQ0MgJDFcIiwxXSxbbnVsbCxcIihbNDhdMDApKFxcXFxkezN9KShcXFxcZHs0fSlcIixcIiQxICQyICQzXCIsW1wiWzQ4XTAwXCJdXSxbbnVsbCxcIihcXFxcZHs1LDZ9KVwiLFwiJDFcIixbXCIxMDB8OTVcIl1dLFtudWxsLFwiKFxcXFxkezJ9KShcXFxcZHs1LDZ9KVwiLFwiJDEgJDJcIixbXCIoPzoxMHwyXFxcXGQpWzE5XVwiLFwiKD86MTB8MlxcXFxkKSg/OjEwfDlbNTZdKVwiLFwiKD86MTB8MlxcXFxkKSg/OjEwMHw5WzU2XSlcIl0sXCIwJDFcIixcIiRDQyAkMVwiXSxbbnVsbCxcIihcXFxcZHszfSkoXFxcXGR7NSw2fSlcIixcIiQxICQyXCIsW1wiWzMtOV1cIixcIlszLTldXFxcXGR7Mn1bMTldXCIsXCJbMy05XVxcXFxkezJ9KD86MTB8OVs1Nl0pXCJdLFwiMCQxXCIsXCIkQ0MgJDFcIl0sW251bGwsXCIoXFxcXGR7Myw0fSkoXFxcXGR7NH0pXCIsXCIkMSAkMlwiLFtcIlsyLTldXCJdXSxbbnVsbCxcIigyMSkoXFxcXGR7NH0pKFxcXFxkezQsNn0pXCIsXCIkMSAkMiAkM1wiLFtcIjIxXCJdLFwiMCQxXCIsXCIkQ0MgJDFcIiwxXSxbbnVsbCxcIihbMTJdXFxcXGQpKFxcXFxkezR9KShcXFxcZHs0fSlcIixcIiQxICQyICQzXCIsW1wiMTBbMS05XXwyWzAyLTldXCIsXCIxMFsxLTldfDJbMDItOV1cIixcIjEwKD86WzEtNzldfDgoPzpbMS05XXwwWzEtOV0pKXwyWzAyLTldXCJdLFwiMCQxXCIsXCIkQ0MgJDFcIiwxXSxbbnVsbCxcIihcXFxcZHszfSkoXFxcXGR7M30pKFxcXFxkezR9KVwiLFwiJDEgJDIgJDNcIixbXCIzKD86MVswMi05XXwzNXw0OXw1fDdbMDItNjhdfDlbMS02OF0pfDQoPzoxWzAyLTldfDJbMTc5XXxbMzVdWzItOV18Nls0Nzg5XXw3XFxcXGR8OFsyM10pfDUoPzozWzAzLTldfDRbMzZdfDVbMDItOV18NlsxLTQ2XXw3WzAyOF18ODB8OVsyLTQ2LTldKXw2KD86M1sxLTVdfDZbMDIzOF18OVsxMl0pfDcoPzowMXxbMTU3OV18MlsyNDhdfDNbMDQtOV18NFszLTZdfDZbMjM2OF0pfDgoPzoxWzIzNi04XXwyWzUtN118M3w1WzEtOV18N1swMi05XXw4WzM2NzhdfDlbMS03XSl8OSg/OjBbMS0zNjg5XXwxWzEtNzldfFszNzldfDRbMTNdfDVbMS01XSlcIl0sXCIwJDFcIixcIiRDQyAkMVwiLDFdLFtudWxsLFwiKFxcXFxkezN9KShcXFxcZHs0fSkoXFxcXGR7NH0pXCIsXCIkMSAkMiAkM1wiLFtcIjMoPzoxMXw3WzE3OV0pfDQoPzpbMTVdMXwzWzEtMzVdKXw1KD86MXwyWzM3XXwzWzEyXXw1MXw3WzEzLTc5XXw5WzE1XSl8Nyg/OjMxfDVbNDU3XXw2WzA5XXw5MSl8OCg/Ols1N10xfDk4KVwiXSxcIjAkMVwiLFwiJENDICQxXCIsMV0sW251bGwsXCIoXFxcXGR7NH0pKFxcXFxkezN9KShcXFxcZHs0fSlcIixcIiQxICQyICQzXCIsW1wiODA3XCIsXCI4MDc4XCJdLFwiMCQxXCIsXCIkQ0MgJDFcIiwxXSxbbnVsbCxcIihcXFxcZHszfSkoXFxcXGR7NH0pKFxcXFxkezR9KVwiLFwiJDEgJDIgJDNcIixbXCIxWzMtNTc4XVwiXSxudWxsLFwiJENDICQxXCJdLFtudWxsLFwiKDEwODAwKShcXFxcZHszfSkoXFxcXGR7NH0pXCIsXCIkMSAkMiAkM1wiLFtcIjEwOFwiLFwiMTA4MFwiLFwiMTA4MDBcIl1dLFtudWxsLFwiKFxcXFxkezN9KShcXFxcZHs3LDh9KVwiLFwiJDEgJDJcIixbXCI5NTBcIl1dXSxbW251bGwsXCIoODBcXFxcZHsyfSkoXFxcXGR7NH0pXCIsXCIkMSAkMlwiLFtcIjgwWzI2NzhdXCJdLFwiMCQxXCIsXCIkQ0MgJDFcIiwxXSxbbnVsbCxcIihbNDhdMDApKFxcXFxkezN9KShcXFxcZHs0fSlcIixcIiQxICQyICQzXCIsW1wiWzQ4XTAwXCJdXSxbbnVsbCxcIihcXFxcZHsyfSkoXFxcXGR7NSw2fSlcIixcIiQxICQyXCIsW1wiKD86MTB8MlxcXFxkKVsxOV1cIixcIig/OjEwfDJcXFxcZCkoPzoxMHw5WzU2XSlcIixcIig/OjEwfDJcXFxcZCkoPzoxMDB8OVs1Nl0pXCJdLFwiMCQxXCIsXCIkQ0MgJDFcIl0sW251bGwsXCIoXFxcXGR7M30pKFxcXFxkezUsNn0pXCIsXCIkMSAkMlwiLFtcIlszLTldXCIsXCJbMy05XVxcXFxkezJ9WzE5XVwiLFwiWzMtOV1cXFxcZHsyfSg/OjEwfDlbNTZdKVwiXSxcIjAkMVwiLFwiJENDICQxXCJdLFtudWxsLFwiKDIxKShcXFxcZHs0fSkoXFxcXGR7NCw2fSlcIixcIiQxICQyICQzXCIsW1wiMjFcIl0sXCIwJDFcIixcIiRDQyAkMVwiLDFdLFtudWxsLFwiKFsxMl1cXFxcZCkoXFxcXGR7NH0pKFxcXFxkezR9KVwiLFwiJDEgJDIgJDNcIixbXCIxMFsxLTldfDJbMDItOV1cIixcIjEwWzEtOV18MlswMi05XVwiLFwiMTAoPzpbMS03OV18OCg/OlsxLTldfDBbMS05XSkpfDJbMDItOV1cIl0sXCIwJDFcIixcIiRDQyAkMVwiLDFdLFtudWxsLFwiKFxcXFxkezN9KShcXFxcZHszfSkoXFxcXGR7NH0pXCIsXCIkMSAkMiAkM1wiLFtcIjMoPzoxWzAyLTldfDM1fDQ5fDV8N1swMi02OF18OVsxLTY4XSl8NCg/OjFbMDItOV18MlsxNzldfFszNV1bMi05XXw2WzQ3ODldfDdcXFxcZHw4WzIzXSl8NSg/OjNbMDMtOV18NFszNl18NVswMi05XXw2WzEtNDZdfDdbMDI4XXw4MHw5WzItNDYtOV0pfDYoPzozWzEtNV18NlswMjM4XXw5WzEyXSl8Nyg/OjAxfFsxNTc5XXwyWzI0OF18M1swNC05XXw0WzMtNl18NlsyMzY4XSl8OCg/OjFbMjM2LThdfDJbNS03XXwzfDVbMS05XXw3WzAyLTldfDhbMzY3OF18OVsxLTddKXw5KD86MFsxLTM2ODldfDFbMS03OV18WzM3OV18NFsxM118NVsxLTVdKVwiXSxcIjAkMVwiLFwiJENDICQxXCIsMV0sW251bGwsXCIoXFxcXGR7M30pKFxcXFxkezR9KShcXFxcZHs0fSlcIixcIiQxICQyICQzXCIsW1wiMyg/OjExfDdbMTc5XSl8NCg/OlsxNV0xfDNbMS0zNV0pfDUoPzoxfDJbMzddfDNbMTJdfDUxfDdbMTMtNzldfDlbMTVdKXw3KD86MzF8NVs0NTddfDZbMDldfDkxKXw4KD86WzU3XTF8OTgpXCJdLFwiMCQxXCIsXCIkQ0MgJDFcIiwxXSxbbnVsbCxcIihcXFxcZHs0fSkoXFxcXGR7M30pKFxcXFxkezR9KVwiLFwiJDEgJDIgJDNcIixbXCI4MDdcIixcIjgwNzhcIl0sXCIwJDFcIixcIiRDQyAkMVwiLDFdLFtudWxsLFwiKFxcXFxkezN9KShcXFxcZHs0fSkoXFxcXGR7NH0pXCIsXCIkMSAkMiAkM1wiLFtcIjFbMy01NzhdXCJdLG51bGwsXCIkQ0MgJDFcIl0sW251bGwsXCIoMTA4MDApKFxcXFxkezN9KShcXFxcZHs0fSlcIixcIiQxICQyICQzXCIsW1wiMTA4XCIsXCIxMDgwXCIsXCIxMDgwMFwiXV0sW251bGwsXCIoXFxcXGR7M30pKFxcXFxkezcsOH0pXCIsXCIkMSAkMlwiLFtcIjk1MFwiXV1dLFtudWxsLG51bGwsXCJOQVwiLFwiTkFcIl0sbnVsbCxudWxsLFtudWxsLG51bGwsXCIoPzo0fCg/OjEwKT84KTAwXFxcXGR7N318OTUwXFxcXGR7Nyw4fVwiLFwiXFxcXGR7MTAsMTJ9XCIsbnVsbCxudWxsLFwiNDAwMTIzNDU2N1wiXSxbbnVsbCxudWxsLFwiTkFcIixcIk5BXCJdLG51bGwsbnVsbCxbbnVsbCxudWxsLFwiTkFcIixcIk5BXCJdXX07dy5iPWZ1bmN0aW9uKCl7cmV0dXJuIHcuYT93LmE6dy5hPW5ldyB3fTt2YXIgbnQ9ezA6XCIwXCIsMTpcIjFcIiwyOlwiMlwiLDM6XCIzXCIsNDpcIjRcIiw1OlwiNVwiLDY6XCI2XCIsNzpcIjdcIiw4OlwiOFwiLDk6XCI5XCIsXCLvvJBcIjpcIjBcIixcIu+8kVwiOlwiMVwiLFwi77ySXCI6XCIyXCIsXCLvvJNcIjpcIjNcIixcIu+8lFwiOlwiNFwiLFwi77yVXCI6XCI1XCIsXCLvvJZcIjpcIjZcIixcIu+8l1wiOlwiN1wiLFwi77yYXCI6XCI4XCIsXCLvvJlcIjpcIjlcIixcItmgXCI6XCIwXCIsXCLZoVwiOlwiMVwiLFwi2aJcIjpcIjJcIixcItmjXCI6XCIzXCIsXCLZpFwiOlwiNFwiLFwi2aVcIjpcIjVcIixcItmmXCI6XCI2XCIsXCLZp1wiOlwiN1wiLFwi2ahcIjpcIjhcIixcItmpXCI6XCI5XCIsXCLbsFwiOlwiMFwiLFwi27FcIjpcIjFcIixcItuyXCI6XCIyXCIsXCLbs1wiOlwiM1wiLFwi27RcIjpcIjRcIixcItu1XCI6XCI1XCIsXCLbtlwiOlwiNlwiLFwi27dcIjpcIjdcIixcItu4XCI6XCI4XCIsXCLbuVwiOlwiOVwifSxldD1SZWdFeHAoXCJbK++8i10rXCIpLHJ0PVJlZ0V4cChcIihbMC0577yQLe+8mdmgLdmp27At27ldKVwiKSxpdD0vXlxcKD9cXCQxXFwpPyQvLGx0PW5ldyB2OyQobHQsMTEsXCJOQVwiKTt2YXIgYXQ9L1xcWyhbXlxcW1xcXV0pKlxcXS9nLHV0PS9cXGQoPz1bXix9XVteLH1dKS9nLG90PVJlZ0V4cChcIl5bLXjigJAt4oCV4oiS44O877yNLe+8jyDCoMKt4oCL4oGg44CAKCnvvIjvvInvvLvvvL0uXFxcXFtcXFxcXS9+4oGT4oi8772eXSooXFxcXCRcXFxcZFsteOKAkC3igJXiiJLjg7zvvI0t77yPIMKgwq3igIvigaDjgIAoKe+8iO+8ie+8u++8vS5cXFxcW1xcXFxdL37igZPiiLzvvZ5dKikrJFwiKSxzdD0vWy0gXS87QS5wcm90b3R5cGUuSz1mdW5jdGlvbigpe3RoaXMuQj1cIlwiLHIodGhpcy5oKSxyKHRoaXMudSkscih0aGlzLm0pLHRoaXMucz0wLHRoaXMudj1cIlwiLHIodGhpcy5iKSx0aGlzLmw9XCJcIixyKHRoaXMuYSksdGhpcy5qPSEwLHRoaXMudz10aGlzLm89dGhpcy5EPSExLHRoaXMuZj1bXSx0aGlzLkE9ITEsdGhpcy5nIT10aGlzLkomJih0aGlzLmc9aih0aGlzLHRoaXMuQykpfSxBLnByb3RvdHlwZS5MPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLkI9Rih0aGlzLHQpfSx0KFwiQ2xlYXZlLkFzWW91VHlwZUZvcm1hdHRlclwiLEEpLHQoXCJDbGVhdmUuQXNZb3VUeXBlRm9ybWF0dGVyLnByb3RvdHlwZS5pbnB1dERpZ2l0XCIsQS5wcm90b3R5cGUuTCksdChcIkNsZWF2ZS5Bc1lvdVR5cGVGb3JtYXR0ZXIucHJvdG90eXBlLmNsZWFyXCIsQS5wcm90b3R5cGUuSyl9LmNhbGwoXCJvYmplY3RcIj09dHlwZW9mIGdsb2JhbCYmZ2xvYmFsP2dsb2JhbDp3aW5kb3cpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGVhdmUuanMvZGlzdC9hZGRvbnMvY2xlYXZlLXBob25lLmNuLmpzXG4vLyBtb2R1bGUgaWQgPSA2MTJcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENvbnN0cnVjdCBhIG5ldyBDbGVhdmUgaW5zdGFuY2UgYnkgcGFzc2luZyB0aGUgY29uZmlndXJhdGlvbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge1N0cmluZyAvIEhUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICovXG52YXIgQ2xlYXZlID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9wdHMpIHtcbiAgICB2YXIgb3duZXIgPSB0aGlzO1xuXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBvd25lci5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvd25lci5lbGVtZW50ID0gKCh0eXBlb2YgZWxlbWVudC5sZW5ndGggIT09ICd1bmRlZmluZWQnKSAmJiBlbGVtZW50Lmxlbmd0aCA+IDApID8gZWxlbWVudFswXSA6IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKCFvd25lci5lbGVtZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW2NsZWF2ZS5qc10gUGxlYXNlIGNoZWNrIHRoZSBlbGVtZW50Jyk7XG4gICAgfVxuXG4gICAgb3B0cy5pbml0VmFsdWUgPSBvd25lci5lbGVtZW50LnZhbHVlO1xuXG4gICAgb3duZXIucHJvcGVydGllcyA9IENsZWF2ZS5EZWZhdWx0UHJvcGVydGllcy5hc3NpZ24oe30sIG9wdHMpO1xuXG4gICAgb3duZXIuaW5pdCgpO1xufTtcblxuQ2xlYXZlLnByb3RvdHlwZSA9IHtcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvd25lciA9IHRoaXMsIHBwcyA9IG93bmVyLnByb3BlcnRpZXM7XG5cbiAgICAgICAgLy8gbm8gbmVlZCB0byB1c2UgdGhpcyBsaWJcbiAgICAgICAgaWYgKCFwcHMubnVtZXJhbCAmJiAhcHBzLnBob25lICYmICFwcHMuY3JlZGl0Q2FyZCAmJiAhcHBzLmRhdGUgJiYgKHBwcy5ibG9ja3NMZW5ndGggPT09IDAgJiYgIXBwcy5wcmVmaXgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBwcHMubWF4TGVuZ3RoID0gQ2xlYXZlLlV0aWwuZ2V0TWF4TGVuZ3RoKHBwcy5ibG9ja3MpO1xuXG4gICAgICAgIG93bmVyLm9uQ2hhbmdlTGlzdGVuZXIgPSBvd25lci5vbkNoYW5nZS5iaW5kKG93bmVyKTtcbiAgICAgICAgb3duZXIub25LZXlEb3duTGlzdGVuZXIgPSBvd25lci5vbktleURvd24uYmluZChvd25lcik7XG4gICAgICAgIG93bmVyLm9uQ3V0TGlzdGVuZXIgPSBvd25lci5vbkN1dC5iaW5kKG93bmVyKTtcbiAgICAgICAgb3duZXIub25Db3B5TGlzdGVuZXIgPSBvd25lci5vbkNvcHkuYmluZChvd25lcik7XG5cbiAgICAgICAgb3duZXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIG93bmVyLm9uQ2hhbmdlTGlzdGVuZXIpO1xuICAgICAgICBvd25lci5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvd25lci5vbktleURvd25MaXN0ZW5lcik7XG4gICAgICAgIG93bmVyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY3V0Jywgb3duZXIub25DdXRMaXN0ZW5lcik7XG4gICAgICAgIG93bmVyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29weScsIG93bmVyLm9uQ29weUxpc3RlbmVyKTtcblxuXG4gICAgICAgIG93bmVyLmluaXRQaG9uZUZvcm1hdHRlcigpO1xuICAgICAgICBvd25lci5pbml0RGF0ZUZvcm1hdHRlcigpO1xuICAgICAgICBvd25lci5pbml0TnVtZXJhbEZvcm1hdHRlcigpO1xuXG4gICAgICAgIG93bmVyLm9uSW5wdXQocHBzLmluaXRWYWx1ZSk7XG4gICAgfSxcblxuICAgIGluaXROdW1lcmFsRm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvd25lciA9IHRoaXMsIHBwcyA9IG93bmVyLnByb3BlcnRpZXM7XG5cbiAgICAgICAgaWYgKCFwcHMubnVtZXJhbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcHBzLm51bWVyYWxGb3JtYXR0ZXIgPSBuZXcgQ2xlYXZlLk51bWVyYWxGb3JtYXR0ZXIoXG4gICAgICAgICAgICBwcHMubnVtZXJhbERlY2ltYWxNYXJrLFxuICAgICAgICAgICAgcHBzLm51bWVyYWxEZWNpbWFsU2NhbGUsXG4gICAgICAgICAgICBwcHMubnVtZXJhbFRob3VzYW5kc0dyb3VwU3R5bGUsXG4gICAgICAgICAgICBwcHMubnVtZXJhbFBvc2l0aXZlT25seSxcbiAgICAgICAgICAgIHBwcy5kZWxpbWl0ZXJcbiAgICAgICAgKTtcbiAgICB9LFxuXG4gICAgaW5pdERhdGVGb3JtYXR0ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG93bmVyID0gdGhpcywgcHBzID0gb3duZXIucHJvcGVydGllcztcblxuICAgICAgICBpZiAoIXBwcy5kYXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBwcHMuZGF0ZUZvcm1hdHRlciA9IG5ldyBDbGVhdmUuRGF0ZUZvcm1hdHRlcihwcHMuZGF0ZVBhdHRlcm4pO1xuICAgICAgICBwcHMuYmxvY2tzID0gcHBzLmRhdGVGb3JtYXR0ZXIuZ2V0QmxvY2tzKCk7XG4gICAgICAgIHBwcy5ibG9ja3NMZW5ndGggPSBwcHMuYmxvY2tzLmxlbmd0aDtcbiAgICAgICAgcHBzLm1heExlbmd0aCA9IENsZWF2ZS5VdGlsLmdldE1heExlbmd0aChwcHMuYmxvY2tzKTtcbiAgICB9LFxuXG4gICAgaW5pdFBob25lRm9ybWF0dGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvd25lciA9IHRoaXMsIHBwcyA9IG93bmVyLnByb3BlcnRpZXM7XG5cbiAgICAgICAgaWYgKCFwcHMucGhvbmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENsZWF2ZS5Bc1lvdVR5cGVGb3JtYXR0ZXIgc2hvdWxkIGJlIHByb3ZpZGVkIGJ5XG4gICAgICAgIC8vIGV4dGVybmFsIGdvb2dsZSBjbG9zdXJlIGxpYlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcHBzLnBob25lRm9ybWF0dGVyID0gbmV3IENsZWF2ZS5QaG9uZUZvcm1hdHRlcihcbiAgICAgICAgICAgICAgICBuZXcgcHBzLnJvb3QuQ2xlYXZlLkFzWW91VHlwZUZvcm1hdHRlcihwcHMucGhvbmVSZWdpb25Db2RlKSxcbiAgICAgICAgICAgICAgICBwcHMuZGVsaW1pdGVyXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbY2xlYXZlLmpzXSBQbGVhc2UgaW5jbHVkZSBwaG9uZS10eXBlLWZvcm1hdHRlci57Y291bnRyeX0uanMgbGliJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25LZXlEb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIG93bmVyID0gdGhpcywgcHBzID0gb3duZXIucHJvcGVydGllcyxcbiAgICAgICAgICAgIGNoYXJDb2RlID0gZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZTtcblxuICAgICAgICAvLyBoaXQgYmFja3NwYWNlIHdoZW4gbGFzdCBjaGFyYWN0ZXIgaXMgZGVsaW1pdGVyXG4gICAgICAgIGlmIChjaGFyQ29kZSA9PT0gOCAmJiBDbGVhdmUuVXRpbC5pc0RlbGltaXRlcihvd25lci5lbGVtZW50LnZhbHVlLnNsaWNlKC0xKSwgcHBzLmRlbGltaXRlciwgcHBzLmRlbGltaXRlcnMpKSB7XG4gICAgICAgICAgICBwcHMuYmFja3NwYWNlID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcHBzLmJhY2tzcGFjZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm9uSW5wdXQodGhpcy5lbGVtZW50LnZhbHVlKTtcbiAgICB9LFxuXG4gICAgb25DdXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRoaXMuY29weUNsaXBib2FyZERhdGEoZSk7XG4gICAgICAgIHRoaXMub25JbnB1dCgnJyk7XG4gICAgfSxcblxuICAgIG9uQ29weTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdGhpcy5jb3B5Q2xpcGJvYXJkRGF0YShlKTtcbiAgICB9LFxuXG4gICAgY29weUNsaXBib2FyZERhdGE6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBvd25lciA9IHRoaXMsXG4gICAgICAgICAgICBwcHMgPSBvd25lci5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgVXRpbCA9IENsZWF2ZS5VdGlsLFxuICAgICAgICAgICAgaW5wdXRWYWx1ZSA9IG93bmVyLmVsZW1lbnQudmFsdWUsXG4gICAgICAgICAgICB0ZXh0VG9Db3B5ID0gJyc7XG5cbiAgICAgICAgaWYgKCFwcHMuY29weURlbGltaXRlcikge1xuICAgICAgICAgICAgdGV4dFRvQ29weSA9IFV0aWwuc3RyaXBEZWxpbWl0ZXJzKGlucHV0VmFsdWUsIHBwcy5kZWxpbWl0ZXIsIHBwcy5kZWxpbWl0ZXJzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHRUb0NvcHkgPSBpbnB1dFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChlLmNsaXBib2FyZERhdGEpIHtcbiAgICAgICAgICAgICAgICBlLmNsaXBib2FyZERhdGEuc2V0RGF0YSgnVGV4dCcsIHRleHRUb0NvcHkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xpcGJvYXJkRGF0YS5zZXREYXRhKCdUZXh0JywgdGV4dFRvQ29weSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgIC8vICBlbXB0eVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uSW5wdXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgb3duZXIgPSB0aGlzLCBwcHMgPSBvd25lci5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgcHJldiA9IHZhbHVlLFxuICAgICAgICAgICAgVXRpbCA9IENsZWF2ZS5VdGlsO1xuXG4gICAgICAgIC8vIGNhc2UgMTogZGVsZXRlIG9uZSBtb3JlIGNoYXJhY3RlciBcIjRcIlxuICAgICAgICAvLyAxMjM0KnwgLT4gaGl0IGJhY2tzcGFjZSAtPiAxMjN8XG4gICAgICAgIC8vIGNhc2UgMjogbGFzdCBjaGFyYWN0ZXIgaXMgbm90IGRlbGltaXRlciB3aGljaCBpczpcbiAgICAgICAgLy8gMTJ8MzQqIC0+IGhpdCBiYWNrc3BhY2UgLT4gMXwzNCpcbiAgICAgICAgLy8gbm90ZTogbm8gbmVlZCB0byBhcHBseSB0aGlzIGZvciBudW1lcmFsIG1vZGVcbiAgICAgICAgaWYgKCFwcHMubnVtZXJhbCAmJiBwcHMuYmFja3NwYWNlICYmICFVdGlsLmlzRGVsaW1pdGVyKHZhbHVlLnNsaWNlKC0xKSwgcHBzLmRlbGltaXRlciwgcHBzLmRlbGltaXRlcnMpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFV0aWwuaGVhZFN0cih2YWx1ZSwgdmFsdWUubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwaG9uZSBmb3JtYXR0ZXJcbiAgICAgICAgaWYgKHBwcy5waG9uZSkge1xuICAgICAgICAgICAgcHBzLnJlc3VsdCA9IHBwcy5waG9uZUZvcm1hdHRlci5mb3JtYXQodmFsdWUpO1xuICAgICAgICAgICAgb3duZXIudXBkYXRlVmFsdWVTdGF0ZSgpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBudW1lcmFsIGZvcm1hdHRlclxuICAgICAgICBpZiAocHBzLm51bWVyYWwpIHtcbiAgICAgICAgICAgIHBwcy5yZXN1bHQgPSBwcHMucHJlZml4ICsgcHBzLm51bWVyYWxGb3JtYXR0ZXIuZm9ybWF0KHZhbHVlKTtcbiAgICAgICAgICAgIG93bmVyLnVwZGF0ZVZhbHVlU3RhdGUoKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGF0ZVxuICAgICAgICBpZiAocHBzLmRhdGUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gcHBzLmRhdGVGb3JtYXR0ZXIuZ2V0VmFsaWRhdGVkRGF0ZSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdHJpcCBkZWxpbWl0ZXJzXG4gICAgICAgIHZhbHVlID0gVXRpbC5zdHJpcERlbGltaXRlcnModmFsdWUsIHBwcy5kZWxpbWl0ZXIsIHBwcy5kZWxpbWl0ZXJzKTtcblxuICAgICAgICAvLyBzdHJpcCBwcmVmaXhcbiAgICAgICAgdmFsdWUgPSBVdGlsLmdldFByZWZpeFN0cmlwcGVkVmFsdWUodmFsdWUsIHBwcy5wcmVmaXgsIHBwcy5wcmVmaXhMZW5ndGgpO1xuXG4gICAgICAgIC8vIHN0cmlwIG5vbi1udW1lcmljIGNoYXJhY3RlcnNcbiAgICAgICAgdmFsdWUgPSBwcHMubnVtZXJpY09ubHkgPyBVdGlsLnN0cmlwKHZhbHVlLCAvW15cXGRdL2cpIDogdmFsdWU7XG5cbiAgICAgICAgLy8gY29udmVydCBjYXNlXG4gICAgICAgIHZhbHVlID0gcHBzLnVwcGVyY2FzZSA/IHZhbHVlLnRvVXBwZXJDYXNlKCkgOiB2YWx1ZTtcbiAgICAgICAgdmFsdWUgPSBwcHMubG93ZXJjYXNlID8gdmFsdWUudG9Mb3dlckNhc2UoKSA6IHZhbHVlO1xuXG4gICAgICAgIC8vIHByZWZpeFxuICAgICAgICBpZiAocHBzLnByZWZpeCkge1xuICAgICAgICAgICAgdmFsdWUgPSBwcHMucHJlZml4ICsgdmFsdWU7XG5cbiAgICAgICAgICAgIC8vIG5vIGJsb2NrcyBzcGVjaWZpZWQsIG5vIG5lZWQgdG8gZG8gZm9ybWF0dGluZ1xuICAgICAgICAgICAgaWYgKHBwcy5ibG9ja3NMZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwcHMucmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgb3duZXIudXBkYXRlVmFsdWVTdGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIGNyZWRpdCBjYXJkIHByb3BzXG4gICAgICAgIGlmIChwcHMuY3JlZGl0Q2FyZCkge1xuICAgICAgICAgICAgb3duZXIudXBkYXRlQ3JlZGl0Q2FyZFByb3BzQnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdHJpcCBvdmVyIGxlbmd0aCBjaGFyYWN0ZXJzXG4gICAgICAgIHZhbHVlID0gVXRpbC5oZWFkU3RyKHZhbHVlLCBwcHMubWF4TGVuZ3RoKTtcblxuICAgICAgICAvLyBhcHBseSBibG9ja3NcbiAgICAgICAgcHBzLnJlc3VsdCA9IFV0aWwuZ2V0Rm9ybWF0dGVkVmFsdWUodmFsdWUsIHBwcy5ibG9ja3MsIHBwcy5ibG9ja3NMZW5ndGgsIHBwcy5kZWxpbWl0ZXIsIHBwcy5kZWxpbWl0ZXJzKTtcblxuICAgICAgICAvLyBub3RoaW5nIGNoYW5nZWRcbiAgICAgICAgLy8gcHJldmVudCB1cGRhdGUgdmFsdWUgdG8gYXZvaWQgY2FyZXQgcG9zaXRpb24gY2hhbmdlXG4gICAgICAgIGlmIChwcmV2ID09PSBwcHMucmVzdWx0ICYmIHByZXYgIT09IHBwcy5wcmVmaXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG93bmVyLnVwZGF0ZVZhbHVlU3RhdGUoKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlQ3JlZGl0Q2FyZFByb3BzQnlWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBvd25lciA9IHRoaXMsIHBwcyA9IG93bmVyLnByb3BlcnRpZXMsXG4gICAgICAgICAgICBVdGlsID0gQ2xlYXZlLlV0aWwsXG4gICAgICAgICAgICBjcmVkaXRDYXJkSW5mbztcblxuICAgICAgICAvLyBBdCBsZWFzdCBvbmUgb2YgdGhlIGZpcnN0IDQgY2hhcmFjdGVycyBoYXMgY2hhbmdlZFxuICAgICAgICBpZiAoVXRpbC5oZWFkU3RyKHBwcy5yZXN1bHQsIDQpID09PSBVdGlsLmhlYWRTdHIodmFsdWUsIDQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjcmVkaXRDYXJkSW5mbyA9IENsZWF2ZS5DcmVkaXRDYXJkRGV0ZWN0b3IuZ2V0SW5mbyh2YWx1ZSwgcHBzLmNyZWRpdENhcmRTdHJpY3RNb2RlKTtcblxuICAgICAgICBwcHMuYmxvY2tzID0gY3JlZGl0Q2FyZEluZm8uYmxvY2tzO1xuICAgICAgICBwcHMuYmxvY2tzTGVuZ3RoID0gcHBzLmJsb2Nrcy5sZW5ndGg7XG4gICAgICAgIHBwcy5tYXhMZW5ndGggPSBVdGlsLmdldE1heExlbmd0aChwcHMuYmxvY2tzKTtcblxuICAgICAgICAvLyBjcmVkaXQgY2FyZCB0eXBlIGNoYW5nZWRcbiAgICAgICAgaWYgKHBwcy5jcmVkaXRDYXJkVHlwZSAhPT0gY3JlZGl0Q2FyZEluZm8udHlwZSkge1xuICAgICAgICAgICAgcHBzLmNyZWRpdENhcmRUeXBlID0gY3JlZGl0Q2FyZEluZm8udHlwZTtcblxuICAgICAgICAgICAgcHBzLm9uQ3JlZGl0Q2FyZFR5cGVDaGFuZ2VkLmNhbGwob3duZXIsIHBwcy5jcmVkaXRDYXJkVHlwZSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlVmFsdWVTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3duZXIgPSB0aGlzO1xuXG4gICAgICAgIG93bmVyLmVsZW1lbnQudmFsdWUgPSBvd25lci5wcm9wZXJ0aWVzLnJlc3VsdDtcbiAgICB9LFxuXG4gICAgc2V0UGhvbmVSZWdpb25Db2RlOiBmdW5jdGlvbiAocGhvbmVSZWdpb25Db2RlKSB7XG4gICAgICAgIHZhciBvd25lciA9IHRoaXMsIHBwcyA9IG93bmVyLnByb3BlcnRpZXM7XG5cbiAgICAgICAgcHBzLnBob25lUmVnaW9uQ29kZSA9IHBob25lUmVnaW9uQ29kZTtcbiAgICAgICAgb3duZXIuaW5pdFBob25lRm9ybWF0dGVyKCk7XG4gICAgICAgIG93bmVyLm9uQ2hhbmdlKCk7XG4gICAgfSxcblxuICAgIHNldFJhd1ZhbHVlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIG93bmVyID0gdGhpcywgcHBzID0gb3duZXIucHJvcGVydGllcztcblxuICAgICAgICB2YWx1ZSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZS50b1N0cmluZygpIDogJyc7XG5cbiAgICAgICAgaWYgKHBwcy5udW1lcmFsKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoJy4nLCBwcHMubnVtZXJhbERlY2ltYWxNYXJrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG93bmVyLmVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgb3duZXIub25JbnB1dCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIGdldFJhd1ZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvd25lciA9IHRoaXMsXG4gICAgICAgICAgICBwcHMgPSBvd25lci5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAgVXRpbCA9IENsZWF2ZS5VdGlsLFxuICAgICAgICAgICAgcmF3VmFsdWUgPSBvd25lci5lbGVtZW50LnZhbHVlO1xuXG4gICAgICAgIGlmIChwcHMucmF3VmFsdWVUcmltUHJlZml4KSB7XG4gICAgICAgICAgICByYXdWYWx1ZSA9IFV0aWwuZ2V0UHJlZml4U3RyaXBwZWRWYWx1ZShyYXdWYWx1ZSwgcHBzLnByZWZpeCwgcHBzLnByZWZpeExlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHBzLm51bWVyYWwpIHtcbiAgICAgICAgICAgIHJhd1ZhbHVlID0gcHBzLm51bWVyYWxGb3JtYXR0ZXIuZ2V0UmF3VmFsdWUocmF3VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmF3VmFsdWUgPSBVdGlsLnN0cmlwRGVsaW1pdGVycyhyYXdWYWx1ZSwgcHBzLmRlbGltaXRlciwgcHBzLmRlbGltaXRlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJhd1ZhbHVlO1xuICAgIH0sXG5cbiAgICBnZXRGb3JtYXR0ZWRWYWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgIH0sXG5cbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvd25lciA9IHRoaXM7XG5cbiAgICAgICAgb3duZXIuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIG93bmVyLm9uQ2hhbmdlTGlzdGVuZXIpO1xuICAgICAgICBvd25lci5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvd25lci5vbktleURvd25MaXN0ZW5lcik7XG4gICAgICAgIG93bmVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY3V0Jywgb3duZXIub25DdXRMaXN0ZW5lcik7XG4gICAgICAgIG93bmVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29weScsIG93bmVyLm9uQ29weUxpc3RlbmVyKTtcbiAgICB9LFxuXG4gICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICdbQ2xlYXZlIE9iamVjdF0nO1xuICAgIH1cbn07XG5cbkNsZWF2ZS5OdW1lcmFsRm9ybWF0dGVyID0gcmVxdWlyZSgnLi9zaG9ydGN1dHMvTnVtZXJhbEZvcm1hdHRlcicpO1xuQ2xlYXZlLkRhdGVGb3JtYXR0ZXIgPSByZXF1aXJlKCcuL3Nob3J0Y3V0cy9EYXRlRm9ybWF0dGVyJyk7XG5DbGVhdmUuUGhvbmVGb3JtYXR0ZXIgPSByZXF1aXJlKCcuL3Nob3J0Y3V0cy9QaG9uZUZvcm1hdHRlcicpO1xuQ2xlYXZlLkNyZWRpdENhcmREZXRlY3RvciA9IHJlcXVpcmUoJy4vc2hvcnRjdXRzL0NyZWRpdENhcmREZXRlY3RvcicpO1xuQ2xlYXZlLlV0aWwgPSByZXF1aXJlKCcuL3V0aWxzL1V0aWwnKTtcbkNsZWF2ZS5EZWZhdWx0UHJvcGVydGllcyA9IHJlcXVpcmUoJy4vY29tbW9uL0RlZmF1bHRQcm9wZXJ0aWVzJyk7XG5cbi8vIGZvciBhbmd1bGFyIGRpcmVjdGl2ZVxuKCh0eXBlb2YgZ2xvYmFsID09PSAnb2JqZWN0JyAmJiBnbG9iYWwpID8gZ2xvYmFsIDogd2luZG93KVsnQ2xlYXZlJ10gPSBDbGVhdmU7XG5cbi8vIENvbW1vbkpTXG5tb2R1bGUuZXhwb3J0cyA9IENsZWF2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGVhdmUuanMvc3JjL0NsZWF2ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjEzXG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBQcm9wcyBBc3NpZ25tZW50XG4gKlxuICogU2VwYXJhdGUgdGhpcywgc28gcmVhY3QgbW9kdWxlIGNhbiBzaGFyZSB0aGUgdXNhZ2VcbiAqL1xudmFyIERlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIC8vIE1heWJlIGNoYW5nZSB0byBvYmplY3QtYXNzaWduXG4gICAgLy8gZm9yIG5vdyBqdXN0IGtlZXAgaXQgYXMgc2ltcGxlXG4gICAgYXNzaWduOiBmdW5jdGlvbiAodGFyZ2V0LCBvcHRzKSB7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldCB8fCB7fTtcbiAgICAgICAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgICAgICAgLy8gY3JlZGl0IGNhcmRcbiAgICAgICAgdGFyZ2V0LmNyZWRpdENhcmQgPSAhIW9wdHMuY3JlZGl0Q2FyZDtcbiAgICAgICAgdGFyZ2V0LmNyZWRpdENhcmRTdHJpY3RNb2RlID0gISFvcHRzLmNyZWRpdENhcmRTdHJpY3RNb2RlO1xuICAgICAgICB0YXJnZXQuY3JlZGl0Q2FyZFR5cGUgPSAnJztcbiAgICAgICAgdGFyZ2V0Lm9uQ3JlZGl0Q2FyZFR5cGVDaGFuZ2VkID0gb3B0cy5vbkNyZWRpdENhcmRUeXBlQ2hhbmdlZCB8fCAoZnVuY3Rpb24gKCkge30pO1xuXG4gICAgICAgIC8vIHBob25lXG4gICAgICAgIHRhcmdldC5waG9uZSA9ICEhb3B0cy5waG9uZTtcbiAgICAgICAgdGFyZ2V0LnBob25lUmVnaW9uQ29kZSA9IG9wdHMucGhvbmVSZWdpb25Db2RlIHx8ICdBVSc7XG4gICAgICAgIHRhcmdldC5waG9uZUZvcm1hdHRlciA9IHt9O1xuXG4gICAgICAgIC8vIGRhdGVcbiAgICAgICAgdGFyZ2V0LmRhdGUgPSAhIW9wdHMuZGF0ZTtcbiAgICAgICAgdGFyZ2V0LmRhdGVQYXR0ZXJuID0gb3B0cy5kYXRlUGF0dGVybiB8fCBbJ2QnLCAnbScsICdZJ107XG4gICAgICAgIHRhcmdldC5kYXRlRm9ybWF0dGVyID0ge307XG5cbiAgICAgICAgLy8gbnVtZXJhbFxuICAgICAgICB0YXJnZXQubnVtZXJhbCA9ICEhb3B0cy5udW1lcmFsO1xuICAgICAgICB0YXJnZXQubnVtZXJhbERlY2ltYWxTY2FsZSA9IG9wdHMubnVtZXJhbERlY2ltYWxTY2FsZSA+PSAwID8gb3B0cy5udW1lcmFsRGVjaW1hbFNjYWxlIDogMjtcbiAgICAgICAgdGFyZ2V0Lm51bWVyYWxEZWNpbWFsTWFyayA9IG9wdHMubnVtZXJhbERlY2ltYWxNYXJrIHx8ICcuJztcbiAgICAgICAgdGFyZ2V0Lm51bWVyYWxUaG91c2FuZHNHcm91cFN0eWxlID0gb3B0cy5udW1lcmFsVGhvdXNhbmRzR3JvdXBTdHlsZSB8fCAndGhvdXNhbmQnO1xuICAgICAgICB0YXJnZXQubnVtZXJhbFBvc2l0aXZlT25seSA9ICEhb3B0cy5udW1lcmFsUG9zaXRpdmVPbmx5O1xuXG4gICAgICAgIC8vIG90aGVyc1xuICAgICAgICB0YXJnZXQubnVtZXJpY09ubHkgPSB0YXJnZXQuY3JlZGl0Q2FyZCB8fCB0YXJnZXQuZGF0ZSB8fCAhIW9wdHMubnVtZXJpY09ubHk7XG5cbiAgICAgICAgdGFyZ2V0LnVwcGVyY2FzZSA9ICEhb3B0cy51cHBlcmNhc2U7XG4gICAgICAgIHRhcmdldC5sb3dlcmNhc2UgPSAhIW9wdHMubG93ZXJjYXNlO1xuXG4gICAgICAgIHRhcmdldC5wcmVmaXggPSAodGFyZ2V0LmNyZWRpdENhcmQgfHwgdGFyZ2V0LnBob25lIHx8IHRhcmdldC5kYXRlKSA/ICcnIDogKG9wdHMucHJlZml4IHx8ICcnKTtcbiAgICAgICAgdGFyZ2V0LnByZWZpeExlbmd0aCA9IHRhcmdldC5wcmVmaXgubGVuZ3RoO1xuICAgICAgICB0YXJnZXQucmF3VmFsdWVUcmltUHJlZml4ID0gISFvcHRzLnJhd1ZhbHVlVHJpbVByZWZpeDtcbiAgICAgICAgdGFyZ2V0LmNvcHlEZWxpbWl0ZXIgPSAhIW9wdHMuY29weURlbGltaXRlcjtcblxuICAgICAgICB0YXJnZXQuaW5pdFZhbHVlID0gb3B0cy5pbml0VmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogb3B0cy5pbml0VmFsdWUudG9TdHJpbmcoKTtcblxuICAgICAgICB0YXJnZXQuZGVsaW1pdGVyID1cbiAgICAgICAgICAgIChvcHRzLmRlbGltaXRlciB8fCBvcHRzLmRlbGltaXRlciA9PT0gJycpID8gb3B0cy5kZWxpbWl0ZXIgOlxuICAgICAgICAgICAgICAgIChvcHRzLmRhdGUgPyAnLycgOlxuICAgICAgICAgICAgICAgICAgICAob3B0cy5udW1lcmFsID8gJywnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIChvcHRzLnBob25lID8gJyAnIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnICcpKSk7XG4gICAgICAgIHRhcmdldC5kZWxpbWl0ZXJzID0gb3B0cy5kZWxpbWl0ZXJzIHx8IFtdO1xuXG4gICAgICAgIHRhcmdldC5ibG9ja3MgPSBvcHRzLmJsb2NrcyB8fCBbXTtcbiAgICAgICAgdGFyZ2V0LmJsb2Nrc0xlbmd0aCA9IHRhcmdldC5ibG9ja3MubGVuZ3RoO1xuXG4gICAgICAgIHRhcmdldC5yb290ID0gKHR5cGVvZiBnbG9iYWwgPT09ICdvYmplY3QnICYmIGdsb2JhbCkgPyBnbG9iYWwgOiB3aW5kb3c7XG5cbiAgICAgICAgdGFyZ2V0Lm1heExlbmd0aCA9IDA7XG5cbiAgICAgICAgdGFyZ2V0LmJhY2tzcGFjZSA9IGZhbHNlO1xuICAgICAgICB0YXJnZXQucmVzdWx0ID0gJyc7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmF1bHRQcm9wZXJ0aWVzO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2xlYXZlLmpzL3NyYy9jb21tb24vRGVmYXVsdFByb3BlcnRpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDYxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDcmVkaXRDYXJkRGV0ZWN0b3IgPSB7XG4gICAgYmxvY2tzOiB7XG4gICAgICAgIHVhdHA6ICAgICAgICAgIFs0LCA1LCA2XSxcbiAgICAgICAgYW1leDogICAgICAgICAgWzQsIDYsIDVdLFxuICAgICAgICBkaW5lcnM6ICAgICAgICBbNCwgNiwgNF0sXG4gICAgICAgIGRpc2NvdmVyOiAgICAgIFs0LCA0LCA0LCA0XSxcbiAgICAgICAgbWFzdGVyY2FyZDogICAgWzQsIDQsIDQsIDRdLFxuICAgICAgICBkYW5rb3J0OiAgICAgICBbNCwgNCwgNCwgNF0sXG4gICAgICAgIGluc3RhcGF5bWVudDogIFs0LCA0LCA0LCA0XSxcbiAgICAgICAgamNiOiAgICAgICAgICAgWzQsIDQsIDQsIDRdLFxuICAgICAgICBtYWVzdHJvOiAgICAgICBbNCwgNCwgNCwgNF0sXG4gICAgICAgIHZpc2E6ICAgICAgICAgIFs0LCA0LCA0LCA0XSxcbiAgICAgICAgZ2VuZXJhbDogICAgICAgWzQsIDQsIDQsIDRdLFxuICAgICAgICBnZW5lcmFsU3RyaWN0OiBbNCwgNCwgNCwgN11cbiAgICB9LFxuXG4gICAgcmU6IHtcbiAgICAgICAgLy8gc3RhcnRzIHdpdGggMTsgMTUgZGlnaXRzLCBub3Qgc3RhcnRzIHdpdGggMTgwMCAoamNiIGNhcmQpXG4gICAgICAgIHVhdHA6IC9eKD8hMTgwMCkxXFxkezAsMTR9LyxcblxuICAgICAgICAvLyBzdGFydHMgd2l0aCAzNC8zNzsgMTUgZGlnaXRzXG4gICAgICAgIGFtZXg6IC9eM1s0N11cXGR7MCwxM30vLFxuXG4gICAgICAgIC8vIHN0YXJ0cyB3aXRoIDYwMTEvNjUvNjQ0LTY0OTsgMTYgZGlnaXRzXG4gICAgICAgIGRpc2NvdmVyOiAvXig/OjYwMTF8NjVcXGR7MCwyfXw2NFs0LTldXFxkPylcXGR7MCwxMn0vLFxuXG4gICAgICAgIC8vIHN0YXJ0cyB3aXRoIDMwMC0zMDUvMzA5IG9yIDM2LzM4LzM5OyAxNCBkaWdpdHNcbiAgICAgICAgZGluZXJzOiAvXjMoPzowKFswLTVdfDkpfFs2ODldXFxkPylcXGR7MCwxMX0vLFxuXG4gICAgICAgIC8vIHN0YXJ0cyB3aXRoIDUxLTU1LzIyLTI3OyAxNiBkaWdpdHNcbiAgICAgICAgbWFzdGVyY2FyZDogL14oNVsxLTVdfDJbMi03XSlcXGR7MCwxNH0vLFxuXG4gICAgICAgIC8vIHN0YXJ0cyB3aXRoIDUwMTkvNDE3NS80NTcxOyAxNiBkaWdpdHNcbiAgICAgICAgZGFua29ydDogL14oNTAxOXw0MTc1fDQ1NzEpXFxkezAsMTJ9LyxcblxuICAgICAgICAvLyBzdGFydHMgd2l0aCA2MzctNjM5OyAxNiBkaWdpdHNcbiAgICAgICAgaW5zdGFwYXltZW50OiAvXjYzWzctOV1cXGR7MCwxM30vLFxuXG4gICAgICAgIC8vIHN0YXJ0cyB3aXRoIDIxMzEvMTgwMC8zNTsgMTYgZGlnaXRzXG4gICAgICAgIGpjYjogL14oPzoyMTMxfDE4MDB8MzVcXGR7MCwyfSlcXGR7MCwxMn0vLFxuXG4gICAgICAgIC8vIHN0YXJ0cyB3aXRoIDUwLzU2LTU4LzYzMDQvNjc7IDE2IGRpZ2l0c1xuICAgICAgICBtYWVzdHJvOiAvXig/OjVbMDY3OF1cXGR7MCwyfXw2MzA0fDY3XFxkezAsMn0pXFxkezAsMTJ9LyxcblxuICAgICAgICAvLyBzdGFydHMgd2l0aCA0OyAxNiBkaWdpdHNcbiAgICAgICAgdmlzYTogL140XFxkezAsMTV9L1xuICAgIH0sXG5cbiAgICBnZXRJbmZvOiBmdW5jdGlvbiAodmFsdWUsIHN0cmljdE1vZGUpIHtcbiAgICAgICAgdmFyIGJsb2NrcyA9IENyZWRpdENhcmREZXRlY3Rvci5ibG9ja3MsXG4gICAgICAgICAgICByZSA9IENyZWRpdENhcmREZXRlY3Rvci5yZTtcblxuICAgICAgICAvLyBJbiB0aGVvcnksIHZpc2EgY3JlZGl0IGNhcmQgY2FuIGhhdmUgdXAgdG8gMTkgZGlnaXRzIG51bWJlci5cbiAgICAgICAgLy8gU2V0IHN0cmljdE1vZGUgdG8gdHJ1ZSB3aWxsIHJlbW92ZSB0aGUgMTYgbWF4LWxlbmd0aCByZXN0cmFpbixcbiAgICAgICAgLy8gaG93ZXZlciwgSSBuZXZlciBmb3VuZCBhbnkgd2Vic2l0ZSB2YWxpZGF0ZSBjYXJkIG51bWJlciBsaWtlXG4gICAgICAgIC8vIHRoaXMsIGhlbmNlIHByb2JhYmx5IHlvdSBkb24ndCBuZWVkIHRvIGVuYWJsZSB0aGlzIG9wdGlvbi5cbiAgICAgICAgc3RyaWN0TW9kZSA9ICEhc3RyaWN0TW9kZTtcblxuICAgICAgICBpZiAocmUuYW1leC50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAgICdhbWV4JyxcbiAgICAgICAgICAgICAgICBibG9ja3M6IGJsb2Nrcy5hbWV4XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHJlLnVhdHAudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogICAndWF0cCcsXG4gICAgICAgICAgICAgICAgYmxvY2tzOiBibG9ja3MudWF0cFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChyZS5kaW5lcnMudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogICAnZGluZXJzJyxcbiAgICAgICAgICAgICAgICBibG9ja3M6IGJsb2Nrcy5kaW5lcnNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAocmUuZGlzY292ZXIudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogICAnZGlzY292ZXInLFxuICAgICAgICAgICAgICAgIGJsb2NrczogYmxvY2tzLmRpc2NvdmVyXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHJlLm1hc3RlcmNhcmQudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogICAnbWFzdGVyY2FyZCcsXG4gICAgICAgICAgICAgICAgYmxvY2tzOiBibG9ja3MubWFzdGVyY2FyZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChyZS5kYW5rb3J0LnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICAgJ2RhbmtvcnQnLFxuICAgICAgICAgICAgICAgIGJsb2NrczogYmxvY2tzLmRhbmtvcnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAocmUuaW5zdGFwYXltZW50LnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICAgJ2luc3RhcGF5bWVudCcsXG4gICAgICAgICAgICAgICAgYmxvY2tzOiBibG9ja3MuaW5zdGFwYXltZW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKHJlLmpjYi50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAgICdqY2InLFxuICAgICAgICAgICAgICAgIGJsb2NrczogYmxvY2tzLmpjYlxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChyZS5tYWVzdHJvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICAgJ21hZXN0cm8nLFxuICAgICAgICAgICAgICAgIGJsb2NrczogYmxvY2tzLm1hZXN0cm9cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAocmUudmlzYS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAgICd2aXNhJyxcbiAgICAgICAgICAgICAgICBibG9ja3M6IHN0cmljdE1vZGUgPyBibG9ja3MuZ2VuZXJhbFN0cmljdCA6IGJsb2Nrcy52aXNhXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAgICd1bmtub3duJyxcbiAgICAgICAgICAgICAgICBibG9ja3M6IGJsb2Nrcy5nZW5lcmFsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDcmVkaXRDYXJkRGV0ZWN0b3I7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGVhdmUuanMvc3JjL3Nob3J0Y3V0cy9DcmVkaXRDYXJkRGV0ZWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDYxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBEYXRlRm9ybWF0dGVyID0gZnVuY3Rpb24gKGRhdGVQYXR0ZXJuKSB7XG4gICAgdmFyIG93bmVyID0gdGhpcztcblxuICAgIG93bmVyLmJsb2NrcyA9IFtdO1xuICAgIG93bmVyLmRhdGVQYXR0ZXJuID0gZGF0ZVBhdHRlcm47XG4gICAgb3duZXIuaW5pdEJsb2NrcygpO1xufTtcblxuRGF0ZUZvcm1hdHRlci5wcm90b3R5cGUgPSB7XG4gICAgaW5pdEJsb2NrczogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3duZXIgPSB0aGlzO1xuICAgICAgICBvd25lci5kYXRlUGF0dGVybi5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnWScpIHtcbiAgICAgICAgICAgICAgICBvd25lci5ibG9ja3MucHVzaCg0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3duZXIuYmxvY2tzLnB1c2goMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXRCbG9ja3M6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tzO1xuICAgIH0sXG5cbiAgICBnZXRWYWxpZGF0ZWREYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIG93bmVyID0gdGhpcywgcmVzdWx0ID0gJyc7XG5cbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9bXlxcZF0vZywgJycpO1xuXG4gICAgICAgIG93bmVyLmJsb2Nrcy5mb3JFYWNoKGZ1bmN0aW9uIChsZW5ndGgsIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBzdWIgPSB2YWx1ZS5zbGljZSgwLCBsZW5ndGgpLFxuICAgICAgICAgICAgICAgICAgICBzdWIwID0gc3ViLnNsaWNlKDAsIDEpLFxuICAgICAgICAgICAgICAgICAgICByZXN0ID0gdmFsdWUuc2xpY2UobGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAob3duZXIuZGF0ZVBhdHRlcm5baW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWIgPT09ICcwMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YiA9ICcwMSc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoc3ViMCwgMTApID4gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViID0gJzAnICsgc3ViMDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChzdWIsIDEwKSA+IDMxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWIgPSAnMzEnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YiA9PT0gJzAwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViID0gJzAxJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUludChzdWIwLCAxMCkgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWIgPSAnMCcgKyBzdWIwO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlSW50KHN1YiwgMTApID4gMTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YiA9ICcxMic7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gc3ViO1xuXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIHJlbWFpbmluZyBzdHJpbmdcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHJlc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRlRm9ybWF0dGVyO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2xlYXZlLmpzL3NyYy9zaG9ydGN1dHMvRGF0ZUZvcm1hdHRlci5qc1xuLy8gbW9kdWxlIGlkID0gNjE2XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIid1c2Ugc3RyaWN0JztcblxudmFyIE51bWVyYWxGb3JtYXR0ZXIgPSBmdW5jdGlvbiAobnVtZXJhbERlY2ltYWxNYXJrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJhbERlY2ltYWxTY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWVyYWxUaG91c2FuZHNHcm91cFN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJhbFBvc2l0aXZlT25seSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGltaXRlcikge1xuICAgIHZhciBvd25lciA9IHRoaXM7XG5cbiAgICBvd25lci5udW1lcmFsRGVjaW1hbE1hcmsgPSBudW1lcmFsRGVjaW1hbE1hcmsgfHwgJy4nO1xuICAgIG93bmVyLm51bWVyYWxEZWNpbWFsU2NhbGUgPSBudW1lcmFsRGVjaW1hbFNjYWxlID49IDAgPyBudW1lcmFsRGVjaW1hbFNjYWxlIDogMjtcbiAgICBvd25lci5udW1lcmFsVGhvdXNhbmRzR3JvdXBTdHlsZSA9IG51bWVyYWxUaG91c2FuZHNHcm91cFN0eWxlIHx8IE51bWVyYWxGb3JtYXR0ZXIuZ3JvdXBTdHlsZS50aG91c2FuZDtcbiAgICBvd25lci5udW1lcmFsUG9zaXRpdmVPbmx5ID0gISFudW1lcmFsUG9zaXRpdmVPbmx5O1xuICAgIG93bmVyLmRlbGltaXRlciA9IChkZWxpbWl0ZXIgfHwgZGVsaW1pdGVyID09PSAnJykgPyBkZWxpbWl0ZXIgOiAnLCc7XG4gICAgb3duZXIuZGVsaW1pdGVyUkUgPSBkZWxpbWl0ZXIgPyBuZXcgUmVnRXhwKCdcXFxcJyArIGRlbGltaXRlciwgJ2cnKSA6ICcnO1xufTtcblxuTnVtZXJhbEZvcm1hdHRlci5ncm91cFN0eWxlID0ge1xuICAgIHRob3VzYW5kOiAndGhvdXNhbmQnLFxuICAgIGxha2g6ICAgICAnbGFraCcsXG4gICAgd2FuOiAgICAgICd3YW4nXG59O1xuXG5OdW1lcmFsRm9ybWF0dGVyLnByb3RvdHlwZSA9IHtcbiAgICBnZXRSYXdWYWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKHRoaXMuZGVsaW1pdGVyUkUsICcnKS5yZXBsYWNlKHRoaXMubnVtZXJhbERlY2ltYWxNYXJrLCAnLicpO1xuICAgIH0sXG5cbiAgICBmb3JtYXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgb3duZXIgPSB0aGlzLCBwYXJ0cywgcGFydEludGVnZXIsIHBhcnREZWNpbWFsID0gJyc7XG5cbiAgICAgICAgLy8gc3RyaXAgYWxwaGFiZXQgbGV0dGVyc1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1tBLVphLXpdL2csICcnKVxuICAgICAgICAgICAgLy8gcmVwbGFjZSB0aGUgZmlyc3QgZGVjaW1hbCBtYXJrIHdpdGggcmVzZXJ2ZWQgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgIC5yZXBsYWNlKG93bmVyLm51bWVyYWxEZWNpbWFsTWFyaywgJ00nKVxuXG4gICAgICAgICAgICAvLyBzdHJpcCBub24gbnVtZXJpYyBsZXR0ZXJzIGV4Y2VwdCBtaW51cyBhbmQgXCJNXCJcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgdG8gZW5zdXJlIHByZWZpeCBoYXMgYmVlbiBzdHJpcHBlZFxuICAgICAgICAgICAgLnJlcGxhY2UoL1teXFxkTS1dL2csICcnKVxuXG4gICAgICAgICAgICAvLyByZXBsYWNlIHRoZSBsZWFkaW5nIG1pbnVzIHdpdGggcmVzZXJ2ZWQgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwtLywgJ04nKVxuXG4gICAgICAgICAgICAvLyBzdHJpcCB0aGUgb3RoZXIgbWludXMgc2lnbiAoaWYgcHJlc2VudClcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXC0vZywgJycpXG5cbiAgICAgICAgICAgIC8vIHJlcGxhY2UgdGhlIG1pbnVzIHNpZ24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICAucmVwbGFjZSgnTicsIG93bmVyLm51bWVyYWxQb3NpdGl2ZU9ubHkgPyAnJyA6ICctJylcblxuICAgICAgICAgICAgLy8gcmVwbGFjZSBkZWNpbWFsIG1hcmtcbiAgICAgICAgICAgIC5yZXBsYWNlKCdNJywgb3duZXIubnVtZXJhbERlY2ltYWxNYXJrKVxuXG4gICAgICAgICAgICAvLyBzdHJpcCBhbnkgbGVhZGluZyB6ZXJvc1xuICAgICAgICAgICAgLnJlcGxhY2UoL14oLSk/MCsoPz1cXGQpLywgJyQxJyk7XG5cbiAgICAgICAgcGFydEludGVnZXIgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUuaW5kZXhPZihvd25lci5udW1lcmFsRGVjaW1hbE1hcmspID49IDApIHtcbiAgICAgICAgICAgIHBhcnRzID0gdmFsdWUuc3BsaXQob3duZXIubnVtZXJhbERlY2ltYWxNYXJrKTtcbiAgICAgICAgICAgIHBhcnRJbnRlZ2VyID0gcGFydHNbMF07XG4gICAgICAgICAgICBwYXJ0RGVjaW1hbCA9IG93bmVyLm51bWVyYWxEZWNpbWFsTWFyayArIHBhcnRzWzFdLnNsaWNlKDAsIG93bmVyLm51bWVyYWxEZWNpbWFsU2NhbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChvd25lci5udW1lcmFsVGhvdXNhbmRzR3JvdXBTdHlsZSkge1xuICAgICAgICBjYXNlIE51bWVyYWxGb3JtYXR0ZXIuZ3JvdXBTdHlsZS5sYWtoOlxuICAgICAgICAgICAgcGFydEludGVnZXIgPSBwYXJ0SW50ZWdlci5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGQpK1xcZCQpL2csICckMScgKyBvd25lci5kZWxpbWl0ZXIpO1xuXG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIE51bWVyYWxGb3JtYXR0ZXIuZ3JvdXBTdHlsZS53YW46XG4gICAgICAgICAgICBwYXJ0SW50ZWdlciA9IHBhcnRJbnRlZ2VyLnJlcGxhY2UoLyhcXGQpKD89KFxcZHs0fSkrJCkvZywgJyQxJyArIG93bmVyLmRlbGltaXRlcik7XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBwYXJ0SW50ZWdlciA9IHBhcnRJbnRlZ2VyLnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrJCkvZywgJyQxJyArIG93bmVyLmRlbGltaXRlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFydEludGVnZXIudG9TdHJpbmcoKSArIChvd25lci5udW1lcmFsRGVjaW1hbFNjYWxlID4gMCA/IHBhcnREZWNpbWFsLnRvU3RyaW5nKCkgOiAnJyk7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBOdW1lcmFsRm9ybWF0dGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NsZWF2ZS5qcy9zcmMvc2hvcnRjdXRzL051bWVyYWxGb3JtYXR0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDYxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBQaG9uZUZvcm1hdHRlciA9IGZ1bmN0aW9uIChmb3JtYXR0ZXIsIGRlbGltaXRlcikge1xuICAgIHZhciBvd25lciA9IHRoaXM7XG5cbiAgICBvd25lci5kZWxpbWl0ZXIgPSAoZGVsaW1pdGVyIHx8IGRlbGltaXRlciA9PT0gJycpID8gZGVsaW1pdGVyIDogJyAnO1xuICAgIG93bmVyLmRlbGltaXRlclJFID0gZGVsaW1pdGVyID8gbmV3IFJlZ0V4cCgnXFxcXCcgKyBkZWxpbWl0ZXIsICdnJykgOiAnJztcblxuICAgIG93bmVyLmZvcm1hdHRlciA9IGZvcm1hdHRlcjtcbn07XG5cblBob25lRm9ybWF0dGVyLnByb3RvdHlwZSA9IHtcbiAgICBzZXRGb3JtYXR0ZXI6IGZ1bmN0aW9uIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgdGhpcy5mb3JtYXR0ZXIgPSBmb3JtYXR0ZXI7XG4gICAgfSxcblxuICAgIGZvcm1hdDogZnVuY3Rpb24gKHBob25lTnVtYmVyKSB7XG4gICAgICAgIHZhciBvd25lciA9IHRoaXM7XG5cbiAgICAgICAgb3duZXIuZm9ybWF0dGVyLmNsZWFyKCk7XG5cbiAgICAgICAgLy8gb25seSBrZWVwIG51bWJlciBhbmQgK1xuICAgICAgICBwaG9uZU51bWJlciA9IHBob25lTnVtYmVyLnJlcGxhY2UoL1teXFxkK10vZywgJycpO1xuXG4gICAgICAgIC8vIHN0cmlwIGRlbGltaXRlclxuICAgICAgICBwaG9uZU51bWJlciA9IHBob25lTnVtYmVyLnJlcGxhY2Uob3duZXIuZGVsaW1pdGVyUkUsICcnKTtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gJycsIGN1cnJlbnQsIHZhbGlkYXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpTWF4ID0gcGhvbmVOdW1iZXIubGVuZ3RoOyBpIDwgaU1heDsgaSsrKSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gb3duZXIuZm9ybWF0dGVyLmlucHV0RGlnaXQocGhvbmVOdW1iZXIuY2hhckF0KGkpKTtcblxuICAgICAgICAgICAgLy8gaGFzICgpLSBvciBzcGFjZSBpbnNpZGVcbiAgICAgICAgICAgIGlmICgvW1xccygpLV0vZy50ZXN0KGN1cnJlbnQpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gY3VycmVudDtcblxuICAgICAgICAgICAgICAgIHZhbGlkYXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGVsc2U6IG92ZXIgbGVuZ3RoIGlucHV0XG4gICAgICAgICAgICAgICAgLy8gaXQgdHVybnMgdG8gaW52YWxpZCBudW1iZXIgYWdhaW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0cmlwICgpXG4gICAgICAgIC8vIGUuZy4gVVM6IDcxNjEyMzQ1NjcgcmV0dXJucyAoNzE2KSAxMjMtNDU2N1xuICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZSgvWygpXS9nLCAnJyk7XG4gICAgICAgIC8vIHJlcGxhY2UgbGlicmFyeSBkZWxpbWl0ZXIgd2l0aCB1c2VyIGN1c3RvbWl6ZWQgZGVsaW1pdGVyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC9bXFxzLV0vZywgb3duZXIuZGVsaW1pdGVyKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGhvbmVGb3JtYXR0ZXI7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGVhdmUuanMvc3JjL3Nob3J0Y3V0cy9QaG9uZUZvcm1hdHRlci5qc1xuLy8gbW9kdWxlIGlkID0gNjE4XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIid1c2Ugc3RyaWN0JztcblxudmFyIFV0aWwgPSB7XG4gICAgbm9vcDogZnVuY3Rpb24gKCkge1xuICAgIH0sXG5cbiAgICBzdHJpcDogZnVuY3Rpb24gKHZhbHVlLCByZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShyZSwgJycpO1xuICAgIH0sXG5cbiAgICBpc0RlbGltaXRlcjogZnVuY3Rpb24gKGxldHRlciwgZGVsaW1pdGVyLCBkZWxpbWl0ZXJzKSB7XG4gICAgICAgIC8vIHNpbmdsZSBkZWxpbWl0ZXJcbiAgICAgICAgaWYgKGRlbGltaXRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbGV0dGVyID09PSBkZWxpbWl0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtdWx0aXBsZSBkZWxpbWl0ZXJzXG4gICAgICAgIHJldHVybiBkZWxpbWl0ZXJzLnNvbWUoZnVuY3Rpb24gKGN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmIChsZXR0ZXIgPT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHN0cmlwRGVsaW1pdGVyczogZnVuY3Rpb24gKHZhbHVlLCBkZWxpbWl0ZXIsIGRlbGltaXRlcnMpIHtcbiAgICAgICAgLy8gc2luZ2xlIGRlbGltaXRlclxuICAgICAgICBpZiAoZGVsaW1pdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHZhciBkZWxpbWl0ZXJSRSA9IGRlbGltaXRlciA/IG5ldyBSZWdFeHAoJ1xcXFwnICsgZGVsaW1pdGVyLCAnZycpIDogJyc7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKGRlbGltaXRlclJFLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtdWx0aXBsZSBkZWxpbWl0ZXJzXG4gICAgICAgIGRlbGltaXRlcnMuZm9yRWFjaChmdW5jdGlvbiAoY3VycmVudCkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoJ1xcXFwnICsgY3VycmVudCwgJ2cnKSwgJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcblxuICAgIGhlYWRTdHI6IGZ1bmN0aW9uIChzdHIsIGxlbmd0aCkge1xuICAgICAgICByZXR1cm4gc3RyLnNsaWNlKDAsIGxlbmd0aCk7XG4gICAgfSxcblxuICAgIGdldE1heExlbmd0aDogZnVuY3Rpb24gKGJsb2Nrcykge1xuICAgICAgICByZXR1cm4gYmxvY2tzLnJlZHVjZShmdW5jdGlvbiAocHJldmlvdXMsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cyArIGN1cnJlbnQ7XG4gICAgICAgIH0sIDApO1xuICAgIH0sXG5cbiAgICAvLyBzdHJpcCB2YWx1ZSBieSBwcmVmaXggbGVuZ3RoXG4gICAgLy8gZm9yIHByZWZpeDogUFJFXG4gICAgLy8gKFBSRTEyMywgMykgLT4gMTIzXG4gICAgLy8gKFBSMTIzLCAzKSAtPiAyMyB0aGlzIGhhcHBlbnMgd2hlbiB1c2VyIGhpdHMgYmFja3NwYWNlIGluIGZyb250IG9mIFwiUFJFXCJcbiAgICBnZXRQcmVmaXhTdHJpcHBlZFZhbHVlOiBmdW5jdGlvbiAodmFsdWUsIHByZWZpeCwgcHJlZml4TGVuZ3RoKSB7XG4gICAgICAgIGlmICh2YWx1ZS5zbGljZSgwLCBwcmVmaXhMZW5ndGgpICE9PSBwcmVmaXgpIHtcbiAgICAgICAgICAgIHZhciBkaWZmSW5kZXggPSB0aGlzLmdldEZpcnN0RGlmZkluZGV4KHByZWZpeCwgdmFsdWUuc2xpY2UoMCwgcHJlZml4TGVuZ3RoKSk7XG5cbiAgICAgICAgICAgIHZhbHVlID0gcHJlZml4ICsgdmFsdWUuc2xpY2UoZGlmZkluZGV4LCBkaWZmSW5kZXggKyAxKSArIHZhbHVlLnNsaWNlKHByZWZpeExlbmd0aCArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlLnNsaWNlKHByZWZpeExlbmd0aCk7XG4gICAgfSxcblxuICAgIGdldEZpcnN0RGlmZkluZGV4OiBmdW5jdGlvbiAocHJldiwgY3VycmVudCkge1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuXG4gICAgICAgIHdoaWxlIChwcmV2LmNoYXJBdChpbmRleCkgPT09IGN1cnJlbnQuY2hhckF0KGluZGV4KSlcbiAgICAgICAgICAgIGlmIChwcmV2LmNoYXJBdChpbmRleCsrKSA9PT0gJycpXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9LFxuXG4gICAgZ2V0Rm9ybWF0dGVkVmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSwgYmxvY2tzLCBibG9ja3NMZW5ndGgsIGRlbGltaXRlciwgZGVsaW1pdGVycykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gJycsXG4gICAgICAgICAgICBtdWx0aXBsZURlbGltaXRlcnMgPSBkZWxpbWl0ZXJzLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICBjdXJyZW50RGVsaW1pdGVyO1xuXG4gICAgICAgIC8vIG5vIG9wdGlvbnMsIG5vcm1hbCBpbnB1dFxuICAgICAgICBpZiAoYmxvY2tzTGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBibG9ja3MuZm9yRWFjaChmdW5jdGlvbiAobGVuZ3RoLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgc3ViID0gdmFsdWUuc2xpY2UoMCwgbGVuZ3RoKSxcbiAgICAgICAgICAgICAgICAgICAgcmVzdCA9IHZhbHVlLnNsaWNlKGxlbmd0aCk7XG5cbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gc3ViO1xuXG4gICAgICAgICAgICAgICAgY3VycmVudERlbGltaXRlciA9IG11bHRpcGxlRGVsaW1pdGVycyA/IChkZWxpbWl0ZXJzW2luZGV4XSB8fCBjdXJyZW50RGVsaW1pdGVyKSA6IGRlbGltaXRlcjtcblxuICAgICAgICAgICAgICAgIGlmIChzdWIubGVuZ3RoID09PSBsZW5ndGggJiYgaW5kZXggPCBibG9ja3NMZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBjdXJyZW50RGVsaW1pdGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSByZW1haW5pbmcgc3RyaW5nXG4gICAgICAgICAgICAgICAgdmFsdWUgPSByZXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVXRpbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jbGVhdmUuanMvc3JjL3V0aWxzL1V0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDYxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbkFyb3VuZCB7XFxuZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIHNwaW5Bcm91bmQge1xcbmZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbn1cXG50byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbn1cXG59XFxuLmJ1dHRvbltkYXRhLXYtNmU4ODgzZmZdIHtcXG4gIG1hcmdpbjogNXB4IDAgMDtcXG59XFxuLmNvbnRyb2wgLmJ1dHRvbltkYXRhLXYtNmU4ODgzZmZdIHtcXG4gIG1hcmdpbjogaW5oZXJpdDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4uY29udHJvbC5oYXMtYWRkb25zIGlucHV0W2RhdGEtdi02ZTg4ODNmZl0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmNvbnRyb2wuaGFzLWFkZG9ucyBpbnB1dC5pcy1leHBhbmRlZFtkYXRhLXYtNmU4ODgzZmZdIHtcXG4gICAgLW1zLWZsZXgtbmVnYXRpdmU6IDE7XFxuICAgICAgICBmbGV4LXNocmluazogMTtcXG59XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTZlODg4M2ZmXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL3VpL0Zvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSA2NDFcbi8vIG1vZHVsZSBjaHVua3MgPSA5IiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/Y2FjaGVEaXJlY3RvcnkhLi4vLi4vdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NsZWF2ZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjI5MTRlZDdcXFwifSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGVhdmUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCIvaG9tZS9raW1uaC9Db2Rlcy9XZWJTaG9wL2FkbWluLXRlbXBsYXRlL2xhcmF2ZWwtdnVlLWFkbWluL25vZGVfbW9kdWxlcy92dWUtY2xlYXZlL3NyYy9DbGVhdmUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQ2xlYXZlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yMjkxNGVkN1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTIyOTE0ZWQ3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWNsZWF2ZS9zcmMvQ2xlYXZlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzAyXG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnaW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ZtLnZhbHVlXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnVwZGF0ZVZhbHVlKCRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICB9XG4gICAgfVxuICB9KVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yMjkxNGVkN1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTIyOTE0ZWQ3XCJ9IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9+L3Z1ZS1jbGVhdmUvc3JjL0NsZWF2ZS52dWVcbi8vIG1vZHVsZSBpZCA9IDcyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDkiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1hbmNlc3RvclwiXG4gIH0sIFtfdm0uX20oMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnRcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIkNsZWF2ZS5qc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic3VidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiRm9ybWF0IHlvdXIgPGlucHV0Lz4gY29udGVudCB3aGVuIHlvdSBhcmUgdHlwaW5nXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uc1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbHVtblwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIkNyZWRpdCBjYXJkIG51bWJlclwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnY2xlYXZlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJFbnRlciBjcmVkaXQgY2FyZCBudW1iZXJcIixcbiAgICAgIFwib3B0aW9uc1wiOiB7XG4gICAgICAgIGNyZWRpdENhcmQ6IHRydWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiUGhvbmUgbnVtYmVyXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdjbGVhdmUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGVsXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRW50ZXIgcGhvbmUgbnVtYmVyXCIsXG4gICAgICBcIm9wdGlvbnNcIjoge1xuICAgICAgICBwaG9uZTogdHJ1ZSxcbiAgICAgICAgcGhvbmVSZWdpb25Db2RlOiAnY24nXG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIk51bWVyYWxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2NsZWF2ZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRW50ZXIgbnVtZXJhbFwiLFxuICAgICAgXCJvcHRpb25zXCI6IHtcbiAgICAgICAgbnVtZXJhbDogdHJ1ZSxcbiAgICAgICAgbnVtZXJhbFRob3VzYW5kc0dyb3VwU3R5bGU6ICd0aG91c2FuZCdcbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW5cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJEYXRlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdjbGVhdmUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIllZWVkvTU0vRERcIixcbiAgICAgIFwidmFsdWVcIjogJzIwMTYwOTAxJyxcbiAgICAgIFwib3B0aW9uc1wiOiB7XG4gICAgICAgIGRhdGU6IHRydWUsXG4gICAgICAgIGRhdGVQYXR0ZXJuOiBbJ1knLCAnbScsICdkJ11cbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnY2xlYXZlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJNTS9ZWVwiLFxuICAgICAgXCJvcHRpb25zXCI6IHtcbiAgICAgICAgZGF0ZTogdHJ1ZSxcbiAgICAgICAgZGF0ZVBhdHRlcm46IFsnbScsICd5J11cbiAgICAgIH1cbiAgICB9XG4gIH0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb2x1bW5cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJDdXN0b20gb3B0aW9uc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnY2xlYXZlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJCbG9ja3M6IFs0LCAzLCAzLCA0XVwiLFxuICAgICAgXCJvcHRpb25zXCI6IHtcbiAgICAgICAgYmxvY2tzOiBbNCwgMywgMywgNF0sXG4gICAgICAgIHVwcGVyY2FzZTogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCdjbGVhdmUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkRlbGltaXRlcjogJ8K3J1wiLFxuICAgICAgXCJvcHRpb25zXCI6IHtcbiAgICAgICAgZGVsaW1pdGVyOiAnwrcnLFxuICAgICAgICBibG9ja3M6IFszLCAzLCAzLCAzXSxcbiAgICAgICAgdXBwZXJjYXNlOiB0cnVlXG4gICAgICB9XG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2NsZWF2ZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcIm9wdGlvbnNcIjoge1xuICAgICAgICBwcmVmaXg6ICdQUkVGSVgnLFxuICAgICAgICBkZWxpbWl0ZXI6ICctJyxcbiAgICAgICAgYmxvY2tzOiBbNiwgNCwgNCwgNF0sXG4gICAgICAgIHVwcGVyY2FzZTogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgfSldLCAxKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgyKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWFuY2VzdG9yXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnQgaXMtNFwiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiQ29udHJvbHNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibG9ja1wiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiTmFtZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiVGV4dCBpbnB1dFwiXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGFiZWxcIlxuICB9LCBbX3ZtLl92KFwiVXNlcm5hbWVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbCBoYXMtaWNvbiBoYXMtaWNvbi1yaWdodFwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgaXMtc3VjY2Vzc1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiVGV4dCBpbnB1dFwiLFxuICAgICAgXCJ2YWx1ZVwiOiBcImJ1bG1hXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNoZWNrXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaGVscCBpcy1zdWNjZXNzXCJcbiAgfSwgW192bS5fdihcIlRoaXMgdXNlcm5hbWUgaXMgYXZhaWxhYmxlXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIkVtYWlsXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaGFzLWljb24gaGFzLWljb24tcmlnaHRcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0IGlzLWRhbmdlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRW1haWwgaW5wdXRcIixcbiAgICAgIFwidmFsdWVcIjogXCJoZWxsb0BcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtd2FybmluZ1wiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImhlbHAgaXMtZGFuZ2VyXCJcbiAgfSwgW192bS5fdihcIlRoaXMgZW1haWwgaXMgaW52YWxpZFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYWJlbFwiXG4gIH0sIFtfdm0uX3YoXCJTdWJqZWN0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2VsZWN0XCJcbiAgfSwgW19jKCdzZWxlY3QnLCBbX2MoJ29wdGlvbicsIFtfdm0uX3YoXCJTZWxlY3QgZHJvcGRvd25cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIFtfdm0uX3YoXCJXaXRoIG9wdGlvbnNcIildKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIk1lc3NhZ2VcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygndGV4dGFyZWEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dGFyZWFcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlRleHRhcmVhXCJcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNoZWNrYm94XCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgUmVtZW1iZXIgbWVcXG4gICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyYWRpb1wiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInJhZGlvXCIsXG4gICAgICBcIm5hbWVcIjogXCJxdWVzdGlvblwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICBZZXNcXG4gICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJhZGlvXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicmFkaW9cIixcbiAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIE5vXFxuICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1wcmltYXJ5XCJcbiAgfSwgW192bS5fdihcIlN1Ym1pdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1saW5rXCJcbiAgfSwgW192bS5fdihcIkNhbmNlbFwiKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnQgaXMtNSBpcy12ZXJ0aWNhbFwiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiQ29sb3JzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2tcIlxuICB9LCBbX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgaXMtcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiUHJpbWFyeSBpbnB1dFwiXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dCBpcy1pbmZvXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJJbmZvIGlucHV0XCJcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0IGlzLXN1Y2Nlc3NcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlN1Y2Nlc3MgaW5wdXRcIlxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgaXMtd2FybmluZ1wiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiV2FybmluZyBpbnB1dFwiXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dCBpcy1kYW5nZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkRhbmdlciBpbnB1dFwiXG4gICAgfVxuICB9KV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIlNpemVzXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2tcIlxuICB9LCBbX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgaXMtc21hbGxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlNtYWxsIGlucHV0XCJcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJOb3JtYWwgaW5wdXRcIlxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgaXMtbWVkaXVtXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJNZWRpdW0gaW5wdXRcIlxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgaXMtbGFyZ2VcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkxhcmdlIGlucHV0XCJcbiAgICB9XG4gIH0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnRcIlxuICB9LCBbX2MoJ2FydGljbGUnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1jaGlsZCBib3hcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpdGxlXCJcbiAgfSwgW192bS5fdihcIlN0YXRlc1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrXCJcbiAgfSwgW19jKCdoMicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdWJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJMb2FkaW5nXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaXMtbG9hZGluZ1wiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkxvYWRpbmcgaW5wdXRcIlxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbCBpcy1sb2FkaW5nXCJcbiAgfSwgW19jKCd0ZXh0YXJlYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0YXJlYVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiTG9hZGluZyB0ZXh0YXJlYVwiXG4gICAgfVxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmxvY2tcIlxuICB9LCBbX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN1YnRpdGxlXCJcbiAgfSwgW192bS5fdihcIkRpc2FibGVkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJEaXNhYmxlZCBpbnB1dFwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBcIlwiXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCd0ZXh0YXJlYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0YXJlYVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRGlzYWJsZWQgdGV4dGFyZWFcIixcbiAgICAgIFwiZGlzYWJsZWRcIjogXCJcIlxuICAgIH1cbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2hlY2tib3ggaXMtZGlzYWJsZWRcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiLFxuICAgICAgXCJkaXNhYmxlZFwiOiBcIlwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICBSZW1lbWJlciBtZVxcbiAgICAgICAgICAgIFwiKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJhZGlvIGlzLWRpc2FibGVkXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicmFkaW9cIixcbiAgICAgIFwibmFtZVwiOiBcInF1ZXN0aW9uXCIsXG4gICAgICBcImRpc2FibGVkXCI6IFwiXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIFllc1xcbiAgICAgICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicmFkaW8gaXMtZGlzYWJsZWRcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJyYWRpb1wiLFxuICAgICAgXCJuYW1lXCI6IFwicXVlc3Rpb25cIixcbiAgICAgIFwiZGlzYWJsZWRcIjogXCJcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgTm9cXG4gICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJkaXNhYmxlZFwiOiBcIlwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU3VibWl0XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGlzYWJsZWRcIjogXCJcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIkNhbmNlbFwiKV0pXSldKV0pXSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1wYXJlbnQgaXMtM1wiXG4gIH0sIFtfYygnYXJ0aWNsZScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aWxlIGlzLWNoaWxkIGJveFwiXG4gIH0sIFtfYygnaDEnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGl0bGVcIlxuICB9LCBbX3ZtLl92KFwiV2l0aCBJY29uXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdoMicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdWJ0aXRsZVwiXG4gIH0sIFtfYygnYScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiaHR0cDovL2ZvbnRhd2Vzb21lLmlvL1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRm9udCBBd2Vzb21lIEljb25zXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibG9ja1wiXG4gIH0sIFtfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sIGhhcy1pY29uXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJlbWFpbFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkVtYWlsXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWVudmVsb3BlXCJcbiAgfSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sIGhhcy1pY29uXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJwYXNzd29yZFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIlBhc3N3b3JkXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWxvY2tcIlxuICB9KV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtc3VjY2Vzc1wiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIExvZ2luXFxuICAgICAgICAgICAgXCIpXSldKV0pXSldKVxufSxmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGlsZSBpcy1hbmNlc3RvclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50XCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJBZGRvbnNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibG9ja1wiXG4gIH0sIFtfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sIGhhcy1hZGRvbnNcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJGaW5kIGEgcmVwb3NpdG9yeVwiXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLWluZm9cIlxuICB9LCBbX3ZtLl92KFwiU2VhcmNoXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbCBoYXMtYWRkb25zXCJcbiAgfSwgW19jKCdzcGFuJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNlbGVjdFwiXG4gIH0sIFtfYygnc2VsZWN0JywgW19jKCdvcHRpb24nLCBbX3ZtLl92KFwiJFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywgW192bS5fdihcIsKjXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvcHRpb24nLCBbX3ZtLl92KFwi4oKsXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgaXMtZXhwYW5kZWRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkV4cGFuZGVkXCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtc3VjY2Vzc1wiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIFRyYW5zZmVyXFxuICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbCBoYXMtYWRkb25zIGhhcy1hZGRvbnMtY2VudGVyZWRcIlxuICB9LCBbX2MoJ3NwYW4nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic2VsZWN0XCJcbiAgfSwgW19jKCdzZWxlY3QnLCBbX2MoJ29wdGlvbicsIFtfdm0uX3YoXCIkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdvcHRpb24nLCBbX3ZtLl92KFwiwqNcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIFtfdm0uX3YoXCLigqxcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiQ2VudGVyZWRcIlxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdhJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1zdWNjZXNzXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgVHJhbnNmZXJcXG4gICAgICAgICAgICBcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sIGhhcy1hZGRvbnMgaGFzLWFkZG9ucy1yaWdodFwiXG4gIH0sIFtfYygnc3BhbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzZWxlY3RcIlxuICB9LCBbX2MoJ3NlbGVjdCcsIFtfYygnb3B0aW9uJywgW192bS5fdihcIiRcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ29wdGlvbicsIFtfdm0uX3YoXCLCo1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnb3B0aW9uJywgW192bS5fdihcIuKCrFwiKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2lucHV0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJQdWxsIHJpZ2h0XCJcbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtc3VjY2Vzc1wiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIFRyYW5zZmVyXFxuICAgICAgICAgICAgXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sIGlzLWdyb3VwZWRcIlxuICB9LCBbX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbCBpcy1leHBhbmRlZFwiXG4gIH0sIFtfYygnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkV4cGFuZGVkIGFuZCBHcm91cGVkXCJcbiAgICB9XG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLWluZm9cIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFNlYXJjaFxcbiAgICAgICAgICAgICAgXCIpXSldKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtcGFyZW50XCJcbiAgfSwgW19jKCdhcnRpY2xlJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRpbGUgaXMtY2hpbGQgYm94XCJcbiAgfSwgW19jKCdoMScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0aXRsZVwiXG4gIH0sIFtfdm0uX3YoXCJIb3Jpem9udGFsIGZvcm1cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibG9ja1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaXMtaG9yaXpvbnRhbFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWxcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIkZyb21cIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaXMtZ3JvdXBlZFwiXG4gIH0sIFtfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sIGlzLWV4cGFuZGVkXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiTmFtZVwiXG4gICAgfVxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sIGlzLWV4cGFuZGVkXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJlbWFpbFwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkVtYWlsXCJcbiAgICB9XG4gIH0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaXMtaG9yaXpvbnRhbFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWxcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlN1YmplY3RcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzZWxlY3QgaXMtZnVsbHdpZHRoXCJcbiAgfSwgW19jKCdzZWxlY3QnLCBbX2MoJ29wdGlvbicsIFtfdm0uX3YoXCJHZW5lcmFsIGVucXVpcnlcIildKV0pXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaXMtaG9yaXpvbnRhbFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2wtbGFiZWxcIlxuICB9LCBbX2MoJ2xhYmVsJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsXCJcbiAgfSwgW192bS5fdihcIlF1ZXN0aW9uXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCJcbiAgfSwgW19jKCd0ZXh0YXJlYScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0YXJlYVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiRXhwbGFpbiBob3cgd2UgY2FuIGhlbHAgeW91XCJcbiAgICB9XG4gIH0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sIGlzLWhvcml6b250YWxcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250cm9sLWxhYmVsXCJcbiAgfSwgW19jKCdsYWJlbCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYWJlbFwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiXG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1wcmltYXJ5XCJcbiAgfSwgW192bS5fdihcIlN1Ym1pdFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1saW5rXCJcbiAgfSwgW192bS5fdihcIkNhbmNlbFwiKV0pXSldKV0pXSldKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtNmU4ODgzZmZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02ZTg4ODNmZlwifSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2J1aWxkcy9qcy92aWV3cy91aS9Gb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gOSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02ZTg4ODNmZlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Zvcm0udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJiZTRmOTJhOFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi02ZTg4ODNmZlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Zvcm0udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcImlkXFxcIjpcXFwiZGF0YS12LTZlODg4M2ZmXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRm9ybS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTZlODg4M2ZmXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9+L3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYnVpbGRzL2pzL3ZpZXdzL3VpL0Zvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSA3OTFcbi8vIG1vZHVsZSBjaHVua3MgPSA5Il0sInNvdXJjZVJvb3QiOiIifQ==
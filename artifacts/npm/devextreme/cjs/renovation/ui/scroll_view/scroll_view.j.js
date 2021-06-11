/**
* DevExtreme (cjs/renovation/ui/scroll_view/scroll_view.j.js)
* Version: 21.1.3
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.default = void 0;

var _component_registrator = _interopRequireDefault(require("../../../core/component_registrator"));

var _component = _interopRequireDefault(require("../../component_wrapper/component"));

var _scroll_view = require("./scroll_view");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ScrollView = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(ScrollView, _BaseComponent);

  function ScrollView() {
    return _BaseComponent.apply(this, arguments) || this;
  }

  var _proto = ScrollView.prototype;

  _proto.update = function update() {
    var _this$viewRef;

    return (_this$viewRef = this.viewRef) === null || _this$viewRef === void 0 ? void 0 : _this$viewRef.update();
  };

  _proto.release = function release() {
    var _this$viewRef2;

    return (_this$viewRef2 = this.viewRef) === null || _this$viewRef2 === void 0 ? void 0 : _this$viewRef2.release();
  };

  _proto.refresh = function refresh() {
    var _this$viewRef3;

    return (_this$viewRef3 = this.viewRef) === null || _this$viewRef3 === void 0 ? void 0 : _this$viewRef3.refresh();
  };

  _proto.content = function content() {
    var _this$viewRef4;

    return this._toPublicElement((_this$viewRef4 = this.viewRef) === null || _this$viewRef4 === void 0 ? void 0 : _this$viewRef4.content());
  };

  _proto.scrollBy = function scrollBy(distance) {
    var _this$viewRef5;

    return (_this$viewRef5 = this.viewRef) === null || _this$viewRef5 === void 0 ? void 0 : _this$viewRef5.scrollBy(distance);
  };

  _proto.scrollTo = function scrollTo(targetLocation) {
    var _this$viewRef6;

    return (_this$viewRef6 = this.viewRef) === null || _this$viewRef6 === void 0 ? void 0 : _this$viewRef6.scrollTo(targetLocation);
  };

  _proto.scrollToElement = function scrollToElement(element) {
    var _this$viewRef7;

    return (_this$viewRef7 = this.viewRef) === null || _this$viewRef7 === void 0 ? void 0 : _this$viewRef7.scrollToElement(this._patchElementParam(element));
  };

  _proto.scrollHeight = function scrollHeight() {
    var _this$viewRef8;

    return (_this$viewRef8 = this.viewRef) === null || _this$viewRef8 === void 0 ? void 0 : _this$viewRef8.scrollHeight();
  };

  _proto.scrollWidth = function scrollWidth() {
    var _this$viewRef9;

    return (_this$viewRef9 = this.viewRef) === null || _this$viewRef9 === void 0 ? void 0 : _this$viewRef9.scrollWidth();
  };

  _proto.scrollOffset = function scrollOffset() {
    var _this$viewRef10;

    return (_this$viewRef10 = this.viewRef) === null || _this$viewRef10 === void 0 ? void 0 : _this$viewRef10.scrollOffset();
  };

  _proto.scrollTop = function scrollTop() {
    var _this$viewRef11;

    return (_this$viewRef11 = this.viewRef) === null || _this$viewRef11 === void 0 ? void 0 : _this$viewRef11.scrollTop();
  };

  _proto.scrollLeft = function scrollLeft() {
    var _this$viewRef12;

    return (_this$viewRef12 = this.viewRef) === null || _this$viewRef12 === void 0 ? void 0 : _this$viewRef12.scrollLeft();
  };

  _proto.clientHeight = function clientHeight() {
    var _this$viewRef13;

    return (_this$viewRef13 = this.viewRef) === null || _this$viewRef13 === void 0 ? void 0 : _this$viewRef13.clientHeight();
  };

  _proto.clientWidth = function clientWidth() {
    var _this$viewRef14;

    return (_this$viewRef14 = this.viewRef) === null || _this$viewRef14 === void 0 ? void 0 : _this$viewRef14.clientWidth();
  };

  _proto._getActionConfigs = function _getActionConfigs() {
    return {
      onScroll: {},
      onUpdated: {},
      onPullDown: {},
      onReachBottom: {},
      onStart: {},
      onEnd: {},
      onBounce: {},
      onStop: {}
    };
  };

  _createClass(ScrollView, [{
    key: "_propsInfo",
    get: function get() {
      return {
        twoWay: [],
        allowNull: [],
        elements: [],
        templates: [],
        props: ["useNative", "direction", "showScrollbar", "bounceEnabled", "scrollByContent", "scrollByThumb", "updateManually", "classes", "pullDownEnabled", "reachBottomEnabled", "onScroll", "onUpdated", "onPullDown", "onReachBottom", "pullingDownText", "pulledDownText", "refreshingText", "reachBottomText", "aria", "disabled", "height", "rtlEnabled", "visible", "width", "useSimulatedScrollbar", "inertiaEnabled", "useKeyboard", "onStart", "onEnd", "onBounce", "onStop"]
      };
    }
  }, {
    key: "_viewComponent",
    get: function get() {
      return _scroll_view.ScrollView;
    }
  }]);

  return ScrollView;
}(_component.default);

exports.default = ScrollView;
(0, _component_registrator.default)("dxScrollView", ScrollView);
module.exports = exports.default;
module.exports.default = exports.default;

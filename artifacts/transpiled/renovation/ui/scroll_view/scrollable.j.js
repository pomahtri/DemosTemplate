"use strict";

exports.default = void 0;

var _component_registrator = _interopRequireDefault(require("../../../core/component_registrator"));

var _scrollable = require("../../component_wrapper/scrollable");

var _scrollable2 = require("./scrollable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Scrollable = /*#__PURE__*/function (_ScrollableWrapper) {
  _inheritsLoose(Scrollable, _ScrollableWrapper);

  function Scrollable() {
    return _ScrollableWrapper.apply(this, arguments) || this;
  }

  var _proto = Scrollable.prototype;

  _proto.content = function content() {
    var _this$viewRef;

    return this._toPublicElement((_this$viewRef = this.viewRef) === null || _this$viewRef === void 0 ? void 0 : _this$viewRef.content.apply(_this$viewRef, arguments));
  };

  _proto.scrollBy = function scrollBy(distance) {
    var _this$viewRef2;

    return (_this$viewRef2 = this.viewRef) === null || _this$viewRef2 === void 0 ? void 0 : _this$viewRef2.scrollBy.apply(_this$viewRef2, arguments);
  };

  _proto.update = function update() {
    var _this$viewRef3;

    return (_this$viewRef3 = this.viewRef) === null || _this$viewRef3 === void 0 ? void 0 : _this$viewRef3.update.apply(_this$viewRef3, arguments);
  };

  _proto.release = function release() {
    var _this$viewRef4;

    return (_this$viewRef4 = this.viewRef) === null || _this$viewRef4 === void 0 ? void 0 : _this$viewRef4.release.apply(_this$viewRef4, arguments);
  };

  _proto.refresh = function refresh() {
    var _this$viewRef5;

    return (_this$viewRef5 = this.viewRef) === null || _this$viewRef5 === void 0 ? void 0 : _this$viewRef5.refresh.apply(_this$viewRef5, arguments);
  };

  _proto.scrollTo = function scrollTo(targetLocation) {
    var _this$viewRef6;

    return (_this$viewRef6 = this.viewRef) === null || _this$viewRef6 === void 0 ? void 0 : _this$viewRef6.scrollTo.apply(_this$viewRef6, arguments);
  };

  _proto.scrollToElement = function scrollToElement(element) {
    var _this$viewRef7;

    var params = [this._patchElementParam(element)];
    return (_this$viewRef7 = this.viewRef) === null || _this$viewRef7 === void 0 ? void 0 : _this$viewRef7.scrollToElement.apply(_this$viewRef7, _toConsumableArray(params.slice(0, arguments.length)));
  };

  _proto.scrollHeight = function scrollHeight() {
    var _this$viewRef8;

    return (_this$viewRef8 = this.viewRef) === null || _this$viewRef8 === void 0 ? void 0 : _this$viewRef8.scrollHeight.apply(_this$viewRef8, arguments);
  };

  _proto.scrollWidth = function scrollWidth() {
    var _this$viewRef9;

    return (_this$viewRef9 = this.viewRef) === null || _this$viewRef9 === void 0 ? void 0 : _this$viewRef9.scrollWidth.apply(_this$viewRef9, arguments);
  };

  _proto.scrollOffset = function scrollOffset() {
    var _this$viewRef10;

    return (_this$viewRef10 = this.viewRef) === null || _this$viewRef10 === void 0 ? void 0 : _this$viewRef10.scrollOffset.apply(_this$viewRef10, arguments);
  };

  _proto.scrollTop = function scrollTop() {
    var _this$viewRef11;

    return (_this$viewRef11 = this.viewRef) === null || _this$viewRef11 === void 0 ? void 0 : _this$viewRef11.scrollTop.apply(_this$viewRef11, arguments);
  };

  _proto.scrollLeft = function scrollLeft() {
    var _this$viewRef12;

    return (_this$viewRef12 = this.viewRef) === null || _this$viewRef12 === void 0 ? void 0 : _this$viewRef12.scrollLeft.apply(_this$viewRef12, arguments);
  };

  _proto.clientHeight = function clientHeight() {
    var _this$viewRef13;

    return (_this$viewRef13 = this.viewRef) === null || _this$viewRef13 === void 0 ? void 0 : _this$viewRef13.clientHeight.apply(_this$viewRef13, arguments);
  };

  _proto.clientWidth = function clientWidth() {
    var _this$viewRef14;

    return (_this$viewRef14 = this.viewRef) === null || _this$viewRef14 === void 0 ? void 0 : _this$viewRef14.clientWidth.apply(_this$viewRef14, arguments);
  };

  _proto.getScrollElementPosition = function getScrollElementPosition(element, direction) {
    var _this$viewRef15;

    var params = [this._patchElementParam(element), direction];
    return (_this$viewRef15 = this.viewRef) === null || _this$viewRef15 === void 0 ? void 0 : _this$viewRef15.getScrollElementPosition.apply(_this$viewRef15, _toConsumableArray(params.slice(0, arguments.length)));
  };

  _proto.scrollToElementTopLeft = function scrollToElementTopLeft(element) {
    var _this$viewRef16;

    var params = [this._patchElementParam(element)];
    return (_this$viewRef16 = this.viewRef) === null || _this$viewRef16 === void 0 ? void 0 : _this$viewRef16.scrollToElementTopLeft.apply(_this$viewRef16, _toConsumableArray(params.slice(0, arguments.length)));
  };

  _proto._getActionConfigs = function _getActionConfigs() {
    return {
      onScroll: {},
      onUpdated: {},
      onPullDown: {},
      onReachBottom: {},
      onStart: {},
      onEnd: {},
      onBounce: {}
    };
  };

  _createClass(Scrollable, [{
    key: "_propsInfo",
    get: function get() {
      return {
        twoWay: [],
        allowNull: [],
        elements: [],
        templates: [],
        props: ["useNative", "direction", "showScrollbar", "bounceEnabled", "scrollByContent", "scrollByThumb", "classes", "pullDownEnabled", "reachBottomEnabled", "forceGeneratePockets", "needScrollViewContentWrapper", "needScrollViewLoadPanel", "onScroll", "onUpdated", "onPullDown", "onReachBottom", "useSimulatedScrollbar", "pullingDownText", "pulledDownText", "refreshingText", "reachBottomText", "aria", "disabled", "height", "rtlEnabled", "visible", "width", "inertiaEnabled", "useKeyboard", "onStart", "onEnd", "onBounce"]
      };
    }
  }, {
    key: "_viewComponent",
    get: function get() {
      return _scrollable2.Scrollable;
    }
  }]);

  return Scrollable;
}(_scrollable.ScrollableWrapper);

exports.default = Scrollable;
(0, _component_registrator.default)("dxScrollable", Scrollable);
Scrollable.defaultOptions = _scrollable2.defaultOptions;
module.exports = exports.default;
module.exports.default = exports.default;
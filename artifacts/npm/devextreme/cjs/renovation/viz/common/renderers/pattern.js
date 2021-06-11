/**
* DevExtreme (cjs/renovation/viz/common/renderers/pattern.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.SvgPattern = exports.SvgPatternProps = exports.viewFunction = void 0;

var _inferno = require("inferno");

var _vdom = require("@devextreme/vdom");

var _svg_rect = require("./svg_rect");

var _svg_path = require("./svg_path");

var _utils = require("../../../../viz/core/utils");

var _excluded = ["color", "hatching", "id"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var viewFunction = function viewFunction(_ref) {
  var d = _ref.d,
      _ref$props = _ref.props,
      color = _ref$props.color,
      hatching = _ref$props.hatching,
      id = _ref$props.id,
      step = _ref.step;
  return (0, _inferno.createVNode)(32, "pattern", null, [(0, _inferno.createComponentVNode)(2, _svg_rect.RectSvgElement, {
    "x": 0,
    "y": 0,
    "width": step,
    "height": step,
    "fill": color,
    "opacity": hatching === null || hatching === void 0 ? void 0 : hatching.opacity
  }), (0, _inferno.createComponentVNode)(2, _svg_path.PathSvgElement, {
    "d": d,
    "strokeWidth": Number(hatching === null || hatching === void 0 ? void 0 : hatching.width) || 1,
    "stroke": color
  })], 4, {
    "id": id,
    "width": step,
    "height": step,
    "patternUnits": "userSpaceOnUse"
  });
};

exports.viewFunction = viewFunction;
var SvgPatternProps = {
  color: ""
};
exports.SvgPatternProps = SvgPatternProps;

var SvgPattern = /*#__PURE__*/function (_BaseInfernoComponent) {
  _inheritsLoose(SvgPattern, _BaseInfernoComponent);

  function SvgPattern(props) {
    var _this;

    _this = _BaseInfernoComponent.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = SvgPattern.prototype;

  _proto.render = function render() {
    var props = this.props;
    return viewFunction({
      props: _extends({}, props),
      step: this.step,
      d: this.d,
      restAttributes: this.restAttributes
    });
  };

  _createClass(SvgPattern, [{
    key: "step",
    get: function get() {
      var _this$props$hatching;

      return Number((_this$props$hatching = this.props.hatching) === null || _this$props$hatching === void 0 ? void 0 : _this$props$hatching.step) || 6;
    }
  }, {
    key: "d",
    get: function get() {
      var _this$props$hatching2;

      var stepTo2 = this.step / 2;
      var stepBy15 = this.step * 1.5;
      return (0, _utils.normalizeEnum)((_this$props$hatching2 = this.props.hatching) === null || _this$props$hatching2 === void 0 ? void 0 : _this$props$hatching2.direction) === "right" ? "M ".concat(stepTo2, " ").concat(-stepTo2, " L ").concat(-stepTo2, " ").concat(stepTo2, " M 0 ").concat(this.step, " L ").concat(this.step, " 0 M ").concat(stepBy15, " ").concat(stepTo2, " L ").concat(stepTo2, " ").concat(stepBy15) : "M 0 0 L ".concat(this.step, " ").concat(this.step, " M ").concat(-stepTo2, " ").concat(stepTo2, " L ").concat(stepTo2, " ").concat(stepBy15, " M ").concat(stepTo2, " ").concat(-stepTo2, " L ").concat(stepBy15, " ").concat(stepTo2);
    }
  }, {
    key: "restAttributes",
    get: function get() {
      var _this$props = this.props,
          color = _this$props.color,
          hatching = _this$props.hatching,
          id = _this$props.id,
          restProps = _objectWithoutProperties(_this$props, _excluded);

      return restProps;
    }
  }]);

  return SvgPattern;
}(_vdom.BaseInfernoComponent);

exports.SvgPattern = SvgPattern;
SvgPattern.defaultProps = _extends({}, SvgPatternProps);

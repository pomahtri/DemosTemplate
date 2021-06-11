/**
* DevExtreme (cjs/core/utils/support.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

Object.defineProperty(exports, "stylePropPrefix", {
  enumerable: true,
  get: function get() {
    return _style.stylePropPrefix;
  }
});
Object.defineProperty(exports, "styleProp", {
  enumerable: true,
  get: function get() {
    return _style.styleProp;
  }
});
exports.nativeScrolling = exports.animation = exports.transitionEndEventName = exports.transition = exports.touch = exports.inputType = exports.supportProp = exports.pointerEvents = exports.touchEvents = void 0;

var _array = require("./array");

var _dom_adapter = _interopRequireDefault(require("../dom_adapter"));

var _common = require("./common");

var _call_once = _interopRequireDefault(require("./call_once"));

var _window = require("./window");

var _devices = _interopRequireDefault(require("../devices"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _getNavigator = (0, _window.getNavigator)(),
    maxTouchPoints = _getNavigator.maxTouchPoints,
    msMaxTouchPoints = _getNavigator.msMaxTouchPoints,
    pointerEnabled = _getNavigator.pointerEnabled;

var transitionEndEventNames = {
  'webkitTransition': 'webkitTransitionEnd',
  'MozTransition': 'transitionend',
  'OTransition': 'oTransitionEnd',
  'msTransition': 'MsTransitionEnd',
  'transition': 'transitionend'
};

var supportProp = function supportProp(prop) {
  return !!(0, _style.styleProp)(prop);
};

exports.supportProp = supportProp;

var isNativeScrollingSupported = function isNativeScrollingSupported() {
  var _devices$real = _devices.default.real(),
      platform = _devices$real.platform,
      version = _devices$real.version,
      isMac = _devices$real.mac;

  var isObsoleteAndroid = version && version[0] < 4 && platform === 'android';
  var isNativeScrollDevice = !isObsoleteAndroid && (0, _array.inArray)(platform, ['ios', 'android']) > -1 || isMac;
  return isNativeScrollDevice;
};

var inputType = function inputType(type) {
  if (type === 'text') {
    return true;
  }

  var input = _dom_adapter.default.createElement('input');

  try {
    input.setAttribute('type', type);
    input.value = 'wrongValue';
    return !input.value;
  } catch (e) {
    return false;
  }
};

exports.inputType = inputType;

var detectTouchEvents = function detectTouchEvents(hasWindowProperty, maxTouchPoints) {
  return (hasWindowProperty('ontouchstart') || !!maxTouchPoints) && !hasWindowProperty('callPhantom');
};

var detectPointerEvent = function detectPointerEvent(hasWindowProperty, pointerEnabled) {
  // TODO: remove the check of the 'pointerEnabled' when we drop IE support
  var isPointerEnabled = (0, _common.ensureDefined)(pointerEnabled, true);
  var canUsePointerEvent = (0, _common.ensureDefined)(pointerEnabled, false);
  return hasWindowProperty('PointerEvent') && isPointerEnabled || canUsePointerEvent;
};

var touchEvents = detectTouchEvents(_window.hasProperty, maxTouchPoints);
exports.touchEvents = touchEvents;
var pointerEvents = detectPointerEvent(_window.hasProperty, pointerEnabled);
exports.pointerEvents = pointerEvents;
var touchPointersPresent = !!maxTouchPoints || !!msMaxTouchPoints;
var touch = touchEvents || pointerEvents && touchPointersPresent;
exports.touch = touch;
var transition = (0, _call_once.default)(function () {
  return supportProp('transition');
});
exports.transition = transition;
var transitionEndEventName = (0, _call_once.default)(function () {
  return transitionEndEventNames[(0, _style.styleProp)('transition')];
});
exports.transitionEndEventName = transitionEndEventName;
var animation = (0, _call_once.default)(function () {
  return supportProp('animation');
});
exports.animation = animation;
var nativeScrolling = isNativeScrollingSupported();
exports.nativeScrolling = nativeScrolling;

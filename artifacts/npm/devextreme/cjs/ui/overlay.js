/**
* DevExtreme (cjs/ui/overlay.js)
* Version: 21.1.3
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

Object.defineProperty(exports, "Overlay", {
  enumerable: true,
  get: function get() {
    return _ui.default;
  }
});
exports.baseZIndex = void 0;

var _ui = _interopRequireDefault(require("./overlay/ui.overlay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseZIndex = _ui.default.baseZIndex;
exports.baseZIndex = baseZIndex;

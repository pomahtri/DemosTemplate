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
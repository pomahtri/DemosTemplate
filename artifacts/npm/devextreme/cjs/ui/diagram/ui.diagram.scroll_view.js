/**
* DevExtreme (cjs/ui/diagram/ui.diagram.scroll_view.js)
* Version: 21.1.3
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.default = void 0;

var _renderer = _interopRequireDefault(require("../../core/renderer"));

var _ui = _interopRequireDefault(require("../widget/ui.widget"));

var _scroll_view = _interopRequireDefault(require("../scroll_view"));

var _diagram = require("./diagram.importer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DiagramScrollView = /*#__PURE__*/function (_Widget) {
  _inheritsLoose(DiagramScrollView, _Widget);

  function DiagramScrollView() {
    return _Widget.apply(this, arguments) || this;
  }

  var _proto = DiagramScrollView.prototype;

  _proto._init = function _init() {
    _Widget.prototype._init.call(this);

    var _getDiagram = (0, _diagram.getDiagram)(),
        EventDispatcher = _getDiagram.EventDispatcher;

    this.onScroll = new EventDispatcher();

    this._createOnCreateDiagramAction();
  };

  _proto._initMarkup = function _initMarkup() {
    var _this = this;

    _Widget.prototype._initMarkup.call(this);

    var $scrollViewWrapper = (0, _renderer.default)('<div>').appendTo(this.$element());
    this._scrollView = this._createComponent($scrollViewWrapper, _scroll_view.default, {
      direction: 'both',
      bounceEnabled: false,
      onScroll: function onScroll(_ref) {
        var scrollOffset = _ref.scrollOffset;

        _this._raiseOnScroll(scrollOffset.left, scrollOffset.top);
      }
    });

    this._onCreateDiagramAction({
      $parent: (0, _renderer.default)(this._scrollView.content()),
      scrollView: this
    });
  };

  _proto.setScroll = function setScroll(left, top) {
    this._scrollView.scrollTo({
      left: left,
      top: top
    });

    this._raiseOnScrollWithoutPoint();
  };

  _proto.offsetScroll = function offsetScroll(left, top) {
    this._scrollView.scrollBy({
      left: left,
      top: top
    });

    this._raiseOnScrollWithoutPoint();
  };

  _proto.getSize = function getSize() {
    var _getDiagram2 = (0, _diagram.getDiagram)(),
        Size = _getDiagram2.Size;

    var $element = this._scrollView.$element();

    return new Size(Math.floor($element.width()), Math.floor($element.height()));
  };

  _proto.getScrollContainer = function getScrollContainer() {
    return this._scrollView.$element()[0];
  };

  _proto.getScrollBarWidth = function getScrollBarWidth() {
    return 0;
  };

  _proto.detachEvents = function detachEvents() {};

  _proto._raiseOnScroll = function _raiseOnScroll(left, top) {
    var _getDiagram3 = (0, _diagram.getDiagram)(),
        Point = _getDiagram3.Point;

    this.onScroll.raise('notifyScrollChanged', function () {
      return new Point(left, top);
    });
  };

  _proto._raiseOnScrollWithoutPoint = function _raiseOnScrollWithoutPoint() {
    var _this2 = this;

    var _getDiagram4 = (0, _diagram.getDiagram)(),
        Point = _getDiagram4.Point;

    this.onScroll.raise('notifyScrollChanged', function () {
      return new Point(_this2._scrollView.scrollLeft(), _this2._scrollView.scrollTop());
    });
  };

  _proto._createOnCreateDiagramAction = function _createOnCreateDiagramAction() {
    this._onCreateDiagramAction = this._createActionByOption('onCreateDiagram');
  };

  _proto._optionChanged = function _optionChanged(args) {
    switch (args.name) {
      case 'onCreateDiagram':
        this._createOnCreateDiagramAction();

        break;

      default:
        _Widget.prototype._optionChanged.call(this, args);

    }
  };

  return DiagramScrollView;
}(_ui.default);

var _default = DiagramScrollView;
exports.default = _default;
module.exports = exports.default;
module.exports.default = exports.default;

"use strict";

exports.default = void 0;

var _validation_engine = _interopRequireDefault(require("../../ui/validation_engine"));

var _component = _interopRequireDefault(require("./common/component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ButtonWrapper = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ButtonWrapper, _Component);

  function ButtonWrapper() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ButtonWrapper.prototype;

  _proto._init = function _init() {
    var _this = this;

    _Component.prototype._init.call(this);

    this.defaultKeyHandlers = {
      enter: function enter(e, opts) {
        return _this.viewRef.onWidgetKeyDown(opts);
      },
      space: function space(e, opts) {
        return _this.viewRef.onWidgetKeyDown(opts);
      }
    };

    this._addAction("onSubmit", this._getSubmitAction());
  };

  _proto._initMarkup = function _initMarkup() {
    _Component.prototype._initMarkup.call(this);

    var $content = this.$element().find(".dx-button-content");
    var $template = $content.children().filter(".dx-template-wrapper");

    if ($template.length) {
      $template.addClass("dx-button-content");
      $content.replaceWith($template);
    }
  };

  _proto.getProps = function getProps() {
    var props = _Component.prototype.getProps.call(this);

    props.validationGroup = this._validationGroupConfig;
    return props;
  };

  _proto.getDefaultTemplateNames = function getDefaultTemplateNames() {
    return ["content"];
  };

  _proto._patchOptionValues = function _patchOptionValues(options) {
    options.templateData = options._templateData;
    return _Component.prototype._patchOptionValues.call(this, options);
  };

  _proto._getSubmitAction = function _getSubmitAction() {
    var _this2 = this;

    var needValidate = true;
    var validationStatus = "valid";
    return this._createAction(function (_ref) {
      var event = _ref.event,
          submitInput = _ref.submitInput;

      if (needValidate) {
        var validationGroup = _this2._validationGroupConfig;

        if (validationGroup) {
          var _validationGroup$vali = validationGroup.validate(),
              complete = _validationGroup$vali.complete,
              status = _validationGroup$vali.status;

          validationStatus = status;

          if (status === "pending") {
            needValidate = false;

            _this2.option("disabled", true);

            complete.then(function (_ref2) {
              var status = _ref2.status;
              needValidate = true;

              _this2.option("disabled", false);

              validationStatus = status;
              validationStatus === "valid" && submitInput.click();
            });
          }
        }
      }

      validationStatus !== "valid" && event.preventDefault();
      event.stopPropagation();
    });
  };

  _proto._findGroup = function _findGroup() {
    var $element = this.$element();
    return this.option("validationGroup") || _validation_engine.default.findGroup($element, this._modelByElement($element));
  };

  _createClass(ButtonWrapper, [{
    key: "_validationGroupConfig",
    get: function get() {
      return _validation_engine.default.getGroupConfig(this._findGroup());
    }
  }]);

  return ButtonWrapper;
}(_component.default);

exports.default = ButtonWrapper;
module.exports = exports.default;
module.exports.default = exports.default;
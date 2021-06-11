/**
* DevExtreme (cjs/renovation/component_wrapper/data_grid.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.default = void 0;

var _component = _interopRequireDefault(require("./common/component"));

var _uiData_grid = _interopRequireDefault(require("../../ui/data_grid/ui.data_grid.core"));

var _update_props_immutable = require("./utils/update_props_immutable");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DataGridWrapper = /*#__PURE__*/function (_Component) {
  _inheritsLoose(DataGridWrapper, _Component);

  function DataGridWrapper() {
    var _this;

    _this = _Component.apply(this, arguments) || this;
    _this._skipInvalidate = false;
    return _this;
  }

  var _proto = DataGridWrapper.prototype;

  _proto.state = function state(_state) {
    var internalInstance = this._getInternalInstance();

    if (internalInstance) {
      if (_state === undefined) {
        return internalInstance.state();
      }

      internalInstance.state(_state);
    }

    return undefined;
  };

  _proto.getController = function getController(name) {
    var _this$_getInternalIns;

    return (_this$_getInternalIns = this._getInternalInstance()) === null || _this$_getInternalIns === void 0 ? void 0 : _this$_getInternalIns.getController(name);
  };

  _proto.getView = function getView(name) {
    var _this$_getInternalIns2;

    return (_this$_getInternalIns2 = this._getInternalInstance()) === null || _this$_getInternalIns2 === void 0 ? void 0 : _this$_getInternalIns2.getView(name);
  };

  _proto.beginUpdate = function beginUpdate() {
    var _this$_getInternalIns3;

    _Component.prototype.beginUpdate.call(this);

    (_this$_getInternalIns3 = this._getInternalInstance()) === null || _this$_getInternalIns3 === void 0 ? void 0 : _this$_getInternalIns3.beginUpdate();
  };

  _proto.endUpdate = function endUpdate() {
    var _this$_getInternalIns4;

    _Component.prototype.endUpdate.call(this);

    (_this$_getInternalIns4 = this._getInternalInstance()) === null || _this$_getInternalIns4 === void 0 ? void 0 : _this$_getInternalIns4.endUpdate();
  };

  _proto.isReady = function isReady() {
    var _this$_getInternalIns5;

    return (_this$_getInternalIns5 = this._getInternalInstance()) === null || _this$_getInternalIns5 === void 0 ? void 0 : _this$_getInternalIns5.isReady();
  };

  _proto._getInternalInstance = function _getInternalInstance() {
    var _this$viewRef;

    return (_this$viewRef = this.viewRef) === null || _this$viewRef === void 0 ? void 0 : _this$viewRef.getComponentInstance();
  };

  _proto._fireContentReady = function _fireContentReady() {};

  _proto._wrapKeyDownHandler = function _wrapKeyDownHandler(handler) {
    return handler;
  };

  _proto._optionChanging = function _optionChanging(fullName, prevValue, value) {
    _Component.prototype._optionChanging.call(this, fullName, prevValue, value);

    if (this.viewRef && prevValue !== value) {
      var name = fullName.split(/[.[]/)[0];

      var prevProps = _extends({}, this.viewRef.prevProps);

      (0, _update_props_immutable.updatePropsImmutable)(prevProps, this.option(), name, fullName);
      this.viewRef.prevProps = prevProps;
    }
  };

  _proto._optionChanged = function _optionChanged(e) {
    var _this$viewRef2, _this$viewRef2$getCom;

    var gridInstance = (_this$viewRef2 = this.viewRef) === null || _this$viewRef2 === void 0 ? void 0 : (_this$viewRef2$getCom = _this$viewRef2.getComponentInstance) === null || _this$viewRef2$getCom === void 0 ? void 0 : _this$viewRef2$getCom.call(_this$viewRef2);

    if (e.fullName === "dataSource" && e.value === (gridInstance === null || gridInstance === void 0 ? void 0 : gridInstance.option("dataSource"))) {
      gridInstance === null || gridInstance === void 0 ? void 0 : gridInstance.option("dataSource", e.value);
    }

    _Component.prototype._optionChanged.call(this, e);
  };

  _proto._createTemplateComponent = function _createTemplateComponent(templateOption) {
    return templateOption;
  };

  _proto._initializeComponent = function _initializeComponent() {
    var options = this.option();
    this._onInitialized = options.onInitialized;
    options.onInitialized = null;

    _Component.prototype._initializeComponent.call(this);
  };

  _proto._patchOptionValues = function _patchOptionValues(options) {
    options.onInitialized = this._onInitialized;
    return _Component.prototype._patchOptionValues.call(this, options);
  };

  _proto._renderWrapper = function _renderWrapper(props) {
    var isFirstRender = !this._isNodeReplaced;

    _Component.prototype._renderWrapper.call(this, props);

    if (isFirstRender) {
      this._getInternalInstance().on("optionChanged", this._internalOptionChangedHandler.bind(this));
    }
  };

  _proto._internalOptionChangedHandler = function _internalOptionChangedHandler(e) {
    var isSecondLevelOption = e.name !== e.fullName;

    if (isSecondLevelOption && e.value !== e.previousValue) {
      if (e.fullName.startsWith("columns[")) {
        if (this.option(e.fullName) !== e.value) {
          this._skipInvalidate = true;

          this._notifyOptionChanged(e.fullName, e.value, e.previousValue);

          this._skipInvalidate = false;
        }
      } else {
        this._skipInvalidate = true;

        this._options.silent(e.fullName, e.previousValue);

        this.option(e.fullName, e.value);
        this._skipInvalidate = false;
      }
    }
  };

  _proto._invalidate = function _invalidate() {
    if (this._skipInvalidate) return;

    _Component.prototype._invalidate.call(this);
  };

  _proto._setOptionsByReference = function _setOptionsByReference() {
    _Component.prototype._setOptionsByReference.call(this);

    this._optionsByReference["focusedRowKey"] = true;
    this._optionsByReference["editing.editRowKey"] = true;
    this._optionsByReference["editing.changes"] = true;
  };

  _proto._setDeprecatedOptions = function _setDeprecatedOptions() {
    _Component.prototype._setDeprecatedOptions.call(this);

    this._deprecatedOptions["useKeyboard"] = {
      since: "19.2",
      alias: "keyboardNavigation.enabled"
    };
  };

  _proto._getAdditionalProps = function _getAdditionalProps() {
    return _Component.prototype._getAdditionalProps.call(this).concat(["onInitialized", "onColumnsChanging", "integrationOptions", "adaptColumnWidthByRatio", "useLegacyKeyboardNavigation", "templatesRenderAsynchronously", "forceApplyBindings", "nestedComponentOptions"]);
  };

  return DataGridWrapper;
}(_component.default);

exports.default = DataGridWrapper;
DataGridWrapper.registerModule = _uiData_grid.default.registerModule.bind(_uiData_grid.default);
module.exports = exports.default;
module.exports.default = exports.default;

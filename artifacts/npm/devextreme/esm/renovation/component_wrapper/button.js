/**
* DevExtreme (esm/renovation/component_wrapper/button.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import ValidationEngine from "../../ui/validation_engine";
import Component from "./common/component";
export default class ButtonWrapper extends Component {
  _init() {
    super._init();

    this.defaultKeyHandlers = {
      enter: (e, opts) => this.viewRef.onWidgetKeyDown(opts),
      space: (e, opts) => this.viewRef.onWidgetKeyDown(opts)
    };

    this._addAction("onSubmit", this._getSubmitAction());
  }

  _initMarkup() {
    super._initMarkup();

    var $content = this.$element().find(".dx-button-content");
    var $template = $content.children().filter(".dx-template-wrapper");

    if ($template.length) {
      $template.addClass("dx-button-content");
      $content.replaceWith($template);
    }
  }

  getProps() {
    var props = super.getProps();
    props.validationGroup = this._validationGroupConfig;
    return props;
  }

  getDefaultTemplateNames() {
    return ["content"];
  }

  _patchOptionValues(options) {
    options.templateData = options._templateData;
    return super._patchOptionValues(options);
  }

  _getSubmitAction() {
    var needValidate = true;
    var validationStatus = "valid";
    return this._createAction(_ref => {
      var {
        event,
        submitInput
      } = _ref;

      if (needValidate) {
        var validationGroup = this._validationGroupConfig;

        if (validationGroup) {
          var {
            complete,
            status
          } = validationGroup.validate();
          validationStatus = status;

          if (status === "pending") {
            needValidate = false;
            this.option("disabled", true);
            complete.then(_ref2 => {
              var {
                status
              } = _ref2;
              needValidate = true;
              this.option("disabled", false);
              validationStatus = status;
              validationStatus === "valid" && submitInput.click();
            });
          }
        }
      }

      validationStatus !== "valid" && event.preventDefault();
      event.stopPropagation();
    });
  }

  get _validationGroupConfig() {
    return ValidationEngine.getGroupConfig(this._findGroup());
  }

  _findGroup() {
    var $element = this.$element();
    return this.option("validationGroup") || ValidationEngine.findGroup($element, this._modelByElement($element));
  }

}

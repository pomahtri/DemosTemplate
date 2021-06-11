/**
* DevExtreme (esm/ui/validation/default_adapter.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import Class from '../../core/class';
var DefaultAdapter = Class.inherit({
  ctor(editor, validator) {
    this.editor = editor;
    this.validator = validator;
    this.validationRequestsCallbacks = [];

    var handler = args => {
      this.validationRequestsCallbacks.forEach(item => item(args));
    };

    editor.validationRequest.add(handler);
    editor.on('disposing', function () {
      editor.validationRequest.remove(handler);
    });
  },

  getValue() {
    return this.editor.option('value');
  },

  getCurrentValidationError() {
    return this.editor.option('validationError');
  },

  bypass() {
    return this.editor.option('disabled');
  },

  applyValidationResults(params) {
    this.editor.option({
      validationErrors: params.brokenRules,
      validationStatus: params.status
    });
  },

  reset() {
    this.editor.reset();
  },

  focus() {
    this.editor.focus();
  }

});
export default DefaultAdapter;

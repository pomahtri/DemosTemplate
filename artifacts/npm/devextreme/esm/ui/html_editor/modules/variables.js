/**
* DevExtreme (esm/ui/html_editor/modules/variables.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import Quill from 'devextreme-quill';
import $ from '../../../core/renderer';
import { getBoundingRect } from '../../../core/utils/position';
import PopupModule from './popup';
import BaseModule from './base';
import Variable from '../formats/variable';
import { extend } from '../../../core/utils/extend';
var VariableModule = BaseModule;

if (Quill) {
  var VARIABLE_FORMAT_CLASS = 'dx-variable-format';
  var ACTIVE_FORMAT_CLASS = 'dx-format-active';
  Quill.register({
    'formats/variable': Variable
  }, true);
  VariableModule = class VariableModule extends PopupModule {
    _getDefaultOptions() {
      var baseConfig = super._getDefaultOptions();

      return extend(baseConfig, {
        escapeChar: ''
      });
    }

    constructor(quill, options) {
      super(quill, options);
      var toolbar = quill.getModule('toolbar');

      if (toolbar) {
        toolbar.addClickHandler('variable', this.showPopup.bind(this));
      }

      quill.keyboard.addBinding({
        key: 'P',
        altKey: true
      }, this.showPopup.bind(this));

      this._popup.on('shown', e => {
        var $ofElement = $(e.component.option('position').of);

        if ($ofElement.hasClass(VARIABLE_FORMAT_CLASS)) {
          $ofElement.addClass(ACTIVE_FORMAT_CLASS);
        }
      });
    }

    showPopup(event) {
      var selection = this.quill.getSelection(true);
      var position = selection ? selection.index : this.quill.getLength();
      this.savePosition(position);

      this._resetPopupPosition(event, position);

      super.showPopup();
    }

    _resetPopupPosition(event, position) {
      if (event && event.element) {
        this._popup.option('position', {
          of: event.element,
          offset: {
            h: 0,
            v: 0
          },
          my: 'top center',
          at: 'bottom center',
          collision: 'fit'
        });
      } else {
        var mentionBounds = this.quill.getBounds(position);
        var rootRect = getBoundingRect(this.quill.root);

        this._popup.option('position', {
          of: this.quill.root,
          offset: {
            h: mentionBounds.left,
            v: mentionBounds.bottom - rootRect.height
          },
          my: 'top center',
          at: 'bottom left',
          collision: 'fit flip'
        });
      }
    }

    insertEmbedContent(selectionChangedEvent) {
      var caretPosition = this.getPosition();
      var selectedItem = selectionChangedEvent.component.option('selectedItem');
      var variableData = extend({}, {
        value: selectedItem,
        escapeChar: this.options.escapeChar
      });
      setTimeout(function () {
        this.quill.insertEmbed(caretPosition, 'variable', variableData);
        this.quill.setSelection(caretPosition + 1);
      }.bind(this));
    }

  };
}

export default VariableModule;

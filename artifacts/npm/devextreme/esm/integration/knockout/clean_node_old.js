/**
* DevExtreme (esm/integration/knockout/clean_node_old.js)
* Version: 21.1.3
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
// eslint-disable-next-line no-restricted-imports
import ko from 'knockout';
import { compare as compareVersion } from '../../core/utils/version';
import { strategyChanging } from '../../core/element_data';

if (ko) {
  var patchCleanData = function patchCleanData(jQuery) {
    var cleanKoData = function cleanKoData(element, andSelf) {
      var cleanNode = function cleanNode() {
        ko.cleanNode(this);
      };

      if (andSelf) {
        element.each(cleanNode);
      } else {
        element.find('*').each(cleanNode);
      }
    };

    var originalEmpty = jQuery.fn.empty;

    jQuery.fn.empty = function () {
      cleanKoData(this, false);
      return originalEmpty.apply(this, arguments);
    };

    var originalRemove = jQuery.fn.remove;

    jQuery.fn.remove = function (selector, keepData) {
      if (!keepData) {
        var subject = this;

        if (selector) {
          subject = subject.filter(selector);
        }

        cleanKoData(subject, true);
      }

      return originalRemove.call(this, selector, keepData);
    };

    var originalHtml = jQuery.fn.html;

    jQuery.fn.html = function (value) {
      if (typeof value === 'string') {
        cleanKoData(this, false);
      }

      return originalHtml.apply(this, arguments);
    };

    var originalReplaceWith = jQuery.fn.replaceWith;

    jQuery.fn.replaceWith = function () {
      var result = originalReplaceWith.apply(this, arguments);

      if (!this.parent().length) {
        cleanKoData(this, true);
      }

      return result;
    };
  };

  strategyChanging.add(function (strategy) {
    var isJQuery = !!strategy.fn;

    if (isJQuery && compareVersion(strategy.fn.jquery, [2, 0]) < 0) {
      patchCleanData(strategy);
    }
  });
}

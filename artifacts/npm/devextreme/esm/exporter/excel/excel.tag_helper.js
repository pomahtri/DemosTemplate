/**
* DevExtreme (esm/exporter/excel/excel.tag_helper.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import { isDefined } from '../../core/utils/type';
var tagHelper = {
  toXml: function toXml(tagName, attributes, content) {
    var result = ['<', tagName];

    for (var attributeName in attributes) {
      var attributeValue = attributes[attributeName];

      if (isDefined(attributeValue)) {
        result.push(' ', attributeName, '="', attributeValue, '"');
      }
    }

    if (isDefined(content) && content !== '') {
      result.push('>', content, '</', tagName, '>');
    } else {
      result.push(' />');
    }

    return result.join('');
  }
};
export default tagHelper;

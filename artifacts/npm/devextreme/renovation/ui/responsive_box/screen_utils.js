/**
* DevExtreme (renovation/ui/responsive_box/screen_utils.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.convertToScreenSizeQualifier = void 0;

var convertToScreenSizeQualifier = function convertToScreenSizeQualifier(width) {
  if (width < 768) {
    return "xs";
  }

  if (width < 992) {
    return "sm";
  }

  if (width < 1200) {
    return "md";
  }

  return "lg";
};

exports.convertToScreenSizeQualifier = convertToScreenSizeQualifier;

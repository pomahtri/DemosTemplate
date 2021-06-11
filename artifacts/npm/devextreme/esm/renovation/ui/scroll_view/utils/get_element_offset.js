/**
* DevExtreme (esm/renovation/ui/scroll_view/utils/get_element_offset.js)
* Version: 21.1.3
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import { isWindow } from "../../../../core/utils/type";
export function getWindowByElement(element) {
  return isWindow(element) ? element : element.defaultView;
}
export function getElementOffset(element) {
  if (!element) return {
    left: 0,
    top: 0
  };

  if (!element.getClientRects().length) {
    return {
      top: 0,
      left: 0
    };
  }

  var rect = element.getBoundingClientRect();
  var window = getWindowByElement(element.ownerDocument);
  var docElem = element.ownerDocument.documentElement;
  return {
    top: rect.top + window.pageYOffset - docElem.clientTop,
    left: rect.left + window.pageXOffset - docElem.clientLeft
  };
}

/**
* DevExtreme (esm/renovation/ui/scroll_view/utils/get_element_style.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import getElementComputedStyle from "../../../utils/get_computed_style";
export function getElementStyle(name, element) {
  var computedStyle = getElementComputedStyle(element) || {};
  return computedStyle[name];
}

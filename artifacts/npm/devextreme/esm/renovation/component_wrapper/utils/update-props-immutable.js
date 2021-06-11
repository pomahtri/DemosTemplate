/**
* DevExtreme (esm/renovation/component_wrapper/utils/update-props-immutable.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import _extends from "@babel/runtime/helpers/esm/extends";
import { isPlainObject } from "../../../core/utils/type";
export function updatePropsImmutable(props, option, name, fullName) {
  var currentPropsValue = option[name];
  var result = props;

  if (name !== fullName) {
    if (Array.isArray(currentPropsValue)) {
      var matchIndex = /\[\s*(\d+)\s*\]/g.exec(fullName);

      if (matchIndex) {
        var newArray = [...currentPropsValue];
        var index = parseInt(matchIndex[1], 10);
        result[name] = newArray;

        if (isPlainObject(newArray[index])) {
          newArray[index] = _extends({}, currentPropsValue[index]);
        }
      }

      return;
    }
  }

  if (isPlainObject(currentPropsValue)) {
    result[name] = _extends({}, currentPropsValue);
  } else {
    result[name] = currentPropsValue;
  }
}

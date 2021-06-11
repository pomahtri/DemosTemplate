/**
* DevExtreme (cjs/renovation/ui/scheduler/view_model/views/common.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.getStartViewDate = exports.getFirstDayOfWeek = exports.getCurrentDate = void 0;

var _date = _interopRequireDefault(require("../../../../../core/utils/date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCurrentDate = function getCurrentDate(currentDate, startDate) {
  var validCurrentDate = startDate !== null && startDate !== void 0 ? startDate : currentDate;
  return _date.default.trimTime(validCurrentDate);
};

exports.getCurrentDate = getCurrentDate;

var getFirstDayOfWeek = function getFirstDayOfWeek(includedDays, firstDayOfWeek) {
  var isFirstDayOfWeekInIncludedDays = includedDays.includes(firstDayOfWeek);
  var sortedIncludedDays = includedDays.slice().sort();
  return isFirstDayOfWeekInIncludedDays ? firstDayOfWeek : sortedIncludedDays[0];
};

exports.getFirstDayOfWeek = getFirstDayOfWeek;

var getStartViewDate = function getStartViewDate(_startDayHour, _firstDayOfWeek, currentDate) {
  return currentDate;
};

exports.getStartViewDate = getStartViewDate;

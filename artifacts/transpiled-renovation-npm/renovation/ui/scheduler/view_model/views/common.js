"use strict";

exports.getStartViewDate = exports.getFirstDayOfWeek = exports.getCurrentDate = void 0;

var _date = _interopRequireDefault(require("../../../../../core/utils/date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCurrentDate = function getCurrentDate(currentDate, startDate) {
  var validCurrentDate = startDate || currentDate;
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
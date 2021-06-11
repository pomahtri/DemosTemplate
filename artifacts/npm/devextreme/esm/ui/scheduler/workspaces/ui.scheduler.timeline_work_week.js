/**
* DevExtreme (esm/ui/scheduler/workspaces/ui.scheduler.timeline_work_week.js)
* Version: 21.1.3
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import registerComponent from '../../../core/component_registrator';
import SchedulerTimelineWeek from './ui.scheduler.timeline_week';
import dateUtils from '../../../core/utils/date';
import workWeekUtils from './utils.work_week';
var toMs = dateUtils.dateToMilliseconds;
var TIMELINE_CLASS = 'dx-scheduler-timeline-work-week';
var LAST_DAY_WEEK_INDEX = 5;

class SchedulerTimelineWorkWeek extends SchedulerTimelineWeek {
  constructor() {
    super(...arguments);
    this._getWeekendsCount = workWeekUtils.getWeekendsCount;
    this._isSkippedData = workWeekUtils.isDataOnWeekend;
  }

  _getElementClass() {
    return TIMELINE_CLASS;
  }

  _getWeekDuration() {
    return 5;
  }

  _firstDayOfWeek() {
    return workWeekUtils.getFirstDayOfWeek(this.option('firstDayOfWeek'));
  }

  _isSkippedData() {
    return workWeekUtils.isDataOnWeekend;
  }

  _incrementDate(date) {
    var day = date.getDay();

    if (day === LAST_DAY_WEEK_INDEX) {
      date.setDate(date.getDate() + 2);
    }

    super._incrementDate(date);
  }

  _getOffsetByCount(cellIndex) {
    var weekendCount = Math.floor(cellIndex / (5 * this._getCellCountInDay()));
    return toMs('day') * weekendCount * 2;
  }

  _setFirstViewDate() {
    this._firstViewDate = workWeekUtils.getFirstViewDate(this.option('currentDate'), this._firstDayOfWeek());

    this._setStartDayHour(this._firstViewDate);
  }

}

registerComponent('dxSchedulerTimelineWorkWeek', SchedulerTimelineWorkWeek);
export default SchedulerTimelineWorkWeek;

/**
* DevExtreme (esm/ui/scheduler/workspaces/ui.scheduler.work_space_vertical.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import SchedulerWorkSpaceIndicator from './ui.scheduler.work_space.indicator';
import dateLocalization from '../../../localization/date';
import timeZoneUtils from '../utils.timeZone';

class SchedulerWorkspaceVertical extends SchedulerWorkSpaceIndicator {
  _getFormat() {
    return this._formatWeekdayAndDay;
  }

  generateRenderOptions() {
    var startViewDate = timeZoneUtils.getDateWithoutTimezoneChange(this.getStartViewDate());

    var _getTimeText = (row, column) => {
      // T410490: incorrectly displaying time slots on Linux
      var index = row % this._getRowCount();

      if (index % 2 === 0 && column === 0) {
        return dateLocalization.format(this._getTimeCellDateCore(startViewDate, row), 'shorttime');
      }

      return '';
    };

    var options = super.generateRenderOptions();
    options.cellDataGetters.push((_, rowIndex, cellIndex) => {
      return {
        value: {
          text: _getTimeText(rowIndex, cellIndex)
        }
      };
    });
    return options;
  }

}

export default SchedulerWorkspaceVertical;

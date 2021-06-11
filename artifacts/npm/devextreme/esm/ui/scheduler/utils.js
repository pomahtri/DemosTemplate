/**
* DevExtreme (esm/ui/scheduler/utils.js)
* Version: 21.1.3
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import $ from '../../core/renderer';
import { APPOINTMENT_SETTINGS_KEY } from './constants';
var utils = {
  dataAccessors: {
    getAppointmentSettings: element => {
      return $(element).data(APPOINTMENT_SETTINGS_KEY);
    },
    getAppointmentInfo: element => {
      var settings = utils.dataAccessors.getAppointmentSettings(element);
      return settings === null || settings === void 0 ? void 0 : settings.info;
    }
  }
};
export default utils;

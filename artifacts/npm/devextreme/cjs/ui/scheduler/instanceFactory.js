/**
* DevExtreme (cjs/ui/scheduler/instanceFactory.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

exports.createInstances = void 0;

var _resourceManager = require("./resources/resourceManager");

var _appointmentDataProvider = require("./appointments/DataProvider/appointmentDataProvider");

var createInstances = function createInstances(options) {
  (0, _resourceManager.createResourceManager)(options.resources);
  (0, _appointmentDataProvider.createAppointmentDataProvider)(options);
};

exports.createInstances = createInstances;

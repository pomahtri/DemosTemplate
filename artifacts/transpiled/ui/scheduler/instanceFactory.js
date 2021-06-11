"use strict";

exports.createInstances = void 0;

var _resourceManager = require("./resources/resourceManager");

var _appointmentDataProvider = require("./appointments/DataProvider/appointmentDataProvider");

var createInstances = function createInstances(options) {
  (0, _resourceManager.createResourceManager)(options.resources);
  (0, _appointmentDataProvider.createAppointmentDataProvider)(options);
};

exports.createInstances = createInstances;
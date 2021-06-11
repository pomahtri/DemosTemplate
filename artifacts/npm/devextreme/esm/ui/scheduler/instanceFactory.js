/**
* DevExtreme (esm/ui/scheduler/instanceFactory.js)
* Version: 21.2.0
* Build date: Fri Jun 11 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
import { createResourceManager } from './resources/resourceManager';
import { createAppointmentDataProvider } from './appointments/DataProvider/appointmentDataProvider';
export var createInstances = options => {
  createResourceManager(options.resources);
  createAppointmentDataProvider(options);
};

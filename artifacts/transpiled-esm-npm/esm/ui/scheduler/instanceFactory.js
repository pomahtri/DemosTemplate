import { createResourceManager } from './resources/resourceManager';
import { createAppointmentDataProvider } from './appointments/DataProvider/appointmentDataProvider';
export var createInstances = options => {
  createResourceManager(options.resources);
  createAppointmentDataProvider(options);
};
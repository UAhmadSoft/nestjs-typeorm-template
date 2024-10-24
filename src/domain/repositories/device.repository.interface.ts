import { DeviceModel,FetchDeviceModel,UpdateDeviceModel } from '../models/Device';
export interface IDevice {
createDevice(deviceModel:DeviceModel): Promise<FetchDeviceModel>;
getDevice(id:number) : Promise<FetchDeviceModel>;
getDevices() : Promise<FetchDeviceModel[]>;
updateDevice(id: number, updateDeviceModel:UpdateDeviceModel): Promise<FetchDeviceModel>;
deleteDevice(id:number) : Promise<void>;
}

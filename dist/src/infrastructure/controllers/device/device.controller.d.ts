import { DeviceUseCases } from '../../../usecases/device/device.usecases';
import { CreateDeviceDto, UpdateDeviceDto } from './device.dto';
export declare class DeviceController {
    private readonly deviceUseCases;
    constructor(deviceUseCases: DeviceUseCases);
    createDevice(device: CreateDeviceDto): Promise<import("../../../domain/models/device").FetchDeviceModel>;
    getDevice(id: number): Promise<{
        data: import("../../../domain/models/device").FetchDeviceModel;
    }>;
    getDevices(): Promise<import("../../../domain/models/device").FetchDeviceModel[]>;
    updateDevice(id: number, device: UpdateDeviceDto): Promise<import("../../../domain/models/device").FetchDeviceModel>;
    deleteDevice(id: number): Promise<void>;
}

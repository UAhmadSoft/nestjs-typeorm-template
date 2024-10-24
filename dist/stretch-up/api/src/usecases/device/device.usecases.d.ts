import { DeviceModel, UpdateDeviceModel } from '../../domain/models/device';
import { DeviceRepository } from '../../infrastructure/repository/device.repository';
export declare class DeviceUseCases {
    private readonly deviceRepository;
    constructor(deviceRepository: DeviceRepository);
    createDevice(deviceModel: DeviceModel): Promise<import("../../domain/models/device").FetchDeviceModel>;
    getDevice(id: number): Promise<{
        data: import("../../domain/models/device").FetchDeviceModel;
    }>;
    getDevices(): Promise<import("../../domain/models/device").FetchDeviceModel[]>;
    updateDevice(id: number, deviceUpdateModel: UpdateDeviceModel): Promise<import("../../domain/models/device").FetchDeviceModel>;
    deleteDevice(id: number): Promise<void>;
}

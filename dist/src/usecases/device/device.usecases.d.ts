import { DeviceModel, UpdateDeviceModel } from '../../domain/models/device';
import { DeviceRepository } from '../../infrastructure/repository/device.repository';
export declare class DeviceUseCases {
    private readonly deviceRepository;
    constructor(deviceRepository: DeviceRepository);
    createDevice(deviceModel: DeviceModel): Promise<any>;
    getDevice(id: number): Promise<{
        data: any;
    }>;
    getDevices(): Promise<any>;
    updateDevice(id: number, deviceUpdateModel: UpdateDeviceModel): Promise<any>;
    deleteDevice(id: number): Promise<any>;
}

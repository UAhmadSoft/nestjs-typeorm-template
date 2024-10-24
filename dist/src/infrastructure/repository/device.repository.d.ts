import { Repository } from 'typeorm';
import { DeviceModel, FetchDeviceModel, UpdateDeviceModel } from '../../domain/models/device';
import { IDevice } from '../../domain/repositories/device.repository.interface';
import { Devices } from '../entities/device.entity';
export declare class DeviceRepository implements IDevice {
    private deviceRepository;
    constructor(deviceRepository: Repository<Devices>);
    createDevice(deviceModel: DeviceModel): Promise<FetchDeviceModel>;
    getDevice(id: number): Promise<FetchDeviceModel>;
    getDevices(): Promise<FetchDeviceModel[]>;
    updateDevice(id: number, updateDeviceModel: UpdateDeviceModel): Promise<FetchDeviceModel>;
    deleteDevice(id: number): Promise<void>;
}

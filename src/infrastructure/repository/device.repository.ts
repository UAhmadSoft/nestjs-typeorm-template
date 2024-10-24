import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeviceModel, FetchDeviceModel, UpdateDeviceModel  } from '../../domain/models/device';
import { IDevice } from '../../domain/repositories/device.repository.interface';
import { Devices } from '../entities/device.entity';

@Injectable()
export class DeviceRepository implements IDevice {
  constructor(
    @InjectRepository(Devices)
    private deviceRepository: Repository<Devices>,
  ) {}

  async createDevice(deviceModel: DeviceModel): Promise<FetchDeviceModel> {
    return await this.deviceRepository.save(deviceModel);
  }

  async getDevice(id: number): Promise<FetchDeviceModel> {
    return await this.deviceRepository.findOne({ where: { id } });
  }

  async getDevices(): Promise<FetchDeviceModel[]> {
    return await this.deviceRepository.find();
  }

  async updateDevice(
    id: number,
    updateDeviceModel: UpdateDeviceModel,
  ): Promise<FetchDeviceModel> {
    const device = await this.deviceRepository.findOne({ where: { id } });
    if (device) {
      const updatedDevice = { ...device, ...updateDeviceModel };
      return this.deviceRepository.save(updatedDevice);
    }
    return;
  }

  async deleteDevice(id: number): Promise<void> {
    const result = await this.deviceRepository.delete(id);
    if(result.affected === 0){
        throw new NotFoundException('Device Not Found');
    }

    return;
  }
}

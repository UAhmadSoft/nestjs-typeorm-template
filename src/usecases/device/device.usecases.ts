import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DeviceModel, UpdateDeviceModel  } from '../../domain/models/device';
import { DeviceRepository } from '../../infrastructure/repository/device.repository';

@Injectable()
export class DeviceUseCases {
  constructor(private readonly deviceRepository: DeviceRepository) {}

  async createDevice(deviceModel: DeviceModel) {
    return await this.deviceRepository.createDevice(deviceModel);
  }

  async getDevice(id: number) {
    const data = await this.deviceRepository.getDevice(id);
    if (!data) {
      throw new HttpException('Device Not Found', HttpStatus.NOT_FOUND);
    }
    return { data };
  }

  async getDevices() {
    return await this.deviceRepository.getDevices();
  }

  async updateDevice(id: number, deviceUpdateModel: UpdateDeviceModel) {
    return await this.deviceRepository.updateDevice(id, deviceUpdateModel);
  }

  async deleteDevice(id: number) {
    return await this.deviceRepository.deleteDevice(id);
  }
}

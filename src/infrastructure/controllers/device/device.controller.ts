import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../../infrastructure/common/guards/jwtAuth.guard';
import { DeviceUseCases } from '../../../usecases/device/device.usecases';
import { CreateDeviceDto, UpdateDeviceDto } from './device.dto';

@Controller('devices')
@UseGuards(JwtAuthGuard)
export class DeviceController {
  constructor(private readonly deviceUseCases: DeviceUseCases) {}

  @Post()
  createDevice(@Body() device: CreateDeviceDto) {
    return this.deviceUseCases.createDevice(device);
  }

  @Get(':id')
  getDevice(@Param('id', ParseIntPipe) id: number) {
    return this.deviceUseCases.getDevice(id);
  }

  @Get()
  getDevices() {
    return this.deviceUseCases.getDevices();
  }

  @Put(':id')
  updateDevice(
    @Param('id', ParseIntPipe) id: number,
    @Body() device: UpdateDeviceDto,
  ) {
    return this.deviceUseCases.updateDevice(id, device);
  }

  @Delete(':id')
  deleteDevice(@Param('id', ParseIntPipe) id: number) {
    return this.deviceUseCases.deleteDevice(id);
  }
}

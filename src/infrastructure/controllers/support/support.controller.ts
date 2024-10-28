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
import { SupportUseCases } from '../../../usecases/support/support.usecases';
import { CreateSupportDto, UpdateSupportDto } from './support.dto';

@Controller('supports')
export class SupportController {
  constructor(private readonly supportUseCases: SupportUseCases) {}

  @Post()
  createSupport(@Body() support: CreateSupportDto) {
    return this.supportUseCases.createSupport(support);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getSupports() {
    return this.supportUseCases.getSupports();
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteSupport(@Param('id', ParseIntPipe) id: number) {
    return this.supportUseCases.deleteSupport(id);
  }
}

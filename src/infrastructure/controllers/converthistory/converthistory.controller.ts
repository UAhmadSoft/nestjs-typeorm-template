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
import { ConvertHistoryUseCases } from '../../../usecases/converthistory/converthistory.usecases';
import {
  CreateConvertHistoryDto,
  UpdateConvertHistoryDto,
} from './converthistory.dto';

@Controller('converthistorys')
@UseGuards(JwtAuthGuard)
export class ConvertHistoryController {
  constructor(
    private readonly convertHistoryUseCases: ConvertHistoryUseCases,
  ) {}

  @Post()
  createConvertHistory(@Body() convertHistory: CreateConvertHistoryDto) {
    return this.convertHistoryUseCases.createConvertHistory(convertHistory);
  }

  // @Get(':id')
  // getConvertHistory(@Param('id', ParseIntPipe) id: number) {
  //   return this.convertHistoryUseCases.getConvertHistory(id);
  // }

  // @Get()
  // getConvertHistory() {
  //   return this.convertHistoryUseCases.getConvertHistory();
  // }

  @Put(':id')
  updateConvertHistory(
    @Param('id', ParseIntPipe) id: number,
    @Body() convertHistory: UpdateConvertHistoryDto,
  ) {
    return this.convertHistoryUseCases.updateConvertHistory(id, convertHistory);
  }

  @Delete(':id')
  deleteConvertHistory(@Param('id', ParseIntPipe) id: number) {
    return this.convertHistoryUseCases.deleteConvertHistory(id);
  }
}

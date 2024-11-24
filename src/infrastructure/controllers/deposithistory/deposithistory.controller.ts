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
import { DepositHistoryUseCases } from '../../../usecases/deposithistory/deposithistory.usecases';
import {
  CreateDepositHistoryDto,
  UpdateDepositHistoryDto,
} from './deposithistory.dto';

@Controller('deposithistorys')
@UseGuards(JwtAuthGuard)
export class DepositHistoryController {
  constructor(
    private readonly depositHistoryUseCases: DepositHistoryUseCases,
  ) {}

  @Post()
  createDepositHistory(@Body() depositHistory: CreateDepositHistoryDto) {
    return this.depositHistoryUseCases.createDepositHistory(depositHistory);
  }

  @Get(':id')
  getDepositHistory(@Param('id', ParseIntPipe) id: number) {
    return this.depositHistoryUseCases.getDepositHistory(id);
  }

  @Get()
  getDepositHistory() {
    return this.depositHistoryUseCases.getDepositHistory();
  }

  @Put(':id')
  updateDepositHistory(
    @Param('id', ParseIntPipe) id: number,
    @Body() depositHistory: UpdateDepositHistoryDto,
  ) {
    return this.depositHistoryUseCases.updateDepositHistory(id, depositHistory);
  }

  @Delete(':id')
  deleteDepositHistory(@Param('id', ParseIntPipe) id: number) {
    return this.depositHistoryUseCases.deleteDepositHistory(id);
  }
}

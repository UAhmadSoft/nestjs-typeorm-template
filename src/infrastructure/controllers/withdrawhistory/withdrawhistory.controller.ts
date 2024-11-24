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
import { WithdrawHistoryUseCases } from '../../../usecases/withdrawhistory/withdrawhistory.usecases';
import {
  CreateWithdrawHistoryDto,
  UpdateWithdrawHistoryDto,
} from './withdrawhistory.dto';

@Controller('withdrawhistorys')
@UseGuards(JwtAuthGuard)
export class WithdrawHistoryController {
  constructor(
    private readonly withdrawHistoryUseCases: WithdrawHistoryUseCases,
  ) {}

  @Post()
  createWithdrawHistory(@Body() withdrawHistory: CreateWithdrawHistoryDto) {
    return this.withdrawHistoryUseCases.createWithdrawHistory(withdrawHistory);
  }

  @Get(':id')
  getWithdrawHistory(@Param('id', ParseIntPipe) id: number) {
    return this.withdrawHistoryUseCases.getWithdrawHistory(id);
  }

  @Get()
  getWithdrawHistory() {
    return this.withdrawHistoryUseCases.getWithdrawHistory();
  }

  @Put(':id')
  updateWithdrawHistory(
    @Param('id', ParseIntPipe) id: number,
    @Body() withdrawHistory: UpdateWithdrawHistoryDto,
  ) {
    return this.withdrawHistoryUseCases.updateWithdrawHistory(
      id,
      withdrawHistory,
    );
  }

  @Delete(':id')
  deleteWithdrawHistory(@Param('id', ParseIntPipe) id: number) {
    return this.withdrawHistoryUseCases.deleteWithdrawHistory(id);
  }
}

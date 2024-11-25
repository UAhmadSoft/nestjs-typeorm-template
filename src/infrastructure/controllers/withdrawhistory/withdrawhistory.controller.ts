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
}

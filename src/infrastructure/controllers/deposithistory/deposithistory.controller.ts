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
}

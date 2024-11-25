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
import { TransferHistoryUseCases } from '../../../usecases/transferhistory/transferhistory.usecases';
import {
  CreateTransferHistoryDto,
  UpdateTransferHistoryDto,
} from './transferhistory.dto';

@Controller('transferhistorys')
@UseGuards(JwtAuthGuard)
export class TransferHistoryController {
  constructor(
    private readonly transferHistoryUseCases: TransferHistoryUseCases,
  ) {}
}

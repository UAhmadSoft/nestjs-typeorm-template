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

  @Post()
  createTransferHistory(@Body() transferHistory: CreateTransferHistoryDto) {
    return this.transferHistoryUseCases.createTransferHistory(transferHistory);
  }

  @Get(':id')
  getTransferHistory(@Param('id', ParseIntPipe) id: number) {
    return this.transferHistoryUseCases.getTransferHistory(id);
  }

  @Get()
  getTransferHistory() {
    return this.transferHistoryUseCases.getTransferHistory();
  }

  @Put(':id')
  updateTransferHistory(
    @Param('id', ParseIntPipe) id: number,
    @Body() transferHistory: UpdateTransferHistoryDto,
  ) {
    return this.transferHistoryUseCases.updateTransferHistory(
      id,
      transferHistory,
    );
  }

  @Delete(':id')
  deleteTransferHistory(@Param('id', ParseIntPipe) id: number) {
    return this.transferHistoryUseCases.deleteTransferHistory(id);
  }
}

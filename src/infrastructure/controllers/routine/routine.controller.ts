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
import { RoutineUseCases } from '../../../usecases/routine/routine.usecases';
import { CreateRoutineDto, UpdateRoutineDto } from './routine.dto';

@Controller('routines')
@UseGuards(JwtAuthGuard)
export class RoutineController {
  constructor(private readonly routineUseCases: RoutineUseCases) {}

  @Post()
  createRoutine(@Body() routine: CreateRoutineDto) {
    return this.routineUseCases.createRoutine(routine);
  }

  @Get(':id')
  getRoutine(@Param('id', ParseIntPipe) id: number) {
    return this.routineUseCases.getRoutine(id);
  }

  @Get()
  getRoutines() {
    return this.routineUseCases.getRoutines();
  }

  @Put(':id')
  updateRoutine(
    @Param('id', ParseIntPipe) id: number,
    @Body() routine: UpdateRoutineDto,
  ) {
    return this.routineUseCases.updateRoutine(id, routine);
  }

  @Delete(':id')
  deleteRoutine(@Param('id', ParseIntPipe) id: number) {
    return this.routineUseCases.deleteRoutine(id);
  }
}

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
import { ExerciseUseCases } from '../../../usecases/exercise/exercise.usecases';
import { CreateExerciseDto, UpdateExerciseDto } from './exercise.dto';

@Controller('exercises')
@UseGuards(JwtAuthGuard)
export class ExerciseController {
  constructor(private readonly exerciseUseCases: ExerciseUseCases) {}

  @Post()
  createExercise(@Body() exercise: CreateExerciseDto) {
    return this.exerciseUseCases.createExercise(exercise);
  }

  @Get(':id')
  getExercise(@Param('id', ParseIntPipe) id: number) {
    return this.exerciseUseCases.getExercise(id);
  }

  @Get()
  getExercises() {
    return this.exerciseUseCases.getExercises();
  }

  @Put(':id')
  updateExercise(
    @Param('id', ParseIntPipe) id: number,
    @Body() exercise: UpdateExerciseDto,
  ) {
    return this.exerciseUseCases.updateExercise(id, exercise);
  }

  @Delete(':id')
  deleteExercise(@Param('id', ParseIntPipe) id: number) {
    return this.exerciseUseCases.deleteExercise(id);
  }
}

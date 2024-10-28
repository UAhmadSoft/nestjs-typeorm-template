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
import { UserPreferencesResponseUseCases } from '../../../usecases/userpreferencesresponse/userpreferencesresponse.usecases';
import { CreateUserPreferencesResponseDto, UpdateUserPreferencesResponseDto } from './userpreferencesresponse.dto';

@Controller('userpreferencesresponses')
@UseGuards(JwtAuthGuard)
export class UserPreferencesResponseController {
  constructor(private readonly userPreferencesResponseUseCases: UserPreferencesResponseUseCases) {}

  @Post()
  createUserPreferencesResponse(@Body() userPreferencesResponse: CreateUserPreferencesResponseDto) {
    return this.userPreferencesResponseUseCases.createUserPreferencesResponse(userPreferencesResponse);
  }

  @Get(':id')
  getUserPreferencesResponse(@Param('id', ParseIntPipe) id: number) {
    return this.userPreferencesResponseUseCases.getUserPreferencesResponse(id);
  }

  @Get()
  getUserPreferencesResponses() {
    return this.userPreferencesResponseUseCases.getUserPreferencesResponses();
  }

  @Put(':id')
  updateUserPreferencesResponse(
    @Param('id', ParseIntPipe) id: number,
    @Body() userPreferencesResponse: UpdateUserPreferencesResponseDto,
  ) {
    return this.userPreferencesResponseUseCases.updateUserPreferencesResponse(id, userPreferencesResponse);
  }

  @Delete(':id')
  deleteUserPreferencesResponse(@Param('id', ParseIntPipe) id: number) {
    return this.userPreferencesResponseUseCases.deleteUserPreferencesResponse(id);
  }
}

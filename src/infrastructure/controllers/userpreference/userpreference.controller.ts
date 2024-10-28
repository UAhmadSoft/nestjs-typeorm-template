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
import { UserPreferenceUseCases } from '../../../usecases/userpreference/userpreference.usecases';
import { CreateUserPreferenceDto, UpdateUserPreferenceDto } from './userpreference.dto';

@Controller('userpreferences')
@UseGuards(JwtAuthGuard)
export class UserPreferenceController {
  constructor(private readonly userPreferenceUseCases: UserPreferenceUseCases) {}

  @Post()
  createUserPreference(@Body() userPreference: CreateUserPreferenceDto) {
    return this.userPreferenceUseCases.createUserPreference(userPreference);
  }

  @Get(':id')
  getUserPreference(@Param('id', ParseIntPipe) id: number) {
    return this.userPreferenceUseCases.getUserPreference(id);
  }

  @Get()
  getUserPreferences() {
    return this.userPreferenceUseCases.getUserPreferences();
  }

  @Put(':id')
  updateUserPreference(
    @Param('id', ParseIntPipe) id: number,
    @Body() userPreference: UpdateUserPreferenceDto,
  ) {
    return this.userPreferenceUseCases.updateUserPreference(id, userPreference);
  }

  @Delete(':id')
  deleteUserPreference(@Param('id', ParseIntPipe) id: number) {
    return this.userPreferenceUseCases.deleteUserPreference(id);
  }
}

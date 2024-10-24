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
import { ProfileUseCases } from '../../../usecases/profile/profile.usecases';
import { CreateProfileDto, UpdateProfileDto } from './profile.dto';

@Controller('profiles')
@UseGuards(JwtAuthGuard)
export class ProfileController {
  constructor(private readonly profileUseCases: ProfileUseCases) {}

  @Post()
  createProfile(@Body() profile: CreateProfileDto) {
    return this.profileUseCases.createProfile(profile);
  }

  @Get(':id')
  getProfile(@Param('id', ParseIntPipe) id: number) {
    return this.profileUseCases.getProfile(id);
  }

  @Get()
  getProfiles() {
    return this.profileUseCases.getProfiles();
  }

  @Put(':id')
  updateProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() profile: UpdateProfileDto,
  ) {
    return this.profileUseCases.updateProfile(id, profile);
  }

  @Delete(':id')
  deleteProfile(@Param('id', ParseIntPipe) id: number) {
    return this.profileUseCases.deleteProfile(id);
  }
}

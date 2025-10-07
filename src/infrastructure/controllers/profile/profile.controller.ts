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
import { ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../../infrastructure/common/guards/jwtAuth.guard';
import { ProfileUseCases } from '../../../usecases/profile/profile.usecases';
import { CreateProfileDto, UpdateProfileDto } from './profile.dto';

@Controller('profiles')
@UseGuards(JwtAuthGuard)
export class ProfileController {
  constructor(private readonly profileUseCases: ProfileUseCases) {}

  @Post()
  @ApiOperation({ summary: 'Create a new profile' })
  @ApiBody({ type: CreateProfileDto })
    @ApiResponse({ status: 201, description: 'Profile created', schema: { example: { id: 1, user: 1, first_name: 'John', last_name: 'Doe' } } })
  createProfile(@Body() profile: CreateProfileDto) {
    return this.profileUseCases.createProfile(profile);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a profile by id' })
    @ApiResponse({ status: 200, description: 'Profile returned', schema: { example: { id: 1, user: 1, first_name: 'John', last_name: 'Doe' } } })
  getProfile(@Param('id', ParseIntPipe) id: number) {
    return this.profileUseCases.getProfile(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all profiles' })
    @ApiResponse({ status: 200, description: 'Profiles list', schema: { example: [{ id: 1, user: 1, first_name: 'John', last_name: 'Doe' }] } })
  getProfiles() {
    return this.profileUseCases.getProfiles();
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a profile by id' })
  @ApiBody({ type: UpdateProfileDto })
    @ApiResponse({ status: 200, description: 'Updated profile', schema: { example: { id: 1, user: 1, first_name: 'John', last_name: 'Doe' } } })
  updateProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() profile: UpdateProfileDto,
  ) {
    return this.profileUseCases.updateProfile(id, profile);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a profile by id' })
    @ApiResponse({ status: 204, description: 'Profile deleted' })
  deleteProfile(@Param('id', ParseIntPipe) id: number) {
    return this.profileUseCases.deleteProfile(id);
  }
}

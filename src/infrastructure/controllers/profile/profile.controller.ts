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
import { ApiOperation, ApiBody } from '@nestjs/swagger';
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
  createProfile(@Body() profile: CreateProfileDto) {
    return this.profileUseCases.createProfile(profile);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a profile by id' })
  getProfile(@Param('id', ParseIntPipe) id: number) {
    return this.profileUseCases.getProfile(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all profiles' })
  getProfiles() {
    return this.profileUseCases.getProfiles();
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a profile by id' })
  @ApiBody({ type: UpdateProfileDto })
  updateProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() profile: UpdateProfileDto,
  ) {
    return this.profileUseCases.updateProfile(id, profile);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a profile by id' })
  deleteProfile(@Param('id', ParseIntPipe) id: number) {
    return this.profileUseCases.deleteProfile(id);
  }
}

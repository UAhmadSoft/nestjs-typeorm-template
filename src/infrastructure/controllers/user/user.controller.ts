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
import { UserUseCases } from '../../../usecases/user/user.usecases';
import { CreateUserDto, UpdateUserDto } from './user.dto';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userUseCases: UserUseCases) {}

  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userUseCases.createUser(user);
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userUseCases.getUser(id);
  }

  @Get()
  getUsers() {
    return this.userUseCases.getUsers();
  }

  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UpdateUserDto,
  ) {
    return this.userUseCases.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userUseCases.deleteUser(id);
  }
}

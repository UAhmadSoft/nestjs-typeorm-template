import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../../infrastructure/common/guards/jwtAuth.guard';
import { UserUseCases } from '../../../usecases/user/user.usecases';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { Permission } from 'src/infrastructure/common/decorators/permissions.decorator';
import { PermissionGuard } from 'src/infrastructure/common/guards/permission.guard';
import { LoginUseCases } from 'src/usecases/auth/login.usecases';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(
    private readonly userUseCases: UserUseCases,
    private readonly loginUsecaseProxy: LoginUseCases,
  ) {}

  @UseGuards(PermissionGuard)
  @Permission(['admin'])
  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userUseCases.createUser(user);
  }

  @Get('me')
  async getMe(@Request() req) {
    console.log('req.user', req.user);
    const user = await this.userUseCases.getMe(req.user.email);
    const accessTokenCookie = await this.loginUsecaseProxy.getJwtToken(
      user.email,
    );

    return {
      user,
      authentication: accessTokenCookie,
    };
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userUseCases.getUser(id);
  }

  @UseGuards(PermissionGuard)
  @Permission(['admin'])
  @Get()
  getUsers(@Query() queryParams) {
    return this.userUseCases.getUsers(queryParams);
  }

  @UseGuards(PermissionGuard)
  @Permission(['admin'])
  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UpdateUserDto,
  ) {
    return this.userUseCases.updateUser(id, user);
  }

  @UseGuards(PermissionGuard)
  @Permission(['admin'])
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userUseCases.deleteUser(id);
  }
}

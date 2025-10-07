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
import { ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';
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
  @ApiOperation({ summary: 'Create a new user (admin only)' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'User created', schema: { example: { id: 1, email: 'user@example.com', is_active: true } } })
  createUser(@Body() user: CreateUserDto) {
    return this.userUseCases.createUser(user);
  }

  @Get('me')
  @ApiOperation({ summary: "Get the current authenticated user's info" })
  @ApiResponse({ status: 200, description: 'Current user info', schema: { example: { user: { id: 1, email: 'user@example.com' }, authentication: 'jwt-token' } } })
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
  @ApiOperation({ summary: 'Get a user by id' })
  @ApiResponse({ status: 200, description: 'User returned', schema: { example: { id: 1, email: 'user@example.com' } } })
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userUseCases.getUser(id);
  }

  @UseGuards(PermissionGuard)
  @Permission(['admin'])
  @Get()
  @ApiOperation({ summary: 'Get list of users (admin only)' })
  @ApiResponse({ status: 200, description: 'Users list', schema: { example: [{ id: 1, email: 'user@example.com' }] } })
  getUsers(@Query() queryParams) {
    return this.userUseCases.getUsers(queryParams);
  }

  @UseGuards(PermissionGuard)
  @Permission(['admin'])
  @Put(':id')
  @ApiOperation({ summary: 'Update a user by id (admin only)' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, description: 'Updated user', schema: { example: { id: 1, email: 'user@example.com' } } })
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() user: UpdateUserDto,
  ) {
    return this.userUseCases.updateUser(id, user);
  }

  @UseGuards(PermissionGuard)
  @Permission(['admin'])
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by id (admin only)' })
  @ApiResponse({ status: 204, description: 'User deleted' })
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userUseCases.deleteUser(id);
  }
}

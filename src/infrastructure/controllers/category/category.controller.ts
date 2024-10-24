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
import { CategoryUseCases } from '../../../usecases/category/category.usecases';
import { CreateCategoryDto, UpdateCategoryDto } from './category.dto';

@Controller('categories')
@UseGuards(JwtAuthGuard)
export class CategoryController {
  constructor(private readonly categoryUseCases: CategoryUseCases) {}

  @Post()
  createCategory(@Body() category: CreateCategoryDto) {
    return this.categoryUseCases.createCategory(category);
  }

  @Get(':id')
  getCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoryUseCases.getCategory(id);
  }

  @Get()
  getCategories() {
    return this.categoryUseCases.getCategories();
  }

  @Put(':id')
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() category: UpdateCategoryDto,
  ) {
    return this.categoryUseCases.updateCategory(id, category);
  }

  @Delete(':id')
  deleteCategory(@Param('id', ParseIntPipe) id: number) {
    return this.categoryUseCases.deleteCategory(id);
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCatDto } from '../dto/create-cat.dto';
import { CatsService } from '../providers/cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto)
    this.catsService.create(createCatDto);
  }

}
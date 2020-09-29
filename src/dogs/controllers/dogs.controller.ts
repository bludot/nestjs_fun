import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateDogDto } from '../dto/create-dog.dto';
import { DogsService } from '../providers/dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
  @Post()
  async create(@Body() createDogDto: CreateDogDto) {
    console.log(createDogDto)
    this.dogsService.create(createDogDto);
  }

}
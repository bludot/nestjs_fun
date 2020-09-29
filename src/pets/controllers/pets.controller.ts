import { Body, Controller, Get, Post } from '@nestjs/common';
import { DogsService } from '../../dogs/providers/dogs.service';
import { CatsService } from '../../cats/providers/cats.service';


@Controller('pets')
export class PetsController {
  constructor(private readonly dogsService: DogsService, private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    return  Promise.all([this.dogsService.findAll(), this.catsService.findAll()]).then(data => [].concat.apply([], data))
  }

}
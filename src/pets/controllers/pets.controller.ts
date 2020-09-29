import { Body, Controller, Get, Post } from '@nestjs/common';
import { DogsService } from '../../dogs/providers/dogs.service';
import { CatsService } from '../../cats/providers/cats.service';
import { MyLogger } from '../../logger/logger.service';


@Controller('pets')
export class PetsController {
  constructor(private readonly myLogger: MyLogger, private readonly dogsService: DogsService, private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    this.myLogger.debug('finding all pets')
    return  Promise.all([this.dogsService.findAll(), this.catsService.findAll()]).then(data => [].concat.apply([], data))
  }

}
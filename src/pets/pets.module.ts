import { Module } from '@nestjs/common';
import { CatsModule } from '../cats/cats.module';
import { DogsModule } from '../dogs/dogs.module';
import { PetsController } from './controllers/pets.controller';
import { LoggerModule } from '../logger/logger.module';

@Module({
  imports: [LoggerModule, CatsModule, DogsModule],
  controllers: [PetsController],
})
export class PetsModule {}
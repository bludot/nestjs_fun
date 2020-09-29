import { Module } from '@nestjs/common';
import { CatsModule } from '../cats/cats.module';
import { DogsModule } from '../dogs/dogs.module';
import { PetsController } from './controllers/pets.controller';

@Module({
  imports: [CatsModule, DogsModule],
  controllers: [PetsController],
})
export class PetsModule {}
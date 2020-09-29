import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [CatsModule, DogsModule, PetsModule],
})
export class AppModule {}

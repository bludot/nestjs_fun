import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { PetsModule } from './pets/pets.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  /**
   * everything is singleton according to nestjs
   * when we import a module, nestjs makes sure its not recreated
   *
   * how do we split?
   *  Each "module" is a "domain". Only what is relevant should be in there.
   *  modules will have their own services and controllers as well as their
   *  own schemas. ex: cats shouldnt be touching dogs in database but pets
   *  can and we do this by exporting the dogs and cats services. Please
   *  reference also https://hanamirb.org/ as they have a similar idea
   *
   */
  imports: [
    MongooseModule.forRoot('mongodb://mongo1/nest'),
    CatsModule,
    DogsModule,
    PetsModule
  ],
})
export class AppModule {
}

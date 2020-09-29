import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schemas/cat.schema';
import { CatsService } from './providers/cats.service';
import { CatsController } from './controllers/cats.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongo1/nest'), MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService]
})
export class CatsModule {}
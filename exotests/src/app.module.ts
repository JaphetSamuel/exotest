import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecettesModule } from './recettes/recettes.module';
import { CuisineModule } from './cuisine/cuisine.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CuisineModule, RecettesModule,TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

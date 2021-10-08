import { Module } from '@nestjs/common';
import { RecettesService } from './recettes/recettes.service';
import { RecettesController } from './recettes/recettes.controller';

@Module({

  providers: [RecettesService],

  controllers: [RecettesController]
})
export class RecettesModule {}

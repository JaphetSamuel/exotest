import { Controller, Get } from '@nestjs/common';

@Controller('recettes')
export class RecettesController {
  @Get()
  index(): string{
  return "Hello wprmd";
}

}

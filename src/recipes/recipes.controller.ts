import { Controller, Get, Param } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private recipeService: RecipesService) {}

  @Get()
  getRecipes() {
    return this.recipeService.getRecipes();
  }

  @Get(':id')
  getRecipe(@Param() params) {
    console.log('get a single recipe', params.id);
    return this.recipeService
      .getRecipes()
      .filter((recipe) => recipe.id == params.id)[0];
  }
}

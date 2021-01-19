import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipesService {
  getRecipes() {
    return [
      {
        id: 500,
        title: 'Brussels Sprouts with Brown Butter',
        author: 'Dang Ton',
        prepTime: 45,
        intro: 'A basic method for a family of 4',
        yield: 4,
        ingredients: [
          {
            id: 200,
            name: 'Toast',
            order: 1,
            measurementName: 'cups',
            measurementQuantity: 1,
            notes: 'at room temp',
          },
          {
            id: 201,
            name: 'olive oil',
            order: 2,
            measurementName: 'tablespoons',
            measurementQuantity: 1,
            notes: '',
          },
          {
            id: 202,
            name: 'orange juice',
            order: 3,
            measurementName: 'tablespoons',
            measurementQuantity: 1,
            notes: '',
          },
          {
            id: 203,
            name: 'milk',
            order: 4,
            measurementName: 'tablespoons',
            measurementQuantity: 1,
            notes: '',
          },
        ],
        steps: [
          {
            id: 5000,
            order: 1,
            text: 'Heat oven to 350',
          },
          {
            id: 5001,
            order: 2,
            text: 'Crack eggs into a bowl. Beat lightly until just combined.',
          },
        ],
      },
      {
        id: 600,
        title: 'Fried Eggs with Sesame Oil',
        author: 'Atticus Pomerantz',
        prepTime: 5,
        intro: 'Traditional fried eggs with a twist!',
        yield: 2,
      },
    ];
  }
}

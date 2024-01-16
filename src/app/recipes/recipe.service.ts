import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { shoppinglistService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'platform'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [
    new Recipe('Rasin Bread',
      "This is a Rasin Bread",
      "https://hips.hearstapps.com/thepioneerwoman/wp-content/uploads/2017/03/homemade-cinnamon-raisin-bread-15.jpg",
      [
        new Ingredient('Bread', 1),
        new Ingredient('Rasin', 9),
      ])

    ,
    new Recipe('Apple Tart',
      "This is a Apple Tart",
      "https://www.abakingjourney.com/wp-content/uploads/2019/11/French-Apple-Tart-Feature-1.jpg",
      [
        new Ingredient('Apple', 2),
        new Ingredient('Butter', 8),
        new Ingredient('Milk', 6),
        new Ingredient('Flour', 1),
      ])
  ];
  constructor(private slService: shoppinglistService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipesById(id: number) {
    return this.recipes.slice()[id]
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }

  updateRecipe(id: number, updatedRecipe: Recipe) {
    this.recipes[id] = updatedRecipe

  }
}

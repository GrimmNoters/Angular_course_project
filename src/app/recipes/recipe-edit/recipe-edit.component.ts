import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {
  // ingredients: Ingredient[]

  // recipe = new Recipe('', '', '', [new Ingredient('', 0)])
  recipeId: number
  editMode = false

  constructor(private recipeService: RecipeService, private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeId = +params['id'];
        this.editMode = params['id'] != null;

        // this.recipe = this.recipeService.getRecipesById(this.recipeId)
        // this.ingredients = this.recipe.ingredients
      }
    )
  }

  onUpdateRecipe() {


  }

}

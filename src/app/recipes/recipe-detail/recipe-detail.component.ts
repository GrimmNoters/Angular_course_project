import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // const id = +this.route.snapshot.params['id']
    // this.recipeDetail = this.recipeService.getRecipesById(id)
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']
        this.recipeDetail = this.recipeService.getRecipesById(this.id)
      }
    )
  }

  onSelected() {
    this.recipeService.addToShoppingList(this.recipeDetail.ingredients)
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

}

import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() showRecipeDetail = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test', 
    "This is a sample recipe",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxF3U763E89Q6Pg4Td9dipNP8VqlA1p6h2w&usqp=CAU"),
    new Recipe('Test2', 
    "This is a sample recipe2",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWxF3U763E89Q6Pg4Td9dipNP8VqlA1p6h2w&usqp=CAU"),
    
  ];

  onRecipeSelected(recipe:Recipe){
    this.showRecipeDetail.emit(recipe)

  }

}

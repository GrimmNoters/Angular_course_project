import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Banana', 5),
    new Ingredient('Orange', 9),
  ];

  onNewItemCreated(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient)
  }

}

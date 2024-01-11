import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent {


  @Output() newItem = new EventEmitter<Ingredient>();

  onAddIngredient(nameInput, amountInput) {
    const newIngredient = new Ingredient(nameInput.value, amountInput.value)
    console.log(newIngredient);

    this.newItem.emit(
      newIngredient

    )

  }

}

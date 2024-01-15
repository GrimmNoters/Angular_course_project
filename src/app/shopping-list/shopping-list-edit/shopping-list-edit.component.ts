import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { shoppinglistService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css'
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shoppinglistService:shoppinglistService){}

  onAddIngredient(nameInput, amountInput) {
    const newIngredient = new Ingredient(nameInput.value, amountInput.value)
    this.shoppinglistService.createNewItem(newIngredient)

  }
  ngOnInit(): void {}



}

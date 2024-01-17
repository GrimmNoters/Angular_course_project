import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class shoppinglistService implements OnInit {
  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Banana', 5),
    new Ingredient('Orange', 9),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getIngredients(){
    return this.ingredients.slice();
  }

  createNewItem(newIngredient:Ingredient){
    this.ingredients.push(newIngredient)

    // this.ingredientsChanged.emit(this.ingredients.slice())
    this.ingredientsChanged.next(this.ingredients.slice())
    
  }

  addIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);

    // this.ingredientsChanged.emit(this.ingredients.slice())
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}

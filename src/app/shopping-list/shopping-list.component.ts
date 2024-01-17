import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppinglistService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];

  private igChangSub:Subscription

  constructor(private shoppinglistService: shoppinglistService) {
    this.ingredients = this.shoppinglistService.getIngredients()

    this.igChangSub = this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => this.ingredients = ingredients
    )
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.igChangSub.unsubscribe()
  }

}

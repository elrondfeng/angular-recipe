import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) {
  }

  @Input() recipe: Recipe;

  ngOnInit() {
  }

  sendToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

}

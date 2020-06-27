import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/Ingredient.model';

// @Injectable({providedIn: 'root'})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Samosa',
      'indian healthy recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR76uamCtQ9WgrTmGrFPu_e1e3wNxme3NwyrrfcgMaNu5gZiL6z&usqp=CAU',
      [new Ingredient('Meat', 1), new Ingredient('Friench Fries', 20)]),
    new Recipe('Honey Garlic Chicken Breast',
      'recipe tineats',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEF_LwKZUvtN1K96457jofgo3YDc_yC5bJ7fzKaVyetqS4VZeo&usqp=CAU',
      [new Ingredient('Veg', 8), new Ingredient('beer', 8)])
  ];

  getRecipes() {
    // slice() means get a copy of the array
    return this.recipes.slice();
  }


}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeOut = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Samosa', 'indian healthy recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR76uamCtQ9WgrTmGrFPu_e1e3wNxme3NwyrrfcgMaNu5gZiL6z&usqp=CAU'),
    new Recipe('Honey Garlic Chicken Breast', 'recipe tineats',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEF_LwKZUvtN1K96457jofgo3YDc_yC5bJ7fzKaVyetqS4VZeo&usqp=CAU')
  ];
  constructor() { }

  ngOnInit() {
  }

  onSelectRecipeItem(recipe: Recipe) {
    this.recipeOut.emit(recipe);
  }

}

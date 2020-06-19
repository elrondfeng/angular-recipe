import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipe';

  recipeClicked = true;
  shoppingClicked = false;

  onNavigate(menuName: string) {
    if (menuName === 'recipes') {
      this.recipeClicked = true;
      this.shoppingClicked = false;
    } else if (menuName === 'shopping') {
      this.shoppingClicked = true;
      this.recipeClicked = false;
    }
  }
}

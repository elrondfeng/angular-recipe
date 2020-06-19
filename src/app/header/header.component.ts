import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;

  @Output() menuClicked = new EventEmitter<string>();

  onClickRecipes() {
    this.menuClicked.emit('recipes');
  }

  onClickShopping() {
    this.menuClicked.emit('shopping');
  }

}

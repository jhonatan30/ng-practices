import { ANGULAR_MENU_ITEMS } from '../shared/consts/angular.const';
import { Component } from '@angular/core';
import { MenuItem } from 'src/app/shared/models/menu-item.model';

@Component({
  selector: 'app-angular',
  template: `<div class="menu-container">
  <app-section *ngFor="let item of menuItems" [path]="item.path" [label]="item.label" [isActive]="item.isActive"></app-section>
</div>`
})
export class AngularComponent {

  public menuItems: MenuItem[] = ANGULAR_MENU_ITEMS;

}

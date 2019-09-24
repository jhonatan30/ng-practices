import { Component } from '@angular/core';
import { MenuItem } from 'src/app/shared/models/menu-item.model';
import { PROMISES_MENU_ITEMS } from '../shared/consts/promises.consts';

@Component({
  selector: 'app-promises',
  template: `<div class="rxjs-menu-container">
    <app-section *ngFor="let item of menuItems" [path]="item.path" [label]="item.label" [isActive]="item.isActive"></app-section>
  </div>`
})
export class PromisesComponent {
  public menuItems: MenuItem[] = PROMISES_MENU_ITEMS;
}

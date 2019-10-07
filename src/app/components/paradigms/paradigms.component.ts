import { Component } from '@angular/core';
import { MenuItem } from 'src/app/shared/models/menu-item.model';
import { PARADIGMS_MENU_ITEMS } from '../shared/consts/paradigms.consts';

@Component({
  selector: 'app-paradigms',
  template: `<div class="menu-container">
  <app-section *ngFor="let item of menuItems" [path]="item.path" [label]="item.label" [isActive]="item.isActive"></app-section>
  </div>`
})
export class ParadigmsComponent {
  public menuItems: MenuItem[] = PARADIGMS_MENU_ITEMS;
}

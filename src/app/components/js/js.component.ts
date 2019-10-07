import { Component } from '@angular/core';
import { JS_MENU_ITEMS } from '../shared/consts/js.consts';
import { MenuItem } from 'src/app/shared/models/menu-item.model';

@Component({
  selector: 'app-js',
  template: `<div class="menu-container">
    <app-section *ngFor="let item of menuItems" [path]="item.path" [label]="item.label" [isActive]="item.isActive"></app-section>
  </div>`
})
export class JsComponent {

  public menuItems: MenuItem[] = JS_MENU_ITEMS;

  constructor() { }

}

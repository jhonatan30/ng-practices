import { Component } from '@angular/core';
import { MenuItem } from '../../shared/models/menu-item.model';
import { RX_JS_MENU_ITEMS } from '../shared/consts/rxjs.const';

@Component({
  selector: 'app-rxjs',
  template: `<div class="rxjs-menu-container">
    <app-section *ngFor="let item of menuItems" [path]="item.path" [label]="item.label" [isActive]="item.isActive"></app-section>
  </div>`
})
export class RxjsComponent {

  public menuItems: MenuItem[] = RX_JS_MENU_ITEMS;

  constructor() { }

}

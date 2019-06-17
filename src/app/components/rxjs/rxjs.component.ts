import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITEM } from './shared/models/rxjs.model';
import { RX_JS_MENU_ITEMS } from './shared/consts/rxjs.const';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {

  public menuItems: ITEM[] = RX_JS_MENU_ITEMS;

  private _subs: Subscription[] = [];

  constructor() { }

  ngOnInit() { }

  ngOnDestroy(): void { this._subs.forEach(s => s.unsubscribe()); }

}

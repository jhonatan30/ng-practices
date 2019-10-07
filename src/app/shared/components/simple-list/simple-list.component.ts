import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SimpleListItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleListComponent implements OnInit {

  @Input() items$: Observable<SimpleListItem[]> = new Observable<SimpleListItem[]>();
  _items: SimpleListItem[];

  ngOnInit() {
    this.items$.subscribe(items => this._items = items);
  }

}

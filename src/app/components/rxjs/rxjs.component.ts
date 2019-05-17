import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {

  private _subs: Subscription[] = [];

  constructor(private _router: Router) { }

  ngOnInit() { }

  ngOnDestroy(): void {
    this._subs.forEach(s => s.unsubscribe());
  }

  public onNavigateTo(url: string) {
    this._router.navigateByUrl(url);
  }

}

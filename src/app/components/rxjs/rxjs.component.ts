import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReqresApiService } from 'src/app/shared/services/reqres-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {

  public users: string;
  public user: string;

  private _subs: Subscription[] = [];

  constructor(private _reqresApiService: ReqresApiService) { }

  ngOnInit() { }

  ngOnDestroy(): void {
    this._subs.forEach(s => s.unsubscribe());
  }

  public onGetUsersByPage(): void {
    this._subs.push(
      this._reqresApiService
        .getUsers(1)
        .subscribe(resp => this.users = JSON.stringify(resp))
    );
  }

  public onGetUserById() {
    this._subs.push(
      this._reqresApiService
        .getUserById(1)
        .subscribe(resp => this.user = JSON.stringify(resp))
    );
  }

}

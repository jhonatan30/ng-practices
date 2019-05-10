import { Component, OnInit } from '@angular/core';
import { ReqresApiService } from 'src/app/shared/services/reqres-api.service';
import { ReqResUsers } from 'src/app/shared/models/reqres-api.model';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  public repsonse: string;

  constructor(private _reqresApiService: ReqresApiService) { }

  ngOnInit() {
  }

  public onGetValues(): void {
    this._reqresApiService
      .getUsers(1)
      .subscribe(resp => this.repsonse = JSON.stringify(resp));
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReqResUsers } from '../models/reqres-api.model';
import { RequestService } from './request.service';

interface Endpoint {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReqresApiService {

  private _endpoints: Endpoint = {
    getUsersPerPage: 'https://reqres.in/api/users?page={pageNumber}'
  };

  constructor(private _request: RequestService) { }

  public getUsers(pageNumber: number): Observable<ReqResUsers> {
    const urlWithPage: string = this._endpoints.getUsersPerPage.replace('{pageNumber}', pageNumber.toString());
    return this._request.get(urlWithPage);
  }
}

import { Endpoint } from '../models/endpoint.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReqResUsers } from '../models/reqres-api.model';
import { RequestService } from './request.service';

@Injectable()
export class ReqresApiService {

  private _endpoints: Endpoint = {
    getUsersPerPage: 'https://reqres.in/api/users?page={pageNumber}',
    getUsersById: 'https://reqres.in/api/users/{userId}'
  };

  constructor(private _request: RequestService) { }

  public getUsers(pageNumber: number): Observable<ReqResUsers> {
    const urlWithPage: string = this._endpoints.getUsersPerPage.replace('{pageNumber}', pageNumber.toString());
    return this._request.get(urlWithPage);
  }

  public getUserById(userId: number): Observable<ReqResUsers> {
    const urlWithUserId: string = this._endpoints.getUsersById.replace('{userId}', userId.toString());
    return this._request.get(urlWithUserId);
  }
}

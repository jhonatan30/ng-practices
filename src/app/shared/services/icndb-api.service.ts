import { Endpoint } from '../models/endpoint.model';
import { ICNDBResponse } from '../models/icndb-api.model';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RequestService } from './request.service';

@Injectable()
export class NorrisJokeService {

  private _endpoints: Endpoint = {
    getUsersPerPage: 'http://api.icndb.com/jokes/random'
  };

  public jokeSubject = new Subject<ICNDBResponse>();
  public jokeSubject$ = this.jokeSubject.asObservable();

  constructor(private _request: RequestService) { }

  public getRandomJoke(): Observable<ICNDBResponse> {
    return this._request.get(this._endpoints.getUsersPerPage);
  }

}

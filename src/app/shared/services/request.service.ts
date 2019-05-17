import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RequestService {

  constructor(private _http: HttpClient) { }

  public get(url: string): Observable<any> {
    return this._http.get<any>(url);
  }

}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class RequestService {

  constructor(private _http: HttpClient) { }

  public get(url: string): Observable<any> {
    return this._http.get<any>(url)
      .pipe(catchError(error => this._handleError(error)));
  }

  private _handleError(error: HttpErrorResponse) {
    let errMsg: String;

    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      errMsg = error.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errMsg = `Backend returned code ${error.status}, body was: ${error.error}`;
    }
    // return an observable with a user-facing error message
    return throwError(errMsg);
  }

}

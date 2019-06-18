import { Injectable } from '@angular/core';
import { interval, Observable, of, throwError } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() { }

  public returnError(): Observable<any> {
    return interval(200).pipe(mergeMap(number => number > 1000 ? throwError(number) : of(number)));
  }

}

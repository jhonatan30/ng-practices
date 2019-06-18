import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../shared/services/rxjs.service';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.scss']
})
export class ErrorHandlingComponent implements OnInit {

  public counter: string = '0';
  public error: string = ' < 10';
  public isCorrect: boolean = true;
  public isRunning: boolean = false;
  public btnLabel: string = 'START COUNTER';

  constructor(private _rxjsService: RxjsService) { }

  ngOnInit() { }

  public onCallRequestWithError() {
    this.counter = '0';
    this.error = ' < 10';
    this.isCorrect = true;
    this.isRunning = true;
    this.btnLabel = 'RUNNING';

    this._rxjsService
      .returnError()
      .pipe(catchError((err) => this._catchError(err)))
      .subscribe(
        res => {
          this.counter = res;
        },
        err => {
          this.isCorrect = false;
          this.counter = err.toString();
          this.isRunning = false;
          this.btnLabel = 'START COUNTER';
        }
      );
  }

  private _catchError(err: number): Observable<string> {
    return throwError(err);
  }

}

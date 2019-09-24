import { Component, OnDestroy, OnInit } from '@angular/core';
import { IcndbApiService } from 'src/app/shared/services/icndb-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  public jokes = [];

  private _subs: Subscription[] = [];

  constructor(private _icndbApiService: IcndbApiService) { }

  ngOnInit() { }

  ngOnDestroy(): void {
    this._subs.forEach(s => s.unsubscribe());
  }

  public onGetNewJoke() {
    this._subs.push(
      this._icndbApiService
        .getRandomJoke()
        .subscribe(joke => {
          this._icndbApiService.jokeSubject.next(joke);
          console.log(joke);
          console.log(this._subs);
        })
    );
  }

  public onSubsOne() {
    this._icndbApiService.jokeSubject$.subscribe(joke => {
      console.log(joke);
    });
  }

  public onSubsTwo() {
    this._icndbApiService.jokeSubject$.subscribe(joke => {
      console.log(joke);
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { NorrisJokeService } from 'src/app/shared/services/icndb-api.service';

@Component({
  selector: 'app-change-detector',
  templateUrl: './change-detector.component.html',
  styleUrls: ['./change-detector.component.scss']
})
export class ChangeDetectorComponent implements OnInit {

  public jokes: string[] = [];

  constructor(private _norrisJokeService: NorrisJokeService) { }

  ngOnInit() {
    this.onGetNewJoke();
  }

  public onGetNewJoke(): void {
    this._norrisJokeService.getRandomJoke().subscribe(resp => this.jokes = [...this.jokes, resp.value.joke] );
  }

}

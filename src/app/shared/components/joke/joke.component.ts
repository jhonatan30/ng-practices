import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit, OnChanges {

  @Input('jokes') jokes: string[] = [];

  constructor() { }

  ngOnInit() { }

  ngOnChanges(_: SimpleChanges): void {
    const list: Element = document.querySelector('.jokes-list');
    setTimeout(__ => list.scrollTo({ top: list.scrollHeight, behavior: 'smooth' }), 0);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functional-programming',
  templateUrl: './functional-programming.component.html',
  styleUrls: ['./functional-programming.component.scss']
})
export class FunctionalProgrammingComponent implements OnInit {

  public tsCode: string = `
  let toUpperCase = x => x.toUpperCase();

  let exclaim = x => '/$/{x}!'

  let compose = (f1, f2) => x => f1(f2(x))

  let effusive = compose(exclaim, toUpperCase)

  effusive('test') // "TEST!"
  `;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

  public references: string[] = [
    'https://medium.com/@dtipson/creating-an-es6ish-compose-in-javascript-ac580b95104a',
    'https://www.freecodecamp.org/news/pipe-and-compose-in-javascript-5b04004ac937/'
  ];

  public composeDef: string = `const compose = (...fns) =>
fns.reduceRight((prevFn, nextFn) =>
  (...args) => nextFn(prevFn(...args)),
  value => value
);`;

  public composeCodeOne: string = `const toUpperCase = x => x.toUpperCase();
const exclaim = x => '\${x}!'

const compose = (f1, f2) => x => f1(f2(x));

const effusive = compose(exclaim, toUpperCase);

effusive('Hello World'); // HELLO WORLD!`;

  constructor() { }

  ngOnInit() {
  }

}

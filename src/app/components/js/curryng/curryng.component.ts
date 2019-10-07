import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curryng',
  templateUrl: './curryng.component.html',
  styleUrls: ['./curryng.component.scss']
})
export class CurryngComponent implements OnInit {

  public references: string[] = [
    'https://www.youtube.com/watch?v=iZLP4qOwY8I'
  ];

  public curryngCodeOne: string = `// add(a, b, c) = add(a)(b)(c);
const add = x => y => x + y;

add(2)(1); // returns 3

add(2); // returns a function y => 2 + y`;

  public curryngCodeTwo: string = `let dragon = (name, size, element) =>
name + ' is a ' +
size + ' dragon that breathes' +
element + '!'`;

  public curryngCodeThree: string = `let dragon =
name =>
  size =>
  element =>
    name + ' is a ' +
    size + ' dragon that breathes ' +
    element + '!'

console.log(dragon('drogo')('tiny')('ice'));`;

  constructor() { }

  ngOnInit() {
  }

}

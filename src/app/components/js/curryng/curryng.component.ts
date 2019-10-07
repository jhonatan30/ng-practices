import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curryng',
  templateUrl: './curryng.component.html',
  styleUrls: ['./curryng.component.scss']
})
export class CurryngComponent implements OnInit {

  public curryngCodeOne: string = `// add(a, b, c) = add(a)(b)(c);
const add = x => y => x + y;

add(2)(1); // returns 3

add(2); // returns a function y => 2 + y`;

  constructor() { }

  ngOnInit() {
  }

}

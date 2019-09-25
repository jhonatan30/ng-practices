import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-info',
  templateUrl: './my-info.component.html',
  styleUrls: ['./my-info.component.scss']
})
export class MyInfoComponent implements OnInit {

  completeName: 'Jhonatan S.';

  name: string = 'JS';

  constructor() { }

  ngOnInit() {
    setInterval(() => {

    }, 1000);
  }

}

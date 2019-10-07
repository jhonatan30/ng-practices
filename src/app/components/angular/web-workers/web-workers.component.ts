import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-workers',
  templateUrl: './web-workers.component.html',
  styleUrls: ['./web-workers.component.scss']
})
export class WebWorkersComponent implements OnInit {

  public references: string[] = [
    'https://www.youtube.com/watch?v=Kz_zKXiNGSE'
  ];

  constructor() { }

  ngOnInit() {

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-optimization',
  templateUrl: './optimization.component.html',
  styleUrls: ['./optimization.component.scss']
})
export class OptimizationComponent implements OnInit {

  public references: string[] = [
    'https://medium.com/better-programming/angular-preformance-considerations-12c909ac923b',
    'https://www.youtube.com/watch?v=Kz_zKXiNGSE',
    'https://www.youtube.com/watch?v=0wvZ7gakqV4'
  ];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SimpleListItem } from 'src/app/shared/models/menu-item.model';

export const TECHNOLOGIES: SimpleListItem[] = [
  { img: '', title: 'Hibernate', description: '' }
];

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  public technologies: SimpleListItem[] = [];
  public technologies$ = new BehaviorSubject(this.technologies);

  constructor() { }

  ngOnInit() {
    this.technologies = [...TECHNOLOGIES];
    this.technologies$.next(this.technologies);

  }

}

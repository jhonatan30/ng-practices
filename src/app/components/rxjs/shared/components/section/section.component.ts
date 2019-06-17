import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input('path') path: string = '';
  @Input('label') label: string = '';
  @Input('isActive') isActive: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() { }

  public onNavigateTo(): void {
    this.router.navigateByUrl(this.path);

  }

}

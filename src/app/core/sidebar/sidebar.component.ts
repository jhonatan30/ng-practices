import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems = [
    {
      url: 'rxjs',
      label: 'RxJs',
      icon: 'fas fa-prescription'
    },
    {
      url: 'promises',
      label: 'Promises',
      icon: 'fas fa-stream'
    },
  ];


  constructor(private _router: Router) { }

  ngOnInit() {
  }


  public onSelectMenuItem(url: string): void {
    this._router.navigateByUrl(url);
  }

  public isItemActive(url: string): boolean {
    return this._router.url.includes(url);
  }

}

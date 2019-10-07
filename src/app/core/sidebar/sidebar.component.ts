import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarItem } from '../shared/models/sidebar-menu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: SidebarItem[] = [
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
    {
      url: 'javascript',
      label: 'Javascript',
      icon: 'fab fa-js-square'
    },
    {
      url: 'paradigms',
      label: 'Paradigms',
      icon: 'fas fa-bezier-curve'
    },
    {
      url: 'git',
      label: 'Git',
      icon: 'fas fa-code-branch'
    },
    {
      url: 'angular',
      label: 'Angular',
      icon: 'fab fa-angular'
    },
    {
      url: 'technologies',
      label: 'Technologies',
      icon: 'fas fa-laptop-code'
    }
  ];


  constructor(private _router: Router) { }

  ngOnInit() {
    this.isItemActive(this._router.url);
  }


  public onSelectMenuItem(url: string): void {
    this._router.navigateByUrl(url);
  }

  public isItemActive(url: string): boolean {
    return this._router.url.includes(url);
  }

}

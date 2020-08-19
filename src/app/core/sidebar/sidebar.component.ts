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
      url: 'sports',
      label: 'Sports',
      icon: 'fas fa-futbol'
    },
    {
      url: 'pixel-avatar',
      label: 'Pixel Avatar',
      icon: 'fas fa-chess-board'
    },
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

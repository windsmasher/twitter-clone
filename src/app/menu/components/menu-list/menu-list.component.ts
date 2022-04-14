import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  menuItems: MenuItem[] = [
    {
      title: 'Home',
      image: '../../../../assets/home-icon.png',
    },
    {
      title: 'Explore',
      image: '../../../../assets/home-icon.png',
    },
    {
      title: 'Notifications',
      image: '../../../../assets/home-icon.png',
    },
    {
      title: 'Messages',
      image: '../../../../assets/home-icon.png',
    },
    {
      title: 'Bookmarks',
      image: '../../../../assets/home-icon.png',
    },
    {
      title: 'Lists',
      image: '../../../../assets/home-icon.png',
    },
    {
      title: 'Profile',
      image: '../../../../assets/home-icon.png',
    },
    {
      title: 'More',
      image: '../../../../assets/home-icon.png',
    },
  ];
}

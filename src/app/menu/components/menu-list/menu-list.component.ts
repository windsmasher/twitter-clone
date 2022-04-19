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
      link: 'posts',
    },
    {
      title: 'Explore',
      image: '../../../../assets/home-icon.png',
      link: '',
    },
    {
      title: 'Notifications',
      image: '../../../../assets/home-icon.png',
      link: '',
    },
    {
      title: 'Messages',
      image: '../../../../assets/home-icon.png',
      link: 'messages',
    },
    {
      title: 'Bookmarks',
      image: '../../../../assets/home-icon.png',
      link: '',
    },
    {
      title: 'Lists',
      image: '../../../../assets/home-icon.png',
      link: '',
    },
    {
      title: 'Profile',
      image: '../../../../assets/home-icon.png',
      link: '',
    },
    {
      title: 'More',
      image: '../../../../assets/home-icon.png',
      link: '',
    },
  ];
}

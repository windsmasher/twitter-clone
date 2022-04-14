import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() menuItem: MenuItem = {
    title: '',
    image: '',
  };
}

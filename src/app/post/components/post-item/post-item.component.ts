import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() post: Post = { author: 'No data', content: 'No data' };
}

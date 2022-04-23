import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss'],
})
export class PostContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  postList: Post[] = [];

  newPostEventHandler = (event: Event) => {
    console.log('container recived post: ', event);
    this.postList.push(event as any);
  };
}

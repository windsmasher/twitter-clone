import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss'],
})
export class PostAddComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  postContent = new FormControl('');
  profileImgSrc = '../../../../assets/profile.png';
  @Output() newPostEvent: EventEmitter<any> = new EventEmitter();

  onPostInput = () => {};

  addPost = () => {
    const post: Post = { content: this.postContent.value, author: 'Tomasz' };
    this.newPostEvent.emit(post);
  };
}

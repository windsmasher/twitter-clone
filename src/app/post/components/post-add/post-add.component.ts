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
  @Output() newPostEvent: EventEmitter<any> = new EventEmitter();

  onPostInput = () => {};

  addPost = () => {
    console.log(this.postContent.value);
    const post: Post = { content: this.postContent.value, author: 'TP' };
    this.newPostEvent.emit(post);
  };
}

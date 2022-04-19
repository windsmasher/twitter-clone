import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss'],
})
export class PostAddComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  postContent = new FormControl('');

  onPostInput = () => {
    console.log(this.postContent.value);
  };
}

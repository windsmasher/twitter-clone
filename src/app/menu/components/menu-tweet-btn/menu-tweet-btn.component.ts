import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tweet-btn',
  template: '<div class="tweet-btn">Tweet</div>',
  styles: [
    `
      .tweet-btn {
        background-color: #1d9bf0;
        display: flex;
        justify-content: center;
        text-align: center;
        padding: 20px;
        color: white;
        font-weight: 500;
        border-radius: 30px;
        margin-top: 20px;
        cursor: pointer;
        &:hover {
          background-color: #198cd8;
        }
      }
    `,
  ],
})
export class MenuTweetBtnComponent {}

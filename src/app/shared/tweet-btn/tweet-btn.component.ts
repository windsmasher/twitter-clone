import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-tweet-btn',
  template: `<div
    class="tweet-btn"
    [style.font-size]="fontSize + 'px'"
    [style.padding]="padding + 'px'"
    [style.width]="width + 'px'"
  >
    Tweet
  </div>`,
  styles: [
    `
      .tweet-btn {
        background-color: #1d9bf0;
        display: flex;
        justify-content: center;
        text-align: center;
        color: white;
        font-weight: 500;
        border-radius: 30px;
        margin-top: 20px;
        cursor: pointer;
        font-size: 20px;
        &:hover {
          background-color: #198cd8;
        }
      }
    `,
  ],
})
export class MenuTweetBtnComponent {
  @Input() fontSize: number = 20;
  @Input() padding: number = 20;
  @Input() width: number = 200;
}

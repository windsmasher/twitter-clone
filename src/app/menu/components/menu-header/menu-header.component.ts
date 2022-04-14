import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  template: '<div class="img-container"><img src={{logoImgSrc}} alt=""></div>',
  styles: [
    `
      .img-container {
        border-radius: 50%;
        margin-bottom: 20px;
        padding: 20px;
        cursor: pointer;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          background-color: #ebf5fe;
        }
        img {
          width: 40px;
        }
      }
    `,
  ],
})
export class MenuHeaderComponent {
  logoImgSrc = '../../../../assets/twitter.png';
}

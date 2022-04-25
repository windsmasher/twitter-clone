import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app/app-container/app.component';
import { PostContainerComponent } from './app/post/components/post-container/post-container.component';
import { PostListComponent } from './app/post/components/post-list/post-list.component';
import { MenuContainerComponent } from './app/menu/components/menu-container/menu-container.component';
import { NewsContainerComponent } from './app/news/components/news-container/news-container.component';
import { MenuHeaderComponent } from './app/menu/components/menu-header/menu-header.component';
import { MenuListComponent } from './app/menu/components/menu-list/menu-list.component';
import { MenuItemComponent } from './app/menu/components/menu-item/menu-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './app/message/components/message-container/message.component';
import { PostAddComponent } from './app/post/components/post-add/post-add.component';
import { CommonModule } from '@angular/common';
import { MenuTweetBtnComponent } from './app/shared/tweet-btn/tweet-btn.component';
import { PostItemComponent } from './app/post/components/post-item/post-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PostContainerComponent,
    PostListComponent,
    MenuContainerComponent,
    NewsContainerComponent,
    MenuHeaderComponent,
    MenuListComponent,
    MenuItemComponent,
    MenuTweetBtnComponent,
    MessageComponent,
    PostAddComponent,
    PostItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostContainerComponent } from '../post/components/post-container/post-container.component';
import { PostListComponent } from '../post/components/post-list/post-list.component';
import { MenuContainerComponent } from '../menu/components/menu-container/menu-container.component';
import { NewsContainerComponent } from '../news/components/news-container/news-container.component';
import { MenuHeaderComponent } from '../menu/components/menu-header/menu-header.component';
import { MenuListComponent } from '../menu/components/menu-list/menu-list.component';
import { MenuItemComponent } from '../menu/components/menu-item/menu-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from '../message/components/message-container/message.component';
import { PostAddComponent } from '../post/components/post-add/post-add.component';
import { CommonModule } from '@angular/common';
import { MenuTweetBtnComponent } from '../shared/tweet-btn/tweet-btn.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

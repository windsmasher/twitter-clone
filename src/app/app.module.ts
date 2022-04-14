import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostContainerComponent } from './post/components/post-container/post-container.component';
import { PostListComponent } from './post/components/post-list/post-list.component';
import { MenuContainerComponent } from './menu/components/menu-container/menu-container.component';
import { NewsContainerComponent } from './news/components/news-container/news-container.component';
import { MenuHeaderComponent } from './menu/components/menu-header/menu-header.component';
import { MenuListComponent } from './menu/components/menu-list/menu-list.component';
import { MenuItemComponent } from './menu/components/menu-item/menu-item.component';
import { MenuTweetBtnComponent } from './menu/components/menu-tweet-btn/menu-tweet-btn.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

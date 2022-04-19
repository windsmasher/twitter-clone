import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from '../message/components/message-container/message.component';
import { PostContainerComponent } from '../post/components/post-container/post-container.component';

const routes: Routes = [
  { path: 'posts', component: PostContainerComponent },
  { path: 'messages', component: MessageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

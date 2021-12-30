import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PostsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [UserService, PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}

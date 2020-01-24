import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BlogService } from './blog.service';
import { BlogComponent } from './blog/blog.component';
import { BlogListComponent } from './blog-list/blog-list.component';

const appRoutes: Routes = [
 {path:'',component: BlogListComponent},
 {path:'blog/:id', component: BlogComponent}
]
const routes = RouterModule.forRoot(appRoutes)

@NgModule({
  imports:      [ BrowserModule, FormsModule, routes],
  declarations: [ AppComponent, HelloComponent, BlogComponent, BlogListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BlogService]
})
export class AppModule { }

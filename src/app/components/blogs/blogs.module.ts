import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { AddblogsComponent } from './addblogs/addblogs.component';
import { EditblogsComponent } from './editblogs/editblogs.component';
import { ViewblogsComponent } from './viewblogs/viewblogs.component';


@NgModule({
  declarations: [
    AddblogsComponent,
    EditblogsComponent,
    ViewblogsComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }

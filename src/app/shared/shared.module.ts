import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './Components/breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentLayoutComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { AddProjectComponent } from './add-project/add-project.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ViewProjectComponent } from './view-project/view-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AddProjectComponent,
    ViewProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    AngularEditorModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ]
})
export class ProjectsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { ViewProjectComponent } from './view-project/view-project.component';

const routes: Routes = [
  {path:'',redirectTo:'addProject',pathMatch:'full'},
  {path:'addProject',component:AddProjectComponent},
  {path:'viewProject',component:ViewProjectComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }

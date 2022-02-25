import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddblogsComponent } from './addblogs/addblogs.component';
import { EditblogsComponent } from './editblogs/editblogs.component';
import { ViewblogsComponent } from './viewblogs/viewblogs.component';

const routes: Routes = [
  {path:'',redirectTo:'addblog',pathMatch:'full'},
  {path:'addblog',component:AddblogsComponent},
  {path:'editblog',component:EditblogsComponent},
  {path:'viewblog',component:ViewblogsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }

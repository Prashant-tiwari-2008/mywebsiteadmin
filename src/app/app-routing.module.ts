import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './shared/layout/content-layout/content-layout.component';
import { contentRoutes } from './shared/routes/content-routes';

const routes: Routes = [
  {path:'',component:ContentLayoutComponent,children:contentRoutes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

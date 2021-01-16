import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { execPath } from 'process';
import { HomeComponent } from './Home/components/home.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  { path: 'about', loadChildren: ()=> import('./About/about.module').then(m=> m.AboutModule) },
  {path: 'workAndEducation', loadChildren:()=> import('./WorkAndEducation/workEducation.module').then(m=> m.WorknEducationModule)},
  {path: 'pocs', loadChildren:()=> import('./POCs/pocs.module').then(m=> m.PocsModule)},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

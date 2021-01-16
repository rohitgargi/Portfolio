import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { WorknEducationComponent } from './components/workn-education/workn-education.component';


const routes: Routes = [
    {
      path: '',
      component: WorknEducationComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class WorknEducationRoutingModule{

}
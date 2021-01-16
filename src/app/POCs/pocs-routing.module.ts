import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { PocsComponent } from './pocs/pocs.component';


const routes: Routes = [
    {
      path: '',
      component: PocsComponent
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PocsRoutingModule{

}
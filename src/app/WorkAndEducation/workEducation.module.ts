import { NgModule } from '@angular/core';
import { WorknEducationComponent } from './components/workn-education/workn-education.component';
import { WorknEducationRoutingModule } from './worknEducation-routing.module';


@NgModule({
  declarations: [
    WorknEducationComponent
  ],
  imports: [
    WorknEducationRoutingModule
  ],
  providers: [],
  exports:[WorknEducationComponent]
})
export class WorknEducationModule { }
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WorknEducationComponent } from './components/workn-education/workn-education.component';
import { WorknEducationRoutingModule } from './worknEducation-routing.module';


@NgModule({
  declarations: [
    WorknEducationComponent
  ],
  imports: [
    CommonModule,
    WorknEducationRoutingModule
  ],
  providers: [],
  exports:[WorknEducationComponent]
})
export class WorknEducationModule { }
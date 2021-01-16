import { NgModule } from '@angular/core';
import { PocsRoutingModule } from './pocs-routing.module';
import { PocsComponent } from './pocs/pocs.component';


@NgModule({
  declarations: [
    PocsComponent
  ],
  imports: [
    PocsRoutingModule
  ],
  providers: [],
  exports:[PocsComponent]
})
export class PocsModule { }
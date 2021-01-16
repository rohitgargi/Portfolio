import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './components/about.component';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
      AboutRoutingModule
  ],
  providers: [],
  exports:[AboutComponent]
})
export class AboutModule { }
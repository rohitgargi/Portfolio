import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './components/about.component';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
      CommonModule,
      AboutRoutingModule
  ],
  providers: [],
  exports:[AboutComponent]
})
export class AboutModule { }
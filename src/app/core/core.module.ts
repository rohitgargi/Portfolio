import { PortfolioHeader } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StickyElementDirective } from '../Shared/directives/stickyElement.directive';


@NgModule({
    declarations: [StickyElementDirective, PortfolioHeader],
    imports: [
      RouterModule
    ],
    exports:[PortfolioHeader],
    providers: [],
    bootstrap: []
  })
  export class CoreModule { }
  
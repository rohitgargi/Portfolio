import { Component,HostListener } from '@angular/core';

@Component({
    selector: 'portfolio-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class PortfolioHeader{
    

    onTogglerClick(e:any){
        console.log(e.target)
    }
}
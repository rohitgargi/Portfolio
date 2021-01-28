import { IAbout } from './../../models/IAbout';
import { ApiService } from 'src/app/Shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'portfolio-about',
    templateUrl: './about.component.html',
    styleUrls:['./about.component.scss']
})

export class AboutComponent implements OnInit {
    aboutDetail:IAbout
    constructor(private aboutService: ApiService){

    }

    ngOnInit(){
        this.aboutService.getAboutDetail('about').subscribe(detail =>{
            console.log(detail)
            this.aboutDetail = detail;
        })
    }
}
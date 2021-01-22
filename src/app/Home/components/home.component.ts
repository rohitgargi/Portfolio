import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Shared/services/api.service';

@Component({
    selector: 'portfolio-home',
    templateUrl :'./home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
    basicDetail:any;
    constructor(private apiservice: ApiService){
        
    }
    
    ngOnInit(){
        this.getBasicDetail();
    }

    getBasicDetail() {
        this.apiservice.getBasicDetail('home').subscribe( res =>{
            if(res){
                this.basicDetail = res;
            }
        })
    }
}
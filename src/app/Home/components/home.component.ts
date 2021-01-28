import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Shared/services/api.service';

@Component({
    selector: 'portfolio-home',
    templateUrl :'./home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{
    basicDetail:any;
    quoteObj:any;
    constructor(private apiservice: ApiService){
        
    }
    
    ngOnInit(){
        this.getBasicDetail();
        this.getQuotes();
    }

    getBasicDetail() {
        this.apiservice.getBasicDetail('home').subscribe( res =>{
            if(res){
                this.basicDetail = res;
            }
        })
    }
    generateRandomIndex(arLength){
        return Math.floor(Math.random()* arLength + 1)
    }

    getQuotes(){
        this.apiservice.getQuotes().subscribe(res => {
            if(res && res.length){
                let index  = this.generateRandomIndex(res.length);
                this.quoteObj = res[index];
            }
        })
    }

}
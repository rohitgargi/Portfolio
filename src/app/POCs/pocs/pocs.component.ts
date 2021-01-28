import { IPoc } from './../../models/IPoc';
import { ApiService } from 'src/app/Shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocs',
  templateUrl: './pocs.component.html',
  styleUrls: ['./pocs.component.scss']
})
export class PocsComponent implements OnInit {
  pocList:IPoc[];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getPocs();
  }

  getPocs(){
    this.apiService.getPocs('pocs').subscribe(pocs=>{
      if(pocs.length){
        this.pocList = pocs;
      }
    })
  }

}

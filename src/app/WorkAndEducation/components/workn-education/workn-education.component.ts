import { IExperience } from './../../../models/IExperience';
import { ApiService } from 'src/app/Shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-workn-education',
  templateUrl: './workn-education.component.html',
  styleUrls: ['./workn-education.component.scss']
})
export class WorknEducationComponent implements OnInit {
  timeline: IExperience[];
  selectedTab:string;
  constructor(private apiservice : ApiService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.selectedTab = params.tab && params.tab === 'exp' ? 'exp' : (params.tab && params.tab === 'edu' ? 'edu' : 'exp');
    })
    this.getTimeLineData();
    
  }

  getTimeLineData(){
    let tabValue = this.selectedTab === 'exp' ? 'expTimeLine':'eduTimeLine';
    this.apiservice.getTimeline(tabValue).subscribe(timeline => {
      this.timeline = timeline;
      this.router.navigate([], {relativeTo: this.route, queryParams: {'tab': this.selectedTab}});
    })
  }

  onTabClick(value):void{
    console.log(value);
    if(value === 'exp'&& this.selectedTab!=='exp'){
      this.selectedTab = 'exp';
      this.getTimeLineData();
    }

    if(value === 'edu'&& this.selectedTab!=='edu'){
      this.selectedTab = 'edu';
      this.getTimeLineData();
    }
  }

}

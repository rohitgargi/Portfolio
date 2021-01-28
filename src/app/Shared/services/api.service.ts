import { IPoc } from './../../models/IPoc';
import { IExperience } from './../../models/IExperience';
import { IAbout } from './../../models/IAbout';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {Constants} from './constants.service';
import { Observable } from "rxjs";
import { IBasic } from "src/app/models/IBasic";

@Injectable({
    providedIn:'root'
})

export class ApiService{
    constructor(private http: HttpClient, private constants: Constants){

    }

    getBasicDetail(param):Observable<IBasic>{
        const url = this.constants.baseurl;
        return this.http.get<IBasic>(url+'/'+param);
    }

    getAboutDetail(param):Observable<IAbout>{
        const url = this.constants.baseurl;
        return this.http.get<IAbout>(url+'/'+param);
    }

    getTimeline(param):Observable<IExperience[]>{
        const url = this.constants.baseurl;
        return this.http.get<IExperience[]>(url+'/'+param);
    }

    //http://quotes.stormconsultancy.co.uk/quotes.json

    getQuotes():Observable<any[]>{
        const url = this.constants.baseurl;
        return this.http.get<any[]>('http://quotes.stormconsultancy.co.uk/quotes.json');
    }
    getPocs(param):Observable<IPoc[]>{
        const url = this.constants.baseurl;
        return this.http.get<IPoc[]>(url+'/'+param);
    }
}
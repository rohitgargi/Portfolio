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
}
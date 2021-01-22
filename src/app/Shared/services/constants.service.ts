import { Injectable } from '@angular/core';


@Injectable({
    providedIn:'root'
})

export class Constants{
    readonly baseurl: string = 'http://localhost:3000'
}
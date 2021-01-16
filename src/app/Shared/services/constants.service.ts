import { Injectable } from '@angular/core';


@Injectable({
    providedIn:'root'
})

export class Constants{
    readonly baseurl: string = 'https://portfolio-b30d8-default-rtdb.firebaseio.com/'
}
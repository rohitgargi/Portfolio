import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse} from "@angular/common/http";
import { Injectable } from "@angular/core";
Injectable();


export class HttpConfigInterceptor implements HttpInterceptor{
        intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            return next.handle(request).pipe(
                map((val: HttpEvent<any>) => {
                    if (val instanceof HttpResponse) {
                        console.log('event--->>>', val);
                    }
                    return val;
                })
            );
        }
        
}
/*
 * @CreateTime: Sep 6, 2018 4:45 PM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Dec 12, 2018 3:09 PM
 * @Description: Http Intercepter to modify passing http request
 */
import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpInterceptor,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class RmHeaderInterceptorService implements HttpInterceptor {
  constructor(private location: ActivatedRoute) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // get the requested url eg:// /api/something
    const requestUrl = request.url;
    // modify request content-type header to application/json

    // check the request method used
    if (request.method === 'GET') {
      const modifiedRequest = request.clone({
        url: `http://ilo.appdiv.com/backend/index.php/${requestUrl}`,
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8',
          Accept: 'application/json'
        }
      });
      return next.handle(modifiedRequest);
    } else if (request.method === 'POST') {
      const modifiedRequest = request.clone({
        url: `http://ilo.appdiv.com/backend/index.php/${requestUrl}`,
        setHeaders: {
          'Content-Type': 'application/json; charset=utf-8'
        }
      });
      return next.handle(modifiedRequest);
    }
  }
}

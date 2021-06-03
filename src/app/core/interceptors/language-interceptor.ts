import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
     {
      const lang = JSON.parse(localStorage.getItem('lang') || ' ');
      const req = request.clone({
        headers: request.headers.append('Accept-Language', `${lang}`),
      });
      return next.handle(req);
    }
  }
}

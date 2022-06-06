import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BackendApiService } from '../services/backend-api.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private backendservice: BackendApiService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userToken = this.backendservice.Token;
    if(userToken === ''){
      return next.handle(request)
    }

    const newReq = request.clone({
      setHeaders: { Authorization: `Bearer ${userToken}` },
    });

    return next.handle(newReq);
  }
}

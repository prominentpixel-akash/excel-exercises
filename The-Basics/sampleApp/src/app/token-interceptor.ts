import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {InMemoryCache} from './in-memory-cache';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(private inMemoryCache: InMemoryCache) {
  }

  ngOnInit() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const withoutTokenRequestURLS = ['/token', '/get-all-users'];

    let isRequestWithoutToken = false;
    withoutTokenRequestURLS.forEach(elements => {
      if (request.url.includes(elements)) {
        isRequestWithoutToken = true;
      }
    });

    if (!isRequestWithoutToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.inMemoryCache.getData('TOKEN')}`
        }
      });
    }

    /*  return next.handle(request).pipe(tap(() => {
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401) {
              this.router.navigateByUrl('/');
              //    logout
            } else if (err.status == 404) {
              this.router.navigateByUrl('/404');
            } else if (err.status == 403) {
              this.router.navigateByUrl('/403');
            } else {
              return;
            }
          }
        }));*/
    return next.handle(request);
  }
}

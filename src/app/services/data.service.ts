import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError, BadInputError, NotFoundError } from './app.error';


export const API_URL = new InjectionToken<string>('url');
@Injectable()
export class DataService {
  constructor(private http: HttpClient, @Inject(API_URL) private url: string) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(
        map(response => response)      );
  }

  create(resource: any) {
    return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  update(resource: any) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  delete(id: string) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    if (error.status === 400)
      return throwError(new BadInputError(error));

    if (error.status === 404)
      return throwError(new NotFoundError());

    return throwError(new AppError(error));
  }
}

import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorsService } from './errors.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private errorsService: ErrorsService,
    private storageService: StorageService,
  ) { }

  get token(): string {
    return this.storageService.get<string>('TOKEN');
  }

  get getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', `${this.token}`);
  }

  get getHeadersFile(): HttpHeaders {
    return new HttpHeaders()
      .append('Access-Control-Allow-Origin', '*')
      .append('Authorization', `${this.token}`);
  }

  get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(url, { headers: this.getHeaders, params}).pipe(
      catchError((error) => this.handleError(error)),
    );
  }

  post<T>(url: string, body: string): Observable<T> {
    return this.http.post<T>(url, body, { headers: this.getHeaders }).pipe(
      catchError((error) => this.handleError(error)),
    );
  }

  put<T>(url: string, body: string): Observable<T> {
    return this.http.put<T>(url, body, { headers: this.getHeaders }).pipe(
      catchError((error) => this.handleError(error)),
    );
  }

  delete<T>(url: string, params?: HttpParams, body = null): Observable<T> {
    return this.http.request<T>('delete', url, { body, headers: this.getHeaders, params }).pipe(
      catchError((error) => this.handleError(error)),
    );
  }

  postFile<T>(url: string, body: FormData): Observable<T> {
    return this.http.post<T>(url, body, { headers: this.getHeadersFile }).pipe(
      catchError((error) => this.handleError(error)),
    );
  }

  putFile<T>(url: string, body: FormData): Observable<T> {
    return this.http.put<T>(url, body, { headers: this.getHeadersFile }).pipe(
      catchError((error) => this.handleError(error)),
    );
  }


  private handleError(error: HttpErrorResponse): Observable<never> {
    const extractError = this.errorsService.extract(error);
    return throwError(extractError);
  }

}

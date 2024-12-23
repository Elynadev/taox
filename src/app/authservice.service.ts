import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, email, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        catchError(this.handleError)
      );
  }

  createUser(username: string, email: string, password: string, firstName: string, lastName: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-user`, { username, email, password, firstName, lastName })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Une erreur est survenue', error);
    return throwError(() => new Error('Erreur lors de la requête'));
  }
}

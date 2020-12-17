import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Jsonplaceholder } from 'src/app/_models/jsonplaceholder.model';

@Injectable({
  providedIn: 'root',
})
export class Page1Service {
  mockUrl: string = 'http://localhost:3000/mockData';

  constructor(private http: HttpClient) {}

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  getMockData(): Observable<Jsonplaceholder[]> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');

    return this.http
      .get<Jsonplaceholder[]>(this.mockUrl, {
        headers,
      })
      .pipe(catchError(this.handleError));
  }

  deleteMockRow(id: number): Observable<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');

    return this.http
      .delete<Jsonplaceholder>(`${this.mockUrl}/${id}`, {
        headers,
      })
      .pipe(catchError(this.handleError));
  }

  addMockRow(mockRow: Jsonplaceholder) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');

    return this.http
      .post<Jsonplaceholder>(`${this.mockUrl}`, mockRow, {
        headers,
      })
      .pipe(
        tap((_) => console.log(`Added row with id=${mockRow.id}`)),
        catchError(this.handleError)
      );
  }

  updateMockRow(mockRow: Jsonplaceholder) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');

    return this.http
      .put<Jsonplaceholder>(`${this.mockUrl}/${mockRow.id}`, mockRow, {
        headers,
      })
      .pipe(
        tap((_) => console.log(`updated hero id=${mockRow.id}`)),
        catchError(this.handleError)
      );
  }
}

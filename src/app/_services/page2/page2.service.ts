import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Jsonplaceholder } from 'src/app/_models/jsonplaceholder.model';

@Injectable({
  providedIn: 'root',
})
export class Page2Service {
  constructor(private http: HttpClient) {}

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  getUnsplashData(term: string): Observable<Jsonplaceholder[]> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', 'GET')
      .append('Access-Control-Allow-Origin', '*');

      const accesskey = "aI-fBCSx-iZZhHmpdA_EtangR7iHLO-jK_h9_n5b7hQ";
    return this.http
      .get<Jsonplaceholder[]>(
        `https://api.unsplash.com/search/photos?query=${term}&page=1&orientation=landscape&client_id=${accesskey}`,
        {
          headers,
        }
      )
      .pipe(catchError(this.handleError));
  }
}

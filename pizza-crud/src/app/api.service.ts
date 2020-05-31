import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Pizza } from './pizza';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://api.ynov.jcatania.io/pizza';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(apiUrl)
      .pipe(
        tap(pizza => console.log('fetched pizzas')),
        catchError(this.handleError('getPizzas', []))
      );
  }

  getPizza(id: any): Observable<Pizza> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Pizza>(url).pipe(
      tap(_ => console.log(`fetched pizza id=${id}`)),
      catchError(this.handleError<Pizza>(`getPizza id=${id}`))
    );
  }

  addPizza(pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(apiUrl, pizza, httpOptions).pipe(
      tap((pizz: Pizza) => console.log(`added pizza w/ id=${pizz.id}`)),
      catchError(this.handleError<Pizza>('addPizza'))
    );
  }

  updatePizza(id: any, pizza: any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, pizza, httpOptions).pipe(
      tap(_ => console.log(`updated pizza id=${id}`)),
      catchError(this.handleError<any>('updatePizza'))
    );
  }

  deletePizza(id: any): Observable<Pizza> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Pizza>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted pizza id=${id}`)),
      catchError(this.handleError<Pizza>('deletePizza'))
    );
  }
}

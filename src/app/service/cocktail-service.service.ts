import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Cocktail } from '../models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private readonly cocktailApi = "assets/cocktails.json";
  constructor(public http: HttpClient) { }

  public getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.cocktailApi).pipe(
      tap(cocktail=>console.log('cocktails:', cocktail))
    );
  }

}
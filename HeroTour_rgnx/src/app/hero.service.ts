import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, observable, Observable, of } from 'rxjs';
import { Hero } from './hero/heroes';
import { HEROES } from './hero/mock-heroes';
import { heroesReducer } from './ngrx/heroes.reducer';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  private heroesUrl = 'api/heroes';  // URL to web api

  hero? : Observable<Hero>;

  constructor(
    private http: HttpClient
  ) {

   }


  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: Number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url);
  }

}

import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, observable, Observable, of, tap} from 'rxjs';
import { Hero } from './hero/heroes';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Hero[] = [];

  private heroesUrl = 'api/heroes';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  hero? : Observable<Hero>;

  constructor(
    private http: HttpClient
  ) {

   }


  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }



  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url);
  }


  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero>  {
    if (!(hero.name?.trim() == null)){
      return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
        tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
        //catchError(this.handleError<Hero>('addHero'))
      );
    }
    return new Observable<Hero>();
  }

  /** PUT: update the hero on the server */

  updateHero(hero: Hero): Observable<any> {

    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
    );

  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
    );
  }

  private log(s: string) {
    console.log(s);
  }

}

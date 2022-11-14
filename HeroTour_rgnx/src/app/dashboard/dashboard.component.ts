import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, VirtualTimeScheduler } from 'rxjs';
import { HeroService } from '../hero.service';
import { Hero } from '../hero/heroes';
import { GetAllHeroesAction } from '../ngrx/heroes.actions';
import { HeroesState,HeroesStateEnum } from '../ngrx/heroes.reducer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  heroesState: Observable<HeroesState> | null = null;
  readonly HeroesStateEnum = HeroesStateEnum;

  constructor(private heroService: HeroService,private store: Store<any>) { }

  ngOnInit(): void {
    this.heroesState = this.store.pipe(
      map((state)=> state.heroesState)
    )
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    this.store.dispatch(new GetAllHeroesAction({}));
  }


}

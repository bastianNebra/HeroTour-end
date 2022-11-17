import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { HeroService } from '../hero.service';
import { Hero } from '../hero/heroes';
import {
  DeleteHeroAction,
  DeleteHeroActionSuccess,
  GetAllHeroesAction,
  GetSelectedHeroAction
} from '../state/heroes.actions';
import { HeroesState, HeroesStateEnum } from '../state/heroes.reducer';
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroesState: Observable<HeroesState> | null = null;
  readonly HeroesStateEnum = HeroesStateEnum;
  private heroes: any;

  constructor(private heroService: HeroService,
              private store:Store<any>,
              private router:Router) { }

  ngOnInit(): void {
    this.heroesState = this.store.pipe(
      map((state)=> state.heroesState)
    );
    this.onGetAllHeroes();
  }


  onGetAllHeroes(){
    this.store.dispatch(new GetAllHeroesAction({}))
  }

  onEdit(hero: Hero) {
    this.router.navigateByUrl("hero-details/"+hero.id)
  }

  onDelete(hero: Hero) {
      this.store.dispatch(new DeleteHeroAction(hero));
  }

}

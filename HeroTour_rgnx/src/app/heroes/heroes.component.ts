import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { HeroService } from '../hero.service';
import { Hero } from '../hero/heroes';
import { GetAllHeroesAction } from '../ngrx/heroes.actions';
import { HeroesState, HeroesStateEnum } from '../ngrx/heroes.reducer';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroesState: Observable<HeroesState> | null = null;
  readonly HeroesStateEnum = HeroesStateEnum;

  constructor(private heroService: HeroService,private store:Store<any>) { }

  ngOnInit(): void {
    this.heroesState = this.store.pipe(
      map((state)=> state.heroesState)
    );

    this.onGetAllHeroes();
  }


  onGetAllHeroes(){
    this.store.dispatch(new GetAllHeroesAction({}))
  }

  onGetSelectedHeroes(){

  }


  //


}

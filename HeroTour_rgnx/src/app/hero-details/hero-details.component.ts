import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero/heroes";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero.service";
import {Location} from "@angular/common";
import {GetSelectedHeroAction} from "../ngrx/heroes.actions";
import {Store} from "@ngrx/store";
import {map, Observable} from "rxjs";
import {HeroesState, HeroesStateEnum} from "../ngrx/heroes.reducer";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})



export class HeroDetailsComponent implements OnInit {
    hero: Hero | null =null;

   id :Number  =Number(this.route.snapshot.paramMap.get("id"));

  heroState: Observable<HeroesState> | null = null;
  readonly HeroesStateEnum = HeroesStateEnum;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location : Location,
    private store : Store<any>
  ) { }

  ngOnInit(): void {

    this.onGetSelectedHeroes(this.id)


    this.heroState = this.store.pipe(
      map((state)=> state.heroesState)
    );
  }


  getHeroDetail(){
    this.heroService.getHero(this.id).subscribe(
      hero => this.hero = hero
    );
  }

  onGetSelectedHeroes(hero: Number){
    console.log(hero);
    this.store.dispatch(new GetSelectedHeroAction(hero))
  }

  goBack(): void {
    this.location.back()
  }

}

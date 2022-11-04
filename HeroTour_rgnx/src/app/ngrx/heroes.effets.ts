import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { HeroService } from "../hero.service";
import { Hero } from "../hero/heroes";
import { HEROES } from "../hero/mock-heroes";
import { GetAllHeroesActionError, GetAllHeroesActionSuccess, GetSelectedHeroActionError, GetSelectedHeroActionSuccess, HeroesActions, HeroesActionsTypes } from "./heroes.actions";

@Injectable()
export class HeroesEffects {

    constructor(private heroesService: HeroService, private effectActions: Actions){
    }


    getAllHeroesSuccessEffect : Observable<HeroesActions> = createEffect(()=>this.effectActions.pipe(
        ofType(HeroesActionsTypes.GET_ALL_HEROES),
        mergeMap((action:HeroesActions)=>{
            return  this.heroesService.getHeroes()
            .pipe(
                map((heroes) => new GetAllHeroesActionSuccess(heroes)),
                //catchError((err)=>of(new GetAllHeroesActionError(err.message)))
            )
        })
    ));

    /** Get Selected Heroes */

    getSelectedHeroesSuccessEffect : Observable<HeroesActions> = createEffect(()=>this.effectActions.pipe(
        ofType(HeroesActionsTypes.GET_SELECTED_HERO),
        mergeMap((action:HeroesActions)=>{
            return  this.heroesService.getHero(action.payload)
            .pipe(
                map((hero) => new GetSelectedHeroActionSuccess(hero)),
                //catchError((err01)=>of(new GetSelectedHeroesActionError(err01.message)))
            )
        })
    ));


}

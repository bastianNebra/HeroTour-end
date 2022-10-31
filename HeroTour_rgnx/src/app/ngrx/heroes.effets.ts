import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { HeroService } from "../hero.service";
import { Hero } from "../hero/heroes";
import { HEROES } from "../hero/mock-heroes";
import { GetAllHeroesActionError, GetAllHeroesActionSuccess, HeroesActionsTypes } from "./heroes.actions";

@Injectable()
export class HeroesEffects {

    constructor(private heroesService: HeroService, private effectActions: Actions){
    }


    getAllHeroesSuccessEffect : Observable<Action> = createEffect(()=>this.effectActions.pipe(
        ofType(HeroesActionsTypes.GET_ALL_HEROES),
        mergeMap((action)=>{
            return  this.heroesService.getHeroes()
            .pipe(
                map((heroes) => new GetAllHeroesActionSuccess(heroes)),
                catchError((err)=>of(new GetAllHeroesActionError(err.message)))
            )
        })
    ))



}
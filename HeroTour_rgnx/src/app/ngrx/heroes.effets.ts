import { Injectable } from "@angular/core";
import { Actions, createEffect, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, mergeMap, Observable, of } from "rxjs";
import { HeroService } from "../hero.service";
import { Hero } from "../hero/heroes";
import { HEROES } from "../hero/mock-heroes";
import {
  DeleteHeroActionError,
  DeleteHeroActionSuccess,
  EditHeroActionError,
  EditHeroActionSuccess,
  GetAllHeroesActionError,
  GetAllHeroesActionSuccess,
  GetSelectedHeroActionError,
  GetSelectedHeroActionSuccess,
  HeroesActions,
  HeroesActionsTypes,
  NewHeroActionSuccess, SaveHeroActionError, SaveHeroActionSuccess, UpdateHeroActionError, UpdateHeroActionSuccess
} from "./heroes.actions";

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

  /** New Hero */

  newHeroEffect : Observable<HeroesActions> = createEffect(()=>this.effectActions.pipe(
    ofType(HeroesActionsTypes.NEW_HERO),
    map((action:HeroesActions)=>{
      return new NewHeroActionSuccess({})
    })
  ));


  /** Save Hero */
  saveHeroEffect : Observable<HeroesActions> = createEffect(()=>this.effectActions.pipe(
    ofType(HeroesActionsTypes.SAVE_HERO),
    mergeMap((action:HeroesActions)=>{
      return this.heroesService.addHero(action.payload)
        .pipe(
          map((hero) => new SaveHeroActionSuccess(hero)),
          catchError((err01)=>of(new SaveHeroActionError(err01.message)))
        )
    })
  ));


  /** Edit Hero */

  editHeroEffect : Observable<HeroesActions> = createEffect(()=>this.effectActions.pipe(
    ofType(HeroesActionsTypes.EDIT_HERO),
    mergeMap((action:HeroesActions)=>{
      return this.heroesService.getHero(action.payload)
        .pipe(
          map((hero) => new EditHeroActionSuccess(hero)),
          catchError((err01)=>of(new EditHeroActionError(err01.message)))
        )
    })
  ));

  /** Update Hero */

  updateHeroEffect : Observable<HeroesActions> = createEffect(()=>this.effectActions.pipe(
    ofType(HeroesActionsTypes.UPDATE_HERO),
    mergeMap((action:HeroesActions)=>{
      return this.heroesService.updateHero(action.payload)
        .pipe(
          map((hero) => new UpdateHeroActionSuccess(hero)),
          catchError((err01)=>of(new UpdateHeroActionError(err01.message)))
        )
    })
  ));

  /** Delete Hero */

  deleteHeroEffect : Observable<HeroesActions> = createEffect(()=>this.effectActions.pipe(
    ofType(HeroesActionsTypes.DELETE_HERO),
    mergeMap((action:HeroesActions)=>{
      return this.heroesService.deleteHero(action.payload)
        .pipe(
          map((hero) => new DeleteHeroActionSuccess(hero)),
          catchError((err01)=>of(new DeleteHeroActionError(err01.message)))
        )
    })
  ));


}

import { Action } from "@ngrx/store";
import { Heroes } from "../hero/heroes";

export enum HeroesActionsTypes{
    GET_ALL_HEROES = "[Heroes] Get All Heroes",
    GET_ALL_HEROES_SUCCESS = "[Heroes] Get All Heroes Success",
    GET_ALL_HEROES_ERROR = "[Heroes] Get All Heroes Error",
}

export class GetAllHeroesAction implements Action{
    type: HeroesActionsTypes = HeroesActionsTypes.GET_ALL_HEROES;

    constructor(public payload:any){
        
    }

}

export class GetAllHeroesActionSuccess implements Action{
    type: HeroesActionsTypes = HeroesActionsTypes.GET_ALL_HEROES_SUCCESS;

    constructor(public payload:Heroes[]){
        
    }

}

export class GetAllHeroesActionError implements Action{
    type: HeroesActionsTypes = HeroesActionsTypes.GET_ALL_HEROES_ERROR;

    constructor(public payload:string){
        
    }

}


export type HeroesActions = GetAllHeroesAction | GetAllHeroesActionSuccess | GetAllHeroesActionError;
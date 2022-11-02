import { Action } from "@ngrx/store";
import { Hero } from "../hero/heroes";

export enum HeroesActionsTypes{
    GET_ALL_HEROES = "[Heroes] Get All Heroes",
    GET_ALL_HEROES_SUCCESS = "[Heroes] Get All Heroes Success",
    GET_ALL_HEROES_ERROR = "[Heroes] Get All Heroes Error",

    //DASHBOARD VIEW
    GET_CAT_HEROES = "[Heroes] Get All Heroes",
    GET_CAT_HEROES_SUCCESS = "[Heroes] Get All Heroes Success",
    GET_CAT_HEROES_ERROR = "[Heroes] Get All Heroes Error",

    //get selected Heroes
    GET_SELECTED_HEROES = "[Heroes] Get All Heroes",
    GET_SELECTED_HEROES_SUCCESS = "[Heroes] Get All Heroes Success",
    GET_SELECTED_HEROES_ERROR = "[Heroes] Get All Heroes Error",
}

export class GetAllHeroesAction implements Action{
    type: HeroesActionsTypes = HeroesActionsTypes.GET_ALL_HEROES;

    constructor(public payload:any){
        
    }
}

export class GetAllHeroesActionSuccess implements Action{
    type: HeroesActionsTypes = HeroesActionsTypes.GET_ALL_HEROES_SUCCESS;

    constructor(public payload:Hero[]){
        
    }

}

export class GetAllHeroesActionError implements Action{
    type: HeroesActionsTypes = HeroesActionsTypes.GET_ALL_HEROES_ERROR;

    constructor(public payload:string){
        
    }

}

//get selected Heroes Actions

export class GetSelectedHeroesAction implements Action{
    type: HeroesActionsTypes = HeroesActionsTypes.GET_SELECTED_HEROES;

    constructor(public payload:any){
        
    }
}

export class GetSelectedHeroesActionSuccess implements Action{
    type: HeroesActionsTypes = HeroesActionsTypes.GET_SELECTED_HEROES_SUCCESS;

    constructor(public payload: Hero){
        
    }

}

export class GetSelectedHeroesActionError implements Action{
    type: HeroesActionsTypes = HeroesActionsTypes.GET_SELECTED_HEROES_ERROR;

    constructor(public payload:string){
        
    }

}

export type HeroesActions = GetAllHeroesAction | GetAllHeroesActionSuccess | GetAllHeroesActionError |

GetSelectedHeroesAction | GetSelectedHeroesActionSuccess | GetSelectedHeroesActionError;
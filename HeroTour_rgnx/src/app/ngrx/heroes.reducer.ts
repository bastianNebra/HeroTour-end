import { Action } from "@ngrx/store";
import { Hero } from "../hero/heroes";
import { HeroesActions, HeroesActionsTypes } from "./heroes.actions";

export enum HeroesStateEnum{
    LOADING = "Loading",
    LOADED ="Loaded",
    ERROR ="Error",
    INITIAL ="Initial"
}

export interface HeroesState{
    heroes: Hero[];
    errorMessage:string,
    dataState:HeroesStateEnum
}

const initState :HeroesState = {
    heroes:[],
    errorMessage:"",
    dataState:HeroesStateEnum.INITIAL
}

export function heroesReducer(state: HeroesState = initState, action:Action):HeroesState{

    switch(action.type){
        case HeroesActionsTypes.GET_ALL_HEROES:
            return {...state, dataState:HeroesStateEnum.LOADING}
        case HeroesActionsTypes.GET_ALL_HEROES_SUCCESS:
            return {...state, dataState: HeroesStateEnum.LOADED, heroes:(<HeroesActions>action).payload}
        case HeroesActionsTypes.GET_ALL_HEROES_ERROR:
            return {...state,dataState:HeroesStateEnum.ERROR, errorMessage:(<HeroesActions>action).payload}

            /** Get Selected Heroes */
        case HeroesActionsTypes.GET_SELECTED_HEROES:
            return {...state, dataState:HeroesStateEnum.LOADING}
        case HeroesActionsTypes.GET_SELECTED_HEROES_SUCCESS:
            return {...state, dataState: HeroesStateEnum.LOADED, heroes:(<HeroesActions>action).payload}
        case HeroesActionsTypes.GET_SELECTED_HEROES_ERROR:
            return {...state,dataState:HeroesStateEnum.ERROR, errorMessage:(<HeroesActions>action).payload}
        default: return {...state}    
    }

}
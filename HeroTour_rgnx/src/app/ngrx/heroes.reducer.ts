import { Action } from "@ngrx/store";
import { Hero } from "../hero/heroes";
import { HeroesActions, HeroesActionsTypes } from "./heroes.actions";


export enum HeroesStateEnum{
    LOADING = "Loading",
    LOADED ="Loaded",
    ERROR ="Error",
    INITIAL ="Initial",
    NEW ="New",
    EDIT ="Edit",
    UPDATED ="Edit",
}

export interface HeroesState{
    heroes: Hero[];
    hero:Hero;
    errorMessage:string,
    dataState:HeroesStateEnum,
    currentHero:Hero| null,
}



// @ts-ignore
const initState :HeroesState = {
    heroes:[],
    hero: new Hero(21,"Talla Jean") ,
    errorMessage:"",
    dataState:HeroesStateEnum.INITIAL,
    currentHero:null,
}

export function heroesReducer(state: HeroesState = initState, action:Action):HeroesState{

    switch(action.type){
        case HeroesActionsTypes.GET_ALL_HEROES:
            return {...state, dataState:HeroesStateEnum.LOADING}
        case HeroesActionsTypes.GET_ALL_HEROES_SUCCESS:
          console.log("Initstate by Get All "+ (<HeroesActions>action).payload);
            return {...state, dataState: HeroesStateEnum.LOADED, heroes:(<HeroesActions>action).payload}
        case HeroesActionsTypes.GET_ALL_HEROES_ERROR:
            return {...state,dataState:HeroesStateEnum.ERROR, errorMessage:(<HeroesActions>action).payload}

            /** Get Selected Heroes */
        case HeroesActionsTypes.GET_SELECTED_HERO:
            return {...state, dataState:HeroesStateEnum.LOADING}
        case HeroesActionsTypes.GET_SELECTED_HERO_SUCCESS:
            let hero: Hero = (<HeroesActions>action).payload
          //console.log(hero)
          // @ts-ignore
          return {...state, dataState: HeroesStateEnum.LOADED, hero}
        case HeroesActionsTypes.GET_SELECTED_HERO_ERROR:
            return {...state,dataState:HeroesStateEnum.ERROR, errorMessage:(<HeroesActions>action).payload}

        /** New Hero */
        case HeroesActionsTypes.NEW_HERO:
          return {...state, dataState:HeroesStateEnum.LOADING}
        case HeroesActionsTypes.NEW_HERO_SUCCESS:
          return {...state, dataState: HeroesStateEnum.NEW}
        case HeroesActionsTypes.NEW_HERO_ERROR:
          return {...state,dataState:HeroesStateEnum.ERROR, errorMessage:(<HeroesActions>action).payload}

        /** Save Hero */
        case HeroesActionsTypes.SAVE_HERO:
          return {...state, dataState:HeroesStateEnum.LOADING}
        case HeroesActionsTypes.SAVE_HERO_SUCCESS:
          let heroes:Hero[] = [...state.heroes];
          heroes.push((<HeroesActions>action).payload)
          return {...state, dataState: HeroesStateEnum.LOADED,heroes:heroes}
        case HeroesActionsTypes.SAVE_HERO_ERROR:
          return {...state,dataState:HeroesStateEnum.ERROR, errorMessage:(<HeroesActions>action).payload}

        /** Edit Hero */
        case HeroesActionsTypes.EDIT_HERO:
          return {...state, dataState:HeroesStateEnum.LOADING}
        case HeroesActionsTypes.EDIT_HERO_SUCCESS:
          console.log("Update Hero Objekt "+ (<HeroesActions>action).payload);
          return {...state, dataState: HeroesStateEnum.LOADED,currentHero:(<HeroesActions>action).payload}
        case HeroesActionsTypes.EDIT_HERO_ERROR:
          return {...state,dataState:HeroesStateEnum.ERROR, errorMessage:(<HeroesActions>action).payload}

        /** Update Hero */
        case HeroesActionsTypes.UPDATE_HERO:
          return {...state, dataState:HeroesStateEnum.LOADING}
        case HeroesActionsTypes.UPDATE_HERO_SUCCESS:
          let updateHero: Hero = (<HeroesActions>action).payload

          console.log("Update Hero Objekt "+ (<HeroesActions>action).payload);
          let heroesList :Hero[]  = state.heroes.map(h=>(h.id==updateHero.id)?updateHero:h);

          return {...state, dataState: HeroesStateEnum.UPDATED,heroes:heroesList}
        case HeroesActionsTypes.UPDATE_HERO_ERROR:
          return {...state,dataState:HeroesStateEnum.ERROR, errorMessage:(<HeroesActions>action).payload}

        /** Delete Hero */
        case HeroesActionsTypes.DELETE_HERO:
          return {...state, dataState:HeroesStateEnum.LOADING}
        case HeroesActionsTypes.DELETE_HERO_SUCCESS:
          let deleteHero: Hero = (<HeroesActions>action).payload
          console.log("1 "+ (<HeroesActions>action).payload);

          let index = state.heroes.indexOf(deleteHero);
          let newHeroesList :Hero[]  = [...state.heroes]
          newHeroesList.slice(index,1);

          return {...state, dataState: HeroesStateEnum.UPDATED,heroes:newHeroesList}
        case HeroesActionsTypes.DELETE_HERO_ERROR:
          return {...state,dataState:HeroesStateEnum.ERROR, errorMessage:(<HeroesActions>action).payload}

          default: return {...state}
    }

}

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
    GET_SELECTED_HERO = "[Hero] Get Select Hero",
    GET_SELECTED_HERO_SUCCESS = "[Hero] Get Select Hero Success",
    GET_SELECTED_HERO_ERROR = "[Hero] Get Select Hero Error",

    //Delete Hero
    DELETE_HERO = "[Hero] Delete Hero",
    DELETE_HERO_SUCCESS = "[Hero] Delete Hero Success",
    DELETE_HERO_ERROR = "[Hero] Delete Hero Error",


    //New Hero
    NEW_HERO = "[Hero] New Hero",
    NEW_HERO_SUCCESS = "[Hero] New Hero Success",
    NEW_HERO_ERROR = "[Hero] New Hero Error",

    //Save Hero
    SAVE_HERO = "[Hero] New Hero",
    SAVE_HERO_SUCCESS = "[Hero] New Hero Success",
    SAVE_HERO_ERROR = "[Hero] New Hero Error",

    //EDit Hero
    EDIT_HERO = "[Hero] Edit Hero",
    EDIT_HERO_SUCCESS = "[Hero] Edit Hero Success",
    EDIT_HERO_ERROR = "[Hero] Edit Hero Error",

    //Update Hero
    UPDATE_HERO = "[Hero] Update Hero",
    UPDATE_HERO_SUCCESS = "[Hero] Update Hero Success",
    UPDATE_HERO_ERROR = "[Hero] Update Hero Error",
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

//get select Hero Actions

export class GetSelectedHeroAction implements Action{
    type: HeroesActionsTypes = HeroesActionsTypes.GET_SELECTED_HERO;

    constructor(public payload:any){

    }
}

export class GetSelectedHeroActionSuccess implements Action{
    type: HeroesActionsTypes = HeroesActionsTypes.GET_SELECTED_HERO_SUCCESS;

    constructor(public payload: Hero){

    }

}

export class GetSelectedHeroActionError implements Action{
    type: HeroesActionsTypes = HeroesActionsTypes.GET_SELECTED_HERO_ERROR;

    constructor(public payload:string){

    }

}

//New Hero Actions

export class NewHeroAction implements Action{
  type: HeroesActionsTypes = HeroesActionsTypes.NEW_HERO;

  //Kein Parameter ist hier notwendig
  constructor(public payload:any){

  }
}

export class NewHeroActionSuccess implements Action{
  type: HeroesActionsTypes = HeroesActionsTypes.NEW_HERO_SUCCESS;

  //Kein Parameter ist hier notwendig
  constructor(public payload: any){

  }

}

export class NewHeroActionError implements Action{
  type: HeroesActionsTypes = HeroesActionsTypes.NEW_HERO_ERROR;

  constructor(public payload:string){

  }

}


//Save Hero Actions
export class SaveHeroAction implements Action{
  type: HeroesActionsTypes = HeroesActionsTypes.SAVE_HERO;

  constructor(public payload:Hero){

  }
}

export class SaveHeroActionSuccess implements Action{
  type: HeroesActionsTypes = HeroesActionsTypes.SAVE_HERO_SUCCESS;

  constructor(public payload: Hero){

  }

}

export class SaveHeroActionError implements Action{
  type: HeroesActionsTypes = HeroesActionsTypes.SAVE_HERO_SUCCESS;

  constructor(public payload:string){

  }

}

//Edit Hero Actions
export class EditHeroAction implements Action{
  type: HeroesActionsTypes = HeroesActionsTypes.EDIT_HERO;

  constructor(public payload:number){

  }
}

export class EditHeroActionSuccess implements Action{
  type: HeroesActionsTypes = HeroesActionsTypes.EDIT_HERO_SUCCESS;

  constructor(public payload: Hero){

  }

}

export class EditHeroActionError implements Action{
  type: HeroesActionsTypes = HeroesActionsTypes.EDIT_HERO_ERROR;

  constructor(public payload:string){

  }

}

//Update Hero Actions
export class UpdateHeroAction implements Action{
  type: HeroesActionsTypes = HeroesActionsTypes.UPDATE_HERO;

  constructor(public payload: Hero){

  }
}

export class UpdateHeroActionSuccess implements Action{
  type: HeroesActionsTypes = HeroesActionsTypes.UPDATE_HERO_SUCCESS;

  constructor(public payload: Hero){

  }

}

export class UpdateHeroActionError implements Action{
  type: HeroesActionsTypes = HeroesActionsTypes.UPDATE_HERO_ERROR;

  constructor(public payload:string){

  }

}

//Delete Hero Actions
export class DeleteHeroAction implements Action{
  type: HeroesActionsTypes = HeroesActionsTypes.DELETE_HERO;

  constructor(public payload: Hero){

  }
}

export class DeleteHeroActionSuccess implements Action{
  type: HeroesActionsTypes = HeroesActionsTypes.DELETE_HERO_SUCCESS;

  constructor(public payload: Hero){

  }

}

export class DeleteHeroActionError implements Action{
  type: HeroesActionsTypes = HeroesActionsTypes.DELETE_HERO_ERROR;

  constructor(public payload:string){

  }

}

export type HeroesActions =

  GetAllHeroesAction | GetAllHeroesActionSuccess | GetAllHeroesActionError |

  GetSelectedHeroAction | GetSelectedHeroActionSuccess | GetSelectedHeroActionError|

  NewHeroAction | NewHeroActionSuccess | NewHeroActionError|

  SaveHeroAction | SaveHeroActionSuccess | SaveHeroActionError |

  EditHeroAction | EditHeroActionSuccess | EditHeroActionError|

  UpdateHeroAction | UpdateHeroActionSuccess | UpdateHeroActionError |

  DeleteHeroAction | DeleteHeroActionSuccess | DeleteHeroActionError;

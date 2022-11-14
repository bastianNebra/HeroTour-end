import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {HeroesState, HeroesStateEnum} from "../ngrx/heroes.reducer";
import {Store} from "@ngrx/store";
import {NewHeroAction, SaveHeroAction} from "../ngrx/heroes.actions";

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {

  heroFormGroup:FormGroup | null = null;
  state:HeroesState | null= null;
  readonly HeroeStateEnum = HeroesStateEnum;
  //Validation of fomular
  submitted:boolean = false;


  constructor(
    private store:Store<any>,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new NewHeroAction({}));

    this.store.subscribe(state=>{
      this.state = state.heroesState;//EN cas de donnees a recuperer dans le formulaire

      if (this.state?.dataState==HeroesStateEnum.NEW){
        this.heroFormGroup = this.fb.group({
          name:["",Validators.required]
        })
      }
    })
  }

  newHero() {
    this.store.dispatch(new NewHeroAction({}))
  }

  onSaveHero() {
    this.store.dispatch(new SaveHeroAction(this.heroFormGroup?.value))
  }
}

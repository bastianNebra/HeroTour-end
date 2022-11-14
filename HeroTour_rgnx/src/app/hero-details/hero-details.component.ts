import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../hero.service";
import {Location} from "@angular/common";
import {EditHeroAction, GetSelectedHeroAction, UpdateHeroAction} from "../state/heroes.actions";
import {Store} from "@ngrx/store";
import {HeroesState, HeroesStateEnum} from "../state/heroes.reducer";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})



export class HeroDetailsComponent implements OnInit {
   heroID :number;
   state: HeroesState | null = null;
   // @ts-ignore
  heroFormGroup:FormGroup;

   readonly HeroesStateEnum = HeroesStateEnum;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location : Location,
    private store : Store<any>,
    private fb: FormBuilder
  ) {
    this.heroID = route.snapshot.params['id'];
    console.log(this.heroID);
  }

  ngOnInit(): void {

   this.store.dispatch(new EditHeroAction(this.heroID));
   this.store.subscribe(state=>{
     this.state  = state.heroesState;

     if (this.state?.dataState == HeroesStateEnum.LOADED){
       if (this.state.currentHero != null){
         this.heroFormGroup = this.fb.group({
          id:[this.state.currentHero.id,Validators.required],
           name:[this.state.currentHero.name,Validators.required]
         });
       }
     }
   })

  }


  onGetSelectedHeroes(hero: Number){
    this.store.dispatch(new GetSelectedHeroAction(hero))
  }



  goBack(): void {
    this.location.back()
  }


  okUpdated() {
    this.store.dispatch(new EditHeroAction(this.heroID))
  }

  onUpdateHero() {
    if (this.heroFormGroup?.invalid) return;
    this.store.dispatch(new UpdateHeroAction(this.heroFormGroup?.value))
  }
}

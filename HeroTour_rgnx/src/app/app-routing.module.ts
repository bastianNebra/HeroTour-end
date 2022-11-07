import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import {HeroDetailsComponent} from "./hero-details/hero-details.component";
import {NewHeroComponent} from "./new-hero/new-hero.component";

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hero-details/:id', component: HeroDetailsComponent },
  { path: 'new-hero', component: NewHeroComponent },
  { path: 'edit-hero/:id', component: NewHeroComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

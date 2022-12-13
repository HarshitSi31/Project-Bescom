import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  {
    path:'', pathMatch:'full',redirectTo:'main/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

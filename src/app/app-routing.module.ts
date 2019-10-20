import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FishIndexComponent } from './fish-index/fish-index.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'fish-index', component: FishIndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


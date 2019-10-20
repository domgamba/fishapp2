import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FishIndexComponent } from './fish-index/fish-index.component';
import { FishListComponent } from './fish-index/fish-list/fish-list.component';
import { FishListItemComponent } from './fish-index/fish-list/fish-list-item/fish-list-item.component';
import { FishSelectionComponent } from './fish-index/fish-selection/fish-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FishIndexComponent,
    FishListComponent,
    FishListItemComponent,
    FishSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

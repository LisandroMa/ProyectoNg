import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemlimitComponent } from './itemlimit/itemlimit.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { FooditemComponent } from './fooditem/fooditem.component';
import { FooditemadderComponent } from './fooditemadder/fooditemadder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ItemlimitComponent,
    FoodlistComponent,
    FooditemComponent,
    FooditemadderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Host } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.components';
/* import { ReplaceComma } from './shared/pipes/replace-comma.pipe';
 */import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import  localeFr  from '@angular/common/locales/fr';
import { ReplaceComma } from './shared/pipes/replace-comma.pipe';
import { StartRatingComponent } from './shared/components/star-rating/star-rating.component';

registerLocaleData(localeFr,'fr');

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ReplaceComma,
    StartRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

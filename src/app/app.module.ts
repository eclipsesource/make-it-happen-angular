import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatToolbarModule, MatCardModule, MatListModule} from '@angular/material';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { InitialComponent } from './initial/initial.component';
import { FinalComponent } from './final/final.component';
import { Day2Component } from './day2/day2.component';
import { Day1Component } from './day1/day1.component';
import { Day3Component } from './day3/day3.component';
import { Day4Component } from './day4/day4.component';
import { Day5Component } from './day5/day5.component';
import { Day6Component } from './day6/day6.component';


@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    FinalComponent,
    Day2Component,
    Day1Component,
    Day3Component,
    Day4Component,
    Day5Component,
    Day6Component
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

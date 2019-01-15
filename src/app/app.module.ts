import { NgRedux } from '@angular-redux/store';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { JsonFormsAngularMaterialModule } from '@jsonforms/angular-material';
import { JsonFormsState } from '@jsonforms/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { FinalComponent } from './final/final.component';
import { InMemoryDataService } from './in-memory-data.service';
import { SimpleComponent } from './simple/simple.component';
import { ExampleState, initialState, rootReducer } from './util';

@NgModule({
  declarations: [
    AppComponent,
    FinalComponent,
    SimpleComponent,
  ],
  imports: [
    BrowserModule,
    JsonFormsAngularMaterialModule,
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
export class AppModule {
  constructor(ngRedux: NgRedux<JsonFormsState & ExampleState>) {
    ngRedux.configureStore(rootReducer, initialState);
  }
}

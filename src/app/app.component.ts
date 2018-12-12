import { NgRedux } from '@angular-redux/store';
import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { Actions, JsonFormsState } from '@jsonforms/core';
import { ExampleState } from './util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(router: Router, ngRedux: NgRedux<JsonFormsState & ExampleState>) {

    router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        const example = ngRedux.getState().examples.find(e => e.id === event.urlAfterRedirects.substr(1));
        if (example) {
          ngRedux.dispatch(Actions.init(
            example.data,
            example.schema,
            example.uischema
          ));
        }
      }
    });
  }
}

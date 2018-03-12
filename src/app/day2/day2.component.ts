import { Component, OnInit } from '@angular/core';
import {data as dayData, schema as daySchema, uischema as dayUISchema} from '@jsonforms/examples/lib/day2';
import {prepareStore} from '../util';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.css']
})
export class Day2Component implements OnInit {

  private store = prepareStore(dayData, daySchema, dayUISchema);

  constructor() { }

  ngOnInit() {
  }

}

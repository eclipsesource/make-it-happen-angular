import { Component, OnInit } from '@angular/core';
import {data as dayData, schema as daySchema, uischema as dayUISchema} from '@jsonforms/examples/lib/day3';
import {prepareStore} from '../util';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.css']
})
export class Day3Component implements OnInit {

  private store = prepareStore(dayData, daySchema, dayUISchema);

  constructor() { }

  ngOnInit() {
  }

}

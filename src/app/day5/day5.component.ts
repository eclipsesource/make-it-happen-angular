import { Component, OnInit } from '@angular/core';
import {data as dayData, schema as daySchema, uischema as dayUISchema} from '@jsonforms/examples/lib/day5';
import {prepareStore} from '../util';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.css']
})
export class Day5Component implements OnInit {

  private store = prepareStore(dayData, daySchema, dayUISchema);

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {data as dayData, schema as daySchema, uischema as dayUISchema} from '@jsonforms/examples/lib/day6';
import {prepareStore} from '../util';

@Component({
  selector: 'app-day6',
  templateUrl: './day6.component.html',
  styleUrls: ['./day6.component.css']
})
export class Day6Component implements OnInit {

  private store = prepareStore(dayData, daySchema, dayUISchema);

  constructor() { }

  ngOnInit() {
  }

}

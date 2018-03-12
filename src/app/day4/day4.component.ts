import { Component, OnInit } from '@angular/core';
import {data as dayData, schema as daySchema, uischema as dayUISchema} from '@jsonforms/examples/lib/day4';
import {prepareStore} from '../util';

@Component({
  selector: 'app-day4',
  templateUrl: './day4.component.html',
  styleUrls: ['./day4.component.css']
})
export class Day4Component implements OnInit {

  private store = prepareStore(dayData, daySchema, dayUISchema);

  constructor() { }

  ngOnInit() {
  }

}

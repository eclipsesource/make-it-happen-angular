import { Component, OnInit } from '@angular/core';
import {data as dayData, schema as daySchema} from '@jsonforms/examples/lib/day1';
import {prepareStore} from '../util';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.css']
})
export class Day1Component implements OnInit {

  private store = prepareStore(dayData, daySchema);

  constructor() { }

  ngOnInit() {
  }

}

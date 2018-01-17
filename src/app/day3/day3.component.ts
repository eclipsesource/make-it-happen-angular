import { Component, OnInit } from '@angular/core';
import {data as dayData, schema as daySchema, uischema as dayUISchema} from '@jsonforms/examples/dist/ts-build/day3';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.component.html',
  styleUrls: ['./day3.component.css']
})
export class Day3Component implements OnInit {

  private state = {data: dayData, schema: daySchema, uischema: dayUISchema };

  constructor() { }

  ngOnInit() {
  }

}

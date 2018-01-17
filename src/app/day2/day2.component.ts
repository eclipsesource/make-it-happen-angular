import { Component, OnInit } from '@angular/core';
import {data as dayData, schema as daySchema, uischema as dayUISchema} from '@jsonforms/examples/dist/ts-build/day2';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.css']
})
export class Day2Component implements OnInit {

  private state = {data: dayData, schema: daySchema, uischema: dayUISchema };

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {data as dayData, schema as daySchema, uischema as dayUISchema} from '@jsonforms/examples/dist/ts-build/day5';

@Component({
  selector: 'app-day5',
  templateUrl: './day5.component.html',
  styleUrls: ['./day5.component.css']
})
export class Day5Component implements OnInit {

  private state = {data: dayData, schema: daySchema, uischema: dayUISchema };

  constructor() { }

  ngOnInit() {
  }

}

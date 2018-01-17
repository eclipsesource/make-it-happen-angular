import { Component, OnInit } from '@angular/core';
import {data as dayData, schema as daySchema, uischema as dayUISchema} from '@jsonforms/examples/dist/ts-build/day6';

@Component({
  selector: 'app-day6',
  templateUrl: './day6.component.html',
  styleUrls: ['./day6.component.css']
})
export class Day6Component implements OnInit {

  private state = {data: dayData, schema: daySchema, uischema: dayUISchema };

  constructor() { }

  ngOnInit() {
  }

}

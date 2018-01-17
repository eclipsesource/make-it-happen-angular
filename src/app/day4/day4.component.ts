import { Component, OnInit } from '@angular/core';
import {data as dayData, schema as daySchema, uischema as dayUISchema} from '@jsonforms/examples/dist/ts-build/day4';

@Component({
  selector: 'app-day4',
  templateUrl: './day4.component.html',
  styleUrls: ['./day4.component.css']
})
export class Day4Component implements OnInit {

  private state = {data: dayData, schema: daySchema, uischema: dayUISchema };

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {data as dayData, schema as daySchema, uischema as dayUISchema} from '@jsonforms/examples/dist/ts-build/day2';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {

  private state = {data: dayData, schema: daySchema, uischema: dayUISchema };
  constructor() { }

  ngOnInit() {
  }

}

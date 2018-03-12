import { Component, OnInit } from '@angular/core';
import {data as dayData, schema as daySchema, uischema as dayUISchema} from '@jsonforms/examples/lib/day2';
import {prepareStore} from '../util';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {

  private store = prepareStore(dayData, daySchema, dayUISchema);
  constructor() { }

  ngOnInit() {
  }

}

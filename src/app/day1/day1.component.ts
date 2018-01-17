import { Component, OnInit } from '@angular/core';
import {data as dayData, schema as daySchema} from '@jsonforms/examples/dist/ts-build/day1';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.component.html',
  styleUrls: ['./day1.component.css']
})
export class Day1Component implements OnInit {

  private state = {data: dayData, schema: daySchema};

  constructor() { }

  ngOnInit() {
  }

}

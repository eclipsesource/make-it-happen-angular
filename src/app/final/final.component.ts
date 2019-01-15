import { Component, OnInit } from '@angular/core';

import {Schema} from './final.schema';
import {UISchema} from './final.uischema';
import {TaskService} from './task.service';
import { NgRedux } from '@angular-redux/store';
import { JsonFormsState, Actions, getData } from '@jsonforms/core';
import { ExampleState } from '../util';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css'],
  providers: [TaskService]
})
export class FinalComponent implements OnInit {

  private tasks;
  selected = false;
  retrieving = false;

  constructor(
    private taskService: TaskService,
    private ngRedux: NgRedux<JsonFormsState & ExampleState>
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
        .subscribe(tasks => this.tasks = tasks);
  }
  onSelect(taskId: any): void {
    this.retrieving = true;
    this.taskService.getTask(taskId).subscribe(task => {
      this.ngRedux.dispatch(Actions.init(
        task,
        Schema,
        UISchema
      ));
      this.selected = true;
      this.retrieving = false;
    });
  }
  add(): void {
    this.taskService.addTask({}).subscribe(hero => this.tasks.push(hero));
  }

  save(): void {
    this.taskService.updateTask(getData(this.ngRedux.getState())).subscribe(() => this.getTasks());
  }
}

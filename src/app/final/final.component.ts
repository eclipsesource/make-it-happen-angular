import { Component, OnInit } from '@angular/core';
import {prepareStore, getData} from '../util';

import {Schema} from './final.schema';
import {UISchema} from './final.uischema';
import {TaskService} from './task.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css'],
  providers: [TaskService]
})
export class FinalComponent implements OnInit {

  private tasks;
  private store;
  private selected = false;
  private retrieving = false;

  constructor(private taskService: TaskService) { }

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
      this.store = prepareStore(task, Schema, UISchema);
      this.selected = true;
      this.retrieving = false;
    });
  }
  add(): void {
    this.taskService.addTask({}).subscribe(hero => this.tasks.push(hero));
  }

  save(): void {
    this.taskService.updateTask(getData(this.store)).subscribe(() => this.getTasks());
  }
}

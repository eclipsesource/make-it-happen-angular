import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TaskService {
  private tasksUrl = 'api/tasks';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET tasks from the server */
  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.tasksUrl);
  }

  /** GET task by id. Will 404 if id not found */
  getTask(id: number): Observable<any> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<any>(url);
  }

  /** PUT: update the task on the server */
  updateTask (task: any): Observable<any> {
    return this.http.put(this.tasksUrl, task, httpOptions);
  }

  /** POST: add a new task to the server */
  addTask (task: any): Observable<any> {
    return this.http.post<any>(this.tasksUrl, task, httpOptions);
  }

  /** DELETE: delete the task from the server */
  deleteTask (task: any | number): Observable<any> {
    const id = typeof task === 'number' ? task : task.id;
    const url = `${this.tasksUrl}/${id}`;

    return this.http.delete<any>(url, httpOptions);
  }
}

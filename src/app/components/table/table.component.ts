import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Todo} from '../../objects/todo';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  todos :  Todo[]  = [];

  constructor(private http: HttpClient) {
  }

  getTodos() {
    this.http.get<Todo[]>('http://localhost:8080/todos').subscribe((todoList: Todo[]) => {
      this.todos = todoList;
    });
  }

  deleteTodo(id: number) {
    this.http.delete(`http://localhost:8080/todos/${id}`).subscribe((response) => {
      console.log(response);
      this.refresh();
    });
  }

  refresh() {
    this.getTodos();
  }

  ngOnInit(): void {
    this.getTodos();
  }
}

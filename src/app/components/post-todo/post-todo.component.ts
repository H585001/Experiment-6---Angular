import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/objects/todo';


@Component({
  selector: 'app-post-todo',
  templateUrl: './post-todo.component.html',
  styleUrls: ['./post-todo.component.css']
})
export class PostTodoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addUser(values : {desc : string, sum : string}) {
    console.log(values);
    this.http.post('http://localhost:8080/todos', {description: values.desc, summary: values.sum}).subscribe();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  id: number = 1;
  description: string = 'Description of Item';
  summary: string = 'Summary of Item';

  constructor() { }

  ngOnInit(): void {
  }

}

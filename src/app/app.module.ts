import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { PostTodoComponent } from './components/post-todo/post-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TodoItemComponent,
    PostTodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

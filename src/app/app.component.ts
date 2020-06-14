import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-todo-app';
  newTodoItemText = 'New item';
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
  }


  addTodo() {
    this.todoService.addWithText(this.newTodoItemText);
    this.newTodoItemText = '';
  }
  deleteTodoItem(todo: Todo) {
    this.todoService.deleteTodoItem(todo);
  }

  ngOnInit() {
    this.todos = this.todoService.todos;
  }
}

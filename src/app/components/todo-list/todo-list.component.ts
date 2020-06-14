import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent{

  @Input() todos: Todo[];
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  delete(todo: Todo) {
    console.log('delete todo:', todo);
    this.deleteTodo.emit(todo);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() itemChanged: EventEmitter<Todo> = new EventEmitter<Todo>();

  toggle(todo: Todo) {
    this.itemChanged.emit(todo);
  }
  delete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }
}

import { Injectable, OnDestroy } from '@angular/core';
import { Todo } from '../models/todo.model';

class LocalRepository {
  private myItems: any[] = [];

  public get items() {
    return this.myItems;
  }

  public set items(objects: any[]) {
    this.myItems = objects;
    this.save();
  }

  constructor(private storageKey: string) {
    const raw = localStorage.getItem(this.storageKey);
    if (raw != null) {
      this.items = JSON.parse(raw) as any[];
    } else {
      this.items = [
        {
          title: 'Buy milk',
          completed: true
        }, {
          title: 'Buy bread',
          completed: true
        }, {
          title: 'Learn angular',
          completed: false}
        ];
    }
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.myItems, null, 0));
  }
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  repository = new LocalRepository('todos');

  public get todos() {
    return this.repository.items;
  }
  public set todos(todos: Todo[]) {
    this.repository.items = todos;
  }

  deleteTodoItem(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.saveChanges();
  }

  addWithText(text: string) {
    this.todos.push({
      title: text, completed: false
    });
    this.saveChanges();
  }

  saveChanges() {
    this.repository.save();
  }
}

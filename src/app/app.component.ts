import { Component } from '@angular/core';
import { from } from 'rxjs';
import { TodoItem } from './todoitem';
import { TodoList } from './todolist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private list = new TodoList('Dima Moroz', [
    new TodoItem('Walk'),
    new TodoItem('Shop', true),
    new TodoItem('Sleep', true),
    new TodoItem('Go to work'),
  ])

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.items.length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  addItem(newItem) {
    if (newItem != "") {
      this.list.addItem(newItem);
    }
  }

  showComplete: boolean = false;
}

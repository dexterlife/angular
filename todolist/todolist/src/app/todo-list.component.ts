import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TODOS } from './mock-todo';
import { Todo } from './todo';
import { HighlightDirective } from '../../highlight.directive';

@Component({
  selector: 'todo-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HighlightDirective],
  template: `
    <div class="container">
      <div>
        <h1>Liste</h1>
        <a href="#" role="button" (click)="onClickToDo()"> A faire</a>
        <a href="#" role="button" (click)="onClickDone()"> Terminée</a>
        <a href="#" role="button" (click)="onClickAll()"> Afficher tout</a>
        <ng-container *ngFor="let a of this.todoList; index as i">
          <article highlight *ngIf="a.isCompleted == done">
            <div>
              <label for="terms-{{ a.id }}">
                <input
                  type="checkbox"
                  [checked]="a.isCompleted"
                  id="terms-{{ a.id }}"
                  name="terms-{{ a.id }}"
                />{{ a.title }}
              </label>
              <div class="action">
                <a href="#">Edit</a>
                <a href="#">Delete</a>
              </div>
            </div>
          </article>
          <article highlight *ngIf="done == null">
            <div>
              <label for="terms-{{ a.id }}">
                <input
                  type="checkbox"
                  [checked]="a.isCompleted"
                  id="terms-{{ a.id }}"
                  name="terms-{{ a.id }}"
                />{{ a.title }}
              </label>
              <div class="action">
                <a href="#">Edit</a>
                <a href="#">Delete</a>
              </div>
            </div>
          </article>
        </ng-container>
      </div>
    </div>
  `,
  styles: [
    `
    .action{
        display: flex,
        flex-direction: row
        justify-content: end
    }
    a{
        margin-left: 10px
    }
  `,
  ],
})
export class todoComponent {
  todoList = TODOS;
  ableTodoList: Todo[] = [];
  done: boolean | null = true;

  constructor() {
    console.table(this.todoList);
  }

  selectTodo(id: number) {
    return this.todoList[id];
  }
  onClickToDo() {
    this.done = false;
  }
  onClickDone() {
    this.done = true;
  }
  onClickAll() {
    this.done = null;
  }
  /*showAbleTodo(list: Todo[]) {
    list.map((todo: Todo) => {
      if (!todo.isCompleted) {
        this.ableTodoList.push(todo);
      }
    });
  }*/
}

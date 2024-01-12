import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { todoComponent } from './todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div class="container">
      <todo-list />
    </div>
  `,
  styles: [''],
  imports: [CommonModule, RouterOutlet, AppComponent, todoComponent],
})
export class AppComponent {}

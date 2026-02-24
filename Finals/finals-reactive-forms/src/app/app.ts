import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserFormComponent } from './user-form/user-form';
import { ReactiveDemo } from './reactive-demo/reactive-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserFormComponent, ReactiveDemo],
  template: `
    <h1>Forms</h1>
    <app-user-form></app-user-form>

    <hr> <app-reactive-demo></app-reactive-demo>

    <router-outlet />
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('finals-template-forms');
}

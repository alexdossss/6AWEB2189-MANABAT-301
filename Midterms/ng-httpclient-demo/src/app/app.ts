import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Httpclient } from './httpclient';
import { User } from './user.model';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('http-client-demo');
  httpusers: User[] = [];
  httptodos: Todo[] = [];

  constructor(private httpClient: Httpclient) {}

  ngOnInit() {
    this.httpClient.getUsersRemotely().subscribe((data) => {
      this.httpusers = data;
    });
    this.httpClient.getTodos().subscribe((data) => {
      this.httptodos = data;
    });
  }
}

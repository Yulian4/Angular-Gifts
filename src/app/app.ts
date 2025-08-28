import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet,RouterModule } from '@angular/router';
import { Header } from './component/header/header';
import { Home } from './component/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('StikerFif');
}

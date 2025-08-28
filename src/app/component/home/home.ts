import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../../services/api';
import { Observable } from 'rxjs';
import { GifCardComponent } from '../GifCardComponent/GifCardComponent';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GifCardComponent,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  gifs$!: Observable<any>;
  constructor(private giphy: Api) {}

  ngOnInit() {
    this.gifs$ = this.giphy.fetchTrending();
     this.gifs$.subscribe(response => {
    console.log('Datos reales:', response);
  });
  }
  
}

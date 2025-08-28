import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gif-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './GifCardComponent.html',
  styleUrl: './GifCardComponent.css',
})
export class GifCardComponent {
  @Input() gif: any;
}

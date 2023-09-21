import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  imageUrl: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  title: string = 'Data Binding';
  port: number = 4200;

  isButtonDisabled = true;
  isLikeDisabled: boolean = false;
  isShareDisabled: boolean = true;

  server: {
    id: number,
    status: string
  } = { id: 10, status: 'offline' };

  toggleDisable(): void {
    this.isButtonDisabled = !this.isButtonDisabled;
  }
}

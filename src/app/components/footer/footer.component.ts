import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PROFILE } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  profile = PROFILE;
  year = new Date().getFullYear();
}

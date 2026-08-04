import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { PROFILE } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  profile = PROFILE;
  roles = ['Développeur Fullstack', 'Ingénieur Logiciel', 'Passionné d\'IA & Machine Learning'];
}

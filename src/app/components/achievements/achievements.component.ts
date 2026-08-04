import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { ACHIEVEMENTS } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent {
  achievements = ACHIEVEMENTS;
}

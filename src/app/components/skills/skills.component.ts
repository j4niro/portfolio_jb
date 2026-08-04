import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { SKILLS } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories = SKILLS;
}

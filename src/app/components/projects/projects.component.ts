import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { PROJECTS } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = PROJECTS;
}

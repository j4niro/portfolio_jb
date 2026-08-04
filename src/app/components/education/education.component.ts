import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { EDUCATION } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education = EDUCATION;
}

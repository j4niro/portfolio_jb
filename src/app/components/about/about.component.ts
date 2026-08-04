import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { PROFILE } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  profile = PROFILE;

  highlights = [
    { label: 'Formation', value: 'IMT Atlantique', icon: 'fa-solid fa-graduation-cap' },
    { label: 'Localisation', value: PROFILE.location, icon: 'fa-solid fa-location-dot' },
    { label: 'Recherche', value: 'Alternance Data Science - 12 mois', icon: 'fa-solid fa-microscope' },
    { label: 'Domaines', value: 'Full Stack · Data · IA', icon: 'fa-solid fa-layer-group' }
  ];
}

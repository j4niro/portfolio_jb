import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { CERTIFICATIONS } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  certifications = CERTIFICATIONS;
}

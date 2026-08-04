import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { PROFILE } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  profile = PROFILE;
  scrolled = false;
  menuOpen = false;

  links = [
    { label: 'À propos', href: '#about' },
    { label: 'Formation', href: '#education' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Projets', href: '#projects' },
    { label: 'Vidéos', href: '#project-videos' },
    { label: 'Contact', href: '#contact' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 20;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}

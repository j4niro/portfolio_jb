import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { PROFILE } from '../../core/data/portfolio-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  profile = PROFILE;
  submitted = false;

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  get mailtoLink(): string {
    const name = this.form.value.name || '';
    const email = this.form.value.email || '';
    const message = this.form.value.message || '';
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    return `mailto:${this.profile.email}?subject=${encodeURIComponent('Contact via portfolio')}&body=${body}`;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    window.location.href = this.mailtoLink;
    this.submitted = true;
  }
}

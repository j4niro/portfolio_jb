import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealDirective } from '../../core/directives/reveal.directive';
import { SafeUrlPipe } from '../../core/pipes/safe-url.pipe';
import { PROJECT_VIDEOS } from '../../core/data/portfolio-data';
import { ProjectVideo } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-project-videos',
  standalone: true,
  imports: [CommonModule, RevealDirective, SafeUrlPipe],
  templateUrl: './project-videos.component.html',
  styleUrl: './project-videos.component.scss'
})
export class ProjectVideosComponent {
  videos = PROJECT_VIDEOS;
  activeVideo: ProjectVideo | null = null;

  open(video: ProjectVideo): void {
    if (video.videoUrl) {
      this.activeVideo = video;
    }
  }

  close(): void {
    this.activeVideo = null;
  }

  isLocalVideo(url?: string): boolean {
    return !!url && !url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('www.');
  }
}

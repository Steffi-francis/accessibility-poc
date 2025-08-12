import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  jobsMenuOpen = false;

  // Toggle dropdown menu state
  toggleJobsMenu() {
    this.jobsMenuOpen = !this.jobsMenuOpen;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'NationalScholarshipPortal';
  constructor() {}

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;

  }

  dropdownOpen = false;
  toggleDropDown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  dropOpen = false;
  toggleDrop() {
    this.dropOpen = !this.dropOpen;
  }
}
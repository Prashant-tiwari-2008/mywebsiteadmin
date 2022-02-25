import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    const body = document.getElementById('body');
    if (body?.classList.contains('toggle-sidebar')) {
      body.classList.remove('toggle-sidebar')
    } else {
      body?.classList.add('toggle-sidebar')
    }
  }
}
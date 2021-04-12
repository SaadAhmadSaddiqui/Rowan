import { Element } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  scrollY: number = 0;
  setScroll() {
    scrollY = window.pageYOffset;
  }

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', () => this.setScroll());
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', () => this.setScroll());
  }
}

import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    currentYear: number = new Date().getFullYear();
  ngOnInit(): void {
    AOS.init({
      duration: 900, // animation speed
      offset: 100,   // distance before triggering animation
      once: true,    // only animate once
      easing: 'ease-in-out'
    });
  }
}
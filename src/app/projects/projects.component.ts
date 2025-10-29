// import { Component } from '@angular/core';
// @Component({selector:'app-projects',templateUrl:'./projects.component.html',styleUrls:['./projects.component.css']})
// export class ProjectsComponent {
//   projects = [
//     { title: 'Portfolio Redesign', desc: 'A modern, responsive portfolio built with Angular.', link: '#' },
//     { title: 'HRMS Dashboard', desc: 'Employee management and leave policies dashboard.', link: '#' }
//   ];
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Automatic Email System',
      description: 'Designed and implemented an automated email and notification system with Angular and PHP (CodeIgniter).',
      link: '#'
    },
    {
      name: 'Leave Management System',
      description: 'Built dynamic UAE leave policy logic and real-time calculations using Angular and MySQL.',
      link: '#'
    },
    {
      name: 'Portfolio Website',
      description: 'A creative and responsive personal portfolio built with Angular 15 and Bootstrap 5.',
      link: '#'
    }
  ];
}

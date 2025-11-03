import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  selectedFilter = 'all';
  activeProject: any = null;

  projects = [
    {
      name: "Dynamic HRMS Management System",
      category: "angular",
      image: "assets/hrmAutomationIcon.webp",
      description: "A comprehensive HRMS platform automating attendance, payroll, leave, and performance tracking. Built with Angular and PHP (CodeIgniter), it offers real-time synchronization across departments, dynamic policy configuration, and analytics-driven insights.",
      techStack: ["Angular", "PHP", "MySQL", "CodeIgniter"]
    },
    {
      name: "UbiCRM — Customer Relationship Management",
      category: "react",
      image: "assets/crms.jpg",
      description: "A full-stack solution to manage leads, prospects, and client interactions. The system includes dynamic dashboards for real-time pipeline tracking, automated client reporting, and performance analytics modules, significantly improving sales productivity and conversion efficiency across multiple teams.",
      techStack: ["ReactJS", "AdonisJS", "MySQL", "Highcharts.js"]
    },
    {
      name: "Organization Management System",
      category: "angular",
      image: "assets/org.png",
      description: "Developed a modular platform serving over 3,000 organizations, optimizing approval and renewal workflows to boost administrative efficiency by 30%. Integrated automated notifications and approval mechanisms to minimize manual effort and enhance overall operational productivity.",
      techStack: ["Angular js", "PHP", "MySQL"]
    },
    {
      name: "Rule-Based Payroll Deduction Engine",
      category: "angular",
      image: "assets/penalty.png",
      description: "Built a configurable payroll engine that applies deductions based on attendance irregularities and late entries. Introduced a policy management interface allowing HR teams to define rules without technical support, reducing manual intervention and enhancing system scalability and maintainability.",
      techStack: ["Angular", "PHP", "MySQL"]
    },
    
  ];

  get filteredProjects() {
    if (this.selectedFilter === 'all') return this.projects;
    return this.projects.filter(p => p.category === this.selectedFilter);
  }

  filterProjects(category: string) {
    this.selectedFilter = category;
  }

  openPopup(project: any) {
    this.activeProject = project;
  }

  closeModal(event?: any) {
    if (!event || event.target.classList.contains('modal-backdrop')) {
      this.activeProject = null;
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscKey() {
    this.activeProject = null;
  }
}

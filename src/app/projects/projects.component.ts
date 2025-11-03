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
      category: "angular",
      image: "assets/crms.jpg",
      description: "A CRM system for managing leads, deals, and analytics with a secure multi-tenant architecture and interactive dashboards.",
      techStack: ["Angular 17", "AdonisJS", "MySQL", "Highcharts.js"]
    },
    {
      name: "Organization Management System",
      category: "react",
      image: "assets/org.png",
      description: "A modular React-based platform for onboarding, subscription management, and workflow automation, improving admin efficiency by 30%.",
      techStack: ["React", "Node.js", "MongoDB"]
    }
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

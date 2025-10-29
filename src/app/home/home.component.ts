import { Component } from '@angular/core';
@Component({ selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css'] })
export class HomeComponent {
    ngAfterViewInit() {
        const roles = ["Angular Developer", "Full Stack Developer", "PHP Developer", "Team Lead"];
        let index = 0;
        const typingEl = document.getElementById("typing-text")!;

        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const current = roles[index];
            const visible = current.substring(0, charIndex);
            typingEl.textContent = visible;

            if (!isDeleting && charIndex < current.length) {
                charIndex++;
                setTimeout(typeEffect, 100);
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
                setTimeout(typeEffect, 50);
            } else {
                isDeleting = !isDeleting;
                if (!isDeleting) {
                    index = (index + 1) % roles.length;
                }
                setTimeout(typeEffect, 1000);
            }
        }

        typeEffect();
    }

}

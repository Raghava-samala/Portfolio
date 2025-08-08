document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggling ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme preference from local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
        if (savedTheme === 'light-theme') {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light-theme');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark-theme');
        }
    });

    

    // Smooth Scroll for Nav Links
    document.querySelectorAll('.navbar a, .scroll-down-arrow').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId) {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
            // Close mobile menu after clicking a link
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                mobileMenuIcon.querySelector('i').classList.add('fa-bars');
                mobileMenuIcon.querySelector('i').classList.remove('fa-times');
            }
        });
    });

    // Fade-in on Scroll Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(section => {
        observer.observe(section);
    });
    
    // Project Details Toggle (FIXED)
    document.querySelectorAll('.toggle-details').forEach(button => {
        button.addEventListener('click', () => {
            // Find the closest ancestor with the class 'project-card'
            const projectCard = button.closest('.project-card');
            if (projectCard) {
                const details = projectCard.querySelector('.project-details');
                if (details) {
                    details.style.display = details.style.display === 'block' ? 'none' : 'block';
                    button.textContent = button.textContent === 'Read More' ? 'Read Less' : 'Read More';
                }
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Reveal Animations
    const observerOptions = {
        threshold: 0.05, // More forgiving threshold
        rootMargin: '0px 0px -20px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered reveal
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 80); // Slightly faster stagger
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => revealObserver.observe(el));

    // SAFETY OVERRIDE: Force reveal all elements if observer fails after 2 seconds
    setTimeout(() => {
        revealElements.forEach(el => {
            if (!el.classList.contains('active')) {
                el.classList.add('active');
                el.style.transition = 'opacity 0.4s ease-out'; // Faster reveal for safety
            }
        });
    }, 2000);

    // Parallax Liquid Blobs
    window.addEventListener('mousemove', (e) => {
        const blobs = document.querySelectorAll('.blob');
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 30;
            blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Subscribe Form
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = subscribeForm.querySelector('button');
            button.disabled = true;
            button.textContent = "You're on the list! We'll notify you.";
            subscribeForm.querySelector('input').value = '';
        });
    }

    // Mobile hamburger
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
    }

    // Dynamic Hover Effects for Bento Items
    const bentoItems = document.querySelectorAll('.bento-item');
    bentoItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.borderColor = 'rgba(34, 197, 94, 0.4)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        });
    });

    // Difficulty Toggles for Resource Hub
    const filterBtns = document.querySelectorAll('.filter-btn');
    const trackCards = document.querySelectorAll('.track-card');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                trackCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'flex';
                        setTimeout(() => card.style.opacity = '1', 10);
                    } else {
                        card.style.opacity = '0';
                        setTimeout(() => card.style.display = 'none', 300);
                    }
                });
            });
        });
    }
});

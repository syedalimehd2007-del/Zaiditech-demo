// ✅ REGISTER SCROLLTRIGGER
gsap.registerPlugin(ScrollTrigger);

// Smooth scrolling
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Hero animations
gsap.from(".hero-title", { opacity: 0, y: 50, duration: 1 });
gsap.from(".hero-sub", { opacity: 0, y: 50, duration: 1, delay: 0.3 });
gsap.from(".cta", { opacity: 0, scale: 0.8, duration: 1, delay: 0.6 });

// Feature cards animation
gsap.utils.toArray('.feature-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.2
    });
});

// Steps animation
gsap.utils.toArray('.step').forEach((step, index) => {
    gsap.from(step, {
        scrollTrigger: {
            trigger: step,
            start: "top 80%"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.3
    });
});

// Testimonials animation
gsap.utils.toArray('.testimonial').forEach((test, index) => {
    gsap.from(test, {
        scrollTrigger: {
            trigger: test,
            start: "top 80%"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.3
    });
});

// Particle background
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

let particles = [];
for (let i = 0; i < 150; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5),
        dy: (Math.random() - 0.5)
    });
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,180,216,0.7)';
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;
    });
    requestAnimationFrame(drawParticles);
}
drawParticles();

window.addEventListener('resize', resizeCanvas);

javascript
document.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.parentElement.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.parentElement.classList.add('active');
        }
    });

    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'black';
        nav.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Darker shadow on scroll
    } else {
        nav.style.backgroundColor = 'blue';
        nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Original shadow
    }
});

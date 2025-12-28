// Scroll reveal for all .reveal elements
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));

const links = document.querySelectorAll('.navbar a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;

    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    window.scrollTo({
      top: target.offsetTop - navbarHeight,
      behavior: 'smooth'
    });
  });
});



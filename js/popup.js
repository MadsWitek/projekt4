window.addEventListener('DOMContentLoaded', setup);
console.log('DOM Loaded');

function setup() {
    const options = {
        rootMargin: '-60px 0px -60px 0px'
    }
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show')
                observer.unobserve(entry.target);
            } else {
                return;
            }
        })
    }, options)

    const h2 = document.querySelectorAll(".overskrift");
    h2.forEach(overskrift => observer.observe(overskrift));

    const h = document.querySelectorAll(".overskrift1");
    h.forEach(overskrift1 => observer.observe(overskrift1));
    
    const h3 = document.querySelectorAll(".overskrift2");
    h3.forEach(overskrift2 => observer.observe(overskrift2));

    const p = document.querySelectorAll(".tekst");
    p.forEach(tekst => observer.observe(tekst));
    
    const box = document.querySelectorAll(".box1");
    box.forEach(box1 => observer.observe(box1));

    const boxx = document.querySelectorAll(".box2");
    boxx.forEach(box2 => observer.observe(box2));
}
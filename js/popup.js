window.addEventListener('DOMContentLoaded', setup);
console.log('DOM Loaded');

function setup() {
    const options = {
        rootMargin: '-60px -0px -0px -60px'
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

    const indleag = document.querySelectorAll(".container");
    indleag.forEach(container => observer.observe(container));

}
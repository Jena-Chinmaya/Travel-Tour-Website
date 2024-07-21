document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        const emailInput = form.querySelector('input[type="email"]');
        if (!validateEmail(emailInput.value)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
        }
    });

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});

document.querySelectorAll('.logo-slider .slide').forEach(slide => {
    slide.addEventListener('mouseover', () => {
        document.querySelector('.logo-slider .slider').style.animationPlayState = 'paused';
    });
    slide.addEventListener('mouseout', () => {
        document.querySelector('.logo-slider .slider').style.animationPlayState = 'running';
    });
});


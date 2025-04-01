function animateCounter(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let counter = entry.target;
            let target = parseInt(counter.getAttribute('data-count'));
            let speed = Math.ceil(target / 100); // Adjust speed
            let count = 0;

            let updateCount = () => {
                if (count < target) {
                    count += speed;
                    counter.innerText = count + "+";
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target + "+"; // Ensure it stops at exact number
                }
            };

            updateCount();
            observer.unobserve(counter); // Stop observing once animated
        }
    });
}

let options = { threshold: 0.5 }; // Trigger when 50% is visible
let observer = new IntersectionObserver(animateCounter, options);
document.querySelectorAll('.counter-box').forEach(counter => observer.observe(counter));
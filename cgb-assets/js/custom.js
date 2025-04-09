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


async function setPhoneNumberBasedOnLocation() {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      console.log("User Country:", data.country_name); // For debugging
      const isIndia = data.country_name === "India";
      const phoneNumber = isIndia ? "+9888912909" : "+971505682557";
      const address = isIndia
        ? "2nd Floor, No.112, AKR Tech Park, 7th Mile Hosur Rd, Bengaluru, Karnataka-560068"
        : "Sultan Business Centre, Oud Mehta, Dubai, UAE. PO BOX - 554617";

      document.getElementById("phone-number").textContent = phoneNumber;
      document.getElementById("address").textContent = address;
    } catch (error) {
      console.error("Geolocation fetch error:", error);
      document.getElementById("phone-number").textContent = "+971505682557";
      document.getElementById("address").textContent =
        "Sultan Business Centre, Oud Mehta, Dubai, UAE. PO BOX - 554617";
    }
  }

  setPhoneNumberBasedOnLocation();


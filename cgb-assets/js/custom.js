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
  
      const isIndia = data.country_name === "India";
      const phoneNumber = isIndia ? "+91 9888912909" : "+971505682557";
      const address = isIndia
        ? "2nd Floor, No.112, AKR Tech Park, 7th Mile Hosur Rd, Bengaluru, Karnataka-560068"
        : "Sultan Business Centre, Oud Mehta, Dubai, UAE. PO BOX - 554617";
  
      const telHref = `tel:${phoneNumber.replace(/\s+/g, "")}`;
  
      // Update all main phone links (still assuming only one)
      const phoneLink = document.getElementById("phone-link");
      if (phoneLink) {
        phoneLink.textContent = phoneNumber;
        phoneLink.href = telHref;
      }
  
      // Update address
      const addressEl = document.getElementById("address");
      if (addressEl) {
        addressEl.textContent = address;
      }
  
      // Update all <a class="phone-button">
      document.querySelectorAll(".phone-button").forEach((el) => {
        el.href = telHref;
      });
  
      // Update all <span class="phone-text">
      document.querySelectorAll(".phone-text").forEach((el) => {
        el.textContent = phoneNumber;
      });
  
      console.log("Detected Country:", data.country_name);
      console.log("Phone Number Selected:", phoneNumber);
  
    } catch (error) {
      console.error("Geolocation fetch error:", error);
  
      const defaultPhone = "+971505682557";
      const defaultAddress = "Sultan Business Centre, Oud Mehta, Dubai, UAE. PO BOX - 554617";
      const telDefault = `tel:${defaultPhone.replace(/\s+/g, "")}`;
  
      const phoneLink = document.getElementById("phone-link");
      if (phoneLink) {
        phoneLink.textContent = defaultPhone;
        phoneLink.href = telDefault;
      }
  
      const addressEl = document.getElementById("address");
      if (addressEl) {
        addressEl.textContent = defaultAddress;
      }
  
      // Update all <a class="phone-button">
      document.querySelectorAll(".phone-button").forEach((el) => {
        el.href = telDefault;
      });
  
      // Update all <span class="phone-text">
      document.querySelectorAll(".phone-text").forEach((el) => {
        el.textContent = defaultPhone;
      });
    }
  }
  
  window.addEventListener("DOMContentLoaded", setPhoneNumberBasedOnLocation);


  // owl owlCarousel testimonals  
  $(':is(#owl_slider_1, #owl_slider_1)').owlCarousel({
    center: true,
    loop: true,
    nav: true,
    navText: ["<i class='fa-solid fa-angle-left'>", "<i class='fa-solid fa-angle-right'>"],
    // mouseDrag: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    margin: 10,
    responsive: {
        0: {
            items: 1,
            dots: false,
            nav: false,
        },

        768: {
            items: 2,
            dots: false,
            nav: false,
        },

        991: {
            items: 3
        }
    },
});
$('#owl_slider_2').owlCarousel({
    items: 2,
    loop: true,
    nav: true,
    navText: ["<i class='fa-solid fa-angle-left'>", "<i class='fa-solid fa-angle-right'>"],
    // mouseDrag: true,
    // center:true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    margin: 10,
    responsive: {
        0: {
            items: 1,
            dots: false,
            // nav: false,
        },

        600: {
    items: 2 
  }
    },
});
  






  


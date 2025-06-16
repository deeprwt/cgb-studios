// custom code form summision into google sheet

const scriptURL =
    "https://script.google.com/macros/s/AKfycbxQnxMFDczefqO5TK_ow5PclgLjRjqmikug96_8lrgnoau2InJNlwbBt5KGQCitTCP9-A/exec";

  document.querySelectorAll(".google-sheet-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = {
        name: form.name.value,
        email: form.email.value,
        number: form.number.value,
        company: form.company.value,
        service: form.service.value,
        message: form.message.value,
      };

      fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            // alert("✅ Submitted successfully!");
            form.reset();
            window.location.href = "https://www.cgb-studios.com/thank-you/";
          } else {
            alert("❌ Submission failed.");
          }
        })
        .catch((error) => {
          console.error("Error!", error.message);
          alert("❌ Something went wrong!");
        });
    });
  });

      // custom code pop up form summision into google sheet

       const leadScriptURL =
    'https://script.google.com/macros/s/AKfycbxQnxMFDczefqO5TK_ow5PclgLjRjqmikug96_8lrgnoau2InJNlwbBt5KGQCitTCP9-A/exec';
  const leadForm = document.getElementById('leadForm');

  leadForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
      name: leadForm.name.value,
      email: leadForm.email.value,
      number: leadForm.number.value,
      company: leadForm.company.value, 
      service: leadForm.service.value,
      message: leadForm.message.value,
    };

    fetch(leadScriptURL, {
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          sessionStorage.setItem('leadFormSubmitted', 'true');
          window.location.href = 'https://www.cgb-studios.com/thank-you/';
        } else {
          alert('❌ Submission failed.');
        }
      })
      .catch((error) => {
        console.error('Error!', error.message);
        alert('❌ Something went wrong!');
      });
  });

  // Show modal if not submitted in session
  window.addEventListener('load', function () {
    const formSubmitted = sessionStorage.getItem('leadFormSubmitted');

    if (!formSubmitted) {
      setTimeout(function () {
        var myModal = new bootstrap.Modal(
          document.getElementById('leadModal')
        );
        myModal.show();
      }, 4000);
    }
  });
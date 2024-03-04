document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const myForm = document.getElementById("myForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("email").value;

        fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ email: email }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                document.getElementById('loginContainer').classList.add("hidden");
                document.getElementById('formContainer').classList.remove("hidden");
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            alert("Error logging in. Please try again.");
        });
    });

    myForm.addEventListener("submit", function(event) {
        event.preventDefault();

        function success(position) {
            document.getElementById("latitude").value = position.coords.latitude;
            document.getElementById("longitude").value = position.coords.longitude;
            submitForm();
        }

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
            submitForm(); // Submit the form without geolocation data
        }

        function submitForm() {
            // Set the timestamp just before submitting the form
            document.getElementById("timestamp").value = new Date().toISOString();

            const formData = new FormData(myForm);

            fetch('/submit-form', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                alert("Form submitted successfully!");
                myForm.reset();
            })
            .catch(error => {
                console.error("Error submitting form: ", error);
                alert("Error submitting form. Please try again.");
            });
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.error("Geolocation is not supported by this browser.");
            submitForm(); // Submit the form without geolocation data
        }
    });
});

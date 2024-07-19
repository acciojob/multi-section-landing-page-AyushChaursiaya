//your JS code here. If required.
// document.getElementById("controler").document.addEventListener("submit", function (event) => {
// 	let isValid = true;	

// 	const FullName = document.getElementById("fullName");
// 	if(FullName.value.trim() === "") {
// 		isValid = false;
// 		document.getElementById("fullNameError").style.display = "block";
// 	}else {
// 		document.getElementById("fullNameError").style.display = "none";
// 	}

// 	if (!isValid) {
// 		event.preventDefault();
// 	}
// })

document.getElementById('contactForm').addEventListener('submit', function(event) {
            let isValid = true;

            // Full Name Validation
            const fullName = document.getElementById('fullName');
			if (fullName.value.trim() === "") {
				document.getElementById("fullName").style.display = "Full Name is required."
			}
	
            if (fullName.value.trim() === '') {
                isValid = false;
                document.getElementById('fullNameError').style.display = 'block';
            }
			else {
                document.getElementById('fullNameError').style.display = 'none';
            }

            // Email Validation
            const email = document.getElementById('email');
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email.value)) {
                isValid = false;
                document.getElementById('emailError').style.display = 'block';
            } else {
                document.getElementById('emailError').style.display = 'none';
            }

            // Phone Number Validation
            const phone = document.getElementById('phone');
            const phonePattern = /^[0-9]{10}$/;
            if (phone.value !== '' && !phonePattern.test(phone.value)) {
                isValid = false;
                document.getElementById('phoneError').style.display = 'block';
            } else {
                document.getElementById('phoneError').style.display = 'none';
            }

            // Message Validation
            const message = document.getElementById('message');
            if (message.value.trim().length < 100) {
                isValid = false;
                document.getElementById('messageError').style.display = 'block';
            } else {
                document.getElementById('messageError').style.display = 'none';
            }

            if (!isValid) {
                event.preventDefault();
            }
        });
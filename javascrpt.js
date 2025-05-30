function compliment() {
            var complimentBtn = document.getElementById("rdoCompliment");
            var complaintBtn = document.getElementById("rdoComplaint");

            complaintBtn.checked = true;
            complimentBtn.checked = false;

            var alertRnd = Math.floor(Math.random() * 10);
            switch (alertRnd) {
                case 0:
                    alert("NO compliments allowed! You will now submit a complaint!");
                    break;
                case 1:
                    alert("Why would you want to compliment the study fairy?? No no no, you should rather complain.");
                    break;
                case 2:
                    alert("Compliments? Not here! Complaints are the way to go!");
                    break;
                case 3:
                    alert("Who needs compliments when complaints are so much better?");
                    break;
                case 4:
                    alert("Compliments are overrated! It's time to complain.");
                    break;
                case 5:
                    alert("No compliments allowed! You should be complaining by now!");
                    break;
                case 6:
                    alert("Stop right there! Compliments? We deal in complaints only.");
                    break;
                case 7:
                    alert("Compliments? You must be mistaken—complaints are the rule!");
                    break;
                case 8:
                    alert("A compliment? How strange. A complaint would be much more appropriate.");
                    break;
                case 9:
                    alert("No room for compliments! Complaints, complaints, and more complaints!");
                    break;
            }

            var textbox = document.getElementById("complaintText");
            textbox.placeholder = "Enter your complaint here.";    
        }

        function complaints() {
            var textbox = document.getElementById("complaintText");
            textbox.placeholder = "Enter your complaint here.";  
        }

        function handleSubmit(event) {
            event.preventDefault(); // Prevent form from submitting normally

            var textbox = document.getElementById("complaintText");
            var complaintBtn = document.getElementById("rdoComplaint");
            var complimentBtn = document.getElementById("rdoCompliment");

            if (textbox.value.trim() !== "" && complaintBtn.checked == true) {
                alert("Your complaint has been recorded and will be taken up with the Study Fairy at the earliest possible time. For now she's out and we don't have a clue where she is or when she might be back!");

                // Handle form submission using AJAX
                var formData = new FormData(document.getElementById("studyFairyForm"));
                fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString()
                })
                .then(function() {
                    console.log("Form successfully submitted");
                    textbox.value = ""; // Clear the textarea after submission
                })
                .catch(function(error) {
                    console.error("Error in form submission", error);
                });
                
            } else {
                if (textbox.value.trim() === "") {
                    alert("Please enter a complaint before submitting!");
                }
                if (!complaintBtn.checked && !complimentBtn.checked) {
                    alert("Please select if this is a complaint or compliment before submitting!");
                }
            }
        }
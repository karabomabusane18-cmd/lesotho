function darkmode(){
            var element = document.body;
            element.classList.toggle("dark-mode");
        }
function myFunction(imgs){
            var expandImg = document.getElementById("expandedImg");
            var imgText = document.getElementById("imgtext");
            expandImg.src = imgs.src;
            imgText.innerHTML = imgs.alt;
            expandImg.parentElement.style.display = "block";
        }
function calculateFullPrice() {
            const guestCount =
                Number(document.getElementById("guests").value) || 0;
            const nightCount =
                Number(document.getElementById("nights").value) || 0;
            const price =
                Number(document.getElementById("roomchoice").value) || 0;
            const total = guestCount * nightCount * price;
            document.getElementById("total").textContent =
                total.toLocaleString();
        }
        window.onload = calculateFullPrice;
        document.getElementById("bookings").addEventListener("submit", function(event) {
            event.preventDefault();
            calculateFullPrice();
            alert("Your booking details have been submitted successfully!");

        });
        const today = new Date().toISOString().split("T")[0];
        document.getElementById("checkin").setAttribute("min", today);

function validateForm(){
            let x = document.forms["myForm"]["uname"].value;
            if (x == "") {
                alert("Name must be filled out");
                return false;
            }
        }
function submit() {
            alert("The form was submitted");
        }
function darkmode() {
            var element = document.body;
            element.classList.toggle("dark-mode");
        }

const btnSubmit = document.querySelector(".submit");

btnSubmit.addEventListener("click", function() {
        const inputElement = document.querySelector(".input");
        const input = inputElement.value;
        const error = document.querySelector(".error");
        const icon = document.querySelector(".icon");

        if(input.indexOf('@gmail') === -1 || input.indexOf('.com') === -1){
            error.textContent = "Please provide a valid email";
            icon.style.display = "block";
        }
        else{
            error.textContent = "Thanks for subscribing!";
            icon.style.display = "none";
            inputElement.value = "";
        }
})
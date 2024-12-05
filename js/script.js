
const btnSubmit = document.querySelector(".submit");

btnSubmit.addEventListener("click", function() {
        const input = document.querySelector(".input").value;
        const error = document.querySelector(".error");
        const icon = document.querySelector(".icon");

        if(input.indexOf('@gmail') === -1 || input.indexOf('.com') === -1){
            error.textContent = "Please provide a valid email";
            icon.style.display = "block";
        }
        else{
            error.textContent = "Login Successful";
            icon.style.display = "none";
        }
})
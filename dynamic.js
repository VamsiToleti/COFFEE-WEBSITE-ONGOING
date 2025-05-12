// alert("hi user")

// let signup=document.querySelector(".signup");
// signup.addEventListener("click", function(event){
//     event.preventDefault();
//     console.log("sign up is clicked")

// });


let login=document.querySelector(".login")
login.addEventListener("click", function(event){
        event.preventDefault();
    console.log("login button is pressed")
})


function signup(){
    window.location.href = "signup.html";  
}


window.addEventListener("DOMContentLoaded", () => {
    const tempUser = localStorage.getItem("tempUsername");
    if (tempUser) {
        const userNameLi = document.getElementById("user-name");
        userNameLi.innerHTML = tempUser;

        // Clear the username from storage so it resets on refresh
        localStorage.removeItem("tempUsername");
    }
});

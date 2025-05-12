let uname = document.querySelector(".uname");
let btn = document.querySelector(".submit");
let pwd = document.querySelector(".pwds");
let cpwd = document.querySelector(".cpwds");

btn.addEventListener("click", function () {
    console.log(uname.value)
    console.log(pwd.value)
    console.log(cpwd.value)
    check();
    indi();
});

let istrue = false;

function check() {
    let un = uname.value;
    let pw = pwd.value;
    let cp = cpwd.value;

    let uno = String(un);

    if (uno.length <= 1) {
        alert("username can't be that small");
        istrue = false;
        return;
    }

    if (pw === "" || cp === "") {
        alert("password and confirm password cannot be empty");
        istrue = false;
        return;
    }

    if (pw !== cp) {
        alert("password and confirm password should be same");
        istrue = false;
        return;
    }

    istrue = true;
}

function indi() {
    if (istrue) {
        localStorage.setItem("tempUsername", uname.value); // temp storage
        window.location.href = "index.html";
    }
}



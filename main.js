// show menu

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
   
    if (toggle && nav) {
        toggle.addEventListener("click", ()=> {
            nav.classList.toggle("show")
        });
    }

}


showMenu("nav_toggle","nav_menu")

//active and remove active

const navLink = document.querySelectorAll(".nav_link")
navLink.forEach(n=>n.classList.remove("active"))

function linkAction() {
    navLink.forEach(n=>n.classList.remove("active"))
    this.classList.add("active")

    const navMenu = document.getElementById("nav_menu")
    navMenu.classList.remove("show")
}

navLink.forEach(n => n.addEventListener("click", linkAction))



let res_btn1 = document.getElementById("resume-button-1")
let res_btn2 = document.getElementById("resume-button-2")

res_btn1.addEventListener("click", openResume)
res_btn2.addEventListener("click", openResume)

function openResume() {

    window.open("https://drive.google.com/file/d/1u6ljrFNt2GvHAKtq-8Zz2UZmXvqW6lG4/view?usp=share_link", "_blank")
    // window.location = "https://drive.google.com/file/d/1u6ljrFNt2GvHAKtq-8Zz2UZmXvqW6lG4/view?usp=share_link";
}

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

// res_btn1.addEventListener("click", openResume)
// res_btn2.addEventListener("click", openResume)

function openResume() {

    window.open("https://drive.google.com/file/d/1u6ljrFNt2GvHAKtq-8Zz2UZmXvqW6lG4/view?usp=share_link", "_blank")
    
}


// project 1

const project1_code = document.getElementById("project1_code")
project1_code.addEventListener("click", projectoneCode)

function projectoneCode() {
    window.open("https://github.com/AditiSharma00/truthful-wing-8761", "_blank")
}


const project1_live = document.getElementById("project1_live")
project1_live.addEventListener("click", projectoneLive)

function projectoneLive() {
    
    window.open("https://sensational-wisp-a46f22.netlify.app/", "_blank")
}



// project 2


const project2_code = document.getElementById("project2_code")
project2_code.addEventListener("click", projecttwoCode)

function projecttwoCode() {
    window.open("https://github.com/AditiSharma00/truthful-wing-8761", "_blank")
}


const project2_live = document.getElementById("project2_live")
project2_live.addEventListener("click", projecttwoLive)

function projecttwoLive() {
    
    window.open("https://sensational-wisp-a46f22.netlify.app/", "_blank")
}


// project 3


const project3_code = document.getElementById("project3_code")
project3_code.addEventListener("click", projectthreeCode)

function projectthreeCode() {
    window.open("https://github.com/AditiSharma00/truthful-wing-8761", "_blank")
}


const project3_live = document.getElementById("project3_live")
project3_live.addEventListener("click", projectthreeLive)

function projectthreeLive() {
    
    window.open("https://sensational-wisp-a46f22.netlify.app/", "_blank")
}


// project 4


const project4_code = document.getElementById("project4_code")
project4_code.addEventListener("click", projectfourCode)

function projectfourCode() {
    window.open("https://github.com/AditiSharma00/truthful-wing-8761", "_blank")
}


const project4_live = document.getElementById("project4_live")
project4_live.addEventListener("click", projectfourLive)

function projectfourLive() {
    
    window.open("https://sensational-wisp-a46f22.netlify.app/", "_blank")
}



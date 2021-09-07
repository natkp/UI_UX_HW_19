// Function to select element

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {   //activates nav when hamburger menu is clicked
    selectElement(".nav-list").classList.toggle("active")  
    selectElement(".burger-menu-icon").classList.toggle("toggle")

    navLinks.forEach((link,index) => {
        if (link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.3}s`
            console.log(index/7 + 0.3)
        }
    })
});  
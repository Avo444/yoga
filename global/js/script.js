let burger = document.getElementById("burger"), navContent = document.querySelector(".navContent");

burger.addEventListener("click", () => {
    navContent.classList.toggle("active");
})

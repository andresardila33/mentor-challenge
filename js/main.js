const shareIcon = document.querySelector(".share__icon");
const tooltip = document.querySelector(".tooltip");

shareIcon.addEventListener('click', () => {
    tooltip.classList.toggle("active");
})
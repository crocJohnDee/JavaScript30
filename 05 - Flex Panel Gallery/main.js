const panels = document.querySelectorAll(".panel");

function toggleOpen(e) {
    this.classList.toggle("open");
    panels.forEach(panel => {
        if (panel.classList.length != 2 && panel != this) {
            panel.classList.remove("open");
        }
    });
}

function toggleActive(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("active");
    }
}
panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));



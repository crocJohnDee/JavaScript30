const items = document.querySelectorAll(".inbox [type= checkbox ]");
let lastChecked; // each time handleChecked function runs the current checkbox will become lastChecked

function handleChecked(e) {

    let inBetween = false; //flag to flip the state
    if (e.shiftKey && this.checked) {
        items.forEach(item => {
            if (item === this || item === lastChecked) {
                inBetween = !inBetween; //this turns true from either -this or -handleChecked
            }
            if (inBetween) {
                item.checked = true;
            }
        })
    }
    lastChecked = this;
}

items.forEach(item => item.addEventListener("click", handleChecked));

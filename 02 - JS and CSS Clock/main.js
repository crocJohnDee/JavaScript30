function setDate() {
    const secondHand = document.querySelector(".second-hand");
    const minHand = document.querySelector(".min-hand");
    const hourHand = document.querySelector(".hour-hand");
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondDegrees === 90 ? secondHand.style.transition = "none" :
        secondHand.style.transition = "all 0.05s cubic-bezier(0.25, 2.34, 0.58, 1) 0s";
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    minuteDegrees === 90 ? minHand.style.transition = "none" :
        minHand.style.transition = "all 0.05s cubic-bezier(0.25, 2.34, 0.58, 1) 0s";
    minHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + 90;
    hourDegrees === 90 ? hourHand.style.transition = "none" :
        hourHand.style.transition = "all 0.05s cubic-bezier(0.25, 2.34, 0.58, 1) 0s";
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
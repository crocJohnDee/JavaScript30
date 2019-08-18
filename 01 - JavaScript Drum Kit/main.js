function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;

    //sets audio-time back to 0 if the key is pressed again, but the audio is still running
    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
    setTimeout(() => {
        key.classList.remove("playing");
    }, 70)
}

document.addEventListener("keydown", playSound);

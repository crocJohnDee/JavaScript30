const pressed = [];
const secretCode = "a";


window.addEventListener("keyup", (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode - 1, pressed.length - secretCode.length);
    if (pressed.join("").includes(secretCode)) {
        cornify_add();
    }
})
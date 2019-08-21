const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");//contact

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "black";//"#BADA55";
ctx.lineJoin = "join";
ctx.lineCap = "round"; // MDN for options
ctx.lineWidth = 0;
ctx.globalCompositeOperation = "color";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let linewidth = 0;
//let direction = true;
function draw(e) {
    if (!isDrawing) return;
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = linewidth;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]
    if (hue > 360) hue = 0;
    hue++;
    if (linewidth > 10) linewidth = 0;
    linewidth++;

}

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
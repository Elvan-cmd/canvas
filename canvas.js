const canvas = document.getElementById('art');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

let i,
    j,
    step = 40;

let randomness = 200;
let colorSpace = 80;

function drawLines() {
    const lines = [];
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (i = 0; i <= canvasWidth; i += step) {
        const line = [];
        for (j = 0; j <= canvasHeight; j += step) {
            const horizontalRandomness = j > canvasWidth / 2 ? canvasWidth - j : j;
            const rand =
                Math.random() * randomness * horizontalRandomness / canvasWidth;
            line.push({
                x: j + rand,
                y: i + rand
            });
        }
        lines.push(line);
    }

    for (i = 0; i < lines.length; i++) {
        context.beginPath();
        context.moveTo(lines[i][0].y, lines[i][0].x);
        for (j = 0; j < lines[i].length; j++) {
            context.lineTo(lines[i][j].y, lines[i][j].x);
        }
        context.strokeStyle = `hsl(${step *
      i /
      canvasHeight *
      colorSpace}, 100%, 70%)`;
        context.stroke();
    }

    colorSpace += 80;
}

setInterval(drawLines, 100);

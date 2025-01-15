// Get the canvas and its context
const canvas = document.getElementById('draw-canvas');
const ctx = canvas.getContext('2d');

let drawing = false; // Track whether the user is drawing

// Event listeners for drawing
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY); // Start at mouse position
});

canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        ctx.lineTo(e.offsetX, e.offsetY); // Draw a line to the current mouse position
        ctx.stroke();
        sendCanvasState(); // Send the canvas state whenever it updates
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    // sendCanvasState(); // Final state after finishing the stroke
});

canvas.addEventListener('mouseleave', () => {
    drawing = false; // Stop drawing if the mouse leaves the canvas
});

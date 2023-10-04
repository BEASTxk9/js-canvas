console.log("loading...");


// fetch
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext("2d");


// styling
canvas.width = 1000;
canvas.height = 600;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.globalCompisiteOperation = 'darken';

// instructions
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;


function draw(e) {
    if (!isDrawing) { return; };
    // console.log(e);

    // line style
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    // when drawing add hue to change color
    hue++;

    // start from
    ctx.beginPath();
    // go to
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    if(hue >= 360){
        hue = 0;
    }
    // // if more/equal to 50 OR if less/equal to 1 
    // if(ctx.lineWidth >= 50 || ctx.lineWidth <= 1){
    //     //  change direction if more/equal to 50 or less/equal to 1
    //     direction = !direction;
    // }
    // if(direction){
    //     ctx.lineWidth ++
    // } else{
    //     ctx.lineWidth --
    // }
    

}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

//////////////////////////////////////////////////////////
//                        MAIN                          //
//////////////////////////////////////////////////////////

var up = false, right = false, down = false, left = false;
// Baseline variables 
var mobile, app, cvs, cx, w, h, asp, asp2, rect, rng, seed, currentHover, currentHeld, mouseX, mouseY;
// Scalings
var w2 = 960; var h2 = 540;
// Toggles
var debug = true;
var webGL = true;

// App Setup
window.onload = function() 
{
    // loadWeb3();
    initSetup();
}

function initSetup() 
{
    console.log("Initilizing...");
    cvs = document.getElementById('cvs');
    cx = cvs.getContext("2d");
    w = cvs.clientWidth;
    h = cvs.clientHeight;
    asp = w/h; // Aspect ratio of window
    asp2 = w2/h2; // Aspect ratio of inner cvs
    
    cx.imageSmoothingEnabled = false;

    setupEventListeners(cvs);

    // Mobile/Resizing handling 

    // Kick off Loading/Generating Assets
    // startLoad();
    // Kick off main tick
    tick();
}

function tick(timestamp) 
{
    // console.log("Tick");
    cx.clearRect(0, 0, w, h);
    
    cx.font = '16px monospace';

    cx.fillStyle = '#fff';
    if(up) { cx.fillStyle = '#3f3'; }
    cx.fillText('Up: ' + up, 10, 30);
    cx.fillStyle = '#fff';
    if(down) { cx.fillStyle = '#3f3'; }
    cx.fillText('Down: ' + down, 10, 50);
    cx.fillStyle = '#fff';
    if(left) { cx.fillStyle = '#3f3'; }
    cx.fillText('Left: ' + left, 10, 70);
    cx.fillStyle = '#fff';
    if(right) { cx.fillStyle = '#3f3'; }
    cx.fillText('Right: ' + right, 10, 90);
    // Request next frame, ie r loop
    requestAnimationFrame(tick);
}

// Keydown listener
onkeydown = (e) => {
    const k = e.key.toLowerCase();
    // Up (up / W / Z)
    if (k === "arrowup" || k === "w" || k === "z") up = true;
    // Right (right / D)
    if (k === "arrowright" || k === "d") right = true;
    // Down (down / S)
    if (k === "arrowdown" || k === "s") down = true;
    // Left (left / A / Q)
    if (k === "arrowleft" || k === "a" ||k === "q") left = true;

    // console.log("E: " + e.key);
}

// Keyup listener
onkeyup = (e) => {
    const k = e.key.toLowerCase();
    // Up
    if (k === "arrowup" || k === "w" || k === "z") up = false;
    // Right
    if (k === "arrowright" || k === "d") right = false;
    // Down
    if (k === "arrowdown" || k === "s") down = false;
    // Left
    if(k === "arrowleft" || k === "a" || k === "q") left = false;

    // console.log("UP: " + up);
}

function setupEventListeners(c) {
    c.addEventListener('keydown', onkeydown);
    c.addEventListener('keyup', onkeyup);

    // Event listener to track mouse/touch movement
    c.addEventListener('pointermove', (e) => {
        console.log("pointermove");
    });
    // Event listener to track mouse/touch down
    c.addEventListener('pointerdown', (e) => {
        console.log("pointerdown");
    });
    // Event listener to track mouse/touch up
    c.addEventListener('pointerup', (e) => {
        console.log("pointerup");
    });
    // The same as pointer up, but for mobile specific cases
    c.addEventListener('pointercancel', (e) => {
        console.log("pointercancel");
    });
}
//////////////////////////////////////////////////////////
//                        MAIN                          //
//////////////////////////////////////////////////////////
import {
    setupEventListeners,
    checkGamePadMain,
    getInputs,
} from './game/input.js';

// Baseline variables 
var mobile, app, cvs, cx, w, h, asp, asp2, rect, rng, seed, mouseX, mouseY;
// Scalings
var w2 = 960; var h2 = 540;
// Toggles
var debug = true;
var webGL = true;

// App Setup
window.onload = function() {
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
    
    cx.imageSmoothingEnabled = false; // gritty
    
    // Setup event listeners/input
    setupEventListeners(cvs);

    tick();
}

function tick(timestamp) 
{
    cx.clearRect(0, 0, w, h);

    // Handle control inputs
    checkGamePadMain();
    const { uu, dd, ll, rr } = getInputs();

    // Draw debug outputs to cavans
    cx.font = '16px monospace';
    cx.fillStyle = uu ? '#3f3' : '#fff';
    cx.fillText('Up: ' + uu, 10, 30);
    cx.fillStyle = dd ? '#3f3' : '#fff';
    cx.fillText('Down: ' + dd, 10, 50);
    cx.fillStyle = ll ? '#3f3' : '#fff';
    cx.fillText('Left: ' + ll, 10, 70);
    cx.fillStyle = rr ? '#3f3' : '#fff';
    cx.fillText('Right: ' + rr, 10, 90);

    requestAnimationFrame(tick);
}
//////////////////////////////////////////////////////////
//                        MAIN                          //
//////////////////////////////////////////////////////////
import {
    setupEventListeners,
    checkGamePadMain,
    u, d, l, r
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
    
    checkGamePadMain();
    // Draw debug outputs to cavans
    cx.font = '16px monospace';
    cx.fillStyle = u ? '#3f3' : '#fff';
    cx.fillText('Up: ' + u, 10, 30);
    cx.fillStyle = d ? '#3f3' : '#fff';
    cx.fillText('Down: ' + d, 10, 50);
    cx.fillStyle = l ? '#3f3' : '#fff';
    cx.fillText('Left: ' + l, 10, 70);
    cx.fillStyle = r ? '#3f3' : '#fff';
    cx.fillText('Right: ' + r, 10, 90);

    requestAnimationFrame(tick);
}
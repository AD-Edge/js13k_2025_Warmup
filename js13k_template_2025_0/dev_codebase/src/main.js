//////////////////////////////////////////////////////////
//                        MAIN                          //
//////////////////////////////////////////////////////////

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

    // Mobile/Resizing handling 

    // Kick off Loading
    startLoad();
    // Kick off main tick
    tick();
}

function tick(timestamp) 
{
    // cx.clearRect(0, 0, w, h);
    console.log("Tick");
    // Request next frame, ie r loop
    requestAnimationFrame(tick);
}
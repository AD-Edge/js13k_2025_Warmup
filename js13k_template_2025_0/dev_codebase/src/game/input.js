//////////////////////////////////////////////////////////
//                   Input Setup                        //
//////////////////////////////////////////////////////////
// Keys states (false: key is released / true: key is pressed)
up = right = down = left = false;

// Keydown listener
onkeydown = (e) => {
    // Up (up / W / Z)
    if(e.key == 38 || e.key == 90 || e.key == 87){
    up = true;
    }
    // Right (right / D)
    if(e.key == 39 || e.key == 68){
    right = true;
    }
    // Down (down / S)
    if(e.key == 40 || e.key == 83){
    down = true;
    }
    // Left (left / A / Q)
    if(e.key == 37 || e.key == 65 ||e.key == 81){
    left = true;
    }

    console.log("UP: " + up);
}

// Keyup listener
onkeyup = (e) => {
    // Up
    if(e.key == 38 || e.key == 90 || e.key == 87){
        up = false;
    }
    // Right
    if(e.key == 39 || e.key == 68){
        right = false;
    }
    // Down
    if(e.key == 40 || e.key == 83){
        down = false;
    }
    // Left
    if(e.key == 37 || e.key == 65 || e.key == 81){
        left = false;
    }
}

function setupEventListeners(c) {
    c.addEventListener('keydown', onkeydown(e));

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
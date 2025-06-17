//////////////////////////////////////////////////////////
//                   Input Setup                        //
//////////////////////////////////////////////////////////
// Keys states (false: key is released / true: key is pressed)
// Input setup based on this mapping by XEM: https://xem.github.io/articles/jsgamesinputs.html

export let u = 0, d = 0, l = 0, r = 0;
//GamePad
var p=navigator.getGamepads()[0]

function onKeyDown(e) {
    let k=e.key.toLowerCase()
    if(k=="arrowup" || k=="w"||k=="z") u=1
    if(k=="arrowdown" || k=="s") d=1
    if(k=="arrowleft" || k=="a"||k=="q") l=1
    if(k=="arrowright" || k=="d") r=1
    // console.log("E: " + e.key);
}

function onKeyUp(e) {
    let k=e.key.toLowerCase()
    if(k=="arrowup" || k=="w" || k=="z") u=0
    if(k=="arrowdown" || k=="s") d=0
    if(k=="arrowleft" || k=="a" || k=="q") l=0
    if(k=="arrowright" || k=="d") r=0
    // console.log("E: " + e.key);
}

export function setupEventListeners(c) {
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);

    window.addEventListener("gamepadconnected", (e) => {
        console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
            e.gamepad.index, e.gamepad.id,
            e.gamepad.buttons.length, e.gamepad.axes.length
        );
        p=navigator.getGamepads()[0];
    });

    window.addEventListener("gamepaddisconnected", e => {
        console.log("Gamepad disconnected:", e.gamepad.id);
    });

    if (!p) { console.log("Gamepad not found (press a button on the controller to connect)"); }

    // change to window.addEventListener ? 
    c.addEventListener('pointermove', (e) => {});
    c.addEventListener('pointerdown', (e) => {});
    c.addEventListener('pointerup', (e) => {});
    c.addEventListener('pointercancel', (e) => {});
}

export function checkGamePadMain() {
    p=navigator.getGamepads()[0]
    if(p){
        let b=p.buttons
        // Debug controller buttons
        // console.log(JSON.stringify(p.buttons.map(b => b.value), null, 2));
        // b.forEach((btn, index) => {
        //     if (btn.pressed) console.log("Button pressed:", index);
        // });
        //Reset controller bits
        u=d=l=r=0
        //handle DPad and left analoge
        u |= b[12]?.pressed || p.axes[1] < -0.5
        d |= b[13]?.pressed || p.axes[1] > 0.5
        l |= b[14]?.pressed || p.axes[0] < -0.5
        r |= b[15]?.pressed || p.axes[0] > 0.5
    }
}
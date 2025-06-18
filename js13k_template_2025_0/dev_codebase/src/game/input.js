//////////////////////////////////////////////////////////
//                   Input Setup                        //
//////////////////////////////////////////////////////////
// Keys states (false: key is released / true: key is pressed)
// Input setup based on this mapping by XEM: https://xem.github.io/articles/jsgamesinputs.html

let u=0,d=0,l=0,r=0;
let cu=0,cd=0,cl=0,cr=0;
//GamePad
var p=navigator.getGamepads()[0]

onkeydown=n=>{let e=n.key;u|="U"==e[5]|"w"==e|"z"==e,d|="D"==e[5]|"s"==e,l|="L"==e[5]|"a"==e|"q"==e,r|="R"==e[5]|"d"==e}
onkeyup=e=>{let k=e.key;u&=!("U"==k[5]|"w"==k|"z"==k),d&=!("D"==k[5]|"s"==k),l&=!("L"==k[5]|"a"==k|"q"==k),r&=!("R"==k[5]|"d"==k)};

export function setupEventListeners(c) {
    window.addEventListener('keydown', onkeydown);
    window.addEventListener('keyup', onkeyup);

    window.addEventListener("gamepadconnected", (e) => {
        console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
            e.gamepad.index, e.gamepad.id,
            e.gamepad.buttons.length, e.gamepad.axes.length
        );
        p=navigator.getGamepads()[0];
    });

    // window.addEventListener("gamepaddisconnected", e => {
    //     console.log("Gamepad disconnected:", e.gamepad.id);
    // });

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
        cu=cd=cl=cr=0
        //handle DPad and left analoge
        cu |= b[12]?.pressed || p.axes[1] < -0.5
        cd |= b[13]?.pressed || p.axes[1] > 0.5
        cl |= b[14]?.pressed || p.axes[0] < -0.5
        cr |= b[15]?.pressed || p.axes[0] > 0.5
    }
}

export function getInputs() {
    return {
      uu: u || cu,
      dd: d || cd,
      ll: l || cl,
      rr: r || cr
    };
}
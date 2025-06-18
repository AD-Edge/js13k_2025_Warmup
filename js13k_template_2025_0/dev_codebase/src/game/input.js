//////////////////////////////////////////////////////////
//                   Input Setup                        //
//////////////////////////////////////////////////////////
// Keys states (false: key is released / true: key is pressed)
// Input setup based on this mapping by XEM: https://xem.github.io/articles/jsgamesinputs.html

let u=0,d=0,l=0,r=0;
let cu=0,cd=0,cl=0,cr=0;
//GamePad
var p=navigator.getGamepads()[0]

//128n bytes (whole function)
// function onKeyDown(n){let e=n.key;u|="U"==e[5]|"w"==e|"z"==e,d|="D"==e[5]|"s"==e,l|="L"==e[5]|"a"==e|"q"==e,r|="R"==e[5]|"d"==e}

//120 bytes (whole function)
onkeydown=n=>{let e=n.key;u|="U"==e[5]|"w"==e|"z"==e,d|="D"==e[5]|"s"==e,l|="L"==e[5]|"a"==e|"q"==e,r|="R"==e[5]|"d"==e}

// function onKeyDown(e) {
//     let k=e.key
    
//     // // 146 bytes
//     // if(k=="arrowup" || k=="w"||k=="z") u=1
//     // if(k=="arrowdown" || k=="s") d=1
//     // if(k=="arrowleft" || k=="a"||k=="q") l=1
//     // if(k=="arrowright" || k=="d") r=1

//     // // 127 bytes
//     // if(k[5]=="u" || k=="w"||k=="z") u=1
//     // if(k[5]=="d" || k=="s") d=1
//     // if(k[5]=="l" || k=="a"||k=="q") l=1
//     // if(k[5]=="r" || k=="d") r=1
     
//     // // 116 bytes
//     // "u"!=k[5]&&"w"!=k&&"z"!=k||(u=1),"d"!=k[5]&&"s"!=k||(d=1),"l"!=k[5]&&"a"!=k&&"q"!=k||(l=1),"r"!=k[5]&&"d"!=k||(r=1);
   
//     // // 97 bytes
//     // u|=k[5]=="u"|k=="w"|k=="z";
//     // d|=k[5]=="d"|k=="s";
//     // l|=k[5]=="l"|k=="a"|k=="q";
//     // r|=k[5]=="r"|k=="d";

//     // 94 bytes 
//     // u|="u"==k[5]|"w"==k|"z"==k,d|="d"==k[5]|"s"==k,l|="l"==k[5]|"a"==k|"q"==k,r|="r"==k[5]|"d"==k;

//     u|="U"==k[5]|"w"==k|"z"==k,d|="D"==k[5]|"s"==k,l|="L"==k[5]|"a"==k|"q"==k,r|="R"==k[5]|"d"==k;

//     // console.log("E: " + e.key);
// }

function onKeyUp(e) {
    let k=e.key.toLowerCase()
    if(k=="arrowup" || k=="w" || k=="z") u=0
    if(k=="arrowdown" || k=="s") d=0
    if(k=="arrowleft" || k=="a" || k=="q") l=0
    if(k=="arrowright" || k=="d") r=0
    // console.log("E: " + e.key);
}

export function setupEventListeners(c) {
    window.addEventListener('keydown', onkeydown);
    window.addEventListener('keyup', onKeyUp);

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
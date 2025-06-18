
// Functions optimized ~120 bytes
onkeydown=n=>{let e=n.key;u|="U"==e[5]|"w"==e|"z"==e,d|="D"==e[5]|"s"==e,l|="L"==e[5]|"a"==e|"q"==e,r|="R"==e[5]|"d"==e}
onkeyup=e=>{let k=e.key;u&=!("U"==k[5]|"w"==k|"z"==k),d&=!("D"==k[5]|"s"==k),l&=!("L"==k[5]|"a"==k|"q"==k),r&=!("R"==k[5]|"d"==k)};

//128n bytes (whole function)
function onKeyDown(n){let e=n.key;u|="U"==e[5]|"w"==e|"z"==e,d|="D"==e[5]|"s"==e,l|="L"==e[5]|"a"==e|"q"==e,r|="R"==e[5]|"d"==e}

// ~300 bytes
function onKeyDown(e) {
    let k=e.key
    
    // 146 bytes
    if(k=="arrowup" || k=="w"||k=="z") u=1
    if(k=="arrowdown" || k=="s") d=1
    if(k=="arrowleft" || k=="a"||k=="q") l=1
    if(k=="arrowright" || k=="d") r=1

    // 127 bytes
    if(k[5]=="u" || k=="w"||k=="z") u=1
    if(k[5]=="d" || k=="s") d=1
    if(k[5]=="l" || k=="a"||k=="q") l=1
    if(k[5]=="r" || k=="d") r=1
     
    // 116 bytes
    "u"!=k[5]&&"w"!=k&&"z"!=k||(u=1),"d"!=k[5]&&"s"!=k||(d=1),"l"!=k[5]&&"a"!=k&&"q"!=k||(l=1),"r"!=k[5]&&"d"!=k||(r=1);
   
    // 97 bytes
    u|=k[5]=="u"|k=="w"|k=="z";
    d|=k[5]=="d"|k=="s";
    l|=k[5]=="l"|k=="a"|k=="q";
    r|=k[5]=="r"|k=="d";

    // 94 bytes 
    u|="u"==k[5]|"w"==k|"z"==k,d|="d"==k[5]|"s"==k,l|="l"==k[5]|"a"==k|"q"==k,r|="r"==k[5]|"d"==k;

    u|="U"==k[5]|"w"==k|"z"==k,d|="D"==k[5]|"s"==k,l|="L"==k[5]|"a"==k|"q"==k,r|="R"==k[5]|"d"==k;

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

onkeyup = e => {
    let k = e.key;
    if("U"==k[5]||"w"==k||"z"==k)u=0;
    if("D"==k[5]||"s"==k)d=0;
    if("L"==k[5]||"a"==k||"q"==k)l=0;
    if("R"==k[5]||"d"==k)r=0;
};

onkeyup = e => {
    let k = e.key;
    u&=!("U"==k[5]|"w"==k|"z"==k),
    d&=!("D"==k[5]|"s"==k),
    l&=!("L"==k[5]|"a"==k|"q"==k),
    r&=!("R"==k[5]|"d"==k);
};
// Stany klawiszy //
let capsLock = false;
let lShift = false;
let rShift = false;
let lAlt = false;
let rAlt = false;
let lCtrl = false;
let rCtrl = false;



// Stany Wyjściowe //
let upperCase = false;
let alt = true;

/*
TODO: Stany wyjściowe będą true/false na podstawie stanów klawiszy, tu będzie potrzebne troche kombinacji.
Potem stany wyjściowe są wysyłane do rules.js
*/

const changeState = stateData => {
    if(stateData.event == "key.pressed") {
        switch (""+stateData.key) {
            case "Left Shift":
            lShift = true;
                break;
            case "Left Alt":
            lAlt = true;
                break;
            case "Right Shift":
            rShift = true;
                break;
            case "Right Alt":
            rAlt = true;
                break;
        }
    }
    else if(stateData.event == "key.released") {
        switch (""+stateData.key) {
            case "Left Shift":
            lShift = false;
                break;
            case "Left Alt":
            lAlt = false;
                break;
            case "Right Shift":
            rShift = false;
                break;
            case "Right Alt":
            rAlt = false;
                break;
                case "Caps Lock":
            capsLock = !capsLock;
                break;
        }
    }

    //Testowe wysietlanie eventu, key'a i lShifta
    // console.log(`e: ${stateData.event}`);
    // console.log(`k: ${stateData.key}`);
    // console.log(`lShift: ${lShift}`);
};

module.exports.changeState = changeState;
module.exports.upperCase = upperCase;
module.exports.alt = alt;
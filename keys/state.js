

// Stany klawiszy //
let capsLock = false;
let lShift = false;
let rShift = false;
let lAlt = false;
let rAlt = false;


// Stany Wyjściowe //
let upperCase = false;
let alt = false;

/*
TODO: Stany wyjściowe będą true/false na podstawie stanów klawiszy, tu będzie potrzebne troche kombinacji.
Potem stany wyjściowe są wysyłane do rules.js
*/

const changeState = stateData =>{
    if(stateData.event === "key.pressed"){
        switch(stateData.key){
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
    else if(stateData.event === "key.released"){
        switch(stateData.key){
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

    //Warunki na upperCase wyjsciowy
    if(lShift || rShift && !capsLock){
        upperCase = true;
    }
    if(capsLock && !lShift && !rShift){
        upperCase = true;
    }
    if(capsLock && lShift || rShift){
        upperCase = false;
    }


    //warunki na alt wyjsciowy
    if(lAlt || rAlt){
        alt = true;
    }
    else{
        alt = false;
    }
    module.exports.upperCase = upperCase;
    module.exports.alt = alt;
};



module.exports.changeState = changeState;


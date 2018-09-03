const state = require('./state.js');

//tablica z wartosci typu CapsLock
const stateArray = [
    "Tab", "Caps Lock", "Left Shift",
    "Left Alt", "Right Control", "Right Shift",
    "Enter"
];

check = data => {
    console.log(`e: ${data.event}: ${data.key}`);
    stateArray.map(item => {
        // if(item === "key.released " + key){
        //    state.changeState()....
        // }else {
            
        // }
    })
}

module.exports.check = check;
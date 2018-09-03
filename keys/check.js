const state = require('./state.js');

const stateArray = []; //tablica z wartosci typu CapsLock
const keysArray = []; //tablica z reszta znakow

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
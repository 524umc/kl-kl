//pobranie wartosci ze stanów
const {upperCase, alt} = require('./state.js');

/**
 *
 * @description Sprawdza czy stan upperCase jest true, na tej podstawie zwraca różne wartości
 * @param is - wartość która ma zostać zwrócona jeśli upperCase jest true
 * @param isnt - wartość która ma zostać zwrócona jeśli upperCase jest false
 */
function isUpperCase(is, isnt){
    return upperCase ? is : isnt
}


/**
 *
 * @description Sprawdza czy stan alta i uppercase jest true, na tej podstawie zwraca różne wartości
 * @param is - wartość która ma zostać zwrócona jeśli alt jest true
 * @param isnt - wartość która ma zostać zwrócona jeśli alt jest false
 */
function isAlt(is, isnt){
    const letterWithAlt = alt ? is : isnt;
    return isUpperCase(letterWithAlt.toUpperCase(), letterWithAlt)
}


// ***** GLOWNY OBIEKT Z ZASADAMI ***** //

const keyRules = {
    A: isAlt('ą', 'a'),
    B: isUpperCase('B', 'b'),
    Period: isUpperCase('>', '.'),
    Comma: isUpperCase('<', ','),
};
//TESTY
console.log(keyRules.A)
console.log(keyRules.B)
console.log(keyRules.Period)
console.log(keyRules.Comma)
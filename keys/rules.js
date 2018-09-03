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
    'A': isAlt('ą', 'a'),
    'X': isAlt('ź', 'x'),
    'Z': isAlt('ż', 'z'),
    'L': isAlt('ł', 'l'),
    'O': isAlt('ó', 'o'),
    'C': isAlt('ć', 'c'),
    'E': isAlt('ę', 'e'),
    'S': isAlt('ś', 's'),
    'N': isAlt('ń', 'n'),
    'B': isUpperCase('B', 'b'),
    'Period': isUpperCase('>', '.'),
    'Comma': isUpperCase('<', ','),
    'Open Bracket': isUpperCase('{', '['),
    'Close Bracket': isUpperCase('}', ']'),
    'Back Slash': isUpperCase('|', '\\'),
    'Semicolon': isUpperCase(':', ';'),
    'Quote': isUpperCase('"', '\''),
    'Slash': isUpperCase('/', '?'),
    'Minus': isUpperCase('_', '-'),
    'Equals': isUpperCase('+', '='),
    '1': isUpperCase('!', '1'),
    '2': isUpperCase('@', '2'),
    '3': isUpperCase('#', '3'),
    '4': isUpperCase('$', '4'),
    '5': isUpperCase('%', '5'),
    '6': isUpperCase('^', '6'),
    '7': isUpperCase('&', '7'),
    '8': isUpperCase('*', '8'),
    '9': isUpperCase('(', '9'),
    '0': isUpperCase(')', '0'),
};
//TESTY

console.log(keyRules.A)
console.log(keyRules.B)
console.log(keyRules.Period)
console.log(keyRules.Comma)
console.log(keyRules['Open Bracket'])
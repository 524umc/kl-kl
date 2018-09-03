let logMessage = '';

function addToLogMessage(char){
    logMessage += char;
}


//TESTOWO LUL
setTimeout(() => console.log(logMessage), 10000);

module.exports.addToLogMessage = addToLogMessage;
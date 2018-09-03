const gkm = require('gkm');
const checker = require('./keys/checker.js');

module.exports = {
    
    /**
     * @description Pobiera released przyciski i je wyswietla w konsoli (aktualnie tylko to poki co)
     */
    startListenKeys() {
        gkm.events.on('key.released', function(key) {
            const data = {
                event: this.event,
                key: key
            };
            checker.check(data);
        });
    }
};
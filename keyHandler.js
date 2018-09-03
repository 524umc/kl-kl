const gkm = require('gkm');

module.exports = {
    
    /**
     * @description Pobiera released przyciski i je wyswietla w konsoli (aktualnie tylko to poki co)
     */
    startListenKeys() {
        gkm.events.on('key.released', function(d) {
            console.log(this.event + ' ' + d);
        });
    }
}
/**
 * Módulo para gerenciar eventos.
 */

const path = require("path");
const events = require("./");

module.exports = class {
    static boot(client) {
        var self = this;
        this.client = client;
        events.forEach(function(event){
            var name = path.basename(event, ".js");
            event = new(require("./"+name));
            self.client.on(name, event.run);
        });
    }
};
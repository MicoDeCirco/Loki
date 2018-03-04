const commandsManager = require("./../commands/manager.js");

module.exports = class {
    run(message) {
        commandsManager.run(message);
    }
};
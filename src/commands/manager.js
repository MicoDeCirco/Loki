/**
 * Módulo para gerenciar comandos.
 */

const path = require("path");
const commands = require("./");
const commandConfig = require("./../../config/commands.json");

module.exports = class {
    static boot() {
        var self = this;
        this.commands = {};
        commands.forEach(function(command){
            var name = path.basename(command, ".js");
            var command = new(require("./"+name));
            self.commands[name] = command;
        });
    }

    static run(message) {
        var content = message.content;

        if(!content.startsWith(commandConfig.prefix) && message.author.equals(message.client.user))
            return false;

        content = content.substring(commandConfig.prefix.length);

        var args = content.split(" ");
        
        var name = args[0];

        args = args.splice(1, args.length);

        if(!this.commands.hasOwnProperty(name)) {
            message.reply("Comando não encontrado!");
            return false;
        }

        var command = this.commands[name];

        command.run(args, message, message.author);
    }
};
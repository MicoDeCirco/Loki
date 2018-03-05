const ownerConfig = require("./../../config/owner.json");

module.exports = class extends Command {
    getName() {
        return "eval";
    }

    isVisible() {
        return false;
    }

    run(args, message, user) {
        if(!(user.id == ownerConfig.id)) {
            this.reply(":x: Sem permissão!");
            return false;
        }

        eval(args.join(" "));
    }
};
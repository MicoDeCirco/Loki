module.exports = class extends Command {
    getName() {
        return "reverse";
    }

    getDescription() {
        return "Inverter um texto.";
    }

    run(args, message, user) {
        this.reply(args.reverse().join(" "));
    }
};
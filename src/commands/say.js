module.exports = class extends Command {
    getName() {
        return "say";
    }

    getDescription() {
        return "Mandar o bot falar alguma coisa.";
    }

    run(args, message, user) {
        this.reply(args.join(" "));
    }
};
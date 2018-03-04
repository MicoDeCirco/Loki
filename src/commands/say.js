module.exports = class {
    getName() {
        return "say";
    }

    getDescription() {
        return "Mandar o bot falar alguma coisa.";
    }

    run(args, message, user) {
        message.reply(args.join(" "));
    }
};
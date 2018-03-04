module.exports = class {
    getName() {
        return "random";
    }

    getDescription() {
        return "Gerar um número aleatório.";
    }

    run(args, message, user) {
        var min = parseInt(args[0]),
            max = parseInt(args[1]);
        
        message.reply(Math.floor(Math.random() * max + min));
    }
};
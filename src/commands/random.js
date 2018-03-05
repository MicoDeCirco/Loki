module.exports = class extends Command {
    getName() {
        return "random";
    }

    getDescription() {
        return "Gerar um número aleatório.";
    }

    run(args, message, user) {
        var min = parseInt(args[0]),
            max = parseInt(args[1]);
        
        this.reply(Math.floor(Math.random() * max + min));
    }
};
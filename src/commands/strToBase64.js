module.exports = class extends Command {
    static getName() {
        return "reverse";
    }

    static getDescription() {
        return "converte uma string para base64";
    }

    run(args, message, user) {
        this.reply(atob(args.join(" ")));
    }
};
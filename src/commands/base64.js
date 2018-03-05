module.exports = class extends Command {
    static getName() {
        return "base64";
    }

    static getDescription() {
        return "converte uma string para base64";
    }

    run(args, message, user) {
        this.reply(Buffer.from(args.join(" ")).toString('base64'));
    }
};
module.exports = class extends Command {
    static getName() {
        return "crypt";
    }

    static getDescription() {
        return "Criptografa uma string com twofish";//fake isso
    }

    static run(args, message, user) {
        let string = args.join(" "),
            key = string.split("@");
        let c = '';
        while (key.length < string.length) {
            key += key;
        }
        for (let i = 0; i < string.length; i++) {
            let v1 = string[i].charCodeAt(0);
            let v2 = key[i].charCodeAt(0);
            let xv = v1 ^ v2;
            let x = xv.toString("16");
            if (x.length < 2) {
                x = "0" + x;
            }
            c += x;
        }
        this.reply(c);
    }
};
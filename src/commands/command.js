/**
 * Classe para a classe de um comando extender.
 */
module.exports = class {
    /**
     * Responder a uma mensagem.
     * 
     * @param {string} message Mensagem para responder ao autor do comando.
     */
    reply(msg) {
        this.message.reply(msg);
    }

    /**
     * Enviar uma mensagem para o canal atual do autor do comando.
     * 
     * @param (string) message Mensagem para enviar.
     */
    send(msg) {
        this.message.channel.send(msg);
    }
};
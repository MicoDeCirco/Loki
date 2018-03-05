/**
 * Classe para a classe de um comando extender.
 */
module.exports = class {
    /**
     * Responde a uma mensagem.
     * 
     * @param {string} message Mensagem para responder a um usuário.
     */
    reply(msg) {
        this.message.reply(msg);
    }
};
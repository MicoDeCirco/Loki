module.exports = class {
    getName() {
        return "nome do comando";
    }

    getDescription() {
        return "descrição do comando";
    }

   //--a variavel args é um array dos argumentos do comando tipo "+search eae blz" ae vai ta ["eae", "blz"]
  //--message é a classe message do discord.js (ver https://discord.js.org/#/docs/main/stable/class/Message)
 //user -- é o autor do comando (classe user do discord.js (ver https://discord.js.org/#/docs/main/stable/class/User))
    run(args, message, user) {
        //aqui o codigo da função
    }
};
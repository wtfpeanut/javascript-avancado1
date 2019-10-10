class DateHelper {

    constructor() {
        throw new Error("Esta classe não pode ser instanciada")
    }

    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;


        /* Pode ser feito desta maneira tbm, mas o uso do `` com ${} é menos verboso e mais fácil de entender
         data.getDate() +
             "/" + (data.getMonth() + 1) +
             "/" + data.getFullYear();
        */

    }

    static textoParaData(texto) {

        if (!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error("Deve estar no formato aaaa-mm-dd");

        return new Date(...texto.split("-").map((item, indice) => item - indice % 2));
    }


}
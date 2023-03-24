

let listaCss = ["border","color","font" ];
const readline = require('readline-sync');

do{
    var nome = readline.question("\n 1- Adicione uma propriedade CSS \n 2- Digite lista para ver as propriedades dela \n 3- Digite sair para encerrar\n");
    if(nome != "sair" && nome != "lista")
    {
    listaCss.push(nome)
    }
    if(nome === "lista"){
        console.log(listaCss);   
    }
}while(nome !="sair")

console.log(listaCss.sort());














let listaCss = ["align-items", "background-color", "border-radius"];
const readline = require('readline-sync');

do{
    var nome = readline.question("\n 1- adicione um item CSS, \n 2- digite 2 para ver os itens, \n 3- ou digite sair para encerrar\n");
    if(nome != "sair" && nome != "2")
    {
    listaCss.push(nome)
    }
    if(nome === "2"){
        console.log(listaCss);
    }
}while(nome !="sair")

console.log(listaCss.sort());




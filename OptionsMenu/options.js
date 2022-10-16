/*
Olá usuário! Digite o número da opção desejada

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa

--- 
O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
Caso o usuário digite 2, ele poderá ver os itens cadastrados
Se não houver nenhum item cadastrado, mostrar a mensagem: 
  "Não existem itens cadastrados"
Caso o usuário digite 3, a aplicação deverá ser encerrada.*/

let option//crio a variavel indefinida, para definir no laco while
let itens= []//crio o array para armazenar os itens

while(option !=3){//enquanto n for 3, o programa continua rodando
    let option = Number(prompt(`
    Olá usuário! Digite o número da opção desejada:

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa`))//Number se nao retornara uma string


    switch(option){ case 1:
        let item = prompt("Digite um item para adicionar à sua lista:")
        itens.push(item)
        break
    case 2:
        if(itens.length == 0){//lenght para avaliar o tamanho do array, sendo 0 nao existem itens cadastrados
            alert("Não existem itens cadastrados")
        }else{
            alert(itens)//array diferente de 0, mostro os itens.
        }
    break
    case 3:
        alert("tchau!")
    break
    default:
        alert("Opcao invalida, tente novamente.")}
}
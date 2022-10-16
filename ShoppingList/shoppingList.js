let itens = [];

for(let item = 0; item < 10; item++){
    let itemName= prompt("Type your groceries list " + (item+1))
    itens[item] = itemName
}

alert(itens)


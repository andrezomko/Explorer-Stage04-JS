const pacientes = [//array e objetos criados
    {
        name: "André",
        age: 24,
        weight: 80,
        height: 186,
    },
    {
        name: "Ana",
        age: 27,
        weight: 55,
        height: 170,
    },
    {
        name: "Carlos",
        age: 24,
        weight: 100,
        height: 190,
    },  
]

function IMC(weight,height){//criei a funcao do calculo do IMC
    return((weight /(height/100)**2)).toFixed(2)// dividi 100 pq altura precisa ser em M nao em CM
}

function printIMCpacientes(paciente){//funcao para imprimir o imc dos pacientes em tela
    return `Paciente ${paciente.name} possui o IMC de ${IMC(paciente.weight, paciente.height)}.`
}

for(let paciente of pacientes){//for para acessar o array pacientes
    let IMCmessage = printIMCpacientes(paciente)//var para colocar executar a funcao printIMCpacientes nos objetos "paciente"
    alert(IMCmessage)//imprimir o IMC
}

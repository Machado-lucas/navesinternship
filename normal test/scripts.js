//ex1

const whoIsBigger = (str1, str2) => {
    return str1.length > str2.length ? str1 : str2
}

//ex2

const applyAnother = (callback, string1, string2) =>{
    return callback(string1, string2)
}

//ex3
const allForOne = (...argsRest) => {
    return argsRest.join(' ')
}

//ex4
const remove = (string) => {
    let str = string.replace(/[0-9]/g, '[removido]')
    return str
}

//ex5
const dictionary = (string) => {
    dicionario = {4: 'a', 3: 'e', 1: 'i', 5: 's'}
    Object.entries(dicionario).forEach(element => {
        key = element[0]
        value = element[1]
        flag = new RegExp(key, 'g')
        string = string.replace(flag, value)
    });
    return string
}

//ex6
const findAddress = (cep, num) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
   .then((res)=>res.json())
   .then(data=>{
       console.log(`${data.logradouro}, ${num}, ${data.localidade}/${data.uf}`)
   })
}

let clients = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

//ex7
const capitalizeFirst = () =>{
    clients.forEach(client => {
        console.log(`Olá, ${client.nome.charAt(0).toUpperCase()}${client.nome.slice(1)} ${client.sobrenome}`)
    });
}

//ex8
let sum = (objectArray, property) => {
    return objectArray.reduce((total, obj) => {
        return total + obj[property]
    }, 0)
}

//ex9
const printLessThan25 = () => {
    const result = clients.filter( (arr) => arr.idade <= 25)
    return result
}

//ex10
const printLessThan30 = () =>{
    const results = clients.filter( (arr) => arr.idade <= 30 )
    results.forEach(result => {
        console.log(`{id: ${result.id}, nome: ${result.nome}, sobrenome: ${result.sobrenome},  idade: ${result.idade}}`)
    });
}

//11
const orderArray = () => {
    let ordered = clients.sort((a,b) => {
        return a.idade > b.idade ? -1 : b.idade > a.idade ? 1 : a.id > b.id ? -1 : 1        
    })
    console.log(ordered)
}

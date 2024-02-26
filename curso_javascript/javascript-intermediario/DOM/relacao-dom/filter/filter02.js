function obterNumerosDigitados(){
    const numeroInput = document.querySelector('#numerosInput').value
    const numerosArray = numeroInput.split(',').map(numero => parseInt(numero.trim()))
    return numerosArray
}

function exibirNumerosFiltrados(numerosFiltrados){
    const listaNumeros = document.querySelector('#listaNumeros')
    listaNumeros.innerHTML = ''

    numerosFiltrados.forEach(numero =>{
        const itemLista = document.createElement('li')
        itemLista.textContent = numero
        listaNumeros.appendChild(itemLista)
    })
}

function filtrarPares(){
    const numero = obterNumerosDigitados()
    const numerosPares = numero.filter(numero => numero % 2 == 0)
    exibirNumerosFiltrados(numerosPares)
}
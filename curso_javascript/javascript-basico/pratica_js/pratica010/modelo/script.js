/* 
    - o número que será digitado não pode passar de 100, o limite é entre (1 e 100)
    - se deixar a caixa vazia também vai mostrar uma mensagem

    quando o valor for adicionado, vai ser colocado dentro do select
    no final será mostrado

    = ao todo, temos {} números cadastrados
    = o maior valor informado foi {}
    = o menor valor informado foi {}
    = somando todos os valores, temos {}
    = a médias dos valores digitados é {}

*/

// iniciando as variáveis
let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n){
    // se o número estiver entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inlista(n, l){
    // se na lista for procurado a chave do número digitado pelo usuário que seja diferente de -1 vai retornar true senao false
    if (l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}
function adicionar(){
    /* isto é, se o número digitado pelo usuário estiver entre 1 e 100 e não estiver dentro da lista, ele vai executar...{
        vai adicionar o valor na última posição
        adicionar a tag option dentro do var item
        mostrar a mensagem na tela do select dizendo que o número do valor digitado pelo usuário foi adicionado 
    }*/
    
    if(isNumero(num.value) && !inlista(num.value, valores)){

        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `o valor ${num.value} foi adicionado`  
        lista.appendChild(item)     
        res.innerHTML = '' 

    }else{  
        window.alert('valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }else if(valores[pos]< menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>o maior valor informado foi ${maior} e o menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>a soma entre os valores foi ${soma} e a média entre eles foi ${media}</p>`
        
    }
}
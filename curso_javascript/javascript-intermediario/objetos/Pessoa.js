class Pessoa{
    constructor(p_nome,p_idade){
        this.nome = p_nome
        this.idade = p_idade
    }
    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }
    setNome(){
        this.nome = nome
    }
    setIdade(){
        this.idade = idade
    }
    info(){
        console.log(`nome:  ${this.nome}  `)
        console.log(`idade: ${this.idade} `)
        console.log('-------------------  ')
    }
}

let pessoas = []
const btn_add = document.querySelector('#btn_add')
const resultado = document.querySelector('.res')

const AddPessoa = ()=>{
    resultado.innerHTML = ''
    pessoas.map((p)=>{
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `nome: ${p.getNome()}<br>Idade: ${p.getIdade()}`
        resultado.appendChild(div)
    })
}

btn_add.addEventListener("click",(evt)=>{
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ''
    idade.value = ''
    nome.focus()
    AddPessoa()
})
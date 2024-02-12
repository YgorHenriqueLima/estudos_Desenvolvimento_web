const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn_transferir = document.querySelector("#btn_transferir")
const todosCursos = [...document.querySelectorAll(".curso")]

// função que vai fazer com que selecione os cursos
todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso = evt.target
        curso.classList.toggle("selecionado")
    })
})

// botão que vai tanto adicionar um elemento quanto tirar um elemento do caixa02 (a caixa vazia)
btn_transferir.addEventListener("click",()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    const cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')]

    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })

    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})
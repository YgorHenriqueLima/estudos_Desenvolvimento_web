const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")

const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]

const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso") 
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")

const btnAdicionarNovoCursoSDepois = document.getElementById("btnAdicionarNovoCursoDepois")

let nomeCurso = document.getElementById("nomeCurso")
let indice = 0

/*função tirarSelecao vai fazer com que o curso selecionado seja removido utilizando o método remove */ 
const tirarSelecao=()=>{
    const cursosSelecionado = [...document.querySelectorAll(".selecionado")]
    cursosSelecionado.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso=(curso)=>{
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c"+indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso
    novoElemento.addEventListener("click", (evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    return novoElemento
}

cursos.map((el)=>{
   const novoElemento = criarNovoCurso(el)
   caixaCursos.appendChild(novoElemento)
   indice++

})

const cursoS=()=>{
    const cursosSelecionado = [...document.querySelectorAll(".selecionado")]
    return cursosSelecionado[0]
}

btnCursoSelecionado.addEventListener("click",(evt)=>{
    try {
        alert("curso selecionado: " + cursoS().innerHTML)
    }catch(error){
        alert("selecione o curso")
    }
})

btnRemoverCurso.addEventListener("click",(evt)=>{
    const cs = cursoS()
    if(cs!=undefined){
        cs.remove()
    }else{
        alert("selecione um curso")
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click", (evt)=>{
    try {
        if(nomeCurso.value != ""){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoS())
        }
        else{
            alert("digite o nome do curso")
        }
    }catch(ex){
        alert("selecione o curso")
    }
})

btnAdicionarNovoCursoSDepois.addEventListener("click", (evt)=>{
    try {
        if(nomeCurso.value != ""){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoS().nextSibling)
        }
        else{
            alert("digite o nome do curso")
        }
    }catch(ex){
        alert("selecione o curso")
    }
})
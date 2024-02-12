// const cursos=["html","css", "JavaScript", "php", "React"]
// cursos.map((el,i)=>{
//    console.log(`curso ${el} - posição do curso ${i}`) 
// })

// let elementos = document.getElementsByTagName('div')
// elementos = [...elementos]

// elementos.map((element, indice)=>{
//     element.innerHTML = "CURSOS CANCELADOS"
//     console.log(element)
// })

const elementos = document.getElementsByTagName('div')
const val=Array.prototype.map.call(elementos, ({innerHTML})=>innerHTML)
console.log(val)

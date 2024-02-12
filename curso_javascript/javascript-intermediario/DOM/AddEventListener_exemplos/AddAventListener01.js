const c1 = document.querySelector('#c1')

const curso = [...document.querySelectorAll('.curso')]

curso.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const el = evt.target
        el.classList.add("destaque")
    })
})

// c1.addEventListener('click',(evt)=>{
//     const el = evt.target
//     el.classList.add("destaque")
// })


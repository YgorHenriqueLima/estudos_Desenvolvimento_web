function* cores() {
    yield "vermelho"
    yield "preto"
    yield "azul"
    yield "branco"
}
const iterator=cores()
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)

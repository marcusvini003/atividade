const Listadepecas = [' pecas de teste', 'AB', 'peca B']
console.log('qunatidade de caracteres')

if (Listadepecas.lenght <=10) {
console.log('as pecas pode ser cadastradas') ;
}
for (let index =0; index <Listadepecas.lenght; index++) {
    const pecaatual = Listadepecas[index];
    if (pecaatual.length <3){
        console.log(pecaatual + '; apeca possui nome inferior a 3 caracteres e nao pode ser cadastrada')
        }else{
        console.log(pecaatual + ': a peca pode ser cadastrada')
    }
}
console.log('peso da peça')

const pesodapecaemgramas=50
if (pesodapecaemgramas >=100){
console.log('peso suficiente')
}else{
console.log('valor insulficiente')
}
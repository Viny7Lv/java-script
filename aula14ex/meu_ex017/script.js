function gerarTabuada() {
    const numero = document.querySelector('input#numero')
    const tabuada = document.querySelector('select#tabuada')

    if (numero.value.length == 0) {
        window.alert('Impossível contar!')
    } else {
        tabuada.innerHTML = ''
        let numeroVal = Number(numero.value)
        for (let contagem = 1; contagem <= 10; contagem++) {
            let option = document.createElement('option')
            option.text = `${numeroVal} x ${contagem} = ${numeroVal*contagem}`
            tabuada.appendChild(option)
        }
    }
}
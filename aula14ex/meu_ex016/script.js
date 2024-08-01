const inicio = document.querySelector('input#inicio')
const fim = document.querySelector('input#fim')
const passo = document.querySelector('input#passo')
const contagem = document.getElementById('contagem')

function contar() {
    contagem.innerHTML = '' // Limpa o conteúdo anterior

    let inicioVal = Number(inicio.value)
    let fimVal = Number(fim.value)
    let passoVal = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0) {
        contagem.innerHTML = 'Impossível contar!'
        return
    }

    if (passo.value.length == 0 || passoVal <= 0) {
        window.alert('Passo Inválido! Considerando PASSO 1')
        passoVal = 1
        passo.value = 1
    }

    if (inicioVal < fimVal) {
        // Contagem crescente
        for (let x = inicioVal; x <= fimVal; x += passoVal) {
            contagem.innerHTML += `${x}`
            if (x + passoVal <= fimVal) {
                contagem.innerHTML += ' 👉 '
            }
        }
    } else {
        // Contagem decrescente
        for (let x = inicioVal; x >= fimVal; x -= passoVal) {
            contagem.innerHTML += `${x}`
            if (x - passoVal >= fimVal) {
                contagem.innerHTML += ' 👉 '
            }
        }
    }

    // Adiciona a bandeira no final
    contagem.innerHTML += ' 🏁'
}

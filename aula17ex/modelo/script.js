// Variável composta para guardar os valores
let adicionados = []

function adicionar() {
    limparResultado()

    // Adiciona o campo de número
    let campo = document.getElementById('numero')
    // Pega o valor do campo de número
    let numeroAdicionado = Number(campo.value)
    // Verifica se tem um número repetido
    let repetido = adicionados.indexOf(numeroAdicionado)
    
    if (campo.value.length !== 0 && repetido === -1) {
        // Adiciona o número do campo na variável composta
        adicionados.push(numeroAdicionado)
        // Adiciona o número na tabela
        let tabela = document.getElementById('valores')
        let item = document.createElement('option')
        item.text = `Valor ${numeroAdicionado} adicionado.`
        tabela.appendChild(item)

        // Limpa o campo
        campo.value = ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
}

function finalizar() {
    limparResultado()

    // Ordena os valores numericamente
    adicionados.sort((a, b) => a - b)
    let total = adicionados.length
    let maior = adicionados[total - 1]
    let menor = adicionados[0]
    let soma = 0
    for (let index = 0; index < total; index++) {
        soma += adicionados[index]
    }
    let media = soma / total

    if (total >= 1) {
        let parTotal = document.createElement('p')
        let parMaior = document.createElement('p')
        let parMenor = document.createElement('p')
        let parSoma = document.createElement('p')
        let parMedia = document.createElement('p')

        parTotal.textContent = `Ao todo, temos ${total} números cadastrados`
        resultado.appendChild(parTotal)

        parMaior.textContent = `O maior valor informado foi ${maior}`
        resultado.appendChild(parMaior)

        parMenor.textContent = `O menor valor informado foi ${menor}`
        resultado.appendChild(parMenor)

        parSoma.textContent = `Somando todos os valores, temos ${soma}`
        resultado.appendChild(parSoma)

        parMedia.textContent = `A média dos valores digitados é ${media}`
        resultado.appendChild(parMedia)
    } else {
        alert('Adicione valores antes de finalizar!')
    }
}

function limparResultado() {
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = ''
}

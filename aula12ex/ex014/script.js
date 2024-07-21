function carregar() {
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const data = new Date()
    const hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'manha.png'
        document.body.style.background = '#85A3C1'
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde!
        img.src = 'tarde.png'
        document.body.style.background = '#AA652D'
    } else{
        //Boa Noite!
        img.src = 'noite.png'
        document.body.style.background = '#0E0F23'
    }
    
}

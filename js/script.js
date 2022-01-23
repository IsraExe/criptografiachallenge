window.onload = function() {
    document.querySelector("#btn-cripto").onclick = criptografarAgora
    document.querySelector("#btn-descripto").onclick = descriptografarAgora
    document.querySelector("#btn-copy").onclick = copiarTexto
}

criptografarAgora = function() {
    event.preventDefault()
    let valorCampo = document.getElementById('texto-inserido').value // envelopa valor do input na variável
    valorCampo = valorCampo.replace(/e/g, "enter") // expressão regular para que todas as letras "o" sejam substituídas
    valorCampo = valorCampo.replace(/i/g, "imes")
    valorCampo = valorCampo.replace(/a/g, "ai")
    valorCampo = valorCampo.replace(/o/g, "ober") 
    valorCampo = valorCampo.replace(/u/g, "ufat")
    document.getElementById('texto-codificado').value = valorCampo  
    aparecerInput()
}

descriptografarAgora = function() {
    event.preventDefault()
    let valorCampo = document.getElementById('texto-inserido').value 
    valorCampo = valorCampo.replace(/enter/g, "e")
    valorCampo = valorCampo.replace(/imes/g, "i")
    valorCampo = valorCampo.replace(/ai/g, "a")
    valorCampo = valorCampo.replace(/ober/g, "o") 
    valorCampo = valorCampo.replace(/ufat/g, "u")
    document.getElementById('texto-codificado').value = valorCampo 
    aparecerInput() 
}

aparecerInput = function() {
    document.getElementById('texto-codificado').style.display = 'block'
    document.getElementById('img-vazio').style.display = 'none'
    document.getElementById('bold-text').style.display = 'none'
    document.getElementById('paragrafo-text').style.display = 'none'
    document.getElementById('btn-copy').style.display = 'block'
}

copiarTexto = function() {
    document.getElementById("texto-codificado").select()
    document.execCommand('copy')
}






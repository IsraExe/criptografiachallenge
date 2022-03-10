<<<<<<< HEAD
window.onload = function() {
    document.querySelector("#btn-cripto").onclick = criptografarAgora
    document.querySelector("#btn-descripto").onclick = descriptografarAgora
    document.querySelector("#btn-copy").onclick = copiarTexto
}

const htmlTag = document.querySelector('html')
const btnDarkMode = document.querySelector('#atv-dark')
btnDarkMode.addEventListener('click', function() {
    htmlTag.classList.toggle('dark-mode')
    if (htmlTag.classList == 'dark-mode') {
        btnDarkMode.textContent = 'Light mode'
    } else {
        btnDarkMode.textContent = 'Dark mode'
    }
    
})

criptografarAgora = function() {
    event.preventDefault()
    let valorCampo = document.getElementById('texto-inserido').value 
    valorCampo = valorCampo.replace(/e/g, "enter") 
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
    document.getElementById('btn-copy').style.display = 'block'
    document.getElementById('img-vazio').style.display = 'none'
    document.getElementById('bold-text').style.display = 'none'
    document.getElementById('paragrafo-text').style.display = 'none'
}

copiarTexto = function() {
    document.getElementById("texto-codificado").select()
    document.execCommand('copy')
}





=======
window.onload = function() {
    document.querySelector("#btn-cripto").onclick = criptografarAgora
    document.querySelector("#btn-descripto").onclick = descriptografarAgora
    document.querySelector("#btn-copy").onclick = copiarTexto
}

const htmlTag = document.querySelector('html')
const btnDarkMode = document.querySelector('#atv-dark')
btnDarkMode.addEventListener('click', function() {
    htmlTag.classList.toggle('dark-mode')
    if (htmlTag.classList == 'dark-mode') {
        btnDarkMode.textContent = 'Light mode'
    } else {
        btnDarkMode.textContent = 'Dark mode'
    }
    
})


criptografarAgora = function() {
    event.preventDefault()
    let valorCampo = document.getElementById('texto-inserido').value // envelopa valor do input na variável
    valorCampo = valorCampo.replace(/e/g, "enter") // expressão regular para que todas as letras "e" sejam substituídas
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





>>>>>>> 9a5dce5006f190cd5ff1ad4cc4723a5f3021ae3a

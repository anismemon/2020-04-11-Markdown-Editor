
// variables to get HTML elements

let preview = document.getElementById('preview')
let sourceText = document.getElementById('source')
let newText

// changes sourceText on every keystroke

sourceText.addEventListener('keyup', delayRendering)

// marks up inputted text

function renderText() {      
    preview.innerHTML = marked(sourceText.value)    
}

// delays rendering by one second

function delayRendering() {
    window.setTimeout(renderText, 500)
}

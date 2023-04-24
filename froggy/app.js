const buttonElement= document.querySelector('button')

function addCSS() {
    const textAreaElement = document.querySelector('textarea')
    const css = textAreaElement.value;
    const foreFont = document.querySelector('#forefont')
    foreFont.style.cssText =css
    console.log(foreFont)
}


buttonElement.addEventListener('click', addCSS)
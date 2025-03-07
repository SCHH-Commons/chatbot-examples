console.log('index.js')
console.log(window.contentSelector)

let contentEl = document.querySelector(window.contentSelector)
console.log(contentEl)
if (contentEl) {
  Array.from(contentEl.querySelectorAll('p > code')).forEach((codeEl) => {
    console.log(codeEl)
    let codeText = codeEl.textContent.trim()
    if (codeText.startsWith('include')) {
      let paraEl = codeEl.parentElement
      let includeSrc = codeText.split(' ').filter(pe => pe)[1]
      paraEl.innerHTML = includeSrc
      /*
      fetch(includeSrc)
        .then((response) => response.text())
        .then((text) => paraEl.innerHTML = text)
      */
    }
  })
}
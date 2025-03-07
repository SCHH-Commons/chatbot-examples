console.log('index.js')
console.log(window.contentSelector)

let contentEl = document.querySelector(window.contentSelector)
if (contentEl) {
  Array.from(contentEl.querySelectorAll('p > code')).forEach((codeEl) => {
    console.log(codeEl)
    if (codeEl.trim().startsWith('include')) {
      let src = codeEl.textContent.split(' ').filter(pe => pe)[1]
      codeEl.innerHTML = src
    }
  })
}
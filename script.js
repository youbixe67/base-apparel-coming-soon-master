function recupMail() {
  let input = document.getElementById("entry")
  let errorEl = document.getElementById("error")
  let errimgEl = document.getElementById("errImg")
  let mailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let verify = mailregex.test(input.value.trim())
  errorEl.hidden = verify
  errimgEl.hidden = verify
  input.classList.toggle("errorMail", !verify)
  input.value = ''
}
const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add) //observa se o botão é clicado
form.addEventListener("change", save) //observa se há alteração no formulário

function add() { //add nova data
  
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  
  if (dayExists) {
    alert("Dia já incluso")
    return
  }
  
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

// const data = {
//   run: ["01-22", "01-23", "01-24", "01-25", "01-26"],
//   journal: ["01-23"],
// }

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
const divContainer = document.querySelector('.container')
const divCimg = document.querySelector('.container img')
const imgOlho = document.querySelector('#olho')
const imgOlhoC = document.querySelector('#olhoC')
const divTexto = document.querySelector('.texto')

divCimg.addEventListener ('click', () => {
  divTexto.classList.toggle('sumir')
})

imgOlho.addEventListener('click', () => {
  divCimg.classList.add('sumir')
  imgOlho.classList.add('sumir')
  imgOlhoC.classList.remove('sumir')
  divContainer.style.height = 'auto'
})

imgOlhoC.addEventListener('click', () => {
  divCimg.classList.remove('sumir')
  imgOlho.classList.remove('sumir')
  imgOlhoC.classList.add('sumir')
  divContainer.style.height = '200px'
})
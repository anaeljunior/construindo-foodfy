 const modalOverley = document.querySelector('.modal-overlay')
 const cards = document.querySelectorAll('.card')

 // para cada cartão de cartões
 for (let card of cards) {
  card.addEventListener('click', function(){
    const imageId = card.getAttribute('id')
    modalOverley.classList.add('active')
    modalOverley.querySelector('img').src = `assets/${imageId}.png`
  
    const info = card.querySelector('.card-content').innerHTML
    modalOverley.querySelector('.modal-info').innerHTML = info
  })
 }

 document.querySelector('.close-modal').addEventListener('click', function(){
   modalOverley.classList.remove('active')
 })
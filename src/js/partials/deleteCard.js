import axios from "axios"

export function deleteCard() {
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            let button = e.target
            let currentCard = e.currentTarget
            let id = currentCard.dataset.id
            if (button.classList.contains('item-delete')) {
                deleteItem(id)
                deleteItem(899)
                currentCard.remove()
            }
        })
    })
}


function deleteItem(id) {
  return new Promise((resolve, reject) => {
    const token = '569bc2174da3';
    const authOptions = {
      method: 'DELETE',
      url: `http://cards.danit.com.ua/cards/${id}`,
      headers: {
        'Authorization': "Bearer " + token
      }
    }
    axios(authOptions).then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  })
}


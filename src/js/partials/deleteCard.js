import axios from "axios"
// import {renderCards} from "./renderCards";
import { getData } from "./modal";

export function deleteCard() {
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            let button = e.target
            let currentCardId = e.currentTarget
            let id = currentCardId.dataset.id
            if (button.classList.contains('item-delete')) {
                deleteItem(id)
                console.log(id);
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
        .then((response) => {
            getData()
        })
      .catch((error) => {
        reject(error);
      });
  })
}


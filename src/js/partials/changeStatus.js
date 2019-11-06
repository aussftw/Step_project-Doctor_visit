import axios from "axios"

export function changeStatus() {
  const cards = document.querySelectorAll(".card")
  cards.forEach(card => {
    card.addEventListener("click", e => {
      let button = e.target
      let currentCard = e.currentTarget
      let id = currentCard.dataset.id
      let status = button.dataset.status
      let doctorType = currentCard.dataset.type
      if (button.classList.contains("item-change")) {
        changeData(id, status, doctorType)
      }
    })
  })
}

function changeData(id, value, type) {
  const data = {
    token: "569bc2174da3",
    status: value,
    content: {
      doctorType: type
    }
  }
  const inputData = document.querySelectorAll(`[data-id="${id}"] input`)
  inputData.forEach(elem => {
    data[elem.name] = elem.value
  })

  // const inputData = document.querySelectorAll(`[data-id="${id}"] input`)
  // inputData.forEach(elem => {
  //   if (data.hasOwnProperty(elem.name)) {
  //     data[elem.name] = elem.value
  //   } else {
  //     data.content[elem.name] = elem.value
  //   }
  // })

  return new Promise((resolve, reject) => {
    const token = "569bc2174da3"
    const authOptions = {
      method: "PUT",
      data: JSON.stringify(data),
      url: `http://cards.danit.com.ua/cards/${id}`,
      headers: {
        Authorization: "Bearer " + token
      }
    }
    axios(authOptions)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

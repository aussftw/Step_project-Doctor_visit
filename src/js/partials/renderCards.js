

export function renderCards(data) {
    const container = document.querySelector(".cards-container")
    container.innerHTML = ""
    data.forEach( item => {
        const card = document.createElement("div")
        render(item, card)
        container.append(card)
    })
}



function render(data, card) {
    if(data.content.doctorType === 'cardiologist') {
        renderCardiologist(data, card)
    } else if(data.content.doctorType === 'teraphist') {
        renderTeraphist(data, card)
    } else {
        renderDentist(data, card)
    }
        console.log(data.content.doctorType);
}


function renderCardiologist(item, card) {
        card.classList.add("card")
        card.innerHTML = `
          <input value="${item.title}">
          <input value="${item.content.presure}">
          <input value="${item.content['body mass index']}">
          <input value="${item.content['past diseases of the cardiovascular system']}">
          <input value="${item.content.age}">
          <input value="${item.content['full name']}">
      `
}

function renderTeraphist(item, card) {
        card.classList.add("card")
        card.innerHTML = `
          <input value="${item.title}">
          <input value="${item.content.age}">
          <input value="${item.content['full name']}">
      `
}

function renderDentist(item, card) {
        card.classList.add("card")
        card.innerHTML = `
          <input value="${item.title}">
          <input value="${item.content['last visit']}">
          <input value="${item.content['full name']}">
      `
}


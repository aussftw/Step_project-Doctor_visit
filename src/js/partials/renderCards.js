import {showMore} from "./showMore";
import {deleteCard} from "./deleteCard";



export function renderCards(data) {
    const container = document.querySelector(".cards-container")
    container.innerHTML = ""
    data.forEach( item => {
        const card = document.createElement("div")
        card.classList.add('ui', 'card')
        card.setAttribute ('data-id' , `${item.id}`);
        render(item, card)
        container.append(card)
    })
    $(".ui.dropdown").dropdown()
    showMore()
    deleteCard()
}


function render(data, card) {
    if(data.content.doctorType === 'cardiologist') {
        renderCardiologist(data, card)
    } else if(data.content.doctorType === 'teraphist') {
        renderTeraphist(data, card)
    } else {
        renderDentist(data, card)
    }
}


function renderCardiologist(item, card) {
        card.innerHTML = `
            <div class="card__content">
                <label>Пациент</label>
                <input disabled value="${item.content['fullname']}">
                <label>Доктор</label>
                <input disabled value="${item.doctor}">
            </div>
            <div class="card__content card__content--hidden">
              <input disabled value="${item.title}">
              <input disabled value="${item.content.presure}">
              <input disabled value="${item.content['body mass index']}">
              <input disabled value="${item.content['past diseases of the cardiovascular system']}">
              <input disabled value="${item.content.age}">
              <input disabled value="${item.description}">
            </div>
            <div class="extra content">
                <button type="button" class="ui button show-more">Показать больше</button>
                <div class="ui icon top left pointing dropdown button">
                    <i class="ellipsis vertical icon"></i>
                    <div class="menu">
                        <div class="item-edit item">Редактировать</div>
                        <div class="item-delete item">Удалить</div>
                        <div class="item-change item">Изменить статус</div>
                    </div>
                </div>
            </div>
        `
}

function renderTeraphist(item, card) {
        card.innerHTML = `
            <div class="card__content">
                <label>Пациент</label>
                <input disabled value="${item.content['fullname']}">
                <label>Доктор</label>
                <input disabled value="${item.doctor}">
            </div>
            <div class="card__content card__content--hidden">
              <input disabled value="${item.title}">
              <input disabled value="${item.content.age}">
              <input disabled value="${item.description}">
            </div>
            <div class="extra content">
                    <button type="button" class="ui button show-more">Показать больше</button>
                    <div class="ui icon top left pointing dropdown button">
                        <i class="ellipsis vertical icon"></i>
                        <div class="menu">
                            <div class="item-edit item">Редактировать</div>
                            <div class="item-delete item">Удалить</div>
                            <div class="item-change item">Изменить статус</div>
                        </div>
                    </div>
            </div>
      `
}

function renderDentist(item, card) {
        card.innerHTML = `
          <div class="card__content">
                <label>Пациент</label>
                <input disabled value="${item.content['fullname']}">
                <label>Доктор</label>
                <input disabled value="${item.doctor}">
            </div>
            <div class="card__content card__content--hidden">
              <input disabled value="${item.title}">
              <input disabled value="${item.content['last visit']}">
              <input disabled value="${item.description}">
            </div>
            <div class="extra content">
                    <button type="button" class="ui button show-more">Показать больше</button>
                    <div class="ui icon top left pointing dropdown button">
                        <i class="ellipsis vertical icon"></i>
                        <div class="menu">
                            <div class="item-edit item">Редактировать</div>
                            <div class="item-delete item">Удалить</div>
                            <div class="item-change item">Изменить статус</div>
                        </div>
                    </div>
            </div>
      `
}





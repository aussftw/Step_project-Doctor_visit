import { showMore } from "./showMore"
import { deleteCard } from "./deleteCard"
import { changeStatus } from "./changeStatus"

export function renderCards(data) {
  const container = document.querySelector(".cards-container")

  container.innerHTML = ""

  data.forEach(item => {
    const card = document.createElement("div")
    card.classList.add("ui", "card")
    card.setAttribute("data-id", `${item.id}`)
    card.setAttribute("data-type", `${item.content.doctorType}`)
    card.setAttribute("data-status", `${item.status}`)
    card.setAttribute("draggable", "true")

    render(item, card)
    container.append(card)
  })

  const cards = document.querySelectorAll(".card")
  cards.forEach(item => {
    item.addEventListener("dragstart", drag)
  })
  function allowDrop(e) {
    e.preventDefault()
  }
  function drag(e) {
    e.dataTransfer.setData("text", e.target.id)
  }
  function drop(e) {
    e.preventDefault()
    const extraData = e.dataTransfer.getData("text")
    this.appendChild(document.getElementById(extraData))
  }

  container.addEventListener("drop", drop)
  container.addEventListener("dragover", allowDrop)

  $(".ui.dropdown").dropdown()
  showMore(cards)
  deleteCard()
  changeStatus()
}

function render(data, card) {
  if (data.content.doctorType === "cardiologist") {
    renderCardiologist(data, card)
  } else if (data.content.doctorType === "teraphist") {
    renderTeraphist(data, card)
  } else {
    renderDentist(data, card)
  }
}

function renderCardiologist(item, card) {
  card.setAttribute("draggable", "true")
  card.innerHTML = `
            <div class="card__content">
                <label>Пациент</label>
                <input name ="fullname" disabled value="${
                  item.content["fullname"]
                }">
                <label>Доктор</label>
                <input name ="doctor" disabled value="${item.doctor}">
            </div>
            <div class="card__content card__content--hidden">
              <input name ="title" disabled value="${item.title}">
              <input name ="presure" disabled value="${item.content.presure}">
              <input name ="body mass index" disabled value="${
                item.content["body mass index"]
              }">
              <input name ="past diseases of the cardiovascular system" disabled value="${
                item.content["past diseases of the cardiovascular system"]
              }">
              <input name ="age" disabled value="${item.content.age}">
              <input name ="description" disabled value="${item.description}">
            </div>
            <div class="extra content">
                <button type="button" class="ui button show-more">Показать больше</button>
                <div class="ui icon top left pointing dropdown button">
                    <i class="ellipsis vertical icon"></i>
                    <div class="menu">
                        <div class="item-edit item">Редактировать</div>
                        <div class="item-delete item">Удалить</div>
                        <div class="item-change item">
                          <i class="dropdown icon"></i>
                          <span class="text">Изменить статус</span>
                          <div class="menu">
                            <div class="item item-change" data-status="open">
                              Open
                            </div>
                            <div class="item item-change" data-status="done">
                              Done
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        `
}

function renderTeraphist(item, card) {
  card.innerHTML = `
            <div class="card__content">
                <label>Пациент</label>
                <input disabled value="${item.content["fullname"]}">
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
                            <div class="item-change item">
                              <i class="dropdown icon"></i>
                              <span class="text">Изменить статус</span>
                              <div class="menu">
                                <div class="item item-change" data-status="open">
                                  Open
                                </div>
                                <div class="item item-change" data-status="done">
                                  Done
                                </div>
                            </div>
                          </div>
                        </div>
                  </div>
            </div>
      `
}

function renderDentist(item, card) {
  card.innerHTML = `
          <div class="card__content">
                <label>Пациент</label>
                <input disabled value="${item.content["fullname"]}">
                <label>Доктор</label>
                <input disabled value="${item.doctor}">
            </div>
            <div class="card__content card__content--hidden">
              <input disabled value="${
                item.title ? item.title : "не указано"
              } ">
              <input disabled value="${
                item.content["last visit"]
                  ? item.content["last visit"]
                  : "не указано"
              }">
              <input disabled value="${
                item.description ? item.description : "не указано"
              }">
            </div>
             <div class="extra content">
                    <button type="button" class="ui button show-more">Показать больше</button>
                    <div class="ui icon top left pointing dropdown button">
                        <i class="ellipsis vertical icon"></i>
                        <div class="menu">
                            <div class="item-edit item">Редактировать</div>
                            <div class="item-delete item">Удалить</div>
                            <div class="item-change item">
                              <i class="dropdown icon"></i>
                              <span class="text">Изменить статус</span>
                              <div class="menu">
                                <div class="item item-change" data-status="open">
                                  Open
                                </div>
                                <div class="item item-change" data-status="done">
                                  Done
                                </div>
                            </div>
                          </div>
                        </div>
                  </div>
            </div>
      `
}

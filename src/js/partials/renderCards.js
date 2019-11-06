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

    render(item, card)
    container.append(card)
  })
  const cards = document.querySelectorAll(".card")
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
  card.innerHTML = `
            <div class="card__content">
                <label>Пациент</label>
                <input disabled value="${
                  item.content["fullname"]
                    ? item.content["fullname"]
                    : "не указано"
                }">
                <label>Доктор</label>
                <input disabled value="${
                  item.doctor ? item.doctor : "не указано"
                }">
            </div>
            <div class="card__content card__content--hidden">
               <label>Цель визита</label>
              <input name ="title" disabled value="${item.title}">
              <label>Давление</label>
              <input name ="presure" disabled value="${
                item.content.presure ? item.content.presure : "не указано"
              }">
              <label> Индекс массы тела</label>
              <input name ="body mass index" disabled value="${
                item.content["body mass index"]
                  ? item.content["body mass index"]
                  : "не указано"
              }">
              <label>Перенесенные заболевания</label>
              <input name ="past diseases of the cardiovascular system" disabled value="${
                item.content["past diseases of the cardiovascular system"]
                  ? item.content["past diseases of the cardiovascular system"]
                  : "не указано"
              }">
              <label>Возраст</label>
              <input name ="age" disabled value="${
                item.content.age ? item.content.age : "не указано"
              }">
              <label>Описание визита</label>
               <input disabled value="${
                 item.description ? item.description : "не указано"
               }">
            </div>
            <div class="extra content">
                <button type="button" class="ui button show-more">Показать больше</button>
                <div class="ui icon top left pointing dropdown button">
                    <i class="ellipsis vertical icon"></i>
                    <div class="menu"> 
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
                <input disabled value="${
                  item.content["fullname"]
                    ? item.content["fullname"]
                    : "не указано"
                }">
                <label>Доктор</label>
                <input disabled value="${
                  item.doctor ? item.doctor : "не указано"
                }">
            </div>
            <div class="card__content card__content--hidden">
              <label>Цель визита</label>
              <input disabled value="${item.title ? item.title : "не указано"}">
              <label>Возарст</label>
              <input disabled value="${
                item.content.age ? item.content.age : "не указано"
              }">
              <label>Описание визита</label>
              <input disabled value="${
                item.description ? item.description : "не указано"
              }">
            </div>
            <div class="extra content">
                    <button type="button" class="ui button show-more">Показать больше</button>
                    <div class="ui icon top left pointing dropdown button">
                        <i class="ellipsis vertical icon"></i>
                        <div class="menu">
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
                <input disabled value="${
                  item.content["fullname"]
                    ? item.content["fullname"]
                    : "не указано"
                }">
                <label>Доктор</label>
                <input disabled value="${
                  item.doctor ? item.doctor : "не указано"
                }">
            </div>
            <div class="card__content card__content--hidden">
               <label>Цель визита</label>
              <input disabled value="${
                item.title ? item.title : "не указано"
              } ">
              <label>Последнее посещение</label>
              <input disabled value="${
                item.content["last visit"]
                  ? item.content["last visit"]
                  : "не указано"
              }">
              <label>Описание визита</label>
              <input disabled value="${
                item.description ? item.description : "не указано"
              }">
            </div>
             <div class="extra content">
                    <button type="button" class="ui button show-more">Показать больше</button>
                    <div class="ui icon top left pointing dropdown button">
                        <i class="ellipsis vertical icon"></i>
                        <div class="menu">
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

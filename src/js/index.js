import axios from "axios"
import { modal } from "./partials/modal.js"
import { modalContent } from "./partials/modal.js"
import { _formElements } from "./partials/inputsData.js"
import { _personal } from "./partials/selectandTextAreaValues.js"
import { _priority } from "./partials/selectandTextAreaValues.js"
import { _description } from "./partials/selectandTextAreaValues.js"
import { showMore } from "./partials/showMore"
import { deleteCard } from "./partials/deleteCard"

//=========================== Doctor checker ===========================//

export function selectDoctor() {
  const chooseDoctor = document.getElementById("chooseDoctorId")
  chooseDoctor.addEventListener("change", event => {
    if (chooseDoctor.value === "Кардиолог") {
      const type = "cardiologist"
      const cardiologistForm = new FormCreator(
        _formElements.cardiologist,
        _personal.cardiologist,
        _description,
        _priority,
        type
      )
      cardiologistForm.render()
    } else if (chooseDoctor.value === "Терапевт") {
      const type = "Therapist"
      const therapistForm = new FormCreator(
        _formElements.teraphist,
        _personal.therapist,
        _description,
        _priority,
        type
      )
      therapistForm.render()
    } else if (chooseDoctor.value === "Стоматолог") {
      const type = "dentist"
      const dentistForm = new FormCreator(
        _formElements.dentist,
        _personal.dentist,
        _description,
        _priority,
        type
      )
      dentistForm.render()
    }
  })
}

//=========================== Form constructor ===========================//

class FormCreator {
  constructor(formElemnts, personal, description, priority, type) {
    ;(this._formElements = formElemnts),
      (this._personal = personal),
      (this._description = description),
      (this._priority = priority),
      (this.type = type)
  }

  //create form to the memory

  createForm() {
    const form = document.createElement("form")
    form.classList.add("ui")
    form.classList.add("form")

    form.addEventListener("submit", e => {
      e.preventDefault()
      this.sendData()
    })

    // inputs consturcor

    for (let i = 0; i < this._formElements.val.length; i++) {
      const element = document.createElement(this._formElements.elementName)

      element.type = this._formElements.val[i].type
      element.placeholder = this._formElements.val[i].placeholder
      element.name = this._formElements.val[i].name
      element.style.display = this._formElements.val[i].style
      element.value = this._formElements.val[i].value
      element.classList.add("inputData")
      element.setAttribute("required", "")
      form.append(element)
    }

    // selects constructor

    const selectDoctorByName = document.createElement("select")
    selectDoctorByName.classList.add("select-dcotor-by-name")
    form.append(selectDoctorByName)

    for (let i = 0; i < this._personal.textValue.length; i++) {
      const option = document.createElement(this._personal.elementName)
      option.value = this._personal.textValue[i]
      option.innerHTML = this._personal.textValue[i]
      option.classList.add("named-doctor")
      selectDoctorByName.append(option)
    }

    const selectPriority = document.createElement("select")
    selectPriority.classList.add("select-priority")
    form.append(selectPriority)

    for (let i = 0; i < this._priority.val.length; i++) {
      const option = document.createElement(this._priority.elementName)
      option.value = this._priority.val[i]
      option.innerHTML = this._priority.val[i]
      option.classList.add("priority")
      selectPriority.append(option)
    }

    // text area constructor

    for (let i = 0; i < this._description.val.length; i++) {
      const description = document.createElement(this._description.elementName)
      description.placeholder = this._description.val[i].placeholder
      description.classList.add("description")
      form.append(description)
    }

    const createVisitButton = document.createElement("button")
    createVisitButton.setAttribute("type", "submit")
    createVisitButton.classList.add("create-visit-button")
    createVisitButton.classList.add("ui", "blue", "button", "large")
    createVisitButton.innerText = "Create"
    form.appendChild(createVisitButton)

    return form
  }

  // send data to server

  async sendData() {
    const obj = {
      token: "569bc2174da3",
      doctor: "",
      title: true,
      description: "",
      status: "open",
      priority: "",
      content: {}
    }

    const inputData = document.querySelectorAll(".inputData")
    inputData.forEach(elem => {
      if (obj.hasOwnProperty(elem.name)) {
        obj[elem.name] = elem.value
      } else {
        obj.content[elem.name] = elem.value
      }
    })

    const visitDescription = document.querySelector(".description")
    obj.description = visitDescription.value

    const selectPriority = document.querySelector(".select-priority")
    obj.priority = selectPriority.value

    const selectDoctorByName = document.querySelector(".select-dcotor-by-name")
    obj.doctor = selectDoctorByName.value

    const authOptions = {
      method: "POST",
      url: "http://cards.danit.com.ua/cards",
      data: JSON.stringify(obj),
      headers: {
        Authorization: "Bearer 569bc2174da3"
      }
    }

    const res = await axios(authOptions)
      .then(function(response) {
        return response.data.id
      })
      .catch(function(error) {
        console.log(error)
      })

    this.checkDoctor(this.type, obj)
    $(".ui.modal").modal("hide")
    const form = (document.querySelector(".form-wrapper").innerHTML = "")
    modalContent.style.display = "block"
  }

  checkDoctor(type, obj) {
    if (type === "cardiologist") {
      const cardio = new CardiologistVisit(obj)
      obj.content.type = "cardiologist"
      cardio.render(obj)
    } else if (type === "dentist") {
      const dentist = new DentistVisit(obj)
      dentist.render(obj)
    } else {
      const therapist = new TherapistVisit(obj)
      therapist.render(obj)
    }
  }

  // Form render

  render() {
    const form = document.querySelector(".form-wrapper")

    if (form) {
      form.appendChild(this.createForm())
    } else {
      const container = document.createElement("div")
      container.classList.add("form-wrapper")
      document.getElementById("modal").appendChild(container)
      // hiding previous modal
      container.appendChild(this.createForm())
    }
    modalContent.style.display = "none"
    $(".ui.dropdown").dropdown()
  }
}

//=========================== Card constructor ===========================//

class Visit {
  constructor(obj) {
    this.name = obj.content["fullname"]
    this.title = obj.title
    this.description = obj.description
    this.doctor = obj.doctor
    this.priority = obj.priority
  }
}

class DentistVisit extends Visit {
  constructor(obj) {
    super(obj)
    this.lastVisit = obj.content["last visit"]
    this.content = obj.content
  }
  render(obj) {
    const container = document.querySelector(".cards-container")
    const card = document.createElement("div")
    card.classList.add("ui", "card")
    card.innerHTML = `
            <div class="card__content">
                <label>Пациент</label>
                <input disabled value="${this.name}">
                <label>Доктор</label>
                <input disabled value="${this.doctor}">
            </div>
            <div class="card__content card__content--hidden">
              <input disabled value="${this.title} ? ${this.title} : 'не указано'">
              <input disabled value="${this.lastVisit} ? ${this.lastVisit} : 'не указано'">
              <input disabled value="${this.description} ? ${this.description} : 'не указано'">
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
    container.append(card)

    $(".ui.dropdown").dropdown()
    // showMore(card)
    deleteCard()
  }
}

class TherapistVisit extends Visit {
  constructor(obj) {
    super(obj)
    this.age = obj.content.age
  }
  render() {
    const container = document.querySelector(".cards-container")
    const card = document.createElement("div")
    card.classList.add("ui", "card")
    card.innerHTML = `
        <div class="card__content">
                 <label>Пациент</label>
                <input disabled value="${this.name}">
                <label>Доктор</label>
                <input disabled value="${this.doctor}">
            <div class="card__content card__content--hidden">
              <input disabled value="${this.title} ? ${this.title} : 'не указано'">
              <input disabled value="${this.age} ? ${this.age} : 'не указано'">
              <input disabled value="${this.description} ? ${this.description} : 'не указано'">
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
    container.append(card)

    $(".ui.dropdown").dropdown()
    // showMore(card)
    deleteCard()
  }
}

class CardiologistVisit extends Visit {
  constructor(obj) {
    super(obj)
    this.presure = obj.content.presure
    this.indexMass = obj.content["body mass index"]
    this.diseases = obj.content["past diseases of the cardiovascular system"]
    this.age = obj.content.age
  }
  render() {
    const container = document.querySelector(".cards-container")
    const card = document.createElement("div")
    card.classList.add("ui", "card")
    card.innerHTML = `
     <div class="card__content">
                <label>Пациент</label>
                <input disabled value="${this.name}">
                <label>Доктор</label>
                <input disabled value="${this.doctor}">
            </div>
            <div class="card__content card__content--hidden">
              <input disabled value="${this.title} ? ${this.title} : 'не указано'">
              <input disabled value="${this.presure} ? ${this.presure} : 'не указано'">
              <input disabled value="${this.indexMass} ? ${this.indexMass} : 'не указано'">
              <input disabled value="${this.diseases} ? ${this.diseases} : 'не указано'">
              <input disabled value="${this.age} ? ${this.age} : 'не указано'">
              <input disabled value="${this.description} ? ${this.description} : 'не указано'">
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
    container.append(card)
    $(".ui.dropdown").dropdown()
    // showMore(card)
    deleteCard()
  }
}

$(".ui.dropdown").dropdown()

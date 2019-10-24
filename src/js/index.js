import { modal } from "./partials/modal.js"
import { modalContent } from "./partials/modal.js"
import { _formElements } from "./partials/inputsData.js"
import { _personal } from "./partials/selectandTextAreaValues.js"
import { _priority } from "./partials/selectandTextAreaValues.js"
import { _description } from "./partials/selectandTextAreaValues.js"
//=========================== Doctor checker ===========================//

const chooseDoctor = document.getElementById("chooseDoctorId")

chooseDoctor.addEventListener("change", event => {
  if (chooseDoctor.value === "Кардиолог") {
    const cardiologistForm = new FormCreator(
      _formElements.cardiologist,
      _personal.cardiologist,
      _description,
      _priority
    )
    cardiologistForm.render()
  } else if (chooseDoctor.value === "Терапевт") {
    const therapistForm = new FormCreator(
      _formElements.teraphist,
      _personal.therapist,
      _description,
      _priority
    )
    therapistForm.render()
  } else if (chooseDoctor.value === "Стоматолог") {
    const dentistForm = new FormCreator(
      _formElements.dentist,
      _personal.dentist,
      _description,
      _priority
    )
    dentistForm.render()
  }
})

//=========================== Form constructor ===========================//

class FormCreator {
  constructor(formElemnts, personal, description, priority) {
    ;(this._formElements = formElemnts),
      (this._personal = personal),
      (this._description = description),
      (this._priority = priority)
  }

  //create form to the memory

  createForm() {
    const form = document.createElement("form")
    form.classList.add("form")

    const createVisitButton = document.createElement("button")
    createVisitButton.setAttribute("type", "submit")
    createVisitButton.classList.add("create-visit-button")
    createVisitButton.innerText = "Create"
    form.appendChild(createVisitButton)

    form.addEventListener("submit", e => {
      e.preventDefault()
      this.serialize()
    })

    // inputs consturcor

    for (let i = 0; i < this._formElements.val.length; i++) {
      const element = document.createElement(this._formElements.elementName)

      element.type = this._formElements.val[i].type
      element.placeholder = this._formElements.val[i].placeholder
      element.name = this._formElements.val[i].name
      element.classList.add("inputData")
      element.setAttribute("reqired", true)
      form.append(element)
    }

    // selects constructor

    const select = document.createElement("select")
    select.classList.add("select")
    form.append(select)

    for (let i = 0; i < this._personal.val.length; i++) {
      const option = document.createElement(this._personal.elementName)
      const optionName = document.createElement("p")
      optionName.innerHTML = this._personal.val[i]
      option.classList.add("select")
      select.append(option)
      option.append(optionName)
    }

    const selectPriority = document.createElement("select")
    selectPriority.classList.add("select")
    form.append(selectPriority)

    for (let i = 0; i < this._priority.val.length; i++) {
      const option = document.createElement(this._priority.elementName)
      const optionName = document.createElement("p")
      optionName.innerHTML = this._priority.val[i]
      option.classList.add("select")
      selectPriority.append(option)
      option.append(optionName)
    }

    for (let i = 0; i < this._description.val.length; i++) {
      const description = document.createElement(this._description.elementName)
      description.placeholder = this._description.val[i].placeholder
      description.classList.add("description")
      form.append(description)
    }
    return form
  }

  serialize() {
    const obj = {}
    const inputData = document.querySelectorAll(".inputData")
    inputData.forEach(elem => {
      obj[elem.placeholder] = elem.value
    })
    console.log(obj)
    return obj
  }

  // Form render

  render() {
    const container = document.createElement("div")
    container.classList.add("form-wrapper")
    document.getElementById("modal").appendChild(container)

    // hiding previous modal

    modalContent.style.display = "none"

    container.appendChild(this.createForm())

    const closeModal = document.createElement("span")
    closeModal.innerText = "Закрыть"
    closeModal.classList.add("modal-close")
    container.appendChild(closeModal)

    closeModal.addEventListener("click", e => {
      modal.style.display = "none"
    })
  }
}

//=========================== Card constructor ===========================//

class Visit {
  constructor(reason, date, fullName) {
    this.reason = reason
    this.date = date
    this.fullName = fullName
  }

  createCard() {
    console.log("created")
  }

  cardDrag() {
    console.log("draggged")
  }

  cardDrop() {
    console.log("dropped")
  }
}

class Dentist extends Visit {
  constructor(reason, date, fullName, ...other) {
    super(reason, date, fullName)
  }
}

class Therapist extends Visit {
  constructor(reason, date, fullName, ...other) {
    super(reason, date, fullName)
  }
}

class Cardiologist extends Visit {
  constructor(reason, date, fullName, ...other) {
    super(reason, date, fullName)
  }
}
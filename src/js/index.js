import axios from "axios"
import { modal } from "./partials/modal.js"
import { modalContent } from "./partials/modal.js"
import { _formElements } from "./partials/inputsData.js"
import { _personal } from "./partials/selectandTextAreaValues.js"
import { _priority } from "./partials/selectandTextAreaValues.js"
import { _description } from "./partials/selectandTextAreaValues.js"

//=========================== Doctor checker ===========================//

export { selectDoctor }

function selectDoctor() {
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
}

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
      element.classList.add("inputData")
      element.setAttribute("reqired", false)
      form.append(element)
    }

    // selects constructor

    const selectDoctorByName = document.createElement("select")
    selectDoctorByName.classList.add("select-dcotor-by-name") // "ui", "dropdown"
    form.append(selectDoctorByName)

    for (let i = 0; i < this._personal.textValue.length; i++) {
      const option = document.createElement(this._personal.elementName)
      option.value = this._personal.textValue[i]
      option.innerHTML = this._personal.textValue[i]
      option.classList.add("named-doctor")
      selectDoctorByName.append(option)
    }

    const selectPriority = document.createElement("select")
    selectPriority.classList.add("select-priority") // "ui", "dropdown"
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

  sendData() {
    const obj = {
      token: "569bc2174da3",
      doctor: "someone",
      title: true,
      description: true,
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

    const selectPriority = document.querySelector(".select-priority")
    selectPriority.addEventListener("change", e => {
      obj.priority = e.target.value
      console.log(obj) // wtf??
    })

    const visitDescription = document.querySelector(".description")
    visitDescription.addEventListener("keyup", e => {
      const descriptionValue = e.target.value
      obj.description = descriptionValue
      console.log(obj) // wtf??
    })

    // const selectDoctorByName = document.querySelector(".select-dcotor-by-name")
    // selectDoctorByName.addEventListener("change", e => {
    //   obj.priority = e.target.value
    //   console.log(obj)
    // })

    console.log(obj)

    const authOptions = {
      method: "POST",
      url: "http://cards.danit.com.ua/cards",
      data: JSON.stringify(obj)
    }

    axios(authOptions)
      .then(function(response) {
        return console.log(response.data.id)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  // Form render

  render() {
    const form = document.querySelector(".form-wrapper")

    // wtf, checker??
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

$(".ui.dropdown").dropdown()

// Stash

// testData.forEach((item)=>{
//   item.push.testArr
//   console.log(testArr);
// })

// console.log(response.data);
// console.log(response.config.data);

// if(response.data.status === "Success") {
//   const card = new Cardiologist(obj)
// }

// const authOptions2 = {
//   method: "GET",
//   url: "http://cards.danit.com.ua/cards?token=569bc2174da3"
// }

// axios(authOptions2)
//   .then(function(response) {
//     return console.log(response.data)
//   })
//   .catch(function(error) {
//     console.log(error)
//   })

// sendData() {
//   const data = {
//     token: "569bc2174da3",
//     title: "test",
//     description: "testing",

//     content: {}
//   }

//   const authOptions = {
//     method: "POST",
//     url: "http://cards.danit.com.ua/cards",
//     data: JSON.stringify(data)
//   }

//   axios(authOptions)
//     .then(function(response) {
//       console.log(response)
//       return console.log(response.data.id)
//     })
//     .catch(function(error) {
//       console.log(error)
//     })
// }

// serialize() {
//   const obj = {}
//   const inputData = document.querySelectorAll(".inputData")
//   inputData.forEach(elem => {
//     obj[elem.name] = elem.value
//   })
//   return obj
// }

// cardRenderTest() {
//   const card = document.createElement("div")
//   card.classList.add("card")
//   testArr = ["1", "2", "3"]
//   for (let i = 0; i < testArr.length; i++) {
//     const element = document.createElement("p")

//     element.placeholder = this._formElements.val[i].placeholder
//     element.name = this._formElements.val[i].name
//     element.classList.add("inputData")
//     element.setAttribute("reqired", false)
//     form.append(element)
//   }
// }

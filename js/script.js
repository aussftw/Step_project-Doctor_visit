import { _formElements } from "./partials/inputsData.js"
import { modal } from "./partials/modal.js"
import { modalContent } from "./partials/modal.js"

//=========================== Doctor checker ===========================//

const chooseDoctor = document.getElementById("chooseDoctorId")

chooseDoctor.addEventListener("change", event => {
  // ===== Extra idea =====//

  // const doktos = {
  //   cardio: []
  // }

  if (chooseDoctor.value === "Кардиолог") {
    const cardiologistForm = new FormCreator(_formElements.cardiologist)
    cardiologistForm.render()
    // cardiologistForm.serialize()
  } else if (chooseDoctor.value === "Терапевт") {
    const therapistForm = new FormCreator(_formElements.teraphist)
    therapistForm.render()
    // therapistForm.serialize()
  } else if (chooseDoctor.value === "Стоматолог") {
    const dentistForm = new FormCreator(_formElements.dentist)
    dentistForm.render()
    // dentistForm.serialize()
  }
})

//=========================== Form constructor ===========================//

class FormCreator {
  constructor(formElemnts) {
    this._formElements = formElemnts
    // this.dataInput=dataInput; <<==== related to extra idea
    this.form = null
  }

  //create form to the memory

  createForm() {
    const formInputs = document.createElement("form")
    formInputs.classList.add("form")

    const createVisitButton = document.createElement("button")
    createVisitButton.setAttribute("type", "submit")
    createVisitButton.classList.add("create-visit-button")
    createVisitButton.innerText = "Create"
    formInputs.appendChild(createVisitButton)

    formInputs.addEventListener("submit", e => {
      e.preventDefault()
      this.serialize()
    })

    for (let i = 0; i < this._formElements.val.length; i++) {
      const element = document.createElement(this._formElements.elementName)

      element.type = this._formElements.val[i].type
      element.placeholder = this._formElements.val[i].placeholder
      element.classList.add("inputData")
      element.setAttribute("reqired", true)
      formInputs.append(element)
    }
    return formInputs
  }

  serialize() {
    const arr = []
    const inputData = document.querySelectorAll(".inputData")
    inputData.forEach(elem => {
      arr.push(`${elem.placeholder}: ${elem.value}`)
      return arr
    })

    // arr.map(element => {
    //   const i = arr.indexOf(":")
    //   const first = arr.slice(0, i)
    //   const second = arr.slice(i + 1, arr.length)
    //   console.log(first)
    //   console.log(second)
    // })

    // console.log(arr)

    function finxgArr(array) {
      for (let i = 0; i < array.length; i++) {
        return array[i].split(":", 1)
      }
    }

    const newArr = finxgArr(arr)
    console.log(newArr)
  }

  // Form render

  render() {
    const container = document.createElement("div")
    container.classList.add("form-wrapper")
    document.getElementById("modal").appendChild(container)

    // hiding previous modal

    modalContent.style.display = "none"

    container.appendChild(this.createForm())
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

// _______------------___________ STASH  _______------------___________

//=========================== Create card doctor checker ===========================//

// if (choseDocgor.value === "Кардиолог") {

//   return const doctorArg = "cardiologist"
// } else if (event.target.value === "Терапевт") {
//   const doctorArg = "therapist"
//   return doctorArg
// } else {
//   const doctorArg = "dentist"
//   return doctorArg
// }

// console.log(doctrArg)

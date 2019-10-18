// import { vistClass } from "./vistClass.js"
import { _formElements } from "./partials/inputsData.js"
import { modal } from "./partials/modal.js"
import { modalContent } from "./partials/modal.js"

//=========================== Doctor checker ===========================//

const chooseDoctor = document.getElementById("chooseDoctorId")

chooseDoctor.addEventListener("change", event => {
  // ===== Extra idea ============

  // const doktos = {
  //   cardio: []
  // }

  if (event.target.value === "Кардиолог") {
    const cardiologistForm = new FormCreator(
      "Anatoliy",
      "Pain",
      "...",
      _formElements.cardiologist
    )
    cardiologistForm.render()
  } else if (event.target.value === "Терапевт") {
    const therapistForm = new FormCreator(
      "Oleg",
      "BrainDamage",
      57,
      _formElements.teraphist
    )
    therapistForm.render()
  } else if (event.target.value === "Стоматолог") {
    const dentistForm = new FormCreator(
      "Alma",
      "rotten_somewhere",
      "12.11.2017",
      _formElements.dentist
    )
    dentistForm.render()
  }
})

//=========================== Form constructor ===========================//

class FormCreator {
  constructor(fullName, visitPurpose, visitComment, formElemnts) {
    this.fullName = fullName
    this.visitPurpose = visitPurpose
    this.visitComment = visitComment
    this._formElements = formElemnts
    // this.dataInput=dataInput; <<==== related to extra idea
  }

  //create form to the memory

  createForm() {
    const formInputs = document.createElement("form")
    formInputs.classList.add("form")

    for (let i = 0; i < this._formElements.val.length; i++) {
      const element = document.createElement(this._formElements.typo)

      element.type = this._formElements.val[i].type
      element.placeholder = this._formElements.val[i].placeholder
      element.classList.add("inputData")
      element.setAttribute("reqired", true)
      formInputs.append(element)
    }
    return formInputs
  }

  // Form render

  render() {
    //creating div-wrapper for form

    const container = document.createElement("div")
    container.classList.add("form-wrapper")
    document.getElementById("modal").appendChild(container)

    // button "Create Visit" builder

    const createVisitButton = document.createElement("button")
    createVisitButton.classList.add("create-visit-button")
    createVisitButton.innerText = "Create"
    container.appendChild(createVisitButton)

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

//=========================== Create card doctor checker ===========================//

// chooseDoctor.addEventListener("select", e => {
//   if (event.target.value === "Кардиолог") {
//     const doctorArg = "cardiologist"
//     return doctorArg
//   } else if (event.target.value === "Терапевт") {
//     const doctorArg = "therapist"
//     return doctorArg
//   } else {
//     const doctorArg = "dentist"
//     return doctorArg
//   }
// })

//=========================== Selected doctor Card constructor ===========================//

// createVisitButton.addEventListener("click", e => {
//   function doctorCard(doctorArg) {
//     if (doctorArg === "therapist") {
//       return new Therapist("Kolya")
//     } else if (doctorArg === "dentist") {
//       return new Dentist()
//     } else {
//       return new Cardiologist()
//     }
//   }
// })

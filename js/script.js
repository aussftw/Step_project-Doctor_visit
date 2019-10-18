//=========================== modal ===========================//

const modalButton = document.getElementById("openModalButton")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("closeModal")
const chooseDoctor = document.getElementById("chooseDoctorId")
const modalContent = document.querySelector("#modalContentId")

modalButton.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none"
  }
})

modalButton.addEventListener("click", e => {
  modal.style.display = "block"
})

closeModal.addEventListener("click", e => {
  modal.style.display = "none"
})

//=========================== Doctor checker ===========================//

chooseDoctor.addEventListener("change", event => {
  // createdForm.createForm()

  if (event.target.value === "Кардиолог") {
    console.log("Кардиолог")
    const cardiologist = new FormCreator(
      "Anatoliy",
      "Pain",
      "...",
      _formElements.cardiologist
    )
    cardiologist.render()
  } else if (event.target.value === "Терапевт") {
    console.log("Терапевт")
    const therapist = new FormCreator(
      "Oleg",
      "BrainDamage",
      57,
      _formElements.teraphist
    )
    therapist.render()
  } else if (event.target.value === "Стоматолог") {
    console.log("Стоматолог")
    const dentist = new FormCreator(
      "Alma",
      "rotten_somewhere",
      "12.11.2017",
      _formElements.dentist
    )
    dentist.render()
  } else {
    return false
    console.log("check failed")
  }
})

//=========================== Form constructor ===========================//

class FormCreator {
  constructor(fullName, visitPurpose, visitComment, formElemnts) {
    this.fullName = fullName
    this.visitPurpose = visitPurpose
    this.visitComment = visitComment
    this._formElements = formElemnts
    // this.dataInput=dataInput;
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
    console.log(formInputs)
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

    //=========================== Create card doctor checker ===========================//

    createVisitButton.addEventListener("click", e => {
      function doctorCard(doctorArg) {
        if (doctorArg === therapist) {
          return new Therapist("Kolya")
        } else if (doctorArg === dentist) {
          return new Dentist()
        } else {
          return new Cardiologist()
        }
      }
    })

    // hiding previous modal

    modalContent.style.display = "none"
    container.appendChild(this.createForm())
  }
}

//=========================== Card constructor ===========================//

class Visit {
  constructor(fullName) {
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
  constructor(fullName) {
    super(fullName)
  }
}

class Therapist extends Visit {
  constructor(fullName) {
    super(fullName)
  }
}

class Cardiologist extends Visit {
  constructor(fullName) {
    super(fullName)
  }
}

//=========================== inputs data ===========================//

const _formElements = {
  cardiologist: {
    typo: "input",
    val: [
      {
        type: "text",
        placeholder: "Цель визита"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Обычное давление"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Индекс массы тела"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Перенесенные заболевания сердечно-сосудистой системы"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "возраст"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "ФИО"
        // reqired: true
      }
      // { type: "checkbox" }
    ]
  },

  teraphist: {
    typo: "input",
    val: [
      {
        type: "text",
        placeholder: "Цель визита"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Возраст"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "ФИО"
        // reqired: true
      }
    ]
  },

  dentist: {
    typo: "input",
    val: [
      {
        type: "text",
        placeholder: "Цель визита"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "Дата последнего посещения"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "ФИО"
        // reqired: true
      }
    ]
  }
}

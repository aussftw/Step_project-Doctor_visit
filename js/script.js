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
    const cardio = new FormCreator(
      "Anatoliy",
      "Pain",
      "...",
      _formElements.cardio
    )
    cardio.render()
  } else if (event.target.value === "Терапевт") {
    console.log("Терапевт")
    const therapist = new FormCreator("Oleg", "BrainDamage", 57, _formElements.teraphist)
    therapist.render()
  } else if (event.target.value === "Стоматолог") {
    console.log("Стоматолог")
    const dentist = new FormCreator("Alma", "rotten_somewhere", "12.11.2017")
    dentist.render()
  } else {
    return false
    console.log("check failed")
  }
})

//=========================== inputs data ===========================//

const _formElements = {
  cardio: {
    name: "cardio",
    typo: "input",
    val: [
      {
        type: "text",
        placeholder: "lllll"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "bmi"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "llll"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "llll"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "lll"
        // reqired: true
      },
      {
        type: "text",
        placeholder: ""
        // reqired: true
      },
      {type: "checkbox"}
    ]
  },

  teraphist: {
    name: "teraphist",
    typo: "input",
    val: [
      {
        type: "text",
        placeholder: "aaaaaalllll"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "bmi"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "llll"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "llll"
        // reqired: true
      },
      {
        type: "text",
        placeholder: "lll"
        // reqired: true
      },
      {
        type: "text",
        placeholder: ""
        // reqired: true
      }
    ]
  }
}

// console.log(formElemnts[0].val[0].type)

//=========================== Form construcor ===========================//

class FormCreator {

  constructor(fullName, visitPurpose, visitComment, formElemnts) {
    this.fullName = fullName
    this.visitPurpose = visitPurpose
    this.visitComment = visitComment
    this._formElements = formElemnts;
    // this.dataInput=dataInput;
  }

  //create form to the memory

  createForm() {
    const formInputs = document.createElement("form")

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

    // hiding previous modal

    modalContent.style.display = "none"
    container.appendChild(this.createForm())

    //creating form

    // const form = document.createElement("form")
    // form.classList.add("form")
    // container.appendChild(form)

    // creating input for FullName

    // const inputFullName = document.createElement("input")
    // inputFullName.classList.add("inputData")
    // inputFullName.placeholder = "Ф.И.О"
    // form.appendChild(inputFullName)

    // creating input for Visit Purpose

    // const inputVisitPurpose = document.createElement("input")
    // inputVisitPurpose.classList.add("inputData")
    // inputVisitPurpose.placeholder = "Цель визита"
    // form.appendChild(inputVisitPurpose)

    //creating text area for comments

    // const textAreaComment = document.createElement("textArea")
    // textAreaComment.classList.add("inputData")
    // textAreaComment.placeholder = "Вы можете оставить свой комментарий здесь"
    // form.appendChild(textAreaComment)
  }

  // createFields(mainClass, ...classes) {
  //   let inputs = document.createDocumentFragment();
  //   for (let cl of classes) {
  //     let input = document.createElement('input');
  //     input.classList.add(mainClass);
  //     input.classList.add(cl);
  //     inputs.appendChild(input);
  //   }
  //   return inputs;
  // }
}

// const createdForm = new FormCreator(
//   "NAme Full",
//   "atat",
//   "ur comment",
//   "ddd",
//   "",
//   ""
// )

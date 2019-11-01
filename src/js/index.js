import axios from "axios"
import {
  modal
} from "./partials/modal.js"
import {
  modalContent
} from "./partials/modal.js"
import {
  _formElements
} from "./partials/inputsData.js"
import {
  _personal
} from "./partials/selectandTextAreaValues.js"
import {
  _priority
} from "./partials/selectandTextAreaValues.js"
import {
  _description
} from "./partials/selectandTextAreaValues.js"


//=========================== Doctor checker ===========================//

//export { selectDoctor }

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
        type // is that legit??
      )
      cardiologistForm.render()
    } else if (chooseDoctor.value === "Терапевт") {
      const type = "Therapist"
      const therapistForm = new FormCreator(
        _formElements.teraphist,
        _personal.therapist,
        _description,
        _priority,
        type // is that legit??
      )
      therapistForm.render()
    } else if (chooseDoctor.value === "Стоматолог") {
      //or i need to create here new visit and init??
      const type = "dentist"
      const dentistForm = new FormCreator(
        _formElements.dentist,
        _personal.dentist,
        _description,
        _priority,
        type // is that legit??
      )
      dentistForm.render()
    }
  })
}

//=========================== Form constructor ===========================//

class FormCreator {
  constructor(formElemnts, personal, description, priority, type) {
    ;
    (this._formElements = formElemnts),
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
      element.classList.add("inputData")
      element.setAttribute("reqired", false)
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

    // console.log(obj)

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

    // const selectDoctorByName = document.querySelector(".select-dcotor-by-name")
    // selectDoctorByName.addEventListener("change", e => {
    //   obj.priority = e.target.value
    //   console.log(obj)
    // })

    const authOptions = {
      method: "POST",
      url: "http://cards.danit.com.ua/cards",
      data: JSON.stringify(obj),
      headers: {
        Authorization: "Bearer 569bc2174da3"
      }
    }

    // requestLogin(data) {
    //   axios.post('http://cards.danit.com.ua/login', data, {
    //   })
    //       .then((response) => {
    //        return (response.data.token);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    // }



    const res = await axios(authOptions)
      .then(function (response) {
        console.log(response.data);
        return console.log(response.data.id)
      })
      .catch(function (error) {
        console.log(error)
      })

    this.checkDoctor(this.type, obj)
    // console.log(this.checkDoctor(this.type, obj))
    $(".ui.modal").modal("hide")
  }

  checkDoctor(type, obj) {
    if (type === "cardiologist") {
      const cardio = new CardiologistVisit(obj)
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

// class Visit {
//   constructor() {}

//   createCard() {
//     console.log("created")
//   }

//   cardDrag() {
//     console.log("draggged")
//   }

//   cardDrop() {
//     console.log("dropped")
//   }
// }

// class DentistVisit extends Visit {
//   constructor() {
//     super()

//   }
//   createCard(obj) {
//     const card = new Card(obj)
//     card.render()
//   }
// }

// class TherapistVisit extends Visit {
//   constructor(obj) {
//     super()
//   }
// }

// class CardiologistVisit extends Visit {
//   constructor(obj) {
//     super()
//   }
// }

// class Card {
//   constructor(obj) {
//     this.name = obj.content["full name"]
//     this.lastVisit = obj.content["last visit"]
//     this.description = obj.description
//     this.priority = obj.priority
//     this.doctor = obj.doctor
//   }
//   render() {
//     const container = document.querySelector(`.cards-container`)
//     container.innerHTML = `
//     <div>
//     <input value=${this.name}>
//     <input value=${this.lastVisit}>
//     <input value=${this.description}>
//     <input value=${this.priority}>
//     <input value=${this.doctor}>
//     </div>
//     `
//     console.log(container)
//   }
// }

// $(".ui.dropdown").dropdown()


// ===============================
// ===============================


class Visit {
  constructor(obj) {
    this.name = obj.content["full name"]
    this.goal = obj.title
    this.description = obj.description

  }

}

class DentistVisit extends Visit {
  constructor(obj) {
    super(obj)
    this.lastVisit = obj.content["last visit"]
    this.priority = obj.priority
    this.doctor = obj.doctor
  }
  render(container) {
    const card = document.createElement('div')
    card.innerHTML = `
    <input value=${this.name}>
    <input value=${this.goal}>
    <input value=${this.description}>
    <input value=${this.priority}>
    <input value=${this.doctor}>
    `
    console.log(card);
  }
}

class TherapistVisit extends Visit {
  constructor(obj) {
    // console.log(obj);
    super(obj)
    this.lastVisit = obj.content["last visit"]
    this.priority = obj.priority
    this.doctor = obj.doctor
  }
  render(container) {
    const card = document.createElement('div')
    card.innerHTML = `
        <input value=${this.name}>
    <input value=${this.goal}>
    <input value=${this.description}>
     <input value=${this.priority}>
    <input value=${this.doctor}>
        `
    // console.log(card);
  }
}

class CardiologistVisit extends Visit {
  constructor(obj) {
    console.log(obj);
    super(obj)
    this.doctor = obj.doctor
    this.priority = obj.priority
    this.presure = obj.content.presure
    this.indexMass = obj.content["body mass index"]
    this.diseases = obj.content["past diseases of the cardiovascular system"]
    this.age = obj.content.age
  }
  render(obj) {
    console.log(obj);
    const card = document.createElement('div')
    card.innerHTML = `
        <input value=${this.name}>
    <input value=${this.goal}>
    <input value=${this.description}>
     <input value=${this.priority}>
     <input value=${this.doctor}>
     <input value=${this.presure}>
     <input value=${this.indexMass}>
     <input value=${this.diseases}>
        `
    console.log(card);
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

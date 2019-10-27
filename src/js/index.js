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

export {
  selectDoctor
}

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
    ;
    (this._formElements = formElemnts),
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
      this.serialize()
      // this.sendData()
      this.sendDataTest()
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

    const select = document.createElement("select")
    select.classList.add("select")
    // select.classList.add("ui")
    // select.classList.add("dropdown")
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
    // selectPriority.classList.add("ui")
    // selectPriority.classList.add("dropdown")
    form.append(selectPriority)

    for (let i = 0; i < this._priority.val.length; i++) {
      const option = document.createElement(this._priority.elementName)
      //const optionName = document.createElement()
      option.innerHTML = this._priority.val[i]
      //option.classList.add("select")
      selectPriority.append(option)
      // option.append(option)
    }

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

  serialize() {
    const obj = {}
    const inputData = document.querySelectorAll(".inputData")
    inputData.forEach(elem => {
      obj[elem.name] = elem.value
    })
    // console.log(obj)
    return obj
  }

  sendData() {
    const data = {
      token: "569bc2174da3",
      title: "test",
      description: "testing",
      status: "open",
      priority: "high",
      content: {}
    }

    const authOptions = {
      method: "POST",
      url: "http://cards.danit.com.ua/cards",
      data: JSON.stringify(data)
    }

    axios(authOptions)
      .then(function (response) {
        console.log(response)
        return console.log(response.data.id);
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  sendDataTest() {
    console.log('keks');
    const obj = {
      token: "569bc2174da3",
      title: true,
      description: true,
      content: {}
    }
    const inputData = document.querySelectorAll(".inputData")
    inputData.forEach(elem => {
      if(obj.hasOwnProperty(elem.name)) {
        obj[elem.name] = elem.value
      }
      else {
        obj.content[elem.name] = elem.value;
      }
    })
  

    const authOptions = {
      method: "POST",
      url: "http://cards.danit.com.ua/cards",
      data: JSON.stringify(obj)
    }

    const authOptions2 = {
      method: "GET",
      url: "http://cards.danit.com.ua/cards?token=569bc2174da3"
    }

    axios(authOptions)
      .then(function (response) {


        return console.log(response.data.id);

      })
      .catch(function (error) {
        console.log(error)
      })

    axios(authOptions2)
      .then(function (response) {
        return console.log(response.data);
      })
      .catch(function (error) {
        console.log(error)
      })



  }

  cardRenderTest(){
  const card = document.createElement('div');
  card.classList.add('card')
  testArr = ['1','2','3'];
  for (let i = 0; i < testArr.length; i++) {
    const element = document.createElement('p')

    element.placeholder = this._formElements.val[i].placeholder
    element.name = this._formElements.val[i].name
    element.classList.add("inputData")
    element.setAttribute("reqired", false)
    form.append(element)
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


// testData.forEach((item)=>{
//   item.push.testArr
//   console.log(testArr);
// })

// console.log(response.data);
// console.log(response.config.data);


// if(response.data.status === "Success") {
//   const card = new Cardiologist(obj)
// }
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
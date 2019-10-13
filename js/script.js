//=========================== modal ===========================//

const modalButton = document.getElementById("openModalButton")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("closeModal")
const chooseDoctor = document.getElementById("chooseDoctorId")
const modalContent = document.querySelector('#modalContentId')

console.log(modalContent);

modalButton.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none"
  }
})

modalButton.addEventListener("click", (e) => {
  modal.style.display = "block"
})

closeModal.addEventListener("click", (e) => {
  modal.style.display = "none"
})

 // finder of chosen doctor

chooseDoctor.addEventListener("change", (event) => {
  pacient.createWrapper()
  if (event.target.value === 'Кардиолог') {
    console.log("Кардиолог");
  } else if (event.target.value === 'Терапевт') {
    console.log("Терапевт");
  } else if (event.target.value === 'Стоматолог') {
    console.log("Стоматолог");
  } else  {
    return false
  }
})

// _____________________functional_____________


class Visit {
  constructor(fullName, visitPurpose, visitComment) {
    this.fullName = fullName;
    this.visitPurpose = visitPurpose;
    this.visitComment = visitComment;
  }


    // form builder

    createWrapper() {
    
    //creating div-wrapper for form

    const container = document.createElement('div');
    container.classList.add('form-wrapper')
    document.getElementById('modal').appendChild(container);

    //creating form

    const form = document.createElement('form')
    form.classList.add("form")
    container.appendChild(form)

    // creating input for FullName

    const inputFullName = document.createElement("input")
    inputFullName.classList.add("inputData")
    inputFullName.placeholder = "Ф.И.О"
    form.appendChild(inputFullName)

    // creating input for Visit Purpose  

    const inputVisitPurpose = document.createElement("input")
    inputVisitPurpose.classList.add("inputData")
    inputVisitPurpose.placeholder = "Цель визита"
    form.appendChild(inputVisitPurpose)

    //creating text area for comments

    const textAreaComment = document.createElement("textArea")
    textAreaComment.classList.add("inputData")
    textAreaComment.placeholder = "Вы можете оставить свой комментарий здесь"
    form.appendChild(textAreaComment)

    // button "Create Visit" builder

    const createVisitButton = document.createElement('button')
    createVisitButton.classList.add('create-visit-button')
    createVisitButton.innerText = "Create"
    container.appendChild(createVisitButton)
    

    // hiding previous modal 
    modalContent.style.display = 'none'; 

    const doctorCardiolog = document.querySelector('#cardiologId');
    const doctorTherapist = document.querySelector('#therapistId');
    const doctorDantist = document.querySelector('#dantistId');


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

class therapist extends Visit {
  constructor(fullName, visitPurpose, visitComment, pressure, BMI, diseases) {
    super(fullName, visitPurpose)
    this.pressure = pressure;
    this.BMI = BMI;
    this.diseases = diseases;
  }


  render(element) {
    const wrapper = this.createWrapper();
    const fullName = document.createElement('input');
    const visitPurpose = document.createElement('input')
    const visitComment = document.createElement("textArea")

  }

}

const pacient = new therapist("Pupkin Ivan Ivanich", "Pain", "some info", "420:190", 65, ["bronhit", "Aritmiyah", "infarct"])

console.log(pacient);
console.log(JSON.stringify(pacient));

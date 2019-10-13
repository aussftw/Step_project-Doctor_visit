//=========================== modal ===========================//

const modalButton = document.getElementById("openModalButton")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("closeModal")
const chooseDoctor = document.getElementById("chooseDoctorId")

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

chooseDoctor.addEventListener("click", (e) => {
 pacient.createWrapper()
})



// doctorClass.addEventListener("click", (e) => {
//   if (doctorClass.value == event.target.value) {
//     selectedDoctor = event.targert.value
//   } else {
//     return false
//   }
// })


// _____________________functional_____________


class Visit {
  constructor(fullName, visitPurpose) {
    this.fullName = fullName;
    this.visitPurpose = visitPurpose;
  }
  createWrapper() {
    const container = document.createElement('div');
    const doctorCardiolog = document.querySelector('#cardiologId');
    const doctorDherapist = document.querySelector('#therapistId');
    const doctorDantist = document.querySelector('#dantistId');
    return console.log(doctorCardiolog,doctorDherapist,doctorDantist);
    
    doctorClass.addEventListener("click", (e) => {
      if (doctorClass.value == event.target.value) {
        selectedDoctor = event.targert.value
      } else {
        return false
      }
    })

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
  constructor(fullName, visitPurpose, pressure, BMI, diseases) {
    super(fullName, visitPurpose)
    this.pressure = pressure;
    this.BMI = BMI;
    this.diseases = diseases;
  }
  render(element) {
    const wrapper = this.createWrapper();
    const fullName = document.createElement('input');
    const visitPurpose = document.createElement('input')

  }

}

const pacient = new therapist("Pupkin Ivan Ivanich", "Pain", "420:190", 65, ["bronhit", "Aritmiyah", "infarct"])

console.log(pacient);
console.log(JSON.stringify(pacient));

// 
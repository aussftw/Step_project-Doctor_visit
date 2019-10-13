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

// chooseDoctor.addEventListener("click", (e) => {
//  pacient.createWrapper()
// })

chooseDoctor.addEventListener("change", (event) => {
  console.log("keks");
  pacient.createWrapper()
  if (event.target.value === 'Кардиолог') {
    console.log("CORDIOLIG");
  } else if (event.target.value === 'Терапевт<') {
    console.log("THERAPIST");
  } else if (event.target.value === 'Стоматолог') {
    console.log("dantistIdT");
  }
})



// doctorClass.addEventListener("click", (e) => {
//   if (doctorClass.value == event.target.value) {
//     selectedDoctor = event.targert.value
//   } else {
//     return false
//   }
// })
const clickBtn = document.createElement('button');
clickBtn.innerText = 'Click me';
document.querySelector('script').before(clickBtn);



// const rectangle = document.createElement("div");
// rectangle.classList.add("rectangle");
// rectangle.style.backgroundColor = "red";
// rectangle.style.width = "100px";
// rectangle.style.height = "100px";
// document.querySelector('script').before(rectangle);

// var iDiv = document.createElement('div');
// iDiv.id = 'block';
// iDiv.className = 'block';
// iDiv.style.width = "100px";
// iDiv.style.height = "100px";
// iDiv.style.backgroundColor = "black";
// document.getElementsByTagName('body')[0].appendChild(iDiv);


// _____________________functional_____________


class Visit {
  constructor(fullName, visitPurpose) {
    this.fullName = fullName;
    this.visitPurpose = visitPurpose;
  }
  createWrapper() {
    // const container = document.createElement("div");
    // container.classList.add("container");
    // container.style.backgroundColor = "red";
    // container.style.width = "100px";
    // container.style.height = "100px";
    // document.querySelector('modal').before(container)

    var container = document.createElement('div');
    container.id = 'block';
    container.className = 'block';
    container.style.width = "100px";
    container.style.height = "100px";
    container.style.backgroundColor = "black";
    document.getElementById('modal').appendChild(container);

    modalContent.style.display = 'none'; 


    return console.log('3 Доктора');

    const doctorCardiolog = document.querySelector('#cardiologId');
    const doctorTherapist = document.querySelector('#therapistId');
    const doctorDantist = document.querySelector('#dantistId');

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
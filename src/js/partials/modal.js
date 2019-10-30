import axios from "axios"
import { selectDoctor } from "../index"
const modalButton = document.getElementById("openModalButton")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("closeModal")
const modalContent = document.querySelector("#modalContentId")
const form = document.querySelector(".form-wrapper")
let isLogin = true
// renderBoard()

modalButton.addEventListener("click", e => {
  if (isLogin) {
    initDoctorsSelector()
  } else {
    initLogInForm()
  }
  $(".ui.modal").modal("show")
  $(".ui.dropdown").dropdown()
})

closeModal.addEventListener("click", e => {
  $(".ui.modal").modal("hide")
  modalContent.style.display = "block"
  const form = (document.querySelector(".form-wrapper").innerHTML = "")
})

function login() {
  const data = {}
  const loginForm = document.querySelector(".login-form")
  loginForm.addEventListener("submit", e => {
    e.preventDefault()
    serialize()
  })
}

function initDoctorsSelector() {
  $(".ui.modal").modal("show")
  modalContent.innerHTML = `
            <select name="choose-doctor" id="chooseDoctorId" class="ui dropdown">
            <option value="" disabled selected class="modal-option">Select your visit</option>
            <option value="Кардиолог" id='cardiologist' data-type="cardiologist" class="modal-option">Кардиолог</option>
            <option value="Стоматолог" id='dentist' data-type="dentist" class="modal-option">Стоматолог</option>
            <option value="Терапевт" id='therapist' data-type="therapist" class="modal-option">Терапевт</option>
        </select>
    `
  $(".ui.dropdown").dropdown()
  selectDoctor()
}
function initLogInForm() {
  $(".ui.modal").modal("show")
  modalContent.innerHTML = `
    <form class="ui form login-form">
    <input type="email" placeholder="Email" name="email" class="inputData" reqired="true">
    <input type="password" placeholder="Пароль" name="password" class="inputData" reqired="true">
    <button type="submit" class="login_btn ui blue button large">login</button>
    </form>
    `
  login()
}

function serialize() {
  const data = {}
  const inputData = document.querySelectorAll(".inputData")
  inputData.forEach(elem => {
    data[elem.name] = elem.value
  })
  const authOptions = {
    method: "POST",
    url: "http://cards.danit.com.ua/login",
    data: JSON.stringify(data)
  }

  axios(authOptions)
    .then(function(response) {
      // console.log(response.data);
      if (response.data.token === "569bc2174da3") {
        $(".ui.modal").modal("hide")
        modalButton.innerText = "Create Visit"
        // renderBoard()
        return (isLogin = true)
      }
    })
    .catch(function(error) {
      console.log(error)
    })
}

// function renderBoard() {
//   const board = document.querySelector(".board")
//   board.innerHTML = `
//       <div class="container">
//         <h1> Hello John Doe</h1>
//         <form action="">
//             <div class="ui action input">
//                 <input type="text" placeholder="Search...">
//                 <select class="ui compact selection dropdown">
//                     <option selected="" value="all">All</option>
//                     <option value="articles">Open</option>
//                     <option value="products">Done</option>
//                 </select>
//                 <select class="ui compact selection dropdown">
//                     <option selected=""  value="all">All</option>
//                     <option value="articles">High</option>
//                     <option value="products">Normal</option>
//                     <option value="products">Low</option>
//                 </select>
//                 <div type="submit" class="ui button">Search</div>
//             </div>
//         </form>

//         <div class="cards-container ui segment">
//             <p class="empty-container-text">No items have been added</p>
//             <p class="empty-container-text">No items have been added</p>
//             <p class="empty-container-text">No items have been added</p>
//             <p class="empty-container-text">No items have been added</p>
//             <p class="empty-container-text">No items have been added</p>
//         </div>
//     </div>
//   `
// }

export { modal }
export { modalContent }

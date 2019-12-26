import axios from "axios"
import { selectDoctor } from "../index"
import { login } from "./login.js"
import { getForm } from "./filters.js"
import { renderCards } from "./renderCards"
import { renderBoard } from "../partials/board.js"

const modalButton = document.getElementById("openModalButton")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("closeModal")
const modalContent = document.querySelector("#modalContentId")
const token = "569bc2174da3"

modalButton.addEventListener("click", e => {
  if (login.isLogin) {
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

function Autorisation() {
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
    <input type="email" placeholder="Email" name="email" class="inputData" value="shagronaus@gmail.com" reqired="true">
    <input type="password" placeholder="Пароль" name="password" class="inputData" value="" reqired="true">
    <button type="submit" class="login_btn ui blue button large">login</button>
    </form>
    `
  Autorisation()
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
      if (response.data.token === "569bc2174da3") {
        $(".ui.modal").modal("hide")
        modalButton.innerText = "Create Visit"
        renderBoard()
        getForm()
        getData()
        return (login.isLogin = true)
      }
    })
    .catch(function(error) {
      console.log(error)
    })
}

export function getData() {
  axios
    .get("http://cards.danit.com.ua/cards?token=569bc2174da3", {
      headers: {
        Authorization: "Bearer " + token
      }
    })
    .then(response => {
      return response
    })
    .then(response => {
      renderCards(response.data)
    })
    .catch(error => {
      console.log(error)
    })
}

export { modal }
export { modalContent }

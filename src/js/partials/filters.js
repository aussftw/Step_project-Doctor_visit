import axios from "axios"
import { renderCards } from "./renderCards"

let priority
let status
let inputValue
let newArray = {}

function getForm() {
  const filterForm = document.getElementById("filterForm")

  const prioritySelect = document.getElementById("prioritySelect")
  const statusSelect = document.getElementById("statusSelect")
  const textArea = document.getElementById("textArea")

  filterForm.addEventListener("submit", e => {
    e.preventDefault()
    priority = prioritySelect.value
    status = statusSelect.value
    inputValue = textArea.value
    getDataforFilter()
  })
}

function getDataforFilter() {
  const token = "569bc2174da3"
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
      console.log(response.data)
      filterData(response.data)
    })
    .then(() => {
      renderCards(newArray)
    })
    .catch(error => {
      console.log(error)
    })
}
function filterData(response) {
  response.forEach(item => console.log(item.priority))
  newArray = response.filter(item => {
    return (
      (item.priority === priority || priority === "all") &&
      (item.status === status || status === "all") &&
      (item.description === inputValue || inputValue === "")
    )
  })
}

export { getForm }

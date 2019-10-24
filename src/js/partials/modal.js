const modalButton = document.getElementById("openModalButton")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("closeModal")
const modalContent = document.querySelector("#modalContentId")

modalButton.addEventListener("click", e => {
  modal.style.display = "block"
})

closeModal.addEventListener("click", e => {
  modal.style.display = "none"
})

window.addEventListener("click", e => {
  // debug required
  if (e.tartget == modal) {
    modal.style.display = "none"
    console.log("click")
  }
})

export { modal }
export { modalContent }

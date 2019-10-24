const modalButton = document.getElementById("openModalButton")
const modal = document.getElementById("modal")

const closeModal = document.getElementById("closeModal")
const modalContent = document.querySelector("#modalContentId")

modalButton.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none"
    console.log(e.target)
  }
})

modalButton.addEventListener("click", e => {
  modal.style.display = "block"
})

closeModal.addEventListener("click", e => {
  modal.style.display = "none"
})

export { modal }
export { modalContent }

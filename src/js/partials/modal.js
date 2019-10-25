const modalButton = document.getElementById("openModalButton")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("closeModal")
const modalContent = document.querySelector("#modalContentId")


modalButton.addEventListener("click", e => {
  // modal.style.display = "block"
  $('.ui.modal').modal('show');
})

closeModal.addEventListener("click", e => {
  // modal.style.display = "none"
  $('.ui.modal').modal('hide');
})

export { modal }
export { modalContent }

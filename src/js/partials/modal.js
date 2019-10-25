const modalButton = document.getElementById("openModalButton")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("closeModal")
const modalContent = document.querySelector("#modalContentId")
const form = document.querySelector(".form-wrapper");


modalButton.addEventListener("click", e => {
  $('.ui.modal').modal('show');
  $('.ui.dropdown').dropdown();
})

closeModal.addEventListener("click", e => {
  $('.ui.modal').modal('hide');
  modalContent.style.display = "block";
  const form = document.querySelector(".form-wrapper").innerHTML = '';
});

export { modal }
export { modalContent }



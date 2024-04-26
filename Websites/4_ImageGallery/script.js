let modalImg = document.getElementById("modal-image");
let captionText = document.getElementById("caption");
let modal = document.getElementById("modal");

function openModal(img) {
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}
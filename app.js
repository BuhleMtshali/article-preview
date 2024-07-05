function showContent() {
  document.querySelector("#hidden").classList.toggle("show");
}

let shareIconElement = document.querySelector("#share-icon");
shareIconElement.addEventListener("click", showContent);

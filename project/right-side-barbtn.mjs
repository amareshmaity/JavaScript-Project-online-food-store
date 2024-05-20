const sideBtn = document.querySelectorAll(".list");
const cardContainer = document.querySelectorAll(".foodSec");

sideBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    console.log(this.childNodes[3].textContent);
    let btnText = this.childNodes[3].textContent
      .toLowerCase()
      .replaceAll(" ", "");

    cardContainer.forEach((cardSec) => {
      let cardSecId = cardSec.id;

      if (btnText == cardSecId) {
        cardSec.classList.remove("hide");
      } else {
        cardSec.classList.add("hide");
      }
    });
  });
});

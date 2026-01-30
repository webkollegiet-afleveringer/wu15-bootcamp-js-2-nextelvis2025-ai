var accordionBtn = document.getElementsByClassName("accordion-btn");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    var container = this.nextElementSibling;
    if (container.style.display === "block") {
      container.style.display = "none";
    } else {
      container.style.display = "block";
    }
  });
}
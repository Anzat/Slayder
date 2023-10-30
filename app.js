let slides = document.querySelectorAll(".slide");
console.log(slides);

for (let slide of slides) {
  slide.addEventListener("click", function () {
    clearClassList();
    slide.classList.add("active");
  });
}

function clearClassList() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

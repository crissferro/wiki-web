/* sirve para que los card tengan una animacion */
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mousemove", rotate);
  card.addEventListener("mouseout", stopRotate);
});

function rotate(event) {
  const card = this;
  const halfHeight = card.offsetHeight / 2;
  const halfWidth = card.offsetWidth / 2;
  card.style.transform = "rotateX(" + -(event.offsetY - halfHeight) / 5 + "deg) rotateY(" + (event.offsetX - halfWidth) / 5 + "deg)";
}

function stopRotate(event) {
  const card = this;
  card.style.transform = "rotate(0)";
}

/* se utiliza para que tome el año automaticamente en el footer */
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;